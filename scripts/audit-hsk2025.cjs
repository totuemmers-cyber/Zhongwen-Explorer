// Checks the vocabulary against the parsed HSK 2025 syllabus (scripts/hsk2025/vocabulary.json):
// every syllabus row is exactly one entry at its official level, HSK levels are only claimed with a
// syllabus row, entries outside the syllabus (Zusatz) carry evidence, and drafts are marked.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const context = { console };
context.window = context;
vm.runInNewContext(read('lang-profile.js'), context, { filename: 'lang-profile.js' });
const profile = context.LANG_PROFILE;
const entries = [];
for (const file of profile.dataScripts.vocab) {
  const before = new Set(Object.keys(context));
  vm.runInNewContext(read(file), context, { filename: file });
  const name = Object.keys(context).find(key => !before.has(key) && Array.isArray(context[key])) ||
    (file === 'chengyu-data.js' ? 'CHENGYU_DATA' : file === 'redewendungen-data.js' ? 'REDEWENDUNGEN_DATA' : null);
  for (const item of (name && context[name]) || []) entries.push({ item, file });
}
const syllabus = JSON.parse(read('scripts/hsk2025/vocabulary.json'));
const receipt = JSON.parse(read('scripts/hsk2025/receipt.json'));

const errors = [];
const fail = (message, samples = []) => errors.push(message + (samples.length ? '\n  e.g. ' + samples.slice(0, 6).join('\n  e.g. ') : ''));
const SPECIALIST = new Set(['chengyu-data.js', 'redewendungen-data.js']);
const LEVELS = new Set(profile.levels);

const byNo = new Map();
for (const { item } of entries) {
  if (!item.syllabus) continue;
  if (byNo.has(item.syllabus.no)) fail('Syllabus row ' + item.syllabus.no + ' claimed twice', [byNo.get(item.syllabus.no).id, item.id]);
  byNo.set(item.syllabus.no, item);
}
const missing = syllabus.filter(row => !byNo.has(row.no));
if (missing.length) fail(missing.length + ' syllabus rows without an entry', missing.map(r => r.no + ' ' + r.word));
const wrongLevel = syllabus.filter(row => byNo.has(row.no) && byNo.get(row.no).level !== 'HSK' + row.level);
if (wrongLevel.length) fail(wrongLevel.length + ' entries not at their syllabus level', wrongLevel.map(r => r.word + ' ' + byNo.get(r.no).level + ' ≠ HSK' + r.level));
const wrongWord = syllabus.filter(row => byNo.has(row.no) && byNo.get(row.no).word !== row.word);
if (wrongWord.length) fail(wrongWord.length + ' entries whose word differs from their syllabus row', wrongWord.map(r => r.word + ' ≠ ' + byNo.get(r.no).word));

const levelWithoutRow = entries.filter(({ item }) => LEVELS.has(item.level) && !item.syllabus);
if (levelWithoutRow.length) fail(levelWithoutRow.length + ' entries claim an HSK level without a syllabus row', levelWithoutRow.map(e => e.item.word));
const unknownLevel = entries.filter(({ item }) => !LEVELS.has(item.level) && item.level !== profile.extraLevel);
if (unknownLevel.length) fail(unknownLevel.length + ' entries with an unknown level', unknownLevel.map(e => e.item.word + ' ' + e.item.level));

const counts = {};
for (const row of syllabus) counts[row.level] = (counts[row.level] || 0) + 1;
if (JSON.stringify(counts) !== JSON.stringify(receipt.newWordsPerLevel)) fail('Syllabus counts differ from the receipt');

const unsupported = entries.filter(({ item, file }) => item.level === profile.extraLevel && !SPECIALIST.has(file) &&
  !(item.evidence && item.evidence.cedict) && item.evidenceNote !== 'compositional');
if (unsupported.length) fail(unsupported.length + ' Zusatz entries without CC-CEDICT evidence', unsupported.map(e => e.item.word));

const noTraditional = entries.filter(({ item }) => !item.traditional);
if (noTraditional.length) fail(noTraditional.length + ' entries without traditional form', noTraditional.map(e => e.item.word));
const draftProblems = entries.filter(({ item }) => item.meaningStatus && (item.meaningStatus !== 'draft' || !item.meaning));
if (draftProblems.length) fail(draftProblems.length + ' entries with an invalid meaning status', draftProblems.map(e => e.item.word));

if (errors.length) {
  console.error(errors.join('\n\n'));
  process.exit(1);
}
const drafts = entries.filter(e => e.item.meaningStatus === 'draft').length;
const extra = entries.filter(e => e.item.level === profile.extraLevel).length;
console.log('HSK 2025 audit passed: ' + syllabus.length + ' syllabus rows each matched once at their level; ' +
  extra + ' Zusatz entries with evidence; ' + drafts + ' draft meanings marked.');
