// Validates an authored Zählwörter packet; --reviewed applies the reviewer's fixes first and requires a verdict per entry,
// --proofread requires the proofreading record (author-only batches).
// Usage: node scripts/measure-words/validate.cjs <batch> pNN [--reviewed | --proofread]
const campaign = require('../enrich/section-campaign.cjs');
const section = require('./section.cjs');

if (require.main === module) campaign.validateCli(section, process.argv.slice(2));
module.exports = { validatePacket: (batch, packet, options) => campaign.validatePacket(section, campaign.batchName(section, batch), packet, options) };
