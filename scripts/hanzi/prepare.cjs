// Prepares the next hanzi enrichment batch (h001, h002 …): picks unreviewed characters in level order and
// writes packets of 25 cards with their evidence and example words, plus BRIEF.md (REVIEW.md for HSK 1–4).
// Usage: node scripts/hanzi/prepare.cjs <batch> [--count 250] [--level HSK1]
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const hanzi = require('./common.cjs');

const args = process.argv.slice(2);
const batch = 'h' + String(Number(args[0])).padStart(3, '0');
if (!/^h\d{3}$/.test(batch) || batch === 'hNaN') throw new Error('Usage: prepare.cjs <batch number> [--count 250] [--level HSK1]');
const option = name => { const i = args.indexOf('--' + name); return i === -1 ? null : args[i + 1]; };
const COUNT = Number(option('count') || 250);
const ONLY_LEVEL = option('level');
const PACKET = 25;

const dir = path.join(enrich.WORK, batch);
if (fs.existsSync(dir)) throw new Error(batch + ' already exists: ' + dir);
const openFile = path.join(enrich.WORK, 'open-batches.json');
const open = enrich.readJson(openFile, {});
const reserved = new Set(Object.values(open).flat());

const entries = hanzi.loadHanzi();
const order = entries.filter(e => !e.review && !reserved.has(e.hanzi) && (!ONLY_LEVEL || e.level === ONLY_LEVEL));
const first = order[0];
if (!first) { console.log('Nothing left to prepare' + (ONLY_LEVEL ? ' for ' + ONLY_LEVEL : '') + '.'); process.exit(0); }
// A batch never mixes review policies (second reviewer for HSK 1–4 only).
const withReview = enrich.reviewedLevel(first.level);
const picked = order.filter(e => enrich.reviewedLevel(e.level) === withReview).slice(0, COUNT);

const vocab = new Map(enrich.loadSources().flatMap(s => s.items).map(item => [item.id, item]));
const cards = picked.map(e => ({
  id: e.hanzi,
  hanzi: e.hanzi,
  level: e.level,
  writingLevel: e.writingLevel || null,
  traditional: e.traditional,
  readings: e.readings,
  meaningStatus: e.meaningStatus,
  strokes: e.strokes,
  primaryRadical: e.primaryRadical,
  radicalForm: e.radicalForm || null,
  components: e.components,
  notes: e.notes || null,
  words: (e.words || []).map(id => vocab.get(id)).filter(Boolean).map(w => w.word + ' ' + w.pinyin + ' – ' + w.meaning),
  evidence: e.evidence
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
  .split('{{BATCH}}').join(batch).split('{{DIR}}').join(dir.replace(/\\/g, '/')).split('{{ROOT}}').join(enrich.ROOT.replace(/\\/g, '/'));
fs.writeFileSync(path.join(dir, 'BRIEF.md'), fill('BRIEF.template.md'));
if (withReview) fs.writeFileSync(path.join(dir, 'REVIEW.md'), fill('REVIEW.template.md'));
fs.writeFileSync(path.join(dir, 'batch.json'), JSON.stringify({ batch, kind: 'hanzi', policy: withReview ? 'author+review' : 'author', packets, ids: cards.map(c => c.id), created: new Date().toISOString() }, null, 1));
open[batch] = cards.map(c => c.id);
fs.writeFileSync(openFile, JSON.stringify(open, null, 1));

const levels = {};
cards.forEach(c => { levels[c.level] = (levels[c.level] || 0) + 1; });
console.log(batch + ': ' + cards.length + ' hanzi in ' + packets.length + ' packets (' + JSON.stringify(levels) + '), policy ' +
  (withReview ? 'author+review' : 'author') + '. ' + dir);
