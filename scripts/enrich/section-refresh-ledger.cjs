// Refreshes ledger hashes of section-campaign entries (Zählwörter, Lautmalerei) whose authored fields were changed on
// purpose after their batch (a cleanup pass, e.g. 2026-10-11: the forced question words 几脸/几屋子/几桌子 dropped).
// Only the named ids are refreshed; each must be reviewed/authored with a ledger record and a changed hash. The record
// keeps batch, policy and status and gains revised: {pass, date, note}.
// Usage: node scripts/enrich/section-refresh-ledger.cjs <measure-words|onomatopoeia> <pass> --ids <id,id,…> [--note "…"] [--dry-run]
'use strict';
const fs = require('fs');
const path = require('path');
const campaign = require('./section-campaign.cjs');
const enrich = require('./common.cjs');

const SECTIONS = { 'measure-words': '../measure-words/section.cjs', onomatopoeia: '../onomatopoeia/section.cjs' };
const args = process.argv.slice(2);
const option = name => { const i = args.indexOf(name); return i === -1 ? null : args[i + 1]; };
const [name, pass] = args;
const ids = (option('--ids') || '').split(',').map(s => s.trim()).filter(Boolean);
const note = option('--note');
const DRY = args.includes('--dry-run');
if (!SECTIONS[name] || !pass || pass.startsWith('--') || !ids.length) {
  console.error('Usage: section-refresh-ledger.cjs <' + Object.keys(SECTIONS).join('|') + '> <pass> --ids <id,id,…> [--note "…"] [--dry-run]');
  process.exit(1);
}
const section = require(SECTIONS[name]);
const ledgerFile = path.join(section.dir, 'ledger.json');
const ledger = enrich.readJson(ledgerFile, {});
const items = new Map(section.load().map(m => [m.id, m]));
const date = new Date().toISOString().slice(0, 10);
const problems = [];
const refreshed = [];
for (const id of ids) {
  const item = items.get(id);
  const record = ledger[id];
  if (!item) { problems.push(id + ': no such entry'); continue; }
  if (!record) { problems.push(id + ': no ledger record (edit drafts through a campaign batch)'); continue; }
  if (item.meaningStatus !== record.status) { problems.push(id + ': meaningStatus ' + item.meaningStatus + ' ≠ ledger ' + record.status); continue; }
  const hash = campaign.contentHash(item, section.HASH_FIELDS);
  if (hash === record.hash) { problems.push(id + ': hash unchanged, nothing to refresh'); continue; }
  ledger[id] = Object.assign({}, record, { hash, revised: Object.assign({ pass, date }, note ? { note } : {}) });
  refreshed.push(id);
}
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
if (!DRY) fs.writeFileSync(ledgerFile, JSON.stringify(ledger, null, 1) + '\n');
console.log((DRY ? 'Would refresh ' : 'Refreshed ') + refreshed.length + ' ledger hash(es) in ' + path.relative(enrich.ROOT, ledgerFile) + ': ' + refreshed.join(', '));
