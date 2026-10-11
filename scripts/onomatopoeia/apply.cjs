// Applies a validated Lautmalerei batch: writes the authored fields into the data file (all other fields stay), sets
// meaningStatus 'reviewed' (author + reviewer) or 'authored' (author + proofreading), records the content hashes in
// scripts/onomatopoeia/ledger.json and flags/fixes in flags.md, then runs the section audit. Refuses the whole batch if any
// packet fails validation.
// Usage: node scripts/onomatopoeia/apply.cjs <batch>
require('../enrich/section-campaign.cjs').apply(require('./section.cjs'), process.argv.slice(2));
