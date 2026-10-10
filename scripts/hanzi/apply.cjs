// Applies a validated hanzi enrichment batch to the hanzi sources (readings, components, notes), records the
// content hashes in scripts/hanzi/ledger.json and rebuilds the hanzi runtime.
// Usage: node scripts/hanzi/apply.cjs <batch>
// Refuses the whole batch if any packet fails validation (reviewed packets for HSK 1–4).
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const hanzi = require('./common.cjs');
const { validatePacket } = require('./validate.cjs');

const LEDGER = path.join(__dirname, 'ledger.json');
// The content a card's review covers.
const REVIEWED_FIELDS = ['readings', 'components', 'notes'];
function contentHash(entry) {
  const content = {};
  for (const field of REVIEWED_FIELDS) if (entry[field] !== undefined) content[field] = entry[field];
  return crypto.createHash('sha256').update(JSON.stringify(content)).digest('hex').slice(0, 16);
}

function main() {
  const batch = 'h' + String(Number(process.argv[2])).padStart(3, '0');
  const dir = path.join(enrich.WORK, batch);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'batch.json'), 'utf8'));
  const reviewed = meta.policy === 'author+review';
  const results = meta.packets.map(packet => ({ packet, result: validatePacket(batch, packet, { reviewed }) }));
  const failed = results.filter(r => !r.result.ok);
  if (failed.length) {
    console.error('Batch ' + batch + ' not applied; failing packets: ' + failed.map(r => r.packet).join(', '));
    failed.forEach(r => console.error(r.result.lines.filter(l => l.startsWith('ERROR')).slice(0, 10).join('\n')));
    process.exit(1);
  }

  const entries = hanzi.loadHanzi();
  const byChar = new Map(entries.map(e => [e.hanzi, e]));
  const ledger = enrich.readJson(LEDGER, {});
  const date = new Date().toISOString().slice(0, 10);
  const stats = { cards: 0, meanings: 0, components: 0, reviewerFixes: 0 };
  const flagLines = [];
  for (const { result } of results) {
    for (const { card, merged, review } of result.cards) {
      const entry = byChar.get(card.id);
      if (!entry) throw new Error('Hanzi ' + card.id + ' no longer exists');
      if (entry.review) throw new Error('Hanzi ' + card.id + ' was already reviewed in ' + entry.review.batch);
      stats.meanings += merged.readings.filter((r, i) => r.meaning !== (entry.readings[i] || {}).meaning).length;
      if (JSON.stringify(merged.components) !== JSON.stringify(entry.components)) stats.components++;
      entry.readings = merged.readings.concat(merged.addReadings || []).map(r => ({ pinyin: r.pinyin, meaning: r.meaning.trim() }));
      if (merged.addReadings && merged.addReadings.length) flagLines.push('- ' + entry.hanzi + ' readings added: ' + merged.addReadings.map(r => r.pinyin).join(', '));
      entry.components = merged.components.map(c => ({ part: c.part, role: c.role, meaning: c.meaning.trim() }));
      entry.notes = merged.notes.trim();
      delete entry.meaningStatus;
      entry.review = { batch, policy: meta.policy, date };
      ledger[entry.hanzi] = { batch, policy: meta.policy, hash: contentHash(entry) };
      if (review && review.verdict === 'fixed') stats.reviewerFixes++;
      stats.cards++;
      if (merged.flags) flagLines.push('- ' + entry.hanzi + ' (author): ' + merged.flags);
      if (review && review.verdict === 'fixed' && review.comment) flagLines.push('- ' + entry.hanzi + ' (reviewer fix): ' + review.comment);
    }
  }
  hanzi.writeHanzi(entries);
  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n');
  require('../build-hanzi-runtime.cjs').writeHanziRuntime();

  const flagsFile = path.join(__dirname, 'flags.md');
  const existing = fs.existsSync(flagsFile) ? fs.readFileSync(flagsFile, 'utf8') : '# Hanzi enrichment flags\n\nAuthor flags and reviewer fixes per batch, for follow-up decisions.\n';
  fs.writeFileSync(flagsFile, existing.trimEnd() + '\n\n## ' + batch + ' (' + date + ', ' + meta.policy + ')\n' + (flagLines.join('\n') || '- none') + '\n');
  const openFile = path.join(enrich.WORK, 'open-batches.json');
  const open = enrich.readJson(openFile, {});
  delete open[batch];
  fs.writeFileSync(openFile, JSON.stringify(open, null, 1));
  fs.writeFileSync(path.join(dir, 'applied.json'), JSON.stringify(Object.assign({ date }, stats), null, 1));
  console.log('Applied ' + batch + ': ' + JSON.stringify(stats));
}

if (require.main === module) main();
module.exports = { LEDGER, REVIEWED_FIELDS, contentHash };
