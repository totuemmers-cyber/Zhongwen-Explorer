// Zhongwen Explorer – Zusätzliche Grammatik-Daten (HSK 1–3)
// 60 weitere Muster (20 pro Stufe)
window.GRAMMAR_DATA = window.GRAMMAR_DATA.concat([

  // ============================================================
  //  HSK 1 – Grundmuster (20)
  // ============================================================

  {
    pattern: '这/那 + Zählwort + Nomen',
    pinyin: 'zhè/nà + Zählwort + Nomen',
    meaning: 'dies/jenes + Zählwort + Nomen (Demonstrativpronomen)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '这个人是我的老师。', pinyin: 'Zhège rén shì wǒ de lǎoshī.', de: 'Diese Person ist mein Lehrer.' },
      { zh: '那本书很好看。', pinyin: 'Nà běn shū hěn hǎokàn.', de: 'Jenes Buch ist sehr schön.' }
    ]
  },
  {
    pattern: '叫 + Name',
    pinyin: 'jiào + Name',
    meaning: 'heißen / sich vorstellen',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { zh: '我叫王明。', pinyin: 'Wǒ jiào Wáng Míng.', de: 'Ich heiße Wang Ming.' },
      { zh: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', de: 'Wie heißt du?' }
    ]
  },
  {
    pattern: '好吗',
    pinyin: 'hǎo ma',
    meaning: 'In Ordnung? / Ist das okay? (Bestätigungsfrage)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '我们去吃饭，好吗？', pinyin: 'Wǒmen qù chīfàn, hǎo ma?', de: 'Lass uns essen gehen, okay?' },
      { zh: '明天见，好吗？', pinyin: 'Míngtiān jiàn, hǎo ma?', de: 'Bis morgen, in Ordnung?' }
    ]
  },
  {
    pattern: '多少钱',
    pinyin: 'duōshao qián',
    meaning: 'Wie viel kostet es?',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '这个多少钱？', pinyin: 'Zhège duōshao qián?', de: 'Wie viel kostet das?' },
      { zh: '那件衣服多少钱？', pinyin: 'Nà jiàn yīfu duōshao qián?', de: 'Wie viel kostet jenes Kleidungsstück?' }
    ]
  },
  {
    pattern: '了 (Zustandsänderung)',
    pinyin: 'le (Zustandsänderung)',
    meaning: 'Satzfinales 了 zeigt neue Situation oder Veränderung an',
    level: 'HSK1',
    category: 'Partikel',
    examples: [
      { zh: '天冷了。', pinyin: 'Tiān lěng le.', de: 'Es ist kalt geworden.' },
      { zh: '我饿了。', pinyin: 'Wǒ è le.', de: 'Ich bin hungrig geworden.' }
    ]
  },
  {
    pattern: '岁',
    pinyin: 'suì',
    meaning: 'Jahre alt (Altersangabe)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '我二十五岁。', pinyin: 'Wǒ èrshíwǔ suì.', de: 'Ich bin 25 Jahre alt.' },
      { zh: '她的女儿三岁了。', pinyin: 'Tā de nǚ'ér sān suì le.', de: 'Ihre Tochter ist drei Jahre alt geworden.' }
    ]
  },
  {
    pattern: '什么时候',
    pinyin: 'shénme shíhou',
    meaning: 'wann (Frage nach dem Zeitpunkt)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '你什么时候来？', pinyin: 'Nǐ shénme shíhou lái?', de: 'Wann kommst du?' },
      { zh: '考试什么时候开始？', pinyin: 'Kǎoshì shénme shíhou kāishǐ?', de: 'Wann fängt die Prüfung an?' }
    ]
  },
  {
    pattern: '块/元',
    pinyin: 'kuài/yuán',
    meaning: 'Yuan (Geldeinheit, umgangssprachlich/formell)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '这本书十五块钱。', pinyin: 'Zhè běn shū shíwǔ kuài qián.', de: 'Dieses Buch kostet 15 Yuan.' },
      { zh: '一共三十二元。', pinyin: 'Yígòng sānshí'èr yuán.', de: 'Insgesamt 32 Yuan.' }
    ]
  },
  {
    pattern: '对不起 / 没关系',
    pinyin: 'duìbuqǐ / méi guānxi',
    meaning: 'Entschuldigung / Macht nichts',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '对不起，我来晚了。', pinyin: 'Duìbuqǐ, wǒ lái wǎn le.', de: 'Entschuldigung, ich bin zu spät gekommen.' },
      { zh: '没关系，不要紧。', pinyin: 'Méi guānxi, búyàojǐn.', de: 'Macht nichts, ist nicht schlimm.' }
    ]
  },
  {
    pattern: '让 + Person + Verb',
    pinyin: 'ràng + Person + Verb',
    meaning: 'jemanden etwas tun lassen',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { zh: '妈妈让我做作业。', pinyin: 'Māma ràng wǒ zuò zuòyè.', de: 'Mama lässt mich Hausaufgaben machen.' },
      { zh: '请让我看看。', pinyin: 'Qǐng ràng wǒ kànkan.', de: 'Bitte lass mich mal schauen.' }
    ]
  },
  {
    pattern: '从 + Ort/Zeit',
    pinyin: 'cóng + Ort/Zeit',
    meaning: 'von / ab (Ausgangsort oder -zeit)',
    level: 'HSK1',
    category: 'Präpositionen',
    examples: [
      { zh: '我从北京来。', pinyin: 'Wǒ cóng Běijīng lái.', de: 'Ich komme aus Peking.' },
      { zh: '从明天开始学习。', pinyin: 'Cóng míngtiān kāishǐ xuéxí.', de: 'Ab morgen fange ich an zu lernen.' }
    ]
  },
  {
    pattern: '在 + Ort + Verb',
    pinyin: 'zài + Ort + Verb',
    meaning: 'an einem Ort eine Handlung ausführen',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '我在家吃饭。', pinyin: 'Wǒ zài jiā chīfàn.', de: 'Ich esse zu Hause.' },
      { zh: '他在学校学习。', pinyin: 'Tā zài xuéxiào xuéxí.', de: 'Er lernt in der Schule.' }
    ]
  },
  {
    pattern: '到 + Ort/Zeit',
    pinyin: 'dào + Ort/Zeit',
    meaning: 'ankommen bei / bis zu',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { zh: '我到了北京。', pinyin: 'Wǒ dào le Běijīng.', de: 'Ich bin in Peking angekommen.' },
      { zh: '从早上到晚上。', pinyin: 'Cóng zǎoshang dào wǎnshang.', de: 'Von morgens bis abends.' }
    ]
  },
  {
    pattern: '先 + Verb₁ + 再 + Verb₂',
    pinyin: 'xiān + Verb₁ + zài + Verb₂',
    meaning: 'zuerst… dann… (Reihenfolge, informell)',
    level: 'HSK1',
    category: 'Zeitausdrücke',
    examples: [
      { zh: '先吃饭再看电视。', pinyin: 'Xiān chīfàn zài kàn diànshì.', de: 'Zuerst essen, dann fernsehen.' },
      { zh: '你先休息，再做作业。', pinyin: 'Nǐ xiān xiūxi, zài zuò zuòyè.', de: 'Ruh dich zuerst aus, dann mach Hausaufgaben.' }
    ]
  },
  {
    pattern: '用 + Nomen + Verb',
    pinyin: 'yòng + Nomen + Verb',
    meaning: 'mit etwas etwas tun (Instrument)',
    level: 'HSK1',
    category: 'Präpositionen',
    examples: [
      { zh: '我用筷子吃饭。', pinyin: 'Wǒ yòng kuàizi chīfàn.', de: 'Ich esse mit Stäbchen.' },
      { zh: '她用中文写信。', pinyin: 'Tā yòng zhōngwén xiě xìn.', de: 'Sie schreibt den Brief auf Chinesisch.' }
    ]
  },
  {
    pattern: '又 + Adj₁ + 又 + Adj₂ (Grundform)',
    pinyin: 'yòu + Adj₁ + yòu + Adj₂',
    meaning: 'sowohl… als auch… (zwei Eigenschaften gleichzeitig)',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { zh: '这个又大又便宜。', pinyin: 'Zhège yòu dà yòu piányi.', de: 'Das ist sowohl groß als auch günstig.' },
      { zh: '房间又干净又明亮。', pinyin: 'Fángjiān yòu gānjìng yòu míngliàng.', de: 'Das Zimmer ist sowohl sauber als auch hell.' }
    ]
  },
  {
    pattern: '多 + Adjektiv',
    pinyin: 'duō + Adjektiv',
    meaning: 'wie + Adjektiv (Frage nach Ausmaß)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '你家离这儿多远？', pinyin: 'Nǐ jiā lí zhèr duō yuǎn?', de: 'Wie weit ist dein Zuhause von hier?' },
      { zh: '这条河多长？', pinyin: 'Zhè tiáo hé duō cháng?', de: 'Wie lang ist dieser Fluss?' }
    ]
  },
  {
    pattern: '得 (děi) müssen',
    pinyin: 'děi + Verb',
    meaning: 'müssen (umgangssprachliche Notwendigkeit)',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { zh: '我得走了。', pinyin: 'Wǒ děi zǒu le.', de: 'Ich muss gehen.' },
      { zh: '你得早点儿起床。', pinyin: 'Nǐ děi zǎo diǎnr qǐchuáng.', de: 'Du musst früher aufstehen.' }
    ]
  },
  {
    pattern: '不是',
    pinyin: 'bú shì',
    meaning: 'nicht sein (Verneinung von 是)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { zh: '我不是老师。', pinyin: 'Wǒ bú shì lǎoshī.', de: 'Ich bin kein Lehrer.' },
      { zh: '这不是我的书。', pinyin: 'Zhè bú shì wǒ de shū.', de: 'Das ist nicht mein Buch.' }
    ]
  },
  {
    pattern: '有没有',
    pinyin: 'yǒu méi yǒu',
    meaning: 'hast du / gibt es (Ja-Nein-Frage mit 有)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { zh: '你有没有时间？', pinyin: 'Nǐ yǒu méi yǒu shíjiān?', de: 'Hast du Zeit?' },
      { zh: '这里有没有厕所？', pinyin: 'Zhèlǐ yǒu méi yǒu cèsuǒ?', de: 'Gibt es hier eine Toilette?' }
    ]
  },

  // ============================================================
  //  HSK 2 – Erweiterte Muster (20)
  // ============================================================

  {
    pattern: '必须 + Verb',
    pinyin: 'bìxū + Verb',
    meaning: 'müssen (zwingend / Pflicht)',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '你必须按时完成。', pinyin: 'Nǐ bìxū ànshí wánchéng.', de: 'Du musst es rechtzeitig fertigstellen.' },
      { zh: '我们必须遵守规则。', pinyin: 'Wǒmen bìxū zūnshǒu guīzé.', de: 'Wir müssen die Regeln befolgen.' }
    ]
  },
  {
    pattern: '不用 + Verb',
    pinyin: 'búyòng + Verb',
    meaning: 'braucht nicht / nicht nötig',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '不用谢。', pinyin: 'Búyòng xiè.', de: 'Keine Ursache.' },
      { zh: '你不用来了。', pinyin: 'Nǐ búyòng lái le.', de: 'Du brauchst nicht zu kommen.' }
    ]
  },
  {
    pattern: '非常 + Adjektiv',
    pinyin: 'fēicháng + Adjektiv',
    meaning: 'außerordentlich / sehr (stärker als 很)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '非常感谢！', pinyin: 'Fēicháng gǎnxiè!', de: 'Vielen herzlichen Dank!' },
      { zh: '这个地方非常漂亮。', pinyin: 'Zhège dìfang fēicháng piàoliang.', de: 'Dieser Ort ist außerordentlich schön.' }
    ]
  },
  {
    pattern: '特别 + Adjektiv',
    pinyin: 'tèbié + Adjektiv',
    meaning: 'besonders / außergewöhnlich',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '今天特别冷。', pinyin: 'Jīntiān tèbié lěng.', de: 'Heute ist es besonders kalt.' },
      { zh: '我特别喜欢这首歌。', pinyin: 'Wǒ tèbié xǐhuan zhè shǒu gē.', de: 'Ich mag dieses Lied besonders gern.' }
    ]
  },
  {
    pattern: '不太 + Adjektiv',
    pinyin: 'bú tài + Adjektiv',
    meaning: 'nicht besonders / nicht sehr (abgemilderte Verneinung)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '我不太喜欢。', pinyin: 'Wǒ bú tài xǐhuan.', de: 'Ich mag es nicht besonders.' },
      { zh: '这个不太好。', pinyin: 'Zhège bú tài hǎo.', de: 'Das ist nicht besonders gut.' }
    ]
  },
  {
    pattern: '有一点儿 + Adjektiv',
    pinyin: 'yǒu yìdiǎnr + Adjektiv',
    meaning: 'ein bisschen (leicht negativ empfunden)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '我有点儿累。', pinyin: 'Wǒ yǒudiǎnr lèi.', de: 'Ich bin ein bisschen müde.' },
      { zh: '这个有点儿贵。', pinyin: 'Zhège yǒudiǎnr guì.', de: 'Das ist ein bisschen teuer.' }
    ]
  },
  {
    pattern: '对 + Nomen + 感兴趣',
    pinyin: 'duì + Nomen + gǎn xìngqù',
    meaning: 'sich für etwas interessieren',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '我对中国历史很感兴趣。', pinyin: 'Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.', de: 'Ich interessiere mich sehr für chinesische Geschichte.' },
      { zh: '你对什么感兴趣？', pinyin: 'Nǐ duì shénme gǎn xìngqù?', de: 'Wofür interessierst du dich?' }
    ]
  },
  {
    pattern: '以前',
    pinyin: 'yǐqián',
    meaning: 'früher / bevor / vor',
    level: 'HSK2',
    category: 'Zeitausdrücke',
    examples: [
      { zh: '吃饭以前要洗手。', pinyin: 'Chīfàn yǐqián yào xǐ shǒu.', de: 'Vor dem Essen muss man sich die Hände waschen.' },
      { zh: '以前我住在德国。', pinyin: 'Yǐqián wǒ zhù zài Déguó.', de: 'Früher habe ich in Deutschland gewohnt.' }
    ]
  },
  {
    pattern: '以后',
    pinyin: 'yǐhòu',
    meaning: 'danach / in Zukunft / nachdem',
    level: 'HSK2',
    category: 'Zeitausdrücke',
    examples: [
      { zh: '吃饭以后我们去散步。', pinyin: 'Chīfàn yǐhòu wǒmen qù sànbù.', de: 'Nach dem Essen gehen wir spazieren.' },
      { zh: '以后我要去中国。', pinyin: 'Yǐhòu wǒ yào qù Zhōngguó.', de: 'Später möchte ich nach China fahren.' }
    ]
  },
  {
    pattern: '从…起/开始',
    pinyin: 'cóng…qǐ/kāishǐ',
    meaning: 'ab / seit (Anfangszeitpunkt)',
    level: 'HSK2',
    category: 'Zeitausdrücke',
    examples: [
      { zh: '从明天开始，我每天跑步。', pinyin: 'Cóng míngtiān kāishǐ, wǒ měi tiān pǎobù.', de: 'Ab morgen jogge ich jeden Tag.' },
      { zh: '从去年起他住在上海。', pinyin: 'Cóng qùnián qǐ tā zhù zài Shànghǎi.', de: 'Seit letztem Jahr wohnt er in Shanghai.' }
    ]
  },
  {
    pattern: 'Verb + 过来/过去',
    pinyin: 'Verb + guòlái/guòqù',
    meaning: 'her-/hin- (Richtungskomplement zum/weg vom Sprecher)',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '你过来一下。', pinyin: 'Nǐ guòlái yíxià.', de: 'Komm mal her.' },
      { zh: '他走过去了。', pinyin: 'Tā zǒu guòqù le.', de: 'Er ist hinübergegangen.' }
    ]
  },
  {
    pattern: 'Verb + 给 + Person',
    pinyin: 'Verb + gěi + Person',
    meaning: 'jemandem etwas (als Resultat) geben',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '我送给你一个礼物。', pinyin: 'Wǒ sòng gěi nǐ yí ge lǐwù.', de: 'Ich schenke dir ein Geschenk.' },
      { zh: '请你把书还给我。', pinyin: 'Qǐng nǐ bǎ shū huán gěi wǒ.', de: 'Bitte gib mir das Buch zurück.' }
    ]
  },
  {
    pattern: '向 + Richtung/Person',
    pinyin: 'xiàng + Richtung/Person',
    meaning: 'in Richtung / zu (Richtungsangabe)',
    level: 'HSK2',
    category: 'Präpositionen',
    examples: [
      { zh: '请向左走。', pinyin: 'Qǐng xiàng zuǒ zǒu.', de: 'Bitte gehen Sie nach links.' },
      { zh: '他向老师问好。', pinyin: 'Tā xiàng lǎoshī wèn hǎo.', de: 'Er grüßte den Lehrer.' }
    ]
  },
  {
    pattern: '一直',
    pinyin: 'yìzhí',
    meaning: 'immer / die ganze Zeit / geradeaus',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '我一直在等你。', pinyin: 'Wǒ yìzhí zài děng nǐ.', de: 'Ich habe die ganze Zeit auf dich gewartet.' },
      { zh: '一直往前走。', pinyin: 'Yìzhí wǎng qián zǒu.', de: 'Gehen Sie immer geradeaus.' }
    ]
  },
  {
    pattern: '需要 + Verb/Nomen',
    pinyin: 'xūyào + Verb/Nomen',
    meaning: 'brauchen / benötigen',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '你需要休息。', pinyin: 'Nǐ xūyào xiūxi.', de: 'Du musst dich ausruhen.' },
      { zh: '我需要一本词典。', pinyin: 'Wǒ xūyào yì běn cídiǎn.', de: 'Ich brauche ein Wörterbuch.' }
    ]
  },
  {
    pattern: '不但…还…',
    pinyin: 'búdàn…hái…',
    meaning: 'nicht nur… sondern auch noch…',
    level: 'HSK2',
    category: 'Konjunktionen',
    examples: [
      { zh: '他不但会唱歌，还会跳舞。', pinyin: 'Tā búdàn huì chànggē, hái huì tiàowǔ.', de: 'Er kann nicht nur singen, sondern auch tanzen.' },
      { zh: '她不但漂亮，还很聪明。', pinyin: 'Tā búdàn piàoliang, hái hěn cōngming.', de: 'Sie ist nicht nur hübsch, sondern auch klug.' }
    ]
  },
  {
    pattern: '动词重叠 (Verb-Verdopplung)',
    pinyin: 'dòngcí chóngdié',
    meaning: 'Verb-Verdopplung: „mal kurz" / „ein bisschen"',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { zh: '你看看这个。', pinyin: 'Nǐ kànkan zhège.', de: 'Schau dir das mal an.' },
      { zh: '我想想。', pinyin: 'Wǒ xiǎngxiang.', de: 'Lass mich mal überlegen.' }
    ]
  },
  {
    pattern: '一下',
    pinyin: 'yíxià',
    meaning: 'kurz mal / ein bisschen (Abschwächung)',
    level: 'HSK2',
    category: 'Partikel',
    examples: [
      { zh: '请等一下。', pinyin: 'Qǐng děng yíxià.', de: 'Bitte warten Sie einen Moment.' },
      { zh: '我想试一下。', pinyin: 'Wǒ xiǎng shì yíxià.', de: 'Ich möchte es mal versuchen.' }
    ]
  },
  {
    pattern: '常常/经常',
    pinyin: 'chángcháng/jīngcháng',
    meaning: 'oft / häufig',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '我常常去图书馆。', pinyin: 'Wǒ chángcháng qù túshūguǎn.', de: 'Ich gehe oft in die Bibliothek.' },
      { zh: '他经常迟到。', pinyin: 'Tā jīngcháng chídào.', de: 'Er kommt häufig zu spät.' }
    ]
  },
  {
    pattern: '不要 + Verb',
    pinyin: 'búyào + Verb',
    meaning: 'soll nicht / bitte nicht (Aufforderung)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { zh: '不要迟到。', pinyin: 'Búyào chídào.', de: 'Komm nicht zu spät.' },
      { zh: '上课的时候不要玩手机。', pinyin: 'Shàngkè de shíhou búyào wán shǒujī.', de: 'Spiel nicht mit dem Handy im Unterricht.' }
    ]
  },

  // ============================================================
  //  HSK 3 – Fortgeschrittene Muster (20)
  // ============================================================

  {
    pattern: '为了 + Ziel',
    pinyin: 'wèile + Ziel',
    meaning: 'um zu / zum Zweck von (Zielangabe)',
    level: 'HSK3',
    category: 'Präpositionen',
    examples: [
      { zh: '为了学好中文，他去了中国。', pinyin: 'Wèile xué hǎo zhōngwén, tā qù le Zhōngguó.', de: 'Um gut Chinesisch zu lernen, ging er nach China.' },
      { zh: '为了健康，你应该少喝酒。', pinyin: 'Wèile jiànkāng, nǐ yīnggāi shǎo hē jiǔ.', de: 'Um der Gesundheit willen solltest du weniger Alkohol trinken.' }
    ]
  },
  {
    pattern: '好像…似的',
    pinyin: 'hǎoxiàng…shìde',
    meaning: 'es scheint als ob / als wäre',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { zh: '他好像很累似的。', pinyin: 'Tā hǎoxiàng hěn lèi shìde.', de: 'Er sieht aus, als wäre er sehr müde.' },
      { zh: '天好像要下雨似的。', pinyin: 'Tiān hǎoxiàng yào xiàyǔ shìde.', de: 'Es sieht so aus, als würde es regnen.' }
    ]
  },
  {
    pattern: '不管…都…',
    pinyin: 'bùguǎn…dōu…',
    meaning: 'egal ob / ganz gleich… immer…',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { zh: '不管多忙，我都要锻炼。', pinyin: 'Bùguǎn duō máng, wǒ dōu yào duànliàn.', de: 'Egal wie beschäftigt ich bin, ich trainiere immer.' },
      { zh: '不管你去不去，我都去。', pinyin: 'Bùguǎn nǐ qù bu qù, wǒ dōu qù.', de: 'Egal ob du gehst oder nicht, ich gehe.' }
    ]
  },
  {
    pattern: '既…又…',
    pinyin: 'jì…yòu…',
    meaning: 'sowohl… als auch… (zwei Eigenschaften)',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { zh: '这个菜既好吃又便宜。', pinyin: 'Zhège cài jì hǎochī yòu piányi.', de: 'Dieses Gericht ist sowohl lecker als auch günstig.' },
      { zh: '她既聪明又漂亮。', pinyin: 'Tā jì cōngming yòu piàoliang.', de: 'Sie ist sowohl klug als auch hübsch.' }
    ]
  },
  {
    pattern: '宁可…也不…',
    pinyin: 'nìngkě…yě bù…',
    meaning: 'lieber… als… (starke Präferenz)',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { zh: '我宁可走路也不坐出租车。', pinyin: 'Wǒ nìngkě zǒulù yě bù zuò chūzūchē.', de: 'Ich gehe lieber zu Fuß, als ein Taxi zu nehmen.' },
      { zh: '她宁可不吃饭也不迟到。', pinyin: 'Tā nìngkě bù chīfàn yě bù chídào.', de: 'Sie verzichtet lieber aufs Essen, als zu spät zu kommen.' }
    ]
  },
  {
    pattern: '原来',
    pinyin: 'yuánlái',
    meaning: 'ach so / es stellt sich heraus, dass',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '原来你是中国人！', pinyin: 'Yuánlái nǐ shì Zhōngguó rén!', de: 'Ach so, du bist Chinese!' },
      { zh: '原来他已经知道了。', pinyin: 'Yuánlái tā yǐjīng zhīdào le.', de: 'Es stellte sich heraus, dass er es schon wusste.' }
    ]
  },
  {
    pattern: '据说',
    pinyin: 'jùshuō',
    meaning: 'es heißt / man sagt',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '据说明天会下雪。', pinyin: 'Jùshuō míngtiān huì xià xuě.', de: 'Es heißt, morgen wird es schneien.' },
      { zh: '据说这家餐厅很有名。', pinyin: 'Jùshuō zhè jiā cāntīng hěn yǒumíng.', de: 'Man sagt, dieses Restaurant sei sehr berühmt.' }
    ]
  },
  {
    pattern: '可能',
    pinyin: 'kěnéng',
    meaning: 'möglicherweise / vielleicht / könnte sein',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他可能不来了。', pinyin: 'Tā kěnéng bù lái le.', de: 'Er kommt möglicherweise nicht mehr.' },
      { zh: '明天可能会下雨。', pinyin: 'Míngtiān kěnéng huì xià yǔ.', de: 'Morgen könnte es regnen.' }
    ]
  },
  {
    pattern: '并 + Verneinung',
    pinyin: 'bìng + Verneinung',
    meaning: 'überhaupt nicht / keineswegs (Verstärkung)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '我并不累。', pinyin: 'Wǒ bìng bù lèi.', de: 'Ich bin überhaupt nicht müde.' },
      { zh: '事情并没有那么简单。', pinyin: 'Shìqing bìng méiyǒu nàme jiǎndān.', de: 'Die Sache ist keineswegs so einfach.' }
    ]
  },
  {
    pattern: '居然',
    pinyin: 'jūrán',
    meaning: 'überraschenderweise / tatsächlich (unerwartet)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他居然会说中文！', pinyin: 'Tā jūrán huì shuō zhōngwén!', de: 'Er kann tatsächlich Chinesisch sprechen!' },
      { zh: '你居然不知道？', pinyin: 'Nǐ jūrán bù zhīdào?', de: 'Du weißt das wirklich nicht?' }
    ]
  },
  {
    pattern: '好不容易',
    pinyin: 'hǎo bù róngyì',
    meaning: 'mit großer Mühe / endlich nach langer Anstrengung',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '我好不容易才找到这个地方。', pinyin: 'Wǒ hǎo bù róngyì cái zhǎodào zhège dìfang.', de: 'Ich habe diesen Ort nur mit großer Mühe gefunden.' },
      { zh: '好不容易才买到票。', pinyin: 'Hǎo bù róngyì cái mǎi dào piào.', de: 'Erst nach großer Mühe konnte ich Tickets kaufen.' }
    ]
  },
  {
    pattern: '却',
    pinyin: 'què',
    meaning: 'jedoch / aber (unerwarteter Kontrast)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他说了很多，却什么都没做。', pinyin: 'Tā shuō le hěn duō, què shénme dōu méi zuò.', de: 'Er hat viel geredet, aber nichts getan.' },
      { zh: '我想帮他，他却不愿意。', pinyin: 'Wǒ xiǎng bāng tā, tā què bú yuànyì.', de: 'Ich wollte ihm helfen, aber er wollte nicht.' }
    ]
  },
  {
    pattern: '总是',
    pinyin: 'zǒngshì',
    meaning: 'immer / ständig (Gewohnheit)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '他总是迟到。', pinyin: 'Tā zǒngshì chídào.', de: 'Er kommt ständig zu spät.' },
      { zh: '她总是很认真。', pinyin: 'Tā zǒngshì hěn rènzhēn.', de: 'Sie ist immer sehr gewissenhaft.' }
    ]
  },
  {
    pattern: '不得不 + Verb',
    pinyin: 'bùdébù + Verb',
    meaning: 'nicht umhinkönnen / gezwungen sein',
    level: 'HSK3',
    category: 'Verben',
    examples: [
      { zh: '我不得不承认他是对的。', pinyin: 'Wǒ bùdébù chéngrèn tā shì duì de.', de: 'Ich muss zugeben, dass er recht hat.' },
      { zh: '因为下雨，我们不得不取消了。', pinyin: 'Yīnwèi xià yǔ, wǒmen bùdébù qǔxiāo le.', de: 'Wegen des Regens mussten wir absagen.' }
    ]
  },
  {
    pattern: '只好 + Verb',
    pinyin: 'zhǐhǎo + Verb',
    meaning: 'bleibt nichts anderes übrig als',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { zh: '没有出租车，我只好走路去。', pinyin: 'Méi yǒu chūzūchē, wǒ zhǐhǎo zǒulù qù.', de: 'Es gab kein Taxi, also musste ich zu Fuß gehen.' },
      { zh: '他不在，我只好明天再来。', pinyin: 'Tā bú zài, wǒ zhǐhǎo míngtiān zài lái.', de: 'Er war nicht da, also muss ich morgen wiederkommen.' }
    ]
  },
  {
    pattern: '根据',
    pinyin: 'gēnjù',
    meaning: 'aufgrund von / basierend auf / laut',
    level: 'HSK3',
    category: 'Präpositionen',
    examples: [
      { zh: '根据天气预报，明天会下雪。', pinyin: 'Gēnjù tiānqì yùbào, míngtiān huì xià xuě.', de: 'Laut Wetterbericht wird es morgen schneien.' },
      { zh: '根据我的经验，这不难。', pinyin: 'Gēnjù wǒ de jīngyàn, zhè bù nán.', de: 'Basierend auf meiner Erfahrung ist das nicht schwer.' }
    ]
  },
  {
    pattern: '另外',
    pinyin: 'lìngwài',
    meaning: 'außerdem / darüber hinaus / zusätzlich',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { zh: '我要一杯咖啡，另外还要一块蛋糕。', pinyin: 'Wǒ yào yì bēi kāfēi, lìngwài hái yào yí kuài dàngāo.', de: 'Ich möchte einen Kaffee, außerdem noch ein Stück Kuchen.' },
      { zh: '另外，我还有一个问题。', pinyin: 'Lìngwài, wǒ hái yǒu yí ge wèntí.', de: 'Außerdem habe ich noch eine Frage.' }
    ]
  },
  {
    pattern: '再…也…',
    pinyin: 'zài…yě…',
    meaning: 'egal wie sehr… auch… (Konzession)',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { zh: '再忙也要吃饭。', pinyin: 'Zài máng yě yào chīfàn.', de: 'Egal wie beschäftigt man ist, man muss essen.' },
      { zh: '再难也不要放弃。', pinyin: 'Zài nán yě búyào fàngqì.', de: 'Egal wie schwer es ist, gib nicht auf.' }
    ]
  },
  {
    pattern: '看起来',
    pinyin: 'kàn qǐlái',
    meaning: 'es sieht so aus / dem Anschein nach',
    level: 'HSK3',
    category: 'Verben',
    examples: [
      { zh: '这个看起来很好吃。', pinyin: 'Zhège kàn qǐlái hěn hǎochī.', de: 'Das sieht sehr lecker aus.' },
      { zh: '他看起来很年轻。', pinyin: 'Tā kàn qǐlái hěn niánqīng.', de: 'Er sieht sehr jung aus.' }
    ]
  },
  {
    pattern: '难道…吗',
    pinyin: 'nándào…ma',
    meaning: 'etwa / soll das heißen (rhetorische Frage)',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { zh: '难道你不知道吗？', pinyin: 'Nándào nǐ bù zhīdào ma?', de: 'Weißt du das etwa nicht?' },
      { zh: '难道这是真的吗？', pinyin: 'Nándào zhè shì zhēn de ma?', de: 'Soll das etwa wahr sein?' }
    ]
  }
]);
