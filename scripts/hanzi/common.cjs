// Shared helpers for the hanzi data: the per-level source files, loading and writing them, the Kangxi
// radicals and the stroke count of an AnimCJK diagram.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9', 'Zusatz'];
const LEVEL_RANK = Object.fromEntries(LEVELS.map((level, i) => [level, i + 1]));
const fileOf = level => 'hanzi-' + level.toLowerCase() + '.js';
const FILES = LEVELS.map(fileOf);
const HEADER = '// Hanzi of the HSK 2025 syllabus (reading list) and further characters of the vocabulary (Zusatz).\n' +
  '// Built by scripts/hanzi/build-hanzi.cjs; content reviewed by the enrichment campaign. Component data\n' +
  '// derived from AnimCJK and Make Me a Hanzi (LGPL-3.0, licenses/LGPL-3.0.txt).\n';
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');

function runFiles(files) {
  const context = {};
  context.window = context;
  for (const file of files) vm.runInNewContext(read(file), context, { filename: file });
  return context;
}

// All hanzi entries from the per-level files (in level order).
function loadHanzi(files = FILES) {
  return runFiles(files.filter(file => fs.existsSync(path.join(ROOT, file)))).HANZI_DATA || [];
}

function writeHanzi(entries) {
  for (const level of LEVELS) {
    const items = entries.filter(entry => entry.level === level);
    fs.writeFileSync(path.join(ROOT, fileOf(level)),
      HEADER + 'window.HANZI_DATA = (window.HANZI_DATA || []).concat(' + JSON.stringify(items, null, 2) + ');\n');
  }
}

// The 214 Kangxi radicals (number, radical, variants, meaning …).
function loadRadicals() {
  const files = fs.readdirSync(ROOT).filter(file => /^kangxi-radicals.*\.js$/.test(file)).sort();
  return runFiles(files).KANGXI_RADICALS;
}

const svgFile = ch => path.join(ROOT, 'stroke-order', ch.codePointAt(0) + '.svg');
// Strokes an AnimCJK diagram draws (ids z<codepoint>d<n>), or null without a diagram.
function svgStrokeCount(ch) {
  if (!fs.existsSync(svgFile(ch))) return null;
  const ids = fs.readFileSync(svgFile(ch), 'utf8').match(/id="z\d+d(\d+)"/g) || [];
  return new Set(ids).size || null;
}

// German words written with ae/oe/ue instead of ä/ö/ü (Koenig, Huegel, Gefaess). Real letter sequences stay
// allowed: aue/eue/que (Frauen, Feuer, Quelle), -uell (aktuell, Duell), and a few loan words and names.
const UMLAUT_OK = /^(Israel\w*|Michael|Raphael|Aerobic|Poe[st]\w*|Koexist\w*|Oboe\w*|Aloe|Statue\w*|Sequenz\w*|Frequenz\w*|Kongruenz\w*|Influen\w*|Duett\w*|Suez|Manuel\w*|Samuel|[Zz]uerst|[Zz]uerkenn\w*)$/;
function asciiUmlauts(text) {
  return (String(text || '').match(/[A-Za-zÄÖÜäöüß]*(?:ae|oe|ue)[A-Za-zÄÖÜäöüß]*/gi) || []).filter(word => {
    if (UMLAUT_OK.test(word)) return false;
    const pairs = word.match(/(.?)(ae|oe|ue)(.?.?)/gi) || [];
    return pairs.some(pair => {
      const m = pair.match(/(.?)(ae|oe|ue)(.?.?)/i);
      const before = m[1].toLowerCase(), pairText = m[2].toLowerCase(), after = m[3].toLowerCase();
      if (pairText === 'ue' && (before === 'a' || before === 'e' || before === 'q')) return false;
      if (pairText === 'ue' && after.startsWith('ll')) return false;
      if (pairText === 'ae' && before === 'h' && after === 'l') return false; // Michael-like names
      return true;
    });
  });
}

module.exports = { ROOT, LEVELS, LEVEL_RANK, FILES, fileOf, loadHanzi, writeHanzi, loadRadicals, svgFile, svgStrokeCount, asciiUmlauts };
