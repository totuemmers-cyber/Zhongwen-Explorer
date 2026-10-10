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

if (errors.length) {
  console.error(errors.join('\n\n'));
  process.exit(1);
}
console.log('Enrichment audit passed: ' + reviewed.length + ' of ' + items.length + ' entries and ' + hanziReviewed.length + ' of ' +
  characters.length + ' hanzi enriched and unchanged since validation.');
