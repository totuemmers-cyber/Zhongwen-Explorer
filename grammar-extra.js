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
      { chinese: '这个人是我的老师。', pinyin: 'Zhège rén shì wǒ de lǎoshī.', german: 'Diese Person ist mein Lehrer.' },
      { chinese: '那本书很好看。', pinyin: 'Nà běn shū hěn hǎokàn.', german: 'Jenes Buch ist sehr schön.' }
    ]
  },
  {
    pattern: '叫 + Name',
    pinyin: 'jiào + Name',
    meaning: 'heißen / sich vorstellen',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { chinese: '我叫王明。', pinyin: 'Wǒ jiào Wáng Míng.', german: 'Ich heiße Wang Ming.' },
      { chinese: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', german: 'Wie heißt du?' }
    ]
  },
  {
    pattern: '好吗',
    pinyin: 'hǎo ma',
    meaning: 'In Ordnung? / Ist das okay? (Bestätigungsfrage)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { chinese: '我们去吃饭，好吗？', pinyin: 'Wǒmen qù chīfàn, hǎo ma?', german: 'Lass uns essen gehen, okay?' },
      { chinese: '明天见，好吗？', pinyin: 'Míngtiān jiàn, hǎo ma?', german: 'Bis morgen, in Ordnung?' }
    ]
  },
  {
    pattern: '多少钱',
    pinyin: 'duōshao qián',
    meaning: 'Wie viel kostet es?',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { chinese: '这个多少钱？', pinyin: 'Zhège duōshao qián?', german: 'Wie viel kostet das?' },
      { chinese: '那件衣服多少钱？', pinyin: 'Nà jiàn yīfu duōshao qián?', german: 'Wie viel kostet jenes Kleidungsstück?' }
    ]
  },
  {
    pattern: '了 (Zustandsänderung)',
    pinyin: 'le (Zustandsänderung)',
    meaning: 'Satzfinales 了 zeigt neue Situation oder Veränderung an',
    level: 'HSK1',
    category: 'Partikel',
    examples: [
      { chinese: '天冷了。', pinyin: 'Tiān lěng le.', german: 'Es ist kalt geworden.' },
      { chinese: '我饿了。', pinyin: 'Wǒ è le.', german: 'Ich bin hungrig geworden.' }
    ]
  },
  {
    pattern: '岁',
    pinyin: 'suì',
    meaning: 'Jahre alt (Altersangabe)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { chinese: '我二十五岁。', pinyin: 'Wǒ èrshíwǔ suì.', german: 'Ich bin 25 Jahre alt.' },
      { chinese: '她的女儿三岁了。', pinyin: 'Tā de nǚ\'ér sān suì le.', german: 'Ihre Tochter ist drei Jahre alt geworden.' }
    ]
  },
  {
    pattern: '什么时候',
    pinyin: 'shénme shíhou',
    meaning: 'wann (Frage nach dem Zeitpunkt)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { chinese: '你什么时候来？', pinyin: 'Nǐ shénme shíhou lái?', german: 'Wann kommst du?' },
      { chinese: '考试什么时候开始？', pinyin: 'Kǎoshì shénme shíhou kāishǐ?', german: 'Wann fängt die Prüfung an?' }
    ]
  },
  {
    pattern: '块/元',
    pinyin: 'kuài/yuán',
    meaning: 'Yuan (Geldeinheit, umgangssprachlich/formell)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { chinese: '这本书十五块钱。', pinyin: 'Zhè běn shū shíwǔ kuài qián.', german: 'Dieses Buch kostet 15 Yuan.' },
      { chinese: '一共三十二元。', pinyin: 'Yígòng sānshí\'èr yuán.', german: 'Insgesamt 32 Yuan.' }
    ]
  },
  {
    pattern: '对不起 / 没关系',
    pinyin: 'duìbuqǐ / méi guānxi',
    meaning: 'Entschuldigung / Macht nichts',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { chinese: '对不起，我来晚了。', pinyin: 'Duìbuqǐ, wǒ lái wǎn le.', german: 'Entschuldigung, ich bin zu spät gekommen.' },
      { chinese: '没关系，不要紧。', pinyin: 'Méi guānxi, búyàojǐn.', german: 'Macht nichts, ist nicht schlimm.' }
    ]
  },
  {
    pattern: '让 + Person + Verb',
    pinyin: 'ràng + Person + Verb',
    meaning: 'jemanden etwas tun lassen',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { chinese: '妈妈让我做作业。', pinyin: 'Māma ràng wǒ zuò zuòyè.', german: 'Mama lässt mich Hausaufgaben machen.' },
      { chinese: '请让我看看。', pinyin: 'Qǐng ràng wǒ kànkan.', german: 'Bitte lass mich mal schauen.' }
    ]
  },
  {
    pattern: '从 + Ort/Zeit',
    pinyin: 'cóng + Ort/Zeit',
    meaning: 'von / ab (Ausgangsort oder -zeit)',
    level: 'HSK1',
    category: 'Präpositionen',
    examples: [
      { chinese: '我从北京来。', pinyin: 'Wǒ cóng Běijīng lái.', german: 'Ich komme aus Peking.' },
      { chinese: '从明天开始学习。', pinyin: 'Cóng míngtiān kāishǐ xuéxí.', german: 'Ab morgen fange ich an zu lernen.' }
    ]
  },
  {
    pattern: '在 + Ort + Verb',
    pinyin: 'zài + Ort + Verb',
    meaning: 'an einem Ort eine Handlung ausführen',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { chinese: '我在家吃饭。', pinyin: 'Wǒ zài jiā chīfàn.', german: 'Ich esse zu Hause.' },
      { chinese: '他在学校学习。', pinyin: 'Tā zài xuéxiào xuéxí.', german: 'Er lernt in der Schule.' }
    ]
  },
  {
    pattern: '到 + Ort/Zeit',
    pinyin: 'dào + Ort/Zeit',
    meaning: 'ankommen bei / bis zu',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { chinese: '我到了北京。', pinyin: 'Wǒ dào le Běijīng.', german: 'Ich bin in Peking angekommen.' },
      { chinese: '从早上到晚上。', pinyin: 'Cóng zǎoshang dào wǎnshang.', german: 'Von morgens bis abends.' }
    ]
  },
  {
    pattern: '先 + Verb₁ + 再 + Verb₂',
    pinyin: 'xiān + Verb₁ + zài + Verb₂',
    meaning: 'zuerst… dann… (Reihenfolge, informell)',
    level: 'HSK1',
    category: 'Zeitausdrücke',
    examples: [
      { chinese: '先吃饭再看电视。', pinyin: 'Xiān chīfàn zài kàn diànshì.', german: 'Zuerst essen, dann fernsehen.' },
      { chinese: '你先休息，再做作业。', pinyin: 'Nǐ xiān xiūxi, zài zuò zuòyè.', german: 'Ruh dich zuerst aus, dann mach Hausaufgaben.' }
    ]
  },
  {
    pattern: '用 + Nomen + Verb',
    pinyin: 'yòng + Nomen + Verb',
    meaning: 'mit etwas etwas tun (Instrument)',
    level: 'HSK1',
    category: 'Präpositionen',
    examples: [
      { chinese: '我用筷子吃饭。', pinyin: 'Wǒ yòng kuàizi chīfàn.', german: 'Ich esse mit Stäbchen.' },
      { chinese: '她用中文写信。', pinyin: 'Tā yòng zhōngwén xiě xìn.', german: 'Sie schreibt den Brief auf Chinesisch.' }
    ]
  },
  {
    pattern: '又 + Adj₁ + 又 + Adj₂ (Grundform)',
    pinyin: 'yòu + Adj₁ + yòu + Adj₂',
    meaning: 'sowohl… als auch… (zwei Eigenschaften gleichzeitig)',
    level: 'HSK1',
    category: 'Adverbien',
    examples: [
      { chinese: '这个又大又便宜。', pinyin: 'Zhège yòu dà yòu piányi.', german: 'Das ist sowohl groß als auch günstig.' },
      { chinese: '房间又干净又明亮。', pinyin: 'Fángjiān yòu gānjìng yòu míngliàng.', german: 'Das Zimmer ist sowohl sauber als auch hell.' }
    ]
  },
  {
    pattern: '多 + Adjektiv',
    pinyin: 'duō + Adjektiv',
    meaning: 'wie + Adjektiv (Frage nach Ausmaß)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { chinese: '你家离这儿多远？', pinyin: 'Nǐ jiā lí zhèr duō yuǎn?', german: 'Wie weit ist dein Zuhause von hier?' },
      { chinese: '这条河多长？', pinyin: 'Zhè tiáo hé duō cháng?', german: 'Wie lang ist dieser Fluss?' }
    ]
  },
  {
    pattern: '得 (děi) müssen',
    pinyin: 'děi + Verb',
    meaning: 'müssen (umgangssprachliche Notwendigkeit)',
    level: 'HSK1',
    category: 'Verben',
    examples: [
      { chinese: '我得走了。', pinyin: 'Wǒ děi zǒu le.', german: 'Ich muss gehen.' },
      { chinese: '你得早点儿起床。', pinyin: 'Nǐ děi zǎo diǎnr qǐchuáng.', german: 'Du musst früher aufstehen.' }
    ]
  },
  {
    pattern: '不是',
    pinyin: 'bú shì',
    meaning: 'nicht sein (Verneinung von 是)',
    level: 'HSK1',
    category: 'Satzstruktur',
    examples: [
      { chinese: '我不是老师。', pinyin: 'Wǒ bú shì lǎoshī.', german: 'Ich bin kein Lehrer.' },
      { chinese: '这不是我的书。', pinyin: 'Zhè bú shì wǒ de shū.', german: 'Das ist nicht mein Buch.' }
    ]
  },
  {
    pattern: '有没有',
    pinyin: 'yǒu méi yǒu',
    meaning: 'hast du / gibt es (Ja-Nein-Frage mit 有)',
    level: 'HSK1',
    category: 'Fragewörter',
    examples: [
      { chinese: '你有没有时间？', pinyin: 'Nǐ yǒu méi yǒu shíjiān?', german: 'Hast du Zeit?' },
      { chinese: '这里有没有厕所？', pinyin: 'Zhèlǐ yǒu méi yǒu cèsuǒ?', german: 'Gibt es hier eine Toilette?' }
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
      { chinese: '你必须按时完成。', pinyin: 'Nǐ bìxū ànshí wánchéng.', german: 'Du musst es rechtzeitig fertigstellen.' },
      { chinese: '我们必须遵守规则。', pinyin: 'Wǒmen bìxū zūnshǒu guīzé.', german: 'Wir müssen die Regeln befolgen.' }
    ]
  },
  {
    pattern: '不用 + Verb',
    pinyin: 'búyòng + Verb',
    meaning: 'braucht nicht / nicht nötig',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { chinese: '不用谢。', pinyin: 'Búyòng xiè.', german: 'Keine Ursache.' },
      { chinese: '你不用来了。', pinyin: 'Nǐ búyòng lái le.', german: 'Du brauchst nicht zu kommen.' }
    ]
  },
  {
    pattern: '非常 + Adjektiv',
    pinyin: 'fēicháng + Adjektiv',
    meaning: 'außerordentlich / sehr (stärker als 很)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { chinese: '非常感谢！', pinyin: 'Fēicháng gǎnxiè!', german: 'Vielen herzlichen Dank!' },
      { chinese: '这个地方非常漂亮。', pinyin: 'Zhège dìfang fēicháng piàoliang.', german: 'Dieser Ort ist außerordentlich schön.' }
    ]
  },
  {
    pattern: '特别 + Adjektiv',
    pinyin: 'tèbié + Adjektiv',
    meaning: 'besonders / außergewöhnlich',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { chinese: '今天特别冷。', pinyin: 'Jīntiān tèbié lěng.', german: 'Heute ist es besonders kalt.' },
      { chinese: '我特别喜欢这首歌。', pinyin: 'Wǒ tèbié xǐhuan zhè shǒu gē.', german: 'Ich mag dieses Lied besonders gern.' }
    ]
  },
  {
    pattern: '不太 + Adjektiv',
    pinyin: 'bú tài + Adjektiv',
    meaning: 'nicht besonders / nicht sehr (abgemilderte Verneinung)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { chinese: '我不太喜欢。', pinyin: 'Wǒ bú tài xǐhuan.', german: 'Ich mag es nicht besonders.' },
      { chinese: '这个不太好。', pinyin: 'Zhège bú tài hǎo.', german: 'Das ist nicht besonders gut.' }
    ]
  },
  {
    pattern: '有一点儿 + Adjektiv',
    pinyin: 'yǒu yìdiǎnr + Adjektiv',
    meaning: 'ein bisschen (leicht negativ empfunden)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { chinese: '我有点儿累。', pinyin: 'Wǒ yǒudiǎnr lèi.', german: 'Ich bin ein bisschen müde.' },
      { chinese: '这个有点儿贵。', pinyin: 'Zhège yǒudiǎnr guì.', german: 'Das ist ein bisschen teuer.' }
    ]
  },
  {
    pattern: '对 + Nomen + 感兴趣',
    pinyin: 'duì + Nomen + gǎn xìngqù',
    meaning: 'sich für etwas interessieren',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { chinese: '我对中国历史很感兴趣。', pinyin: 'Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.', german: 'Ich interessiere mich sehr für chinesische Geschichte.' },
      { chinese: '你对什么感兴趣？', pinyin: 'Nǐ duì shénme gǎn xìngqù?', german: 'Wofür interessierst du dich?' }
    ]
  },
  {
    pattern: '以前',
    pinyin: 'yǐqián',
    meaning: 'früher / bevor / vor',
    level: 'HSK2',
    category: 'Zeitausdrücke',
    examples: [
      { chinese: '吃饭以前要洗手。', pinyin: 'Chīfàn yǐqián yào xǐ shǒu.', german: 'Vor dem Essen muss man sich die Hände waschen.' },
      { chinese: '以前我住在德国。', pinyin: 'Yǐqián wǒ zhù zài Déguó.', german: 'Früher habe ich in Deutschland gewohnt.' }
    ]
  },
  {
    pattern: '以后',
    pinyin: 'yǐhòu',
    meaning: 'danach / in Zukunft / nachdem',
    level: 'HSK2',
    category: 'Zeitausdrücke',
    examples: [
      { chinese: '吃饭以后我们去散步。', pinyin: 'Chīfàn yǐhòu wǒmen qù sànbù.', german: 'Nach dem Essen gehen wir spazieren.' },
      { chinese: '以后我要去中国。', pinyin: 'Yǐhòu wǒ yào qù Zhōngguó.', german: 'Später möchte ich nach China fahren.' }
    ]
  },
  {
    pattern: '从…起/开始',
    pinyin: 'cóng…qǐ/kāishǐ',
    meaning: 'ab / seit (Anfangszeitpunkt)',
    level: 'HSK2',
    category: 'Zeitausdrücke',
    examples: [
      { chinese: '从明天开始，我每天跑步。', pinyin: 'Cóng míngtiān kāishǐ, wǒ měi tiān pǎobù.', german: 'Ab morgen jogge ich jeden Tag.' },
      { chinese: '从去年起他住在上海。', pinyin: 'Cóng qùnián qǐ tā zhù zài Shànghǎi.', german: 'Seit letztem Jahr wohnt er in Shanghai.' }
    ]
  },
  {
    pattern: 'Verb + 过来/过去',
    pinyin: 'Verb + guòlái/guòqù',
    meaning: 'her-/hin- (Richtungskomplement zum/weg vom Sprecher)',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { chinese: '你过来一下。', pinyin: 'Nǐ guòlái yíxià.', german: 'Komm mal her.' },
      { chinese: '他走过去了。', pinyin: 'Tā zǒu guòqù le.', german: 'Er ist hinübergegangen.' }
    ]
  },
  {
    pattern: 'Verb + 给 + Person',
    pinyin: 'Verb + gěi + Person',
    meaning: 'jemandem etwas (als Resultat) geben',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { chinese: '我送给你一个礼物。', pinyin: 'Wǒ sòng gěi nǐ yí ge lǐwù.', german: 'Ich schenke dir ein Geschenk.' },
      { chinese: '请你把书还给我。', pinyin: 'Qǐng nǐ bǎ shū huán gěi wǒ.', german: 'Bitte gib mir das Buch zurück.' }
    ]
  },
  {
    pattern: '向 + Richtung/Person',
    pinyin: 'xiàng + Richtung/Person',
    meaning: 'in Richtung / zu (Richtungsangabe)',
    level: 'HSK2',
    category: 'Präpositionen',
    examples: [
      { chinese: '请向左走。', pinyin: 'Qǐng xiàng zuǒ zǒu.', german: 'Bitte gehen Sie nach links.' },
      { chinese: '他向老师问好。', pinyin: 'Tā xiàng lǎoshī wèn hǎo.', german: 'Er grüßte den Lehrer.' }
    ]
  },
  {
    pattern: '一直',
    pinyin: 'yìzhí',
    meaning: 'immer / die ganze Zeit / geradeaus',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { chinese: '我一直在等你。', pinyin: 'Wǒ yìzhí zài děng nǐ.', german: 'Ich habe die ganze Zeit auf dich gewartet.' },
      { chinese: '一直往前走。', pinyin: 'Yìzhí wǎng qián zǒu.', german: 'Gehen Sie immer geradeaus.' }
    ]
  },
  {
    pattern: '需要 + Verb/Nomen',
    pinyin: 'xūyào + Verb/Nomen',
    meaning: 'brauchen / benötigen',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { chinese: '你需要休息。', pinyin: 'Nǐ xūyào xiūxi.', german: 'Du musst dich ausruhen.' },
      { chinese: '我需要一本词典。', pinyin: 'Wǒ xūyào yì běn cídiǎn.', german: 'Ich brauche ein Wörterbuch.' }
    ]
  },
  {
    pattern: '不但…还…',
    pinyin: 'búdàn…hái…',
    meaning: 'nicht nur… sondern auch noch…',
    level: 'HSK2',
    category: 'Konjunktionen',
    examples: [
      { chinese: '他不但会唱歌，还会跳舞。', pinyin: 'Tā búdàn huì chànggē, hái huì tiàowǔ.', german: 'Er kann nicht nur singen, sondern auch tanzen.' },
      { chinese: '她不但漂亮，还很聪明。', pinyin: 'Tā búdàn piàoliang, hái hěn cōngming.', german: 'Sie ist nicht nur hübsch, sondern auch klug.' }
    ]
  },
  {
    pattern: '动词重叠 (Verb-Verdopplung)',
    pinyin: 'dòngcí chóngdié',
    meaning: 'Verb-Verdopplung: „mal kurz" / „ein bisschen"',
    level: 'HSK2',
    category: 'Verben',
    examples: [
      { chinese: '你看看这个。', pinyin: 'Nǐ kànkan zhège.', german: 'Schau dir das mal an.' },
      { chinese: '我想想。', pinyin: 'Wǒ xiǎngxiang.', german: 'Lass mich mal überlegen.' }
    ]
  },
  {
    pattern: '一下',
    pinyin: 'yíxià',
    meaning: 'kurz mal / ein bisschen (Abschwächung)',
    level: 'HSK2',
    category: 'Partikel',
    examples: [
      { chinese: '请等一下。', pinyin: 'Qǐng děng yíxià.', german: 'Bitte warten Sie einen Moment.' },
      { chinese: '我想试一下。', pinyin: 'Wǒ xiǎng shì yíxià.', german: 'Ich möchte es mal versuchen.' }
    ]
  },
  {
    pattern: '常常/经常',
    pinyin: 'chángcháng/jīngcháng',
    meaning: 'oft / häufig',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { chinese: '我常常去图书馆。', pinyin: 'Wǒ chángcháng qù túshūguǎn.', german: 'Ich gehe oft in die Bibliothek.' },
      { chinese: '他经常迟到。', pinyin: 'Tā jīngcháng chídào.', german: 'Er kommt häufig zu spät.' }
    ]
  },
  {
    pattern: '不要 + Verb',
    pinyin: 'búyào + Verb',
    meaning: 'soll nicht / bitte nicht (Aufforderung)',
    level: 'HSK2',
    category: 'Adverbien',
    examples: [
      { chinese: '不要迟到。', pinyin: 'Búyào chídào.', german: 'Komm nicht zu spät.' },
      { chinese: '上课的时候不要玩手机。', pinyin: 'Shàngkè de shíhou búyào wán shǒujī.', german: 'Spiel nicht mit dem Handy im Unterricht.' }
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
      { chinese: '为了学好中文，他去了中国。', pinyin: 'Wèile xué hǎo zhōngwén, tā qù le Zhōngguó.', german: 'Um gut Chinesisch zu lernen, ging er nach China.' },
      { chinese: '为了健康，你应该少喝酒。', pinyin: 'Wèile jiànkāng, nǐ yīnggāi shǎo hē jiǔ.', german: 'Um der Gesundheit willen solltest du weniger Alkohol trinken.' }
    ]
  },
  {
    pattern: '好像…似的',
    pinyin: 'hǎoxiàng…shìde',
    meaning: 'es scheint als ob / als wäre',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { chinese: '他好像很累似的。', pinyin: 'Tā hǎoxiàng hěn lèi shìde.', german: 'Er sieht aus, als wäre er sehr müde.' },
      { chinese: '天好像要下雨似的。', pinyin: 'Tiān hǎoxiàng yào xiàyǔ shìde.', german: 'Es sieht so aus, als würde es regnen.' }
    ]
  },
  {
    pattern: '不管…都…',
    pinyin: 'bùguǎn…dōu…',
    meaning: 'egal ob / ganz gleich… immer…',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { chinese: '不管多忙，我都要锻炼。', pinyin: 'Bùguǎn duō máng, wǒ dōu yào duànliàn.', german: 'Egal wie beschäftigt ich bin, ich trainiere immer.' },
      { chinese: '不管你去不去，我都去。', pinyin: 'Bùguǎn nǐ qù bu qù, wǒ dōu qù.', german: 'Egal ob du gehst oder nicht, ich gehe.' }
    ]
  },
  {
    pattern: '既…又…',
    pinyin: 'jì…yòu…',
    meaning: 'sowohl… als auch… (zwei Eigenschaften)',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { chinese: '这个菜既好吃又便宜。', pinyin: 'Zhège cài jì hǎochī yòu piányi.', german: 'Dieses Gericht ist sowohl lecker als auch günstig.' },
      { chinese: '她既聪明又漂亮。', pinyin: 'Tā jì cōngming yòu piàoliang.', german: 'Sie ist sowohl klug als auch hübsch.' }
    ]
  },
  {
    pattern: '宁可…也不…',
    pinyin: 'nìngkě…yě bù…',
    meaning: 'lieber… als… (starke Präferenz)',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { chinese: '我宁可走路也不坐出租车。', pinyin: 'Wǒ nìngkě zǒulù yě bù zuò chūzūchē.', german: 'Ich gehe lieber zu Fuß, als ein Taxi zu nehmen.' },
      { chinese: '她宁可不吃饭也不迟到。', pinyin: 'Tā nìngkě bù chīfàn yě bù chídào.', german: 'Sie verzichtet lieber aufs Essen, als zu spät zu kommen.' }
    ]
  },
  {
    pattern: '原来',
    pinyin: 'yuánlái',
    meaning: 'ach so / es stellt sich heraus, dass',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '原来你是中国人！', pinyin: 'Yuánlái nǐ shì Zhōngguó rén!', german: 'Ach so, du bist Chinese!' },
      { chinese: '原来他已经知道了。', pinyin: 'Yuánlái tā yǐjīng zhīdào le.', german: 'Es stellte sich heraus, dass er es schon wusste.' }
    ]
  },
  {
    pattern: '据说',
    pinyin: 'jùshuō',
    meaning: 'es heißt / man sagt',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '据说明天会下雪。', pinyin: 'Jùshuō míngtiān huì xià xuě.', german: 'Es heißt, morgen wird es schneien.' },
      { chinese: '据说这家餐厅很有名。', pinyin: 'Jùshuō zhè jiā cāntīng hěn yǒumíng.', german: 'Man sagt, dieses Restaurant sei sehr berühmt.' }
    ]
  },
  {
    pattern: '可能',
    pinyin: 'kěnéng',
    meaning: 'möglicherweise / vielleicht / könnte sein',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '他可能不来了。', pinyin: 'Tā kěnéng bù lái le.', german: 'Er kommt möglicherweise nicht mehr.' },
      { chinese: '明天可能会下雨。', pinyin: 'Míngtiān kěnéng huì xià yǔ.', german: 'Morgen könnte es regnen.' }
    ]
  },
  {
    pattern: '并 + Verneinung',
    pinyin: 'bìng + Verneinung',
    meaning: 'überhaupt nicht / keineswegs (Verstärkung)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '我并不累。', pinyin: 'Wǒ bìng bù lèi.', german: 'Ich bin überhaupt nicht müde.' },
      { chinese: '事情并没有那么简单。', pinyin: 'Shìqing bìng méiyǒu nàme jiǎndān.', german: 'Die Sache ist keineswegs so einfach.' }
    ]
  },
  {
    pattern: '居然',
    pinyin: 'jūrán',
    meaning: 'überraschenderweise / tatsächlich (unerwartet)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '他居然会说中文！', pinyin: 'Tā jūrán huì shuō zhōngwén!', german: 'Er kann tatsächlich Chinesisch sprechen!' },
      { chinese: '你居然不知道？', pinyin: 'Nǐ jūrán bù zhīdào?', german: 'Du weißt das wirklich nicht?' }
    ]
  },
  {
    pattern: '好不容易',
    pinyin: 'hǎo bù róngyì',
    meaning: 'mit großer Mühe / endlich nach langer Anstrengung',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '我好不容易才找到这个地方。', pinyin: 'Wǒ hǎo bù róngyì cái zhǎodào zhège dìfang.', german: 'Ich habe diesen Ort nur mit großer Mühe gefunden.' },
      { chinese: '好不容易才买到票。', pinyin: 'Hǎo bù róngyì cái mǎi dào piào.', german: 'Erst nach großer Mühe konnte ich Tickets kaufen.' }
    ]
  },
  {
    pattern: '却',
    pinyin: 'què',
    meaning: 'jedoch / aber (unerwarteter Kontrast)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '他说了很多，却什么都没做。', pinyin: 'Tā shuō le hěn duō, què shénme dōu méi zuò.', german: 'Er hat viel geredet, aber nichts getan.' },
      { chinese: '我想帮他，他却不愿意。', pinyin: 'Wǒ xiǎng bāng tā, tā què bú yuànyì.', german: 'Ich wollte ihm helfen, aber er wollte nicht.' }
    ]
  },
  {
    pattern: '总是',
    pinyin: 'zǒngshì',
    meaning: 'immer / ständig (Gewohnheit)',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '他总是迟到。', pinyin: 'Tā zǒngshì chídào.', german: 'Er kommt ständig zu spät.' },
      { chinese: '她总是很认真。', pinyin: 'Tā zǒngshì hěn rènzhēn.', german: 'Sie ist immer sehr gewissenhaft.' }
    ]
  },
  {
    pattern: '不得不 + Verb',
    pinyin: 'bùdébù + Verb',
    meaning: 'nicht umhinkönnen / gezwungen sein',
    level: 'HSK3',
    category: 'Verben',
    examples: [
      { chinese: '我不得不承认他是对的。', pinyin: 'Wǒ bùdébù chéngrèn tā shì duì de.', german: 'Ich muss zugeben, dass er recht hat.' },
      { chinese: '因为下雨，我们不得不取消了。', pinyin: 'Yīnwèi xià yǔ, wǒmen bùdébù qǔxiāo le.', german: 'Wegen des Regens mussten wir absagen.' }
    ]
  },
  {
    pattern: '只好 + Verb',
    pinyin: 'zhǐhǎo + Verb',
    meaning: 'bleibt nichts anderes übrig als',
    level: 'HSK3',
    category: 'Adverbien',
    examples: [
      { chinese: '没有出租车，我只好走路去。', pinyin: 'Méi yǒu chūzūchē, wǒ zhǐhǎo zǒulù qù.', german: 'Es gab kein Taxi, also musste ich zu Fuß gehen.' },
      { chinese: '他不在，我只好明天再来。', pinyin: 'Tā bú zài, wǒ zhǐhǎo míngtiān zài lái.', german: 'Er war nicht da, also muss ich morgen wiederkommen.' }
    ]
  },
  {
    pattern: '根据',
    pinyin: 'gēnjù',
    meaning: 'aufgrund von / basierend auf / laut',
    level: 'HSK3',
    category: 'Präpositionen',
    examples: [
      { chinese: '根据天气预报，明天会下雪。', pinyin: 'Gēnjù tiānqì yùbào, míngtiān huì xià xuě.', german: 'Laut Wetterbericht wird es morgen schneien.' },
      { chinese: '根据我的经验，这不难。', pinyin: 'Gēnjù wǒ de jīngyàn, zhè bù nán.', german: 'Basierend auf meiner Erfahrung ist das nicht schwer.' }
    ]
  },
  {
    pattern: '另外',
    pinyin: 'lìngwài',
    meaning: 'außerdem / darüber hinaus / zusätzlich',
    level: 'HSK3',
    category: 'Konjunktionen',
    examples: [
      { chinese: '我要一杯咖啡，另外还要一块蛋糕。', pinyin: 'Wǒ yào yì bēi kāfēi, lìngwài hái yào yí kuài dàngāo.', german: 'Ich möchte einen Kaffee, außerdem noch ein Stück Kuchen.' },
      { chinese: '另外，我还有一个问题。', pinyin: 'Lìngwài, wǒ hái yǒu yí ge wèntí.', german: 'Außerdem habe ich noch eine Frage.' }
    ]
  },
  {
    pattern: '再…也…',
    pinyin: 'zài…yě…',
    meaning: 'egal wie sehr… auch… (Konzession)',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { chinese: '再忙也要吃饭。', pinyin: 'Zài máng yě yào chīfàn.', german: 'Egal wie beschäftigt man ist, man muss essen.' },
      { chinese: '再难也不要放弃。', pinyin: 'Zài nán yě búyào fàngqì.', german: 'Egal wie schwer es ist, gib nicht auf.' }
    ]
  },
  {
    pattern: '看起来',
    pinyin: 'kàn qǐlái',
    meaning: 'es sieht so aus / dem Anschein nach',
    level: 'HSK3',
    category: 'Verben',
    examples: [
      { chinese: '这个看起来很好吃。', pinyin: 'Zhège kàn qǐlái hěn hǎochī.', german: 'Das sieht sehr lecker aus.' },
      { chinese: '他看起来很年轻。', pinyin: 'Tā kàn qǐlái hěn niánqīng.', german: 'Er sieht sehr jung aus.' }
    ]
  },
  {
    pattern: '难道…吗',
    pinyin: 'nándào…ma',
    meaning: 'etwa / soll das heißen (rhetorische Frage)',
    level: 'HSK3',
    category: 'Satzstruktur',
    examples: [
      { chinese: '难道你不知道吗？', pinyin: 'Nándào nǐ bù zhīdào ma?', german: 'Weißt du das etwa nicht?' },
      { chinese: '难道这是真的吗？', pinyin: 'Nándào zhè shì zhēn de ma?', german: 'Soll das etwa wahr sein?' }
    ]
  }
]);
