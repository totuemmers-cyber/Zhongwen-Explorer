// One-time move of bookmarks to Zhongwen-prefixed keys.
// Zhongwen and Nihongo Explorer are served from the same origin and both used
// bookmarks-<section> keys, so shared keys may hold ids of either app. Only ids
// that are recognisably Zhongwen's move; the other app's ids stay where they are.
(function () {
  'use strict';
  var VERSION_KEY = 'zhongwen-storage-version';
  var VERSION = '1';
  var store = window.APP_STORAGE.local;
  if (store.get(VERSION_KEY, null) === VERSION) return;

  var HAN = /[㐀-鿿豈-﫿]/;
  var KANA = /[぀-ヿ]/;
  var LATIN_AFTER_BAR = /\|.*[a-zA-ZÀ-ɏ]/;

  function isZhongwenId(section, id) {
    if (typeof id !== 'string' || !HAN.test(id) || KANA.test(id)) return false;
    // Zhongwen vocabulary ids are word|pinyin; Nihongo's legacy ones are word|kana.
    return section !== 'vocab' || LATIN_AFTER_BAR.test(id);
  }

  function readList(key) {
    var value = store.getJSON(key, [], Array.isArray);
    return Array.isArray(value) ? value : [];
  }

  function union(target, ids) {
    var existing = readList(target);
    ids.forEach(function (id) { if (existing.indexOf(id) === -1) existing.push(id); });
    store.setJSON(target, existing);
  }

  // Sections only Zhongwen writes: move everything.
  ['hanzi', 'measurewords'].forEach(function (section) {
    var ids = readList('bookmarks-' + section);
    if (!ids.length) return;
    union('zhongwen-bookmarks-' + section, ids);
    store.setJSON('bookmarks-' + section, []);
  });

  // Shared section names: move only Zhongwen ids and leave Nihongo's in place.
  ['vocab', 'grammar', 'onomatopoeia'].forEach(function (section) {
    var ids = readList('bookmarks-' + section);
    var mine = ids.filter(function (id) { return isZhongwenId(section, id); });
    if (!mine.length) return;
    union('zhongwen-bookmarks-' + section, mine);
    store.setJSON('bookmarks-' + section, ids.filter(function (id) { return mine.indexOf(id) === -1; }));
  });

  // Radical ids (Kangxi numbers) are identical in both apps: copy, never remove.
  var radicals = readList('bookmarks-radicals');
  if (radicals.length) union('zhongwen-bookmarks-radicals', radicals);

  store.set(VERSION_KEY, VERSION);
})();
