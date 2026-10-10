// Phase 5 step 2 (dry run): maps the old grammar points (grammar-hsk*.js, 530) onto the rows of the HSK 2025
// grammar syllabus (scripts/hsk2025/grammar.json, 593) and writes scripts/grammar/remap-report.md.
// Nothing in the app data changes. Manual decisions go into scripts/grammar/remap-overrides.json.
// Usage: node scripts/grammar/remap.cjs
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const enrich = require('../enrich/common.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const SYLLABUS = require('../hsk2025/grammar.json').rows;
const OVERRIDES_FILE = path.join(__dirname, 'remap-overrides.json');
const OVERRIDES = fs.existsSync(OVERRIDES_FILE) ? JSON.parse(fs.readFileSync(OVERRIDES_FILE, 'utf8')) : {};
const LEVEL_OF = { '1': 'HSK1', '2': 'HSK2', '3': 'HSK3', '4': 'HSK4', '5': 'HSK5', '6': 'HSK6', '7-9': 'HSK7-9' };
const RANK = { HSK1: 1, HSK2: 2, HSK3: 3, HSK4: 4, HSK5: 5, HSK6: 6, 'HSK7-9': 7, Zusatz: 8 };

function loadOldGrammar() {
  const context = {};
  context.window = context;
  for (const file of fs.readdirSync(ROOT).filter(f => /^grammar-hsk.*\.js$/.test(f)).sort()) {
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
  }
  return context.GRAMMAR_DATA;
}

const HAN = /\p{Script=Han}+/gu;
// Grammatical metalanguage of the syllabus patterns (主语+把+宾语+动词): placeholders, not words to match.
const META = new Set(('动词 形容词 名词 代词 数词 量词 主语 宾语 状语 定语 补语 谓语 处所 处所词 所处 人 物 人称代词 心理动词 动词短语 ' +
  '数量短语 名词性短语 数量补语 动量补语 时量补语 结果补语 趋向补语 状态补语 程度补语 其他成分 施事 非生物体 动作者 动词性词语 ' +
  '固定短语 主谓短语 动态助词 某个时间点 表示 用').split(' '));
const SUPER = /[¹²³⁴⁵⁶⁷⁸⁹]/g;
// Chinese tokens of a pattern in order, each a set of alternatives: "虽然...但是/可是..." → [[虽然], [但是, 可是]].
// German annotations, Latin placeholders (Verb, Adj, X, A) and parentheses with optional parts are dropped.
function tokens(text) {
  const clean = String(text)
    .replace(SUPER, '')
    .replace(/（[^）]*[A-Za-zÄÖÜäöü][^）]*）|\([^)]*[A-Za-zÄÖÜäöü][^)]*\)/g, ' ')
    .replace(/[（(]([^）)]*)[）)]/g, '$1')
    .replace(/\.\.\.|…+|——|—/g, ' … ');
  const groups = clean.split(/[\s…，,、；;：:？?！!+＋=]+|[A-Za-zÄÖÜäöü₁₂]+|\d+/).filter(Boolean);
  return groups.map(g => g.split('/').map(s => (s.match(HAN) || []).join('')).filter(s => s && !META.has(s)))
    .filter(alts => alts.length);
}
const flat = toks => toks.map(alts => alts[0]).join('…');

// Word-list rows ("非常、很、太…", "（1）专用名量词：本、个…") list words; other rows are one pattern.
function rowWords(row) {
  const body = row.content.replace(/^（\d）/, '').replace(/^[^：]*：/, '');
  if (!/、/.test(body) && row.category !== '词类' && row.category !== '语素') return null;
  return body.split('、').map(w => w.replace(SUPER, '').replace(/[（）()]/g, '').replace(/—/g, '')).filter(Boolean);
}
function rowSenses(row) {
  return (row.content.match(/\p{Script=Han}+[¹²³⁴⁵⁶⁷⁸⁹]/gu) || []);
}

// Does the old pattern's token sequence occur in the row (in order, any alternative)?
function inOrder(oldToks, rowToks) {
  let i = 0;
  for (const alts of rowToks) {
    if (i < oldToks.length && oldToks[i].some(o => alts.some(r => r === o || r.includes(o) && o.length > 1))) i++;
  }
  return i === oldToks.length;
}

function main() {
  const old = loadOldGrammar();
  const vocab = new Set(enrich.loadSources().flatMap(s => s.items).map(i => i.word));
  const rows = SYLLABUS.map(row => ({ ...row, level: LEVEL_OF[row.level], toks: tokens(row.content || row.item), words: rowWords(row) }));

  if (old.every(point => OVERRIDES[point.id])) return decisionReport(old, rows);
  const matches = [];
  for (const point of old) {
    const toks = tokens(point.pattern);
    if (!toks.length) { matches.push({ point, kind: 'none', rows: [] }); continue; }
    const single = toks.length === 1 ? toks[0] : null;
    // 1. A word of a word-list row, or a “X”字句 row, for single words (是 → “是”字句1, 不 → 否定副词).
    const inList = single ? rows.filter(r => r.words && r.words.some(w => single.includes(w)) ||
      single.some(w => r.item.replace(SUPER, '').startsWith('“' + w + '”'))) : [];
    // 2. Frame/pattern rows with the same token sequence (two or more tokens).
    const frame = toks.length > 1 ? rows.filter(r => !r.words && r.toks.length === toks.length && inOrder(toks, r.toks)) : [];
    // 3. Pattern rows containing the tokens (a longer frame).
    const partOf = rows.filter(r => !r.words && !frame.includes(r) && !inList.includes(r) && inOrder(toks, r.toks));
    if (inList.length) matches.push({ point, kind: 'word', rows: inList });
    else if (frame.length) matches.push({ point, kind: 'frame', rows: frame });
    else if (partOf.length) matches.push({ point, kind: 'part', rows: partOf });
    else {
      const word = flat(toks).replace(/…/g, '');
      const inVocab = toks.length === 1 && vocab.has(word);
      matches.push({ point, kind: inVocab ? 'vocab' : 'none', rows: [] });
    }
  }

  // Report.
  const out = [];
  const count = k => matches.filter(m => m.kind === k).length;
  const lvl = m => m.rows.length ? m.rows.map(r => r.level).sort((a, b) => RANK[a] - RANK[b])[0] : null;
  out.push('# Grammar remap — dry run', '',
    'Generated by `scripts/grammar/remap.cjs`. Old points: ' + old.length + '; syllabus rows: ' + rows.length + '.', '',
    '| Match | Points | Meaning |', '|---|---|---|',
    '| frame | ' + count('frame') + ' | same pattern as a syllabus row |',
    '| word | ' + count('word') + ' | a word inside a syllabus word-list row (程度副词 非常、很…) |',
    '| part | ' + count('part') + ' | part of a longer syllabus pattern |',
    '| vocab | ' + count('vocab') + ' | not in the syllabus, but a vocabulary word → removed from grammar |',
    '| none | ' + count('none') + ' | not in the syllabus → Zusatz |', '');
  const moved = matches.filter(m => m.rows.length && lvl(m) !== m.point.level);
  out.push('Matched points at a different official level: ' + moved.length + ' of ' + matches.filter(m => m.rows.length).length + '.', '');
  const covered = new Set(matches.flatMap(m => m.rows.map(r => r.no)));
  out.push('Syllabus rows with an old point: ' + covered.size + ' of ' + rows.length + '.', '');
  const perLevel = {};
  for (const r of rows) { perLevel[r.level] = perLevel[r.level] || [0, 0]; perLevel[r.level][0]++; if (covered.has(r.no)) perLevel[r.level][1]++; }
  out.push('| Level | Rows | with old point |', '|---|---|---|', ...Object.entries(perLevel).map(([l, [n, c]]) => '| ' + l + ' | ' + n + ' | ' + c + ' |'), '');

  const rowLabel = r => '#' + r.no + ' ' + r.level + ' ' + [r.categoryName, r.item].filter(Boolean).join('/') + ': ' + (r.content || '(' + r.item + ')');
  for (const kind of ['frame', 'word', 'part', 'vocab', 'none']) {
    out.push('## ' + kind, '');
    for (const m of matches.filter(x => x.kind === kind)) {
      const target = lvl(m);
      out.push('- `' + m.point.id + '` ' + m.point.level + (target && target !== m.point.level ? ' → **' + target + '**' : '') +
        (m.rows.length ? ' — ' + m.rows.slice(0, 3).map(rowLabel).join(' · ') + (m.rows.length > 3 ? ' · +' + (m.rows.length - 3) : '') : ''));
    }
    out.push('');
  }
  out.push('## Syllabus rows without an old point', '');
  for (const r of rows.filter(r => !covered.has(r.no))) out.push('- ' + rowLabel(r));
  fs.writeFileSync(path.join(__dirname, 'remap-report.md'), out.join('\n') + '\n');
  console.log(['frame', 'word', 'part', 'vocab', 'none'].map(k => k + ' ' + count(k)).join(', ') + '; moved ' + moved.length + '; rows covered ' + covered.size + '/' + rows.length);
}

// The new grammar structure from the reviewed decisions (remap-overrides.json, one entry per old id):
// one point per pattern row, one overview point per word-list row, one point per mapped function word
// (row + word), one Zusatz point per kept old point outside the syllabus; removed points disappear.
// The words of a word-list row as printed (都¹, 没（有）, 小—), for word point keys.
const listed = row => row.content.replace(/^（\d）/, '').replace(/^[^：]*：/, '').split('、').filter(Boolean);

function plan(old, rows) {
  const points = new Map();
  const add = (key, init) => { if (!points.has(key)) points.set(key, Object.assign({ old: [] }, init)); return points.get(key); };
  // Word lists of one or two words (可以; 会、能) are word points only; longer lists also get a class overview.
  for (const r of rows) {
    if (!r.words) add('row:' + r.no, { kind: 'pattern', level: r.level, row: r });
    else if (listed(r).length > 2) add('list:' + r.no, { kind: 'overview', level: r.level, row: r });
    else for (const word of listed(r)) add('word:' + r.no + ':' + word, { kind: 'word', level: r.level, row: r, word });
  }
  const removed = [], problems = [];
  for (const point of old) {
    const d = OVERRIDES[point.id];
    if (d.kind === 'remove') { removed.push({ point, d }); continue; }
    if (d.kind === 'zusatz') { add('zusatz:' + point.id, { kind: 'zusatz', level: 'Zusatz' }).old.push(point); continue; }
    // A duplicate of an old point outside the syllabus joins that point's Zusatz entry.
    if (d.into) { add('zusatz:' + d.into, { kind: 'zusatz', level: 'Zusatz' }).old.push(point); continue; }
    const row = rows[d.row - 1];
    if (!row) { problems.push(point.id + ': row ' + d.row + ' does not exist'); continue; }
    if (d.word) {
      const word = d.word.replace(/\s/g, '');
      add('word:' + row.no + ':' + word, { kind: 'word', level: row.level, row, word }).old.push(point);
    } else if (row.words && listed(row).length === 1) add('word:' + row.no + ':' + listed(row)[0], {}).old.push(point);
    else if (row.words && listed(row).length === 2) problems.push(point.id + ': row ' + row.no + ' lists two words, decision names none');
    else add((row.words ? 'list:' : 'row:') + row.no, {}).old.push(point);
  }
  return { points: [...points.values()], removed, problems };
}

function decisionReport(old, rows) {
  const { points, removed, problems } = plan(old, rows);
  const levels = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9', 'Zusatz'];
  const kinds = ['pattern', 'overview', 'word', 'zusatz'];
  const out = ['# Grammar remap — dry run', '',
    'Generated by `scripts/grammar/remap.cjs` from the reviewed decisions in `scripts/grammar/remap-overrides.json`.',
    'Old points: ' + old.length + '; syllabus rows: ' + rows.length + '. Nothing in the app data has changed yet.', '',
    '## New structure', '',
    '| Level | ' + kinds.join(' | ') + ' | total | with old content |', '|---|' + kinds.map(() => '---|').join('') + '---|---|'];
  for (const level of levels) {
    const at = points.filter(p => p.level === level);
    if (!at.length) continue;
    out.push('| ' + level + ' | ' + kinds.map(k => at.filter(p => p.kind === k).length).join(' | ') + ' | ' + at.length + ' | ' +
      at.filter(p => p.old.length).length + ' |');
  }
  out.push('| **all** | ' + kinds.map(k => points.filter(p => p.kind === k).length).join(' | ') + ' | ' + points.length + ' | ' +
    points.filter(p => p.old.length).length + ' |', '');
  const fate = {};
  for (const point of old) fate[OVERRIDES[point.id].kind] = (fate[OVERRIDES[point.id].kind] || 0) + 1;
  const kept = points.flatMap(p => p.old.map(o => ({ o, p })));
  const moved = kept.filter(({ o, p }) => p.level !== 'Zusatz' && p.level !== o.level);
  out.push('Old points: ' + Object.entries(fate).map(([k, n]) => k + ' ' + n).join(', ') + '. Kept at a new official level: ' +
    moved.length + '; merged (several old points → one new point): ' + points.filter(p => p.old.length > 1).length + ' new points.', '');
  if (problems.length) out.push('**Problems:** ' + problems.join('; '), '');
  const label = p => p.kind === 'zusatz' ? p.old.map(o => o.pattern).join(' / ') : p.kind === 'word' ? p.word + ' (#' + p.row.no + ' ' + (p.row.item || p.row.categoryName) + ')'
    : '#' + p.row.no + ' ' + [p.row.categoryName, p.row.item].filter(Boolean).join('/') + ': ' + (p.row.content || '(' + p.row.item + ')');
  out.push('## Removed from grammar (' + removed.length + ')', '', ...removed.map(({ point, d }) => '- ' + point.pattern + ' (' + point.level + ') — ' + (d.note || '')), '');
  out.push('## Zusatz (' + points.filter(p => p.kind === 'zusatz').length + ')', '',
    ...points.filter(p => p.kind === 'zusatz').map(p => '- ' + p.old[0].pattern + ' (' + p.old[0].level + ')' + (OVERRIDES[p.old[0].id].note ? ' — ' + OVERRIDES[p.old[0].id].note : '')), '');
  out.push('## Merges', '', ...points.filter(p => p.old.length > 1).map(p => '- ' + label(p) + ' ← ' + p.old.map(o => o.pattern + ' (' + o.level + ')').join(', ')), '');
  out.push('## Level changes', '', ...moved.map(({ o, p }) => '- ' + o.pattern + ': ' + o.level + ' → ' + p.level + ' — ' + label(p)), '');
  out.push('## Word points', '', ...points.filter(p => p.kind === 'word').map(p => '- ' + p.level + ' ' + label(p) + ' ← ' + p.old.map(o => o.pattern).join(', ')), '');
  out.push('## New points without old content', '');
  for (const level of levels) {
    const fresh = points.filter(p => p.level === level && !p.old.length);
    if (fresh.length) out.push('### ' + level + ' (' + fresh.length + ')', '', ...fresh.map(p => '- ' + label(p)), '');
  }
  fs.writeFileSync(path.join(__dirname, 'remap-report.md'), out.join('\n') + '\n');
  console.log('points ' + points.length + ' (' + kinds.map(k => k + ' ' + points.filter(p => p.kind === k).length).join(', ') + '); removed ' +
    removed.length + '; moved ' + moved.length + (problems.length ? '; PROBLEMS ' + problems.length : ''));
}

if (require.main === module) main();
module.exports = { tokens, rowWords, rowSenses, plan };
