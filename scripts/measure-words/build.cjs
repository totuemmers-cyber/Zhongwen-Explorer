// Phase 8 step 2: rebuilds the Zählwörter (量词) section on the HSK 2025 syllabus.
// Sources of the entry list and levels:
//   - vocabulary syllabus rows (scripts/hsk2025/vocabulary.json) whose part of speech has 量 — level of the 量 use
//     (main pos → row level; 量 only in a bracket group → the matching later level, 回 动、（量） 1(3) → HSK3);
//   - the measure-word lists of the grammar syllabus (scripts/hsk2025/grammar.json, 词类 / 量词: 名量词, 借用名量词,
//     动量词, 时量词, 复合量词) — they add borrowed classifiers (杯 HSK1, 碗 盘 HSK3 …) and the kind (动量词 → Verbal);
//   - selected 数量 rows (一下, 一点儿, 一些, 一会儿, 半天), see SHULIANG;
//   - the old classifiers (measure-words-*.js at OLD_COMMIT) not covered above → Zusatz (or dropped, OLD_DROPPED);
//   - classifiers only vocab.measureWords uses (VOCAB_EXTRA) → Zusatz.
// Old content becomes the author draft (meaningStatus 'draft'); new entries get draft meanings from the vocabulary
// entry or HanDeDict. nouns = reverse index of vocab.measureWords. Counting tables are generated.
// Usage: node scripts/measure-words/build.cjs            dry run: writes scripts/measure-words/build-report.md and the
//                                                        would-be data file to .content-cache/measure-words/
//        node scripts/measure-words/build.cjs --write    also writes measure-words-data.js, removes the -extra files,
//                                                        points lang-profile.js dataScripts.measurewords at it
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');
const enrich = require('../enrich/common.cjs');
const dict = require('../hsk2025/dictionaries.cjs');
const validate = require('../enrich/validate.cjs');
const { asciiUmlauts } = require('../hanzi/common.cjs');

const ROOT = enrich.ROOT;
const WRITE = process.argv.includes('--write');
const REPORT = path.join(__dirname, 'build-report.md');
// Last commit with the hand-written classifier files; the build stays re-runnable after --write.
const OLD_COMMIT = 'dc85aca';
const OLD_FILES = ['measure-words-data.js', 'measure-words-extra.js', 'measure-words-extra2.js'];
const LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9', 'Zusatz'];
const RANK = Object.fromEntries(LEVELS.map((l, i) => [l, i]));
const LEVEL = l => 'HSK' + l;
const MAX_NOUNS = 30;
const KINDS = ['Zählwort', 'Maßeinheit', 'Zeit', 'Verbal', 'Unbestimmt'];
// Filter keys stay ASCII (index.html data-mwcat); labels for the UI.
const CATEGORY_LABELS = { Allgemein: 'Allgemein', Menschen: 'Menschen', Tiere: 'Tiere', Objekte: 'Objekte', Essen: 'Essen',
  Natur: 'Natur', Transport: 'Transport', Zeit: 'Zeit', Gebaeude: 'Gebäude', Mengen: 'Mengen', Handlungen: 'Handlungen',
  Literatur: 'Literatur', Medizin: 'Medizin', Abstrakt: 'Abstrakt', Masseinheiten: 'Maßeinheiten' };

// ---------------------------------------------------------------- decisions
// 数量 rows (numeral + classifier words). Included: indefinite quantities and V+一下 that learners look up next to
// 些/下/点; the rest are adverbs, nouns or idioms whose classifier is transparent → stay in Vokabeln.
const SHULIANG = {
  '一下': { include: true, kind: 'Verbal', category: 'Handlungen', why: 'V+一下 „mal kurz“ ist das HSK1-Muster des Verbalzählworts 下; Lernende suchen es hier. Adverb-Gebrauch (一下就懂了) bleibt Vokabel.' },
  '一点儿': { include: true, kind: 'Unbestimmt', category: 'Mengen', why: 'Unbestimmte Menge vor Nomen (一点儿水) und nach Adjektiven; steht im Satz an der Stelle von Zahl+Zählwort.' },
  '一些': { include: true, kind: 'Unbestimmt', category: 'Mengen', why: 'Unbestimmte Menge „einige“ (一些书), Gegenstück zu 些; ersetzt Zahl+Zählwort.' },
  '一会儿': { include: true, kind: 'Unbestimmt', category: 'Zeit', why: 'Unbestimmte Zeitdauer als Dauerergänzung (等一会儿) – Zeitmenge wie 两天/三分钟.' },
  '半天': { include: true, kind: 'Unbestimmt', category: 'Zeit', why: 'Zeitmenge (半+天) „halber Tag / ewig lange“, steht als Dauerergänzung wie 一会儿.' },
  '俩': { include: false, why: 'Zahlwort „zwei (Stück)“ = 两个, kein Zählwort; Hinweis „kein 个 nach 俩“ gehört in die Notiz von 个.' },
  '半夜': { include: false, why: 'Nomen „Mitternacht“ (Tageszeit), keine Mengenangabe.' },
  '首次': { include: false, why: 'Adverbial „zum ersten Mal“ (首+次), Wortschatz; 次 hat einen eigenen Eintrag.' },
  '首批': { include: false, why: '„erste Charge“ (首+批), Wortschatz; 批 hat einen eigenen Eintrag.' },
  '一阵': { include: false, why: '一+阵 vollständig durchsichtig; gehört als Beispiel in den Eintrag 阵.' },
  '八成': { include: false, why: 'Adverb „höchstwahrscheinlich“ / „80 %“, Wortschatz; 成 hat einen eigenen Eintrag.' },
  '百般': { include: false, why: 'Adverb „auf jede erdenkliche Weise“, keine Mengenangabe im Sinn eines Zählworts.' },
  '一度': { include: false, why: 'Adverb „zeitweise, einst“, Wortschatz.' },
  '两下子': { include: false, why: 'Idiomatisches Nomen „etwas drauf haben“, Wortschatz.' }
};
// Grammar-list items whose syllabus vocabulary row has another reading (or none).
const GRAMMAR_READINGS = { '打': 'da2', '重': 'chong2', '杯': 'bei1', '盒': 'he2', '袋': 'dai4' };
// Old classifiers that are no classifiers in the usual sense: bookmarks move to the vocabulary entry.
const OLD_DROPPED = {
  '字': '字 ist ein Nomen, gezählt mit 个 (一个字, so auch die alte Notiz); 一字不差 ist eine feste Wendung.',
  '月': '月 nach Zahlen bildet Monatsnamen (三月 = März); „drei Monate“ ist 三个月 – 月 ist hier Nomen mit 个.'
};
// Kind per classifier where it is not Zählwort (grammar 动量词/时量词 set Verbal/Zeit on their own).
const KIND = {
  Maßeinheit: '元 角 毛 公斤 斤 米 公里 克 两 千克 摄氏度 度 吨 厘米 尺 寸 毫米 毫升 平方 平方米 升 磅 公顷 立方 立方米 码 马力 亩 担 人次 倍 成 环 打 方',
  Zeit: '点 分 分钟 年 日 岁 天 号 时 周 刻 秒 夜 旬 小时',
  Verbal: '下 次 回 遍 趟 顿 场 声 番 通 眼 拳 脚 刀 巴掌 针 步',
  Unbestimmt: '些'
};
// Secondary use worth a badge (口 is 名量词 HSK1 and 动量词 HSK3; 顿/场 count meals/events as well as bouts).
const KIND_ALSO = { '口': 'Verbal', '顿': 'Zählwort', '场': 'Zählwort', '回': 'Zählwort', '分': 'Maßeinheit', '块': 'Maßeinheit' };
// Classifiers that vocab.measureWords uses but neither the syllabus nor the old data has: Zusatz entries, so every
// classifier chip of a noun links somewhere (word → [category, kind]). Only added with a CC-CEDICT/HanDeDict classifier sense.
const VOCAB_EXTRA = { '处': ['Gebaeude'], '餐': ['Essen'], '床': ['Objekte'], '瓣': ['Essen'], '服': ['Medizin'], '撮': ['Mengen'],
  '丝': ['Abstrakt'], '缸': ['Essen'], '簇': ['Natur'], '档': ['Abstrakt'], '曲': ['Literatur'], '挂': ['Objekte'], '扎': ['Mengen'],
  '记': ['Handlungen', 'Verbal'], '具': ['Objekte'], '泡': ['Mengen'], '纸': ['Literatur'], '发': ['Objekte'],
  // From CC-CEDICT's inline classifier lists (scripts/hsk2025/fix-inline-classifiers.cjs, 2026-10-11).
  '沓': ['Mengen'], '峰': ['Tiere'] };
// Categories for entries without old content, and corrections of old ones (old → new noted in the report).
const CATEGORY = {
  Zeit: '点 分 号 日 岁 时 刻 夜 旬 堂',
  Masseinheiten: '元 角 毛 公斤 斤 米 公里 克 两 千克 摄氏度 度 吨 厘米 尺 寸 毫米 毫升 平方 平方米 升 磅 公顷 立方 立方米 码 马力 亩 担 人次 环',
  Mengen: '些 倍 成 组 团 捧 摊 脸 屋子 桌子',
  Menschen: '队 户 拨',
  Objekte: '卷:juan3 款 杆',
  Literatur: '页 集 章',
  Abstrakt: '等 单 级 届 类 派 线 样 重',
  Natur: '枝 抹',
  Transport: '驾',
  Tiere: '胎',
  Medizin: '丸',
  Gebaeude: '幢 座 栋 间 所 扇',
  Handlungen: '通 次 遍 趟 番 回'
};
// Old categories replaced by CATEGORY (only these keys; everything else keeps its old category): buildings out of
// Natur/Objekte, devices out of Transport, pure verbal classifiers into Handlungen (the quiz skips that category
// for noun distractors).
const RECATEGORIZE = new Set(['座', '栋', '间', '所', '扇', '台', '次', '遍', '趟', '番', '回']);
CATEGORY.Objekte += ' 台';
// Draft meanings of the borrowed classifiers of the grammar syllabus without old content.
const BORROWED_MEANING = { '脸': 'ein ganzes Gesicht voll (一脸汗, 一脸笑容)', '屋子': 'ein ganzes Zimmer voll (一屋子人)', '桌子': 'ein ganzer Tisch voll (一桌子菜)',
  // Classifier from CC-CEDICT's inline lists without a German dictionary sense.
  '沓': 'Stapel, Packen (Papier, Geldscheine: 一沓纸)' };
// Counting tables: ordinal readings (dates) keep yī and use 二; the tael 两 is counted 二两.
const ORDINAL = new Set(['号', '日']);
const ER = new Set(['号', '日', '两']);

const splitWords = s => s.split(/\s+/).filter(Boolean);
const kindOf = new Map();
for (const [kind, words] of Object.entries(KIND)) for (const w of splitWords(words)) kindOf.set(w, kind);
const categoryOf = new Map();
for (const [cat, words] of Object.entries(CATEGORY)) for (const w of splitWords(words)) categoryOf.set(w, cat);

// ---------------------------------------------------------------- sources
const Pinyin = enrich.loadPinyin();
const cedict = dict.loadCedict();
const handedict = dict.loadHandedict();
const entryOrder = dict.mainEntryOrder(cedict);
const vctx = validate.context();
const syllabusRows = require('../hsk2025/vocabulary.json');
const grammarRows = require('../hsk2025/grammar.json').rows;
const vocab = enrich.loadSources().flatMap(s => s.items);
const vocabByNo = new Map(vocab.filter(v => v.syllabus).map(v => [v.syllabus.no, v]));
const vocabByWord = new Map();
for (const v of vocab) { if (!vocabByWord.has(v.word)) vocabByWord.set(v.word, []); vocabByWord.get(v.word).push(v); }
const numeric = (pinyin, word) => Pinyin.toNumeric(String(pinyin).split('/')[0].trim(), word).toLowerCase();
const marked = key => Pinyin.toMarked(key);
const vocabKey = v => v.id.split(':')[2].replace(/#\d+$/, '');

function loadOld() {
  const context = {};
  context.window = context;
  for (const file of OLD_FILES) {
    const text = execFileSync('git', ['show', OLD_COMMIT + ':' + file], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });
    vm.runInNewContext(text, context, { filename: file });
  }
  return context.MEASURE_WORDS_DATA;
}
const oldData = loadOld();
const oldList = oldData.measureWords;

// 动、（名、量） → [{level, parts}] with the main group first. (relevel.cjs splits on 、 inside brackets and so loses
// the second part of （名、量）; reported below.)
function posGroups(row) {
  const groups = String(row.pos || '').match(/（[^）]*）|[^、（）]+/g) || [];
  const main = groups.filter(g => !g.startsWith('（')).map(g => g.trim());
  const later = groups.filter(g => g.startsWith('（')).map(g => g.replace(/[（）]/g, '').split(/[、，]/));
  const out = [{ level: LEVEL(row.level), parts: main }];
  later.forEach((parts, i) => out.push({ level: LEVEL(row.laterLevels[i] || row.level), parts, later: true }));
  return out;
}

// ---------------------------------------------------------------- candidates: classifier|reading
const cands = new Map();
function cand(word, key) {
  const k = word + '|' + key;
  if (!cands.has(k)) cands.set(k, { word, key, rows: [], grammar: [], old: null, sources: new Set() });
  return cands.get(k);
}
const ambiguous = [];
const shuliangReport = [];

for (const row of syllabusRows) {
  if (!/量/.test(row.pos)) continue;
  const groups = posGroups(row);
  if (groups[0].parts.includes('数量') || groups.some(g => g.parts.includes('数量'))) {
    const d = SHULIANG[row.word];
    if (!d) throw new Error('No 数量 decision for ' + row.word);
    shuliangReport.push({ row, d });
    if (!d.include) continue;
  }
  const g = groups.find(g => g.parts.some(p => p === '量' || p === '数量'));
  const rowVocab = vocabByNo.get(row.no);
  const c = cand(row.word, rowVocab ? vocabKey(rowVocab) : numeric(row.pinyin, row.word));
  c.rows.push({ row, level: g.level, later: !!g.later, mainPos: groups[0].parts.join('、') });
  c.sources.add('vocab');
}

// Grammar syllabus lists.
const GRAMMAR_KIND = { '动量词': 'Verbal', '时量词': 'Zeit' };
const grammarListRows = grammarRows.filter(r => r.category === '词类' && r.categoryName === '量词');
const grammarItems = [];
for (const r of grammarListRows) {
  if (r.item === '量词重叠') continue; // 个个、张张 – a pattern, noted in specialForms of 个/张
  const body = r.content.replace(/^（\d）/, '').replace(/^[^：]*：/, '');
  const borrowed = /借用/.test(r.content);
  for (const raw of body.split('、').filter(Boolean)) {
    const homo = { '¹': 0, '²': 1 }[raw.slice(-1)];
    const word = raw.replace(/[¹²]$/, '');
    let key = GRAMMAR_READINGS[word];
    if (!key) {
      const rows = syllabusRows.filter(x => x.word === word);
      const withMw = rows.filter(x => /量/.test(x.pos));
      const pick = homo !== undefined ? withMw[homo] : (withMw[0] || rows[0]);
      if (!pick) throw new Error('No reading for grammar item ' + raw);
      key = vocabByNo.get(pick.no) ? vocabKey(vocabByNo.get(pick.no)) : numeric(pick.pinyin, word);
    }
    const c = cand(word, key);
    c.grammar.push({ no: r.no, level: LEVEL(r.level), item: r.item, borrowed, kind: GRAMMAR_KIND[r.item] || null });
    c.sources.add('grammar');
    grammarItems.push({ word, key, level: LEVEL(r.level), item: r.item, borrowed });
  }
}

// Old classifiers.
const oldMatches = [];
const oldUnmatched = [];
for (const [index, o] of oldList.entries()) {
  const key = numeric(o.pinyin, o.classifier);
  let c = cands.get(o.classifier + '|' + key);
  let note = '';
  if (!c) {
    const same = [...cands.values()].filter(x => x.word === o.classifier);
    if (same.length === 1) { c = same[0]; note = 'Lesung alt ' + o.pinyin + ' ≠ Lehrplan ' + marked(c.key); }
  }
  if (c) { c.old = { ...o, index }; c.sources.add('old'); oldMatches.push({ o, c, note }); continue; }
  oldUnmatched.push({ o, key, index });
}
const oldDecisions = [];
for (const { o, key, index } of oldUnmatched) {
  const rows = syllabusRows.filter(r => r.word === o.classifier);
  const sameReading = rows.filter(r => numeric(r.pinyin, r.word) === key);
  const cedictCl = cedictClassifier(o.classifier, key);
  const usedBy = vocab.filter(v => (v.measureWords || []).some(m => m.word === o.classifier)).length;
  const decision = OLD_DROPPED[o.classifier] ? 'entfernen' : sameReading.length ? 'Lehrplanwort-Level' : 'Zusatz';
  oldDecisions.push({ o, key, rows, sameReading, cedictCl, usedBy, decision });
  if (decision === 'entfernen') continue;
  const c = cand(o.classifier, key);
  c.old = { ...o, index };
  c.sources.add('old');
  // Settled 2026-10-11: a classifier that is a syllabus word in the same reading (other part of speech: 门 名 HSK2,
  // 小时 名 HSK1) takes that word's level (levelSource 'word'); the others are Zusatz.
  if (sameReading.length) c.wordLevel = sameReading.map(r => LEVEL(r.level)).sort((a, b) => RANK[a] - RANK[b])[0];
  else c.zusatz = true;
}

// Classifiers only vocab.measureWords knows.
const vocabExtra = [];
for (const [word, [category, kind]] of Object.entries(VOCAB_EXTRA)) {
  if ([...cands.values()].some(c => c.word === word)) continue;
  const keys = new Map();
  for (const v of vocab) for (const m of v.measureWords || []) if (m.word === word) keys.set(m.pinyin, (keys.get(m.pinyin) || 0) + 1);
  const key = [...keys].sort((a, b) => b[1] - a[1])[0][0];
  const cl = cedictClassifier(word, key);
  const de = (handedict.get(word) || []).filter(e => e.key === key).flatMap(e => e.senses).filter(s => /\bZEW\b|\(Zähl\)/.test(s));
  vocabExtra.push({ word, key, cl, de: de.length });
  if (!cl.senses.length && !de.length) continue;
  const c = cand(word, key);
  c.zusatz = true; c.vocabExtra = { category, kind: kind || 'Zählwort' }; c.sources.add('vocab.measureWords');
}

function cedictClassifier(word, key) {
  const entries = (cedict.get(word) || []).filter(e => !key || e.key === key);
  const senses = entries.flatMap(e => e.senses.filter(s => /classifier/i.test(s)));
  let listedAsCl = 0;
  for (const list of cedict.values()) for (const e of list) if (e.classifiers.some(c => c.word === word && (!key || c.pinyin === key))) listedAsCl++;
  return { senses, listedAsCl };
}

// ---------------------------------------------------------------- entries
const entries = [];
const wordsWithSeveralReadings = new Set([...cands.values()].map(c => c.word).filter((w, i, a) => a.indexOf(w) !== i));
for (const c of cands.values()) {
  const levels = [...c.rows.map(r => r.level), ...c.grammar.map(g => g.level)];
  const level = c.zusatz ? 'Zusatz' : c.wordLevel || levels.sort((a, b) => RANK[a] - RANK[b])[0];
  const vocabLevel = c.rows.map(r => r.level).sort((a, b) => RANK[a] - RANK[b])[0];
  const levelSource = c.zusatz ? null : c.wordLevel ? 'word' : vocabLevel === level ? 'vocab' : 'grammar';
  // Own vocabulary entry: the syllabus row of the 量 use, else a vocab entry with the reading.
  const firstRow = c.rows.slice().sort((a, b) => RANK[a.level] - RANK[b.level])[0];
  let own = firstRow ? vocabByNo.get(firstRow.row.no) : null;
  if (!own) own = (vocabByWord.get(c.word) || []).find(v => vocabKey(v) === c.key) || null;
  // Kind of the earliest grammar list (口 is 名量词 HSK1 before 动量词 HSK3).
  const grammarKind = c.grammar.length ? c.grammar.slice().sort((a, b) => RANK[a.level] - RANK[b.level])[0].kind : null;
  const shuliang = SHULIANG[c.word];
  const kind = (shuliang && shuliang.kind) || (c.vocabExtra && c.vocabExtra.kind) || kindOf.get(c.word) || grammarKind || 'Zählwort';
  const o = c.old;
  const catKey = categoryOf.get(c.word + ':' + c.key) || categoryOf.get(c.word) || (c.vocabExtra && c.vocabExtra.category);
  let category = o && !RECATEGORIZE.has(c.word) ? o.category : (shuliang && shuliang.category) || catKey ||
    (kind === 'Zeit' ? 'Zeit' : kind === 'Maßeinheit' ? 'Masseinheiten' : kind === 'Verbal' ? 'Handlungen' : kind === 'Unbestimmt' ? 'Mengen' : null);
  const id = 'm:' + c.word + (wordsWithSeveralReadings.has(c.word) ? ':' + c.key : '');
  const pinyin = own && vocabKey(own) === c.key ? own.pinyin : marked(c.key);
  const entry = { id, classifier: c.word, pinyin };
  if (own && own.pinyinSpoken && vocabKey(own) === c.key) entry.pinyinSpoken = own.pinyinSpoken;
  entry.traditional = own ? own.traditional : traditionalOf(c.word, c.key);
  entry.level = level;
  if (levelSource) entry.levelSource = levelSource;
  entry.kind = kind;
  if (KIND_ALSO[c.word] && KIND_ALSO[c.word] !== kind) entry.kindAlso = KIND_ALSO[c.word];
  entry.category = category;
  let meaningSource = 'alt';
  if (o) {
    for (const f of ['meaning', 'usage', 'questionWord']) if (o[f]) entry[f] = o[f];
  } else {
    const draft = draftMeaning(c, own);
    if (draft) { entry.meaning = draft.text; meaningSource = draft.source; } else meaningSource = 'keine';
  }
  if (!entry.meaning && BORROWED_MEANING[c.word]) { entry.meaning = BORROWED_MEANING[c.word]; meaningSource = 'Autor'; }
  // 数量 words (一下, 一些 …) already contain the number: no question word, no counting table (form '数量').
  // Counting tables are generated by the app (section-configs.js countingRows); countStyle marks the exceptions.
  if (shuliang) entry.form = '数量';
  if (!entry.questionWord && !shuliang) entry.questionWord = (kind === 'Maßeinheit' ? '多少' : '几') + c.word;
  if (ORDINAL.has(c.word)) entry.countStyle = 'date';
  else if (ER.has(c.word)) entry.countStyle = 'er';
  const borrowed = c.grammar.find(g => g.borrowed);
  if (borrowed) entry.borrowed = true;
  if (o && o.specialForms && o.specialForms.length) entry.specialForms = o.specialForms;
  if (o && o.examples && o.examples.length) entry.examples = o.examples;
  if (o && o.notes) entry.notes = o.notes;
  if (borrowed && !/借用/.test(entry.notes || '')) {
    entry.notes = ((entry.notes ? entry.notes + ' ' : '') + 'Lehnzählwort (借用名量词): eigentlich ein Nomen, das als Zählwort dient; im Grammatik-Lehrplan ' + borrowed.level + ' geführt.');
  }
  if (own) entry.vocabId = own.id;
  entry.syllabus = {};
  if (c.rows.length) entry.syllabus.vocab = c.rows.map(r => ({ no: r.row.no, level: LEVEL(r.row.level), pos: r.row.pos, measureLevel: r.level }));
  if (c.grammar.length) entry.syllabus.grammar = c.grammar.map(g => ({ no: g.no, level: g.level, item: g.item + (g.borrowed ? ' (借用)' : '') }));
  if (!Object.keys(entry.syllabus).length) delete entry.syllabus;
  if (o) entry.legacyIds = [o.classifier];
  entry.meaningStatus = 'draft';
  Object.defineProperty(entry, '_c', { value: { ...c, meaningSource, firstRow, own } });
  entries.push(entry);
}

// Main CC-CEDICT entry of the reading (峰, not the variant 峯): entryOrder.
function traditionalOf(word, key) {
  const list = (cedict.get(word) || []).slice().sort(entryOrder);
  const e = list.find(x => x.key === key) || list[0];
  return e ? e.traditional : word;
}

// Draft German meaning: the vocab entry when it is a classifier entry, else HanDeDict ZEW senses.
function draftMeaning(c, own) {
  if (own && /Zählwort|Maßeinheit|Einheit/.test(own.meaning)) {
    const parts = own.meaning.split(/;\s*/).filter(p => /Zählwort|Einheit|Maß/.test(p));
    return { text: own.type === 'Zählwort' ? own.meaning : parts.join('; '), source: 'vocab' };
  }
  if (own && (own.type === 'Zählwort' || SHULIANG[c.word])) return { text: own.meaning, source: 'vocab' };
  const senses = (handedict.get(c.word) || []).filter(e => e.key === c.key)
    .flatMap(e => e.senses).filter(s => /\bZEW\b|Zähleinheitswort|\(Zähl\)/.test(s))
    .map(s => s.split(/;\s*Bsp\.:/)[0].replace(/\s*\(Zähl[^)]*\)/g, '').replace(/\bZEW\b/g, 'Zählwort').trim())
    .filter(s => s && !/^Zählwort:/.test(s));
  if (senses.length) return { text: [...new Set(senses)].slice(0, 3).join('; '), source: 'HanDeDict' };
  return null;
}

// 1–10 with 一 sandhi (yí before tone 4, yì otherwise; ordinal dates keep yī) and 两 (二 for dates and the tael).
function countingTable(word, pinyin, key) {
  const syl = Pinyin.segment(pinyin, word);
  const firstTone = Number((Pinyin.toNumeric(syl[0] || '', word.charAt(0)).match(/(\d)/) || [])[1] || 5);
  const yi = ORDINAL.has(word) ? 'yī' : firstTone === 4 || firstTone === 5 ? 'yí' : 'yì';
  const nums = [[1, '一', yi], [2, ER.has(word) ? '二' : '两', ER.has(word) ? 'èr' : 'liǎng'], [3, '三', 'sān'], [4, '四', 'sì'],
    [5, '五', 'wǔ'], [6, '六', 'liù'], [7, '七', 'qī'], [8, '八', 'bā'], [9, '九', 'jiǔ'], [10, '十', 'shí']];
  return nums.map(([n, h, p]) => ({ number: n, chinese: h + word, pinyin: p + ' ' + pinyin }));
}

// ---------------------------------------------------------------- nouns (reverse index of vocab.measureWords)
const byWordEntries = new Map();
for (const e of entries) { if (!byWordEntries.has(e.classifier)) byWordEntries.set(e.classifier, []); byWordEntries.get(e.classifier).push(e); }
const familySize = new Map();
function family(word) {
  if (!familySize.has(word)) familySize.set(word, vocab.filter(v => v.word !== word && v.word.includes(word)).length);
  return familySize.get(word);
}
const nounLists = new Map(entries.map(e => [e.id, []]));
const unmatchedMw = new Map();
const readingMismatch = new Map();
for (const v of vocab) {
  (v.measureWords || []).forEach((m, i) => {
    const list = byWordEntries.get(m.word) || [];
    let target = list.find(e => e._c.key === m.pinyin);
    if (!target && list.length === 1) {
      target = list[0];
      const k = m.word + ' ' + marked(m.pinyin) + ' → ' + target.id + ' (' + target.pinyin + ')';
      readingMismatch.set(k, (readingMismatch.get(k) || []).concat(v.word));
      // A second classifier reading CC-CEDICT confirms (一场雨 cháng, 一通骂 tòng) is shown as pinyinAlt.
      if (cedictClassifier(m.word, m.pinyin).senses.length) {
        target.pinyinAlt = [...new Set((target.pinyinAlt || []).concat(marked(m.pinyin)))];
      }
    }
    if (!target) { const k = m.word + ' ' + marked(m.pinyin); unmatchedMw.set(k, (unmatchedMw.get(k) || []).concat(v.word)); return; }
    nounLists.get(target.id).push({ v, primary: i === 0 });
  });
}
for (const e of entries) {
  const list = nounLists.get(e.id);
  list.sort((a, b) => (RANK[a.v.level] ?? 9) - (RANK[b.v.level] ?? 9) || (b.primary - a.primary) ||
    family(b.v.word) - family(a.v.word) || ((a.v.syllabus && a.v.syllabus.no) || 99999) - ((b.v.syllabus && b.v.syllabus.no) || 99999));
  const ids = [...new Set(list.map(x => x.v.id))];
  if (ids.length) { e.nouns = ids.slice(0, MAX_NOUNS); e.nounCount = ids.length; }
}

// Order: level, then syllabus order (vocab row no, else grammar row no ×100 to sort after), Zusatz in old order.
const orderKey = e => e._c.firstRow ? e._c.firstRow.row.no : e._c.grammar.length ? 20000 + e._c.grammar[0].no : 40000 + (e._c.old ? e._c.old.index : 0);
entries.sort((a, b) => RANK[a.level] - RANK[b.level] || orderKey(a) - orderKey(b));
// Field order of the written entries.
const FIELD_ORDER = ['id', 'classifier', 'pinyin', 'pinyinSpoken', 'pinyinAlt', 'traditional', 'level', 'levelSource', 'kind', 'kindAlso', 'form', 'borrowed',
  'category', 'meaning', 'usage', 'questionWord', 'countStyle', 'specialForms', 'examples', 'notes', 'nouns', 'nounCount', 'vocabId', 'syllabus', 'legacyIds', 'meaningStatus'];
const output = entries.map(e => Object.fromEntries(FIELD_ORDER.filter(f => e[f] !== undefined).map(f => [f, e[f]])));
const removed = {};
for (const d of oldDecisions.filter(d => d.decision === 'entfernen')) {
  const v = (vocabByWord.get(d.o.classifier) || []).find(x => vocabKey(x) === d.key);
  removed[d.o.classifier] = v ? v.id : null;
}

// ---------------------------------------------------------------- checks of the old content
const checks = { noClassifier: [], readingErrors: [], readingWarnings: [], classifierSyllable: [], tableDiffers: [], tableNumbers: [],
  umlauts: [], questionWord: [], cedictPinyin: [], syllabusPinyin: [] };
for (const o of oldList) {
  const key = numeric(o.pinyin, o.classifier);
  const cedictKeys = (cedict.get(o.classifier) || []).map(e => e.key);
  if (cedictKeys.length && !cedictKeys.includes(key)) checks.cedictPinyin.push(o.classifier + ' ' + o.pinyin + ' (CC-CEDICT: ' + [...new Set(cedictKeys)].map(marked).join(', ') + ')');
  const sylRows = syllabusRows.filter(r => r.word === o.classifier);
  const sylMw = sylRows.filter(r => /量/.test(r.pos));
  if (sylMw.length && !sylMw.some(r => numeric(r.pinyin, r.word) === key)) checks.syllabusPinyin.push(o.classifier + ' alt ' + o.pinyin + ' / Lehrplan-量: ' + sylMw.map(r => r.pinyin).join(', '));
  for (const ex of o.examples || []) {
    if (!ex.chinese.includes(o.classifier)) checks.noClassifier.push(o.classifier + ': ' + ex.chinese);
    const r = validate.checkExampleReading(ex.chinese, ex.pinyin, vctx);
    if (r.errors.length) checks.readingErrors.push(o.classifier + ': ' + ex.chinese + ' „' + ex.pinyin + '“ – ' + r.errors.join('; '));
    else if (r.warnings.length) checks.readingWarnings.push(o.classifier + ': ' + ex.chinese + ' – ' + r.warnings.join('; '));
    const parts = Pinyin.align(ex.chinese, ex.pinyin);
    if (parts) for (const p of parts) if (p.text === o.classifier && p.pinyin && numeric(p.pinyin, p.text) !== key)
      checks.classifierSyllable.push(o.classifier + ' (' + o.pinyin + ') in ' + ex.chinese + ' gelesen ' + p.pinyin);
    for (const field of ['german']) { const u = asciiUmlauts(ex[field]); if (u.length) checks.umlauts.push(o.classifier + ' example: ' + u.join(', ')); }
  }
  for (const field of ['meaning', 'usage', 'notes']) { const u = asciiUmlauts(o[field]); if (u.length) checks.umlauts.push(o.classifier + ' ' + field + ': ' + u.join(', ')); }
  for (const s of o.specialForms || []) { const u = asciiUmlauts(s.explanation); if (u.length) checks.umlauts.push(o.classifier + ' specialForms: ' + u.join(', ')); }
  if (o.questionWord && !o.questionWord.includes(o.classifier)) checks.questionWord.push(o.classifier + ': ' + o.questionWord);
  if (o.table && o.table.length) {
    const gen = countingTable(o.classifier, o.pinyin, key);
    const diffs = o.table.map((row, i) => gen[i] && (row.chinese !== gen[i].chinese || norm(row.pinyin) !== norm(gen[i].pinyin)) ? row.chinese + ' ' + row.pinyin + ' → ' + gen[i].chinese + ' ' + gen[i].pinyin : null).filter(Boolean);
    if (diffs.length) checks.tableDiffers.push(o.classifier + ' (' + diffs.length + '): ' + diffs.slice(0, 2).join('; '));
    if (o.table.some(row => typeof row.number !== 'number')) checks.tableNumbers.push(o.classifier);
  }
}
function norm(p) { return String(p || '').toLowerCase().replace(/\s+/g, ' ').trim(); }

// ---------------------------------------------------------------- report
const L = [];
const count = (list, f) => { const m = {}; list.forEach(x => { const k = f(x); m[k] = (m[k] || 0) + 1; }); return m; };
const fmt = m => Object.entries(m).map(([k, v]) => k + ' ' + v).join(', ');
L.push('# Zählwörter build report (' + (WRITE ? 'written' : 'dry run') + ', ' + new Date().toISOString().slice(0, 10) + ')', '');
L.push('Built by `node scripts/measure-words/build.cjs`' + (WRITE ? ' --write' : '') + '. Old content read from git ' + OLD_COMMIT + ' (' + oldList.length + ' classifiers).', '');
L.push('## Summary', '');
L.push('- **Entries: ' + entries.length + '** — ' + LEVELS.map(l => l + ' ' + entries.filter(e => e.level === l).length).join(', '));
L.push('- Kinds: ' + KINDS.map(k => k + ' ' + entries.filter(e => e.kind === k).length).join(', '));
const sylVocabRows = syllabusRows.filter(r => /量/.test(r.pos));
L.push('- Syllabus: ' + sylVocabRows.length + ' vocabulary rows with 量 (' + sylVocabRows.filter(r => /数量/.test(r.pos)).length + ' of them 数量); ' +
  grammarItems.length + ' items in the grammar-syllabus measure-word lists (' + grammarListRows.length + ' rows).');
L.push('- From: vocab 量 rows ' + entries.filter(e => e._c.rows.length).length + ', grammar lists only ' + entries.filter(e => !e._c.rows.length && e._c.grammar.length).length +
  ', Zusatz ' + entries.filter(e => e.level === 'Zusatz').length + ' (old classifiers ' + entries.filter(e => e.level === 'Zusatz' && e._c.old).length +
  ', classifiers only vocab.measureWords uses ' + entries.filter(e => e._c.vocabExtra).length + ').');
L.push('- Old classifiers: ' + oldList.length + ' → ' + oldMatches.length + ' matched to a syllabus entry, ' + oldDecisions.filter(d => d.decision === 'Lehrplanwort-Level').length + ' at the level of their syllabus word, ' + oldDecisions.filter(d => d.decision === 'Zusatz').length + ' Zusatz, ' +
  oldDecisions.filter(d => d.decision === 'entfernen').length + ' removed (bookmarks → vocab).');
L.push('- Content: ' + entries.filter(e => e._c.meaningSource === 'alt').length + ' with old content (author draft), ' +
  entries.filter(e => e._c.meaningSource === 'vocab').length + ' with a meaning drafted from the vocab entry, ' +
  entries.filter(e => e._c.meaningSource === 'HanDeDict').length + ' from HanDeDict, ' + entries.filter(e => e._c.meaningSource === 'keine').length + ' without meaning. All meaningStatus „draft“.');
L.push('- Nouns: ' + entries.filter(e => e.nouns).length + ' entries have nouns (' + entries.reduce((s, e) => s + (e.nounCount || 0), 0) + ' links), ' +
  entries.filter(e => !e.nouns).length + ' have none.');
L.push('- Categories: ' + fmt(count(entries, e => e.category)));
L.push('');

L.push('### Level × kind', '', '| Level | ' + KINDS.join(' | ') + ' | Σ |', '|---|' + KINDS.map(() => '---:').join('|') + '|---:|');
for (const l of LEVELS) {
  const row = entries.filter(e => e.level === l);
  L.push('| ' + l + ' | ' + KINDS.map(k => row.filter(e => e.kind === k).length).join(' | ') + ' | ' + row.length + ' |');
}
L.push('');

L.push('## Model', '');
L.push('Entry fields: `id` (`m:<classifier>`, `m:<classifier>:<numeric pinyin>` when one character has two classifier readings), `classifier`, `pinyin` (citation form as in the vocab entry; ' +
  '`pinyinSpoken` for 一下 etc.), `traditional`, `level`, `kind` (+ `kindAlso`), `category` (ASCII key), `meaning`, `usage`, `questionWord`, `table` (generated, see below), ' +
  '`specialForms`, `examples`, `notes`, `nouns` (≤' + MAX_NOUNS + ' vocab ids) + `nounCount`, `vocabId`, `syllabus` ({vocab:[{no, level, pos, measureLevel}], grammar:[{no, level, item}]}), ' +
  '`legacyIds` (old classifier key — the field the app already migrates bookmarks and deep links with), `meaningStatus`.', '');
L.push('Level = the lowest of (a) the level of the 量 use in the vocabulary syllabus (a 量 inside a bracket group counts at its later level: 回 动、（量） 1(3) → HSK3, 班 名、（量） 2(5) → HSK5) and ' +
  '(b) the level of the grammar-syllabus list that names it (班 is 专用名量词 HSK3 → HSK3).', '');
L.push("levelSource: 'vocab' (量 row), 'grammar' (grammar list earlier or only there), 'word' (old classifier that is a syllabus word in another part of speech: that word's level); Zusatz entries have none.", '');
L.push("Tables: not stored; the app generates 1–10 (section-configs.js countingRows: 一 sandhi yí/yì, 两; countStyle 'date' for 号/日 → 一号 yī, 二号; countStyle 'er' for the tael → 二两). 数量 entries (form '数量') have neither table nor question word. borrowed: grammar-list 借用名量词.", '');

L.push('### Filter buttons / select needed', '');
L.push('- Level: ' + LEVELS.join(', ') + ' (new level row, like Nihongo `counter-level`).');
L.push('- Category (existing `data-mwcat` keys, ASCII): ' + Object.keys(CATEGORY_LABELS).filter(k => entries.some(e => e.category === k)).map(k => '`' + k + '`' + (k !== CATEGORY_LABELS[k] ? ' „' + CATEGORY_LABELS[k] + '“' : '')).join(', ') + '. New: `Masseinheiten` „Maßeinheiten“.');
L.push('- Unused category keys: ' + (Object.keys(CATEGORY_LABELS).filter(k => !entries.some(e => e.category === k)).join(', ') || '–'));
L.push('- Kind (optional select or badge): ' + KINDS.join(', ') + '.', '');

L.push('## 数量 rows (numeral-classifier words)', '');
L.push('| Word | Level | pos | Decision | Reason |', '|---|---|---|---|---|');
for (const { row, d } of shuliangReport) L.push('| ' + row.word + ' ' + row.pinyin + ' | ' + LEVEL(row.level) + ' | ' + row.pos + ' | ' + (d.include ? 'aufnehmen (' + d.kind + ')' : 'Vokabeln') + ' | ' + d.why + ' |');
L.push('');

L.push('## Old → new (' + oldMatches.length + ' matched)', '');
L.push('| Old | → id | Level | Kind | Category | Note |', '|---|---|---|---|---|---|');
for (const { o, c, note } of oldMatches.sort((a, b) => a.o.classifier.localeCompare(b.o.classifier, 'zh'))) {
  const e = entries.find(x => x._c === undefined ? false : x._c.word === c.word && x._c.key === c.key);
  const recat = e.category !== o.category ? 'Kategorie ' + o.category + ' → ' + e.category : '';
  L.push('| ' + o.classifier + ' ' + o.pinyin + ' | ' + e.id + ' | ' + e.level + ' | ' + e.kind + (e.kindAlso ? ' (+' + e.kindAlso + ')' : '') + ' | ' + e.category + ' | ' + [note, recat].filter(Boolean).join('; ') + ' |');
}
L.push('');

L.push('## Old classifiers outside the syllabus measure words (' + oldDecisions.length + ')', '');
L.push("Not a 量 row and not in a grammar list. Settled: a classifier that is a syllabus word in the same reading („Lehrplanwort“, other part of speech) takes that word's level (levelSource 'word'); the rest is Zusatz; 字 and 月 are removed.", '');
L.push('| Old | Decision | Lehrplanwort | CC-CEDICT classifier sense | listed as CL: | vocab nouns | Kind | Category |', '|---|---|---|---|---:|---:|---|---|');
for (const d of oldDecisions) {
  const e = entries.find(x => x.legacyIds && x.legacyIds[0] === d.o.classifier);
  L.push('| ' + d.o.classifier + ' ' + d.o.pinyin + ' | ' + d.decision + (d.decision === 'entfernen' ? ': ' + OLD_DROPPED[d.o.classifier] + ' → ' + removed[d.o.classifier] : '') + ' | ' +
    (d.sameReading.map(r => LEVEL(r.level) + ' ' + r.pos).join('; ') || (d.rows.length ? '(andere Lesung: ' + d.rows.map(r => r.pinyin + ' ' + r.pos).join('; ') + ')' : '–')) + ' | ' +
    (d.cedictCl.senses.join(' / ').slice(0, 90) || '–') + ' | ' + d.cedictCl.listedAsCl + ' | ' + d.usedBy + ' | ' + (e ? e.kind : '') + ' | ' + (e ? e.category : '') + ' |');
}
const alt = oldDecisions.filter(d => d.decision === 'Lehrplanwort-Level');
L.push('', 'At the level of their syllabus word (' + alt.length + '): ' + alt.map(d => d.o.classifier + '→' + entries.find(e => e.legacyIds && e.legacyIds[0] === d.o.classifier).level).join(', ') + '.', '');

L.push('## Classifiers only in vocab.measureWords (' + vocabExtra.length + ')', '');
L.push('Nouns in the vocabulary list these classifiers, but neither the syllabus nor the old data has them. Proposal: Zusatz entries (content by the campaign) so every classifier chip links; added when CC-CEDICT or HanDeDict has a classifier sense.', '');
L.push('| Classifier | Added | CC-CEDICT classifier sense | HanDeDict ZEW | Lehrplanwort | Nouns |', '|---|---|---|---:|---|---:|');
for (const x of vocabExtra) {
  const e = entries.find(y => y.classifier === x.word && y._c.key === x.key);
  const rows = syllabusRows.filter(r => r.word === x.word).map(r => LEVEL(r.level) + ' ' + r.pinyin + ' ' + r.pos);
  L.push('| ' + x.word + ' ' + marked(x.key) + ' | ' + (e ? 'ja → ' + e.id + ' (' + e.kind + ', ' + e.category + ')' : 'nein') + ' | ' + (x.cl.senses.join(' / ').slice(0, 80) || '–') + ' | ' + x.de + ' | ' + (rows.join('; ') || '–') + ' | ' + (e ? e.nounCount || 0 : '') + ' |');
}
L.push('');

L.push('## New entries without old content (' + entries.filter(e => !e._c.old).length + ')', '');
L.push('| id | Level | Kind | Category | Draft meaning (source) | vocabId |', '|---|---|---|---|---|---|');
for (const e of entries.filter(e => !e._c.old)) L.push('| ' + e.id + ' ' + e.pinyin + ' | ' + e.level + ' | ' + e.kind + ' | ' + e.category + ' | ' + (e.meaning ? e.meaning.slice(0, 90) + ' (' + e._c.meaningSource + ')' : '**—**') + ' | ' + (e.vocabId || '**kein Vokabeleintrag**') + ' |');
L.push('');

L.push('## Ambiguous / noteworthy rows', '');
const later = entries.filter(e => e._c.rows.some(r => r.later));
L.push('- **量 only as a later use** (' + later.length + '): ' + later.map(e => e.classifier + ' ' + e._c.rows.map(r => LEVEL(r.row.level) + '→' + r.level + ' (' + r.row.pos + ')').join('/')).join('; ') + '.');
const lower = entries.filter(e => e._c.rows.length && e._c.grammar.length && e._c.grammar.some(g => RANK[g.level] < Math.min(...e._c.rows.map(r => RANK[r.level]))));
L.push('- **Grammar list earlier than the vocab 量 level** (grammar wins): ' + lower.map(e => e.classifier + ' vocab ' + e._c.rows.map(r => r.level).join('/') + ' / grammar ' + e._c.grammar.map(g => g.level).join('/')).join('; ') + '.');
const grammarOnly = entries.filter(e => !e._c.rows.length && e._c.grammar.length);
L.push('- **Only in a grammar list** (no 量 row): ' + grammarOnly.map(e => e.classifier + ' ' + e.pinyin + ' ' + e.level + ' (' + e._c.grammar.map(g => g.item + (g.borrowed ? ' 借用' : '')).join(', ') + ')').join('; ') + '.');
const merged = entries.filter(e => e._c.rows.length > 1);
L.push('- **Several 量 rows merged** (same reading): ' + merged.map(e => e.classifier + ' rows ' + e._c.rows.map(r => r.row.no + ' ' + r.row.pos).join(' + ')).join('; ') + '.');
L.push('- **Two classifier readings → two entries**: ' + [...wordsWithSeveralReadings].map(w => entries.filter(e => e.classifier === w).map(e => e.id + ' ' + e.pinyin + ' ' + e.level).join(' / ')).join('; ') + '.');
const rowKey = r => vocabByNo.get(r.no) ? vocabKey(vocabByNo.get(r.no)) : numeric(r.pinyin, r.word);
const otherRows = e => syllabusRows.filter(r => r.word === e.classifier && rowKey(r) !== e._c.key);
const otherReadings = entries.filter(e => otherRows(e).length && !wordsWithSeveralReadings.has(e.classifier));
L.push('- **Character with a non-classifier reading in the syllabus** (no entry for that reading): ' + otherReadings.map(e => e.classifier + ' ' + e.pinyin + ' (auch ' + [...new Set(otherRows(e).map(r => r.pinyin + ' ' + r.pos))].join(', ') + ')').join('; ') + '.');
const alts = entries.filter(e => e.pinyinAlt);
L.push('- **Second classifier reading used by vocab nouns** (CC-CEDICT confirms; written as `pinyinAlt`, no own entry): ' + alts.map(e => e.classifier + ' ' + e.pinyin + ' / ' + e.pinyinAlt.join(', ')).join('; ') + '.');
const marginal = ['等', '时', '单', '线', '派', '管', '码', '环', '重', '胎', '面', '担'];
L.push('- **Marginal classifier uses** (in the syllabus as 量, but rare or special — check the meaning drafts): ' + marginal.map(w => { const e = entries.find(x => x.classifier === w); return e ? w + ' ' + e.pinyin + ' ' + e.level : w; }).join('; ') + '.');
L.push('- **Grammar list 量词重叠** (个个、张张, HSK3) and 数量重叠 are patterns, not entries → specialForms of 个/张 (campaign).');
L.push('- **vocab levelUses bug** (side finding, not fixed here): scripts/hsk2025/relevel.cjs `splitPos` splits on 、 inside brackets, so rows like 对 形、介、（动、量）, 点² 动、（名、量）, 等², 管, 组, 面 lose the second part of the bracket in `levelUses` (the 量/名 use is missing).', '');

L.push('## Reverse index (nouns per classifier)', '');
const withNouns = entries.filter(e => e.nouns).sort((a, b) => b.nounCount - a.nounCount);
L.push('- Top: ' + withNouns.slice(0, 25).map(e => e.classifier + ' ' + e.nounCount).join(', ') + '.');
L.push('- Capped at ' + MAX_NOUNS + ': ' + withNouns.filter(e => e.nounCount > MAX_NOUNS).map(e => e.classifier).join(' ') + '.');
L.push('- Order: level, then nouns that list the classifier first, then a frequency proxy (number of vocab words containing the noun — there is no word-frequency list in the sources), then syllabus order.');
L.push('- Examples: ' + ['个', '本', '条', '张', '把'].map(w => { const e = entries.find(x => x.id === 'm:' + w); return w + ': ' + (e && e.nouns ? e.nouns.slice(0, 8).map(id => id.split(':')[1]).join('、') : '–'); }).join(' | '));
for (const l of LEVELS) {
  const none = entries.filter(e => e.level === l && !e.nouns);
  L.push('- Without nouns, ' + l + ' (' + none.length + '): ' + (none.map(e => e.classifier + (e.kind !== 'Zählwort' ? '·' + e.kind[0] : '')).join(' ') || '–'));
}
L.push('  (·M Maßeinheit, ·Z Zeit, ·V Verbal, ·U Unbestimmt — these need no noun list; plain Zählwörter without nouns need noun links in the campaign or measureWords on vocab nouns.)');
L.push('- vocab.measureWords classifiers without an entry (' + unmatchedMw.size + '): ' + [...unmatchedMw].sort((a, b) => b[1].length - a[1].length).map(([k, w]) => k + ' ×' + w.length + ' (' + w.slice(0, 4).join('、') + ')').join('; ') + '.');
L.push('- Linked although the reading differs (' + readingMismatch.size + '): ' + [...readingMismatch].map(([k, w]) => k + ' ×' + w.length + ' (' + w.slice(0, 5).join('、') + ')').join('; ') + '.', '');

L.push('## Pinyin: old data vs syllabus / CC-CEDICT', '');
L.push('- Old classifier pinyin ≠ syllabus 量 reading (' + checks.syllabusPinyin.length + '): ' + (checks.syllabusPinyin.join('; ') || '–'));
L.push('- Old classifier pinyin not in CC-CEDICT (' + checks.cedictPinyin.length + '): ' + (checks.cedictPinyin.join('; ') || '–'));
L.push('- Classifier syllable read differently inside its own examples (' + checks.classifierSyllable.length + '): ' + (checks.classifierSyllable.join('; ') || '–'), '');

L.push('## Old content check', '');
L.push('- Examples that do not contain the classifier (' + checks.noClassifier.length + '):');
checks.noClassifier.forEach(x => L.push('  - ' + x));
L.push('- Example pinyin errors against CC-CEDICT (validator of the enrichment campaign; ' + checks.readingErrors.length + '):');
checks.readingErrors.forEach(x => L.push('  - ' + x));
L.push('- Example pinyin warnings (' + checks.readingWarnings.length + '):');
checks.readingWarnings.forEach(x => L.push('  - ' + x));
const tableRows = checks.tableDiffers.map(x => Number(x.match(/\((\d+)\)/)[1]));
L.push('- Old tables differing from the generated table: ' + checks.tableDiffers.length + ' of ' + oldList.filter(o => o.table && o.table.length).length +
  ' (' + tableRows.reduce((s, n) => s + n, 0) + ' rows; ' + checks.tableNumbers.length + ' tables — all from measure-words-extra*.js — label the numbers as strings „一“, „二/两“ and write 一 without sandhi, e.g. ' +
  checks.tableDiffers.slice(0, 3).map(x => x.replace(/^\S+ \(\d+\): /, '')).join('; ') + '). Affected: ' + checks.tableDiffers.map(x => x.split(' ')[0]).join(' ') + '.');
const otherTableDiffs = checks.tableDiffers.filter(x => !/^\S+ \(1\): 一\S* yī /.test(x));
L.push('- Table differences other than the 一 row: ' + (otherTableDiffs.join('; ') || '–'));
L.push('- questionWord without the classifier (' + checks.questionWord.length + '): ' + (checks.questionWord.join('; ') || '–'));
L.push('- ASCII umlauts (' + checks.umlauts.length + '): ' + (checks.umlauts.join('; ') || '–'));
L.push('- Old entries without examples: ' + (oldList.filter(o => !(o.examples || []).length).map(o => o.classifier).join(' ') || '–') + '.', '');

L.push('## Bookmarks', '');
L.push('Today measure-word bookmarks live in `zhongwen-bookmarks-measurewords` as the bare classifier (`["个"]`; zhongwen-migrate.js moved the unprefixed `bookmarks-measurewords` once). ' +
  'Section, workspace and deep links (`#measurewords/个`) use `item.classifier` as id.', '');
L.push('Done: ids are `m:…`; every entry that took over an old classifier carries `legacyIds: [old classifier]`, so the existing `migrateLegacyBookmarks(\'measurewords\', items)` (app.js) rewrites saved bookmarks on load and `findById` keeps old deep links and restored sessions working. ' +
  'The removed classifiers (' + Object.entries(removed).map(([k, v]) => k + ' → ' + v).join(', ') + ') go in `MEASURE_WORDS_DATA.removed` and move to `zhongwen-bookmarks-vocab`, like grammar-removed.js. ' +
  'The old 卷 (juàn) bookmark maps to ' + (entries.find(e => e.legacyIds && e.legacyIds[0] === '卷') || {}).id + '.', '');

L.push('## What --write changes', '');
L.push('- `measure-words-data.js`: `window.MEASURE_WORDS_DATA = { basicNumbers (unchanged), measureWords (' + entries.length + ' entries), removed }`.');
L.push('- deletes `measure-words-extra.js`, `measure-words-extra2.js`; `lang-profile.js` dataScripts.measurewords → `[\'measure-words-data.js\']`.');
L.push('');
L.push('## Decisions (settled 2026-10-11)', '');
[
  'Old classifiers that are syllabus words in another part of speech take that word\'s level (levelSource \'word\').',
  '数量 split as proposed: 一下 Verbal; 一点儿 一些 一会儿 半天 Unbestimmt; the rest stays in Vokabeln.',
  '字 and 月 are removed; their bookmarks move to the vocab entries (MEASURE_WORDS_DATA.removed).',
  'The classifiers only vocab nouns use are Zusatz entries (曲 stays out).',
  '场 cháng and 通 tòng are pinyinAlt of one entry.',
  'Recategorisations and the key Masseinheiten „Maßeinheiten“ accepted.',
  'Borrowed classifiers 脸 屋子 桌子 手 are entries (Zählwort, borrowed, note: 借用名量词 of the HSK4 grammar list).',
  'Counting tables are generated by the app, not stored.',
  'relevel.cjs splitPos fixed; levelUses of the affected vocab entries corrected (scripts/hsk2025/fix-level-uses.cjs).'
].forEach(x => L.push('- ' + x));
L.push('');
fs.writeFileSync(REPORT, L.join('\n') + '\n');
console.log('measure words ' + entries.length + ' (' + LEVELS.map(l => l + ' ' + entries.filter(e => e.level === l).length).join(', ') + '); report ' + path.relative(ROOT, REPORT) + (WRITE ? '' : ' (dry run)'));

// Sanity checks before writing.
const ids = output.map(e => e.id);
const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dup.length) throw new Error('duplicate ids ' + dup.join(' '));
for (const e of output) {
  if (!KINDS.includes(e.kind)) throw new Error('bad kind ' + e.id + ' ' + e.kind);
  if (!CATEGORY_LABELS[e.category]) throw new Error('no category for ' + e.id + ' ' + e.category);
}

// One field per line; arrays of objects (table, examples, specialForms) one element per line.
function formatEntry(e) {
  const value = v => Array.isArray(v) && v.length && typeof v[0] === 'object'
    ? '[\n' + v.map(x => '        ' + JSON.stringify(x)).join(',\n') + '\n      ]' : JSON.stringify(v);
  return '    {\n' + Object.entries(e).map(([k, v]) => '      ' + JSON.stringify(k) + ': ' + value(v)).join(',\n') + '\n    }';
}
// The data file --write writes; the dry run writes the same text to the cache and loads it back.
const header = '// Zhongwen Explorer – Zählwörter (量词) & Grundzahlen\n// Built by scripts/measure-words/build.cjs from the HSK 2025 syllabus (vocabulary 量 rows + grammar measure-word lists);\n' +
  '// content by the Zählwörter campaign. removed: old classifier keys that are vocabulary only → vocab id (bookmarks move).\n';
const dataText = header + 'window.MEASURE_WORDS_DATA = {\n' +
  '  "basicNumbers": [\n' + oldData.basicNumbers.map(n => '    ' + JSON.stringify(n)).join(',\n') + '\n  ],\n' +
  '  "measureWords": [\n' + output.map(formatEntry).join(',\n') + '\n  ],\n' +
  '  "removed": ' + JSON.stringify(removed) + '\n};\n';
const PREVIEW = path.join(ROOT, '.content-cache', 'measure-words', 'measure-words-data.js');
fs.mkdirSync(path.dirname(PREVIEW), { recursive: true });
fs.writeFileSync(PREVIEW, dataText);
const check = {};
check.window = check;
vm.runInNewContext(dataText, check, { filename: PREVIEW });
if (JSON.stringify(check.MEASURE_WORDS_DATA.measureWords) !== JSON.stringify(output)) throw new Error('data file does not round-trip');
const withoutTables = output.map(e => { const c = { ...e }; delete c.table; return formatEntry(c); }).join(',\n');
console.log('measure-words-data.js ' + Math.round(Buffer.byteLength(dataText) / 1024) + ' KB (' + Math.round(Buffer.byteLength(withoutTables) / 1024) +
  ' KB without tables; old files 194 KB); preview ' + path.relative(ROOT, PREVIEW));

if (WRITE) {
  fs.writeFileSync(path.join(ROOT, 'measure-words-data.js'), dataText);
  for (const f of ['measure-words-extra.js', 'measure-words-extra2.js']) if (fs.existsSync(path.join(ROOT, f))) fs.unlinkSync(path.join(ROOT, f));
  const profileFile = path.join(ROOT, 'lang-profile.js');
  const profile = fs.readFileSync(profileFile, 'utf8');
  const next = profile.replace(/measurewords: \[[^\]]*\]/, "measurewords: ['measure-words-data.js']");
  if (next !== profile) fs.writeFileSync(profileFile, next);
}
