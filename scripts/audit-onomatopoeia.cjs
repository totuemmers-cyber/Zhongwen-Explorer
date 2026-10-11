// Audit of the Lautmalerei data (onomatopoeia-data.js, built by scripts/onomatopoeia/build.cjs): ids, levels and
// their source, kinds/categories/patterns (filter options in index.html), links to vocabulary, base words, grammar
// points and related entries, bookmark migration maps, German without ASCII umlauts, examples that use the word, and
// pinyin against CC-CEDICT (productive AABB forms may read the second syllable in the neutral tone or not).
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const common = require('./enrich/common.cjs');
const { loadCedict, numericKey } = require('./hsk2025/dictionaries.cjs');
const { asciiUmlauts } = require('./hanzi/common.cjs');

const ROOT = path.resolve(__dirname, '..');
const profile = common.loadProfile();
const context = { console };
context.window = context;
for (const file of profile.dataScripts.onomatopoeia) vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
for (const file of profile.dataScripts.grammar) vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
const items = context.ONOMATOPOEIA_DATA;
const removed = context.ONOMATOPOEIA_REMOVED || {};
const grammarIds = new Set((context.GRAMMAR_DATA || []).map(g => g.id));
const Pinyin = common.loadPinyin();
const cedict = loadCedict();
const vocab = common.loadSources().flatMap(s => s.items);
const vocabById = new Map(vocab.map(v => [v.id, v]));
const syllabus = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'hsk2025', 'vocabulary.json'), 'utf8'));
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const optionsOf = id => new Set([...(html.match(new RegExp('<select id="' + id + '">([\\s\\S]*?)</select>')) || ['', ''])[1]
  .matchAll(/<option value="([^"]+)"/g)].map(m => m[1].replace(/&amp;/g, '&')).filter(v => v !== 'all'));
const LEVELS = new Set(profile.levels.concat(profile.extraLevel));
const LEVEL_BUTTONS = new Set([...html.matchAll(/data-olevel="([^"]+)"/g)].map(m => m[1]).filter(v => v !== 'all'));
const KINDS = optionsOf('ono-kind-select');
const CATEGORIES = optionsOf('ono-cat-select');
const PATTERNS = optionsOf('ono-pattern-select');
const LEVEL_SOURCES = ['syllabus', 'vocab', 'base', 'grammar', 'zusatz'];
// Real ue/ae spellings the umlaut rule cannot tell apart (same list as scripts/onomatopoeia/build.cjs).
const UMLAUT_KEEP = new Set(['Doraemon', 'wohltuende']);
// Sound-word readings where CC-CEDICT lists only the verb/noun reading (settled in scripts/onomatopoeia/build.cjs).
const READING_OVERRIDES = { '扑腾': 'pu1teng1', '咕噜': 'gu1lu1', '吧嗒': 'ba1da1', '舒舒服服': 'shu1shu5fu2fu2', '吱吱嘎嘎': 'zhi1zhi1ga1ga1' };

const errors = [];
const fail = (id, message) => errors.push(id + ': ' + message);

function patternOf(word) {
  const c = Array.from(word);
  if (c.length === 1) return 'A';
  if (c.length === 2) return c[0] === c[1] ? 'AA' : 'AB';
  if (c.length === 3) return c[1] === c[2] && c[0] !== c[1] ? 'ABB' : 'Andere';
  if (c.length === 4) {
    if (c[0] === c[1] && c[2] === c[3]) return 'AABB';
    if (c[0] === c[2] && c[1] === c[3]) return 'ABAB';
    if (c[1] === '里' && c[0] === c[2]) return 'A里AB';
    if (c[1] === '里') return 'A里BC';
    if (c[1] === '不') return 'A不BC';
    if (c[2] === c[3]) return 'ABCC';
  }
  return 'Andere';
}
const syllablesOf = key => key.match(/[a-z]+[1-5]/g) || [];
const toneOf = syl => Number(syl.slice(-1));
const letters = syl => syl.slice(0, -1);
// Readings of a word: CC-CEDICT, syllabus and vocabulary (numeric keys).
function readings(word) {
  const keys = new Set((cedict.get(word) || []).map(e => e.key));
  syllabus.filter(r => r.word === word).forEach(r => keys.add(Pinyin.toNumeric(r.pinyin, word)));
  vocab.filter(v => v.word === word).forEach(v => keys.add(Pinyin.toNumeric(v.pinyin, word)));
  return keys;
}
function checkPinyin(m) {
  const word = m.word;
  let key = '';
  try { key = Pinyin.toNumeric(m.pinyin, word); } catch (e) { key = ''; }
  const listed = readings(word);
  if (!key || syllablesOf(key).length !== Array.from(word).length) {
    // Syllables outside the pinyin table (hng): compare the letters with CC-CEDICT.
    if (![...listed].some(k => k.replace(/[1-5]/g, '') === numericKey(m.pinyin))) fail(m.id, 'pinyin not segmentable and not in CC-CEDICT: ' + m.pinyin);
    return;
  }
  if (READING_OVERRIDES[word]) { if (key !== READING_OVERRIDES[word]) fail(m.id, 'reading override changed: ' + key); return; }
  if (listed.size) {
    if (!listed.has(key) && !(m.pattern === 'AABB' && [...listed].some(k => aabbMatches(key, k)))) fail(m.id, 'pinyin ' + m.pinyin + ' (' + key + ') not a CC-CEDICT/syllabus reading: ' + [...listed].join(', '));
    return;
  }
  // Productive forms: every syllable is a reading of its character; AABB also against the base word.
  const syls = syllablesOf(key);
  Array.from(word).forEach((ch, i) => {
    const charReadings = [...readings(ch)].map(k => k.replace(/[1-5]/g, ''));
    if (charReadings.length && !charReadings.includes(letters(syls[i]))) fail(m.id, 'syllable ' + syls[i] + ' is no reading of ' + ch);
  });
  if (m.pattern === 'AABB') {
    const c = Array.from(word);
    const baseKeys = [...readings(c[0] + c[2])];
    if (baseKeys.length && !baseKeys.some(k => aabbMatches(key, null, k))) fail(m.id, 'AABB reading ' + key + ' does not fit the base ' + c[0] + c[2] + ' ' + baseKeys.join('/'));
  }
}
// AABB reading against a listed AABB reading (same letters, the second A and the BB may differ in neutral tone) or
// against the base word AB (A keeps its tone, the second A and BB in the base tone or neutral; neutral bases are free).
function aabbMatches(key, listedKey, baseKey) {
  const s = syllablesOf(key);
  if (listedKey) {
    const l = syllablesOf(listedKey);
    return s.length === 4 && l.length === 4 && s.every((x, i) => letters(x) === letters(l[i]) && (toneOf(x) === toneOf(l[i]) || i > 0 && (toneOf(x) === 5 || toneOf(l[i]) === 5)));
  }
  const b = syllablesOf(baseKey);
  if (s.length !== 4 || b.length !== 2) return false;
  const base = [b[0], b[0], b[1], b[1]];
  return s.every((x, i) => letters(x) === letters(base[i]) && (toneOf(x) === toneOf(base[i]) || toneOf(base[i]) === 5 || (i > 0 && toneOf(x) === 5)));
}

const ids = new Set();
const legacy = new Map();
for (const m of items) {
  const id = m.id;
  if (typeof id !== 'string' || id !== 'o:' + m.word) fail(String(id), 'id must be o:<word>');
  if (ids.has(id)) fail(id, 'duplicate id');
  ids.add(id);
  if (!m.pinyin) fail(id, 'no pinyin');
  if (!m.meaning) fail(id, 'no meaning');
  if (!LEVELS.has(m.level) || !LEVEL_BUTTONS.has(m.level)) fail(id, 'level without filter button: ' + m.level);
  if (!LEVEL_SOURCES.includes(m.levelSource)) fail(id, 'unknown levelSource ' + m.levelSource);
  if ((m.level === profile.extraLevel) !== (m.levelSource === 'zusatz')) fail(id, 'level ' + m.level + ' does not fit levelSource ' + m.levelSource);
  if (['base', 'grammar'].includes(m.levelSource) && !(m.base && m.base.vocabId)) fail(id, 'levelSource ' + m.levelSource + ' without base word');
  if (m.levelSource === 'vocab' && !m.vocabId) fail(id, 'levelSource vocab without vocabId');
  if (!KINDS.has(m.kind)) fail(id, 'kind not in ono-kind-select: ' + m.kind);
  if (!CATEGORIES.has(m.category)) fail(id, 'category not in ono-cat-select: ' + m.category);
  if (!PATTERNS.has(m.pattern)) fail(id, 'pattern not in ono-pattern-select: ' + m.pattern);
  if (m.pattern !== patternOf(m.word)) fail(id, 'pattern ' + m.pattern + ' does not match the word (' + patternOf(m.word) + ')');
  if ((m.kind === 'Ausruf') !== (m.category === 'Ausrufe')) fail(id, 'kind Ausruf and category Ausrufe go together');
  if (m.vocabId && !vocabById.has(m.vocabId)) fail(id, 'vocabId does not resolve: ' + m.vocabId);
  if (m.vocabId && vocabById.has(m.vocabId) && vocabById.get(m.vocabId).word !== m.word) fail(id, 'vocabId is another word: ' + m.vocabId);
  if (m.base) {
    const base = vocabById.get(m.base.vocabId);
    if (!base) fail(id, 'base vocabId does not resolve: ' + m.base.vocabId);
    else if (base.word !== m.base.word || base.level !== m.base.level) fail(id, 'base word/level out of date: ' + m.base.word + ' ' + m.base.level);
    if (m.kind !== 'Beschreibung') fail(id, 'base word on a ' + m.kind);
  }
  if (m.grammarId && !grammarIds.has(m.grammarId)) fail(id, 'grammarId does not resolve: ' + m.grammarId);
  for (const ex of m.examples || []) {
    if (typeof ex.chinese !== 'string' || typeof ex.german !== 'string' || typeof ex.pinyin !== 'string') fail(id, 'example without chinese/pinyin/german');
    else if (![m.word, ...(m.variants || [])].some(w => ex.chinese.includes(w))) fail(id, 'example without the word: ' + ex.chinese);
  }
  const german = [m.meaning, m.usage, m.explanation, m.notes, ...(m.examples || []).map(e => e.german)];
  const umlauts = german.flatMap(asciiUmlauts).filter(w => !UMLAUT_KEEP.has(w));
  if (umlauts.length) fail(id, 'ASCII umlauts: ' + umlauts.join(', '));
  for (const old of m.legacyIds || []) {
    if (legacy.has(old)) fail(id, 'legacy id ' + old + ' also on ' + legacy.get(old));
    legacy.set(old, id);
  }
  checkPinyin(m);
}
for (const m of items) for (const r of m.related || []) if (!ids.has(r) || r === m.id) fail(m.id, 'related id does not resolve: ' + r);
for (const [old, id] of legacy) if (ids.has(old)) fail(id, 'legacy id is a live id: ' + old);
for (const [old, target] of Object.entries(removed)) {
  if (!vocabById.has(target)) fail('removed ' + old, 'vocab id does not resolve: ' + target);
  if (legacy.has(old)) fail('removed ' + old, 'also a legacy id of ' + legacy.get(old));
}

if (errors.length) {
  console.error(errors.length + ' Lautmalerei problems:\n' + errors.slice(0, 80).join('\n'));
  process.exit(1);
}
const count = key => items.reduce((m, x) => { m[x[key]] = (m[x[key]] || 0) + 1; return m; }, {});
console.log('Lautmalerei audit passed: ' + items.length + ' entries (' + Object.entries(count('kind')).map(([k, n]) => k + ' ' + n).join(', ') + '; ' +
  Object.entries(count('level')).map(([l, n]) => l + ' ' + n).join(', ') + '), ' + legacy.size + ' legacy ids, ' + Object.keys(removed).length + ' removed.');
