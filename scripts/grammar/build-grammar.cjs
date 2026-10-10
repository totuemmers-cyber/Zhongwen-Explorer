// Phase 5 step 3: writes the grammar data on the HSK 2025 grammar syllabus from the reviewed remap
// (scripts/grammar/remap-overrides.json, see remap.cjs): grammar-<level>.js incl. grammar-zusatz.js, and
// grammar-removed.js (old points that are vocabulary words → their vocab ids, for the bookmark migration).
// The old points are read from git (commit OLD_COMMIT), so the build is re-runnable until the enrichment
// campaign writes into the new files; their content becomes the draft of the new point (meaningStatus 'draft').
// Usage: node scripts/grammar/build-grammar.cjs [--dry-run]
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');
const enrich = require('../enrich/common.cjs');
const { plan } = require('./remap.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const OLD_COMMIT = '462b284';
const OVERRIDES = require('./remap-overrides.json');
const LEVEL_OF = { '1': 'HSK1', '2': 'HSK2', '3': 'HSK3', '4': 'HSK4', '5': 'HSK5', '6': 'HSK6', '7-9': 'HSK7-9' };
const LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9', 'Zusatz'];
const fileOf = level => 'grammar-' + level.toLowerCase() + '.js';

// German categories from the syllabus classification (类别 / 类别名称).
function categoryOf(row) {
  const { category: c, categoryName: n, item } = row;
  if (c === '语素') return 'Wortbildung';
  if (c === '词类') {
    if (n === '副词') return 'Adverbien';
    if (n === '介词') return 'Präpositionen';
    if (n === '连词') return 'Konjunktionen';
    if (n === '助词' || n === '叹词') return 'Partikeln';
    return 'Wortarten';
  }
  if (c === '短语') return n === '固定短语' ? 'Feste Muster' : 'Wortgruppen';
  if (c === '固定格式') return 'Feste Muster';
  if (c === '句子成分') return n === '补语' ? 'Komplemente' : 'Satzglieder';
  if (c === '句子的类型') {
    if (/复句/.test(n)) return 'Satzgefüge';
    if (/特殊句/.test(n)) return 'Satzmuster';
    return 'Satzarten';
  }
  if (c === '动作的态') return 'Aspekt';
  if (c === '特殊表达法') return 'Zahlen & Zeit';
  if (c.startsWith('语段')) return 'Textebene';
  throw new Error('No category for ' + JSON.stringify(row) + ' ' + item);
}
// Old categories of Zusatz points onto the new set.
const OLD_CATEGORY = { Partikel: 'Partikeln', Verben: 'Wortarten', Adjektive: 'Wortarten', Adverbien: 'Adverbien',
  Satzstrukturen: 'Satzmuster', Konjunktionen: 'Konjunktionen', 'Präpositionen': 'Präpositionen', 'Fragewörter': 'Wortarten',
  Vergleiche: 'Satzmuster', 'Zeitausdrücke': 'Zahlen & Zeit', Zeitformen: 'Aspekt', Verneinung: 'Adverbien',
  'Modalausdrücke': 'Wortarten', Resultativ: 'Komplemente', Komplemente: 'Komplemente', Rhetorisch: 'Satzarten',
  Literarisch: 'Schriftsprache' };

function oldGrammar() {
  const context = {};
  context.window = context;
  const files = execFileSync('git', ['ls-tree', '--name-only', OLD_COMMIT], { cwd: ROOT, encoding: 'utf8' })
    .split('\n').filter(f => /^grammar-hsk.*\.js$/.test(f)).sort();
  for (const file of files) {
    vm.runInNewContext(execFileSync('git', ['show', OLD_COMMIT + ':' + file], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 }), context, { filename: file });
  }
  return context.GRAMMAR_DATA;
}

const strip = s => String(s || '').replace(/^（\d）/, '').trim();
// Display pattern of a syllabus row: the 语法内容 when it is a pattern; descriptions (表示领有, （1）是非问句)
// and points named only in 细目 get the 细目 / 类别名称 in front.
function titleOf(row) {
  const content = strip(row.content);
  const label = row.item || row.categoryName || row.category;
  if (!content) return label;
  const isPattern = /……|\+|[A-Z]|—|：/.test(content) || (content.length <= 8 && !/^(表示|用)/.test(content) && !/句$|短语$/.test(content));
  return isPattern ? content : label + '：' + content;
}

function main() {
  const old = oldGrammar();
  const byOldId = new Map(old.map(p => [p.id, p]));
  const rows = require('../hsk2025/grammar.json').rows.map(r => ({ ...r, level: LEVEL_OF[r.level] }));
  // plan() needs rows with word lists like remap.cjs builds them.
  const { rowWords } = require('./remap.cjs');
  rows.forEach(r => { r.words = rowWords(r); });
  const { points, removed, problems } = plan(old, rows);
  assert(!problems.length, problems.join('\n'));

  // Ids: syllabus points get ids from their pattern/word (+ class or level where needed), Zusatz points keep
  // the old id. Old ids that would collide with a different live point are not reused as live ids.
  const oldIds = new Set(old.map(p => p.id));
  const used = new Set();
  const entries = [];
  for (const p of points) {
    const main = p.old.slice().sort((a, b) => kindRank(OVERRIDES[a.id]) - kindRank(OVERRIDES[b.id]))[0] || null;
    let pattern, id;
    if (p.kind === 'zusatz') { pattern = main.pattern; id = main.id; }
    else if (p.kind === 'word') { pattern = p.word; id = 'g:' + p.word; }
    else if (p.kind === 'overview') { pattern = p.row.item || p.row.categoryName; id = 'g:' + pattern + '@' + p.level; }
    else { pattern = titleOf(p.row); id = 'g:' + pattern; }
    if (p.kind !== 'zusatz') {
      if (used.has(id) || (oldIds.has(id) && !p.old.some(o => o.id === id))) id += '（' + (p.row.item || p.row.categoryName || p.level) + '）';
      let n = 2;
      const base = id;
      while (used.has(id) || (oldIds.has(id) && !p.old.some(o => o.id === id))) id = base + '#' + n++;
    }
    assert(!used.has(id), 'duplicate id ' + id);
    used.add(id);
    const row = p.row || null;
    const entry = {
      id, pattern, level: p.level, kind: p.kind,
      category: row ? categoryOf(row) : OLD_CATEGORY[main.category] || 'Satzmuster'
    };
    if (row) entry.syllabus = { no: row.no, category: row.category, categoryName: row.categoryName, item: row.item, content: row.content };
    if (main) {
      for (const field of ['meaning', 'pinyin', 'formation', 'explanation', 'notes']) if (main[field]) entry[field] = main[field];
      const examples = [];
      for (const o of p.old) for (const ex of o.examples || []) if (!examples.some(e => e.chinese === ex.chinese)) examples.push(ex);
      if (examples.length) entry.examples = examples;
    }
    const legacy = new Set();
    for (const o of p.old) { if (o.id !== id) legacy.add(o.id); for (const l of o.legacyIds || []) if (l !== id) legacy.add(l); }
    if (legacy.size) entry.legacyIds = [...legacy];
    entry.meaningStatus = 'draft';
    entry._oldRelated = p.old.flatMap(o => o.relatedPatterns || []);
    entries.push(entry);
  }
  // Word lists of overview points (as printed: 都¹, 没（有）).
  for (const e of entries) if (e.kind === 'overview') e.words = e.syllabus.content.replace(/^（\d）/, '').replace(/^[^：]*：/, '').split('、').filter(Boolean);

  // Related: old pattern strings → the new point that took over that old point.
  const newIdOfOld = new Map();
  for (const e of entries) for (const l of [e.id, ...(e.legacyIds || [])]) newIdOfOld.set(l, e.id);
  const byOldPattern = new Map(old.map(o => [o.pattern, o.id]));
  for (const e of entries) {
    const related = [...new Set(e._oldRelated.map(r => newIdOfOld.get(byOldPattern.get(r))).filter(r => r && r !== e.id))];
    if (related.length) e.related = related;
    delete e._oldRelated;
  }

  // Removed points → vocab ids (bookmark migration).
  const vocab = enrich.loadSources().flatMap(s => s.items);
  const RANK = Object.fromEntries(LEVELS.map((l, i) => [l, i]));
  const removedMap = {};
  for (const { point } of removed) {
    const words = point.pattern.match(/\p{Script=Han}+/gu) || [];
    const hits = vocab.filter(v => words.includes(v.word)).sort((a, b) => (RANK[a.level] ?? 9) - (RANK[b.level] ?? 9));
    assert(hits.length, 'removed point without vocab entry: ' + point.id);
    for (const l of [point.id, ...(point.legacyIds || [])]) removedMap[l] = hits[0].id;
  }

  // Order within a level: syllabus order, then Zusatz in old order.
  entries.sort((a, b) => (RANK[a.level] - RANK[b.level]) || ((a.syllabus ? a.syllabus.no : 9999) - (b.syllabus ? b.syllabus.no : 9999)));
  const summary = LEVELS.map(l => l + ' ' + entries.filter(e => e.level === l).length).join(', ');
  console.log('grammar points ' + entries.length + ' (' + summary + '); removed → vocab ' + Object.keys(removedMap).length + ' ids' + (DRY ? ' (dry run)' : ''));
  if (DRY) return;
  for (const file of fs.readdirSync(ROOT).filter(f => /^grammar-hsk.*\.js$/.test(f))) fs.unlinkSync(path.join(ROOT, file));
  for (const level of LEVELS) {
    fs.writeFileSync(path.join(ROOT, fileOf(level)),
      '// Zhongwen Explorer grammar, ' + level + ': points of the HSK 2025 grammar syllabus (语法大纲, scripts/hsk2025/grammar.json)' +
      (level === 'Zusatz' ? ' — here: further points outside the syllabus' : '') + '.\n// Built by scripts/grammar/build-grammar.cjs; content by the enrichment campaign.\n' +
      'window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat(' + JSON.stringify(entries.filter(e => e.level === level), null, 2) + ');\n');
  }
  fs.writeFileSync(path.join(ROOT, 'grammar-removed.js'),
    '// Old grammar points that are vocabulary words (removed 2026-10-10): old id → vocab id, so bookmarks move along.\n' +
    'window.GRAMMAR_REMOVED = ' + JSON.stringify(removedMap, null, 1) + ';\n');
}

// Which old point leads a merged new point: row/word decisions before merges.
function kindRank(d) { return { row: 0, word: 0, zusatz: 1, merge: 2 }[d.kind] ?? 3; }

main();
