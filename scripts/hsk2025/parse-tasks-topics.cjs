// Parses the task lists (任务大纲) and topic lists (话题大纲) of the HSK 2025 syllabus PDF into
// scripts/hsk2025/tasks.json and scripts/hsk2025/topics.json — the basis of the reading and listening units.
// Tasks are running text: a numbered heading (一、问答个人基本信息) followed by bullet descriptors (能听懂…, 能看懂…);
// HSK 7–9 groups its tasks into scenes (生活和社交场景 …). Topics are a three-column table (一级 | 二级 | 三级话题)
// whose merged cells are rebuilt from the drawn table rules, as in parse-grammar.cjs.
// Usage: node scripts/hsk2025/parse-tasks-topics.cjs
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { loadPdf, pageItems, lines } = require('./pdf-text.cjs');
const { rules, cellText } = require('./parse-grammar.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const PDF = path.join(ROOT, '.content-cache', 'sources', 'hsk2025-syllabus.pdf');
const LEVEL_NAMES = { '一': '1', '二': '2', '三': '3', '四': '4', '五': '5', '六': '6', '七': '7-9' };
// Tasks and third-tier topics per level, checked against the printed lists 2026-10-11.
const EXPECTED_TASKS = { '1': 15, '2': 17, '3': 22, '4': 30, '5': 28, '6': 24, '7-9': 30 };
const EXPECTED_TOPICS = { '1': 30, '2': 34, '3': 54, '4': 77, '5': 72, '6': 68, '7-9': 92 };
const NUMERAL = /^[一二三四五六七八九十]+、/;
const lineText = line => line.items.map(i => i.str).join('').trim();

// Which skills a descriptor addresses (the syllabus writes one bullet per skill, 7–9 merges 听懂、读懂).
function skillsOf(text) {
  const skills = [];
  if (/听懂|听/.test(text.slice(0, 8))) skills.push('listening');
  if (/读懂|看懂|识别|阅读|读/.test(text.slice(0, 12))) skills.push('reading');
  if (/译成/.test(text)) skills.push('translation');
  if (!skills.length) skills.push(/写/.test(text.slice(0, 20)) ? 'writing' : 'speaking');
  return skills;
}

async function parseTasks(doc, first, last) {
  const tasks = [];
  let level = null, scene = null, task = null, bullet = null;
  for (let p = first; p <= last; p++) {
    const items = (await pageItems(doc, p)).filter(i => !i.rotated && i.y < 805);
    for (const line of lines(items)) {
      const text = lineText(line);
      if (!text) continue;
      const heading = text.match(/^HSK（([一二三四五六七])[^）]*）任务$/);
      if (heading) { level = LEVEL_NAMES[heading[1]]; scene = null; task = null; bullet = null; continue; }
      if (!level) continue;
      const x = line.items[0].x;
      if (x < 92 && /场景$/.test(text) && text.length <= 10) { scene = text; task = null; bullet = null; continue; }
      if (x < 92 && NUMERAL.test(text)) {
        task = { level, no: tasks.filter(t => t.level === level).length + 1, scene: scene || undefined, title: text.replace(NUMERAL, ''), descriptors: [] };
        tasks.push(task);
        bullet = null;
        continue;
      }
      if (!task) continue; // introduction before the first task
      if (x > 92 && x < 100) { // bullet glyph, then the descriptor text
        bullet = { text: line.items.filter(i => i.x > 100).map(i => i.str).join('').trim() };
        task.descriptors.push(bullet);
      } else if (x > 110 && bullet) bullet.text += text;
    }
  }
  for (const t of tasks) t.descriptors = t.descriptors.map(d => ({ skills: skillsOf(d.text), text: d.text }));
  return tasks;
}

async function parseTopics(doc, first, last, OPS) {
  const topics = [], pages = [];
  let level = null;
  for (let p = first; p <= last; p++) {
    const items = (await pageItems(doc, p)).filter(i => !i.rotated && i.y < 805);
    const heading = lines(items).map(lineText).find(t => /^HSK（[一二三四五六七][^）]*）话题$/.test(t));
    if (heading) level = LEVEL_NAMES[heading.match(/^HSK（([一二三四五六七])/)[1]];
    const { horizontal, vertical } = await rules(doc, p, OPS);
    const xs = [...new Set(vertical.map(v => Math.round(v[0] * 10) / 10))].sort((a, b) => a - b);
    if (xs.length !== 4) continue;
    const top = Math.min(...vertical.map(v => v[1])), bottom = Math.max(...vertical.map(v => v[2]));
    const columns = [0, 1, 2].map(c => {
      const left = xs[c], right = xs[c + 1];
      const ys = [...new Set(horizontal.filter(h => h[0] <= left + 1 && h[2] >= right - 1).map(h => Math.round(h[1] * 10) / 10))];
      const edges = [...new Set([top, ...ys, bottom].map(y => Math.round(y * 10) / 10))].sort((a, b) => a - b);
      const cells = [];
      for (let i = 0; i + 1 < edges.length; i++) {
        if (edges[i + 1] - edges[i] < 3) continue;
        const inside = items.filter(it => it.x >= left - 1 && it.x < right - 1 && it.y - it.size * 0.35 > edges[i] && it.y - it.size * 0.35 < edges[i + 1]);
        // The repeated header (一级话题 …) can share a band with a continued label (家庭生活二级话题).
        const text = cellText(inside).join('').replace(/[一二三]级话题/g, '');
        if (text) cells.push({ y0: edges[i], y1: edges[i + 1], text });
      }
      return cells;
    });
    pages.push({ p, level, columns });
  }
  // A merged label cell split by a page break has its text on one half only: join the last cell of a column with
  // the first cell on the next page when one half is empty and the cells to the left continue too.
  for (let i = 0; i + 1 < pages.length; i++) {
    if (pages[i].level !== pages[i + 1].level) continue;
    for (let c = 0; c < 2; c++) {
      const a = pages[i].columns[c][pages[i].columns[c].length - 1], b = pages[i + 1].columns[c][0];
      if (!a || !b || (a.text && b.text) || (!a.text && !b.text && c > 0)) break;
      a.text = b.text = a.text || b.text;
    }
  }
  for (const { p, level, columns } of pages) {
    for (const cell of columns[2]) {
      // Header row and the closing count row (15个 | 30个).
      if (!cell.text || /^[一二三]级话题$/.test(cell.text) || /^\d+个$/.test(cell.text)) continue;
      const mid = (cell.y0 + cell.y1) / 2;
      const label = c => (columns[c].find(x => mid > x.y0 && mid < x.y1) || {}).text || '';
      topics.push({ level, tier1: label(0), tier2: label(1), tier3: cell.text, page: p });
    }
  }
  // Labels still missing continue the row above (a merged cell running on from the previous page).
  for (let i = 1; i < topics.length; i++) {
    if (topics[i].level !== topics[i - 1].level) continue;
    if (!topics[i].tier1) topics[i].tier1 = topics[i - 1].tier1;
    if (!topics[i].tier2 && topics[i].tier1 === topics[i - 1].tier1) topics[i].tier2 = topics[i - 1].tier2;
  }
  // HSK 7–9, pp. 76–77: two rows sit in tier-1 cells drawn without the rule that separates them from the neighbouring
  // group (the first row of p.76 still belongs to 教育发展, the last row of p.76 already to 文学艺术), so their labels
  // are set by hand.
  const HAND = { '教育高质量发展': ['个体与社会', '教育发展'], '中国传统文化意象及在不同文学艺术形式中的表现': ['文化与传统', '文学艺术'] };
  for (const t of topics) if (t.level === '7-9' && HAND[t.tier3]) [t.tier1, t.tier2] = HAND[t.tier3];
  const unlabelled = topics.filter(t => !t.tier1 || !t.tier2);
  assert(!unlabelled.length, 'topics without tier labels: ' + unlabelled.map(t => t.tier3).join(', '));
  return topics;
}

async function main() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const doc = await loadPdf(PDF);
  const tasks = await parseTasks(doc, 5, 58);
  const counts = {};
  tasks.forEach(t => { counts[t.level] = (counts[t.level] || 0) + 1; });
  assert.deepStrictEqual(counts, EXPECTED_TASKS, 'tasks per level differ: ' + JSON.stringify(counts));
  const empty = tasks.filter(t => !t.descriptors.length);
  assert(!empty.length, 'tasks without descriptors: ' + empty.map(t => t.level + ' ' + t.title).join(', '));
  const topics = await parseTopics(doc, 59, 78, pdfjs.OPS);
  const topicCounts = {};
  topics.forEach(t => { topicCounts[t.level] = (topicCounts[t.level] || 0) + 1; });
  assert.deepStrictEqual(topicCounts, EXPECTED_TOPICS, 'topics per level differ: ' + JSON.stringify(topicCounts));
  const source = 'HSK 考试大纲 (中外语言交流合作中心, 2025-11 发布, 2026-07 实施)';
  fs.writeFileSync(path.join(__dirname, 'tasks.json'), JSON.stringify({ source: source + ', 任务大纲', tasks }, null, 1) + '\n');
  fs.writeFileSync(path.join(__dirname, 'topics.json'), JSON.stringify({ source: source + ', 话题大纲', topics }, null, 1) + '\n');
  console.log('tasks ' + JSON.stringify(counts) + '; topics (third tier) ' + JSON.stringify(topicCounts));
}

main().catch(error => { console.error(error); process.exit(1); });
