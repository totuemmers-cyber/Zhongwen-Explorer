// Prepares the next grammar enrichment batch (g001, g002 …): picks unreviewed grammar points in syllabus order and
// writes packets of 20 with the syllabus context, the old draft content and candidate related points, plus BRIEF.md
// (REVIEW.md for HSK 1–4).
// Usage: node scripts/grammar/prepare.cjs <batch> [--count 200] [--level HSK1]
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const grammar = require('./common.cjs');

const args = process.argv.slice(2);
const batch = 'g' + String(Number(args[0])).padStart(3, '0');
if (!/^g\d{3}$/.test(batch)) throw new Error('Usage: prepare.cjs <batch number> [--count 200] [--level HSK1]');
const option = name => { const i = args.indexOf('--' + name); return i === -1 ? null : args[i + 1]; };
const COUNT = Number(option('count') || 200);
const ONLY_LEVEL = option('level');
const PACKET = 20;

const dir = path.join(enrich.WORK, batch);
if (fs.existsSync(dir)) throw new Error(batch + ' already exists: ' + dir);
const openFile = path.join(enrich.WORK, 'open-batches.json');
const open = enrich.readJson(openFile, {});
const reserved = new Set(Object.values(open).flat());

const all = grammar.loadGrammar();
const order = all.filter(e => !e.review && !reserved.has(e.id) && (!ONLY_LEVEL || e.level === ONLY_LEVEL));
const first = order[0];
if (!first) { console.log('Nothing left to prepare' + (ONLY_LEVEL ? ' for ' + ONLY_LEVEL : '') + '.'); process.exit(0); }
// A batch never mixes review policies (second reviewer for HSK 1–4 only).
const withReview = enrich.reviewedLevel(first.level);
const picked = order.filter(e => enrich.reviewedLevel(e.level) === withReview).slice(0, COUNT);

// Candidate related points: the same syllabus item at other stages (比较句1 … 比较句5), points sharing a core word,
// and the old related links. The author picks the ones that really help.
const tokensOf = new Map(all.map(e => [e.id, grammar.requiredTokens(e).flat()]));
function candidates(entry) {
  const stem = entry.syllabus && entry.syllabus.item ? entry.syllabus.item.replace(/\d+$/, '') : null;
  const own = tokensOf.get(entry.id).filter(t => t.length > 1 || entry.kind === 'word');
  const scored = [];
  for (const other of all) {
    if (other.id === entry.id) continue;
    let score = 0;
    if ((entry.related || []).includes(other.id)) score += 5;
    if (stem && other.syllabus && other.syllabus.item && other.syllabus.item.replace(/\d+$/, '') === stem) score += 3;
    if (own.some(t => tokensOf.get(other.id).includes(t) || other.pattern.includes(t))) score += 2;
    if (score) scored.push({ score, other });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, 12)
    .map(({ other }) => other.id + ' — ' + other.level + ' — ' + (other.meaning || other.pattern));
}

// For a word point, every syllabus row listing the same word (with its sense numbers: 呢¹ 呢² at HSK1, 呢⁴ at HSK2),
// so the author knows which use this point covers and which uses other points cover.
const SYLLABUS = require('../hsk2025/grammar.json').rows;
function senseRows(entry) {
  if (entry.kind !== 'word') return undefined;
  const base = entry.pattern.replace(/[¹²³⁴⁵⁶⁷⁸⁹]/g, '');
  const re = new RegExp('(^|[、：/])' + base.replace(/[()（）]/g, '\\$&') + '[¹²³⁴⁵⁶⁷⁸⁹]*(?=$|[、/，])');
  return SYLLABUS.filter(r => re.test(r.content)).map(r => 'HSK' + r.level + ' ' + [r.categoryName, r.item].filter(Boolean).join('/') + ': ' + r.content);
}

const cards = picked.map(e => ({
  id: e.id,
  pattern: e.pattern,
  kind: e.kind,
  level: e.level,
  category: e.category,
  syllabus: e.syllabus || null,
  words: e.words || undefined,
  senseRows: senseRows(e),
  mustUse: grammar.requiredTokens(e),
  draft: {
    meaning: e.meaning || null, formation: e.formation || null, explanation: e.explanation || null,
    notes: e.notes || null, examples: e.examples || []
  },
  relatedCandidates: candidates(e)
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
fs.writeFileSync(path.join(dir, 'batch.json'), JSON.stringify({ batch, kind: 'grammar', policy: withReview ? 'author+review' : 'author', packets, ids: cards.map(c => c.id), created: new Date().toISOString() }, null, 1));
open[batch] = cards.map(c => c.id);
fs.writeFileSync(openFile, JSON.stringify(open, null, 1));

const levels = {};
cards.forEach(c => { levels[c.level] = (levels[c.level] || 0) + 1; });
console.log(batch + ': ' + cards.length + ' grammar points in ' + packets.length + ' packets (' + JSON.stringify(levels) + '), policy ' +
  (withReview ? 'author+review' : 'author') + '. ' + dir);
