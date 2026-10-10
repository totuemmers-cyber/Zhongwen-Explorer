// Zhongwen Explorer grammar, HSK2: points of the HSK 2025 grammar syllabus (语法大纲, scripts/hsk2025/grammar.json).
// Built by scripts/grammar/build-grammar.cjs; content by the enrichment campaign.
window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat([
  {
    "id": "g:面",
    "pattern": "面",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortbildung",
    "syllabus": {
      "no": 71,
      "category": "语素",
      "categoryName": "后缀",
      "item": "",
      "content": "面"
    },
    "meaning": "Nachsilbe -mian für Ortswörter: oben, drinnen, draußen, hinten …",
    "formation": "Richtungswort (上/下/里/外/前/后/左/右) + 面",
    "notes": "面 ist auch ein eigenes Wort: 面 „Nudeln“ (吃面 (chī miàn) „Nudeln essen“) und in 见面 (jiànmiàn) „sich treffen“ – das hat mit der Nachsilbe nichts zu tun. In 方面 (fāngmiàn) „Hinsicht, Aspekt“ steckt dieselbe Grundbedeutung „Seite“ (在……方面, HSK 4).",
    "explanation": "Die Nachsilbe 面 (miàn, wörtlich „Seite, Fläche“; in diesen Wörtern meist neutraler Ton) macht aus einem Richtungswort ein selbstständiges Ortswort: 上面 (shàngmian) „oben“, 下面 (xiàmian) „unten“, 里面 (lǐmian) „drinnen“, 外面 (wàimian) „draußen“, 前面 (qiánmian) „vorne“, 后面 (hòumian) „hinten“, 左面 (zuǒmiàn) „links“, 右面 (yòumiàn) „rechts“. Diese Ortswörter stehen allein als Subjekt oder Objekt (外面很冷 „draußen ist es kalt“) oder nach einem Nomen, mit oder ohne 的: 学校(的)后面 „hinter der Schule“. Sie bedeuten dasselbe wie die Formen mit 边 (biān): 前面 = 前边 (qiánbian); 边 klingt etwas umgangssprachlicher. Nicht jedes Richtungswort bildet beide Formen: Man sagt 旁边 (pángbiān) „daneben“, aber nicht 旁面; 对面 (duìmiàn) „gegenüber“ wird dagegen mit 面 gebildet.",
    "examples": [
      {
        "chinese": "外面下雨了，我们别出去了。",
        "pinyin": "Wàimian xià yǔ le, wǒmen bié chūqu le.",
        "german": "Draußen regnet es, lass uns lieber nicht rausgehen."
      },
      {
        "chinese": "你的书包里面有什么？",
        "pinyin": "Nǐ de shūbāo lǐmian yǒu shénme?",
        "german": "Was ist in deiner Schultasche?"
      },
      {
        "chinese": "我家后面有一个小公园。",
        "pinyin": "Wǒ jiā hòumian yǒu yí ge xiǎo gōngyuán.",
        "german": "Hinter unserem Haus gibt es einen kleinen Park."
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "面",
      "distractors": [
        {
          "text": "来",
          "reason": "后来 bedeutet „später“ (Zeit), nicht „hinten“; gemeint ist ein Ort hinter dem Haus."
        },
        {
          "text": "们",
          "reason": "们 bildet den Plural von Personen und macht aus 后 kein Ortswort."
        },
        {
          "text": "子",
          "reason": "子 ist eine Nachsilbe für Nomen wie 桌子; 后子 gibt es nicht."
        }
      ],
      "accepted": [
        "边",
        "头"
      ]
    },
    "related": [
      "g:—边",
      "g:方位名词@HSK1",
      "g:左",
      "g:右",
      "g:在……方面"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:左",
    "pattern": "左",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 72,
      "category": "词类",
      "categoryName": "名词",
      "item": "方位名词",
      "content": "左、右"
    },
    "meaning": "links (Richtungswort)",
    "formation": "左 + 边/面 (Ortswort) · 往/向 + 左 + Verb · 左 + Nomen (左手)",
    "notes": "左右 (zuǒyòu) nach einer Zahl bedeutet „ungefähr, etwa“: 三点左右 „gegen drei Uhr“ (eigener Punkt, HSK 4). Feste Muster wie 左A右B („immer wieder, hin und her“) folgen ab HSK 6.",
    "explanation": "左 (zuǒ) „links“ ist ein Richtungswort. Als Ort im Satz steht es meist nicht allein, sondern mit einer Nachsilbe: 左边 (zuǒbian) oder 左面 (zuǒmiàn) „links, die linke Seite“: 书店在银行左边 „der Buchladen ist links von der Bank“. Allein steht 左 vor allem nach 往 (wǎng) oder 向 (xiàng) bei Richtungsangaben – 往左走 „nach links gehen“, 往左拐 „links abbiegen“ – und direkt vor einigen Nomen: 左手 (zuǒshǒu) „linke Hand“, 左脚 (zuǒjiǎo) „linker Fuß“. Ein typischer Fehler ist 在左 statt 在左边 für „links (von etwas)“. Das Gegenstück ist 右 (yòu) „rechts“.",
    "examples": [
      {
        "chinese": "你往左走，就能看到银行。",
        "pinyin": "Nǐ wǎng zuǒ zǒu, jiù néng kàndào yínháng.",
        "german": "Wenn du nach links gehst, siehst du die Bank."
      },
      {
        "chinese": "他用左手写字。",
        "pinyin": "Tā yòng zuǒshǒu xiě zì.",
        "german": "Er schreibt mit der linken Hand."
      },
      {
        "chinese": "书店在银行左边。",
        "pinyin": "Shūdiàn zài yínháng zuǒbian.",
        "german": "Der Buchladen ist links von der Bank."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "左",
      "distractors": [
        {
          "text": "右",
          "reason": "右 bedeutet „rechts“; der Satz spricht von der linken Hand."
        },
        {
          "text": "前",
          "reason": "前 bedeutet „vorne“; 前手 ist keine Bezeichnung für eine Hand."
        },
        {
          "text": "外",
          "reason": "外 bedeutet „außen“; 外手 ist keine Bezeichnung für eine Hand."
        }
      ]
    },
    "related": [
      "g:右",
      "g:—边",
      "g:面",
      "g:方位名词@HSK1",
      "g:数的表示法：用“大约、左右、前后”表示概数",
      "g:左A右B"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:右",
    "pattern": "右",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 72,
      "category": "词类",
      "categoryName": "名词",
      "item": "方位名词",
      "content": "左、右"
    },
    "meaning": "rechts (Richtungswort)",
    "formation": "右 + 边/面 (Ortswort) · 往/向 + 右 + Verb · 右 + Nomen (右手)",
    "notes": "In der Reihenfolge nennt man im Chinesischen meist zuerst links: 左右 (zuǒyòu), 左边和右边. 左右 nach einer Zahl bedeutet „ungefähr“ (HSK 4).",
    "explanation": "右 (yòu) „rechts“ ist das Gegenstück zu 左 (zuǒ) „links“ und verhält sich genauso. Als Ortsangabe braucht es meist eine Nachsilbe: 右边 (yòubian) oder 右面 (yòumiàn) „rechts, die rechte Seite“; mit 的 wird es zum Attribut: 我右边的同学 „mein Mitschüler rechts neben mir“. Allein steht 右 bei Richtungsangaben nach 往 (wǎng) oder 向 (xiàng) – 往右看 „nach rechts schauen“, 向右转 „nach rechts drehen“ – und vor einigen Nomen: 右手 (yòushǒu) „rechte Hand“. Für „rechts von etwas“ sagt man 在……右边, nicht 在右.",
    "examples": [
      {
        "chinese": "请往右看。",
        "pinyin": "Qǐng wǎng yòu kàn.",
        "german": "Bitte schauen Sie nach rechts."
      },
      {
        "chinese": "我右边的同学叫小明。",
        "pinyin": "Wǒ yòubian de tóngxué jiào Xiǎo Míng.",
        "german": "Mein Mitschüler rechts neben mir heißt Xiao Ming."
      },
      {
        "chinese": "他右手拿着一杯咖啡。",
        "pinyin": "Tā yòushǒu názhe yì bēi kāfēi.",
        "german": "Er hält in der rechten Hand eine Tasse Kaffee."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "右",
      "distractors": [
        {
          "text": "左",
          "reason": "左 bedeutet „links“; verlangt ist der Blick nach rechts."
        },
        {
          "text": "上",
          "reason": "往上看 heißt „nach oben schauen“, nicht nach rechts."
        },
        {
          "text": "边",
          "reason": "边 ist eine Nachsilbe und braucht ein Richtungswort davor; 往边看 ergibt keine Richtung."
        }
      ]
    },
    "related": [
      "g:左",
      "g:—边",
      "g:面",
      "g:方位名词@HSK1",
      "g:数的表示法：用“大约、左右、前后”表示概数",
      "g:左A右B"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:AA、A一A、A了A、ABAB",
    "pattern": "AA、A一A、A了A、ABAB",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortarten",
    "syllabus": {
      "no": 73,
      "category": "词类",
      "categoryName": "动词",
      "item": "动词重叠",
      "content": "AA、A一A、A了A、ABAB"
    },
    "meaning": "Verb-Verdopplung: „mal kurz, ein bisschen“ (lockerer Ton)",
    "pinyin": "dòngcí chóngdié",
    "examples": [
      {
        "chinese": "这个问题你再想一想，想好了再告诉我。",
        "pinyin": "Zhège wèntí nǐ zài xiǎng yi xiǎng, xiǎnghǎo le zài gàosu wǒ.",
        "german": "Denk über die Frage noch mal nach und sag mir Bescheid, wenn du dich entschieden hast."
      },
      {
        "chinese": "第一天上课的时候，老师笑着看了看我们。",
        "pinyin": "Dìyī tiān shàngkè de shíhou, lǎoshī xiàozhe kàn le kàn wǒmen.",
        "german": "Am ersten Unterrichtstag warf uns der Lehrer einen kurzen, lächelnden Blick zu."
      },
      {
        "chinese": "我们休息休息吧，已经走了一个小时了。",
        "pinyin": "Wǒmen xiūxi xiūxi ba, yǐjīng zǒule yí ge xiǎoshí le.",
        "german": "Lass uns ein bisschen ausruhen, wir laufen schon eine Stunde."
      },
      {
        "chinese": "周末我一般在家看看书、听听音乐，累了就去睡觉。",
        "pinyin": "Zhōumò wǒ yìbān zài jiā kànkan shū, tīngting yīnyuè, lèi le jiù qù shuìjiào.",
        "german": "Am Wochenende lese ich meist ein bisschen zu Hause und höre Musik; wenn ich müde bin, gehe ich schlafen."
      }
    ],
    "legacyIds": [
      "g:动词重叠 (Verb-Verdopplung)",
      "动词重叠 (Verb-Verdopplung)"
    ],
    "formation": "einsilbig: Verb + Verb (看看) · Verb + 一 + Verb (看一看) · Verb + 了 + Verb (看了看) · zweisilbig: AB + AB (休息休息)",
    "notes": "Bei trennbaren Verben wird nur der Verbteil verdoppelt: 散散步 (sànsan bù), 帮帮忙 (bāngbang máng), 跳跳舞 (tiàotiao wǔ). Ähnlich weich wirkt 一下 (yíxià) nach dem Verb: 看一下 „mal kurz anschauen“.",
    "explanation": "Ein verdoppeltes Verb drückt aus, dass man etwas kurz, ein bisschen oder versuchsweise tut; es macht Bitten und Vorschläge weicher und klingt locker: 你看看 „schau mal“. Einsilbige Verben bilden AA (看看 (kànkan), zweite Silbe neutral) oder A一A (看一看 (kàn yi kàn), 一 neutral), beides mit gleicher Bedeutung. Für eine schon geschehene kurze Handlung steht A了A: 他想了想 „er überlegte kurz“. Zweisilbige Verben werden als Ganzes verdoppelt (ABAB): 休息休息 (xiūxi xiūxi), 介绍介绍 (jièshào jièshào) – nicht nach dem Muster AABB, das gehört zu Adjektiven. Verdoppelt werden nur Handlungsverben, die man bewusst tut; 是, 有, 在, 喜欢 (xǐhuan) oder 知道 (zhīdào) verdoppelt man nicht. Ein verdoppeltes Verb nimmt kein Zählwort- oder Ergebniskomplement mehr zu sich.",
    "quiz": {
      "example": 0,
      "answer": "一",
      "distractors": [
        {
          "text": "了",
          "reason": "想了想 beschreibt ein schon geschehenes kurzes Nachdenken; hier ist es eine Bitte für jetzt."
        },
        {
          "text": "不",
          "reason": "想不想 ist eine Frage („willst du oder nicht?“), keine Bitte, kurz nachzudenken."
        },
        {
          "text": "过",
          "reason": "过 zeigt eine Erfahrung an und steht nicht zwischen zwei gleichen Verben."
        }
      ]
    },
    "related": [
      "g:AA、AABB",
      "g:离合词@HSK2",
      "g:动词+动量补语",
      "g:了¹"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:可能",
    "pattern": "可能",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 74,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "可能"
    },
    "meaning": "vielleicht, möglicherweise (Vermutung)",
    "pinyin": "kěnéng",
    "examples": [
      {
        "chinese": "他今天很忙，可能不来了。",
        "pinyin": "Tā jīntiān hěn máng, kěnéng bù lái le.",
        "german": "Er hat heute viel zu tun und kommt wohl nicht mehr."
      },
      {
        "chinese": "听说明天可能会下雨。",
        "pinyin": "Tīngshuō míngtiān kěnéng huì xià yǔ.",
        "german": "Ich habe gehört, dass es morgen regnen könnte."
      },
      {
        "chinese": "可能他已经回家了，你给他打个电话吧。",
        "pinyin": "Kěnéng tā yǐjīng huí jiā le, nǐ gěi tā dǎ ge diànhuà ba.",
        "german": "Vielleicht ist er schon nach Hause gegangen – ruf ihn doch an."
      }
    ],
    "legacyIds": [
      "可能"
    ],
    "formation": "Subjekt + 可能 (+ 会/不) + Verb · 可能 + Subjekt + Verb",
    "notes": "可能 (kěnéng) ist auch Adjektiv und Nomen: 这是可能的 „das ist möglich“, 有可能 (yǒu kěnéng) „es besteht die Möglichkeit“. 会 allein klingt bei Vermutungen sicherer als 可能; 也许 (yěxǔ) „vielleicht“ (HSK 4) ist etwas vorsichtiger.",
    "explanation": "可能 (kěnéng) drückt eine Vermutung des Sprechers aus: „vielleicht, wahrscheinlich, es kann sein, dass …“. Es steht vor dem Verb, oft zusammen mit 会 (huì): 明天可能会下雨 „morgen regnet es vielleicht“. Anders als die meisten Modalverben kann 可能 auch am Satzanfang vor dem Subjekt stehen: 可能他已经走了. Die Stellung der Verneinung ändert den Sinn: 可能不来 „kommt vielleicht nicht“, aber 不可能 (bù kěnéng) „unmöglich, kann nicht sein“. Ein häufiger Fehler deutschsprachiger Lerner: 可能 heißt nicht „können“ im Sinn einer Fähigkeit oder Erlaubnis – dafür stehen 会, 能 und 可以 (kěyǐ).",
    "quiz": {
      "example": 2,
      "answer": "可能",
      "distractors": [
        {
          "text": "能",
          "reason": "能 bedeutet „können“ (Fähigkeit, Umstände) und steht nicht vor dem Subjekt am Satzanfang."
        },
        {
          "text": "可以",
          "reason": "可以 drückt Erlaubnis aus („dürfen“), keine Vermutung, und steht nicht vor dem Subjekt."
        },
        {
          "text": "会",
          "reason": "会 kann zwar eine Vermutung ausdrücken, steht aber vor dem Verb, nicht am Satzanfang vor dem Subjekt."
        }
      ],
      "accepted": [
        "也许",
        "大概"
      ]
    },
    "related": [
      "g:会",
      "g:能",
      "g:可以",
      "g:能愿动词@HSK3",
      "g:也许"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:离合词@HSK2",
    "pattern": "离合词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 75,
      "category": "词类",
      "categoryName": "动词",
      "item": "离合词",
      "content": "帮忙、游泳、跳舞、跑步"
    },
    "words": [
      "帮忙",
      "游泳",
      "跳舞",
      "跑步"
    ],
    "meaning": "Trennbare Verben (Verb + Objekt): helfen, schwimmen, tanzen, laufen",
    "explanation": "Trennbare Verben (离合词 (líhécí)) bestehen aus Verb + Objekt. Sie wirken wie ein Wort, lassen sich aber auseinandernehmen: 了, 过, eine Dauer, ein Zählwort oder ein Besitzer treten zwischen die beiden Teile, und ein weiteres Objekt kann man nicht einfach hinten anhängen.\n帮忙 (bāngmáng) – „helfen“: 帮个忙, 帮了我一个大忙; nicht 帮忙你, sondern 帮你 oder 给你帮忙.\n游泳 (yóuyǒng) – „schwimmen“: 去游泳; 游了一个小时泳 ist möglich, häufiger wiederholt man das Verb: 游泳游了一个小时.\n跳舞 (tiàowǔ) – „tanzen“: 跳个舞, 跳了两个小时的舞.\n跑步 (pǎobù) – „laufen, joggen“: 去跑步, 跑了一会儿步.\nBei einem Komplement mit 得 wird das Verb wiederholt: 他游泳游得很快. Verdoppelt wird nur der Verbteil: 帮帮忙 (bāngbang máng), 跑跑步, 跳跳舞.",
    "examples": [
      {
        "chinese": "我每天早上去公园跑步。",
        "pinyin": "Wǒ měi tiān zǎoshang qù gōngyuán pǎobù.",
        "german": "Ich gehe jeden Morgen im Park joggen."
      },
      {
        "chinese": "我们晚上一起去跳舞吧！",
        "pinyin": "Wǒmen wǎnshang yìqǐ qù tiàowǔ ba!",
        "german": "Lass uns heute Abend zusammen tanzen gehen!"
      },
      {
        "chinese": "他游泳游得很快。",
        "pinyin": "Tā yóuyǒng yóu de hěn kuài.",
        "german": "Er schwimmt sehr schnell."
      },
      {
        "chinese": "他很喜欢帮忙，昨天又帮了我一个大忙。",
        "pinyin": "Tā hěn xǐhuan bāngmáng, zuótiān yòu bāngle wǒ yí ge dà máng.",
        "german": "Er hilft gern – gestern hat er mir wieder einen großen Gefallen getan."
      },
      {
        "chinese": "这些东西太多了，快来帮帮忙！",
        "pinyin": "Zhèxiē dōngxi tài duō le, kuài lái bāngbang máng!",
        "german": "Das sind zu viele Sachen – komm schnell und hilf mit!"
      }
    ],
    "related": [
      "g:离合词@HSK1",
      "g:离合词@HSK3",
      "g:AA、A一A、A了A、ABAB",
      "g:动词+得+形容词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:为什么",
    "pattern": "为什么",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 76,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "为什么"
    },
    "meaning": "warum (Frage nach dem Grund)",
    "formation": "Subjekt + 为什么 + Prädikat？ · 为什么 + Satz？",
    "explanation": "为什么 (wèishénme) fragt nach dem Grund oder Zweck: „warum, weshalb“. Es steht meist nach dem Subjekt direkt vor dem Prädikat (你为什么不去？), kann aber auch den Satz einleiten (为什么大家都不说话？) und allein als Rückfrage stehen: 为什么？ „Warum?“. In der direkten Frage mit 为什么 steht am Satzende kein 吗; ein 呢 (ne) ist möglich und macht die Frage weicher. Die Antwort beginnt oft mit 因为 (yīnwèi) „weil“. 为什么不…… kann auch einen Vorschlag einleiten: 你为什么不试试？ „Warum probierst du es nicht einfach?“",
    "notes": "怎么 (zěnme) fragt ebenfalls „wieso“, drückt aber eher Verwunderung oder Vorwurf aus; allein gebraucht (怎么？ oder 怎么了 (zěnme le)？) heißt es eher „Was ist (los)?“ und fragt nicht nach einer Begründung. 为什么 (wèishénme) klingt sachlicher und fragt wirklich nach einer Erklärung.",
    "examples": [
      {
        "chinese": "你为什么学中文？",
        "pinyin": "Nǐ wèishénme xué Zhōngwén?",
        "german": "Warum lernst du Chinesisch?"
      },
      {
        "chinese": "他今天为什么没来上课？",
        "pinyin": "Tā jīntiān wèishénme méi lái shàngkè?",
        "german": "Warum ist er heute nicht zum Unterricht gekommen?"
      },
      {
        "chinese": "为什么大家都不说话呢？",
        "pinyin": "Wèishénme dàjiā dōu bù shuōhuà ne?",
        "german": "Warum sagt denn keiner etwas?"
      }
    ],
    "legacyIds": [
      "为什么"
    ],
    "related": [
      "g:怎么",
      "g:因为……，所以……",
      "g:疑问代词@HSK1",
      "g:疑问句：特指问句"
    ],
    "quiz": {
      "example": 1,
      "answer": "为什么",
      "distractors": [
        {
          "text": "什么",
          "reason": "什么 fragt nach einer Sache („was“), nicht nach dem Grund; 什么没来 ergibt keinen Sinn."
        },
        {
          "text": "怎么样",
          "reason": "怎么样 fragt nach einer Bewertung oder dem Zustand („wie ist es?“), nicht nach dem Grund."
        },
        {
          "text": "因为",
          "reason": "因为 nennt den Grund („weil“), fragt aber nicht danach."
        }
      ],
      "accepted": [
        "怎么"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:自己",
    "pattern": "自己",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 77,
      "category": "词类",
      "categoryName": "代词",
      "item": "人称代词",
      "content": "自己"
    },
    "meaning": "selbst, sich; eigen (Reflexivpronomen)",
    "formation": "Person + 自己 (selbst) · 自己 + Verb (selbst, ohne Hilfe) · Verb + 自己 (sich) · 自己的 + Nomen (eigen)",
    "notes": "Gegenbegriff ist 别人 (biéren) „andere Leute“ (HSK 3). Bei 自己 (zìjǐ) + Verb steht oft schon im Kontext, wer gemeint ist: 自己来！ „Ich mach das selbst!“ oder „Bedien dich!“",
    "explanation": "自己 (zìjǐ) bezieht sich auf eine schon genannte Person, meist das Subjekt. Je nach Stellung entspricht es verschiedenen deutschen Wörtern: nach einem Pronomen oder Nomen betont es die Person: 我自己 „ich selbst“; vor dem Verb heißt es „selbst, allein, ohne Hilfe“: 孩子会自己穿衣服 „das Kind zieht sich selbst an“; als Objekt entspricht es „sich“: 他很了解自己 „er kennt sich gut“; mit 的 bedeutet es „eigen“: 自己的房间 „das eigene Zimmer“. 自己 gilt für alle Personen und hat keine Pluralform: 我们自己, 他们自己. Deutsche Reflexivverben werden im Chinesischen oft ohne 自己 ausgedrückt (sich freuen = 高兴 (gāoxìng)).",
    "examples": [
      {
        "chinese": "这件事我自己做吧。",
        "pinyin": "Zhè jiàn shì wǒ zìjǐ zuò ba.",
        "german": "Das mache ich lieber selbst."
      },
      {
        "chinese": "孩子已经会自己穿衣服了。",
        "pinyin": "Háizi yǐjīng huì zìjǐ chuān yīfu le.",
        "german": "Das Kind kann sich schon selbst anziehen."
      },
      {
        "chinese": "每个人都有自己的房间。",
        "pinyin": "Měi ge rén dōu yǒu zìjǐ de fángjiān.",
        "german": "Jeder hat sein eigenes Zimmer."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "自己",
      "distractors": [
        {
          "text": "一起",
          "reason": "一起 heißt „zusammen (mit anderen)“; gemeint ist, dass das Kind es ohne Hilfe tut."
        },
        {
          "text": "别人",
          "reason": "别人 heißt „andere Leute“ und ändert den Sinn; das Kind zieht sich selbst an."
        },
        {
          "text": "他",
          "reason": "他 als Personalpronomen kann nicht vor dem Verb „selbst, ohne Hilfe“ ausdrücken."
        }
      ]
    },
    "related": [
      "g:人称代词@HSK1",
      "g:别人"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:指示代词@HSK2",
    "pattern": "指示代词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 78,
      "category": "词类",
      "categoryName": "代词",
      "item": "指示代词",
      "content": "那么、那样、这么、这样、每"
    },
    "words": [
      "那么",
      "那样",
      "这么",
      "这样",
      "每"
    ],
    "meaning": "Hinweiswörter für Art und Grad: so, solch; jeder",
    "explanation": "Diese Hinweiswörter zeigen auf Art und Weise, Grad oder Eigenschaft – nah (这) oder fern (那):\n这么 (zhème) – „so“ (nah, bezogen auf das Gegenwärtige), vor Adjektiv oder Verb: 这么大, 这么做.\n那么 (nàme) – „so“ (fern oder schon erwähnt), vor Adjektiv oder Verb: 那么好, 那么喜欢.\n这样 (zhèyàng) – „so, auf diese Weise; solch“: 这样写, mit 的 als Attribut 这样的人, auch als Prädikat: 就这样吧 „machen wir es so“.\n那样 (nàyàng) – „so, auf jene Weise; solch“: 那样做, 那样的包.\n每 (měi) – „jeder“: 每 + Zählwort + Nomen, oft mit 都 im Prädikat: 每个人都……, 每天 (měi tiān).\n这么/那么 stehen vor allem vor Adjektiven und Verben; vor einem Nomen braucht man 这样的 oder 那样的, also „so ein“. Vor einem Adjektiv steht kein zusätzliches 很: 这么好, nicht 这么很好.",
    "examples": [
      {
        "chinese": "你怎么来得这么早？",
        "pinyin": "Nǐ zěnme lái de zhème zǎo?",
        "german": "Wieso bist du so früh gekommen?"
      },
      {
        "chinese": "我没想到北京的冬天那么冷。",
        "pinyin": "Wǒ méi xiǎngdào Běijīng de dōngtiān nàme lěng.",
        "german": "Ich hätte nicht gedacht, dass der Winter in Peking so kalt ist."
      },
      {
        "chinese": "这个字应该这样写。",
        "pinyin": "Zhège zì yīnggāi zhèyàng xiě.",
        "german": "Dieses Zeichen schreibt man so."
      },
      {
        "chinese": "我也想买一个那样的包。",
        "pinyin": "Wǒ yě xiǎng mǎi yí ge nàyàng de bāo.",
        "german": "Ich möchte auch so eine Tasche kaufen."
      },
      {
        "chinese": "我们每个星期见一次面。",
        "pinyin": "Wǒmen měi ge xīngqī jiàn yí cì miàn.",
        "german": "Wir treffen uns einmal pro Woche."
      }
    ],
    "related": [
      "g:指示代词@HSK1",
      "g:那么",
      "g:每",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:指示代词@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:每",
    "pattern": "每",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 78,
      "category": "词类",
      "categoryName": "代词",
      "item": "指示代词",
      "content": "那么、那样、这么、这样、每"
    },
    "meaning": "jeder, jede, jedes (ausnahmslos jedes Einzelne)",
    "pinyin": "měi + Zählwort + Nomen",
    "examples": [
      {
        "chinese": "我每天早上七点起床。",
        "pinyin": "Wǒ měi tiān zǎoshang qī diǎn qǐchuáng.",
        "german": "Ich stehe jeden Morgen um sieben Uhr auf."
      },
      {
        "chinese": "这种药每四个小时吃一次。",
        "pinyin": "Zhè zhǒng yào měi sì ge xiǎoshí chī yí cì.",
        "german": "Dieses Medikament nimmt man alle vier Stunden."
      },
      {
        "chinese": "每个房间都有电视。",
        "pinyin": "Měi ge fángjiān dōu yǒu diànshì.",
        "german": "In jedem Zimmer gibt es einen Fernseher."
      }
    ],
    "legacyIds": [
      "g:每 + Zählwort + Nomen",
      "每 + Zählwort + Nomen"
    ],
    "formation": "每 + (Zahl) + Zählwort + Nomen (+ 都 + Verb)",
    "notes": "Ähnliche Bedeutung haben verdoppelte Zählwörter wie 天天 (tiāntiān) „Tag für Tag“, 个个 (gègè) „jeder Einzelne“ (HSK 3). 每 gehört zur HSK-2-Gruppe der Hinweiswörter mit 这么 (zhème), 那么 (nàme), 这样 (zhèyàng) und 那样 (nàyàng).",
    "explanation": "每 (měi) „jeder“ greift jedes einzelne Glied einer Gruppe heraus. Zwischen 每 und dem Nomen steht normalerweise ein Zählwort: 每个人 (měi ge rén) „jeder Mensch“, 每本书 „jedes Buch“. Wörter, die selbst wie Zählwörter funktionieren, folgen direkt: 每天 (měi tiān) „jeden Tag“, 每年 (měi nián) „jedes Jahr“, 每次 (měi cì) „jedes Mal“. Mit einer Zahl gibt 每 einen Rhythmus an: 每两天 „alle zwei Tage“, 每四个小时 „alle vier Stunden“. Im Prädikat steht oft 都 (dōu), das die Gesamtheit noch einmal aufnimmt: 每个房间都有电视. Typischer Fehler: das Zählwort weglassen (每书 statt 每本书).",
    "quiz": {
      "example": 2,
      "answer": "每",
      "distractors": [
        {
          "text": "几",
          "reason": "几个房间 heißt „einige Zimmer“; gemeint ist aber jedes Zimmer ohne Ausnahme."
        },
        {
          "text": "一",
          "reason": "一个房间 meint nur ein einziges Zimmer und passt nicht zu 都 „alle“."
        },
        {
          "text": "这",
          "reason": "这个房间 ist ein bestimmtes Zimmer; 都 verlangt eine Gesamtheit wie bei 每."
        }
      ]
    },
    "related": [
      "g:都¹",
      "g:指示代词@HSK2",
      "g:个个、张张",
      "g:指示代词@HSK1"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:那么",
    "pattern": "那么",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 78,
      "category": "词类",
      "categoryName": "代词",
      "item": "指示代词",
      "content": "那么、那样、这么、这样、每"
    },
    "meaning": "so, dermaßen (Grad oder Art, auf Entferntes bezogen)",
    "pinyin": "nàme + Adj/Verb",
    "examples": [
      {
        "chinese": "别那么着急，时间还早呢。",
        "pinyin": "Bié nàme zháojí, shíjiān hái zǎo ne.",
        "german": "Hab es nicht so eilig, es ist noch früh."
      },
      {
        "chinese": "你怎么买了那么多水果？",
        "pinyin": "Nǐ zěnme mǎile nàme duō shuǐguǒ?",
        "german": "Wieso hast du so viel Obst gekauft?"
      },
      {
        "chinese": "他汉语说得那么好，一定学了很多年。",
        "pinyin": "Tā Hànyǔ shuō de nàme hǎo, yídìng xuéle hěn duō nián.",
        "german": "Er spricht so gut Chinesisch, er muss es viele Jahre gelernt haben."
      }
    ],
    "legacyIds": [
      "g:那么 + Adj/Verb",
      "那么 + Adj/Verb"
    ],
    "formation": "那么 + Adjektiv / Verb",
    "notes": "Am Satzanfang ist 那么 (nàme) auch ein Bindewort „dann, also“ (那么，我们走吧). In Vergleichen steht es im Muster A + 没有 (méiyǒu) + B + 那么 + Adjektiv „A ist nicht so … wie B“ (eigener Punkt, HSK 2).",
    "explanation": "那么 (nàme) verweist auf einen Grad oder eine Art und Weise: „so, dermaßen“. Es steht vor Adjektiven (那么冷 „so kalt“), vor Verben des Fühlens (那么喜欢 „so gern“) und vor Verben im Sinn von „auf diese Art“ (别那么说 „sag das nicht so“). Mit 那么多 / 那么少 drückt man eine große oder kleine Menge aus. Der Unterschied zu 这么 (zhème) ist die Nähe: 这么 bezieht sich auf das, was gerade hier geschieht, 那么 eher auf etwas Entferntes, Vergangenes oder vom Gegenüber Gesagtes – im Alltag werden beide aber oft austauschbar verwendet. Vor einem Adjektiv steht nach 那么 kein 很: 那么好, nicht 那么很好. Vor einem Nomen braucht man 那样的 (nàyàng de).",
    "quiz": {
      "example": 0,
      "answer": "那么",
      "distractors": [
        {
          "text": "那",
          "reason": "那 allein zeigt auf Dinge („das, jenes“) und kann keinen Grad vor einem Adjektiv angeben."
        },
        {
          "text": "很",
          "reason": "很 passt nicht nach 别; „nicht so eilig“ verlangt ein Hinweiswort für den Grad."
        },
        {
          "text": "怎么",
          "reason": "怎么 ist ein Fragewort („wie, wieso“) und macht aus der Aufforderung keinen sinnvollen Satz."
        }
      ],
      "accepted": [
        "这么"
      ]
    },
    "related": [
      "g:指示代词@HSK2",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:指示代词@HSK1",
      "g:每"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:AA、AABB",
    "pattern": "AA、AABB",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortarten",
    "syllabus": {
      "no": 79,
      "category": "词类",
      "categoryName": "形容词",
      "item": "形容词重叠",
      "content": "AA、AABB"
    },
    "meaning": "Adjektiv-Verdopplung: lebhaft verstärkt (schön groß, ganz sauber)",
    "formation": "einsilbig: AA + 的/地 (大大的) · zweisilbig: AABB + 的/地 (干干净净的)",
    "notes": "Verben werden anders verdoppelt (ABAB: 休息休息) und bedeuten dann „mal kurz“. Umgangssprachlich bekommt die zweite Silbe von AA oft den ersten Ton und 儿: 好好儿 (hǎohāor) „ordentlich“, 慢慢儿 (mànmānr) „ganz langsam“.",
    "explanation": "Verdoppelte Adjektive beschreiben anschaulich und gefühlsbetont, oft mit einem Unterton von „schön, ganz, richtig“. Einsilbige Adjektive werden zu AA (大大的眼睛 „große Augen“, 慢慢地走 „ganz langsam gehen“), zweisilbige zu AABB: 干干净净 (gānganjìngjìng) „blitzsauber“, 高高兴兴 (gāogaoxìngxìng) „fröhlich, gut gelaunt“. Als Attribut und Prädikat stehen sie mit 的 (房间干干净净的), vor einem Verb meist mit 地 (高高兴兴地回家). Weil die Verdopplung schon einen Grad ausdrückt, stehen davor weder 很, 非常 (fēicháng) noch eine Verneinung: nicht 很高高的, nicht 不干干净净. Nicht jedes Adjektiv lässt sich verdoppeln; geläufig sind vor allem häufige Wörter des Alltags. Vor einem Verb kann AA auch ohne 地 stehen: 你慢慢说.",
    "examples": [
      {
        "chinese": "她有一双大大的眼睛。",
        "pinyin": "Tā yǒu yì shuāng dàdà de yǎnjing.",
        "german": "Sie hat schöne große Augen."
      },
      {
        "chinese": "你慢慢说，别着急。",
        "pinyin": "Nǐ mànmàn shuō, bié zháojí.",
        "german": "Sprich ganz langsam, keine Eile."
      },
      {
        "chinese": "房间打扫得干干净净的。",
        "pinyin": "Fángjiān dǎsǎo de gānganjìngjìng de.",
        "german": "Das Zimmer ist blitzblank geputzt."
      },
      {
        "chinese": "孩子们高高兴兴地去上学了。",
        "pinyin": "Háizimen gāogaoxìngxìng de qù shàngxué le.",
        "german": "Die Kinder sind fröhlich zur Schule gegangen."
      }
    ],
    "related": [
      "g:AA、A一A、A了A、ABAB",
      "g:地",
      "g:形容词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:数词@HSK2",
    "pattern": "数词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 80,
      "category": "词类",
      "categoryName": "数词",
      "item": "",
      "content": "万、好多、多"
    },
    "words": [
      "万",
      "好多",
      "多"
    ],
    "meaning": "Zahlwörter: zehntausend; sehr viele; über (ungefähre Zahl)",
    "explanation": "Drei neue Zahlwörter erweitern das Zählen über die Zahlen der Stufe 1 hinaus:\n万 (wàn) – „zehntausend“: Große Zahlen zählt man im Chinesischen in Zehntausendern: 一万 (yí wàn) = 10.000, 十万 (shí wàn) = 100.000, 一百万 (yìbǎi wàn) = 1 Million. 10.000 heißt nicht 十千. Vor 万 steht oft 两 statt 二: 两万.\n好多 (hǎoduō) – „sehr viele, eine Menge“ (umgangssprachlich): 好多人, 好多东西; gleichbedeutend mit 很多 (hěn duō), etwas gefühlsbetonter.\n多 (duō) – nach einer runden Zahl „über, mehr als“: 二十多分钟 „über zwanzig Minuten“, 一万多块 „über zehntausend Yuan“. Nach runden Zehnern, Hundertern usw. steht 多 vor dem Zählwort (十多个人), nach einer Einerzahl dahinter (两个多小时) – dazu gibt es eigene Punkte.",
    "examples": [
      {
        "chinese": "我的新电脑花了一万多块钱。",
        "pinyin": "Wǒ de xīn diànnǎo huāle yí wàn duō kuài qián.",
        "german": "Mein neuer Computer hat über zehntausend Yuan gekostet."
      },
      {
        "chinese": "这个城市有两百多万人。",
        "pinyin": "Zhège chéngshì yǒu liǎngbǎi duō wàn rén.",
        "german": "Diese Stadt hat über zwei Millionen Einwohner."
      },
      {
        "chinese": "公园里有好多人。",
        "pinyin": "Gōngyuán li yǒu hǎoduō rén.",
        "german": "Im Park sind jede Menge Leute."
      },
      {
        "chinese": "我等了你二十多分钟了！",
        "pinyin": "Wǒ děngle nǐ èrshí duō fēnzhōng le!",
        "german": "Ich warte schon über zwanzig Minuten auf dich!"
      }
    ],
    "related": [
      "g:数词+多+量词",
      "g:数词+量词+多",
      "g:概数表达法1：（1）用“几”表示概数",
      "g:好"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:名量词@HSK2",
    "pattern": "名量词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 81,
      "category": "词类",
      "categoryName": "量词",
      "item": "名量词",
      "content": "（1）专用名量词：条、位、间、名"
    },
    "words": [
      "条",
      "位",
      "间",
      "名"
    ],
    "meaning": "Zählwörter: lange Dinge, höfliche Personen, Räume, Personen (amtlich)",
    "explanation": "Vier spezielle Zählwörter für Nomen:\n条 (tiáo) – für lange, schmale Dinge: 一条路 „eine Straße“, 一条河, 一条裤子 „eine Hose“, 一条鱼 „ein Fisch“; auch für Nachrichten: 一条消息.\n位 (wèi) – höflich für Personen: 一位老师, 这位先生 „dieser Herr“; im Restaurant fragt man 几位？ „wie viele Personen?“. Für sich selbst verwendet man 位 nicht.\n间 (jiān) – für Räume und Zimmer: 一间教室, 一间房间, 两间卧室.\n名 (míng) – sachlich-amtlich für Personen in Zahlenangaben, vor allem geschrieben: 二十名学生, 三名医生; auch für Platzierungen: 第一名 „erster Platz“. Wie bei allen Zählwörtern gilt: Zahl oder 这/那/哪/几 + Zählwort + Nomen.",
    "examples": [
      {
        "chinese": "我想买一条新裤子。",
        "pinyin": "Wǒ xiǎng mǎi yì tiáo xīn kùzi.",
        "german": "Ich möchte eine neue Hose kaufen."
      },
      {
        "chinese": "请问，您几位？",
        "pinyin": "Qǐngwèn, nín jǐ wèi?",
        "german": "Wie viele Personen sind Sie, bitte?"
      },
      {
        "chinese": "他住在一间很小的房间里。",
        "pinyin": "Tā zhù zài yì jiān hěn xiǎo de fángjiān li.",
        "german": "Er wohnt in einem sehr kleinen Zimmer."
      },
      {
        "chinese": "我们班有二十名学生。",
        "pinyin": "Wǒmen bān yǒu èrshí míng xuésheng.",
        "german": "Unsere Klasse hat zwanzig Schüler."
      }
    ],
    "related": [
      "g:名量词@HSK1",
      "g:包",
      "g:名量词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:包",
    "pattern": "包",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 82,
      "category": "词类",
      "categoryName": "量词",
      "item": "名量词",
      "content": "（2）借用名量词：包"
    },
    "meaning": "Packung, Päckchen, Tüte (geborgtes Zählwort)",
    "formation": "Zahl / 这 / 那 + (大/小) + 包 + Nomen",
    "notes": "包 ist auch Nomen (书包 (shūbāo) „Schultasche“, 一个包 „eine Tasche“) und Verb „einwickeln“: 包饺子 (bāo jiǎozi) „Jiaozi machen“.",
    "explanation": "包 (bāo) ist eigentlich ein Nomen („Tasche, Beutel, Paket“), wird aber als Zählwort „geborgt“: Man zählt Dinge nach der Verpackung, in der sie stecken: 一包茶 „ein Päckchen Tee“, 一包纸 „eine Packung Papier“, 两包东西 „zwei Tüten mit Sachen“. Genauso funktionieren 杯 (bēi) „Tasse, Glas“ oder 碗 (wǎn) „Schale“. Anders als die meisten echten Zählwörter kann ein geborgtes Zählwort ein Adjektiv wie 大 oder 小 vor sich haben: 一大包 „eine große Tüte voll“. Das Nomen danach ist meist ein Stoff oder eine Menge kleiner Dinge, die man nicht einzeln zählt.",
    "examples": [
      {
        "chinese": "他手里拿着一大包东西。",
        "pinyin": "Tā shǒu li názhe yí dà bāo dōngxi.",
        "german": "Er hat eine große Tüte voller Sachen in der Hand."
      },
      {
        "chinese": "妈妈给我带了一包茶。",
        "pinyin": "Māma gěi wǒ dàile yì bāo chá.",
        "german": "Mama hat mir ein Päckchen Tee mitgebracht."
      },
      {
        "chinese": "桌子上有一包纸，你用吧。",
        "pinyin": "Zhuōzi shang yǒu yì bāo zhǐ, nǐ yòng ba.",
        "german": "Auf dem Tisch liegt eine Packung Papier – bedien dich."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "包",
      "distractors": [
        {
          "text": "杯",
          "reason": "杯 zählt ein Getränk in einer Tasse; mitgebracht wurde aber ein Päckchen Tee."
        },
        {
          "text": "个",
          "reason": "个 zählt einzelne Dinge; Tee als Stoff braucht ein Maß wie Päckchen oder Tasse."
        },
        {
          "text": "本",
          "reason": "本 zählt Bücher und Hefte, keinen Tee."
        }
      ]
    },
    "related": [
      "g:名量词@HSK2",
      "g:杯",
      "g:名量词@HSK1",
      "g:碗"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:次",
    "pattern": "次",
    "level": "HSK2",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 83,
      "category": "词类",
      "categoryName": "量词",
      "item": "动量词",
      "content": "次"
    },
    "meaning": "-mal (Zählwort für Handlungen); Mal",
    "formation": "Verb (+ 了/过) + Zahl + 次 (+ Objekt) · 这/上/下/第一 + 次",
    "notes": "遍 (biàn, HSK 3) zählt ebenfalls Handlungen, betont aber den ganzen Ablauf von Anfang bis Ende (读一遍 „einmal ganz durchlesen“). Umgangssprachlich wird statt 次 auch 回 (huí) verwendet.",
    "explanation": "次 (cì) zählt, wie oft eine Handlung geschieht: 去过两次 „zweimal dort gewesen“, 看了三次 „dreimal gesehen“. Die Angabe Zahl + 次 steht nach dem Verb (und nach 了 oder 过); ein Nomen als Objekt folgt meist danach (去过两次上海), ein Pronomen steht davor: 见过他一次 „ihn einmal getroffen“. Bei einer Frequenz pro Zeitraum steht der Zeitraum vorn: 一天吃三次 „dreimal am Tag essen/nehmen“. Außerdem bildet 次 „Mal“ mit Hinweiswörtern feste Ausdrücke: 这次 (zhè cì) „diesmal“, 上次 (shàng cì) „letztes Mal“, 下次 (xià cì) „nächstes Mal“, 第一次 (dìyī cì) „das erste Mal“. Gefragt wird mit 几次 (jǐ cì) „wie oft“.",
    "examples": [
      {
        "chinese": "我去过两次上海。",
        "pinyin": "Wǒ qùguo liǎng cì Shànghǎi.",
        "german": "Ich war schon zweimal in Shanghai."
      },
      {
        "chinese": "这个电影我看了三次。",
        "pinyin": "Zhège diànyǐng wǒ kànle sān cì.",
        "german": "Diesen Film habe ich dreimal gesehen."
      },
      {
        "chinese": "下次你来我家吃饭吧。",
        "pinyin": "Xià cì nǐ lái wǒ jiā chī fàn ba.",
        "german": "Komm doch nächstes Mal zum Essen zu mir."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "次",
      "distractors": [
        {
          "text": "遍",
          "reason": "遍 betont einen vollständigen Durchgang (lesen, hören); für Besuche an einem Ort sagt man 次."
        },
        {
          "text": "个",
          "reason": "个 zählt Dinge und Personen, nicht wie oft man irgendwo war."
        },
        {
          "text": "天",
          "reason": "两天 ist eine Dauer („zwei Tage“) und steht so nicht vor dem Ortsnamen; gefragt ist die Häufigkeit."
        }
      ],
      "accepted": [
        "回"
      ]
    },
    "related": [
      "g:动词+动量补语",
      "g:动量词@HSK3",
      "g:序数表达法1：第+数词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:程度副词@HSK2",
    "pattern": "程度副词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 84,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "多、好、最"
    },
    "words": [
      "多",
      "好",
      "最"
    ],
    "meaning": "Gradadverbien: wie (sehr)!, so, am …-sten",
    "explanation": "Drei neue Gradadverbien stehen vor Adjektiven und Verben des Fühlens:\n多 (duō) – im Ausruf „wie (sehr)“: 多好啊！ „wie schön!“, 多可爱！ „wie süß!“; meist mit 啊 am Satzende. (Die Frage 多大 (duō dà) „wie alt?“ ist ein eigener Punkt, HSK 1.)\n好 (hǎo) – umgangssprachlich „so, ganz schön, wirklich“: 好冷 „so kalt“, 好想你 „vermisse dich so“; gefühlsbetonter als 很.\n最 (zuì) – Superlativ „am …-sten“: 最好 (zuì hǎo) „am besten“, 最喜欢 „am liebsten mögen“.\nWie bei 很 oder 太 steht das Adverb direkt vor dem Adjektiv, ohne 是: 今天好冷, nicht 今天是好冷.",
    "examples": [
      {
        "chinese": "今天的天气多好啊！",
        "pinyin": "Jīntiān de tiānqì duō hǎo a!",
        "german": "Was für ein schönes Wetter heute!"
      },
      {
        "chinese": "你看，那个孩子多可爱！",
        "pinyin": "Nǐ kàn, nàge háizi duō kě'ài!",
        "german": "Schau mal, wie süß das Kind ist!"
      },
      {
        "chinese": "外面好热啊！",
        "pinyin": "Wàimian hǎo rè a!",
        "german": "Draußen ist es so heiß!"
      },
      {
        "chinese": "我最喜欢夏天。",
        "pinyin": "Wǒ zuì xǐhuan xiàtiān.",
        "german": "Am liebsten mag ich den Sommer."
      }
    ],
    "related": [
      "g:程度副词@HSK1",
      "g:好",
      "g:最",
      "g:多",
      "g:多么",
      "g:程度副词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:好",
    "pattern": "好",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 84,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "多、好、最"
    },
    "meaning": "so, ganz schön (umgangssprachlicher Grad, gefühlsbetont)",
    "pinyin": "hǎo + Adjektiv",
    "examples": [
      {
        "chinese": "今天好冷啊，你多穿一件衣服吧。",
        "pinyin": "Jīntiān hǎo lěng a, nǐ duō chuān yí jiàn yīfu ba.",
        "german": "Heute ist es so kalt – zieh dir lieber noch etwas über."
      },
      {
        "chinese": "她的新衣服好漂亮！",
        "pinyin": "Tā de xīn yīfu hǎo piàoliang!",
        "german": "Ihr neues Kleid ist so hübsch!"
      },
      {
        "chinese": "我好想你啊！",
        "pinyin": "Wǒ hǎo xiǎng nǐ a!",
        "german": "Ich vermisse dich so sehr!"
      }
    ],
    "legacyIds": [
      "g:好 + Adjektiv",
      "好 + Adjektiv"
    ],
    "formation": "好 + Adjektiv / Verb des Fühlens (+ 啊)！",
    "notes": "好 hat weitere Gebrauchsweisen: als Adjektiv „gut“ (好人 (hǎorén) „guter Mensch“) und als Ergänzung nach dem Verb, die „fertig, ordentlich erledigt“ ausdrückt: 做好 (zuòhǎo) (eigener Punkt, HSK 2). Die Verbindung 好不容易 (hǎo bù róngyì) „mit Mühe“ folgt in HSK 6.",
    "explanation": "Als Gradadverb bedeutet 好 (hǎo) „so, ganz schön, wirklich“ und steht direkt vor einem Adjektiv oder einem Verb des Fühlens: 好冷 „so kalt“, 好漂亮 „so hübsch“, 好想你 „ich vermisse dich so“. Es ist umgangssprachlich und gefühlsbetont, oft in Ausrufen mit 啊 (a) am Satzende. Gegenüber 很 (hěn), das neutral „sehr“ bedeutet, klingt 好 nach Staunen oder Klage, ähnlich wie 真 (zhēn). Feste Verbindungen sind 好多 (hǎoduō) „sehr viele“ und 好久 (hǎojiǔ) „so lange“.",
    "quiz": {
      "example": 0,
      "answer": "好",
      "distractors": [
        {
          "text": "太",
          "reason": "太 verlangt im Ausruf meist 了 am Ende (太冷了), nicht 啊."
        },
        {
          "text": "最",
          "reason": "最 bildet den Superlativ („am kältesten“) und braucht einen Vergleichsrahmen; gemeint ist einfach „so kalt“."
        },
        {
          "text": "不",
          "reason": "不冷 hieße „nicht kalt“ und widerspricht dem Rat, sich wärmer anzuziehen."
        }
      ],
      "accepted": [
        "真",
        "多",
        "很"
      ]
    },
    "related": [
      "g:程度副词@HSK2",
      "g:真",
      "g:太",
      "g:很",
      "g:多么",
      "g:动词+错/懂/好/会/完"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:最",
    "pattern": "最",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 84,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "多、好、最"
    },
    "meaning": "am …-sten, der/die/das …-ste (Superlativ)",
    "pinyin": "zuì + Adjektiv",
    "examples": [
      {
        "chinese": "你最喜欢什么颜色？",
        "pinyin": "Nǐ zuì xǐhuan shénme yánsè?",
        "german": "Welche Farbe magst du am liebsten?"
      },
      {
        "chinese": "他是我最好的朋友。",
        "pinyin": "Tā shì wǒ zuì hǎo de péngyou.",
        "german": "Er ist mein bester Freund."
      },
      {
        "chinese": "我们班里小王最高。",
        "pinyin": "Wǒmen bān li Xiǎo Wáng zuì gāo.",
        "german": "In unserer Klasse ist Xiao Wang der Größte."
      }
    ],
    "legacyIds": [
      "g:最 + Adjektiv",
      "最 + Adjektiv"
    ],
    "formation": "最 + Adjektiv / Verb des Fühlens (喜欢, 想 …)",
    "notes": "Für den Vergleich zweier Dinge nimmt man 比 (bǐ) oder 更 (gèng) „noch mehr“; 最 vergleicht mit allen anderen einer Gruppe.",
    "explanation": "最 (zuì) bildet den Superlativ: Es steht direkt vor einem Adjektiv (最大 (zuì dà) „am größten“, 最好 (zuì hǎo) „am besten“) oder vor einem Verb des Fühlens oder Wünschens (最喜欢 „am liebsten mögen“, 最想 „am meisten wollen“). Als Attribut steht 最 + Adjektiv mit 的 vor dem Nomen: 最好的朋友 „der beste Freund“. Der Vergleichsrahmen wird oft vorangestellt, etwa mit 里 (li): 我们班里他最高 „in unserer Klasse ist er der Größte“. Vor Ortswörtern bedeutet 最 „ganz“: 最前面 „ganz vorne“; fest ist 最后 (zuìhòu) „zuletzt, schließlich“. 最 steht nicht zusammen mit 很 oder 非常 (fēicháng).",
    "quiz": {
      "example": 2,
      "answer": "最",
      "distractors": [
        {
          "text": "更",
          "reason": "更 („noch mehr“) vergleicht mit einer bestimmten anderen Person; gemeint ist der Größte der ganzen Klasse."
        },
        {
          "text": "很",
          "reason": "很高 heißt nur „sehr groß“, nicht „der Größte“."
        },
        {
          "text": "比",
          "reason": "比 braucht ein Vergleichsglied danach (比小李高); allein vor dem Adjektiv steht es nicht."
        }
      ]
    },
    "related": [
      "g:程度副词@HSK2",
      "g:A比B+形容词",
      "g:A比B+更/还+形容词",
      "g:好",
      "g:很"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一起",
    "pattern": "一起",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 85,
      "category": "词类",
      "categoryName": "副词",
      "item": "范围副词",
      "content": "一起"
    },
    "meaning": "zusammen, gemeinsam (mit jemandem)",
    "formation": "(A + 跟/和 + B) + 一起 + Verb · 在一起",
    "notes": "Nicht verwechseln mit 一共 (yígòng) „insgesamt“ (Summe, HSK 3) und 都 (dōu) „alle“: 我们都去 heißt „wir gehen alle (jeder für sich)“, 我们一起去 „wir gehen gemeinsam“. Umgangssprachlich sagt man auch 一块儿 (yíkuàir).",
    "explanation": "一起 (yìqǐ) „zusammen, gemeinsam“ steht als Adverb vor dem Verb: 我们一起去吧 „lass uns zusammen gehen“. Der Partner wird mit 跟 (gēn) oder 和 (hé) davor genannt: 我跟朋友一起打球 „ich spiele mit Freunden Ball“. Ein häufiger Fehler deutschsprachiger Lerner ist, 一起 wie „zusammen“ ans Ende zu stellen (我们去一起) – es muss vor dem Verb stehen. Nach 在 bedeutet es „beisammen“: 住在一起 „zusammenwohnen“, 我们在一起 „wir sind zusammen“. 一 wird vor dem dritten Ton im vierten Ton gesprochen: yìqǐ.",
    "examples": [
      {
        "chinese": "我们一起去吃饭吧！",
        "pinyin": "Wǒmen yìqǐ qù chī fàn ba!",
        "german": "Lass uns zusammen essen gehen!"
      },
      {
        "chinese": "周末我常跟朋友一起打篮球。",
        "pinyin": "Zhōumò wǒ cháng gēn péngyou yìqǐ dǎ lánqiú.",
        "german": "Am Wochenende spiele ich oft mit Freunden Basketball."
      },
      {
        "chinese": "他和爸爸妈妈住在一起。",
        "pinyin": "Tā hé bàba māma zhù zài yìqǐ.",
        "german": "Er wohnt mit seinen Eltern zusammen."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "一起",
      "distractors": [
        {
          "text": "一共",
          "reason": "一共 bedeutet „insgesamt“ und fasst Mengen zusammen, nicht gemeinsames Tun."
        },
        {
          "text": "都",
          "reason": "都 bedeutet „alle“; nach 跟朋友 fehlt dann das „gemeinsam“."
        },
        {
          "text": "一下",
          "reason": "一下 steht nach dem Verb („mal kurz“), nicht davor."
        }
      ],
      "accepted": [
        "一块儿"
      ]
    },
    "related": [
      "g:都¹",
      "g:一共",
      "g:跟¹",
      "g:和¹"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:时间副词@HSK2",
    "pattern": "时间副词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 86,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "还²、已经、有时（候）、快、快要、正"
    },
    "words": [
      "还²",
      "已经",
      "有时（候）",
      "快",
      "快要",
      "正"
    ],
    "meaning": "Zeitadverbien: noch, schon, manchmal, bald, gerade",
    "notes": "快 ist auch Adjektiv „schnell“ (跑得很快). 有时候 (yǒushíhou) beschreibt wiederkehrende Fälle, keine einzelne Handlung. 正 und 正在 (zhèngzài) sind fast gleichbedeutend; 正 betont stärker den Zeitpunkt („genau in dem Moment“).",
    "explanation": "Zeitadverbien stehen meist nach dem Subjekt vor dem Prädikat (bzw. vor einer Präpositionalgruppe) und ordnen eine Handlung zeitlich ein; 快 und 已经 (yǐjīng) stehen auch direkt vor Zeitangaben (快八点了), 有时候 (yǒushíhou) auch am Satzanfang. Viele verlangen ein bestimmtes Wort am Satzende (了 oder 呢, siehe unten).\n还 (hái) – „noch, immer noch“: Zustand dauert an; 还没 „noch nicht“\n已经 (yǐjīng) – „schon, bereits“, meist mit 了\n有时(候) (yǒushí(hou)) – „manchmal“; oft zweimal: „manchmal …, manchmal …“\n快 (kuài) – „bald, gleich“, im Rahmen 快……了: 快八点了 „gleich ist es acht“\n快要 (kuàiyào) – „bald, gleich“, ebenfalls mit 了 am Ende; nicht zusammen mit einer genauen Zeitangabe (dafür 就要 (jiùyào))\n正 (zhèng) – „gerade (dabei)“: laufende Handlung, oft mit 呢 oder als 正在 (zhèngzài)",
    "examples": [
      {
        "chinese": "他已经回家了。",
        "pinyin": "Tā yǐjīng huí jiā le.",
        "german": "Er ist schon nach Hause gegangen."
      },
      {
        "chinese": "十点了，孩子还在睡觉。",
        "pinyin": "Shí diǎn le, háizi hái zài shuìjiào.",
        "german": "Es ist zehn Uhr, und das Kind schläft immer noch."
      },
      {
        "chinese": "我有时候走路去学校，有时候坐地铁。",
        "pinyin": "Wǒ yǒushíhou zǒulù qù xuéxiào, yǒushíhou zuò dìtiě.",
        "german": "Manchmal gehe ich zu Fuß zur Schule, manchmal fahre ich mit der U-Bahn."
      },
      {
        "chinese": "快八点了，我们走吧。",
        "pinyin": "Kuài bā diǎn le, wǒmen zǒu ba.",
        "german": "Es ist gleich acht, lass uns gehen."
      },
      {
        "chinese": "火车快要开了。",
        "pinyin": "Huǒchē kuàiyào kāi le.",
        "german": "Der Zug fährt gleich ab."
      },
      {
        "chinese": "我给他打电话的时候，他正吃饭呢。",
        "pinyin": "Wǒ gěi tā dǎ diànhuà de shíhou, tā zhèng chī fàn ne.",
        "german": "Als ich ihn anrief, war er gerade beim Essen."
      }
    ],
    "related": [
      "g:还²",
      "g:已经",
      "g:要/快要/就要……了",
      "g:正在",
      "g:……在/正在+动词……+呢",
      "g:时间副词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:还²",
    "pattern": "还²",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 86,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "还²、已经、有时（候）、快、快要、正"
    },
    "meaning": "noch, immer noch (Zustand dauert an); verneint: noch nicht",
    "pinyin": "hái méi(yǒu)… ne",
    "examples": [
      {
        "chinese": "我还没吃饭呢。",
        "pinyin": "Wǒ hái méi chī fàn ne.",
        "german": "Ich habe noch nicht gegessen."
      },
      {
        "chinese": "已经十一点了，他还在工作。",
        "pinyin": "Yǐjīng shíyī diǎn le, tā hái zài gōngzuò.",
        "german": "Es ist schon elf Uhr, und er arbeitet immer noch."
      },
      {
        "chinese": "外边还在下雨，你晚一点儿再走吧。",
        "pinyin": "Wàibian hái zài xià yǔ, nǐ wǎn yìdiǎnr zài zǒu ba.",
        "german": "Draußen regnet es noch, geh lieber etwas später."
      }
    ],
    "legacyIds": [
      "g:还没（有）…呢",
      "还没（有）…呢"
    ],
    "formation": "Subjekt + 还 + Verb/Adjektiv (+ 呢)  ·  Subjekt + 还 + 没(有) + Verb (+ 呢)",
    "notes": "Weitere Gebräuche von 还 sind eigene Punkte: 还¹ (HSK1) „außerdem, noch dazu“ (我还想买一本书), 还³ (HSK3) „noch (mehr)“ in Vergleichen (比昨天还冷), 还⁴ (HSK4) als Modaladverb („doch, sogar“).",
    "explanation": "Als Zeitadverb sagt 还 (hái), dass eine Handlung oder ein Zustand noch andauert, oft länger als erwartet: 他还在睡觉 „er schläft noch“, 外边还很冷 „draußen ist es immer noch kalt“. Verneint mit 没(有) bedeutet 还没 „noch nicht“: Das Erwartete ist bis jetzt nicht eingetreten; am Satzende steht oft 呢. Auf die Frage 你吃饭了吗？ antwortet man kurz 还没(有) „noch nicht“. Gegenstück ist 已经 (yǐjīng) „schon“. 还 steht nach dem Subjekt vor dem Prädikat, nicht am Satzanfang. Typischer Fehler: 了 nach 还没 – richtig ist 我还没吃饭呢, nicht 我还没吃饭了.",
    "quiz": {
      "example": 0,
      "answer": "还",
      "distractors": [
        {
          "text": "已经",
          "reason": "已经 heißt „schon“; gemeint ist aber „noch nicht“, und das verlangt 还没."
        },
        {
          "text": "再",
          "reason": "再 bezieht sich auf eine künftige Wiederholung („noch einmal“) und bildet mit 没 kein „noch nicht“."
        },
        {
          "text": "又",
          "reason": "又没 hieße „schon wieder nicht“ – eine Wiederholung, nicht „noch nicht“."
        }
      ]
    },
    "related": [
      "g:还¹",
      "g:已经",
      "g:时间副词@HSK2",
      "g:……在/正在+动词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:已经",
    "pattern": "已经",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 86,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "还²、已经、有时（候）、快、快要、正"
    },
    "meaning": "schon, bereits (eingetreten oder erreicht)",
    "pinyin": "yǐjīng…le",
    "examples": [
      {
        "chinese": "我们已经到机场了。",
        "pinyin": "Wǒmen yǐjīng dào jīchǎng le.",
        "german": "Wir sind schon am Flughafen."
      },
      {
        "chinese": "他已经不在这儿工作了。",
        "pinyin": "Tā yǐjīng bú zài zhèr gōngzuò le.",
        "german": "Er arbeitet nicht mehr hier."
      },
      {
        "chinese": "我已经学了两年中文了。",
        "pinyin": "Wǒ yǐjīng xué le liǎng nián Zhōngwén le.",
        "german": "Ich lerne schon seit zwei Jahren Chinesisch."
      }
    ],
    "legacyIds": [
      "g:已经…了",
      "已经…了"
    ],
    "formation": "Subjekt + 已经 + Verb/Adjektiv + 了  ·  已经 + Zeit-/Mengenangabe + 了",
    "notes": "都……了 (HSK2) drückt ebenfalls „schon“ aus, aber mit Gefühl (Ungeduld, Erstaunen). 就 betont, dass etwas früher als erwartet geschieht (他六点就起床了). 已 (yǐ, HSK4) ist die knappe, schriftliche Form.",
    "explanation": "已经 (yǐjīng) steht vor dem Prädikat und sagt, dass etwas bereits geschehen ist oder einen bestimmten Punkt erreicht hat: 他已经走了 „er ist schon gegangen“. Meist steht 了 nach dem Verb oder am Satzende; ohne 了 wirkt der Satz oft unvollständig. Auch vor Zeit- und Mengenangaben: 已经十二点了 „es ist schon zwölf“, 我已经学了两年中文了 „ich lerne schon seit zwei Jahren Chinesisch“. Für „noch nicht“ sagt man 还没 (hái méi), nicht 已经没; 已经不……了 bedeutet dagegen „nicht mehr“: 他已经不在这儿工作了.",
    "quiz": {
      "example": 0,
      "answer": "已经",
      "distractors": [
        {
          "text": "还",
          "reason": "还 heißt „noch“; „schon angekommen“ mit 了 verlangt 已经."
        },
        {
          "text": "正",
          "reason": "正 beschreibt eine laufende Handlung („gerade dabei“) und passt nicht zum abgeschlossenen 到……了."
        },
        {
          "text": "常",
          "reason": "常 „oft“ beschreibt eine Gewohnheit, nicht etwas, das schon eingetreten ist."
        }
      ]
    },
    "related": [
      "g:还²",
      "g:时间副词@HSK2",
      "g:变化态：用动态助词“了²”表示",
      "g:都……了"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:常",
    "pattern": "常",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 87,
      "category": "词类",
      "categoryName": "副词",
      "item": "频率副词",
      "content": "常、经常"
    },
    "meaning": "oft (kurze, einsilbige Form; gern verdoppelt)",
    "formation": "Subjekt + 常/常常 + Verb",
    "notes": "常 vs. 经常 (jīngcháng): gleiche Bedeutung; 经常 ist zweisilbig und neutral, 常 knapper. Für „immer“ sagt man 总是 (zǒngshì) (HSK3), für „manchmal“ 有时候 (yǒushíhou).",
    "explanation": "常 (cháng) „oft“ steht vor dem Verb und beschreibt eine Handlung, die regelmäßig vorkommt: 我常去那家饭店. Sehr häufig ist die verdoppelte Form 常常 (chángcháng), die im Gespräch natürlicher klingt. Einsilbiges 常 erscheint besonders in kurzen, festen Wendungen: 常来 „komm oft (vorbei)“, 常见 (chángjiàn) „häufig vorkommend“. Verneinung: 不常 „nicht oft, selten“. Bedeutungsgleich ist 经常 (jīngcháng). Da 常 eine Gewohnheit beschreibt, steht es normalerweise nicht mit 了 für eine einzelne abgeschlossene Handlung.",
    "examples": [
      {
        "chinese": "我周末常去公园跑步。",
        "pinyin": "Wǒ zhōumò cháng qù gōngyuán pǎobù.",
        "german": "Am Wochenende gehe ich oft im Park joggen."
      },
      {
        "chinese": "你以后常来玩儿！",
        "pinyin": "Nǐ yǐhòu cháng lái wánr!",
        "german": "Komm doch in Zukunft öfter vorbei!"
      },
      {
        "chinese": "他不常给家里打电话。",
        "pinyin": "Tā bù cháng gěi jiā li dǎ diànhuà.",
        "german": "Er ruft nicht oft zu Hause an."
      },
      {
        "chinese": "小时候我常常去奶奶家。",
        "pinyin": "Xiǎoshíhou wǒ chángcháng qù nǎinai jiā.",
        "german": "Als Kind war ich oft bei meiner Oma."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "常",
      "distractors": [
        {
          "text": "已经",
          "reason": "已经 „schon“ bezeichnet etwas Eingetretenes und verlangt 了; eine Gewohnheit drückt es nicht aus."
        },
        {
          "text": "正",
          "reason": "正 „gerade“ beschreibt eine einzelne laufende Handlung, keine regelmäßige am Wochenende."
        },
        {
          "text": "非常",
          "reason": "非常 „sehr“ steigert Adjektive; vor einem Verb wie 去 drückt es keine Häufigkeit aus."
        }
      ],
      "accepted": [
        "常常",
        "经常"
      ]
    },
    "related": [
      "g:经常",
      "g:总是",
      "g:频率副词@HSK3",
      "g:往往"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:经常",
    "pattern": "经常",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 87,
      "category": "词类",
      "categoryName": "副词",
      "item": "频率副词",
      "content": "常、经常"
    },
    "meaning": "häufig, regelmäßig (neutrale Standardform)",
    "pinyin": "chángcháng/jīngcháng",
    "examples": [
      {
        "chinese": "他经常工作到很晚。",
        "pinyin": "Tā jīngcháng gōngzuò dào hěn wǎn.",
        "german": "Er arbeitet oft bis spät in die Nacht."
      },
      {
        "chinese": "我们经常在这家饭店吃饭。",
        "pinyin": "Wǒmen jīngcháng zài zhè jiā fàndiàn chī fàn.",
        "german": "Wir essen häufig in diesem Restaurant."
      },
      {
        "chinese": "以前她不经常运动，现在每天都跑步。",
        "pinyin": "Yǐqián tā bù jīngcháng yùndòng, xiànzài měi tiān dōu pǎobù.",
        "german": "Früher hat sie selten Sport gemacht, jetzt joggt sie jeden Tag."
      }
    ],
    "legacyIds": [
      "g:常常/经常",
      "常常/经常"
    ],
    "formation": "Subjekt + 经常 + Verb (+ Objekt)",
    "notes": "Bedeutungsgleich mit 常/常常 (chángcháng); 经常 (jīngcháng) kann zusätzlich als Attribut stehen (这是经常的事 „das kommt oft vor“). 总是 (zǒngshì) (HSK3) heißt „immer, ständig“, 往往 (wǎngwǎng) (HSK4) „in der Regel“ unter bestimmten Umständen.",
    "explanation": "经常 (jīngcháng) „häufig, oft“ beschreibt Handlungen, die immer wieder vorkommen. Es steht nach dem Subjekt und vor dem Verb bzw. vor einer Präpositionalgruppe: 我们经常在这家饭店吃饭. Es ist neutral und in gesprochener wie geschriebener Sprache üblich. Verneinung: 不经常 „nicht oft“; das Gegenteil ist 很少 (hěn shǎo) „selten“. Typische Fehler: 经常 ans Satzende stellen (nicht 我去图书馆经常) oder bei vergangenen Gewohnheiten 了 anhängen – richtig ist 以前我经常去那儿, ohne 了.",
    "quiz": {
      "example": 0,
      "answer": "经常",
      "distractors": [
        {
          "text": "已经",
          "reason": "已经 „schon“ verlangt 了 und beschreibt etwas Eingetretenes, keine Häufigkeit."
        },
        {
          "text": "正",
          "reason": "正 „gerade“ beschreibt eine einzelne laufende Handlung, keine Gewohnheit."
        },
        {
          "text": "很",
          "reason": "很 „sehr“ steigert Adjektive; vor dem Verb 工作 gibt es keine Häufigkeit an."
        }
      ],
      "accepted": [
        "常",
        "常常"
      ]
    },
    "related": [
      "g:常",
      "g:总是",
      "g:频率副词@HSK3",
      "g:往往"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:别",
    "pattern": "别",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 88,
      "category": "词类",
      "categoryName": "副词",
      "item": "否定副词",
      "content": "别"
    },
    "meaning": "tu nicht …! (verneinte Aufforderung, gesprochen)",
    "formation": "(Subjekt +) 别 + Verb (+ Objekt) (+ 了)",
    "notes": "Der Satztyp „Aufforderung mit 别“ ist ein eigener Punkt (HSK2). In 别人 (biérén) „andere Leute“ und 别的 (biéde) „andere(s)“ (HSK3) bedeutet 别 „ander-“ und ist keine Verneinung. 不用 (búyòng) heißt „nicht nötig“, kein Verbot.",
    "explanation": "别 (bié) verneint Aufforderungen und Bitten: „tu nicht …“, „bitte nicht …“. Es steht vor dem Verb und richtet sich meist an das Gegenüber (你 oder 你们 (nǐmen)) oder schließt den Sprecher ein (我们别去了 „lass uns nicht hingehen“). Es bedeutet dasselbe wie 不要 (búyào), ist aber kürzer und besonders gesprochen üblich. Mit 了 am Ende fordert es auf, etwas Laufendes zu beenden: 别哭了 „hör auf zu weinen“. Feste Wendungen: 别客气 (bié kèqi) „keine Ursache“, 别担心 „keine Sorge“. Für Aussagen über Tatsachen verneint man mit 不 oder 没, nicht mit 别.",
    "examples": [
      {
        "chinese": "别担心，我明天就回来。",
        "pinyin": "Bié dānxīn, wǒ míngtiān jiù huílai.",
        "german": "Keine Sorge, ich bin morgen wieder da."
      },
      {
        "chinese": "你们别在教室里吃东西。",
        "pinyin": "Nǐmen bié zài jiàoshì li chī dōngxi.",
        "german": "Esst bitte nicht im Klassenzimmer."
      },
      {
        "chinese": "别哭了，我们再想想办法。",
        "pinyin": "Bié kū le, wǒmen zài xiǎngxiang bànfǎ.",
        "german": "Hör auf zu weinen, wir überlegen uns noch etwas."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "别",
      "distractors": [
        {
          "text": "没",
          "reason": "没 verneint, was (nicht) geschehen ist; eine Bitte „esst nicht“ verlangt 别."
        },
        {
          "text": "不",
          "reason": "不 verneint Aussagen und Gewohnheiten („ihr esst nicht“), keine Aufforderung."
        },
        {
          "text": "不用",
          "reason": "不用 heißt „ihr braucht nicht“ – das ist kein Verbot."
        }
      ],
      "accepted": [
        "不要"
      ]
    },
    "related": [
      "g:不要",
      "g:否定副词@HSK1",
      "g:祈使句：用“别”的祈使句",
      "g:不用",
      "g:别人"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:再²",
    "pattern": "再²",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 89,
      "category": "词类",
      "categoryName": "副词",
      "item": "关联副词",
      "content": "再²、就¹"
    },
    "meaning": "erst …, dann (Handlung folgt später bzw. wird aufgeschoben)",
    "formation": "Handlung 1 / Bedingung (+ 了/以后)，(Subjekt +) 再 + Handlung 2",
    "notes": "再¹ (HSK1) bedeutet „noch einmal, wieder“ (请再说一遍). Mit 先 (xiān) entsteht der Rahmen 先……再…… „zuerst …, dann …“ (HSK3). 又 (yòu) „schon wieder“ bezieht sich auf bereits Geschehenes.",
    "explanation": "Als verbindendes Adverb sagt 再 (zài), dass eine Handlung erst nach einer anderen oder erst unter einer bestimmten Bedingung geschehen soll: 吃了饭再走 „erst essen, dann gehen“, 你到了再给我打电话 „ruf mich an, wenn du angekommen bist“. Oft schiebt man damit etwas auf: 明天再说吧 „reden wir morgen darüber“. 再 steht im zweiten Teil nach dem Subjekt direkt vor dem Verb. Es bezieht sich auf Geplantes oder Künftiges; für Vergangenes sagt man 就 oder 才: 他吃了饭就走了.",
    "examples": [
      {
        "chinese": "我们吃了饭再去看电影吧。",
        "pinyin": "Wǒmen chī le fàn zài qù kàn diànyǐng ba.",
        "german": "Lass uns erst essen und dann ins Kino gehen."
      },
      {
        "chinese": "你到了北京再给我打电话。",
        "pinyin": "Nǐ dào le Běijīng zài gěi wǒ dǎ diànhuà.",
        "german": "Ruf mich an, wenn du in Peking angekommen bist."
      },
      {
        "chinese": "这个问题太难了，明天再说吧。",
        "pinyin": "Zhège wèntí tài nán le, míngtiān zài shuō ba.",
        "german": "Die Frage ist zu schwierig, reden wir morgen darüber."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "再",
      "distractors": [
        {
          "text": "又",
          "reason": "又 bezieht sich auf bereits Geschehenes („schon wieder“), nicht auf einen Plan für später."
        },
        {
          "text": "还",
          "reason": "还 „noch, außerdem“ fügt etwas hinzu, legt aber keine Reihenfolge „erst …, dann …“ fest."
        },
        {
          "text": "已经",
          "reason": "已经 „schon“ beschreibt Eingetretenes und passt nicht zu einem Vorschlag mit 吧."
        }
      ]
    },
    "related": [
      "g:再¹",
      "g:先……，再/然后……",
      "g:就¹",
      "g:又"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:就¹",
    "pattern": "就¹",
    "level": "HSK2",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 89,
      "category": "词类",
      "categoryName": "副词",
      "item": "关联副词",
      "content": "再²、就¹"
    },
    "meaning": "dann, gleich danach (verbindet Bedingung oder erste Handlung mit der Folge)",
    "pinyin": "jiù + Verb",
    "examples": [
      {
        "chinese": "他每天下了班就回家。",
        "pinyin": "Tā měi tiān xià le bān jiù huí jiā.",
        "german": "Er geht jeden Tag gleich nach Feierabend nach Hause."
      },
      {
        "chinese": "你有问题就问老师。",
        "pinyin": "Nǐ yǒu wèntí jiù wèn lǎoshī.",
        "german": "Wenn du Fragen hast, frag den Lehrer."
      },
      {
        "chinese": "天气不好，我们就在家看电视吧。",
        "pinyin": "Tiānqì bù hǎo, wǒmen jiù zài jiā kàn diànshì ba.",
        "german": "Das Wetter ist schlecht, dann bleiben wir eben zu Hause und sehen fern."
      }
    ],
    "legacyIds": [
      "g:就 + Verb",
      "就 + Verb"
    ],
    "formation": "Handlung 1 / Bedingung，Subjekt + 就 + Verb (Folge)",
    "notes": "Feste Rahmen mit 就: 一……就…… (HSK2), 如果 (rúguǒ)……就…… und 只要 (zhǐyào)……就…… (HSK3). Weitere Gebräuche sind eigene Punkte: 就² (HSK2) betont „genau, eben“ (这就是我家); ab HSK3 folgen u. a. „nur“ und die Betonung, dass etwas früh oder schnell geschieht (他六点就起床了); 就⁶ (HSK7–9) ist eine Präposition „bezüglich“.",
    "explanation": "Als verbindendes Adverb steht 就 (jiù) im zweiten Teil vor dem Verb und knüpft an das Vorhergehende an. (1) Zeitliche Abfolge: Die zweite Handlung folgt unmittelbar auf die erste: 他下了班就回家 „gleich nach Feierabend geht er nach Hause“. (2) Bedingung und Folge: 你有问题就问我 „wenn du Fragen hast, (dann) frag mich“. Anders als 再 (zài) kann 就 auch Vergangenes verbinden (他吃了饭就走了). Typischer Fehler: 就 vor das Subjekt stellen – richtig ist 天气不好，我们就……, nicht 就我们…….",
    "quiz": {
      "example": 0,
      "answer": "就",
      "distractors": [
        {
          "text": "又",
          "reason": "又 „schon wieder“ beschreibt eine Wiederholung, keine unmittelbare Folge nach Feierabend."
        },
        {
          "text": "还",
          "reason": "还 „noch, außerdem“ fügt etwas hinzu, schließt aber nicht „gleich danach“ an."
        },
        {
          "text": "正",
          "reason": "正 „gerade“ beschreibt eine laufende Handlung, keine Folge auf 下了班."
        }
      ]
    },
    "related": [
      "g:再²",
      "g:一……就……",
      "g:如果……，就……",
      "g:只要……，就……",
      "g:要/快要/就要……了"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:语气副词@HSK2",
    "pattern": "语气副词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 90,
      "category": "词类",
      "categoryName": "副词",
      "item": "语气副词",
      "content": "都²、就²、还是¹"
    },
    "words": [
      "都²",
      "就²",
      "还是¹"
    ],
    "meaning": "Modaladverbien: schon (Ungeduld), genau/eben, doch lieber",
    "notes": "Die Grundbedeutungen sind eigene Punkte: 都¹ „alle“ (HSK1), 就¹ „dann, gleich“ (HSK2), 还是 (háishi) „oder“ in Fragen (还是², HSK2). Zu 都……了 und 还是……吧 gibt es eigene Satzmuster-Punkte.",
    "explanation": "Modaladverbien stehen vor dem Prädikat und färben den Satz gefühlsmäßig oder betonen etwas; die Grundbedeutung des Satzes bleibt gleich.\n都 (dōu) – „schon (!)“ mit 了 am Ende: Sprecher findet etwas spät, viel oder überraschend: 都十二点了 „es ist ja schon zwölf!“\n就 (jiù) – „genau, eben, nun mal“: betont, dass es genau das und nichts anderes ist: 这就是我家, 我就要这个\n还是 (háishi) – „doch lieber, besser“: Empfehlung nach Abwägung, oft mit 吧 am Ende: 你还是去医院吧; auch „immer noch, trotzdem“: 他还是那么忙",
    "examples": [
      {
        "chinese": "都十二点了，你快睡觉吧。",
        "pinyin": "Dōu shí'èr diǎn le, nǐ kuài shuìjiào ba.",
        "german": "Es ist schon zwölf, geh endlich schlafen."
      },
      {
        "chinese": "都八点了，他还没起床。",
        "pinyin": "Dōu bā diǎn le, tā hái méi qǐchuáng.",
        "german": "Es ist schon acht, und er ist immer noch nicht aufgestanden."
      },
      {
        "chinese": "这就是我常说的那家饭店。",
        "pinyin": "Zhè jiù shì wǒ cháng shuō de nà jiā fàndiàn.",
        "german": "Das ist genau das Restaurant, von dem ich immer erzähle."
      },
      {
        "chinese": "我就喜欢这件衣服，别的我都不要。",
        "pinyin": "Wǒ jiù xǐhuan zhè jiàn yīfu, biéde wǒ dōu bú yào.",
        "german": "Mir gefällt eben genau dieses Teil, die anderen will ich alle nicht."
      },
      {
        "chinese": "外边太冷了，我们还是坐出租车吧。",
        "pinyin": "Wàibian tài lěng le, wǒmen háishi zuò chūzūchē ba.",
        "german": "Draußen ist es zu kalt, nehmen wir lieber ein Taxi."
      }
    ],
    "related": [
      "g:都……了",
      "g:还是……吧",
      "g:都¹",
      "g:就¹",
      "g:语气副词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:从¹",
    "pattern": "从¹",
    "level": "HSK2",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 91,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出时间、处所",
      "content": "从¹"
    },
    "meaning": "von, aus, ab (Ausgangspunkt in Ort oder Zeit)",
    "pinyin": "cóng + Ort/Zeit",
    "examples": [
      {
        "chinese": "我刚从图书馆回来。",
        "pinyin": "Wǒ gāng cóng túshūguǎn huílai.",
        "german": "Ich komme gerade aus der Bibliothek zurück."
      },
      {
        "chinese": "我们从明天开始放假。",
        "pinyin": "Wǒmen cóng míngtiān kāishǐ fàngjià.",
        "german": "Ab morgen haben wir Ferien."
      },
      {
        "chinese": "从我家到公司要坐四十分钟地铁。",
        "pinyin": "Cóng wǒ jiā dào gōngsī yào zuò sìshí fēnzhōng dìtiě.",
        "german": "Von mir zu Hause bis zur Firma fahre ich vierzig Minuten mit der U-Bahn."
      },
      {
        "chinese": "我从朋友那儿借了一本书。",
        "pinyin": "Wǒ cóng péngyou nàr jiè le yì běn shū.",
        "german": "Ich habe mir bei einem Freund ein Buch geliehen."
      }
    ],
    "legacyIds": [
      "g:从...到...",
      "从...到...",
      "g:从 + Ort/Zeit",
      "从 + Ort/Zeit"
    ],
    "formation": "从 + Ort/Zeit (+ 到 + Ort/Zeit) + Verb",
    "notes": "从² (HSK2) nennt den Weg einer Bewegung („durch, über“: 从这个门进去). 从……起 (HSK3) „ab“; 自从 (zìcóng) (HSK5) „seit“ für Vergangenes; das Adverb 从来 (cónglái) (HSK4) „schon immer / noch nie“.",
    "explanation": "从 (cóng) nennt den Ausgangspunkt: örtlich „von, aus“ (我从北京来 „ich komme aus Peking“), zeitlich „ab, seit“ (从明天开始 „ab morgen“). Zusammen mit 到 (dào) gibt es einen Bereich an: 从八点到十二点 „von acht bis zwölf“, 从我家到公司 „von mir zu Hause bis zur Firma“. Die 从-Gruppe steht vor dem Verb. Ist der Ausgangspunkt eine Person oder ein Gegenstand, braucht man ein Ortswort: 从朋友那儿借书 „sich bei einem Freund ein Buch leihen“, 从桌子上拿, nicht 从朋友借.",
    "quiz": {
      "example": 1,
      "answer": "从",
      "distractors": [
        {
          "text": "在",
          "reason": "在 nennt einen Zeitpunkt oder Ort; den Beginn „ab morgen“ mit 开始 drückt 从 aus."
        },
        {
          "text": "往",
          "reason": "往 gibt eine Bewegungsrichtung an („nach“), keinen zeitlichen Anfang."
        },
        {
          "text": "离",
          "reason": "离 misst einen Abstand („von … entfernt“), nennt aber keinen Anfangspunkt."
        }
      ]
    },
    "related": [
      "g:从²",
      "g:从……起",
      "g:在（引出时间、处所）",
      "g:自从",
      "g:往"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:往",
    "pattern": "往",
    "level": "HSK2",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 92,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出方向、路径",
      "content": "往"
    },
    "meaning": "nach, in Richtung (Richtung einer Bewegung)",
    "formation": "往 + Richtung/Ort + Verb  ·  (formell) Verb + 往 + Ort",
    "notes": "向 (xiàng, HSK3) wird ähnlich gebraucht (向前走), kann aber auch vor Personen stehen (向老师问好); 往 bezieht sich auf die Richtung einer Bewegung. 往往 (wǎngwǎng) (HSK4) „oft, meistens“ ist ein anderes Wort.",
    "explanation": "往 (wǎng) gibt die Richtung einer Bewegung an: 往前走 „geradeaus gehen“, 往左走 „nach links gehen“. Danach stehen meist Richtungswörter (前、后、左、右、上、下、东、西、南、北) oder Ortsangaben (往学校那边走 „in Richtung Schule gehen“). Die 往-Gruppe steht vor dem Verb. Nach einigen Verben wie 开 oder 飞 steht 往 hinter dem Verb: 开往上海的火车 „der Zug nach Shanghai“ – formell, typisch für Schilder und Durchsagen. 往 nennt nur die Richtung; wer ein Ziel erreicht, braucht 到 oder 去: 去火车站 „zum Bahnhof fahren“.",
    "examples": [
      {
        "chinese": "你往前走，银行就在右边。",
        "pinyin": "Nǐ wǎng qián zǒu, yínháng jiù zài yòubian.",
        "german": "Geh geradeaus, die Bank ist dann rechts."
      },
      {
        "chinese": "下了车往东走五分钟就到了。",
        "pinyin": "Xià le chē wǎng dōng zǒu wǔ fēnzhōng jiù dào le.",
        "german": "Nach dem Aussteigen gehst du fünf Minuten nach Osten, dann bist du da."
      },
      {
        "chinese": "这是开往上海的火车。",
        "pinyin": "Zhè shì kāiwǎng Shànghǎi de huǒchē.",
        "german": "Das ist der Zug nach Shanghai."
      },
      {
        "chinese": "请大家往后看。",
        "pinyin": "Qǐng dàjiā wǎng hòu kàn.",
        "german": "Schaut bitte alle nach hinten."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "往",
      "distractors": [
        {
          "text": "从",
          "reason": "从 nennt einen Ausgangspunkt oder Weg („von, durch“), nicht die Richtung „nach vorne“."
        },
        {
          "text": "在",
          "reason": "在 nennt den Ort, an dem etwas geschieht; eine Gehrichtung gibt es nicht an."
        },
        {
          "text": "到",
          "reason": "到 bezeichnet ein Ziel, das man erreicht; „nach vorne gehen“ verlangt 往."
        }
      ],
      "accepted": [
        "向"
      ]
    },
    "related": [
      "g:从²",
      "g:向²",
      "g:从¹",
      "g:往往"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:从²",
    "pattern": "从²",
    "level": "HSK2",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 93,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出方向、路径",
      "content": "从²"
    },
    "meaning": "durch, über, an … vorbei (Weg einer Bewegung)",
    "formation": "从 + Ort (Durchgang/Weg) + Bewegungsverb (+ Richtungsergänzung)",
    "notes": "从¹ (HSK2) nennt den Ausgangspunkt in Ort oder Zeit (从北京来, 从明天开始). 往 (wǎng) gibt dagegen die Richtung an („nach, in Richtung“). Für „entlang“ sagt man 沿着 (yánzhe) (HSK5).",
    "explanation": "In diesem Gebrauch nennt 从 (cóng) nicht den Ausgangspunkt, sondern den Weg oder die Stelle, durch die bzw. über die eine Bewegung führt: 从这个门进去 „durch diese Tür hineingehen“, 从后门出去 „durch die Hintertür hinausgehen“, 从公园走过去 „durch den Park gehen“. Danach folgen Bewegungsverben, oft mit Richtungsergänzung (进来 (jìnlai)、出去 (chūqu)、过去 (guòqu)). Im Deutschen entspricht das „durch“, „über“ oder „an … vorbei“. Die 从-Gruppe steht vor dem Verb.",
    "examples": [
      {
        "chinese": "你们从这个门进来吧。",
        "pinyin": "Nǐmen cóng zhège mén jìnlai ba.",
        "german": "Kommt durch diese Tür herein."
      },
      {
        "chinese": "我每天上班都从这个公园走过去。",
        "pinyin": "Wǒ měi tiān shàngbān dōu cóng zhège gōngyuán zǒu guòqu.",
        "german": "Auf dem Weg zur Arbeit gehe ich jeden Tag durch diesen Park."
      },
      {
        "chinese": "他从后门出去了。",
        "pinyin": "Tā cóng hòumén chūqu le.",
        "german": "Er ist durch die Hintertür hinausgegangen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "从",
      "distractors": [
        {
          "text": "往",
          "reason": "往 gibt nur eine Richtung an („in Richtung“); den Durchgang „durch die Tür“ nennt 从."
        },
        {
          "text": "在",
          "reason": "在 nennt den Ort, an dem man sich befindet, nicht den Weg einer Bewegung."
        },
        {
          "text": "到",
          "reason": "到 bezeichnet das Ziel; „durch die Tür herein“ verlangt 从."
        }
      ]
    },
    "related": [
      "g:从¹",
      "g:往",
      "g:向²",
      "g:沿（着）"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:给",
    "pattern": "给",
    "level": "HSK2",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 94,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出对象",
      "content": "给"
    },
    "meaning": "für, an (jemanden): Empfänger oder Nutznießer vor dem Verb",
    "formation": "Subjekt + 给 + Person + Verb (+ Objekt)",
    "explanation": "Als Präposition steht 给 (gěi) mit einer Person vor dem Verb und nennt, wem die Handlung gilt: den Empfänger („an“: 给朋友写信 „einem Freund schreiben“, 给你打电话 „dich anrufen“) oder den Nutznießer („für“: 妈妈给我做饭 „Mama kocht für mich“). Die 给-Gruppe steht nach dem Subjekt und vor dem Verb; Verneinung und Modalverben stehen vor 给: 我没给他打电话, 我想给你介绍一下. Typischer Fehler nach deutschem Muster: 打电话他 – richtig ist 给他打电话.",
    "notes": "给 ist auch Verb „geben“ (请给我一杯水); 给 hinter dem Verb (送给他, 借给我) ist ein eigener Punkt (HSK2). 对 (duì) nennt eine Haltung oder Sprechrichtung (对他很好, 对他说), 跟 (gēn) einen Partner („mit“).",
    "examples": [
      {
        "chinese": "我晚上给你打电话。",
        "pinyin": "Wǒ wǎnshang gěi nǐ dǎ diànhuà.",
        "german": "Ich rufe dich heute Abend an."
      },
      {
        "chinese": "妈妈每天给我们做早饭。",
        "pinyin": "Māma měi tiān gěi wǒmen zuò zǎofàn.",
        "german": "Mama macht uns jeden Tag Frühstück."
      },
      {
        "chinese": "他给女朋友买了一件衣服。",
        "pinyin": "Tā gěi nǚpéngyou mǎi le yí jiàn yīfu.",
        "german": "Er hat seiner Freundin ein Kleidungsstück gekauft."
      },
      {
        "chinese": "我来给大家介绍一下，这是王老师。",
        "pinyin": "Wǒ lái gěi dàjiā jièshào yíxià, zhè shì Wáng lǎoshī.",
        "german": "Darf ich vorstellen: Das ist Lehrer Wang."
      }
    ],
    "legacyIds": [
      "g:给 + Person + Verb",
      "给 + Person + Verb"
    ],
    "related": [
      "g:主语+动词+给+宾语1+宾语2",
      "g:对",
      "g:跟¹",
      "g:和¹",
      "g:引出对象@HSK3"
    ],
    "quiz": {
      "example": 0,
      "answer": "给",
      "distractors": [
        {
          "text": "对",
          "reason": "对 drückt eine Haltung oder Sprechrichtung aus („gegenüber“); wen man anruft, nennt 给."
        },
        {
          "text": "从",
          "reason": "从 nennt einen Ausgangspunkt („von“), nicht den Empfänger eines Anrufs."
        },
        {
          "text": "往",
          "reason": "往 gibt die Richtung einer Bewegung an und steht nicht vor einer Person als Empfänger."
        }
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:比",
    "pattern": "比",
    "level": "HSK2",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 95,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出对象",
      "content": "比"
    },
    "meaning": "als (Präposition: führt das Vergleichsobjekt ein)",
    "formation": "A + 比 + B + Adjektiv/Verbgruppe",
    "explanation": "比 (bǐ) führt das Vergleichsobjekt ein: A 比 B 高 „A ist größer als B“. Das Adjektiv steht in der Grundform – das Chinesische hat keinen Komparativ. Vor dem Adjektiv steht kein 很 oder 非常 (fēicháng): nicht 他比我很高. Wie groß der Unterschied ist, sagt man nach dem Adjektiv (大一点儿, 大三岁). Der Vergleich kann auch Verbgruppen betreffen (坐地铁比坐出租车便宜) oder mit 得 stehen (他跑得比我快). Die übliche Verneinung ist 没有 (méiyǒu): 我没有他高 „ich bin nicht so groß wie er“.",
    "notes": "Die Satzmuster mit 比 sind eigene Punkte: das Grundmuster „A 比 B + Adjektiv“, mit Differenzangabe (高一点儿, 高多了), mit 得 (alle HSK2), mit 更/还 und die Verneinung mit 不比 (bùbǐ) (HSK3). A 不比 B 高 heißt „A ist nicht größer als B“ – nicht dasselbe wie 没有 (méiyǒu) „nicht so groß wie“.",
    "examples": [
      {
        "chinese": "我妹妹比我高。",
        "pinyin": "Wǒ mèimei bǐ wǒ gāo.",
        "german": "Meine jüngere Schwester ist größer als ich."
      },
      {
        "chinese": "坐地铁比坐出租车便宜。",
        "pinyin": "Zuò dìtiě bǐ zuò chūzūchē piányi.",
        "german": "U-Bahn fahren ist billiger als Taxi fahren."
      },
      {
        "chinese": "这个房间比那个房间大一点儿。",
        "pinyin": "Zhège fángjiān bǐ nàge fángjiān dà yìdiǎnr.",
        "german": "Dieses Zimmer ist ein bisschen größer als das andere."
      },
      {
        "chinese": "他汉语说得比我好。",
        "pinyin": "Tā Hànyǔ shuō de bǐ wǒ hǎo.",
        "german": "Er spricht besser Chinesisch als ich."
      }
    ],
    "legacyIds": [
      "比"
    ],
    "related": [
      "g:A比B+形容词",
      "g:A比B+形容词+数量补语/程度补语",
      "g:A比B+动词+得+形容词/A+动词+得+比+B+形容词",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:A比B+更/还+形容词",
      "g:A不比B+形容词"
    ],
    "quiz": {
      "example": 0,
      "answer": "比",
      "distractors": [
        {
          "text": "跟",
          "reason": "跟 verlangt 一样 und drückt Gleichheit aus („so groß wie“), nicht „größer als“."
        },
        {
          "text": "没有",
          "reason": "没有 bedeutet „nicht so … wie“ – das Gegenteil von „größer als“."
        },
        {
          "text": "对",
          "reason": "对 nennt eine Bezugsperson („gegenüber“) und leitet keinen Vergleich ein."
        }
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:跟¹",
    "pattern": "跟¹",
    "level": "HSK2",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 96,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出对象",
      "content": "跟¹"
    },
    "meaning": "mit, zu, bei (Gegenüber einer Handlung, gesprochen)",
    "formation": "Subjekt + 跟 + Person (+ 一起) + Verb",
    "notes": "跟² (HSK2) ist das Bindewort „und“ zwischen Nomen (我跟他都是学生). Als Verb heißt 跟 „folgen“ (跟我来). 跟……一样 (yíyàng) „genauso wie“ ist ein eigener Punkt (HSK3).",
    "explanation": "Als Präposition steht 跟 (gēn) mit einer Person vor dem Verb und nennt das Gegenüber der Handlung: den Partner („mit“: 我跟朋友一起去, 跟他见面), den Angesprochenen („zu“: 你跟老师说一下 „sag es dem Lehrer“) oder die Quelle („bei, von“: 我跟她学中文 „ich lerne bei ihr Chinesisch“, 跟朋友借钱 „sich von Freunden Geld leihen“). In der Bedeutung „mit“ entspricht es 和 (hé), klingt aber gesprochener. Verneinung und Modalverben stehen vor 跟: 我不想跟他说话.",
    "examples": [
      {
        "chinese": "周末我跟朋友一起去爬山。",
        "pinyin": "Zhōumò wǒ gēn péngyou yìqǐ qù páshān.",
        "german": "Am Wochenende gehe ich mit Freunden wandern."
      },
      {
        "chinese": "这件事你跟老师说了吗？",
        "pinyin": "Zhè jiàn shì nǐ gēn lǎoshī shuō le ma?",
        "german": "Hast du das dem Lehrer schon gesagt?"
      },
      {
        "chinese": "我想跟你学做中国菜。",
        "pinyin": "Wǒ xiǎng gēn nǐ xué zuò Zhōngguó cài.",
        "german": "Ich möchte bei dir lernen, chinesisch zu kochen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "跟",
      "distractors": [
        {
          "text": "给",
          "reason": "给 nennt einen Empfänger („für“); „mit Freunden zusammen“ verlangt 跟."
        },
        {
          "text": "对",
          "reason": "对 drückt eine Haltung oder Richtung aus („gegenüber“), keine Begleitung."
        },
        {
          "text": "比",
          "reason": "比 leitet einen Vergleich ein und passt nicht zu 一起 „zusammen“."
        }
      ],
      "accepted": [
        "和"
      ]
    },
    "related": [
      "g:跟²",
      "g:和¹",
      "g:对",
      "g:给",
      "g:A跟B一样+形容词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:因为¹",
    "pattern": "因为¹",
    "level": "HSK2",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 97,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出原因",
      "content": "因为¹"
    },
    "meaning": "wegen (Präposition vor einem Nomen)",
    "formation": "因为 + Nomen/Nominalgruppe，Satz  ·  Subjekt + 因为 + Nomen + Verb",
    "notes": "Als Konjunktion steht 因为 (yīnwèi) vor einem ganzen Satz (因为², HSK2), oft mit 所以 (suǒyǐ): 因为下雨，所以我没去. Nicht verwechseln mit 为了 (wèile) (HSK3) „um … zu, für“, das einen Zweck nennt, keinen Grund.",
    "explanation": "Als Präposition steht 因为 (yīnwèi) vor einem Nomen oder einer Nominalgruppe und nennt den Grund: 因为这件事 „wegen dieser Sache“. Die Gruppe steht am Satzanfang oder nach dem Subjekt vor dem Verb: 他因为工作很少回家 „wegen der Arbeit kommt er selten nach Hause“. Anders als bei der Konjunktion 因为² folgt kein vollständiger Satz mit eigenem Prädikat, und 所以 (suǒyǐ) steht meist nicht dabei. Formeller ist 由于 (yóuyú) (HSK4).",
    "examples": [
      {
        "chinese": "因为这件事，他们很长时间没说话。",
        "pinyin": "Yīnwèi zhè jiàn shì, tāmen hěn cháng shíjiān méi shuōhuà.",
        "german": "Wegen dieser Sache haben sie lange nicht miteinander geredet."
      },
      {
        "chinese": "他因为工作很少回家。",
        "pinyin": "Tā yīnwèi gōngzuò hěn shǎo huí jiā.",
        "german": "Wegen der Arbeit kommt er selten nach Hause."
      },
      {
        "chinese": "我们因为一个小问题等了两个小时。",
        "pinyin": "Wǒmen yīnwèi yí ge xiǎo wèntí děng le liǎng ge xiǎoshí.",
        "german": "Wegen eines kleinen Problems haben wir zwei Stunden gewartet."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "因为",
      "distractors": [
        {
          "text": "所以",
          "reason": "所以 leitet die Folge ein („deshalb“), nicht den Grund."
        },
        {
          "text": "虽然",
          "reason": "虽然 „obwohl“ leitet ein Zugeständnis ein, keinen Grund."
        },
        {
          "text": "从",
          "reason": "从 nennt einen Ausgangspunkt („von“); „wegen der Arbeit“ verlangt 因为."
        }
      ],
      "accepted": [
        "由于"
      ]
    },
    "related": [
      "g:因为……，所以……",
      "g:由于¹",
      "g:为了",
      "g:连接分句或者句子@HSK2"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:跟²",
    "pattern": "跟²",
    "level": "HSK2",
    "kind": "word",
    "category": "Konjunktionen",
    "syllabus": {
      "no": 98,
      "category": "词类",
      "categoryName": "连词",
      "item": "连接词或短语",
      "content": "跟²"
    },
    "meaning": "und (Bindewort zwischen Nomen, gesprochen)",
    "formation": "Nomen/Pronomen + 跟 + Nomen/Pronomen",
    "notes": "跟¹ (HSK2) ist die Präposition „mit, zu, bei“. 跟……一样 (yíyàng) „genauso wie“ folgt in HSK3. Zwischen mehr als zwei Gliedern steht 跟 meist nur vor dem letzten: 我、你跟他.",
    "explanation": "Als Bindewort verbindet 跟 (gēn) wie 和 (hé) zwei Nomen oder Pronomen: 我跟他都是北京人 „er und ich kommen beide aus Peking“. Es klingt gesprochener als 和; 与 (yǔ) ist schriftsprachlich. Beide Teile sind gleichrangig und lassen sich vertauschen; oft folgt 都 „beide, alle“. Ganze Sätze verbindet 跟 nicht. Unterschied zur Präposition 跟¹: Beim Bindewort stehen Verneinung und Adverbien nach der ganzen Gruppe (我跟他都不去), bei der Präposition vor 跟 (我不跟他去 „ich gehe nicht mit ihm“).",
    "examples": [
      {
        "chinese": "我跟我妹妹都喜欢唱歌。",
        "pinyin": "Wǒ gēn wǒ mèimei dōu xǐhuan chàng gē.",
        "german": "Meine Schwester und ich singen beide gern."
      },
      {
        "chinese": "桌子上有一本书跟一个手机。",
        "pinyin": "Zhuōzi shang yǒu yì běn shū gēn yí ge shǒujī.",
        "german": "Auf dem Tisch liegen ein Buch und ein Handy."
      },
      {
        "chinese": "爸爸跟妈妈明天来看我。",
        "pinyin": "Bàba gēn māma míngtiān lái kàn wǒ.",
        "german": "Papa und Mama besuchen mich morgen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "跟",
      "distractors": [
        {
          "text": "也",
          "reason": "也 „auch“ ist ein Adverb vor dem Verb und verbindet keine Nomen."
        },
        {
          "text": "还",
          "reason": "还 „außerdem“ steht vor Verben, nicht zwischen zwei Nomen."
        },
        {
          "text": "或者",
          "reason": "或者 „oder“ passt nicht zu 都 „beide“."
        }
      ],
      "accepted": [
        "和"
      ]
    },
    "related": [
      "g:跟¹",
      "g:和²",
      "g:A跟B一样+形容词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:连接分句或者句子@HSK2",
    "pattern": "连接分句或者句子",
    "level": "HSK2",
    "kind": "overview",
    "category": "Konjunktionen",
    "syllabus": {
      "no": 99,
      "category": "词类",
      "categoryName": "连词",
      "item": "连接分句或者句子",
      "content": "但、但是、那、虽然、还是²、因为²、所以"
    },
    "words": [
      "但",
      "但是",
      "那",
      "虽然",
      "还是²",
      "因为²",
      "所以"
    ],
    "meaning": "Bindewörter zwischen Sätzen: aber, obwohl, weil, deshalb, oder, dann",
    "notes": "Anders als im Deutschen stehen „obwohl … aber“ und „weil … deshalb“ im Chinesischen oft zusammen. Als Präposition „wegen“ vor einem Nomen ist 因为 (yīnwèi) ein eigener Punkt (因为¹).",
    "explanation": "Diese Bindewörter verknüpfen Teilsätze oder Sätze. Häufig stehen sie paarweise („obwohl … aber“, „weil … deshalb“). Im ersten Teil stehen die Wörter für „obwohl“ und „weil“ vor oder nach dem Subjekt, „aber“ und „deshalb“ am Anfang des zweiten Teils.\n但 (dàn) / 但是 (dànshì) – „aber“; 但 ist kürzer und etwas schriftlicher\n那 (nà) – „dann, in dem Fall“: zieht eine Folgerung aus dem Gesagten, oft mit 就: 那就……吧\n虽然 (suīrán) – „obwohl“, meist mit 但是 oder 可是 (kěshì) im zweiten Teil\n还是 (háishi) – „oder“ in Alternativfragen (A还是B？); in Aussagen steht 或者 (huòzhě)\n因为 (yīnwèi) – „weil“ vor einem Satz\n所以 (suǒyǐ) – „deshalb, darum“: nennt die Folge",
    "examples": [
      {
        "chinese": "这件衣服很好看，但是太贵了。",
        "pinyin": "Zhè jiàn yīfu hěn hǎokàn, dànshì tài guì le.",
        "german": "Das Kleidungsstück sieht gut aus, ist aber zu teuer."
      },
      {
        "chinese": "虽然今天很冷，但是孩子们都想出去玩儿。",
        "pinyin": "Suīrán jīntiān hěn lěng, dànshì háizimen dōu xiǎng chūqu wánr.",
        "german": "Obwohl es heute kalt ist, wollen alle Kinder draußen spielen."
      },
      {
        "chinese": "你喝茶还是喝咖啡？",
        "pinyin": "Nǐ hē chá háishi hē kāfēi?",
        "german": "Trinkst du Tee oder Kaffee?"
      },
      {
        "chinese": "因为昨天晚上睡得太晚，所以我今天很累。",
        "pinyin": "Yīnwèi zuótiān wǎnshang shuì de tài wǎn, suǒyǐ wǒ jīntiān hěn lèi.",
        "german": "Weil ich gestern zu spät ins Bett gegangen bin, bin ich heute sehr müde."
      },
      {
        "chinese": "你不舒服，那就在家休息吧。",
        "pinyin": "Nǐ bù shūfu, nà jiù zài jiā xiūxi ba.",
        "german": "Wenn es dir nicht gut geht, dann ruh dich zu Hause aus."
      },
      {
        "chinese": "他生病了，所以没来上课。",
        "pinyin": "Tā shēngbìng le, suǒyǐ méi lái shàngkè.",
        "german": "Er ist krank, deshalb ist er nicht zum Unterricht gekommen."
      }
    ],
    "related": [
      "g:虽然……，但是……",
      "g:因为……，所以……",
      "g:疑问句：用“还是”连接的选择问句",
      "g:（是）……，还是……",
      "g:因为¹"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:得",
    "pattern": "得",
    "level": "HSK2",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 100,
      "category": "词类",
      "categoryName": "助词",
      "item": "结构助词",
      "content": "得、地"
    },
    "meaning": "Strukturpartikel nach dem Verb: leitet eine Bewertung von Art oder Grad ein",
    "formation": "Verb/Adjektiv + 得 + Ergänzung (Bewertung, Grad)",
    "explanation": "Die Partikel 得 (de, neutraler Ton) steht direkt nach einem Verb oder Adjektiv und leitet eine Ergänzung ein, die beschreibt oder bewertet, wie eine Handlung abläuft oder welchen Grad etwas erreicht: 他说得很好 „er spricht sehr gut“, 你来得太晚了 „du kommst zu spät“. Die Ergänzung ist meist eine Adjektivgruppe (很好、太快、不错 (búcuò)). Hat das Verb ein Objekt, wird das Verb wiederholt oder das Objekt vorangestellt: 他说汉语说得很好 / 他汉语说得很好, nicht 他说汉语得很好. Verneint wird die Ergänzung: 说得不好. Merkhilfe: 的 vor Nomen, 地 vor Verben, 得 nach Verben.",
    "notes": "Dasselbe Zeichen ist auch das Modalverb 得 (děi) „müssen“ (HSK3) und das Verb 得 (dé) „bekommen“ (得到 (dédào)). Mit 得 werden in HSK3 auch Möglichkeitsergänzungen gebildet (看得见 (kàn de jiàn) „sehen können“).",
    "examples": [
      {
        "chinese": "你汉语说得真好！",
        "pinyin": "Nǐ Hànyǔ shuō de zhēn hǎo!",
        "german": "Du sprichst wirklich gut Chinesisch!"
      },
      {
        "chinese": "他今天起得很早。",
        "pinyin": "Tā jīntiān qǐ de hěn zǎo.",
        "german": "Er ist heute sehr früh aufgestanden."
      },
      {
        "chinese": "我昨天晚上睡得不太好。",
        "pinyin": "Wǒ zuótiān wǎnshang shuì de bú tài hǎo.",
        "german": "Ich habe letzte Nacht nicht so gut geschlafen."
      },
      {
        "chinese": "她跑得比我快。",
        "pinyin": "Tā pǎo de bǐ wǒ kuài.",
        "german": "Sie läuft schneller als ich."
      }
    ],
    "legacyIds": [
      "g:得 (Grad-/Artangabe)",
      "得 (Grad-/Artangabe)"
    ],
    "quiz": {
      "example": 1,
      "answer": "得",
      "distractors": [
        {
          "text": "的",
          "reason": "的 verbindet ein Attribut mit einem Nomen (我的书); nach einem Verb vor einer Bewertung steht 得."
        },
        {
          "text": "地",
          "reason": "地 steht vor dem Verb (认真地学习), nicht dahinter."
        },
        {
          "text": "了",
          "reason": "了 kann nach dem Verb stehen, leitet aber keine Bewertung wie 很早 ein."
        }
      ]
    },
    "related": [
      "g:动词+得+形容词性短语",
      "g:地",
      "g:的¹",
      "g:A比B+动词+得+形容词/A+动词+得+比+B+形容词",
      "g:动词+得/不+动词/形容词",
      "g:得（能愿动词）"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:地",
    "pattern": "地",
    "level": "HSK2",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 100,
      "category": "词类",
      "categoryName": "助词",
      "item": "结构助词",
      "content": "得、地"
    },
    "meaning": "Strukturpartikel vor dem Verb: beschreibt, wie jemand handelt",
    "formation": "Adjektiv/Beschreibung + 地 + Verb",
    "explanation": "Die Partikel 地 (de, neutraler Ton) verbindet eine beschreibende Angabe mit dem folgenden Verb und sagt, wie jemand etwas tut: 高兴地说 „fröhlich sagen“, 认真地学习 „fleißig lernen“. Davor stehen meist zweisilbige Adjektive (认真 (rènzhēn) „ernsthaft“, 高兴 (gāoxìng) „fröhlich“), verdoppelte Adjektive (慢慢地走) oder Gruppen mit 很/非常 (很快地). Einsilbige Adjektive stehen meist ohne 地 direkt vor dem Verb (快走, 多吃); bei manchen zweisilbigen ist 地 freiwillig (认真学习). Unterschied zu 得: 地 steht vor dem Verb und beschreibt die Art des Handelns, 得 steht nach dem Verb und bewertet: 他慢慢地走过来 „er kommt langsam herüber“ (Art der Handlung) – 他走得很慢 „er geht langsam“ (Bewertung).",
    "notes": "Als Nomen wird 地 dì gelesen („Boden, Erde“: 地方 (dìfang), 地铁 (dìtiě)). Im Alltag schreiben viele Chinesen auch vor Verben 的; nach der Norm steht hier 地.",
    "examples": [
      {
        "chinese": "孩子们高兴地回家了。",
        "pinyin": "Háizimen gāoxìng de huí jiā le.",
        "german": "Die Kinder gingen fröhlich nach Hause."
      },
      {
        "chinese": "请大家认真地听。",
        "pinyin": "Qǐng dàjiā rènzhēn de tīng.",
        "german": "Hört bitte alle aufmerksam zu."
      },
      {
        "chinese": "爷爷慢慢地喝了一口茶。",
        "pinyin": "Yéye mànmàn de hē le yì kǒu chá.",
        "german": "Opa trank langsam einen Schluck Tee."
      }
    ],
    "legacyIds": [
      "g:地 (Adverbpartikel)",
      "地 (Adverbpartikel)"
    ],
    "quiz": {
      "example": 1,
      "answer": "地",
      "distractors": [
        {
          "text": "的",
          "reason": "的 verbindet nach der Norm ein Attribut mit einem Nomen; vor dem Verb 听 steht 地."
        },
        {
          "text": "得",
          "reason": "得 steht nach dem Verb und leitet eine Bewertung ein, nicht davor."
        },
        {
          "text": "了",
          "reason": "了 markiert Abgeschlossenes und passt nicht zwischen Art-Angabe und Verb in einer Bitte."
        }
      ]
    },
    "related": [
      "g:得",
      "g:的¹",
      "g:动词+得+形容词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:过",
    "pattern": "过",
    "level": "HSK2",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 101,
      "category": "词类",
      "categoryName": "助词",
      "item": "动态助词",
      "content": "过"
    },
    "meaning": "Erfahrung: etwas schon einmal getan oder erlebt haben",
    "formation": "Verb + 过 (+ Objekt); verneint: 没（有）+ Verb + 过",
    "explanation": "过 (guo, neutraler Ton) direkt nach dem Verb zeigt, dass jemand etwas mindestens einmal getan oder erlebt hat – im Deutschen meist „schon einmal“, verneint „noch nie“. Wann genau es war, spielt keine Rolle; es geht um die Erfahrung: 我去过中国 = „Ich war schon einmal in China“. Ein Objekt folgt nach 过, eine Häufigkeit oft davor: 去过两次 (qùguo liǎng cì) „schon zweimal dort gewesen“. Verneint wird mit 没 (méi) oder 没有 (méiyǒu), und 过 bleibt dabei stehen: 我没吃过 – anders als 了, das in der Verneinung wegfällt. Gefragt wird mit 吗 am Ende oder mit 没有 (méiyǒu) als Anhang: 你去过没有？ Typischer Fehler: 过 mit 不 verneinen (我不去过 ist falsch).",
    "notes": "Unterschied zu 了: 我去了北京 berichtet ein einzelnes Ereignis, 我去过北京 eine Erfahrung – man ist meist längst wieder zurück. Als Richtungskomplement („hinüber, vorbei“, mit vollem Ton guò) steht 过 nach Bewegungsverben, z. B. 走过 (zǒuguò) „vorbeigehen“ oder 跑过来 (pǎo guòlai) „herüberlaufen“; das ist ein eigener Punkt (HSK 2).",
    "examples": [
      {
        "chinese": "你吃过中国菜吗？",
        "pinyin": "Nǐ chīguo Zhōngguó cài ma?",
        "german": "Hast du schon mal chinesisch gegessen?"
      },
      {
        "chinese": "我去过两次上海。",
        "pinyin": "Wǒ qùguo liǎng cì Shànghǎi.",
        "german": "Ich war schon zweimal in Shanghai."
      },
      {
        "chinese": "她还没坐过飞机。",
        "pinyin": "Tā hái méi zuòguo fēijī.",
        "german": "Sie ist noch nie geflogen."
      },
      {
        "chinese": "我以前学过一点儿中文。",
        "pinyin": "Wǒ yǐqián xuéguo yìdiǎnr Zhōngwén.",
        "german": "Ich habe früher schon ein bisschen Chinesisch gelernt."
      }
    ],
    "legacyIds": [
      "过"
    ],
    "quiz": {
      "example": 2,
      "answer": "过",
      "distractors": [
        {
          "text": "了",
          "reason": "Nach 没 fällt 了 weg (没坐了 ist falsch); „noch nie“ verlangt die Erfahrungspartikel."
        },
        {
          "text": "着",
          "reason": "着 beschreibt einen andauernden Zustand, keine Erfahrung, die man noch nie gemacht hat."
        },
        {
          "text": "在",
          "reason": "Nach dem Verb verlangt 在 einen Ort (坐在飞机上 „im Flugzeug sitzen“); eine Erfahrung („noch nie“) drückt es nicht aus."
        }
      ]
    },
    "related": [
      "g:了¹",
      "g:着",
      "g:经历态：用动态助词“过”表示",
      "g:动词+上/下/进/出/过/回"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:着",
    "pattern": "着",
    "level": "HSK2",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 102,
      "category": "词类",
      "categoryName": "助词",
      "item": "动态助词",
      "content": "着"
    },
    "meaning": "Andauer eines Zustands (Aspektpartikel nach dem Verb)",
    "formation": "Verb + 着 (+ Objekt)",
    "explanation": "着 (zhe, neutraler Ton) direkt nach dem Verb zeigt, dass ein Zustand andauert – meist das Ergebnis einer Handlung, das bestehen bleibt: 门开着 = „Die Tür steht offen“, 她拿着一本书 = „Sie hält ein Buch (in der Hand)“. Typisch sind Verben für Haltung, Kleidung und Lage wie 坐 (zuò), 站 (zhàn), 穿 (chuān), 拿 (ná) und 开 (kāi). Seltener betont 着 eine laufende Handlung, dann oft mit 呢 am Satzende: 外面下着雨呢. Ein Objekt folgt nach 着. Verben ohne Dauer wie 来 oder 去 und Verben wie 是 oder 知道 (zhīdào) stehen nicht mit 着. Zum Vergleich: 在 vor dem Verb betont den Verlauf einer Handlung, 了 ihren Abschluss, 着 den Zustand. Verneint wird mit 没 (méi): 门没开着, häufiger sagt man aber einfach das Gegenteil (门关着).",
    "notes": "Eigene Punkte sind Ort + Verb + 着 + Nomen (桌子上放着一本书, HSK 2) und Verb 1 + 着 + Verb 2 für eine Begleithandlung (坐着说, HSK 3). Achtung: Als Verb oder Komplement liest man dasselbe Zeichen zháo, z. B. 睡着 (shuìzháo) „einschlafen“.",
    "examples": [
      {
        "chinese": "教室的门开着。",
        "pinyin": "Jiàoshì de mén kāizhe.",
        "german": "Die Tür des Klassenzimmers steht offen."
      },
      {
        "chinese": "她穿着一条红色的裙子。",
        "pinyin": "Tā chuānzhe yì tiáo hóngsè de qúnzi.",
        "german": "Sie trägt einen roten Rock."
      },
      {
        "chinese": "他手里拿着一本书。",
        "pinyin": "Tā shǒu li názhe yì běn shū.",
        "german": "Er hält ein Buch in der Hand."
      },
      {
        "chinese": "外面下着雨呢，带上伞吧。",
        "pinyin": "Wàimiàn xiàzhe yǔ ne, dàishang sǎn ba.",
        "german": "Draußen regnet es, nimm einen Schirm mit."
      }
    ],
    "legacyIds": [
      "g:Verb + 着",
      "Verb + 着"
    ],
    "related": [
      "g:在",
      "g:了¹",
      "g:过",
      "g:动词+着：（1）表示状态的持续",
      "g:处所+动词+着(+数量短语)+名词",
      "g:“着”表示动作的伴随：动词1+着+动词2"
    ],
    "quiz": {
      "example": 1,
      "answer": "着",
      "distractors": [
        {
          "text": "过",
          "reason": "过 hieße „hat schon einmal getragen“ – eine Erfahrung, nicht der Zustand im Moment."
        },
        {
          "text": "在",
          "reason": "Nach dem Verb verlangt 在 einen Ort (穿在身上); als Verlaufsform stünde 在 vor dem Verb."
        },
        {
          "text": "得",
          "reason": "得 leitet ein Komplement ein; danach folgt keine Mengenangabe mit Objekt wie 一条红色的裙子."
        }
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:语气助词@HSK2",
    "pattern": "语气助词",
    "level": "HSK2",
    "kind": "overview",
    "category": "Partikeln",
    "syllabus": {
      "no": 103,
      "category": "词类",
      "categoryName": "助词",
      "item": "语气助词",
      "content": "呢⁴、吧²、的²、啊¹"
    },
    "words": [
      "呢⁴",
      "吧²",
      "的²",
      "啊¹"
    ],
    "meaning": "Modalpartikeln: Bekräftigung, Vermutung, Gewissheit, Ausruf",
    "formation": "Satz + Modalpartikel (am Satzende, neutraler Ton)",
    "explanation": "HSK 2 ergänzt die Modalpartikeln am Satzende um vier Gebrauchsweisen. Alle werden im neutralen Ton gesprochen und sind typisch für die gesprochene Sprache.\n呢⁴ (ne) – im Aussagesatz: bekräftigt eine Tatsache, oft mit 还 („noch“) oder leicht übertreibend: 还早呢 = „Es ist doch noch früh.“\n吧² (ba) – Vermutung, die der Hörer bestätigen soll: 你是新同学吧？ = „Du bist neu hier, oder?“\n的² (de) – Gewissheit oder Zusage: 他会来的 = „Er kommt bestimmt.“\n啊¹ (a) – Ausruf, Aufforderung oder weichere Frage: 好冷啊！ = „Ist das kalt!“; nach manchen Silben verschmilzt es zu ya, wa oder na (auch 呀, 哇, 哪 geschrieben).",
    "examples": [
      {
        "chinese": "现在才七点，还早呢。",
        "pinyin": "Xiànzài cái qī diǎn, hái zǎo ne.",
        "german": "Es ist erst sieben Uhr, das ist doch noch früh."
      },
      {
        "chinese": "他还没回来呢。",
        "pinyin": "Tā hái méi huílai ne.",
        "german": "Er ist noch nicht zurück."
      },
      {
        "chinese": "你是新来的老师吧？",
        "pinyin": "Nǐ shì xīn lái de lǎoshī ba?",
        "german": "Sie sind die neue Lehrerin, oder?"
      },
      {
        "chinese": "别担心，他会来的。",
        "pinyin": "Bié dānxīn, tā huì lái de.",
        "german": "Keine Sorge, er kommt bestimmt."
      },
      {
        "chinese": "今天好冷啊！",
        "pinyin": "Jīntiān hǎo lěng a!",
        "german": "Ist das heute kalt!"
      }
    ],
    "related": [
      "g:语气助词@HSK1",
      "g:啊¹",
      "g:吧¹",
      "g:呢²",
      "g:吗",
      "g:还是……吧"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:啊¹",
    "pattern": "啊¹",
    "level": "HSK2",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 103,
      "category": "词类",
      "categoryName": "助词",
      "item": "语气助词",
      "content": "呢⁴、吧²、的²、啊¹"
    },
    "meaning": "Partikel am Satzende: Ausruf, drängende Aufforderung, weichere Frage",
    "pinyin": "…a",
    "examples": [
      {
        "chinese": "这儿的冬天多冷啊！",
        "pinyin": "Zhèr de dōngtiān duō lěng a!",
        "german": "Wie kalt der Winter hier ist!"
      },
      {
        "chinese": "你快来啊，电影要开始了！",
        "pinyin": "Nǐ kuài lái a, diànyǐng yào kāishǐ le!",
        "german": "Komm schnell, der Film fängt gleich an!"
      },
      {
        "chinese": "你怎么还不睡觉啊？",
        "pinyin": "Nǐ zěnme hái bú shuìjiào a?",
        "german": "Warum schläfst du denn immer noch nicht?"
      },
      {
        "chinese": "这个菜真好吃啊！",
        "pinyin": "Zhège cài zhēn hǎochī a!",
        "german": "Dieses Gericht ist wirklich lecker!"
      }
    ],
    "legacyIds": [
      "g:…啊",
      "…啊"
    ],
    "formation": "Satz + 啊 (Ausruf, Aufforderung, Frage)",
    "notes": "Als Interjektion am Satzanfang (啊，我知道了！ „Ah, jetzt weiß ich es!“) ist 啊 ein eigener Punkt (HSK 4). Zum Vergleich: 吧 macht aus einem Satz einen Vorschlag oder eine Vermutung, 啊 färbt ihn nur gefühlsmäßig.",
    "explanation": "啊 (a) am Satzende macht einen Satz gefühlsbetonter und wird im neutralen Ton gesprochen. In Ausrufen verstärkt es Staunen, Freude oder Ärger, oft zusammen mit 真 (zhēn), 好 (hǎo) oder 多 (duō): 这儿多漂亮啊！ In Aufforderungen klingt es drängend oder ermunternd: 快来啊！ In Fragen mit Fragewort, in Alternativfragen und in Fragen wie 你去不去啊？ wirkt es weicher und persönlicher: 你去哪儿啊？ Eine neutrale Ja/Nein-Frage bildet man weiter mit 吗; 你是老师啊？ klingt überrascht („Ach, du bist Lehrer?“). Nach bestimmten Silbenenden verschmilzt 啊 mit dem vorigen Laut und wird dann oft 呀 (ya), 哇 (wa) oder 哪 (na) geschrieben, z. B. 好呀 (hǎo ya). Zu viel 啊 wirkt aufgeregt oder kindlich.",
    "quiz": {
      "example": 0,
      "answer": "啊",
      "distractors": [
        {
          "text": "吗",
          "reason": "吗 macht eine Ja/Nein-Frage; der Satz mit 多 … ! ist aber ein Ausruf."
        },
        {
          "text": "吧",
          "reason": "吧 drückt einen Vorschlag oder eine Vermutung aus und passt nicht zum Ausruf mit 多."
        },
        {
          "text": "的",
          "reason": "的 am Satzende betont Gewissheit („bestimmt“), es bildet keinen Ausruf."
        }
      ]
    },
    "related": [
      "g:语气助词@HSK2",
      "g:语气助词@HSK1",
      "g:感叹句",
      "g:吧¹",
      "g:X什么（啊）",
      "g:啊"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动补短语1",
    "pattern": "动补短语1",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 104,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "基本结构类型",
      "content": "动补短语1"
    },
    "meaning": "Verb + Komplement: Ergebnis, Richtung oder Bewertung einer Handlung",
    "formation": "Verb + Komplement (Ergebnis: 听懂 / Richtung: 拿来 / mit 得: 说得很好)",
    "notes": "Die einzelnen Komplemente haben eigene Punkte. Weitere Arten, etwa das Potentialkomplement 听得懂 (tīng de dǒng) „verstehen können“, kommen ab HSK 3 hinzu (siehe 动补短语2).",
    "explanation": "Ein 动补短语 (dòngbǔ duǎnyǔ) besteht aus einem Verb und einem nachgestellten Komplement, 补语 (bǔyǔ), das sagt, was bei der Handlung herauskommt. Auf HSK 2 sind das vor allem: Ergebniskomplemente wie 完, 懂, 好, 错, 会 – 看完 (kànwán) „fertig lesen“, 听懂 (tīngdǒng) „verstehen“; Richtungskomplemente mit 来/去 oder 上, 下, 进, 出, 过, 回 – 拿来 (nálai) „herbringen“, 走下来 (zǒu xiàlai) „herunterkommen“; und das Komplement mit 得 (de), das eine Handlung beschreibt oder bewertet: 说得很好 (shuō de hěn hǎo) „gut sprechen“. Wo das Deutsche ein Präfix oder ein eigenes Verb hat (aufessen, verstehen, hereinkommen), verbindet das Chinesische zwei Elemente. 了 und das Objekt folgen meist nach dem Komplement: 我听懂了老师的话. Ein nicht erreichtes Ergebnis wird mit 没 (méi) verneint: 没听懂.",
    "examples": [
      {
        "chinese": "我听懂了老师的话。",
        "pinyin": "Wǒ tīngdǒngle lǎoshī de huà.",
        "german": "Ich habe verstanden, was der Lehrer gesagt hat."
      },
      {
        "chinese": "他从楼上走下来了。",
        "pinyin": "Tā cóng lóu shang zǒu xiàlai le.",
        "german": "Er ist von oben heruntergekommen."
      },
      {
        "chinese": "她汉字写得很漂亮。",
        "pinyin": "Tā Hànzì xiě de hěn piàoliang.",
        "german": "Sie schreibt die Schriftzeichen sehr schön."
      }
    ],
    "related": [
      "g:基本结构类型：动宾短语",
      "g:动补短语2",
      "g:动词+错/懂/好/会/完",
      "g:简单趋向补语的趋向意义用法：（1）动词+来/去",
      "g:动词+得+形容词性短语",
      "g:动词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:其他结构类型：“的”字短语",
    "pattern": "其他结构类型：“的”字短语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 105,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "（1）“的”字短语"
    },
    "meaning": "Wortgruppe mit Strukturpartikel ohne Nomen: „meins“, „das Rote“, „der, der …“",
    "formation": "Nomen / Pronomen / Adjektiv / Verb(gruppe) + 的 (das Nomen fällt weg)",
    "notes": "Folgt nach 的 das Nomen, ist es ein gewöhnliches Attribut (我的书, siehe 的¹). Für Personen klingen 的-Ausdrücke umgangssprachlich und als Anrede leicht unhöflich; höflicher ist das volle Nomen.",
    "explanation": "Lässt man nach 的 (de) das Nomen weg, steht die Wortgruppe selbst für eine Person oder Sache – wie im Deutschen „meins“, „das Rote“ oder „der, der …“. Das geht, wenn aus dem Zusammenhang klar ist, was gemeint ist: 这本书是我的 = „Das Buch ist meins“, 我不要红的，要白的 = „Ich will nicht das rote, sondern das weiße“. Vor 的 kann ein Nomen oder Pronomen stehen (老师的), ein Adjektiv (新的, 大的) oder eine Verbgruppe, auch mit eigenem Subjekt (开车的 „der Fahrer“, 我买的 „was ich gekauft habe“). Einige solcher Ausdrücke sind zu Bezeichnungen für Berufe geworden: 卖菜的 (mài cài de) „Gemüsehändler“. Der 的-Ausdruck verhält sich wie ein Nomen und steht als Subjekt oder Objekt, besonders oft vor oder nach 是: 开车的是我哥哥.",
    "examples": [
      {
        "chinese": "这本书不是我的，是老师的。",
        "pinyin": "Zhè běn shū bú shì wǒ de, shì lǎoshī de.",
        "german": "Das Buch ist nicht meins, es gehört dem Lehrer."
      },
      {
        "chinese": "这件太小了，有大一点儿的吗？",
        "pinyin": "Zhè jiàn tài xiǎo le, yǒu dà yìdiǎnr de ma?",
        "german": "Das hier ist zu klein, haben Sie ein etwas größeres?"
      },
      {
        "chinese": "开车的是我哥哥。",
        "pinyin": "Kāichē de shì wǒ gēge.",
        "german": "Der am Steuer ist mein älterer Bruder."
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "的",
      "distractors": [
        {
          "text": "得",
          "reason": "得 steht zwischen Verb und Komplement; es macht aus 开车 nicht „der, der fährt“."
        },
        {
          "text": "地",
          "reason": "地 verbindet ein Adverbial mit einem folgenden Verb und bildet keinen Ausdruck für eine Person."
        },
        {
          "text": "了",
          "reason": "开车了 hieße „ist losgefahren“; als Subjekt vor 是 braucht man aber „der, der fährt“."
        }
      ]
    },
    "related": [
      "g:的¹",
      "g:定语：动词或动词性短语、主谓短语作定语",
      "g:名词性短语",
      "g:基本结构类型：偏正短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:其他结构类型：连谓短语",
    "pattern": "其他结构类型：连谓短语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 106,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "（2）连谓短语"
    },
    "meaning": "Verbreihe: mehrere Verben für dasselbe Subjekt (Zweck, Mittel, Abfolge)",
    "formation": "Verb(gruppe) 1 + Verb(gruppe) 2 (gleiches Subjekt, ohne Bindewort)",
    "notes": "Die Satztypen dazu (连动句) sind eigene Punkte ab HSK 1. Anders als in der Pivot-Gruppe (请他来) haben bei der Verbreihe beide Verben dasselbe Subjekt.",
    "explanation": "In einer 连谓短语 (liánwèi duǎnyǔ) folgen zwei oder mehr Verben bzw. Verbgruppen ohne Bindewort aufeinander; sie gehören zum selben Subjekt. Die Reihenfolge ist fest und folgt meist dem Ablauf. Häufige Arten: Das zweite Verb nennt den Zweck – 去商店买东西 „in den Laden gehen, um einzukaufen“; das erste nennt Mittel oder Art – 坐地铁上班 „mit der U-Bahn zur Arbeit fahren“; 有 (yǒu) oder 没有 (méiyǒu) + Nomen + Verb – 没有时间看电视 „keine Zeit zum Fernsehen haben“. Das Deutsche braucht dafür „um zu“, „mit“ oder „zum“, das Chinesische nicht. 了 steht meist nach dem zweiten Verb oder am Satzende, nicht nach dem ersten: 他去商店买了一些水果.",
    "examples": [
      {
        "chinese": "我们坐地铁去学校。",
        "pinyin": "Wǒmen zuò dìtiě qù xuéxiào.",
        "german": "Wir fahren mit der U-Bahn zur Schule."
      },
      {
        "chinese": "他去超市买水果了。",
        "pinyin": "Tā qù chāoshì mǎi shuǐguǒ le.",
        "german": "Er ist in den Supermarkt gegangen, um Obst zu kaufen."
      },
      {
        "chinese": "我没有时间看电视。",
        "pinyin": "Wǒ méiyǒu shíjiān kàn diànshì.",
        "german": "Ich habe keine Zeit zum Fernsehen."
      }
    ],
    "related": [
      "g:连动句1：前后动作先后发生，后一动作是前一动作的目的",
      "g:连动句1：前一动作是后一动作的方式",
      "g:其他结构类型：兼语短语",
      "g:动词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:其他结构类型：兼语短语",
    "pattern": "其他结构类型：兼语短语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 107,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "（3）兼语短语"
    },
    "meaning": "Pivot-Gruppe: jemanden einladen, bitten oder veranlassen, etwas zu tun",
    "formation": "Verb 1 (请/让/叫) + Person + Verb 2 (+ Objekt)",
    "notes": "Der ganze Satztyp mit 请/叫/让 ist ein eigener Punkt (HSK 2). Nicht verwechseln mit dem doppelten Objekt (给他一本书): Dort folgt nach der Person kein zweites Verb.",
    "explanation": "In einer 兼语短语 (jiānyǔ duǎnyǔ) ist das Objekt des ersten Verbs zugleich das Subjekt des zweiten: In 请他来 ist 他 der, den man einlädt, und der, der kommt. Das erste Verb drückt meist eine Bitte oder Veranlassung aus: 请 (qǐng) „einladen, bitten“, 让 (ràng) und 叫 (jiào) „lassen, sagen, dass jemand etwas tun soll“. Die Person steht immer zwischen den beiden Verben; ein „dass“ oder „zu“ wie im Deutschen gibt es nicht: 妈妈让我早点儿回家 = „Mama will, dass ich früher nach Hause komme“. Verneint wird meist das erste Verb: 老师不让我们用手机. 请 klingt höflich, 叫 umgangssprachlicher als 让.",
    "examples": [
      {
        "chinese": "我想请你吃饭。",
        "pinyin": "Wǒ xiǎng qǐng nǐ chīfàn.",
        "german": "Ich möchte dich zum Essen einladen."
      },
      {
        "chinese": "妈妈让我早点儿回家。",
        "pinyin": "Māma ràng wǒ zǎo diǎnr huí jiā.",
        "german": "Mama will, dass ich etwas früher nach Hause komme."
      },
      {
        "chinese": "医生叫他多喝水。",
        "pinyin": "Yīshēng jiào tā duō hē shuǐ.",
        "german": "Der Arzt hat ihm gesagt, er soll viel trinken."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "请",
      "distractors": [
        {
          "text": "让",
          "reason": "我想让你吃饭 hieße „ich will, dass du isst“ – von einer Einladung ist keine Rede."
        },
        {
          "text": "给",
          "reason": "给 nennt einen Empfänger; 给你吃饭 ergibt hier keinen Sinn."
        },
        {
          "text": "和",
          "reason": "和你吃饭 hieße „mit dir essen“ – die Einladung fehlt."
        }
      ]
    },
    "related": [
      "g:表使令：主语+请/叫/让……+宾语1+动词+宾语2",
      "g:其他结构类型：连谓短语",
      "g:主语+动词+宾语1+宾语2",
      "g:动词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:名词性短语",
    "pattern": "名词性短语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 108,
      "category": "短语",
      "categoryName": "功能类型",
      "item": "名词性短语",
      "content": ""
    },
    "meaning": "Nominalgruppe: Wortgruppe, die wie ein Nomen gebraucht wird",
    "formation": "Attribut (+ 的) + Nomen; auch Nomen + 和 + Nomen oder … + 的 ohne Nomen",
    "explanation": "Wortgruppen werden nicht nur nach ihrem Aufbau, sondern auch nach ihrer Funktion eingeteilt. Eine 名词性短语 (míngcíxìng duǎnyǔ) verhält sich wie ein Nomen: Sie steht als Subjekt, als Objekt oder nach 是. Meist ist ihr Kern ein Nomen mit Attribut davor: 我的朋友, 三本书, 很好的老师, 妈妈做的菜. Auch nebengeordnete Nomen (爸爸和妈妈), Ortsangaben (桌子上) und 的-Ausdrücke ohne Nomen (红的) gehören dazu. Typisch: Eine Nominalgruppe wird nicht mit 不 (bù) verneint und nimmt keine Gradadverbien wie 很 (hěn) – 很老师 ist falsch. Als Prädikat steht sie nur in wenigen Fällen ohne 是, etwa bei Datum, Alter, Preis oder Aussehen.",
    "examples": [
      {
        "chinese": "我的两个好朋友都是老师。",
        "pinyin": "Wǒ de liǎng ge hǎo péngyou dōu shì lǎoshī.",
        "german": "Meine zwei guten Freunde sind beide Lehrer."
      },
      {
        "chinese": "我喜欢吃妈妈做的菜。",
        "pinyin": "Wǒ xǐhuan chī māma zuò de cài.",
        "german": "Ich esse gern, was Mama kocht."
      },
      {
        "chinese": "爸爸和妈妈都去北京了。",
        "pinyin": "Bàba hé māma dōu qù Běijīng le.",
        "german": "Papa und Mama sind beide nach Peking gefahren."
      }
    ],
    "related": [
      "g:动词性短语",
      "g:形容词性短语",
      "g:基本结构类型：偏正短语",
      "g:基本结构类型：联合短语",
      "g:其他结构类型：“的”字短语",
      "g:名词性短语作谓语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动词性短语",
    "pattern": "动词性短语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 109,
      "category": "短语",
      "categoryName": "功能类型",
      "item": "动词性短语",
      "content": ""
    },
    "meaning": "Verbalgruppe: Wortgruppe mit einem Verb als Kern",
    "formation": "(Adverbial +) Verb (+ Objekt / Komplement)",
    "explanation": "Eine 动词性短语 (dòngcíxìng duǎnyǔ) hat ein Verb als Kern und verhält sich wie ein Verb: Ihre Hauptaufgabe ist das Prädikat, sie lässt sich mit 不 (bù) oder 没 (méi) verneinen und kann 了, 着 oder 过 aufnehmen. Dazu gehören Verb + Objekt wie 看书 (kàn shū), Adverbial + Verb wie 常常去 oder 在家休息, Verb + Komplement wie 听懂 (tīngdǒng) oder 说得很好 sowie Verbreihen und Pivot-Gruppen (去商店买东西, 请他来). Eine Verbalgruppe kann ohne Umformung auch Subjekt oder Objekt sein – das Deutsche braucht dafür einen Infinitiv mit „zu“ oder ein Nomen: 学中文很有意思 = „Chinesisch zu lernen macht Spaß“. Mit 的 wird sie zum Attribut: 来上课的学生 „die Schüler, die zum Unterricht kommen“.",
    "examples": [
      {
        "chinese": "学中文很有意思。",
        "pinyin": "Xué Zhōngwén hěn yǒu yìsi.",
        "german": "Chinesisch zu lernen macht Spaß."
      },
      {
        "chinese": "我周末常常在家休息。",
        "pinyin": "Wǒ zhōumò chángcháng zài jiā xiūxi.",
        "german": "Am Wochenende ruhe ich mich oft zu Hause aus."
      },
      {
        "chinese": "他喜欢打篮球。",
        "pinyin": "Tā xǐhuan dǎ lánqiú.",
        "german": "Er spielt gern Basketball."
      }
    ],
    "related": [
      "g:名词性短语",
      "g:形容词性短语",
      "g:基本结构类型：动宾短语",
      "g:动补短语1",
      "g:其他结构类型：连谓短语",
      "g:谓语：动词或动词性短语、形容词或形容词性短语作谓语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:形容词性短语",
    "pattern": "形容词性短语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 110,
      "category": "短语",
      "categoryName": "功能类型",
      "item": "形容词性短语",
      "content": ""
    },
    "meaning": "Adjektivgruppe: Wortgruppe mit einem Adjektiv als Kern",
    "formation": "(Gradadverb / 不 +) Adjektiv (+ Komplement)",
    "explanation": "Eine 形容词性短语 (xíngróngcíxìng duǎnyǔ) hat ein Adjektiv als Kern und verhält sich wie ein Adjektiv. Typisch sind Gradadverb oder Verneinung + Adjektiv (很高, 非常好, 不太贵), Adjektiv + Mengenangabe (大一点儿 „etwas größer“) und nebengeordnete Adjektive (聪明漂亮). Ihre Hauptaufgabe ist das Prädikat, und zwar ohne 是: 她很高. Daneben steht sie als Attribut vor einem Nomen, dann meist mit 的: 很好的朋友; als Adverbial vor dem Verb, oft mit 地 (de): 认真地学习; und als Komplement nach 得: 说得很好. Anders als eine Verbalgruppe verbindet sie sich mit Gradadverbien wie 很 (hěn) oder 非常 (fēicháng) und nimmt kein Objekt.",
    "examples": [
      {
        "chinese": "这件衣服不太贵。",
        "pinyin": "Zhè jiàn yīfu bú tài guì.",
        "german": "Dieses Kleidungsstück ist nicht allzu teuer."
      },
      {
        "chinese": "她是一个非常认真的学生。",
        "pinyin": "Tā shì yí ge fēicháng rènzhēn de xuésheng.",
        "german": "Sie ist eine sehr gewissenhafte Schülerin."
      },
      {
        "chinese": "你说得太快了，请慢一点儿。",
        "pinyin": "Nǐ shuō de tài kuài le, qǐng màn yìdiǎnr.",
        "german": "Du sprichst zu schnell, bitte etwas langsamer."
      }
    ],
    "related": [
      "g:名词性短语",
      "g:动词性短语",
      "g:程度副词@HSK1",
      "g:形容词+数量补语",
      "g:主谓句2：形容词谓语句",
      "g:动词+得+形容词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:什么的",
    "pattern": "什么的",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 111,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "什么的"
    },
    "meaning": "und so weiter, und so was (am Ende einer Aufzählung, gesprochen)",
    "formation": "A(、B …) + 什么的",
    "notes": "In der Schriftsprache steht stattdessen 等 (děng) oder 等等 (děngděng). Nicht verwechseln mit dem Fragewort 什么 (shénme): 你买了什么？ fragt „was?“, 我买了苹果什么的 ist eine Aussage („Äpfel und so“).",
    "explanation": "什么的 (shénmede) steht am Ende einer Aufzählung und bedeutet „und so weiter“, „und so was“. Es zeigt, dass die genannten Dinge nur Beispiele sind und es noch mehr Ähnliches gibt. Davor stehen ein oder mehrere Nomen oder Verbgruppen, oft durch das Aufzählungskomma 、 getrennt. Die Aufzählung steht meist als Objekt (冰箱里有鸡蛋、牛奶什么的), seltener als Subjekt; nach Verbgruppen kann sie auch selbst das Prädikat bilden (周末我常常看书、听音乐什么的). 什么的 ist typisch für die gesprochene Sprache; die Bedeutung „was?“ hat 什么 (shénme) hier nicht, der Satz ist keine Frage.",
    "examples": [
      {
        "chinese": "周末我常常看书、听音乐什么的。",
        "pinyin": "Zhōumò wǒ chángcháng kàn shū, tīng yīnyuè shénmede.",
        "german": "Am Wochenende lese ich oft, höre Musik und so weiter."
      },
      {
        "chinese": "冰箱里有鸡蛋、牛奶什么的。",
        "pinyin": "Bīngxiāng li yǒu jīdàn, niúnǎi shénmede.",
        "german": "Im Kühlschrank gibt es Eier, Milch und so was."
      },
      {
        "chinese": "他喜欢打篮球、踢足球什么的。",
        "pinyin": "Tā xǐhuan dǎ lánqiú, tī zúqiú shénmede.",
        "german": "Er spielt gern Basketball, Fußball und Ähnliches."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "什么的",
      "distractors": [
        {
          "text": "什么",
          "reason": "什么 allein ist das Fragewort „was“; den Sinn „und so weiter“ hat nur 什么的."
        },
        {
          "text": "的话",
          "reason": "的话 heißt „falls“ und leitet eine Bedingung ein, es schließt keine Aufzählung ab."
        },
        {
          "text": "怎么样",
          "reason": "怎么样 fragt „wie (ist es)?“ und kann eine Aufzählung nicht abschließen."
        }
      ],
      "accepted": [
        "等等",
        "等"
      ]
    },
    "related": [
      "g:什么",
      "g:基本结构类型：联合短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:还是……吧",
    "pattern": "还是……吧",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 112,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "还是……吧"
    },
    "meaning": "doch lieber …, besser … (Rat nach Abwägung)",
    "pinyin": "háishi…ba",
    "examples": [
      {
        "chinese": "外面下雨了，我们还是坐出租车吧。",
        "pinyin": "Wàimiàn xià yǔ le, wǒmen háishi zuò chūzūchē ba.",
        "german": "Draußen regnet es, nehmen wir lieber ein Taxi."
      },
      {
        "chinese": "太晚了，你还是明天再去吧。",
        "pinyin": "Tài wǎn le, nǐ háishi míngtiān zài qù ba.",
        "german": "Es ist schon zu spät, geh lieber morgen."
      },
      {
        "chinese": "这件太贵了，还是买那件吧。",
        "pinyin": "Zhè jiàn tài guì le, háishi mǎi nà jiàn ba.",
        "german": "Das hier ist zu teuer, kaufen wir lieber das da."
      }
    ],
    "legacyIds": [
      "g:还是…吧",
      "还是…吧"
    ],
    "formation": "(Subjekt +) 还是 + Verb(gruppe) + 吧",
    "notes": "Die Alternativfrage mit 还是 (háishi) und (是)……还是…… sind eigene Punkte (HSK 2). 吧 allein (吧¹) macht schon einen Vorschlag; 还是 fügt hinzu, dass man zwischen Möglichkeiten abgewogen hat.",
    "explanation": "Mit 还是 (háishi) … 吧 (ba) gibt man nach kurzem Überlegen einen Rat oder trifft eine Wahl: „doch lieber …“, „besser …“. Oft wird vorher ein Grund genannt oder eine andere Möglichkeit verworfen: 太晚了，你还是明天再去吧. 吧 macht den Satz zu einem freundlichen Vorschlag. Ohne 吧 kann 还是 auch „immer noch“ bedeuten (他还是没来); erst 还是 … 吧 macht den Satz eindeutig zu einem Rat. Das Subjekt kann vor oder nach 还是 stehen: 我们还是走吧 oder 还是我们走吧. Die Form ist typisch für die gesprochene Sprache. Nicht verwechseln mit 还是 „oder“ in Alternativfragen: 你喝茶还是喝咖啡？",
    "quiz": {
      "example": 1,
      "answer": "还是",
      "distractors": [
        {
          "text": "或者",
          "reason": "或者 heißt „oder“ in Aussagesätzen und drückt keinen Rat aus."
        },
        {
          "text": "已经",
          "reason": "已经 („schon“) meint etwas Geschehenes und passt nicht zu 明天."
        },
        {
          "text": "才",
          "reason": "才 („erst“) passt nicht in einen Vorschlag mit 吧 und verträgt sich nicht mit 再."
        }
      ]
    },
    "related": [
      "g:吧¹",
      "g:疑问句：用“还是”连接的选择问句",
      "g:（是）……，还是……",
      "g:不是……，还/还是……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:要/快要/就要……了",
    "pattern": "要/快要/就要……了",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 113,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "要/快要/就要……了"
    },
    "meaning": "bald, gleich (etwas steht unmittelbar bevor)",
    "pinyin": "kuàiyào…le",
    "examples": [
      {
        "chinese": "快要下雨了，我们回家吧。",
        "pinyin": "Kuàiyào xià yǔ le, wǒmen huí jiā ba.",
        "german": "Gleich regnet es, lass uns nach Hause gehen."
      },
      {
        "chinese": "火车要开了，快上车吧！",
        "pinyin": "Huǒchē yào kāi le, kuài shàng chē ba!",
        "german": "Der Zug fährt gleich ab, schnell einsteigen!"
      },
      {
        "chinese": "我们下个星期就要考试了。",
        "pinyin": "Wǒmen xià ge xīngqī jiùyào kǎoshì le.",
        "german": "Nächste Woche haben wir schon die Prüfung."
      },
      {
        "chinese": "电影快要开始了。",
        "pinyin": "Diànyǐng kuàiyào kāishǐ le.",
        "german": "Der Film fängt gleich an."
      }
    ],
    "legacyIds": [
      "g:快要…了",
      "快要…了",
      "g:要…了",
      "要…了"
    ],
    "formation": "(Zeitangabe +) 要 / 快要 / 就要 + Verb(gruppe) + 了",
    "notes": "Auch 快 (kuài) … 了 allein ist häufig, besonders vor Zahlen und Adjektiven: 快十二点了 „gleich zwölf“. Ohne 了 am Ende ist 要 meist das Modalverb „wollen, müssen“: 我要去北京 = „Ich will nach Peking fahren“.",
    "explanation": "要 (yào) … 了, 快要 (kuàiyào) … 了 und 就要 (jiùyào) … 了 drücken aus, dass etwas sehr bald geschieht: „gleich“, „bald“, „demnächst“. 了 am Satzende gehört fest dazu. 快要 betont, wie nah das Ereignis ist; 就要 steht gern nach einer konkreten Zeitangabe wie 明天 (míngtiān) oder 下个星期 (xià ge xīngqī): 我们下个星期就要考试了. 快要 lässt sich mit einer solchen Zeitangabe nicht verbinden – 明天快要考试了 ist falsch. Diese Form wird normalerweise nicht verneint; fragen kann man mit 吗: 电影要开始了吗？ Typischer Fehler: 了 vergessen – 快要下雨 klingt unvollständig.",
    "quiz": {
      "example": 2,
      "answer": "就要",
      "distractors": [
        {
          "text": "快要",
          "reason": "快要 verträgt keine konkrete Zeitangabe wie 下个星期."
        },
        {
          "text": "已经",
          "reason": "已经 („schon“) meint etwas Geschehenes und widerspricht 下个星期."
        },
        {
          "text": "正在",
          "reason": "正在 beschreibt eine gerade laufende Handlung, nichts Bevorstehendes."
        }
      ],
      "accepted": [
        "要"
      ]
    },
    "related": [
      "g:了²",
      "g:变化态：用动态助词“了²”表示",
      "g:要",
      "g:就¹",
      "g:都……了"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:都……了",
    "pattern": "都……了",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 114,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "都……了"
    },
    "meaning": "schon … (mit Nachdruck: Ungeduld, Vorwurf, Überraschung)",
    "formation": "都 + Zeit / Alter / Menge / Verb(gruppe) + 了",
    "notes": "已经 (yǐjīng) … 了 ist neutral und sachlich; 都 … 了 drückt zusätzlich Ungeduld, Überraschung oder Vorwurf aus. Beides lässt sich verbinden: 都已经十点了.",
    "explanation": "都 (dōu) … 了 heißt „schon“ wie 已经 (yǐjīng) … 了, ist aber gefühlsbetont: Der Sprecher findet, dass es schon spät ist, dass schon viel geschehen ist oder jemand alt genug ist. Meist folgt eine Aufforderung, ein Vorwurf oder eine Folgerung: 都十二点了，快睡觉吧！ Zwischen 都 und 了 stehen oft Uhrzeit, Alter oder eine Menge, aber auch eine Handlung, die bereits eingetreten ist. Die Form ist typisch für die gesprochene Sprache. Achtung: 都 heißt sonst „alle“ (都¹). Dieses „schon“ erkennt man daran, dass es nichts gibt, was 都 zusammenfassen könnte, und dass 了 am Ende steht; bei einem Subjekt im Plural kann ein Satz deshalb doppeldeutig sein.",
    "examples": [
      {
        "chinese": "都十二点了，你怎么还不睡觉？",
        "pinyin": "Dōu shí'èr diǎn le, nǐ zěnme hái bú shuìjiào?",
        "german": "Es ist schon zwölf Uhr, warum schläfst du immer noch nicht?"
      },
      {
        "chinese": "你都二十岁了，应该自己做饭。",
        "pinyin": "Nǐ dōu èrshí suì le, yīnggāi zìjǐ zuò fàn.",
        "german": "Du bist schon zwanzig, du solltest selbst kochen."
      },
      {
        "chinese": "电影都开始了，他还没到。",
        "pinyin": "Diànyǐng dōu kāishǐ le, tā hái méi dào.",
        "german": "Der Film hat schon angefangen, und er ist immer noch nicht da."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "都",
      "distractors": [
        {
          "text": "还",
          "reason": "还 heißt „noch“; 还十二点了 ist falsch und sagt nicht „schon“."
        },
        {
          "text": "才",
          "reason": "才 („erst“) sagt das Gegenteil von „schon“ und verträgt sich nicht mit 了 am Ende."
        },
        {
          "text": "也",
          "reason": "也 („auch“) ergibt hier keinen Sinn, denn es wird nichts verglichen."
        }
      ],
      "accepted": [
        "已经"
      ]
    },
    "related": [
      "g:都¹",
      "g:已经",
      "g:了²",
      "g:要/快要/就要……了",
      "g:还²"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:受事主语",
    "pattern": "受事主语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 115,
      "category": "句子成分",
      "categoryName": "主语",
      "item": "",
      "content": "受事主语"
    },
    "meaning": "Handlungsempfänger als Subjekt (Passivbedeutung ohne Passivwort)",
    "formation": "Handlungsempfänger (Subjekt) + Verb + Ergänzung (Komplement / 了)",
    "notes": "Mit 被 (HSK 3) nennt man meist den Handelnden oder betont etwas Unangenehmes: 我的手机被人拿走了. Steht nach dem vorangestellten Objekt noch ein Subjekt (这本书我看过), gehört der Satz zum Satztyp 主谓谓语句 (zhǔwèi wèiyǔ jù), einem eigenen Punkt.",
    "explanation": "Im Chinesischen kann das, was von einer Handlung betroffen ist, ohne Passivwort am Satzanfang stehen: 作业写完了 = „Die Hausaufgaben sind fertig (geschrieben)“. Wer handelt, ist unwichtig oder klar und wird weggelassen. Solche Sätze sind im Alltag viel häufiger als Sätze mit 被 (bèi). Das Subjekt ist meist eine Sache, die der Hörer schon kennt. Das Verb steht selten allein, sondern hat ein Komplement oder 了 bei sich: 衣服洗好了, 票卖完了. Personen als Subjekt sind seltener, weil man sie leicht als Handelnde versteht. Im Deutschen übersetzt man oft mit Passiv oder mit „ist fertig“, „ist ausverkauft“ usw.",
    "examples": [
      {
        "chinese": "作业写完了吗？",
        "pinyin": "Zuòyè xiěwán le ma?",
        "german": "Sind die Hausaufgaben fertig?"
      },
      {
        "chinese": "衣服已经洗好了。",
        "pinyin": "Yīfu yǐjīng xǐhǎo le.",
        "german": "Die Wäsche ist schon gewaschen."
      },
      {
        "chinese": "今天的票都卖完了。",
        "pinyin": "Jīntiān de piào dōu màiwán le.",
        "german": "Die Karten für heute sind alle ausverkauft."
      }
    ],
    "related": [
      "g:主谓句4：主谓谓语句",
      "g:主语+被+动词+其他成分",
      "g:主语+被+宾语+动词+其他成分",
      "g:动词+错/懂/好/会/完",
      "g:主语：名词、代词或名词性短语作主语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:名词性短语作谓语",
    "pattern": "名词性短语作谓语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 116,
      "category": "句子成分",
      "categoryName": "谓语",
      "item": "",
      "content": "名词性短语作谓语"
    },
    "meaning": "Nominalgruppe als Prädikat: Aussehen, Wetter, Herkunft, Klassenstufe ohne Verb",
    "formation": "Subjekt + Nominalgruppe (Attribut + Nomen)",
    "explanation": "Auf HSK 1 standen einzelne Nomen, Zahlen und Mengen als Prädikat (今天星期五). Auf HSK 2 kommen längere Nominalgruppen hinzu – ein Nomen mit Attribut, das das Subjekt beschreibt oder einordnet. Typisch sind Aussehen (她大眼睛，长头发), Wetter (今天晴天), Herkunft (我们老师上海人) und Klassenstufe (他大学三年级). Solche Sätze sind kurz, gesprochen und fast immer bejaht. Zum Verneinen braucht man 不是 (bú shì): 他不是上海人. Mit 是 ist der Satz meist auch möglich und etwas neutraler: 他是上海人; beim Aussehen sagt man dagegen eher 她有一双大眼睛. Im Deutschen braucht man ein Verb wie „haben“, „sein“ oder „kommen aus“.",
    "examples": [
      {
        "chinese": "她大眼睛，长头发。",
        "pinyin": "Tā dà yǎnjing, cháng tóufa.",
        "german": "Sie hat große Augen und lange Haare."
      },
      {
        "chinese": "今天晴天，我们去公园吧。",
        "pinyin": "Jīntiān qíngtiān, wǒmen qù gōngyuán ba.",
        "german": "Heute ist es sonnig, lass uns in den Park gehen."
      },
      {
        "chinese": "我哥哥大学三年级。",
        "pinyin": "Wǒ gēge dàxué sān niánjí.",
        "german": "Mein Bruder ist im dritten Studienjahr."
      },
      {
        "chinese": "我们老师上海人。",
        "pinyin": "Wǒmen lǎoshī Shànghǎi rén.",
        "german": "Unser Lehrer kommt aus Shanghai."
      }
    ],
    "related": [
      "g:谓语：名词、代词、数词或数量短语作谓语",
      "g:主谓句3：名词谓语句",
      "g:名词性短语",
      "g:“是”字句1：表示等同或类属"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:定语：动词或动词性短语、主谓短语作定语",
    "pattern": "定语：动词或动词性短语、主谓短语作定语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 117,
      "category": "句子成分",
      "categoryName": "定语",
      "item": "",
      "content": "动词或动词性短语、主谓短语作定语"
    },
    "meaning": "Verb- oder Satzattribut vor dem Nomen (entspricht einem deutschen Relativsatz)",
    "formation": "Verb(gruppe) / Subjekt + Verb + 的 + Nomen",
    "notes": "Fällt das Nomen nach 的 weg, entsteht ein 的-Ausdruck: 我买的 = „das, was ich gekauft habe“. Stehen mehrere Attribute vor einem Nomen, gilt eine feste Reihenfolge; das behandelt der Punkt 多项定语 (duō xiàng dìngyǔ) auf HSK 3.",
    "explanation": "Auch ein Verb, eine Verbgruppe oder ein ganzer kleiner Satz (Subjekt + Prädikat) kann ein Nomen näher bestimmen. Dann steht 的 (de) dazwischen, und das Attribut steht – anders als der deutsche Relativsatz – vor dem Nomen: 我昨天买的书 = „das Buch, das ich gestern gekauft habe“. Das Nomen kann der Handelnde sein (来上课的学生 „die Schüler, die zum Unterricht kommen“), das Objekt (妈妈做的菜 „das Essen, das Mama kocht“) oder Zeit und Ort (上课的时候 „während des Unterrichts“). Ein Relativpronomen wie „der, die, das“ gibt es nicht. Typischer Fehler: 的 weglassen – 我买书 ist ein Satz („ich kaufe Bücher“), kein Attribut. Nur feste Verbindungen wie 学习方法 (xuéxí fāngfǎ) „Lernmethode“ kommen ohne 的 aus.",
    "examples": [
      {
        "chinese": "这是我昨天买的书。",
        "pinyin": "Zhè shì wǒ zuótiān mǎi de shū.",
        "german": "Das ist das Buch, das ich gestern gekauft habe."
      },
      {
        "chinese": "上课的时候不能玩手机。",
        "pinyin": "Shàngkè de shíhou bù néng wán shǒujī.",
        "german": "Während des Unterrichts darf man nicht am Handy spielen."
      },
      {
        "chinese": "参加比赛的学生都很高兴。",
        "pinyin": "Cānjiā bǐsài de xuésheng dōu hěn gāoxìng.",
        "german": "Die Schüler, die am Wettbewerb teilnehmen, freuen sich alle."
      },
      {
        "chinese": "她写的字很漂亮。",
        "pinyin": "Tā xiě de zì hěn piàoliang.",
        "german": "Ihre Handschrift ist sehr schön."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "的",
      "distractors": [
        {
          "text": "得",
          "reason": "得 steht zwischen Verb und Komplement; vor einem Nomen wie 书 passt es nicht."
        },
        {
          "text": "地",
          "reason": "地 verbindet ein Adverbial mit einem folgenden Verb; hier folgt aber das Nomen 书."
        },
        {
          "text": "了",
          "reason": "我昨天买了书 wäre ein eigener Satz; als Attribut zu 书 braucht man 的."
        }
      ]
    },
    "related": [
      "g:定语：名词性词语、形容词性短语、数量短语作定语",
      "g:的¹",
      "g:其他结构类型：“的”字短语",
      "g:多项定语",
      "g:基本结构类型：主谓短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动词+错/懂/好/会/完",
    "pattern": "动词+错/懂/好/会/完",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 118,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "结果补语1",
      "content": "动词+错/懂/好/会/完"
    },
    "meaning": "Ergebniskomplemente: falsch, verstanden, fertig und gut, gelernt, zu Ende",
    "formation": "Verb + 错/懂/好/会/完 (+ 了) (+ Objekt)",
    "explanation": "Ein Ergebniskomplement steht direkt nach dem Verb und sagt, was die Handlung bewirkt hat. Fünf häufige auf HSK 2: 错 (cuò) „falsch“ – 写错 (xiěcuò), 说错 (shuōcuò); 懂 (dǒng) „verstanden“, nach Wahrnehmungsverben – 听懂 (tīngdǒng), 看懂 (kàndǒng); 好 (hǎo) „fertig und in Ordnung, bereit“ – 做好 (zuòhǎo), 准备好 (zhǔnbèi hǎo); 会 (huì) „gelernt, sodass man es kann“ – 学会 (xuéhuì); 完 (wán) „zu Ende“ – 吃完 (chīwán), 看完 (kànwán). Verb und Komplement bilden eine Einheit: 了 und das Objekt folgen danach (我写错了两个字). Verneint wird mit 没 (méi), denn es geht um ein nicht erreichtes Ergebnis: 我没听懂. 不 steht hier nur in Bedingungen (不做完不能走). 完 sagt nur, dass etwas zu Ende ist; 好 zusätzlich, dass es zufriedenstellend erledigt ist.",
    "notes": "Weitere Ergebniskomplemente wie 到, 住, 走, 上 folgen auf HSK 3. 会 als Komplement nicht mit dem Modalverb 会 („können“) verwechseln: 我学会了 = „Ich habe es gelernt“, 我会游泳 = „Ich kann schwimmen“.",
    "examples": [
      {
        "chinese": "对不起，我写错了你的名字。",
        "pinyin": "Duìbuqǐ, wǒ xiěcuòle nǐ de míngzi.",
        "german": "Entschuldigung, ich habe deinen Namen falsch geschrieben."
      },
      {
        "chinese": "这本书我看完了，可是有很多地方没看懂。",
        "pinyin": "Zhè běn shū wǒ kànwán le, kěshì yǒu hěn duō dìfang méi kàndǒng.",
        "german": "Das Buch habe ich zu Ende gelesen, aber vieles darin habe ich nicht verstanden."
      },
      {
        "chinese": "饭做好了，快来吃吧！",
        "pinyin": "Fàn zuòhǎo le, kuài lái chī ba!",
        "german": "Das Essen ist fertig, kommt schnell essen!"
      },
      {
        "chinese": "我妹妹已经学会游泳了。",
        "pinyin": "Wǒ mèimei yǐjīng xuéhuì yóuyǒng le.",
        "german": "Meine kleine Schwester hat schon schwimmen gelernt."
      }
    ],
    "legacyIds": [
      "g:Verb + 完",
      "Verb + 完",
      "g:Verb + 好",
      "Verb + 好"
    ],
    "related": [
      "g:动词+到/住/走/上",
      "g:动补短语1",
      "g:了¹",
      "g:会",
      "g:受事主语"
    ],
    "quiz": {
      "example": 1,
      "answer": "懂",
      "distractors": [
        {
          "text": "完",
          "reason": "没看完 („nicht zu Ende gelesen“) widerspricht dem ersten Teil 看完了 und der Übersetzung „nicht verstanden“."
        },
        {
          "text": "会",
          "reason": "会 als Komplement steht nach 学 („gelernt“); 看会 sagt man so nicht."
        },
        {
          "text": "好",
          "reason": "看好 bedeutet „gut aufpassen“ oder „positiv einschätzen“, nicht „verstehen“."
        }
      ],
      "accepted": [
        "明白"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:简单趋向补语的趋向意义用法：（1）动词+来/去",
    "pattern": "简单趋向补语的趋向意义用法：（1）动词+来/去",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 119,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "趋向补语1",
      "content": "简单趋向补语的趋向意义用法：（1）动词+来/去"
    },
    "meaning": "Verb + Richtung zum Sprecher hin oder von ihm weg (einfaches Richtungskomplement)",
    "formation": "Verb + 来/去; mit Ort: Verb + Ort + 来/去; mit Sache: Verb + Objekt + 来/去 oder Verb + 来/去 + Objekt",
    "notes": "上, 下, 进, 出, 过, 回 als Komplement (走进 (zǒujìn), 拿出 (náchū)) und zusammengesetzte Formen wie 走进来 (zǒu jìnlai) oder 拿出去 (ná chūqu) sind eigene Punkte (HSK 2).",
    "explanation": "来 (lái) und 去 (qù) nach einem Verb geben die Richtung an, vom Standort des Sprechers aus: 来 = auf den Sprecher zu („her-“), 去 = vom Sprecher weg („hin-“). Als Komplement werden sie oft im neutralen Ton gesprochen. Sie stehen nach Bewegungsverben wie 回, 进, 出, 上, 下 und nach Verben des Bringens wie 拿, 带, 送. Eine Ortsangabe steht immer vor 来/去: 回家去, 进教室来 – nicht 回去家. Ein Gegenstand kann vor oder nach 来/去 stehen: 带一本书来 oder 带来一本书. 了 folgt nach dem Komplement oder am Satzende: 他回去了. Im Deutschen entspricht das oft „her“ und „hin“: 拿来 (nálai) „herbringen“, 拿去 (náqu) „hinbringen, mitnehmen“.",
    "examples": [
      {
        "chinese": "请给我拿一个杯子来。",
        "pinyin": "Qǐng gěi wǒ ná yí ge bēizi lái.",
        "german": "Bring mir bitte ein Glas."
      },
      {
        "chinese": "明天我带一些水果去。",
        "pinyin": "Míngtiān wǒ dài yìxiē shuǐguǒ qù.",
        "german": "Morgen bringe ich etwas Obst mit."
      },
      {
        "chinese": "他已经回家去了。",
        "pinyin": "Tā yǐjīng huí jiā qù le.",
        "german": "Er ist schon nach Hause gegangen."
      },
      {
        "chinese": "老师进教室来了。",
        "pinyin": "Lǎoshī jìn jiàoshì lái le.",
        "german": "Der Lehrer ist ins Klassenzimmer hereingekommen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "来",
      "distractors": [
        {
          "text": "去",
          "reason": "去 bedeutet „vom Sprecher weg“; 给我 verlangt aber die Richtung zum Sprecher hin."
        },
        {
          "text": "走",
          "reason": "拿走 heißt „wegnehmen“ und passt nicht zu 给我; außerdem steht 走 direkt nach dem Verb, nicht nach dem Objekt."
        },
        {
          "text": "到",
          "reason": "到 als Komplement verlangt danach einen Ort oder steht direkt nach dem Verb (拿到 „bekommen“), nicht allein am Satzende."
        }
      ]
    },
    "related": [
      "g:动词+上/下/进/出/过/回",
      "g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去",
      "g:动补短语1",
      "g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动词+上/下/进/出/过/回",
    "pattern": "动词+上/下/进/出/过/回",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 120,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "趋向补语1",
      "content": "（2）动词+上/下/进/出/过/回"
    },
    "meaning": "hinauf, hinunter, hinein, hinaus, hinüber, zurück (einfaches Richtungskomplement)",
    "formation": "Verb + 上/下/进/出/过/回 (+ Ort/Objekt)",
    "notes": "Mit 来/去 verbunden entstehen zusammengesetzte Komplemente (走进来, 跑回去), eigener Punkt. 上, 下 und 出 haben auch übertragene Bedeutungen (考上 (kǎoshàng), 写下 (xiěxià), 看出 (kànchū)), die erst auf HSK 3 folgen.",
    "explanation": "Nach einem Bewegungs- oder Handlungsverb (走, 跑, 拿, 放 …) zeigt ein zweites Verb die Richtung an: 上 „hinauf“, 下 „hinunter“, 进 „hinein“, 出 „hinaus“, 过 „hinüber, vorbei“, 回 „zurück“. Ein Ort oder Objekt folgt direkt dahinter: 走进教室 „ins Klassenzimmer gehen“, 跑回家 „nach Hause zurücklaufen“. Anders als 来/去 sagen diese Komplemente nichts über die Richtung zum oder weg vom Sprecher. 了 steht meist nach dem Komplement: 他走进了教室. Verneint wird die vollendete Bewegung mit 没: 他没走进教室. Das 过 hier ist das Richtungswort „hinüber“, nicht die Erfahrungspartikel 过.",
    "examples": [
      {
        "chinese": "老师走进了教室。",
        "pinyin": "Lǎoshī zǒujìn le jiàoshì.",
        "german": "Der Lehrer ging ins Klassenzimmer."
      },
      {
        "chinese": "他很快地跑出了房间。",
        "pinyin": "Tā hěn kuài de pǎochū le fángjiān.",
        "german": "Er rannte schnell aus dem Zimmer."
      },
      {
        "chinese": "我终于拿回了自己的手机。",
        "pinyin": "Wǒ zhōngyú náhuí le zìjǐ de shǒujī.",
        "german": "Endlich habe ich mein Handy zurückbekommen."
      },
      {
        "chinese": "我们慢慢地走上了二楼。",
        "pinyin": "Wǒmen mànmàn de zǒushàng le èr lóu.",
        "german": "Wir gingen langsam in den ersten Stock hinauf."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "进",
      "distractors": [
        {
          "text": "出",
          "reason": "出 heißt „hinaus“; der Lehrer geht aber in das Klassenzimmer hinein."
        },
        {
          "text": "上",
          "reason": "上 heißt „hinauf“ und passt nicht zum Betreten eines Raums."
        },
        {
          "text": "回",
          "reason": "回 heißt „zurück“; die Übersetzung sagt nicht, dass er zurückkehrt."
        }
      ]
    },
    "related": [
      "g:简单趋向补语的趋向意义用法：（1）动词+来/去",
      "g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去",
      "g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去",
    "pattern": "复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 121,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "趋向补语1",
      "content": "复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去"
    },
    "meaning": "herein, hinaus, herunter, zurück … (zusammengesetztes Richtungskomplement)",
    "pinyin": "Verb + guòlái/guòqù",
    "examples": [
      {
        "chinese": "他从楼上跑下来了。",
        "pinyin": "Tā cóng lóu shàng pǎo xiàlái le.",
        "german": "Er kam von oben heruntergerannt."
      },
      {
        "chinese": "妈妈从包里拿出来一个苹果。",
        "pinyin": "Māma cóng bāo lǐ ná chūlái yí ge píngguǒ.",
        "german": "Mama holte einen Apfel aus der Tasche."
      },
      {
        "chinese": "老师一进来，大家都站起来了。",
        "pinyin": "Lǎoshī yí jìnlái, dàjiā dōu zhàn qǐlái le.",
        "german": "Sobald der Lehrer hereinkam, standen alle auf."
      },
      {
        "chinese": "这本书你看完了就拿回去吧。",
        "pinyin": "Zhè běn shū nǐ kànwán le jiù ná huíqù ba.",
        "german": "Wenn du das Buch ausgelesen hast, nimm es einfach mit nach Hause."
      }
    ],
    "legacyIds": [
      "g:Verb + 过来/过去",
      "Verb + 过来/过去",
      "g:Verb + 出来",
      "Verb + 出来",
      "g:Verb + 下来",
      "Verb + 下来"
    ],
    "related": [
      "g:简单趋向补语的趋向意义用法：（1）动词+来/去",
      "g:动词+上/下/进/出/过/回",
      "g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下",
      "g:表示动作行为的开始：动词+上/起来",
      "g:表示动作行为的持续：动词+下去/下来",
      "g:趋向补语的引申用法：表示状态意义：动词/形容词+下来/下去/起来/过来/过去"
    ],
    "formation": "Verb + 上/下/进/出/过/回/起 + 来/去",
    "notes": "Hier geht es nur um die räumliche Richtung. Übertragene Bedeutungen wie 看出来 „erkennen“, 记下来 „notieren“, 说起来 „anfangen zu sprechen“ oder 冷静下来 „sich beruhigen“ sind eigene Punkte (HSK 3–5).",
    "explanation": "Das zusammengesetzte Richtungskomplement verbindet eine Richtung (上 „hinauf“, 下 „hinunter“, 进 „hinein“, 出 „hinaus“, 过 „hinüber“, 回 „zurück“, 起 „hoch“) mit 来 (zum Sprecher hin, „her-“) oder 去 (vom Sprecher weg, „hin-“): 跑下来 „heruntergerannt kommen“, 走进去 „hineingehen“. 起 gibt es nur als 起来 (qǐlái) „auf, hoch“: 站起来 (zhàn qǐlái) „aufstehen“. Ein Ort steht zwischen den beiden Teilen, vor 来/去: 走进教室来, 跑回家去; falsch wäre 走进来教室. Ein Gegenstand kann davor oder danach stehen: 拿出一本书来 / 拿出来一本书. 来 und 去 werden im Komplement oft unbetont gesprochen.",
    "quiz": {
      "example": 1,
      "answer": "出来",
      "distractors": [
        {
          "text": "进去",
          "reason": "进去 heißt „hinein“; der Apfel kommt aber aus der Tasche heraus."
        },
        {
          "text": "上来",
          "reason": "上来 heißt „herauf“ und passt nicht zum Herausholen aus einer Tasche."
        },
        {
          "text": "过去",
          "reason": "过去 heißt „hinüber, vom Sprecher weg“, nicht „heraus“."
        }
      ],
      "accepted": [
        "出"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动词+得+形容词性短语",
    "pattern": "动词+得+形容词性短语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 122,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "状态补语1",
      "content": "动词+得+形容词性短语"
    },
    "meaning": "wie gut, schnell … jemand etwas tut (Zustandskomplement mit Adjektiv)",
    "pinyin": "Verb + de + hěn hǎo",
    "examples": [
      {
        "chinese": "她汉语说得非常好。",
        "pinyin": "Tā Hànyǔ shuō de fēicháng hǎo.",
        "german": "Sie spricht sehr gut Chinesisch."
      },
      {
        "chinese": "你今天来得太晚了。",
        "pinyin": "Nǐ jīntiān lái de tài wǎn le.",
        "german": "Du bist heute viel zu spät gekommen."
      },
      {
        "chinese": "昨天晚上我睡得不太好。",
        "pinyin": "Zuótiān wǎnshang wǒ shuì de bú tài hǎo.",
        "german": "Letzte Nacht habe ich nicht besonders gut geschlafen."
      },
      {
        "chinese": "我哥哥跑步跑得很快。",
        "pinyin": "Wǒ gēge pǎobù pǎo de hěn kuài.",
        "german": "Mein Bruder läuft sehr schnell."
      }
    ],
    "legacyIds": [
      "g:Verb + 得 + 很好",
      "Verb + 得 + 很好"
    ],
    "formation": "Verb + 得 + (Gradadverb +) Adjektiv; mit Objekt: (Verb +) Objekt + Verb + 得 + Adjektiv",
    "notes": "得 steht nach dem Verb, 地 (de) davor (慢慢地走), 的 (de) vor einem Nomen. Komplemente mit Verb- oder Subjekt-Prädikat-Phrase nach 得 folgen auf HSK 5.",
    "explanation": "Nach 得 (de) beschreibt oder bewertet eine Adjektivphrase, wie eine Handlung gewöhnlich abläuft oder abgelaufen ist: 她说得很好 „Sie spricht gut“. Das Adjektiv steht meist mit 很, 非常 (fēicháng), 太 o. Ä.; ein nacktes Adjektiv klingt nach Vergleich. Hat das Verb ein Objekt, wird das Verb wiederholt oder das Objekt vorangestellt: 他说汉语说得很好 / 他汉语说得很好; falsch ist 他说汉语得很好. Verneint wird das Adjektiv, nicht das Verb: 说得不好. Fragen: 说得好不好？ oder 说得怎么样？ Typischer Fehler: 了 zwischen Verb und 得 (他跑了得很快 ist falsch).",
    "quiz": {
      "example": 0,
      "answer": "得",
      "distractors": [
        {
          "text": "的",
          "reason": "的 verbindet ein Attribut mit einem folgenden Nomen; hier folgt eine Bewertung der Handlung."
        },
        {
          "text": "地",
          "reason": "地 steht zwischen Adverbial und Verb (vor dem Verb), nicht nach dem Verb."
        },
        {
          "text": "了",
          "reason": "了 markiert den Abschluss; ein Zustandskomplement braucht 得 nach dem Verb."
        }
      ]
    },
    "related": [
      "g:A比B+动词+得+形容词/A+动词+得+比+B+形容词",
      "g:形容词性短语",
      "g:动词/形容词+得+动词短语",
      "g:动词/形容词+得+主谓短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:数量补语2：表示动作持续的时间",
    "pattern": "数量补语2：表示动作持续的时间",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 123,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "数量补语2",
      "content": "（1）表示动作持续的时间"
    },
    "meaning": "wie lange eine Handlung dauert (Zeitdauer nach dem Verb)",
    "formation": "Verb + (了) + Zeitdauer (+ 的) + Objekt; Verb + Objekt + Verb + (了) + Zeitdauer",
    "notes": "Die Häufigkeit (一次 (yí cì), 两遍 (liǎng biàn)) ist das Mengenkomplement der Handlung (HSK 1); die Zeit seit dem Ende einer Handlung (来中国三年了) ist ein eigener Punkt (HSK 3).",
    "explanation": "Die Zeitdauer (一个小时, 三天, 两年, 一会儿 (yíhuìr)) steht im Chinesischen nach dem Verb, nicht davor wie im Deutschen: 我等了半个小时 „Ich habe eine halbe Stunde gewartet“ (nicht 我半个小时等了). Ein Sachobjekt folgt nach der Dauer (看一个小时书) oder das Verb wird wiederholt (学汉语学了两年). Ein Personalpronomen steht vor der Dauer: 等了他半个小时. Mit 了 nach dem Verb und 了 am Satzende dauert die Handlung noch an: 我学了两年汉语了 „Ich lerne seit zwei Jahren Chinesisch“. Bei Verneinung steht die Dauer meist vor dem Verb: 他三天没来了 „Er ist seit drei Tagen nicht gekommen“.",
    "examples": [
      {
        "chinese": "我每天晚上看一个小时书。",
        "pinyin": "Wǒ měi tiān wǎnshang kàn yí ge xiǎoshí shū.",
        "german": "Ich lese jeden Abend eine Stunde."
      },
      {
        "chinese": "她在北京住了三年。",
        "pinyin": "Tā zài Běijīng zhù le sān nián.",
        "german": "Sie hat drei Jahre in Peking gewohnt."
      },
      {
        "chinese": "我们等了他半个小时。",
        "pinyin": "Wǒmen děng le tā bàn ge xiǎoshí.",
        "german": "Wir haben eine halbe Stunde auf ihn gewartet."
      },
      {
        "chinese": "我学汉语学了两年了。",
        "pinyin": "Wǒ xué Hànyǔ xué le liǎng nián le.",
        "german": "Ich lerne seit zwei Jahren Chinesisch."
      }
    ],
    "related": [
      "g:动词+动量补语",
      "g:形容词+数量补语",
      "g:数量补语3：表示动作结束到某个时间点的间隔时间"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:形容词+数量补语",
    "pattern": "形容词+数量补语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 124,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "数量补语2",
      "content": "（2）形容词+数量补语"
    },
    "meaning": "um wie viel: etwas, ein bisschen, zwei Jahre … (Menge nach dem Adjektiv)",
    "pinyin": "Adj + yìdiǎnr",
    "examples": [
      {
        "chinese": "这件衣服太贵了，能便宜一点儿吗？",
        "pinyin": "Zhè jiàn yīfu tài guì le, néng piányi yìdiǎnr ma?",
        "german": "Dieses Kleidungsstück ist zu teuer, geht es etwas billiger?"
      },
      {
        "chinese": "你说得太快了，请说慢一点儿。",
        "pinyin": "Nǐ shuō de tài kuài le, qǐng shuō màn yìdiǎnr.",
        "german": "Du sprichst zu schnell, bitte sprich etwas langsamer."
      },
      {
        "chinese": "吃了药以后，他的病好一些了。",
        "pinyin": "Chī le yào yǐhòu, tā de bìng hǎo yìxiē le.",
        "german": "Nachdem er das Medikament genommen hat, geht es ihm etwas besser."
      },
      {
        "chinese": "你的手表快了五分钟。",
        "pinyin": "Nǐ de shǒubiǎo kuài le wǔ fēnzhōng.",
        "german": "Deine Uhr geht fünf Minuten vor."
      }
    ],
    "legacyIds": [
      "g:Adj + 一点儿",
      "Adj + 一点儿"
    ],
    "formation": "Adjektiv + 一点儿/一些/Zahl + Zählwort",
    "notes": "Wird das Vergleichsobjekt genannt, entsteht der Vergleichssatz A比B+Adjektiv+Menge (他比我大两岁), ein eigener Punkt.",
    "explanation": "Nach einem Adjektiv gibt eine Mengenangabe an, um wie viel etwas so ist – meist im stillen Vergleich mit etwas Bekanntem: 便宜一点儿 „etwas billiger“, 早十分钟 „zehn Minuten früher“, 好一些 „etwas besser“. Sehr häufig in Bitten und Wünschen: 请说慢一点儿 „Bitte sprich etwas langsamer“. 一点儿 (yìdiǎnr) steht dabei nach dem Adjektiv. Steht 有一点儿 (yǒu yìdiǎnr) vor dem Adjektiv, heißt es „ein bisschen (zu)“ und klingt meist negativ: 有点儿贵 „etwas (zu) teuer“. Typischer Fehler: 一点儿便宜 statt 便宜一点儿. 很 oder 非常 (fēicháng) passen nicht zu einer solchen Mengenangabe.",
    "quiz": {
      "example": 0,
      "answer": "一点儿",
      "distractors": [
        {
          "text": "有点儿",
          "reason": "有点儿 steht vor dem Adjektiv und heißt „etwas zu“; nach dem Adjektiv braucht es 一点儿."
        },
        {
          "text": "一会儿",
          "reason": "一会儿 nennt eine Zeitdauer („eine Weile“), nicht um wie viel etwas billiger werden soll."
        },
        {
          "text": "很",
          "reason": "很 steht als Gradadverb vor dem Adjektiv; nach 便宜 ist es falsch."
        }
      ],
      "accepted": [
        "一些",
        "点儿"
      ]
    },
    "related": [
      "g:动词+动量补语",
      "g:数量补语2：表示动作持续的时间",
      "g:A比B+形容词+数量补语/程度补语",
      "g:A+形容词+B+数量补语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主谓句4：主谓谓语句",
    "pattern": "主谓句4：主谓谓语句",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 125,
      "category": "句子的类型",
      "categoryName": "句型",
      "item": "单句",
      "content": "主谓句4：主谓谓语句"
    },
    "meaning": "Satz mit Thema und Teilsatz als Prädikat („Er – der Körper ist gesund“)",
    "formation": "Subjekt (Thema) + [Subjekt₂ + Prädikat]",
    "notes": "Steht ein Objekt als Thema vorn (这本书我看过), spricht man vom Satz mit Patiens-Subjekt (受事主语), einem eigenen Punkt.",
    "explanation": "Beim Subjekt-Prädikat-Prädikat-Satz ist das Prädikat selbst ein kleiner Satz mit eigenem Subjekt. Das große Subjekt nennt das Thema (Person, Sache, Ort), das kleine Subjekt meist einen Teil, eine Eigenschaft oder einen Bereich davon: 他身体很好 „Er ist gesund“ (wörtlich: „Er – Körper sehr gut“), 我头疼 „Ich habe Kopfschmerzen“, 北京冬天很冷 „In Peking ist der Winter kalt“. Das Prädikat ist oft ein Adjektiv. Mit 的 zwischen den Subjekten (他的身体很好) wird daraus ein gewöhnlicher Satz mit gleichem Inhalt. Die Form ohne 的 ist im gesprochenen Chinesisch sehr häufig; im Deutschen übersetzt man sie meist mit anderer Struktur.",
    "examples": [
      {
        "chinese": "我爷爷身体很好。",
        "pinyin": "Wǒ yéye shēntǐ hěn hǎo.",
        "german": "Mein Großvater ist sehr gesund."
      },
      {
        "chinese": "我今天头有点儿疼。",
        "pinyin": "Wǒ jīntiān tóu yǒudiǎnr téng.",
        "german": "Ich habe heute leichte Kopfschmerzen."
      },
      {
        "chinese": "北京冬天很冷。",
        "pinyin": "Běijīng dōngtiān hěn lěng.",
        "german": "In Peking ist der Winter kalt."
      },
      {
        "chinese": "她最近工作很忙。",
        "pinyin": "Tā zuìjìn gōngzuò hěn máng.",
        "german": "Sie hat in letzter Zeit viel Arbeit."
      }
    ],
    "related": [
      "g:主谓句1：动词谓语句",
      "g:主谓句2：形容词谓语句",
      "g:主谓句3：名词谓语句",
      "g:受事主语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:疑问句：用“还是”连接的选择问句",
    "pattern": "疑问句：用“还是”连接的选择问句",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 126,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "疑问句",
      "content": "用“还是”连接的选择问句"
    },
    "meaning": "A oder B? (Wahlfrage mit „oder“)",
    "pinyin": "háishi (Frage)",
    "examples": [
      {
        "chinese": "你想喝茶还是喝咖啡？",
        "pinyin": "Nǐ xiǎng hē chá háishi hē kāfēi?",
        "german": "Möchtest du Tee oder Kaffee trinken?"
      },
      {
        "chinese": "我们坐地铁去还是坐出租车去？",
        "pinyin": "Wǒmen zuò dìtiě qù háishi zuò chūzūchē qù?",
        "german": "Fahren wir mit der U-Bahn oder mit dem Taxi?"
      },
      {
        "chinese": "你是今天走还是明天走？",
        "pinyin": "Nǐ shì jīntiān zǒu háishi míngtiān zǒu?",
        "german": "Fährst du heute oder morgen ab?"
      },
      {
        "chinese": "这本书是你的还是你姐姐的？",
        "pinyin": "Zhè běn shū shì nǐ de háishi nǐ jiějie de?",
        "german": "Gehört dieses Buch dir oder deiner Schwester?"
      }
    ],
    "legacyIds": [
      "g:还是 (Frage)",
      "还是 (Frage)"
    ],
    "formation": "(是) + A + 还是 + B？",
    "notes": "Mit zwei vollständigen Teilsätzen (是你去，还是我去？) wird die Wahlfrage als Satzgefüge behandelt (eigener Punkt). In 还是 (háishi) … 吧 „doch lieber“ hat das Wort eine andere Bedeutung.",
    "explanation": "Eine Wahlfrage bietet zwei (oder mehr) Möglichkeiten an, zwischen denen der Gefragte wählt. 还是 (háishi) verbindet die Möglichkeiten; das können Nomen, Verbphrasen oder ganze Satzteile sein: 你喝茶还是咖啡？ / 你喝茶还是喝咖啡？ Vor die erste Möglichkeit kann 是 treten: 你是今天走还是明天走？ Weil die Frage schon durch 还是 entsteht, steht am Ende kein 吗 (你喝茶还是咖啡吗？ ist falsch); 呢 ist möglich. In Aussagesätzen heißt „oder“ dagegen 或者 (huòzhě): 喝茶或者咖啡都可以 „Tee oder Kaffee, beides ist in Ordnung“.",
    "quiz": {
      "example": 0,
      "answer": "还是",
      "distractors": [
        {
          "text": "或者",
          "reason": "或者 heißt „oder“ in Aussagesätzen; eine Wahlfrage ohne 吗 braucht 还是."
        },
        {
          "text": "和",
          "reason": "和 heißt „und“ und verbindet vor allem Nomen, keine Möglichkeiten zur Auswahl."
        },
        {
          "text": "还",
          "reason": "还 allein heißt „noch, auch“; für „oder“ in der Frage braucht es 还是."
        }
      ]
    },
    "related": [
      "g:疑问句：是非问句",
      "g:疑问句：正反问句",
      "g:疑问句：特指问句",
      "g:（是）……，还是……",
      "g:还是……吧"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:祈使句：用“别”的祈使句",
    "pattern": "祈使句：用“别”的祈使句",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 127,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "祈使句",
      "content": "用“别”的祈使句"
    },
    "meaning": "Tu das nicht! Lass das! (verneinte Aufforderung)",
    "formation": "(Subjekt +) 别 + Verb(phrase) (+ 了)",
    "notes": "Zum Wort 别 selbst siehe den Wortpunkt 别; die allgemeine Aufforderung (请, 吧) ist der HSK-1-Punkt 祈使句 (qǐshǐjù).",
    "explanation": "Mit 别 (bié) vor dem Verb fordert man jemanden auf, etwas nicht zu tun; es ist kürzer und umgangssprachlicher als 不要 (búyào). Steht 了 am Ende, soll jemand mit etwas aufhören, das gerade geschieht oder schon geplant ist: 别说了！ „Hör auf zu reden!“ Häufig mit Wörtern für Gefühle: 别着急 „Keine Eile“, 别担心 „Mach dir keine Sorgen“. Höflicher wird die Bitte mit 请 oder 您: 请别在这儿抽烟. Das Subjekt ist meist 你 oder 你们 (nǐmen) oder fehlt. In Aussagesätzen verneint man nicht mit 别: „Ich gehe nicht“ heißt 我不去, nicht 我别去.",
    "examples": [
      {
        "chinese": "外面在下雨，别出去了。",
        "pinyin": "Wàimiàn zài xià yǔ, bié chūqù le.",
        "german": "Draußen regnet es, geh lieber nicht raus."
      },
      {
        "chinese": "你别担心，他一定会来的。",
        "pinyin": "Nǐ bié dānxīn, tā yídìng huì lái de.",
        "german": "Mach dir keine Sorgen, er kommt bestimmt."
      },
      {
        "chinese": "上课的时候别玩手机。",
        "pinyin": "Shàngkè de shíhou bié wán shǒujī.",
        "german": "Spiel im Unterricht nicht mit dem Handy."
      },
      {
        "chinese": "别说了，我已经知道了。",
        "pinyin": "Bié shuō le, wǒ yǐjīng zhīdào le.",
        "german": "Hör auf, ich weiß es schon."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "别",
      "distractors": [
        {
          "text": "不",
          "reason": "不 verneint eine Aussage („Du machst dir keine Sorgen“), keine Aufforderung."
        },
        {
          "text": "没",
          "reason": "没 verneint Vergangenes („hast dir keine Sorgen gemacht“), keine Bitte."
        },
        {
          "text": "要",
          "reason": "要 würde das Gegenteil sagen („Du sollst dir Sorgen machen“)."
        }
      ],
      "accepted": [
        "不要"
      ]
    },
    "related": [
      "g:祈使句",
      "g:别"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:“是”字句2：表示说明或特征",
    "pattern": "“是”字句2：表示说明或特征",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 128,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "“是”字句2",
      "content": "表示说明或特征"
    },
    "meaning": "„sein“ als Beschreibung eines Merkmals oder Erklärung („Sie hat große Augen“)",
    "formation": "Subjekt + 是 + Merkmal/Erklärung (Nomenphrase oder 的-Phrase)",
    "notes": "Nicht verwechseln mit der 是……的-Konstruktion, die Zeit, Ort oder Art einer vergangenen Handlung betont (我是坐飞机来的).",
    "explanation": "Anders als beim 是-Satz 1 (A ist B, A gehört zu B) setzt 是 hier A und B nicht gleich, sondern nennt ein Merkmal oder erklärt etwas: 她是大眼睛 „Sie hat große Augen“, 今天是晴天 „Heute ist es sonnig“, 这件衣服是红色的 „Das Kleidungsstück ist rot“; beim Bestellen: 我是米饭 „Ich nehme Reis“. Wörtlich wirkt das unlogisch, im gesprochenen Chinesisch ist es aber sehr häufig. Das Merkmal ist oft ein Nomen mit Adjektiv (大眼睛, 长头发) oder eine 的-Phrase. Im Deutschen übersetzt man meist mit „haben“, „nehmen“ oder einem Adjektiv. Verneint wird mit 不是 (bú shì).",
    "examples": [
      {
        "chinese": "今天是晴天，我们去公园吧。",
        "pinyin": "Jīntiān shì qíngtiān, wǒmen qù gōngyuán ba.",
        "german": "Heute ist es sonnig, lass uns in den Park gehen."
      },
      {
        "chinese": "我妹妹是大眼睛，长头发。",
        "pinyin": "Wǒ mèimei shì dà yǎnjing, cháng tóufa.",
        "german": "Meine Schwester hat große Augen und lange Haare."
      },
      {
        "chinese": "我是米饭，他是面条。",
        "pinyin": "Wǒ shì mǐfàn, tā shì miàntiáo.",
        "german": "Ich nehme Reis, er nimmt Nudeln."
      },
      {
        "chinese": "我的新手机是黑色的。",
        "pinyin": "Wǒ de xīn shǒujī shì hēisè de.",
        "german": "Mein neues Handy ist schwarz."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "是",
      "distractors": [
        {
          "text": "很",
          "reason": "很 steht vor Adjektiven; 晴天 ist ein Nomen und braucht 是."
        },
        {
          "text": "有",
          "reason": "今天有晴天 ergibt keinen Sinn; ein Tag „hat“ kein sonniges Wetter, er „ist“ es."
        },
        {
          "text": "在",
          "reason": "在 gibt einen Ort oder den Verlauf an, keine Beschreibung."
        }
      ]
    },
    "related": [
      "g:“是”字句1：表示等同或类属",
      "g:“是……的”句1：强调时间、地点、方式、动作者"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:“有”字句2：表示达到",
    "pattern": "“有”字句2：表示达到",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 129,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "“有”字句2",
      "content": "表示达到"
    },
    "meaning": "ein Maß erreichen: (gut) 1,80 m groß, (schon) zehn Jahre alt",
    "formation": "Subjekt + 有 + Zahl + Maßeinheit (+ Adjektiv); Frage: 有 + 多 + Adjektiv？",
    "notes": "Mit einem Vergleichsobjekt (他有你这么高吗？) wird 有 zum Vergleich „so … wie“, siehe den Vergleich mit 有 / 没有 (méiyǒu) + 这么 (zhème) / 那么 (nàme).",
    "explanation": "Hier bedeutet 有 nicht „besitzen“, sondern dass etwas eine Größe, Menge oder ein Alter erreicht. Oft schwingt mit, dass das viel ist, oder es ist eine Schätzung: 他有一米八 „Er ist (ganze) 1,80 m groß“. Ein Adjektiv wie 高, 长, 重 kann folgen: 那个楼有三十米高 „Das Gebäude ist gut dreißig Meter hoch“. Gefragt wird mit 有多 + Adjektiv: 有多远？ „Wie weit ist es?“ 了 am Ende zeigt, dass das Maß inzwischen erreicht ist: 孩子已经有十岁了. Verneint wird mit 没有 (méiyǒu): 没有一米八 „keine 1,80 m“.",
    "examples": [
      {
        "chinese": "我弟弟今年有一米八了。",
        "pinyin": "Wǒ dìdi jīnnián yǒu yì mǐ bā le.",
        "german": "Mein kleiner Bruder ist dieses Jahr schon 1,80 m groß."
      },
      {
        "chinese": "从这儿到火车站有多远？",
        "pinyin": "Cóng zhèr dào huǒchēzhàn yǒu duō yuǎn?",
        "german": "Wie weit ist es von hier bis zum Bahnhof?"
      },
      {
        "chinese": "我们学校的新楼有三十米高。",
        "pinyin": "Wǒmen xuéxiào de xīn lóu yǒu sānshí mǐ gāo.",
        "german": "Das neue Gebäude unserer Schule ist gut dreißig Meter hoch."
      },
      {
        "chinese": "他的孩子已经有十岁了。",
        "pinyin": "Tā de háizi yǐjīng yǒu shí suì le.",
        "german": "Sein Kind ist schon zehn Jahre alt."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "有",
      "distractors": [
        {
          "text": "在",
          "reason": "在 gibt einen Ort an, kein erreichtes Maß."
        },
        {
          "text": "很",
          "reason": "很 steht vor Adjektiven, nicht vor einer Zahl mit Maßeinheit."
        },
        {
          "text": "比",
          "reason": "比 braucht ein Vergleichsobjekt („größer als …“), hier wird nur ein Maß genannt."
        }
      ]
    },
    "related": [
      "g:“有”字句1：表示领有",
      "g:A有/没有B（+这么/那么）+形容词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:处所+动词+着(+数量短语)+名词",
    "pattern": "处所+动词+着(+数量短语)+名词",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 130,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "存现句2",
      "content": "处所+动词+着(+数量短语)+名词"
    },
    "meaning": "an einem Ort steht, liegt, hängt … (Zustand am Ort)",
    "formation": "Ort + Verb + 着 (+ Zahl + Zählwort) + Nomen",
    "notes": "Ort + 有 nennt nur die Existenz, Ort + 是 identifiziert, was dort ist. Erscheinen und Verschwinden (前面来了一个人) sind eigene Punkte (HSK 3).",
    "explanation": "Der Existenzsatz mit 着 beschreibt, wie sich jemand oder etwas an einem Ort befindet: 桌子上放着一本书 „Auf dem Tisch liegt ein Buch“. Das Verb nennt die Art (放 „liegen, gestellt sein“, 挂 „hängen“, 写 „geschrieben stehen“, 站 „stehen“, 坐 „sitzen“), 着 zeigt den andauernden Zustand. Der Ort steht am Satzanfang, meist ohne 在, und die Person oder Sache folgt am Ende, oft mit Zahl und Zählwort, weil sie neu ins Gespräch kommt (eher 一本书 als 那本书). Im Vergleich zu 有 („es gibt“) sagt der Satz mit 着 zusätzlich, wie etwas dort ist. Deutsch übersetzt man mit „liegen, stehen, hängen“.",
    "examples": [
      {
        "chinese": "桌子上放着一本书。",
        "pinyin": "Zhuōzi shang fàng zhe yì běn shū.",
        "german": "Auf dem Tisch liegt ein Buch."
      },
      {
        "chinese": "门口站着很多人。",
        "pinyin": "Ménkǒu zhàn zhe hěn duō rén.",
        "german": "Vor der Tür stehen viele Leute."
      },
      {
        "chinese": "黑板上写着几个汉字。",
        "pinyin": "Hēibǎn shang xiě zhe jǐ ge Hànzì.",
        "german": "An der Tafel stehen ein paar Schriftzeichen."
      },
      {
        "chinese": "房间里坐着两个老人。",
        "pinyin": "Fángjiān lǐ zuò zhe liǎng ge lǎorén.",
        "german": "Im Zimmer sitzen zwei alte Leute."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "着",
      "distractors": [
        {
          "text": "过",
          "reason": "过 bezeichnet eine Erfahrung („haben schon einmal gestanden“), keinen gegenwärtigen Zustand."
        },
        {
          "text": "在",
          "reason": "在 kann nicht zwischen Verb und Person stehen; „stehen an“ wäre 站在 + Ort."
        },
        {
          "text": "得",
          "reason": "得 leitet ein Komplement ein (站得很直), keine Person, die sich dort befindet."
        }
      ]
    },
    "related": [
      "g:处所+是+名词",
      "g:处所+有+数量短语+名词",
      "g:表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物",
      "g:着"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A比B+形容词",
    "pattern": "A比B+形容词",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 131,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "比较句1",
      "content": "（1）A比B+形容词"
    },
    "meaning": "A ist …er als B (einfacher Vergleich)",
    "formation": "A + 比 + B + Adjektiv",
    "notes": "不比 (A不比B高) heißt eher „A ist nicht größer als B“ (vielleicht gleich groß) und ist ein eigener Punkt (HSK 3).",
    "explanation": "比 (bǐ) „als“ steht zwischen den Verglichenen, das Adjektiv am Ende: 哥哥比我高 „Mein Bruder ist größer als ich“. Anders als im Deutschen kommt das Adjektiv nicht vor „als“ (哥哥高比我 ist falsch). Das Adjektiv steht ohne 很, 非常 (fēicháng) oder 真 – 他比我很高 ist falsch. Verstärken kann man mit 更 oder 还 (eigener Punkt). Gleiche Teile können wegfallen: 今天比昨天冷, 我的手机比你的新. Verglichen werden können auch Handlungen: 坐地铁比坐出租车便宜. Für „nicht so … wie“ benutzt man 没有 (méiyǒu) … 那么 (nàme), nicht einfach 不比 (bù bǐ).",
    "examples": [
      {
        "chinese": "哥哥比我高。",
        "pinyin": "Gēge bǐ wǒ gāo.",
        "german": "Mein älterer Bruder ist größer als ich."
      },
      {
        "chinese": "今天比昨天冷。",
        "pinyin": "Jīntiān bǐ zuótiān lěng.",
        "german": "Heute ist es kälter als gestern."
      },
      {
        "chinese": "坐地铁比坐出租车便宜。",
        "pinyin": "Zuò dìtiě bǐ zuò chūzūchē piányi.",
        "german": "U-Bahn fahren ist billiger als Taxi fahren."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "比",
      "distractors": [
        {
          "text": "跟",
          "reason": "跟 braucht 一样 für „genauso … wie“ und drückt kein „größer als“ aus."
        },
        {
          "text": "有",
          "reason": "A有B高 heißt „A ist so groß wie B“, nicht „größer als B“."
        },
        {
          "text": "从",
          "reason": "从 nennt einen Ausgangspunkt („von“), keinen Vergleich."
        }
      ]
    },
    "related": [
      "g:A比B+形容词+数量补语/程度补语",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:A比B+动词+得+形容词/A+动词+得+比+B+形容词",
      "g:A比B+更/还+形容词",
      "g:A不比B+形容词",
      "g:比"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A比B+形容词+数量补语/程度补语",
    "pattern": "A比B+形容词+数量补语/程度补语",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 132,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "比较句1",
      "content": "（2）A比B+形容词+数量补语/程度补语"
    },
    "meaning": "A ist um X / viel / etwas …er als B (Vergleich mit Unterschied)",
    "formation": "A + 比 + B + Adjektiv + Zahl/Zählwort, 一点儿/一些 oder 多了/得多",
    "notes": "Ohne 比 und Vergleichsobjekt bleibt nur Adjektiv + Menge (便宜一点儿, eigener Punkt); die Variante A大B三岁 ohne 比 folgt auf HSK 5.",
    "explanation": "Nach dem Adjektiv kann man angeben, wie groß der Unterschied ist: genau (大三岁 „drei Jahre älter“, 贵一百块 „100 Yuan teurer“), gering (好一点儿, 好一些 „etwas besser“) oder groß (冷多了 / 冷得多 „viel kälter“). Alle diese Angaben stehen nach dem Adjektiv, nicht davor: 他比我大三岁, nicht 他比我三岁大; 比我好一点儿, nicht 比我一点儿好. Wie im einfachen 比-Satz stehen 很, 非常 (fēicháng) oder 极了 (jí le) nicht beim Adjektiv. 多了 ist eher gesprochen, 得多 etwas neutraler.",
    "examples": [
      {
        "chinese": "我姐姐比我大三岁。",
        "pinyin": "Wǒ jiějie bǐ wǒ dà sān suì.",
        "german": "Meine Schwester ist drei Jahre älter als ich."
      },
      {
        "chinese": "这件衣服比那件贵一百块。",
        "pinyin": "Zhè jiàn yīfu bǐ nà jiàn guì yìbǎi kuài.",
        "german": "Dieses Kleidungsstück kostet 100 Yuan mehr als das andere."
      },
      {
        "chinese": "今天比昨天冷多了。",
        "pinyin": "Jīntiān bǐ zuótiān lěng duō le.",
        "german": "Heute ist es viel kälter als gestern."
      },
      {
        "chinese": "他的汉语比我好一点儿。",
        "pinyin": "Tā de Hànyǔ bǐ wǒ hǎo yìdiǎnr.",
        "german": "Sein Chinesisch ist etwas besser als meins."
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "多了",
      "distractors": [
        {
          "text": "极了",
          "reason": "极了 heißt „äußerst“ und steht nicht in einem Vergleich mit 比."
        },
        {
          "text": "得很",
          "reason": "得很 verstärkt absolut („sehr kalt“) und passt nicht zu 比."
        },
        {
          "text": "一下",
          "reason": "一下 steht nach Verben für eine kurze Handlung, nicht nach einem Adjektiv im Vergleich."
        }
      ],
      "accepted": [
        "得多"
      ]
    },
    "related": [
      "g:A比B+形容词",
      "g:形容词+数量补语",
      "g:A比B+动词+得+形容词/A+动词+得+比+B+形容词",
      "g:A比B+更/还+形容词",
      "g:A+形容词+B+数量补语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A有/没有B（+这么/那么）+形容词",
    "pattern": "A有/没有B（+这么/那么）+形容词",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 133,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "比较句1",
      "content": "（3）A有/没有B（+这么/那么）+形容词"
    },
    "meaning": "A ist (nicht) so … wie B",
    "formation": "A + 有/没有 + B (+ 这么/那么) + Adjektiv",
    "explanation": "Mit 有 fragt oder sagt man, ob A das Maß von B erreicht; mit 没有 (méiyǒu) heißt es „A ist nicht so … wie B“: 今天没有昨天那么热 „Heute ist es nicht so heiß wie gestern“. 这么 (zhème) oder 那么 (nàme) vor dem Adjektiv verdeutlichen das Maß: 这么 bei etwas Nahem oder Gegenwärtigem, 那么 bei etwas Entfernterem; beide können auch fehlen. Die bejahte Form steht meist in Fragen: 他有你这么高吗？ „Ist er so groß wie du?“ Die Verneinung ist die übliche Gegenform zu A比B: 我比他高 ↔ 我没有他高. Wie beim 比-Satz steht kein 很 vor dem Adjektiv.",
    "notes": "Nicht verwechseln mit 不比 (bù bǐ): 我不比他高 heißt „Ich bin nicht größer als er“ (vielleicht gleich groß), 我没有他高 dagegen „Ich bin kleiner als er“.",
    "examples": [
      {
        "chinese": "我没有他那么高。",
        "pinyin": "Wǒ méiyǒu tā nàme gāo.",
        "german": "Ich bin nicht so groß wie er."
      },
      {
        "chinese": "今天没有昨天那么热。",
        "pinyin": "Jīntiān méiyǒu zuótiān nàme rè.",
        "german": "Heute ist es nicht so heiß wie gestern."
      },
      {
        "chinese": "你弟弟有你这么高吗？",
        "pinyin": "Nǐ dìdi yǒu nǐ zhème gāo ma?",
        "german": "Ist dein kleiner Bruder so groß wie du?"
      },
      {
        "chinese": "我的房间没有你的这么大。",
        "pinyin": "Wǒ de fángjiān méiyǒu nǐ de zhème dà.",
        "german": "Mein Zimmer ist nicht so groß wie deins."
      }
    ],
    "legacyIds": [
      "g:没有...那么",
      "没有...那么"
    ],
    "related": [
      "g:A比B+形容词",
      "g:A比B+形容词+数量补语/程度补语",
      "g:A不比B+形容词",
      "g:A跟B一样+形容词",
      "g:A不如B（+形容词）",
      "g:“有”字句2：表示达到"
    ],
    "quiz": {
      "example": 1,
      "answer": "没有",
      "distractors": [
        {
          "text": "不比",
          "reason": "不比 heißt „nicht …er als“ (vielleicht gleich) und braucht kein 那么."
        },
        {
          "text": "不是",
          "reason": "不是 verneint eine Gleichsetzung und bildet keinen Vergleich mit 那么."
        },
        {
          "text": "比",
          "reason": "比 heißt „…er als“; „nicht so heiß wie“ verlangt 没有."
        }
      ],
      "accepted": [
        "没"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A比B+动词+得+形容词/A+动词+得+比+B+形容词",
    "pattern": "A比B+动词+得+形容词/A+动词+得+比+B+形容词",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 134,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "比较句1",
      "content": "（4）A比B+动词+得+形容词/A+动词+得+比+B+形容词"
    },
    "meaning": "A tut etwas besser, schneller … als B (Vergleich der Ausführung)",
    "formation": "A + 比 + B + Verb + 得 + Adjektiv  /  A + Verb + 得 + 比 + B + Adjektiv",
    "notes": "Die Verneinung bildet man meist mit 没有 (méiyǒu): 我没有他跑得快 „Ich laufe nicht so schnell wie er“.",
    "explanation": "Will man vergleichen, wie zwei Personen etwas tun, verbindet man den 比-Vergleich mit dem Zustandskomplement 得. 比 + B kann vor dem Verb oder nach 得 stehen, die Bedeutung bleibt gleich: 他比我跑得快 = 他跑得比我快 „Er läuft schneller als ich“. Mit Objekt wird das Verb wiederholt oder das Objekt vorangestellt: 他说汉语比我说得好 / 他汉语说得比我好. Das Adjektiv steht ohne 很; Unterschiede gibt man danach an: 跑得比我快多了. Typische Fehler: 得 weglassen (他比我跑快 ist falsch) oder 很 vor das Adjektiv setzen.",
    "examples": [
      {
        "chinese": "哥哥比我跑得快，可是我游泳游得比他快。",
        "pinyin": "Gēge bǐ wǒ pǎo de kuài, kěshì wǒ yóuyǒng yóu de bǐ tā kuài.",
        "german": "Mein Bruder läuft schneller als ich, aber ich schwimme schneller als er."
      },
      {
        "chinese": "他比我来得早，可是走得比我晚。",
        "pinyin": "Tā bǐ wǒ lái de zǎo, kěshì zǒu de bǐ wǒ wǎn.",
        "german": "Er ist früher als ich gekommen, aber später als ich gegangen."
      },
      {
        "chinese": "姐姐比我唱得好，可是我跳舞跳得比她好。",
        "pinyin": "Jiějie bǐ wǒ chàng de hǎo, kěshì wǒ tiàowǔ tiào de bǐ tā hǎo.",
        "german": "Meine Schwester singt besser als ich, aber ich tanze besser als sie."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "得比他",
      "distractors": [
        {
          "text": "比他得",
          "reason": "得 muss direkt nach dem Verb stehen; 比他 folgt erst danach."
        },
        {
          "text": "地比他",
          "reason": "地 steht vor dem Verb; nach dem Verb leitet 得 das Komplement ein."
        },
        {
          "text": "得他比",
          "reason": "比 steht vor dem Vergleichsobjekt: 比他, nicht 他比."
        }
      ]
    },
    "related": [
      "g:A比B+形容词",
      "g:A比B+形容词+数量补语/程度补语",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:动词+得+形容词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:“是……的”句1：强调时间、地点、方式、动作者",
    "pattern": "“是……的”句1：强调时间、地点、方式、动作者",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 135,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "“是……的”句1",
      "content": "强调时间、地点、方式、动作者"
    },
    "meaning": "betont Zeit, Ort, Art oder Täter einer vergangenen Handlung",
    "formation": "Subjekt + (是) + Zeit/Ort/Art + Verb (+ Objekt) + 的; Sache + 是 + Person + Verb + 的",
    "explanation": "Ist schon bekannt, dass etwas geschehen ist, fragt oder betont man mit 是……的 ein Detail: die Zeit (我是去年来的), den Ort (我是在北京学的汉语), die Art und Weise (我们是坐飞机去的) oder wer es getan hat (这些菜是我爸爸做的). 是 steht direkt vor dem betonten Teil, 的 am Ende oder vor einem Objekt. In bejahten Sätzen kann 是 wegfallen (我昨天来的), in verneinten nicht: 我不是坐飞机来的. Die Konstruktion gilt nur für Vergangenes, und 了 wird nicht zusätzlich gesetzt (我是昨天来了的 ist falsch).",
    "notes": "是……的 mit Bewertung des Sprechers (这是不可能的) ist der eigene Punkt 是……的句2 (HSK 3). Ein Satz mit 了 meldet nur, dass etwas geschehen ist; 是……的 setzt das voraus und fragt nach dem Wie, Wann, Wo oder Wer.",
    "examples": [
      {
        "chinese": "你是什么时候来北京的？",
        "pinyin": "Nǐ shì shénme shíhou lái Běijīng de?",
        "german": "Wann bist du nach Peking gekommen?"
      },
      {
        "chinese": "这件衣服我是在网上买的。",
        "pinyin": "Zhè jiàn yīfu wǒ shì zài wǎngshang mǎi de.",
        "german": "Dieses Kleidungsstück habe ich online gekauft."
      },
      {
        "chinese": "我们是坐飞机去的。",
        "pinyin": "Wǒmen shì zuò fēijī qù de.",
        "german": "Wir sind geflogen."
      },
      {
        "chinese": "这些菜是我爸爸做的。",
        "pinyin": "Zhèxiē cài shì wǒ bàba zuò de.",
        "german": "Diese Gerichte hat mein Vater gekocht."
      }
    ],
    "legacyIds": [
      "g:是...的",
      "是...的"
    ],
    "related": [
      "g:“是……的”句2：强调说话人的看法或态度",
      "g:连动句1：前一动作是后一动作的方式",
      "g:过",
      "g:“是”字句2：表示说明或特征"
    ],
    "quiz": {
      "example": 2,
      "answer": "的",
      "distractors": [
        {
          "text": "了",
          "reason": "Nach 是 + Art und Weise schließt 的 den Satz ab; 了 passt nicht in die 是……的-Konstruktion."
        },
        {
          "text": "过",
          "reason": "过 meldet eine Erfahrung („schon einmal“), betont aber nicht die Art der Reise."
        },
        {
          "text": "吗",
          "reason": "吗 macht eine Frage daraus; der deutsche Satz ist eine Aussage."
        }
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:表使令：主语+请/叫/让……+宾语1+动词+宾语2",
    "pattern": "表使令：主语+请/叫/让……+宾语1+动词+宾语2",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 136,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "兼语句1",
      "content": "表使令：主语+请/叫/让……+宾语1+动词+宾语2"
    },
    "meaning": "jemanden bitten, auffordern oder lassen, etwas zu tun",
    "pinyin": "ràng + Person + Verb",
    "examples": [
      {
        "chinese": "妈妈让我早一点儿睡觉。",
        "pinyin": "Māma ràng wǒ zǎo yìdiǎnr shuìjiào.",
        "german": "Mama sagt, ich soll etwas früher schlafen gehen."
      },
      {
        "chinese": "老师叫我们明天带词典来。",
        "pinyin": "Lǎoshī jiào wǒmen míngtiān dài cídiǎn lái.",
        "german": "Der Lehrer hat gesagt, wir sollen morgen ein Wörterbuch mitbringen."
      },
      {
        "chinese": "周末我想请朋友来家里吃饭。",
        "pinyin": "Zhōumò wǒ xiǎng qǐng péngyou lái jiā lǐ chīfàn.",
        "german": "Am Wochenende möchte ich Freunde zum Essen zu mir einladen."
      },
      {
        "chinese": "爸爸不让我一个人出去。",
        "pinyin": "Bàba bú ràng wǒ yí ge rén chūqù.",
        "german": "Papa erlaubt mir nicht, allein hinauszugehen."
      }
    ],
    "legacyIds": [
      "g:让 + Person + Verb",
      "让 + Person + Verb"
    ],
    "formation": "Subjekt + 请/叫/让 + Person + Verb (+ Objekt)",
    "notes": "让 als „bewirken, dass“ mit Gefühlen (这件事让我很高兴) und 使 sind ein eigener Punkt (HSK 4). 请 am Satzanfang ohne Subjekt, etwa 请坐 (qǐng zuò) „Bitte setzen Sie sich“, ist eine einfache Aufforderung.",
    "explanation": "Im Pivotsatz ist die Person zugleich Objekt von 请/叫/让 und Subjekt des folgenden Verbs: 妈妈让我做作业 „Mama sagt, ich soll Hausaufgaben machen“. 请 (qǐng) ist höflich: „bitten“ oder „einladen“ (我请你吃饭 „Ich lade dich zum Essen ein“). 叫 (jiào) und 让 (ràng) heißen „auffordern, sagen, dass jemand etwas tun soll“ oder „lassen, erlauben“; 叫 ist umgangssprachlicher. Die Verneinung steht vor 让/叫: 爸爸不让我出去 „Papa lässt mich nicht hinaus“. 了 steht nicht direkt nach 让/叫/请, sondern nach dem zweiten Verb oder am Satzende.",
    "quiz": {
      "example": 0,
      "answer": "让",
      "distractors": [
        {
          "text": "给",
          "reason": "给 nennt den Empfänger („für, an“), keine Person, die etwas tun soll."
        },
        {
          "text": "跟",
          "reason": "跟 heißt „mit“; „mit mir früher schlafen“ ist nicht gemeint."
        },
        {
          "text": "对",
          "reason": "对 heißt „zu, gegenüber“ und kann keine Aufforderung ausdrücken."
        }
      ],
      "accepted": [
        "叫",
        "要"
      ]
    },
    "related": [
      "g:其他结构类型：兼语短语",
      "g:表致使：主语+使/让+人称代词+动词短语",
      "g:表爱憎义：主语+表扬/批评+宾语1+动词+宾语2"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语+动词+给+宾语1+宾语2",
    "pattern": "主语+动词+给+宾语1+宾语2",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 137,
      "category": "句子的类型",
      "categoryName": "特殊句式",
      "item": "双宾语句2",
      "content": "主语+动词+给+宾语1+宾语2"
    },
    "meaning": "jemandem etwas schenken, leihen, schicken (Verb + „an“ + Person + Sache)",
    "pinyin": "Verb + gěi + Person",
    "examples": [
      {
        "chinese": "我送给你一个小礼物。",
        "pinyin": "Wǒ sònggěi nǐ yí ge xiǎo lǐwù.",
        "german": "Ich schenke dir ein kleines Geschenk."
      },
      {
        "chinese": "你能借给我一百块钱吗？",
        "pinyin": "Nǐ néng jiègěi wǒ yìbǎi kuài qián ma?",
        "german": "Kannst du mir hundert Yuan leihen?"
      },
      {
        "chinese": "王老师教给我们很多有用的东西。",
        "pinyin": "Wáng lǎoshī jiāogěi wǒmen hěn duō yǒuyòng de dōngxi.",
        "german": "Lehrer Wang hat uns viele nützliche Dinge beigebracht."
      },
      {
        "chinese": "昨天他还给了我那本书。",
        "pinyin": "Zuótiān tā huángěi le wǒ nà běn shū.",
        "german": "Gestern hat er mir das Buch zurückgegeben."
      }
    ],
    "legacyIds": [
      "g:Verb + 给 + Person",
      "Verb + 给 + Person"
    ],
    "formation": "Subjekt + Verb + 给 + Person + Sache",
    "notes": "Mit 把 lässt sich die Sache voranstellen (把书还给我), das ist ein 把-Satz.",
    "explanation": "Verben der Übergabe wie 送 „schenken“, 借 „leihen“, 寄 „schicken“, 交 „abgeben“, 卖 „verkaufen“ oder 教 „beibringen“ verbinden sich mit 给 (gěi), das den Empfänger einführt; danach folgt die Sache: 我送给你一个礼物. 给 steht direkt nach dem Verb, 了 meist nach 给: 他借给了我一本书. Bei 借 entscheidet 给 die Richtung: 借给我 „mir leihen“, dagegen 跟我借 „sich von mir leihen“. Einige Verben (送, 教) haben auch ohne 给 zwei Objekte (HSK 1), andere wie 卖 oder 寄 brauchen meist 给. Nicht verwechseln mit 给 als Präposition vor dem Verb: 我给他打电话 „Ich rufe ihn an“.",
    "quiz": {
      "example": 1,
      "answer": "给",
      "distractors": [
        {
          "text": "对",
          "reason": "对 heißt „gegenüber, zu“ und führt keinen Empfänger nach dem Verb ein."
        },
        {
          "text": "跟",
          "reason": "跟 + Person steht vor dem Verb und hieße „sich von mir leihen“ (跟我借)."
        },
        {
          "text": "到",
          "reason": "到 nennt einen Zielort, keine Person, die etwas bekommt."
        }
      ]
    },
    "related": [
      "g:主语+动词+宾语1+宾语2",
      "g:给"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:（是）……，还是……",
    "pattern": "（是）……，还是……",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 138,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "选择复句",
      "content": "（是）……，还是……"
    },
    "meaning": "(ist es so, dass) A, oder B? – Wahl zwischen zwei Teilsätzen",
    "formation": "(是) + Teilsatz₁，还是 + Teilsatz₂",
    "notes": "Die kurze Wahlfrage mit Satzteilen (你喝茶还是咖啡？) ist ein eigener Fragesatz-Punkt. In 还是 (háishi) … 吧 „doch lieber“ hat das Wort eine andere Bedeutung.",
    "explanation": "Das Satzgefüge stellt zwei vollständige Teilsätze als Möglichkeiten nebeneinander: 是 vor dem ersten, 还是 (háishi) vor dem zweiten, dazwischen meist ein Komma. Die Teilsätze können verschiedene Subjekte haben: 是你去，还是我去？ „Gehst du oder gehe ich?“ Als direkte Frage steht am Ende kein 吗. Eingebettet nach 不知道, 不记得 oder 没想好 wird daraus eine indirekte Frage, die man im Deutschen mit „ob … oder …“ wiedergibt; dann endet der Satz mit einem Punkt. 是 ist optional, macht die Wahl aber deutlicher. In Aussagen, bei denen beides gilt, steht dagegen 或者 (huòzhě).",
    "examples": [
      {
        "chinese": "是你给他打电话，还是我给他打电话？",
        "pinyin": "Shì nǐ gěi tā dǎ diànhuà, háishi wǒ gěi tā dǎ diànhuà?",
        "german": "Rufst du ihn an oder rufe ich ihn an?"
      },
      {
        "chinese": "我们是今天晚上去，还是明天早上去？",
        "pinyin": "Wǒmen shì jīntiān wǎnshang qù, háishi míngtiān zǎoshang qù?",
        "german": "Gehen wir heute Abend oder morgen früh hin?"
      },
      {
        "chinese": "我还没想好是去北京，还是去上海。",
        "pinyin": "Wǒ hái méi xiǎnghǎo shì qù Běijīng, háishi qù Shànghǎi.",
        "german": "Ich habe noch nicht entschieden, ob ich nach Peking oder nach Schanghai fahre."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "还是",
      "distractors": [
        {
          "text": "或者",
          "reason": "或者 heißt „oder“ in Aussagen; in einer Wahlfrage ohne 吗 braucht es 还是."
        },
        {
          "text": "可是",
          "reason": "可是 heißt „aber“ und stellt einen Gegensatz her, keine Wahl."
        },
        {
          "text": "还",
          "reason": "还 allein heißt „noch, auch“; „oder“ heißt hier 还是."
        }
      ]
    },
    "related": [
      "g:疑问句：用“还是”连接的选择问句",
      "g:或者……，或者……",
      "g:不是……，就是……",
      "g:还是……吧"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:虽然……，但是……",
    "pattern": "虽然……，但是……",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 139,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "转折复句",
      "content": "虽然……，但是……"
    },
    "meaning": "obwohl …, (aber) …",
    "formation": "虽然 + Einräumung，但是 + Gegenaussage",
    "explanation": "虽然 (suīrán) räumt eine Tatsache ein, 但是 (dànshì) leitet ein, was trotzdem gilt. Anders als im Deutschen stehen beide Wörter zusammen: wörtlich „obwohl …, aber …“; übersetzt wird nur eines davon. 虽然 kann vor oder nach dem Subjekt stehen (虽然他很累 / 他虽然很累); haben beide Teilsätze dasselbe Subjekt, steht es oft vor 虽然. 但是 steht immer am Anfang des zweiten Teilsatzes, vor dessen Subjekt. 虽然 kann wegfallen, 但是 eher nicht. Im zweiten Teil verstärken oft 还是 (háishi) oder 也: 虽然下雨，但是他还是来了.",
    "notes": "但是 (dànshì) kann durch 可是 (kěshì) ersetzt werden (eigener Punkt, HSK 3). Stärkere oder schriftsprachliche Varianten wie 尽管 (jǐnguǎn) … 但是 folgen ab HSK 4.",
    "examples": [
      {
        "chinese": "虽然这家饭店有点儿贵，但是菜很好吃。",
        "pinyin": "Suīrán zhè jiā fàndiàn yǒudiǎnr guì, dànshì cài hěn hǎochī.",
        "german": "Das Restaurant ist zwar etwas teuer, aber das Essen ist sehr gut."
      },
      {
        "chinese": "他虽然六十多岁了，但是身体还很好。",
        "pinyin": "Tā suīrán liùshí duō suì le, dànshì shēntǐ hái hěn hǎo.",
        "german": "Obwohl er über sechzig ist, ist er noch sehr fit."
      },
      {
        "chinese": "虽然考试很难，但是大家都考得不错。",
        "pinyin": "Suīrán kǎoshì hěn nán, dànshì dàjiā dōu kǎo de búcuò.",
        "german": "Die Prüfung war zwar schwer, aber alle haben gut abgeschnitten."
      },
      {
        "chinese": "虽然外面很冷，但是孩子们还是想出去玩。",
        "pinyin": "Suīrán wàimiàn hěn lěng, dànshì háizimen háishi xiǎng chūqù wán.",
        "german": "Obwohl es draußen kalt ist, wollen die Kinder trotzdem raus zum Spielen."
      }
    ],
    "legacyIds": [
      "g:虽然...但是...",
      "虽然...但是..."
    ],
    "quiz": {
      "example": 0,
      "answer": "但是",
      "distractors": [
        {
          "text": "所以",
          "reason": "所以 leitet eine Folge ein („deshalb“); nach 虽然 folgt ein Gegensatz."
        },
        {
          "text": "因为",
          "reason": "因为 nennt einen Grund und passt nicht als Gegenstück zu 虽然."
        },
        {
          "text": "而且",
          "reason": "而且 reiht steigernd an („außerdem“), statt einen Gegensatz einzuleiten."
        }
      ],
      "accepted": [
        "可是",
        "不过"
      ]
    },
    "related": [
      "g:虽然……，可是……",
      "g:尽管……，但是/可是……",
      "g:……，不过……",
      "g:虽……，但/可/却/也……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:因为……，所以……",
    "pattern": "因为……，所以……",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 140,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "因果复句",
      "content": "因为……，所以……"
    },
    "meaning": "weil …, deshalb … (Grund und Folge)",
    "formation": "因为 + Grund，所以 + Folge",
    "explanation": "因为 (yīnwèi) leitet den Grund ein, 所以 (suǒyǐ) die Folge. Im Chinesischen steht der Grund normalerweise zuerst, die Folge danach. Anders als im Deutschen, wo man „weil“ und „deshalb“ selten zusammen benutzt, ist das Paar völlig normal; eines der beiden Wörter darf aber auch fehlen: 因为下雨，我没去 oder 下雨了，所以我没去. 因为 kann vor oder nach dem Subjekt stehen (我因为……, 因为我……), 所以 steht am Anfang des zweiten Teilsatzes, vor dessen Subjekt. Wird der Grund nachgestellt, steht nur 因为: 我没去，因为下雨了. Häufiger Fehler: 所以 vor den Grund setzen.",
    "notes": "Die Frage dazu ist 为什么 (wèi shénme) „warum“. Vor einem Nomen ist 因为 (yīnwèi) eine Präposition „wegen“ (eigener Punkt 因为¹). Formeller und schriftlich: 由于 (yóuyú)……，因此 (yīncǐ)…… (HSK 4).",
    "examples": [
      {
        "chinese": "因为下雨了，所以我们没去公园。",
        "pinyin": "Yīnwèi xià yǔ le, suǒyǐ wǒmen méi qù gōngyuán.",
        "german": "Weil es geregnet hat, sind wir nicht in den Park gegangen."
      },
      {
        "chinese": "因为这件衣服太贵了，所以她没买。",
        "pinyin": "Yīnwèi zhè jiàn yīfu tài guì le, suǒyǐ tā méi mǎi.",
        "german": "Das Teil war zu teuer, deshalb hat sie es nicht gekauft."
      },
      {
        "chinese": "他因为身体不舒服，所以今天没来上课。",
        "pinyin": "Tā yīnwèi shēntǐ bù shūfu, suǒyǐ jīntiān méi lái shàngkè.",
        "german": "Weil er sich nicht wohlfühlte, ist er heute nicht zum Unterricht gekommen."
      }
    ],
    "legacyIds": [
      "g:因为...所以...",
      "因为...所以...",
      "g:正因为…所以…",
      "正因为…所以…"
    ],
    "related": [
      "g:为什么",
      "g:因为¹",
      "g:（由于）……，因此……",
      "g:既然……，就……",
      "g:之所以...是因为..."
    ],
    "quiz": {
      "example": 0,
      "answer": "所以",
      "distractors": [
        {
          "text": "但是",
          "reason": "但是 „aber“ drückt einen Gegensatz aus; Regen und Nicht-Hingehen passen zusammen, und 因为 verlangt eine Folge."
        },
        {
          "text": "虽然",
          "reason": "虽然 „obwohl“ gehört in den ersten Teilsatz (虽然……，但是……), nicht vor die Folge."
        },
        {
          "text": "为什么",
          "reason": "为什么 fragt nach dem Grund und kann keine Folge einleiten."
        }
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一……就……",
    "pattern": "一……就……",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 141,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "紧缩复句",
      "content": "一……就……"
    },
    "meaning": "sobald …, (gleich) …; immer wenn …, dann …",
    "formation": "Subjekt + 一 + Handlung 1 + (Subjekt 2 +) 就 + Handlung 2",
    "explanation": "一 (yī) steht vor der ersten Handlung, 就 (jiù) vor der zweiten: Handlung 2 folgt unmittelbar auf Handlung 1 – „sobald …, …“. Das Muster kann auch eine regelmäßige Folge ausdrücken: „immer wenn …, dann …“ (他一喝咖啡就睡不着). Beide Wörter stehen vor dem Prädikat, also nach dem Subjekt: 我一到家就……, nicht 一我到家. Haben die Teile verschiedene Subjekte, steht 就 nach dem zweiten Subjekt: 老师一进来，我们就……. Bei gleichem Subjekt steht meist kein Komma. 一 folgt der Tonänderung: yí vor dem 4. Ton, yì vor den anderen Tönen.",
    "notes": "……了……就…… (下了课就去, HSK 3) betont nur die Reihenfolge, nicht die Unmittelbarkeit. Feste Wendung: 一看就知道 „sieht man auf den ersten Blick“.",
    "examples": [
      {
        "chinese": "我一到家就给你打电话。",
        "pinyin": "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.",
        "german": "Sobald ich zu Hause bin, rufe ich dich an."
      },
      {
        "chinese": "他一喝咖啡就睡不着。",
        "pinyin": "Tā yì hē kāfēi jiù shuì bu zháo.",
        "german": "Immer wenn er Kaffee trinkt, kann er nicht einschlafen."
      },
      {
        "chinese": "老师一进教室，学生们就不说话了。",
        "pinyin": "Lǎoshī yí jìn jiàoshì, xuéshengmen jiù bù shuōhuà le.",
        "german": "Kaum betrat die Lehrerin das Klassenzimmer, verstummten die Schüler."
      }
    ],
    "legacyIds": [
      "g:一...就...",
      "一...就..."
    ],
    "quiz": {
      "example": 0,
      "answer": "就",
      "distractors": [
        {
          "text": "才",
          "reason": "才 heißt „erst (später als erwartet)“ und widerspricht dem „sofort“ von 一……."
        },
        {
          "text": "再",
          "reason": "再 gehört zu 先……再…… („zuerst …, dann …“), nicht zu 一."
        },
        {
          "text": "也",
          "reason": "也 „auch“ stellt keine zeitliche Folge her; 一……也 ist kein Muster für „sobald“."
        }
      ]
    },
    "related": [
      "g:……了……（就）……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动词+着：（1）表示状态的持续",
    "pattern": "动词+着：（1）表示状态的持续",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 142,
      "category": "动作的态",
      "categoryName": "",
      "item": "持续态",
      "content": "动词+着：（1）表示状态的持续"
    },
    "meaning": "andauernder Zustand nach einer Handlung (steht offen, hat an, hält in der Hand)",
    "formation": "Verb + 着 (+ Objekt)",
    "notes": "Die Fortdauer einer Handlung (外面下着雨) ist der folgende Punkt (2). Ortsangabe + Verb + 着 + Nomen (墙上挂着一张画) ist ein eigener Satztyp (存现句). Verb 1 + 着 + Verb 2 (笑着说) folgt in HSK 3.",
    "explanation": "着 (zhe, neutraler Ton) direkt nach dem Verb beschreibt einen Zustand, der nach einer Handlung bestehen bleibt: 门开着 „Die Tür steht offen“, 他穿着一件红衣服 „Er hat etwas Rotes an“. Typisch sind Verben wie 开, 关, 穿, 戴 (dài), 拿, 坐, 站, 放, 挂 (guà). 着 steht zwischen Verb und Objekt. Verneint wird mit 没(有): 门没开着. Die Frage lautet ……着吗？ oder ……着没有？. Unterschied zu 在 + Verb: 他在穿衣服 „Er zieht sich gerade an“ (Handlung läuft), 他穿着新衣服 „Er hat neue Kleidung an“ (Zustand).",
    "examples": [
      {
        "chinese": "教室的门开着，你进去吧。",
        "pinyin": "Jiàoshì de mén kāi zhe, nǐ jìnqu ba.",
        "german": "Die Tür zum Klassenzimmer steht offen, geh ruhig hinein."
      },
      {
        "chinese": "她今天穿着一件红色的衣服。",
        "pinyin": "Tā jīntiān chuān zhe yí jiàn hóngsè de yīfu.",
        "german": "Sie hat heute etwas Rotes an."
      },
      {
        "chinese": "他手里拿着一本书。",
        "pinyin": "Tā shǒu li ná zhe yì běn shū.",
        "german": "Er hält ein Buch in der Hand."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "着",
      "distractors": [
        {
          "text": "过",
          "reason": "过 meint eine frühere Erfahrung („war schon einmal offen“), keinen Zustand, der jetzt anhält."
        },
        {
          "text": "在",
          "reason": "在 als Verlaufsform steht vor dem Verb, nicht danach."
        },
        {
          "text": "得",
          "reason": "得 nach dem Verb braucht eine Bewertung danach (开得很大); allein beschreibt es keinen Zustand."
        }
      ]
    },
    "related": [
      "g:持续态：表示动作的持续",
      "g:着",
      "g:处所+动词+着(+数量短语)+名词",
      "g:“着”表示动作的伴随：动词1+着+动词2",
      "g:在"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:持续态：表示动作的持续",
    "pattern": "持续态：表示动作的持续",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 143,
      "category": "动作的态",
      "categoryName": "",
      "item": "持续态",
      "content": "（2）表示动作的持续"
    },
    "meaning": "andauernde Handlung: etwas läuft gerade (es regnet gerade, sie unterhalten sich gerade)",
    "formation": "(正/在/正在 +) Verb + 着 (+ Objekt) (+ 呢)",
    "notes": "Zustand nach einer Handlung (门开着) ist Punkt (1). 在 + Verb betont, was gerade getan wird; Verb + 着 malt eher das Andauern aus – oft stehen beide zusammen. Verb 1 + 着 + Verb 2 (笑着说 „lächelnd sagen“) ist ein eigener Punkt (HSK 3).",
    "explanation": "着 (zhe) kann auch zeigen, dass eine Handlung über einen Zeitraum andauert: 外面下着雨 „Draußen regnet es (gerade)“. Häufig steht dazu 正 (zhèng), 在 oder 正在 (zhèngzài) vor dem Verb und 呢 (ne) am Satzende: 他们正说着话呢 „Sie unterhalten sich gerade“. Typische Verben sind 下（雨）, 说, 唱, 等, 看, 听. Anders als bei Punkt (1) geht es nicht um einen Zustand nach einer Handlung, sondern darum, dass die Handlung selbst noch läuft. Oft beschreibt der Satz damit die Lage, in die etwas anderes fällt: 我到的时候，他们正说着话呢. Abgeschlossene Handlungen (mit 了) passen nicht dazu.",
    "examples": [
      {
        "chinese": "外面正下着雨，你别出去了。",
        "pinyin": "Wàimian zhèng xià zhe yǔ, nǐ bié chūqu le.",
        "german": "Draußen regnet es gerade, geh lieber nicht raus."
      },
      {
        "chinese": "我到的时候，他们正说着话呢。",
        "pinyin": "Wǒ dào de shíhou, tāmen zhèng shuō zhe huà ne.",
        "german": "Als ich ankam, unterhielten sie sich gerade."
      },
      {
        "chinese": "大家都在等着你呢，快点儿来吧！",
        "pinyin": "Dàjiā dōu zài děng zhe nǐ ne, kuài diǎnr lái ba!",
        "german": "Alle warten schon auf dich, komm schnell!"
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "着",
      "distractors": [
        {
          "text": "了",
          "reason": "了 zeigt eine abgeschlossene Handlung und passt nicht zu 正……呢 („gerade“)."
        },
        {
          "text": "过",
          "reason": "过 meint eine frühere Erfahrung, keine Handlung, die gerade läuft."
        },
        {
          "text": "得",
          "reason": "得 verlangt danach eine Bewertung der Handlung (说得很好), kein Objekt wie 话."
        }
      ]
    },
    "related": [
      "g:动词+着：（1）表示状态的持续",
      "g:着",
      "g:正在",
      "g:在",
      "g:“着”表示动作的伴随：动词1+着+动词2"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:经历态：用动态助词“过”表示",
    "pattern": "经历态：用动态助词“过”表示",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Aspekt",
    "syllabus": {
      "no": 144,
      "category": "动作的态",
      "categoryName": "",
      "item": "经历态",
      "content": "用动态助词“过”表示"
    },
    "meaning": "Erfahrung: etwas schon einmal getan haben (auch „noch nie“ und Frage)",
    "formation": "Verb + 过 (+ Objekt)；没(有) + Verb + 过",
    "notes": "Oft verstärkt durch 以前 (yǐqián) „früher“ oder 从来 (cónglái) 没……过 „noch nie“. Das Zeichen 过 ist auch Verb „überqueren, verbringen“: 过马路 (guò mǎlù), 过生日 (guò shēngrì); dazu Richtungskomplement: 走过来 (zǒu guòlai).",
    "explanation": "过 (guo, meist neutraler Ton) direkt nach dem Verb drückt aus, dass man etwas irgendwann schon einmal gemacht oder erlebt hat: 我去过上海 „Ich war schon einmal in Shanghai“. Wichtig ist die Erfahrung, nicht der genaue Zeitpunkt; die Handlung ist vorbei. Verneinung: 没(有) + Verb + 过 „noch nie“ (nicht mit 不): 我没去过. Fragen: ……过……吗？ oder mit 没有 (méiyǒu) am Ende. Eine Häufigkeit folgt nach 过: 去过两次. Unterschied zu 了: 他去了上海 „Er ist nach Shanghai gefahren“ (vielleicht noch dort), 他去过上海 „Er war schon einmal dort“ (ist zurück).",
    "examples": [
      {
        "chinese": "我去过上海，可是没去过西安。",
        "pinyin": "Wǒ qù guo Shànghǎi, kěshì méi qù guo Xī'ān.",
        "german": "Ich war schon in Shanghai, aber noch nie in Xi’an."
      },
      {
        "chinese": "你看过这个电影吗？",
        "pinyin": "Nǐ kàn guo zhège diànyǐng ma?",
        "german": "Hast du diesen Film schon einmal gesehen?"
      },
      {
        "chinese": "她以前学过两年汉语，现在还会说一点儿。",
        "pinyin": "Tā yǐqián xué guo liǎng nián Hànyǔ, xiànzài hái huì shuō yìdiǎnr.",
        "german": "Sie hat früher zwei Jahre Chinesisch gelernt und kann noch ein bisschen sprechen."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "过",
      "distractors": [
        {
          "text": "着",
          "reason": "着 beschreibt einen andauernden Zustand und fragt nicht nach einer Erfahrung („schon einmal“)."
        },
        {
          "text": "在",
          "reason": "在 steht als Verlaufsform vor dem Verb, nicht danach."
        },
        {
          "text": "得",
          "reason": "得 nach dem Verb verlangt eine Bewertung (看得很清楚), kein Objekt wie 这个电影."
        }
      ]
    },
    "related": [
      "g:过",
      "g:动词+着：（1）表示状态的持续",
      "g:了¹",
      "g:没（有）"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:序数表示法2：数词+量词",
    "pattern": "序数表示法2：数词+量词",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 145,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "序数表示法2：数词+量词"
    },
    "meaning": "Ordnungszahl ohne dì: Zahl + Zählwort (dritter Stock, zweite Klasse, Zimmer 203)",
    "formation": "Zahl + Zählwort/Ordnungswort (楼, 号, 层, 年级, 班 …) (+ Nomen)",
    "notes": "Ordnungszahlen mit 第 (dì) wie 第一次 (dìyī cì) sind HSK 1. 层 kann je nach Satz auch die Anzahl der Stockwerke angeben (一座三层的楼 „ein dreistöckiges Gebäude“). Achtung: In China zählt das Erdgeschoss als 一楼 (yī lóu); 五楼 entspricht also dem deutschen vierten Stock.",
    "explanation": "Bei Stockwerken, Nummern, Klassen, Zimmern oder Buslinien steht die Zahl ohne 第 (dì) direkt vor dem Zählwort und gibt schon die Reihenfolge an: 三楼 (sān lóu) „dritter Stock“, 二年级 (èr niánjí) „zweite Klasse“, 五号 (wǔ hào) „Nummer fünf“ (auch: der Fünfte im Monat), 二〇三号房间 „Zimmer 203“. Zimmernummern liest man meist Ziffer für Ziffer (èr líng sān), die Eins dabei oft yāo. Weil es um die Reihenfolge, nicht um eine Menge geht, heißt „zwei“ hier 二, nicht 两: 二楼, 二年级 – 两楼 wäre falsch. 一 behält dabei meist seinen ersten Ton (yī lóu). Bei Mengenangaben mit 个, 本 usw. (三个人) zeigt dieselbe Form dagegen die Anzahl.",
    "examples": [
      {
        "chinese": "我家在五楼，他家在二楼。",
        "pinyin": "Wǒ jiā zài wǔ lóu, tā jiā zài èr lóu.",
        "german": "Wir wohnen im fünften Stock, er wohnt im zweiten."
      },
      {
        "chinese": "我妹妹今年上二年级。",
        "pinyin": "Wǒ mèimei jīnnián shàng èr niánjí.",
        "german": "Meine jüngere Schwester geht dieses Jahr in die zweite Klasse."
      },
      {
        "chinese": "我住在二〇三号房间。",
        "pinyin": "Wǒ zhù zài èr líng sān hào fángjiān.",
        "german": "Ich wohne in Zimmer 203."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "二",
      "distractors": [
        {
          "text": "两",
          "reason": "两 zählt Mengen (两个人); bei Reihenfolgen wie der Klassenstufe steht 二."
        },
        {
          "text": "第二个",
          "reason": "Klassenstufen stehen ohne 第 und ohne 个: 二年级, nicht 第二个年级."
        },
        {
          "text": "几",
          "reason": "几 fragt nach der Zahl („in welche Klasse?“), der Satz nennt sie aber."
        }
      ]
    },
    "related": [
      "g:序数表达法1：第+数词",
      "g:第—"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:概数表达法1：（1）用“几”表示概数",
    "pattern": "概数表达法1：（1）用“几”表示概数",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 146,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "概数表达法1：（1）用“几”表示概数"
    },
    "meaning": "einige, ein paar (jǐ als Schätzzahl: über zehn, einige Dutzend)",
    "formation": "几 + Zählwort + Nomen；十几 / 几十 / 几百 (+ Zählwort + Nomen)",
    "notes": "Weitere Schätzungen: Zahl + 多 wie 二十多个 (èrshí duō ge) im nächsten Punkt; ab HSK 3 大概 (dàgài) und benachbarte Zahlen wie 三四个; ab HSK 4 来 und 左右 (zuǒyòu). Das Fragewort 几 „wie viele“ ist HSK 1.",
    "explanation": "几 (jǐ) ist nicht nur ein Fragewort: In Aussagesätzen steht es für eine unbestimmte kleine Zahl, etwa zwei bis neun: 我买了几本书 „Ich habe ein paar Bücher gekauft“. Zusammen mit runden Zahlen: 十几 (shíjǐ) „etwas über zehn“ (11–19), 几十 (jǐshí) „einige Dutzend“, 几百 „einige hundert“, 八十几岁 „über achtzig Jahre alt“. Wie jede Zahl braucht 几 vor einem Nomen ein Zählwort: 几个人; ohne Zählwort steht es nur in festen Wendungen. Ob 几 fragt oder schätzt, zeigen Satzzeichen und Betonung: 你有几本书？ (Frage) – 我有几本书。 (Aussage). 好几个 (hǎojǐ ge) heißt „etliche, mehrere“.",
    "examples": [
      {
        "chinese": "桌子上有几本书。",
        "pinyin": "Zhuōzi shang yǒu jǐ běn shū.",
        "german": "Auf dem Tisch liegen ein paar Bücher."
      },
      {
        "chinese": "我们班有十几个学生。",
        "pinyin": "Wǒmen bān yǒu shíjǐ ge xuésheng.",
        "german": "In unserer Klasse sind etwas über zehn Schüler."
      },
      {
        "chinese": "他爷爷八十几岁了，身体还很好。",
        "pinyin": "Tā yéye bāshí jǐ suì le, shēntǐ hái hěn hǎo.",
        "german": "Sein Großvater ist über achtzig und noch sehr gesund."
      },
      {
        "chinese": "这家商店每天有几百个人来买东西。",
        "pinyin": "Zhè jiā shāngdiàn měi tiān yǒu jǐbǎi ge rén lái mǎi dōngxi.",
        "german": "In diesen Laden kommen jeden Tag einige hundert Leute zum Einkaufen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "几",
      "distractors": [
        {
          "text": "多少",
          "reason": "多少 fragt nach der Anzahl („wie viele Bücher?“) und kann nicht „ein paar“ bedeuten."
        },
        {
          "text": "些",
          "reason": "些 ist selbst ein Zählwort (一些书); vor 本 kann es nicht stehen."
        },
        {
          "text": "每",
          "reason": "每 heißt „jeder“ und ergibt mit 有 keinen sinnvollen Satz über „ein paar Bücher“."
        }
      ]
    },
    "related": [
      "g:几",
      "g:数词+多+量词",
      "g:数的表达法：相邻数词连用表示概数",
      "g:概数表达法2：（1）用“大概”表示概数"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:数词+多+量词",
    "pattern": "数词+多+量词",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 147,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "（2）数词+多+量词"
    },
    "meaning": "über zehn, über zwanzig … (runde Zahl + duō + Zählwort: ganze Einheiten mehr)",
    "formation": "runde Zahl (十, 二十, 一百 …) + 多 + Zählwort (+ Nomen)",
    "notes": "十多斤 „etwa elf bis neunzehn Jin“ – aber 十斤多 „zehn Jin und ein bisschen“. 二十几个 bedeutet fast dasselbe wie 二十多个.",
    "explanation": "多 (duō) nach einer runden Zahl, die auf null endet, bedeutet „und noch etwas mehr“: 二十多个人 „über zwanzig Leute“ (also etwa 21–29), 一百多块钱 „über hundert Kuai“, 十多年 „über zehn Jahre“. 多 steht hier vor dem Zählwort, weil der Überschuss aus ganzen Einheiten besteht (mehr Personen, mehr Kuai, mehr Jahre). Das ist typisch für Alter, Preise, Personen und Zeiträume. Bei Zahlen, die nicht auf null enden (drei, fünfzehn), steht 多 nicht vor dem Zählwort: 三多个 ist falsch – dort gilt Zahl + Zählwort + 多 (三个多小时, nächster Punkt).",
    "examples": [
      {
        "chinese": "我们班有二十多个学生。",
        "pinyin": "Wǒmen bān yǒu èrshí duō ge xuésheng.",
        "german": "In unserer Klasse sind über zwanzig Schüler."
      },
      {
        "chinese": "这件衣服一百多块钱。",
        "pinyin": "Zhè jiàn yīfu yìbǎi duō kuài qián.",
        "german": "Dieses Kleidungsstück kostet über hundert Yuan."
      },
      {
        "chinese": "他在北京住了十多年了。",
        "pinyin": "Tā zài Běijīng zhù le shí duō nián le.",
        "german": "Er lebt schon seit über zehn Jahren in Peking."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "多",
      "distractors": [
        {
          "text": "半",
          "reason": "半 „halb“ kann nicht zwischen 二十 und 个 stehen; Personen zählt man nicht in Hälften."
        },
        {
          "text": "些",
          "reason": "些 ist ein Zählwort für eine unbestimmte Menge und steht nicht nach einer Zahl."
        },
        {
          "text": "少",
          "reason": "少 „wenig“ bildet keine Schätzzahl; „unter zwanzig“ drückt man anders aus."
        }
      ],
      "accepted": [
        "几"
      ]
    },
    "related": [
      "g:数词+量词+多",
      "g:概数表达法1：（1）用“几”表示概数",
      "g:概数表示法3：数词+来+量词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:数词+量词+多",
    "pattern": "数词+量词+多",
    "level": "HSK2",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 148,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "（3）数词+量词+多"
    },
    "meaning": "etwas über eine Stunde … (Zahl + Zählwort + duō: ein Bruchteil der Einheit mehr)",
    "formation": "Zahl + Zählwort + 多 (+ Nomen)",
    "notes": "Vergleiche den vorigen Punkt (二十多个, ganze Einheiten mehr). 一个半小时 „anderthalb Stunden“ nennt dagegen eine genaue Menge.",
    "explanation": "Steht 多 (duō) nach dem Zählwort, ist der Überschuss nur ein Teil der Einheit: 一个多小时 „etwas über eine Stunde“ (also weniger als zwei), 两块多钱 „zwei Kuai und ein paar Mao“, 三年多 „etwas über drei Jahre“. Das geht mit teilbaren Einheiten für Zeit, Geld, Gewicht oder Strecke: 小时 (xiǎoshí), 年, 天, 块, 斤, 公里 (gōnglǐ). Bei Zahlen, die nicht auf null enden (1–9, 15 …), steht 多 immer hier: 五个多月, nicht 五多个月. Bei runden Zahlen ändert die Stellung die Bedeutung: 十斤多 „zehn Jin und ein bisschen“, 十多斤 „über zehn Jin“ (bis neunzehn).",
    "examples": [
      {
        "chinese": "我在这儿等了你一个多小时了！",
        "pinyin": "Wǒ zài zhèr děng le nǐ yí ge duō xiǎoshí le!",
        "german": "Ich warte hier schon über eine Stunde auf dich!"
      },
      {
        "chinese": "这种苹果两块多钱一斤。",
        "pinyin": "Zhè zhǒng píngguǒ liǎng kuài duō qián yì jīn.",
        "german": "Diese Äpfel kosten etwas über zwei Yuan pro Pfund."
      },
      {
        "chinese": "她学汉语学了三年多了。",
        "pinyin": "Tā xué Hànyǔ xué le sān nián duō le.",
        "german": "Sie lernt schon seit über drei Jahren Chinesisch."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "多",
      "distractors": [
        {
          "text": "半",
          "reason": "一个半小时 heißt genau „anderthalb Stunden“, nicht „über eine Stunde“."
        },
        {
          "text": "几",
          "reason": "几 steht vor dem Zählwort oder nach einer runden Zahl (十几个), nicht nach 个."
        },
        {
          "text": "些",
          "reason": "些 ist selbst ein Zählwort und kann nicht nach 一个 stehen."
        }
      ]
    },
    "related": [
      "g:数词+多+量词",
      "g:概数表达法1：（1）用“几”表示概数"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  }
]);
