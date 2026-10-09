// Validates authored (and reviewed) enrichment packets.
// Usage: node scripts/enrich/validate.cjs bNNN pNN [--reviewed]
//   prints OK, or ERROR/WARN lines per card; exit code 1 on errors.
const fs = require('fs');
const path = require('path');
const common = require('./common.cjs');
const dict = require('../hsk2025/dictionaries.cjs');

const TYPES = ['Nomen', 'Verb', 'Adjektiv', 'Adverb', 'Pronomen', 'Zahlwort', 'Zählwort', 'Präposition', 'Konjunktion', 'Partikel',
  'Interjektion', 'Lautmalerei', 'Affix', 'Ausdruck', 'Phrase', 'Chengyu', 'Redewendung', 'Sprichwort'];
const HAN = /[㐀-鿿豈-﫿]/;
const NUMBER_CHARS = new Set(Array.from('零一二两三四五六七八九十百千万亿半第'));
// Frequent ASCII spellings of umlaut words; authors must write ä/ö/ü/ß.
const UMLAUT_SUBSTITUTES = /\b(fuer|ueber|koennen|muessen|waehrend|moechte|haeufig|spaeter|frueh|natuerlich|Maedchen|Strasse|schoen|hoeren|aehnlich|zurueck|wuerde|fuenf|Schueler|Buero|oeffnen|Groesse|Gruesse|Kaese|Laender|Aerger|faehrt|laeuft|gefaellt|Gefuehl|gruen|Tuer|Gemuese|Fruehstueck)\b/i;

let shared = null;
function context() {
  if (shared) return shared;
  const Pinyin = common.loadPinyin();
  const cedict = dict.loadCedict();
  const allowlist = new Set(common.readJson(path.join(__dirname, 'allowlist.json'), { words: [] }).words);
  const syllabus = common.syllabusLevels();
  let longest = 1;
  for (const word of cedict.keys()) longest = Math.max(longest, Array.from(word).length);
  shared = { Pinyin, cedict, allowlist, syllabus, characters: common.characterLevels(), longest: Math.min(longest, 8) };
  return shared;
}

const syllablesOf = key => key.match(/[a-z]+[1-5]/g) || [];
// One syllable written vs. one dictionary syllable: neutral tone and 一/不 sandhi are tolerated.
function syllableMatches(written, dictionary) {
  if (written === dictionary) return true;
  const base = written.slice(0, -1);
  if (base !== dictionary.slice(0, -1)) return false;
  const tw = written.slice(-1), td = dictionary.slice(-1);
  if (tw === '5' || td === '5') return true;
  return (base === 'yi' && '124'.includes(tw) && '124'.includes(td)) || (base === 'bu' && '24'.includes(tw) && '24'.includes(td));
}
function readingMatches(writtenKeys, cedictKey) {
  const d = syllablesOf(cedictKey);
  return d.length === writtenKeys.length && d.every((s, i) => syllableMatches(writtenKeys[i], s));
}

// Checks one example's pinyin against CC-CEDICT readings of the words in the sentence.
function checkExampleReading(chinese, pinyin, ctx) {
  const { Pinyin, cedict, longest } = ctx;
  const chars = Array.from(chinese).filter(ch => HAN.test(ch));
  const syllables = Pinyin.segment(pinyin, chars.join(''));
  if (syllables.length !== chars.length) {
    return { errors: ['pinyin has ' + syllables.length + ' syllables for ' + chars.length + ' characters (write numbers in characters, one syllable per character)'], warnings: [] };
  }
  const keys = syllables.map(s => Pinyin.toNumeric(s).toLowerCase());
  const n = chars.length;
  const candidates = i => {
    const out = [];
    for (let len = Math.min(longest, n - i); len >= 1; len--) {
      const word = chars.slice(i, i + len).join('');
      const entries = cedict.get(word);
      if (!entries) continue;
      const matching = entries.filter(e => readingMatches(keys.slice(i, i + len), e.key));
      // proper: only a name reads this way (上高 Shànggāo), so 上|高中 wins a tie.
      out.push({ len, word, ok: matching.length > 0, proper: matching.length > 0 && matching.every(e => /^[A-Z]/.test(e.pinyin)), readings: entries.map(e => e.pinyin) });
    }
    return out;
  };
  // best[i]: fewest tokens covering i..n with every token's reading matching (Infinity if impossible).
  const best = new Array(n + 1).fill(Infinity);
  best[n] = 0;
  const options = [];
  for (let i = n - 1; i >= 0; i--) {
    options[i] = candidates(i);
    for (const c of options[i]) if (c.ok && best[i + c.len] + 1 < best[i]) best[i] = best[i + c.len] + 1;
    // Characters CC-CEDICT does not list on their own are accepted as written.
    if (!options[i].some(c => c.len === 1) && best[i + 1] + 1 < best[i]) best[i] = best[i + 1] + 1;
  }
  const errors = [], warnings = [];
  if (best[0] === Infinity) {
    for (let i = 0; i < n; i++) {
      const single = options[i].find(c => c.len === 1);
      if (single && !single.ok && !options[i].some(c => c.ok)) {
        errors.push(chars[i] + ' written ' + syllables[i] + ', CC-CEDICT: ' + single.readings.join(', '));
      }
    }
    if (!errors.length) errors.push('no reading-consistent split of the sentence into dictionary words');
  }
  // A dictionary word whose reading differs, but whose span the consistent split cuts exactly at
  // its edges and divides inside (银行 written yínxíng → 银|行), is a likely wrong reading.
  if (best[0] !== Infinity) {
    const boundaries = new Set([0]);
    for (let i = 0; i < n;) {
      const fits = options[i].filter(c => c.ok && best[i + c.len] === best[i] - 1);
      const next = fits.find(c => !c.proper) || fits[0];
      i += next ? next.len : 1;
      boundaries.add(i);
    }
    for (let i = 0; i < n; i++) {
      if (!boundaries.has(i)) continue;
      for (const c of options[i]) {
        if (c.len < 2 || c.ok || !boundaries.has(i + c.len)) continue;
        // A name only (美的 Měidì, the brand) says nothing about the common words 美 + 的.
        if (c.readings.every(r => /^[A-Z]/.test(r))) continue;
        // Verb + aspect particle (到了 dào le, not the lexicalised dào liǎo) is the normal reading.
        if (/[了着过]$/.test(c.word) && /^(le|zhe|guo)5$/.test(keys[i + c.len - 1])) continue;
        warnings.push(c.word + ' written ' + syllables.slice(i, i + c.len).join(' ') + ', CC-CEDICT: ' + c.readings.join(', '));
      }
    }
  }
  return { errors, warnings };
}

// Beginner levels: words in examples may come from at most one level above the card.
function checkBeginnerVocabulary(chinese, headword, allowed, ctx, ownWords = []) {
  const { syllabus, allowlist, cedict, longest, characters } = ctx;
  const issues = [];
  const runs = chinese.split(/[^㐀-鿿豈-﫿]+/).filter(Boolean);
  const known = word => syllabus.has(word) || allowlist.has(word);
  // Why a token is not acceptable at this level, or null when it is.
  function problem(token) {
    // The card's own word, also inside a compound (天 in 今天, 天气), is always allowed.
    if (token.includes(headword)) return null;
    // So are its parts when a separable verb is split (起不来床, 生什么病).
    if (token.length === 1 && headword.includes(token)) return null;
    // And the card's own measure words (一支铅笔).
    if (ownWords.includes(token)) return null;
    if (allowlist.has(token) || Array.from(token).every(ch => NUMBER_CHARS.has(ch))) return null;
    if (syllabus.has(token)) {
      return syllabus.get(token) <= allowed ? null : token + ' (HSK ' + (syllabus.get(token) === 7 ? '7–9' : syllabus.get(token)) + ')';
    }
    // A single character that is not a syllabus word (没) counts by the official character list.
    if (token.length === 1) return characters.has(token) && characters.get(token) <= allowed ? null : token + ' (nicht im HSK-Wortschatz)';
    return token + ' (nicht im HSK-Wortschatz)';
  }
  // The split that explains the sentence best: allowed words cost 1, anything else 10, so
  // 我不知道 is 我|不|知道 (not 不知|道) and 洗衣服 is 洗|衣服 (not 洗衣|服).
  for (const run of runs) {
    const chars = Array.from(run);
    const n = chars.length;
    const cost = new Array(n + 1).fill(Infinity), choice = new Array(n + 1);
    cost[n] = 0;
    for (let i = n - 1; i >= 0; i--) {
      for (let len = Math.min(longest, n - i); len >= 1; len--) {
        const token = chars.slice(i, i + len).join('');
        // Multi-character tokens are dictionary words or the headword itself (never arbitrary strings).
        if (len > 1 && !known(token) && !cedict.has(token) && token !== headword) continue;
        // A character accepted only through the character list costs 6, so two of them never
        // undercut a real word above the level (复杂 must not pass as 复|杂).
        const charFallback = len === 1 && !syllabus.has(token) && !allowlist.has(token) && !token.includes(headword);
        const c = (problem(token) ? 10 : charFallback ? 6 : 1) + cost[i + len];
        if (c < cost[i]) { cost[i] = c; choice[i] = token; }
      }
    }
    for (let i = 0; i < n;) {
      const token = choice[i];
      const p = problem(token);
      if (p) issues.push(p);
      i += Array.from(token).length;
    }
  }
  return Array.from(new Set(issues));
}
// Fewest-parts split of a token into lexicon words, or null.
function splitInto(token, lexicon) {
  const chars = Array.from(token);
  const best = new Array(chars.length + 1).fill(null);
  best[0] = [];
  for (let i = 1; i <= chars.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = chars.slice(j, i).join('');
      if (!best[j] || !lexicon.has(word)) continue;
      const candidate = best[j].concat([word]);
      if (!best[i] || candidate.length < best[i].length) best[i] = candidate;
    }
  }
  return best[chars.length];
}

function containsHeadword(example, card, merged) {
  const text = example.chinese.replace(/[，。！？、；：,.!?;:“”"'（）()\s]/g, '');
  const word = card.word.replace(/[，。！？、；：,.!?;:\s…]/g, '');
  if (text.includes(word)) return true;
  if ((card.variants || []).some(v => text.includes(v))) return true;
  // Separable verbs (帮忙 → 帮他的忙): characters in order with a short gap.
  // Every occurrence of the first character counts (上了三个小时的网 after 晚上).
  if ((merged.separable || card.type === 'Verb') && splitCore(word)) return showsSplit(example, word);
  return false;
}

// The two characters a separable verb splits into; erhua words split before the 儿 (聊天儿 → 聊…天).
function splitCore(word) {
  const chars = Array.from(word.replace(/(?<=..)儿$/, ''));
  return chars.length === 2 ? chars : null;
}

// True when a two-character separable verb appears split in the sentence (睡了一个好觉, 帮他的忙).
function showsSplit(example, word) {
  const text = example.chinese.replace(/[，。！？、；：,.!?;:“”"'（）()\s]/g, '');
  const chars = splitCore(word);
  if (!chars) return false;
  for (let a = text.indexOf(chars[0]); a !== -1; a = text.indexOf(chars[0], a + 1)) {
    const b = text.indexOf(chars[1], a + 1);
    if (b > a + 1 && b - a <= 7) return true;
  }
  return false;
}

// Validates one card; `card` is the input card, `authored` the merged authored content.
function checkCard(card, authored, ctx) {
  const errors = [], warnings = [];
  if (!authored) return { errors: ['missing in output'], warnings };
  if (card.meaningStatus === 'draft' && !(authored.meaning && authored.meaning.trim())) errors.push('meaning required (draft gloss must be reviewed)');
  if (authored.meaning !== undefined && (typeof authored.meaning !== 'string' || !authored.meaning.trim() || HAN.test(authored.meaning))) errors.push('meaning must be German text');
  if (authored.type !== undefined) {
    if (!TYPES.includes(authored.type)) errors.push('type must be one of ' + TYPES.join(', '));
    else if (authored.type !== card.type && !authored.typeReason) errors.push('typeReason required when changing type');
  }
  if (typeof authored.notes !== 'string' || authored.notes.trim().length < 80) errors.push('notes: German usage note of at least 80 characters required');
  if (authored.separable !== undefined && typeof authored.separable !== 'boolean') errors.push('separable must be true or false');
  const examples = authored.examples;
  if (!Array.isArray(examples) || examples.length < 2 || examples.length > 3) errors.push('2–3 examples required');
  const seen = new Set();
  const allowed = { HSK1: 2, HSK2: 3, HSK3: 4 }[card.level];
  (examples || []).forEach((ex, i) => {
    const label = 'example ' + (i + 1);
    if (!ex || !ex.chinese || !ex.pinyin || !ex.german) { errors.push(label + ': chinese, pinyin and german required'); return; }
    if (seen.has(ex.chinese)) errors.push(label + ': duplicate sentence');
    seen.add(ex.chinese);
    if (HAN.test(ex.pinyin)) errors.push(label + ': pinyin contains characters');
    if (HAN.test(ex.german)) errors.push(label + ': German translation contains Chinese characters');
    if (!/[。！？]$/.test(ex.chinese.trim())) warnings.push(label + ': sentence should end with 。！？');
    if (!containsHeadword(ex, card, authored)) errors.push(label + ': headword ' + card.word + ' missing');
    const reading = checkExampleReading(ex.chinese, ex.pinyin, ctx);
    reading.errors.forEach(e => errors.push(label + ' pinyin: ' + e));
    reading.warnings.forEach(w => warnings.push(label + ' pinyin: ' + w));
    if (allowed) {
      const issues = checkBeginnerVocabulary(ex.chinese, card.word, allowed, ctx, (card.measureWords || []).map(m => m.word || m));
      if (issues.length) {
        const message = label + ': words above HSK ' + allowed + ': ' + issues.join(', ');
        if (allowed <= 3) errors.push(message); else warnings.push(message);
      }
    }
  });
  const separable = authored.separable !== undefined ? authored.separable : card.separable;
  if (separable === true && splitCore(card.word) && Array.isArray(examples) && !examples.some(ex => ex && ex.chinese && showsSplit(ex, card.word)))
    errors.push('separable verb: at least one example must show the split form (睡了一个好觉, 帮他的忙)');
  const german = [authored.meaning, authored.notes, ...(examples || []).map(e => e && e.german)].filter(Boolean).join(' ');
  const umlaut = german.match(UMLAUT_SUBSTITUTES);
  if (umlaut) warnings.push('write umlauts: "' + umlaut[0] + '"');
  // Existing examples that disappeared should be listed in changedOriginals.
  const kept = new Set((examples || []).map(e => e && e.chinese));
  const dropped = (card.examples || []).map(e => e.chinese).filter(c => !kept.has(c) && !(authored.changedOriginals || []).includes(c));
  if (dropped.length) warnings.push('existing example not kept and not in changedOriginals: ' + dropped.join(' | '));
  return { errors, warnings };
}

// Reviewer fixes override authored fields.
function mergeReview(authored, review) {
  if (!review || review.verdict !== 'fixed' || !review.fixes) return authored;
  return Object.assign({}, authored, review.fixes);
}

function validatePacket(batch, packet, options = {}) {
  const dir = path.join(common.WORK, batch);
  const input = JSON.parse(fs.readFileSync(path.join(dir, 'input', packet + '.json'), 'utf8'));
  const authoredFile = path.join(dir, 'authored', packet + '.json');
  if (!fs.existsSync(authoredFile)) return { ok: false, lines: ['ERROR ' + packet + ': authored/' + packet + '.json missing'], cards: [] };
  const authored = JSON.parse(fs.readFileSync(authoredFile, 'utf8'));
  const reviewed = options.reviewed ? JSON.parse(fs.readFileSync(path.join(dir, 'reviewed', packet + '.json'), 'utf8')) : null;
  const byId = new Map(authored.map(a => [a.id, a]));
  const reviewById = new Map((reviewed || []).map(r => [r.id, r]));
  const ctx = context();
  const lines = [], cards = [];
  let errorCount = 0;
  if (authored.length !== input.length) { lines.push('ERROR ' + packet + ': ' + authored.length + ' objects for ' + input.length + ' cards'); errorCount++; }
  for (const card of input) {
    if (reviewed && !reviewById.has(card.id)) { lines.push('ERROR ' + card.id + ': no reviewer verdict'); errorCount++; }
    const merged = mergeReview(byId.get(card.id), reviewById.get(card.id));
    const result = checkCard(card, merged, ctx);
    result.errors.forEach(e => lines.push('ERROR ' + card.id + ' ' + card.word + ': ' + e));
    result.warnings.forEach(w => lines.push('WARN  ' + card.id + ' ' + card.word + ': ' + w));
    errorCount += result.errors.length;
    cards.push({ card, merged, review: reviewById.get(card.id) || null });
  }
  return { ok: errorCount === 0, lines, cards };
}

module.exports = { validatePacket, checkCard, checkExampleReading, checkBeginnerVocabulary, mergeReview, context, TYPES };

if (require.main === module) {
  const [batch, packet] = process.argv.slice(2);
  const result = validatePacket(batch, packet, { reviewed: process.argv.includes('--reviewed') });
  if (result.lines.length) console.log(result.lines.join('\n'));
  console.log(result.ok ? 'OK ' + packet : 'FAILED ' + packet);
  process.exitCode = result.ok ? 0 : 1;
}
