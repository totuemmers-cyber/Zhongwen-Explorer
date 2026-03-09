// === Section Config Objects for Zhongwen Explorer ===
// Each config defines section-specific behavior for the generic Section class.

var SECTION_CONFIGS = {};

// === Shared Constants & Helpers ===

var LEVEL_ORDER = { 'HSK1': 0, 'HSK2': 1, 'HSK3': 2, 'HSK4': 3, 'HSK5': 4, 'HSK6': 5 };

// Lazy-built lookup indexes
var _hanziByChar = null;
var _radicalSet = null;
var _hanziByRadical = null;

function getHanziByChar() {
  if (!_hanziByChar) {
    _hanziByChar = {};
    var items = window.app && window.app.sections.hanzi ? window.app.sections.hanzi.allItems : [];
    for (var i = 0; i < items.length; i++) _hanziByChar[items[i].hanzi] = items[i];
  }
  return _hanziByChar;
}

function getRadicalSet() {
  if (!_radicalSet) {
    _radicalSet = {};
    var items = window.app && window.app.sections.radicals ? window.app.sections.radicals.allItems : [];
    for (var i = 0; i < items.length; i++) _radicalSet[items[i].radical] = true;
  }
  return _radicalSet;
}

function getHanziByRadical() {
  if (!_hanziByRadical) {
    _hanziByRadical = {};
    var items = window.app && window.app.sections.hanzi ? window.app.sections.hanzi.allItems : [];
    for (var i = 0; i < items.length; i++) {
      var k = items[i];
      if (k.components) {
        for (var j = 0; j < k.components.length; j++) {
          var rad = k.components[j].radical;
          if (!_hanziByRadical[rad]) _hanziByRadical[rad] = [];
          _hanziByRadical[rad].push(k);
        }
      }
    }
  }
  return _hanziByRadical;
}

function renderExamplesOrEmpty(elementId, examples) {
  var el = document.getElementById(elementId);
  if (!el) return;
  if (!examples || examples.length === 0) {
    el.innerHTML = '<p class="no-data">Keine Beispiele verfügbar.</p>';
    return;
  }
  el.innerHTML = '';
  examples.forEach(function (ex) {
    var chinese = ex.chinese || ex.word || '';
    var pinyin = ex.pinyin || '';
    var german = ex.german || ex.meaning || '';
    var div = document.createElement('div');
    div.className = 'example-item';
    var jpSpan = document.createElement('span');
    jpSpan.className = 'example-jp';
    jpSpan.textContent = chinese;
    jpSpan.style.cursor = 'pointer';
    jpSpan.addEventListener('click', function () { speakText(chinese); });
    div.appendChild(jpSpan);
    if (pinyin) {
      var pySpan = document.createElement('span');
      pySpan.className = 'example-romaji';
      pySpan.textContent = pinyin;
      div.appendChild(pySpan);
    }
    var deSpan = document.createElement('span');
    deSpan.className = 'example-de';
    deSpan.textContent = german;
    div.appendChild(deSpan);
    el.appendChild(div);
  });
}

function speakText(text) {
  if (window.app && window.app.speakCN) window.app.speakCN(text);
}

function createSpeakBtn(text, small) {
  var btn = document.createElement('button');
  btn.className = 'btn btn-icon btn-speak' + (small ? ' btn-speak-sm' : '');
  btn.title = 'Aussprechen';
  btn.innerHTML = '<svg width="' + (small ? '14' : '18') + '" height="' + (small ? '14' : '18') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    speakText(text);
    if (window.app) window.app.playTick();
  });
  return btn;
}

// ========================================
// HANZI SECTION
// ========================================
SECTION_CONFIGS['hanzi'] = {
  name: 'hanzi',
  countLabel: ' Hanzi',
  defaultSort: 'hsk',
  batchSize: 80,
  dom: {
    controls: 'hanzi-controls',
    grid: 'hanzi-grid',
    noResults: 'no-results',
    search: 'search-input',
    clearSearch: 'clear-search',
    sort: 'sort-select',
    overlay: 'detail-overlay',
    closeBtn: 'close-detail',
    prevBtn: 'prev-kanji',
    nextBtn: 'next-kanji'
  },
  filterGroups: [
    { stateKey: 'level', selector: '.filter-btn[data-level]', dataAttr: 'data-level', defaultValue: 'all' }
  ],
  filterFn: function (item, query, filters) {
    // Radical filter
    if (window.app && window.app.activeRadical) {
      var hasRad = false;
      if (item.components) {
        for (var i = 0; i < item.components.length; i++) {
          if (item.components[i].radical === window.app.activeRadical) { hasRad = true; break; }
        }
      }
      if (!hasRad) return false;
    }
    // Level filter
    if (filters.level !== 'all' && item.hsk !== filters.level) return false;
    // Search
    if (!query) return true;
    if (item.hanzi.indexOf(query) !== -1) return true;
    if (item.pinyin && item.pinyin.toLowerCase().indexOf(query) !== -1) return true;
    for (var m = 0; m < item.meanings.length; m++) {
      if (item.meanings[m].toLowerCase().indexOf(query) !== -1) return true;
    }
    return false;
  },
  sortFn: function (items, sortKey) {
    items.sort(function (a, b) {
      if (sortKey === 'strokes') return (a.strokes || 0) - (b.strokes || 0);
      if (sortKey === 'alpha') return (a.pinyin || '').localeCompare(b.pinyin || '');
      // Default: HSK level
      var la = LEVEL_ORDER[a.hsk] !== undefined ? LEVEL_ORDER[a.hsk] : 99;
      var lb = LEVEL_ORDER[b.hsk] !== undefined ? LEVEL_ORDER[b.hsk] : 99;
      return la - lb || (a.strokes || 0) - (b.strokes || 0);
    });
  },
  createCard: function (item, index, section) {
    var card = document.createElement('div');
    card.className = 'kanji-card';
    card.innerHTML =
      '<span class="card-level ' + item.hsk + '">' + item.hsk.replace('HSK', '') + '</span>' +
      '<span class="card-kanji">' + item.hanzi + '</span>' +
      '<span class="card-reading">' + (item.pinyin || '') + '</span>' +
      '<span class="card-meaning">' + item.meanings[0] + '</span>';
    card.addEventListener('click', function () { section.openDetail(index); });
    return card;
  },
  openDetail: function (item, dom) {
    document.getElementById('detail-kanji').textContent = item.hanzi;
    document.getElementById('detail-kanji').style.cursor = 'pointer';
    document.getElementById('detail-kanji').onclick = function () { speakText(item.hanzi); };
    var badge = document.getElementById('detail-jlpt');
    badge.textContent = item.hsk;
    badge.className = 'detail-jlpt-badge ' + item.hsk;
    document.getElementById('detail-meanings').textContent = item.meanings.join(', ');
    document.getElementById('detail-strokes').textContent = (item.strokes || '?') + ' Striche';

    // Pinyin with speaker button
    var pinyinEl = document.getElementById('detail-pinyin');
    pinyinEl.innerHTML = '';
    var pinyinTag = document.createElement('span');
    pinyinTag.className = 'reading-tag pinyin-reading';
    pinyinTag.textContent = item.pinyin || '';
    pinyinEl.appendChild(pinyinTag);
    pinyinEl.appendChild(createSpeakBtn(item.hanzi, true));

    // Tone
    var toneEl = document.getElementById('detail-tone');
    var toneNum = item.tone || 0;
    var toneNames = ['', 'Erster Ton (hoch)', 'Zweiter Ton (steigend)', 'Dritter Ton (fallend-steigend)', 'Vierter Ton (fallend)', 'Neutraler Ton'];
    toneEl.innerHTML = '<span class="reading-tag tone-' + toneNum + '">' + (toneNames[toneNum] || 'Ton ' + toneNum) + '</span>';

    // Stroke order — reset to collapsed, clear previous
    var soHeader = document.getElementById('stroke-order-header');
    var soBody = document.getElementById('stroke-order-body');
    var soContainer = document.getElementById('stroke-order-container');
    var soIcon = soHeader.querySelector('.toggle-icon');
    soBody.classList.add('collapsed');
    soIcon.classList.add('collapsed');
    soContainer.innerHTML = '';

    var codepoint = item.hanzi.codePointAt(0);

    // Remove old listener by replacing node
    var newHeader = soHeader.cloneNode(true);
    soHeader.parentNode.replaceChild(newHeader, soHeader);
    soIcon = newHeader.querySelector('.toggle-icon');

    newHeader.addEventListener('click', function () {
      if (window.app) window.app.playTick();
      soBody.classList.toggle('collapsed');
      soIcon.classList.toggle('collapsed');

      // Load SVG on first expand via <object> (works with file:// protocol)
      if (!soBody.classList.contains('collapsed') && !soContainer.querySelector('.stroke-order-svg')) {
        var obj = document.createElement('object');
        obj.data = 'stroke-order/' + codepoint + '.svg';
        obj.type = 'image/svg+xml';
        obj.className = 'stroke-order-svg';

        var replayBtn = document.createElement('button');
        replayBtn.className = 'btn btn-pill stroke-order-replay';
        replayBtn.textContent = 'Nochmal abspielen';
        replayBtn.addEventListener('click', function () {
          if (window.app) window.app.playTick();
          obj.data = 'stroke-order/' + codepoint + '.svg';
        });

        soContainer.appendChild(obj);
        soContainer.appendChild(replayBtn);
      }
    });

    // Components
    var compEl = document.getElementById('detail-components');
    if (item.components && item.components.length > 0) {
      compEl.innerHTML = item.components.map(function (c) {
        var isClickable = getRadicalSet()[c.radical];
        return '<span class="component-tag' + (isClickable ? ' clickable' : '') + '" ' +
          (isClickable ? 'data-radical="' + c.radical + '"' : '') + '>' +
          c.radical + ' <small>' + c.meaning + '</small></span>';
      }).join('');
      compEl.querySelectorAll('.component-tag.clickable').forEach(function (tag) {
        tag.addEventListener('click', function () {
          if (window.app) {
            window.app.sections.hanzi.closeDetail();
            window.app.openRadicalInTab(tag.getAttribute('data-radical'));
          }
        });
      });
    } else {
      compEl.innerHTML = '<p class="no-data">Keine Komponentendaten verfügbar.</p>';
    }

    // Examples
    renderExamplesOrEmpty('detail-examples', item.examples);
  }
};

// ========================================
// GRAMMAR SECTION
// ========================================
SECTION_CONFIGS['grammar'] = {
  name: 'grammar',
  countLabel: ' Grammatikpunkte',
  defaultSort: 'category',
  batchSize: 0,
  dom: {
    controls: 'grammar-controls',
    grid: 'grammar-grid',
    noResults: 'grammar-no-results',
    search: 'grammar-search-input',
    clearSearch: 'grammar-clear-search',
    sort: 'grammar-sort-select',
    overlay: 'grammar-detail-overlay',
    closeBtn: 'grammar-close-detail',
    prevBtn: 'prev-grammar',
    nextBtn: 'next-grammar'
  },
  filterGroups: [
    { stateKey: 'level', selector: '.filter-btn.grammar-level', dataAttr: 'data-glevel', defaultValue: 'all' },
    { stateKey: 'category', selector: '.filter-btn.grammar-cat', dataAttr: 'data-category', defaultValue: 'all' }
  ],
  filterFn: function (item, query, filters) {
    if (filters.level !== 'all' && item.level !== filters.level) return false;
    if (filters.category !== 'all' && item.category !== filters.category) return false;
    if (!query) return true;
    if (item.pattern.toLowerCase().indexOf(query) !== -1) return true;
    if (item.meaning && item.meaning.toLowerCase().indexOf(query) !== -1) return true;
    return false;
  },
  sortFn: function (items, sortKey) {
    var catOrder = { 'Partikel': 0, 'Verben': 1, 'Adjektive': 2, 'Satzstrukturen': 3 };
    items.sort(function (a, b) {
      if (sortKey === 'level') {
        var la = LEVEL_ORDER[a.level] !== undefined ? LEVEL_ORDER[a.level] : 99;
        var lb = LEVEL_ORDER[b.level] !== undefined ? LEVEL_ORDER[b.level] : 99;
        return la - lb;
      }
      if (sortKey === 'alpha') return a.pattern.localeCompare(b.pattern);
      // Default: category
      var ca = catOrder[a.category] !== undefined ? catOrder[a.category] : 99;
      var cb = catOrder[b.category] !== undefined ? catOrder[b.category] : 99;
      return ca - cb || a.pattern.localeCompare(b.pattern);
    });
  },
  createCard: function (item, index, section) {
    var catClass = 'cat-' + (item.category || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
    var card = document.createElement('div');
    card.className = 'grammar-card';
    card.innerHTML =
      '<div class="grammar-card-header">' +
        '<span class="grammar-pattern">' + item.pattern + '</span>' +
        '<span class="card-level ' + item.level + '">' + (item.level || '').replace('HSK', '') + '</span>' +
      '</div>' +
      '<div class="grammar-card-meaning">' + (item.meaning || '') + '</div>' +
      '<span class="grammar-category-badge ' + catClass + '">' + (item.category || '') + '</span>';
    card.addEventListener('click', function () { section.openDetail(index); });
    return card;
  },
  openDetail: function (item, dom) {
    var patternEl = document.getElementById('grammar-detail-pattern');
    patternEl.textContent = item.pattern;
    patternEl.style.cursor = 'pointer';
    patternEl.onclick = function () { speakText(item.pattern); };

    // Add speaker button
    var grammarHeader = patternEl.parentElement;
    var oldSpeak = grammarHeader.querySelector('.btn-speak');
    if (oldSpeak) oldSpeak.remove();
    grammarHeader.insertBefore(createSpeakBtn(item.pattern, false), patternEl.nextSibling);

    var badge = document.getElementById('grammar-detail-level');
    badge.textContent = item.level;
    badge.className = 'detail-jlpt-badge ' + item.level;
    var catClass = 'cat-' + (item.category || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
    var catBadge = document.getElementById('grammar-detail-category');
    catBadge.textContent = item.category;
    catBadge.className = 'grammar-category-badge ' + catClass;
    document.getElementById('grammar-detail-meaning').textContent = item.meaning || '';
    document.getElementById('grammar-detail-formation').textContent = item.formation || '';
    document.getElementById('grammar-detail-explanation').textContent = item.explanation || '';
    renderExamplesOrEmpty('grammar-detail-examples', item.examples);

    var notesSection = document.getElementById('grammar-detail-notes-section');
    var notesEl = document.getElementById('grammar-detail-notes');
    if (item.notes) {
      notesEl.textContent = item.notes;
      notesSection.classList.remove('hidden');
    } else {
      notesSection.classList.add('hidden');
    }

    var relatedSection = document.getElementById('grammar-detail-related-section');
    var relatedEl = document.getElementById('grammar-detail-related');
    if (item.relatedPatterns && item.relatedPatterns.length > 0) {
      relatedEl.innerHTML = item.relatedPatterns.map(function (r) {
        return '<span class="related-tag">' + r + '</span>';
      }).join('');
      relatedSection.classList.remove('hidden');
    } else {
      relatedSection.classList.add('hidden');
    }
  }
};

// ========================================
// VOCAB SECTION
// ========================================
SECTION_CONFIGS['vocab'] = {
  name: 'vocab',
  countLabel: ' Vokabeln',
  defaultSort: 'level',
  batchSize: 80,
  dom: {
    controls: 'vocab-controls',
    grid: 'vocab-grid',
    noResults: 'vocab-no-results',
    search: 'vocab-search-input',
    clearSearch: 'vocab-clear-search',
    sort: 'vocab-sort-select',
    overlay: 'vocab-detail-overlay',
    closeBtn: 'vocab-close-detail',
    prevBtn: 'prev-vocab',
    nextBtn: 'next-vocab'
  },
  filterGroups: [
    { stateKey: 'level', selector: '.filter-btn.vocab-level', dataAttr: 'data-vlevel', defaultValue: 'all' },
    { stateKey: 'type', selector: '.filter-btn.vocab-type', dataAttr: 'data-vtype', defaultValue: 'all' }
  ],
  filterFn: function (item, query, filters) {
    if (filters.level !== 'all' && item.level !== filters.level) return false;
    if (filters.type !== 'all' && item.type !== filters.type) return false;
    if (!query) return true;
    if (item.word && item.word.indexOf(query) !== -1) return true;
    if (item.pinyin && item.pinyin.toLowerCase().indexOf(query) !== -1) return true;
    if (item.meaning && item.meaning.toLowerCase().indexOf(query) !== -1) return true;
    return false;
  },
  sortFn: function (items, sortKey) {
    var typeOrder = { 'Nomen': 0, 'Verb': 1, 'Adjektiv': 2, 'Adverb': 3, 'Ausdruck': 4, 'Partikel': 5, 'Pronomen': 6, 'Zahlwort': 7 };
    items.sort(function (a, b) {
      if (sortKey === 'type') {
        var ta = typeOrder[a.type] !== undefined ? typeOrder[a.type] : 99;
        var tb = typeOrder[b.type] !== undefined ? typeOrder[b.type] : 99;
        return ta - tb;
      }
      if (sortKey === 'category') return (a.category || '').localeCompare(b.category || '');
      if (sortKey === 'alpha') return (a.pinyin || '').localeCompare(b.pinyin || '');
      // Default: level
      var la = LEVEL_ORDER[a.level] !== undefined ? LEVEL_ORDER[a.level] : 99;
      var lb = LEVEL_ORDER[b.level] !== undefined ? LEVEL_ORDER[b.level] : 99;
      return la - lb;
    });
  },
  createCard: function (item, index, section) {
    var typeClass = 'vt-' + (item.type || '').toLowerCase();
    var card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML =
      '<div class="vocab-card-top">' +
        '<span class="vocab-word">' + (item.word || '') + '</span>' +
        '<span class="card-level ' + item.level + '">' + (item.level || '').replace('HSK', '') + '</span>' +
      '</div>' +
      '<div class="vocab-reading">' + (item.pinyin || '') + '</div>' +
      '<div class="vocab-meaning">' + (item.meaning || '') + '</div>' +
      '<span class="vocab-type-badge ' + typeClass + '">' + (item.type || '') + '</span>';
    card.addEventListener('click', function () { section.openDetail(index); });
    return card;
  },
  openDetail: function (item, dom) {
    var wordEl = document.getElementById('vocab-detail-word');
    wordEl.textContent = item.word;
    wordEl.style.cursor = 'pointer';
    wordEl.onclick = function () { speakText(item.word); };

    // Add speaker button to header
    var vocabHeader = wordEl.parentElement;
    var oldSpeak = vocabHeader.querySelector('.btn-speak');
    if (oldSpeak) oldSpeak.remove();
    vocabHeader.insertBefore(createSpeakBtn(item.word, false), wordEl.nextSibling);

    var badge = document.getElementById('vocab-detail-level');
    badge.textContent = item.level;
    badge.className = 'detail-jlpt-badge ' + item.level;

    var typeClass = 'vt-' + (item.type || '').toLowerCase();
    var typeBadge = document.getElementById('vocab-detail-type');
    typeBadge.textContent = item.type;
    typeBadge.className = 'vocab-type-badge ' + typeClass;

    document.getElementById('vocab-detail-pinyin').textContent = item.pinyin || '';
    document.getElementById('vocab-detail-meaning').textContent = item.meaning || '';

    var catLine = document.getElementById('vocab-detail-category-line');
    catLine.textContent = item.category ? 'Kategorie: ' + item.category : '';

    renderExamplesOrEmpty('vocab-detail-examples', item.examples);

    // Contained hanzi
    var hanziSection = document.getElementById('vocab-detail-hanzi-section');
    var hanziLinks = document.getElementById('vocab-detail-hanzi-links');
    var lookup = getHanziByChar();
    var chars = (item.word || '').split('').filter(function (ch) { return lookup[ch]; });
    if (chars.length > 0) {
      hanziLinks.innerHTML = chars.map(function (ch) {
        var hz = lookup[ch];
        return '<span class="component-tag clickable" data-hanzi="' + ch + '">' +
          ch + ' <small>' + hz.meanings[0] + '</small></span>';
      }).join('');
      hanziLinks.querySelectorAll('.component-tag.clickable').forEach(function (tag) {
        tag.addEventListener('click', function () {
          var hzChar = tag.getAttribute('data-hanzi');
          if (window.app) {
            window.app.sections.vocab.closeDetail();
            window.app.switchTab('hanzi');
            var hzSec = window.app.sections.hanzi;
            hzSec.dom.search.value = hzChar;
            hzSec.applyFilters();
            if (hzSec.filteredItems.length > 0) hzSec.openDetail(0);
          }
        });
      });
      hanziSection.classList.remove('hidden');
    } else {
      hanziSection.classList.add('hidden');
    }
  }
};

// ========================================
// ONOMATOPOEIA SECTION
// ========================================
SECTION_CONFIGS['onomatopoeia'] = {
  name: 'onomatopoeia',
  countLabel: ' Lautmalereien',
  defaultSort: 'category',
  batchSize: 0,
  dom: {
    controls: 'ono-controls',
    grid: 'ono-grid',
    noResults: 'ono-no-results',
    search: 'ono-search-input',
    clearSearch: 'ono-clear-search',
    sort: 'ono-sort-select',
    overlay: 'ono-detail-overlay',
    closeBtn: 'ono-close-detail',
    prevBtn: 'prev-ono',
    nextBtn: 'next-ono'
  },
  filterGroups: [
    { stateKey: 'category', selector: '.filter-btn.ono-cat', dataAttr: 'data-ocat', defaultValue: 'all' },
    { stateKey: 'pattern', selector: '.filter-btn.ono-pat', dataAttr: 'data-opat', defaultValue: 'all' }
  ],
  filterFn: function (item, query, filters) {
    if (filters.category !== 'all' && item.type !== filters.category) return false;
    if (filters.pattern !== 'all' && item.pattern !== filters.pattern) return false;
    if (!query) return true;
    if (item.word && item.word.indexOf(query) !== -1) return true;
    if (item.pinyin && item.pinyin.toLowerCase().indexOf(query) !== -1) return true;
    if (item.meaning && item.meaning.toLowerCase().indexOf(query) !== -1) return true;
    return false;
  },
  sortFn: function (items, sortKey) {
    var catOrder = { 'Geraeusche': 0, 'Zustaende': 1, 'Gefuehle': 2, 'Bewegung': 3 };
    items.sort(function (a, b) {
      if (sortKey === 'alpha') return (a.meaning || '').localeCompare(b.meaning || '');
      if (sortKey === 'pattern') return (a.pattern || '').localeCompare(b.pattern || '');
      var ca = catOrder[a.type] !== undefined ? catOrder[a.type] : 99;
      var cb = catOrder[b.type] !== undefined ? catOrder[b.type] : 99;
      return ca - cb;
    });
  },
  createCard: function (item, index, section) {
    var catClass = 'oc-' + (item.type || '').toLowerCase();
    var card = document.createElement('div');
    card.className = 'ono-card';
    card.innerHTML =
      '<div class="ono-card-top">' +
        '<span class="ono-word">' + item.word + '</span>' +
        '<span class="ono-category-badge ' + catClass + '">' + (item.type || '') + '</span>' +
      '</div>' +
      '<div class="ono-reading">' + (item.pinyin || '') + '</div>' +
      '<div class="ono-meaning">' + (item.meaning || '') + '</div>' +
      '<span class="ono-pattern-badge">' + (item.pattern || '') + '</span>';
    card.addEventListener('click', function () { section.openDetail(index); });
    return card;
  },
  openDetail: function (item, dom) {
    var wordEl = document.getElementById('ono-detail-word');
    wordEl.textContent = item.word;
    wordEl.style.cursor = 'pointer';
    wordEl.onclick = function () { speakText(item.word); };

    // Add speaker button
    var onoHeader = wordEl.parentElement;
    var oldSpeak = onoHeader.querySelector('.btn-speak');
    if (oldSpeak) oldSpeak.remove();
    onoHeader.insertBefore(createSpeakBtn(item.word, false), wordEl.nextSibling);

    var catClass = 'oc-' + (item.type || '').toLowerCase();
    var catBadge = document.getElementById('ono-detail-category');
    catBadge.textContent = item.type || '';
    catBadge.className = 'ono-category-badge ' + catClass;

    document.getElementById('ono-detail-pattern').textContent = item.pattern || '';
    document.getElementById('ono-detail-pinyin').textContent = item.pinyin || '';
    document.getElementById('ono-detail-meaning').textContent = item.meaning || '';
    document.getElementById('ono-detail-usage-line').textContent = item.usage || '';
    document.getElementById('ono-detail-explanation').textContent = item.explanation || '';

    renderExamplesOrEmpty('ono-detail-examples', item.examples);

    var relatedSection = document.getElementById('ono-detail-related-section');
    var relatedEl = document.getElementById('ono-detail-related');
    if (item.related && item.related.length > 0) {
      relatedEl.innerHTML = item.related.map(function (r) {
        return '<span class="related-tag">' + r + '</span>';
      }).join('');
      relatedSection.classList.remove('hidden');
    } else {
      relatedSection.classList.add('hidden');
    }

    var notesSection = document.getElementById('ono-detail-notes-section');
    var notesEl = document.getElementById('ono-detail-notes');
    if (item.notes) {
      notesEl.textContent = item.notes;
      notesSection.classList.remove('hidden');
    } else {
      notesSection.classList.add('hidden');
    }
  }
};

// ========================================
// MEASURE WORDS (Zählwörter) SECTION
// ========================================
SECTION_CONFIGS['measurewords'] = {
  name: 'measurewords',
  countLabel: ' Zählwörter',
  defaultSort: 'category',
  batchSize: 0,
  dom: {
    controls: 'measurewords-controls',
    grid: 'mw-grid',
    noResults: 'mw-no-results',
    search: 'mw-search-input',
    clearSearch: 'mw-clear-search',
    overlay: 'mw-detail-overlay',
    closeBtn: 'mw-close-detail',
    prevBtn: 'prev-mw',
    nextBtn: 'next-mw'
  },
  filterGroups: [
    { stateKey: 'category', selector: '.filter-btn.mw-cat', dataAttr: 'data-mwcat', defaultValue: 'all' }
  ],
  onTabActivate: function (section) {
    if (window.app) window.app.renderBasicNumbers();
  },
  filterFn: function (item, query, filters) {
    if (filters.category !== 'all' && item.category !== filters.category) return false;
    if (!query) return true;
    if (item.classifier && item.classifier.indexOf(query) !== -1) return true;
    if (item.pinyin && item.pinyin.toLowerCase().indexOf(query) !== -1) return true;
    if (item.meaning && item.meaning.toLowerCase().indexOf(query) !== -1) return true;
    return false;
  },
  sortFn: function (items) {
    var catOrder = { 'Allgemein': 0, 'Menschen': 1, 'Tiere': 2, 'Objekte': 3, 'Essen': 4, 'Natur': 5, 'Transport': 6, 'Zeit': 7, 'Abstrakt': 8 };
    items.sort(function (a, b) {
      var ca = catOrder[a.category] !== undefined ? catOrder[a.category] : 99;
      var cb = catOrder[b.category] !== undefined ? catOrder[b.category] : 99;
      return ca - cb;
    });
  },
  createCard: function (item, index, section) {
    var catClass = 'cc-' + (item.category || '').toLowerCase();
    var card = document.createElement('div');
    card.className = 'counter-card';
    card.innerHTML =
      '<div class="counter-card-top">' +
        '<span class="counter-char">' + item.classifier + '</span>' +
        '<span class="counter-category-badge ' + catClass + '">' + (item.category || '') + '</span>' +
      '</div>' +
      '<div class="counter-reading">' + (item.pinyin || '') + '</div>' +
      '<div class="counter-meaning">' + (item.meaning || '') + '</div>';
    card.addEventListener('click', function () { section.openDetail(index); });
    return card;
  },
  openDetail: function (item, dom) {
    var charEl = document.getElementById('mw-detail-char');
    charEl.textContent = item.classifier;
    charEl.style.cursor = 'pointer';
    charEl.onclick = function () { speakText(item.classifier); };

    // Add speaker button
    var mwHeader = charEl.parentElement;
    var oldSpeak = mwHeader.querySelector('.btn-speak');
    if (oldSpeak) oldSpeak.remove();
    mwHeader.insertBefore(createSpeakBtn(item.classifier, false), charEl.nextSibling);

    var catClass = 'cc-' + (item.category || '').toLowerCase();
    var catBadge = document.getElementById('mw-detail-cat');
    catBadge.textContent = item.category || '';
    catBadge.className = 'counter-category-badge ' + catClass;

    document.getElementById('mw-detail-pinyin').textContent = item.pinyin || '';
    document.getElementById('mw-detail-meaning').textContent = item.meaning || '';
    document.getElementById('mw-detail-usage').textContent = item.usage || '';

    // Question word
    var questionEl = document.getElementById('mw-detail-question');
    questionEl.textContent = item.questionWord || '几' + item.classifier;

    // Counting table
    var tableWrap = document.getElementById('mw-detail-table');
    if (item.table && item.table.length > 0) {
      var html = '<table class="counter-detail-table"><thead><tr><th>Zahl</th><th>Chinesisch</th><th>Pinyin</th></tr></thead><tbody>';
      item.table.forEach(function (row) {
        html += '<tr><td><strong>' + row.number + '</strong></td><td>' + row.chinese + '</td><td>' + (row.pinyin || '') + '</td></tr>';
      });
      html += '</tbody></table>';
      tableWrap.innerHTML = html;
    } else {
      tableWrap.innerHTML = '<p class="no-data">Keine Zähltabelle verfügbar.</p>';
    }

    // Special forms
    var specialSection = document.getElementById('mw-detail-special-section');
    var specialEl = document.getElementById('mw-detail-special');
    if (item.specialForms && item.specialForms.length > 0) {
      specialEl.innerHTML = item.specialForms.map(function (s) {
        return '<div class="special-form"><strong>' + s.form + '</strong> — ' + s.explanation + '</div>';
      }).join('');
      specialSection.classList.remove('hidden');
    } else {
      specialSection.classList.add('hidden');
    }

    renderExamplesOrEmpty('mw-detail-examples', item.examples);

    var notesSection = document.getElementById('mw-detail-notes-section');
    var notesEl = document.getElementById('mw-detail-notes');
    if (item.notes) {
      notesEl.textContent = item.notes;
      notesSection.classList.remove('hidden');
    } else {
      notesSection.classList.add('hidden');
    }
  }
};

// ========================================
// RADICALS SECTION
// ========================================
SECTION_CONFIGS['radicals'] = {
  name: 'radicals',
  countLabel: ' Radikale',
  defaultSort: 'number',
  batchSize: 0,
  dom: {
    controls: 'radicals-controls',
    grid: 'radicals-grid',
    noResults: 'radicals-no-results',
    search: 'radicals-search-input',
    clearSearch: 'radicals-clear-search',
    overlay: 'radical-detail-overlay',
    closeBtn: 'radical-close-detail',
    prevBtn: 'prev-radical',
    nextBtn: 'next-radical'
  },
  filterGroups: [
    { stateKey: 'strokes', selector: '.filter-btn.radical-stroke', dataAttr: 'data-rstrokes', defaultValue: 'all' }
  ],
  filterFn: function (item, query, filters) {
    if (filters.strokes !== 'all') {
      var s = parseInt(filters.strokes);
      if (s === 9) { if (item.strokes < 9) return false; }
      else { if (item.strokes !== s) return false; }
    }
    if (!query) return true;
    if (item.radical.indexOf(query) !== -1) return true;
    if (item.meaning && item.meaning.toLowerCase().indexOf(query) !== -1) return true;
    if (item.pinyin && item.pinyin.toLowerCase().indexOf(query) !== -1) return true;
    return false;
  },
  sortFn: function (items) {
    items.sort(function (a, b) { return (a.number || 0) - (b.number || 0); });
  },
  createCard: function (item, index, section) {
    var card = document.createElement('div');
    card.className = 'radical-card';
    card.innerHTML =
      '<span class="radical-number-badge">#' + item.number + '</span>' +
      '<span class="radical-char">' + item.radical + '</span>' +
      (item.variants && item.variants.length > 0 ? '<span class="radical-variant">' + item.variants.join(' ') + '</span>' : '') +
      '<span class="radical-meaning">' + item.meaning + '</span>' +
      '<span class="radical-strokes">' + item.strokes + ' Striche</span>';
    card.addEventListener('click', function () { section.openDetail(index); });
    return card;
  },
  openDetail: function (item, dom) {
    document.getElementById('radical-detail-char').textContent = item.radical;
    document.getElementById('radical-detail-number').textContent = '#' + item.number;
    document.getElementById('radical-detail-meaning').textContent = item.meaning;
    document.getElementById('radical-detail-pinyin').textContent = item.pinyin || '';
    document.getElementById('radical-detail-strokes').textContent = item.strokes + ' Striche';

    var variantsEl = document.getElementById('radical-detail-variants');
    if (item.variants && item.variants.length > 0) {
      variantsEl.innerHTML = '<strong>Varianten:</strong> ' + item.variants.join(', ');
      variantsEl.classList.remove('hidden');
    } else {
      variantsEl.innerHTML = '';
    }

    document.getElementById('radical-detail-explanation').textContent = item.explanation || '';

    // Related hanzi
    var hanziList = document.getElementById('radical-detail-hanzi-list');
    var related = item.relatedHanzi || [];
    if (related.length > 0) {
      hanziList.innerHTML = related.map(function (ch) {
        var hz = getHanziByChar()[ch];
        var label = hz ? ch + ' <small>' + hz.meanings[0] + '</small>' : ch;
        return '<span class="component-tag clickable" data-hanzi="' + ch + '">' + label + '</span>';
      }).join('');
      hanziList.querySelectorAll('.component-tag.clickable').forEach(function (tag) {
        tag.addEventListener('click', function () {
          var hzChar = tag.getAttribute('data-hanzi');
          if (window.app) {
            window.app.sections.radicals.closeDetail();
            window.app.switchTab('hanzi');
            var hzSec = window.app.sections.hanzi;
            hzSec.dom.search.value = hzChar;
            hzSec.applyFilters();
            if (hzSec.filteredItems.length > 0) hzSec.openDetail(0);
          }
        });
      });
    } else {
      hanziList.innerHTML = '<p class="no-data">Keine Hanzi-Daten verfügbar.</p>';
    }
  }
};
