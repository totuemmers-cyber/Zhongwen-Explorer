(function () {
  'use strict';

  // Shell ported from Nihongo Explorer; language specifics come from lang-profile.js.
  var profile = window.LANG_PROFILE;
  var store = window.APP_STORAGE;

  // === APP OBJECT (shared across sections) ===
  var app = window.app = {
    activeTab: profile.defaultTab,
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
    ensureSectionLoaded: ensureSectionLoaded,
    ensureGrammarLessonsLoaded: ensureGrammarLessonsLoaded,
    renderBasicNumbers: renderBasicNumbers,
    speakCN: speakCN
  };

  // === SOUND ENGINE (Web Audio API) ===
  var soundEnabled = store.local.get(profile.storagePrefix + 'sound', 'off') === 'on';
  var audioCtx = null;

  function getAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
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
  var loadingEls = {
    hanzi: document.getElementById('hanzi-loading'),
    grammar: document.getElementById('grammar-loading'),
    vocab: document.getElementById('vocab-loading'),
    onomatopoeia: document.getElementById('ono-loading'),
    measurewords: document.getElementById('mw-loading'),
    radicals: document.getElementById('radicals-loading'),
    quiz: document.getElementById('quiz-loading')
  };
  var sectionErrorState = {};
  var scriptState = { loaded: {}, pending: {} };
  var quizDataLoaded = false;
  var quizDataPromise = null;
  var grammarLessonsPromise = null;
  var speechVoice = null;
  var speechInitStarted = false;
  var speechTimer = null;
  var speechRequestId = 0;

  // Keep saved bookmarks when entries were consolidated into one surviving entry.
  function migrateLegacyBookmarks(sectionName, items) {
    var bookmarks = getBookmarks(sectionName);
    var original = JSON.stringify(bookmarks);
    items.forEach(function (item) {
      (item.legacyIds || []).forEach(function (oldId) {
        if (oldId === item.id || bookmarks.indexOf(oldId) === -1) return;
        bookmarks = bookmarks.filter(function (id) { return id !== oldId; });
        if (bookmarks.indexOf(item.id) === -1) bookmarks.push(item.id);
      });
    });
    if (JSON.stringify(bookmarks) !== original) {
      store.local.setJSON(profile.storagePrefix + 'bookmarks-' + sectionName, bookmarks);
    }
  }

  var DATA = profile.dataScripts;

  // Each tab loads its data on first use. dependsOn sections load first (hanzi links in
  // vocabulary and radical details need the character data).
  var sectionLoaders = {
    hanzi: {
      scripts: DATA.radicals.concat(DATA.hanzi),
      message: 'Lade Hanzi-Daten...',
      hydrate: function () {
        if (window.resetSectionLookups) window.resetSectionLookups();
        app.sections.hanzi.setItems(window.HANZI_DATA || []);
        if (!app.sections.radicals.isLoaded && window.KANGXI_RADICALS) {
          app.sections.radicals.setItems(window.KANGXI_RADICALS);
        }
      }
    },
    grammar: {
      scripts: DATA.grammar,
      message: 'Lade Grammatik-Daten...',
      hydrate: function () {
        var items = window.GRAMMAR_DATA || [];
        migrateLegacyBookmarks('grammar', items);
        app.sections.grammar.setItems(items);
      }
    },
    vocab: {
      dependsOn: ['hanzi'],
      scripts: DATA.vocab,
      message: 'Lade Vokabel-Daten...',
      hydrate: function () {
        var items = [];
        profile.levels.forEach(function (level) {
          items = items.concat(window['VOCAB_' + level.replace('-', '_')] || []);
        });
        items = items.concat(window.CHENGYU_DATA || [], window.REDEWENDUNGEN_DATA || []);
        migrateLegacyBookmarks('vocab', items);
        app.sections.vocab.setItems(items);
      }
    },
    onomatopoeia: {
      scripts: DATA.onomatopoeia,
      message: 'Lade Lautmalerei-Daten...',
      hydrate: function () {
        var items = window.ONOMATOPOEIA_DATA || [];
        // The extra files used category instead of type.
        items.forEach(function (item) {
          if (item.category && !item.type) { item.type = item.category; delete item.category; }
        });
        app.sections.onomatopoeia.setItems(items);
      }
    },
    measurewords: {
      scripts: DATA.measurewords,
      message: 'Lade Zählwort-Daten...',
      hydrate: function () {
        var data = window.MEASURE_WORDS_DATA;
        app.sections.measurewords.setItems(data && data.measureWords ? data.measureWords : []);
      }
    },
    radicals: {
      dependsOn: ['hanzi'],
      scripts: DATA.radicals,
      message: 'Lade Radikal-Daten...',
      hydrate: function () {
        if (window.resetSectionLookups) window.resetSectionLookups();
        if (!app.sections.radicals.isLoaded) app.sections.radicals.setItems(window.KANGXI_RADICALS || []);
      }
    }
  };

  // Tab panels and controls that are not section-managed
  var tonesTab = document.getElementById('tones-tab');
  var pinyinTab = document.getElementById('pinyin-tab');
  var quizTab = document.getElementById('quiz-tab');

  // Section names that have controls + tab panels
  var sectionNames = ['hanzi', 'grammar', 'vocab', 'onomatopoeia', 'measurewords', 'radicals'];

  // === INSTANTIATE SECTIONS ===
  sectionNames.forEach(function (name) {
    app.sections[name] = new Section(SECTION_CONFIGS[name]);
  });

  function getSectionHost(name) {
    if (name === 'quiz') return quizTab;
    return tabPanels[name] || null;
  }

  function getSectionErrorEl(name) {
    var host = getSectionHost(name);
    if (!host) return null;

    var existing = host.querySelector('.section-error');
    if (existing) return existing;

    var errorEl = document.createElement('div');
    errorEl.className = 'section-error hidden';
    errorEl.setAttribute('role', 'alert');

    var textEl = document.createElement('div');
    textEl.className = 'section-error-text';
    errorEl.appendChild(textEl);

    var retryBtn = document.createElement('button');
    retryBtn.className = 'btn btn-pill section-error-retry';
    retryBtn.type = 'button';
    retryBtn.textContent = 'Erneut versuchen';
    errorEl.appendChild(retryBtn);

    host.insertBefore(errorEl, host.firstChild);
    return errorEl;
  }

  function clearSectionError(name) {
    sectionErrorState[name] = null;
    var errorEl = getSectionErrorEl(name);
    if (!errorEl) return;
    errorEl.classList.add('hidden');
    var retryBtn = errorEl.querySelector('.section-error-retry');
    if (retryBtn) retryBtn.onclick = null;
  }

  function showSectionError(name, message, retryFn) {
    sectionErrorState[name] = { message: message, retry: retryFn };
    var errorEl = getSectionErrorEl(name);
    if (!errorEl) return;

    var textEl = errorEl.querySelector('.section-error-text');
    if (textEl) textEl.textContent = message;

    var retryBtn = errorEl.querySelector('.section-error-retry');
    if (retryBtn) {
      retryBtn.onclick = function () {
        clearSectionError(name);
        retryFn();
      };
    }

    errorEl.classList.remove('hidden');
  }

  function shouldBlockScriptLoad(src) {
    var blocklist = window.__APP_TEST_BLOCK_SCRIPTS;
    return Array.isArray(blocklist) && blocklist.indexOf(src) !== -1;
  }

  function setLoadingVisible(name, visible, message) {
    var loadingEl = loadingEls[name];
    if (!loadingEl) return;
    loadingEl.setAttribute('role', 'status');
    if (app.sections[name]) app.sections[name].dom.grid.setAttribute('aria-busy', String(visible));
    if (message) {
      var label = loadingEl.querySelector('span');
      if (label) label.textContent = message;
    }
    loadingEl.classList.toggle('hidden', !visible);
  }

  function loadScript(src) {
    if (scriptState.loaded[src]) {
      return Promise.resolve();
    }
    if (scriptState.pending[src]) {
      return scriptState.pending[src];
    }
    if (shouldBlockScriptLoad(src)) {
      return Promise.reject(new Error('Script wurde absichtlich blockiert: ' + src));
    }

    scriptState.pending[src] = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = function () {
        scriptState.loaded[src] = true;
        delete scriptState.pending[src];
        resolve();
      };
      script.onerror = function () {
        delete scriptState.pending[src];
        reject(new Error('Script konnte nicht geladen werden: ' + src));
      };
      document.body.appendChild(script);
    });

    return scriptState.pending[src];
  }

  function loadScripts(sources) {
    // async=false scripts download in parallel but still run in insertion order.
    return Promise.all(sources.map(loadScript));
  }

  function ensureSectionLoaded(name) {
    if (name === 'quiz') return ensureQuizDataLoaded();

    var section = app.sections[name];
    var loader = sectionLoaders[name];
    if (!section || !loader) return Promise.resolve();
    if (section.isLoaded) return Promise.resolve();
    if (section._loadPromise) return section._loadPromise;

    clearSectionError(name);
    section.isLoading = true;
    setLoadingVisible(name, true, loader.message);

    section._loadPromise = Promise.all((loader.dependsOn || []).map(ensureSectionLoaded))
      .then(function () {
        return loadScripts(loader.scripts);
      })
      .then(function () {
        loader.hydrate();
        clearSectionError(name);
      })
      .catch(function (err) {
        section._loadPromise = null;
        console.error(err);
        showSectionError(name, loader.message.replace('Lade', 'Fehler beim Laden von').replace('...', '.') + ' Bitte erneut versuchen.', function () {
          ensureSectionLoaded(name).then(function () {
            if (app.activeTab === name && app.sections[name] && app.sections[name].config.onTabActivate) {
              app.sections[name].config.onTabActivate(app.sections[name]);
            }
          }).catch(function () {});
        });
        throw err;
      })
      .finally(function () {
        section.isLoading = false;
        setLoadingVisible(name, false);
      });

    return section._loadPromise;
  }

  function ensureQuizDataLoaded() {
    if (quizDataLoaded) return Promise.resolve();
    if (quizDataPromise) return quizDataPromise;

    setLoadingVisible('quiz', true, 'Lade Quiz-Daten...');
    quizDataPromise = Promise.all([
      ensureSectionLoaded('hanzi'),
      ensureSectionLoaded('grammar'),
      ensureSectionLoaded('vocab'),
      ensureSectionLoaded('measurewords')
    ]).then(function () {
      quizDataLoaded = true;
    }).catch(function (err) {
      quizDataPromise = null;
      throw err;
    }).finally(function () {
      setLoadingVisible('quiz', false);
    });

    return quizDataPromise;
  }

  function ensureGrammarLessonsLoaded() {
    if (window.__grammarLessonsInitialized) {
      return Promise.resolve();
    }
    if (grammarLessonsPromise) {
      return grammarLessonsPromise;
    }

    clearSectionError('grammar');
    setLoadingVisible('grammar', true, 'Lade Grammatik-Lektionen...');
    grammarLessonsPromise = loadScript('grammar-lessons.js')
      .then(function () {
        clearSectionError('grammar');
      })
      .catch(function (err) {
        grammarLessonsPromise = null;
        console.error(err);
        showSectionError('grammar', 'Grammatik-Lektionen konnten nicht geladen werden. Bitte erneut versuchen.', function () {
          ensureGrammarLessonsLoaded().catch(function () {});
        });
        throw err;
      })
      .finally(function () {
        setLoadingVisible('grammar', false);
      });

    return grammarLessonsPromise;
  }

  // === TAB SYSTEM ===
  function switchTab(tab) {
    if (app.workspace && !app.workspace.beforeSwitch(tab)) return false;
    app.activeTab = tab;
    playSwoosh();

    tabBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });

    // Toggle controls and tab panels for sections
    sectionNames.forEach(function (name) {
      var sec = app.sections[name];
      if (sec.dom.controls) sec.dom.controls.classList.toggle('hidden', tab !== name);
      if (tabPanels[name]) tabPanels[name].classList.toggle('hidden', tab !== name);
    });

    // Tones, pinyin and quiz tabs (no Section instance)
    tonesTab.classList.toggle('hidden', tab !== 'tones');
    pinyinTab.classList.toggle('hidden', tab !== 'pinyin');
    if (quizTab) quizTab.classList.toggle('hidden', tab !== 'quiz');

    if (app.workspace) app.workspace.afterSwitch(tab);

    // Tab activate hooks
    if (tab === 'tones') {
      renderTonesTab();
      updateCount();
      return;
    }
    if (tab === 'pinyin') {
      renderPinyinTab();
      updateCount();
      return;
    }

    if (tab === 'quiz') {
      ensureQuizDataLoaded().then(function () {
        if (app.activeTab !== 'quiz') return;
        if (window.QuizModule) window.QuizModule.onTabActivate();
        updateCount();
      }).catch(function () {
        updateCount();
      });
      updateCount();
      return;
    }

    if (app.sections[tab]) {
      ensureSectionLoaded(tab).then(function () {
        if (app.activeTab !== tab) return;
        if (app.sections[tab].config.onTabActivate) {
          app.sections[tab].config.onTabActivate(app.sections[tab]);
        }
        updateCount();
      }).catch(function () {
        updateCount();
      });
    }
    updateCount();
  }

  // Cache static DOM collections
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
    randomBtn.hidden = !app.sections[tab] || (app.workspace && app.workspace.isReadingView());
    if (app.workspace && app.workspace.updateSpecialCount()) return;
    if (tab === 'tones') {
      itemCountEl.textContent = '4 Töne + neutraler Ton';
    } else if (tab === 'pinyin') {
      itemCountEl.textContent = 'Anlaute, Auslaute & Silbentabelle';
    } else if (tab === 'quiz') {
      itemCountEl.textContent = quizDataLoaded ? 'Quiz' : 'Lädt…';
    } else if (app.sections[tab]) {
      var sec = app.sections[tab];
      itemCountEl.textContent = sec.isLoaded ? (sec.filteredItems.length + sec.config.countLabel) : (sec.isLoading ? 'Lädt…' : 'Noch nicht geladen');
    }
  }

  // === RADICAL FILTER (hanzi-specific, managed in app) ===
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

  // === OPEN RADICAL IN TAB (cross-section) ===
  function openRadicalInTab(radicalChar) {
    if (app.workspace) app.workspace.openRelated('radicals', function (r) { return r.radical === radicalChar; });
  }

  // === BASIC NUMBERS (measure words section) ===
  function renderBasicNumbers() {
    var container = document.getElementById('mw-numbers-section');
    if (!container || container.children.length > 0) return;
    var data = window.MEASURE_WORDS_DATA;
    if (!data || !data.basicNumbers) return;

    var section = document.createElement('div');
    section.className = 'counters-numbers-section';

    var header = document.createElement('button');
    header.type = 'button';
    header.setAttribute('aria-expanded', 'true');
    header.className = 'counters-numbers-header';
    header.innerHTML = '<span class="tab-icon-kana" lang="zh-CN">数</span> Grundzahlen' +
      '<svg class="toggle-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';

    var body = document.createElement('div');
    body.className = 'counters-numbers-body';

    var wrapper = document.createElement('div');
    wrapper.className = 'numbers-table-wrapper';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', 'Grundzahlen, horizontal scrollbar');

    var table = document.createElement('table');
    table.className = 'numbers-table';
    table.innerHTML = '<thead><tr><th>Zahl</th><th>Hanzi</th><th>Pinyin</th><th>Hinweis</th></tr></thead>';

    var tbody = document.createElement('tbody');
    data.basicNumbers.forEach(function (n) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><strong>' + n.number + '</strong></td>' +
        '<td class="num-kanji" lang="zh-CN">' + n.hanzi + '</td>' +
        '<td class="num-romaji">' + n.pinyin + '</td>' +
        '<td class="num-notes">' + (n.notes || '—') + '</td>';
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrapper.appendChild(table);
    body.appendChild(wrapper);

    header.addEventListener('click', function () {
      playTick();
      var icon = header.querySelector('.toggle-icon');
      body.classList.toggle('collapsed');
      header.setAttribute('aria-expanded', !body.classList.contains('collapsed'));
      icon.classList.toggle('collapsed');
    });

    section.appendChild(header);
    section.appendChild(body);
    container.appendChild(section);
  }

  // === THEME ===
  function initTheme() {
    var saved = store.local.get(profile.storagePrefix + 'theme', null);
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  function toggleTheme() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      store.local.set(profile.storagePrefix + 'theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      store.local.set(profile.storagePrefix + 'theme', 'dark');
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
      store.local.set(profile.storagePrefix + 'sound', soundEnabled ? 'on' : 'off');
      soundToggle.classList.toggle('active', soundEnabled);
      if (soundEnabled) playPop();
    });
  }

  // === RANDOM BUTTON (data-driven) ===
  randomBtn.addEventListener('click', function () {
    playPop();
    var tab = app.activeTab;
    if (app.sections[tab]) {
      var sec = app.sections[tab];
      ensureSectionLoaded(tab).then(function () {
        if (app.activeTab !== tab) return;
        if (sec.filteredItems.length === 0) return;
        var idx = Math.floor(Math.random() * sec.filteredItems.length);
        sec.openDetail(idx);
      }).catch(function () {});
    }
  });

  // === KEYBOARD NAVIGATION (data-driven) ===
  document.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.isComposing || e.keyCode === 229 || e.ctrlKey || e.altKey || e.metaKey) return;
    var focused = document.activeElement;
    if (focused && (focused.matches('input, select, textarea') || focused.isContentEditable)) {
      if (e.key !== 'Escape') return;
    }
    // Quiz keyboard handling
    if (window.QuizModule && window.QuizModule.handleKey(e)) return;

    // Check if any overlay is open
    for (var i = 0; i < sectionNames.length; i++) {
      var sec = app.sections[sectionNames[i]];
      if (sec.isOverlayOpen()) {
        if (e.key === 'Escape') sec.closeDetail();
        if (e.key === 'ArrowLeft' && !focused.matches('button, a, input, select, textarea')) sec.navigateDetail(-1);
        if (e.key === 'ArrowRight' && !focused.matches('button, a, input, select, textarea')) sec.navigateDetail(1);
        // A modal detail keeps the keyboard; the wide-screen side pane leaves the global shortcuts active.
        if (e.key === 'Escape' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || !sec.dom.overlay.classList.contains('as-pane')) return;
        break;
      }
    }

    var helpOverlay = document.getElementById('help-overlay');
    if (helpOverlay && !helpOverlay.classList.contains('hidden')) {
      if (e.key === 'Escape' || e.key === '?') {
        e.preventDefault();
        toggleHelpOverlay();
      }
      return;
    }

    // Skip shortcuts when typing in an input
    var ae = document.activeElement;
    if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'SELECT' || ae.tagName === 'TEXTAREA')) {
      if (e.key === 'Escape') { ae.blur(); return; }
      return;
    }

    // Help overlay toggle
    if (e.key === '?') {
      e.preventDefault();
      toggleHelpOverlay();
      return;
    }

    // Tab switching: 1-9 follow the sidebar order
    var keyIdx = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key);
    if (keyIdx !== -1 && tabBtns[keyIdx]) {
      e.preventDefault();
      switchTab(tabBtns[keyIdx].getAttribute('data-tab'));
      return;
    }

    // Random entry: r
    if (e.key === 'r' && !randomBtn.hidden) {
      randomBtn.click();
      return;
    }

    // Focus search: /
    if (e.key === '/') {
      var tab = app.activeTab;
      if (app.sections[tab] && app.sections[tab].dom.search) {
        e.preventDefault();
        app.sections[tab].dom.search.focus();
      }
    }
  });

  // === TEXT-TO-SPEECH (mainland Mandarin voice) ===
  function speakCN(text) {
    if (!('speechSynthesis' in window) || !text) return;

    var clean = String(text).replace(/[.\-…]/g, '').trim();
    if (!clean) return;

    ensureSpeechInitialized();

    speechRequestId += 1;
    var requestId = speechRequestId;
    var synth = window.speechSynthesis;

    if (speechTimer) {
      clearTimeout(speechTimer);
      speechTimer = null;
    }

    try {
      synth.cancel();
    } catch (e) {}

    speechTimer = setTimeout(function () {
      if (requestId !== speechRequestId) return;

      var utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = profile.speechLang;
      utterance.rate = 0.8;
      utterance.volume = 0.8;

      var selectedVoice = speechVoice || pickVoice(synth.getVoices ? synth.getVoices() : []);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        if (selectedVoice.lang) utterance.lang = selectedVoice.lang;
      }

      try {
        if (typeof synth.resume === 'function') synth.resume();
      } catch (e) {}

      try {
        synth.speak(utterance);
      } catch (e) {}
    }, 60);
  }

  // Prefers zh-CN; other Mandarin voices next; never Cantonese (zh-HK, yue).
  function pickVoice(voices) {
    if (!voices || !voices.length) return null;
    var wanted = profile.speechLang.toLowerCase();
    var exactMatch = null;
    var genericMatch = null;
    for (var i = 0; i < voices.length; i++) {
      var voice = voices[i];
      if (!voice || !voice.lang) continue;
      var lang = String(voice.lang).toLowerCase().replace('_', '-');
      if (lang.indexOf('zh-hk') === 0 || lang.indexOf('yue') === 0) continue;
      if (!exactMatch && lang === wanted) exactMatch = voice;
      if (!genericMatch && (lang.indexOf('zh') === 0 || lang.indexOf('cmn') === 0)) genericMatch = voice;
    }
    return exactMatch || genericMatch || null;
  }

  function cacheVoice() {
    if (!('speechSynthesis' in window) || typeof window.speechSynthesis.getVoices !== 'function') return;
    var selected = pickVoice(window.speechSynthesis.getVoices());
    if (selected) speechVoice = selected;
  }

  function ensureSpeechInitialized() {
    if (!('speechSynthesis' in window)) return;
    var synth = window.speechSynthesis;

    if (!speechInitStarted) {
      speechInitStarted = true;
      cacheVoice();
      if ('onvoiceschanged' in synth) {
        synth.onvoiceschanged = cacheVoice;
      }
    }

    try {
      if (typeof synth.resume === 'function') synth.resume();
    } catch (e) {}
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
          '<td><strong style="color:var(--tone-' + t.number + ')">' + t.number + '</strong></td>' +
          '<td>' + t.name + '</td>' +
          '<td style="font-family:var(--font-jp);font-size:1.5rem;cursor:pointer" onclick="window.app.speakCN(\'' + t.example + '\')">' + t.example + '</td>' +
          '<td style="color:var(--tone-' + t.number + ');font-weight:600">' + t.pinyin + '</td>' +
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

    // Special Syllables (整体认读音节: read as a whole, not as initial + final)
    if (data.specialSyllables && data.specialSyllables.syllables) {
      var special = data.specialSyllables;
      var specSection = document.createElement('div');
      specSection.className = 'kana-section';
      var specHeader = document.createElement('div');
      specHeader.className = 'kana-section-header';
      specHeader.innerHTML = '<span class="kana-section-icon">特</span><span>' + special.labelDE + ' (<span lang="zh-CN">' + special.label + '</span>, ' + special.labelPinyin + ')</span>';
      specSection.appendChild(specHeader);

      var specBody = document.createElement('div');
      specBody.className = 'kana-table-wrapper';
      var specTable = document.createElement('table');
      specTable.className = 'kana-table';
      specTable.innerHTML = '<thead><tr><th>Silbe</th><th>Aufbau</th></tr></thead>';
      var specTbody = document.createElement('tbody');
      special.syllables.forEach(function (s) {
        var tr = document.createElement('tr');
        var cell = document.createElement('td');
        var play = document.createElement('button');
        play.type = 'button';
        play.className = 'btn btn-pill';
        play.textContent = s.pinyin;
        play.setAttribute('aria-label', s.pinyin + ' anhören');
        play.addEventListener('click', function () {
          speakCN((data.pinyinCharMap && data.pinyinCharMap[s.pinyin]) || s.pinyin);
        });
        cell.appendChild(play);
        tr.appendChild(cell);
        var meaning = document.createElement('td');
        meaning.textContent = s.meaning;
        tr.appendChild(meaning);
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
          '<div class="tone-number" style="background:var(--tone-' + tone.number + ');color:var(--tone-on)">' + tone.number + '</div>' +
          '<div class="tone-info">' +
            '<h3>' + tone.name + ' (' + tone.chinese + ')</h3>' +
            '<p>' + tone.description + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="tone-example">' +
          '<span class="tone-example-char" style="color:var(--tone-' + tone.number + ')">' + tone.example + '</span>' +
          '<div>' +
            '<div class="tone-example-pinyin" style="color:var(--tone-' + tone.number + ')">' + tone.pinyin + '</div>' +
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


  // === HELP OVERLAY ===
  function toggleHelpOverlay() {
    var overlay = document.getElementById('help-overlay');
    if (!overlay) return;
    if (app.workspace) { app.workspace.toggleHelp(); return; }
    var isHidden = overlay.classList.contains('hidden');
    overlay.classList.toggle('hidden', !isHidden);
    document.body.style.overflow = isHidden ? 'hidden' : '';
  }

  var helpOverlay = document.getElementById('help-overlay');
  if (helpOverlay) {
    helpOverlay.addEventListener('click', function (e) {
      if (e.target === helpOverlay) toggleHelpOverlay();
    });
    var helpCloseBtn = document.getElementById('help-close');
    if (helpCloseBtn) helpCloseBtn.addEventListener('click', toggleHelpOverlay);
  }

  // The lessons engine loads on first use of the "Lektionen" view.
  var grammarViewToggle = document.getElementById('grammar-view-toggle');
  if (grammarViewToggle) {
    grammarViewToggle.addEventListener('click', function (e) {
      var btn = e.target.closest('.gl-view-btn');
      if (!btn || btn.getAttribute('data-view') !== 'lessons' || window.__grammarLessonsInitialized) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      if (btn.disabled) return;

      btn.disabled = true;
      ensureGrammarLessonsLoaded().then(function () {
        btn.disabled = false;
        if (window.__grammarLessonsInitialized) btn.click();
      }).catch(function () {
        btn.disabled = false;
      });
    });
  }

  // === INIT ===
  initTheme();
  renderTonesTab();
  if (typeof initBookmarkToggles === 'function') initBookmarkToggles();
  if (typeof initSelectFilters === 'function') initSelectFilters();
  updateCount();
})();
