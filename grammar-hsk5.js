window.GRAMMAR_DATA = window.GRAMMAR_DATA.concat([
  {
    pattern: '何况',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'geschweige denn; ganz zu schweigen von',
    formation: 'Aussage A，何况 + Aussage B (stärkerer Fall)',
    explanation: 'Wird verwendet, um einen stärkeren Punkt hervorzuheben. Wenn A schon der Fall ist, dann gilt B erst recht. Oft zusammen mit "连...都..." oder "尚且" verwendet.',
    examples: [
      { chinese: '这道题连老师都不会做，何况学生呢？', pinyin: 'Zhè dào tí lián lǎoshī dōu bú huì zuò, hékuàng xuéshēng ne?', german: 'Nicht einmal der Lehrer kann diese Aufgabe lösen, geschweige denn die Schüler.' },
      { chinese: '大人都受不了这种天气，何况小孩子？', pinyin: 'Dàrén dōu shòu bù liǎo zhè zhǒng tiānqì, hékuàng xiǎo háizi?', german: 'Selbst Erwachsene halten dieses Wetter nicht aus, geschweige denn Kinder.' },
      { chinese: '我连中文都说不好，何况日语呢？', pinyin: 'Wǒ lián Zhōngwén dōu shuō bù hǎo, hékuàng Rìyǔ ne?', german: 'Ich spreche nicht einmal gut Chinesisch, geschweige denn Japanisch.' }
    ],
    relatedPatterns: ['连...都/也...', '尚且'],
    notes: '何况 leitet immer den stärkeren bzw. offensichtlicheren Fall ein. Die Logik ist: Wenn schon A schwierig ist, dann ist B erst recht schwierig.'
  },
  {
    pattern: '总之',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'kurzum; zusammenfassend; jedenfalls',
    formation: '(Vorherige Aussagen,) 总之 + Zusammenfassung/Schlussfolgerung',
    explanation: 'Wird verwendet, um eine Zusammenfassung oder ein Fazit einzuleiten. Steht meist am Anfang des letzten Satzes einer Argumentation.',
    examples: [
      { chinese: '总之，我们必须更加努力。', pinyin: 'Zǒngzhī, wǒmen bìxū gèng jiā nǔlì.', german: 'Kurzum, wir müssen uns noch mehr anstrengen.' },
      { chinese: '不管怎么说，总之这件事已经过去了。', pinyin: 'Bùguǎn zěnme shuō, zǒngzhī zhè jiàn shì yǐjīng guòqù le.', german: 'Wie auch immer, jedenfalls ist diese Sache schon vorbei.' }
    ],
    relatedPatterns: ['简而言之', '反正'],
    notes: '总之 wird oft in formelleren Kontexten oder Aufsätzen verwendet. Im Alltag ist 反正 gebräuchlicher.'
  },
  {
    pattern: '莫非',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'könnte es sein, dass...?; etwa; womöglich',
    formation: '莫非 + Vermutung + (？)',
    explanation: 'Drückt eine Vermutung oder einen Verdacht aus, oft mit einem Ton der Überraschung oder des Zweifels. Wird als rhetorische Frage verwendet.',
    examples: [
      { chinese: '他今天没来上班，莫非生病了？', pinyin: 'Tā jīntiān méi lái shàngbān, mòfēi shēngbìng le?', german: 'Er ist heute nicht zur Arbeit gekommen, könnte es sein, dass er krank ist?' },
      { chinese: '莫非你已经知道了这个消息？', pinyin: 'Mòfēi nǐ yǐjīng zhīdào le zhège xiāoxi?', german: 'Wusstest du etwa schon von dieser Nachricht?' },
      { chinese: '外面这么安静，莫非大家都走了？', pinyin: 'Wàimiàn zhème ānjìng, mòfēi dàjiā dōu zǒu le?', german: 'Draussen ist es so ruhig, sind etwa alle gegangen?' }
    ],
    relatedPatterns: ['难道', '是不是'],
    notes: '莫非 klingt literarischer als 难道 und wird häufig in Erzählungen oder wenn man überrascht eine Vermutung äussert verwendet.'
  },
  {
    pattern: '难免',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'unvermeidlich; es lässt sich kaum vermeiden, dass',
    formation: '难免 + (会/要) + Verb/Adjektiv',
    explanation: 'Drückt aus, dass etwas unter den gegebenen Umständen unvermeidlich ist. Wird oft für negative oder unerwünschte Situationen verwendet.',
    examples: [
      { chinese: '刚到一个新环境，难免会不习惯。', pinyin: 'Gāng dào yí gè xīn huánjìng, nánmiǎn huì bù xíguàn.', german: 'Wenn man gerade in eine neue Umgebung kommt, ist es unvermeidlich, dass man sich nicht daran gewöhnt.' },
      { chinese: '第一次做这种工作，难免会犯错误。', pinyin: 'Dì yī cì zuò zhè zhǒng gōngzuò, nánmiǎn huì fàn cuòwù.', german: 'Wenn man diese Arbeit zum ersten Mal macht, lassen sich Fehler kaum vermeiden.' }
    ],
    relatedPatterns: ['未免', '不免', '免不了'],
    notes: '难免 betont, dass etwas natürlich und verständlich ist. Es hat oft einen entschuldigenden oder verständnisvollen Ton.'
  },
  {
    pattern: '未免',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'doch wohl etwas zu...; es ist wohl etwas übertrieben',
    formation: '未免 + (太/有点) + Adjektiv/Verb',
    explanation: 'Drückt eine höfliche Kritik oder milden Einwand aus. Man findet etwas ein wenig übertrieben oder unangemessen.',
    examples: [
      { chinese: '你这样说未免太过分了。', pinyin: 'Nǐ zhèyàng shuō wèimiǎn tài guòfèn le.', german: 'Was du da sagst, ist doch wohl etwas zu weit gegangen.' },
      { chinese: '为了这点小事就生气，未免太小气了吧。', pinyin: 'Wèile zhè diǎn xiǎo shì jiù shēngqì, wèimiǎn tài xiǎoqì le ba.', german: 'Sich wegen so einer Kleinigkeit aufzuregen, ist doch wohl etwas kleinlich.' },
      { chinese: '他的要求未免有些不合理。', pinyin: 'Tā de yāoqiú wèimiǎn yǒuxiē bù hélǐ.', german: 'Seine Forderungen sind doch etwas unvernünftig.' }
    ],
    relatedPatterns: ['难免', '不免'],
    notes: 'Nicht verwechseln mit 难免! 未免 drückt eine subjektive Bewertung (zu viel) aus, 难免 drückt Unvermeidlichkeit aus.'
  },
  {
    pattern: '以至于',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'sodass; so sehr, dass; mit dem Ergebnis, dass',
    formation: 'Ursache + 以至于 + (unerwünschtes) Ergebnis',
    explanation: 'Verbindet eine Ursache mit einem daraus resultierenden (oft negativen) Ergebnis. Betont, dass die Ursache so stark war, dass sie zu diesem Ergebnis geführt hat.',
    examples: [
      { chinese: '他太忙了，以至于忘了吃饭。', pinyin: 'Tā tài máng le, yǐzhìyú wàng le chīfàn.', german: 'Er war so beschäftigt, dass er vergessen hat zu essen.' },
      { chinese: '雨下得很大，以至于很多地方都被淹了。', pinyin: 'Yǔ xià de hěn dà, yǐzhìyú hěn duō dìfāng dōu bèi yān le.', german: 'Es hat so stark geregnet, dass viele Orte überschwemmt wurden.' }
    ],
    relatedPatterns: ['以致', '从而', '导致'],
    notes: '以至于 wird oft für unbeabsichtigte oder negative Folgen verwendet. Für neutrale Folgen verwendet man eher 从而.'
  },
  {
    pattern: '以免',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'um zu vermeiden, dass; damit nicht',
    formation: 'Handlung/Massnahme + 以免 + unerwünschtes Ergebnis',
    explanation: 'Wird verwendet, um auszudrücken, dass man etwas tut, um ein negatives Ergebnis zu verhindern. Steht immer vor dem zu vermeidenden Ergebnis.',
    examples: [
      { chinese: '你应该早点出发，以免迟到。', pinyin: 'Nǐ yīnggāi zǎo diǎn chūfā, yǐmiǎn chídào.', german: 'Du solltest früher losfahren, um zu vermeiden, dass du zu spät kommst.' },
      { chinese: '请把窗户关好，以免着凉。', pinyin: 'Qǐng bǎ chuānghu guān hǎo, yǐmiǎn zháoliáng.', german: 'Bitte mach das Fenster richtig zu, damit du dich nicht erkältest.' },
      { chinese: '多检查几遍，以免出错。', pinyin: 'Duō jiǎnchá jǐ biàn, yǐmiǎn chūcuò.', german: 'Überprüfe es ein paar Mal mehr, um Fehler zu vermeiden.' }
    ],
    relatedPatterns: ['免得', '省得'],
    notes: '以免 ist formeller als 免得. Im gesprochenen Chinesisch wird eher 免得 verwendet.'
  },
  {
    pattern: '宁可...也不...',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'lieber...als...; eher...als...',
    formation: '宁可 + Handlung A + 也不 + Handlung B',
    explanation: 'Drückt eine starke Präferenz aus: Man wählt lieber Option A (auch wenn sie Nachteile hat) als Option B. Zeigt Entschlossenheit.',
    examples: [
      { chinese: '我宁可走路去，也不坐他的车。', pinyin: 'Wǒ nìngkě zǒulù qù, yě bú zuò tā de chē.', german: 'Ich gehe lieber zu Fuss, als mit seinem Auto zu fahren.' },
      { chinese: '她宁可一个人住，也不愿意跟别人合租。', pinyin: 'Tā nìngkě yí gè rén zhù, yě bú yuànyì gēn biérén hézū.', german: 'Sie wohnt lieber allein, als sich eine Wohnung mit anderen zu teilen.' },
      { chinese: '他宁可饿着，也不吃那种东西。', pinyin: 'Tā nìngkě è zhe, yě bù chī nà zhǒng dōngxi.', german: 'Er hungert lieber, als so etwas zu essen.' }
    ],
    relatedPatterns: ['宁愿...也...', '与其...不如...'],
    notes: '宁可...也不... betont eine entschlossene Wahl trotz Nachteilen. 与其...不如... ist neutraler und vergleicht zwei Optionen rationaler.'
  },
  {
    pattern: '从而',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'dadurch; somit; und folglich',
    formation: 'Handlung/Ursache + 从而 + (positives) Ergebnis',
    explanation: 'Verbindet eine Handlung oder Ursache mit einem logischen Ergebnis. Wird vor allem in formellen Kontexten und Schriftsprache verwendet.',
    examples: [
      { chinese: '他努力学习，从而取得了好成绩。', pinyin: 'Tā nǔlì xuéxí, cóng\'ér qǔdé le hǎo chéngjì.', german: 'Er hat fleissig gelernt und dadurch gute Ergebnisse erzielt.' },
      { chinese: '政府采取了新措施，从而减少了污染。', pinyin: 'Zhèngfǔ cǎiqǔ le xīn cuòshī, cóng\'ér jiǎnshǎo le wūrǎn.', german: 'Die Regierung hat neue Massnahmen ergriffen und dadurch die Verschmutzung reduziert.' }
    ],
    relatedPatterns: ['因此', '以至于', '于是'],
    notes: '从而 wird hauptsächlich in der Schriftsprache verwendet und klingt sehr formell. Im Alltag sagt man eher 所以 oder 因此.'
  },
  {
    pattern: '何必',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'warum muss man unbedingt...?; wozu denn...?',
    formation: '何必 + Verb/Handlung + (呢)',
    explanation: 'Rhetorische Frage, die ausdrückt, dass eine Handlung unnötig ist. Wird verwendet, um jemandem von etwas abzuraten oder etwas als überflüssig darzustellen.',
    examples: [
      { chinese: '这只是一件小事，何必生气呢？', pinyin: 'Zhè zhǐ shì yí jiàn xiǎo shì, hébì shēngqì ne?', german: 'Das ist nur eine Kleinigkeit, warum muss man sich da aufregen?' },
      { chinese: '何必花那么多钱买名牌？', pinyin: 'Hébì huā nàme duō qián mǎi míngpái?', german: 'Wozu so viel Geld für Markenware ausgeben?' },
      { chinese: '他已经道歉了，你何必再追究呢？', pinyin: 'Tā yǐjīng dàoqiàn le, nǐ hébì zài zhuījiū ne?', german: 'Er hat sich bereits entschuldigt, warum musst du das noch weiter verfolgen?' }
    ],
    relatedPatterns: ['不必', '用不着', '犯不着'],
    notes: '何必 hat immer einen rhetorischen Charakter und drückt aus, dass der Sprecher die Handlung für unnötig hält.'
  },
  {
    pattern: '恐怕',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'wahrscheinlich; ich fürchte, dass; vermutlich',
    formation: '恐怕 + Vermutung/Einschätzung',
    explanation: 'Drückt eine Vermutung aus, oft mit einem leicht besorgten oder pessimistischen Unterton. Kann auch als höfliche Abschwächung verwendet werden.',
    examples: [
      { chinese: '今天恐怕要下雨了。', pinyin: 'Jīntiān kǒngpà yào xiàyǔ le.', german: 'Heute wird es wahrscheinlich regnen.' },
      { chinese: '这个任务恐怕不容易完成。', pinyin: 'Zhège rènwù kǒngpà bù róngyì wánchéng.', german: 'Diese Aufgabe wird wohl nicht leicht zu erledigen sein.' },
      { chinese: '恐怕我们来不及了。', pinyin: 'Kǒngpà wǒmen láibùjí le.', german: 'Ich fürchte, wir schaffen es nicht mehr rechtzeitig.' }
    ],
    relatedPatterns: ['大概', '也许', '可能'],
    notes: '恐怕 impliziert oft, dass der Sprecher ein ungünstiges Ergebnis erwartet, anders als das neutrale 大概.'
  },
  {
    pattern: '尽管',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'obwohl; trotz der Tatsache, dass',
    formation: '尽管 + Zugeständnis，(但是/可是/还是) + Hauptaussage',
    explanation: 'Leitet einen konzessiven Nebensatz ein. Drückt aus, dass die Hauptaussage trotz des genannten Umstands gilt.',
    examples: [
      { chinese: '尽管天气很冷，他还是坚持跑步。', pinyin: 'Jǐnguǎn tiānqì hěn lěng, tā háishi jiānchí pǎobù.', german: 'Obwohl das Wetter sehr kalt ist, besteht er darauf, joggen zu gehen.' },
      { chinese: '尽管工作很忙，她每天都会陪孩子。', pinyin: 'Jǐnguǎn gōngzuò hěn máng, tā měitiān dōu huì péi háizi.', german: 'Obwohl sie bei der Arbeit sehr beschäftigt ist, verbringt sie jeden Tag Zeit mit ihrem Kind.' }
    ],
    relatedPatterns: ['虽然...但是...', '即使', '哪怕'],
    notes: '尽管 betont, dass der genannte Umstand real ist (anders als 即使, das hypothetisch sein kann). Oft in der Schriftsprache verwendet.'
  },
  {
    pattern: '即使...也...',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'selbst wenn..., auch...',
    formation: '即使 + (hypothetische) Bedingung，也 + Ergebnis',
    explanation: 'Drückt eine extreme hypothetische Konzession aus. Selbst unter der genannten (möglicherweise unrealistischen) Bedingung ändert sich das Ergebnis nicht.',
    examples: [
      { chinese: '即使失败了，我也不会放弃。', pinyin: 'Jíshǐ shībài le, wǒ yě bú huì fàngqì.', german: 'Selbst wenn ich scheitere, werde ich nicht aufgeben.' },
      { chinese: '即使你不同意，我也要这样做。', pinyin: 'Jíshǐ nǐ bù tóngyì, wǒ yě yào zhèyàng zuò.', german: 'Selbst wenn du nicht einverstanden bist, werde ich es trotzdem so machen.' }
    ],
    relatedPatterns: ['尽管', '哪怕...也...', '就算...也...'],
    notes: '即使 kann sowohl für reale als auch für hypothetische Situationen verwendet werden. 哪怕 ist umgangssprachlicher.'
  },
  {
    pattern: '与其...不如...',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'anstatt...ist es besser...;  lieber...als...',
    formation: '与其 + weniger bevorzugte Option，不如 + bevorzugte Option',
    explanation: 'Vergleicht zwei Optionen und drückt eine klare Präferenz für die zweite aus. Die Logik ist: Anstatt A zu tun, ist es besser, B zu tun.',
    examples: [
      { chinese: '与其在家看电视，不如出去散步。', pinyin: 'Yǔqí zài jiā kàn diànshì, bùrú chūqù sànbù.', german: 'Anstatt zu Hause fernzusehen, ist es besser, spazieren zu gehen.' },
      { chinese: '与其抱怨，不如想办法解决问题。', pinyin: 'Yǔqí bàoyuàn, bùrú xiǎng bànfǎ jiějué wèntí.', german: 'Anstatt sich zu beschweren, ist es besser, nach einer Lösung zu suchen.' },
      { chinese: '与其等别人帮忙，不如自己动手。', pinyin: 'Yǔqí děng biérén bāngmáng, bùrú zìjǐ dòngshǒu.', german: 'Anstatt auf die Hilfe anderer zu warten, ist es besser, selbst Hand anzulegen.' }
    ],
    relatedPatterns: ['宁可...也不...', '还不如'],
    notes: '与其...不如... ist rationaler und abwägender als 宁可...也不..., das eher Entschlossenheit ausdrückt.'
  },
  {
    pattern: '不得不',
    level: 'HSK5',
    category: 'Verben',
    meaning: 'nicht umhinkönnen; gezwungen sein zu; müssen',
    formation: 'Subjekt + 不得不 + Verb',
    explanation: 'Doppelte Verneinung, die eine starke Notwendigkeit ausdrückt. Man hat keine andere Wahl und ist gezwungen, etwas zu tun.',
    examples: [
      { chinese: '因为堵车，我不得不走路去上班。', pinyin: 'Yīnwèi dǔchē, wǒ bùdébù zǒulù qù shàngbān.', german: 'Wegen des Staus musste ich zu Fuss zur Arbeit gehen.' },
      { chinese: '情况这么严重，我们不得不重新考虑计划。', pinyin: 'Qíngkuàng zhème yánzhòng, wǒmen bùdébù chóngxīn kǎolǜ jìhuà.', german: 'Die Lage ist so ernst, dass wir den Plan notgedrungen überdenken müssen.' }
    ],
    relatedPatterns: ['只好', '只得', '不能不'],
    notes: '不得不 betont stärker als 必须, dass man keine Wahl hat. Es impliziert Widerwillen oder äusseren Zwang.'
  },
  {
    pattern: '不禁',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'unwillkürlich; man kann nicht anders als',
    formation: '不禁 + Verb (der Emotion/Reaktion)',
    explanation: 'Drückt aus, dass man eine Handlung oder Reaktion nicht kontrollieren kann. Wird oft für emotionale oder körperliche Reaktionen verwendet.',
    examples: [
      { chinese: '听到这个好消息，她不禁笑了起来。', pinyin: 'Tīngdào zhège hǎo xiāoxi, tā bùjīn xiào le qǐlái.', german: 'Als sie diese gute Nachricht hörte, musste sie unwillkürlich lachen.' },
      { chinese: '看到那张老照片，我不禁想起了小时候。', pinyin: 'Kàndào nà zhāng lǎo zhàopiàn, wǒ bùjīn xiǎngqǐ le xiǎoshíhou.', german: 'Als ich das alte Foto sah, musste ich unwillkürlich an meine Kindheit denken.' }
    ],
    relatedPatterns: ['忍不住', '情不自禁'],
    notes: '不禁 gehört zur Schriftsprache. Im Alltag verwendet man eher 忍不住.'
  },
  {
    pattern: '否则',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'andernfalls; sonst; wenn nicht',
    formation: 'Bedingung/Aufforderung，否则 + negative Konsequenz',
    explanation: 'Leitet die negative Konsequenz ein, die eintritt, wenn die vorherige Bedingung nicht erfüllt oder die Aufforderung nicht befolgt wird.',
    examples: [
      { chinese: '你必须按时完成，否则会被扣工资。', pinyin: 'Nǐ bìxū ànshí wánchéng, fǒuzé huì bèi kòu gōngzī.', german: 'Du musst rechtzeitig fertig werden, andernfalls wird dir Lohn abgezogen.' },
      { chinese: '快点走吧，否则我们就赶不上飞机了。', pinyin: 'Kuài diǎn zǒu ba, fǒuzé wǒmen jiù gǎn bú shàng fēijī le.', german: 'Lass uns schnell gehen, sonst schaffen wir den Flug nicht.' }
    ],
    relatedPatterns: ['要不然', '不然'],
    notes: '否则 ist formeller als 要不然 oder 不然, wird häufig in der Schriftsprache und in formellen Anweisungen verwendet.'
  },
  {
    pattern: '毕竟',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'schliesslich; immerhin; letzten Endes',
    formation: '毕竟 + Begründung/Tatsache',
    explanation: 'Betont eine grundlegende Tatsache oder einen Grund, der trotz anderer Umstände gilt. Wird verwendet, um eine Aussage zu relativieren oder zu begründen.',
    examples: [
      { chinese: '别怪他了，他毕竟还是个孩子。', pinyin: 'Bié guài tā le, tā bìjìng háishi gè háizi.', german: 'Sei ihm nicht böse, er ist schliesslich noch ein Kind.' },
      { chinese: '毕竟是第一次，做得不好也正常。', pinyin: 'Bìjìng shì dì yī cì, zuò de bù hǎo yě zhèngcháng.', german: 'Es ist schliesslich das erste Mal, es ist normal, dass es nicht gut gelaufen ist.' },
      { chinese: '他毕竟有多年的经验，比我们强。', pinyin: 'Tā bìjìng yǒu duō nián de jīngyàn, bǐ wǒmen qiáng.', german: 'Er hat immerhin viele Jahre Erfahrung und ist besser als wir.' }
    ],
    relatedPatterns: ['到底', '终究', '究竟'],
    notes: '毕竟 verweist auf eine unumstössliche Grundtatsache. Es unterscheidet sich von 到底, das eher Ungeduld oder Nachfrage ausdrückt.'
  },
  {
    pattern: '既然...就...',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'da nun einmal..., dann...',
    formation: '既然 + feststehende Tatsache，就 + logische Schlussfolgerung',
    explanation: 'Drückt aus, dass eine Schlussfolgerung logisch aus einer bereits bestehenden Tatsache folgt. Die Tatsache wird als gegeben akzeptiert.',
    examples: [
      { chinese: '既然你已经决定了，就不要后悔。', pinyin: 'Jìrán nǐ yǐjīng juédìng le, jiù bú yào hòuhuǐ.', german: 'Da du dich nun einmal entschieden hast, bereue es nicht.' },
      { chinese: '既然来了，就多待一会儿吧。', pinyin: 'Jìrán lái le, jiù duō dāi yìhuìr ba.', german: 'Da du nun einmal hier bist, bleib doch noch ein Weilchen.' }
    ],
    relatedPatterns: ['因为...所以...', '由于'],
    notes: '既然 bezieht sich immer auf eine bereits eingetretene oder feststehende Situation, nie auf eine hypothetische.'
  },
  {
    pattern: '万一',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'falls; für den Fall, dass; was wenn',
    formation: '万一 + unwahrscheinliches Szenario，(就) + Reaktion/Konsequenz',
    explanation: 'Drückt ein unwahrscheinliches, aber mögliches Szenario aus (wörtlich: eins von zehntausend). Wird für Vorsichtsmassnahmen oder Worst-Case-Szenarien verwendet.',
    examples: [
      { chinese: '带把伞吧，万一下雨了呢。', pinyin: 'Dài bǎ sǎn ba, wànyī xiàyǔ le ne.', german: 'Nimm einen Regenschirm mit, falls es regnen sollte.' },
      { chinese: '万一他不同意，我们怎么办？', pinyin: 'Wànyī tā bù tóngyì, wǒmen zěnme bàn?', german: 'Was machen wir, falls er nicht einverstanden ist?' },
      { chinese: '你最好买个保险，万一出了事就有保障了。', pinyin: 'Nǐ zuìhǎo mǎi gè bǎoxiǎn, wànyī chū le shì jiù yǒu bǎozhàng le.', german: 'Du solltest besser eine Versicherung abschliessen, falls etwas passiert, bist du abgesichert.' }
    ],
    relatedPatterns: ['如果', '假如', '以防'],
    notes: '万一 impliziert eine geringe Wahrscheinlichkeit, während 如果 neutral ist. Es wird oft verwendet, um Vorsicht zu empfehlen.'
  },
  {
    pattern: '果然',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'tatsächlich; wie erwartet; in der Tat',
    formation: '果然 + bestätigte Erwartung',
    explanation: 'Drückt aus, dass etwas so eingetreten ist, wie man es erwartet oder vermutet hat. Bestätigt eine vorherige Annahme.',
    examples: [
      { chinese: '天气预报说要下雨，果然下雨了。', pinyin: 'Tiānqì yùbào shuō yào xiàyǔ, guǒrán xiàyǔ le.', german: 'Der Wetterbericht sagte Regen voraus, und tatsächlich hat es geregnet.' },
      { chinese: '我就知道他会来，他果然来了。', pinyin: 'Wǒ jiù zhīdào tā huì lái, tā guǒrán lái le.', german: 'Ich wusste, dass er kommen würde, und er ist tatsächlich gekommen.' }
    ],
    relatedPatterns: ['居然', '竟然', '确实'],
    notes: '果然 bestätigt Erwartungen (wie erwartet), während 居然/竟然 Überraschung ausdrücken (wider Erwarten).'
  },
  {
    pattern: '居然',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'tatsächlich; überraschenderweise; wider Erwarten',
    formation: 'Subjekt + 居然 + überraschende Handlung/Zustand',
    explanation: 'Drückt Überraschung oder Erstaunen darüber aus, dass etwas Unerwartetes passiert ist. Kann sowohl positive als auch negative Überraschung ausdrücken.',
    examples: [
      { chinese: '他居然通过了那么难的考试！', pinyin: 'Tā jūrán tōngguò le nàme nán de kǎoshì!', german: 'Er hat tatsächlich diese so schwere Prüfung bestanden!' },
      { chinese: '你居然不知道这件事？', pinyin: 'Nǐ jūrán bù zhīdào zhè jiàn shì?', german: 'Du weisst tatsächlich nichts davon?' },
      { chinese: '这么贵的手机居然坏了。', pinyin: 'Zhème guì de shǒujī jūrán huài le.', german: 'So ein teures Handy ist tatsächlich kaputtgegangen.' }
    ],
    relatedPatterns: ['竟然', '果然', '没想到'],
    notes: '居然 und 竟然 sind austauschbar und drücken beide Überraschung aus. 竟然 ist etwas formeller.'
  },
  {
    pattern: '并非',
    level: 'HSK5',
    category: 'Verben',
    meaning: 'keineswegs; durchaus nicht; es ist nicht so, dass',
    formation: '并非 + (das Verneinte)',
    explanation: 'Formelle Verneinung, die betont, dass etwas nicht so ist, wie man denken könnte. Stärker als einfaches 不是.',
    examples: [
      { chinese: '他并非不愿意帮忙，只是太忙了。', pinyin: 'Tā bìngfēi bú yuànyì bāngmáng, zhǐshì tài máng le.', german: 'Es ist keineswegs so, dass er nicht helfen will, er ist nur zu beschäftigt.' },
      { chinese: '成功并非一蹴而就的事。', pinyin: 'Chénggōng bìngfēi yī cù ér jiù de shì.', german: 'Erfolg ist keineswegs etwas, das über Nacht kommt.' }
    ],
    relatedPatterns: ['并不', '并没有', '绝非'],
    notes: '并非 wird vor allem in der Schriftsprache verwendet. Im Alltag sagt man eher 并不是.'
  },
  {
    pattern: '不见得',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'nicht unbedingt; es muss nicht sein, dass',
    formation: '不见得 + Behauptung (die angezweifelt wird)',
    explanation: 'Drückt höflichen Zweifel oder Widerspruch aus. Man hält eine Behauptung für nicht unbedingt zutreffend.',
    examples: [
      { chinese: '贵的东西不见得就是好的。', pinyin: 'Guì de dōngxi bújiàndé jiùshì hǎo de.', german: 'Teure Sachen sind nicht unbedingt gut.' },
      { chinese: '他说的不见得都是真的。', pinyin: 'Tā shuō de bújiàndé dōu shì zhēn de.', german: 'Was er sagt, muss nicht unbedingt alles wahr sein.' },
      { chinese: '学历高不见得能力就强。', pinyin: 'Xuélì gāo bújiàndé nénglì jiù qiáng.', german: 'Ein hoher Bildungsabschluss bedeutet nicht unbedingt, dass man fähiger ist.' }
    ],
    relatedPatterns: ['未必', '不一定'],
    notes: '不见得 ist umgangssprachlicher als 未必, beide haben aber die gleiche Bedeutung.'
  },
  {
    pattern: '反而',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'im Gegenteil; stattdessen; wider Erwarten',
    formation: '(不但没有 + erwartetes Ergebnis,) 反而 + gegenteiliges Ergebnis',
    explanation: 'Drückt aus, dass das Ergebnis entgegen der Erwartung ausgefallen ist. Oft zusammen mit 不但没有 verwendet.',
    examples: [
      { chinese: '吃了药以后，病不但没好，反而更严重了。', pinyin: 'Chī le yào yǐhòu, bìng búdàn méi hǎo, fǎn\'ér gèng yánzhòng le.', german: 'Nachdem er die Medizin genommen hat, ist die Krankheit nicht nur nicht besser geworden, sondern im Gegenteil schlimmer.' },
      { chinese: '我越解释，她反而越生气。', pinyin: 'Wǒ yuè jiěshì, tā fǎn\'ér yuè shēngqì.', german: 'Je mehr ich erklärt habe, desto wütender wurde sie im Gegenteil.' }
    ],
    relatedPatterns: ['却', '相反', '倒'],
    notes: '反而 betont stärker als 却, dass das Ergebnis dem Erwarteten widerspricht.'
  },
  {
    pattern: '况且',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'ausserdem; zudem; darüber hinaus',
    formation: 'Aussage A，况且 + zusätzliches Argument B',
    explanation: 'Fügt ein weiteres, oft stärkeres Argument hinzu, um die vorherige Aussage zu unterstützen. Ähnlich wie "ausserdem" im Deutschen.',
    examples: [
      { chinese: '这件衣服太贵了，况且颜色我也不喜欢。', pinyin: 'Zhè jiàn yīfu tài guì le, kuàngqiě yánsè wǒ yě bù xǐhuān.', german: 'Dieses Kleidungsstück ist zu teuer, ausserdem gefällt mir die Farbe nicht.' },
      { chinese: '我没有时间去，况且我也没有兴趣。', pinyin: 'Wǒ méiyǒu shíjiān qù, kuàngqiě wǒ yě méiyǒu xìngqù.', german: 'Ich habe keine Zeit hinzugehen, zudem habe ich auch kein Interesse.' }
    ],
    relatedPatterns: ['何况', '而且', '再说'],
    notes: '况且 fügt ein zusätzliches Argument hinzu, während 何况 einen stärkeren Vergleichspunkt einleitet.'
  },
  {
    pattern: '尽量',
    level: 'HSK5',
    category: 'Partikel',
    meaning: 'möglichst; so weit wie möglich; nach Kräften',
    formation: '尽量 + Verb',
    explanation: 'Drückt aus, dass man sich bemüht, etwas bestmöglich zu tun, auch wenn man das Ergebnis nicht garantieren kann.',
    examples: [
      { chinese: '我会尽量早点到。', pinyin: 'Wǒ huì jǐnliàng zǎo diǎn dào.', german: 'Ich werde versuchen, möglichst früh da zu sein.' },
      { chinese: '请尽量用中文回答问题。', pinyin: 'Qǐng jǐnliàng yòng Zhōngwén huídá wèntí.', german: 'Bitte beantworte die Fragen möglichst auf Chinesisch.' },
      { chinese: '考试的时候尽量不要紧张。', pinyin: 'Kǎoshì de shíhou jǐnliàng bú yào jǐnzhāng.', german: 'Versuche, bei der Prüfung möglichst nicht nervös zu sein.' }
    ],
    relatedPatterns: ['尽力', '尽可能'],
    notes: '尽量 bezieht sich auf den Grad oder Umfang einer Handlung, während 尽力 die aufgewendete Anstrengung betont.'
  },
  {
    pattern: '不得已',
    level: 'HSK5',
    category: 'Verben',
    meaning: 'gezwungenermassen; notgedrungen; aus Not',
    formation: '(出于/迫于) 不得已 + Handlung / 不得已之下',
    explanation: 'Drückt aus, dass man keine andere Wahl hatte und gezwungen war, etwas zu tun. Stärker als 不得不 und betont die Ausweglosigkeit.',
    examples: [
      { chinese: '他是出于不得已才做出这个决定的。', pinyin: 'Tā shì chūyú bùdéyǐ cái zuòchū zhège juédìng de.', german: 'Er hat diese Entscheidung nur gezwungenermassen getroffen.' },
      { chinese: '不得已的情况下，我们只好放弃了。', pinyin: 'Bùdéyǐ de qíngkuàng xià, wǒmen zhǐhǎo fàngqì le.', german: 'Unter den gegebenen Umständen mussten wir notgedrungen aufgeben.' }
    ],
    relatedPatterns: ['不得不', '只好', '迫不得已'],
    notes: '不得已 kann auch als Nomen verwendet werden (出于不得已). Es klingt formeller und literarischer als 没办法.'
  },
  {
    pattern: '固然',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'zwar; gewiss; zweifellos (aber...)',
    formation: '固然 + Zugeständnis，但是/可是/不过 + Einschränkung',
    explanation: 'Räumt einen Punkt ein, leitet aber gleichzeitig eine Einschränkung oder einen Gegenargument ein. Ähnlich wie "zwar...aber..." im Deutschen.',
    examples: [
      { chinese: '钱固然重要，但健康更重要。', pinyin: 'Qián gùrán zhòngyào, dàn jiànkāng gèng zhòngyào.', german: 'Geld ist zwar wichtig, aber Gesundheit ist wichtiger.' },
      { chinese: '他的方法固然有效，不过成本太高了。', pinyin: 'Tā de fāngfǎ gùrán yǒuxiào, búguò chéngběn tài gāo le.', german: 'Seine Methode ist zwar effektiv, aber die Kosten sind zu hoch.' }
    ],
    relatedPatterns: ['虽然...但是...', '尽管', '诚然'],
    notes: '固然 ist formeller als 虽然 und wird vor allem in Argumentationen und Aufsätzen verwendet.'
  },
  {
    pattern: '以便',
    level: 'HSK5',
    category: 'Satzstrukturen',
    meaning: 'damit; um zu; zwecks',
    formation: 'Handlung A，以便 + Ziel/Zweck B',
    explanation: 'Drückt einen Zweck oder ein Ziel aus. Die erste Handlung wird durchgeführt, um das genannte Ziel zu erreichen.',
    examples: [
      { chinese: '请提前通知我，以便我做好准备。', pinyin: 'Qǐng tíqián tōngzhī wǒ, yǐbiàn wǒ zuò hǎo zhǔnbèi.', german: 'Bitte informiere mich im Voraus, damit ich mich vorbereiten kann.' },
      { chinese: '我们要多练习口语，以便更好地与人交流。', pinyin: 'Wǒmen yào duō liànxí kǒuyǔ, yǐbiàn gèng hǎo de yǔ rén jiāoliú.', german: 'Wir sollten mehr mündlich üben, um besser mit anderen kommunizieren zu können.' }
    ],
    relatedPatterns: ['以免', '为了', '好让'],
    notes: '以便 ist formeller als 好 oder 好让. Wird häufig in schriftlichen Anweisungen und formellen Kontexten verwendet.'
  }
]);
