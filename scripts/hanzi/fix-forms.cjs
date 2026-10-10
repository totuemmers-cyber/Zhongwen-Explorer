// Corrections to the built hanzi data that the enrichment authors flagged (2026-10-10): traditional forms the
// build took from the wrong dictionary entry. The reviewed fields (readings, components, notes) stay untouched.
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
  '占': ['佔', '占']   // 佔 "besetzen", 占 zhān "wahrsagen"
};
const entries = hanzi.loadHanzi();
const changes = [];
for (const entry of entries) {
  const want = TRADITIONAL[entry.hanzi];
  if (want && JSON.stringify(entry.traditional) !== JSON.stringify(want)) {
    changes.push(entry.hanzi + ': ' + entry.traditional.join('/') + ' → ' + want.join('/'));
    entry.traditional = want;
  }
}
console.log(changes.length + ' forms corrected' + (DRY ? ' (dry run)' : '') + (changes.length ? ':\n' + changes.join('\n') : ''));
if (!DRY && changes.length) {
  hanzi.writeHanzi(entries);
  require('../build-hanzi-runtime.cjs').writeHanziRuntime();
}
