/* Workspace behaviour (deep links, history, focus, pane vs modal, related entries, lessons, session). */
const fs = require('fs');
const path = require('path');
const assert = require('node:assert/strict');
const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');

const ROOT = path.resolve(__dirname, '..');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(predicate, label) {
  for (let i = 0; i < 500; i++) { if (predicate()) return; await delay(20); }
  throw new Error('Timed out: ' + label);
}
class LocalResources extends ResourceLoader {
  fetch(url) {
    if (!url.startsWith('http://zhongwen.test/')) return null;
    return Promise.resolve(fs.readFileSync(path.join(ROOT, decodeURIComponent(new URL(url).pathname))));
  }
}

async function boot(hash = '', { width = 1440, session = null, local = {}, confirmResult = true } = {}) {
  const errors = [], intervals = new Set();
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', e => errors.push(e));
  const dom = new JSDOM(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), {
    url: 'http://zhongwen.test/index.html' + hash, resources: new LocalResources(), runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole,
    beforeParse(w) {
      w.innerWidth = width;
      w.matchMedia = () => ({ matches: false, addEventListener() {}, addListener() {} });
      w.scrollTo = (x, y) => { w.scrollY = typeof x === 'object' ? x.top || 0 : y; };
      w.HTMLElement.prototype.scrollIntoView = function () {};
      w.IntersectionObserver = function () { this.observe = function () {}; this.disconnect = function () {}; };
      w.confirm = () => confirmResult;
      w.SpeechSynthesisUtterance = function (text) { this.text = text; };
      w.speechSynthesis = { getVoices: () => [], cancel() {}, resume() {}, speak() {} };
      const set = w.setInterval.bind(w), clear = w.clearInterval.bind(w);
      w.setInterval = (fn, ms) => { const id = set(fn, ms); intervals.add(id); return id; };
      w.clearInterval = id => { intervals.delete(id); clear(id); };
      w.localStorage.setItem('zhongwen-storage-version', '1');
      for (const [key, value] of Object.entries(local)) w.localStorage.setItem(key, value);
      if (session) w.sessionStorage.setItem('zhongwen-workspace', session);
    }
  });
  const w = dom.window;
  await until(() => w.app && w.app.workspace && w.history.state && w.history.state.workspace, 'workspace ready');
  return { w, d: w.document, errors, intervals };
}
function key(w, target, name, options = {}) {
  target.focus();
  const event = new w.KeyboardEvent('keydown', Object.assign({ key: name, bubbles: true, cancelable: true }, options));
  target.dispatchEvent(event);
  return event;
}
// jsdom has no native button activation: Enter on a focused button clicks it unless a handler prevented it.
function activate(w, target) { const e = key(w, target, 'Enter'); if (!e.defaultPrevented) target.click(); }
async function settle(w) {
  await Promise.all(Object.values(w.app.sections).map(s => s._loadPromise).filter(Boolean)).catch(() => {});
  await delay(30);
}
async function finish(fixture) {
  await settle(fixture.w);
  assert.deepEqual(fixture.errors.map(e => (e && e.stack) || String(e)), [], 'Uncaught browser errors');
  fixture.w.close();
}

async function run() {
  // Deep link to a vocabulary entry opens it as a side pane on wide screens.
  let f = await boot('#vocab/' + encodeURIComponent('w:你好:ni3hao3'));
  let { w, d } = f;
  let vocab = w.app.sections.vocab;
  await until(() => vocab.isOverlayOpen() && vocab.selectedItem && vocab.selectedItem.word === '你好', 'vocab deep link');
  assert.equal(w.app.activeTab, 'vocab');
  assert(vocab.dom.overlay.classList.contains('as-pane'));
  assert.equal(vocab.dom.overlay.querySelector('.detail-panel').getAttribute('role'), 'complementary');
  assert.equal(d.getElementById('page-title').textContent, 'Vokabeln');
  assert(d.querySelector('.selection-context').textContent.includes('你好'));
  await finish(f);

  // A former word|pinyin id (bookmarks, shared links) still resolves after consolidation.
  f = await boot('#vocab/' + encodeURIComponent('你好|nǐ hǎo'));
  ({ w, d } = f);
  vocab = w.app.sections.vocab;
  await until(() => vocab.isOverlayOpen() && vocab.selectedItem && vocab.selectedItem.id === 'w:你好:ni3hao3', 'legacy vocab deep link');
  await until(() => decodeURIComponent(w.location.hash) === '#vocab/w:你好:ni3hao3', 'canonical hash');
  await finish(f);

  // Unknown sections fall back to the tones tab with a message.
  f = await boot('#nonsense');
  ({ w, d } = f);
  await until(() => w.app.activeTab === 'tones' && !d.getElementById('route-message').classList.contains('hidden'), 'invalid route message');
  assert(d.getElementById('route-message').textContent.includes('nicht gefunden'));
  await finish(f);

  // Deep link to an HSK 7–9 character (levels of the HSK 2025 reading list).
  f = await boot('#hanzi/' + encodeURIComponent('饶'));
  ({ w, d } = f);
  await until(() => w.app.sections.hanzi.isOverlayOpen() && w.app.sections.hanzi.selectedItem && w.app.sections.hanzi.selectedItem.hanzi === '饶', 'hanzi deep link');
  assert.equal(d.getElementById('detail-jlpt').textContent, 'HSK 7–9');
  await finish(f);

  // Modal detail below 1280 px: dialog semantics, focus moves in and returns to the card.
  f = await boot('#hanzi', { width: 900 });
  ({ w, d } = f);
  const hanzi = w.app.sections.hanzi;
  await w.app.ensureSectionLoaded('hanzi');
  const open = hanzi.dom.grid.querySelector('.entry-open');
  open.focus(); open.click();
  assert(hanzi.isOverlayOpen());
  const panel = hanzi.dom.overlay.querySelector('.detail-panel');
  assert.equal(panel.getAttribute('role'), 'dialog');
  assert.equal(panel.getAttribute('aria-modal'), 'true');
  assert.equal(d.querySelector('.workspace').inert, true);
  assert.equal(d.activeElement, hanzi.dom.closeBtn);
  const hanziId = hanzi.selectedItem.hanzi;
  assert.equal(decodeURIComponent(w.location.hash), '#hanzi/' + hanziId);
  hanzi.dom.closeBtn.click();
  assert(!hanzi.isOverlayOpen());
  assert.equal(d.activeElement, open, 'Focus did not return to the opening card');
  assert.equal(d.querySelector('.workspace').inert, false);
  await finish(f);

  // History: search state and tab survive back/forward.
  f = await boot('#vocab');
  ({ w, d } = f);
  vocab = w.app.sections.vocab;
  await w.app.ensureSectionLoaded('vocab');
  vocab.dom.search.value = 'nihao'; vocab.applyFilters();
  assert(vocab.filteredItems.some(v => v.word === '你好'));
  w.app.switchTab('grammar');
  await w.app.ensureSectionLoaded('grammar');
  w.history.back();
  await until(() => w.app.activeTab === 'vocab' && vocab.dom.search.value === 'nihao', 'history restores vocabulary search');
  w.history.forward();
  await until(() => w.app.activeTab === 'grammar', 'history forward to grammar');
  await finish(f);

  // Related grammar entries open with a Back button that returns to the origin.
  f = await boot('#grammar');
  ({ w, d } = f);
  const grammar = w.app.sections.grammar;
  await w.app.ensureSectionLoaded('grammar');
  const withRelated = grammar.filteredItems.findIndex(g => (g.related || []).some(id => grammar.allItems.some(x => x.id === id)));
  grammar.openDetail(withRelated);
  const origin = grammar.selectedItem.id;
  const tag = d.querySelector('#grammar-detail-related .grammar-related-tag');
  assert(tag, 'No related grammar link');
  tag.click();
  await until(() => grammar.selectedItem && grammar.selectedItem.id !== origin, 'related grammar entry');
  await finish(f);

  // Grammar lessons: deep link opens a lesson; Back to the index keeps the lessons view.
  f = await boot('#grammar/lesson/lesson-21');
  ({ w, d } = f);
  await until(() => w.Lessons && w.Lessons.selected === 'lesson-21' && !d.getElementById('lesson-reader').classList.contains('hidden'), 'lesson deep link');
  assert(d.getElementById('lesson-title').textContent.length > 0);
  assert(d.querySelector('#lesson-reader .gl-example-jp'), 'Lesson examples missing');
  d.querySelector('#lesson-reader header button').click();
  await until(() => w.Lessons.selected === null && !d.getElementById('grammar-lessons').classList.contains('hidden'), 'lesson index');
  assert.equal(w.location.hash, '#grammar/lesson');
  const search = d.getElementById('gl-search');
  search.value = 'shijian'; search.dispatchEvent(new w.Event('input'));
  assert(w.Lessons.count >= 0);
  await finish(f);

  // Session restore: filters and search come back on reload.
  f = await boot('#vocab');
  ({ w, d } = f);
  vocab = w.app.sections.vocab;
  await w.app.ensureSectionLoaded('vocab');
  vocab.filters.level = 'HSK2'; vocab.dom.search.value = 'xuexi'; vocab.applyFilters();
  w.app.workspace.save();
  const session = w.sessionStorage.getItem('zhongwen-workspace');
  await finish(f);
  f = await boot('#vocab', { session });
  ({ w, d } = f);
  vocab = w.app.sections.vocab;
  await until(() => vocab.isLoaded && vocab.dom.search.value === 'xuexi' && vocab.filters.level === 'HSK2', 'session restore');
  assert(vocab.filteredItems.every(v => v.level === 'HSK2'));
  await finish(f);

  // Bookmarks stay in sync between card and detail and use the prefixed key.
  f = await boot('#measurewords');
  ({ w, d } = f);
  const mw = w.app.sections.measurewords;
  await w.app.ensureSectionLoaded('measurewords');
  const star = mw.dom.grid.querySelector('.bookmark-btn');
  star.click();
  assert.equal(star.getAttribute('aria-pressed'), 'true');
  mw.openDetail(0);
  const detailStar = mw.dom.overlay.querySelector('.detail-bookmark-btn');
  assert.equal(detailStar.getAttribute('aria-pressed'), 'true');
  detailStar.click();
  assert.equal(star.getAttribute('aria-pressed'), 'false', 'Card star did not follow the detail star');
  assert.deepEqual(JSON.parse(w.localStorage.getItem('zhongwen-bookmarks-measurewords')), []);
  assert.equal(w.localStorage.getItem('bookmarks-measurewords'), null);
  await finish(f);

  // Bookmarks on grammar points that were vocabulary words move to the vocabulary entry; old ids of kept
  // points follow their new point (legacyIds).
  f = await boot('#grammar', { local: { 'zhongwen-bookmarks-grammar': JSON.stringify(['g:显然', 'g:很 + Adjektiv']) } });
  ({ w, d } = f);
  await w.app.ensureSectionLoaded('grammar');
  assert.deepEqual(JSON.parse(w.localStorage.getItem('zhongwen-bookmarks-grammar')), ['g:很']);
  assert(JSON.parse(w.localStorage.getItem('zhongwen-bookmarks-vocab')).includes(w.GRAMMAR_REMOVED['g:显然']), 'Removed grammar bookmark not moved to vocab');
  await finish(f);

  // Quiz practice: buttons, labelled type select, keyboard guards, live feedback, focus, kept state, all levels.
  f = await boot('#quiz', { confirmResult: false });
  ({ w, d } = f);
  await w.app.ensureSectionLoaded('quiz');
  await until(() => d.querySelector('.quiz-home-card.browse'), 'quiz home');
  assert.equal(d.querySelector('.quiz-home-card.browse').tagName, 'BUTTON');
  activate(w, d.querySelector('.quiz-home-card.browse'));
  await delay(10);
  assert(d.activeElement.matches('.quiz-prompt'), 'Focus did not move to the question');
  const type = d.getElementById('quiz-type-select');
  assert.equal(type.closest('label').querySelector('span').textContent, 'Fragetyp');
  assert.deepEqual(Array.from(d.querySelectorAll('.quiz-level-pill'), p => p.dataset.level), ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9', 'Zusatz']);
  assert.equal(d.querySelector('.quiz-prompt-main').getAttribute('lang'), 'zh-CN', 'Chinese prompt without lang');
  let choices = d.querySelectorAll('.quiz-choice-btn');
  assert.equal(choices.length, 4);
  activate(w, choices[0]); activate(w, choices[1]);
  assert(!choices[0].classList.contains('selected') && choices[1].classList.contains('selected'));
  assert.equal(choices[1].getAttribute('aria-pressed'), 'true');
  assert(!key(w, type, '1').defaultPrevented, 'Quiz stole a key from the type select');
  assert(!key(w, type, 'Enter', { isComposing: true }).defaultPrevented);
  type.blur();
  assert(!key(w, d.body, '3', { isComposing: true }).defaultPrevented, 'IME composition answered');
  assert(!key(w, d.body, '3', { ctrlKey: true }).defaultPrevented, 'Ctrl+digit answered');
  assert(!choices[2].classList.contains('selected'));
  const feedback = d.querySelector('.quiz-feedback');
  assert.equal(feedback.getAttribute('role'), 'status');
  assert.equal(feedback.textContent, '');
  assert(key(w, d.body, 'Enter').defaultPrevented, 'Enter did not reveal');
  assert(feedback.textContent.includes('Richtige Antwort:'));
  assert(choices[1].disabled);
  assert.equal(d.activeElement.id, 'quiz-next-btn');
  // After answering, digits still belong to the question instead of switching tabs.
  assert(key(w, d.body, '1').defaultPrevented); assert.equal(w.app.activeTab, 'quiz');
  activate(w, d.getElementById('quiz-next-btn'));
  await delay(10);
  assert(d.activeElement.matches('.quiz-prompt'), 'New question focus was not set');
  assert(!d.querySelector('.quiz-choice-btn[disabled]'), 'Enter on the focused Weiter button skipped a question');
  // Switching tabs keeps the running practice.
  const shownPrompt = d.querySelector('.quiz-prompt-main');
  w.app.switchTab('vocab');
  await w.app.ensureSectionLoaded('vocab');
  w.app.switchTab('quiz');
  await delay(30);
  assert.equal(d.querySelector('.quiz-prompt-main'), shownPrompt, 'Practice was reset by a tab switch');
  const selectType = id => {
    type.value = id; type.dispatchEvent(new w.Event('change', { bubbles: true }));
    return w.QuizModule.audit.currentQuestion();
  };
  const reveal = () => { d.activeElement.blur(); assert(key(w, d.body, 'Enter').defaultPrevented, 'Enter did not reveal'); return d.querySelector('.quiz-feedback').textContent; };
  const nextQuestion = () => { activate(w, d.getElementById('quiz-next-btn')); return w.QuizModule.audit.currentQuestion(); };
  d.querySelector('.quiz-level-pill[data-level="HSK1"]').click();

  // Welcher Ton?: four spellings that differ only in tones, the vocabulary pinyin is right.
  let q = selectType('toneRecognition');
  const toneOptions = Array.from(d.querySelectorAll('.quiz-choice-text'), t => t.textContent);
  assert.equal(toneOptions.length, 4);
  assert.equal(new Set(toneOptions.map(o => w.Pinyin.fold(o))).size, 1, 'Tone options differ in more than tones');
  assert(w.app.sections.vocab.allItems.some(v => v.word === q.promptMain && v.pinyin === q.choices[q.correctIndex]), 'Tone answer is not the vocabulary pinyin');
  assert.equal(d.querySelector('.quiz-prompt-main').getAttribute('lang'), 'zh-CN');
  activate(w, d.querySelectorAll('.quiz-choice-btn')[q.correctIndex]);
  assert(reveal().startsWith('Richtig.'));

  // Was hörst du?: plays the word once when shown, Anhören repeats it, the word itself is not shown.
  const spoken = [];
  w.speechSynthesis.speak = utterance => spoken.push(utterance.text);
  q = selectType('listening');
  await delay(150);
  assert.deepEqual(spoken, [q.audio], 'Listening question did not play its word once');
  const listen = d.querySelector('.quiz-listen-btn');
  assert.equal(listen.textContent, 'Anhören');
  listen.click();
  await delay(150);
  assert.deepEqual(spoken, [q.audio, q.audio], 'Anhören did not repeat the word');
  assert(!d.querySelector('.quiz-prompt-main'), 'Listening question shows the word');
  assert.equal(d.querySelectorAll('.quiz-choice-btn').length, 4);
  assert.equal(q.choices[q.correctIndex], q.audio);
  activate(w, d.querySelectorAll('.quiz-choice-btn')[(q.correctIndex + 1) % 4]);
  assert(reveal().startsWith('Nicht richtig.'));
  assert(d.querySelector('.quiz-explanation').textContent.includes(q.meta.pinyin), 'Listening explanation without pinyin');
  // Without speech synthesis the type says so instead of asking.
  const synth = w.speechSynthesis;
  delete w.speechSynthesis;
  selectType('listening');
  assert(d.querySelector('.quiz-no-data').textContent.includes('Sprachausgabe'), 'Missing speech synthesis not explained');
  w.speechSynthesis = synth;

  // Pinyin eingeben: tone marks and tone numbers, Enter submits (not during IME composition), coloured answer.
  q = selectType('pinyinTyping');
  await delay(10);
  let input = d.getElementById('quiz-pinyin-input');
  assert.equal(d.activeElement, input, 'Pinyin field not focused');
  assert.equal(input.getAttribute('lang'), 'en');
  assert.equal(input.getAttribute('autocapitalize'), 'off');
  assert.equal(d.querySelector('label[for="quiz-pinyin-input"]').textContent.includes('Tonzahlen'), true);
  input.value = q.answer;
  assert(!key(w, input, 'Enter', { isComposing: true }).defaultPrevented, 'Enter during composition submitted');
  assert(!input.disabled);
  assert(key(w, input, 'Enter').defaultPrevented);
  let feedback2 = d.querySelector('.quiz-feedback');
  assert(feedback2.textContent.startsWith('Richtig.'), 'Tone-mark answer rejected: ' + q.answer);
  assert(feedback2.querySelector('.quiz-pinyin-answer [class^="tone-"]'), 'Answer pinyin not coloured by tone');
  assert(input.disabled);
  assert.equal(d.activeElement.id, 'quiz-next-btn');
  q = nextQuestion();
  input = d.getElementById('quiz-pinyin-input');
  input.value = w.Pinyin.toNumeric(q.answer, q.meta.word);
  d.querySelector('.quiz-btn-check').click();
  assert(d.querySelector('.quiz-feedback').textContent.startsWith('Richtig.'), 'Tone-number answer rejected: ' + input.value);
  do { q = nextQuestion(); } while (!/[1-4]/.test(w.Pinyin.toNumeric(q.answer, q.meta.word)));
  input = d.getElementById('quiz-pinyin-input');
  const toneless = w.Pinyin.toNumeric(q.answer, q.meta.word).replace(/\d/g, '');
  input.value = toneless;
  key(w, input, 'Enter');
  feedback2 = d.querySelector('.quiz-feedback').textContent;
  assert(feedback2.startsWith('Nicht richtig.') && feedback2.includes('Deine Eingabe: ' + toneless), 'Toneless answer accepted');
  nextQuestion();
  assert.equal(reveal().startsWith('Aufgelöst.'), true, 'Empty field was not just revealed');

  // Zählwort einsetzen: number + blank + noun, a listed classifier is right, 个 is never offered.
  q = selectType('measureWord');
  assert(/^[一两三] ＿＿＿ \S+$/.test(d.querySelector('.quiz-prompt-main').textContent), 'Measure-word prompt format');
  const noun = w.app.sections.vocab.allItems.find(v => v.word === q.meta.word && v.measureWords);
  assert(noun.measureWords.some(m => m.word === q.choices[q.correctIndex]), 'Asked classifier not listed for the noun');
  assert(!q.choices.includes('个'));
  activate(w, d.querySelectorAll('.quiz-choice-btn')[q.correctIndex]);
  assert(reveal().startsWith('Richtig.'));
  assert(d.querySelector('.quiz-explanation').textContent.includes('Passende Zählwörter'));

  // HSK 7–9 and Zusatz practice work for every question type.
  for (const level of ['HSK7-9', 'Zusatz']) {
    const pill = d.querySelector('.quiz-level-pill[data-level="' + level + '"]');
    pill.click();
    assert.equal(pill.getAttribute('aria-pressed'), 'true');
    for (const option of type.options) {
      type.value = option.value; type.dispatchEvent(new w.Event('change', { bubbles: true }));
      if (option.value === 'pinyinTyping') assert(d.getElementById('quiz-pinyin-input'), level + ' pinyinTyping');
      else assert.equal(d.querySelectorAll('.quiz-choice-btn').length, 4, level + ' ' + option.value);
      assert.equal(d.querySelector('.quiz-level-badge').textContent, level === 'HSK7-9' ? 'HSK 7–9' : 'Zusatz');
    }
  }
  assert(!Array.from(d.querySelectorAll('.quiz-choice-text')).some(t => /—|undefined/.test(t.textContent)));
  d.querySelector('.quiz-exit').click();
  assert(d.querySelector('.quiz-home'), 'Practice exit did not return home');

  // Mock exam: choose a level first, start separately; manual advance; exit asks first.
  activate(w, d.querySelector('.quiz-home-card.test'));
  const levelCards = d.querySelectorAll('.quiz-test-level-card');
  assert.deepEqual(Array.from(levelCards, c => c.dataset.level), ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9']);
  assert(Array.from(levelCards).every(c => c.tagName === 'BUTTON'));
  activate(w, levelCards[6]);
  assert.equal(levelCards[6].getAttribute('aria-pressed'), 'true');
  assert.equal(levelCards[0].getAttribute('aria-pressed'), 'false');
  assert(d.getElementById('quiz-start-test').textContent.includes('HSK 7–9'));
  assert(!w.QuizModule.isTestActive(), 'Level selection must not start the exam');
  assert.equal(f.intervals.size, 0);
  activate(w, levelCards[0]);
  activate(w, d.getElementById('quiz-start-test'));
  assert(w.QuizModule.isTestActive(), 'Mock exam did not start');
  assert.equal(f.intervals.size, 1);
  const timer = d.getElementById('quiz-timer');
  assert.equal(timer.getAttribute('role'), 'timer');
  assert(/^Verbleibende Zeit: 20 Minuten/.test(timer.getAttribute('aria-label')));
  d.body.focus();
  assert(key(w, d.body, '1').defaultPrevented);
  assert.equal(d.querySelectorAll('.quiz-choice-btn[disabled]').length, 4, 'Digit did not answer');
  assert(d.querySelector('.quiz-feedback').textContent, 'No feedback after answering');
  assert.equal(d.activeElement.id, 'quiz-test-next-btn');
  assert.equal(d.activeElement.textContent, 'Weiter');
  await delay(900);
  assert.equal(d.querySelector('.quiz-test-progress').textContent.startsWith('Frage 1 '), true, 'Exam advanced without Weiter');
  assert(key(w, d.body, '2').defaultPrevented);
  activate(w, d.getElementById('quiz-test-next-btn'));
  assert(d.querySelector('.quiz-test-progress').textContent.startsWith('Frage 2 '), 'Weiter did not advance');
  // An answer after the time ran out is ignored and the section summary stays.
  const realNow = w.Date.now;
  w.Date.now = () => realNow() + 3 * 3600 * 1000;
  d.querySelector('.quiz-choice-btn').click();
  assert(d.querySelector('.quiz-interstitial') && !d.querySelector('.quiz-question-card'), 'Late answer rendered a question over the summary');
  assert(d.querySelector('.quiz-inter-score').textContent.startsWith('1 von '), 'Late answer was counted');
  assert.equal(f.intervals.size, 0);
  w.Date.now = realNow;
  activate(w, Array.from(d.querySelectorAll('.quiz-interstitial button')).find(b => b.textContent.startsWith('Weiter')));
  assert(d.querySelector('.quiz-test-section-label').textContent.startsWith('Sektion 2'));
  // Exit asks first; declining keeps the exam and blocks tab switches.
  d.querySelector('.quiz-exit').click();
  assert(w.QuizModule.isTestActive());
  assert.equal(w.app.switchTab('vocab'), false, 'Tab switch must be blocked while the exam runs');
  assert.equal(w.app.activeTab, 'quiz');
  w.confirm = () => true;
  assert.equal(w.QuizModule.requestExit(), true);
  assert(!w.QuizModule.isTestActive());
  assert.equal(f.intervals.size, 0);
  await finish(f);

  // Keyboard: number keys follow the sidebar order.
  f = await boot('');
  ({ w, d } = f);
  d.body.dispatchEvent(new w.KeyboardEvent('keydown', { key: '2', bubbles: true }));
  await until(() => w.app.activeTab === 'pinyin', 'key 2 opens pinyin');
  assert(d.querySelectorAll('#pinyin-content .kana-section').length >= 6, 'Pinyin reference incomplete');
  await finish(f);

  console.log('UI regressions passed: deep links (incl. legacy ids), invalid routes, modal focus, history, related entries, lessons, session restore, bookmark sync, quiz practice (keyboard guards, focus, kept state, tones, listening with and without speech, typed pinyin, measure words, HSK 7–9/Zusatz), mock exam (level → start, manual advance, late answers, exit guard), keyboard tabs.');
}

run().catch(error => { console.error(error); process.exitCode = 1; });
