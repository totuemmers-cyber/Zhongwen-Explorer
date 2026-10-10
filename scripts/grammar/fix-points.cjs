// Corrections to grammar points after the build: renames (a typo in the printed syllabus, 所处 for 处所, became the
// id and pattern; 用不着 got its sub-category as prefix) and merges of duplicates (an old point written with ... and
// with …). The old id stays as legacyId (bookmarks, deep links); related links and the ledger follow.
// Re-runnable.
// Usage: node scripts/grammar/fix-points.cjs [--dry-run]
const fs = require('fs');
const enrich = require('../enrich/common.cjs');
const grammar = require('./common.cjs');
const { LEDGER, contentHash } = require('./apply.cjs');

const DRY = process.argv.includes('--dry-run');
const RENAMES = {
  'g:所处+是+名词': { id: 'g:处所+是+名词', pattern: '处所+是+名词', content: '（1）处所+是+名词' },
  'g:其他：用不着': { id: 'g:用不着', pattern: '用不着' }
};
// Duplicate → kept point; the duplicate disappears, its ids become legacyIds of the kept point.
const MERGES = {
  'g:之所以...是因为...': 'g:之所以…是因为…'
};

const entries = grammar.loadGrammar();
const ledger = enrich.readJson(LEDGER, {});
const changes = [];
const touched = new Set();
for (const [oldId, to] of Object.entries(RENAMES)) {
  const entry = entries.find(e => e.id === oldId);
  if (!entry) continue;
  entry.id = to.id;
  entry.pattern = to.pattern;
  if (entry.syllabus && to.content) entry.syllabus.content = to.content;
  entry.legacyIds = [...new Set([...(entry.legacyIds || []), oldId])];
  if (ledger[oldId]) { ledger[to.id] = ledger[oldId]; delete ledger[oldId]; }
  touched.add(entry);
  changes.push(oldId + ' → ' + to.id);
  for (const other of entries) {
    if ((other.related || []).includes(oldId)) { other.related = other.related.map(id => id === oldId ? to.id : id); touched.add(other); }
  }
}
for (const [dupId, keepId] of Object.entries(MERGES)) {
  const dup = entries.find(e => e.id === dupId);
  const keep = entries.find(e => e.id === keepId);
  if (!dup || !keep) continue;
  keep.legacyIds = [...new Set([...(keep.legacyIds || []), dupId, ...(dup.legacyIds || [])])].filter(id => id !== keepId);
  entries.splice(entries.indexOf(dup), 1);
  delete ledger[dupId];
  touched.add(keep);
  changes.push(dupId + ' merged into ' + keepId);
  for (const other of entries) {
    if ((other.related || []).includes(dupId)) {
      other.related = [...new Set(other.related.map(id => id === dupId ? keepId : id))].filter(id => id !== other.id);
      touched.add(other);
    }
  }
}
for (const entry of touched) if (ledger[entry.id] && entry.review) ledger[entry.id].hash = contentHash(entry);
console.log(changes.length + ' points renamed or merged' + (DRY ? ' (dry run)' : '') + (changes.length ? ':\n' + changes.join('\n') : ''));
if (!DRY && changes.length) {
  grammar.writeGrammar(entries);
  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n');
}
