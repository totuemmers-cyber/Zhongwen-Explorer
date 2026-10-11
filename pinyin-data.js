// =============================================================================
// Zhongwen Explorer - Pinyin Data
// Comprehensive Pinyin reference data for Mandarin Chinese learning
// UI language: German
// =============================================================================

window.PINYIN_DATA = {

  // ---------------------------------------------------------------------------
  // Row colors for visual grouping (light/dark mode support)
  // ---------------------------------------------------------------------------
  rowColors: {
    // Labials (唇音)
    'b':  { color: '#ef4444', bg: '#fef2f2', border: '#fecaca', darkBg: '#2a1215', darkBorder: '#5c2027' },
    'p':  { color: '#f97316', bg: '#fff7ed', border: '#fed7aa', darkBg: '#2a1a0e', darkBorder: '#5c3518' },
    'm':  { color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', darkBg: '#2a2008', darkBorder: '#5c4512' },
    'f':  { color: '#eab308', bg: '#fefce8', border: '#fef08a', darkBg: '#2a2505', darkBorder: '#5c5010' },
    // Alveolars (舌尖中音)
    'd':  { color: '#84cc16', bg: '#f7fee7', border: '#d9f99d', darkBg: '#1a2e0a', darkBorder: '#3d5c15' },
    't':  { color: '#22c55e', bg: '#f0fdf4', border: '#bbf7d0', darkBg: '#0f2a18', darkBorder: '#1a5c30' },
    'n':  { color: '#10b981', bg: '#ecfdf5', border: '#a7f3d0', darkBg: '#0d2a20', darkBorder: '#155c40' },
    'l':  { color: '#14b8a6', bg: '#f0fdfa', border: '#99f6e4', darkBg: '#0d2a27', darkBorder: '#155c50' },
    // Velars (舌根音)
    'g':  { color: '#06b6d4', bg: '#ecfeff', border: '#a5f3fc', darkBg: '#0a2530', darkBorder: '#125c6a' },
    'k':  { color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd', darkBg: '#0a2040', darkBorder: '#124580' },
    'h':  { color: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe', darkBg: '#0f1a3a', darkBorder: '#1e3a6e' },
    // Palatals (舌面音)
    'j':  { color: '#6366f1', bg: '#eef2ff', border: '#c7d2fe', darkBg: '#15152e', darkBorder: '#2e2e5c' },
    'q':  { color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe', darkBg: '#1a132e', darkBorder: '#35255c' },
    'x':  { color: '#a855f7', bg: '#faf5ff', border: '#e9d5ff', darkBg: '#1f102e', darkBorder: '#40205c' },
    // Retroflexes (翘舌音)
    'zh': { color: '#d946ef', bg: '#fdf4ff', border: '#f5d0fe', darkBg: '#2a0f2a', darkBorder: '#5c1f55' },
    'ch': { color: '#ec4899', bg: '#fdf2f8', border: '#fbcfe8', darkBg: '#2a1020', darkBorder: '#5c2040' },
    'sh': { color: '#f43f5e', bg: '#fff1f2', border: '#fecdd3', darkBg: '#2a1015', darkBorder: '#5c2028' },
    'r':  { color: '#e11d48', bg: '#fff1f3', border: '#fecdd6', darkBg: '#2e0d15', darkBorder: '#5c1a2a' },
    // Dentals (舌尖前音)
    'z':  { color: '#78716c', bg: '#fafaf9', border: '#e7e5e4', darkBg: '#1c1b1a', darkBorder: '#3d3b38' },
    'c':  { color: '#737373', bg: '#fafafa', border: '#e5e5e5', darkBg: '#1a1a1a', darkBorder: '#3d3d3d' },
    's':  { color: '#71717a', bg: '#fafafa', border: '#e4e4e7', darkBg: '#1a1a1c', darkBorder: '#3d3d42' },
    // Special (特殊)
    'y':  { color: '#0d9488', bg: '#f0fdfa', border: '#99f6e4', darkBg: '#0d2520', darkBorder: '#155040' },
    'w':  { color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc', darkBg: '#0a2028', darkBorder: '#124050' },
    // Finals-only row (零声母)
    '':   { color: '#64748b', bg: '#f8fafc', border: '#e2e8f0', darkBg: '#1e2028', darkBorder: '#3d4050' }
  },

  // ---------------------------------------------------------------------------
  // Initials chart (声母 shēngmǔ)
  // ---------------------------------------------------------------------------
  initials: {
    label: '声母',
    labelPinyin: 'shēngmǔ',
    labelDE: 'Anlaute',
    groups: [
      {
        name: 'Labiale (唇音)',
        sounds: [
          { pinyin: 'b', ipa: '/p/', example: '爸', examplePinyin: 'bà', meaning: 'Vater' },
          { pinyin: 'p', ipa: '/pʰ/', example: '怕', examplePinyin: 'pà', meaning: 'fürchten' },
          { pinyin: 'm', ipa: '/m/', example: '妈', examplePinyin: 'mā', meaning: 'Mutter' },
          { pinyin: 'f', ipa: '/f/', example: '飞', examplePinyin: 'fēi', meaning: 'fliegen' }
        ]
      },
      {
        name: 'Alveolare (舌尖中音)',
        sounds: [
          { pinyin: 'd', ipa: '/t/', example: '大', examplePinyin: 'dà', meaning: 'groß' },
          { pinyin: 't', ipa: '/tʰ/', example: '他', examplePinyin: 'tā', meaning: 'er' },
          { pinyin: 'n', ipa: '/n/', example: '你', examplePinyin: 'nǐ', meaning: 'du' },
          { pinyin: 'l', ipa: '/l/', example: '来', examplePinyin: 'lái', meaning: 'kommen' }
        ]
      },
      {
        name: 'Velare (舌根音)',
        sounds: [
          { pinyin: 'g', ipa: '/k/', example: '高', examplePinyin: 'gāo', meaning: 'hoch' },
          { pinyin: 'k', ipa: '/kʰ/', example: '看', examplePinyin: 'kàn', meaning: 'sehen' },
          { pinyin: 'h', ipa: '/x/', example: '好', examplePinyin: 'hǎo', meaning: 'gut' }
        ]
      },
      {
        name: 'Palatale (舌面音)',
        sounds: [
          { pinyin: 'j', ipa: '/tɕ/', example: '家', examplePinyin: 'jiā', meaning: 'Familie' },
          { pinyin: 'q', ipa: '/tɕʰ/', example: '去', examplePinyin: 'qù', meaning: 'gehen' },
          { pinyin: 'x', ipa: '/ɕ/', example: '小', examplePinyin: 'xiǎo', meaning: 'klein' }
        ]
      },
      {
        name: 'Retroflexe (翘舌音)',
        sounds: [
          { pinyin: 'zh', ipa: '/ʈʂ/', example: '中', examplePinyin: 'zhōng', meaning: 'Mitte' },
          { pinyin: 'ch', ipa: '/ʈʂʰ/', example: '吃', examplePinyin: 'chī', meaning: 'essen' },
          { pinyin: 'sh', ipa: '/ʂ/', example: '是', examplePinyin: 'shì', meaning: 'sein' },
          { pinyin: 'r', ipa: '/ɻ/', example: '人', examplePinyin: 'rén', meaning: 'Mensch' }
        ]
      },
      {
        name: 'Dentale (舌尖前音)',
        sounds: [
          { pinyin: 'z', ipa: '/ts/', example: '做', examplePinyin: 'zuò', meaning: 'machen' },
          { pinyin: 'c', ipa: '/tsʰ/', example: '从', examplePinyin: 'cóng', meaning: 'von' },
          { pinyin: 's', ipa: '/s/', example: '三', examplePinyin: 'sān', meaning: 'drei' }
        ]
      },
      {
        name: 'Halbvokale y, w (nur Schreibung, keine eigenen Anlaute)',
        sounds: [
          { pinyin: 'y', ipa: '/j/', example: '要', examplePinyin: 'yào', meaning: 'wollen' },
          { pinyin: 'w', ipa: '/w/', example: '我', examplePinyin: 'wǒ', meaning: 'ich' }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Finals chart (韵母 yùnmǔ)
  // ---------------------------------------------------------------------------
  finals: {
    label: '韵母',
    labelPinyin: 'yùnmǔ',
    labelDE: 'Auslaute',
    groups: [
      {
        name: 'Einfache Auslaute (单韵母)',
        sounds: [
          { pinyin: 'a', ipa: '/a/', example: '大', examplePinyin: 'dà', meaning: 'groß' },
          { pinyin: 'o', ipa: '/o/', example: '波', examplePinyin: 'bō', meaning: 'Welle' },
          { pinyin: 'e', ipa: '/ɤ/', example: '得', examplePinyin: 'dé', meaning: 'bekommen' },
          { pinyin: 'i', ipa: '/i/', example: '地', examplePinyin: 'dì', meaning: 'Erde' },
          { pinyin: 'u', ipa: '/u/', example: '路', examplePinyin: 'lù', meaning: 'Weg' },
          { pinyin: 'ü', ipa: '/y/', example: '绿', examplePinyin: 'lǜ', meaning: 'grün' }
        ]
      },
      {
        name: 'Zusammengesetzte Auslaute (复韵母)',
        sounds: [
          { pinyin: 'ai', ipa: '/ai/', example: '爱', examplePinyin: 'ài', meaning: 'Liebe' },
          { pinyin: 'ei', ipa: '/ei/', example: '北', examplePinyin: 'běi', meaning: 'Norden' },
          { pinyin: 'ao', ipa: '/au/', example: '好', examplePinyin: 'hǎo', meaning: 'gut' },
          { pinyin: 'ou', ipa: '/ou/', example: '走', examplePinyin: 'zǒu', meaning: 'gehen' },
          { pinyin: 'ia', ipa: '/ia/', example: '家', examplePinyin: 'jiā', meaning: 'Familie' },
          { pinyin: 'ie', ipa: '/iɛ/', example: '写', examplePinyin: 'xiě', meaning: 'schreiben' },
          { pinyin: 'iao', ipa: '/iau/', example: '鸟', examplePinyin: 'niǎo', meaning: 'Vogel' },
          { pinyin: 'iu', ipa: '/iou/', example: '六', examplePinyin: 'liù', meaning: 'sechs' },
          { pinyin: 'ua', ipa: '/ua/', example: '花', examplePinyin: 'huā', meaning: 'Blume' },
          { pinyin: 'uo', ipa: '/uo/', example: '说', examplePinyin: 'shuō', meaning: 'sprechen' },
          { pinyin: 'uai', ipa: '/uai/', example: '快', examplePinyin: 'kuài', meaning: 'schnell' },
          { pinyin: 'ui', ipa: '/uei/', example: '对', examplePinyin: 'duì', meaning: 'richtig' },
          { pinyin: 'üe', ipa: '/yɛ/', example: '学', examplePinyin: 'xué', meaning: 'lernen' }
        ]
      },
      {
        name: 'Nasale Auslaute (鼻韵母)',
        sounds: [
          { pinyin: 'an', ipa: '/an/', example: '看', examplePinyin: 'kàn', meaning: 'sehen' },
          { pinyin: 'en', ipa: '/ən/', example: '人', examplePinyin: 'rén', meaning: 'Mensch' },
          { pinyin: 'in', ipa: '/in/', example: '今', examplePinyin: 'jīn', meaning: 'heute' },
          { pinyin: 'un', ipa: '/uən/', example: '春', examplePinyin: 'chūn', meaning: 'Frühling' },
          { pinyin: 'ün', ipa: '/yn/', example: '军', examplePinyin: 'jūn', meaning: 'Armee' },
          { pinyin: 'ang', ipa: '/aŋ/', example: '长', examplePinyin: 'cháng', meaning: 'lang' },
          { pinyin: 'eng', ipa: '/əŋ/', example: '风', examplePinyin: 'fēng', meaning: 'Wind' },
          { pinyin: 'ing', ipa: '/iŋ/', example: '明', examplePinyin: 'míng', meaning: 'hell' },
          { pinyin: 'ong', ipa: '/uŋ/', example: '中', examplePinyin: 'zhōng', meaning: 'Mitte' },
          { pinyin: 'ian', ipa: '/iɛn/', example: '天', examplePinyin: 'tiān', meaning: 'Himmel' },
          { pinyin: 'uan', ipa: '/uan/', example: '全', examplePinyin: 'quán', meaning: 'ganz' },
          { pinyin: 'üan', ipa: '/yɛn/', example: '元', examplePinyin: 'yuán', meaning: 'Yuan' },
          { pinyin: 'iang', ipa: '/iaŋ/', example: '两', examplePinyin: 'liǎng', meaning: 'zwei' },
          { pinyin: 'uang', ipa: '/uaŋ/', example: '黄', examplePinyin: 'huáng', meaning: 'gelb' },
          { pinyin: 'ueng', ipa: '/uəŋ/', example: '翁', examplePinyin: 'wēng', meaning: 'alter Mann' },
          { pinyin: 'iong', ipa: '/yŋ/', example: '用', examplePinyin: 'yòng', meaning: 'benutzen' }
        ]
      },
      {
        name: 'Retroflexer Auslaut (卷舌韵母)',
        sounds: [
          { pinyin: 'er', ipa: '/ɚ/', example: '二', examplePinyin: 'èr', meaning: 'zwei' }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Tones (声调 shēngdiào)
  // ---------------------------------------------------------------------------
  tones: [
    { number: 1, name: 'Erster Ton', chinese: '第一声', mark: 'ā', description: 'Hoher, gleichbleibender Ton', color: '#ef4444', example: '妈', pinyin: 'mā', meaning: 'Mutter' },
    { number: 2, name: 'Zweiter Ton', chinese: '第二声', mark: 'á', description: 'Steigender Ton: von mittlerer Höhe nach oben', color: '#f59e0b', example: '麻', pinyin: 'má', meaning: 'Hanf' },
    { number: 3, name: 'Dritter Ton', chinese: '第三声', mark: 'ǎ', description: 'Tiefer, fallend-steigender Ton; vor anderen Tönen meist nur tief, ohne Anstieg', color: '#10b981', example: '马', pinyin: 'mǎ', meaning: 'Pferd' },
    { number: 4, name: 'Vierter Ton', chinese: '第四声', mark: 'à', description: 'Fallender Ton: kurz und kräftig von oben nach unten', color: '#3b82f6', example: '骂', pinyin: 'mà', meaning: 'schimpfen' },
    { number: 5, name: 'Neutraler Ton', chinese: '轻声', mark: 'a', description: 'Kurz und unbetont, ohne Tonzeichen; die Tonhöhe richtet sich nach der vorangehenden Silbe', color: '#94a3b8', example: '吗', pinyin: 'ma', meaning: 'Fragepartikel' }
  ],

  // ---------------------------------------------------------------------------
  // Pinyin combination table
  // Columns: one per final (韵母), 35 in all. The y and w rows hold the syllables
  // without an initial, under their final (ya = ia, wei = uei, yuan = üan).
  // null = invalid combination
  // ---------------------------------------------------------------------------
  combinationColumns: [
    'a', 'o', 'e', 'i', 'u', 'ü', 'er',
    'ai', 'ei', 'ao', 'ou',
    'an', 'en', 'in', 'un', 'ün',
    'ang', 'eng', 'ing', 'ong',
    'ia', 'ie', 'iao', 'iu',
    'ua', 'uo', 'uai', 'ui', 'üe',
    'ian', 'uan', 'üan',
    'iang', 'uang', 'iong'
  ],

  combinations: [
    // Labials
    {
      initial: 'b',
      finals: [
        'ba', 'bo', null, 'bi', 'bu', null, null,
        'bai', 'bei', 'bao', null,
        'ban', 'ben', 'bin', null, null,
        'bang', 'beng', 'bing', null,
        null, 'bie', 'biao', null,
        null, null, null, null, null,
        'bian', null, null,
        null, null, null
      ]
    },
    {
      initial: 'p',
      finals: [
        'pa', 'po', null, 'pi', 'pu', null, null,
        'pai', 'pei', 'pao', 'pou',
        'pan', 'pen', 'pin', null, null,
        'pang', 'peng', 'ping', null,
        null, 'pie', 'piao', null,
        null, null, null, null, null,
        'pian', null, null,
        null, null, null
      ]
    },
    {
      initial: 'm',
      finals: [
        'ma', 'mo', 'me', 'mi', 'mu', null, null,
        'mai', 'mei', 'mao', 'mou',
        'man', 'men', 'min', null, null,
        'mang', 'meng', 'ming', null,
        null, 'mie', 'miao', 'miu',
        null, null, null, null, null,
        'mian', null, null,
        null, null, null
      ]
    },
    {
      initial: 'f',
      finals: [
        'fa', 'fo', null, null, 'fu', null, null,
        null, 'fei', null, 'fou',
        'fan', 'fen', null, null, null,
        'fang', 'feng', null, null,
        null, null, null, null,
        null, null, null, null, null,
        null, null, null,
        null, null, null
      ]
    },
    // Alveolars
    {
      initial: 'd',
      finals: [
        'da', null, 'de', 'di', 'du', null, null,
        'dai', 'dei', 'dao', 'dou',
        'dan', 'den', null, 'dun', null,
        'dang', 'deng', 'ding', 'dong',
        'dia', 'die', 'diao', 'diu',
        null, 'duo', null, 'dui', null,
        'dian', 'duan', null,
        null, null, null
      ]
    },
    {
      initial: 't',
      finals: [
        'ta', null, 'te', 'ti', 'tu', null, null,
        'tai', null, 'tao', 'tou',
        'tan', null, null, 'tun', null,
        'tang', 'teng', 'ting', 'tong',
        null, 'tie', 'tiao', null,
        null, 'tuo', null, 'tui', null,
        'tian', 'tuan', null,
        null, null, null
      ]
    },
    {
      initial: 'n',
      finals: [
        'na', null, 'ne', 'ni', 'nu', 'nü', null,
        'nai', 'nei', 'nao', 'nou',
        'nan', 'nen', 'nin', null, null,
        'nang', 'neng', 'ning', 'nong',
        null, 'nie', 'niao', 'niu',
        null, 'nuo', null, null, 'nüe',
        'nian', 'nuan', null,
        'niang', null, null
      ]
    },
    {
      initial: 'l',
      finals: [
        'la', 'lo', 'le', 'li', 'lu', 'lü', null,
        'lai', 'lei', 'lao', 'lou',
        'lan', null, 'lin', 'lun', null,
        'lang', 'leng', 'ling', 'long',
        'lia', 'lie', 'liao', 'liu',
        null, 'luo', null, null, 'lüe',
        'lian', 'luan', null,
        'liang', null, null
      ]
    },
    // Velars
    {
      initial: 'g',
      finals: [
        'ga', null, 'ge', null, 'gu', null, null,
        'gai', 'gei', 'gao', 'gou',
        'gan', 'gen', null, 'gun', null,
        'gang', 'geng', null, 'gong',
        null, null, null, null,
        'gua', 'guo', 'guai', 'gui', null,
        null, 'guan', null,
        null, 'guang', null
      ]
    },
    {
      initial: 'k',
      finals: [
        'ka', null, 'ke', null, 'ku', null, null,
        'kai', 'kei', 'kao', 'kou',
        'kan', 'ken', null, 'kun', null,
        'kang', 'keng', null, 'kong',
        null, null, null, null,
        'kua', 'kuo', 'kuai', 'kui', null,
        null, 'kuan', null,
        null, 'kuang', null
      ]
    },
    {
      initial: 'h',
      finals: [
        'ha', null, 'he', null, 'hu', null, null,
        'hai', 'hei', 'hao', 'hou',
        'han', 'hen', null, 'hun', null,
        'hang', 'heng', null, 'hong',
        null, null, null, null,
        'hua', 'huo', 'huai', 'hui', null,
        null, 'huan', null,
        null, 'huang', null
      ]
    },
    // Palatals
    {
      initial: 'j',
      finals: [
        null, null, null, 'ji', null, 'ju', null,
        null, null, null, null,
        null, null, 'jin', null, 'jun',
        null, null, 'jing', null,
        'jia', 'jie', 'jiao', 'jiu',
        null, null, null, null, 'jue',
        'jian', null, 'juan',
        'jiang', null, 'jiong'
      ]
    },
    {
      initial: 'q',
      finals: [
        null, null, null, 'qi', null, 'qu', null,
        null, null, null, null,
        null, null, 'qin', null, 'qun',
        null, null, 'qing', null,
        'qia', 'qie', 'qiao', 'qiu',
        null, null, null, null, 'que',
        'qian', null, 'quan',
        'qiang', null, 'qiong'
      ]
    },
    {
      initial: 'x',
      finals: [
        null, null, null, 'xi', null, 'xu', null,
        null, null, null, null,
        null, null, 'xin', null, 'xun',
        null, null, 'xing', null,
        'xia', 'xie', 'xiao', 'xiu',
        null, null, null, null, 'xue',
        'xian', null, 'xuan',
        'xiang', null, 'xiong'
      ]
    },
    // Retroflexes
    {
      initial: 'zh',
      finals: [
        'zha', null, 'zhe', 'zhi', 'zhu', null, null,
        'zhai', 'zhei', 'zhao', 'zhou',
        'zhan', 'zhen', null, 'zhun', null,
        'zhang', 'zheng', null, 'zhong',
        null, null, null, null,
        'zhua', 'zhuo', 'zhuai', 'zhui', null,
        null, 'zhuan', null,
        null, 'zhuang', null
      ]
    },
    {
      initial: 'ch',
      finals: [
        'cha', null, 'che', 'chi', 'chu', null, null,
        'chai', null, 'chao', 'chou',
        'chan', 'chen', null, 'chun', null,
        'chang', 'cheng', null, 'chong',
        null, null, null, null,
        'chua', 'chuo', 'chuai', 'chui', null,
        null, 'chuan', null,
        null, 'chuang', null
      ]
    },
    {
      initial: 'sh',
      finals: [
        'sha', null, 'she', 'shi', 'shu', null, null,
        'shai', 'shei', 'shao', 'shou',
        'shan', 'shen', null, 'shun', null,
        'shang', 'sheng', null, null,
        null, null, null, null,
        'shua', 'shuo', 'shuai', 'shui', null,
        null, 'shuan', null,
        null, 'shuang', null
      ]
    },
    {
      initial: 'r',
      finals: [
        null, null, 're', 'ri', 'ru', null, null,
        null, null, 'rao', 'rou',
        'ran', 'ren', null, 'run', null,
        'rang', 'reng', null, 'rong',
        null, null, null, null,
        null, 'ruo', null, 'rui', null,
        null, 'ruan', null,
        null, null, null
      ]
    },
    // Dentals
    {
      initial: 'z',
      finals: [
        'za', null, 'ze', 'zi', 'zu', null, null,
        'zai', 'zei', 'zao', 'zou',
        'zan', 'zen', null, 'zun', null,
        'zang', 'zeng', null, 'zong',
        null, null, null, null,
        null, 'zuo', null, 'zui', null,
        null, 'zuan', null,
        null, null, null
      ]
    },
    {
      initial: 'c',
      finals: [
        'ca', null, 'ce', 'ci', 'cu', null, null,
        'cai', null, 'cao', 'cou',
        'can', 'cen', null, 'cun', null,
        'cang', 'ceng', null, 'cong',
        null, null, null, null,
        null, 'cuo', null, 'cui', null,
        null, 'cuan', null,
        null, null, null
      ]
    },
    {
      initial: 's',
      finals: [
        'sa', null, 'se', 'si', 'su', null, null,
        'sai', null, 'sao', 'sou',
        'san', 'sen', null, 'sun', null,
        'sang', 'seng', null, 'song',
        null, null, null, null,
        null, 'suo', null, 'sui', null,
        null, 'suan', null,
        null, null, null
      ]
    },
    // Special
    {
      initial: 'y',
      finals: [
        null, 'yo', null, 'yi', null, 'yu', null,
        null, null, null, null,
        null, null, 'yin', null, 'yun',
        null, null, 'ying', null,
        'ya', 'ye', 'yao', 'you',
        null, null, null, null, 'yue',
        'yan', null, 'yuan',
        'yang', null, 'yong'
      ]
    },
    {
      initial: 'w',
      finals: [
        null, null, null, null, 'wu', null, null,
        null, null, null, null,
        null, null, null, 'wen', null,
        null, null, null, 'weng',
        null, null, null, null,
        'wa', 'wo', 'wai', 'wei', null,
        null, 'wan', null,
        null, 'wang', null
      ]
    },
    // Zero initial (standalone finals)
    {
      initial: '',
      finals: [
        'a', 'o', 'e', null, null, null, 'er',
        'ai', 'ei', 'ao', 'ou',
        'an', 'en', null, null, null,
        'ang', 'eng', null, null,
        null, null, null, null,
        null, null, null, null, null,
        null, null, null,
        null, null, null
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // Pinyin → representative character map (for TTS in the combination table)
  // ---------------------------------------------------------------------------
  pinyinCharMap: {
    // Zero initial
    'a':'啊','o':'哦','e':'鹅','ai':'爱','ei':'诶','ao':'奥','ou':'欧',
    'an':'安','en':'恩','ang':'昂','eng':'鞥','er':'二',
    // b
    'ba':'八','bo':'波','bi':'笔','bu':'不',
    'bai':'白','bei':'北','bao':'包',
    'ban':'班','ben':'本','bin':'宾',
    'bang':'帮','beng':'蹦','bing':'冰',
    'bie':'别','biao':'表','bian':'边',
    // p
    'pa':'怕','po':'破','pi':'皮','pu':'普',
    'pai':'拍','pei':'配','pao':'跑','pou':'剖',
    'pan':'盘','pen':'喷','pin':'拼',
    'pang':'旁','peng':'朋','ping':'平',
    'pie':'撇','piao':'票','pian':'片',
    // m
    'ma':'妈','mo':'摸','me':'么','mi':'米','mu':'木',
    'mai':'买','mei':'美','mao':'猫','mou':'某',
    'man':'慢','men':'门','min':'民',
    'mang':'忙','meng':'梦','ming':'明',
    'mie':'灭','miao':'秒','miu':'谬','mian':'面',
    // f
    'fa':'发','fo':'佛','fu':'福',
    'fei':'飞','fou':'否',
    'fan':'饭','fen':'分',
    'fang':'方','feng':'风',
    // d
    'da':'大','de':'的','di':'地','du':'读',
    'dai':'带','dei':'得','dao':'到','dou':'豆',
    'dan':'但','den':'扽','dun':'顿',
    'dang':'当','deng':'等','ding':'定','dong':'东',
    'dia':'嗲','die':'叠','diao':'掉','diu':'丢','dui':'对',
    'duo':'多','dian':'点','duan':'短',
    // t
    'ta':'他','te':'特','ti':'提','tu':'图',
    'tai':'太','tao':'桃','tou':'头',
    'tan':'谈','tun':'吞',
    'tang':'汤','teng':'疼','ting':'听','tong':'同',
    'tie':'铁','tiao':'跳','tui':'腿','tuo':'拖','tian':'天','tuan':'团',
    // n
    'na':'那','ne':'呢','ni':'你','nu':'怒','nü':'女',
    'nai':'奶','nei':'内','nao':'脑','nou':'耨',
    'nan':'南','nen':'嫩','nin':'您',
    'nang':'囊','neng':'能','ning':'宁','nong':'农',
    'nie':'捏','niao':'鸟','niu':'牛','nuo':'诺','nüe':'虐',
    'nian':'年','nuan':'暖','niang':'娘',
    // l
    'la':'拉','lo':'咯','le':'了','li':'李','lu':'路','lü':'绿',
    'lai':'来','lei':'累','lao':'老','lou':'楼',
    'lan':'蓝','lin':'林','lun':'论',
    'lang':'狼','leng':'冷','ling':'零','long':'龙',
    'lia':'俩','lie':'列','liao':'聊','liu':'六',
    'luo':'罗','lüe':'略','lian':'连','luan':'乱','liang':'亮',
    // g
    'ga':'嘎','ge':'个','gu':'古',
    'gai':'改','gei':'给','gao':'高','gou':'狗',
    'gan':'干','gen':'根','gun':'滚',
    'gang':'刚','geng':'更','gong':'工',
    'gua':'瓜','guo':'国','guai':'怪','gui':'贵','guan':'关','guang':'光',
    // k
    'ka':'卡','ke':'可','ku':'苦',
    'kai':'开','kei':'剋','kao':'考','kou':'口',
    'kan':'看','ken':'肯','kun':'昆',
    'kang':'抗','keng':'坑','kong':'空',
    'kua':'夸','kuo':'扩','kuai':'快','kui':'亏','kuan':'宽','kuang':'狂',
    // h
    'ha':'哈','he':'和','hu':'虎',
    'hai':'海','hei':'黑','hao':'好','hou':'后',
    'han':'汉','hen':'很','hun':'混',
    'hang':'航','heng':'横','hong':'红',
    'hua':'花','huo':'火','huai':'坏','hui':'回','huan':'换','huang':'黄',
    // j
    'ji':'几','ju':'举',
    'jin':'金','jun':'军','jing':'京','jiong':'窘',
    'jia':'家','jie':'姐','jiao':'叫','jiu':'九',
    'jue':'决','jian':'见','juan':'卷','jiang':'江',
    // q
    'qi':'七','qu':'去',
    'qin':'亲','qun':'群','qing':'青','qiong':'穷',
    'qia':'恰','qie':'切','qiao':'桥','qiu':'秋',
    'que':'确','qian':'千','quan':'全','qiang':'强',
    // x
    'xi':'西','xu':'许',
    'xin':'新','xun':'训','xing':'星','xiong':'熊',
    'xia':'下','xie':'写','xiao':'小','xiu':'修',
    'xue':'学','xian':'先','xuan':'选','xiang':'想',
    // zh
    'zha':'扎','zhe':'这','zhi':'知','zhu':'猪',
    'zhai':'摘','zhei':'这','zhao':'找','zhou':'周',
    'zhan':'站','zhen':'真','zhun':'准',
    'zhang':'张','zheng':'正','zhong':'中',
    'zhua':'抓','zhuo':'桌','zhuai':'拽','zhui':'追','zhuan':'转','zhuang':'装',
    // ch
    'cha':'茶','che':'车','chi':'吃','chu':'出',
    'chai':'拆','chao':'超','chou':'抽',
    'chan':'产','chen':'陈','chun':'春',
    'chang':'长','cheng':'成','chong':'虫',
    'chua':'欻','chuo':'戳','chuai':'揣','chui':'吹','chuan':'穿','chuang':'创',
    // sh
    'sha':'沙','she':'蛇','shi':'是','shu':'书',
    'shai':'晒','shei':'谁','shao':'少','shou':'手',
    'shan':'山','shen':'深','shun':'顺',
    'shang':'上','sheng':'生',
    'shua':'刷','shuo':'说','shuai':'帅','shui':'水','shuan':'栓','shuang':'双',
    // r
    're':'热','ri':'日','ru':'如',
    'rao':'绕','rou':'肉',
    'ran':'然','ren':'人','run':'润',
    'rang':'让','reng':'扔','rong':'容',
    'ruo':'若','rui':'瑞','ruan':'软',
    // z
    'za':'杂','ze':'则','zi':'字','zu':'组',
    'zai':'在','zei':'贼','zao':'早','zou':'走',
    'zan':'赞','zen':'怎','zun':'尊',
    'zang':'脏','zeng':'增','zong':'总',
    'zuo':'做','zui':'最','zuan':'钻',
    // c
    'ca':'擦','ce':'测','ci':'词','cu':'粗',
    'cai':'才','cao':'草','cou':'凑',
    'can':'餐','cen':'岑','cun':'村',
    'cang':'藏','ceng':'层','cong':'从',
    'cuo':'错','cui':'脆','cuan':'窜',
    // s
    'sa':'撒','se':'色','si':'四','su':'素',
    'sai':'赛','sao':'扫','sou':'搜',
    'san':'三','sen':'森','sun':'孙',
    'sang':'桑','seng':'僧','song':'送',
    'suo':'所','sui':'岁','suan':'算',
    // y
    'ya':'牙','yo':'哟','ye':'也','yi':'一','yu':'鱼',
    'yao':'要','you':'有',
    'yan':'眼','yin':'音','yun':'云',
    'yang':'阳','ying':'英','yong':'用',
    'yue':'月','yuan':'远',
    // w
    'wa':'哇','wo':'我','wu':'五',
    'wai':'外','wei':'为',
    'wan':'万','wen':'文',
    'wang':'王','weng':'翁'
  },

  // ---------------------------------------------------------------------------
  // Tone sandhi rules (变调规则)
  // ---------------------------------------------------------------------------
  toneSandhi: [
    {
      rule: 'Dritter Ton + dritter Ton',
      chinese: '三声变调',
      description: 'Folgen zwei dritte Töne aufeinander, wird der erste wie ein zweiter Ton gesprochen. Geschrieben wird weiterhin der dritte Ton: nǐ hǎo.',
      example: '你好',
      pinyin: 'ní hǎo',
      originalPinyin: 'nǐ hǎo',
      meaning: 'Hallo'
    },
    {
      rule: 'Mehrere dritte Töne',
      chinese: '三声连读',
      description: 'Bei drei oder mehr dritten Tönen hängt die Aussprache von der Gliederung und vom Sprechtempo ab: 我也很好 klingt z. B. wó yě hén hǎo (我也 | 很好) oder, zügig gesprochen, wó yé hén hǎo. Die letzte Silbe behält immer den dritten Ton.',
      example: '我也很好',
      pinyin: 'wó yě hén hǎo',
      originalPinyin: 'wǒ yě hěn hǎo',
      meaning: 'Mir geht es auch gut'
    },
    {
      rule: '不 (bù) vor viertem Ton',
      chinese: '不的变调',
      description: 'Vor einem vierten Ton wird 不 (bù) zu bú. Vor dem 1., 2. und 3. Ton bleibt es bù (不好 bù hǎo). Zwischen zwei gleichen Wörtern, etwa in 好不好, wird es meist neutral gesprochen: hǎo bu hǎo.',
      example: '不是',
      pinyin: 'bú shì',
      originalPinyin: 'bù shì',
      meaning: 'nicht sein'
    },
    {
      rule: '一 (yī) vor viertem Ton',
      chinese: '一的变调',
      description: 'Vor einem vierten Ton wird 一 (yī) zu yí. Das gilt auch, wenn ein ursprünglich vierter Ton neutral gesprochen wird: 一个 yí ge.',
      example: '一定',
      pinyin: 'yí dìng',
      originalPinyin: 'yī dìng',
      meaning: 'bestimmt, sicher'
    },
    {
      rule: '一 (yī) vor 1., 2. und 3. Ton',
      chinese: '一的变调',
      description: 'Vor dem 1., 2. und 3. Ton wird 一 (yī) zu yì: 一天 yì tiān, 一年 yì nián, 一起 yìqǐ.',
      example: '一天',
      pinyin: 'yì tiān',
      originalPinyin: 'yī tiān',
      meaning: 'ein Tag'
    },
    {
      rule: '一 (yī) ohne Tonänderung',
      chinese: '一的本调',
      description: 'Allein, am Wortende, in Ordnungszahlen, in Monatsnamen und beim Aufzählen von Ziffern (Jahreszahlen, Telefonnummern) bleibt 一 im ersten Ton: 第一 dì-yī, 十一 shíyī, 一月 yīyuè, 一九九八 yī jiǔ jiǔ bā.',
      example: '第一',
      pinyin: 'dì-yī',
      originalPinyin: 'dì-yī',
      meaning: 'Erster, erstens'
    }
  ],

  // ---------------------------------------------------------------------------
  // Special syllables reference (整体认读音节)
  // ---------------------------------------------------------------------------
  specialSyllables: {
    label: '整体认读音节',
    labelPinyin: 'zhěngtǐ rèndú yīnjié',
    labelDE: 'Ganzheitlich gelesene Silben',
    syllables: [
      { pinyin: 'zhi', meaning: 'zh + i (Retroflex-i)' },
      { pinyin: 'chi', meaning: 'ch + i (Retroflex-i)' },
      { pinyin: 'shi', meaning: 'sh + i (Retroflex-i)' },
      { pinyin: 'ri', meaning: 'r + i (Retroflex-i)' },
      { pinyin: 'zi', meaning: 'z + i (Dental-i)' },
      { pinyin: 'ci', meaning: 'c + i (Dental-i)' },
      { pinyin: 'si', meaning: 's + i (Dental-i)' },
      { pinyin: 'yi', meaning: 'y + i' },
      { pinyin: 'wu', meaning: 'w + u' },
      { pinyin: 'yu', meaning: 'y + ü' },
      { pinyin: 'ye', meaning: 'y + e' },
      { pinyin: 'yue', meaning: 'y + üe' },
      { pinyin: 'yin', meaning: 'y + in' },
      { pinyin: 'yun', meaning: 'y + ün' },
      { pinyin: 'yuan', meaning: 'y + üan' },
      { pinyin: 'ying', meaning: 'y + ing' }
    ]
  },

  // ---------------------------------------------------------------------------
  // Spelling rules (拼写规则)
  // ---------------------------------------------------------------------------
  spellingRules: [
    {
      rule: 'ü-Regel bei j, q, x',
      description: 'Nach j, q und x wird ü als u geschrieben (die Punkte entfallen), weil dort kein u stehen kann.',
      examples: ['ju (= jü)', 'qu (= qü)', 'xu (= xü)', 'xue (= xüe)']
    },
    {
      rule: 'ü-Regel bei n, l',
      description: 'Nach n und l bleiben die Punkte stehen, um ü von u zu unterscheiden.',
      examples: ['nü ≠ nu', 'lü ≠ lu', 'lüe']
    },
    {
      rule: 'i → y am Silbenanfang',
      description: 'Ohne Anlaut wird i zu y; ist i der einzige Vokal der Silbe, wird y vorangestellt.',
      examples: ['i → yi', 'in → yin', 'ing → ying', 'ia → ya', 'iou → you']
    },
    {
      rule: 'u → w am Silbenanfang',
      description: 'Ohne Anlaut wird u zu w; steht u allein, wird w vorangestellt.',
      examples: ['u → wu', 'uo → wo', 'uei → wei', 'uen → wen']
    },
    {
      rule: 'ü → yu am Silbenanfang',
      description: 'Ohne Anlaut wird y vorangestellt, und die Punkte entfallen.',
      examples: ['ü → yu', 'üe → yue', 'üan → yuan', 'ün → yun']
    },
    {
      rule: 'iou → iu',
      description: 'Nach einem Anlaut wird iou zu iu verkürzt.',
      examples: ['l + iou → liu', 'n + iou → niu']
    },
    {
      rule: 'uei → ui',
      description: 'Nach einem Anlaut wird uei zu ui verkürzt.',
      examples: ['d + uei → dui', 'g + uei → gui']
    },
    {
      rule: 'uen → un',
      description: 'Nach einem Anlaut wird uen zu un verkürzt.',
      examples: ['l + uen → lun', 'ch + uen → chun']
    },
    {
      rule: 'Tonzeichen',
      description: 'Das Tonzeichen steht auf a oder e, wenn vorhanden; in ou auf dem o. Sonst steht es auf dem letzten Vokal, in iu und ui also auf dem zweiten. Beim ü steht es über den Punkten. Der neutrale Ton bekommt kein Zeichen.',
      examples: ['hǎo', 'xiè', 'gǒu', 'duō', 'liù', 'guì', 'lǜ']
    },
    {
      rule: 'Apostroph',
      description: 'Beginnt eine Silbe im Wortinneren mit a, o oder e, steht davor ein Apostroph, damit die Silbengrenze eindeutig ist.',
      examples: ["Xī'ān (≠ xiān)", "píng'ān", "nǚ'ér"]
    }
  ]
};
