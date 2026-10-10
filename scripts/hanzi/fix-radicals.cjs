// One-off correction (2026-10-10): merges kangxi-radicals-data.js and kangxi-radicals-extra.js into
// kangxi-radicals.js and fixes them:
// - German spelled with ae/oe/ue/ss instead of umlauts and ß (Koenig, Gefaess, Huegel …);
// - radicals 96, 140, 199 and 201 stood in their modern forms (王 艹 麦 黄) with the stroke counts of the
//   Kangxi forms; the Kangxi form is the radical now and the modern form its variant (as 水/氵);
// - relatedHanzi is dropped: the app lists the characters of a radical from the hanzi data (primaryRadical).
// Usage: node scripts/hanzi/fix-radicals.cjs [--dry-run]
const fs = require('fs');
const path = require('path');
const hanzi = require('./common.cjs');

const DRY = process.argv.includes('--dry-run');
const OLD_FILES = ['kangxi-radicals-data.js', 'kangxi-radicals-extra.js'];
const TARGET = 'kangxi-radicals.js';

// Kangxi form as radical, the modern form as variant.
const KANGXI_FORMS = {
  96: { radical: '玉', pinyin: 'yù', strokes: 5, variants: ['王', '⺩'], meaning: 'Jade' },
  140: { radical: '艸', variants: ['艹'] },
  199: { radical: '麥', variants: ['麦'] },
  201: { radical: '黃', variants: ['黄'] }
};
// Words that keep their ae/oe/ue, and words whose ss becomes ß.
const KEEP = new Set(['Feuer', 'Frauen', 'Klaue']);
const SHARP_S = { Gefaess: 'Gefäß', Gefaessen: 'Gefäßen', Opfergefaess: 'Opfergefäß', Tongefaess: 'Tongefäß',
  Fuesse: 'Füße', Fuessen: 'Füßen', Groesse: 'Größe', suess: 'süß', Suesses: 'Süßes', Massbehaelter: 'Maßbehälter',
  aeusseren: 'äußeren', gleichmaessig: 'gleichmäßig', herabhaegendem: 'herabhängendem' };
const UMLAUT = { ae: 'ä', oe: 'ö', ue: 'ü', Ae: 'Ä', Oe: 'Ö', Ue: 'Ü' };
function german(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/[A-Za-zÄÖÜäöüß]*(?:ae|oe|ue|Ae|Oe|Ue)[A-Za-zÄÖÜäöüß]*/g, word => {
    if (KEEP.has(word)) return word;
    if (SHARP_S[word]) return SHARP_S[word];
    return word.replace(/ae|oe|ue|Ae|Oe|Ue/g, pair => UMLAUT[pair]);
  });
}

const radicals = hanzi.loadRadicals().slice().sort((a, b) => a.number - b.number);
if (radicals.length !== 214) throw new Error('Expected 214 radicals, got ' + radicals.length);
const changes = [];
const fixed = radicals.map(r => {
  const out = { number: r.number, radical: r.radical, pinyin: r.pinyin, strokes: r.strokes, variants: r.variants || [],
    meaning: german(r.meaning), explanation: german(r.explanation) };
  const form = KANGXI_FORMS[r.number];
  if (form) {
    Object.assign(out, form);
    changes.push('#' + r.number + ' ' + r.radical + ' → ' + out.radical + ' (Varianten ' + out.variants.join(' ') + ')');
  }
  if (out.meaning !== r.meaning || out.explanation !== r.explanation) changes.push('#' + r.number + ' Umlaute');
  return out;
});
console.log(changes.length + ' changes' + (DRY ? ' (dry run)' : '') + ':\n' + changes.join('\n'));
if (!DRY) {
  fs.writeFileSync(path.join(hanzi.ROOT, TARGET),
    '// The 214 Kangxi radicals (number, Kangxi form, variants, German meaning and explanation).\n' +
    '// The characters of each radical come from the hanzi data (primaryRadical).\n' +
    'window.KANGXI_RADICALS = ' + JSON.stringify(fixed, null, 2) + ';\n');
  for (const file of OLD_FILES) if (fs.existsSync(path.join(hanzi.ROOT, file))) fs.unlinkSync(path.join(hanzi.ROOT, file));
  console.log('Wrote ' + TARGET + '; removed ' + OLD_FILES.join(', '));
}
