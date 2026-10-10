// Zhongwen Explorer grammar, HSK1: points of the HSK 2025 grammar syllabus (语法大纲, scripts/hsk2025/grammar.json).
// Built by scripts/grammar/build-grammar.cjs; content by the enrichment campaign.
window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat([
  {
    "id": "g:小—",
    "pattern": "小—",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortbildung",
    "syllabus": {
      "no": 1,
      "category": "语素",
      "categoryName": "前缀",
      "item": "",
      "content": "小—、第—"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:第—",
    "pattern": "第—",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortbildung",
    "syllabus": {
      "no": 1,
      "category": "语素",
      "categoryName": "前缀",
      "item": "",
      "content": "小—、第—"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:—们",
    "pattern": "—们",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortbildung",
    "syllabus": {
      "no": 2,
      "category": "语素",
      "categoryName": "后缀",
      "item": "",
      "content": "—们、—边"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:—边",
    "pattern": "—边",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortbildung",
    "syllabus": {
      "no": 2,
      "category": "语素",
      "categoryName": "后缀",
      "item": "",
      "content": "—们、—边"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:方位名词@HSK1",
    "pattern": "方位名词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 3,
      "category": "词类",
      "categoryName": "名词",
      "item": "方位名词",
      "content": "上、下、里、外、前、后"
    },
    "meaningStatus": "draft",
    "words": [
      "上",
      "下",
      "里",
      "外",
      "前",
      "后"
    ]
  },
  {
    "id": "g:会",
    "pattern": "会",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 4,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "会、能"
    },
    "meaning": "können (erlernte Fähigkeit) / werden (Zukunft)",
    "formation": "Subjekt + 会 + Verb",
    "explanation": "会 zeigt eine erlernte Fähigkeit oder eine Vorhersage an.",
    "notes": "会 = erlernte Fähigkeit; 能 = physische Fähigkeit / Erlaubnis.",
    "examples": [
      {
        "chinese": "我会说中文。",
        "pinyin": "Wǒ huì shuō Zhōngwén.",
        "german": "Ich kann Chinesisch sprechen."
      },
      {
        "chinese": "明天会冷。",
        "pinyin": "Míngtiān huì lěng.",
        "german": "Morgen wird es kalt."
      }
    ],
    "legacyIds": [
      "g:会 + Verb",
      "会 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:能",
    "pattern": "能",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 4,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "会、能"
    },
    "meaning": "können (Fähigkeit / Erlaubnis)",
    "formation": "Subjekt + 能 + Verb",
    "explanation": "能 drückt physische Fähigkeit, Erlaubnis oder Möglichkeit aus.",
    "notes": "能 betont eher die Möglichkeit oder Umstände.",
    "examples": [
      {
        "chinese": "你能帮我吗？",
        "pinyin": "Nǐ néng bāng wǒ ma?",
        "german": "Kannst du mir helfen?"
      },
      {
        "chinese": "这里不能抽烟。",
        "pinyin": "Zhèlǐ bù néng chōuyān.",
        "german": "Hier darf man nicht rauchen."
      }
    ],
    "legacyIds": [
      "g:能 + Verb",
      "能 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:想",
    "pattern": "想",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 5,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "想、要"
    },
    "meaning": "möchten / wollen (Wunsch)",
    "formation": "Subjekt + 想 + Verb (+ Objekt)",
    "explanation": "想 drückt einen Wunsch oder eine Absicht aus.",
    "notes": "想 ist höflicher/sanfter als 要.",
    "examples": [
      {
        "chinese": "我想吃中国菜。",
        "pinyin": "Wǒ xiǎng chī Zhōngguó cài.",
        "german": "Ich möchte chinesisches Essen essen."
      },
      {
        "chinese": "你想喝什么？",
        "pinyin": "Nǐ xiǎng hē shénme?",
        "german": "Was möchtest du trinken?"
      }
    ],
    "legacyIds": [
      "g:想 + Verb",
      "想 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:要",
    "pattern": "要",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 5,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "想、要"
    },
    "meaning": "wollen / müssen / werden",
    "formation": "Subjekt + 要 + Verb (+ Objekt)",
    "explanation": "要 drückt Absicht, Notwendigkeit oder Zukunft aus. Stärker als 想.",
    "notes": "不要 = ‹soll nicht / tu das nicht› (Verbot oder Aufforderung).",
    "examples": [
      {
        "chinese": "我要去北京。",
        "pinyin": "Wǒ yào qù Běijīng.",
        "german": "Ich will/werde nach Peking gehen."
      },
      {
        "chinese": "明天要下雨。",
        "pinyin": "Míngtiān yào xià yǔ.",
        "german": "Morgen wird es regnen."
      }
    ],
    "legacyIds": [
      "g:要 + Verb",
      "要 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:可以",
    "pattern": "可以",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 6,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "可以"
    },
    "meaning": "dürfen / können (Erlaubnis)",
    "formation": "Subjekt + 可以 + Verb",
    "explanation": "可以 drückt Erlaubnis oder Möglichkeit aus.",
    "notes": "Verneinung: 不可以 (darf nicht) vs. 不能 (kann nicht).",
    "examples": [
      {
        "chinese": "我可以进来吗？",
        "pinyin": "Wǒ kěyǐ jìnlái ma?",
        "german": "Darf ich hereinkommen?"
      },
      {
        "chinese": "这里可以停车。",
        "pinyin": "Zhèlǐ kěyǐ tíngchē.",
        "german": "Hier kann man parken."
      }
    ],
    "legacyIds": [
      "g:可以 + Verb",
      "可以 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:离合词@HSK1",
    "pattern": "离合词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 7,
      "category": "词类",
      "categoryName": "动词",
      "item": "离合词",
      "content": "看病、睡觉、说话、上课、下课、上班、下班、生病"
    },
    "meaningStatus": "draft",
    "words": [
      "看病",
      "睡觉",
      "说话",
      "上课",
      "下课",
      "上班",
      "下班",
      "生病"
    ]
  },
  {
    "id": "g:疑问代词@HSK1",
    "pattern": "疑问代词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaningStatus": "draft",
    "words": [
      "多",
      "多少",
      "几",
      "哪",
      "哪儿",
      "哪里",
      "哪些",
      "什么",
      "谁",
      "怎么",
      "怎么样"
    ]
  },
  {
    "id": "g:什么",
    "pattern": "什么",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaning": "was",
    "formation": "Subjekt + Verb + 什么？",
    "explanation": "什么 steht an der Stelle im Satz, an der die Antwort stehen würde.",
    "notes": "Kein 吗 am Satzende, wenn ein Fragewort im Satz steht.",
    "examples": [
      {
        "chinese": "你吃什么？",
        "pinyin": "Nǐ chī shénme?",
        "german": "Was isst du?"
      },
      {
        "chinese": "这是什么？",
        "pinyin": "Zhè shì shénme?",
        "german": "Was ist das?"
      },
      {
        "chinese": "你什么时候来？",
        "pinyin": "Nǐ shénme shíhou lái?",
        "german": "Wann kommst du?"
      },
      {
        "chinese": "考试什么时候开始？",
        "pinyin": "Kǎoshì shénme shíhou kāishǐ?",
        "german": "Wann fängt die Prüfung an?"
      }
    ],
    "legacyIds": [
      "什么",
      "g:什么时候",
      "什么时候"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:谁"
    ]
  },
  {
    "id": "g:几",
    "pattern": "几",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaning": "wie viele (< 10) / wie viele (beliebig)",
    "formation": "几 + Zählwort + Nomen / 多少 + (Zählwort) + Nomen",
    "explanation": "几 erwartet eine kleine Zahl (< 10) und braucht ein Zählwort. 多少 fragt nach beliebigen Mengen.",
    "notes": "多少 kann ohne Zählwort stehen, 几 nicht.",
    "examples": [
      {
        "chinese": "你有几个孩子？",
        "pinyin": "Nǐ yǒu jǐ gè háizi?",
        "german": "Wie viele Kinder hast du?"
      },
      {
        "chinese": "这个多少钱？",
        "pinyin": "Zhège duōshao qián?",
        "german": "Wie viel kostet das?"
      }
    ],
    "legacyIds": [
      "g:几/多少",
      "几/多少"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:什么",
      "g:其他结构类型：数量短语"
    ]
  },
  {
    "id": "g:谁",
    "pattern": "谁",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaning": "wer",
    "formation": "谁 + Verb / Verb + 谁",
    "explanation": "谁 fragt nach Personen und steht an der Position der Antwort.",
    "notes": "谁 wird auch shéi oder shuí ausgesprochen.",
    "examples": [
      {
        "chinese": "谁是你的老师？",
        "pinyin": "Shéi shì nǐ de lǎoshī?",
        "german": "Wer ist dein Lehrer?"
      },
      {
        "chinese": "你找谁？",
        "pinyin": "Nǐ zhǎo shéi?",
        "german": "Wen suchst du?"
      }
    ],
    "legacyIds": [
      "谁"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:什么"
    ]
  },
  {
    "id": "g:哪儿",
    "pattern": "哪儿",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaning": "welcher / wo",
    "formation": "哪 + Zählwort + Nomen / 在 + 哪儿",
    "explanation": "哪 fragt nach einer Auswahl (welcher), 哪儿 nach einem Ort (wo).",
    "notes": "哪里 ist die höflichere Form von 哪儿.",
    "examples": [
      {
        "chinese": "你在哪儿？",
        "pinyin": "Nǐ zài nǎr?",
        "german": "Wo bist du?"
      },
      {
        "chinese": "你是哪国人？",
        "pinyin": "Nǐ shì nǎ guó rén?",
        "german": "Aus welchem Land kommst du?"
      }
    ],
    "legacyIds": [
      "g:哪 / 哪儿",
      "哪 / 哪儿"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:谁",
      "g:什么"
    ]
  },
  {
    "id": "g:怎么",
    "pattern": "怎么",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaning": "wie / wieso",
    "formation": "怎么 + Verb",
    "explanation": "怎么 fragt nach der Art und Weise (wie) oder dem Grund (wieso).",
    "notes": "怎么样 fragt nach einer Bewertung: ‹Wie ist/war es?›",
    "examples": [
      {
        "chinese": "这个字怎么写？",
        "pinyin": "Zhège zì zěnme xiě?",
        "german": "Wie schreibt man dieses Zeichen?"
      },
      {
        "chinese": "你怎么不吃？",
        "pinyin": "Nǐ zěnme bù chī?",
        "german": "Wieso isst du nicht?"
      }
    ],
    "legacyIds": [
      "怎么"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:怎么样",
      "g:为什么"
    ]
  },
  {
    "id": "g:多",
    "pattern": "多",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaning": "wie + Adjektiv (Frage nach Ausmaß)",
    "pinyin": "duō + Adjektiv",
    "examples": [
      {
        "chinese": "你家离这儿多远？",
        "pinyin": "Nǐ jiā lí zhèr duō yuǎn?",
        "german": "Wie weit ist dein Zuhause von hier?"
      },
      {
        "chinese": "这条河多长？",
        "pinyin": "Zhè tiáo hé duō cháng?",
        "german": "Wie lang ist dieser Fluss?"
      }
    ],
    "legacyIds": [
      "g:多 + Adjektiv",
      "多 + Adjektiv"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:怎么样",
    "pattern": "怎么样",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 8,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样"
    },
    "meaning": "wie ist es? / wie wäre es? (Bewertungsfrage)",
    "pinyin": "zěnmeyàng",
    "examples": [
      {
        "chinese": "这个菜怎么样？",
        "pinyin": "Zhège cài zěnmeyàng?",
        "german": "Wie ist dieses Gericht?"
      },
      {
        "chinese": "我们去看电影，怎么样？",
        "pinyin": "Wǒmen qù kàn diànyǐng, zěnmeyàng?",
        "german": "Wollen wir ins Kino gehen, wie wäre das?"
      }
    ],
    "legacyIds": [
      "怎么样"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:人称代词@HSK1",
    "pattern": "人称代词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 9,
      "category": "词类",
      "categoryName": "代词",
      "item": "人称代词",
      "content": "我、你、您、他、她、我们、你们、他们、她们、它、它们、大家"
    },
    "meaningStatus": "draft",
    "words": [
      "我",
      "你",
      "您",
      "他",
      "她",
      "我们",
      "你们",
      "他们",
      "她们",
      "它",
      "它们",
      "大家"
    ]
  },
  {
    "id": "g:指示代词@HSK1",
    "pattern": "指示代词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 10,
      "category": "词类",
      "categoryName": "代词",
      "item": "指示代词",
      "content": "这、那、这儿、那儿、这里、那里、这些、那些、有的、这个、那个、有些"
    },
    "meaningStatus": "draft",
    "words": [
      "这",
      "那",
      "这儿",
      "那儿",
      "这里",
      "那里",
      "这些",
      "那些",
      "有的",
      "这个",
      "那个",
      "有些"
    ]
  },
  {
    "id": "g:这",
    "pattern": "这",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 10,
      "category": "词类",
      "categoryName": "代词",
      "item": "指示代词",
      "content": "这、那、这儿、那儿、这里、那里、这些、那些、有的、这个、那个、有些"
    },
    "meaning": "dies/jenes + Zählwort + Nomen (Demonstrativpronomen)",
    "pinyin": "zhè/nà + Zählwort + Nomen",
    "examples": [
      {
        "chinese": "这个人是我的老师。",
        "pinyin": "Zhège rén shì wǒ de lǎoshī.",
        "german": "Diese Person ist mein Lehrer."
      },
      {
        "chinese": "那本书很好看。",
        "pinyin": "Nà běn shū hěn hǎokàn.",
        "german": "Jenes Buch ist sehr schön."
      }
    ],
    "legacyIds": [
      "g:这/那 + Zählwort + Nomen",
      "这/那 + Zählwort + Nomen"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:数词@HSK1",
    "pattern": "数词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 11,
      "category": "词类",
      "categoryName": "数词",
      "item": "",
      "content": "一、二/两、三、四、五、六、七、八、九、零、十、百、半、千"
    },
    "meaningStatus": "draft",
    "words": [
      "一",
      "二/两",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九",
      "零",
      "十",
      "百",
      "半",
      "千"
    ]
  },
  {
    "id": "g:名量词@HSK1",
    "pattern": "名量词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 12,
      "category": "词类",
      "categoryName": "量词",
      "item": "名量词",
      "content": "（1）专用名量词：本、个、家、口、块、件、只、元"
    },
    "meaningStatus": "draft",
    "words": [
      "本",
      "个",
      "家",
      "口",
      "块",
      "件",
      "只",
      "元"
    ]
  },
  {
    "id": "g:杯",
    "pattern": "杯",
    "level": "HSK1",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 13,
      "category": "词类",
      "categoryName": "量词",
      "item": "名量词",
      "content": "（2）借用名量词：杯"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:时量词@HSK1",
    "pattern": "时量词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 14,
      "category": "词类",
      "categoryName": "量词",
      "item": "时量词",
      "content": "日、号、岁、点、分、年、天"
    },
    "meaningStatus": "draft",
    "words": [
      "日",
      "号",
      "岁",
      "点",
      "分",
      "年",
      "天"
    ]
  },
  {
    "id": "g:程度副词@HSK1",
    "pattern": "程度副词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 15,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "非常、很、太、真、有（一）点儿"
    },
    "meaningStatus": "draft",
    "words": [
      "非常",
      "很",
      "太",
      "真",
      "有（一）点儿"
    ]
  },
  {
    "id": "g:很",
    "pattern": "很",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 15,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "非常、很、太、真、有（一）点儿"
    },
    "meaning": "sehr + Adjektiv (prädikativ)",
    "formation": "Subjekt + 很 + Adjektiv",
    "explanation": "Im Chinesischen brauchen prädikative Adjektive ein Adverb wie 很. Ohne 很 entsteht ein Vergleich.",
    "notes": "很 ist oft bedeutungsschwach und dient nur als grammatischer Marker.",
    "examples": [
      {
        "chinese": "她很漂亮。",
        "pinyin": "Tā hěn piàoliang.",
        "german": "Sie ist (sehr) hübsch."
      },
      {
        "chinese": "今天很冷。",
        "pinyin": "Jīntiān hěn lěng.",
        "german": "Heute ist es (sehr) kalt."
      }
    ],
    "legacyIds": [
      "g:很 + Adjektiv",
      "很 + Adjektiv"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:太"
    ]
  },
  {
    "id": "g:太",
    "pattern": "太",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 15,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "非常、很、太、真、有（一）点儿"
    },
    "meaning": "zu ... / wirklich sehr ...",
    "formation": "太 + Adjektiv + 了",
    "explanation": "太...了 drückt ein Übermaß oder starke Empfindung aus.",
    "notes": "了 gehört zum Muster und darf nicht weggelassen werden.",
    "examples": [
      {
        "chinese": "太好了！",
        "pinyin": "Tài hǎo le!",
        "german": "Super! / Zu gut!"
      },
      {
        "chinese": "这个太贵了。",
        "pinyin": "Zhège tài guì le.",
        "german": "Das ist zu teuer."
      }
    ],
    "legacyIds": [
      "g:太...了",
      "太...了"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:真",
    "pattern": "真",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 15,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "非常、很、太、真、有（一）点儿"
    },
    "meaning": "wirklich / echt",
    "formation": "真 + Adjektiv",
    "explanation": "真 verstärkt ein Adjektiv und drückt echte Überraschung oder Bewunderung aus.",
    "notes": "真 drückt echtes Erstaunen oder Empfindung aus.",
    "examples": [
      {
        "chinese": "你真聪明！",
        "pinyin": "Nǐ zhēn cōngming!",
        "german": "Du bist wirklich klug!"
      },
      {
        "chinese": "今天真热。",
        "pinyin": "Jīntiān zhēn rè.",
        "german": "Heute ist es wirklich heiß."
      }
    ],
    "legacyIds": [
      "g:真 + Adjektiv",
      "真 + Adjektiv"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:太"
    ]
  },
  {
    "id": "g:非常",
    "pattern": "非常",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 15,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "非常、很、太、真、有（一）点儿"
    },
    "meaning": "außerordentlich / sehr (stärker als 很)",
    "pinyin": "fēicháng + Adjektiv",
    "examples": [
      {
        "chinese": "非常感谢！",
        "pinyin": "Fēicháng gǎnxiè!",
        "german": "Vielen herzlichen Dank!"
      },
      {
        "chinese": "这个地方非常漂亮。",
        "pinyin": "Zhège dìfang fēicháng piàoliang.",
        "german": "Dieser Ort ist außerordentlich schön."
      }
    ],
    "legacyIds": [
      "g:非常 + Adjektiv",
      "非常 + Adjektiv"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:有（一）点儿",
    "pattern": "有（一）点儿",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 15,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "非常、很、太、真、有（一）点儿"
    },
    "meaning": "ein bisschen (leicht negativ empfunden)",
    "pinyin": "yǒu yìdiǎnr + Adjektiv",
    "examples": [
      {
        "chinese": "我有点儿累。",
        "pinyin": "Wǒ yǒudiǎnr lèi.",
        "german": "Ich bin ein bisschen müde."
      },
      {
        "chinese": "这个有点儿贵。",
        "pinyin": "Zhège yǒudiǎnr guì.",
        "german": "Das ist ein bisschen teuer."
      }
    ],
    "legacyIds": [
      "g:有一点儿 + Adjektiv",
      "有一点儿 + Adjektiv"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:都¹",
    "pattern": "都¹",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 16,
      "category": "词类",
      "categoryName": "副词",
      "item": "范围副词",
      "content": "都¹"
    },
    "meaning": "alle / beide",
    "formation": "Subjekt (Plural) + 都 + Verb",
    "explanation": "都 fasst mehrere Elemente zusammen (‹alle›) und steht vor dem Verb.",
    "notes": "都 bezieht sich auf das, was davor steht.",
    "examples": [
      {
        "chinese": "我们都是中国人。",
        "pinyin": "Wǒmen dōu shì Zhōngguó rén.",
        "german": "Wir sind alle Chinesen."
      },
      {
        "chinese": "什么都有。",
        "pinyin": "Shénme dōu yǒu.",
        "german": "Es gibt alles."
      },
      {
        "chinese": "我们都不喜欢。",
        "pinyin": "Wǒmen dōu bù xǐhuan.",
        "german": "Wir mögen es alle nicht."
      },
      {
        "chinese": "他们都没来。",
        "pinyin": "Tāmen dōu méi lái.",
        "german": "Keiner von ihnen ist gekommen."
      }
    ],
    "legacyIds": [
      "g:都",
      "都",
      "g:都 + 不/没",
      "都 + 不/没"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:也"
    ]
  },
  {
    "id": "g:在",
    "pattern": "在",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 17,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "在、正在"
    },
    "meaning": "gerade dabei sein (Verlaufsform)",
    "formation": "Subjekt + 在 + Verb (+ 呢)",
    "explanation": "在 vor dem Verb zeigt an, dass eine Handlung gerade stattfindet (Verlaufsform).",
    "notes": "正在 ist noch betontere Verlaufsform. 呢 am Ende ist optional.",
    "examples": [
      {
        "chinese": "他在吃饭。",
        "pinyin": "Tā zài chī fàn.",
        "german": "Er isst gerade."
      },
      {
        "chinese": "你在做什么呢？",
        "pinyin": "Nǐ zài zuò shénme ne?",
        "german": "Was machst du gerade?"
      }
    ],
    "legacyIds": [
      "g:在 + Verb",
      "在 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:正在",
    "pattern": "正在",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 17,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "在、正在"
    },
    "meaning": "gerade (betonte Verlaufsform)",
    "pinyin": "zhèngzài + Verb",
    "examples": [
      {
        "chinese": "我正在吃饭。",
        "pinyin": "Wǒ zhèngzài chīfàn.",
        "german": "Ich bin gerade beim Essen."
      },
      {
        "chinese": "他正在睡觉，别吵他。",
        "pinyin": "Tā zhèngzài shuìjiào, bié chǎo tā.",
        "german": "Er schläft gerade, stör ihn nicht."
      }
    ],
    "legacyIds": [
      "g:正在 + Verb",
      "正在 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:再¹",
    "pattern": "再¹",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 18,
      "category": "词类",
      "categoryName": "副词",
      "item": "频率副词",
      "content": "再¹"
    },
    "meaning": "nochmal / wieder (zukünftig)",
    "pinyin": "zài + Verb",
    "examples": [
      {
        "chinese": "请再说一遍。",
        "pinyin": "Qǐng zài shuō yí biàn.",
        "german": "Bitte sag es nochmal."
      },
      {
        "chinese": "我们明天再见！",
        "pinyin": "Wǒmen míngtiān zài jiàn!",
        "german": "Wir sehen uns morgen wieder!"
      }
    ],
    "legacyIds": [
      "g:再 + Verb",
      "再 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:还¹",
    "pattern": "还¹",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 19,
      "category": "词类",
      "categoryName": "副词",
      "item": "关联副词",
      "content": "还¹、也"
    },
    "meaning": "noch / außerdem / immer noch",
    "formation": "Subjekt + 还 + Verb",
    "explanation": "还 drückt Fortdauer (‹immer noch›) oder Ergänzung (‹außerdem/noch›) aus.",
    "notes": "还是 = ‹oder› (in Fragen) bzw. ‹trotzdem›.",
    "examples": [
      {
        "chinese": "你还要什么？",
        "pinyin": "Nǐ hái yào shénme?",
        "german": "Was möchtest du noch?"
      },
      {
        "chinese": "他还没来。",
        "pinyin": "Tā hái méi lái.",
        "german": "Er ist immer noch nicht gekommen."
      }
    ],
    "legacyIds": [
      "g:还",
      "还"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:也"
    ]
  },
  {
    "id": "g:也",
    "pattern": "也",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 19,
      "category": "词类",
      "categoryName": "副词",
      "item": "关联副词",
      "content": "还¹、也"
    },
    "meaning": "auch",
    "formation": "Subjekt + 也 + Verb",
    "explanation": "也 steht immer vor dem Verb und nach dem Subjekt.",
    "notes": "也 steht vor 都: 我们也都去 (Wir gehen auch alle).",
    "examples": [
      {
        "chinese": "我也是学生。",
        "pinyin": "Wǒ yě shì xuéshēng.",
        "german": "Ich bin auch Student."
      },
      {
        "chinese": "他也喜欢。",
        "pinyin": "Tā yě xǐhuan.",
        "german": "Er mag es auch."
      }
    ],
    "legacyIds": [
      "也"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:都¹"
    ]
  },
  {
    "id": "g:否定副词@HSK1",
    "pattern": "否定副词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 20,
      "category": "词类",
      "categoryName": "副词",
      "item": "否定副词",
      "content": "不、没（有）、不要"
    },
    "meaningStatus": "draft",
    "words": [
      "不",
      "没（有）",
      "不要"
    ]
  },
  {
    "id": "g:不",
    "pattern": "不",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 20,
      "category": "词类",
      "categoryName": "副词",
      "item": "否定副词",
      "content": "不、没（有）、不要"
    },
    "meaning": "Verneinung (Gegenwart/Zukunft/Gewohnheit)",
    "formation": "不 + Verb/Adjektiv",
    "explanation": "不 verneint Verben und Adjektive in Gegenwart, Zukunft und bei Gewohnheiten.",
    "notes": "不 vor 4. Ton wird zu bú gesprochen (Tonsandhi).",
    "examples": [
      {
        "chinese": "我不喝咖啡。",
        "pinyin": "Wǒ bù hē kāfēi.",
        "german": "Ich trinke keinen Kaffee."
      },
      {
        "chinese": "这个不贵。",
        "pinyin": "Zhège bú guì.",
        "german": "Das ist nicht teuer."
      }
    ],
    "legacyIds": [
      "不"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:“是”字句1：表示等同或类属"
    ]
  },
  {
    "id": "g:没（有）",
    "pattern": "没（有）",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 20,
      "category": "词类",
      "categoryName": "副词",
      "item": "否定副词",
      "content": "不、没（有）、不要"
    },
    "meaning": "Verneinung (Vergangenheit / Besitz)",
    "formation": "没(有) + Verb",
    "explanation": "没 verneint abgeschlossene Handlungen und Besitz (有). Bei 有 ist 没 obligatorisch.",
    "notes": "没 + Verb: kein 了 nach dem Verb (没吃 ✓, 没吃了 ✗).",
    "examples": [
      {
        "chinese": "我没有钱。",
        "pinyin": "Wǒ méi yǒu qián.",
        "german": "Ich habe kein Geld."
      },
      {
        "chinese": "他没来。",
        "pinyin": "Tā méi lái.",
        "german": "Er ist nicht gekommen."
      }
    ],
    "legacyIds": [
      "g:没/没有",
      "没/没有"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:不"
    ]
  },
  {
    "id": "g:不要",
    "pattern": "不要",
    "level": "HSK1",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 20,
      "category": "词类",
      "categoryName": "副词",
      "item": "否定副词",
      "content": "不、没（有）、不要"
    },
    "meaning": "soll nicht / bitte nicht (Aufforderung)",
    "pinyin": "búyào + Verb",
    "examples": [
      {
        "chinese": "不要迟到。",
        "pinyin": "Búyào chídào.",
        "german": "Komm nicht zu spät."
      },
      {
        "chinese": "上课的时候不要玩手机。",
        "pinyin": "Shàngkè de shíhou búyào wán shǒujī.",
        "german": "Spiel nicht mit dem Handy im Unterricht."
      }
    ],
    "legacyIds": [
      "g:不要 + Verb",
      "不要 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:在（引出时间、处所）",
    "pattern": "在",
    "level": "HSK1",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 21,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出时间、处所",
      "content": "在"
    },
    "meaning": "an einem Ort eine Handlung ausführen",
    "pinyin": "zài + Ort + Verb",
    "examples": [
      {
        "chinese": "他在家。",
        "pinyin": "Tā zài jiā.",
        "german": "Er ist zu Hause."
      },
      {
        "chinese": "书在桌子上。",
        "pinyin": "Shū zài zhuōzi shàng.",
        "german": "Das Buch ist auf dem Tisch."
      },
      {
        "chinese": "我在家吃饭。",
        "pinyin": "Wǒ zài jiā chīfàn.",
        "german": "Ich esse zu Hause."
      },
      {
        "chinese": "他在学校学习。",
        "pinyin": "Tā zài xuéxiào xuéxí.",
        "german": "Er lernt in der Schule."
      }
    ],
    "legacyIds": [
      "g:在 + Ort",
      "在 + Ort",
      "g:在 + Ort + Verb",
      "在 + Ort + Verb"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:在"
    ]
  },
  {
    "id": "g:和¹",
    "pattern": "和¹",
    "level": "HSK1",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 22,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出对象",
      "content": "和¹、对"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:对",
    "pattern": "对",
    "level": "HSK1",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 22,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出对象",
      "content": "和¹、对"
    },
    "meaning": "sich für etwas interessieren",
    "pinyin": "duì + Nomen + gǎn xìngqù",
    "examples": [
      {
        "chinese": "我对中国历史很感兴趣。",
        "pinyin": "Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.",
        "german": "Ich interessiere mich sehr für chinesische Geschichte."
      },
      {
        "chinese": "你对什么感兴趣？",
        "pinyin": "Nǐ duì shénme gǎn xìngqù?",
        "german": "Wofür interessierst du dich?"
      }
    ],
    "legacyIds": [
      "g:对 + Nomen + 感兴趣",
      "对 + Nomen + 感兴趣"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:和²",
    "pattern": "和²",
    "level": "HSK1",
    "kind": "word",
    "category": "Konjunktionen",
    "syllabus": {
      "no": 23,
      "category": "词类",
      "categoryName": "连词",
      "item": "连接词语或短语",
      "content": "和²"
    },
    "meaning": "und / mit",
    "formation": "A + 和/跟 + B",
    "explanation": "和 und 跟 verbinden Nomen (‹und›) oder zeigen Begleitung (‹mit›). 跟 ist umgangssprachlicher.",
    "notes": "和/跟 verbinden nur Nomen, nicht Sätze. Für Sätze: 而且, 也.",
    "examples": [
      {
        "chinese": "我和你",
        "pinyin": "wǒ hé nǐ",
        "german": "ich und du"
      },
      {
        "chinese": "我跟朋友去。",
        "pinyin": "Wǒ gēn péngyou qù.",
        "german": "Ich gehe mit einem Freund."
      }
    ],
    "legacyIds": [
      "g:和 / 跟",
      "和 / 跟"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:也"
    ]
  },
  {
    "id": "g:的¹",
    "pattern": "的¹",
    "level": "HSK1",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 24,
      "category": "词类",
      "categoryName": "助词",
      "item": "结构助词",
      "content": "的¹"
    },
    "meaning": "Attributpartikel (Besitz, Beschreibung)",
    "formation": "Modifikator + 的 + Nomen",
    "explanation": "的 verbindet einen Modifikator mit einem Nomen. Es zeigt Besitz oder Eigenschaft an.",
    "notes": "Bei engen Beziehungen (Familie, Zugehörigkeit) kann 的 entfallen: 我妈妈.",
    "examples": [
      {
        "chinese": "我的书",
        "pinyin": "wǒ de shū",
        "german": "mein Buch"
      },
      {
        "chinese": "漂亮的花",
        "pinyin": "piàoliang de huā",
        "german": "schöne Blumen"
      }
    ],
    "legacyIds": [
      "g:的 (Attributiv)",
      "的 (Attributiv)"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:“是……的”句1：强调时间、地点、方式、动作者"
    ]
  },
  {
    "id": "g:了¹",
    "pattern": "了¹",
    "level": "HSK1",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 25,
      "category": "词类",
      "categoryName": "助词",
      "item": "动态助词",
      "content": "了¹"
    },
    "meaning": "Abschluss / Zustandsänderung",
    "formation": "Verb + 了 (+ Objekt)",
    "explanation": "了 nach dem Verb signalisiert, dass eine Handlung abgeschlossen ist. Am Satzende zeigt es Zustandsänderung.",
    "notes": "了 ist KEIN Vergangenheitstempus. Es markiert Abschluss oder Veränderung.",
    "examples": [
      {
        "chinese": "我吃了饭。",
        "pinyin": "Wǒ chī le fàn.",
        "german": "Ich habe gegessen."
      },
      {
        "chinese": "下雨了。",
        "pinyin": "Xià yǔ le.",
        "german": "Es hat angefangen zu regnen."
      }
    ],
    "legacyIds": [
      "g:了 (Abschluss)",
      "了 (Abschluss)"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:过"
    ]
  },
  {
    "id": "g:语气助词@HSK1",
    "pattern": "语气助词",
    "level": "HSK1",
    "kind": "overview",
    "category": "Partikeln",
    "syllabus": {
      "no": 26,
      "category": "词类",
      "categoryName": "助词",
      "item": "语气助词",
      "content": "吧¹、了²、吗、呢¹、呢²、呢³"
    },
    "meaningStatus": "draft",
    "words": [
      "吧¹",
      "了²",
      "吗",
      "呢¹",
      "呢²",
      "呢³"
    ]
  },
  {
    "id": "g:吗",
    "pattern": "吗",
    "level": "HSK1",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 26,
      "category": "词类",
      "categoryName": "助词",
      "item": "语气助词",
      "content": "吧¹、了²、吗、呢¹、呢²、呢³"
    },
    "meaning": "Fragepartikel (Ja/Nein-Frage)",
    "formation": "Aussagesatz + 吗？",
    "explanation": "吗 verwandelt eine Aussage in eine Ja/Nein-Frage. Die Wortstellung bleibt gleich.",
    "notes": "Nicht zusammen mit Fragewörtern (什么, 谁 etc.) verwenden.",
    "examples": [
      {
        "chinese": "你好吗？",
        "pinyin": "Nǐ hǎo ma?",
        "german": "Geht es dir gut?"
      },
      {
        "chinese": "你是中国人吗？",
        "pinyin": "Nǐ shì Zhōngguó rén ma?",
        "german": "Bist du Chinese?"
      }
    ],
    "legacyIds": [
      "吗"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:呢²",
      "g:疑问句：正反问句"
    ]
  },
  {
    "id": "g:呢²",
    "pattern": "呢²",
    "level": "HSK1",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 26,
      "category": "词类",
      "categoryName": "助词",
      "item": "语气助词",
      "content": "吧¹、了²、吗、呢¹、呢²、呢³"
    },
    "meaning": "Rückfrage-/Kontextpartikel",
    "formation": "Nomen/Pronomen + 呢？",
    "explanation": "呢 wird für Rückfragen (‹und du?›) oder zur Betonung einer laufenden Handlung verwendet.",
    "notes": "呢 macht Fragen weicher und informeller.",
    "examples": [
      {
        "chinese": "我很好，你呢？",
        "pinyin": "Wǒ hěn hǎo, nǐ ne?",
        "german": "Mir geht's gut, und dir?"
      },
      {
        "chinese": "他在哪儿呢？",
        "pinyin": "Tā zài nǎr ne?",
        "german": "Wo ist er denn?"
      }
    ],
    "legacyIds": [
      "g:呢",
      "呢"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:吗"
    ]
  },
  {
    "id": "g:吧¹",
    "pattern": "吧¹",
    "level": "HSK1",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 26,
      "category": "词类",
      "categoryName": "助词",
      "item": "语气助词",
      "content": "吧¹、了²、吗、呢¹、呢²、呢³"
    },
    "meaning": "Vorschlags-/Vermutungspartikel",
    "formation": "Satz + 吧",
    "explanation": "吧 macht einen Satz zu einem Vorschlag oder drückt Vermutung aus.",
    "notes": "吧 macht Aussagen weicher und weniger direkt.",
    "examples": [
      {
        "chinese": "我们走吧！",
        "pinyin": "Wǒmen zǒu ba!",
        "german": "Lass uns gehen!"
      },
      {
        "chinese": "你是德国人吧？",
        "pinyin": "Nǐ shì Déguó rén ba?",
        "german": "Du bist Deutscher, oder?"
      }
    ],
    "legacyIds": [
      "g:吧",
      "吧"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:吗"
    ]
  },
  {
    "id": "g:了²",
    "pattern": "了²",
    "level": "HSK1",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 26,
      "category": "词类",
      "categoryName": "助词",
      "item": "语气助词",
      "content": "吧¹、了²、吗、呢¹、呢²、呢³"
    },
    "meaning": "Satzfinales 了 zeigt neue Situation oder Veränderung an",
    "pinyin": "le (Zustandsänderung)",
    "examples": [
      {
        "chinese": "天冷了。",
        "pinyin": "Tiān lěng le.",
        "german": "Es ist kalt geworden."
      },
      {
        "chinese": "我饿了。",
        "pinyin": "Wǒ è le.",
        "german": "Ich bin hungrig geworden."
      },
      {
        "chinese": "我吃了饭了。",
        "pinyin": "Wǒ chī le fàn le.",
        "german": "Ich habe (jetzt) gegessen."
      },
      {
        "chinese": "他买了三本书了。",
        "pinyin": "Tā mǎi le sān běn shū le.",
        "german": "Er hat (inzwischen) drei Bücher gekauft."
      }
    ],
    "legacyIds": [
      "g:了 (Zustandsänderung)",
      "了 (Zustandsänderung)",
      "g:…了…了",
      "…了…了"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:喂",
    "pattern": "喂",
    "level": "HSK1",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 27,
      "category": "词类",
      "categoryName": "叹词",
      "item": "",
      "content": "喂"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:基本结构类型：联合短语",
    "pattern": "基本结构类型：联合短语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 28,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "基本结构类型",
      "content": "（1）联合短语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:基本结构类型：偏正短语",
    "pattern": "基本结构类型：偏正短语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 29,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "基本结构类型",
      "content": "（2）偏正短语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:基本结构类型：动宾短语",
    "pattern": "基本结构类型：动宾短语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 30,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "基本结构类型",
      "content": "（3）动宾短语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:基本结构类型：主谓短语",
    "pattern": "基本结构类型：主谓短语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 31,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "基本结构类型",
      "content": "（4）主谓短语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:其他结构类型：数量短语",
    "pattern": "其他结构类型：数量短语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 32,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "（1）数量短语"
    },
    "meaning": "Zahl + Zählwort + Nomen",
    "formation": "Zahl + Zählwort (量词) + Nomen",
    "explanation": "Im Chinesischen muss zwischen Zahl und Nomen ein Zählwort (Maßwort) stehen. Das häufigste ist 个.",
    "notes": "Bei 2 + Zählwort wird 两 statt 二 verwendet.",
    "examples": [
      {
        "chinese": "三个人",
        "pinyin": "sān gè rén",
        "german": "drei Personen"
      },
      {
        "chinese": "两本书",
        "pinyin": "liǎng běn shū",
        "german": "zwei Bücher"
      }
    ],
    "legacyIds": [
      "g:Zählwort + Nomen",
      "Zählwort + Nomen"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:其他结构类型：介宾短语",
    "pattern": "其他结构类型：介宾短语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 33,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "（2）介宾短语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:其他结构类型：方位短语",
    "pattern": "其他结构类型：方位短语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 34,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "（3）方位短语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:主语：名词、代词或名词性短语作主语",
    "pattern": "主语：名词、代词或名词性短语作主语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 35,
      "category": "句子成分",
      "categoryName": "主语",
      "item": "",
      "content": "名词、代词或名词性短语作主语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:谓语：名词、代词、数词或数量短语作谓语",
    "pattern": "谓语：名词、代词、数词或数量短语作谓语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 36,
      "category": "句子成分",
      "categoryName": "谓语",
      "item": "",
      "content": "名词、代词、数词或数量短语作谓语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:谓语：动词或动词性短语、形容词或形容词性短语作谓语",
    "pattern": "谓语：动词或动词性短语、形容词或形容词性短语作谓语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 37,
      "category": "句子成分",
      "categoryName": "谓语",
      "item": "",
      "content": "动词或动词性短语、形容词或形容词性短语作谓语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:宾语：名词、代词或名词性短语作宾语",
    "pattern": "宾语：名词、代词或名词性短语作宾语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 38,
      "category": "句子成分",
      "categoryName": "宾语",
      "item": "",
      "content": "名词、代词或名词性短语作宾语"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:定语：名词性词语、形容词性短语、数量短语作定语",
    "pattern": "定语：名词性词语、形容词性短语、数量短语作定语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 39,
      "category": "句子成分",
      "categoryName": "定语",
      "item": "",
      "content": "名词性词语、形容词性短语、数量短语作定语"
    },
    "meaning": "ein wenig / ein bisschen (vor Nomen)",
    "pinyin": "yìdiǎnr + Nomen",
    "examples": [
      {
        "chinese": "我想喝一点儿水。",
        "pinyin": "Wǒ xiǎng hē yìdiǎnr shuǐ.",
        "german": "Ich möchte ein wenig Wasser trinken."
      },
      {
        "chinese": "你会说一点儿中文吗？",
        "pinyin": "Nǐ huì shuō yìdiǎnr zhōngwén ma?",
        "german": "Kannst du ein bisschen Chinesisch sprechen?"
      }
    ],
    "legacyIds": [
      "g:一点儿 + Nomen",
      "一点儿 + Nomen"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:状语：副词、形容词作状语；表示时间、处所的词语作状语",
    "pattern": "状语：副词、形容词作状语；表示时间、处所的词语作状语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 40,
      "category": "句子成分",
      "categoryName": "状语",
      "item": "",
      "content": "副词、形容词作状语；表示时间、处所的词语作状语"
    },
    "meaning": "Zeitwort vor dem Verb (Zeitangabe-Position)",
    "pinyin": "shíjiān cí + Verb",
    "examples": [
      {
        "chinese": "我明天去北京。",
        "pinyin": "Wǒ míngtiān qù Běijīng.",
        "german": "Ich fahre morgen nach Peking."
      },
      {
        "chinese": "他昨天没来。",
        "pinyin": "Tā zuótiān méi lái.",
        "german": "Er ist gestern nicht gekommen."
      }
    ],
    "legacyIds": [
      "g:时间词 + Verb",
      "时间词 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:动词+动量补语",
    "pattern": "动词+动量补语",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 41,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "数量补语1",
      "content": "动词+动量补语"
    },
    "meaning": "kurz mal / ein bisschen (Abschwächung)",
    "pinyin": "yíxià",
    "examples": [
      {
        "chinese": "请等一下。",
        "pinyin": "Qǐng děng yíxià.",
        "german": "Bitte warten Sie einen Moment."
      },
      {
        "chinese": "我想试一下。",
        "pinyin": "Wǒ xiǎng shì yíxià.",
        "german": "Ich möchte es mal versuchen."
      }
    ],
    "legacyIds": [
      "g:一下",
      "一下"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:主谓句1：动词谓语句",
    "pattern": "主谓句1：动词谓语句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 42,
      "category": "句子的类型",
      "categoryName": "句型",
      "item": "单句",
      "content": "主谓句1：动词谓语句"
    },
    "meaning": "Grundwortstellung: Subjekt – Verb – Objekt",
    "formation": "Subjekt + Verb + Objekt",
    "explanation": "Mandarin folgt grundsätzlich der S-V-O-Wortstellung, ähnlich wie Deutsch in Hauptsätzen.",
    "notes": "Zeit- und Ortsangaben stehen meist vor dem Verb.",
    "examples": [
      {
        "chinese": "我吃饭。",
        "pinyin": "Wǒ chī fàn.",
        "german": "Ich esse."
      },
      {
        "chinese": "他喝茶。",
        "pinyin": "Tā hē chá.",
        "german": "Er trinkt Tee."
      }
    ],
    "legacyIds": [
      "g:S-V-O Wortstellung",
      "S-V-O Wortstellung"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:把"
    ]
  },
  {
    "id": "g:主谓句2：形容词谓语句",
    "pattern": "主谓句2：形容词谓语句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 43,
      "category": "句子的类型",
      "categoryName": "句型",
      "item": "单句",
      "content": "主谓句2：形容词谓语句"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:主谓句3：名词谓语句",
    "pattern": "主谓句3：名词谓语句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 44,
      "category": "句子的类型",
      "categoryName": "句型",
      "item": "单句",
      "content": "主谓句3：名词谓语句"
    },
    "meaning": "Jahre alt (Altersangabe)",
    "pinyin": "suì",
    "examples": [
      {
        "chinese": "我二十五岁。",
        "pinyin": "Wǒ èrshíwǔ suì.",
        "german": "Ich bin 25 Jahre alt."
      },
      {
        "chinese": "她的女儿三岁了。",
        "pinyin": "Tā de nǚ'ér sān suì le.",
        "german": "Ihre Tochter ist drei Jahre alt geworden."
      }
    ],
    "legacyIds": [
      "g:岁",
      "岁"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:单句：非主谓句",
    "pattern": "单句：非主谓句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 45,
      "category": "句子的类型",
      "categoryName": "句型",
      "item": "单句",
      "content": "非主谓句"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:陈述句",
    "pattern": "陈述句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 46,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "陈述句",
      "content": ""
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:疑问句：是非问句",
    "pattern": "疑问句：是非问句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 47,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "疑问句",
      "content": "（1）是非问句"
    },
    "meaning": "In Ordnung? / Ist das okay? (Bestätigungsfrage)",
    "pinyin": "hǎo ma",
    "examples": [
      {
        "chinese": "我们去吃饭，好吗？",
        "pinyin": "Wǒmen qù chīfàn, hǎo ma?",
        "german": "Lass uns essen gehen, okay?"
      },
      {
        "chinese": "明天见，好吗？",
        "pinyin": "Míngtiān jiàn, hǎo ma?",
        "german": "Bis morgen, in Ordnung?"
      }
    ],
    "legacyIds": [
      "g:好吗",
      "好吗"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:疑问句：特指问句",
    "pattern": "疑问句：特指问句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 48,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "疑问句",
      "content": "（2）特指问句"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:疑问句：正反问句",
    "pattern": "疑问句：正反问句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 49,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "疑问句",
      "content": "（3）正反问句"
    },
    "meaning": "Ja/Nein-Frage (Alternative)",
    "formation": "Verb + 不 + Verb？",
    "explanation": "Eine andere Art, Ja/Nein-Fragen zu stellen, ohne 吗.",
    "notes": "Bei 有: 有没有 (nicht 有不有).",
    "examples": [
      {
        "chinese": "你去不去？",
        "pinyin": "Nǐ qù bú qù?",
        "german": "Gehst du oder nicht?"
      },
      {
        "chinese": "好不好？",
        "pinyin": "Hǎo bù hǎo?",
        "german": "Ist das ok?"
      },
      {
        "chinese": "你有没有时间？",
        "pinyin": "Nǐ yǒu méi yǒu shíjiān?",
        "german": "Hast du Zeit?"
      },
      {
        "chinese": "这里有没有厕所？",
        "pinyin": "Zhèlǐ yǒu méi yǒu cèsuǒ?",
        "german": "Gibt es hier eine Toilette?"
      },
      {
        "chinese": "你是不是中国人？",
        "pinyin": "Nǐ shì bu shì Zhōngguó rén?",
        "german": "Bist du Chinese?"
      },
      {
        "chinese": "这是不是你的？",
        "pinyin": "Zhè shì bu shì nǐ de?",
        "german": "Ist das deins?"
      }
    ],
    "legacyIds": [
      "g:Verb-不-Verb",
      "Verb-不-Verb",
      "g:有没有",
      "有没有",
      "g:是不是",
      "是不是"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:吗"
    ]
  },
  {
    "id": "g:祈使句",
    "pattern": "祈使句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 50,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "祈使句",
      "content": ""
    },
    "meaning": "bitte (höfliche Aufforderung)",
    "pinyin": "qǐng + Verb",
    "examples": [
      {
        "chinese": "请坐。",
        "pinyin": "Qǐng zuò.",
        "german": "Bitte setzen Sie sich."
      },
      {
        "chinese": "请你再说一遍。",
        "pinyin": "Qǐng nǐ zài shuō yí biàn.",
        "german": "Bitte sag es noch einmal."
      }
    ],
    "legacyIds": [
      "g:请 + Verb",
      "请 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:感叹句",
    "pattern": "感叹句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 51,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "感叹句",
      "content": ""
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:“是”字句1：表示等同或类属",
    "pattern": "“是”字句1：表示等同或类属",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 52,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "“是”字句1",
      "content": "表示等同或类属"
    },
    "meaning": "sein (Kopula)",
    "formation": "Subjekt + 是 + Nomen/Pronomen",
    "explanation": "是 verbindet Subjekt und Prädikatsnomen. Es wird nicht mit Adjektiven verwendet (anders als dt. ‹sein›).",
    "notes": "Nicht verwenden mit Adjektiven: ‹我很好› statt ‹我是好›.",
    "examples": [
      {
        "chinese": "我是学生。",
        "pinyin": "Wǒ shì xuéshēng.",
        "german": "Ich bin Student."
      },
      {
        "chinese": "她是老师。",
        "pinyin": "Tā shì lǎoshī.",
        "german": "Sie ist Lehrerin."
      },
      {
        "chinese": "我不是老师。",
        "pinyin": "Wǒ bú shì lǎoshī.",
        "german": "Ich bin kein Lehrer."
      },
      {
        "chinese": "这不是我的书。",
        "pinyin": "Zhè bú shì wǒ de shū.",
        "german": "Das ist nicht mein Buch."
      }
    ],
    "legacyIds": [
      "g:是",
      "是",
      "g:不是",
      "不是"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:“是……的”句1：强调时间、地点、方式、动作者"
    ]
  },
  {
    "id": "g:“有”字句1：表示领有",
    "pattern": "“有”字句1：表示领有",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 53,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "“有”字句1",
      "content": "表示领有"
    },
    "meaning": "haben / es gibt",
    "formation": "Subjekt + 有 + Objekt",
    "explanation": "有 drückt Besitz aus oder zeigt an, dass etwas existiert.",
    "notes": "Verneinung immer mit 没有, nie mit 不有.",
    "examples": [
      {
        "chinese": "我有一本书。",
        "pinyin": "Wǒ yǒu yì běn shū.",
        "german": "Ich habe ein Buch."
      },
      {
        "chinese": "这里有很多人。",
        "pinyin": "Zhèlǐ yǒu hěn duō rén.",
        "german": "Hier gibt es viele Leute."
      }
    ],
    "legacyIds": [
      "g:有",
      "有"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:疑问句：正反问句"
    ]
  },
  {
    "id": "g:所处+是+名词",
    "pattern": "所处+是+名词",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 54,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "存现句1",
      "content": "（1）所处+是+名词"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:处所+有+数量短语+名词",
    "pattern": "处所+有+数量短语+名词",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 55,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "存现句1",
      "content": "（2）处所+有+数量短语+名词"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:连动句1：前后动作先后发生，后一动作是前一动作的目的",
    "pattern": "连动句1：前后动作先后发生，后一动作是前一动作的目的",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 56,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "连动句1",
      "content": "（1）前后动作先后发生，后一动作是前一动作的目的"
    },
    "meaning": "gehen/kommen um zu ...",
    "formation": "Subjekt + 去/来 + Verb",
    "explanation": "去 oder 来 vor einem Verb drückt den Zweck des Gehens/Kommens aus.",
    "notes": "去 = weg vom Sprecher, 来 = hin zum Sprecher.",
    "examples": [
      {
        "chinese": "我去买东西。",
        "pinyin": "Wǒ qù mǎi dōngxi.",
        "german": "Ich gehe einkaufen."
      },
      {
        "chinese": "你来吃饭吧。",
        "pinyin": "Nǐ lái chī fàn ba.",
        "german": "Komm essen!"
      }
    ],
    "legacyIds": [
      "g:去/来 + Verb",
      "去/来 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:连动句1：前一动作是后一动作的方式",
    "pattern": "连动句1：前一动作是后一动作的方式",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 57,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "连动句1",
      "content": "（2）前一动作是后一动作的方式"
    },
    "meaning": "mit etwas etwas tun (Instrument)",
    "pinyin": "yòng + Nomen + Verb",
    "examples": [
      {
        "chinese": "我用筷子吃饭。",
        "pinyin": "Wǒ yòng kuàizi chīfàn.",
        "german": "Ich esse mit Stäbchen."
      },
      {
        "chinese": "她用中文写信。",
        "pinyin": "Tā yòng zhōngwén xiě xìn.",
        "german": "Sie schreibt den Brief auf Chinesisch."
      }
    ],
    "legacyIds": [
      "g:用 + Nomen + Verb",
      "用 + Nomen + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:主语+动词+宾语1+宾语2",
    "pattern": "主语+动词+宾语1+宾语2",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 58,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "双宾语句1",
      "content": "主语+动词+宾语1+宾语2"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:不用关联词语的复句",
    "pattern": "不用关联词语的复句",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 59,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "不用关联词语的复句",
      "content": ""
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:……，也……",
    "pattern": "……，也……",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 60,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "并列复句",
      "content": "……，也……"
    },
    "meaning": "weder…noch…",
    "pinyin": "bù…yě bù…",
    "examples": [
      {
        "chinese": "他不吃也不喝。",
        "pinyin": "Tā bù chī yě bù hē.",
        "german": "Er isst weder noch trinkt er."
      },
      {
        "chinese": "这里不大也不小。",
        "pinyin": "Zhèlǐ bú dà yě bù xiǎo.",
        "german": "Hier ist es weder groß noch klein."
      }
    ],
    "legacyIds": [
      "g:不…也不…",
      "不…也不…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:……，还……",
    "pattern": "……，还……",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 61,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "并列复句",
      "content": "……，还……"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:完成态：用动态助词“了¹”表示",
    "pattern": "完成态：用动态助词“了¹”表示",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 62,
      "category": "动作的态",
      "categoryName": "",
      "item": "完成态",
      "content": "用动态助词“了¹”表示"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:变化态：用动态助词“了²”表示",
    "pattern": "变化态：用动态助词“了²”表示",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 63,
      "category": "动作的态",
      "categoryName": "",
      "item": "变化态",
      "content": "用动态助词“了²”表示"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:……在/正在+动词",
    "pattern": "……在/正在+动词",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 64,
      "category": "动作的态",
      "categoryName": "",
      "item": "进行态",
      "content": "（1）……在/正在+动词"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:……在/正在+动词……+呢",
    "pattern": "……在/正在+动词……+呢",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 65,
      "category": "动作的态",
      "categoryName": "",
      "item": "进行态",
      "content": "（2）……在/正在+动词……+呢"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:……呢",
    "pattern": "……呢",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 66,
      "category": "动作的态",
      "categoryName": "",
      "item": "进行态",
      "content": "（3）……呢"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:钱数表示法",
    "pattern": "钱数表示法",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 67,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "钱数表示法"
    },
    "meaning": "Yuan (Geldeinheit, umgangssprachlich/formell)",
    "pinyin": "kuài/yuán",
    "examples": [
      {
        "chinese": "这本书十五块钱。",
        "pinyin": "Zhè běn shū shíwǔ kuài qián.",
        "german": "Dieses Buch kostet 15 Yuan."
      },
      {
        "chinese": "一共三十二元。",
        "pinyin": "Yígòng sānshí'èr yuán.",
        "german": "Insgesamt 32 Yuan."
      }
    ],
    "legacyIds": [
      "g:块/元",
      "块/元"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:序数表达法1：第+数词",
    "pattern": "序数表达法1：第+数词",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 68,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "序数表达法1：第+数词"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:时间表示法：年、月、日、星期表示法",
    "pattern": "时间表示法：年、月、日、星期表示法",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 69,
      "category": "特殊表达法",
      "categoryName": "时间表示法",
      "item": "",
      "content": "（1）年、月、日、星期表示法"
    },
    "meaningStatus": "draft"
  },
  {
    "id": "g:钟点表示法",
    "pattern": "钟点表示法",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 70,
      "category": "特殊表达法",
      "categoryName": "时间表示法",
      "item": "",
      "content": "（2）钟点表示法"
    },
    "meaningStatus": "draft"
  }
]);
