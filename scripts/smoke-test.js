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
      // Bookmarks saved under the former word|pinyin ids (before consolidation).
      w.localStorage.setItem('zhongwen-storage-version', '1');
      w.localStorage.setItem('zhongwen-bookmarks-vocab', JSON.stringify(['你好|nǐ hǎo', '女儿|nǚér']));
    }
  });
  const w = dom.window, d = w.document;
  try {
    await until(() => w.app && w.app.workspace && w.history.state && w.history.state.workspace, 'workspace ready');
    const app = w.app;
    const fail = () => errors.length ? errors.map(e => (e && e.stack) || String(e)).join('\n') : '';
    assert(!app.sections.vocab.isLoaded, 'Vocabulary must load lazily, not at startup');
    assert(d.querySelector('#tones-content .tone-card'), 'Tones tab did not render at startup');

    // Every tab activates (and loads its data) without errors.
    for (const button of d.querySelectorAll('.tab-btn')) {
      button.click();
      const name = button.dataset.tab;
      if (app.sections[name] || name === 'quiz') await app.ensureSectionLoaded(name);
      await delay(5);
      assert.strictEqual(fail(), '', 'Errors after opening tab ' + name);
      assert.strictEqual(d.getElementById('page-title').textContent.length > 0, true);
    }

    // Every list section has data and opens its first detail view.
    for (const name of ['hanzi', 'grammar', 'vocab', 'onomatopoeia', 'measurewords', 'radicals']) {
      const section = app.sections[name];
      app.switchTab(name);
      await app.ensureSectionLoaded(name);
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
    // Hanzi data loads with vocabulary, so contained characters are linked.
    assert(!d.getElementById('vocab-detail-hanzi-section').classList.contains('hidden'), 'Contained hanzi missing');
    assert(d.getElementById('vocab-detail-hanzi-links').textContent.includes('帮'), '帮 link missing');
    vocab.closeDetail();

    // Radical details list the hanzi that use them; hanzi components open their radical.
    const radicals = app.sections.radicals;
    app.switchTab('radicals');
    await app.ensureSectionLoaded('radicals');
    radicals.openDetail(radicals.filteredItems.findIndex(r => r.radical === '口'));
    assert(d.querySelectorAll('#radical-detail-hanzi-list .component-tag').length > 10, 'Radical 口 lists too few hanzi');
    assert(d.querySelector('#radical-detail-hanzi-list .card-level-inline'), 'Radical hanzi are not grouped by level');
    radicals.closeDetail();
    const hanziSection = app.sections.hanzi;
    app.switchTab('hanzi');
    await app.ensureHanziDetailsLoaded();
    const openHanzi = ch => hanziSection.openDetail(hanziSection.filteredItems.findIndex(h => h.hanzi === ch));
    // HSK 2025 levels, the official handwriting list and several readings per character.
    assert.strictEqual(hanziSection.allItems.length, 3675, 'Hanzi section must hold 3,675 characters');
    assert.strictEqual(hanziSection.allItems.find(h => h.hanzi === '饕').level, 'Zusatz');
    openHanzi('行');
    assert.strictEqual(d.querySelectorAll('#detail-readings .hanzi-reading').length, 2, '行 must show xíng and háng');
    hanziSection.closeDetail();
    openHanzi('发');
    assert(d.getElementById('detail-hanzi-facts').textContent.includes('發 / 髮'), 'Traditional forms of 发 missing');
    assert(d.getElementById('detail-hanzi-facts').textContent.includes('Schreibzeichen'), 'Handwriting level of 发 missing');
    hanziSection.closeDetail();
    // A component in its variant form (氵) opens the Kangxi radical (水).
    openHanzi('河');
    const radicalLink = Array.from(d.querySelectorAll('#detail-components .component-tag.clickable')).find(tag => tag.textContent.startsWith('氵'));
    assert(radicalLink, '氵 in 河 is not linked to its radical');
    radicalLink.click();
    await until(() => app.activeTab === 'radicals' && radicals.isOverlayOpen(), 'component opens radical');
    assert.strictEqual(d.getElementById('radical-detail-char').textContent, '水');
    radicals.closeDetail();
    // Example words open their vocabulary card.
    app.switchTab('hanzi');
    openHanzi('好');
    await until(() => d.querySelector('#detail-examples .hanzi-word-link'), 'example words render');
    d.querySelector('#detail-examples .hanzi-word-link').click();
    await until(() => app.activeTab === 'vocab' && app.sections.vocab.isOverlayOpen(), 'example word opens vocab');
    app.sections.vocab.closeDetail();
    // The radical filter lists only characters under that radical.
    app.switchTab('hanzi');
    openHanzi('河');
    Array.from(d.querySelectorAll('#detail-hanzi-facts .btn-link')).find(b => b.textContent.startsWith('alle Zeichen')).click();
    assert.strictEqual(app.activeRadical, '水');
    assert(hanziSection.filteredItems.length > 20 && hanziSection.filteredItems.every(h => h.primaryRadical === '水' || (h.components || []).some(c => c.part === '水')), 'Radical filter');
    app.clearRadicalFilter();
    for (const src of ['hanzi-hsk1.js', 'hanzi-hsk7-9.js', 'hanzi-zusatz.js']) {
      assert(!d.querySelector('script[src="' + src + '"]'), 'Hanzi tab loaded source file ' + src);
    }
    // The browser loads the generated runtime, never the per-level sources; examples follow.
    for (const src of ['vocab-hsk1.js', 'vocab-zusatz.js', 'chengyu-data.js']) {
      assert(!d.querySelector('script[src="' + src + '"]'), 'Vocabulary tab loaded source file ' + src);
    }
    await app.ensureVocabDetailsLoaded();
    const withExample = vocab.allItems.find(item => item.word === '你好');
    assert(withExample.examples && withExample.examples.length, 'Examples were not attached from the details file');
    vocab.openDetail(vocab.filteredItems.indexOf(withExample));
    assert(d.querySelector('#vocab-detail-examples .grammar-example-item, #vocab-detail-examples .example-item, #vocab-detail-examples div'), 'Examples not rendered');
    vocab.closeDetail();

    // HSK 2025 levels: the 7–9 band and Zusatz have entries and filter buttons.
    for (const level of ['HSK1', 'HSK7-9', 'Zusatz']) {
      vocab.filters.level = level; vocab.applyFilters();
      assert(vocab.filteredItems.length > 0 && vocab.filteredItems.every(item => item.level === level), 'Level filter ' + level);
      assert(d.querySelector('[data-vlevel="' + level + '"]'), 'Missing filter button ' + level);
    }
    vocab.filters.level = 'HSK1'; vocab.applyFilters();
    assert.strictEqual(vocab.filteredItems.length, 300, 'HSK 1 must hold exactly the 300 syllabus words');
    vocab.filters.level = 'all';
    // Traditional forms are searchable and shown; measure words and draft glosses are rendered.
    vocab.dom.search.value = '學習'; vocab.applyFilters();
    const study = vocab.filteredItems.find(item => item.word === '学习');
    assert(study, '學習 does not find 学习');
    vocab.openDetail(vocab.filteredItems.indexOf(study));
    assert(d.getElementById('vocab-detail-facts').textContent.includes('學習'), 'Traditional form missing in detail');
    vocab.closeDetail();
    vocab.dom.search.value = ''; vocab.applyFilters();
    const withMeasure = vocab.allItems.find(item => item.word === '书' && item.measureWords);
    assert(withMeasure, '书 has no measure word');
    vocab.openDetail(vocab.filteredItems.indexOf(withMeasure));
    assert(/Zählwort/.test(d.getElementById('vocab-detail-facts').textContent), 'Measure-word line missing');
    vocab.closeDetail();
    // Draft glosses get a notice; once every gloss is reviewed, the notice must stay hidden.
    const draft = vocab.allItems.find(item => item.meaningStatus === 'draft');
    if (draft) {
      vocab.openDetail(vocab.filteredItems.indexOf(draft));
      assert(!d.getElementById('vocab-detail-draft').classList.contains('hidden'), 'Draft notice missing');
      vocab.closeDetail();
    } else {
      vocab.openDetail(vocab.filteredItems.indexOf(study));
      assert(d.getElementById('vocab-detail-draft').classList.contains('hidden'), 'Draft notice shown for a reviewed entry');
      vocab.closeDetail();
      assert(!vocab.dom.grid.querySelector('.draft-badge'), 'Draft badge shown without draft entries');
    }

    // No vocabulary card is empty.
    assert(!vocab.allItems.some(item => !item.word), 'Vocabulary entry without word');
    // Former word|pinyin bookmarks now point at the consolidated entries.
    assert.deepStrictEqual(JSON.parse(w.localStorage.getItem('zhongwen-bookmarks-vocab')), ['w:你好:ni3hao3', 'w:女儿:nv3er2']);
    assert(w.isBookmarked('vocab', 'w:女儿:nv3er2'));
    assert.strictEqual(vocab.allItems.filter(item => item.word === '女儿').length, 1, '女儿 should be one entry');

    assert.strictEqual(fail(), '');
    console.log('Smoke test passed: all tabs, every section detail, related entries, examples, measure-word tables, pinyin search, tone colouring.');
  } finally {
    // Let in-flight section loads settle so their callbacks do not run against a closed window.
    await Promise.all(Object.values(w.app ? w.app.sections : {}).map(s => s._loadPromise).filter(Boolean)).catch(() => {});
    await delay(50);
    w.close();
  }
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
