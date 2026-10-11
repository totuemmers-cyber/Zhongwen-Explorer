// Prepares the next Lautmalerei campaign batch (o001, o002 …): draft entries in level order (optionally only some levels),
// packets of at most 20 with the entry, its draft and evidence, plus BRIEF.md and REVIEW.md (HSK 1–4, author + reviewer)
// or PROOF.md (HSK 5+ and Zusatz, author + proofreading pass). A batch never mixes policies.
// Usage: node scripts/onomatopoeia/prepare.cjs <batch> [--count 100] [--levels HSK1,HSK2]
require('../enrich/section-campaign.cjs').prepare(require('./section.cjs'), process.argv.slice(2));
