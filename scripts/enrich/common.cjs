// Shared helpers for the enrichment campaign: vocabulary source files, campaign order, the pinyin
// module, syllabus levels and dictionary indexes.
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const WORK = path.join(ROOT, '.content-cache', 'enrich');
const LEDGER = path.join(__dirname, 'ledger.json');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');

function loadPinyin() {
  const context = {};
  context.window = context;
  vm.runInNewContext(read('pinyin.js'), context, { filename: 'pinyin.js' });
  return context.Pinyin;
}

function loadProfile() {
  const context = {};
  context.window = context;
  vm.runInNewContext(read('lang-profile.js'), context, { filename: 'lang-profile.js' });
  return context.LANG_PROFILE;
}

// Each vocabulary source file: { file, globalName, header, items }.
function loadSources() {
  const profile = loadProfile();
  return profile.dataScripts.vocab.map(file => {
    const text = read(file);
    const m = text.match(/^((?:\/\/[^\n]*\n)*)window\.([A-Z0-9_]+) = /);
    if (!m) throw new Error('Unexpected vocabulary file layout: ' + file);
    const context = {};
    context.window = context;
    vm.runInNewContext(text, context, { filename: file });
    return { file, header: m[1], globalName: m[2], items: context[m[2]] };
  });
}

function writeSources(sources) {
  for (const source of sources) {
    fs.writeFileSync(path.join(ROOT, source.file),
      source.header + 'window.' + source.globalName + ' = ' + JSON.stringify(source.items, null, 2) + ';\n');
  }
}

// Campaign order: HSK1 … HSK6, HSK 7–9, then Zusatz (vocab file before Chengyu and Redewendungen).
const LEVEL_RANK = { HSK1: 1, HSK2: 2, HSK3: 3, HSK4: 4, HSK5: 5, HSK6: 6, 'HSK7-9': 7, Zusatz: 8 };
function campaignOrder(sources) {
  const all = [];
  sources.forEach((source, fileIndex) => source.items.forEach((item, index) => all.push({ item, file: source.file, fileIndex, index })));
  return all.sort((a, b) =>
    (LEVEL_RANK[a.item.level] || 9) - (LEVEL_RANK[b.item.level] || 9) ||
    a.fileIndex - b.fileIndex ||
    ((a.item.syllabus && a.item.syllabus.no) || a.index) - ((b.item.syllabus && b.item.syllabus.no) || b.index));
}

// Review policy decided for the campaign: a second reviewer for HSK 1–4.
const reviewedLevel = level => ['HSK1', 'HSK2', 'HSK3', 'HSK4'].includes(level);

// Lowest syllabus level per word (1–6, 7 for the 7–9 band).
function syllabusLevels() {
  const rows = JSON.parse(read('scripts/hsk2025/vocabulary.json'));
  const levels = new Map();
  for (const row of rows) {
    const level = row.level === '7-9' ? 7 : Number(row.level);
    if (!levels.has(row.word) || levels.get(row.word) > level) levels.set(row.word, level);
  }
  return levels;
}

function characterLevels() {
  const data = JSON.parse(read('scripts/hsk2025/characters.json'));
  const levels = new Map();
  for (const [level, chars] of Object.entries(data.reading)) {
    const n = level === '7-9' ? 7 : Number(level);
    for (const ch of chars) if (!levels.has(ch)) levels.set(ch, n);
  }
  return levels;
}

// The content a card's review covers; its hash is recorded in the ledger.
const REVIEWED_FIELDS = ['meaning', 'type', 'notes', 'examples', 'separable'];
function contentHash(item) {
  const content = {};
  for (const field of REVIEWED_FIELDS) if (item[field] !== undefined) content[field] = item[field];
  return crypto.createHash('sha256').update(JSON.stringify(content)).digest('hex').slice(0, 16);
}

function readJson(file, fallback) {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : fallback;
}

module.exports = { ROOT, WORK, LEDGER, read, loadPinyin, loadProfile, loadSources, writeSources, campaignOrder, reviewedLevel,
  syllabusLevels, characterLevels, contentHash, readJson, LEVEL_RANK, REVIEWED_FIELDS };
