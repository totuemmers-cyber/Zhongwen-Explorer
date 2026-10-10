// One-off correction (2026-10-10): Zusatz entries outside CC-CEDICT got traditional forms with variant
// characters (爲 for 為, 羣 for 群, 衆 for 眾, 麪 for 麵, 啓 for 啟; 慼 for 戚 in 休戚与共); a few headword
// readings and spelling variants flagged by the enrichment authors are corrected too. Re-runnable.
// Usage: node scripts/hsk2025/fix-zusatz-forms.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const TRADITIONAL_CHARS = { '爲': '為', '羣': '群', '衆': '眾', '麪': '麵', '啓': '啟' };
// id → corrected traditional form, where the variant character is right elsewhere (哀慼).
const TRADITIONAL = { 'w:休戚与共:xiu1qi1yu3gong4': '休戚與共', 'w:鸿篇巨制:hong2pian1ju4zhi4': '鴻篇巨製',
  'w:仿效:fang3xiao4': '仿效', 'w:独辟蹊径:du2pi4xi1jing4': '獨闢蹊徑',
  'w:轮回:lun2hui2': '輪迴' };
// id → spelling variants to list (mainland 借由 for Taiwan 藉由, standard 战栗 for 颤栗).
const VARIANTS = { 'w:藉由:jie4you2': ['借由'], 'w:颤栗:zhan4li4': ['战栗'], 'w:秘笈:mi4ji2': ['秘籍'],
  'w:沐风栉雨:mu4feng1zhi4yu3': ['栉风沐雨'], 'w:黯淡:an4dan4': ['暗淡'],
  'w:义正言辞:yi4zheng4yan2ci2': ['义正辞严'], 'w:固步自封:gu4bu4zi4feng1': ['故步自封'],
  'w:弢光养晦:tao1guang1yang3hui4': ['韬光养晦'], 'w:暗渡陈仓:an4du4chen2cang1': ['暗度陈仓'] };
// id → corrected headword pinyin.
const READINGS = {
  'w:学术不端:xue2shu4bu2duan1': 'xuéshù bùduān',
  'w:碳十四测年:tan4shi2si4ce4nian3': 'tàn shísì cènián',
  'w:无核化:wu2he2hua4': 'wúhéhuà',
  'w:综合国力:zong4he2guo2li4': 'zōnghé guólì',
  'w:耄耋:mao4die2': 'màodié',
  'w:文艺片:wen2yi4pian1': 'wényìpiàn',
  'w:科幻片:ke1huan4pian1': 'kēhuànpiàn',
  'w:层峦叠嶂:ceng2ruan2die2zhang4': 'céngluán-diézhàng',
  'w:借词:jie4ci5': 'jiècí',
  'w:惩戒:cheng2jie4': 'chéngjiè',
  'w:凝练:ning2lian4': 'níngliàn',
  'w:匣子:xia2zi3': 'xiázi',
  'w:狷介:juan4jie4': 'juànjiè',
  'w:骱:jie4': 'xiè',
  'w:燮理:xie4li3': 'xièlǐ',
  'w:徂徕:cu2lai2': 'Cúlái',
  'w:辈分:bei4fen4': 'bèifen',
  'w:补丁:bu3ding1': 'bǔding',
  'w:当局者迷:dang1ju2zhe3mi2': 'dāngjúzhě mí'
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
