// Readers for the dictionary sources in .content-cache/sources/ (CC-CEDICT, HanDeDict, OpenCC).
const fs = require('fs');
const path = require('path');

const SOURCES = path.resolve(__dirname, '..', '..', '.content-cache', 'sources');

// Numeric pinyin key: lowercase, no spaces, ü as v ("Xue2 xi2" -> "xue2xi2", "nu:3" -> "nv3").
function numericKey(pinyin) {
  return String(pinyin || '').toLowerCase().replace(/u:/g, 'v').replace(/ü/g, 'v').replace(/[\s'’\-·,]/g, '');
}

// CEDICT-format line: 繁體 简体 [pin1 yin1] /sense/sense/
function parseCedictLine(line) {
  const m = line.match(/^(\S+) (\S+) \[([^\]]*)\] \/(.*)\/\s*$/);
  if (!m) return null;
  return { traditional: m[1], simplified: m[2], pinyin: m[3], key: numericKey(m[3]), senses: m[4].split('/').filter(Boolean) };
}

function indexByHeadword(entries) {
  const index = new Map();
  for (const entry of entries) {
    if (!index.has(entry.simplified)) index.set(entry.simplified, []);
    index.get(entry.simplified).push(entry);
  }
  return index;
}

function loadCedict() {
  const file = path.join(SOURCES, 'cedict_ts.u8');
  if (!fs.existsSync(file)) throw new Error('CC-CEDICT missing: run node scripts/fetch-sources.cjs (extracts cedict_ts.u8 into ' + SOURCES + ')');
  const text = fs.readFileSync(file, 'utf8');
  const entries = [];
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.startsWith('#')) continue;
    const entry = parseCedictLine(line);
    if (!entry) continue;
    entry.classifiers = [];
    entry.variantOf = [];
    for (const sense of entry.senses) {
      const cl = sense.match(/^CL:(.*)$/);
      if (cl) {
        for (const part of cl[1].split(',')) {
          const m = part.match(/^(?:([^|\[]+)\|)?([^\[]+)\[([^\]]+)\]$/);
          if (m) entry.classifiers.push({ word: m[2], pinyin: numericKey(m[3]) });
        }
      }
      const variant = sense.match(/^variant of (?:([^|\[]+)\|)?([^\[\s]+)\[/);
      if (variant) entry.variantOf.push(variant[2]);
    }
    entries.push(entry);
  }
  return indexByHeadword(entries);
}

function loadHandedict() {
  const text = fs.readFileSync(path.join(SOURCES, 'handedict.u8'), 'utf8');
  const entries = [];
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.startsWith('#')) continue;
    const entry = parseCedictLine(line);
    if (entry) entries.push(entry);
  }
  return indexByHeadword(entries);
}

// Draft German gloss from HanDeDict senses: drops examples (Bsp.: …), proper-name senses and
// grammatical tags such as (S), (V), (Adj), (S, Bot).
function germanGloss(senses, maxSenses = 3) {
  const glosses = [];
  for (const sense of senses) {
    // Proper names: tagged Eig/Fam, or a bare subject tag such as (Geo) without a part of speech.
    // A subject tag next to a part of speech, e.g. 村 "Dorf (S, Geo)", is an ordinary word.
    if (/\((?:[^)]*,\s*)?(Eig|Fam)\b[^)]*\)/.test(sense) || /\((Geo|Pers)\)/.test(sense)) continue;
    const text = sense.split(/;\s*Bsp\.:/)[0]
      .replace(/\s*\((?:S|V|Adj|Adv|Int|Pron|Präp|Konj|Num|Zähl|Part|Interj|Onom|Sprichw|Chengyu|Redew|u\.E\.)(?:,[^)]*)?\)/g, '')
      // HanDeDict's ZEW (Zähleinheitswort) is the learner term Zählwort.
      .replace(/\bZEW\b/g, 'Zählwort')
      .replace(/\s{2,}/g, ' ')
      .replace(/[;,\s]+$/, '')
      .trim();
    if (text && !glosses.includes(text)) glosses.push(text);
    if (glosses.length >= maxSenses) break;
  }
  return glosses.join('; ');
}

// OpenCC simplified -> traditional: longest phrase match, then single characters (first option).
function loadOpenCC() {
  const read = name => {
    const map = new Map();
    for (const line of fs.readFileSync(path.join(SOURCES, name), 'utf8').split(/\r?\n/)) {
      const [key, values] = line.split('\t');
      if (key && values) map.set(key, values.split(' ')[0]);
    }
    return map;
  };
  const phrases = read('opencc-STPhrases.txt');
  const characters = read('opencc-STCharacters.txt');
  let longest = 1;
  for (const key of phrases.keys()) longest = Math.max(longest, Array.from(key).length);
  return function toTraditional(text) {
    const chars = Array.from(text);
    let out = '';
    for (let i = 0; i < chars.length;) {
      let matched = false;
      for (let len = Math.min(longest, chars.length - i); len > 1; len--) {
        const piece = chars.slice(i, i + len).join('');
        if (phrases.has(piece)) { out += phrases.get(piece); i += len; matched = true; break; }
      }
      if (!matched) { out += characters.get(chars[i]) || chars[i]; i++; }
    }
    return out;
  };
}

// Order for picking the main CC-CEDICT entry among several with one reading: common word before
// proper name, real word before pure variant (旹 "old variant of 時"), then the traditional form
// used in more CC-CEDICT headwords (後 before 后 "empress", 隻 before 秖, 年 before 秊).
function mainEntryOrder(cedict) {
  const charCount = new Map();
  for (const list of cedict.values()) for (const e of list) for (const ch of new Set(e.traditional)) charCount.set(ch, (charCount.get(ch) || 0) + 1);
  const usage = e => Array.from(e.traditional).reduce((sum, ch) => sum + (charCount.get(ch) || 0), 0);
  const isProperName = e => /^[A-Z]/.test(e.pinyin);
  const isVariantOnly = e => e.senses.every(s => /variant of |^used in |^CL:/.test(s));
  return (a, b) => isProperName(a) - isProperName(b) || isVariantOnly(a) - isVariantOnly(b) || usage(b) - usage(a);
}

module.exports = { SOURCES, numericKey, loadCedict, mainEntryOrder, loadHandedict, germanGloss, loadOpenCC };
