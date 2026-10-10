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
    "meaning": "vertraute Anrede vor Familiennamen (für Jüngere)",
    "formation": "小 + Familienname (vertraute Anrede)",
    "notes": "Gegenstück ist 老 (lǎo) vor dem Familiennamen: 老王 (Lǎo Wáng) nennt ältere Bekannte, vertraut und respektvoll zugleich (eigener Punkt, HSK 3). 小 als gewöhnliches Adjektiv „klein“ (小狗 (xiǎo gǒu) „kleiner Hund“) ist keine Vorsilbe.",
    "explanation": "Die Vorsilbe 小 (xiǎo, wörtlich „klein“) steht vor einem einsilbigen Familiennamen und bildet eine freundliche, vertraute Anrede: 小王 (Xiǎo Wáng), 小李 (Xiǎo Lǐ), 小张 (Xiǎo Zhāng). So nennt man jüngere Kollegen, Freunde oder Mitschüler, oder Ältere sprechen so Jüngere an. Gegenüber älteren oder ranghöheren Personen wirkt 小 respektlos; dort sagt man z. B. 王老师 (Wáng lǎoshī). Auch in Kose- und Kindernamen ist 小 häufig: 小明 (Xiǎo Míng). Ins Deutsche übersetzt man solche Anreden meist einfach mit dem Namen.",
    "examples": [
      {
        "chinese": "小王，你明天来吗？",
        "pinyin": "Xiǎo Wáng, nǐ míngtiān lái ma?",
        "german": "Xiao Wang, kommst du morgen?"
      },
      {
        "chinese": "这是我的好朋友小李。",
        "pinyin": "Zhè shì wǒ de hǎo péngyou Xiǎo Lǐ.",
        "german": "Das ist mein guter Freund Xiao Li."
      },
      {
        "chinese": "小张今年二十岁，是我们班的学生。",
        "pinyin": "Xiǎo Zhāng jīnnián èrshí suì, shì wǒmen bān de xuésheng.",
        "german": "Xiao Zhang ist dieses Jahr zwanzig und Student in unserem Kurs."
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "小",
      "distractors": [
        {
          "text": "老",
          "reason": "老 vor dem Familiennamen nennt ältere Bekannte; für einen Zwanzigjährigen im Kurs passt die vertraute Anrede mit 小."
        },
        {
          "text": "第",
          "reason": "第 bildet Ordnungszahlen und steht vor Zahlwörtern, nicht vor Namen."
        },
        {
          "text": "们",
          "reason": "们 ist eine Nachsilbe für den Plural und steht nach einer Personenbezeichnung, nie vor einem Namen."
        }
      ]
    },
    "related": [
      "g:老—",
      "g:第—"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Vorsilbe für Ordnungszahlen: der erste, zweite …",
    "formation": "第 + Zahl (+ Zählwort) (+ Nomen)",
    "notes": "Bei Datum, Stockwerk oder Klassenstufe steht die Zahl oft ohne 第: 二月 (èryuè) „Februar“, aber 第二个月 (dì'èr ge yuè) „der zweite Monat“; 三楼 (sān lóu) „dritter Stock“ (siehe Ordnungszahlen ohne 第, HSK 2).",
    "explanation": "第 (dì) vor einer Zahl macht daraus eine Ordnungszahl: 第一 (dìyī) „der/die/das Erste“, 第二 (dì'èr) „Zweite“, 第十 (dìshí) „Zehnte“. Vor einem Nomen steht meist ein Zählwort dazwischen: 第一个人 (dìyī ge rén) „der erste Mensch“, 第三本书 (dìsān běn shū) „das dritte Buch“. Wörter, die selbst als Zählwort dienen, folgen direkt: 第一次 (dìyī cì) „das erste Mal“, 第五课 (dìwǔ kè) „Lektion fünf“. Nach 第 steht immer 二, nie 两: 第二个, nicht 第两个. 一 behält in Ordnungszahlen seinen ersten Ton (dìyī).",
    "examples": [
      {
        "chinese": "这是我第一次来中国。",
        "pinyin": "Zhè shì wǒ dìyī cì lái Zhōngguó.",
        "german": "Ich bin zum ersten Mal in China."
      },
      {
        "chinese": "第二个问题是什么？",
        "pinyin": "Dì'èr ge wèntí shì shénme?",
        "german": "Wie lautet die zweite Frage?"
      },
      {
        "chinese": "我们今天学第五课。",
        "pinyin": "Wǒmen jīntiān xué dìwǔ kè.",
        "german": "Heute lernen wir Lektion fünf."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "第",
      "distractors": [
        {
          "text": "每",
          "reason": "每 bedeutet „jeder“ und verlangt 两 statt 二; gemeint ist hier die zweite Frage, nicht jede."
        },
        {
          "text": "几",
          "reason": "几 fragt „wie viele“ und ersetzt die Zahl; es steht nicht vor einer Zahl."
        },
        {
          "text": "小",
          "reason": "小 ist eine Vorsilbe für vertraute Anreden vor Namen, nicht vor Zahlen."
        }
      ]
    },
    "related": [
      "g:序数表达法1：第+数词",
      "g:序数表示法2：数词+量词",
      "g:小—"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Pluralendung für Personen",
    "formation": "Pronomen / Personenbezeichnung + 们",
    "notes": "Für Dinge steht 们 normalerweise nicht (nicht 书们); nur 它们 (tāmen) „sie“ für Tiere und Dinge. 咱们 (zánmen) aus HSK 3 ist ein „wir“, das den Angesprochenen einschließt.",
    "explanation": "Die Nachsilbe 们 (men, neutraler Ton) bildet den Plural von Personalpronomen – 我们 (wǒmen) „wir“, 你们 (nǐmen) „ihr“, 他们 (tāmen) „sie“ – und von Nomen für Personen: 老师们 (lǎoshīmen) „die Lehrer“, 朋友们 (péngyoumen) „(liebe) Freunde“. Bei Nomen ist 们 nicht nötig, denn 学生 (xuésheng) kann auch „Schüler“ (Plural) heißen; man benutzt es vor allem, wenn eine Gruppe angesprochen oder betont wird: 同学们 (tóngxuémen) „liebe Mitschüler“. Typischer Fehler: 们 zusammen mit Zahl oder Mengenangabe – richtig sind 三个学生 (sān ge xuésheng) und 很多朋友 (hěn duō péngyou), nicht 三个学生们 oder 很多朋友们.",
    "examples": [
      {
        "chinese": "老师们都很忙。",
        "pinyin": "Lǎoshīmen dōu hěn máng.",
        "german": "Die Lehrer sind alle sehr beschäftigt."
      },
      {
        "chinese": "孩子们在外面玩。",
        "pinyin": "Háizimen zài wàimiàn wán.",
        "german": "Die Kinder spielen draußen."
      },
      {
        "chinese": "朋友们，你们好！",
        "pinyin": "Péngyoumen, nǐmen hǎo!",
        "german": "Hallo, liebe Freunde!"
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "们",
      "distractors": [
        {
          "text": "的",
          "reason": "老师的 hieße „die (Sachen) des Lehrers“; das passt nicht zu „sind beschäftigt“."
        },
        {
          "text": "些",
          "reason": "些 steht nach 这/那 vor dem Nomen (这些老师), nicht als Endung nach dem Nomen."
        },
        {
          "text": "个",
          "reason": "个 ist ein Zählwort und steht zwischen Zahl und Nomen, nicht nach dem Nomen."
        }
      ]
    },
    "related": [
      "g:人称代词@HSK1",
      "g:咱们"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Nachsilbe für Ortswörter: oben, vorne, links …",
    "formation": "Richtungswort (上/下/里/外/前/后/左/右/旁) + 边",
    "notes": "Nicht verwechseln mit 一边 (yìbiān) „gleichzeitig“ (HSK 3) und dem Nomen 边 „Rand, Ufer“ (河边 (hébiān) „am Fluss“). Auch 这边 (zhèbian) „hier“ und 那边 (nàbian) „dort“ werden mit 边 gebildet.",
    "explanation": "Die Nachsilbe 边 (bian, meist neutraler Ton; wörtlich „Seite“) macht aus einem Richtungswort ein selbstständiges Ortswort: 上边 (shàngbian) „oben“, 下边 (xiàbian) „unten“, 里边 (lǐbian) „drinnen“, 外边 (wàibian) „draußen“, 前边 (qiánbian) „vorne“, 后边 (hòubian) „hinten“, 左边 (zuǒbian) „links“, 右边 (yòubian) „rechts“, 旁边 (pángbiān) „daneben“. Diese Wörter können allein Subjekt oder Objekt sein (前边有一个商店) oder nach einem Nomen stehen, mit oder ohne 的: 学校(的)后边 „hinter der Schule“. Dieselbe Bedeutung hat 面 (miàn): 前面 (qiánmiàn) = 前边; 边 klingt etwas umgangssprachlicher.",
    "examples": [
      {
        "chinese": "学校前边有一个商店。",
        "pinyin": "Xuéxiào qiánbian yǒu yí ge shāngdiàn.",
        "german": "Vor der Schule gibt es einen Laden."
      },
      {
        "chinese": "我的手机在桌子上边。",
        "pinyin": "Wǒ de shǒujī zài zhuōzi shàngbian.",
        "german": "Mein Handy liegt auf dem Tisch."
      },
      {
        "chinese": "他坐在我左边。",
        "pinyin": "Tā zuò zài wǒ zuǒbian.",
        "german": "Er sitzt links von mir."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "边",
      "distractors": [
        {
          "text": "们",
          "reason": "们 bildet den Plural von Personen; es macht aus 前 kein Ortswort."
        },
        {
          "text": "里",
          "reason": "里 ist selbst ein Richtungswort; 前 und 里 ergeben zusammen kein Ortswort."
        },
        {
          "text": "子",
          "reason": "子 ist eine Nachsilbe für Nomen wie 桌子; 前子 gibt es nicht."
        }
      ],
      "accepted": [
        "面"
      ]
    },
    "related": [
      "g:方位名词@HSK1",
      "g:其他结构类型：方位短语",
      "g:一边……，一边……"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "words": [
      "上",
      "下",
      "里",
      "外",
      "前",
      "后"
    ],
    "meaning": "Richtungswörter: oben, unten, innen, außen, vorn, hinten",
    "formation": "Nomen + 上/下/里/外/前/后",
    "notes": "Mit 边 werden daraus selbstständige Ortswörter: 上边 (shàngbian), 前边 (qiánbian) … 左 (zuǒ) „links“ und 右 (yòu) „rechts“ folgen in HSK 2.",
    "explanation": "Chinesisch drückt die Lage mit einem Richtungswort NACH dem Nomen aus, oft mit 在 (zài): 在桌子上 (zài zhuōzi shàng) „auf dem Tisch“. Die einsilbigen Formen hängen meist an einem Nomen; als selbstständiges Ortswort (Subjekt, Objekt) nimmt man meist die Formen mit 边/面: 上边 (shàngbian) „oben“, 里面 (lǐmiàn) „drinnen“.\n上 (shàng) – „auf, oben“: 桌子上 „auf dem Tisch“.\n下 (xià) – „unter, unten“: 椅子下 (yǐzi xià) „unter dem Stuhl“.\n里 (lǐ) – „in, drinnen“: 房间里 (fángjiān lǐ) „im Zimmer“. Nach Länder- und Städtenamen steht kein 里: 在中国 (zài Zhōngguó), nicht 在中国里.\n外 (wài) – „außen, draußen“: 门外 (mén wài) „vor der Tür“.\n前 (qián) – „vor, vorn“; auch zeitlich: 饭前 (fàn qián) „vor dem Essen“.\n后 (hòu) – „hinter, hinten“; zeitlich „nach“: 下课后 (xiàkè hòu) „nach dem Unterricht“.",
    "examples": [
      {
        "chinese": "你的书在桌子上。",
        "pinyin": "Nǐ de shū zài zhuōzi shàng.",
        "german": "Dein Buch liegt auf dem Tisch."
      },
      {
        "chinese": "小狗在椅子下睡觉。",
        "pinyin": "Xiǎo gǒu zài yǐzi xià shuìjiào.",
        "german": "Der kleine Hund schläft unter dem Stuhl."
      },
      {
        "chinese": "妈妈在房间里看书。",
        "pinyin": "Māma zài fángjiān lǐ kàn shū.",
        "german": "Mama liest im Zimmer."
      },
      {
        "chinese": "他在门外等你。",
        "pinyin": "Tā zài mén wài děng nǐ.",
        "german": "Er wartet draußen vor der Tür auf dich."
      },
      {
        "chinese": "饭前要洗手。",
        "pinyin": "Fàn qián yào xǐ shǒu.",
        "german": "Vor dem Essen muss man sich die Hände waschen."
      },
      {
        "chinese": "下课后我们去打球吧。",
        "pinyin": "Xiàkè hòu wǒmen qù dǎ qiú ba.",
        "german": "Lass uns nach dem Unterricht Ball spielen gehen."
      }
    ],
    "related": [
      "g:—边",
      "g:其他结构类型：方位短语",
      "g:左",
      "g:右",
      "g:方位名词@HSK3"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "können (erlernt) / werden (Vermutung)",
    "formation": "Subjekt + 会 + Verb",
    "explanation": "会 (huì) vor einem Verb hat zwei Bedeutungen. 1. Erlernte Fähigkeit: man kann etwas, weil man es gelernt hat – 会说中文 „Chinesisch können“, 会开车 (huì kāichē) „Auto fahren können“. 2. Vermutung über etwas Künftiges: 明天会下雨 „morgen wird es (wahrscheinlich) regnen“. Verneinung: 不会 (bú huì); Frage: 你会……吗? oder 会不会 (huì bu huì). Als Kurzantwort genügt 会 oder 不会. Typischer Fehler: 会 für Erlaubnis oder für Umstände benutzen – „Kannst du morgen kommen?“ heißt 你明天能来吗?, nicht 会.",
    "notes": "会 vs. 能 (néng): 会 = gelernt; 能 = körperlich oder durch die Umstände möglich, auch eine Leistungsmenge (一分钟能写三十个字). Als Resultativkomplement bedeutet 会 „beherrschen“: 学会 (xuéhuì) „erlernen“ (eigener Punkt, HSK 2).",
    "examples": [
      {
        "chinese": "我会说一点儿中文。",
        "pinyin": "Wǒ huì shuō yìdiǎnr Zhōngwén.",
        "german": "Ich kann ein bisschen Chinesisch."
      },
      {
        "chinese": "我妈妈不会开车，她每天坐公交车上班。",
        "pinyin": "Wǒ māma bú huì kāichē, tā měi tiān zuò gōngjiāochē shàngbān.",
        "german": "Meine Mutter kann nicht Auto fahren; sie fährt jeden Tag mit dem Bus zur Arbeit."
      },
      {
        "chinese": "明天会下雨吗？",
        "pinyin": "Míngtiān huì xià yǔ ma?",
        "german": "Wird es morgen regnen?"
      },
      {
        "chinese": "你会不会做中国菜？",
        "pinyin": "Nǐ huì bu huì zuò Zhōngguó cài?",
        "german": "Kannst du chinesisch kochen?"
      }
    ],
    "legacyIds": [
      "g:会 + Verb",
      "会 + Verb"
    ],
    "quiz": {
      "example": 2,
      "answer": "会",
      "distractors": [
        {
          "text": "想",
          "reason": "想 drückt einen Wunsch aus; das Wetter hat keinen Wunsch, gefragt ist eine Vermutung."
        },
        {
          "text": "可以",
          "reason": "可以 fragt nach Erlaubnis oder Möglichkeit für eine Person, nicht nach einer Wettervorhersage."
        },
        {
          "text": "正在",
          "reason": "正在 beschreibt eine gerade laufende Handlung und passt nicht zu 明天."
        }
      ],
      "accepted": [
        "要"
      ]
    },
    "related": [
      "g:能",
      "g:可以",
      "g:想",
      "g:要",
      "g:动词+错/懂/好/会/完"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "können (Umstände, Leistung) / dürfen",
    "formation": "Subjekt + 能 + Verb",
    "explanation": "能 (néng) vor einem Verb sagt, dass etwas möglich ist – weil man körperlich dazu in der Lage ist, weil die Umstände es erlauben oder weil eine bestimmte Leistung erreicht wird: 你明天能来吗? „Kannst du morgen kommen?“, 他一分钟能写三十个字 „Er schafft dreißig Zeichen in der Minute“. Verneint, als 不能 (bù néng), bedeutet es oft „nicht dürfen“: 这里不能打电话 „Hier darf man nicht telefonieren“. Frage mit 能……吗? oder 能不能 (néng bu néng); höfliche Bitte: 你能帮我吗? Typischer Fehler: 能 für eine gelernte Fertigkeit ohne besondere Umstände – „Ich kann Chinesisch“ ist 我会说中文.",
    "notes": "能 vs. 会 (huì): 会 = gelernt; 能 = möglich/in der Lage. Nach einer Krankheit: 我又能走路了 „Ich kann wieder laufen“. 能 vs. 可以 (kěyǐ): bei Erlaubnis oft austauschbar; 可以 klingt in Bitten etwas freundlicher, 不能 (bù néng) ist das übliche Verbot.",
    "examples": [
      {
        "chinese": "你明天能来吗？",
        "pinyin": "Nǐ míngtiān néng lái ma?",
        "german": "Kannst du morgen kommen?"
      },
      {
        "chinese": "他一分钟能写三十个汉字。",
        "pinyin": "Tā yì fēnzhōng néng xiě sānshí ge Hànzì.",
        "german": "Er schafft dreißig Schriftzeichen in der Minute."
      },
      {
        "chinese": "我今天生病了，不能去上课。",
        "pinyin": "Wǒ jīntiān shēngbìng le, bù néng qù shàngkè.",
        "german": "Ich bin heute krank und kann nicht zum Unterricht gehen."
      },
      {
        "chinese": "上课的时候不能玩手机。",
        "pinyin": "Shàngkè de shíhou bù néng wán shǒujī.",
        "german": "Im Unterricht darf man nicht am Handy spielen."
      }
    ],
    "legacyIds": [
      "g:能 + Verb",
      "能 + Verb"
    ],
    "quiz": {
      "example": 1,
      "answer": "能",
      "distractors": [
        {
          "text": "会",
          "reason": "会 nennt eine gelernte Fähigkeit überhaupt; für eine Leistungsmenge (dreißig pro Minute) steht 能."
        },
        {
          "text": "喜欢",
          "reason": "喜欢 nennt eine Vorliebe; mit einer Leistungsangabe wie „dreißig Zeichen pro Minute“ ergibt 一分钟喜欢写 keinen Sinn."
        },
        {
          "text": "正在",
          "reason": "正在 beschreibt eine gerade laufende Handlung und passt nicht zu einer allgemeinen Leistungsangabe."
        }
      ],
      "accepted": [
        "可以"
      ]
    },
    "related": [
      "g:会",
      "g:可以",
      "g:可能",
      "g:能愿动词@HSK3"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "möchten, vorhaben (Wunsch)",
    "formation": "Subjekt + (很) 想 + Verb (+ Objekt)",
    "explanation": "想 (xiǎng) vor einem Verb drückt einen Wunsch oder eine Absicht aus: „möchten, Lust haben, vorhaben“. Es klingt weicher und höflicher als 要 (yào), das einen festen Willen ausdrückt. Anders als 要 lässt sich 想 mit Gradadverbien steigern: 很想 (hěn xiǎng) „sehr gern möchten“. Verneinung: 不想 (bù xiǎng) „keine Lust haben, nicht wollen“. Typischer Fehler: 想 direkt vor ein Nomen setzen, wenn man etwas haben möchte – „Ich möchte einen Kaffee“ ist 我想要一杯咖啡 (wǒ xiǎngyào yì bēi kāfēi) oder 我要一杯咖啡, nicht 我想一杯咖啡.",
    "notes": "Als Vollverb bedeutet 想 „denken“ oder „vermissen“: 我想你 (wǒ xiǎng nǐ) „Ich vermisse dich“, 想家 (xiǎng jiā) „Heimweh haben“.",
    "examples": [
      {
        "chinese": "我想喝一杯咖啡。",
        "pinyin": "Wǒ xiǎng hē yì bēi kāfēi.",
        "german": "Ich möchte einen Kaffee trinken."
      },
      {
        "chinese": "晚上你想吃什么？",
        "pinyin": "Wǎnshang nǐ xiǎng chī shénme?",
        "german": "Was möchtest du heute Abend essen?"
      },
      {
        "chinese": "我很想去中国，但是没有时间。",
        "pinyin": "Wǒ hěn xiǎng qù Zhōngguó, dànshì méiyǒu shíjiān.",
        "german": "Ich würde sehr gern nach China fahren, aber ich habe keine Zeit."
      },
      {
        "chinese": "今天太累了，我不想出去。",
        "pinyin": "Jīntiān tài lèi le, wǒ bù xiǎng chūqu.",
        "german": "Ich bin heute zu müde, ich habe keine Lust rauszugehen."
      }
    ],
    "legacyIds": [
      "g:想 + Verb",
      "想 + Verb"
    ],
    "quiz": {
      "example": 2,
      "answer": "想",
      "distractors": [
        {
          "text": "要",
          "reason": "要 drückt einen festen Willen aus und steht nicht nach 很."
        },
        {
          "text": "会",
          "reason": "很会 heißt „etwas gut können“ und passt nicht zu 去中国 und „keine Zeit“."
        },
        {
          "text": "可以",
          "reason": "可以 nennt eine Erlaubnis und steht nicht nach 很 vor einem Verb; gemeint ist ein Wunsch."
        }
      ],
      "accepted": [
        "希望"
      ]
    },
    "related": [
      "g:要",
      "g:会",
      "g:能",
      "g:可以"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wollen (fester Wille) / müssen",
    "formation": "Subjekt + 要 + Verb (+ Objekt)",
    "explanation": "要 (yào) vor einem Verb hat zwei Hauptbedeutungen. 1. Fester Wille oder Plan: „wollen, werden“ – 我明天要去北京 „Morgen fahre ich nach Peking“. Das klingt bestimmter als 想 (xiǎng) „möchten“. 2. Notwendigkeit oder Rat: „müssen, sollen“ – 你要多喝水 „Du musst viel trinken“. Vorsicht bei der Verneinung: „nicht wollen“ heißt 不想 (bù xiǎng), „nicht müssen“ heißt 不用 (búyòng); 不要 (búyào) ist dagegen ein Verbot oder eine Bitte: „Tu das nicht!“.",
    "notes": "Als Vollverb heißt 要 „haben wollen, brauchen“: 我要一杯茶 (wǒ yào yì bēi chá) „Ich hätte gern einen Tee“. Mit 了 am Satzende (要……了) bedeutet es „gleich, bald“ (eigener Punkt, HSK 2).",
    "examples": [
      {
        "chinese": "我明天要去北京。",
        "pinyin": "Wǒ míngtiān yào qù Běijīng.",
        "german": "Morgen fahre ich nach Peking."
      },
      {
        "chinese": "我今年要学开车。",
        "pinyin": "Wǒ jīnnián yào xué kāichē.",
        "german": "Dieses Jahr will ich Autofahren lernen."
      },
      {
        "chinese": "你生病了，要多喝水。",
        "pinyin": "Nǐ shēngbìng le, yào duō hē shuǐ.",
        "german": "Du bist krank, du musst viel trinken."
      }
    ],
    "legacyIds": [
      "g:要 + Verb",
      "要 + Verb"
    ],
    "quiz": {
      "example": 2,
      "answer": "要",
      "distractors": [
        {
          "text": "会",
          "reason": "会 äußert eine Vermutung oder ein Können, keinen Rat."
        },
        {
          "text": "想",
          "reason": "想 drückt einen Wunsch aus; der Satz gibt aber einen Rat an den Kranken."
        },
        {
          "text": "喜欢",
          "reason": "喜欢 nennt eine Vorliebe; dem Kranken wird ein Rat gegeben, nicht gesagt, was er gern tut."
        }
      ],
      "accepted": [
        "应该",
        "得"
      ]
    },
    "related": [
      "g:想",
      "g:不要",
      "g:不用",
      "g:要/快要/就要……了",
      "g:应该"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "dürfen / man kann (Erlaubnis, Möglichkeit)",
    "formation": "Subjekt + 可以 + Verb",
    "explanation": "可以 (kěyǐ) vor einem Verb drückt aus, dass etwas erlaubt oder möglich ist: „dürfen, können“. Typisch in Bitten und Fragen nach Erlaubnis: 我可以……吗? „Darf ich …?“; Antwort: 可以 oder 不行 (bù xíng). Es nennt auch eine Möglichkeit oder macht einen Vorschlag: 你可以坐地铁去 „Du kannst mit der U-Bahn fahren“. Verneinung: 不可以 (bù kěyǐ) „nicht dürfen“, ein deutliches Verbot. Typischer Fehler: 不可以 für „nicht können“ – „Ich kann nicht schwimmen“ heißt 我不会游泳 (wǒ bú huì yóuyǒng).",
    "notes": "可以 (kěyǐ) vs. 能 (néng): bei Erlaubnis oft austauschbar; für Fähigkeit und Umstände steht eher 能, für gelernte Fertigkeiten 会 (huì).",
    "examples": [
      {
        "chinese": "我可以坐这儿吗？",
        "pinyin": "Wǒ kěyǐ zuò zhèr ma?",
        "german": "Darf ich mich hierhin setzen?"
      },
      {
        "chinese": "你可以坐地铁去机场。",
        "pinyin": "Nǐ kěyǐ zuò dìtiě qù jīchǎng.",
        "german": "Du kannst mit der U-Bahn zum Flughafen fahren."
      },
      {
        "chinese": "考试的时候不可以看书。",
        "pinyin": "Kǎoshì de shíhou bù kěyǐ kàn shū.",
        "german": "Während der Prüfung darf man nicht ins Buch schauen."
      }
    ],
    "legacyIds": [
      "g:可以 + Verb",
      "可以 + Verb"
    ],
    "quiz": {
      "example": 0,
      "answer": "可以",
      "distractors": [
        {
          "text": "会",
          "reason": "会 nennt eine gelernte Fähigkeit; hier wird um Erlaubnis gebeten."
        },
        {
          "text": "想",
          "reason": "我想……吗 fragt den anderen nach dem eigenen Wunsch und ergibt so keinen Sinn; gemeint ist eine Bitte um Erlaubnis."
        },
        {
          "text": "喜欢",
          "reason": "我喜欢……吗 fragt den anderen nach dem eigenen Geschmack; das ergibt keinen Sinn, gefragt ist eine Erlaubnis."
        }
      ],
      "accepted": [
        "能"
      ]
    },
    "related": [
      "g:能",
      "g:会",
      "g:不要"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "words": [
      "看病",
      "睡觉",
      "说话",
      "上课",
      "下课",
      "上班",
      "下班",
      "生病"
    ],
    "meaning": "Trennbare Verben (Verb + Objekt): schlafen, sprechen, Unterricht haben …",
    "notes": "Weitere trennbare Verben folgen in HSK 2 (帮忙 (bāngmáng), 游泳 (yóuyǒng) …) und HSK 3.",
    "explanation": "离合词 (líhécí) „trennbare Verben“ bestehen aus Verb + Objekt. Zwischen die beiden Teile können 了, 过 oder Zeit- und Mengenangaben treten: 睡了五个小时的觉 „fünf Stunden geschlafen“, 下了班 (xià le bān) „nach Feierabend“. Ein weiteres Objekt können sie nicht direkt nehmen: nicht 看病医生, sondern 去医院看病.\n看病 (kànbìng) – „zum Arzt gehen“; vom Arzt aus „Patienten behandeln“\n睡觉 (shuìjiào) – „schlafen“\n说话 (shuōhuà) – „sprechen, reden“\n上课 (shàngkè) – „Unterricht haben, der Unterricht beginnt“\n下课 (xiàkè) – „der Unterricht ist aus“\n上班 (shàngbān) – „zur Arbeit gehen, arbeiten“\n下班 (xiàbān) – „Feierabend haben“\n生病 (shēngbìng) – „krank werden, krank sein“",
    "examples": [
      {
        "chinese": "我们八点上课，十二点下课。",
        "pinyin": "Wǒmen bā diǎn shàngkè, shí'èr diǎn xiàkè.",
        "german": "Wir haben von acht bis zwölf Uhr Unterricht."
      },
      {
        "chinese": "上课的时候不要说话。",
        "pinyin": "Shàngkè de shíhou búyào shuōhuà.",
        "german": "Im Unterricht nicht reden!"
      },
      {
        "chinese": "昨天晚上我只睡了五个小时的觉，今天上班很累。",
        "pinyin": "Zuótiān wǎnshang wǒ zhǐ shuì le wǔ ge xiǎoshí de jiào, jīntiān shàngbān hěn lèi.",
        "german": "Letzte Nacht habe ich nur fünf Stunden geschlafen, heute bei der Arbeit bin ich sehr müde."
      },
      {
        "chinese": "妈妈生病了，今天去医院看病。",
        "pinyin": "Māma shēngbìng le, jīntiān qù yīyuàn kànbìng.",
        "german": "Mama ist krank und geht heute ins Krankenhaus zum Arzt."
      },
      {
        "chinese": "我哥哥下了班就去上课。",
        "pinyin": "Wǒ gēge xià le bān jiù qù shàngkè.",
        "german": "Mein Bruder geht nach Feierabend gleich zum Unterricht."
      },
      {
        "chinese": "爸爸每天坐地铁上班。",
        "pinyin": "Bàba měi tiān zuò dìtiě shàngbān.",
        "german": "Papa fährt jeden Tag mit der U-Bahn zur Arbeit."
      }
    ],
    "related": [
      "g:离合词@HSK2",
      "g:离合词@HSK3"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    ],
    "meaning": "Fragewörter: was, wer, wo, wie, wie viele …",
    "notes": "Fragewörter haben später auch Gebrauchsweisen ohne Frage, etwa 谁都 (shéi dōu) „jeder“ (HSK 3).",
    "explanation": "Fragewörter stehen an der Stelle im Satz, an der in der Antwort die gesuchte Information steht; die Wortstellung ändert sich nicht, und am Satzende steht kein 吗.\n多 (duō) – „wie“ vor Adjektiven: 多大 (duō dà) „wie alt“, 多远 (duō yuǎn) „wie weit“\n多少 (duōshao) – „wie viel(e)“, für beliebige Mengen, Zählwort möglich, aber nicht nötig: 多少钱 (duōshao qián)\n几 (jǐ) – „wie viele“, meist bei kleinen Zahlen, vor einem Zählwort: 几个人 (jǐ ge rén); auch 几点 (jǐ diǎn) „wie spät“\n哪 (nǎ) – „welche(r/s)“, meist mit Zählwort: 哪个 (nǎge), 哪国人 (nǎ guó rén)\n哪儿 (nǎr) – „wo, wohin“\n哪里 (nǎlǐ) – „wo, wohin“, gleichbedeutend mit 哪儿, etwas förmlicher\n哪些 (nǎxiē) – „welche“ (Plural)\n什么 (shénme) – „was; was für ein“: 什么书 (shénme shū)\n谁 (shéi) – „wer, wen, wem“; 谁的 (shéi de) „wessen“\n怎么 (zěnme) – „wie“ vor Verben; auch verwundert „wieso“\n怎么样 (zěnmeyàng) – „wie ist es?“, fragt nach einer Bewertung oder schließt einen Vorschlag ab",
    "examples": [
      {
        "chinese": "这本书多少钱？",
        "pinyin": "Zhè běn shū duōshao qián?",
        "german": "Wie viel kostet dieses Buch?"
      },
      {
        "chinese": "你是哪国人？",
        "pinyin": "Nǐ shì nǎ guó rén?",
        "german": "Aus welchem Land kommst du?"
      },
      {
        "chinese": "请问，你家在哪里？",
        "pinyin": "Qǐngwèn, nǐ jiā zài nǎlǐ?",
        "german": "Entschuldigung, wo wohnst du?"
      },
      {
        "chinese": "你们班有哪些新同学？",
        "pinyin": "Nǐmen bān yǒu nǎxiē xīn tóngxué?",
        "german": "Welche neuen Mitschüler habt ihr in der Klasse?"
      },
      {
        "chinese": "你妹妹今年几岁？",
        "pinyin": "Nǐ mèimei jīnnián jǐ suì?",
        "german": "Wie alt ist deine kleine Schwester?"
      },
      {
        "chinese": "谁是你的中文老师？",
        "pinyin": "Shéi shì nǐ de Zhōngwén lǎoshī?",
        "german": "Wer ist dein Chinesischlehrer?"
      }
    ],
    "related": [
      "g:什么",
      "g:几",
      "g:谁",
      "g:哪儿",
      "g:怎么",
      "g:怎么样"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "was; was für ein …",
    "formation": "Verb + 什么 / 什么 + Nomen",
    "explanation": "什么 (shénme) fragt nach Dingen: „was“. Es steht dort, wo in der Antwort das Gesuchte steht – meist als Objekt (你吃什么? „Was isst du?“), auch als Subjekt. Direkt vor einem Nomen bedeutet es „was für ein, welche Art“ und braucht kein Zählwort: 什么水果 (shénme shuǐguǒ) „was für Obst“. Feste Fügungen: 什么时候 (shénme shíhou) „wann“, 为什么 (wèi shénme) „warum“. Da 什么 die Frage schon trägt, steht am Satzende kein 吗. Typischer Fehler: 什么 für Personen – „Wer ist das?“ heißt 他是谁?",
    "notes": "什么 (shénme) vs. 哪 (nǎ): 哪 + Zählwort wählt aus einer bekannten Menge aus (哪个水果 „welches Obst davon“), 什么 + Nomen fragt nach der Art.",
    "examples": [
      {
        "chinese": "你在看什么？",
        "pinyin": "Nǐ zài kàn shénme?",
        "german": "Was schaust du dir gerade an?"
      },
      {
        "chinese": "你喜欢吃什么水果？",
        "pinyin": "Nǐ xǐhuan chī shénme shuǐguǒ?",
        "german": "Was für Obst isst du gern?"
      },
      {
        "chinese": "你什么时候回家？",
        "pinyin": "Nǐ shénme shíhou huí jiā?",
        "german": "Wann gehst du nach Hause?"
      }
    ],
    "legacyIds": [
      "什么",
      "g:什么时候",
      "什么时候"
    ],
    "related": [
      "g:疑问代词@HSK1",
      "g:谁",
      "g:哪儿",
      "g:为什么"
    ],
    "quiz": {
      "example": 1,
      "answer": "什么",
      "distractors": [
        {
          "text": "哪",
          "reason": "哪 braucht hier ein Zählwort (哪种水果); direkt vor 水果 steht es nicht."
        },
        {
          "text": "谁",
          "reason": "谁 fragt nach Personen; „wessen“ hieße 谁的, und Obst ist keine Person."
        },
        {
          "text": "几",
          "reason": "几 fragt nach einer Zahl und braucht ein Zählwort; gefragt ist die Sorte."
        }
      ],
      "accepted": [
        "哪些"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wie viele (kleine Zahl, mit Zählwort)",
    "formation": "几 + Zählwort (+ Nomen)",
    "explanation": "几 (jǐ) fragt nach einer Zahl, bei der man eine kleine Antwort erwartet (etwa unter zehn), und steht in der Regel vor einem Zählwort: 几个人 (jǐ ge rén) „wie viele Leute“, 几本书 (jǐ běn shū) „wie viele Bücher“. Außerdem fragt man mit 几 nach Zahlen in festen Reihen: 几点 (jǐ diǎn) „wie spät“, 星期几 (xīngqī jǐ) „welcher Wochentag“, 几月几号 (jǐ yuè jǐ hào) „welches Datum“, bei Kindern 几岁 (jǐ suì) „wie alt“. Für größere oder ganz unbekannte Mengen nimmt man 多少 (duōshao), z. B. 多少钱 „wie viel kostet es“.",
    "notes": "Unterschied zu 多少 (duōshao): 多少 kann ohne Zählwort stehen (多少学生), 几 nicht (几个学生). Ohne Frage bedeutet 几 „einige“: 几个朋友 „ein paar Freunde“.",
    "examples": [
      {
        "chinese": "你家有几口人？",
        "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
        "german": "Wie viele Personen seid ihr in deiner Familie?"
      },
      {
        "chinese": "现在几点了？",
        "pinyin": "Xiànzài jǐ diǎn le?",
        "german": "Wie spät ist es jetzt?"
      },
      {
        "chinese": "今天星期几？",
        "pinyin": "Jīntiān xīngqī jǐ?",
        "german": "Welcher Wochentag ist heute?"
      },
      {
        "chinese": "你儿子今年几岁？",
        "pinyin": "Nǐ érzi jīnnián jǐ suì?",
        "german": "Wie alt ist dein Sohn?"
      }
    ],
    "legacyIds": [
      "g:几/多少",
      "几/多少"
    ],
    "related": [
      "g:多",
      "g:疑问代词@HSK1",
      "g:其他结构类型：数量短语",
      "g:多少钱"
    ],
    "quiz": {
      "example": 0,
      "answer": "几",
      "distractors": [
        {
          "text": "什么",
          "reason": "什么 fragt nach der Art, nicht nach der Anzahl, und steht nicht vor einem Zählwort wie 口."
        },
        {
          "text": "哪",
          "reason": "哪口人 hieße „welche Person“; gefragt ist die Zahl der Familienmitglieder."
        },
        {
          "text": "多",
          "reason": "多 fragt nur vor Adjektiven nach dem Ausmaß (多大), nicht vor Zählwörtern."
        }
      ],
      "accepted": [
        "多少"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wer, wen, wem; wessen",
    "formation": "谁 + Verb / Verb + 谁 / 谁 + 的 + Nomen",
    "explanation": "谁 (shéi, auch shuí) fragt nach Personen. Es steht an der Stelle der Antwort: als Subjekt „wer“ (谁想喝茶? „Wer möchte Tee?“), als Objekt „wen/wem“ (你找谁? „Wen suchst du?“). Mit 的 bedeutet es „wessen“: 谁的手机 (shéi de shǒujī) „wessen Handy“. Eine Pluralform gibt es nicht; 谁 kann auch nach mehreren Personen fragen. Am Satzende steht kein 吗. Höflicher fragt man nach einer Person mit 哪位 (nǎ wèi) „wer, bitte?“.",
    "notes": "Beide Aussprachen sind richtig: shéi ist im Alltag deutlich häufiger, shuí klingt etwas gehobener.",
    "examples": [
      {
        "chinese": "那个人是谁？",
        "pinyin": "Nàge rén shì shéi?",
        "german": "Wer ist die Person da?"
      },
      {
        "chinese": "谁想喝茶？",
        "pinyin": "Shéi xiǎng hē chá?",
        "german": "Wer möchte Tee?"
      },
      {
        "chinese": "这是谁的手机？",
        "pinyin": "Zhè shì shéi de shǒujī?",
        "german": "Wessen Handy ist das?"
      }
    ],
    "legacyIds": [
      "谁"
    ],
    "related": [
      "g:什么",
      "g:疑问代词@HSK1"
    ],
    "quiz": {
      "example": 2,
      "answer": "谁",
      "distractors": [
        {
          "text": "什么",
          "reason": "什么 fragt nach Dingen; „was für ein Handy“ hieße 什么手机 ohne 的."
        },
        {
          "text": "几",
          "reason": "几 fragt nach einer Zahl und braucht ein Zählwort; gefragt ist der Besitzer."
        },
        {
          "text": "多少",
          "reason": "多少 fragt nach einer Menge, nicht nach einer Person."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wo, wohin (Frage nach dem Ort)",
    "formation": "在/去/从 + 哪儿 / 哪儿 + 有 + Nomen",
    "explanation": "哪儿 (nǎr) fragt nach einem Ort: „wo“ mit 在 (你家在哪儿? „Wo wohnst du?“), „wohin“ mit 去 oder 到 (去哪儿 „wohin gehen“), „woher“ mit 从 (从哪儿来 „woher kommen“). Am Satzanfang mit 有 fragt es, wo es etwas gibt: 哪儿有商店? „Wo gibt es einen Laden?“. 哪里 (nǎlǐ) bedeutet dasselbe; es klingt etwas förmlicher und ist in Südchina und Taiwan üblicher, 哪儿 eher in Nordchina. Wie bei allen Fragewörtern steht am Ende kein 吗.",
    "notes": "Nicht verwechseln mit 哪 (nǎ) „welche(r/s)“, das ein Zählwort braucht: 哪个 (nǎge), 哪国人 (nǎ guó rén). Die Antwort enthält oft 这儿 (zhèr) „hier“ oder 那儿 (nàr) „dort“.",
    "examples": [
      {
        "chinese": "你家在哪儿？",
        "pinyin": "Nǐ jiā zài nǎr?",
        "german": "Wo wohnst du?"
      },
      {
        "chinese": "下午你想去哪儿玩？",
        "pinyin": "Xiàwǔ nǐ xiǎng qù nǎr wán?",
        "german": "Wohin möchtest du heute Nachmittag zum Spielen?"
      },
      {
        "chinese": "请问，哪儿有商店？",
        "pinyin": "Qǐngwèn, nǎr yǒu shāngdiàn?",
        "german": "Entschuldigung, wo gibt es hier einen Laden?"
      },
      {
        "chinese": "你是从哪儿来的？",
        "pinyin": "Nǐ shì cóng nǎr lái de?",
        "german": "Woher kommst du?"
      }
    ],
    "legacyIds": [
      "g:哪 / 哪儿",
      "哪 / 哪儿"
    ],
    "related": [
      "g:疑问代词@HSK1",
      "g:指示代词@HSK1",
      "g:什么"
    ],
    "quiz": {
      "example": 1,
      "answer": "哪儿",
      "distractors": [
        {
          "text": "什么",
          "reason": "去什么玩 ist falsch; nach einem Ort fragt man mit 哪儿 oder 什么地方."
        },
        {
          "text": "谁",
          "reason": "谁 fragt nach einer Person; 去谁玩 ergibt keinen Sinn."
        },
        {
          "text": "怎么",
          "reason": "怎么 fragt nach der Art und Weise und steht vor dem Verb (怎么去), nicht als Ziel nach 去."
        }
      ],
      "accepted": [
        "哪里"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wie (Art und Weise); wieso (Verwunderung)",
    "formation": "怎么 + Verb / Subjekt + 怎么 + (不/没) + Verb",
    "explanation": "怎么 (zěnme) steht vor einem Verb und fragt nach der Art und Weise: 这个字怎么写? „Wie schreibt man dieses Zeichen?“, 去火车站怎么走? „Wie komme ich zum Bahnhof?“. Fragt es nach etwas Unerwartetem, bedeutet es „wieso, wie kommt es, dass“ und drückt Verwunderung aus, oft mit 不 oder 没: 你怎么没来? „Wieso bist du nicht gekommen?“. 怎么了 (zěnme le) heißt „Was ist los?“. Ein neutrales „warum“ ist eher 为什么 (wèi shénme).",
    "notes": "怎么 (zěnme) vs. 怎么样 (zěnmeyàng): 怎么 + Verb fragt, wie man etwas macht; 怎么样 steht meist am Satzende und fragt nach einer Bewertung (这个菜怎么样? „Wie schmeckt das Gericht?“).",
    "examples": [
      {
        "chinese": "这个字怎么写？",
        "pinyin": "Zhège zì zěnme xiě?",
        "german": "Wie schreibt man dieses Zeichen?"
      },
      {
        "chinese": "请问，去火车站怎么走？",
        "pinyin": "Qǐngwèn, qù huǒchēzhàn zěnme zǒu?",
        "german": "Entschuldigung, wie komme ich zum Bahnhof?"
      },
      {
        "chinese": "你怎么还没吃饭？",
        "pinyin": "Nǐ zěnme hái méi chī fàn?",
        "german": "Wieso hast du noch nicht gegessen?"
      }
    ],
    "legacyIds": [
      "怎么"
    ],
    "related": [
      "g:怎么样",
      "g:为什么",
      "g:疑问代词@HSK1"
    ],
    "quiz": {
      "example": 1,
      "answer": "怎么",
      "distractors": [
        {
          "text": "什么",
          "reason": "什么 fragt nach Dingen und steht nicht vor einem Verb, um nach dem Weg zu fragen."
        },
        {
          "text": "哪儿",
          "reason": "Das Ziel ist schon genannt (火车站); gefragt ist der Weg, also die Art und Weise."
        },
        {
          "text": "为什么",
          "reason": "为什么 fragt nach dem Grund; „warum geht man zum Bahnhof“ ist hier nicht gemeint."
        }
      ],
      "accepted": [
        "怎样"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wie + Adjektiv (Frage nach Ausmaß: wie alt, wie weit …)",
    "pinyin": "duō + Adjektiv",
    "examples": [
      {
        "chinese": "你今年多大？",
        "pinyin": "Nǐ jīnnián duō dà?",
        "german": "Wie alt bist du?"
      },
      {
        "chinese": "你家离学校多远？",
        "pinyin": "Nǐ jiā lí xuéxiào duō yuǎn?",
        "german": "Wie weit wohnst du von der Schule entfernt?"
      },
      {
        "chinese": "你哥哥有多高？",
        "pinyin": "Nǐ gēge yǒu duō gāo?",
        "german": "Wie groß ist dein älterer Bruder?"
      }
    ],
    "legacyIds": [
      "g:多 + Adjektiv",
      "多 + Adjektiv"
    ],
    "formation": "(有) + 多 + Adjektiv？",
    "notes": "多 hat weitere Gebrauchsweisen, die eigene Punkte sind (HSK 2): als Zahlwort „mehr als“ (二十多个 „über zwanzig“) und als Gradadverb im Ausruf (多好啊 „wie schön!“).",
    "explanation": "多 (duō) vor einem einsilbigen Adjektiv fragt nach dem Ausmaß: 多大 (duō dà) „wie alt, wie groß“, 多高 (duō gāo) „wie groß (Körper), wie hoch“, 多远 (duō yuǎn) „wie weit“, 多长 (duō cháng) „wie lang“. Oft steht 有 davor: 他有多高? „Wie groß ist er?“. Man benutzt dabei normalerweise das „positive“ Adjektiv (高, 大, 远), nicht das Gegenteil, ähnlich wie im Deutschen. Nach dem Alter fragt man Jugendliche und Erwachsene mit 多大, kleine Kinder eher mit 几岁 (jǐ suì).",
    "quiz": {
      "example": 1,
      "answer": "多",
      "distractors": [
        {
          "text": "几",
          "reason": "几 fragt nach einer Zahl und braucht ein Zählwort; vor einem Adjektiv steht es nicht."
        },
        {
          "text": "什么",
          "reason": "什么 fragt nach Dingen oder der Art und kann kein Adjektiv erfragen."
        },
        {
          "text": "怎么",
          "reason": "怎么 vor einem Adjektiv fragt verwundert „wieso so …“ (meist mit 这么); nach der Entfernung fragt 多."
        }
      ]
    },
    "related": [
      "g:几",
      "g:疑问代词@HSK1"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wie ist es? / wie wäre es? (Bewertung, Vorschlag)",
    "pinyin": "zěnmeyàng",
    "examples": [
      {
        "chinese": "你的新工作怎么样？",
        "pinyin": "Nǐ de xīn gōngzuò zěnmeyàng?",
        "german": "Wie ist deine neue Arbeit?"
      },
      {
        "chinese": "昨天的电影怎么样？",
        "pinyin": "Zuótiān de diànyǐng zěnmeyàng?",
        "german": "Wie war der Film gestern?"
      },
      {
        "chinese": "我们明天去看电影，怎么样？",
        "pinyin": "Wǒmen míngtiān qù kàn diànyǐng, zěnmeyàng?",
        "german": "Wie wäre es, wenn wir morgen ins Kino gehen?"
      }
    ],
    "legacyIds": [
      "怎么样"
    ],
    "formation": "Nomen + 怎么样？ / Vorschlag，怎么样？",
    "notes": "不怎么样 (bù zěnmeyàng) heißt „nicht besonders (gut)“. 怎么 (zěnme) + Verb fragt dagegen nach der Art und Weise.",
    "explanation": "怎么样 (zěnmeyàng) fragt nach einer Bewertung oder einem Zustand und steht meist als Prädikat am Satzende: 昨天的电影怎么样? „Wie war der Film gestern?“, 你身体怎么样? „Wie geht es dir gesundheitlich?“. Nach einem Vorschlag bedeutet es „Wie wäre es?“: 我们去看电影，怎么样? „Gehen wir ins Kino, was meinst du?“. Typische Antworten: 很好, 不错 (búcuò) „nicht schlecht“, 好啊 (hǎo a) „gern“. Typischer Fehler: 怎么 (zěnme) allein als Prädikat – „Wie ist das Essen?“ heißt 菜怎么样?, nicht 菜怎么?",
    "quiz": {
      "example": 1,
      "answer": "怎么样",
      "distractors": [
        {
          "text": "怎么",
          "reason": "怎么 braucht ein Verb danach (怎么写) und kann nicht allein nach einer Bewertung fragen."
        },
        {
          "text": "什么",
          "reason": "什么 fragt nach Dingen; „Der Film was?“ ergibt keine Frage nach der Bewertung."
        },
        {
          "text": "哪儿",
          "reason": "哪儿 fragt nach einem Ort, nicht danach, wie der Film war."
        }
      ]
    },
    "related": [
      "g:怎么",
      "g:疑问代词@HSK1"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    ],
    "meaning": "Personalpronomen: ich, du, Sie, er, sie, es, wir, ihr, alle",
    "notes": "Zu 您 gibt es kaum einen Plural; vor einer Gruppe sagt man 你们 (nǐmen) oder 大家 (dàjiā). 咱们 (zánmen) aus HSK 3 ist ein „wir“, das den Angesprochenen einschließt.",
    "explanation": "Chinesische Personalpronomen haben keine Fälle: 我 heißt „ich, mich, mir“. Der Plural entsteht mit 们 (men). Besitz zeigt 的: 我的书 (wǒ de shū) „mein Buch“; vor Familienmitgliedern und engen Beziehungen fällt 的 meist weg: 我妈妈 (wǒ māma).\n我 (wǒ) – „ich“\n你 (nǐ) – „du“\n您 (nín) – höfliches „Sie“ (Einzahl), für Ältere, Lehrer, Kunden\n他 (tā) – „er“\n她 (tā) – „sie“ (eine Frau)\n它 (tā) – „es“, für Tiere und Dinge\n我们 (wǒmen) – „wir“\n你们 (nǐmen) – „ihr“, auch höflich für mehrere Personen\n他们 (tāmen) – „sie“ (Männer oder gemischte Gruppe)\n她们 (tāmen) – „sie“ (nur Frauen)\n它们 (tāmen) – „sie“ (Tiere, Dinge)\n大家 (dàjiā) – „alle (hier), ihr alle“: 大家好 (dàjiā hǎo) „Hallo zusammen“\n他, 她 und 它 klingen gleich; nur die Schrift unterscheidet sie.",
    "examples": [
      {
        "chinese": "您好，您是王老师吗？",
        "pinyin": "Nín hǎo, nín shì Wáng lǎoshī ma?",
        "german": "Guten Tag, sind Sie Lehrer Wang?"
      },
      {
        "chinese": "她们都是我的同学。",
        "pinyin": "Tāmen dōu shì wǒ de tóngxué.",
        "german": "Sie sind alle meine Mitschülerinnen."
      },
      {
        "chinese": "大家好，我叫李明。",
        "pinyin": "Dàjiā hǎo, wǒ jiào Lǐ Míng.",
        "german": "Hallo zusammen, ich heiße Li Ming."
      },
      {
        "chinese": "我家有一只小猫，它很喜欢睡觉。",
        "pinyin": "Wǒ jiā yǒu yì zhī xiǎo māo, tā hěn xǐhuan shuìjiào.",
        "german": "Wir haben eine kleine Katze, sie schläft sehr gern."
      },
      {
        "chinese": "他们明天去北京，你们呢？",
        "pinyin": "Tāmen míngtiān qù Běijīng, nǐmen ne?",
        "german": "Sie fahren morgen nach Peking – und ihr?"
      }
    ],
    "related": [
      "g:—们",
      "g:咱们",
      "g:自己",
      "g:指示代词@HSK1"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    ],
    "meaning": "Demonstrativpronomen: dies, das, hier, dort, diese, manche …",
    "notes": "Orte: Mit 这儿 (zhèr) / 那儿 (nàr) werden Personen zu Ortsangaben: 我这儿 (wǒ zhèr) „bei mir“. Vor einem Zählwort hört man 这 und 那 oft als zhèi und nèi. 哪 (nǎ) und 哪儿 (nǎr) sind die passenden Fragewörter.",
    "explanation": "Demonstrativpronomen zeigen auf Dinge, Personen oder Orte. Die 这-Formen bezeichnen Nahes, die 那-Formen Fernes. Vor einem Nomen steht meist ein Zählwort: 这本书, 那个 (nàge) 人.\n这 (zhè) – „dies“; allein vor allem als Subjekt: 这是我的书.\n那 (nà) – „das, jenes“; Gegenstück zu 这.\n这个 (zhège) – „dieses (hier)“; kann auch allein als Objekt stehen: 我要这个.\n那个 (nàge) – „jenes (dort)“.\n这些 (zhèxiē) – „diese“ (Mehrzahl), ohne weiteres Zählwort: 这些书.\n那些 (nàxiē) – „jene“ (Mehrzahl).\n这儿 (zhèr) – „hier“, gesprochen, eher nordchinesisch.\n这里 (zhèlǐ) – „hier“, neutral, auch schriftlich.\n那儿 (nàr) – „dort“, gesprochen.\n那里 (nàlǐ) – „dort“, neutral.\n有的 (yǒude) – „manche“ (aus einer Gruppe), oft zweimal: 有的……，有的…….\n有些 (yǒuxiē) – „einige, manche“, betont eher eine kleinere Menge.",
    "examples": [
      {
        "chinese": "这些书是我的，那些是他的。",
        "pinyin": "Zhèxiē shū shì wǒ de, nàxiē shì tā de.",
        "german": "Diese Bücher gehören mir, die da gehören ihm."
      },
      {
        "chinese": "我家在那儿，不在这儿。",
        "pinyin": "Wǒ jiā zài nàr, bú zài zhèr.",
        "german": "Mein Zuhause ist dort drüben, nicht hier."
      },
      {
        "chinese": "有的同学喜欢喝茶，有的喜欢喝咖啡。",
        "pinyin": "Yǒude tóngxué xǐhuan hē chá, yǒude xǐhuan hē kāfēi.",
        "german": "Manche Mitschüler trinken gern Tee, manche lieber Kaffee."
      },
      {
        "chinese": "这里的东西不太贵。",
        "pinyin": "Zhèlǐ de dōngxi bú tài guì.",
        "german": "Die Sachen hier sind nicht besonders teuer."
      },
      {
        "chinese": "有些问题我还不懂。",
        "pinyin": "Yǒuxiē wèntí wǒ hái bù dǒng.",
        "german": "Manche Fragen verstehe ich noch nicht."
      },
      {
        "chinese": "那个人是谁？",
        "pinyin": "Nàge rén shì shéi?",
        "german": "Wer ist die Person da?"
      }
    ],
    "related": [
      "g:这",
      "g:指示代词@HSK2",
      "g:疑问代词@HSK1"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "dies, diese(r) (Hinweis auf Nahes)",
    "pinyin": "zhè/nà + Zählwort + Nomen",
    "examples": [
      {
        "chinese": "这本书很有意思。",
        "pinyin": "Zhè běn shū hěn yǒu yìsi.",
        "german": "Dieses Buch ist sehr interessant."
      },
      {
        "chinese": "这是我的手机，不是你的。",
        "pinyin": "Zhè shì wǒ de shǒujī, bú shì nǐ de.",
        "german": "Das ist mein Handy, nicht deins."
      },
      {
        "chinese": "这三个学生都是中国人。",
        "pinyin": "Zhè sān ge xuésheng dōu shì Zhōngguó rén.",
        "german": "Diese drei Schüler sind alle Chinesen."
      }
    ],
    "legacyIds": [
      "g:这/那 + Zählwort + Nomen",
      "这/那 + Zählwort + Nomen"
    ],
    "formation": "这 (+ Zahlwort) + Zählwort + Nomen; 这 + 是 + …",
    "notes": "Gegenstück ist 那 (nà) „das, jenes“ für Entferntes. Mehrzahl: 这些 (zhèxiē); Ort: 这儿 (zhèr) / 这里 (zhèlǐ). Die feste Wendung 这也不X，那也不Y „mit nichts zufrieden“ ist ein eigener Punkt (HSK 6).",
    "explanation": "这 (zhè) zeigt auf etwas, das räumlich, zeitlich oder im Gespräch nahe ist: „dies, diese(r)“. Vor einem Nomen steht in der Regel ein Zählwort, bei Mengen auch eine Zahl: 这本书 „dieses Buch“, 这三个人 „diese drei Leute“. Allein steht 这 vor allem als Subjekt, oft mit 是: 这是我的手机 „Das ist mein Handy“. Als Objekt sagt man nicht einfach 这, sondern 这个 (zhège): 我要这个 „Ich nehme das hier“. Vor einem Zählwort wird es gesprochen oft zu zhèi. Typischer Fehler: das Zählwort vergessen (这书 statt 这本书) – in der Umgangssprache kommt das vor, korrekt und sicher ist aber die Form mit Zählwort.",
    "quiz": {
      "example": 0,
      "answer": "这",
      "distractors": [
        {
          "text": "这些",
          "reason": "这些 steht für die Mehrzahl und braucht kein Einzel-Zählwort: 这些书, nicht 这些本书."
        },
        {
          "text": "这儿",
          "reason": "这儿 bezeichnet einen Ort („hier“) und kann nicht vor Zählwort + Nomen stehen."
        },
        {
          "text": "哪",
          "reason": "哪 fragt „welches?“ – der Satz ist aber eine Aussage, keine Frage."
        }
      ],
      "accepted": [
        "那"
      ]
    },
    "related": [
      "g:指示代词@HSK1",
      "g:指示代词@HSK2",
      "g:这/那也不X，那/这也不Y"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    ],
    "meaning": "Zahlwörter: eins bis neun, null, zehn, hundert, tausend, halb",
    "notes": "Zahlen über 10 000 zählt man in 万 (wàn, „zehntausend“) – das kommt erst auf einer höheren Stufe dazu. In Telefon- und Zimmernummern wird 一 oft yāo gesprochen.",
    "explanation": "Chinesische Zahlen werden aus wenigen Grundwörtern zusammengesetzt: 十二 (shí'èr) = 12, 二十 (èrshí) = 20, 三百五十 = 350. Steht eine Zahl vor einem Nomen, kommt meist ein Zählwort dazwischen: 三本书.\n一 (yī) – „eins“; vor dem 4. Ton yí, vor anderen Tönen yì (一个 (yí ge), 一本 (yì běn)), beim Zählen und in Daten yī.\n二 (èr) – „zwei“ beim Zählen, in Ordnungszahlen, Daten und zusammengesetzten Zahlen (十二, 二月 (èryuè)).\n两 (liǎng) – „zwei“ vor Zählwörtern: 两个人, nicht 二个人.\n三 (sān), 四 (sì), 五 (wǔ), 六 (liù), 七 (qī), 八 (bā), 九 (jiǔ) – „drei“ bis „neun“.\n零 (líng) – „null“; füllt Lücken in größeren Zahlen: 一百零五 = 105.\n十 (shí) – „zehn“; 十一 (shíyī) = 11, 九十九 = 99.\n百 (bǎi) – „hundert“: 一百, 两百 oder 二百.\n千 (qiān) – „tausend“: 三千 = 3000.\n半 (bàn) – „halb“: 半个小时 „eine halbe Stunde“, nach der Zahl: 一个半小时 „anderthalb Stunden“.",
    "examples": [
      {
        "chinese": "我们班有二十五个学生。",
        "pinyin": "Wǒmen bān yǒu èrshíwǔ ge xuésheng.",
        "german": "In unserer Klasse sind 25 Schüler."
      },
      {
        "chinese": "我买了两杯茶和一杯咖啡。",
        "pinyin": "Wǒ mǎile liǎng bēi chá hé yì bēi kāfēi.",
        "german": "Ich habe zwei Tassen Tee und einen Kaffee gekauft."
      },
      {
        "chinese": "这个手机三千八百块。",
        "pinyin": "Zhège shǒujī sānqiān bābǎi kuài.",
        "german": "Dieses Handy kostet 3800 Yuan."
      },
      {
        "chinese": "我等了他半个小时。",
        "pinyin": "Wǒ děngle tā bàn ge xiǎoshí.",
        "german": "Ich habe eine halbe Stunde auf ihn gewartet."
      },
      {
        "chinese": "这本书一百零五块。",
        "pinyin": "Zhè běn shū yìbǎi líng wǔ kuài.",
        "german": "Dieses Buch kostet 105 Yuan."
      },
      {
        "chinese": "今天是九月七号。",
        "pinyin": "Jīntiān shì jiǔ yuè qī hào.",
        "german": "Heute ist der 7. September."
      }
    ],
    "related": [
      "g:数词@HSK2",
      "g:名量词@HSK1",
      "g:钱数表示法",
      "g:序数表达法1：第+数词"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "words": [
      "本",
      "个",
      "家",
      "口",
      "块",
      "件",
      "只",
      "元"
    ],
    "meaning": "Zählwörter für Nomen: Bücher, Personen, Geschäfte, Kleidung, Tiere, Geld …",
    "notes": "Vor Zählwörtern steht für „zwei“ 两, nicht 二: 两本书. Behälterwörter wie 杯 (bēi) sind „geliehene“ Zählwörter (eigener Punkt).",
    "explanation": "Zwischen Zahl bzw. 这/那 und Nomen steht im Chinesischen ein Zählwort: Zahl + Zählwort + Nomen (三本书). Welches Zählwort passt, hängt vom Nomen ab; ist das Nomen klar, kann es wegfallen (我要两个).\n本 (běn) – für Bücher, Hefte, Wörterbücher: 一本书.\n个 (gè, meist neutral ge gesprochen) – das allgemeinste Zählwort, für Personen und viele Dinge: 三个人, 一个苹果.\n家 (jiā) – für Firmen, Geschäfte, Restaurants, Krankenhäuser: 一家饭店.\n口 (kǒu) – für Familienmitglieder, vor allem in 几口人 / 四口人.\n块 (kuài) – für Stücke (Brot, Kuchen, Stoff); gesprochen auch die Geldeinheit Yuan: 五块钱.\n件 (jiàn) – für Kleidung (vor allem Oberteile) und für Angelegenheiten: 一件衣服, 一件事.\n只 (zhī) – für viele Tiere und für eines von zwei Paarteilen: 一只猫, 一只手.\n元 (yuán) – Geldeinheit Yuan, eher schriftlich (Preisschilder); gesprochen sagt man meist 块.",
    "examples": [
      {
        "chinese": "我家有四口人。",
        "pinyin": "Wǒ jiā yǒu sì kǒu rén.",
        "german": "Wir sind zu viert in der Familie."
      },
      {
        "chinese": "他买了三本书和一件衣服。",
        "pinyin": "Tā mǎile sān běn shū hé yí jiàn yīfu.",
        "german": "Er hat drei Bücher und ein Kleidungsstück gekauft."
      },
      {
        "chinese": "那家饭店的菜很好吃。",
        "pinyin": "Nà jiā fàndiàn de cài hěn hǎochī.",
        "german": "Das Essen in dem Restaurant ist sehr lecker."
      },
      {
        "chinese": "我的朋友有两只狗。",
        "pinyin": "Wǒ de péngyou yǒu liǎng zhī gǒu.",
        "german": "Mein Freund hat zwei Hunde."
      },
      {
        "chinese": "这个苹果五块钱。",
        "pinyin": "Zhège píngguǒ wǔ kuài qián.",
        "german": "Dieser Apfel kostet fünf Yuan."
      },
      {
        "chinese": "一杯茶十二元。",
        "pinyin": "Yì bēi chá shí'èr yuán.",
        "german": "Eine Tasse Tee kostet zwölf Yuan."
      }
    ],
    "related": [
      "g:杯",
      "g:名量词@HSK2",
      "g:数词@HSK1",
      "g:钱数表示法"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Tasse, Glas, Becher (Zählwort für Getränke)",
    "formation": "Zahlwort / 这 / 那 + 杯 + Getränk",
    "notes": "Nach demselben Prinzip funktionieren weitere geliehene Zählwörter wie 包 (bāo) „Packung“ (HSK 2), 碗 (wǎn) „Schüssel“ und 盘 (pán) „Teller“ (HSK 3).",
    "explanation": "杯 ist ein „geliehenes“ Zählwort: Das Nomen 杯子 (bēizi) „Tasse, Glas, Becher“ wird als Maß benutzt, Getränke werden nach dem Gefäß gezählt: 一杯水 „ein Glas Wasser“, 两杯咖啡 „zwei Tassen Kaffee“. Das Getränk kann wegfallen, wenn klar ist, was gemeint ist: 我要两杯 „Ich nehme zwei“. Man unterscheidet: 一杯茶 „eine Tasse Tee“ (die Menge) und 一个杯子 „eine Tasse“ (der Gegenstand). Ein häufiger Fehler ist 一个水 – Wasser, Tee oder Kaffee lassen sich nicht direkt mit 个 zählen, man braucht ein Gefäß als Maß.",
    "examples": [
      {
        "chinese": "我想喝一杯水。",
        "pinyin": "Wǒ xiǎng hē yì bēi shuǐ.",
        "german": "Ich möchte ein Glas Wasser trinken."
      },
      {
        "chinese": "他每天早上喝两杯咖啡。",
        "pinyin": "Tā měitiān zǎoshang hē liǎng bēi kāfēi.",
        "german": "Er trinkt jeden Morgen zwei Tassen Kaffee."
      },
      {
        "chinese": "请给我们三杯茶。",
        "pinyin": "Qǐng gěi wǒmen sān bēi chá.",
        "german": "Bringen Sie uns bitte drei Tassen Tee."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "杯",
      "distractors": [
        {
          "text": "个",
          "reason": "Wasser ist nicht direkt zählbar; 一个水 ist falsch, man zählt nach dem Gefäß."
        },
        {
          "text": "本",
          "reason": "本 zählt Bücher und Hefte, keine Getränke."
        },
        {
          "text": "件",
          "reason": "件 zählt Kleidungsstücke und Angelegenheiten, keine Getränke."
        }
      ]
    },
    "related": [
      "g:名量词@HSK1",
      "g:包",
      "g:碗",
      "g:名量词@HSK2"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "words": [
      "日",
      "号",
      "岁",
      "点",
      "分",
      "年",
      "天"
    ],
    "meaning": "Zeit-Zählwörter: Tag, Datum, Lebensjahr, Uhr, Minute, Jahr",
    "notes": "Die Reihenfolge im Datum geht vom Großen zum Kleinen: Jahr – Monat – Tag – Uhrzeit. Zur Zeitdauer nach dem Verb (我住了三年) siehe die Punkte zu Zeitangaben und Mengenergänzungen.",
    "explanation": "Diese Wörter stehen direkt nach einer Zahl, ohne 个, und bilden Datums-, Uhrzeit-, Alters- und Dauerangaben.\n日 (rì) – Tag im Datum, eher schriftlich: 十月一日 „1. Oktober“.\n号 (hào) – Tag im Datum, gesprochen: 十月一号; auch für Nummern.\n岁 (suì) – Lebensjahre: 我二十岁 „Ich bin 20“. Ein 是 ist dabei nicht nötig.\n点 (diǎn) – volle Stunde der Uhrzeit: 三点 „drei Uhr“; auch 三点钟 (sān diǎn zhōng).\n分 (fēn) – Minute: 三点十分 „3:10 Uhr“; auch der Cent (1/100 Yuan).\n年 (nián) – Jahr: als Jahreszahl (二〇二六年) und als Dauer: 三年 „drei Jahre“.\n天 (tiān) – Tag als Dauer: 两天 „zwei Tage“.\nWichtig: 年 und 天 brauchen kein Zählwort (三天, nicht 三个天), anders als 月 (yuè) und 小时 (xiǎoshí): 三个月, 两个小时.",
    "examples": [
      {
        "chinese": "我女儿今年六岁。",
        "pinyin": "Wǒ nǚ'ér jīnnián liù suì.",
        "german": "Meine Tochter ist dieses Jahr sechs."
      },
      {
        "chinese": "现在是八点二十分。",
        "pinyin": "Xiànzài shì bā diǎn èrshí fēn.",
        "german": "Es ist jetzt 8:20 Uhr."
      },
      {
        "chinese": "我在北京住了三年。",
        "pinyin": "Wǒ zài Běijīng zhùle sān nián.",
        "german": "Ich habe drei Jahre in Peking gewohnt."
      },
      {
        "chinese": "他的生日是十月五号。",
        "pinyin": "Tā de shēngrì shì shí yuè wǔ hào.",
        "german": "Sein Geburtstag ist am 5. Oktober."
      },
      {
        "chinese": "我们在上海玩了两天。",
        "pinyin": "Wǒmen zài Shànghǎi wánle liǎng tiān.",
        "german": "Wir waren zwei Tage in Shanghai unterwegs."
      },
      {
        "chinese": "新年是一月一日。",
        "pinyin": "Xīnnián shì yī yuè yī rì.",
        "german": "Neujahr ist am 1. Januar."
      }
    ],
    "related": [
      "g:时间表示法：年、月、日、星期表示法",
      "g:钟点表示法",
      "g:数词@HSK1",
      "g:数量补语2：表示动作持续的时间"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "words": [
      "非常",
      "很",
      "太",
      "真",
      "有（一）点儿"
    ],
    "meaning": "Gradadverbien: sehr, äußerst, zu, wirklich, ein bisschen",
    "notes": "Ein Adjektiv als Prädikat braucht kein 是: 他很高, nicht 他是高. Ohne Gradadverb klingt ein Adjektivsatz meist vergleichend (这个贵，那个便宜).",
    "explanation": "Gradadverbien stehen vor Adjektiven und vor Verben des Fühlens und Wollens (喜欢 (xǐhuan), 想) und geben an, wie stark eine Eigenschaft ist.\n很 (hěn) – „sehr“; oft schwach betont und fast nur Bindeglied vor einem Adjektiv als Prädikat: 她很忙.\n非常 (fēicháng) – „äußerst, außerordentlich“; stärker als 很, neutral, auch in einem Attribut mit 的.\n太 (tài) – „zu“ (Übermaß) oder „so“ im Ausruf, meist mit 了: 太贵了 (tài guì le), 太好了 (tài hǎo le).\n真 (zhēn) – „wirklich, echt“; drückt das Gefühl des Sprechers aus, typisch in Ausrufen: 你真好！\n有（一）点儿 (yǒu (yì)diǎnr) – „ein bisschen, etwas“; meist bei Unangenehmem: 有点儿累.",
    "examples": [
      {
        "chinese": "今天天气非常好。",
        "pinyin": "Jīntiān tiānqì fēicháng hǎo.",
        "german": "Heute ist das Wetter ausgezeichnet."
      },
      {
        "chinese": "这件衣服太贵了。",
        "pinyin": "Zhè jiàn yīfu tài guì le.",
        "german": "Dieses Kleidungsstück ist zu teuer."
      },
      {
        "chinese": "你的中文真好！",
        "pinyin": "Nǐ de Zhōngwén zhēn hǎo!",
        "german": "Dein Chinesisch ist wirklich gut!"
      },
      {
        "chinese": "我今天有点儿累。",
        "pinyin": "Wǒ jīntiān yǒudiǎnr lèi.",
        "german": "Ich bin heute etwas müde."
      },
      {
        "chinese": "他哥哥很高。",
        "pinyin": "Tā gēge hěn gāo.",
        "german": "Sein älterer Bruder ist groß."
      }
    ],
    "related": [
      "g:很",
      "g:非常",
      "g:太",
      "g:真",
      "g:有（一）点儿",
      "g:程度副词@HSK2"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "sehr; Bindeglied vor einem Adjektiv als Prädikat",
    "formation": "Subjekt + 很 + Adjektiv / Verb des Fühlens",
    "explanation": "很 (hěn) heißt „sehr“, ist aber oft schwach betont: Steht ein Adjektiv allein als Prädikat, setzt man im neutralen Aussagesatz meist 很 davor, ohne dass „sehr“ gemeint sein muss: 我很好 „Mir geht es gut“. Ein 是 wird dabei nicht gebraucht – 我是忙 ist falsch. Ohne 很 klingt der Satz vergleichend oder unvollständig: 这个贵，那个便宜. Betont gesprochen bedeutet 很 wirklich „sehr“. Es steht auch vor Verben des Fühlens und Wollens: 很喜欢, 很想. Mit Verneinung: 很不好 „sehr schlecht“, aber 不太好 (bú tài hǎo) „nicht so gut“ (statt des seltenen 不很好).",
    "notes": "Stärker sind 非常 (fēicháng) und 真 (zhēn); 太 (tài) drückt ein Übermaß aus. In Ja-Nein-Fragen mit 吗 fehlt 很 oft (你忙吗？), in der Antwort steht es wieder (我很忙). Siehe auch den Punkt zum Adjektivprädikat.",
    "examples": [
      {
        "chinese": "我妈妈最近很忙。",
        "pinyin": "Wǒ māma zuìjìn hěn máng.",
        "german": "Meine Mutter ist in letzter Zeit sehr beschäftigt."
      },
      {
        "chinese": "这个饭店的菜很好吃。",
        "pinyin": "Zhège fàndiàn de cài hěn hǎochī.",
        "german": "Das Essen in diesem Restaurant ist lecker."
      },
      {
        "chinese": "我很喜欢我的新工作。",
        "pinyin": "Wǒ hěn xǐhuan wǒ de xīn gōngzuò.",
        "german": "Meine neue Arbeit gefällt mir sehr."
      }
    ],
    "legacyIds": [
      "g:很 + Adjektiv",
      "很 + Adjektiv"
    ],
    "related": [
      "g:程度副词@HSK1",
      "g:非常",
      "g:太",
      "g:真",
      "g:主谓句2：形容词谓语句",
      "g:不太 + Adjektiv"
    ],
    "quiz": {
      "example": 0,
      "answer": "很",
      "distractors": [
        {
          "text": "是",
          "reason": "Ein Adjektiv als Prädikat braucht kein 是; 我妈妈是忙 ist falsch."
        },
        {
          "text": "有",
          "reason": "有 + Adjektiv ist falsch; gemeint wäre allenfalls 有点儿 „etwas“."
        },
        {
          "text": "一点儿",
          "reason": "一点儿 steht nach dem Adjektiv (忙一点儿), nicht davor."
        }
      ],
      "accepted": [
        "非常",
        "真"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "zu … (Übermaß); so …! (begeisterter Ausruf)",
    "formation": "太 + Adjektiv / Verb + 了",
    "explanation": "太 (tài) hat zwei Hauptfunktionen. Erstens das Übermaß „zu“, meist mit negativer Bewertung: 太贵了 „zu teuer“, 太晚了 „zu spät“. Zweitens den begeisterten Ausruf „so, wirklich“: 太好了 (tài hǎo le)！ „Super!“, 太漂亮了！ „Wie schön!“. In beiden Fällen steht am Satzende in der Regel 了. Ob „zu“ oder „so“ gemeint ist, zeigt der Zusammenhang. Verneint wird mit 不太: 不太好 (bú tài hǎo) „nicht so gut“ – das schwächt höflich ab und braucht kein 了. Ohne 了 klingt ein einfacher Aussagesatz (这个太贵) oft abgehackt; Lernende setzen 了 am besten immer.",
    "notes": "很 (hěn) ist eine neutrale Beschreibung, 太 eine subjektive Bewertung. 不太 + Adjektiv ist ein eigener Punkt. Bei 真 (zhēn) steht kein 了.",
    "examples": [
      {
        "chinese": "这件衣服太贵了，我不买。",
        "pinyin": "Zhè jiàn yīfu tài guì le, wǒ bù mǎi.",
        "german": "Das Kleidungsstück ist zu teuer, ich kaufe es nicht."
      },
      {
        "chinese": "你也来了，太好了！",
        "pinyin": "Nǐ yě lái le, tài hǎo le!",
        "german": "Du bist auch gekommen, super!"
      },
      {
        "chinese": "我觉得这个菜不太好吃。",
        "pinyin": "Wǒ juéde zhège cài bú tài hǎochī.",
        "german": "Ich finde, dieses Gericht schmeckt nicht besonders."
      }
    ],
    "legacyIds": [
      "g:太...了",
      "太...了"
    ],
    "quiz": {
      "example": 0,
      "answer": "太",
      "distractors": [
        {
          "text": "很",
          "reason": "很 beschreibt nur „sehr“; das Übermaß „zu teuer, ich kaufe es nicht“ mit 了 am Ende verlangt 太."
        },
        {
          "text": "多",
          "reason": "多 + Adjektiv fragt „wie teuer?“ oder bildet einen Ausruf mit 啊 – kein Urteil mit 了."
        },
        {
          "text": "真",
          "reason": "真 verträgt kein 了 am Satzende (真贵！, nicht 真贵了) und drückt kein Übermaß „zu teuer“ aus."
        }
      ]
    },
    "related": [
      "g:程度副词@HSK1",
      "g:很",
      "g:真",
      "g:非常",
      "g:不太 + Adjektiv"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "wirklich, echt (gefühlsbetonte Bewertung, Ausruf)",
    "formation": "真 + Adjektiv / Verb des Fühlens",
    "explanation": "真 (zhēn) als Gradadverb drückt aus, dass der Sprecher etwas stark empfindet – Bewunderung, Überraschung, Ärger: 你真好！ „Du bist wirklich lieb!“, 今天真冷！ „Ist das heute kalt!“. Es ist typisch für Ausrufe und gesprochene Sprache, oft mit 啊 am Ende. Anders als 很 und 非常 (fēicháng) steht 真 in der Regel nicht in einem Attribut vor 的: Man sagt 一个很好的人, nicht 一个真好的人. Auch 了 wie bei 太 wird nicht angehängt. Vor Verben des Fühlens und Wollens geht es ebenfalls: 我真想家 „Ich habe wirklich Heimweh“.",
    "notes": "真的 (zhēn de) heißt „wirklich, tatsächlich“ (真的吗？ „Echt?“) und steht auch vor Verben und Verneinungen: 真的不知道 „weiß es wirklich nicht“. Als Adjektiv bedeutet 真 „echt, wahr“ (真话 „die Wahrheit“). Ähnlich im Ausruf ist 好 (hǎo, HSK 2): 好冷啊！",
    "examples": [
      {
        "chinese": "今天真冷啊！",
        "pinyin": "Jīntiān zhēn lěng a!",
        "german": "Ist das heute kalt!"
      },
      {
        "chinese": "这个电影真有意思。",
        "pinyin": "Zhège diànyǐng zhēn yǒu yìsi.",
        "german": "Dieser Film ist wirklich interessant."
      },
      {
        "chinese": "我真想去中国看看。",
        "pinyin": "Wǒ zhēn xiǎng qù Zhōngguó kànkan.",
        "german": "Ich würde wirklich gern einmal nach China fahren."
      }
    ],
    "legacyIds": [
      "g:真 + Adjektiv",
      "真 + Adjektiv"
    ],
    "related": [
      "g:程度副词@HSK1",
      "g:很",
      "g:太",
      "g:好",
      "g:非常"
    ],
    "quiz": {
      "example": 0,
      "answer": "真",
      "distractors": [
        {
          "text": "是",
          "reason": "是 verbindet keine Adjektive als Prädikat; 今天是冷 ist falsch."
        },
        {
          "text": "有",
          "reason": "有 kann nicht direkt vor einem Adjektiv stehen; 今天有冷 ist falsch."
        },
        {
          "text": "太",
          "reason": "太 verlangt im Ausruf 了 (太冷了！), nicht 啊."
        }
      ],
      "accepted": [
        "好",
        "很",
        "非常",
        "多"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "äußerst, außerordentlich (stärker als „sehr“)",
    "pinyin": "fēicháng + Adjektiv",
    "examples": [
      {
        "chinese": "她是一个非常好的老师。",
        "pinyin": "Tā shì yí ge fēicháng hǎo de lǎoshī.",
        "german": "Sie ist eine ausgezeichnete Lehrerin."
      },
      {
        "chinese": "我非常喜欢跟朋友一起看电影。",
        "pinyin": "Wǒ fēicháng xǐhuan gēn péngyou yìqǐ kàn diànyǐng.",
        "german": "Ich schaue unheimlich gern mit Freunden Filme."
      },
      {
        "chinese": "非常谢谢你来看我！",
        "pinyin": "Fēicháng xièxie nǐ lái kàn wǒ!",
        "german": "Ganz herzlichen Dank, dass du mich besuchst!"
      }
    ],
    "legacyIds": [
      "g:非常 + Adjektiv",
      "非常 + Adjektiv"
    ],
    "formation": "非常 + Adjektiv / Verb des Fühlens",
    "notes": "Als Adjektiv bedeutet 非常 (fēicháng) „außergewöhnlich“ (非常时期 „Ausnahmezeit“) – das gehört zu höheren Stufen. 很 (hěn) ist schwächer und oft nur Bindeglied, 太 (tài) drückt ein Übermaß aus.",
    "explanation": "非常 (fēicháng) verstärkt ein Adjektiv oder ein Verb des Fühlens deutlich stärker als 很: 非常好 „ausgezeichnet“, 非常喜欢 „sehr gern mögen“. Es klingt neutral bis etwas formell und passt in gesprochene wie geschriebene Sprache. Anders als 太 braucht es kein 了, und anders als 真 kann es gut in einem Attribut vor 的 stehen: 一个非常好的老师. In festen Höflichkeitsformeln ist es häufig: 非常感谢 (fēicháng gǎnxiè) „vielen herzlichen Dank“. Verneinung: 非常不方便 „äußerst unpraktisch“; 不非常 ist unüblich – für „nicht sehr“ nimmt man 不太.",
    "quiz": {
      "example": 0,
      "answer": "非常",
      "distractors": [
        {
          "text": "太",
          "reason": "太 bewertet ein Übermaß und verlangt meist 了; in einem Attribut vor 的 passt es hier nicht."
        },
        {
          "text": "真",
          "reason": "真 steht in der Regel nicht in einem Attribut vor 的."
        },
        {
          "text": "有点儿",
          "reason": "有点儿 drückt ein leichtes, meist unerwünschtes Maß aus und passt nicht zu einem Lob."
        }
      ],
      "accepted": [
        "很"
      ]
    },
    "related": [
      "g:程度副词@HSK1",
      "g:很",
      "g:太",
      "g:真",
      "g:特别"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "ein bisschen, etwas (meist unerwünscht)",
    "pinyin": "yǒu yìdiǎnr + Adjektiv",
    "examples": [
      {
        "chinese": "这个房间有点儿小。",
        "pinyin": "Zhège fángjiān yǒudiǎnr xiǎo.",
        "german": "Dieses Zimmer ist etwas klein."
      },
      {
        "chinese": "我今天有一点儿累。",
        "pinyin": "Wǒ jīntiān yǒu yìdiǎnr lèi.",
        "german": "Ich bin heute ein bisschen müde."
      },
      {
        "chinese": "他听了有点儿不高兴。",
        "pinyin": "Tā tīngle yǒudiǎnr bù gāoxìng.",
        "german": "Als er das hörte, war er etwas verstimmt."
      }
    ],
    "legacyIds": [
      "g:有一点儿 + Adjektiv",
      "有一点儿 + Adjektiv"
    ],
    "formation": "有（一）点儿 + Adjektiv / Verb",
    "notes": "Im Süden und in geschriebenen Texten auch ohne 儿: 有点 (yǒudiǎn). Merkhilfe: 有点儿 (yǒudiǎnr) + Adjektiv = Feststellung („es ist etwas zu …“), Adjektiv + 一点儿 (yìdiǎnr) = Vergleich oder Bitte („etwas mehr …“).",
    "explanation": "有点儿 (yǒudiǎnr) oder vollständig 有一点儿 (yǒu yìdiǎnr) steht vor einem Adjektiv oder Verb und schwächt es ab: „ein bisschen, etwas“. Meist geht es um etwas Unangenehmes oder nicht Erwünschtes: 有点儿贵 „etwas teuer“, 有点儿累 „ein bisschen müde“. Auch vor Verneinungen ist es häufig: 有点儿不高兴 „etwas verstimmt“. Mit eindeutig positiven Adjektiven (有点儿好) klingt es meist ungewöhnlich. Nicht verwechseln mit 一点儿 (yìdiǎnr) nach dem Adjektiv, das einen Vergleich oder Wunsch ausdrückt: 便宜一点儿 „etwas billiger“.",
    "quiz": {
      "example": 0,
      "answer": "有点儿",
      "distractors": [
        {
          "text": "一点儿",
          "reason": "一点儿 steht nach dem Adjektiv (小一点儿) und drückt einen Vergleich aus, nicht davor."
        },
        {
          "text": "一下",
          "reason": "一下 steht nach Verben (看一下), nicht vor Adjektiven."
        },
        {
          "text": "有的",
          "reason": "有的 heißt „manche“ und steht vor Nomen, nicht vor Adjektiven."
        }
      ],
      "accepted": [
        "有一点儿"
      ]
    },
    "related": [
      "g:程度副词@HSK1",
      "g:很",
      "g:太",
      "g:非常"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "alle, beide (fasst Vorangehendes zusammen)",
    "formation": "Subjekt (Mehrzahl) + 都 + Prädikat",
    "explanation": "都 (dōu) fasst zusammen, was vor ihm steht: „alle, beide, jeweils“. Es ist ein Adverb und steht deshalb immer vor dem Prädikat, nach dem, worauf es sich bezieht: 我们都是学生 „Wir sind alle Studenten“. Anders als das deutsche „alle“ kann es nicht vor dem Nomen stehen – 都学生来了 ist falsch. Bezieht es sich auf das Objekt, wird dieses nach vorn gestellt: 这些菜他都不吃 „Diese Gerichte isst er alle nicht“. Achtung bei der Verneinung: 都不 „alle nicht, keiner“, aber 不都 „nicht alle“. Mit 也 ist die Reihenfolge 也都.",
    "notes": "都 in der Bedeutung „schon“ (都八点了) ist eine andere Verwendung (HSK 2, 都……了). Fragewort + 都 (什么都 „alles“) ist ein eigener Punkt. Für eine gemeinsame Handlung sagt man 一起 (yìqǐ), nicht 都.",
    "examples": [
      {
        "chinese": "我们都是北京人。",
        "pinyin": "Wǒmen dōu shì Běijīng rén.",
        "german": "Wir kommen alle aus Peking."
      },
      {
        "chinese": "我爸爸和妈妈都喜欢喝茶。",
        "pinyin": "Wǒ bàba hé māma dōu xǐhuan hē chá.",
        "german": "Mein Vater und meine Mutter trinken beide gern Tee."
      },
      {
        "chinese": "这些菜他都不吃。",
        "pinyin": "Zhèxiē cài tā dōu bù chī.",
        "german": "Keines dieser Gerichte isst er."
      }
    ],
    "legacyIds": [
      "g:都",
      "都",
      "g:都 + 不/没",
      "都 + 不/没"
    ],
    "related": [
      "g:也",
      "g:一起",
      "g:都……了",
      "g:范围副词@HSK3",
      "g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词"
    ],
    "quiz": {
      "example": 1,
      "answer": "都",
      "distractors": [
        {
          "text": "每",
          "reason": "每 („jeder“) steht vor Zählwort + Nomen (每个人), nicht vor dem Verb."
        },
        {
          "text": "一起",
          "reason": "一起 bezeichnet eine gemeinsame Handlung; etwas mögen tut man nicht „zusammen“."
        },
        {
          "text": "所有",
          "reason": "所有 (suǒyǒu, „alle“) steht als Attribut vor dem Nomen, nicht vor dem Verb."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "gerade (dabei sein): Verlaufsform vor dem Verb",
    "formation": "Subjekt + 在 + Verb (+ Objekt) (+ 呢)",
    "explanation": "Als Adverb steht 在 (zài) direkt vor dem Verb und zeigt, dass eine Handlung gerade abläuft: 他在吃饭 „Er isst gerade“. Oft steht 呢 am Satzende (你在做什么呢？). 在 kann auch eine Tätigkeit beschreiben, die über einen längeren Zeitraum andauert: 他最近在学中文 „Er lernt zurzeit Chinesisch“. Verneint wird mit 没（在）: 我没在看电视. Mit 了 oder 过 nach dem Verb wird es nicht kombiniert, und bei Verben ohne Verlauf (是, 知道 (zhīdào)) ist es nicht üblich. Nicht verwechseln mit der Präposition 在 + Ort: 他在家看书 „Er liest zu Hause“ – hier nennt 在 den Ort, nicht den Verlauf.",
    "notes": "正在 (zhèngzài) betont stärker den Moment („genau jetzt“). Die Präposition 在 „in, an“ (他在家) ist ein eigener Punkt, ebenso die Satzmuster ……在/正在+动词（+呢）.",
    "examples": [
      {
        "chinese": "妈妈在做饭，你等一下。",
        "pinyin": "Māma zài zuò fàn, nǐ děng yíxià.",
        "german": "Mama kocht gerade, warte einen Moment."
      },
      {
        "chinese": "你在看什么呢？",
        "pinyin": "Nǐ zài kàn shénme ne?",
        "german": "Was schaust du dir gerade an?"
      },
      {
        "chinese": "他最近在学中文。",
        "pinyin": "Tā zuìjìn zài xué Zhōngwén.",
        "german": "Er lernt zurzeit Chinesisch."
      }
    ],
    "legacyIds": [
      "g:在 + Verb",
      "在 + Verb"
    ],
    "quiz": {
      "example": 0,
      "answer": "在",
      "distractors": [
        {
          "text": "了",
          "reason": "了 markiert Abgeschlossenes und steht nach dem Verb, nicht davor."
        },
        {
          "text": "是",
          "reason": "是 ist kein Verlaufsmarker; 妈妈是做饭 ist falsch."
        },
        {
          "text": "着",
          "reason": "着 steht nach dem Verb (做着饭) und beschreibt einen Zustand, nicht vor dem Verb."
        }
      ],
      "accepted": [
        "正在"
      ]
    },
    "related": [
      "g:正在",
      "g:在（引出时间、处所）",
      "g:……在/正在+动词",
      "g:……在/正在+动词……+呢"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "gerade jetzt (betonte Verlaufsform)",
    "pinyin": "zhèngzài + Verb",
    "examples": [
      {
        "chinese": "我正在开会，一会儿给你打电话。",
        "pinyin": "Wǒ zhèngzài kāihuì, yíhuìr gěi nǐ dǎ diànhuà.",
        "german": "Ich bin gerade in einer Besprechung, ich rufe dich gleich zurück."
      },
      {
        "chinese": "我回家的时候，孩子们正在睡觉。",
        "pinyin": "Wǒ huí jiā de shíhou, háizimen zhèngzài shuìjiào.",
        "german": "Als ich nach Hause kam, schliefen die Kinder gerade."
      },
      {
        "chinese": "老师正在上课，请不要说话。",
        "pinyin": "Lǎoshī zhèngzài shàngkè, qǐng bú yào shuōhuà.",
        "german": "Der Lehrer hält gerade Unterricht, bitte nicht reden."
      }
    ],
    "legacyIds": [
      "g:正在 + Verb",
      "正在 + Verb"
    ],
    "formation": "Subjekt + 正在 + Verb (+ Objekt) (+ 呢)",
    "notes": "Kurzform 正 (zhèng, HSK 2) betont noch stärker den Zeitpunkt („gerade da“). Für die Verlaufsform ohne besondere Betonung genügt 在 statt 正在 (zhèngzài). Die Satzmuster ……在/正在+动词（+呢） sind eigene Punkte.",
    "explanation": "正在 (zhèngzài) steht vor dem Verb und betont, dass eine Handlung genau in dem Moment abläuft, um den es geht: 我正在开会 „Ich bin gerade in einer Besprechung“. Oft gibt ein Zeitpunkt den Rahmen an – jetzt oder ein Moment in der Vergangenheit: 我回家的时候，孩子们正在睡觉. Wie bei 在 steht oft 呢 am Satzende. Im Vergleich zu 在 legt 正在 mehr Gewicht auf den genauen Zeitpunkt, während 在 auch längere Tätigkeiten beschreibt (他最近在学中文). Verneint wird meist mit 没（在）, nicht mit 没正在. Nach dem Verb steht kein 了 oder 过.",
    "quiz": {
      "example": 1,
      "answer": "正在",
      "distractors": [
        {
          "text": "已经",
          "reason": "已经 („schon“) bräuchte 了 am Ende; gemeint ist eine gleichzeitig laufende Handlung."
        },
        {
          "text": "再",
          "reason": "再 („noch einmal“) blickt auf eine künftige Wiederholung, nicht auf einen laufenden Vorgang."
        },
        {
          "text": "着",
          "reason": "着 steht nach dem Verb, nicht davor."
        }
      ],
      "accepted": [
        "在"
      ]
    },
    "related": [
      "g:在",
      "g:时间副词@HSK2",
      "g:……在/正在+动词",
      "g:……在/正在+动词……+呢"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "noch einmal, wieder (künftige Wiederholung)",
    "pinyin": "zài + Verb",
    "examples": [
      {
        "chinese": "对不起，请你再说一次。",
        "pinyin": "Duìbuqǐ, qǐng nǐ zài shuō yí cì.",
        "german": "Entschuldigung, sag das bitte noch einmal."
      },
      {
        "chinese": "这个菜很好吃，我想再吃一点儿。",
        "pinyin": "Zhège cài hěn hǎochī, wǒ xiǎng zài chī yìdiǎnr.",
        "german": "Das Gericht ist lecker, ich möchte noch etwas davon essen."
      },
      {
        "chinese": "他今天不在，你明天再来吧。",
        "pinyin": "Tā jīntiān bú zài, nǐ míngtiān zài lái ba.",
        "german": "Er ist heute nicht da, komm doch morgen wieder."
      }
    ],
    "legacyIds": [
      "g:再 + Verb",
      "再 + Verb"
    ],
    "formation": "再 + Verb (+ Mengenangabe: 一次/一遍/一点儿)",
    "notes": "又 (yòu, HSK 3) = Wiederholung in der Vergangenheit. 再² (HSK 2) bedeutet „erst dann“: 吃了饭再走 „Iss erst, dann geh“. Nicht verwechseln mit 在 (zài, „gerade; in“), das gleich klingt.",
    "explanation": "再 (zài) steht vor dem Verb und drückt aus, dass eine Handlung (noch einmal) wiederholt oder fortgesetzt wird, die noch nicht geschehen ist – typisch in Bitten, Vorschlägen und Plänen: 请再说一遍 „Bitte sag es noch einmal“, 我们明天再来 „Wir kommen morgen wieder“. Häufig folgen Mengenangaben wie 一次 (yí cì), 一遍 (yí biàn) oder 一点儿 (yìdiǎnr): 再吃一点儿 „iss noch etwas“. Auch der Gruß 再见 (zàijiàn) „Auf Wiedersehen“ gehört hierher. Typischer Fehler: 再 für eine bereits geschehene Wiederholung verwenden – dafür steht 又 (他昨天又来了).",
    "quiz": {
      "example": 0,
      "answer": "再",
      "distractors": [
        {
          "text": "又",
          "reason": "又 bezeichnet eine bereits geschehene Wiederholung; die Bitte richtet sich auf die Zukunft."
        },
        {
          "text": "还",
          "reason": "还 heißt „noch, außerdem“; eine Wiederholung derselben Handlung drückt man mit 再 aus."
        },
        {
          "text": "在",
          "reason": "在 (zài) klingt gleich, markiert aber eine laufende Handlung oder einen Ort; „noch einmal“ heißt 再."
        }
      ]
    },
    "related": [
      "g:又",
      "g:再²",
      "g:频率副词@HSK3",
      "g:还¹"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "noch, außerdem (fügt etwas hinzu)",
    "formation": "Subjekt + 还 + Verb (+ Objekt)",
    "explanation": "In dieser Verwendung fügt 还 (hái) etwas hinzu: „noch, außerdem, zusätzlich“. Es steht nach dem Subjekt direkt vor dem Verb: 你还要什么？ „Was möchtest du noch?“, 他会说汉语，还会写汉字 „Er spricht Chinesisch und kann außerdem Schriftzeichen schreiben“. Oft kommt so beim selben Subjekt eine weitere Handlung oder Sache dazu, während 也 eher zeigt, dass ein anderes Subjekt dasselbe tut (他也会说汉语 „Er spricht auch Chinesisch“). Als Anschluss am Satzanfang steht 还有 (háiyǒu) „außerdem, und dann noch“. Typischer Fehler: 还 vor das Subjekt stellen (还我要……) – richtig ist 我还要…….",
    "notes": "还 hat mehrere Verwendungen, die eigene Punkte sind: 还² „(immer) noch“ (他还没来, HSK 2), 还³ zur Steigerung (比……还……, HSK 3) und 还⁴ als Modaladverb (HSK 4). 还是 (háishi) heißt „oder“ in Fragen bzw. „lieber doch“.",
    "examples": [
      {
        "chinese": "你还想吃什么？",
        "pinyin": "Nǐ hái xiǎng chī shénme?",
        "german": "Was möchtest du noch essen?"
      },
      {
        "chinese": "他会说汉语，还会写一点儿汉字。",
        "pinyin": "Tā huì shuō Hànyǔ, hái huì xiě yìdiǎnr Hànzì.",
        "german": "Er spricht Chinesisch und kann außerdem ein paar Schriftzeichen schreiben."
      },
      {
        "chinese": "我买了两本书，还买了一个杯子。",
        "pinyin": "Wǒ mǎile liǎng běn shū, hái mǎile yí ge bēizi.",
        "german": "Ich habe zwei Bücher gekauft und dazu noch eine Tasse."
      }
    ],
    "legacyIds": [
      "g:还",
      "还"
    ],
    "related": [
      "g:也",
      "g:还²",
      "g:……，还……",
      "g:再¹",
      "g:还是……吧"
    ],
    "quiz": {
      "example": 2,
      "answer": "还",
      "distractors": [
        {
          "text": "再",
          "reason": "再 blickt auf eine künftige Wiederholung; für eine zusätzliche Sache in der Vergangenheit (mit 了) passt es nicht."
        },
        {
          "text": "都",
          "reason": "都 fasst eine Mehrzahl davor zusammen („alle“) und fügt nichts hinzu."
        },
        {
          "text": "正在",
          "reason": "正在 beschreibt eine laufende Handlung und verträgt sich nicht mit 了."
        }
      ],
      "accepted": [
        "也",
        "又"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "auch, ebenfalls",
    "formation": "Subjekt + 也 + Verb / Adjektiv",
    "explanation": "也 (yě) heißt „auch, ebenfalls“. Es ist ein Adverb und steht deshalb immer nach dem Subjekt und vor dem Prädikat – anders als das deutsche „auch“, das fast überall stehen kann. „Ich auch“ heißt 我也是 oder 我也……, nie 也我. Mit Verneinung: 也不 / 也没 „auch nicht“. Zusammen mit 都 gilt die Reihenfolge 也都: 他们也都来了 „Sie sind auch alle gekommen“. 也 kann ein weiteres Subjekt anschließen (我也去) oder beim selben Subjekt eine weitere Eigenschaft oder Handlung (她喜欢唱歌，也喜欢跳舞).",
    "notes": "Das Satzmuster ……，也…… und 除了 (chúle) ……（以外 (yǐwài)），……也…… sind eigene Punkte. Für eine zusätzliche Handlung desselben Subjekts ist auch 还 (hái) üblich.",
    "examples": [
      {
        "chinese": "我是学生，我朋友也是学生。",
        "pinyin": "Wǒ shì xuésheng, wǒ péngyou yě shì xuésheng.",
        "german": "Ich bin Student, und mein Freund ist auch Student."
      },
      {
        "chinese": "你不去吗？我也不去。",
        "pinyin": "Nǐ bú qù ma? Wǒ yě bú qù.",
        "german": "Du gehst nicht hin? Ich auch nicht."
      },
      {
        "chinese": "她喜欢唱歌，也喜欢跳舞。",
        "pinyin": "Tā xǐhuan chànggē, yě xǐhuan tiàowǔ.",
        "german": "Sie singt gern und tanzt auch gern."
      }
    ],
    "legacyIds": [
      "也"
    ],
    "related": [
      "g:都¹",
      "g:还¹",
      "g:……，也……",
      "g:除了……（以外），……还/也/都……"
    ],
    "quiz": {
      "example": 2,
      "answer": "也",
      "distractors": [
        {
          "text": "都",
          "reason": "都 fasst eine Mehrzahl zusammen; 她 ist nur eine Person."
        },
        {
          "text": "和",
          "reason": "和 verbindet Nomen (我和你), nicht zwei Verbgruppen nach einem Komma."
        },
        {
          "text": "再",
          "reason": "再 bezeichnet eine künftige Wiederholung, nicht „auch“."
        }
      ],
      "accepted": [
        "还"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "words": [
      "不",
      "没（有）",
      "不要"
    ],
    "meaning": "Verneinung: nicht – nicht geschehen / nicht haben – Verbot „tu nicht …!“",
    "notes": "Faustregel: 不 für Wollen und Allgemeines, 没 für Geschehenes und Haben. Umgangssprachlich wird statt 不要 (bú yào) oft 别 (bié, HSK 2) verwendet.",
    "explanation": "Die drei Verneinungswörter der Stufe 1 stehen vor dem Verb oder Adjektiv; welches man wählt, hängt von Zeit, Art der Handlung und Satzart ab.\n不 (bù) – verneint Wille, Gewohnheit, Gegenwart und Zukunft, Eigenschaften und 是: 我不去, 不贵, 不是 (bú shì). Vor dem 4. Ton gesprochen bú.\n没（有） (méi(yǒu)) – sagt, dass etwas nicht geschehen ist: 他没来; außerdem Besitz und Vorhandensein: 没有钱 – 有 wird nie mit 不 verneint.\n不要 (bú yào) – verbietet oder bittet, etwas zu unterlassen: 不要说话！ „Nicht reden!“.",
    "examples": [
      {
        "chinese": "我明天不上班。",
        "pinyin": "Wǒ míngtiān bú shàngbān.",
        "german": "Ich arbeite morgen nicht."
      },
      {
        "chinese": "他昨天没来上课。",
        "pinyin": "Tā zuótiān méi lái shàngkè.",
        "german": "Er ist gestern nicht zum Unterricht gekommen."
      },
      {
        "chinese": "我没有哥哥，只有一个姐姐。",
        "pinyin": "Wǒ méiyǒu gēge, zhǐ yǒu yí ge jiějie.",
        "german": "Ich habe keinen älteren Bruder, nur eine ältere Schwester."
      },
      {
        "chinese": "不要在这里吃东西！",
        "pinyin": "Bú yào zài zhèlǐ chī dōngxi!",
        "german": "Hier bitte nicht essen!"
      },
      {
        "chinese": "这个菜不好吃。",
        "pinyin": "Zhège cài bù hǎochī.",
        "german": "Dieses Gericht schmeckt nicht."
      }
    ],
    "related": [
      "g:不",
      "g:没（有）",
      "g:不要",
      "g:别",
      "g:不用"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "nicht (Wille, Gewohnheit, Zukunft, Eigenschaft)",
    "formation": "不 + Verb / Adjektiv / Modalverb",
    "explanation": "不 (bù) verneint Verben, Adjektive und Modalverben, wenn es um Wille, Gewohnheit, Gegenwart oder Zukunft oder um Eigenschaften geht: 我不喝酒 „Ich trinke keinen Alkohol“, 他明天不来 „Er kommt morgen nicht“, 不贵 „nicht teuer“. Auch 是, 会, 想 und 能 werden mit 不 verneint. Zwei wichtige Grenzen: 有 wird nicht mit 不 verneint (没有 (méiyǒu) statt 不有), und wer sagen will, dass etwas nicht geschehen ist, braucht 没: 他昨天没来. 不 in der Vergangenheit drückt eher eine Weigerung aus. Aussprache: vor einem 4. Ton wird 不 zu bú (不去 (bú qù), 不是 (bú shì)). In Ja-Nein-Fragen steht es zwischen zwei gleichen Verben: 你去不去？",
    "notes": "没（有） (méi(yǒu)) verneint Geschehenes und Besitz; 不要 (bú yào) verbietet. 不太 + Adjektiv „nicht so“ ist ein eigener Punkt.",
    "examples": [
      {
        "chinese": "我不喜欢喝咖啡。",
        "pinyin": "Wǒ bù xǐhuan hē kāfēi.",
        "german": "Ich trinke nicht gern Kaffee."
      },
      {
        "chinese": "他明天不去学校。",
        "pinyin": "Tā míngtiān bú qù xuéxiào.",
        "german": "Er geht morgen nicht zur Schule."
      },
      {
        "chinese": "今天不冷，我们出去走走吧。",
        "pinyin": "Jīntiān bù lěng, wǒmen chūqu zǒuzou ba.",
        "german": "Heute ist es nicht kalt, lass uns ein bisschen rausgehen."
      }
    ],
    "legacyIds": [
      "不"
    ],
    "related": [
      "g:否定副词@HSK1",
      "g:没（有）",
      "g:不要",
      "g:不太 + Adjektiv",
      "g:别"
    ],
    "quiz": {
      "example": 0,
      "answer": "不",
      "distractors": [
        {
          "text": "没",
          "reason": "没 verneint Geschehenes und Besitz; eine Vorliebe (喜欢) verneint man mit 不."
        },
        {
          "text": "别",
          "reason": "别 ist ein Verbot an den Gesprächspartner („tu das nicht!“), keine Aussage über sich selbst."
        },
        {
          "text": "不要",
          "reason": "不要 verbietet oder lehnt etwas ab; vor 喜欢 kann es keine Vorliebe verneinen."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "nicht (getan), noch nicht – Verneinung eingetretener Handlungen",
    "formation": "Subjekt + 没（有） + Verb (+ Objekt)",
    "explanation": "没 (méi) oder 没有 (méiyǒu) vor einem Verb verneint, dass eine Handlung stattgefunden hat oder schon eingetreten ist: 他没来 = „er ist nicht gekommen“. Mit 还 (hái) davor heißt es „noch nicht“: 我还没吃饭. Das 了 nach dem Verb fällt in der Verneinung weg: 我吃了 → 我没吃; falsch wäre 我没吃了. 没 und 没有 bedeuten dasselbe; als Kurzantwort steht meist 没有: 你去了吗？– 没有。 Für Gewohnheiten, Absichten und die Zukunft nimmt man dagegen 不 (bù): 我明天不去. Auch 是 wird nur mit 不 verneint.",
    "notes": "Vor 有 steht immer 没, nie 不: 我没有钱 = „ich habe kein Geld“ – hier ist 没有 (méiyǒu) das Verb „nicht haben“. 不 und 没 sind nicht austauschbar: 他不来 = „er kommt nicht / will nicht kommen“, 他没来 = „er ist nicht gekommen“. A 没有 B 那么 (nàme) + Adjektiv („nicht so … wie“) ist ein eigener Punkt (HSK 2).",
    "examples": [
      {
        "chinese": "他昨天没来上课。",
        "pinyin": "Tā zuótiān méi lái shàngkè.",
        "german": "Er ist gestern nicht zum Unterricht gekommen."
      },
      {
        "chinese": "我还没有吃早饭。",
        "pinyin": "Wǒ hái méiyǒu chī zǎofàn.",
        "german": "Ich habe noch nicht gefrühstückt."
      },
      {
        "chinese": "妈妈没买那本书。",
        "pinyin": "Māma méi mǎi nà běn shū.",
        "german": "Mama hat das Buch nicht gekauft."
      }
    ],
    "legacyIds": [
      "g:没/没有",
      "没/没有"
    ],
    "related": [
      "g:不",
      "g:不要",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:一……也/都+不/没……"
    ],
    "quiz": {
      "example": 0,
      "answer": "没",
      "distractors": [
        {
          "text": "不",
          "reason": "不 verneint Gewohnheiten, Absichten oder Zukünftiges; für ein Ereignis von gestern, das nicht stattfand, steht 没."
        },
        {
          "text": "别",
          "reason": "别 ist ein Verbot an den Angesprochenen („tu das nicht“) und passt nicht in eine Aussage über gestern."
        },
        {
          "text": "不要",
          "reason": "不要 drückt eine Aufforderung („tu das nicht“) aus, keine Handlung, die nicht eingetreten ist."
        }
      ],
      "accepted": [
        "没有"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "nicht …! / bitte nicht – verneinte Aufforderung",
    "pinyin": "búyào + Verb",
    "examples": [
      {
        "chinese": "上课的时候不要玩手机。",
        "pinyin": "Shàngkè de shíhou búyào wán shǒujī.",
        "german": "Spiel im Unterricht nicht mit dem Handy."
      },
      {
        "chinese": "请不要在这儿吃东西。",
        "pinyin": "Qǐng búyào zài zhèr chī dōngxi.",
        "german": "Bitte hier nicht essen."
      },
      {
        "chinese": "外面很冷，你不要出去了。",
        "pinyin": "Wàimiàn hěn lěng, nǐ búyào chūqu le.",
        "german": "Draußen ist es kalt – geh lieber nicht mehr raus."
      }
    ],
    "legacyIds": [
      "g:不要 + Verb",
      "不要 + Verb"
    ],
    "formation": "(请 +) 不要 + Verb (+ Objekt)",
    "notes": "别 (bié, HSK 2) bedeutet dasselbe und ist in der Umgangssprache häufiger; 不要 (búyào) wirkt etwas nachdrücklicher. 不用 (búyòng) heißt dagegen „nicht nötig“ und ist kein Verbot. Vergangenes verneint man mit 没（有）, nicht mit 不要.",
    "explanation": "不要 (búyào) vor einem Verb bildet eine verneinte Aufforderung oder ein Verbot: „tu das nicht“, „bitte nicht …“. Das Subjekt (du/ihr) fällt oft weg: 不要说话 = „Nicht reden!“. Mit 请 (qǐng) davor klingt es höflicher, typisch für Schilder und Hinweise: 请不要在这儿吃东西. 不要……了 bedeutet „hör auf mit …“: 不要哭了 = „Hör auf zu weinen!“. 不 wird vor dem vierten Ton von 要 (yào) als bú gesprochen. Gemeint ist hier nur die Aufforderung; in 我不要这个 = „Das will ich nicht“ ist 要 dagegen das Verb „wollen“.",
    "quiz": {
      "example": 1,
      "answer": "不要",
      "distractors": [
        {
          "text": "不",
          "reason": "Ein bloßes 不 bildet nach 请 kein Verbot; für „bitte nicht …“ braucht man 不要 oder 别."
        },
        {
          "text": "没有",
          "reason": "没有 verneint, dass etwas geschehen ist; eine Bitte oder ein Verbot mit 请 bildet es nicht."
        },
        {
          "text": "别的",
          "reason": "别的 heißt „andere(s)“ und ist ein Attribut, keine Verneinung – leicht mit 别 zu verwechseln."
        }
      ],
      "accepted": [
        "别"
      ]
    },
    "related": [
      "g:不",
      "g:没（有）",
      "g:别",
      "g:不用"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "in, an, auf, um – Ort oder Zeit einer Handlung (Präposition)",
    "pinyin": "zài + Ort + Verb",
    "examples": [
      {
        "chinese": "他在学校学习汉语。",
        "pinyin": "Tā zài xuéxiào xuéxí Hànyǔ.",
        "german": "Er lernt in der Schule Chinesisch."
      },
      {
        "chinese": "我们在火车站见面吧。",
        "pinyin": "Wǒmen zài huǒchēzhàn jiànmiàn ba.",
        "german": "Treffen wir uns am Bahnhof."
      },
      {
        "chinese": "电影在晚上七点开始。",
        "pinyin": "Diànyǐng zài wǎnshang qī diǎn kāishǐ.",
        "german": "Der Film beginnt um sieben Uhr abends."
      }
    ],
    "legacyIds": [
      "g:在 + Ort",
      "在 + Ort",
      "g:在 + Ort + Verb",
      "在 + Ort + Verb"
    ],
    "related": [
      "g:在",
      "g:正在",
      "g:从¹",
      "g:（在）……以前/以后/前/后"
    ],
    "formation": "Subjekt + 在 + Ort/Zeit + Verb (+ Objekt)",
    "notes": "在 hat noch andere Gebrauchsweisen: als Verb „sich befinden“ (他在家 = „er ist zu Hause“) und als Adverb der Verlaufsform (他在吃饭 = „er isst gerade“, eigener Punkt). Nach einigen Verben steht 在 hinter dem Verb: 住在北京 = „in Peking wohnen“.",
    "explanation": "Als Präposition nennt 在 (zài) den Ort oder die Zeit, an dem bzw. zu der etwas geschieht. Anders als im Deutschen steht die 在-Gruppe vor dem Verb: 我在家吃饭 = „ich esse zu Hause“, nicht 我吃饭在家. Beim Ort folgt oft ein Ortswort wie 上 (shàng) oder 里 (lǐ): 在桌子上, 在学校里. Auch Zeitangaben kann 在 einleiten (电影在七点开始); oft fällt es vor einer Zeitangabe aber weg: 我七点起床. Verneinung und Hilfsverben stehen vor 在: 我不在家吃饭, 我想在北京工作.",
    "quiz": {
      "example": 0,
      "answer": "在",
      "distractors": [
        {
          "text": "是",
          "reason": "是 („sein“) setzt zwei Dinge gleich; vor einer Ortsangabe mit folgendem Verb steht 在."
        },
        {
          "text": "从",
          "reason": "从 nennt den Ausgangspunkt („von … aus“); hier geht es darum, wo er lernt."
        },
        {
          "text": "对",
          "reason": "对 nennt das Gegenüber einer Haltung („zu, gegenüber“), keinen Ort."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "mit (jemandem) – Partner einer Handlung (Präposition)",
    "formation": "Subjekt + 和 + Person (+ 一起) + Verb",
    "notes": "跟 (gēn, HSK 2) wird genauso gebraucht und ist umgangssprachlicher. Verbindet 和 zwei gleichrangige Nomen („ich und du“), ist es das Bindewort 和². Für „mit einem Werkzeug“ (mit Stäbchen essen) steht nicht 和, sondern 用 (yòng).",
    "explanation": "Als Präposition nennt 和 (hé) die Person, mit der man etwas zusammen oder miteinander tut: „mit jemandem“. Die 和-Gruppe steht vor dem Verb, oft zusammen mit 一起 (yìqǐ) = „zusammen“: 我和朋友一起去. Typisch ist sie bei Verben, die einen Partner brauchen, etwa 说话 (shuōhuà), 见面 (jiànmiàn) oder 打电话 (dǎ diànhuà). Woran man die Präposition erkennt: Adverbien, Verneinung und Hilfsverben können vor 和 stehen – 我不想和他说话 = „ich will nicht mit ihm reden“. Beim Bindewort 和² („und“) geht das nicht.",
    "examples": [
      {
        "chinese": "我明天和朋友一起去看电影。",
        "pinyin": "Wǒ míngtiān hé péngyou yìqǐ qù kàn diànyǐng.",
        "german": "Ich gehe morgen mit Freunden ins Kino."
      },
      {
        "chinese": "她不想和我说话。",
        "pinyin": "Tā bù xiǎng hé wǒ shuōhuà.",
        "german": "Sie will nicht mit mir reden."
      },
      {
        "chinese": "我每天晚上和妈妈打电话。",
        "pinyin": "Wǒ měi tiān wǎnshang hé māma dǎ diànhuà.",
        "german": "Ich telefoniere jeden Abend mit meiner Mutter."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "和",
      "distractors": [
        {
          "text": "对",
          "reason": "对 richtet eine Haltung oder Äußerung an jemanden („zu, gegenüber“); für „zusammen mit“ steht 和."
        },
        {
          "text": "给",
          "reason": "给 nennt den Empfänger („für, an jemanden“), nicht den Begleiter."
        },
        {
          "text": "在",
          "reason": "在 braucht eine Orts- oder Zeitangabe; 朋友 ist aber eine Person."
        }
      ],
      "accepted": [
        "跟"
      ]
    },
    "related": [
      "g:和²",
      "g:跟¹",
      "g:对",
      "g:给"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "zu, gegenüber, für – Bezugsperson oder -sache (Präposition)",
    "pinyin": "duì + Nomen + gǎn xìngqù",
    "examples": [
      {
        "chinese": "老师对我们很好。",
        "pinyin": "Lǎoshī duì wǒmen hěn hǎo.",
        "german": "Die Lehrerin ist sehr nett zu uns."
      },
      {
        "chinese": "多喝水对身体好。",
        "pinyin": "Duō hē shuǐ duì shēntǐ hǎo.",
        "german": "Viel Wasser zu trinken ist gut für die Gesundheit."
      },
      {
        "chinese": "他对我说了很多话。",
        "pinyin": "Tā duì wǒ shuō le hěn duō huà.",
        "german": "Er hat mir sehr viel erzählt."
      }
    ],
    "legacyIds": [
      "g:对 + Nomen + 感兴趣",
      "对 + Nomen + 感兴趣"
    ],
    "formation": "对 + Person/Sache + Verb/Adjektiv",
    "notes": "对 ist auch ein Adjektiv „richtig“ (你说得对, 对不起 (duìbuqǐ)). 对于 (duìyú) ist eine formellere Präposition für „bezüglich“ (HSK 4). 和¹ (hé) heißt „mit“ – für gemeinsames oder gegenseitiges Tun.",
    "explanation": "Als Präposition nennt 对 (duì) die Person oder Sache, auf die sich eine Handlung, Haltung oder Wirkung richtet: „zu jemandem“, „gegenüber“, „für“. Die 对-Gruppe steht vor dem Prädikat. Häufige Verbindungen: 对……好 = „nett zu …“ oder „gut für …“, 对……说 = „zu jemandem sagen“, 对……感兴趣 (gǎn xìngqù) = „sich für … interessieren“. Gradwörter wie 很 stehen hinter der 对-Gruppe, direkt vor dem Adjektiv: 他对我很好. 对 zeigt eine Richtung an, kein gemeinsames Tun – „mit jemandem reden“ heißt 和……说话 (shuōhuà).",
    "quiz": {
      "example": 0,
      "answer": "对",
      "distractors": [
        {
          "text": "给",
          "reason": "给 nennt den Empfänger von etwas („jemandem geben, für jemanden tun“); „nett zu jemandem“ heißt 对……好."
        },
        {
          "text": "在",
          "reason": "在 leitet einen Ort oder eine Zeit ein, keine Person, auf die sich eine Haltung richtet."
        },
        {
          "text": "是",
          "reason": "是 („sein“) setzt zwei Dinge gleich und lässt sich nicht mit einem Adjektiv wie 很好 verbinden."
        }
      ]
    },
    "related": [
      "g:和¹",
      "g:给",
      "g:跟¹",
      "g:关于",
      "g:对于"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "und – verbindet Wörter und Wortgruppen (Bindewort)",
    "formation": "A + 和 + B (Nomen, Pronomen, Wortgruppen)",
    "explanation": "Als Bindewort verbindet 和 (hé) gleichrangige Wörter oder Wortgruppen, vor allem Nomen und Pronomen: 我和你 = „ich und du“, 老师和学生 = „Lehrer und Schüler“. Bei mehr als zwei Gliedern steht 和 nur vor dem letzten; die übrigen trennt das Aufzählungskomma 、: 我、你和他. Ganze Sätze verbindet 和 in der Regel nicht – dafür stehen Adverbien wie 也 (yě) oder 还 (hái), oder man reiht die Sätze ohne Bindewort. Auch zwei Adjektive im Prädikat verbindet man nicht mit 和, sondern z. B. mit 很……也很…….",
    "notes": "和 kann auch Präposition sein (和¹, „mit“): 我和他一起去 lässt sich als „er und ich gehen zusammen“ oder „ich gehe mit ihm“ verstehen. Steht ein Adverb oder eine Verneinung vor 和 (我不和他去), ist es die Präposition. 跟 (gēn) kann umgangssprachlich ebenfalls „und“ bedeuten.",
    "examples": [
      {
        "chinese": "我和我妹妹都是学生。",
        "pinyin": "Wǒ hé wǒ mèimei dōu shì xuésheng.",
        "german": "Meine kleine Schwester und ich sind beide Schülerinnen."
      },
      {
        "chinese": "桌子上有书、本子和笔。",
        "pinyin": "Zhuōzi shang yǒu shū, běnzi hé bǐ.",
        "german": "Auf dem Tisch liegen Bücher, Hefte und Stifte."
      },
      {
        "chinese": "爸爸和妈妈今天都不在家。",
        "pinyin": "Bàba hé māma jīntiān dōu bú zài jiā.",
        "german": "Papa und Mama sind heute beide nicht zu Hause."
      }
    ],
    "legacyIds": [
      "g:和 / 跟",
      "和 / 跟"
    ],
    "related": [
      "g:和¹",
      "g:也",
      "g:跟¹"
    ],
    "quiz": {
      "example": 2,
      "answer": "和",
      "distractors": [
        {
          "text": "也",
          "reason": "也 („auch“) ist ein Adverb vor dem Verb und verbindet keine Nomen."
        },
        {
          "text": "都",
          "reason": "都 („beide, alle“) steht vor dem Verb und fasst zusammen, verbindet aber nicht zwei Nomen."
        },
        {
          "text": "还",
          "reason": "还 („noch, außerdem“) ist ein Adverb vor dem Verb, kein Bindewort zwischen Nomen."
        }
      ],
      "accepted": [
        "跟"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Attributpartikel: Besitz, Eigenschaft, Beschreibung vor einem Nomen",
    "formation": "Attribut + 的 + Nomen",
    "explanation": "Das Strukturwort 的 (de) verbindet ein Attribut mit dem Nomen, das es näher bestimmt; das Attribut steht immer davor. Es zeigt Besitz und Zugehörigkeit (我的书 = „mein Buch“, 老师的手机 = „das Handy der Lehrerin“) und Eigenschaften (很漂亮的花 = „sehr schöne Blumen“). Auch ganze Wortgruppen werden so angeschlossen, wo das Deutsche einen Relativsatz bildet: 昨天买的苹果 = „die Äpfel, die wir gestern gekauft haben“. Oft entfällt 的: bei engen persönlichen Beziehungen (我妈妈, 我们学校) und bei einsilbigen Adjektiven (好朋友 (hǎo péngyou), 新衣服). Mit einem Gradwort braucht das Adjektiv dagegen meist 的: 很好的朋友.",
    "notes": "Steht nach 的 kein Nomen (这本书是我的), ist das die 的-Wortgruppe (eigener Punkt, HSK 2). 的, 得 und 地 werden alle de gesprochen: 得 steht nach dem Verb (说得很好), 地 vor dem Verb (慢慢地走).",
    "examples": [
      {
        "chinese": "这是我的手机。",
        "pinyin": "Zhè shì wǒ de shǒujī.",
        "german": "Das ist mein Handy."
      },
      {
        "chinese": "她有一个很漂亮的杯子。",
        "pinyin": "Tā yǒu yí ge hěn piàoliang de bēizi.",
        "german": "Sie hat eine sehr schöne Tasse."
      },
      {
        "chinese": "昨天买的苹果很好吃。",
        "pinyin": "Zuótiān mǎi de píngguǒ hěn hǎochī.",
        "german": "Die Äpfel, die wir gestern gekauft haben, schmecken sehr gut."
      }
    ],
    "legacyIds": [
      "g:的 (Attributiv)",
      "的 (Attributiv)"
    ],
    "related": [
      "g:其他结构类型：“的”字短语",
      "g:得",
      "g:地",
      "g:基本结构类型：偏正短语"
    ],
    "quiz": {
      "example": 0,
      "answer": "的",
      "distractors": [
        {
          "text": "得",
          "reason": "得 steht nach einem Verb und leitet eine Bewertung ein (说得好); vor einem Nomen steht 的."
        },
        {
          "text": "地",
          "reason": "地 verbindet ein Adverbial mit einem folgenden Verb, nicht ein Attribut mit einem Nomen."
        },
        {
          "text": "了",
          "reason": "了 ist eine Aspekt- bzw. Satzpartikel und kann kein Attribut an ein Nomen anschließen."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Aspektpartikel nach dem Verb: Handlung abgeschlossen bzw. eingetreten",
    "formation": "Verb + 了 (+ Mengenangabe/Attribut + Objekt)",
    "explanation": "了 (le) direkt nach dem Verb zeigt, dass eine Handlung abgeschlossen oder verwirklicht ist. Es ist kein Vergangenheitstempus: Es steht auch bei zukünftigen Handlungen, die vor einer anderen abgeschlossen sein werden (下了课我们去吃饭), und fehlt meist bei vergangenen Gewohnheiten (以前他常常喝茶). Hat das Verb ein Objekt, steht 了 vor dem Objekt, und das Objekt trägt meist eine Mengenangabe oder ein Attribut: 我买了两本书. Ein bloßes 我吃了饭 klingt unvollständig; es braucht eine Fortsetzung oder das satzfinale 了² (我吃了饭了). Verneint wird mit 没（有） vor dem Verb, und 了 fällt weg: 我没买书.",
    "notes": "了² (HSK 1) steht am Satzende und zeigt eine Veränderung oder neue Situation (下雨了). Beide zusammen (我学了两年汉语了) bedeuten, dass etwas bis jetzt andauert: „ich lerne schon seit zwei Jahren Chinesisch“. Erfahrungen („schon einmal“) drückt 过 (guo, HSK 2) aus.",
    "examples": [
      {
        "chinese": "我昨天买了两本书。",
        "pinyin": "Wǒ zuótiān mǎi le liǎng běn shū.",
        "german": "Ich habe gestern zwei Bücher gekauft."
      },
      {
        "chinese": "他喝了一杯茶。",
        "pinyin": "Tā hē le yì bēi chá.",
        "german": "Er hat eine Tasse Tee getrunken."
      },
      {
        "chinese": "下了课我们去吃饭吧。",
        "pinyin": "Xià le kè wǒmen qù chīfàn ba.",
        "german": "Lass uns nach dem Unterricht essen gehen."
      }
    ],
    "legacyIds": [
      "g:了 (Abschluss)",
      "了 (Abschluss)"
    ],
    "related": [
      "g:了²",
      "g:完成态：用动态助词“了¹”表示",
      "g:过",
      "g:着",
      "g:没（有）"
    ],
    "quiz": {
      "example": 0,
      "answer": "了",
      "distractors": [
        {
          "text": "着",
          "reason": "着 beschreibt einen andauernden Zustand; für einen abgeschlossenen Kauf mit Mengenangabe steht 了."
        },
        {
          "text": "得",
          "reason": "得 leitet nach dem Verb eine Bewertung oder ein Ergebnis ein (买得很多), kein Objekt mit Mengenangabe."
        },
        {
          "text": "的",
          "reason": "Mit 的 entstünde nur die Nominalgruppe „die zwei Bücher, die ich gestern gekauft habe“ – dem Satz fehlte das Prädikat."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "words": [
      "吧¹",
      "了²",
      "吗",
      "呢¹",
      "呢²",
      "呢³"
    ],
    "meaning": "Modalpartikeln am Satzende: Frage, Vorschlag, Rückfrage, Verlauf, Veränderung",
    "formation": "Satz + Modalpartikel (am Satzende, neutraler Ton)",
    "explanation": "Modalpartikeln stehen am Satzende, werden im neutralen Ton gesprochen und bestimmen Satzart und Stimmung. HSK 1 führt sechs Gebrauchsweisen ein:\n吗 (ma) – macht aus einer Aussage eine Ja/Nein-Frage: 你是学生吗？\n吧¹ (ba) – Vorschlag, Bitte oder milde Aufforderung: 我们走吧。\n呢¹ (ne) – in Fragen mit Fragewort oder Alternative, macht sie weicher: 你去哪儿呢？\n呢² (ne) – verkürzte Rückfrage nach einem Nomen: 我很好，你呢？ = „Mir geht es gut, und dir?“; ohne Kontext „wo ist …?“\n呢³ (ne) – zeigt, dass etwas gerade andauert, oft zusammen mit 在: 他在吃饭呢。\n了² (le) – neue Situation oder Veränderung: 下雨了。 = „Es regnet (jetzt).“",
    "examples": [
      {
        "chinese": "你是中国人吗？",
        "pinyin": "Nǐ shì Zhōngguó rén ma?",
        "german": "Bist du Chinese?"
      },
      {
        "chinese": "我们一起去吧。",
        "pinyin": "Wǒmen yìqǐ qù ba.",
        "german": "Lass uns zusammen hingehen."
      },
      {
        "chinese": "我们晚上吃什么呢？",
        "pinyin": "Wǒmen wǎnshang chī shénme ne?",
        "german": "Was essen wir denn heute Abend?"
      },
      {
        "chinese": "我的书呢？",
        "pinyin": "Wǒ de shū ne?",
        "german": "Wo ist mein Buch?"
      },
      {
        "chinese": "他在睡觉呢。",
        "pinyin": "Tā zài shuìjiào ne.",
        "german": "Er schläft gerade."
      },
      {
        "chinese": "下雨了。",
        "pinyin": "Xià yǔ le.",
        "german": "Jetzt regnet es."
      }
    ],
    "related": [
      "g:吗",
      "g:吧¹",
      "g:呢²",
      "g:了²",
      "g:……呢",
      "g:语气助词@HSK2"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Fragepartikel für Ja/Nein-Fragen",
    "formation": "Aussagesatz + 吗？",
    "explanation": "吗 (ma) am Ende eines Aussagesatzes macht daraus eine Ja/Nein-Frage; die Wortstellung bleibt unverändert: 他是老师 → 他是老师吗？ Geantwortet wird meist nicht mit „ja/nein“, sondern mit dem Verb oder Adjektiv der Frage, bejaht oder mit 不/没 verneint: 你去吗？– 去。/ 不去。 Fragt man schon mit einem Fragewort wie 什么 (shénme) oder 哪儿 (nǎr) oder mit der Form Verb-不-Verb (去不去), kommt kein 吗 dazu: „Wohin gehst du?“ heißt 你去哪儿？, nicht 你去哪儿吗？ Bei verneinten Aussagen (你不喝茶吗？) klingt die Frage überrascht: „Trinkst du etwa keinen Tee?“",
    "notes": "Andere Fragepartikeln: 呢 (ne) für verkürzte Rückfragen (你呢？) und in Fragen mit Fragewort; 吧² (ba, HSK 2) für Fragen, bei denen man die Antwort vermutet (你是老师吧？ = „Du bist Lehrer, oder?“). Die Verb-不-Verb-Frage (你去不去？) ist eine Alternative zu 吗.",
    "examples": [
      {
        "chinese": "你是老师吗？",
        "pinyin": "Nǐ shì lǎoshī ma?",
        "german": "Sind Sie Lehrer?"
      },
      {
        "chinese": "你明天去学校吗？",
        "pinyin": "Nǐ míngtiān qù xuéxiào ma?",
        "german": "Gehst du morgen in die Schule?"
      },
      {
        "chinese": "这个菜好吃吗？",
        "pinyin": "Zhège cài hǎochī ma?",
        "german": "Schmeckt dieses Gericht gut?"
      }
    ],
    "legacyIds": [
      "吗"
    ],
    "related": [
      "g:疑问句：正反问句",
      "g:呢²",
      "g:吧¹",
      "g:语气助词@HSK1",
      "g:用反问句表示强调：不是……吗？"
    ],
    "quiz": {
      "example": 1,
      "answer": "吗",
      "distractors": [
        {
          "text": "呢",
          "reason": "呢 bildet ohne Fragewort und ohne Vorkontext keine Ja/Nein-Frage; es steht z. B. in 你去哪儿呢？"
        },
        {
          "text": "什么",
          "reason": "什么 ist ein Fragewort („was“) und kann nicht nach der Ortsangabe 学校 am Satzende stehen."
        },
        {
          "text": "的",
          "reason": "的 macht aus der Aussage keine Frage; eine Frage ohne Fragewort braucht 吗."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "und …? / wo ist …? – verkürzte Rückfrage nach einem Nomen",
    "formation": "Nomen/Pronomen + 呢？",
    "explanation": "Steht 呢 (ne) direkt nach einem Nomen oder Pronomen, entsteht eine verkürzte Frage. Mit vorausgehendem Kontext überträgt sie die vorige Frage oder Aussage auf eine andere Person oder Sache: 我是学生，你呢？ = „Ich bin Student – und du?“. Ohne Kontext fragt sie meist, wo jemand oder etwas ist: 我的手机呢？ = „Wo ist mein Handy?“. 呢 wird im neutralen Ton gesprochen. 吗 kann in dieser Kurzform nicht stehen: 你吗？ ist falsch, denn 吗 braucht eine vollständige Aussage davor.",
    "notes": "呢 hat in HSK 1 noch zwei weitere Gebrauchsweisen: 呢¹ in Fragen mit Fragewort oder Alternative (你去哪儿呢？) und 呢³ für andauernde Handlungen (他在吃饭呢). Eine weitere Verwendung (呢⁴) folgt in HSK 2.",
    "examples": [
      {
        "chinese": "我是学生，你呢？",
        "pinyin": "Wǒ shì xuésheng, nǐ ne?",
        "german": "Ich bin Student – und du?"
      },
      {
        "chinese": "我的手机呢？",
        "pinyin": "Wǒ de shǒujī ne?",
        "german": "Wo ist mein Handy?"
      },
      {
        "chinese": "我们下午去商店，你们呢？",
        "pinyin": "Wǒmen xiàwǔ qù shāngdiàn, nǐmen ne?",
        "german": "Wir gehen heute Nachmittag einkaufen – und ihr?"
      }
    ],
    "legacyIds": [
      "g:呢",
      "呢"
    ],
    "related": [
      "g:语气助词@HSK1",
      "g:吗",
      "g:……呢",
      "g:……在/正在+动词……+呢",
      "g:语气助词@HSK2"
    ],
    "quiz": {
      "example": 0,
      "answer": "呢",
      "distractors": [
        {
          "text": "吗",
          "reason": "吗 braucht eine vollständige Aussage davor; nach einem bloßen 你 bildet es keine Frage."
        },
        {
          "text": "什么",
          "reason": "什么 („was“) passt nicht direkt hinter 你; die Kurzfrage „und du?“ bildet nur 呢."
        },
        {
          "text": "了",
          "reason": "了 zeigt eine Veränderung an und macht aus 你 keine Rückfrage."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Vorschlag, Bitte, milde Aufforderung („lass uns …“, „… doch“)",
    "formation": "Satz (Vorschlag/Bitte) + 吧",
    "explanation": "吧 (ba) am Satzende macht aus einer Aussage einen Vorschlag oder eine freundliche Aufforderung. Mit 我们 (wǒmen) als Subjekt heißt es „lass uns …“: 我们走吧. Mit 你 (nǐ) oder ohne Subjekt klingt eine Bitte weicher als ein direkter Befehl: 你坐吧 = „setz dich doch“. Auch Zustimmung lässt sich so ausdrücken: 好吧 (hǎo ba) = „na gut“. 吧 wird im neutralen Ton gesprochen und ist typisch für die gesprochene Sprache.",
    "notes": "吧² (HSK 2) drückt eine Vermutung aus: 你是老师吧？ = „Du bist Lehrer, oder?“. 还是 (háishi)……吧 (HSK 2) heißt „doch lieber …“. Eine Ja/Nein-Frage ohne Vermutung bildet 吗.",
    "examples": [
      {
        "chinese": "我们走吧！",
        "pinyin": "Wǒmen zǒu ba!",
        "german": "Lass uns gehen!"
      },
      {
        "chinese": "你坐这儿吧。",
        "pinyin": "Nǐ zuò zhèr ba.",
        "german": "Setz dich doch hierher."
      },
      {
        "chinese": "太晚了，明天再说吧。",
        "pinyin": "Tài wǎn le, míngtiān zài shuō ba.",
        "german": "Es ist schon spät, reden wir morgen weiter."
      }
    ],
    "legacyIds": [
      "g:吧",
      "吧"
    ],
    "related": [
      "g:语气助词@HSK1",
      "g:吗",
      "g:还是……吧",
      "g:语气助词@HSK2"
    ],
    "quiz": {
      "example": 0,
      "answer": "吧",
      "distractors": [
        {
          "text": "吗",
          "reason": "吗 macht eine Frage daraus („Gehen wir?“); der Satz mit Ausrufezeichen ist aber ein Vorschlag."
        },
        {
          "text": "呢",
          "reason": "呢 steht in Rückfragen oder bei andauernden Handlungen, nicht in Vorschlägen."
        },
        {
          "text": "的",
          "reason": "的 ist eine Strukturpartikel und macht aus dem Satz keinen Vorschlag."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Satzende-Partikel: neue Situation oder Veränderung („jetzt“, „nicht mehr“)",
    "pinyin": "le (Zustandsänderung)",
    "examples": [
      {
        "chinese": "天冷了。",
        "pinyin": "Tiān lěng le.",
        "german": "Es ist kalt geworden."
      },
      {
        "chinese": "我不去了。",
        "pinyin": "Wǒ bú qù le.",
        "german": "Ich gehe doch nicht hin."
      },
      {
        "chinese": "我妹妹现在是大学生了。",
        "pinyin": "Wǒ mèimei xiànzài shì dàxuéshēng le.",
        "german": "Meine kleine Schwester ist jetzt Studentin."
      },
      {
        "chinese": "下雨了，我们回家吧。",
        "pinyin": "Xià yǔ le, wǒmen huí jiā ba.",
        "german": "Es regnet – lass uns nach Hause gehen."
      }
    ],
    "legacyIds": [
      "g:了 (Zustandsänderung)",
      "了 (Zustandsänderung)",
      "g:…了…了",
      "…了…了"
    ],
    "formation": "Satz + 了",
    "notes": "了¹ steht direkt nach dem Verb und markiert den Abschluss (我买了两本书). Beide zusammen (我学了两年汉语了) bedeuten, dass etwas bis jetzt andauert. 要……了 / 快要 (kuàiyào)……了 (HSK 2) kündigt eine bevorstehende Veränderung an („bald“).",
    "explanation": "了 (le) am Satzende zeigt, dass eine neue Situation eingetreten ist oder sich etwas verändert hat – im Deutschen oft mit „jetzt“, „schon“, „geworden“ oder „nicht mehr“ wiedergegeben. Es steht nach Adjektiven (天冷了 = „es ist kalt geworden“), nach Verben (下雨了 = „es regnet jetzt“) und nach Zahlenangaben (他二十岁了 = „er ist jetzt zwanzig“). Mit 不 drückt es eine Planänderung aus: 我不去了 = „ich gehe doch nicht“. Anders als 了¹ steht es nicht direkt nach dem Verb, sondern am Satzende, also auch nach einem Objekt: 我有男朋友了 = „ich habe jetzt einen Freund“.",
    "quiz": {
      "example": 0,
      "answer": "了",
      "distractors": [
        {
          "text": "着",
          "reason": "着 beschreibt einen andauernden Zustand nach Verben; eine eingetretene Veränderung markiert 了."
        },
        {
          "text": "得",
          "reason": "得 braucht danach eine Ergänzung (冷得很); allein am Satzende ist es falsch."
        },
        {
          "text": "的",
          "reason": "的 drückt keine Veränderung aus; „es ist kalt geworden“ heißt 天冷了."
        }
      ]
    },
    "related": [
      "g:了¹",
      "g:变化态：用动态助词“了²”表示",
      "g:语气助词@HSK1",
      "g:要/快要/就要……了"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "hallo (am Telefon); he! (Zuruf)",
    "formation": "喂，+ Satz (am Satzanfang)",
    "explanation": "Die Interjektion 喂 steht am Satzanfang, meist durch Komma abgetrennt. Am Telefon ist sie das übliche „Hallo?“ und wird dabei meist wéi mit steigendem Ton gesprochen; im Wörterbuch steht wèi. Mit wèi spricht man außerdem jemanden direkt an, um seine Aufmerksamkeit zu bekommen („He!“, „Hallo, Sie!“). Dieser Zuruf klingt gegenüber Fremden oder Älteren unhöflich; höflicher sind dort 你好 (nǐ hǎo) oder 请问 (qǐngwèn). Am Telefon ist 喂 dagegen ganz neutral.",
    "examples": [
      {
        "chinese": "喂，你好，请问王老师在吗？",
        "pinyin": "Wéi, nǐ hǎo, qǐngwèn Wáng lǎoshī zài ma?",
        "german": "Hallo, guten Tag – ist Lehrer Wang da?"
      },
      {
        "chinese": "喂，我是小王。",
        "pinyin": "Wéi, wǒ shì Xiǎo Wáng.",
        "german": "Hallo, hier ist Xiao Wang."
      },
      {
        "chinese": "喂，等一下！",
        "pinyin": "Wèi, děng yíxià!",
        "german": "He, warte mal!"
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "喂",
      "distractors": [
        {
          "text": "吗",
          "reason": "吗 ist eine Fragepartikel am Satzende und kann kein Gespräch eröffnen."
        },
        {
          "text": "吧",
          "reason": "吧 steht am Satzende (Vorschlag, Bitte) und ist kein Ausruf am Satzanfang."
        },
        {
          "text": "呢",
          "reason": "呢 steht am Satzende oder nach einem Nomen, nicht als Anruf am Satzanfang."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Nebenordnende Wortgruppe: gleichrangige Glieder (A und B)",
    "formation": "A + (和) + B – gleichrangige Glieder derselben Art",
    "notes": "Ganze Sätze verbindet 和 in der Regel nicht; dafür stehen Adverbien wie 也 (yě) oder 还 (hái).",
    "explanation": "Ein 联合短语 (liánhé duǎnyǔ) besteht aus zwei oder mehr gleichrangigen Gliedern, meist derselben Wortart: Nomen + Nomen (老师和学生), Pronomen + Pronomen (你和我) oder Verb + Verb (唱歌和跳舞). Die Glieder können durch 和 (hé) verbunden werden oder einfach nebeneinanderstehen, vor allem bei festen Paaren wie 爸爸妈妈 = „Papa und Mama“. In Aufzählungen trennt das Aufzählungskomma 、 die Glieder, und 和 steht nur vor dem letzten. Die ganze Gruppe übernimmt im Satz eine Rolle, etwa als Subjekt oder Objekt; ein folgendes 都 (dōu) fasst sie oft zusammen: 爸爸妈妈都在家.",
    "examples": [
      {
        "chinese": "爸爸妈妈都在家。",
        "pinyin": "Bàba māma dōu zài jiā.",
        "german": "Papa und Mama sind beide zu Hause."
      },
      {
        "chinese": "我喜欢唱歌和跳舞。",
        "pinyin": "Wǒ xǐhuan chànggē hé tiàowǔ.",
        "german": "Ich singe und tanze gern."
      },
      {
        "chinese": "我买了苹果、香蕉和西瓜。",
        "pinyin": "Wǒ mǎi le píngguǒ, xiāngjiāo hé xīguā.",
        "german": "Ich habe Äpfel, Bananen und eine Wassermelone gekauft."
      }
    ],
    "related": [
      "g:基本结构类型：偏正短语",
      "g:基本结构类型：动宾短语",
      "g:基本结构类型：主谓短语",
      "g:和²"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Bestimmungsgruppe: Attribut oder Adverbial + Kernwort",
    "formation": "Attribut (+ 的) + Nomen; Adverbial + Verb/Adjektiv",
    "explanation": "Ein 偏正短语 (piānzhèng duǎnyǔ) besteht aus einem bestimmenden Glied und einem Kernwort; das bestimmende Glied steht im Chinesischen immer davor. Es gibt zwei Arten: (1) Attribut + Nomen, oft mit 的 dazwischen: 我的书 = „mein Buch“, 好朋友 (hǎo péngyou) = „guter Freund“, 中国菜 (Zhōngguó cài) = „chinesisches Essen“. (2) Adverbial + Verb oder Adjektiv: 很好 = „sehr gut“, 不去 = „nicht hingehen“, 一起走 = „zusammen gehen“, 明天来 = „morgen kommen“. Auch lange Bestimmungen stehen vorn, wo das Deutsche einen nachgestellten Relativsatz nimmt: 妈妈做的菜 = „das Essen, das Mama kocht“.",
    "examples": [
      {
        "chinese": "他是我的好朋友。",
        "pinyin": "Tā shì wǒ de hǎo péngyou.",
        "german": "Er ist ein guter Freund von mir."
      },
      {
        "chinese": "我想买一件新衣服。",
        "pinyin": "Wǒ xiǎng mǎi yí jiàn xīn yīfu.",
        "german": "Ich möchte mir etwas Neues zum Anziehen kaufen."
      },
      {
        "chinese": "今天天气非常好。",
        "pinyin": "Jīntiān tiānqì fēicháng hǎo.",
        "german": "Heute ist das Wetter wunderbar."
      },
      {
        "chinese": "我们明天一起去。",
        "pinyin": "Wǒmen míngtiān yìqǐ qù.",
        "german": "Wir gehen morgen zusammen hin."
      }
    ],
    "related": [
      "g:的¹",
      "g:基本结构类型：联合短语",
      "g:基本结构类型：动宾短语",
      "g:基本结构类型：主谓短语",
      "g:状语：副词、形容词作状语；表示时间、处所的词语作状语"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Verb-Objekt-Gruppe: Verb + Objekt",
    "formation": "Verb + Objekt",
    "explanation": "Ein 动宾短语 (dòngbīn duǎnyǔ) besteht aus einem Verb und seinem Objekt; das Objekt steht nach dem Verb: 吃饭 (chīfàn) = „essen“, 看书 (kàn shū) = „lesen“, 学汉语 = „Chinesisch lernen“. Auch Ziele stehen nach 去 (qù) und 来 (lái) direkt als Objekt, ohne Präposition: 去北京 = „nach Peking fahren“. Das Objekt kann selbst eine Wortgruppe sein: 喜欢看电影 = „gern Filme sehen“. Viele Alltagsverben sind eigentlich schon Verb-Objekt-Verbindungen, z. B. 睡觉 (shuìjiào), 上课 (shàngkè), 见面 (jiànmiàn); sie nehmen meist kein weiteres Objekt: Man sagt 和朋友见面, nicht 见面朋友.",
    "examples": [
      {
        "chinese": "我每天早上喝一杯茶。",
        "pinyin": "Wǒ měi tiān zǎoshang hē yì bēi chá.",
        "german": "Ich trinke jeden Morgen eine Tasse Tee."
      },
      {
        "chinese": "明天我们去北京。",
        "pinyin": "Míngtiān wǒmen qù Běijīng.",
        "german": "Morgen fahren wir nach Peking."
      },
      {
        "chinese": "我认识你哥哥。",
        "pinyin": "Wǒ rènshi nǐ gēge.",
        "german": "Ich kenne deinen älteren Bruder."
      },
      {
        "chinese": "她很喜欢看电影。",
        "pinyin": "Tā hěn xǐhuan kàn diànyǐng.",
        "german": "Sie sieht sehr gern Filme."
      }
    ],
    "related": [
      "g:基本结构类型：联合短语",
      "g:基本结构类型：偏正短语",
      "g:基本结构类型：主谓短语",
      "g:动补短语1"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Subjekt-Prädikat-Gruppe als Satz oder Satzglied",
    "formation": "Subjekt + Prädikat (Verb/Adjektiv)",
    "explanation": "Ein 主谓短语 (zhǔwèi duǎnyǔ) besteht aus Subjekt und Prädikat, z. B. 我去 (wǒ qù) oder 天气好. Allein bildet er einen Satz, er kann aber auch Teil eines größeren Satzes sein: als Prädikat (我爸爸身体很好 = „mein Vater ist gesund“, wörtlich „mein Vater – Körper sehr gut“), als Objekt nach Verben wie 知道 (zhīdào) oder 觉得 (juéde): 我知道他是老师, oder mit 的 als Attribut: 我买的书 = „das Buch, das ich gekauft habe“. Ein Bindewort wie „dass“ braucht das Chinesische dafür nicht.",
    "examples": [
      {
        "chinese": "我爸爸身体很好。",
        "pinyin": "Wǒ bàba shēntǐ hěn hǎo.",
        "german": "Mein Vater ist gesund."
      },
      {
        "chinese": "我知道他在哪儿。",
        "pinyin": "Wǒ zhīdào tā zài nǎr.",
        "german": "Ich weiß, wo er ist."
      },
      {
        "chinese": "我觉得这个菜很好吃。",
        "pinyin": "Wǒ juéde zhège cài hěn hǎochī.",
        "german": "Ich finde, dieses Gericht schmeckt sehr gut."
      }
    ],
    "related": [
      "g:基本结构类型：联合短语",
      "g:基本结构类型：偏正短语",
      "g:基本结构类型：动宾短语"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Zahl + Zählwort (+ Nomen): Mengenangabe",
    "formation": "Zahl + Zählwort + Nomen",
    "explanation": "Zwischen Zahl und Nomen steht im Chinesischen ein Zählwort, 量词 (liàngcí): 三个人 = „drei Personen“, 一本书 = „ein Buch“. Jedes Nomen hat sein typisches Zählwort, z. B. 本 (běn) für Bücher, 杯 (bēi) für Getränke, 件 (jiàn) für Kleidung; 个 (ge) ist das häufigste und allgemeinste. Vor einem Zählwort heißt „zwei“ meist 两 (liǎng), nicht 二. 一 ändert seinen Ton: yí vor dem vierten Ton und vor 个, z. B. 一个 (yí ge), sonst yì, z. B. 一本 (yì běn). Auch Zeigewörter verbinden sich mit Zählwörtern: 这本书 = „dieses Buch“. Ist das Nomen bekannt, kann es wegfallen: 我要两个.",
    "notes": "Die Verdopplung von Zahl und Zählwort (一个一个) ist ein eigener Punkt (HSK 3).",
    "examples": [
      {
        "chinese": "我有两个哥哥。",
        "pinyin": "Wǒ yǒu liǎng ge gēge.",
        "german": "Ich habe zwei ältere Brüder."
      },
      {
        "chinese": "桌子上有三本书。",
        "pinyin": "Zhuōzi shang yǒu sān běn shū.",
        "german": "Auf dem Tisch liegen drei Bücher."
      },
      {
        "chinese": "请给我一杯水。",
        "pinyin": "Qǐng gěi wǒ yì bēi shuǐ.",
        "german": "Ein Glas Wasser, bitte."
      }
    ],
    "legacyIds": [
      "g:Zählwort + Nomen",
      "Zählwort + Nomen"
    ],
    "quiz": {
      "example": 1,
      "answer": "本",
      "distractors": [
        {
          "text": "杯",
          "reason": "杯 zählt Getränke in Tassen oder Gläsern, keine Bücher."
        },
        {
          "text": "件",
          "reason": "件 ist das Zählwort für Kleidung und Angelegenheiten, nicht für Bücher."
        },
        {
          "text": "张",
          "reason": "张 zählt flache Dinge wie Papier, Tische oder Fotos; für Bücher steht 本."
        }
      ]
    },
    "related": [
      "g:其他结构类型：介宾短语",
      "g:其他结构类型：方位短语",
      "g:数量重叠：数词+量词+数词+量词"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Präpositionalgruppe: Präposition + Nomen (Ort, Herkunft, Partner, Empfänger)",
    "formation": "Präposition + Nomen/Pronomen (+ Verb)",
    "explanation": "Ein 介宾短语 (jièbīn duǎnyǔ) besteht aus einer Präposition und ihrem Objekt: 在家 (zài jiā) = „zu Hause“, 从北京 = „aus Peking“, 给妈妈 = „für/an Mama“, 和朋友 = „mit Freunden“, 对我 = „zu mir“. Die Gruppe steht fast immer vor dem Verb oder Adjektiv, das sie näher bestimmt: 我在家吃饭, nicht 我吃饭在家. Einige Gruppen mit 在 oder 到 können auch hinter bestimmten Verben stehen (住在北京). Folgt kein Verb, ist 在 meist das Vollverb „sich befinden“: 他在家 = „er ist zu Hause“.",
    "examples": [
      {
        "chinese": "他从北京来。",
        "pinyin": "Tā cóng Běijīng lái.",
        "german": "Er kommt aus Peking."
      },
      {
        "chinese": "晚上我给妈妈打电话。",
        "pinyin": "Wǎnshang wǒ gěi māma dǎ diànhuà.",
        "german": "Abends rufe ich meine Mutter an."
      },
      {
        "chinese": "我们在图书馆看书吧。",
        "pinyin": "Wǒmen zài túshūguǎn kàn shū ba.",
        "german": "Lass uns in der Bibliothek lesen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "从",
      "distractors": [
        {
          "text": "在",
          "reason": "在 nennt den Ort, an dem etwas geschieht; bei 来 braucht man den Ausgangspunkt mit 从."
        },
        {
          "text": "对",
          "reason": "对 leitet eine Bezugsperson ein („zu, gegenüber“), keinen Herkunftsort."
        },
        {
          "text": "和",
          "reason": "和 bedeutet „mit“ oder „und“; 北京 ist hier kein Begleiter, sondern der Ausgangsort."
        }
      ]
    },
    "related": [
      "g:在（引出时间、处所）",
      "g:从¹",
      "g:和¹",
      "g:对",
      "g:其他结构类型：数量短语"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Ortsangabe: Nomen + Lokalwort („auf dem Tisch“, „im Zimmer“)",
    "formation": "Nomen + 上/里/前/后/下/外 (oder 上边, 里边 …)",
    "notes": "Länder- und Städtenamen stehen ohne 里: 在中国 (zài Zhōngguó), nicht 在中国里. Die einsilbigen Lokalwörter hängen direkt am Nomen; die zweisilbigen Formen 上边 (shàngbian) und 里边 (lǐbian) können auch allein stehen: 里边有人 (lǐbian yǒu rén) „drinnen ist jemand“.",
    "explanation": "Ein Lokalwort – 方位词 (fāngwèicí) – direkt hinter einem Nomen macht daraus eine Ortsangabe: 桌子上 (zhuōzi shang) „auf dem Tisch“, 房间里 (fángjiān li) „im Zimmer“, 学校前边 (xuéxiào qiánbian) „vor der Schule“. Anders als im Deutschen steht das „wo genau“ also hinter dem Nomen. Die Phrase folgt meist auf 在 (zài) oder steht am Satzanfang eines Existenzsatzes mit 有. Gegenstände wie 桌子 (zhuōzi) oder 书包 (shūbāo) werden erst mit dem Lokalwort zum Ort: 在桌子上 (zài zhuōzi shang), nicht 在桌子. Mit Ereignissen und Zeitangaben drückt die Phrase eine Zeit aus: 吃饭前 (chīfàn qián) „vor dem Essen“, 三天后 (sān tiān hòu) „drei Tage später“.",
    "examples": [
      {
        "chinese": "你的手机在书包里。",
        "pinyin": "Nǐ de shǒujī zài shūbāo li.",
        "german": "Dein Handy ist in der Schultasche."
      },
      {
        "chinese": "学校前边有一个商店。",
        "pinyin": "Xuéxiào qiánbian yǒu yí ge shāngdiàn.",
        "german": "Vor der Schule gibt es einen Laden."
      },
      {
        "chinese": "桌子上有两杯茶。",
        "pinyin": "Zhuōzi shang yǒu liǎng bēi chá.",
        "german": "Auf dem Tisch stehen zwei Tassen Tee."
      },
      {
        "chinese": "睡觉前我喝一杯牛奶。",
        "pinyin": "Shuìjiào qián wǒ hē yì bēi niúnǎi.",
        "german": "Vor dem Schlafengehen trinke ich ein Glas Milch."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "里",
      "distractors": [
        {
          "text": "在",
          "reason": "在 steht vor der Ortsangabe (在书包里), nicht hinter dem Nomen."
        },
        {
          "text": "的",
          "reason": "Nach 书包的 müsste noch ein Nomen folgen; eine Ortsangabe entsteht so nicht."
        },
        {
          "text": "们",
          "reason": "们 bildet den Plural bei Personen und passt nicht zu einem Gegenstand wie 书包."
        }
      ],
      "accepted": [
        "里边"
      ]
    },
    "related": [
      "g:方位名词@HSK1",
      "g:在（引出时间、处所）",
      "g:其他结构类型：介宾短语",
      "g:其他结构类型：数量短语",
      "g:处所+有+数量短语+名词",
      "g:在……上/下/中"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Subjekt: Nomen, Pronomen oder Nominalphrase vor dem Prädikat",
    "formation": "Subjekt (Nomen / Pronomen / Nominalphrase) + Prädikat",
    "notes": "Eine Zeitangabe kann vor dem Subjekt stehen: 明天我去 (míngtiān wǒ qù) neben 我明天去 (wǒ míngtiān qù). Sie ist dann trotzdem kein Subjekt, sondern ein Adverbial.",
    "explanation": "Das Subjekt steht vor dem Prädikat und nennt, worüber der Satz etwas aussagt. Es kann ein Pronomen sein wie 我 oder 他们 (tāmen), ein Nomen wie 妈妈 (māma) oder 学校 (xuéxiào) oder eine ganze Nominalphrase: 我的中文老师 (wǒ de Zhōngwén lǎoshī) „meine Chinesischlehrerin“, 这本书 (zhè běn shū) „dieses Buch“. Es gibt keine Artikel, keine Fälle und keine Verbendungen: 他 bleibt 他, ob „er“ oder „ihn“ gemeint ist – die Rolle ergibt sich allein aus der Stellung vor dem Verb. Ist aus dem Zusammenhang klar, wer gemeint ist, fällt das Subjekt oft weg: Auf die Frage 你去吗 (nǐ qù ma) genügt die Antwort 去 „(ich) gehe“.",
    "examples": [
      {
        "chinese": "他们是我的同学。",
        "pinyin": "Tāmen shì wǒ de tóngxué.",
        "german": "Sie sind meine Mitschüler."
      },
      {
        "chinese": "妈妈在做饭。",
        "pinyin": "Māma zài zuò fàn.",
        "german": "Mama kocht gerade."
      },
      {
        "chinese": "我的中文老师很年轻。",
        "pinyin": "Wǒ de Zhōngwén lǎoshī hěn niánqīng.",
        "german": "Meine Chinesischlehrerin ist sehr jung."
      },
      {
        "chinese": "这本书很有意思。",
        "pinyin": "Zhè běn shū hěn yǒu yìsi.",
        "german": "Dieses Buch ist sehr interessant."
      }
    ],
    "related": [
      "g:谓语：动词或动词性短语、形容词或形容词性短语作谓语",
      "g:宾语：名词、代词或名词性短语作宾语",
      "g:主谓句1：动词谓语句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Satzglied Prädikat: Nomen, Pronomen, Zahl oder Mengenangabe",
    "formation": "Subjekt + Nomen / Pronomen / Zahl / Zahl + Zählwort",
    "notes": "Verneint wird nicht mit 不 allein, sondern mit 不是 (bú shì): 今天不是星期五 (jīntiān bú shì xīngqīwǔ). In bejahten Sätzen darf bei Datum und Uhrzeit auch 是 stehen: 今天是星期五 (jīntiān shì xīngqīwǔ).",
    "explanation": "Das Prädikat ist der Teil des Satzes, der etwas über das Subjekt aussagt. Dieser Punkt zeigt, welche nominalen Wörter dieses Satzglied direkt, ohne Verb und ohne 是 (shì), füllen können: ein Nomen (今天星期五 jīntiān xīngqīwǔ „heute ist Freitag“), ein Pronomen – vor allem das Fragepronomen 怎么样 (zěnmeyàng): 你最近怎么样？ –, eine Zahl (他今年十八 tā jīnnián shíbā) oder eine Mengenangabe aus Zahl + Zählwort (这本书三十块 zhè běn shū sānshí kuài). Das geht nur bei wenigen Inhalten wie Datum, Uhrzeit, Alter, Preis und (umgangssprachlich) Herkunft. Für eine Gleichsetzung oder Zugehörigkeit („X ist Y“) braucht der Satz dagegen 是: 他是我的老师 (tā shì wǒ de lǎoshī), nicht 他我的老师. Den ganzen Satztyp mit seinen Einsatzbereichen, Verneinung und Fragen behandelt der Punkt zum Nomensatz, 名词谓语句 (míngcí wèiyǔjù).",
    "examples": [
      {
        "chinese": "今天星期五。",
        "pinyin": "Jīntiān xīngqīwǔ.",
        "german": "Heute ist Freitag."
      },
      {
        "chinese": "他今年十八。",
        "pinyin": "Tā jīnnián shíbā.",
        "german": "Er ist dieses Jahr achtzehn."
      },
      {
        "chinese": "这本书三十块。",
        "pinyin": "Zhè běn shū sānshí kuài.",
        "german": "Dieses Buch kostet dreißig Yuan."
      },
      {
        "chinese": "你最近怎么样？",
        "pinyin": "Nǐ zuìjìn zěnmeyàng?",
        "german": "Wie geht es dir in letzter Zeit?"
      }
    ],
    "related": [
      "g:主谓句3：名词谓语句",
      "g:时间表示法：年、月、日、星期表示法",
      "g:钱数表示法",
      "g:时量词@HSK1",
      "g:怎么样"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Satzglied Prädikat: Verb(phrase) oder Adjektiv(phrase)",
    "formation": "Subjekt + Verb(phrase) / Subjekt + (很 +) Adjektiv",
    "notes": "Verneint wird mit 不 oder 没 vor dem Verb und mit 不 vor dem Adjektiv; 很 fällt dann meist weg: 不忙 (bù máng) „nicht beschäftigt“. Die zugehörigen Satztypen sind 动词谓语句 (dòngcí wèiyǔjù) und 形容词谓语句 (xíngróngcí wèiyǔjù).",
    "explanation": "Das Prädikat sagt, was das Subjekt tut oder wie es ist. Dieser Punkt zeigt, welche Wörter dieses Satzglied füllen: ein Verb allein (他来了 tā lái le „er ist gekommen“) oder eine Verbphrase – ein Verb mit Objekt, Adverbial oder Ergänzung: 我每天喝两杯咖啡 (wǒ měi tiān hē liǎng bēi kāfēi). Das Verb wird nicht konjugiert. Ebenso kann ein Adjektiv oder eine Adjektivphrase das Prädikat bilden, und zwar ohne 是 (shì): 天气很好 (tiānqì hěn hǎo) „das Wetter ist gut“. Ein Adjektiv allein klingt meist nach Vergleich (这个大，那个小 zhège dà, nàge xiǎo); in neutralen Aussagen steht daher eine Adjektivphrase mit Gradadverb wie 很 (hěn) oder mit 不 (bù). Typischer Fehler: 我是很忙 (wǒ shì hěn máng) statt 我很忙. Wortstellung, Verneinung und Fragen der ganzen Satztypen behandeln die Punkte zum Verbsatz, 动词谓语句 (dòngcí wèiyǔjù), und zum Adjektivsatz, 形容词谓语句 (xíngróngcí wèiyǔjù).",
    "examples": [
      {
        "chinese": "我每天喝两杯咖啡。",
        "pinyin": "Wǒ měi tiān hē liǎng bēi kāfēi.",
        "german": "Ich trinke jeden Tag zwei Tassen Kaffee."
      },
      {
        "chinese": "他们明天来。",
        "pinyin": "Tāmen míngtiān lái.",
        "german": "Sie kommen morgen."
      },
      {
        "chinese": "北京的冬天很冷。",
        "pinyin": "Běijīng de dōngtiān hěn lěng.",
        "german": "Der Winter in Peking ist kalt."
      },
      {
        "chinese": "这个房间不大。",
        "pinyin": "Zhège fángjiān bú dà.",
        "german": "Dieses Zimmer ist nicht groß."
      }
    ],
    "related": [
      "g:主谓句1：动词谓语句",
      "g:主谓句2：形容词谓语句",
      "g:主语：名词、代词或名词性短语作主语",
      "g:宾语：名词、代词或名词性短语作宾语",
      "g:很"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Objekt: Nomen, Pronomen oder Nominalphrase nach dem Verb",
    "formation": "Subjekt + Verb + Objekt (Nomen / Pronomen / Nominalphrase)",
    "notes": "Viele Verben haben im Chinesischen ein Objekt, wo das Deutsche keines braucht: 吃饭 (chīfàn) „essen“, 睡觉 (shuìjiào) „schlafen“. Sätze mit zwei Objekten (jemandem etwas geben) sind ein eigener Punkt.",
    "explanation": "Das Objekt steht hinter dem Verb. Wie beim Subjekt gibt es keine Fälle: 我 heißt „ich“, „mich“ oder „mir“, je nachdem, wo es steht. Deshalb entscheidet allein die Wortstellung, wer was tut: 我认识他 (wǒ rènshi tā) „ich kenne ihn“, aber 他认识我 (tā rènshi wǒ) „er kennt mich“. Objekt kann ein Nomen sein wie in 喝茶 (hē chá), ein Pronomen wie in 喜欢你 (xǐhuan nǐ) oder eine Nominalphrase mit Attribut: 买一件新衣服 (mǎi yí jiàn xīn yīfu) „ein neues Kleidungsstück kaufen“. Zeit- und Ortsangaben stehen vor dem Verb, das Objekt folgt direkt darauf: 我在家看书 (wǒ zài jiā kàn shū) „ich lese zu Hause“.",
    "examples": [
      {
        "chinese": "我很喜欢你。",
        "pinyin": "Wǒ hěn xǐhuan nǐ.",
        "german": "Ich mag dich sehr."
      },
      {
        "chinese": "爸爸在看电视。",
        "pinyin": "Bàba zài kàn diànshì.",
        "german": "Papa sieht gerade fern."
      },
      {
        "chinese": "我想买一件新衣服。",
        "pinyin": "Wǒ xiǎng mǎi yí jiàn xīn yīfu.",
        "german": "Ich möchte mir etwas Neues zum Anziehen kaufen."
      },
      {
        "chinese": "你认识我们的新老师吗？",
        "pinyin": "Nǐ rènshi wǒmen de xīn lǎoshī ma?",
        "german": "Kennst du unsere neue Lehrerin?"
      }
    ],
    "related": [
      "g:主语：名词、代词或名词性短语作主语",
      "g:主语+动词+宾语1+宾语2",
      "g:主谓句1：动词谓语句",
      "g:定语：名词性词语、形容词性短语、数量短语作定语"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Attribut vor dem Nomen: Besitzer, Eigenschaft, Menge",
    "pinyin": "yìdiǎnr + Nomen",
    "examples": [
      {
        "chinese": "这是我的手机。",
        "pinyin": "Zhè shì wǒ de shǒujī.",
        "german": "Das ist mein Handy."
      },
      {
        "chinese": "他是一个很好的老师。",
        "pinyin": "Tā shì yí ge hěn hǎo de lǎoshī.",
        "german": "Er ist ein sehr guter Lehrer."
      },
      {
        "chinese": "我买了三本中文书。",
        "pinyin": "Wǒ mǎile sān běn Zhōngwén shū.",
        "german": "Ich habe drei Bücher auf Chinesisch gekauft."
      },
      {
        "chinese": "她喜欢吃中国菜。",
        "pinyin": "Tā xǐhuan chī Zhōngguó cài.",
        "german": "Sie isst gern chinesisch."
      }
    ],
    "legacyIds": [
      "g:一点儿 + Nomen",
      "一点儿 + Nomen"
    ],
    "formation": "Attribut (+ 的) + Nomen",
    "notes": "Bei mehreren Attributen gilt meist: Besitzer – Zahl + Zählwort – Eigenschaft: 我的两个好朋友 (wǒ de liǎng ge hǎo péngyou) „meine zwei guten Freunde“. Typischer Fehler: 很好朋友 (hěn hǎo péngyou) ohne 的.",
    "explanation": "Ein Attribut steht immer vor dem Nomen, das es näher bestimmt – auch dort, wo das Deutsche es nachstellt: 学校的老师 (xuéxiào de lǎoshī) „die Lehrer der Schule“. Auf dieser Stufe gibt es drei Arten. Nomen oder Pronomen: 我的书 (wǒ de shū) „mein Buch“; bei Verwandten und vertrauten Gruppen fällt 的 meist weg (我妈妈 wǒ māma, 我们学校 wǒmen xuéxiào), und bezeichnet das Nomen Art oder Herkunft, steht kein 的: 中国菜 (Zhōngguó cài) „chinesisches Essen“. Adjektive: Ein einsilbiges Adjektiv steht meist ohne 的 (新衣服 xīn yīfu), eine Adjektivphrase mit 很 braucht 的: 很好的朋友 (hěn hǎo de péngyou). Mengenangaben: Zahl + Zählwort direkt vor dem Nomen, ebenso 这/那 + Zählwort: 三本书 (sān běn shū), 这个人 (zhège rén).",
    "quiz": {
      "example": 1,
      "answer": "的",
      "distractors": [
        {
          "text": "得",
          "reason": "得 steht nach einem Verb und leitet eine Ergänzung ein; vor einem Nomen wie 老师 passt es nicht."
        },
        {
          "text": "地",
          "reason": "地 verbindet ein Adverbial mit einem folgenden Verb; hier folgt aber das Nomen 老师."
        },
        {
          "text": "了",
          "reason": "了 ist eine Aspektpartikel und kann kein Attribut an ein Nomen anschließen."
        }
      ]
    },
    "related": [
      "g:的¹",
      "g:其他结构类型：数量短语",
      "g:基本结构类型：偏正短语",
      "g:定语：动词或动词性短语、主谓短语作定语"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Adverbial vor dem Verb: Zeit, Ort, Art und Weise",
    "pinyin": "shíjiān cí + Verb",
    "examples": [
      {
        "chinese": "我明天上午去医院。",
        "pinyin": "Wǒ míngtiān shàngwǔ qù yīyuàn.",
        "german": "Ich gehe morgen Vormittag ins Krankenhaus."
      },
      {
        "chinese": "我们在学校吃午饭。",
        "pinyin": "Wǒmen zài xuéxiào chī wǔfàn.",
        "german": "Wir essen in der Schule zu Mittag."
      },
      {
        "chinese": "你快来吧！",
        "pinyin": "Nǐ kuài lái ba!",
        "german": "Komm schnell!"
      },
      {
        "chinese": "他也不喝咖啡。",
        "pinyin": "Tā yě bù hē kāfēi.",
        "german": "Er trinkt auch keinen Kaffee."
      }
    ],
    "legacyIds": [
      "g:时间词 + Verb",
      "时间词 + Verb"
    ],
    "formation": "Subjekt + Adverbial (Zeit / Ort / Adverb / Adjektiv) + Verb",
    "notes": "Adverbien wie 也 und 都 stehen nach dem Subjekt, nie davor: 我也去 (wǒ yě qù), nicht 也我去. Zweisilbige Adjektive werden mit dem Verb oft über 地 (de) verbunden, das erst in HSK 2 eingeführt wird.",
    "explanation": "Adverbiale stehen vor dem Verb, nicht dahinter wie oft im Deutschen. Auf dieser Stufe sind das: Adverbien wie 也 (yě), 都 (dōu), 很 (hěn), 不 (bù); Adjektive wie in 快来 (kuài lái) „komm schnell“ oder 多吃 (duō chī) „iss mehr“; Zeitwörter wie 明天 (míngtiān) oder 晚上 (wǎnshang), die auch vor dem Subjekt stehen dürfen; Ortsangaben, meist mit 在 (zài): 在家 (zài jiā), 在学校 (zài xuéxiào). Kommen mehrere zusammen, gilt meist die Reihenfolge Zeit – Ort – Verb: 我明天在家看书 (wǒ míngtiān zài jiā kàn shū) „ich lese morgen zu Hause“. Typischer Fehler: 我吃饭在家 (wǒ chīfàn zài jiā) statt 我在家吃饭 (wǒ zài jiā chīfàn).",
    "related": [
      "g:在（引出时间、处所）",
      "g:其他结构类型：介宾短语",
      "g:也",
      "g:都¹",
      "g:地"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Häufigkeit einer Handlung: einmal, zweimal, kurz mal",
    "pinyin": "yíxià",
    "examples": [
      {
        "chinese": "请等一下。",
        "pinyin": "Qǐng děng yíxià.",
        "german": "Bitte warten Sie einen Moment."
      },
      {
        "chinese": "我去过两次北京。",
        "pinyin": "Wǒ qùguo liǎng cì Běijīng.",
        "german": "Ich war schon zweimal in Peking."
      },
      {
        "chinese": "这个电影我看了三次。",
        "pinyin": "Zhège diànyǐng wǒ kànle sān cì.",
        "german": "Diesen Film habe ich dreimal gesehen."
      },
      {
        "chinese": "你来看一下这个字。",
        "pinyin": "Nǐ lái kàn yíxià zhège zì.",
        "german": "Komm mal und schau dir dieses Zeichen an."
      }
    ],
    "legacyIds": [
      "g:一下",
      "一下"
    ],
    "formation": "Verb (+ 了/过) + Zahl + 次/下 (+ Objekt)",
    "notes": "Bei Ortsnamen ist auch 去过北京两次 (qùguo Běijīng liǎng cì) üblich. Die Dauer einer Handlung (两个小时 liǎng ge xiǎoshí) ist ein eigener Punkt (HSK 2). Nicht verwechseln: 一下 (yíxià) „kurz mal“ steht hinter dem Verb, 一点儿 (yìdiǎnr) „ein wenig“ bezeichnet eine Menge.",
    "explanation": "Eine Zahl mit einem Verbzählwort – 动量词 (dòngliàngcí) – hinter dem Verb sagt, wie oft eine Handlung geschieht: 去过两次 (qùguo liǎng cì) „zweimal dort gewesen“, 看了三次 (kànle sān cì) „dreimal gesehen“. 一下 (yíxià) hinter einem Verb heißt „kurz, mal eben“ und macht Bitten weicher: 等一下 (děng yíxià) „warte kurz“, 看一下 (kàn yíxià) „schau mal“. Aspektpartikeln wie 了 oder 过 stehen direkt am Verb, vor der Zahl. Ein Nomen als Objekt steht meist hinter der Mengenangabe (去过两次北京 qùguo liǎng cì Běijīng), ein Pronomen davor (见过他两次 jiànguo tā liǎng cì).",
    "quiz": {
      "example": 0,
      "answer": "一下",
      "distractors": [
        {
          "text": "一点儿",
          "reason": "一点儿 bezeichnet eine kleine Menge, nicht ein kurzes Mal; hinter 等 steht 一下."
        },
        {
          "text": "一次",
          "reason": "一次 zählt ein einzelnes Ereignis („einmal“); die Bitte um einen Moment lautet 等一下."
        },
        {
          "text": "一个",
          "reason": "个 zählt Dinge und Personen, keine Handlungen."
        }
      ],
      "accepted": [
        "一会儿"
      ]
    },
    "related": [
      "g:数量补语2：表示动作持续的时间",
      "g:形容词+数量补语",
      "g:次",
      "g:动量词@HSK3",
      "g:过"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Satztyp Verbsatz: Subjekt – Verb – Objekt",
    "formation": "Subjekt + (Adverbial +) Verb (+ Objekt)",
    "explanation": "Der häufigste Satztyp: Das Prädikat ist ein Verb oder eine Verbphrase. Die Grundstellung ist Subjekt – Verb – Objekt wie im deutschen Hauptsatz: 我学习汉语 (wǒ xuéxí Hànyǔ) „ich lerne Chinesisch“. Das Verb bleibt immer gleich – keine Personalendungen, keine Zeitformen. Zeit- und Ortsangaben stehen vor dem Verb, das Objekt dahinter. Anders als im Deutschen rückt das Verb nach einer vorangestellten Zeitangabe nicht an die zweite Stelle: 明天我去北京 (míngtiān wǒ qù Běijīng) „morgen fahre ich nach Peking“. Verneint wird mit 不 (bù) bei Gegenwart, Zukunft und Gewohnheit und mit 没 (méi) bei nicht Geschehenem: 我不喝酒 (wǒ bù hē jiǔ), 他没来 (tā méi lái).",
    "notes": "Das Verb kann auch ohne Objekt stehen (他来了 tā lái le) oder zwei Objekte haben (eigener Punkt). Sätze mit Adjektiv oder Nomen als Prädikat sind eigene Satztypen. Welche Wörter allgemein das Prädikat bilden können (Verb allein oder Verbphrase), zeigt der Punkt zum Satzglied Prädikat, 谓语 (wèiyǔ).",
    "examples": [
      {
        "chinese": "我学习汉语。",
        "pinyin": "Wǒ xuéxí Hànyǔ.",
        "german": "Ich lerne Chinesisch."
      },
      {
        "chinese": "我们下午去看电影。",
        "pinyin": "Wǒmen xiàwǔ qù kàn diànyǐng.",
        "german": "Wir gehen am Nachmittag ins Kino."
      },
      {
        "chinese": "他昨天没去学校。",
        "pinyin": "Tā zuótiān méi qù xuéxiào.",
        "german": "Er ist gestern nicht in die Schule gegangen."
      },
      {
        "chinese": "我不认识这个人。",
        "pinyin": "Wǒ bú rènshi zhège rén.",
        "german": "Ich kenne diese Person nicht."
      }
    ],
    "legacyIds": [
      "g:S-V-O Wortstellung",
      "S-V-O Wortstellung"
    ],
    "related": [
      "g:主谓句2：形容词谓语句",
      "g:主谓句3：名词谓语句",
      "g:单句：非主谓句",
      "g:主谓句4：主谓谓语句",
      "g:谓语：动词或动词性短语、形容词或形容词性短语作谓语",
      "g:不"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Adjektivsatz: „X ist groß“ ohne Kopula",
    "formation": "Subjekt + Gradadverb (很/太/真 …) oder 不 + Adjektiv",
    "notes": "Ein Adjektiv braucht kein 是. Steht 是 doch vor einem Adjektiv, ist es betont und bestätigt etwas („es IST wirklich …“) – das gehört nicht zum Grundmuster. Welche Wörter allgemein das Prädikat bilden können (Adjektiv allein oder Adjektivphrase), zeigt der Punkt zum Satzglied Prädikat, 谓语 (wèiyǔ).",
    "explanation": "Im Adjektivsatz bildet ein Adjektiv allein das Prädikat; das deutsche „ist“ wird nicht übersetzt: 今天很热 (jīntiān hěn rè) „heute ist es heiß“ – nicht 今天是热 (jīntiān shì rè). In neutralen Aussagen steht fast immer ein Gradadverb davor, meist 很 (hěn); es ist unbetont und heißt dann kaum „sehr“. Ohne Gradadverb klingt der Satz nach Gegenüberstellung: 这个大 (zhège dà), 那个小 (nàge xiǎo) „dieses ist groß, jenes klein“. Verneint wird mit 不 (bù) direkt vor dem Adjektiv; 很 fällt dabei weg: 不贵 (bú guì) „nicht teuer“. Fragen bildet man mit 吗 oder in der Form 贵不贵 (guì bu guì).",
    "examples": [
      {
        "chinese": "今天很热。",
        "pinyin": "Jīntiān hěn rè.",
        "german": "Heute ist es heiß."
      },
      {
        "chinese": "这个饭店不贵。",
        "pinyin": "Zhège fàndiàn bú guì.",
        "german": "Dieses Restaurant ist nicht teuer."
      },
      {
        "chinese": "他的房间太小了。",
        "pinyin": "Tā de fángjiān tài xiǎo le.",
        "german": "Sein Zimmer ist zu klein."
      },
      {
        "chinese": "我们的学校很大。",
        "pinyin": "Wǒmen de xuéxiào hěn dà.",
        "german": "Unsere Schule ist groß."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "很",
      "distractors": [
        {
          "text": "是",
          "reason": "是 verbindet Nomen miteinander; vor einem Adjektiv wie 热 steht es im neutralen Satz nicht."
        },
        {
          "text": "有",
          "reason": "有 heißt „haben“ oder „es gibt“ und kann ein Adjektiv nicht zum Prädikat machen."
        },
        {
          "text": "的",
          "reason": "今天的热 wäre eine Nominalphrase („die Hitze von heute“), kein vollständiger Satz."
        }
      ]
    },
    "related": [
      "g:主谓句1：动词谓语句",
      "g:主谓句3：名词谓语句",
      "g:单句：非主谓句",
      "g:主谓句4：主谓谓语句",
      "g:很",
      "g:太"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Satztyp Nomensatz: Datum, Uhrzeit, Alter, Preis ohne Verb",
    "pinyin": "suì",
    "examples": [
      {
        "chinese": "今天十月十号。",
        "pinyin": "Jīntiān shí yuè shí hào.",
        "german": "Heute ist der 10. Oktober."
      },
      {
        "chinese": "现在八点半。",
        "pinyin": "Xiànzài bā diǎn bàn.",
        "german": "Es ist jetzt halb neun."
      },
      {
        "chinese": "我女儿五岁。",
        "pinyin": "Wǒ nǚ'ér wǔ suì.",
        "german": "Meine Tochter ist fünf Jahre alt."
      },
      {
        "chinese": "一杯咖啡二十块。",
        "pinyin": "Yì bēi kāfēi èrshí kuài.",
        "german": "Eine Tasse Kaffee kostet zwanzig Yuan."
      }
    ],
    "legacyIds": [
      "g:岁",
      "岁"
    ],
    "formation": "Subjekt + Nomen / Zahl + Zählwort (Datum, Uhrzeit, Alter, Preis, Herkunft)",
    "notes": "Für eine Gleichsetzung oder Zugehörigkeit („X ist Y“) steht dagegen 是: 他是我们的老师 (tā shì wǒmen de lǎoshī). Welche Wortarten das Prädikat ohne Verb bilden können (auch Pronomen wie 怎么样 (zěnmeyàng)), zeigt der Punkt zum Satzglied Prädikat, 谓语 (wèiyǔ). Nach dem Alter fragt man Kinder mit 你几岁 (nǐ jǐ suì), Erwachsene eher mit 你多大 (nǐ duō dà).",
    "explanation": "Im Nomensatz bildet ein Nomen oder eine Mengenangabe das Prädikat, ganz ohne Verb. Er ist vor allem gesprochen üblich und auf feste Bereiche beschränkt: Datum und Wochentag (今天十月十号 jīntiān shí yuè shí hào), Uhrzeit (现在八点半 xiànzài bā diǎn bàn), Alter (我女儿五岁 wǒ nǚ'ér wǔ suì), Preis (一杯咖啡二十块 yì bēi kāfēi èrshí kuài) und Herkunft (他上海人 tā Shànghǎi rén). Die Sätze sind kurz und fast immer bejaht; zum Verneinen braucht man 不是 (bú shì): 今天不是星期天 (jīntiān bú shì xīngqītiān). Mit 了 am Ende wird eine Veränderung ausgedrückt: 她三岁了 (tā sān suì le) „sie ist jetzt drei“.",
    "related": [
      "g:谓语：名词、代词、数词或数量短语作谓语",
      "g:主谓句1：动词谓语句",
      "g:主谓句2：形容词谓语句",
      "g:时间表示法：年、月、日、星期表示法",
      "g:钟点表示法",
      "g:钱数表示法"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Satz ohne Subjekt: Wetter, Hinweis, Ausruf, kurze Bitte",
    "formation": "Verb-, Adjektiv- oder Nomenphrase allein, ohne Subjekt",
    "notes": "Nicht verwechseln mit Sätzen, in denen ein bekanntes Subjekt nur weggelassen ist, etwa die Antwort 去 „(ich) gehe“ auf 你去吗 (nǐ qù ma): Dort ließe sich das Subjekt ergänzen, bei 下雨了 gibt es keins.",
    "explanation": "Manche Sätze haben kein Subjekt und brauchen auch keins – sie sind vollständig, nicht verkürzt. Typisch sind Naturerscheinungen: 下雨了 (xià yǔ le) „es regnet“ – das deutsche „es“ hat keine Entsprechung. Dazu kommen Hinweise und Ankündigungen wie 上课了 (shàngkè le) „der Unterricht beginnt“, kurze Aufforderungen wie 请进 (qǐng jìn) „herein, bitte“, Ausrufe mit einem Adjektiv wie 太好了 (tài hǎo le) „super!“ sowie Rufe und Anreden mit einem Nomen wie 小王 (Xiǎo Wáng) oder 火车 (huǒchē) „der Zug!“. Solche Sätze bestehen oft nur aus einem Wort oder einer kurzen Phrase und sind vor allem gesprochen häufig.",
    "examples": [
      {
        "chinese": "下雨了。",
        "pinyin": "Xià yǔ le.",
        "german": "Es regnet."
      },
      {
        "chinese": "上课了！",
        "pinyin": "Shàngkè le!",
        "german": "Der Unterricht fängt an!"
      },
      {
        "chinese": "太好了！",
        "pinyin": "Tài hǎo le!",
        "german": "Super!"
      },
      {
        "chinese": "请进！",
        "pinyin": "Qǐng jìn!",
        "german": "Herein, bitte!"
      }
    ],
    "related": [
      "g:主谓句1：动词谓语句",
      "g:主谓句2：形容词谓语句",
      "g:主谓句3：名词谓语句",
      "g:祈使句",
      "g:感叹句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Aussagesatz: etwas mitteilen, bejaht oder verneint",
    "formation": "Subjekt + Prädikat。 (bejaht oder mit 不/没 verneint)",
    "explanation": "Der Aussagesatz teilt etwas mit oder stellt etwas fest. Er endet mit einem Punkt (。) und wird mit fallender Satzmelodie gesprochen. Er kann bejaht sein (我是老师 wǒ shì lǎoshī) oder verneint: 不 (bù) verneint Gegenwärtiges, Zukünftiges und Gewohnheiten, 没 (méi) oder 没有 (méiyǒu) verneint Geschehenes und Besitz. Die Wortstellung ist dieselbe wie in der Frage; zur Frage wird ein Satz erst durch 吗, ein Fragewort oder die Form Verb + 不 + Verb. Partikeln am Satzende wie 了 oder 呢 können eine Aussage färben, ohne eine Frage daraus zu machen.",
    "examples": [
      {
        "chinese": "我妈妈是医生。",
        "pinyin": "Wǒ māma shì yīshēng.",
        "german": "Meine Mutter ist Ärztin."
      },
      {
        "chinese": "他今天不来上课。",
        "pinyin": "Tā jīntiān bù lái shàngkè.",
        "german": "Er kommt heute nicht zum Unterricht."
      },
      {
        "chinese": "我们昨天看了一个电影。",
        "pinyin": "Wǒmen zuótiān kànle yí ge diànyǐng.",
        "german": "Wir haben gestern einen Film gesehen."
      },
      {
        "chinese": "我还没吃饭。",
        "pinyin": "Wǒ hái méi chīfàn.",
        "german": "Ich habe noch nicht gegessen."
      }
    ],
    "related": [
      "g:疑问句：是非问句",
      "g:祈使句",
      "g:感叹句",
      "g:不",
      "g:没（有）"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Ja/Nein-Frage mit Fragepartikel am Satzende",
    "pinyin": "hǎo ma",
    "examples": [
      {
        "chinese": "你喜欢喝咖啡吗？",
        "pinyin": "Nǐ xǐhuan hē kāfēi ma?",
        "german": "Trinkst du gern Kaffee?"
      },
      {
        "chinese": "明天你有时间吗？",
        "pinyin": "Míngtiān nǐ yǒu shíjiān ma?",
        "german": "Hast du morgen Zeit?"
      },
      {
        "chinese": "我们一起去吃饭，好吗？",
        "pinyin": "Wǒmen yìqǐ qù chīfàn, hǎo ma?",
        "german": "Gehen wir zusammen essen, ja?"
      },
      {
        "chinese": "你是王老师的学生吧？",
        "pinyin": "Nǐ shì Wáng lǎoshī de xuésheng ba?",
        "german": "Du bist doch Schüler von Lehrer Wang, oder?"
      }
    ],
    "legacyIds": [
      "g:好吗",
      "好吗"
    ],
    "formation": "Aussagesatz + 吗？ (Vorschlag: …，好吗？)",
    "notes": "Fragewörter wie 什么 (shénme) und 吗 schließen sich aus: 你叫什么名字 (nǐ jiào shénme míngzi) steht ohne 吗. Die Form 去不去 (qù bu qù) ist eine zweite Art der Ja/Nein-Frage (eigener Punkt).",
    "explanation": "Eine Ja/Nein-Frage entsteht, indem man an einen Aussagesatz 吗 (ma) anhängt; die Wortstellung bleibt gleich: 你是老师吗 (nǐ shì lǎoshī ma) „Bist du Lehrer?“. Mit einem kurzen Nachsatz wie 好吗 (hǎo ma) oder 可以吗 (kěyǐ ma) wird ein Vorschlag zur Frage. Wer schon eine Vermutung hat, nimmt 吧 (ba) statt 吗: 你是学生吧 (nǐ shì xuésheng ba) „Du bist doch Student, oder?“. Gesprochen genügt manchmal auch steigende Stimme: 你不去 (nǐ bú qù)? „Du gehst nicht?“. In der Antwort wiederholt man meist das Verb – 是 oder 不是 (bú shì), 去 oder 不去 – statt „ja“ oder „nein“ zu sagen.",
    "quiz": {
      "example": 0,
      "answer": "吗",
      "distractors": [
        {
          "text": "呢",
          "reason": "呢 steht in Fragen mit Fragewort oder in Rückfragen wie „und du?“; eine Ja/Nein-Frage bildet es nicht."
        },
        {
          "text": "什么",
          "reason": "什么 ist ein Fragewort und steht an der Stelle des Gefragten, nicht als Partikel am Satzende."
        },
        {
          "text": "的",
          "reason": "的 am Satzende macht aus der Aussage keine Frage."
        }
      ]
    },
    "related": [
      "g:吗",
      "g:吧¹",
      "g:疑问句：特指问句",
      "g:疑问句：正反问句",
      "g:疑问句：用“还是”连接的选择问句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "W-Frage mit Fragewort (was, wer, wo, wie viele)",
    "formation": "Fragewort an der Stelle der gesuchten Information (ohne 吗)",
    "notes": "Ja/Nein-Fragen bildet man mit 吗 oder der Form Verb + 不 + Verb; Fragen mit Auswahl („A oder B“) mit 还是 (háishi) sind ein Punkt in HSK 2.",
    "explanation": "Eine W-Frage fragt mit einem Fragewort gezielt nach einer Information: 什么 (shénme) „was“, 谁 (shéi) „wer“, 哪儿 (nǎr) „wo“, 几 (jǐ) und 多少 (duōshao) „wie viele“, 怎么 (zěnme) „wie“, 怎么样 (zěnmeyàng) „wie ist es“. Anders als im Deutschen wandert das Fragewort nicht an den Satzanfang, sondern steht genau dort, wo in der Antwort die gesuchte Information steht: 你去哪儿 (nǐ qù nǎr)? – 我去学校 (wǒ qù xuéxiào). Ein 吗 kommt nicht dazu (falsch: 你去哪儿吗); ein 呢 am Ende ist möglich und macht die Frage weicher. 几 erwartet meist eine kleine Zahl und braucht ein Zählwort, 多少 passt zu jeder Zahl.",
    "examples": [
      {
        "chinese": "你叫什么名字？",
        "pinyin": "Nǐ jiào shénme míngzi?",
        "german": "Wie heißt du?"
      },
      {
        "chinese": "那个人是谁？",
        "pinyin": "Nàge rén shì shéi?",
        "german": "Wer ist die Person dort?"
      },
      {
        "chinese": "你们在哪儿吃饭？",
        "pinyin": "Nǐmen zài nǎr chīfàn?",
        "german": "Wo esst ihr?"
      },
      {
        "chinese": "你家有几口人？",
        "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
        "german": "Wie viele Personen gehören zu deiner Familie?"
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "哪儿",
      "distractors": [
        {
          "text": "什么",
          "reason": "什么 fragt nach einer Sache; als Ortsfrage nach 在 bräuchte es 什么地方."
        },
        {
          "text": "谁",
          "reason": "谁 fragt nach einer Person, nach 在 wird hier aber ein Ort gesucht."
        },
        {
          "text": "几",
          "reason": "几 fragt nach einer Anzahl und braucht ein Zählwort; nach einem Ort fragt es nicht."
        }
      ],
      "accepted": [
        "哪里"
      ]
    },
    "related": [
      "g:疑问代词@HSK1",
      "g:什么",
      "g:谁",
      "g:哪儿",
      "g:疑问句：是非问句",
      "g:疑问句：正反问句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Ja/Nein-Frage aus bejahter und verneinter Form („gehst du oder nicht?“)",
    "formation": "Verb/Adjektiv + 不 + Verb/Adjektiv (+ Objekt)？ · 有没有 + Nomen？",
    "explanation": "Statt 吗 anzuhängen, kann man die bejahte und die verneinte Form eines Verbs oder Adjektivs nebeneinanderstellen: 你去不去 (nǐ qù bu qù)? „Gehst du (oder nicht)?“. Das 不 in der Mitte wird meist unbetont gesprochen. 有 (yǒu) bildet die Frage mit 没: 有没有 (yǒu méiyǒu); bei 是 heißt es 是不是 (shì bu shì). Bei zweisilbigen Verben und Adjektiven wird oft nur die erste Silbe wiederholt: 喜不喜欢 (xǐ bu xǐhuan). Ein Objekt steht meist am Ende: 你喝不喝茶 (nǐ hē bu hē chá)? Wichtig: Am Ende steht kein 吗, und vor dem Prädikat stehen keine Gradadverbien wie 很 oder 非常 (fēicháng) – falsch ist also 你很忙不忙.",
    "notes": "有 wird immer mit 没 verneint, daher 有没有 (yǒu méiyǒu), nicht 有不有. Nach Vergangenem fragt man mit 没: 你去没去 (nǐ qù méi qù) – das ist ein späterer Gebrauch. Die Antwort wiederholt die passende Form: 去 oder 不去.",
    "examples": [
      {
        "chinese": "你明天去不去学校？",
        "pinyin": "Nǐ míngtiān qù bu qù xuéxiào?",
        "german": "Gehst du morgen zur Schule?"
      },
      {
        "chinese": "这个菜好不好吃？",
        "pinyin": "Zhège cài hǎo bu hǎochī?",
        "german": "Schmeckt dieses Gericht?"
      },
      {
        "chinese": "你有没有时间？",
        "pinyin": "Nǐ yǒu méiyǒu shíjiān?",
        "german": "Hast du Zeit?"
      },
      {
        "chinese": "你是不是中国人？",
        "pinyin": "Nǐ shì bu shì Zhōngguó rén?",
        "german": "Bist du Chinese?"
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
    "related": [
      "g:吗",
      "g:疑问句：是非问句",
      "g:疑问句：特指问句",
      "g:疑问句：用“还是”连接的选择问句",
      "g:不",
      "g:没（有）"
    ],
    "quiz": {
      "example": 0,
      "answer": "去不去",
      "distractors": [
        {
          "text": "去没去",
          "reason": "去没去 fragt nach Vergangenem („Bist du hingegangen?“); zu 明天 passt nur 去不去."
        },
        {
          "text": "去吗",
          "reason": "吗 steht am Satzende; vor dem Objekt 学校 bildet es keine Frage."
        },
        {
          "text": "要不要",
          "reason": "Nach 要不要 fehlt das Verb 去; 要不要学校 ergibt keinen Sinn."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Aufforderung, Bitte oder Verbot",
    "pinyin": "qǐng + Verb",
    "examples": [
      {
        "chinese": "请你再说一遍。",
        "pinyin": "Qǐng nǐ zài shuō yí biàn.",
        "german": "Sag das bitte noch einmal."
      },
      {
        "chinese": "我们走吧！",
        "pinyin": "Wǒmen zǒu ba!",
        "german": "Gehen wir!"
      },
      {
        "chinese": "快上车！",
        "pinyin": "Kuài shàng chē!",
        "german": "Schnell, steig ein!"
      },
      {
        "chinese": "不要在这儿吃东西。",
        "pinyin": "Búyào zài zhèr chī dōngxi.",
        "german": "Bitte hier nicht essen."
      }
    ],
    "legacyIds": [
      "g:请 + Verb",
      "请 + Verb"
    ],
    "formation": "(你/你们 +) (请 +) Verb (+ 吧)！ · 不要 + Verb！",
    "notes": "Ab HSK 2 sagt man für Verbote auch kürzer 别 (bié). 吧 drückt nicht nur Vorschläge aus, sondern auch Vermutungen: 你是学生吧 (nǐ shì xuésheng ba) ist eine Frage, keine Aufforderung.",
    "explanation": "Ein Aufforderungssatz – 祈使句 (qǐshǐjù) – bittet, schlägt vor oder verbietet. Das Subjekt 你 oder 你们 (nǐmen) kann stehen oder fehlen; das Verb bleibt unverändert. Höflich wird die Bitte mit 请 (qǐng) „bitte“ am Anfang: 请坐 (qǐng zuò) „bitte setzen Sie sich“. 吧 (ba) am Ende macht daraus einen weichen Vorschlag oder eine freundliche Aufforderung: 我们走吧 (wǒmen zǒu ba) „gehen wir“. 快 (kuài) vor dem Verb treibt zur Eile an: 快来 (kuài lái) „komm schnell“. Verbote bildet man mit 不要 (búyào) vor dem Verb: 不要说话 (búyào shuōhuà) „nicht reden!“. Ob die Aufforderung höflich oder streng klingt, hängt von 请, 吧 und vom Tonfall ab.",
    "quiz": {
      "example": 3,
      "answer": "不要",
      "distractors": [
        {
          "text": "不",
          "reason": "Mit 不 allein wird der Satz zur Aussage („ich esse hier nicht“); ein Verbot braucht 不要."
        },
        {
          "text": "没",
          "reason": "没 verneint Geschehenes („hat nicht gegessen“) und drückt kein Verbot aus."
        },
        {
          "text": "不是",
          "reason": "不是 verneint eine Gleichsetzung („ist nicht“), kein Verbot."
        }
      ],
      "accepted": [
        "别"
      ]
    },
    "related": [
      "g:祈使句：用“别”的祈使句",
      "g:不要",
      "g:吧¹",
      "g:单句：非主谓句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Ausrufesatz: Freude, Staunen, Ärger („Wie …!“, „Zu …!“)",
    "formation": "太 + Adjektiv + 了！ · 真 + Adjektiv！",
    "notes": "Später kommen weitere Ausrufformen hinzu: 好 + Adjektiv + 啊 (HSK 2) und 多么 (duōme) + Adjektiv (HSK 4). Kurze Ausrufe wie 太好了 (tài hǎo le) sind zugleich Sätze ohne Subjekt.",
    "explanation": "Ein Ausrufesatz drückt ein starkes Gefühl aus – Freude, Staunen, Ärger – und endet mit einem Ausrufezeichen. Auf dieser Stufe gibt es zwei Grundformen. Erstens 太 (tài) + Adjektiv + 了 (le): 太好了 (tài hǎo le) „super!“, 太贵了 (tài guì le) „viel zu teuer!“. 太 bedeutet dabei je nach Lage „zu“ (Kritik) oder „so, wirklich“ (Lob, Begeisterung). Zweitens 真 (zhēn) + Adjektiv, meist ohne 了: 真漂亮 (zhēn piàoliang) „wirklich hübsch!“. Das Subjekt kann stehen oder fehlen: 这个菜太好吃了 (zhège cài tài hǎochī le)! Typischer Fehler: 很 + Adjektiv + 了 als Ausruf – 很 ist neutral und bildet mit 了 keinen Ausruf.",
    "examples": [
      {
        "chinese": "这个菜太好吃了！",
        "pinyin": "Zhège cài tài hǎochī le!",
        "german": "Dieses Gericht schmeckt fantastisch!"
      },
      {
        "chinese": "今天真冷！",
        "pinyin": "Jīntiān zhēn lěng!",
        "german": "Heute ist es wirklich kalt!"
      },
      {
        "chinese": "这件衣服太贵了！",
        "pinyin": "Zhè jiàn yīfu tài guì le!",
        "german": "Das Kleid ist viel zu teuer!"
      },
      {
        "chinese": "你的汉字写得真好！",
        "pinyin": "Nǐ de Hànzì xiě de zhēn hǎo!",
        "german": "Du schreibst die Zeichen wirklich schön!"
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "太",
      "distractors": [
        {
          "text": "很",
          "reason": "很 bildet mit 了 keinen Ausruf; 很好吃了 hieße eher „schmeckt schon recht gut“."
        },
        {
          "text": "是",
          "reason": "是 steht nicht vor Adjektiven und macht keinen Ausruf."
        },
        {
          "text": "有点儿",
          "reason": "有点儿 „etwas“ steht vor unangenehmen Eigenschaften und passt nicht zu einem begeisterten Ausruf."
        }
      ]
    },
    "related": [
      "g:太",
      "g:真",
      "g:好",
      "g:啊¹",
      "g:多么",
      "g:单句：非主谓句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "A ist B: Gleichsetzung oder Zugehörigkeit",
    "formation": "Subjekt + 是 + Nomen / Pronomen / Nominalphrase",
    "explanation": "是 (shì) verbindet zwei nominale Ausdrücke und entspricht dem deutschen „sein“ – aber nur vor Nomen und Pronomen. Es drückt Gleichsetzung aus (她是我妈妈 tā shì wǒ māma „sie ist meine Mutter“: beide Ausdrücke meinen dieselbe Person) oder Zugehörigkeit zu einer Gruppe (我是学生 wǒ shì xuésheng „ich bin Student“). Einen Artikel wie „ein“ gibt es nicht. 是 wird nur mit 不 verneint: 不是 (bú shì); 没是 ist falsch. Fragen: 你是老师吗 (nǐ shì lǎoshī ma) oder 你是不是老师 (nǐ shì bu shì lǎoshī). Vor Adjektiven steht kein 是: 他很高 (tā hěn gāo), nicht 他是高.",
    "notes": "„Haben“ und „es gibt“ drückt 有 (yǒu) aus, nicht 是. Mit 是 kann man später auch Merkmale beschreiben (zweiter 是-Satz, HSK 2).",
    "examples": [
      {
        "chinese": "她是我的中文老师。",
        "pinyin": "Tā shì wǒ de Zhōngwén lǎoshī.",
        "german": "Sie ist meine Chinesischlehrerin."
      },
      {
        "chinese": "这是我妈妈。",
        "pinyin": "Zhè shì wǒ māma.",
        "german": "Das ist meine Mutter."
      },
      {
        "chinese": "我不是日本人，我是中国人。",
        "pinyin": "Wǒ bú shì Rìběn rén, wǒ shì Zhōngguó rén.",
        "german": "Ich bin kein Japaner, ich bin Chinese."
      },
      {
        "chinese": "那不是我的书。",
        "pinyin": "Nà bú shì wǒ de shū.",
        "german": "Das ist nicht mein Buch."
      }
    ],
    "legacyIds": [
      "g:是",
      "是",
      "g:不是",
      "不是"
    ],
    "related": [
      "g:“是”字句2：表示说明或特征",
      "g:“是……的”句1：强调时间、地点、方式、动作者",
      "g:“有”字句1：表示领有",
      "g:处所+是+名词",
      "g:不"
    ],
    "quiz": {
      "example": 0,
      "answer": "是",
      "distractors": [
        {
          "text": "很",
          "reason": "很 steht vor Adjektiven; vor einem Nomen wie 老师 braucht es 是."
        },
        {
          "text": "在",
          "reason": "在 heißt „sich befinden“ und verlangt einen Ort; 老师 ist kein Ort."
        },
        {
          "text": "也",
          "reason": "也 „auch“ ist ein Adverb und ersetzt kein Verb; es hieße 也是."
        }
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "haben, besitzen (Besitz)",
    "formation": "Besitzer + 有/没有 + (Zahl + Zählwort +) Nomen",
    "explanation": "有 (yǒu) „haben“ drückt Besitz aus; das Subjekt ist der Besitzer: 我有一个姐姐 (wǒ yǒu yí ge jiějie) „ich habe eine ältere Schwester“. Dazu gehören auch Verwandte, Freunde und Abstraktes: 有时间 (yǒu shíjiān) „Zeit haben“, 有问题 (yǒu wèntí) „eine Frage haben“. Verneint wird 有 ausschließlich mit 没 (méi): 没有 (méiyǒu), nie mit 不 – 不有 ist falsch. Im Gespräch wird 没有 vor einem Nomen oft zu 没 verkürzt: 我没钱 (wǒ méi qián) „ich habe kein Geld“. Fragen: 你有车吗 (nǐ yǒu chē ma) oder 你有没有车 (nǐ yǒu méiyǒu chē).",
    "notes": "Steht ein Ort am Satzanfang, heißt 有 „es gibt“: 这儿有很多人 (zhèr yǒu hěn duō rén) – das ist der Existenzsatz (eigener Punkt). Mit 很 lässt sich 有 vor bestimmten, meist abstrakten Nomen steigern: 很有意思 (hěn yǒu yìsi) „sehr interessant“, 很有钱 (hěn yǒu qián) „sehr reich“.",
    "examples": [
      {
        "chinese": "我有两个哥哥。",
        "pinyin": "Wǒ yǒu liǎng ge gēge.",
        "german": "Ich habe zwei ältere Brüder."
      },
      {
        "chinese": "她没有手机。",
        "pinyin": "Tā méiyǒu shǒujī.",
        "german": "Sie hat kein Handy."
      },
      {
        "chinese": "你有中文名字吗？",
        "pinyin": "Nǐ yǒu Zhōngwén míngzi ma?",
        "german": "Hast du einen chinesischen Namen?"
      },
      {
        "chinese": "我们学校有一个很大的图书馆。",
        "pinyin": "Wǒmen xuéxiào yǒu yí ge hěn dà de túshūguǎn.",
        "german": "Unsere Schule hat eine sehr große Bibliothek."
      }
    ],
    "legacyIds": [
      "g:有",
      "有"
    ],
    "related": [
      "g:疑问句：正反问句",
      "g:“有”字句2：表示达到",
      "g:处所+有+数量短语+名词",
      "g:没（有）",
      "g:“是”字句1：表示等同或类属"
    ],
    "quiz": {
      "example": 1,
      "answer": "没有",
      "distractors": [
        {
          "text": "不有",
          "reason": "有 wird nie mit 不 verneint; richtig ist 没有."
        },
        {
          "text": "不是",
          "reason": "不是 verneint eine Gleichsetzung und hieße „sie ist kein Handy“."
        },
        {
          "text": "很有",
          "reason": "很有 steigert nur Eigenschaften wie 很有意思; 很有手机 ist falsch, und der Satz soll ja verneint sein."
        }
      ],
      "accepted": [
        "没"
      ]
    },
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:处所+是+名词",
    "pattern": "处所+是+名词",
    "level": "HSK1",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 54,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "存现句1",
      "content": "（1）处所+是+名词"
    },
    "meaning": "an einem Ort ist/befindet sich … (Existenzsatz mit sein)",
    "formation": "Ort (+ Richtungswort) + 是 + Nomen",
    "notes": "Gegenstück mit 有: 我家旁边有一个饭馆 sagt nur, dass es dort ein Restaurant gibt (eigener Punkt). Geht es um den Ort eines bekannten Dings, dreht sich die Wortstellung um – Ding + 在 + Ort: 我的书在桌子上. Die Musterbezeichnung im Syllabus lautet „所处“; gemeint ist 处所 (chùsuǒ) „Ort“.",
    "explanation": "In diesem Existenzsatz steht der Ort am Satzanfang, meist ein Nomen mit Richtungswort wie 旁边 (pángbiān), 后边 (hòubian) oder 桌子上 (zhuōzi shang); danach folgen 是 und das, was sich dort befindet. Anders als 有 (yǒu) – „dort gibt es etwas“ – benennt 是, was genau an dieser Stelle ist: Der Sprecher setzt voraus, dass dort etwas ist, und sagt, was es ist. Oft ist es das Einzige dort oder füllt den Ort aus. Deshalb passt 是 gut zu bestimmten Dingen und Personen wie „meine Bücher“ oder „unsere Schule“. Der Ort steht ohne 在 am Satzanfang. Verneint wird mit 不是 (bú shì): 我家旁边不是学校。",
    "examples": [
      {
        "chinese": "我家旁边是我们的学校。",
        "pinyin": "Wǒ jiā pángbiān shì wǒmen de xuéxiào.",
        "german": "Neben unserem Haus ist unsere Schule."
      },
      {
        "chinese": "桌子上是我的书。",
        "pinyin": "Zhuōzi shang shì wǒ de shū.",
        "german": "Auf dem Tisch liegen meine Bücher."
      },
      {
        "chinese": "医院后边是一个大商店。",
        "pinyin": "Yīyuàn hòubian shì yí ge dà shāngdiàn.",
        "german": "Hinter dem Krankenhaus ist ein großes Geschäft."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "是",
      "distractors": [
        {
          "text": "在",
          "reason": "在 nennt den Ort eines Dings, das vorne steht (我们的学校在我家旁边); nach der Ortsangabe am Satzanfang passt es nicht."
        },
        {
          "text": "有",
          "reason": "有 führt etwas Neues, Unbestimmtes ein (有一个学校); vor etwas Bestimmtem wie „unsere Schule“ sagt man 是."
        },
        {
          "text": "的",
          "reason": "的 verbindet Attribut und Nomen und ist kein Verb – dem Satz fehlte das Prädikat."
        }
      ]
    },
    "related": [
      "g:处所+有+数量短语+名词",
      "g:“是”字句1：表示等同或类属",
      "g:处所+动词+着(+数量短语)+名词"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    },
    "legacyIds": [
      "g:所处+是+名词"
    ]
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
    "meaning": "an einem Ort gibt es (Anzahl) …",
    "formation": "Ort (+ Richtungswort) + 有 + Zahl + Zählwort + Nomen",
    "notes": "Ist das Ding schon bekannt, nimmt man 在: 我的书在桌子上. Mit 是 (桌子上是我的书) benennt man, was genau dort ist (eigener Punkt). Statt 有 kann ein Verb mit 着 stehen, das zeigt, wie sich etwas dort befindet, etwa 桌子上放着两本书 – ein Punkt von HSK 2.",
    "explanation": "Der Existenzsatz mit 有 (yǒu) nennt zuerst den Ort und sagt dann, dass es dort etwas gibt – meist in einer bestimmten Menge. Die Ortsangabe steht ohne 在 am Satzanfang, z. B. 教室里 (jiàoshì li), 桌子上 (zhuōzi shang) oder 学校旁边 (xuéxiào pángbiān). Das Genannte ist neu und unbestimmt („es gibt zwei Bücher“); deshalb folgt auf 有 meist eine Mengenangabe wie 一个 (yí ge), 两本 (liǎng běn) oder 很多 (hěn duō). Vor Zählwörtern heißt „zwei“ 两, nicht 二. Verneint wird mit 没有 (méiyǒu); die Zahl fällt dann meist weg: 教室里没有学生。",
    "examples": [
      {
        "chinese": "教室里有二十个学生。",
        "pinyin": "Jiàoshì li yǒu èrshí ge xuésheng.",
        "german": "Im Klassenzimmer sind zwanzig Schüler."
      },
      {
        "chinese": "桌子上有两本书。",
        "pinyin": "Zhuōzi shang yǒu liǎng běn shū.",
        "german": "Auf dem Tisch liegen zwei Bücher."
      },
      {
        "chinese": "我们学校旁边有一家饭馆。",
        "pinyin": "Wǒmen xuéxiào pángbiān yǒu yì jiā fànguǎn.",
        "german": "Neben unserer Schule gibt es ein Restaurant."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "有",
      "distractors": [
        {
          "text": "在",
          "reason": "在 nennt den Ort eines bekannten Dings und verlangt die umgekehrte Wortstellung: 书在桌子上."
        },
        {
          "text": "和",
          "reason": "和 verbindet Nomen („und“) und ist kein Verb – dem Satz fehlte das Prädikat."
        },
        {
          "text": "都",
          "reason": "都 ist ein Adverb und braucht ein Verb danach; allein kann es kein Prädikat bilden."
        }
      ]
    },
    "related": [
      "g:处所+是+名词",
      "g:“有”字句1：表示领有",
      "g:处所+动词+着(+数量短语)+名词",
      "g:表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "irgendwohin gehen/kommen, um etwas zu tun (zweites Verb = Zweck)",
    "formation": "Subjekt + Verb 1 (oft 去/来 + Ort) + Verb 2 (+ Objekt)",
    "explanation": "Zwei Verbgruppen stehen ohne Bindewort hintereinander: Die erste nennt die Bewegung – meist 去 (qù) oder 来 (lái) mit einem Ziel –, die zweite deren Zweck: „gehen, um … zu …“. Ein Wort für „um zu“ braucht man nicht; die Reihenfolge entspricht dem Ablauf und lässt sich nicht umdrehen. Das Ziel steht direkt nach 去 oder 来: 去商店, 来中国. Auch andere Bewegungsverben sind möglich, etwa 回家 (huí jiā) „nach Hause gehen“. Verneinung und Adverbien stehen vor dem ersten Verb: 我不去商店买东西 (Wǒ bú qù shāngdiàn mǎi dōngxi) „Ich gehe nicht einkaufen“.",
    "notes": "去 bezeichnet die Bewegung vom Sprecher weg, 来 zum Sprecher hin. Nennt das erste Verb dagegen das Mittel (坐飞机去北京 – „mit dem Flugzeug nach Peking“), ist es der andere Typ des 连动句 (liándòngjù): Art und Weise.",
    "examples": [
      {
        "chinese": "我去商店买东西。",
        "pinyin": "Wǒ qù shāngdiàn mǎi dōngxi.",
        "german": "Ich gehe in den Laden, um einzukaufen."
      },
      {
        "chinese": "他来中国学习汉语。",
        "pinyin": "Tā lái Zhōngguó xuéxí Hànyǔ.",
        "german": "Er ist nach China gekommen, um Chinesisch zu lernen."
      },
      {
        "chinese": "明天我去医院看朋友。",
        "pinyin": "Míngtiān wǒ qù yīyuàn kàn péngyou.",
        "german": "Morgen besuche ich einen Freund im Krankenhaus."
      },
      {
        "chinese": "我回家拿手机。",
        "pinyin": "Wǒ huí jiā ná shǒujī.",
        "german": "Ich gehe nach Hause, um mein Handy zu holen."
      }
    ],
    "legacyIds": [
      "g:去/来 + Verb",
      "去/来 + Verb"
    ],
    "related": [
      "g:连动句1：前一动作是后一动作的方式",
      "g:“着”表示动作的伴随：动词1+着+动词2",
      "g:连动句3：前后两个动词性词语具有因果、转折、条件关系"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "etwas auf eine bestimmte Art oder mit einem Mittel tun (erstes Verb = Mittel)",
    "pinyin": "yòng + Nomen + Verb",
    "examples": [
      {
        "chinese": "我们坐飞机去北京吧。",
        "pinyin": "Wǒmen zuò fēijī qù Běijīng ba.",
        "german": "Lass uns mit dem Flugzeug nach Peking fliegen."
      },
      {
        "chinese": "他每天坐出租车上班。",
        "pinyin": "Tā měi tiān zuò chūzūchē shàngbān.",
        "german": "Er fährt jeden Tag mit dem Taxi zur Arbeit."
      },
      {
        "chinese": "我妈妈开车去医院。",
        "pinyin": "Wǒ māma kāichē qù yīyuàn.",
        "german": "Meine Mutter fährt mit dem Auto ins Krankenhaus."
      }
    ],
    "legacyIds": [
      "g:用 + Nomen + Verb",
      "用 + Nomen + Verb"
    ],
    "formation": "Subjekt + Verb 1 (坐/开/用 … + Mittel) + Verb 2 (+ Objekt)",
    "notes": "Im Satz 我去商店买东西 nennt das zweite Verb dagegen den Zweck des ersten (anderer Typ des 连动句). Mit 着 nach dem ersten Verb (笑着说, HSK 3) beschreibt man eine begleitende Handlung.",
    "explanation": "Auch hier stehen zwei Verbgruppen ohne Bindewort hintereinander, doch die erste nennt das Mittel oder die Art und Weise, wie die zweite Handlung geschieht. Typische erste Verben sind 坐 (zuò) für Bus, Zug oder Flugzeug, 开车 (kāichē) „mit dem Auto fahren“ und 用 (yòng) „benutzen“, etwa 用手机买票 „mit dem Handy eine Karte kaufen“. Das deutsche „mit“ wird also durch ein Verb ausgedrückt – nicht durch 和 (hé), das „und“ oder „zusammen mit (Personen)“ bedeutet. Die Reihenfolge ist fest: erst das Mittel, dann die Handlung. Verneinung und Adverbien stehen vor dem ersten Verb: 他不坐公交车去学校 „Er fährt nicht mit dem Bus zur Schule“.",
    "quiz": {
      "example": 0,
      "answer": "坐",
      "distractors": [
        {
          "text": "和",
          "reason": "和 heißt „und“ bzw. „zusammen mit“ (Personen); das Verkehrsmittel wird mit dem Verb 坐 angegeben."
        },
        {
          "text": "在",
          "reason": "在 nennt einen Ort oder eine laufende Handlung; „in einem Flugzeug nach Peking“ ergibt hier keinen Satz."
        },
        {
          "text": "骑",
          "reason": "骑 benutzt man für Fahrrad oder Pferd, auf denen man rittlings sitzt – nicht für ein Flugzeug."
        }
      ]
    },
    "related": [
      "g:连动句1：前后动作先后发生，后一动作是前一动作的目的",
      "g:“着”表示动作的伴随：动词1+着+动词2",
      "g:连动句3：前后两个动词性词语具有因果、转折、条件关系"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "jemandem etwas geben, beibringen, fragen … (zwei Objekte)",
    "formation": "Subjekt + Verb + Person (Objekt 1) + Sache (Objekt 2)",
    "notes": "Mit 给 nach dem Verb (送给他一本书 – „ihm ein Buch schenken“) folgt die nächste Stufe, HSK 2.",
    "explanation": "Einige Verben haben zwei Objekte ohne Präposition: zuerst die Person, dann die Sache. Auf Anfängerniveau sind das vor allem 给 (gěi) „geben“, 教 (jiāo) „unterrichten“, 问 (wèn) „fragen“ und 告诉 (gàosu) „mitteilen“. Die Reihenfolge ist fest: 老师教我们汉语, nicht 老师教汉语我们. Einen Dativ gibt es nicht – die Person steht einfach direkt nach dem Verb. Viele Verben erlauben dieses Muster nicht: 说 (shuō) und 买 (mǎi) brauchen eine Präposition vor der Person, etwa 他对我说 „er sagte zu mir“ oder 我给妈妈买了一本书 „ich habe Mama ein Buch gekauft“. Die Sache ist oft eine Mengenangabe wie 一本书 oder 一个问题.",
    "examples": [
      {
        "chinese": "王老师教我们汉语。",
        "pinyin": "Wáng lǎoshī jiāo wǒmen Hànyǔ.",
        "german": "Lehrer Wang bringt uns Chinesisch bei."
      },
      {
        "chinese": "朋友给了我一本书。",
        "pinyin": "Péngyou gěi le wǒ yì běn shū.",
        "german": "Ein Freund hat mir ein Buch gegeben."
      },
      {
        "chinese": "我想问你一个问题。",
        "pinyin": "Wǒ xiǎng wèn nǐ yí ge wèntí.",
        "german": "Ich möchte dich etwas fragen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "教",
      "distractors": [
        {
          "text": "学",
          "reason": "学 heißt „lernen“; der Lernende ist das Subjekt (我们学汉语), eine Person als Objekt ist nicht möglich."
        },
        {
          "text": "说",
          "reason": "说 hat keine Person als direktes Objekt; man sagt 对我们说 oder einfach 说汉语."
        },
        {
          "text": "写",
          "reason": "写 nimmt nur eine Sache als Objekt; eine Person dazwischen ergibt keinen Sinn."
        }
      ]
    },
    "related": [
      "g:主语+动词+给+宾语1+宾语2",
      "g:主语+把+宾语1+动词（+给）+宾语2"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Teilsätze ohne Bindewort aneinanderreihen (Beziehung aus dem Zusammenhang)",
    "formation": "Teilsatz 1，Teilsatz 2",
    "notes": "Schon kleine Adverbien im zweiten Teilsatz wie 也 oder 还 machen die Beziehung deutlicher (……，也……; ……，还……); das sind eigene Punkte.",
    "explanation": "Im gesprochenen Chinesisch werden Teilsätze oft einfach mit Komma nebeneinandergestellt, ohne Wörter für „und“, „weil“, „wenn“ oder „aber“. Welche Beziehung gemeint ist, ergibt sich aus dem Inhalt: Reihung (他是老师，我是学生), Gegensatz (这个很贵，那个很便宜), Grund und Folge (今天下雨，我不去了) oder Bedingung (你不来，我不走). Wichtig ist die Reihenfolge: Grund, Bedingung oder früheres Ereignis stehen vorn, die Folge hinten. Beim Übersetzen muss man im Deutschen das passende Bindewort ergänzen. Später kommen Bindewörter wie 因为 (yīnwèi) „weil“ oder 但是 (dànshì) „aber“ hinzu, die die Beziehung ausdrücklich machen.",
    "examples": [
      {
        "chinese": "他是老师，我是学生。",
        "pinyin": "Tā shì lǎoshī, wǒ shì xuésheng.",
        "german": "Er ist Lehrer, und ich bin Schüler."
      },
      {
        "chinese": "这个很贵，那个很便宜。",
        "pinyin": "Zhège hěn guì, nàge hěn piányi.",
        "german": "Das hier ist teuer, das da dagegen billig."
      },
      {
        "chinese": "今天下雨，我不去了。",
        "pinyin": "Jīntiān xià yǔ, wǒ bú qù le.",
        "german": "Heute regnet es, deshalb gehe ich nicht hin."
      },
      {
        "chinese": "你不来，我不走。",
        "pinyin": "Nǐ bù lái, wǒ bù zǒu.",
        "german": "Solange du nicht kommst, gehe ich nicht weg."
      }
    ],
    "related": [
      "g:……，也……",
      "g:……，还……"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "…, (und) … auch …",
    "pinyin": "bù…yě bù…",
    "examples": [
      {
        "chinese": "我喜欢喝茶，我妈妈也喜欢喝茶。",
        "pinyin": "Wǒ xǐhuan hē chá, wǒ māma yě xǐhuan hē chá.",
        "german": "Ich trinke gern Tee, und meine Mutter auch."
      },
      {
        "chinese": "他喜欢看书，也喜欢看电影。",
        "pinyin": "Tā xǐhuan kàn shū, yě xǐhuan kàn diànyǐng.",
        "german": "Er liest gern und schaut auch gern Filme."
      },
      {
        "chinese": "你不去，我也不去。",
        "pinyin": "Nǐ bú qù, wǒ yě bú qù.",
        "german": "Wenn du nicht gehst, gehe ich auch nicht."
      },
      {
        "chinese": "这件衣服很好看，也不贵。",
        "pinyin": "Zhè jiàn yīfu hěn hǎokàn, yě bú guì.",
        "german": "Das Kleidungsstück sieht gut aus und ist auch nicht teuer."
      }
    ],
    "legacyIds": [
      "g:不…也不…",
      "不…也不…"
    ],
    "formation": "Teilsatz 1，(Subjekt 2 +) 也 + Prädikat",
    "notes": "还 (……，还……) fügt beim selben Subjekt etwas Weiteres hinzu („außerdem“); 都 (dōu) fasst mehrere Subjekte zusammen: 我和妈妈都喜欢喝茶. Zwei Eigenschaften nebeneinander lassen sich später mit 又……又…… ausdrücken (HSK 3).",
    "explanation": "也 (yě) im zweiten Teilsatz zeigt, dass für ihn dasselbe gilt wie für den ersten: „…, und … auch“. Oft wechselt das Subjekt (我喜欢喝茶，我妈妈也喜欢喝茶); hat der zweite Teilsatz dasselbe Subjekt, fällt es meist weg (他喜欢看书，也喜欢看电影). 也 ist ein Adverb: Es steht nach dem Subjekt vor dem Prädikat, also vor Verb oder Adjektiv und auch vor 不 oder 很 – nicht am Satzanfang (nicht: 也我妈妈喜欢). Sind beide Teile verneint, entspricht das „auch nicht“ bzw. „weder … noch“: 你不去，我也不去.",
    "quiz": {
      "example": 0,
      "answer": "也",
      "distractors": [
        {
          "text": "还",
          "reason": "还 fügt beim selben Subjekt etwas Weiteres hinzu („außerdem“); dass die Mutter dasselbe mag, drückt 也 aus."
        },
        {
          "text": "都",
          "reason": "都 fasst eine Mehrzahl zusammen (我们都喜欢); hier ist das Subjekt nur die Mutter."
        },
        {
          "text": "和",
          "reason": "和 verbindet Nomen („und“), kann aber nicht als Adverb vor einem Verb stehen."
        }
      ]
    },
    "related": [
      "g:……，还……",
      "g:也",
      "g:不用关联词语的复句",
      "g:又……，又……",
      "g:既……，又/也……"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "…, außerdem/dazu noch …",
    "formation": "Teilsatz 1，(Subjekt +) 还 + Verb/Adjektiv …",
    "notes": "也 betont die Gleichheit, oft bei verschiedenen Subjekten (你去，我也去); 还 das Hinzukommen beim selben Subjekt – bei gleichem Subjekt ist oft beides möglich. 还 hat weitere Bedeutungen, etwa „noch immer“ (他还在睡觉) oder „noch nicht“ mit 没 (HSK 2); sie werden eigens behandelt.",
    "explanation": "还 (hái) im zweiten Teilsatz fügt beim selben Subjekt eine weitere Handlung oder Eigenschaft hinzu: „…, und außerdem noch …“. Typisch ist das bei Aufzählungen dessen, was jemand tut, kann oder hat: 我买了苹果，还买了牛奶. Das Subjekt des zweiten Teilsatzes fällt meist weg, weil es dasselbe ist. Wie 也 steht 还 nach dem Subjekt vor dem Prädikat, nicht am Satzanfang. Der Teil mit 还 klingt oft wie ein Zusatz „obendrein“: 他会唱歌，还会跳舞 „Er kann singen und obendrein tanzen“.",
    "examples": [
      {
        "chinese": "我买了苹果，还买了牛奶。",
        "pinyin": "Wǒ mǎi le píngguǒ, hái mǎi le niúnǎi.",
        "german": "Ich habe Äpfel gekauft und dazu noch Milch."
      },
      {
        "chinese": "他会唱歌，还会跳舞。",
        "pinyin": "Tā huì chànggē, hái huì tiàowǔ.",
        "german": "Er kann singen und außerdem tanzen."
      },
      {
        "chinese": "这个饭馆的菜很好吃，还很便宜。",
        "pinyin": "Zhège fànguǎn de cài hěn hǎochī, hái hěn piányi.",
        "german": "Das Essen in diesem Restaurant ist lecker und obendrein billig."
      },
      {
        "chinese": "星期六我要去看电影，还要去朋友家。",
        "pinyin": "Xīngqīliù wǒ yào qù kàn diànyǐng, hái yào qù péngyou jiā.",
        "german": "Am Samstag gehe ich ins Kino und außerdem noch zu einem Freund."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "还",
      "distractors": [
        {
          "text": "和",
          "reason": "和 verbindet Nomen („und“), aber keine Teilsätze; vor 会 kann es nicht stehen."
        },
        {
          "text": "都",
          "reason": "都 fasst mehrere Personen oder Dinge zusammen; hier geht es um eine Person und eine weitere Fähigkeit."
        },
        {
          "text": "再",
          "reason": "再 bezeichnet eine Wiederholung oder ein „danach“ in der Zukunft, keine zusätzliche Fähigkeit."
        }
      ],
      "accepted": [
        "也"
      ]
    },
    "related": [
      "g:……，也……",
      "g:还¹",
      "g:不用关联词语的复句",
      "g:除了……（以外），……还/也/都……"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Handlung vollzogen/abgeschlossen (Partikel direkt nach dem Verb)",
    "formation": "Verb + 了 + (Zahl + Zählwort +) Objekt",
    "notes": "了 am Satzende (了²) zeigt eine Veränderung oder neue Situation an; beide können zusammen stehen: 我学了两年汉语了 – „ich lerne jetzt schon seit zwei Jahren Chinesisch“. Die Erfahrung „schon einmal“ drückt 过 aus (HSK 2).",
    "explanation": "了 (le) direkt nach dem Verb zeigt, dass eine Handlung vollzogen bzw. abgeschlossen ist. Es ist keine Vergangenheitsform: Gewohnheiten in der Vergangenheit stehen meist ohne 了, und 了 kann auch Künftiges betreffen – 明天下了课 „morgen nach dem Unterricht“. Nach 了 steht meist ein Objekt mit Mengenangabe oder Attribut: 我买了三本书. Ein nacktes Objekt (我买了书) wirkt unvollständig, als käme noch etwas, außer es folgt ein weiterer Teilsatz. Verneint wird mit 没 oder 没有 (méiyǒu) vor dem Verb – das 了 fällt dann weg: 我没买书, nicht 我没买了书.",
    "examples": [
      {
        "chinese": "我买了三本书。",
        "pinyin": "Wǒ mǎi le sān běn shū.",
        "german": "Ich habe drei Bücher gekauft."
      },
      {
        "chinese": "昨天他喝了两杯咖啡。",
        "pinyin": "Zuótiān tā hē le liǎng bēi kāfēi.",
        "german": "Gestern hat er zwei Tassen Kaffee getrunken."
      },
      {
        "chinese": "她在北京学了两年汉语。",
        "pinyin": "Tā zài Běijīng xué le liǎng nián Hànyǔ.",
        "german": "Sie hat zwei Jahre lang in Peking Chinesisch gelernt."
      },
      {
        "chinese": "明天下了课，我给你打电话。",
        "pinyin": "Míngtiān xià le kè, wǒ gěi nǐ dǎ diànhuà.",
        "german": "Morgen nach dem Unterricht rufe ich dich an."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "了",
      "distractors": [
        {
          "text": "的",
          "reason": "Mit 的 würde 他喝的两杯咖啡 zur Nominalgruppe („die zwei Tassen Kaffee, die er trank“) – dem Satz fehlte das Prädikat."
        },
        {
          "text": "着",
          "reason": "着 beschreibt einen andauernden Zustand und passt nicht zu einer gezählten, abgeschlossenen Handlung von gestern."
        },
        {
          "text": "得",
          "reason": "得 leitet eine Bewertung der Handlung ein (喝得很多), kein Objekt mit Mengenangabe."
        }
      ]
    },
    "related": [
      "g:了¹",
      "g:变化态：用动态助词“了²”表示",
      "g:经历态：用动态助词“过”表示",
      "g:没（有）",
      "g:……了……（就）……"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "neue Situation, Veränderung (Partikel am Satzende)",
    "formation": "Satz + 了 (am Satzende)",
    "notes": "Steht das Verb ohne Objekt am Satzende, fallen beide 了 zusammen: 他来了. Das 了 direkt nach dem Verb ist ein eigener Punkt (完成态). Für „bald“ gibt es 快要 (kuàiyào) bzw. 要……了 (HSK 2).",
    "explanation": "了 (le) am Satzende zeigt, dass eine neue Situation eingetreten ist oder sich etwas verändert hat – im Deutschen oft „jetzt“, „schon“, „geworden“ oder „nicht mehr“. Es steht nach Verben (下雨了 „es regnet jetzt“), Adjektiven (天气冷了 „es ist kalt geworden“) und Zahlen (他二十岁了 „er ist jetzt zwanzig“). Mit 不 bedeutet es „nicht mehr“: 我不喝咖啡了. Auch ein Wechsel, der gleich eintritt, wird so angekündigt: 我走了 „ich gehe jetzt“. Anders als 了 nach dem Verb (Abschluss einer Handlung) betrifft dieses 了 die Aussage als Ganzes: Gegenüber vorher hat sich etwas geändert.",
    "examples": [
      {
        "chinese": "下雨了。",
        "pinyin": "Xià yǔ le.",
        "german": "Es hat angefangen zu regnen."
      },
      {
        "chinese": "我妹妹今年八岁了。",
        "pinyin": "Wǒ mèimei jīnnián bā suì le.",
        "german": "Meine kleine Schwester ist dieses Jahr acht geworden."
      },
      {
        "chinese": "我现在不喝咖啡了。",
        "pinyin": "Wǒ xiànzài bù hē kāfēi le.",
        "german": "Ich trinke jetzt keinen Kaffee mehr."
      },
      {
        "chinese": "天气冷了。",
        "pinyin": "Tiānqì lěng le.",
        "german": "Es ist kalt geworden."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "了",
      "distractors": [
        {
          "text": "的",
          "reason": "八岁的 bräuchte ein Nomen danach (八岁的孩子); eine Veränderung drückt 的 nicht aus."
        },
        {
          "text": "过",
          "reason": "过 steht direkt nach einem Verb und bezeichnet eine Erfahrung; nach einer Altersangabe ist es nicht möglich."
        },
        {
          "text": "着",
          "reason": "着 steht nach einem Verb und beschreibt einen andauernden Zustand; nach 八岁 ist es nicht möglich."
        }
      ]
    },
    "related": [
      "g:了²",
      "g:完成态：用动态助词“了¹”表示",
      "g:要/快要/就要……了",
      "g:都……了"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "gerade dabei sein, etwas zu tun (Adverb vor dem Verb)",
    "formation": "Subjekt + 在/正在 + Verb (+ Objekt)",
    "notes": "Am Satzende kann zusätzlich 呢 stehen (他在看书呢); im Gespräch reicht auch 呢 allein (他看书呢). Beides sind eigene Punkte.",
    "explanation": "在 (zài) oder 正在 (zhèngzài) vor dem Verb drücken aus, dass eine Handlung gerade abläuft – „gerade“, „dabei sein, etwas zu tun“. 正在 betont stärker den Zeitpunkt („genau jetzt“). Der Bezugspunkt kann auch in der Vergangenheit liegen: 昨天晚上八点我在看电视 „gestern um acht habe ich gerade ferngesehen“. Die Form passt zu Handlungen, die eine Weile andauern, nicht zu Verben wie 是, 有, 知道 (zhīdao) oder 喜欢 (xǐhuan). Verneint wird meist mit 没 (oder 没在): 我没在看电视. Nicht verwechseln mit 在 als Verb oder Präposition des Ortes (他在家, 在家看书).",
    "examples": [
      {
        "chinese": "妈妈在做饭。",
        "pinyin": "Māma zài zuò fàn.",
        "german": "Mama kocht gerade."
      },
      {
        "chinese": "他们正在上课。",
        "pinyin": "Tāmen zhèngzài shàngkè.",
        "german": "Sie haben gerade Unterricht."
      },
      {
        "chinese": "你在看什么？",
        "pinyin": "Nǐ zài kàn shénme?",
        "german": "Was schaust du dir gerade an?"
      },
      {
        "chinese": "我给他打电话的时候，他在睡觉。",
        "pinyin": "Wǒ gěi tā dǎ diànhuà de shíhou, tā zài shuìjiào.",
        "german": "Als ich ihn anrief, schlief er gerade."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "在",
      "distractors": [
        {
          "text": "是",
          "reason": "是 verbindet Nomen (妈妈是老师); es macht aus 做饭 keine laufende Handlung."
        },
        {
          "text": "有",
          "reason": "有 heißt „haben/es gibt“; vor einem Verb ist es im Hochchinesischen nicht üblich."
        },
        {
          "text": "着",
          "reason": "着 steht nach dem Verb, nicht davor, und beschreibt eher einen andauernden Zustand."
        }
      ],
      "accepted": [
        "正在"
      ]
    },
    "related": [
      "g:……在/正在+动词……+呢",
      "g:……呢",
      "g:在",
      "g:正在",
      "g:在（引出时间、处所）"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "gerade dabei sein (Adverb vor dem Verb plus Partikel am Satzende, betont mündlich)",
    "formation": "Subjekt + 在/正在 + Verb (+ Objekt) + 呢",
    "notes": "Ohne 呢 (他在看书) klingt der Satz neutraler; 呢 allein ohne 在 (他看书呢) drückt im Gespräch ebenfalls die Verlaufsform aus. 呢 hat außerdem andere Gebrauchsweisen, z. B. die Rückfrage 你呢？ – „und du?“.",
    "explanation": "Die Verlaufsform mit 在 oder 正在 (zhèngzài) wird im Gespräch oft durch 呢 (ne) am Satzende verstärkt: 他在看书呢 „er liest gerade“. 呢 macht den Satz lebendiger und klingt oft wie eine Erklärung an den Gesprächspartner („er ist doch gerade …“) – etwa wenn man begründet, warum jemand nicht stören, nicht ans Telefon kommen oder nicht mitkommen kann. An der Bedeutung „gerade“ ändert 呢 nichts; der Satz klingt nur deutlich mündlicher. Wie bei 在 allein passt die Form zu Handlungen, die gerade andauern. Auch in Fragen nach der laufenden Tätigkeit ist 呢 häufig: 你在做什么呢？",
    "examples": [
      {
        "chinese": "别说话，孩子在睡觉呢。",
        "pinyin": "Bié shuōhuà, háizi zài shuìjiào ne.",
        "german": "Sei leise, das Kind schläft gerade."
      },
      {
        "chinese": "他们正在上课呢。",
        "pinyin": "Tāmen zhèngzài shàngkè ne.",
        "german": "Sie sind gerade im Unterricht."
      },
      {
        "chinese": "我在吃饭呢，一会儿给你打电话。",
        "pinyin": "Wǒ zài chī fàn ne, yíhuìr gěi nǐ dǎ diànhuà.",
        "german": "Ich esse gerade, ich rufe dich gleich an."
      },
      {
        "chinese": "你在做什么呢？",
        "pinyin": "Nǐ zài zuò shénme ne?",
        "german": "Was machst du gerade?"
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "呢",
      "distractors": [
        {
          "text": "吗",
          "reason": "吗 macht eine Ja-Nein-Frage daraus; zu 别说话 passt aber eine Feststellung."
        },
        {
          "text": "的",
          "reason": "的 am Satzende bezeichnet keine laufende Handlung; nach 在睡觉 klingt es unvollständig."
        },
        {
          "text": "过",
          "reason": "过 steht direkt nach dem Verb und bezeichnet eine Erfahrung; mit 在 („gerade“) ist es nicht vereinbar."
        }
      ]
    },
    "related": [
      "g:……在/正在+动词",
      "g:……呢",
      "g:正在",
      "g:呢²"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "gerade (Verlaufsform nur durch Partikel am Satzende)",
    "formation": "Subjekt + Verb (+ Objekt) + 呢",
    "notes": "Mit 在 oder 正在 (zhèngzài) davor – 他在睡觉呢 – ist die Verlaufsform eindeutiger. 呢 hat weitere Gebrauchsweisen, etwa in Rückfragen (你呢？ – „und du?“) oder in Fragen mit Fragewort (你去哪儿呢？); sie werden bei der Partikel 呢 behandelt.",
    "explanation": "Im gesprochenen Chinesisch kann 呢 (ne) am Satzende allein ausdrücken, dass eine Handlung gerade abläuft – ohne 在 oder 正在 (zhèngzài): 他睡觉呢 „er schläft gerade“. Die Form ist typisch für kurze Antworten und Erklärungen im Alltag, etwa am Telefon oder an der Tür: Man sagt, womit jemand gerade beschäftigt ist, und deutet oft an, dass er deshalb jetzt keine Zeit hat. In geschriebenen Texten und neutralen Beschreibungen nimmt man eher 在 oder 正在. Das Verb steht dabei ohne 了 oder 过. Häufig kommt 呢 auch zusammen mit 着 vor (门开着呢 „die Tür steht offen“, HSK 2).",
    "examples": [
      {
        "chinese": "他睡觉呢，你明天再来吧。",
        "pinyin": "Tā shuìjiào ne, nǐ míngtiān zài lái ba.",
        "german": "Er schläft gerade, komm doch morgen wieder."
      },
      {
        "chinese": "妈妈打电话呢。",
        "pinyin": "Māma dǎ diànhuà ne.",
        "german": "Mama telefoniert gerade."
      },
      {
        "chinese": "外边下雨呢，别出去了。",
        "pinyin": "Wàibian xià yǔ ne, bié chūqu le.",
        "german": "Draußen regnet es gerade, geh lieber nicht raus."
      },
      {
        "chinese": "我吃饭呢，等一下。",
        "pinyin": "Wǒ chī fàn ne, děng yíxià.",
        "german": "Ich esse gerade, warte kurz."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "呢",
      "distractors": [
        {
          "text": "吗",
          "reason": "吗 macht daraus eine Ja-Nein-Frage („Telefoniert Mama?“); der Satz ist aber eine Feststellung."
        },
        {
          "text": "着",
          "reason": "着 stünde direkt nach dem Verb (打着电话呢), nicht am Satzende."
        },
        {
          "text": "过",
          "reason": "过 steht direkt nach dem Verb (打过电话) und bezeichnet eine Erfahrung, keine laufende Handlung."
        }
      ]
    },
    "related": [
      "g:……在/正在+动词……+呢",
      "g:……在/正在+动词",
      "g:呢²"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Geldbeträge angeben (Yuan und Zehntel)",
    "pinyin": "kuài/yuán",
    "examples": [
      {
        "chinese": "这本书十五块钱。",
        "pinyin": "Zhè běn shū shíwǔ kuài qián.",
        "german": "Dieses Buch kostet 15 Yuan."
      },
      {
        "chinese": "一杯咖啡二十八块。",
        "pinyin": "Yì bēi kāfēi èrshíbā kuài.",
        "german": "Eine Tasse Kaffee kostet 28 Yuan."
      },
      {
        "chinese": "这个苹果两块五。",
        "pinyin": "Zhège píngguǒ liǎng kuài wǔ.",
        "german": "Dieser Apfel kostet 2,50 Yuan."
      },
      {
        "chinese": "这件衣服三百元。",
        "pinyin": "Zhè jiàn yīfu sānbǎi yuán.",
        "german": "Dieses Kleidungsstück kostet 300 Yuan."
      }
    ],
    "legacyIds": [
      "g:块/元",
      "块/元"
    ],
    "formation": "Zahl + 块/元 (+ Zahl + 毛/角) (+ 钱)",
    "explanation": "Die chinesische Währung ist der 人民币 (Rénmínbì). Ein Yuan heißt im Gespräch 块 (kuài), geschrieben und auf Preisschildern 元 (yuán); ein Zehntel heißt 毛 (máo), geschrieben 角 (jiǎo), ein Hundertstel 分 (fēn). Der Betrag wird von groß nach klein gelesen: 三块五毛 = 3,50 Yuan. Die letzte Einheit fällt im Gespräch meist weg (三块五), und am Ende kann 钱 (qián) stehen: 十五块钱. Vor 块 heißt „zwei“ 两 (两块), in zusammengesetzten Zahlen aber 二 (十二块). Nach dem Preis fragt man mit 多少钱 (duōshao qián). Ein Verb für „kosten“ braucht man nicht: Der Preis folgt direkt auf die Sache.",
    "quiz": {
      "example": 0,
      "answer": "块",
      "distractors": [
        {
          "text": "个",
          "reason": "个 zählt Dinge und Personen, keine Geldbeträge."
        },
        {
          "text": "张",
          "reason": "张 zählt flache Dinge wie Papier oder Geldscheine, gibt aber keinen Betrag an."
        },
        {
          "text": "点",
          "reason": "点 nennt die Uhrzeit (十五点 = 15 Uhr), keinen Preis."
        }
      ],
      "accepted": [
        "元"
      ]
    },
    "related": [
      "g:名量词@HSK1",
      "g:数词@HSK1",
      "g:主谓句3：名词谓语句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Ordnungszahlen: erster, zweiter, dritter …",
    "formation": "第 + Zahl (+ Zählwort + Nomen)",
    "notes": "Ab HSK 2 kann die Reihenfolge auch ohne 第 mit Zahl + Zählwort ausgedrückt werden (eigener Punkt). 第一 (dìyī) allein heißt auch „erstens“ oder „am wichtigsten“.",
    "explanation": "第 (dì) vor einer Zahl bildet die Ordnungszahl: 第一 (dìyī) „erster“, 第二 (dì'èr) „zweiter“, 第十 „zehnter“. Vor einem Nomen steht wie bei gewöhnlichen Zahlen ein Zählwort: 第一个学生, 第三天, 第二次 (dì'èr cì) – „das zweite Mal“. Nach 第 heißt „zwei“ immer 二, nie 两: 第二个, nicht 第两个. 第二天 (dì'èr tiān) bedeutet oft „am nächsten Tag“. Bei Datum, Uhrzeit, Stockwerken und Klassenstufen fällt 第 meist weg: 三月 (sānyuè) „März“, 三点, 三楼; dort zeigt schon die Zahl vor dem Nomen die Reihenfolge an.",
    "examples": [
      {
        "chinese": "这是我第一次来北京。",
        "pinyin": "Zhè shì wǒ dìyī cì lái Běijīng.",
        "german": "Ich bin zum ersten Mal in Peking."
      },
      {
        "chinese": "他今天第一个到学校。",
        "pinyin": "Tā jīntiān dìyī ge dào xuéxiào.",
        "german": "Er war heute als Erster in der Schule."
      },
      {
        "chinese": "第二天早上，我们去了医院。",
        "pinyin": "Dì'èr tiān zǎoshang, wǒmen qù le yīyuàn.",
        "german": "Am nächsten Morgen gingen wir ins Krankenhaus."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "第",
      "distractors": [
        {
          "text": "每",
          "reason": "每一次 heißt „jedes Mal“; „das ist mein jedes Mal in Peking“ ergibt keinen Sinn."
        },
        {
          "text": "号",
          "reason": "号 steht hinter der Zahl und nennt Datum oder Nummer (五号), es bildet keine Ordnungszahl davor."
        },
        {
          "text": "前",
          "reason": "前一次 heißt „das vorige Mal“; für „das erste Mal“ braucht man 第."
        }
      ]
    },
    "related": [
      "g:第—",
      "g:序数表示法2：数词+量词",
      "g:数词@HSK1"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Datum und Wochentag angeben (Jahr, Monat, Tag, Wochentag)",
    "formation": "Zahl + 年 + Zahl + 月 + Zahl + 号/日，星期 + Zahl",
    "explanation": "Ein Datum wird vom Großen zum Kleinen genannt: Jahr – Monat – Tag – Wochentag, also 二〇二六年十月十号，星期六 (xīngqīliù). Jahreszahlen liest man Ziffer für Ziffer: 二〇二六年 (èr líng èr liù nián). Die Monate werden durchgezählt: 一月 (yīyuè) für Januar bis 十二月 (shí'èryuè) für Dezember. Den Tag nennt man im Gespräch mit 号 (hào), geschrieben mit 日 (rì). Die Wochentage heißen 星期一 (xīngqīyī) für Montag bis 星期六 für Samstag; Sonntag ist 星期天 (xīngqītiān) oder, eher geschrieben, 星期日 (xīngqīrì). Gefragt wird mit 几 (jǐ): 几月几号 (jǐ yuè jǐ hào), 星期几 (xīngqījǐ). Ein Datum kann ohne 是 direkt das Prädikat bilden (今天十月十号) oder als Zeitangabe vor dem Verb stehen.",
    "examples": [
      {
        "chinese": "今天是十月十号，星期六。",
        "pinyin": "Jīntiān shì shíyuè shí hào, xīngqīliù.",
        "german": "Heute ist der 10. Oktober, ein Samstag."
      },
      {
        "chinese": "我的生日是五月二十一号。",
        "pinyin": "Wǒ de shēngrì shì wǔyuè èrshíyī hào.",
        "german": "Mein Geburtstag ist am 21. Mai."
      },
      {
        "chinese": "二〇二〇年我在北京工作。",
        "pinyin": "Èr líng èr líng nián wǒ zài Běijīng gōngzuò.",
        "german": "2020 habe ich in Peking gearbeitet."
      },
      {
        "chinese": "明天星期几？",
        "pinyin": "Míngtiān xīngqījǐ?",
        "german": "Welcher Wochentag ist morgen?"
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "号",
      "distractors": [
        {
          "text": "天",
          "reason": "天 zählt eine Dauer (二十一天 = 21 Tage), es nennt kein Datum."
        },
        {
          "text": "点",
          "reason": "点 nennt die Uhrzeit, nicht den Tag im Monat."
        },
        {
          "text": "岁",
          "reason": "岁 gibt das Alter an, nicht das Datum."
        }
      ],
      "accepted": [
        "日"
      ]
    },
    "related": [
      "g:钟点表示法",
      "g:时量词@HSK1",
      "g:主谓句3：名词谓语句"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
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
    "meaning": "Uhrzeit angeben (Stunde, Minute, halb)",
    "formation": "Zahl + 点 (+ Zahl + 分 / 半)",
    "notes": "Uhrzeit (wann?) nicht mit Dauer (wie lange?) verwechseln: 三点 = „um drei Uhr“, 三个小时 = „drei Stunden lang“. Auf Fahrplänen und in Durchsagen ist auch die 24-Stunden-Zählung üblich: 十五点 = 15 Uhr.",
    "explanation": "Die volle Stunde heißt Zahl + 点 (diǎn), oft mit 钟 (zhōng): 三点 oder 三点钟 = „drei Uhr“. Minuten folgen mit 分 (fēn): 八点十分 = 8:10; unter zehn Minuten steht meist 零 (líng) davor: 八点零五分 = 8:05 (auch 八点五分 ist möglich). 半 (bàn) heißt „halb“ und steht hinter der Stunde: 两点半 ist 2:30 – Vorsicht, im Deutschen „halb drei“! Viertelstunden können mit 刻 (kè) angegeben werden: 八点一刻 = 8:15. Für 2 Uhr sagt man 两点, nicht 二点, aber 十二点. Tageszeiten stehen davor: 早上七点, 下午三点, 晚上八点. Gefragt wird mit 几点 (jǐ diǎn): 现在几点？ Die Uhrzeit steht als Zeitangabe vor dem Verb: 我七点起床.",
    "examples": [
      {
        "chinese": "现在两点半。",
        "pinyin": "Xiànzài liǎng diǎn bàn.",
        "german": "Es ist jetzt halb drei."
      },
      {
        "chinese": "我每天早上七点起床。",
        "pinyin": "Wǒ měi tiān zǎoshang qī diǎn qǐchuáng.",
        "german": "Ich stehe jeden Morgen um sieben Uhr auf."
      },
      {
        "chinese": "电影晚上八点十五分开始。",
        "pinyin": "Diànyǐng wǎnshang bā diǎn shíwǔ fēn kāishǐ.",
        "german": "Der Film beginnt um 20:15 Uhr."
      },
      {
        "chinese": "我们下午三点见吧。",
        "pinyin": "Wǒmen xiàwǔ sān diǎn jiàn ba.",
        "german": "Treffen wir uns um drei Uhr nachmittags."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "点",
      "distractors": [
        {
          "text": "个",
          "reason": "两个半 hieße „zweieinhalb (Stück)“ – für die Uhrzeit braucht man 点."
        },
        {
          "text": "小时",
          "reason": "小时 misst eine Dauer (两个小时 = zwei Stunden), keine Uhrzeit."
        },
        {
          "text": "号",
          "reason": "号 nennt den Tag im Monat, nicht die Stunde."
        }
      ]
    },
    "related": [
      "g:时间表示法：年、月、日、星期表示法",
      "g:时量词@HSK1",
      "g:数量补语2：表示动作持续的时间"
    ],
    "review": {
      "batch": "g001",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  }
]);
