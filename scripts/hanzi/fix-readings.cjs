// Corrections to reviewed hanzi readings that the enrichment authors flagged (2026-10-10): the build turned
// 嗯 ǹg into "g" (the pinyin converter has no syllabic ng), and gave 傅 and 嗽 their toneless word-internal
// syllable as main reading (伍 too). Updates the ledger hash of each corrected entry. Re-runnable.
// Usage: node scripts/hanzi/fix-readings.cjs [--dry-run]
const fs = require('fs');
const enrich = require('../enrich/common.cjs');
const hanzi = require('./common.cjs');
const { LEDGER, contentHash } = require('./apply.cjs');

const DRY = process.argv.includes('--dry-run');
// hanzi → function(readings) returning the corrected readings.
const FIXES = {
  '嗯': readings => readings.map(r => r.pinyin === 'g' ? Object.assign({}, r, { pinyin: 'ǹg' }) : r),
  // fù first (师傅 shīfu keeps the toneless reading second).
  '傅': readings => readings.slice().sort((a, b) => (b.pinyin === 'fù') - (a.pinyin === 'fù')),
  '嗽': readings => readings.map(r => r.pinyin === 'sou' ? Object.assign({}, r, { pinyin: 'sòu' }) : r),
  // wǔ first (队伍 duìwu keeps the toneless reading second).
  '伍': readings => readings.slice().sort((a, b) => (b.pinyin === 'wǔ') - (a.pinyin === 'wǔ')),
  // zhàn is standard on the mainland (颤栗 zhànlì, 打颤 dǎzhàn); CC-CEDICT and Unihan list it only as Taiwan reading.
  '颤': readings => readings.some(r => r.pinyin === 'zhàn') ? readings
    : readings.concat([{ pinyin: 'zhàn', meaning: 'zittern; beben; schaudern (in Wörtern wie zhànlì und dǎzhàn)' }])
};

const entries = hanzi.loadHanzi();
const ledger = enrich.readJson(LEDGER, {});
const changes = [];
for (const entry of entries) {
  const fix = FIXES[entry.hanzi];
  if (!fix || !entry.review) continue;
  const fixed = fix(entry.readings);
  if (JSON.stringify(fixed) === JSON.stringify(entry.readings)) continue;
  changes.push(entry.hanzi + ': ' + entry.readings.map(r => r.pinyin).join('/') + ' → ' + fixed.map(r => r.pinyin).join('/'));
  entry.readings = fixed;
  if (ledger[entry.hanzi]) ledger[entry.hanzi].hash = contentHash(entry);
}
console.log(changes.length + ' readings corrected' + (DRY ? ' (dry run)' : '') + (changes.length ? ':\n' + changes.join('\n') : ''));
if (!DRY && changes.length) {
  hanzi.writeHanzi(entries);
  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n');
  require('../build-hanzi-runtime.cjs').writeHanziRuntime();
}
