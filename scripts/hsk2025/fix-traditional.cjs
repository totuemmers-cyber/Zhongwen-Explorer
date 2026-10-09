// One-off correction (2026-10-09): relevel.cjs took the first CC-CEDICT entry for a reading, so some
// traditional forms came from variant or minor entries (和 → 咊, 后 → 后 "empress" instead of 後,
// 家 → 傢). Recomputes `traditional` and the evidence line with dictionaries.cjs mainEntryOrder (now also used by relevel.cjs).
// Usage: node scripts/hsk2025/fix-traditional.cjs [--dry-run]
const common = require('../enrich/common.cjs');
const dict = require('./dictionaries.cjs');

const DRY = process.argv.includes('--dry-run');
const Pinyin = common.loadPinyin();
const cedict = dict.loadCedict();
const entryRank = dict.mainEntryOrder(cedict);
// Where several main entries share the reading, the syllabus part of speech decides (里 "inside", not
// the length unit; 须 "must", not "beard"; 喂 HSK1 is the interjection, not "to feed").
const OVERRIDES = {
  'w:里:li3': '裡', 'w:喂:wei4': '喂', 'w:游:you2': '游', 'w:冲:chong1': '沖',
  'w:划:hua2': '划', 'w:须:xu1': '須', 'w:征:zheng1': '征'
};
const syllables = key => key.match(/[a-z]+[1-5]/g) || [];
function sameReading(a, b) {
  if (a === b) return true;
  const x = syllables(a), y = syllables(b);
  return x.length === y.length && x.every((s, i) => s.slice(0, -1) === y[i].slice(0, -1) &&
    (s.slice(-1) === y[i].slice(-1) || (x.length > 1 && (s.slice(-1) === '5' || y[i].slice(-1) === '5')) ||
     (['yi', 'bu'].includes(s.slice(0, -1)))));
}

const sources = common.loadSources();
const changes = [];
for (const source of sources) {
  for (const item of source.items) {
    if (!item.evidence || !item.evidence.cedict || item.evidence.readingDiffers) continue;
    const key = Pinyin.toNumeric(String(item.pinyin).split('/')[0], item.word).toLowerCase();
    const list = (cedict.get(item.word) || []).slice().sort(entryRank);
    const match = list.filter(e => e.key === key);
    const best = (match.length ? match : list.filter(e => sameReading(e.key, key)))[0];
    const traditional = OVERRIDES[item.id] || (best && best.traditional);
    if (!traditional || traditional === item.traditional) continue;
    changes.push(item.word + ' ' + item.pinyin + ': ' + item.traditional + ' → ' + traditional);
    item.traditional = traditional;
    const entry = list.find(e => e.traditional === traditional && !/^[A-Z]/.test(e.pinyin)) || best;
    item.evidence.cedict = entry.traditional + ' ' + entry.simplified + ' [' + entry.pinyin + ']';
  }
}
console.log(changes.length + ' traditional forms corrected' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY && changes.length) {
  common.writeSources(sources);
  require('../build-vocab-runtime.cjs').writeVocabRuntime();
}
