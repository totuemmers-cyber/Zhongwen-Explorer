// ============================================================
// Quiz & Test System for Zhongwen Explorer
// ============================================================
(function () {
  'use strict';

  // speech: needs the browser's speech synthesis; input: answered by typing instead of choosing.
  var QUESTION_TYPES = {
    vocabMeaning:    { id: 'vocabMeaning',    group: 'Vokabeln',      label: 'Bedeutung erkennen',  icon: '意' },
    vocabPinyin:     { id: 'vocabPinyin',     group: 'Vokabeln',      label: 'Pinyin erkennen',     icon: '拼' },
    vocabReverse:    { id: 'vocabReverse',    group: 'Vokabeln',      label: 'Wort erkennen',       icon: '词' },
    vocabContext:    { id: 'vocabContext',    group: 'Vokabeln',      label: 'Kontextfrage',        icon: '文' },
    hanziMeaning:    { id: 'hanziMeaning',    group: 'Hanzi',         label: 'Hanzi-Bedeutung',     icon: '字' },
    hanziPinyin:     { id: 'hanziPinyin',     group: 'Hanzi',         label: 'Hanzi-Pinyin',        icon: '音' },
    hanziRadical:    { id: 'hanziRadical',    group: 'Hanzi',         label: 'Radikal erkennen',    icon: '部' },
    toneRecognition: { id: 'toneRecognition', group: 'Töne & Pinyin', label: 'Welcher Ton?',        icon: '声' },
    listening:       { id: 'listening',       group: 'Töne & Pinyin', label: 'Was hörst du?',       icon: '听', speech: true },
    pinyinTyping:    { id: 'pinyinTyping',    group: 'Töne & Pinyin', label: 'Pinyin eingeben',     icon: '键', input: true },
    grammarMeaning:  { id: 'grammarMeaning',  group: 'Grammatik',     label: 'Grammatik-Bedeutung', icon: '义' },
    grammarCloze:    { id: 'grammarCloze',    group: 'Grammatik',     label: 'Lückentext',          icon: '穴' },
    grammarFormation:{ id: 'grammarFormation', group: 'Grammatik',    label: 'Satzbildung',         icon: '形' },
    measureWord:     { id: 'measureWord',     group: 'Zählwörter',    label: 'Zählwort einsetzen',  icon: '量' }
  };

  var TYPE_IDS = Object.keys(QUESTION_TYPES);
  var CLOZE_TYPES = { vocabContext: true, grammarCloze: true };

  // Questions of the Lesen/Hören units (comprehension-data.js); asked in the mock exam and replayed as mistakes.
  var UNIT_TYPES = {
    readingUnit:   { id: 'readingUnit',   label: 'Lesetext', skill: 'reading' },
    listeningUnit: { id: 'listeningUnit', label: 'Hörtext',  skill: 'listening', speech: true }
  };
  function typeInfo(typeId) { return QUESTION_TYPES[typeId] || UNIT_TYPES[typeId]; }

  // Mock exam per level, like the HSK: Hören and Lesen with whole texts (3 questions each) plus single items,
  // then Wortschatz (HSK 1–2) or Schreiben-nah (from HSK 3). Units × 3 + items = questions; minutes per section.
  var EXAM_PLAN = {
    //          Hören: units, items, min   Lesen: units, items, min   Wortschatz / Schreiben-nah: items, min
    HSK1:     { listen: [3, 2, 10],         read: [3, 3, 14],          extra: [5, 6] },
    HSK2:     { listen: [3, 3, 12],         read: [4, 2, 16],          extra: [6, 7] },
    HSK3:     { listen: [3, 3, 12],         read: [4, 3, 20],          extra: [8, 10] },
    HSK4:     { listen: [4, 2, 15],         read: [5, 3, 25],          extra: [9, 12] },
    HSK5:     { listen: [4, 3, 18],         read: [6, 3, 30],          extra: [10, 14] },
    HSK6:     { listen: [5, 2, 20],         read: [6, 4, 35],          extra: [11, 16] },
    'HSK7-9': { listen: [6, 2, 25],         read: [7, 5, 40],          extra: [14, 20] }
  };
  var SECTION_ITEMS = {
    listen: ['listening'],
    read: ['vocabContext', 'grammarCloze'],
    vocabulary: ['vocabMeaning', 'vocabPinyin', 'hanziMeaning'],
    writing: ['pinyinTyping', 'measureWord', 'grammarCloze', 'grammarFormation']
  };
  var LISTENING_SECTION = 'Hören';

  // Practice offers every level incl. Zusatz; the mock exam only the syllabus levels.
  var PROFILE = window.LANG_PROFILE || {};
  var EXAM_LEVELS = (PROFILE.levels || ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9']).filter(function (lv) { return EXAM_PLAN[lv]; });
  var LEVELS = EXAM_LEVELS.concat(PROFILE.extraLevel ? [PROFILE.extraLevel] : []);

  function levelLabel(level) {
    if (level === 'HSK7-9') return 'HSK 7–9';
    return String(level || '').replace(/^HSK(\d)$/, 'HSK $1');
  }
  function levelClass(level) { return String(level).toLowerCase(); }

  function speechAvailable() {
    return !!(window.speechSynthesis && typeof window.SpeechSynthesisUtterance === 'function' && window.app && typeof window.app.speakCN === 'function' &&
      (typeof window.app.hasChineseVoice !== 'function' || window.app.hasChineseVoice()));
  }
  function typeAvailable(typeId) { var t = typeInfo(typeId); return !!t && (!t.speech || speechAvailable()); }

  // The sections of a level's exam; Hören is left out without speech synthesis.
  function examPlan(level) {
    var plan = EXAM_PLAN[level];
    if (!plan) return null;
    var pinyinLevel = EXAM_LEVELS.indexOf(level) < 2;
    var all = [
      { name: LISTENING_SECTION, skill: 'listening', units: plan.listen[0], items: plan.listen[1], time: plan.listen[2], types: SECTION_ITEMS.listen },
      { name: 'Lesen', skill: 'reading', units: plan.read[0], items: plan.read[1], time: plan.read[2], types: SECTION_ITEMS.read },
      { name: pinyinLevel ? 'Wortschatz' : 'Schreiben-nah', units: 0, items: plan.extra[0], time: plan.extra[1], types: pinyinLevel ? SECTION_ITEMS.vocabulary : SECTION_ITEMS.writing }
    ];
    var speech = speechAvailable();
    return {
      sections: all.filter(function (s) { return speech || s.skill !== 'listening'; }),
      skipped: speech ? [] : [LISTENING_SECTION]
    };
  }
  function planTotals(plan) {
    var totals = { questions: 0, minutes: 0 };
    plan.sections.forEach(function (s) { totals.questions += s.units * 3 + s.items; totals.minutes += s.time; });
    return totals;
  }

  // === DATA ACCESSORS ===
  // Draft meanings (not yet reviewed) are never used as quiz answers or distractors.
  function isQuizReady(v) { return v.meaningStatus !== 'draft'; }

  function sectionItems(name) {
    var sec = window.app && window.app.sections[name];
    return sec ? sec.allItems : [];
  }

  function getVocabByLevel(level) { return getVocabIndex().byLevel[level] || []; }

  function getAllVocab() { return getVocabIndex().all; }

  function getHanziByLevel(level) {
    return sectionItems('hanzi').filter(function (k) { return k.level === level && k.readings && k.readings.length; });
  }

  function getGrammarByLevel(level) {
    // Points still being worked out (no meaning yet) stay out of the quiz.
    return sectionItems('grammar').filter(function (g) { return g.level === level && g.meaning; });
  }

  function getMeasureWords() {
    return sectionItems('measurewords').filter(function (m) { return m.classifier && m.meaning; });
  }

  // === HELPERS ===
  var BLANK = '＿＿＿';
  var SLOT = '＿';
  var HAN_RE = /[㐀-䶿一-鿿豈-﫿]/;
  var HAN_WORD_RE = /^[㐀-䶿一-鿿豈-﫿]+$/;
  var HAN_LIST_RE = /[㐀-䶿一-鿿豈-﫿]+(?:\s*[\/／、]\s*[㐀-䶿一-鿿豈-﫿]+)*/g;
  var ZH_RUN_RE = /[　-〿㐀-䶿一-鿿豈-﫿＀-￯]+/g;
  var LATIN_RE = /[A-Za-zÀ-ɏ]/;
  var TONE_RE = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜńňǹḿ̀́̄̌]/;
  var TONE_NAMES = ['', '1. Ton', '2. Ton', '3. Ton', '4. Ton', 'neutraler Ton'];

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function normalizeAnswer(text) {
    return String(text || '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('de');
  }

  function pinyinKey(text) {
    return String(text || '').normalize('NFC').toLowerCase().replace(/[\s'’·-]/g, '');
  }

  function hasTone(pinyin) { return TONE_RE.test(String(pinyin || '').normalize('NFD')) || TONE_RE.test(pinyin); }

  function countOccurrences(text, needle) {
    if (!text || !needle) return 0;
    var count = 0, from = 0, idx;
    while ((idx = text.indexOf(needle, from)) !== -1) { count++; from = idx + needle.length; }
    return count;
  }

  // Splits a gloss list at separators outside brackets and „quotes“.
  function splitOutside(text, separators) {
    var parts = [], depth = 0, current = '';
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if ('(（[„'.indexOf(ch) !== -1) depth++;
      else if (')）]“'.indexOf(ch) !== -1 && depth > 0) depth--;
      if (depth === 0 && separators.indexOf(ch) !== -1) { parts.push(current); current = ''; continue; }
      current += ch;
    }
    parts.push(current);
    return parts.map(function (p) { return p.trim(); }).filter(Boolean);
  }

  function firstGloss(meaning) { return splitOutside(String(meaning || ''), ';；')[0] || ''; }

  var glossCache = {};
  // Comparable single senses of a meaning: "Papa, Vater (umgangssprachlich)" → papa, vater.
  function glossKeys(meaning) {
    meaning = String(meaning || '');
    if (glossCache[meaning]) return glossCache[meaning];
    var keys = [normalizeAnswer(meaning)];
    splitOutside(meaning, ';；,，').forEach(function (g) {
      var key = normalizeAnswer(g.replace(/\([^)]*\)|（[^）]*）/g, ''));
      if (key && keys.indexOf(key) === -1) keys.push(key);
    });
    glossCache[meaning] = keys;
    return keys;
  }

  function sharesGloss(keys, meaning) {
    return glossKeys(meaning).some(function (k) { return keys.indexOf(k) !== -1; });
  }

  // Head words of a grammar meaning without brackets and ellipses: "wenn …, dann … (gesprochen)" → wenn, dann.
  var STOP_WORDS = { etwas: 1, jemand: 1, jemandem: 1, jemanden: 1, einer: 1, eines: 1, einem: 1, einen: 1, oder: 1, nicht: 1, sein: 1, werden: 1, durch: 1, auch: 1, noch: 1, eine: 1, dass: 1, wird: 1, sich: 1, nach: 1, über: 1, unter: 1, beim: 1, wenn: 1, dann: 1, aber: 1, mehr: 1, sehr: 1, ganz: 1, schon: 1 };
  function meaningHeads(meaning) {
    return String(meaning || '').replace(/\([^)]*\)|（[^）]*）|„[^“]*“/g, ' ').split(/[;；,，\/:]/).map(function (part) {
      return normalizeAnswer(part.replace(/[…."'!?–—-]/g, ' '));
    }).filter(function (h) { return h.length > 1; });
  }
  function meaningWords(meaning) {
    var words = normalizeAnswer(meaning).match(/[a-zäöüß]{4,}/g) || [];
    return words.filter(function (w, i) { return !STOP_WORDS[w] && words.indexOf(w) === i; });
  }
  // Word pairs with a content word: "weder X noch Y" and "weder X noch Y ist richtig" share "weder x".
  function meaningPairs(meaning) {
    var words = normalizeAnswer(String(meaning || '').replace(/\([^)]*\)|（[^）]*）/g, ' ')).match(/[a-zäöüß0-9]+/g) || [];
    var pairs = [];
    for (var i = 0; i + 1 < words.length; i++) {
      if ([words[i], words[i + 1]].some(function (w) { return w.length >= 4 && !STOP_WORDS[w]; })) pairs.push(words[i] + ' ' + words[i + 1]);
    }
    return pairs;
  }
  function nearlySameMeaning(a, b) {
    if (sharesGloss(glossKeys(a), b)) return true;
    var headsB = meaningHeads(b);
    if (meaningHeads(a).some(function (h) { return headsB.indexOf(h) !== -1; })) return true;
    var pairsB = meaningPairs(b);
    if (meaningPairs(a).some(function (p) { return pairsB.indexOf(p) !== -1; })) return true;
    var wa = meaningWords(a), wb = meaningWords(b);
    if (!wa.length || !wb.length) return false;
    var shared = wa.filter(function (w) { return wb.indexOf(w) !== -1; }).length;
    return shared / (wa.length + wb.length - shared) >= 0.5;
  }

  // === PINYIN ===
  // Syllables of a Han-only word as { text, base (toneless, ü as v), tone } or null when they do not align.
  var syllableCache = {};
  function wordSyllables(word, pinyin) {
    if (!pinyin || !HAN_WORD_RE.test(word || '') || !window.Pinyin) return null;
    var key = word + '\u0001' + pinyin;
    if (syllableCache.hasOwnProperty(key)) return syllableCache[key];
    var parts = window.Pinyin.align(word, pinyin);
    var result = null;
    if (parts && parts.length === Array.from(word).length && parts.every(function (p) { return p.pinyin; })) {
      result = parts.map(function (p) {
        var numeric = window.Pinyin.toNumeric(p.pinyin);
        return { text: p.pinyin, base: numeric.slice(0, -1), tone: Number(numeric.slice(-1)) };
      });
      if (!result.every(function (s) { return /^[a-z]+$/.test(s.base); })) result = null;
    }
    syllableCache[key] = result;
    return result;
  }

  function toneless(syllable) { return window.Pinyin.toNumeric(syllable).replace(/[1-5]/g, ''); }

  // What a listener hears: 一/不 in any written tone sandhi, and 3-3 spoken as 2-3.
  function spokenForm(word, syls, tones) {
    var chars = Array.from(word);
    var out = syls.map(function (s, i) {
      var tone = tones ? tones[i] : s.tone;
      if (chars[i] === '一' && s.base === 'yi' && tone !== 3 && tone !== 5) tone = 1;
      if (chars[i] === '不' && s.base === 'bu' && (tone === 2 || tone === 4)) tone = 4;
      return { base: s.base, tone: tone };
    });
    for (var i = 0; i + 1 < out.length; i++) if (out[i].tone === 3 && out[i + 1].tone === 3) out[i].tone = 2;
    return out;
  }

  // Same syllables and tones; a neutral tone matches any tone (dōngxi / dōngxī).
  function soundsAlike(a, b) {
    return a.length === b.length && a.every(function (s, i) {
      return s.base === b[i].base && (s.tone === b[i].tone || s.tone === 5 || b[i].tone === 5);
    });
  }

  function markSyllable(base, tone, like) {
    var marked = window.Pinyin.toMarked(base + tone);
    if (like && like.charAt(0) !== like.charAt(0).toLowerCase()) marked = marked.charAt(0).toUpperCase() + marked.slice(1);
    return marked;
  }

  // The written pinyin with other tones, separators and capitals kept.
  function withTones(pinyin, syls, tones) {
    var out = '', cursor = 0;
    for (var i = 0; i < syls.length; i++) {
      var at = pinyin.indexOf(syls[i].text, cursor);
      if (at === -1) return null;
      out += pinyin.slice(cursor, at) + (tones[i] === syls[i].tone ? syls[i].text : markSyllable(syls[i].base, tones[i], syls[i].text));
      cursor = at + syls[i].text.length;
    }
    return out + pinyin.slice(cursor);
  }

  function toneDescription(syls) {
    return syls.map(function (s) { return s.base === 'r' ? 'Erhua-r' : TONE_NAMES[s.tone]; }).join(' + ');
  }

  // Every way a written word can be read: its vocabulary entries, pinyinAlt and, for one character, its readings.
  function wordSounds(word) {
    var index = getVocabIndex();
    index.sounds = index.sounds || {};
    if (index.sounds[word]) return index.sounds[word];
    var spellings = [];
    (index.byWord[word] || []).forEach(function (v) { spellings = spellings.concat([v.pinyin], v.pinyinAlt || []); });
    var hanzi = Array.from(word).length === 1 && getHanziIndex().byChar[word];
    if (hanzi) hanzi.readings.forEach(function (r) { spellings.push(r.pinyin); });
    var sounds = [], seen = {};
    spellings.forEach(function (p) {
      var syls = p && !seen[pinyinKey(p)] && wordSyllables(word, p);
      if (p) seen[pinyinKey(p)] = true;
      if (syls) sounds.push({ key: pinyinKey(p), form: spokenForm(word, syls) });
    });
    index.sounds[word] = sounds;
    return sounds;
  }

  // Readings of the same written word other than the asked one.
  function otherSounds(item) {
    var own = pinyinKey(item.pinyin);
    return wordSounds(item.word).filter(function (s) { return s.key !== own; }).map(function (s) { return s.form; });
  }

  var INITIALS = ['zh', 'ch', 'sh', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'r', 'z', 'c', 's', 'y', 'w'];
  var NEAR_INITIALS = ['bp', 'dt', 'gk', 'jqx', 'zh ch sh r', 'zcs', 'nl', 'fh', 'zh z', 'ch c', 'sh s'].map(function (g) { return g.indexOf(' ') !== -1 ? g.split(' ') : g.split(''); });
  var NEAR_FINALS = [['an', 'ang'], ['en', 'eng'], ['in', 'ing'], ['ian', 'iang'], ['uan', 'uang'], ['ou', 'uo'], ['ai', 'ei'], ['ie', 'ei'], ['iu', 'ou'], ['ui', 'ei'], ['un', 'en'], ['ong', 'eng']];
  function splitSyllable(base) {
    for (var i = 0; i < INITIALS.length; i++) {
      if (base.indexOf(INITIALS[i]) === 0 && base.length > INITIALS[i].length) return [INITIALS[i], base.slice(INITIALS[i].length)];
    }
    return ['', base];
  }
  function nearIn(groups, a, b) { return groups.some(function (g) { return g.indexOf(a) !== -1 && g.indexOf(b) !== -1; }); }
  // 0: one sound apart (b/p, an/ang), 1: same initial or final, null: unrelated.
  function syllableDistance(a, b) {
    if (a === b) return null;
    var x = splitSyllable(a), y = splitSyllable(b);
    if ((x[1] === y[1] && nearIn(NEAR_INITIALS, x[0], y[0])) || (x[0] === y[0] && nearIn(NEAR_FINALS, x[1], y[1]))) return 0;
    if (x[1] === y[1] || x[0] === y[0]) return 1;
    return null;
  }

  // Indexes of the whole inventory (rebuilt when the loaded data changes).
  var vocabIndex = null;
  function getVocabIndex() {
    var items = sectionItems('vocab');
    if (vocabIndex && vocabIndex.items === items && vocabIndex.size === items.length) return vocabIndex;
    var all = items.filter(function (v) { return v.word && v.meaning && isQuizReady(v); });
    vocabIndex = { items: items, size: items.length, all: all, byLevel: {}, byWord: {}, byGloss: {}, charUses: null, mainReadings: {} };
    all.forEach(function (v) {
      (vocabIndex.byLevel[v.level] = vocabIndex.byLevel[v.level] || []).push(v);
      (vocabIndex.byWord[v.word] = vocabIndex.byWord[v.word] || []).push(v);
      glossKeys(v.meaning).forEach(function (k) { (vocabIndex.byGloss[k] = vocabIndex.byGloss[k] || []).push(v); });
    });
    return vocabIndex;
  }

  var hanziIndex = null;
  function getHanziIndex() {
    var all = sectionItems('hanzi');
    if (hanziIndex && hanziIndex.size === all.length) return hanziIndex;
    hanziIndex = { size: all.length, byChar: {}, toneless: [], syllables: {} };
    all.forEach(function (k) {
      hanziIndex.byChar[k.hanzi] = k;
      (k.readings || []).forEach(function (r) {
        if (!r.pinyin) return;
        if (!hasTone(r.pinyin)) {
          if (r.pinyin.length > 1 && hanziIndex.toneless.indexOf(r.pinyin) === -1) hanziIndex.toneless.push(r.pinyin);
          return;
        }
        var numeric = window.Pinyin ? window.Pinyin.toNumeric(r.pinyin) : '';
        if (!/^[a-z]+[1-4]$/.test(numeric)) return;
        var base = numeric.slice(0, -1);
        (hanziIndex.syllables[base] = hanziIndex.syllables[base] || {})[numeric.slice(-1)] = r.pinyin.normalize('NFC').toLowerCase();
      });
    });
    return hanziIndex;
  }

  // The syllable each character has in the vocabulary words (with their level), for reading frequencies.
  function getCharUses() {
    var index = getVocabIndex();
    if (index.charUses) return index.charUses;
    var uses = {};
    getAllVocab().forEach(function (v) {
      var level = LEVELS.indexOf(v.level);
      var syls = level !== -1 && wordSyllables(v.word, v.pinyin);
      if (!syls) return;
      Array.from(v.word).forEach(function (ch, i) {
        (uses[ch] = uses[ch] || []).push({ level: level, syllable: syls[i].text });
      });
    });
    index.charUses = uses;
    return uses;
  }

  // The reading a learner meets most often in the character's words up to the level (ties: dictionary order).
  function mainReading(k, level) {
    var index = getVocabIndex();
    var cacheKey = k.hanzi + '\u0001' + level;
    if (index.mainReadings[cacheKey]) return index.mainReadings[cacheKey];
    var max = LEVELS.indexOf(level);
    var keys = k.readings.map(function (r) { return pinyinKey(r.pinyin); });
    var bases = k.readings.map(function (r) { return toneless(r.pinyin); });
    var counts = k.readings.map(function () { return 0; });
    (getCharUses()[k.hanzi] || []).forEach(function (use) {
      if (use.level > max) return;
      var i = keys.indexOf(pinyinKey(use.syllable));
      if (i === -1) {
        // Neutral-tone and sandhi spellings (爸爸 bàba, 一定 yídìng) count for the only reading with that syllable.
        var base = toneless(use.syllable);
        var matches = bases.filter(function (b) { return b === base; }).length;
        if (matches === 1) i = bases.indexOf(base);
      }
      if (i !== -1) counts[i]++;
    });
    var best = 0;
    counts.forEach(function (c, i) { if (c > counts[best]) best = i; });
    index.mainReadings[cacheKey] = k.readings[best];
    return k.readings[best];
  }

  // Up to `count` wrong options from `pool`: valid ones only, distinct from the answer and each other.
  // rank(c) orders candidates (lower first, null excludes); preferred(c) is the two-tier shorthand;
  // apart(a, b) keeps out options too close to one already chosen (two near-synonyms would rule each other out).
  function pickDistractors(pool, count, opts) {
    var keyOf = opts.key || normalizeAnswer;
    var seen = {};
    (opts.taken || []).forEach(function (t) { seen[keyOf(t)] = true; });
    var tiers = [];
    pool.forEach(function (c) {
      var rank = opts.rank ? opts.rank(c) : opts.preferred && !opts.preferred(c) ? 1 : 0;
      if (rank == null) return;
      (tiers[rank] = tiers[rank] || []).push(c);
    });
    var order = [];
    tiers.forEach(function (tier) { order = order.concat(shuffle(tier)); });
    var out = [];
    for (var i = 0; i < order.length && out.length < count; i++) {
      var text = opts.text(order[i]);
      var key = keyOf(text);
      if (!text || !key || seen[key] || (opts.valid && !opts.valid(order[i]))) continue;
      if (opts.apart && out.some(function (o) { return !opts.apart(o, text); })) continue;
      seen[key] = true;
      out.push(text);
    }
    return out;
  }

  // Four distinct options or nothing: the generator then retries with another item.
  function buildChoices(correctAnswer, distractors, keyFn) {
    var keyOf = keyFn || normalizeAnswer;
    var correctKey = keyOf(correctAnswer);
    if (!correctKey) return null;
    var seen = {};
    seen[correctKey] = true;
    var wrong = (distractors || []).filter(function (answer) {
      var key = keyOf(answer);
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
    if (wrong.length < 3) return null;
    var shuffled = shuffle([correctAnswer].concat(wrong.slice(0, 3)));
    return { choices: shuffled, correctIndex: shuffled.indexOf(correctAnswer) };
  }

  function getLevelPool(getByLevel, level) {
    var pool = getByLevel(level);
    if (pool.length < 10) {
      var idx = LEVELS.indexOf(level);
      if (idx > 0) pool = pool.concat(getByLevel(LEVELS[idx - 1]));
      if (idx < LEVELS.length - 1) pool = pool.concat(getByLevel(LEVELS[idx + 1]));
    }
    return pool;
  }

  function question(fields, c, meta) {
    fields.choices = c.choices;
    fields.correctIndex = c.correctIndex;
    fields.meta = meta;
    return fields;
  }

  // === QUESTION GENERATORS ===
  function genVocabMeaning(level) {
    var pool = getLevelPool(getVocabByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    // Every sense of the written word counts as correct (other readings included).
    var validKeys = [];
    (getVocabIndex().byWord[item.word] || [item]).forEach(function (v) {
      glossKeys(v.meaning).forEach(function (k) { if (validKeys.indexOf(k) === -1) validKeys.push(k); });
    });
    var distractors = pickDistractors(pool, 3, {
      text: function (v) { return v.meaning; },
      taken: [item.meaning],
      valid: function (v) { return v.word !== item.word && !sharesGloss(validKeys, v.meaning); },
      apart: function (a, b) { return !sharesGloss(glossKeys(a), b); }
    });
    var c = buildChoices(item.meaning, distractors);
    if (!c) return null;
    return question({
      type: 'vocabMeaning', level: level,
      prompt: 'Was bedeutet dieses Wort?',
      promptMain: item.word,
      promptSub: item.pinyin,
      explanation: item.word + ' (' + item.pinyin + ') = ' + item.meaning
    }, c, { source: item.id || item.word, word: item.word, validKeys: validKeys });
  }

  function genVocabPinyin(level) {
    var pool = getLevelPool(getVocabByLevel, level).filter(function (v) { return v.pinyin && v.word !== v.pinyin; });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    // Readings of the same word (and, for single characters, of the character) are not wrong.
    var valid = (getVocabIndex().byWord[item.word] || [item]).map(function (v) { return pinyinKey(v.pinyin); });
    var hanzi = item.word.length === 1 && getHanziIndex().byChar[item.word];
    if (hanzi) hanzi.readings.forEach(function (r) { valid.push(pinyinKey(r.pinyin)); });
    var distractors = pickDistractors(pool, 3, {
      text: function (v) { return v.pinyin; },
      key: pinyinKey,
      taken: [item.pinyin],
      valid: function (v) { return v.word !== item.word && valid.indexOf(pinyinKey(v.pinyin)) === -1; },
      preferred: function (v) { return v.word.length === item.word.length; }
    });
    var c = buildChoices(item.pinyin, distractors, pinyinKey);
    if (!c) return null;
    return question({
      type: 'vocabPinyin', level: level,
      prompt: 'Wie lautet das Pinyin für dieses Wort?',
      promptMain: item.word,
      promptSub: item.meaning,
      explanation: item.word + ' wird ' + item.pinyin + ' ausgesprochen'
    }, c, { source: item.id || item.word, word: item.word, validPinyin: valid });
  }

  // Words that also mean what the prompt says (shared gloss) or sound the same are no distractors.
  function wordDistractorRules(item) {
    var index = getVocabIndex();
    var excluded = {};
    excluded[item.word] = true;
    glossKeys(item.meaning).forEach(function (k) {
      (index.byGloss[k] || []).forEach(function (v) { excluded[v.word] = true; });
    });
    var sound = pinyinKey(item.pinyin);
    // Any reading of the option counts (长 zhǎng is also cháng like 常).
    return {
      excluded: excluded,
      valid: function (v) {
        return !excluded[v.word] && !(index.byWord[v.word] || [v]).some(function (e) { return pinyinKey(e.pinyin) === sound; });
      }
    };
  }

  function genVocabReverse(level) {
    var pool = getLevelPool(getVocabByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    if (item.meaning.indexOf(item.word) !== -1) return null;
    var rules = wordDistractorRules(item);
    var distractors = pickDistractors(pool, 3, {
      text: function (v) { return v.word; },
      taken: [item.word],
      valid: function (v) { return rules.valid(v) && item.meaning.indexOf(v.word) === -1; },
      preferred: function (v) { return v.word.length === item.word.length; }
    });
    var c = buildChoices(item.word, distractors);
    if (!c) return null;
    return question({
      type: 'vocabReverse', level: level,
      prompt: 'Welches Wort bedeutet:',
      promptMain: item.meaning,
      promptSub: '',
      explanation: item.meaning + ' = ' + item.word + ' (' + item.pinyin + ')'
    }, c, { source: item.id || item.word, word: item.word, excludedWords: rules.excluded, pinyin: item.pinyin });
  }

  function genVocabContext(level) {
    var pool = getLevelPool(getVocabByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    // Only sentences with the word exactly once; the blank replaces that position.
    var usable = (item.examples || []).filter(function (ex) { return ex && countOccurrences(ex.chinese, item.word) === 1; });
    if (!usable.length) return null;
    var ex = pickRandom(usable);
    var at = ex.chinese.indexOf(item.word);
    var sentence = ex.chinese.slice(0, at) + BLANK + ex.chinese.slice(at + item.word.length);
    // Reduplications (勤勤恳恳) would still show the word around the gap.
    if (sentence.replace(BLANK, '').indexOf(item.word) !== -1) return null;
    var rules = wordDistractorRules(item);
    // Same part of speech first, so the grammar of the gap alone does not give the answer away.
    var distractors = pickDistractors(pool, 3, {
      text: function (v) { return v.word; },
      taken: [item.word],
      valid: function (v) { return rules.valid(v) && ex.chinese.indexOf(v.word) === -1; },
      rank: function (v) { return (v.type === item.type ? 0 : 2) + (v.word.length === item.word.length ? 0 : 1); }
    });
    var c = buildChoices(item.word, distractors);
    if (!c) return null;
    return question({
      type: 'vocabContext', level: level,
      prompt: 'Welches Wort passt in die Lücke?',
      promptMain: sentence,
      promptSub: ex.german,
      explanation: item.word + ' (' + item.pinyin + ') — ' + ex.chinese + (ex.pinyin ? '\n' + ex.pinyin : '')
    }, c, { source: item.id || item.word, word: item.word, excludedWords: rules.excluded, pinyin: item.pinyin, sentence: ex.chinese, answer: item.word, wordType: item.type });
  }

  // A character is asked with the first gloss of its most used reading up to the level.
  function hanziGloss(k, level) {
    var gloss = firstGloss(mainReading(k, level).meaning);
    return gloss.indexOf(k.hanzi) === -1 ? gloss : '';
  }
  function hanziGlossKeys(k) {
    var keys = [];
    k.readings.forEach(function (r) { glossKeys(r.meaning).forEach(function (g) { if (keys.indexOf(g) === -1) keys.push(g); }); });
    return keys;
  }
  function readingList(k) {
    return k.readings.map(function (r) { return r.pinyin + ' ' + r.meaning; }).join('\n');
  }

  function genHanziMeaning(level) {
    var pool = getLevelPool(getHanziByLevel, level).filter(function (k) { return isQuizReady(k) && hanziGloss(k, level); });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var correct = hanziGloss(item, level);
    var itemKeys = hanziGlossKeys(item);
    var correctKeys = glossKeys(correct);
    var distractors = pickDistractors(pool, 3, {
      text: function (k) { return hanziGloss(k, level); },
      taken: [correct],
      apart: function (a, b) { return !sharesGloss(glossKeys(a), b); },

      // Neither may the option fit the asked character nor the character share the asked meaning.
      valid: function (k) {
        return k.hanzi !== item.hanzi && !sharesGloss(itemKeys, hanziGloss(k, level)) &&
          !k.readings.some(function (r) { return sharesGloss(correctKeys, r.meaning); });
      }
    });
    var c = buildChoices(correct, distractors);
    if (!c) return null;
    return question({
      type: 'hanziMeaning', level: level,
      prompt: 'Was bedeutet dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: mainReading(item, level).pinyin,
      explanation: item.hanzi + ' = ' + readingList(item)
    }, c, { source: item.hanzi, hanzi: item.hanzi, validKeys: itemKeys });
  }

  // Similar syllables that exist with the given tone, closest first.
  function similarSyllables(base) {
    var syllables = getHanziIndex().syllables;
    var tiers = [[], []];
    Object.keys(syllables).forEach(function (other) {
      var d = syllableDistance(base, other);
      if (d !== null) tiers[d].push(other);
    });
    return shuffle(tiers[0]).concat(shuffle(tiers[1]));
  }

  function genHanziPinyin(level) {
    // A toneless main reading (吧 ba, 儿 r) is only asked when the character has no other.
    var pool = getLevelPool(getHanziByLevel, level).filter(function (k) {
      var answer = mainReading(k, level).pinyin;
      return answer && (hasTone(answer) || k.readings.length === 1);
    });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var answer = mainReading(item, level).pinyin;
    if (hasTone(answer) && !/^[a-z]+[1-4]$/.test(window.Pinyin.toNumeric(answer))) return null;
    var readings = item.readings.map(function (r) { return r.pinyin; });
    var valid = readings.map(pinyinKey);
    var distractors = [];
    if (hasTone(answer)) {
      // Each option carries another tone: mostly the same syllable, now and then a similar one.
      var syllables = getHanziIndex().syllables;
      var base = toneless(answer);
      var similar = similarSyllables(base);
      var swap = Math.random() < 0.35 ? Math.floor(Math.random() * 3) : -1;
      shuffle([1, 2, 3, 4].filter(function (t) { return t !== window.Pinyin.toneOf(answer); })).forEach(function (tone, i) {
        var candidates = (i === swap ? [] : [base]).concat(similar);
        for (var j = 0; j < candidates.length; j++) {
          var p = syllables[candidates[j]] && syllables[candidates[j]][tone];
          if (p && valid.indexOf(pinyinKey(p)) === -1 && distractors.indexOf(p) === -1) { distractors.push(p); return; }
        }
      });
    } else {
      // Toneless answers get toneless options, so the missing tone mark gives nothing away.
      distractors = pickDistractors(getHanziIndex().toneless, 3, {
        text: function (p) { return p; },
        key: pinyinKey,
        taken: [answer],
        valid: function (p) { return valid.indexOf(pinyinKey(p)) === -1; }
      });
    }
    var c = buildChoices(answer, distractors, pinyinKey);
    if (!c) return null;
    var gloss = isQuizReady(item) ? hanziGloss(item, level) : '';
    if (readings.some(function (p) { return pinyinKey(gloss).indexOf(pinyinKey(p)) !== -1 && /[a-z]{2}/.test(p); })) gloss = '';
    return question({
      type: 'hanziPinyin', level: level,
      prompt: 'Wie lautet das Pinyin für dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: gloss,
      explanation: item.hanzi + ': ' + readings.join(', ') + (readings.length > 1 ? '\nIn den Wörtern bis ' + levelLabel(level) + ' am häufigsten: ' + answer : '')
    }, c, { source: item.hanzi, hanzi: item.hanzi, validPinyin: valid, answer: answer });
  }

  // Radicals easily mistaken for each other (Kangxi forms; variants match too).
  var RADICAL_LOOKALIKES = [
    '土士工', '日曰目白', '木禾米', '人入八儿', '刀力', '冫水', '示衣', '厂广疒', '夂夊攴', '彳人行', '廴辵', '阜邑卩',
    '爪瓜', '竹艸', '戈弋', '宀冖穴', '口囗', '匚匸冂', '大犬', '月肉舟', '貝見目', '言音', '門鬥', '馬鳥', '皿血',
    '臼白', '夕歹', '十卜', '手毛', '尸户', '厶幺', '亅丿', '丶丿', '毋母'
  ];
  function radicalGlyphs(r) {
    return [r.radical].concat((r.variants || []).map(function (v) { return v.replace(/\(.*\)/, ''); }));
  }
  function radicalLabel(r) {
    return r.radical + (r.variants && r.variants.length ? '/' + r.variants.join('/') : '') + ' (' + r.meaning + ')';
  }
  function lookalikes(r) {
    var glyphs = radicalGlyphs(r);
    var out = [];
    RADICAL_LOOKALIKES.forEach(function (group) {
      group = Array.from(group);
      if (glyphs.some(function (g) { return group.indexOf(g) !== -1; })) out = out.concat(group);
    });
    return out;
  }

  function genHanziRadical(level) {
    var radicals = window.KANGXI_RADICALS || [];
    var radicalOf = function (k) { return radicals.find(function (r) { return r.radical === k.primaryRadical; }); };
    var pool = getLevelPool(getHanziByLevel, level).filter(function (k) { return k.primaryRadical && k.primaryRadical !== k.hanzi; });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var radical = radicalOf(item);
    if (!radical) return null;
    var correct = radicalLabel(radical);
    var answerGlyphs = radicalGlyphs(radical).concat(item.radicalForm ? [item.radicalForm] : []);
    var similar = lookalikes(radical);
    var levelRadicals = {};
    getHanziByLevel(level).forEach(function (k) { levelRadicals[k.primaryRadical] = true; });
    var parts = (item.components || []).map(function (c) { return c.part; });
    var distractors = pickDistractors(radicals, 3, {
      text: radicalLabel,
      taken: [correct],
      // Never another form of the answer (网/罒, 月 in 肉/月) and never the character itself.
      valid: function (r) {
        var glyphs = radicalGlyphs(r);
        return glyphs.indexOf(item.hanzi) === -1 && !glyphs.some(function (g) { return answerGlyphs.indexOf(g) !== -1; }) && r.meaning !== radical.meaning;
      },
      // Parts of the character and look-alikes first, then radicals of the level with a similar stroke count.
      rank: function (r) {
        var glyphs = radicalGlyphs(r);
        var close = Math.abs((r.strokes || 0) - (radical.strokes || 0)) <= 1;
        if (glyphs.some(function (g) { return parts.indexOf(g) !== -1 || similar.indexOf(g) !== -1; })) return 0;
        if (levelRadicals[r.radical]) return close ? 1 : 2;
        return close ? 3 : null;
      }
    });
    var c = buildChoices(correct, distractors);
    if (!c) return null;
    var gloss = isQuizReady(item) ? hanziGloss(item, level) : '';
    return question({
      type: 'hanziRadical', level: level,
      prompt: 'Unter welchem Kangxi-Radikal steht dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: gloss,
      explanation: item.hanzi + ' steht unter dem Radikal ' + radical.radical + ' (' + radical.meaning + ')' +
        (item.radicalForm ? ', im Zeichen als ' + item.radicalForm + ' geschrieben' : '')
    }, c, { source: item.hanzi, hanzi: item.hanzi, radical: radical.radical });
  }

  function maxSyllables(level) { return LEVELS.indexOf(level) <= 2 ? 2 : 4; }

  function genToneRecognition(level) {
    var pool = getLevelPool(getVocabByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var syls = wordSyllables(item.word, item.pinyin);
    if (!syls || syls.length > maxSyllables(level)) return null;
    var toned = [];
    syls.forEach(function (s, i) { if (s.tone < 5) toned.push(i); });
    if (!toned.length) return null;
    var correctSound = spokenForm(item.word, syls);
    var others = otherSounds(item);
    // Every toned syllable shows all four tones across the options, so no tone wins by majority;
    // neutral tones stay as written.
    for (var attempt = 0; attempt < 6; attempt++) {
      var columns = toned.map(function (i) { return shuffle([1, 2, 3, 4].filter(function (t) { return t !== syls[i].tone; })); });
      var distractors = [];
      for (var d = 0; d < 3; d++) {
        var tones = syls.map(function (s) { return s.tone; });
        toned.forEach(function (i, col) { tones[i] = columns[col][d]; });
        var sound = spokenForm(item.word, syls, tones);
        if (soundsAlike(sound, correctSound) || others.some(function (o) { return soundsAlike(sound, o); })) break;
        distractors.push(withTones(item.pinyin, syls, tones));
      }
      var c = distractors.length === 3 && buildChoices(item.pinyin, distractors, pinyinKey);
      if (!c) continue;
      return question({
        type: 'toneRecognition', level: level,
        prompt: 'Welcher Ton ist richtig?',
        promptMain: item.word,
        promptSub: item.meaning,
        explanation: item.word + ' ' + item.pinyin + ' (' + toneDescription(syls) + ') = ' + item.meaning
      }, c, { source: item.id || item.word, word: item.word, pinyin: item.pinyin });
    }
    return null;
  }

  function genListening(level) {
    if (!speechAvailable()) return null;
    var pool = getLevelPool(getVocabByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var syls = wordSyllables(item.word, item.pinyin);
    if (!syls || syls.length > 4) return null;
    // Speech synthesis cannot know which reading of a written word is meant.
    if (otherSounds(item).length) return null;
    var hanzi = item.word.length === 1 && getHanziIndex().byChar[item.word];
    if (hanzi && hanzi.readings.length > 1) return null;
    var sound = spokenForm(item.word, syls);
    var distractors = pickDistractors(pool, 3, {
      text: function (v) { return v.word; },
      taken: [item.word],
      valid: function (v) {
        // No reading of the option may sound like the word (长 zhǎng is also cháng).
        return v.word !== item.word && wordSyllables(v.word, v.pinyin) &&
          !wordSounds(v.word).some(function (s) { return soundsAlike(s.form, sound); });
      },
      // Same syllables in other tones first, then words a similar syllable or two apart.
      rank: function (v) {
        var other = v.word.length === item.word.length && wordSyllables(v.word, v.pinyin);
        if (!other) return null;
        var score = 0;
        other.forEach(function (s, i) { score += s.base === syls[i].base ? 0 : syllableDistance(s.base, syls[i].base) !== null ? 1 : 2; });
        return Math.min(score, 2 * syls.length);
      }
    });
    var c = buildChoices(item.word, distractors);
    if (!c) return null;
    return question({
      type: 'listening', level: level,
      prompt: 'Was hörst du?',
      promptMain: '',
      promptSub: 'Höre dir das Wort an und wähle die passenden Schriftzeichen.',
      audio: item.word,
      explanation: item.word + ' (' + item.pinyin + ') = ' + item.meaning
    }, c, { source: item.id || item.word, word: item.word, pinyin: item.pinyin });
  }

  // Typed pinyin as { base, tone } per syllable: tone marks or digits, neutral tone as 5 or unmarked.
  function typedSyllables(text, word) {
    text = String(text || '').normalize('NFC').trim();
    if (!text || HAN_RE.test(text) || !window.Pinyin) return null;
    return window.Pinyin.segment(text, word).map(function (s) {
      var numeric = window.Pinyin.toNumeric(s);
      return { base: numeric.slice(0, -1), tone: Number(numeric.slice(-1)) };
    });
  }

  function checkPinyinAnswer(q, text) {
    var typed = typedSyllables(text, q.meta.word);
    if (!typed || !typed.length) return false;
    var chars = Array.from(q.meta.word);
    return q.meta.accepted.some(function (pinyin) {
      var expected = wordSyllables(q.meta.word, pinyin);
      return expected && expected.length === typed.length && expected.every(function (s, i) {
        var tone = typed[i].tone;
        // 一 and 不 may also be typed in their dictionary tone (yīdìng for yídìng).
        var citation = (chars[i] === '一' && s.base === 'yi' && tone === 1) || (chars[i] === '不' && s.base === 'bu' && tone === 4);
        return typed[i].base === s.base && (tone === s.tone || citation);
      });
    });
  }

  function genPinyinTyping(level) {
    var pool = getLevelPool(getVocabByLevel, level);
    if (!pool.length) return null;
    var item = pickRandom(pool);
    var syls = wordSyllables(item.word, item.pinyin);
    if (!syls || syls.length > 4) return null;
    var accepted = [item.pinyin].concat((item.pinyinAlt || []).filter(function (p) { return wordSyllables(item.word, p); }));
    return {
      type: 'pinyinTyping', level: level, kind: 'input',
      prompt: 'Wie lautet das Pinyin?',
      promptMain: item.word,
      promptSub: item.meaning,
      answer: item.pinyin,
      explanation: item.word + ' ' + accepted.join(' / ') + ' (' + toneDescription(syls) + ') = ' + item.meaning,
      meta: { source: item.id || item.word, word: item.word, accepted: accepted }
    };
  }

  // Classifiers that fit almost any noun (个, 种, containers, groups, verbal and time measures)
  // would often be a valid alternative, so they are never offered as wrong options.
  var BROAD_CLASSIFIERS = '个种些点类样批群堆帮伙窝串束捆摞打排对份层段片次遍趟回番下场阵杯瓶碗盘罐壶碟锅勺桶盆盒箱袋包管';
  var NON_NOUN_CATEGORIES = { Zeit: true, Mengen: true, Handlungen: true, Medizin: true };
  var NUMBERS = ['一', '一', '两', '三'];

  function measureWordInfo() {
    var info = {};
    getMeasureWords().forEach(function (m) { info[m.classifier] = m; });
    return info;
  }

  function classifierPinyin(word, info, listed) {
    if (info[word] && info[word].pinyin) return info[word].pinyin;
    return listed && listed.pinyin ? window.Pinyin.toMarked(listed.pinyin) : '';
  }

  function genMeasureWord(level) {
    var max = LEVELS.indexOf(level);
    var index = getVocabIndex();
    var nouns = getAllVocab().filter(function (v) { return v.measureWords && v.measureWords.length && LEVELS.indexOf(v.level) <= max && HAN_WORD_RE.test(v.word); });
    if (!nouns.length) return null;
    var levelClassifiers = {};
    nouns.forEach(function (v) { v.measureWords.forEach(function (m) { levelClassifiers[m.word] = true; }); });
    var item = pickRandom(nouns);
    // Every classifier listed for the written noun is right (other entries of the word included).
    var listed = [];
    (index.byWord[item.word] || [item]).forEach(function (v) {
      (v.measureWords || []).forEach(function (m) { if (listed.indexOf(m.word) === -1) listed.push(m.word); });
    });
    // 个 is never asked: it would stand for every specific classifier the data does not list.
    var askable = item.measureWords.filter(function (m) { return m.word !== '个' && item.word.indexOf(m.word) === -1; });
    if (!askable.length || item.meaning.indexOf(item.word) !== -1) return null;
    var asked = pickRandom(askable);
    var info = measureWordInfo();
    var category = function (c) { return info[c] && info[c].category; };
    // Person classifiers (位, 名, 口) are interchangeable for people.
    var forPeople = listed.some(function (c) { return category(c) === 'Menschen'; });
    var distractors = pickDistractors(Object.keys(levelClassifiers), 3, {
      text: function (c) { return c; },
      taken: listed,
      valid: function (c) {
        return BROAD_CLASSIFIERS.indexOf(c) === -1 && !NON_NOUN_CATEGORIES[category(c)] && listed.indexOf(c) === -1 &&
          item.word.indexOf(c) === -1 && item.meaning.indexOf(c) === -1 && !(forPeople && category(c) === 'Menschen');
      },
      preferred: function (c) { return category(c) !== category(asked.word); }
    });
    var c = buildChoices(asked.word, distractors);
    if (!c) return null;
    var number = pickRandom(NUMBERS);
    var fitting = listed.map(function (w) {
      var own = item.measureWords.find(function (m) { return m.word === w; });
      var p = classifierPinyin(w, info, own);
      return w + (p ? ' (' + p + ')' : '');
    });
    return question({
      type: 'measureWord', level: level,
      prompt: 'Welches Zählwort passt in die Lücke?',
      promptMain: number + ' ' + BLANK + ' ' + item.word,
      promptSub: item.meaning,
      explanation: number + asked.word + item.word + ' — ' + item.word + ' (' + item.pinyin + ') = ' + item.meaning +
        '\nPassende Zählwörter: ' + fitting.join(', ') + (info[asked.word] && info[asked.word].usage ? '\n' + asked.word + ': ' + info[asked.word].usage : '')
    }, c, { source: item.id || item.word, word: item.word, answer: asked.word, accepted: listed });
  }

  // Grammar meanings: same category and level first, then neighbouring levels, then the level;
  // meanings that say nearly the same are no distractors.
  function genGrammarMeaning(level) {
    // Overview points are syllabus labels (方位名词, 连接词或词组); their "meaning" only tests terminology.
    var notOverview = function (g) { return g.kind !== 'overview'; };
    var pool = getLevelPool(function (lv) { return getGrammarByLevel(lv).filter(notOverview); }, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var at = LEVELS.indexOf(level);
    var candidates = sectionItems('grammar').filter(function (g) { return g.meaning && notOverview(g) && Math.abs(LEVELS.indexOf(g.level) - at) <= 1; });
    var distractors = pickDistractors(candidates, 3, {
      text: function (g) { return g.meaning; },
      taken: [item.meaning],
      valid: function (g) { return g.pattern !== item.pattern && !nearlySameMeaning(item.meaning, g.meaning) && !nearlySameMeaning(g.meaning, item.meaning); },
      apart: function (a, b) { return !nearlySameMeaning(a, b) && !nearlySameMeaning(b, a); },
      rank: function (g) {
        var sameLevel = g.level === level;
        if (g.category === item.category) return sameLevel ? 0 : 1;
        return sameLevel ? 2 : null;
      }
    });
    var c = buildChoices(item.meaning, distractors);
    if (!c) return null;
    return question({
      type: 'grammarMeaning', level: level,
      prompt: 'Was bedeutet dieses Grammatikmuster?',
      promptMain: item.pattern,
      promptSub: item.formation || '',
      explanation: item.pattern + ' = ' + item.meaning
    }, c, { source: item.id || item.pattern });
  }

  // A reviewed cloze record is used only when it still matches its example sentence.
  function reviewedGrammarCloze(point) {
    var q = point && point.quiz;
    if (!q || !Number.isInteger(q.example) || !point.examples) return null;
    var example = point.examples[q.example];
    var text = example && example.chinese;
    if (typeof text !== 'string' || typeof q.answer !== 'string' || !q.answer.trim() || countOccurrences(text, q.answer) !== 1) return null;
    var accepted = [q.answer].concat(q.accepted || []);
    if (!accepted.every(function (a) { return typeof a === 'string' && a.trim(); })) return null;
    var acceptedKeys = accepted.map(normalizeAnswer);
    if (!Array.isArray(q.distractors) || q.distractors.length !== 3 || q.distractors.some(function (d) {
      return !d || typeof d.text !== 'string' || !d.text.trim() || typeof d.reason !== 'string' || !d.reason.trim() ||
        acceptedKeys.indexOf(normalizeAnswer(d.text)) !== -1;
    })) return null;
    var wrong = q.distractors.map(function (d) { return d.text; });
    if (wrong.map(normalizeAnswer).filter(function (k, i, all) { return all.indexOf(k) === i; }).length !== 3) return null;
    var at = text.indexOf(q.answer);
    return {
      example: example,
      answer: q.answer,
      accepted: accepted.slice(1),
      wrong: wrong,
      reasons: q.distractors,
      sentence: text.slice(0, at) + BLANK + text.slice(at + q.answer.length)
    };
  }

  function genGrammarCloze(level) {
    var pool = getLevelPool(getGrammarByLevel, level).filter(function (g) { return g.quiz; });
    if (!pool.length) return null;
    var point = pickRandom(pool);
    var r = reviewedGrammarCloze(point);
    if (!r) return null;
    var c = buildChoices(r.answer, r.wrong);
    if (!c) return null;
    return question({
      type: 'grammarCloze', level: level,
      prompt: 'Was passt in die Lücke?',
      promptMain: r.sentence,
      promptSub: r.example.german,
      explanation: point.pattern + ' — ' + r.example.chinese + (r.accepted.length ? ' (auch möglich: ' + r.accepted.join(', ') + ')' : '') +
        r.reasons.map(function (d) { return '\n✗ ' + d.text + ': ' + d.reason; }).join('')
    }, c, { source: point.id || point.pattern, sentence: r.example.chinese, answer: r.answer, accepted: r.accepted });
  }

  // The structure of a formation without its Chinese words: "Subjekt + 会 + Verb" → "Subjekt + ＿ + Verb".
  // Options then cannot be matched to the pattern by its characters.
  function formationSkeleton(formation) {
    return String(formation || '')
      .replace(/\(\s*z\.\s*B\.[^)]*\)|（\s*z\.\s*B\.[^）]*）/g, '')
      .replace(HAN_LIST_RE, SLOT)
      .replace(/\s+/g, ' ')
      .replace(/\(\s*\)/g, '')
      .trim();
  }
  // The slot words next to the blanks (and a question-final blank); formations sharing one
  // (＿ + Verb, Subjekt + ＿, Satz + ＿？) could fit the same pattern.
  function slotWords(skeleton) {
    var words = [];
    var add = function (match, word) {
      word.toLowerCase().split('/').forEach(function (w) { w = w.replace(/[^a-zäöüß]/g, ''); if (w && words.indexOf(w) === -1) words.push(w); });
      return match;
    };
    skeleton.replace(/([A-Za-zÄÖÜäöüß\/]+)[\s)）]*[+，,][\s+，,(（]*＿/g, add);
    skeleton.replace(/＿[\s)）]*[+，,][\s+，,(（]*([A-Za-zÄÖÜäöüß\/]+)/g, add);
    if (/＿\s*[？?]/.test(skeleton)) words.push('?');
    return words;
  }
  function skeletonCore(skeleton) { return normalizeAnswer(skeleton.replace(/\([^)]*\)/g, '').replace(/[\s+，,]/g, '')); }
  function usableSkeleton(skeleton) {
    return skeleton.indexOf(SLOT) !== -1 && !HAN_RE.test(skeleton) && /[A-Za-zÄÖÜäöüß]{3,}/.test(skeleton);
  }

  function genGrammarFormation(level) {
    var pool = getLevelPool(getGrammarByLevel, level).filter(function (g) { return g.formation && usableSkeleton(formationSkeleton(g.formation)); });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var correct = formationSkeleton(item.formation);
    var slots = slotWords(correct);
    var core = skeletonCore(correct);
    var blanks = correct.split(SLOT).length;
    var distractors = pickDistractors(pool, 3, {
      text: function (g) { return formationSkeleton(g.formation); },
      taken: [correct],
      valid: function (g) {
        var skeleton = formationSkeleton(g.formation);
        return g.pattern !== item.pattern && skeletonCore(skeleton) !== core &&
          !slotWords(skeleton).some(function (w) { return slots.indexOf(w) !== -1; });
      },
      // As many blanks as the answer, so their number gives nothing away.
      preferred: function (g) { return formationSkeleton(g.formation).split(SLOT).length === blanks; }
    });
    var c = buildChoices(correct, distractors);
    if (!c) return null;
    return question({
      type: 'grammarFormation', level: level,
      prompt: 'Wie wird dieses Muster gebildet? (＿ steht für die chinesischen Wörter des Musters)',
      promptMain: item.pattern,
      promptSub: item.meaning,
      explanation: item.pattern + ': ' + item.formation
    }, c, { source: item.id || item.pattern, pattern: item.pattern, slots: slots });
  }

  var GENERATORS = {
    vocabMeaning: genVocabMeaning,
    vocabPinyin: genVocabPinyin,
    vocabReverse: genVocabReverse,
    vocabContext: genVocabContext,
    hanziMeaning: genHanziMeaning,
    hanziPinyin: genHanziPinyin,
    hanziRadical: genHanziRadical,
    toneRecognition: genToneRecognition,
    listening: genListening,
    pinyinTyping: genPinyinTyping,
    grammarMeaning: genGrammarMeaning,
    grammarCloze: genGrammarCloze,
    grammarFormation: genGrammarFormation,
    measureWord: genMeasureWord
  };

  function generateQuestion(typeId, level) {
    var gen = GENERATORS[typeId];
    if (!gen || !typeAvailable(typeId)) return null;
    for (var i = 0; i < 20; i++) {
      var q = gen(level);
      if (q) return q;
    }
    return null;
  }

  function questionKey(q) { return q.type + '\u0001' + q.meta.source + (q.meta.question ? '\u0001' + q.meta.question : ''); }
  // The word, character or pattern behind a question, whatever the type asks about it.
  function itemKey(q) { return q.meta.word || q.meta.hanzi || q.meta.source; }

  // === LESEN/HÖREN UNITS ===
  // The bundle comprehension.js loads on demand; the quiz waits for it before an exam or a unit replay.
  function getUnits() {
    var data = window.COMPREHENSION_DATA;
    return data && Array.isArray(data.units) ? data.units : null;
  }
  function loadUnits() {
    if (getUnits() || !window.Comprehension) return Promise.resolve(getUnits() || []);
    return window.Comprehension.load();
  }
  function findUnit(id) {
    return (getUnits() || []).find(function (u) { return u.id === id; }) || null;
  }

  // One question of a unit in the quiz format; shuffled choices keep their reasons. plays: shared listening budget.
  function unitQuestion(u, uq, index, opts) {
    var order = uq.choices.map(function (c, i) { return i; });
    if (opts && opts.shuffle) order = shuffle(order);
    var type = u.skill === 'listening' ? 'listeningUnit' : 'readingUnit';
    return {
      type: type, level: u.level, kind: 'unit',
      unit: u,
      group: { index: index, size: u.questions.length },
      plays: opts && opts.plays || null,
      prompt: uq.prompt,
      promptMain: '',
      promptSub: '',
      choices: order.map(function (i) { return uq.choices[i].text; }),
      reasons: order.map(function (i) { return uq.choices[i].explanation; }),
      correctIndex: order.indexOf(uq.answer),
      explanation: uq.choices[uq.answer].explanation,
      meta: { source: u.id, question: uq.id }
    };
  }
  function unitQuestions(u, opts) {
    return u.questions.map(function (uq, i) { return unitQuestion(u, uq, i, opts); });
  }

  // Pre-generates a mock exam: whole units (all their questions in a row, no unit twice), then single items.
  // The same item is not asked twice, not even by another type, unless the level runs out of items.
  function buildTestSections(level) {
    var plan = examPlan(level);
    if (!plan) return null;
    var asked = {}, items = {};
    function fresh(typeId) {
      for (var attempt = 0; attempt < 20; attempt++) {
        var q = generateQuestion(typeId, level);
        if (!q) return null;
        if (!asked[questionKey(q)] && (attempt < 14 ? !items[itemKey(q)] : true)) return q;
      }
      return null;
    }
    var sections = plan.sections.map(function (sec) {
      var questions = [];
      var types = sec.types.filter(typeAvailable);
      for (var i = 0; i < sec.items && types.length; i++) {
        var q = fresh(types[i % types.length]);
        for (var t = 0; !q && t < types.length; t++) q = fresh(types[t]);
        if (!q) continue;
        asked[questionKey(q)] = true;
        items[itemKey(q)] = true;
        questions.push(q);
      }
      if (sec.units) {
        var pool = (getUnits() || []).filter(function (u) { return u.skill === sec.skill && u.level === level; });
        shuffle(pool).slice(0, sec.units).forEach(function (u) {
          // Like the HSK: each listening text can be played twice.
          questions = questions.concat(unitQuestions(u, { plays: sec.skill === 'listening' ? { left: 2 } : null }));
        });
      }
      return { name: sec.name, time: sec.time, questions: questions, answers: [], score: 0 };
    });
    return { sections: sections, skipped: plan.skipped };
  }

  // === UI BUILDERS ===
  var dom = {};

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) setText(e, text);
    return e;
  }

  // Chinese text gets lang="zh-CN" (on the element, or on spans inside mixed German/Chinese text).
  function setText(node, text) {
    text = String(text == null ? '' : text);
    node.textContent = '';
    if (!HAN_RE.test(text)) { node.textContent = text; return node; }
    if (!LATIN_RE.test(text)) {
      node.lang = 'zh-CN';
      node.classList.add('zh');
      node.textContent = text;
      return node;
    }
    var last = 0;
    text.replace(ZH_RUN_RE, function (run, offset) {
      if (!HAN_RE.test(run)) return run;
      if (offset > last) node.appendChild(document.createTextNode(text.slice(last, offset)));
      var span = document.createElement('span');
      span.className = 'zh';
      span.lang = 'zh-CN';
      span.textContent = run;
      node.appendChild(span);
      last = offset + run.length;
      return run;
    });
    if (last < text.length) node.appendChild(document.createTextNode(text.slice(last)));
    return node;
  }

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function spokenTime(seconds) {
    var m = Math.floor(seconds / 60), s = seconds % 60;
    return 'Verbleibende Zeit: ' + (m ? m + (m === 1 ? ' Minute ' : ' Minuten ') : '') + s + (s === 1 ? ' Sekunde' : ' Sekunden');
  }

  function renderChoiceButtons(q, container, onSelect) {
    container.innerHTML = '';
    var grid = el('div', 'quiz-choices-grid');
    grid.setAttribute('role', 'group');
    grid.setAttribute('aria-label', 'Antwortmöglichkeiten');
    q.choices.forEach(function (choice, idx) {
      var btn = el('button', 'quiz-choice-btn');
      btn.type = 'button';
      btn.appendChild(el('span', 'quiz-choice-num', String(idx + 1)));
      btn.appendChild(el('span', 'quiz-choice-text', choice));
      btn.addEventListener('click', function () { onSelect(idx); });
      grid.appendChild(btn);
    });
    container.appendChild(grid);
  }

  function showFeedback(parts, q, selectedIdx) {
    var btns = parts.choicesDiv.querySelectorAll('.quiz-choice-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      btns[i].removeAttribute('aria-pressed');
      if (i === q.correctIndex) btns[i].classList.add('correct');
      if (i === selectedIdx && selectedIdx !== q.correctIndex) btns[i].classList.add('wrong');
    }
    var verdict = selectedIdx === q.correctIndex ? 'Richtig.' : selectedIdx < 0 ? 'Aufgelöst.' : 'Nicht richtig.';
    setText(parts.feedback, verdict + ' Richtige Antwort: ' + q.choices[q.correctIndex]);
    // In the exam, a unit's reasons quote its text and would help with the next questions.
    if (q.kind === 'unit' && parts.deferUnit) setText(parts.explDiv, 'Begründungen und Text siehst du in der Auswertung.');
    else if (q.kind === 'unit') renderUnitExplanation(parts.explDiv, q);
    else setText(parts.explDiv, q.explanation);
    parts.explDiv.classList.remove('hidden');
  }

  // === UNIT CONTEXT ===
  var SPEAKER_PITCH = { A: 0.95, B: 1.15 };
  var toggleCount = 0;

  // Sentences as separate utterances (long ones break off in some browsers); speaker B a little higher.
  function unitSpeech(u) {
    var out = [];
    u.passages.forEach(function (block) {
      var pitch = SPEAKER_PITCH[block.speaker];
      (block.text.match(/[^。！？!?\n]+[。！？!?”」]*/g) || []).forEach(function (s) { out.push(pitch ? { text: s, pitch: pitch } : s); });
    });
    return out;
  }
  function speakUnit(u) {
    if (!speechAvailable()) return;
    var at = EXAM_LEVELS.indexOf(u.level);
    window.app.speakCN(unitSpeech(u), { rate: at < 2 ? 0.8 : at < 4 ? 0.9 : 1 });
  }

  // A passage in Chinese; pinyin as ruby (comprehension.js) or, without it, as a line below.
  function passageNode(block, withPinyin) {
    var row = el('div', 'quiz-unit-passage');
    var who = block.label || block.speaker;
    if (who) row.appendChild(el('span', 'quiz-unit-speaker', who));
    if (withPinyin && window.Comprehension && window.Comprehension.chinese && window.Pinyin) {
      row.appendChild(window.Comprehension.chinese(block));
      return row;
    }
    row.appendChild(el('p', 'quiz-unit-chinese', block.text));
    if (withPinyin && block.pinyin) {
      var line = el('p', 'quiz-unit-pinyin', block.pinyin);
      line.lang = 'zh-Latn-pinyin';
      row.appendChild(line);
    }
    return row;
  }

  // Pinyin stands in the text on HSK 1–2, as in the real exam.
  function unitPinyinLevel(u) { return EXAM_LEVELS.indexOf(u.level) < 2; }

  function listenControls(q) {
    var row = el('div', 'quiz-listen-row');
    var btn = el('button', 'quiz-btn quiz-listen-btn', 'Anhören');
    btn.type = 'button';
    var status = el('span', 'quiz-plays-left');
    status.setAttribute('aria-live', 'polite');
    var update = function () {
      if (!q.plays) return;
      status.textContent = q.plays.left ? 'Noch ' + q.plays.left + (q.plays.left === 1 ? ' Wiedergabe' : ' Wiedergaben') : 'Keine Wiedergabe mehr';
      btn.disabled = q.plays.left <= 0;
    };
    btn.addEventListener('click', function () {
      if (q.plays) {
        if (q.plays.left <= 0) return;
        q.plays.left--;
      }
      speakUnit(q.unit);
      update();
    });
    update();
    row.appendChild(btn);
    row.appendChild(status);
    return row;
  }

  // Title, introduction and the text (Lesen) or the play button (Hören); returns the title for focus.
  function renderUnitContext(q, card) {
    var u = q.unit;
    var box = el('div', 'quiz-unit');
    var title = el('h3', 'quiz-unit-title', u.title);
    box.appendChild(title);
    if (u.introduction) box.appendChild(el('p', 'quiz-unit-intro', u.introduction));
    if (u.skill === 'reading') {
      var text = el('div', 'quiz-unit-text');
      u.passages.forEach(function (block) { text.appendChild(passageNode(block, unitPinyinLevel(u))); });
      box.appendChild(text);
    } else {
      box.appendChild(listenControls(q));
    }
    card.appendChild(box);
    return title;
  }

  // A button that shows the unit's text with pinyin and the translation.
  function unitTextToggle(u) {
    var wrap = el('div', 'quiz-unit-toggle');
    var content = el('div', 'quiz-unit-full hidden');
    content.id = 'quiz-unit-text-' + (++toggleCount);
    u.passages.forEach(function (block) { content.appendChild(passageNode(block, true)); });
    content.appendChild(el('p', 'quiz-unit-translation', u.translation));
    var btn = el('button', 'quiz-btn quiz-unit-toggle-btn', 'Text anzeigen');
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', content.id);
    btn.addEventListener('click', function () {
      var open = content.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Text ausblenden' : 'Text anzeigen';
    });
    wrap.appendChild(btn);
    wrap.appendChild(content);
    return wrap;
  }

  // Why each choice is right or wrong.
  function renderReasons(target, q) {
    var list = el('ul', 'quiz-unit-reasons');
    q.choices.forEach(function (choice, i) {
      var li = el('li', i === q.correctIndex ? 'correct' : 'wrong');
      li.appendChild(el('strong', '', choice));
      li.appendChild(el('span', '', q.reasons[i]));
      list.appendChild(li);
    });
    target.appendChild(list);
  }

  function renderUnitExplanation(target, q) {
    target.textContent = '';
    renderReasons(target, q);
    target.appendChild(unitTextToggle(q.unit));
  }

  // Typed pinyin: label, IME-safe Enter and a check button.
  function renderPinyinInput(q, container, onSubmit) {
    container.innerHTML = '';
    var row = el('div', 'quiz-input-row');
    var label = el('label', 'quiz-input-label', 'Pinyin mit Tonzeichen oder Tonzahlen (z. B. wǒmen oder wo3men)');
    label.htmlFor = 'quiz-pinyin-input';
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'quiz-pinyin-input';
    input.className = 'quiz-pinyin-input';
    input.lang = 'en';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('enterkeyhint', 'done');
    var check = el('button', 'quiz-btn quiz-btn-check', 'Prüfen');
    check.type = 'button';
    var composing = false;
    var submit = function () {
      if (input.disabled || !input.value.trim()) return;
      onSubmit(input.value);
    };
    input.addEventListener('compositionstart', function () { composing = true; });
    input.addEventListener('compositionend', function () { composing = false; });
    input.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' || e.isComposing || composing || e.keyCode === 229 || e.ctrlKey || e.altKey || e.metaKey) return;
      e.preventDefault();
      submit();
    });
    check.addEventListener('click', submit);
    container.appendChild(label);
    row.appendChild(input);
    row.appendChild(check);
    container.appendChild(row);
  }

  function showInputFeedback(parts, q, typed) {
    var input = parts.choicesDiv.querySelector('.quiz-pinyin-input');
    var check = parts.choicesDiv.querySelector('.quiz-btn-check');
    typed = typed ? String(typed).trim() : '';
    var correct = !!typed && checkPinyinAnswer(q, typed);
    if (input) {
      input.disabled = true;
      input.classList.add(correct ? 'correct' : typed ? 'wrong' : 'revealed');
    }
    if (check) check.disabled = true;
    parts.feedback.textContent = '';
    parts.feedback.appendChild(document.createTextNode((correct ? 'Richtig.' : typed ? 'Nicht richtig.' : 'Aufgelöst.') + ' Richtige Antwort: '));
    var answer = el('span', 'quiz-pinyin-answer');
    answer.innerHTML = window.Pinyin ? window.Pinyin.colorize(q.answer, q.meta.word) : '';
    if (!answer.textContent) answer.textContent = q.answer;
    parts.feedback.appendChild(answer);
    if (typed) parts.feedback.appendChild(document.createTextNode(' · Deine Eingabe: ' + typed));
    setText(parts.explDiv, q.explanation);
    parts.explDiv.classList.remove('hidden');
  }

  // Choice buttons or the pinyin field; onAnswer gets the option index or the typed text.
  function renderAnswers(q, parts, onAnswer) {
    if (q.kind === 'input') renderPinyinInput(q, parts.choicesDiv, onAnswer);
    else renderChoiceButtons(q, parts.choicesDiv, onAnswer);
  }
  function showResult(parts, q, answer) {
    if (q.kind === 'input') showInputFeedback(parts, q, typeof answer === 'string' ? answer : '');
    else showFeedback(parts, q, answer);
  }
  function isCorrect(q, answer) {
    return q.kind === 'input' ? typeof answer === 'string' && checkPinyinAnswer(q, answer) : answer === q.correctIndex;
  }
  function correctText(q) { return q.kind === 'input' ? q.answer : q.choices[q.correctIndex]; }

  function speak(text) {
    if (speechAvailable()) window.app.speakCN(text);
  }

  // opts.continued: the previous question was on the same unit, so focus goes to the question, not the text.
  function renderQuestionCard(q, container, opts) {
    container.innerHTML = '';
    var card = el('div', 'quiz-question-card');

    var badges = el('div', 'quiz-badges');
    badges.appendChild(el('span', 'quiz-type-badge', typeInfo(q.type).label));
    badges.appendChild(el('span', 'quiz-level-badge ' + levelClass(q.level), levelLabel(q.level)));
    if (q.group) badges.appendChild(el('span', 'quiz-group-badge', 'Frage ' + (q.group.index + 1) + ' von ' + q.group.size + ' zum Text'));
    card.appendChild(badges);

    var unitTitle = null;
    if (q.kind === 'unit') {
      unitTitle = renderUnitContext(q, card);
      unitTitle.tabIndex = -1;
      if (opts && opts.continued) unitTitle = null;
    }

    var prompt = el('h3', 'quiz-prompt', q.prompt);
    prompt.tabIndex = -1;
    card.appendChild(prompt);
    if (q.promptMain) card.appendChild(el('div', 'quiz-prompt-main', q.promptMain));
    if (q.audio) {
      var listen = el('button', 'quiz-btn quiz-listen-btn', 'Anhören');
      listen.type = 'button';
      listen.addEventListener('click', function () { speak(q.audio); });
      card.appendChild(listen);
      // Played once when the question appears; the button repeats it.
      setTimeout(function () { if (listen.isConnected) speak(q.audio); }, 0);
    }
    if (q.promptSub) card.appendChild(el('p', 'quiz-prompt-sub', q.promptSub));

    var choicesDiv = el('div', 'quiz-choices');
    card.appendChild(choicesDiv);
    var feedback = el('p', 'quiz-feedback');
    feedback.setAttribute('role', 'status');
    card.appendChild(feedback);
    var explDiv = el('div', 'quiz-explanation hidden');
    card.appendChild(explDiv);

    container.appendChild(card);
    setTimeout(function () {
      var target = card.querySelector('.quiz-pinyin-input:not([disabled])') || unitTitle || prompt;
      if (target.isConnected) target.focus({ preventScroll: true });
    }, 0);
    return { choicesDiv: choicesDiv, feedback: feedback, explDiv: explDiv, card: card };
  }

  function focusHeading(node) {
    node.tabIndex = -1;
    node.focus({ preventScroll: true });
  }

  // === PROGRESS ===
  // { version: 1, exams, types: { typeId: { answered, correct } }, mistakes } in localStorage; invalid data starts empty.
  var PROGRESS_KEY = (PROFILE.storagePrefix || 'zhongwen-') + 'quiz-v1';
  var MAX_EXAMS = 50, MAX_MISTAKES = 200;
  var memoryStore = {};
  function progressStore() {
    if (window.APP_STORAGE && window.APP_STORAGE.local) return window.APP_STORAGE.local;
    return {
      getJSON: function (key, fallback) { return memoryStore.hasOwnProperty(key) ? JSON.parse(memoryStore[key]) : fallback; },
      setJSON: function (key, value) { memoryStore[key] = JSON.stringify(value); return true; }
    };
  }
  function emptyProgress() { return { version: 1, exams: [], types: {}, mistakes: [] }; }
  function isCount(n) { return Number.isInteger(n) && n >= 0; }
  function isText(s) { return typeof s === 'string'; }
  function isDate(s) { return isText(s) && !isNaN(Date.parse(s)); }
  function isPlainObject(v) { return !!v && typeof v === 'object' && !Array.isArray(v); }

  function validExam(e) {
    return isPlainObject(e) && isDate(e.date) && !!EXAM_PLAN[e.level] && isCount(e.correct) && isCount(e.total) && e.correct <= e.total &&
      Array.isArray(e.sections) && e.sections.every(function (s) { return isPlainObject(s) && isText(s.name) && isCount(s.correct) && isCount(s.total) && s.correct <= s.total; }) &&
      Array.isArray(e.skipped) && e.skipped.every(isText);
  }
  function validMistake(m) {
    if (!isPlainObject(m) || !typeInfo(m.type) || !isText(m.level) || !isText(m.source) || !m.source || !isText(m.prompt) ||
      !isText(m.explanation) || !isCount(m.count) || !m.count || !isDate(m.lastMissed)) return false;
    if (UNIT_TYPES[m.type]) return isText(m.unit) && isText(m.question);
    if (QUESTION_TYPES[m.type].input) return isText(m.answer) && isText(m.word) && Array.isArray(m.accepted) && m.accepted.length > 0 && m.accepted.every(isText);
    return Array.isArray(m.choices) && m.choices.length >= 3 && m.choices.every(isText) &&
      Number.isInteger(m.correctIndex) && m.correctIndex >= 0 && m.correctIndex < m.choices.length;
  }

  function getProgress() {
    var stored = progressStore().getJSON(PROGRESS_KEY, null, function (v) {
      return isPlainObject(v) && v.version === 1 && Array.isArray(v.exams) && isPlainObject(v.types) && Array.isArray(v.mistakes);
    });
    var p = emptyProgress();
    if (!stored) return p;
    p.exams = stored.exams.filter(validExam).slice(-MAX_EXAMS);
    Object.keys(stored.types).forEach(function (id) {
      var t = stored.types[id];
      if (typeInfo(id) && isPlainObject(t) && isCount(t.answered) && isCount(t.correct) && t.correct <= t.answered) p.types[id] = { answered: t.answered, correct: t.correct };
    });
    p.mistakes = stored.mistakes.filter(validMistake).slice(0, MAX_MISTAKES);
    return p;
  }
  function saveProgress(p) { return progressStore().setJSON(PROGRESS_KEY, p); }

  function countType(p, typeId, correct) {
    var t = p.types[typeId] = p.types[typeId] || { answered: 0, correct: 0 };
    t.answered++;
    if (correct) t.correct++;
  }

  // A self-contained copy of a missed question; units keep only their ids and come back from the unit data.
  function snapshot(q) {
    var m = { type: q.type, level: q.level, source: String(q.meta.source), prompt: q.prompt || '', promptMain: q.promptMain || '', promptSub: q.promptSub || '', explanation: q.explanation || '' };
    if (q.audio) m.audio = q.audio;
    if (q.meta.word) m.word = q.meta.word;
    if (q.kind === 'unit') { m.unit = q.meta.source; m.question = q.meta.question; }
    if (q.kind === 'input') { m.answer = q.answer; m.accepted = q.meta.accepted.slice(); } else { m.choices = q.choices.slice(); m.correctIndex = q.correctIndex; }
    return m;
  }
  function mistakeKey(m) { return m.type + '\u0001' + m.source + (m.question ? '\u0001' + m.question : ''); }
  function byRecent(a, b) { return Date.parse(b.lastMissed) - Date.parse(a.lastMissed); }

  function addMistake(p, q) {
    var m = snapshot(q);
    var key = mistakeKey(m);
    var old = p.mistakes.find(function (x) { return mistakeKey(x) === key; });
    m.count = old ? old.count + 1 : 1;
    m.lastMissed = new Date().toISOString();
    p.mistakes = [m].concat(p.mistakes.filter(function (x) { return x !== old; })).sort(byRecent).slice(0, MAX_MISTAKES);
  }
  function removeMistake(p, q) {
    var key = mistakeKey(snapshot(q));
    p.mistakes = p.mistakes.filter(function (x) { return mistakeKey(x) !== key; });
  }

  // Back to a question: choices shuffled again, the answer index follows. Null when its unit is gone.
  function fromSnapshot(m) {
    if (UNIT_TYPES[m.type]) {
      var u = findUnit(m.unit);
      var uq = u && u.skill === UNIT_TYPES[m.type].skill && u.questions.find(function (x) { return x.id === m.question; });
      return uq ? unitQuestion(u, uq, u.questions.indexOf(uq), { shuffle: true }) : null;
    }
    var q = { type: m.type, level: m.level, prompt: m.prompt, promptMain: m.promptMain || '', promptSub: m.promptSub || '', explanation: m.explanation, meta: { source: m.source } };
    if (m.word) q.meta.word = m.word;
    if (m.audio) q.audio = m.audio;
    if (QUESTION_TYPES[m.type].input) {
      q.kind = 'input';
      q.answer = m.answer;
      q.meta.accepted = m.accepted.slice();
      return q;
    }
    var order = shuffle(m.choices.map(function (c, i) { return i; }));
    q.choices = order.map(function (i) { return m.choices[i]; });
    q.correctIndex = order.indexOf(m.correctIndex);
    return q;
  }

  function recordPractice(q, answer, correct) {
    var p = getProgress();
    countType(p, q.type, correct);
    if (!correct) addMistake(p, q);
    saveProgress(p);
  }

  // A finished exam: its entry, every question for the type statistics, wrong and unanswered ones as mistakes.
  function recordExam() {
    var p = getProgress();
    var entry = { date: new Date().toISOString(), level: testState.level, correct: 0, total: 0, sections: [], skipped: testState.skipped.slice() };
    testState.sections.forEach(function (sec) {
      entry.sections.push({ name: sec.name, correct: sec.score, total: sec.questions.length });
      entry.correct += sec.score;
      entry.total += sec.questions.length;
      sec.questions.forEach(function (q, i) {
        var ok = !!(sec.answers[i] && sec.answers[i].correct);
        countType(p, q.type, ok);
        if (!ok) addMistake(p, q);
      });
    });
    p.exams = p.exams.concat([entry]).slice(-MAX_EXAMS);
    saveProgress(p);
  }

  // === BROWSE MODE ===
  // Shared by free practice and the mistake replay: next() supplies the questions, onReveal records the outcome.
  var browseState = {
    currentType: 'vocabMeaning',
    currentLevel: LEVELS[0],
    question: null,
    parts: null,
    answered: false,
    revealed: false
  };

  function initBrowseMode() {
    var panel = dom.quizContent;
    panel.innerHTML = '';

    var controls = el('div', 'quiz-browse-controls');
    var typeLabel = el('label', 'select-field quiz-type-field');
    typeLabel.appendChild(el('span', '', 'Fragetyp'));
    var typeSelect = document.createElement('select');
    typeSelect.className = 'quiz-type-select';
    typeSelect.id = 'quiz-type-select';
    var groups = {};
    TYPE_IDS.forEach(function (id) {
      var t = QUESTION_TYPES[id];
      if (!groups[t.group]) groups[t.group] = [];
      groups[t.group].push(t);
    });
    Object.keys(groups).forEach(function (grp) {
      var optgroup = document.createElement('optgroup');
      optgroup.label = grp;
      groups[grp].forEach(function (t) {
        var opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.icon + ' ' + t.label + (typeAvailable(t.id) ? '' : ' (ohne chinesische Sprachausgabe nicht verfügbar)');
        if (t.id === browseState.currentType) opt.selected = true;
        optgroup.appendChild(opt);
      });
      typeSelect.appendChild(optgroup);
    });
    typeSelect.addEventListener('change', function () {
      browseState.currentType = this.value;
      loadBrowseQuestion();
    });
    typeLabel.appendChild(typeSelect);
    controls.appendChild(typeLabel);

    var levelBar = el('div', 'quiz-level-bar');
    levelBar.setAttribute('role', 'group');
    levelBar.setAttribute('aria-label', 'Level');
    LEVELS.forEach(function (lv) {
      var pill = el('button', 'quiz-level-pill ' + levelClass(lv) + (lv === browseState.currentLevel ? ' active' : ''), levelLabel(lv));
      pill.type = 'button';
      pill.dataset.level = lv;
      pill.setAttribute('aria-pressed', String(lv === browseState.currentLevel));
      pill.addEventListener('click', function () {
        browseState.currentLevel = lv;
        levelBar.querySelectorAll('.quiz-level-pill').forEach(function (p) {
          p.classList.toggle('active', p === pill);
          p.setAttribute('aria-pressed', String(p === pill));
        });
        loadBrowseQuestion();
      });
      levelBar.appendChild(pill);
    });
    controls.appendChild(levelBar);
    panel.appendChild(controls);

    browseState.next = function () { return generateQuestion(browseState.currentType, browseState.currentLevel); };
    browseState.onReveal = recordPractice;
    browseState.onEnd = null;
    appendPracticeArea(panel, 'Übung beenden', 'Nächste Frage');
    loadBrowseQuestion();
  }

  function appendPracticeArea(panel, exitLabel, nextLabel) {
    var questionArea = el('div', 'quiz-question-area');
    questionArea.id = 'quiz-question-area';
    panel.appendChild(questionArea);

    var actions = el('div', 'quiz-browse-actions');
    var revealBtn = el('button', 'quiz-btn quiz-btn-reveal', 'Auflösen');
    revealBtn.id = 'quiz-reveal-btn';
    revealBtn.addEventListener('click', revealBrowseAnswer);
    actions.appendChild(revealBtn);

    var nextBtn = el('button', 'quiz-btn quiz-btn-next hidden', nextLabel);
    nextBtn.id = 'quiz-next-btn';
    nextBtn.addEventListener('click', loadBrowseQuestion);
    actions.appendChild(nextBtn);

    var backBtn = el('button', 'quiz-btn quiz-btn-back quiz-exit', exitLabel);
    backBtn.addEventListener('click', showHomeScreen);
    actions.appendChild(backBtn);

    panel.appendChild(actions);
  }

  function loadBrowseQuestion() {
    browseState.answered = false;
    browseState.revealed = false;
    var area = document.getElementById('quiz-question-area');
    if (!area) return;
    if (window.app && window.app.cancelSpeech) window.app.cancelSpeech();

    var q = browseState.next();
    browseState.question = q;
    var revealBtn = document.getElementById('quiz-reveal-btn');
    var nextBtn = document.getElementById('quiz-next-btn');

    if (!q && browseState.onEnd) { browseState.onEnd(); return; }
    if (!q) {
      area.innerHTML = '';
      area.appendChild(el('div', 'quiz-no-data', typeAvailable(browseState.currentType)
        ? 'Nicht genügend Daten für diesen Fragetyp und dieses Level verfügbar.'
        : 'Dieser Fragetyp braucht eine chinesische Stimme in der Sprachausgabe des Browsers, die hier nicht verfügbar ist. Im Probetest wird er übersprungen.'));
      if (revealBtn) revealBtn.classList.add('hidden');
      if (nextBtn) nextBtn.classList.add('hidden');
      return;
    }

    var parts = renderQuestionCard(q, area);
    browseState.parts = parts;
    renderAnswers(q, parts, function (answer) {
      if (browseState.revealed) return;
      if (q.kind === 'input') { revealBrowseAnswer(answer); return; }
      browseState.answered = true;
      browseState.selectedIdx = answer;
      parts.choicesDiv.querySelectorAll('.quiz-choice-btn').forEach(function (btn, i) {
        btn.classList.toggle('selected', i === answer);
        btn.setAttribute('aria-pressed', String(i === answer));
      });
      if (window.app) window.app.playTick();
    });

    if (revealBtn) { revealBtn.classList.remove('hidden'); revealBtn.disabled = false; }
    if (nextBtn) nextBtn.classList.add('hidden');
  }

  // Typed answers are checked as they are; Auflösen with an empty field just shows the answer.
  function revealBrowseAnswer(typed) {
    var q = browseState.question;
    if (!q || browseState.revealed) return;
    browseState.revealed = true;
    var answer;
    if (q.kind === 'input') {
      var input = browseState.parts.choicesDiv.querySelector('.quiz-pinyin-input');
      answer = typeof typed === 'string' ? typed : input ? input.value : '';
    } else {
      answer = browseState.answered ? browseState.selectedIdx : -1;
    }
    showResult(browseState.parts, q, answer);
    var correct = isCorrect(q, answer);
    if (correct && window.app) window.app.playPop();
    if (browseState.onReveal) browseState.onReveal(q, answer, correct);

    var revealBtn = document.getElementById('quiz-reveal-btn');
    var nextBtn = document.getElementById('quiz-next-btn');
    if (revealBtn) revealBtn.classList.add('hidden');
    if (nextBtn) { nextBtn.classList.remove('hidden'); nextBtn.focus({ preventScroll: true }); }
  }

  // === MISTAKE REPLAY ===
  // Most recent first, practice style; a right answer takes the item off the list, a wrong one counts up.
  var replayState = { queue: [], index: 0, right: 0, wrong: 0, notices: [] };
  var viewToken = 0;

  function startMistakeReplay() {
    var token = ++viewToken;
    var panel = dom.quizContent;
    panel.innerHTML = '';
    panel.appendChild(el('p', 'quiz-no-data', 'Fehlerliste wird geladen …'));
    var needsUnits = getProgress().mistakes.some(function (m) { return UNIT_TYPES[m.type]; });
    (needsUnits ? loadUnits() : Promise.resolve()).catch(function () { return null; }).then(function () {
      if (token !== viewToken) return;
      var p = getProgress();
      var queue = [], silent = 0, unloaded = 0, dropped = false;
      p.mistakes.slice().sort(byRecent).forEach(function (m) {
        if (typeInfo(m.type).speech && !speechAvailable()) { silent++; return; }
        if (UNIT_TYPES[m.type] && !getUnits()) { unloaded++; return; }
        var q = fromSnapshot(m);
        if (q) queue.push(q);
        else dropped = true;
      });
      // A unit that no longer exists cannot be replayed; its snapshots go.
      if (dropped) {
        p.mistakes = p.mistakes.filter(function (m) { return !UNIT_TYPES[m.type] || !getUnits() || fromSnapshot(m); });
        saveProgress(p);
      }
      var notices = [];
      if (silent) notices.push(silent + (silent === 1 ? ' Hörfrage' : ' Hörfragen') + ' übersprungen – keine Sprachausgabe.');
      if (unloaded) notices.push(unloaded + (unloaded === 1 ? ' Frage' : ' Fragen') + ' zu Lese- und Hörtexten übersprungen – die Texte konnten nicht geladen werden.');
      replayState = { queue: queue, index: 0, right: 0, wrong: 0, notices: notices };
      initReplayMode();
    });
  }

  function initReplayMode() {
    var panel = dom.quizContent;
    panel.innerHTML = '';
    var head = el('div', 'quiz-replay-head');
    head.appendChild(el('h2', 'quiz-replay-title', 'Fehler wiederholen'));
    var progress = el('p', 'quiz-replay-progress');
    head.appendChild(progress);
    replayState.notices.forEach(function (text) {
      var notice = el('p', 'quiz-notice', text);
      notice.setAttribute('role', 'note');
      head.appendChild(notice);
    });
    panel.appendChild(head);
    if (!replayState.queue.length) { showReplaySummary(); return; }

    browseState.next = function () {
      var q = replayState.queue[replayState.index] || null;
      if (q) {
        replayState.index++;
        progress.textContent = 'Fehler ' + replayState.index + ' von ' + replayState.queue.length;
      }
      return q;
    };
    browseState.onReveal = function (q, answer, correct) {
      var p = getProgress();
      countType(p, q.type, correct);
      if (correct) { removeMistake(p, q); replayState.right++; } else { addMistake(p, q); replayState.wrong++; }
      saveProgress(p);
    };
    browseState.onEnd = showReplaySummary;
    appendPracticeArea(panel, 'Wiederholen beenden', 'Nächster Fehler');
    loadBrowseQuestion();
  }

  function showReplaySummary() {
    var panel = dom.quizContent;
    var notices = replayState.queue.length ? [] : Array.from(panel.querySelectorAll('.quiz-notice'));
    panel.innerHTML = '';
    var box = el('div', 'quiz-interstitial');
    var title = el('h2', 'quiz-inter-title', replayState.queue.length ? 'Durchgang beendet' : 'Nichts zu wiederholen');
    box.appendChild(title);
    notices.forEach(function (n) { box.appendChild(n); });
    if (replayState.queue.length) {
      box.appendChild(el('p', 'quiz-inter-score', replayState.right + ' richtig – aus der Fehlerliste entfernt. ' +
        replayState.wrong + ' nicht richtig – bleiben in der Liste.'));
    }
    var left = getProgress().mistakes.length;
    box.appendChild(el('p', 'quiz-inter-name', left ? 'Noch ' + left + (left === 1 ? ' Frage' : ' Fragen') + ' in der Fehlerliste.' : 'Die Fehlerliste ist leer.'));
    if (left && replayState.queue.length) {
      var again = el('button', 'quiz-btn quiz-btn-next', 'Noch einmal');
      again.addEventListener('click', startMistakeReplay);
      box.appendChild(again);
    }
    var back = el('button', 'quiz-btn quiz-btn-back', 'Zurück');
    back.addEventListener('click', showHomeScreen);
    box.appendChild(back);
    panel.appendChild(box);
    focusHeading(title);
  }

  // === TEST MODE ===
  // phase: 'question' while a section runs, 'summary' between sections, 'results' at the end.
  var testState = {
    active: false, level: null, phase: null,
    sections: [], skipped: [], currentSection: 0, currentQuestion: 0,
    timerInterval: null, sectionEndTime: 0, recorded: false
  };
  var SKIPPED_NOTICE = 'Hören übersprungen – keine Sprachausgabe';

  function remainingSeconds() {
    return Math.max(0, Math.ceil((testState.sectionEndTime - Date.now()) / 1000));
  }

  function showTestSetup() {
    viewToken++;
    var panel = dom.quizContent;
    panel.innerHTML = '';

    var setup = el('div', 'quiz-test-setup');
    var title = el('h2', 'quiz-setup-title', 'HSK-Probetest');
    setup.appendChild(title);
    setup.appendChild(el('p', 'quiz-setup-desc', 'Wähle ein Level und starte dann den Probetest. Wie beim HSK hörst und liest du ganze Texte mit je drei Fragen, ' +
      'dazu kommen einzelne Aufgaben; auf HSK 1–2 folgt eine kurze Wortschatz-Sektion, ab HSK 3 eine schreibnahe Sektion mit Pinyin-Eingabe, ' +
      'Zählwörtern und Grammatik. Jeden Hörtext kannst du höchstens zweimal anhören. Jede Sektion hat ein eigenes Zeitlimit; ' +
      'am Ende siehst du eine Gesamtpunktzahl. Probetest – keine Bestehensprognose.'));
    if (!speechAvailable()) {
      var notice = el('p', 'quiz-notice', SKIPPED_NOTICE + '. Dein Browser bietet keine chinesische Stimme an, deshalb enthält der Probetest nur die übrigen Sektionen.');
      notice.setAttribute('role', 'note');
      setup.appendChild(notice);
    }

    var selectedLevel = EXAM_LEVELS[0];
    var levelGrid = el('div', 'quiz-test-level-grid');
    levelGrid.setAttribute('role', 'group');
    levelGrid.setAttribute('aria-label', 'HSK-Level für den Probetest');
    var startBtn = el('button', 'quiz-btn quiz-btn-start');
    startBtn.id = 'quiz-start-test';
    var updateStart = function () { startBtn.textContent = levelLabel(selectedLevel) + '-Probetest starten'; };
    EXAM_LEVELS.forEach(function (lv) {
      var plan = examPlan(lv);
      var totals = planTotals(plan);

      var card = el('button', 'quiz-test-level-card');
      card.type = 'button';
      card.dataset.level = lv;
      card.setAttribute('aria-pressed', String(lv === selectedLevel));
      card.appendChild(el('span', 'quiz-test-level-badge ' + levelClass(lv), levelLabel(lv)));
      var info = el('span', 'quiz-test-level-info');
      [totals.questions + ' Fragen', totals.minutes + ' Minuten', plan.sections.length + ' Sektionen'].forEach(function (text) { info.appendChild(el('span', '', text)); });
      card.appendChild(info);
      card.addEventListener('click', function () {
        selectedLevel = lv;
        levelGrid.querySelectorAll('.quiz-test-level-card').forEach(function (b) { b.setAttribute('aria-pressed', String(b === card)); });
        updateStart();
      });
      levelGrid.appendChild(card);
    });
    setup.appendChild(levelGrid);
    updateStart();
    startBtn.addEventListener('click', function () { startTest(selectedLevel); });
    setup.appendChild(startBtn);
    var loadError = el('p', 'quiz-notice hidden', 'Die Lese- und Hörtexte konnten nicht geladen werden. Versuche es bitte noch einmal.');
    loadError.id = 'quiz-load-error';
    loadError.setAttribute('role', 'alert');
    setup.appendChild(loadError);

    var backBtn = el('button', 'quiz-btn quiz-btn-back', 'Zurück');
    backBtn.addEventListener('click', showHomeScreen);
    setup.appendChild(backBtn);

    panel.appendChild(setup);
    focusHeading(title);
  }

  // The unit texts load first (at once when they are already there).
  function startTest(level) {
    if (getUnits()) { beginTest(level); return; }
    var token = viewToken;
    var startBtn = document.getElementById('quiz-start-test');
    var label = startBtn.textContent;
    startBtn.disabled = true;
    startBtn.textContent = 'Texte werden geladen …';
    loadUnits().then(function () { return !!getUnits(); }, function () { return false; }).then(function (ok) {
      if (token !== viewToken || testState.active) return;
      startBtn.disabled = false;
      startBtn.textContent = label;
      if (ok) beginTest(level);
      else document.getElementById('quiz-load-error').classList.remove('hidden');
    });
  }

  function beginTest(level) {
    var built = buildTestSections(level);
    if (!built) return;
    testState.active = true;
    testState.recorded = false;
    testState.level = level;
    testState.sections = built.sections;
    testState.skipped = built.skipped;
    startTestSection(0);
  }

  function startTestSection(sectionIdx) {
    testState.currentSection = sectionIdx;
    testState.currentQuestion = 0;
    testState.phase = 'question';
    testState.sectionEndTime = Date.now() + testState.sections[sectionIdx].time * 60 * 1000;
    startTimer();
    renderTestQuestion();
  }

  function startTimer() {
    stopTimer();
    var lastShown = -1;
    testState.timerInterval = setInterval(function () {
      if (testState.phase !== 'question') { stopTimer(); return; }
      var remaining = remainingSeconds();
      var timerEl = document.getElementById('quiz-timer');
      if (timerEl && remaining !== lastShown) {
        lastShown = remaining;
        timerEl.textContent = formatTime(remaining);
        timerEl.setAttribute('aria-label', spokenTime(remaining));
        timerEl.classList.toggle('warning', remaining <= 60);
        timerEl.classList.toggle('critical', remaining <= 10);
      }
      var sec = testState.sections[testState.currentSection];
      var timeBar = document.getElementById('quiz-time-bar');
      if (sec && timeBar) {
        var totalSec = sec.time * 60;
        timeBar.style.width = Math.min(100, ((totalSec - remaining) / totalSec) * 100) + '%';
      }
      if (remaining <= 0) finishCurrentSection();
    }, 250);
  }

  function stopTimer() {
    if (testState.timerInterval) { clearInterval(testState.timerInterval); testState.timerInterval = null; }
  }

  function renderTestQuestion() {
    if (!testState.active || testState.phase !== 'question') return;
    var secData = testState.sections[testState.currentSection];
    var qIdx = testState.currentQuestion;
    if (qIdx >= secData.questions.length) { finishCurrentSection(); return; }

    var panel = dom.quizContent;
    panel.innerHTML = '';
    var q = secData.questions[qIdx];

    var header = el('div', 'quiz-test-header');
    header.appendChild(el('span', 'quiz-test-section-label', 'Sektion ' + (testState.currentSection + 1) + ': ' + secData.name));
    header.appendChild(el('span', 'quiz-test-progress', 'Frage ' + (qIdx + 1) + ' / ' + secData.questions.length));
    var remaining = remainingSeconds();
    var timer = el('span', 'quiz-timer', formatTime(remaining));
    timer.id = 'quiz-timer';
    timer.setAttribute('role', 'timer');
    timer.setAttribute('aria-label', spokenTime(remaining));
    header.appendChild(timer);
    var exitBtn = el('button', 'quiz-btn quiz-exit', 'Probetest beenden');
    exitBtn.addEventListener('click', requestExit);
    header.appendChild(exitBtn);
    panel.appendChild(header);

    var progressBars = el('div', 'quiz-progress-bars');
    var qBar = el('div', 'quiz-progress-bar');
    var qFill = el('div', 'quiz-progress-fill');
    qFill.style.width = ((qIdx + 1) / secData.questions.length * 100) + '%';
    qBar.appendChild(qFill);
    progressBars.appendChild(qBar);
    var tBar = el('div', 'quiz-progress-bar time');
    var tFill = el('div', 'quiz-progress-fill time');
    tFill.id = 'quiz-time-bar';
    tBar.appendChild(tFill);
    progressBars.appendChild(tBar);
    panel.appendChild(progressBars);

    // A text keeps playing while its own questions follow.
    var prev = qIdx > 0 ? secData.questions[qIdx - 1] : null;
    var continued = q.kind === 'unit' && !!prev && prev.unit === q.unit;
    if (!continued && window.app && window.app.cancelSpeech) window.app.cancelSpeech();
    var questionArea = el('div', 'quiz-question-area');
    var parts = renderQuestionCard(q, questionArea, { continued: continued });
    parts.deferUnit = true;
    panel.appendChild(questionArea);

    var actions = el('div', 'quiz-browse-actions');
    var nextBtn = el('button', 'quiz-btn quiz-btn-next hidden', 'Weiter');
    nextBtn.id = 'quiz-test-next-btn';
    nextBtn.addEventListener('click', function () {
      if (testState.phase !== 'question' || !secData.answers[qIdx] || testState.currentQuestion !== qIdx) return;
      testState.currentQuestion++;
      renderTestQuestion();
    });
    actions.appendChild(nextBtn);
    panel.appendChild(actions);

    renderAnswers(q, parts, function (answer) {
      if (testState.phase !== 'question' || secData.answers[qIdx]) return;
      // An answer after the section time ran out does not count.
      if (remainingSeconds() <= 0) { finishCurrentSection(); return; }
      var correct = isCorrect(q, answer);
      secData.answers[qIdx] = q.kind === 'input' ? { selected: 0, typed: answer, correct: correct } : { selected: answer, correct: correct };
      if (correct) secData.score++;
      if (window.app) { if (correct) window.app.playPop(); else window.app.playTick(); }
      showResult(parts, q, answer);
      nextBtn.classList.remove('hidden');
      nextBtn.focus({ preventScroll: true });
    });
  }

  function finishCurrentSection() {
    if (!testState.active || testState.phase !== 'question') return;
    testState.phase = 'summary';
    stopTimer();
    if (window.app && window.app.cancelSpeech) window.app.cancelSpeech();
    var secData = testState.sections[testState.currentSection];
    for (var i = 0; i < secData.questions.length; i++) {
      if (!secData.answers[i]) secData.answers[i] = { selected: -1, correct: false };
    }
    var answered = secData.answers.filter(function (a) { return a.selected >= 0; }).length;

    var panel = dom.quizContent;
    panel.innerHTML = '';
    var inter = el('div', 'quiz-interstitial');
    var title = el('h2', 'quiz-inter-title', 'Sektion ' + (testState.currentSection + 1) + ' abgeschlossen');
    inter.appendChild(title);
    inter.appendChild(el('p', 'quiz-inter-name', secData.name));
    inter.appendChild(el('p', 'quiz-inter-score', answered + ' von ' + secData.questions.length + ' Fragen beantwortet. Die Auswertung folgt am Ende des Probetests.'));

    if (testState.currentSection < testState.sections.length - 1) {
      var nextBtn = el('button', 'quiz-btn quiz-btn-next', 'Weiter zur nächsten Sektion');
      nextBtn.addEventListener('click', function () {
        if (testState.phase === 'summary') startTestSection(testState.currentSection + 1);
      });
      inter.appendChild(nextBtn);
    } else {
      var resultBtn = el('button', 'quiz-btn quiz-btn-next', 'Ergebnisse anzeigen');
      resultBtn.addEventListener('click', showTestResults);
      inter.appendChild(resultBtn);
    }
    var exitBtn = el('button', 'quiz-btn quiz-exit', 'Probetest beenden');
    exitBtn.addEventListener('click', requestExit);
    inter.appendChild(exitBtn);

    panel.appendChild(inter);
    focusHeading(title);
  }

  function reviewPrompt(q) {
    return q.kind === 'unit' || !q.promptMain ? q.prompt : q.prompt + ' ' + q.promptMain;
  }

  function reviewLine(label, text, cls) {
    var line = el('span', 'review-line');
    line.appendChild(document.createTextNode(label + ': '));
    line.appendChild(el('span', cls, text));
    return line;
  }

  function reviewItem(q, ans, number) {
    var correct = !!(ans && ans.correct);
    var item = el('div', 'quiz-review-item ' + (correct ? 'correct' : 'wrong'));
    item.appendChild(el('span', 'review-num', number + '.'));
    item.appendChild(el('span', 'review-prompt', reviewPrompt(q)));
    var given = ans && ans.selected >= 0 ? (q.kind === 'input' ? ans.typed : q.choices[ans.selected]) : '';
    var lines = el('div', 'review-lines');
    lines.appendChild(reviewLine('Deine Antwort', given || 'nicht beantwortet', 'review-answer'));
    lines.appendChild(reviewLine('Richtig', correctText(q), 'review-correct'));
    item.appendChild(lines);
    var explanation = el('div', 'review-explanation');
    if (q.kind === 'unit') renderReasons(explanation, q);
    else setText(explanation, q.explanation);
    item.appendChild(explanation);
    return item;
  }

  // Unit questions under their text: title and a toggle for passage, pinyin and translation.
  function reviewUnitHeader(u) {
    var head = el('div', 'quiz-review-unit');
    head.appendChild(el('h4', 'quiz-review-unit-title', UNIT_TYPES[u.skill === 'listening' ? 'listeningUnit' : 'readingUnit'].label + ': ' + u.title));
    head.appendChild(unitTextToggle(u));
    return head;
  }

  function showTestResults() {
    stopTimer();
    if (window.app && window.app.cancelSpeech) window.app.cancelSpeech();
    testState.active = false;
    testState.phase = 'results';
    if (!testState.recorded) {
      testState.recorded = true;
      recordExam();
    }

    var panel = dom.quizContent;
    panel.innerHTML = '';
    var results = el('div', 'quiz-results');
    var title = el('h2', 'quiz-results-title', 'Ergebnis des Probetests — ' + levelLabel(testState.level));
    results.appendChild(title);
    if (testState.skipped.length) {
      var skipped = el('p', 'quiz-notice', SKIPPED_NOTICE + '. Die Gesamtpunktzahl umfasst nur die gestellten Sektionen.');
      skipped.setAttribute('role', 'note');
      results.appendChild(skipped);
    }

    var totalScore = 0, totalQuestions = 0;
    var breakdown = el('div', 'quiz-results-breakdown');
    testState.sections.forEach(function (sec, idx) {
      var total = sec.questions.length;
      totalScore += sec.score;
      totalQuestions += total;
      var row = el('div', 'quiz-result-row');
      row.appendChild(el('span', 'result-section-name', 'Sektion ' + (idx + 1) + ': ' + sec.name));
      row.appendChild(el('span', 'result-score', sec.score + ' / ' + total + ' richtig'));
      row.appendChild(el('span', 'result-pct', (total ? Math.round(sec.score / total * 100) : 0) + ' %'));
      breakdown.appendChild(row);
    });
    results.appendChild(breakdown);

    var totalPct = totalQuestions ? Math.round(totalScore / totalQuestions * 100) : 0;
    var overall = el('div', 'quiz-results-overall');
    overall.appendChild(el('div', 'overall-score', totalScore + ' / ' + totalQuestions + ' (' + totalPct + ' %)'));
    overall.appendChild(el('div', 'overall-note', 'Probetest – keine Bestehensprognose'));
    results.appendChild(overall);

    var detailBtn = el('button', 'quiz-btn quiz-btn-reveal', 'Details ansehen');
    var detailDiv = el('div', 'quiz-review-detail hidden');
    detailDiv.id = 'quiz-review-detail';
    detailBtn.setAttribute('aria-controls', detailDiv.id);
    detailBtn.setAttribute('aria-expanded', 'false');
    detailBtn.addEventListener('click', function () {
      var open = detailDiv.classList.toggle('hidden') === false;
      detailBtn.setAttribute('aria-expanded', String(open));
      detailBtn.textContent = open ? 'Details ausblenden' : 'Details ansehen';
    });
    results.appendChild(detailBtn);

    testState.sections.forEach(function (sec, sIdx) {
      detailDiv.appendChild(el('h3', 'quiz-review-section-header', 'Sektion ' + (sIdx + 1) + ': ' + sec.name));
      sec.questions.forEach(function (q, qIdx) {
        var prev = sec.questions[qIdx - 1];
        if (q.kind === 'unit' && (!prev || prev.unit !== q.unit)) detailDiv.appendChild(reviewUnitHeader(q.unit));
        detailDiv.appendChild(reviewItem(q, sec.answers[qIdx], qIdx + 1));
      });
    });
    results.appendChild(detailDiv);

    var actions = el('div', 'quiz-results-actions');
    var newBtn = el('button', 'quiz-btn quiz-btn-next', 'Neuer Probetest');
    newBtn.addEventListener('click', showTestSetup);
    actions.appendChild(newBtn);
    var homeBtn = el('button', 'quiz-btn quiz-btn-back', 'Zurück');
    homeBtn.addEventListener('click', showHomeScreen);
    actions.appendChild(homeBtn);
    results.appendChild(actions);

    panel.appendChild(results);
    focusHeading(title);
  }

  // === HOME SCREEN ===
  function formatDate(iso) {
    var d = new Date(iso);
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return pad(d.getDate()) + '.' + pad(d.getMonth() + 1) + '.' + d.getFullYear();
  }
  function percent(correct, total) { return total ? Math.round(correct / total * 100) : 0; }

  // Last exams, accuracy per type, the mistake list and a reset with an in-page confirmation.
  function renderStats() {
    var p = getProgress();
    var box = el('section', 'quiz-stats');
    var title = el('h3', 'quiz-stats-title', 'Dein Fortschritt');
    title.id = 'quiz-stats-title';
    box.setAttribute('aria-labelledby', title.id);
    box.appendChild(title);

    var mistakes = el('div', 'quiz-stats-mistakes');
    var count = p.mistakes.length;
    mistakes.appendChild(el('span', 'quiz-stats-count', count ? count + (count === 1 ? ' Frage' : ' Fragen') + ' in der Fehlerliste' : 'Die Fehlerliste ist leer.'));
    var replay = el('button', 'quiz-btn quiz-btn-next', 'Fehler wiederholen');
    replay.type = 'button';
    replay.id = 'quiz-replay-btn';
    replay.disabled = !count;
    replay.addEventListener('click', startMistakeReplay);
    mistakes.appendChild(replay);
    box.appendChild(mistakes);

    if (p.exams.length) {
      box.appendChild(el('h4', 'quiz-stats-sub', 'Letzte Probetests'));
      var exams = el('ol', 'quiz-stats-exams');
      p.exams.slice(-5).reverse().forEach(function (e) {
        exams.appendChild(el('li', '', formatDate(e.date) + ' · ' + levelLabel(e.level) + ' · ' + percent(e.correct, e.total) + ' % (' + e.correct + ' / ' + e.total + ')' +
          (e.skipped.length ? ' · ohne ' + e.skipped.join(', ') : '')));
      });
      box.appendChild(exams);
    }

    var typeIds = TYPE_IDS.concat(Object.keys(UNIT_TYPES)).filter(function (id) { return p.types[id] && p.types[id].answered > 0; });
    if (typeIds.length) {
      box.appendChild(el('h4', 'quiz-stats-sub', 'Trefferquote je Fragetyp'));
      var list = el('ul', 'quiz-stats-types');
      typeIds.forEach(function (id) {
        var t = p.types[id], pct = percent(t.correct, t.answered);
        var li = el('li', 'quiz-stats-type');
        li.dataset.type = id;
        li.appendChild(el('span', 'quiz-stats-label', typeInfo(id).label));
        var bar = el('span', 'quiz-stats-bar');
        bar.setAttribute('aria-hidden', 'true');
        var fill = el('span', 'quiz-stats-fill');
        fill.style.width = pct + '%';
        bar.appendChild(fill);
        li.appendChild(bar);
        li.appendChild(el('span', 'quiz-stats-value', pct + ' % (' + t.correct + ' / ' + t.answered + ')'));
        list.appendChild(li);
      });
      box.appendChild(list);
    }

    if (!count && !p.exams.length && !typeIds.length) {
      box.appendChild(el('p', 'quiz-stats-empty', 'Noch keine Ergebnisse. Übe oder mache einen Probetest – deine Fortschritte erscheinen dann hier.'));
      return box;
    }

    var reset = el('button', 'quiz-btn quiz-stats-reset', 'Statistik zurücksetzen');
    reset.type = 'button';
    var confirmBox = el('div', 'quiz-stats-confirm hidden');
    confirmBox.setAttribute('role', 'group');
    confirmBox.setAttribute('aria-label', 'Zurücksetzen bestätigen');
    var question = el('p', '', 'Alle Probetests, Trefferquoten und die Fehlerliste löschen? Das lässt sich nicht rückgängig machen.');
    question.tabIndex = -1;
    confirmBox.appendChild(question);
    var yes = el('button', 'quiz-btn quiz-stats-reset-yes', 'Ja, zurücksetzen');
    yes.type = 'button';
    var no = el('button', 'quiz-btn quiz-stats-reset-no', 'Abbrechen');
    no.type = 'button';
    confirmBox.appendChild(yes);
    confirmBox.appendChild(no);
    reset.addEventListener('click', function () {
      reset.classList.add('hidden');
      confirmBox.classList.remove('hidden');
      question.focus({ preventScroll: true });
    });
    no.addEventListener('click', function () {
      confirmBox.classList.add('hidden');
      reset.classList.remove('hidden');
      reset.focus({ preventScroll: true });
    });
    yes.addEventListener('click', function () {
      saveProgress(emptyProgress());
      var fresh = renderStats();
      box.replaceWith(fresh);
      focusHeading(fresh.querySelector('.quiz-stats-title'));
    });
    box.appendChild(reset);
    box.appendChild(confirmBox);
    return box;
  }

  function showHomeScreen() {
    stopTimer();
    viewToken++;
    if (window.app && window.app.cancelSpeech) window.app.cancelSpeech();
    testState.active = false;
    testState.phase = null;

    var panel = dom.quizContent;
    panel.innerHTML = '';

    var home = el('div', 'quiz-home');
    home.appendChild(el('h2', 'quiz-home-title', 'Quiz & Test'));
    home.appendChild(el('p', 'quiz-home-desc', 'Teste dein Wissen mit Fragen aus allen Bereichen — Hanzi, Vokabeln, Grammatik und Zählwörter.'));

    var cards = el('div', 'quiz-home-cards');
    var browseCard = el('button', 'quiz-home-card browse');
    browseCard.type = 'button';
    browseCard.innerHTML = '<span class="quiz-card-icon" lang="zh-CN" aria-hidden="true">练</span><span class="quiz-card-title">Übungsmodus</span><span class="quiz-card-text">Frei üben nach Fragetyp und Level. Kein Timer, kein Scoring.</span>';
    browseCard.addEventListener('click', initBrowseMode);
    cards.appendChild(browseCard);

    var testCard = el('button', 'quiz-home-card test');
    testCard.type = 'button';
    testCard.innerHTML = '<span class="quiz-card-icon" lang="zh-CN" aria-hidden="true">试</span><span class="quiz-card-title">Prüfungsmodus</span><span class="quiz-card-text">HSK-ähnlicher Probetest mit Hören, Lesen und einer dritten Sektion, Zeitlimit je Sektion und Gesamtpunktzahl. Ohne Bestehensprognose.</span>';
    testCard.addEventListener('click', showTestSetup);
    cards.appendChild(testCard);

    home.appendChild(cards);
    home.appendChild(renderStats());
    panel.appendChild(home);
  }

  // === KEYBOARD ===
  function handleQuizKey(e) {
    if (!dom.quizPanel || dom.quizPanel.classList.contains('hidden')) return false;
    if (e.isComposing || e.keyCode === 229 || e.ctrlKey || e.altKey || e.metaKey) return false;
    var focused = document.activeElement;
    if (focused && (focused.matches('input, select, textarea') || focused.isContentEditable)) return false;
    // A focused button handles Enter itself.
    if (e.key === 'Enter' && focused && focused.matches('button, a, summary')) return false;

    if (/^[1-4]$/.test(e.key)) {
      var num = Number(e.key);
      var active = dom.quizContent.querySelectorAll('.quiz-choice-btn:not([disabled])');
      if (active.length >= num) { active[num - 1].click(); e.preventDefault(); return true; }
      // While a question is on screen, digits belong to its options, not to tab switching.
      if (dom.quizContent.querySelector('.quiz-choice-btn, .quiz-pinyin-input')) { e.preventDefault(); return true; }
    }

    if (e.key === 'Enter') {
      var ids = testState.active ? ['quiz-test-next-btn'] : ['quiz-reveal-btn', 'quiz-next-btn'];
      for (var i = 0; i < ids.length; i++) {
        var btn = document.getElementById(ids[i]);
        if (btn && !btn.classList.contains('hidden')) { btn.click(); e.preventDefault(); return true; }
      }
    }

    if (e.key === 'Escape' && testState.active) {
      requestExit();
      e.preventDefault();
      return true;
    }
    return false;
  }

  // === INIT ===
  function onTabActivate() {
    if (!dom.quizContent) {
      dom.quizPanel = document.getElementById('quiz-tab');
      dom.quizContent = document.getElementById('quiz-content');
    }
    if (!dom.quizContent) return;
    // A running practice or exam stays where it was when the user comes back.
    if (!testState.active && !dom.quizContent.children.length) showHomeScreen();
  }

  // Leaving an active mock exam (exit button, tab switch, history navigation) needs confirmation.
  function requestExit() {
    if (!testState.active) return true;
    if (!confirm('Aktives Training beenden? Dein bisheriges Ergebnis wird verworfen.')) return false;
    stopTimer();
    testState.active = false;
    showHomeScreen();
    return true;
  }

  window.addEventListener('beforeunload', function (event) {
    if (!testState.active) return;
    event.preventDefault();
    event.returnValue = '';
  });
  window.addEventListener('pagehide', stopTimer);

  window.QuizModule = {
    onTabActivate: onTabActivate,
    handleKey: handleQuizKey,
    requestExit: requestExit,
    isTestActive: function () { return testState.active; },
    audit: {
      generateQuestion: generateQuestion,
      buildChoices: buildChoices,
      buildTestSections: buildTestSections,
      examPlan: examPlan,
      planTotals: planTotals,
      unitQuestions: unitQuestions,
      questionKey: questionKey,
      itemKey: itemKey,
      snapshot: snapshot,
      fromSnapshot: fromSnapshot,
      progressKey: PROGRESS_KEY,
      unitTypes: UNIT_TYPES,
      renderQuestionCard: renderQuestionCard,
      renderChoiceButtons: renderChoiceButtons,
      showFeedback: showFeedback,
      renderAnswers: renderAnswers,
      showResult: showResult,
      isCorrect: isCorrect,
      checkPinyinAnswer: checkPinyinAnswer,
      formationSkeleton: formationSkeleton,
      slotWords: slotWords,
      lookalikes: lookalikes,
      nearlySameMeaning: nearlySameMeaning,
      speechAvailable: speechAvailable,
      broadClassifiers: BROAD_CLASSIFIERS,
      currentQuestion: function () { return browseState.question; },
      reviewedGrammarCloze: reviewedGrammarCloze,
      normalizeAnswer: normalizeAnswer,
      pinyinKey: pinyinKey,
      glossKeys: glossKeys,
      hasTone: hasTone,
      questionTypes: QUESTION_TYPES,
      clozeTypes: CLOZE_TYPES,
      levels: LEVELS,
      examLevels: EXAM_LEVELS,
      blank: BLANK
    }
  };
})();
