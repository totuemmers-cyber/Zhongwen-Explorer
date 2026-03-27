// Zhongwen Explorer – Zusätzliche Grammatik-Daten 6
// ~60 Muster: Gemischt HSK4-6 – komplexe Satzstrukturen, rhetorische Mittel, Diskursmarker
window.GRAMMAR_DATA = window.GRAMMAR_DATA.concat([

  // ============================================================
  //  HSK4–6 – Komplexe Satzstrukturen & Rhetorische Mittel (60)
  // ============================================================

  // --- HSK4: Komplexe Satzstrukturen ---

  {
    pattern: '既不…也不…',
    pinyin: 'jì bù…yě bù…',
    meaning: 'weder … noch …',
    level: 'HSK4',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他既不喝酒也不抽烟。', pinyin: 'Tā jì bù hē jiǔ yě bù chōuyān.', de: 'Er trinkt weder Alkohol noch raucht er.' },
      { zh: '这件事既不紧急也不重要。', pinyin: 'Zhè jiàn shì jì bù jǐnjí yě bù zhòngyào.', de: 'Diese Angelegenheit ist weder dringend noch wichtig.' }
    ]
  },
  {
    pattern: '不到…不…',
    pinyin: 'bú dào…bù…',
    meaning: 'erst wenn … (nicht eher als)',
    level: 'HSK4',
    category: 'Satzstrukturen',
    examples: [
      { zh: '不到长城非好汉。', pinyin: 'Bú dào Chángchéng fēi hǎohàn.', de: 'Wer die Große Mauer nicht erreicht hat, ist kein Held.' },
      { zh: '不到最后一刻不放弃。', pinyin: 'Bú dào zuìhòu yí kè bù fàngqì.', de: 'Erst in der allerletzten Sekunde aufgeben (d. h. niemals).' }
    ]
  },
  {
    pattern: '非…才…',
    pinyin: 'fēi…cái…',
    meaning: 'nur wenn; ausschließlich … erst dann',
    level: 'HSK4',
    category: 'Satzstrukturen',
    examples: [
      { zh: '非你来才行。', pinyin: 'Fēi nǐ lái cái xíng.', de: 'Nur wenn du kommst, geht es.' },
      { zh: '非亲眼看到才能相信。', pinyin: 'Fēi qīnyǎn kàn dào cái néng xiāngxìn.', de: 'Erst wenn man es mit eigenen Augen sieht, kann man es glauben.' }
    ]
  },
  {
    pattern: '一经…便…',
    pinyin: 'yì jīng…biàn…',
    meaning: 'sobald … sofort … (formell)',
    level: 'HSK4',
    category: 'Konjunktionen',
    examples: [
      { zh: '一经发现，便立即处理。', pinyin: 'Yì jīng fāxiàn, biàn lìjí chǔlǐ.', de: 'Sobald es entdeckt wird, wird es sofort behandelt.' },
      { zh: '申请一经批准，便可入职。', pinyin: 'Shēnqǐng yì jīng pīzhǔn, biàn kě rùzhí.', de: 'Sobald der Antrag genehmigt ist, kann man die Stelle antreten.' }
    ]
  },
  {
    pattern: '要么…要么…',
    pinyin: 'yàome…yàome…',
    meaning: 'entweder … oder …',
    level: 'HSK4',
    category: 'Konjunktionen',
    examples: [
      { zh: '你要么现在走，要么等到明天。', pinyin: 'Nǐ yàome xiànzài zǒu, yàome děng dào míngtiān.', de: 'Du gehst entweder jetzt oder wartest bis morgen.' },
      { zh: '要么成功，要么失败，没有第三种选择。', pinyin: 'Yàome chénggōng, yàome shībài, méiyǒu dì sān zhǒng xuǎnzé.', de: 'Entweder Erfolg oder Misserfolg, es gibt keine dritte Option.' }
    ]
  },
  {
    pattern: '…也好，…也好',
    pinyin: '…yě hǎo, …yě hǎo',
    meaning: 'ob … oder …; sei es … oder …',
    level: 'HSK4',
    category: 'Satzstrukturen',
    examples: [
      { zh: '坐车也好，走路也好，都可以。', pinyin: 'Zuò chē yě hǎo, zǒulù yě hǎo, dōu kěyǐ.', de: 'Ob mit dem Auto oder zu Fuß, beides geht.' },
      { zh: '便宜也好，贵也好，关键是质量好。', pinyin: 'Piányi yě hǎo, guì yě hǎo, guānjiàn shì zhìliàng hǎo.', de: 'Ob billig oder teuer, die Hauptsache ist gute Qualität.' }
    ]
  },
  {
    pattern: '…不说，还…',
    pinyin: '…bù shuō, hái…',
    meaning: '… ganz zu schweigen davon, außerdem noch …',
    level: 'HSK4',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他迟到不说，还忘了带资料。', pinyin: 'Tā chídào bù shuō, hái wàng le dài zīliào.', de: 'Er kam nicht nur zu spät, er vergaß auch noch die Unterlagen.' },
      { zh: '这家餐厅贵不说，菜还不好吃。', pinyin: 'Zhè jiā cāntīng guì bù shuō, cài hái bù hǎochī.', de: 'Dieses Restaurant ist nicht nur teuer, das Essen schmeckt auch noch schlecht.' }
    ]
  },
  {
    pattern: '之一',
    pinyin: 'zhī yī',
    meaning: 'einer von; eines der (Superlativ-Zugehörigkeit)',
    level: 'HSK4',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他是我最好的朋友之一。', pinyin: 'Tā shì wǒ zuì hǎo de péngyou zhī yī.', de: 'Er ist einer meiner besten Freunde.' },
      { zh: '这是世界上最大的城市之一。', pinyin: 'Zhè shì shìjiè shàng zuìdà de chéngshì zhī yī.', de: 'Dies ist eine der größten Städte der Welt.' }
    ]
  },
  {
    pattern: '果不其然',
    pinyin: 'guǒ bù qí rán',
    meaning: 'wie erwartet; tatsächlich; ganz wie vermutet',
    level: 'HSK4',
    category: 'Adverbien',
    examples: [
      { zh: '我就知道他会迟到，果不其然。', pinyin: 'Wǒ jiù zhīdào tā huì chídào, guǒ bù qí rán.', de: 'Ich wusste, dass er zu spät kommen würde, und tatsächlich war es so.' },
      { zh: '果不其然，第二天就下雨了。', pinyin: 'Guǒ bù qí rán, dì èr tiān jiù xià yǔ le.', de: 'Wie erwartet hat es am nächsten Tag geregnet.' }
    ]
  },
  {
    pattern: '说白了',
    pinyin: 'shuō bái le',
    meaning: 'offen gesagt; klipp und klar; im Klartext',
    level: 'HSK4',
    category: 'Satzstrukturen',
    examples: [
      { zh: '说白了，他就是不想帮忙。', pinyin: 'Shuō bái le, tā jiùshì bù xiǎng bāngmáng.', de: 'Im Klartext: Er will einfach nicht helfen.' },
      { zh: '说白了，这不过是钱的问题。', pinyin: 'Shuō bái le, zhè búguò shì qián de wèntí.', de: 'Offen gesagt ist es nur eine Frage des Geldes.' }
    ]
  },

  // --- HSK5: Rhetorische Mittel & Diskursmarker ---

  {
    pattern: '之所以…在于…',
    pinyin: 'zhī suǒyǐ…zàiyú…',
    meaning: 'der Grund warum … liegt darin, dass …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他之所以成功，在于他的坚持。', pinyin: 'Tā zhī suǒyǐ chénggōng, zàiyú tā de jiānchí.', de: 'Der Grund für seinen Erfolg liegt in seiner Beharrlichkeit.' },
      { zh: '这个问题之所以难解决，在于涉及太多利益方。', pinyin: 'Zhège wèntí zhī suǒyǐ nán jiějué, zàiyú shèjí tài duō lìyì fāng.', de: 'Der Grund, warum dieses Problem schwer zu lösen ist, liegt darin, dass zu viele Interessengruppen beteiligt sind.' }
    ]
  },
  {
    pattern: '正因为…所以…',
    pinyin: 'zhèng yīnwèi…suǒyǐ…',
    meaning: 'gerade weil … deshalb …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '正因为难，所以才有价值。', pinyin: 'Zhèng yīnwèi nán, suǒyǐ cái yǒu jiàzhí.', de: 'Gerade weil es schwer ist, hat es deshalb Wert.' },
      { zh: '正因为他很努力，所以取得了好成绩。', pinyin: 'Zhèng yīnwèi tā hěn nǔlì, suǒyǐ qǔdé le hǎo chéngjì.', de: 'Gerade weil er so fleißig war, hat er deshalb gute Ergebnisse erzielt.' }
    ]
  },
  {
    pattern: '与其…倒不如…',
    pinyin: 'yǔqí…dào bùrú…',
    meaning: 'anstatt … wäre es besser …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '与其在这里等，倒不如先去办别的事。', pinyin: 'Yǔqí zài zhèlǐ děng, dào bùrú xiān qù bàn bié de shì.', de: 'Anstatt hier zu warten, wäre es besser, erst andere Dinge zu erledigen.' },
      { zh: '与其担心，倒不如行动起来。', pinyin: 'Yǔqí dānxīn, dào bùrú xíngdòng qǐlái.', de: 'Anstatt sich Sorgen zu machen, wäre es besser, einfach zu handeln.' }
    ]
  },
  {
    pattern: '既…就…',
    pinyin: 'jì…jiù…',
    meaning: 'wenn man schon … dann sollte man auch …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '既来之，则安之。', pinyin: 'Jì lái zhī, zé ān zhī.', de: 'Wenn man schon da ist, sollte man sich damit abfinden.' },
      { zh: '既然答应了，就应该做到。', pinyin: 'Jìrán dāying le, jiù yīnggāi zuòdào.', de: 'Wenn man es schon versprochen hat, sollte man es auch einhalten.' }
    ]
  },
  {
    pattern: '要不…要不…',
    pinyin: 'yào bù…yào bù…',
    meaning: 'wenn nicht … dann … (zwei Möglichkeiten)',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '今天晚上，要不看电影，要不去散步。', pinyin: 'Jīntiān wǎnshang, yào bù kàn diànyǐng, yào bù qù sànbù.', de: 'Heute Abend entweder ins Kino gehen oder spazieren gehen.' },
      { zh: '要不你先走，要不我们一起等他。', pinyin: 'Yào bù nǐ xiān zǒu, yào bù wǒmen yìqǐ děng tā.', de: 'Entweder du gehst zuerst, oder wir warten zusammen auf ihn.' }
    ]
  },
  {
    pattern: '别说…就连…也…',
    pinyin: 'bié shuō…jiù lián…yě…',
    meaning: 'von … ganz zu schweigen, sogar … auch …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '别说外国人了，就连中国人也不一定能听懂。', pinyin: 'Bié shuō wàiguórén le, jiù lián Zhōngguórén yě bù yídìng néng tīng dǒng.', de: 'Von Ausländern ganz zu schweigen, sogar Chinesen verstehen es nicht unbedingt.' },
      { zh: '别说买房了，就连租房都租不起。', pinyin: 'Bié shuō mǎi fáng le, jiù lián zū fáng dōu zū bù qǐ.', de: 'Vom Hauskauf ganz zu schweigen, man kann sich nicht einmal die Miete leisten.' }
    ]
  },
  {
    pattern: '不…反…',
    pinyin: 'bù…fǎn…',
    meaning: 'nicht … sondern im Gegenteil …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他不但没生气，反而笑了起来。', pinyin: 'Tā bù dàn méi shēngqì, fǎnér xiào le qǐlái.', de: 'Er wurde nicht nur nicht wütend, sondern fing im Gegenteil an zu lachen.' },
      { zh: '问题不减反增。', pinyin: 'Wèntí bù jiǎn fǎn zēng.', de: 'Die Probleme nahmen nicht ab, sondern im Gegenteil zu.' }
    ]
  },
  {
    pattern: '可…可…',
    pinyin: 'kě…kě…',
    meaning: 'sowohl … als auch möglich; mal … mal …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '这件事可大可小。', pinyin: 'Zhè jiàn shì kě dà kě xiǎo.', de: 'Diese Sache kann bedeutsam oder unbedeutend sein.' },
      { zh: '天气可冷可热的，真让人受不了。', pinyin: 'Tiānqì kě lěng kě rè de, zhēn ràng rén shòu bù liǎo.', de: 'Das Wetter ist mal kalt, mal heiß - wirklich unerträglich.' }
    ]
  },
  {
    pattern: '话说回来',
    pinyin: 'huà shuō huílái',
    meaning: 'andererseits; wenn man es aber bedenkt',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他是有些固执。话说回来，他说的也有道理。', pinyin: 'Tā shì yǒuxiē gùzhi. Huà shuō huílái, tā shuō de yě yǒu dàolǐ.', de: 'Er ist schon etwas stur. Andererseits hat das, was er sagt, auch seine Berechtigung.' },
      { zh: '加班确实辛苦，话说回来，工资也高。', pinyin: 'Jiābān quèshí xīnkǔ, huà shuō huílái, gōngzī yě gāo.', de: 'Überstunden sind wirklich anstrengend, andererseits ist das Gehalt auch hoch.' }
    ]
  },
  {
    pattern: '说到底',
    pinyin: 'shuō dào dǐ',
    meaning: 'letzten Endes; im Grunde genommen',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '说到底，还是钱的问题。', pinyin: 'Shuō dào dǐ, háishi qián de wèntí.', de: 'Letzten Endes ist es eine Frage des Geldes.' },
      { zh: '说到底，成功靠的是坚持。', pinyin: 'Shuō dào dǐ, chénggōng kào de shì jiānchí.', de: 'Im Grunde genommen hängt Erfolg von Beharrlichkeit ab.' }
    ]
  },
  {
    pattern: '说起来容易做起来难',
    pinyin: 'shuō qǐlái róngyì zuò qǐlái nán',
    meaning: 'leichter gesagt als getan',
    level: 'HSK5',
    category: 'Rhetorisch',
    examples: [
      { zh: '减肥说起来容易做起来难。', pinyin: 'Jiǎnféi shuō qǐlái róngyì zuò qǐlái nán.', de: 'Abnehmen ist leichter gesagt als getan.' },
      { zh: '改变习惯说起来容易做起来难。', pinyin: 'Gǎibiàn xíguàn shuō qǐlái róngyì zuò qǐlái nán.', de: 'Gewohnheiten zu ändern, ist leichter gesagt als getan.' }
    ]
  },
  {
    pattern: '可不是嘛',
    pinyin: 'kě bú shì ma',
    meaning: 'das stimmt allerdings; da hast du recht',
    level: 'HSK5',
    category: 'Rhetorisch',
    examples: [
      { zh: '可不是嘛，天气越来越冷了。', pinyin: 'Kě bú shì ma, tiānqì yuè lái yuè lěng le.', de: 'Das stimmt allerdings, das Wetter wird immer kälter.' },
      { zh: '可不是嘛，时间过得真快。', pinyin: 'Kě bú shì ma, shíjiān guò de zhēn kuài.', de: 'Da hast du recht, die Zeit vergeht wirklich schnell.' }
    ]
  },
  {
    pattern: '也罢',
    pinyin: 'yě bà',
    meaning: 'sei es auch so; na gut; meinetwegen',
    level: 'HSK5',
    category: 'Partikeln',
    examples: [
      { zh: '他不来也罢，我们自己去。', pinyin: 'Tā bù lái yě bà, wǒmen zìjǐ qù.', de: 'Wenn er nicht kommt, auch gut, wir gehen alleine.' },
      { zh: '成功也罢，失败也罢，至少我尝试过了。', pinyin: 'Chénggōng yě bà, shībài yě bà, zhìshǎo wǒ chángshì guò le.', de: 'Ob Erfolg oder Misserfolg, zumindest habe ich es versucht.' }
    ]
  },
  {
    pattern: '…也就罢了',
    pinyin: '…yě jiù bà le',
    meaning: 'das wäre ja noch in Ordnung, aber …',
    level: 'HSK5',
    category: 'Rhetorisch',
    examples: [
      { zh: '迟到也就罢了，还不道歉。', pinyin: 'Chídào yě jiù bà le, hái bù dàoqiàn.', de: 'Zu spät kommen wäre ja noch in Ordnung, aber sich nicht einmal entschuldigen!' },
      { zh: '不帮忙也就罢了，竟然还添乱。', pinyin: 'Bù bāngmáng yě jiù bà le, jìngrán hái tiānluàn.', de: 'Nicht helfen wäre ja in Ordnung, aber dann auch noch Chaos stiften!' }
    ]
  },

  // --- HSK5–6: Rhetorische Figuren ---

  {
    pattern: '不是…而是…的问题',
    pinyin: 'bú shì…ér shì…de wèntí',
    meaning: 'es geht nicht um … sondern um … (Problemrahmung)',
    level: 'HSK5',
    category: 'Rhetorisch',
    examples: [
      { zh: '这不是能不能的问题，而是愿不愿意的问题。', pinyin: 'Zhè bú shì néng bù néng de wèntí, ér shì yuàn bú yuànyì de wèntí.', de: 'Es geht nicht darum, ob man kann, sondern ob man will.' },
      { zh: '不是钱的问题，而是原则的问题。', pinyin: 'Bú shì qián de wèntí, ér shì yuánzé de wèntí.', de: 'Es geht nicht ums Geld, sondern ums Prinzip.' }
    ]
  },
  {
    pattern: '不在于…而在于…',
    pinyin: 'bú zàiyú…ér zàiyú…',
    meaning: 'es liegt nicht an … sondern an …',
    level: 'HSK5',
    category: 'Rhetorisch',
    examples: [
      { zh: '成功不在于聪明，而在于勤奋。', pinyin: 'Chénggōng bú zàiyú cōngmíng, ér zàiyú qínfèn.', de: 'Erfolg liegt nicht an der Intelligenz, sondern am Fleiß.' },
      { zh: '关键不在于做多少，而在于做得好不好。', pinyin: 'Guānjiàn bú zàiyú zuò duōshǎo, ér zàiyú zuò de hǎo bù hǎo.', de: 'Es kommt nicht darauf an, wie viel man tut, sondern ob man es gut macht.' }
    ]
  },
  {
    pattern: '宁缺毋滥',
    pinyin: 'nìng quē wú làn',
    meaning: 'lieber weniger und dafür gut (als viel und schlecht)',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '招聘人才应该宁缺毋滥。', pinyin: 'Zhāopìn réncái yīnggāi nìng quē wú làn.', de: 'Bei der Rekrutierung von Talenten sollte man lieber auf Qualität als auf Quantität setzen.' },
      { zh: '交朋友也要宁缺毋滥。', pinyin: 'Jiāo péngyou yě yào nìng quē wú làn.', de: 'Auch bei Freundschaften sollte man auf Qualität statt Quantität setzen.' }
    ]
  },
  {
    pattern: '所谓…就是…',
    pinyin: 'suǒwèi…jiùshì…',
    meaning: 'das sogenannte … ist … (Definition)',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '所谓"入乡随俗"就是要尊重当地的风俗习惯。', pinyin: 'Suǒwèi "rùxiāng suísú" jiùshì yào zūnzhòng dāngdì de fēngsú xíguàn.', de: 'Das sogenannte „Wenn man in ein Dorf kommt, folge man den Sitten" bedeutet, die lokalen Bräuche zu respektieren.' },
      { zh: '所谓成功，就是不断超越自己。', pinyin: 'Suǒwèi chénggōng, jiùshì búduàn chāoyuè zìjǐ.', de: 'Das sogenannte Erfolg bedeutet, sich selbst ständig zu übertreffen.' }
    ]
  },
  {
    pattern: '…无他，…而已',
    pinyin: '…wú tā, …éryǐ',
    meaning: '… nichts anderes als … (Reduktion auf das Wesentliche)',
    level: 'HSK6',
    category: 'Literarisch',
    examples: [
      { zh: '成功之道无他，勤奋而已。', pinyin: 'Chénggōng zhī dào wú tā, qínfèn éryǐ.', de: 'Das Geheimnis des Erfolgs ist nichts anderes als Fleiß.' },
      { zh: '此事无他，唯手熟尔。', pinyin: 'Cǐ shì wú tā, wéi shǒu shú ěr.', de: 'Es steckt nichts Besonderes dahinter, nur Übung.' }
    ]
  },
  {
    pattern: '…尚且如此，何况…',
    pinyin: '…shàngqiě rúcǐ, hékuàng…',
    meaning: '… ist schon so, geschweige denn … (Steigerung)',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '专家尚且如此，何况普通人呢？', pinyin: 'Zhuānjiā shàngqiě rúcǐ, hékuàng pǔtōngrén ne?', de: 'Wenn es schon Experten so geht, wie erst normale Leute?' },
      { zh: '平时尚且如此忙碌，何况年底呢？', pinyin: 'Píngshí shàngqiě rúcǐ mánglù, hékuàng niándǐ ne?', de: 'Normalerweise ist man schon so beschäftigt, geschweige denn am Jahresende.' }
    ]
  },
  {
    pattern: '与其坐以待毙，不如…',
    pinyin: 'yǔqí zuòyǐdàibì, bùrú…',
    meaning: 'anstatt untätig auf das Ende zu warten, lieber …',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '与其坐以待毙，不如主动出击。', pinyin: 'Yǔqí zuòyǐdàibì, bùrú zhǔdòng chūjī.', de: 'Anstatt untätig auf das Ende zu warten, sollte man lieber die Initiative ergreifen.' },
      { zh: '与其坐以待毙，不如放手一搏。', pinyin: 'Yǔqí zuòyǐdàibì, bùrú fàngshǒu yì bó.', de: 'Anstatt untätig auf das Ende zu warten, sollte man es lieber wagen.' }
    ]
  },

  // --- HSK5–6: Diskursmarker & Textorganisation ---

  {
    pattern: '首先…其次…最后…',
    pinyin: 'shǒuxiān…qícì…zuìhòu…',
    meaning: 'erstens … zweitens … schließlich … (Aufzählung)',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '首先要了解问题，其次要分析原因，最后才能找到解决方案。', pinyin: 'Shǒuxiān yào liǎojiě wèntí, qícì yào fēnxī yuányīn, zuìhòu cái néng zhǎodào jiějué fāngàn.', de: 'Erstens muss man das Problem verstehen, zweitens die Ursachen analysieren, und schließlich kann man eine Lösung finden.' },
      { zh: '首先感谢大家的到来，其次介绍一下议程，最后进入正题。', pinyin: 'Shǒuxiān gǎnxiè dàjiā de dàolái, qícì jièshào yíxià yìchéng, zuìhòu jìnrù zhèngtí.', de: 'Zunächst danke ich allen fürs Kommen, dann stelle ich die Tagesordnung vor, und zum Schluss kommen wir zum eigentlichen Thema.' }
    ]
  },
  {
    pattern: '一方面…同时…',
    pinyin: 'yì fāngmiàn…tóngshí…',
    meaning: 'einerseits … gleichzeitig …',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '一方面要节约成本，同时也要保证质量。', pinyin: 'Yì fāngmiàn yào jiéyuē chéngběn, tóngshí yě yào bǎozhèng zhìliàng.', de: 'Einerseits müssen die Kosten gespart werden, gleichzeitig muss auch die Qualität gesichert werden.' },
      { zh: '一方面经济在发展，同时环境也在恶化。', pinyin: 'Yì fāngmiàn jīngjì zài fāzhǎn, tóngshí huánjìng yě zài èhuà.', de: 'Einerseits entwickelt sich die Wirtschaft, gleichzeitig verschlechtert sich auch die Umwelt.' }
    ]
  },
  {
    pattern: '换句话说',
    pinyin: 'huàn jù huà shuō',
    meaning: 'mit anderen Worten; anders ausgedrückt',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他没通过考试，换句话说，他不能毕业。', pinyin: 'Tā méi tōngguò kǎoshì, huàn jù huà shuō, tā bù néng bìyè.', de: 'Er hat die Prüfung nicht bestanden, mit anderen Worten, er kann nicht abschließen.' },
      { zh: '换句话说，我们需要更多的时间。', pinyin: 'Huàn jù huà shuō, wǒmen xūyào gèng duō de shíjiān.', de: 'Anders ausgedrückt brauchen wir mehr Zeit.' }
    ]
  },
  {
    pattern: '严格来说',
    pinyin: 'yángé lái shuō',
    meaning: 'streng genommen; genau genommen',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '严格来说，这不算违规。', pinyin: 'Yángé lái shuō, zhè bú suàn wéiguī.', de: 'Streng genommen ist das kein Verstoß.' },
      { zh: '严格来说，熊猫不是熊。', pinyin: 'Yángé lái shuō, xióngmāo bú shì xióng.', de: 'Genau genommen ist der Panda kein Bär.' }
    ]
  },
  {
    pattern: '坦白说',
    pinyin: 'tǎnbái shuō',
    meaning: 'ehrlich gesagt; offen gestanden',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '坦白说，我对这个结果不太满意。', pinyin: 'Tǎnbái shuō, wǒ duì zhège jiéguǒ bú tài mǎnyì.', de: 'Ehrlich gesagt bin ich mit diesem Ergebnis nicht sehr zufrieden.' },
      { zh: '坦白说，我觉得你的方案需要改进。', pinyin: 'Tǎnbái shuō, wǒ juéde nǐ de fāngàn xūyào gǎijìn.', de: 'Offen gestanden denke ich, dass dein Plan verbessert werden muss.' }
    ]
  },
  {
    pattern: '恕我直言',
    pinyin: 'shù wǒ zhíyán',
    meaning: 'gestatten Sie, dass ich offen spreche; mit Verlaub',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '恕我直言，这个计划根本行不通。', pinyin: 'Shù wǒ zhíyán, zhège jìhuà gēnběn xíng bù tōng.', de: 'Mit Verlaub, dieser Plan funktioniert überhaupt nicht.' },
      { zh: '恕我直言，你的判断有误。', pinyin: 'Shù wǒ zhíyán, nǐ de pànduàn yǒu wù.', de: 'Gestatten Sie, dass ich offen sage: Ihr Urteil ist falsch.' }
    ]
  },
  {
    pattern: '言归正传',
    pinyin: 'yán guī zhèngzhuàn',
    meaning: 'zurück zum eigentlichen Thema; aber zur Sache',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '好了，言归正传，我们来讨论今天的议题。', pinyin: 'Hǎo le, yán guī zhèngzhuàn, wǒmen lái tǎolùn jīntiān de yìtí.', de: 'Gut, zurück zum eigentlichen Thema, lassen Sie uns den heutigen Tagesordnungspunkt besprechen.' },
      { zh: '闲话少说，言归正传。', pinyin: 'Xiánhuà shǎo shuō, yán guī zhèngzhuàn.', de: 'Genug Geplauder, kommen wir zur Sache.' }
    ]
  },
  {
    pattern: '就事论事',
    pinyin: 'jiù shì lùn shì',
    meaning: 'bei der Sache bleiben; sachlich diskutieren',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '我们就事论事，不要扯别的。', pinyin: 'Wǒmen jiù shì lùn shì, bú yào chě bié de.', de: 'Bleiben wir bei der Sache und schweifen nicht ab.' },
      { zh: '就事论事地说，这个方案确实有改进的空间。', pinyin: 'Jiù shì lùn shì de shuō, zhège fāngàn quèshí yǒu gǎijìn de kōngjiān.', de: 'Sachlich betrachtet hat dieser Plan tatsächlich Verbesserungspotenzial.' }
    ]
  },

  // --- HSK6: Weitere komplexe Strukturen ---

  {
    pattern: '非但…反而…',
    pinyin: 'fēidàn…fǎnér…',
    meaning: 'nicht nur nicht …, sondern im Gegenteil …',
    level: 'HSK6',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他的病非但没有好转，反而更加严重了。', pinyin: 'Tā de bìng fēidàn méiyǒu hǎozhuǎn, fǎnér gèng jiā yánzhòng le.', de: 'Seine Krankheit hat sich nicht nur nicht gebessert, sondern im Gegenteil verschlimmert.' },
      { zh: '批评他非但没有效果，反而激起了他的反感。', pinyin: 'Pīpíng tā fēidàn méiyǒu xiàoguǒ, fǎnér jīqǐ le tā de fǎngǎn.', de: 'Die Kritik an ihm hatte nicht nur keine Wirkung, sondern rief im Gegenteil seine Abneigung hervor.' }
    ]
  },
  {
    pattern: '非但不…反而…',
    pinyin: 'fēidàn bù…fǎnér…',
    meaning: 'nicht nur nicht … sondern sogar im Gegenteil …',
    level: 'HSK6',
    category: 'Satzstrukturen',
    examples: [
      { zh: '他非但不承认错误，反而指责别人。', pinyin: 'Tā fēidàn bù chéngrèn cuòwù, fǎnér zhǐzé biérén.', de: 'Er gesteht nicht nur seinen Fehler nicht ein, sondern beschuldigt im Gegenteil andere.' },
      { zh: '价格非但不降，反而上涨了。', pinyin: 'Jiàgé fēidàn bú jiàng, fǎnér shàngzhǎng le.', de: 'Der Preis ist nicht nur nicht gesunken, sondern im Gegenteil gestiegen.' }
    ]
  },
  {
    pattern: '纵使…也…',
    pinyin: 'zòngshǐ…yě…',
    meaning: 'selbst wenn; auch wenn (noch so, literarisch)',
    level: 'HSK6',
    category: 'Konjunktionen',
    examples: [
      { zh: '纵使困难重重，我们也要坚持下去。', pinyin: 'Zòngshǐ kùnnan chóngchóng, wǒmen yě yào jiānchí xiàqù.', de: 'Selbst wenn die Schwierigkeiten zahlreich sind, müssen wir durchhalten.' },
      { zh: '纵使天涯海角，我也要找到你。', pinyin: 'Zòngshǐ tiānyá hǎijiǎo, wǒ yě yào zhǎodào nǐ.', de: 'Selbst wenn du am Ende der Welt wärst, würde ich dich finden.' }
    ]
  },
  {
    pattern: '倘使',
    pinyin: 'tǎngshǐ',
    meaning: 'wenn; falls; angenommen (literarisch)',
    level: 'HSK6',
    category: 'Konjunktionen',
    examples: [
      { zh: '倘使有机会，我一定会去中国旅行。', pinyin: 'Tǎngshǐ yǒu jīhuì, wǒ yídìng huì qù Zhōngguó lǚxíng.', de: 'Wenn sich die Gelegenheit ergibt, werde ich auf jeden Fall nach China reisen.' },
      { zh: '倘使你不同意，可以提出别的方案。', pinyin: 'Tǎngshǐ nǐ bù tóngyì, kěyǐ tíchū bié de fāngàn.', de: 'Falls du nicht einverstanden bist, kannst du einen anderen Vorschlag machen.' }
    ]
  },
  {
    pattern: '设若',
    pinyin: 'shèruò',
    meaning: 'angenommen, dass; gesetzt den Fall (literarisch)',
    level: 'HSK6',
    category: 'Konjunktionen',
    examples: [
      { zh: '设若此事属实，后果将不堪设想。', pinyin: 'Shèruò cǐ shì shǔshí, hòuguǒ jiāng bùkān shèxiǎng.', de: 'Gesetzt den Fall, dass dies der Wahrheit entspricht, wären die Folgen unvorstellbar.' },
      { zh: '设若没有他的帮助，我们不可能成功。', pinyin: 'Shèruò méiyǒu tā de bāngzhù, wǒmen bù kěnéng chénggōng.', de: 'Angenommen, wir hätten seine Hilfe nicht gehabt, wäre uns der Erfolg nicht möglich gewesen.' }
    ]
  },
  {
    pattern: '且不说…单是…就…',
    pinyin: 'qiě bù shuō…dān shì…jiù…',
    meaning: 'ganz abgesehen von … allein schon … (Hervorhebung)',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '且不说其他费用，单是房租就要五千元。', pinyin: 'Qiě bù shuō qítā fèiyòng, dān shì fángzū jiù yào wǔqiān yuán.', de: 'Ganz abgesehen von den anderen Kosten, allein die Miete beträgt schon 5000 Yuan.' },
      { zh: '且不说味道，单是这道菜的卖相就令人食欲大增。', pinyin: 'Qiě bù shuō wèidào, dān shì zhè dào cài de màixiàng jiù lìng rén shíyù dà zēng.', de: 'Ganz abgesehen vom Geschmack, allein das Aussehen dieses Gerichts regt schon den Appetit an.' }
    ]
  },
  {
    pattern: '殊不知',
    pinyin: 'shū bù zhī',
    meaning: 'ohne zu wissen; was man nicht ahnte',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '他以为自己很聪明，殊不知别人早就看穿了他的把戏。', pinyin: 'Tā yǐwéi zìjǐ hěn cōngmíng, shū bù zhī biérén zǎo jiù kànchuān le tā de bǎxì.', de: 'Er hielt sich für sehr schlau, ohne zu wissen, dass andere seine Tricks längst durchschaut hatten.' },
      { zh: '她拼命加班挣钱，殊不知健康才是最重要的。', pinyin: 'Tā pīnmìng jiābān zhèngqián, shū bù zhī jiànkāng cái shì zuì zhòngyào de.', de: 'Sie arbeitete wie verrückt Überstunden, um Geld zu verdienen, ohne zu ahnen, dass Gesundheit das Wichtigste ist.' }
    ]
  },
  {
    pattern: '孰不知',
    pinyin: 'shú bù zhī',
    meaning: 'wer weiß denn nicht; wie konnte man ahnen (ironisch)',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '他以为很简单，孰不知其中大有学问。', pinyin: 'Tā yǐwéi hěn jiǎndān, shú bù zhī qízhōng dà yǒu xuéwèn.', de: 'Er dachte, es sei einfach, wusste aber nicht, dass darin große Gelehrsamkeit steckt.' },
      { zh: '大家都觉得他过得很好，孰不知他正经历着人生的低谷。', pinyin: 'Dàjiā dōu juéde tā guò de hěn hǎo, shú bù zhī tā zhèng jīnglì zhe rénshēng de dīgǔ.', de: 'Alle dachten, es ginge ihm gut, ahnten aber nicht, dass er gerade den Tiefpunkt seines Lebens durchmachte.' }
    ]
  },
  {
    pattern: '前者…后者…',
    pinyin: 'qiánzhě…hòuzhě…',
    meaning: 'ersteres … letzteres … (kontrastive Gegenüberstellung)',
    level: 'HSK6',
    category: 'Satzstrukturen',
    examples: [
      { zh: '知识和智慧不同，前者是信息的积累，后者是对信息的运用。', pinyin: 'Zhīshi hé zhìhuì bùtóng, qiánzhě shì xìnxī de jīlěi, hòuzhě shì duì xìnxī de yùnyòng.', de: 'Wissen und Weisheit sind verschieden; Ersteres ist die Ansammlung von Informationen, Letzteres deren Anwendung.' },
      { zh: '前者强调过程，后者注重结果。', pinyin: 'Qiánzhě qiángdiào guòchéng, hòuzhě zhùzhòng jiéguǒ.', de: 'Ersteres betont den Prozess, Letzteres legt Wert auf das Ergebnis.' }
    ]
  },
  {
    pattern: '…固然好，但…',
    pinyin: '…gùrán hǎo, dàn…',
    meaning: '… ist zwar gut, aber … (differenzierte Einschätzung)',
    level: 'HSK6',
    category: 'Satzstrukturen',
    examples: [
      { zh: '经济发展固然好，但不能以牺牲环境为代价。', pinyin: 'Jīngjì fāzhǎn gùrán hǎo, dàn bù néng yǐ xīshēng huánjìng wéi dàijià.', de: 'Wirtschaftliche Entwicklung ist zwar gut, aber nicht auf Kosten der Umwelt.' },
      { zh: '赚钱固然好，但身体健康更重要。', pinyin: 'Zhuànqián gùrán hǎo, dàn shēntǐ jiànkāng gèng zhòngyào.', de: 'Geld verdienen ist zwar gut, aber die Gesundheit ist wichtiger.' }
    ]
  },
  {
    pattern: '顾名思义',
    pinyin: 'gù míng sī yì',
    meaning: 'wie der Name schon sagt; wörtlich genommen',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '顾名思义，"自行车"就是自己走的车。', pinyin: 'Gù míng sī yì, "zìxíngchē" jiùshì zìjǐ zǒu de chē.', de: 'Wie der Name schon sagt, ist ein „Fahrrad" (自行车 = sich-selbst-bewegendes-Fahrzeug) ein Fahrzeug, das sich selbst bewegt.' },
      { zh: '顾名思义，"牛津"就是牛过河的渡口。', pinyin: 'Gù míng sī yì, "Niújīn" jiùshì niú guò hé de dùkǒu.', de: 'Wie der Name schon sagt, ist „Oxford" (牛津) eine Furt, durch die Ochsen den Fluss überqueren.' }
    ]
  },
  {
    pattern: '打个比方',
    pinyin: 'dǎ gè bǐfāng',
    meaning: 'um eine Analogie zu ziehen; zum Beispiel/Vergleich',
    level: 'HSK5',
    category: 'Rhetorisch',
    examples: [
      { zh: '打个比方，学习就像盖房子，基础很重要。', pinyin: 'Dǎ gè bǐfāng, xuéxí jiù xiàng gài fángzi, jīchǔ hěn zhòngyào.', de: 'Um eine Analogie zu ziehen: Lernen ist wie ein Haus bauen, das Fundament ist wichtig.' },
      { zh: '打个比方，人生就像一场旅行。', pinyin: 'Dǎ gè bǐfāng, rénshēng jiù xiàng yì chǎng lǚxíng.', de: 'Um einen Vergleich zu ziehen: Das Leben ist wie eine Reise.' }
    ]
  },
  {
    pattern: '不论…还是…都…',
    pinyin: 'bùlùn…háishi…dōu…',
    meaning: 'egal ob … oder … in jedem Fall …',
    level: 'HSK4',
    category: 'Konjunktionen',
    examples: [
      { zh: '不论刮风还是下雨，他都坚持锻炼。', pinyin: 'Bùlùn guā fēng háishi xià yǔ, tā dōu jiānchí duànliàn.', de: 'Egal ob es stürmt oder regnet, er trainiert in jedem Fall.' },
      { zh: '不论你是学生还是老师，都要遵守规定。', pinyin: 'Bùlùn nǐ shì xuéshēng háishi lǎoshī, dōu yào zūnshǒu guīdìng.', de: 'Egal ob du Schüler oder Lehrer bist, du musst die Regeln befolgen.' }
    ]
  },
  {
    pattern: '据我所知',
    pinyin: 'jù wǒ suǒ zhī',
    meaning: 'soweit ich weiß; meines Wissens',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '据我所知，他已经辞职了。', pinyin: 'Jù wǒ suǒ zhī, tā yǐjīng cízhí le.', de: 'Soweit ich weiß, hat er bereits gekündigt.' },
      { zh: '据我所知，这家餐厅的菜很好吃。', pinyin: 'Jù wǒ suǒ zhī, zhè jiā cāntīng de cài hěn hǎochī.', de: 'Meines Wissens ist das Essen in diesem Restaurant sehr gut.' }
    ]
  },
  {
    pattern: '有感于此',
    pinyin: 'yǒu gǎn yú cǐ',
    meaning: 'davon bewegt; aus dieser Erkenntnis heraus',
    level: 'HSK6',
    category: 'Konjunktionen',
    examples: [
      { zh: '有感于此，他决定投身公益事业。', pinyin: 'Yǒu gǎn yú cǐ, tā juédìng tóushēn gōngyì shìyè.', de: 'Davon bewegt entschied er sich, sich sozialen Projekten zu widmen.' },
      { zh: '有感于此，作者写下了这篇文章。', pinyin: 'Yǒu gǎn yú cǐ, zuòzhě xiě xià le zhè piān wénzhāng.', de: 'Aus dieser Erkenntnis heraus verfasste der Autor diesen Artikel.' }
    ]
  },
  {
    pattern: '不可同日而语',
    pinyin: 'bùkě tóng rì ér yǔ',
    meaning: 'nicht in einem Atemzug zu nennen; unvergleichbar',
    level: 'HSK6',
    category: 'Vergleiche',
    examples: [
      { zh: '现在的生活和以前不可同日而语。', pinyin: 'Xiànzài de shēnghuó hé yǐqián bùkě tóng rì ér yǔ.', de: 'Das heutige Leben ist mit dem früheren nicht zu vergleichen.' },
      { zh: '两家公司的规模不可同日而语。', pinyin: 'Liǎng jiā gōngsī de guīmó bùkě tóng rì ér yǔ.', de: 'Die Größe der beiden Unternehmen ist nicht vergleichbar.' }
    ]
  },
  {
    pattern: '大致说来',
    pinyin: 'dàzhì shuō lái',
    meaning: 'im Großen und Ganzen; grob gesagt',
    level: 'HSK5',
    category: 'Satzstrukturen',
    examples: [
      { zh: '大致说来，这个项目进展顺利。', pinyin: 'Dàzhì shuō lái, zhège xiàngmù jìnzhǎn shùnlì.', de: 'Im Großen und Ganzen verläuft dieses Projekt reibungslos.' },
      { zh: '大致说来，他的观点是正确的。', pinyin: 'Dàzhì shuō lái, tā de guāndiǎn shì zhèngquè de.', de: 'Grob gesagt ist sein Standpunkt korrekt.' }
    ]
  },
  {
    pattern: '要而言之',
    pinyin: 'yào ér yán zhī',
    meaning: 'um das Wesentliche zusammenzufassen; kurz und knapp',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '要而言之，我们需要改变策略。', pinyin: 'Yào ér yán zhī, wǒmen xūyào gǎibiàn cèlüè.', de: 'Kurz und knapp: Wir müssen unsere Strategie ändern.' },
      { zh: '要而言之，教育是国家发展的根本。', pinyin: 'Yào ér yán zhī, jiàoyù shì guójiā fāzhǎn de gēnběn.', de: 'Um das Wesentliche zusammenzufassen: Bildung ist die Grundlage der nationalen Entwicklung.' }
    ]
  },
  {
    pattern: '…至关重要',
    pinyin: '…zhìguān zhòngyào',
    meaning: '… ist von entscheidender Bedeutung; äußerst wichtig',
    level: 'HSK5',
    category: 'Adjektive',
    examples: [
      { zh: '团队合作至关重要。', pinyin: 'Tuánduì hézuò zhìguān zhòngyào.', de: 'Teamarbeit ist von entscheidender Bedeutung.' },
      { zh: '在这个阶段，保持冷静至关重要。', pinyin: 'Zài zhège jiēduàn, bǎochí lěngjìng zhìguān zhòngyào.', de: 'In dieser Phase ist es äußerst wichtig, einen kühlen Kopf zu bewahren.' }
    ]
  },
  {
    pattern: '…不无道理',
    pinyin: '…bù wú dàolǐ',
    meaning: 'ist nicht ohne Grund; hat durchaus seine Berechtigung',
    level: 'HSK6',
    category: 'Rhetorisch',
    examples: [
      { zh: '他的担心不无道理。', pinyin: 'Tā de dānxīn bù wú dàolǐ.', de: 'Seine Sorge hat durchaus ihre Berechtigung.' },
      { zh: '这种说法不无道理。', pinyin: 'Zhè zhǒng shuōfǎ bù wú dàolǐ.', de: 'Diese Aussage ist nicht ohne Grund.' }
    ]
  },
]);
