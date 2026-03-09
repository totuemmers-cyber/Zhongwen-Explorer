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

  var TEST_CONFIGS = {
    HSK1: { time: 60, sections: [
      { name: 'Schriftzeichen & Vokabeln', count: 25, time: 20, types: ['vocabMeaning','vocabPinyin','vocabReverse','vocabContext','hanziMeaning','hanziPinyin'] },
      { name: 'Grammatik & Zählwörter', count: 20, time: 20, types: ['grammarMeaning','grammarCloze','grammarFormation','measureWord'] },
      { name: 'Leseverständnis', count: 15, time: 20, types: ['vocabContext','grammarCloze','vocabMeaning','hanziMeaning'] }
    ]},
    HSK2: { time: 75, sections: [
      { name: 'Schriftzeichen & Vokabeln', count: 30, time: 25, types: ['vocabMeaning','vocabPinyin','vocabReverse','vocabContext','hanziMeaning','hanziPinyin'] },
      { name: 'Grammatik & Zählwörter', count: 25, time: 25, types: ['grammarMeaning','grammarCloze','grammarFormation','measureWord'] },
      { name: 'Leseverständnis', count: 20, time: 25, types: ['vocabContext','grammarCloze','vocabMeaning','hanziMeaning'] }
    ]},
    HSK3: { time: 100, sections: [
      { name: 'Schriftzeichen & Vokabeln', count: 35, time: 30, types: ['vocabMeaning','vocabPinyin','vocabReverse','vocabContext','hanziMeaning','hanziPinyin','hanziRadical'] },
      { name: 'Grammatik & Zählwörter', count: 30, time: 35, types: ['grammarMeaning','grammarCloze','grammarFormation','measureWord'] },
      { name: 'Leseverständnis', count: 25, time: 35, types: ['vocabContext','grammarCloze','vocabMeaning','hanziMeaning'] }
    ]},
    HSK4: { time: 105, sections: [
      { name: 'Schriftzeichen & Vokabeln', count: 40, time: 30, types: ['vocabMeaning','vocabPinyin','vocabReverse','vocabContext','hanziMeaning','hanziPinyin','hanziRadical'] },
      { name: 'Grammatik & Zählwörter', count: 35, time: 35, types: ['grammarMeaning','grammarCloze','grammarFormation','measureWord'] },
      { name: 'Leseverständnis', count: 30, time: 40, types: ['vocabContext','grammarCloze','vocabMeaning','hanziMeaning'] }
    ]},
    HSK5: { time: 125, sections: [
      { name: 'Schriftzeichen & Vokabeln', count: 45, time: 35, types: ['vocabMeaning','vocabPinyin','vocabReverse','vocabContext','hanziMeaning','hanziPinyin','hanziRadical'] },
      { name: 'Grammatik & Zählwörter', count: 40, time: 40, types: ['grammarMeaning','grammarCloze','grammarFormation','measureWord'] },
      { name: 'Leseverständnis', count: 35, time: 50, types: ['vocabContext','grammarCloze','vocabMeaning','hanziMeaning'] }
    ]},
    HSK6: { time: 140, sections: [
      { name: 'Schriftzeichen & Vokabeln', count: 50, time: 40, types: ['vocabMeaning','vocabPinyin','vocabReverse','vocabContext','hanziMeaning','hanziPinyin','hanziRadical'] },
      { name: 'Grammatik & Zählwörter', count: 45, time: 45, types: ['grammarMeaning','grammarCloze','grammarFormation','measureWord'] },
      { name: 'Leseverständnis', count: 40, time: 55, types: ['vocabContext','grammarCloze','vocabMeaning','hanziMeaning'] }
    ]}
  };

  var LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'];

  // === DATA ACCESSORS ===
  function getVocabByLevel(level) {
    var sec = window.app && window.app.sections.vocab;
    if (!sec) return [];
    return sec.allItems.filter(function (v) { return v.level === level; });
  }

  function getAllVocab() {
    var sec = window.app && window.app.sections.vocab;
    return sec ? sec.allItems : [];
  }

  function getHanziByLevel(level) {
    var sec = window.app && window.app.sections.hanzi;
    if (!sec) return [];
    return sec.allItems.filter(function (k) { return k.hsk === level; });
  }

  function getAllHanzi() {
    var sec = window.app && window.app.sections.hanzi;
    return sec ? sec.allItems : [];
  }

  function getGrammarByLevel(level) {
    var sec = window.app && window.app.sections.grammar;
    if (!sec) return [];
    return sec.allItems.filter(function (g) { return g.level === level; });
  }

  function getAllGrammar() {
    var sec = window.app && window.app.sections.grammar;
    return sec ? sec.allItems : [];
  }

  function getMeasureWords() {
    var sec = window.app && window.app.sections.measurewords;
    return sec ? sec.allItems : [];
  }

  // === HELPERS ===
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

  function generateDistractors(correct, pool, count, keyFn) {
    var correctKey = keyFn(correct);
    var seen = {};
    seen[correctKey] = true;
    var unique = [];
    for (var i = 0; i < pool.length; i++) {
      var k = keyFn(pool[i]);
      if (k && !seen[k]) {
        seen[k] = true;
        unique.push(k);
      }
    }
    return shuffle(unique).slice(0, count);
  }

  function buildChoices(correctAnswer, distractors) {
    var all = [correctAnswer].concat(distractors.slice(0, 3));
    while (all.length < 4) all.push('\u2014');
    var shuffled = shuffle(all);
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

  // === QUESTION GENERATORS ===
  function genVocabMeaning(level) {
    var pool = getLevelPool(getVocabByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var distractors = generateDistractors(item, pool, 3, function (v) { return v.meaning; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.meaning, distractors);
    return {
      type: 'vocabMeaning', level: level,
      prompt: 'Was bedeutet dieses Wort?',
      promptMain: item.word,
      promptSub: item.pinyin,
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.word + ' (' + item.pinyin + ') = ' + item.meaning
    };
  }

  function genVocabPinyin(level) {
    var pool = getLevelPool(getVocabByLevel, level).filter(function (v) { return v.word !== v.pinyin; });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var distractors = generateDistractors(item, pool, 3, function (v) { return v.pinyin; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.pinyin, distractors);
    return {
      type: 'vocabPinyin', level: level,
      prompt: 'Wie lautet das Pinyin für dieses Wort?',
      promptMain: item.word,
      promptSub: item.meaning,
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.word + ' wird ' + item.pinyin + ' ausgesprochen'
    };
  }

  function genVocabReverse(level) {
    var pool = getLevelPool(getVocabByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var distractors = generateDistractors(item, pool, 3, function (v) { return v.word; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.word, distractors);
    return {
      type: 'vocabReverse', level: level,
      prompt: 'Welches Wort bedeutet:',
      promptMain: item.meaning,
      promptSub: '',
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.meaning + ' = ' + item.word + ' (' + item.pinyin + ')'
    };
  }

  function genVocabContext(level) {
    var pool = getLevelPool(getVocabByLevel, level).filter(function (v) {
      if (!v.examples || v.examples.length === 0) return false;
      for (var i = 0; i < v.examples.length; i++) {
        if (v.examples[i].chinese && v.examples[i].chinese.indexOf(v.word) !== -1) return true;
      }
      return false;
    });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var ex = null;
    for (var i = 0; i < item.examples.length; i++) {
      if (item.examples[i].chinese.indexOf(item.word) !== -1) { ex = item.examples[i]; break; }
    }
    if (!ex) return null;
    var sentence = ex.chinese.replace(item.word, '\uFF3F\uFF3F\uFF3F');
    var distractors = generateDistractors(item, pool, 3, function (v) { return v.word; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.word, distractors);
    return {
      type: 'vocabContext', level: level,
      prompt: 'Welches Wort passt in die Lücke?',
      promptMain: sentence,
      promptSub: ex.german,
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.word + ' (' + item.pinyin + ') — ' + ex.chinese
    };
  }

  function genHanziMeaning(level) {
    var pool = getLevelPool(getHanziByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var correctMeaning = item.meanings[0];
    var distractors = generateDistractors(item, pool, 3, function (k) { return k.meanings[0]; });
    if (distractors.length < 3) return null;
    var c = buildChoices(correctMeaning, distractors);
    return {
      type: 'hanziMeaning', level: level,
      prompt: 'Was bedeutet dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: '',
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.hanzi + ' = ' + item.meanings.join(', ')
    };
  }

  function genHanziPinyin(level) {
    var pool = getLevelPool(getHanziByLevel, level).filter(function (k) { return k.pinyin; });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var distractors = generateDistractors(item, pool, 3, function (k) { return k.pinyin; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.pinyin, distractors);
    return {
      type: 'hanziPinyin', level: level,
      prompt: 'Wie lautet das Pinyin für dieses Hanzi?',
      promptMain: item.hanzi,
      promptSub: item.meanings[0],
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.hanzi + ': ' + item.pinyin
    };
  }

  function genHanziRadical(level) {
    var pool = getLevelPool(getHanziByLevel, level).filter(function (k) {
      return k.components && k.components.length > 0;
    });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var comp = item.components[0];
    var correctAnswer = comp.radical + ' (' + comp.meaning + ')';
    var radicals = window.KANGXI_RADICALS || [];
    var distractorPool = radicals.filter(function (r) { return r.radical !== comp.radical; });
    var distrs = shuffle(distractorPool).slice(0, 3).map(function (r) {
      return r.radical + ' (' + r.meaning + ')';
    });
    if (distrs.length < 3) return null;
    var c = buildChoices(correctAnswer, distrs);
    return {
      type: 'hanziRadical', level: level,
      prompt: 'Welches Radikal ist in diesem Hanzi enthalten?',
      promptMain: item.hanzi,
      promptSub: item.meanings[0],
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.hanzi + ' enthält ' + correctAnswer
    };
  }

  function genGrammarMeaning(level) {
    var pool = getLevelPool(getGrammarByLevel, level);
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var distractors = generateDistractors(item, pool, 3, function (g) { return g.meaning; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.meaning, distractors);
    return {
      type: 'grammarMeaning', level: level,
      prompt: 'Was bedeutet dieses Grammatikmuster?',
      promptMain: item.pattern,
      promptSub: item.formation || '',
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.pattern + ' = ' + item.meaning
    };
  }

  function genGrammarCloze(level) {
    var pool = getLevelPool(getGrammarByLevel, level).filter(function (g) {
      if (!g.examples || g.examples.length === 0) return false;
      for (var i = 0; i < g.examples.length; i++) {
        if (g.examples[i].chinese && g.examples[i].chinese.indexOf(g.pattern) !== -1) return true;
      }
      return false;
    });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var ex = null;
    for (var i = 0; i < item.examples.length; i++) {
      if (item.examples[i].chinese.indexOf(item.pattern) !== -1) { ex = item.examples[i]; break; }
    }
    if (!ex) return null;
    var sentence = ex.chinese.replace(item.pattern, '\uFF3F\uFF3F\uFF3F');
    var distractors = generateDistractors(item, pool, 3, function (g) { return g.pattern; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.pattern, distractors);
    return {
      type: 'grammarCloze', level: level,
      prompt: 'Welches Grammatikmuster passt in die Lücke?',
      promptMain: sentence,
      promptSub: ex.german,
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.pattern + ' — ' + ex.chinese
    };
  }

  function genGrammarFormation(level) {
    var pool = getLevelPool(getGrammarByLevel, level).filter(function (g) { return g.formation; });
    if (pool.length < 4) return null;
    var item = pickRandom(pool);
    var distractors = generateDistractors(item, pool, 3, function (g) { return g.formation; });
    if (distractors.length < 3) return null;
    var c = buildChoices(item.formation, distractors);
    return {
      type: 'grammarFormation', level: level,
      prompt: 'Wie wird dieses Muster gebildet?',
      promptMain: item.pattern,
      promptSub: item.meaning,
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.pattern + ': ' + item.formation
    };
  }

  function genMeasureWord(level) {
    var mws = getMeasureWords();
    if (mws.length < 4) return null;
    var item = pickRandom(mws);
    var correctAnswer = item.classifier + ' (' + item.pinyin + ')';
    var distractors = generateDistractors(item, mws, 3, function (m) {
      return m.classifier + ' (' + m.pinyin + ')';
    });
    if (distractors.length < 3) return null;
    var c = buildChoices(correctAnswer, distractors);
    return {
      type: 'measureWord', level: level,
      prompt: 'Welches Zählwort passt?',
      promptMain: item.meaning,
      promptSub: item.usage || '',
      choices: c.choices, correctIndex: c.correctIndex,
      explanation: item.meaning + ' → ' + item.classifier + ' (' + item.pinyin + ')'
    };
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
    for (var i = 0; i < 5; i++) {
      var q = gen(level);
      if (q) return q;
    }
    return null;
  }

  // === UI BUILDERS ===
  var dom = {};

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function renderChoiceButtons(question, container, onSelect) {
    container.innerHTML = '';
    var grid = el('div', 'quiz-choices-grid');
    for (var i = 0; i < question.choices.length; i++) {
      (function (idx) {
        var btn = el('button', 'quiz-choice-btn');
        var numSpan = el('span', 'quiz-choice-num', String(idx + 1));
        var textSpan = el('span', 'quiz-choice-text', question.choices[idx]);
        btn.appendChild(numSpan);
        btn.appendChild(textSpan);
        btn.addEventListener('click', function () { onSelect(idx); });
        grid.appendChild(btn);
      })(i);
    }
    container.appendChild(grid);
  }

  function showFeedback(container, selectedIdx, correctIdx) {
    var btns = container.querySelectorAll('.quiz-choice-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      if (i === correctIdx) btns[i].classList.add('correct');
      if (i === selectedIdx && selectedIdx !== correctIdx) btns[i].classList.add('wrong');
    }
  }

  function renderQuestionCard(question, container) {
    container.innerHTML = '';
    var card = el('div', 'quiz-question-card');

    var typeBadge = el('span', 'quiz-type-badge', QUESTION_TYPES[question.type].label);
    var levelBadge = el('span', 'quiz-level-badge ' + question.level.toLowerCase(), question.level);
    var badges = el('div', 'quiz-badges');
    badges.appendChild(typeBadge);
    badges.appendChild(levelBadge);
    card.appendChild(badges);

    var prompt = el('p', 'quiz-prompt', question.prompt);
    card.appendChild(prompt);

    if (question.promptMain) {
      var isChinese = /[\u4e00-\u9fff\u3400-\u4dbf]/.test(question.promptMain);
      var mainEl = el('div', 'quiz-prompt-main' + (isChinese ? ' jp' : ''), question.promptMain);
      card.appendChild(mainEl);
    }

    if (question.promptSub) {
      var sub = el('p', 'quiz-prompt-sub', question.promptSub);
      card.appendChild(sub);
    }

    var choicesDiv = el('div', 'quiz-choices');
    card.appendChild(choicesDiv);

    var explDiv = el('div', 'quiz-explanation hidden');
    card.appendChild(explDiv);

    container.appendChild(card);
    return { choicesDiv: choicesDiv, explDiv: explDiv, card: card };
  }

  // === BROWSE MODE ===
  var browseState = {
    currentType: 'vocabMeaning',
    currentLevel: 'HSK1',
    question: null,
    answered: false,
    revealed: false
  };

  function initBrowseMode() {
    var panel = dom.quizContent;
    panel.innerHTML = '';

    var controls = el('div', 'quiz-browse-controls');

    var typeSelect = document.createElement('select');
    typeSelect.className = 'quiz-type-select';
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
    controls.appendChild(typeSelect);

    var levelBar = el('div', 'quiz-level-bar');
    LEVELS.forEach(function (lv) {
      var pill = el('button', 'quiz-level-pill' + (lv === browseState.currentLevel ? ' active' : '') + ' ' + lv.toLowerCase(), lv);
      pill.addEventListener('click', function () {
        browseState.currentLevel = lv;
        levelBar.querySelectorAll('.quiz-level-pill').forEach(function (p) {
          p.classList.toggle('active', p.textContent === lv);
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

    var backBtn = el('button', 'quiz-btn quiz-btn-back', 'Zurück');
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

    if (!q) {
      area.innerHTML = '<div class="quiz-no-data">Nicht genügend Daten für diesen Fragetyp und dieses Level verfügbar.</div>';
      return;
    }

    var parts = renderQuestionCard(q, area);
    renderChoiceButtons(q, parts.choicesDiv, function (idx) {
      if (browseState.answered) return;
      browseState.answered = true;
      browseState.selectedIdx = idx;
      var btns = parts.choicesDiv.querySelectorAll('.quiz-choice-btn');
      btns[idx].classList.add('selected');
      if (window.app) window.app.playTick();
    });

    var revealBtn = document.getElementById('quiz-reveal-btn');
    var nextBtn = document.getElementById('quiz-next-btn');
    if (revealBtn) { revealBtn.classList.remove('hidden'); revealBtn.disabled = false; }
    if (nextBtn) nextBtn.classList.add('hidden');
  }

  function revealBrowseAnswer() {
    if (!browseState.question || browseState.revealed) return;
    browseState.revealed = true;

    var area = document.getElementById('quiz-question-area');
    if (!area) return;
    var choicesDiv = area.querySelector('.quiz-choices');
    var explDiv = area.querySelector('.quiz-explanation');
    var selectedIdx = browseState.answered ? browseState.selectedIdx : -1;

    showFeedback(choicesDiv, selectedIdx, browseState.question.correctIndex);

    if (explDiv) {
      explDiv.textContent = browseState.question.explanation;
      explDiv.classList.remove('hidden');
    }

    if (selectedIdx === browseState.question.correctIndex) {
      if (window.app) window.app.playPop();
    }

    var revealBtn = document.getElementById('quiz-reveal-btn');
    var nextBtn = document.getElementById('quiz-next-btn');
    if (revealBtn) revealBtn.classList.add('hidden');
    if (nextBtn) nextBtn.classList.remove('hidden');
  }

  // === TEST MODE ===
  var testState = {
    active: false, level: null, config: null,
    sections: [], currentSection: 0, currentQuestion: 0,
    answers: [], timerInterval: null, sectionEndTime: 0
  };

  function showTestSetup() {
    var panel = dom.quizContent;
    panel.innerHTML = '';

    var setup = el('div', 'quiz-test-setup');
    setup.appendChild(el('h2', 'quiz-setup-title', 'HSK Prüfungsmodus'));
    setup.appendChild(el('p', 'quiz-setup-desc', 'Wähle ein Level für die simulierte HSK-Prüfung. Jede Sektion muss mit mindestens 50% bestanden werden.'));

    var levelGrid = el('div', 'quiz-test-level-grid');
    LEVELS.forEach(function (lv) {
      var cfg = TEST_CONFIGS[lv];
      if (!cfg) return;
      var total = 0;
      cfg.sections.forEach(function (s) { total += s.count; });

      var card = el('div', 'quiz-test-level-card');
      var badge = el('div', 'quiz-test-level-badge ' + lv.toLowerCase(), lv);
      card.appendChild(badge);
      var info = el('div', 'quiz-test-level-info');
      info.innerHTML = '<span>' + total + ' Fragen</span><span>' + cfg.time + ' Minuten</span><span>' + cfg.sections.length + ' Sektionen</span>';
      card.appendChild(info);
      card.addEventListener('click', function () { startTest(lv); });
      levelGrid.appendChild(card);
    });
    setup.appendChild(levelGrid);

    var backBtn = el('button', 'quiz-btn quiz-btn-back', 'Zurück');
    backBtn.addEventListener('click', showHomeScreen);
    setup.appendChild(backBtn);

    panel.appendChild(setup);
  }

  function startTest(level) {
    var cfg = TEST_CONFIGS[level];
    if (!cfg) return;

    testState.active = true;
    testState.level = level;
    testState.config = cfg;
    testState.currentSection = 0;
    testState.currentQuestion = 0;
    testState.sections = [];

    for (var s = 0; s < cfg.sections.length; s++) {
      var sec = cfg.sections[s];
      var questions = [];
      for (var q = 0; q < sec.count; q++) {
        var typeId = sec.types[q % sec.types.length];
        var question = generateQuestion(typeId, level);
        if (!question) {
          for (var t = 0; t < sec.types.length; t++) {
            question = generateQuestion(sec.types[t], level);
            if (question) break;
          }
        }
        if (question) questions.push(question);
      }
      testState.sections.push({ name: sec.name, time: sec.time, questions: questions, answers: [], score: 0 });
    }

    startTestSection(0);
  }

  function startTestSection(sectionIdx) {
    testState.currentSection = sectionIdx;
    testState.currentQuestion = 0;
    var sec = testState.sections[sectionIdx];
    testState.sectionEndTime = Date.now() + sec.time * 60 * 1000;
    startTimer();
    renderTestQuestion();
  }

  function startTimer() {
    stopTimer();
    testState.timerInterval = setInterval(function () {
      var remaining = Math.max(0, Math.ceil((testState.sectionEndTime - Date.now()) / 1000));
      var timerEl = document.getElementById('quiz-timer');
      if (timerEl) {
        timerEl.textContent = formatTime(remaining);
        timerEl.classList.toggle('warning', remaining <= 60);
        timerEl.classList.toggle('critical', remaining <= 10);
      }
      var sec = testState.sections[testState.currentSection];
      if (sec) {
        var totalSec = sec.time * 60;
        var elapsed = totalSec - remaining;
        var timeBar = document.getElementById('quiz-time-bar');
        if (timeBar) timeBar.style.width = Math.min(100, (elapsed / totalSec) * 100) + '%';
      }
      if (remaining <= 0) finishCurrentSection();
    }, 250);
  }

  function stopTimer() {
    if (testState.timerInterval) { clearInterval(testState.timerInterval); testState.timerInterval = null; }
  }

  function renderTestQuestion() {
    var panel = dom.quizContent;
    panel.innerHTML = '';

    var secData = testState.sections[testState.currentSection];
    var qIdx = testState.currentQuestion;

    if (qIdx >= secData.questions.length) { finishCurrentSection(); return; }

    var question = secData.questions[qIdx];

    var header = el('div', 'quiz-test-header');
    header.appendChild(el('span', 'quiz-test-section-label', 'Sektion ' + (testState.currentSection + 1) + ': ' + secData.name));
    header.appendChild(el('span', 'quiz-test-progress', (qIdx + 1) + ' / ' + secData.questions.length));
    var timer = el('span', 'quiz-timer');
    timer.id = 'quiz-timer';
    var remaining = Math.max(0, Math.ceil((testState.sectionEndTime - Date.now()) / 1000));
    timer.textContent = formatTime(remaining);
    header.appendChild(timer);
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
    var parts = renderQuestionCard(question, questionArea);
    panel.appendChild(questionArea);

    renderChoiceButtons(question, parts.choicesDiv, function (idx) {
      showFeedback(parts.choicesDiv, idx, question.correctIndex);
      var correct = idx === question.correctIndex;
      secData.answers.push({ questionIdx: qIdx, selected: idx, correct: correct });
      if (correct) secData.score++;
      if (correct && window.app) window.app.playPop();
      else if (window.app) window.app.playTick();
      if (parts.explDiv) { parts.explDiv.textContent = question.explanation; parts.explDiv.classList.remove('hidden'); }
      setTimeout(function () { testState.currentQuestion++; renderTestQuestion(); }, 800);
    });
  }

  function finishCurrentSection() {
    stopTimer();
    var secData = testState.sections[testState.currentSection];
    while (secData.answers.length < secData.questions.length) {
      secData.answers.push({ questionIdx: secData.answers.length, selected: -1, correct: false });
    }

    var panel = dom.quizContent;
    panel.innerHTML = '';

    var inter = el('div', 'quiz-interstitial');
    inter.appendChild(el('h2', 'quiz-inter-title', 'Sektion ' + (testState.currentSection + 1) + ' abgeschlossen'));
    inter.appendChild(el('p', 'quiz-inter-name', secData.name));

    var score = secData.score, total = secData.questions.length;
    var pct = total > 0 ? Math.round(score / total * 100) : 0;
    var passed = pct >= 50;

    var scoreEl = el('div', 'quiz-inter-score' + (passed ? ' passed' : ' failed'));
    scoreEl.innerHTML = '<span class="score-big">' + score + ' / ' + total + '</span><span class="score-pct">' + pct + '%</span>';
    inter.appendChild(scoreEl);
    inter.appendChild(el('div', 'quiz-inter-status ' + (passed ? 'passed' : 'failed'), passed ? 'Bestanden' : 'Nicht bestanden'));

    if (testState.currentSection < testState.sections.length - 1) {
      var nextBtn = el('button', 'quiz-btn quiz-btn-next', 'Weiter zur nächsten Sektion');
      nextBtn.addEventListener('click', function () { startTestSection(testState.currentSection + 1); });
      inter.appendChild(nextBtn);
    } else {
      var resultBtn = el('button', 'quiz-btn quiz-btn-next', 'Ergebnisse anzeigen');
      resultBtn.addEventListener('click', showTestResults);
      inter.appendChild(resultBtn);
    }

    panel.appendChild(inter);
  }

  function showTestResults() {
    stopTimer();
    testState.active = false;

    var panel = dom.quizContent;
    panel.innerHTML = '';

    var results = el('div', 'quiz-results');
    results.appendChild(el('h2', 'quiz-results-title', 'Prüfungsergebnis — ' + testState.level));

    var totalScore = 0, totalQuestions = 0, allPassed = true;
    var breakdown = el('div', 'quiz-results-breakdown');
    testState.sections.forEach(function (sec, idx) {
      var total = sec.questions.length, score = sec.score;
      var pct = total > 0 ? Math.round(score / total * 100) : 0;
      var passed = pct >= 50;
      if (!passed) allPassed = false;
      totalScore += score;
      totalQuestions += total;

      var row = el('div', 'quiz-result-row');
      row.innerHTML =
        '<span class="result-section-name">Sektion ' + (idx + 1) + ': ' + sec.name + '</span>' +
        '<span class="result-score">' + score + '/' + total + '</span>' +
        '<span class="result-pct">' + pct + '%</span>' +
        '<span class="result-status ' + (passed ? 'passed' : 'failed') + '">' + (passed ? 'Bestanden' : 'Nicht best.') + '</span>';
      breakdown.appendChild(row);
    });
    results.appendChild(breakdown);

    var totalPct = totalQuestions > 0 ? Math.round(totalScore / totalQuestions * 100) : 0;
    var overall = el('div', 'quiz-results-overall' + (allPassed ? ' passed' : ' failed'));
    overall.innerHTML =
      '<div class="overall-score">' + totalScore + ' / ' + totalQuestions + ' (' + totalPct + '%)</div>' +
      '<div class="overall-status">' + (allPassed ? 'BESTANDEN' : 'NICHT BESTANDEN') + '</div>' +
      (allPassed ? '' : '<div class="overall-note">Mindestens 50% pro Sektion erforderlich</div>');
    results.appendChild(overall);

    var actions = el('div', 'quiz-results-actions');
    var newBtn = el('button', 'quiz-btn quiz-btn-next', 'Neue Prüfung');
    newBtn.addEventListener('click', showTestSetup);
    actions.appendChild(newBtn);
    var homeBtn = el('button', 'quiz-btn quiz-btn-back', 'Zurück');
    homeBtn.addEventListener('click', showHomeScreen);
    actions.appendChild(homeBtn);
    results.appendChild(actions);

    panel.appendChild(results);
  }

  // === HOME SCREEN ===
  function showHomeScreen() {
    stopTimer();
    testState.active = false;

    var panel = dom.quizContent;
    panel.innerHTML = '';

    var home = el('div', 'quiz-home');
    home.appendChild(el('h2', 'quiz-home-title', 'Quiz & Test'));
    home.appendChild(el('p', 'quiz-home-desc', 'Teste dein Wissen mit Fragen aus allen Bereichen — Hanzi, Vokabeln, Grammatik und Zählwörter.'));

    var cards = el('div', 'quiz-home-cards');

    var browseCard = el('div', 'quiz-home-card browse');
    browseCard.innerHTML = '<div class="quiz-card-icon">\u7EC3</div><h3>Übungsmodus</h3><p>Frei üben nach Fragetyp und Level. Kein Timer, kein Scoring.</p>';
    browseCard.addEventListener('click', initBrowseMode);
    cards.appendChild(browseCard);

    var testCard = el('div', 'quiz-home-card test');
    testCard.innerHTML = '<div class="quiz-card-icon">\u8BD5</div><h3>Prüfungsmodus</h3><p>Simulierte HSK-Prüfung mit Timer, Sektionen und Auswertung.</p>';
    testCard.addEventListener('click', showTestSetup);
    cards.appendChild(testCard);

    home.appendChild(cards);
    panel.appendChild(home);
  }

  // === KEYBOARD ===
  function handleQuizKey(e) {
    if (!dom.quizPanel || dom.quizPanel.classList.contains('hidden')) return false;

    var num = parseInt(e.key);
    if (num >= 1 && num <= 4) {
      var btns = dom.quizContent.querySelectorAll('.quiz-choice-btn:not([disabled])');
      if (btns.length >= num) { btns[num - 1].click(); e.preventDefault(); return true; }
    }

    if (e.key === 'Enter' && !testState.active) {
      var revealBtn = document.getElementById('quiz-reveal-btn');
      var nextBtn = document.getElementById('quiz-next-btn');
      if (revealBtn && !revealBtn.classList.contains('hidden')) { revealBtn.click(); e.preventDefault(); return true; }
      if (nextBtn && !nextBtn.classList.contains('hidden')) { nextBtn.click(); e.preventDefault(); return true; }
    }

    if (e.key === 'Escape' && testState.active) {
      if (confirm('Prüfung wirklich abbrechen?')) { stopTimer(); testState.active = false; showHomeScreen(); }
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
    if (!testState.active) showHomeScreen();
  }

  window.QuizModule = {
    onTabActivate: onTabActivate,
    handleKey: handleQuizKey,
    isTestActive: function () { return testState.active; }
  };
})();
