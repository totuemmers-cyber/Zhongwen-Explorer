// ============================================================
// Quiz & Test System for Zhongwen Explorer
// ============================================================
(function () {
  'use strict';

  var QUESTION_TYPES = {
    vocabMeaning:    { id: 'vocabMeaning',    group: 'Vokabeln',    label: 'Bedeutung erkennen',   icon: '意' },
    vocabPinyin:     { id: 'vocabPinyin',     group: 'Vokabeln',    label: 'Pinyin erkennen',      icon: '拼' },
    vocabReverse:    { id: 'vocabReverse',    group: 'Vokabeln',    label: 'Wort erkennen',        icon: '词' },
    vocabContext:    { id: 'vocabContext',    group: 'Vokabeln',    label: 'Kontextfrage',         icon: '文' },
    hanziMeaning:    { id: 'hanziMeaning',    group: 'Hanzi',       label: 'Hanzi-Bedeutung',     icon: '字' },
    hanziPinyin:     { id: 'hanziPinyin',     group: 'Hanzi',       label: 'Hanzi-Pinyin',        icon: '音' },
    hanziRadical:    { id: 'hanziRadical',    group: 'Hanzi',       label: 'Radikal erkennen',    icon: '部' },
    grammarMeaning:  { id: 'grammarMeaning',  group: 'Grammatik',   label: 'Grammatik-Bedeutung', icon: '文' },
    grammarCloze:    { id: 'grammarCloze',    group: 'Grammatik',   label: 'Lückentext',          icon: '穴' },
    grammarFormation:{ id: 'grammarFormation', group: 'Grammatik',  label: 'Satzbildung',         icon: '形' },
    measureWord:     { id: 'measureWord',     group: 'Zählwörter',  label: 'Zählwort erkennen',   icon: '量' }
  };

  var TYPE_IDS = Object.keys(QUESTION_TYPES);
  var CLOZE_TYPES = { vocabContext: true, grammarCloze: true };

  var SECTION_TYPES = {
    basic: ['vocabMeaning', 'vocabPinyin', 'vocabReverse', 'vocabContext', 'hanziMeaning', 'hanziPinyin'],
    basicRadical: ['vocabMeaning', 'vocabPinyin', 'vocabReverse', 'vocabContext', 'hanziMeaning', 'hanziPinyin', 'hanziRadical'],
    grammar: ['grammarMeaning', 'grammarCloze', 'grammarFormation', 'measureWord'],
    reading: ['vocabContext', 'grammarCloze', 'vocabMeaning', 'hanziMeaning']
  };
  function testSections(basicTypes, counts, times) {
    return [
      { name: 'Schriftzeichen & Vokabeln', count: counts[0], time: times[0], types: SECTION_TYPES[basicTypes] },
      { name: 'Grammatik & Zählwörter', count: counts[1], time: times[1], types: SECTION_TYPES.grammar },
      { name: 'Leseverständnis', count: counts[2], time: times[2], types: SECTION_TYPES.reading }
    ];
  }
  var TEST_CONFIGS = {
    HSK1: { sections: testSections('basic', [25, 20, 15], [20, 20, 20]) },
    HSK2: { sections: testSections('basic', [30, 25, 20], [25, 25, 25]) },
    HSK3: { sections: testSections('basicRadical', [35, 30, 25], [30, 35, 35]) },
    HSK4: { sections: testSections('basicRadical', [40, 35, 30], [30, 35, 40]) },
    HSK5: { sections: testSections('basicRadical', [45, 40, 35], [35, 40, 50]) },
    HSK6: { sections: testSections('basicRadical', [50, 45, 40], [40, 45, 55]) },
    'HSK7-9': { sections: testSections('basicRadical', [55, 50, 45], [45, 50, 60]) }
  };

  // Practice offers every level incl. Zusatz; the mock exam only the syllabus levels.
  var PROFILE = window.LANG_PROFILE || {};
  var EXAM_LEVELS = (PROFILE.levels || ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9']).filter(function (lv) { return TEST_CONFIGS[lv]; });
  var LEVELS = EXAM_LEVELS.concat(PROFILE.extraLevel ? [PROFILE.extraLevel] : []);

  function levelLabel(level) {
    if (level === 'HSK7-9') return 'HSK 7–9';
    return String(level || '').replace(/^HSK(\d)$/, 'HSK $1');
  }
  function levelClass(level) { return String(level).toLowerCase(); }

  // === DATA ACCESSORS ===
  // Draft meanings (not yet reviewed) are never used as quiz answers or distractors.
  function isQuizReady(v) { return v.meaningStatus !== 'draft'; }

  function sectionItems(name) {
    var sec = window.app && window.app.sections[name];
    return sec ? sec.allItems : [];
  }

  function getVocabByLevel(level) {
    return sectionItems('vocab').filter(function (v) { return v.level === level && v.word && v.meaning && isQuizReady(v); });
  }

  function getAllVocab() {
    return sectionItems('vocab').filter(function (v) { return v.word && v.meaning && isQuizReady(v); });
  }

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
  var HAN_RE = /[㐀-䶿一-鿿豈-﫿]/;
  var ZH_RUN_RE = /[　-〿㐀-䶿一-鿿豈-﫿＀-￯]+/g;
  var LATIN_RE = /[A-Za-zÀ-ɏ]/;
  var TONE_RE = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜńňǹḿ̀́̄̌]/;

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

  // Indexes of the whole inventory (rebuilt when the loaded data changes).
  var vocabIndex = null;
  function getVocabIndex() {
    var all = getAllVocab();
    if (vocabIndex && vocabIndex.size === all.length) return vocabIndex;
    vocabIndex = { size: all.length, byWord: {}, byGloss: {} };
    all.forEach(function (v) {
      (vocabIndex.byWord[v.word] = vocabIndex.byWord[v.word] || []).push(v);
      glossKeys(v.meaning).forEach(function (k) { (vocabIndex.byGloss[k] = vocabIndex.byGloss[k] || []).push(v); });
    });
    return vocabIndex;
  }

  var hanziIndex = null;
  function getHanziIndex() {
    var all = sectionItems('hanzi');
    if (hanziIndex && hanziIndex.size === all.length) return hanziIndex;
    hanziIndex = { size: all.length, byChar: {}, toneless: [] };
    all.forEach(function (k) {
      hanziIndex.byChar[k.hanzi] = k;
      (k.readings || []).forEach(function (r) {
        if (r.pinyin && !hasTone(r.pinyin) && r.pinyin.length > 1 && hanziIndex.toneless.indexOf(r.pinyin) === -1) hanziIndex.toneless.push(r.pinyin);
      });
    });
    return hanziIndex;
  }

  // Up to `count` wrong options from `pool`: valid ones only, distinct from the answer and each other;
  // candidates for which `preferred` holds come first.
  function pickDistractors(pool, count, opts) {
    var keyOf = opts.key || normalizeAnswer;
    var seen = {};
    (opts.taken || []).forEach(function (t) { seen[keyOf(t)] = true; });
    var first = [], rest = [];
    pool.forEach(function (c) { (opts.preferred && !opts.preferred(c) ? rest : first).push(c); });
    var order = shuffle(first).concat(shuffle(rest));
    var out = [];
    for (var i = 0; i < order.length && out.length < count; i++) {
      var text = opts.text(order[i]);
      var key = keyOf(text);
      if (!text || !key || seen[key] || (opts.valid && !opts.valid(order[i]))) continue;
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
      valid: function (v) { return v.word !== item.word && !sharesGloss(validKeys, v.meaning); }
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
    return {
      excluded: excluded,
      valid: function (v) { return !excluded[v.word] && pinyinKey(v.pinyin) !== sound; }
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
    var rules = wordDistractorRules(item);
    var distractors = pickDistractors(pool, 3, {
      text: function (v) { return v.word; },
      taken: [item.word],
      valid: function (v) { return rules.valid(v) && ex.chinese.indexOf(v.word) === -1; },
      preferred: function (v) { return v.word.length === item.word.length; }
    });
    var c = buildChoices(item.word, distractors);
    if (!c) return null;
    return question({
      type: 'vocabContext', level: level,
      prompt: 'Welches Wort passt in die Lücke?',
      promptMain: sentence,
      promptSub: ex.german,
      explanation: item.word + ' (' + item.pinyin + ') — ' + ex.chinese + (ex.pinyin ? '\n' + ex.pinyin : '')
    }, c, { source: item.id || item.word, word: item.word, excludedWords: rules.excluded, pinyin: item.pinyin, sentence: ex.chinese, answer: item.word });
  }

  // The asked reading of a hanzi is its first one; the option shows its first gloss.
  function hanziGloss(k) { return firstGloss(k.readings[0].meaning); }
  function hanziGlossKeys(k) {
    var keys = [];
    k.readings.forEach(function (r) { glossKeys(r.meaning).forEach(function (g) { if (keys.indexOf(g) === -1) keys.push(g); }); });
    return keys;
  }

  function genHanziMeaning(level) {
    var pool = getLevelPool(getHanziByLevel, level).filter(function (k) { return isQuizReady(k) && hanziGloss(k); });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var correct = hanziGloss(item);
    var itemKeys = hanziGlossKeys(item);
    var correctKeys = glossKeys(correct);
    var distractors = pickDistractors(pool, 3, {
      text: hanziGloss,
      taken: [correct],
      // Neither may the option fit the asked character nor the character share the asked meaning.
      valid: function (k) {
        return k.hanzi !== item.hanzi && !sharesGloss(itemKeys, hanziGloss(k)) &&
          !k.readings.some(function (r) { return sharesGloss(correctKeys, r.meaning); });
      }
    });
    var c = buildChoices(correct, distractors);
    if (!c) return null;
    return question({
      type: 'hanziMeaning', level: level,
      prompt: 'Was bedeutet dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: item.readings[0].pinyin,
      explanation: item.hanzi + ' = ' + item.readings.map(function (r) { return r.pinyin + ' ' + r.meaning; }).join('\n')
    }, c, { source: item.hanzi, hanzi: item.hanzi, validKeys: itemKeys });
  }

  function genHanziPinyin(level) {
    // A toneless first reading (吧 ba, 儿 r) is only asked when the character has no other.
    var pool = getLevelPool(getHanziByLevel, level).filter(function (k) {
      return k.readings[0].pinyin && (hasTone(k.readings[0].pinyin) || k.readings.length === 1);
    });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var answer = item.readings[0].pinyin;
    var readings = item.readings.map(function (r) { return r.pinyin; });
    var valid = readings.map(pinyinKey);
    var distractors;
    if (hasTone(answer)) {
      distractors = pickDistractors(pool, 3, {
        text: function (k) { return k.readings[0].pinyin; },
        key: pinyinKey,
        taken: [answer],
        valid: function (k) { return k.hanzi !== item.hanzi && hasTone(k.readings[0].pinyin) && valid.indexOf(pinyinKey(k.readings[0].pinyin)) === -1; }
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
    return question({
      type: 'hanziPinyin', level: level,
      prompt: 'Wie lautet das Pinyin für dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: isQuizReady(item) ? hanziGloss(item) : '',
      explanation: item.hanzi + ': ' + readings.join(', ')
    }, c, { source: item.hanzi, hanzi: item.hanzi, validPinyin: valid });
  }

  // Asks for the primary (Kangxi) radical the character is listed under.
  function radicalLabel(r) {
    return r.radical + (r.variants && r.variants.length ? '/' + r.variants.join('/') : '') + ' (' + r.meaning + ')';
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
    var distractors = pickDistractors(radicals, 3, {
      text: radicalLabel,
      taken: [correct],
      valid: function (r) { return r.radical !== radical.radical && r.radical !== item.hanzi; }
    });
    var c = buildChoices(correct, distractors);
    if (!c) return null;
    return question({
      type: 'hanziRadical', level: level,
      prompt: 'Unter welchem Radikal steht dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: isQuizReady(item) ? hanziGloss(item) : '',
      explanation: item.hanzi + ' steht unter dem Radikal ' + radical.radical + ' (' + radical.meaning + ')' +
        (item.radicalForm ? ', im Zeichen als ' + item.radicalForm + ' geschrieben' : '')
    }, c, { source: item.hanzi, hanzi: item.hanzi });
  }

  function genGrammarMeaning(level) {
    var pool = getLevelPool(getGrammarByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var keys = glossKeys(item.meaning);
    var distractors = pickDistractors(pool, 3, {
      text: function (g) { return g.meaning; },
      taken: [item.meaning],
      valid: function (g) { return g.pattern !== item.pattern && !sharesGloss(keys, g.meaning); }
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

  function genGrammarFormation(level) {
    var pool = getLevelPool(getGrammarByLevel, level).filter(function (g) { return g.formation; });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var distractors = pickDistractors(pool, 3, {
      text: function (g) { return g.formation; },
      taken: [item.formation],
      valid: function (g) { return g.pattern !== item.pattern; }
    });
    var c = buildChoices(item.formation, distractors);
    if (!c) return null;
    return question({
      type: 'grammarFormation', level: level,
      prompt: 'Wie wird dieses Muster gebildet?',
      promptMain: item.pattern,
      promptSub: item.meaning,
      explanation: item.pattern + ': ' + item.formation
    }, c, { source: item.id || item.pattern });
  }

  function genMeasureWord(level) {
    var mws = getMeasureWords();
    if (mws.length < 4) return null;
    var item = pickRandom(mws);
    if (item.meaning.indexOf(item.classifier) !== -1) return null;
    var label = function (m) { return m.classifier + ' (' + m.pinyin + ')'; };
    var keys = glossKeys(item.meaning);
    var distractors = pickDistractors(mws, 3, {
      text: label,
      taken: [label(item)],
      valid: function (m) { return m.classifier !== item.classifier && !sharesGloss(keys, m.meaning); }
    });
    var c = buildChoices(label(item), distractors);
    if (!c) return null;
    // The usage note often names the classifier itself; then it would give the answer away.
    var usage = item.usage && item.usage.indexOf(item.classifier) === -1 ? item.usage : '';
    return question({
      type: 'measureWord', level: level,
      prompt: 'Welches Zählwort passt?',
      promptMain: item.meaning,
      promptSub: usage,
      explanation: item.meaning + ' → ' + label(item) + (item.usage ? '\n' + item.usage : '')
    }, c, { source: item.classifier, answer: item.classifier });
  }

  var GENERATORS = {
    vocabMeaning: genVocabMeaning,
    vocabPinyin: genVocabPinyin,
    vocabReverse: genVocabReverse,
    vocabContext: genVocabContext,
    hanziMeaning: genHanziMeaning,
    hanziPinyin: genHanziPinyin,
    hanziRadical: genHanziRadical,
    grammarMeaning: genGrammarMeaning,
    grammarCloze: genGrammarCloze,
    grammarFormation: genGrammarFormation,
    measureWord: genMeasureWord
  };

  function generateQuestion(typeId, level) {
    var gen = GENERATORS[typeId];
    if (!gen) return null;
    for (var i = 0; i < 12; i++) {
      var q = gen(level);
      if (q) return q;
    }
    return null;
  }

  function questionKey(q) { return q.type + '\u0001' + q.meta.source; }

  // Pre-generates a mock exam; the same item never comes twice with the same question type.
  function buildTestSections(level) {
    var cfg = TEST_CONFIGS[level];
    if (!cfg) return null;
    var asked = {};
    function fresh(typeId) {
      for (var attempt = 0; attempt < 12; attempt++) {
        var q = generateQuestion(typeId, level);
        if (!q) return null;
        if (!asked[questionKey(q)]) return q;
      }
      return null;
    }
    return cfg.sections.map(function (sec) {
      var questions = [];
      for (var i = 0; i < sec.count; i++) {
        var q = fresh(sec.types[i % sec.types.length]);
        for (var t = 0; !q && t < sec.types.length; t++) q = fresh(sec.types[t]);
        if (!q) continue;
        asked[questionKey(q)] = true;
        questions.push(q);
      }
      return { name: sec.name, time: sec.time, questions: questions, answers: [], score: 0 };
    });
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
    setText(parts.explDiv, q.explanation);
    parts.explDiv.classList.remove('hidden');
  }

  function renderQuestionCard(q, container) {
    container.innerHTML = '';
    var card = el('div', 'quiz-question-card');

    var badges = el('div', 'quiz-badges');
    badges.appendChild(el('span', 'quiz-type-badge', QUESTION_TYPES[q.type].label));
    badges.appendChild(el('span', 'quiz-level-badge ' + levelClass(q.level), levelLabel(q.level)));
    card.appendChild(badges);

    var prompt = el('h3', 'quiz-prompt', q.prompt);
    prompt.tabIndex = -1;
    card.appendChild(prompt);
    if (q.promptMain) card.appendChild(el('div', 'quiz-prompt-main', q.promptMain));
    if (q.promptSub) card.appendChild(el('p', 'quiz-prompt-sub', q.promptSub));

    var choicesDiv = el('div', 'quiz-choices');
    card.appendChild(choicesDiv);
    var feedback = el('p', 'quiz-feedback');
    feedback.setAttribute('role', 'status');
    card.appendChild(feedback);
    var explDiv = el('div', 'quiz-explanation hidden');
    card.appendChild(explDiv);

    container.appendChild(card);
    setTimeout(function () { if (prompt.isConnected) prompt.focus({ preventScroll: true }); }, 0);
    return { choicesDiv: choicesDiv, feedback: feedback, explDiv: explDiv, card: card };
  }

  function focusHeading(node) {
    node.tabIndex = -1;
    node.focus({ preventScroll: true });
  }

  // === BROWSE MODE ===
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
        opt.textContent = t.icon + ' ' + t.label;
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

    var questionArea = el('div', 'quiz-question-area');
    questionArea.id = 'quiz-question-area';
    panel.appendChild(questionArea);

    var actions = el('div', 'quiz-browse-actions');
    var revealBtn = el('button', 'quiz-btn quiz-btn-reveal', 'Auflösen');
    revealBtn.id = 'quiz-reveal-btn';
    revealBtn.addEventListener('click', revealBrowseAnswer);
    actions.appendChild(revealBtn);

    var nextBtn = el('button', 'quiz-btn quiz-btn-next hidden', 'Nächste Frage');
    nextBtn.id = 'quiz-next-btn';
    nextBtn.addEventListener('click', loadBrowseQuestion);
    actions.appendChild(nextBtn);

    var backBtn = el('button', 'quiz-btn quiz-btn-back quiz-exit', 'Übung beenden');
    backBtn.addEventListener('click', showHomeScreen);
    actions.appendChild(backBtn);

    panel.appendChild(actions);
    loadBrowseQuestion();
  }

  function loadBrowseQuestion() {
    browseState.answered = false;
    browseState.revealed = false;
    var area = document.getElementById('quiz-question-area');
    if (!area) return;

    var q = generateQuestion(browseState.currentType, browseState.currentLevel);
    browseState.question = q;
    var revealBtn = document.getElementById('quiz-reveal-btn');
    var nextBtn = document.getElementById('quiz-next-btn');

    if (!q) {
      area.innerHTML = '<div class="quiz-no-data">Nicht genügend Daten für diesen Fragetyp und dieses Level verfügbar.</div>';
      if (revealBtn) revealBtn.classList.add('hidden');
      if (nextBtn) nextBtn.classList.add('hidden');
      return;
    }

    var parts = renderQuestionCard(q, area);
    browseState.parts = parts;
    renderChoiceButtons(q, parts.choicesDiv, function (idx) {
      if (browseState.revealed) return;
      browseState.answered = true;
      browseState.selectedIdx = idx;
      parts.choicesDiv.querySelectorAll('.quiz-choice-btn').forEach(function (btn, i) {
        btn.classList.toggle('selected', i === idx);
        btn.setAttribute('aria-pressed', String(i === idx));
      });
      if (window.app) window.app.playTick();
    });

    if (revealBtn) { revealBtn.classList.remove('hidden'); revealBtn.disabled = false; }
    if (nextBtn) nextBtn.classList.add('hidden');
  }

  function revealBrowseAnswer() {
    if (!browseState.question || browseState.revealed) return;
    browseState.revealed = true;
    var selectedIdx = browseState.answered ? browseState.selectedIdx : -1;
    showFeedback(browseState.parts, browseState.question, selectedIdx);
    if (selectedIdx === browseState.question.correctIndex && window.app) window.app.playPop();

    var revealBtn = document.getElementById('quiz-reveal-btn');
    var nextBtn = document.getElementById('quiz-next-btn');
    if (revealBtn) revealBtn.classList.add('hidden');
    if (nextBtn) { nextBtn.classList.remove('hidden'); nextBtn.focus({ preventScroll: true }); }
  }

  // === TEST MODE ===
  // phase: 'question' while a section runs, 'summary' between sections, 'results' at the end.
  var testState = {
    active: false, level: null, phase: null,
    sections: [], currentSection: 0, currentQuestion: 0,
    timerInterval: null, sectionEndTime: 0
  };

  function remainingSeconds() {
    return Math.max(0, Math.ceil((testState.sectionEndTime - Date.now()) / 1000));
  }

  function showTestSetup() {
    var panel = dom.quizContent;
    panel.innerHTML = '';

    var setup = el('div', 'quiz-test-setup');
    var title = el('h2', 'quiz-setup-title', 'HSK-Probetest');
    setup.appendChild(title);
    setup.appendChild(el('p', 'quiz-setup-desc', 'Wähle ein Level und starte dann den Probetest. Jede Sektion hat ein eigenes Zeitlimit; am Ende siehst du deine Gesamtpunktzahl. Hörverstehen ist nicht enthalten, und das Ergebnis ist keine Bestehensprognose.'));

    var selectedLevel = EXAM_LEVELS[0];
    var levelGrid = el('div', 'quiz-test-level-grid');
    levelGrid.setAttribute('role', 'group');
    levelGrid.setAttribute('aria-label', 'HSK-Level für den Probetest');
    var startBtn = el('button', 'quiz-btn quiz-btn-start');
    startBtn.id = 'quiz-start-test';
    var updateStart = function () { startBtn.textContent = levelLabel(selectedLevel) + '-Probetest starten'; };
    EXAM_LEVELS.forEach(function (lv) {
      var cfg = TEST_CONFIGS[lv];
      var total = 0, minutes = 0;
      cfg.sections.forEach(function (s) { total += s.count; minutes += s.time; });

      var card = el('button', 'quiz-test-level-card');
      card.type = 'button';
      card.dataset.level = lv;
      card.setAttribute('aria-pressed', String(lv === selectedLevel));
      card.appendChild(el('span', 'quiz-test-level-badge ' + levelClass(lv), levelLabel(lv)));
      var info = el('span', 'quiz-test-level-info');
      [total + ' Fragen', minutes + ' Minuten', cfg.sections.length + ' Sektionen'].forEach(function (text) { info.appendChild(el('span', '', text)); });
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

    var backBtn = el('button', 'quiz-btn quiz-btn-back', 'Zurück');
    backBtn.addEventListener('click', showHomeScreen);
    setup.appendChild(backBtn);

    panel.appendChild(setup);
    focusHeading(title);
  }

  function startTest(level) {
    var sections = buildTestSections(level);
    if (!sections) return;
    testState.active = true;
    testState.level = level;
    testState.sections = sections;
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

    var questionArea = el('div', 'quiz-question-area');
    var parts = renderQuestionCard(q, questionArea);
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

    renderChoiceButtons(q, parts.choicesDiv, function (idx) {
      if (testState.phase !== 'question' || secData.answers[qIdx]) return;
      // An answer after the section time ran out does not count.
      if (remainingSeconds() <= 0) { finishCurrentSection(); return; }
      var correct = idx === q.correctIndex;
      secData.answers[qIdx] = { selected: idx, correct: correct };
      if (correct) secData.score++;
      if (window.app) { if (correct) window.app.playPop(); else window.app.playTick(); }
      showFeedback(parts, q, idx);
      nextBtn.classList.remove('hidden');
      nextBtn.focus({ preventScroll: true });
    });
  }

  function finishCurrentSection() {
    if (!testState.active || testState.phase !== 'question') return;
    testState.phase = 'summary';
    stopTimer();
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

  function showTestResults() {
    stopTimer();
    testState.active = false;
    testState.phase = 'results';

    var panel = dom.quizContent;
    panel.innerHTML = '';
    var results = el('div', 'quiz-results');
    var title = el('h2', 'quiz-results-title', 'Ergebnis des Probetests — ' + levelLabel(testState.level));
    results.appendChild(title);

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
        var ans = sec.answers[qIdx];
        var correct = ans && ans.correct;
        var item = el('div', 'quiz-review-item ' + (correct ? 'correct' : 'wrong'));
        item.appendChild(el('span', 'review-num', (qIdx + 1) + '.'));
        item.appendChild(el('span', 'review-prompt', q.promptMain || q.prompt));
        item.appendChild(el('span', 'review-answer', ans && ans.selected >= 0 ? q.choices[ans.selected] : 'nicht beantwortet'));
        if (!correct) item.appendChild(el('span', 'review-correct', q.choices[q.correctIndex]));
        detailDiv.appendChild(item);
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
  function showHomeScreen() {
    stopTimer();
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
    testCard.innerHTML = '<span class="quiz-card-icon" lang="zh-CN" aria-hidden="true">试</span><span class="quiz-card-title">Prüfungsmodus</span><span class="quiz-card-text">HSK-Probetest mit Zeitlimit je Sektion und Gesamtpunktzahl. Ohne Hörverstehen und ohne Bestehensprognose.</span>';
    testCard.addEventListener('click', showTestSetup);
    cards.appendChild(testCard);

    home.appendChild(cards);
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
      if (dom.quizContent.querySelector('.quiz-choice-btn')) { e.preventDefault(); return true; }
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
      questionKey: questionKey,
      renderQuestionCard: renderQuestionCard,
      renderChoiceButtons: renderChoiceButtons,
      showFeedback: showFeedback,
      reviewedGrammarCloze: reviewedGrammarCloze,
      normalizeAnswer: normalizeAnswer,
      pinyinKey: pinyinKey,
      glossKeys: glossKeys,
      hasTone: hasTone,
      questionTypes: QUESTION_TYPES,
      clozeTypes: CLOZE_TYPES,
      levels: LEVELS,
      examLevels: EXAM_LEVELS,
      testConfigs: TEST_CONFIGS,
      blank: BLANK
    }
  };
})();
