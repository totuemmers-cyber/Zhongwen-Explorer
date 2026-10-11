/* Guided reading and listening (ported from Nihongo Explorer). Content and audio are loaded only when requested. */
(function () {
  'use strict';
  var profile = window.LANG_PROFILE;
  var config = profile.comprehension;
  var store = window.APP_STORAGE;
  var LEVELS = profile.levels;
  var STORAGE_KEY = profile.storagePrefix + 'comprehension-v1';
  // Pinyin stands above every character on these levels; above them it is a help.
  var PINYIN_LEVELS = LEVELS.slice(0, 2);
  var units, pending, active = null, host, generation = 0, speaking = false;
  var views = { reading: { level: LEVELS[0], selected: null, scroll: 0 }, listening: { level: LEVELS[0], selected: null, scroll: 0 } };
  var progress = store.local.getJSON(STORAGE_KEY, {}, function (value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  });
  function persist() {
    if (!store.local.setJSON(STORAGE_KEY, progress)) {
      var status = host && host.querySelector('.comprehension-storage');
      if (status) status.textContent = 'Speichern ist nicht verfügbar. Dein Fortschritt bleibt nur bis zum Neuladen dieser Seite erhalten.';
    }
  }
  function el(tag, text, cls) { var n = document.createElement(tag); if (text != null) n.textContent = text; if (cls) n.className = cls; return n; }
  function button(text, fn) { var b = el('button', text); b.type = 'button'; b.onclick = fn; return b; }
  function zh(text, tag) { var n = el(tag || 'span', text); n.lang = 'zh-CN'; return n; }
  function levelLabel(level) { return level.replace(/^HSK/, 'HSK ').replace('-', '–'); }
  // Each word of the pinyin (xuéshēng, Xī'ān) as one ruby over its characters, so syllables never run into each other;
  // text whose pinyin does not align stays plain (the audit reports it).
  function chinese(block) {
    var p = zh(null, 'p'); p.className = 'comprehension-chinese';
    var parts = window.Pinyin.align(block.text, block.pinyin);
    if (!parts) { p.textContent = block.text; return p; }
    var source = block.pinyin, lower = source.toLowerCase(), pos = 0, words = [], current = null;
    parts.forEach(function (part) {
      if (!part.pinyin) { current = null; words.push({ text: part.text }); return; }
      var at = lower.indexOf(part.pinyin.toLowerCase(), pos);
      if (at < 0) at = pos;
      // A space, punctuation or hyphen before the syllable starts a new word; an apostrophe does not.
      if (!current || /[^'’]/.test(source.slice(pos, at))) { current = { text: '', from: at }; words.push(current); }
      current.text += part.text;
      current.to = at + part.pinyin.length;
      pos = current.to;
    });
    words.forEach(function (word) {
      if (word.from === undefined) { p.appendChild(document.createTextNode(word.text)); return; }
      var ruby = el('ruby', word.text), rt = el('rt', source.slice(word.from, word.to)); rt.lang = 'zh-Latn-pinyin';
      ruby.appendChild(rt); p.appendChild(ruby);
    });
    return p;
  }
  function counts(skill) {
    if (!units) return null;
    var result = { total: 0, byLevel: {} };
    LEVELS.forEach(function (level) { result.byLevel[level] = 0; });
    units.forEach(function (u) { if (u.skill === skill && u.level in result.byLevel) { result.total++; result.byLevel[u.level]++; } });
    return result;
  }
  // Until the bundle is loaded, the counts written into lang-profile.js by the build decide.
  function showTabs() {
    ['reading', 'listening'].forEach(function (skill) {
      var tab = document.querySelector('.tab-btn[data-tab="' + skill + '"]');
      if (tab) tab.hidden = !(units ? counts(skill).total : config[skill]);
    });
  }
  function accept() {
    var data = window.COMPREHENSION_DATA;
    if (!data || !Array.isArray(data.units)) return false;
    units = data.units; showTabs(); return true;
  }
  function load() {
    if (units) return Promise.resolve(units);
    if (pending) return pending;
    pending = new Promise(function (resolve, reject) {
      if (accept()) { resolve(units); return; }
      var script = document.createElement('script'); var version = window.LANG_PROFILE && window.LANG_PROFILE.assetVersion; script.src = config.data + (version ? '?v=' + version : '');
      script.onload = function () { if (accept()) resolve(units); else { pending = null; script.remove(); reject(new Error('Missing units')); } };
      script.onerror = function () { pending = null; script.remove(); reject(new Error('Content load failed')); };
      document.head.appendChild(script);
    }); return pending;
  }
  function silence() {
    if (speaking && window.app.cancelSpeech) window.app.cancelSpeech();
    speaking = false;
  }
  function stop() { generation++; if (host) host.querySelectorAll('audio').forEach(function (a) { a.pause(); a.removeAttribute('src'); a.load(); }); silence(); active = null; }
  function attempt(u) {
    var p = progress[u.id];
    if (!p || typeof p !== 'object' || !p.answers || typeof p.answers !== 'object' || !p.hints || typeof p.hints !== 'object' || !Array.isArray(p.attempts)) p = progress[u.id] = { answers: {}, submitted: false, assisted: false, hints: {}, attempts: [] };
    p.attempts = p.attempts.filter(function (a) { return a && Number.isInteger(a.score) && a.score >= 0 && a.score <= u.questions.length && typeof a.assisted === 'boolean'; });
    u.questions.forEach(function (q) { if (!Number.isInteger(p.answers[q.id]) || p.answers[q.id] < 0 || p.answers[q.id] >= q.choices.length) delete p.answers[q.id]; });
    if (p.submitted && (!p.attempts.length || !u.questions.every(function (q) { return Number.isInteger(p.answers[q.id]); }))) p.submitted = false;
    return p;
  }
  function saveView() { window.app.workspace.save(); }
  function open(id) {
    var v = views[active]; saveView(); v.scroll = window.scrollY; v.selected = id;
    render(); window.app.workspace.commit(); window.scrollTo(0, 0); focusHeading();
  }
  function back() {
    var v = views[active], id = v.selected; saveView(); v.selected = null; render(); window.app.workspace.commit();
    window.scrollTo(0, v.scroll); var b = host.querySelector('[data-unit="' + id + '"]'); if (b) b.focus({ preventScroll: true });
  }
  function focusHeading() { var h = host.querySelector('h2'); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); } }
  async function activate(skill, state, id) {
    stop(); active = skill; host = document.getElementById(skill + '-tab'); var token = generation;
    if (state) ['reading', 'listening'].forEach(function (key) {
      if (state[key]) views[key] = { level: LEVELS.indexOf(state[key].level) !== -1 ? state[key].level : LEVELS[0], selected: state[key].selected || null, scroll: Number(state[key].scroll) || 0 };
    });
    if (id !== undefined) views[skill].selected = id || null;
    host.replaceChildren(el('p', 'Lerneinheiten werden geladen …', 'loading'));
    try { await load(); if (token !== generation || active !== skill) return; render(); }
    catch (e) {
      if (token !== generation) return;
      host.replaceChildren(el('p', 'Die Lerneinheiten konnten nicht geladen werden.'), button('Erneut versuchen', function () { activate(skill).catch(function () {}); }));
      throw e;
    }
  }
  function render() {
    if (!active || !units) return;
    host.querySelectorAll('audio').forEach(function (a) { a.pause(); a.removeAttribute('src'); a.load(); });
    silence();
    host.replaceChildren(); var storageStatus = el('p', '', 'comprehension-storage'); storageStatus.setAttribute('role', 'status'); host.appendChild(storageStatus);
    var v = views[active], u = units.find(function (entry) { return entry.skill === active && entry.id === v.selected; });
    if (v.selected && !u) { host.appendChild(el('p', 'Diese Einheit wurde nicht gefunden. Wähle eine Einheit aus der Liste.', 'route-message')); v.selected = null; }
    if (u) { v.level = u.level; renderUnit(u); } else renderList();
    window.app.updateCount();
  }
  function renderList() {
    var skill = active, v = views[skill];
    var group = units.filter(function (u) { return u.skill === skill && u.level === v.level; });
    host.appendChild(el('h2', skill === 'reading' ? 'Schritt für Schritt lesen' : 'Schritt für Schritt hören'));
    host.appendChild(el('p', group.length + ' Einheiten auf Niveau ' + levelLabel(v.level) + ': von gezielter Orientierung bis zum selbstständigen Verstehen.'));
    var filters = el('div', null, 'level-filters comprehension-levels'); filters.setAttribute('role', 'group'); filters.setAttribute('aria-label', 'HSK-Niveau');
    LEVELS.forEach(function (level) {
      var b = button(levelLabel(level), function () { v.level = level; v.scroll = 0; render(); saveView(); }); b.className = 'filter-btn';
      b.dataset.level = level; b.setAttribute('aria-pressed', String(level === v.level)); filters.appendChild(b);
    }); host.appendChild(filters);
    if (!group.length) { host.appendChild(el('p', 'Für dieses Niveau gibt es noch keine Einheiten.', 'comprehension-meta')); return; }
    var list = el('ol', null, 'comprehension-list');
    group.forEach(function (u) {
      var li = el('li', null, 'comprehension-card');
      li.appendChild(el('span', levelLabel(u.level) + ' · ' + u.order + '/' + group.length + ' · ca. ' + u.minutes + ' Min.' + (u.textType ? ' · ' + u.textType : ''), 'comprehension-meta'));
      var b = button(u.title, function () { open(u.id); }); b.dataset.unit = u.id; li.appendChild(b);
      li.appendChild(el('p', u.objective));
      list.appendChild(li);
    }); host.appendChild(list);
  }
  // Sentences as separate utterances: long single utterances break off in some browsers.
  function sentences(u) {
    var out = [];
    u.passages.forEach(function (block) { out.push.apply(out, block.text.match(/[^。！？!?\n]+[。！？!?”」]*/g) || []); });
    return out;
  }
  function browserVoice(article, u, markHint) {
    article.appendChild(el('p', 'Vorläufige Browser-Stimme · Die Aufnahme folgt. Die Aussprache hängt von deinem Browser ab.', 'comprehension-meta comprehension-voice'));
    if (!('speechSynthesis' in window) || !window.app.speakCN || (window.app.hasChineseVoice && !window.app.hasChineseVoice())) {
      article.appendChild(el('p', 'Dein Browser bietet keine chinesische Stimme an. Nutze das Transkript.', 'route-message'));
      return;
    }
    var controls = el('div', null, 'comprehension-supports'), rate = 1;
    controls.appendChild(button('Abspielen', function () { speaking = true; window.app.speakCN(sentences(u), { rate: rate }); }));
    controls.appendChild(button('Stopp', silence));
    var speedLabel = el('label', 'Tempo '), speed = document.createElement('select'); speed.setAttribute('aria-label', 'Sprechgeschwindigkeit');
    [1, 0.8].forEach(function (value) { var o = el('option', value + '×'); o.value = value; speed.appendChild(o); });
    speed.onchange = function () { rate = Number(speed.value); if (rate < 1) markHint('slow'); }; speedLabel.appendChild(speed); controls.appendChild(speedLabel);
    article.appendChild(controls);
  }
  function recording(article, u, markHint) {
    article.appendChild(el('p', 'Chinesisches Audio · ohne automatischen Start', 'comprehension-meta'));
    var audio = document.createElement('audio'); audio.controls = true; audio.preload = 'none'; audio.src = u.audio.src + '?v=' + encodeURIComponent(u.audio.revision || '1'); audio.setAttribute('aria-label', u.title + ' anhören'); article.appendChild(audio);
    var controls = el('div', null, 'comprehension-supports');
    var err = el('div', null, 'route-message'); err.hidden = true; err.setAttribute('role', 'alert');
    function failed() { err.hidden = false; }
    function play() { var promise = audio.play(); if (promise) promise.catch(failed); }
    controls.appendChild(button('Abspielen / Fortsetzen', play)); controls.appendChild(button('Pause', function () { audio.pause(); }));
    controls.appendChild(button('Von vorn abspielen', function () { audio.currentTime = 0; play(); }));
    var speedLabel = el('label', 'Tempo '), speed = document.createElement('select'); speed.setAttribute('aria-label', 'Wiedergabegeschwindigkeit');
    [1, 0.8].forEach(function (rate) { var o = el('option', rate + '×'); o.value = rate; speed.appendChild(o); });
    speed.onchange = function () { audio.playbackRate = Number(speed.value); if (Number(speed.value) < 1) markHint('slow'); }; speedLabel.appendChild(speed); controls.appendChild(speedLabel);
    audio.addEventListener('ratechange', function () { if (audio.playbackRate < 1) markHint('slow'); }); audio.addEventListener('error', failed);
    err.appendChild(el('p', 'Audio konnte nicht abgespielt werden.'));
    err.appendChild(button('Audio erneut laden', function () { err.hidden = true; audio.load(); play(); })); article.append(controls, err);
  }
  function renderUnit(u) {
    var p = attempt(u); persist();
    host.appendChild(button('← Zurück zu ' + (active === 'reading' ? 'Lesen' : 'Hören'), back));
    var article = el('article', null, 'comprehension-unit'); host.appendChild(article);
    article.appendChild(el('p', levelLabel(u.level) + ' · Einheit ' + u.order + ' · ca. ' + u.minutes + ' Min.' + (u.textType ? ' · ' + u.textType : ''), 'comprehension-meta'));
    article.appendChild(el('h2', u.title)); article.appendChild(el('p', 'Lernziel: ' + u.objective));
    if (u.task || u.topic) {
      var context = el('p', null, 'comprehension-meta');
      if (u.task) context.append('HSK-Aufgabe ' + u.task.no + ': ', zh(u.task.title));
      if (u.topic) context.append(u.task ? ' · Thema: ' : 'Thema: ', zh(u.topic.split('›').join(' › ')));
      article.appendChild(context);
    }
    article.appendChild(el('p', u.introduction));
    var aidStatus = el('p', p.assisted ? 'Dieser Versuch: mit Hilfe' : 'Dieser Versuch: ohne Hilfe', 'comprehension-meta'); aidStatus.setAttribute('role', 'status'); article.appendChild(aidStatus);
    function markHint(key) { if (!p.submitted) { p.assisted = true; p.hints[key] = true; persist(); aidStatus.textContent = 'Dieser Versuch: mit Hilfe'; } }
    var supports = el('div', null, 'comprehension-supports');
    var beginner = PINYIN_LEVELS.indexOf(u.level) !== -1;
    var pinyin = beginner || !!p.hints.pinyin;
    article.classList.toggle('without-pinyin', !pinyin);
    var pinyinButton = button('Pinyin anzeigen', function () {
      pinyin = !pinyin; article.classList.toggle('without-pinyin', !pinyin); pinyinButton.setAttribute('aria-pressed', String(pinyin));
      if (pinyin && !beginner) markHint('pinyin');
    });
    pinyinButton.setAttribute('aria-pressed', String(pinyin)); supports.appendChild(pinyinButton);
    function passages(target) {
      u.passages.forEach(function (block) {
        var row = el('div', null, 'comprehension-passage'); row.id = u.id + '-' + block.id;
        if (block.speaker || block.label) row.appendChild(el('span', block.label || block.speaker, 'comprehension-meta'));
        row.appendChild(chinese(block)); target.appendChild(row);
      });
    }
    function hint(label, key, fill) {
      var content = el('div', null, 'comprehension-hint'); content.hidden = !p.hints[key]; content.id = u.id + '-' + key; fill(content);
      var b = button(label, function () { content.hidden = !content.hidden; b.setAttribute('aria-expanded', String(!content.hidden)); if (!content.hidden) markHint(key); });
      b.setAttribute('aria-expanded', String(!content.hidden)); b.setAttribute('aria-controls', content.id); supports.appendChild(b); article.appendChild(content);
    }
    if (u.skill === 'listening') {
      if (u.audio) recording(article, u, markHint); else browserVoice(article, u, markHint);
      hint('Transkript anzeigen', 'transcript', passages);
    } else passages(article);
    article.appendChild(supports);
    hint('Deutsche Übersetzung', 'translation', function (target) { target.appendChild(el('p', u.translation)); });
    hint('Wortschatzhilfe', 'glossary', function (target) {
      var dl = el('dl', null, 'comprehension-glossary');
      u.glossary.forEach(function (g) {
        var dt = el('dt'); dt.append(zh(g.word), ' ', el('span', g.pinyin, 'comprehension-pinyin'));
        var dd = el('dd', g.meaning);
        if (g.vocabId) {
          var link = button('Vokabel öffnen', function () { window.app.workspace.openRelated('vocab', function (item) { return item.id === g.vocabId; }); });
          link.className = 'btn-link'; link.setAttribute('aria-label', 'Vokabel ' + g.word + ' öffnen'); dd.append(' · ', link);
        }
        dl.append(dt, dd);
      }); target.appendChild(dl);
    });
    var form = document.createElement('form'); article.appendChild(form);
    u.questions.forEach(function (q, qi) {
      var field = el('fieldset', null, 'comprehension-question'); field.appendChild(el('legend', (qi + 1) + '. ' + q.prompt));
      var name = u.id + '-' + q.id;
      q.choices.forEach(function (c, ci) {
        var label = el('label', null, 'comprehension-choice'), input = document.createElement('input'); input.type = 'radio'; input.name = name; input.value = ci; input.required = true; input.checked = p.answers[q.id] === ci; input.disabled = p.submitted;
        input.onchange = function () { p.answers[q.id] = ci; persist(); }; label.append(input, el('span', c.text)); field.appendChild(label);
        if (p.submitted) field.appendChild(el('p', (ci === q.answer ? 'Richtig: ' : 'Nicht richtig: ') + c.explanation, 'comprehension-feedback'));
      });
      if (p.submitted) {
        var index = u.passages.findIndex(function (b) { return b.id === q.evidence; }), evidence = u.passages[index];
        if (evidence) { var proof = el('p', 'Beleg – Abschnitt ' + (index + 1) + ': „', 'comprehension-evidence'); proof.append(zh(evidence.text), '“'); field.appendChild(proof); }
      } form.appendChild(field);
    });
    if (!p.submitted) { var submit = el('button', 'Einheit auswerten', 'btn-gradient'); submit.type = 'submit'; form.appendChild(submit); }
    form.onsubmit = function (event) {
      event.preventDefault(); if (p.submitted || !u.questions.every(function (q) { return Number.isInteger(p.answers[q.id]); })) return;
      p.submitted = true; p.attempts.push({ score: u.questions.filter(function (q) { return p.answers[q.id] === q.answer; }).length, assisted: p.assisted, at: new Date().toISOString() }); persist(); render();
      var result = host.querySelector('.comprehension-result'); if (result) result.focus();
    };
    if (p.submitted) {
      var last = p.attempts[p.attempts.length - 1]; var result = el('p', last.score + ' von ' + u.questions.length + ' richtig · ' + (last.assisted ? 'mit Hilfe' : 'ohne Hilfe'), 'comprehension-result'); result.tabIndex = -1; result.setAttribute('role', 'status'); article.appendChild(result);
      article.appendChild(el('p', 'Lernhinweis: ' + u.note));
      article.appendChild(button('Neuer Versuch', function () { progress[u.id] = { answers: {}, submitted: false, assisted: false, hints: {}, attempts: p.attempts }; persist(); render(); focusHeading(); }));
    }
  }
  showTabs();
  window.Comprehension = { load: load, counts: counts, chinese: chinese, activate: activate, stop: stop, snapshot: function () { return JSON.parse(JSON.stringify(views)); }, route: function (skill) { return views[skill].selected ? '/' + encodeURIComponent(views[skill].selected) : ''; } };
})();
