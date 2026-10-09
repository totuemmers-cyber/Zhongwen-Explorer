// Pinyin segmentation, tone and search-folding behaviour (pinyin.js).
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const context = {};
context.window = context;
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'pinyin.js'), 'utf8'), context, { filename: 'pinyin.js' });
const P = context.Pinyin;
const list = value => Array.from(value);

// Segmentation of unspaced, spaced, apostrophe and numeric input.
assert.deepStrictEqual(list(P.segment('nǐhǎo')), ['nǐ', 'hǎo']);
assert.deepStrictEqual(list(P.segment('nǐ hǎo')), ['nǐ', 'hǎo']);
assert.deepStrictEqual(list(P.segment('Zhōngguórén', '中国人')), ['Zhōng', 'guó', 'rén']);
assert.deepStrictEqual(list(P.segment('nǚ\'ér', '女儿')), ['nǚ', 'ér']);
assert.deepStrictEqual(list(P.segment('ni3hao3')), ['ni3', 'hao3']);
// The Han character count decides ambiguous runs: 西安 xī'ān vs 先 xiān.
assert.deepStrictEqual(list(P.segment('xian', '西安')), ['xi', 'an']);
assert.deepStrictEqual(list(P.segment('xiān', '先')), ['xiān']);
// Erhua: 儿 as a trailing r.
assert.deepStrictEqual(list(P.segment('yīdiǎnr', '一点儿')), ['yī', 'diǎn', 'r']);
assert.deepStrictEqual(list(P.segment('nǚ\'ér')), ['nǚ', 'ér']);
// Without the apostrophe, a full syllable beats a bare erhua r (nǚ·ér, not nüe·r).
assert.deepStrictEqual(list(P.segment('nǚér', '女儿')), ['nǚ', 'ér']);
assert.deepStrictEqual(list(P.segment('wánr', '玩儿')), ['wán', 'r']);
// Without an apostrophe a syllable inside a word does not start with a vowel.
assert.deepStrictEqual(list(P.segment('dàngāo', '蛋糕')), ['dàn', 'gāo']);
assert.deepStrictEqual(list(P.segment('kěnéng', '可能')), ['kě', 'néng']);
assert.deepStrictEqual(list(P.segment('yángé', '严格')), ['yán', 'gé']);
assert.deepStrictEqual(list(P.segment('dàng’àn', '档案')), ['dàng', 'àn']);
assert.deepStrictEqual(list(P.segment('Xī’ān', '西安')), ['Xī', 'ān']);
// Syllabus conventions: curly apostrophe, hyphenated idioms, spaced phrases, sandhi tones.
assert.strictEqual(P.toNumeric('zìlì-gēngshēng', '自力更生'), 'zi4li4geng1sheng1');
assert.strictEqual(P.toNumeric('bú kèqi', '不客气'), 'bu2ke4qi5');
assert.strictEqual(P.toNumeric('zǒng’é', '总额'), 'zong3e2');

// Tones, conversions.
assert.strictEqual(P.toneOf('hǎo'), 3);
assert.strictEqual(P.toneOf('ma'), 5);
assert.strictEqual(P.toneOf('ma5'), 5);
assert.strictEqual(P.toneOf('lǜ'), 4);
assert.strictEqual(P.toNumeric('nǐhǎo'), 'ni3hao3');
assert.strictEqual(P.toNumeric('lǜsè', '绿色'), 'lv4se4');
assert.strictEqual(P.toNumeric('xièxie', '谢谢'), 'xie4xie5');
assert.strictEqual(P.toMarked('ni3hao3'), 'nǐhǎo');
assert.strictEqual(P.toMarked('lv4'), 'lǜ');
assert.strictEqual(P.toMarked('gou3'), 'gǒu');
assert.strictEqual(P.toMarked('gui4'), 'guì');
assert.strictEqual(P.toMarked('liu2'), 'liú');

// Search folding: every common way of typing 你好 matches.
for (const query of ['nihao', 'ni hao', 'ni3hao3', 'nǐhǎo', 'NIHAO']) {
  assert(P.matchesPinyin('nǐ hǎo', query), 'pinyin query ' + query);
}
for (const query of ['lv', 'lü', 'lu:', 'lu']) assert(P.matchesPinyin('lǜsè', query), 'ü query ' + query);
assert(!P.matchesPinyin('nǐ hǎo', 'zhong'));
assert(!P.matchesPinyin('nǐ hǎo', ''));
// German umlaut folding both ways.
assert(P.matchesText('Großhandel', 'grosshandel'));
assert(P.matchesText('Grosshandel', 'großhandel'));
assert(P.matchesText('Waehrung', 'währung'));
assert(P.matchesText('Straße', 'strasse'));

// Tone colouring keeps the original separators.
assert.strictEqual(P.colorize('nǐ hǎo'), '<span class="tone-3">nǐ</span> <span class="tone-3">hǎo</span>');
assert.strictEqual(P.colorize('bāngzhù', '帮助'), '<span class="tone-1">bāng</span><span class="tone-4">zhù</span>');
assert.strictEqual(context.ToneUtils.detectTone('zhù'), 4);

console.log('Pinyin tests passed: segmentation, tones, conversions, search folding, colouring.');
