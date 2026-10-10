// Validates authored (and reviewed) hanzi packets of the enrichment campaign.
// Usage: node scripts/hanzi/validate.cjs <batch> <packet> [--reviewed]
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const hanzi = require('./common.cjs');

const HAN = /\p{Script=Han}/u;
// One character or component: Han, CJK radicals (⺀–⿕) and CJK strokes (㇀–㇣).
const PART = /^[\p{Script=Han}⺀-⿟㇀-㇯]$/u;
const ROLES = ['semantic', 'phonetic', 'form'];

let shared = null;
function context() {
  if (shared) return shared;
  shared = { Pinyin: enrich.loadPinyin(), cedict: require('../hsk2025/dictionaries.cjs').loadCedict() };
  return shared;
}

// Readings a dictionary attests for one character (numeric keys): Unihan (kTGHZ2013, kMandarin, kHanyuPinlu)
// and CC-CEDICT single-character entries. Loaded only when a card adds readings.
let unihan = null;
function attestedReadings(ch) {
  const { Pinyin, cedict } = context();
  if (!unihan) unihan = require('../hsk2025/dictionaries.cjs').loadUnihan(['kMandarin', 'kTGHZ2013', 'kHanyuPinlu']);
  const u = unihan.get(ch) || {};
  const keys = new Set((cedict.get(ch) || []).filter(e => !/^[A-Z]/.test(e.pinyin)).map(e => e.key));
  const add = r => { if (r) keys.add(Pinyin.toNumeric(r, ch).toLowerCase()); };
  String(u.kTGHZ2013 || '').split(' ').forEach(r => add(r.split(':')[1]));
  String(u.kMandarin || '').split(' ').forEach(add);
  String(u.kHanyuPinlu || '').split(' ').forEach(r => add(r.replace(/\(.*/, '')));
  return keys;
}

function mergeReview(authored, review) {
  if (!review || review.verdict !== 'fixed' || !review.fixes) return authored;
  return Object.assign({}, authored, review.fixes);
}

// Chinese words of two or more characters need pinyin in parentheses at their first mention; the pinyin must fit.
function checkNotePinyin(card, notes, errors, warnings) {
  const { Pinyin, cedict } = context();
  const seen = new Set();
  const re = /(\p{Script=Han}{2,})(\s*[（(]([^)）]*)[)）])?/gu;
  let m;
  while ((m = re.exec(notes))) {
    const word = m[1];
    if (seen.has(word)) continue;
    seen.add(word);
    if (!m[2]) { errors.push('notes: pinyin missing after ' + word + ' (first mention)'); continue; }
    const pinyin = m[3].trim();
    const syllables = Pinyin.segment(pinyin, word);
    if (syllables.length !== Array.from(word).length) { errors.push('notes: pinyin "' + pinyin + '" does not fit ' + word); continue; }
    const key = Pinyin.toNumeric(pinyin, word).toLowerCase().replace(/5/g, '');
    const known = (cedict.get(word) || []).map(e => e.key.replace(/5/g, ''));
    const loose = k => k.replace(/[1-5]/g, '');
    if (known.length && !known.includes(key) && !known.some(k => loose(k) === loose(key) && /yi|bu/.test(loose(key))))
      warnings.push('notes: ' + word + ' (' + pinyin + ') – CC-CEDICT: ' + Array.from(new Set((cedict.get(word) || []).map(e => e.pinyin))).join(', '));
  }
  if (!notes.includes(card.hanzi)) warnings.push('notes do not mention ' + card.hanzi);
}

function checkCard(card, authored) {
  const errors = [], warnings = [];
  if (!authored) return { errors: ['missing in output'], warnings };
  // Readings: same pinyin, same order, a German meaning each.
  if (!Array.isArray(authored.readings) || authored.readings.length !== card.readings.length) {
    errors.push('readings: expected ' + card.readings.length + ' entries in the input order');
  } else {
    authored.readings.forEach((r, i) => {
      if (!r || r.pinyin !== card.readings[i].pinyin) errors.push('readings[' + i + ']: keep pinyin "' + card.readings[i].pinyin + '"');
      if (!r || typeof r.meaning !== 'string' || !r.meaning.trim()) errors.push('readings[' + i + ']: meaning required');
      else {
        if (HAN.test(r.meaning)) errors.push('readings[' + i + ']: no Chinese characters in the meaning');
        if (r.meaning.length > 160) warnings.push('readings[' + i + ']: meaning is long (' + r.meaning.length + ' characters)');
        if (/,\s/.test(r.meaning) && !r.meaning.includes(';')) warnings.push('readings[' + i + ']: separate glosses with "; "');
      }
    });
  }
  // Added readings: standard readings learners need that the card lacks (的 dī in 打的).
  if (authored.addReadings !== undefined) {
    if (!Array.isArray(authored.addReadings)) errors.push('addReadings must be an array');
    else {
      const { Pinyin } = context();
      const known = attestedReadings(card.hanzi);
      const present = new Set(card.readings.map(r => Pinyin.toNumeric(r.pinyin, card.hanzi).toLowerCase()));
      authored.addReadings.forEach((r, i) => {
        const key = r && typeof r.pinyin === 'string' ? Pinyin.toNumeric(r.pinyin, card.hanzi).toLowerCase() : '';
        if (!key || !/^[a-zü]+[1-5]$/.test(key)) errors.push('addReadings[' + i + ']: one pinyin syllable with tone mark required');
        else if (present.has(key)) errors.push('addReadings[' + i + ']: ' + r.pinyin + ' is already a reading');
        else if (!known.has(key)) errors.push('addReadings[' + i + ']: ' + r.pinyin + ' is not attested for ' + card.hanzi + ' (Unihan, CC-CEDICT)');
        present.add(key);
        if (!r || typeof r.meaning !== 'string' || !r.meaning.trim() || HAN.test(r.meaning)) errors.push('addReadings[' + i + ']: German meaning required');
      });
    }
  }
  // Components.
  if (!Array.isArray(authored.components)) errors.push('components: array required (may be empty)');
  else {
    if (authored.components.length > 6) errors.push('components: at most 6 parts');
    const parts = new Set();
    authored.components.forEach((c, i) => {
      if (!c || !PART.test(c.part || '')) errors.push('components[' + i + ']: part must be one character or component');
      else if (c.part === card.hanzi) errors.push('components[' + i + ']: the character itself is no component');
      else if (parts.has(c.part)) errors.push('components[' + i + ']: ' + c.part + ' listed twice');
      if (c && c.part) parts.add(c.part);
      if (!c || !ROLES.includes(c.role)) errors.push('components[' + i + ']: role must be ' + ROLES.join(', '));
      if (!c || typeof c.meaning !== 'string' || !c.meaning.trim()) errors.push('components[' + i + ']: German meaning required');
    });
    if (authored.components.filter(c => c && c.role === 'phonetic').length > 1) warnings.push('components: more than one phonetic part');
  }
  // Notes.
  if (typeof authored.notes !== 'string' || authored.notes.trim().length < 80) errors.push('notes: German text of at least 80 characters required');
  else {
    if (authored.notes.length > 900) warnings.push('notes are long (' + authored.notes.length + ' characters)');
    checkNotePinyin(card, authored.notes, errors, warnings);
  }
  const german = (authored.readings || []).concat(authored.addReadings || []).map(r => r && r.meaning)
    .concat((authored.components || []).map(c => c && c.meaning), [authored.notes]).join(' ');
  const spelled = hanzi.asciiUmlauts(german);
  if (spelled.length) errors.push('write umlauts: ' + spelled.join(', '));
  if (authored.flags !== undefined && typeof authored.flags !== 'string') errors.push('flags must be a string');
  const unknown = Object.keys(authored).filter(k => !['id', 'readings', 'addReadings', 'components', 'notes', 'flags'].includes(k));
  if (unknown.length) errors.push('unknown fields: ' + unknown.join(', '));
  return { errors, warnings };
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
  const ok = !lines.some(l => l.startsWith('ERROR'));
  return { ok, lines, cards };
}

if (require.main === module) {
  const [batch, packet] = process.argv.slice(2);
  const result = validatePacket(batch, packet, { reviewed: process.argv.includes('--reviewed') });
  result.lines.forEach(line => console.log(line));
  console.log(result.ok ? 'OK ' + packet : 'FAILED ' + packet);
  if (!result.ok) process.exitCode = 1;
}

module.exports = { validatePacket };
