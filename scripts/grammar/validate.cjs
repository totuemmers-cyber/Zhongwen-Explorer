// Validates authored (and reviewed) grammar packets of the enrichment campaign.
// Usage: node scripts/grammar/validate.cjs <batch> <packet> [--reviewed]
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const vocabCheck = require('../enrich/validate.cjs');
const hanzi = require('../hanzi/common.cjs');
const grammar = require('./common.cjs');

const HAN = /\p{Script=Han}/u;
const FIELDS = ['id', 'meaning', 'formation', 'explanation', 'notes', 'examples', 'quiz', 'noQuiz', 'related', 'flags'];

let shared = null;
function context() {
  if (shared) return shared;
  shared = { ctx: vocabCheck.context(), ids: new Set(grammar.loadGrammar().map(e => e.id)) };
  return shared;
}

// Chinese words of two or more characters in German text get pinyin in parentheses at their first mention
// (missing → warning; pinyin that does not fit → error).
function checkTextPinyin(label, text, errors, warnings) {
  const { Pinyin, cedict } = context().ctx;
  const seen = new Set();
  const re = /(\p{Script=Han}{2,})(\s*[（(]([^)）]*)[)）])?/gu;
  let m;
  while ((m = re.exec(text))) {
    const word = m[1];
    if (seen.has(word)) continue;
    seen.add(word);
    if (!m[2]) { if (cedict.has(word)) warnings.push(label + ': pinyin missing after ' + word); continue; }
    const pinyin = m[3].trim();
    if (!/[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/i.test(pinyin)) continue; // a German gloss in brackets
    if (Pinyin.segment(pinyin, word).length !== Array.from(word).length) errors.push(label + ': pinyin "' + pinyin + '" does not fit ' + word);
  }
}

// The example shows the pattern: every group of core words, in order, one alternative each (否则/不然).
function showsPattern(chinese, groups) {
  let pos = 0;
  for (const alts of groups) {
    let best = -1;
    for (const a of alts) { const i = chinese.indexOf(a, pos); if (i !== -1 && (best === -1 || i < best)) best = i; }
    if (best === -1) return false;
    pos = best + 1;
  }
  return true;
}

function checkCard(card, authored) {
  const errors = [], warnings = [];
  if (!authored) return { errors: ['missing in output'], warnings };
  const { ctx, ids } = context();
  const unknown = Object.keys(authored).filter(k => !FIELDS.includes(k));
  if (unknown.length) errors.push('unknown fields: ' + unknown.join(', '));
  const text = (v, min) => typeof v === 'string' && v.trim().length >= min;
  if (!text(authored.meaning, 3) || HAN.test(authored.meaning)) errors.push('meaning: short German text without Chinese characters required');
  else if (authored.meaning.length > 160) warnings.push('meaning is long (' + authored.meaning.length + ' characters)');
  if (card.kind !== 'overview' && card.syllabus && !/句群|复句$/.test(card.syllabus.categoryName || '') && !text(authored.formation, 3)) errors.push('formation required');
  if (authored.formation !== undefined && !text(authored.formation, 3)) errors.push('formation must be text');
  if (!text(authored.explanation, 120)) errors.push('explanation: German text of at least 120 characters required');
  else {
    if (authored.explanation.length > 1400) warnings.push('explanation is long (' + authored.explanation.length + ' characters)');
    checkTextPinyin('explanation', authored.explanation, errors, warnings);
  }
  if (authored.notes !== undefined) {
    if (!text(authored.notes, 20)) errors.push('notes: German text required when given');
    else checkTextPinyin('notes', authored.notes, errors, warnings);
  }

  // Examples.
  const examples = authored.examples;
  const [min, max] = card.kind === 'overview' ? [3, 6] : [3, 4];
  if (!Array.isArray(examples) || examples.length < min || examples.length > max) errors.push(min + '–' + max + ' examples required');
  const allowed = { HSK1: 2, HSK2: 3, HSK3: 4 }[card.level];
  const own = card.mustUse.flat().concat((card.words || []).map(w => w.replace(/[¹²³⁴⁵⁶⁷⁸⁹—（）]/g, '')));
  const seen = new Set();
  const wordsUsed = new Set();
  (Array.isArray(examples) ? examples : []).forEach((ex, i) => {
    const label = 'example ' + (i + 1);
    if (!ex || !ex.chinese || !ex.pinyin || !ex.german) { errors.push(label + ': chinese, pinyin and german required'); return; }
    const extra = Object.keys(ex).filter(k => !['chinese', 'pinyin', 'german'].includes(k));
    if (extra.length) errors.push(label + ': unknown fields ' + extra.join(', '));
    if (seen.has(ex.chinese)) errors.push(label + ': duplicate sentence');
    seen.add(ex.chinese);
    if (HAN.test(ex.pinyin)) errors.push(label + ': pinyin contains characters');
    if (HAN.test(ex.german)) errors.push(label + ': German translation contains Chinese characters');
    if (!/[。！？…」”）]$/.test(ex.chinese.trim())) warnings.push(label + ': sentence should end with 。！？');
    if (card.mustUse.length && !showsPattern(ex.chinese, card.mustUse)) errors.push(label + ': does not show the pattern (' + card.mustUse.map(a => a.join('/')).join(' … ') + ')');
    if (card.words) {
      // A listed word may have variants (二/两) and optional parts (没（有）).
      const hit = card.words.map(w => w.replace(/[¹²³⁴⁵⁶⁷⁸⁹—]/g, '')).filter(w => w.split('/')
        .flatMap(v => [v.replace(/（(.*?)）/g, '$1'), v.replace(/（.*?）/g, '')]).some(f => f && ex.chinese.includes(f)));
      if (!hit.length) errors.push(label + ': uses none of the listed words');
      hit.forEach(w => wordsUsed.add(w));
    }
    const reading = vocabCheck.checkExampleReading(ex.chinese, ex.pinyin, ctx);
    reading.errors.forEach(e => errors.push(label + ' pinyin: ' + e));
    reading.warnings.forEach(w => warnings.push(label + ' pinyin: ' + w));
    if (allowed) {
      const issues = vocabCheck.checkBeginnerVocabulary(ex.chinese, own[0] || '', allowed, ctx, own);
      if (issues.length) {
        const message = label + ': words above HSK ' + allowed + ': ' + issues.join(', ');
        if (allowed <= 3) errors.push(message); else warnings.push(message);
      }
    }
  });
  if (card.words && card.words.length >= 3 && wordsUsed.size < Math.min(3, card.words.length)) warnings.push('examples cover only ' + wordsUsed.size + ' of the listed words');

  // Quiz record: a cloze over one example, with three wrong choices and why they are wrong.
  if (authored.quiz !== undefined && authored.quiz !== null) {
    const q = authored.quiz;
    const ex = Array.isArray(examples) ? examples[q.example] : null;
    if (!Number.isInteger(q.example) || !ex) errors.push('quiz.example must be the index of an example');
    else if (typeof q.answer !== 'string' || !q.answer || !ex.chinese.includes(q.answer)) errors.push('quiz.answer must occur in example ' + (q.example + 1));
    else if (ex.chinese.indexOf(q.answer) !== ex.chinese.lastIndexOf(q.answer)) errors.push('quiz.answer occurs twice in example ' + (q.example + 1) + ' (choose a unique span)');
    if (q.accepted !== undefined && (!Array.isArray(q.accepted) || q.accepted.some(a => typeof a !== 'string' || !a))) errors.push('quiz.accepted must be a list of strings');
    if (!Array.isArray(q.distractors) || q.distractors.length !== 3) errors.push('quiz.distractors: exactly 3 required');
    else {
      const texts = new Set([q.answer, ...(q.accepted || [])]);
      q.distractors.forEach((d, i) => {
        if (!d || typeof d.text !== 'string' || !d.text || !HAN.test(d.text)) errors.push('quiz.distractors[' + i + '].text: Chinese text required');
        else if (texts.has(d.text)) errors.push('quiz.distractors[' + i + ']: "' + d.text + '" is the answer or repeated');
        else texts.add(d.text);
        if (!d || !text(d.reason, 10)) errors.push('quiz.distractors[' + i + '].reason: German reason required');
      });
    }
    const extra = Object.keys(q).filter(k => !['example', 'answer', 'accepted', 'distractors'].includes(k));
    if (extra.length) errors.push('quiz: unknown fields ' + extra.join(', '));
  } else if (card.kind !== 'overview' && card.mustUse.length && !text(authored.noQuiz, 10)) {
    errors.push('quiz required (or noQuiz with a reason)');
  }
  if (authored.noQuiz !== undefined && authored.quiz) errors.push('quiz and noQuiz exclude each other');

  // Related points.
  if (authored.related !== undefined) {
    if (!Array.isArray(authored.related)) errors.push('related must be a list of grammar ids');
    else {
      authored.related.forEach(id => {
        if (id === card.id) errors.push('related: the point itself');
        else if (!ids.has(id)) errors.push('related: unknown id ' + id);
      });
      if (authored.related.length > 6) warnings.push('related: more than 6 links');
    }
  }
  const german = [authored.meaning, authored.formation, authored.explanation, authored.notes,
    ...(Array.isArray(examples) ? examples.map(e => e && e.german) : []),
    ...((authored.quiz && authored.quiz.distractors) || []).map(d => d && d.reason)].filter(Boolean).join(' ');
  const spelled = hanzi.asciiUmlauts(german);
  if (spelled.length) errors.push('write umlauts: ' + spelled.join(', '));
  if (authored.flags !== undefined && typeof authored.flags !== 'string') errors.push('flags must be a string');
  return { errors, warnings };
}

function mergeReview(authored, review) {
  if (!review || review.verdict !== 'fixed' || !review.fixes) return authored;
  return Object.assign({}, authored, review.fixes);
}

function validatePacket(batch, packet, options = {}) {
  const dir = path.join(enrich.WORK, batch);
  const input = JSON.parse(fs.readFileSync(path.join(dir, 'input', packet + '.json'), 'utf8'));
  const lines = [];
  const read = sub => {
    const file = path.join(dir, sub, packet + '.json');
    if (!fs.existsSync(file)) { lines.push('ERROR ' + sub + '/' + packet + '.json missing'); return null; }
    try { const data = JSON.parse(fs.readFileSync(file, 'utf8')); if (Array.isArray(data)) return data; lines.push('ERROR ' + sub + '/' + packet + '.json is no JSON array'); }
    catch (e) { lines.push('ERROR ' + sub + '/' + packet + '.json: ' + e.message); }
    return null;
  };
  const authored = read('authored');
  const reviews = options.reviewed ? read('reviewed') : [];
  const cards = [];
  if (authored && reviews) {
    const byId = new Map(authored.map(a => [a && a.id, a]));
    const reviewById = new Map((reviews || []).map(r => [r && r.id, r]));
    if (authored.length !== input.length) lines.push('ERROR authored has ' + authored.length + ' cards, input ' + input.length);
    for (const card of input) {
      const review = reviewById.get(card.id);
      if (options.reviewed && (!review || !['ok', 'fixed'].includes(review.verdict))) lines.push('ERROR ' + card.id + ': review verdict ok/fixed missing');
      const merged = mergeReview(byId.get(card.id), review);
      const result = checkCard(card, merged);
      result.errors.forEach(e => lines.push('ERROR ' + card.id + ': ' + e));
      result.warnings.forEach(w => lines.push('WARN ' + card.id + ': ' + w));
      cards.push({ card, merged, review: review || null });
    }
  }
  return { ok: !lines.some(l => l.startsWith('ERROR')), lines, cards };
}

if (require.main === module) {
  const [batch, packet] = process.argv.slice(2);
  const result = validatePacket(batch, packet, { reviewed: process.argv.includes('--reviewed') });
  result.lines.forEach(line => console.log(line));
  console.log(result.ok ? 'OK ' + packet : 'FAILED ' + packet);
  if (!result.ok) process.exitCode = 1;
}

module.exports = { validatePacket, checkCard };
