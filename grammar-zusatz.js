// Zhongwen Explorer grammar, Zusatz: points of the HSK 2025 grammar syllabus (语法大纲, scripts/hsk2025/grammar.json) — here: further points outside the syllabus.
// Built by scripts/grammar/build-grammar.cjs; content by the enrichment campaign.
window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat([
  {
    "id": "g:...的时候",
    "pattern": "...的时候",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "als / wenn (zeitlich)",
    "formation": "Verb/Satz + 的时候, Hauptsatz",
    "explanation": "Drückt den Zeitpunkt einer Handlung aus (‹als/wenn etwas passiert›).",
    "notes": "Steht immer vor dem Hauptsatz.",
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
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:多少钱",
    "pattern": "多少钱",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
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
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:到 + Ort/Zeit",
    "pattern": "到 + Ort/Zeit",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
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
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:多/少 + Verb",
    "pattern": "多/少 + Verb",
    "level": "Zusatz",
    "kind": "zusatz",
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
      },
      {
        "chinese": "多练习。",
        "pinyin": "Duō liànxí.",
        "german": "Übe mehr."
      }
    ],
    "legacyIds": [
      "多/少 + Verb",
      "g:多 + Verb",
      "多 + Verb"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不太 + Adjektiv",
    "pattern": "不太 + Adjektiv",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "nicht besonders / nicht sehr (abgemilderte Verneinung)",
    "pinyin": "bú tài + Adjektiv",
    "examples": [
      {
        "chinese": "我不太喜欢。",
        "pinyin": "Wǒ bú tài xǐhuan.",
        "german": "Ich mag es nicht besonders."
      },
      {
        "chinese": "这个不太好。",
        "pinyin": "Zhège bú tài hǎo.",
        "german": "Das ist nicht besonders gut."
      }
    ],
    "legacyIds": [
      "不太 + Adjektiv"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:之所以...是因为...",
    "pattern": "之所以...是因为...",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "der Grund, warum ... ist, dass ...",
    "formation": "之所以 + Ergebnis, 是因为 + Grund",
    "explanation": "Betont den Grund für ein bekanntes Ergebnis. Umkehrung von 因为...所以...",
    "notes": "Formellerer Stil, eher schriftsprachlich.",
    "examples": [
      {
        "chinese": "我之所以学中文，是因为喜欢中国文化。",
        "pinyin": "Wǒ zhī suǒyǐ xué Zhōngwén, shì yīnwèi xǐhuan Zhōngguó wénhuà.",
        "german": "Der Grund, warum ich Chinesisch lerne, ist, dass ich die chinesische Kultur mag."
      },
      {
        "chinese": "他之所以迟到，是因为堵车了。",
        "pinyin": "Tā zhī suǒyǐ chídào, shì yīnwèi dǔchē le.",
        "german": "Der Grund, warum er zu spät kam, ist der Stau."
      },
      {
        "chinese": "他之所以成功，是因为他很努力。",
        "pinyin": "Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.",
        "german": "Der Grund, warum er erfolgreich ist, ist, dass er sehr fleissig ist."
      },
      {
        "chinese": "我之所以迟到，是因为路上堵车了。",
        "pinyin": "Wǒ zhī suǒyǐ chídào, shì yīnwèi lùshang dǔchē le.",
        "german": "Der Grund, warum ich zu spaet kam, ist, dass es einen Stau gab."
      },
      {
        "chinese": "她之所以学中文，是因为她喜欢中国文化。",
        "pinyin": "Tā zhī suǒyǐ xué Zhōngwén, shì yīnwèi tā xǐhuan Zhōngguó wénhuà.",
        "german": "Der Grund, warum sie Chinesisch lernt, ist, dass sie die chinesische Kultur mag."
      }
    ],
    "legacyIds": [
      "之所以...是因为..."
    ],
    "meaningStatus": "draft",
    "related": [
      "g:因为……，所以……"
    ]
  },
  {
    "id": "g:再说",
    "pattern": "再说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "außerdem / und darüber hinaus",
    "formation": "Satz₁, 再说 + Satz₂",
    "explanation": "Fügt einen weiteren Grund oder eine Ergänzung hinzu.",
    "notes": "再说 steht am Anfang des zweiten Satzes.",
    "examples": [
      {
        "chinese": "我不想去，再说我也没时间。",
        "pinyin": "Wǒ bù xiǎng qù, zàishuō wǒ yě méi shíjiān.",
        "german": "Ich will nicht gehen, außerdem habe ich keine Zeit."
      },
      {
        "chinese": "这个太贵了，再说质量也不好。",
        "pinyin": "Zhège tài guì le, zàishuō zhìliàng yě bù hǎo.",
        "german": "Das ist zu teuer, und die Qualität ist auch nicht gut."
      }
    ],
    "legacyIds": [
      "再说"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:另外"
    ]
  },
  {
    "id": "g:原来",
    "pattern": "原来",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "ach so / es stellt sich heraus, dass",
    "pinyin": "yuánlái",
    "examples": [
      {
        "chinese": "原来你是中国人！",
        "pinyin": "Yuánlái nǐ shì Zhōngguó rén!",
        "german": "Ach so, du bist Chinese!"
      },
      {
        "chinese": "原来他已经知道了。",
        "pinyin": "Yuánlái tā yǐjīng zhīdào le.",
        "german": "Es stellte sich heraus, dass er es schon wusste."
      },
      {
        "chinese": "原来是你啊！我没认出来。",
        "pinyin": "Yuánlái shì nǐ a! Wǒ méi rèn chūlái.",
        "german": "Ach, du bist es! Ich habe dich nicht erkannt."
      },
      {
        "chinese": "我以为他是日本人，原来他是韩国人。",
        "pinyin": "Wǒ yǐwéi tā shì Rìběn rén, yuánlái tā shì Hánguó rén.",
        "german": "Ich dachte, er sei Japaner, aber es stellt sich heraus, dass er Koreaner ist."
      }
    ],
    "legacyIds": [
      "原来"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:看样子",
    "pattern": "看样子",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "es sieht so aus als ob / anscheinend",
    "pinyin": "kàn yàngzi",
    "examples": [
      {
        "chinese": "看样子要下雨了。",
        "pinyin": "Kàn yàngzi yào xià yǔ le.",
        "german": "Es sieht so aus, als ob es regnen wird."
      },
      {
        "chinese": "看样子他不太高兴。",
        "pinyin": "Kàn yàngzi tā bú tài gāoxìng.",
        "german": "Anscheinend ist er nicht sehr froh."
      }
    ],
    "legacyIds": [
      "看样子"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:难免",
    "pattern": "难免",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "unvermeidlich; es lässt sich kaum vermeiden, dass",
    "pinyin": "nánmiǎn",
    "formation": "难免 + (会/要) + Verb/Adjektiv",
    "explanation": "Drückt aus, dass etwas unter den gegebenen Umständen unvermeidlich ist. Wird oft für negative oder unerwünschte Situationen verwendet.",
    "notes": "难免 betont, dass etwas natürlich und verständlich ist. Es hat oft einen entschuldigenden oder verständnisvollen Ton.",
    "examples": [
      {
        "chinese": "刚到一个新环境，难免会不习惯。",
        "pinyin": "Gāng dào yí gè xīn huánjìng, nánmiǎn huì bù xíguàn.",
        "german": "Wenn man gerade in eine neue Umgebung kommt, ist es unvermeidlich, dass man sich nicht daran gewöhnt."
      },
      {
        "chinese": "第一次做这种工作，难免会犯错误。",
        "pinyin": "Dì yī cì zuò zhè zhǒng gōngzuò, nánmiǎn huì fàn cuòwù.",
        "german": "Wenn man diese Arbeit zum ersten Mal macht, lassen sich Fehler kaum vermeiden."
      },
      {
        "chinese": "刚开始学，难免会犯错。",
        "pinyin": "Gāng kāishǐ xué, nánmiǎn huì fàn cuò.",
        "german": "Wenn man gerade anfaengt zu lernen, sind Fehler unvermeidlich."
      },
      {
        "chinese": "一个人在国外生活，难免会想家。",
        "pinyin": "Yí ge rén zài guówài shēnghuó, nánmiǎn huì xiǎng jiā.",
        "german": "Wenn man allein im Ausland lebt, bekommt man unvermeidlich Heimweh."
      }
    ],
    "legacyIds": [
      "难免"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:未免",
      "g:不免"
    ]
  },
  {
    "id": "g:之一",
    "pattern": "之一",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "einer von; eines der (Superlativ-Zugehörigkeit)",
    "pinyin": "zhī yī",
    "examples": [
      {
        "chinese": "他是我最好的朋友之一。",
        "pinyin": "Tā shì wǒ zuì hǎo de péngyou zhī yī.",
        "german": "Er ist einer meiner besten Freunde."
      },
      {
        "chinese": "这是世界上最大的城市之一。",
        "pinyin": "Zhè shì shìjiè shàng zuìdà de chéngshì zhī yī.",
        "german": "Dies ist eine der größten Städte der Welt."
      }
    ],
    "legacyIds": [
      "之一"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:果不其然",
    "pattern": "果不其然",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "wie erwartet; tatsächlich; ganz wie vermutet",
    "pinyin": "guǒ bù qí rán",
    "examples": [
      {
        "chinese": "我就知道他会迟到，果不其然。",
        "pinyin": "Wǒ jiù zhīdào tā huì chídào, guǒ bù qí rán.",
        "german": "Ich wusste, dass er zu spät kommen würde, und tatsächlich war es so."
      },
      {
        "chinese": "果不其然，第二天就下雨了。",
        "pinyin": "Guǒ bù qí rán, dì èr tiān jiù xià yǔ le.",
        "german": "Wie erwartet hat es am nächsten Tag geregnet."
      }
    ],
    "legacyIds": [
      "果不其然"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:说白了",
    "pattern": "说白了",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "offen gesagt; klipp und klar; im Klartext",
    "pinyin": "shuō bái le",
    "examples": [
      {
        "chinese": "说白了，他就是不想帮忙。",
        "pinyin": "Shuō bái le, tā jiùshì bù xiǎng bāngmáng.",
        "german": "Im Klartext: Er will einfach nicht helfen."
      },
      {
        "chinese": "说白了，这不过是钱的问题。",
        "pinyin": "Shuō bái le, zhè búguò shì qián de wèntí.",
        "german": "Offen gesagt ist es nur eine Frage des Geldes."
      }
    ],
    "legacyIds": [
      "说白了"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:以免",
    "pattern": "以免",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "um zu vermeiden, dass; damit nicht",
    "formation": "Handlung/Massnahme + 以免 + unerwünschtes Ergebnis",
    "explanation": "Wird verwendet, um auszudrücken, dass man etwas tut, um ein negatives Ergebnis zu verhindern. Steht immer vor dem zu vermeidenden Ergebnis.",
    "notes": "以免 ist formeller als 免得. Im gesprochenen Chinesisch wird eher 免得 verwendet.",
    "examples": [
      {
        "chinese": "你应该早点出发，以免迟到。",
        "pinyin": "Nǐ yīnggāi zǎo diǎn chūfā, yǐmiǎn chídào.",
        "german": "Du solltest früher losfahren, um zu vermeiden, dass du zu spät kommst."
      },
      {
        "chinese": "请把窗户关好，以免着凉。",
        "pinyin": "Qǐng bǎ chuānghu guān hǎo, yǐmiǎn zháoliáng.",
        "german": "Bitte mach das Fenster richtig zu, damit du dich nicht erkältest."
      },
      {
        "chinese": "多检查几遍，以免出错。",
        "pinyin": "Duō jiǎnchá jǐ biàn, yǐmiǎn chūcuò.",
        "german": "Überprüfe es ein paar Mal mehr, um Fehler zu vermeiden."
      },
      {
        "chinese": "请提前通知我们，以免造成不便。",
        "pinyin": "Qǐng tíqián tōngzhī wǒmen, yǐmiǎn zàochéng bùbiàn.",
        "german": "Bitte benachrichtigen Sie uns im Voraus, um Unannehmlichkeiten zu vermeiden."
      },
      {
        "chinese": "出门前检查一下门窗，以免被盗。",
        "pinyin": "Chūmén qián jiǎnchá yíxià ménchuāng, yǐmiǎn bèi dào.",
        "german": "Überprüfe vor dem Ausgehen Türen und Fenster, damit nicht eingebrochen wird."
      }
    ],
    "legacyIds": [
      "以免"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:免得"
    ]
  },
  {
    "id": "g:固然",
    "pattern": "固然",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "zwar; gewiss; zweifellos (aber...)",
    "formation": "固然 + Zugeständnis，但是/可是/不过 + Einschränkung",
    "explanation": "Räumt einen Punkt ein, leitet aber gleichzeitig eine Einschränkung oder einen Gegenargument ein. Ähnlich wie \"zwar...aber...\" im Deutschen.",
    "notes": "固然 ist formeller als 虽然 und wird vor allem in Argumentationen und Aufsätzen verwendet.",
    "examples": [
      {
        "chinese": "钱固然重要，但健康更重要。",
        "pinyin": "Qián gùrán zhòngyào, dàn jiànkāng gèng zhòngyào.",
        "german": "Geld ist zwar wichtig, aber Gesundheit ist wichtiger."
      },
      {
        "chinese": "他的方法固然有效，不过成本太高了。",
        "pinyin": "Tā de fāngfǎ gùrán yǒuxiào, búguò chéngběn tài gāo le.",
        "german": "Seine Methode ist zwar effektiv, aber die Kosten sind zu hoch."
      },
      {
        "chinese": "他的方法固然有效，但是成本太高了。",
        "pinyin": "Tā de fāngfǎ gùrán yǒuxiào, dànshì chéngběn tài gāo le.",
        "german": "Seine Methode ist zwar wirksam, aber die Kosten sind zu hoch."
      },
      {
        "chinese": "经验固然重要，创新也不可忽视。",
        "pinyin": "Jīngyàn gùrán zhòngyào, chuàngxīn yě bùkě hūshì.",
        "german": "Erfahrung ist gewiss wichtig, aber Innovation darf man auch nicht vernachlässigen."
      }
    ],
    "legacyIds": [
      "固然"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:虽然……，但是……",
      "g:尽管……，但是/可是……",
      "g:诚然"
    ]
  },
  {
    "id": "g:岂不是",
    "pattern": "岂不是",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "Ist das nicht...? / Wäre das nicht...?",
    "pinyin": "qǐ bú shì",
    "formation": "岂不是 + Aussage",
    "explanation": "Rhetorische Frage, die eine Selbstverständlichkeit betont. Drückt aus, dass etwas offensichtlich der Fall ist. Gehobener, literarischer Stil.",
    "notes": "Gehobener als 难道, wird häufig in formeller Sprache und Literatur verwendet.",
    "examples": [
      {
        "chinese": "你不去的话，岂不是浪费了这个机会？",
        "pinyin": "Nǐ bú qù de huà, qǐ bú shì làngfèi le zhège jīhuì?",
        "german": "Wenn du nicht hingehst, wäre das nicht eine Verschwendung dieser Gelegenheit?"
      },
      {
        "chinese": "这样做岂不是自相矛盾吗？",
        "pinyin": "Zhèyàng zuò qǐ bú shì zìxiāng máodùn ma?",
        "german": "Wäre es nicht widersprüchlich, so zu handeln?"
      },
      {
        "chinese": "这样做岂不是浪费时间？",
        "pinyin": "Zhèyàng zuò qǐ bú shì làngfèi shíjiān?",
        "german": "Wäre das nicht Zeitverschwendung?"
      },
      {
        "chinese": "不去的话，岂不是太可惜了？",
        "pinyin": "Bú qù de huà, qǐ bú shì tài kěxī le?",
        "german": "Wenn man nicht hingeht, wäre das nicht zu schade?"
      }
    ],
    "legacyIds": [
      "岂不是"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:难道……吗？"
    ]
  },
  {
    "id": "g:但凡",
    "pattern": "但凡",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "Wenn auch nur im Geringsten / Solange auch nur",
    "pinyin": "dànfán",
    "formation": "但凡 + Bedingung, 就 + Ergebnis",
    "explanation": "Drückt aus, dass selbst eine minimale Bedingung ausreicht, um ein Ergebnis zu erzielen. Oft hypothetisch.",
    "notes": "Stärker als 只要, betont das Minimum. Oft in Klagen oder Bedauern verwendet.",
    "examples": [
      {
        "chinese": "但凡有一点办法，我也不会来求你。",
        "pinyin": "Dànfán yǒu yì diǎn bànfǎ, wǒ yě bú huì lái qiú nǐ.",
        "german": "Wenn es auch nur den geringsten anderen Weg gäbe, würde ich nicht kommen und dich bitten."
      },
      {
        "chinese": "但凡他肯努力，就不会落到这个地步。",
        "pinyin": "Dànfán tā kěn nǔlì, jiù bú huì luò dào zhège dìbù.",
        "german": "Wenn er auch nur ein wenig bereit gewesen wäre, sich anzustrengen, wäre es nicht so weit gekommen."
      },
      {
        "chinese": "但凡有一点机会，我就不会放弃。",
        "pinyin": "Dànfán yǒu yìdiǎn jīhuì, wǒ jiù bú huì fàngqì.",
        "german": "Solange es auch nur die geringste Chance gibt, werde ich nicht aufgeben."
      },
      {
        "chinese": "但凡你努力了，结果不会太差。",
        "pinyin": "Dànfán nǐ nǔlì le, jiéguǒ bú huì tài chà.",
        "german": "Wenn du dich nur im Geringsten anstrengst, wird das Ergebnis nicht zu schlecht sein."
      }
    ],
    "legacyIds": [
      "但凡"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:要不是…就…",
    "pattern": "要不是…就…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "wenn nicht… dann hätte…",
    "pinyin": "yào bú shì…jiù…",
    "examples": [
      {
        "chinese": "要不是你提醒我，我就忘了。",
        "pinyin": "Yào bú shì nǐ tíxǐng wǒ, wǒ jiù wàng le.",
        "german": "Wenn du mich nicht erinnert hättest, hätte ich es vergessen."
      },
      {
        "chinese": "要不是下雨，我们就出去玩了。",
        "pinyin": "Yào bú shì xià yǔ, wǒmen jiù chūqù wán le.",
        "german": "Wenn es nicht geregnet hätte, wären wir rausgegangen."
      }
    ],
    "legacyIds": [
      "要不是…就…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:何止",
    "pattern": "何止",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "weit mehr als; bei weitem nicht nur",
    "pinyin": "hézhǐ",
    "examples": [
      {
        "chinese": "他的问题何止这一个？",
        "pinyin": "Tā de wèntí hézhǐ zhè yí gè?",
        "german": "Sind seine Probleme etwa nur dieses eine?"
      },
      {
        "chinese": "损失何止一百万。",
        "pinyin": "Sǔnshī hézhǐ yì bǎi wàn.",
        "german": "Der Verlust beträgt weit mehr als eine Million."
      }
    ],
    "legacyIds": [
      "何止"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:迫不得已",
    "pattern": "迫不得已",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "gezwungenermaßen; als letzter Ausweg",
    "pinyin": "pò bù dé yǐ",
    "examples": [
      {
        "chinese": "他是迫不得已才撒谎的。",
        "pinyin": "Tā shì pò bù dé yǐ cái sāhuǎng de.",
        "german": "Er hat nur gezwungenermaßen gelogen."
      }
    ],
    "legacyIds": [
      "迫不得已"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:与其说…不如说…",
    "pattern": "与其说…不如说…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "eher… als…; man sollte eher sagen… als…",
    "pinyin": "yǔqí shuō…bùrú shuō…",
    "examples": [
      {
        "chinese": "与其说他聪明，不如说他勤奋。",
        "pinyin": "Yǔqí shuō tā cōngmíng, bùrú shuō tā qínfèn.",
        "german": "Eher als dass er klug ist, sollte man sagen, er ist fleißig."
      },
      {
        "chinese": "与其说他懒，不如说他没有动力。",
        "pinyin": "Yǔqí shuō tā lǎn, bùrú shuō tā méiyǒu dònglì.",
        "german": "Anstatt zu sagen, dass er faul ist, waere es besser zu sagen, dass ihm die Motivation fehlt."
      },
      {
        "chinese": "与其说她漂亮，不如说她有气质。",
        "pinyin": "Yǔqí shuō tā piàoliang, bùrú shuō tā yǒu qìzhì.",
        "german": "Anstatt zu sagen, dass sie huebsch ist, waere es besser zu sagen, dass sie Ausstrahlung hat."
      }
    ],
    "legacyIds": [
      "与其说…不如说…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:倒不如",
    "pattern": "倒不如",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "es wäre besser; da könnte man eher",
    "pinyin": "dào bùrú",
    "examples": [
      {
        "chinese": "与其抱怨，倒不如自己动手。",
        "pinyin": "Yǔqí bàoyuàn, dào bùrú zìjǐ dòngshǒu.",
        "german": "Statt sich zu beschweren, wäre es besser, selbst Hand anzulegen."
      },
      {
        "chinese": "等他不如倒不如我们先走。",
        "pinyin": "Děng tā bùrú dào bùrú wǒmen xiān zǒu.",
        "german": "Statt auf ihn zu warten, gehen wir lieber schon mal vor."
      }
    ],
    "legacyIds": [
      "倒不如"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不至于",
    "pattern": "不至于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "es wird wohl nicht so weit kommen, dass; so schlimm wird es nicht",
    "pinyin": "bú zhìyú",
    "examples": [
      {
        "chinese": "迟到几分钟不至于被开除吧？",
        "pinyin": "Chídào jǐ fēnzhōng bú zhìyú bèi kāichú ba?",
        "german": "Ein paar Minuten zu spät kommen wird doch wohl nicht zur Kündigung führen?"
      },
      {
        "chinese": "事情不至于那么严重。",
        "pinyin": "Shìqíng bú zhìyú nàme yánzhòng.",
        "german": "Die Sache ist wohl nicht so ernst."
      },
      {
        "chinese": "情况不至于那么严重吧？",
        "pinyin": "Qíngkuàng bùzhìyú nàme yánzhòng ba?",
        "german": "So schlimm wird die Lage wohl nicht sein, oder?"
      },
      {
        "chinese": "他虽然生气了，但不至于跟你绝交。",
        "pinyin": "Tā suīrán shēngqì le, dàn bùzhìyú gēn nǐ juéjiāo.",
        "german": "Er ist zwar wuetend, aber es wird wohl nicht so weit kommen, dass er den Kontakt mit dir abbricht."
      }
    ],
    "legacyIds": [
      "不至于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:之所以…是因为…",
    "pattern": "之所以…是因为…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "der Grund, warum… ist, dass…",
    "pinyin": "zhī suǒyǐ…shì yīnwèi…",
    "examples": [
      {
        "chinese": "他之所以成功，是因为他从不放弃。",
        "pinyin": "Tā zhī suǒyǐ chénggōng, shì yīnwèi tā cóng bù fàngqì.",
        "german": "Der Grund, warum er erfolgreich ist, ist, dass er nie aufgibt."
      },
      {
        "chinese": "我之所以迟到，是因为路上堵车了。",
        "pinyin": "Wǒ zhī suǒyǐ chídào, shì yīnwèi lùshang dǔchē le.",
        "german": "Der Grund, warum ich zu spät kam, ist, dass es einen Stau gab."
      },
      {
        "chinese": "他之所以成功，是因为他从不轻言放弃。",
        "pinyin": "Tā zhīsuǒyǐ chénggōng, shì yīnwèi tā cóng bù qīngyán fàngqì.",
        "german": "Der Grund, warum er erfolgreich ist, ist, dass er niemals leichtfertig aufgibt."
      },
      {
        "chinese": "我之所以这样做，是因为没有其他选择。",
        "pinyin": "Wǒ zhīsuǒyǐ zhèyàng zuò, shì yīnwèi méiyǒu qítā xuǎnzé.",
        "german": "Der Grund, warum ich das so gemacht habe, ist, dass es keine andere Wahl gab."
      }
    ],
    "legacyIds": [
      "之所以…是因为…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:加以",
    "pattern": "加以",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "etw. einer Behandlung unterziehen (formell)",
    "pinyin": "jiāyǐ",
    "examples": [
      {
        "chinese": "这个问题需要加以解决。",
        "pinyin": "Zhège wèntí xūyào jiāyǐ jiějué.",
        "german": "Dieses Problem muss gelöst werden."
      },
      {
        "chinese": "对于违规行为，必须加以制止。",
        "pinyin": "Duìyú wéiguī xíngwéi, bìxū jiāyǐ zhìzhǐ.",
        "german": "Verstöße müssen unterbunden werden."
      }
    ],
    "legacyIds": [
      "加以"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:进而",
    "pattern": "进而",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "und darüber hinaus; weitergehend; ferner",
    "pinyin": "jìnér",
    "examples": [
      {
        "chinese": "他先学会了基础知识，进而开始研究更复杂的问题。",
        "pinyin": "Tā xiān xuéhuì le jīchǔ zhīshi, jìnér kāishǐ yánjiū gèng fùzá de wèntí.",
        "german": "Er lernte zuerst die Grundlagen und begann dann, komplexere Probleme zu erforschen."
      },
      {
        "chinese": "经济的发展进而促进了社会的进步。",
        "pinyin": "Jīngjì de fāzhǎn jìnér cùjìn le shèhuì de jìnbù.",
        "german": "Die wirtschaftliche Entwicklung förderte weitergehend den gesellschaftlichen Fortschritt."
      }
    ],
    "legacyIds": [
      "进而"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:继而",
    "pattern": "继而",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "daraufhin; anschließend; kurz danach",
    "pinyin": "jìér",
    "examples": [
      {
        "chinese": "他先是惊讶，继而露出了笑容。",
        "pinyin": "Tā xiān shì jīngyà, jìér lùchū le xiàoróng.",
        "german": "Er war zunächst überrascht, zeigte daraufhin aber ein Lächeln."
      },
      {
        "chinese": "天空先变暗，继而下起了大雨。",
        "pinyin": "Tiānkōng xiān biàn àn, jìér xià qǐ le dà yǔ.",
        "german": "Der Himmel verdunkelte sich zuerst, dann fing es an, stark zu regnen."
      }
    ],
    "legacyIds": [
      "继而"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:随之",
    "pattern": "随之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "damit einhergehend; darauf folgend",
    "pinyin": "suízhī",
    "examples": [
      {
        "chinese": "科技的进步，随之带来了新的挑战。",
        "pinyin": "Kējì de jìnbù, suízhī dàilái le xīn de tiǎozhàn.",
        "german": "Der technologische Fortschritt brachte damit einhergehend neue Herausforderungen."
      },
      {
        "chinese": "人口增长，随之而来的是资源紧张。",
        "pinyin": "Rénkǒu zēngzhǎng, suízhī ér lái de shì zīyuán jǐnzhāng.",
        "german": "Mit dem Bevölkerungswachstum ging eine Ressourcenknappheit einher."
      }
    ],
    "legacyIds": [
      "随之"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:与此同时",
    "pattern": "与此同时",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "gleichzeitig; zur gleichen Zeit",
    "pinyin": "yǔcǐ tóngshí",
    "examples": [
      {
        "chinese": "经济快速发展，与此同时，环境问题也日益突出。",
        "pinyin": "Jīngjì kuàisù fāzhǎn, yǔcǐ tóngshí, huánjìng wèntí yě rìyì tūchū.",
        "german": "Die Wirtschaft entwickelt sich rasant, gleichzeitig werden Umweltprobleme immer gravierender."
      },
      {
        "chinese": "他在公司工作，与此同时还在攻读硕士学位。",
        "pinyin": "Tā zài gōngsī gōngzuò, yǔcǐ tóngshí hái zài gōngdú shuòshì xuéwèi.",
        "german": "Er arbeitet in einer Firma und studiert gleichzeitig für seinen Masterabschluss."
      }
    ],
    "legacyIds": [
      "与此同时"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:值得一提的是",
    "pattern": "值得一提的是",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "erwähnenswert ist; es ist bemerkenswert, dass",
    "pinyin": "zhíde yì tí de shì",
    "examples": [
      {
        "chinese": "值得一提的是，他是最年轻的获奖者。",
        "pinyin": "Zhíde yì tí de shì, tā shì zuì niánqīng de huòjiǎngzhě.",
        "german": "Erwähnenswert ist, dass er der jüngste Preisträger ist."
      },
      {
        "chinese": "值得一提的是，这项技术完全由国内研发。",
        "pinyin": "Zhíde yì tí de shì, zhè xiàng jìshù wánquán yóu guónèi yánfā.",
        "german": "Bemerkenswert ist, dass diese Technologie vollständig im Inland entwickelt wurde."
      }
    ],
    "legacyIds": [
      "值得一提的是"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不难看出",
    "pattern": "不难看出",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "es ist nicht schwer zu erkennen; man sieht leicht",
    "pinyin": "bù nán kànchū",
    "examples": [
      {
        "chinese": "不难看出，他对这件事非常重视。",
        "pinyin": "Bù nán kànchū, tā duì zhè jiàn shì fēicháng zhòngshì.",
        "german": "Es ist nicht schwer zu erkennen, dass er dieser Sache große Bedeutung beimisst."
      },
      {
        "chinese": "从数据中不难看出经济增长的趋势。",
        "pinyin": "Cóng shùjù zhōng bù nán kànchū jīngjì zēngzhǎng de qūshì.",
        "german": "Aus den Daten lässt sich leicht ein Trend des Wirtschaftswachstums erkennen."
      }
    ],
    "legacyIds": [
      "不难看出"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不可否认",
    "pattern": "不可否认",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "es lässt sich nicht leugnen; unbestreitbar",
    "pinyin": "bùkě fǒurèn",
    "examples": [
      {
        "chinese": "不可否认，互联网改变了人们的生活方式。",
        "pinyin": "Bùkě fǒurèn, hùliánwǎng gǎibiàn le rénmen de shēnghuó fāngshì.",
        "german": "Es lässt sich nicht leugnen, dass das Internet die Lebensweise der Menschen verändert hat."
      },
      {
        "chinese": "不可否认的是，教育在社会发展中起着关键作用。",
        "pinyin": "Bùkě fǒurèn de shì, jiàoyù zài shèhuì fāzhǎn zhōng qǐzhe guānjiàn zuòyòng.",
        "german": "Unbestreitbar spielt Bildung eine Schlüsselrolle in der gesellschaftlichen Entwicklung."
      }
    ],
    "legacyIds": [
      "不可否认"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:确切地说",
    "pattern": "确切地说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "genauer gesagt; um es präzise auszudrücken",
    "pinyin": "quèqiè de shuō",
    "examples": [
      {
        "chinese": "确切地说，他不是辞职，而是被开除了。",
        "pinyin": "Quèqiè de shuō, tā bú shì cízhí, ér shì bèi kāichú le.",
        "german": "Genauer gesagt hat er nicht gekündigt, sondern wurde entlassen."
      },
      {
        "chinese": "确切地说，这是一种误解。",
        "pinyin": "Quèqiè de shuō, zhè shì yì zhǒng wùjiě.",
        "german": "Um es präzise auszudrücken: Das ist ein Missverständnis."
      }
    ],
    "legacyIds": [
      "确切地说"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不仅如此",
    "pattern": "不仅如此",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "nicht nur das; darüber hinaus",
    "pinyin": "bùjǐn rúcǐ",
    "examples": [
      {
        "chinese": "他会说中文，不仅如此，他还会说日语和韩语。",
        "pinyin": "Tā huì shuō Zhōngwén, bùjǐn rúcǐ, tā hái huì shuō Rìyǔ hé Hányǔ.",
        "german": "Er spricht Chinesisch, und nicht nur das, er spricht auch Japanisch und Koreanisch."
      },
      {
        "chinese": "这家餐厅菜好吃，不仅如此，服务也很好。",
        "pinyin": "Zhè jiā cāntīng cài hǎochī, bùjǐn rúcǐ, fúwù yě hěn hǎo.",
        "german": "Das Essen in diesem Restaurant ist gut, darüber hinaus ist der Service auch hervorragend."
      }
    ],
    "legacyIds": [
      "不仅如此"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:有利于",
    "pattern": "有利于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "vorteilhaft für; förderlich für",
    "pinyin": "yǒulì yú",
    "examples": [
      {
        "chinese": "多运动有利于健康。",
        "pinyin": "Duō yùndòng yǒulì yú jiànkāng.",
        "german": "Viel Bewegung ist förderlich für die Gesundheit."
      },
      {
        "chinese": "这项政策有利于经济发展。",
        "pinyin": "Zhè xiàng zhèngcè yǒulì yú jīngjì fāzhǎn.",
        "german": "Diese Richtlinie ist vorteilhaft für die wirtschaftliche Entwicklung."
      }
    ],
    "legacyIds": [
      "有利于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不利于",
    "pattern": "不利于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "nachteilig für; hinderlich für",
    "pinyin": "bùlì yú",
    "examples": [
      {
        "chinese": "熬夜不利于身体健康。",
        "pinyin": "Áoyè bùlì yú shēntǐ jiànkāng.",
        "german": "Nachtarbeit ist nachteilig für die körperliche Gesundheit."
      },
      {
        "chinese": "过度竞争不利于行业发展。",
        "pinyin": "Guòdù jìngzhēng bùlì yú hángyè fāzhǎn.",
        "german": "Übermäßiger Wettbewerb ist hinderlich für die Branchenentwicklung."
      }
    ],
    "legacyIds": [
      "不利于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:其",
    "pattern": "其",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "sein/ihr/dessen (literarisches Pronomen)",
    "pinyin": "qí",
    "examples": [
      {
        "chinese": "各尽其能。",
        "pinyin": "Gè jìn qí néng.",
        "german": "Jeder gibt sein Bestes."
      },
      {
        "chinese": "不知其所以然。",
        "pinyin": "Bù zhī qí suǒyǐrán.",
        "german": "Den Grund dafür nicht kennen."
      }
    ],
    "legacyIds": [
      "其"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:为…所…",
    "pattern": "为…所…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "von … (literarisches Passiv)",
    "pinyin": "wéi…suǒ…",
    "examples": [
      {
        "chinese": "他的演讲为众人所称赞。",
        "pinyin": "Tā de yǎnjiǎng wéi zhòngrén suǒ chēngzàn.",
        "german": "Seine Rede wurde von allen gelobt."
      },
      {
        "chinese": "这个道理为人们所接受。",
        "pinyin": "Zhège dàolǐ wéi rénmen suǒ jiēshòu.",
        "german": "Dieses Prinzip wird von den Menschen akzeptiert."
      }
    ],
    "legacyIds": [
      "为…所…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:以…为主",
    "pattern": "以…为主",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "hauptsächlich bestehend aus; vorwiegend",
    "pinyin": "yǐ…wéi zhǔ",
    "examples": [
      {
        "chinese": "中国南方以大米为主食。",
        "pinyin": "Zhōngguó nánfāng yǐ dàmǐ wéi zhǔshí.",
        "german": "In Südchina ist Reis das Hauptnahrungsmittel."
      },
      {
        "chinese": "这个团队以年轻人为主。",
        "pinyin": "Zhège tuánduì yǐ niánqīngrén wéi zhǔ.",
        "german": "Dieses Team besteht hauptsächlich aus jungen Leuten."
      }
    ],
    "legacyIds": [
      "以…为主"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:一言以蔽之",
    "pattern": "一言以蔽之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "mit einem Wort gesagt; kurz gefasst",
    "pinyin": "yì yán yǐ bì zhī",
    "examples": [
      {
        "chinese": "一言以蔽之，我们需要更加努力。",
        "pinyin": "Yì yán yǐ bì zhī, wǒmen xūyào gèng jiā nǔlì.",
        "german": "Mit einem Wort gesagt: Wir müssen uns mehr anstrengen."
      },
      {
        "chinese": "一言以蔽之，成功离不开坚持。",
        "pinyin": "Yì yán yǐ bì zhī, chénggōng lì bù kāi jiānchí.",
        "german": "Kurz gefasst: Erfolg kommt nicht ohne Beharrlichkeit."
      }
    ],
    "legacyIds": [
      "一言以蔽之"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:追根溯源",
    "pattern": "追根溯源",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "der Sache auf den Grund gehen; bis zur Wurzel zurückverfolgen",
    "pinyin": "zhuīgēn sùyuán",
    "examples": [
      {
        "chinese": "追根溯源，这个问题的原因在于制度设计。",
        "pinyin": "Zhuīgēn sùyuán, zhège wèntí de yuányīn zàiyú zhìdù shèjì.",
        "german": "Wenn man der Sache auf den Grund geht, liegt die Ursache dieses Problems im Systemdesign."
      },
      {
        "chinese": "追根溯源，中国文化有五千年的历史。",
        "pinyin": "Zhuīgēn sùyuán, Zhōngguó wénhuà yǒu wǔqiān nián de lìshǐ.",
        "german": "Verfolgt man die Wurzeln zurück, hat die chinesische Kultur eine 5000-jährige Geschichte."
      }
    ],
    "legacyIds": [
      "追根溯源"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:毫无疑问",
    "pattern": "毫无疑问",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "ohne jeden Zweifel; zweifelsohne",
    "pinyin": "háo wú yíwèn",
    "examples": [
      {
        "chinese": "毫无疑问，他是最优秀的学生之一。",
        "pinyin": "Háo wú yíwèn, tā shì zuì yōuxiù de xuéshēng zhī yī.",
        "german": "Ohne jeden Zweifel ist er einer der besten Studenten."
      },
      {
        "chinese": "这毫无疑问是一个巨大的进步。",
        "pinyin": "Zhè háo wú yíwèn shì yí gè jùdà de jìnbù.",
        "german": "Dies ist zweifelsohne ein enormer Fortschritt."
      }
    ],
    "legacyIds": [
      "毫无疑问"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不证自明",
    "pattern": "不证自明",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "ist offensichtlich; bedarf keines Beweises",
    "pinyin": "bù zhèng zì míng",
    "examples": [
      {
        "chinese": "这个道理不证自明。",
        "pinyin": "Zhège dàolǐ bù zhèng zì míng.",
        "german": "Diese Wahrheit bedarf keines Beweises."
      },
      {
        "chinese": "合作的价值不证自明。",
        "pinyin": "Hézuò de jiàzhí bù zhèng zì míng.",
        "german": "Der Wert der Zusammenarbeit ist offensichtlich."
      }
    ],
    "legacyIds": [
      "不证自明"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:言下之意",
    "pattern": "言下之意",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "die implizite Bedeutung; das Gemeinte",
    "pinyin": "yán xià zhī yì",
    "examples": [
      {
        "chinese": "他的言下之意是我们做得不够好。",
        "pinyin": "Tā de yán xià zhī yì shì wǒmen zuò de bú gòu hǎo.",
        "german": "Die implizite Bedeutung seiner Worte war, dass wir nicht gut genug waren."
      },
      {
        "chinese": "言下之意，他不打算参加这次会议。",
        "pinyin": "Yán xià zhī yì, tā bù dǎsuàn cānjiā zhè cì huìyì.",
        "german": "Damit gemeint war, dass er nicht vorhat, an dieser Sitzung teilzunehmen."
      }
    ],
    "legacyIds": [
      "言下之意"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:由此看来",
    "pattern": "由此看来",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "daraus lässt sich erkennen; von daher betrachtet",
    "pinyin": "yóucǐ kànlái",
    "examples": [
      {
        "chinese": "由此看来，他的判断是正确的。",
        "pinyin": "Yóucǐ kànlái, tā de pànduàn shì zhèngquè de.",
        "german": "Daraus lässt sich erkennen, dass sein Urteil richtig war."
      },
      {
        "chinese": "由此看来，改革势在必行。",
        "pinyin": "Yóucǐ kànlái, gǎigé shì zài bìxíng.",
        "german": "Von daher betrachtet sind Reformen unausweichlich."
      }
    ],
    "legacyIds": [
      "由此看来"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:从…出发",
    "pattern": "从…出发",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Präpositionen",
    "meaning": "ausgehend von; von … als Ausgangspunkt",
    "pinyin": "cóng…chūfā",
    "examples": [
      {
        "chinese": "我们应该从实际出发来解决问题。",
        "pinyin": "Wǒmen yīnggāi cóng shíjì chūfā lái jiějué wèntí.",
        "german": "Wir sollten von der Realität ausgehend Probleme lösen."
      },
      {
        "chinese": "从学生的需求出发，学校调整了课程设置。",
        "pinyin": "Cóng xuéshēng de xūqiú chūfā, xuéxiào tiáozhěng le kèchéng shèzhì.",
        "german": "Ausgehend von den Bedürfnissen der Studenten hat die Schule den Lehrplan angepasst."
      }
    ],
    "legacyIds": [
      "从…出发"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:无外乎",
    "pattern": "无外乎",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "es kommt auf nichts anderes hinaus als; im Wesentlichen nur",
    "pinyin": "wúwàihū",
    "examples": [
      {
        "chinese": "他辞职的理由无外乎薪水太低。",
        "pinyin": "Tā cízhí de lǐyóu wúwàihū xīnshuǐ tài dī.",
        "german": "Der Grund für seine Kündigung war im Wesentlichen nur das zu niedrige Gehalt."
      },
      {
        "chinese": "解决问题的方法无外乎沟通和妥协。",
        "pinyin": "Jiějué wèntí de fāngfǎ wúwàihū gōutōng hé tuǒxié.",
        "german": "Methoden zur Problemlösung kommen auf nichts anderes hinaus als Kommunikation und Kompromiss."
      },
      {
        "chinese": "他迟到的原因不外乎两个：堵车或睡过头。",
        "pinyin": "Tā chídào de yuányīn bùwàihū liǎng gè: dǔchē huò shuìguòtóu.",
        "german": "Die Gründe für sein Zuspätkommen laufen auf zwei hinaus: Stau oder Verschlafen."
      },
      {
        "chinese": "学好外语的方法不外乎多听、多说、多练。",
        "pinyin": "Xué hǎo wàiyǔ de fāngfǎ bùwàihū duō tīng, duō shuō, duō liàn.",
        "german": "Die Methoden zum Erlernen einer Fremdsprache sind nichts anderes als: viel hören, viel sprechen, viel üben."
      }
    ],
    "legacyIds": [
      "无外乎",
      "g:不外乎",
      "不外乎"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:无非"
    ]
  },
  {
    "id": "g:以…为例",
    "pattern": "以…为例",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "am Beispiel von; nehmen wir … als Beispiel",
    "pinyin": "yǐ…wéi lì",
    "examples": [
      {
        "chinese": "以北京为例，房价在过去十年翻了一番。",
        "pinyin": "Yǐ Běijīng wéi lì, fángjià zài guòqù shí nián fān le yì fān.",
        "german": "Am Beispiel Pekings: Die Immobilienpreise haben sich in den letzten zehn Jahren verdoppelt."
      },
      {
        "chinese": "以德国为例，该国在环保方面取得了显著成就。",
        "pinyin": "Yǐ Déguó wéi lì, gāi guó zài huánbǎo fāngmiàn qǔdé le xiǎnzhù chéngjiù.",
        "german": "Nehmen wir Deutschland als Beispiel: Das Land hat beim Umweltschutz bemerkenswerte Erfolge erzielt."
      }
    ],
    "legacyIds": [
      "以…为例"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:之所以…在于…",
    "pattern": "之所以…在于…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "der Grund warum … liegt darin, dass …",
    "pinyin": "zhī suǒyǐ…zàiyú…",
    "examples": [
      {
        "chinese": "他之所以成功，在于他的坚持。",
        "pinyin": "Tā zhī suǒyǐ chénggōng, zàiyú tā de jiānchí.",
        "german": "Der Grund für seinen Erfolg liegt in seiner Beharrlichkeit."
      },
      {
        "chinese": "这个问题之所以难解决，在于涉及太多利益方。",
        "pinyin": "Zhège wèntí zhī suǒyǐ nán jiějué, zàiyú shèjí tài duō lìyì fāng.",
        "german": "Der Grund, warum dieses Problem schwer zu lösen ist, liegt darin, dass zu viele Interessengruppen beteiligt sind."
      }
    ],
    "legacyIds": [
      "之所以…在于…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:说到底",
    "pattern": "说到底",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "letzten Endes; im Grunde genommen",
    "pinyin": "shuō dào dǐ",
    "examples": [
      {
        "chinese": "说到底，还是钱的问题。",
        "pinyin": "Shuō dào dǐ, háishi qián de wèntí.",
        "german": "Letzten Endes ist es eine Frage des Geldes."
      },
      {
        "chinese": "说到底，成功靠的是坚持。",
        "pinyin": "Shuō dào dǐ, chénggōng kào de shì jiānchí.",
        "german": "Im Grunde genommen hängt Erfolg von Beharrlichkeit ab."
      }
    ],
    "legacyIds": [
      "说到底"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:说起来容易做起来难",
    "pattern": "说起来容易做起来难",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "leichter gesagt als getan",
    "pinyin": "shuō qǐlái róngyì zuò qǐlái nán",
    "examples": [
      {
        "chinese": "减肥说起来容易做起来难。",
        "pinyin": "Jiǎnféi shuō qǐlái róngyì zuò qǐlái nán.",
        "german": "Abnehmen ist leichter gesagt als getan."
      },
      {
        "chinese": "改变习惯说起来容易做起来难。",
        "pinyin": "Gǎibiàn xíguàn shuō qǐlái róngyì zuò qǐlái nán.",
        "german": "Gewohnheiten zu ändern, ist leichter gesagt als getan."
      }
    ],
    "legacyIds": [
      "说起来容易做起来难"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:…也就罢了",
    "pattern": "…也就罢了",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "das wäre ja noch in Ordnung, aber …",
    "pinyin": "…yě jiù bà le",
    "examples": [
      {
        "chinese": "迟到也就罢了，还不道歉。",
        "pinyin": "Chídào yě jiù bà le, hái bù dàoqiàn.",
        "german": "Zu spät kommen wäre ja noch in Ordnung, aber sich nicht einmal entschuldigen!"
      },
      {
        "chinese": "不帮忙也就罢了，竟然还添乱。",
        "pinyin": "Bù bāngmáng yě jiù bà le, jìngrán hái tiānluàn.",
        "german": "Nicht helfen wäre ja in Ordnung, aber dann auch noch Chaos stiften!"
      }
    ],
    "legacyIds": [
      "…也就罢了"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:严格来说",
    "pattern": "严格来说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "streng genommen; genau genommen",
    "pinyin": "yángé lái shuō",
    "examples": [
      {
        "chinese": "严格来说，这不算违规。",
        "pinyin": "Yángé lái shuō, zhè bú suàn wéiguī.",
        "german": "Streng genommen ist das kein Verstoß."
      },
      {
        "chinese": "严格来说，熊猫不是熊。",
        "pinyin": "Yángé lái shuō, xióngmāo bú shì xióng.",
        "german": "Genau genommen ist der Panda kein Bär."
      }
    ],
    "legacyIds": [
      "严格来说"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:坦白说",
    "pattern": "坦白说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "ehrlich gesagt; offen gestanden",
    "pinyin": "tǎnbái shuō",
    "examples": [
      {
        "chinese": "坦白说，我对这个结果不太满意。",
        "pinyin": "Tǎnbái shuō, wǒ duì zhège jiéguǒ bú tài mǎnyì.",
        "german": "Ehrlich gesagt bin ich mit diesem Ergebnis nicht sehr zufrieden."
      },
      {
        "chinese": "坦白说，我觉得你的方案需要改进。",
        "pinyin": "Tǎnbái shuō, wǒ juéde nǐ de fāngàn xūyào gǎijìn.",
        "german": "Offen gestanden denke ich, dass dein Plan verbessert werden muss."
      }
    ],
    "legacyIds": [
      "坦白说"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:打个比方",
    "pattern": "打个比方",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "um eine Analogie zu ziehen; zum Beispiel/Vergleich",
    "pinyin": "dǎ gè bǐfāng",
    "examples": [
      {
        "chinese": "打个比方，学习就像盖房子，基础很重要。",
        "pinyin": "Dǎ gè bǐfāng, xuéxí jiù xiàng gài fángzi, jīchǔ hěn zhòngyào.",
        "german": "Um eine Analogie zu ziehen: Lernen ist wie ein Haus bauen, das Fundament ist wichtig."
      },
      {
        "chinese": "打个比方，人生就像一场旅行。",
        "pinyin": "Dǎ gè bǐfāng, rénshēng jiù xiàng yì chǎng lǚxíng.",
        "german": "Um einen Vergleich zu ziehen: Das Leben ist wie eine Reise."
      }
    ],
    "legacyIds": [
      "打个比方"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:据我所知",
    "pattern": "据我所知",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "soweit ich weiß; meines Wissens",
    "pinyin": "jù wǒ suǒ zhī",
    "examples": [
      {
        "chinese": "据我所知，他已经辞职了。",
        "pinyin": "Jù wǒ suǒ zhī, tā yǐjīng cízhí le.",
        "german": "Soweit ich weiß, hat er bereits gekündigt."
      },
      {
        "chinese": "据我所知，这家餐厅的菜很好吃。",
        "pinyin": "Jù wǒ suǒ zhī, zhè jiā cāntīng de cài hěn hǎochī.",
        "german": "Meines Wissens ist das Essen in diesem Restaurant sehr gut."
      }
    ],
    "legacyIds": [
      "据我所知"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:大致说来",
    "pattern": "大致说来",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "im Großen und Ganzen; grob gesagt",
    "pinyin": "dàzhì shuō lái",
    "examples": [
      {
        "chinese": "大致说来，这个项目进展顺利。",
        "pinyin": "Dàzhì shuō lái, zhège xiàngmù jìnzhǎn shùnlì.",
        "german": "Im Großen und Ganzen verläuft dieses Projekt reibungslos."
      },
      {
        "chinese": "大致说来，他的观点是正确的。",
        "pinyin": "Dàzhì shuō lái, tā de guāndiǎn shì zhèngquè de.",
        "german": "Grob gesagt ist sein Standpunkt korrekt."
      }
    ],
    "legacyIds": [
      "大致说来"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:权且",
    "pattern": "权且",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Partikeln",
    "meaning": "Vorläufig / Einstweilen / Fürs Erste",
    "formation": "权且 + Verb",
    "explanation": "Drückt aus, dass man etwas provisorisch tut, als Übergangslösung. Literarischer Stil.",
    "notes": "权且 klingt literarischer als 暂时. Häufig in historischen Texten und gehobener Sprache.",
    "examples": [
      {
        "chinese": "找不到合适的人选，权且让他负责吧。",
        "pinyin": "Zhǎo bú dào héshì de rénxuǎn, quánqiě ràng tā fùzé ba.",
        "german": "Da wir niemand Geeigneten finden, lass ihn fürs Erste die Verantwortung übernehmen."
      },
      {
        "chinese": "天色已晚，权且在此歇息一晚。",
        "pinyin": "Tiānsè yǐ wǎn, quánqiě zài cǐ xiēxi yì wǎn.",
        "german": "Es ist schon dunkel, lasst uns einstweilen hier eine Nacht rasten."
      }
    ],
    "legacyIds": [
      "权且"
    ],
    "meaningStatus": "draft",
    "related": [
      "g:姑且"
    ]
  },
  {
    "id": "g:岂非",
    "pattern": "岂非",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "Ist das nicht etwa…? (rhetorisch)",
    "pinyin": "qǐfēi",
    "examples": [
      {
        "chinese": "你明知故犯，岂非自讨苦吃？",
        "pinyin": "Nǐ míngzhīgùfàn, qǐfēi zìtǎokǔchī?",
        "german": "Du tust es wissentlich — ist das nicht etwa, sich selbst Aerger einzuhandeln?"
      },
      {
        "chinese": "放弃这个机会，岂非太可惜了？",
        "pinyin": "Fàngqì zhège jīhuì, qǐfēi tài kěxī le?",
        "german": "Diese Gelegenheit aufzugeben, waere das nicht viel zu schade?"
      }
    ],
    "legacyIds": [
      "岂非"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:诚然",
    "pattern": "诚然",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "Zwar / Gewiss / Zugegebenermassen",
    "pinyin": "chéngrán",
    "examples": [
      {
        "chinese": "诚然，这个方案并非完美无缺。",
        "pinyin": "Chéngrán, zhège fāngàn bìngfēi wánměi wúquē.",
        "german": "Zugegebenermassen ist dieser Plan nicht makellos."
      },
      {
        "chinese": "诚然有困难，但我们不应退缩。",
        "pinyin": "Chéngrán yǒu kùnnan, dàn wǒmen bù yīng tuìsuō.",
        "german": "Es gibt zwar Schwierigkeiten, aber wir sollten nicht zurueckweichen."
      }
    ],
    "legacyIds": [
      "诚然"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:尽管如此",
    "pattern": "尽管如此",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "Trotz alledem / Nichtsdestotrotz",
    "pinyin": "jǐnguǎn rúcǐ",
    "examples": [
      {
        "chinese": "这个计划有很多风险，尽管如此，我们还是决定执行。",
        "pinyin": "Zhège jìhuà yǒu hěn duō fēngxiǎn, jǐnguǎn rúcǐ, wǒmen háishi juédìng zhíxíng.",
        "german": "Dieser Plan birgt viele Risiken; trotz alledem haben wir beschlossen, ihn umzusetzen."
      }
    ],
    "legacyIds": [
      "尽管如此"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:反之",
    "pattern": "反之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "Umgekehrt / Andernfalls / Im Gegenteil",
    "pinyin": "fǎnzhī",
    "examples": [
      {
        "chinese": "努力学习就会有好成绩，反之则会落后。",
        "pinyin": "Nǔlì xuéxí jiù huì yǒu hǎo chéngjì, fǎnzhī zé huì luòhòu.",
        "german": "Wer fleissig lernt, wird gute Noten haben; umgekehrt wird man zurueckfallen."
      },
      {
        "chinese": "信任可以促进合作，反之，怀疑只会破坏关系。",
        "pinyin": "Xìnrèn kěyǐ cùjìn hézuò, fǎnzhī, huáiyí zhǐ huì pòhuài guānxì.",
        "german": "Vertrauen foerdert die Zusammenarbeit; umgekehrt zerstoert Misstrauen nur die Beziehung."
      }
    ],
    "legacyIds": [
      "反之"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:见诸",
    "pattern": "见诸",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "In Erscheinung treten in / Sich zeigen in",
    "pinyin": "jiànzhū",
    "examples": [
      {
        "chinese": "这种现象早已见诸报端。",
        "pinyin": "Zhè zhǒng xiànxiàng zǎoyǐ jiànzhū bàoduān.",
        "german": "Dieses Phaenomen ist laengst in der Presse aufgetaucht."
      },
      {
        "chinese": "他的思想见诸于他的作品之中。",
        "pinyin": "Tā de sīxiǎng jiànzhū yú tā de zuòpǐn zhīzhōng.",
        "german": "Seine Gedanken zeigen sich in seinen Werken."
      }
    ],
    "legacyIds": [
      "见诸"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:付诸",
    "pattern": "付诸",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "In die Tat umsetzen / Einer Sache uebergeben",
    "pinyin": "fùzhū",
    "examples": [
      {
        "chinese": "我们必须将计划付诸实施。",
        "pinyin": "Wǒmen bìxū jiāng jìhuà fùzhū shíshī.",
        "german": "Wir muessen den Plan in die Tat umsetzen."
      },
      {
        "chinese": "光有想法不行，还得付诸行动。",
        "pinyin": "Guāng yǒu xiǎngfǎ bùxíng, hái děi fùzhū xíngdòng.",
        "german": "Ideen allein genuegen nicht, man muss sie auch in die Tat umsetzen."
      }
    ],
    "legacyIds": [
      "付诸"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:为之",
    "pattern": "为之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "Dafuer / Dessentwegen (literarisch)",
    "pinyin": "wéizhī",
    "examples": [
      {
        "chinese": "这个消息令所有人为之震惊。",
        "pinyin": "Zhège xiāoxi lìng suǒyǒu rén wéizhī zhènjīng.",
        "german": "Diese Nachricht hat alle zutiefst erschuettert."
      },
      {
        "chinese": "她的勇气令人为之动容。",
        "pinyin": "Tā de yǒngqì lìng rén wéizhī dòngróng.",
        "german": "Ihr Mut hat die Menschen tief beruehrt."
      }
    ],
    "legacyIds": [
      "为之"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:以…为…",
    "pattern": "以…为…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "… als … betrachten / … zu … machen",
    "pinyin": "yǐ…wéi…",
    "examples": [
      {
        "chinese": "我们应以质量为核心。",
        "pinyin": "Wǒmen yīng yǐ zhìliàng wéi héxīn.",
        "german": "Wir sollten die Qualitaet als Kernpunkt betrachten."
      },
      {
        "chinese": "他以诚信为本，赢得了客户的信任。",
        "pinyin": "Tā yǐ chéngxìn wéi běn, yíngdé le kèhù de xìnrèn.",
        "german": "Er nahm Ehrlichkeit als Grundlage und gewann damit das Vertrauen der Kunden."
      }
    ],
    "legacyIds": [
      "以…为…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:适逢",
    "pattern": "适逢",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "Gerade als / Es traf sich, dass (literarisch)",
    "pinyin": "shìféng",
    "examples": [
      {
        "chinese": "适逢国庆假期，到处人山人海。",
        "pinyin": "Shìféng guóqìng jiàqī, dàochù rénshānrénhǎi.",
        "german": "Es war gerade Nationalfeiertag, ueberall herrschte riesiges Gedraenge."
      },
      {
        "chinese": "适逢其会，他遇到了多年未见的老友。",
        "pinyin": "Shìféng qí huì, tā yùdào le duō nián wèi jiàn de lǎoyǒu.",
        "german": "Es traf sich gerade, dass er einen alten Freund wiedertraf, den er seit Jahren nicht gesehen hatte."
      }
    ],
    "legacyIds": [
      "适逢"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:置若罔闻",
    "pattern": "置若罔闻",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "Etwas voellig ignorieren / Auf taube Ohren stossen lassen",
    "pinyin": "zhìruòwǎngwén",
    "examples": [
      {
        "chinese": "他对所有的警告都置若罔闻。",
        "pinyin": "Tā duì suǒyǒu de jǐnggào dōu zhìruòwǎngwén.",
        "german": "Er ignorierte alle Warnungen voellig."
      },
      {
        "chinese": "面对群众的呼声，政府不能置若罔闻。",
        "pinyin": "Miànduì qúnzhòng de hūshēng, zhèngfǔ bù néng zhìruòwǎngwén.",
        "german": "Angesichts der Stimmen der Bevoelkerung darf die Regierung diese nicht einfach ignorieren."
      }
    ],
    "legacyIds": [
      "置若罔闻"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:岂",
    "pattern": "岂",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "wie könnte; etwa (rhetorische Verneinung, klassisch)",
    "pinyin": "qǐ",
    "examples": [
      {
        "chinese": "岂有此理？",
        "pinyin": "Qǐ yǒu cǐ lǐ?",
        "german": "Wie kann das sein? (So ein Unsinn!)"
      },
      {
        "chinese": "岂能坐视不管？",
        "pinyin": "Qǐ néng zuòshì bùguǎn?",
        "german": "Wie könnte man tatenlos zusehen?"
      }
    ],
    "legacyIds": [
      "岂"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:犹",
    "pattern": "犹",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "noch immer; wie; gleich (literarisch)",
    "pinyin": "yóu",
    "examples": [
      {
        "chinese": "记忆犹新。",
        "pinyin": "Jìyì yóu xīn.",
        "german": "Die Erinnerung ist noch ganz frisch."
      },
      {
        "chinese": "犹如身临其境。",
        "pinyin": "Yóurú shēn lín qí jìng.",
        "german": "Als ob man selbst vor Ort wäre."
      }
    ],
    "legacyIds": [
      "犹"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:亦",
    "pattern": "亦",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "auch; ebenfalls (literarisch)",
    "pinyin": "yì",
    "examples": [
      {
        "chinese": "此亦为重要原因之一。",
        "pinyin": "Cǐ yì wéi zhòngyào yuányīn zhī yī.",
        "german": "Dies ist ebenfalls einer der wichtigen Gründe."
      },
      {
        "chinese": "不亦乐乎？",
        "pinyin": "Bú yì lè hū?",
        "german": "Ist das nicht auch erfreulich?"
      }
    ],
    "legacyIds": [
      "亦"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:甚",
    "pattern": "甚",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "sehr; äußerst; sogar (literarisch)",
    "pinyin": "shèn",
    "examples": [
      {
        "chinese": "影响甚大。",
        "pinyin": "Yǐngxiǎng shèn dà.",
        "german": "Der Einfluss ist äußerst groß."
      },
      {
        "chinese": "甚至于无法挽回。",
        "pinyin": "Shènzhìyú wúfǎ wǎnhuí.",
        "german": "Sogar so weit, dass es nicht mehr rückgängig zu machen ist."
      }
    ],
    "legacyIds": [
      "甚"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:则",
    "pattern": "则",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "dann; so; hingegen (literarisch)",
    "pinyin": "zé",
    "examples": [
      {
        "chinese": "学而不思则罔。",
        "pinyin": "Xué ér bù sī zé wǎng.",
        "german": "Lernen ohne Denken ist vergeblich."
      },
      {
        "chinese": "不进则退。",
        "pinyin": "Bú jìn zé tuì.",
        "german": "Wer nicht voranschreitet, fällt zurück."
      }
    ],
    "legacyIds": [
      "则"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:何以…为",
    "pattern": "何以…为",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "warum sollte man …; wozu …? (klassisch-rhetorisch)",
    "pinyin": "héyǐ…wéi",
    "examples": [
      {
        "chinese": "何以家为？",
        "pinyin": "Héyǐ jiā wéi?",
        "german": "Warum sollte man sich um eine Familie kümmern? (wenn es Größeres gibt)"
      },
      {
        "chinese": "何以报之？",
        "pinyin": "Héyǐ bào zhī?",
        "german": "Womit soll man das vergelten?"
      }
    ],
    "legacyIds": [
      "何以…为"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:莫",
    "pattern": "莫",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "niemand; nichts; soll nicht (literarisch)",
    "pinyin": "mò",
    "examples": [
      {
        "chinese": "莫名其妙。",
        "pinyin": "Mòmíng qí miào.",
        "german": "Unverständlich; unerklärlich."
      },
      {
        "chinese": "闲人莫入。",
        "pinyin": "Xiánrén mò rù.",
        "german": "Unbefugten ist der Zutritt verboten."
      }
    ],
    "legacyIds": [
      "莫"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:截至",
    "pattern": "截至",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Zahlen & Zeit",
    "meaning": "bis zu (einem Stichtag); Stand (Nachrichtensprache)",
    "pinyin": "jiézhì",
    "examples": [
      {
        "chinese": "截至目前，已有三千人报名。",
        "pinyin": "Jiézhì mùqián, yǐ yǒu sānqiān rén bàomíng.",
        "german": "Bis jetzt haben sich bereits 3000 Personen angemeldet."
      },
      {
        "chinese": "截至去年年底，该公司员工总数达到一万人。",
        "pinyin": "Jiézhì qùnián niándǐ, gāi gōngsī yuángōng zǒngshù dádào yí wàn rén.",
        "german": "Stand Ende letzten Jahres belief sich die Gesamtmitarbeiterzahl auf 10.000."
      }
    ],
    "legacyIds": [
      "截至"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:迄今为止",
    "pattern": "迄今为止",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Zahlen & Zeit",
    "meaning": "bis heute; bisher; bis zum heutigen Tag",
    "pinyin": "qìjīn wéizhǐ",
    "examples": [
      {
        "chinese": "迄今为止，没有人能够解开这个谜。",
        "pinyin": "Qìjīn wéizhǐ, méiyǒu rén nénggòu jiěkāi zhège mí.",
        "german": "Bis heute konnte niemand dieses Rätsel lösen."
      },
      {
        "chinese": "迄今为止，这是最大规模的调查。",
        "pinyin": "Qìjīn wéizhǐ, zhè shì zuìdà guīmó de diàochá.",
        "german": "Dies ist bisher die umfangreichste Untersuchung."
      }
    ],
    "legacyIds": [
      "迄今为止"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:该",
    "pattern": "该",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "besagter; der betreffende (Nachrichtensprache)",
    "pinyin": "gāi",
    "examples": [
      {
        "chinese": "该公司成立于二零一零年。",
        "pinyin": "Gāi gōngsī chénglì yú èr líng yī líng nián.",
        "german": "Das besagte Unternehmen wurde 2010 gegründet."
      },
      {
        "chinese": "该项目预计明年完工。",
        "pinyin": "Gāi xiàngmù yùjì míngnián wángōng.",
        "german": "Das betreffende Projekt soll voraussichtlich nächstes Jahr fertiggestellt werden."
      }
    ],
    "legacyIds": [
      "该"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:系",
    "pattern": "系",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "ist; handelt sich um (formelles 是)",
    "pinyin": "xì",
    "examples": [
      {
        "chinese": "该事件系人为因素所致。",
        "pinyin": "Gāi shìjiàn xì rénwéi yīnsù suǒ zhì.",
        "german": "Dieser Vorfall wurde durch menschliche Faktoren verursacht."
      },
      {
        "chinese": "此消息系谣言，不可轻信。",
        "pinyin": "Cǐ xiāoxi xì yáoyán, bùkě qīngxìn.",
        "german": "Diese Nachricht ist ein Gerücht und sollte nicht leichtgläubig geglaubt werden."
      }
    ],
    "legacyIds": [
      "系"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:业已",
    "pattern": "业已",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "bereits; schon (formell)",
    "pinyin": "yèyǐ",
    "examples": [
      {
        "chinese": "相关手续业已办妥。",
        "pinyin": "Xiāngguān shǒuxù yèyǐ bàntuǒ.",
        "german": "Die entsprechenden Formalitäten wurden bereits erledigt."
      },
      {
        "chinese": "合同业已签署。",
        "pinyin": "Hétong yèyǐ qiānshǔ.",
        "german": "Der Vertrag wurde bereits unterzeichnet."
      }
    ],
    "legacyIds": [
      "业已"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:现将…通知如下",
    "pattern": "现将…通知如下",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "hiermit wird Folgendes mitgeteilt (Amtsformel)",
    "pinyin": "xiàn jiāng…tōngzhī rúxià",
    "examples": [
      {
        "chinese": "现将有关事项通知如下。",
        "pinyin": "Xiàn jiāng yǒuguān shìxiàng tōngzhī rúxià.",
        "german": "Hiermit werden die betreffenden Angelegenheiten wie folgt mitgeteilt."
      },
      {
        "chinese": "现将考试安排通知如下，请各位同学注意。",
        "pinyin": "Xiàn jiāng kǎoshì ānpái tōngzhī rúxià, qǐng gèwèi tóngxué zhùyì.",
        "german": "Hiermit wird der Prüfungsplan wie folgt bekannt gegeben; alle Studierenden werden gebeten, dies zu beachten."
      }
    ],
    "legacyIds": [
      "现将…通知如下"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:应…要求",
    "pattern": "应…要求",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "auf Verlangen von; gemäß der Forderung von",
    "pinyin": "yìng…yāoqiú",
    "examples": [
      {
        "chinese": "应群众要求，政府延长了报名时间。",
        "pinyin": "Yìng qúnzhòng yāoqiú, zhèngfǔ yáncháng le bàomíng shíjiān.",
        "german": "Auf Verlangen der Bevölkerung hat die Regierung die Anmeldefrist verlängert."
      },
      {
        "chinese": "应客户要求，我们修改了设计方案。",
        "pinyin": "Yìng kèhù yāoqiú, wǒmen xiūgǎi le shèjì fāngàn.",
        "german": "Gemäß der Kundenforderung haben wir den Entwurf überarbeitet."
      }
    ],
    "legacyIds": [
      "应…要求"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:着眼于",
    "pattern": "着眼于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "den Blick richten auf; ausgerichtet auf",
    "pinyin": "zhuóyǎn yú",
    "examples": [
      {
        "chinese": "我们应该着眼于长远发展。",
        "pinyin": "Wǒmen yīnggāi zhuóyǎn yú chángyuǎn fāzhǎn.",
        "german": "Wir sollten den Blick auf die langfristige Entwicklung richten."
      },
      {
        "chinese": "教育改革应着眼于学生的全面发展。",
        "pinyin": "Jiàoyù gǎigé yīng zhuóyǎn yú xuéshēng de quánmiàn fāzhǎn.",
        "german": "Die Bildungsreform sollte auf die ganzheitliche Entwicklung der Schüler ausgerichtet sein."
      }
    ],
    "legacyIds": [
      "着眼于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:立足于",
    "pattern": "立足于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "sich stützen auf; fußen auf",
    "pinyin": "lìzú yú",
    "examples": [
      {
        "chinese": "发展必须立足于本国国情。",
        "pinyin": "Fāzhǎn bìxū lìzú yú běnguó guóqíng.",
        "german": "Entwicklung muss auf den nationalen Gegebenheiten des eigenen Landes fußen."
      },
      {
        "chinese": "我们的研究立足于大量的实证数据。",
        "pinyin": "Wǒmen de yánjiū lìzú yú dàliàng de shízhèng shùjù.",
        "german": "Unsere Forschung stützt sich auf umfangreiche empirische Daten."
      }
    ],
    "legacyIds": [
      "立足于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:有赖于",
    "pattern": "有赖于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "angewiesen sein auf; abhängen von",
    "pinyin": "yǒulài yú",
    "examples": [
      {
        "chinese": "经济的发展有赖于科技的进步。",
        "pinyin": "Jīngjì de fāzhǎn yǒulài yú kējì de jìnbù.",
        "german": "Die wirtschaftliche Entwicklung ist auf den technologischen Fortschritt angewiesen."
      },
      {
        "chinese": "项目的成功有赖于团队的通力合作。",
        "pinyin": "Xiàngmù de chénggōng yǒulài yú tuánduì de tōnglì hézuò.",
        "german": "Der Erfolg des Projekts hängt von der engen Zusammenarbeit des Teams ab."
      }
    ],
    "legacyIds": [
      "有赖于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:归因于",
    "pattern": "归因于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "zurückführen auf; zuschreiben",
    "pinyin": "guīyīn yú",
    "examples": [
      {
        "chinese": "他的成功可以归因于他的坚持不懈。",
        "pinyin": "Tā de chénggōng kěyǐ guīyīn yú tā de jiānchí búxiè.",
        "german": "Sein Erfolg lässt sich auf seine Beharrlichkeit zurückführen."
      },
      {
        "chinese": "这次事故归因于操作失误。",
        "pinyin": "Zhè cì shìgù guīyīn yú cāozuò shīwù.",
        "german": "Dieser Unfall wird auf einen Bedienungsfehler zurückgeführt."
      }
    ],
    "legacyIds": [
      "归因于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:得益于",
    "pattern": "得益于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "profitieren von; verdanken",
    "pinyin": "déyì yú",
    "examples": [
      {
        "chinese": "公司的发展得益于良好的管理团队。",
        "pinyin": "Gōngsī de fāzhǎn déyì yú liánghǎo de guǎnlǐ tuánduì.",
        "german": "Die Entwicklung der Firma profitiert von einem guten Managementteam."
      },
      {
        "chinese": "经济的快速增长得益于改革开放政策。",
        "pinyin": "Jīngjì de kuàisù zēngzhǎng déyì yú gǎigé kāifàng zhèngcè.",
        "german": "Das rasante Wirtschaftswachstum ist der Politik der Reform und Öffnung zu verdanken."
      }
    ],
    "legacyIds": [
      "得益于"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不失为",
    "pattern": "不失为",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "kann durchaus als … gelten; ist immerhin",
    "pinyin": "bùshīwéi",
    "examples": [
      {
        "chinese": "这不失为一个好办法。",
        "pinyin": "Zhè bùshīwéi yí gè hǎo bànfǎ.",
        "german": "Das kann durchaus als gute Methode gelten."
      },
      {
        "chinese": "在家自学不失为一种选择。",
        "pinyin": "Zài jiā zìxué bùshīwéi yì zhǒng xuǎnzé.",
        "german": "Zuhause selbst zu lernen ist immerhin eine Möglichkeit."
      }
    ],
    "legacyIds": [
      "不失为"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不胜枚举",
    "pattern": "不胜枚举",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "zu zahlreich, um aufgezählt zu werden",
    "pinyin": "bùshèng méijǔ",
    "examples": [
      {
        "chinese": "类似的例子不胜枚举。",
        "pinyin": "Lèisì de lìzi bùshèng méijǔ.",
        "german": "Ähnliche Beispiele gibt es zu viele, um sie aufzuzählen."
      },
      {
        "chinese": "他的贡献不胜枚举。",
        "pinyin": "Tā de gòngxiàn bùshèng méijǔ.",
        "german": "Seine Beiträge sind zu zahlreich, um sie alle aufzuführen."
      }
    ],
    "legacyIds": [
      "不胜枚举"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:行之有效",
    "pattern": "行之有效",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "effektiv und erprobt; sich als wirksam erwiesen habend",
    "pinyin": "xíng zhī yǒu xiào",
    "examples": [
      {
        "chinese": "这是一种行之有效的方法。",
        "pinyin": "Zhè shì yì zhǒng xíng zhī yǒu xiào de fāngfǎ.",
        "german": "Dies ist eine erprobte und wirksame Methode."
      },
      {
        "chinese": "我们需要找到行之有效的解决方案。",
        "pinyin": "Wǒmen xūyào zhǎodào xíng zhī yǒu xiào de jiějué fāngàn.",
        "german": "Wir müssen eine bewährte Lösung finden."
      }
    ],
    "legacyIds": [
      "行之有效"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不容忽视",
    "pattern": "不容忽视",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "darf nicht ignoriert werden; nicht zu vernachlässigen",
    "pinyin": "bùróng hūshì",
    "examples": [
      {
        "chinese": "食品安全问题不容忽视。",
        "pinyin": "Shípǐn ānquán wèntí bùróng hūshì.",
        "german": "Das Problem der Lebensmittelsicherheit darf nicht ignoriert werden."
      },
      {
        "chinese": "他的贡献不容忽视。",
        "pinyin": "Tā de gòngxiàn bùróng hūshì.",
        "german": "Sein Beitrag darf nicht vernachlässigt werden."
      }
    ],
    "legacyIds": [
      "不容忽视"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不容置疑",
    "pattern": "不容置疑",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "steht außer Zweifel; unbestreitbar",
    "pinyin": "bùróng zhìyí",
    "examples": [
      {
        "chinese": "他的能力不容置疑。",
        "pinyin": "Tā de nénglì bùróng zhìyí.",
        "german": "Seine Fähigkeiten stehen außer Zweifel."
      },
      {
        "chinese": "这个事实不容置疑。",
        "pinyin": "Zhège shìshí bùróng zhìyí.",
        "german": "Diese Tatsache ist unbestreitbar."
      }
    ],
    "legacyIds": [
      "不容置疑"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不为过",
    "pattern": "不为过",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "es wäre nicht übertrieben zu sagen",
    "pinyin": "bù wéi guò",
    "examples": [
      {
        "chinese": "说他是天才也不为过。",
        "pinyin": "Shuō tā shì tiāncái yě bù wéi guò.",
        "german": "Ihn ein Genie zu nennen, wäre nicht übertrieben."
      },
      {
        "chinese": "把这称为历史性的突破也不为过。",
        "pinyin": "Bǎ zhè chēng wéi lìshǐxìng de tūpò yě bù wéi guò.",
        "german": "Dies als historischen Durchbruch zu bezeichnen, wäre nicht übertrieben."
      }
    ],
    "legacyIds": [
      "不为过"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:亟待",
    "pattern": "亟待",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "dringend darauf warten; dringend benötigen",
    "pinyin": "jídài",
    "examples": [
      {
        "chinese": "这些问题亟待解决。",
        "pinyin": "Zhèxiē wèntí jídài jiějué.",
        "german": "Diese Probleme bedürfen dringend einer Lösung."
      },
      {
        "chinese": "基础设施亟待改善。",
        "pinyin": "Jīchǔ shèshī jídài gǎishàn.",
        "german": "Die Infrastruktur muss dringend verbessert werden."
      }
    ],
    "legacyIds": [
      "亟待"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:继…之后",
    "pattern": "继…之后",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Zahlen & Zeit",
    "meaning": "nach; im Anschluss an; folgend auf",
    "pinyin": "jì…zhīhòu",
    "examples": [
      {
        "chinese": "继上海之后，北京也出台了类似的政策。",
        "pinyin": "Jì Shànghǎi zhīhòu, Běijīng yě chūtái le lèisì de zhèngcè.",
        "german": "Nach Shanghai hat auch Peking eine ähnliche Richtlinie eingeführt."
      },
      {
        "chinese": "继第一阶段成功之后，我们启动了第二阶段。",
        "pinyin": "Jì dì yī jiēduàn chénggōng zhīhòu, wǒmen qǐdòng le dì èr jiēduàn.",
        "german": "Im Anschluss an den Erfolg der ersten Phase haben wir die zweite Phase gestartet."
      }
    ],
    "legacyIds": [
      "继…之后"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:恕我直言",
    "pattern": "恕我直言",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "gestatten Sie, dass ich offen spreche; mit Verlaub",
    "pinyin": "shù wǒ zhíyán",
    "examples": [
      {
        "chinese": "恕我直言，这个计划根本行不通。",
        "pinyin": "Shù wǒ zhíyán, zhège jìhuà gēnběn xíng bù tōng.",
        "german": "Mit Verlaub, dieser Plan funktioniert überhaupt nicht."
      },
      {
        "chinese": "恕我直言，你的判断有误。",
        "pinyin": "Shù wǒ zhíyán, nǐ de pànduàn yǒu wù.",
        "german": "Gestatten Sie, dass ich offen sage: Ihr Urteil ist falsch."
      }
    ],
    "legacyIds": [
      "恕我直言"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:言归正传",
    "pattern": "言归正传",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "zurück zum eigentlichen Thema; aber zur Sache",
    "pinyin": "yán guī zhèngzhuàn",
    "examples": [
      {
        "chinese": "好了，言归正传，我们来讨论今天的议题。",
        "pinyin": "Hǎo le, yán guī zhèngzhuàn, wǒmen lái tǎolùn jīntiān de yìtí.",
        "german": "Gut, zurück zum eigentlichen Thema, lassen Sie uns den heutigen Tagesordnungspunkt besprechen."
      },
      {
        "chinese": "闲话少说，言归正传。",
        "pinyin": "Xiánhuà shǎo shuō, yán guī zhèngzhuàn.",
        "german": "Genug Geplauder, kommen wir zur Sache."
      }
    ],
    "legacyIds": [
      "言归正传"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:就事论事",
    "pattern": "就事论事",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "bei der Sache bleiben; sachlich diskutieren",
    "pinyin": "jiù shì lùn shì",
    "examples": [
      {
        "chinese": "我们就事论事，不要扯别的。",
        "pinyin": "Wǒmen jiù shì lùn shì, bú yào chě bié de.",
        "german": "Bleiben wir bei der Sache und schweifen nicht ab."
      },
      {
        "chinese": "就事论事地说，这个方案确实有改进的空间。",
        "pinyin": "Jiù shì lùn shì de shuō, zhège fāngàn quèshí yǒu gǎijìn de kōngjiān.",
        "german": "Sachlich betrachtet hat dieser Plan tatsächlich Verbesserungspotenzial."
      }
    ],
    "legacyIds": [
      "就事论事"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:倘使",
    "pattern": "倘使",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "wenn; falls; angenommen (literarisch)",
    "pinyin": "tǎngshǐ",
    "examples": [
      {
        "chinese": "倘使有机会，我一定会去中国旅行。",
        "pinyin": "Tǎngshǐ yǒu jīhuì, wǒ yídìng huì qù Zhōngguó lǚxíng.",
        "german": "Wenn sich die Gelegenheit ergibt, werde ich auf jeden Fall nach China reisen."
      },
      {
        "chinese": "倘使你不同意，可以提出别的方案。",
        "pinyin": "Tǎngshǐ nǐ bù tóngyì, kěyǐ tíchū bié de fāngàn.",
        "german": "Falls du nicht einverstanden bist, kannst du einen anderen Vorschlag machen."
      }
    ],
    "legacyIds": [
      "倘使"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:设若",
    "pattern": "设若",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "angenommen, dass; gesetzt den Fall (literarisch)",
    "pinyin": "shèruò",
    "examples": [
      {
        "chinese": "设若此事属实，后果将不堪设想。",
        "pinyin": "Shèruò cǐ shì shǔshí, hòuguǒ jiāng bùkān shèxiǎng.",
        "german": "Gesetzt den Fall, dass dies der Wahrheit entspricht, wären die Folgen unvorstellbar."
      },
      {
        "chinese": "设若没有他的帮助，我们不可能成功。",
        "pinyin": "Shèruò méiyǒu tā de bāngzhù, wǒmen bù kěnéng chénggōng.",
        "german": "Angenommen, wir hätten seine Hilfe nicht gehabt, wäre uns der Erfolg nicht möglich gewesen."
      }
    ],
    "legacyIds": [
      "设若"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:殊不知",
    "pattern": "殊不知",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "ohne zu wissen; was man nicht ahnte",
    "pinyin": "shū bù zhī",
    "examples": [
      {
        "chinese": "他以为自己很聪明，殊不知别人早就看穿了他的把戏。",
        "pinyin": "Tā yǐwéi zìjǐ hěn cōngmíng, shū bù zhī biérén zǎo jiù kànchuān le tā de bǎxì.",
        "german": "Er hielt sich für sehr schlau, ohne zu wissen, dass andere seine Tricks längst durchschaut hatten."
      },
      {
        "chinese": "她拼命加班挣钱，殊不知健康才是最重要的。",
        "pinyin": "Tā pīnmìng jiābān zhèngqián, shū bù zhī jiànkāng cái shì zuì zhòngyào de.",
        "german": "Sie arbeitete wie verrückt Überstunden, um Geld zu verdienen, ohne zu ahnen, dass Gesundheit das Wichtigste ist."
      }
    ],
    "legacyIds": [
      "殊不知"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:孰不知",
    "pattern": "孰不知",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "wer weiß denn nicht; wie konnte man ahnen (ironisch)",
    "pinyin": "shú bù zhī",
    "examples": [
      {
        "chinese": "他以为很简单，孰不知其中大有学问。",
        "pinyin": "Tā yǐwéi hěn jiǎndān, shú bù zhī qízhōng dà yǒu xuéwèn.",
        "german": "Er dachte, es sei einfach, wusste aber nicht, dass darin große Gelehrsamkeit steckt."
      },
      {
        "chinese": "大家都觉得他过得很好，孰不知他正经历着人生的低谷。",
        "pinyin": "Dàjiā dōu juéde tā guò de hěn hǎo, shú bù zhī tā zhèng jīnglì zhe rénshēng de dīgǔ.",
        "german": "Alle dachten, es ginge ihm gut, ahnten aber nicht, dass er gerade den Tiefpunkt seines Lebens durchmachte."
      }
    ],
    "legacyIds": [
      "孰不知"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:前者…后者…",
    "pattern": "前者…后者…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "ersteres … letzteres … (kontrastive Gegenüberstellung)",
    "pinyin": "qiánzhě…hòuzhě…",
    "examples": [
      {
        "chinese": "知识和智慧不同，前者是信息的积累，后者是对信息的运用。",
        "pinyin": "Zhīshi hé zhìhuì bùtóng, qiánzhě shì xìnxī de jīlěi, hòuzhě shì duì xìnxī de yùnyòng.",
        "german": "Wissen und Weisheit sind verschieden; Ersteres ist die Ansammlung von Informationen, Letzteres deren Anwendung."
      },
      {
        "chinese": "前者强调过程，后者注重结果。",
        "pinyin": "Qiánzhě qiángdiào guòchéng, hòuzhě zhùzhòng jiéguǒ.",
        "german": "Ersteres betont den Prozess, Letzteres legt Wert auf das Ergebnis."
      }
    ],
    "legacyIds": [
      "前者…后者…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:…固然好，但…",
    "pattern": "…固然好，但…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "… ist zwar gut, aber … (differenzierte Einschätzung)",
    "pinyin": "…gùrán hǎo, dàn…",
    "examples": [
      {
        "chinese": "经济发展固然好，但不能以牺牲环境为代价。",
        "pinyin": "Jīngjì fāzhǎn gùrán hǎo, dàn bù néng yǐ xīshēng huánjìng wéi dàijià.",
        "german": "Wirtschaftliche Entwicklung ist zwar gut, aber nicht auf Kosten der Umwelt."
      },
      {
        "chinese": "赚钱固然好，但身体健康更重要。",
        "pinyin": "Zhuànqián gùrán hǎo, dàn shēntǐ jiànkāng gèng zhòngyào.",
        "german": "Geld verdienen ist zwar gut, aber die Gesundheit ist wichtiger."
      }
    ],
    "legacyIds": [
      "…固然好，但…"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:有感于此",
    "pattern": "有感于此",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "davon bewegt; aus dieser Erkenntnis heraus",
    "pinyin": "yǒu gǎn yú cǐ",
    "examples": [
      {
        "chinese": "有感于此，他决定投身公益事业。",
        "pinyin": "Yǒu gǎn yú cǐ, tā juédìng tóushēn gōngyì shìyè.",
        "german": "Davon bewegt entschied er sich, sich sozialen Projekten zu widmen."
      },
      {
        "chinese": "有感于此，作者写下了这篇文章。",
        "pinyin": "Yǒu gǎn yú cǐ, zuòzhě xiě xià le zhè piān wénzhāng.",
        "german": "Aus dieser Erkenntnis heraus verfasste der Autor diesen Artikel."
      }
    ],
    "legacyIds": [
      "有感于此"
    ],
    "meaningStatus": "draft"
  },
  {
    "id": "g:不可同日而语",
    "pattern": "不可同日而语",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "nicht in einem Atemzug zu nennen; unvergleichbar",
    "pinyin": "bùkě tóng rì ér yǔ",
    "examples": [
      {
        "chinese": "现在的生活和以前不可同日而语。",
        "pinyin": "Xiànzài de shēnghuó hé yǐqián bùkě tóng rì ér yǔ.",
        "german": "Das heutige Leben ist mit dem früheren nicht zu vergleichen."
      },
      {
        "chinese": "两家公司的规模不可同日而语。",
        "pinyin": "Liǎng jiā gōngsī de guīmó bùkě tóng rì ér yǔ.",
        "german": "Die Größe der beiden Unternehmen ist nicht vergleichbar."
      }
    ],
    "legacyIds": [
      "不可同日而语"
    ],
    "meaningStatus": "draft"
  }
]);
