// WCAG contrast of declared colour tokens in both themes (ported from Nihongo Explorer,
// extended with HSK level badges and the tone colours used for pinyin).
const fs = require('fs');
const path = require('path');
const assert = require('node:assert/strict');
const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');
function tokens(block) {
  return Object.fromEntries(Array.from(block.matchAll(/--([\w-]+):\s*(#[\da-f]{3,8})\s*;/gi), match => [match[1], match[2]]));
}
// Later blocks override earlier ones, as in the cascade.
function merged(regex) {
  return Array.from(css.matchAll(regex)).reduce((all, match) => Object.assign(all, tokens(match[1])), {});
}
function luminance(hex) {
  let value = hex.slice(1);
  if (value.length === 3) value = value.split('').map(ch => ch + ch).join('');
  const rgb = [0, 2, 4].map(i => parseInt(value.slice(i, i + 2), 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
}
function ratio(a, b) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
const light = merged(/(?:^|\n)\s*:root\s*\{([^}]+)\}/g);
const dark = Object.assign({}, light, merged(/\[data-theme='dark'\]\s*\{([^}]+)\}/g));

const pairs = [
  ['text', 'bg'], ['text', 'bg-card'], ['text-secondary', 'bg'], ['text-secondary', 'bg-card'], ['text-secondary', 'bg-subtle'],
  ['accent', 'accent-bg'], ['accent', 'bg-card'], ['bg-card', 'accent'],
  // HSK level badges (text colour on badge background).
  ...[1, 2, 3, 4, 5, 6, '7-9'].map(n => ['hsk' + n, 'hsk' + n + '-bg']), ['zusatz', 'zusatz-bg'],
  // Tone-coloured pinyin on cards and pages, and filled tone badges.
  ...[1, 2, 3, 4, 5].flatMap(n => [['tone-' + n, 'bg-card'], ['tone-' + n, 'bg'], ['tone-on', 'tone-' + n]])
];
const rows = [];
for (const [name, theme] of Object.entries({ light, dark })) {
  for (const [fg, bg] of pairs) {
    assert(theme[fg] && theme[bg], `${name}: missing token ${theme[fg] ? bg : fg}`);
    const contrast = ratio(theme[fg], theme[bg]);
    assert(contrast >= 4.5, `${name}: ${fg}/${bg} fails at ${contrast.toFixed(2)}:1`);
    rows.push({ theme: name, pair: fg + '/' + bg, ratio: contrast.toFixed(2) + ':1' });
  }
}
console.table(rows);
console.log('All ' + rows.length + ' text/background pairs meet 4.5:1. This checks declared colors, not rendered screenshots.');
