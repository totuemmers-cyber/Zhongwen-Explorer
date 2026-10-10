// Downloads the AnimCJK stroke-order SVGs (svgsZhHans, pinned commit) for every hanzi of the app into
// .content-cache/sources/animcjk-svgsZhHans/ and compares them with stroke-order/.
// The hanzi set is the HSK 2025 reading list plus every character used in a vocabulary word.
// Usage: node scripts/hanzi/fetch-strokes.cjs [--install]   (--install copies missing and changed SVGs into
// stroke-order/, so every diagram there is the pinned AnimCJK version)
const fs = require('fs');
const path = require('path');
const common = require('../enrich/common.cjs');
const dict = require('../hsk2025/dictionaries.cjs');

const COMMIT = 'ec5e17cca76c87587790bcbce5ea0b4d4fb753d6';
const BASE = 'https://raw.githubusercontent.com/parsimonhi/animCJK/' + COMMIT + '/svgsZhHans/';
const CACHE = path.join(dict.SOURCES, 'animcjk-svgsZhHans');
const TARGET = path.join(__dirname, '..', '..', 'stroke-order');
const HAN = /\p{Script=Han}/u;

// All characters the hanzi section covers.
function hanziSet() {
  const chars = new Set(Object.values(require('../hsk2025/characters.json').reading).flat());
  for (const source of common.loadSources()) {
    for (const item of source.items) for (const ch of Array.from(item.word)) if (HAN.test(ch)) chars.add(ch);
  }
  return Array.from(chars);
}

async function fetchOne(ch) {
  const file = path.join(CACHE, ch.codePointAt(0) + '.svg');
  if (fs.existsSync(file)) return 'cached';
  const response = await fetch(BASE + ch.codePointAt(0) + '.svg');
  if (response.status === 404) return 'missing';
  if (!response.ok) throw new Error('HTTP ' + response.status + ' for ' + ch);
  fs.writeFileSync(file, Buffer.from(await response.arrayBuffer()));
  return 'downloaded';
}

async function main(args) {
  fs.mkdirSync(CACHE, { recursive: true });
  const chars = hanziSet();
  const results = {};
  const queue = chars.slice();
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const ch = queue.shift();
      results[ch] = await fetchOne(ch);
    }
  }));
  const missing = chars.filter(ch => results[ch] === 'missing');
  const inApp = name => fs.existsSync(path.join(TARGET, name));
  const notInApp = chars.filter(ch => results[ch] !== 'missing' && !inApp(ch.codePointAt(0) + '.svg'));
  const changed = chars.filter(ch => {
    const name = ch.codePointAt(0) + '.svg';
    return results[ch] !== 'missing' && inApp(name) &&
      fs.readFileSync(path.join(CACHE, name), 'utf8').replace(/\r\n/g, '\n') !== fs.readFileSync(path.join(TARGET, name), 'utf8').replace(/\r\n/g, '\n');
  });
  console.log(chars.length + ' hanzi; AnimCJK has ' + (chars.length - missing.length) + ', lacks ' + missing.length + (missing.length ? ': ' + missing.join('') : ''));
  console.log(notInApp.length + ' SVGs not yet in stroke-order/, ' + changed.length + ' differ from the pinned AnimCJK version');
  if (args.includes('--install')) {
    for (const ch of notInApp.concat(changed)) fs.copyFileSync(path.join(CACHE, ch.codePointAt(0) + '.svg'), path.join(TARGET, ch.codePointAt(0) + '.svg'));
    console.log('Installed ' + (notInApp.length + changed.length) + ' SVGs into stroke-order/');
  }
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
