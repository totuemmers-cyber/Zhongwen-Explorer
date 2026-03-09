// Zhongwen Explorer – Zählwörter (量词) & Grundzahlen
// UI-Sprache: Deutsch | Zielsprache: Mandarin-Chinesisch
window.MEASURE_WORDS_DATA = {

  // ============================================================
  //  Grundzahlen
  // ============================================================
  basicNumbers: [
    { number: 0, hanzi: '零', pinyin: 'líng', notes: '' },
    { number: 1, hanzi: '一', pinyin: 'yī', notes: 'Ändert Ton je nach Folgesilbe: vor 4. Ton → yí, vor 1./2./3. Ton → yì' },
    { number: 2, hanzi: '二', pinyin: 'èr', notes: 'Vor Zählwörtern wird stattdessen 两 (liǎng) verwendet' },
    { number: 3, hanzi: '三', pinyin: 'sān', notes: '' },
    { number: 4, hanzi: '四', pinyin: 'sì', notes: '' },
    { number: 5, hanzi: '五', pinyin: 'wǔ', notes: '' },
    { number: 6, hanzi: '六', pinyin: 'liù', notes: '' },
    { number: 7, hanzi: '七', pinyin: 'qī', notes: '' },
    { number: 8, hanzi: '八', pinyin: 'bā', notes: 'Glückszahl in China' },
    { number: 9, hanzi: '九', pinyin: 'jiǔ', notes: '' },
    { number: 10, hanzi: '十', pinyin: 'shí', notes: '' },
    { number: 100, hanzi: '百', pinyin: 'bǎi', notes: '一百 (yì bǎi) = einhundert' },
    { number: 1000, hanzi: '千', pinyin: 'qiān', notes: '一千 (yì qiān) = eintausend' },
    { number: 10000, hanzi: '万', pinyin: 'wàn', notes: 'Chinesisch zählt in Zehntausender-Einheiten' }
  ],

  // ============================================================
  //  Zählwörter (量词 liàngcí)
  // ============================================================
  measureWords: [

    // --- Allgemein ---
    {
      "classifier": "个",
      "pinyin": "gè",
      "meaning": "allgemeines Zählwort",
      "category": "Allgemein",
      "usage": "Das häufigste Zählwort, verwendet für Menschen, Objekte und viele abstrakte Begriffe. Im Zweifel kann man 个 verwenden.",
      "questionWord": "几个",
      "table": [
        { "number": 1, "chinese": "一个", "pinyin": "yí gè" },
        { "number": 2, "chinese": "两个", "pinyin": "liǎng gè" },
        { "number": 3, "chinese": "三个", "pinyin": "sān gè" },
        { "number": 4, "chinese": "四个", "pinyin": "sì gè" },
        { "number": 5, "chinese": "五个", "pinyin": "wǔ gè" },
        { "number": 6, "chinese": "六个", "pinyin": "liù gè" },
        { "number": 7, "chinese": "七个", "pinyin": "qī gè" },
        { "number": 8, "chinese": "八个", "pinyin": "bā gè" },
        { "number": 9, "chinese": "九个", "pinyin": "jiǔ gè" },
        { "number": 10, "chinese": "十个", "pinyin": "shí gè" }
      ],
      "specialForms": [
        { "form": "两个", "explanation": "Bei 2 wird 两 statt 二 verwendet" }
      ],
      "examples": [
        { "chinese": "我有三个朋友。", "pinyin": "Wǒ yǒu sān gè péngyou.", "german": "Ich habe drei Freunde." },
        { "chinese": "给我一个苹果。", "pinyin": "Gěi wǒ yí gè píngguǒ.", "german": "Gib mir einen Apfel." }
      ],
      "notes": "个 ist das Default-Zählwort. Im Zweifel kann man 个 verwenden."
    },

    // --- Menschen ---
    {
      "classifier": "位",
      "pinyin": "wèi",
      "meaning": "Person (höflich)",
      "category": "Menschen",
      "usage": "Höfliches Zählwort für Personen, zeigt Respekt.",
      "questionWord": "几位",
      "table": [
        { "number": 1, "chinese": "一位", "pinyin": "yí wèi" },
        { "number": 2, "chinese": "两位", "pinyin": "liǎng wèi" },
        { "number": 3, "chinese": "三位", "pinyin": "sān wèi" },
        { "number": 4, "chinese": "四位", "pinyin": "sì wèi" },
        { "number": 5, "chinese": "五位", "pinyin": "wǔ wèi" },
        { "number": 6, "chinese": "六位", "pinyin": "liù wèi" },
        { "number": 7, "chinese": "七位", "pinyin": "qī wèi" },
        { "number": 8, "chinese": "八位", "pinyin": "bā wèi" },
        { "number": 9, "chinese": "九位", "pinyin": "jiǔ wèi" },
        { "number": 10, "chinese": "十位", "pinyin": "shí wèi" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "请问，几位？", "pinyin": "Qǐngwèn, jǐ wèi?", "german": "Wie viele Personen, bitte? (Restaurant)" },
        { "chinese": "这位是王老师。", "pinyin": "Zhè wèi shì Wáng lǎoshī.", "german": "Das ist Lehrer Wang." }
      ],
      "notes": "Höflicher als 个 für Personen. Wird in Restaurants und formellen Anlässen verwendet."
    },
    {
      "classifier": "口",
      "pinyin": "kǒu",
      "meaning": "Familienmitglied / Mund(voll)",
      "category": "Menschen",
      "usage": "Für Familienmitglieder beim Zählen der Haushaltsgröße.",
      "questionWord": "几口",
      "table": [
        { "number": 1, "chinese": "一口", "pinyin": "yì kǒu" },
        { "number": 2, "chinese": "两口", "pinyin": "liǎng kǒu" },
        { "number": 3, "chinese": "三口", "pinyin": "sān kǒu" },
        { "number": 4, "chinese": "四口", "pinyin": "sì kǒu" },
        { "number": 5, "chinese": "五口", "pinyin": "wǔ kǒu" },
        { "number": 6, "chinese": "六口", "pinyin": "liù kǒu" },
        { "number": 7, "chinese": "七口", "pinyin": "qī kǒu" },
        { "number": 8, "chinese": "八口", "pinyin": "bā kǒu" },
        { "number": 9, "chinese": "九口", "pinyin": "jiǔ kǒu" },
        { "number": 10, "chinese": "十口", "pinyin": "shí kǒu" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "你家有几口人？", "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?", "german": "Wie viele Personen hat deine Familie?" },
        { "chinese": "我们家有四口人。", "pinyin": "Wǒmen jiā yǒu sì kǒu rén.", "german": "Unsere Familie hat vier Personen." }
      ],
      "notes": "Wird fast ausschließlich für 家里有几口人 (Familiengröße) verwendet. 口 bedeutet auch ‹Mund(voll)›: 喝一口水."
    },
    {
      "classifier": "名",
      "pinyin": "míng",
      "meaning": "Person (formell, namentlich)",
      "category": "Menschen",
      "usage": "Formelles Zählwort für Personen, oft in offiziellen Kontexten.",
      "questionWord": "几名",
      "table": [
        { "number": 1, "chinese": "一名", "pinyin": "yì míng" },
        { "number": 2, "chinese": "两名", "pinyin": "liǎng míng" },
        { "number": 3, "chinese": "三名", "pinyin": "sān míng" },
        { "number": 4, "chinese": "四名", "pinyin": "sì míng" },
        { "number": 5, "chinese": "五名", "pinyin": "wǔ míng" },
        { "number": 6, "chinese": "六名", "pinyin": "liù míng" },
        { "number": 7, "chinese": "七名", "pinyin": "qī míng" },
        { "number": 8, "chinese": "八名", "pinyin": "bā míng" },
        { "number": 9, "chinese": "九名", "pinyin": "jiǔ míng" },
        { "number": 10, "chinese": "十名", "pinyin": "shí míng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "这个班有三十名学生。", "pinyin": "Zhège bān yǒu sānshí míng xuéshēng.", "german": "Diese Klasse hat dreißig Schüler." },
        { "chinese": "我们需要两名志愿者。", "pinyin": "Wǒmen xūyào liǎng míng zhìyuànzhě.", "german": "Wir brauchen zwei Freiwillige." }
      ],
      "notes": "Formeller als 个 und 位. Wird in Nachrichten und offiziellen Texten häufig verwendet."
    },

    // --- Tiere ---
    {
      "classifier": "只",
      "pinyin": "zhī",
      "meaning": "Tier (klein/mittel), einzelnes Objekt",
      "category": "Tiere",
      "usage": "Für die meisten Tiere (Katzen, Hunde, Vögel, Insekten etc.) und einzelne Objekte wie Hände, Schuhe.",
      "questionWord": "几只",
      "table": [
        { "number": 1, "chinese": "一只", "pinyin": "yì zhī" },
        { "number": 2, "chinese": "两只", "pinyin": "liǎng zhī" },
        { "number": 3, "chinese": "三只", "pinyin": "sān zhī" },
        { "number": 4, "chinese": "四只", "pinyin": "sì zhī" },
        { "number": 5, "chinese": "五只", "pinyin": "wǔ zhī" },
        { "number": 6, "chinese": "六只", "pinyin": "liù zhī" },
        { "number": 7, "chinese": "七只", "pinyin": "qī zhī" },
        { "number": 8, "chinese": "八只", "pinyin": "bā zhī" },
        { "number": 9, "chinese": "九只", "pinyin": "jiǔ zhī" },
        { "number": 10, "chinese": "十只", "pinyin": "shí zhī" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我有一只猫。", "pinyin": "Wǒ yǒu yì zhī māo.", "german": "Ich habe eine Katze." },
        { "chinese": "树上有三只鸟。", "pinyin": "Shù shàng yǒu sān zhī niǎo.", "german": "Auf dem Baum sind drei Vögel." }
      ],
      "notes": "只 ist das häufigste Tier-Zählwort. Auch für einzelne Körperteile (一只手) und einzelne Schuhe."
    },
    {
      "classifier": "条",
      "pinyin": "tiáo",
      "meaning": "lang und schmal (Fisch, Hose, Straße, Nachricht)",
      "category": "Tiere",
      "usage": "Für lange, schmale Dinge: Fische, Schlangen, Hosen, Straßen, Flüsse, Nachrichten.",
      "questionWord": "几条",
      "table": [
        { "number": 1, "chinese": "一条", "pinyin": "yì tiáo" },
        { "number": 2, "chinese": "两条", "pinyin": "liǎng tiáo" },
        { "number": 3, "chinese": "三条", "pinyin": "sān tiáo" },
        { "number": 4, "chinese": "四条", "pinyin": "sì tiáo" },
        { "number": 5, "chinese": "五条", "pinyin": "wǔ tiáo" },
        { "number": 6, "chinese": "六条", "pinyin": "liù tiáo" },
        { "number": 7, "chinese": "七条", "pinyin": "qī tiáo" },
        { "number": 8, "chinese": "八条", "pinyin": "bā tiáo" },
        { "number": 9, "chinese": "九条", "pinyin": "jiǔ tiáo" },
        { "number": 10, "chinese": "十条", "pinyin": "shí tiáo" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我买了两条鱼。", "pinyin": "Wǒ mǎi le liǎng tiáo yú.", "german": "Ich habe zwei Fische gekauft." },
        { "chinese": "这条路很长。", "pinyin": "Zhè tiáo lù hěn cháng.", "german": "Diese Straße ist sehr lang." }
      ],
      "notes": "Merkhilfe: Alles Lange und Schmale – Fische, Schlangen, Hosen, Straßen, Flüsse, auch: 条 für Nachrichten (一条短信)."
    },
    {
      "classifier": "头",
      "pinyin": "tóu",
      "meaning": "großes Tier (Rind, Schwein, Elefant)",
      "category": "Tiere",
      "usage": "Für große Nutztiere und Vieh.",
      "questionWord": "几头",
      "table": [
        { "number": 1, "chinese": "一头", "pinyin": "yì tóu" },
        { "number": 2, "chinese": "两头", "pinyin": "liǎng tóu" },
        { "number": 3, "chinese": "三头", "pinyin": "sān tóu" },
        { "number": 4, "chinese": "四头", "pinyin": "sì tóu" },
        { "number": 5, "chinese": "五头", "pinyin": "wǔ tóu" },
        { "number": 6, "chinese": "六头", "pinyin": "liù tóu" },
        { "number": 7, "chinese": "七头", "pinyin": "qī tóu" },
        { "number": 8, "chinese": "八头", "pinyin": "bā tóu" },
        { "number": 9, "chinese": "九头", "pinyin": "jiǔ tóu" },
        { "number": 10, "chinese": "十头", "pinyin": "shí tóu" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "农场有五头牛。", "pinyin": "Nóngchǎng yǒu wǔ tóu niú.", "german": "Der Bauernhof hat fünf Kühe." },
        { "chinese": "一头大象", "pinyin": "yì tóu dàxiàng", "german": "ein Elefant" }
      ],
      "notes": "Für große Tiere wie Rinder, Schweine, Elefanten. Nicht für Pferde (匹) oder Hunde (只/条)."
    },
    {
      "classifier": "匹",
      "pinyin": "pǐ",
      "meaning": "Pferd / Stoffballen",
      "category": "Tiere",
      "usage": "Speziell für Pferde und Stoffballen.",
      "questionWord": "几匹",
      "table": [
        { "number": 1, "chinese": "一匹", "pinyin": "yì pǐ" },
        { "number": 2, "chinese": "两匹", "pinyin": "liǎng pǐ" },
        { "number": 3, "chinese": "三匹", "pinyin": "sān pǐ" },
        { "number": 4, "chinese": "四匹", "pinyin": "sì pǐ" },
        { "number": 5, "chinese": "五匹", "pinyin": "wǔ pǐ" },
        { "number": 6, "chinese": "六匹", "pinyin": "liù pǐ" },
        { "number": 7, "chinese": "七匹", "pinyin": "qī pǐ" },
        { "number": 8, "chinese": "八匹", "pinyin": "bā pǐ" },
        { "number": 9, "chinese": "九匹", "pinyin": "jiǔ pǐ" },
        { "number": 10, "chinese": "十匹", "pinyin": "shí pǐ" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "草地上有三匹马。", "pinyin": "Cǎodì shàng yǒu sān pǐ mǎ.", "german": "Auf der Wiese sind drei Pferde." }
      ],
      "notes": "Fast ausschließlich für Pferde (马) verwendet."
    },

    // --- Objekte ---
    {
      "classifier": "本",
      "pinyin": "běn",
      "meaning": "Buch / gebundenes Werk",
      "category": "Objekte",
      "usage": "Für Bücher, Hefte, Zeitschriften und ähnliche gebundene Werke.",
      "questionWord": "几本",
      "table": [
        { "number": 1, "chinese": "一本", "pinyin": "yì běn" },
        { "number": 2, "chinese": "两本", "pinyin": "liǎng běn" },
        { "number": 3, "chinese": "三本", "pinyin": "sān běn" },
        { "number": 4, "chinese": "四本", "pinyin": "sì běn" },
        { "number": 5, "chinese": "五本", "pinyin": "wǔ běn" },
        { "number": 6, "chinese": "六本", "pinyin": "liù běn" },
        { "number": 7, "chinese": "七本", "pinyin": "qī běn" },
        { "number": 8, "chinese": "八本", "pinyin": "bā běn" },
        { "number": 9, "chinese": "九本", "pinyin": "jiǔ běn" },
        { "number": 10, "chinese": "十本", "pinyin": "shí běn" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我买了三本书。", "pinyin": "Wǒ mǎi le sān běn shū.", "german": "Ich habe drei Bücher gekauft." },
        { "chinese": "这本杂志很有意思。", "pinyin": "Zhè běn zázhì hěn yǒu yìsi.", "german": "Diese Zeitschrift ist sehr interessant." }
      ],
      "notes": "本 für alles, was gebunden ist: Bücher, Hefte, Notizbücher, Wörterbücher."
    },
    {
      "classifier": "张",
      "pinyin": "zhāng",
      "meaning": "flaches Objekt (Papier, Tisch, Karte)",
      "category": "Objekte",
      "usage": "Für flache Objekte: Papier, Fotos, Tische, Betten, Karten, Tickets.",
      "questionWord": "几张",
      "table": [
        { "number": 1, "chinese": "一张", "pinyin": "yì zhāng" },
        { "number": 2, "chinese": "两张", "pinyin": "liǎng zhāng" },
        { "number": 3, "chinese": "三张", "pinyin": "sān zhāng" },
        { "number": 4, "chinese": "四张", "pinyin": "sì zhāng" },
        { "number": 5, "chinese": "五张", "pinyin": "wǔ zhāng" },
        { "number": 6, "chinese": "六张", "pinyin": "liù zhāng" },
        { "number": 7, "chinese": "七张", "pinyin": "qī zhāng" },
        { "number": 8, "chinese": "八张", "pinyin": "bā zhāng" },
        { "number": 9, "chinese": "九张", "pinyin": "jiǔ zhāng" },
        { "number": 10, "chinese": "十张", "pinyin": "shí zhāng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我要两张票。", "pinyin": "Wǒ yào liǎng zhāng piào.", "german": "Ich möchte zwei Tickets." },
        { "chinese": "桌子上有一张纸。", "pinyin": "Zhuōzi shàng yǒu yì zhāng zhǐ.", "german": "Auf dem Tisch liegt ein Blatt Papier." }
      ],
      "notes": "张 für alles Flache: Papier, Fotos, Karten, aber auch Tische, Betten und Münder (一张嘴)."
    },
    {
      "classifier": "把",
      "pinyin": "bǎ",
      "meaning": "Gegenstand mit Griff (Stuhl, Messer, Schirm)",
      "category": "Objekte",
      "usage": "Für Gegenstände mit Griff oder die man greifen kann: Stühle, Messer, Regenschirme, Schlüssel.",
      "questionWord": "几把",
      "table": [
        { "number": 1, "chinese": "一把", "pinyin": "yì bǎ" },
        { "number": 2, "chinese": "两把", "pinyin": "liǎng bǎ" },
        { "number": 3, "chinese": "三把", "pinyin": "sān bǎ" },
        { "number": 4, "chinese": "四把", "pinyin": "sì bǎ" },
        { "number": 5, "chinese": "五把", "pinyin": "wǔ bǎ" },
        { "number": 6, "chinese": "六把", "pinyin": "liù bǎ" },
        { "number": 7, "chinese": "七把", "pinyin": "qī bǎ" },
        { "number": 8, "chinese": "八把", "pinyin": "bā bǎ" },
        { "number": 9, "chinese": "九把", "pinyin": "jiǔ bǎ" },
        { "number": 10, "chinese": "十把", "pinyin": "shí bǎ" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "给我一把椅子。", "pinyin": "Gěi wǒ yì bǎ yǐzi.", "german": "Gib mir einen Stuhl." },
        { "chinese": "我买了一把伞。", "pinyin": "Wǒ mǎi le yì bǎ sǎn.", "german": "Ich habe einen Regenschirm gekauft." }
      ],
      "notes": "Merkhilfe: Dinge, die man greifen/halten kann. Nicht verwechseln mit 把 als Grammatikpartikel."
    },
    {
      "classifier": "件",
      "pinyin": "jiàn",
      "meaning": "Kleidungsstück / Angelegenheit / Gepäckstück",
      "category": "Objekte",
      "usage": "Für Kleidungsstücke (Oberbekleidung), Angelegenheiten, Gepäckstücke und allgemeine Sachen.",
      "questionWord": "几件",
      "table": [
        { "number": 1, "chinese": "一件", "pinyin": "yí jiàn" },
        { "number": 2, "chinese": "两件", "pinyin": "liǎng jiàn" },
        { "number": 3, "chinese": "三件", "pinyin": "sān jiàn" },
        { "number": 4, "chinese": "四件", "pinyin": "sì jiàn" },
        { "number": 5, "chinese": "五件", "pinyin": "wǔ jiàn" },
        { "number": 6, "chinese": "六件", "pinyin": "liù jiàn" },
        { "number": 7, "chinese": "七件", "pinyin": "qī jiàn" },
        { "number": 8, "chinese": "八件", "pinyin": "bā jiàn" },
        { "number": 9, "chinese": "九件", "pinyin": "jiǔ jiàn" },
        { "number": 10, "chinese": "十件", "pinyin": "shí jiàn" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我买了一件衣服。", "pinyin": "Wǒ mǎi le yí jiàn yīfu.", "german": "Ich habe ein Kleidungsstück gekauft." },
        { "chinese": "有一件事想告诉你。", "pinyin": "Yǒu yí jiàn shì xiǎng gàosu nǐ.", "german": "Es gibt eine Sache, die ich dir sagen möchte." }
      ],
      "notes": "件 für Oberkleidung (Hemd, Jacke), nicht für Hosen (条) oder Schuhe (双)."
    },
    {
      "classifier": "双",
      "pinyin": "shuāng",
      "meaning": "Paar (Schuhe, Socken, Stäbchen)",
      "category": "Objekte",
      "usage": "Für Dinge, die als Paar auftreten: Schuhe, Socken, Handschuhe, Essstäbchen, Augen.",
      "questionWord": "几双",
      "table": [
        { "number": 1, "chinese": "一双", "pinyin": "yì shuāng" },
        { "number": 2, "chinese": "两双", "pinyin": "liǎng shuāng" },
        { "number": 3, "chinese": "三双", "pinyin": "sān shuāng" },
        { "number": 4, "chinese": "四双", "pinyin": "sì shuāng" },
        { "number": 5, "chinese": "五双", "pinyin": "wǔ shuāng" },
        { "number": 6, "chinese": "六双", "pinyin": "liù shuāng" },
        { "number": 7, "chinese": "七双", "pinyin": "qī shuāng" },
        { "number": 8, "chinese": "八双", "pinyin": "bā shuāng" },
        { "number": 9, "chinese": "九双", "pinyin": "jiǔ shuāng" },
        { "number": 10, "chinese": "十双", "pinyin": "shí shuāng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我要买一双鞋。", "pinyin": "Wǒ yào mǎi yì shuāng xié.", "german": "Ich möchte ein Paar Schuhe kaufen." },
        { "chinese": "一双筷子", "pinyin": "yì shuāng kuàizi", "german": "ein Paar Essstäbchen" }
      ],
      "notes": "双 für natürliche Paare. Für zusammengestellte Paare (z.B. Ehepaar) wird 对 verwendet."
    },
    {
      "classifier": "支",
      "pinyin": "zhī",
      "meaning": "Stift / stabförmig (Stift, Gewehr, Lied)",
      "category": "Objekte",
      "usage": "Für stabförmige Objekte: Stifte, Kerzen, Gewehre. Auch für Lieder und Mannschaften.",
      "questionWord": "几支",
      "table": [
        { "number": 1, "chinese": "一支", "pinyin": "yì zhī" },
        { "number": 2, "chinese": "两支", "pinyin": "liǎng zhī" },
        { "number": 3, "chinese": "三支", "pinyin": "sān zhī" },
        { "number": 4, "chinese": "四支", "pinyin": "sì zhī" },
        { "number": 5, "chinese": "五支", "pinyin": "wǔ zhī" },
        { "number": 6, "chinese": "六支", "pinyin": "liù zhī" },
        { "number": 7, "chinese": "七支", "pinyin": "qī zhī" },
        { "number": 8, "chinese": "八支", "pinyin": "bā zhī" },
        { "number": 9, "chinese": "九支", "pinyin": "jiǔ zhī" },
        { "number": 10, "chinese": "十支", "pinyin": "shí zhī" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我需要一支笔。", "pinyin": "Wǒ xūyào yì zhī bǐ.", "german": "Ich brauche einen Stift." },
        { "chinese": "唱一支歌", "pinyin": "chàng yì zhī gē", "german": "ein Lied singen" }
      ],
      "notes": "支 und 只 haben den gleichen Pinyin (zhī), aber verschiedene Zeichen und Bedeutungen."
    },
    {
      "classifier": "块",
      "pinyin": "kuài",
      "meaning": "Stück / Brocken / Yuan (umgangsspr.)",
      "category": "Objekte",
      "usage": "Für Stücke und Brocken: Kuchen, Seife, Stein. Auch umgangssprachlich für Yuan (Geld).",
      "questionWord": "几块",
      "table": [
        { "number": 1, "chinese": "一块", "pinyin": "yí kuài" },
        { "number": 2, "chinese": "两块", "pinyin": "liǎng kuài" },
        { "number": 3, "chinese": "三块", "pinyin": "sān kuài" },
        { "number": 4, "chinese": "四块", "pinyin": "sì kuài" },
        { "number": 5, "chinese": "五块", "pinyin": "wǔ kuài" },
        { "number": 6, "chinese": "六块", "pinyin": "liù kuài" },
        { "number": 7, "chinese": "七块", "pinyin": "qī kuài" },
        { "number": 8, "chinese": "八块", "pinyin": "bā kuài" },
        { "number": 9, "chinese": "九块", "pinyin": "jiǔ kuài" },
        { "number": 10, "chinese": "十块", "pinyin": "shí kuài" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "这个多少钱？——十块。", "pinyin": "Zhège duōshao qián? —— Shí kuài.", "german": "Wie viel kostet das? — Zehn Yuan." },
        { "chinese": "给我一块蛋糕。", "pinyin": "Gěi wǒ yí kuài dàngāo.", "german": "Gib mir ein Stück Kuchen." }
      ],
      "notes": "块 als Geldeinheit (= 元 yuán) ist sehr verbreitet in der Umgangssprache."
    },
    {
      "classifier": "幅",
      "pinyin": "fú",
      "meaning": "Bild / Gemälde / Kalligraphie",
      "category": "Objekte",
      "usage": "Für Bilder, Gemälde, Kalligraphien und Stoffe.",
      "questionWord": "几幅",
      "table": [
        { "number": 1, "chinese": "一幅", "pinyin": "yì fú" },
        { "number": 2, "chinese": "两幅", "pinyin": "liǎng fú" },
        { "number": 3, "chinese": "三幅", "pinyin": "sān fú" },
        { "number": 4, "chinese": "四幅", "pinyin": "sì fú" },
        { "number": 5, "chinese": "五幅", "pinyin": "wǔ fú" },
        { "number": 6, "chinese": "六幅", "pinyin": "liù fú" },
        { "number": 7, "chinese": "七幅", "pinyin": "qī fú" },
        { "number": 8, "chinese": "八幅", "pinyin": "bā fú" },
        { "number": 9, "chinese": "九幅", "pinyin": "jiǔ fú" },
        { "number": 10, "chinese": "十幅", "pinyin": "shí fú" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "墙上挂了一幅画。", "pinyin": "Qiáng shàng guà le yì fú huà.", "german": "An der Wand hängt ein Gemälde." },
        { "chinese": "这幅书法很漂亮。", "pinyin": "Zhè fú shūfǎ hěn piàoliang.", "german": "Diese Kalligraphie ist sehr schön." }
      ],
      "notes": "幅 nur für aufgehängte/gerahmte Bilder und Kunst. Fotos: 张."
    },
    {
      "classifier": "套",
      "pinyin": "tào",
      "meaning": "Set / Garnitur / Satz",
      "category": "Objekte",
      "usage": "Für zusammengehörige Sets: Möbelgarnitur, Bücherreihe, Wohnung, Anzug.",
      "questionWord": "几套",
      "table": [
        { "number": 1, "chinese": "一套", "pinyin": "yí tào" },
        { "number": 2, "chinese": "两套", "pinyin": "liǎng tào" },
        { "number": 3, "chinese": "三套", "pinyin": "sān tào" },
        { "number": 4, "chinese": "四套", "pinyin": "sì tào" },
        { "number": 5, "chinese": "五套", "pinyin": "wǔ tào" },
        { "number": 6, "chinese": "六套", "pinyin": "liù tào" },
        { "number": 7, "chinese": "七套", "pinyin": "qī tào" },
        { "number": 8, "chinese": "八套", "pinyin": "bā tào" },
        { "number": 9, "chinese": "九套", "pinyin": "jiǔ tào" },
        { "number": 10, "chinese": "十套", "pinyin": "shí tào" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我买了一套房子。", "pinyin": "Wǒ mǎi le yí tào fángzi.", "german": "Ich habe eine Wohnung gekauft." },
        { "chinese": "一套西装", "pinyin": "yí tào xīzhuāng", "german": "ein Anzug" }
      ],
      "notes": "套 betont die Zusammengehörigkeit einer Gruppe von Objekten."
    },

    // --- Essen & Trinken ---
    {
      "classifier": "杯",
      "pinyin": "bēi",
      "meaning": "Glas / Tasse / Becher",
      "category": "Essen",
      "usage": "Für Getränke in Gläsern, Tassen oder Bechern.",
      "questionWord": "几杯",
      "table": [
        { "number": 1, "chinese": "一杯", "pinyin": "yì bēi" },
        { "number": 2, "chinese": "两杯", "pinyin": "liǎng bēi" },
        { "number": 3, "chinese": "三杯", "pinyin": "sān bēi" },
        { "number": 4, "chinese": "四杯", "pinyin": "sì bēi" },
        { "number": 5, "chinese": "五杯", "pinyin": "wǔ bēi" },
        { "number": 6, "chinese": "六杯", "pinyin": "liù bēi" },
        { "number": 7, "chinese": "七杯", "pinyin": "qī bēi" },
        { "number": 8, "chinese": "八杯", "pinyin": "bā bēi" },
        { "number": 9, "chinese": "九杯", "pinyin": "jiǔ bēi" },
        { "number": 10, "chinese": "十杯", "pinyin": "shí bēi" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "请给我一杯咖啡。", "pinyin": "Qǐng gěi wǒ yì bēi kāfēi.", "german": "Bitte gib mir eine Tasse Kaffee." },
        { "chinese": "我每天喝八杯水。", "pinyin": "Wǒ měi tiān hē bā bēi shuǐ.", "german": "Ich trinke jeden Tag acht Gläser Wasser." }
      ],
      "notes": "杯 ist das universelle Zählwort für Getränke im Gefäß."
    },
    {
      "classifier": "瓶",
      "pinyin": "píng",
      "meaning": "Flasche",
      "category": "Essen",
      "usage": "Für Getränke und Flüssigkeiten in Flaschen.",
      "questionWord": "几瓶",
      "table": [
        { "number": 1, "chinese": "一瓶", "pinyin": "yì píng" },
        { "number": 2, "chinese": "两瓶", "pinyin": "liǎng píng" },
        { "number": 3, "chinese": "三瓶", "pinyin": "sān píng" },
        { "number": 4, "chinese": "四瓶", "pinyin": "sì píng" },
        { "number": 5, "chinese": "五瓶", "pinyin": "wǔ píng" },
        { "number": 6, "chinese": "六瓶", "pinyin": "liù píng" },
        { "number": 7, "chinese": "七瓶", "pinyin": "qī píng" },
        { "number": 8, "chinese": "八瓶", "pinyin": "bā píng" },
        { "number": 9, "chinese": "九瓶", "pinyin": "jiǔ píng" },
        { "number": 10, "chinese": "十瓶", "pinyin": "shí píng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我买了两瓶啤酒。", "pinyin": "Wǒ mǎi le liǎng píng píjiǔ.", "german": "Ich habe zwei Flaschen Bier gekauft." },
        { "chinese": "一瓶水多少钱？", "pinyin": "Yì píng shuǐ duōshao qián?", "german": "Wie viel kostet eine Flasche Wasser?" }
      ],
      "notes": "瓶 wird auch als Nomen (Flasche) verwendet."
    },
    {
      "classifier": "碗",
      "pinyin": "wǎn",
      "meaning": "Schüssel / Schale",
      "category": "Essen",
      "usage": "Für Speisen in Schüsseln: Reis, Nudeln, Suppe.",
      "questionWord": "几碗",
      "table": [
        { "number": 1, "chinese": "一碗", "pinyin": "yì wǎn" },
        { "number": 2, "chinese": "两碗", "pinyin": "liǎng wǎn" },
        { "number": 3, "chinese": "三碗", "pinyin": "sān wǎn" },
        { "number": 4, "chinese": "四碗", "pinyin": "sì wǎn" },
        { "number": 5, "chinese": "五碗", "pinyin": "wǔ wǎn" },
        { "number": 6, "chinese": "六碗", "pinyin": "liù wǎn" },
        { "number": 7, "chinese": "七碗", "pinyin": "qī wǎn" },
        { "number": 8, "chinese": "八碗", "pinyin": "bā wǎn" },
        { "number": 9, "chinese": "九碗", "pinyin": "jiǔ wǎn" },
        { "number": 10, "chinese": "十碗", "pinyin": "shí wǎn" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我要一碗米饭。", "pinyin": "Wǒ yào yì wǎn mǐfàn.", "german": "Ich möchte eine Schüssel Reis." },
        { "chinese": "来两碗面条。", "pinyin": "Lái liǎng wǎn miàntiáo.", "german": "Zwei Schüsseln Nudeln, bitte." }
      ],
      "notes": "碗 ist sowohl Zählwort als auch Nomen (Schüssel)."
    },
    {
      "classifier": "盘",
      "pinyin": "pán",
      "meaning": "Teller / Platte",
      "category": "Essen",
      "usage": "Für Speisen auf Tellern und Platten.",
      "questionWord": "几盘",
      "table": [
        { "number": 1, "chinese": "一盘", "pinyin": "yì pán" },
        { "number": 2, "chinese": "两盘", "pinyin": "liǎng pán" },
        { "number": 3, "chinese": "三盘", "pinyin": "sān pán" },
        { "number": 4, "chinese": "四盘", "pinyin": "sì pán" },
        { "number": 5, "chinese": "五盘", "pinyin": "wǔ pán" },
        { "number": 6, "chinese": "六盘", "pinyin": "liù pán" },
        { "number": 7, "chinese": "七盘", "pinyin": "qī pán" },
        { "number": 8, "chinese": "八盘", "pinyin": "bā pán" },
        { "number": 9, "chinese": "九盘", "pinyin": "jiǔ pán" },
        { "number": 10, "chinese": "十盘", "pinyin": "shí pán" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "来一盘饺子。", "pinyin": "Lái yì pán jiǎozi.", "german": "Einen Teller Jiaozi, bitte." },
        { "chinese": "我们点了三盘菜。", "pinyin": "Wǒmen diǎn le sān pán cài.", "german": "Wir haben drei Gerichte bestellt." }
      ],
      "notes": "盘 für Gerichte auf Tellern. Auch für eine Partie (一盘棋 = eine Partie Schach)."
    },
    {
      "classifier": "顿",
      "pinyin": "dùn",
      "meaning": "Mahlzeit",
      "category": "Essen",
      "usage": "Für Mahlzeiten und auch für Schelte/Schläge.",
      "questionWord": "几顿",
      "table": [
        { "number": 1, "chinese": "一顿", "pinyin": "yí dùn" },
        { "number": 2, "chinese": "两顿", "pinyin": "liǎng dùn" },
        { "number": 3, "chinese": "三顿", "pinyin": "sān dùn" },
        { "number": 4, "chinese": "四顿", "pinyin": "sì dùn" },
        { "number": 5, "chinese": "五顿", "pinyin": "wǔ dùn" },
        { "number": 6, "chinese": "六顿", "pinyin": "liù dùn" },
        { "number": 7, "chinese": "七顿", "pinyin": "qī dùn" },
        { "number": 8, "chinese": "八顿", "pinyin": "bā dùn" },
        { "number": 9, "chinese": "九顿", "pinyin": "jiǔ dùn" },
        { "number": 10, "chinese": "十顿", "pinyin": "shí dùn" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "一天吃三顿饭。", "pinyin": "Yì tiān chī sān dùn fàn.", "german": "Drei Mahlzeiten am Tag essen." },
        { "chinese": "我请你吃一顿饭。", "pinyin": "Wǒ qǐng nǐ chī yí dùn fàn.", "german": "Ich lade dich zum Essen ein." }
      ],
      "notes": "Hauptverwendung: 三顿饭 (drei Mahlzeiten). Auch: 挨了一顿骂 (wurde ausgeschimpft)."
    },

    // --- Natur & Gebäude ---
    {
      "classifier": "棵",
      "pinyin": "kē",
      "meaning": "Baum / Pflanze",
      "category": "Natur",
      "usage": "Für Bäume und größere Pflanzen.",
      "questionWord": "几棵",
      "table": [
        { "number": 1, "chinese": "一棵", "pinyin": "yì kē" },
        { "number": 2, "chinese": "两棵", "pinyin": "liǎng kē" },
        { "number": 3, "chinese": "三棵", "pinyin": "sān kē" },
        { "number": 4, "chinese": "四棵", "pinyin": "sì kē" },
        { "number": 5, "chinese": "五棵", "pinyin": "wǔ kē" },
        { "number": 6, "chinese": "六棵", "pinyin": "liù kē" },
        { "number": 7, "chinese": "七棵", "pinyin": "qī kē" },
        { "number": 8, "chinese": "八棵", "pinyin": "bā kē" },
        { "number": 9, "chinese": "九棵", "pinyin": "jiǔ kē" },
        { "number": 10, "chinese": "十棵", "pinyin": "shí kē" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "院子里有一棵大树。", "pinyin": "Yuànzi lǐ yǒu yì kē dà shù.", "german": "Im Hof steht ein großer Baum." },
        { "chinese": "我种了三棵花。", "pinyin": "Wǒ zhòng le sān kē huā.", "german": "Ich habe drei Blumen gepflanzt." }
      ],
      "notes": "棵 nur für Pflanzen mit Stamm/Stiel. Für Blumen kann auch 朵 verwendet werden."
    },
    {
      "classifier": "朵",
      "pinyin": "duǒ",
      "meaning": "Blume / Wolke",
      "category": "Natur",
      "usage": "Für Blüten, Blumen und Wolken.",
      "questionWord": "几朵",
      "table": [
        { "number": 1, "chinese": "一朵", "pinyin": "yì duǒ" },
        { "number": 2, "chinese": "两朵", "pinyin": "liǎng duǒ" },
        { "number": 3, "chinese": "三朵", "pinyin": "sān duǒ" },
        { "number": 4, "chinese": "四朵", "pinyin": "sì duǒ" },
        { "number": 5, "chinese": "五朵", "pinyin": "wǔ duǒ" },
        { "number": 6, "chinese": "六朵", "pinyin": "liù duǒ" },
        { "number": 7, "chinese": "七朵", "pinyin": "qī duǒ" },
        { "number": 8, "chinese": "八朵", "pinyin": "bā duǒ" },
        { "number": 9, "chinese": "九朵", "pinyin": "jiǔ duǒ" },
        { "number": 10, "chinese": "十朵", "pinyin": "shí duǒ" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "他送了她一朵玫瑰花。", "pinyin": "Tā sòng le tā yì duǒ méiguī huā.", "german": "Er schenkte ihr eine Rose." },
        { "chinese": "天上有几朵白云。", "pinyin": "Tiān shàng yǒu jǐ duǒ bái yún.", "german": "Am Himmel sind ein paar weiße Wolken." }
      ],
      "notes": "朵 für die Blüte selbst; 棵 für die ganze Pflanze; 束 für einen Strauß."
    },
    {
      "classifier": "座",
      "pinyin": "zuò",
      "meaning": "großes Gebäude / Berg / Brücke",
      "category": "Natur",
      "usage": "Für große, feste Strukturen: Berge, Gebäude, Brücken, Städte.",
      "questionWord": "几座",
      "table": [
        { "number": 1, "chinese": "一座", "pinyin": "yí zuò" },
        { "number": 2, "chinese": "两座", "pinyin": "liǎng zuò" },
        { "number": 3, "chinese": "三座", "pinyin": "sān zuò" },
        { "number": 4, "chinese": "四座", "pinyin": "sì zuò" },
        { "number": 5, "chinese": "五座", "pinyin": "wǔ zuò" },
        { "number": 6, "chinese": "六座", "pinyin": "liù zuò" },
        { "number": 7, "chinese": "七座", "pinyin": "qī zuò" },
        { "number": 8, "chinese": "八座", "pinyin": "bā zuò" },
        { "number": 9, "chinese": "九座", "pinyin": "jiǔ zuò" },
        { "number": 10, "chinese": "十座", "pinyin": "shí zuò" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "这座山很高。", "pinyin": "Zhè zuò shān hěn gāo.", "german": "Dieser Berg ist sehr hoch." },
        { "chinese": "那座桥很有名。", "pinyin": "Nà zuò qiáo hěn yǒumíng.", "german": "Jene Brücke ist sehr berühmt." }
      ],
      "notes": "座 für große, imposante Strukturen. Für normale Wohnhäuser eher 栋."
    },
    {
      "classifier": "栋",
      "pinyin": "dòng",
      "meaning": "Gebäude / Haus",
      "category": "Natur",
      "usage": "Für einzelne Gebäude und Häuser.",
      "questionWord": "几栋",
      "table": [
        { "number": 1, "chinese": "一栋", "pinyin": "yí dòng" },
        { "number": 2, "chinese": "两栋", "pinyin": "liǎng dòng" },
        { "number": 3, "chinese": "三栋", "pinyin": "sān dòng" },
        { "number": 4, "chinese": "四栋", "pinyin": "sì dòng" },
        { "number": 5, "chinese": "五栋", "pinyin": "wǔ dòng" },
        { "number": 6, "chinese": "六栋", "pinyin": "liù dòng" },
        { "number": 7, "chinese": "七栋", "pinyin": "qī dòng" },
        { "number": 8, "chinese": "八栋", "pinyin": "bā dòng" },
        { "number": 9, "chinese": "九栋", "pinyin": "jiǔ dòng" },
        { "number": 10, "chinese": "十栋", "pinyin": "shí dòng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "这栋楼有二十层。", "pinyin": "Zhè dòng lóu yǒu èrshí céng.", "german": "Dieses Gebäude hat zwanzig Stockwerke." },
        { "chinese": "我们住在那栋楼。", "pinyin": "Wǒmen zhù zài nà dòng lóu.", "german": "Wir wohnen in jenem Gebäude." }
      ],
      "notes": "栋 eher für gewöhnliche Gebäude; 座 für imposante Bauwerke."
    },

    // --- Transport ---
    {
      "classifier": "辆",
      "pinyin": "liàng",
      "meaning": "Fahrzeug (Auto, Fahrrad, Bus)",
      "category": "Transport",
      "usage": "Für Landfahrzeuge: Autos, Busse, Fahrräder, Motorräder, Züge.",
      "questionWord": "几辆",
      "table": [
        { "number": 1, "chinese": "一辆", "pinyin": "yí liàng" },
        { "number": 2, "chinese": "两辆", "pinyin": "liǎng liàng" },
        { "number": 3, "chinese": "三辆", "pinyin": "sān liàng" },
        { "number": 4, "chinese": "四辆", "pinyin": "sì liàng" },
        { "number": 5, "chinese": "五辆", "pinyin": "wǔ liàng" },
        { "number": 6, "chinese": "六辆", "pinyin": "liù liàng" },
        { "number": 7, "chinese": "七辆", "pinyin": "qī liàng" },
        { "number": 8, "chinese": "八辆", "pinyin": "bā liàng" },
        { "number": 9, "chinese": "九辆", "pinyin": "jiǔ liàng" },
        { "number": 10, "chinese": "十辆", "pinyin": "shí liàng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我有一辆自行车。", "pinyin": "Wǒ yǒu yí liàng zìxíngchē.", "german": "Ich habe ein Fahrrad." },
        { "chinese": "路上有很多辆车。", "pinyin": "Lù shàng yǒu hěn duō liàng chē.", "german": "Auf der Straße sind viele Autos." }
      ],
      "notes": "辆 für Radfahrzeuge auf Straßen. Nicht für Flugzeuge (架) oder Schiffe (艘)."
    },
    {
      "classifier": "架",
      "pinyin": "jià",
      "meaning": "Flugzeug / Maschine mit Gestell",
      "category": "Transport",
      "usage": "Für Flugzeuge, Klaviere, Kameras und andere Geräte mit Gestell/Rahmen.",
      "questionWord": "几架",
      "table": [
        { "number": 1, "chinese": "一架", "pinyin": "yí jià" },
        { "number": 2, "chinese": "两架", "pinyin": "liǎng jià" },
        { "number": 3, "chinese": "三架", "pinyin": "sān jià" },
        { "number": 4, "chinese": "四架", "pinyin": "sì jià" },
        { "number": 5, "chinese": "五架", "pinyin": "wǔ jià" },
        { "number": 6, "chinese": "六架", "pinyin": "liù jià" },
        { "number": 7, "chinese": "七架", "pinyin": "qī jià" },
        { "number": 8, "chinese": "八架", "pinyin": "bā jià" },
        { "number": 9, "chinese": "九架", "pinyin": "jiǔ jià" },
        { "number": 10, "chinese": "十架", "pinyin": "shí jià" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "天上飞过一架飞机。", "pinyin": "Tiān shàng fēi guò yí jià fēijī.", "german": "Ein Flugzeug flog über den Himmel." },
        { "chinese": "一架钢琴", "pinyin": "yí jià gāngqín", "german": "ein Klavier" }
      ],
      "notes": "架 für Objekte mit Rahmen-/Gestellstruktur."
    },
    {
      "classifier": "艘",
      "pinyin": "sōu",
      "meaning": "Schiff / Boot",
      "category": "Transport",
      "usage": "Für Schiffe und Boote aller Art.",
      "questionWord": "几艘",
      "table": [
        { "number": 1, "chinese": "一艘", "pinyin": "yì sōu" },
        { "number": 2, "chinese": "两艘", "pinyin": "liǎng sōu" },
        { "number": 3, "chinese": "三艘", "pinyin": "sān sōu" },
        { "number": 4, "chinese": "四艘", "pinyin": "sì sōu" },
        { "number": 5, "chinese": "五艘", "pinyin": "wǔ sōu" },
        { "number": 6, "chinese": "六艘", "pinyin": "liù sōu" },
        { "number": 7, "chinese": "七艘", "pinyin": "qī sōu" },
        { "number": 8, "chinese": "八艘", "pinyin": "bā sōu" },
        { "number": 9, "chinese": "九艘", "pinyin": "jiǔ sōu" },
        { "number": 10, "chinese": "十艘", "pinyin": "shí sōu" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "港口停着几艘大船。", "pinyin": "Gǎngkǒu tíng zhe jǐ sōu dà chuán.", "german": "Im Hafen liegen einige große Schiffe." }
      ],
      "notes": "艘 ist das Standardzählwort für alle Wasserfahrzeuge."
    },
    {
      "classifier": "台",
      "pinyin": "tái",
      "meaning": "Gerät / Maschine (Fernseher, Computer)",
      "category": "Transport",
      "usage": "Für Maschinen und elektronische Geräte: Fernseher, Computer, Waschmaschinen, Klimaanlagen.",
      "questionWord": "几台",
      "table": [
        { "number": 1, "chinese": "一台", "pinyin": "yì tái" },
        { "number": 2, "chinese": "两台", "pinyin": "liǎng tái" },
        { "number": 3, "chinese": "三台", "pinyin": "sān tái" },
        { "number": 4, "chinese": "四台", "pinyin": "sì tái" },
        { "number": 5, "chinese": "五台", "pinyin": "wǔ tái" },
        { "number": 6, "chinese": "六台", "pinyin": "liù tái" },
        { "number": 7, "chinese": "七台", "pinyin": "qī tái" },
        { "number": 8, "chinese": "八台", "pinyin": "bā tái" },
        { "number": 9, "chinese": "九台", "pinyin": "jiǔ tái" },
        { "number": 10, "chinese": "十台", "pinyin": "shí tái" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我买了一台新电脑。", "pinyin": "Wǒ mǎi le yì tái xīn diànnǎo.", "german": "Ich habe einen neuen Computer gekauft." },
        { "chinese": "客厅有一台电视。", "pinyin": "Kètīng yǒu yì tái diànshì.", "german": "Im Wohnzimmer steht ein Fernseher." }
      ],
      "notes": "台 für technische Geräte und Maschinen. Auch für Theateraufführungen (一台戏)."
    },
    {
      "classifier": "部",
      "pinyin": "bù",
      "meaning": "Film / Buch (Werk) / Handy / Fahrzeug (formell)",
      "category": "Transport",
      "usage": "Für Filme, literarische Werke, Mobiltelefone und Fahrzeuge (formell).",
      "questionWord": "几部",
      "table": [
        { "number": 1, "chinese": "一部", "pinyin": "yí bù" },
        { "number": 2, "chinese": "两部", "pinyin": "liǎng bù" },
        { "number": 3, "chinese": "三部", "pinyin": "sān bù" },
        { "number": 4, "chinese": "四部", "pinyin": "sì bù" },
        { "number": 5, "chinese": "五部", "pinyin": "wǔ bù" },
        { "number": 6, "chinese": "六部", "pinyin": "liù bù" },
        { "number": 7, "chinese": "七部", "pinyin": "qī bù" },
        { "number": 8, "chinese": "八部", "pinyin": "bā bù" },
        { "number": 9, "chinese": "九部", "pinyin": "jiǔ bù" },
        { "number": 10, "chinese": "十部", "pinyin": "shí bù" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我看了一部好电影。", "pinyin": "Wǒ kàn le yí bù hǎo diànyǐng.", "german": "Ich habe einen guten Film gesehen." },
        { "chinese": "我的手机是一部华为。", "pinyin": "Wǒ de shǒujī shì yí bù Huáwéi.", "german": "Mein Handy ist ein Huawei." }
      ],
      "notes": "部 ist vielseitig: Filme, Romane, Handys, und manchmal Autos/Aufzüge."
    },

    // --- Text & Literatur ---
    {
      "classifier": "篇",
      "pinyin": "piān",
      "meaning": "Artikel / Aufsatz / Text",
      "category": "Abstrakt",
      "usage": "Für geschriebene Texte: Artikel, Aufsätze, Berichte, Reden.",
      "questionWord": "几篇",
      "table": [
        { "number": 1, "chinese": "一篇", "pinyin": "yì piān" },
        { "number": 2, "chinese": "两篇", "pinyin": "liǎng piān" },
        { "number": 3, "chinese": "三篇", "pinyin": "sān piān" },
        { "number": 4, "chinese": "四篇", "pinyin": "sì piān" },
        { "number": 5, "chinese": "五篇", "pinyin": "wǔ piān" },
        { "number": 6, "chinese": "六篇", "pinyin": "liù piān" },
        { "number": 7, "chinese": "七篇", "pinyin": "qī piān" },
        { "number": 8, "chinese": "八篇", "pinyin": "bā piān" },
        { "number": 9, "chinese": "九篇", "pinyin": "jiǔ piān" },
        { "number": 10, "chinese": "十篇", "pinyin": "shí piān" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我写了一篇文章。", "pinyin": "Wǒ xiě le yì piān wénzhāng.", "german": "Ich habe einen Artikel geschrieben." },
        { "chinese": "请读这篇课文。", "pinyin": "Qǐng dú zhè piān kèwén.", "german": "Bitte lies diesen Lektionstext." }
      ],
      "notes": "篇 für eigenständige Texte. 本 für Bücher als Ganzes."
    },
    {
      "classifier": "首",
      "pinyin": "shǒu",
      "meaning": "Gedicht / Lied",
      "category": "Abstrakt",
      "usage": "Für Gedichte und Lieder.",
      "questionWord": "几首",
      "table": [
        { "number": 1, "chinese": "一首", "pinyin": "yì shǒu" },
        { "number": 2, "chinese": "两首", "pinyin": "liǎng shǒu" },
        { "number": 3, "chinese": "三首", "pinyin": "sān shǒu" },
        { "number": 4, "chinese": "四首", "pinyin": "sì shǒu" },
        { "number": 5, "chinese": "五首", "pinyin": "wǔ shǒu" },
        { "number": 6, "chinese": "六首", "pinyin": "liù shǒu" },
        { "number": 7, "chinese": "七首", "pinyin": "qī shǒu" },
        { "number": 8, "chinese": "八首", "pinyin": "bā shǒu" },
        { "number": 9, "chinese": "九首", "pinyin": "jiǔ shǒu" },
        { "number": 10, "chinese": "十首", "pinyin": "shí shǒu" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我最喜欢这首歌。", "pinyin": "Wǒ zuì xǐhuan zhè shǒu gē.", "german": "Dieses Lied mag ich am liebsten." },
        { "chinese": "李白写了很多首诗。", "pinyin": "Lǐ Bái xiě le hěn duō shǒu shī.", "german": "Li Bai schrieb viele Gedichte." }
      ],
      "notes": "首 speziell für Gedichte (诗) und Lieder (歌). Für Musikstücke allgemein auch 曲."
    },
    {
      "classifier": "封",
      "pinyin": "fēng",
      "meaning": "Brief / E-Mail",
      "category": "Abstrakt",
      "usage": "Für Briefe und E-Mails.",
      "questionWord": "几封",
      "table": [
        { "number": 1, "chinese": "一封", "pinyin": "yì fēng" },
        { "number": 2, "chinese": "两封", "pinyin": "liǎng fēng" },
        { "number": 3, "chinese": "三封", "pinyin": "sān fēng" },
        { "number": 4, "chinese": "四封", "pinyin": "sì fēng" },
        { "number": 5, "chinese": "五封", "pinyin": "wǔ fēng" },
        { "number": 6, "chinese": "六封", "pinyin": "liù fēng" },
        { "number": 7, "chinese": "七封", "pinyin": "qī fēng" },
        { "number": 8, "chinese": "八封", "pinyin": "bā fēng" },
        { "number": 9, "chinese": "九封", "pinyin": "jiǔ fēng" },
        { "number": 10, "chinese": "十封", "pinyin": "shí fēng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我收到了一封信。", "pinyin": "Wǒ shōudào le yì fēng xìn.", "german": "Ich habe einen Brief erhalten." },
        { "chinese": "请给我发一封邮件。", "pinyin": "Qǐng gěi wǒ fā yì fēng yóujiàn.", "german": "Bitte schick mir eine E-Mail." }
      ],
      "notes": "封 wörtlich: versiegeln. Ursprünglich für versiegelte Briefe."
    },

    // --- Zeit & Abschnitte ---
    {
      "classifier": "节",
      "pinyin": "jié",
      "meaning": "Unterrichtsstunde / Abschnitt / Segment",
      "category": "Zeit",
      "usage": "Für Unterrichtsstunden, Kapitel, Waggons und Batterien.",
      "questionWord": "几节",
      "table": [
        { "number": 1, "chinese": "一节", "pinyin": "yì jié" },
        { "number": 2, "chinese": "两节", "pinyin": "liǎng jié" },
        { "number": 3, "chinese": "三节", "pinyin": "sān jié" },
        { "number": 4, "chinese": "四节", "pinyin": "sì jié" },
        { "number": 5, "chinese": "五节", "pinyin": "wǔ jié" },
        { "number": 6, "chinese": "六节", "pinyin": "liù jié" },
        { "number": 7, "chinese": "七节", "pinyin": "qī jié" },
        { "number": 8, "chinese": "八节", "pinyin": "bā jié" },
        { "number": 9, "chinese": "九节", "pinyin": "jiǔ jié" },
        { "number": 10, "chinese": "十节", "pinyin": "shí jié" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "今天有四节课。", "pinyin": "Jīntiān yǒu sì jié kè.", "german": "Heute gibt es vier Unterrichtsstunden." },
        { "chinese": "一节电池", "pinyin": "yí jié diànchí", "german": "eine Batterie" }
      ],
      "notes": "节 für Abschnitte: Unterricht (课), Zugwaggons (车厢), Batterien (电池)."
    },
    {
      "classifier": "段",
      "pinyin": "duàn",
      "meaning": "Abschnitt / Zeitraum / Strecke",
      "category": "Zeit",
      "usage": "Für Abschnitte von Texten, Zeiträumen, Strecken und Erfahrungen.",
      "questionWord": "几段",
      "table": [
        { "number": 1, "chinese": "一段", "pinyin": "yí duàn" },
        { "number": 2, "chinese": "两段", "pinyin": "liǎng duàn" },
        { "number": 3, "chinese": "三段", "pinyin": "sān duàn" },
        { "number": 4, "chinese": "四段", "pinyin": "sì duàn" },
        { "number": 5, "chinese": "五段", "pinyin": "wǔ duàn" },
        { "number": 6, "chinese": "六段", "pinyin": "liù duàn" },
        { "number": 7, "chinese": "七段", "pinyin": "qī duàn" },
        { "number": 8, "chinese": "八段", "pinyin": "bā duàn" },
        { "number": 9, "chinese": "九段", "pinyin": "jiǔ duàn" },
        { "number": 10, "chinese": "十段", "pinyin": "shí duàn" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "这段时间我很忙。", "pinyin": "Zhè duàn shíjiān wǒ hěn máng.", "german": "In dieser Zeit bin ich sehr beschäftigt." },
        { "chinese": "请读第二段。", "pinyin": "Qǐng dú dì-èr duàn.", "german": "Bitte lies den zweiten Absatz." }
      ],
      "notes": "段 für Abschnitte aller Art: Zeit (一段时间), Text (一段话), Weg (一段路)."
    },

    // --- Abstrakt (Handlungen & Häufigkeit) ---
    {
      "classifier": "次",
      "pinyin": "cì",
      "meaning": "Mal (Häufigkeit)",
      "category": "Abstrakt",
      "usage": "Zählt, wie oft etwas geschieht.",
      "questionWord": "几次",
      "table": [
        { "number": 1, "chinese": "一次", "pinyin": "yí cì" },
        { "number": 2, "chinese": "两次", "pinyin": "liǎng cì" },
        { "number": 3, "chinese": "三次", "pinyin": "sān cì" },
        { "number": 4, "chinese": "四次", "pinyin": "sì cì" },
        { "number": 5, "chinese": "五次", "pinyin": "wǔ cì" },
        { "number": 6, "chinese": "六次", "pinyin": "liù cì" },
        { "number": 7, "chinese": "七次", "pinyin": "qī cì" },
        { "number": 8, "chinese": "八次", "pinyin": "bā cì" },
        { "number": 9, "chinese": "九次", "pinyin": "jiǔ cì" },
        { "number": 10, "chinese": "十次", "pinyin": "shí cì" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我去过三次中国。", "pinyin": "Wǒ qù guò sān cì Zhōngguó.", "german": "Ich war dreimal in China." },
        { "chinese": "请再说一次。", "pinyin": "Qǐng zài shuō yí cì.", "german": "Bitte sag es noch einmal." }
      ],
      "notes": "次 steht nach dem Verb: 去了两次 (zweimal gegangen). Häufigstes Zählwort für Häufigkeit."
    },
    {
      "classifier": "遍",
      "pinyin": "biàn",
      "meaning": "Mal (von Anfang bis Ende)",
      "category": "Abstrakt",
      "usage": "Für vollständige Durchgänge: einmal komplett durchlesen, anhören etc.",
      "questionWord": "几遍",
      "table": [
        { "number": 1, "chinese": "一遍", "pinyin": "yí biàn" },
        { "number": 2, "chinese": "两遍", "pinyin": "liǎng biàn" },
        { "number": 3, "chinese": "三遍", "pinyin": "sān biàn" },
        { "number": 4, "chinese": "四遍", "pinyin": "sì biàn" },
        { "number": 5, "chinese": "五遍", "pinyin": "wǔ biàn" },
        { "number": 6, "chinese": "六遍", "pinyin": "liù biàn" },
        { "number": 7, "chinese": "七遍", "pinyin": "qī biàn" },
        { "number": 8, "chinese": "八遍", "pinyin": "bā biàn" },
        { "number": 9, "chinese": "九遍", "pinyin": "jiǔ biàn" },
        { "number": 10, "chinese": "十遍", "pinyin": "shí biàn" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "这本书我看了两遍。", "pinyin": "Zhè běn shū wǒ kàn le liǎng biàn.", "german": "Dieses Buch habe ich zweimal (komplett) gelesen." },
        { "chinese": "请再念一遍。", "pinyin": "Qǐng zài niàn yí biàn.", "german": "Bitte lies es noch einmal (ganz) vor." }
      ],
      "notes": "次 = allgemeine Häufigkeit; 遍 = betont den vollständigen Durchgang."
    },
    {
      "classifier": "趟",
      "pinyin": "tàng",
      "meaning": "Trip / Fahrt / Reise",
      "category": "Abstrakt",
      "usage": "Für Hin-und-Rück-Fahrten oder Besuche an einem Ort.",
      "questionWord": "几趟",
      "table": [
        { "number": 1, "chinese": "一趟", "pinyin": "yí tàng" },
        { "number": 2, "chinese": "两趟", "pinyin": "liǎng tàng" },
        { "number": 3, "chinese": "三趟", "pinyin": "sān tàng" },
        { "number": 4, "chinese": "四趟", "pinyin": "sì tàng" },
        { "number": 5, "chinese": "五趟", "pinyin": "wǔ tàng" },
        { "number": 6, "chinese": "六趟", "pinyin": "liù tàng" },
        { "number": 7, "chinese": "七趟", "pinyin": "qī tàng" },
        { "number": 8, "chinese": "八趟", "pinyin": "bā tàng" },
        { "number": 9, "chinese": "九趟", "pinyin": "jiǔ tàng" },
        { "number": 10, "chinese": "十趟", "pinyin": "shí tàng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我跑了两趟银行。", "pinyin": "Wǒ pǎo le liǎng tàng yínháng.", "german": "Ich bin zweimal zur Bank gelaufen." },
        { "chinese": "这趟火车几点开？", "pinyin": "Zhè tàng huǒchē jǐ diǎn kāi?", "german": "Um wie viel Uhr fährt dieser Zug?" }
      ],
      "notes": "趟 betont die Reise/Fahrt als ganzen Vorgang. Auch für Züge/Busse als Fahrtnummer."
    },
    {
      "classifier": "场",
      "pinyin": "chǎng",
      "meaning": "Veranstaltung / Vorstellung / Spiel",
      "category": "Abstrakt",
      "usage": "Für Veranstaltungen, Spiele, Vorstellungen, Naturereignisse (Regen, Schnee).",
      "questionWord": "几场",
      "table": [
        { "number": 1, "chinese": "一场", "pinyin": "yì chǎng" },
        { "number": 2, "chinese": "两场", "pinyin": "liǎng chǎng" },
        { "number": 3, "chinese": "三场", "pinyin": "sān chǎng" },
        { "number": 4, "chinese": "四场", "pinyin": "sì chǎng" },
        { "number": 5, "chinese": "五场", "pinyin": "wǔ chǎng" },
        { "number": 6, "chinese": "六场", "pinyin": "liù chǎng" },
        { "number": 7, "chinese": "七场", "pinyin": "qī chǎng" },
        { "number": 8, "chinese": "八场", "pinyin": "bā chǎng" },
        { "number": 9, "chinese": "九场", "pinyin": "jiǔ chǎng" },
        { "number": 10, "chinese": "十场", "pinyin": "shí chǎng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "昨天有一场大雨。", "pinyin": "Zuótiān yǒu yì chǎng dà yǔ.", "german": "Gestern gab es einen starken Regen." },
        { "chinese": "我看了一场足球比赛。", "pinyin": "Wǒ kàn le yì chǎng zúqiú bǐsài.", "german": "Ich habe ein Fußballspiel gesehen." }
      ],
      "notes": "场 (chǎng) für Ereignisse. Als cháng ausgesprochen bedeutet es ‹Platz/Feld›."
    },
    {
      "classifier": "份",
      "pinyin": "fèn",
      "meaning": "Portion / Exemplar / Anteil",
      "category": "Abstrakt",
      "usage": "Für Portionen (Essen), Exemplare (Zeitung), Dokumente und Anteile.",
      "questionWord": "几份",
      "table": [
        { "number": 1, "chinese": "一份", "pinyin": "yí fèn" },
        { "number": 2, "chinese": "两份", "pinyin": "liǎng fèn" },
        { "number": 3, "chinese": "三份", "pinyin": "sān fèn" },
        { "number": 4, "chinese": "四份", "pinyin": "sì fèn" },
        { "number": 5, "chinese": "五份", "pinyin": "wǔ fèn" },
        { "number": 6, "chinese": "六份", "pinyin": "liù fèn" },
        { "number": 7, "chinese": "七份", "pinyin": "qī fèn" },
        { "number": 8, "chinese": "八份", "pinyin": "bā fèn" },
        { "number": 9, "chinese": "九份", "pinyin": "jiǔ fèn" },
        { "number": 10, "chinese": "十份", "pinyin": "shí fèn" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我要一份炒饭。", "pinyin": "Wǒ yào yí fèn chǎofàn.", "german": "Ich möchte eine Portion gebratenen Reis." },
        { "chinese": "请给我一份报纸。", "pinyin": "Qǐng gěi wǒ yí fèn bàozhǐ.", "german": "Bitte gib mir ein Exemplar der Zeitung." }
      ],
      "notes": "份 für individuelle Portionen oder Exemplare. Auch: 一份工作 (eine Stelle/ein Job)."
    },
    {
      "classifier": "句",
      "pinyin": "jù",
      "meaning": "Satz (sprachlich)",
      "category": "Abstrakt",
      "usage": "Für gesprochene oder geschriebene Sätze.",
      "questionWord": "几句",
      "table": [
        { "number": 1, "chinese": "一句", "pinyin": "yí jù" },
        { "number": 2, "chinese": "两句", "pinyin": "liǎng jù" },
        { "number": 3, "chinese": "三句", "pinyin": "sān jù" },
        { "number": 4, "chinese": "四句", "pinyin": "sì jù" },
        { "number": 5, "chinese": "五句", "pinyin": "wǔ jù" },
        { "number": 6, "chinese": "六句", "pinyin": "liù jù" },
        { "number": 7, "chinese": "七句", "pinyin": "qī jù" },
        { "number": 8, "chinese": "八句", "pinyin": "bā jù" },
        { "number": 9, "chinese": "九句", "pinyin": "jiǔ jù" },
        { "number": 10, "chinese": "十句", "pinyin": "shí jù" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我想说几句话。", "pinyin": "Wǒ xiǎng shuō jǐ jù huà.", "german": "Ich möchte ein paar Worte sagen." },
        { "chinese": "这句话什么意思？", "pinyin": "Zhè jù huà shénme yìsi?", "german": "Was bedeutet dieser Satz?" }
      ],
      "notes": "几句话 ist eine häufige Wendung für ‹ein paar Worte›."
    },
    {
      "classifier": "种",
      "pinyin": "zhǒng",
      "meaning": "Art / Sorte / Typ",
      "category": "Abstrakt",
      "usage": "Für verschiedene Arten, Sorten oder Typen von Dingen.",
      "questionWord": "几种",
      "table": [
        { "number": 1, "chinese": "一种", "pinyin": "yì zhǒng" },
        { "number": 2, "chinese": "两种", "pinyin": "liǎng zhǒng" },
        { "number": 3, "chinese": "三种", "pinyin": "sān zhǒng" },
        { "number": 4, "chinese": "四种", "pinyin": "sì zhǒng" },
        { "number": 5, "chinese": "五种", "pinyin": "wǔ zhǒng" },
        { "number": 6, "chinese": "六种", "pinyin": "liù zhǒng" },
        { "number": 7, "chinese": "七种", "pinyin": "qī zhǒng" },
        { "number": 8, "chinese": "八种", "pinyin": "bā zhǒng" },
        { "number": 9, "chinese": "九种", "pinyin": "jiǔ zhǒng" },
        { "number": 10, "chinese": "十种", "pinyin": "shí zhǒng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "这里有三种茶。", "pinyin": "Zhèlǐ yǒu sān zhǒng chá.", "german": "Hier gibt es drei Sorten Tee." },
        { "chinese": "这是一种什么花？", "pinyin": "Zhè shì yì zhǒng shénme huā?", "german": "Was für eine Art Blume ist das?" }
      ],
      "notes": "种 für Kategorien und Typen. Häufig in: 各种各样 (alle möglichen Arten)."
    },
    {
      "classifier": "层",
      "pinyin": "céng",
      "meaning": "Stockwerk / Schicht",
      "category": "Abstrakt",
      "usage": "Für Stockwerke von Gebäuden und Schichten allgemein.",
      "questionWord": "几层",
      "table": [
        { "number": 1, "chinese": "一层", "pinyin": "yì céng" },
        { "number": 2, "chinese": "两层", "pinyin": "liǎng céng" },
        { "number": 3, "chinese": "三层", "pinyin": "sān céng" },
        { "number": 4, "chinese": "四层", "pinyin": "sì céng" },
        { "number": 5, "chinese": "五层", "pinyin": "wǔ céng" },
        { "number": 6, "chinese": "六层", "pinyin": "liù céng" },
        { "number": 7, "chinese": "七层", "pinyin": "qī céng" },
        { "number": 8, "chinese": "八层", "pinyin": "bā céng" },
        { "number": 9, "chinese": "九层", "pinyin": "jiǔ céng" },
        { "number": 10, "chinese": "十层", "pinyin": "shí céng" }
      ],
      "specialForms": [],
      "examples": [
        { "chinese": "我住在三层。", "pinyin": "Wǒ zhù zài sān céng.", "german": "Ich wohne im dritten Stock." },
        { "chinese": "这栋楼有几层？", "pinyin": "Zhè dòng lóu yǒu jǐ céng?", "german": "Wie viele Stockwerke hat dieses Gebäude?" }
      ],
      "notes": "一层 = Erdgeschoss (chinesische Zählung beginnt bei 1)."
    }
  ]
};
