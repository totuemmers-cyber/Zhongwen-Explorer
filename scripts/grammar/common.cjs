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
  if (entry.kind === 'overview') return [];
  const { tokens } = require('./remap.cjs');
  // A quoted pattern in a label (“是……的”句1：强调时间…, “怎样+动词”的特指问句) is the pattern; the rest describes it.
  const quoted = entry.pattern.match(/“([^”]+)”/);
  // Labels end at the last colon (趋向补语的引申用法：（1）表示结果意义：动词+出/起/下).
  let text = quoted ? quoted[1] : entry.pattern.slice(entry.pattern.lastIndexOf('：') + 1);
  if (!/……|\+|[A-Z]|\//.test(text) && !quoted) return [];
  // A quoted word list (用“大约、左右、前后”表示概数): any one of the words.
  if (quoted && /、/.test(text) && !/……|\+/.test(text)) return [text.split('、').filter(Boolean)];
  // Optional parts in brackets (动态助词（了）, 别提（有）多) are not required; they only separate the words around them.
  text = text.replace(/（[^）]*）|\([^)]*\)/g, ' … ');
  // Placeholders: phrase and constituent names (形容词性短语, 动量补语) are no words of the sentence.
  const clean = groups => groups.map(alts => alts.filter(a => !/(短语|补语|词语|成分|代词)$/.test(a))).filter(alts => alts.length);
  // Complete alternative patterns (A比B+动词+得+形容词/A+动词+得+比+B+形容词; AA、A一A、A了A、ABAB): only the words all
  // share are required, in any order, so one group of them; numbered variants (①疑问代词+都……②疑问代词+疑问代词) as well.
  const halves = text.split('/');
  const whole = h => /\p{Script=Han}[^/]*[A-Z][^/]*\p{Script=Han}/u.test(h); // a complete frame around a placeholder
  const variants = halves.length === 2 && halves.every(whole) ? halves // 看你X的/瞧他X的
    : text.split(/\/(?=[A-Z])|、|[①-⑩]/).filter(v => v.trim());
  if (variants.length > 1) {
    const sets = variants.map(v => new Set(clean(tokens(v)).flat()));
    const common = [...sets[0]].filter(t => sets.every(s => s.has(t)));
    return common.length ? [common] : [];
  }
  return clean(tokens(text));
}

module.exports = { ROOT, LEVELS, fileOf, loadGrammar, writeGrammar, requiredTokens };
