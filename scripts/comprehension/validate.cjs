// Validates authored (and reviewed) comprehension packets: the comprehension audit on the packet's units (without
// the per-level sequence check), conformity with the unit plan, the word level of HSK 1–3 texts and German spelling.
// Usage: node scripts/comprehension/validate.cjs <batch> <packet> [--reviewed]
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const vocabCheck = require('../enrich/validate.cjs');
const hanzi = require('../hanzi/common.cjs');
const { auditUnits } = require('../audit-comprehension.cjs');

const ALLOWED = { HSK1: 2, HSK2: 3, HSK3: 4 };
const FIELDS = ['id', 'level', 'skill', 'order', 'title', 'objective', 'task', 'topic', 'textType', 'minutes', 'introduction',
  'passages', 'translation', 'glossary', 'note', 'questions', 'flags'];
let vocabIds = null;

function mergeReview(authored, review) {
  if (!review || review.verdict !== 'fixed' || !review.fixes) return authored;
  return Object.assign({}, authored, review.fixes);
}

function checkPlan(card, unit, errors, warnings) {
  for (const key of ['id', 'level', 'skill', 'order']) if (unit[key] !== card[key]) errors.push(key + ' must be ' + JSON.stringify(card[key]) + ' (unit plan)');
  if (!unit.task || unit.task.no !== card.task.no) errors.push('task.no must be ' + card.task.no + ' (' + card.task.title + ')');
  const unknown = Object.keys(unit).filter(k => !FIELDS.includes(k));
  if (unknown.length) errors.push('unknown fields: ' + unknown.join(', '));
  if (!Array.isArray(unit.questions) || unit.questions.length !== 3) errors.push('exactly 3 questions required');
  const allowed = ALLOWED[card.level];
  if (allowed && Array.isArray(unit.passages)) {
    const own = (unit.glossary || []).map(g => g && g.word).filter(Boolean);
    const issues = [...new Set(unit.passages.flatMap(p => p && p.text ? vocabCheck.checkBeginnerVocabulary(p.text, '', allowed, vocabCheck.context(), own) : []))];
    // Glossed words are explained, so a few above the level are acceptable; unglossed ones are not.
    if (issues.length) (allowed <= 3 ? errors : warnings).push('words above HSK ' + allowed + ' without glossary entry: ' + issues.join(', '));
  }
  const german = [unit.title, unit.objective, unit.textType, unit.introduction, unit.translation, unit.note,
    ...(unit.glossary || []).map(g => g && g.meaning),
    ...(unit.questions || []).flatMap(q => q ? [q.prompt, ...(q.choices || []).flatMap(c => c ? [c.text, c.explanation] : [])] : [])].filter(Boolean).join(' ');
  const spelled = hanzi.asciiUmlauts(german);
  if (spelled.length) errors.push('write umlauts: ' + spelled.join(', '));
  if (unit.flags !== undefined && typeof unit.flags !== 'string') errors.push('flags must be a string');
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
  if (authored && reviews) {
    const byId = new Map(authored.map(a => [a && a.id, a]));
    const reviewById = new Map((reviews || []).map(r => [r && r.id, r]));
    if (authored.length !== input.length) lines.push('ERROR authored has ' + authored.length + ' units, input ' + input.length);
    for (const card of input) {
      const review = reviewById.get(card.id);
      if (options.reviewed && (!review || !['ok', 'fixed'].includes(review.verdict))) lines.push('ERROR ' + card.id + ': review verdict ok/fixed missing');
      const unit = mergeReview(byId.get(card.id), review);
      if (!unit) { lines.push('ERROR ' + card.id + ': missing in output'); continue; }
      const errors = [], warnings = [];
      checkPlan(card, unit, errors, warnings);
      const { flags, ...plain } = unit;
      const audit = auditUnits([{ level: card.level, file: packet, units: [plain] }], {
        sequence: false,
        readingContext: vocabCheck.context,
        vocabIds: () => vocabIds || (vocabIds = new Set(enrich.loadSources().flatMap(s => s.items).map(i => i.id))),
        tasks: require('../hsk2025/tasks.json').tasks,
        topics: require('../hsk2025/topics.json').topics
      });
      audit.errors.forEach(e => errors.push(e.replace(card.id + ': ', '')));
      audit.warnings.filter(w => !/answer positions/.test(w)).forEach(w => warnings.push(w.replace(card.id + ': ', '')));
      errors.forEach(e => lines.push('ERROR ' + card.id + ': ' + e));
      warnings.forEach(w => lines.push('WARN ' + card.id + ': ' + w));
      cards.push({ card, unit, review: review || null });
    }
  }
  return { ok: !lines.some(l => l.startsWith('ERROR')), lines, cards };
}

if (require.main === module) {
  const [batch, packet] = process.argv.slice(2);
  const result = validatePacket(batch, packet, { reviewed: process.argv.includes('--reviewed') });
  result.lines.forEach(line => console.log(line));
  console.log(result.ok ? 'OK ' + packet : 'FAILED ' + packet);
  if (!result.ok) process.exitCode = 1;
}

module.exports = { validatePacket };
