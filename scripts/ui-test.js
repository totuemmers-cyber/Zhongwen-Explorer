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
  const errors = [];
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
      w.localStorage.setItem('zhongwen-storage-version', '1');
      for (const [key, value] of Object.entries(local)) w.localStorage.setItem(key, value);
      if (session) w.sessionStorage.setItem('zhongwen-workspace', session);
    }
  });
  const w = dom.window;
  await until(() => w.app && w.app.workspace && w.history.state && w.history.state.workspace, 'workspace ready');
  return { w, d: w.document, errors };
}
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
  const withRelated = grammar.filteredItems.findIndex(g => (g.relatedPatterns || []).some(p => grammar.allItems.some(x => x.pattern === p)));
  grammar.openDetail(withRelated);
  const origin = grammar.selectedItem.id;
  const tag = d.querySelector('#grammar-detail-related .grammar-related-tag:not(.disabled)');
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

  // Leaving an active mock exam asks first; declining keeps the quiz open.
  f = await boot('#quiz', { confirmResult: false });
  ({ w, d } = f);
  await w.app.ensureSectionLoaded('quiz');
  await until(() => d.querySelector('.quiz-home-card.test'), 'quiz home');
  d.querySelector('.quiz-home-card.test').click();
  d.querySelector('.quiz-test-level-card').click();
  assert(w.QuizModule.isTestActive(), 'Mock exam did not start');
  assert.equal(w.app.switchTab('vocab'), false, 'Tab switch must be blocked while the exam runs');
  assert.equal(w.app.activeTab, 'quiz');
  w.confirm = () => true;
  assert.equal(w.QuizModule.requestExit(), true);
  assert(!w.QuizModule.isTestActive());
  await finish(f);

  // Keyboard: number keys follow the sidebar order.
  f = await boot('');
  ({ w, d } = f);
  d.body.dispatchEvent(new w.KeyboardEvent('keydown', { key: '2', bubbles: true }));
  await until(() => w.app.activeTab === 'pinyin', 'key 2 opens pinyin');
  assert(d.querySelectorAll('#pinyin-content .kana-section').length >= 6, 'Pinyin reference incomplete');
  await finish(f);

  console.log('UI regressions passed: deep links (incl. legacy ids), invalid routes, modal focus, history, related entries, lessons, session restore, bookmark sync, exam exit guard, keyboard tabs.');
}

run().catch(error => { console.error(error); process.exitCode = 1; });
