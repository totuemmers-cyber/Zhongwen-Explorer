// One-off consolidation (parity roadmap, Phase 1 step 4): the 13 grammar files become one
// file per HSK level, without duplicate patterns and with stable ids.
// - Same pattern = same grammar point (55 patterns were described at two or three levels).
//   The lowest level wins; fields come from the most complete description; examples combine.
// - id = g:<pattern>; legacyIds = [pattern] (the former bookmark id).
// - Category spelling variants are normalized in the source (formerly done in app.js).
// Inputs are deleted afterwards, so this script documents the migration and is not rerun.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const html = read('index.html');
const inputFiles = [...html.matchAll(/<script src="(grammar-(?:data|hsk\d|extra)[^"]*\.js)"><\/script>/g)].map(m => m[1]);

const CATEGORY_MAP = { 'Satzstruktur': 'Satzstrukturen', 'Partikeln': 'Partikel', 'Zeitausdruecke': 'Zeitausdrücke' };
const DETAIL_FIELDS = ['formation', 'explanation', 'notes', 'relatedPatterns', 'pinyin'];
const levelNumber = point => Number(String(point.level).replace('HSK', ''));
const completeness = point => DETAIL_FIELDS.filter(f => point[f] && point[f].length).length;

const context = { GRAMMAR_DATA: [] };
context.window = context;
for (const file of inputFiles) vm.runInNewContext(read(file), context, { filename: file });
const points = context.GRAMMAR_DATA;

const groups = new Map();
for (const point of points) {
  if (!groups.has(point.pattern)) groups.set(point.pattern, []);
  groups.get(point.pattern).push(point);
}

const merged = [...groups.values()].map(members => {
  const byLevel = members.slice().sort((a, b) => levelNumber(a) - levelNumber(b));
  const byCompleteness = members.slice().sort((a, b) => completeness(b) - completeness(a) || levelNumber(a) - levelNumber(b));
  const best = byCompleteness[0];
  const entry = {
    id: 'g:' + best.pattern,
    pattern: best.pattern,
    level: byLevel[0].level,
    category: CATEGORY_MAP[best.category] || best.category,
    meaning: best.meaning
  };
  for (const field of DETAIL_FIELDS) {
    const source = byCompleteness.find(p => p[field] && p[field].length);
    if (source) entry[field] = source[field];
  }
  const seen = new Set();
  entry.examples = [];
  for (const point of [best, ...byLevel.filter(p => p !== best)]) {
    for (const example of point.examples || []) {
      if (!example || seen.has(example.chinese)) continue;
      seen.add(example.chinese);
      entry.examples.push(example);
    }
  }
  entry.legacyIds = [best.pattern];
  return entry;
});

// Invariants: unique ids, no pattern or example lost.
assert.strictEqual(new Set(merged.map(e => e.id)).size, merged.length, 'Duplicate grammar ids');
for (const point of points) {
  const entry = merged.find(e => e.pattern === point.pattern);
  assert(entry, 'Lost pattern ' + point.pattern);
  for (const example of point.examples || []) assert(entry.examples.some(e => e.chinese === example.chinese), 'Lost example of ' + point.pattern);
}

const outputs = [];
const newline = html.includes('\r\n') ? '\r\n' : '\n';
for (const level of ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9']) {
  const file = 'grammar-' + level.toLowerCase() + '.js';
  const items = merged.filter(e => e.level === level);
  fs.writeFileSync(path.join(ROOT, file),
    '// Zhongwen Explorer grammar source (consolidated by scripts/consolidate-grammar.cjs). ' + level + '.\n' +
    'window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat(' + JSON.stringify(items, null, 2) + ');\n');
  outputs.push(file);
}

const firstTag = html.indexOf('<script src="' + inputFiles[0] + '"></script>');
let nextHtml = html;
for (const file of inputFiles) nextHtml = nextHtml.replace(new RegExp('[ \\t]*<script src="' + file.replace(/\./g, '\\.') + '"></script>\\r?\\n'), '');
nextHtml = nextHtml.slice(0, firstTag - 2) + outputs.map(f => '  <script src="' + f + '"></script>' + newline).join('') + nextHtml.slice(firstTag - 2);
fs.writeFileSync(path.join(ROOT, 'index.html'), nextHtml);
for (const file of inputFiles) if (!outputs.includes(file)) fs.unlinkSync(path.join(ROOT, file));

console.log(JSON.stringify({
  inputFiles: inputFiles.length,
  points: points.length,
  merged: merged.length,
  complete: merged.filter(e => e.explanation).length,
  byLevel: Object.fromEntries(outputs.map(f => [f, merged.filter(e => 'grammar-' + e.level.toLowerCase() + '.js' === f).length]))
}, null, 2));
