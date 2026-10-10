// Looks up vocabulary entries for glossary items: prints id, pinyin, level and German meaning of each word.
// Usage: node scripts/comprehension/lookup.cjs 学生 中国人 …
const enrich = require('../enrich/common.cjs');

const items = enrich.loadSources().flatMap(source => source.items);
for (const word of process.argv.slice(2)) {
  const hits = items.filter(item => item.word === word);
  if (!hits.length) console.log(word + ': not in the vocabulary');
  for (const item of hits) console.log(word + ': ' + item.id + ' | ' + item.pinyin + ' | ' + item.level + ' | ' + item.meaning);
}
