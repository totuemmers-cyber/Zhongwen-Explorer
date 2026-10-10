// Applies a validated comprehension batch: writes its units into scripts/comprehension/<level>.json, records their
// content hashes in scripts/comprehension/ledger.json and author flags / reviewer fixes in flags.md, and rebuilds
// comprehension-data.js. Refuses the whole batch if any packet fails validation (reviewed packets for HSK 1–4).
// Usage: node scripts/comprehension/apply.cjs <batch>
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const enrich = require('../enrich/common.cjs');
const units = require('./units.cjs');
const { validatePacket } = require('./validate.cjs');

const LEDGER = path.join(__dirname, 'ledger.json');
const contentHash = unit => crypto.createHash('sha256').update(JSON.stringify(unit)).digest('hex').slice(0, 16);

function main() {
  const batch = 'c' + String(Number(process.argv[2])).padStart(3, '0');
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
  const ledger = enrich.readJson(LEDGER, {});
  const date = new Date().toISOString().slice(0, 10);
  const flagLines = [];
  const byLevel = {};
  let fixes = 0;
  for (const { result } of results) {
    for (const { unit, review } of result.cards) {
      const { flags, ...plain } = unit;
      (byLevel[plain.level] = byLevel[plain.level] || []).push(plain);
      ledger[plain.id] = { batch, policy: meta.policy, date, hash: contentHash(plain) };
      if (flags) flagLines.push('- ' + plain.id + ' (author): ' + flags);
      if (review && review.verdict === 'fixed') { fixes++; if (review.comment) flagLines.push('- ' + plain.id + ' (reviewer fix): ' + review.comment); }
    }
  }
  for (const [level, added] of Object.entries(byLevel)) {
    const existing = units.loadLevel(level).filter(u => !added.some(a => a.id === u.id));
    units.writeLevel(level, existing.concat(added));
  }
  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n');
  const flagsFile = path.join(__dirname, 'flags.md');
  const head = fs.existsSync(flagsFile) ? fs.readFileSync(flagsFile, 'utf8') : '# Comprehension authoring flags\n\nAuthor flags and reviewer fixes per batch, for follow-up decisions.\n';
  fs.writeFileSync(flagsFile, head.trimEnd() + '\n\n## ' + batch + ' (' + date + ', ' + meta.policy + ')\n' + (flagLines.join('\n') || '- none') + '\n');
  const openFile = path.join(enrich.WORK, 'open-batches.json');
  const open = enrich.readJson(openFile, {});
  delete open[batch];
  fs.writeFileSync(openFile, JSON.stringify(open, null, 1));
  require('child_process').execFileSync(process.execPath, [path.join(__dirname, '..', 'build-comprehension.cjs')], { stdio: 'inherit' });
  const count = Object.values(byLevel).flat().length;
  fs.writeFileSync(path.join(dir, 'applied.json'), JSON.stringify({ date, units: count, reviewerFixes: fixes }, null, 1));
  console.log('Applied ' + batch + ': ' + count + ' units, reviewer fixes ' + fixes);
}

if (require.main === module) main();
module.exports = { LEDGER, contentHash };
