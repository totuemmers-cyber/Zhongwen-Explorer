// One-off correction (2026-10-11): relevel.cjs split the part of speech on 、 also inside bracket groups, so
// rows such as 对 形、介、（动、量） or 点² 动、（名、量） kept only the first part of the bracket in levelUses
// (the later 量/名 use was lost). Recomputes levelUses of every syllabus entry with the fixed parser (same rule as
// splitPos in relevel.cjs). levelUses is not part of the enrichment ledger hash (common.REVIEWED_FIELDS).
// Usage: node scripts/hsk2025/fix-level-uses.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const rows = new Map(require('./vocabulary.json').map(row => [row.no, row]));
const later = pos => (String(pos || '').match(/（[^）]*）|[^、（）]+/g) || [])
  .filter(g => g.startsWith('（')).map(g => g.replace(/[（）]/g, '').split(/[、，]/));

const sources = common.loadSources();
const changed = [];
for (const source of sources) {
  for (const item of source.items) {
    const row = item.syllabus && rows.get(item.syllabus.no);
    if (!row || !row.laterLevels.length) continue;
    const groups = later(row.pos);
    const expected = row.laterLevels.map((l, i) => ({ level: 'HSK' + l, pos: groups[i] || [] }));
    if (JSON.stringify(item.levelUses) === JSON.stringify(expected)) continue;
    changed.push(item.id + ' ' + row.pos + ': ' + JSON.stringify(item.levelUses) + ' → ' + JSON.stringify(expected));
    item.levelUses = expected;
  }
}
console.log(changed.join('\n') + '\n' + changed.length + ' entries' + (DRY ? ' (dry run)' : ''));
if (!DRY && changed.length) common.writeSources(sources);
