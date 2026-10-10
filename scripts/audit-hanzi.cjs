// Audits the hanzi section against the HSK 2025 character lists, the vocabulary and the stroke diagrams:
// coverage (every reading character at its level, the handwriting list, every character of a word),
// the entry fields, the 214 Kangxi radicals, and German spelling of reviewed entries.
// Usage: node scripts/audit-hanzi.cjs
const fs = require('fs');
const path = require('path');
const enrich = require('./enrich/common.cjs');
const hanzi = require('./hanzi/common.cjs');

const HAN = /\p{Script=Han}/u;
// AnimCJK has no diagram for these rare characters (CONTENT-SOURCES.md).
const NO_DIAGRAM = new Set(Array.from('弢翛愊赒阛阓瞋骱槃'));
const errors = [];
const fail = message => { if (errors.length < 80) errors.push(message); else if (errors.length === 80) errors.push('…'); };

const entries = hanzi.loadHanzi();
const radicals = hanzi.loadRadicals();
const characters = require('./hsk2025/characters.json');
const vocab = enrich.loadSources().flatMap(source => source.items);
const vocabById = new Map(vocab.map(item => [item.id, item]));
const byChar = new Map();
for (const entry of entries) {
  if (byChar.has(entry.hanzi)) fail('duplicate ' + entry.hanzi);
  byChar.set(entry.hanzi, entry);
}

// Coverage.
for (const [level, chars] of Object.entries(characters.reading)) {
  for (const ch of chars) {
    const entry = byChar.get(ch);
    if (!entry) fail('reading-list character missing: ' + ch);
    else if (entry.level !== 'HSK' + level) fail(ch + ' level ' + entry.level + ', syllabus HSK' + level);
  }
}
const writing = new Map();
for (const [level, chars] of Object.entries(characters.writing)) for (const ch of chars) writing.set(ch, level);
for (const entry of entries) {
  if ((entry.writingLevel || null) !== (writing.get(entry.hanzi) || null)) fail(entry.hanzi + ' writingLevel ' + entry.writingLevel + ', syllabus ' + writing.get(entry.hanzi));
}
const used = new Set();
for (const item of vocab) for (const ch of Array.from(item.word)) if (HAN.test(ch)) used.add(ch);
for (const ch of used) if (!byChar.has(ch)) fail('character of a vocabulary word missing: ' + ch);
for (const entry of entries) {
  if (entry.level === 'Zusatz' && !used.has(entry.hanzi)) fail('Zusatz character used in no word: ' + entry.hanzi);
}

// Fields.
const radicalChars = new Set(radicals.map(r => r.radical));
// Radicals that always appear in their short form inside other characters.
const SHORT_RADICAL = { '阜': '阝', '邑': '阝', '竹': '⺮' };
const LEVELS = new Set(hanzi.LEVELS);
for (const entry of entries) {
  const ch = entry.hanzi;
  if (!LEVELS.has(entry.level)) fail(ch + ': level ' + entry.level);
  if (!Array.isArray(entry.readings) || !entry.readings.length || entry.readings.some(r => !r.pinyin)) fail(ch + ': readings');
  if (entry.meaningStatus !== 'draft' && entry.readings.some(r => !r.meaning)) fail(ch + ': reviewed reading without meaning');
  if (!Array.isArray(entry.traditional) || !entry.traditional.length) fail(ch + ': traditional');
  if (!radicalChars.has(entry.primaryRadical)) fail(ch + ': primaryRadical ' + entry.primaryRadical);
  if (SHORT_RADICAL[entry.primaryRadical] && ch !== entry.primaryRadical && entry.radicalForm !== SHORT_RADICAL[entry.primaryRadical]) fail(ch + ': radicalForm ' + entry.radicalForm + ', expected ' + SHORT_RADICAL[entry.primaryRadical]);
  const diagram = hanzi.svgStrokeCount(ch);
  if (diagram ? entry.noDiagram : !entry.noDiagram || !NO_DIAGRAM.has(ch)) fail(ch + ': stroke diagram ' + (diagram ? 'present but noDiagram' : 'missing'));
  if (diagram && entry.strokes !== diagram) fail(ch + ': strokes ' + entry.strokes + ', diagram draws ' + diagram);
  if (!Number.isInteger(entry.strokes) || entry.strokes < 1) fail(ch + ': strokes');
  if (!Array.isArray(entry.components)) fail(ch + ': components');
  if (!Array.isArray(entry.words) || !entry.words.length) fail(ch + ': no example words');
  for (const id of entry.words || []) {
    const word = vocabById.get(id);
    if (!word) fail(ch + ': unknown word ' + id);
    else if (!word.word.includes(ch)) fail(ch + ': word ' + word.word + ' does not contain it');
  }
  if (entry.meaningStatus !== 'draft') {
    const german = entry.readings.map(r => r.meaning).concat((entry.components || []).map(c => c.meaning), [entry.notes]).join(' ');
    const spelled = hanzi.asciiUmlauts(german);
    if (spelled.length) fail(ch + ': write umlauts (' + spelled.join(', ') + ')');
  }
}

// Radicals.
if (radicals.length !== 214) fail('radicals: ' + radicals.length + ' instead of 214');
const numbers = new Set(radicals.map(r => r.number));
for (let n = 1; n <= 214; n++) if (!numbers.has(n)) fail('radical #' + n + ' missing');
for (const r of radicals) {
  const spelled = hanzi.asciiUmlauts(r.meaning + ' ' + r.explanation);
  if (spelled.length) fail('radical #' + r.number + ': write umlauts (' + spelled.join(', ') + ')');
}
const svgs = fs.readdirSync(path.join(hanzi.ROOT, 'stroke-order')).filter(name => name.endsWith('.svg'));
const expected = new Set(entries.filter(e => !e.noDiagram).map(e => e.hanzi.codePointAt(0) + '.svg'));
for (const name of svgs) if (!expected.has(name)) fail('stroke-order/' + name + ' belongs to no hanzi');

if (errors.length) {
  console.error('Hanzi audit failed:\n' + errors.join('\n'));
  process.exit(1);
}
const counts = {};
for (const entry of entries) counts[entry.level] = (counts[entry.level] || 0) + 1;
console.log('Hanzi audit passed: ' + entries.length + ' characters ' + JSON.stringify(counts) + ', ' +
  entries.filter(e => e.writingLevel).length + ' handwriting, ' + entries.filter(e => e.meaningStatus !== 'draft').length + ' reviewed, ' +
  svgs.length + ' stroke diagrams, 214 radicals.');
