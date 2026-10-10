// Builds the hanzi section from the HSK 2025 character lists, the vocabulary and the character sources
// (one-off, like relevel.cjs: the old cards are read from git at OLD_COMMIT). Every reading character of the
// syllabus gets its official level; characters used only in Zusatz words get level "Zusatz".
// Readings come from the vocabulary words, checked against Unihan kTGHZ2013/kMandarin and CC-CEDICT;
// German meanings are drafts (old entry or HanDeDict) for the enrichment campaign.
// Usage: node scripts/hanzi/build-hanzi.cjs            dry run: report + preview in .content-cache/hanzi/
//        node scripts/hanzi/build-hanzi.cjs --write    writes hanzi-<level>.js, removes unused diagrams
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const dict = require('../hsk2025/dictionaries.cjs');
const hanzi = require('./common.cjs');

const WRITE = process.argv.includes('--write');
const OUT = path.join(hanzi.ROOT, '.content-cache', 'hanzi');
const HAN = /\p{Script=Han}/u;
const OLD_FILES = ['hanzi-hsk1.js', 'hanzi-hsk2.js', 'hanzi-hsk3.js', 'hanzi-hsk4.js', 'hanzi-hsk5.js', 'hanzi-hsk6.js'];
// The old cards (before this build) are read from the last commit that has them.
const OLD_COMMIT = 'e7cb0ad';
const OLD_DIR = path.join(OUT, 'old');
const MAX_WORDS = 5;

const Pinyin = enrich.loadPinyin();
const characters = require('../hsk2025/characters.json');
const sources = enrich.loadSources();
const vocab = sources.flatMap(source => source.items);
function loadOld() {
  fs.mkdirSync(OLD_DIR, { recursive: true });
  const context = {};
  context.window = context;
  for (const file of OLD_FILES) {
    const target = path.join(OLD_DIR, file);
    if (!fs.existsSync(target)) fs.writeFileSync(target, require('child_process').execFileSync('git', ['show', OLD_COMMIT + ':' + file], { cwd: hanzi.ROOT, maxBuffer: 1 << 26 }));
    require('vm').runInNewContext(fs.readFileSync(target, 'utf8'), context, { filename: file });
  }
  return context.HANZI_DATA;
}
const old = new Map(loadOld().map(entry => [entry.hanzi, entry]));
const radicals = hanzi.loadRadicals();
const cedict = dict.loadCedict();
const handedict = dict.loadHandedict();
const openccChars = dict.loadOpenCCCharacters();
const unihan = dict.loadUnihan(['kMandarin', 'kTGHZ2013', 'kHanyuPinlu', 'kTotalStrokes', 'kRSUnicode', 'kTraditionalVariant']);
const readJsonLines = file => new Map(fs.readFileSync(path.join(dict.SOURCES, file), 'utf8').split(/\r?\n/)
  .filter(Boolean).map(line => JSON.parse(line)).map(entry => [entry.character, entry]));
const animcjk = readJsonLines('animcjk-dictionaryZhHans.txt');
const mmah = readJsonLines('makemeahanzi-dictionary.txt');

// Levels: the reading list decides; everything else used in a vocabulary word is Zusatz.
const levelOf = new Map();
for (const [level, chars] of Object.entries(characters.reading)) for (const ch of chars) levelOf.set(ch, 'HSK' + level);
const writingOf = new Map();
for (const [level, chars] of Object.entries(characters.writing)) for (const ch of chars) writingOf.set(ch, level);
const order = Object.values(characters.reading).flat();
const useCount = new Map();
for (const item of vocab) for (const ch of new Set(Array.from(item.word))) if (HAN.test(ch)) useCount.set(ch, (useCount.get(ch) || 0) + 1);
const zusatz = Array.from(useCount.keys()).filter(ch => !levelOf.has(ch))
  .sort((a, b) => useCount.get(b) - useCount.get(a) || a.codePointAt(0) - b.codePointAt(0));
for (const ch of zusatz) levelOf.set(ch, 'Zusatz');
const allChars = order.concat(zusatz);

const numeric = (syllable, ch) => Pinyin.toNumeric(syllable, ch).toLowerCase();
const report = { alignFailed: [], noVocabReading: [], strokeNoSvg: [], strokeUnihan: [], strokeOld: [], noDecomposition: [], noDraft: [], radicalMismatch: [] };

// Readings of each character in the vocabulary words: syllable i of the word's pinyin belongs to
// character i. Syllabus words count double.
const usage = new Map(); // ch -> Map(numeric -> { weight, words: [{ item, level }] })
for (const item of vocab) {
  const chars = Array.from(item.word).filter(ch => HAN.test(ch));
  const syllables = Pinyin.segment(String(item.pinyin).split('/')[0], item.word);
  if (syllables.length !== chars.length) { report.alignFailed.push(item.word + ' ' + item.pinyin); continue; }
  chars.forEach((ch, i) => {
    const key = numeric(syllables[i], ch);
    if (!usage.has(ch)) usage.set(ch, new Map());
    const byKey = usage.get(ch);
    if (!byKey.has(key)) byKey.set(key, { weight: 0, words: [] });
    byKey.get(key).weight += item.level === 'Zusatz' ? 1 : 2;
    byKey.get(key).words.push(item);
  });
}

// Readings a dictionary attests for a single character (numeric, lower case).
function attested(ch) {
  const keys = new Set();
  const u = unihan.get(ch) || {};
  for (const r of String(u.kTGHZ2013 || '').split(' ')) if (r.includes(':')) keys.add(numeric(r.split(':')[1], ch));
  for (const r of String(u.kMandarin || '').split(' ')) if (r) keys.add(numeric(r, ch));
  for (const r of String(u.kHanyuPinlu || '').split(' ')) if (r) keys.add(numeric(r.replace(/\(.*/, ''), ch));
  for (const e of cedict.get(ch) || []) if (!/^[A-Z]/.test(e.pinyin)) keys.add(e.key);
  return keys;
}

function readingsOf(ch) {
  const known = attested(ch);
  const byKey = usage.get(ch) || new Map();
  // Order: the reading of the character as a syllabus word of its own (长 cháng HSK1, 了 le), then the
  // spoken frequency of Unihan kHanyuPinlu (的 de, 得 de/dé/děi), then the number of words.
  const pinlu = new Map();
  for (const r of String((unihan.get(ch) || {}).kHanyuPinlu || '').split(' ')) {
    const m = r.match(/^(.+)\((\d+)\)$/);
    if (m) pinlu.set(numeric(m[1], ch), Number(m[2]));
  }
  const ownRank = key => { const item = vocab.find(v => v.word === ch && v.level !== 'Zusatz' && numeric(String(v.pinyin).split('/')[0], ch) === key); return item ? enrich.LEVEL_RANK[item.level] : 99; };
  let keys = Array.from(byKey.keys()).filter(key => known.has(key)).sort((a, b) =>
    ownRank(a) - ownRank(b) || (pinlu.get(b) || 0) - (pinlu.get(a) || 0) || byKey.get(b).weight - byKey.get(a).weight);
  // A neutral tone that only appears in words (头发 tóufa, 关系 guānxi) is no reading of its own,
  // unless it is the main one (的 de, 了 le, 子 zi); a toned reading of the same syllable goes first (子 zǐ, zi).
  keys = keys.filter((key, i) => i === 0 || !key.endsWith('5') || !keys.some(k => k !== key && k.slice(0, -1) === key.slice(0, -1)));
  const toned = keys.findIndex(k => !k.endsWith('5') && keys[0].endsWith('5') && k.slice(0, -1) === keys[0].slice(0, -1));
  if (toned > 0) keys.unshift(keys.splice(toned, 1)[0]);
  if (!keys.length) {
    const fallback = String((unihan.get(ch) || {}).kMandarin || '').split(' ')[0];
    report.noVocabReading.push(ch + (fallback ? ' ' + fallback : ''));
    if (fallback) keys = [numeric(fallback, ch)];
  }
  return keys;
}

// Draft German meaning for one reading: the old card for its main reading, otherwise HanDeDict.
function draftMeaning(ch, key, isMain) {
  const before = old.get(ch);
  if (isMain && before && before.meanings && before.meanings.length) return before.meanings.join('; ');
  const senses = (handedict.get(ch) || []).filter(e => e.key === key).flatMap(e => e.senses);
  return senses.length ? dict.germanGloss(senses, 3) : '';
}

// Traditional forms of the readings in use: CC-CEDICT single-character entries (发 fā 發, fà 髮; 干 gān
// 乾/干, gàn 幹), without proper names and pure variant entries; OpenCC's first option otherwise.
const entryRank = dict.mainEntryOrder(cedict);
const isVariantOnly = e => e.senses.every(s => /variant of |^used in |^CL:/.test(s));
// Per reading the main entry; further forms only when CC-CEDICT uses them in at least 20 headwords
// (后 後/后, 几 幾/几, 面 面/麵), so rare variant characters (欢 讙, 年 秊, 杯 盃) stay out.
const headwordUse = new Map();
for (const list of cedict.values()) for (const e of list) for (const c of new Set(Array.from(e.traditional))) headwordUse.set(c, (headwordUse.get(c) || 0) + 1);
function traditionalOf(ch, keys) {
  const candidates = (cedict.get(ch) || []).filter(e => keys.includes(e.key) && Array.from(e.traditional).length === 1 &&
    !/^[A-Z]/.test(e.pinyin) && !isVariantOnly(e)).sort(entryRank);
  const forms = [];
  for (const key of keys) {
    const main = candidates.find(e => e.key === key);
    if (main) forms.push(main.traditional);
  }
  for (const e of candidates) if ((headwordUse.get(e.traditional) || 0) >= 20) forms.push(e.traditional);
  const unique = Array.from(new Set(forms));
  return unique.length ? unique : [(openccChars.get(ch) || [ch])[0]];
}

function strokesOf(ch) {
  const fromSvg = hanzi.svgStrokeCount(ch);
  const fromUnihan = parseInt(String((unihan.get(ch) || {}).kTotalStrokes || '').split(' ')[0], 10) || null;
  if (!fromSvg) report.strokeNoSvg.push(ch);
  else if (fromUnihan && fromUnihan !== fromSvg) report.strokeUnihan.push(ch + ' ' + fromSvg + '/' + fromUnihan);
  const before = old.get(ch);
  if (before && before.strokes && fromSvg && before.strokes !== fromSvg) report.strokeOld.push(ch + ' ' + before.strokes + '→' + fromSvg);
  return fromSvg || fromUnihan;
}

const radicalByNumber = new Map(radicals.map(r => [r.number, r]));
const radicalOfForm = new Map();
for (const r of radicals) {
  radicalOfForm.set(r.radical, r);
  for (const v of r.variants || []) radicalOfForm.set(v, r);
}
function primaryRadicalOf(ch, record = true) {
  const rs = String((unihan.get(ch) || {}).kRSUnicode || '').split(' ')[0];
  const radical = radicalByNumber.get(parseInt(rs, 10));
  const a = animcjk.get(ch);
  const named = a && a.radical ? (a.radical.match(/\((.)\)/) || [null, a.radical.trim()])[1] : null;
  if (record && radical && named && named !== radical.radical && radicalOfForm.get(named) !== radical) report.radicalMismatch.push(ch + ' ' + radical.radical + '/' + named);
  return radical ? radical.radical : null;
}

// The radical as written in the character (氵 in 河, 讠 in 说, 长 in 长), when it differs from the
// Kangxi form; AnimCJK writes "氵 (水)".
function radicalFormOf(ch) {
  const a = animcjk.get(ch);
  const form = a && a.radical ? a.radical.split(' ')[0] : null;
  const kangxi = primaryRadicalOf(ch, false);
  const simplifiedRadical = String((unihan.get(ch) || {}).kRSUnicode || '').split(' ')[0].includes("'");
  return form && kangxi && form !== kangxi && (simplifiedRadical || radicalOfForm.get(form) === radicalOfForm.get(kangxi)) ? form : undefined;
}

// Top-level parts of an IDS decomposition; nested parts are flattened to their characters.
const IDS_ARITY = { '⿲': 3, '⿳': 3 };
function parseIds(text) {
  const chars = Array.from(text);
  let i = 0;
  const node = () => {
    const ch = chars[i++];
    if (ch && /[⿰-⿻]/.test(ch)) {
      const parts = [];
      for (let n = IDS_ARITY[ch] || 2; n > 0 && i < chars.length; n--) parts.push(node());
      return { parts };
    }
    return ch;
  };
  const root = node();
  return root && root.parts ? root.parts : [];
}
const leaves = part => typeof part === 'string' ? [part] : part.parts.flatMap(leaves);

function componentsOf(ch) {
  const a = animcjk.get(ch), m = mmah.get(ch);
  // Prefer a decomposition into whole characters (茶 ⿱艹⿱人木 → 艹 + 人木 is worse than AnimCJK's
  // ⿳艹𠆢朩); nested parts are listed as their single characters.
  const candidates = [a && a.decomposition, m && m.decomposition].filter(Boolean).map(parseIds)
    .filter(parts => parts.length && !parts.some(part => typeof part === 'string' && /[？?]/.test(part)));
  const flat = candidates.find(parts => parts.every(part => typeof part === 'string')) || candidates[0] || [];
  const parts = flat.flatMap(leaves).filter(part => part && !/[？?]/.test(part));
  if (!parts.length) report.noDecomposition.push(ch);
  const etymology = (m && m.etymology) || {};
  const before = old.get(ch);
  const sameRadical = (x, y) => x === y || (radicalOfForm.get(x) && radicalOfForm.get(x) === radicalOfForm.get(y));
  return Array.from(new Set(parts)).map(part => {
    const role = etymology.type === 'pictophonetic'
      ? (sameRadical(part, etymology.semantic) ? 'semantic' : sameRadical(part, etymology.phonetic) ? 'phonetic' : null)
      : null;
    const oldComponent = before && (before.components || []).find(c => c.radical === part);
    const radical = radicalOfForm.get(part);
    const meaning = (oldComponent && oldComponent.meaning) || (radical && radical.meaning) || '';
    return Object.assign({ part }, role ? { role } : {}, meaning ? { meaning } : {});
  });
}

// Example words: one per reading first, then the most basic words; lowest level, then shortest.
function wordsOf(ch, keys) {
  const byKey = usage.get(ch) || new Map();
  const rank = item => (enrich.LEVEL_RANK[item.level] || 9) * 100 + Array.from(item.word).length;
  const best = list => list.slice().sort((a, b) => rank(a) - rank(b));
  const chosen = [];
  for (const key of keys) {
    const first = best((byKey.get(key) || { words: [] }).words).find(item => !chosen.includes(item));
    if (first) chosen.push(first);
  }
  const rest = best(Array.from(byKey.values()).flatMap(v => v.words));
  for (const item of rest) if (chosen.length < MAX_WORDS && !chosen.includes(item)) chosen.push(item);
  return chosen.slice(0, MAX_WORDS).map(item => item.id);
}

const entries = allChars.map(ch => {
  const keys = readingsOf(ch);
  const readings = keys.map((key, i) => {
    const meaning = draftMeaning(ch, key, i === 0);
    if (!meaning) report.noDraft.push(ch + ' ' + key);
    return { pinyin: Pinyin.toMarked(key), meaning };
  });
  const u = unihan.get(ch) || {};
  const before = old.get(ch);
  const m = mmah.get(ch);
  const entry = {
    hanzi: ch,
    level: levelOf.get(ch),
    writingLevel: writingOf.get(ch) || undefined,
    traditional: traditionalOf(ch, keys),
    readings,
    meaningStatus: 'draft',
    strokes: strokesOf(ch),
    noDiagram: hanzi.svgStrokeCount(ch) ? undefined : true,
    primaryRadical: primaryRadicalOf(ch),
    radicalForm: radicalFormOf(ch),
    components: componentsOf(ch),
    words: wordsOf(ch, keys),
    evidence: {
      cedict: keys.map(key => key + ': ' + (cedict.get(ch) || []).filter(e => e.key === key).flatMap(e => e.senses).slice(0, 5).join('; ')),
      handedict: keys.map(key => key + ': ' + (handedict.get(ch) || []).filter(e => e.key === key).flatMap(e => e.senses).slice(0, 5).join('; ')),
      unihan: [u.kTGHZ2013, u.kHanyuPinlu].filter(Boolean).join(' | '),
      etymology: m && m.etymology ? [m.etymology.type, m.etymology.hint].filter(Boolean).join(': ') : undefined,
      old: before ? (before.meanings || []).join('; ') : undefined
    }
  };
  return JSON.parse(JSON.stringify(entry));
});

// Report.
const count = (list, fn) => list.reduce((acc, x) => { const k = fn(x); acc[k] = (acc[k] || 0) + 1; return acc; }, {});
const dropped = Array.from(old.keys()).filter(ch => !levelOf.has(ch));
const lines = [
  '# Hanzi build report (' + (WRITE ? 'written' : 'dry run') + ')', '',
  'Entries: ' + entries.length + ' ' + JSON.stringify(count(entries, e => e.level)),
  'Writing list (书写字): ' + entries.filter(e => e.writingLevel).length,
  'Polyphones (2+ readings): ' + entries.filter(e => e.readings.length > 1).length + ', readings total ' + entries.reduce((s, e) => s + e.readings.length, 0),
  'Several traditional forms: ' + entries.filter(e => e.traditional.length > 1).length +
    ' (e.g. ' + entries.filter(e => e.traditional.length > 1).slice(0, 12).map(e => e.hanzi + '→' + e.traditional.join('')).join(' ') + ')',
  'Old cards reused: ' + entries.filter(e => old.has(e.hanzi)).length + '; old cards dropped (no syllabus, no word): ' + dropped.length,
  'Readings without a draft meaning: ' + report.noDraft.length,
  'Words per entry: ' + JSON.stringify(count(entries, e => e.words.length)),
  'Component roles: ' + JSON.stringify(count(entries.flatMap(e => e.components), c => c.role || 'none')) +
    ', components without meaning: ' + entries.flatMap(e => e.components).filter(c => !c.meaning).length, '',
  '## Stroke counts',
  'Without diagram (' + report.strokeNoSvg.length + '): ' + report.strokeNoSvg.join(''),
  'Diagram ≠ Unihan kTotalStrokes (' + report.strokeUnihan.length + '): ' + report.strokeUnihan.slice(0, 60).join(', '),
  'Old card ≠ diagram (' + report.strokeOld.length + '): ' + report.strokeOld.join(', '), '',
  '## Readings',
  'No reading attested in a word (' + report.noVocabReading.length + '): ' + report.noVocabReading.join(', '),
  'Words whose pinyin does not align (' + report.alignFailed.length + '): ' + report.alignFailed.slice(0, 40).join(' | '), '',
  '## Components and radicals',
  'No decomposition (' + report.noDecomposition.length + '): ' + report.noDecomposition.join(''),
  'Unihan radical ≠ AnimCJK radical (' + report.radicalMismatch.length + '): ' + report.radicalMismatch.join(', '),
  'Without primary radical: ' + entries.filter(e => !e.primaryRadical).map(e => e.hanzi).join(''), '',
  '## Dropped old cards', dropped.join(''), '',
  '## Samples', ...['好', '行', '发', '的', '了', '茶', '赢'].map(ch => '```\n' + JSON.stringify(entries.find(e => e.hanzi === ch), null, 1) + '\n```')
];
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'build-report.md'), lines.join('\n') + '\n');
fs.writeFileSync(path.join(OUT, 'preview.json'), JSON.stringify(entries, null, 1));
console.log(lines.slice(0, 10).join('\n'));
console.log('Report: ' + path.join(OUT, 'build-report.md'));

if (WRITE) {
  hanzi.writeHanzi(entries);
  const keep = new Set(entries.map(e => e.hanzi.codePointAt(0) + '.svg'));
  const unused = fs.readdirSync(path.join(hanzi.ROOT, 'stroke-order')).filter(name => name.endsWith('.svg') && !keep.has(name));
  for (const name of unused) fs.unlinkSync(path.join(hanzi.ROOT, 'stroke-order', name));
  console.log('Wrote ' + hanzi.FILES.join(', ') + '; removed ' + unused.length + ' unused diagrams');
}
