// Onomatopoeia Extra Data for Zhongwen Explorer
// 80 zusaetzliche lautmalerische und mimetische Woerter
// UI-Sprache: Deutsch

window.ONOMATOPOEIA_DATA = window.ONOMATOPOEIA_DATA.concat([
  // === GERAEUSCHE ===
  {
    word: '咔咔',
    pinyin: 'kākā',
    meaning: 'knackend, krachend',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt wiederholtes Knacken oder Krachen wieder',
    explanation: '咔咔 ahmt wiederholtes hartes Knacken nach, z.B. beim Zerbrechen von Eis oder Aesten.',
    examples: [
      { chinese: '冰面咔咔地裂开了。', pinyin: 'Bīngmiàn kākā de liè kāi le.', german: 'Die Eisflaeche brach knackend auf.' }
    ],
    related: ['咔嚓'],
    notes: 'Aehnlich wie 咔嚓, aber fuer wiederholte Geraeusche.'
  },
  {
    word: '嗒嗒',
    pinyin: 'dādā',
    meaning: 'klappern, trappeln (Schritte, Hufe)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt das Klappern von Absaetzen oder Pferdehufen wieder',
    explanation: '嗒嗒 ahmt das rhythmische Klappern nach, typisch fuer Stoekelschuhe auf hartem Boden oder Pferdehufe.',
    examples: [
      { chinese: '高跟鞋嗒嗒地响。', pinyin: 'Gāogēnxié dādā de xiǎng.', german: 'Die Stoeckelschuhe klapperten.' },
      { chinese: '马蹄嗒嗒地响。', pinyin: 'Mǎtí dādā de xiǎng.', german: 'Die Pferdehufe klapperten.' }
    ],
    related: ['咚咚'],
    notes: ''
  },
  {
    word: '哗啦',
    pinyin: 'huālā',
    meaning: 'klirrend, rasselnd, scheppernd',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das Geraeusch von herabfallenden oder zusammenstürzenden Gegenstaenden wieder',
    explanation: '哗啦 beschreibt ein lautes Geraeusch, wenn etwas zusammenstuerzt oder zerbricht – z.B. eine Wand, ein Stapel oder Geschirr.',
    examples: [
      { chinese: '哗啦一声，盘子碎了一地。', pinyin: 'Huālā yī shēng, pánzi suì le yī dì.', german: 'Mit einem Scheppern zerbrachen die Teller auf dem Boden.' }
    ],
    related: ['哗哗', '哐当'],
    notes: 'Oft als 哗啦啦 verlaengert fuer anhaltendes Geraeusch.'
  },
  {
    word: '噗',
    pinyin: 'pū',
    meaning: 'pff, prust (Luft, Lachen)',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das Geraeusch von entweichender Luft oder ploetzlichem Losprusten wieder',
    explanation: '噗 ahmt das Geraeusch nach, wenn Luft schnell entweicht oder jemand vor Lachen losprustet.',
    examples: [
      { chinese: '她噗地笑了出来。', pinyin: 'Tā pū de xiào le chūlái.', german: 'Sie prustete vor Lachen los.' }
    ],
    related: [],
    notes: '噗嗤 (pūchī) ist eine Variante fuer Losprusten.'
  },
  {
    word: '噗嗤',
    pinyin: 'pūchī',
    meaning: 'prusten, losprusten (Lachen)',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das ploetzliche Losprusten vor Lachen wieder',
    explanation: '噗嗤 beschreibt das Geraeusch, wenn man ploetzlich und unkontrolliert loslacht, oft durch die Nase.',
    examples: [
      { chinese: '大家噗嗤一声都笑了。', pinyin: 'Dàjiā pūchī yī shēng dōu xiào le.', german: 'Alle prusteten gleichzeitig los.' }
    ],
    related: ['哈哈'],
    notes: ''
  },
  {
    word: '嘎吱',
    pinyin: 'gāzhī',
    meaning: 'knarren, quietschen',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das Knarren von Holz oder Tueren wieder',
    explanation: '嘎吱 ahmt das Knarren alter Holzboeden, Tueren oder Moebel nach.',
    examples: [
      { chinese: '老旧的门嘎吱一声打开了。', pinyin: 'Lǎojiù de mén gāzhī yī shēng dǎkāi le.', german: 'Die alte Tuer oeffnete sich knarrend.' }
    ],
    related: ['吱吱'],
    notes: ''
  },
  {
    word: '隆隆',
    pinyin: 'lónglóng',
    meaning: 'grollen, dumpfes Rumpeln',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt anhaltendes Grollen oder Rumpeln wieder (Donner, Maschinen)',
    explanation: '隆隆 beschreibt ein tiefes, anhaltendes Rumpeln – Donner in der Ferne, schwere Maschinen oder Panzer.',
    examples: [
      { chinese: '远处传来隆隆的雷声。', pinyin: 'Yuǎnchù chuánlái lónglóng de léishēng.', german: 'Aus der Ferne war dumpfes Donnergrollen zu hoeren.' }
    ],
    related: ['轰隆'],
    notes: ''
  },
  {
    word: '嘀嘀咕咕',
    pinyin: 'dīdī-gūgū',
    meaning: 'tuscheln, leise fluestern',
    category: 'Geraeusche',
    pattern: 'AABB',
    usage: 'Beschreibt heimliches Tuscheln und Fluestern',
    explanation: '嘀嘀咕咕 beschreibt leises, heimliches Reden, oft mit der Andeutung, dass man ueber andere spricht.',
    examples: [
      { chinese: '他们在那里嘀嘀咕咕地说什么呢？', pinyin: 'Tāmen zài nàlǐ dīdī-gūgū de shuō shénme ne?', german: 'Was tuscheln die da drueben?' }
    ],
    related: ['嘟嘟囔囔'],
    notes: ''
  },
  {
    word: '叮叮当当',
    pinyin: 'dīngdīng-dāngdāng',
    meaning: 'Geklimper, Geklirr (Metall)',
    category: 'Geraeusche',
    pattern: 'AABB',
    usage: 'Gibt anhaltendes metallisches Klimpern und Klirren wieder',
    explanation: '叮叮当当 ist die AABB-Form von 叮当. Beschreibt laengeres, rhythmisches metallisches Klingen.',
    examples: [
      { chinese: '铁匠叮叮当当地打铁。', pinyin: 'Tiějiàng dīngdīng-dāngdāng de dǎ tiě.', german: 'Der Schmied haemmerte klingend auf das Eisen.' }
    ],
    related: ['叮当'],
    notes: ''
  },
  {
    word: '稀里哗啦',
    pinyin: 'xīli-huālā',
    meaning: 'klirrend, prasselnd (Gegenstaende fallen)',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das Geraeusch von vielen herabfallenden Gegenstaenden oder starkem Regen wieder',
    explanation: '稀里哗啦 beschreibt ein chaotisches, lautes Geraeusch – wie herabfallende Dinge, prasselnder Regen oder auch uebertragen fuer Traenen.',
    examples: [
      { chinese: '她哭得稀里哗啦的。', pinyin: 'Tā kū de xīli-huālā de.', german: 'Sie weinte hemmungslos.' }
    ],
    related: ['哗啦'],
    notes: 'Kann woertlich (Geraeusch) oder uebertragen (heftig weinen) verwendet werden.'
  },
  {
    word: '咝咝',
    pinyin: 'sīsī',
    meaning: 'zischen (leiser als 嘶嘶)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt ein feines Zischen wieder',
    explanation: '咝咝 beschreibt ein feines, leises Zischen, z.B. von Dampf, der aus einer kleinen Oeffnung entweicht.',
    examples: [
      { chinese: '茶壶咝咝地冒着热气。', pinyin: 'Cháhú sīsī de màozhe rèqì.', german: 'Die Teekanne zischte leise und dampfte.' }
    ],
    related: ['嘶嘶'],
    notes: 'Feiner und leiser als 嘶嘶.'
  },
  {
    word: '铮铮',
    pinyin: 'zhēngzhēng',
    meaning: 'klirrend, klingend (Metall)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt helles metallisches Klingen wieder',
    explanation: '铮铮 beschreibt den klaren Klang von Metall. Wird auch in 铁骨铮铮 (eisernen Willen haben) uebertragen verwendet.',
    examples: [
      { chinese: '铮铮铁骨的汉子。', pinyin: 'Zhēngzhēng tiěgǔ de hànzi.', german: 'Ein Mann mit eisernem Willen.' }
    ],
    related: ['叮当'],
    notes: 'Oft in uebertragener Bedeutung fuer Staerke und Entschlossenheit.'
  },
  {
    word: '唧唧',
    pinyin: 'jījī',
    meaning: 'zirpen (Grillen, Insekten)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt das Zirpen von Grillen oder kleinen Insekten wieder',
    explanation: '唧唧 ahmt das Zirpen von Insekten nach. Beruehmt aus dem Gedicht Mulan: 唧唧复唧唧.',
    examples: [
      { chinese: '蟋蟀唧唧地叫着。', pinyin: 'Xīshuài jījī de jiàozhe.', german: 'Die Grille zirpt.' }
    ],
    related: ['叽叽喳喳'],
    notes: 'Beruehmt aus dem Mulan-Gedicht (木兰辞).'
  },
  {
    word: '呲呲',
    pinyin: 'cīcī',
    meaning: 'zischen, brutzeln',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt das Brutzeln von Oel oder Zischen von Dampf wieder',
    explanation: '呲呲 ahmt das Geraeusch von Essen nach, das in heissem Oel bruzzelt.',
    examples: [
      { chinese: '肉在锅里呲呲地响。', pinyin: 'Ròu zài guō lǐ cīcī de xiǎng.', german: 'Das Fleisch brutzelte zischend in der Pfanne.' }
    ],
    related: ['嘶嘶'],
    notes: ''
  },
  {
    word: '砰砰',
    pinyin: 'pēngpēng',
    meaning: 'klopfen, pochen (Herz, Tuer)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt wiederholtes Klopfen oder Pochen wieder',
    explanation: '砰砰 ist die Verdoppelung von 砰. Beschreibt wiederholtes Klopfen, besonders ein pochendes Herz.',
    examples: [
      { chinese: '心砰砰直跳。', pinyin: 'Xīn pēngpēng zhí tiào.', german: 'Das Herz pochte heftig.' }
    ],
    related: ['咚咚', '砰'],
    notes: ''
  },
  {
    word: '啪啪',
    pinyin: 'pāpā',
    meaning: 'klatschen, patschen (wiederholt)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt wiederholtes Klatschen oder Schlagen wieder',
    explanation: '啪啪 ist die Verdoppelung von 啪. Beschreibt wiederholtes Klatschen, z.B. Applaus oder Regentropfen.',
    examples: [
      { chinese: '雨点啪啪地打在窗户上。', pinyin: 'Yǔdiǎn pāpā de dǎ zài chuānghù shàng.', german: 'Die Regentropfen klatschten gegen das Fenster.' }
    ],
    related: ['啪', '噼里啪啦'],
    notes: ''
  },
  {
    word: '咕咚',
    pinyin: 'gūdōng',
    meaning: 'plumps, platsch (ins Wasser fallen)',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das Geraeusch wieder, wenn etwas ins Wasser faellt',
    explanation: '咕咚 ahmt das Geraeusch nach, wenn ein Gegenstand ins Wasser faellt. Auch fuer das Geraeusch beim Herunterschlucken verwendet.',
    examples: [
      { chinese: '石头咕咚一声掉进了水里。', pinyin: 'Shítou gūdōng yī shēng diào jìn le shuǐ lǐ.', german: 'Der Stein fiel mit einem Plumps ins Wasser.' },
      { chinese: '他咕咚咕咚地喝了一大杯水。', pinyin: 'Tā gūdōng gūdōng de hē le yī dà bēi shuǐ.', german: 'Er trank gluckernd ein grosses Glas Wasser.' }
    ],
    related: ['咕噜咕噜'],
    notes: ''
  },
  {
    word: '嗖嗖',
    pinyin: 'sōusōu',
    meaning: 'sausen, pfeifen (schnelles Vorbeiziehen)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt das Geraeusch von etwas wieder, das schnell vorbeizieht',
    explanation: '嗖嗖 ahmt das Pfeifen nach, wenn etwas schnell durch die Luft fliegt – ein Pfeil, eine Kugel oder der Wind.',
    examples: [
      { chinese: '子弹嗖嗖地飞过头顶。', pinyin: 'Zǐdàn sōusōu de fēi guò tóudǐng.', german: 'Die Kugeln pfiffen ueber die Koepfe hinweg.' }
    ],
    related: ['呼呼'],
    notes: ''
  },
  {
    word: '扑通',
    pinyin: 'pūtōng',
    meaning: 'platsch, plumps (schwerer Fall ins Wasser)',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das Geraeusch wieder, wenn etwas Schweres ins Wasser faellt oder jemand hinfaellt',
    explanation: '扑通 beschreibt den Aufprall von etwas Schwerem, besonders ins Wasser. Lauter und schwerer als 咕咚.',
    examples: [
      { chinese: '他扑通一声跳进了水里。', pinyin: 'Tā pūtōng yī shēng tiào jìn le shuǐ lǐ.', german: 'Er sprang mit einem Platsch ins Wasser.' }
    ],
    related: ['咕咚'],
    notes: ''
  },
  {
    word: '嘎巴',
    pinyin: 'gābā',
    meaning: 'knacken, knirschen',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt ein kurzes Knackgeraeusch wieder',
    explanation: '嘎巴 ahmt ein kurzes, trockenes Knackgeraeusch nach, z.B. beim Zerbrechen duenner Gegenstaende.',
    examples: [
      { chinese: '嘎巴一声，铅笔断了。', pinyin: 'Gābā yī shēng, qiānbǐ duàn le.', german: 'Knack! Der Bleistift brach durch.' }
    ],
    related: ['咔嚓'],
    notes: ''
  },
  {
    word: '呼啦',
    pinyin: 'hūlā',
    meaning: 'flattern, rauschen (Fahne, Vorhang)',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt das Flattern von Stoff im Wind wieder',
    explanation: '呼啦 beschreibt das Geraeusch, wenn etwas Leichtes im Wind flattert – eine Fahne, ein Vorhang oder ein Zelt.',
    examples: [
      { chinese: '旗帜呼啦呼啦地飘。', pinyin: 'Qízhì hūlā hūlā de piāo.', german: 'Die Fahne flatterte im Wind.' }
    ],
    related: ['呼呼'],
    notes: ''
  },
  {
    word: '嚓嚓',
    pinyin: 'cācā',
    meaning: 'schaben, kratzen, schneiden',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt das Geraeusch von Schneiden oder Schaben wieder',
    explanation: '嚓嚓 ahmt das Geraeusch nach, wenn etwas geschnitten oder geschabt wird, z.B. eine Schere.',
    examples: [
      { chinese: '剪刀嚓嚓地剪着纸。', pinyin: 'Jiǎndāo cācā de jiǎnzhe zhǐ.', german: 'Die Schere schnitt schnipp-schnapp durch das Papier.' }
    ],
    related: ['咔嚓'],
    notes: ''
  },
  {
    word: '窸窸窣窣',
    pinyin: 'xīxī-sūsū',
    meaning: 'rascheln, wispern (leise)',
    category: 'Geraeusche',
    pattern: 'AABB',
    usage: 'Gibt leises Rascheln oder Wispern wieder',
    explanation: '窸窸窣窣 beschreibt sehr leise, kaum hoerbare Raschelgeraeusche – Papier, Kleidung oder kleine Tiere im Laub.',
    examples: [
      { chinese: '草丛里窸窸窣窣地响。', pinyin: 'Cǎocóng lǐ xīxī-sūsū de xiǎng.', german: 'Im Gebuesch raschelte es leise.' }
    ],
    related: ['沙沙'],
    notes: 'Sehr leise, fast unhoerbar.'
  },
  {
    word: '哔哔',
    pinyin: 'bìbì',
    meaning: 'piepen (elektronisch)',
    category: 'Geraeusche',
    pattern: 'AA',
    usage: 'Gibt elektronische Pieptoene wieder',
    explanation: '哔哔 ahmt elektronische Pieptoene nach, z.B. Kassensysteme, Scanner oder Alarme.',
    examples: [
      { chinese: '收银机哔哔地响了一声。', pinyin: 'Shōuyínjī bìbì de xiǎng le yī shēng.', german: 'Die Kasse piepte.' }
    ],
    related: ['嘀嘀'],
    notes: ''
  },
  {
    word: '轰',
    pinyin: 'hōng',
    meaning: 'Bumm! Wumm! (Explosion)',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Gibt eine laute Explosion oder einen Einschlag wieder',
    explanation: '轰 ahmt den Klang einer Explosion oder eines schweren Aufpralls nach. Staerker und ploetzlicher als 轰隆.',
    examples: [
      { chinese: '轰的一声巨响。', pinyin: 'Hōng de yī shēng jùxiǎng.', german: 'Es gab einen gewaltigen Knall.' }
    ],
    related: ['轰隆', '砰'],
    notes: '轰炸 (hōngzhà) = bombardieren.'
  },

  // === ZUSTAENDE ===
  {
    word: '糊里糊涂',
    pinyin: 'húli-hútú',
    meaning: 'verwirrt, konfus, planlos',
    category: 'Zustaende',
    pattern: 'Andere',
    usage: 'Beschreibt geistige Verwirrung oder Unwissenheit',
    explanation: '糊里糊涂 beschreibt einen Zustand der Verwirrung, in dem man nicht weiss, was vor sich geht.',
    examples: [
      { chinese: '他糊里糊涂地过了一天。', pinyin: 'Tā húli-hútú de guò le yī tiān.', german: 'Er verbrachte den Tag voellig planlos.' }
    ],
    related: ['迷迷糊糊', '稀里糊涂'],
    notes: ''
  },
  {
    word: '安安静静',
    pinyin: 'ānān-jìngjìng',
    meaning: 'ganz still und ruhig',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt voellige Stille und Ruhe',
    explanation: '安安静静 verstaerkt 安静 (ruhig). Beschreibt eine Umgebung oder ein Verhalten, das voellig still ist.',
    examples: [
      { chinese: '教室里安安静静的。', pinyin: 'Jiàoshì lǐ ānān-jìngjìng de.', german: 'Im Klassenzimmer war es ganz still.' }
    ],
    related: ['静静'],
    notes: ''
  },
  {
    word: '舒舒服服',
    pinyin: 'shūshū-fúfú',
    meaning: 'ganz bequem, behaglich',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt grossen Komfort und Behaglichkeit',
    explanation: '舒舒服服 verstaerkt 舒服 (bequem, angenehm). Drueckt ein Gefuehl voelliger Behaglichkeit aus.',
    examples: [
      { chinese: '他舒舒服服地躺在沙发上。', pinyin: 'Tā shūshū-fúfú de tǎng zài shāfā shàng.', german: 'Er lag ganz behaglich auf dem Sofa.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '大大方方',
    pinyin: 'dàdà-fāngfāng',
    meaning: 'selbstsicher, grosszuegig, ungezwungen',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt ein selbstsicheres und natuerliches Auftreten',
    explanation: '大大方方 verstaerkt 大方 (grosszuegig, ungezwungen). Beschreibt jemanden mit selbstbewusstem, natuerlichem Auftreten.',
    examples: [
      { chinese: '她大大方方地走上了舞台。', pinyin: 'Tā dàdà-fāngfāng de zǒu shàng le wǔtái.', german: 'Sie betrat selbstsicher die Buehne.' }
    ],
    related: ['扭扭捏捏'],
    notes: 'Gegenteil von 扭扭捏捏.'
  },
  {
    word: '老老实实',
    pinyin: 'lǎolǎo-shíshí',
    meaning: 'brav, ehrlich, aufrichtig',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt ehrliches, braves oder gehorsames Verhalten',
    explanation: '老老实实 verstaerkt 老实 (ehrlich, brav). Beschreibt jemanden, der sich regelkonform und aufrichtig verhaelt.',
    examples: [
      { chinese: '你老老实实地告诉我。', pinyin: 'Nǐ lǎolǎo-shíshí de gàosù wǒ.', german: 'Sag es mir ganz ehrlich.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '简简单单',
    pinyin: 'jiǎnjiǎn-dāndān',
    meaning: 'ganz einfach, schlicht',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas, das voellig unkompliziert und schlicht ist',
    explanation: '简简单单 verstaerkt 简单 (einfach). Betont die Einfachheit oder Schlichtheit einer Sache.',
    examples: [
      { chinese: '简简单单地过日子。', pinyin: 'Jiǎnjiǎn-dāndān de guò rìzi.', german: 'Ein ganz einfaches Leben fuehren.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '普普通通',
    pinyin: 'pǔpǔ-tōngtōng',
    meaning: 'ganz gewoehnlich, nichts Besonderes',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas voellig Durchschnittliches oder Unauffaelliges',
    explanation: '普普通通 verstaerkt 普通 (gewoehnlich). Betont die Unauffaelligkeit oder Alltaeglichkeit.',
    examples: [
      { chinese: '他是一个普普通通的人。', pinyin: 'Tā shì yī gè pǔpǔ-tōngtōng de rén.', german: 'Er ist ein ganz gewoehnlicher Mensch.' }
    ],
    related: ['马马虎虎'],
    notes: ''
  },
  {
    word: '漂漂亮亮',
    pinyin: 'piàopiào-liàngliàng',
    meaning: 'wunderschoen, bildhuebsch',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt grosse Schoenheit oder ein besonders huebsches Erscheinungsbild',
    explanation: '漂漂亮亮 verstaerkt 漂亮 (schoen). Betont, dass etwas oder jemand besonders huebsch ist.',
    examples: [
      { chinese: '她打扮得漂漂亮亮的。', pinyin: 'Tā dǎban de piàopiào-liàngliàng de.', german: 'Sie hat sich wunderschoen herausgeputzt.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '完完整整',
    pinyin: 'wánwán-zhěngzhěng',
    meaning: 'vollkommen intakt, ganz und gar vollstaendig',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas voellig Vollstaendiges und Unversehrtes',
    explanation: '完完整整 verstaerkt 完整 (vollstaendig). Betont, dass nichts fehlt oder beschaedigt ist.',
    examples: [
      { chinese: '请把故事完完整整地讲一遍。', pinyin: 'Qǐng bǎ gùshì wánwán-zhěngzhěng de jiǎng yī biàn.', german: 'Bitte erzaehl die Geschichte ganz und gar vollstaendig.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '断断续续',
    pinyin: 'duànduàn-xùxù',
    meaning: 'unterbrochen, stockend, abgehackt',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas, das immer wieder unterbrochen wird',
    explanation: '断断续续 verstaerkt die Idee von Unterbrechungen. Beschreibt Reden, Geraeusche oder Handlungen, die immer wieder abbrechen und weitergehen.',
    examples: [
      { chinese: '她断断续续地说出了事情的经过。', pinyin: 'Tā duànduàn-xùxù de shuō chū le shìqíng de jīngguò.', german: 'Sie erzaehlte stockend, was passiert war.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '松松散散',
    pinyin: 'sōngsōng-sǎnsǎn',
    meaning: 'locker, schlampig, unstrukturiert',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas Lockeres, Loses oder schlecht Organisiertes',
    explanation: '松松散散 verstaerkt 松散 (locker, lose). Kann physisch (lockere Kleidung) oder uebertragen (schlampige Organisation) sein.',
    examples: [
      { chinese: '头发松松散散地垂下来。', pinyin: 'Tóufa sōngsōng-sǎnsǎn de chuí xiàlái.', german: 'Die Haare fielen locker herab.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '平平淡淡',
    pinyin: 'píngpíng-dàndàn',
    meaning: 'unspektakulaer, ruhig und gleichmaessig',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt ein ruhiges, ereignisloses Leben oder Auftreten',
    explanation: '平平淡淡 verstaerkt 平淡 (schlicht, fade). Beschreibt ein Leben ohne Hoehen und Tiefen.',
    examples: [
      { chinese: '平平淡淡才是真。', pinyin: 'Píngpíng-dàndàn cái shì zhēn.', german: 'Das Einfache und Ruhige ist das wahre Glueck.' }
    ],
    related: ['简简单单'],
    notes: 'Oft als positiver Lebensgrundsatz zitiert.'
  },
  {
    word: '红红火火',
    pinyin: 'hónghóng-huǒhuǒ',
    meaning: 'bluehend, florierend, erfolgreich',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt ein bluehenes Geschaeft oder ein gelungenes, festliches Ereignis',
    explanation: '红红火火 (woertlich: rot rot, Feuer Feuer) beschreibt Wohlstand, Erfolg und eine lebhafte Atmosphaere. Rot und Feuer sind in China Glueckssymbole.',
    examples: [
      { chinese: '生意做得红红火火。', pinyin: 'Shēngyì zuò de hónghóng-huǒhuǒ.', german: 'Das Geschaeft laeuft praechtig.' }
    ],
    related: ['热热闹闹'],
    notes: 'Typischer Neujahrswunsch.'
  },
  {
    word: '干干巴巴',
    pinyin: 'gāngān-bābā',
    meaning: 'staubtrocken, duerre, langweilig',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas voellig Ausgetrocknetes oder inhaltlich Langweiliges',
    explanation: '干干巴巴 beschreibt etwas, das extrem trocken ist – physisch (trockene Lippen) oder uebertragen (langweilige Rede).',
    examples: [
      { chinese: '他的演讲干干巴巴的，没意思。', pinyin: 'Tā de yǎnjiǎng gāngān-bābā de, méi yìsi.', german: 'Seine Rede war staubtrocken und langweilig.' }
    ],
    related: [],
    notes: ''
  },

  // === GEFUEHLE ===
  {
    word: '心惊胆战',
    pinyin: 'xīnjīng-dǎnzhàn',
    meaning: 'vor Angst zittern, zu Tode erschreckt',
    category: 'Gefuehle',
    pattern: 'Andere',
    usage: 'Beschreibt extreme Angst oder panisches Entsetzen',
    explanation: '心惊胆战 (woertlich: Herz erschreckt, Gallenblase zittert) beschreibt grossen Schrecken oder laemhende Angst.',
    examples: [
      { chinese: '看到那个场面，他心惊胆战。', pinyin: 'Kàndào nàge chǎngmiàn, tā xīnjīng-dǎnzhàn.', german: 'Bei dem Anblick packte ihn panische Angst.' }
    ],
    related: [],
    notes: 'Idiom (成语) mit langer literarischer Tradition.'
  },
  {
    word: '开开朗朗',
    pinyin: 'kāikāi-lǎnglǎng',
    meaning: 'heiter und aufgeschlossen',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt eine heitere, optimistische Persoenlichkeit',
    explanation: '开开朗朗 verstaerkt 开朗 (heiter, aufgeschlossen). Beschreibt jemanden mit froehllichem, offenem Wesen.',
    examples: [
      { chinese: '她性格开开朗朗的。', pinyin: 'Tā xìnggé kāikāi-lǎnglǎng de.', german: 'Sie hat ein heiteres und aufgeschlossenes Wesen.' }
    ],
    related: ['开开心心'],
    notes: ''
  },
  {
    word: '安安心心',
    pinyin: 'ānān-xīnxīn',
    meaning: 'mit ruhigem Herzen, beruhigt',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt einen ruhigen, sorgenfreien Gemuetszustand',
    explanation: '安安心心 verstaerkt 安心 (beruhigt, sorgenfrei). Drueckt aus, dass man sich keine Sorgen macht.',
    examples: [
      { chinese: '安安心心地做你的事吧。', pinyin: 'Ānān-xīnxīn de zuò nǐ de shì ba.', german: 'Mach deine Sache in aller Ruhe.' }
    ],
    related: ['平平安安'],
    notes: ''
  },
  {
    word: '甜甜蜜蜜',
    pinyin: 'tiántián-mìmì',
    meaning: 'suess und innig, honigsüss',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt eine suesse, innige Liebesbeziehung',
    explanation: '甜甜蜜蜜 verstaerkt 甜蜜 (suess, innig). Wird besonders fuer Liebespaare und romantische Stimmungen verwendet.',
    examples: [
      { chinese: '他们俩甜甜蜜蜜的。', pinyin: 'Tāmen liǎ tiántián-mìmì de.', german: 'Die beiden sind ein suesses Liebespaar.' }
    ],
    related: [],
    notes: 'Teresa Tengs beruemhtes Lied heisst 甜蜜蜜.'
  },
  {
    word: '战战兢兢',
    pinyin: 'zhànzhàn-jīngjīng',
    meaning: 'zitternd vor Angst, voller Furcht',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt grossen Respekt oder Angst mit Zittern',
    explanation: '战战兢兢 beschreibt das Zittern vor Angst oder grosser Nervositaet. Auch fuer aeusserste Vorsicht und Ehrfurcht.',
    examples: [
      { chinese: '他战战兢兢地走进了老板的办公室。', pinyin: 'Tā zhànzhàn-jīngjīng de zǒu jìn le lǎobǎn de bàngōngshì.', german: 'Er betrat zitternd das Buero des Chefs.' }
    ],
    related: ['心惊胆战'],
    notes: 'Stammt aus dem klassischen Chinesisch.'
  },
  {
    word: '恍恍惚惚',
    pinyin: 'huǎnghuǎng-hūhū',
    meaning: 'verschwommen, wie im Traum, geistesabwesend',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt einen traumartigen, geistesabwesenden Zustand',
    explanation: '恍恍惚惚 verstaerkt 恍惚 (geistesabwesend, benommen). Beschreibt den Zustand zwischen Traum und Realitaet.',
    examples: [
      { chinese: '她恍恍惚惚地走在街上。', pinyin: 'Tā huǎnghuǎng-hūhū de zǒu zài jiē shàng.', german: 'Sie ging wie in Trance durch die Strasse.' }
    ],
    related: ['迷迷糊糊'],
    notes: ''
  },
  {
    word: '磕磕碰碰',
    pinyin: 'kēkē-pèngpèng',
    meaning: 'sich stossen und anecken, Reibereien haben',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt kleinere Konflikte oder Zusammenstoesse im Alltag',
    explanation: '磕磕碰碰 kann physisch (sich anstossen) oder uebertragen (Meinungsverschiedenheiten, Reibereien) verwendet werden.',
    examples: [
      { chinese: '生活中难免磕磕碰碰。', pinyin: 'Shēnghuó zhōng nánmiǎn kēkē-pèngpèng.', german: 'Im Leben sind Reibereien unvermeidlich.' }
    ],
    related: ['跌跌撞撞'],
    notes: ''
  },
  {
    word: '忐忑不安',
    pinyin: 'tǎntè-bùān',
    meaning: 'aengstlich, unruhig, nervoes',
    category: 'Gefuehle',
    pattern: 'Andere',
    usage: 'Beschreibt innere Unruhe und Angst vor dem Ungewissen',
    explanation: '忐忑不安 beschreibt ein unruhiges, bangliches Gefuehl, wenn man nicht weiss, was kommt. 忐忑 allein bedeutet schon Bangigkeit.',
    examples: [
      { chinese: '等待结果的时候，他忐忑不安。', pinyin: 'Děngdài jiéguǒ de shíhòu, tā tǎntè-bùān.', german: 'Beim Warten auf das Ergebnis war er sehr nervoes.' }
    ],
    related: ['战战兢兢'],
    notes: 'Haeufiger Ausdruck, besonders vor Pruefungen oder wichtigen Entscheidungen.'
  },
  {
    word: '窝窝囊囊',
    pinyin: 'wōwō-nāngnāng',
    meaning: 'aermlich, unfaehig, jaemmerlich',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt ein klaegliches, unfaehiges Auftreten oder Aergernisse, die man runterschluckt',
    explanation: '窝窝囊囊 beschreibt jemanden, der sich nicht durchsetzen kann oder ein jaemmerliches Bild abgibt.',
    examples: [
      { chinese: '别活得窝窝囊囊的。', pinyin: 'Bié huó de wōwō-nāngnāng de.', german: 'Lebe nicht so jaemmerlich.' }
    ],
    related: [],
    notes: 'Umgangssprachlich.'
  },
  {
    word: '凄凄惨惨',
    pinyin: 'qīqī-cǎncǎn',
    meaning: 'erbaermlich, klaeglichlich traurig',
    category: 'Gefuehle',
    pattern: 'AABB',
    usage: 'Beschreibt eine aeusserst traurige und elende Lage',
    explanation: '凄凄惨惨 beschreibt aeusserst traurige, elende Umstaende. Beruehmt aus Li Qingzhaos Gedicht zusammen mit 冷冷清清.',
    examples: [
      { chinese: '凄凄惨惨戚戚。', pinyin: 'Qīqī-cǎncǎn qīqī.', german: 'Traurig, erbaermlich, schmerzlich. (Li Qingzhao)' }
    ],
    related: ['冷冷清清'],
    notes: 'Aus dem beruemhten Ci-Gedicht von Li Qingzhao (宋朝).'
  },

  // === BEWEGUNG ===
  {
    word: '蹦蹦跳跳',
    pinyin: 'bèngbèng-tiàotiào',
    meaning: 'huepfend und springend, herumtollend',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt froehliches Herumhuepfen und -springen',
    explanation: '蹦蹦跳跳 beschreibt lebhaftes Springen und Huepfen – typisch fuer Kinder oder Tiere, die vor Freude herumtollen.',
    examples: [
      { chinese: '小朋友蹦蹦跳跳地跑了过来。', pinyin: 'Xiǎopéngyǒu bèngbèng-tiàotiào de pǎo le guòlái.', german: 'Die Kinder kamen huepfend und springend angelaufen.' }
    ],
    related: ['摇摇晃晃'],
    notes: ''
  },
  {
    word: '来来往往',
    pinyin: 'láilái-wǎngwǎng',
    meaning: 'hin und her, geschaeftiges Kommen und Gehen',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt regen Verkehr oder Kommen und Gehen von Menschen',
    explanation: '来来往往 beschreibt das geschaeftige Hin und Her vieler Menschen – auf der Strasse, in einem Geschaeft oder an einem belebten Ort.',
    examples: [
      { chinese: '街上来来往往的人很多。', pinyin: 'Jiē shàng láilái-wǎngwǎng de rén hěn duō.', german: 'Auf der Strasse herrschte reges Kommen und Gehen.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '哆哆嗦嗦',
    pinyin: 'duōduō-suōsuō',
    meaning: 'zitternd, schlotternd',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt Zittern vor Kaelte, Angst oder Schwaeche',
    explanation: '哆哆嗦嗦 verstaerkt 哆嗦 (zittern). Beschreibt sichtbares Zittern des ganzen Koerpers.',
    examples: [
      { chinese: '他冻得哆哆嗦嗦的。', pinyin: 'Tā dòng de duōduō-suōsuō de.', german: 'Er zitterte vor Kaelte am ganzen Leib.' }
    ],
    related: ['战战兢兢'],
    notes: ''
  },
  {
    word: '吞吞吐吐',
    pinyin: 'tūntūn-tǔtǔ',
    meaning: 'stockend, stotternd, ausweichend',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt zoegerliches, ausweichendes Sprechen',
    explanation: '吞吞吐吐 (woertlich: schlucken schlucken, ausspucken ausspucken) beschreibt jemanden, der etwas sagen will, aber nicht herausrueckt.',
    examples: [
      { chinese: '有什么话你就说，别吞吞吐吐的。', pinyin: 'Yǒu shénme huà nǐ jiù shuō, bié tūntūn-tǔtǔ de.', german: 'Sag einfach, was du sagen willst, drueck dich nicht herum.' }
    ],
    related: ['犹犹豫豫'],
    notes: 'Woertlich: herunterschlucken und wieder ausspucken.'
  },
  {
    word: '晃晃悠悠',
    pinyin: 'huànghuàng-yōuyōu',
    meaning: 'schaukelnd, pendelnd, gemuetlich schlendern',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt langsames Schwanken oder gemuetliches Schlendern',
    explanation: '晃晃悠悠 beschreibt eine langsame, schaukelnde Bewegung – ein Boot auf dem Wasser oder jemand, der gemuetlich umherschlendert.',
    examples: [
      { chinese: '小船晃晃悠悠地在湖面上飘。', pinyin: 'Xiǎo chuán huànghuàng-yōuyōu de zài húmiàn shàng piāo.', german: 'Das kleine Boot schaukelte gemuetlich auf dem See.' }
    ],
    related: ['摇摇晃晃'],
    notes: 'Ruhiger und gemuetlicher als 摇摇晃晃.'
  },
  {
    word: '风风火火',
    pinyin: 'fēngfēng-huǒhuǒ',
    meaning: 'stuermisch, voller Tatendrang',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt energisches, stuermisches Handeln',
    explanation: '风风火火 (woertlich: Wind Wind Feuer Feuer) beschreibt jemanden, der energisch und mit grossem Elan handelt, oft etwas ueberstuerzt.',
    examples: [
      { chinese: '她风风火火地赶了过来。', pinyin: 'Tā fēngfēng-huǒhuǒ de gǎn le guòlái.', german: 'Sie stuermte energisch herbei.' }
    ],
    related: ['匆匆忙忙'],
    notes: ''
  },
  {
    word: '推推搡搡',
    pinyin: 'tuītuī-sǎngsǎng',
    meaning: 'sich gegenseitig schubsen und draengeln',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt gegenseitiges Schubsen in einer Menge',
    explanation: '推推搡搡 beschreibt das Draengeln und Schubsen, typisch fuer ueberfuellte Orte oder eine aufgebrachte Menge.',
    examples: [
      { chinese: '人群推推搡搡地往前挤。', pinyin: 'Rénqún tuītuī-sǎngsǎng de wǎng qián jǐ.', german: 'Die Menge draengelte und schubste sich vorwaerts.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '飘飘',
    pinyin: 'piāopiāo',
    meaning: 'schwebend, flatternd',
    category: 'Bewegung',
    pattern: 'AA',
    usage: 'Beschreibt leichtes Schweben oder Flattern in der Luft',
    explanation: '飘飘 ist die Verdoppelung von 飘 (schweben, flattern). Beschreibt leichte, elegante Bewegung in der Luft.',
    examples: [
      { chinese: '雪花飘飘地落下来。', pinyin: 'Xuěhuā piāopiāo de luò xiàlái.', german: 'Die Schneeflocken schwebten sanft herab.' }
    ],
    related: [],
    notes: '飘飘然 (piāopiāorán) = sich wie auf Wolken fuehlen, uebergluecklich.'
  },
  {
    word: '踉踉跄跄',
    pinyin: 'liàngliàng-qiàngqiàng',
    meaning: 'taumelnd, torkelnd',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt unsicheres, torkelndes Gehen',
    explanation: '踉踉跄跄 beschreibt jemanden, der beim Gehen immer wieder ins Stolpern geraet – wie ein Betrunkener oder ein verletzter Mensch.',
    examples: [
      { chinese: '他踉踉跄跄地走了几步就倒下了。', pinyin: 'Tā liàngliàng-qiàngqiàng de zǒu le jǐ bù jiù dǎo xià le.', german: 'Er torkelte ein paar Schritte und brach zusammen.' }
    ],
    related: ['跌跌撞撞', '摇摇晃晃'],
    notes: 'Literarischer als 跌跌撞撞.'
  },
  {
    word: '歪歪扭扭',
    pinyin: 'wāiwāi-niǔniǔ',
    meaning: 'krumm und schief, verzogen',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt etwas Schiefes, Krummes oder Verzogenes',
    explanation: '歪歪扭扭 beschreibt etwas, das voellig schief oder krumm ist – Schrift, ein Zaun oder eine Reihe.',
    examples: [
      { chinese: '他写的字歪歪扭扭的。', pinyin: 'Tā xiě de zì wāiwāi-niǔniǔ de.', german: 'Seine Schrift war ganz krumm und schief.' }
    ],
    related: ['整整齐齐'],
    notes: 'Gegenteil von 整整齐齐.'
  },
  {
    word: '团团转',
    pinyin: 'tuántuán zhuàn',
    meaning: 'sich im Kreis drehen, hektisch hin und her',
    category: 'Bewegung',
    pattern: 'Andere',
    usage: 'Beschreibt hektisches Hin-und-Herlaufen oder Im-Kreis-Drehen',
    explanation: '团团转 beschreibt, wie jemand voller Hektik im Kreis rennt, ohne voranzukommen.',
    examples: [
      { chinese: '他急得团团转。', pinyin: 'Tā jí de tuántuán zhuàn.', german: 'Er rannte vor Aufregung im Kreis herum.' }
    ],
    related: ['急急忙忙'],
    notes: ''
  },
  {
    word: '大摇大摆',
    pinyin: 'dà yáo dà bǎi',
    meaning: 'stolzierend, ungeniert schlendernd',
    category: 'Bewegung',
    pattern: 'Andere',
    usage: 'Beschreibt ein uebertrieben selbstbewusstes, stolzes Gehen',
    explanation: '大摇大摆 beschreibt jemanden, der sich mit uebertrieben laeessiger oder arroganter Koerperhaltung bewegt.',
    examples: [
      { chinese: '他大摇大摆地走进了会议室。', pinyin: 'Tā dà yáo dà bǎi de zǒu jìn le huìyìshì.', german: 'Er stolzierte laeessig in den Konferenzraum.' }
    ],
    related: ['大大方方'],
    notes: 'Oft mit leicht negativer Konnotation (Arroganz).'
  },
  {
    word: '拖拖拉拉',
    pinyin: 'tuōtuō-lālā',
    meaning: 'troedeln, schleppend, saumselig',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt langsames, hinterherhinkendes Verhalten',
    explanation: '拖拖拉拉 verstaerkt 拖拉 (troedeln, hinauszoegern). Beschreibt jemanden, der alles unnoetig in die Laenge zieht.',
    examples: [
      { chinese: '别拖拖拉拉的，快点！', pinyin: 'Bié tuōtuō-lālā de, kuài diǎn!', german: 'Hoer auf zu troedeln, beeil dich!' }
    ],
    related: ['慢慢'],
    notes: ''
  },
  {
    word: '颤颤巍巍',
    pinyin: 'chànchàn-wēiwēi',
    meaning: 'zittrig, wackelig (alt, gebrechlich)',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt zittriges, unsicheres Gehen alter oder schwacher Menschen',
    explanation: '颤颤巍巍 beschreibt die zittrigen, unsicheren Bewegungen eines alten oder koerperlich schwachen Menschen.',
    examples: [
      { chinese: '老奶奶颤颤巍巍地站了起来。', pinyin: 'Lǎo nǎinai chànchàn-wēiwēi de zhàn le qǐlái.', german: 'Die alte Frau stand zittrig auf.' }
    ],
    related: ['摇摇晃晃'],
    notes: ''
  },
  {
    word: '蹑手蹑脚',
    pinyin: 'niè shǒu niè jiǎo',
    meaning: 'auf Zehenspitzen, voellig lautlos',
    category: 'Bewegung',
    pattern: 'Andere',
    usage: 'Beschreibt lautloses Schleichen auf Zehenspitzen',
    explanation: '蹑手蹑脚 beschreibt jemanden, der sich auf Zehenspitzen voellig lautlos fortbewegt, um niemanden zu wecken oder nicht bemerkt zu werden.',
    examples: [
      { chinese: '他蹑手蹑脚地走进了卧室。', pinyin: 'Tā niè shǒu niè jiǎo de zǒu jìn le wòshì.', german: 'Er schlich auf Zehenspitzen ins Schlafzimmer.' }
    ],
    related: ['悄悄', '偷偷摸摸'],
    notes: 'Woertlich: Haende auf Zehenspitzen, Fuesse auf Zehenspitzen.'
  },
  {
    word: '弯弯曲曲',
    pinyin: 'wānwān-qūqū',
    meaning: 'kurvenreich, gewunden, verschlungen',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt einen gewundenen, kurvenreichen Weg oder Fluss',
    explanation: '弯弯曲曲 verstaerkt 弯曲 (gekruemmt, gewunden). Beschreibt einen Pfad, Fluss oder Weg mit vielen Windungen.',
    examples: [
      { chinese: '一条弯弯曲曲的小路通向山顶。', pinyin: 'Yī tiáo wānwān-qūqū de xiǎo lù tōng xiàng shāndǐng.', german: 'Ein verschlungener Pfad fuehrte zum Gipfel.' }
    ],
    related: ['歪歪扭扭'],
    notes: ''
  },
  {
    word: '东张西望',
    pinyin: 'dōng zhāng xī wàng',
    meaning: 'sich neugierig umblicken, umherspaaehen',
    category: 'Bewegung',
    pattern: 'Andere',
    usage: 'Beschreibt neugieriges oder nervoeeses Umherspaaehen',
    explanation: '东张西望 (woertlich: nach Osten schauen, nach Westen blicken) beschreibt jemanden, der neugierig oder nervoes in alle Richtungen schaut.',
    examples: [
      { chinese: '他东张西望地走在陌生的街上。', pinyin: 'Tā dōng zhāng xī wàng de zǒu zài mòshēng de jiē shàng.', german: 'Er ging neugierig umherspaeaehend durch die fremde Strasse.' }
    ],
    related: [],
    notes: ''
  },
  {
    word: '纷纷扬扬',
    pinyin: 'fēnfēn-yángyáng',
    meaning: 'wirbelnd, in dichten Schwaden herabfallend',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt Schnee, Blaetter oder Papier, die wirbelnd herabfallen',
    explanation: '纷纷扬扬 beschreibt den Anblick von vielen kleinen Dingen, die leicht und wirbellnd durch die Luft fallen.',
    examples: [
      { chinese: '大雪纷纷扬扬地下着。', pinyin: 'Dà xuě fēnfēn-yángyáng de xiàzhe.', german: 'Dichter Schnee fiel wirbelnd vom Himmel.' }
    ],
    related: ['飘飘'],
    notes: 'Sehr bildhaft und poetisch.'
  },
  {
    word: '慌慌张张',
    pinyin: 'huānghuāng-zhāngzhāng',
    meaning: 'panisch, aufgeregt, nervoes',
    category: 'Bewegung',
    pattern: 'AABB',
    usage: 'Beschreibt panisches, hektisches Verhalten aus Angst oder Nervositaet',
    explanation: '慌慌张张 verstaerkt 慌张 (panisch, nervoes). Beschreibt jemanden, der vor Aufregung kopflos handelt.',
    examples: [
      { chinese: '他慌慌张张地跑进来说出事了。', pinyin: 'Tā huānghuāng-zhāngzhāng de pǎo jìnlái shuō chū shì le.', german: 'Er kam panisch hereingelaufen und sagte, etwas sei passiert.' }
    ],
    related: ['急急忙忙', '匆匆忙忙'],
    notes: ''
  },
  {
    word: '叽里咕噜',
    pinyin: 'jīli-gūlū',
    meaning: 'unverstaendliches Gemurmel, Kauderwelsch',
    category: 'Geraeusche',
    pattern: 'Andere',
    usage: 'Beschreibt unverstaendliches oder fremdsprachiges Gerede',
    explanation: '叽里咕噜 beschreibt Reden, das man nicht verstehen kann – sei es, weil es zu leise, zu schnell oder in einer Fremdsprache ist.',
    examples: [
      { chinese: '他叽里咕噜地说了一通，我一句也没听懂。', pinyin: 'Tā jīli-gūlū de shuō le yī tòng, wǒ yī jù yě méi tīng dǒng.', german: 'Er redete einen ganzen Schwall unverstaendliches Zeug, ich verstand kein Wort.' }
    ],
    related: ['嘟嘟囔囔'],
    notes: ''
  },
  {
    word: '稀稀拉拉',
    pinyin: 'xīxī-lālā',
    meaning: 'spaerlich, vereinzelt, duenn gesaet',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas Spaerliches, Vereinzeltes oder wenig Frequentiertes',
    explanation: '稀稀拉拉 beschreibt etwas, das duenn gesaet ist – wenige Zuschauer, spaerlicher Regen oder vereinzelte Baeume.',
    examples: [
      { chinese: '观众稀稀拉拉的，没几个人。', pinyin: 'Guānzhòng xīxī-lālā de, méi jǐ gè rén.', german: 'Es waren nur spaerlich Zuschauer da, kaum jemand.' }
    ],
    related: ['密密麻麻'],
    notes: 'Gegenteil von 密密麻麻.'
  },
  {
    word: '模模糊糊',
    pinyin: 'mómó-hūhū',
    meaning: 'verschwommen, undeutlich, vage',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas Undeutliches, sei es Sicht, Erinnerung oder Aussage',
    explanation: '模模糊糊 verstaerkt 模糊 (verschwommen, unklar). Kann sich auf unscharfes Sehen, vage Erinnerungen oder unklare Aussagen beziehen.',
    examples: [
      { chinese: '我只有一个模模糊糊的印象。', pinyin: 'Wǒ zhǐ yǒu yī gè mómó-hūhū de yìnxiàng.', german: 'Ich habe nur eine vage Erinnerung daran.' }
    ],
    related: ['迷迷糊糊', '清清楚楚'],
    notes: 'Gegenteil von 清清楚楚.'
  },
  {
    word: '瑟瑟发抖',
    pinyin: 'sèsè fādǒu',
    meaning: 'vor Kaelte oder Angst zittern',
    category: 'Bewegung',
    pattern: 'Andere',
    usage: 'Beschreibt Zittern vor Kaelte, Angst oder Schock',
    explanation: '瑟瑟发抖 beschreibt sichtbares Zittern am ganzen Koerper. 瑟瑟 allein kann auch das Rauschen von Wind in Blaettern beschreiben.',
    examples: [
      { chinese: '她站在风中瑟瑟发抖。', pinyin: 'Tā zhàn zài fēng zhōng sèsè fādǒu.', german: 'Sie stand im Wind und zitterte am ganzen Leib.' }
    ],
    related: ['哆哆嗦嗦'],
    notes: ''
  },
  {
    word: '花花绿绿',
    pinyin: 'huāhuā-lǜlǜ',
    meaning: 'bunt, farbenfroh, schillernd',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas sehr Buntes und Farbenprächtiges',
    explanation: '花花绿绿 beschreibt eine bunte, farbenfrohe Vielfalt – bunte Kleidung, Dekorationen oder ein blumiger Garten.',
    examples: [
      { chinese: '商店里摆满了花花绿绿的商品。', pinyin: 'Shāngdiàn lǐ bǎi mǎn le huāhuā-lǜlǜ de shāngpǐn.', german: 'Das Geschaeft war voll mit bunten Waren.' }
    ],
    related: ['漂漂亮亮'],
    notes: ''
  },
  {
    word: '规规矩矩',
    pinyin: 'guīguī-jǔjǔ',
    meaning: 'ordnungsgemaess, vorschriftsmaessig, brav',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt regelkonformes, braves Verhalten',
    explanation: '规规矩矩 verstaerkt 规矩 (Regel, ordentlich). Beschreibt jemanden, der sich an alle Regeln haelt und sich korrekt verhaelt.',
    examples: [
      { chinese: '他规规矩矩地坐在那里。', pinyin: 'Tā guīguī-jǔjǔ de zuò zài nàlǐ.', german: 'Er sass brav und ordentlich dort.' }
    ],
    related: ['老老实实'],
    notes: ''
  },
  {
    word: '里里外外',
    pinyin: 'lǐlǐ-wàiwài',
    meaning: 'innen und aussen, von allen Seiten',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt etwas, das vollstaendig innen und aussen betrifft',
    explanation: '里里外外 bedeutet sowohl innerhalb als auch ausserhalb, also ueberall und vollstaendig.',
    examples: [
      { chinese: '她把房子里里外外打扫了一遍。', pinyin: 'Tā bǎ fángzi lǐlǐ-wàiwài dǎsǎo le yī biàn.', german: 'Sie putzte das ganze Haus von innen und aussen.' }
    ],
    related: ['干干净净'],
    notes: ''
  },
  {
    word: '浑浑噩噩',
    pinyin: 'húnhún-èè',
    meaning: 'dahinvegetierend, stumpfsinnig, ohne Lebensziel',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt ein zielloses, gedankenloses Dahinleben',
    explanation: '浑浑噩噩 beschreibt einen Zustand geistiger Traegheit und Ziellosigkeit, in dem man ohne Sinn und Verstand durch den Tag geht.',
    examples: [
      { chinese: '他不能再这样浑浑噩噩地过下去了。', pinyin: 'Tā bù néng zài zhèyàng húnhún-èè de guò xiàqù le.', german: 'Er kann nicht weiter so ziellos dahinvegetieren.' }
    ],
    related: ['迷迷糊糊'],
    notes: ''
  },
  {
    word: '嘁嘁喳喳',
    pinyin: 'qīqī-zhāzhā',
    meaning: 'fluestern, heimlich tuscheln',
    category: 'Geraeusche',
    pattern: 'AABB',
    usage: 'Beschreibt leises, heimliches Tuscheln in einer Gruppe',
    explanation: '嘁嘁喳喳 beschreibt das Gefluster einer Gruppe, oft hinter dem Ruecken anderer.',
    examples: [
      { chinese: '同事们在背后嘁嘁喳喳地议论着。', pinyin: 'Tóngshìmen zài bèihòu qīqī-zhāzhā de yìlùnzhe.', german: 'Die Kollegen tuschelten hinter seinem Ruecken.' }
    ],
    related: ['嘀嘀咕咕', '叽叽喳喳'],
    notes: 'Oft mit negativer Konnotation (ueber andere reden).'
  },
  {
    word: '认认真真',
    pinyin: 'rènrèn-zhēnzhēn',
    meaning: 'aeusserst gewissenhaft, sehr sorgfaeltig',
    category: 'Zustaende',
    pattern: 'AABB',
    usage: 'Beschreibt aeusserst sorgfaeltiges und gewissenhaftes Arbeiten',
    explanation: '认认真真 verstaerkt 认真 (gewissenhaft, ernst). Betont, dass man etwas mit voller Konzentration und Sorgfalt tut.',
    examples: [
      { chinese: '她认认真真地写完了作业。', pinyin: 'Tā rènrèn-zhēnzhēn de xiě wán le zuòyè.', german: 'Sie erledigte ihre Hausaufgaben aeusserst gewissenhaft.' }
    ],
    related: ['老老实实'],
    notes: ''
  },
  {
    word: '滴溜溜',
    pinyin: 'dīliūliū',
    meaning: 'sich schnell drehend, wirbelnd (Augen, Kreisel)',
    category: 'Bewegung',
    pattern: 'ABB',
    usage: 'Beschreibt schnelles Drehen oder rollende Augen',
    explanation: '滴溜溜 beschreibt eine schnelle Drehbewegung, typisch fuer rollende Augen (wenn jemand nachdenkt) oder einen Kreisel.',
    examples: [
      { chinese: '她的眼珠滴溜溜地转。', pinyin: 'Tā de yǎnzhū dīliūliū de zhuǎn.', german: 'Ihre Augen rollten schnell hin und her (sie ueberlegte).' }
    ],
    related: [],
    notes: 'ABB-Muster: seltener als AA oder AABB.'
  },
  {
    word: '黑咕隆咚',
    pinyin: 'hēigu-lōngdōng',
    meaning: 'stockfinster, pechschwarz',
    category: 'Zustaende',
    pattern: 'Andere',
    usage: 'Beschreibt voellige Dunkelheit',
    explanation: '黑咕隆咚 beschreibt einen Ort, an dem es so dunkel ist, dass man die Hand vor Augen nicht sehen kann.',
    examples: [
      { chinese: '屋子里黑咕隆咚的，什么也看不见。', pinyin: 'Wūzi lǐ hēigu-lōngdōng de, shénme yě kàn bù jiàn.', german: 'Im Raum war es stockfinster, man konnte nichts sehen.' }
    ],
    related: [],
    notes: 'Umgangssprachlich und sehr bildhaft.'
  }
]);
