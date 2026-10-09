// Parses the character lists (汉字大纲) of the HSK 2025 syllabus PDF into
// scripts/hsk2025/characters.json: reading characters (认读字) and writing characters (书写字) per level.
// Usage: node scripts/hsk2025/parse-characters.cjs
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { loadPdf, pageItems, lines } = require('./pdf-text.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const PDF = path.join(ROOT, '.content-cache', 'sources', 'hsk2025-syllabus.pdf');
const LEVEL_NAMES = { '一': '1', '二': '2', '三': '3', '四': '4', '五': '5', '六': '6', '七': '7-9' };
// New characters per list as stated by the syllabus (writing list for levels 1–2 is combined).
const EXPECTED = {
  reading: { '1': 246, '2': 125, '3': 284, '4': 441, '5': 431, '6': 413, '7-9': 1148 },
  writing: { '1-2': 100, '3': 150, '4': 150, '5': 150, '6': 150, '7-9': 500 }
};
const isTableText = item => !item.rotated && item.size < 20 && item.y < 805;
const HAN = /^[㐀-鿿豈-﫿\u{20000}-\u{2ffff}]$/u;

// Section headings look like HSK（一级）认读字, HSK（一级）~（二级）书写字, HSK（七—九级）认读字.
function sectionOf(text) {
  const kind = text.includes('认读字') ? 'reading' : text.includes('书写字') ? 'writing' : null;
  if (!kind || !text.startsWith('HSK')) return null;
  const levels = Array.from(text.matchAll(/（([一二三四五六七])[^）]*）/g)).map(m => LEVEL_NAMES[m[1]]);
  assert(levels.length, 'Unreadable section heading: ' + text);
  return { kind, level: levels.length > 1 ? levels[0] + '-' + levels[levels.length - 1] : levels[0] };
}

async function main() {
  const doc = await loadPdf(PDF);
  const lists = { reading: {}, writing: {} };
  let section = null, inCharacters = false;
  for (let p = 1; p <= doc.numPages; p++) {
    const all = await pageItems(doc, p);
    const pageText = all.map(i => i.str).join('');
    if (pageText.includes('汉字大纲') && !pageText.includes('词汇大纲')) inCharacters = true;
    if (pageText.includes('语法大纲') && !pageText.includes('汉字大纲') && inCharacters) break;
    if (!inCharacters) continue;
    for (const line of lines(all.filter(isTableText))) {
      const text = line.items.map(i => i.str).join('');
      const heading = sectionOf(text);
      if (heading) {
        section = heading;
        lists[section.kind][section.level] = lists[section.kind][section.level] || [];
        continue;
      }
      if (!section) continue;
      // Entries are "number . character", four columns per line.
      let number = '';
      for (const item of line.items) {
        if (/^\d$/.test(item.str)) number += item.str;
        else if (item.str === '.') continue;
        else if (HAN.test(item.str) && number) {
          lists[section.kind][section.level].push({ no: Number(number), char: item.str, page: p });
          number = '';
        }
      }
    }
  }
  // Column-major layout: sort by the printed number, then check numbering and counts.
  const result = {};
  for (const kind of Object.keys(lists)) {
    result[kind] = {};
    for (const [level, entries] of Object.entries(lists[kind])) {
      entries.sort((a, b) => a.no - b.no);
      entries.forEach((entry, index) => assert.strictEqual(entry.no, index + 1, kind + ' ' + level + ': numbering gap at ' + (index + 1)));
      result[kind][level] = entries.map(e => e.char);
    }
    const counts = Object.fromEntries(Object.entries(result[kind]).map(([level, chars]) => [level, chars.length]));
    assert.deepStrictEqual(counts, EXPECTED[kind], kind + ' counts differ: ' + JSON.stringify(counts));
    const all = Object.values(result[kind]).flat();
    assert.strictEqual(new Set(all).size, all.length, kind + ' list contains duplicates');
  }
  const reading = new Set(Object.values(result.reading).flat());
  const notReadable = Object.values(result.writing).flat().filter(ch => !reading.has(ch));
  assert.strictEqual(notReadable.length, 0, 'Writing characters missing from the reading list: ' + notReadable.join(''));
  fs.writeFileSync(path.join(__dirname, 'characters.json'), JSON.stringify({
    source: 'HSK 考试大纲 (中外语言交流合作中心, 2025-11), 汉字大纲',
    reading: result.reading,
    writing: result.writing
  }, null, 1) + '\n');
  console.log('Parsed ' + reading.size + ' reading and ' + Object.values(result.writing).flat().length + ' writing characters; per-level counts match the syllabus.');
}

main().catch(error => { console.error(error.stack || error.message); process.exitCode = 1; });
