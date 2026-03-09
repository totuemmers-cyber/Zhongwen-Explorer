// Zhongwen Explorer – Zusätzliche Grammatik-Daten 2 (HSK 1–3)
// 30 weitere Muster (10 pro Stufe)
window.GRAMMAR_DATA = window.GRAMMAR_DATA.concat([

  // ============================================================
  //  HSK 1 – Grundmuster (10)
  // ============================================================

  {
    pattern: '每 + Zählwort + Nomen',
    pinyin: 'měi + Zählwort + Nomen',
    meaning: 'jeder / jede / jedes',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '每个人都很开心。', pinyin: 'Měi gè rén dōu hěn kāixīn.', de: 'Jeder ist sehr fröhlich.' },
      { zh: '我每天都学中文。', pinyin: 'Wǒ měi tiān dōu xué zhōngwén.', de: 'Ich lerne jeden Tag Chinesisch.' }
    ]
  },
  {
    pattern: '喜欢 + Verb/Nomen',
    pinyin: 'xǐhuan + Verb/Nomen',
    meaning: 'gern mögen / gern tun',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { zh: '我喜欢看书。', pinyin: 'Wǒ xǐhuan kàn shū.', de: 'Ich lese gern.' },
      { zh: '你喜欢什么颜色？', pinyin: 'Nǐ xǐhuan shénme yánsè?', de: 'Welche Farbe magst du?' }
    ]
  },
  {
    pattern: '请 + Verb',
    pinyin: 'qǐng + Verb',
    meaning: 'bitte (höfliche Aufforderung)',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { zh: '请坐。', pinyin: 'Qǐng zuò.', de: 'Bitte setzen Sie sich.' },
      { zh: '请你再说一遍。', pinyin: 'Qǐng nǐ zài shuō yí biàn.', de: 'Bitte sag es noch einmal.' }
    ]
  },
  {
    pattern: '怎么样',
    pinyin: 'zěnmeyàng',
    meaning: 'wie ist es? / wie wäre es? (Bewertungsfrage)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '这个菜怎么样？', pinyin: 'Zhège cài zěnmeyàng?', de: 'Wie ist dieses Gericht?' },
      { zh: '我们去看电影，怎么样？', pinyin: 'Wǒmen qù kàn diànyǐng, zěnmeyàng?', de: 'Wollen wir ins Kino gehen, wie wäre das?' }
    ]
  },
  {
    pattern: '时间词 + Verb',
    pinyin: 'shíjiān cí + Verb',
    meaning: 'Zeitwort vor dem Verb (Zeitangabe-Position)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '我明天去北京。', pinyin: 'Wǒ míngtiān qù Běijīng.', de: 'Ich fahre morgen nach Peking.' },
      { zh: '他昨天没来。', pinyin: 'Tā zuótiān méi lái.', de: 'Er ist gestern nicht gekommen.' }
    ]
  },
  {
    pattern: '一点儿 + Nomen',
    pinyin: 'yìdiǎnr + Nomen',
    meaning: 'ein wenig / ein bisschen (vor Nomen)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '我想喝一点儿水。', pinyin: 'Wǒ xiǎng hē yìdiǎnr shuǐ.', de: 'Ich möchte ein wenig Wasser trinken.' },
      { zh: '你会说一点儿中文吗？', pinyin: 'Nǐ huì shuō yìdiǎnr zhōngwén ma?', de: 'Kannst du ein bisschen Chinesisch sprechen?' }
    ]
  },
  {
    pattern: '或者',
    pinyin: 'huòzhě',
    meaning: 'oder (in Aussagesätzen)',
    level: 'HSK1',
    category: 'Konjunktionen',
    examples: [
      { zh: '你可以喝茶或者咖啡。', pinyin: 'Nǐ kěyǐ hē chá huòzhě kāfēi.', de: 'Du kannst Tee oder Kaffee trinken.' },
      { zh: '我们坐公交车或者地铁去。', pinyin: 'Wǒmen zuò gōngjiāochē huòzhě dìtiě qù.', de: 'Wir fahren mit dem Bus oder der U-Bahn.' }
    ]
  },
  {
    pattern: '还是 (Frage)',
    pinyin: 'háishi (Frage)',
    meaning: 'oder (in Alternativfragen)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '你喝茶还是咖啡？', pinyin: 'Nǐ hē chá háishi kāfēi?', de: 'Trinkst du Tee oder Kaffee?' },
      { zh: '你是中国人还是日本人？', pinyin: 'Nǐ shì Zhōngguó rén háishi Rìběn rén?', de: 'Bist du Chinese oder Japaner?' }
    ]
  },
  {
    pattern: '正在 + Verb',
    pinyin: 'zhèngzài + Verb',
    meaning: 'gerade (betonte Verlaufsform)',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { zh: '我正在吃饭。', pinyin: 'Wǒ zhèngzài chīfàn.', de: 'Ich bin gerade beim Essen.' },
      { zh: '他正在睡觉，别吵他。', pinyin: 'Tā zhèngzài shuìjiào, bié chǎo tā.', de: 'Er schläft gerade, stör ihn nicht.' }
    ]
  },
  {
    pattern: '就 + Verb',
    pinyin: 'jiù + Verb',
    meaning: 'dann / gleich / sofort / bereits',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { zh: '我马上就来。', pinyin: 'Wǒ mǎshàng jiù lái.', de: 'Ich komme gleich.' },
      { zh: '他六点就起床了。', pinyin: 'Tā liù diǎn jiù qǐchuáng le.', de: 'Er ist schon um sechs Uhr aufgestanden.' }
    ]
  },

  // ============================================================
  //  HSK 2 – Erweiterte Muster (10)
  // ============================================================

  {
    pattern: '才 + Verb',
    pinyin: 'cái + Verb',
    meaning: 'erst / nur dann (spät/unerwartet spät)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '他十点才来。', pinyin: 'Tā shí diǎn cái lái.', de: 'Er kam erst um zehn Uhr.' },
      { zh: '我学了三年才学会。', pinyin: 'Wǒ xué le sān nián cái xuéhuì.', de: 'Ich habe drei Jahre gelernt, bis ich es konnte.' }
    ]
  },
  {
    pattern: '应该 + Verb',
    pinyin: 'yīnggāi + Verb',
    meaning: 'sollen / sollte (Empfehlung / Pflicht)',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '你应该多休息。', pinyin: 'Nǐ yīnggāi duō xiūxi.', de: 'Du solltest dich mehr ausruhen.' },
      { zh: '我们应该准时到。', pinyin: 'Wǒmen yīnggāi zhǔnshí dào.', de: 'Wir sollten pünktlich ankommen.' }
    ]
  },
  {
    pattern: '已经…了',
    pinyin: 'yǐjīng…le',
    meaning: 'bereits / schon (abgeschlossen)',
    level: 'HSK2',
    category: 'Zeitausdruecke',
    examples: [
      { zh: '我已经吃了。', pinyin: 'Wǒ yǐjīng chī le.', de: 'Ich habe schon gegessen.' },
      { zh: '他已经走了。', pinyin: 'Tā yǐjīng zǒu le.', de: 'Er ist bereits gegangen.' }
    ]
  },
  {
    pattern: '快要…了',
    pinyin: 'kuàiyào…le',
    meaning: 'bald / gleich (unmittelbar bevorstehend)',
    level: 'HSK2',
    category: 'Zeitausdruecke',
    examples: [
      { zh: '快要下雨了。', pinyin: 'Kuàiyào xiàyǔ le.', de: 'Es wird gleich regnen.' },
      { zh: '电影快要开始了。', pinyin: 'Diànyǐng kuàiyào kāishǐ le.', de: 'Der Film fängt gleich an.' }
    ]
  },
  {
    pattern: '刚/刚才',
    pinyin: 'gāng/gāngcái',
    meaning: 'gerade eben / soeben',
    level: 'HSK2',
    category: 'Zeitausdruecke',
    examples: [
      { zh: '他刚走。', pinyin: 'Tā gāng zǒu.', de: 'Er ist gerade gegangen.' },
      { zh: '刚才谁来了？', pinyin: 'Gāngcái shéi lái le?', de: 'Wer ist gerade eben gekommen?' }
    ]
  },
  {
    pattern: '比…更/还…',
    pinyin: 'bǐ…gèng/hái…',
    meaning: 'noch mehr als (verstärkter Vergleich)',
    level: 'HSK2',
    category: 'Vergleiche',
    examples: [
      { zh: '今天比昨天更冷。', pinyin: 'Jīntiān bǐ zuótiān gèng lěng.', de: 'Heute ist es noch kälter als gestern.' },
      { zh: '她比我还努力。', pinyin: 'Tā bǐ wǒ hái nǔlì.', de: 'Sie ist noch fleißiger als ich.' }
    ]
  },
  {
    pattern: '一共',
    pinyin: 'yígòng',
    meaning: 'insgesamt / zusammen',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '一共多少钱？', pinyin: 'Yígòng duōshao qián?', de: 'Wie viel kostet es insgesamt?' },
      { zh: '我们一共五个人。', pinyin: 'Wǒmen yígòng wǔ gè rén.', de: 'Wir sind insgesamt fünf Personen.' }
    ]
  },
  {
    pattern: '最 + Adjektiv',
    pinyin: 'zuì + Adjektiv',
    meaning: 'am meisten / -ste (Superlativ)',
    level: 'HSK2',
    category: 'Vergleiche',
    examples: [
      { zh: '他是最高的。', pinyin: 'Tā shì zuì gāo de.', de: 'Er ist der Größte.' },
      { zh: '我最喜欢中国菜。', pinyin: 'Wǒ zuì xǐhuan Zhōngguó cài.', de: 'Ich mag chinesisches Essen am liebsten.' }
    ]
  },
  {
    pattern: '觉得',
    pinyin: 'juéde',
    meaning: 'finden / meinen / das Gefühl haben',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '我觉得这个很有意思。', pinyin: 'Wǒ juéde zhège hěn yǒu yìsi.', de: 'Ich finde das sehr interessant.' },
      { zh: '你觉得怎么样？', pinyin: 'Nǐ juéde zěnmeyàng?', de: 'Was meinst du? / Wie findest du es?' }
    ]
  },
  {
    pattern: '还是…吧',
    pinyin: 'háishi…ba',
    meaning: 'lieber doch / besser (Vorschlag nach Abwägung)',
    level: 'HSK2',
    category: 'Satzstruktur',
    examples: [
      { zh: '还是坐出租车吧。', pinyin: 'Háishi zuò chūzūchē ba.', de: 'Nehmen wir doch lieber ein Taxi.' },
      { zh: '还是你来决定吧。', pinyin: 'Háishi nǐ lái juédìng ba.', de: 'Entscheide du das doch lieber.' }
    ]
  },

  // ============================================================
  //  HSK 3 – Fortgeschrittene Muster (10)
  // ============================================================

  {
    pattern: '越…越… (Selbstbezug)',
    pinyin: 'yuè…yuè… (Selbstbezug)',
    meaning: 'je mehr… desto mehr (gleiches Subjekt, verstärkt)',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { zh: '他越说越激动。', pinyin: 'Tā yuè shuō yuè jīdòng.', de: 'Je mehr er redete, desto aufgeregter wurde er.' },
      { zh: '我越想越害怕。', pinyin: 'Wǒ yuè xiǎng yuè hàipà.', de: 'Je mehr ich darüber nachdenke, desto mehr Angst bekomme ich.' }
    ]
  },
  {
    pattern: '把…Verb + 成…',
    pinyin: 'bǎ…Verb + chéng…',
    meaning: 'etwas in etwas verwandeln / als etwas (fehl-)deuten',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { zh: '他把"买"写成了"卖"。', pinyin: 'Tā bǎ "mǎi" xiě chéng le "mài".', de: 'Er hat „kaufen" als „verkaufen" geschrieben.' },
      { zh: '请把这篇文章翻译成德文。', pinyin: 'Qǐng bǎ zhè piān wénzhāng fānyì chéng Déwén.', de: 'Bitte übersetze diesen Artikel ins Deutsche.' }
    ]
  },
  {
    pattern: '果然',
    pinyin: 'guǒrán',
    meaning: 'tatsächlich / wie erwartet',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他果然来了。', pinyin: 'Tā guǒrán lái le.', de: 'Er ist tatsächlich gekommen (wie erwartet).' },
      { zh: '天气预报说会下雨，果然下了。', pinyin: 'Tiānqì yùbào shuō huì xiàyǔ, guǒrán xià le.', de: 'Der Wetterbericht sagte Regen voraus, und es hat tatsächlich geregnet.' }
    ]
  },
  {
    pattern: '到底',
    pinyin: 'dàodǐ',
    meaning: 'nun eigentlich / denn (drängende Frage)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '你到底想要什么？', pinyin: 'Nǐ dàodǐ xiǎng yào shénme?', de: 'Was willst du denn eigentlich?' },
      { zh: '到底是谁说的？', pinyin: 'Dàodǐ shì shéi shuō de?', de: 'Wer hat das nun eigentlich gesagt?' }
    ]
  },
  {
    pattern: '竟然',
    pinyin: 'jìngrán',
    meaning: 'unerwartet / zu meinem Erstaunen',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他竟然通过了考试。', pinyin: 'Tā jìngrán tōngguò le kǎoshì.', de: 'Er hat erstaunlicherweise die Prüfung bestanden.' },
      { zh: '这么简单的题你竟然不会？', pinyin: 'Zhème jiǎndān de tí nǐ jìngrán bú huì?', de: 'So eine einfache Aufgabe kannst du tatsächlich nicht?' }
    ]
  },
  {
    pattern: '毕竟',
    pinyin: 'bìjìng',
    meaning: 'schließlich / immerhin / letzten Endes',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他毕竟还是个孩子。', pinyin: 'Tā bìjìng háishi gè háizi.', de: 'Er ist schließlich immer noch ein Kind.' },
      { zh: '毕竟你也努力了。', pinyin: 'Bìjìng nǐ yě nǔlì le.', de: 'Immerhin hast du dich auch angestrengt.' }
    ]
  },
  {
    pattern: '不如',
    pinyin: 'bùrú',
    meaning: 'nicht so gut wie / lieber (Vorschlag)',
    level: 'HSK3',
    category: 'Vergleiche',
    examples: [
      { zh: '坐公交车不如坐地铁快。', pinyin: 'Zuò gōngjiāochē bùrú zuò dìtiě kuài.', de: 'Der Bus ist nicht so schnell wie die U-Bahn.' },
      { zh: '在家做饭不如出去吃。', pinyin: 'Zài jiā zuòfàn bùrú chūqù chī.', de: 'Zu Hause kochen ist nicht so gut wie auswärts essen.' }
    ]
  },
  {
    pattern: '尤其',
    pinyin: 'yóuqí',
    meaning: 'besonders / insbesondere / vor allem',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '我喜欢水果，尤其是苹果。', pinyin: 'Wǒ xǐhuan shuǐguǒ, yóuqí shì píngguǒ.', de: 'Ich mag Obst, besonders Äpfel.' },
      { zh: '北京的冬天尤其冷。', pinyin: 'Běijīng de dōngtiān yóuqí lěng.', de: 'Der Winter in Peking ist besonders kalt.' }
    ]
  },
  {
    pattern: '万一…就…',
    pinyin: 'wànyī…jiù…',
    meaning: 'falls / für den Fall, dass (unwahrscheinlich)',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { zh: '万一下雨，就别出去了。', pinyin: 'Wànyī xiàyǔ, jiù bié chūqù le.', de: 'Falls es regnen sollte, geh lieber nicht raus.' },
      { zh: '带把伞吧，万一下雨就不怕了。', pinyin: 'Dài bǎ sǎn ba, wànyī xiàyǔ jiù bú pà le.', de: 'Nimm einen Schirm mit, falls es regnet, bist du gewappnet.' }
    ]
  },
  {
    pattern: '按照',
    pinyin: 'ànzhào',
    meaning: 'gemäß / nach / entsprechend',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { zh: '请按照要求完成。', pinyin: 'Qǐng ànzhào yāoqiú wánchéng.', de: 'Bitte erledige es gemäß den Anforderungen.' },
      { zh: '按照计划，我们明天出发。', pinyin: 'Ànzhào jìhuà, wǒmen míngtiān chūfā.', de: 'Laut Plan brechen wir morgen auf.' }
    ]
  }

]);
