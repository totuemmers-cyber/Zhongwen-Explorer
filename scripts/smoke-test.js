/* Boots the real app in jsdom, visits every tab and opens detail views. Fails on any script error. */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
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

async function run() {
  const errors = [], spoken = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => errors.push(error));
  const dom = new JSDOM(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), {
    url: 'http://zhongwen.test/index.html',
    resources: new LocalResources(),
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(w) {
      w.matchMedia = () => ({ matches: false, addEventListener() {}, addListener() {} });
      w.HTMLElement.prototype.scrollIntoView = function () {};
      w.scrollTo = function () {};
      w.IntersectionObserver = function () { this.observe = function () {}; this.disconnect = function () {}; };
      w.SpeechSynthesisUtterance = function (text) { this.text = text; };
      w.speechSynthesis = { getVoices: () => [], cancel() {}, speak: utterance => spoken.push(utterance.text) };
      w.addEventListener('error', event => errors.push(event.error || event.message));
    }
  });
  const w = dom.window, d = w.document;
  try {
    await until(() => w.app && w.app.sections && w.app.sections.vocab && w.app.sections.vocab.allItems.length, 'app ready');
    const app = w.app;
    const fail = () => errors.length ? errors.map(e => (e && e.stack) || String(e)).join('\n') : '';

    // Every tab activates without errors.
    for (const button of d.querySelectorAll('.tab-btn')) {
      button.click();
      await delay(5);
      assert.strictEqual(fail(), '', 'Errors after opening tab ' + button.dataset.tab);
    }

    // Every list section has data and opens its first detail view.
    for (const name of ['hanzi', 'grammar', 'vocab', 'onomatopoeia', 'measurewords', 'radicals']) {
      const section = app.sections[name];
      app.switchTab(name);
      assert(section.allItems.length > 0, name + ' has no items');
      section.openDetail(0);
      assert(section.isOverlayOpen(), name + ' detail did not open');
      section.closeDetail();
      assert.strictEqual(fail(), '', 'Errors in ' + name + ' detail');
    }

    // Related entries in grammar and onomatopoeia details (previously a ReferenceError).
    for (const [name, field, tag] of [['grammar', 'relatedPatterns', '.grammar-related-tag:not(.disabled)'], ['onomatopoeia', 'related', '.ono-related-tag:not(.disabled)']]) {
      const section = app.sections[name];
      app.switchTab(name);
      const index = section.filteredItems.findIndex(item => (item[field] || []).length);
      assert(index !== -1, name + ' has no related entries');
      section.openDetail(index);
      assert(section.isOverlayOpen(), name + ' detail with related entries did not open');
      const link = d.querySelector(tag);
      if (link) link.click();
      section.closeDetail();
      assert.strictEqual(fail(), '', 'Errors following related ' + name + ' entries');
    }

    // Grammar examples and measure-word tables render text, not blanks or "undefined".
    const grammar = app.sections.grammar;
    app.switchTab('grammar');
    const extraIndex = grammar.filteredItems.findIndex(item => item.pattern === '除非…否则…');
    assert(extraIndex !== -1, 'Pattern from grammar-extra files missing');
    grammar.openDetail(extraIndex);
    assert(d.getElementById('grammar-detail-examples').textContent.includes('除非你亲自来'), 'Grammar example text missing');
    grammar.closeDetail();
    const measure = app.sections.measurewords;
    app.switchTab('measurewords');
    measure.openDetail(measure.filteredItems.findIndex(item => item.classifier === '片'));
    assert(d.getElementById('mw-detail-table').textContent.includes('一片'), 'Measure-word table text missing');
    assert(!d.getElementById('mw-detail-table').textContent.includes('undefined'));
    measure.closeDetail();
    assert(!measure.dom.grid.textContent.includes('undefined'), 'Measure-word cards show undefined');

    // Pinyin search finds 你好 however it is typed; German search folds umlauts.
    const vocab = app.sections.vocab;
    app.switchTab('vocab');
    for (const query of ['nihao', 'ni3hao3', 'nǐ hǎo']) {
      vocab.dom.search.value = query;
      vocab.applyFilters();
      assert(vocab.filteredItems.some(item => item.word === '你好'), 'Search ' + query + ' misses 你好');
    }
    vocab.dom.search.value = 'grosshandel';
    vocab.applyFilters();
    assert(vocab.filteredItems.some(item => item.word === '批发'), 'Umlaut-folded search misses 批发');
    vocab.dom.search.value = '';
    vocab.applyFilters();
    // Tone colouring segments unspaced pinyin.
    const helpIndex = vocab.filteredItems.findIndex(item => item.word === '帮助');
    assert(helpIndex !== -1);
    vocab.openDetail(helpIndex);
    assert.strictEqual(d.querySelectorAll('#vocab-detail-pinyin span[class^="tone-"]').length, 2, '帮助 should colour two syllables');
    vocab.closeDetail();
    // No vocabulary card is empty.
    assert(!vocab.allItems.some(item => !item.word), 'Vocabulary entry without word');

    assert.strictEqual(fail(), '');
    console.log('Smoke test passed: all tabs, every section detail, related entries, examples, measure-word tables, pinyin search, tone colouring.');
  } finally {
    w.close();
  }
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
