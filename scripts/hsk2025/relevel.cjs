// Phase 2: makes the HSK 2025 syllabus the backbone of the vocabulary.
// - Matches every syllabus row (scripts/hsk2025/vocabulary.json) to an app entry by word and reading.
// - Matched entries take the official level; missing syllabus words become new entries with a
//   draft German gloss (HanDeDict, meaningStatus 'draft').
// - Entries outside the syllabus become level Zusatz when CC-CEDICT knows the word (Chengyu and
//   Redewendungen always stay); others are retired, their ids kept as legacyIds of a same-word entry.
// - All entries get traditional forms (CC-CEDICT, OpenCC fallback), measure words and variants.
// Usage: node scripts/hsk2025/relevel.cjs [--dry-run]   (always writes relevel-report.md)
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const dict = require('./dictionaries.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const DRY_RUN = process.argv.includes('--dry-run');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');

// --- App data and helpers --------------------------------------------------------------------
const context = { console };
context.window = context;
vm.runInNewContext(read('pinyin.js'), context, { filename: 'pinyin.js' });
vm.runInNewContext(read('lang-profile.js'), context, { filename: 'lang-profile.js' });
const Pinyin = context.Pinyin;
const PROFILE = context.LANG_PROFILE;
const VOCAB_FILES = PROFILE.dataScripts.vocab;
const GLOBAL_OF = file => {
  if (file === 'chengyu-data.js') return 'CHENGYU_DATA';
  if (file === 'redewendungen-data.js') return 'REDEWENDUNGEN_DATA';
  return 'VOCAB_' + file.replace(/^vocab-/, '').replace(/\.js$/, '').toUpperCase().replace('-', '_');
};
const SPECIALIST = { 'chengyu-data.js': 'chengyu', 'redewendungen-data.js': 'redewendungen' };
const entries = [];
for (const file of VOCAB_FILES) {
  if (!fs.existsSync(path.join(ROOT, file))) continue;
  vm.runInNewContext(read(file), context, { filename: file });
  for (const item of context[GLOBAL_OF(file)] || []) entries.push({ item, file, source: SPECIALIST[file] || 'level' });
}
const syllabus = JSON.parse(read('scripts/hsk2025/vocabulary.json'));

const numeric = (pinyin, word) => Pinyin.toNumeric(String(pinyin || '').split('/')[0], word).toLowerCase();
const syllablesOf = key => key.match(/[a-z]+[1-5]/g) || [];
// Same word reading: identical, or differing only by neutral tone (multi-syllable) or 一/不 sandhi.
function sameReading(a, b) {
  if (a === b) return true;
  const x = syllablesOf(a), y = syllablesOf(b);
  if (!x.length || x.length !== y.length) return false;
  return x.every((syllable, i) => {
    const base = syllable.slice(0, -1), ta = syllable.slice(-1), tb = y[i].slice(-1);
    if (base !== y[i].slice(0, -1)) return false;
    if (ta === tb) return true;
    if (x.length > 1 && (ta === '5' || tb === '5')) return true;
    return (base === 'yi' && '124'.includes(ta) && '124'.includes(tb)) || (base === 'bu' && '24'.includes(ta) && '24'.includes(tb));
  });
}
// Readings that differ only by 一/不 sandhi (the syllabus prints the spoken tone).
function sandhiOnly(spoken, citation) {
  const x = syllablesOf(spoken), y = syllablesOf(citation);
  if (x.length !== y.length || spoken === citation) return false;
  return x.every((s, i) => s === y[i] || ((s.startsWith('yi') || s.startsWith('bu')) && s.slice(0, -1) === y[i].slice(0, -1)));
}

// --- Dictionaries ----------------------------------------------------------------------------
const cedict = dict.loadCedict();
const handedict = dict.loadHandedict();
const toTraditional = dict.loadOpenCC();
const variantsOf = new Map();
for (const list of cedict.values()) for (const entry of list) for (const target of entry.variantOf) {
  if (target === entry.simplified) continue;
  if (!variantsOf.has(target)) variantsOf.set(target, new Set());
  variantsOf.get(target).add(entry.simplified);
}
// True when the word splits into at least two CC-CEDICT headwords (single characters allowed).
function splitsIntoWords(word) {
  const chars = Array.from(word);
  const reachable = [true];
  for (let i = 0; i < chars.length; i++) {
    if (!reachable[i]) continue;
    for (let j = i + 1; j <= chars.length; j++) {
      if (j - i === chars.length) continue; // the whole word is not a headword (checked by the caller)
      if (cedict.has(chars.slice(i, j).join(''))) reachable[j] = true;
    }
  }
  return !!reachable[chars.length];
}
// CC-CEDICT capitalises proper names (书 [Shu1] = 书经); common-word readings come first.
const isProperName = entry => /^[A-Z]/.test(entry.pinyin);
function cedictReadings(word, key) {
  const list = (cedict.get(word) || []).slice().sort((a, b) => isProperName(a) - isProperName(b));
  const exact = list.filter(e => e.key === key);
  return exact.length ? exact : list.filter(e => sameReading(e.key, key));
}
function cedictReading(word, key) {
  return cedictReadings(word, key)[0] || null;
}
// Measure words of all common-word entries with this reading (书: 本, 册, 部).
function classifiersFor(word, key) {
  const seen = new Set(), result = [];
  for (const entry of cedictReadings(word, key).filter(e => !isProperName(e))) {
    for (const cl of entry.classifiers) if (!seen.has(cl.word)) { seen.add(cl.word); result.push(cl); }
  }
  return result;
}

// --- Report -------------------------------------------------------------------------------------
const GLOSS_FILE = path.join(__dirname, 'draft-glosses.json');
const authoredGlosses = fs.existsSync(GLOSS_FILE) ? JSON.parse(fs.readFileSync(GLOSS_FILE, 'utf8')) : {};
const report = { noGlossDetails: [], matched: 0, newWords: [], zusatz: [], retired: [], pinyinChanged: [], cedictDisagrees: [], traditionalFallback: [],
  traditionalMissing: [], noGloss: [], misfiledGrammar: [], homographNew: [] };

// --- Matching -----------------------------------------------------------------------------------
const byWord = new Map();
entries.forEach(entry => {
  entry.key = numeric(entry.item.pinyin, entry.item.word);
  if (!byWord.has(entry.item.word)) byWord.set(entry.item.word, []);
  byWord.get(entry.item.word).push(entry);
});
const claimed = new Map(); // entry -> syllabus row
const rowEntry = new Map(); // syllabus no -> entry
for (const row of syllabus) {
  const key = numeric(row.pinyin, row.word);
  const candidates = (byWord.get(row.word) || []).filter(e => !claimed.has(e) && sameReading(e.key, key));
  const exact = candidates.find(e => e.key === key) || candidates[0];
  if (exact) { claimed.set(exact, row); rowEntry.set(row.no, exact); }
}
// Second pass: an unmatched row and an unclaimed entry of the same word whose readings differ only
// in tones are the same word with a wrong app reading (档案 dǎngàn → dàng’àn), unless the entry is a
// single character whose reading CC-CEDICT confirms (a real polyphone such as 称 chèng / chēng).
const toneless = key => key.replace(/[1-5]/g, '');
const correctedReadings = new Set();
for (const row of syllabus) {
  if (rowEntry.has(row.no)) continue;
  const key = numeric(row.pinyin, row.word);
  const candidate = (byWord.get(row.word) || []).find(e => !claimed.has(e) && toneless(e.key) === toneless(key) &&
    !(Pinyin.countHan(row.word) === 1 && cedictReading(row.word, e.key)));
  if (candidate) { claimed.set(candidate, row); rowEntry.set(row.no, candidate); correctedReadings.add(candidate); }
}

const LEVEL = level => 'HSK' + level;
const POS_TYPES = { '名': 'Nomen', '动': 'Verb', '形': 'Adjektiv', '副': 'Adverb', '代': 'Pronomen', '数': 'Zahlwort', '量': 'Zählwort',
  '介': 'Präposition', '连': 'Konjunktion', '助': 'Partikel', '叹': 'Interjektion', '拟声': 'Lautmalerei', '前缀': 'Affix', '后缀': 'Affix', '数量': 'Zahlwort' };
function splitPos(pos) {
  // 数、（副） -> main [数], later [[副]] in the order of the later levels.
  const parts = String(pos || '').split('、').filter(Boolean);
  return { main: parts.filter(p => !/^（/.test(p)), later: parts.filter(p => /^（/.test(p)).map(p => p.replace(/[（）]/g, '').split(/[、，]/)) };
}
function typeFor(row) {
  const main = splitPos(row.pos).main[0];
  if (!main) return /-/.test(row.pinyin) && Pinyin.countHan(row.word) === 4 ? 'Chengyu' : 'Phrase';
  return POS_TYPES[main] || 'Ausdruck';
}

// Citation pinyin (tone marks) for a syllabus row: 一/不 sandhi is undone using CC-CEDICT, the
// spoken form is kept separately. Otherwise the syllabus spelling is authoritative.
function pinyinFields(row) {
  const primary = String(row.pinyin).split('/')[0];
  const key = numeric(primary, row.word);
  const reading = cedictReading(row.word, key);
  const fields = { pinyin: primary, key };
  if (reading && sandhiOnly(key, reading.key)) {
    const spoken = Pinyin.segment(primary, row.word);
    const citation = syllablesOf(reading.key);
    let cursor = 0, rebuilt = '';
    spoken.forEach((syllable, i) => {
      const at = primary.indexOf(syllable, cursor);
      rebuilt += primary.slice(cursor, at);
      const tone = citation[i] ? Number(citation[i].slice(-1)) : Pinyin.toneOf(syllable);
      rebuilt += tone === Pinyin.toneOf(syllable) ? syllable : retone(syllable, tone);
      cursor = at + syllable.length;
    });
    fields.pinyin = rebuilt + primary.slice(cursor);
    fields.pinyinSpoken = primary;
    fields.key = reading.key;
  } else if (reading === null && (cedict.get(row.word) || []).length) {
    report.cedictDisagrees.push(row.word + ' ' + primary + ' (CC-CEDICT: ' + cedict.get(row.word).map(e => e.pinyin).join(', ') + ')');
  }
  if (String(row.pinyin).includes('/')) fields.pinyinAlt = String(row.pinyin).split('/').slice(1);
  return fields;
}
// Rewrites a tone-marked pinyin string to a numeric target reading, keeping its spacing and
// capitalisation; falls back to the target's own spelling when the syllables themselves differ.
function retoneTo(pinyin, word, targetKey) {
  const syllables = Pinyin.segment(pinyin, word);
  const target = syllablesOf(targetKey);
  const sameBases = syllables.length === target.length && syllables.every((s, i) => {
    const plain = s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/ü/g, 'v');
    return plain === target[i].slice(0, -1);
  });
  if (!sameBases) {
    // Spell the dictionary reading; a vowel-initial syllable inside the word takes an apostrophe.
    return target.map((s, i) => (i > 0 && /^[aeo]/.test(s) ? '’' : '') + Pinyin.toMarked(s)).join('');
  }
  let cursor = 0, out = '';
  syllables.forEach((syllable, i) => {
    const at = pinyin.indexOf(syllable, cursor);
    out += pinyin.slice(cursor, at);
    const tone = Number(target[i].slice(-1));
    out += tone === Pinyin.toneOf(syllable) ? syllable : retone(syllable, tone);
    cursor = at + syllable.length;
  });
  return out + pinyin.slice(cursor);
}
function retone(syllable, tone) {
  const plain = syllable.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');
  const marked = Pinyin.toMarked(plain.toLowerCase().replace(/ü/g, 'v') + tone);
  return syllable[0] === syllable[0].toUpperCase() && /[A-Z]/.test(syllable[0]) ? marked[0].toUpperCase() + marked.slice(1) : marked;
}

function dictionaryFields(word, key) {
  const fields = {};
  const reading = cedictReading(word, key);
  if (reading) {
    fields.traditional = reading.traditional;
    const classifiers = classifiersFor(word, key);
    if (classifiers.length) fields.measureWords = classifiers;
    fields.evidence = { cedict: reading.traditional + ' ' + reading.simplified + ' [' + reading.pinyin + ']' };
  } else {
    fields.traditional = toTraditional(word);
    report.traditionalFallback.push(word);
  }
  const variants = Array.from(variantsOf.get(word) || []).filter(v => !byWord.has(v));
  if (variants.length) fields.variants = variants;
  return fields;
}

function draftGloss(word, key) {
  const list = handedict.get(word) || [];
  const reading = list.find(e => e.key === key) || list.find(e => sameReading(e.key, key)) || list[0];
  const gloss = reading ? dict.germanGloss(reading.senses) : '';
  return gloss || null;
}

// --- Build the new entry list ---------------------------------------------------------------------
const output = new Map(); // file -> entries
const push = (file, item) => { if (!output.has(file)) output.set(file, []); output.get(file).push(item); };
const ids = new Set(entries.map(e => e.item.id));
const fileForLevel = level => level === 'Zusatz' ? 'vocab-zusatz.js' : 'vocab-' + level.toLowerCase() + '.js';
const isGrammarPattern = word => /\.\.\.|…|～|~/.test(word);

function applySyllabus(item, row) {
  const { later } = splitPos(row.pos);
  item.level = LEVEL(row.level);
  if (row.laterLevels.length) item.levelUses = row.laterLevels.map((l, i) => ({ level: LEVEL(l), pos: later[i] || [] }));
  else delete item.levelUses;
  item.syllabus = { no: row.no, pos: row.pos };
  if (row.homograph) item.syllabus.homograph = row.homograph;
  item.syllabus.page = row.page;
}

// 1. Existing entries.
const retiredByWord = [];
for (const entry of entries) {
  const item = Object.assign({}, entry.item);
  if (item.type === 'Präpositionen') item.type = 'Präposition';
  const row = claimed.get(entry);
  if (row) {
    report.matched++;
    applySyllabus(item, row);
    const fields = pinyinFields(row);
    const oldKey = numeric(item.pinyin, item.word);
    if (oldKey !== fields.key && !sameReading(oldKey, fields.key)) {
      report.pinyinChanged.push(item.word + ': ' + item.pinyin + ' → ' + fields.pinyin);
    } else if (oldKey !== fields.key) {
      (report.toneAligned = report.toneAligned || []).push(item.word + ': ' + item.pinyin + ' → ' + fields.pinyin);
    }
    if (numeric(item.pinyin, item.word) !== fields.key) item.pinyin = fields.pinyin;
    if (fields.pinyinSpoken) item.pinyinSpoken = fields.pinyinSpoken;
    if (fields.pinyinAlt) item.pinyinAlt = fields.pinyinAlt;
    Object.assign(item, dictionaryFields(item.word, fields.key));
    push(entry.source === 'level' ? fileForLevel(item.level) : entry.file, item);
    continue;
  }
  if (isGrammarPattern(item.word)) {
    report.misfiledGrammar.push(item.word);
    retiredByWord.push({ entry, item, reason: 'grammar pattern' });
    continue;
  }
  const known = (cedict.get(item.word) || []).length > 0;
  // Free combinations (打篮球, 电话号码) are not dictionary headwords but consist of them.
  const compositional = !known && Pinyin.countHan(item.word) === Array.from(item.word).length && splitsIntoWords(item.word);
  if (compositional) item.evidenceNote = 'compositional';
  if (known || compositional || entry.source !== 'level') {
    item.level = 'Zusatz';
    delete item.syllabus; delete item.levelUses;
    const readings = cedict.get(item.word) || [];
    const distinct = Array.from(new Set(readings.map(e => e.key)));
    if (known && !cedictReading(item.word, numeric(item.pinyin, item.word))) {
      // Outside the syllabus CC-CEDICT is the reference; with a single dictionary reading the
      // old app pinyin (综合 zònghé, 佣金 yōngjīn) is corrected, otherwise it is reported.
      // Only tones are corrected automatically; a different syllable (箪食壶浆 sì/shí, 沩 wéi/guī)
      // is a reading question for review, because CC-CEDICT is not always right either.
      const tonesOnly = distinct.length === 1 && toneless(distinct[0]) === toneless(numeric(item.pinyin, item.word));
      if (tonesOnly && Pinyin.countHan(item.word) === Array.from(item.word).length) {
        const corrected = retoneTo(item.pinyin, item.word, distinct[0]);
        report.zusatzPinyinCorrected = report.zusatzPinyinCorrected || [];
        report.zusatzPinyinCorrected.push(item.word + ': ' + item.pinyin + ' → ' + corrected);
        item.pinyin = corrected;
      } else {
        report.cedictDisagrees.push(item.word + ' ' + item.pinyin + ' (Zusatz; CC-CEDICT: ' + readings.map(e => e.pinyin).join(', ') + ')');
      }
    }
    Object.assign(item, dictionaryFields(item.word, numeric(item.pinyin, item.word)));
    // The word is in CC-CEDICT under another reading (T恤, 箪食壶浆 sì/shí): keep the dictionary
    // evidence and its traditional form, and flag the reading for review.
    if (known && !item.evidence) {
      const first = readings[0];
      item.traditional = first.traditional;
      item.evidence = { cedict: readings.map(e => e.traditional + ' ' + e.simplified + ' [' + e.pinyin + ']').join(' | '), readingDiffers: true };
    }
    report.zusatz.push(item.word + ' ' + item.pinyin + (known ? '' : ' (' + entry.source + ', not in CC-CEDICT)'));
    push(entry.source === 'level' ? fileForLevel('Zusatz') : entry.file, item);
    continue;
  }
  retiredByWord.push({ entry, item, reason: 'not in syllabus or CC-CEDICT' });
}

// 2. Syllabus rows without an entry become new draft entries.
report.readingConflicts = [];
for (const row of syllabus) {
  if (rowEntry.has(row.no)) continue;
  const sameWordEntries = (byWord.get(row.word) || []).filter(e => !claimed.has(e));
  if (sameWordEntries.length) report.readingConflicts.push(row.word + ' syllabus ' + row.pinyin + ' vs app ' + sameWordEntries.map(e => e.item.pinyin).join(', '));
  const fields = pinyinFields(row);
  let id = 'w:' + row.word + ':' + fields.key;
  if (ids.has(id)) { let n = 2; while (ids.has(id + '#' + n)) n++; id = id + '#' + n; report.homographNew.push(row.word + row.homograph); }
  ids.add(id);
  // HanDeDict first; words it lacks get an authored draft gloss (scripts/hsk2025/draft-glosses.json).
  const glossKey = row.word + '|' + row.pinyin;
  let gloss = draftGloss(row.word, fields.key), glossSource = 'HanDeDict';
  if (!gloss && authoredGlosses[glossKey]) { gloss = authoredGlosses[glossKey]; glossSource = 'Entwurf (Claude)'; }
  if (!gloss) {
    report.noGloss.push(row.word + ' ' + row.pinyin);
    const english = (cedict.get(row.word) || []).filter(e => sameReading(e.key, fields.key)).flatMap(e => e.senses).filter(x => !/^CL:/.test(x));
    report.noGlossDetails.push({ key: glossKey, word: row.word, pinyin: row.pinyin, level: row.level, pos: row.pos, english: english.slice(0, 6) });
  }
  const item = { id, word: row.word, pinyin: fields.pinyin };
  if (fields.pinyinSpoken) item.pinyinSpoken = fields.pinyinSpoken;
  if (fields.pinyinAlt) item.pinyinAlt = fields.pinyinAlt;
  Object.assign(item, { meaning: gloss || 'Bedeutung folgt', meaningStatus: 'draft', meaningSource: gloss ? glossSource : null, type: typeFor(row) });
  if (!item.meaningSource) delete item.meaningSource;
  applySyllabus(item, row);
  item.examples = [];
  Object.assign(item, dictionaryFields(row.word, fields.key));
  item.legacyIds = [];
  report.newWords.push(row.word + ' ' + row.pinyin + ' (' + item.level + ')');
  push(fileForLevel(item.level), item);
}

// 3. Retired entries: their ids stay reachable through a surviving entry with the same word.
const survivors = new Map();
for (const list of output.values()) for (const item of list) if (!survivors.has(item.word)) survivors.set(item.word, item);
for (const { item, reason } of retiredByWord) {
  const target = survivors.get(item.word);
  if (target) target.legacyIds = Array.from(new Set([...(target.legacyIds || []), item.id, ...(item.legacyIds || [])]));
  report.retired.push(item.word + ' ' + item.pinyin + ' — ' + reason + (target ? ' → ' + target.id : ' (no redirect)'));
}
for (const list of output.values()) for (const item of list) if (!item.traditional) report.traditionalMissing.push(item.word);

// --- Invariants ---------------------------------------------------------------------------------
const all = Array.from(output.values()).flat();
assert.strictEqual(new Set(all.map(i => i.id)).size, all.length, 'Duplicate ids');
const covered = new Set(all.filter(i => i.syllabus).map(i => i.syllabus.no));
assert.strictEqual(covered.size, syllabus.length, 'Syllabus rows without an entry: ' + (syllabus.length - covered.size));

// --- Write --------------------------------------------------------------------------------------
const sortKey = item => (item.syllabus ? item.syllabus.no : 1e6);
const levelCounts = {};
all.forEach(i => { levelCounts[i.level] = (levelCounts[i.level] || 0) + 1; });
const sample = (list, n = 40) => list.slice(0, n).map(x => '- ' + x).join('\n') + (list.length > n ? '\n- … ' + (list.length - n) + ' more' : '');
const md = [
  '# HSK 2025 re-levelling report' + (DRY_RUN ? ' (dry run)' : ''),
  '',
  'Generated by `scripts/hsk2025/relevel.cjs` from the parsed syllabus (11,000 rows) and the app vocabulary (' + entries.length + ' entries).',
  '',
  '| | Count |', '|---|---|',
  '| Syllabus rows matched to existing entries | ' + report.matched + ' |',
  '| New syllabus words (draft gloss: HanDeDict or authored) | ' + report.newWords.length + ' |',
  '| Existing entries outside the syllabus → Zusatz | ' + report.zusatz.length + ' |',
  '| Retired entries | ' + report.retired.length + ' |',
  '| Pinyin corrected to the syllabus | ' + report.pinyinChanged.length + ' |',
  '| Neutral tone / 一不 sandhi aligned to the syllabus | ' + (report.toneAligned || []).length + ' |',
  '| Same word, different reading (new entry next to an existing one) | ' + report.readingConflicts.length + ' |',
  '| Zusatz pinyin corrected to CC-CEDICT (single dictionary reading) | ' + (report.zusatzPinyinCorrected || []).length + ' |',
  '| Syllabus/Zusatz readings not in CC-CEDICT | ' + report.cedictDisagrees.length + ' |',
  '| Traditional form via OpenCC (no CC-CEDICT entry) | ' + report.traditionalFallback.length + ' |',
  '| New words without HanDeDict gloss | ' + report.noGloss.length + ' |',
  '| Total entries after re-levelling | ' + all.length + ' |',
  '',
  'Entries per level: ' + Object.entries(levelCounts).sort().map(([l, n]) => l + ' ' + n).join(', '),
  '',
  '## Same word, different reading (syllabus row added as new entry)', sample(report.readingConflicts, 300), '',
  '## Retired', sample(report.retired, 200), '',
  '## Pinyin corrected to the syllabus', sample(report.pinyinChanged, 200), '',
  '## Neutral tone / sandhi aligned (sample)', sample(report.toneAligned || [], 60), '',
  '## Zusatz pinyin corrected to CC-CEDICT', sample(report.zusatzPinyinCorrected || [], 200), '',
  '## Readings not found in CC-CEDICT', sample(report.cedictDisagrees, 200), '',
  '## New words without a HanDeDict gloss', sample(report.noGloss, 200), '',
  '## Zusatz (sample)', sample(report.zusatz), '',
  '## New syllabus words (sample)', sample(report.newWords), '',
  '## Traditional form from OpenCC (sample)', sample(report.traditionalFallback), ''
].join('\n');
fs.writeFileSync(path.join(__dirname, 'relevel-report.md'), md);
fs.mkdirSync(path.join(ROOT, '.content-cache', 'hsk2025'), { recursive: true });
fs.writeFileSync(path.join(ROOT, '.content-cache', 'hsk2025', 'no-gloss.json'), JSON.stringify(report.noGlossDetails, null, 1));

if (!DRY_RUN) {
  const header = '// Zhongwen Explorer vocabulary source (HSK 2025 re-levelling, scripts/hsk2025/relevel.cjs). ';
  const files = new Set([...VOCAB_FILES, 'vocab-zusatz.js', ...output.keys()]);
  for (const file of files) {
    const items = (output.get(file) || []).sort((a, b) => sortKey(a) - sortKey(b));
    const name = GLOBAL_OF(file);
    fs.writeFileSync(path.join(ROOT, file), header + file.replace(/\.js$/, '') + '.\nwindow.' + name + ' = ' + JSON.stringify(items, null, 2) + ';\n');
  }
}
if (!DRY_RUN) require('../build-vocab-runtime.cjs').writeVocabRuntime();
console.log((DRY_RUN ? 'Dry run: ' : 'Applied: ') + JSON.stringify({ matched: report.matched, newWords: report.newWords.length, zusatz: report.zusatz.length,
  retired: report.retired.length, pinyinChanged: report.pinyinChanged.length, total: all.length, levels: levelCounts }));
