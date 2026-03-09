window.GRAMMAR_DATA = window.GRAMMAR_DATA.concat([
  {
    pattern: '既...又...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'sowohl ... als auch ...',
    formation: '既 + Eigenschaft/Verb A + 又 + Eigenschaft/Verb B',
    explanation: 'Wird verwendet, um zwei gleichzeitig zutreffende Eigenschaften oder Handlungen auszudruecken. Beide Teile haben gleiches Gewicht.',
    examples: [
      { chinese: '这个房子既大又便宜。', pinyin: 'Zhège fángzi jì dà yòu piányi.', german: 'Dieses Haus ist sowohl gross als auch guenstig.' },
      { chinese: '她既聪明又努力。', pinyin: 'Tā jì cōngmíng yòu nǔlì.', german: 'Sie ist sowohl klug als auch fleissig.' },
      { chinese: '这道菜既好吃又好看。', pinyin: 'Zhè dào cài jì hǎochī yòu hǎokàn.', german: 'Dieses Gericht ist sowohl lecker als auch huebsch anzusehen.' }
    ],
    relatedPatterns: ['又...又...', '不但...而且...'],
    notes: 'Im Vergleich zu "又...又..." ist "既...又..." etwas formeller und wird haeufiger in der Schriftsprache verwendet.'
  },
  {
    pattern: '不管...都...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'egal ob ... , in jedem Fall ...',
    formation: '不管 + Bedingung/Fragewort + 都/也 + Ergebnis',
    explanation: 'Drueckt aus, dass das Ergebnis unabhaengig von der Bedingung gleich bleibt. Betont die Unveraenderlichkeit des Ergebnisses.',
    examples: [
      { chinese: '不管天气怎么样，我都去跑步。', pinyin: 'Bùguǎn tiānqì zěnmeyàng, wǒ dōu qù pǎobù.', german: 'Egal wie das Wetter ist, ich gehe in jedem Fall joggen.' },
      { chinese: '不管你同意不同意，我都要这样做。', pinyin: 'Bùguǎn nǐ tóngyì bù tóngyì, wǒ dōu yào zhèyàng zuò.', german: 'Egal ob du zustimmst oder nicht, ich werde es so machen.' },
      { chinese: '不管多贵，她都想买。', pinyin: 'Bùguǎn duō guì, tā dōu xiǎng mǎi.', german: 'Egal wie teuer es ist, sie will es kaufen.' }
    ],
    relatedPatterns: ['无论...都...', '不论...都...'],
    notes: '"不管" ist umgangssprachlicher als "无论" und "不论", die eher in formellen Kontexten verwendet werden.'
  },
  {
    pattern: '尽管...还是...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'obwohl ... , dennoch ...',
    formation: '尽管 + Zugestaendnis + 还是/仍然 + Ergebnis',
    explanation: 'Leitet ein Zugestaendnis ein und betont, dass das Ergebnis trotz der genannten Umstaende unveraendert bleibt.',
    examples: [
      { chinese: '尽管很累，他还是坚持工作。', pinyin: 'Jǐnguǎn hěn lèi, tā háishi jiānchí gōngzuò.', german: 'Obwohl er sehr muede ist, arbeitet er dennoch weiter.' },
      { chinese: '尽管下雨了，比赛还是照常进行。', pinyin: 'Jǐnguǎn xià yǔ le, bǐsài háishi zhàocháng jìnxíng.', german: 'Obwohl es regnete, fand das Spiel dennoch wie geplant statt.' },
      { chinese: '尽管他反对，我们还是决定去旅行。', pinyin: 'Jǐnguǎn tā fǎnduì, wǒmen háishi juédìng qù lǚxíng.', german: 'Obwohl er dagegen war, haben wir uns dennoch fuer die Reise entschieden.' }
    ],
    relatedPatterns: ['虽然...但是...', '即使...也...'],
    notes: '"尽管" betont staerker als "虽然", dass das Zugestaendnis real und bedeutend ist.'
  },
  {
    pattern: '与其...不如...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'anstatt ... , lieber ...',
    formation: '与其 + weniger bevorzugte Option + 不如 + bevorzugte Option',
    explanation: 'Drueckt eine Praeferenz aus, indem zwei Optionen verglichen werden. Die zweite Option wird bevorzugt.',
    examples: [
      { chinese: '与其坐公交车，不如骑自行车。', pinyin: 'Yǔqí zuò gōngjiāochē, bùrú qí zìxíngchē.', german: 'Anstatt den Bus zu nehmen, fahre ich lieber Fahrrad.' },
      { chinese: '与其在家看电视，不如出去走走。', pinyin: 'Yǔqí zài jiā kàn diànshì, bùrú chūqù zǒuzou.', german: 'Anstatt zu Hause fernzusehen, gehe ich lieber spazieren.' },
      { chinese: '与其抱怨，不如想办法解决问题。', pinyin: 'Yǔqí bàoyuàn, bùrú xiǎng bànfǎ jiějué wèntí.', german: 'Anstatt sich zu beschweren, suche lieber nach einer Loesung.' }
    ],
    relatedPatterns: ['宁可...也不...'],
    notes: '"与其...不如..." drueckt eine rationale Praeferenz aus, waehrend "宁可...也不..." eine entschlossenere Haltung zeigt.'
  },
  {
    pattern: '即使...也...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'selbst wenn ... , trotzdem ...',
    formation: '即使 + hypothetische Bedingung + 也 + Ergebnis',
    explanation: 'Drueckt aus, dass das Ergebnis auch unter einer hypothetischen oder extremen Bedingung unveraendert bleibt. Staerker als "虽然...但是...".',
    examples: [
      { chinese: '即使下雪，我也要去上班。', pinyin: 'Jíshǐ xià xuě, wǒ yě yào qù shàngbān.', german: 'Selbst wenn es schneit, gehe ich trotzdem zur Arbeit.' },
      { chinese: '即使你不告诉我，我也会知道。', pinyin: 'Jíshǐ nǐ bú gàosu wǒ, wǒ yě huì zhīdào.', german: 'Selbst wenn du es mir nicht sagst, werde ich es trotzdem erfahren.' },
      { chinese: '即使很难，我们也不能放弃。', pinyin: 'Jíshǐ hěn nán, wǒmen yě bù néng fàngqì.', german: 'Selbst wenn es schwer ist, duerfen wir nicht aufgeben.' }
    ],
    relatedPatterns: ['尽管...还是...', '就算...也...'],
    notes: '"即使" bezieht sich oft auf hypothetische Situationen, waehrend "尽管" sich auf reale Situationen bezieht.'
  },
  {
    pattern: '越...越...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'je mehr ... , desto mehr ...',
    formation: '越 + Verb/Adjektiv A + 越 + Verb/Adjektiv B',
    explanation: 'Drueckt eine proportionale Beziehung aus: Wenn A zunimmt, nimmt auch B zu.',
    examples: [
      { chinese: '中文越学越有意思。', pinyin: 'Zhōngwén yuè xué yuè yǒu yìsi.', german: 'Je mehr man Chinesisch lernt, desto interessanter wird es.' },
      { chinese: '天气越来越冷了。', pinyin: 'Tiānqì yuè lái yuè lěng le.', german: 'Das Wetter wird immer kaelter.' },
      { chinese: '他越想越生气。', pinyin: 'Tā yuè xiǎng yuè shēngqì.', german: 'Je mehr er darueber nachdachte, desto wuetender wurde er.' }
    ],
    relatedPatterns: ['越来越...'],
    notes: '"越来越..." ist eine Sonderform und bedeutet "immer mehr/immer ...".'
  },
  {
    pattern: '之所以...是因为...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'der Grund, warum ... , ist, dass ...',
    formation: 'Subjekt + 之所以 + Ergebnis + 是因为 + Ursache',
    explanation: 'Betont die Ursache eines bekannten Ergebnisses. Die Struktur stellt das Ergebnis an den Anfang und liefert dann die Erklaerung.',
    examples: [
      { chinese: '他之所以成功，是因为他很努力。', pinyin: 'Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.', german: 'Der Grund, warum er erfolgreich ist, ist, dass er sehr fleissig ist.' },
      { chinese: '我之所以迟到，是因为路上堵车了。', pinyin: 'Wǒ zhī suǒyǐ chídào, shì yīnwèi lùshang dǔchē le.', german: 'Der Grund, warum ich zu spaet kam, ist, dass es einen Stau gab.' },
      { chinese: '她之所以学中文，是因为她喜欢中国文化。', pinyin: 'Tā zhī suǒyǐ xué Zhōngwén, shì yīnwèi tā xǐhuan Zhōngguó wénhuà.', german: 'Der Grund, warum sie Chinesisch lernt, ist, dass sie die chinesische Kultur mag.' }
    ],
    relatedPatterns: ['因为...所以...'],
    notes: 'Diese Struktur ist formeller als einfaches "因为...所以..." und wird haeufig in Erklaerungen und Argumentationen verwendet.'
  },
  {
    pattern: '不但...而且...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'nicht nur ... , sondern auch ...',
    formation: '不但 + Aussage A + 而且 + Aussage B (steigernd)',
    explanation: 'Verbindet zwei Aussagen, wobei die zweite eine Steigerung der ersten darstellt. Das Subjekt kann gleich oder verschieden sein.',
    examples: [
      { chinese: '他不但会说中文，而且说得很好。', pinyin: 'Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.', german: 'Er kann nicht nur Chinesisch sprechen, sondern spricht es auch sehr gut.' },
      { chinese: '这个地方不但漂亮，而且很安静。', pinyin: 'Zhège dìfang búdàn piàoliang, érqiě hěn ānjìng.', german: 'Dieser Ort ist nicht nur schoen, sondern auch sehr ruhig.' },
      { chinese: '不但我去，而且他也去。', pinyin: 'Búdàn wǒ qù, érqiě tā yě qù.', german: 'Nicht nur ich gehe, sondern er geht auch.' }
    ],
    relatedPatterns: ['既...又...', '不仅...还...'],
    notes: 'Bei unterschiedlichen Subjekten steht "不但" vor dem ersten Subjekt. "不仅...还..." ist eine haeufige Alternative.'
  },
  {
    pattern: '只要...就...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'solange ... , dann ...',
    formation: '只要 + Bedingung + 就 + Ergebnis',
    explanation: 'Drueckt eine hinreichende Bedingung aus: Wenn die Bedingung erfuellt ist, tritt das Ergebnis ein.',
    examples: [
      { chinese: '只要你努力，就一定能成功。', pinyin: 'Zhǐyào nǐ nǔlì, jiù yídìng néng chénggōng.', german: 'Solange du dich anstrengst, wirst du sicher Erfolg haben.' },
      { chinese: '只要有时间，我就去锻炼。', pinyin: 'Zhǐyào yǒu shíjiān, wǒ jiù qù duànliàn.', german: 'Solange ich Zeit habe, gehe ich Sport treiben.' },
      { chinese: '只要天气好，我们就去爬山。', pinyin: 'Zhǐyào tiānqì hǎo, wǒmen jiù qù páshān.', german: 'Solange das Wetter gut ist, gehen wir wandern.' }
    ],
    relatedPatterns: ['只有...才...'],
    notes: '"只要...就..." (hinreichende Bedingung) vs. "只有...才..." (notwendige Bedingung) - der Unterschied ist wichtig!'
  },
  {
    pattern: '只有...才...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'nur wenn ... , erst dann ...',
    formation: '只有 + notwendige Bedingung + 才 + Ergebnis',
    explanation: 'Drueckt eine notwendige Bedingung aus: Das Ergebnis tritt nur ein, wenn die Bedingung erfuellt ist.',
    examples: [
      { chinese: '只有多练习，才能学好中文。', pinyin: 'Zhǐyǒu duō liànxí, cái néng xuéhǎo Zhōngwén.', german: 'Nur wenn man viel uebt, kann man Chinesisch gut lernen.' },
      { chinese: '只有亲自去看，才知道有多美。', pinyin: 'Zhǐyǒu qīnzì qù kàn, cái zhīdào yǒu duō měi.', german: 'Nur wenn man selbst hingeht und es sieht, weiss man, wie schoen es ist.' },
      { chinese: '只有努力工作，才能买得起房子。', pinyin: 'Zhǐyǒu nǔlì gōngzuò, cái néng mǎi de qǐ fángzi.', german: 'Nur wenn man hart arbeitet, kann man sich ein Haus leisten.' }
    ],
    relatedPatterns: ['只要...就...'],
    notes: '"只有...才..." ist restriktiver als "只要...就...". Es betont, dass es keinen anderen Weg gibt.'
  },
  {
    pattern: '宁可...也不...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'lieber ... als ...',
    formation: '宁可 + bevorzugte (haertere) Option + 也不 + abgelehnte Option',
    explanation: 'Drueckt eine entschlossene Praeferenz aus, bei der man sogar Nachteile in Kauf nimmt, um die andere Option zu vermeiden.',
    examples: [
      { chinese: '我宁可走路，也不坐他的车。', pinyin: 'Wǒ nìngkě zǒulù, yě bú zuò tā de chē.', german: 'Ich gehe lieber zu Fuss, als in sein Auto zu steigen.' },
      { chinese: '她宁可不吃饭，也不迟到。', pinyin: 'Tā nìngkě bù chīfàn, yě bú chídào.', german: 'Sie verzichtet lieber aufs Essen, als zu spaet zu kommen.' },
      { chinese: '他宁可辛苦一点，也不求别人帮忙。', pinyin: 'Tā nìngkě xīnkǔ yìdiǎn, yě bù qiú biéren bāngmáng.', german: 'Er nimmt lieber etwas Muehe auf sich, als andere um Hilfe zu bitten.' }
    ],
    relatedPatterns: ['与其...不如...'],
    notes: '"宁可...也不..." zeigt staerkere Entschlossenheit als "与其...不如...", das eher eine rationale Abwaegung ausdrueckt.'
  },
  {
    pattern: '无论...都...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'unabhaengig davon ... , in jedem Fall ...',
    formation: '无论 + Fragewort/Alternative + 都/也 + Ergebnis',
    explanation: 'Formellere Variante von "不管...都...". Drueckt aus, dass das Ergebnis unter allen Umstaenden gleich bleibt.',
    examples: [
      { chinese: '无论你去哪儿，我都跟着你。', pinyin: 'Wúlùn nǐ qù nǎr, wǒ dōu gēnzhe nǐ.', german: 'Egal wohin du gehst, ich folge dir.' },
      { chinese: '无论发生什么事，都不要害怕。', pinyin: 'Wúlùn fāshēng shénme shì, dōu búyào hàipà.', german: 'Egal was passiert, hab keine Angst.' },
      { chinese: '无论多忙，他都坚持每天看书。', pinyin: 'Wúlùn duō máng, tā dōu jiānchí měi tiān kàn shū.', german: 'Egal wie beschaeftigt er ist, er liest jeden Tag.' }
    ],
    relatedPatterns: ['不管...都...', '不论...都...'],
    notes: '"无论" ist die formellste Variante, gefolgt von "不论" und "不管" (am umgangssprachlichsten).'
  },
  {
    pattern: '除了...以外，还...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'ausser ... , auch noch ...',
    formation: '除了 + A + 以外 + 还/也 + B',
    explanation: 'Drueckt aus, dass zusaetzlich zu A auch B zutrifft. Mit "还/也" bedeutet es "zusaetzlich zu".',
    examples: [
      { chinese: '除了中文以外，她还会说日语。', pinyin: 'Chúle Zhōngwén yǐwài, tā hái huì shuō Rìyǔ.', german: 'Ausser Chinesisch spricht sie auch noch Japanisch.' },
      { chinese: '除了看书以外，我还喜欢画画。', pinyin: 'Chúle kàn shū yǐwài, wǒ hái xǐhuan huàhuà.', german: 'Neben dem Lesen male ich auch gerne.' },
      { chinese: '除了他以外，大家都来了。', pinyin: 'Chúle tā yǐwài, dàjiā dōu lái le.', german: 'Ausser ihm sind alle gekommen.' }
    ],
    relatedPatterns: ['除了...以外，都...'],
    notes: 'Mit "还/也" = Hinzufuegung (ausser A, auch B). Mit "都" = Ausschluss (ausser A, alle anderen).'
  },
  {
    pattern: '一...就...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'sobald ... , sofort ...',
    formation: '一 + Verb/Bedingung + 就 + Ergebnis',
    explanation: 'Drueckt eine unmittelbare zeitliche Abfolge aus: Kaum passiert A, folgt sofort B.',
    examples: [
      { chinese: '我一到家就给你打电话。', pinyin: 'Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.', german: 'Sobald ich zu Hause ankomme, rufe ich dich an.' },
      { chinese: '她一听到这个消息就哭了。', pinyin: 'Tā yì tīng dào zhège xiāoxi jiù kū le.', german: 'Sobald sie die Nachricht hoerte, weinte sie.' },
      { chinese: '他一喝咖啡就睡不着。', pinyin: 'Tā yì hē kāfēi jiù shuì bu zháo.', german: 'Sobald er Kaffee trinkt, kann er nicht schlafen.' }
    ],
    relatedPatterns: ['...的时候...'],
    notes: '"一...就..." betont die Unmittelbarkeit und Schnelligkeit der Reaktion.'
  },
  {
    pattern: '连...都/也...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'sogar ... (auch) ...',
    formation: '连 + extremes Beispiel + 都/也 + Verb',
    explanation: 'Betont etwas Extremes oder Unerwartetes. Das nach "连" Genannte ist ein extremes Beispiel, das die Aussage verstaerkt.',
    examples: [
      { chinese: '他连自己的名字都不会写。', pinyin: 'Tā lián zìjǐ de míngzi dōu bú huì xiě.', german: 'Er kann nicht einmal seinen eigenen Namen schreiben.' },
      { chinese: '我连一口水都没喝。', pinyin: 'Wǒ lián yì kǒu shuǐ dōu méi hē.', german: 'Ich habe nicht einmal einen Schluck Wasser getrunken.' },
      { chinese: '这件事连小孩子也知道。', pinyin: 'Zhè jiàn shì lián xiǎo háizi yě zhīdào.', german: 'Das wissen sogar kleine Kinder.' }
    ],
    relatedPatterns: ['甚至'],
    notes: '"连...都..." wird oft in negativen Saetzen verwendet, um die Extremitaet zu betonen.'
  },
  {
    pattern: '不是...而是...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'nicht ... , sondern ...',
    formation: '不是 + A + 而是 + B',
    explanation: 'Korrigiert eine falsche Annahme und stellt die richtige Aussage dagegen.',
    examples: [
      { chinese: '我不是不想去，而是没有时间。', pinyin: 'Wǒ búshì bù xiǎng qù, érshì méiyǒu shíjiān.', german: 'Es ist nicht so, dass ich nicht gehen will, sondern ich habe keine Zeit.' },
      { chinese: '他不是德国人，而是奥地利人。', pinyin: 'Tā búshì Déguó rén, érshì Àodìlì rén.', german: 'Er ist kein Deutscher, sondern Oesterreicher.' },
      { chinese: '问题不是太难，而是时间太少。', pinyin: 'Wèntí búshì tài nán, érshì shíjiān tài shǎo.', german: 'Das Problem ist nicht, dass es zu schwer ist, sondern dass die Zeit zu knapp ist.' }
    ],
    relatedPatterns: ['而'],
    notes: 'Wird haeufig verwendet, um Missverstaendnisse aufzuklaeren oder Kontraste herzustellen.'
  },
  {
    pattern: '虽然...但是...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'obwohl ... , aber ...',
    formation: '虽然 + Zugestaendnis + 但是/可是/不过 + Hauptaussage',
    explanation: 'Klassische Konzessivstruktur. Der "虽然"-Teil raeumt etwas ein, der "但是"-Teil nennt den Kontrast.',
    examples: [
      { chinese: '虽然很贵，但是质量很好。', pinyin: 'Suīrán hěn guì, dànshì zhìliàng hěn hǎo.', german: 'Obwohl es teuer ist, ist die Qualitaet sehr gut.' },
      { chinese: '他虽然年纪大了，但是身体很好。', pinyin: 'Tā suīrán niánjì dà le, dànshì shēntǐ hěn hǎo.', german: 'Obwohl er schon alt ist, ist er sehr gesund.' },
      { chinese: '虽然我们输了比赛，但是大家都很开心。', pinyin: 'Suīrán wǒmen shū le bǐsài, dànshì dàjiā dōu hěn kāixīn.', german: 'Obwohl wir das Spiel verloren haben, waren alle gluecklich.' }
    ],
    relatedPatterns: ['尽管...还是...', '即使...也...'],
    notes: '"虽然" kann vor oder nach dem Subjekt stehen. Im Chinesischen muessen "虽然" und "但是" zusammen verwendet werden - anders als im Deutschen.'
  },
  {
    pattern: '要是...就...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'wenn ... , dann ...',
    formation: '要是 + Bedingung + 就 + Ergebnis',
    explanation: 'Umgangssprachliche Variante von "如果...就...". Drueckt eine hypothetische Bedingung und deren Folge aus.',
    examples: [
      { chinese: '要是明天下雨，我们就不去了。', pinyin: 'Yàoshi míngtiān xià yǔ, wǒmen jiù bú qù le.', german: 'Wenn es morgen regnet, gehen wir nicht.' },
      { chinese: '你要是不舒服，就在家休息吧。', pinyin: 'Nǐ yàoshi bù shūfu, jiù zài jiā xiūxi ba.', german: 'Wenn du dich nicht wohl fuehlst, ruh dich zu Hause aus.' },
      { chinese: '要是有机会，我想去中国留学。', pinyin: 'Yàoshi yǒu jīhuì, wǒ xiǎng qù Zhōngguó liúxué.', german: 'Wenn ich die Gelegenheit haette, wuerde ich gerne in China studieren.' }
    ],
    relatedPatterns: ['如果...就...', '假如...就...'],
    notes: '"要是" ist muendlicher als "如果". "假如" ist am formellsten.'
  },
  {
    pattern: '先...然后...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'zuerst ... , dann ...',
    formation: '先 + Handlung A + 然后 + Handlung B',
    explanation: 'Beschreibt eine Abfolge von Handlungen in chronologischer Reihenfolge.',
    examples: [
      { chinese: '我先吃早饭，然后去上班。', pinyin: 'Wǒ xiān chī zǎofàn, ránhòu qù shàngbān.', german: 'Ich fruehstuecke zuerst und gehe dann zur Arbeit.' },
      { chinese: '你先看说明书，然后再操作。', pinyin: 'Nǐ xiān kàn shuōmíngshū, ránhòu zài cāozuò.', german: 'Lies zuerst die Anleitung und bediene es dann.' },
      { chinese: '我们先讨论，然后做决定。', pinyin: 'Wǒmen xiān tǎolùn, ránhòu zuò juédìng.', german: 'Wir diskutieren zuerst und treffen dann eine Entscheidung.' }
    ],
    relatedPatterns: ['首先...接着...最后...'],
    notes: 'Fuer laengere Abfolgen kann man "首先...接着...然后...最后..." verwenden.'
  },
  {
    pattern: '一边...一边...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'gleichzeitig ... und ...',
    formation: '一边 + Handlung A + 一边 + Handlung B',
    explanation: 'Drueckt zwei gleichzeitig stattfindende Handlungen aus.',
    examples: [
      { chinese: '他一边吃饭一边看手机。', pinyin: 'Tā yìbiān chīfàn yìbiān kàn shǒujī.', german: 'Er isst und schaut gleichzeitig aufs Handy.' },
      { chinese: '我喜欢一边听音乐一边做作业。', pinyin: 'Wǒ xǐhuan yìbiān tīng yīnyuè yìbiān zuò zuòyè.', german: 'Ich hoere gerne Musik, waehrend ich Hausaufgaben mache.' },
      { chinese: '她一边走路一边打电话。', pinyin: 'Tā yìbiān zǒulù yìbiān dǎ diànhuà.', german: 'Sie telefoniert beim Gehen.' }
    ],
    relatedPatterns: ['又...又...'],
    notes: 'Beide Handlungen muessen gleichzeitig moeglich sein. Bei Zustaenden verwendet man eher "又...又...".'
  },
  {
    pattern: '因为...所以...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'weil ... , deshalb ...',
    formation: '因为 + Ursache + 所以 + Ergebnis',
    explanation: 'Grundlegende Kausalstruktur. Verbindet Ursache und Wirkung. Einer der beiden Teile kann weggelassen werden.',
    examples: [
      { chinese: '因为堵车，所以我迟到了。', pinyin: 'Yīnwèi dǔchē, suǒyǐ wǒ chídào le.', german: 'Weil es einen Stau gab, bin ich zu spaet gekommen.' },
      { chinese: '因为他生病了，所以没来上课。', pinyin: 'Yīnwèi tā shēngbìng le, suǒyǐ méi lái shàngkè.', german: 'Weil er krank ist, ist er nicht zum Unterricht gekommen.' },
      { chinese: '因为天气太热，所以我们决定待在家里。', pinyin: 'Yīnwèi tiānqì tài rè, suǒyǐ wǒmen juédìng dāi zài jiālǐ.', german: 'Weil das Wetter zu heiss ist, haben wir uns entschieden, zu Hause zu bleiben.' }
    ],
    relatedPatterns: ['之所以...是因为...', '由于'],
    notes: 'Im muendlichen Chinesisch wird oft nur "因为" oder nur "所以" verwendet, nicht beide zusammen.'
  },
  {
    pattern: '把',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'Ba-Konstruktion (Objekt vor das Verb stellen)',
    formation: 'Subjekt + 把 + Objekt + Verb + Komplement/Ergebnis',
    explanation: 'Die Ba-Konstruktion stellt das Objekt vor das Verb und betont, was mit dem Objekt geschieht. Das Verb muss ein Ergebnis oder eine Richtung ausdruecken.',
    examples: [
      { chinese: '请你把窗户关上。', pinyin: 'Qǐng nǐ bǎ chuānghu guānshang.', german: 'Bitte mach das Fenster zu.' },
      { chinese: '他把作业做完了。', pinyin: 'Tā bǎ zuòyè zuò wán le.', german: 'Er hat die Hausaufgaben fertig gemacht.' },
      { chinese: '我把那本书放在桌子上了。', pinyin: 'Wǒ bǎ nà běn shū fàng zài zhuōzi shàng le.', german: 'Ich habe das Buch auf den Tisch gelegt.' }
    ],
    relatedPatterns: ['被'],
    notes: 'Das Objekt nach "把" muss bestimmt sein (nicht "ein Buch", sondern "das Buch"). Das Verb darf nicht alleine stehen - es braucht ein Komplement.'
  },
  {
    pattern: '被',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'Passivkonstruktion (von ... ge-verbt werden)',
    formation: 'Subjekt + 被 + (Agens) + Verb + Komplement',
    explanation: 'Drueckt das Passiv aus. Der Handelnde kann nach "被" stehen, muss aber nicht. Wird oft fuer unangenehme oder unerwuenschte Ereignisse verwendet.',
    examples: [
      { chinese: '我的手机被偷了。', pinyin: 'Wǒ de shǒujī bèi tōu le.', german: 'Mein Handy wurde gestohlen.' },
      { chinese: '那个蛋糕被他吃了。', pinyin: 'Nàge dàngāo bèi tā chī le.', german: 'Der Kuchen wurde von ihm gegessen.' },
      { chinese: '这本书被翻译成了很多语言。', pinyin: 'Zhè běn shū bèi fānyì chéng le hěn duō yǔyán.', german: 'Dieses Buch wurde in viele Sprachen uebersetzt.' }
    ],
    relatedPatterns: ['把', '让', '叫'],
    notes: 'Traditionell wurde "被" fuer negative Ereignisse verwendet, im modernen Chinesisch aber zunehmend auch neutral.'
  },
  {
    pattern: '不仅...还...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'nicht nur ... , sondern auch noch ...',
    formation: '不仅 + Aussage A + 还/而且 + Aussage B',
    explanation: 'Aehnlich wie "不但...而且...", aber etwas formeller. Drueckt eine Steigerung oder Ergaenzung aus.',
    examples: [
      { chinese: '她不仅漂亮，还很聪明。', pinyin: 'Tā bùjǐn piàoliang, hái hěn cōngmíng.', german: 'Sie ist nicht nur huebsch, sondern auch sehr klug.' },
      { chinese: '这个软件不仅免费，还非常好用。', pinyin: 'Zhège ruǎnjiàn bùjǐn miǎnfèi, hái fēicháng hǎoyòng.', german: 'Diese Software ist nicht nur kostenlos, sondern auch sehr nuetzlich.' },
      { chinese: '他不仅通过了考试，还得了第一名。', pinyin: 'Tā bùjǐn tōngguò le kǎoshì, hái dé le dì yī míng.', german: 'Er hat nicht nur die Pruefung bestanden, sondern auch den ersten Platz belegt.' }
    ],
    relatedPatterns: ['不但...而且...'],
    notes: '"不仅" ist etwas formeller als "不但" und wird haeufig in der Schriftsprache verwendet.'
  },
  {
    pattern: '就算...也...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'selbst wenn ... , auch ...',
    formation: '就算 + hypothetische Bedingung + 也 + Ergebnis',
    explanation: 'Umgangssprachliche Variante von "即使...也...". Drueckt aus, dass das Ergebnis auch unter extremen Bedingungen unveraendert bleibt.',
    examples: [
      { chinese: '就算你不来，我也会去。', pinyin: 'Jiùsuàn nǐ bù lái, wǒ yě huì qù.', german: 'Selbst wenn du nicht kommst, werde ich gehen.' },
      { chinese: '就算失败了，也不要灰心。', pinyin: 'Jiùsuàn shībài le, yě búyào huīxīn.', german: 'Selbst wenn man scheitert, sollte man nicht den Mut verlieren.' },
      { chinese: '就算再贵，我也要买。', pinyin: 'Jiùsuàn zài guì, wǒ yě yào mǎi.', german: 'Selbst wenn es noch teurer waere, wuerde ich es kaufen.' }
    ],
    relatedPatterns: ['即使...也...', '哪怕...也...'],
    notes: '"就算" ist muendlicher als "即使". "哪怕" ist noch umgangssprachlicher und emotionaler.'
  },
  {
    pattern: '既然...就...',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'da nun einmal ... , dann sollte man ...',
    formation: '既然 + bekannte Tatsache + 就 + logische Folgerung',
    explanation: 'Bezieht sich auf eine bereits bekannte oder akzeptierte Tatsache und zieht daraus eine logische Schlussfolgerung.',
    examples: [
      { chinese: '既然你不喜欢，就不要勉强自己。', pinyin: 'Jìrán nǐ bù xǐhuan, jiù búyào miǎnqiǎng zìjǐ.', german: 'Da du es nicht magst, zwing dich nicht dazu.' },
      { chinese: '既然来了，就多待一会儿吧。', pinyin: 'Jìrán lái le, jiù duō dāi yíhuìr ba.', german: 'Da du nun schon mal hier bist, bleib doch noch ein wenig.' },
      { chinese: '既然决定了，就不要后悔。', pinyin: 'Jìrán juédìng le, jiù búyào hòuhuǐ.', german: 'Da du dich entschieden hast, bereue es nicht.' }
    ],
    relatedPatterns: ['因为...所以...'],
    notes: 'Der Unterschied zu "因为": "既然" setzt voraus, dass die Tatsache dem Hoerer bereits bekannt ist.'
  },
  {
    pattern: '对...来说',
    level: 'HSK4',
    category: 'Partikel',
    meaning: 'fuer jemanden (betrachtet), aus Sicht von ...',
    formation: '对 + Person/Sache + 来说 + Aussage',
    explanation: 'Gibt den Bezugsrahmen oder die Perspektive an, aus der eine Aussage gemacht wird.',
    examples: [
      { chinese: '对我来说，健康最重要。', pinyin: 'Duì wǒ lái shuō, jiànkāng zuì zhòngyào.', german: 'Fuer mich ist Gesundheit am wichtigsten.' },
      { chinese: '对外国人来说，中文的声调很难。', pinyin: 'Duì wàiguó rén lái shuō, Zhōngwén de shēngdiào hěn nán.', german: 'Fuer Auslaender sind die chinesischen Toene sehr schwer.' },
      { chinese: '对孩子们来说，这个游戏太复杂了。', pinyin: 'Duì háizimen lái shuō, zhège yóuxì tài fùzá le.', german: 'Fuer Kinder ist dieses Spiel zu kompliziert.' }
    ],
    relatedPatterns: ['关于'],
    notes: '"对...来说" betont die persoenliche Perspektive, waehrend "关于" eher das Thema angibt.'
  },
  {
    pattern: '倒',
    level: 'HSK4',
    category: 'Partikel',
    meaning: 'allerdings, hingegen, entgegen der Erwartung',
    formation: 'Subjekt + 倒 + Verb/Adjektiv (+ Kontrast)',
    explanation: 'Drueckt einen Kontrast oder eine unerwartete Wendung aus. Kann auch eine leichte Ueberraschung oder Einraemung signalisieren.',
    examples: [
      { chinese: '菜倒不贵，就是味道一般。', pinyin: 'Cài dào bú guì, jiùshì wèidao yìbān.', german: 'Das Essen ist zwar nicht teuer, aber der Geschmack ist mittelmassig.' },
      { chinese: '他说得倒好听，就是做不到。', pinyin: 'Tā shuō de dào hǎotīng, jiùshì zuò bu dào.', german: 'Er redet zwar schoen, kann es aber nicht umsetzen.' },
      { chinese: '你倒提醒了我。', pinyin: 'Nǐ dào tíxǐng le wǒ.', german: 'Du hast mich tatsaechlich daran erinnert.' }
    ],
    relatedPatterns: ['反而', '却'],
    notes: '"倒" kann verschiedene Nuancen haben: Kontrast, Ueberraschung oder Einraeumung. Der Kontext entscheidet.'
  },
  {
    pattern: '反而',
    level: 'HSK4',
    category: 'Partikel',
    meaning: 'im Gegenteil, stattdessen (entgegen der Erwartung)',
    formation: 'Erwartung + 反而 + unerwartetes Ergebnis',
    explanation: 'Zeigt an, dass das tatsaechliche Ergebnis dem erwarteten Ergebnis entgegengesetzt ist.',
    examples: [
      { chinese: '吃了药以后，他反而更不舒服了。', pinyin: 'Chī le yào yǐhòu, tā fǎnér gèng bù shūfu le.', german: 'Nachdem er die Medizin genommen hat, fuehlte er sich im Gegenteil noch schlechter.' },
      { chinese: '我越解释，她反而越生气。', pinyin: 'Wǒ yuè jiěshì, tā fǎnér yuè shēngqì.', german: 'Je mehr ich erklaerte, desto wuetender wurde sie stattdessen.' },
      { chinese: '这次考试没复习，反而考得很好。', pinyin: 'Zhè cì kǎoshì méi fùxí, fǎnér kǎo de hěn hǎo.', german: 'Ich habe fuer diese Pruefung nicht gelernt, habe aber im Gegenteil sehr gut abgeschnitten.' }
    ],
    relatedPatterns: ['倒', '却'],
    notes: '"反而" betont staerker als "却" den Widerspruch zur Erwartung.'
  },
  {
    pattern: '难道...吗？',
    level: 'HSK4',
    category: 'Satzstrukturen',
    meaning: 'etwa ...? (rhetorische Frage)',
    formation: '难道 + Aussage + 吗？',
    explanation: 'Leitet eine rhetorische Frage ein, die die gegenteilige Antwort erwartet. Drueckt Erstaunen, Vorwurf oder Betonung aus.',
    examples: [
      { chinese: '难道你不知道吗？', pinyin: 'Nándào nǐ bù zhīdào ma?', german: 'Weisst du das etwa nicht?' },
      { chinese: '难道这是我的错吗？', pinyin: 'Nándào zhè shì wǒ de cuò ma?', german: 'Ist das etwa mein Fehler?' },
      { chinese: '他那么努力，难道你没看到吗？', pinyin: 'Tā nàme nǔlì, nándào nǐ méi kàn dào ma?', german: 'Er strengt sich so an, hast du das etwa nicht gesehen?' }
    ],
    relatedPatterns: [],
    notes: 'Die erwartete Antwort ist immer das Gegenteil der gestellten Frage. "难道" macht den rhetorischen Charakter deutlich.'
  }
]);
