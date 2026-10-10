// Applies a validated grammar enrichment batch to the grammar sources, records the content hashes in
// scripts/grammar/ledger.json and the author flags / reviewer fixes in scripts/grammar/flags.md.
// Usage: node scripts/grammar/apply.cjs <batch>
// Refuses the whole batch if any packet fails validation (reviewed packets for HSK 1–4).
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const grammar = require('./common.cjs');
const { validatePacket } = require('./validate.cjs');

const LEDGER = path.join(__dirname, 'ledger.json');
// The content a point's review covers.
const REVIEWED_FIELDS = ['meaning', 'formation', 'explanation', 'notes', 'examples', 'quiz', 'related'];
function contentHash(entry) {
  const content = {};
  for (const field of REVIEWED_FIELDS) if (entry[field] !== undefined) content[field] = entry[field];
  return crypto.createHash('sha256').update(JSON.stringify(content)).digest('hex').slice(0, 16);
}

function main() {
  const batch = 'g' + String(Number(process.argv[2])).padStart(3, '0');
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

  const entries = grammar.loadGrammar();
  const byId = new Map(entries.map(e => [e.id, e]));
  const ledger = enrich.readJson(LEDGER, {});
  const date = new Date().toISOString().slice(0, 10);
  const stats = { points: 0, withQuiz: 0, reviewerFixes: 0 };
  const flagLines = [];
  for (const { result } of results) {
    for (const { card, merged, review } of result.cards) {
      const entry = byId.get(card.id);
      if (!entry) throw new Error('Grammar point ' + card.id + ' no longer exists');
      if (entry.review) throw new Error('Grammar point ' + card.id + ' was already reviewed in ' + entry.review.batch);
      entry.meaning = merged.meaning.trim();
      for (const field of ['formation', 'notes']) {
        if (merged[field]) entry[field] = merged[field].trim(); else delete entry[field];
      }
      entry.explanation = merged.explanation.trim();
      entry.examples = merged.examples.map(ex => ({ chinese: ex.chinese.trim(), pinyin: ex.pinyin.trim(), german: ex.german.trim() }));
      if (merged.quiz) {
        entry.quiz = { example: merged.quiz.example, answer: merged.quiz.answer, distractors: merged.quiz.distractors.map(d => ({ text: d.text, reason: d.reason.trim() })) };
        if (merged.quiz.accepted && merged.quiz.accepted.length) entry.quiz.accepted = merged.quiz.accepted;
        stats.withQuiz++;
      } else delete entry.quiz;
      if (merged.related && merged.related.length) entry.related = merged.related; else delete entry.related;
      delete entry.meaningStatus;
      entry.review = { batch, policy: meta.policy, date };
      ledger[entry.id] = { batch, policy: meta.policy, hash: contentHash(entry) };
      if (review && review.verdict === 'fixed') stats.reviewerFixes++;
      stats.points++;
      if (merged.flags) flagLines.push('- ' + entry.id + ' (author): ' + merged.flags);
      if (merged.noQuiz) flagLines.push('- ' + entry.id + ' (no quiz): ' + merged.noQuiz);
      if (review && review.verdict === 'fixed' && review.comment) flagLines.push('- ' + entry.id + ' (reviewer fix): ' + review.comment);
    }
  }
  grammar.writeGrammar(entries);
  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n');

  const flagsFile = path.join(__dirname, 'flags.md');
  const existing = fs.existsSync(flagsFile) ? fs.readFileSync(flagsFile, 'utf8') : '# Grammar enrichment flags\n\nAuthor flags, points without a quiz and reviewer fixes per batch, for follow-up decisions.\n';
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
