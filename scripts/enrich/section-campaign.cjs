// Shared engine of the section campaigns (Phase 8: Zählwörter m001…, Lautmalerei o001…). Each section describes
// itself in scripts/<section>/section.cjs (data loading/writing, the input card, its own checks, the authored fields);
// this module does the rest the same way for both: batches and packets in .content-cache/enrich/<batch>/ (shared
// open-batches.json), the validator harness with the common example and German checks, apply with ledger hashes and
// flags.md, the status table and the ledger check the section audits run.
//
// Review policy (as in the other campaigns): HSK 1–4 author + independent reviewer (meaningStatus 'reviewed'),
// HSK 5+ and Zusatz author + proofreading pass (meaningStatus 'authored'). A batch never mixes policies.
'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const enrich = require('./common.cjs');
const { asciiUmlauts } = require('../hanzi/common.cjs');

const PACKET = 20;
const HAN = /\p{Script=Han}/u;
// Beginner levels: example words up to one level above the entry (HSK 1–2 errors, HSK 3 warnings, as in the vocab campaign).
const ALLOWED = { HSK1: 2, HSK2: 3, HSK3: 4 };
const STATUS_OF = { 'author+review': 'reviewed', author: 'authored' };
const STATUSES = ['draft', 'reviewed', 'authored'];
const OPEN_FILE = path.join(enrich.WORK, 'open-batches.json');

// ------------------------------------------------------------------------------------------------ batches, hashes
function batchName(section, arg) {
  const text = String(arg || '');
  if (new RegExp('^' + section.prefix + '\\d{3}$').test(text)) return text;
  if (/^\d+$/.test(text)) return section.prefix + text.padStart(3, '0');
  throw new Error('Batch must be a number or ' + section.prefix + 'NNN, got "' + text + '"');
}

function contentHash(entry, fields) {
  const content = {};
  for (const field of fields) if (entry[field] !== undefined) content[field] = entry[field];
  return crypto.createHash('sha256').update(JSON.stringify(content)).digest('hex').slice(0, 16);
}

// Ledger check for the section audits: reviewed/authored entries match their ledger hash, drafts have no record,
// every record has an entry. requireComplete (once the campaign is done): no draft may remain.
function checkLedger(items, ledgerFile, fields, options = {}) {
  const ledger = enrich.readJson(ledgerFile, {});
  const errors = [];
  const counts = { draft: 0, reviewed: 0, authored: 0 };
  const ids = new Set();
  for (const m of items) {
    ids.add(m.id);
    const status = m.meaningStatus;
    if (!STATUSES.includes(status)) { errors.push(m.id + ': meaningStatus must be ' + STATUSES.join('/') + ', is ' + status); continue; }
    counts[status]++;
    const record = ledger[m.id];
    if (status === 'draft') {
      if (record) errors.push(m.id + ': draft, but the ledger records batch ' + record.batch);
      if (options.requireComplete) errors.push(m.id + ': still draft (campaign complete: every entry must be reviewed or authored)');
      continue;
    }
    if (!record) { errors.push(m.id + ': ' + status + ' without a ledger record'); continue; }
    if (record.status !== status) errors.push(m.id + ': meaningStatus ' + status + ', ledger ' + record.status + ' (batch ' + record.batch + ')');
    if (record.hash !== contentHash(m, fields)) errors.push(m.id + ': content changed after batch ' + record.batch + ' (ledger hash differs) – edit through a campaign batch');
  }
  for (const id of Object.keys(ledger)) if (!ids.has(id)) errors.push(id + ': ledger record without entry');
  return { errors, counts, batches: new Set(Object.values(ledger).map(r => r.batch)).size };
}

// For the builds: entries already written by the campaign keep their authored fields and status when the build
// runs again (the build reads the old content from git and would otherwise reset them to the draft).
function carryOver(entries, currentItems, ledgerFile, fields) {
  const ledger = enrich.readJson(ledgerFile, {});
  const current = new Map(currentItems.map(m => [m.id, m]));
  let kept = 0;
  for (const entry of entries) {
    const now = current.get(entry.id);
    if (!ledger[entry.id] || !now || now.meaningStatus === 'draft') continue;
    for (const field of fields) { if (now[field] === undefined) delete entry[field]; else entry[field] = now[field]; }
    entry.meaningStatus = now.meaningStatus;
    kept++;
  }
  return kept;
}

// ------------------------------------------------------------------------------------------------ shared context
let shared = null;
function context() {
  if (shared) return shared;
  const vocabCheck = require('./validate.cjs');
  const ctx = vocabCheck.context();
  const vocab = enrich.loadSources().flatMap(s => s.items);
  shared = { vocabCheck, ctx, Pinyin: ctx.Pinyin, cedict: ctx.cedict, vocab, vocabById: new Map(vocab.map(v => [v.id, v])) };
  return shared;
}
let handedict = null;
const loadHandedict = () => handedict || (handedict = require('../hsk2025/dictionaries.cjs').loadHandedict());

const syllableKeys = key => key.match(/[a-zv]+[1-5]/g) || [];
function numericKey(pinyin, hanzi) {
  try { return context().Pinyin.toNumeric(pinyin, hanzi).toLowerCase().replace(/ü/g, 'v'); } catch (e) { return ''; }
}

// ------------------------------------------------------------------------------------------------ German checks
// Generic masculine role nouns (gender-neutral German: Lehrkraft, Lernende, die sprechende Person, Kundschaft …).
const ROLE_NOUNS = ['Lehrer', 'Schüler', 'Student', 'Arzt', 'Ärzte', 'Kellner', 'Verkäufer', 'Fahrer', 'Kunde', 'Nachbar', 'Kollege',
  'Sprecher', 'Lerner', 'Muttersprachler', 'Leser', 'Zuhörer', 'Besucher', 'Chef', 'Polizist', 'Freund', 'Sänger', 'Händler',
  'Bürger', 'Zuschauer', 'Mitarbeiter', 'Teilnehmer', 'Autor', 'Erzähler', 'Anfänger', 'Benutzer', 'Nutzer', 'Fremde'];
const ROLE_RE = new RegExp('(^|[^\\p{L}])(' + ROLE_NOUNS.join('|') + ')(n|en|s|e|es|in|innen)?(?![\\p{L}])(\\s*[/:*]\\s*-?\\s*in(nen)?)?', 'gu');
function roleNouns(text) {
  const found = [];
  for (const m of String(text || '').matchAll(ROLE_RE)) {
    if (m[3] === 'in' || m[3] === 'innen' || m[4]) continue; // Lehrerin, Lehrer/-innen, Lehrer:innen
    if (new RegExp(m[2] + 'in').test(text)) continue; // paired form („Lehrer und Lehrerinnen“)
    found.push(m[2] + (m[3] || ''));
  }
  return [...new Set(found)];
}
// The Chinese sentence shows a gender (then the translation may, too).
const GENDER_SHOWN = /[他她男女爸妈哥姐弟妹爷奶叔姨舅婆公夫妻娘儿子先生太太小姐阿姨]/;
// Absolute claims („nie“, „immer“, „ausschließlich“): a hint, colloquial usage often allows more.
function absoluteClaims(text) {
  const cleaned = String(text || '').replace(/immer (wieder|mehr|noch|weiter)|noch immer|wie immer|für immer|nie zuvor/gi, '');
  return [...new Set((cleaned.match(/(^|[^\p{L}])(nie|niemals|ausschließlich|immer|stets)(?![\p{L}])/giu) || []).map(s => s.trim().replace(/^[^\p{L}]+/u, '')))];
}

// Chinese words of two or more characters in German text get pinyin in parentheses at their first mention
// (missing → warning for dictionary words; pinyin that does not fit → error).
function checkTextPinyin(label, text, errors, warnings, exempt = []) {
  const { Pinyin, cedict } = context();
  const seen = new Set();
  const re = /(\p{Script=Han}{2,})(\s*[（(]([^)）]*)[)）])?/gu;
  let m;
  while ((m = re.exec(text))) {
    const word = m[1];
    if (seen.has(word)) continue;
    seen.add(word);
    if (!m[2]) { if (cedict.has(word) && !exempt.includes(word)) warnings.push(label + ': pinyin missing after ' + word + ' (first mention)'); continue; }
    const pinyin = m[3].trim();
    if (!/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/i.test(pinyin)) continue; // a German gloss in brackets (no tone marks)
    // The pinyin may belong to the end of the run only (一条短信 (duǎnxìn): the noun after the classifier).
    const chars = Array.from(word);
    const n = Pinyin.segment(pinyin.split(/[,;]/)[0], word).length;
    if (n !== chars.length && !(n >= 1 && n < chars.length && Pinyin.segment(pinyin, chars.slice(-n).join('')).length === n)) {
      errors.push(label + ': pinyin "' + pinyin + '" does not fit ' + word);
    }
  }
}

// ------------------------------------------------------------------------------------------------ example checks
// 一/不 as spoken (yí ge, yìqǐ, bú shì, bù hǎo). The reading check tolerates both tones of 一/不, so this one looks
// at the written tone. Ordinal and citation uses of 一 (第一, 十一, 一月, 一号, 统一, 唯一, 万一, final 一) are skipped.
function sandhiIssues(chinese, pinyin) {
  const { Pinyin } = context();
  const parts = Pinyin.align(chinese, pinyin);
  if (!parts) return [];
  const issues = [];
  const han = parts.filter(p => p.pinyin !== undefined);
  const key = p => numericKey(p.pinyin, p.text);
  const tone = p => Number((key(p).match(/[1-5]$/) || [5])[0]);
  for (let i = 0; i < han.length; i++) {
    const ch = han[i].text;
    if (ch !== '一' && ch !== '不') continue;
    const t = tone(han[i]);
    if (t === 5) continue; // 看一看, 好不好, 对不起
    const partIndex = parts.indexOf(han[i]);
    const next = parts[partIndex + 1] && parts[partIndex + 1].pinyin !== undefined ? parts[partIndex + 1] : null;
    if (!next) continue; // before punctuation or at the end: citation tone
    const nt = tone(next);
    if (ch === '一') {
      const prev = han[i - 1] ? han[i - 1].text : '';
      if ('第十百千万统唯星期周初'.includes(prev) || /[一二三四五六七八九零〇]/.test(prev)) continue;
      if ('月号日楼层年'.includes(next.text) && t === 1) continue; // 一月, 一号, 一楼, 一年级
      if (next.text === '一') continue; // 一一
      const expected = nt === 4 || nt === 5 ? 2 : 4;
      if (t !== expected) issues.push('一 before ' + next.text + ' ' + next.pinyin + ' is ' + (expected === 2 ? 'yí' : 'yì') + ' (written ' + han[i].pinyin + ')');
    } else {
      if (nt === 5) continue;
      const expected = nt === 4 ? 2 : 4;
      if (t !== expected) issues.push('不 before ' + next.text + ' ' + next.pinyin + ' is ' + (expected === 2 ? 'bú' : 'bù') + ' (written ' + han[i].pinyin + ')');
    }
  }
  return issues;
}

// The reading check with extra accepted readings for the entry's own word (its pinyin as listed in the data, which
// the section audit validates, and for AABB forms the base word's tones).
function readingContext(extra) {
  const { ctx } = context();
  if (!extra || !extra.size) return ctx;
  const base = ctx.syllabusReadings;
  return Object.assign({}, ctx, { syllabusReadings: { get: w => extra.has(w) ? (base.get(w) || []).concat(extra.get(w)) : base.get(w) } });
}

// Checks 2–3 examples {chinese, pinyin, german}. spec: { forms (strings one of which each example contains),
// headword, allowed (beginner limit or undefined), ownWords, extraReadings (Map), draftExamples, phrases (allow
// examples without final punctuation) }.
function checkExamples(examples, spec, errors, warnings) {
  const { vocabCheck, ctx } = context();
  if (!Array.isArray(examples) || examples.length < 2 || examples.length > 3) { errors.push('examples: 2–3 required'); if (!Array.isArray(examples)) return; }
  const readCtx = readingContext(spec.extraReadings);
  const draft = new Set((spec.draftExamples || []).map(e => e && e.chinese).filter(Boolean));
  const seen = new Set();
  let phrases = 0;
  examples.forEach((ex, i) => {
    const label = 'example ' + (i + 1);
    if (!ex || typeof ex.chinese !== 'string' || typeof ex.pinyin !== 'string' || typeof ex.german !== 'string' || !ex.chinese.trim() || !ex.pinyin.trim() || !ex.german.trim()) {
      errors.push(label + ': chinese, pinyin and german required'); return;
    }
    const extra = Object.keys(ex).filter(k => !['chinese', 'pinyin', 'german'].includes(k));
    if (extra.length) errors.push(label + ': unknown fields ' + extra.join(', '));
    if (seen.has(ex.chinese)) errors.push(label + ': duplicate sentence');
    seen.add(ex.chinese);
    if (HAN.test(ex.pinyin)) errors.push(label + ': pinyin contains characters');
    if (HAN.test(ex.german)) errors.push(label + ': German translation contains Chinese characters');
    if (/[0-9]/.test(ex.chinese)) warnings.push(label + ': numbers in characters (三公斤, 两点), not digits');
    if (!/[。！？…”」）]$/.test(ex.chinese.trim())) {
      if (!spec.phrases || /[，。！？]/.test(ex.chinese)) warnings.push(label + ': sentence should end with 。！？');
      else phrases++;
    }
    if (!spec.forms.some(f => ex.chinese.includes(f))) errors.push(label + ': must contain ' + spec.forms.join(' / ') + (spec.wholeNote || ''));
    const copied = draft.has(ex.chinese);
    const reading = vocabCheck.checkExampleReading(ex.chinese, ex.pinyin, readCtx);
    reading.errors.forEach(e => errors.push(label + ' pinyin: ' + e));
    reading.warnings.forEach(w => warnings.push(label + ' pinyin: ' + w));
    // Draft examples may be kept only when they pass every check, including the spoken 一/不 tones.
    sandhiIssues(ex.chinese, ex.pinyin).forEach(s => (copied ? errors : warnings).push(label + ' pinyin: ' + s + (copied ? ' (example copied from the draft)' : '')));
    if (spec.allowed) {
      const issues = vocabCheck.checkBeginnerVocabulary(ex.chinese, spec.headword, spec.allowed, ctx, spec.ownWords || []);
      if (issues.length) (spec.allowed <= 3 ? errors : warnings).push(label + ': words above HSK ' + spec.allowed + ': ' + issues.join(', '));
    }
    const umlauts = asciiUmlauts(ex.german).filter(w => !(spec.umlautKeep || []).includes(w));
    if (umlauts.length) errors.push(label + ': write umlauts: ' + umlauts.join(', '));
    if (!GENDER_SHOWN.test(ex.chinese)) {
      const roles = roleNouns(ex.german);
      if (roles.length) warnings.push(label + ': the Chinese does not show a gender – neutral German instead of ' + roles.join(', ') + ' (Lehrkraft, Freundin/Freund only when shown)');
    }
  });
  if (phrases > 1) warnings.push('examples: at most one phrase without a sentence – prefer full sentences');
}

// German meta texts (meaning, usage, notes …): real umlauts, gender-neutral role nouns, no absolute claims.
function checkGerman(texts, errors, warnings, umlautKeep = []) {
  const all = texts.filter(t => typeof t === 'string').join(' \n ');
  const umlauts = asciiUmlauts(all).filter(w => !umlautKeep.includes(w));
  if (umlauts.length) errors.push('write umlauts: ' + [...new Set(umlauts)].join(', '));
  const roles = roleNouns(all);
  if (roles.length) errors.push('gender-neutral German: ' + roles.join(', ') + ' → Lernende, Lehrkraft, die sprechende Person, Kundschaft …');
  const claims = absoluteClaims(all);
  if (claims.length) warnings.push('absolute claim? „' + claims.join('“, „') + '“ – keep only if it really holds (else meist, üblicherweise)');
}

// A required German text field: string, no Chinese characters (when noHan), min/max length.
function germanField(value, label, { min = 3, max = 0, noHan = false, required = true } = {}, errors, warnings) {
  if (value === undefined || value === null || value === '') { if (required) errors.push(label + ': required'); return false; }
  if (typeof value !== 'string' || value.trim().length < min) { errors.push(label + ': German text of at least ' + min + ' characters required'); return false; }
  if (noHan && HAN.test(value)) errors.push(label + ': no Chinese characters');
  if (max && value.length > max) warnings.push(label + ' is long (' + value.length + ' characters, aim ≤ ' + max + ')');
  if (value !== value.trim()) warnings.push(label + ': leading/trailing spaces');
  return true;
}

// ------------------------------------------------------------------------------------------------ prepare
function readOpen() { return enrich.readJson(OPEN_FILE, {}); }
function writeOpen(open) { fs.mkdirSync(enrich.WORK, { recursive: true }); fs.writeFileSync(OPEN_FILE, JSON.stringify(open, null, 1)); }

// Sizes of n packets of at most PACKET entries, balanced (65 → 17 16 16 16).
function packetSizes(total) {
  const n = Math.ceil(total / PACKET);
  return Array.from({ length: n }, (_, i) => Math.floor(total / n) + (i < total % n ? 1 : 0));
}

// Syllabus words up to `limit` with pinyin and meaning (word list for the beginner examples).
function allowedWords(limit) {
  const { vocab } = context();
  const syllabus = enrich.syllabusLevels();
  const byWord = new Map();
  for (const v of vocab) if (!byWord.has(v.word)) byWord.set(v.word, v);
  return [...syllabus].filter(([, n]) => n <= limit).map(([word, n]) => {
    const item = byWord.get(word);
    return word + '\t' + (item ? item.pinyin : '') + '\tHSK' + n + '\t' + (item ? item.meaning : '');
  });
}

function prepare(section, argv) {
  const args = argv.slice();
  const option = name => { const i = args.indexOf('--' + name); return i === -1 ? null : args[i + 1]; };
  const batch = batchName(section, args[0]);
  const COUNT = Number(option('count') || 100);
  const LEVELS = option('levels') ? option('levels').split(',') : null;
  const dir = path.join(enrich.WORK, batch);
  if (fs.existsSync(dir)) throw new Error(batch + ' already exists: ' + dir);
  const open = readOpen();
  const reserved = new Set(Object.values(open).flat());
  const entries = section.load();
  const rank = level => enrich.LEVEL_RANK[level] || 9;
  const order = entries.map((e, i) => ({ e, i }))
    .filter(({ e }) => e.meaningStatus === 'draft' && !reserved.has(e.id) && (!LEVELS || LEVELS.includes(e.level)))
    .sort((a, b) => rank(a.e.level) - rank(b.e.level) || a.i - b.i).map(x => x.e);
  if (!order.length) { console.log('Nothing left to prepare' + (LEVELS ? ' for ' + LEVELS.join(', ') : '') + '.'); return null; }
  // A batch never mixes review policies (second reviewer for HSK 1–4 only).
  const withReview = enrich.reviewedLevel(order[0].level);
  const policy = withReview ? 'author+review' : 'author';
  const picked = order.filter(e => enrich.reviewedLevel(e.level) === withReview).slice(0, COUNT);
  const helpers = section.cardHelpers ? section.cardHelpers(entries) : {};
  const cards = picked.map(e => {
    const card = section.card(e, helpers);
    card.vocabularyLimit = ALLOWED[e.level] ? 'Wörter bis HSK ' + ALLOWED[e.level] + ' (allowed-words-HSK' + ALLOWED[e.level] + '.txt)' : null;
    return card;
  });

  fs.mkdirSync(path.join(dir, 'input'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'authored'), { recursive: true });
  fs.mkdirSync(path.join(dir, withReview ? 'reviewed' : 'proofread'), { recursive: true });
  const packets = [];
  let at = 0;
  for (const size of packetSizes(cards.length)) {
    const name = 'p' + String(packets.length + 1).padStart(2, '0');
    const slice = cards.slice(at, at + size);
    fs.writeFileSync(path.join(dir, 'input', name + '.json'), JSON.stringify(slice, null, 1));
    packets.push({ name, ids: slice.map(c => c.id), levels: countBy(slice, c => c.level) });
    at += size;
  }
  for (const limit of new Set(cards.map(c => ALLOWED[c.level]).filter(Boolean))) {
    fs.writeFileSync(path.join(dir, 'allowed-words-HSK' + limit + '.txt'), allowedWords(limit).join('\n') + '\n');
  }
  const fill = template => fs.readFileSync(path.join(section.dir, template), 'utf8')
    .split('{{BATCH}}').join(batch).split('{{DIR}}').join(dir.replace(/\\/g, '/')).split('{{ROOT}}').join(enrich.ROOT.replace(/\\/g, '/'));
  fs.writeFileSync(path.join(dir, 'BRIEF.md'), fill('BRIEF.template.md'));
  fs.writeFileSync(path.join(dir, withReview ? 'REVIEW.md' : 'PROOF.md'), fill(withReview ? 'REVIEW.template.md' : 'PROOF.template.md'));
  fs.writeFileSync(path.join(dir, 'batch.json'), JSON.stringify({ batch, kind: section.name, policy, packets: packets.map(p => p.name),
    layout: packets, ids: cards.map(c => c.id), created: new Date().toISOString() }, null, 1));
  open[batch] = cards.map(c => c.id);
  writeOpen(open);
  console.log(batch + ': ' + cards.length + ' ' + section.unit + ' in ' + packets.length + ' packets ' + JSON.stringify(countBy(cards, c => c.level)) +
    ', policy ' + policy + '. ' + dir);
  for (const p of packets) console.log('  ' + p.name + ': ' + p.ids.length + ' ' + JSON.stringify(p.levels) + '  ' + p.ids[0] + ' … ' + p.ids[p.ids.length - 1]);
  return { batch, policy, packets };
}

function countBy(list, key) {
  const out = {};
  list.forEach(x => { out[key(x)] = (out[key(x)] || 0) + 1; });
  return out;
}

// ------------------------------------------------------------------------------------------------ validate
function mergeReview(authored, review) {
  if (!authored || !review || review.verdict !== 'fixed' || !review.fixes) return authored;
  return Object.assign({}, authored, review.fixes);
}

function checkEntry(section, card, authored) {
  const errors = [], warnings = [];
  if (!authored || typeof authored !== 'object') return { errors: ['missing in output'], warnings };
  const allowedKeys = ['id', ...section.FIELDS, 'flags'];
  const unknown = Object.keys(authored).filter(k => !allowedKeys.includes(k));
  if (unknown.length) errors.push('unknown fields: ' + unknown.join(', ') + ' (allowed: ' + allowedKeys.join(', ') + ')');
  if (authored.flags !== undefined && typeof authored.flags !== 'string') errors.push('flags must be a string');
  section.check(card, authored, { errors, warnings, ALLOWED, checkExamples, checkTextPinyin, checkGerman, germanField, context, numericKey, syllableKeys, HAN });
  return { errors, warnings };
}

function validatePacket(section, batch, packet, options = {}) {
  const dir = path.join(enrich.WORK, batch);
  const lines = [];
  const inputFile = path.join(dir, 'input', packet + '.json');
  if (!fs.existsSync(inputFile)) return { ok: false, lines: ['ERROR input/' + packet + '.json missing'], cards: [] };
  const input = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  const read = sub => {
    const file = path.join(dir, sub, packet + '.json');
    if (!fs.existsSync(file)) { lines.push('ERROR ' + sub + '/' + packet + '.json missing'); return null; }
    try { const data = JSON.parse(fs.readFileSync(file, 'utf8')); if (Array.isArray(data)) return data; lines.push('ERROR ' + sub + '/' + packet + '.json is no JSON array'); }
    catch (e) { lines.push('ERROR ' + sub + '/' + packet + '.json: ' + e.message); }
    return null;
  };
  const authored = read('authored');
  const reviews = options.reviewed ? read('reviewed') : [];
  const proof = options.proofread ? read('proofread') : [];
  const cards = [];
  if (authored && reviews && proof) {
    const byId = new Map(authored.map(a => [a && a.id, a]));
    const reviewById = new Map(reviews.map(r => [r && r.id, r]));
    const proofById = new Map(proof.map(r => [r && r.id, r]));
    if (authored.length !== input.length) lines.push('ERROR authored has ' + authored.length + ' objects, input ' + input.length);
    authored.forEach((a, i) => { if (!a || !input.some(c => c.id === a.id)) lines.push('ERROR authored[' + i + ']: id ' + (a && a.id) + ' is not in input/' + packet + '.json'); });
    for (const card of input) {
      const review = reviewById.get(card.id) || null;
      if (options.reviewed) {
        if (!review || !['ok', 'fixed'].includes(review.verdict)) lines.push('ERROR ' + card.id + ': review verdict ok/fixed missing');
        else if (review.verdict === 'fixed' && (!review.fixes || typeof review.fixes !== 'object' || typeof review.comment !== 'string')) lines.push('ERROR ' + card.id + ': a fixed verdict needs fixes {…} and a comment');
      }
      const proofRecord = proofById.get(card.id) || null;
      if (options.proofread) {
        if (!proofRecord || !['ok', 'fixed'].includes(proofRecord.verdict)) lines.push('ERROR ' + card.id + ': proofreading verdict ok/fixed missing');
        else if (proofRecord.verdict === 'fixed' && typeof proofRecord.comment !== 'string') lines.push('ERROR ' + card.id + ': a fixed proofreading verdict needs a comment');
      }
      const merged = mergeReview(byId.get(card.id), review);
      const result = checkEntry(section, card, merged);
      result.errors.forEach(e => lines.push('ERROR ' + card.id + ': ' + e));
      result.warnings.forEach(w => lines.push('WARN ' + card.id + ': ' + w));
      cards.push({ card, merged, review, proof: proofRecord });
    }
  }
  return { ok: !lines.some(l => l.startsWith('ERROR')), lines, cards };
}

function validateCli(section, argv) {
  const [batchArg, packet] = argv;
  if (!batchArg || !/^p\d{2}$/.test(packet || '')) throw new Error('Usage: validate.cjs <batch> pNN [--reviewed | --proofread]');
  const batch = batchName(section, batchArg);
  const result = validatePacket(section, batch, packet, { reviewed: argv.includes('--reviewed'), proofread: argv.includes('--proofread') });
  result.lines.forEach(line => console.log(line));
  console.log(result.ok ? 'OK ' + packet : 'FAILED ' + packet);
  if (!result.ok) process.exitCode = 1;
  return result;
}

// ------------------------------------------------------------------------------------------------ apply
function apply(section, argv) {
  const batch = batchName(section, argv[0]);
  const dir = path.join(enrich.WORK, batch);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'batch.json'), 'utf8'));
  const reviewed = meta.policy === 'author+review';
  const results = meta.packets.map(packet => ({ packet, result: validatePacket(section, batch, packet, { reviewed, proofread: !reviewed }) }));
  const failed = results.filter(r => !r.result.ok);
  if (failed.length) {
    console.error('Batch ' + batch + ' not applied; failing packets: ' + failed.map(r => r.packet).join(', '));
    failed.forEach(r => console.error(r.packet + ':\n' + r.result.lines.filter(l => l.startsWith('ERROR')).slice(0, 10).join('\n')));
    process.exit(1);
  }
  const entries = section.load();
  const byId = new Map(entries.map(e => [e.id, e]));
  const ledgerFile = path.join(section.dir, 'ledger.json');
  const ledger = enrich.readJson(ledgerFile, {});
  const date = new Date().toISOString().slice(0, 10);
  const status = STATUS_OF[meta.policy];
  const stats = { entries: 0, reviewerFixes: 0, proofFixes: 0, flags: 0 };
  const flagLines = [];
  for (const { result } of results) {
    for (const { card, merged, review, proof } of result.cards) {
      const entry = byId.get(card.id);
      if (!entry) throw new Error(card.id + ' no longer exists');
      if (entry.meaningStatus !== 'draft') throw new Error(card.id + ' is already ' + entry.meaningStatus + ' (ledger: ' + ((ledger[card.id] || {}).batch || '–') + ')');
      section.applyFields(entry, merged);
      entry.meaningStatus = status;
      ledger[entry.id] = { batch, policy: meta.policy, status, date, hash: contentHash(entry, section.HASH_FIELDS) };
      stats.entries++;
      if (merged.flags) { stats.flags++; flagLines.push('- ' + entry.id + ' (author): ' + merged.flags); }
      if (review && review.verdict === 'fixed') { stats.reviewerFixes++; if (review.comment) flagLines.push('- ' + entry.id + ' (reviewer fix): ' + review.comment); }
      if (proof && proof.verdict === 'fixed') { stats.proofFixes++; if (proof.comment) flagLines.push('- ' + entry.id + ' (proofreading fix): ' + proof.comment); }
      if (proof && proof.flag) flagLines.push('- ' + entry.id + ' (proofreader): ' + proof.flag);
    }
  }
  section.write(entries);
  fs.writeFileSync(ledgerFile, JSON.stringify(ledger, null, 1) + '\n');
  const flagsFile = path.join(section.dir, 'flags.md');
  const head = fs.existsSync(flagsFile) ? fs.readFileSync(flagsFile, 'utf8')
    : '# ' + section.title + ' campaign flags\n\nAuthor flags, reviewer fixes and proofreading fixes per batch, for follow-up decisions.\n';
  fs.writeFileSync(flagsFile, head.trimEnd() + '\n\n## ' + batch + ' (' + date + ', ' + meta.policy + ')\n' + (flagLines.join('\n') || '- none') + '\n');
  const open = readOpen();
  delete open[batch];
  writeOpen(open);
  fs.writeFileSync(path.join(dir, 'applied.json'), JSON.stringify(Object.assign({ date }, stats), null, 1));
  console.log('Applied ' + batch + ': ' + JSON.stringify(stats));
  // Nothing else is derived from the data file; the section audit checks the result (ledger included).
  require('child_process').execFileSync(process.execPath, [path.join(enrich.ROOT, 'scripts', section.audit)], { stdio: 'inherit' });
}

// ------------------------------------------------------------------------------------------------ status
function status(section) {
  const entries = section.load();
  const open = readOpen();
  const inOpen = new Map();
  for (const [batch, ids] of Object.entries(open)) if (batch.startsWith(section.prefix)) ids.forEach(id => inOpen.set(id, batch));
  const levels = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9', 'Zusatz'];
  const rows = {};
  for (const e of entries) {
    const row = rows[e.level] = rows[e.level] || { total: 0, draft: 0, open: 0, reviewed: 0, authored: 0 };
    row.total++;
    row[e.meaningStatus] = (row[e.meaningStatus] || 0) + 1;
    if (e.meaningStatus === 'draft' && inOpen.has(e.id)) row.open++;
  }
  const order = levels.filter(l => rows[l]);
  const sum = key => order.reduce((n, l) => n + rows[l][key], 0);
  const done = sum('reviewed') + sum('authored');
  const ledger = enrich.readJson(path.join(section.dir, 'ledger.json'), {});
  const openBatches = [...new Set(inOpen.values())].sort();
  const md = [
    '# ' + section.title + ' campaign status',
    '',
    'Generated by `scripts/' + path.basename(section.dir) + '/status.cjs`. ' + done + ' of ' + sum('total') + ' ' + section.unit + ' written (' +
      (100 * done / sum('total')).toFixed(1) + ' %), ' + new Set(Object.values(ledger).map(r => r.batch)).size + ' batches applied' +
      (openBatches.length ? '; open: ' + openBatches.join(', ') : '') + '.',
    '',
    '| Level | Entries | Draft | in open batch | Reviewed (author + reviewer) | Authored (author + proofreading) |',
    '|---|---|---|---|---|---|',
    ...order.map(l => '| ' + l + ' | ' + rows[l].total + ' | ' + rows[l].draft + ' | ' + rows[l].open + ' | ' + rows[l].reviewed + ' | ' + rows[l].authored + ' |'),
    '| Σ | ' + sum('total') + ' | ' + sum('draft') + ' | ' + sum('open') + ' | ' + sum('reviewed') + ' | ' + sum('authored') + ' |',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(section.dir, 'STATUS.md'), md);
  console.log(md);
}

module.exports = { PACKET, ALLOWED, STATUS_OF, STATUSES, HAN, batchName, contentHash, checkLedger, carryOver, context, loadHandedict,
  numericKey, syllableKeys, roleNouns, absoluteClaims, sandhiIssues, checkExamples, checkGerman, checkTextPinyin, germanField,
  prepare, validatePacket, validateCli, apply, status, packetSizes };
