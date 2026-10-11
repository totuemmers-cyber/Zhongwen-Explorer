// Records lessons in scripts/lessons/ledger.json that have no entry (the pre-existing lessons, as batch "baseline")
// and refreshes the hash of lessons edited after their batch (a proofreading or fixing pass), marking the pass.
// Usage: node scripts/lessons/refresh-ledger.cjs <pass> [--baseline-note "…"]
const fs = require('fs');
const L = require('./common.cjs');

const args = process.argv.slice(2);
const pass = args[0];
if (!pass || pass.startsWith('--')) { console.error('Usage: refresh-ledger.cjs <pass> [--baseline-note "…"]'); process.exit(1); }
const noteAt = args.indexOf('--baseline-note');
const note = noteAt === -1 ? null : args[noteAt + 1];
const ledger = L.readJson(L.LEDGER, {});
const date = new Date().toISOString().slice(0, 10);
const added = [], refreshed = [];
for (const lesson of L.loadLessons()) {
  const hash = L.contentHash(lesson);
  const entry = ledger[lesson.id];
  if (!entry) {
    ledger[lesson.id] = Object.assign({ batch: 'baseline', policy: 'legacy', date, hash }, note ? { note } : {}, { pass });
    added.push(lesson.id);
  } else if (entry.hash !== hash) {
    ledger[lesson.id] = Object.assign({}, entry, { hash, revised: { pass, date } });
    refreshed.push(lesson.id);
  }
}
fs.writeFileSync(L.LEDGER, JSON.stringify(ledger, null, 1) + '\n');
console.log('Baseline entries added: ' + added.length + '; refreshed: ' + refreshed.length + (refreshed.length ? ' (' + refreshed.join(', ') + ')' : ''));
