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
  defaultTab: 'tones'
};
