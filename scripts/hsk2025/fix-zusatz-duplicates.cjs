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
  'w:嗯:en1': 'w:嗯:g5',
  // Same word twice in Zusatz or as a reading variant of a syllabus word (下载 xiàzǎi/xiàzài).
  'w:下载:xia4zai3': 'w:下载:xia4zai4',
  'w:通识:tong1shi4': 'w:通识:tong1shi2',
  'w:动画片:dong4hua4pian1': 'w:动画片:dong4hua4pian4',
  'w:即兴:ji2xing4': 'w:即兴:ji2xing1',
  'w:佣金:yong4jin1': 'w:佣金:yong1jin1',
  // Variant spellings: the Zusatz word becomes a variant of the standard spelling's entry.
  'w:磨擦:mo2ca1': 'w:摩擦:mo2ca1',
  'w:磨练:mo2lian4': 'w:磨炼:mo2lian4',
  'w:澹泊:dan4bo2': 'w:淡泊:dan4bo2',
  'w:窜改:cuan4gai3': 'w:篡改:cuan4gai3',
  'w:弘大:hong2da4': 'w:宏大:hong2da4',
  'w:恢弘:hui1hong2': 'w:恢宏:hui1hong2',
  'w:跌荡起伏:die1dang4qi3fu2': 'w:跌宕起伏:die1dang4qi3fu2',
  'w:飘渺:piao1miao3': 'w:缥缈:piao1miao3',
  'w:缲丝:qiao1si1': 'w:缫丝:sao1si1',
  'w:世上无难事，只怕有心人:shi4shang4wu2nan2shi4zhi3pa4you3xin1ren2': 'w:天下无难事，只怕有心人:tian1xia4wu2nan2shi4zhi3pa4you3xin1ren2',
  // Misspellings: only the id is kept, not the spelling.
  'w:沤心沥血:ou3xin1li4xue4': 'w:呕心沥血:ou3xin1li4xue4'
};
const MISSPELLINGS = new Set(['w:沤心沥血:ou3xin1li4xue4']);
const sources = common.loadSources();
const byId = new Map();
sources.forEach(source => source.items.forEach(item => byId.set(item.id, item)));
const ledger = common.readJson(common.LEDGER, {});
const changes = [];
for (const [dupId, keepId] of Object.entries(DUPLICATES)) {
  const dup = byId.get(dupId), keep = byId.get(keepId);
  if (!dup || !keep) continue;
  if (dup.level !== 'Zusatz') throw new Error('Not a Zusatz entry: ' + dupId);
  if (dup.word !== keep.word && !MISSPELLINGS.has(dupId)) keep.variants = Array.from(new Set([...(keep.variants || []), dup.word]));
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
