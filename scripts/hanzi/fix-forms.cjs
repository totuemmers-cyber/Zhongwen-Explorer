// Corrections to the built hanzi data that the enrichment authors flagged (2026-10-10): traditional forms the
// build took from the wrong dictionary entry, and the missing radical form 阝. The reviewed fields (readings,
// components, notes) stay untouched.
// Re-runnable.
// Usage: node scripts/hanzi/fix-forms.cjs [--dry-run]
const hanzi = require('./common.cjs');

const DRY = process.argv.includes('--dry-run');
const TRADITIONAL = {
  '苹': ['蘋'],        // 苹果 → 蘋果; 苹 itself is a different plant in traditional script
  '钟': ['鐘', '鍾'], // clock/bell and the surname/cup were merged into 钟
  '喂': ['喂', '餵'], // the interjection keeps 喂, "to feed" is 餵
  '几': ['幾', '几'], // 几 jī "small table" (茶几) is also a traditional character
  '须': ['須', '鬚'], // "must" and "beard"
  '于': ['於', '于'], // 于 is also a traditional character (surname, 于是)
  '板': ['板', '闆'], // 老闆 "Chef"
  '才': ['才', '纔'], // 纔 for "erst, gerade erst"
  '签': ['簽', '籤'], // 籤 for lots, labels, toothpicks
  '划': ['劃', '划'], // huá "rudern" stays 划
  '伙': ['夥', '伙'], // 伙 only for 伙食
  '获': ['獲', '穫'], // 穫 "ernten"
  '刮': ['刮', '颳'], // 颳 "wehen (Wind)"
  '范': ['範', '范'], // the surname Fan stays 范
  '佛': ['佛', '彿'], // 彿 in 彷彿 (仿佛); 髴 is only a variant
  '痴': ['癡'],        // 痴 is only a variant in traditional script
  '卜': ['卜', '蔔'], // 蔔 in 蘿蔔 (萝卜)
  '汇': ['匯', '彙'], // 彙 in 詞彙, 彙總
  '饥': ['飢', '饑'], // 饑 "Hungersnot, Missernte"
  '筑': ['築', '筑'], // 筑 stays for the zither and Guiyang
  '咨': ['諮', '咨'], // 咨 itself in 咨文
  '余': ['餘', '余'], // 余 stays for "ich" and the surname
  '赞': ['贊', '讚'], // 讚 "loben"
  '占': ['佔', '占'],  // 佔 "besetzen", 占 zhān "wahrsagen"
  '仆': ['僕', '仆'], // pū "vornüberfallen" stays 仆
  '挽': ['挽', '輓'], // 輓 in 輓聯, 輓歌 (mourning)
  '纤': ['纖', '縴'], // 縴 qiàn "Treidelseil"
  '吁': ['籲', '吁'], // xū (长吁短叹) stays 吁
  '岩': ['岩', '巖'],
  '叹': ['嘆', '歎'],
  '涂': ['塗', '涂'], // the surname and river name stay 涂
  '灶': ['灶', '竈'],
  '郁': ['鬱', '郁'], // 郁 "duftend" (浓郁) and the surname stay 郁
  '御': ['御', '禦'], // 禦 "abwehren" (防禦, 抵禦)
  '姜': ['薑', '姜'], // the surname stays 姜
  '咤': ['咤'],        // 叱咤; 吒 is only a variant
  '栗': ['栗', '慄'], // 慄 "zittern" (戰慄)
  '漓': ['漓', '灕'], // 灕 for the river (灕江)
  '腌': ['醃', '腌']   // ā in 腌臢 stays 腌
};
// The build missed radical forms its lookup did not know (阝 is listed only as "阝(links)" / "阝(rechts)",
// ⺮ ⻊ 礻 忄 耂 …): 阝 and ⺮ always take the short form, other radicals the variant that the reviewed components
// show (跟 ⻊, but 蹙 keeps 足).
const RADICAL_FORMS = { '阜': '阝', '邑': '阝', '竹': '⺮' };
const PART_ALIASES = { '𧾷': '⻊' }; // components write the foot radical as 𧾷, the radical list as ⻊
const variantsOf = new Map(hanzi.loadRadicals().map(r => [r.radical, (r.variants || []).map(v => v.replace(/\(.*\)/, ''))]));
const entries = hanzi.loadHanzi();
const changes = [];
for (const entry of entries) {
  const want = TRADITIONAL[entry.hanzi];
  if (want && JSON.stringify(entry.traditional) !== JSON.stringify(want)) {
    changes.push(entry.hanzi + ': ' + entry.traditional.join('/') + ' → ' + want.join('/'));
    entry.traditional = want;
  }
  const variants = variantsOf.get(entry.primaryRadical) || [];
  const form = RADICAL_FORMS[entry.primaryRadical] ||
    (!entry.radicalForm && (entry.components || []).map(c => PART_ALIASES[c.part] || c.part).find(part => variants.includes(part)));
  if (form && entry.hanzi !== entry.primaryRadical && entry.radicalForm !== form) {
    changes.push(entry.hanzi + ': radical form ' + form);
    entry.radicalForm = form;
  }
}
console.log(changes.length + ' forms corrected' + (DRY ? ' (dry run)' : '') + (changes.length ? ':\n' + changes.join('\n') : ''));
if (!DRY && changes.length) {
  hanzi.writeHanzi(entries);
  require('../build-hanzi-runtime.cjs').writeHanziRuntime();
}
