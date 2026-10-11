// One-off correction (2026-10-09): CC-CEDICT classifier lines and the legacy data attached measure
// words to verbs, adjectives, adverbs and affixes (打算 个, 可能 个, 性 个) and some wrong ones to nouns.
// Keeps specific measure words on verbs whose noun use takes them (工作 份, 回信 封, 咳嗽 阵) and
// applies the corrections enrichment authors flagged for nouns (and, 2026-10-11, the Zählwörter campaign flags and the
// verb/noun homograph rule below). Re-runnable; afterwards rebuild the noun lists: node scripts/measure-words/build.cjs --write
// Usage: node scripts/hsk2025/fix-measure-words.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const KEEP_TYPES = new Set(['Nomen', 'Phrase']);
const mw = (word, pinyin) => ({ word, pinyin });
// Author flags (Phase 3 batches b006–b025): id → corrected list ([] removes the field).
const CORRECTIONS = {
  // Zusatz batches b046–b060 (added 2026-10-10).
  'w:订书机:ding4shu1ji1': [mw('个', 'ge4'), mw('台', 'tai2')],
  'w:电子邮件:dian4zi3you2jian4': [mw('封', 'feng1'), mw('个', 'ge4')],
  'w:经文:jing1wen2': [mw('段', 'duan4'), mw('篇', 'pian1')],
  'w:信心:xin4xin1': [],
  'w:学费:xue2fei4': [mw('笔', 'bi3')],
  'w:年龄:nian2ling2': [],
  'w:货:huo4': [mw('批', 'pi1'), mw('件', 'jian4')],
  'w:鼻子:bi2zi5': [mw('个', 'ge4')],
  'w:广告:guang3gao4': [mw('个', 'ge4'), mw('条', 'tiao2')],
  'w:课程:ke4cheng2': [mw('门', 'men2')],
  'w:袜子:wa4zi5': [mw('双', 'shuang1'), mw('只', 'zhi1')],
  // Batches b010–b017 (HSK 5/6, added 2026-10-10).
  'w:期间:qi1jian1': [],
  'w:黄瓜:huang2gua1': [mw('根', 'gen1'), mw('条', 'tiao2')],
  'w:建筑:jian4zhu4': [mw('座', 'zuo4'), mw('栋', 'dong4')],
  'w:讲话:jiang3hua4': [mw('次', 'ci4'), mw('篇', 'pian1')],
  'w:结构:jie2gou4': [],
  'w:时刻:shi2ke4': [mw('个', 'ge4')],
  'w:手指:shou3zhi3': [mw('根', 'gen1')],
  'w:物价:wu4jia4': [],
  'w:吸管:xi1guan3': [mw('根', 'gen1'), mw('支', 'zhi1')],
  'w:学术:xue2shu4': [],
  'w:总统:zong3tong3': [mw('位', 'wei4'), mw('个', 'ge4')],
  'w:棒球:bang4qiu2': [mw('个', 'ge4')],
  'w:部队:bu4dui4': [mw('支', 'zhi1')],
  'w:才华:cai2hua2': [],
  'w:成语:cheng2yu3': [mw('个', 'ge4'), mw('句', 'ju4'), mw('条', 'tiao2')],
  'w:服装:fu2zhuang1': [mw('套', 'tao4')],
  'w:铃:ling2': [mw('个', 'ge4')],
  'w:强度:qiang2du4': [],
  'w:重量:zhong4liang4': [],
  // Batches b018–b021.
  'w:诗歌:shi1ge1': [mw('首', 'shou3')],
  'w:外交:wai4jiao1': [],
  'w:感想:gan3xiang3': [mw('个', 'ge4'), mw('点', 'dian3')],
  'w:录像:lu4xiang4': [mw('段', 'duan4')],
  'w:贸易:mao4yi4': [],
  'w:评论:ping2lun4': [mw('条', 'tiao2'), mw('篇', 'pian1')],
  'w:通讯:tong1xun4': [mw('篇', 'pian1')],
  'w:谈判:tan2pan4': [mw('轮', 'lun2'), mw('次', 'ci4')],
  // Batches b022–b025.
  'w:政策:zheng4ce4': [mw('项', 'xiang4'), mw('个', 'ge4')],
  'w:争论:zheng1lun4': [mw('场', 'chang2')],
  'w:灾害:zai1hai4': [mw('场', 'chang2'), mw('次', 'ci4'), mw('种', 'zhong3')],
  'w:秤:cheng4': [mw('杆', 'gan3'), mw('台', 'tai2')],
  'w:鞭炮:bian1pao4': [mw('挂', 'gua4'), mw('串', 'chuan4')],
  'w:百科全书:bai3ke1quan2shu1': [mw('部', 'bu4'), mw('套', 'tao4'), mw('本', 'ben3')],
  // Zählwörter campaign flags (m001–m004, settled 2026-10-11). Verb: 带 „mitnehmen“ – CC-CEDICT's 条 counts the noun
  // sense „Band, Gürtel“; 影响 – 一股影响 is hardly used.
  'w:带:dai4': [],
  'w:影响:ying3xiang3': [],
  // Person nouns: 三名人 reads as 名人 „Prominente“ (名 stays on 人员, 经理 …); 几口人 is the family count.
  'w:人:ren2': [mw('个', 'ge4'), mw('位', 'wei4'), mw('口', 'kou3')],
  'w:人员:ren2yuan2': [mw('名', 'ming2'), mw('个', 'ge4')],
  // Rare or regional pairings out: 一宗心事, 一缸啤酒, 一面毯子, 一通报告, 一股道, 一套桌子 (only 一套桌椅), 一口猪
  // (头 is usual), 一颗苹果/西瓜/土豆 (Taiwan/regional; mainland 个), 一条沙发 (张/个).
  'w:心事:xin1shi4': [mw('桩', 'zhuang1'), mw('件', 'jian4')],
  'w:啤酒:pi2jiu3': [mw('杯', 'bei1'), mw('瓶', 'ping2'), mw('罐', 'guan4'), mw('桶', 'tong3')],
  'w:毯子:tan3zi5': [mw('条', 'tiao2'), mw('张', 'zhang1'), mw('床', 'chuang2')],
  'w:报告:bao4gao4': [mw('篇', 'pian1'), mw('份', 'fen4'), mw('个', 'ge4')],
  'w:道:dao4': [mw('条', 'tiao2')],
  'w:桌子:zhuo1zi5': [mw('张', 'zhang1')],
  'w:猪:zhu1': [mw('头', 'tou2')],
  'w:苹果:ping2guo3': [mw('个', 'ge4')],
  'w:西瓜:xi1gua1': [mw('个', 'ge4')],
  'w:土豆:tu3dou4': [mw('个', 'ge4')],
  'w:沙发:sha1fa1': [mw('张', 'zhang1'), mw('个', 'ge4')],
  // 枝 for pens and guns is a variant spelling of 支 (CC-CEDICT lists both): the pens keep 支; 枝 counts flowers on
  // their stem and branches.
  'w:笔:bi3': [mw('支', 'zhi1')],
  'w:铅笔:qian1bi3': [mw('支', 'zhi1'), mw('杆', 'gan3')],
  'w:毛笔:mao2bi3': [mw('支', 'zhi1'), mw('管', 'guan3')],
  'w:枪:qiang1': [mw('支', 'zhi1'), mw('把', 'ba3'), mw('杆', 'gan3'), mw('条', 'tiao2')],
  'w:花:hua1#2': [mw('朵', 'duo3'), mw('支', 'zhi1'), mw('枝', 'zhi1'), mw('束', 'shu4'), mw('把', 'ba3'), mw('盆', 'pen2'), mw('簇', 'cu4')],
  'w:玫瑰:mei2gui1': [mw('朵', 'duo3'), mw('枝', 'zhi1'), mw('棵', 'ke1')],
  'w:梅花:mei2hua1': [mw('枝', 'zhi1'), mw('朵', 'duo3')],
  // Typical nouns the classifier lists lacked: 一句话 has no vocab entry (话 only in compounds), 一堆…, 一袋….
  'w:句子:ju4zi5': [mw('个', 'ge4'), mw('句', 'ju4')],
  'w:垃圾:la1ji1': [mw('堆', 'dui1'), mw('袋', 'dai4')],
  'w:衣服:yi1fu5': [mw('件', 'jian4'), mw('套', 'tao4'), mw('堆', 'dui1')],
  'w:沙子:sha1zi5': [mw('粒', 'li4'), mw('把', 'ba3'), mw('堆', 'dui1')],
  'w:问题:wen4ti2': [mw('个', 'ge4'), mw('堆', 'dui1')],
  'w:大米:da4mi3': [mw('袋', 'dai4')],
  'w:面粉:mian4fen3': [mw('袋', 'dai4')],
  'w:牛奶:niu2nai3': [mw('瓶', 'ping2'), mw('杯', 'bei1'), mw('袋', 'dai4')],
  'w:薯片:shu3pian4': [mw('袋', 'dai4'), mw('包', 'bao1')]
};

// Homograph rule (settled 2026-10-11): CC-CEDICT lists classifiers per reading, not per sense. When a verb shares word
// and reading with a noun entry (花 huā „ausgeben“ / 花 huā „Blume“, 制服 zhìfú „überwältigen“ / „Uniform“), the
// dictionary classifiers belong to the noun and the verb gets none. relevel.cjs and fix-inline-classifiers.cjs apply
// the same rule, so reruns do not bring them back. (Verbs without a noun homograph keep the specific classifiers of
// their own nominal use: 工作 份, 回信 封, 咳嗽 阵; a noun sense the verb entry does not cover goes via CORRECTIONS: 带.)
const readingKey = item => item.id.split(':')[2].replace(/#\d+$/, '');
const nounReadings = items => new Set(items.filter(i => i.type === 'Nomen').map(i => i.word + '|' + readingKey(i)));
const verbWithNounHomograph = (item, nouns) => item.type === 'Verb' && nouns.has(item.word + '|' + readingKey(item));

// Run only as a script; fix-inline-classifiers.cjs and relevel.cjs import the corrections and the homograph rule.
if (require.main === module) main();
module.exports = { CORRECTIONS, KEEP_TYPES, nounReadings, verbWithNounHomograph };

function main() {
const sources = common.loadSources();
const changes = [];
const seen = new Set();
const nouns = nounReadings(sources.flatMap(s => s.items));
for (const source of sources) {
  for (const item of source.items) {
    const before = (item.measureWords || []).map(m => m.word).join('/');
    let after = item.measureWords;
    if (CORRECTIONS[item.id]) { after = CORRECTIONS[item.id]; seen.add(item.id); }
    else if (item.measureWords && verbWithNounHomograph(item, nouns)) after = [];
    else if (item.measureWords && !KEEP_TYPES.has(item.type)) {
      // A verb keeps specific measure words of its noun use; a lone 个 and other parts of speech go.
      after = item.type === 'Verb' ? item.measureWords.filter(m => m.word !== '个') : [];
    }
    if (!after || after.map(m => m.word).join('/') === before) continue;
    changes.push(item.word + ' (' + item.type + '): ' + (before || '–') + ' → ' + (after.map(m => m.word).join('/') || '–'));
    if (after.length) item.measureWords = after; else delete item.measureWords;
  }
}
const missing = Object.keys(CORRECTIONS).filter(id => !seen.has(id));
if (missing.length) throw new Error('Unknown ids: ' + missing.join(', '));
console.log(changes.length + ' entries corrected' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY && changes.length) {
  common.writeSources(sources);
  require('../build-vocab-runtime.cjs').writeVocabRuntime();
}
}
