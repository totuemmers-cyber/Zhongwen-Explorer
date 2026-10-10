// Zhongwen Explorer grammar, HSK3: points of the HSK 2025 grammar syllabus (语法大纲, scripts/hsk2025/grammar.json).
// Built by scripts/grammar/build-grammar.cjs; content by the enrichment campaign.
window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat([
  {
    "id": "g:老—",
    "pattern": "老—",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortbildung",
    "syllabus": {
      "no": 149,
      "category": "语素",
      "categoryName": "前缀",
      "item": "",
      "content": "老—"
    },
    "meaning": "Vorsilbe lǎo-: vertraute Anrede (Lao Wang), Tiernamen, Geschwisterfolge (das älteste Kind)",
    "formation": "老 + einsilbiger Familienname / Tiername / Zahl (Rang unter Geschwistern)",
    "notes": "Gegenstück für Jüngere: 小 + Familienname (小李, HSK 1). Dagegen ist 老 in 老人 (lǎorén) oder 老朋友 (lǎo péngyou) ein normales Adjektiv „alt“. 老实说 (lǎoshi shuō) „ehrlich gesagt“ ist eine feste Wendung (HSK 7–9).",
    "explanation": "Als Vorsilbe heißt 老 (lǎo) meist nicht mehr „alt“. 1) Vor einem einsilbigen Familiennamen ist es eine vertraute, respektvolle Anrede unter Bekannten und Kollegen, meist für Gleichaltrige oder Ältere: 老王 (Lǎo Wáng), 老张. Gegenüber Fremden oder Vorgesetzten in förmlichen Situationen benutzt man eher Titel (王老师, 王经理). 2) In festen Tiernamen: 老虎 (lǎohǔ) „Tiger“, 老鼠 (lǎoshǔ) „Maus, Ratte“. 3) Vor Zahlen zeigt es die Reihenfolge unter Geschwistern: 老大 (lǎodà) „das älteste Kind“, 老二 (lǎo'èr) „das zweite Kind“. Auch in 老师 (lǎoshī) und 老板 (lǎobǎn) hat 老 keine Altersbedeutung mehr.",
    "examples": [
      {
        "chinese": "老王，你今天怎么来得这么早？",
        "pinyin": "Lǎo Wáng, nǐ jīntiān zěnme lái de zhème zǎo?",
        "german": "Lao Wang, wieso bist du heute so früh da?"
      },
      {
        "chinese": "我是家里的老大，下面还有两个妹妹。",
        "pinyin": "Wǒ shì jiā li de lǎodà, xiàmian hái yǒu liǎng ge mèimei.",
        "german": "Ich bin das älteste Kind, nach mir kommen noch zwei jüngere Schwestern."
      },
      {
        "chinese": "孩子们在动物园里看到了老虎。",
        "pinyin": "Háizimen zài dòngwùyuán li kàndào le lǎohǔ.",
        "german": "Die Kinder haben im Zoo Tiger gesehen."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "老",
      "distractors": [
        {
          "text": "第",
          "reason": "第 steht nur vor Zahlen (第一); 第大 gibt es nicht."
        },
        {
          "text": "小",
          "reason": "小 vor Namen bezeichnet Jüngere (小李); 小大 ist kein Wort für das älteste Kind."
        },
        {
          "text": "很",
          "reason": "很大 hieße „sehr groß“ und passt nicht nach 家里的."
        }
      ]
    },
    "related": [
      "g:小—",
      "g:第—",
      "g:老实说"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:后缀@HSK3",
    "pattern": "后缀",
    "level": "HSK3",
    "kind": "overview",
    "category": "Wortbildung",
    "syllabus": {
      "no": 150,
      "category": "语素",
      "categoryName": "后缀",
      "item": "",
      "content": "—家、—子、—员"
    },
    "words": [
      "—家",
      "—子",
      "—员"
    ],
    "meaning": "Nachsilben -jiā (Fachmann), -zi (Nomen), -yuán (Funktion, Beruf)",
    "explanation": "Diese Nachsilben bilden Nomen:\n—家 (jiā) – Person, die ein Fach beherrscht oder beruflich ausübt: 作家 (zuòjiā) „Schriftsteller“, 画家 (huàjiā) „Maler“, 科学家 (kēxuéjiā) „Wissenschaftler“. Nicht zu verwechseln mit 家 „Familie, Zuhause“ (我家).\n—子 (zi, neutraler Ton) – macht ein Zeichen zum selbstständigen Nomen, ohne eigene Bedeutung: 桌子 (zhuōzi) „Tisch“, 椅子 (yǐzi) „Stuhl“, 孩子 (háizi) „Kind“, 鼻子 (bízi) „Nase“. Mit vollem Ton (zǐ) ist 子 dagegen kein Suffix, etwa in 电子 (diànzǐ) „elektronisch“.\n—员 (yuán) – Person mit einer bestimmten Aufgabe, oft ein Beruf oder eine Mitgliedschaft: 服务员 (fúwùyuán) „Kellner, Bedienung“, 运动员 (yùndòngyuán) „Sportler“, 演员 (yǎnyuán) „Schauspieler“.",
    "examples": [
      {
        "chinese": "她长大以后想当作家。",
        "pinyin": "Tā zhǎngdà yǐhòu xiǎng dāng zuòjiā.",
        "german": "Sie möchte später Schriftstellerin werden."
      },
      {
        "chinese": "这张桌子太小了，我们换一张吧。",
        "pinyin": "Zhè zhāng zhuōzi tài xiǎo le, wǒmen huàn yì zhāng ba.",
        "german": "Dieser Tisch ist zu klein, nehmen wir einen anderen."
      },
      {
        "chinese": "服务员，请给我们两杯水。",
        "pinyin": "Fúwùyuán, qǐng gěi wǒmen liǎng bēi shuǐ.",
        "german": "Entschuldigung, bringen Sie uns bitte zwei Gläser Wasser."
      },
      {
        "chinese": "他是运动员，每天早上都要跑步。",
        "pinyin": "Tā shì yùndòngyuán, měi tiān zǎoshang dōu yào pǎobù.",
        "german": "Er ist Sportler und läuft jeden Morgen."
      }
    ],
    "related": [
      "g:小—",
      "g:第—"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:方位名词@HSK3",
    "pattern": "方位名词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 151,
      "category": "词类",
      "categoryName": "名词",
      "item": "方位名词",
      "content": "东、南、西、北、北方、东方、南方、西方、中间"
    },
    "words": [
      "东",
      "南",
      "西",
      "北",
      "北方",
      "东方",
      "南方",
      "西方",
      "中间"
    ],
    "meaning": "Himmelsrichtungen und Mitte: Osten, Süden, Westen, Norden, Mitte",
    "explanation": "Himmelsrichtungen und Lagewörter:\n东 (dōng) – Osten; 东边 (dōngbian) „im Osten, östlich“.\n南 (nán) – Süden; 南边 (nánbian) „im Süden“.\n西 (xī) – Westen; 西边 (xībian) „im Westen“.\n北 (běi) – Norden; 北边 (běibian) „im Norden“.\n东方 (dōngfāng) – Osten; auch „der Osten, Asien“ im kulturellen Sinn.\n西方 (xīfāng) – Westen; auch „der Westen“ (Europa, Amerika).\n南方 (nánfāng) – Süden, besonders „Südchina“.\n北方 (běifāng) – Norden, besonders „Nordchina“.\n中间 (zhōngjiān) – Mitte, zwischen: A 和 B 中间 „zwischen A und B“.\nAls Ortsangabe stehen die einsilbigen Wörter meist mit 边 (biān) oder 面 (miàn): 学校东边; nach 往 oder 向 auch allein: 往北走. Bei Zwischenrichtungen steht Ost/West vorn: 东北 (dōngběi) „Nordosten“, 西南 (xīnán) „Südwesten“ – umgekehrt wie im Deutschen.",
    "examples": [
      {
        "chinese": "我们的学校在公园东边。",
        "pinyin": "Wǒmen de xuéxiào zài gōngyuán dōngbian.",
        "german": "Unsere Schule liegt östlich vom Park."
      },
      {
        "chinese": "从这儿往北走，就能看到火车站。",
        "pinyin": "Cóng zhèr wǎng běi zǒu, jiù néng kàndào huǒchēzhàn.",
        "german": "Wenn du von hier nach Norden gehst, siehst du den Bahnhof."
      },
      {
        "chinese": "北方的冬天比南方冷多了。",
        "pinyin": "Běifāng de dōngtiān bǐ nánfāng lěng duō le.",
        "german": "Im Norden sind die Winter viel kälter als im Süden."
      },
      {
        "chinese": "我坐在他们两个人中间。",
        "pinyin": "Wǒ zuò zài tāmen liǎng ge rén zhōngjiān.",
        "german": "Ich sitze zwischen den beiden."
      },
      {
        "chinese": "很多西方人喜欢中国菜。",
        "pinyin": "Hěn duō xīfāngrén xǐhuan Zhōngguó cài.",
        "german": "Viele Menschen aus dem Westen mögen chinesisches Essen."
      }
    ],
    "related": [
      "g:方位名词@HSK1",
      "g:左",
      "g:右"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:能愿动词@HSK3",
    "pattern": "能愿动词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 152,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "需要、该、应该、愿意、得"
    },
    "words": [
      "需要",
      "该",
      "应该",
      "愿意",
      "得"
    ],
    "meaning": "Modalverben: brauchen, sollen, bereit sein, müssen",
    "notes": "Die Modalverben aus HSK 1 – 会, 能, 可以 (kěyǐ), 想, 要 – bleiben die häufigsten; 要 (yào) kann wie 得 (děi) „müssen“ heißen.",
    "explanation": "Diese Modalverben stehen vor dem Hauptverb:\n需要 (xūyào) – „müssen, nötig sein“; vor einem Nomen auch „brauchen“: 你需要休息, 我需要钱. Verneinung 不需要 „nicht nötig“.\n应该 (yīnggāi) – „sollen, sollte“: was richtig oder vernünftig ist; auch Vermutung „müsste eigentlich“: 他应该到了. Verneinung 不应该.\n该 (gāi) – kurze, gesprochene Form von 应该; 该……了 heißt „es ist Zeit zu …“: 该吃饭了.\n愿意 (yuànyì) – „bereit sein, gern wollen“: man tut etwas aus freien Stücken. Verneinung 不愿意 „nicht wollen“.\n得 (děi) – „müssen“, umgangssprachlich. Verneinung nicht 不得 (bù děi), sondern 不用 (búyòng) „nicht müssen“.",
    "examples": [
      {
        "chinese": "你感冒了，需要多休息。",
        "pinyin": "Nǐ gǎnmào le, xūyào duō xiūxi.",
        "german": "Du bist erkältet, du musst dich viel ausruhen."
      },
      {
        "chinese": "已经十二点了，我们该睡觉了。",
        "pinyin": "Yǐjīng shí'èr diǎn le, wǒmen gāi shuìjiào le.",
        "german": "Es ist schon zwölf, wir sollten schlafen gehen."
      },
      {
        "chinese": "这件事你应该早点儿告诉我。",
        "pinyin": "Zhè jiàn shì nǐ yīnggāi zǎo diǎnr gàosu wǒ.",
        "german": "Das hättest du mir früher sagen sollen."
      },
      {
        "chinese": "他不愿意一个人去。",
        "pinyin": "Tā bú yuànyì yí ge rén qù.",
        "german": "Er will nicht allein hingehen."
      },
      {
        "chinese": "太晚了，我得回家了。",
        "pinyin": "Tài wǎn le, wǒ děi huí jiā le.",
        "german": "Es ist zu spät, ich muss nach Hause."
      }
    ],
    "related": [
      "g:得（能愿动词）",
      "g:需要",
      "g:应该",
      "g:要",
      "g:能",
      "g:可以"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:得（能愿动词）",
    "pattern": "得",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 152,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "需要、该、应该、愿意、得"
    },
    "meaning": "müssen (děi, umgangssprachlich)",
    "pinyin": "děi + Verb",
    "examples": [
      {
        "chinese": "已经十点了，我得走了。",
        "pinyin": "Yǐjīng shí diǎn le, wǒ děi zǒu le.",
        "german": "Es ist schon zehn Uhr, ich muss los."
      },
      {
        "chinese": "明天有考试，你今天晚上得好好复习。",
        "pinyin": "Míngtiān yǒu kǎoshì, nǐ jīntiān wǎnshang děi hǎohǎo fùxí.",
        "german": "Morgen ist die Prüfung, du musst heute Abend gründlich wiederholen."
      },
      {
        "chinese": "妈妈生病了，他得在家照顾她。",
        "pinyin": "Māma shēngbìng le, tā děi zài jiā zhàogù tā.",
        "german": "Seine Mutter ist krank, er muss zu Hause bleiben und sich um sie kümmern."
      }
    ],
    "legacyIds": [
      "g:得 (děi) müssen",
      "得 (děi) müssen"
    ],
    "formation": "Subjekt + 得 (děi) + Verb",
    "notes": "Andere Lesungen des Zeichens: Strukturpartikel 得 (de) nach dem Verb wie in 说得很好 (shuō de hěn hǎo), HSK 2; Verb 得 (dé) „bekommen“, 得了第一名. Mit Zeit- oder Geldangabe heißt 得 (děi) auch „brauchen, dauern“: 这件事得三天.",
    "explanation": "Als Modalverb wird 得 děi gesprochen (nicht de oder dé) und heißt „müssen“: eine Notwendigkeit oder Pflicht, vor allem in der gesprochenen Sprache: 我得走了 „Ich muss los“. Häufig mit Adverbien davor: 还得, 一定得, 就得. Die Verneinung ist nicht 不得 (bù děi), sondern 不用 (búyòng) oder 不必 (búbì) „nicht müssen“: 你不用来. 不得 (bùdé) bedeutet in der Schriftsprache „dürfen nicht“. In der Bedeutung kommt 得 dem 要 (yào) „müssen“ nahe; in Texten steht eher 必须 (bìxū) oder 需要 (xūyào).",
    "quiz": {
      "example": 0,
      "answer": "得",
      "distractors": [
        {
          "text": "会",
          "reason": "会 „können (gelernt)“ – 我会走了 hieße „ich kann jetzt laufen“, keine Notwendigkeit."
        },
        {
          "text": "愿意",
          "reason": "愿意 „bereit sein“ drückt Bereitschaft aus, nicht den Zeitdruck „ich muss los“."
        },
        {
          "text": "可以",
          "reason": "可以 drückt Erlaubnis oder Möglichkeit aus („ich darf gehen“), nicht „müssen“."
        }
      ],
      "accepted": [
        "要"
      ]
    },
    "related": [
      "g:能愿动词@HSK3",
      "g:要",
      "g:需要",
      "g:应该",
      "g:得"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:需要",
    "pattern": "需要",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 152,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "需要、该、应该、愿意、得"
    },
    "meaning": "brauchen; (etwas tun) müssen – sachliche Notwendigkeit",
    "pinyin": "xūyào + Verb/Nomen",
    "examples": [
      {
        "chinese": "你太累了，需要好好休息几天。",
        "pinyin": "Nǐ tài lèi le, xūyào hǎohǎo xiūxi jǐ tiān.",
        "german": "Du bist zu erschöpft, du musst dich ein paar Tage richtig ausruhen."
      },
      {
        "chinese": "我需要一本词典，你能借给我吗？",
        "pinyin": "Wǒ xūyào yì běn cídiǎn, nǐ néng jiè gěi wǒ ma?",
        "german": "Ich brauche ein Wörterbuch, kannst du mir eins leihen?"
      },
      {
        "chinese": "从这儿到机场需要一个多小时。",
        "pinyin": "Cóng zhèr dào jīchǎng xūyào yí ge duō xiǎoshí.",
        "german": "Von hier zum Flughafen braucht man über eine Stunde."
      }
    ],
    "legacyIds": [
      "g:需要 + Verb/Nomen",
      "需要 + Verb/Nomen"
    ],
    "formation": "需要 + Nomen；需要 + Verb",
    "notes": "要 heißt je nach Satz „wollen“ oder „müssen“; 得 (děi) ist gesprochen; 应该 (yīnggāi) drückt aus, was richtig wäre, nicht was nötig ist.",
    "explanation": "需要 (xūyào) drückt einen Bedarf aus. Vor einem Nomen heißt es „brauchen“: 我需要一本词典. Vor einem Verb heißt es „müssen, nötig sein“: 你需要休息. Mit einer Zeit- oder Geldangabe sagt es, wie viel nötig ist: 到机场需要一个小时. Die Verneinung 不需要 bedeutet „nicht nötig, nicht brauchen“; Frage: 需要……吗？ oder 需不需要……？. 需要 klingt sachlicher als 得 (děi) und 要 (yào); anders als 要 bedeutet es nie „wollen“. Es kann auch als Nomen „Bedarf“ stehen: 有这个需要.",
    "quiz": {
      "example": 2,
      "answer": "需要",
      "distractors": [
        {
          "text": "愿意",
          "reason": "愿意 „bereit sein“ braucht eine Person, die etwas will; eine Strecke kann nichts wollen."
        },
        {
          "text": "想",
          "reason": "想 „möchten“ drückt einen Wunsch aus und passt nicht zu einer Zeitangabe für eine Strecke."
        },
        {
          "text": "会",
          "reason": "会 steht vor einem Verb („können, werden“), nicht direkt vor einer Zeitangabe wie 一个多小时."
        }
      ],
      "accepted": [
        "要",
        "得"
      ]
    },
    "related": [
      "g:能愿动词@HSK3",
      "g:要",
      "g:得（能愿动词）",
      "g:应该"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:应该",
    "pattern": "应该",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 152,
      "category": "词类",
      "categoryName": "动词",
      "item": "能愿动词",
      "content": "需要、该、应该、愿意、得"
    },
    "meaning": "sollen, sollte (Rat, Pflicht); müsste (begründete Vermutung)",
    "pinyin": "yīnggāi + Verb",
    "examples": [
      {
        "chinese": "你感冒了，应该多喝水。",
        "pinyin": "Nǐ gǎnmào le, yīnggāi duō hē shuǐ.",
        "german": "Du bist erkältet, du solltest viel Wasser trinken."
      },
      {
        "chinese": "我们不应该在图书馆里大声说话。",
        "pinyin": "Wǒmen bù yīnggāi zài túshūguǎn li dàshēng shuōhuà.",
        "german": "In der Bibliothek sollten wir nicht laut reden."
      },
      {
        "chinese": "现在六点了，他应该已经到家了。",
        "pinyin": "Xiànzài liù diǎn le, tā yīnggāi yǐjīng dào jiā le.",
        "german": "Es ist jetzt sechs Uhr, er müsste schon zu Hause sein."
      }
    ],
    "legacyIds": [
      "g:应该 + Verb",
      "应该 + Verb"
    ],
    "formation": "应该 + Verb；应该 + Satz (Vermutung)",
    "notes": "需要 (xūyào) sagt, was nötig ist, 应该 (yīnggāi), was richtig wäre; 得 (děi) und 要 (yào) betonen „müssen“ stärker.",
    "explanation": "应该 (yīnggāi) sagt, was richtig, angebracht oder Pflicht ist – für Ratschläge, Regeln und Kritik: 你应该多喝水 „Du solltest viel Wasser trinken“; mit einer vergangenen Situation auch „hätte … sollen“: 你应该早点儿告诉我. Zweitens drückt es eine begründete Vermutung aus: 他应该到家了 „Er müsste schon zu Hause sein“. Verneinung: 不应该 „sollte nicht“. Frage: 应该……吗？ oder 应不应该……？. Gesprochen oft kurz 该 (gāi). Als Antwort auf Dank bedeutet 应该的 (yīnggāi de) „Das ist doch selbstverständlich“.",
    "quiz": {
      "example": 2,
      "answer": "应该",
      "distractors": [
        {
          "text": "愿意",
          "reason": "愿意 „bereit sein“ drückt einen Willen aus, keine Vermutung („müsste schon …“)."
        },
        {
          "text": "需要",
          "reason": "需要 „nötig sein“ passt nicht zu einer Vermutung über etwas, das schon geschehen ist."
        },
        {
          "text": "想",
          "reason": "想 „möchten“ ist ein Wunsch; 想已经到家了 ergibt keinen Sinn."
        }
      ]
    },
    "related": [
      "g:能愿动词@HSK3",
      "g:该",
      "g:需要",
      "g:得（能愿动词）",
      "g:要"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:离合词@HSK3",
    "pattern": "离合词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 153,
      "category": "词类",
      "categoryName": "动词",
      "item": "离合词",
      "content": "动宾式离合词：放假、见面、结婚、洗澡"
    },
    "words": [
      "放假",
      "见面",
      "结婚",
      "洗澡"
    ],
    "meaning": "Trennbare Verb-Objekt-Verben: Ferien haben, sich treffen, heiraten, baden",
    "explanation": "Diese Verben bestehen aus Verb + Objekt. Deshalb können sie kein weiteres Objekt direkt anschließen, und Aspektpartikeln (了, 过), Zahl- und Dauerangaben oder 个 stehen zwischen den beiden Teilen (见过面, 放了三天假). Ein 了 am Satzende hinter dem ganzen Wort ist dagegen normal: 放假了.\n放假 (fàngjià) – „Ferien/frei haben“: 放三天假 „drei Tage frei haben“.\n见面 (jiànmiàn) – „sich treffen“: 跟/和 + Person + 见面 (nicht 见面他); 见过两次面.\n结婚 (jiéhūn) – „heiraten“: 跟 + Person + 结婚 (nicht 结婚她); 结过婚 „war schon verheiratet“.\n洗澡 (xǐzǎo) – „baden, duschen“: 洗个澡, 洗完澡.\nTypischer Fehler: das Objekt direkt anhängen (我想见面你) oder 了/过 ans Ende stellen, wenn eine Zahl folgt (见面过两次).",
    "examples": [
      {
        "chinese": "学校七月就放假了，我们去旅游吧。",
        "pinyin": "Xuéxiào qīyuè jiù fàngjià le, wǒmen qù lǚyóu ba.",
        "german": "Im Juli sind schon Schulferien – lass uns verreisen."
      },
      {
        "chinese": "他们结婚以前只见过两次面。",
        "pinyin": "Tāmen jiéhūn yǐqián zhǐ jiàn guo liǎng cì miàn.",
        "german": "Vor ihrer Hochzeit hatten sie sich nur zweimal gesehen."
      },
      {
        "chinese": "明天下午我跟王老师见面。",
        "pinyin": "Míngtiān xiàwǔ wǒ gēn Wáng lǎoshī jiànmiàn.",
        "german": "Morgen Nachmittag treffe ich mich mit Lehrer Wang."
      },
      {
        "chinese": "孩子不喜欢洗澡，每次都要哭。",
        "pinyin": "Háizi bù xǐhuan xǐzǎo, měi cì dōu yào kū.",
        "german": "Das Kind badet nicht gern und weint jedes Mal."
      }
    ],
    "related": [
      "g:离合词@HSK1",
      "g:离合词@HSK2",
      "g:离合词@HSK3（离合词）"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:离合词@HSK3（离合词）",
    "pattern": "离合词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 154,
      "category": "词类",
      "categoryName": "动词",
      "item": "离合词",
      "content": "动补式离合词：离开、完成、分开"
    },
    "words": [
      "离开",
      "完成",
      "分开"
    ],
    "meaning": "Verb-Komplement-Verben, trennbar mit de/bu: verlassen, fertigstellen, trennen",
    "explanation": "Diese Verben bestehen aus Verb + Ergebniskomplement. Anders als 见面 (jiànmiàn) oder 结婚 (jiéhūn) können sie ein Objekt direkt anschließen (离开北京, 完成作业), und 了 steht danach (离开了). Getrennt werden sie durch 得 (de) oder 不 (bu) als Möglichkeitskomplement:\n离开 (líkāi) – „verlassen, weggehen“: 离开家; 离不开 (lí bu kāi) „nicht ohne … auskommen“.\n完成 (wánchéng) – „fertigstellen, erfüllen“: 完成作业; 完不成 „nicht schaffen“, 完得成 „schaffen können“.\n分开 (fēnkāi) – „trennen, auseinandergehen“: 把……分开; 分不开 „untrennbar“.\nFalsch ist 离了开: 了 gehört hinter das ganze Wort (离开了).",
    "examples": [
      {
        "chinese": "我离开家以后才知道，我离不开妈妈做的菜。",
        "pinyin": "Wǒ líkāi jiā yǐhòu cái zhīdào, wǒ lí bu kāi māma zuò de cài.",
        "german": "Erst als ich von zu Hause weg war, merkte ich, dass ich ohne Mamas Essen nicht auskomme."
      },
      {
        "chinese": "这么多作业，今天肯定完不成，我明天再完成吧。",
        "pinyin": "Zhème duō zuòyè, jīntiān kěndìng wán bu chéng, wǒ míngtiān zài wánchéng ba.",
        "german": "So viele Hausaufgaben schaffe ich heute bestimmt nicht – ich mache sie morgen fertig."
      },
      {
        "chinese": "请把白色和红色的衣服分开洗。",
        "pinyin": "Qǐng bǎ báisè hé hóngsè de yīfu fēnkāi xǐ.",
        "german": "Bitte wasch die weiße und die rote Wäsche getrennt."
      },
      {
        "chinese": "他明天就要离开北京了。",
        "pinyin": "Tā míngtiān jiù yào líkāi Běijīng le.",
        "german": "Er verlässt Peking schon morgen."
      }
    ],
    "related": [
      "g:离合词@HSK3",
      "g:离合词@HSK2",
      "g:离合词@HSK1"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:怎样",
    "pattern": "怎样",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 155,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "怎样"
    },
    "meaning": "wie, auf welche Weise; was für ein (etwas formeller als zěnme / zěnmeyàng)",
    "formation": "怎样 + Verb？；Subjekt + 怎样？；怎样的 + Nomen",
    "notes": "Die Frageform 怎样 (zěnyàng) + Verb hat einen eigenen Satztyp-Punkt (HSK 3). 不管怎样 (bùguǎn zěnyàng) „wie auch immer, jedenfalls“ ist eine feste Wendung (HSK 5).",
    "explanation": "怎样 (zěnyàng) fragt 1) nach der Art und Weise: 怎样走？ „Wie kommt man hin?“, 2) nach Zustand oder Bewertung: 你觉得这本书怎样？ „Wie findest du das Buch?“, 3) mit 的 vor einem Nomen nach der Beschaffenheit: 一个怎样的人 „was für ein Mensch“. In der Bedeutung entspricht es weitgehend 怎么 (zěnme) bzw. 怎么样 (zěnmeyàng), klingt aber etwas formeller und steht häufiger in geschriebenen Texten; im Alltag sagt man meist 怎么 oder 怎么样. Anders als 怎么 fragt 怎样 nicht verwundert nach dem Grund: „Wieso bist du nicht gekommen?“ heißt 你怎么没来？, nicht 你怎样没来？.",
    "examples": [
      {
        "chinese": "请问，去火车站怎样走？",
        "pinyin": "Qǐngwèn, qù huǒchēzhàn zěnyàng zǒu?",
        "german": "Entschuldigung, wie komme ich zum Bahnhof?"
      },
      {
        "chinese": "你觉得这本书怎样？",
        "pinyin": "Nǐ juéde zhè běn shū zěnyàng?",
        "german": "Wie findest du dieses Buch?"
      },
      {
        "chinese": "你的新老师是一个怎样的人？",
        "pinyin": "Nǐ de xīn lǎoshī shì yí ge zěnyàng de rén?",
        "german": "Was für ein Mensch ist dein neuer Lehrer?"
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "怎样",
      "distractors": [
        {
          "text": "怎么",
          "reason": "怎么 fragt vor einem Verb nach dem Wie; vor 的 + Nomen steht es nicht."
        },
        {
          "text": "什么",
          "reason": "什么 steht direkt vor dem Nomen (什么人); mit 的 dazwischen ist es falsch."
        },
        {
          "text": "为什么",
          "reason": "为什么 fragt nach dem Grund („warum“), nicht nach der Art eines Menschen."
        }
      ],
      "accepted": [
        "怎么样"
      ]
    },
    "related": [
      "g:怎么",
      "g:怎么样",
      "g:“怎样+动词”的特指问句",
      "g:不管怎样说",
      "g:疑问代词@HSK1"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词",
    "pattern": "疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Wortarten",
    "syllabus": {
      "no": 156,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词"
    },
    "meaning": "jeder, alles, überall (Fragewort + dōu) und „wer …, der …“ (dasselbe Fragewort doppelt)",
    "formation": "① Fragewort + 都/也 + Verb；② … Fragewort …，(就) … Fragewort …",
    "notes": "Der unbestimmte Gebrauch (2) 不定指 meint „irgendwer, irgendetwas“: 我想吃点儿什么 „Ich möchte irgendwas essen“ (eigener Punkt).",
    "explanation": "Fragewörter können ohne Frage „jeder Beliebige“ bedeuten. ① Fragewort + 都 (dōu): 谁都知道 „jeder weiß es“, 他什么都吃 „er isst alles“, 哪儿都可以 „egal wo, alles ist recht“. Mit Verneinung entsteht „niemand / nichts / nirgends“: 我哪儿都不想去; hier steht oft auch 也 (yě): 他什么也没买. Das Fragewort steht vor 都/也, ein Objekt wird also nach vorn geholt: 我什么都吃; 我都吃什么 wäre dagegen eine Frage. ② Dasselbe Fragewort zweimal in zwei Teilsätzen meint dieselbe Person oder Sache: 谁先到谁买票 „Wer zuerst da ist, kauft die Karten“, 你想吃什么就吃什么 „Iss, was du willst“; im zweiten Teil steht oft 就.",
    "examples": [
      {
        "chinese": "这个问题太简单了，谁都会。",
        "pinyin": "Zhège wèntí tài jiǎndān le, shéi dōu huì.",
        "german": "Die Aufgabe ist so einfach, die kann jeder."
      },
      {
        "chinese": "我今天很累，哪儿都不想去。",
        "pinyin": "Wǒ jīntiān hěn lèi, nǎr dōu bù xiǎng qù.",
        "german": "Ich bin heute sehr müde und will nirgendwohin."
      },
      {
        "chinese": "你想吃什么就点什么，今天我请客。",
        "pinyin": "Nǐ xiǎng chī shénme jiù diǎn shénme, jīntiān wǒ qǐngkè.",
        "german": "Bestell, worauf du Lust hast – heute lade ich ein."
      },
      {
        "chinese": "谁先到谁买票。",
        "pinyin": "Shéi xiān dào shéi mǎi piào.",
        "german": "Wer zuerst da ist, kauft die Karten."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "都",
      "distractors": [
        {
          "text": "还",
          "reason": "还 „noch“ macht aus 哪儿 kein „nirgendwo“; 哪儿还不想去 ist falsch."
        },
        {
          "text": "就",
          "reason": "就 gehört zum Paar „… Fragewort …，就 … Fragewort …“, nicht zu einem einzelnen Fragewort mit Verneinung."
        },
        {
          "text": "很",
          "reason": "很 ist ein Gradadverb vor Adjektiven und hat mit dem Fragewort nichts zu tun."
        }
      ],
      "accepted": [
        "也"
      ]
    },
    "related": [
      "g:不定指用法",
      "g:谁",
      "g:什么",
      "g:哪儿",
      "g:都¹",
      "g:也"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不定指用法",
    "pattern": "不定指用法",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Wortarten",
    "syllabus": {
      "no": 157,
      "category": "词类",
      "categoryName": "代词",
      "item": "疑问代词",
      "content": "（2）不定指用法"
    },
    "meaning": "Fragewort ohne Frage: irgendetwas, irgendwer, irgendwo, ein paar",
    "formation": "Fragewort (unbetont) im Aussagesatz oder in der 吗-Frage = „irgend-“",
    "notes": "Abgrenzung zum Gebrauch für „jeder, alle“ (任指): 谁都知道 (shéi dōu zhīdào) „jeder weiß es“, 什么都吃 „isst alles“ – dort folgen 都/也, und das Fragewort wird betont.",
    "explanation": "Fragewörter können ihre Fragebedeutung verlieren und stehen dann für etwas Unbestimmtes, das der Sprecher nicht kennt oder nicht nennen will: 什么 (shénme) „irgendetwas“, 谁 (shéi) „irgendwer“, 哪儿 (nǎr) „irgendwo(hin)“, 几 (jǐ) „ein paar, einige“. Das geschieht in Aussagesätzen, in Vermutungen (好像 (hǎoxiàng), 可能 (kěnéng)) und in Fragen mit 吗: 你想吃点儿什么吗？ „Möchtest du etwas essen?“ – eine Ja-Nein-Frage, keine Frage nach dem Was. Das Fragewort ist dabei unbetont. Verneint heißt es „nichts Besonderes“: 我不想买什么 „Ich will nichts Bestimmtes kaufen“. Typischer Fehler: einen solchen Satz als echte Frage lesen; nur ohne 吗 und mit Betonung auf dem Fragewort ist es eine Ergänzungsfrage.",
    "examples": [
      {
        "chinese": "我饿了，想吃点儿什么。",
        "pinyin": "Wǒ è le, xiǎng chī diǎnr shénme.",
        "german": "Ich habe Hunger und möchte etwas essen."
      },
      {
        "chinese": "好像有谁在外面叫你。",
        "pinyin": "Hǎoxiàng yǒu shéi zài wàimiàn jiào nǐ.",
        "german": "Ich glaube, draußen ruft dich jemand."
      },
      {
        "chinese": "这个周末我们去哪儿玩玩吧。",
        "pinyin": "Zhège zhōumò wǒmen qù nǎr wánwan ba.",
        "german": "Lass uns dieses Wochenende irgendwohin fahren."
      },
      {
        "chinese": "桌子上有几本书，是你的吗？",
        "pinyin": "Zhuōzi shang yǒu jǐ běn shū, shì nǐ de ma?",
        "german": "Auf dem Tisch liegen ein paar Bücher – sind das deine?"
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "什么",
      "distractors": [
        {
          "text": "谁",
          "reason": "谁 steht für eine Person („irgendwer“); gegessen werden soll aber „etwas“."
        },
        {
          "text": "哪儿",
          "reason": "哪儿 steht für einen Ort („irgendwo“) und kann nicht Objekt von 吃 sein."
        },
        {
          "text": "怎么",
          "reason": "怎么 fragt nach der Art und Weise und steht vor dem Verb, nicht als Objekt dahinter."
        }
      ]
    },
    "related": [
      "g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词",
      "g:疑问代词@HSK1",
      "g:什么",
      "g:谁",
      "g:哪儿",
      "g:几"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:别人",
    "pattern": "别人",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 158,
      "category": "词类",
      "categoryName": "代词",
      "item": "人称代词",
      "content": "别人、咱们"
    },
    "meaning": "andere (Leute), jemand anders",
    "formation": "别人 als Subjekt oder Objekt; 别人的 + Nomen",
    "notes": "别人 (biérén) klingt allgemein („die anderen, die Leute“); 别的人 (biéde rén) bzw. 其他人 (qítā rén) meint eher bestimmte andere Personen einer Gruppe. Auch 人家 (rénjia) kann (ab HSK 6) „andere Leute“ bedeuten, wird aber auch für „ich“ gebraucht.",
    "explanation": "别人 (biérén) ist ein Personalpronomen für „andere Menschen“ – alle außer dem Sprecher oder der Person, um die es gerade geht. Es steht als Subjekt (别人都走了 „die anderen sind alle gegangen“), als Objekt (帮助别人 „anderen helfen“) oder mit 的 als Attribut (别人的东西 „Sachen anderer Leute“). Es bezeichnet nur Personen; für Dinge nimmt man 别的 (biéde) oder 其他 (qítā). Ein Zählwort oder eine Zahl steht nicht davor: nicht 两个别人, sondern 别的两个人. Nicht verwechseln mit dem verneinten Imperativ 别 „nicht!“: In 别告诉别人 ist das erste 别 „nicht“, das zweite Teil von 别人.",
    "examples": [
      {
        "chinese": "这件事你别告诉别人。",
        "pinyin": "Zhè jiàn shì nǐ bié gàosu biérén.",
        "german": "Erzähl das bitte niemand anderem."
      },
      {
        "chinese": "不要随便拿别人的东西。",
        "pinyin": "Bú yào suíbiàn ná biérén de dōngxi.",
        "german": "Nimm nicht einfach die Sachen anderer Leute."
      },
      {
        "chinese": "他总是很愿意帮助别人。",
        "pinyin": "Tā zǒngshì hěn yuànyì bāngzhù biérén.",
        "german": "Er hilft anderen immer gern."
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "别人",
      "distractors": [
        {
          "text": "别的",
          "reason": "别的 steht meist vor einem Nomen („andere Dinge“) und bezeichnet allein keine Personen."
        },
        {
          "text": "其他",
          "reason": "其他 braucht hier ein folgendes Nomen (其他人) oder 的; allein als Objekt klingt es unvollständig."
        },
        {
          "text": "自己",
          "reason": "自己 heißt „sich selbst“ – gemeint ist aber, dass er anderen hilft."
        }
      ]
    },
    "related": [
      "g:咱们",
      "g:自己",
      "g:别的",
      "g:人家",
      "g:人称代词@HSK1"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:咱们",
    "pattern": "咱们",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 158,
      "category": "词类",
      "categoryName": "代词",
      "item": "人称代词",
      "content": "别人、咱们"
    },
    "meaning": "wir (einschließlich des Angesprochenen)",
    "formation": "咱们 als Subjekt, Objekt oder Attribut: 咱们 + Verb …; 咱们（的）+ Nomen",
    "notes": "In formellen Texten und in Südchina sagt man fast immer 我们 (wǒmen); das ist nie falsch. 咱 (zán) allein ist dialektal und kann auch „ich“ bedeuten.",
    "explanation": "咱们 (zánmen) heißt „wir“ und schließt den Angesprochenen immer mit ein: Sprecher + Zuhörer. 我们 (wǒmen) kann dagegen auch „wir ohne dich“ bedeuten. 咱们 ist umgangssprachlich und besonders im Norden Chinas verbreitet; es klingt vertraut und wird oft für Vorschläge mit 吧 gebraucht: 咱们走吧 „Lass uns gehen“. Vor Personen- und Gruppenbezeichnungen fällt 的 oft weg: 咱们班 „unsere Klasse“. Typischer Fehler: 咱们 verwenden, wenn der Zuhörer nicht dazugehört – „Wir (meine Familie) fahren morgen, und du?“ heißt 我们明天去，你呢？, nicht 咱们.",
    "examples": [
      {
        "chinese": "咱们一起去吃饭吧。",
        "pinyin": "Zánmen yìqǐ qù chīfàn ba.",
        "german": "Lass uns zusammen essen gehen."
      },
      {
        "chinese": "时间不早了，咱们走吧。",
        "pinyin": "Shíjiān bù zǎo le, zánmen zǒu ba.",
        "german": "Es ist schon spät, lass uns gehen."
      },
      {
        "chinese": "咱们班一共有三十个学生。",
        "pinyin": "Zánmen bān yígòng yǒu sānshí ge xuésheng.",
        "german": "Unsere Klasse hat insgesamt dreißig Schüler."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "咱们",
      "distractors": [
        {
          "text": "你们",
          "reason": "你们 heißt „ihr“ und schließt den Sprecher aus; gemeint ist „lass uns“."
        },
        {
          "text": "他们",
          "reason": "他们 heißt „sie“ – weder Sprecher noch Zuhörer wären gemeint."
        },
        {
          "text": "别人",
          "reason": "别人 heißt „andere Leute“ und passt nicht zu einem Vorschlag „lass uns gehen“."
        }
      ],
      "accepted": [
        "我们"
      ]
    },
    "related": [
      "g:人称代词@HSK1",
      "g:别人",
      "g:自己"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:别的",
    "pattern": "别的",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 159,
      "category": "词类",
      "categoryName": "代词",
      "item": "指示代词",
      "content": "别的、其他"
    },
    "meaning": "andere(r/s); etwas anderes",
    "formation": "别的 + Nomen; 别的 allein = „etwas anderes, sonst etwas“",
    "notes": "其他 (qítā) bedeutet fast dasselbe, klingt aber neutraler bis schriftlicher und bezieht sich oft auf den Rest einer bekannten Menge (除了他，其他人都来了). Zählwortgruppen stehen meist nach 别的 (biéde): 别的两本书 „die zwei anderen Bücher“.",
    "explanation": "别的 (biéde) heißt „andere, sonstige“. Es steht direkt vor einem Nomen, meist ohne Zählwort: 别的地方 „ein anderer Ort, woanders“, 别的颜色 „eine andere Farbe“. Allein bedeutet es „etwas anderes“: 还要别的吗？ „Sonst noch etwas?“ – ein typischer Satz beim Einkaufen. Mit 都/也 und Verneinung: 别的都不要 „sonst will ich nichts“. 别的 ist eher gesprochen. Ein zusätzliches 的 wird nicht angehängt (nicht 别的的). Für Personen allgemein sagt man 别人 (biérén); 别的人 meint die übrigen Personen einer bestimmten Gruppe.",
    "examples": [
      {
        "chinese": "你还要别的吗？",
        "pinyin": "Nǐ hái yào biéde ma?",
        "german": "Möchtest du sonst noch etwas?"
      },
      {
        "chinese": "这家商店没有，我们去别的地方看看吧。",
        "pinyin": "Zhè jiā shāngdiàn méiyǒu, wǒmen qù biéde dìfang kànkan ba.",
        "german": "Dieser Laden hat es nicht, lass uns woanders schauen."
      },
      {
        "chinese": "我只会做米饭，别的都不会。",
        "pinyin": "Wǒ zhǐ huì zuò mǐfàn, biéde dōu bú huì.",
        "german": "Ich kann nur Reis kochen, sonst nichts."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "别的",
      "distractors": [
        {
          "text": "别人",
          "reason": "别人 bezeichnet Personen und steht nicht vor einem Nomen wie 地方."
        },
        {
          "text": "每",
          "reason": "每 („jeder“) braucht ein Zählwort (每个地方) und ergibt nicht „woanders“."
        },
        {
          "text": "自己",
          "reason": "自己 heißt „selbst, eigen“ und bräuchte 的 (自己的地方); gemeint ist ein anderer Ort."
        }
      ],
      "accepted": [
        "其他"
      ]
    },
    "related": [
      "g:其他",
      "g:别人",
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
    "id": "g:其他",
    "pattern": "其他",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 159,
      "category": "词类",
      "categoryName": "代词",
      "item": "指示代词",
      "content": "别的、其他"
    },
    "meaning": "andere, übrige (aus einer bekannten Menge)",
    "formation": "其他 + Nomen; 其他的 (allein); Bezugsgruppe + 其他 + Nomen",
    "notes": "Im Alltag ist 别的 (biéde) meist austauschbar (别的问题 = 其他问题). Für „andere Leute“ allgemein ohne Bezugsgruppe ist 别人 (biérén) üblicher.",
    "explanation": "其他 (qítā) heißt „andere, übrige“ und bezieht sich meist auf den Rest einer bekannten Gruppe: 除了小王，其他人都来了 „außer Xiao Wang sind alle anderen gekommen“. Es steht vor einem Nomen (其他问题, 其他国家) oder allein mit 的: 其他的我不知道 „das Übrige weiß ich nicht“. Eine Bezugsgruppe kann davorstehen: 我们班其他同学 „die anderen Mitschüler unserer Klasse“. 其他 klingt neutraler als 别的 (biéde) und ist in Schrift und Rede üblich; bei Dingen liest man auch die Schreibung 其它 (qítā). Als Objekt steht es normalerweise mit Nomen oder 的: 我不要其他的 statt bloß 我不要其他.",
    "examples": [
      {
        "chinese": "除了小王，其他人都来了。",
        "pinyin": "Chúle Xiǎo Wáng, qítā rén dōu lái le.",
        "german": "Außer Xiao Wang sind alle anderen gekommen."
      },
      {
        "chinese": "你还有其他问题吗？",
        "pinyin": "Nǐ hái yǒu qítā wèntí ma?",
        "german": "Hast du noch weitere Fragen?"
      },
      {
        "chinese": "我这个周末有空，其他时间都很忙。",
        "pinyin": "Wǒ zhège zhōumò yǒu kòng, qítā shíjiān dōu hěn máng.",
        "german": "Dieses Wochenende habe ich Zeit, sonst bin ich immer beschäftigt."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "其他",
      "distractors": [
        {
          "text": "别人",
          "reason": "别人 enthält schon „Mensch“ und steht nicht vor 人 (别人人 ist falsch)."
        },
        {
          "text": "自己",
          "reason": "自己人 heißt „unsere Leute, Vertraute“ – gemeint sind aber die übrigen Personen."
        },
        {
          "text": "一共",
          "reason": "一共 ist ein Adverb („insgesamt“) und steht vor dem Verb oder einer Zahl, nicht vor einem Nomen."
        }
      ],
      "accepted": [
        "别的"
      ]
    },
    "related": [
      "g:别的",
      "g:别人",
      "g:除了……（以外），……还/也/都……",
      "g:指示代词@HSK1"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:名量词@HSK3",
    "pattern": "名量词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 160,
      "category": "词类",
      "categoryName": "量词",
      "item": "名量词",
      "content": "（1）专用名量词：把、双、张、种、层、封、页、辆、节、所、班、段、头、句、公斤、斤、角、毛、刻、米"
    },
    "words": [
      "把",
      "双",
      "张",
      "种",
      "层",
      "封",
      "页",
      "辆",
      "节",
      "所",
      "班",
      "段",
      "头",
      "句",
      "公斤",
      "斤",
      "角",
      "毛",
      "刻",
      "米"
    ],
    "meaning": "Zählwörter für Nomen: Paar, Blatt, Brief, Fahrzeug, Pfund, Meter …",
    "formation": "Zahl/这/那 + Zählwort + Nomen",
    "notes": "Maßeinheiten wie 公斤 (gōngjīn), 斤 und 米 brauchen kein weiteres Zählwort: 两斤苹果 (liǎng jīn píngguǒ) „ein Kilo Äpfel“. Bei Preisen wird die letzte Einheit oft weggelassen: 三块五 (sān kuài wǔ) = 3,50 Yuan.",
    "explanation": "Auf HSK 3 kommen 20 weitere feste Zählwörter hinzu, darunter Maß- und Geldeinheiten. Zwischen Zahl bzw. 这/那 und Nomen steht grundsätzlich ein Zählwort; vor Zählwörtern heißt „zwei“ 两, nicht 二.\n把 (bǎ) – Gegenstände mit Griff: 一把伞 (yì bǎ sǎn) „ein Schirm“, 一把椅子 (yì bǎ yǐzi)\n双 (shuāng) – Paare: 一双鞋 (yì shuāng xié) „ein Paar Schuhe“, 一双筷子 (yì shuāng kuàizi)\n张 (zhāng) – flache Dinge: 一张纸 (yì zhāng zhǐ), 一张床 (yì zhāng chuáng)\n种 (zhǒng) – Sorte, Art: 这种水果 (zhè zhǒng shuǐguǒ) „diese Obstsorte“\n层 (céng) – Stockwerk, Schicht: 二十层的楼 (èrshí céng de lóu) „ein zwanzigstöckiges Haus“\n封 (fēng) – Briefe: 一封信 (yì fēng xìn)\n页 (yè) – Buchseiten: 十页书 (shí yè shū) „zehn Seiten“\n辆 (liàng) – Fahrzeuge: 一辆车 (yí liàng chē)\n节 (jié) – Unterrichtsstunden, Abschnitte: 两节课 (liǎng jié kè)\n所 (suǒ) – Schulen, Krankenhäuser: 一所大学 (yì suǒ dàxué)\n班 (bān) – planmäßige Fahrten: 下一班车 (xià yì bān chē) „der nächste Bus“\n段 (duàn) – Abschnitt (Zeit, Strecke, Text): 一段时间 (yí duàn shíjiān) „eine Weile“\n头 (tóu) – große Tiere: 一头牛 (yì tóu niú)\n句 (jù) – Sätze, Äußerungen: 一句话 (yí jù huà)\n公斤 (gōngjīn) – Kilogramm\n斤 (jīn) – chinesisches Pfund (500 g), beim Einkaufen üblich\n角 (jiǎo) – Zehntel-Yuan, geschrieben (auf Preisschildern)\n毛 (máo) – Zehntel-Yuan, gesprochen: 五毛钱 (wǔ máo qián)\n刻 (kè) – Viertelstunde: 三点一刻 (sān diǎn yí kè) „Viertel nach drei“\n米 (mǐ) – Meter",
    "examples": [
      {
        "chinese": "外面下雨了，带一把伞吧。",
        "pinyin": "Wàimiàn xià yǔ le, dài yì bǎ sǎn ba.",
        "german": "Draußen regnet es, nimm einen Schirm mit."
      },
      {
        "chinese": "我昨天买了一双新鞋。",
        "pinyin": "Wǒ zuótiān mǎi le yì shuāng xīn xié.",
        "german": "Ich habe mir gestern ein Paar neue Schuhe gekauft."
      },
      {
        "chinese": "他给妈妈写了一封信。",
        "pinyin": "Tā gěi māma xiě le yì fēng xìn.",
        "german": "Er hat seiner Mutter einen Brief geschrieben."
      },
      {
        "chinese": "这种苹果三块五一斤。",
        "pinyin": "Zhè zhǒng píngguǒ sān kuài wǔ yì jīn.",
        "german": "Diese Apfelsorte kostet 3,50 Yuan das Pfund."
      },
      {
        "chinese": "现在是八点一刻。",
        "pinyin": "Xiànzài shì bā diǎn yí kè.",
        "german": "Es ist jetzt Viertel nach acht."
      },
      {
        "chinese": "这所大学有一百多年的历史。",
        "pinyin": "Zhè suǒ dàxué yǒu yìbǎi duō nián de lìshǐ.",
        "german": "Diese Universität ist über hundert Jahre alt."
      }
    ],
    "related": [
      "g:名量词@HSK1",
      "g:名量词@HSK2",
      "g:碗",
      "g:盘",
      "g:名量词@HSK4",
      "g:个个、张张"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:碗",
    "pattern": "碗",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 161,
      "category": "词类",
      "categoryName": "量词",
      "item": "名量词",
      "content": "（2）借用名量词：碗、盘"
    },
    "meaning": "eine Schüssel (voll): geliehenes Zählwort",
    "formation": "Zahl + 碗 + Speise/Getränk",
    "notes": "Nach demselben Muster werden andere Gefäße zu Zählwörtern: 杯 (Glas, HSK 1), 盘 (Teller), 瓶 (Flasche), 盒 (Schachtel).",
    "explanation": "碗 (wǎn) ist eigentlich das Nomen „Schüssel, Schale“. Als geliehenes Zählwort zählt es, was in der Schale ist: 一碗米饭 (yì wǎn mǐfàn) „eine Schale Reis“, 两碗面条 „zwei Schüsseln Nudeln“, 一碗汤 „eine Schale Suppe“. Wie andere geliehene Zählwörter lässt es sich durch 大 oder 小 ergänzen: 一大碗 „eine große Schüssel voll“. Beim Bestellen fällt 一 vor dem Zählwort oft weg: 来碗面 „eine Schüssel Nudeln, bitte“. Die Schüssel selbst zählt man mit 个: 一个碗 „eine (leere) Schüssel“.",
    "examples": [
      {
        "chinese": "我要一碗米饭。",
        "pinyin": "Wǒ yào yì wǎn mǐfàn.",
        "german": "Ich hätte gern eine Schale Reis."
      },
      {
        "chinese": "他饿极了，吃了两大碗面条。",
        "pinyin": "Tā è jí le, chī le liǎng dà wǎn miàntiáo.",
        "german": "Er war total hungrig und aß zwei große Schüsseln Nudeln."
      },
      {
        "chinese": "天冷了，喝碗热汤吧。",
        "pinyin": "Tiān lěng le, hē wǎn rè tāng ba.",
        "german": "Es ist kalt geworden, iss doch eine heiße Suppe."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "碗",
      "distractors": [
        {
          "text": "杯",
          "reason": "杯 zählt Getränke im Glas oder Becher, nicht Reis."
        },
        {
          "text": "张",
          "reason": "张 zählt flache Dinge wie Papier oder Tische, keine Speisen."
        },
        {
          "text": "本",
          "reason": "本 zählt Bücher und Hefte."
        }
      ]
    },
    "related": [
      "g:盘",
      "g:杯",
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
    "id": "g:盘",
    "pattern": "盘",
    "level": "HSK3",
    "kind": "word",
    "category": "Wortarten",
    "syllabus": {
      "no": 161,
      "category": "词类",
      "categoryName": "量词",
      "item": "名量词",
      "content": "（2）借用名量词：碗、盘"
    },
    "meaning": "ein Teller (voll): geliehenes Zählwort",
    "formation": "Zahl + 盘 + Speise",
    "notes": "盘 zählt außerdem Partien von Brettspielen (一盘棋 (yì pán qí) „eine Partie Schach“) – das ist ein fester, kein geliehener Gebrauch. Vgl. 碗 (Schüssel) für Suppe, Reis und Nudeln.",
    "explanation": "盘 (pán) ist eigentlich das Nomen „Teller, Platte“. Als geliehenes Zählwort zählt es, was auf dem Teller liegt: 一盘饺子 (yì pán jiǎozi) „ein Teller Jiaozi“, 两盘菜 „zwei Gerichte“, 一盘水果 „ein Obstteller“. Im Restaurant wird mit 盘 oft die Zahl der bestellten Gerichte angegeben. Wie andere geliehene Zählwörter verträgt es 大/小: 一大盘 „ein großer Teller voll“. Den leeren Teller selbst zählt man mit 个: 一个盘子 (yí ge pánzi).",
    "examples": [
      {
        "chinese": "我们点了一盘饺子。",
        "pinyin": "Wǒmen diǎn le yì pán jiǎozi.",
        "german": "Wir haben einen Teller Jiaozi bestellt."
      },
      {
        "chinese": "妈妈做了三盘菜。",
        "pinyin": "Māma zuò le sān pán cài.",
        "german": "Mama hat drei Gerichte gekocht."
      },
      {
        "chinese": "桌子上有一大盘水果。",
        "pinyin": "Zhuōzi shang yǒu yí dà pán shuǐguǒ.",
        "german": "Auf dem Tisch steht ein großer Obstteller."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "盘",
      "distractors": [
        {
          "text": "杯",
          "reason": "杯 zählt Getränke im Glas, keine Jiaozi."
        },
        {
          "text": "双",
          "reason": "双 zählt Paare (Schuhe, Stäbchen)."
        },
        {
          "text": "本",
          "reason": "本 zählt Bücher und Hefte."
        }
      ]
    },
    "related": [
      "g:碗",
      "g:杯",
      "g:名量词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动量词@HSK3",
    "pattern": "动量词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Wortarten",
    "syllabus": {
      "no": 162,
      "category": "词类",
      "categoryName": "量词",
      "item": "动量词",
      "content": "口、回、遍、声"
    },
    "words": [
      "口",
      "回",
      "遍",
      "声"
    ],
    "meaning": "Zählwörter für Handlungen: Bissen/Schluck, Mal, Durchgang, Ruf",
    "formation": "Verb + (了/过) + Zahl + Zählwort (+ Objekt)",
    "notes": "口 ist auch ein Zählwort für Familienmitglieder (我家有三口人). 次 (cì, HSK 2) ist das neutrale „Mal“; 遍 betont, dass etwas vollständig durchlaufen wird.",
    "explanation": "Verbale Zählwörter geben an, wie oft oder in welcher Einheit eine Handlung geschieht. Sie stehen nach dem Verb; ein Pronomen als Objekt steht davor (叫了他一声), ein Nomen meist danach (去过两回上海; bei Ortsnamen geht auch 去过上海两回); oft wird das Nomen aber nach vorn gestellt (这本书我看了三遍).\n口 (kǒu) – „Bissen, Schluck“: 吃一口 „einen Bissen essen“, 喝一口 „einen Schluck trinken“\n回 (huí) – „Mal“, umgangssprachlich wie 次: 去过两回 „zweimal dort gewesen“\n遍 (biàn) – „Mal“ von Anfang bis Ende (ganzer Durchgang): 再说一遍 „noch einmal sagen“, 看了三遍 „dreimal ganz gelesen“\n声 (shēng) – Laute, Rufe: 叫了一声 „einmal gerufen“; 说一声 „kurz Bescheid sagen“",
    "examples": [
      {
        "chinese": "这个菜很好吃，你尝一口吧。",
        "pinyin": "Zhège cài hěn hǎochī, nǐ cháng yì kǒu ba.",
        "german": "Das Gericht schmeckt toll, probier mal einen Bissen."
      },
      {
        "chinese": "对不起，请再说一遍。",
        "pinyin": "Duìbuqǐ, qǐng zài shuō yí biàn.",
        "german": "Entschuldigung, sagen Sie das bitte noch einmal."
      },
      {
        "chinese": "我去过两回上海。",
        "pinyin": "Wǒ qù guo liǎng huí Shànghǎi.",
        "german": "Ich war schon zweimal in Shanghai."
      },
      {
        "chinese": "你到了跟我说一声。",
        "pinyin": "Nǐ dào le gēn wǒ shuō yì shēng.",
        "german": "Sag mir kurz Bescheid, wenn du angekommen bist."
      },
      {
        "chinese": "这本书我看了三遍。",
        "pinyin": "Zhè běn shū wǒ kàn le sān biàn.",
        "german": "Dieses Buch habe ich dreimal gelesen."
      }
    ],
    "related": [
      "g:次",
      "g:动量词@HSK4",
      "g:名量词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:个个、张张",
    "pattern": "个个、张张",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Wortarten",
    "syllabus": {
      "no": 163,
      "category": "词类",
      "categoryName": "量词",
      "item": "量词重叠",
      "content": "个个、张张"
    },
    "meaning": "verdoppeltes Zählwort: jeder einzelne, ausnahmslos alle",
    "formation": "(Nomen +) Zählwort + Zählwort + 都 + Prädikat",
    "notes": "Bedeutungsähnlich ist 每 + Zählwort + Nomen + 都 (每张照片都很漂亮); die Verdopplung klingt lebendiger und betont die Ausnahmslosigkeit. 一个个 (yí gègè) „einer nach dem anderen“ ist ein eigener, späterer Gebrauch.",
    "explanation": "Ein verdoppeltes Zählwort bedeutet „jeder einzelne, alle ohne Ausnahme“: 个个 (gègè) „jeder“, 张张 (zhāngzhāng) „jedes Blatt, jedes Foto“, ebenso 件件 (jiànjiàn), 本本 (běnběn). Man verdoppelt das Zählwort, das zum Nomen passt (照片 (zhàopiàn) → 张张, 衣服 (yīfu) → 件件). Das verdoppelte Zählwort steht vor dem Prädikat, meist als Subjekt oder direkt nach dem Thema, und fast immer mit 都: 学生个个都很努力. Als Objekt nach dem Verb steht es nicht: nicht 我喜欢张张照片, sondern 照片我张张都喜欢. Es wird nicht mit 每 kombiniert (nicht 每个个) und bekommt außer 一 (siehe unten) keine Zahl davor.",
    "examples": [
      {
        "chinese": "我们班的学生个个都很努力。",
        "pinyin": "Wǒmen bān de xuésheng gègè dōu hěn nǔlì.",
        "german": "Die Schüler unserer Klasse sind alle sehr fleißig."
      },
      {
        "chinese": "这些照片张张都很漂亮。",
        "pinyin": "Zhèxiē zhàopiàn zhāngzhāng dōu hěn piàoliang.",
        "german": "Diese Fotos sind alle wunderschön, jedes einzelne."
      },
      {
        "chinese": "这家店的衣服件件都很贵。",
        "pinyin": "Zhè jiā diàn de yīfu jiànjiàn dōu hěn guì.",
        "german": "In diesem Laden ist jedes Kleidungsstück teuer."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "张张",
      "distractors": [
        {
          "text": "本本",
          "reason": "本 ist das Zählwort für Bücher; Fotos zählt man mit 张."
        },
        {
          "text": "件件",
          "reason": "件 ist das Zählwort für Kleidung und Angelegenheiten, nicht für Fotos."
        },
        {
          "text": "张",
          "reason": "Ein einfaches Zählwort kann nicht allein vor 都 stehen; für „jedes einzelne“ muss es verdoppelt werden."
        }
      ]
    },
    "related": [
      "g:每",
      "g:名量词@HSK3",
      "g:名量词@HSK1"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:程度副词@HSK3",
    "pattern": "程度副词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 164,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "比较、还³、更、特别、挺、有些、越、极"
    },
    "words": [
      "比较",
      "还³",
      "更",
      "特别",
      "挺",
      "有些",
      "越",
      "极"
    ],
    "meaning": "Gradadverbien: ziemlich, noch mehr, besonders, recht, etwas, je … desto, äußerst",
    "formation": "Gradadverb + Adjektiv/Gefühlsverb",
    "notes": "In 比-Vergleichen stehen vor dem Adjektiv 更 oder 还, nicht 很 oder 非常 (fēicháng): 他比我更高, nicht 他比我很高.",
    "explanation": "Diese Gradadverbien stehen vor Adjektiven und Gefühlsverben (喜欢 (xǐhuan), 想) und stufen die Stärke ab.\n比较 (bǐjiào) – „ziemlich, relativ“, nüchtern: 今天比较忙\n还 (hái) – „noch (mehr)“ im Vergleich: 他比我还高; außerdem „ganz, einigermaßen“: 还不错 „nicht schlecht“\n更 (gèng) – „noch mehr, -er“: 明天会更冷\n特别 (tèbié) – „besonders“, stärker als 很\n挺 (tǐng) – „recht, ziemlich“, umgangssprachlich, oft mit 的: 挺好的\n有些 (yǒuxiē) – „etwas, ein wenig“, oft bei Unangenehmem: 有些累\n越 (yuè) – „je … desto“: 越来越热 „immer heißer“, 越……越……\n极 (jí) – „äußerst“, meist als 极了 (jí le) nach dem Adjektiv: 好极了",
    "examples": [
      {
        "chinese": "今天比较忙，我们明天再说吧。",
        "pinyin": "Jīntiān bǐjiào máng, wǒmen míngtiān zài shuō ba.",
        "german": "Heute ist es ziemlich hektisch, lass uns morgen darüber reden."
      },
      {
        "chinese": "弟弟比哥哥还高。",
        "pinyin": "Dìdi bǐ gēge hái gāo.",
        "german": "Der jüngere Bruder ist sogar noch größer als der ältere."
      },
      {
        "chinese": "这个房间挺大的。",
        "pinyin": "Zhège fángjiān tǐng dà de.",
        "german": "Das Zimmer ist ziemlich groß."
      },
      {
        "chinese": "我今天有些累，想早点儿睡。",
        "pinyin": "Wǒ jīntiān yǒuxiē lèi, xiǎng zǎo diǎnr shuì.",
        "german": "Ich bin heute etwas müde und möchte früh schlafen."
      },
      {
        "chinese": "天气越来越热了。",
        "pinyin": "Tiānqì yuè lái yuè rè le.",
        "german": "Das Wetter wird immer heißer."
      },
      {
        "chinese": "你的汉语说得好极了！",
        "pinyin": "Nǐ de Hànyǔ shuō de hǎo jí le!",
        "german": "Du sprichst ausgezeichnet Chinesisch!"
      }
    ],
    "related": [
      "g:程度副词@HSK1",
      "g:程度副词@HSK2",
      "g:特别",
      "g:A比B+更/还+形容词",
      "g:程度副词@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:特别",
    "pattern": "特别",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 164,
      "category": "词类",
      "categoryName": "副词",
      "item": "程度副词",
      "content": "比较、还³、更、特别、挺、有些、越、极"
    },
    "meaning": "besonders (Gradadverb, stärker als „sehr“)",
    "pinyin": "tèbié + Adjektiv",
    "examples": [
      {
        "chinese": "今天特别冷，多穿点儿衣服吧。",
        "pinyin": "Jīntiān tèbié lěng, duō chuān diǎnr yīfu ba.",
        "german": "Heute ist es besonders kalt, zieh dir etwas mehr an."
      },
      {
        "chinese": "我特别喜欢这首歌。",
        "pinyin": "Wǒ tèbié xǐhuan zhè shǒu gē.",
        "german": "Dieses Lied mag ich besonders gern."
      },
      {
        "chinese": "他做的菜特别好吃。",
        "pinyin": "Tā zuò de cài tèbié hǎochī.",
        "german": "Was er kocht, schmeckt besonders gut."
      }
    ],
    "legacyIds": [
      "g:特别 + Adjektiv",
      "特别 + Adjektiv"
    ],
    "formation": "特别 + Adjektiv/Gefühlsverb",
    "notes": "特别 (tèbié) ist auch ein Adjektiv „besonders, ungewöhnlich“: 这个名字很特别 „Der Name ist ungewöhnlich“. 特别是 (tèbié shì) heißt „vor allem, insbesondere“: 我喜欢水果，特别是苹果.",
    "explanation": "特别 (tèbié) als Gradadverb heißt „besonders, außergewöhnlich“ und ist stärker als 很: 今天特别冷 „heute ist es besonders kalt“. Es steht vor Adjektiven und vor Verben des Fühlens und Wollens (喜欢 (xǐhuan), 想, 希望 (xīwàng)). Es ist in Rede und Schrift gleichermaßen üblich. Anders als bei 太 braucht der Satz kein 了 am Ende. Andere Gradadverbien stehen nicht zusätzlich davor: nicht 很特别冷. In 比-Vergleichen wird 特别 nicht verwendet; dort stehen 更 oder 还.",
    "quiz": {
      "example": 1,
      "answer": "特别",
      "distractors": [
        {
          "text": "太",
          "reason": "太 bräuchte 了 am Satzende (我太喜欢这首歌了)."
        },
        {
          "text": "最",
          "reason": "最 heißt „am liebsten“ (Superlativ); der Satz sagt nur „besonders gern“."
        },
        {
          "text": "更",
          "reason": "更 vergleicht („noch lieber“) und braucht eine Vergleichsgröße, die hier fehlt."
        }
      ],
      "accepted": [
        "非常"
      ]
    },
    "related": [
      "g:程度副词@HSK3",
      "g:很",
      "g:非常",
      "g:最",
      "g:太"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:范围副词@HSK3",
    "pattern": "范围副词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 165,
      "category": "词类",
      "categoryName": "副词",
      "item": "范围副词",
      "content": "就³、一块儿、一共、只、到处、只是"
    },
    "words": [
      "就³",
      "一块儿",
      "一共",
      "只",
      "到处",
      "只是"
    ],
    "meaning": "Bereichsadverbien: nur, zusammen, insgesamt, überall",
    "formation": "Bereichsadverb + Verb/Zahlangabe",
    "notes": "只是 (zhǐshì) kann auch als Konjunktion „nur, allerdings“ einen Einwand einleiten (东西不错，只是太贵) – ein eigener Gebrauch. 只 steht vor dem Verb, nicht vor dem Subjekt: nicht 只我知道, sondern 只有我知道.",
    "explanation": "Diese Adverbien grenzen ab, wen oder was eine Aussage betrifft, und stehen meist vor dem Verb; 就 und 一共 (yígòng) können auch direkt vor einer Personen- oder Zahlangabe stehen.\n就 (jiù) – „nur, bloß“, gesprochen: 就他一个人 „nur er allein“\n一块儿 (yíkuàir) – „zusammen“, umgangssprachlich wie 一起 (yìqǐ)\n一共 (yígòng) – „insgesamt“, vor einer Mengenangabe\n只 (zhǐ) – „nur“, vor dem Verb: 只有一个\n到处 (dàochù) – „überall“, oft mit 都\n只是 (zhǐshì) – „nur, lediglich“, schwächt ab: 我只是问问 „ich frage ja nur“",
    "examples": [
      {
        "chinese": "下课以后我们一块儿去吧。",
        "pinyin": "Xiàkè yǐhòu wǒmen yíkuàir qù ba.",
        "german": "Lass uns nach dem Unterricht zusammen hingehen."
      },
      {
        "chinese": "一共多少钱？",
        "pinyin": "Yígòng duōshao qián?",
        "german": "Wie viel kostet das insgesamt?"
      },
      {
        "chinese": "我只有一百块钱。",
        "pinyin": "Wǒ zhǐ yǒu yìbǎi kuài qián.",
        "german": "Ich habe nur hundert Yuan."
      },
      {
        "chinese": "教室里就他一个人。",
        "pinyin": "Jiàoshì li jiù tā yí ge rén.",
        "german": "Im Klassenzimmer ist nur er allein."
      },
      {
        "chinese": "春天到了，公园里到处都是花。",
        "pinyin": "Chūntiān dào le, gōngyuán li dàochù dōu shì huā.",
        "german": "Der Frühling ist da, im Park blühen überall Blumen."
      },
      {
        "chinese": "我只是看看，不买。",
        "pinyin": "Wǒ zhǐshì kànkan, bù mǎi.",
        "german": "Ich schaue nur, ich kaufe nichts."
      }
    ],
    "related": [
      "g:都¹",
      "g:一起",
      "g:一共",
      "g:到处",
      "g:范围副词@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一共",
    "pattern": "一共",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 165,
      "category": "词类",
      "categoryName": "副词",
      "item": "范围副词",
      "content": "就³、一块儿、一共、只、到处、只是"
    },
    "meaning": "insgesamt, zusammen (Summe)",
    "pinyin": "yígòng",
    "examples": [
      {
        "chinese": "一共多少钱？",
        "pinyin": "Yígòng duōshao qián?",
        "german": "Was macht das zusammen?"
      },
      {
        "chinese": "我们班一共有二十个学生。",
        "pinyin": "Wǒmen bān yígòng yǒu èrshí ge xuésheng.",
        "german": "Unsere Klasse hat insgesamt zwanzig Schüler."
      },
      {
        "chinese": "这本书我一共看了三遍。",
        "pinyin": "Zhè běn shū wǒ yígòng kàn le sān biàn.",
        "german": "Dieses Buch habe ich insgesamt dreimal gelesen."
      },
      {
        "chinese": "我们一共五个人，有位子吗？",
        "pinyin": "Wǒmen yígòng wǔ ge rén, yǒu wèizi ma?",
        "german": "Wir sind zu fünft – haben Sie noch Plätze?"
      }
    ],
    "legacyIds": [
      "一共"
    ],
    "formation": "一共 + (Verb +) Zahl + Zählwort (+ Nomen)",
    "notes": "Gleichbedeutend, aber etwas förmlicher ist 总共 (zǒnggòng). 都 fasst Personen oder Dinge zusammen („alle“), nennt aber keine Summe.",
    "explanation": "一共 (yígòng) fasst eine Menge zur Gesamtsumme zusammen: „insgesamt“. Es steht vor dem Verb und verlangt immer eine Mengenangabe oder die Frage danach: 一共多少钱？ „Was macht das zusammen?“, 我们班一共有二十个学生. Vor einer Zahl als Prädikat kann das Verb fehlen: 我们一共五个人 „Wir sind insgesamt fünf“. Ohne Zahl ist 一共 falsch: nicht 我们一共去了, sondern 我们一共去了三个人. Verwechslungsgefahr: 一起 (yìqǐ) heißt „gemeinsam (etwas tun)“, 一共 nur „in der Summe“.",
    "quiz": {
      "example": 1,
      "answer": "一共",
      "distractors": [
        {
          "text": "一起",
          "reason": "一起 heißt „gemeinsam (etwas tun)“, nennt aber keine Gesamtzahl."
        },
        {
          "text": "只",
          "reason": "只 heißt „nur“ und würde die Zahl als wenig darstellen; gemeint ist die Summe."
        },
        {
          "text": "到处",
          "reason": "到处 heißt „überall“ und bezieht sich auf Orte, nicht auf eine Anzahl."
        }
      ]
    },
    "related": [
      "g:范围副词@HSK3",
      "g:一起",
      "g:都¹",
      "g:到处"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:到处",
    "pattern": "到处",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 165,
      "category": "词类",
      "categoryName": "副词",
      "item": "范围副词",
      "content": "就³、一块儿、一共、只、到处、只是"
    },
    "meaning": "überall, an allen Orten",
    "pinyin": "dàochù",
    "examples": [
      {
        "chinese": "下雪了，外面到处都是雪。",
        "pinyin": "Xià xuě le, wàimiàn dàochù dōu shì xuě.",
        "german": "Es hat geschneit, draußen liegt überall Schnee."
      },
      {
        "chinese": "我到处找你，你去哪儿了？",
        "pinyin": "Wǒ dàochù zhǎo nǐ, nǐ qù nǎr le?",
        "german": "Ich habe dich überall gesucht – wo warst du?"
      },
      {
        "chinese": "放假的时候，他喜欢到处走走。",
        "pinyin": "Fàngjià de shíhou, tā xǐhuan dàochù zǒuzou.",
        "german": "In den Ferien zieht er gern ein bisschen herum."
      }
    ],
    "legacyIds": [
      "到处"
    ],
    "formation": "到处 + (都) + Verb; 到处都是 + Nomen",
    "notes": "Mit Fragewort und 都 sagt man dasselbe: 哪儿都是人 (nǎr dōu shì rén). 处处 (chùchù) (höheres Niveau) klingt schriftlicher und wird auch übertragen gebraucht („in jeder Hinsicht“).",
    "explanation": "到处 (dàochù) heißt „überall, an allen möglichen Orten“. Es ist ein Adverb und steht vor dem Verb, oft zusammen mit 都: 到处都是人 „überall sind Leute“. Mit Verben der Bewegung oder Suche bedeutet es „hierhin und dorthin“: 到处找 „überall suchen“, 到处走走 „herumlaufen“. Als Objekt nach dem Verb kann es nicht stehen: nicht 我找了到处, sondern 我到处找了.",
    "quiz": {
      "example": 1,
      "answer": "到处",
      "distractors": [
        {
          "text": "一共",
          "reason": "一共 („insgesamt“) verlangt eine Mengenangabe; hier geht es um Orte."
        },
        {
          "text": "一起",
          "reason": "一起 heißt „gemeinsam“ – gemeint ist aber, dass überall gesucht wurde."
        },
        {
          "text": "哪儿",
          "reason": "哪儿 heißt „überall“ nur zusammen mit 都 (我哪儿都找了); 我哪儿找你 ergibt keinen Sinn."
        }
      ]
    },
    "related": [
      "g:范围副词@HSK3",
      "g:一共",
      "g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:时间副词@HSK3",
    "pattern": "时间副词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 166,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "才¹、马上、先、一会儿、刚、刚刚、一直"
    },
    "words": [
      "才¹",
      "马上",
      "先",
      "一会儿",
      "刚",
      "刚刚",
      "一直"
    ],
    "meaning": "Zeitadverbien: erst, sofort, zuerst, gleich, gerade eben, die ganze Zeit",
    "formation": "Subjekt + Zeitadverb + Verb",
    "notes": "刚 ist ein Adverb und steht vor dem Verb; 刚才 (gāngcái) „vorhin“ ist ein Zeitwort und kann auch vor dem Subjekt stehen. Mit 才 steht am Satzende normalerweise kein 了, mit 就 dagegen oft.",
    "explanation": "Diese Zeitadverbien stehen in der Regel nach dem Subjekt vor dem Verb und ordnen die Handlung zeitlich ein.\n才 (cái) – „erst“, später als erwartet: 九点才到 „kam erst um neun“\n马上 (mǎshàng) – „sofort, gleich“: 我马上来\n先 (xiān) – „zuerst“, oft mit 再 oder 然后 (ránhòu): 先吃饭，再看电影\n一会儿 (yíhuìr) – „gleich, in Kürze“: 我一会儿就来; auch als Dauer „eine Weile“ nach dem Verb: 等一会儿 (děng yíhuìr)\n刚 (gāng) – „gerade eben, soeben“: 他刚走\n刚刚 (gānggāng) – wie 刚, etwas nachdrücklicher und gesprochen\n一直 (yìzhí) – „die ganze Zeit, ununterbrochen“: 一直在下雨",
    "examples": [
      {
        "chinese": "你等一下，我马上来。",
        "pinyin": "Nǐ děng yíxià, wǒ mǎshàng lái.",
        "german": "Warte kurz, ich komme sofort."
      },
      {
        "chinese": "我们先吃饭，然后去看电影。",
        "pinyin": "Wǒmen xiān chīfàn, ránhòu qù kàn diànyǐng.",
        "german": "Wir essen zuerst und gehen dann ins Kino."
      },
      {
        "chinese": "他刚刚出去，一会儿就回来。",
        "pinyin": "Tā gānggāng chūqu, yíhuìr jiù huílai.",
        "german": "Er ist gerade hinausgegangen und kommt gleich zurück."
      },
      {
        "chinese": "雨一直下到晚上。",
        "pinyin": "Yǔ yìzhí xià dào wǎnshang.",
        "german": "Es regnete ununterbrochen bis zum Abend."
      },
      {
        "chinese": "电影八点开始，他九点才到。",
        "pinyin": "Diànyǐng bā diǎn kāishǐ, tā jiǔ diǎn cái dào.",
        "german": "Der Film fing um acht an, er kam erst um neun."
      }
    ],
    "related": [
      "g:时间副词@HSK2",
      "g:才¹",
      "g:刚",
      "g:一直",
      "g:就¹",
      "g:时间副词@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一直",
    "pattern": "一直",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 166,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "才¹、马上、先、一会儿、刚、刚刚、一直"
    },
    "meaning": "die ganze Zeit, ununterbrochen (bis jetzt)",
    "pinyin": "yìzhí",
    "examples": [
      {
        "chinese": "我一直在等你。",
        "pinyin": "Wǒ yìzhí zài děng nǐ.",
        "german": "Ich habe die ganze Zeit auf dich gewartet."
      },
      {
        "chinese": "他一直住在北京。",
        "pinyin": "Tā yìzhí zhù zài Běijīng.",
        "german": "Er wohnt schon immer in Peking."
      },
      {
        "chinese": "我最近很忙，一直没给你打电话。",
        "pinyin": "Wǒ zuìjìn hěn máng, yìzhí méi gěi nǐ dǎ diànhuà.",
        "german": "Ich hatte in letzter Zeit viel zu tun und habe dich die ganze Zeit nicht angerufen."
      }
    ],
    "legacyIds": [
      "一直"
    ],
    "formation": "一直 + (在) + Verb; 一直 + 没/不 + Verb",
    "notes": "Räumlich heißt 一直 (yìzhí) „geradeaus“: 一直往前走 „immer geradeaus gehen“ – das ist kein Zeitgebrauch und gehört nicht zu diesem Punkt.",
    "explanation": "一直 (yìzhí) als Zeitadverb sagt, dass eine Handlung oder ein Zustand über einen Zeitraum ohne Unterbrechung andauert: 我一直在等你 „Ich habe die ganze Zeit auf dich gewartet“. Es steht vor dem Verb, oft mit 在 (Verlauf), mit einem Endpunkt (一直到晚上 „bis zum Abend“) oder mit Verneinung: 一直没 … „die ganze Zeit nicht, bis jetzt nicht“. Der Zeitraum kann in der Vergangenheit liegen oder bis in die Gegenwart reichen: 他一直住在北京 „Er wohnt schon immer in Peking“. Abgrenzung: 总是 (zǒngshì) meint wiederholte Gewohnheit („jedes Mal“), 一直 einen durchgehenden Zustand.",
    "quiz": {
      "example": 2,
      "answer": "一直",
      "distractors": [
        {
          "text": "马上",
          "reason": "马上 („sofort“) weist in die Zukunft und passt nicht zu 没 und „in letzter Zeit“."
        },
        {
          "text": "刚",
          "reason": "刚 („gerade eben“) beschreibt einen Zeitpunkt, keinen Zeitraum, und wird nicht mit 没 verneint."
        },
        {
          "text": "才",
          "reason": "才 heißt „erst (spät)“ und steht nicht vor 没 für „die ganze Zeit nicht“."
        }
      ]
    },
    "related": [
      "g:时间副词@HSK3",
      "g:总是",
      "g:在",
      "g:正在"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:才¹",
    "pattern": "才¹",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 166,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "才¹、马上、先、一会儿、刚、刚刚、一直"
    },
    "meaning": "erst (später oder langsamer als erwartet)",
    "pinyin": "cái + Verb",
    "examples": [
      {
        "chinese": "他十点才来。",
        "pinyin": "Tā shí diǎn cái lái.",
        "german": "Er kam erst um zehn."
      },
      {
        "chinese": "我等了一个小时，他才来。",
        "pinyin": "Wǒ děng le yí ge xiǎoshí, tā cái lái.",
        "german": "Ich habe eine Stunde gewartet, bis er endlich kam."
      },
      {
        "chinese": "昨天我十二点才睡觉。",
        "pinyin": "Zuótiān wǒ shí'èr diǎn cái shuìjiào.",
        "german": "Gestern bin ich erst um zwölf schlafen gegangen."
      }
    ],
    "legacyIds": [
      "g:才 + Verb",
      "才 + Verb"
    ],
    "formation": "Zeitangabe/Dauer + 才 + Verb",
    "notes": "才 hat weitere Gebrauchsweisen, die eigene Punkte sind: als Modaladverb „nur, bloß“ vor Mengen (他才五岁 „er ist erst fünf“) und zur Betonung (我才不去呢！ „Ich gehe doch nicht!“), sowie in 只有 (zhǐyǒu)……，才…… „nur wenn …, dann“.",
    "explanation": "才¹ (cái) als Zeitadverb zeigt, dass etwas später, langsamer oder mühsamer geschieht als erwartet: 他十点才来 „Er kam erst um zehn“. Davor steht eine Zeitangabe oder eine Dauer, die den späten Zeitpunkt zeigt: 我等了一个小时，他才来. Der Satz endet normalerweise ohne 了 (nicht 他十点才来了). Das Gegenstück ist 就 (jiù) „schon“ für früher oder schneller als erwartet, meist mit 了: 他八点就来了 „Er kam schon um acht“. 才 steht nach dem Subjekt vor dem Prädikat, nie vor dem Subjekt.",
    "quiz": {
      "example": 0,
      "answer": "才",
      "distractors": [
        {
          "text": "就",
          "reason": "就 heißt „schon“ (früher als erwartet) und bräuchte 了: 他十点就来了."
        },
        {
          "text": "刚",
          "reason": "刚 heißt „gerade eben“ und passt nicht zu „erst um zehn“."
        },
        {
          "text": "又",
          "reason": "又 heißt „schon wieder“ und bräuchte 了; von Wiederholung ist keine Rede."
        }
      ]
    },
    "related": [
      "g:时间副词@HSK3",
      "g:就¹",
      "g:只有……，才……",
      "g:刚"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:刚",
    "pattern": "刚",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 166,
      "category": "词类",
      "categoryName": "副词",
      "item": "时间副词",
      "content": "才¹、马上、先、一会儿、刚、刚刚、一直"
    },
    "meaning": "gerade eben, soeben (vor kurzer Zeit)",
    "pinyin": "gāng/gāngcái",
    "examples": [
      {
        "chinese": "你来晚了，他刚走。",
        "pinyin": "Nǐ lái wǎn le, tā gāng zǒu.",
        "german": "Du bist zu spät, er ist gerade gegangen."
      },
      {
        "chinese": "我刚到北京，还不太习惯。",
        "pinyin": "Wǒ gāng dào Běijīng, hái bú tài xíguàn.",
        "german": "Ich bin gerade erst in Peking angekommen und noch nicht ganz eingewöhnt."
      },
      {
        "chinese": "他刚来中国一个月。",
        "pinyin": "Tā gāng lái Zhōngguó yí ge yuè.",
        "german": "Er ist erst seit einem Monat in China."
      }
    ],
    "legacyIds": [
      "g:刚/刚才",
      "刚/刚才"
    ],
    "formation": "Subjekt + 刚 + Verb (+ Zeitdauer)",
    "notes": "刚才 (gāngcái) ist ein Zeitwort („vorhin“) und kann vor dem Subjekt stehen (刚才谁来了？), 刚 nicht. Folgesätze mit 就 schließen oft an: 我刚到家，就下雨了 „Kaum war ich zu Hause, fing es an zu regnen“.",
    "explanation": "刚 (gāng) sagt, dass eine Handlung erst vor kurzer Zeit geschehen ist: 他刚走 „Er ist gerade gegangen“. Es ist ein Adverb und steht direkt vor dem Verb, nie vor dem Subjekt. Mit einer Zeitdauer bedeutet es „erst seit …“: 他刚来中国一个月 „Er ist erst seit einem Monat in China“. Wie kurz „gerade“ ist, hängt vom Sprecher ab – es können Minuten oder Wochen sein. 刚 wird nicht mit 不/没 verneint; dafür nimmt man 刚才 (gāngcái) „vorhin“: 我刚才没听见. 刚刚 (gānggāng) bedeutet dasselbe, etwas nachdrücklicher.",
    "quiz": {
      "example": 0,
      "answer": "刚",
      "distractors": [
        {
          "text": "马上",
          "reason": "马上 („sofort“) weist in die Zukunft; er ist aber schon gegangen."
        },
        {
          "text": "一直",
          "reason": "一直走 hieße „immer geradeaus gehen“ bzw. „die ganze Zeit gehen“, nicht „gerade gegangen“."
        },
        {
          "text": "先",
          "reason": "先 („zuerst, vorher“) gibt eine Reihenfolge an (他先走了 „er ist schon vorgegangen“), sagt aber nicht, dass es gerade eben geschah."
        }
      ],
      "accepted": [
        "刚刚"
      ]
    },
    "related": [
      "g:时间副词@HSK3",
      "g:才¹",
      "g:一直",
      "g:已经"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:频率副词@HSK3",
    "pattern": "频率副词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 167,
      "category": "词类",
      "categoryName": "副词",
      "item": "频率副词",
      "content": "总、总是、又、常常"
    },
    "words": [
      "总",
      "总是",
      "又",
      "常常"
    ],
    "meaning": "Häufigkeitsadverbien: immer, ständig, schon wieder, oft",
    "formation": "Subjekt + Häufigkeitsadverb + Verb",
    "notes": "又 blickt auf eine geschehene Wiederholung zurück, 再 (zài, HSK 1) auf eine künftige: 明天再来 „komm morgen wieder“.",
    "explanation": "Diese Adverbien geben an, wie oft etwas geschieht, und stehen vor dem Verb.\n总 (zǒng) – „immer, ständig“, kurz und gesprochen, oft mit leichtem Unmut: 他总迟到\n总是 (zǒngshì) – „immer, jedes Mal“, beschreibt Gewohnheiten\n又 (yòu) – „(schon) wieder“, für bereits geschehene Wiederholung, meist mit 了: 他又来了\n常常 (chángcháng) – „oft“; verneint heißt es 不常, nicht 不常常",
    "examples": [
      {
        "chinese": "他上课总是迟到。",
        "pinyin": "Tā shàngkè zǒngshì chídào.",
        "german": "Er kommt immer zu spät zum Unterricht."
      },
      {
        "chinese": "你怎么又来晚了？",
        "pinyin": "Nǐ zěnme yòu lái wǎn le?",
        "german": "Wieso bist du schon wieder zu spät?"
      },
      {
        "chinese": "周末我常常去公园跑步。",
        "pinyin": "Zhōumò wǒ chángcháng qù gōngyuán pǎobù.",
        "german": "Am Wochenende gehe ich oft im Park joggen."
      },
      {
        "chinese": "我问他，他总说没时间。",
        "pinyin": "Wǒ wèn tā, tā zǒng shuō méi shíjiān.",
        "german": "Wenn ich ihn frage, sagt er immer, er habe keine Zeit."
      }
    ],
    "related": [
      "g:总是",
      "g:又",
      "g:经常",
      "g:再¹",
      "g:频率副词@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:又",
    "pattern": "又",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 167,
      "category": "词类",
      "categoryName": "副词",
      "item": "频率副词",
      "content": "总、总是、又、常常"
    },
    "meaning": "schon wieder (Wiederholung, die bereits eingetreten ist)",
    "pinyin": "yòu + Verb + le",
    "examples": [
      {
        "chinese": "他今天又迟到了。",
        "pinyin": "Tā jīntiān yòu chídào le.",
        "german": "Er ist heute schon wieder zu spät gekommen."
      },
      {
        "chinese": "你怎么又忘了带钥匙？",
        "pinyin": "Nǐ zěnme yòu wàngle dài yàoshi?",
        "german": "Wieso hast du schon wieder den Schlüssel vergessen?"
      },
      {
        "chinese": "明天又是星期一了。",
        "pinyin": "Míngtiān yòu shì xīngqīyī le.",
        "german": "Morgen ist schon wieder Montag."
      }
    ],
    "legacyIds": [
      "g:又 + Verb + 了",
      "又 + Verb + 了"
    ],
    "formation": "Subjekt + 又 + Verb (+ 了)",
    "notes": "又 hat noch andere Gebrauchsweisen, die eigene Punkte sind: 又……又…… „sowohl … als auch“ (他又高又帅, HSK 3). Gegenüber 总是 (zǒngshì) „immer“ beschreibt 又 eine einzelne erneute Wiederholung, keine Gewohnheit.",
    "explanation": "又 (yòu) zeigt, dass sich eine Handlung oder ein Zustand wiederholt hat. Meist geht es um Vergangenes, oft mit 了 am Satzende und einem Unterton von Ärger oder Überraschung: 他又迟到了 „er ist schon wieder zu spät gekommen“. 又 steht nach dem Subjekt direkt vor dem Verb, vor einem Modalverb oder vor 不/没: 他又没来 „er ist wieder nicht gekommen“. Für eine Wiederholung, die erst noch kommen soll, nimmt man 再 (zài): 明天再来 „komm morgen wieder“ – nicht *明天又来. Ausnahme: Regelmäßiges, das sicher eintritt, darf mit 又 stehen: 明天又是星期一了 „morgen ist schon wieder Montag“.",
    "quiz": {
      "example": 0,
      "answer": "又",
      "distractors": [
        {
          "text": "再",
          "reason": "再 kündigt eine künftige Wiederholung an; zu einem schon geschehenen 迟到了 passt nur 又."
        },
        {
          "text": "也",
          "reason": "也 hieße „auch er“ – der Satz soll aber „schon wieder“ ausdrücken."
        },
        {
          "text": "常常",
          "reason": "常常 beschreibt eine Gewohnheit („oft“) und passt nicht zu einem einzelnen Vorfall mit 今天……了."
        }
      ]
    },
    "related": [
      "g:再¹",
      "g:又……，又……",
      "g:总是",
      "g:频率副词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:总是",
    "pattern": "总是",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 167,
      "category": "词类",
      "categoryName": "副词",
      "item": "频率副词",
      "content": "总、总是、又、常常"
    },
    "meaning": "immer, ständig (Gewohnheit, Regelmäßigkeit)",
    "pinyin": "zǒngshì",
    "examples": [
      {
        "chinese": "他上课总是迟到。",
        "pinyin": "Tā shàngkè zǒngshì chídào.",
        "german": "Er kommt immer zu spät zum Unterricht."
      },
      {
        "chinese": "奶奶早上总是先喝一杯茶。",
        "pinyin": "Nǎinai zǎoshang zǒngshì xiān hē yì bēi chá.",
        "german": "Oma trinkt morgens immer zuerst eine Tasse Tee."
      },
      {
        "chinese": "我哥哥总是不吃早饭。",
        "pinyin": "Wǒ gēge zǒngshì bù chī zǎofàn.",
        "german": "Mein älterer Bruder frühstückt nie."
      }
    ],
    "legacyIds": [
      "总是"
    ],
    "formation": "Subjekt + 总是 + Verb/Adjektiv",
    "notes": "Umgangssprachlich mit deutlichem Ärger auch 老是 (lǎoshì): 你老是忘! Das Adverb 又 (yòu) bezeichnet dagegen eine einzelne, gerade geschehene Wiederholung („schon wieder“).",
    "explanation": "总是 (zǒngshì) sagt, dass etwas immer oder fast immer so geschieht – eine Gewohnheit oder Regelmäßigkeit: 奶奶早上总是先喝茶 „Oma trinkt morgens immer zuerst Tee“. Oft klingt Kritik mit: 他总是迟到 „er kommt ständig zu spät“. 总是 steht nach dem Subjekt vor dem Verb oder Adjektiv. Eine Verneinung folgt meist danach: 总是不吃早饭 „frühstückt nie“; 不总是 bedeutet dagegen „nicht immer“. Die kürzere Form 总 (zǒng) hat dieselbe Bedeutung. Anders als 常常 (chángcháng) „oft“ meint 总是 „jedes Mal“; 一直 (yìzhí) beschreibt dagegen einen ununterbrochenen Zeitraum („die ganze Zeit“).",
    "quiz": {
      "example": 0,
      "answer": "总是",
      "distractors": [
        {
          "text": "又",
          "reason": "又 bezeichnet eine einzelne, schon geschehene Wiederholung und bräuchte 了 (又迟到了); eine Gewohnheit drückt es nicht aus."
        },
        {
          "text": "再",
          "reason": "再 kündigt eine künftige Wiederholung an („noch einmal“), keine Gewohnheit."
        },
        {
          "text": "刚",
          "reason": "刚 heißt „gerade eben“ und passt nicht zu einer regelmäßigen Gewohnheit."
        }
      ],
      "accepted": [
        "总"
      ]
    },
    "related": [
      "g:又",
      "g:经常",
      "g:一直",
      "g:往往",
      "g:频率副词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一边",
    "pattern": "一边",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 168,
      "category": "词类",
      "categoryName": "副词",
      "item": "关联副词",
      "content": "一边"
    },
    "meaning": "dabei, nebenher (Adverb für gleichzeitige Handlungen)",
    "formation": "Subjekt + 一边 + Verb 1，一边 + Verb 2",
    "notes": "Die paarige Satzform 一边 (yìbiān) ……，一边…… ist im Syllabus ein eigener Punkt (HSK 3). Als Nomen bedeutet 一边 „eine Seite“: 站在一边 „sich auf eine Seite stellen“. 又……又…… verbindet dagegen meist Eigenschaften („sowohl … als auch“), nicht gleichzeitige Handlungen.",
    "explanation": "一边 (yìbiān) ist ein verbindendes Adverb: Es steht direkt vor dem Verb und zeigt, dass diese Handlung gleichzeitig mit einer anderen abläuft. Fast immer wird es wiederholt – 一边 A，一边 B „A und dabei B“: 他一边吃饭，一边看手机. Beide Handlungen gehören in der Regel zum selben Subjekt und dauern eine Weile an; Verben, die in einem Augenblick abgeschlossen sind, etwa 到 oder 开始 (kāishǐ), passen nicht. In kurzen Sätzen fällt das Komma oft weg (一边走一边聊), in lebhafter Rede auch kürzer 边……边…… (biān … biān …). Achtung Aussprache: 一 wird vor 边 im vierten Ton gesprochen (yìbiān).",
    "examples": [
      {
        "chinese": "他一边吃饭，一边看手机。",
        "pinyin": "Tā yìbiān chīfàn, yìbiān kàn shǒujī.",
        "german": "Er schaut beim Essen auf sein Handy."
      },
      {
        "chinese": "我们一边走一边聊吧。",
        "pinyin": "Wǒmen yìbiān zǒu yìbiān liáo ba.",
        "german": "Lass uns beim Gehen reden."
      },
      {
        "chinese": "妈妈一边做饭，一边听音乐。",
        "pinyin": "Māma yìbiān zuòfàn, yìbiān tīng yīnyuè.",
        "german": "Mama hört beim Kochen Musik."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "一边看",
      "distractors": [
        {
          "text": "一起看",
          "reason": "一起 heißt „zusammen mit anderen“ und bildet mit dem ersten 一边 kein Paar für gleichzeitige Handlungen."
        },
        {
          "text": "一直看",
          "reason": "一直 heißt „die ganze Zeit“; das erste 一边 verlangt ein zweites 一边."
        },
        {
          "text": "又看",
          "reason": "又 bedeutet „schon wieder“ (oder verbindet als 又……又…… Eigenschaften); zu 一边 passt es nicht."
        }
      ]
    },
    "related": [
      "g:一边……，一边……",
      "g:又……，又……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:情态副词@HSK3",
    "pattern": "情态副词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 169,
      "category": "词类",
      "categoryName": "副词",
      "item": "情态副词",
      "content": "大概、必须、差不多、一定、好像、几乎"
    },
    "words": [
      "大概",
      "必须",
      "差不多",
      "一定",
      "好像",
      "几乎"
    ],
    "meaning": "Modaladverbien: wahrscheinlich, müssen, fast, bestimmt, anscheinend",
    "formation": "Subjekt + Adverb + Prädikat",
    "notes": "大概 (dàgài) und 好像 (hǎoxiàng) sind Vermutungen, 一定 (yídìng) ist eine sichere Annahme. 差不多 (chàbuduō) und 几乎 (jīhū) überschneiden sich bei „fast“; 几乎 klingt etwas schriftlicher und betont stärker die Grenze. 也许 (yěxǔ) „vielleicht“ und 恐怕 (kǒngpà) „fürchte ich“ folgen in HSK 4.",
    "explanation": "Diese Adverbien drücken aus, wie sicher, nötig oder vollständig der Sprecher etwas einschätzt. Sie stehen nach dem Subjekt vor dem Verb oder Adjektiv; 大概 (dàgài) und 好像 (hǎoxiàng) können auch am Satzanfang stehen.\n大概 (dàgài) – „wahrscheinlich, ungefähr“: 他大概八点到; vor Zahlen „etwa“.\n必须 (bìxū) – „müssen“: unbedingte Pflicht oder Notwendigkeit; verneint wird mit 不必 (búbì) oder 不用 (búyòng).\n差不多 (chàbuduō) – „fast, beinahe; ungefähr“: 我们差不多到了 „wir sind fast da“; als Adjektiv auch „ähnlich“.\n一定 (yídìng) – „bestimmt, unbedingt“: sichere Vermutung (他一定很累) oder fester Wille (我一定去).\n好像 (hǎoxiàng) – „anscheinend, es scheint, als ob“: vorsichtige Einschätzung nach dem Eindruck.\n几乎 (jīhū) – „fast, beinahe“: etwas ist nahe an einer Grenze, oft vor 都/没/不: 几乎没有时间 „kaum Zeit“.",
    "examples": [
      {
        "chinese": "他大概八点到。",
        "pinyin": "Tā dàgài bā diǎn dào.",
        "german": "Er kommt wahrscheinlich gegen acht an."
      },
      {
        "chinese": "明天你必须早点儿来。",
        "pinyin": "Míngtiān nǐ bìxū zǎo diǎnr lái.",
        "german": "Morgen musst du etwas früher kommen."
      },
      {
        "chinese": "我们差不多到了。",
        "pinyin": "Wǒmen chàbuduō dào le.",
        "german": "Wir sind fast da."
      },
      {
        "chinese": "放心，我一定准时到。",
        "pinyin": "Fàngxīn, wǒ yídìng zhǔnshí dào.",
        "german": "Keine Sorge, ich komme bestimmt pünktlich."
      },
      {
        "chinese": "外面好像下雨了。",
        "pinyin": "Wàimiàn hǎoxiàng xià yǔ le.",
        "german": "Draußen scheint es zu regnen."
      },
      {
        "chinese": "他最近很忙，几乎没有时间吃饭。",
        "pinyin": "Tā zuìjìn hěn máng, jīhū méiyǒu shíjiān chīfàn.",
        "german": "Er ist zurzeit sehr beschäftigt und hat kaum Zeit zum Essen."
      }
    ],
    "related": [
      "g:必须",
      "g:也许",
      "g:恐怕",
      "g:似乎"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:必须",
    "pattern": "必须",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 169,
      "category": "词类",
      "categoryName": "副词",
      "item": "情态副词",
      "content": "大概、必须、差不多、一定、好像、几乎"
    },
    "meaning": "müssen (unbedingte Pflicht, Notwendigkeit)",
    "pinyin": "bìxū + Verb",
    "examples": [
      {
        "chinese": "你必须按时完成作业。",
        "pinyin": "Nǐ bìxū ànshí wánchéng zuòyè.",
        "german": "Du musst die Hausaufgaben rechtzeitig erledigen."
      },
      {
        "chinese": "进教室以前，大家必须关手机。",
        "pinyin": "Jìn jiàoshì yǐqián, dàjiā bìxū guān shǒujī.",
        "german": "Bevor ihr ins Klassenzimmer geht, müsst ihr alle das Handy ausschalten."
      },
      {
        "chinese": "你病了，必须去医院。",
        "pinyin": "Nǐ bìng le, bìxū qù yīyuàn.",
        "german": "Du bist krank, du musst ins Krankenhaus."
      }
    ],
    "legacyIds": [
      "g:必须 + Verb",
      "必须 + Verb"
    ],
    "formation": "Subjekt + 必须 + Verb(phrase)",
    "notes": "一定要 (yídìng yào) drückt ebenfalls „unbedingt müssen“ aus, klingt aber eher nach festem Entschluss oder dringender Bitte (你一定要来!). 必须 (bìxū) ist im Syllabus Teil der Modaladverbien von HSK 3.",
    "explanation": "必须 (bìxū) drückt eine Pflicht oder eine unbedingte Notwendigkeit aus: Es gibt keine andere Wahl. Es steht nach dem Subjekt vor dem Verb und ist stärker als 应该 (yīnggāi) „sollte“ oder 要 „müssen, sollen“. Typisch ist es bei Regeln, Anweisungen und dringenden Ratschlägen: 你病了，必须去医院. Der Ton ist etwas formeller; im Alltag sagt man auch 得 (děi). Die Verneinung heißt nicht *不必须: „nicht müssen“ ist 不必 (búbì) oder 不用 (búyòng), „nicht dürfen“ ist 不能 (bù néng) oder 不可以 (bù kěyǐ).",
    "quiz": {
      "example": 2,
      "answer": "必须",
      "distractors": [
        {
          "text": "不必",
          "reason": "不必 heißt „nicht nötig“ – das Gegenteil von „müssen“."
        },
        {
          "text": "可以",
          "reason": "可以 drückt Erlaubnis aus („darfst“), keine Pflicht."
        },
        {
          "text": "几乎",
          "reason": "几乎 heißt „fast“ und ergibt vor 去医院 keinen Sinn."
        }
      ],
      "accepted": [
        "得"
      ]
    },
    "related": [
      "g:情态副词@HSK3",
      "g:不必",
      "g:不用"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:语气副词@HSK3",
    "pattern": "语气副词",
    "level": "HSK3",
    "kind": "overview",
    "category": "Adverbien",
    "syllabus": {
      "no": 170,
      "category": "词类",
      "categoryName": "副词",
      "item": "语气副词",
      "content": "当然、其实、终于、才²、才³、就⁴"
    },
    "words": [
      "当然",
      "其实",
      "终于",
      "才²",
      "才³",
      "就⁴"
    ],
    "meaning": "Einstellungsadverbien: natürlich, eigentlich, endlich, erst/nur, betont „gar nicht“, schon (früh)",
    "formation": "Subjekt + Adverb + Prädikat",
    "notes": "才¹ „erst (später als erwartet)“ ist ein Zeitadverb (HSK 3); 就¹ „dann, gleich“ ist ein verbindendes Adverb, 就² „genau, eben“ (这就是我家) ein Einstellungsadverb von HSK 2, 就³ „nur“ ein Bereichsadverb (HSK 3). In HSK 4 folgen 才⁴ und 就⁵, z. B. der trotzige Wille 我就不信 „ich glaube das einfach nicht“.",
    "explanation": "Diese Adverbien zeigen die Haltung des Sprechers: Selbstverständlichkeit, Richtigstellung, Erleichterung oder Nachdruck. Sie stehen vor dem Prädikat; 当然 (dāngrán) und 其实 (qíshí) auch am Satzanfang.\n当然 (dāngrán) – „natürlich, selbstverständlich“; auch allein als Antwort: 当然!\n其实 (qíshí) – „eigentlich, in Wirklichkeit“: korrigiert einen Eindruck oder eine Erwartung.\n终于 (zhōngyú) – „endlich“: Erwartetes tritt nach langem Warten oder Mühe ein, meist mit 了.\n才² (cái) – „erst, nur“: betont, dass eine Zahl oder Zeit klein bzw. früh ist: 现在才七点.\n才³ (cái) – betont eine Aussage, oft mit 呢 am Ende: 我才不去呢! „ich gehe ganz sicher nicht hin!“.\n就⁴ (jiù) – „schon“: der Sprecher findet, dass etwas früh, schnell oder mit wenig Aufwand geschieht, meist mit 了: 他六点就起床了 „er ist schon um sechs aufgestanden“. Gegenstück zu 才 (cái), das „spät“ oder „wenig“ betont: 他十点才起床.",
    "examples": [
      {
        "chinese": "你来看我，我当然很高兴。",
        "pinyin": "Nǐ lái kàn wǒ, wǒ dāngrán hěn gāoxìng.",
        "german": "Wenn du mich besuchst, freue ich mich natürlich sehr."
      },
      {
        "chinese": "他看起来很年轻，其实已经五十岁了。",
        "pinyin": "Tā kàn qǐlai hěn niánqīng, qíshí yǐjīng wǔshí suì le.",
        "german": "Er sieht sehr jung aus, ist aber eigentlich schon fünfzig."
      },
      {
        "chinese": "等了一个小时，车终于来了。",
        "pinyin": "Děngle yí ge xiǎoshí, chē zhōngyú lái le.",
        "german": "Nach einer Stunde Warten kam der Bus endlich."
      },
      {
        "chinese": "现在才七点，你再睡一会儿吧。",
        "pinyin": "Xiànzài cái qī diǎn, nǐ zài shuì yíhuìr ba.",
        "german": "Es ist erst sieben, schlaf doch noch ein bisschen."
      },
      {
        "chinese": "这么冷的天，我才不去呢！",
        "pinyin": "Zhème lěng de tiān, wǒ cái bú qù ne!",
        "german": "Bei so einer Kälte gehe ich ganz sicher nicht hin!"
      },
      {
        "chinese": "弟弟五岁就会游泳了。",
        "pinyin": "Dìdi wǔ suì jiù huì yóuyǒng le.",
        "german": "Mein kleiner Bruder konnte schon mit fünf schwimmen."
      }
    ],
    "related": [
      "g:语气副词@HSK2",
      "g:语气副词@HSK4",
      "g:才¹",
      "g:就¹"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不必",
    "pattern": "不必",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 171,
      "category": "词类",
      "categoryName": "副词",
      "item": "否定副词",
      "content": "不必、不用"
    },
    "meaning": "nicht nötig, nicht müssen (eher förmlich)",
    "formation": "Subjekt + 不必 + Verb",
    "notes": "未必 (wèibì) aus HSK 6 sieht ähnlich aus, heißt aber „nicht unbedingt“ und ist eine Einschätzung, keine Aussage über Notwendigkeit: 他未必知道 „er weiß es nicht unbedingt“.",
    "explanation": "不必 (búbì) sagt, dass etwas nicht notwendig ist – es ist die Verneinung von 必须 (bìxū) „müssen“. Es steht vor dem Verb: 你不必担心 „du brauchst dir keine Sorgen zu machen“. Als Antwort kann es auch allein stehen: 不必了 „nicht nötig“. Im Vergleich zu 不用 (búyòng) klingt 不必 etwas förmlicher und schriftlicher; die Bedeutung ist gleich. Wichtig: 不必 erlaubt, etwas nicht zu tun, verbietet aber nichts – ein Verbot drücken 不要 (bú yào), 别 (bié) oder 不能 (bù néng) aus. 不 wird vor dem vierten Ton von 必 im zweiten Ton gesprochen.",
    "examples": [
      {
        "chinese": "你不必担心，我已经好多了。",
        "pinyin": "Nǐ búbì dānxīn, wǒ yǐjīng hǎo duō le.",
        "german": "Du brauchst dir keine Sorgen zu machen, mir geht es schon viel besser."
      },
      {
        "chinese": "明天是星期六，大家不必来公司。",
        "pinyin": "Míngtiān shì xīngqīliù, dàjiā búbì lái gōngsī.",
        "german": "Morgen ist Samstag, niemand muss in die Firma kommen."
      },
      {
        "chinese": "这么一点儿小事，你不必谢我。",
        "pinyin": "Zhème yìdiǎnr xiǎo shì, nǐ búbì xiè wǒ.",
        "german": "Für so eine Kleinigkeit musst du dich nicht bei mir bedanken."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "不必",
      "distractors": [
        {
          "text": "不能",
          "reason": "不能 wäre ein Verbot („dürfen nicht kommen“), der Satz sagt aber nur, dass es nicht nötig ist."
        },
        {
          "text": "必须",
          "reason": "必须 heißt „müssen“ – das Gegenteil des Gemeinten."
        },
        {
          "text": "没",
          "reason": "没 verneint Geschehenes; für eine Aussage über morgen und „nicht nötig“ passt es nicht."
        }
      ],
      "accepted": [
        "不用"
      ]
    },
    "related": [
      "g:不用",
      "g:必须",
      "g:别",
      "g:不要",
      "g:未必"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不用",
    "pattern": "不用",
    "level": "HSK3",
    "kind": "word",
    "category": "Adverbien",
    "syllabus": {
      "no": 171,
      "category": "词类",
      "categoryName": "副词",
      "item": "否定副词",
      "content": "不必、不用"
    },
    "meaning": "brauchst nicht, nicht nötig (umgangssprachlich)",
    "pinyin": "búyòng + Verb",
    "examples": [
      {
        "chinese": "不用谢，这是我应该做的。",
        "pinyin": "Búyòng xiè, zhè shì wǒ yīnggāi zuò de.",
        "german": "Keine Ursache, das ist doch selbstverständlich."
      },
      {
        "chinese": "你不用来接我，我自己打车回去。",
        "pinyin": "Nǐ búyòng lái jiē wǒ, wǒ zìjǐ dǎchē huíqu.",
        "german": "Du brauchst mich nicht abzuholen, ich nehme selbst ein Taxi zurück."
      },
      {
        "chinese": "今天不用上班，我们去公园吧。",
        "pinyin": "Jīntiān búyòng shàngbān, wǒmen qù gōngyuán ba.",
        "german": "Heute müssen wir nicht arbeiten, lass uns in den Park gehen."
      }
    ],
    "legacyIds": [
      "g:不用 + Verb",
      "不用 + Verb"
    ],
    "formation": "Subjekt + 不用 + Verb; allein: 不用（了）",
    "notes": "Im Pekinger Dialekt verschmilzt 不用 (búyòng) zu 甭 (béng). 不用说 (búyòng shuō) bedeutet „selbstverständlich, ganz zu schweigen von“; die Steigerung 更不用说 ist ein eigener Punkt (HSK 7–9).",
    "explanation": "不用 (búyòng) sagt, dass etwas nicht notwendig ist: 你不用来 „du brauchst nicht zu kommen“. Es ist die alltägliche, gesprochene Entsprechung zu 不必 (búbì). Häufig sind feste Antworten: 不用谢 (búyòng xiè) „keine Ursache“, 不用客气 (búyòng kèqi) „nicht der Rede wert“, und allein 不用了 „nicht nötig, danke“. Wie 不必 verbietet 不用 nichts – es entbindet nur von einer Pflicht; ein Verbot heißt 别 (bié) oder 不要 (bú yào). Vorsicht: Vor einem Nomen ist 用 oft das Verb „benutzen“: 不用筷子 heißt „keine Stäbchen benutzen“.",
    "quiz": {
      "example": 1,
      "answer": "不用",
      "distractors": [
        {
          "text": "必须",
          "reason": "必须 heißt „müssen“ und widerspricht dem Nachsatz „ich nehme selbst ein Taxi“."
        },
        {
          "text": "不会",
          "reason": "不会 heißt „wird nicht / kann nicht“ und drückt keine fehlende Notwendigkeit aus."
        },
        {
          "text": "没",
          "reason": "没 verneint Geschehenes; hier geht es um etwas, das nicht nötig ist."
        }
      ],
      "accepted": [
        "不必"
      ]
    },
    "related": [
      "g:不必",
      "g:别",
      "g:不要",
      "g:否定副词@HSK1"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:引出对象@HSK3",
    "pattern": "引出对象",
    "level": "HSK3",
    "kind": "overview",
    "category": "Präpositionen",
    "syllabus": {
      "no": 172,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出对象",
      "content": "为¹、向¹、关于"
    },
    "words": [
      "为¹",
      "向¹",
      "关于"
    ],
    "meaning": "Präpositionen für Bezugsperson und Thema: für, an/gegenüber, über",
    "formation": "Präposition + Person/Thema + Verb",
    "notes": "为² (wèi) für Grund und Zweck und 向² (xiàng) für die Richtung einer Bewegung sind eigene Punkte. 给 (gěi) „für“ ist gesprochener als 为; 对 (duì) nennt die Person, der man gegenübersteht oder der eine Haltung gilt.",
    "explanation": "Diese Präpositionen nennen, auf wen oder worauf sich eine Handlung bezieht. Die Präpositionalgruppe steht vor dem Verb; 关于 (guānyú) steht meist am Satzanfang oder mit 的 vor einem Nomen.\n为¹ (wèi) – „für“: nennt den Nutznießer einer Handlung: 为大家服务 „für alle da sein“, 为我们做饭 „für uns kochen“.\n向¹ (xiàng) – „an, gegenüber, von“: nennt die Person, an die sich eine Handlung richtet: 向老师问好 „den Lehrer grüßen“, 向他学习 „von ihm lernen“, 向朋友借钱 „sich bei einem Freund Geld leihen“.\n关于 (guānyú) – „über, bezüglich“: nennt das Thema: 关于这个问题 „zu dieser Frage“, 关于中国的书 „Bücher über China“.",
    "examples": [
      {
        "chinese": "妈妈每天为我们做饭。",
        "pinyin": "Māma měi tiān wèi wǒmen zuòfàn.",
        "german": "Mama kocht jeden Tag für uns."
      },
      {
        "chinese": "我们应该向他学习。",
        "pinyin": "Wǒmen yīnggāi xiàng tā xuéxí.",
        "german": "Wir sollten uns an ihm ein Beispiel nehmen."
      },
      {
        "chinese": "请向你父母问好。",
        "pinyin": "Qǐng xiàng nǐ fùmǔ wènhǎo.",
        "german": "Grüß bitte deine Eltern von mir."
      },
      {
        "chinese": "我想看一些关于中国历史的书。",
        "pinyin": "Wǒ xiǎng kàn yìxiē guānyú Zhōngguó lìshǐ de shū.",
        "german": "Ich möchte ein paar Bücher über chinesische Geschichte lesen."
      }
    ],
    "related": [
      "g:关于",
      "g:为²",
      "g:向²",
      "g:对",
      "g:给",
      "g:对于"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:关于",
    "pattern": "关于",
    "level": "HSK3",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 172,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出对象",
      "content": "为¹、向¹、关于"
    },
    "meaning": "über, bezüglich (nennt das Thema)",
    "formation": "关于 + Thema，Satz; 关于 + Thema + 的 + Nomen",
    "explanation": "关于 (guānyú) nennt das Thema, um das es geht. Es hat zwei typische Plätze: am Satzanfang als Themenangabe mit Komma (关于这个问题，我们明天再讨论) oder mit 的 als Attribut vor einem Nomen (一本关于熊猫的书 „ein Buch über Pandas“). Auch Überschriften beginnen oft damit: 关于考试的通知 „Mitteilung zur Prüfung“. Ein häufiger Fehler ist 关于 zwischen Subjekt und Verb: nicht *我关于这件事知道很多, sondern 关于这件事，我知道很多. Wem eine Haltung oder ein Gefühl gilt, sagt man mit 对 (duì), nicht mit 关于: 我对中国文化很感兴趣.",
    "notes": "对于 (duìyú) aus HSK 4 nennt das Bezugsobjekt einer Haltung oder Bewertung und darf auch nach dem Subjekt stehen; 关于 (guānyú) nennt nur das Thema, über das gesprochen oder geschrieben wird.",
    "examples": [
      {
        "chinese": "关于这个问题，我们明天再讨论。",
        "pinyin": "Guānyú zhège wèntí, wǒmen míngtiān zài tǎolùn.",
        "german": "Über diese Frage sprechen wir morgen weiter."
      },
      {
        "chinese": "我昨天看了一本关于熊猫的书。",
        "pinyin": "Wǒ zuótiān kànle yì běn guānyú xióngmāo de shū.",
        "german": "Gestern habe ich ein Buch über Pandas gelesen."
      },
      {
        "chinese": "关于旅行的事，你去问小王吧。",
        "pinyin": "Guānyú lǚxíng de shì, nǐ qù wèn Xiǎo Wáng ba.",
        "german": "Was die Reise angeht, frag am besten Xiao Wang."
      }
    ],
    "legacyIds": [
      "关于"
    ],
    "related": [
      "g:引出对象@HSK3",
      "g:对",
      "g:对于",
      "g:对……来说",
      "g:至于"
    ],
    "quiz": {
      "example": 1,
      "answer": "关于",
      "distractors": [
        {
          "text": "对",
          "reason": "对 nennt die Person oder Sache, der eine Haltung gilt (对熊猫感兴趣), aber nicht das Thema eines Buches."
        },
        {
          "text": "给",
          "reason": "给 nennt einen Empfänger („für, an“); ein Buch „für Pandas“ ist nicht gemeint."
        },
        {
          "text": "向",
          "reason": "向 nennt eine Richtung oder die Person, an die sich eine Handlung richtet, kein Thema."
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
    "id": "g:向²",
    "pattern": "向²",
    "level": "HSK3",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 173,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出方向、路径",
      "content": "向²"
    },
    "meaning": "nach, in Richtung (Richtung einer Bewegung)",
    "pinyin": "xiàng + Richtung/Person",
    "examples": [
      {
        "chinese": "一直向前走，就能看到银行。",
        "pinyin": "Yìzhí xiàng qián zǒu, jiù néng kàndào yínháng.",
        "german": "Wenn Sie immer geradeaus gehen, sehen Sie die Bank."
      },
      {
        "chinese": "请大家向左看。",
        "pinyin": "Qǐng dàjiā xiàng zuǒ kàn.",
        "german": "Bitte schauen Sie alle nach links."
      },
      {
        "chinese": "他站起来，向门口走去。",
        "pinyin": "Tā zhàn qǐlai, xiàng ménkǒu zǒu qù.",
        "german": "Er stand auf und ging zur Tür."
      }
    ],
    "legacyIds": [
      "g:向 + Richtung/Person",
      "向 + Richtung/Person"
    ],
    "formation": "向 + Richtung/Ort + Verb",
    "notes": "Mit einer Person dahinter ist 向 der Punkt 向¹ (im Überblick „Präpositionen für Bezugsperson“): 向老师问好 „den Lehrer grüßen“. 朝 (cháo, HSK 5) nennt ebenfalls die Richtung und betont, wohin etwas zeigt.",
    "explanation": "向 (xiàng) nennt hier die Richtung, in die eine Bewegung oder ein Blick geht: 向左走 „nach links gehen“, 向前看 „nach vorn schauen“, 向门口走去 „zur Tür gehen“. Danach steht ein Richtungswort (前, 后, 左, 右, 东, 南 …) oder ein Ort. Die Gruppe steht vor dem Verb. In Texten kann 向 auch direkt hinter einem einsilbigen Verb stehen: 走向门口, 飞向南方 – das klingt schriftlich. 往 (wǎng) bedeutet fast dasselbe und ist in der Umgangssprache häufiger, besonders bei Wegbeschreibungen.",
    "quiz": {
      "example": 1,
      "answer": "向",
      "distractors": [
        {
          "text": "在",
          "reason": "在 nennt den Ort, an dem etwas geschieht, nicht die Richtung eines Blicks."
        },
        {
          "text": "从",
          "reason": "从 nennt den Ausgangspunkt („von links aus“), nicht die Richtung „nach links“."
        },
        {
          "text": "对",
          "reason": "对 steht vor einer Person oder Sache gegenüber, nicht vor einem Richtungswort wie 左."
        }
      ],
      "accepted": [
        "往",
        "朝"
      ]
    },
    "related": [
      "g:往",
      "g:朝",
      "g:从²",
      "g:沿（着）",
      "g:引出对象@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:为了",
    "pattern": "为了",
    "level": "HSK3",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 174,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出目的、原因",
      "content": "为了、为²"
    },
    "meaning": "um … zu, für (Zweck, Ziel)",
    "pinyin": "wèile + Ziel",
    "examples": [
      {
        "chinese": "为了健康，爸爸每天跑步。",
        "pinyin": "Wèile jiànkāng, bàba měi tiān pǎobù.",
        "german": "Papa joggt jeden Tag, um gesund zu bleiben."
      },
      {
        "chinese": "他为了这次比赛准备了半年。",
        "pinyin": "Tā wèile zhè cì bǐsài zhǔnbèile bàn nián.",
        "german": "Für diesen Wettkampf hat er sich ein halbes Jahr vorbereitet."
      },
      {
        "chinese": "我来中国是为了学习中文。",
        "pinyin": "Wǒ lái Zhōngguó shì wèile xuéxí Zhōngwén.",
        "german": "Ich bin nach China gekommen, um Chinesisch zu lernen."
      }
    ],
    "legacyIds": [
      "g:为了 + Ziel",
      "为了 + Ziel"
    ],
    "formation": "为了 + Zweck，Satz; Subjekt + 为了 + Zweck + Verb",
    "notes": "Die Satzform 为了 (wèile) ……，…… (HSK 3) und 为了……而…… (HSK 4) sind eigene Punkte. 为² (wèi) kann ebenfalls einen Zweck nennen, wird aber vor allem für den Grund eines Gefühls gebraucht (为孩子担心).",
    "explanation": "为了 (wèile) nennt den Zweck oder das Ziel einer Handlung: „um … zu“, „für“, „um … willen“. Die Gruppe steht meist am Satzanfang (为了健康，爸爸每天跑步) oder nach dem Subjekt vor dem Verb (他为了这次比赛准备了半年). Wird der Zweck nachgereicht, sagt man 是为了: 我来中国是为了学习中文. Häufiger Fehler: Für einen Grund nimmt man 因为 (yīnwèi), nicht 为了 – nicht *为了下雨，我没去, sondern 因为下雨，我没去. 为了 spricht man wèile (vierter Ton), nicht wéi.",
    "quiz": {
      "example": 0,
      "answer": "为了",
      "distractors": [
        {
          "text": "因为",
          "reason": "因为 nennt einen Grund („weil er gesund ist“); hier ist Gesundheit aber das Ziel."
        },
        {
          "text": "所以",
          "reason": "所以 leitet die Folge im zweiten Teilsatz ein, nicht den Zweck am Satzanfang."
        },
        {
          "text": "关于",
          "reason": "关于 nennt ein Gesprächsthema, keinen Zweck."
        }
      ],
      "accepted": [
        "为"
      ]
    },
    "related": [
      "g:为²",
      "g:为了……，……",
      "g:为了……而……",
      "g:因为¹"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:为²",
    "pattern": "为²",
    "level": "HSK3",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 174,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出目的、原因",
      "content": "为了、为²"
    },
    "meaning": "wegen, um … willen (Grund oder Zweck)",
    "formation": "为 + Grund/Zweck + Verb (oft Gefühlsverb)",
    "notes": "为¹ (wèi) nennt den Nutznießer („für jemanden etwas tun“: 为大家服务) und gehört zum Überblick „Präpositionen für Bezugsperson und Thema“. Die Satzform ……，为的是 (wèi de shì) …… (HSK 5) nennt den Zweck im Nachsatz.",
    "explanation": "为 (wèi) nennt hier den Grund oder Zweck einer Handlung. Besonders häufig steht es vor Verben des Gefühls: 为这件事生气 „sich über diese Sache ärgern“, 为孩子担心 „sich um das Kind sorgen“, 为你高兴 „sich für dich freuen“. Beim Anstoßen nennt es das Ziel: 为我们的友谊干杯! „auf unsere Freundschaft!“. Die Gruppe steht vor dem Verb. 为 klingt knapper und etwas schriftlicher als 为了 (wèile); einen ganzen Grundsatz leitet dagegen 因为 (yīnwèi) ein. Achtung Ton: in dieser Bedeutung wèi (vierter Ton); wéi mit zweitem Ton ist ein anderes Wort („sein, als“, z. B. in 认为 (rènwéi)).",
    "examples": [
      {
        "chinese": "别为这点儿小事生气了。",
        "pinyin": "Bié wèi zhè diǎnr xiǎo shì shēngqì le.",
        "german": "Ärgere dich doch nicht über so eine Kleinigkeit."
      },
      {
        "chinese": "父母总是为孩子担心。",
        "pinyin": "Fùmǔ zǒngshì wèi háizi dānxīn.",
        "german": "Eltern machen sich immer Sorgen um ihre Kinder."
      },
      {
        "chinese": "为我们的友谊干杯！",
        "pinyin": "Wèi wǒmen de yǒuyì gānbēi!",
        "german": "Auf unsere Freundschaft!"
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "为",
      "distractors": [
        {
          "text": "给",
          "reason": "给 nennt einen Empfänger („jemandem etwas geben/tun“) und kann nicht den Grund einer Sorge angeben."
        },
        {
          "text": "把",
          "reason": "把 verlangt ein Verb, das auf das Objekt einwirkt; 担心 tut das nicht."
        },
        {
          "text": "被",
          "reason": "被 bildet das Passiv („von den Kindern …“), das passt nicht zu 担心."
        }
      ],
      "accepted": [
        "替"
      ]
    },
    "related": [
      "g:为了",
      "g:因为¹",
      "g:为了……，……",
      "g:……，为的是……",
      "g:引出对象@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:把",
    "pattern": "把",
    "level": "HSK3",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 175,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出施事、受事",
      "content": "把、被"
    },
    "meaning": "Objekt vor das Verb holen (was mit etwas geschieht)",
    "formation": "Subjekt + 把 + Objekt + Verb + Ergänzung",
    "explanation": "Die Präposition 把 (bǎ) holt ein Objekt vor das Verb und betont, was mit ihm geschieht: Es wird bewegt, verändert oder erledigt. 请把门关上 „mach bitte die Tür zu“. Regeln: Das Objekt ist bestimmt und bekannt (die Tür, das Handy), nicht „irgendein“. Das Verb steht in der Regel nicht allein – danach folgt meist eine Ergänzung wie ein Ergebnis- oder Richtungskomplement, 在/到 + Ort oder 了: 我把手机忘在家里了. Verneinung und Modalverben stehen vor 把: 他还没把作业做完, 你要把门关上. Verben ohne Einwirkung auf ein Objekt – 是, 有, 喜欢 (xǐhuan), 知道 (zhīdao), 觉得 (juéde) – bilden keinen 把-Satz.",
    "notes": "Die einzelnen 把-Satzmuster sind eigene Punkte (HSK 3–6), z. B. 把 + Objekt + Verb + 在/到 + Ort. Als Zählwort hat 把 eine andere Bedeutung: 一把椅子 „ein Stuhl“, 一把伞 „ein Schirm“ (Gegenstände mit Griff).",
    "examples": [
      {
        "chinese": "请把门关上。",
        "pinyin": "Qǐng bǎ mén guānshang.",
        "german": "Mach bitte die Tür zu."
      },
      {
        "chinese": "我把手机忘在家里了。",
        "pinyin": "Wǒ bǎ shǒujī wàng zài jiā li le.",
        "german": "Ich habe mein Handy zu Hause vergessen."
      },
      {
        "chinese": "他还没把作业做完。",
        "pinyin": "Tā hái méi bǎ zuòyè zuòwán.",
        "german": "Er hat seine Hausaufgaben noch nicht fertig."
      }
    ],
    "legacyIds": [
      "g:把-Konstruktion",
      "把-Konstruktion",
      "把"
    ],
    "related": [
      "g:被",
      "g:主语+把+宾语+动词+在/到+处所",
      "g:主语+把+宾语+动词+结果补语/趋向补语/状态补语",
      "g:主语+把+宾语1+动词（+给）+宾语2",
      "g:主语+把+宾语+动词+了",
      "g:引出施事、受事@HSK4"
    ],
    "quiz": {
      "example": 1,
      "answer": "把",
      "distractors": [
        {
          "text": "被",
          "reason": "被 bildet das Passiv: „ich wurde vom Handy vergessen“ – genau verkehrt herum."
        },
        {
          "text": "跟",
          "reason": "跟 heißt „mit, zusammen mit“ und kann das Objekt nicht vor das Verb holen."
        },
        {
          "text": "对",
          "reason": "对 nennt ein Gegenüber oder Bezugsobjekt, holt aber kein Objekt vor ein Verb mit Ergänzung."
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
    "id": "g:被",
    "pattern": "被",
    "level": "HSK3",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 175,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出施事、受事",
      "content": "把、被"
    },
    "meaning": "Passiv: von … (getan) werden",
    "formation": "Subjekt + 被 (+ Handelnder) + Verb + Ergänzung",
    "explanation": "被 (bèi) bildet das Passiv: Das Subjekt ist der Betroffene, die handelnde Person steht nach 被 – oder fällt weg, wenn sie unbekannt oder unwichtig ist: 我的自行车被偷了 „mein Fahrrad wurde gestohlen“. Das Verb braucht meist eine Ergänzung wie 了 oder ein Ergebniskomplement (吹开了, 吃完了). Verneinung und Modalverben stehen vor 被: 他没被发现. Traditionell beschreibt 被 eher Unangenehmes (gestohlen, kritisiert, nass geworden), heute auch Neutrales (被选为班长 „zum Klassensprecher gewählt“). Viele Sätze mit passivischem Sinn kommen ohne 被 aus: 作业做完了 „die Hausaufgaben sind gemacht“ – man sollte 被 nicht überall einsetzen.",
    "notes": "被 und 把 spiegeln sich: 弟弟把蛋糕吃了 ↔ 蛋糕被弟弟吃了. In der Umgangssprache stehen auch 叫 (jiào) und 让 (ràng) für das Passiv, dann muss aber der Handelnde genannt werden. Die einzelnen 被-Satzmuster sind eigene Punkte.",
    "examples": [
      {
        "chinese": "我的蛋糕被弟弟吃了。",
        "pinyin": "Wǒ de dàngāo bèi dìdi chī le.",
        "german": "Mein Kuchen ist von meinem kleinen Bruder gegessen worden."
      },
      {
        "chinese": "他被老师批评了。",
        "pinyin": "Tā bèi lǎoshī pīpíng le.",
        "german": "Er wurde vom Lehrer getadelt."
      },
      {
        "chinese": "窗户被风吹开了。",
        "pinyin": "Chuānghu bèi fēng chuīkāi le.",
        "german": "Das Fenster wurde vom Wind aufgeweht."
      }
    ],
    "legacyIds": [
      "g:被-Passiv",
      "被-Passiv",
      "被"
    ],
    "related": [
      "g:把",
      "g:主语+被+宾语+动词+其他成分",
      "g:主语+被+动词+其他成分",
      "g:主语+被/叫/让+宾语+给+动词+其他成分",
      "g:引出施事、受事@HSK4"
    ],
    "quiz": {
      "example": 0,
      "answer": "被",
      "distractors": [
        {
          "text": "把",
          "reason": "Mit 把 hätte der Kuchen den Bruder gegessen – die Rollen wären vertauscht."
        },
        {
          "text": "跟",
          "reason": "跟 heißt „mit, zusammen mit“ und macht den Satz nicht passiv."
        },
        {
          "text": "对",
          "reason": "对 nennt ein Gegenüber, aber nicht den Handelnden eines Passivsatzes."
        }
      ],
      "accepted": [
        "让",
        "叫"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:根据",
    "pattern": "根据",
    "level": "HSK3",
    "kind": "word",
    "category": "Präpositionen",
    "syllabus": {
      "no": 176,
      "category": "词类",
      "categoryName": "介词",
      "item": "引出凭借、依据",
      "content": "根据"
    },
    "meaning": "laut, auf Grundlage von (Quelle, Grundlage)",
    "pinyin": "gēnjù",
    "examples": [
      {
        "chinese": "根据网上的消息，明天会下大雪。",
        "pinyin": "Gēnjù wǎng shang de xiāoxi, míngtiān huì xià dà xuě.",
        "german": "Laut Meldungen im Internet soll es morgen stark schneien."
      },
      {
        "chinese": "根据我的经验，这个办法很有用。",
        "pinyin": "Gēnjù wǒ de jīngyàn, zhège bànfǎ hěn yǒuyòng.",
        "german": "Nach meiner Erfahrung ist diese Methode sehr nützlich."
      },
      {
        "chinese": "老师根据学生的水平准备了不同的练习。",
        "pinyin": "Lǎoshī gēnjù xuésheng de shuǐpíng zhǔnbèile bù tóng de liànxí.",
        "german": "Die Lehrerin hat je nach Niveau der Schüler unterschiedliche Übungen vorbereitet."
      }
    ],
    "legacyIds": [
      "根据"
    ],
    "formation": "根据 + Grundlage，Satz; Subjekt + 根据 + Grundlage + Verb",
    "notes": "按照 (ànzhào) aus HSK 4 heißt „gemäß, nach“ und betont, dass man sich an eine Vorgabe hält (按照规定). 据 (jù) aus HSK 5 ist die knappe, schriftliche Form von 根据 (gēnjù), etwa in 据说 (jùshuō) „es heißt“.",
    "explanation": "根据 (gēnjù) nennt die Grundlage, auf die sich eine Aussage oder Entscheidung stützt – einen Bericht, Regeln, Erfahrung oder die Lage: 根据调查 „laut einer Umfrage“, 根据我的经验 „nach meiner Erfahrung“. Die Gruppe steht am Satzanfang (meist mit Komma) oder nach dem Subjekt vor dem Verb: 老师根据学生的水平准备练习. Der Ton ist neutral bis etwas formell; in Nachrichten und Texten ist 根据 sehr häufig. 根据 ist auch ein Nomen „Grundlage, Beleg“: 你这么说有什么根据？ „Worauf stützt du das?“.",
    "quiz": {
      "example": 0,
      "answer": "根据",
      "distractors": [
        {
          "text": "关于",
          "reason": "关于 nennt ein Thema („über die Meldungen“), nicht die Quelle einer Aussage."
        },
        {
          "text": "为了",
          "reason": "为了 nennt einen Zweck; die Meldungen sind hier aber die Grundlage."
        },
        {
          "text": "从",
          "reason": "从 bräuchte 看 oder 来看 dahinter (从网上的消息来看); allein nennt es nur einen Ausgangspunkt."
        }
      ],
      "accepted": [
        "据"
      ]
    },
    "related": [
      "g:按照",
      "g:据",
      "g:依据",
      "g:凭",
      "g:引出凭借、依据@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:或",
    "pattern": "或",
    "level": "HSK3",
    "kind": "word",
    "category": "Konjunktionen",
    "syllabus": {
      "no": 177,
      "category": "词类",
      "categoryName": "连词",
      "item": "连接词或者短语",
      "content": "或、或者"
    },
    "meaning": "oder (kurz, eher schriftlich)",
    "formation": "A + 或 + B",
    "notes": "Schriftliche Paarformen sind eigene Punkte: 或是 (huòshì) ……，或是…… (HSK 5) und 或A或B (HSK 7–9). Steht 或者 (huòzhě) in einer Ja-Nein-Frage (你明天或者后天有空吗？), fragt man, ob überhaupt einer der beiden Tage geht.",
    "explanation": "或 (huò) verbindet wie 或者 (huòzhě) zwei oder mehr Möglichkeiten in Aussage- und Aufforderungssätzen: 星期五或星期六 „Freitag oder Samstag“. Es ist kürzer und klingt schriftlicher – typisch für Formulare, Hinweise, Anleitungen und Nachrichten. In der gesprochenen Sprache sagt man meist 或者. 或 verbindet vor allem Wörter und kurze Wortgruppen. In einer Auswahlfrage („A oder B?“) steht weder 或 noch 或者, sondern 还是 (háishi): 你喝茶还是喝咖啡？",
    "examples": [
      {
        "chinese": "请在星期五或星期六交作业。",
        "pinyin": "Qǐng zài xīngqīwǔ huò xīngqīliù jiāo zuòyè.",
        "german": "Bitte geben Sie die Hausaufgaben am Freitag oder Samstag ab."
      },
      {
        "chinese": "这个问题你可以问老师或同学。",
        "pinyin": "Zhège wèntí nǐ kěyǐ wèn lǎoshī huò tóngxué.",
        "german": "Mit dieser Frage kannst du dich an die Lehrerin oder an Mitschüler wenden."
      },
      {
        "chinese": "每天走路或骑车半个小时，对身体很好。",
        "pinyin": "Měi tiān zǒulù huò qí chē bàn ge xiǎoshí, duì shēntǐ hěn hǎo.",
        "german": "Jeden Tag eine halbe Stunde zu gehen oder Rad zu fahren, ist gut für die Gesundheit."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "或",
      "distractors": [
        {
          "text": "还是",
          "reason": "还是 steht in Auswahlfragen; dieser Satz ist eine Aufforderung, keine Frage."
        },
        {
          "text": "和",
          "reason": "和 hieße „Freitag und Samstag“ – gemeint ist aber einer der beiden Tage."
        },
        {
          "text": "也",
          "reason": "也 ist ein Adverb vor dem Verb und kann keine zwei Nomen verbinden."
        }
      ],
      "accepted": [
        "或者"
      ]
    },
    "related": [
      "g:或者",
      "g:或者……，或者……",
      "g:或是……，或是……",
      "g:或A或B"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:或者",
    "pattern": "或者",
    "level": "HSK3",
    "kind": "word",
    "category": "Konjunktionen",
    "syllabus": {
      "no": 177,
      "category": "词类",
      "categoryName": "连词",
      "item": "连接词或者短语",
      "content": "或、或者"
    },
    "meaning": "oder (Möglichkeiten in Aussagesätzen)",
    "pinyin": "huòzhě",
    "examples": [
      {
        "chinese": "我们星期六或者星期天去看他吧。",
        "pinyin": "Wǒmen xīngqīliù huòzhě xīngqītiān qù kàn tā ba.",
        "german": "Lass uns ihn am Samstag oder Sonntag besuchen."
      },
      {
        "chinese": "你可以坐地铁或者打车去机场。",
        "pinyin": "Nǐ kěyǐ zuò dìtiě huòzhě dǎchē qù jīchǎng.",
        "german": "Du kannst mit der U-Bahn oder mit dem Taxi zum Flughafen fahren."
      },
      {
        "chinese": "晚饭我想吃面条或者饺子。",
        "pinyin": "Wǎnfàn wǒ xiǎng chī miàntiáo huòzhě jiǎozi.",
        "german": "Zum Abendessen hätte ich gern Nudeln oder Jiaozi."
      }
    ],
    "legacyIds": [
      "或者"
    ],
    "formation": "A + 或者 + B",
    "notes": "Die Paarform 或者 (huòzhě) ……，或者…… „entweder … oder …“ ist ein eigener Punkt (HSK 3). Gegenüber 和 (hé) „und“ gilt: 和 meint beides zusammen, 或者 nur eins von beiden.",
    "explanation": "或者 (huòzhě) verbindet Wörter, Wortgruppen oder Teilsätze, die zur Wahl stehen: 星期六或者星期天 „Samstag oder Sonntag“. Es steht in Aussage- und Aufforderungssätzen und ist die übliche gesprochene Form; schriftlicher und kürzer ist 或 (huò). Fragt man selbst nach einer Wahl („A oder B?“), nimmt man 还是 (háishi): 你去还是我去？ Auch nach 不知道 (bù zhīdào) oder 不管 (bùguǎn) steht 还是: 我不知道他去还是不去. In einer Ja-Nein-Frage mit 吗 ist 或者 dagegen möglich: 你明天或者后天有空吗？ „Hast du morgen oder übermorgen Zeit?“.",
    "quiz": {
      "example": 1,
      "answer": "或者",
      "distractors": [
        {
          "text": "还是",
          "reason": "还是 steht in Auswahlfragen; hier wird eine Möglichkeit genannt, nicht gefragt."
        },
        {
          "text": "和",
          "reason": "和 hieße „U-Bahn und Taxi“ – man fährt aber mit einem von beiden."
        },
        {
          "text": "而且",
          "reason": "而且 steigert („und außerdem“) und verbindet keine Alternativen."
        }
      ],
      "accepted": [
        "或"
      ]
    },
    "related": [
      "g:或",
      "g:或者……，或者……",
      "g:连接分句或者句子@HSK2"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:连接分句或句子@HSK3",
    "pattern": "连接分句或句子",
    "level": "HSK3",
    "kind": "overview",
    "category": "Konjunktionen",
    "syllabus": {
      "no": 178,
      "category": "词类",
      "categoryName": "连词",
      "item": "连接分句或句子",
      "content": "只有、只要、不但、而且、如果、可¹、可是、然后"
    },
    "words": [
      "只有",
      "只要",
      "不但",
      "而且",
      "如果",
      "可¹",
      "可是",
      "然后"
    ],
    "meaning": "Konjunktionen für Satzverbindungen: nur wenn, solange, nicht nur … sondern auch, falls, aber, danach",
    "notes": "Die Satzformen 只有 (zhǐyǒu) ……，才……, 只要 (zhǐyào) ……，就……, 不但 (búdàn) ……，而且 (érqiě) …… und 如果 (rúguǒ) ……，就…… sind eigene Punkte (HSK 3). 只有 und 只要 werden oft verwechselt: 只有 nennt die einzige, 只要 eine genügende Bedingung.",
    "explanation": "Diese Konjunktionen verbinden Teilsätze oder Sätze. Viele stehen im ersten Teilsatz und verlangen ein passendes Adverb im zweiten.\n只有 (zhǐyǒu) – „nur wenn“: einzige Bedingung, im Folgesatz 才 (cái): 只有……，才…….\n只要 (zhǐyào) – „solange, sofern nur“: ausreichende Bedingung, im Folgesatz 就 (jiù): 只要……，就…….\n不但 (búdàn) – „nicht nur“: im zweiten Teil folgt 而且 (érqiě) oder 也.\n而且 (érqiě) – „und außerdem, sondern auch“: steigert das Vorherige; auch allein am Satzanfang.\n如果 (rúguǒ) – „wenn, falls“: Bedingung, oft mit 就 im Folgesatz und gern mit 的话 (dehuà) am Ende.\n可¹ (kě) – „aber“: kurze, gesprochene Form von 可是 (kěshì), steht am Anfang des zweiten Teils.\n可是 (kěshì) – „aber“: Gegensatz, etwas weicher als 但是 (dànshì).\n然后 (ránhòu) – „danach, dann“: nennt den nächsten Schritt, oft nach 先 (xiān) „zuerst“.",
    "examples": [
      {
        "chinese": "只有多练习，才能说好汉语。",
        "pinyin": "Zhǐyǒu duō liànxí, cái néng shuōhǎo Hànyǔ.",
        "german": "Nur wenn man viel übt, kann man gut Chinesisch sprechen."
      },
      {
        "chinese": "只要你努力，就一定能学好。",
        "pinyin": "Zhǐyào nǐ nǔlì, jiù yídìng néng xuéhǎo.",
        "german": "Solange du dich anstrengst, lernst du es bestimmt gut."
      },
      {
        "chinese": "这家饭馆的菜不但好吃，而且很便宜。",
        "pinyin": "Zhè jiā fànguǎn de cài búdàn hǎochī, érqiě hěn piányi.",
        "german": "Das Essen in diesem Restaurant ist nicht nur lecker, sondern auch sehr günstig."
      },
      {
        "chinese": "如果明天下雨，我们就不去了。",
        "pinyin": "Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù le.",
        "german": "Falls es morgen regnet, gehen wir nicht."
      },
      {
        "chinese": "他说要来，可到现在还没来。",
        "pinyin": "Tā shuō yào lái, kě dào xiànzài hái méi lái.",
        "german": "Er hat gesagt, er kommt, aber bis jetzt ist er nicht gekommen."
      },
      {
        "chinese": "我们先吃饭，然后去看电影。",
        "pinyin": "Wǒmen xiān chīfàn, ránhòu qù kàn diànyǐng.",
        "german": "Wir essen zuerst und gehen danach ins Kino."
      }
    ],
    "related": [
      "g:只有……，才……",
      "g:只要……，就……",
      "g:不但……，而且……",
      "g:如果……，就……",
      "g:连接分句或者句子@HSK2",
      "g:连接分句或句子@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:的话",
    "pattern": "的话",
    "level": "HSK3",
    "kind": "word",
    "category": "Partikeln",
    "syllabus": {
      "no": 179,
      "category": "词类",
      "categoryName": "助词",
      "item": "其他助词",
      "content": "的话"
    },
    "meaning": "falls, wenn (am Ende des Bedingungssatzes)",
    "pinyin": "…de huà",
    "examples": [
      {
        "chinese": "你有时间的话，来我家玩儿吧。",
        "pinyin": "Nǐ yǒu shíjiān dehuà, lái wǒ jiā wánr ba.",
        "german": "Wenn du Zeit hast, komm doch bei mir vorbei."
      },
      {
        "chinese": "如果明天天气好的话，我们去爬山。",
        "pinyin": "Rúguǒ míngtiān tiānqì hǎo dehuà, wǒmen qù pá shān.",
        "german": "Falls morgen schönes Wetter ist, gehen wir wandern."
      },
      {
        "chinese": "不舒服的话，今天就别来上课了。",
        "pinyin": "Bù shūfu dehuà, jīntiān jiù bié lái shàngkè le.",
        "german": "Wenn es dir nicht gut geht, komm heute lieber nicht zum Unterricht."
      }
    ],
    "legacyIds": [
      "g:…的话",
      "…的话"
    ],
    "formation": "Bedingung + 的话，Folge; 如果/要是 + Bedingung + 的话，Folge",
    "notes": "Nicht verwechseln mit dem Nomen 话 „Worte“ nach 的: 听妈妈的话 „auf Mama hören“ (wörtlich „Mamas Worte hören“) ist keine Bedingung.",
    "explanation": "Die Partikel 的话 (dehuà) steht am Ende eines Teilsatzes und macht ihn zur Bedingung: 你有时间的话 „falls du Zeit hast“. Sie kann allein stehen oder zusammen mit 如果 (rúguǒ) bzw. 要是 (yàoshi) am Anfang: 如果……的话. In der gesprochenen Sprache ist sie sehr häufig und markiert die Bedingung deutlich. Im Folgesatz steht oft 就 (jiù) – diese Satzform ist ein eigener Punkt. 的话 kann auch an ein einzelnes Wort treten: 明天的话，我有空 „was morgen betrifft – da habe ich Zeit“.",
    "quiz": {
      "example": 0,
      "answer": "的话",
      "distractors": [
        {
          "text": "如果",
          "reason": "如果 steht am Anfang des Bedingungssatzes, nicht an seinem Ende."
        },
        {
          "text": "吗",
          "reason": "吗 macht einen Satz zur Ja-Nein-Frage, keine Bedingung."
        },
        {
          "text": "所以",
          "reason": "所以 leitet eine Folge ein und steht am Anfang des zweiten Teilsatzes."
        }
      ]
    },
    "related": [
      "g:……的话，就……",
      "g:如果……，就……",
      "g:要是……，就……",
      "g:其他助词@HSK4"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:其他结构类型：同位短语",
    "pattern": "其他结构类型：同位短语",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 180,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "同位短语"
    },
    "meaning": "Apposition: zwei Bezeichnungen für dieselbe Person oder Sache („wir alle“, „die Hauptstadt Peking“)",
    "formation": "Pronomen/Bezeichnung + 大家/自己/Zahl + Zählwort/Name (ohne 的)",
    "explanation": "Ein 同位短语 (tóngwèi duǎnyǔ) besteht aus zwei Gliedern, die dieselbe Person oder Sache bezeichnen und ohne 的 direkt nebeneinanderstehen. Häufige Typen: Pronomen + 大家 (dàjiā): 我们大家 (wǒmen dàjiā) „wir alle“; Pronomen + 自己 (zìjǐ): 你自己 (nǐ zìjǐ) „du selbst“; Pronomen + Zahl + Zählwort: 他们两个 (tāmen liǎng ge) „die beiden“; Bezeichnung + Name: 首都北京 (shǒudū Běijīng) „die Hauptstadt Peking“, 我朋友小王 (wǒ péngyou Xiǎo Wáng) „mein Freund Xiao Wang“. Die ganze Gruppe steht wie ein einziges Nomen als Subjekt oder Objekt. Ein 的 dazwischen macht daraus ein Attribut mit anderer Bedeutung: 朋友小王 (péngyou Xiǎo Wáng) ist Xiao Wang selbst, 小王的朋友 (Xiǎo Wáng de péngyou) dagegen ein Freund von Xiao Wang.",
    "examples": [
      {
        "chinese": "我们大家都很喜欢这位老师。",
        "pinyin": "Wǒmen dàjiā dōu hěn xǐhuan zhè wèi lǎoshī.",
        "german": "Wir alle mögen diesen Lehrer sehr."
      },
      {
        "chinese": "中国的首都北京有很多好玩儿的地方。",
        "pinyin": "Zhōngguó de shǒudū Běijīng yǒu hěn duō hǎowánr de dìfang.",
        "german": "In der chinesischen Hauptstadt Peking gibt es viele spannende Orte."
      },
      {
        "chinese": "这件事你自己决定吧。",
        "pinyin": "Zhè jiàn shì nǐ zìjǐ juédìng ba.",
        "german": "Das entscheidest du am besten selbst."
      },
      {
        "chinese": "他们两个是我最好的朋友。",
        "pinyin": "Tāmen liǎng ge shì wǒ zuì hǎo de péngyou.",
        "german": "Die beiden sind meine besten Freunde."
      }
    ],
    "related": [
      "g:基本结构类型：偏正短语",
      "g:自己",
      "g:其他结构类型：数量短语",
      "g:数量重叠：数词+量词+数词+量词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动补短语2",
    "pattern": "动补短语2",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 181,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "动补短语2"
    },
    "meaning": "Verb + Komplement der Möglichkeit oder des Grades („verstehen können“, „äußerst froh“)",
    "formation": "Verb + 得/不 + Ergebnis/Richtung (Möglichkeit); Adjektiv + 得很/极了 (Grad)",
    "notes": "Die Gruppe 动补短语1 (HSK 2) umfasst Ergebnis-, Richtungs- und Zustandskomplemente: 做完 (zuòwán), 走进来 (zǒu jìnlai), 说得很好 (shuō de hěn hǎo). Einzelheiten zu den Komplementen stehen bei den Punkten zum Möglichkeitskomplement und zum Gradkomplement.",
    "explanation": "Auf Stufe 2 standen Verb-Komplement-Gruppen mit Ergebnis, Richtung oder Art und Weise, z. B. 听懂 (tīngdǒng) „verstehen“. Auf Stufe 3 kommen zwei neue Typen hinzu. (1) Möglichkeit: Zwischen Verb und Ergebnis- oder Richtungskomplement tritt 得 (de) oder 不 (bu): 听得懂 (tīng de dǒng) „verstehen können“, 看不清楚 (kàn bu qīngchu) „nicht deutlich sehen können“, 吃得完 (chī de wán) „aufessen können“, 回不来 (huí bu lái) „nicht zurückkommen können“. (2) Grad: Ein Adjektiv oder Gefühlsverb erhält 得很 (de hěn) oder 极了 (jí le): 好得很 (hǎo de hěn) „sehr gut“, 高兴极了 (gāoxìng jí le) „überglücklich“. Ein Objekt steht hinter der ganzen Gruppe oder wird als Thema vorangestellt: 这个字我看不清楚. Typischer Fehler: das 不 vor das Verb stellen (falsch: *不听懂 statt 听不懂 (tīng bu dǒng)).",
    "examples": [
      {
        "chinese": "老师的话我都听得懂。",
        "pinyin": "Lǎoshī de huà wǒ dōu tīng de dǒng.",
        "german": "Ich verstehe alles, was der Lehrer sagt."
      },
      {
        "chinese": "字太小了，我看不清楚。",
        "pinyin": "Zì tài xiǎo le, wǒ kàn bu qīngchu.",
        "german": "Die Schrift ist zu klein, ich kann sie nicht richtig lesen."
      },
      {
        "chinese": "这么多菜，我们两个人吃得完吗？",
        "pinyin": "Zhème duō cài, wǒmen liǎng ge rén chī de wán ma?",
        "german": "So viel Essen – schaffen wir zwei das überhaupt?"
      },
      {
        "chinese": "听到这个消息，他高兴极了。",
        "pinyin": "Tīngdào zhège xiāoxi, tā gāoxìng jí le.",
        "german": "Als er die Nachricht hörte, freute er sich riesig."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "得",
      "distractors": [
        {
          "text": "的",
          "reason": "的 verbindet ein Attribut mit einem Nomen; zwischen Verb und Komplement steht 得."
        },
        {
          "text": "地",
          "reason": "地 steht zwischen Adverbial und Verb (认真地听), nicht zwischen Verb und Komplement."
        },
        {
          "text": "不",
          "reason": "听不懂 hieße „nicht verstehen können“ – das Gegenteil der Übersetzung."
        }
      ]
    },
    "related": [
      "g:动补短语1",
      "g:动词+得/不+动词/形容词",
      "g:形容词+得很",
      "g:形容词/动词+极了/坏了",
      "g:动词+得+形容词性短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:数量重叠：数词+量词+数词+量词",
    "pattern": "数量重叠：数词+量词+数词+量词",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Wortgruppen",
    "syllabus": {
      "no": 182,
      "category": "短语",
      "categoryName": "结构类型",
      "item": "其他结构类型",
      "content": "数量重叠：数词+量词+数词+量词"
    },
    "meaning": "einer nach dem anderen, Stück für Stück (verdoppelte Mengenangabe)",
    "formation": "一 + Zählwort + 一 + Zählwort (+ 地) + Verb",
    "notes": "Kurzform ohne das zweite 一: 一个个 (yí gègè), 一件件 – gleiche Bedeutung. Die Verdopplung nur des Zählworts bedeutet dagegen „jeder einzelne“: 他们个个都很高 (tāmen gègè dōu hěn gāo) „sie sind alle groß“.",
    "explanation": "Verdoppelt man eine Mengenangabe aus 一 und Zählwort, entsteht 一个一个 (yí ge yí ge), 一件一件 (yí jiàn yí jiàn), 一天一天 (yì tiān yì tiān) usw. Vor dem Verb – oft mit 地 (de) – beschreibt die Form, dass etwas der Reihe nach, Stück für Stück geschieht: 一个一个地进来 „einer nach dem anderen hereinkommen“, 一步一步地学 „Schritt für Schritt lernen“. Mit Zeitwörtern wie 天 oder 年 drückt sie eine allmähliche Veränderung aus: 一天一天地长大 „Tag für Tag größer werden“. Vor einem Nomen (mit 的) betont sie die Menge einzelner Dinge: 一张一张的照片 „Foto um Foto“. Das Zählwort muss zum Nomen passen: Kleidung wird 一件一件, Bücher werden 一本一本 gezählt.",
    "examples": [
      {
        "chinese": "请大家一个一个地进来。",
        "pinyin": "Qǐng dàjiā yí ge yí ge de jìnlai.",
        "german": "Bitte kommt einzeln nacheinander herein."
      },
      {
        "chinese": "他把衣服一件一件地放进了箱子里。",
        "pinyin": "Tā bǎ yīfu yí jiàn yí jiàn de fàngjìnle xiāngzi li.",
        "german": "Er legte die Kleidung Stück für Stück in den Koffer."
      },
      {
        "chinese": "孩子一天一天地长大了。",
        "pinyin": "Háizi yì tiān yì tiān de zhǎngdà le.",
        "german": "Das Kind ist Tag für Tag größer geworden."
      },
      {
        "chinese": "学中文要一步一步地来。",
        "pinyin": "Xué Zhōngwén yào yí bù yí bù de lái.",
        "german": "Chinesisch lernt man Schritt für Schritt."
      }
    ],
    "related": [
      "g:其他结构类型：数量短语",
      "g:名量词@HSK3",
      "g:地",
      "g:其他结构类型：同位短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不A不B",
    "pattern": "不A不B",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 183,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "四字格",
      "content": "不A不B"
    },
    "meaning": "weder zu … noch zu … – genau richtig (Gegensatzpaar)",
    "formation": "不 + Adjektiv A + 不 + Gegenteil B",
    "notes": "Auf Verhalten bezogen kann die Form Gleichgültigkeit ausdrücken: 他对我不冷不热 (tā duì wǒ bù lěng bú rè) „er ist mir gegenüber weder freundlich noch unfreundlich“. Auf HSK 7–9 folgt 不A不B mit sinnverwandten Gliedern (不慌不忙 (bù huāng bù máng) „ganz gelassen“, 不知不觉 (bù zhī bù jué) „unmerklich“).",
    "explanation": "In dieser festen Viererform stehen A und B für zwei einsilbige Adjektive mit gegensätzlicher Bedeutung. 不A不B verneint beide Extreme und beschreibt damit meist die angenehme Mitte: 不大不小 (bú dà bù xiǎo) „weder zu groß noch zu klein“, 不冷不热 (bù lěng bú rè) „weder kalt noch heiß“, 不多不少 (bù duō bù shǎo) „genau richtig viel“, 不早不晚 (bù zǎo bù wǎn) „genau zur rechten Zeit“. Oft folgt eine Bewertung wie 正好 (zhènghǎo) oder 正合适 (zhèng héshì). Die Form steht als Prädikat, als Attribut mit 的 oder als Komplement nach 得 (来得不早不晚). Auf den Ton achten: 不 wird vor einem vierten Ton zu bú (bú dà, bú rè). Nicht jedes Gegensatzpaar ist üblich; man lernt die festen Verbindungen am besten als Ganzes.",
    "examples": [
      {
        "chinese": "这双鞋不大不小，正合适。",
        "pinyin": "Zhè shuāng xié bú dà bù xiǎo, zhèng héshì.",
        "german": "Die Schuhe sind weder zu groß noch zu klein, sie passen genau."
      },
      {
        "chinese": "今天不冷不热，我们去公园走走吧。",
        "pinyin": "Jīntiān bù lěng bú rè, wǒmen qù gōngyuán zǒuzou ba.",
        "german": "Heute ist es weder kalt noch heiß – lass uns im Park spazieren gehen."
      },
      {
        "chinese": "他来得不早不晚，正好八点。",
        "pinyin": "Tā lái de bù zǎo bù wǎn, zhènghǎo bā diǎn.",
        "german": "Er kam weder zu früh noch zu spät, genau um acht."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "热",
      "distractors": [
        {
          "text": "冷",
          "reason": "Zweimal 冷 ergibt keine Form; B muss das Gegenteil von A sein."
        },
        {
          "text": "好",
          "reason": "好 ist kein Gegenteil von 冷; die Form verlangt ein Gegensatzpaar."
        },
        {
          "text": "大",
          "reason": "大 betrifft die Größe, nicht die Temperatur; das Gegenstück zu 冷 ist 热."
        }
      ]
    },
    "related": [
      "g:不A不B（四字格）",
      "g:一A一B",
      "g:无A无B",
      "g:有A有B",
      "g:没A没B"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不一会儿",
    "pattern": "不一会儿",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 184,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "不一会儿"
    },
    "meaning": "kurz darauf, nach kurzer Zeit (in Erzählungen)",
    "formation": "Ereignis A，不一会儿 (+ Subjekt) + 就 + Ereignis B (+ 了)",
    "notes": "Ähnlich, etwas schriftlicher: 不久 (bùjiǔ) „bald darauf“, das auch längere Zeiträume meinen kann. Doppelt gesetzt heißt 一会儿 (yíhuìr) dagegen „mal …, mal …“ (eigener Punkt, HSK 3).",
    "explanation": "不一会儿 (bù yíhuìr) bedeutet „nach kurzer Zeit, kurz darauf“. Es misst die kurze Spanne zwischen einem zuvor genannten Ereignis und dem nächsten und steht deshalb am Anfang des zweiten Satzteils, vor oder hinter dem Subjekt. Meist folgt 就 (jiù), am Satzende oft 了: 他躺下不一会儿就睡着了 „er legte sich hin und war kurz darauf eingeschlafen“. Typisch ist es für Erzählungen über Vergangenes, gesprochen wie geschrieben. Trotz 不 ist es keine Verneinung: Gemeint ist „es dauerte nicht lange, bis …“. Für die Zukunft („gleich, in einem Moment“) nimmt man eher 一会儿 (yíhuìr): 我一会儿就来 „ich komme gleich“.",
    "examples": [
      {
        "chinese": "我给他打了电话，不一会儿他就来了。",
        "pinyin": "Wǒ gěi tā dǎle diànhuà, bù yíhuìr tā jiù lái le.",
        "german": "Ich rief ihn an, und kurz darauf war er da."
      },
      {
        "chinese": "天突然黑了，不一会儿就下雨了。",
        "pinyin": "Tiān tūrán hēi le, bù yíhuìr jiù xià yǔ le.",
        "german": "Plötzlich wurde es dunkel, und bald darauf fing es an zu regnen."
      },
      {
        "chinese": "孩子们太饿了，不一会儿就把饭吃完了。",
        "pinyin": "Háizimen tài è le, bù yíhuìr jiù bǎ fàn chīwán le.",
        "german": "Die Kinder waren so hungrig, dass sie im Nu alles aufgegessen hatten."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "不一会儿",
      "distractors": [
        {
          "text": "一下儿",
          "reason": "一下儿 steht hinter dem Verb („mal kurz“) und nennt keine Zeitspanne bis zum nächsten Ereignis."
        },
        {
          "text": "一直",
          "reason": "一直 heißt „ununterbrochen“ und passt nicht zu einem einmaligen Ankommen mit 就."
        },
        {
          "text": "已经",
          "reason": "已经 („schon“) steht direkt vor dem Verb und kann nicht die kurze Zeit nach dem Anruf ausdrücken."
        }
      ],
      "accepted": [
        "一会儿"
      ]
    },
    "related": [
      "g:一会儿……，一会儿……",
      "g:就¹"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:看来",
    "pattern": "看来",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 185,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "看来"
    },
    "meaning": "anscheinend, wie es aussieht (Schluss aus den Umständen)",
    "pinyin": "kànlái",
    "examples": [
      {
        "chinese": "他还没到，看来他不会来了。",
        "pinyin": "Tā hái méi dào, kànlái tā bú huì lái le.",
        "german": "Er ist noch nicht da – anscheinend kommt er nicht mehr."
      },
      {
        "chinese": "外面的人都打着伞，看来下雨了。",
        "pinyin": "Wàimiàn de rén dōu dǎzhe sǎn, kànlái xià yǔ le.",
        "german": "Draußen haben alle einen Schirm aufgespannt – es regnet wohl."
      },
      {
        "chinese": "这家饭店每天都有很多人，看来菜很不错。",
        "pinyin": "Zhè jiā fàndiàn měi tiān dōu yǒu hěn duō rén, kànlái cài hěn búcuò.",
        "german": "In diesem Restaurant ist jeden Tag viel los – das Essen scheint gut zu sein."
      }
    ],
    "legacyIds": [
      "看来"
    ],
    "formation": "Anhaltspunkt，看来 + Schlussfolgerung",
    "notes": "Mit 在 und einer Person davor bedeutet 看来 (kànlái) „nach Meinung von …“: 在我看来 (zài wǒ kànlái) „meiner Meinung nach“ (eigener Punkt). Umgangssprachlich gleichbedeutend ist 看样子 (kàn yàngzi).",
    "explanation": "看来 (kànlái) leitet eine Vermutung ein, die der Sprecher aus dem zieht, was er sieht, hört oder weiß: „anscheinend, offenbar, wie es aussieht“. Oft nennt der erste Satzteil den Anhaltspunkt, der zweite mit 看来 die Folgerung: 他还没到，看来他不会来了. 看来 steht meist am Satzanfang (oft mit Komma) oder direkt nach dem Subjekt und ist im Gespräch wie im Text üblich. Es drückt keine Gewissheit aus, sondern eine begründete Annahme; am Satzende steht oft 了, wenn sich eine neue Lage ergibt. Für das bloße Aussehen einer Person oder Sache nimmt man meist 看起来 (kàn qǐlai) oder 看上去 (kàn shàngqu).",
    "quiz": {
      "example": 0,
      "answer": "看来",
      "distractors": [
        {
          "text": "看见",
          "reason": "看见 heißt „erblicken“ und braucht ein Objekt; eine Schlussfolgerung leitet es nicht ein."
        },
        {
          "text": "看看",
          "reason": "看看 heißt „mal schauen“ und drückt keine Vermutung aus."
        },
        {
          "text": "好看",
          "reason": "好看 („schön“) ist ein Adjektiv und kann keine Folgerung einleiten."
        }
      ],
      "accepted": [
        "看样子",
        "看起来"
      ]
    },
    "related": [
      "g:在……看来",
      "g:看起来",
      "g:看上去",
      "g:看样子"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:在……看来",
    "pattern": "在……看来",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 186,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "在……看来"
    },
    "meaning": "nach Ansicht von …, aus der Sicht von … (Meinung, Urteil)",
    "pinyin": "zài…kànlái",
    "examples": [
      {
        "chinese": "在我看来，这不是一个好主意。",
        "pinyin": "Zài wǒ kànlái, zhè bú shì yí ge hǎo zhǔyi.",
        "german": "Meiner Meinung nach ist das keine gute Idee."
      },
      {
        "chinese": "在妈妈看来，健康比钱更重要。",
        "pinyin": "Zài māma kànlái, jiànkāng bǐ qián gèng zhòngyào.",
        "german": "Nach Mamas Ansicht ist Gesundheit wichtiger als Geld."
      },
      {
        "chinese": "在很多人看来，学中文很难。",
        "pinyin": "Zài hěn duō rén kànlái, xué Zhōngwén hěn nán.",
        "german": "Viele Leute halten Chinesischlernen für schwer."
      }
    ],
    "legacyIds": [
      "g:在…看来",
      "在…看来"
    ],
    "formation": "在 + Person/Gruppe + 看来，Urteil",
    "explanation": "Die Wendung nennt die Person, deren Meinung oder Urteil der Satz wiedergibt: 在我看来 (zài wǒ kànlái) „meiner Meinung nach“, 在老师看来 (zài lǎoshī kànlái) „nach Ansicht des Lehrers“. Zwischen 在 und 看来 (kànlái) steht eine Person oder Gruppe (auch 很多人 oder 年轻人 (niánqīngrén)), kein Gegenstand. Die Wendung steht am Satzanfang, mit Komma vor der eigentlichen Aussage. Sie klingt etwas sachlicher als 我觉得 (wǒ juéde) und passt in Gespräche wie in geschriebene Texte; oft deutet sie an, dass andere es anders sehen könnten. Nicht verwechseln mit 对……来说: Das nennt, für wen etwas gilt oder wen es betrifft (对我来说 (duì wǒ lái shuō) „für mich“), nicht wessen Meinung.",
    "quiz": {
      "example": 1,
      "answer": "看来",
      "distractors": [
        {
          "text": "来说",
          "reason": "来说 bildet mit 对 die Wendung 对……来说; nach 在 + Person steht 看来."
        },
        {
          "text": "看见",
          "reason": "看见 heißt „erblicken“; „nach Ansicht von“ drückt es nicht aus."
        },
        {
          "text": "看起来",
          "reason": "看起来 beschreibt einen Eindruck vom Aussehen; die Meinung einer Person nennt 在……看来."
        }
      ]
    },
    "related": [
      "g:看来",
      "g:对……来说",
      "g:一般来说"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:越来越",
    "pattern": "越来越",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 187,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "越来越"
    },
    "meaning": "immer …er: fortlaufende Zunahme („immer kälter“)",
    "formation": "Subjekt + 越来越 + Adjektiv / Gefühlsverb (+ 了)",
    "explanation": "越来越 (yuè lái yuè) beschreibt, dass ein Zustand mit der Zeit stetig zunimmt: „immer kälter, immer besser, immer mehr“. Danach steht ein Adjektiv, ein Gefühls- oder Wunschverb wie 喜欢 (xǐhuan) oder 想, eine Wendung wie 有意思 (yǒu yìsi) oder 会 + Verb; gewöhnliche Handlungsverben stehen nicht direkt dahinter (falsch: *越来越吃). Am Satzende steht oft 了, weil sich eine Lage verändert hat. Typischer Fehler: Gradadverbien wie 很 oder 非常 (fēicháng) passen nicht hinter 越来越 (falsch: *越来越很冷), denn die Steigerung ist schon ausgedrückt. Mit 得 beschreibt die Form, wie sich eine Fähigkeit entwickelt: 他中文说得越来越好 „er spricht immer besser Chinesisch“.",
    "notes": "越……越…… mit zwei verschiedenen Gliedern heißt „je …, desto …“ (eigener Punkt). 更 (gèng) vergleicht nur zwei Zustände („noch kälter“), 越来越 (yuè lái yuè) beschreibt eine fortlaufende Entwicklung.",
    "examples": [
      {
        "chinese": "天气越来越冷了。",
        "pinyin": "Tiānqì yuè lái yuè lěng le.",
        "german": "Das Wetter wird immer kälter."
      },
      {
        "chinese": "他的中文说得越来越好。",
        "pinyin": "Tā de Zhōngwén shuō de yuè lái yuè hǎo.",
        "german": "Er spricht immer besser Chinesisch."
      },
      {
        "chinese": "我越来越喜欢这个城市了。",
        "pinyin": "Wǒ yuè lái yuè xǐhuan zhège chéngshì le.",
        "german": "Diese Stadt gefällt mir immer besser."
      },
      {
        "chinese": "来这儿旅游的人越来越多。",
        "pinyin": "Lái zhèr lǚyóu de rén yuè lái yuè duō.",
        "german": "Immer mehr Menschen machen hier Urlaub."
      }
    ],
    "legacyIds": [
      "g:越来越...",
      "越来越..."
    ],
    "related": [
      "g:越……越……",
      "g:A比B+更/还+形容词"
    ],
    "quiz": {
      "example": 0,
      "answer": "越来越",
      "distractors": [
        {
          "text": "更",
          "reason": "更 vergleicht zwei Zustände („noch kälter“); die fortlaufende Zunahme „immer kälter“ drückt 越来越 aus."
        },
        {
          "text": "一直",
          "reason": "一直 heißt „ununterbrochen“ und steht nicht vor einer Zustandsänderung mit 了."
        },
        {
          "text": "越",
          "reason": "Ein einzelnes 越 braucht ein zweites 越 mit eigenem Glied (越……越……)."
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
    "id": "g:看起来",
    "pattern": "看起来",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 188,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "看起来"
    },
    "meaning": "aussehen, wirken (Eindruck beim Ansehen)",
    "pinyin": "kàn qǐlái",
    "examples": [
      {
        "chinese": "这个菜看起来很好吃。",
        "pinyin": "Zhège cài kàn qǐlai hěn hǎochī.",
        "german": "Dieses Gericht sieht sehr lecker aus."
      },
      {
        "chinese": "你今天看起来很累，早点儿休息吧。",
        "pinyin": "Nǐ jīntiān kàn qǐlai hěn lèi, zǎo diǎnr xiūxi ba.",
        "german": "Du siehst heute müde aus – ruh dich früh aus."
      },
      {
        "chinese": "他看起来不到三十岁。",
        "pinyin": "Tā kàn qǐlai bú dào sānshí suì.",
        "german": "Er sieht aus, als wäre er noch keine dreißig."
      }
    ],
    "legacyIds": [
      "看起来"
    ],
    "formation": "Subjekt + 看起来 + Adjektiv/Beschreibung",
    "notes": "看上去 (kàn shàngqu) ist fast gleichbedeutend, bleibt aber enger beim sichtbaren Äußeren. 看来 (kànlái) leitet vor allem Schlussfolgerungen ein.",
    "explanation": "看起来 (kàn qǐlai) gibt den Eindruck wieder, den jemand oder etwas beim Ansehen macht: „sieht … aus, wirkt …“. Danach folgt meist ein Adjektiv mit 很 oder eine kurze Beschreibung: 他看起来很年轻 „er sieht sehr jung aus“. Die Form besteht aus 看 und dem Komplement 起来 (qǐlai), das hier „beim …“ bedeutet; genauso sagt man 听起来 (tīng qǐlai) „klingt“ und 吃起来 (chī qǐlai) „schmeckt“. Umgangssprachlich kann 看起来 auch am Satzanfang eine Vermutung einleiten („anscheinend“) und überschneidet sich dann mit 看来 (kànlái). Vor einem Adjektiv steht kein 像 (xiàng) „wie“; das braucht man nur bei einem Vergleich: 看起来像学生 „sieht aus wie ein Student“.",
    "quiz": {
      "example": 1,
      "answer": "看起来",
      "distractors": [
        {
          "text": "看见",
          "reason": "看见 heißt „erblicken“ und braucht ein Objekt; es beschreibt keinen Eindruck."
        },
        {
          "text": "看完",
          "reason": "看完 heißt „zu Ende angesehen haben“ und sagt nichts über das Aussehen."
        },
        {
          "text": "好看",
          "reason": "好看 („hübsch“) ist selbst ein Adjektiv; vor 很累 ergibt es keinen Sinn."
        }
      ],
      "accepted": [
        "看上去"
      ]
    },
    "related": [
      "g:看上去",
      "g:看来",
      "g:表示动作行为的开始：动词+上/起来",
      "g:看样子"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:看上去",
    "pattern": "看上去",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 189,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "看上去"
    },
    "meaning": "sieht … aus (sichtbarer äußerer Eindruck)",
    "formation": "Subjekt + 看上去 + Adjektiv/Beschreibung",
    "notes": "上去 (shàngqu) ist hier kein Richtungskomplement „hinauf“, sondern Teil der festen Wendung. Ähnlich gebaut: 听上去 (tīng shàngqu) „klingt“.",
    "explanation": "看上去 (kàn shàngqu) beschreibt, wie jemand oder etwas auf den ersten Blick aussieht: „sieht … aus, wirkt von außen …“. Es folgt ein Adjektiv (meist mit 很) oder eine kurze Beschreibung: 这个房间看上去很干净 „das Zimmer sieht sehr sauber aus“. Oft schwingt mit, dass der Schein trügen kann; dann folgt 其实 (qíshí) „in Wirklichkeit“ oder 但是 (dànshì). Verglichen mit 看起来 (kàn qǐlai) bleibt 看上去 enger beim Sichtbaren: Eine Folgerung aus Umständen ohne Bezug auf das Aussehen (他还没到，看来他不会来了) leitet man besser mit 看来 (kànlái) ein. Die Wendung ist gesprochen wie geschrieben üblich.",
    "examples": [
      {
        "chinese": "爷爷七十多岁了，看上去还很年轻。",
        "pinyin": "Yéye qīshí duō suì le, kàn shàngqu hái hěn niánqīng.",
        "german": "Opa ist über siebzig, sieht aber noch sehr jung aus."
      },
      {
        "chinese": "她看上去只有二十岁。",
        "pinyin": "Tā kàn shàngqu zhǐ yǒu èrshí suì.",
        "german": "Sie sieht aus, als wäre sie erst zwanzig."
      },
      {
        "chinese": "这件衣服看上去很贵，其实很便宜。",
        "pinyin": "Zhè jiàn yīfu kàn shàngqu hěn guì, qíshí hěn piányi.",
        "german": "Das Kleidungsstück sieht teuer aus, ist aber eigentlich ganz billig."
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "看上去",
      "distractors": [
        {
          "text": "看见",
          "reason": "看见 heißt „erblicken“ und braucht ein Objekt; es beschreibt keinen Eindruck."
        },
        {
          "text": "看过",
          "reason": "看过 heißt „schon einmal angesehen haben“ und sagt nichts über das Aussehen."
        },
        {
          "text": "看上",
          "reason": "看上 heißt „Gefallen finden an“ und braucht ein Objekt (看上了这件衣服); „aussehen“ heißt 看上去."
        }
      ],
      "accepted": [
        "看起来"
      ]
    },
    "related": [
      "g:看起来",
      "g:看来",
      "g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一般来说",
    "pattern": "一般来说",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 190,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "一般来说"
    },
    "meaning": "im Allgemeinen, normalerweise (Regel mit Ausnahmen)",
    "formation": "一般来说，allgemeine Aussage",
    "notes": "对我来说 (duì wǒ lái shuō) „für mich“ nennt dagegen eine Person, für die etwas gilt (eigener Punkt); 总的来说 (zǒng de lái shuō) fasst zusammen („alles in allem“).",
    "explanation": "一般来说 (yìbān lái shuō) leitet eine allgemeine Feststellung ein, die meistens, aber nicht immer zutrifft: „im Allgemeinen, in der Regel, normalerweise“. Die Wendung steht am Satzanfang, mit Komma vor der Aussage, und ist im Gespräch wie im Text üblich. Danach folgen oft Wörter wie 比较 (bǐjiào), 都 oder 会, die die Regel ausdrücken. Häufig nennt ein folgender Satz die Ausnahme, z. B. mit 但是 (dànshì) oder 不过 (búguò). Gleichbedeutend ist 一般说来 (yìbān shuōlái). 一般 (yìbān) allein steht als Adverb direkt vor dem Verb: 我一般七点起床 „ich stehe normalerweise um sieben auf“.",
    "examples": [
      {
        "chinese": "一般来说，南方比北方暖和。",
        "pinyin": "Yìbān lái shuō, nánfāng bǐ běifāng nuǎnhuo.",
        "german": "Im Allgemeinen ist es im Süden wärmer als im Norden."
      },
      {
        "chinese": "一般来说，周末去公园的人比较多。",
        "pinyin": "Yìbān lái shuō, zhōumò qù gōngyuán de rén bǐjiào duō.",
        "german": "Normalerweise sind am Wochenende mehr Leute im Park."
      },
      {
        "chinese": "一般来说，孩子九点以前就睡觉了。",
        "pinyin": "Yìbān lái shuō, háizi jiǔ diǎn yǐqián jiù shuìjiào le.",
        "german": "In der Regel schlafen Kinder vor neun Uhr schon."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "一般",
      "distractors": [
        {
          "text": "一样",
          "reason": "一样 heißt „gleich“ (A和B一样); mit 来说 bildet es keine Wendung."
        },
        {
          "text": "一直",
          "reason": "一直 heißt „ununterbrochen“ und kann keine allgemeine Regel einleiten."
        },
        {
          "text": "一起",
          "reason": "一起 heißt „zusammen“ und passt nicht vor 来说."
        }
      ],
      "accepted": [
        "通常"
      ]
    },
    "related": [
      "g:对……来说",
      "g:总的来说",
      "g:严格来说",
      "g:在……看来"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不怎么样",
    "pattern": "不怎么样",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 191,
      "category": "短语",
      "categoryName": "固定短语",
      "item": "其他",
      "content": "不怎么样"
    },
    "meaning": "nicht besonders (gut), eher mäßig (abschätziges Urteil)",
    "formation": "Thema + 不怎么样",
    "explanation": "不怎么样 (bù zěnmeyàng) ist ein zurückhaltendes negatives Urteil: „nicht besonders, nicht so toll, eher mäßig“. Es steht als Prädikat am Satzende nach dem Thema oder als Komplement nach 得: 这个电影不怎么样 „der Film ist nicht besonders“, 他唱得不怎么样 „er singt nicht besonders gut“. Gemeint ist eine schlechte Bewertung, die weicher klingt als 不好 (bù hǎo); die Wendung ist vor allem gesprochen. Obwohl 怎么样 (zěnmeyàng) sonst „wie?“ fragt, ist 不怎么样 keine Frage. Davon zu unterscheiden ist 不怎么 (bù zěnme) + Adjektiv/Verb (HSK 4), das „nicht sehr“ heißt: 不怎么好. Hinter 不怎么样 steht kein weiteres Adjektiv (falsch: *不怎么样好).",
    "examples": [
      {
        "chinese": "这家饭店的菜不怎么样。",
        "pinyin": "Zhè jiā fàndiàn de cài bù zěnmeyàng.",
        "german": "Das Essen in diesem Restaurant ist nicht besonders."
      },
      {
        "chinese": "我觉得这个电影不怎么样。",
        "pinyin": "Wǒ juéde zhège diànyǐng bù zěnmeyàng.",
        "german": "Ich finde den Film eher mäßig."
      },
      {
        "chinese": "他的汉字写得不怎么样。",
        "pinyin": "Tā de Hànzì xiě de bù zěnmeyàng.",
        "german": "Seine Schriftzeichen sind nicht besonders schön."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "怎么样",
      "distractors": [
        {
          "text": "怎么",
          "reason": "不怎么 braucht ein folgendes Adjektiv oder Verb (不怎么好); am Satzende steht 不怎么样."
        },
        {
          "text": "什么",
          "reason": "„不什么“ ist keine Wendung; das Urteil heißt 不怎么样."
        },
        {
          "text": "太",
          "reason": "不太 braucht ebenfalls ein Adjektiv dahinter (不太好)."
        }
      ]
    },
    "related": [
      "g:怎么样",
      "g:不怎么",
      "g:不太 + Adjektiv"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:除了……（以外），……还/也/都……",
    "pattern": "除了……（以外），……还/也/都……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 192,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "除了……（以外），……还/也/都……"
    },
    "meaning": "außer …: ausschließend (alle außer X) oder hinzufügend (neben X auch)",
    "formation": "除了 + X (+ 以外)，Subjekt + 都 … (Ausschluss) / Subjekt + 还/也 … (Zusatz)",
    "explanation": "除了 (chúle) X 以外 (yǐwài) nimmt X heraus; was folgt, hängt vom Adverb im zweiten Teil ab. Mit 都 (dōu) wird X ausgeschlossen: „außer X alle“ – 除了他以外，大家都来了 „außer ihm sind alle gekommen“ (er nicht). Mit 还 (hái) oder 也 (yě) wird X mitgezählt und etwas hinzugefügt: „neben X auch noch“ – 除了中文以外，她还会说日语 „außer Chinesisch spricht sie auch Japanisch“. 以外 kann wegfallen (除了他，大家都来了); in geschriebenen Texten steht auch 之外 (zhīwài). 还 und 也 stehen nach dem Subjekt des zweiten Teils, nicht davor. X kann ein Nomen, ein Pronomen oder eine Verbgruppe sein (除了看书以外).",
    "notes": "Auf das Adverb achten: 除了小王，我们都去 „alle außer Xiao Wang gehen“, aber 除了小王，我们也去 „neben Xiao Wang gehen auch wir“.",
    "examples": [
      {
        "chinese": "除了他以外，大家都来了。",
        "pinyin": "Chúle tā yǐwài, dàjiā dōu lái le.",
        "german": "Außer ihm sind alle gekommen."
      },
      {
        "chinese": "除了中文以外，她还会说日语。",
        "pinyin": "Chúle Zhōngwén yǐwài, tā hái huì shuō Rìyǔ.",
        "german": "Außer Chinesisch spricht sie auch Japanisch."
      },
      {
        "chinese": "除了星期天以外，他每天都去跑步。",
        "pinyin": "Chúle xīngqītiān yǐwài, tā měi tiān dōu qù pǎobù.",
        "german": "Außer sonntags geht er jeden Tag joggen."
      },
      {
        "chinese": "除了看书以外，我也喜欢听音乐。",
        "pinyin": "Chúle kàn shū yǐwài, wǒ yě xǐhuan tīng yīnyuè.",
        "german": "Neben dem Lesen höre ich auch gern Musik."
      }
    ],
    "legacyIds": [
      "g:除了...以外",
      "除了...以外",
      "g:除了...以外，还...",
      "除了...以外，还..."
    ],
    "related": [
      "g:都¹",
      "g:还¹",
      "g:……，还……"
    ],
    "quiz": {
      "example": 0,
      "answer": "都",
      "distractors": [
        {
          "text": "还",
          "reason": "还 fügt etwas zu X hinzu; hier wird X (er) aber ausgeschlossen, dafür steht 都."
        },
        {
          "text": "也",
          "reason": "也 würde ihn mitzählen („auch“); für „alle außer ihm“ braucht man 都."
        },
        {
          "text": "才",
          "reason": "才 („erst“) drückt keinen Ausschluss aus; der Satz verlangt 都."
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
    "id": "g:从……起",
    "pattern": "从……起",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 193,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "从……起"
    },
    "meaning": "ab …, von … an (Beginn eines Zeitraums)",
    "pinyin": "cóng…qǐ/kāishǐ",
    "examples": [
      {
        "chinese": "从明天起，我每天早上跑步。",
        "pinyin": "Cóng míngtiān qǐ, wǒ měi tiān zǎoshang pǎobù.",
        "german": "Ab morgen gehe ich jeden Morgen joggen."
      },
      {
        "chinese": "从下个月起，这家商店晚上十点关门。",
        "pinyin": "Cóng xià ge yuè qǐ, zhè jiā shāngdiàn wǎnshang shí diǎn guānmén.",
        "german": "Ab nächstem Monat schließt dieses Geschäft um zehn Uhr abends."
      },
      {
        "chinese": "从那天起，他每天都给妈妈打电话。",
        "pinyin": "Cóng nà tiān qǐ, tā měi tiān dōu gěi māma dǎ diànhuà.",
        "german": "Von dem Tag an rief er jeden Tag seine Mutter an."
      },
      {
        "chinese": "从去年起，他一直住在上海。",
        "pinyin": "Cóng qùnián qǐ, tā yìzhí zhù zài Shànghǎi.",
        "german": "Seit letztem Jahr wohnt er in Shanghai."
      }
    ],
    "legacyIds": [
      "g:从…起/开始",
      "从…起/开始"
    ],
    "formation": "从 + Zeitpunkt + 起，Handlung/Zustand",
    "notes": "Für einen vergangenen Beginn bis heute sagt man auch 自从 (zìcóng), einen Punkt der Stufe HSK 5. 从¹ (HSK 2) allein bezeichnet Ausgangsort oder -zeit: 从八点到十点 (cóng bā diǎn dào shí diǎn).",
    "explanation": "Die Wendung markiert den Zeitpunkt, ab dem etwas gilt oder geschieht: 从明天起 (cóng míngtiān qǐ) „ab morgen“, 从下个月起 „ab nächstem Monat“, 从那天起 „von jenem Tag an“. Die Gruppe steht am Satzanfang oder nach dem Subjekt, immer vor dem Verb. Sie kann eine neue Regel oder einen Vorsatz für die Zukunft einleiten oder einen Zustand beschreiben, der in der Vergangenheit begann und noch andauert (从去年起，他一直住在上海). Gleichbedeutend und im Gespräch noch häufiger ist 从……开始 (kāishǐ). Ohne 起 heißt 从 nur „von, aus“; einen Endpunkt nennt man mit 从……到…….",
    "quiz": {
      "example": 0,
      "answer": "起",
      "distractors": [
        {
          "text": "来",
          "reason": "从……来 nennt die Herkunft (从北京来); den Zeitpunkt, ab dem etwas gilt, markiert 起."
        },
        {
          "text": "到",
          "reason": "从……到…… braucht einen Endpunkt (从明天到星期五); allein ergibt 到 hier keinen Sinn."
        },
        {
          "text": "以来",
          "reason": "以来 blickt von einem vergangenen Zeitpunkt bis heute zurück; zu 明天 passt es nicht."
        }
      ],
      "accepted": [
        "开始"
      ]
    },
    "related": [
      "g:从¹",
      "g:自从"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:对……来说",
    "pattern": "对……来说",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 194,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "对……来说"
    },
    "meaning": "für … (aus der Lage oder Sicht einer Person)",
    "formation": "对 + Person/Gruppe + 来说，Aussage",
    "explanation": "Die Wendung nennt die Person oder Gruppe, für die eine Aussage gilt: 对我来说 (duì wǒ lái shuō) „für mich“. Danach folgt meist ein Urteil mit einem Adjektiv wie 难, 重要 (zhòngyào) oder 容易 (róngyì) oder mit 不是问题 „kein Problem“: 对外国人来说，汉字很难 „für Ausländer sind die Schriftzeichen schwer“. Die Gruppe steht am Satzanfang, mit Komma, oder nach dem Thema (这点儿钱对他来说不是问题). Sie ist im Gespräch wie im Text üblich; mit 对于 (duìyú) statt 对 klingt sie etwas formeller. Typischer Fehler: 对 mit 看来 (kànlái) mischen (falsch: *对我看来). Wer eine Meinung äußert, sagt 在我看来 (zài wǒ kànlái); wem etwas schwerfällt oder wichtig ist, sagt 对我来说.",
    "notes": "对 allein heißt „zu, gegenüber“: 他对我很好. 在我看来 (zài wǒ kànlái) nennt eine Meinung, 对我来说 (duì wǒ lái shuō) die Betroffenen. Ähnlich gebaut ist die Wendung mit 拿 (ná) „zum Beispiel“ (HSK 4): 拿我来说 (ná wǒ lái shuō) „nehmen wir mich“.",
    "examples": [
      {
        "chinese": "对我来说，健康最重要。",
        "pinyin": "Duì wǒ lái shuō, jiànkāng zuì zhòngyào.",
        "german": "Für mich ist Gesundheit das Wichtigste."
      },
      {
        "chinese": "对外国人来说，汉字很难。",
        "pinyin": "Duì wàiguórén lái shuō, Hànzì hěn nán.",
        "german": "Für Ausländer sind chinesische Schriftzeichen schwer."
      },
      {
        "chinese": "对孩子们来说，这个游戏太难了。",
        "pinyin": "Duì háizimen lái shuō, zhège yóuxì tài nán le.",
        "german": "Für Kinder ist dieses Spiel zu schwer."
      },
      {
        "chinese": "这点儿钱对他来说不是问题。",
        "pinyin": "Zhè diǎnr qián duì tā lái shuō bú shì wèntí.",
        "german": "Das bisschen Geld ist für ihn kein Problem."
      }
    ],
    "legacyIds": [
      "g:对...来说",
      "对...来说",
      "g:对于…来说",
      "对于…来说"
    ],
    "related": [
      "g:在……看来",
      "g:一般来说",
      "g:拿……来说",
      "g:对于",
      "g:对"
    ],
    "quiz": {
      "example": 0,
      "answer": "来说",
      "distractors": [
        {
          "text": "看来",
          "reason": "看来 gehört zu 在……看来 (Meinung); mit 对 bildet man 对……来说."
        },
        {
          "text": "来看",
          "reason": "来看 gehört zu 从……来看 („von … aus betrachtet“), nicht zu 对."
        },
        {
          "text": "起来",
          "reason": "起来 ist ein Komplement hinter Verben; nach 对 + Person ergibt es keine Wendung."
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
    "id": "g:一……也/都+不/没……",
    "pattern": "一……也/都+不/没……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 195,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "一……也/都+不/没……"
    },
    "meaning": "kein einziges …, nicht ein … (vollständige Verneinung)",
    "formation": "一 + Zählwort (+ Nomen) + 也/都 + 不/没 + Verb",
    "notes": "Ein Sonderfall mit eigenem Punkt ist 一点儿也不 „überhaupt nicht“ vor Adjektiven. Mit 连 (lián) davor wird die Aussage noch stärker betont (连一个人也没来).",
    "explanation": "Eine Mengenangabe aus 一 und Zählwort, gefolgt von 也 oder 都 und einer Verneinung, verneint vollständig: „kein einziger, nicht ein …“. Beispiele: 一个人也没来 „nicht ein Einziger ist gekommen“, 一句话都没说 „kein einziges Wort gesagt“, 一次也没去过 „kein einziges Mal dort gewesen“. Die Mengenangabe steht immer vor dem Verb; ein Objekt wird also nach vorn gezogen (我一口也没吃, nicht *我没吃一口). 没 verneint Geschehenes oder Besitz (没有 (méiyǒu)), 不 einen Willen, eine Gewohnheit oder einen Zustand (他一口也不吃 „er will keinen Bissen essen“). 也 und 都 sind hier gleichbedeutend.",
    "examples": [
      {
        "chinese": "教室里一个人也没有。",
        "pinyin": "Jiàoshì li yí ge rén yě méiyǒu.",
        "german": "Im Klassenzimmer ist niemand."
      },
      {
        "chinese": "他今天一句话都没说。",
        "pinyin": "Tā jīntiān yí jù huà dōu méi shuō.",
        "german": "Er hat heute kein einziges Wort gesagt."
      },
      {
        "chinese": "这个地方我一次也没去过。",
        "pinyin": "Zhège dìfang wǒ yí cì yě méi qùguo.",
        "german": "Dort war ich noch kein einziges Mal."
      },
      {
        "chinese": "他生病了，一口饭也不想吃。",
        "pinyin": "Tā shēngbìng le, yì kǒu fàn yě bù xiǎng chī.",
        "german": "Er ist krank und will keinen Bissen essen."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "都",
      "distractors": [
        {
          "text": "还",
          "reason": "还没 heißt „noch nicht“; die vollständige Verneinung nach 一句话 verlangt 也 oder 都."
        },
        {
          "text": "就",
          "reason": "就 betont Schnelligkeit oder Einschränkung und bildet mit 一句话 keine Verneinung „kein einziges“."
        },
        {
          "text": "又",
          "reason": "又没 hieße „schon wieder nicht“; gemeint ist „kein einziges Wort“."
        }
      ],
      "accepted": [
        "也"
      ]
    },
    "related": [
      "g:一点儿也不",
      "g:怎么都/也+不/没……",
      "g:连……也/都……，……更……",
      "g:名量词@HSK3"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一点儿也不",
    "pattern": "一点儿也不",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 196,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "一点儿也不"
    },
    "meaning": "überhaupt nicht, kein bisschen",
    "pinyin": "yìdiǎnr yě bù + Adj",
    "examples": [
      {
        "chinese": "我一点儿也不累。",
        "pinyin": "Wǒ yìdiǎnr yě bú lèi.",
        "german": "Ich bin überhaupt nicht müde."
      },
      {
        "chinese": "这个菜一点儿也不辣。",
        "pinyin": "Zhège cài yìdiǎnr yě bú là.",
        "german": "Dieses Gericht ist kein bisschen scharf."
      },
      {
        "chinese": "他说的话我一点儿也不明白。",
        "pinyin": "Tā shuō de huà wǒ yìdiǎnr yě bù míngbai.",
        "german": "Ich verstehe überhaupt nicht, was er sagt."
      },
      {
        "chinese": "今天一点儿也不冷，你别穿那么多。",
        "pinyin": "Jīntiān yìdiǎnr yě bù lěng, nǐ bié chuān nàme duō.",
        "german": "Heute ist es überhaupt nicht kalt – zieh nicht so viel an."
      }
    ],
    "legacyIds": [
      "g:一点儿也不 + Adj",
      "一点儿也不 + Adj"
    ],
    "formation": "一点儿 + 也/都 + 不 + Adjektiv/Verb",
    "notes": "Allgemeiner gebaut ist 一……也/都+不/没…… mit beliebigem Zählwort (一个人也没来). Eigene Punkte sind 有点儿 (yǒudiǎnr) vor dem Adjektiv (HSK 1) und 一点儿 (yìdiǎnr) hinter dem Adjektiv („etwas mehr“, HSK 2).",
    "explanation": "一点儿也不 (yìdiǎnr yě bù) verneint ein Adjektiv oder Verb vollständig: „überhaupt nicht, kein bisschen“. 一点儿 (yìdiǎnr) steht dabei vor dem Adjektiv oder Verb, nicht dahinter: 我一点儿也不累 „ich bin überhaupt nicht müde“. Statt 也 kann 都 stehen; für Vergangenes nimmt man 没: 一点儿也没变 „hat sich kein bisschen verändert“. Mit einem Nomen bedeutet die Form „gar kein …“: 一点儿水也没有 „gar kein Wasser“. Häufige Fehler: die deutsche Wortstellung übernehmen (falsch: *我不累一点儿) oder 有点儿 (yǒudiǎnr) verwenden – 有点儿 heißt „etwas, ein bisschen (leider)“ und steht ohne 也: 有点儿累 „etwas müde“. Im Gespräch hört man auch 一点 (yìdiǎn) ohne 儿.",
    "quiz": {
      "example": 1,
      "answer": "一点儿",
      "distractors": [
        {
          "text": "有点儿",
          "reason": "有点儿 heißt „etwas“ und steht ohne 也 (有点儿辣) – das Gegenteil der Übersetzung."
        },
        {
          "text": "一下儿",
          "reason": "一下儿 steht hinter dem Verb („mal kurz“) und verstärkt keine Verneinung."
        },
        {
          "text": "一些",
          "reason": "一些 („einige“) zählt Dinge und bildet mit 也不 keine vollständige Verneinung."
        }
      ],
      "accepted": [
        "一点"
      ]
    },
    "related": [
      "g:一……也/都+不/没……",
      "g:有（一）点儿",
      "g:形容词+数量补语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:越……越……",
    "pattern": "越……越……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 197,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "越……越……"
    },
    "meaning": "je …, desto … (zwei Größen wachsen gemeinsam)",
    "formation": "(Subjekt) + 越 + Verb/Adjektiv A，(Subjekt) + 越 + Adjektiv/Verb B",
    "explanation": "越 A 越 B drückt aus, dass B in dem Maß zunimmt, in dem A zunimmt: „je mehr A, desto B“. Beide 越 (yuè) stehen direkt vor dem Verb oder Adjektiv. Haben beide Teile dasselbe Subjekt, steht es nur einmal vorn: 雨越下越大 „der Regen wird immer stärker“, wörtlich „je länger es regnet, desto stärker“. Bei zwei Subjekten steht jedes vor seinem 越: 你越说，他越不想听. Ohne Subjekt klingt die Form wie eine Regel: 越快越好 „je schneller, desto besser“. Typische Fehler: kein 很 oder 非常 (fēicháng) hinter 越 (falsch: *越看越很喜欢), und 越 steht nicht vor dem Subjekt (falsch: *越你说……). Die feste Form 越来越 (yuè lái yuè) „immer …er“ ist ein eigener Punkt.",
    "examples": [
      {
        "chinese": "这本书我越看越喜欢。",
        "pinyin": "Zhè běn shū wǒ yuè kàn yuè xǐhuan.",
        "german": "Je mehr ich in diesem Buch lese, desto besser gefällt es mir."
      },
      {
        "chinese": "他越想越生气。",
        "pinyin": "Tā yuè xiǎng yuè shēngqì.",
        "german": "Je länger er darüber nachdachte, desto wütender wurde er."
      },
      {
        "chinese": "你越说，他越不想听。",
        "pinyin": "Nǐ yuè shuō, tā yuè bù xiǎng tīng.",
        "german": "Je mehr du redest, desto weniger will er zuhören."
      },
      {
        "chinese": "雨越下越大，我们回家吧。",
        "pinyin": "Yǔ yuè xià yuè dà, wǒmen huí jiā ba.",
        "german": "Der Regen wird immer stärker – lass uns nach Hause gehen."
      }
    ],
    "legacyIds": [
      "g:越...越...",
      "越...越...",
      "g:越…越… (Selbstbezug)",
      "越…越… (Selbstbezug)"
    ],
    "quiz": {
      "example": 0,
      "answer": "越看越",
      "distractors": [
        {
          "text": "又看又",
          "reason": "又……又…… verbindet zwei gleichzeitige Eigenschaften („sowohl … als auch“), keine Steigerung."
        },
        {
          "text": "一看就",
          "reason": "一看就喜欢 hieße „auf den ersten Blick mögen“ – die allmähliche Zunahme „je mehr …, desto …“ fehlt."
        },
        {
          "text": "边看边",
          "reason": "边……边…… beschreibt zwei gleichzeitige Handlungen; hier ist das Gefallen aber die Folge des Lesens."
        }
      ]
    },
    "related": [
      "g:越来越",
      "g:一……就……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:（在）……以前/以后/前/后",
    "pattern": "（在）……以前/以后/前/后",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 198,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "（在）……以前/以后/前/后"
    },
    "meaning": "vor / nach einem Zeitpunkt oder Ereignis („bevor …“, „nachdem …“)",
    "pinyin": "yǐqián",
    "examples": [
      {
        "chinese": "睡觉前，我喜欢看一会儿书。",
        "pinyin": "Shuìjiào qián, wǒ xǐhuan kàn yíhuìr shū.",
        "german": "Vor dem Schlafengehen lese ich gern noch ein bisschen."
      },
      {
        "chinese": "在来中国以前，我学过一年中文。",
        "pinyin": "Zài lái Zhōngguó yǐqián, wǒ xuéguo yì nián Zhōngwén.",
        "german": "Bevor ich nach China kam, hatte ich ein Jahr Chinesisch gelernt."
      },
      {
        "chinese": "大学毕业以后，他去了上海工作。",
        "pinyin": "Dàxué bìyè yǐhòu, tā qùle Shànghǎi gōngzuò.",
        "german": "Nach dem Studium ging er zum Arbeiten nach Shanghai."
      },
      {
        "chinese": "下课后，我们一起去吃饭吧。",
        "pinyin": "Xiàkè hòu, wǒmen yìqǐ qù chīfàn ba.",
        "german": "Lass uns nach dem Unterricht zusammen essen gehen."
      }
    ],
    "legacyIds": [
      "g:以前",
      "以前",
      "g:以后",
      "以后"
    ],
    "formation": "(在) + Zeitpunkt/Ereignis + 以前/以后/前/后，Hauptsatz",
    "notes": "Allein am Satzanfang heißen 以前 (yǐqián) „früher“ und 以后 (yǐhòu) „später, künftig“ (以前我住在德国). Für „danach“ in einer Erzählung über Vergangenes ohne Bezugsereignis steht 后来 (hòulái).",
    "explanation": "Mit 以前 (yǐqián) bzw. 前 und 以后 (yǐhòu) bzw. 后 hinter einer Zeitangabe oder einem Ereignis bildet man Zeitbestimmungen: 八点以前 „vor acht Uhr“, 吃饭以后 „nach dem Essen“, 来中国以前 „bevor ich nach China kam“, 三天后 „drei Tage später“. Anders als im Deutschen steht das Ereignis zuerst und „vor/nach“ am Ende; ein deutscher Nebensatz mit „bevor/nachdem“ wird so zu einer Zeitangabe vor dem Hauptsatz. 在 (zài) davor ist möglich und klingt etwas formeller; im Gespräch fällt es oft weg. Die einsilbigen Formen 前 und 后 sind knapper und stehen oft in festen Verbindungen wie 睡觉前, 毕业后. Die Gruppe steht am Satzanfang oder nach dem Subjekt, nicht am Satzende (falsch: *我洗手在吃饭以前).",
    "quiz": {
      "example": 1,
      "answer": "以前",
      "distractors": [
        {
          "text": "以后",
          "reason": "以后 hieße „nachdem ich nach China gekommen war“ – die Übersetzung sagt „bevor“."
        },
        {
          "text": "时候",
          "reason": "时候 braucht 的 davor (在……的时候) und hieße „als“, nicht „bevor“."
        },
        {
          "text": "里",
          "reason": "里 bezeichnet einen Ort („in“), keinen Zeitpunkt vor einem Ereignis."
        }
      ],
      "accepted": [
        "前"
      ]
    },
    "related": [
      "g:在（引出时间、处所）",
      "g:...的时候",
      "g:其他结构类型：方位短语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:X什么（啊）",
    "pattern": "X什么（啊）",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 199,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "X什么（啊）"
    },
    "meaning": "Was heißt hier …? / Wozu …? (Widerspruch, Zurückweisung)",
    "formation": "Verb/Adjektiv X + 什么 (+ 啊)",
    "notes": "Echte Fragen mit 什么 (什么时候? 你看什么?) haben das Fragewort an der Stelle des Erfragten. Verwandte rhetorische Formen höherer Stufen: X什么X (HSK 5), （没）有什么（好）X的 (HSK 4).",
    "explanation": "Hängt man 什么 (shénme) an ein Verb oder Adjektiv, das gerade gefallen ist oder zur Lage passt, wird daraus keine echte Frage, sondern ein Widerspruch: „Was heißt hier X? / Wozu X? / Kein Grund zu X!“. 贵什么啊 „Wieso teuer?“ (= es ist nicht teuer), 急什么啊 „Keine Eile!“, 哭什么 „Hör auf zu weinen“. Freundlich wirkt die Form bei 谢 und 客气 (kèqi): 谢什么啊 „Keine Ursache!“, 客气什么 „Sei nicht so förmlich!“. Danach folgt oft eine Begründung. 啊 (a) macht den Ton weicher; ohne 啊 klingt es schroffer. Hat X ein Objekt, steht es hinter 什么: 看什么电视 „hör auf fernzusehen“. Die Form gehört zur gesprochenen Sprache und kann je nach Ton unhöflich wirken, besonders gegenüber Älteren oder Vorgesetzten.",
    "examples": [
      {
        "chinese": "贵什么啊，才五十块钱。",
        "pinyin": "Guì shénme a, cái wǔshí kuài qián.",
        "german": "Wieso teuer? Das sind doch nur fünfzig Yuan."
      },
      {
        "chinese": "谢什么啊，我们是好朋友。",
        "pinyin": "Xiè shénme a, wǒmen shì hǎo péngyou.",
        "german": "Keine Ursache, wir sind doch gute Freunde."
      },
      {
        "chinese": "急什么啊，电影八点才开始。",
        "pinyin": "Jí shénme a, diànyǐng bā diǎn cái kāishǐ.",
        "german": "Kein Grund zur Eile, der Film fängt erst um acht an."
      },
      {
        "chinese": "客气什么，快坐吧。",
        "pinyin": "Kèqi shénme, kuài zuò ba.",
        "german": "Keine falsche Höflichkeit – setz dich doch!"
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "什么",
      "distractors": [
        {
          "text": "怎么",
          "reason": "怎么 steht vor dem Verb (怎么办?) und fragt nach der Art und Weise; hinter 急 ergibt es keinen Widerspruch."
        },
        {
          "text": "吗",
          "reason": "吗 macht eine echte Ja-Nein-Frage und steht nicht vor 啊."
        },
        {
          "text": "为什么",
          "reason": "为什么 steht vor dem Verb (你为什么急?) und fragt ernsthaft nach dem Grund; die Zurückweisung heißt 急什么啊."
        }
      ]
    },
    "related": [
      "g:什么",
      "g:X什么X",
      "g:（没）有什么（好）X的",
      "g:啊¹"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:该……了",
    "pattern": "该……了",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 200,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "该……了"
    },
    "meaning": "es ist Zeit, … zu tun; jetzt ist … dran",
    "formation": "(Subjekt +) 该 + Verb(phrase) + 了   ·   该 + Person + 了",
    "notes": "应该 (yīnggāi) …了 ist ebenfalls möglich, 该……了 ist aber kürzer und typischer. 不该 (bù gāi) heißt „sollte nicht“ (Kritik) und ist kein Gegenstück zu 该……了. Verwandt: 要/快要 (kuàiyào)……了 kündigt an, dass etwas gleich geschieht, 该……了 dagegen, dass es geschehen sollte.",
    "explanation": "该 (gāi) + Verb + 了 sagt, dass der richtige Zeitpunkt für eine Handlung gekommen ist: 该走了 „wir müssen los“, 该吃饭了 „Zeit zum Essen“. 了 am Satzende zeigt die neue Lage an – der Zeitpunkt ist jetzt erreicht. Oft steht davor ein Grund (已经十一点了、天黑了). Mit einer Person statt eines Verbs heißt 该……了 „… ist an der Reihe“: 该你了 „du bist dran“. Der Ausdruck ist alltäglich und gesprochen; er klingt wie eine freundliche Aufforderung oder Feststellung. Ohne 了 bedeutet 该 einfach „sollen“ (你该多休息 „du solltest dich mehr ausruhen“) – erst 了 macht daraus „jetzt ist es so weit“.",
    "examples": [
      {
        "chinese": "已经十一点了，我们该睡觉了。",
        "pinyin": "Yǐjīng shíyī diǎn le, wǒmen gāi shuìjiào le.",
        "german": "Es ist schon elf Uhr, wir sollten schlafen gehen."
      },
      {
        "chinese": "太晚了，孩子们该回家了。",
        "pinyin": "Tài wǎn le, háizimen gāi huí jiā le.",
        "german": "Es ist schon spät, die Kinder müssen nach Hause."
      },
      {
        "chinese": "我唱完了，下面该你了。",
        "pinyin": "Wǒ chàngwán le, xiàmiàn gāi nǐ le.",
        "german": "Ich bin mit Singen fertig, jetzt bist du dran."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "该",
      "distractors": [
        {
          "text": "会",
          "reason": "会睡觉了 hieße „können jetzt schlafen“ (gelernte Fähigkeit), nicht „es ist Zeit zu schlafen“."
        },
        {
          "text": "想",
          "reason": "想 drückt einen Wunsch aus („möchten schlafen“), nicht dass es Zeit dafür ist."
        },
        {
          "text": "能",
          "reason": "能 bedeutet „können, dürfen“; der Satz soll aber sagen, dass es Zeit zum Schlafen ist."
        }
      ],
      "accepted": [
        "应该"
      ]
    },
    "related": [
      "g:要/快要/就要……了",
      "g:应该",
      "g:该"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:在……上/下/中",
    "pattern": "在……上/下/中",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Feste Muster",
    "syllabus": {
      "no": 201,
      "category": "固定格式",
      "categoryName": "",
      "item": "",
      "content": "在……上/下/中"
    },
    "meaning": "hinsichtlich …, unter …, im Laufe von … (abstrakter Bereich, Umstand, Vorgang)",
    "pinyin": "zài…jīchǔ shàng",
    "examples": [
      {
        "chinese": "在学习上，他给了我很多帮助。",
        "pinyin": "Zài xuéxí shang, tā gěi le wǒ hěn duō bāngzhù.",
        "german": "Beim Lernen hat er mir sehr geholfen."
      },
      {
        "chinese": "在老师的帮助下，我的汉语进步得很快。",
        "pinyin": "Zài lǎoshī de bāngzhù xià, wǒ de Hànyǔ jìnbù de hěn kuài.",
        "german": "Mit Hilfe der Lehrerin macht mein Chinesisch schnelle Fortschritte."
      },
      {
        "chinese": "在生活中，我们常常会遇到各种问题。",
        "pinyin": "Zài shēnghuó zhōng, wǒmen chángcháng huì yùdào gè zhǒng wèntí.",
        "german": "Im Leben stoßen wir oft auf alle möglichen Probleme."
      }
    ],
    "legacyIds": [
      "g:在…基础上",
      "在…基础上",
      "g:在…前提下",
      "在…前提下",
      "g:在…的情况下",
      "在…的情况下"
    ],
    "formation": "在 + Nomen(phrase) + 上/下/中",
    "notes": "Wörtlich bleibt die Ortsbedeutung erhalten (在桌子上 „auf dem Tisch“, 在树下 „unter dem Baum“). Gehobenere feste Verbindungen wie 在……基础上 „auf der Grundlage von“ oder 在……前提下 „unter der Voraussetzung“ folgen demselben Muster, gehören aber zu höheren Stufen.",
    "explanation": "在……上/下/中 bildet eine Adverbialbestimmung, die nicht nur einen Ort, sondern einen abstrakten Rahmen angibt. 上 nennt einen Bereich oder Gesichtspunkt: 在学习上 „beim Lernen, was das Lernen betrifft“, 在这个问题上 „in dieser Frage“. 下 nennt eine Bedingung oder einen Umstand: 在老师的帮助下 „mit Hilfe des Lehrers“, 在这种情况下 „unter diesen Umständen“. 中 nennt einen Vorgang, eine Gruppe oder ein Umfeld: 在生活中 „im Leben“, 在比赛中 „im Wettkampf“. Die Wendung steht meist am Satzanfang oder vor dem Verb und wird mit einem Komma abgetrennt, wenn sie lang ist. Typischer Fehler: das Nachwort vergessen (*在老师的帮助) oder das falsche wählen (*在老师的帮助中).",
    "quiz": {
      "example": 1,
      "answer": "下",
      "distractors": [
        {
          "text": "中",
          "reason": "中 steht für einen Vorgang oder ein Umfeld; „mit Hilfe von“ heißt fest 在……帮助下."
        },
        {
          "text": "上",
          "reason": "上 nennt einen Bereich (在学习上); eine Bedingung wie Hilfe wird mit 下 ausgedrückt."
        },
        {
          "text": "里",
          "reason": "里 bezeichnet einen Innenraum (在房间里) und passt nicht zu 帮助."
        }
      ]
    },
    "related": [
      "g:在……方面",
      "g:在……看来",
      "g:在"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语：动词或动词性短语、形容词或形容词性短语作主语",
    "pattern": "主语：动词或动词性短语、形容词或形容词性短语作主语",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 202,
      "category": "句子成分",
      "categoryName": "主语",
      "item": "",
      "content": "动词或动词性短语、形容词或形容词性短语作主语"
    },
    "meaning": "Verb oder Adjektiv als Subjekt: „Lernen ist wichtig“",
    "formation": "Verb(phrase) / Adjektiv(phrase) + Prädikat (meist Bewertung)",
    "notes": "Ist das Subjekt ein ganzer kleiner Satz mit eigenem Subjekt (他不来也没关系), handelt es sich um den eigenen Punkt „Subjekt-Prädikat-Phrase als Subjekt“.",
    "explanation": "Im Chinesischen können Verben, Verbphrasen und Adjektive ohne jede Formänderung als Subjekt stehen. Das Deutsche braucht dafür ein Substantiv oder einen Infinitiv mit „zu“: 学习很重要 „Lernen ist wichtig“, 学习汉语很有意思 „Chinesisch zu lernen macht Spaß“, 健康最重要 „Gesundheit ist das Wichtigste“. Das Prädikat ist meist eine Bewertung oder Feststellung: 很重要、很有意思、不容易、对身体好、是……. Das Subjekt bezeichnet die Handlung oder Eigenschaft allgemein; es trägt deshalb normalerweise kein 了, 过 oder 着. Ein Fehler deutscher Lerner ist, ein Wort wie „das“ oder „zu“ nachbilden zu wollen – es fällt einfach weg.",
    "examples": [
      {
        "chinese": "学习汉语很有意思。",
        "pinyin": "Xuéxí Hànyǔ hěn yǒu yìsi.",
        "german": "Chinesisch zu lernen macht Spaß."
      },
      {
        "chinese": "每天跑步对身体很好。",
        "pinyin": "Měi tiān pǎobù duì shēntǐ hěn hǎo.",
        "german": "Jeden Tag zu laufen tut dem Körper gut."
      },
      {
        "chinese": "健康比什么都重要。",
        "pinyin": "Jiànkāng bǐ shénme dōu zhòngyào.",
        "german": "Gesundheit ist wichtiger als alles andere."
      }
    ],
    "related": [
      "g:主谓短语作主语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主谓短语作主语",
    "pattern": "主谓短语作主语",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 203,
      "category": "句子成分",
      "categoryName": "主语",
      "item": "",
      "content": "主谓短语作主语"
    },
    "meaning": "ganzer Kurzsatz als Subjekt: „Dass er nicht kommt, macht nichts“",
    "formation": "[Subjekt + Prädikat] + Prädikat (meist Bewertung)",
    "notes": "Ist das Subjekt nur eine Verb- oder Adjektivphrase ohne eigenes Subjekt (学习汉语很有意思), gehört der Satz zum Punkt „Verb oder Adjektiv als Subjekt“.",
    "explanation": "Ein vollständiger kleiner Satz aus Subjekt und Prädikat (主谓短语) kann selbst Subjekt eines größeren Satzes sein: [他不来] 也没关系 „Dass er nicht kommt, macht nichts“. Das Deutsche braucht dafür „dass …“ oder „wenn …“; das Chinesische hat kein solches Bindewort – der Kurzsatz steht einfach vorne. Das Prädikat ist meist eine Bewertung: 很好、不对 (bú duì)、没关系 (méi guānxi)、很重要、是……. Nicht verwechseln mit dem Satz mit Subjekt-Prädikat-Phrase als Prädikat (他身体很好), bei dem der Kurzsatz hinten steht und etwas über das erste Subjekt aussagt.",
    "examples": [
      {
        "chinese": "他不来也没关系。",
        "pinyin": "Tā bù lái yě méi guānxi.",
        "german": "Es macht nichts, wenn er nicht kommt."
      },
      {
        "chinese": "你这样做不太好。",
        "pinyin": "Nǐ zhèyàng zuò bú tài hǎo.",
        "german": "Dass du es so machst, ist nicht so gut."
      },
      {
        "chinese": "我们一起去是最好的办法。",
        "pinyin": "Wǒmen yìqǐ qù shì zuì hǎo de bànfǎ.",
        "german": "Dass wir zusammen hingehen, ist die beste Lösung."
      }
    ],
    "related": [
      "g:主语：动词或动词性短语、形容词或形容词性短语作主语",
      "g:主谓句4：主谓谓语句"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:多项定语",
    "pattern": "多项定语",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzglieder",
    "syllabus": {
      "no": 204,
      "category": "句子成分",
      "categoryName": "定语",
      "item": "",
      "content": "多项定语"
    },
    "meaning": "mehrere Attribute vor einem Nomen und ihre Reihenfolge",
    "formation": "Besitzer + Demonstrativ + Zahl + Zählwort + Verbphrase/Kurzsatz + 的 + Adjektiv(phrase) + 的 + Adjektiv/Nomen (ohne 的) + Nomen",
    "notes": "Häufiger Fehler: die deutsche Reihenfolge übernehmen (*新的我的书 statt 我的新书) oder das Zählwort nach dem Adjektiv setzen (*好两个朋友 statt 两个好朋友).",
    "explanation": "Stehen mehrere Attribute vor einem Nomen, folgen sie in der Regel dieser Reihenfolge: zuerst der Besitzer (我的、我们学校), dann Demonstrativ und Zahl mit Zählwort (那两本), danach beschreibende Attribute mit 的 (Verbphrasen wie 新来的, Adjektivphrasen wie 很有意思的), ganz nah am Nomen schließlich einsilbige Adjektive oder Nomen ohne 的 (新、红、中文 (Zhōngwén)): 我的两个好朋友, 一本很有意思的中文书. Je enger ein Merkmal zum Ding gehört, desto näher steht es am Nomen. Faustregel zu 的: Zu viele 的 hintereinander klingen schwerfällig; einsilbige Adjektive und Materialnomen stehen ohne 的. Ein Relativsatz kann auch vor dem Demonstrativ stehen (妈妈做的那个蛋糕); das ist sogar sehr häufig.",
    "examples": [
      {
        "chinese": "这是我的两个好朋友。",
        "pinyin": "Zhè shì wǒ de liǎng ge hǎo péngyou.",
        "german": "Das sind zwei gute Freunde von mir."
      },
      {
        "chinese": "桌子上有一本很有意思的中文书。",
        "pinyin": "Zhuōzi shang yǒu yì běn hěn yǒu yìsi de Zhōngwén shū.",
        "german": "Auf dem Tisch liegt ein sehr interessantes chinesisches Buch."
      },
      {
        "chinese": "我们学校那位新来的老师很年轻。",
        "pinyin": "Wǒmen xuéxiào nà wèi xīn lái de lǎoshī hěn niánqīng.",
        "german": "Die neue Lehrerin an unserer Schule ist sehr jung."
      },
      {
        "chinese": "我很喜欢妈妈做的那个蛋糕。",
        "pinyin": "Wǒ hěn xǐhuan māma zuò de nàge dàngāo.",
        "german": "Ich mag den Kuchen, den Mama gebacken hat, sehr."
      }
    ],
    "related": [
      "g:定语：名词性词语、形容词性短语、数量短语作定语",
      "g:定语：动词或动词性短语、主谓短语作定语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:动词+到/住/走/上",
    "pattern": "动词+到/住/走/上",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 205,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "结果补语2",
      "content": "动词+到/住/走/上"
    },
    "meaning": "Resultativkomplemente: erreichen, festhalten, weg, zu/an (finden, sich merken, wegnehmen, schließen)",
    "formation": "Verb + 到/住/走/上 (+ Objekt)",
    "explanation": "Diese vier Wörter stehen direkt hinter dem Verb und nennen das Ergebnis der Handlung. 到 (dào): das Ziel wird erreicht – 找到 (zhǎodào) „finden“, 买到 „ergattern“, 看到 (kàndào) „erblicken“, auch Ort oder Zeit: 走到门口, 睡到十点. 住 (zhù): etwas wird festgehalten oder kommt zum Stillstand – 记住 (jìzhù) „sich merken“, 拿住 „festhalten“, 站住 (zhànzhù) „stehen bleiben“. 走 (zǒu): etwas wird vom Ort entfernt – 拿走 (názǒu) „wegnehmen“, 带走 (dàizǒu) „mitnehmen“. 上 (shàng): etwas wird geschlossen, angebracht oder ein Ziel erreicht – 关上 (guānshang) „schließen“, 穿上 (chuānshang) „anziehen“, 考上 (kǎoshang) „die Aufnahmeprüfung bestehen“. Verneint wird mit 没(有) vor dem Verb: 没找到 „nicht gefunden“, nicht *不找到.",
    "notes": "Mit 得/不 dazwischen entsteht das Potentialkomplement: 找不到 (zhǎo bu dào) „nicht finden können“, 记不住 (jì bu zhù) „sich nicht merken können“. Die erste Gruppe der Resultativkomplemente (错、懂、好、会、完) ist ein eigener Punkt auf HSK 2.",
    "examples": [
      {
        "chinese": "你要的那本书我买到了。",
        "pinyin": "Nǐ yào de nà běn shū wǒ mǎidào le.",
        "german": "Das Buch, das du wolltest, habe ich bekommen."
      },
      {
        "chinese": "请记住我的电话号码。",
        "pinyin": "Qǐng jìzhù wǒ de diànhuà hàomǎ.",
        "german": "Bitte merk dir meine Telefonnummer."
      },
      {
        "chinese": "谁拿走了我的词典？",
        "pinyin": "Shéi názǒu le wǒ de cídiǎn?",
        "german": "Wer hat mein Wörterbuch mitgenommen?"
      },
      {
        "chinese": "出门的时候请关上门。",
        "pinyin": "Chūmén de shíhou qǐng guānshang mén.",
        "german": "Mach bitte die Tür zu, wenn du rausgehst."
      }
    ],
    "legacyIds": [
      "g:Verb + 到",
      "Verb + 到"
    ],
    "related": [
      "g:动词+错/懂/好/会/完",
      "g:动词+得/不+动词/形容词",
      "g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下"
    ],
    "quiz": {
      "example": 1,
      "answer": "住",
      "distractors": [
        {
          "text": "到",
          "reason": "到 zeigt, dass ein Ziel erreicht wird; „sich etwas merken“ heißt fest 记住."
        },
        {
          "text": "完",
          "reason": "完 bedeutet „fertig sein mit“; 记完 hieße „fertig notiert“, nicht „sich merken“."
        },
        {
          "text": "走",
          "reason": "走 bedeutet „weg vom Ort“ und passt nicht zum Merken einer Nummer."
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
    "id": "g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下",
    "pattern": "趋向补语的引申用法：（1）表示结果意义：动词+出/起/下",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 206,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "趋向补语2",
      "content": "趋向补语的引申用法：（1）表示结果意义：动词+出/起/下"
    },
    "meaning": "Richtungskomplemente mit Ergebnisbedeutung: erkennen, sich erinnern, festhalten",
    "formation": "Verb + 出/起/下 (+ Objekt)",
    "notes": "Abgrenzung: 起来 (qǐlai) nach einem Verb kann auch „anfangen zu“ bedeuten (笑起来, eigener Punkt), 看起来 (kàn qǐlai) „aussehen wie“ ist ebenfalls ein eigener Punkt. 想出 (xiǎngchū) „sich ausdenken“ und 想起 (xiǎngqǐ) „sich erinnern“ werden leicht verwechselt.",
    "explanation": "出, 起 und 下 bezeichnen hinter einem Verb nicht nur eine Richtung – etwa 走出 (zǒuchū), 站起 (zhànqǐ), 坐下 (zuòxià) –, sondern auch ein Ergebnis. 出 (chū): etwas tritt hervor, wird erkannt oder entsteht – 看出 (kànchū) „erkennen, merken“, 听出 „am Klang erkennen“, 想出 (xiǎngchū) „sich ausdenken“. 起 (qǐ): etwas wird ins Gedächtnis oder zur Sprache gebracht – 想起 (xiǎngqǐ) „sich erinnern an“, 说起 (shuōqǐ) „zu sprechen kommen auf“. 下 (xià): etwas bleibt fest an einem Platz oder wird festgehalten – 写下 (xiěxià) „aufschreiben“, 留下 (liúxià) „hinterlassen“, 记下 „notieren“. Die Formen mit 来 – 看出来 (kàn chūlai), 想起来 (xiǎng qǐlai), 写下来 (xiě xiàlai) – sind genauso häufig; das Objekt steht dann oft zwischen den Teilen (想起一件事来). Verneint wird mit 没: 我没听出他的声音.",
    "examples": [
      {
        "chinese": "我马上就听出了他的声音。",
        "pinyin": "Wǒ mǎshàng jiù tīngchū le tā de shēngyīn.",
        "german": "Ich habe seine Stimme sofort erkannt."
      },
      {
        "chinese": "看到这张照片，我想起了小时候。",
        "pinyin": "Kàndào zhè zhāng zhàopiàn, wǒ xiǎngqǐ le xiǎo shíhou.",
        "german": "Beim Anblick dieses Fotos musste ich an meine Kindheit denken."
      },
      {
        "chinese": "请在这里写下你的名字。",
        "pinyin": "Qǐng zài zhèlǐ xiěxià nǐ de míngzi.",
        "german": "Bitte schreib hier deinen Namen hin."
      },
      {
        "chinese": "他想出了一个好办法。",
        "pinyin": "Tā xiǎngchū le yí ge hǎo bànfǎ.",
        "german": "Er hat sich eine gute Lösung ausgedacht."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "起",
      "distractors": [
        {
          "text": "出",
          "reason": "想出 heißt „sich ausdenken“; an die Kindheit erinnert man sich mit 想起."
        },
        {
          "text": "下",
          "reason": "下 hält etwas an einem Platz fest (写下); 想下 ist keine Verbindung für „sich erinnern“."
        },
        {
          "text": "好",
          "reason": "想好 heißt „sich fertig überlegt haben, entschieden sein“, nicht „sich erinnern“."
        }
      ]
    },
    "related": [
      "g:动词+上/下/进/出/过/回",
      "g:表示动作行为的开始：动词+上/起来",
      "g:动词+到/住/走/上",
      "g:趋向补语的引申用法：表示状态意义：动词/形容词+下来/下去/起来/过来/过去"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:表示动作行为的开始：动词+上/起来",
    "pattern": "表示动作行为的开始：动词+上/起来",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 207,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "趋向补语2",
      "content": "（2）表示动作行为的开始：动词+上/起来"
    },
    "meaning": "anfangen zu … (Beginn einer Handlung durch ein Komplement)",
    "pinyin": "Verb + qǐlái",
    "formation": "Verb + 起来 (+ 了)   ·   Verb + 上 (+ 了) + Objekt",
    "explanation": "起来 (qǐlai) hinter einem Verb zeigt, dass eine Handlung beginnt und dann andauert: 笑起来 „anfangen zu lachen“, 哭起来 „in Tränen ausbrechen“. Oft steht 了 dabei (笑了起来 / 笑起来了). Ein Objekt tritt zwischen 起 und 来: 下起雨来了 „es fing an zu regnen“, 唱起歌来 „anfangen zu singen“. 上 (shang) hinter einem Verb drückt ebenfalls einen Beginn aus, ein neuer Zustand tritt ein und hält an, oft ein gewünschter oder überraschender: 爱上 (àishang) „sich verlieben in“, 喜欢上 „Gefallen finden an“, 聊上 „ins Plaudern kommen“. Beide Formen beschreiben einen Wechsel in einen neuen Zustand, kein bloßes Vorhaben – für „ich will anfangen“ benutzt man 开始 (kāishǐ).",
    "notes": "起来 (qǐlai) hat weitere Bedeutungen, die eigene Punkte sind: Eindruck (看起来 (kàn qǐlai) „sieht aus“), Erinnerung (想起来 (xiǎng qǐlai)) und Richtung nach oben (站起来 (zhàn qǐlai)). 下去 (xiàqu) bedeutet „weiter“ und ist das Gegenstück für die Fortsetzung.",
    "examples": [
      {
        "chinese": "听到这个消息，大家都笑了起来。",
        "pinyin": "Tīngdào zhège xiāoxi, dàjiā dōu xiào le qǐlai.",
        "german": "Als sie die Nachricht hörten, fingen alle an zu lachen."
      },
      {
        "chinese": "孩子一看见妈妈就哭起来了。",
        "pinyin": "Háizi yí kànjiàn māma jiù kū qǐlai le.",
        "german": "Kaum sah das Kind seine Mutter, fing es an zu weinen."
      },
      {
        "chinese": "他最近喜欢上了打篮球。",
        "pinyin": "Tā zuìjìn xǐhuan shang le dǎ lánqiú.",
        "german": "Er hat neuerdings Basketball für sich entdeckt."
      }
    ],
    "legacyIds": [
      "g:Verb + 起来",
      "Verb + 起来"
    ],
    "related": [
      "g:表示动作行为的持续：动词+下去/下来",
      "g:看起来",
      "g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下",
      "g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去",
      "g:趋向补语的引申用法：表示状态意义：动词/形容词+下来/下去/起来/过来/过去"
    ],
    "quiz": {
      "example": 1,
      "answer": "起来",
      "distractors": [
        {
          "text": "下去",
          "reason": "下去 bedeutet „weitermachen“; hier beginnt das Weinen aber erst."
        },
        {
          "text": "下来",
          "reason": "下来 bedeutet „bis jetzt durchgehalten“ oder eine Bewegung nach unten, keinen Beginn."
        },
        {
          "text": "过去",
          "reason": "过去 bezeichnet eine Bewegung hinüber oder weg; 哭过去 ergibt keinen Sinn."
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
    "id": "g:表示动作行为的持续：动词+下去/下来",
    "pattern": "表示动作行为的持续：动词+下去/下来",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 208,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "趋向补语2",
      "content": "（3）表示动作行为的持续：动词+下去/下来"
    },
    "meaning": "weitermachen bzw. bis jetzt durchhalten (Fortdauer einer Handlung)",
    "pinyin": "Verb + xiàqù",
    "formation": "Verb + 下去 (Fortsetzung ab jetzt)   ·   Verb + 下来 (Fortdauer bis jetzt)",
    "explanation": "下去 (xiàqu) hinter einem Verb bedeutet, dass eine Handlung von jetzt an weitergeht: 说下去 „weitererzählen“, 学下去 „weiterlernen“, 住下去 „weiter hier wohnen“. Häufig mit 继续 (jìxù), 坚持 (jiānchí) oder als Bitte: 请说下去. 下来 (xiàlai) dagegen blickt zurück: Eine Handlung hat von der Vergangenheit bis jetzt angedauert und ist durchgestanden – 坚持下来 „durchgehalten haben“, 一年学下来 „nach einem Jahr Lernen“. Faustregel: 下去 schaut nach vorn, 下来 zurück. Verneint als Potentialform: 看不下去 „nicht weiterlesen können“, 坚持不下来 „nicht durchhalten können“.",
    "notes": "Mit Adjektiven bezeichnen 下来 (xiàlai) und 下去 (xiàqu) eine Zustandsänderung (天黑下来了 „es wird dunkel“, 安静下来 „still werden“) – das ist ein eigener Punkt auf HSK 5. Wörtlich bedeuten beide „hinunter (weg/her)“: 走下去、走下来.",
    "examples": [
      {
        "chinese": "请你说下去，我在听。",
        "pinyin": "Qǐng nǐ shuō xiàqu, wǒ zài tīng.",
        "german": "Erzähl bitte weiter, ich höre zu."
      },
      {
        "chinese": "学汉语很难，可是我要学下去。",
        "pinyin": "Xué Hànyǔ hěn nán, kěshì wǒ yào xué xiàqu.",
        "german": "Chinesisch lernen ist schwer, aber ich will weitermachen."
      },
      {
        "chinese": "工作虽然很累，但是他坚持下来了。",
        "pinyin": "Gōngzuò suīrán hěn lèi, dànshì tā jiānchí xiàlai le.",
        "german": "Die Arbeit war zwar sehr anstrengend, aber er hat durchgehalten."
      }
    ],
    "legacyIds": [
      "g:Verb + 下去",
      "Verb + 下去"
    ],
    "related": [
      "g:表示动作行为的开始：动词+上/起来",
      "g:趋向补语的引申用法：表示状态意义：动词/形容词+下来/下去/起来/过来/过去",
      "g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去"
    ],
    "quiz": {
      "example": 0,
      "answer": "下去",
      "distractors": [
        {
          "text": "下来",
          "reason": "下来 blickt auf eine bis jetzt durchgehaltene Handlung zurück; „weitererzählen“ schaut nach vorn und braucht 下去."
        },
        {
          "text": "起来",
          "reason": "起来 bezeichnet den Beginn; der Sprecher erzählt aber schon und soll fortfahren."
        },
        {
          "text": "出来",
          "reason": "说出来 heißt „aussprechen, verraten“, nicht „weitererzählen“."
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
    "id": "g:动词+得/不+动词/形容词",
    "pattern": "动词+得/不+动词/形容词",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 209,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "可能补语1",
      "content": "动词+得/不+动词/形容词"
    },
    "meaning": "etwas (nicht) schaffen können: Potentialkomplement („verstehen können“, „nicht sehen können“)",
    "formation": "Verb + 得/不 + Resultativ- oder Richtungskomplement (Verb/Adjektiv)",
    "explanation": "Setzt man 得 (de) oder 不 (bu) zwischen ein Verb und sein Resultativ- oder Richtungskomplement, sagt der Satz, ob das Ergebnis erreicht werden kann: 听懂 (tīngdǒng) → 听得懂 (tīng de dǒng) „verstehen können“ / 听不懂 (tīng bu dǒng) „nicht verstehen können“, 看见 (kànjiàn) → 看不见 (kàn bu jiàn) „nicht sehen können“, 做完 (zuòwán) → 做得完 (zuò de wán) „schaffen können“, 回来 (huílai) → 回不来 (huí bu lái) „nicht zurückkommen können“. Beide Wörter sind unbetont. Die verneinte Form ist viel häufiger als die bejahte; gefragt wird mit 吗 oder 听得懂听不懂. Das Potentialkomplement drückt aus, dass Umstände oder Fähigkeit das Ergebnis verhindern; für Erlaubnis oder Verbot nimmt man 能/不能 (bù néng). Typischer Fehler: *不能听懂 statt 听不懂.",
    "notes": "Ein Objekt steht dahinter (我听不懂你的话) oder wird vorangestellt (你的话我听不懂). In 把-Sätzen ist das Potentialkomplement nicht möglich. Weitere Stufen: Verb + 得/不 + 了 „überhaupt können“ auf HSK 4 und Verb + 得/不得 (bu de) auf HSK 5.",
    "examples": [
      {
        "chinese": "字太小了，我看不清楚。",
        "pinyin": "Zì tài xiǎo le, wǒ kàn bu qīngchu.",
        "german": "Die Schrift ist zu klein, ich kann sie nicht richtig lesen."
      },
      {
        "chinese": "这么多菜，我们两个人吃得完吗？",
        "pinyin": "Zhème duō cài, wǒmen liǎng ge rén chī de wán ma?",
        "german": "So viel Essen – schaffen wir zwei das überhaupt?"
      },
      {
        "chinese": "他说的上海话你听得懂吗？",
        "pinyin": "Tā shuō de Shànghǎihuà nǐ tīng de dǒng ma?",
        "german": "Verstehst du das Shanghainesisch, das er spricht?"
      },
      {
        "chinese": "太晚了，今天我回不来了。",
        "pinyin": "Tài wǎn le, jīntiān wǒ huí bu lái le.",
        "german": "Es ist zu spät, heute schaffe ich es nicht mehr zurück."
      }
    ],
    "legacyIds": [
      "g:Verb + 得/不 + Komplement",
      "Verb + 得/不 + Komplement"
    ],
    "related": [
      "g:动词+得/不+了",
      "g:动词+得/不得",
      "g:动词+到/住/走/上",
      "g:动词+错/懂/好/会/完"
    ],
    "quiz": {
      "example": 0,
      "answer": "不",
      "distractors": [
        {
          "text": "得",
          "reason": "看得清楚 hieße „ich kann es gut lesen“ – das Gegenteil der Übersetzung."
        },
        {
          "text": "没",
          "reason": "没 steht vor dem Verb (没看清楚 „habe es nicht deutlich gesehen“), nicht zwischen Verb und Komplement."
        },
        {
          "text": "很",
          "reason": "很 steht vor einem Adjektiv, nicht zwischen Verb und Komplement; *看很清楚 ist falsch."
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
    "id": "g:形容词+得很",
    "pattern": "形容词+得很",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 210,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "程度补语1",
      "content": "（1）形容词+得很"
    },
    "meaning": "sehr, richtig … (verstärkendes Gradkomplement nach dem Adjektiv)",
    "formation": "Adjektiv + 得很",
    "notes": "Vergleiche: 极了 („äußerst“) ist noch stärker; 得多 dagegen bedeutet „viel …-er“ und steht nur in Vergleichen (今天冷得多). Mit Verben und einem beschreibenden Teil (说得很好) liegt ein Zustandskomplement vor, kein Gradkomplement.",
    "explanation": "得很 (de hěn) hinter einem Adjektiv verstärkt es: 忙得很 „sehr beschäftigt“, 冷得很 „richtig kalt“. Es ist ein Gradkomplement und klingt kräftiger und umgangssprachlicher als 很 + Adjektiv. Auch Gefühlsverben können davor stehen (喜欢得很). Davor steht kein weiteres Gradadverb (*很忙得很), und die Form wird nicht als Attribut vor einem Nomen gebraucht (*忙得很的人); sie steht meist als Prädikat am Satz- oder Teilsatzende. Gesprochen kann 好得很！ auch ironisch klingen („na prima!“).",
    "examples": [
      {
        "chinese": "最近工作忙得很，没时间休息。",
        "pinyin": "Zuìjìn gōngzuò máng de hěn, méi shíjiān xiūxi.",
        "german": "In letzter Zeit ist bei der Arbeit sehr viel los, ich habe keine Zeit zum Ausruhen."
      },
      {
        "chinese": "这个地方冬天冷得很。",
        "pinyin": "Zhège dìfang dōngtiān lěng de hěn.",
        "german": "Hier ist es im Winter richtig kalt."
      },
      {
        "chinese": "这家饭馆的菜好吃得很。",
        "pinyin": "Zhè jiā fànguǎn de cài hǎochī de hěn.",
        "german": "Das Essen in diesem Restaurant ist ausgesprochen lecker."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "得很",
      "distractors": [
        {
          "text": "很",
          "reason": "很 steht vor dem Adjektiv (很冷), nicht dahinter."
        },
        {
          "text": "非常",
          "reason": "非常 ist ein Adverb und muss vor dem Adjektiv stehen (非常冷)."
        },
        {
          "text": "得多",
          "reason": "得多 bedeutet „viel …-er“ und braucht einen Vergleich; hier wird nichts verglichen."
        }
      ]
    },
    "related": [
      "g:形容词/动词+极了/坏了",
      "g:形容词/心理动词+死了/厉害",
      "g:形容词/心理动词+得+不得了"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:形容词/动词+极了/坏了",
    "pattern": "形容词/动词+极了/坏了",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 211,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "程度补语1",
      "content": "（2）形容词/动词+极了/坏了"
    },
    "meaning": "äußerst …, total … (Gradkomplement; „völlig erschöpft“, „herrlich“)",
    "formation": "Adjektiv/Gefühlsverb + 极了   ·   Adjektiv/Gefühlsverb + 坏了",
    "explanation": "极了 (jí le) und 坏了 (huài le) hinter einem Adjektiv oder Gefühlsverb drücken einen sehr hohen Grad aus. 极了 passt zu fast allen Eigenschaften, besonders zu positiven: 好极了 „ausgezeichnet“, 漂亮 (piàoliang) 极了, 喜欢极了. 坏了 steht vor allem bei körperlichen oder seelischen Zuständen und klingt sehr emotional: 累坏了 „völlig erschöpft“, 饿坏了 „halb verhungert“, 急坏了 „außer sich vor Sorge“; auch positive Gefühle sind möglich (高兴坏了). Bei Bewertungen wie 好 oder 漂亮 steht dagegen kein 坏了. Vor dem Adjektiv steht kein weiteres Gradadverb (*很累极了). Beide Formen sind umgangssprachlich und stehen als Prädikat am Satzende.",
    "notes": "Nicht verwechseln mit 坏了 (huài le) als Resultativ („kaputt“): 手机摔坏了 „das Handy ist kaputtgegangen“. Grob abgestuft: 很累 < 累得很 < 累极了/累坏了. Noch umgangssprachlicher ist 死了 (sǐ le), ein eigener Punkt auf HSK 4.",
    "examples": [
      {
        "chinese": "今天的天气好极了。",
        "pinyin": "Jīntiān de tiānqì hǎo jí le.",
        "german": "Das Wetter ist heute herrlich."
      },
      {
        "chinese": "走了一天路，我累坏了。",
        "pinyin": "Zǒu le yì tiān lù, wǒ lèi huài le.",
        "german": "Nach einem ganzen Tag zu Fuß bin ich völlig erschöpft."
      },
      {
        "chinese": "听说考试通过了，她高兴极了。",
        "pinyin": "Tīngshuō kǎoshì tōngguò le, tā gāoxìng jí le.",
        "german": "Als sie hörte, dass sie die Prüfung bestanden hat, freute sie sich riesig."
      },
      {
        "chinese": "孩子一天没吃东西，饿坏了。",
        "pinyin": "Háizi yì tiān méi chī dōngxi, è huài le.",
        "german": "Das Kind hat den ganzen Tag nichts gegessen und ist ganz ausgehungert."
      }
    ],
    "legacyIds": [
      "g:Verb/Adj + 极了",
      "Verb/Adj + 极了"
    ],
    "related": [
      "g:形容词+得很",
      "g:形容词/心理动词+死了/厉害",
      "g:形容词/心理动词+得+不得了",
      "g:太"
    ],
    "quiz": {
      "example": 1,
      "answer": "坏了",
      "distractors": [
        {
          "text": "很",
          "reason": "很 steht vor dem Adjektiv (我很累), nicht dahinter."
        },
        {
          "text": "太",
          "reason": "太 steht vor dem Adjektiv (太累了); *累太 ist falsch."
        },
        {
          "text": "多了",
          "reason": "多了 bedeutet „viel …-er“ und braucht einen Vergleich; hier wird nichts verglichen."
        }
      ],
      "accepted": [
        "极了"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:数量补语3：表示动作结束到某个时间点的间隔时间",
    "pattern": "数量补语3：表示动作结束到某个时间点的间隔时间",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Komplemente",
    "syllabus": {
      "no": 212,
      "category": "句子成分",
      "categoryName": "补语",
      "item": "数量补语3",
      "content": "表示动作结束到某个时间点的间隔时间"
    },
    "meaning": "seit … (Zeit, die seit Abschluss einer Handlung vergangen ist)",
    "formation": "Verb (punktuell) (+ Objekt) + Zeitdauer + 了",
    "notes": "Vergleiche mit der Dauer einer Handlung (数量补语2): 我学了三年汉语 „ich habe drei Jahre lang Chinesisch gelernt“ – dort dauert die Handlung selbst an. Bei 走 sind beide Lesarten möglich: 他走了半个小时了 kann „er ist seit einer halben Stunde weg“ oder „er geht schon eine halbe Stunde“ bedeuten.",
    "explanation": "Bei Verben, die einen Zeitpunkt statt einer Dauer bezeichnen – 来、到、走、毕业 (bìyè)、结婚 (jiéhūn)、离开 (líkāi)、开始 (kāishǐ) –, gibt eine Zeitangabe hinter dem Verb an, wie viel Zeit seit diesem Ereignis bis jetzt (oder bis zu einem anderen Zeitpunkt) vergangen ist: 他来中国三年了 „er ist seit drei Jahren in China“. Ein Objekt steht vor der Zeitangabe (来中国三年), nicht dahinter. Das 了 am Satzende zeigt, dass der Zustand bis jetzt reicht; oft steht 已经 (yǐjīng) davor. Im Deutschen entspricht das „seit …“ oder „vor … (hat er …)“.",
    "examples": [
      {
        "chinese": "我哥哥大学毕业两年了。",
        "pinyin": "Wǒ gēge dàxué bìyè liǎng nián le.",
        "german": "Mein Bruder hat sein Studium vor zwei Jahren abgeschlossen."
      },
      {
        "chinese": "他来中国已经半年了。",
        "pinyin": "Tā lái Zhōngguó yǐjīng bàn nián le.",
        "german": "Er ist schon seit einem halben Jahr in China."
      },
      {
        "chinese": "电影开始十分钟了，我们快进去吧。",
        "pinyin": "Diànyǐng kāishǐ shí fēnzhōng le, wǒmen kuài jìnqu ba.",
        "german": "Der Film läuft schon seit zehn Minuten, lass uns schnell reingehen."
      }
    ],
    "related": [
      "g:数量补语2：表示动作持续的时间",
      "g:动词+动量补语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:“怎样+动词”的特指问句",
    "pattern": "“怎样+动词”的特指问句",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 213,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "疑问句",
      "content": "“怎样+动词”的特指问句"
    },
    "meaning": "wie …? – Frage nach Art und Weise oder Methode einer Handlung",
    "formation": "(Subjekt +) 怎样 + Verb (+ Objekt)？",
    "notes": "怎样 (zěnyàng) hat weitere Gebrauchsweisen: als Prädikat (你觉得怎样？ „Was hältst du davon?“) und als Attribut (他是怎样的人？). Diese gehören zum Wortpunkt 怎样.",
    "explanation": "怎样 (zěnyàng) direkt vor einem Verb fragt nach der Art und Weise oder Methode: 这个字怎样写？ „Wie schreibt man dieses Zeichen?“ Es bedeutet hier dasselbe wie 怎么 (zěnme), klingt aber etwas sorgfältiger und schriftlicher; im Alltag hört man öfter 怎么. Da 怎样 schon das Fragewort ist, steht kein 吗 am Ende. Anders als 怎么 kann 怎样 nicht „warum“ bedeuten: 你怎么没来？ „Warum bist du nicht gekommen?“ lässt sich nicht mit 怎样 bilden. Mit 是……的 fragt man nach der Art und Weise eines vergangenen Ereignisses: 你们是怎样认识的？",
    "examples": [
      {
        "chinese": "这个汉字怎样写？",
        "pinyin": "Zhège Hànzì zěnyàng xiě?",
        "german": "Wie schreibt man dieses Schriftzeichen?"
      },
      {
        "chinese": "请问，去火车站怎样走？",
        "pinyin": "Qǐngwèn, qù huǒchēzhàn zěnyàng zǒu?",
        "german": "Entschuldigung, wie komme ich zum Bahnhof?"
      },
      {
        "chinese": "你们是怎样认识的？",
        "pinyin": "Nǐmen shì zěnyàng rènshi de?",
        "german": "Wie habt ihr euch kennengelernt?"
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "怎样",
      "distractors": [
        {
          "text": "什么",
          "reason": "什么 fragt nach einem Ding („was“) und steht nicht als „wie“ vor dem Verb."
        },
        {
          "text": "为什么",
          "reason": "为什么 fragt nach dem Grund („warum“), nicht nach der Art und Weise."
        },
        {
          "text": "多少",
          "reason": "多少 fragt nach einer Menge („wie viel“) und steht vor einem Nomen."
        }
      ],
      "accepted": [
        "怎么"
      ]
    },
    "related": [
      "g:怎样",
      "g:疑问句：特指问句",
      "g:怎么"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:用反问句表示强调：不是……吗？",
    "pattern": "用反问句表示强调：不是……吗？",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzarten",
    "syllabus": {
      "no": 214,
      "category": "句子的类型",
      "categoryName": "句类",
      "item": "反问句1",
      "content": "用反问句表示强调：不是……吗？"
    },
    "meaning": "… doch …! (rhetorische Frage mit verneintem „sein“ zur Betonung)",
    "formation": "(Subjekt +) 不是 + Aussage + 吗？",
    "notes": "难道 (nándào)……吗 auf HSK 4 ist eine stärkere rhetorische Frage („soll das etwa heißen …?“). Nicht verwechseln mit 不是 (bú shì)……，而是 (ér shì)…… „nicht …, sondern …“ – dort fehlt 吗 und es gibt keine Frage.",
    "explanation": "Der Form nach ist 不是 (bú shì)……吗 eine verneinte Frage, gemeint ist aber eine nachdrückliche Bejahung: 这不是你的手机吗？ „Das ist doch dein Handy!“ Der Sprecher erinnert an etwas Bekanntes, wundert sich oder macht einen leichten Vorwurf, weil die Lage dem Bekannten zu widersprechen scheint: 你不是说今天不来吗？ „Du hast doch gesagt, du kommst heute nicht!“ Eine Antwort wird oft gar nicht erwartet. 不是 steht vor dem Teil, der betont wird; auch vor einem Verb (你不是喜欢吃饺子吗？). Häufig folgt ein Satz mit 怎么 („… warum dann …?“). Gesprochen und emotional.",
    "examples": [
      {
        "chinese": "这不是你的手机吗？",
        "pinyin": "Zhè bú shì nǐ de shǒujī ma?",
        "german": "Das ist doch dein Handy!"
      },
      {
        "chinese": "你不是说今天不来吗？",
        "pinyin": "Nǐ bú shì shuō jīntiān bù lái ma?",
        "german": "Hast du nicht gesagt, dass du heute nicht kommst?"
      },
      {
        "chinese": "你不是已经吃过饭了吗？",
        "pinyin": "Nǐ bú shì yǐjīng chīguo fàn le ma?",
        "german": "Du hast doch schon gegessen!"
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "不是",
      "distractors": [
        {
          "text": "是",
          "reason": "这是你的手机吗？ wäre eine echte Frage („Ist das dein Handy?“), keine Betonung „doch“."
        },
        {
          "text": "没",
          "reason": "没 verneint Handlungen und 有, nicht das Gleichsetzungsverb 是."
        },
        {
          "text": "不",
          "reason": "Ohne 是 fehlt das Verb; *这不你的手机 ist ungrammatisch."
        }
      ]
    },
    "related": [
      "g:难道……吗？",
      "g:反问句2：由疑问代词构成的反问句",
      "g:不是……，而是……",
      "g:岂不是"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语+把+宾语+动词+在/到+处所",
    "pattern": "主语+把+宾语+动词+在/到+处所",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 215,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "“把”字句1",
      "content": "（1）主语+把+宾语+动词+在/到+处所"
    },
    "meaning": "etwas irgendwohin legen, stellen, bringen (Objekt vorangestellt + Verb + Ort)",
    "formation": "Subjekt + 把 + Objekt + Verb + 在/到 + Ort",
    "notes": "Weitere 把-Stufen derselben Ebene: 把 + Sache + Verb + 给 + Person (übergeben) und 把 + Verb + Komplement (Ergebnis). 在 vor dem Verb (在桌子上放书) beschreibt dagegen nur, wo die Handlung stattfindet.",
    "explanation": "Wird ein bestimmtes Objekt durch eine Handlung an einen Ort gebracht, braucht man im Chinesischen einen 把-Satz: 我把书放在桌子上 „Ich lege das Buch auf den Tisch“. 在 nennt den Ort, an dem das Objekt danach ist (放在、写在、停在、挂在), 到 betont das Ziel einer Bewegung (送到、搬到、带到); oft sind beide möglich. Der Satz *我放书在桌子上 ist falsch – das Objekt muss mit 把 vor das Verb. Das Objekt ist bestimmt (dieses Buch, mein Auto). Verneinung, Modalverben und Zeitangaben stehen vor 把: 我没把车停在这儿, 你可以把车停在这儿. Oft steht 了 am Ende, wenn die Handlung abgeschlossen ist.",
    "examples": [
      {
        "chinese": "我把车停在学校门口了。",
        "pinyin": "Wǒ bǎ chē tíng zài xuéxiào ménkǒu le.",
        "german": "Ich habe das Auto vor dem Schultor geparkt."
      },
      {
        "chinese": "请把你的名字写在这里。",
        "pinyin": "Qǐng bǎ nǐ de míngzi xiě zài zhèlǐ.",
        "german": "Bitte schreib deinen Namen hierhin."
      },
      {
        "chinese": "他把妈妈送到了火车站。",
        "pinyin": "Tā bǎ māma sòng dào le huǒchēzhàn.",
        "german": "Er hat seine Mutter zum Bahnhof gebracht."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "在",
      "distractors": [
        {
          "text": "从",
          "reason": "从 nennt den Ausgangspunkt („von … aus“); geparkt wird das Auto aber an einem Ort."
        },
        {
          "text": "给",
          "reason": "给 führt einen Empfänger ein, keinen Ort."
        },
        {
          "text": "着",
          "reason": "着 bezeichnet einen andauernden Zustand und kann keine Ortsangabe anschließen."
        }
      ],
      "accepted": [
        "到"
      ]
    },
    "related": [
      "g:主语+把+宾语1+动词（+给）+宾语2",
      "g:主语+把+宾语+动词+结果补语/趋向补语/状态补语",
      "g:主语+把+宾语+动词+了",
      "g:主语+把+宾语+状语+动词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语+把+宾语1+动词（+给）+宾语2",
    "pattern": "主语+把+宾语1+动词（+给）+宾语2",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 216,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "“把”字句1",
      "content": "（2）主语+把+宾语1+动词（+给）+宾语2"
    },
    "meaning": "jemandem etwas geben, schicken, zurückgeben (Sache vorangestellt + Verb + Empfänger)",
    "formation": "Subjekt + 把 + Sache + Verb (+ 给) + Person",
    "notes": "Ohne 把 geht oft auch: 我借给他一本书 / 我送给她一束花 – dann ist die Sache meist unbestimmt oder neu. Mit 把 steht die schon bekannte Sache im Vordergrund. Bei 借给 (jiègěi) vs. 借: 借给 heißt „verleihen an“, 跟/向……借 „sich leihen von“.",
    "explanation": "Mit diesem 把-Satz wird ein bestimmtes Ding an eine Person übergeben. Die Sache steht nach 把, die Person nach dem Verb: 把书还给他 „ihm das Buch zurückgeben“. Typische Verben sind 还、送、借、交、发、卖、寄 + 给. Bei 给 selbst als Verb fällt das zweite 给 weg (把钱给我). 给 bleibt hinter dem Verb, wenn eine Übergabe stattfindet; es ist nicht durch 到 (Ort) ersetzbar. Wie in allen 把-Sätzen ist die Sache bestimmt, und Verneinung oder Modalverb stehen vor 把 (我还没把钱还给他).",
    "examples": [
      {
        "chinese": "请把这本书还给王老师。",
        "pinyin": "Qǐng bǎ zhè běn shū huán gěi Wáng lǎoshī.",
        "german": "Bitte gib dieses Buch Lehrer Wang zurück."
      },
      {
        "chinese": "我已经把照片发给你了。",
        "pinyin": "Wǒ yǐjīng bǎ zhàopiàn fā gěi nǐ le.",
        "german": "Ich habe dir die Fotos schon geschickt."
      },
      {
        "chinese": "他把自己的自行车借给了同学。",
        "pinyin": "Tā bǎ zìjǐ de zìxíngchē jiè gěi le tóngxué.",
        "german": "Er hat sein Fahrrad einem Mitschüler geliehen."
      },
      {
        "chinese": "你把那杯水给我吧。",
        "pinyin": "Nǐ bǎ nà bēi shuǐ gěi wǒ ba.",
        "german": "Gib mir doch mal das Glas Wasser."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "给",
      "distractors": [
        {
          "text": "到",
          "reason": "到 nennt einen Ort (还到图书馆), keinen Empfänger wie Lehrer Wang."
        },
        {
          "text": "在",
          "reason": "在 nennt den Ort, an dem etwas danach ist, nicht die Person, die es bekommt."
        },
        {
          "text": "对",
          "reason": "对 steht vor dem Verb („gegenüber“), nicht hinter 还 als Empfängerangabe."
        }
      ]
    },
    "related": [
      "g:主语+把+宾语+动词+在/到+处所",
      "g:主语+把+宾语+动词+结果补语/趋向补语/状态补语",
      "g:给"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语+把+宾语+动词+结果补语/趋向补语/状态补语",
    "pattern": "主语+把+宾语+动词+结果补语/趋向补语/状态补语",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 217,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "“把”字句1",
      "content": "（3）主语+把+宾语+动词+结果补语/趋向补语/状态补语"
    },
    "meaning": "etwas so behandeln, dass ein Ergebnis eintritt (Objekt vorangestellt + Verb + Komplement)",
    "formation": "Subjekt + 把 + Objekt + Verb + Resultativ-/Richtungs-/Zustandskomplement",
    "notes": "Verben ohne Einwirkung auf ein Objekt (喜欢 (xǐhuan)、知道 (zhīdào)、有、是、来) bilden keine 把-Sätze. Die anderen Stufen (把 + Verb + 在/到 + Ort; 把 + Sache + Verb + 给 + Person) sind eigene Punkte derselben Ebene.",
    "explanation": "Der 把-Satz betont, was mit einem bestimmten Objekt geschieht und in welchem Zustand es danach ist. Deshalb darf das Verb nicht allein stehen (*我把作业做), sondern braucht ein Komplement: ein Resultativkomplement (把作业做完 „die Hausaufgaben fertig machen“), ein Richtungskomplement (把护照拿出来 „den Pass herausholen“) oder ein Zustandskomplement mit 得 (把房间打扫得很干净 „das Zimmer blitzsauber putzen“). Das Objekt ist bestimmt. Verneinung und Modalverben stehen vor 把 (我还没把作业做完). Ein Potentialkomplement ist im 把-Satz nicht möglich (*把作业做得完).",
    "examples": [
      {
        "chinese": "我已经把作业做完了。",
        "pinyin": "Wǒ yǐjīng bǎ zuòyè zuòwán le.",
        "german": "Ich habe die Hausaufgaben schon fertig."
      },
      {
        "chinese": "请把你的护照拿出来。",
        "pinyin": "Qǐng bǎ nǐ de hùzhào ná chūlai.",
        "german": "Bitte holen Sie Ihren Pass heraus."
      },
      {
        "chinese": "妈妈把房间打扫得很干净。",
        "pinyin": "Māma bǎ fángjiān dǎsǎo de hěn gānjìng.",
        "german": "Mama hat das Zimmer blitzsauber geputzt."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "把",
      "distractors": [
        {
          "text": "被",
          "reason": "被 macht einen Passivsatz: Die Hausaufgaben hätten dann „mich“ gemacht."
        },
        {
          "text": "对",
          "reason": "对 bedeutet „gegenüber“ und kann das Objekt nicht vor 做完 stellen."
        },
        {
          "text": "让",
          "reason": "让 heißt „lassen, veranlassen“; *我让作业做完 ergibt keinen Sinn."
        }
      ]
    },
    "related": [
      "g:主语+把+宾语+动词+在/到+处所",
      "g:主语+把+宾语1+动词（+给）+宾语2",
      "g:主语+把+宾语+动词+了",
      "g:主语+被+宾语+动词+其他成分",
      "g:动词+得/不+动词/形容词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语+被+宾语+动词+其他成分",
    "pattern": "主语+被+宾语+动词+其他成分",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 218,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "被动句1",
      "content": "（1）主语+被+宾语+动词+其他成分"
    },
    "meaning": "Passiv mit Urheber: von jemandem … werden",
    "formation": "Subjekt (Betroffenes) + 被 + Handelnder + Verb + weiteres Element (了 / Komplement)",
    "notes": "Umgangssprachlich ersetzen 叫 und 让 das 被 (HSK 4); sie brauchen aber immer einen Handelnden. Ohne Handelnden steht 被 direkt vor dem Verb (eigener Punkt). Gegenstück: der 把-Satz, in dem der Handelnde Subjekt ist.",
    "explanation": "被 (bèi) bildet das Passiv: Das Betroffene steht vorne, der Handelnde folgt nach 被: 蛋糕被弟弟吃完了 „Der Kuchen wurde von meinem kleinen Bruder aufgegessen“. Wie beim 把-Satz steht das Verb nicht allein, sondern mit 了 oder einem Komplement, das das Ergebnis zeigt (吃完了、拿走了、叫到办公室去了). Traditionell beschreibt das 被-Passiv vor allem unangenehme Ereignisse; heute wird es auch neutral gebraucht. Verneinung und Modalverben stehen vor 被: 我的自行车没被人骑走. Viele deutsche Passivsätze werden im Chinesischen aber ohne 被 ausgedrückt (信写好了).",
    "examples": [
      {
        "chinese": "蛋糕被弟弟吃完了。",
        "pinyin": "Dàngāo bèi dìdi chīwán le.",
        "german": "Der Kuchen ist von meinem kleinen Bruder aufgegessen worden."
      },
      {
        "chinese": "我的自行车被人骑走了。",
        "pinyin": "Wǒ de zìxíngchē bèi rén qízǒu le.",
        "german": "Jemand ist mit meinem Fahrrad weggefahren."
      },
      {
        "chinese": "他被老师叫到办公室去了。",
        "pinyin": "Tā bèi lǎoshī jiào dào bàngōngshì qù le.",
        "german": "Er wurde vom Lehrer ins Büro gerufen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "被",
      "distractors": [
        {
          "text": "把",
          "reason": "Mit 把 wäre der Kuchen der Handelnde, der den Bruder aufisst – der Sinn kehrt sich um."
        },
        {
          "text": "对",
          "reason": "对 bedeutet „gegenüber“ und leitet keinen Handelnden im Passiv ein."
        },
        {
          "text": "跟",
          "reason": "跟 bedeutet „mit, zusammen mit“; der Kuchen kann nicht zusammen mit dem Bruder essen."
        }
      ],
      "accepted": [
        "让",
        "叫"
      ]
    },
    "related": [
      "g:主语+被+动词+其他成分",
      "g:主语+叫/让+宾语+动词+其他成分",
      "g:主语+把+宾语+动词+结果补语/趋向补语/状态补语",
      "g:受事主语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语+被+动词+其他成分",
    "pattern": "主语+被+动词+其他成分",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 219,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "被动句1",
      "content": "（2）主语+被+动词+其他成分"
    },
    "meaning": "Passiv ohne Urheber: … wurde … (Handelnder nicht genannt)",
    "formation": "Subjekt (Betroffenes) + 被 + Verb + weiteres Element (了 / Komplement)",
    "notes": "Wenn das Betroffene klar keine handelnde Person sein kann, ist ein Satz ohne 被 oft natürlicher (饭做好了 statt 饭被做好了). Mit Handelndem: 被 + Person + Verb (eigener Punkt).",
    "explanation": "Ist der Handelnde unbekannt oder unwichtig, steht 被 (bèi) direkt vor dem Verb: 我的钱包被偷了 „Mein Geldbeutel ist gestohlen worden“ – 偷 (tōu) heißt „stehlen“. Auch hier braucht das Verb ein weiteres Element – 了, ein Komplement (借走了、洗干净了) o. Ä.; *蛋糕被吃 allein ist unvollständig. Das Muster beschreibt oft Unangenehmes (被偷、被骗), wird aber auch neutral gebraucht. Verneinung und Modalverben stehen vor 被 (书还没被借走). Nur 被 kann ohne Handelnden stehen; bei 叫 und 让 muss er genannt werden.",
    "examples": [
      {
        "chinese": "桌子上的蛋糕被吃完了。",
        "pinyin": "Zhuōzi shang de dàngāo bèi chīwán le.",
        "german": "Der Kuchen auf dem Tisch ist aufgegessen worden."
      },
      {
        "chinese": "那本书已经被借走了。",
        "pinyin": "Nà běn shū yǐjīng bèi jièzǒu le.",
        "german": "Das Buch ist schon ausgeliehen."
      },
      {
        "chinese": "我的名字被写错了。",
        "pinyin": "Wǒ de míngzi bèi xiěcuò le.",
        "german": "Mein Name ist falsch geschrieben worden."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "被",
      "distractors": [
        {
          "text": "让",
          "reason": "让 kann zwar Passiv bilden, braucht aber einen Handelnden (让弟弟吃完了); direkt vor dem Verb geht nur 被."
        },
        {
          "text": "把",
          "reason": "Mit 把 müsste der Kuchen der Handelnde sein, der etwas aufisst – das ergibt keinen Sinn."
        },
        {
          "text": "对",
          "reason": "对 bedeutet „gegenüber“ und kann kein Passiv bilden."
        }
      ]
    },
    "related": [
      "g:主语+被+宾语+动词+其他成分",
      "g:主语+叫/让+宾语+动词+其他成分",
      "g:受事主语"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:“着”表示动作的伴随：动词1+着+动词2",
    "pattern": "“着”表示动作的伴随：动词1+着+动词2",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 220,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "连动句2",
      "content": "“着”表示动作的伴随：动词1+着+动词2"
    },
    "meaning": "etwas lächelnd, im Stehen, zu Fuß … tun (erstes Verb = Begleitumstand)",
    "formation": "Subjekt + Verb₁ + 着 (+ Objekt) + Verb₂ (+ Objekt)",
    "notes": "Bei 一边 (yìbiān) + Verb₁, 一边 + Verb₂ laufen zwei gleichwertige Handlungen parallel; bei Verb₁ + 着 + Verb₂ ist die erste nur der Begleitumstand der zweiten. Das einfache 着 für einen andauernden Zustand (门开着) ist ein eigener Punkt (HSK 2).",
    "explanation": "In dieser Verbreihe beschreibt das erste Verb mit 着 (zhe), in welchem Zustand oder auf welche Weise die zweite, eigentliche Handlung geschieht: 笑着说 „lächelnd sagen“, 站着吃饭 „im Stehen essen“, 走着去 „zu Fuß hingehen“. Das erste Verb ist also eine Art Adverbial – die Hauptaussage liegt beim zweiten Verb, und dort stehen auch 了, Ergänzungen und Objekte, die zur Haupthandlung gehören. 着 steht direkt hinter dem ersten Verb (bzw. hinter Verb + Objekt: 带着孩子去). Typische Fehler: 着 hinter das zweite Verb setzen oder 了 an das erste Verb hängen (*笑了说). Das Muster ist in gesprochener und geschriebener Sprache gleichermaßen üblich.",
    "examples": [
      {
        "chinese": "他笑着走进了教室。",
        "pinyin": "Tā xiàozhe zǒujìnle jiàoshì.",
        "german": "Er kam lächelnd ins Klassenzimmer."
      },
      {
        "chinese": "学校不远，我们走着去吧。",
        "pinyin": "Xuéxiào bù yuǎn, wǒmen zǒuzhe qù ba.",
        "german": "Die Schule ist nicht weit, lass uns zu Fuß hingehen."
      },
      {
        "chinese": "别躺着看书，对眼睛不好。",
        "pinyin": "Bié tǎngzhe kàn shū, duì yǎnjing bù hǎo.",
        "german": "Lies nicht im Liegen, das ist schlecht für die Augen."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "着",
      "distractors": [
        {
          "text": "了",
          "reason": "了 markiert den Abschluss einer Handlung; „lächelnd“ als Begleitumstand verlangt 着, und 了 steht hier schon beim Hauptverb."
        },
        {
          "text": "过",
          "reason": "过 drückt eine Erfahrung aus („schon einmal gelächelt“) und kann keinen Begleitumstand zum zweiten Verb bilden."
        },
        {
          "text": "得",
          "reason": "得 leitet eine Bewertung oder ein Ergebnis ein (笑得很开心); danach kann kein zweites Hauptverb wie 走进 folgen."
        }
      ]
    },
    "related": [
      "g:连动句1：前一动作是后一动作的方式",
      "g:连动句1：前后动作先后发生，后一动作是前一动作的目的",
      "g:动词+着：（1）表示状态的持续",
      "g:一边……，一边……",
      "g:着"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A比B+更/还+形容词",
    "pattern": "A比B+更/还+形容词",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 221,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "比较句2",
      "content": "（1）A比B+更/还+形容词"
    },
    "meaning": "A ist noch … als B (verstärkter Vergleich)",
    "pinyin": "bǐ…gèng/hái…",
    "examples": [
      {
        "chinese": "今天比昨天更冷。",
        "pinyin": "Jīntiān bǐ zuótiān gèng lěng.",
        "german": "Heute ist es noch kälter als gestern."
      },
      {
        "chinese": "她比我还努力。",
        "pinyin": "Tā bǐ wǒ hái nǔlì.",
        "german": "Sie ist sogar noch fleißiger als ich."
      },
      {
        "chinese": "坐地铁比坐出租车更快。",
        "pinyin": "Zuò dìtiě bǐ zuò chūzūchē gèng kuài.",
        "german": "Mit der U-Bahn ist man noch schneller als mit dem Taxi."
      }
    ],
    "legacyIds": [
      "g:比…更/还…",
      "比…更/还…"
    ],
    "formation": "A + 比 + B + 更/还 + Adjektiv",
    "notes": "Verneinung: A 没有 (méiyǒu) B 那么 (nàme) + Adjektiv („nicht so … wie“) oder A 不比 (bù bǐ) B + Adjektiv („nicht …er als“, eigener Punkt). Der einfache Vergleich ohne 更/还 ist ein Punkt von HSK 2.",
    "explanation": "Mit 更 (gèng) oder 还 (hái) vor dem Adjektiv sagt der Vergleich „A ist noch … als B“. Damit wird vorausgesetzt, dass B die Eigenschaft schon in gewissem Maß hat: 今天比昨天更冷 heißt, dass es gestern auch schon kalt war. 更 ist neutral und auch schriftlich üblich; 还 klingt gesprochener und oft emotionaler – es kann Überraschung oder Übertreibung ausdrücken (他比我还紧张 „er ist sogar noch nervöser als ich“). Typischer Fehler: im 比-Satz 很, 非常 (fēicháng) oder 太 vor das Adjektiv setzen (*今天比昨天很冷); vor dem Adjektiv stehen hier vor allem 更 und 还. Der Unterschied in Zahlen oder „viel/etwas“ steht dagegen hinter dem Adjektiv (比昨天冷多了).",
    "quiz": {
      "example": 0,
      "answer": "更",
      "distractors": [
        {
          "text": "很",
          "reason": "很 kann im 比-Satz nicht vor dem Adjektiv stehen; der Vergleich selbst drückt den Grad aus."
        },
        {
          "text": "非常",
          "reason": "非常 ist wie 很 ein Gradadverb, das sich nicht mit 比 verbindet."
        },
        {
          "text": "最",
          "reason": "最 bildet den Superlativ („am kältesten“) und passt nicht zu einem Vergleich zweier Dinge mit 比."
        }
      ],
      "accepted": [
        "还"
      ]
    },
    "related": [
      "g:A比B+形容词",
      "g:A比B+形容词+数量补语/程度补语",
      "g:A不比B+形容词",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:A跟B一样+形容词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A跟B一样",
    "pattern": "A跟B一样",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 222,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "比较句2",
      "content": "（2）A跟B一样"
    },
    "meaning": "A ist (genau) wie B, A und B sind gleich",
    "formation": "A + 跟 + B + (不) 一样",
    "notes": "Mit einem Adjektiv danach (跟他一样高) nennt der Satz, worin A und B gleich sind – das ist der nächste Punkt. Für „nicht so … wie“ nimmt man meist 没有 (méiyǒu) B 那么 (nàme) + Adjektiv, einen Punkt von HSK 2.",
    "explanation": "一样 (yíyàng) „gleich“ ist hier selbst das Prädikat: Der Satz sagt nur, dass A und B gleich (oder mit 不一样 (bù yíyàng) verschieden) sind, ohne eine bestimmte Eigenschaft zu nennen. 跟 (gēn) steht wie eine Präposition vor B; statt 跟 ist auch 和 (hé) üblich. Verneint wird 一样, nicht 跟: 跟……不一样 „anders als“. Fragen bildet man mit 吗 oder 一样不一样. Oft wird ein gemeinsames Wort nicht wiederholt: 我的手机跟你的一样 (= 你的手机). Für „ganz gleich“ sagt man 完全一样 (wánquán yíyàng), nicht 很一样. Typischer Fehler: der deutschen Wortstellung „genauso wie B“ folgen und 一样 vor B stellen – es steht hinter B.",
    "examples": [
      {
        "chinese": "我的手机跟你的一样。",
        "pinyin": "Wǒ de shǒujī gēn nǐ de yíyàng.",
        "german": "Ich habe das gleiche Handy wie du."
      },
      {
        "chinese": "上海的天气跟北京不一样。",
        "pinyin": "Shànghǎi de tiānqì gēn Běijīng bù yíyàng.",
        "german": "Das Wetter in Shanghai ist anders als in Peking."
      },
      {
        "chinese": "他的想法跟我一样。",
        "pinyin": "Tā de xiǎngfǎ gēn wǒ yíyàng.",
        "german": "Er denkt genauso wie ich."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "跟",
      "distractors": [
        {
          "text": "比",
          "reason": "比 drückt einen Unterschied aus und verlangt danach ein Adjektiv wie 好 oder 贵, nicht 一样."
        },
        {
          "text": "对",
          "reason": "对 bedeutet „gegenüber, für“ (对我很好) und bildet keinen Vergleich mit 一样."
        },
        {
          "text": "给",
          "reason": "给 nennt einen Empfänger („für, an“) und kann B nicht als Vergleichsgröße einführen."
        }
      ],
      "accepted": [
        "和"
      ]
    },
    "related": [
      "g:A跟B一样+形容词",
      "g:A比B+形容词",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:跟……相比"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A跟B一样+形容词",
    "pattern": "A跟B一样+形容词",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 223,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "比较句2",
      "content": "（3）A跟B一样+形容词"
    },
    "meaning": "A ist genauso + Eigenschaft wie B",
    "formation": "A + 跟 + B + (不) 一样 + Adjektiv",
    "explanation": "Folgt auf 一样 (yíyàng) ein Adjektiv, nennt der Satz, worin A und B gleich sind: 你跟他一样高 „du bist genauso groß wie er“. 跟 (gēn) – oder 和 (hé) – führt B ein, 一样 steht vor dem Adjektiv wie ein Adverb „gleich“. Vor dem Adjektiv steht kein 很 (*一样很高). Mit 不一样 (bù yíyàng) + Adjektiv sagt man nur, dass A und B in diesem Punkt nicht gleich sind; für „A ist nicht so … wie B“ nimmt man meist A 没有 (méiyǒu) B 那么 (nàme) + Adjektiv. Neben Adjektiven können auch Verben des Fühlens folgen (跟我一样喜欢音乐). Fragen bildet man mit 吗: 他跟你一样大吗？",
    "notes": "Ohne Adjektiv – A 跟 B 一样 (yíyàng) – heißt es nur „A und B sind gleich“ (vorheriger Punkt). Zum Vergleich mit Unterschied siehe A比B + Adjektiv.",
    "examples": [
      {
        "chinese": "你跟他一样高。",
        "pinyin": "Nǐ gēn tā yíyàng gāo.",
        "german": "Du bist genauso groß wie er."
      },
      {
        "chinese": "这个房间跟那个一样大。",
        "pinyin": "Zhège fángjiān gēn nàge yíyàng dà.",
        "german": "Dieses Zimmer ist genauso groß wie das andere."
      },
      {
        "chinese": "今年夏天跟去年一样热。",
        "pinyin": "Jīnnián xiàtiān gēn qùnián yíyàng rè.",
        "german": "Dieser Sommer ist genauso heiß wie der letzte."
      }
    ],
    "legacyIds": [
      "g:跟...一样",
      "跟...一样"
    ],
    "related": [
      "g:A跟B一样",
      "g:A比B+形容词",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:A比B+更/还+形容词"
    ],
    "quiz": {
      "example": 1,
      "answer": "一样",
      "distractors": [
        {
          "text": "很",
          "reason": "跟 B allein bildet keinen Vergleich; ohne 一样 bleibt offen, worin die Zimmer gleich sein sollen."
        },
        {
          "text": "也",
          "reason": "也 („auch“) bildet keinen Vergleich; nach 跟 B fehlt das Wort für „gleich“."
        },
        {
          "text": "一起",
          "reason": "一起 bedeutet „zusammen“ (跟他一起去) und drückt keine Gleichheit aus."
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
    "id": "g:A不比B+形容词",
    "pattern": "A不比B+形容词",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 224,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "比较句2",
      "content": "（4）A不比B+形容词"
    },
    "meaning": "A ist nicht …er als B (etwa gleich; Widerspruch)",
    "formation": "A + 不比 + B + Adjektiv",
    "notes": "Vergleiche: 他比我高 – er ist größer; 他没有我高 – er ist kleiner; 他不比我高 – er ist nicht größer, etwa gleich groß. 不如 (bùrú) „nicht so gut wie“ ist ein Punkt von HSK 4.",
    "explanation": "不比 (bù bǐ) verneint einen Vergleich, den jemand ausgesprochen oder vorausgesetzt hat: 这家饭馆不比那家贵 „dieses Restaurant ist nicht teurer als das andere“ – gemeint ist meist, dass beide etwa gleich teuer sind. Der Satz widerspricht also einer Annahme und klingt oft nach Einwand oder Rechtfertigung (我的中文不比他差). Wichtig: A 不比 B + Adjektiv heißt nicht, dass A weniger von der Eigenschaft hat. Das sagt A 没有 (méiyǒu) B 那么 (nàme) + Adjektiv: 这家没有那家贵 „dieses ist nicht so teuer wie jenes“ (also billiger). Typischer Fehler: 不比 als einfache Verneinung von 比 verwenden, um „weniger …“ auszudrücken.",
    "examples": [
      {
        "chinese": "我的中文不比他差。",
        "pinyin": "Wǒ de Zhōngwén bù bǐ tā chà.",
        "german": "Mein Chinesisch ist nicht schlechter als seins."
      },
      {
        "chinese": "这家饭馆不比那家贵。",
        "pinyin": "Zhè jiā fànguǎn bù bǐ nà jiā guì.",
        "german": "Dieses Restaurant ist nicht teurer als das andere."
      },
      {
        "chinese": "今天不比昨天冷，你不用穿这么多。",
        "pinyin": "Jīntiān bù bǐ zuótiān lěng, nǐ búyòng chuān zhème duō.",
        "german": "Heute ist es nicht kälter als gestern, du musst nicht so viel anziehen."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "不比",
      "distractors": [
        {
          "text": "比不",
          "reason": "不 verneint den ganzen Vergleich und steht deshalb vor 比, nicht dahinter."
        },
        {
          "text": "不是",
          "reason": "不是 verneint eine Gleichsetzung; ohne 比 entsteht kein Vergleich mit „das andere“."
        },
        {
          "text": "不跟",
          "reason": "跟 verlangt 一样 (跟那家一样贵); mit dem bloßen Adjektiv ergibt es keinen Vergleich."
        }
      ]
    },
    "related": [
      "g:A比B+形容词",
      "g:A有/没有B（+这么/那么）+形容词",
      "g:A比B+更/还+形容词",
      "g:A不如B（+形容词）"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:A比B+多/少/早/晚+动词+数量短语",
    "pattern": "A比B+多/少/早/晚+动词+数量短语",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 225,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "比较句2",
      "content": "（5）A比B+多/少/早/晚+动词+数量短语"
    },
    "meaning": "A tut etwas um eine Menge mehr/weniger/früher/später als B",
    "formation": "A + 比 + B + 多/少/早/晚 + Verb (+ 了) + Menge/Zeitdauer (+ Objekt)",
    "notes": "Beim reinen Eigenschaftsvergleich steht die Menge hinter dem Adjektiv: 他比我大两岁 – ein Punkt von HSK 2. Hier geht es dagegen um eine Handlung, deshalb steht 多/少/早/晚 vor dem Verb.",
    "explanation": "Soll ein Vergleich sagen, um wie viel jemand mehr, weniger, früher oder später etwas tut, stehen 多, 少, 早 oder 晚 als Adverb vor dem Verb, und der genaue Unterschied folgt als Mengen- oder Zeitangabe hinter dem Verb: 我比他早到了十分钟 „ich kam zehn Minuten früher an als er“, 他比我多喝了两杯 „er hat zwei Gläser mehr getrunken als ich“. 了 steht bei abgeschlossenen Handlungen direkt hinter dem Verb. Typische Fehler: das Adjektiv hinter das Verb setzen (*我比他到早了十分钟) oder die Menge vor das Verb stellen (*他比我两杯多喝了). Im Deutschen steht „früher, mehr“ oft am Ende – in diesem chinesischen Muster vor dem Verb.",
    "examples": [
      {
        "chinese": "我比他早到了十分钟。",
        "pinyin": "Wǒ bǐ tā zǎo dàole shí fēnzhōng.",
        "german": "Ich bin zehn Minuten früher angekommen als er."
      },
      {
        "chinese": "姐姐比我多吃了一碗饭。",
        "pinyin": "Jiějie bǐ wǒ duō chīle yì wǎn fàn.",
        "german": "Meine Schwester hat eine Schüssel Reis mehr gegessen als ich."
      },
      {
        "chinese": "今天我比平时晚起了半个小时。",
        "pinyin": "Jīntiān wǒ bǐ píngshí wǎn qǐle bàn ge xiǎoshí.",
        "german": "Heute bin ich eine halbe Stunde später aufgestanden als sonst."
      },
      {
        "chinese": "这个月他比我少花了五百块钱。",
        "pinyin": "Zhège yuè tā bǐ wǒ shǎo huāle wǔbǎi kuài qián.",
        "german": "Diesen Monat hat er fünfhundert Yuan weniger ausgegeben als ich."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "多",
      "distractors": [
        {
          "text": "更",
          "reason": "更 steht vor Adjektiven (更好吃); vor einem Verb mit Mengenangabe sagt man „mehr“ mit 多."
        },
        {
          "text": "很",
          "reason": "很 ist ein Gradadverb für Adjektive und passt weder vor 吃 noch zu 比."
        },
        {
          "text": "太",
          "reason": "太 bedeutet „zu (sehr)“ und steht vor Adjektiven; es kann keinen Mengenunterschied beim Essen ausdrücken."
        }
      ]
    },
    "related": [
      "g:A比B+形容词+数量补语/程度补语",
      "g:A比B+形容词",
      "g:A比B+动词+得+形容词/A+动词+得+比+B+形容词",
      "g:A比B+更/还+形容词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物",
    "pattern": "表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 226,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "存现句3",
      "content": "（1）表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物"
    },
    "meaning": "an einem Ort taucht jemand/etwas (neu) auf",
    "formation": "Ort + Verb + Richtungs-/Ergebniskomplement + (了) + Zahl + Zählwort + Person/Ding",
    "notes": "Das Gegenstück für Verschwinden (楼上搬走了一家人) ist der nächste Punkt. Der ruhende Zustand an einem Ort wird mit 着 ausgedrückt: 桌子上放着两本书 – ein Punkt von HSK 2.",
    "explanation": "Dieser Existenzsatz meldet, dass an einem Ort jemand oder etwas neu erscheint. Der Ort steht ohne 在 am Satzanfang; dann folgt ein Verb der Bewegung oder Veränderung mit Komplement, z. B. 搬来 „herziehen“, 走进来 „hereinkommen“, 长出 (zhǎngchū) „herauswachsen“. Das Neue – meist unbestimmt und mit Mengenangabe – steht erst am Ende, also hinter dem Verb. 了 nach dem Komplement zeigt, dass das Erscheinen schon geschehen ist; es kann fehlen, besonders in Erzählungen. Typischer Fehler: das Neue an den Satzanfang stellen (*一家人搬来了楼上) oder eine bestimmte Person ohne Mengenangabe verwenden (*楼上搬来了王老师 klingt unnatürlich). Für Bekanntes nimmt man den normalen Satz: 王老师搬到楼上了.",
    "examples": [
      {
        "chinese": "楼上搬来了一家人。",
        "pinyin": "Lóu shang bānlaile yì jiā rén.",
        "german": "Oben ist eine Familie eingezogen."
      },
      {
        "chinese": "我们班转来了一个新同学。",
        "pinyin": "Wǒmen bān zhuǎnlaile yí ge xīn tóngxué.",
        "german": "In unsere Klasse ist ein neuer Mitschüler gewechselt."
      },
      {
        "chinese": "前面跑过来了一只小狗。",
        "pinyin": "Qiánmiàn pǎo guòlai le yì zhī xiǎo gǒu.",
        "german": "Von vorne kam ein kleiner Hund angelaufen."
      },
      {
        "chinese": "树上长出了几片新叶子。",
        "pinyin": "Shù shang zhǎngchūle jǐ piàn xīn yèzi.",
        "german": "Am Baum sind ein paar neue Blätter gewachsen."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "了",
      "distractors": [
        {
          "text": "着",
          "reason": "着 beschreibt einen andauernden Zustand (墙上挂着); das Neuankommen eines Mitschülers ist ein abgeschlossenes Ereignis."
        },
        {
          "text": "得",
          "reason": "得 leitet eine Bewertung ein (转得很快) und kann nicht vor einer Mengenangabe stehen."
        },
        {
          "text": "地",
          "reason": "地 verbindet ein Adverbial mit dem folgenden Verb (高兴地说) und steht nicht hinter dem Verb."
        }
      ]
    },
    "related": [
      "g:表示消失：处所词+动词+结果补语+动态助词（了）+数量短语+人/物",
      "g:处所+有+数量短语+名词",
      "g:处所+动词+着(+数量短语)+名词",
      "g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:表示消失：处所词+动词+结果补语+动态助词（了）+数量短语+人/物",
    "pattern": "表示消失：处所词+动词+结果补语+动态助词（了）+数量短语+人/物",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 227,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "存现句3",
      "content": "（2）表示消失：处所词+动词+结果补语+动态助词（了）+数量短语+人/物"
    },
    "meaning": "von einem Ort ist jemand/etwas verschwunden oder weggegangen",
    "formation": "Ort + Verb + Ergebniskomplement (z. B. 走) + (了) + Zahl + Zählwort + Person/Ding",
    "notes": "Das Gegenstück für Erscheinen nimmt Richtungskomplemente wie 来 oder 过来 (楼上搬来了一家人, vorheriger Punkt). Mit 来 statt 走 dreht sich die Bedeutung um.",
    "explanation": "Dieser Existenzsatz meldet, dass von einem Ort jemand oder etwas weggegangen oder verloren gegangen ist. Der Ort steht am Satzanfang, normalerweise ohne Präposition; dann folgt ein Verb mit Ergebniskomplement, das das Weggehen ausdrückt, meist 走 (zǒu): 飞走 „wegfliegen“, 开走 (kāizǒu) „wegfahren“, 搬走 (bānzǒu) „wegziehen“, 拿走 (názǒu) „wegnehmen“. 了 zeigt, dass es schon geschehen ist. Was verschwunden ist, steht mit Mengenangabe am Satzende. Typischer Fehler: das unbestimmte Verschwundene (一只鸟) vor das Verb ziehen – im Existenzsatz steht es am Ende. Ist das Ding bekannt, sagt man normal: 那只鸟飞走了.",
    "examples": [
      {
        "chinese": "树上飞走了一只鸟。",
        "pinyin": "Shù shang fēizǒule yì zhī niǎo.",
        "german": "Vom Baum ist ein Vogel weggeflogen."
      },
      {
        "chinese": "我们班转走了两个同学。",
        "pinyin": "Wǒmen bān zhuǎnzǒule liǎng ge tóngxué.",
        "german": "Aus unserer Klasse sind zwei Mitschüler weggegangen."
      },
      {
        "chinese": "停车场开走了三辆车。",
        "pinyin": "Tíngchēchǎng kāizǒule sān liàng chē.",
        "german": "Vom Parkplatz sind drei Autos weggefahren."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "走",
      "distractors": [
        {
          "text": "来",
          "reason": "飞来 hieße „herbeigeflogen“ – also Erscheinen statt Verschwinden; der Satz sagt aber „weggeflogen“."
        },
        {
          "text": "到",
          "reason": "飞到 verlangt ein Ziel dahinter (飞到树上); vor der Mengenangabe ergibt es keinen Sinn."
        },
        {
          "text": "好",
          "reason": "好 als Ergebniskomplement bedeutet „fertig, gut erledigt“ und drückt kein Weggehen aus."
        }
      ]
    },
    "related": [
      "g:表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物",
      "g:处所+有+数量短语+名词",
      "g:处所+动词+着(+数量短语)+名词"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:“是……的”句2：强调说话人的看法或态度",
    "pattern": "“是……的”句2：强调说话人的看法或态度",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 228,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "“是……的”句2",
      "content": "强调说话人的看法或态度"
    },
    "meaning": "es ist (durchaus/bestimmt) so – bekräftigte Einschätzung des Sprechers",
    "formation": "Subjekt + 是 + Einschätzung (oft 会/能/可以 + Verb oder Adjektiv) + 的",
    "notes": "Beim 是……的-Satz 1 (我是坐飞机来的) wird ein Umstand eines vergangenen Ereignisses hervorgehoben; hier wird eine Bewertung bekräftigt. 是 trägt dabei oft den Satzakzent.",
    "explanation": "Anders als beim ersten 是……的-Satz geht es hier nicht um Zeit, Ort oder Art eines vergangenen Ereignisses. Der Rahmen 是……的 umschließt eine Einschätzung oder Haltung des Sprechers und macht sie bestimmter, überzeugter oder beruhigend: 这个问题是可以解决的 „dieses Problem lässt sich durchaus lösen“. Häufig stehen Modalverben darin – 会 (huì), 能 (néng), 可以 (kěyǐ), 应该 (yīnggāi) –, oft auch verneint: 他是不会同意的 „er wird bestimmt nicht zustimmen“. Lässt man 是 und 的 weg, bleibt der Satz richtig, klingt aber neutraler. Der Satz kann sich auf Gegenwart und Zukunft beziehen. Typischer Fehler: 的 vergessen oder 了 statt 的 setzen.",
    "examples": [
      {
        "chinese": "这个问题是可以解决的。",
        "pinyin": "Zhège wèntí shì kěyǐ jiějué de.",
        "german": "Dieses Problem lässt sich durchaus lösen."
      },
      {
        "chinese": "你放心，他是不会忘的。",
        "pinyin": "Nǐ fàngxīn, tā shì bú huì wàng de.",
        "german": "Keine Sorge, er wird es bestimmt nicht vergessen."
      },
      {
        "chinese": "我觉得你的想法是对的。",
        "pinyin": "Wǒ juéde nǐ de xiǎngfǎ shì duì de.",
        "german": "Ich finde, deine Idee ist richtig."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "是",
      "distractors": [
        {
          "text": "很",
          "reason": "很 drückt einen Grad aus; „bestimmt nicht vergessen“ ist keine Gradangabe, und dem 的 am Ende fehlte das passende 是."
        },
        {
          "text": "在",
          "reason": "在 vor einem Verb drückt den Verlauf aus und verbindet sich weder mit 不会 noch mit 的 zu einer Bekräftigung."
        },
        {
          "text": "有",
          "reason": "有 bedeutet „haben, es gibt“ und kann den Rahmen 是……的 nicht bilden."
        }
      ]
    },
    "related": [
      "g:“是……的”句1：强调时间、地点、方式、动作者"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:主语+动词+宾语+动词+补语",
    "pattern": "主语+动词+宾语+动词+补语",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzmuster",
    "syllabus": {
      "no": 229,
      "category": "句子的类型",
      "categoryName": "特殊句型",
      "item": "重动句",
      "content": "主语+动词+宾语+动词+补语"
    },
    "meaning": "Verbwiederholung: Verb + Objekt + dasselbe Verb + Komplement",
    "formation": "Subjekt + Verb + Objekt + Verb + (得/了 +) Komplement",
    "notes": "Die Komplemente selbst sind eigene Punkte von HSK 2: die Bewertung mit 得 und die Zeitdauer nach dem Verb. Bei der Zeitdauer gibt es auch die Variante ohne Wiederholung: 我等了你一个多小时.",
    "explanation": "Hat ein Verb ein Objekt und soll zugleich ein Komplement folgen – vor allem eine Bewertung mit 得, aber auch eine Zeitdauer oder ein Ergebnis –, wiederholt man oft das Verb: zuerst Verb + Objekt, dann noch einmal das Verb + Komplement. Besonders bei 得 ist das wichtig, denn Objekt und 得 können nicht zusammen hinter einem Verb stehen: 他说汉语说得很流利 „er spricht fließend Chinesisch“. Ebenso: 我等你等了一个多小时 „ich habe über eine Stunde auf dich gewartet“, 孩子玩游戏玩累了 „das Kind hat sich müde gespielt“. Das Muster ist besonders in der gesprochenen Sprache häufig. Typische Fehler: *他说汉语得很好 oder *他说得汉语很好. Man kann das erste Verb auch weglassen und das Objekt vorziehen: 他汉语说得很好.",
    "examples": [
      {
        "chinese": "他说汉语说得很流利。",
        "pinyin": "Tā shuō Hànyǔ shuō de hěn liúlì.",
        "german": "Er spricht sehr fließend Chinesisch."
      },
      {
        "chinese": "我等你等了一个多小时。",
        "pinyin": "Wǒ děng nǐ děngle yí ge duō xiǎoshí.",
        "german": "Ich habe über eine Stunde auf dich gewartet."
      },
      {
        "chinese": "孩子玩游戏玩累了。",
        "pinyin": "Háizi wán yóuxì wánlèi le.",
        "german": "Das Kind hat so lange gespielt, bis es müde war."
      }
    ],
    "related": [
      "g:动词+得+形容词性短语",
      "g:数量补语2：表示动作持续的时间",
      "g:得"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:先……，再/然后……",
    "pattern": "先……，再/然后……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 230,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "承接复句",
      "content": "先……，再/然后……"
    },
    "meaning": "zuerst …, dann …",
    "formation": "(Subjekt +) 先 + Handlung₁，(Subjekt +) 再/然后 + Handlung₂",
    "explanation": "先 (xiān) „zuerst“ markiert die erste Handlung, 再 (zài) oder 然后 (ránhòu) die folgende. 先 und 再 sind Adverbien und stehen nach dem Subjekt direkt vor dem Verb; 然后 ist ein Bindewort und steht am Anfang des zweiten Teils, auch vor einem neuen Subjekt (我先说，然后你说). Beide lassen sich verbinden: 然后再. 再 wird vor allem für Geplantes, Bitten und Ratschläge verwendet (先吃饭，再看电视); für bereits Geschehenes nimmt man meist 然后 (我先去了超市，然后回家了). Typischer Fehler: 再 vor das Subjekt stellen (*再你说) oder es mit dem gleich klingenden 在 verwechseln.",
    "notes": "Die Form mit 首先 (shǒuxiān) … 然后 (ránhòu) (HSK 4) ist formeller und eignet sich für Aufzählungen von Schritten. 再 bedeutet sonst „noch einmal“ (再说一次) – ein eigener Punkt.",
    "examples": [
      {
        "chinese": "我们先吃饭，再看电影吧。",
        "pinyin": "Wǒmen xiān chīfàn, zài kàn diànyǐng ba.",
        "german": "Lass uns erst essen und dann ins Kino gehen."
      },
      {
        "chinese": "你先想一想，再回答。",
        "pinyin": "Nǐ xiān xiǎng yi xiǎng, zài huídá.",
        "german": "Denk erst kurz nach und antworte dann."
      },
      {
        "chinese": "昨天我先去了超市，然后回家做饭。",
        "pinyin": "Zuótiān wǒ xiān qùle chāoshì, ránhòu huí jiā zuò fàn.",
        "german": "Gestern war ich zuerst im Supermarkt und habe danach zu Hause gekocht."
      }
    ],
    "legacyIds": [
      "g:先 + Verb₁ + 再 + Verb₂",
      "先 + Verb₁ + 再 + Verb₂",
      "g:先...再/然后...",
      "先...再/然后...",
      "g:先...然后...",
      "先...然后..."
    ],
    "related": [
      "g:首先……，然后……",
      "g:（在）……以前/以后/前/后",
      "g:再¹",
      "g:又"
    ],
    "quiz": {
      "example": 0,
      "answer": "再",
      "distractors": [
        {
          "text": "在",
          "reason": "在 (zài) klingt gleich, bedeutet aber „in, bei“ oder markiert den Verlauf – nicht „danach“."
        },
        {
          "text": "又",
          "reason": "又 bezeichnet eine Wiederholung, die schon geschehen ist („wieder“), nicht den nächsten geplanten Schritt."
        },
        {
          "text": "才",
          "reason": "才 betont „erst dann“ nach einer Bedingung oder Verzögerung und passt nicht zu einem Vorschlag mit 吧."
        }
      ],
      "accepted": [
        "然后"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:或者……，或者……",
    "pattern": "或者……，或者……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 231,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "选择复句",
      "content": "或者……，或者……"
    },
    "meaning": "entweder … oder … (mehrere Möglichkeiten in Aussagesätzen)",
    "formation": "或者 + Möglichkeit₁，或者 + Möglichkeit₂",
    "notes": "Das einzelne 或者 (huòzhě) „oder“ zwischen zwei Wörtern ist ein eigener Punkt. 要么 (yàome) … 要么 (HSK 6) ist strenger: „entweder das eine oder das andere, eins von beiden“.",
    "explanation": "Mit zweimal 或者 (huòzhě) nennt man zwei (oder mehr) Möglichkeiten, die zur Wahl stehen oder sich abwechseln: 或者你来我家，或者我去你家 „entweder kommst du zu mir oder ich zu dir“. Anders als das deutsche „entweder … oder“ muss das nicht streng ausschließend sein; oft heißt es einfach „mal dies, mal das“ oder „beides ist möglich“ (dann folgt gern 都可以). 或者 steht vor dem Subjekt oder nach ihm vor dem Verb. Es gehört in Aussagesätze; in einer Frage nach der Wahl steht 还是 (háishi): 你喝茶还是喝咖啡？ Typischer Fehler: 或者 in einer Entscheidungsfrage verwenden.",
    "examples": [
      {
        "chinese": "周末我或者在家看书，或者去公园走走。",
        "pinyin": "Zhōumò wǒ huòzhě zài jiā kàn shū, huòzhě qù gōngyuán zǒuzou.",
        "german": "Am Wochenende lese ich entweder zu Hause oder gehe im Park spazieren."
      },
      {
        "chinese": "或者你来我家，或者我去你家，都可以。",
        "pinyin": "Huòzhě nǐ lái wǒ jiā, huòzhě wǒ qù nǐ jiā, dōu kěyǐ.",
        "german": "Entweder kommst du zu mir oder ich komme zu dir – beides geht."
      },
      {
        "chinese": "去机场你或者坐地铁，或者坐出租车，都很方便。",
        "pinyin": "Qù jīchǎng nǐ huòzhě zuò dìtiě, huòzhě zuò chūzūchē, dōu hěn fāngbiàn.",
        "german": "Zum Flughafen kannst du die U-Bahn oder ein Taxi nehmen, beides ist bequem."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "或者去",
      "distractors": [
        {
          "text": "还是去",
          "reason": "还是 steht in Fragen nach der Wahl („oder?“); in dieser Aussage antwortet das zweite 或者 auf das erste."
        },
        {
          "text": "和去",
          "reason": "和 verbindet Nomen („und“), aber keine Verbgruppen; das erste 或者 verlangt ein zweites 或者."
        },
        {
          "text": "而且去",
          "reason": "而且 steigert („und außerdem“) und nennt keine Alternative."
        }
      ]
    },
    "related": [
      "g:或者",
      "g:（是）……，还是……",
      "g:疑问句：用“还是”连接的选择问句",
      "g:不是……，就是……",
      "g:要么……，要么……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一会儿……，一会儿……",
    "pattern": "一会儿……，一会儿……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 232,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "并列复句",
      "content": "一会儿……，一会儿……"
    },
    "meaning": "mal …, mal … (schneller Wechsel)",
    "formation": "一会儿 + A，一会儿 + B",
    "notes": "Nicht verwechseln mit dem einfachen 一会儿 (yíhuìr) als Zeitangabe „eine Weile, gleich“ – etwa 等一会儿 (děng yíhuìr) „warte kurz“ – und mit 不一会儿 „kurz darauf“ (eigener Punkt).",
    "explanation": "一会儿 (yíhuìr) heißt allein „eine kleine Weile“. Doppelt gesetzt beschreibt es, dass zwei (oder mehr) Zustände oder Handlungen in kurzer Zeit ständig wechseln: 天气一会儿冷，一会儿热 „das Wetter ist mal kalt, mal heiß“. A und B sind meist gegensätzlich oder deutlich verschieden; oft schwingt mit, dass der Wechsel unruhig oder lästig ist. Das Subjekt steht vor dem ersten 一会儿; dahinter folgen Verben oder Adjektive, meist ohne 很. Anders als bei 一边 (yìbiān) … 一边 geschehen die Dinge nicht gleichzeitig, sondern nacheinander im Wechsel. Gesprochen hört man auch yìhuǐr.",
    "examples": [
      {
        "chinese": "这几天天气一会儿冷，一会儿热。",
        "pinyin": "Zhè jǐ tiān tiānqì yíhuìr lěng, yíhuìr rè.",
        "german": "In den letzten Tagen ist das Wetter mal kalt, mal heiß."
      },
      {
        "chinese": "孩子一会儿哭，一会儿笑。",
        "pinyin": "Háizi yíhuìr kū, yíhuìr xiào.",
        "german": "Das Kind weint mal und lacht dann wieder."
      },
      {
        "chinese": "他一会儿看手机，一会儿看门口，好像在等人。",
        "pinyin": "Tā yíhuìr kàn shǒujī, yíhuìr kàn ménkǒu, hǎoxiàng zài děng rén.",
        "german": "Er schaut mal aufs Handy, mal zur Tür – er scheint auf jemanden zu warten."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "一会儿热",
      "distractors": [
        {
          "text": "一边热",
          "reason": "一边 verbindet gleichzeitige Handlungen und steht nicht vor Adjektiven wie 热; es antwortet auch nicht auf 一会儿."
        },
        {
          "text": "也热",
          "reason": "也 („auch“) ergibt „mal kalt, auch heiß“ – der Wechsel fehlt, und das erste 一会儿 bleibt ohne Gegenstück."
        },
        {
          "text": "很热",
          "reason": "Mit 很热 bleibt das erste 一会儿 ohne Gegenstück; der Wechsel „mal …, mal …“ verlangt das zweite 一会儿."
        }
      ]
    },
    "related": [
      "g:一边……，一边……",
      "g:又……，又……",
      "g:不一会儿",
      "g:一时……一时……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:又……，又……",
    "pattern": "又……，又……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 233,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "并列复句",
      "content": "又……，又……"
    },
    "meaning": "sowohl … als auch … (zwei Eigenschaften oder Handlungen zugleich)",
    "formation": "又 + Adjektiv/Verb₁ + 又 + Adjektiv/Verb₂",
    "explanation": "又……又…… (yòu … yòu …) verbindet zwei Eigenschaften oder Handlungen, die gleichzeitig zutreffen: 这个菜又便宜又好吃 „dieses Gericht ist günstig und dazu lecker“. Meist zeigen beide Eigenschaften in dieselbe Richtung – beide positiv (又好又快) oder beide negativ (又累又饿). Vor den Adjektiven steht kein 很. Mit Verben beschreibt das Muster lebhaft zwei Handlungen, die zusammen oder im Wechsel geschehen, oft als Ausdruck eines Gefühls: 又唱又跳 „singen und tanzen“. Das Subjekt steht vor dem ersten 又. Typischer Fehler: zwei Adjektive mit 和 verbinden (*便宜和好吃) – im Prädikat nimmt man 又……又…… oder 也.",
    "notes": "一边 (yìbiān) … 一边 betont zwei gleichzeitige, bewusste Tätigkeiten (一边吃饭一边看电视); 又……又…… beschreibt eher Eigenschaften oder einen lebhaften Gesamteindruck. 既……又…… (HSK 4) ist formeller.",
    "examples": [
      {
        "chinese": "这个菜又便宜又好吃。",
        "pinyin": "Zhège cài yòu piányi yòu hǎochī.",
        "german": "Dieses Gericht ist günstig und dazu noch lecker."
      },
      {
        "chinese": "她又聪明又努力。",
        "pinyin": "Tā yòu cōngming yòu nǔlì.",
        "german": "Sie ist klug und außerdem fleißig."
      },
      {
        "chinese": "走了一天，我又累又饿。",
        "pinyin": "Zǒule yì tiān, wǒ yòu lèi yòu è.",
        "german": "Nach einem ganzen Tag Laufen bin ich müde und hungrig."
      },
      {
        "chinese": "孩子们高兴得又唱又跳。",
        "pinyin": "Háizimen gāoxìng de yòu chàng yòu tiào.",
        "german": "Die Kinder sangen und tanzten vor Freude."
      }
    ],
    "legacyIds": [
      "g:又 + Adj₁ + 又 + Adj₂ (Grundform)",
      "又 + Adj₁ + 又 + Adj₂ (Grundform)",
      "g:又...又...",
      "又...又...",
      "g:又…又… (Verben)",
      "又…又… (Verben)"
    ],
    "related": [
      "g:一边……，一边……",
      "g:既……，又/也……",
      "g:一会儿……，一会儿……",
      "g:又",
      "g:……，也……"
    ],
    "quiz": {
      "example": 0,
      "answer": "又好吃",
      "distractors": [
        {
          "text": "和好吃",
          "reason": "和 verbindet Nomen, aber keine Adjektive im Prädikat; das erste 又 verlangt ein zweites 又."
        },
        {
          "text": "也好吃",
          "reason": "Das erste 又 verlangt ein zweites 又; 也 passt nur ohne 又 und nach einer Pause (便宜，也好吃)."
        },
        {
          "text": "很好吃",
          "reason": "Mit 很好吃 bleibt das erste 又 ohne Gegenstück; der Rahmen 又……又…… wäre unvollständig."
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
    "id": "g:一边……，一边……",
    "pattern": "一边……，一边……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 234,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "并列复句",
      "content": "一边……，一边……"
    },
    "meaning": "etwas tun und gleichzeitig etwas anderes tun",
    "formation": "(Subjekt +) 一边 + Verb₁ (+ Objekt)，一边 + Verb₂ (+ Objekt)",
    "explanation": "Mit zweimal 一边 (yìbiān) verbindet man zwei Tätigkeiten, die dieselbe Person zur selben Zeit ausführt: 他一边吃饭一边看手机 „er isst und schaut dabei aufs Handy“. Hinter 一边 stehen Handlungsverben, keine Adjektive oder Zustände (*一边高兴一边……). Das Subjekt steht vor dem ersten 一边; das Komma zwischen beiden Teilen kann fehlen. In kurzen Wendungen sagt man auch nur 边……边…… (边走边说). Beide Tätigkeiten sind gleich wichtig – soll die erste nur die Art und Weise der zweiten beschreiben („lächelnd sagen“), nimmt man Verb + 着 + Verb.",
    "notes": "又……又…… verbindet vor allem Eigenschaften (又便宜又好吃); 一会儿 (yíhuìr) … 一会儿 beschreibt einen Wechsel nacheinander, nicht Gleichzeitigkeit. 一边 (yìbiān) allein heißt auch „eine Seite“ (路的一边).",
    "examples": [
      {
        "chinese": "他一边吃饭一边看手机。",
        "pinyin": "Tā yìbiān chīfàn yìbiān kàn shǒujī.",
        "german": "Er isst und schaut dabei aufs Handy."
      },
      {
        "chinese": "我喜欢一边听音乐一边做作业。",
        "pinyin": "Wǒ xǐhuan yìbiān tīng yīnyuè yìbiān zuò zuòyè.",
        "german": "Ich höre gern Musik, während ich Hausaufgaben mache."
      },
      {
        "chinese": "我们一边喝茶，一边聊天。",
        "pinyin": "Wǒmen yìbiān hē chá, yìbiān liáotiān.",
        "german": "Wir trinken Tee und unterhalten uns dabei."
      }
    ],
    "legacyIds": [
      "g:一边...一边...",
      "一边...一边..."
    ],
    "related": [
      "g:一边",
      "g:又……，又……",
      "g:一会儿……，一会儿……",
      "g:“着”表示动作的伴随：动词1+着+动词2"
    ],
    "quiz": {
      "example": 0,
      "answer": "一边看",
      "distractors": [
        {
          "text": "一起看",
          "reason": "一起 heißt „zusammen (mit jemandem)“ und antwortet nicht auf das erste 一边."
        },
        {
          "text": "一会儿看",
          "reason": "一会儿……一会儿…… beschreibt einen Wechsel und muss paarweise stehen; es lässt sich nicht mit 一边 mischen."
        },
        {
          "text": "也看",
          "reason": "Das erste 一边 verlangt ein zweites 一边; mit 也 bliebe der Rahmen unvollständig."
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
    "id": "g:不但……，而且……",
    "pattern": "不但……，而且……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 235,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "递进复句",
      "content": "不但……，而且……"
    },
    "meaning": "nicht nur …, sondern auch …",
    "formation": "不但 + A，而且 + B (B geht über A hinaus)",
    "explanation": "不但 (búdàn) „nicht nur“ nennt im ersten Teil etwas, 而且 (érqiě) „sondern auch“ fügt im zweiten Teil etwas hinzu, das darüber hinausgeht. Die Stellung von 不但 hängt vom Subjekt ab: Haben beide Teile dasselbe Subjekt, steht 不但 nach dem Subjekt (他不但会说中文，而且……). Haben sie verschiedene Subjekte, steht 不但 vor dem ersten Subjekt, und im zweiten Teil folgt oft zusätzlich 也 (不但我喜欢，而且我朋友也喜欢). Statt 而且 kann im zweiten Teil auch das Adverb 还 oder 也 nach dem Subjekt stehen (不但……还……). Das Muster ist in gesprochener und geschriebener Sprache üblich.",
    "notes": "Die Formen mit 不仅 (bùjǐn) oder 不光 (bùguāng) und 而且 (érqiě) bzw. 还 (HSK 4) bedeuten dasselbe; 不仅 klingt etwas schriftlicher. Mit 不但不 …, 反而 (fǎn'ér) … (HSK 5) drückt man „nicht nur nicht …, sondern im Gegenteil …“ aus.",
    "examples": [
      {
        "chinese": "他不但会说中文，而且说得很好。",
        "pinyin": "Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.",
        "german": "Er kann nicht nur Chinesisch, er spricht es sogar sehr gut."
      },
      {
        "chinese": "这个地方不但漂亮，而且很安静。",
        "pinyin": "Zhège dìfang búdàn piàoliang, érqiě hěn ānjìng.",
        "german": "Dieser Ort ist nicht nur schön, sondern auch sehr ruhig."
      },
      {
        "chinese": "不但我喜欢这本书，而且我的朋友也喜欢。",
        "pinyin": "Búdàn wǒ xǐhuan zhè běn shū, érqiě wǒ de péngyou yě xǐhuan.",
        "german": "Nicht nur mir gefällt dieses Buch, sondern auch meinen Freunden."
      }
    ],
    "legacyIds": [
      "g:不但...而且...",
      "不但...而且...",
      "g:不但…还…",
      "不但…还…"
    ],
    "related": [
      "g:不仅/不光……，还/而且……",
      "g:……，并且……",
      "g:……,甚至……",
      "g:不但不/不但没有……，反而……",
      "g:也"
    ],
    "quiz": {
      "example": 1,
      "answer": "而且",
      "distractors": [
        {
          "text": "但是",
          "reason": "但是 leitet einen Gegensatz ein („aber“); schön und ruhig widersprechen sich nicht, und 不但 verlangt eine Steigerung."
        },
        {
          "text": "所以",
          "reason": "所以 nennt eine Folge („deshalb“); Ruhe ist keine Folge davon, dass der Ort schön ist."
        },
        {
          "text": "或者",
          "reason": "或者 nennt eine Alternative („oder“) und passt nicht zu „nicht nur …, sondern auch“."
        }
      ],
      "accepted": [
        "还",
        "也"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:虽然……，可是……",
    "pattern": "虽然……，可是……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 236,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "转折复句",
      "content": "虽然……，可是……"
    },
    "meaning": "obwohl …, aber … (eher gesprochene Variante)",
    "pinyin": "suīrán…kěshì…",
    "examples": [
      {
        "chinese": "虽然很累，可是我很开心。",
        "pinyin": "Suīrán hěn lèi, kěshì wǒ hěn kāixīn.",
        "german": "Obwohl ich müde bin, bin ich glücklich."
      },
      {
        "chinese": "这件衣服虽然有点儿贵，可是质量很好。",
        "pinyin": "Zhè jiàn yīfu suīrán yǒudiǎnr guì, kěshì zhìliàng hěn hǎo.",
        "german": "Dieses Kleidungsstück ist zwar etwas teuer, aber die Qualität ist sehr gut."
      },
      {
        "chinese": "他虽然才学了一年中文，可是说得很好。",
        "pinyin": "Tā suīrán cái xuéle yì nián Zhōngwén, kěshì shuō de hěn hǎo.",
        "german": "Obwohl er erst seit einem Jahr Chinesisch lernt, spricht er es sehr gut."
      }
    ],
    "legacyIds": [
      "g:虽然…可是…",
      "虽然…可是…"
    ],
    "formation": "虽然 + Tatsache，可是 + Gegensatz",
    "notes": "Die Form mit 但是 (dànshì) ist schon in HSK 2 dran; 尽管 (jǐnguǎn) … mit 但是 oder 可是 (kěshì) (HSK 4) betont „obwohl wirklich …“. Ein einzelnes 可是 ohne 虽然 (suīrán) heißt einfach „aber“.",
    "explanation": "虽然 (suīrán) „obwohl“ räumt im ersten Teil eine Tatsache ein, 可是 (kěshì) „aber“ nennt im zweiten Teil, was trotzdem gilt. Anders als im Deutschen stehen meist beide Bindewörter – „obwohl“ und „aber“ – im selben Satz. 可是 ist gleichbedeutend mit 但是 (dànshì), klingt aber etwas gesprochener. 虽然 kann vor oder nach dem Subjekt stehen (虽然他很忙 / 他虽然很忙); 可是 steht immer am Anfang des zweiten Teils, vor dessen Subjekt. 虽然 kann fehlen, 可是 dagegen kaum. Typischer Fehler: deutsche Wortstellung übernehmen und den Hauptsatz zuerst sagen (*可是……，虽然……) – im Chinesischen steht die Einräumung fast immer vorne.",
    "quiz": {
      "example": 0,
      "answer": "可是",
      "distractors": [
        {
          "text": "所以",
          "reason": "所以 nennt eine Folge; nach 虽然 erwartet man einen Gegensatz, und Glück folgt nicht aus Müdigkeit."
        },
        {
          "text": "而且",
          "reason": "而且 steigert („und außerdem“) und passt nicht zum Gegensatz nach 虽然."
        },
        {
          "text": "因为",
          "reason": "因为 nennt einen Grund („weil“); nach 虽然 muss der zweite Teil einen Gegensatz einleiten."
        }
      ],
      "accepted": [
        "但是",
        "不过"
      ]
    },
    "related": [
      "g:虽然……，但是……",
      "g:尽管……，但是/可是……",
      "g:……，不过……",
      "g:……，然而……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:如果……，就……",
    "pattern": "如果……，就……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 237,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "假设复句",
      "content": "如果……，就……"
    },
    "meaning": "wenn/falls …, dann …",
    "formation": "如果 + Bedingung，(Subjekt +) 就 + Folge",
    "explanation": "如果 (rúguǒ) „wenn, falls“ leitet eine angenommene Bedingung ein; 就 (jiù) „dann“ markiert im zweiten Teil die Folge. 如果 steht am Satzanfang oder nach dem Subjekt; 就 ist ein Adverb und steht deshalb nach dem Subjekt des zweiten Teils, direkt vor dem Verb: 如果下雨，我们就不去了; falsch wäre *就我们不去了. 就 kann fehlen, macht den Zusammenhang aber deutlicher. Oft wird 如果 mit 的话 (dehuà) am Ende der Bedingung kombiniert (如果……的话). Das Muster passt in gesprochene und geschriebene Sprache; für reine Zeitangaben („als, wenn“ im Sinne von „jedes Mal wenn“) nimmt man eher ……的时候.",
    "notes": "要是 (yàoshi) … 就 ist umgangssprachlicher, 假如 (jiǎrú) etwas gehobener. Bei 只要 (zhǐyào) … 就 genügt die Bedingung („solange“), bei 只有 (zhǐyǒu) … 才 ist sie notwendig („nur wenn“).",
    "examples": [
      {
        "chinese": "如果明天下雨，我们就不去公园了。",
        "pinyin": "Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù gōngyuán le.",
        "german": "Wenn es morgen regnet, gehen wir nicht in den Park."
      },
      {
        "chinese": "如果你有时间，就来我家吃饭吧。",
        "pinyin": "Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā chīfàn ba.",
        "german": "Wenn du Zeit hast, komm doch zum Essen zu mir."
      },
      {
        "chinese": "你如果觉得累，就休息一会儿吧。",
        "pinyin": "Nǐ rúguǒ juéde lèi, jiù xiūxi yíhuìr ba.",
        "german": "Wenn du dich müde fühlst, ruh dich doch ein bisschen aus."
      }
    ],
    "legacyIds": [
      "g:如果...就...",
      "如果...就..."
    ],
    "related": [
      "g:……的话，就……",
      "g:要是……，就……",
      "g:只要……，就……",
      "g:只有……，才……",
      "g:假如……，（就）……"
    ],
    "quiz": {
      "example": 0,
      "answer": "如果",
      "distractors": [
        {
          "text": "虽然",
          "reason": "虽然 räumt eine Tatsache ein und verlangt im zweiten Teil 但是/可是, nicht 就."
        },
        {
          "text": "因为",
          "reason": "因为 nennt einen feststehenden Grund („weil“); der Satz sagt aber „wenn“ – der Regen ist nur angenommen."
        },
        {
          "text": "只有",
          "reason": "只有 nennt eine notwendige Bedingung und verlangt 才, nicht 就."
        }
      ],
      "accepted": [
        "要是",
        "假如"
      ]
    },
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:……的话，就……",
    "pattern": "……的话，就……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 238,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "假设复句",
      "content": "……的话，就……"
    },
    "meaning": "falls …, dann … (Bedingungsmarker am Ende des Nebensatzes)",
    "formation": "(如果/要是 +) Bedingung + 的话，(Subjekt +) 就 + Folge",
    "notes": "……的时候 heißt „wenn/als“ im zeitlichen Sinn (下雨的时候 „wenn es regnet, immer dann“), ……的话 (dehuà) dagegen „falls“. Das Wort 的话 allein ist ein eigener Punkt.",
    "explanation": "的话 (dehuà) steht am Ende einer Bedingung und markiert sie als Annahme: 明天下雨的话，我们就在家 „falls es morgen regnet, bleiben wir zu Hause“. Es klingt gesprochen und kann allein stehen oder mit 如果 (rúguǒ) bzw. 要是 (yàoshi) am Anfang kombiniert werden (如果……的话) – die Bedeutung bleibt gleich. Im zweiten Teil steht 就 nach dem Subjekt direkt vor dem Verb. Kurze Bedingungen sind typisch: 有时间的话 „wenn man Zeit hat“, 可以的话 „wenn möglich“. Typischer Fehler: 的话 an den Anfang der Bedingung oder hinter die Folge stellen – es schließt immer den Bedingungsteil ab.",
    "examples": [
      {
        "chinese": "明天下雨的话，我们就在家看电影。",
        "pinyin": "Míngtiān xià yǔ dehuà, wǒmen jiù zài jiā kàn diànyǐng.",
        "german": "Falls es morgen regnet, schauen wir zu Hause einen Film."
      },
      {
        "chinese": "你累的话，就先回去休息吧。",
        "pinyin": "Nǐ lèi dehuà, jiù xiān huíqu xiūxi ba.",
        "german": "Wenn du müde bist, geh doch schon nach Hause und ruh dich aus."
      },
      {
        "chinese": "如果有问题的话，你就给我打电话。",
        "pinyin": "Rúguǒ yǒu wèntí dehuà, nǐ jiù gěi wǒ dǎ diànhuà.",
        "german": "Falls es Probleme gibt, ruf mich einfach an."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "的话",
      "distractors": [
        {
          "text": "吗",
          "reason": "吗 macht einen Satz zur Ja-Nein-Frage; eine Bedingung vor 就 kann es nicht abschließen."
        },
        {
          "text": "说话",
          "reason": "说话 ist ein Verb („sprechen“) und markiert keine Bedingung – nur 的话 bedeutet „falls“."
        },
        {
          "text": "的",
          "reason": "的 allein verbindet Attribut und Nomen; erst 的话 macht den ersten Teil zur Bedingung."
        }
      ]
    },
    "related": [
      "g:的话",
      "g:如果……，就……",
      "g:要是……，就……",
      "g:假如……，（就）……"
    ],
    "review": {
      "batch": "g002",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:只有……，才……",
    "pattern": "只有……，才……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 239,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "条件复句",
      "content": "只有……，才……"
    },
    "meaning": "nur wenn …, (erst dann) … (notwendige Bedingung)",
    "formation": "只有 + einzige Bedingung，(Subjekt +) 才 + Folge",
    "explanation": "只有 (zhǐyǒu) „nur wenn“ nennt die einzige Bedingung, unter der die Folge eintreten kann; 才 (cái) „erst dann“ steht im zweiten Teil nach dem Subjekt direkt vor dem Verb: 只有多练习，才能学好中文. Oft folgt auf 才 ein Modalverb wie 能 oder 会. Statt einer ganzen Bedingung kann auch nur ein Nomen oder eine Zeitangabe folgen: 只有周末我才有时间, 只有你才能帮我. 才 darf hier nicht wegfallen. Typischer Fehler: 只有 mit 就 kombinieren (*只有……就……) oder mit 只要 (zhǐyào) verwechseln. 只要 … 就 nennt eine ausreichende Bedingung („solange …, dann“), 只有 … 才 eine notwendige („nur wenn“).",
    "notes": "除非 (chúfēi) …, 才 … (HSK 6) ist eine gehobenere Variante. 只有 (zhǐyǒu) kann auch einfach „nur … haben“ bedeuten (我只有十块钱) – dann ohne 才.",
    "examples": [
      {
        "chinese": "只有多练习，才能学好中文。",
        "pinyin": "Zhǐyǒu duō liànxí, cái néng xuéhǎo Zhōngwén.",
        "german": "Nur wenn man viel übt, kann man gut Chinesisch lernen."
      },
      {
        "chinese": "只有周末，我才有时间去看父母。",
        "pinyin": "Zhǐyǒu zhōumò, wǒ cái yǒu shíjiān qù kàn fùmǔ.",
        "german": "Nur am Wochenende habe ich Zeit, meine Eltern zu besuchen."
      },
      {
        "chinese": "只有大家都同意，这个计划才能开始。",
        "pinyin": "Zhǐyǒu dàjiā dōu tóngyì, zhège jìhuà cái néng kāishǐ.",
        "german": "Erst wenn alle zustimmen, kann mit dem Plan begonnen werden."
      }
    ],
    "legacyIds": [
      "g:只有...才...",
      "只有...才..."
    ],
    "related": [
      "g:只要……，就……",
      "g:除非……，才……",
      "g:如果……，就……",
      "g:不管……，都/也……"
    ],
    "quiz": {
      "example": 0,
      "answer": "才",
      "distractors": [
        {
          "text": "就",
          "reason": "就 gehört zu 只要 („solange … dann“); nach 只有 verlangt die notwendige Bedingung 才."
        },
        {
          "text": "都",
          "reason": "都 fasst zusammen („alle, immer“) und gehört zu 不管/无论, nicht zu 只有."
        },
        {
          "text": "也",
          "reason": "也 („auch“) gehört zu Mustern wie 即使……也……; es drückt keine notwendige Bedingung aus."
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
    "id": "g:只要……，就……",
    "pattern": "只要……，就……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 240,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "条件复句",
      "content": "只要……，就……"
    },
    "meaning": "wenn nur …, dann … (hinreichende Bedingung)",
    "formation": "只要 + Bedingung，(Subjekt +) 就 + Folge",
    "explanation": "只要 (zhǐyào) nennt eine Bedingung, die schon ausreicht: Ist sie erfüllt, tritt die Folge sicher ein – „wenn nur …, dann …“, „solange …“. Die Folge wird mit 就 (jiù) angeschlossen. 就 ist ein Adverb und steht im zweiten Teil nach dem Subjekt, direkt vor dem Verb: 只要你来，我就高兴 (wǒ jiù gāoxìng) „wenn du nur kommst, freue ich mich“ – nicht *就我高兴. 只要 kann vor oder nach dem Subjekt des ersten Teils stehen: 你只要努力 (nǐ zhǐyào nǔlì). Oft unterstreichen 能 (néng), 会 (huì) oder 一定 (yídìng) im zweiten Teil, dass die Folge sicher ist. Das Muster ist gesprochen wie geschrieben gleich üblich.",
    "notes": "只要 (zhǐyào) … 就 nennt eine hinreichende Bedingung („es genügt, dass …“), 只有 (zhǐyǒu) … 才 eine notwendige („nur wenn …, erst dann …“): 只要有票就能进 (zhǐyào yǒu piào jiù néng jìn) „wer ein Ticket hat, kommt rein“ – 只有有票才能进 (zhǐyǒu yǒu piào cái néng jìn) „nur wer ein Ticket hat, kommt rein“. 如果 (rúguǒ) … 就 ist ein neutrales „wenn …, dann …“ ohne den Gedanken „das genügt“. Typischer Fehler: 只要 mit 才 oder 只有 mit 就 kombinieren.",
    "examples": [
      {
        "chinese": "只要你多练习，就能说好汉语。",
        "pinyin": "Zhǐyào nǐ duō liànxí, jiù néng shuōhǎo Hànyǔ.",
        "german": "Wenn du nur genug übst, kannst du gut Chinesisch sprechen."
      },
      {
        "chinese": "只要天气好，我们就去爬山。",
        "pinyin": "Zhǐyào tiānqì hǎo, wǒmen jiù qù páshān.",
        "german": "Solange das Wetter gut ist, gehen wir in die Berge."
      },
      {
        "chinese": "你只要给我打个电话，我就马上过来。",
        "pinyin": "Nǐ zhǐyào gěi wǒ dǎ ge diànhuà, wǒ jiù mǎshàng guòlai.",
        "german": "Ein Anruf genügt, und ich komme sofort vorbei."
      }
    ],
    "legacyIds": [
      "g:只要...就...",
      "只要...就..."
    ],
    "related": [
      "g:只有……，才……",
      "g:如果……，就……",
      "g:不管……，都/也……",
      "g:除非……，否则/不然……"
    ],
    "quiz": {
      "example": 0,
      "answer": "只要",
      "distractors": [
        {
          "text": "只有",
          "reason": "只有 nennt eine notwendige Bedingung und verlangt 才 im zweiten Teil, nicht 就."
        },
        {
          "text": "虽然",
          "reason": "虽然 räumt etwas ein („obwohl“) und wird mit 但是 fortgesetzt, nicht mit einer Folge mit 就."
        },
        {
          "text": "因为",
          "reason": "因为 nennt einen tatsächlichen Grund („weil“); gemeint ist aber eine Bedingung: „wenn du nur übst“."
        }
      ]
    },
    "review": {
      "batch": "g003",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:为了……，……",
    "pattern": "为了……，……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 241,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "目的复句",
      "content": "为了……，……"
    },
    "meaning": "um … zu … (Zweck im ersten Satzteil)",
    "formation": "为了 + Zweck，(Subjekt +) Handlung",
    "notes": "Die Präposition 为了 (wèile) mit einem Nomen, etwa 为了孩子 (wèile háizi) „für die Kinder“, ist ein eigener Punkt (HSK 3). 为了……而…… (HSK 4) verbindet Zweck und Handlung in einem Satz ohne Komma; ……，好…… und ……，以便 (yǐbiàn) …… stellen den Zweck nach.",
    "explanation": "Im Zweck-Satzgefüge nennt der erste Teil mit 为了 (wèile) das Ziel, der zweite Teil die Handlung, die man dafür unternimmt: „Um … zu …, tut man …“. Hinter 为了 steht meist eine Verbgruppe oder ein kurzer Satz, ein Komma trennt die beiden Teile. Das Subjekt steht im zweiten Teil oder vor 为了. Anders als im Deutschen steht der Zweck in der Regel vorn; soll er nachgestellt werden, sagt man eher ……，是为了 (shì wèile) …… oder ……，为的是 (wèi de shì) ……. Typischer Fehler: 因为 (yīnwèi) statt 为了 – 因为 nennt einen Grund („weil“), 为了 ein Ziel („um zu, damit“). Das Muster ist gesprochen wie geschrieben üblich.",
    "examples": [
      {
        "chinese": "为了身体健康，爷爷每天早上去公园跑步。",
        "pinyin": "Wèile shēntǐ jiànkāng, yéye měi tiān zǎoshang qù gōngyuán pǎobù.",
        "german": "Um gesund zu bleiben, geht Opa jeden Morgen im Park joggen."
      },
      {
        "chinese": "为了买到便宜的机票，她很早就开始准备了。",
        "pinyin": "Wèile mǎidào piányi de jīpiào, tā hěn zǎo jiù kāishǐ zhǔnbèi le.",
        "german": "Um ein günstiges Flugticket zu bekommen, hat sie schon sehr früh mit der Planung angefangen."
      },
      {
        "chinese": "为了不迟到，我们打车去了机场。",
        "pinyin": "Wèile bù chídào, wǒmen dǎchē qù le jīchǎng.",
        "german": "Um nicht zu spät zu kommen, sind wir mit dem Taxi zum Flughafen gefahren."
      }
    ],
    "quiz": {
      "example": 2,
      "answer": "为了",
      "distractors": [
        {
          "text": "因为",
          "reason": "因为 nennt einen Grund („weil wir nicht zu spät kamen“); gemeint ist aber ein Ziel: „um nicht zu spät zu kommen“."
        },
        {
          "text": "虽然",
          "reason": "虽然 („obwohl“) räumt etwas ein und braucht 但是 im zweiten Teil; ein Ziel drückt es nicht aus."
        },
        {
          "text": "只要",
          "reason": "只要 nennt eine Bedingung und verlangt 就 im zweiten Teil; hier geht es um einen Zweck."
        }
      ]
    },
    "related": [
      "g:为了",
      "g:为了……而……",
      "g:……，为的是……",
      "g:……，好……",
      "g:……，以便……"
    ],
    "review": {
      "batch": "g003",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:……了……（就）……",
    "pattern": "……了……（就）……",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Satzgefüge",
    "syllabus": {
      "no": 242,
      "category": "句子的类型",
      "categoryName": "复句",
      "item": "紧缩复句",
      "content": "……了……（就）……"
    },
    "meaning": "gleich nachdem …, … (Abfolge zweier Handlungen)",
    "formation": "Verb1 + 了 + Objekt (+ 就) + Verb2",
    "notes": "一……就…… (HSK 2) betont noch stärker die Unmittelbarkeit („kaum …, schon …“) und braucht kein 了. Mit 再 (zài) statt 就 klingt der Satz wie ein Plan oder eine Aufforderung: 做完了作业再玩 (zuòwán le zuòyè zài wán) „erst die Hausaufgaben fertig machen, dann spielen“.",
    "explanation": "Ein verkürztes Satzgefüge (紧缩复句, jǐnsuō fùjù) ohne Komma: Die erste Handlung trägt 了 (le) direkt hinter dem Verb und ist abgeschlossen, dann folgt die zweite – „nachdem …, …“, „gleich nach …“. 就 (jiù) betont, dass die zweite Handlung unmittelbar oder wie selbstverständlich folgt; es kann auch fehlen. 了 markiert hier nur die Reihenfolge, nicht die Vergangenheit: Der Satz kann ebenso Zukünftiges oder Gewohnheiten beschreiben, z. B. 明天下了课就去 (míngtiān xià le kè jiù qù) „morgen gleich nach dem Unterricht gehe ich hin“. Hinter Verb1 steht meist ein kurzes Objekt. Typischer Fehler: 了 ans Satzende setzen statt direkt hinter Verb1.",
    "examples": [
      {
        "chinese": "我下了班就去超市买东西。",
        "pinyin": "Wǒ xià le bān jiù qù chāoshì mǎi dōngxi.",
        "german": "Gleich nach der Arbeit gehe ich in den Supermarkt einkaufen."
      },
      {
        "chinese": "他每天吃了晚饭就出去散步。",
        "pinyin": "Tā měi tiān chī le wǎnfàn jiù chūqu sànbù.",
        "german": "Jeden Tag geht er gleich nach dem Abendessen spazieren."
      },
      {
        "chinese": "明天你到了北京就给我打电话。",
        "pinyin": "Míngtiān nǐ dào le Běijīng jiù gěi wǒ dǎ diànhuà.",
        "german": "Ruf mich morgen an, sobald du in Peking angekommen bist."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "了",
      "distractors": [
        {
          "text": "着",
          "reason": "着 beschreibt einen andauernden Zustand; hier muss die erste Handlung abgeschlossen sein, bevor die zweite beginnt."
        },
        {
          "text": "过",
          "reason": "过 drückt eine Erfahrung („schon einmal“) aus, keine Abfolge zweier Handlungen."
        },
        {
          "text": "得",
          "reason": "得 leitet eine Ergänzung zu Art oder Grad ein und kann nicht zwischen Verb und Objekt stehen."
        }
      ]
    },
    "related": [
      "g:一……就……",
      "g:了¹"
    ],
    "review": {
      "batch": "g003",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:概数表达法2：（1）用“大概”表示概数",
    "pattern": "概数表达法2：（1）用“大概”表示概数",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 243,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "概数表达法2：（1）用“大概”表示概数"
    },
    "meaning": "ungefähre Zahl mit vorangestelltem „etwa“",
    "formation": "大概 + (Verb +) Zahl + Zählwort (+ Nomen)",
    "notes": "Ohne Zahl bedeutet 大概 (dàgài) „wahrscheinlich, wohl“: 他大概不来了 (tā dàgài bù lái le) „er kommt wohl nicht mehr“. Weitere Mittel für ungefähre Zahlen: in HSK 2 几, in HSK 3 Nachbarzahlen wie 两三个 (liǎng sān ge) „zwei, drei Stück“, in HSK 4 大约 (dàyuē), 左右 (zuǒyòu) und 前后 (qiánhòu).",
    "explanation": "Steht 大概 (dàgài) vor einer Zahlenangabe, wird sie zur Schätzung: 大概二十个人 (dàgài èrshí ge rén) „etwa zwanzig Leute“. 大概 steht direkt vor der Zahl oder vor dem Verb, zu dem die Zahl gehört: 他大概三十岁 (tā dàgài sānshí suì) „er ist etwa dreißig“, 我们大概走了两个小时 (wǒmen dàgài zǒu le liǎng ge xiǎoshí) „wir sind ungefähr zwei Stunden gelaufen“. Die Zahl selbst bleibt unverändert; ungefähr wird sie erst durch 大概. Anders als 左右 (zuǒyòu), das hinter der Zahl steht, kommt 大概 immer davor. Es ist vor allem in der gesprochenen Sprache häufig; in Texten liest man oft 大约 (dàyuē).",
    "examples": [
      {
        "chinese": "这个城市大概有五百万人。",
        "pinyin": "Zhège chéngshì dàgài yǒu wǔbǎi wàn rén.",
        "german": "Diese Stadt hat etwa fünf Millionen Einwohner."
      },
      {
        "chinese": "从我家到学校大概要二十分钟。",
        "pinyin": "Cóng wǒ jiā dào xuéxiào dàgài yào èrshí fēnzhōng.",
        "german": "Von mir zu Hause bis zur Schule braucht man ungefähr zwanzig Minuten."
      },
      {
        "chinese": "昨天的晚会大概来了一百个人。",
        "pinyin": "Zuótiān de wǎnhuì dàgài lái le yìbǎi ge rén.",
        "german": "Zur Abendfeier gestern kamen ungefähr hundert Leute."
      }
    ],
    "quiz": {
      "example": 1,
      "answer": "大概",
      "distractors": [
        {
          "text": "左右",
          "reason": "左右 steht hinter der Zahlenangabe (二十分钟左右), nicht davor."
        },
        {
          "text": "多",
          "reason": "多 steht hinter der Zahl bzw. dem Zählwort (二十多分钟) und bedeutet „etwas mehr als“."
        },
        {
          "text": "几",
          "reason": "几 ersetzt eine Ziffer (二十几分钟) und kann nicht vor der ganzen Zahl stehen."
        }
      ],
      "accepted": [
        "大约",
        "差不多"
      ]
    },
    "related": [
      "g:概数表达法1：（1）用“几”表示概数",
      "g:数的表达法：相邻数词连用表示概数",
      "g:数的表示法：用“大约、左右、前后”表示概数",
      "g:数词+多+量词"
    ],
    "review": {
      "batch": "g003",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:数的表达法：相邻数词连用表示概数",
    "pattern": "数的表达法：相邻数词连用表示概数",
    "level": "HSK3",
    "kind": "pattern",
    "category": "Zahlen & Zeit",
    "syllabus": {
      "no": 244,
      "category": "特殊表达法",
      "categoryName": "数的表达法",
      "item": "",
      "content": "（2）相邻数词连用表示概数"
    },
    "meaning": "ungefähre Zahl durch zwei Nachbarzahlen („zwei, drei …“)",
    "formation": "Zahl + nächsthöhere Zahl + Zählwort (+ Nomen)",
    "notes": "三五 (sān wǔ) ist eine feste Verbindung aus nicht benachbarten Zahlen: 三五天 (sān wǔ tiān) „ein paar Tage“. Andere Mittel für ungefähre Zahlen: in HSK 2 几, in HSK 3 大概 (dàgài), in HSK 4 来 und 左右 (zuǒyòu).",
    "explanation": "Zwei benachbarte Zahlen direkt hintereinander, die kleinere zuerst, ergeben eine ungefähre Angabe: 三四个人 (sān sì ge rén) „drei, vier Leute“, 七八天 (qī bā tiān) „sieben, acht Tage“. Zwischen den Zahlen steht kein Komma und kein 和 (hé). Vor dem Zählwort gilt wie sonst 两 (liǎng) statt 二: 一两个 (yì liǎng ge), 两三天 (liǎng sān tiān). Auch Zehner und Zahlen über zehn lassen sich so verbinden: 三四十 (sān sì shí) „dreißig, vierzig“, 十五六岁 (shíwǔ liù suì) „fünfzehn, sechzehn Jahre alt“. 九 und 十 werden nicht so verbunden, weil 九十 (jiǔshí) „neunzig“ bedeutet. Die Form ist gesprochen wie geschrieben üblich.",
    "examples": [
      {
        "chinese": "我只需要两三天就能做完。",
        "pinyin": "Wǒ zhǐ xūyào liǎng sān tiān jiù néng zuòwán.",
        "german": "Ich brauche nur zwei, drei Tage, dann bin ich fertig."
      },
      {
        "chinese": "教室里只有七八个学生。",
        "pinyin": "Jiàoshì lǐ zhǐ yǒu qī bā ge xuésheng.",
        "german": "Im Klassenzimmer sind nur sieben, acht Schüler."
      },
      {
        "chinese": "那个女孩看起来十七八岁。",
        "pinyin": "Nàge nǚhái kàn qǐlai shíqī bā suì.",
        "german": "Das Mädchen sieht aus wie siebzehn, achtzehn."
      },
      {
        "chinese": "这件衣服三四百块钱。",
        "pinyin": "Zhè jiàn yīfu sān sì bǎi kuài qián.",
        "german": "Dieses Kleidungsstück kostet drei-, vierhundert Yuan."
      }
    ],
    "quiz": {
      "example": 0,
      "answer": "两三",
      "distractors": [
        {
          "text": "二三",
          "reason": "Vor einem Zählwort wie 天 steht 两, nicht 二."
        },
        {
          "text": "两和三",
          "reason": "Zwischen den Nachbarzahlen steht kein 和; sie folgen direkt aufeinander."
        },
        {
          "text": "两三十",
          "reason": "两三十天 bedeutet „zwanzig, dreißig Tage“, nicht „zwei, drei Tage“."
        }
      ]
    },
    "related": [
      "g:概数表达法2：（1）用“大概”表示概数",
      "g:概数表达法1：（1）用“几”表示概数",
      "g:概数表示法3：数词+来+量词",
      "g:数的表示法：用“大约、左右、前后”表示概数"
    ],
    "review": {
      "batch": "g003",
      "policy": "author+review",
      "date": "2026-10-10"
    }
  }
]);
