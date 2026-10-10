// One-off correction (2026-10-10): some Zusatz entries duplicate a syllabus word; a wrong reading in
// their id (综合 zong4he2, 纪录片 ji4lu4pian1, 心甘情愿) kept relevel.cjs from matching them, and 嗯 ēn
// glosses the same interjection as HSK 4 嗯 ǹg. Drops the Zusatz copy and keeps its id as a legacy id
// of the syllabus entry, so bookmarks still resolve. Re-runnable.
// Usage: node scripts/hsk2025/fix-zusatz-duplicates.cjs [--dry-run]
const fs = require('fs');
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const DUPLICATES = {
  'w:综合:zong4he2': 'w:综合:zong1he2',
  'w:纪录片:ji4lu4pian1': 'w:纪录片:ji4lu4pian4',
  'w:心甘情愿:xin1gan1qing2yuan4': 'w:心甘情愿:xing1an1qing2yuan4',
  'w:嗯:en1': 'w:嗯:g5'
};
const sources = common.loadSources();
const byId = new Map();
sources.forEach(source => source.items.forEach(item => byId.set(item.id, item)));
const ledger = common.readJson(common.LEDGER, {});
const changes = [];
for (const [dupId, keepId] of Object.entries(DUPLICATES)) {
  const dup = byId.get(dupId), keep = byId.get(keepId);
  if (!dup || !keep) continue;
  if (dup.level !== 'Zusatz' || dup.word !== keep.word) throw new Error('Not a Zusatz duplicate: ' + dupId);
  keep.legacyIds = Array.from(new Set([...(keep.legacyIds || []), dupId, ...(dup.legacyIds || [])]));
  for (const source of sources) source.items = source.items.filter(item => item.id !== dupId);
  delete ledger[dupId];
  changes.push(dupId + ' → ' + keepId + ' (' + keep.level + ')');
}
console.log(changes.length + ' duplicates removed' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY && changes.length) {
  common.writeSources(sources);
  fs.writeFileSync(common.LEDGER, JSON.stringify(ledger, null, 1) + '\n');
  require('../build-vocab-runtime.cjs').writeVocabRuntime();
}
