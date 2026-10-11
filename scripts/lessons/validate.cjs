// Validates grammar lessons: the authored (and reviewed/proofread) packets of a lesson batch, or all lessons in
// grammar-lessons.js.
// Usage: node scripts/lessons/validate.cjs <batch> <packet> [--reviewed]   one packet of l001, l002 …
//        node scripts/lessons/validate.cjs --all [--warnings]              every lesson in grammar-lessons.js
// Prints OK, or ERROR/WARN lines per lesson; exit code 1 on errors.
//
// Checks: lesson shape (exactly the fields the lessons engine renders), grammarIds exist and fit the level, every
// linked grammar point is taught in a section, example pinyin against CC-CEDICT (checkExampleReading) with 一/不 as
// spoken, the word level of HSK 1–3 examples, German spelling (umlauts, „die Partikel“), gendered role nouns for
// persons whose gender the Chinese does not show, and [[lesson:…]] references (no hard-wired „Lektion N“).
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const vocabCheck = require('../enrich/validate.cjs');
const hanzi = require('../hanzi/common.cjs');
const grammarCommon = require('../grammar/common.cjs');
const L = require('./common.cjs');

const SECTION_FIELDS = ['heading', 'text', 'examples', 'tip'];
const EXAMPLE_FIELDS = ['cn', 'pinyin', 'de'];
const ALLOWLIST = path.join(__dirname, 'allowlist.json');

let shared = null;
function context() {
  if (shared) return shared;
  const points = grammarCommon.loadGrammar();
  const byId = new Map(points.map(p => [p.id, p]));
  const allow = L.readJson(ALLOWLIST, { pinyin: [], vocabulary: {} });
  shared = { ctx: vocabCheck.context(), byId, keys: new Map(points.map(p => [p.id, L.keysOf(p)])), allow };
  return shared;
}

const isText = (s, min = 1) => typeof s === 'string' && s.trim().length >= min;
const plainCn = cn => cn.replace(/^[❌✅]\s*/, '').replace(/^\p{Script=Han}{1,4}：/u, '');

// Words a lesson may use above its vocabulary limit: the words of its own grammar points (双 in a 量词 lesson).
function ownWords(lesson, keys) {
  const out = new Set();
  for (const id of lesson.grammarIds || []) {
    const k = keys.get(id);
    if (!k) continue;
    if (k.type === 'groups') k.groups.flat().forEach(w => out.add(w));
    if (k.type === 'list') k.words.forEach(w => out.add(w));
    if (k.type === 'affix') out.add(k.affix);
  }
  return [...out];
}

// Is the grammar point taught in the lesson? Its words (in order) in a heading, text or example of a section.
function taught(lesson, key) {
  const texts = lesson.sections.flatMap(s => [L.stripHtml(s.heading), L.stripHtml(s.text), L.stripHtml(s.tip),
    ...(s.examples || []).filter(e => !/^❌/.test(e.cn)).map(e => plainCn(e.cn))]);
  if (key.type === 'groups') return texts.some(t => L.groupsInText(key.groups, t));
  if (key.type === 'list') {
    // An overview counts as taught with two of its words, or one word of two or more characters (有时候).
    const found = key.words.filter(w => texts.some(t => t.includes(w)));
    return found.length >= Math.min(2, key.words.length) || found.some(w => Array.from(w).length > 1);
  }
  if (key.type === 'affix') return texts.some(t => t.includes(key.affix));
  return true; // descriptive points (主谓句1, 多重复句) cannot be checked by words
}

// Checks one lesson. options.knownIds: lesson ids a [[lesson:…]] may point to; options.authoring: allow `flags`.
function checkLesson(lesson, options = {}) {
  const { ctx, byId, keys, allow } = context();
  const errors = [], warnings = [];
  if (!lesson || typeof lesson !== 'object') return { errors: ['no lesson object'], warnings };
  const allowedFields = options.authoring ? L.LESSON_FIELDS.concat('flags') : L.LESSON_FIELDS;
  const unknown = Object.keys(lesson).filter(k => !allowedFields.includes(k));
  if (unknown.length) errors.push('unknown fields: ' + unknown.join(', ') + ' (allowed: ' + allowedFields.join(', ') + ')');
  for (const f of L.LESSON_FIELDS) if (lesson[f] === undefined) errors.push('field ' + f + ' missing');
  if (!/^lesson-\d+$/.test(lesson.id || '')) errors.push('id must look like lesson-46');
  if (typeof lesson.number !== 'number' || !(lesson.number > 0)) errors.push('number must be a positive number');
  for (const f of ['title', 'subtitle']) if (!isText(lesson[f])) errors.push(f + ': text required');
  if (!isText(lesson.intro, 120)) errors.push('intro: at least 120 characters of German text');
  if (!L.ENGINE_LEVELS.includes(lesson.level)) errors.push('level must be one of ' + L.ENGINE_LEVELS.join(', '));
  if (lesson.flags !== undefined && typeof lesson.flags !== 'string') errors.push('flags must be a string');
  const sections = Array.isArray(lesson.sections) ? lesson.sections : [];
  if (!Array.isArray(lesson.sections) || sections.length < 2 || sections.length > 6) errors.push('sections: 2–6 required');

  // Grammar points and level.
  const ids = Array.isArray(lesson.grammarIds) ? lesson.grammarIds : [];
  if (!Array.isArray(lesson.grammarIds) || !ids.length) errors.push('grammarIds: at least one grammar point required');
  if (new Set(ids).size !== ids.length) errors.push('grammarIds: duplicates');
  const unknownIds = ids.filter(id => !byId.has(id));
  if (unknownIds.length) errors.push('grammarIds: unknown ' + unknownIds.join(', '));
  const ranks = L.ENGINE_LEVELS.includes(lesson.level) ? L.levelRanks(lesson.level) : [];
  const lo = Math.min(...ranks), hi = Math.max(...ranks);
  const known = ids.filter(id => byId.has(id));
  if (ranks.length && known.length) {
    const mainRank = L.RANK[byId.get(known[0]).level];
    if (mainRank !== 8 && (mainRank < lo || mainRank > hi)) errors.push('the first grammar point (main point) ' + known[0] + ' is ' + byId.get(known[0]).level + ', outside the lesson level ' + lesson.level);
    const above = known.filter(id => L.RANK[byId.get(id).level] > hi && L.RANK[byId.get(id).level] !== 8);
    if (above.length) warnings.push('grammar points above the lesson level (only as an outlook): ' + above.join(', '));
  }

  // Sections and examples.
  const vocabLimit = ranks.length && hi <= 3 ? hi + 1 : null;
  const own = ownWords(lesson, keys).concat((allow.vocabulary || {})[lesson.id] || []);
  const vocabIssues = new Set();
  const german = [['title', lesson.title], ['subtitle', lesson.subtitle], ['intro', lesson.intro]];
  sections.forEach((s, si) => {
    const at = 'section ' + (si + 1);
    if (!s || typeof s !== 'object') { errors.push(at + ': no object'); return; }
    const extra = Object.keys(s).filter(k => !SECTION_FIELDS.includes(k));
    if (extra.length) errors.push(at + ': unknown fields ' + extra.join(', '));
    if (!isText(s.heading)) errors.push(at + ': heading required');
    if (!isText(s.text, 40)) errors.push(at + ': text of at least 40 characters required');
    if (s.tip !== undefined && !isText(s.tip, 20)) errors.push(at + ': tip must be text (or left out)');
    german.push([at + ' heading', s.heading], [at + ' text', s.text], [at + ' tip', s.tip]);
    const examples = Array.isArray(s.examples) ? s.examples : [];
    if (!Array.isArray(s.examples) || examples.length < 2 || examples.length > 6) errors.push(at + ': 2–6 examples required');
    examples.forEach((e, ei) => {
      const label = at + ' example ' + (ei + 1);
      if (!e || typeof e !== 'object') { errors.push(label + ': no object'); return; }
      const extraE = Object.keys(e).filter(k => !EXAMPLE_FIELDS.includes(k));
      if (extraE.length) errors.push(label + ': unknown fields ' + extraE.join(', '));
      if (!isText(e.cn) || !L.HAN.test(e.cn)) { errors.push(label + ': cn (Chinese) required'); return; }
      if (!isText(e.de)) errors.push(label + ': de (German) required');
      else german.push([label + ' de', e.de]);
      const negative = /^❌/.test(e.cn);
      if (negative) return; // a marked wrong sentence needs no pinyin and is not checked
      if (!isText(e.pinyin)) { errors.push(label + ': pinyin required'); return; }
      if (L.HAN.test(e.pinyin)) errors.push(label + ': pinyin contains characters');
      const cn = plainCn(e.cn);
      if (!(allow.pinyin || []).includes(e.cn)) {
        const reading = vocabCheck.checkExampleReading(cn, e.pinyin, ctx);
        reading.errors.forEach(x => errors.push(label + ' pinyin: ' + x));
        reading.warnings.forEach(x => warnings.push(label + ' pinyin: ' + x));
      }
      L.sandhiIssues(cn, e.pinyin, ctx.Pinyin).forEach(x => errors.push(label + ' pinyin: ' + x));
      if (/[。？！]$/.test(e.cn) && /^[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(e.pinyin)) warnings.push(label + ' pinyin: capitalise the first word of a sentence');
      if (isText(e.de)) {
        const role = L.genderIssue(cn, e.de);
        if (role) errors.push(label + ': „' + role + '“ fixes a gender the Chinese does not show — use a neutral or plural form („Lehrkraft“, „Studierende“, „Chinese/Chinesin“)');
      }
      if (vocabLimit) vocabCheck.checkBeginnerVocabulary(cn, '\u0000', vocabLimit, ctx, own).forEach(w => vocabIssues.add(w));
    });
  });
  if (vocabIssues.size) {
    const message = 'examples use words above HSK ' + vocabLimit + ' (lesson level + 1): ' + [...vocabIssues].join(', ');
    if (vocabLimit <= 3) errors.push(message); else warnings.push(message);
  }

  // Every linked grammar point is taught.
  if (sections.length) for (const id of known) {
    if (!taught(lesson, keys.get(id))) errors.push('grammar point ' + id + ' is linked but its words do not appear in any section');
  }

  // German and references.
  for (const [where, raw] of german) {
    if (!raw) continue;
    const text = L.stripHtml(raw);
    const spelled = hanzi.asciiUmlauts(text);
    if (spelled.length) errors.push(where + ': write umlauts: ' + spelled.join(', '));
    for (const m of text.matchAll(L.PARTIKEL)) errors.push(where + ': „' + m[0] + '“ — die Partikel (feminin)');
    if (/\bLektion \d+/.test(text)) errors.push(where + ': hard-wired „' + text.match(/\bLektion \d+/)[0] + '“ — use [[lesson:lesson-NN]]');
    for (const m of String(raw).matchAll(/\[\[lesson:([^\]]*)\]\]/g)) {
      if (!/^lesson-\d+$/.test(m[1]) || (options.knownIds && !options.knownIds.has(m[1]))) errors.push(where + ': [[lesson:' + m[1] + ']] does not resolve');
    }
    const masc = text.match(L.PROSE_MASC);
    if (masc) warnings.push(where + ': generic masculine „' + [...new Set(masc)].join('“, „') + '“ — prefer neutral wording (Lernende, die sprechende Person)');
    if (ranks.length) for (const m of text.replace(/Ausblick \(HSK[^)]*\)/g, '').matchAll(/HSK[ -]?(\d)(?![\d-])/g)) {
      const n = Number(m[1]);
      if (n < lo || n > hi) warnings.push(where + ': mentions „' + m[0] + '“, lesson level is ' + lesson.level);
    }
  }
  return { errors, warnings };
}

function mergeReview(authored, review) {
  if (!review || review.verdict !== 'fixed' || !review.fixes) return authored;
  return Object.assign({}, authored, review.fixes);
}

// Lesson ids a reference may point to: the lessons in the file and those of open batches.
function knownLessonIds() {
  const ids = new Set(L.loadLessons().map(l => l.id));
  for (const list of Object.values(enrich.readJson(path.join(enrich.WORK, 'open-batches.json'), {}))) for (const id of list) if (/^lesson-\d+$/.test(id)) ids.add(id);
  return ids;
}

function validatePacket(batch, packet, options = {}) {
  const dir = path.join(enrich.WORK, batch);
  const input = JSON.parse(fs.readFileSync(path.join(dir, 'input', packet + '.json'), 'utf8'));
  const lines = [];
  const read = sub => {
    const file = path.join(dir, sub, packet + '.json');
    if (!fs.existsSync(file)) { lines.push('ERROR ' + sub + '/' + packet + '.json missing'); return null; }
    try { const data = JSON.parse(fs.readFileSync(file, 'utf8')); if (Array.isArray(data)) return data; lines.push('ERROR ' + sub + '/' + packet + '.json is no JSON array'); }
    catch (e) { lines.push('ERROR ' + sub + '/' + packet + '.json: ' + e.message); }
    return null;
  };
  const authored = read('authored');
  const reviews = options.reviewed ? read('reviewed') : [];
  const cards = [];
  const knownIds = knownLessonIds();
  const existing = new Set(L.loadLessons().map(l => l.id));
  if (authored && reviews) {
    const byId = new Map(authored.map(a => [a && a.id, a]));
    const reviewById = new Map((reviews || []).map(r => [r && r.id, r]));
    if (authored.length !== input.length) lines.push('ERROR authored has ' + authored.length + ' lessons, input ' + input.length);
    for (const card of input) {
      const review = reviewById.get(card.id);
      if (options.reviewed && (!review || !['ok', 'fixed'].includes(review.verdict))) lines.push('ERROR ' + card.id + ': review verdict ok/fixed missing');
      const lesson = mergeReview(byId.get(card.id), review);
      if (!lesson) { lines.push('ERROR ' + card.id + ': missing in output'); continue; }
      const { errors, warnings } = checkLesson(lesson, { knownIds, authoring: true });
      // Conformity with the plan.
      for (const key of ['id', 'number', 'level']) if (lesson[key] !== card[key]) errors.push(key + ' must be ' + JSON.stringify(card[key]) + ' (lesson plan)');
      if (existing.has(card.id)) errors.push(card.id + ' already exists in grammar-lessons.js');
      const ids = Array.isArray(lesson.grammarIds) ? lesson.grammarIds : [];
      const missing = card.grammarIds.filter(id => !ids.includes(id));
      if (missing.length) errors.push('grammarIds must include every bundled point; missing: ' + missing.join(', '));
      if (ids.length && !card.main.includes(ids[0])) errors.push('grammarIds must start with a main point (' + card.main.join(', ') + ')');
      errors.forEach(e => lines.push('ERROR ' + card.id + ': ' + e));
      warnings.forEach(w => lines.push('WARN ' + card.id + ': ' + w));
      cards.push({ card, lesson, review: review || null });
    }
  }
  return { ok: !lines.some(l => l.startsWith('ERROR')), lines, cards };
}

// All lessons of grammar-lessons.js (the audit): unique ids and every lesson valid.
function validateAll() {
  const lessons = L.loadLessons();
  const knownIds = new Set(lessons.map(l => l.id));
  const lines = [];
  const seen = new Set();
  for (const lesson of lessons) {
    if (seen.has(lesson.id)) lines.push('ERROR ' + lesson.id + ': duplicate id');
    seen.add(lesson.id);
    const { errors, warnings } = checkLesson(lesson, { knownIds });
    errors.forEach(e => lines.push('ERROR ' + lesson.id + ': ' + e));
    warnings.forEach(w => lines.push('WARN ' + lesson.id + ': ' + w));
  }
  return { ok: !lines.some(l => l.startsWith('ERROR')), lines, count: lessons.length };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.includes('--all')) {
    const result = validateAll();
    result.lines.filter(l => args.includes('--warnings') || l.startsWith('ERROR')).forEach(line => console.log(line));
    const warns = result.lines.filter(l => l.startsWith('WARN')).length;
    console.log(result.ok ? 'Lessons valid: ' + result.count + ' lessons' + (warns ? ', ' + warns + ' warnings (--warnings shows them)' : '') : 'FAILED: lessons invalid');
    if (!result.ok) process.exitCode = 1;
  } else {
    const [batch, packet] = args;
    const result = validatePacket(batch, packet, { reviewed: args.includes('--reviewed') });
    result.lines.forEach(line => console.log(line));
    console.log(result.ok ? 'OK ' + packet : 'FAILED ' + packet);
    if (!result.ok) process.exitCode = 1;
  }
}

module.exports = { checkLesson, validatePacket, validateAll, mergeReview, context };
