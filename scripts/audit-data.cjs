// Loads every data script in index.html order (as the browser does) and checks the
// structural invariants the renderers rely on.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const DATA_GLOBALS = ['HANZI_DATA', 'GRAMMAR_DATA', 'VOCAB_HSK1', 'VOCAB_HSK2', 'VOCAB_HSK3', 'VOCAB_HSK4', 'VOCAB_HSK5',
  'VOCAB_HSK6', 'CHENGYU_DATA', 'REDEWENDUNGEN_DATA', 'MEASURE_WORDS_DATA', 'ONOMATOPOEIA_DATA', 'KANGXI_RADICALS', 'PINYIN_DATA'];

const errors = [];
const fail = (message, samples = []) => errors.push(message + (samples.length ? '\n  e.g. ' + samples.slice(0, 5).join('\n  e.g. ') : ''));

// Data files only define globals; application scripts need a DOM and are skipped.
const APP_SCRIPTS = new Set(['section.js', 'section-configs.js', 'grammar-lessons.js', 'quiz.js', 'app.js']);
const context = { console };
context.window = context;
for (const src of scripts) {
  if (APP_SCRIPTS.has(src)) continue;
  const text = fs.readFileSync(path.join(ROOT, src), 'utf8');
  try {
    vm.runInNewContext(text, context, { filename: src });
  } catch (error) {
    fail('Data script failed to load: ' + src + ' (' + error.message + ')');
  }
}
for (const name of DATA_GLOBALS) if (!context[name]) fail('Missing data global ' + name);

const vocab = [];
for (let level = 1; level <= 6; level++) for (const item of context['VOCAB_HSK' + level] || []) vocab.push(item);
for (const item of [...(context.CHENGYU_DATA || []), ...(context.REDEWENDUNGEN_DATA || [])]) vocab.push(item);
const noWord = vocab.filter(item => !item || typeof item.word !== 'string' || !item.word.trim());
if (noWord.length) fail(noWord.length + ' vocabulary entries without word', noWord.map(item => JSON.stringify(item).slice(0, 120)));

const grammar = context.GRAMMAR_DATA || [];
const badExamples = [];
for (const point of grammar) {
  for (const example of point.examples || []) {
    if (typeof example.chinese !== 'string' || typeof example.german !== 'string') badExamples.push(point.pattern + ': ' + JSON.stringify(example).slice(0, 100));
  }
}
if (badExamples.length) fail(badExamples.length + ' grammar examples without chinese/german text', badExamples);

const measureWords = (context.MEASURE_WORDS_DATA && context.MEASURE_WORDS_DATA.measureWords) || [];
const badRows = [];
for (const word of measureWords) {
  for (const row of word.table || []) if (typeof row.chinese !== 'string') badRows.push(word.classifier + ': ' + JSON.stringify(row));
}
if (badRows.length) fail(badRows.length + ' measure-word table rows without chinese', badRows);

const buttons = new Set([...html.matchAll(/data-mwcat="([^"]+)"/g)].map(m => m[1]));
const categories = [...new Set(measureWords.map(word => word.category))];
const unreachable = categories.filter(category => !buttons.has(category));
if (unreachable.length) fail('Measure-word categories without a filter button: ' + unreachable.join(', '));

if (errors.length) {
  console.error(errors.join('\n\n'));
  process.exit(1);
}
console.log('Data audit passed: ' + vocab.length + ' vocabulary rows, ' + grammar.length + ' grammar points, ' +
  measureWords.length + ' measure words, ' + categories.length + ' measure-word categories.');
