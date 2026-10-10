// Shared helpers for the grammar data: the per-level source files (grammar-<level>.js), loading and writing them.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9', 'Zusatz'];
const fileOf = level => 'grammar-' + level.toLowerCase() + '.js';

function headerOf(file) {
  const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
  return (text.match(/^((?:\/\/[^\n]*\n)*)/) || ['', ''])[1];
}

// All grammar points in level order.
function loadGrammar() {
  const context = {};
  context.window = context;
  for (const level of LEVELS) {
    const file = fileOf(level);
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
  }
  return context.GRAMMAR_DATA || [];
}

function writeGrammar(entries) {
  for (const level of LEVELS) {
    const file = fileOf(level);
    fs.writeFileSync(path.join(ROOT, file), headerOf(file) +
      'window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat(' + JSON.stringify(entries.filter(e => e.level === level), null, 2) + ');\n');
  }
}

// The core words an example must show: the Chinese parts of the pattern (除非……，否则/不然…… → 除非, 否则|不然),
// without placeholders and grammatical metalanguage; a word point's word without sense number and brackets.
function requiredTokens(entry) {
  if (entry.kind === 'word') {
    const w = entry.pattern.replace(/[¹²³⁴⁵⁶⁷⁸⁹—]/g, '');
    return [[w.replace(/（(.*?)）/g, '$1'), w.replace(/（.*?）/g, '')].filter((x, i, a) => x && a.indexOf(x) === i)];
  }
  if (entry.kind === 'overview' || !/……|\+|[A-Z]|\//.test(entry.pattern)) return [];
  return require('./remap.cjs').tokens(entry.pattern.replace(/^[^：]*：/, ''));
}

module.exports = { ROOT, LEVELS, fileOf, loadGrammar, writeGrammar, requiredTokens };
