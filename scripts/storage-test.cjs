// Storage wrapper and one-time bookmark migration on the origin shared with Nihongo Explorer.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const source = file => fs.readFileSync(path.join(ROOT, file), 'utf8');

function fakeStorage(initial, { failWrites = false } = {}) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem: key => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => { if (failWrites) throw new Error('QuotaExceededError'); data.set(key, String(value)); },
    removeItem: key => data.delete(key)
  };
}

function boot(localStorage) {
  const notice = { hidden: true, textContent: '' };
  const context = { localStorage, sessionStorage: fakeStorage({}), document: { getElementById: () => notice } };
  context.window = context;
  vm.runInNewContext(source('storage.js'), context, { filename: 'storage.js' });
  vm.runInNewContext(source('zhongwen-migrate.js'), context, { filename: 'zhongwen-migrate.js' });
  return { context, notice };
}

const json = (storage, key) => JSON.parse(storage.getItem(key));

// Mixed shared keys: Nihongo ids (ASCII, legacy word|kana) stay, Zhongwen ids move.
const shared = fakeStorage({
  'bookmarks-vocab': JSON.stringify(['vocab-n5:0', '你好|nǐhǎo', '食べる|たべる', 'idioms:12', '中国|Zhōngguó']),
  'bookmarks-grammar': JSON.stringify(['wa', '是…的', 'na-adj-past']),
  'bookmarks-onomatopoeia': JSON.stringify(['onomatopoeia:3', 'わくわく', '哈哈']),
  'bookmarks-hanzi': JSON.stringify(['好', '我']),
  'bookmarks-measurewords': JSON.stringify(['个']),
  'bookmarks-radicals': JSON.stringify(['1', '85']),
  'bookmarks-kanji': JSON.stringify(['日']),
  'zhongwen-bookmarks-vocab': JSON.stringify(['谢谢|xièxie'])
});
boot(shared);
assert.deepStrictEqual(json(shared, 'bookmarks-vocab'), ['vocab-n5:0', '食べる|たべる', 'idioms:12']);
assert.deepStrictEqual(json(shared, 'zhongwen-bookmarks-vocab'), ['谢谢|xièxie', '你好|nǐhǎo', '中国|Zhōngguó']);
assert.deepStrictEqual(json(shared, 'bookmarks-grammar'), ['wa', 'na-adj-past']);
assert.deepStrictEqual(json(shared, 'zhongwen-bookmarks-grammar'), ['是…的']);
assert.deepStrictEqual(json(shared, 'bookmarks-onomatopoeia'), ['onomatopoeia:3', 'わくわく']);
assert.deepStrictEqual(json(shared, 'zhongwen-bookmarks-onomatopoeia'), ['哈哈']);
assert.deepStrictEqual(json(shared, 'zhongwen-bookmarks-hanzi'), ['好', '我']);
assert.deepStrictEqual(json(shared, 'bookmarks-hanzi'), []);
assert.deepStrictEqual(json(shared, 'zhongwen-bookmarks-measurewords'), ['个']);
// Radicals use the same Kangxi numbers in both apps: copied, never removed.
assert.deepStrictEqual(json(shared, 'bookmarks-radicals'), ['1', '85']);
assert.deepStrictEqual(json(shared, 'zhongwen-bookmarks-radicals'), ['1', '85']);
// Nihongo-only keys are untouched.
assert.deepStrictEqual(json(shared, 'bookmarks-kanji'), ['日']);
assert.strictEqual(shared.getItem('zhongwen-storage-version'), '1');

// A second start is a no-op, even if the other app writes Zhongwen-looking data later.
const snapshot = JSON.stringify([...shared.data]);
shared.setItem('bookmarks-vocab', JSON.stringify(['vocab-n5:0', '再见|zàijiàn']));
boot(shared);
assert.deepStrictEqual(json(shared, 'bookmarks-vocab'), ['vocab-n5:0', '再见|zàijiàn']);
shared.setItem('bookmarks-vocab', JSON.parse(snapshot).find(([key]) => key === 'bookmarks-vocab')[1]);
assert.strictEqual(JSON.stringify([...shared.data]), snapshot);

// Malformed stored JSON falls back without throwing and shows the notice.
const broken = fakeStorage({ 'bookmarks-vocab': '{not json', 'zhongwen-bookmarks-hanzi': '"text"' });
const { context, notice } = boot(broken);
assert.deepStrictEqual(context.APP_STORAGE.local.getJSON('zhongwen-bookmarks-hanzi', [], Array.isArray), []);
assert.strictEqual(notice.hidden, false);

// Blocked storage keeps values for the page session and reports it.
const blocked = fakeStorage({}, { failWrites: true });
const session = boot(blocked);
assert.strictEqual(session.context.APP_STORAGE.local.set('zhongwen-theme', 'dark'), false);
assert.strictEqual(session.context.APP_STORAGE.local.get('zhongwen-theme', null), 'dark');
assert.strictEqual(session.notice.hidden, false);

console.log('Storage tests passed: namespaced migration on the shared origin, idempotence, malformed and blocked storage.');
