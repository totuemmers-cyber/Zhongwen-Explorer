// One-off correction (2026-10-09): relevel.cjs listed CC-CEDICT "variant of" sources as variants even
// when they are common characters of their own (窗 → 囱, 呀 → 哑, 铺 → 堡). Removes single-character
// variants that are HSK characters, the rule relevel.cjs now applies too.
// Usage: node scripts/hsk2025/fix-variants.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const hskCharacters = new Set(Object.values(require('./characters.json').reading).flat());
const sources = common.loadSources();
const changes = [];
for (const source of sources) {
  for (const item of source.items) {
    if (!item.variants) continue;
    const kept = item.variants.filter(v => !(Array.from(v).length === 1 && hskCharacters.has(v)));
    if (kept.length === item.variants.length) continue;
    changes.push(item.word + ': ' + item.variants.join(',') + ' → ' + (kept.join(',') || '–'));
    if (kept.length) item.variants = kept; else delete item.variants;
  }
}
console.log(changes.length + ' entries corrected' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY && changes.length) {
  common.writeSources(sources);
  require('../build-vocab-runtime.cjs').writeVocabRuntime();
}
