// Adds the classifiers CC-CEDICT writes inline in a sense ("fish (CL:條|条[tiao2],尾[wei3])") to vocab.measureWords.
// relevel.cjs read only "CL:" senses, so 鱼, 菜, 店, 猫 … had none (dictionaries.cjs loadCedict now reads both forms).
// Re-runnable; rules (in line with fix-measure-words.cjs):
//   - CEDICT entries with the vocab entry's reading only (exact numeric key, else neutral-tone tolerant), no proper names;
//   - entries with author corrections (fix-measure-words.cjs CORRECTIONS) are left as the authors set them;
//   - nouns and phrases take all classifiers, verbs only specific ones (never 个), other parts of speech none;
//   - a verb with a noun homograph of the same reading (花 huā „ausgeben“ / „Blume“) takes none: the classifiers belong
//     to the noun (fix-measure-words.cjs verbWithNounHomograph);
//   - 个 is never added as an entry's only classifier: CEDICT marks the generic classifier on abstract nouns and
//     verb-like words (打算, 精神, 年), where it is noise; with other classifiers (or after existing ones) it stays;
//   - merged after the existing measure words, without duplicates.
// measureWords is not part of the enrichment ledger hash (enrich/common.cjs REVIEWED_FIELDS).
// Usage: node scripts/hsk2025/fix-inline-classifiers.cjs [--dry-run]
const common = require('../enrich/common.cjs');
const dict = require('./dictionaries.cjs');
const { CORRECTIONS, KEEP_TYPES, nounReadings, verbWithNounHomograph } = require('./fix-measure-words.cjs');

const DRY = process.argv.includes('--dry-run');
// Inline lists that belong to another sense of the word (reviewed 2026-10-11): 钟 o'clock/time (点 分 秒), 一堆号码,
// 念 "scold" (一顿), 掩护 as a shield (一面), the liver lobe (肝 叶); 词 "word" takes 个 — CEDICT's 首 is for the ci poem only.
const EXCLUDE = { 'w:钟:zhong1': ['点', '分', '秒'], 'w:号码:hao4ma3': ['堆'], 'w:念:nian4': ['顿'], 'w:掩护:yan3hu4': ['面'], 'w:肝:gan1': ['叶'] };
const FIRST = { 'w:词:ci2': [{ word: '个', pinyin: 'ge4' }] };
const cedict = dict.loadCedict();
const syllables = key => key.match(/[a-z]+[1-5]/g) || [];
// Same reading up to neutral tones in multi-syllable words (as relevel.cjs sameReading).
function sameReading(a, b) {
  if (a === b) return true;
  const x = syllables(a), y = syllables(b);
  return x.length > 1 && x.length === y.length && x.every((s, i) => s.slice(0, -1) === y[i].slice(0, -1) &&
    (s.slice(-1) === y[i].slice(-1) || s.slice(-1) === '5' || y[i].slice(-1) === '5'));
}
function classifiersFor(word, key) {
  const list = (cedict.get(word) || []).filter(e => !/^[A-Z]/.test(e.pinyin));
  const exact = list.filter(e => e.key === key);
  const result = [];
  for (const e of exact.length ? exact : list.filter(e => sameReading(e.key, key))) {
    for (const cl of e.classifiers) if (!result.some(r => r.word === cl.word)) result.push({ word: cl.word, pinyin: cl.pinyin });
  }
  return result;
}

const sources = common.loadSources();
const changes = [];
const byLevel = {};
const skippedLone = [];
const nouns = nounReadings(sources.flatMap(s => s.items));
for (const source of sources) {
  for (const item of source.items) {
    if (CORRECTIONS[item.id] || !(KEEP_TYPES.has(item.type) || item.type === 'Verb') || verbWithNounHomograph(item, nouns)) continue;
    const key = item.id.split(':')[2].replace(/#\d+$/, '');
    // Excluded classifiers also go when an earlier run added them.
    const excluded = EXCLUDE[item.id] || [];
    const before = item.measureWords || [];
    const have = before.filter(m => !excluded.includes(m.word));
    let add = (FIRST[item.id] || []).concat(classifiersFor(item.word, key))
      .filter((cl, i, all) => !have.some(m => m.word === cl.word) && all.findIndex(c => c.word === cl.word) === i)
      .filter(cl => !(EXCLUDE[item.id] || []).includes(cl.word));
    if (item.type === 'Verb') add = add.filter(cl => cl.word !== '个');
    if (!have.length && add.length === 1 && add[0].word === '个') { skippedLone.push(item.word); add = []; }
    if (!add.length && have.length === before.length) continue;
    if (have.length + add.length) item.measureWords = have.concat(add); else delete item.measureWords;
    changes.push(item.id + ' (' + item.type + ', ' + item.level + '): ' + (before.map(m => m.word).join('/') || '–') + ' → ' + ((item.measureWords || []).map(m => m.word).join('/') || '–'));
    byLevel[item.level] = (byLevel[item.level] || 0) + 1;
  }
}
console.log(changes.join('\n'));
console.log(changes.length + ' entries gain measure words (' + Object.entries(byLevel).map(([l, n]) => l + ' ' + n).join(', ') + ')' +
  (DRY ? ' (dry run)' : '') + '; lone 个 not added: ' + skippedLone.length + ' (' + skippedLone.join(' ') + ')');
if (!DRY && changes.length) common.writeSources(sources);
