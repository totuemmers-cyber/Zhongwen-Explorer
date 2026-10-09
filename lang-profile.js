// Language profile: everything the shared app shell (ported from Nihongo Explorer)
// needs to know about this app's language, so the shell code itself stays generic.
window.LANG_PROFILE = {
  id: 'zhongwen',
  appTitle: 'Zhongwen Explorer',
  // localStorage/sessionStorage keys; the origin is shared with Nihongo Explorer.
  storagePrefix: 'zhongwen-',
  sessionKey: 'zhongwen-workspace',
  // Web Speech voice language; mainland Mandarin (not zh-HK/zh-TW, not Cantonese).
  speechLang: 'zh-CN',
  levelLabel: 'HSK',
  // HSK 2025 syllabus: levels 1–6 plus the combined 7–9 band.
  levels: ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9'],
  // Vocabulary outside the syllabus (kept when CC-CEDICT confirms it or it is a Chengyu/Redewendung).
  extraLevel: 'Zusatz',
  defaultTab: 'tones',
  // Data files per section, loaded on first use (app.js) and audited in this order.
  dataScripts: {
    radicals: ['kangxi-radicals-data.js', 'kangxi-radicals-extra.js'],
    hanzi: ['hanzi-hsk1.js', 'hanzi-hsk2.js', 'hanzi-hsk3.js', 'hanzi-hsk4.js', 'hanzi-hsk5.js', 'hanzi-hsk6.js'],
    grammar: ['grammar-hsk1.js', 'grammar-hsk2.js', 'grammar-hsk3.js', 'grammar-hsk4.js', 'grammar-hsk5.js', 'grammar-hsk6.js', 'grammar-hsk7-9.js'],
    vocab: ['vocab-hsk1.js', 'vocab-hsk2.js', 'vocab-hsk3.js', 'vocab-hsk4.js', 'vocab-hsk5.js', 'vocab-hsk6.js', 'vocab-hsk7-9.js', 'vocab-zusatz.js',
      'chengyu-data.js', 'redewendungen-data.js'],
    onomatopoeia: ['onomatopoeia-data.js', 'onomatopoeia-extra.js', 'onomatopoeia-extra2.js', 'onomatopoeia-extra3.js'],
    measurewords: ['measure-words-data.js', 'measure-words-extra.js', 'measure-words-extra2.js']
  }
};
