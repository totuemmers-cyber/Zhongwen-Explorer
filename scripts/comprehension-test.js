/* Guided reading and listening (comprehension.js) on an in-memory fixture: hidden tabs without content, lazy loading,
   pinyin ruby and helps, scoring, routes and history, browser voice and recordings; then the audit on the fixture. */
const fs = require('fs');
const path = require('path');
const assert = require('node:assert/strict');
const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');
const build = require('./build-comprehension.cjs');

const ROOT = path.resolve(__dirname, '..');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(predicate, label) {
  for (let i = 0; i < 500; i++) { if (predicate()) return; await delay(20); }
  throw new Error('Timed out: ' + label);
}

const FIXTURE = [
  {
    id: 'reading-hsk1-01', level: 'HSK1', skill: 'reading', order: 1,
    title: 'Eine Vorstellung', objective: 'Persönliche Angaben in einem kurzen Text finden.',
    task: { no: 1, title: '问答个人基本信息' }, topic: '基本信息›个人信息›姓名、国籍、年龄、性别、喜好、习惯等',
    textType: 'Selbstvorstellung', minutes: 6,
    introduction: 'Lies den Text und achte auf Name, Alter, Familie und Vorlieben.',
    passages: [
      { id: 'p1', speaker: '', text: '我叫王小明，是中国人。我今年二十岁，是大学生。', pinyin: 'Wǒ jiào Wáng Xiǎomíng, shì Zhōngguórén. Wǒ jīnnián èrshí suì, shì dàxuéshēng.' },
      { id: 'p2', speaker: '', text: '我家有四口人：爸爸、妈妈、姐姐和我。我喜欢看书，也喜欢喝茶。', pinyin: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. Wǒ xǐhuan kàn shū, yě xǐhuan hē chá.' }
    ],
    translation: 'Ich heiße Wang Xiaoming und bin Chinese. Ich bin dieses Jahr zwanzig Jahre alt und Student.\nMeine Familie hat vier Personen: Papa, Mama, meine ältere Schwester und mich. Ich lese gern und trinke auch gern Tee.',
    glossary: [
      { word: '口', pinyin: 'kǒu', meaning: 'Zählwort für Familienmitglieder', vocabId: 'w:口:kou3' },
      { word: '喜欢', pinyin: 'xǐhuan', meaning: 'mögen, gern tun', vocabId: 'w:喜欢:xi3huan5' }
    ],
    note: 'Zahlen vor einem Zählwort verraten oft die Antwort auf „wie viele“.',
    questions: [
      { id: 'q1', kind: 'global', prompt: 'Worum geht es in dem Text?', evidence: 'p1', answer: 0, choices: [
        { text: 'Ein Student stellt sich vor.', explanation: 'Er nennt Namen, Alter und dass er Student ist.' },
        { text: 'Ein Lehrer beschreibt seine Klasse.', explanation: 'Von einer Klasse ist nicht die Rede.' },
        { text: 'Eine Familie plant eine Reise.', explanation: 'Die Familie wird nur aufgezählt, eine Reise kommt nicht vor.' },
        { text: 'Ein Kellner empfiehlt Tee.', explanation: 'Tee trinkt der Schreiber selbst gern.' }] },
      { id: 'q2', kind: 'detail', prompt: 'Wie viele Personen gehören zu seiner Familie?', evidence: 'p2', answer: 1, choices: [
        { text: 'Drei', explanation: 'Er zählt vier Personen auf, sich selbst eingeschlossen.' },
        { text: 'Vier', explanation: 'Der Text sagt ausdrücklich: vier Personen.' },
        { text: 'Fünf', explanation: 'Eine fünfte Person wird nicht genannt.' },
        { text: 'Zwei', explanation: 'Neben den Eltern hat er auch eine Schwester.' }] },
      { id: 'q3', kind: 'detail', prompt: 'Was trinkt er gern?', evidence: 'p2', answer: 3, choices: [
        { text: 'Kaffee', explanation: 'Kaffee wird nicht erwähnt.' },
        { text: 'Wasser', explanation: 'Wasser wird nicht erwähnt.' },
        { text: 'Milch', explanation: 'Milch wird nicht erwähnt.' },
        { text: 'Tee', explanation: 'Am Ende steht, dass er gern Tee trinkt.' }] }
    ]
  },
  {
    id: 'listening-hsk1-01', level: 'HSK1', skill: 'listening', order: 1,
    title: 'Pläne für Samstag', objective: 'In einer Verabredung Tag, Tätigkeit und Uhrzeit verstehen.',
    task: { no: 2, title: '问答事件信息' }, topic: '基本信息›事件信息›日期、时间、地点、方位、参加者、号码等',
    textType: 'Dialog', minutes: 5,
    introduction: 'Höre das Gespräch zweier Freunde. Achte auf den Wochentag und die Uhrzeit.',
    passages: [
      { id: 'p1', speaker: 'A', text: '你好！你明天去学校吗？', pinyin: 'Nǐ hǎo! Nǐ míngtiān qù xuéxiào ma?' },
      { id: 'p2', speaker: 'B', text: '不去。明天是星期六，我在家看电视。', pinyin: 'Bú qù. Míngtiān shì xīngqīliù, wǒ zài jiā kàn diànshì.' },
      { id: 'p3', speaker: 'A', text: '我们下午一起去喝咖啡，好吗？', pinyin: 'Wǒmen xiàwǔ yìqǐ qù hē kāfēi, hǎo ma?' },
      { id: 'p4', speaker: 'B', text: '好啊！三点见。', pinyin: 'Hǎo a! Sān diǎn jiàn.' }
    ],
    translation: 'A: Hallo! Gehst du morgen in die Schule?\nB: Nein. Morgen ist Samstag, ich sehe zu Hause fern.\nA: Wollen wir am Nachmittag zusammen Kaffee trinken gehen?\nB: Gern! Bis um drei.',
    glossary: [
      { word: '你好', pinyin: 'nǐ hǎo', meaning: 'Hallo', vocabId: 'w:你好:ni3hao3' },
      { word: '星期六', pinyin: 'xīngqīliù', meaning: 'Samstag' }
    ],
    note: 'Bei Uhrzeiten zählt die Zahl vor dem Wort für Uhr; höre gezielt darauf.',
    questions: [
      { id: 'q1', kind: 'detail', prompt: 'Welcher Tag ist morgen?', evidence: 'p2', answer: 1, choices: [
        { text: 'Freitag', explanation: 'B nennt einen anderen Wochentag.' },
        { text: 'Samstag', explanation: 'B sagt: Morgen ist Samstag.' },
        { text: 'Sonntag', explanation: 'Sonntag kommt im Gespräch nicht vor.' }] },
      { id: 'q2', kind: 'detail', prompt: 'Was macht B morgen zu Hause?', evidence: 'p2', answer: 0, choices: [
        { text: 'Fernsehen', explanation: 'B will zu Hause fernsehen.' },
        { text: 'Lernen', explanation: 'B geht morgen gerade nicht in die Schule.' },
        { text: 'Kochen', explanation: 'Vom Kochen ist nicht die Rede.' }] },
      { id: 'q3', kind: 'detail', prompt: 'Wann treffen sich die beiden?', evidence: 'p4', answer: 2, choices: [
        { text: 'Um zwei Uhr', explanation: 'B nennt eine andere Uhrzeit.' },
        { text: 'Um vier Uhr', explanation: 'B nennt eine andere Uhrzeit.' },
        { text: 'Um drei Uhr', explanation: 'B sagt am Ende: Bis um drei.' }] }
    ]
  }
];
const clone = (unit, changes) => Object.assign(JSON.parse(JSON.stringify(unit)), changes);
// Variants for paths the two audited units do not reach: a level above HSK 2 and a listening unit with a recording.
const SERVED = [
  FIXTURE[0], clone(FIXTURE[0], { id: 'reading-hsk3-01', level: 'HSK3' }),
  FIXTURE[1], clone(FIXTURE[1], { id: 'listening-hsk1-02', order: 2, title: 'Pläne mit Aufnahme', audio: { src: 'audio/comprehension/listening-hsk1-02.mp3', revision: 't1' } })
];
const SENTENCES = 7;

class Resources extends ResourceLoader {
  constructor(fixture, requests) { super(); this.fixture = fixture; this.requests = requests; }
  fetch(url) {
    if (!url.startsWith('http://zhongwen.test/')) return null;
    const name = decodeURIComponent(new URL(url).pathname).slice(1);
    this.requests.push(name);
    const fixture = this.fixture;
    if (fixture && name === 'comprehension-data.js') {
      if (fixture.fail > 0) { fixture.fail--; return Promise.reject(new Error('Intentional content failure')); }
      return Promise.resolve(Buffer.from(build.bundle(fixture.units)));
    }
    if (fixture && name === 'lang-profile.js') {
      const counts = { reading: fixture.units.filter(u => u.skill === 'reading').length, listening: fixture.units.filter(u => u.skill === 'listening').length };
      return Promise.resolve(Buffer.from(build.withCounts(fs.readFileSync(path.join(ROOT, name), 'utf8'), counts)));
    }
    return Promise.resolve(fs.readFileSync(path.join(ROOT, name)));
  }
}

async function boot(hash = '', { fixture = { units: SERVED, fail: 0 }, local = {}, session = null } = {}) {
  const errors = [], requests = [], spoken = [], media = [], speech = { cancelled: 0 };
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', e => { if (!String(e.message).includes('Could not load script')) errors.push(e); });
  const dom = new JSDOM(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), {
    url: 'http://zhongwen.test/index.html' + hash, resources: new Resources(fixture, requests), runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole,
    beforeParse(w) {
      w.innerWidth = 1440;
      w.matchMedia = () => ({ matches: false, addEventListener() {}, addListener() {} });
      w.scrollTo = (x, y) => { w.scrollY = typeof x === 'object' ? x.top || 0 : y; };
      w.HTMLElement.prototype.scrollIntoView = function () {};
      w.IntersectionObserver = function () { this.observe = function () {}; this.disconnect = function () {}; };
      w.SpeechSynthesisUtterance = function (text) { this.text = text; };
      w.speechSynthesis = { getVoices: () => [], resume() {}, cancel() { speech.cancelled++; }, speak: u => spoken.push({ text: u.text, rate: u.rate, lang: u.lang }) };
      w.HTMLMediaElement.prototype.play = function () { media.push('play'); return Promise.resolve(); };
      w.HTMLMediaElement.prototype.pause = function () { media.push('pause'); };
      w.HTMLMediaElement.prototype.load = function () { media.push('load'); };
      w.localStorage.setItem('zhongwen-storage-version', '1');
      for (const [key, value] of Object.entries(local)) w.localStorage.setItem(key, value);
      if (session) w.sessionStorage.setItem('zhongwen-workspace', session);
    }
  });
  const w = dom.window;
  await until(() => w.app && w.app.workspace && w.history.state && w.history.state.workspace, 'workspace ready');
  return { w, d: w.document, errors, requests, spoken, media, speech };
}
async function finish(f) {
  await Promise.all(Object.values(f.w.app.sections).map(s => s._loadPromise).filter(Boolean)).catch(() => {});
  await delay(30);
  assert.deepEqual(f.errors.map(e => (e && e.stack) || String(e)), [], 'Uncaught browser errors');
  f.w.close();
}
function clickText(d, text, scope = d) {
  const button = Array.from(scope.querySelectorAll('button')).find(b => b.textContent === text && !b.closest('.hidden, [hidden]'));
  assert(button, 'Button ' + text);
  button.click();
  return button;
}
const submit = (w, d) => d.querySelector('.comprehension-unit form').dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
const stored = w => JSON.parse(w.localStorage.getItem('zhongwen-comprehension-v1'));
const tab = (d, name) => d.querySelector('.tab-btn[data-tab="' + name + '"]');

async function browser() {
  // The real repository: tabs stay hidden while the build counted no units, and nothing loads at startup.
  const real = build.loadProfile(fs.readFileSync(path.join(ROOT, 'lang-profile.js'), 'utf8')).comprehension;
  let f = await boot('', { fixture: null });
  let { w, d } = f;
  assert.equal(tab(d, 'reading').hidden, real.reading === 0);
  assert.equal(tab(d, 'listening').hidden, real.listening === 0);
  assert(!f.requests.includes('comprehension-data.js'), 'Content must load lazily');
  d.body.dispatchEvent(new w.KeyboardEvent('keydown', { key: '9', bubbles: true }));
  await until(() => w.app.activeTab === 'quiz', 'key 9 still opens the quiz');
  await finish(f);

  // Fixture: tabs visible, content loaded on first visit.
  f = await boot('');
  ({ w, d } = f);
  assert(!tab(d, 'reading').hidden && !tab(d, 'listening').hidden, 'Tabs with units are shown');
  assert(!f.requests.includes('comprehension-data.js'), 'Content must load lazily');
  tab(d, 'reading').click();
  await until(() => d.querySelector('#reading-tab [data-unit]'), 'reading list');
  assert.equal(d.getElementById('page-eyebrow').textContent, 'Üben · 中文');
  assert.equal(d.getElementById('item-count').textContent, '2 Einheiten');
  assert.equal(d.querySelector('#reading-tab .level-filters [aria-pressed="true"]').textContent, 'HSK 1');
  assert.equal(d.querySelectorAll('#reading-tab .level-filters button').length, 7);
  assert.equal(d.querySelectorAll('#reading-tab [data-unit]').length, 1);
  w.scrollY = 300;
  d.querySelector('[data-unit="reading-hsk1-01"]').click();
  assert.equal(w.location.hash, '#reading/reading-hsk1-01');
  const article = d.querySelector('.comprehension-unit');
  assert.equal(article.querySelector('h2').textContent, 'Eine Vorstellung');
  assert(article.textContent.includes('HSK-Aufgabe 1: 问答个人基本信息'), 'Syllabus task shown');
  // Ruby: one rt per pinyin word (中国人 Zhōngguórén), punctuation outside; shown by default at HSK 1.
  assert.equal(article.querySelectorAll('ruby').length, 31);
  assert([...article.querySelectorAll('ruby')].some(r => r.firstChild.textContent === '中国人' && r.querySelector('rt').textContent === 'Zhōngguórén'), 'word-level ruby');
  assert.equal(article.querySelector('rt').textContent, 'Wǒ');
  assert.equal(article.querySelector('.comprehension-chinese').lang, 'zh-CN');
  assert(!article.classList.contains('without-pinyin'));
  clickText(d, 'Pinyin anzeigen');
  assert(article.classList.contains('without-pinyin'));
  assert(article.textContent.includes('Dieser Versuch: ohne Hilfe'), 'Hiding beginner pinyin is no help');
  const questions = article.querySelectorAll('fieldset');
  questions[0].querySelector('input[value="0"]').click();
  questions[1].querySelector('input[value="0"]').click();
  assert.equal(stored(w)['reading-hsk1-01'].answers.q2, 0);
  submit(w, d);
  assert(!d.querySelector('.comprehension-feedback'), 'Incomplete submissions do not reveal answers');
  clickText(d, 'Deutsche Übersetzung'); clickText(d, 'Deutsche Übersetzung');
  assert(stored(w)['reading-hsk1-01'].assisted, 'Closing a help must not clear it');
  clickText(d, 'Wortschatzhilfe');
  assert(d.querySelector('.comprehension-glossary').textContent.includes('Zählwort für Familienmitglieder'));
  questions[2].querySelector('input[value="3"]').click();
  submit(w, d);
  assert(d.querySelector('.comprehension-result').textContent.startsWith('2 von 3 richtig · mit Hilfe'));
  assert.equal(d.querySelectorAll('.comprehension-feedback').length, 12);
  assert(Array.from(d.querySelectorAll('.comprehension-evidence')).some(p => p.textContent.includes('我家有四口人')));
  assert(Array.from(d.querySelectorAll('#reading-tab input')).every(input => input.disabled));
  // The result survives a reload.
  const refresh = await boot(w.location.hash, { local: { 'zhongwen-comprehension-v1': w.localStorage.getItem('zhongwen-comprehension-v1') }, session: w.sessionStorage.getItem('zhongwen-workspace') });
  await until(() => refresh.d.querySelector('.comprehension-result'), 'restored result');
  await finish(refresh);
  clickText(d, 'Neuer Versuch');
  assert(!d.querySelector('.comprehension-feedback'));
  assert(Array.from(d.querySelectorAll('#reading-tab input')).every(input => !input.checked));
  assert(Array.from(d.querySelectorAll('.comprehension-hint')).every(n => n.hidden));
  clickText(d, '← Zurück zu Lesen');
  assert.equal(w.scrollY, 300);
  assert.equal(d.activeElement.dataset.unit, 'reading-hsk1-01');
  assert.equal(w.location.hash, '#reading');
  w.history.back();
  await until(() => d.querySelector('.comprehension-unit'), 'history back to the unit');
  w.history.forward();
  await until(() => d.querySelector('#reading-tab [data-unit]'), 'history forward to the list');
  // Above HSK 2 pinyin is a help.
  clickText(d, 'HSK 2');
  assert(d.getElementById('reading-tab').textContent.includes('noch keine Einheiten'));
  clickText(d, 'HSK 3');
  d.querySelector('[data-unit="reading-hsk3-01"]').click();
  const upper = d.querySelector('.comprehension-unit');
  assert(upper.classList.contains('without-pinyin'));
  assert.equal(clickText(d, 'Pinyin anzeigen').getAttribute('aria-pressed'), 'true');
  assert(!upper.classList.contains('without-pinyin'));
  assert(upper.textContent.includes('Dieser Versuch: mit Hilfe'));
  assert(stored(w)['reading-hsk3-01'].hints.pinyin);

  // Listening without a recording: preliminary browser voice, transcript behind a help.
  w.app.switchTab('listening');
  await until(() => d.querySelector('#listening-tab [data-unit]'), 'listening list');
  assert.equal(d.getElementById('item-count').textContent, '2 Einheiten');
  d.querySelector('[data-unit="listening-hsk1-01"]').click();
  const unit = d.querySelector('#listening-tab .comprehension-unit');
  assert(!unit.querySelector('audio'));
  assert(unit.querySelector('.comprehension-voice').textContent.startsWith('Vorläufige Browser-Stimme'));
  assert(d.getElementById('listening-hsk1-01-transcript').hidden);
  clickText(d, 'Abspielen', unit);
  await until(() => f.spoken.length === SENTENCES, 'browser voice speaks every sentence');
  assert.equal(f.spoken[3].text, '明天是星期六，我在家看电视。');
  assert(f.spoken.every(s => s.rate === 1 && s.lang === 'zh-CN'));
  assert(!stored(w)['listening-hsk1-01'].assisted);
  const speed = unit.querySelector('select');
  speed.value = '0.8'; speed.dispatchEvent(new w.Event('change'));
  assert(stored(w)['listening-hsk1-01'].assisted, 'Slower speech is a help');
  clickText(d, 'Transkript anzeigen');
  assert(!d.getElementById('listening-hsk1-01-transcript').hidden);
  assert.equal(unit.querySelectorAll('ruby').length, 30); // one per pinyin word
  assert(!unit.classList.contains('without-pinyin'));
  const cancelled = f.speech.cancelled;
  clickText(d, 'Abspielen', unit);
  w.app.switchTab('tones');
  assert(f.speech.cancelled > cancelled, 'Leaving the unit stops the voice');
  await delay(100);
  assert.equal(f.spoken.length, SENTENCES, 'Speech cancelled before it started stays silent');
  // A glossary word opens its vocabulary entry; history returns to the unit.
  w.app.switchTab('listening');
  await until(() => d.querySelector('#listening-tab .comprehension-unit'), 'listening unit restored');
  clickText(d, 'Wortschatzhilfe');
  d.querySelector('#listening-tab .comprehension-glossary .btn-link').click();
  await until(() => w.app.activeTab === 'vocab' && w.app.sections.vocab.isOverlayOpen(), 'glossary opens vocabulary');
  assert.equal(w.app.sections.vocab.selectedItem.word, '你好');
  w.history.back();
  await until(() => w.app.activeTab === 'listening' && d.querySelector('#listening-tab .comprehension-unit'), 'back to the listening unit');
  assert.equal(w.location.hash, '#listening/listening-hsk1-01');
  await finish(f);

  // A recording: no autoplay, reload after an error.
  f = await boot('#listening/listening-hsk1-02');
  ({ w, d } = f);
  await until(() => d.querySelector('#listening-tab audio'), 'recording');
  const audio = d.querySelector('#listening-tab audio');
  assert.equal(audio.preload, 'none');
  assert(audio.getAttribute('src').endsWith('listening-hsk1-02.mp3?v=t1'));
  assert(!f.media.includes('play'));
  clickText(d, 'Abspielen / Fortsetzen');
  assert(f.media.includes('play'));
  audio.dispatchEvent(new w.Event('error'));
  assert(!d.querySelector('.comprehension-unit [role="alert"]').hidden);
  w.app.switchTab('tones');
  assert(!audio.hasAttribute('src'), 'Leaving the unit releases the recording');
  await finish(f);

  // Unknown unit, failed content load with retry.
  f = await boot('#reading/no-such-unit');
  await until(() => f.d.getElementById('reading-tab').textContent.includes('nicht gefunden'), 'unknown unit message');
  await finish(f);
  f = await boot('#reading', { fixture: { units: SERVED, fail: 1 } });
  await until(() => Array.from(f.d.querySelectorAll('#reading-tab button')).some(b => b.textContent === 'Erneut versuchen'), 'load failure');
  clickText(f.d, 'Erneut versuchen');
  await until(() => f.d.querySelector('#reading-tab [data-unit]'), 'retry loads the units');
  await finish(f);
}

// The audit accepts the fixture and reports typical authoring mistakes.
function audit() {
  const { auditUnits } = require('./audit-comprehension.cjs');
  const options = {
    readingContext: () => require('./enrich/validate.cjs').context(),
    vocabIds: () => new Set(require('./enrich/common.cjs').loadSources().flatMap(source => source.items).map(item => item.id)),
    tasks: require('./hsk2025/tasks.json').tasks,
    topics: require('./hsk2025/topics.json').topics
  };
  const sources = units => [{ level: 'HSK1', file: 'fixture', units }];
  const clean = auditUnits(sources(FIXTURE), options);
  assert.deepEqual(clean.errors, [], 'Fixture fails the audit');
  assert.deepEqual(clean.warnings, [], 'Fixture has audit warnings');
  const broken = JSON.parse(JSON.stringify(FIXTURE));
  broken[0].translation = 'Ich heiße 王小明.';
  broken[0].passages[1].pinyin = broken[0].passages[1].pinyin.replace('hē chá', 'hē');
  broken[0].questions[0].evidence = 'p9';
  broken[0].questions[1].answer = 4;
  broken[0].questions[2].choices.pop();
  broken[1].order = 3;
  broken[1].task.no = 99;
  broken[1].glossary[0].vocabId = 'w:不存在:bu4cun2zai4';
  const { errors } = auditUnits(sources(broken), options);
  for (const expected of ['translation contains Chinese', 'passage p2: pinyin: 茶 written', 'evidence p9', 'question q2: answer', 'question q3: 4 choices',
    'order 3, expected 1', 'id must be listening-hsk1-03', 'task 99', 'vocabId w:不存在']) {
    assert(errors.some(e => e.includes(expected)), 'Audit misses: ' + expected + '\n' + errors.join('\n'));
  }
  const short = clone(FIXTURE[0], { passages: [FIXTURE[0].passages[0]] });
  assert(auditUnits(sources([short]), options).errors.some(e => e.includes('19 Han characters, expected 40–80')), 'Length bounds');
}

(async () => {
  await browser();
  audit();
  console.log('Comprehension tests passed: hidden tabs without units, lazy loading, pinyin ruby and helps, scoring and reload, routes and history, browser voice, recordings, glossary links, load retry, audit on the fixture.');
})().catch(error => { console.error(error); process.exitCode = 1; });
