// Prepares the next enrichment batch: picks unreviewed entries in campaign order and writes
// packets of 25 cards with dictionary evidence, plus BRIEF.md (and REVIEW.md for HSK 1–4).
// Usage: node scripts/enrich/prepare.cjs <batch> [--count 250] [--level HSK1]
const fs = require('fs');
const path = require('path');
const common = require('./common.cjs');
const dict = require('../hsk2025/dictionaries.cjs');

const args = process.argv.slice(2);
const batch = 'b' + String(Number(args[0])).padStart(3, '0');
if (!/^b\d{3}$/.test(batch) || batch === 'bNaN') throw new Error('Usage: prepare.cjs <batch number> [--count 250] [--level HSK1]');
const option = name => { const i = args.indexOf('--' + name); return i === -1 ? null : args[i + 1]; };
const COUNT = Number(option('count') || 250);
const ONLY_LEVEL = option('level');
const PACKET = 25;

const dir = path.join(common.WORK, batch);
if (fs.existsSync(dir)) throw new Error(batch + ' already exists: ' + dir);
const openFile = path.join(common.WORK, 'open-batches.json');
const open = common.readJson(openFile, {});
const reserved = new Set(Object.values(open).flat());

const sources = common.loadSources();
const order = common.campaignOrder(sources)
  .filter(({ item }) => !item.review && !reserved.has(item.id) && (!ONLY_LEVEL || item.level === ONLY_LEVEL));
// A batch never mixes review policies (second reviewer for HSK 1–4 only).
const first = order[0];
if (!first) { console.log('Nothing left to prepare' + (ONLY_LEVEL ? ' for ' + ONLY_LEVEL : '') + '.'); process.exit(0); }
const withReview = common.reviewedLevel(first.item.level);
const picked = order.filter(({ item }) => common.reviewedLevel(item.level) === withReview).slice(0, COUNT);

const cedict = dict.loadCedict();
const handedict = dict.loadHandedict();
const Pinyin = common.loadPinyin();
const numeric = (pinyin, word) => Pinyin.toNumeric(String(pinyin || '').split('/')[0], word).toLowerCase();
const looseKey = key => key.replace(/[1-5]/g, '');

function evidence(item) {
  const key = numeric(item.pinyin, item.word);
  const pick = list => (list || []).filter(e => e.key === key || looseKey(e.key) === looseKey(key));
  const cedictSenses = pick(cedict.get(item.word)).map(e => '[' + e.pinyin + '] ' + e.senses.filter(s => !/^CL:/.test(s)).slice(0, 8).join('; '));
  const handedictSenses = pick(handedict.get(item.word)).map(e => '[' + e.pinyin + '] ' + e.senses.slice(0, 6)
    .map(s => s.split(/;\s*Bsp\.:/)[0]).join(' / ').slice(0, 300));
  const otherReadings = (cedict.get(item.word) || []).filter(e => !pick([e]).length).map(e => e.pinyin);
  return { cedict: cedictSenses, handedict: handedictSenses, otherReadings: Array.from(new Set(otherReadings)) };
}

const allowedFor = level => ({ HSK1: 'HSK 1–2', HSK2: 'HSK 1–3', HSK3: 'HSK 1–4' })[level] || null;
const cards = picked.map(({ item, file }) => ({
  id: item.id,
  word: item.word,
  pinyin: item.pinyin,
  pinyinSpoken: item.pinyinSpoken,
  pinyinAlt: item.pinyinAlt,
  traditional: item.traditional,
  level: item.level,
  levelUses: item.levelUses,
  syllabusPos: item.syllabus ? item.syllabus.pos : null,
  type: item.type,
  category: item.category,
  meaning: item.meaning,
  meaningStatus: item.meaningStatus,
  measureWords: item.measureWords,
  variants: item.variants,
  notes: item.notes,
  examples: item.examples || [],
  exampleVocabulary: allowedFor(item.level),
  source: file,
  evidence: evidence(item)
}));

fs.mkdirSync(path.join(dir, 'input'), { recursive: true });
fs.mkdirSync(path.join(dir, 'authored'), { recursive: true });
if (withReview) fs.mkdirSync(path.join(dir, 'reviewed'), { recursive: true });
const packets = [];
for (let i = 0; i < cards.length; i += PACKET) {
  const name = 'p' + String(packets.length + 1).padStart(2, '0');
  fs.writeFileSync(path.join(dir, 'input', name + '.json'), JSON.stringify(cards.slice(i, i + PACKET), null, 1));
  packets.push(name);
}
const fill = template => fs.readFileSync(path.join(__dirname, template), 'utf8')
  .split('{{BATCH}}').join(batch).split('{{DIR}}').join(dir.replace(/\\/g, '/')).split('{{ROOT}}').join(common.ROOT.replace(/\\/g, '/'));
fs.writeFileSync(path.join(dir, 'BRIEF.md'), fill('BRIEF.template.md'));
if (withReview) fs.writeFileSync(path.join(dir, 'REVIEW.md'), fill('REVIEW.template.md'));
fs.writeFileSync(path.join(dir, 'batch.json'), JSON.stringify({ batch, policy: withReview ? 'author+review' : 'author', packets, ids: cards.map(c => c.id), created: new Date().toISOString() }, null, 1));
open[batch] = cards.map(c => c.id);
fs.writeFileSync(openFile, JSON.stringify(open, null, 1));

const levels = {};
cards.forEach(c => { levels[c.level] = (levels[c.level] || 0) + 1; });
console.log(batch + ': ' + cards.length + ' cards in ' + packets.length + ' packets (' + JSON.stringify(levels) + '), policy ' +
  (withReview ? 'author+review' : 'author') + ', drafts ' + cards.filter(c => c.meaningStatus === 'draft').length + '. ' + dir);
