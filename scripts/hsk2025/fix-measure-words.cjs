// One-off correction (2026-10-09): CC-CEDICT classifier lines and the legacy data attached measure
// words to verbs, adjectives, adverbs and affixes (打算 个, 可能 个, 性 个) and some wrong ones to nouns.
// Keeps specific measure words on verbs whose noun use takes them (工作 份, 回信 封, 咳嗽 阵) and
// applies the corrections enrichment authors flagged for nouns.
// Usage: node scripts/hsk2025/fix-measure-words.cjs [--dry-run]
const common = require('../enrich/common.cjs');

const DRY = process.argv.includes('--dry-run');
const KEEP_TYPES = new Set(['Nomen', 'Phrase']);
const mw = (word, pinyin) => ({ word, pinyin });
// Author flags (Phase 3 batches b006–b009): id → corrected list ([] removes the field).
const CORRECTIONS = {
  'w:信心:xin4xin1': [],
  'w:学费:xue2fei4': [mw('笔', 'bi3')],
  'w:年龄:nian2ling2': [],
  'w:货:huo4': [mw('批', 'pi1'), mw('件', 'jian4')],
  'w:鼻子:bi2zi5': [mw('个', 'ge4')],
  'w:广告:guang3gao4': [mw('个', 'ge4'), mw('条', 'tiao2')],
  'w:课程:ke4cheng2': [mw('门', 'men2')],
  'w:袜子:wa4zi5': [mw('双', 'shuang1'), mw('只', 'zhi1')]
};

const sources = common.loadSources();
const changes = [];
const seen = new Set();
for (const source of sources) {
  for (const item of source.items) {
    const before = (item.measureWords || []).map(m => m.word).join('/');
    let after = item.measureWords;
    if (CORRECTIONS[item.id]) { after = CORRECTIONS[item.id]; seen.add(item.id); }
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
