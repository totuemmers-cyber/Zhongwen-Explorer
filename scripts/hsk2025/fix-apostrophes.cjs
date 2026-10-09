// One-off correction (2026-10-09): some headword pinyin lacks the syllable-separating apostrophe before
// a vowel-initial syllable (ǒuěr, ránér, dáàn). Inserts ’ as the syllabus-derived readings already do
// (xǐ’ài); parts that contain an apostrophe already are left alone.
// Usage: node scripts/hsk2025/fix-apostrophes.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const Pinyin = common.loadPinyin();
const VOWEL_START = /^[aāáǎàeēéěèoōóǒò]/i;
function fixPart(part) {
  if (/['’]/.test(part)) return part;
  const syllables = Pinyin.segment(part);
  if (!Array.isArray(syllables) || syllables.join('') !== part) return part;
  return syllables.map((s, i) => (i > 0 && VOWEL_START.test(s) ? '’' : '') + s).join('');
}
const sources = common.loadSources();
const changes = [];
for (const source of sources) {
  for (const item of source.items) {
    if (typeof item.pinyin !== 'string') continue;
    const fixed = item.pinyin.replace(/[^\s\/\-]+/g, fixPart);
    if (fixed === item.pinyin) continue;
    changes.push(item.word + ': ' + item.pinyin + ' → ' + fixed);
    item.pinyin = fixed;
  }
}
console.log(changes.length + ' readings corrected' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY && changes.length) {
  common.writeSources(sources);
  require('../build-vocab-runtime.cjs').writeVocabRuntime();
}
