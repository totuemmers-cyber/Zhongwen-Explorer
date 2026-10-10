// Prepares the next comprehension authoring batch (c001, c002 …): takes the next unwritten units of the unit plan
// (scripts/comprehension/plan.json) in level order and writes packets of 4 with task, descriptor, topics and length
// bounds, plus BRIEF.md (REVIEW.md for HSK 1–4) and, for HSK 1–3, the list of words allowed in the texts.
// Usage: node scripts/comprehension/prepare.cjs <batch> [--count 16] [--level HSK1]
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const { lengthBounds } = require('../audit-comprehension.cjs');
const units = require('./units.cjs');

const args = process.argv.slice(2);
const batch = 'c' + String(Number(args[0])).padStart(3, '0');
if (!/^c\d{3}$/.test(batch)) throw new Error('Usage: prepare.cjs <batch number> [--count 16] [--level HSK1]');
const option = name => { const i = args.indexOf('--' + name); return i === -1 ? null : args[i + 1]; };
const COUNT = Number(option('count') || 16);
const ONLY_LEVEL = option('level');
const PACKET = 4;

const dir = path.join(enrich.WORK, batch);
if (fs.existsSync(dir)) throw new Error(batch + ' already exists: ' + dir);
const openFile = path.join(enrich.WORK, 'open-batches.json');
const open = enrich.readJson(openFile, {});
const reserved = new Set(Object.values(open).flat());

const written = new Set(units.loadAll().map(u => u.id));
const order = require('./plan.json').filter(p => !written.has(p.id) && !reserved.has(p.id) && (!ONLY_LEVEL || p.level === ONLY_LEVEL));
if (!order.length) { console.log('Nothing left to prepare' + (ONLY_LEVEL ? ' for ' + ONLY_LEVEL : '') + '.'); process.exit(0); }
// A batch never mixes review policies (second reviewer for HSK 1–4 only).
const withReview = enrich.reviewedLevel(order[0].level);
const picked = order.filter(p => enrich.reviewedLevel(p.level) === withReview).slice(0, COUNT);

const allowed = { HSK1: 2, HSK2: 3, HSK3: 4 };
const cards = picked.map(p => Object.assign({}, p, {
  hanCharacters: lengthBounds(p.level, p.skill),
  vocabularyLimit: allowed[p.level] ? 'Wörter bis HSK ' + allowed[p.level] + ' (siehe allowed-words-' + p.level + '.txt)' : null
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
// Allowed words for the beginner levels: the syllabus words up to one level above, with pinyin and meaning.
const vocab = enrich.loadSources().flatMap(s => s.items);
const syllabus = enrich.syllabusLevels();
for (const level of new Set(cards.map(c => c.level))) {
  if (!allowed[level]) continue;
  const words = [...syllabus].filter(([, n]) => n <= allowed[level]).map(([word, n]) => {
    const item = vocab.find(v => v.word === word);
    return word + '\t' + (item ? item.pinyin : '') + '\tHSK' + n + '\t' + (item ? item.meaning : '');
  });
  fs.writeFileSync(path.join(dir, 'allowed-words-' + level + '.txt'), words.join('\n') + '\n');
}
const fill = template => fs.readFileSync(path.join(__dirname, template), 'utf8')
  .split('{{BATCH}}').join(batch).split('{{DIR}}').join(dir.replace(/\\/g, '/')).split('{{ROOT}}').join(enrich.ROOT.replace(/\\/g, '/'));
fs.writeFileSync(path.join(dir, 'BRIEF.md'), fill('BRIEF.template.md'));
if (withReview) fs.writeFileSync(path.join(dir, 'REVIEW.md'), fill('REVIEW.template.md'));
fs.writeFileSync(path.join(dir, 'batch.json'), JSON.stringify({ batch, kind: 'comprehension', policy: withReview ? 'author+review' : 'author', packets, ids: cards.map(c => c.id), created: new Date().toISOString() }, null, 1));
open[batch] = cards.map(c => c.id);
fs.writeFileSync(openFile, JSON.stringify(open, null, 1));
const levels = {};
cards.forEach(c => { levels[c.level + ' ' + c.skill] = (levels[c.level + ' ' + c.skill] || 0) + 1; });
console.log(batch + ': ' + cards.length + ' units in ' + packets.length + ' packets (' + JSON.stringify(levels) + '), policy ' +
  (withReview ? 'author+review' : 'author') + '. ' + dir);
