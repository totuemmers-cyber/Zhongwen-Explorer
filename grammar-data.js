// Zhongwen Explorer – Grammatik-Daten (HSK 1–3)
// UI-Sprache: Deutsch | Zielsprache: Mandarin-Chinesisch
window.GRAMMAR_DATA = [

  // ============================================================
  //  HSK 1 – Grundlegende Grammatikmuster (30+)
  // ============================================================

  // --- Satzstrukturen ---
  {
    "pattern": "是",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "sein (Kopula)",
    "formation": "Subjekt + 是 + Nomen/Pronomen",
    "explanation": "是 verbindet Subjekt und Prädikatsnomen. Es wird nicht mit Adjektiven verwendet (anders als dt. ‹sein›).",
    "examples": [
      { "chinese": "我是学生。", "pinyin": "Wǒ shì xuéshēng.", "german": "Ich bin Student." },
      { "chinese": "她是老师。", "pinyin": "Tā shì lǎoshī.", "german": "Sie ist Lehrerin." }
    ],
    "relatedPatterns": ["不是", "是...的"],
    "notes": "Nicht verwenden mit Adjektiven: ‹我很好› statt ‹我是好›."
  },
  {
    "pattern": "有",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "haben / es gibt",
    "formation": "Subjekt + 有 + Objekt",
    "explanation": "有 drückt Besitz aus oder zeigt an, dass etwas existiert.",
    "examples": [
      { "chinese": "我有一本书。", "pinyin": "Wǒ yǒu yì běn shū.", "german": "Ich habe ein Buch." },
      { "chinese": "这里有很多人。", "pinyin": "Zhèlǐ yǒu hěn duō rén.", "german": "Hier gibt es viele Leute." }
    ],
    "relatedPatterns": ["没有", "有没有"],
    "notes": "Verneinung immer mit 没有, nie mit 不有."
  },
  {
    "pattern": "在 + Ort",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "sich befinden an/in",
    "formation": "Subjekt + 在 + Ort",
    "explanation": "在 gibt den Aufenthaltsort an. Kann als Verb (‹sich befinden›) oder als Präposition verwendet werden.",
    "examples": [
      { "chinese": "他在家。", "pinyin": "Tā zài jiā.", "german": "Er ist zu Hause." },
      { "chinese": "书在桌子上。", "pinyin": "Shū zài zhuōzi shàng.", "german": "Das Buch ist auf dem Tisch." }
    ],
    "relatedPatterns": ["在 + Verb", "不在"],
    "notes": "在 als Präposition steht vor dem Verb: 在家吃饭."
  },
  {
    "pattern": "S-V-O Wortstellung",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "Grundwortstellung: Subjekt – Verb – Objekt",
    "formation": "Subjekt + Verb + Objekt",
    "explanation": "Mandarin folgt grundsätzlich der S-V-O-Wortstellung, ähnlich wie Deutsch in Hauptsätzen.",
    "examples": [
      { "chinese": "我吃饭。", "pinyin": "Wǒ chī fàn.", "german": "Ich esse." },
      { "chinese": "他喝茶。", "pinyin": "Tā hē chá.", "german": "Er trinkt Tee." }
    ],
    "relatedPatterns": ["把-Konstruktion"],
    "notes": "Zeit- und Ortsangaben stehen meist vor dem Verb."
  },
  {
    "pattern": "从...到...",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "von ... bis ...",
    "formation": "从 + Anfangspunkt + 到 + Endpunkt",
    "explanation": "Drückt einen Bereich aus – zeitlich oder räumlich.",
    "examples": [
      { "chinese": "从一到十", "pinyin": "Cóng yī dào shí", "german": "Von eins bis zehn." },
      { "chinese": "我从北京到上海。", "pinyin": "Wǒ cóng Běijīng dào Shànghǎi.", "german": "Ich (fahre) von Peking nach Shanghai." }
    ],
    "relatedPatterns": ["到"],
    "notes": "Kann auch für abstrakte Bereiche verwendet werden."
  },
  {
    "pattern": "...的时候",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "als / wenn (zeitlich)",
    "formation": "Verb/Satz + 的时候, Hauptsatz",
    "explanation": "Drückt den Zeitpunkt einer Handlung aus (‹als/wenn etwas passiert›).",
    "examples": [
      { "chinese": "吃饭的时候，不要说话。", "pinyin": "Chī fàn de shíhou, bú yào shuōhuà.", "german": "Beim Essen soll man nicht reden." },
      { "chinese": "我小的时候，住在北京。", "pinyin": "Wǒ xiǎo de shíhou, zhù zài Běijīng.", "german": "Als ich klein war, wohnte ich in Peking." }
    ],
    "relatedPatterns": ["的"],
    "notes": "Steht immer vor dem Hauptsatz."
  },
  {
    "pattern": "Zählwort + Nomen",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "Zahl + Zählwort + Nomen",
    "formation": "Zahl + Zählwort (量词) + Nomen",
    "explanation": "Im Chinesischen muss zwischen Zahl und Nomen ein Zählwort (Maßwort) stehen. Das häufigste ist 个.",
    "examples": [
      { "chinese": "三个人", "pinyin": "sān gè rén", "german": "drei Personen" },
      { "chinese": "两本书", "pinyin": "liǎng běn shū", "german": "zwei Bücher" }
    ],
    "relatedPatterns": ["几 + Zählwort"],
    "notes": "Bei 2 + Zählwort wird 两 statt 二 verwendet."
  },

  // --- Partikel ---
  {
    "pattern": "的 (Attributiv)",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Attributpartikel (Besitz, Beschreibung)",
    "formation": "Modifikator + 的 + Nomen",
    "explanation": "的 verbindet einen Modifikator mit einem Nomen. Es zeigt Besitz oder Eigenschaft an.",
    "examples": [
      { "chinese": "我的书", "pinyin": "wǒ de shū", "german": "mein Buch" },
      { "chinese": "漂亮的花", "pinyin": "piàoliang de huā", "german": "schöne Blumen" }
    ],
    "relatedPatterns": ["是...的", "得"],
    "notes": "Bei engen Beziehungen (Familie, Zugehörigkeit) kann 的 entfallen: 我妈妈."
  },
  {
    "pattern": "了 (Abschluss)",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Abschluss / Zustandsänderung",
    "formation": "Verb + 了 (+ Objekt)",
    "explanation": "了 nach dem Verb signalisiert, dass eine Handlung abgeschlossen ist. Am Satzende zeigt es Zustandsänderung.",
    "examples": [
      { "chinese": "我吃了饭。", "pinyin": "Wǒ chī le fàn.", "german": "Ich habe gegessen." },
      { "chinese": "下雨了。", "pinyin": "Xià yǔ le.", "german": "Es hat angefangen zu regnen." }
    ],
    "relatedPatterns": ["没有 + Verb", "过"],
    "notes": "了 ist KEIN Vergangenheitstempus. Es markiert Abschluss oder Veränderung."
  },
  {
    "pattern": "吗",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Fragepartikel (Ja/Nein-Frage)",
    "formation": "Aussagesatz + 吗？",
    "explanation": "吗 verwandelt eine Aussage in eine Ja/Nein-Frage. Die Wortstellung bleibt gleich.",
    "examples": [
      { "chinese": "你好吗？", "pinyin": "Nǐ hǎo ma?", "german": "Geht es dir gut?" },
      { "chinese": "你是中国人吗？", "pinyin": "Nǐ shì Zhōngguó rén ma?", "german": "Bist du Chinese?" }
    ],
    "relatedPatterns": ["呢", "Verb-不-Verb"],
    "notes": "Nicht zusammen mit Fragewörtern (什么, 谁 etc.) verwenden."
  },
  {
    "pattern": "呢",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Rückfrage-/Kontextpartikel",
    "formation": "Nomen/Pronomen + 呢？",
    "explanation": "呢 wird für Rückfragen (‹und du?›) oder zur Betonung einer laufenden Handlung verwendet.",
    "examples": [
      { "chinese": "我很好，你呢？", "pinyin": "Wǒ hěn hǎo, nǐ ne?", "german": "Mir geht's gut, und dir?" },
      { "chinese": "他在哪儿呢？", "pinyin": "Tā zài nǎr ne?", "german": "Wo ist er denn?" }
    ],
    "relatedPatterns": ["吗"],
    "notes": "呢 macht Fragen weicher und informeller."
  },

  // --- Verneinung ---
  {
    "pattern": "不",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Verneinung (Gegenwart/Zukunft/Gewohnheit)",
    "formation": "不 + Verb/Adjektiv",
    "explanation": "不 verneint Verben und Adjektive in Gegenwart, Zukunft und bei Gewohnheiten.",
    "examples": [
      { "chinese": "我不喝咖啡。", "pinyin": "Wǒ bù hē kāfēi.", "german": "Ich trinke keinen Kaffee." },
      { "chinese": "这个不贵。", "pinyin": "Zhège bú guì.", "german": "Das ist nicht teuer." }
    ],
    "relatedPatterns": ["没", "不是"],
    "notes": "不 vor 4. Ton wird zu bú gesprochen (Tonsandhi)."
  },
  {
    "pattern": "没/没有",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Verneinung (Vergangenheit / Besitz)",
    "formation": "没(有) + Verb",
    "explanation": "没 verneint abgeschlossene Handlungen und Besitz (有). Bei 有 ist 没 obligatorisch.",
    "examples": [
      { "chinese": "我没有钱。", "pinyin": "Wǒ méi yǒu qián.", "german": "Ich habe kein Geld." },
      { "chinese": "他没来。", "pinyin": "Tā méi lái.", "german": "Er ist nicht gekommen." }
    ],
    "relatedPatterns": ["不", "了"],
    "notes": "没 + Verb: kein 了 nach dem Verb (没吃 ✓, 没吃了 ✗)."
  },

  // --- Verben ---
  {
    "pattern": "想 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "möchten / wollen (Wunsch)",
    "formation": "Subjekt + 想 + Verb (+ Objekt)",
    "explanation": "想 drückt einen Wunsch oder eine Absicht aus.",
    "examples": [
      { "chinese": "我想吃中国菜。", "pinyin": "Wǒ xiǎng chī Zhōngguó cài.", "german": "Ich möchte chinesisches Essen essen." },
      { "chinese": "你想喝什么？", "pinyin": "Nǐ xiǎng hē shénme?", "german": "Was möchtest du trinken?" }
    ],
    "relatedPatterns": ["要", "会"],
    "notes": "想 ist höflicher/sanfter als 要."
  },
  {
    "pattern": "要 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "wollen / müssen / werden",
    "formation": "Subjekt + 要 + Verb (+ Objekt)",
    "explanation": "要 drückt Absicht, Notwendigkeit oder Zukunft aus. Stärker als 想.",
    "examples": [
      { "chinese": "我要去北京。", "pinyin": "Wǒ yào qù Běijīng.", "german": "Ich will/werde nach Peking gehen." },
      { "chinese": "明天要下雨。", "pinyin": "Míngtiān yào xià yǔ.", "german": "Morgen wird es regnen." }
    ],
    "relatedPatterns": ["想", "不要", "得 (děi)"],
    "notes": "不要 = ‹soll nicht / tu das nicht› (Verbot oder Aufforderung)."
  },
  {
    "pattern": "会 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "können (erlernte Fähigkeit) / werden (Zukunft)",
    "formation": "Subjekt + 会 + Verb",
    "explanation": "会 zeigt eine erlernte Fähigkeit oder eine Vorhersage an.",
    "examples": [
      { "chinese": "我会说中文。", "pinyin": "Wǒ huì shuō Zhōngwén.", "german": "Ich kann Chinesisch sprechen." },
      { "chinese": "明天会冷。", "pinyin": "Míngtiān huì lěng.", "german": "Morgen wird es kalt." }
    ],
    "relatedPatterns": ["能", "可以"],
    "notes": "会 = erlernte Fähigkeit; 能 = physische Fähigkeit / Erlaubnis."
  },
  {
    "pattern": "能 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "können (Fähigkeit / Erlaubnis)",
    "formation": "Subjekt + 能 + Verb",
    "explanation": "能 drückt physische Fähigkeit, Erlaubnis oder Möglichkeit aus.",
    "examples": [
      { "chinese": "你能帮我吗？", "pinyin": "Nǐ néng bāng wǒ ma?", "german": "Kannst du mir helfen?" },
      { "chinese": "这里不能抽烟。", "pinyin": "Zhèlǐ bù néng chōuyān.", "german": "Hier darf man nicht rauchen." }
    ],
    "relatedPatterns": ["会", "可以"],
    "notes": "能 betont eher die Möglichkeit oder Umstände."
  },
  {
    "pattern": "可以 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "dürfen / können (Erlaubnis)",
    "formation": "Subjekt + 可以 + Verb",
    "explanation": "可以 drückt Erlaubnis oder Möglichkeit aus.",
    "examples": [
      { "chinese": "我可以进来吗？", "pinyin": "Wǒ kěyǐ jìnlái ma?", "german": "Darf ich hereinkommen?" },
      { "chinese": "这里可以停车。", "pinyin": "Zhèlǐ kěyǐ tíngchē.", "german": "Hier kann man parken." }
    ],
    "relatedPatterns": ["能", "会"],
    "notes": "Verneinung: 不可以 (darf nicht) vs. 不能 (kann nicht)."
  },
  {
    "pattern": "在 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "gerade dabei sein (Verlaufsform)",
    "formation": "Subjekt + 在 + Verb (+ 呢)",
    "explanation": "在 vor dem Verb zeigt an, dass eine Handlung gerade stattfindet (Verlaufsform).",
    "examples": [
      { "chinese": "他在吃饭。", "pinyin": "Tā zài chī fàn.", "german": "Er isst gerade." },
      { "chinese": "你在做什么呢？", "pinyin": "Nǐ zài zuò shénme ne?", "german": "Was machst du gerade?" }
    ],
    "relatedPatterns": ["正在", "着"],
    "notes": "正在 ist noch betontere Verlaufsform. 呢 am Ende ist optional."
  },
  {
    "pattern": "去/来 + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "gehen/kommen um zu ...",
    "formation": "Subjekt + 去/来 + Verb",
    "explanation": "去 oder 来 vor einem Verb drückt den Zweck des Gehens/Kommens aus.",
    "examples": [
      { "chinese": "我去买东西。", "pinyin": "Wǒ qù mǎi dōngxi.", "german": "Ich gehe einkaufen." },
      { "chinese": "你来吃饭吧。", "pinyin": "Nǐ lái chī fàn ba.", "german": "Komm essen!" }
    ],
    "relatedPatterns": ["去", "来"],
    "notes": "去 = weg vom Sprecher, 来 = hin zum Sprecher."
  },
  {
    "pattern": "给 + Person + Verb",
    "level": "HSK1",
    "category": "Verben",
    "meaning": "für jemanden etw. tun / jemandem geben",
    "formation": "给 + Empfänger + Verb + Objekt",
    "explanation": "给 kann als Verb (geben) oder als Präposition (für) verwendet werden.",
    "examples": [
      { "chinese": "请给我一杯水。", "pinyin": "Qǐng gěi wǒ yì bēi shuǐ.", "german": "Bitte gib mir ein Glas Wasser." },
      { "chinese": "我给你打电话。", "pinyin": "Wǒ gěi nǐ dǎ diànhuà.", "german": "Ich rufe dich an." }
    ],
    "relatedPatterns": ["把"],
    "notes": "给 als Präposition steht vor dem Verb."
  },

  // --- Adjektive ---
  {
    "pattern": "很 + Adjektiv",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "sehr + Adjektiv (prädikativ)",
    "formation": "Subjekt + 很 + Adjektiv",
    "explanation": "Im Chinesischen brauchen prädikative Adjektive ein Adverb wie 很. Ohne 很 entsteht ein Vergleich.",
    "examples": [
      { "chinese": "她很漂亮。", "pinyin": "Tā hěn piàoliang.", "german": "Sie ist (sehr) hübsch." },
      { "chinese": "今天很冷。", "pinyin": "Jīntiān hěn lěng.", "german": "Heute ist es (sehr) kalt." }
    ],
    "relatedPatterns": ["太...了", "真"],
    "notes": "很 ist oft bedeutungsschwach und dient nur als grammatischer Marker."
  },
  {
    "pattern": "太...了",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "zu ... / wirklich sehr ...",
    "formation": "太 + Adjektiv + 了",
    "explanation": "太...了 drückt ein Übermaß oder starke Empfindung aus.",
    "examples": [
      { "chinese": "太好了！", "pinyin": "Tài hǎo le!", "german": "Super! / Zu gut!" },
      { "chinese": "这个太贵了。", "pinyin": "Zhège tài guì le.", "german": "Das ist zu teuer." }
    ],
    "relatedPatterns": ["很", "真"],
    "notes": "了 gehört zum Muster und darf nicht weggelassen werden."
  },
  {
    "pattern": "真 + Adjektiv",
    "level": "HSK1",
    "category": "Adjektive",
    "meaning": "wirklich / echt",
    "formation": "真 + Adjektiv",
    "explanation": "真 verstärkt ein Adjektiv und drückt echte Überraschung oder Bewunderung aus.",
    "examples": [
      { "chinese": "你真聪明！", "pinyin": "Nǐ zhēn cōngming!", "german": "Du bist wirklich klug!" },
      { "chinese": "今天真热。", "pinyin": "Jīntiān zhēn rè.", "german": "Heute ist es wirklich heiß." }
    ],
    "relatedPatterns": ["很", "太...了"],
    "notes": "真 drückt echtes Erstaunen oder Empfindung aus."
  },

  // --- Fragewörter und -strukturen ---
  {
    "pattern": "什么",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "was",
    "formation": "Subjekt + Verb + 什么？",
    "explanation": "什么 steht an der Stelle im Satz, an der die Antwort stehen würde.",
    "examples": [
      { "chinese": "你吃什么？", "pinyin": "Nǐ chī shénme?", "german": "Was isst du?" },
      { "chinese": "这是什么？", "pinyin": "Zhè shì shénme?", "german": "Was ist das?" }
    ],
    "relatedPatterns": ["谁", "哪", "几"],
    "notes": "Kein 吗 am Satzende, wenn ein Fragewort im Satz steht."
  },
  {
    "pattern": "几/多少",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "wie viele (< 10) / wie viele (beliebig)",
    "formation": "几 + Zählwort + Nomen / 多少 + (Zählwort) + Nomen",
    "explanation": "几 erwartet eine kleine Zahl (< 10) und braucht ein Zählwort. 多少 fragt nach beliebigen Mengen.",
    "examples": [
      { "chinese": "你有几个孩子？", "pinyin": "Nǐ yǒu jǐ gè háizi?", "german": "Wie viele Kinder hast du?" },
      { "chinese": "这个多少钱？", "pinyin": "Zhège duōshao qián?", "german": "Wie viel kostet das?" }
    ],
    "relatedPatterns": ["什么", "Zählwort + Nomen"],
    "notes": "多少 kann ohne Zählwort stehen, 几 nicht."
  },
  {
    "pattern": "谁",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "wer",
    "formation": "谁 + Verb / Verb + 谁",
    "explanation": "谁 fragt nach Personen und steht an der Position der Antwort.",
    "examples": [
      { "chinese": "谁是你的老师？", "pinyin": "Shéi shì nǐ de lǎoshī?", "german": "Wer ist dein Lehrer?" },
      { "chinese": "你找谁？", "pinyin": "Nǐ zhǎo shéi?", "german": "Wen suchst du?" }
    ],
    "relatedPatterns": ["什么", "哪"],
    "notes": "谁 wird auch shéi oder shuí ausgesprochen."
  },
  {
    "pattern": "哪 / 哪儿",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "welcher / wo",
    "formation": "哪 + Zählwort + Nomen / 在 + 哪儿",
    "explanation": "哪 fragt nach einer Auswahl (welcher), 哪儿 nach einem Ort (wo).",
    "examples": [
      { "chinese": "你在哪儿？", "pinyin": "Nǐ zài nǎr?", "german": "Wo bist du?" },
      { "chinese": "你是哪国人？", "pinyin": "Nǐ shì nǎ guó rén?", "german": "Aus welchem Land kommst du?" }
    ],
    "relatedPatterns": ["谁", "什么"],
    "notes": "哪里 ist die höflichere Form von 哪儿."
  },
  {
    "pattern": "Verb-不-Verb",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "Ja/Nein-Frage (Alternative)",
    "formation": "Verb + 不 + Verb？",
    "explanation": "Eine andere Art, Ja/Nein-Fragen zu stellen, ohne 吗.",
    "examples": [
      { "chinese": "你去不去？", "pinyin": "Nǐ qù bú qù?", "german": "Gehst du oder nicht?" },
      { "chinese": "好不好？", "pinyin": "Hǎo bù hǎo?", "german": "Ist das ok?" }
    ],
    "relatedPatterns": ["吗", "有没有"],
    "notes": "Bei 有: 有没有 (nicht 有不有)."
  },

  // --- Konjunktionen und Adverbien ---
  {
    "pattern": "和 / 跟",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "und / mit",
    "formation": "A + 和/跟 + B",
    "explanation": "和 und 跟 verbinden Nomen (‹und›) oder zeigen Begleitung (‹mit›). 跟 ist umgangssprachlicher.",
    "examples": [
      { "chinese": "我和你", "pinyin": "wǒ hé nǐ", "german": "ich und du" },
      { "chinese": "我跟朋友去。", "pinyin": "Wǒ gēn péngyou qù.", "german": "Ich gehe mit einem Freund." }
    ],
    "relatedPatterns": ["也"],
    "notes": "和/跟 verbinden nur Nomen, nicht Sätze. Für Sätze: 而且, 也."
  },
  {
    "pattern": "也",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "auch",
    "formation": "Subjekt + 也 + Verb",
    "explanation": "也 steht immer vor dem Verb und nach dem Subjekt.",
    "examples": [
      { "chinese": "我也是学生。", "pinyin": "Wǒ yě shì xuéshēng.", "german": "Ich bin auch Student." },
      { "chinese": "他也喜欢。", "pinyin": "Tā yě xǐhuan.", "german": "Er mag es auch." }
    ],
    "relatedPatterns": ["都"],
    "notes": "也 steht vor 都: 我们也都去 (Wir gehen auch alle)."
  },
  {
    "pattern": "都",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "alle / beide",
    "formation": "Subjekt (Plural) + 都 + Verb",
    "explanation": "都 fasst mehrere Elemente zusammen (‹alle›) und steht vor dem Verb.",
    "examples": [
      { "chinese": "我们都是中国人。", "pinyin": "Wǒmen dōu shì Zhōngguó rén.", "german": "Wir sind alle Chinesen." },
      { "chinese": "什么都有。", "pinyin": "Shénme dōu yǒu.", "german": "Es gibt alles." }
    ],
    "relatedPatterns": ["也", "每"],
    "notes": "都 bezieht sich auf das, was davor steht."
  },
  {
    "pattern": "还",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "noch / außerdem / immer noch",
    "formation": "Subjekt + 还 + Verb",
    "explanation": "还 drückt Fortdauer (‹immer noch›) oder Ergänzung (‹außerdem/noch›) aus.",
    "examples": [
      { "chinese": "你还要什么？", "pinyin": "Nǐ hái yào shénme?", "german": "Was möchtest du noch?" },
      { "chinese": "他还没来。", "pinyin": "Tā hái méi lái.", "german": "Er ist immer noch nicht gekommen." }
    ],
    "relatedPatterns": ["也", "又"],
    "notes": "还是 = ‹oder› (in Fragen) bzw. ‹trotzdem›."
  },
  {
    "pattern": "吧",
    "level": "HSK1",
    "category": "Partikel",
    "meaning": "Vorschlags-/Vermutungspartikel",
    "formation": "Satz + 吧",
    "explanation": "吧 macht einen Satz zu einem Vorschlag oder drückt Vermutung aus.",
    "examples": [
      { "chinese": "我们走吧！", "pinyin": "Wǒmen zǒu ba!", "german": "Lass uns gehen!" },
      { "chinese": "你是德国人吧？", "pinyin": "Nǐ shì Déguó rén ba?", "german": "Du bist Deutscher, oder?" }
    ],
    "relatedPatterns": ["吗"],
    "notes": "吧 macht Aussagen weicher und weniger direkt."
  },
  {
    "pattern": "怎么",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "wie / wieso",
    "formation": "怎么 + Verb",
    "explanation": "怎么 fragt nach der Art und Weise (wie) oder dem Grund (wieso).",
    "examples": [
      { "chinese": "这个字怎么写？", "pinyin": "Zhège zì zěnme xiě?", "german": "Wie schreibt man dieses Zeichen?" },
      { "chinese": "你怎么不吃？", "pinyin": "Nǐ zěnme bù chī?", "german": "Wieso isst du nicht?" }
    ],
    "relatedPatterns": ["怎么样", "为什么"],
    "notes": "怎么样 fragt nach einer Bewertung: ‹Wie ist/war es?›"
  },
  {
    "pattern": "为什么",
    "level": "HSK1",
    "category": "Satzstrukturen",
    "meaning": "warum",
    "formation": "为什么 + Satz？",
    "explanation": "为什么 fragt nach dem Grund.",
    "examples": [
      { "chinese": "你为什么学中文？", "pinyin": "Nǐ wèi shénme xué Zhōngwén?", "german": "Warum lernst du Chinesisch?" },
      { "chinese": "为什么不行？", "pinyin": "Wèi shénme bù xíng?", "german": "Warum geht das nicht?" }
    ],
    "relatedPatterns": ["因为...所以...", "怎么"],
    "notes": "Antwort mit 因为... (weil...)."
  },

  // ============================================================
  //  HSK 2 – Erweiterte Grammatikmuster (25+)
  // ============================================================

  {
    "pattern": "是...的",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "betont, wie/wann/wo etwas geschah",
    "formation": "Subjekt + 是 + Details + Verb + 的",
    "explanation": "Die 是...的-Konstruktion wird verwendet, um bestimmte Details einer bereits bekannten Handlung zu betonen, z.B. wann, wo oder wie etwas geschehen ist.",
    "examples": [
      { "chinese": "我是去年来中国的。", "pinyin": "Wǒ shì qùnián lái Zhōngguó de.", "german": "Ich bin letztes Jahr nach China gekommen (betont: letztes Jahr)." },
      { "chinese": "你是怎么来的？", "pinyin": "Nǐ shì zěnme lái de?", "german": "Wie bist du gekommen?" }
    ],
    "relatedPatterns": ["了", "过"],
    "notes": "Wird nur für abgeschlossene Handlungen verwendet. Nicht verwechseln mit einfachem 是."
  },
  {
    "pattern": "比",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "Vergleich (mehr als)",
    "formation": "A + 比 + B + Adjektiv",
    "explanation": "比 wird für Vergleiche verwendet und bedeutet ‹mehr als / ...er als›.",
    "examples": [
      { "chinese": "他比我高。", "pinyin": "Tā bǐ wǒ gāo.", "german": "Er ist größer als ich." },
      { "chinese": "今天比昨天冷。", "pinyin": "Jīntiān bǐ zuótiān lěng.", "german": "Heute ist es kälter als gestern." }
    ],
    "relatedPatterns": ["没有...那么", "一样"],
    "notes": "Kein 很 nach 比: ‹他比我很高› ist falsch."
  },
  {
    "pattern": "跟...一样",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "gleich wie / genauso wie",
    "formation": "A + 跟 + B + 一样 (+ Adjektiv)",
    "explanation": "Drückt Gleichheit zwischen zwei Dingen aus.",
    "examples": [
      { "chinese": "你跟他一样高。", "pinyin": "Nǐ gēn tā yíyàng gāo.", "german": "Du bist genauso groß wie er." },
      { "chinese": "这个跟那个一样。", "pinyin": "Zhège gēn nàge yíyàng.", "german": "Dieses ist genauso wie jenes." }
    ],
    "relatedPatterns": ["比", "不一样"],
    "notes": "Verneinung: 跟...不一样 (anders als)."
  },
  {
    "pattern": "没有...那么",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "nicht so ... wie",
    "formation": "A + 没有 + B + 那么 + Adjektiv",
    "explanation": "Negativer Vergleich: A ist nicht so [Adjektiv] wie B.",
    "examples": [
      { "chinese": "我没有他那么高。", "pinyin": "Wǒ méi yǒu tā nàme gāo.", "german": "Ich bin nicht so groß wie er." },
      { "chinese": "今天没有昨天那么热。", "pinyin": "Jīntiān méi yǒu zuótiān nàme rè.", "german": "Heute ist es nicht so heiß wie gestern." }
    ],
    "relatedPatterns": ["比", "跟...一样"],
    "notes": "那么 kann durch 这么 ersetzt werden."
  },
  {
    "pattern": "一边...一边...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "gleichzeitig (einerseits...andererseits)",
    "formation": "一边 + Verb₁ + 一边 + Verb₂",
    "explanation": "Drückt aus, dass zwei Handlungen gleichzeitig stattfinden.",
    "examples": [
      { "chinese": "他一边吃饭一边看电视。", "pinyin": "Tā yìbiān chī fàn yìbiān kàn diànshì.", "german": "Er isst und schaut gleichzeitig fern." },
      { "chinese": "一边走一边聊天。", "pinyin": "Yìbiān zǒu yìbiān liáotiān.", "german": "Gleichzeitig gehen und plaudern." }
    ],
    "relatedPatterns": ["又...又..."],
    "notes": "Beide Handlungen müssen gleichzeitig möglich sein."
  },
  {
    "pattern": "虽然...但是...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "obwohl ... aber ...",
    "formation": "虽然 + Satz₁, 但是 + Satz₂",
    "explanation": "Konzessivsatz: Einräumung eines Umstands mit Gegenaussage.",
    "examples": [
      { "chinese": "虽然很贵，但是很好吃。", "pinyin": "Suīrán hěn guì, dànshì hěn hǎochī.", "german": "Obwohl es teuer ist, schmeckt es gut." },
      { "chinese": "虽然我很累，但是我还要学习。", "pinyin": "Suīrán wǒ hěn lèi, dànshì wǒ hái yào xuéxí.", "german": "Obwohl ich müde bin, muss ich noch lernen." }
    ],
    "relatedPatterns": ["但是", "可是"],
    "notes": "但是 kann durch 可是 ersetzt werden. Im Chinesischen steht ‹aber› trotz ‹obwohl› – anders als im Deutschen."
  },
  {
    "pattern": "因为...所以...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "weil ... deshalb ...",
    "formation": "因为 + Grund, 所以 + Folge",
    "explanation": "Kausalsatz: Angabe von Grund und Folge.",
    "examples": [
      { "chinese": "因为下雨，所以我没去。", "pinyin": "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.", "german": "Weil es geregnet hat, bin ich nicht gegangen." },
      { "chinese": "因为太贵了，所以我没买。", "pinyin": "Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.", "german": "Weil es zu teuer war, habe ich es nicht gekauft." }
    ],
    "relatedPatterns": ["为什么", "所以"],
    "notes": "因为 und 所以 können einzeln verwendet werden, aber nie nur ‹因为› allein (所以 ist dann implizit)."
  },
  {
    "pattern": "如果...就...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "wenn ... dann ...",
    "formation": "如果 + Bedingung, (Subjekt +) 就 + Folge",
    "explanation": "Konditionalsatz: Bedingung und deren Folge.",
    "examples": [
      { "chinese": "如果明天下雨，我就不去了。", "pinyin": "Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.", "german": "Wenn es morgen regnet, gehe ich nicht." },
      { "chinese": "如果你有时间，就来吧。", "pinyin": "Rúguǒ nǐ yǒu shíjiān, jiù lái ba.", "german": "Wenn du Zeit hast, komm doch." }
    ],
    "relatedPatterns": ["要是...就...", "只要...就..."],
    "notes": "要是 ist eine umgangssprachlichere Alternative zu 如果."
  },
  {
    "pattern": "越来越...",
    "level": "HSK2",
    "category": "Adjektive",
    "meaning": "immer mehr / zunehmend",
    "formation": "越来越 + Adjektiv/Verb",
    "explanation": "Drückt eine zunehmende Veränderung aus.",
    "examples": [
      { "chinese": "天气越来越冷了。", "pinyin": "Tiānqì yuè lái yuè lěng le.", "german": "Das Wetter wird immer kälter." },
      { "chinese": "他的中文越来越好。", "pinyin": "Tā de Zhōngwén yuè lái yuè hǎo.", "german": "Sein Chinesisch wird immer besser." }
    ],
    "relatedPatterns": ["越...越..."],
    "notes": "越...越...: Je mehr... desto mehr..."
  },
  {
    "pattern": "越...越...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "je ... desto ...",
    "formation": "越 + Adj₁/Verb₁ + 越 + Adj₂/Verb₂",
    "explanation": "Drückt eine proportionale Beziehung aus: je mehr A, desto mehr B.",
    "examples": [
      { "chinese": "越吃越胖。", "pinyin": "Yuè chī yuè pàng.", "german": "Je mehr man isst, desto dicker wird man." },
      { "chinese": "越快越好。", "pinyin": "Yuè kuài yuè hǎo.", "german": "Je schneller, desto besser." }
    ],
    "relatedPatterns": ["越来越"],
    "notes": "Subjekt kann weggelassen werden."
  },
  {
    "pattern": "把-Konstruktion",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "Objekt vor das Verb stellen (Einwirkung)",
    "formation": "Subjekt + 把 + Objekt + Verb + Komplement",
    "explanation": "把 stellt das Objekt vor das Verb, um zu betonen, was mit dem Objekt geschieht. Das Verb braucht ein Komplement.",
    "examples": [
      { "chinese": "请把门关上。", "pinyin": "Qǐng bǎ mén guānshàng.", "german": "Bitte mach die Tür zu." },
      { "chinese": "我把书放在桌子上了。", "pinyin": "Wǒ bǎ shū fàng zài zhuōzi shàng le.", "german": "Ich habe das Buch auf den Tisch gelegt." }
    ],
    "relatedPatterns": ["被"],
    "notes": "Das Verb darf nicht allein stehen – es braucht 了, ein Komplement oder eine andere Erweiterung."
  },
  {
    "pattern": "被-Passiv",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "Passivkonstruktion",
    "formation": "Subjekt + 被 (+ Agens) + Verb + Komplement",
    "explanation": "被 bildet das Passiv. Wird oft für negative oder unerwünschte Ereignisse verwendet.",
    "examples": [
      { "chinese": "我的手机被偷了。", "pinyin": "Wǒ de shǒujī bèi tōu le.", "german": "Mein Handy wurde gestohlen." },
      { "chinese": "他被老师批评了。", "pinyin": "Tā bèi lǎoshī pīpíng le.", "german": "Er wurde vom Lehrer kritisiert." }
    ],
    "relatedPatterns": ["把"],
    "notes": "被 hat oft eine negative Konnotation, wird aber zunehmend neutral verwendet."
  },
  {
    "pattern": "得 (Grad-/Artangabe)",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "Angabe über Art/Grad einer Handlung",
    "formation": "Verb + 得 + Beschreibung",
    "explanation": "得 verbindet ein Verb mit einer Beschreibung, wie gut/schlecht etc. die Handlung ausgeführt wird.",
    "examples": [
      { "chinese": "他说得很好。", "pinyin": "Tā shuō de hěn hǎo.", "german": "Er spricht sehr gut." },
      { "chinese": "你跑得太快了。", "pinyin": "Nǐ pǎo de tài kuài le.", "german": "Du läufst zu schnell." }
    ],
    "relatedPatterns": ["的", "地"],
    "notes": "Drei de: 的 (Attribut), 得 (Grad/Art), 地 (Adverb)."
  },
  {
    "pattern": "Verb + 完",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "fertig / zu Ende (Resultativkomplement)",
    "formation": "Verb + 完 (+ 了)",
    "explanation": "完 als Komplement zeigt an, dass eine Handlung vollständig abgeschlossen ist.",
    "examples": [
      { "chinese": "我吃完了。", "pinyin": "Wǒ chī wán le.", "german": "Ich habe aufgegessen." },
      { "chinese": "你看完这本书了吗？", "pinyin": "Nǐ kàn wán zhè běn shū le ma?", "german": "Hast du das Buch fertig gelesen?" }
    ],
    "relatedPatterns": ["Verb + 好", "Verb + 到"],
    "notes": "完 = vollständig abgeschlossen, 好 = zufriedenstellend fertig."
  },
  {
    "pattern": "Verb + 到",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "bis zu / erreichen (Resultativkomplement)",
    "formation": "Verb + 到 (+ Ziel/Zeitpunkt)",
    "explanation": "到 als Komplement zeigt an, dass eine Handlung ein Ziel erreicht hat.",
    "examples": [
      { "chinese": "我找到了。", "pinyin": "Wǒ zhǎo dào le.", "german": "Ich habe es gefunden." },
      { "chinese": "他学到了很多。", "pinyin": "Tā xué dào le hěn duō.", "german": "Er hat viel gelernt." }
    ],
    "relatedPatterns": ["Verb + 完", "Verb + 好"],
    "notes": "找到 (finden), 看到 (sehen/erblicken), 听到 (hören)."
  },
  {
    "pattern": "Verb + 好",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "gut/fertig (Resultativkomplement)",
    "formation": "Verb + 好 (+ 了)",
    "explanation": "好 als Komplement zeigt an, dass etwas zufriedenstellend abgeschlossen oder vorbereitet ist.",
    "examples": [
      { "chinese": "饭做好了。", "pinyin": "Fàn zuò hǎo le.", "german": "Das Essen ist fertig (zubereitet)." },
      { "chinese": "准备好了吗？", "pinyin": "Zhǔnbèi hǎo le ma?", "german": "Bist du fertig/bereit?" }
    ],
    "relatedPatterns": ["Verb + 完", "Verb + 到"],
    "notes": "好 betont die Qualität des Ergebnisses."
  },
  {
    "pattern": "过",
    "level": "HSK2",
    "category": "Partikel",
    "meaning": "Erfahrungsaspekt (schon einmal)",
    "formation": "Verb + 过 (+ Objekt)",
    "explanation": "过 nach dem Verb zeigt an, dass man etwas schon einmal erlebt hat.",
    "examples": [
      { "chinese": "我去过中国。", "pinyin": "Wǒ qù guò Zhōngguó.", "german": "Ich war schon mal in China." },
      { "chinese": "你吃过北京烤鸭吗？", "pinyin": "Nǐ chī guò Běijīng kǎoyā ma?", "german": "Hast du schon mal Pekingente gegessen?" }
    ],
    "relatedPatterns": ["了", "没 + Verb + 过"],
    "notes": "Verneinung: 没 + Verb + 过 (我没去过中国)."
  },
  {
    "pattern": "又...又...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "sowohl ... als auch ...",
    "formation": "又 + Adj₁/Verb₁ + 又 + Adj₂/Verb₂",
    "explanation": "又...又... beschreibt zwei gleichzeitig vorhandene Eigenschaften oder Handlungen.",
    "examples": [
      { "chinese": "这个菜又便宜又好吃。", "pinyin": "Zhège cài yòu piányi yòu hǎochī.", "german": "Dieses Gericht ist sowohl günstig als auch lecker." },
      { "chinese": "她又聪明又漂亮。", "pinyin": "Tā yòu cōngming yòu piàoliang.", "german": "Sie ist sowohl klug als auch hübsch." }
    ],
    "relatedPatterns": ["一边...一边..."],
    "notes": "又...又... beschreibt Zustände, 一边...一边... beschreibt Handlungen."
  },
  {
    "pattern": "先...再/然后...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "zuerst ... dann ...",
    "formation": "先 + Verb₁, 再/然后 + Verb₂",
    "explanation": "Drückt eine zeitliche Reihenfolge von Handlungen aus.",
    "examples": [
      { "chinese": "先吃饭，再看电视。", "pinyin": "Xiān chī fàn, zài kàn diànshì.", "german": "Erst essen, dann fernsehen." },
      { "chinese": "我先去超市，然后回家。", "pinyin": "Wǒ xiān qù chāoshì, ránhòu huí jiā.", "german": "Ich gehe zuerst in den Supermarkt, dann nach Hause." }
    ],
    "relatedPatterns": ["以后"],
    "notes": "再 betont die Reihenfolge, 然后 ist neutraler."
  },
  {
    "pattern": "Verb + 着",
    "level": "HSK2",
    "category": "Partikel",
    "meaning": "andauernder Zustand",
    "formation": "Verb + 着",
    "explanation": "着 nach dem Verb beschreibt einen andauernden Zustand (nicht eine Aktion).",
    "examples": [
      { "chinese": "门开着。", "pinyin": "Mén kāi zhe.", "german": "Die Tür steht offen." },
      { "chinese": "他穿着红色的衣服。", "pinyin": "Tā chuān zhe hóngsè de yīfu.", "german": "Er trägt rote Kleidung." }
    ],
    "relatedPatterns": ["在 + Verb", "了"],
    "notes": "着 = Zustand, 在 = laufende Handlung, 了 = Abschluss."
  },
  {
    "pattern": "地 (Adverbpartikel)",
    "level": "HSK2",
    "category": "Partikel",
    "meaning": "Adverb-Marker (Adj → Adverb)",
    "formation": "Adjektiv + 地 + Verb",
    "explanation": "地 wandelt ein Adjektiv in ein Adverb um (ähnlich wie dt. ‹-lich/-weise›).",
    "examples": [
      { "chinese": "他高兴地说。", "pinyin": "Tā gāoxìng de shuō.", "german": "Er sagte fröhlich." },
      { "chinese": "请认真地听。", "pinyin": "Qǐng rènzhēn de tīng.", "german": "Bitte hör aufmerksam zu." }
    ],
    "relatedPatterns": ["的", "得"],
    "notes": "的 = Attribut, 得 = Gradangabe, 地 = Adverb."
  },
  {
    "pattern": "要是...就...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "wenn ... dann ... (umgangssprachlich)",
    "formation": "要是 + Bedingung, 就 + Folge",
    "explanation": "Umgangssprachliche Version von 如果...就... für Bedingungssätze.",
    "examples": [
      { "chinese": "要是你不来，我就自己去。", "pinyin": "Yàoshi nǐ bù lái, wǒ jiù zìjǐ qù.", "german": "Wenn du nicht kommst, gehe ich allein." },
      { "chinese": "要是下雨就别出门了。", "pinyin": "Yàoshi xià yǔ jiù bié chūmén le.", "german": "Wenn es regnet, geh lieber nicht raus." }
    ],
    "relatedPatterns": ["如果...就..."],
    "notes": "要是 wird in der gesprochenen Sprache häufiger verwendet als 如果."
  },
  {
    "pattern": "不但...而且...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "nicht nur ... sondern auch ...",
    "formation": "不但 + Satz₁, 而且 + Satz₂",
    "explanation": "Steigerung: Der zweite Teil geht über den ersten hinaus.",
    "examples": [
      { "chinese": "他不但会说中文，而且会说日文。", "pinyin": "Tā búdàn huì shuō Zhōngwén, érqiě huì shuō Rìwén.", "german": "Er kann nicht nur Chinesisch, sondern auch Japanisch sprechen." },
      { "chinese": "这个地方不但漂亮，而且安静。", "pinyin": "Zhège dìfang búdàn piàoliang, érqiě ānjìng.", "german": "Dieser Ort ist nicht nur schön, sondern auch ruhig." }
    ],
    "relatedPatterns": ["而且", "也"],
    "notes": "Gleiche Subjekte: 不但 steht nach dem Subjekt. Verschiedene Subjekte: 不但 steht vor dem Subjekt."
  },
  {
    "pattern": "一...就...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "sobald ... dann sofort ...",
    "formation": "一 + Verb₁ + 就 + Verb₂",
    "explanation": "Drückt aus, dass Handlung 2 sofort nach Handlung 1 eintritt.",
    "examples": [
      { "chinese": "他一到家就睡觉了。", "pinyin": "Tā yí dào jiā jiù shuìjiào le.", "german": "Sobald er zu Hause ankam, schlief er ein." },
      { "chinese": "我一看就明白了。", "pinyin": "Wǒ yí kàn jiù míngbai le.", "german": "Sobald ich es sah, verstand ich es." }
    ],
    "relatedPatterns": ["就", "才"],
    "notes": "一...就... zeigt unmittelbare Abfolge."
  },
  {
    "pattern": "多 + Verb",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "mehr (tun) / öfter (tun)",
    "formation": "多 + Verb (+ Objekt)",
    "explanation": "多 vor einem Verb fordert auf, etwas häufiger zu tun.",
    "examples": [
      { "chinese": "多喝水。", "pinyin": "Duō hē shuǐ.", "german": "Trink mehr Wasser." },
      { "chinese": "多练习。", "pinyin": "Duō liànxí.", "german": "Übe mehr." }
    ],
    "relatedPatterns": ["少 + Verb"],
    "notes": "少 + Verb = weniger tun: 少吃糖 (Iss weniger Süßes)."
  },

  // ============================================================
  //  HSK 3 – Fortgeschrittene Grammatikmuster (25+)
  // ============================================================

  {
    "pattern": "除了...以外",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "außer / abgesehen von",
    "formation": "除了 + X + 以外, 都/也/还 + Satz",
    "explanation": "除了...以外 schließt etwas aus (mit 都) oder fügt hinzu (mit 也/还).",
    "examples": [
      { "chinese": "除了他以外，大家都来了。", "pinyin": "Chúle tā yǐwài, dàjiā dōu lái le.", "german": "Außer ihm sind alle gekommen." },
      { "chinese": "除了中文以外，我还学日文。", "pinyin": "Chúle Zhōngwén yǐwài, wǒ hái xué Rìwén.", "german": "Außer Chinesisch lerne ich auch Japanisch." }
    ],
    "relatedPatterns": ["都", "还"],
    "notes": "以外 kann weggelassen werden: 除了他, 都来了."
  },
  {
    "pattern": "只要...就...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "solange ... dann ...",
    "formation": "只要 + Bedingung, 就 + Folge",
    "explanation": "Minimale Bedingung: Wenn nur diese Bedingung erfüllt ist, tritt die Folge ein.",
    "examples": [
      { "chinese": "只要努力，就会成功。", "pinyin": "Zhǐyào nǔlì, jiù huì chénggōng.", "german": "Solange man sich anstrengt, wird man Erfolg haben." },
      { "chinese": "只要你来，我就高兴。", "pinyin": "Zhǐyào nǐ lái, wǒ jiù gāoxìng.", "german": "Solange du kommst, bin ich froh." }
    ],
    "relatedPatterns": ["如果...就...", "只有...才..."],
    "notes": "只要 = minimale Bedingung; 只有...才... = notwendige Bedingung."
  },
  {
    "pattern": "只有...才...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "nur wenn ... erst dann ...",
    "formation": "只有 + Bedingung, 才 + Folge",
    "explanation": "Notwendige Bedingung: Nur unter dieser Bedingung tritt die Folge ein.",
    "examples": [
      { "chinese": "只有努力学习，才能考好。", "pinyin": "Zhǐyǒu nǔlì xuéxí, cái néng kǎo hǎo.", "german": "Nur wenn man fleißig lernt, kann man die Prüfung bestehen." },
      { "chinese": "只有你才能帮我。", "pinyin": "Zhǐyǒu nǐ cái néng bāng wǒ.", "german": "Nur du kannst mir helfen." }
    ],
    "relatedPatterns": ["只要...就...", "才"],
    "notes": "才 betont, dass das Ergebnis erst spät oder unter bestimmten Umständen eintritt."
  },
  {
    "pattern": "连...都/也...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "sogar ... auch/noch ...",
    "formation": "连 + extremes Beispiel + 都/也 + Verb",
    "explanation": "Betont ein Extrem: ‹Sogar X ...› um die Stärke einer Aussage zu unterstreichen.",
    "examples": [
      { "chinese": "他连自己的名字都不会写。", "pinyin": "Tā lián zìjǐ de míngzì dōu bú huì xiě.", "german": "Er kann nicht einmal seinen eigenen Namen schreiben." },
      { "chinese": "连小孩子也知道。", "pinyin": "Lián xiǎo háizi yě zhīdào.", "german": "Sogar Kinder wissen das." }
    ],
    "relatedPatterns": ["都", "也"],
    "notes": "Das Beispiel nach 连 sollte extrem/unerwartet sein."
  },
  {
    "pattern": "对...来说",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "für ... (gesprochen) / aus Sicht von ...",
    "formation": "对 + Person/Sache + 来说, Satz",
    "explanation": "Gibt eine Perspektive an: aus der Sicht von jemandem.",
    "examples": [
      { "chinese": "对我来说，中文很难。", "pinyin": "Duì wǒ lái shuō, Zhōngwén hěn nán.", "german": "Für mich ist Chinesisch schwer." },
      { "chinese": "对他来说，这不是问题。", "pinyin": "Duì tā lái shuō, zhè bú shì wèntí.", "german": "Für ihn ist das kein Problem." }
    ],
    "relatedPatterns": ["关于", "对于"],
    "notes": "Kann auch mit 对于 eingeleitet werden (formeller)."
  },
  {
    "pattern": "关于",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "bezüglich / über / in Bezug auf",
    "formation": "关于 + Thema, Satz",
    "explanation": "Leitet ein Thema ein, über das gesprochen wird.",
    "examples": [
      { "chinese": "关于这个问题，我想说几句。", "pinyin": "Guānyú zhège wèntí, wǒ xiǎng shuō jǐ jù.", "german": "Bezüglich dieses Problems möchte ich ein paar Worte sagen." },
      { "chinese": "关于中国文化，你了解多少？", "pinyin": "Guānyú Zhōngguó wénhuà, nǐ liǎojiě duōshao?", "german": "Wie viel weißt du über chinesische Kultur?" }
    ],
    "relatedPatterns": ["对...来说", "对于"],
    "notes": "关于 steht am Satzanfang oder als Attribut: 关于中国的书."
  },
  {
    "pattern": "Verb + 起来",
    "level": "HSK3",
    "category": "Verben",
    "meaning": "anfangen zu / beim (Eindruck)",
    "formation": "Verb + 起来",
    "explanation": "起来 als Komplement hat mehrere Bedeutungen: Beginn einer Handlung oder subjektiver Eindruck.",
    "examples": [
      { "chinese": "他笑了起来。", "pinyin": "Tā xiào le qǐlái.", "german": "Er fing an zu lachen." },
      { "chinese": "这个看起来很好吃。", "pinyin": "Zhège kàn qǐlái hěn hǎochī.", "german": "Das sieht lecker aus." }
    ],
    "relatedPatterns": ["Verb + 下去", "Verb + 出来"],
    "notes": "看起来 = sieht aus wie, 听起来 = klingt wie, 想起来 = sich erinnern."
  },
  {
    "pattern": "Verb + 下去",
    "level": "HSK3",
    "category": "Verben",
    "meaning": "weiter(machen) / fortsetzen",
    "formation": "Verb + 下去",
    "explanation": "下去 als Komplement bedeutet, eine Handlung fortzusetzen.",
    "examples": [
      { "chinese": "请说下去。", "pinyin": "Qǐng shuō xiàqù.", "german": "Bitte sprich weiter." },
      { "chinese": "这样下去不行。", "pinyin": "Zhèyàng xiàqù bù xíng.", "german": "So kann es nicht weitergehen." }
    ],
    "relatedPatterns": ["Verb + 起来", "Verb + 出来"],
    "notes": "下去 impliziert Fortdauer in die Zukunft."
  },
  {
    "pattern": "Verb + 出来",
    "level": "HSK3",
    "category": "Verben",
    "meaning": "heraus- / erkennen / hervorbringen",
    "formation": "Verb + 出来",
    "explanation": "出来 als Komplement bedeutet ‹heraus› (wörtlich) oder ‹erkennen/identifizieren› (übertragen).",
    "examples": [
      { "chinese": "我看出来了。", "pinyin": "Wǒ kàn chūlái le.", "german": "Ich habe es erkannt/gemerkt." },
      { "chinese": "你能听出来吗？", "pinyin": "Nǐ néng tīng chūlái ma?", "german": "Kannst du es heraushören?" }
    ],
    "relatedPatterns": ["Verb + 起来", "Verb + 下去"],
    "notes": "看出来 = erkennen, 说出来 = aussprechen, 想出来 = sich ausdenken."
  },
  {
    "pattern": "Verb + 下来",
    "level": "HSK3",
    "category": "Verben",
    "meaning": "herunter- / festhalten / sich beruhigen",
    "formation": "Verb + 下来",
    "explanation": "下来 als Komplement bedeutet ‹herunter› (wörtlich) oder ‹festhalten, speichern› (übertragen).",
    "examples": [
      { "chinese": "请你记下来。", "pinyin": "Qǐng nǐ jì xiàlái.", "german": "Bitte schreib es dir auf." },
      { "chinese": "冷静下来。", "pinyin": "Lěngjìng xiàlái.", "german": "Beruhige dich." }
    ],
    "relatedPatterns": ["Verb + 下去", "Verb + 起来"],
    "notes": "下来 = Zustand wird fixiert; 下去 = Handlung geht weiter."
  },
  {
    "pattern": "Verb + 得了/不了",
    "level": "HSK3",
    "category": "Verben",
    "meaning": "können / nicht können (Potentialkomplement)",
    "formation": "Verb + 得了 / Verb + 不了",
    "explanation": "了 (liǎo) als Potentialkomplement zeigt an, ob eine Handlung möglich ist.",
    "examples": [
      { "chinese": "这么多，吃得了吗？", "pinyin": "Zhème duō, chī de liǎo ma?", "german": "So viel, kannst du das aufessen?" },
      { "chinese": "我走不了了。", "pinyin": "Wǒ zǒu bù liǎo le.", "german": "Ich kann nicht (mehr) gehen." }
    ],
    "relatedPatterns": ["Verb + 得/不 + Komplement"],
    "notes": "了 wird hier liǎo ausgesprochen, nicht le."
  },
  {
    "pattern": "Verb + 得/不 + Komplement",
    "level": "HSK3",
    "category": "Verben",
    "meaning": "Potentialkomplement (können/nicht können)",
    "formation": "Verb + 得/不 + Resultativ",
    "explanation": "Zeigt an, ob ein bestimmtes Ergebnis erreicht werden kann oder nicht.",
    "examples": [
      { "chinese": "我听得懂。", "pinyin": "Wǒ tīng de dǒng.", "german": "Ich kann es verstehen (beim Hören)." },
      { "chinese": "我看不见。", "pinyin": "Wǒ kàn bú jiàn.", "german": "Ich kann es nicht sehen." }
    ],
    "relatedPatterns": ["Verb + 得了/不了", "得"],
    "notes": "听得懂/听不懂, 看得见/看不见, 买得起/买不起."
  },
  {
    "pattern": "无论/不管...都...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "egal ob ... alles/immer ...",
    "formation": "无论/不管 + Fragewort/Alternative, 都 + Satz",
    "explanation": "Drückt aus, dass das Ergebnis unabhängig von den Umständen gleich bleibt.",
    "examples": [
      { "chinese": "不管多难，我都不放弃。", "pinyin": "Bùguǎn duō nán, wǒ dōu bú fàngqì.", "german": "Egal wie schwer es ist, ich gebe nicht auf." },
      { "chinese": "无论谁来，都欢迎。", "pinyin": "Wúlùn shéi lái, dōu huānyíng.", "german": "Egal wer kommt, alle sind willkommen." }
    ],
    "relatedPatterns": ["都", "连...都..."],
    "notes": "不管 ist umgangssprachlicher als 无论."
  },
  {
    "pattern": "既然...就...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "da nun einmal ... dann eben ...",
    "formation": "既然 + Tatsache, 就 + Schlussfolgerung",
    "explanation": "Zieht eine logische Schlussfolgerung aus einer bekannten Tatsache.",
    "examples": [
      { "chinese": "既然你来了，就坐一会儿吧。", "pinyin": "Jìrán nǐ lái le, jiù zuò yíhuìr ba.", "german": "Da du nun einmal da bist, setz dich doch kurz." },
      { "chinese": "既然不喜欢，就别买了。", "pinyin": "Jìrán bù xǐhuan, jiù bié mǎi le.", "german": "Wenn du es nicht magst, kauf es eben nicht." }
    ],
    "relatedPatterns": ["因为...所以...", "如果...就..."],
    "notes": "既然 bezieht sich auf eine bereits bestehende Tatsache, nicht auf eine Hypothese."
  },
  {
    "pattern": "不是...而是...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "nicht ... sondern ...",
    "formation": "不是 + A, 而是 + B",
    "explanation": "Korrigiert eine Annahme: Es ist nicht A, sondern B.",
    "examples": [
      { "chinese": "不是我不想去，而是没时间。", "pinyin": "Bú shì wǒ bù xiǎng qù, ér shì méi shíjiān.", "german": "Es ist nicht so, dass ich nicht gehen will, sondern ich habe keine Zeit." },
      { "chinese": "不是他做的，而是我做的。", "pinyin": "Bú shì tā zuò de, ér shì wǒ zuò de.", "german": "Nicht er hat es gemacht, sondern ich." }
    ],
    "relatedPatterns": ["而且", "不但...而且..."],
    "notes": "而是 korrigiert, 而且 ergänzt."
  },
  {
    "pattern": "一方面...另一方面...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "einerseits ... andererseits ...",
    "formation": "一方面 + Aspekt₁, 另一方面 + Aspekt₂",
    "explanation": "Stellt zwei verschiedene Aspekte oder Perspektiven gegenüber.",
    "examples": [
      { "chinese": "一方面我想去，另一方面我没有时间。", "pinyin": "Yì fāngmiàn wǒ xiǎng qù, lìng yì fāngmiàn wǒ méi yǒu shíjiān.", "german": "Einerseits will ich gehen, andererseits habe ich keine Zeit." },
      { "chinese": "一方面要学习，另一方面要工作。", "pinyin": "Yì fāngmiàn yào xuéxí, lìng yì fāngmiàn yào gōngzuò.", "german": "Einerseits muss man lernen, andererseits muss man arbeiten." }
    ],
    "relatedPatterns": ["虽然...但是..."],
    "notes": "Weniger kontrastiv als 虽然...但是..., eher eine Abwägung."
  },
  {
    "pattern": "尽管...还是...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "obwohl / trotzdem ... dennoch ...",
    "formation": "尽管 + Umstand, 还是 + Ergebnis",
    "explanation": "Stärkerer Konzessivsatz als 虽然: Trotz eines Umstands bleibt das Ergebnis.",
    "examples": [
      { "chinese": "尽管很累，他还是坚持工作。", "pinyin": "Jǐnguǎn hěn lèi, tā háishi jiānchí gōngzuò.", "german": "Obwohl er sehr müde ist, arbeitet er dennoch weiter." },
      { "chinese": "尽管下雨，我们还是出去了。", "pinyin": "Jǐnguǎn xià yǔ, wǒmen háishi chūqù le.", "german": "Obwohl es regnete, sind wir trotzdem rausgegangen." }
    ],
    "relatedPatterns": ["虽然...但是...", "即使...也..."],
    "notes": "尽管 betont die Tatsächlichkeit des Umstands stärker als 虽然."
  },
  {
    "pattern": "即使...也...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "selbst wenn ... auch ...",
    "formation": "即使 + hypothetischer Umstand, 也 + Ergebnis",
    "explanation": "Hypothetische Konzession: Auch wenn etwas (hypothetisch) eintritt, ändert sich nichts.",
    "examples": [
      { "chinese": "即使下雨，我也去。", "pinyin": "Jíshǐ xià yǔ, wǒ yě qù.", "german": "Selbst wenn es regnet, gehe ich." },
      { "chinese": "即使很难，也要试试。", "pinyin": "Jíshǐ hěn nán, yě yào shìshi.", "german": "Selbst wenn es schwer ist, muss man es versuchen." }
    ],
    "relatedPatterns": ["尽管...还是...", "虽然...但是..."],
    "notes": "即使 = hypothetisch; 尽管 = tatsächlich."
  },
  {
    "pattern": "与其...不如...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "lieber ... als ... / anstatt ...",
    "formation": "与其 + A, 不如 + B",
    "explanation": "Vergleicht zwei Optionen und bevorzugt B gegenüber A.",
    "examples": [
      { "chinese": "与其在家看电视，不如出去走走。", "pinyin": "Yǔqí zài jiā kàn diànshì, bùrú chūqù zǒuzou.", "german": "Anstatt zu Hause fernzusehen, geh doch lieber spazieren." },
      { "chinese": "与其等他，不如自己先去。", "pinyin": "Yǔqí děng tā, bùrú zìjǐ xiān qù.", "german": "Anstatt auf ihn zu warten, geh lieber schon mal vor." }
    ],
    "relatedPatterns": ["还是", "比"],
    "notes": "Drückt eine klare Präferenz aus."
  },
  {
    "pattern": "把...当作...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "etw. als etw. betrachten / halten für",
    "formation": "把 + A + 当作 + B",
    "explanation": "Behandelt A so, als wäre es B.",
    "examples": [
      { "chinese": "他把中国当作第二个家。", "pinyin": "Tā bǎ Zhōngguó dàngzuò dì-èr gè jiā.", "german": "Er betrachtet China als seine zweite Heimat." },
      { "chinese": "别把我当作小孩子。", "pinyin": "Bié bǎ wǒ dàngzuò xiǎo háizi.", "german": "Behandle mich nicht wie ein kleines Kind." }
    ],
    "relatedPatterns": ["把", "看作"],
    "notes": "当作 und 当成 sind austauschbar."
  },
  {
    "pattern": "不仅...还/而且...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "nicht nur ... sondern auch ...",
    "formation": "不仅 + Satz₁, 还/而且 + Satz₂",
    "explanation": "Ähnlich wie 不但...而且..., aber etwas formeller.",
    "examples": [
      { "chinese": "他不仅聪明，还很努力。", "pinyin": "Tā bùjǐn cōngming, hái hěn nǔlì.", "german": "Er ist nicht nur klug, sondern auch sehr fleißig." },
      { "chinese": "这不仅是我的问题，而且是大家的问题。", "pinyin": "Zhè bùjǐn shì wǒ de wèntí, érqiě shì dàjiā de wèntí.", "german": "Das ist nicht nur mein Problem, sondern das Problem aller." }
    ],
    "relatedPatterns": ["不但...而且..."],
    "notes": "不仅 ist etwas formeller als 不但."
  },
  {
    "pattern": "之所以...是因为...",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "der Grund, warum ... ist, dass ...",
    "formation": "之所以 + Ergebnis, 是因为 + Grund",
    "explanation": "Betont den Grund für ein bekanntes Ergebnis. Umkehrung von 因为...所以...",
    "examples": [
      { "chinese": "我之所以学中文，是因为喜欢中国文化。", "pinyin": "Wǒ zhī suǒyǐ xué Zhōngwén, shì yīnwèi xǐhuan Zhōngguó wénhuà.", "german": "Der Grund, warum ich Chinesisch lerne, ist, dass ich die chinesische Kultur mag." },
      { "chinese": "他之所以迟到，是因为堵车了。", "pinyin": "Tā zhī suǒyǐ chídào, shì yīnwèi dǔchē le.", "german": "Der Grund, warum er zu spät kam, ist der Stau." }
    ],
    "relatedPatterns": ["因为...所以..."],
    "notes": "Formellerer Stil, eher schriftsprachlich."
  },
  {
    "pattern": "由于",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "aufgrund von / wegen",
    "formation": "由于 + Grund, Satz",
    "explanation": "Formeller Ausdruck für ‹weil/aufgrund›. Eher schriftsprachlich.",
    "examples": [
      { "chinese": "由于天气不好，航班取消了。", "pinyin": "Yóuyú tiānqì bù hǎo, hángbān qǔxiāo le.", "german": "Aufgrund des schlechten Wetters wurde der Flug gestrichen." },
      { "chinese": "由于时间有限，我们先讨论第一个问题。", "pinyin": "Yóuyú shíjiān yǒuxiàn, wǒmen xiān tǎolùn dì-yī gè wèntí.", "german": "Da die Zeit begrenzt ist, besprechen wir zuerst das erste Problem." }
    ],
    "relatedPatterns": ["因为...所以...", "之所以...是因为..."],
    "notes": "由于 klingt formeller als 因为."
  },
  {
    "pattern": "以为",
    "level": "HSK3",
    "category": "Verben",
    "meaning": "fälschlich annehmen / denken (dass)",
    "formation": "Subjekt + 以为 + (falsche Annahme)",
    "explanation": "以为 zeigt an, dass jemand etwas (irrtümlich) glaubte.",
    "examples": [
      { "chinese": "我以为你不来了。", "pinyin": "Wǒ yǐwéi nǐ bù lái le.", "german": "Ich dachte, du kommst nicht mehr." },
      { "chinese": "他以为我是中国人。", "pinyin": "Tā yǐwéi wǒ shì Zhōngguó rén.", "german": "Er dachte (fälschlich), ich sei Chinese." }
    ],
    "relatedPatterns": ["觉得", "认为"],
    "notes": "以为 = falsche Annahme; 认为 = (neutrale) Meinung; 觉得 = finden/fühlen."
  },
  {
    "pattern": "恐怕",
    "level": "HSK3",
    "category": "Partikel",
    "meaning": "befürchte, dass / wahrscheinlich (negativ)",
    "formation": "恐怕 + Satz",
    "explanation": "Drückt eine Befürchtung oder vorsichtige negative Einschätzung aus.",
    "examples": [
      { "chinese": "恐怕明天会下雨。", "pinyin": "Kǒngpà míngtiān huì xià yǔ.", "german": "Ich fürchte, morgen wird es regnen." },
      { "chinese": "恐怕来不及了。", "pinyin": "Kǒngpà lái bù jí le.", "german": "Ich fürchte, es reicht zeitlich nicht mehr." }
    ],
    "relatedPatterns": ["可能", "大概"],
    "notes": "恐怕 wird für negative Vorhersagen oder höfliche Absagen verwendet."
  },
  {
    "pattern": "Verb/Adj + 极了",
    "level": "HSK3",
    "category": "Adjektive",
    "meaning": "äußerst / extrem",
    "formation": "Adjektiv/Verb + 极了",
    "explanation": "极了 verstärkt ein Adjektiv oder Verb zum Maximum.",
    "examples": [
      { "chinese": "好极了！", "pinyin": "Hǎo jí le!", "german": "Ausgezeichnet!" },
      { "chinese": "我累极了。", "pinyin": "Wǒ lèi jí le.", "german": "Ich bin todmüde." }
    ],
    "relatedPatterns": ["太...了", "非常"],
    "notes": "极了 ist stärker als 非常 und 太...了."
  },
  {
    "pattern": "再说",
    "level": "HSK3",
    "category": "Satzstrukturen",
    "meaning": "außerdem / und darüber hinaus",
    "formation": "Satz₁, 再说 + Satz₂",
    "explanation": "Fügt einen weiteren Grund oder eine Ergänzung hinzu.",
    "examples": [
      { "chinese": "我不想去，再说我也没时间。", "pinyin": "Wǒ bù xiǎng qù, zàishuō wǒ yě méi shíjiān.", "german": "Ich will nicht gehen, außerdem habe ich keine Zeit." },
      { "chinese": "这个太贵了，再说质量也不好。", "pinyin": "Zhège tài guì le, zàishuō zhìliàng yě bù hǎo.", "german": "Das ist zu teuer, und die Qualität ist auch nicht gut." }
    ],
    "relatedPatterns": ["而且", "另外"],
    "notes": "再说 steht am Anfang des zweiten Satzes."
  },
  {
    "pattern": "倒",
    "level": "HSK3",
    "category": "Partikel",
    "meaning": "allerdings / eigentlich / im Gegenteil",
    "formation": "Subjekt + 倒 + Verb/Adjektiv",
    "explanation": "倒 drückt einen Kontrast zu Erwartungen aus oder mildert eine Aussage ab.",
    "examples": [
      { "chinese": "这个地方倒不错。", "pinyin": "Zhège dìfang dào búcuò.", "german": "Dieser Ort ist eigentlich gar nicht schlecht." },
      { "chinese": "他倒很聪明。", "pinyin": "Tā dào hěn cōngming.", "german": "Er ist allerdings ziemlich klug." }
    ],
    "relatedPatterns": ["却", "反而"],
    "notes": "倒 signalisiert oft, dass etwas anders ist als erwartet."
  },
  {
    "pattern": "反而",
    "level": "HSK3",
    "category": "Partikel",
    "meaning": "im Gegenteil / stattdessen",
    "formation": "Satz₁, 反而 + unerwartetes Ergebnis",
    "explanation": "Drückt aus, dass das Gegenteil des Erwarteten eingetreten ist.",
    "examples": [
      { "chinese": "吃了药，反而更严重了。", "pinyin": "Chī le yào, fǎn'ér gèng yánzhòng le.", "german": "Nachdem er Medizin genommen hat, wurde es stattdessen schlimmer." },
      { "chinese": "他不但没生气，反而笑了。", "pinyin": "Tā búdàn méi shēngqì, fǎn'ér xiào le.", "german": "Er war nicht nur nicht wütend, sondern lachte sogar." }
    ],
    "relatedPatterns": ["倒", "却"],
    "notes": "反而 betont einen starken Kontrast zum Erwarteten."
  }
];
