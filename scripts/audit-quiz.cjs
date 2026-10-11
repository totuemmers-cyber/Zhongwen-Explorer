/* Quiz answer safety: generates questions per type × level with a fixed seed and checks every one
   (four distinct options, a valid answer key, no valid alternative among the distractors, single
   blanks that hide their answer, Chinese text marked with lang, typed answers accepted or rejected
   as they should be), every Lesen/Hören unit question, and the mock exam per level with and without speech
   (HSK-like sections and counts, whole units once each, no repeats, Hören skipped without speech). */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = path.resolve(__dirname, '..');
const PER_COMBINATION = Number((process.argv.find(a => a.startsWith('--n=')) || '--n=60').slice(4));
const HAN = /[㐀-䶿一-鿿豈-﫿]/;
const HAN_WORD = /^[㐀-䶿一-鿿豈-﫿]+$/;

const dom = new JSDOM('<!doctype html><html><body><div id="quiz-tab"><div id="quiz-content"></div></div></body></html>', { runScripts: 'outside-only', url: 'http://zhongwen.test/' });
const w = dom.window;
const load = file => w.eval(fs.readFileSync(path.join(ROOT, file), 'utf8') + '\n//# sourceURL=' + file);
// A reproducible sample makes a failing audit debuggable.
w.eval('(function () { var seed = 20261011; Math.random = function () { seed = (Math.imul(1664525, seed) + 1013904223) >>> 0; return seed / 4294967296; }; })();');

load('lang-profile.js');
const profile = w.LANG_PROFILE;
[...profile.dataScripts.radicals, ...profile.dataScripts.grammar, ...profile.dataScripts.measurewords,
  profile.runtime.vocab, profile.runtime.vocabDetails, profile.runtime.hanzi, profile.runtime.hanziDetails, 'pinyin.js', profile.comprehension.data].forEach(load);
const units = w.COMPREHENSION_DATA.units;
const vocab = w.VOCAB_RUNTIME.items;
w.VOCAB_RUNTIME_DETAILS.forEach((details, i) => Object.assign(vocab[i], details));
const hanzi = w.HANZI_RUNTIME.items;
w.HANZI_RUNTIME_DETAILS.forEach((details, i) => Object.assign(hanzi[i], details));
const spoken = [];
const speech = { speechSynthesis: { speak() {}, cancel() {} }, SpeechSynthesisUtterance: function () {} };
Object.assign(w, speech);
w.app = {
  sections: {
    vocab: { allItems: vocab },
    hanzi: { allItems: hanzi },
    grammar: { allItems: w.GRAMMAR_DATA },
    measurewords: { allItems: w.MEASURE_WORDS_DATA.measureWords }
  },
  speakCN: text => spoken.push(text)
};
load('quiz.js');
const audit = w.QuizModule.audit;
const Pinyin = w.Pinyin;
const { normalizeAnswer, pinyinKey, glossKeys } = audit;
const LEVELS = audit.levels;

const quizVocab = vocab.filter(v => v.word && v.meaning && v.meaningStatus !== 'draft');
const byWord = {}, byGloss = {}, hanziByChar = {}, wordsWithChar = {}, vocabById = {};
quizVocab.forEach(v => {
  (byWord[v.word] = byWord[v.word] || []).push(v);
  vocabById[v.id] = v;
  glossKeys(v.meaning).forEach(k => { (byGloss[k] = byGloss[k] || []).push(v); });
  if (HAN_WORD.test(v.word)) new Set(Array.from(v.word)).forEach(ch => { (wordsWithChar[ch] = wordsWithChar[ch] || []).push(v); });
});
hanzi.forEach(h => { hanziByChar[h.hanzi] = h; });
const grammarById = {};
w.GRAMMAR_DATA.forEach(g => { grammarById[g.id] = g; });
const radicalByChar = {};
w.KANGXI_RADICALS.forEach(r => { radicalByChar[r.radical] = r; });
const radicalOfLabel = label => w.KANGXI_RADICALS.find(r => label.startsWith(r.radical + '/') || label.startsWith(r.radical + ' ('));
const shares = (a, b) => a.some(k => b.includes(k));
// All spellings a written word can be read with (entries, pinyinAlt, readings of a single character).
const readingsOf = word => [...(byWord[word] || []).flatMap(v => [v.pinyin, ...(v.pinyinAlt || [])]),
  ...(Array.from(word).length === 1 && hanziByChar[word] ? hanziByChar[word].readings.map(r => r.pinyin) : [])];
const fold = p => Pinyin.fold(p);
// Tone digits per syllable of a word's pinyin: wǒmen → [3, 5].
const tonesOf = (word, pinyin) => {
  const parts = Pinyin.align(word, pinyin);
  return parts && parts.every(p => p.pinyin) ? parts.map(p => Pinyin.toneOf(p.pinyin)) : null;
};
const basesOf = (word, pinyin) => {
  const parts = Pinyin.align(word, pinyin);
  return parts && parts.every(p => p.pinyin) ? parts.map(p => Pinyin.toNumeric(p.pinyin).slice(0, -1)) : null;
};

// Independent restatement of the main reading: the reading most used in the character's words up to the level.
const mainReadingCache = {};
function expectedMainReading(h, level) {
  const key = h.hanzi + '|' + level;
  if (mainReadingCache[key]) return mainReadingCache[key];
  const max = LEVELS.indexOf(level);
  const counts = h.readings.map(() => 0);
  for (const v of wordsWithChar[h.hanzi] || []) {
    if (LEVELS.indexOf(v.level) > max || LEVELS.indexOf(v.level) < 0) continue;
    const parts = Pinyin.align(v.word, v.pinyin);
    if (!parts || !parts.every(p => p.pinyin)) continue;
    parts.forEach(p => {
      if (p.text !== h.hanzi) return;
      let i = h.readings.findIndex(r => pinyinKey(r.pinyin) === pinyinKey(p.pinyin));
      if (i < 0) {
        const same = h.readings.map((r, j) => fold(r.pinyin) === fold(p.pinyin) ? j : -1).filter(j => j >= 0);
        if (same.length === 1) i = same[0];
      }
      if (i >= 0) counts[i]++;
    });
  }
  return (mainReadingCache[key] = h.readings[counts.indexOf(Math.max(...counts))]);
}
const firstGloss = meaning => {
  let depth = 0;
  for (let i = 0; i < meaning.length; i++) {
    if ('(（[„'.includes(meaning[i])) depth++;
    else if (')）]“'.includes(meaning[i]) && depth) depth--;
    else if (!depth && ';；'.includes(meaning[i])) return meaning.slice(0, i).trim();
  }
  return meaning.trim();
};
const INITIAL = /^(zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?(.*)$/;
const similarSyllable = (a, b) => {
  const x = INITIAL.exec(a), y = INITIAL.exec(b);
  return a === b || (x[1] || '') === (y[1] || '') || x[2] === y[2];
};

// Independent restatement of the "valid alternative" rules: returns the problem or ''.
function alternativeProblem(q, wrong) {
  const prompt = q.promptMain;
  const answer = q.choices[q.correctIndex];
  switch (q.type) {
    case 'vocabMeaning': {
      const valid = (byWord[prompt] || []).flatMap(v => glossKeys(v.meaning));
      return shares(glossKeys(wrong), valid) ? 'distractor is a meaning of ' + prompt : '';
    }
    case 'vocabPinyin': {
      const valid = (byWord[prompt] || []).map(v => pinyinKey(v.pinyin));
      if (prompt.length === 1 && hanziByChar[prompt]) hanziByChar[prompt].readings.forEach(r => valid.push(pinyinKey(r.pinyin)));
      return valid.includes(pinyinKey(wrong)) ? 'distractor is a reading of ' + prompt : '';
    }
    case 'vocabReverse':
    case 'vocabContext': {
      const entry = vocabById[q.meta.source];
      if (!entry) return 'answer entry not found';
      if (glossKeys(entry.meaning).some(k => (byGloss[k] || []).some(v => v.word === wrong))) return 'distractor shares a meaning with ' + answer;
      if ((byWord[wrong] || []).some(v => pinyinKey(v.pinyin) === pinyinKey(entry.pinyin))) return 'distractor is a homophone of ' + answer;
      if (q.type === 'vocabContext' && q.meta.sentence.includes(wrong)) return 'distractor occurs in the sentence';
      if (q.type === 'vocabReverse' && prompt.includes(wrong)) return 'distractor occurs in the prompt';
      return '';
    }
    case 'hanziMeaning': {
      const h = hanziByChar[prompt];
      return shares(glossKeys(wrong), h.readings.flatMap(r => glossKeys(r.meaning))) ? 'distractor is a meaning of ' + prompt : '';
    }
    case 'hanziPinyin': {
      const h = hanziByChar[prompt];
      if (h.readings.map(r => pinyinKey(r.pinyin)).includes(pinyinKey(wrong))) return 'distractor is a reading of ' + prompt;
      if (audit.hasTone(wrong) !== audit.hasTone(answer)) return 'tone marks give the answer away';
      if (audit.hasTone(answer) && !similarSyllable(fold(wrong), fold(answer))) return 'distractor syllable unrelated to the answer';
      return '';
    }
    case 'hanziRadical': {
      const h = hanziByChar[prompt];
      const r = radicalOfLabel(wrong), right = radicalByChar[h.primaryRadical];
      if (!r) return 'distractor is no radical label';
      const glyphs = x => [x.radical, ...(x.variants || []).map(v => v.replace(/\(.*\)/, ''))];
      if (glyphs(r).some(g => glyphs(right).includes(g) || g === h.radicalForm)) return 'distractor is a form of the answer radical';
      const level = new Set(hanzi.filter(k => k.level === q.level).map(k => k.primaryRadical));
      const related = level.has(r.radical) || Math.abs(r.strokes - right.strokes) <= 1 ||
        (h.components || []).some(c => glyphs(r).includes(c.part)) || audit.lookalikes(right).some(g => glyphs(r).includes(g));
      return related ? '' : 'distractor radical unrelated (not of the level, a part, a look-alike or of similar stroke count)';
    }
    case 'toneRecognition': {
      const word = prompt;
      if (readingsOf(word).some(p => pinyinKey(p) === pinyinKey(wrong))) return 'distractor is a reading of ' + word;
      if (fold(wrong) !== fold(answer)) return 'distractor changes more than tones';
      return '';
    }
    case 'listening': {
      const wordBases = basesOf(answer, q.meta.pinyin), wordTones = tonesOf(answer, q.meta.pinyin);
      for (const reading of readingsOf(wrong)) {
        const b = basesOf(wrong, reading), t = tonesOf(wrong, reading);
        if (!b) continue;
        if (b.length !== wordBases.length) return 'distractor has another syllable count';
        if (b.every((x, i) => x === wordBases[i]) && t.every((x, i) => x === wordTones[i] || x === 5 || wordTones[i] === 5)) return 'distractor sounds like ' + answer;
      }
      return '';
    }
    case 'measureWord': {
      const listed = (byWord[q.meta.word] || []).flatMap(v => (v.measureWords || []).map(m => m.word));
      if (listed.includes(wrong)) return 'distractor is listed for ' + q.meta.word;
      if (audit.broadClassifiers.includes(wrong)) return 'distractor fits almost any noun';
      return '';
    }
    case 'grammarCloze': {
      const accepted = [q.meta.answer].concat(q.meta.accepted || []).map(normalizeAnswer);
      return accepted.includes(normalizeAnswer(wrong)) ? 'distractor is an accepted answer' : '';
    }
    case 'grammarMeaning': {
      const g = grammarById[q.meta.source];
      if (g && shares(glossKeys(wrong), glossKeys(g.meaning))) return 'distractor shares a meaning with the pattern';
      if (g && (audit.nearlySameMeaning(g.meaning, wrong) || audit.nearlySameMeaning(wrong, g.meaning))) return 'distractor nearly identical to the meaning';
      return '';
    }
    case 'grammarFormation': {
      if (HAN.test(wrong)) return 'option contains Chinese';
      const slots = audit.slotWords(answer);
      return audit.slotWords(wrong).some(s => slots.includes(s)) ? 'distractor has the same slot next to the pattern' : '';
    }
    default:
      return '';
  }
}

// Type-specific checks of the question as a whole: returns a list of problems.
function questionProblems(q) {
  const problems = [];
  const answer = q.choices && q.choices[q.correctIndex];
  const levelIdx = LEVELS.indexOf(q.level);
  // Two wrong options saying the same would rule each other out.
  if (['vocabMeaning', 'hanziMeaning', 'grammarMeaning'].includes(q.type)) {
    const wrong = q.choices.filter((c, i) => i !== q.correctIndex);
    wrong.forEach((a, i) => wrong.slice(i + 1).forEach(b => {
      if (shares(glossKeys(a), glossKeys(b)) || (q.type === 'grammarMeaning' && (audit.nearlySameMeaning(a, b) || audit.nearlySameMeaning(b, a)))) {
        problems.push('distractors say the same: ' + a + ' / ' + b);
      }
    }));
  }
  switch (q.type) {
    case 'hanziMeaning': {
      const expected = firstGloss(expectedMainReading(hanziByChar[q.promptMain], q.level).meaning);
      if (answer !== expected) problems.push('answer is not the first gloss of the main reading: ' + answer + ' / ' + expected);
      break;
    }
    case 'hanziPinyin': {
      const expected = expectedMainReading(hanziByChar[q.promptMain], q.level).pinyin;
      if (pinyinKey(answer) !== pinyinKey(expected)) problems.push('answer is not the main reading: ' + answer + ' / ' + expected);
      if (audit.hasTone(answer) && new Set(q.choices.map(c => Pinyin.toneOf(c))).size !== 4) problems.push('options do not carry four different tones');
      break;
    }
    case 'hanziRadical': {
      const r = radicalOfLabel(answer);
      if (!r || r.radical !== hanziByChar[q.promptMain].primaryRadical) problems.push('answer is not the primary radical');
      break;
    }
    case 'toneRecognition': {
      const entry = (byWord[q.promptMain] || []).find(v => v.pinyin === answer);
      if (!entry) { problems.push('answer is not the vocabulary pinyin'); break; }
      const count = Pinyin.countHan(q.promptMain);
      if (count > (levelIdx <= 2 ? 2 : 4)) problems.push('too many syllables for the level');
      const tones = q.choices.map(c => tonesOf(q.promptMain, c));
      if (tones.some(t => !t || t.length !== count)) problems.push('option does not align with the word');
      else tones[0].forEach((t, i) => {
        const column = new Set(tones.map(x => x[i]));
        if (t === 5 ? column.size !== 1 : column.size !== 4) problems.push('syllable ' + (i + 1) + ' tones give the answer away');
      });
      break;
    }
    case 'listening': {
      if (q.audio !== answer) problems.push('audio is not the answer');
      if (HAN.test(q.promptMain + q.promptSub)) problems.push('word visible in the prompt');
      if ((byWord[answer] || []).some(v => pinyinKey(v.pinyin) !== pinyinKey(q.meta.pinyin))) problems.push('heteronym asked by listening');
      const count = Array.from(answer).length;
      if (q.choices.some(c => Array.from(c).length !== count)) problems.push('options with another syllable count');
      break;
    }
    case 'pinyinTyping': {
      const word = q.meta.word;
      const entry = (byWord[word] || []).find(v => v.pinyin === q.answer);
      if (!entry) { problems.push('answer is not the vocabulary pinyin'); break; }
      const ok = text => audit.checkPinyinAnswer(q, text);
      const numeric = Pinyin.toNumeric(q.answer, word);
      const syllables = Pinyin.align(word, q.answer).map(p => p.pinyin);
      const accepted = [q.answer, numeric, numeric.replace(/5/g, ''), q.answer.toUpperCase(), numeric.replace(/(\d)/g, '$1 '),
        syllables.join("'"), syllables.join(' '), ' ' + q.answer + ' '].concat(entry.pinyinAlt || []);
      accepted.forEach(text => { if (!ok(text)) problems.push('correct input rejected: ' + text); });
      const tones = tonesOf(word, q.answer);
      const rejected = ['', '   ', word, numeric.replace(/\d/g, '') + 'x'];
      if (tones.some(t => t !== 5)) rejected.push(numeric.replace(/\d/g, ''));
      const firstToned = tones.findIndex(t => t !== 5);
      if (firstToned !== -1) {
        const parts = numeric.match(/[a-z]+\d/g);
        const t = tones[firstToned];
        const isSandhi = /[一不]/.test(Array.from(word)[firstToned]);
        [1, 2, 3, 4].filter(x => x !== t && !isSandhi).forEach(x => {
          const changed = parts.map((p, i) => i === firstToned ? p.slice(0, -1) + x : p).join('');
          if (!(entry.pinyinAlt || []).some(alt => Pinyin.toNumeric(alt, word) === changed)) rejected.push(changed);
        });
      }
      rejected.forEach(text => { if (ok(text)) problems.push('wrong input accepted: ' + JSON.stringify(text)); });
      break;
    }
    case 'measureWord': {
      const listed = (byWord[q.meta.word] || []).flatMap(v => (v.measureWords || []).map(m => m.word));
      if (!listed.includes(answer)) problems.push('answer not listed for the noun');
      if (answer === '个') problems.push('个 asked');
      if (!new RegExp('^[一两三] ' + audit.blank + ' ' + q.meta.word + '$').test(q.promptMain)) problems.push('prompt is not number + blank + noun');
      const noun = (byWord[q.meta.word] || [])[0];
      if (!noun || LEVELS.indexOf(noun.level) > levelIdx) problems.push('noun above the level');
      break;
    }
    case 'grammarFormation': {
      const g = grammarById[q.meta.source];
      if (!g || audit.formationSkeleton(g.formation) !== answer) problems.push('answer is not the formation of the pattern');
      if (q.choices.some(c => HAN.test(c))) problems.push('option contains Chinese');
      break;
    }
    default:
  }
  return problems;
}

const container = w.document.getElementById('quiz-content');
function langProblems(q) {
  const parts = audit.renderQuestionCard(q, container);
  audit.renderAnswers(q, parts, () => {});
  audit.showResult(parts, q, q.kind === 'input' ? '' : -1);
  const problems = [];
  const walker = w.document.createTreeWalker(container, w.NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!HAN.test(node.nodeValue)) continue;
    const marked = node.parentElement.closest('[lang]');
    if (!marked || !/^zh/.test(marked.getAttribute('lang'))) problems.push(node.nodeValue);
  }
  container.innerHTML = '';
  return problems;
}

const report = [], failures = [], problemCounts = {};
const preference = {};
function fail(q, problem) {
  const kind = q.type + ': ' + problem.replace(/: .*/s, '');
  problemCounts[kind] = (problemCounts[kind] || 0) + 1;
  if (failures.length < 40) failures.push({ type: q.type, level: q.level, problem, prompt: q.promptMain, choices: q.choices || q.answer });
}
function prefer(type, hit) {
  const p = preference[type] = preference[type] || { hits: 0, total: 0 };
  p.total++;
  if (hit) p.hits++;
}

// Rendered cards queue focus and autoplay timers; yielding after each combination lets them run.
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
(async () => {
  for (const type of Object.keys(audit.questionTypes)) {
    for (const level of LEVELS) {
      const stats = { type, level, generated: 0, nulls: 0, violations: 0 };
      for (let i = 0; i < PER_COMBINATION; i++) {
        const q = audit.generateQuestion(type, level);
        if (!q) { stats.nulls++; continue; }
        stats.generated++;
        const before = failures.length + stats.violations;
        const flag = problem => { stats.violations++; fail(q, problem); };
        if (!q.explanation || !q.explanation.trim() || /undefined/.test(q.explanation)) flag('empty explanation');
        if (q.level !== level) flag('level mismatch');
        if (audit.questionTypes[type].input) {
          if (q.kind !== 'input' || q.choices) flag('input question with options');
        } else {
          const choices = q.choices || [];
          if (choices.length !== 4) flag('not four options');
          if (choices.some(c => typeof c !== 'string' || !c.trim() || /^\s*—\s*$/.test(c) || /\bundefined\b/.test(c))) flag('empty or placeholder option');
          const keyOf = /Pinyin$|^tone/.test(type) ? pinyinKey : normalizeAnswer;
          if (new Set(choices.map(keyOf)).size !== choices.length) flag('duplicate options');
          if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= choices.length) flag('invalid answer index');
          const answer = choices[q.correctIndex];
          if (audit.clozeTypes[type]) {
            if (q.promptMain.split(audit.blank).length !== 2) flag('blank does not occur exactly once');
            if (q.promptMain.replace(audit.blank, '').includes(q.meta.answer)) flag('answer visible in the prompt');
            if (q.promptMain.replace(audit.blank, q.meta.answer) !== q.meta.sentence) flag('blank is not at the answer position');
            if (answer !== q.meta.answer) flag('wrong answer key');
          }
          if (type === 'vocabReverse' && (q.promptMain + q.promptSub).includes(q.meta.word)) flag('answer visible in the prompt');
          if (type === 'measureWord' && (q.promptMain + q.promptSub).includes(answer)) flag('answer visible in the prompt');
          choices.forEach((c, idx) => {
            if (idx === q.correctIndex) return;
            const problem = alternativeProblem(q, c);
            if (problem) flag(problem + ': ' + c);
            if (type === 'vocabContext') prefer(type, (byWord[c] || []).some(v => v.type === q.meta.wordType));
            if (type === 'grammarMeaning') {
              const g = grammarById[q.meta.source];
              prefer(type, w.GRAMMAR_DATA.some(x => x.meaning === c && x.category === g.category));
            }
          });
          if (!audit.isCorrect(q, q.correctIndex) || choices.some((c, idx) => idx !== q.correctIndex && audit.isCorrect(q, idx))) flag('scoring disagrees with the answer key');
        }
        questionProblems(q).forEach(flag);
        langProblems(q).forEach(text => flag('Chinese text without lang: ' + text));
        if (failures.length > before + 40) break;
      }
      report.push(stats);
      await tick();
    }
  }

  // Distractor preferences: same part of speech in the gap, same grammar category.
  const preferenceFloor = { vocabContext: 0.6, grammarMeaning: 0.5 };
  Object.keys(preferenceFloor).forEach(type => {
    const p = preference[type];
    const share = p ? p.hits / p.total : 0;
    console.log(type + ': ' + Math.round(share * 100) + ' % of distractors from the preferred pool');
    if (share < preferenceFloor[type]) failures.push({ type, problem: 'only ' + Math.round(share * 100) + ' % preferred distractors' });
  });

  // Every unit question as the quiz asks it: answer key, distinct choices, Chinese marked with lang.
  for (const u of units) {
    audit.unitQuestions(u, {}).forEach((q, i) => {
      const source = u.questions[i];
      const flag = problem => fail(q, u.id + ' ' + source.id + ': ' + problem);
      if (q.choices.length < 3 || q.choices.length !== source.choices.length) flag('choices lost');
      if (new Set(q.choices.map(normalizeAnswer)).size !== q.choices.length) flag('duplicate choices');
      if (!Number.isInteger(q.correctIndex) || q.choices[q.correctIndex] !== source.choices[source.answer].text) flag('wrong answer key');
      if (!audit.isCorrect(q, q.correctIndex) || q.choices.some((c, j) => j !== q.correctIndex && audit.isCorrect(q, j))) flag('scoring disagrees with the answer key');
      langProblems(q).forEach(text => flag('Chinese text without lang: ' + text));
    });
    await tick();
  }

  // Mock exam per level, with and without speech: HSK-like sections, counts as planned, whole units
  // (each once, questions in a row), no question twice, no word or character twice.
  const SECTION_TYPES = {
    Hören: ['listening', 'listeningUnit'], Lesen: ['vocabContext', 'grammarCloze', 'readingUnit'],
    Wortschatz: ['vocabMeaning', 'vocabPinyin', 'hanziMeaning'], 'Schreiben-nah': ['pinyinTyping', 'measureWord', 'grammarCloze', 'grammarFormation']
  };
  const exams = [];
  if (audit.examLevels.includes(profile.extraLevel)) failures.push({ problem: 'Zusatz offered as exam level' });
  const examProblem = (level, speechOn, problem) => failures.push({ level, speech: speechOn, problem });
  for (const speechOn of [true, false]) {
    if (speechOn) Object.assign(w, speech); else delete w.speechSynthesis;
    for (const level of audit.examLevels) {
      const at = audit.examLevels.indexOf(level);
      const plan = audit.examPlan(level);
      const { sections, skipped } = audit.buildTestSections(level);
      const names = sections.map(s => s.name);
      const expected = [...(speechOn ? ['Hören'] : []), 'Lesen', at < 2 ? 'Wortschatz' : 'Schreiben-nah'];
      if (names.join() !== expected.join()) examProblem(level, speechOn, 'sections ' + names.join(', '));
      if (skipped.join() !== (speechOn ? '' : 'Hören')) examProblem(level, speechOn, 'skipped ' + skipped.join());
      const all = sections.flatMap(s => s.questions);
      const planned = audit.planTotals(plan).questions;
      if (all.length !== planned) examProblem(level, speechOn, 'exam has ' + all.length + ' of ' + planned + ' questions');
      sections.forEach((s, i) => {
        const p = plan.sections[i];
        if (s.time !== p.time) examProblem(level, speechOn, s.name + ' has another time');
        const unitQs = s.questions.filter(q => q.kind === 'unit');
        if (unitQs.length !== p.units * 3 || s.questions.length - unitQs.length !== p.items) examProblem(level, speechOn, s.name + ' composition ' + unitQs.length + ' + ' + (s.questions.length - unitQs.length));
        const wrongType = s.questions.find(q => !SECTION_TYPES[s.name].includes(q.type));
        if (wrongType) examProblem(level, speechOn, wrongType.type + ' in ' + s.name);
        // The questions of a unit come in a row, all of them, in the unit's order.
        const runs = [];
        s.questions.forEach(q => { if (q.kind !== 'unit') return; const last = runs[runs.length - 1]; if (last && last.unit === q.unit) last.qs.push(q); else runs.push({ unit: q.unit, qs: [q] }); });
        runs.forEach(r => {
          if (r.unit.level !== level) examProblem(level, speechOn, r.unit.id + ' from another level');
          if (r.qs.map(q => q.meta.question).join() !== r.unit.questions.map(q => q.id).join()) examProblem(level, speechOn, r.unit.id + ' not asked whole');
          if ((r.unit.skill === 'listening') !== (s.name === 'Hören')) examProblem(level, speechOn, r.unit.id + ' in ' + s.name);
          if (r.unit.skill === 'listening' && !(r.qs.every(q => q.plays === r.qs[0].plays) && r.qs[0].plays.left === 2)) examProblem(level, speechOn, r.unit.id + ' without a shared play limit of 2');
          r.qs.forEach(q => {
            const source = r.unit.questions.find(x => x.id === q.meta.question);
            if (q.choices.length < 3 || new Set(q.choices).size !== q.choices.length) examProblem(level, speechOn, r.unit.id + ' choices');
            if (!Number.isInteger(q.correctIndex) || q.choices[q.correctIndex] !== source.choices[source.answer].text) examProblem(level, speechOn, r.unit.id + ' answer index');
          });
        });
        const unitIds = runs.map(r => r.unit.id);
        if (new Set(unitIds).size !== unitIds.length) examProblem(level, speechOn, 'unit asked twice in ' + s.name);
      });
      const keys = all.map(audit.questionKey);
      const duplicates = keys.length - new Set(keys).size;
      if (duplicates) examProblem(level, speechOn, duplicates + ' repeated exam questions');
      const itemKeys = all.filter(q => q.kind !== 'unit').map(audit.itemKey);
      const repeatedItems = itemKeys.length - new Set(itemKeys).size;
      if (repeatedItems) examProblem(level, speechOn, repeatedItems + ' words or characters asked twice');
      if (!speechOn && all.some(q => audit.questionTypes[q.type] ? audit.questionTypes[q.type].speech : audit.unitTypes[q.type].speech)) examProblem(level, speechOn, 'listening without speech synthesis');
      exams.push({ level, speech: speechOn, sections: sections.map(s => s.name + ' ' + s.questions.length).join(' · '), questions: all.length, minutes: audit.planTotals(plan).minutes, duplicates, repeatedItems });
    }
  }

  // Without speech synthesis the listening type is unavailable.
  if (audit.speechAvailable() || audit.generateQuestion('listening', 'HSK1')) failures.push({ problem: 'listening generated without speech synthesis' });
  Object.assign(w, speech);

  const failing = report.filter(r => r.violations || r.nulls === PER_COMBINATION || r.nulls > PER_COMBINATION / 10);
  console.table(report);
  console.table(exams);
  const total = report.reduce((sum, r) => sum + r.generated, 0);
  if (failing.length || failures.length) {
    console.error(JSON.stringify({ failingCombinations: failing.map(r => r.type + ' ' + r.level + ' (' + r.nulls + ' nulls, ' + r.violations + ' violations)'), problemCounts, failures }, null, 2));
    process.exitCode = 1;
  } else {
    console.log('Quiz audit passed: ' + total + ' questions in ' + report.length + ' type × level combinations, ' + exams.length + ' mock exams (with and without speech) as planned, ' + units.length + ' units checked.');
  }
  dom.window.close();
})().catch(error => { console.error(error); process.exitCode = 1; });
