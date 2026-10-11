// Applies a validated lesson batch: appends its lessons to the LESSONS array of grammar-lessons.js (same object shape
// and line endings as the existing lessons), records their content hashes in scripts/lessons/ledger.json and author
// flags / reviewer fixes in scripts/lessons/flags.md, and checks all lessons afterwards (restores the file on failure).
// Refuses the whole batch if any packet fails validation (author + review/proofread, so reviewed/ is required).
// Usage: node scripts/lessons/apply.cjs <batch>
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const L = require('./common.cjs');
const { validatePacket, validateAll } = require('./validate.cjs');

function main() {
  const batch = 'l' + String(Number(process.argv[2])).padStart(3, '0');
  const dir = path.join(enrich.WORK, batch);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'batch.json'), 'utf8'));
  const results = meta.packets.map(packet => ({ packet, result: validatePacket(batch, packet, { reviewed: true }) }));
  const failed = results.filter(r => !r.result.ok);
  if (failed.length) {
    console.error('Batch ' + batch + ' not applied; failing packets: ' + failed.map(r => r.packet).join(', '));
    failed.forEach(r => console.error(r.result.lines.filter(l => l.startsWith('ERROR')).slice(0, 10).join('\n')));
    process.exit(1);
  }
  const date = new Date().toISOString().slice(0, 10);
  const ledger = L.readJson(L.LEDGER, {});
  const flagLines = [];
  const added = [];
  let fixes = 0;
  for (const { result } of results) {
    for (const { lesson, review } of result.cards) {
      const { flags, ...plain } = lesson;
      // Field order as in the file.
      const ordered = {};
      for (const field of L.LESSON_FIELDS) ordered[field] = plain[field];
      ordered.sections = plain.sections.map(s => {
        const out = { heading: s.heading.trim(), text: s.text.trim(), examples: s.examples.map(e => ({ cn: e.cn.trim(), pinyin: (e.pinyin || '').trim(), de: e.de.trim() })) };
        if (s.tip) out.tip = s.tip.trim();
        return out;
      });
      added.push(ordered);
      ledger[ordered.id] = { batch, policy: meta.policy, date, hash: L.contentHash(ordered) };
      if (flags) flagLines.push('- ' + ordered.id + ' (author): ' + flags);
      if (review && review.verdict === 'fixed') { fixes++; if (review.comment) flagLines.push('- ' + ordered.id + ' (' + (meta.policy === 'author+review' ? 'reviewer' : 'proofreader') + ' fix): ' + review.comment); }
    }
  }
  const before = fs.readFileSync(L.LESSONS_FILE, 'utf8');
  const existing = new Set(L.loadLessons(before).map(l => l.id));
  const clash = added.filter(l => existing.has(l.id));
  if (clash.length) { console.error('Not applied: already in grammar-lessons.js: ' + clash.map(l => l.id).join(', ')); process.exit(1); }
  fs.writeFileSync(L.LESSONS_FILE, L.appendLessons(before, added));
  const check = validateAll();
  if (!check.ok) {
    fs.writeFileSync(L.LESSONS_FILE, before);
    console.error('Not applied: grammar-lessons.js would be invalid; restored.\n' + check.lines.filter(l => l.startsWith('ERROR')).slice(0, 20).join('\n'));
    process.exit(1);
  }
  fs.writeFileSync(L.LEDGER, JSON.stringify(ledger, null, 1) + '\n');
  const flagsFile = path.join(__dirname, 'flags.md');
  const head = fs.existsSync(flagsFile) ? fs.readFileSync(flagsFile, 'utf8') : '# Lesson authoring flags\n\nAuthor flags and reviewer/proofreader fixes per batch, for follow-up decisions.\n';
  fs.writeFileSync(flagsFile, head.trimEnd() + '\n\n## ' + batch + ' (' + date + ', ' + meta.policy + ')\n' + (flagLines.join('\n') || '- none') + '\n');
  const openFile = path.join(enrich.WORK, 'open-batches.json');
  const open = enrich.readJson(openFile, {});
  delete open[batch];
  fs.writeFileSync(openFile, JSON.stringify(open, null, 1));
  fs.writeFileSync(path.join(dir, 'applied.json'), JSON.stringify({ date, lessons: added.length, fixes }, null, 1));
  console.log('Applied ' + batch + ': ' + added.length + ' lessons (' + added.map(l => l.id).join(', ') + '), fixes ' + fixes);
}

if (require.main === module) main();
