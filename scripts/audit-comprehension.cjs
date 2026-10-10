// Audits the guided reading and listening units (scripts/comprehension/<level>.json): ids and order, required fields,
// German prose, questions, evidence and answers, passage pinyin (ruby alignment and CC-CEDICT readings), text length
// per level, the syllabus task, and that comprehension-data.js and the counts in lang-profile.js are current.
// Passes with zero units.
// Usage: node scripts/audit-comprehension.cjs
const fs = require('fs');
const path = require('path');
const build = require('./build-comprehension.cjs');
const validate = require('./enrich/validate.cjs');

const ROOT = path.resolve(__dirname, '..');
const HAN = /[〇㐀-鿿豈-﫿]/;
const SKILLS = build.SKILLS;
const KINDS = ['global', 'detail', 'inference', 'purpose', 'attitude'];
const SPEAKERS = ['A', 'B', ''];
// Han characters per unit (all passages) for reading; listening texts take 60 % of these bounds.
const READING_LENGTH = { HSK1: [40, 80], HSK2: [80, 150], HSK3: [150, 250], HSK4: [250, 400], HSK5: [400, 600], HSK6: [600, 800], 'HSK7-9': [800, 1100] };
const LISTENING_SHARE = 0.6;
const GERMAN_FIELDS = ['title', 'objective', 'textType', 'introduction', 'translation', 'note'];
// Explanatory prose may quote the Chinese word it explains (Uhrzeiten werden mit 点 gebildet); the rest is German only.
const QUOTING_FIELDS = new Set(['introduction', 'note']);

const hanCount = text => Array.from(text).filter(ch => HAN.test(ch)).length;
const nonEmpty = value => typeof value === 'string' && value.trim().length > 0;
const syllabusLevel = level => level.replace(/^HSK/, '');
function lengthBounds(level, skill) {
  const [min, max] = READING_LENGTH[level];
  return skill === 'listening' ? [Math.round(min * LISTENING_SHARE), Math.round(max * LISTENING_SHARE)] : [min, max];
}

// sources: [{ level, file, units }] as build.loadSources returns them.
// options: { readingContext: () => ctx of enrich/validate.cjs, vocabIds: () => Set, tasks, topics, root }
function auditUnits(sources, options) {
  const errors = [], warnings = [];
  const tasks = options.tasks, topics = options.topics;
  const seen = new Set();
  let ctx = null, vocabIds = null;
  for (const source of sources) {
    const nextOrder = { reading: 1, listening: 1 };
    const positions = {};
    source.units.forEach((u, index) => {
      const where = source.file + ' #' + (index + 1);
      if (!u || typeof u !== 'object' || Array.isArray(u)) { errors.push(where + ': not a unit object'); return; }
      const label = (nonEmpty(u.id) ? u.id : where) + ': ';
      const error = message => errors.push(label + message), warn = message => warnings.push(label + message);
      // Identity and order.
      if (u.level !== source.level) error('level ' + u.level + ' in ' + source.file);
      if (!SKILLS.includes(u.skill)) { error('skill must be reading or listening'); return; }
      // Packets of the authoring campaign hold a slice of a level (options.sequence false): no sequence check there.
      if (options.sequence !== false && u.order !== nextOrder[u.skill]) error('order ' + u.order + ', expected ' + nextOrder[u.skill] + ' (consecutive per level and skill, in file order)');
      nextOrder[u.skill] = (Number.isInteger(u.order) ? u.order : nextOrder[u.skill]) + 1;
      const expectedId = u.skill + '-' + source.level.toLowerCase() + '-' + String(u.order).padStart(2, '0');
      if (u.id !== expectedId) error('id must be ' + expectedId);
      if (seen.has(u.id)) error('duplicate id');
      seen.add(u.id);
      // German prose.
      for (const key of GERMAN_FIELDS) {
        if (!nonEmpty(u[key])) error(key + ' missing');
        else if (!QUOTING_FIELDS.has(key) && HAN.test(u[key])) error(key + ' contains Chinese characters (German prose only)');
      }
      if (!Number.isInteger(u.minutes) || u.minutes < 1 || u.minutes > 60) error('minutes must be an integer from 1 to 60');
      // Syllabus task and topic.
      const levelNo = syllabusLevel(source.level);
      if (!u.task || !Number.isInteger(u.task.no) || !nonEmpty(u.task.title)) error('task { no, title } missing');
      else {
        const task = tasks.find(t => t.level === levelNo && t.no === u.task.no);
        if (!task) error('task ' + u.task.no + ' is not in the HSK ' + levelNo + ' task list (scripts/hsk2025/tasks.json)');
        else {
          if (task.title !== u.task.title) error('task ' + u.task.no + ' is titled ' + task.title + ' in the syllabus, not ' + u.task.title);
          if (!task.descriptors.some(d => d.skills.includes(u.skill))) warn('task ' + u.task.no + ' has no ' + u.skill + ' descriptor');
        }
      }
      const tiers = nonEmpty(u.topic) ? u.topic.split('›') : [];
      if (tiers.length !== 3 || tiers.some(t => !t.trim())) error('topic must read tier1›tier2›tier3');
      else if (!topics.some(t => t.level === levelNo && t.tier1 === tiers[0] && t.tier2 === tiers[1] && t.tier3 === tiers[2])) warn('topic ' + u.topic + ' is not in the HSK ' + levelNo + ' topic list');
      // Passages.
      const passageIds = new Set();
      let chars = 0;
      if (!Array.isArray(u.passages) || !u.passages.length) error('passages missing');
      else u.passages.forEach((p, i) => {
        const at = 'passage ' + (p && p.id || i + 1) + ': ';
        if (!p || !/^p\d+$/.test(p.id)) { error(at + 'id must be p1, p2, …'); return; }
        if (passageIds.has(p.id)) error(at + 'duplicate id');
        passageIds.add(p.id);
        if (!SPEAKERS.includes(p.speaker === undefined ? '' : p.speaker)) error(at + "speaker must be 'A', 'B' or ''");
        if (p.label !== undefined && (!nonEmpty(p.label) || HAN.test(p.label))) error(at + 'label must be German text');
        if (!nonEmpty(p.text) || !HAN.test(p.text)) { error(at + 'Chinese text missing'); return; }
        if (!nonEmpty(p.pinyin) || HAN.test(p.pinyin)) { error(at + 'pinyin missing or contains characters'); return; }
        chars += hanCount(p.text);
        ctx = ctx || options.readingContext();
        const reading = validate.checkExampleReading(p.text, p.pinyin, ctx);
        reading.errors.forEach(e => error(at + 'pinyin: ' + e));
        reading.warnings.forEach(w => warn(at + 'pinyin: ' + w));
        if (!reading.errors.length && !ctx.Pinyin.align(p.text, p.pinyin)) error(at + 'pinyin does not align with the characters for ruby');
      });
      if (READING_LENGTH[source.level] && chars) {
        const [min, max] = lengthBounds(source.level, u.skill);
        if (chars < min || chars > max) error(chars + ' Han characters, expected ' + min + '–' + max + ' for ' + u.skill + ' at ' + source.level);
      }
      // Glossary.
      if (!Array.isArray(u.glossary) || !u.glossary.length) error('glossary missing');
      else u.glossary.forEach((g, i) => {
        const at = 'glossary ' + (g && g.word || i + 1) + ': ';
        if (!g || !nonEmpty(g.word) || !HAN.test(g.word)) { error(at + 'word missing'); return; }
        if (!nonEmpty(g.pinyin) || HAN.test(g.pinyin)) error(at + 'pinyin missing or contains characters');
        if (!nonEmpty(g.meaning)) error(at + 'meaning missing');
        else if (HAN.test(g.meaning)) error(at + 'meaning contains Chinese characters (German prose only)');
        if (Array.isArray(u.passages) && !u.passages.some(p => p && typeof p.text === 'string' && p.text.includes(g.word))) warn(at + 'word does not occur in the text');
        if (g.vocabId !== undefined) {
          vocabIds = vocabIds || options.vocabIds();
          if (!vocabIds.has(g.vocabId)) error(at + 'vocabId ' + g.vocabId + ' is not a vocabulary entry');
        }
      });
      // Questions.
      const questionIds = new Set();
      if (!Array.isArray(u.questions) || !u.questions.length) error('questions missing');
      else u.questions.forEach((q, i) => {
        const at = 'question ' + (q && q.id || i + 1) + ': ';
        if (!q || !/^q\d+$/.test(q.id)) { error(at + 'id must be q1, q2, …'); return; }
        if (questionIds.has(q.id)) error(at + 'duplicate id');
        questionIds.add(q.id);
        if (!KINDS.includes(q.kind)) error(at + 'kind must be one of ' + KINDS.join(', '));
        if (!nonEmpty(q.prompt)) error(at + 'prompt missing');
        if (!passageIds.has(q.evidence)) error(at + 'evidence ' + q.evidence + ' is no passage id');
        const allowed = u.skill === 'reading' ? [4] : [3, 4];
        if (!Array.isArray(q.choices) || !allowed.includes(q.choices.length)) { error(at + (u.skill === 'reading' ? '4' : '3 or 4') + ' choices required'); return; }
        q.choices.forEach((c, ci) => {
          if (!c || !nonEmpty(c.text)) error(at + 'choice ' + (ci + 1) + ' text missing');
          if (!c || !nonEmpty(c.explanation)) error(at + 'choice ' + (ci + 1) + ' explanation missing');
        });
        if (new Set(q.choices.map(c => c && c.text)).size !== q.choices.length) error(at + 'duplicate choice texts');
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.choices.length) { error(at + 'answer must index a choice'); return; }
        const n = q.choices.length;
        positions[n] = positions[n] || new Array(n).fill(0);
        positions[n][q.answer]++;
      });
      // Recording (optional; listening units without one use the browser voice).
      if (u.audio !== undefined) {
        if (u.skill !== 'listening') error('audio belongs to listening units only');
        else if (!u.audio || !nonEmpty(u.audio.src) || !nonEmpty(u.audio.revision)) error('audio needs src and revision');
        else if (!fs.existsSync(path.join(options.root || ROOT, u.audio.src))) error('audio file ' + u.audio.src + ' missing');
      }
    });
    // Answer positions per level: no position unused or holding more than half of the answers.
    for (const [n, counts] of Object.entries(positions)) {
      const total = counts.reduce((a, b) => a + b, 0);
      if (total >= 2 * n && (counts.includes(0) || Math.max(...counts) > total / 2)) {
        warnings.push(source.level + ': answer positions of ' + n + '-choice questions unbalanced (' + counts.join('/') + ')');
      }
    }
  }
  return { errors, warnings };
}

function main() {
  const errors = [];
  let sources = [];
  try {
    const stale = build.staleFiles(build.buildComprehension());
    if (stale.length) errors.push('stale ' + stale.join(', ') + ': run npm run build:comprehension');
    sources = build.loadSources(build.loadProfile(fs.readFileSync(path.join(ROOT, 'lang-profile.js'), 'utf8')).levels);
  } catch (error) { errors.push(error.message); }
  const result = auditUnits(sources, {
    readingContext: validate.context,
    vocabIds: () => new Set(require('./enrich/common.cjs').loadSources().flatMap(source => source.items).map(item => item.id)),
    tasks: require('./hsk2025/tasks.json').tasks,
    topics: require('./hsk2025/topics.json').topics
  });
  errors.push(...result.errors);
  result.warnings.forEach(w => console.log('WARN  ' + w));
  if (errors.length) {
    console.error('Comprehension audit failed:\n' + errors.slice(0, 80).join('\n') + (errors.length > 80 ? '\n… ' + (errors.length - 80) + ' more' : ''));
    process.exit(1);
  }
  const units = sources.flatMap(source => source.units);
  const per = skill => units.filter(u => u.skill === skill).length;
  console.log('Comprehension audit passed: ' + units.length + ' units (' + per('reading') + ' reading, ' + per('listening') + ' listening), ' +
    units.reduce((n, u) => n + u.questions.length, 0) + ' questions, ' + result.warnings.length + ' warnings; bundle current.');
}

if (require.main === module) main();
module.exports = { auditUnits, lengthBounds, READING_LENGTH };
