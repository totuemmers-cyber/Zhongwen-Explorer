/* Quiz answer safety: generates questions per type × level with a fixed seed and checks every one
   (four distinct options, a valid answer key, no valid alternative among the distractors, single
   blanks that hide their answer, Chinese text marked with lang) plus the mock-exam deduplication. */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = path.resolve(__dirname, '..');
const PER_COMBINATION = Number((process.argv.find(a => a.startsWith('--n=')) || '--n=60').slice(4));
const HAN = /[㐀-䶿一-鿿豈-﫿]/;

const dom = new JSDOM('<!doctype html><html><body><div id="quiz-tab"><div id="quiz-content"></div></div></body></html>', { runScripts: 'outside-only', url: 'http://zhongwen.test/' });
const w = dom.window;
const load = file => w.eval(fs.readFileSync(path.join(ROOT, file), 'utf8') + '\n//# sourceURL=' + file);
// A reproducible sample makes a failing audit debuggable.
w.eval('(function () { var seed = 20261011; Math.random = function () { seed = (Math.imul(1664525, seed) + 1013904223) >>> 0; return seed / 4294967296; }; })();');

load('lang-profile.js');
const profile = w.LANG_PROFILE;
[...profile.dataScripts.radicals, ...profile.dataScripts.grammar, ...profile.dataScripts.measurewords,
  profile.runtime.vocab, profile.runtime.vocabDetails, profile.runtime.hanzi].forEach(load);
const vocab = w.VOCAB_RUNTIME.items;
w.VOCAB_RUNTIME_DETAILS.forEach((details, i) => Object.assign(vocab[i], details));
w.app = { sections: {
  vocab: { allItems: vocab },
  hanzi: { allItems: w.HANZI_RUNTIME.items },
  grammar: { allItems: w.GRAMMAR_DATA },
  measurewords: { allItems: w.MEASURE_WORDS_DATA.measureWords }
} };
load('quiz.js');
const audit = w.QuizModule.audit;
const { normalizeAnswer, pinyinKey, glossKeys } = audit;

const byWord = {}, byGloss = {}, hanziByChar = {};
vocab.forEach(v => {
  (byWord[v.word] = byWord[v.word] || []).push(v);
  glossKeys(v.meaning).forEach(k => { (byGloss[k] = byGloss[k] || []).push(v); });
});
w.HANZI_RUNTIME.items.forEach(h => { hanziByChar[h.hanzi] = h; });
const grammarByPattern = {};
w.GRAMMAR_DATA.forEach(g => { grammarByPattern[g.pattern] = g; });
const shares = (a, b) => a.some(k => b.includes(k));

// Independent restatement of the "valid alternative" rules: returns the problem or ''.
function alternativeProblem(q, wrong) {
  const prompt = q.promptMain;
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
      const answer = q.choices[q.correctIndex];
      const entry = (byWord[answer] || []).find(v => v.pinyin === q.meta.pinyin);
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
      if (audit.hasTone(wrong) !== audit.hasTone(q.choices[q.correctIndex])) return 'tone marks give the answer away';
      return '';
    }
    case 'grammarCloze': {
      const accepted = [q.meta.answer].concat(q.meta.accepted || []).map(normalizeAnswer);
      return accepted.includes(normalizeAnswer(wrong)) ? 'distractor is an accepted answer' : '';
    }
    case 'grammarMeaning': {
      const g = grammarByPattern[prompt];
      return g && shares(glossKeys(wrong), glossKeys(g.meaning)) ? 'distractor shares a meaning with the pattern' : '';
    }
    default:
      return '';
  }
}

const container = w.document.getElementById('quiz-content');
function langProblems(q) {
  const parts = audit.renderQuestionCard(q, container);
  audit.renderChoiceButtons(q, parts.choicesDiv, () => {});
  audit.showFeedback(parts, q, -1);
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
function fail(q, problem) {
  const kind = q.type + ': ' + problem.replace(/: .*/s, '');
  problemCounts[kind] = (problemCounts[kind] || 0) + 1;
  if (failures.length < 40) failures.push({ type: q.type, level: q.level, problem, prompt: q.promptMain, choices: q.choices });
}

for (const type of Object.keys(audit.questionTypes)) {
  for (const level of audit.levels) {
    const stats = { type, level, generated: 0, nulls: 0, violations: 0 };
    for (let i = 0; i < PER_COMBINATION; i++) {
      const q = audit.generateQuestion(type, level);
      if (!q) { stats.nulls++; continue; }
      stats.generated++;
      const before = failures.length + stats.violations;
      const flag = problem => { stats.violations++; fail(q, problem); };
      const choices = q.choices || [];
      if (choices.length !== 4) flag('not four options');
      if (choices.some(c => typeof c !== 'string' || !c.trim() || /^\s*—\s*$/.test(c) || /\bundefined\b/.test(c) || c === 'null')) flag('empty or placeholder option');
      const keyOf = /Pinyin$/.test(type) ? pinyinKey : normalizeAnswer;
      if (new Set(choices.map(keyOf)).size !== choices.length) flag('duplicate options');
      if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= choices.length) flag('invalid answer index');
      if (!q.explanation || !q.explanation.trim() || /undefined/.test(q.explanation)) flag('empty explanation');
      if (q.level !== level) flag('level mismatch');
      const answer = choices[q.correctIndex];
      if (audit.clozeTypes[type]) {
        if (q.promptMain.split(audit.blank).length !== 2) flag('blank does not occur exactly once');
        if (q.promptMain.replace(audit.blank, '').includes(q.meta.answer)) flag('answer visible in the prompt');
        if (q.promptMain.replace(audit.blank, q.meta.answer) !== q.meta.sentence) flag('blank is not at the answer position');
        if (answer !== q.meta.answer) flag('wrong answer key');
      }
      if ((type === 'vocabReverse' || type === 'measureWord') && (q.promptMain + q.promptSub).includes(q.meta.word || q.meta.answer)) flag('answer visible in the prompt');
      choices.forEach((c, idx) => {
        if (idx === q.correctIndex) return;
        const problem = alternativeProblem(q, c);
        if (problem) flag(problem + ': ' + c);
      });
      langProblems(q).forEach(text => flag('Chinese text without lang: ' + text));
      if (failures.length > before + 40) break;
    }
    report.push(stats);
  }
}

// Mock exam: every syllabus level (no Zusatz), no item asked twice with the same type.
const exams = [];
if (audit.examLevels.includes(profile.extraLevel)) failures.push({ problem: 'Zusatz offered as exam level' });
for (const level of audit.examLevels) {
  const sections = audit.buildTestSections(level);
  const keys = sections.flatMap(s => s.questions.map(audit.questionKey));
  const planned = audit.testConfigs[level].sections.reduce((sum, s) => sum + s.count, 0);
  const duplicates = keys.length - new Set(keys).size;
  if (duplicates) failures.push({ level, problem: duplicates + ' repeated exam questions' });
  if (keys.length !== planned) failures.push({ level, problem: 'exam has ' + keys.length + ' of ' + planned + ' questions' });
  exams.push({ level, questions: keys.length, planned, duplicates });
}

const failing = report.filter(r => r.violations || r.nulls === PER_COMBINATION || r.nulls > PER_COMBINATION / 10);
console.table(report);
console.table(exams);
const total = report.reduce((sum, r) => sum + r.generated, 0);
if (failing.length || failures.length) {
  console.error(JSON.stringify({ failingCombinations: failing.length, problemCounts, failures }, null, 2));
  process.exitCode = 1;
} else {
  console.log('Quiz audit passed: ' + total + ' questions in ' + report.length + ' type × level combinations, ' + exams.length + ' mock exams without repeats.');
}
dom.window.close();
