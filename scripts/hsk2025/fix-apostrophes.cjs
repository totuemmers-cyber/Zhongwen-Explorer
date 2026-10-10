// One-off correction (2026-10-09): some headword pinyin lacks the syllable-separating apostrophe before
// a vowel-initial syllable (ǒuěr, ránér, dáàn). Inserts ’ as the syllabus-derived readings already do
// (xǐ’ài); parts that contain an apostrophe already are left alone.
// Syllables come from CC-CEDICT readings of the word or its parts where they spell out the pinyin, which
// settles ambiguous runs (zhàngài = zhàng·ài, not zhàn·gài); otherwise from the pinyin segmenter.
// Usage: node scripts/hsk2025/fix-apostrophes.cjs [--dry-run]
const common = require('../enrich/common.cjs');
const dict = require('./dictionaries.cjs');

const DRY = process.argv.includes('--dry-run');
const Pinyin = common.loadPinyin();
const cedict = dict.loadCedict();
const VOWEL_START = /^[aāáǎàeēéěèoōóǒò]/i;
const fold = s => s.normalize('NFD').replace(/[̀́̄̌]/g, '').normalize('NFC').toLowerCase();
const readingLetters = key => (key.match(/[a-z]+[1-5]/g) || []).map(syl => syl.slice(0, -1).replace(/v/g, 'ü'));

// Syllables (toneless) of the word as CC-CEDICT spells them, chosen so they join to `letters`.
function dictSyllables(word, letters) {
  const chars = Array.from(word);
  const search = (i, at) => {
    if (i === chars.length) return at === letters.length ? [] : null;
    for (let j = chars.length; j > i; j--) {
      for (const entry of cedict.get(chars.slice(i, j).join('')) || []) {
        const syllables = readingLetters(entry.key);
        const text = syllables.join('');
        if (!syllables.length || letters.slice(at, at + text.length) !== text) continue;
        const rest = search(j, at + text.length);
        if (rest) return syllables.concat(rest);
      }
    }
    return /\p{Script=Han}/u.test(chars[i]) ? null : search(i + 1, at);
  };
  return search(0, 0);
}

function fixPart(part, lengths) {
  if (/['’]/.test(part)) return part;
  let syllables = Pinyin.segment(part);
  if (lengths && lengths.length > 1) {
    let at = 0;
    syllables = lengths.map(n => part.slice(at, at += n));
  }
  if (!Array.isArray(syllables) || syllables.join('') !== part) return part;
  return syllables.map((s, i) => (i > 0 && VOWEL_START.test(s) ? '’' : '') + s).join('');
}

const sources = common.loadSources();
const changes = [];
for (const source of sources) {
  for (const item of source.items) {
    if (typeof item.pinyin !== 'string') continue;
    const runs = item.pinyin.includes('/') ? null : item.pinyin.match(/\p{L}+/gu);
    const letters = runs ? fold(runs.join('')).replace(/['’]/g, '') : '';
    const syllables = runs ? dictSyllables(item.word, letters) : null;
    let used = 0;
    // Hand each letter run the dictionary syllables it covers.
    const fixed = item.pinyin.replace(/\p{L}+/gu, run => {
      if (!syllables) return fixPart(run, null);
      const lengths = [];
      let len = 0;
      while (used < syllables.length && len < run.length) { lengths.push(syllables[used].length); len += syllables[used++].length; }
      return fixPart(run, len === run.length ? lengths : null);
    });
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
