// One-off consolidation (parity roadmap, Phase 1 step 2): the ~100 appended vocabulary
// files become one source file per level, without duplicates and with stable ids.
//
// - Same word + same reading (tone-numbered) = same entry. Readings that differ only by a
//   neutral tone or by 一/不 tone sandhi are the same multi-syllable word (故事 gùshi/gùshì,
//   一起 yīqǐ/yìqǐ). Different full tones or syllables stay separate (还 hái/huán, 过 guò/guo).
// - The lowest HSK level wins; the longest meaning is kept; examples are combined.
// - Chengyu and Redewendungen keep their own files and absorb duplicates from the level lists
//   (each word exists once, typed by its most specific source).
// - id = w:<word>:<numeric pinyin of the kept reading>; legacyIds = every former
//   word|pinyin bookmark id merged into the entry.
// Inputs are deleted afterwards, so this script documents the migration and is not rerun.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const html = read('index.html');
const VOCAB_SCRIPT = /^(vocab-hsk\d[^"]*|chengyu-data[^"]*|redewendungen-data[^"]*)\.js$/;
const inputFiles = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]).filter(src => VOCAB_SCRIPT.test(src));

const context = { console };
context.window = context;
vm.runInNewContext(read('pinyin.js'), context, { filename: 'pinyin.js' });
for (const file of inputFiles) vm.runInNewContext(read(file), context, { filename: file });
const Pinyin = context.Pinyin;

// Former runtime normalization in app.js loadData, now applied at the source.
const TYPE_MAP = {
  'Verben': 'Verb', 'Adjektive': 'Adjektiv', 'Adverbien': 'Adverb',
  'Redewendungen': 'Redewendung', 'Konjunktionen': 'Konjunktion',
  'Zaehlwort': 'Zahlwort', 'Zählwort': 'Zahlwort',
  'Praposition': 'Präposition', 'Praeposition': 'Präposition',
  'Prapositionen': 'Präposition', 'Praefix': 'Präfix'
};

const numericOf = item => Pinyin.toNumeric(item.pinyin || '', item.word).toLowerCase();
const syllablesOf = numeric => numeric.match(/[a-z]+[1-5]/g) || [];
const legacyId = item => item.word + '|' + (item.pinyin || '');

function sameWord(a, b) {
  if (a === b) return true;
  const x = syllablesOf(a), y = syllablesOf(b);
  if (x.length < 2 || x.length !== y.length) return false;
  return x.every((syllable, i) => {
    const base = syllable.slice(0, -1), toneA = syllable.slice(-1), toneB = y[i].slice(-1);
    if (base !== y[i].slice(0, -1)) return false;
    if (toneA === toneB || toneA === '5' || toneB === '5') return true;
    // 一 and 不 are written with their sandhi tone in some lists.
    return (base === 'yi' && '124'.includes(toneA) && '124'.includes(toneB)) ||
      (base === 'bu' && '24'.includes(toneA) && '24'.includes(toneB));
  });
}

// Every entry from every source, in priority order for placement: specialist lists first,
// then the levels in ascending order (file order within a level).
const sources = [
  { name: 'chengyu', items: context.CHENGYU_DATA },
  { name: 'redewendungen', items: context.REDEWENDUNGEN_DATA },
  ...[1, 2, 3, 4, 5, 6].map(level => ({ name: 'hsk' + level, level, items: context['VOCAB_HSK' + level] }))
];
const levelNumber = item => Number(String(item.level || '').replace('HSK', '')) || 99;

const groups = [];
const byWord = new Map();
for (const source of sources) {
  for (const raw of source.items) {
    const item = Object.assign({}, raw, { type: TYPE_MAP[raw.type] || raw.type });
    const numeric = numericOf(item);
    const candidates = byWord.get(item.word) || [];
    const group = candidates.find(g => g.numeric === numeric) || candidates.find(g => sameWord(g.numeric, numeric));
    if (group) {
      group.members.push({ item, source: source.name });
    } else {
      const created = { word: item.word, numeric, source: source.name, members: [{ item, source: source.name }] };
      groups.push(created);
      byWord.set(item.word, candidates.concat([created]));
    }
  }
}

function mergeGroup(group) {
  const members = group.members;
  // The placement source decides type; the lowest level's reading is kept.
  const byLevel = members.slice().sort((a, b) => levelNumber(a.item) - levelNumber(b.item));
  const base = byLevel[0].item;
  const placed = members[0].item;
  const examples = [];
  const seen = new Set();
  for (const { item } of byLevel) {
    for (const example of item.examples || []) {
      if (!example || !example.chinese || seen.has(example.chinese)) continue;
      seen.add(example.chinese);
      examples.push(example);
    }
  }
  const meaning = members.map(m => m.item.meaning || '').reduce((a, b) => (b.length > a.length ? b : a), '');
  const category = [placed, ...byLevel.map(m => m.item)].map(i => i.category).find(Boolean);
  const entry = {
    id: 'w:' + base.word + ':' + numericOf(base),
    word: base.word,
    pinyin: base.pinyin,
    meaning,
    type: placed.type,
    level: 'HSK' + levelNumber(base)
  };
  if (category) entry.category = category;
  entry.examples = examples;
  entry.legacyIds = [...new Set(members.map(m => legacyId(m.item)))];
  return { entry, source: group.source, members };
}

const merged = groups.map(mergeGroup);

// Invariants: unique ids, every former id and example survives in exactly one entry.
const ids = new Set();
const legacyOwner = new Map();
for (const { entry } of merged) {
  assert(!ids.has(entry.id), 'Duplicate id ' + entry.id);
  ids.add(entry.id);
  for (const old of entry.legacyIds) {
    // A former id may name two different words only if they were never the same entry.
    if (legacyOwner.has(old)) assert.fail('Legacy id ' + old + ' maps to ' + legacyOwner.get(old) + ' and ' + entry.id);
    legacyOwner.set(old, entry.id);
  }
}
for (const source of sources) {
  for (const item of source.items) {
    const owner = legacyOwner.get(legacyId(item));
    assert(owner, 'Lost entry ' + legacyId(item));
    const entry = merged.find(m => m.entry.id === owner).entry;
    for (const example of item.examples || []) {
      if (example && example.chinese) assert(entry.examples.some(e => e.chinese === example.chinese), 'Lost example of ' + owner);
    }
  }
}

function writeList(file, globalName, header, items) {
  const body = items.length ? JSON.stringify(items, null, 2) : '[]';
  fs.writeFileSync(path.join(ROOT, file), header + '\nwindow.' + globalName + ' = ' + body + ';\n');
}

const HEADER = '// Zhongwen Explorer vocabulary source (consolidated by scripts/consolidate-vocab.cjs).';
const outputs = [];
for (const level of [1, 2, 3, 4, 5, 6]) {
  const items = merged.filter(m => m.source.startsWith('hsk') && m.entry.level === 'HSK' + level).map(m => m.entry);
  writeList('vocab-hsk' + level + '.js', 'VOCAB_HSK' + level, HEADER + ' HSK ' + level + '.', items);
  outputs.push('vocab-hsk' + level + '.js');
}
writeList('vocab-hsk7-9.js', 'VOCAB_HSK7_9', HEADER + ' HSK 7-9 band (HSK 2025 syllabus; filled in Phase 2).', []);
outputs.push('vocab-hsk7-9.js');
writeList('chengyu-data.js', 'CHENGYU_DATA', HEADER + ' Chengyu (成语).', merged.filter(m => m.source === 'chengyu').map(m => m.entry));
writeList('redewendungen-data.js', 'REDEWENDUNGEN_DATA', HEADER + ' Redewendungen & Sprichwörter.',
  merged.filter(m => m.source === 'redewendungen').map(m => m.entry));
outputs.push('chengyu-data.js', 'redewendungen-data.js');

// Replace the old script tags with the consolidated files and delete the inputs.
const firstTag = html.indexOf('<script src="' + inputFiles[0] + '"></script>');
let nextHtml = html;
for (const file of inputFiles) nextHtml = nextHtml.replace(new RegExp('[ \\t]*<script src="' + file.replace(/\./g, '\\.') + '"></script>\\r?\\n'), '');
const newline = html.includes('\r\n') ? '\r\n' : '\n';
const tags = outputs.map(file => '  <script src="' + file + '"></script>' + newline).join('');
nextHtml = nextHtml.slice(0, firstTag - 2) + tags + nextHtml.slice(firstTag - 2);
fs.writeFileSync(path.join(ROOT, 'index.html'), nextHtml);
for (const file of inputFiles) if (!outputs.includes(file)) fs.unlinkSync(path.join(ROOT, file));

const raw = sources.reduce((n, s) => n + s.items.length, 0);
console.log(JSON.stringify({
  inputFiles: inputFiles.length,
  rawRows: raw,
  entries: merged.length,
  byFile: Object.fromEntries(outputs.map(file => [file, merged.filter(m =>
    file === 'chengyu-data.js' ? m.source === 'chengyu' : file === 'redewendungen-data.js' ? m.source === 'redewendungen' :
      m.source.startsWith('hsk') && 'vocab-hsk' + m.entry.level.slice(3).toLowerCase() + '.js' === file).length])),
  mergedVariantReadings: merged.filter(m => new Set(m.members.map(x => numericOf(x.item))).size > 1).length
}, null, 2));
