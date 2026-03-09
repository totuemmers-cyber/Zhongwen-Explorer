// Zhongwen Explorer – Zusätzliche Grammatik-Daten 3
// 40 weitere Muster (10 HSK1 + 10 HSK2 + 10 HSK3 + 10 HSK4)
window.GRAMMAR_DATA = window.GRAMMAR_DATA.concat([

  // ============================================================
  //  HSK 1 – Grundmuster (10)
  // ============================================================

  {
    pattern: '都 + 不/没',
    pinyin: 'dōu + bù/méi',
    meaning: 'alle nicht / keiner (vollständige Verneinung)',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { zh: '我们都不喜欢。', pinyin: 'Wǒmen dōu bù xǐhuan.', de: 'Wir mögen es alle nicht.' },
      { zh: '他们都没来。', pinyin: 'Tāmen dōu méi lái.', de: 'Keiner von ihnen ist gekommen.' }
    ]
  },
  {
    pattern: '又 + Verb + 了',
    pinyin: 'yòu + Verb + le',
    meaning: 'schon wieder (erneute Handlung in Vergangenheit)',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { zh: '他又迟到了。', pinyin: 'Tā yòu chídào le.', de: 'Er ist schon wieder zu spät gekommen.' },
      { zh: '你又忘了！', pinyin: 'Nǐ yòu wàng le!', de: 'Du hast es schon wieder vergessen!' }
    ]
  },
  {
    pattern: '再 + Verb',
    pinyin: 'zài + Verb',
    meaning: 'nochmal / wieder (zukünftig)',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { zh: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', de: 'Bitte sag es nochmal.' },
      { zh: '我们明天再见！', pinyin: 'Wǒmen míngtiān zài jiàn!', de: 'Wir sehen uns morgen wieder!' }
    ]
  },
  {
    pattern: '还没（有）…呢',
    pinyin: 'hái méi(yǒu)… ne',
    meaning: 'noch nicht (Erwartung unerfüllt)',
    level: 'HSK1',
    category: 'Verneinung',
    examples: [
      { zh: '他还没来呢。', pinyin: 'Tā hái méi lái ne.', de: 'Er ist noch nicht gekommen.' },
      { zh: '我还没吃饭呢。', pinyin: 'Wǒ hái méi chī fàn ne.', de: 'Ich habe noch nicht gegessen.' }
    ]
  },
  {
    pattern: '多/少 + Verb',
    pinyin: 'duō/shǎo + Verb',
    meaning: 'mehr/weniger tun (Ratschlag)',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { zh: '多喝水。', pinyin: 'Duō hē shuǐ.', de: 'Trink mehr Wasser.' },
      { zh: '少吃糖。', pinyin: 'Shǎo chī táng.', de: 'Iss weniger Zucker.' }
    ]
  },
  {
    pattern: '…啊',
    pinyin: '…a',
    meaning: 'Ausrufspartikel (Staunen, Aufforderung)',
    level: 'HSK1',
    category: 'Partikeln',
    examples: [
      { zh: '太好了啊！', pinyin: 'Tài hǎo le a!', de: 'Das ist ja großartig!' },
      { zh: '快来啊！', pinyin: 'Kuài lái a!', de: 'Komm schnell!' }
    ]
  },
  {
    pattern: 'Adj + 一点儿',
    pinyin: 'Adj + yìdiǎnr',
    meaning: 'ein bisschen mehr (Aufforderung)',
    level: 'HSK1',
    category: 'Adjektive',
    examples: [
      { zh: '请快一点儿。', pinyin: 'Qǐng kuài yìdiǎnr.', de: 'Bitte ein bisschen schneller.' },
      { zh: '说慢一点儿。', pinyin: 'Shuō màn yìdiǎnr.', de: 'Sprich ein bisschen langsamer.' }
    ]
  },
  {
    pattern: '好 + Adjektiv',
    pinyin: 'hǎo + Adjektiv',
    meaning: 'so / wirklich (Ausruf)',
    level: 'HSK1',
    category: 'Adjektive',
    examples: [
      { zh: '好大啊！', pinyin: 'Hǎo dà a!', de: 'So groß!' },
      { zh: '今天好冷！', pinyin: 'Jīntiān hǎo lěng!', de: 'Heute ist es wirklich kalt!' }
    ]
  },
  {
    pattern: '…了…了',
    pinyin: '…le…le',
    meaning: 'Doppel-了 (Abschluss + Zustandsänderung)',
    level: 'HSK1',
    category: 'Partikeln',
    examples: [
      { zh: '我吃了饭了。', pinyin: 'Wǒ chī le fàn le.', de: 'Ich habe (jetzt) gegessen.' },
      { zh: '他买了三本书了。', pinyin: 'Tā mǎi le sān běn shū le.', de: 'Er hat (inzwischen) drei Bücher gekauft.' }
    ]
  },
  {
    pattern: '是不是',
    pinyin: 'shì bu shì',
    meaning: 'Bestätigungsfrage mit 是',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '你是不是中国人？', pinyin: 'Nǐ shì bu shì Zhōngguó rén?', de: 'Bist du Chinese?' },
      { zh: '这是不是你的？', pinyin: 'Zhè shì bu shì nǐ de?', de: 'Ist das deins?' }
    ]
  },

  // ============================================================
  //  HSK 2 – Mittelstufe Grundlagen (10)
  // ============================================================

  {
    pattern: '要…了',
    pinyin: 'yào…le',
    meaning: 'gleich / bald (unmittelbare Zukunft)',
    level: 'HSK2',
    category: 'Zeitformen',
    examples: [
      { zh: '要下雨了。', pinyin: 'Yào xià yǔ le.', de: 'Es wird gleich regnen.' },
      { zh: '火车要开了！', pinyin: 'Huǒchē yào kāi le!', de: 'Der Zug fährt gleich ab!' }
    ]
  },
  {
    pattern: '多么 + Adj',
    pinyin: 'duōme + Adj',
    meaning: 'wie sehr / was für ein (Ausruf)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '这里多么漂亮啊！', pinyin: 'Zhèlǐ duōme piàoliang a!', de: 'Wie schön es hier ist!' },
      { zh: '他多么想回家！', pinyin: 'Tā duōme xiǎng huí jiā!', de: 'Wie sehr er nach Hause will!' }
    ]
  },
  {
    pattern: '虽然…可是…',
    pinyin: 'suīrán…kěshì…',
    meaning: 'obwohl…aber… (Variante mit 可是)',
    level: 'HSK2',
    category: 'Konjunktionen',
    examples: [
      { zh: '虽然很累，可是很开心。', pinyin: 'Suīrán hěn lèi, kěshì hěn kāixīn.', de: 'Obwohl ich müde bin, bin ich glücklich.' },
      { zh: '虽然他很小，可是很聪明。', pinyin: 'Suīrán tā hěn xiǎo, kěshì hěn cōngming.', de: 'Obwohl er klein ist, ist er sehr klug.' }
    ]
  },
  {
    pattern: '一点儿也不 + Adj',
    pinyin: 'yìdiǎnr yě bù + Adj',
    meaning: 'überhaupt nicht / kein bisschen',
    level: 'HSK2',
    category: 'Verneinung',
    examples: [
      { zh: '我一点儿也不累。', pinyin: 'Wǒ yìdiǎnr yě bù lèi.', de: 'Ich bin überhaupt nicht müde.' },
      { zh: '他一点儿也不高兴。', pinyin: 'Tā yìdiǎnr yě bù gāoxìng.', de: 'Er ist kein bisschen froh.' }
    ]
  },
  {
    pattern: '又…又… (Verben)',
    pinyin: 'yòu…yòu… (Verben)',
    meaning: 'sowohl…als auch… (gleichzeitige Handlungen)',
    level: 'HSK2',
    category: 'Konjunktionen',
    examples: [
      { zh: '她又唱又跳。', pinyin: 'Tā yòu chàng yòu tiào.', de: 'Sie singt und tanzt zugleich.' },
      { zh: '孩子们又哭又笑。', pinyin: 'Háizimen yòu kū yòu xiào.', de: 'Die Kinder weinen und lachen gleichzeitig.' }
    ]
  },
  {
    pattern: 'Verb + 得 + 很好',
    pinyin: 'Verb + de + hěn hǎo',
    meaning: 'etwas gut machen (Grad-Komplement)',
    level: 'HSK2',
    category: 'Komplemente',
    examples: [
      { zh: '她说得很好。', pinyin: 'Tā shuō de hěn hǎo.', de: 'Sie spricht sehr gut.' },
      { zh: '你写得很漂亮。', pinyin: 'Nǐ xiě de hěn piàoliang.', de: 'Du schreibst sehr schön.' }
    ]
  },
  {
    pattern: '不是…就是…',
    pinyin: 'bú shì…jiù shì…',
    meaning: 'wenn nicht…dann… / entweder…oder…',
    level: 'HSK2',
    category: 'Konjunktionen',
    examples: [
      { zh: '他不是在看书，就是在睡觉。', pinyin: 'Tā bú shì zài kàn shū, jiù shì zài shuìjiào.', de: 'Er liest entweder oder er schläft.' },
      { zh: '周末不是下雨，就是太热。', pinyin: 'Zhōumò bú shì xià yǔ, jiù shì tài rè.', de: 'Am Wochenende regnet es entweder oder es ist zu heiß.' }
    ]
  },
  {
    pattern: '那么 + Adj/Verb',
    pinyin: 'nàme + Adj/Verb',
    meaning: 'so / dermaßen',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '别那么紧张。', pinyin: 'Bié nàme jǐnzhāng.', de: 'Sei nicht so nervös.' },
      { zh: '你怎么那么忙？', pinyin: 'Nǐ zěnme nàme máng?', de: 'Warum bist du so beschäftigt?' }
    ]
  },
  {
    pattern: '不…也不…',
    pinyin: 'bù…yě bù…',
    meaning: 'weder…noch…',
    level: 'HSK2',
    category: 'Verneinung',
    examples: [
      { zh: '他不吃也不喝。', pinyin: 'Tā bù chī yě bù hē.', de: 'Er isst weder noch trinkt er.' },
      { zh: '这里不大也不小。', pinyin: 'Zhèlǐ bú dà yě bù xiǎo.', de: 'Hier ist es weder groß noch klein.' }
    ]
  },
  {
    pattern: '…的话',
    pinyin: '…de huà',
    meaning: 'wenn / falls (umgangssprachlich)',
    level: 'HSK2',
    category: 'Konjunktionen',
    examples: [
      { zh: '你有时间的话，来找我。', pinyin: 'Nǐ yǒu shíjiān de huà, lái zhǎo wǒ.', de: 'Wenn du Zeit hast, komm mich besuchen.' },
      { zh: '不想去的话，就别去了。', pinyin: 'Bù xiǎng qù de huà, jiù bié qù le.', de: 'Wenn du nicht gehen willst, dann geh eben nicht.' }
    ]
  },

  // ============================================================
  //  HSK 3 – Mittelstufe (10)
  // ============================================================

  {
    pattern: '看样子',
    pinyin: 'kàn yàngzi',
    meaning: 'es sieht so aus als ob / anscheinend',
    level: 'HSK3',
    category: 'Modalausdrücke',
    examples: [
      { zh: '看样子要下雨了。', pinyin: 'Kàn yàngzi yào xià yǔ le.', de: 'Es sieht so aus, als ob es regnen wird.' },
      { zh: '看样子他不太高兴。', pinyin: 'Kàn yàngzi tā bú tài gāoxìng.', de: 'Anscheinend ist er nicht sehr froh.' }
    ]
  },
  {
    pattern: '除非…才…',
    pinyin: 'chúfēi…cái…',
    meaning: 'nur wenn / es sei denn',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { zh: '除非你来，我才去。', pinyin: 'Chúfēi nǐ lái, wǒ cái qù.', de: 'Nur wenn du kommst, gehe ich hin.' },
      { zh: '除非下雨，我们才取消。', pinyin: 'Chúfēi xià yǔ, wǒmen cái qǔxiāo.', de: 'Nur wenn es regnet, sagen wir ab.' }
    ]
  },
  {
    pattern: '对于…来说',
    pinyin: 'duìyú…lái shuō',
    meaning: 'was…betrifft / für…(gesehen)',
    level: 'HSK3',
    category: 'Präpositionen',
    examples: [
      { zh: '对于我来说，健康最重要。', pinyin: 'Duìyú wǒ lái shuō, jiànkāng zuì zhòngyào.', de: 'Für mich ist Gesundheit am wichtigsten.' },
      { zh: '对于初学者来说，这很难。', pinyin: 'Duìyú chūxuézhě lái shuō, zhè hěn nán.', de: 'Für Anfänger ist das sehr schwer.' }
    ]
  },
  {
    pattern: '可不是吗',
    pinyin: 'kě bú shì ma',
    meaning: 'das stimmt! / nicht wahr? (nachdrückliche Zustimmung)',
    level: 'HSK3',
    category: 'Modalausdrücke',
    examples: [
      { zh: '可不是吗，他每天都迟到！', pinyin: 'Kě bú shì ma, tā měi tiān dōu chídào!', de: 'Nicht wahr, er kommt jeden Tag zu spät!' },
      { zh: '可不是吗，这个地方真不错。', pinyin: 'Kě bú shì ma, zhège dìfang zhēn búcuò.', de: 'Ja wirklich, dieser Ort ist echt gut.' }
    ]
  },
  {
    pattern: '显然',
    pinyin: 'xiǎnrán',
    meaning: 'offensichtlich / offenbar',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他显然不同意。', pinyin: 'Tā xiǎnrán bù tóngyì.', de: 'Er ist offensichtlich nicht einverstanden.' },
      { zh: '显然，这个方法不行。', pinyin: 'Xiǎnrán, zhège fāngfǎ bù xíng.', de: 'Offensichtlich funktioniert diese Methode nicht.' }
    ]
  },
  {
    pattern: '到处',
    pinyin: 'dàochù',
    meaning: 'überall / an allen Orten',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '到处都是人。', pinyin: 'Dàochù dōu shì rén.', de: 'Überall sind Leute.' },
      { zh: '我到处找你。', pinyin: 'Wǒ dàochù zhǎo nǐ.', de: 'Ich habe dich überall gesucht.' }
    ]
  },
  {
    pattern: '随便',
    pinyin: 'suíbiàn',
    meaning: 'wie man will / egal / beliebig',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '你随便坐。', pinyin: 'Nǐ suíbiàn zuò.', de: 'Setz dich, wohin du willst.' },
      { zh: '别随便乱说。', pinyin: 'Bié suíbiàn luàn shuō.', de: 'Rede nicht einfach drauflos.' }
    ]
  },
  {
    pattern: '差点儿 + Verb',
    pinyin: 'chàdiǎnr + Verb',
    meaning: 'beinahe / fast (etwas wäre passiert)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '我差点儿迟到了。', pinyin: 'Wǒ chàdiǎnr chídào le.', de: 'Ich wäre fast zu spät gekommen.' },
      { zh: '他差点儿摔倒。', pinyin: 'Tā chàdiǎnr shuāidǎo.', de: 'Er wäre fast hingefallen.' }
    ]
  },
  {
    pattern: '干脆',
    pinyin: 'gāncuì',
    meaning: 'einfach / kurzerhand / am besten gleich',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '干脆我们走路去吧。', pinyin: 'Gāncuì wǒmen zǒulù qù ba.', de: 'Gehen wir doch einfach zu Fuß.' },
      { zh: '你干脆别去了。', pinyin: 'Nǐ gāncuì bié qù le.', de: 'Geh am besten gar nicht erst hin.' }
    ]
  },
  {
    pattern: '再也不/没 + Verb',
    pinyin: 'zài yě bù/méi + Verb',
    meaning: 'nie wieder / nie mehr',
    level: 'HSK3',
    category: 'Verneinung',
    examples: [
      { zh: '我再也不想去了。', pinyin: 'Wǒ zài yě bù xiǎng qù le.', de: 'Ich will nie wieder hingehen.' },
      { zh: '他再也没回来。', pinyin: 'Tā zài yě méi huílai.', de: 'Er ist nie wieder zurückgekommen.' }
    ]
  },

  // ============================================================
  //  HSK 4 – Obere Mittelstufe (10)
  // ============================================================

  {
    pattern: '以来',
    pinyin: 'yǐlái',
    meaning: 'seitdem / seit (Zeitpunkt bis jetzt)',
    level: 'HSK4',
    category: 'Zeitformen',
    examples: [
      { zh: '来中国以来，我学了很多。', pinyin: 'Lái Zhōngguó yǐlái, wǒ xué le hěn duō.', de: 'Seitdem ich in China bin, habe ich viel gelernt.' },
      { zh: '三年以来，他一直在努力。', pinyin: 'Sān nián yǐlái, tā yìzhí zài nǔlì.', de: 'Seit drei Jahren gibt er sich ständig Mühe.' }
    ]
  },
  {
    pattern: '尽管…但…',
    pinyin: 'jǐnguǎn…dàn…',
    meaning: 'obwohl…aber… (formeller als 虽然)',
    level: 'HSK4',
    category: 'Konjunktionen',
    examples: [
      { zh: '尽管很辛苦，但他从不抱怨。', pinyin: 'Jǐnguǎn hěn xīnkǔ, dàn tā cóng bù bàoyuàn.', de: 'Obwohl es anstrengend ist, beschwert er sich nie.' },
      { zh: '尽管条件不好，但大家很努力。', pinyin: 'Jǐnguǎn tiáojiàn bù hǎo, dàn dàjiā hěn nǔlì.', de: 'Obwohl die Bedingungen schlecht sind, geben alle ihr Bestes.' }
    ]
  },
  {
    pattern: '与其…宁可…',
    pinyin: 'yǔqí…nìngkě…',
    meaning: 'anstatt…lieber… (umgekehrte Reihenfolge)',
    level: 'HSK4',
    category: 'Konjunktionen',
    examples: [
      { zh: '与其浪费时间，宁可多休息。', pinyin: 'Yǔqí làngfèi shíjiān, nìngkě duō xiūxi.', de: 'Anstatt Zeit zu verschwenden, ruhe ich mich lieber aus.' },
      { zh: '与其后悔，宁可现在努力。', pinyin: 'Yǔqí hòuhuǐ, nìngkě xiànzài nǔlì.', de: 'Anstatt es zu bereuen, strenge ich mich lieber jetzt an.' }
    ]
  },
  {
    pattern: '再怎么…也…',
    pinyin: 'zài zěnme…yě…',
    meaning: 'egal wie sehr…trotzdem…',
    level: 'HSK4',
    category: 'Konjunktionen',
    examples: [
      { zh: '再怎么努力，也来不及了。', pinyin: 'Zài zěnme nǔlì, yě láibùjí le.', de: 'Egal wie sehr man sich anstrengt, es ist zu spät.' },
      { zh: '再怎么说，他也是你的朋友。', pinyin: 'Zài zěnme shuō, tā yě shì nǐ de péngyou.', de: 'Was man auch sagt, er ist immerhin dein Freund.' }
    ]
  },
  {
    pattern: '难怪',
    pinyin: 'nánguài',
    meaning: 'kein Wunder (dass) / verständlich',
    level: 'HSK4',
    category: 'Modalausdrücke',
    examples: [
      { zh: '难怪他那么累，原来加班到很晚。', pinyin: 'Nánguài tā nàme lèi, yuánlái jiābān dào hěn wǎn.', de: 'Kein Wunder, dass er so müde ist -- er hat bis spät Überstunden gemacht.' },
      { zh: '难怪你中文说得这么好！', pinyin: 'Nánguài nǐ zhōngwén shuō de zhème hǎo!', de: 'Kein Wunder, dass du so gut Chinesisch sprichst!' }
    ]
  },
  {
    pattern: '往往',
    pinyin: 'wǎngwǎng',
    meaning: 'oft / meistens / in der Regel',
    level: 'HSK4',
    category: 'Adverbien',
    examples: [
      { zh: '成功往往需要耐心。', pinyin: 'Chénggōng wǎngwǎng xūyào nàixīn.', de: 'Erfolg erfordert in der Regel Geduld.' },
      { zh: '他往往很晚才回家。', pinyin: 'Tā wǎngwǎng hěn wǎn cái huí jiā.', de: 'Er kommt meistens erst spät nach Hause.' }
    ]
  },
  {
    pattern: '至少',
    pinyin: 'zhìshǎo',
    meaning: 'mindestens / wenigstens',
    level: 'HSK4',
    category: 'Adverbien',
    examples: [
      { zh: '至少要学三年。', pinyin: 'Zhìshǎo yào xué sān nián.', de: 'Man muss mindestens drei Jahre lernen.' },
      { zh: '你至少应该告诉我一声。', pinyin: 'Nǐ zhìshǎo yīnggāi gàosu wǒ yì shēng.', de: 'Du hättest mir wenigstens Bescheid sagen sollen.' }
    ]
  },
  {
    pattern: '宁愿…也…',
    pinyin: 'nìngyuàn…yě…',
    meaning: 'lieber…als… (starke Präferenz)',
    level: 'HSK4',
    category: 'Konjunktionen',
    examples: [
      { zh: '我宁愿走路，也不坐公交车。', pinyin: 'Wǒ nìngyuàn zǒulù, yě bú zuò gōngjiāochē.', de: 'Ich gehe lieber zu Fuß, als den Bus zu nehmen.' },
      { zh: '他宁愿饿着，也不吃那个。', pinyin: 'Tā nìngyuàn è zhe, yě bù chī nàge.', de: 'Er hungert lieber, als das zu essen.' }
    ]
  },
  {
    pattern: '动不动就…',
    pinyin: 'dòngbudòng jiù…',
    meaning: 'bei jeder Kleinigkeit / ständig',
    level: 'HSK4',
    category: 'Adverbien',
    examples: [
      { zh: '她动不动就哭。', pinyin: 'Tā dòngbudòng jiù kū.', de: 'Sie weint bei jeder Kleinigkeit.' },
      { zh: '他动不动就生气。', pinyin: 'Tā dòngbudòng jiù shēngqì.', de: 'Er wird ständig wütend.' }
    ]
  },
  {
    pattern: '之际',
    pinyin: 'zhī jì',
    meaning: 'zum Zeitpunkt / bei Gelegenheit von',
    level: 'HSK4',
    category: 'Zeitformen',
    examples: [
      { zh: '毕业之际，他感慨万千。', pinyin: 'Bìyè zhī jì, tā gǎnkǎi wànqiān.', de: 'Zum Zeitpunkt des Abschlusses war er voller Emotionen.' },
      { zh: '新年之际，祝你一切顺利。', pinyin: 'Xīnnián zhī jì, zhù nǐ yíqiè shùnlì.', de: 'Zum neuen Jahr wünsche ich dir alles Gute.' }
    ]
  },
]);
