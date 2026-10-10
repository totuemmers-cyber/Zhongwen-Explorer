// One-off correction (2026-10-11): Zusatz grammar points that are really vocabulary — six chengyu and the formal
// verb 适逢 — move into the vocabulary (chengyu-data.js / vocab-zusatz.js) with their reviewed meaning, examples and
// explanation as notes. Their grammar ids map to the new vocab ids in grammar-removed.js, so bookmarks follow.
// The new character 罔 (in 置若罔闻) gets its hanzi card. Re-runnable: points already moved are skipped.
// Usage: node scripts/grammar/move-to-vocab.cjs [--dry-run]
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const enrich = require('../enrich/common.cjs');
const grammar = require('./common.cjs');
const hanzi = require('../hanzi/common.cjs');
const grammarLedgerTools = require('./apply.cjs');
const hanziLedgerTools = require('../hanzi/apply.cjs');

const DRY = process.argv.includes('--dry-run');
const ROOT = enrich.ROOT;
const DATE = '2026-10-11';
const REVIEW = { batch: 'from-grammar', policy: 'author', date: DATE };
// grammar id → vocab entry (pinyin as written in the app, CC-CEDICT key, type, file, category).
const MOVES = {
  'g:置若罔闻': { word: '置若罔闻', pinyin: 'zhìruò-wǎngwén', key: 'zhi4ruo4wang3wen2', type: 'Chengyu', file: 'chengyu-data.js', category: 'Charakter', traditional: '置若罔聞' },
  'g:不胜枚举': { word: '不胜枚举', pinyin: 'búshèng-méijǔ', key: 'bu4sheng4mei2ju3', type: 'Chengyu', file: 'chengyu-data.js', category: 'Lebensweisheit', traditional: '不勝枚舉' },
  'g:行之有效': { word: '行之有效', pinyin: 'xíngzhī-yǒuxiào', key: 'xing2zhi1you3xiao4', type: 'Chengyu', file: 'chengyu-data.js', category: 'Arbeit', traditional: '行之有效' },
  'g:言归正传': { word: '言归正传', pinyin: 'yánguī-zhèngzhuàn', key: 'yan2gui1zheng4zhuan4', type: 'Chengyu', file: 'chengyu-data.js', category: 'Beziehungen', traditional: '言歸正傳' },
  'g:就事论事': { word: '就事论事', pinyin: 'jiùshì-lùnshì', key: 'jiu4shi4lun4shi4', type: 'Chengyu', file: 'chengyu-data.js', category: 'Arbeit', traditional: '就事論事' },
  'g:不可同日而语': { word: '不可同日而语', pinyin: 'bùkě tóngrì ér yǔ', key: 'bu4ke3tong2ri4er2yu3', type: 'Chengyu', file: 'chengyu-data.js', category: 'Lebensweisheit', traditional: '不可同日而語' },
  'g:适逢': { word: '适逢', pinyin: 'shìféng', key: 'shi4feng2', type: 'Verb', file: 'vocab-zusatz.js', category: 'Formell', traditional: '適逢' }
};
// The hanzi card of 罔, written for this move (author content like the hanzi campaign).
const WANG = {
  hanzi: '罔', level: 'Zusatz', traditional: ['罔'],
  readings: [{ pinyin: 'wǎng', meaning: 'nicht; ohne (literarisch, in Wörtern); täuschen; Netz (alte Form von 网)' }],
  primaryRadical: '网',
  components: [{ part: '冂', role: 'form', meaning: 'Umriss eines Netzes' }, { part: '亡', role: 'phonetic', meaning: 'zugrunde gehen (Laut wáng)' }],
  notes: '罔 war ursprünglich das Zeichen für „Netz“: der Rahmen 冂 umschließt das Geflecht, 亡 (wáng) gibt den Laut. Als „Netz“ schreibt man heute 网 (wǎng); 罔 lebt in der Schriftsprache als „nicht, ohne“ weiter. Merkhilfe: Wer im Netz gefangen ist, kommt nicht heraus – „nicht“. Typisch ist 置若罔闻 (zhìruò-wǎngwén) „so tun, als hätte man nichts gehört“; nicht verwechseln mit 网 (wǎng) „Netz“ und 冈 (gāng) „Hügel“.'
};

const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const sources = enrich.loadSources();
const vocabIds = new Set(sources.flatMap(s => s.items).map(i => i.id));
const points = grammar.loadGrammar();
const grammarLedger = enrich.readJson(grammarLedgerTools.LEDGER, {});
const vocabLedger = enrich.readJson(enrich.LEDGER, {});
const cedict = fs.readFileSync(path.join(ROOT, '.content-cache', 'sources', 'cedict_ts.u8'), 'utf8').split('\n');
const removedFile = path.join(ROOT, 'grammar-removed.js');
const removedContext = {};
removedContext.window = removedContext;
vm.runInNewContext(read('grammar-removed.js'), removedContext);
const removed = removedContext.GRAMMAR_REMOVED;
const changes = [];

for (const [gid, to] of Object.entries(MOVES)) {
  const point = points.find(p => p.id === gid);
  if (!point) continue;
  const id = 'w:' + to.word + ':' + to.key;
  if (vocabIds.has(id)) throw new Error(id + ' already exists');
  const line = cedict.find(l => l.split(' ')[1] === to.word);
  const entry = {
    id, word: to.word, pinyin: to.pinyin, meaning: point.meaning, type: to.type, level: 'Zusatz', category: to.category,
    examples: point.examples, legacyIds: [], traditional: to.traditional,
    evidence: line ? { cedict: line.slice(0, line.indexOf('/')).trim() } : {},
    notes: point.explanation + (point.notes ? ' ' + point.notes : ''), review: REVIEW
  };
  const source = sources.find(s => s.file === to.file);
  source.items.push(entry);
  vocabLedger[id] = { batch: REVIEW.batch, policy: REVIEW.policy, hash: enrich.contentHash(entry) };
  points.splice(points.indexOf(point), 1);
  delete grammarLedger[gid];
  for (const old of [gid, ...(point.legacyIds || [])]) removed[old] = id;
  for (const other of points) {
    if ((other.related || []).includes(gid)) {
      other.related = other.related.filter(r => r !== gid);
      if (!other.related.length) delete other.related;
      if (grammarLedger[other.id] && other.review) grammarLedger[other.id].hash = grammarLedgerTools.contentHash(other);
    }
  }
  changes.push(gid + ' → ' + id + ' (' + to.file + ')');
}

// Hanzi 罔.
const characters = hanzi.loadHanzi();
let hanziChanged = false;
if (!characters.some(h => h.hanzi === WANG.hanzi) && changes.some(c => c.includes('置若罔闻'))) {
  const strokes = hanzi.svgStrokeCount(WANG.hanzi);
  if (!strokes) throw new Error('stroke-order diagram for 罔 missing');
  const card = Object.assign({}, WANG, { strokes, words: ['w:置若罔闻:zhi4ruo4wang3wen2'], review: REVIEW });
  characters.push(card);
  const hanziLedger = enrich.readJson(hanziLedgerTools.LEDGER, {});
  hanziLedger[card.hanzi] = { batch: REVIEW.batch, policy: REVIEW.policy, hash: hanziLedgerTools.contentHash(card) };
  if (!DRY) fs.writeFileSync(hanziLedgerTools.LEDGER, JSON.stringify(hanziLedger, null, 1) + '\n');
  hanziChanged = true;
  changes.push('hanzi 罔 added (' + strokes + ' strokes)');
}

console.log(changes.length + ' changes' + (DRY ? ' (dry run)' : '') + (changes.length ? ':\n' + changes.join('\n') : ''));
if (!DRY && changes.length) {
  enrich.writeSources(sources);
  fs.writeFileSync(enrich.LEDGER, JSON.stringify(vocabLedger, null, 1) + '\n');
  grammar.writeGrammar(points);
  fs.writeFileSync(grammarLedgerTools.LEDGER, JSON.stringify(grammarLedger, null, 1) + '\n');
  fs.writeFileSync(removedFile, read('grammar-removed.js').replace(/window\.GRAMMAR_REMOVED = [\s\S]*;\s*$/, 'window.GRAMMAR_REMOVED = ' + JSON.stringify(removed, null, 1) + ';\n'));
  if (hanziChanged) hanzi.writeHanzi(characters);
}
