// Lautmalerei campaign (batches o001 …): the section description for scripts/enrich/section-campaign.cjs — loading
// and writing onomatopoeia-data.js (same layout as scripts/onomatopoeia/build.cjs), the input card, the checks of the
// authored fields and how they are written back. Authored: meaning, usage, explanation, examples, related, notes.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const campaign = require('../enrich/section-campaign.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA_FILE = path.join(ROOT, 'onomatopoeia-data.js');
const FIELDS = ['meaning', 'usage', 'explanation', 'examples', 'related', 'notes'];
const HASH_FIELDS = FIELDS;
// Real ue/ae spellings the umlaut rule cannot tell apart (as in audit-onomatopoeia.cjs).
const UMLAUT_KEEP = ['Doraemon', 'wohltuende'];

// ------------------------------------------------------------------------------------------------ data file
function loadData() {
  const context = {};
  context.window = context;
  vm.runInNewContext(fs.readFileSync(DATA_FILE, 'utf8'), context, { filename: DATA_FILE });
  return { items: context.ONOMATOPOEIA_DATA, removed: context.ONOMATOPOEIA_REMOVED || {} };
}
const load = () => loadData().items;
function formatData(items, removed, header) {
  return header + 'window.ONOMATOPOEIA_DATA = ' + JSON.stringify(items, null, 2) + ';\n\n'
    + 'window.ONOMATOPOEIA_REMOVED = ' + JSON.stringify(removed, null, 1) + ';\n';
}
function write(entries) {
  const text = fs.readFileSync(DATA_FILE, 'utf8');
  const header = (text.match(/^((?:\/\/[^\n]*\n)*)/) || ['', ''])[1];
  fs.writeFileSync(DATA_FILE, formatData(entries, loadData().removed, header));
}

// ------------------------------------------------------------------------------------------------ input card
const FRAMES = {
  Laut: 'X一声 + Verb (砰的一声，门关上了), X地 + Verb (哗哗地流), 发出X的声音, mit 叫/响/声: 狗汪汪地叫; AA/AABB stets als Ganzes',
  Ausruf: 'am Satzanfang, mit Komma abgetrennt (哎呀，我忘了！), oft mit 啊/呀; Ton im Pinyin wie in der Situation gesprochen',
  ABB: 'Prädikat mit 的 (他的脸红扑扑的), Attribut X的 + Nomen (热腾腾的饺子), Komplement nach 得 (晒得黑黝黝的)',
  AABB: 'adverbial X地 + Verb (高高兴兴地回家了), Prädikat/Komplement mit 的 (房间干干净净的, 洗得干干净净的), Attribut X的 + Nomen',
  other: 'Prädikat oder Komplement mit 的 (糊里糊涂的), adverbial X地 + Verb, Attribut X的 + Nomen'
};
function frameOf(e) {
  if (e.kind === 'Laut') return FRAMES.Laut;
  if (e.kind === 'Ausruf') return FRAMES.Ausruf;
  return FRAMES[e.pattern] || FRAMES.other;
}

function cardHelpers(entries) {
  return { entries, byId: new Map(entries.map(e => [e.id, e])) };
}

// Other entries the author may link: the draft links, the same base word, shared characters, same category and pattern.
function relatedCandidates(e, entries) {
  const chars = new Set(Array.from(e.word));
  const scored = [];
  for (const o of entries) {
    if (o.id === e.id) continue;
    let score = 0;
    if ((e.related || []).includes(o.id)) score += 5;
    if (e.base && o.base && e.base.vocabId === o.base.vocabId) score += 4;
    if (Array.from(o.word).some(ch => chars.has(ch))) score += 3;
    if (o.category === e.category && o.kind === e.kind) score += 1;
    if (o.category === e.category && o.pattern === e.pattern) score += 1;
    if (score >= 2) scored.push({ score, o });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, 12)
    .map(({ o }) => o.id + ' — ' + o.meaning + ' (' + o.kind + ', ' + o.category + ', ' + o.pattern + ', ' + o.level + ')');
}

function card(e, helpers) {
  const { vocabById, cedict } = campaign.context();
  const handedict = campaign.loadHandedict();
  const describe = id => { const v = vocabById.get(id); return v ? v.word + ' ' + v.pinyin + ' (' + v.level + ', ' + v.type + ') – ' + v.meaning : id; };
  const out = {
    id: e.id,
    word: e.word,
    pinyin: e.pinyin,
    traditional: e.traditional,
    variants: e.variants && e.variants.length ? e.variants : undefined,
    level: e.level,
    levelSource: e.levelSource,
    kind: e.kind,
    category: e.category,
    pattern: e.pattern,
    frame: frameOf(e),
    base: e.base ? describe(e.base.vocabId) : undefined,
    vocabEntry: e.vocabId ? describe(e.vocabId) : undefined,
    grammarPoint: e.grammarId,
    candidate: e.candidate,
    evidence: {
      cedict: (cedict.get(e.word) || []).map(x => '[' + x.pinyin + '] ' + x.senses.join('; ')),
      handedict: (handedict.get(e.word) || []).map(x => '[' + x.pinyin + '] ' + x.senses.join('; ')).slice(0, 4),
      syllabus: e.evidence && e.evidence.syllabus ? 'HSK ' + e.evidence.syllabus.level + ' (' + e.evidence.syllabus.pos + ')' : undefined
    },
    draft: { meaning: e.meaning || null, usage: e.usage || null, explanation: e.explanation || null, examples: e.examples || [],
      related: e.related || [], notes: e.notes || null },
    relatedCandidates: relatedCandidates(e, helpers.entries)
  };
  for (const k of Object.keys(out)) if (out[k] === undefined) delete out[k];
  if (out.evidence.syllabus === undefined) delete out.evidence.syllabus;
  return out;
}

// ------------------------------------------------------------------------------------------------ checks
let ids = null;
const knownIds = () => ids || (ids = new Set(load().map(e => e.id)));

// Accepted readings of the word in examples: the entry's pinyin (validated by the audit) and, for AABB, the base word's
// tones on the doubled syllables (the audit's productive tolerance; neutral tones are tolerated by the reading check).
function extraReadings(c) {
  const keys = [campaign.numericKey(c.pinyin, c.word)].filter(Boolean);
  const { vocabById } = campaign.context();
  const chars = Array.from(c.word);
  if (c.pattern === 'AABB') {
    const baseWord = chars[0] + chars[2];
    const { cedict } = campaign.context();
    const baseKeys = (cedict.get(baseWord) || []).map(x => x.key);
    for (const v of vocabById.values()) if (v.word === baseWord) baseKeys.push(campaign.numericKey(v.pinyin, baseWord));
    for (const k of baseKeys) {
      const s = campaign.syllableKeys(k);
      if (s.length === 2) keys.push(s[0] + s[0] + s[1] + s[1]);
    }
  }
  const map = new Map([[c.word, keys]]);
  (c.variants || []).forEach(v => map.set(v, keys));
  return map;
}

function check(c, a, api) {
  const { errors, warnings } = api;
  if (a.id !== c.id) errors.push('id must be ' + c.id);
  const own = [c.word, ...(c.variants || [])];
  api.germanField(a.meaning, 'meaning', { min: 2, max: 80, noHan: true }, errors, warnings);
  if (api.germanField(a.usage, 'usage', { min: 20, max: 320 }, errors, warnings)) api.checkTextPinyin('usage', a.usage, errors, warnings, own);
  if (api.germanField(a.explanation, 'explanation', { min: 80, max: 900 }, errors, warnings)) {
    api.checkTextPinyin('explanation', a.explanation, errors, warnings, own);
    const baseWord = c.base ? c.base.split(' ')[0] : null;
    if (baseWord && !a.explanation.includes(baseWord)) warnings.push('explanation: name the base word ' + baseWord + ' and what the pattern adds');
  }
  if (a.notes !== undefined && a.notes !== null && a.notes !== '') {
    if (api.germanField(a.notes, 'notes', { min: 20, max: 600 }, errors, warnings)) api.checkTextPinyin('notes', a.notes, errors, warnings, own);
  }
  const allowed = api.ALLOWED[c.level];
  const baseWord = c.base ? c.base.split(' ')[0] : null;
  api.checkExamples(a.examples, { forms: own, headword: c.word, allowed, ownWords: [...own, baseWord].filter(Boolean),
    extraReadings: extraReadings(c), draftExamples: c.draft.examples, umlautKeep: UMLAUT_KEEP,
    wholeNote: Array.from(c.word).length > 1 ? ' (the whole form ' + c.word + ', not split)' : '' }, errors, warnings);
  if (a.related !== undefined && a.related !== null) {
    if (!Array.isArray(a.related)) errors.push('related must be a list of o: ids');
    else {
      if (new Set(a.related).size !== a.related.length) errors.push('related: duplicate ids');
      a.related.forEach(id => {
        if (id === c.id) errors.push('related: the entry itself');
        else if (!knownIds().has(id)) errors.push('related: unknown id ' + id + ' (existing o: ids only, see relatedCandidates)');
      });
      if (a.related.length > 6) warnings.push('related: more than 6 links');
    }
  }
  api.checkGerman([a.meaning, a.usage, a.explanation, a.notes], errors, warnings, UMLAUT_KEEP);
}

function applyFields(entry, a) {
  entry.meaning = a.meaning.trim();
  entry.usage = a.usage.trim();
  entry.explanation = a.explanation.trim();
  entry.examples = a.examples.map(ex => ({ chinese: ex.chinese.trim(), pinyin: ex.pinyin.trim(), german: ex.german.trim() }));
  entry.related = Array.isArray(a.related) ? a.related.slice() : [];
  entry.notes = typeof a.notes === 'string' ? a.notes.trim() : '';
}

module.exports = {
  name: 'onomatopoeia', title: 'Lautmalerei', unit: 'Einträge', prefix: 'o', dir: __dirname, audit: 'audit-onomatopoeia.cjs',
  FIELDS, HASH_FIELDS, UMLAUT_KEEP, load, write, loadData, formatData, cardHelpers, card, check, applyFields
};
