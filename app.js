(function () {
  'use strict';

  // === APP OBJECT ===
  var app = window.app = {
    activeTab: 'tones',
    activeRadical: null,
    sections: {},
    playTick: playTick,
    playPop: playPop,
    playSwoosh: playSwoosh,
    switchTab: switchTab,
    updateCount: updateCount,
    setRadicalFilter: setRadicalFilter,
    clearRadicalFilter: clearRadicalFilter,
    openRadicalInTab: openRadicalInTab,
    renderBasicNumbers: renderBasicNumbers,
    speakCN: speakCN
  };

  // === SOUND ENGINE ===
  var soundEnabled = localStorage.getItem('zhongwen-sound') !== 'off';
  var audioCtx = null;

  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playOscSound(configureFn) {
    if (!soundEnabled) return;
    try {
      var ctx = getAudioCtx();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      configureFn(ctx, osc, gain);
      osc.start(ctx.currentTime);
    } catch (e) {}
  }

  function playTick() {
    playOscSound(function (ctx, osc, gain) {
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.stop(ctx.currentTime + 0.06);
    });
  }

  function playPop() {
    playOscSound(function (ctx, osc, gain) {
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.stop(ctx.currentTime + 0.15);
    });
  }

  function playSwoosh() {
    if (!soundEnabled) return;
    try {
      var ctx = getAudioCtx();
      var bufferSize = ctx.sampleRate * 0.08;
      var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      var data = buffer.getChannelData(0);
      for (var i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }
      var noise = ctx.createBufferSource();
      noise.buffer = buffer;
      var filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.08);
      filter.Q.value = 2;
      var gain = ctx.createGain();
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(ctx.currentTime);
    } catch (e) {}
  }

  // === DOM REFS ===
  var itemCountEl = document.getElementById('item-count');
  var themeToggle = document.getElementById('theme-toggle');
  var randomBtn = document.getElementById('random-btn');
  var soundToggle = document.getElementById('sound-toggle');
  var radicalFilter = document.getElementById('radical-filter');
  var radicalFilterName = document.getElementById('radical-filter-name');
  var loadingEl = document.getElementById('loading');

  var pinyinTab = document.getElementById('pinyin-tab');
  var tonesTab = document.getElementById('tones-tab');
  var quizTab = document.getElementById('quiz-tab');

  var sectionNames = ['hanzi', 'grammar', 'vocab', 'onomatopoeia', 'measurewords', 'radicals'];

  // === INSTANTIATE SECTIONS ===
  sectionNames.forEach(function (name) {
    app.sections[name] = new Section(SECTION_CONFIGS[name]);
  });

  // === TAB SYSTEM ===
  function switchTab(tab) {
    app.activeTab = tab;
    playSwoosh();

    tabBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });

    sectionNames.forEach(function (name) {
      var sec = app.sections[name];
      if (sec.dom.controls) sec.dom.controls.classList.toggle('hidden', tab !== name);
      if (tabPanels[name]) tabPanels[name].classList.toggle('hidden', tab !== name);
    });

    pinyinTab.classList.toggle('hidden', tab !== 'pinyin');
    tonesTab.classList.toggle('hidden', tab !== 'tones');
    if (quizTab) quizTab.classList.toggle('hidden', tab !== 'quiz');

    if (tab === 'pinyin') {
      renderPinyinTab();
    } else if (tab === 'tones') {
      renderTonesTab();
    } else if (tab === 'quiz') {
      if (window.QuizModule) window.QuizModule.onTabActivate();
    } else if (app.sections[tab] && app.sections[tab].config.onTabActivate) {
      app.sections[tab].config.onTabActivate(app.sections[tab]);
    }

    updateCount();
  }

  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanels = {};
  sectionNames.forEach(function (name) {
    tabPanels[name] = document.getElementById(name + '-tab');
  });

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchTab(this.getAttribute('data-tab'));
    });
  });

  // === COUNT UPDATE ===
  function updateCount() {
    var tab = app.activeTab;
    if (tab === 'pinyin') {
      itemCountEl.textContent = 'Pinyin';
    } else if (tab === 'tones') {
      itemCountEl.textContent = 'Töne';
    } else if (tab === 'quiz') {
      itemCountEl.textContent = 'Quiz';
    } else if (app.sections[tab]) {
      var sec = app.sections[tab];
      itemCountEl.textContent = sec.filteredItems.length + sec.config.countLabel;
    }
  }

  // === LOAD DATA ===
  function loadData() {
    // Hanzi
    if (window.HANZI_DATA) {
      loadingEl.classList.add('hidden');
      app.sections.hanzi.setItems(window.HANZI_DATA);
    } else {
      loadingEl.classList.add('hidden');
    }

    // Grammar — normalize inconsistent category names
    if (window.GRAMMAR_DATA) {
      var catMap = {
        'Satzstruktur': 'Satzstrukturen', 'Partikeln': 'Partikel',
        'Zeitausdruecke': 'Zeitausdrücke'
      };
      window.GRAMMAR_DATA.forEach(function (item) {
        if (item.category && catMap[item.category]) item.category = catMap[item.category];
      });
      app.sections.grammar.setItems(window.GRAMMAR_DATA);
    }

    // Vocab
    var vocabSources = [
      window.VOCAB_HSK1 || [],
      window.VOCAB_HSK2 || [],
      window.VOCAB_HSK3 || [],
      window.VOCAB_HSK4 || [],
      window.VOCAB_HSK5 || [],
      window.VOCAB_HSK6 || []
    ];
    var allVocab = [].concat.apply([], vocabSources)
      .concat(window.CHENGYU_DATA || [])
      .concat(window.REDEWENDUNGEN_DATA || []);
    // Normalize inconsistent type names (plurals, ASCII variants)
    var typeMap = {
      'Verben': 'Verb', 'Adjektive': 'Adjektiv', 'Adverbien': 'Adverb',
      'Redewendungen': 'Redewendung', 'Konjunktionen': 'Konjunktion',
      'Zaehlwort': 'Zahlwort', 'Zählwort': 'Zahlwort',
      'Praposition': 'Präposition', 'Praeposition': 'Präposition',
      'Prapositionen': 'Präposition', 'Praefix': 'Präfix'
    };
    allVocab.forEach(function (item) {
      if (item.type && typeMap[item.type]) item.type = typeMap[item.type];
    });
    if (allVocab.length > 0) {
      app.sections.vocab.setItems(allVocab);
    }

    // Onomatopoeia
    if (window.ONOMATOPOEIA_DATA) {
      app.sections.onomatopoeia.setItems(window.ONOMATOPOEIA_DATA);
    }

    // Measure Words
    if (window.MEASURE_WORDS_DATA && window.MEASURE_WORDS_DATA.measureWords) {
      app.sections.measurewords.setItems(window.MEASURE_WORDS_DATA.measureWords);
    }

    // Radicals
    if (window.KANGXI_RADICALS) {
      app.sections.radicals.setItems(window.KANGXI_RADICALS);
    }

    updateCount();
  }

  // === RADICAL FILTER ===
  function setRadicalFilter(radical, meaning) {
    app.activeRadical = radical;
    radicalFilterName.textContent = radical + ' (' + meaning + ')';
    radicalFilter.classList.remove('hidden');
    app.sections.hanzi.applyFilters();
  }

  function clearRadicalFilter() {
    app.activeRadical = null;
    radicalFilter.classList.add('hidden');
    app.sections.hanzi.applyFilters();
  }

  document.getElementById('clear-radical-filter').addEventListener('click', clearRadicalFilter);

  function openRadicalInTab(radicalChar) {
    switchTab('radicals');
    var radSec = app.sections.radicals;
    radSec.resetFilterGroup('strokes');
    radSec.dom.search.value = '';
    radSec.applyFilters();
    for (var i = 0; i < radSec.filteredItems.length; i++) {
      if (radSec.filteredItems[i].radical === radicalChar) {
        radSec.openDetail(i);
        break;
      }
    }
  }

  // === BASIC NUMBERS ===
  function renderBasicNumbers() {
    var container = document.getElementById('mw-numbers-section');
    if (!container || container.children.length > 0) return;
    var data = window.MEASURE_WORDS_DATA;
    if (!data || !data.basicNumbers) return;

    var section = document.createElement('div');
    section.className = 'counters-numbers-section';

    var header = document.createElement('div');
    header.className = 'counters-numbers-header';
    header.innerHTML = '<span class="tab-icon-kana" style="font-family:var(--font-jp)">\u6570</span> Grundzahlen' +
      '<svg class="toggle-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';

    var body = document.createElement('div');
    body.className = 'counters-numbers-body';

    var wrapper = document.createElement('div');
    wrapper.className = 'numbers-table-wrapper';

    var table = document.createElement('table');
    table.className = 'numbers-table';
    table.innerHTML = '<thead><tr><th>Zahl</th><th>Hanzi</th><th>Pinyin</th><th>Hinweis</th></tr></thead>';

    var tbody = document.createElement('tbody');
    data.basicNumbers.forEach(function (n) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><strong>' + n.number + '</strong></td>' +
        '<td class="num-kanji">' + n.hanzi + '</td>' +
        '<td class="num-romaji">' + n.pinyin + '</td>' +
        '<td class="num-notes">' + (n.notes || '\u2014') + '</td>';
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrapper.appendChild(table);
    body.appendChild(wrapper);

    header.addEventListener('click', function () {
      playTick();
      var icon = header.querySelector('.toggle-icon');
      body.classList.toggle('collapsed');
      icon.classList.toggle('collapsed');
    });

    section.appendChild(header);
    section.appendChild(body);
    container.appendChild(section);
  }

  // === THEME ===
  function initTheme() {
    var saved = localStorage.getItem('zhongwen-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  function toggleTheme() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('zhongwen-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('zhongwen-theme', 'dark');
    }
  }

  themeToggle.addEventListener('click', function () {
    playTick();
    toggleTheme();
  });

  // === SOUND TOGGLE ===
  if (soundToggle) {
    soundToggle.classList.toggle('active', soundEnabled);
    soundToggle.addEventListener('click', function () {
      soundEnabled = !soundEnabled;
      localStorage.setItem('zhongwen-sound', soundEnabled ? 'on' : 'off');
      soundToggle.classList.toggle('active', soundEnabled);
      if (soundEnabled) playPop();
    });
  }

  // === RANDOM BUTTON ===
  randomBtn.addEventListener('click', function () {
    playPop();
    var tab = app.activeTab;
    if (app.sections[tab]) {
      var sec = app.sections[tab];
      if (sec.filteredItems.length === 0) return;
      var idx = Math.floor(Math.random() * sec.filteredItems.length);
      sec.openDetail(idx);
    }
  });

  // === HELP OVERLAY ===
  var helpOverlay = document.getElementById('help-overlay');

  function toggleHelpOverlay() {
    if (!helpOverlay) return;
    var isHidden = helpOverlay.classList.contains('hidden');
    helpOverlay.classList.toggle('hidden', !isHidden);
    document.body.style.overflow = isHidden ? 'hidden' : '';
    if (isHidden) playPop();
  }

  if (helpOverlay) {
    helpOverlay.addEventListener('click', function (e) {
      if (e.target === helpOverlay) toggleHelpOverlay();
    });
    var helpClose = helpOverlay.querySelector('.btn-close');
    if (helpClose) helpClose.addEventListener('click', toggleHelpOverlay);
  }

  // === KEYBOARD NAVIGATION ===
  var tabKeys = ['tones', 'pinyin', 'radicals', 'hanzi', 'vocab', 'onomatopoeia', 'grammar', 'measurewords', 'quiz'];

  document.addEventListener('keydown', function (e) {
    // Help overlay open? Close on Escape
    if (helpOverlay && !helpOverlay.classList.contains('hidden')) {
      if (e.key === 'Escape') toggleHelpOverlay();
      return;
    }

    if (window.QuizModule && window.QuizModule.handleKey(e)) return;

    // Overlay navigation
    for (var i = 0; i < sectionNames.length; i++) {
      var sec = app.sections[sectionNames[i]];
      if (sec.isOverlayOpen()) {
        if (e.key === 'Escape') sec.closeDetail();
        if (e.key === 'ArrowLeft') sec.navigateDetail(-1);
        if (e.key === 'ArrowRight') sec.navigateDetail(1);
        return;
      }
    }

    // Skip shortcuts when typing in inputs
    var tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }

    // Help overlay
    if (e.key === '?') { e.preventDefault(); toggleHelpOverlay(); return; }

    // Random entry
    if (e.key === 'r') {
      e.preventDefault();
      randomBtn.click();
      return;
    }

    // Tab switching with number keys 1-9
    var num = parseInt(e.key);
    if (num >= 1 && num <= 9 && num <= tabKeys.length) {
      e.preventDefault();
      switchTab(tabKeys[num - 1]);
      return;
    }

    // Search focus
    if (e.key === '/') {
      var tab = app.activeTab;
      if (tab === 'pinyin' || tab === 'tones') return;
      if (app.sections[tab] && app.sections[tab].dom.search) {
        var input = app.sections[tab].dom.search;
        if (document.activeElement !== input) {
          e.preventDefault();
          input.focus();
        }
      }
    }
  });

  // === TEXT-TO-SPEECH ===
  function speakCN(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      var utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      utterance.volume = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  }

  // === PINYIN TAB ===
  function renderPinyinTab() {
    var container = document.getElementById('pinyin-content');
    if (!container || container.children.length > 0) return;

    var data = window.PINYIN_DATA;
    if (!data) return;

    // Tones overview
    if (data.tones) {
      var tonesSection = document.createElement('div');
      tonesSection.className = 'kana-section';
      var tonesHeader = document.createElement('div');
      tonesHeader.className = 'kana-section-header';
      tonesHeader.innerHTML = '<span class="kana-section-icon">声</span><span>Die vier Töne + Neutraler Ton</span>';
      tonesSection.appendChild(tonesHeader);

      var tonesBody = document.createElement('div');
      tonesBody.className = 'kana-table-wrapper';
      var tonesTable = document.createElement('table');
      tonesTable.className = 'kana-table';
      tonesTable.innerHTML = '<thead><tr><th>Ton</th><th>Name</th><th>Zeichen</th><th>Beispiel</th><th>Beschreibung</th></tr></thead>';
      var tbody = document.createElement('tbody');
      data.tones.forEach(function (t) {
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td><strong style="color:' + t.color + '">' + t.number + '</strong></td>' +
          '<td>' + t.name + '</td>' +
          '<td style="font-family:var(--font-jp);font-size:1.5rem;cursor:pointer" onclick="window.app.speakCN(\'' + t.example + '\')">' + t.example + '</td>' +
          '<td style="color:' + t.color + ';font-weight:600">' + t.pinyin + '</td>' +
          '<td>' + t.description + '</td>';
        tbody.appendChild(tr);
      });
      tonesTable.appendChild(tbody);
      tonesBody.appendChild(tonesTable);
      tonesSection.appendChild(tonesBody);
      container.appendChild(tonesSection);
    }

    // Helper: build a phonetics table section
    function buildPhoneticSection(icon, title, groups, container) {
      var section = document.createElement('div');
      section.className = 'kana-section';
      var header = document.createElement('div');
      header.className = 'kana-section-header';
      header.innerHTML = '<span class="kana-section-icon">' + icon + '</span><span>' + title + '</span>';
      section.appendChild(header);

      var body = document.createElement('div');
      body.className = 'kana-table-wrapper';
      var table = document.createElement('table');
      table.className = 'kana-table';
      table.innerHTML = '<thead><tr><th>Pinyin</th><th>IPA</th><th>Beispiel</th><th>Pinyin</th><th>Bedeutung</th></tr></thead>';
      var tbody = document.createElement('tbody');

      groups.forEach(function (group) {
        // Group header row
        var groupRow = document.createElement('tr');
        groupRow.innerHTML = '<td colspan="5" style="background:var(--border);font-weight:600;font-size:0.85rem;padding:6px 12px">' + group.name + '</td>';
        tbody.appendChild(groupRow);
        group.sounds.forEach(function (ch) {
          if (!ch) return;
          var tr = document.createElement('tr');
          tr.innerHTML =
            '<td><strong>' + ch.pinyin + '</strong></td>' +
            '<td class="num-romaji">' + (ch.ipa || '') + '</td>' +
            '<td style="font-family:var(--font-jp);font-size:1.3rem;cursor:pointer">' + ch.example + '</td>' +
            '<td>' + ch.examplePinyin + '</td>' +
            '<td>' + ch.meaning + '</td>';
          tr.querySelector('td:nth-child(3)').addEventListener('click', function () {
            speakCN(ch.example);
          });
          tbody.appendChild(tr);
        });
      });
      table.appendChild(tbody);
      body.appendChild(table);
      section.appendChild(body);
      container.appendChild(section);
    }

    // Initials
    if (data.initials && data.initials.groups) {
      buildPhoneticSection('声', 'Anlaute (声母 Shēngmǔ) — ' + data.initials.groups.reduce(function (s, g) { return s + g.sounds.length; }, 0) + ' Laute', data.initials.groups, container);
    }

    // Finals
    if (data.finals && data.finals.groups) {
      buildPhoneticSection('韵', 'Auslaute (韵母 Yùnmǔ) — ' + data.finals.groups.reduce(function (s, g) { return s + g.sounds.length; }, 0) + ' Laute', data.finals.groups, container);
    }

    // Combination table
    if (data.combinations && data.combinationColumns) {
      var comboSection = document.createElement('div');
      comboSection.className = 'kana-section';
      var comboHeader = document.createElement('div');
      comboHeader.className = 'kana-section-header';
      comboHeader.innerHTML = '<span class="kana-section-icon">拼</span><span>Kombinations\u00ADtabelle — Anlaute × Auslaute</span>';
      comboSection.appendChild(comboHeader);

      var comboHint = document.createElement('p');
      comboHint.style.cssText = 'margin:0.25rem 0 0.5rem;font-size:0.85rem;color:var(--text-light);font-style:italic';
      comboHint.textContent = 'Klicke auf eine Silbe, um die Aussprache zu h\u00f6ren.';
      comboSection.appendChild(comboHint);

      var comboBody = document.createElement('div');
      comboBody.className = 'kana-table-wrapper';
      comboBody.style.overflowX = 'hidden';
      var cTable = document.createElement('table');
      cTable.className = 'kana-table combo-table';

      // Header row
      var cHead = '<thead><tr><th style="position:sticky;left:0;background:var(--bg-card);z-index:1"></th>';
      data.combinationColumns.forEach(function (col) {
        cHead += '<th style="white-space:nowrap">' + col + '</th>';
      });
      cHead += '</tr></thead>';
      cTable.innerHTML = cHead;

      var cTbody = document.createElement('tbody');
      data.combinations.forEach(function (row) {
        var tr = document.createElement('tr');
        var initCell = '<td style="position:sticky;left:0;background:var(--bg-card);z-index:1;font-weight:700">' + (row.initial || '∅') + '</td>';
        tr.innerHTML = initCell;
        row.finals.forEach(function (cell) {
          var td = document.createElement('td');
          if (cell) {
            td.textContent = cell;
            td.style.cursor = 'pointer';
            td.style.fontFamily = 'var(--font)';
            td.style.transition = 'background 0.15s, color 0.15s';
            td.addEventListener('mouseenter', function () { td.style.background = 'var(--accent)'; td.style.color = '#fff'; });
            td.addEventListener('mouseleave', function () { td.style.background = ''; td.style.color = ''; });
            td.addEventListener('click', function () {
              var ch = data.pinyinCharMap && data.pinyinCharMap[cell];
              speakCN(ch || cell);
            });
          } else {
            td.textContent = '—';
            td.style.color = 'var(--border)';
          }
          tr.appendChild(td);
        });
        cTbody.appendChild(tr);
      });
      cTable.appendChild(cTbody);
      comboBody.appendChild(cTable);
      comboSection.appendChild(comboBody);
      container.appendChild(comboSection);
    }

    // Tone Sandhi Rules
    if (data.toneSandhi) {
      var sandhiSection = document.createElement('div');
      sandhiSection.className = 'kana-section';
      var sandhiHeader = document.createElement('div');
      sandhiHeader.className = 'kana-section-header';
      sandhiHeader.innerHTML = '<span class="kana-section-icon">变</span><span>Tonänderungsregeln (变调 Biàndiào)</span>';
      sandhiSection.appendChild(sandhiHeader);

      var sandhiBody = document.createElement('div');
      sandhiBody.className = 'kana-table-wrapper';
      var sTable = document.createElement('table');
      sTable.className = 'kana-table';
      sTable.innerHTML = '<thead><tr><th>Regel</th><th>Beispiel</th><th>Erklärung</th></tr></thead>';
      var sTbody = document.createElement('tbody');
      data.toneSandhi.forEach(function (rule) {
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td><strong>' + rule.rule + '</strong></td>' +
          '<td style="font-family:var(--font-jp);cursor:pointer">' + rule.example + '</td>' +
          '<td>' + rule.explanation + '</td>';
        tr.querySelector('td:nth-child(2)').addEventListener('click', function () {
          speakCN(rule.example.replace(/[（(].*[)）]/g, '').replace(/→/g, ''));
        });
        sTbody.appendChild(tr);
      });
      sTable.appendChild(sTbody);
      sandhiBody.appendChild(sTable);
      sandhiSection.appendChild(sandhiBody);
      container.appendChild(sandhiSection);
    }

    // Spelling Rules
    if (data.spellingRules) {
      var spellSection = document.createElement('div');
      spellSection.className = 'kana-section';
      var spellHeader = document.createElement('div');
      spellHeader.className = 'kana-section-header';
      spellHeader.innerHTML = '<span class="kana-section-icon">写</span><span>Schreibregeln (拼写规则)</span>';
      spellSection.appendChild(spellHeader);

      var spellBody = document.createElement('div');
      spellBody.className = 'kana-table-wrapper';
      var spTable = document.createElement('table');
      spTable.className = 'kana-table';
      spTable.innerHTML = '<thead><tr><th>Regel</th><th>Beispiel</th><th>Erklärung</th></tr></thead>';
      var spTbody = document.createElement('tbody');
      data.spellingRules.forEach(function (rule) {
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td><strong>' + rule.rule + '</strong></td>' +
          '<td>' + (rule.examples ? rule.examples.join(', ') : '') + '</td>' +
          '<td>' + (rule.description || '') + '</td>';
        spTbody.appendChild(tr);
      });
      spTable.appendChild(spTbody);
      spellBody.appendChild(spTable);
      spellSection.appendChild(spellBody);
      container.appendChild(spellSection);
    }

    // Special Syllables
    if (data.specialSyllables) {
      var specSection = document.createElement('div');
      specSection.className = 'kana-section';
      var specHeader = document.createElement('div');
      specHeader.className = 'kana-section-header';
      specHeader.innerHTML = '<span class="kana-section-icon">特</span><span>Besondere Silben (特殊音节)</span>';
      specSection.appendChild(specHeader);

      var specBody = document.createElement('div');
      specBody.className = 'kana-table-wrapper';
      var specTable = document.createElement('table');
      specTable.className = 'kana-table';
      specTable.innerHTML = '<thead><tr><th>Silbe</th><th>Erklärung</th><th>Beispiel</th></tr></thead>';
      var specTbody = document.createElement('tbody');
      data.specialSyllables.forEach(function (s) {
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td><strong>' + s.syllable + '</strong></td>' +
          '<td>' + s.explanation + '</td>' +
          '<td style="font-family:var(--font-jp);cursor:pointer">' + (s.example || '') + '</td>';
        if (s.example) {
          tr.querySelector('td:nth-child(3)').addEventListener('click', function () {
            speakCN(s.example);
          });
        }
        specTbody.appendChild(tr);
      });
      specTable.appendChild(specTbody);
      specBody.appendChild(specTable);
      specSection.appendChild(specBody);
      container.appendChild(specSection);
    }
  }

  // === TONES TAB ===
  function renderTonesTab() {
    var container = document.getElementById('tones-content');
    if (!container || container.children.length > 0) return;

    var data = window.PINYIN_DATA;
    if (!data || !data.tones) return;

    var title = document.createElement('h2');
    title.style.cssText = 'text-align:center;margin-bottom:8px;font-size:1.3rem';
    title.textContent = 'Die vier Töne des Mandarin';
    container.appendChild(title);

    var desc = document.createElement('p');
    desc.style.cssText = 'text-align:center;color:var(--text-secondary);margin-bottom:20px;font-size:0.9rem';
    desc.textContent = 'Mandarin ist eine Tonsprache. Die gleiche Silbe kann je nach Ton eine völlig andere Bedeutung haben. Klicke auf die Zeichen, um die Aussprache zu hören.';
    container.appendChild(desc);

    data.tones.forEach(function (tone) {
      var card = document.createElement('div');
      card.className = 'tone-card';

      card.innerHTML =
        '<div class="tone-card-header">' +
          '<div class="tone-number" style="background:' + tone.color + '">' + tone.number + '</div>' +
          '<div class="tone-info">' +
            '<h3>' + tone.name + ' (' + tone.chinese + ')</h3>' +
            '<p>' + tone.description + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="tone-example">' +
          '<span class="tone-example-char" style="color:' + tone.color + '">' + tone.example + '</span>' +
          '<div>' +
            '<div class="tone-example-pinyin" style="color:' + tone.color + '">' + tone.pinyin + '</div>' +
            '<div class="tone-example-meaning">' + tone.meaning + '</div>' +
          '</div>' +
        '</div>';

      card.addEventListener('click', function () {
        playTick();
        speakCN(tone.example);
      });

      container.appendChild(card);
    });

    // Tone change rules
    var rulesCard = document.createElement('div');
    rulesCard.className = 'tone-card';
    rulesCard.innerHTML =
      '<div class="tone-card-header">' +
        '<div class="tone-number" style="background:var(--accent)">!</div>' +
        '<div class="tone-info">' +
          '<h3>Tonänderungsregeln (变调 Biàndiào)</h3>' +
          '<p>Wichtige Regeln, die die Aussprache der Töne beeinflussen</p>' +
        '</div>' +
      '</div>' +
      '<div style="padding:12px;font-size:0.9rem;line-height:1.8">' +
        '<p><strong>3. + 3. Ton → 2. + 3. Ton:</strong> 你好 (nǐ hǎo → ní hǎo)</p>' +
        '<p><strong>一 (yī) vor 4. Ton → yí:</strong> 一个 (yī gè → yí gè)</p>' +
        '<p><strong>一 (yī) vor 1./2./3. Ton → yì:</strong> 一天 (yī tiān → yì tiān)</p>' +
        '<p><strong>不 (bù) vor 4. Ton → bú:</strong> 不是 (bù shì → bú shì)</p>' +
      '</div>';
    container.appendChild(rulesCard);
  }

  // === INIT ===
  initTheme();
  try { loadData(); } catch (e) { console.error('loadData error:', e); }
  try { renderPinyinTab(); } catch (e) { console.error('renderPinyinTab error:', e); }
  try { renderTonesTab(); } catch (e) { console.error('renderTonesTab error:', e); }
  if (typeof initBookmarkToggles === 'function') initBookmarkToggles();
  if (typeof initSelectFilters === 'function') initSelectFilters();
  switchTab('tones');
  // Retry: some browsers may not have tones-content ready on first pass
  setTimeout(function () {
    renderTonesTab();
  }, 50);
})();
