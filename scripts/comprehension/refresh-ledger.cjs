// Records the current content hash of units edited after their batch was applied (e.g. a proofreading pass),
// marking them with the pass name. Usage: node scripts/comprehension/refresh-ledger.cjs <level> <pass>
const fs = require('fs');
const units = require('./units.cjs');
const { LEDGER, contentHash } = require('./apply.cjs');

const [level, pass] = process.argv.slice(2);
if (!level || !pass) { console.error('Usage: refresh-ledger.cjs <level> <pass>'); process.exit(1); }
const ledger = JSON.parse(fs.readFileSync(LEDGER, 'utf8'));
const date = new Date().toISOString().slice(0, 10);
const changed = [];
for (const unit of units.loadLevel(level)) {
  const entry = ledger[unit.id];
  if (!entry) { console.error('No ledger entry for ' + unit.id); process.exit(1); }
  const hash = contentHash(unit);
  if (entry.hash === hash) continue;
  ledger[unit.id] = { ...entry, hash, revised: { pass, date } };
  changed.push(unit.id);
}
fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n');
console.log('Refreshed ' + changed.length + ' units' + (changed.length ? ': ' + changed.join(', ') : ''));
