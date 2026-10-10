// Corrections to grammar points after the build: renames (a typo in the printed syllabus, 所处 for 处所, became the
// id and pattern; 用不着 got its sub-category as prefix) and merges of duplicates (an old point written with ... and
// with …). The old id stays as legacyId (bookmarks, deep links); related links and the ledger follow.
// Re-runnable.
// Usage: node scripts/grammar/fix-points.cjs [--dry-run]
const fs = require('fs');
const enrich = require('../enrich/common.cjs');
const grammar = require('./common.cjs');
const { LEDGER, contentHash } = require('./apply.cjs');

const DRY = process.argv.includes('--dry-run');
const RENAMES = {
  'g:所处+是+名词': { id: 'g:处所+是+名词', pattern: '处所+是+名词', content: '（1）处所+是+名词' },
  'g:其他：用不着': { id: 'g:用不着', pattern: '用不着' },
  // The card teaches the standard form; the frequent blend 无外乎 is named in the explanation and accepted in the quiz.
  'g:无外乎': { id: 'g:不外乎', pattern: '不外乎' }
};
// Duplicate → kept point; the duplicate disappears, its ids become legacyIds of the kept point.
const MERGES = {
  'g:之所以...是因为...': 'g:之所以…是因为…',
  // 孰不知 is a disputed spelling of 殊不知; the 殊不知 card explains it.
  'g:孰不知': 'g:殊不知'
};
// Content edits that go with the renames and merges (field → new value, or a function of the old value).
const CONTENT = {
  'g:不外乎': {
    explanation: '不外乎 (búwàihū) bedeutet „geht nicht über … hinaus“: 不 „nicht“, 外 „außerhalb“, 乎 entspricht dem klassischen 于. Damit reduziert man etwas auf wenige, oft aufgezählte Punkte – typische Subjekte sind Gründe, Methoden oder Möglichkeiten. Es steht als Prädikat nach dem Subjekt; danach folgen Nomen, Verbgruppen oder eine Aufzählung, gern mit Zahl („zwei Dinge“). Der Ton ist sachlich-zusammenfassend, in Texten und gehobener Rede. Sehr häufig liest und hört man auch 无外乎 (wúwàihū), eine Mischform aus 不外乎 und 无非 (wúfēi), die Wörterbücher und Lektorate oft als nicht normgerecht ansehen – in sorgfältigen Texten ist 不外乎 sicherer.',
    notes: '无非 (wúfēi) ist ähnlich, klingt aber oft abwertend („bloß, nichts weiter als“) und verbindet sich gern mit 罢了 (bàle) oder 而已 (éryǐ); 不外乎 stellt eher sachlich fest, dass die Aufzählung vollständig ist.',
    examples: examples => examples.map(e => Object.assign({}, e, { chinese: e.chinese.replace('无外乎', '不外乎'), pinyin: e.pinyin.replace('wúwàihū', 'búwàihū') })),
    quiz: quiz => Object.assign({}, quiz, { answer: '不外乎', accepted: ['无外乎', '无非是'] })
  },
  // The concessive X是X，就是…… and the tautology X是X (HSK 4) link to each other.
  'g:……X是X，就是/不过……': {
    related: related => [...new Set([...(related || []), 'g:X是X'])]
  },
  'g:殊不知': {
    notes: notes => notes.replace('diese Schreibung gilt in Normwerken als Fehler (eigener Zusatzpunkt).', 'diese Schreibung gilt in Normwerken als Fehler, denn wörtlich heißt 孰不知 „wer wüsste nicht?“ – beim Lesen verstehen, selbst aber 殊不知 schreiben.')
  }
};

const entries = grammar.loadGrammar();
const ledger = enrich.readJson(LEDGER, {});
const changes = [];
const touched = new Set();
for (const [oldId, to] of Object.entries(RENAMES)) {
  const entry = entries.find(e => e.id === oldId);
  if (!entry) continue;
  entry.id = to.id;
  entry.pattern = to.pattern;
  if (entry.syllabus && to.content) entry.syllabus.content = to.content;
  entry.legacyIds = [...new Set([...(entry.legacyIds || []), oldId])].filter(id => id !== to.id);
  if (ledger[oldId]) { ledger[to.id] = ledger[oldId]; delete ledger[oldId]; }
  touched.add(entry);
  changes.push(oldId + ' → ' + to.id);
  for (const other of entries) {
    if ((other.related || []).includes(oldId)) { other.related = other.related.map(id => id === oldId ? to.id : id); touched.add(other); }
  }
}
for (const [dupId, keepId] of Object.entries(MERGES)) {
  const dup = entries.find(e => e.id === dupId);
  const keep = entries.find(e => e.id === keepId);
  if (!dup || !keep) continue;
  keep.legacyIds = [...new Set([...(keep.legacyIds || []), dupId, ...(dup.legacyIds || [])])].filter(id => id !== keepId);
  entries.splice(entries.indexOf(dup), 1);
  delete ledger[dupId];
  touched.add(keep);
  changes.push(dupId + ' merged into ' + keepId);
  for (const other of entries) {
    if ((other.related || []).includes(dupId)) {
      other.related = [...new Set(other.related.map(id => id === dupId ? keepId : id))].filter(id => id !== other.id);
      touched.add(other);
    }
  }
}
for (const [id, fields] of Object.entries(CONTENT)) {
  const entry = entries.find(e => e.id === id);
  if (!entry) continue;
  for (const [field, value] of Object.entries(fields)) {
    const next = typeof value === 'function' ? value(entry[field]) : value;
    if (JSON.stringify(next) !== JSON.stringify(entry[field])) { entry[field] = next; touched.add(entry); changes.push(id + ': ' + field + ' edited'); }
  }
}
for (const entry of touched) if (ledger[entry.id] && entry.review) ledger[entry.id].hash = contentHash(entry);
console.log(changes.length + ' changes' + (DRY ? ' (dry run)' : '') + (changes.length ? ':\n' + changes.join('\n') : ''));
if (!DRY && changes.length) {
  grammar.writeGrammar(entries);
  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n');
}
