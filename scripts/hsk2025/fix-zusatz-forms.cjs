// One-off correction (2026-10-10): Zusatz entries outside CC-CEDICT got traditional forms with variant
// characters (爲 for 為, 羣 for 群, 衆 for 眾, 麪 for 麵, 啓 for 啟; 慼 for 戚 in 休戚与共); a few headword
// readings and spelling variants flagged by the enrichment authors are corrected too. Re-runnable.
// Usage: node scripts/hsk2025/fix-zusatz-forms.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const TRADITIONAL_CHARS = { '爲': '為', '羣': '群', '衆': '眾', '麪': '麵', '啓': '啟' };
// id → corrected traditional form, where the variant character is right elsewhere (哀慼).
const TRADITIONAL = { 'w:休戚与共:xiu1qi1yu3gong4': '休戚與共', 'w:鸿篇巨制:hong2pian1ju4zhi4': '鴻篇巨製' };
// id → spelling variants to list (mainland 借由 for Taiwan 藉由).
const VARIANTS = { 'w:藉由:jie4you2': ['借由'] };
// id → corrected headword pinyin.
const READINGS = {
  'w:学术不端:xue2shu4bu2duan1': 'xuéshù bùduān',
  'w:碳十四测年:tan4shi2si4ce4nian3': 'tàn shísì cènián',
  'w:无核化:wu2he2hua4': 'wúhéhuà',
  'w:综合国力:zong4he2guo2li4': 'zōnghé guólì'
};
const sources = common.loadSources();
const changes = [];
for (const source of sources) {
  for (const item of source.items) {
    if (typeof item.traditional === 'string') {
      const fixed = TRADITIONAL[item.id] || Array.from(item.traditional).map(ch => TRADITIONAL_CHARS[ch] || ch).join('');
      if (fixed !== item.traditional) {
        changes.push(item.word + ': ' + item.traditional + ' → ' + fixed);
        item.traditional = fixed;
      }
    }
    const missing = (VARIANTS[item.id] || []).filter(v => !(item.variants || []).includes(v));
    if (missing.length) {
      changes.push(item.word + ': variants + ' + missing.join(', '));
      item.variants = (item.variants || []).concat(missing);
    }
    if (READINGS[item.id] && item.pinyin !== READINGS[item.id]) {
      changes.push(item.word + ': ' + item.pinyin + ' → ' + READINGS[item.id]);
      item.pinyin = READINGS[item.id];
    }
  }
}
console.log(changes.length + ' forms corrected' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY && changes.length) {
  common.writeSources(sources);
  require('../build-vocab-runtime.cjs').writeVocabRuntime();
}
