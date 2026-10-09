// Parses the vocabulary list (词汇大纲) of the HSK 2025 syllabus PDF into
// scripts/hsk2025/vocabulary.json and checks it against the pinned cross-check CSV.
// Usage: node scripts/hsk2025/parse-syllabus.cjs
const assert = require('assert');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { loadPdf, pageItems, lines } = require('./pdf-text.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCES = path.join(ROOT, '.content-cache', 'sources');
const PDF = path.join(SOURCES, 'hsk2025-syllabus.pdf');
const CROSSCHECK = path.join(SOURCES, 'hsk-3.0-all.csv');
const OUT = __dirname;
const EXPECTED_NEW_PER_LEVEL = { '1': 300, '2': 200, '3': 500, '4': 1000, '5': 1600, '6': 1800, '7-9': 5600 };

const HAN = /[㐀-鿿豈-﫿]/;
const LATIN = /[a-zA-ZÀ-ɏḀ-ỿ’'\-]/;
// The 汉考国际 watermark is rotated 48 pt text and the printed page number sits below the table
// (y ≈ 818); both are dropped by geometry, never by characters (国际 is a word).
const isTableText = item => !item.rotated && item.size < 20 && item.y < 805;

// Column zones from the table header (序号 | 等级 | 词语 | 拼音 | 词性).
function zoneOf(item, header) {
  // Wide level cells such as 1（2）（4） start left of the 等级 header; split at the midpoint.
  if (item.x < (header.no + header.level) / 2) return 'no';
  if (item.x < header.word - 6) return 'level';
  if (item.x >= header.pos - 6) return 'pos';
  if (HAN.test(item.str) || /[（）()]/.test(item.str) && item.x < header.pinyin - 4) return 'word';
  if (/^\d+$/.test(item.str) && item.x < header.pinyin - 4) return 'homograph';
  return 'pinyin';
}

function headerOf(pageLines) {
  for (const line of pageLines) {
    const text = line.items.map(i => i.str).join('');
    if (text.includes('序号') && text.includes('词性')) {
      const at = ch => line.items.find(i => i.str === ch).x;
      return { y: line.y, no: at('序'), level: at('等'), word: at('词'), pinyin: at('拼'), pos: line.items.filter(i => i.str === '词').pop().x };
    }
  }
  return null;
}

// Pinyin arrives letter by letter; a visible gap between two letters is a space.
function joinPinyin(items) {
  let out = '';
  items.forEach((item, index) => {
    const prev = items[index - 1];
    if (prev && item.x - (prev.x + prev.width) > 1.2 && !/^[-’'(（]$/.test(item.str) && !/[-’'(（]$/.test(out)) out += ' ';
    out += item.str;
  });
  return out.replace(/\s+/g, ' ').trim();
}

function parseLevel(text) {
  const m = text.match(/^(7-9|[1-6])((?:（(?:7-9|[1-6])）)*)$/);
  assert(m, 'Unexpected level cell: ' + text);
  return { level: m[1], laterLevels: (m[2].match(/7-9|[1-6]/g) || []) };
}

async function parse() {
  const doc = await loadPdf(PDF);
  const rows = [];
  let inVocabulary = false;
  for (let p = 1; p <= doc.numPages; p++) {
    const allItems = await pageItems(doc, p);
    const pageText = allItems.map(i => i.str).join('');
    const pageLines = lines(allItems.filter(isTableText));
    // The table of contents names every section; section title pages name only their own.
    const vocabTitle = pageText.includes('词汇大纲'), charTitle = pageText.includes('汉字大纲');
    if (vocabTitle && !charTitle) inVocabulary = true;
    if (charTitle && !vocabTitle && inVocabulary) break;
    if (!inVocabulary) continue;
    const header = headerOf(pageLines);
    if (!header) continue;
    let row = null;
    for (const line of pageLines) {
      if (line.y <= header.y + 2) continue;
      const cells = { no: [], level: [], word: [], homograph: [], pinyin: [], pos: [] };
      line.items.forEach(item => cells[zoneOf(item, header)].push(item));
      if (cells.no.length) {
        row = { cells: { no: [], level: [], word: [], homograph: [], pinyin: [], pos: [] }, page: p };
        rows.push(row);
      }
      if (!row) continue;
      Object.keys(cells).forEach(key => { row.cells[key].push(...cells[key]); });
    }
  }
  return rows.map(raw => {
    const text = key => raw.cells[key].map(i => i.str).join('').trim();
    const level = parseLevel(text('level'));
    const word = text('word');
    const homograph = text('homograph') || null;
    const pos = text('pos');
    return {
      no: Number(text('no')),
      level: level.level,
      laterLevels: level.laterLevels,
      word,
      homograph: homograph ? Number(homograph) : null,
      pinyin: joinPinyin(raw.cells.pinyin),
      pos,
      page: raw.page
    };
  });
}

function readCrosscheck() {
  const text = fs.readFileSync(CROSSCHECK, 'utf8').replace(/^﻿/, '');
  const [header, ...lines] = text.trim().split(/\r?\n/);
  const keys = header.split(',');
  return lines.map(line => {
    // The dataset quotes no fields; commas only occur as separators.
    const values = line.split(',');
    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
  });
}

function compare(rows, reference, knownDifferences) {
  const differences = [];
  const byNo = new Map(reference.map(r => [Number(r.id), r]));
  for (const row of rows) {
    const ref = byNo.get(row.no);
    if (!ref) { differences.push({ no: row.no, field: 'row', ours: row.word, theirs: null }); continue; }
    const theirs = {
      level: String(ref.level),
      word: ref.hanzi,
      homograph: ref.homograph ? Number(ref.homograph) : null,
      pinyin: ref.pinyin,
      pos: ref.part_of_speech,
      page: Number(ref.source_pdf_page),
      levelLabel: ref.level_label
    };
    const ours = { level: row.level, word: row.word, homograph: row.homograph, pinyin: row.pinyin, pos: row.pos, page: row.page,
      levelLabel: row.level + row.laterLevels.map(l => '（' + l + '）').join('') };
    for (const field of Object.keys(theirs)) {
      if (ours[field] === theirs[field]) continue;
      const known = knownDifferences.find(d => d.no === row.no && d.field === field);
      if (known && known.ours === ours[field] && known.theirs === theirs[field]) continue;
      differences.push({ no: row.no, field, ours: ours[field], theirs: theirs[field] });
    }
  }
  return differences;
}

async function main() {
  const rows = await parse();
  // Structural checks: continuous numbering and the official count of new words per level.
  rows.forEach((row, index) => assert.strictEqual(row.no, index + 1, 'Numbering gap at ' + (index + 1) + ' (found ' + row.no + ')'));
  assert.strictEqual(rows.length, 11000, 'Expected 11,000 rows, parsed ' + rows.length);
  const perLevel = {};
  rows.forEach(row => { perLevel[row.level] = (perLevel[row.level] || 0) + 1; });
  assert.deepStrictEqual(perLevel, EXPECTED_NEW_PER_LEVEL, 'Per-level counts differ: ' + JSON.stringify(perLevel));

  const knownPath = path.join(OUT, 'known-differences.json');
  const known = fs.existsSync(knownPath) ? JSON.parse(fs.readFileSync(knownPath, 'utf8')) : [];
  const differences = compare(rows, readCrosscheck(), known);
  if (differences.length) {
    const byField = {};
    differences.forEach(d => { byField[d.field] = (byField[d.field] || 0) + 1; });
    console.error(differences.length + ' unexplained differences from the cross-check: ' + JSON.stringify(byField));
    console.error(differences.slice(0, 40).map(d => '  #' + d.no + ' ' + d.field + ': ours ' + JSON.stringify(d.ours) + ' / theirs ' + JSON.stringify(d.theirs)).join('\n'));
    process.exitCode = 1;
    return;
  }

  const pdfHash = crypto.createHash('sha256').update(fs.readFileSync(PDF)).digest('hex');
  fs.writeFileSync(path.join(OUT, 'vocabulary.json'), '[\n' + rows.map(r => JSON.stringify(r)).join(',\n') + '\n]\n');
  fs.writeFileSync(path.join(OUT, 'receipt.json'), JSON.stringify({
    source: 'HSK 考试大纲 (中外语言交流合作中心, 2025-11 发布, 2026-07 实施), 词汇大纲',
    pdfSha256: pdfHash,
    pages: [rows[0].page, rows[rows.length - 1].page],
    rows: rows.length,
    newWordsPerLevel: perLevel,
    multiLevelRows: rows.filter(r => r.laterLevels.length).length,
    homographRows: rows.filter(r => r.homograph).length,
    crosscheck: { dataset: 'uranbekanarbaev/hsk-3.0-vocabulary-dataset@6859875', unexplainedDifferences: 0, knownDifferences: known.length }
  }, null, 2) + '\n');
  console.log('Parsed ' + rows.length + ' syllabus rows; per level ' + JSON.stringify(perLevel) + '; cross-check: 0 unexplained differences (' + known.length + ' documented).');
}

main().catch(error => { console.error(error.stack || error.message); process.exitCode = 1; });
