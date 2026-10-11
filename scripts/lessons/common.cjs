// Shared helpers for the grammar lessons (grammar-lessons.js): loading the raw lesson objects, the lesson file format,
// grammar point keys, level labels and the language checks used by link.cjs and validate.cjs.
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const grammarCommon = require('../grammar/common.cjs');
const { tokens } = require('../grammar/remap.cjs');

const ROOT = grammarCommon.ROOT;
const LESSONS_FILE = path.join(ROOT, 'grammar-lessons.js');
const LEDGER = path.join(__dirname, 'ledger.json');

const RANK = { HSK1: 1, HSK2: 2, HSK3: 3, HSK4: 4, HSK5: 5, HSK6: 6, 'HSK7-9': 7, Zusatz: 8 };
const LEVEL_OF_RANK = { 1: 'HSK1', 2: 'HSK2', 3: 'HSK3', 4: 'HSK4', 5: 'HSK5', 6: 'HSK6', 7: 'HSK7-9' };
// The lessons engine filters by lesson.level.split('/') and sorts by LEVEL_DISPLAY_ORDER; these are the labels it knows.
const ENGINE_LEVELS = ['HSK1', 'HSK1/HSK2', 'HSK2', 'HSK2/HSK3', 'HSK3', 'HSK3/HSK4', 'HSK4', 'HSK4/HSK5', 'HSK5', 'HSK5/HSK6', 'HSK6', 'HSK7-9'];
const HAN = /\p{Script=Han}/u;
const HAN_RUNS = /\p{Script=Han}+/gu;
const SUPER = /[¹²³⁴⁵⁶⁷⁸⁹]/g;

// ── Lesson file ─────────────────────────────────────────────────────────────
// The LESSONS array literal of grammar-lessons.js, evaluated on its own: the raw lessons in file order, before the
// engine sorts, renumbers and resolves [[lesson:…]] placeholders.
const ARRAY_START = /var LESSONS = \[/;
const ARRAY_END = /\r?\n  \];\r?\n/;
function lessonsSource(text = fs.readFileSync(LESSONS_FILE, 'utf8')) {
  const start = text.search(ARRAY_START);
  if (start === -1) throw new Error('var LESSONS = [ not found in grammar-lessons.js');
  const open = text.indexOf('[', start);
  const rest = text.slice(open);
  const end = rest.search(ARRAY_END);
  if (end === -1) throw new Error('end of the LESSONS array not found in grammar-lessons.js');
  return { text, open, close: open + end, literal: rest.slice(0, end) + '\n]' };
}
function loadLessons(text) {
  return vm.runInNewContext('(' + lessonsSource(text).literal + ')', {}, { filename: 'grammar-lessons.js' });
}
// Display order of the engine: level label, then authored number, then file order.
function displayOrder(lessons) {
  const rank = l => { const i = ENGINE_LEVELS.indexOf(l.level); return i === -1 ? 99 : i; };
  return lessons.map((l, i) => ({ l, i })).sort((a, b) => rank(a.l) - rank(b.l) || a.l.number - b.l.number || a.i - b.i).map(x => x.l);
}

// A lesson as a JS object literal in the style of the file (unquoted keys, JSON strings).
const LESSON_FIELDS = ['id', 'number', 'title', 'subtitle', 'level', 'grammarIds', 'intro', 'sections'];
function serializeLesson(lesson, eol = '\r\n') {
  const q = s => JSON.stringify(s);
  const L = [];
  L.push('    {');
  L.push("      id: '" + lesson.id + "',");
  L.push('      number: ' + lesson.number + ',');
  L.push('      title: ' + q(lesson.title) + ',');
  L.push('      subtitle: ' + q(lesson.subtitle) + ',');
  L.push("      level: '" + lesson.level + "',");
  L.push('      grammarIds: ' + JSON.stringify(lesson.grammarIds) + ',');
  L.push('      intro: ' + q(lesson.intro) + ',');
  L.push('      sections: [');
  lesson.sections.forEach((s, si) => {
    L.push('        {');
    L.push('          heading: ' + q(s.heading) + ',');
    L.push('          text: ' + q(s.text) + ',');
    L.push('          examples: [');
    s.examples.forEach((e, ei) => L.push('            { cn: ' + q(e.cn) + ', pinyin: ' + q(e.pinyin || '') + ', de: ' + q(e.de) + ' }' + (ei < s.examples.length - 1 ? ',' : '')));
    L.push('          ]' + (s.tip ? ',' : ''));
    if (s.tip) L.push('          tip: ' + q(s.tip));
    L.push('        }' + (si < lesson.sections.length - 1 ? ',' : ''));
  });
  L.push('      ]');
  L.push('    }');
  return L.join(eol);
}
// Appends lessons at the end of the LESSONS array.
function appendLessons(text, lessons) {
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const src = lessonsSource(text);
  const before = text.slice(0, src.close).replace(/\s*$/, '');
  const blocks = lessons.map(l => '    // ── ' + l.title.replace(/<[^>]+>/g, '') + ' (' + l.id + ') ' + '─'.repeat(10) + eol + serializeLesson(l, eol));
  return before + ',' + eol + blocks.join(',' + eol) + text.slice(src.close);
}

// The content a lesson's review covers; its hash is recorded in scripts/lessons/ledger.json.
const HASHED_FIELDS = ['title', 'subtitle', 'level', 'grammarIds', 'intro', 'sections'];
function contentHash(lesson) {
  const content = {};
  for (const field of HASHED_FIELDS) if (lesson[field] !== undefined) content[field] = lesson[field];
  return crypto.createHash('sha256').update(JSON.stringify(content)).digest('hex').slice(0, 16);
}

// ── Levels ──────────────────────────────────────────────────────────────────
const levelRanks = level => level.split('/').map(l => RANK[l]);
function levelFrom(ids, byId) {
  const ranks = ids.map(id => RANK[byId.get(id).level]).filter(r => r <= 7);
  if (!ranks.length) return { level: null, wide: false };
  const lo = Math.min(...ranks), hi = Math.max(...ranks);
  if (lo === hi) return { level: LEVEL_OF_RANK[lo], wide: false };
  return { level: LEVEL_OF_RANK[lo] + '/' + LEVEL_OF_RANK[hi], wide: hi - lo > 1 };
}
const levelLabel = level => level.replace(/HSK/g, 'HSK ');
// 'HSK2/HSK3' → 'HSK 2–3'
function rangeLabel(level) {
  const parts = level.split('/');
  if (parts.length === 1) return levelLabel(level);
  return 'HSK ' + parts.map(p => p.replace('HSK', '')).join('–');
}

// ── Grammar point keys ──────────────────────────────────────────────────────
// Words of a word point: 有（一）点儿 → 有一点儿, 有点儿; 得（能愿动词） → 得 (a label in brackets is dropped).
function wordVariants(pattern) {
  const w = pattern.replace(SUPER, '').replace(/—/g, '');
  const m = w.match(/（([^）]*)）/);
  if (!m) return [w];
  if (m[1].length > 2 || /词|用法|引出/.test(m[1])) return [w.replace(/（[^）]*）/g, '')];
  return [w.replace(/（([^）]*)）/g, '$1'), w.replace(/（[^）]*）/g, '')].filter((x, i, a) => x && a.indexOf(x) === i);
}
// Words listed in an overview row (程度副词：很、太、真、非常、有点儿).
function overviewWords(entry) {
  const content = (entry.syllabus && entry.syllabus.content) || '';
  return content.replace(/（\d+）[^：]*：/g, '、').replace(/^[^：]*：/, '').split(/[、，,]/)
    .map(w => w.replace(SUPER, '').replace(/[（）()—]/g, '').trim()).filter((w, i, a) => w && HAN.test(w) && !/[A-Za-z]/.test(w) && a.indexOf(w) === i);
}
// How to recognise a point in a text: groups of alternative words in order, a word list (overviews), or none
// (descriptive points such as 主谓句1 or 多重复句, and affixes).
function keysOf(entry) {
  if (entry.kind === 'overview') return { type: 'list', words: overviewWords(entry) };
  if (entry.kind === 'word') {
    if (/—/.test(entry.pattern)) return { type: 'affix', affix: entry.pattern.replace(/—/g, '').replace(SUPER, '') };
    return { type: 'groups', groups: [wordVariants(entry.pattern)] };
  }
  let groups = entry.kind === 'zusatz' ? tokens(entry.pattern) : grammarCommon.requiredTokens(entry);
  if (!groups.length) {
    const bare = entry.pattern.replace(SUPER, '').replace(/（[^）]*）/g, '');
    if (/^\p{Script=Han}+$/u.test(bare) && !/句|短语|语$|法$|顺序|省略|话题|标记/.test(bare)) groups = [[bare]];
  }
  return groups.length ? { type: 'groups', groups } : { type: 'none' };
}
// Example sentences / texts: the groups in order as substrings.
function groupsInText(groups, text) {
  let pos = 0;
  for (const alts of groups) {
    let best = -1, len = 0;
    for (const alt of alts) {
      const at = text.indexOf(alt, pos);
      if (at !== -1 && (best === -1 || at < best || (at === best && alt.length > len))) { best = at; len = alt.length; }
    }
    if (best === -1) return false;
    pos = best + len;
  }
  return true;
}
const runsOf = text => String(text || '').match(HAN_RUNS) || [];
const stripHtml = s => String(s || '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');

// ── Language checks ─────────────────────────────────────────────────────────
// Role nouns that fix a gender in German. A sentence may keep one when the Chinese shows the gender (他, 她, 女, 男,
// 妈妈 …) or when both forms are given (Chinese/Chinesin).
const MASC_ROLE = /\b(Student|Studenten|Lehrer|Schüler|Arzt|Ärzte|Chinese|Chinesen|Japaner|Deutscher|Ausländer|Freund|Freunde|Kollege|Kollegen|Muttersprachler|Sprecher|Klassensprecher|Anfänger|Kunde|Kunden|Chef|Verkäufer|Kellner|Nachbar|Nachbarn)\b/;
const PROSE_MASC = /\b(deutsche[nr]? Muttersprachler|Muttersprachler|der Sprecher|vom Sprecher|zum Sprecher|des Sprechers|Gesprächspartner|Anfänger(?:fehler)?)\b/g;
const GENDER_SHOWN = /[他她男女]|妈妈|爸爸|哥哥|姐姐|弟弟|妹妹|丈夫|妻子|儿子|女儿|先生|太太|小姐|奶奶|爷爷/;
// German role noun for a person whose gender the Chinese does not show.
function genderIssue(cn, de) {
  const role = de.replace(/\(.*?\)/g, '').match(MASC_ROLE);
  if (!role) return null;
  if (new RegExp(role[0] + 'in(nen)?\\b|' + role[0] + '/|/' + role[0] + '|' + role[0] + '\\*').test(de)) return null;
  if (GENDER_SHOWN.test(cn.replace(/他们/g, ''))) return null; // 他们 is also used for mixed groups
  return role[0];
}
// 一/不 as spoken: 不 before a fourth tone is bú, otherwise bù; 一 before a fourth tone yí, before others yì
// (citation yī after 第, in numbers and dates and at the end of words).
function sandhiIssues(cn, pinyin, Pinyin) {
  const chars = Array.from(cn).filter(ch => HAN.test(ch));
  const syl = Pinyin.segment(pinyin, chars.join(''));
  if (syl.length !== chars.length) return [];
  const tone = s => { const k = Pinyin.toNumeric(s).toLowerCase(); return Number(k.slice(-1)) || 5; };
  const out = [];
  for (let i = 0; i < chars.length - 1; i++) {
    const ch = chars[i];
    if (ch !== '不' && ch !== '一') continue;
    const w = tone(syl[i]), next = tone(syl[i + 1]);
    if (w === 5 || next === 5) continue;
    if (ch === '不') {
      const want = next === 4 ? 2 : 4;
      if (w !== want) out.push('不 vor ' + syl[i + 1] + ' als ' + syl[i] + ' (gesprochen ' + (want === 2 ? 'bú' : 'bù') + ')');
    } else {
      const prev = chars[i - 1] || '', after = chars[i + 1];
      if (/[第十星期周统唯万初单]/.test(prev) || /[月号日楼层点〇零一二三四五六七八九十百千万]/.test(after)) continue;
      if (w === 1) continue;
      const want = next === 4 ? 2 : 4;
      if (w !== want) out.push('一 vor ' + syl[i + 1] + ' als ' + syl[i] + ' (gesprochen ' + (want === 2 ? 'yí' : 'yì') + ')');
    }
  }
  return out;
}
const PARTIKEL = /\b(den|dem|einen|einem|reiner|diesen|keinen)\s+(?:[\wäöüß-]+\s+)?([\wäöüß-]*[Pp]artikel)\b/g;

function readJson(file, fallback) {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : fallback;
}

module.exports = {
  ROOT, LESSONS_FILE, LEDGER, RANK, LEVEL_OF_RANK, ENGINE_LEVELS, HAN, SUPER, LESSON_FIELDS, HASHED_FIELDS,
  lessonsSource, loadLessons, displayOrder, serializeLesson, appendLessons, contentHash,
  levelRanks, levelFrom, levelLabel, rangeLabel, wordVariants, overviewWords, keysOf, groupsInText, runsOf, stripHtml,
  MASC_ROLE, PROSE_MASC, GENDER_SHOWN, genderIssue, sandhiIssues, PARTIKEL, readJson
};
