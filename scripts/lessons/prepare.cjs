// Prepares a lesson authoring batch (l001, l002 …): takes the next proposals from scripts/lessons/proposals.json that
// have an id and are neither in grammar-lessons.js nor reserved by an open batch, and writes packets of 3 lessons with
// the full data of their grammar points, related existing lessons and the word limit, plus BRIEF.md and REVIEW.md
// (HSK 1–4: author + independent review) or PROOFREAD.md (HSK 5+: author + proofreading pass).
// Usage: node scripts/lessons/prepare.cjs <batch> [--group HSK1-4|HSK5-6|HSK5|HSK6] [--count 40]
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const grammarCommon = require('../grammar/common.cjs');
const L = require('./common.cjs');

const args = process.argv.slice(2);
const batch = 'l' + String(Number(args[0])).padStart(3, '0');
if (!/^l\d{3}$/.test(batch)) throw new Error('Usage: prepare.cjs <batch number> [--group HSK1-4|HSK5-6|HSK5|HSK6] [--count 40]');
const option = name => { const i = args.indexOf('--' + name); return i === -1 ? null : args[i + 1]; };
const COUNT = Number(option('count') || 40);
const GROUP = option('group');
const PACKET = 3;
const GROUPS = { 'HSK1-4': ['HSK1–4 (Lücken)'], 'HSK5-6': ['HSK5', 'HSK6'], HSK5: ['HSK5'], HSK6: ['HSK6'], 'HSK7-9': ['HSK7-9'] };
if (GROUP && !GROUPS[GROUP]) throw new Error('--group must be one of ' + Object.keys(GROUPS).join(', '));

const dir = path.join(enrich.WORK, batch);
if (fs.existsSync(dir)) throw new Error(batch + ' already exists: ' + dir);
const openFile = path.join(enrich.WORK, 'open-batches.json');
const open = enrich.readJson(openFile, {});
const reserved = new Set(Object.values(open).flat());

const points = grammarCommon.loadGrammar();
const byId = new Map(points.map(p => [p.id, p]));
const lessons = L.loadLessons();
const existing = new Set(lessons.map(l => l.id));
const proposals = require('./proposals.json').lessons
  .filter(p => p.id && !existing.has(p.id) && !reserved.has(p.id) && (!GROUP || GROUPS[GROUP].includes(p.group)));
if (!proposals.length) { console.log('Nothing left to prepare' + (GROUP ? ' for ' + GROUP : '') + '.'); process.exit(0); }

const levelOf = p => L.levelFrom((p.main || p.grammarIds).filter(id => byId.has(id)), byId).level;
const maxRank = level => Math.max(...L.levelRanks(level));
// A batch never mixes review policies: independent review for HSK 1–4, a proofreading pass above.
const withReview = maxRank(levelOf(proposals[0])) <= 4;
const picked = proposals.filter(p => (maxRank(levelOf(p)) <= 4) === withReview).slice(0, COUNT);
const policy = withReview ? 'author+review' : 'author+proofread';

const pointData = id => {
  const p = byId.get(id);
  if (!p) throw new Error('Unknown grammar point ' + id);
  return {
    id: p.id, pattern: p.pattern, level: p.level, kind: p.kind, category: p.category,
    syllabus: p.syllabus ? [p.syllabus.categoryName, p.syllabus.item].filter(Boolean).join('/') + ': ' + p.syllabus.content : null,
    meaning: p.meaning || null, formation: p.formation || null, explanation: p.explanation || null, notes: p.notes || null,
    examples: (p.examples || []).map(e => ({ chinese: e.chinese, pinyin: e.pinyin, german: e.german })),
    related: p.related || []
  };
};
// Existing lessons that touch the same grammar points or their related points: to link with [[lesson:…]] and not to
// repeat what they teach.
function relatedLessons(ids) {
  const near = new Set(ids.flatMap(id => [id, ...((byId.get(id) || {}).related || [])]));
  return lessons.map(l => ({ l, shared: (l.grammarIds || []).filter(id => near.has(id)) }))
    .filter(x => x.shared.length).sort((a, b) => b.shared.length - a.shared.length).slice(0, 6)
    .map(({ l, shared }) => ({ id: l.id, title: l.title, level: l.level, sharedGrammarIds: shared }));
}
const LIMIT = { 1: 2, 2: 3, 3: 4 };
const cards = picked.map(p => {
  const level = levelOf(p);
  const limit = LIMIT[maxRank(level)] || null;
  return {
    id: p.id, number: p.number, level, main: p.main || p.grammarIds.slice(0, 1), grammarIds: p.grammarIds,
    titleDe: p.titleDe, titleZh: p.titleZh, goal: p.goal, priority: p.priority || null,
    vocabularyLimit: limit ? 'Beispielwörter bis HSK ' + limit + ' (allowed-words-HSK' + limit + '.txt); darüber nur die Wörter der eigenen Grammatikpunkte' +
      (limit <= 3 ? ' — Verstöße sind Fehler' : ' — Verstöße sind Warnungen') : null,
    points: p.grammarIds.map(pointData),
    relatedLessons: relatedLessons(p.grammarIds)
  };
});

fs.mkdirSync(path.join(dir, 'input'), { recursive: true });
fs.mkdirSync(path.join(dir, 'authored'), { recursive: true });
fs.mkdirSync(path.join(dir, 'reviewed'), { recursive: true });
const packets = [];
for (let i = 0; i < cards.length; i += PACKET) {
  const name = 'p' + String(packets.length + 1).padStart(2, '0');
  fs.writeFileSync(path.join(dir, 'input', name + '.json'), JSON.stringify(cards.slice(i, i + PACKET), null, 1));
  packets.push(name);
}
// Allowed words for the beginner levels: the syllabus words up to the limit, with pinyin and meaning.
const vocab = enrich.loadSources().flatMap(s => s.items);
const syllabus = enrich.syllabusLevels();
for (const limit of new Set(cards.map(c => LIMIT[maxRank(c.level)]).filter(Boolean))) {
  const words = [...syllabus].filter(([, n]) => n <= limit).map(([word, n]) => {
    const item = vocab.find(v => v.word === word);
    return word + '\t' + (item ? item.pinyin : '') + '\tHSK' + n + '\t' + (item ? item.meaning : '');
  });
  fs.writeFileSync(path.join(dir, 'allowed-words-HSK' + limit + '.txt'), words.join('\n') + '\n');
}
const fill = template => fs.readFileSync(path.join(__dirname, template), 'utf8')
  .split('{{BATCH}}').join(batch).split('{{DIR}}').join(dir.replace(/\\/g, '/')).split('{{ROOT}}').join(enrich.ROOT.replace(/\\/g, '/'));
fs.writeFileSync(path.join(dir, 'BRIEF.md'), fill('BRIEF.template.md'));
fs.writeFileSync(path.join(dir, withReview ? 'REVIEW.md' : 'PROOFREAD.md'), fill(withReview ? 'REVIEW.template.md' : 'PROOFREAD.template.md'));
fs.writeFileSync(path.join(dir, 'batch.json'), JSON.stringify({ batch, kind: 'lessons', policy, packets, ids: cards.map(c => c.id), created: new Date().toISOString() }, null, 1));
open[batch] = cards.map(c => c.id);
fs.writeFileSync(openFile, JSON.stringify(open, null, 1));
const levels = {};
cards.forEach(c => { levels[c.level] = (levels[c.level] || 0) + 1; });
console.log(batch + ': ' + cards.length + ' lessons in ' + packets.length + ' packets (' + JSON.stringify(levels) + '), policy ' + policy + '. ' + dir);
