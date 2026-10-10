// Parses the grammar lists (语法大纲) of the HSK 2025 syllabus PDF into scripts/hsk2025/grammar.json: one row per
// content cell of the four-column tables (类别 | 类别名称 | 细目 | 语法内容) of each level.
// The tables use merged, vertically centred cells, so rows come from the drawn table rules (thin filled
// rectangles), not from the text: a horizontal rule starts at the column where a cell boundary begins.
// Sense numbers (呢¹ 呢² …) are separate small glyphs above the line; they are re-attached as superscripts.
// Usage: node scripts/hsk2025/parse-grammar.cjs
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { loadPdf, pageItems, lines } = require('./pdf-text.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const PDF = path.join(ROOT, '.content-cache', 'sources', 'hsk2025-syllabus.pdf');
const LEVEL_NAMES = { '一': '1', '二': '2', '三': '3', '四': '4', '五': '5', '六': '6', '七': '7-9' };
const SUPERSCRIPT = { 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const COLUMNS = ['category', 'categoryName', 'item', 'content'];
// Rows per level (content cells, plus points named only in 细目), checked against the printed tables 2026-10-10.
const EXPECTED = { '1': 70, '2': 78, '3': 96, '4': 95, '5': 70, '6': 50, '7-9': 134 };

// Table rules of a page: horizontal [x0, y, x1] and vertical [x, y0, y1], in the same top-down coordinates as the text.
async function rules(document, pageNumber, OPS) {
  const page = await document.getPage(pageNumber);
  const ops = await page.getOperatorList();
  const horizontal = [], vertical = [];
  ops.fnArray.forEach((fn, i) => {
    if (fn !== OPS.constructPath) return;
    const [pathOps, coords] = ops.argsArray[i];
    if (pathOps.length !== 1 || pathOps[0] !== OPS.rectangle) return;
    const [x, y, w, h] = coords;
    if (Math.abs(h) < 1.5 && w > 5) horizontal.push([x, y + h / 2, x + w]);
    else if (Math.abs(w) < 1.5 && Math.abs(h) > 5) vertical.push([x + w / 2, Math.min(y, y + h), Math.max(y, y + h)]);
  });
  return { horizontal, vertical };
}

// Text of a cell: lines top to bottom, glyphs left to right, sense numbers attached to the glyph they follow.
function cellText(items) {
  const small = items.filter(i => i.size < 9 && /^\d$/.test(i.str));
  const normal = items.filter(i => !small.includes(i));
  const text = [];
  for (const line of lines(normal, 3)) {
    let s = '';
    for (const item of line.items) {
      s += item.str;
      const sup = small.find(m => !m.used && Math.abs(m.x - (item.x + item.width)) < 4 && m.y < line.y && line.y - m.y < 14);
      if (sup) { s += SUPERSCRIPT[sup.str]; sup.used = true; }
    }
    text.push(s);
  }
  const lost = small.filter(m => !m.used);
  assert(!lost.length, 'Unplaced sense number(s) ' + lost.map(m => m.str + '@' + m.x.toFixed(0) + ',' + m.y.toFixed(0)).join(' '));
  return text;
}

// Lines of a content cell join directly (wrapped text, often mid-word: 她/们). Two cells hold two lines that are
// separate statements or list parts without a separator in the print; one has a typo (所处 for 处所).
const LINE_FIXES = [['作状语表示时间', '作状语；表示时间'], ['头、句公斤', '头、句、公斤'], ['所处+是+名词', '处所+是+名词']];
function joinLines(text) {
  return LINE_FIXES.reduce((s, [from, to]) => s.replace(from, to), text.join(''));
}

async function main() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const OPS = pdfjs.OPS;
  const doc = await loadPdf(PDF);
  let start = 0;
  for (let p = doc.numPages; p > 0 && !start; p--) {
    const text = (await pageItems(doc, p)).map(i => i.str).join('');
    if (text.includes('语法大纲') && !text.includes('级）')) start = p + 1;
  }
  assert(start, 'Grammar section not found');

  // Cells per page: for each column the bands between the rules crossing it.
  const pages = [];
  let level = null;
  for (let p = start; p <= doc.numPages; p++) {
    const items = (await pageItems(doc, p)).filter(i => !i.rotated && i.y < 805);
    const heading = lines(items).find(l => /HSK（[一二三四五六七]/.test(l.items.map(i => i.str).join('')) && /语法/.test(l.items.map(i => i.str).join('')));
    if (heading) {
      const m = heading.items.map(i => i.str).join('').match(/HSK（([一二三四五六七])/);
      level = LEVEL_NAMES[m[1]];
    }
    assert(level, 'No level heading before page ' + p);
    const { horizontal, vertical } = await rules(doc, p, OPS);
    const xs = [...new Set(vertical.map(v => Math.round(v[0] * 10) / 10))].sort((a, b) => a - b);
    assert.strictEqual(xs.length, 5, 'page ' + p + ': ' + xs.length + ' vertical rules');
    const columns = COLUMNS.map((name, c) => {
      const left = xs[c], right = xs[c + 1];
      const ys = [...new Set(horizontal.filter(h => h[0] <= left + 1 && h[2] >= right - 1).map(h => Math.round(h[1] * 10) / 10))].sort((a, b) => a - b);
      const top = Math.min(...vertical.map(v => v[1])), bottom = Math.max(...vertical.map(v => v[2]));
      const edges = [...new Set([top, ...ys, bottom].map(y => Math.round(y * 10) / 10))].sort((a, b) => a - b);
      const cells = [];
      for (let i = 0; i + 1 < edges.length; i++) {
        const y0 = edges[i], y1 = edges[i + 1];
        if (y1 - y0 < 3) continue;
        const inside = items.filter(it => it.x >= left - 1 && it.x < right - 1 && it.y - it.size * 0.35 > y0 && it.y - it.size * 0.35 < y1);
        cells.push({ y0, y1, text: cellText(inside), openTop: i === 0 && !ys.some(y => Math.abs(y - top) < 1), openBottom: i + 2 === edges.length && !ys.some(y => Math.abs(y - bottom) < 1) });
      }
      return cells;
    });
    // The header row (类别 | 类别名称 | 细目 | 语法内容) is not data.
    const isHeader = cell => cell.text.join('').replace(/\s/g, '') === '语法内容';
    const headerBottom = (columns[3].find(isHeader) || {}).y1 || null;
    columns.forEach(cells => { if (headerBottom) for (let i = cells.length - 1; i >= 0; i--) if (cells[i].y1 <= headerBottom + 0.5) cells.splice(i, 1); });
    if (process.env.DEBUG_PAGE == p) columns.forEach((cells, c) => console.log(COLUMNS[c], JSON.stringify(cells.map(x => [Math.round(x.y0), Math.round(x.y1), x.text.join('')]))));
    pages.push({ page: p, level, columns });
  }

  // A merged label cell can be split by a page break, with its text on either half: the last cell of a column on
  // one page and the first cell on the next are one logical cell when one half is empty, and only when the cells to
  // their left are continued too (a new 类别 ends every nested cell; empty 类别名称/细目 cells exist on purpose).
  for (let i = 0; i + 1 < pages.length; i++) {
    if (pages[i].level !== pages[i + 1].level) continue;
    for (let c = 0; c < 3; c++) {
      const a = pages[i].columns[c][pages[i].columns[c].length - 1];
      const b = pages[i + 1].columns[c][0];
      if (!a || !b || (a.text.length && b.text.length) || (!a.text.length && !b.text.length && c > 0)) break;
      const text = a.text.length ? a.text : b.text;
      a.text = text;
      b.text = text;
    }
  }

  const rows = [];
  const counter = {};
  for (const { page, level: lvl, columns } of pages) {
    for (const content of columns[3]) {
      const mid = (content.y0 + content.y1) / 2;
      const label = c => { const cell = columns[c].find(x => mid > x.y0 && mid < x.y1); return cell ? cell.text.join('') : ''; };
      // Some points have no content text, only their name in 细目 (陈述句, 名词性短语, 不用关联词语的复句).
      if (!content.text.length && !label(2)) continue;
      counter[lvl] = (counter[lvl] || 0) + 1;
      rows.push({ no: rows.length + 1, level: lvl, category: label(0), categoryName: label(1), item: label(2),
        content: joinLines(content.text), page });
    }
  }
  // Labels missing because the merged cell started above the header of a later page: inherit from the row above
  // within the same level (category and categoryName are always filled in the printed table).
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].level !== rows[i - 1].level) continue;
    if (!rows[i].category) rows[i].category = rows[i - 1].category;
    if (!rows[i].categoryName && rows[i].category === rows[i - 1].category) rows[i].categoryName = rows[i - 1].categoryName;
  }
  // The 补语 label of 程度补语2/可能补语2 (level 4) is not printed in the page part that holds them.
  for (const row of rows) if (!row.categoryName && row.category === '句子成分' && /补语\d/.test(row.item)) row.categoryName = '补语';
  for (const row of rows) assert(row.category, 'row without category: ' + JSON.stringify(row));
  assert.deepStrictEqual(counter, EXPECTED, 'rows per level differ: ' + JSON.stringify(counter));
  console.log('rows per level', JSON.stringify(counter), 'total', rows.length);
  fs.writeFileSync(path.join(__dirname, 'grammar.json'), JSON.stringify({
    source: 'HSK 考试大纲 (中外语言交流合作中心, 2025-11 发布, 2026-07 实施), 语法大纲',
    rows
  }, null, 0).replace(/\{"no"/g, '\n{"no"').replace(/\]\}$/, '\n]}') + '\n');
}

main().catch(error => { console.error(error); process.exit(1); });
