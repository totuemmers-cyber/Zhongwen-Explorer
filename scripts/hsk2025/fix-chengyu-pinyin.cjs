// One-off correction (2026-10-10): four-character chengyu carry the syllabus reading syllable by
// syllable (gè shū jǐ jiàn), while the house style and most entries write two words joined by a
// hyphen (rénshān-rénhǎi). Rewrites four spaced syllables of a four-character entry as AB-CD.
// Usage: node scripts/hsk2025/fix-chengyu-pinyin.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const Pinyin = common.loadPinyin();
const VOWEL_START = /^[aāáǎàeēéěèoōóǒò]/i;
const join = (a, b) => a + (VOWEL_START.test(b) ? '’' : '') + b;
const sources = common.loadSources();
const changes = [];
for (const source of sources) {
  for (const item of source.items) {
    if (Array.from(item.word).length !== 4 || typeof item.pinyin !== 'string') continue;
    const parts = item.pinyin.trim().split(/\s+/);
    // Chengyu written as one run (mèngmèiyǐqiú), two words (jūān sīwēi) or three (pò zài méijié) get the
    // same AB-CD form, as long as every space falls on a syllable boundary.
    if (parts.length >= 1 && parts.length <= 3 && item.type === 'Chengyu' && !/[-'’]/.test(item.pinyin)) {
      const run = Pinyin.segment(parts.join(''), item.word);
      const cuts = parts.slice(0, -1).map((p, i) => parts.slice(0, i + 1).join('').length);
      const ends = Array.isArray(run) ? run.map((s, i) => run.slice(0, i + 1).join('').length) : [];
      if (Array.isArray(run) && run.length === 4 && run.join('') === parts.join('') && cuts.every(c => ends.includes(c))) parts.splice(0, parts.length, ...run);
    }
    if (parts.length !== 4 || parts.some(p => p !== p.toLowerCase())) continue; // names (一带一路 Yī Dài Yī Lù) stay
    const syllables = Pinyin.segment(parts.join(''), item.word);
    if (!Array.isArray(syllables) || syllables.length !== 4) continue;
    const fixed = join(parts[0], parts[1]) + '-' + join(parts[2], parts[3]);
    changes.push(item.word + ' (' + item.type + '): ' + item.pinyin + ' → ' + fixed);
    item.pinyin = fixed;
  }
}
console.log(changes.length + ' readings joined' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY && changes.length) {
  common.writeSources(sources);
  require('../build-vocab-runtime.cjs').writeVocabRuntime();
}
