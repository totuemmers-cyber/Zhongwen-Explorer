// Zhongwen Explorer grammar source (consolidated by scripts/consolidate-grammar.cjs). HSK1.
window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat([
  {
    "id": "g:是",
    "pattern": "是",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "sein (Kopula)",
    "formation": "Subjekt + 是 + Nomen/Pronomen",
    "explanation": "是 verbindet Subjekt und Prädikatsnomen. Es wird nicht mit Adjektiven verwendet (anders als dt. ‹sein›).",
    "notes": "Nicht verwenden mit Adjektiven: ‹我很好› statt ‹我是好›.",
    "relatedPatterns": [
      "不是",
      "是...的"
    ],
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
      }
    ],
    "legacyIds": [
      "是"
    ]
  },
  {
    "id": "g:有",
    "pattern": "有",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "haben / es gibt",
    "formation": "Subjekt + 有 + Objekt",
    "explanation": "有 drückt Besitz aus oder zeigt an, dass etwas existiert.",
    "notes": "Verneinung immer mit 没有, nie mit 不有.",
    "relatedPatterns": [
      "没有",
      "有没有"
    ],
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
      "有"
    ]
  },
  {
    "id": "g:在 + Ort",
    "pattern": "在 + Ort",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "sich befinden an/in",
    "formation": "Subjekt + 在 + Ort",
    "explanation": "在 gibt den Aufenthaltsort an. Kann als Verb (‹sich befinden›) oder als Präposition verwendet werden.",
    "notes": "在 als Präposition steht vor dem Verb: 在家吃饭.",
    "relatedPatterns": [
      "在 + Verb",
      "不在"
    ],
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
      }
    ],
    "legacyIds": [
      "在 + Ort"
    ]
  },
  {
    "id": "g:S-V-O Wortstellung",
    "pattern": "S-V-O Wortstellung",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "Grundwortstellung: Subjekt – Verb – Objekt",
    "formation": "Subjekt + Verb + Objekt",
    "explanation": "Mandarin folgt grundsätzlich der S-V-O-Wortstellung, ähnlich wie Deutsch in Hauptsätzen.",
    "notes": "Zeit- und Ortsangaben stehen meist vor dem Verb.",
    "relatedPatterns": [
      "把-Konstruktion"
    ],
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
      "S-V-O Wortstellung"
    ]
  },
  {
    "id": "g:从...到...",
    "pattern": "从...到...",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "von ... bis ...",
    "formation": "从 + Anfangspunkt + 到 + Endpunkt",
    "explanation": "Drückt einen Bereich aus – zeitlich oder räumlich.",
    "notes": "Kann auch für abstrakte Bereiche verwendet werden.",
    "relatedPatterns": [
      "到"
    ],
    "examples": [
      {
        "chinese": "从一到十",
        "pinyin": "Cóng yī dào shí",
        "german": "Von eins bis zehn."
      },
      {
        "chinese": "我从北京到上海。",
        "pinyin": "Wǒ cóng Běijīng dào Shànghǎi.",
        "german": "Ich (fahre) von Peking nach Shanghai."
      }
    ],
    "legacyIds": [
      "从...到..."
    ]
  },
  {
    "id": "g:...的时候",
    "pattern": "...的时候",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "als / wenn (zeitlich)",
    "formation": "Verb/Satz + 的时候, Hauptsatz",
    "explanation": "Drückt den Zeitpunkt einer Handlung aus (‹als/wenn etwas passiert›).",
    "notes": "Steht immer vor dem Hauptsatz.",
    "relatedPatterns": [
      "的"
    ],
    "examples": [
      {
        "chinese": "吃饭的时候，不要说话。",
        "pinyin": "Chī fàn de shíhou, bú yào shuōhuà.",
        "german": "Beim Essen soll man nicht reden."
      },
      {
        "chinese": "我小的时候，住在北京。",
        "pinyin": "Wǒ xiǎo de shíhou, zhù zài Běijīng.",
        "german": "Als ich klein war, wohnte ich in Peking."
      }
    ],
    "legacyIds": [
      "...的时候"
    ]
  },
  {
    "id": "g:Zählwort + Nomen",
    "pattern": "Zählwort + Nomen",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "Zahl + Zählwort + Nomen",
    "formation": "Zahl + Zählwort (量词) + Nomen",
    "explanation": "Im Chinesischen muss zwischen Zahl und Nomen ein Zählwort (Maßwort) stehen. Das häufigste ist 个.",
    "notes": "Bei 2 + Zählwort wird 两 statt 二 verwendet.",
    "relatedPatterns": [
      "几 + Zählwort"
    ],
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
      "Zählwort + Nomen"
    ]
  },
  {
    "id": "g:的 (Attributiv)",
    "pattern": "的 (Attributiv)",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Attributpartikel (Besitz, Beschreibung)",
    "formation": "Modifikator + 的 + Nomen",
    "explanation": "的 verbindet einen Modifikator mit einem Nomen. Es zeigt Besitz oder Eigenschaft an.",
    "notes": "Bei engen Beziehungen (Familie, Zugehörigkeit) kann 的 entfallen: 我妈妈.",
    "relatedPatterns": [
      "是...的",
      "得"
    ],
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
      "的 (Attributiv)"
    ]
  },
  {
    "id": "g:了 (Abschluss)",
    "pattern": "了 (Abschluss)",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Abschluss / Zustandsänderung",
    "formation": "Verb + 了 (+ Objekt)",
    "explanation": "了 nach dem Verb signalisiert, dass eine Handlung abgeschlossen ist. Am Satzende zeigt es Zustandsänderung.",
    "notes": "了 ist KEIN Vergangenheitstempus. Es markiert Abschluss oder Veränderung.",
    "relatedPatterns": [
      "没有 + Verb",
      "过"
    ],
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
      "了 (Abschluss)"
    ]
  },
  {
    "id": "g:吗",
    "pattern": "吗",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Fragepartikel (Ja/Nein-Frage)",
    "formation": "Aussagesatz + 吗？",
    "explanation": "吗 verwandelt eine Aussage in eine Ja/Nein-Frage. Die Wortstellung bleibt gleich.",
    "notes": "Nicht zusammen mit Fragewörtern (什么, 谁 etc.) verwenden.",
    "relatedPatterns": [
      "呢",
      "Verb-不-Verb"
    ],
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
    ]
  },
  {
    "id": "g:呢",
    "pattern": "呢",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Rückfrage-/Kontextpartikel",
    "formation": "Nomen/Pronomen + 呢？",
    "explanation": "呢 wird für Rückfragen (‹und du?›) oder zur Betonung einer laufenden Handlung verwendet.",
    "notes": "呢 macht Fragen weicher und informeller.",
    "relatedPatterns": [
      "吗"
    ],
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
      "呢"
    ]
  },
  {
    "id": "g:不",
    "pattern": "不",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Verneinung (Gegenwart/Zukunft/Gewohnheit)",
    "formation": "不 + Verb/Adjektiv",
    "explanation": "不 verneint Verben und Adjektive in Gegenwart, Zukunft und bei Gewohnheiten.",
    "notes": "不 vor 4. Ton wird zu bú gesprochen (Tonsandhi).",
    "relatedPatterns": [
      "没",
      "不是"
    ],
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
    ]
  },
  {
    "id": "g:没/没有",
    "pattern": "没/没有",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Verneinung (Vergangenheit / Besitz)",
    "formation": "没(有) + Verb",
    "explanation": "没 verneint abgeschlossene Handlungen und Besitz (有). Bei 有 ist 没 obligatorisch.",
    "notes": "没 + Verb: kein 了 nach dem Verb (没吃 ✓, 没吃了 ✗).",
    "relatedPatterns": [
      "不",
      "了"
    ],
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
      "没/没有"
    ]
  },
  {
    "id": "g:想 + Verb",
    "pattern": "想 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "möchten / wollen (Wunsch)",
    "formation": "Subjekt + 想 + Verb (+ Objekt)",
    "explanation": "想 drückt einen Wunsch oder eine Absicht aus.",
    "notes": "想 ist höflicher/sanfter als 要.",
    "relatedPatterns": [
      "要",
      "会"
    ],
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
      "想 + Verb"
    ]
  },
  {
    "id": "g:要 + Verb",
    "pattern": "要 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "wollen / müssen / werden",
    "formation": "Subjekt + 要 + Verb (+ Objekt)",
    "explanation": "要 drückt Absicht, Notwendigkeit oder Zukunft aus. Stärker als 想.",
    "notes": "不要 = ‹soll nicht / tu das nicht› (Verbot oder Aufforderung).",
    "relatedPatterns": [
      "想",
      "不要",
      "得 (děi)"
    ],
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
      "要 + Verb"
    ]
  },
  {
    "id": "g:会 + Verb",
    "pattern": "会 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "können (erlernte Fähigkeit) / werden (Zukunft)",
    "formation": "Subjekt + 会 + Verb",
    "explanation": "会 zeigt eine erlernte Fähigkeit oder eine Vorhersage an.",
    "notes": "会 = erlernte Fähigkeit; 能 = physische Fähigkeit / Erlaubnis.",
    "relatedPatterns": [
      "能",
      "可以"
    ],
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
      "会 + Verb"
    ]
  },
  {
    "id": "g:能 + Verb",
    "pattern": "能 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "können (Fähigkeit / Erlaubnis)",
    "formation": "Subjekt + 能 + Verb",
    "explanation": "能 drückt physische Fähigkeit, Erlaubnis oder Möglichkeit aus.",
    "notes": "能 betont eher die Möglichkeit oder Umstände.",
    "relatedPatterns": [
      "会",
      "可以"
    ],
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
      "能 + Verb"
    ]
  },
  {
    "id": "g:可以 + Verb",
    "pattern": "可以 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "dürfen / können (Erlaubnis)",
    "formation": "Subjekt + 可以 + Verb",
    "explanation": "可以 drückt Erlaubnis oder Möglichkeit aus.",
    "notes": "Verneinung: 不可以 (darf nicht) vs. 不能 (kann nicht).",
    "relatedPatterns": [
      "能",
      "会"
    ],
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
      "可以 + Verb"
    ]
  },
  {
    "id": "g:在 + Verb",
    "pattern": "在 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "gerade dabei sein (Verlaufsform)",
    "formation": "Subjekt + 在 + Verb (+ 呢)",
    "explanation": "在 vor dem Verb zeigt an, dass eine Handlung gerade stattfindet (Verlaufsform).",
    "notes": "正在 ist noch betontere Verlaufsform. 呢 am Ende ist optional.",
    "relatedPatterns": [
      "正在",
      "着"
    ],
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
      "在 + Verb"
    ]
  },
  {
    "id": "g:去/来 + Verb",
    "pattern": "去/来 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "gehen/kommen um zu ...",
    "formation": "Subjekt + 去/来 + Verb",
    "explanation": "去 oder 来 vor einem Verb drückt den Zweck des Gehens/Kommens aus.",
    "notes": "去 = weg vom Sprecher, 来 = hin zum Sprecher.",
    "relatedPatterns": [
      "去",
      "来"
    ],
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
      "去/来 + Verb"
    ]
  },
  {
    "id": "g:给 + Person + Verb",
    "pattern": "给 + Person + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "für jemanden etw. tun / jemandem geben",
    "formation": "给 + Empfänger + Verb + Objekt",
    "explanation": "给 kann als Verb (geben) oder als Präposition (für) verwendet werden.",
    "notes": "给 als Präposition steht vor dem Verb.",
    "relatedPatterns": [
      "把"
    ],
    "examples": [
      {
        "chinese": "请给我一杯水。",
        "pinyin": "Qǐng gěi wǒ yì bēi shuǐ.",
        "german": "Bitte gib mir ein Glas Wasser."
      },
      {
        "chinese": "我给你打电话。",
        "pinyin": "Wǒ gěi nǐ dǎ diànhuà.",
        "german": "Ich rufe dich an."
      }
    ],
    "legacyIds": [
      "给 + Person + Verb"
    ]
  },
  {
    "id": "g:很 + Adjektiv",
    "pattern": "很 + Adjektiv",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "sehr + Adjektiv (prädikativ)",
    "formation": "Subjekt + 很 + Adjektiv",
    "explanation": "Im Chinesischen brauchen prädikative Adjektive ein Adverb wie 很. Ohne 很 entsteht ein Vergleich.",
    "notes": "很 ist oft bedeutungsschwach und dient nur als grammatischer Marker.",
    "relatedPatterns": [
      "太...了",
      "真"
    ],
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
      "很 + Adjektiv"
    ]
  },
  {
    "id": "g:太...了",
    "pattern": "太...了",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "zu ... / wirklich sehr ...",
    "formation": "太 + Adjektiv + 了",
    "explanation": "太...了 drückt ein Übermaß oder starke Empfindung aus.",
    "notes": "了 gehört zum Muster und darf nicht weggelassen werden.",
    "relatedPatterns": [
      "很",
      "真"
    ],
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
      "太...了"
    ]
  },
  {
    "id": "g:真 + Adjektiv",
    "pattern": "真 + Adjektiv",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "wirklich / echt",
    "formation": "真 + Adjektiv",
    "explanation": "真 verstärkt ein Adjektiv und drückt echte Überraschung oder Bewunderung aus.",
    "notes": "真 drückt echtes Erstaunen oder Empfindung aus.",
    "relatedPatterns": [
      "很",
      "太...了"
    ],
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
      "真 + Adjektiv"
    ]
  },
  {
    "id": "g:什么",
    "pattern": "什么",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "was",
    "formation": "Subjekt + Verb + 什么？",
    "explanation": "什么 steht an der Stelle im Satz, an der die Antwort stehen würde.",
    "notes": "Kein 吗 am Satzende, wenn ein Fragewort im Satz steht.",
    "relatedPatterns": [
      "谁",
      "哪",
      "几"
    ],
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
      }
    ],
    "legacyIds": [
      "什么"
    ]
  },
  {
    "id": "g:几/多少",
    "pattern": "几/多少",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "wie viele (< 10) / wie viele (beliebig)",
    "formation": "几 + Zählwort + Nomen / 多少 + (Zählwort) + Nomen",
    "explanation": "几 erwartet eine kleine Zahl (< 10) und braucht ein Zählwort. 多少 fragt nach beliebigen Mengen.",
    "notes": "多少 kann ohne Zählwort stehen, 几 nicht.",
    "relatedPatterns": [
      "什么",
      "Zählwort + Nomen"
    ],
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
      "几/多少"
    ]
  },
  {
    "id": "g:谁",
    "pattern": "谁",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "wer",
    "formation": "谁 + Verb / Verb + 谁",
    "explanation": "谁 fragt nach Personen und steht an der Position der Antwort.",
    "notes": "谁 wird auch shéi oder shuí ausgesprochen.",
    "relatedPatterns": [
      "什么",
      "哪"
    ],
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
    ]
  },
  {
    "id": "g:哪 / 哪儿",
    "pattern": "哪 / 哪儿",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "welcher / wo",
    "formation": "哪 + Zählwort + Nomen / 在 + 哪儿",
    "explanation": "哪 fragt nach einer Auswahl (welcher), 哪儿 nach einem Ort (wo).",
    "notes": "哪里 ist die höflichere Form von 哪儿.",
    "relatedPatterns": [
      "谁",
      "什么"
    ],
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
      "哪 / 哪儿"
    ]
  },
  {
    "id": "g:Verb-不-Verb",
    "pattern": "Verb-不-Verb",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "Ja/Nein-Frage (Alternative)",
    "formation": "Verb + 不 + Verb？",
    "explanation": "Eine andere Art, Ja/Nein-Fragen zu stellen, ohne 吗.",
    "notes": "Bei 有: 有没有 (nicht 有不有).",
    "relatedPatterns": [
      "吗",
      "有没有"
    ],
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
      }
    ],
    "legacyIds": [
      "Verb-不-Verb"
    ]
  },
  {
    "id": "g:和 / 跟",
    "pattern": "和 / 跟",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "und / mit",
    "formation": "A + 和/跟 + B",
    "explanation": "和 und 跟 verbinden Nomen (‹und›) oder zeigen Begleitung (‹mit›). 跟 ist umgangssprachlicher.",
    "notes": "和/跟 verbinden nur Nomen, nicht Sätze. Für Sätze: 而且, 也.",
    "relatedPatterns": [
      "也"
    ],
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
      "和 / 跟"
    ]
  },
  {
    "id": "g:也",
    "pattern": "也",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "auch",
    "formation": "Subjekt + 也 + Verb",
    "explanation": "也 steht immer vor dem Verb und nach dem Subjekt.",
    "notes": "也 steht vor 都: 我们也都去 (Wir gehen auch alle).",
    "relatedPatterns": [
      "都"
    ],
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
    ]
  },
  {
    "id": "g:都",
    "pattern": "都",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "alle / beide",
    "formation": "Subjekt (Plural) + 都 + Verb",
    "explanation": "都 fasst mehrere Elemente zusammen (‹alle›) und steht vor dem Verb.",
    "notes": "都 bezieht sich auf das, was davor steht.",
    "relatedPatterns": [
      "也",
      "每"
    ],
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
      }
    ],
    "legacyIds": [
      "都"
    ]
  },
  {
    "id": "g:还",
    "pattern": "还",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "noch / außerdem / immer noch",
    "formation": "Subjekt + 还 + Verb",
    "explanation": "还 drückt Fortdauer (‹immer noch›) oder Ergänzung (‹außerdem/noch›) aus.",
    "notes": "还是 = ‹oder› (in Fragen) bzw. ‹trotzdem›.",
    "relatedPatterns": [
      "也",
      "又"
    ],
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
      "还"
    ]
  },
  {
    "id": "g:吧",
    "pattern": "吧",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Vorschlags-/Vermutungspartikel",
    "formation": "Satz + 吧",
    "explanation": "吧 macht einen Satz zu einem Vorschlag oder drückt Vermutung aus.",
    "notes": "吧 macht Aussagen weicher und weniger direkt.",
    "relatedPatterns": [
      "吗"
    ],
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
      "吧"
    ]
  },
  {
    "id": "g:怎么",
    "pattern": "怎么",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "wie / wieso",
    "formation": "怎么 + Verb",
    "explanation": "怎么 fragt nach der Art und Weise (wie) oder dem Grund (wieso).",
    "notes": "怎么样 fragt nach einer Bewertung: ‹Wie ist/war es?›",
    "relatedPatterns": [
      "怎么样",
      "为什么"
    ],
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
    ]
  },
  {
    "id": "g:为什么",
    "pattern": "为什么",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "warum",
    "formation": "为什么 + Satz？",
    "explanation": "为什么 fragt nach dem Grund.",
    "notes": "Antwort mit 因为... (weil...).",
    "relatedPatterns": [
      "因为...所以...",
      "怎么"
    ],
    "examples": [
      {
        "chinese": "你为什么学中文？",
        "pinyin": "Nǐ wèi shénme xué Zhōngwén?",
        "german": "Warum lernst du Chinesisch?"
      },
      {
        "chinese": "为什么不行？",
        "pinyin": "Wèi shénme bù xíng?",
        "german": "Warum geht das nicht?"
      }
    ],
    "legacyIds": [
      "为什么"
    ]
  },
  {
    "id": "g:这/那 + Zählwort + Nomen",
    "pattern": "这/那 + Zählwort + Nomen",
    "level": "HSK1",
    "category": "Satzstrukturen",
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
      "这/那 + Zählwort + Nomen"
    ]
  },
  {
    "id": "g:叫 + Name",
    "pattern": "叫 + Name",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "heißen / sich vorstellen",
    "pinyin": "jiào + Name",
    "examples": [
      {
        "chinese": "我叫王明。",
        "pinyin": "Wǒ jiào Wáng Míng.",
        "german": "Ich heiße Wang Ming."
      },
      {
        "chinese": "你叫什么名字？",
        "pinyin": "Nǐ jiào shénme míngzi?",
        "german": "Wie heißt du?"
      }
    ],
    "legacyIds": [
      "叫 + Name"
    ]
  },
  {
    "id": "g:好吗",
    "pattern": "好吗",
    "level": "HSK1",
    "category": "Fragewörter",
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
      "好吗"
    ]
  },
  {
    "id": "g:多少钱",
    "pattern": "多少钱",
    "level": "HSK1",
    "category": "Fragewörter",
    "meaning": "Wie viel kostet es?",
    "pinyin": "duōshao qián",
    "examples": [
      {
        "chinese": "这个多少钱？",
        "pinyin": "Zhège duōshao qián?",
        "german": "Wie viel kostet das?"
      },
      {
        "chinese": "那件衣服多少钱？",
        "pinyin": "Nà jiàn yīfu duōshao qián?",
        "german": "Wie viel kostet jenes Kleidungsstück?"
      }
    ],
    "legacyIds": [
      "多少钱"
    ]
  },
  {
    "id": "g:了 (Zustandsänderung)",
    "pattern": "了 (Zustandsänderung)",
    "level": "HSK1",
    "category": "Partikel",
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
      }
    ],
    "legacyIds": [
      "了 (Zustandsänderung)"
    ]
  },
  {
    "id": "g:岁",
    "pattern": "岁",
    "level": "HSK1",
    "category": "Satzstrukturen",
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
      "岁"
    ]
  },
  {
    "id": "g:什么时候",
    "pattern": "什么时候",
    "level": "HSK1",
    "category": "Fragewörter",
    "meaning": "wann (Frage nach dem Zeitpunkt)",
    "pinyin": "shénme shíhou",
    "examples": [
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
      "什么时候"
    ]
  },
  {
    "id": "g:块/元",
    "pattern": "块/元",
    "level": "HSK1",
    "category": "Satzstrukturen",
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
      "块/元"
    ]
  },
  {
    "id": "g:对不起 / 没关系",
    "pattern": "对不起 / 没关系",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "Entschuldigung / Macht nichts",
    "pinyin": "duìbuqǐ / méi guānxi",
    "examples": [
      {
        "chinese": "对不起，我来晚了。",
        "pinyin": "Duìbuqǐ, wǒ lái wǎn le.",
        "german": "Entschuldigung, ich bin zu spät gekommen."
      },
      {
        "chinese": "没关系，不要紧。",
        "pinyin": "Méi guānxi, búyàojǐn.",
        "german": "Macht nichts, ist nicht schlimm."
      }
    ],
    "legacyIds": [
      "对不起 / 没关系"
    ]
  },
  {
    "id": "g:让 + Person + Verb",
    "pattern": "让 + Person + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "jemanden etwas tun lassen",
    "pinyin": "ràng + Person + Verb",
    "examples": [
      {
        "chinese": "妈妈让我做作业。",
        "pinyin": "Māma ràng wǒ zuò zuòyè.",
        "german": "Mama lässt mich Hausaufgaben machen."
      },
      {
        "chinese": "请让我看看。",
        "pinyin": "Qǐng ràng wǒ kànkan.",
        "german": "Bitte lass mich mal schauen."
      }
    ],
    "legacyIds": [
      "让 + Person + Verb"
    ]
  },
  {
    "id": "g:从 + Ort/Zeit",
    "pattern": "从 + Ort/Zeit",
    "level": "HSK1",
    "category": "Präpositionen",
    "meaning": "von / ab (Ausgangsort oder -zeit)",
    "pinyin": "cóng + Ort/Zeit",
    "examples": [
      {
        "chinese": "我从北京来。",
        "pinyin": "Wǒ cóng Běijīng lái.",
        "german": "Ich komme aus Peking."
      },
      {
        "chinese": "从明天开始学习。",
        "pinyin": "Cóng míngtiān kāishǐ xuéxí.",
        "german": "Ab morgen fange ich an zu lernen."
      }
    ],
    "legacyIds": [
      "从 + Ort/Zeit"
    ]
  },
  {
    "id": "g:在 + Ort + Verb",
    "pattern": "在 + Ort + Verb",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "an einem Ort eine Handlung ausführen",
    "pinyin": "zài + Ort + Verb",
    "examples": [
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
      "在 + Ort + Verb"
    ]
  },
  {
    "id": "g:到 + Ort/Zeit",
    "pattern": "到 + Ort/Zeit",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "ankommen bei / bis zu",
    "pinyin": "dào + Ort/Zeit",
    "examples": [
      {
        "chinese": "我到了北京。",
        "pinyin": "Wǒ dào le Běijīng.",
        "german": "Ich bin in Peking angekommen."
      },
      {
        "chinese": "从早上到晚上。",
        "pinyin": "Cóng zǎoshang dào wǎnshang.",
        "german": "Von morgens bis abends."
      }
    ],
    "legacyIds": [
      "到 + Ort/Zeit"
    ]
  },
  {
    "id": "g:先 + Verb₁ + 再 + Verb₂",
    "pattern": "先 + Verb₁ + 再 + Verb₂",
    "level": "HSK1",
    "category": "Zeitausdrücke",
    "meaning": "zuerst… dann… (Reihenfolge, informell)",
    "pinyin": "xiān + Verb₁ + zài + Verb₂",
    "examples": [
      {
        "chinese": "先吃饭再看电视。",
        "pinyin": "Xiān chīfàn zài kàn diànshì.",
        "german": "Zuerst essen, dann fernsehen."
      },
      {
        "chinese": "你先休息，再做作业。",
        "pinyin": "Nǐ xiān xiūxi, zài zuò zuòyè.",
        "german": "Ruh dich zuerst aus, dann mach Hausaufgaben."
      }
    ],
    "legacyIds": [
      "先 + Verb₁ + 再 + Verb₂"
    ]
  },
  {
    "id": "g:用 + Nomen + Verb",
    "pattern": "用 + Nomen + Verb",
    "level": "HSK1",
    "category": "Präpositionen",
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
      "用 + Nomen + Verb"
    ]
  },
  {
    "id": "g:又 + Adj₁ + 又 + Adj₂ (Grundform)",
    "pattern": "又 + Adj₁ + 又 + Adj₂ (Grundform)",
    "level": "HSK1",
    "category": "Adverbien",
    "meaning": "sowohl… als auch… (zwei Eigenschaften gleichzeitig)",
    "pinyin": "yòu + Adj₁ + yòu + Adj₂",
    "examples": [
      {
        "chinese": "这个又大又便宜。",
        "pinyin": "Zhège yòu dà yòu piányi.",
        "german": "Das ist sowohl groß als auch günstig."
      },
      {
        "chinese": "房间又干净又明亮。",
        "pinyin": "Fángjiān yòu gānjìng yòu míngliàng.",
        "german": "Das Zimmer ist sowohl sauber als auch hell."
      }
    ],
    "legacyIds": [
      "又 + Adj₁ + 又 + Adj₂ (Grundform)"
    ]
  },
  {
    "id": "g:多 + Adjektiv",
    "pattern": "多 + Adjektiv",
    "level": "HSK1",
    "category": "Fragewörter",
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
      "多 + Adjektiv"
    ]
  },
  {
    "id": "g:得 (děi) müssen",
    "pattern": "得 (děi) müssen",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "müssen (umgangssprachliche Notwendigkeit)",
    "pinyin": "děi + Verb",
    "examples": [
      {
        "chinese": "我得走了。",
        "pinyin": "Wǒ děi zǒu le.",
        "german": "Ich muss gehen."
      },
      {
        "chinese": "你得早点儿起床。",
        "pinyin": "Nǐ děi zǎo diǎnr qǐchuáng.",
        "german": "Du musst früher aufstehen."
      }
    ],
    "legacyIds": [
      "得 (děi) müssen"
    ]
  },
  {
    "id": "g:不是",
    "pattern": "不是",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "nicht sein (Verneinung von 是)",
    "pinyin": "bú shì",
    "examples": [
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
      "不是"
    ]
  },
  {
    "id": "g:有没有",
    "pattern": "有没有",
    "level": "HSK1",
    "category": "Fragewörter",
    "meaning": "hast du / gibt es (Ja-Nein-Frage mit 有)",
    "pinyin": "yǒu méi yǒu",
    "examples": [
      {
        "chinese": "你有没有时间？",
        "pinyin": "Nǐ yǒu méi yǒu shíjiān?",
        "german": "Hast du Zeit?"
      },
      {
        "chinese": "这里有没有厕所？",
        "pinyin": "Zhèlǐ yǒu méi yǒu cèsuǒ?",
        "german": "Gibt es hier eine Toilette?"
      }
    ],
    "legacyIds": [
      "有没有"
    ]
  },
  {
    "id": "g:每 + Zählwort + Nomen",
    "pattern": "每 + Zählwort + Nomen",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "jeder / jede / jedes",
    "pinyin": "měi + Zählwort + Nomen",
    "examples": [
      {
        "chinese": "每个人都很开心。",
        "pinyin": "Měi gè rén dōu hěn kāixīn.",
        "german": "Jeder ist sehr fröhlich."
      },
      {
        "chinese": "我每天都学中文。",
        "pinyin": "Wǒ měi tiān dōu xué zhōngwén.",
        "german": "Ich lerne jeden Tag Chinesisch."
      }
    ],
    "legacyIds": [
      "每 + Zählwort + Nomen"
    ]
  },
  {
    "id": "g:喜欢 + Verb/Nomen",
    "pattern": "喜欢 + Verb/Nomen",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "gern mögen / gern tun",
    "pinyin": "xǐhuan + Verb/Nomen",
    "examples": [
      {
        "chinese": "我喜欢看书。",
        "pinyin": "Wǒ xǐhuan kàn shū.",
        "german": "Ich lese gern."
      },
      {
        "chinese": "你喜欢什么颜色？",
        "pinyin": "Nǐ xǐhuan shénme yánsè?",
        "german": "Welche Farbe magst du?"
      }
    ],
    "legacyIds": [
      "喜欢 + Verb/Nomen"
    ]
  },
  {
    "id": "g:请 + Verb",
    "pattern": "请 + Verb",
    "level": "HSK1",
    "category": "Verben",
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
      "请 + Verb"
    ]
  },
  {
    "id": "g:怎么样",
    "pattern": "怎么样",
    "level": "HSK1",
    "category": "Fragewörter",
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
    ]
  },
  {
    "id": "g:时间词 + Verb",
    "pattern": "时间词 + Verb",
    "level": "HSK1",
    "category": "Satzstrukturen",
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
      "时间词 + Verb"
    ]
  },
  {
    "id": "g:一点儿 + Nomen",
    "pattern": "一点儿 + Nomen",
    "level": "HSK1",
    "category": "Satzstrukturen",
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
      "一点儿 + Nomen"
    ]
  },
  {
    "id": "g:或者",
    "pattern": "或者",
    "level": "HSK1",
    "category": "Konjunktionen",
    "meaning": "oder (in Aussagesätzen)",
    "pinyin": "huòzhě",
    "examples": [
      {
        "chinese": "你可以喝茶或者咖啡。",
        "pinyin": "Nǐ kěyǐ hē chá huòzhě kāfēi.",
        "german": "Du kannst Tee oder Kaffee trinken."
      },
      {
        "chinese": "我们坐公交车或者地铁去。",
        "pinyin": "Wǒmen zuò gōngjiāochē huòzhě dìtiě qù.",
        "german": "Wir fahren mit dem Bus oder der U-Bahn."
      }
    ],
    "legacyIds": [
      "或者"
    ]
  },
  {
    "id": "g:还是 (Frage)",
    "pattern": "还是 (Frage)",
    "level": "HSK1",
    "category": "Fragewörter",
    "meaning": "oder (in Alternativfragen)",
    "pinyin": "háishi (Frage)",
    "examples": [
      {
        "chinese": "你喝茶还是咖啡？",
        "pinyin": "Nǐ hē chá háishi kāfēi?",
        "german": "Trinkst du Tee oder Kaffee?"
      },
      {
        "chinese": "你是中国人还是日本人？",
        "pinyin": "Nǐ shì Zhōngguó rén háishi Rìběn rén?",
        "german": "Bist du Chinese oder Japaner?"
      }
    ],
    "legacyIds": [
      "还是 (Frage)"
    ]
  },
  {
    "id": "g:正在 + Verb",
    "pattern": "正在 + Verb",
    "level": "HSK1",
    "category": "Adverbien",
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
      "正在 + Verb"
    ]
  },
  {
    "id": "g:就 + Verb",
    "pattern": "就 + Verb",
    "level": "HSK1",
    "category": "Adverbien",
    "meaning": "dann / gleich / sofort / bereits",
    "pinyin": "jiù + Verb",
    "examples": [
      {
        "chinese": "我马上就来。",
        "pinyin": "Wǒ mǎshàng jiù lái.",
        "german": "Ich komme gleich."
      },
      {
        "chinese": "他六点就起床了。",
        "pinyin": "Tā liù diǎn jiù qǐchuáng le.",
        "german": "Er ist schon um sechs Uhr aufgestanden."
      }
    ],
    "legacyIds": [
      "就 + Verb"
    ]
  },
  {
    "id": "g:都 + 不/没",
    "pattern": "都 + 不/没",
    "level": "HSK1",
    "category": "Adverbien",
    "meaning": "alle nicht / keiner (vollständige Verneinung)",
    "pinyin": "dōu + bù/méi",
    "examples": [
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
      "都 + 不/没"
    ]
  },
  {
    "id": "g:又 + Verb + 了",
    "pattern": "又 + Verb + 了",
    "level": "HSK1",
    "category": "Adverbien",
    "meaning": "schon wieder (erneute Handlung in Vergangenheit)",
    "pinyin": "yòu + Verb + le",
    "examples": [
      {
        "chinese": "他又迟到了。",
        "pinyin": "Tā yòu chídào le.",
        "german": "Er ist schon wieder zu spät gekommen."
      },
      {
        "chinese": "你又忘了！",
        "pinyin": "Nǐ yòu wàng le!",
        "german": "Du hast es schon wieder vergessen!"
      }
    ],
    "legacyIds": [
      "又 + Verb + 了"
    ]
  },
  {
    "id": "g:再 + Verb",
    "pattern": "再 + Verb",
    "level": "HSK1",
    "category": "Adverbien",
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
      "再 + Verb"
    ]
  },
  {
    "id": "g:还没（有）…呢",
    "pattern": "还没（有）…呢",
    "level": "HSK1",
    "category": "Verneinung",
    "meaning": "noch nicht (Erwartung unerfüllt)",
    "pinyin": "hái méi(yǒu)… ne",
    "examples": [
      {
        "chinese": "他还没来呢。",
        "pinyin": "Tā hái méi lái ne.",
        "german": "Er ist noch nicht gekommen."
      },
      {
        "chinese": "我还没吃饭呢。",
        "pinyin": "Wǒ hái méi chī fàn ne.",
        "german": "Ich habe noch nicht gegessen."
      }
    ],
    "legacyIds": [
      "还没（有）…呢"
    ]
  },
  {
    "id": "g:多/少 + Verb",
    "pattern": "多/少 + Verb",
    "level": "HSK1",
    "category": "Adverbien",
    "meaning": "mehr/weniger tun (Ratschlag)",
    "pinyin": "duō/shǎo + Verb",
    "examples": [
      {
        "chinese": "多喝水。",
        "pinyin": "Duō hē shuǐ.",
        "german": "Trink mehr Wasser."
      },
      {
        "chinese": "少吃糖。",
        "pinyin": "Shǎo chī táng.",
        "german": "Iss weniger Zucker."
      }
    ],
    "legacyIds": [
      "多/少 + Verb"
    ]
  },
  {
    "id": "g:…啊",
    "pattern": "…啊",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Ausrufspartikel (Staunen, Aufforderung)",
    "pinyin": "…a",
    "examples": [
      {
        "chinese": "太好了啊！",
        "pinyin": "Tài hǎo le a!",
        "german": "Das ist ja großartig!"
      },
      {
        "chinese": "快来啊！",
        "pinyin": "Kuài lái a!",
        "german": "Komm schnell!"
      }
    ],
    "legacyIds": [
      "…啊"
    ]
  },
  {
    "id": "g:Adj + 一点儿",
    "pattern": "Adj + 一点儿",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "ein bisschen mehr (Aufforderung)",
    "pinyin": "Adj + yìdiǎnr",
    "examples": [
      {
        "chinese": "请快一点儿。",
        "pinyin": "Qǐng kuài yìdiǎnr.",
        "german": "Bitte ein bisschen schneller."
      },
      {
        "chinese": "说慢一点儿。",
        "pinyin": "Shuō màn yìdiǎnr.",
        "german": "Sprich ein bisschen langsamer."
      }
    ],
    "legacyIds": [
      "Adj + 一点儿"
    ]
  },
  {
    "id": "g:好 + Adjektiv",
    "pattern": "好 + Adjektiv",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "so / wirklich (Ausruf)",
    "pinyin": "hǎo + Adjektiv",
    "examples": [
      {
        "chinese": "好大啊！",
        "pinyin": "Hǎo dà a!",
        "german": "So groß!"
      },
      {
        "chinese": "今天好冷！",
        "pinyin": "Jīntiān hǎo lěng!",
        "german": "Heute ist es wirklich kalt!"
      }
    ],
    "legacyIds": [
      "好 + Adjektiv"
    ]
  },
  {
    "id": "g:…了…了",
    "pattern": "…了…了",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Doppel-了 (Abschluss + Zustandsänderung)",
    "pinyin": "…le…le",
    "examples": [
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
      "…了…了"
    ]
  },
  {
    "id": "g:是不是",
    "pattern": "是不是",
    "level": "HSK1",
    "category": "Fragewörter",
    "meaning": "Bestätigungsfrage mit 是",
    "pinyin": "shì bu shì",
    "examples": [
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
      "是不是"
    ]
  }
]);
