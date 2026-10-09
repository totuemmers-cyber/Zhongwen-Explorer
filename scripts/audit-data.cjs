// Loads every data script the app loads (startup data plus the per-section manifest in
// lang-profile.js, in loader order) and checks the structural invariants the renderers rely on.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const DATA_GLOBALS = ['HANZI_DATA', 'GRAMMAR_DATA', 'VOCAB_HSK1', 'VOCAB_HSK2', 'VOCAB_HSK3', 'VOCAB_HSK4', 'VOCAB_HSK5',
  'VOCAB_HSK6', 'VOCAB_HSK7_9', 'CHENGYU_DATA', 'REDEWENDUNGEN_DATA', 'MEASURE_WORDS_DATA', 'ONOMATOPOEIA_DATA', 'KANGXI_RADICALS', 'PINYIN_DATA'];

const errors = [];
const fail = (message, samples = []) => errors.push(message + (samples.length ? '\n  e.g. ' + samples.slice(0, 5).join('\n  e.g. ') : ''));

const context = { console };
context.window = context;
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'lang-profile.js'), 'utf8'), context, { filename: 'lang-profile.js' });
const manifest = context.LANG_PROFILE.dataScripts;
// Startup data is listed in index.html; everything else comes from the section manifest.
const STARTUP_DATA = ['pinyin-data.js'];
for (const src of STARTUP_DATA) if (!html.includes('<script src="' + src + '"></script>')) fail('index.html does not load ' + src);
const scripts = [...STARTUP_DATA, ...new Set(Object.keys(manifest).flatMap(name => manifest[name]))];
for (const src of scripts) {
  if (!fs.existsSync(path.join(ROOT, src))) { fail('Manifest lists a missing file: ' + src); continue; }
  const text = fs.readFileSync(path.join(ROOT, src), 'utf8');
  try {
    vm.runInNewContext(text, context, { filename: src });
  } catch (error) {
    fail('Data script failed to load: ' + src + ' (' + error.message + ')');
  }
}
for (const name of DATA_GLOBALS) if (!context[name]) fail('Missing data global ' + name);

const vocab = [];
for (const name of ['VOCAB_HSK1', 'VOCAB_HSK2', 'VOCAB_HSK3', 'VOCAB_HSK4', 'VOCAB_HSK5', 'VOCAB_HSK6', 'VOCAB_HSK7_9']) for (const item of context[name] || []) vocab.push(item);
for (const item of [...(context.CHENGYU_DATA || []), ...(context.REDEWENDUNGEN_DATA || [])]) vocab.push(item);
const noWord = vocab.filter(item => !item || typeof item.word !== 'string' || !item.word.trim());
if (noWord.length) fail(noWord.length + ' vocabulary entries without word', noWord.map(item => JSON.stringify(item).slice(0, 120)));

// Stable ids: unique, and every former bookmark id (legacyIds) resolves to exactly one entry.
const ids = new Map();
const legacy = new Map();
const idProblems = [];
for (const item of vocab) {
  if (typeof item.id !== 'string' || !/^w:/.test(item.id)) idProblems.push('missing id: ' + item.word);
  else if (ids.has(item.id)) idProblems.push('duplicate id: ' + item.id);
  else ids.set(item.id, item);
  for (const old of item.legacyIds || []) {
    if (legacy.has(old) && legacy.get(old) !== item.id) idProblems.push('legacy id ' + old + ' maps to ' + legacy.get(old) + ' and ' + item.id);
    legacy.set(old, item.id);
  }
}
for (const old of legacy.keys()) if (ids.has(old)) idProblems.push('legacy id equals a current id: ' + old);
if (idProblems.length) fail(idProblems.length + ' vocabulary id problems', idProblems);

const grammar = context.GRAMMAR_DATA || [];
const badExamples = [];
for (const point of grammar) {
  for (const example of point.examples || []) {
    if (typeof example.chinese !== 'string' || typeof example.german !== 'string') badExamples.push(point.pattern + ': ' + JSON.stringify(example).slice(0, 100));
  }
}
if (badExamples.length) fail(badExamples.length + ' grammar examples without chinese/german text', badExamples);
const grammarIds = grammar.map(point => point.id);
const badGrammarIds = grammarIds.filter((id, i) => typeof id !== 'string' || !/^g:/.test(id) || grammarIds.indexOf(id) !== i);
if (badGrammarIds.length) fail(badGrammarIds.length + ' missing or duplicate grammar ids', badGrammarIds.map(String));

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
