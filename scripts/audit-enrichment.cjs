// Enrichment invariants: every reviewed entry is unchanged since validation (ledger hash), has notes and
// 2–3 examples and no draft status; the ledger lists no unknown or unreviewed ids.
const common = require('./enrich/common.cjs');

const sources = common.loadSources();
const ledger = common.readJson(common.LEDGER, {});
const errors = [];
const fail = (message, samples = []) => errors.push(message + (samples.length ? '\n  e.g. ' + samples.slice(0, 6).join('\n  e.g. ') : ''));
const items = sources.flatMap(s => s.items);
const byId = new Map(items.map(i => [i.id, i]));
const reviewed = items.filter(i => i.review);

const changed = reviewed.filter(i => !ledger[i.id] || ledger[i.id].hash !== common.contentHash(i));
if (changed.length) fail(changed.length + ' reviewed entries changed since validation (re-run the batch or re-validate)', changed.map(i => i.id));
const incomplete = reviewed.filter(i => !i.notes || i.notes.length < 80 || !Array.isArray(i.examples) || i.examples.length < 2 || i.examples.length > 3);
if (incomplete.length) fail(incomplete.length + ' reviewed entries without notes or 2–3 examples', incomplete.map(i => i.id));
const drafts = reviewed.filter(i => i.meaningStatus);
if (drafts.length) fail(drafts.length + ' reviewed entries still marked as draft', drafts.map(i => i.id));
const orphans = Object.keys(ledger).filter(id => !byId.has(id) || !byId.get(id).review);
if (orphans.length) fail(orphans.length + ' ledger entries without a reviewed vocabulary entry', orphans);

// Hanzi (Phase 4): the same invariants with their own ledger.
const hanzi = require('./hanzi/common.cjs');
const hanziLedgerTools = require('./hanzi/apply.cjs');
const hanziLedger = common.readJson(hanziLedgerTools.LEDGER, {});
const characters = hanzi.loadHanzi();
const hanziByChar = new Map(characters.map(h => [h.hanzi, h]));
const hanziReviewed = characters.filter(h => h.review);
const hanziChanged = hanziReviewed.filter(h => !hanziLedger[h.hanzi] || hanziLedger[h.hanzi].hash !== hanziLedgerTools.contentHash(h));
if (hanziChanged.length) fail(hanziChanged.length + ' reviewed hanzi changed since validation', hanziChanged.map(h => h.hanzi));
const hanziIncomplete = hanziReviewed.filter(h => !h.notes || h.notes.length < 80 || h.meaningStatus || h.readings.some(r => !r.meaning));
if (hanziIncomplete.length) fail(hanziIncomplete.length + ' reviewed hanzi without notes or meanings, or still draft', hanziIncomplete.map(h => h.hanzi));
const hanziOrphans = Object.keys(hanziLedger).filter(ch => !hanziByChar.has(ch) || !hanziByChar.get(ch).review);
if (hanziOrphans.length) fail(hanziOrphans.length + ' hanzi ledger entries without a reviewed character', hanziOrphans);

// Grammar (Phase 5): the same invariants with their own ledger; a quiz record must point at an example containing its answer.
const grammar = require('./grammar/common.cjs');
const grammarLedgerTools = require('./grammar/apply.cjs');
const grammarLedger = common.readJson(grammarLedgerTools.LEDGER, {});
const points = grammar.loadGrammar();
const pointById = new Map(points.map(p => [p.id, p]));
const grammarReviewed = points.filter(p => p.review);
const grammarChanged = grammarReviewed.filter(p => !grammarLedger[p.id] || grammarLedger[p.id].hash !== grammarLedgerTools.contentHash(p));
if (grammarChanged.length) fail(grammarChanged.length + ' reviewed grammar points changed since validation', grammarChanged.map(p => p.id));
const grammarIncomplete = grammarReviewed.filter(p => !p.meaning || !p.explanation || p.meaningStatus || !Array.isArray(p.examples) || p.examples.length < 3 ||
  (p.quiz && !(p.examples[p.quiz.example] && p.examples[p.quiz.example].chinese.includes(p.quiz.answer))));
if (grammarIncomplete.length) fail(grammarIncomplete.length + ' reviewed grammar points incomplete, still draft or with a broken quiz record', grammarIncomplete.map(p => p.id));
const grammarOrphans = Object.keys(grammarLedger).filter(id => !pointById.has(id) || !pointById.get(id).review);
if (grammarOrphans.length) fail(grammarOrphans.length + ' grammar ledger entries without a reviewed point', grammarOrphans);
// Every row of the official grammar syllabus has a point, and the points quote their row unchanged.
const syllabusRows = require('./hsk2025/grammar.json').rows;
const coveredRows = new Set(points.filter(p => p.syllabus).map(p => p.syllabus.no));
const uncovered = syllabusRows.filter(r => !coveredRows.has(r.no));
if (uncovered.length) fail(uncovered.length + ' grammar syllabus rows without a point', uncovered.map(r => '#' + r.no + ' ' + r.content));
const drifted = points.filter(p => p.syllabus && (!syllabusRows[p.syllabus.no - 1] || syllabusRows[p.syllabus.no - 1].content !== p.syllabus.content));
if (drifted.length) fail(drifted.length + ' grammar points quote a different syllabus row', drifted.map(p => p.id));
const danglingRelated = points.flatMap(p => (p.related || []).filter(id => !pointById.has(id)).map(id => p.id + ' → ' + id));
if (danglingRelated.length) fail(danglingRelated.length + ' related grammar links to unknown points', danglingRelated);

// Grammar lessons (Phase 8): every lesson is in the lesson ledger (baseline or an authoring batch) and unchanged since.
const lessonTools = require('./lessons/common.cjs');
const lessonLedger = common.readJson(lessonTools.LEDGER, {});
const lessons = lessonTools.loadLessons();
const lessonIds = new Set(lessons.map(l => l.id));
const lessonsChanged = lessons.filter(l => !lessonLedger[l.id] || lessonLedger[l.id].hash !== lessonTools.contentHash(l));
if (lessonsChanged.length) fail(lessonsChanged.length + ' grammar lessons not in the ledger or changed since validation (node scripts/lessons/refresh-ledger.cjs <pass> after a checked edit)', lessonsChanged.map(l => l.id));
const lessonOrphans = Object.keys(lessonLedger).filter(id => !lessonIds.has(id));
if (lessonOrphans.length) fail(lessonOrphans.length + ' lesson ledger entries without a lesson', lessonOrphans);

if (errors.length) {
  console.error(errors.join('\n\n'));
  process.exit(1);
}
console.log('Enrichment audit passed: ' + reviewed.length + ' of ' + items.length + ' entries, ' + hanziReviewed.length + ' of ' +
  characters.length + ' hanzi and ' + grammarReviewed.length + ' of ' + points.length + ' grammar points enriched and unchanged since validation; ' + lessons.length + ' grammar lessons unchanged since their ledger entry.');
