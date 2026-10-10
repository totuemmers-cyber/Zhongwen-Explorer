// Correction (2026-10-11): vocabulary categories shown in the detail view that were spelled with ae/oe/ue
// (Gefuehle, Militaer, Persoenlichkeit, Gegenstaende) get their umlauts. Categories are not part of the reviewed
// content, so the ledger is unaffected. Re-runnable.
// Usage: node scripts/hsk2025/fix-categories.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const SPELLING = { Gefuehle: 'Gefühle', Militaer: 'Militär', Persoenlichkeit: 'Persönlichkeit', Gegenstaende: 'Gegenstände' };

const sources = common.loadSources();
const counts = {};
for (const source of sources) {
  for (const item of source.items) {
    const fixed = SPELLING[item.category];
    if (!fixed) continue;
    counts[item.category + ' → ' + fixed] = (counts[item.category + ' → ' + fixed] || 0) + 1;
    item.category = fixed;
  }
}
const total = Object.values(counts).reduce((a, b) => a + b, 0);
console.log(total + ' categories corrected' + (DRY ? ' (dry run)' : '') + (total ? ': ' + JSON.stringify(counts) : ''));
if (!DRY && total) common.writeSources(sources);
