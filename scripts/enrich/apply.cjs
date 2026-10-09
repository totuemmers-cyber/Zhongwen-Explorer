// Applies a validated enrichment batch to the vocabulary sources.
// Usage: node scripts/enrich/apply.cjs <batch>
// Refuses the whole batch if any packet fails validation (reviewed packets for HSK 1–4).
const fs = require('fs');
const path = require('path');
const common = require('./common.cjs');
const { validatePacket } = require('./validate.cjs');

const batch = 'b' + String(Number(process.argv[2])).padStart(3, '0');
const dir = path.join(common.WORK, batch);
const meta = JSON.parse(fs.readFileSync(path.join(dir, 'batch.json'), 'utf8'));
const reviewed = meta.policy === 'author+review';

const results = meta.packets.map(packet => ({ packet, result: validatePacket(batch, packet, { reviewed }) }));
const failed = results.filter(r => !r.result.ok);
if (failed.length) {
  console.error('Batch ' + batch + ' not applied; failing packets: ' + failed.map(r => r.packet).join(', '));
  failed.forEach(r => console.error(r.result.lines.filter(l => l.startsWith('ERROR')).slice(0, 10).join('\n')));
  process.exit(1);
}

const sources = common.loadSources();
const byId = new Map();
sources.forEach(source => source.items.forEach(item => byId.set(item.id, item)));
const ledger = common.readJson(common.LEDGER, {});
const date = new Date().toISOString().slice(0, 10);
const stats = { cards: 0, meanings: 0, types: 0, separable: 0, reviewerFixes: 0 };
const flagLines = [];

for (const { result } of results) {
  for (const { card, merged, review } of result.cards) {
    const item = byId.get(card.id);
    if (!item) throw new Error('Card ' + card.id + ' no longer exists in the sources');
    if (item.review) throw new Error('Card ' + card.id + ' was already reviewed in ' + item.review.batch);
    if (merged.meaning && merged.meaning !== item.meaning) { item.meaning = merged.meaning; stats.meanings++; }
    if (merged.type && merged.type !== item.type) { item.type = merged.type; stats.types++; }
    item.notes = merged.notes;
    item.examples = merged.examples.map(ex => ({ chinese: ex.chinese, pinyin: ex.pinyin, german: ex.german }));
    if (merged.separable === true) { item.separable = true; stats.separable++; } else delete item.separable;
    delete item.meaningStatus;
    delete item.meaningSource;
    item.review = { batch, policy: meta.policy, date };
    ledger[item.id] = { batch, policy: meta.policy, hash: common.contentHash(item) };
    if (review && review.verdict === 'fixed') stats.reviewerFixes++;
    stats.cards++;
    if (merged.flags) flagLines.push('- ' + item.id + ' ' + item.word + ' (author): ' + merged.flags);
    if (merged.typeReason && merged.type) flagLines.push('- ' + item.id + ' ' + item.word + ' type → ' + merged.type + ': ' + merged.typeReason);
    if (review && review.verdict === 'fixed' && review.comment) flagLines.push('- ' + item.id + ' ' + item.word + ' (reviewer fix): ' + review.comment);
  }
}

common.writeSources(sources);
fs.writeFileSync(common.LEDGER, JSON.stringify(ledger, null, 1) + '\n');
require('../build-vocab-runtime.cjs').writeVocabRuntime();

const flagsFile = path.join(__dirname, 'flags.md');
const existing = fs.existsSync(flagsFile) ? fs.readFileSync(flagsFile, 'utf8') : '# Enrichment flags\n\nAuthor flags, type changes and reviewer fixes per batch, for follow-up decisions.\n';
fs.writeFileSync(flagsFile, existing.trimEnd() + '\n\n## ' + batch + ' (' + date + ', ' + meta.policy + ')\n' + (flagLines.join('\n') || '- none') + '\n');

const openFile = path.join(common.WORK, 'open-batches.json');
const open = common.readJson(openFile, {});
delete open[batch];
fs.writeFileSync(openFile, JSON.stringify(open, null, 1));
fs.writeFileSync(path.join(dir, 'applied.json'), JSON.stringify(Object.assign({ date }, stats), null, 1));
console.log('Applied ' + batch + ': ' + JSON.stringify(stats));
