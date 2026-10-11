// Phase 8 step 5: links the grammar lessons (grammar-lessons.js) to the HSK 2025 grammar points, relevels them,
// checks their content and proposes new lessons. Default is a dry run that writes scripts/lessons/link-report.md.
//
// Usage: node scripts/lessons/link.cjs            dry run → link-report.md
//        node scripts/lessons/link.cjs --write    also writes `grammarIds` and the new `level` into grammar-lessons.js
//        node scripts/lessons/link.cjs --write --out <file>   writes the changed lessons file elsewhere (test run)
//
// Inputs next to this script (all optional, all hand-edited):
//   overrides.json    per lesson: add / remove grammar ids, main ids (they decide the level), level, note
//   review-notes.json manual content findings (claims against the grammar data, translations, German) + pinyin ignores
//   proposals.json    proposed new lessons (HSK 5, HSK 6, HSK 7–9, HSK 1–4 gaps) with their grammar ids
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const grammarCommon = require('../grammar/common.cjs');
const { tokens } = require('../grammar/remap.cjs');
const validate = require('../enrich/validate.cjs');
const hanzi = require('../hanzi/common.cjs');
const lessonsCommon = require('./common.cjs');

const ROOT = grammarCommon.ROOT;
const LESSONS_FILE = path.join(ROOT, 'grammar-lessons.js');
const HERE = __dirname;
const REPORT = path.join(HERE, 'link-report.md');
const readJson = (file, fallback) => fs.existsSync(path.join(HERE, file)) ? JSON.parse(fs.readFileSync(path.join(HERE, file), 'utf8')) : fallback;

const RANK = { HSK1: 1, HSK2: 2, HSK3: 3, HSK4: 4, HSK5: 5, HSK6: 6, 'HSK7-9': 7, Zusatz: 8 };
const LEVEL_OF_RANK = { 1: 'HSK1', 2: 'HSK2', 3: 'HSK3', 4: 'HSK4', 5: 'HSK5', 6: 'HSK6', 7: 'HSK7-9' };
// The lessons engine filters by lesson.level.split('/') and sorts by LEVEL_DISPLAY_ORDER; these are the labels it knows.
const ENGINE_LEVELS = ['HSK1', 'HSK1/HSK2', 'HSK2', 'HSK2/HSK3', 'HSK3', 'HSK3/HSK4', 'HSK4', 'HSK4/HSK5', 'HSK5', 'HSK5/HSK6', 'HSK6', 'HSK7-9'];
const ENGINE_FILTERS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'];
const HAN = /\p{Script=Han}/u;
const HAN_RUNS = /\p{Script=Han}+/gu;
const SUPER = /[¹²³⁴⁵⁶⁷⁸⁹]/g;
const CONF_ORDER = { title: 0, heading: 1, examples: 2, manual: 3 };

// ── Data ────────────────────────────────────────────────────────────────────
// The raw lessons in file order. After --write, previous-levels.json keeps the levels before the relevel, so the report
// still shows old → new; lesson.level is the old level, lesson.currentLevel the one in the file.
function loadLessons() {
  const lessons = lessonsCommon.loadLessons();
  const previous = readJson('previous-levels.json', {});
  lessons.forEach(l => { l.currentLevel = l.level; if (previous[l.id]) l.level = previous[l.id]; });
  lessonsCommon.displayOrder(lessons).forEach((l, i) => { l._display = i + 1; }); // numbering as displayed before the relevel
  return lessons;
}
const stripHtml = s => String(s || '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');
const levelLabel = level => level.replace(/HSK/g, 'HSK ').replace(/\//g, '/');
// 'HSK2/HSK3' → 'HSK 2–3'
function rangeLabel(level) {
  const parts = level.split('/');
  if (parts.length === 1) return levelLabel(level);
  return 'HSK ' + parts.map(p => p.replace('HSK', '')).join('–');
}

// ── Match keys of a grammar point ───────────────────────────────────────────
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
function keysOf(entry) {
  if (entry.kind === 'overview') return { type: 'list', words: overviewWords(entry) };
  if (entry.kind === 'word') {
    // Affixes (小—, —们) are too short and frequent to be found automatically.
    if (/—/.test(entry.pattern)) return { type: 'none' };
    return { type: 'groups', groups: [wordVariants(entry.pattern)] };
  }
  let groups = entry.kind === 'zusatz' ? tokens(entry.pattern) : grammarCommon.requiredTokens(entry);
  if (!groups.length) {
    const bare = entry.pattern.replace(SUPER, '').replace(/（[^）]*）/g, '');
    if (/^\p{Script=Han}+$/u.test(bare) && !/句|短语|语$|法$|顺序|省略|话题|标记/.test(bare)) groups = [[bare]];
  }
  return groups.length ? { type: 'groups', groups } : { type: 'none' };
}

// ── Lesson texts ────────────────────────────────────────────────────────────
function textsOf(lesson) {
  return {
    title: stripHtml(lesson.title + ' ' + lesson.subtitle),
    headings: lesson.sections.map(s => stripHtml(s.heading)),
    examples: lesson.sections.flatMap(s => (s.examples || []).map(e => e.cn.replace(/^[❌✅]\s*/, ''))).filter(cn => !/^❌/.test(cn)),
  };
}
// Han runs of a heading-like text: 快要...了, 要...了 → [快要, 了, 要, 了].
const runsOf = text => text.match(HAN_RUNS) || [];
// Do the groups occur in order? In headings a one-character word must be a run of its own (在 not inside 正在).
// Returns the number of matched characters (0 = no match), so a caller can reject matches made of one bare character.
function inOrder(groups, text, exactSingles) {
  const runs = runsOf(text);
  let r = 0, chars = 0;
  for (const alts of groups) {
    let hit = -1, len = 0;
    for (let k = r; k < runs.length && hit === -1; k++) {
      for (const alt of alts.slice().sort((a, b) => b.length - a.length)) {
        if (exactSingles && Array.from(alt).length === 1 ? runs[k] === alt : runs[k].includes(alt)) { hit = k; len = Array.from(alt).length; break; }
      }
    }
    if (hit === -1) return 0;
    r = hit + 1;
    chars += len;
  }
  return chars;
}
// Example sentences: the groups in order as substrings of the whole sentence. Single characters (在, 有, 了) occur
// everywhere, so a sentence counts only when at least three characters of the pattern matched and one word has two.
function inSentence(groups, sentence) {
  let pos = 0, chars = 0, long = false;
  for (const alts of groups) {
    let best = -1, len = 0;
    for (const alt of alts) {
      const at = sentence.indexOf(alt, pos);
      if (at !== -1 && (best === -1 || at < best || (at === best && alt.length > len))) { best = at; len = alt.length; }
    }
    if (best === -1) return false;
    pos = best + len;
    chars += len;
    long = long || len > 1;
  }
  return long && (chars >= 3 || groups.length === 1);
}

function autoMatch(lesson, points) {
  const t = textsOf(lesson);
  const found = new Map();
  const add = (id, conf, why) => {
    const prev = found.get(id);
    if (!prev || CONF_ORDER[conf] < CONF_ORDER[prev.conf]) found.set(id, { conf, why });
  };
  for (const p of points) {
    const keys = p._keys;
    if (keys.type === 'groups') {
      // Example evidence only for multi-part patterns and for words of two or more characters (什么, 已经).
      const multiChar = keys.groups.length > 1 || (p.kind === 'word' && keys.groups[0].every(a => Array.from(a).length > 1));
      // A pattern found only through one bare character (了 for 完成态, 没 for X都不/没X) is no evidence; words are.
      const enough = n => n > 1 || (n === 1 && p.kind === 'word');
      if (enough(inOrder(keys.groups, t.title, true))) add(p.id, 'title', 'Titel/Untertitel');
      else if (t.headings.some(h => enough(inOrder(keys.groups, h, true)))) add(p.id, 'heading', 'Abschnittsüberschrift');
      else if (multiChar) {
        const hits = t.examples.filter(cn => inSentence(keys.groups, cn)).length;
        if (hits >= 2) add(p.id, 'examples', hits + ' Beispielsätze');
      }
    } else if (keys.type === 'list' && keys.words.length) {
      const has = (text, w) => runsOf(text).some(run => Array.from(w).length === 1 ? run === w : run.includes(w));
      const inTitle = keys.words.filter(w => has(t.title, w));
      const inHeads = keys.words.filter(w => has(t.title, w) || t.headings.some(h => has(h, w)));
      if (inTitle.length >= 2) add(p.id, 'title', 'Titel nennt ' + inTitle.join(', '));
      else if (inHeads.length >= 2) add(p.id, 'heading', 'Überschriften nennen ' + inHeads.join(', '));
    }
  }
  return found;
}

// ── Levels ──────────────────────────────────────────────────────────────────
function levelFrom(ids, byId) {
  const ranks = ids.map(id => RANK[byId.get(id).level]).filter(r => r <= 7);
  if (!ranks.length) return { level: null, wide: false };
  const lo = Math.min(...ranks), hi = Math.max(...ranks);
  if (lo === hi) return { level: LEVEL_OF_RANK[lo], wide: false };
  return { level: LEVEL_OF_RANK[lo] + '/' + LEVEL_OF_RANK[hi], wide: hi - lo > 1 };
}

// ── Content checks ──────────────────────────────────────────────────────────
const MASC_ROLE = /\b(Student|Studenten|Lehrer|Schüler|Arzt|Ärzte|Chinese|Chinesen|Japaner|Deutscher|Ausländer|Freund|Freunde|Kollege|Kollegen|Muttersprachler|Sprecher|Klassensprecher|Anfänger|Kunde|Kunden)\b/;
const PROSE_MASC = /\b(deutsche[nr]? Muttersprachler|Muttersprachler|der Sprecher|vom Sprecher|zum Sprecher|des Sprechers|Gesprächspartner|Anfänger(?:fehler)?|deutsche[nr]? Lernende[nr]?)\b/g;
function sandhiIssues(cn, pinyin, ctx) {
  const chars = Array.from(cn).filter(ch => HAN.test(ch));
  const syl = ctx.Pinyin.segment(pinyin, chars.join(''));
  if (syl.length !== chars.length) return [];
  const tone = s => { const k = ctx.Pinyin.toNumeric(s).toLowerCase(); return Number(k.slice(-1)) || 5; };
  const out = [];
  for (let i = 0; i < chars.length - 1; i++) {
    const ch = chars[i];
    if (ch !== '不' && ch !== '一') continue;
    const w = tone(syl[i]), next = tone(syl[i + 1]);
    if (w === 5 || next === 5) continue;
    if (ch === '不') {
      const want = next === 4 ? 2 : 4;
      if (w !== want) out.push('不 vor ' + syl[i + 1] + ' als ' + syl[i] + ' (erwartet ' + (want === 2 ? 'bú' : 'bù') + ')');
    } else {
      const prev = chars[i - 1] || '', after = chars[i + 1];
      if (/[第十星期周统唯万初单]/.test(prev) || /[月号日楼层点〇零一二三四五六七八九十百千万]/.test(after)) continue;
      if (w === 1) continue; // citation reading is accepted (一一, lists)
      const want = next === 4 ? 2 : 4;
      if (w !== want) out.push('一 vor ' + syl[i + 1] + ' als ' + syl[i] + ' (erwartet ' + (want === 2 ? 'yí' : 'yì') + ')');
    }
  }
  return out;
}

function checkLesson(lesson, ctx, notes, displayById, titleById, newLevel) {
  const findings = [];
  const push = (severity, kind, where, text) => findings.push({ severity, kind, where, text });
  const ignore = new Set(notes.pinyinIgnore || []);
  // A manual cross-reference finding replaces the automatic one (it names the intended lesson).
  const manualRefs = (notes.findings || []).some(f => f.lesson === lesson.id && f.kind === 'Querverweis');
  const levelRanks = newLevel.split('/').map(l => RANK[l]);
  const allowedRank = Math.max(...levelRanks) + 1;
  const vocabIssues = new Set();
  const prose = [];
  prose.push(['Titel', lesson.title], ['Untertitel', lesson.subtitle], ['Einleitung', lesson.intro]);
  lesson.sections.forEach((s, si) => {
    const where = 'Abschnitt ' + (si + 1) + ' „' + stripHtml(s.heading) + '“';
    prose.push([where + ' (Überschrift)', s.heading], [where, s.text], [where + ' (Tipp)', s.tip]);
    (s.examples || []).forEach((e, ei) => {
      const at = where + ', Beispiel ' + (ei + 1);
      const cn = e.cn.replace(/^[❌✅]\s*/, '').replace(/^\p{Script=Han}{1,4}：/u, '');
      const negative = /^❌/.test(e.cn);
      if (!e.pinyin) {
        if (!negative) push('Fehler', 'Pinyin', at, e.cn + ': Pinyin fehlt');
        return;
      }
      if (!ignore.has(e.cn)) {
        const r = validate.checkExampleReading(cn, e.pinyin, ctx);
        r.errors.forEach(x => push('Fehler', 'Pinyin', at, e.cn + ' — ' + e.pinyin + ': ' + x));
        r.warnings.forEach(x => push('Warnung', 'Pinyin', at, e.cn + ' — ' + e.pinyin + ': ' + x));
        sandhiIssues(cn, e.pinyin, ctx).forEach(x => push('Warnung', 'Tonsandhi', at, e.cn + ' — ' + e.pinyin + ': ' + x));
      }
      if (/[。？！]$/.test(e.cn) && /^[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(e.pinyin)) push('Warnung', 'Pinyin', at, e.cn + ' — ' + e.pinyin + ': Satzanfang klein geschrieben');
      // er/sie against 他/她.
      const plain = cn.replace(/他们|她们|其他|他人/g, '');
      const de = e.de.replace(/\(.*?\)/g, '');
      if (/她/.test(plain) && !/他/.test(plain) && /(^|[^\p{L}])(Er|er|ihn|ihm|sein[enrms]?)(?=[^\p{L}]|$)/u.test(de) && !/(^|[^\p{L}])(Sie|sie|ihr[enrms]?)(?=[^\p{L}]|$)/u.test(de)) push('Fehler', 'Übersetzung', at, e.cn + ' → „' + e.de + '“: 她 als „er“ übersetzt');
      if (/他/.test(plain) && !/她/.test(plain) && /(^|[^\p{L}])(Sie|sie)(?=[^\p{L}]|$)/u.test(de) && !/(^|[^\p{L}])(Er|er|ihn|ihm|sein[enrms]?)(?=[^\p{L}]|$)/u.test(de) && !/^(Sie|Bitte)/.test(de)) push('Warnung', 'Übersetzung', at, e.cn + ' → „' + e.de + '“: 他 als „sie“ übersetzt?');
      // Speaker or addressee with unknown gender rendered with a masculine role noun.
      const role = lessonsCommon.genderIssue(cn, e.de);
      if (role) push('Hinweis', 'Gendern', at, e.cn + ' → „' + e.de + '“: „' + role + '“ für eine Person, deren Geschlecht das Chinesische nicht zeigt');
      prose.push([at + ' (Übersetzung)', e.de]);
      // Vocabulary of HSK 1–3 lessons: at most one level above the lesson, as in the enrichment briefs.
      if (allowedRank <= 4) validate.checkBeginnerVocabulary(cn, '\u0000', allowedRank, ctx).forEach(w => vocabIssues.add(w));
    });
  });
  for (const [where, raw] of prose) {
    if (!raw) continue;
    const text = stripHtml(raw);
    const spelled = hanzi.asciiUmlauts(text);
    if (spelled.length) push('Fehler', 'Umlaute', where, spelled.join(', '));
    for (const m of text.matchAll(/\b(den|dem|einen|einem|reiner|diesen|keinen)\s+(?:[\wäöüß-]+\s+)?([\wäöüß-]*[Pp]artikel)\b/g)) push('Fehler', 'Deutsch', where, '„' + m[0] + '“ — „Partikel“ ist feminin (die Partikel)');
    if (!manualRefs) for (const m of text.matchAll(/Lektion (\d+)/g)) {
      const id = 'lesson-' + m[1];
      push('Fehler', 'Querverweis', where, '„' + m[0] + '“ ist fest verdrahtet: als angezeigte Nummer zeigt es heute auf „' + (titleById.get(displayById.get(Number(m[1]))) || '?') +
        '“, als ID auf ' + id + ' „' + (titleById.get(id) || '?') + '“ (das ist gemeint) → [[lesson:' + id + ']] verwenden; mit den neuen Leveln ändern sich die Nummern ohnehin');
    }
    for (const m of text.replace(/Ausblick \(HSK[^)]*\)/g, '').matchAll(/HSK[ -]?(\d)(?:[-–](\d))?/g)) {
      const n = Number(m[1]);
      if (n < Math.min(...levelRanks) || n > Math.max(...levelRanks)) push('Warnung', 'Levelangabe', where, '„' + m[0] + '“ im Text, neues Level ' + rangeLabel(newLevel));
    }
    const masc = text.match(lessonsCommon.PROSE_MASC);
    if (masc) push('Hinweis', 'Gendern', where, 'generisches Maskulinum: ' + Array.from(new Set(masc)).join(', '));
  }
  if (vocabIssues.size) push('Hinweis', 'Wortschatz', 'Beispiele', vocabIssues.size + (vocabIssues.size === 1 ? ' Wort' : ' Wörter') + ' über ' + rangeLabel(LEVEL_OF_RANK[allowedRank]) + ' (Lektionslevel + 1): ' + [...vocabIssues].join(', '));
  return findings;
}

// ── Report helpers ──────────────────────────────────────────────────────────
const esc = s => String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
const confLabel = { title: 'hoch (Titel)', heading: 'mittel (Überschrift)', examples: 'niedrig (Beispiele)', manual: 'manuell' };

function main() {
  const write = process.argv.includes('--write');
  const outArg = process.argv.indexOf('--out');
  const outFile = outArg !== -1 ? path.resolve(process.argv[outArg + 1]) : LESSONS_FILE;
  const overrides = readJson('overrides.json', {});
  const notes = readJson('review-notes.json', { findings: [], pinyinIgnore: [] });
  const proposals = readJson('proposals.json', { lessons: [] });
  const points = grammarCommon.loadGrammar();
  const byId = new Map(points.map(p => [p.id, p]));
  points.forEach(p => { p._keys = keysOf(p); p._index = points.indexOf(p); });
  // Only the lessons decided in overrides.json (the 45 original ones); lessons added by apply.cjs carry their own
  // grammarIds and level from the authoring batch and are never relinked here.
  const lessons = loadLessons().filter(l => overrides[l.id]);
  const ctx = validate.context();
  const titleById = new Map(lessons.map(l => [l.id, l.title]));
  const displayById = new Map(lessons.map(l => [l._display, l.id])); // displayed number → id (before relevel)

  const problems = [];
  const results = lessons.map(lesson => {
    const auto = autoMatch(lesson, points);
    const ov = overrides[lesson.id] || {};
    for (const id of [...(ov.add || []), ...(ov.remove || []), ...(ov.main || [])]) if (!byId.has(id)) problems.push(lesson.id + ': unbekannte Grammatik-ID ' + id);
    const removed = new Set(ov.remove || []);
    const links = new Map();
    for (const [id, m] of auto) if (!removed.has(id)) links.set(id, { ...m, source: 'auto' });
    for (const id of ov.add || []) if (byId.has(id) && !links.has(id)) links.set(id, { conf: 'manual', why: 'overrides.json', source: 'manual' });
    let main = (ov.main || []).filter(id => byId.has(id));
    let mainSource = 'overrides.json';
    if (!main.length) {
      main = [...links].filter(([, m]) => m.conf === 'title').map(([id]) => id);
      mainSource = 'Titel-Treffer';
    }
    if (!main.length) { main = [...links.keys()]; mainSource = 'alle Links (Rückfall)'; }
    for (const id of main) if (!links.has(id)) links.set(id, { conf: 'manual', why: 'Hauptpunkt (overrides.json)', source: 'manual' });
    const computed = levelFrom(main, byId);
    const level = ov.level || computed.level || lesson.level;
    const order = (a, b) => (main.includes(b) - main.includes(a)) || RANK[byId.get(a).level] - RANK[byId.get(b).level] || byId.get(a)._index - byId.get(b)._index;
    const ids = [...links.keys()].sort(order);
    // Link quality: were the main points found automatically, and how strongly?
    const mainConf = main.map(id => auto.has(id) ? auto.get(id).conf : null);
    const quality = mainConf.every(c => c === 'title') ? 'gut'
      : mainConf.some(c => c === 'title') ? 'teilweise'
      : mainConf.some(c => c) ? 'schwach' : 'keine';
    return { lesson, auto, links, ids, main, mainSource, computed, level, ov, quality,
      findings: checkLesson(lesson, ctx, notes, displayById, titleById, level) };
  });
  if (!ENGINE_LEVELS.includes('HSK7-9')) problems.push('engine levels');
  results.forEach(r => { if (!ENGINE_LEVELS.includes(r.level)) problems.push(r.lesson.id + ': Level ' + r.level + ' kennt die Lektionen-Engine nicht (LEVEL_DISPLAY_ORDER)'); });

  // Manual findings from review-notes.json.
  for (const f of (notes.findings || []).filter(x => !x.resolved)) {
    const r = results.find(x => x.lesson.id === f.lesson);
    if (!r) { problems.push('review-notes.json: unbekannte Lektion ' + f.lesson); continue; }
    if (f.grammarId && !byId.has(f.grammarId)) problems.push('review-notes.json: unbekannte Grammatik-ID ' + f.grammarId);
    r.findings.push({ severity: f.severity, kind: f.kind, where: f.where, text: f.text + (f.grammarId ? ' (vgl. ' + f.grammarId + ')' : ''), manual: true });
  }

  // Coverage: points linked by any lesson.
  const covered = new Map();
  results.forEach(r => r.ids.forEach(id => { if (!covered.has(id)) covered.set(id, []); covered.get(id).push(r.lesson.id); }));
  const proposalCovered = new Map();
  for (const p of proposals.lessons || []) {
    for (const id of p.grammarIds || []) {
      if (!byId.has(id)) problems.push('proposals.json: „' + p.titleDe + '“ — unbekannte Grammatik-ID ' + id);
      if (!proposalCovered.has(id)) proposalCovered.set(id, []);
      proposalCovered.get(id).push(p.titleDe);
    }
  }

  // ── Report ────────────────────────────────────────────────────────────────
  const L = [];
  const now = new Date().toISOString().slice(0, 10);
  L.push('# Lektionen ↔ Grammatikpunkte (HSK 2025) — Dry-Run-Bericht', '');
  L.push('Erzeugt von `scripts/lessons/link.cjs` am ' + now + '. Nichts in `grammar-lessons.js` wurde geändert. ' +
    'Manuelle Entscheidungen: `overrides.json` (Links, Hauptpunkte, Level), `review-notes.json` (inhaltliche Befunde), `proposals.json` (neue Lektionen).', '');
  if (problems.length) { L.push('## ⚠ Probleme der Eingaben', ''); problems.forEach(p => L.push('- ' + p)); L.push(''); }

  // Summary
  const totalLinks = results.reduce((s, r) => s + r.ids.length, 0);
  const autoKept = results.reduce((s, r) => s + [...r.links.values()].filter(m => m.source === 'auto').length, 0);
  const manualAdded = totalLinks - autoKept;
  const autoRemoved = results.reduce((s, r) => s + [...r.auto.keys()].filter(id => !r.links.has(id)).length, 0);
  const byQuality = q => results.filter(r => r.quality === q).map(r => r.lesson.id);
  const changed = results.filter(r => r.level !== r.lesson.level);
  const sev = s => results.reduce((n, r) => n + r.findings.filter(f => f.severity === s).length, 0);
  L.push('## Zusammenfassung', '');
  L.push('| | |', '|---|---|');
  L.push('| Lektionen | ' + results.length + ' |');
  L.push('| Links gesamt (`grammarIds`) | ' + totalLinks + ' (Ø ' + (totalLinks / results.length).toFixed(1) + ' je Lektion) |');
  L.push('| davon automatisch gefunden und behalten | ' + autoKept + ' |');
  L.push('| davon manuell ergänzt (overrides.json) | ' + manualAdded + ' |');
  L.push('| automatische Treffer verworfen | ' + autoRemoved + ' |');
  L.push('| Hauptpunkte alle automatisch im Titel gefunden | ' + byQuality('gut').length + ' |');
  L.push('| Hauptpunkte teilweise im Titel gefunden | ' + byQuality('teilweise').length + ' |');
  L.push('| Hauptpunkte nur schwach gefunden (Überschrift/Beispiele) | ' + byQuality('schwach').length + (byQuality('schwach').length ? ' (' + byQuality('schwach').join(', ') + ')' : '') + ' |');
  L.push('| Hauptpunkte gar nicht automatisch gefunden | ' + byQuality('keine').length + (byQuality('keine').length ? ' (' + byQuality('keine').join(', ') + ')' : '') + ' |');
  L.push('| Level geändert | ' + changed.length + ' von ' + results.length + ' |');
  L.push('| Inhaltliche Befunde | ' + sev('Fehler') + ' Fehler, ' + sev('Warnung') + ' Warnungen, ' + sev('Hinweis') + ' Hinweise |');
  const perGroup = {}; (proposals.lessons || []).forEach(p => { perGroup[p.group] = (perGroup[p.group] || 0) + 1; });
  L.push('| Vorgeschlagene neue Lektionen | ' + (proposals.lessons || []).length + ' (' + Object.entries(perGroup).map(([g, n]) => g + ': ' + n).join(', ') + ') |');
  L.push('');

  // Levels
  L.push('## 1. Neue Level (HSK 2025)', '');
  L.push('Das Level ergibt sich aus den **Hauptpunkten** einer Lektion (Spalte „Hauptpunkte“): Minimum–Maximum ihrer Level. ' +
    'Gespeichert wird es im Format der Engine (`HSK2/HSK3`), angezeigt hier als Spanne.', '');
  L.push('| Lektion | Titel | alt | neu | Hauptpunkte (Level) | Quelle |', '|---|---|---|---|---|---|');
  for (const r of results) {
    const mark = r.level !== r.lesson.level ? '**' + rangeLabel(r.level) + '**' : rangeLabel(r.level);
    const mains = r.main.map(id => '`' + id.replace(/^g:/, '') + '` (' + byId.get(id).level.replace('HSK', '') + ')').join(', ');
    L.push('| ' + r.lesson.id + ' | ' + esc(r.lesson.title) + ' | ' + rangeLabel(r.lesson.level) + ' | ' + mark + (r.computed.wide ? ' ⚠ weit' : '') + (r.ov.level ? ' (gesetzt)' : '') + ' | ' + esc(mains) + ' | ' + r.mainSource + ' |');
  }
  L.push('');
  const moves = {};
  changed.forEach(r => { const k = rangeLabel(r.lesson.level) + ' → ' + rangeLabel(r.level); moves[k] = (moves[k] || 0) + 1; });
  L.push('Verschiebungen: ' + Object.entries(moves).map(([k, n]) => k + ' (' + n + ')').join(', ') + '.', '');

  // Links per lesson
  L.push('## 2. Links je Lektion', '');
  L.push('Konfidenz: **hoch** = Muster/Wort steht im Titel oder Untertitel; **mittel** = in einer Abschnittsüberschrift; ' +
    '**niedrig** = nur in ≥ 2 Beispielsätzen; **manuell** = aus `overrides.json`. ★ = Hauptpunkt (bestimmt das Level).', '');
  for (const r of results) {
    L.push('### ' + r.lesson.id + ' — ' + r.lesson.title + ' (' + rangeLabel(r.lesson.level) + ' → ' + rangeLabel(r.level) + ')', '');
    if (r.ov.note) L.push('> ' + r.ov.note, '');
    L.push('| | Grammatikpunkt | Level | Konfidenz | Grund |', '|---|---|---|---|---|');
    for (const id of r.ids) {
      const m = r.links.get(id), p = byId.get(id);
      L.push('| ' + (r.main.includes(id) ? '★' : '') + ' | `' + esc(id) + '` ' + esc((p.meaning || '').slice(0, 60)) + ' | ' + p.level + ' | ' + confLabel[m.conf] + ' | ' + esc(m.why) + ' |');
    }
    const dropped = [...r.auto.keys()].filter(id => !r.links.has(id));
    if (dropped.length) L.push('', 'Verworfen: ' + dropped.map(id => '`' + id + '` (' + r.auto.get(id).why + ')').join(', '));
    L.push('');
  }
  L.push('### Lektionen mit schwacher oder keiner automatischen Zuordnung', '');
  const qText = { teilweise: 'Hauptpunkte nur teilweise im Titel', schwach: 'Hauptpunkte nur in Überschriften/Beispielen', keine: 'Hauptpunkte gar nicht automatisch gefunden' };
  for (const q of ['keine', 'schwach', 'teilweise']) {
    for (const r of results.filter(x => x.quality === q)) {
      const missed = r.main.filter(id => !r.auto.has(id) || r.auto.get(id).conf !== 'title');
      L.push('- **' + r.lesson.id + '** „' + r.lesson.title + '“ — ' + qText[q] + '; manuell gesetzt: ' + missed.map(id => '`' + id + '`').join(', ') +
        (r.ov.note ? ' — ' + r.ov.note : ''));
    }
  }
  L.push('');

  // Content findings
  L.push('## 3. Inhaltliche Prüfung', '');
  L.push('Automatisch: Beispiel-Pinyin gegen CC-CEDICT (`checkExampleReading` aus `scripts/enrich/validate.cjs`), Tonsandhi von 一/不, ' +
    'Umlaut-Ersatzschreibungen, „der/den Partikel“, er/sie gegen 他/她, generisches Maskulinum, fest verdrahtete „Lektion N“, Levelangaben im Text. ' +
    'Manuell (`review-notes.json`): Aussagen, die den Grammatikpunkten widersprechen, Übersetzungs- und Formulierungsfehler.', '');
  const kinds = {};
  results.forEach(r => r.findings.forEach(f => { const k = f.severity + ' · ' + f.kind; kinds[k] = (kinds[k] || 0) + 1; }));
  L.push('| Art | Anzahl |', '|---|---|');
  Object.entries(kinds).sort().forEach(([k, n]) => L.push('| ' + k + ' | ' + n + ' |'));
  L.push('');
  const worst = results.flatMap(r => r.findings.filter(f => f.manual && f.severity === 'Fehler' && ['Sachaussage', 'Übersetzung', 'Terminologie', 'Tipp'].includes(f.kind)).map(f => ({ r, f })));
  if (worst.length) {
    L.push('### Schwerste Befunde (sachlich falsch oder widersprüchlich)', '');
    worst.forEach(({ r, f }) => L.push('- **' + r.lesson.id + '** ' + f.where + ': ' + f.text));
    L.push('');
  }
  L.push('### Alle Befunde je Lektion', '');
  const sevOrder = { Fehler: 0, Warnung: 1, Hinweis: 2 };
  for (const r of results) {
    if (!r.findings.length) continue;
    L.push('#### ' + r.lesson.id + ' — ' + r.lesson.title, '');
    r.findings.slice().sort((a, b) => sevOrder[a.severity] - sevOrder[b.severity]).forEach(f =>
      L.push('- ' + f.severity + ' · ' + f.kind + (f.manual ? ' (manuell)' : '') + ' · ' + f.where + ': ' + f.text));
    L.push('');
  }

  // Coverage
  L.push('## 4. Abdeckung', '');
  L.push('Ein Punkt gilt als abgedeckt, wenn eine Lektion ihn in `grammarIds` führt (Haupt- oder Nebenpunkt).', '');
  L.push('| Level | Punkte | abgedeckt | davon Hauptpunkt | nicht abgedeckt | durch Vorschläge abgedeckt |', '|---|---|---|---|---|---|');
  const mainCovered = new Set(results.flatMap(r => r.main));
  for (const level of ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9']) {
    const all = points.filter(p => p.level === level);
    const cov = all.filter(p => covered.has(p.id));
    const viaProp = all.filter(p => !covered.has(p.id) && proposalCovered.has(p.id));
    L.push('| ' + rangeLabel(level) + ' | ' + all.length + ' | ' + cov.length + ' (' + Math.round(100 * cov.length / all.length) + ' %) | ' +
      all.filter(p => mainCovered.has(p.id)).length + ' | ' + (all.length - cov.length) + ' | ' + viaProp.length + ' |');
  }
  L.push('');
  for (const level of ['HSK1', 'HSK2', 'HSK3', 'HSK4']) {
    const missing = points.filter(p => p.level === level && !covered.has(p.id));
    L.push('### ' + rangeLabel(level) + ': nicht abgedeckt (' + missing.length + ')', '');
    const byKind = {};
    missing.forEach(p => { (byKind[p.kind] = byKind[p.kind] || []).push(p); });
    for (const [kind, list] of Object.entries(byKind)) {
      L.push('- **' + kind + '** (' + list.length + '): ' + list.map(p => '`' + p.id.replace(/^g:/, '') + '`' + (proposalCovered.has(p.id) ? '↗' : '')).join(', '));
    }
    L.push('');
  }
  L.push('↗ = in einem Vorschlag unten enthalten.', '');

  // Proposals
  L.push('## 5. Vorgeschlagene neue Lektionen', '');
  if (proposals.intro) L.push(proposals.intro, '');
  const groupsOrder = ['HSK1–4 (Lücken)', 'HSK5', 'HSK6', 'HSK7-9'];
  const byGroup = {};
  (proposals.lessons || []).forEach(p => { (byGroup[p.group] = byGroup[p.group] || []).push(p); });
  for (const g of groupsOrder.concat(Object.keys(byGroup).filter(k => !groupsOrder.includes(k)))) {
    const list = byGroup[g];
    if (!list) continue;
    L.push('### ' + g + ' (' + list.length + ')', '');
    const groupLevel = { HSK5: 'HSK5', HSK6: 'HSK6', 'HSK7-9': 'HSK7-9' }[g];
    if (groupLevel) {
      const all = points.filter(p => p.level === groupLevel);
      const inGroup = new Set(list.flatMap(p => p.grammarIds));
      L.push('Diese ' + list.length + ' Lektionen bündeln ' + all.filter(p => inGroup.has(p.id)).length + ' der ' + all.length + ' ' + rangeLabel(groupLevel) + '-Punkte.', '');
    }
    if (proposals.groupNotes && proposals.groupNotes[g]) L.push(proposals.groupNotes[g], '');
    const prio = list.some(p => p.priority);
    L.push('| # |' + (prio ? ' Prio |' : '') + ' Titel | Level | Grammatikpunkte | Ziel |', '|---|' + (prio ? '---|' : '') + '---|---|---|---|');
    list.forEach((p, i) => {
      const lv = levelFrom((p.main || p.grammarIds).filter(id => byId.has(id)), byId).level || '?';
      const already = (p.grammarIds || []).filter(id => covered.has(id));
      L.push('| ' + (i + 1) + ' |' + (prio ? ' ' + (p.priority || '') + ' |' : '') + ' ' + esc(p.titleDe) + ' · ' + esc(p.titleZh) + ' | ' + rangeLabel(lv) + ' | ' +
        p.grammarIds.map(id => '`' + id.replace(/^g:/, '') + '`' + (byId.has(id) ? ' (' + byId.get(id).level.replace('HSK', '') + ')' : ' ⚠') + (already.includes(id) ? '°' : '')).join(', ') + ' | ' + esc(p.goal) + ' |');
    });
    L.push('');
  }
  L.push('° = bereits von einer bestehenden Lektion als Nebenpunkt verlinkt.', '');
  const allHsk56 = points.filter(p => (p.level === 'HSK5' || p.level === 'HSK6'));
  const left = allHsk56.filter(p => !covered.has(p.id) && !proposalCovered.has(p.id));
  L.push('HSK 5–6-Punkte weder in bestehenden Lektionen noch in Vorschlägen: ' + left.length + (left.length ? ' — ' + left.map(p => '`' + p.id.replace(/^g:/, '') + '`').join(', ') : '') + '.', '');

  // Write
  L.push('## 6. Was `--write` ändert', '');
  L.push('- Je Lektion in `grammar-lessons.js`: `level` wird auf den neuen Wert gesetzt (Format `HSKa` oder `HSKa/HSKb`), ' +
    'direkt dahinter wird `grammarIds: [...]` eingefügt (Hauptpunkte zuerst, dann nach Level). Feldname wie in Nihongo (`grammarIds`).');
  L.push('- ' + changed.length + ' Level ändern sich; ' + totalLinks + ' Links in ' + results.filter(r => r.ids.length).length + ' Lektionen.');
  L.push('- Sonst nichts: keine Texte, keine Beispiele, keine Engine-Zeilen. Inhaltliche Befunde und neue Lektionen sind eigene Schritte.');
  L.push('- Die Engine (`renderLessonContent`) zeigt `grammarIds` bereits als Knöpfe „Muster nachschlagen“ (öffnen den Grammatikpunkt). ' +
    'Weil sich Level ändern, ändert sich die angezeigte Nummerierung; die fest verdrahteten „Lektion N“ wurden deshalb auf `[[lesson:…]]` umgestellt (Abschnitt 7).');
  const needs79 = results.some(r => /HSK7-9/.test(r.level));
  if (needs79) L.push('- Mindestens eine Lektion landet auf HSK 7–9: Die Level-Filter der Engine kennen nur HSK 1–6 (`initLessons`), dafür fehlt ein Knopf.');
  const applied = results.filter(r => r.lesson.currentLevel === r.level && JSON.stringify(r.lesson.grammarIds || null) === JSON.stringify(r.ids)).length;
  if (applied === results.length) L.push('- **Angewendet:** `grammar-lessons.js` enthält die neuen Level und `grammarIds` aller ' + results.length + ' Lektionen (alte Level in `previous-levels.json`).');
  else if (applied) L.push('- Teilweise angewendet: ' + applied + ' von ' + results.length + ' Lektionen entsprechen schon diesem Bericht.');
  L.push('');

  // Fixed
  const fixed = readJson('fixed.json', null);
  if (fixed) {
    const resolved = (notes.findings || []).filter(f => f.resolved).length;
    L.push('## 7. Fixed (' + fixed.date + ')', '');
    L.push('Die Befunde aus Abschnitt 3 der ersten Fassung wurden in `grammar-lessons.js` behoben: alle Fehler und Warnungen, ' +
      'die Rollenbezeichnungen ohne erkennbares Geschlecht und die meisten Hinweise. ' + resolved + ' manuelle Befunde aus `review-notes.json` sind als erledigt markiert; ' +
      'Abschnitt 3 zeigt nur noch, was offen ist. Danach prüft `scripts/lessons/validate.cjs --all` alle Lektionen (siehe unten).', '');
    const byLesson = {};
    fixed.fixes.forEach(f => { (byLesson[f.lesson] = byLesson[f.lesson] || []).push(f); });
    const kinds = {};
    fixed.fixes.forEach(f => { kinds[f.kind] = (kinds[f.kind] || 0) + 1; });
    L.push('Änderungen nach Art: ' + Object.entries(kinds).sort((a, b) => b[1] - a[1]).map(([k, n]) => k + ' ' + n).join(', ') + '.', '');
    for (const r of results) {
      const list = byLesson[r.lesson.id];
      if (!list) continue;
      L.push('- **' + r.lesson.id + '** ' + r.lesson.title + ': ' + list.map(f => f.kind + ' — ' + f.what).join('; '));
    }
    L.push('');
    if (fixed.after) { L.push('### Nach dem Relevel (Validator)', ''); fixed.after.forEach(line => L.push('- ' + line)); L.push(''); }
  }

  fs.writeFileSync(REPORT, L.join('\n') + '\n');
  console.log('Report: ' + path.relative(ROOT, REPORT) + ' — ' + results.length + ' lessons, ' + totalLinks + ' links, ' + changed.length + ' level changes, ' +
    sev('Fehler') + '/' + sev('Warnung') + '/' + sev('Hinweis') + ' findings' + (problems.length ? ', ' + problems.length + ' input problems' : ''));

  if (write) {
    if (problems.length) { console.error('Not writing: fix the input problems first.'); process.exitCode = 1; return; }
    let text = fs.readFileSync(LESSONS_FILE, 'utf8');
    const eol = text.includes('\r\n') ? '\r\n' : '\n'; // the file uses CRLF
    for (const r of results) {
      // The lesson's own `level:` line follows its `id:` line within the same object (before `sections:`).
      const re = new RegExp("(\\r?\\n([ \\t]*)id: '" + r.lesson.id + "',\\r?\\n(?:(?!\\s*sections:)[^\\n]*\\n)*?[ \\t]*)level: '[^']*',\\r?\\n(?:[ \\t]*grammarIds: \\[[^\\]]*\\],\\r?\\n)?");
      const m = text.match(re);
      if (!m) throw new Error('lesson block not found: ' + r.lesson.id);
      const indent = m[2];
      text = text.replace(re, (_, head) => head + "level: '" + r.level + "'," + eol + indent + 'grammarIds: ' + JSON.stringify(r.ids) + ',' + eol);
    }
    fs.writeFileSync(outFile, text);
    // Keep the levels before the relevel for the report (only for the real file, only once).
    const previousFile = path.join(HERE, 'previous-levels.json');
    if (outFile === LESSONS_FILE && !fs.existsSync(previousFile)) {
      fs.writeFileSync(previousFile, JSON.stringify(Object.fromEntries(results.map(r => [r.lesson.id, r.lesson.level])), null, 1) + '\n');
    }
    console.log('Wrote ' + path.relative(ROOT, outFile));
  }
}

main();
