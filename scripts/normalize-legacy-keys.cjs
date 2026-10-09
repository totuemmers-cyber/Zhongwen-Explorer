// One-off source normalization (Phase 0): later data files used other field names than
// the renderers read. Grammar examples: zh/de -> chinese/german. Measure-word count
// tables: form -> chinese. The text is rewritten in place (formatting kept) and the
// result is verified to equal the old data with exactly that key mapping applied.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const GRAMMAR_FILES = ['grammar-extra.js', 'grammar-extra2.js', 'grammar-extra3.js', 'grammar-extra4.js', 'grammar-extra5.js',
  'grammar-extra6.js', 'grammar-hsk4-extra.js', 'grammar-hsk5-extra.js', 'grammar-hsk6-extra.js'];
const MEASURE_FILES = ['measure-words-extra.js', 'measure-words-extra2.js'];

// Each file appends to a global; evaluate it against empty stubs and return what it added.
function evaluate(text) {
  const context = { GRAMMAR_DATA: [], MEASURE_WORDS_DATA: { measureWords: [] } };
  context.window = context;
  vm.runInNewContext(text, context);
  return JSON.parse(JSON.stringify({ grammar: context.GRAMMAR_DATA, measureWords: context.MEASURE_WORDS_DATA.measureWords }));
}

function renameKeys(object, mapping) {
  const next = {};
  for (const key of Object.keys(object)) next[mapping[key] || key] = object[key];
  return next;
}

function normalizeGrammar(text) {
  return text.replace(/([{,]\s*)(["']?)zh\2(\s*:)/g, '$1$2chinese$2$3').replace(/([{,]\s*)(["']?)de\2(\s*:)/g, '$1$2german$2$3');
}

function normalizeMeasureWords(text) {
  // Count-table rows always start with "number"; specialForms rows legitimately use "form".
  return text.replace(/(\{\s*"number":[^{}]*?)"form":/g, '$1"chinese":');
}

function expectedGrammar(points) {
  return points.map(point => Object.assign({}, point, {
    examples: (point.examples || []).map(example => renameKeys(example, { zh: 'chinese', de: 'german' }))
  }));
}

function expectedMeasureWords(words) {
  return words.map(word => Object.assign({}, word, {
    table: (word.table || []).map(row => renameKeys(row, { form: 'chinese' }))
  }));
}

let changedFiles = 0;
for (const [files, normalize, expected, key] of [
  [GRAMMAR_FILES, normalizeGrammar, expectedGrammar, 'grammar'],
  [MEASURE_FILES, normalizeMeasureWords, expectedMeasureWords, 'measureWords']
]) {
  for (const file of files) {
    const before = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const after = normalize(before);
    const oldData = evaluate(before)[key];
    // Every example/row must still be present, with only the mapped keys renamed.
    assert.deepStrictEqual(evaluate(after)[key], expected(oldData), 'Unexpected change in ' + file);
    if (after !== before) {
      fs.writeFileSync(path.join(ROOT, file), after);
      changedFiles++;
    }
  }
}
console.log('Normalized ' + changedFiles + ' files.');
