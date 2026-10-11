// Zählwörter campaign (batches m001 …): the section description for scripts/enrich/section-campaign.cjs — loading and
// writing measure-words-data.js (same layout as scripts/measure-words/build.cjs), the input card, the checks of the
// authored fields and how they are written back. Authored: meaning, usage, notes, examples, questionWord, specialForms.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const campaign = require('../enrich/section-campaign.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA_FILE = path.join(ROOT, 'measure-words-data.js');
const FIELDS = ['meaning', 'usage', 'notes', 'examples', 'questionWord', 'specialForms'];
const HASH_FIELDS = FIELDS;
// Field order of the written entries (as in build.cjs).
const FIELD_ORDER = ['id', 'classifier', 'pinyin', 'pinyinSpoken', 'pinyinAlt', 'traditional', 'level', 'levelSource', 'kind', 'kindAlso', 'form', 'borrowed',
  'category', 'meaning', 'usage', 'questionWord', 'countStyle', 'specialForms', 'examples', 'notes', 'nouns', 'nounCount', 'vocabId', 'syllabus', 'legacyIds', 'meaningStatus'];

// ------------------------------------------------------------------------------------------------ data file
function loadData() {
  const context = {};
  context.window = context;
  vm.runInNewContext(fs.readFileSync(DATA_FILE, 'utf8'), context, { filename: DATA_FILE });
  return context.MEASURE_WORDS_DATA;
}
const load = () => loadData().measureWords;

// One field per line; arrays of objects (examples, specialForms) one element per line (build.cjs formatEntry).
function formatEntry(e) {
  const value = v => Array.isArray(v) && v.length && typeof v[0] === 'object'
    ? '[\n' + v.map(x => '        ' + JSON.stringify(x)).join(',\n') + '\n      ]' : JSON.stringify(v);
  return '    {\n' + Object.entries(e).map(([k, v]) => '      ' + JSON.stringify(k) + ': ' + value(v)).join(',\n') + '\n    }';
}
function formatData(data, header) {
  const ordered = data.measureWords.map(e => {
    const out = {};
    for (const f of FIELD_ORDER) if (e[f] !== undefined) out[f] = e[f];
    for (const f of Object.keys(e)) if (!(f in out)) out[f] = e[f];
    return out;
  });
  return header + 'window.MEASURE_WORDS_DATA = {\n' +
    '  "basicNumbers": [\n' + data.basicNumbers.map(n => '    ' + JSON.stringify(n)).join(',\n') + '\n  ],\n' +
    '  "measureWords": [\n' + ordered.map(formatEntry).join(',\n') + '\n  ],\n' +
    '  "removed": ' + JSON.stringify(data.removed) + '\n};\n';
}
function write(entries) {
  const text = fs.readFileSync(DATA_FILE, 'utf8');
  const header = (text.match(/^((?:\/\/[^\n]*\n)*)/) || ['', ''])[1];
  const data = loadData();
  data.measureWords = entries;
  fs.writeFileSync(DATA_FILE, formatData(data, header));
}

// ------------------------------------------------------------------------------------------------ input card
const vocabWord = id => (/^w:([^:]+):/.exec(id || '') || [])[1] || null;
const FRAMES = {
  'Zählwort': 'Zahl/Demonstrativ + Zählwort + Nomen: 三本书, 这本词典, 两张桌子; Frage 几本 / 多少本',
  'Maßeinheit': 'Zahl + Einheit (+ Nomen): 三公斤苹果, 两米, 一百块钱; Frage meist 多少公斤 / 几公斤',
  'Zeit': 'Zahl + Zeitwort als Zeitpunkt (三点, 五号) oder Dauer (三天, 两个小时, 学了三年)',
  'Verbal': 'Verb (+了/过) + Zahl + Verbalzählwort (+ Objekt): 去过两次, 说了一遍, 敲了三下; V + 一下 „mal kurz“',
  'Unbestimmt': 'unbestimmte Menge an der Stelle von Zahl + Zählwort: 一些书, 这些人; 一点儿水 / Adjektiv + 一点儿; Verb + 一会儿'
};

function cardHelpers() {
  const { vocab } = campaign.context();
  // Near classifiers: other classifiers listed on the same nouns (contrast candidates for the notes).
  const shared = new Map();
  for (const v of vocab) {
    const list = [...new Set((v.measureWords || []).map(m => m.word))];
    for (const a of list) for (const b of list) {
      if (a === b) continue;
      if (!shared.has(a)) shared.set(a, new Map());
      shared.get(a).set(b, (shared.get(a).get(b) || 0) + 1);
    }
  }
  return { shared };
}

function card(e, helpers) {
  const { vocabById, cedict } = campaign.context();
  const handedict = campaign.loadHandedict();
  const key = campaign.numericKey(e.pinyin, e.classifier);
  const syllabusLevels = require('../enrich/common.cjs').syllabusLevels();
  const limit = campaign.ALLOWED[e.level];
  const nouns = (e.nouns || []).map(id => {
    const v = vocabById.get(id);
    return v ? v.word + ' ' + v.pinyin + ' (' + v.level + ') – ' + v.meaning : id;
  });
  const own = e.vocabId && vocabById.get(e.vocabId);
  const near = [...((helpers.shared.get(e.classifier) || new Map()).entries())].sort((a, b) => b[1] - a[1]).slice(0, 6)
    .map(([w, n]) => w + ' (' + n + ' gemeinsame Nomen)');
  // Classifier senses first (CC-CEDICT „classifier for …“, HanDeDict „ZEW“).
  const first = re => (a, b) => (re.test(b) ? 1 : 0) - (re.test(a) ? 1 : 0);
  const cedictSenses = (cedict.get(e.classifier) || []).filter(x => !key || x.key === key || e.form === '数量').flatMap(x => x.senses)
    .sort(first(/classifier|measure|unit of/i)).slice(0, 12);
  const deSenses = (handedict.get(e.classifier) || []).filter(x => !key || x.key === key).flatMap(x => x.senses)
    .sort(first(/\bZEW\b|Zähl|Einheit/)).slice(0, 8);
  const syl = e.syllabus || {};
  const out = {
    id: e.id,
    classifier: e.classifier,
    pinyin: e.pinyin,
    pinyinSpoken: e.pinyinSpoken,
    pinyinAlt: e.pinyinAlt,
    traditional: e.traditional,
    level: e.level,
    kind: e.kind,
    kindAlso: e.kindAlso,
    form: e.form,
    borrowed: e.borrowed,
    category: e.category,
    countStyle: e.countStyle,
    frame: FRAMES[e.kind] + (e.kindAlso ? ' · auch ' + e.kindAlso + ': ' + FRAMES[e.kindAlso] : ''),
    vocabEntry: own ? own.word + ' ' + own.pinyin + ' (' + own.level + ', ' + own.type + ') – ' + own.meaning : null,
    syllabus: [...(syl.vocab || []).map(v => 'Wortliste ' + (v.measureLevel || v.level) + ' (' + v.pos + ')'),
      ...(syl.grammar || []).map(g => 'Grammatikliste ' + g.level + ': ' + g.item)],
    nouns,
    nounCount: e.nounCount || 0,
    nounsForExamples: limit ? (e.nouns || []).filter(id => { const w = vocabWord(id); return syllabusLevels.has(w) && syllabusLevels.get(w) <= limit; })
      .map(id => vocabWord(id)) : undefined,
    nearClassifiers: near,
    evidence: { cedict: cedictSenses, handedict: deSenses },
    draft: { meaning: e.meaning || null, usage: e.usage || null, questionWord: e.questionWord || null, specialForms: e.specialForms || null,
      examples: e.examples || [], notes: e.notes || null }
  };
  for (const k of Object.keys(out)) if (out[k] === undefined) delete out[k];
  return out;
}

// ------------------------------------------------------------------------------------------------ checks
const NUMERALS = '零〇一二两三四五六七八九十百千万亿几半';
const BEFORE = ['这', '那', '哪', '每', '各', '某', '该', '此', '本', '上', '下', '头', '前', '整', '多', '来', '好几', '多少', '第'];
// The classifier stands in a counting frame: after a numeral, demonstrative or question word, doubled (个个, 天天),
// or (time words) after 个 (两个小时). 数量 words (一下, 一些) contain their number.
function framed(chinese, c) {
  if (c.form === '数量') return true;
  const cl = c.classifier;
  for (let i = chinese.indexOf(cl); i !== -1; i = chinese.indexOf(cl, i + 1)) {
    const before = chinese.slice(0, i);
    const last = Array.from(before).pop() || '';
    if (NUMERALS.includes(last) || BEFORE.some(b => before.endsWith(b))) return true;
    if (before.endsWith(cl) || chinese.slice(i + cl.length).startsWith(cl)) return true;
    if (c.kind === 'Zeit' && last === '个') return true;
    if (c.classifier === '些' && '有好'.includes(last)) return true; // 有些, 好些
  }
  return false;
}

// The syllables written for the classifier match the entry (pinyin, pinyinAlt, pinyinSpoken; neutral tone and 一 tone
// tolerated).
function classifierReadings(chinese, pinyin, c) {
  const { Pinyin } = campaign.context();
  const parts = Pinyin.align(chinese, pinyin);
  if (!parts) return [];
  const han = parts.filter(p => p.pinyin !== undefined);
  const chars = Array.from(c.classifier);
  const accepted = [c.pinyin, c.pinyinSpoken, ...(c.pinyinAlt || [])].filter(Boolean).map(p => campaign.syllableKeys(campaign.numericKey(p, c.classifier)));
  const issues = [];
  for (let i = 0; i + chars.length <= han.length; i++) {
    if (!chars.every((ch, j) => han[i + j].text === ch)) continue;
    const written = chars.map((ch, j) => campaign.numericKey(han[i + j].pinyin, ch));
    const fits = accepted.some(acc => acc.length === written.length && acc.every((s, j) => {
      const w = written[j];
      if (w === s) return true;
      if (w.slice(0, -1) !== s.slice(0, -1)) return false;
      return w.endsWith('5') || s.endsWith('5') || w.slice(0, -1) === 'yi';
    }));
    if (!fits) issues.push(c.classifier + ' written ' + chars.map((ch, j) => han[i + j].pinyin).join(' ') + ', entry: ' + [c.pinyin, ...(c.pinyinAlt || [])].join(' / '));
  }
  return issues;
}

function check(c, a, api) {
  const { errors, warnings } = api;
  if (a.id !== c.id) errors.push('id must be ' + c.id);
  api.germanField(a.meaning, 'meaning', { min: 2, max: 80, noHan: true }, errors, warnings);
  if (api.germanField(a.usage, 'usage', { min: 30, max: 320 }, errors, warnings)) {
    if ((a.usage.match(/[.!?](\s|$)/g) || []).length > 2) warnings.push('usage: 1–2 sentences (what it counts)');
    api.checkTextPinyin('usage', a.usage, errors, warnings, [c.classifier]);
  }
  if (api.germanField(a.notes, 'notes', { min: 80, max: 900 }, errors, warnings)) api.checkTextPinyin('notes', a.notes, errors, warnings, [c.classifier]);
  // Question word (几本, 多少公斤, 哪些); 数量 words (一下, 一些) have none.
  if (c.form === '数量') {
    if (a.questionWord !== undefined && a.questionWord !== null) errors.push('questionWord: none for 数量 words (' + c.classifier + ' contains its number)');
  } else if (typeof a.questionWord !== 'string' || !/^(几|多少|哪)/.test(a.questionWord) || !a.questionWord.includes(c.classifier) || /[^\p{Script=Han}]/u.test(a.questionWord)) {
    errors.push('questionWord: Chinese question form with ' + c.classifier + ' required: 几' + c.classifier + ', 多少' + c.classifier + ' (or 哪' + c.classifier + ')');
  }
  // Special forms: only real ones ({form, explanation}).
  if (a.specialForms !== undefined && a.specialForms !== null) {
    if (!Array.isArray(a.specialForms) || a.specialForms.length > 4) errors.push('specialForms: array of at most 4 {form, explanation} (omit when there is none)');
    else a.specialForms.forEach((s, i) => {
      const label = 'specialForms[' + i + ']';
      if (!s || typeof s.form !== 'string' || !/^[\p{Script=Han}…、／/ ]+$/u.test(s.form)) errors.push(label + '.form: Chinese form required');
      else if (!Array.from(c.classifier).some(ch => s.form.includes(ch))) errors.push(label + '.form must contain ' + c.classifier);
      if (s && api.germanField(s.explanation, label + '.explanation', { min: 10, max: 300 }, errors, warnings)) api.checkTextPinyin(label, s.explanation, errors, warnings, [c.classifier]);
      const extra = s ? Object.keys(s).filter(k => !['form', 'explanation'].includes(k)) : [];
      if (extra.length) errors.push(label + ': unknown fields ' + extra.join(', '));
    });
  }
  // Examples: the classifier in a counting frame, at least one with a noun of its list, the classifier's reading.
  const nounWords = (c.nouns || []).map(n => n.split(' ')[0]);
  const allowed = api.ALLOWED[c.level];
  const exempt = allowed && nounWords.length && !(c.nounsForExamples || []).length ? nounWords : [];
  const forms = [c.classifier];
  if (/儿$/.test(c.classifier)) forms.push(c.classifier.slice(0, -1)); // 一点儿 / 一点
  const extraReadings = new Map([[c.classifier, [c.pinyin, c.pinyinSpoken, ...(c.pinyinAlt || [])].filter(Boolean).map(p => campaign.numericKey(p, c.classifier))]]);
  api.checkExamples(a.examples, { forms, headword: c.classifier, allowed, ownWords: [c.classifier, ...exempt], extraReadings,
    draftExamples: c.draft.examples, phrases: true }, errors, warnings);
  if (Array.isArray(a.examples)) {
    a.examples.forEach((ex, i) => {
      if (!ex || typeof ex.chinese !== 'string' || typeof ex.pinyin !== 'string') return;
      if (ex.chinese.includes(c.classifier) && !framed(ex.chinese, c)) {
        errors.push('example ' + (i + 1) + ': ' + c.classifier + ' must stand in a counting frame – ' + (c.kind === 'Verbal' ? 'Verb + Zahl + ' + c.classifier + ' (去过两次)' : 'Zahl/Demonstrativ/几 + ' + c.classifier + (c.kind === 'Zählwort' ? ' + Nomen' : '')));
      }
      classifierReadings(ex.chinese, ex.pinyin, c).forEach(s => errors.push('example ' + (i + 1) + ' pinyin: ' + s));
    });
    if (nounWords.length && !a.examples.some(ex => ex && typeof ex.chinese === 'string' && nounWords.some(w => ex.chinese.includes(w)))) {
      errors.push('examples: at least one with a typical noun of the list (' + ((c.nounsForExamples || []).length ? c.nounsForExamples : nounWords).slice(0, 8).join(', ') + ' …)');
    }
  }
  api.checkGerman([a.meaning, a.usage, a.notes, ...((Array.isArray(a.specialForms) ? a.specialForms : []).map(s => s && s.explanation))], errors, warnings);
}

function applyFields(entry, a) {
  entry.meaning = a.meaning.trim();
  entry.usage = a.usage.trim();
  entry.notes = a.notes.trim();
  entry.examples = a.examples.map(ex => ({ chinese: ex.chinese.trim(), pinyin: ex.pinyin.trim(), german: ex.german.trim() }));
  if (typeof a.questionWord === 'string') entry.questionWord = a.questionWord; else delete entry.questionWord;
  if (Array.isArray(a.specialForms) && a.specialForms.length) entry.specialForms = a.specialForms.map(s => ({ form: s.form.trim(), explanation: s.explanation.trim() }));
  else delete entry.specialForms;
}

module.exports = {
  name: 'measure-words', title: 'Zählwörter', unit: 'Zählwörter', prefix: 'm', dir: __dirname, audit: 'audit-measure-words.cjs',
  FIELDS, HASH_FIELDS, load, write, loadData, formatData, cardHelpers, card, check, applyFields, framed
};
