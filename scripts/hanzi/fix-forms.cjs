// Corrections to the built hanzi data that the enrichment authors flagged (2026-10-10): traditional forms the
// build took from the wrong dictionary entry. The reviewed fields (readings, components, notes) stay untouched.
// Re-runnable.
// Usage: node scripts/hanzi/fix-forms.cjs [--dry-run]
const hanzi = require('./common.cjs');

const DRY = process.argv.includes('--dry-run');
const TRADITIONAL = {
  '苹': ['蘋'],        // 苹果 → 蘋果; 苹 itself is a different plant in traditional script
  '钟': ['鐘', '鍾'], // clock/bell and the surname/cup were merged into 钟
  '喂': ['喂', '餵'], // the interjection keeps 喂, "to feed" is 餵
  '几': ['幾', '几']   // 几 jī "small table" (茶几) is also a traditional character
};
const entries = hanzi.loadHanzi();
const changes = [];
for (const entry of entries) {
  const want = TRADITIONAL[entry.hanzi];
  if (want && JSON.stringify(entry.traditional) !== JSON.stringify(want)) {
    changes.push(entry.hanzi + ': ' + entry.traditional.join('/') + ' → ' + want.join('/'));
    entry.traditional = want;
  }
}
console.log(changes.length + ' forms corrected' + (DRY ? ' (dry run)' : '') + (changes.length ? ':\n' + changes.join('\n') : ''));
if (!DRY && changes.length) {
  hanzi.writeHanzi(entries);
  require('../build-hanzi-runtime.cjs').writeHanziRuntime();
}
