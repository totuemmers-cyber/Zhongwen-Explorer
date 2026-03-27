// Redewendungen & Sprichwoerter (谚语/俗语) — Chinese Proverbs & Sayings
// Chinesische Sprichwoerter und Redewendungen fuer deutschsprachige Lerner
// UI-Sprache: Deutsch
(function () {
  var redewendungen = [

    // === LEBENSWEISHEIT ===

    { word: '活到老，学到老', pinyin: 'huó dào lǎo, xué dào lǎo', meaning: 'Man lernt nie aus', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '爷爷八十岁了还在学电脑，真是活到老学到老。', pinyin: 'Yéye bāshí suì le hái zài xué diànnǎo, zhēn shì huó dào lǎo xué dào lǎo.', german: 'Grossvater ist 80 und lernt immer noch Computer, man lernt wirklich nie aus.' }] },

    { word: '千里之行，始于足下', pinyin: 'qiān lǐ zhī xíng, shǐ yú zú xià', meaning: 'Auch der laengste Weg beginnt mit dem ersten Schritt', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '别怕困难，千里之行，始于足下。', pinyin: 'Bié pà kùnnán, qiān lǐ zhī xíng, shǐ yú zú xià.', german: 'Hab keine Angst vor Schwierigkeiten, auch der laengste Weg beginnt mit dem ersten Schritt.' }] },

    { word: '塞翁失马，焉知非福', pinyin: 'sài wēng shī mǎ, yān zhī fēi fú', meaning: 'Ein Unglueck kann sich als Glueck erweisen', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '虽然你丢了那份工作，但塞翁失马，焉知非福，也许会找到更好的。', pinyin: 'Suīrán nǐ diū le nà fèn gōngzuò, dàn sài wēng shī mǎ, yān zhī fēi fú, yěxǔ huì zhǎodào gèng hǎo de.', german: 'Obwohl du den Job verloren hast, kann sich das Unglueck als Glueck erweisen, vielleicht findest du einen besseren.' }] },

    { word: '吃一堑，长一智', pinyin: 'chī yī qiàn, zhǎng yī zhì', meaning: 'Aus Schaden wird man klug', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '上次被骗了，这次我特别小心，吃一堑长一智嘛。', pinyin: 'Shàng cì bèi piàn le, zhè cì wǒ tèbié xiǎoxīn, chī yī qiàn zhǎng yī zhì ma.', german: 'Letztes Mal wurde ich betrogen, diesmal bin ich besonders vorsichtig, aus Schaden wird man klug.' }] },

    { word: '三人行，必有我师', pinyin: 'sān rén xíng, bì yǒu wǒ shī', meaning: 'Unter drei Wanderern ist bestimmt einer, der mein Lehrer sein kann', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '我们应该虚心学习，三人行必有我师。', pinyin: 'Wǒmen yīnggāi xūxīn xuéxí, sān rén xíng bì yǒu wǒ shī.', german: 'Wir sollten bescheiden lernen, unter drei Wanderern ist bestimmt einer, der mein Lehrer sein kann.' }] },

    { word: '百闻不如一见', pinyin: 'bǎi wén bù rú yī jiàn', meaning: 'Einmal sehen ist besser als hundertmal hoeren', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '中国真的很美，百闻不如一见，你应该亲自去看看。', pinyin: 'Zhōngguó zhēn de hěn měi, bǎi wén bù rú yī jiàn, nǐ yīnggāi qīnzì qù kànkan.', german: 'China ist wirklich schoen, einmal sehen ist besser als hundertmal hoeren, du solltest es selbst besuchen.' }] },

    { word: '入乡随俗', pinyin: 'rù xiāng suí sú', meaning: 'Andere Laender, andere Sitten (wortl.: Betritt man ein Land, folge man seinen Braeuchen)', type: 'Redewendung', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '到了日本就要脱鞋进屋，入乡随俗嘛。', pinyin: 'Dào le Rìběn jiù yào tuō xié jìn wū, rù xiāng suí sú ma.', german: 'In Japan muss man die Schuhe ausziehen, bevor man reingeht, andere Laender, andere Sitten.' }] },

    { word: '知足常乐', pinyin: 'zhī zú cháng lè', meaning: 'Wer zufrieden ist, ist immer gluecklich', type: 'Redewendung', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '别总是和别人比较，知足常乐才是最重要的。', pinyin: 'Bié zǒng shì hé biérén bǐjiào, zhī zú cháng lè cái shì zuì zhòngyào de.', german: 'Vergleich dich nicht immer mit anderen, Zufriedenheit ist das Wichtigste.' }] },

    { word: '己所不欲，勿施于人', pinyin: 'jǐ suǒ bù yù, wù shī yú rén', meaning: 'Was du nicht willst, das man dir tu, das fueg auch keinem andern zu', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '做人要将心比心，己所不欲勿施于人。', pinyin: 'Zuòrén yào jiāng xīn bǐ xīn, jǐ suǒ bù yù wù shī yú rén.', german: 'Man soll sich in andere hineinversetzen, was du nicht willst, das man dir tu, das fueg auch keinem andern zu.' }] },

    { word: '学无止境', pinyin: 'xué wú zhǐ jìng', meaning: 'Das Lernen kennt keine Grenzen', type: 'Redewendung', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '他虽然已经是教授了，但仍然每天看书，学无止境。', pinyin: 'Tā suīrán yǐjīng shì jiàoshòu le, dàn réngrán měi tiān kàn shū, xué wú zhǐ jìng.', german: 'Obwohl er bereits Professor ist, liest er immer noch taeglich, das Lernen kennt keine Grenzen.' }] },

    { word: '人无完人', pinyin: 'rén wú wán rén', meaning: 'Niemand ist perfekt', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '别对自己要求太高了，人无完人嘛。', pinyin: 'Bié duì zìjǐ yāoqiú tài gāo le, rén wú wán rén ma.', german: 'Sei nicht zu streng mit dir selbst, niemand ist perfekt.' }] },

    { word: '金无足赤，人无完人', pinyin: 'jīn wú zú chì, rén wú wán rén', meaning: 'Kein Gold ist voellig rein, kein Mensch ist voellig vollkommen', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '不要苛求别人，金无足赤，人无完人。', pinyin: 'Bù yào kēqiú biérén, jīn wú zú chì, rén wú wán rén.', german: 'Sei nicht zu anspruchsvoll gegenueber anderen, kein Gold ist voellig rein, kein Mensch voellig vollkommen.' }] },

    { word: '路遥知马力，日久见人心', pinyin: 'lù yáo zhī mǎ lì, rì jiǔ jiàn rén xīn', meaning: 'Auf langen Wegen erkennt man die Staerke des Pferdes, mit der Zeit das Herz des Menschen', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '他在困难时帮助了我，路遥知马力，日久见人心。', pinyin: 'Tā zài kùnnán shí bāngzhù le wǒ, lù yáo zhī mǎ lì, rì jiǔ jiàn rén xīn.', german: 'Er hat mir in schwierigen Zeiten geholfen, mit der Zeit erkennt man das wahre Herz eines Menschen.' }] },

    { word: '留得青山在，不怕没柴烧', pinyin: 'liú de qīngshān zài, bù pà méi chái shāo', meaning: 'Solange die gruenen Berge bleiben, braucht man kein Brennholz zu fuerchten (Es gibt immer eine Chance)', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '这次生意失败了没关系，留得青山在，不怕没柴烧。', pinyin: 'Zhè cì shēngyì shībài le méi guānxi, liú de qīngshān zài, bù pà méi chái shāo.', german: 'Dass das Geschaeft diesmal gescheitert ist, macht nichts, solange man lebt, gibt es immer eine Chance.' }] },

    { word: '前人栽树，后人乘凉', pinyin: 'qián rén zāi shù, hòu rén chéng liáng', meaning: 'Vorfahren pflanzen Baeume, Nachkommen geniessen den Schatten', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '我们今天的好生活要感谢老一辈，前人栽树后人乘凉。', pinyin: 'Wǒmen jīntiān de hǎo shēnghuó yào gǎnxiè lǎo yī bèi, qián rén zāi shù hòu rén chéng liáng.', german: 'Wir muessen der aelteren Generation fuer unser heutiges gutes Leben danken, Vorfahren pflanzten Baeume, Nachkommen geniessen den Schatten.' }] },

    { word: '当局者迷，旁观者清', pinyin: 'dāng jú zhě mí, páng guān zhě qīng', meaning: 'Der Beteiligte ist verwirrt, der Zuschauer sieht klar', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '你让朋友帮你分析一下吧，当局者迷，旁观者清。', pinyin: 'Nǐ ràng péngyǒu bāng nǐ fēnxī yīxià ba, dāng jú zhě mí, páng guān zhě qīng.', german: 'Lass deine Freunde dir bei der Analyse helfen, der Beteiligte ist verwirrt, der Zuschauer sieht klar.' }] },

    { word: '温故而知新', pinyin: 'wēn gù ér zhī xīn', meaning: 'Durch Wiederholung des Alten lernt man Neues', type: 'Redewendung', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '学中文要经常复习，温故而知新。', pinyin: 'Xué Zhōngwén yào jīngcháng fùxí, wēn gù ér zhī xīn.', german: 'Beim Chinesischlernen muss man oft wiederholen, durch Wiederholung des Alten lernt man Neues.' }] },

    // === ERMUTIGUNG ===

    { word: '有志者事竟成', pinyin: 'yǒu zhì zhě shì jìng chéng', meaning: 'Wo ein Wille ist, ist auch ein Weg', type: 'Sprichwort', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '只要你坚持下去，有志者事竟成。', pinyin: 'Zhǐyào nǐ jiānchí xiàqù, yǒu zhì zhě shì jìng chéng.', german: 'Solange du durchhaeltst, wo ein Wille ist, ist auch ein Weg.' }] },

    { word: '功夫不负有心人', pinyin: 'gōngfu bù fù yǒu xīn rén', meaning: 'Fleiss wird immer belohnt', type: 'Sprichwort', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '她终于通过了HSK六级考试，功夫不负有心人。', pinyin: 'Tā zhōngyú tōngguò le HSK liù jí kǎoshì, gōngfu bù fù yǒu xīn rén.', german: 'Sie hat endlich die HSK6-Pruefung bestanden, Fleiss wird immer belohnt.' }] },

    { word: '不入虎穴，焉得虎子', pinyin: 'bù rù hǔ xué, yān dé hǔ zǐ', meaning: 'Wer nicht wagt, der nicht gewinnt (wortl.: Wer nicht in die Tigerhoehle geht, fängt kein Tigerjunges)', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '你不试试怎么知道行不行？不入虎穴，焉得虎子。', pinyin: 'Nǐ bù shìshi zěnme zhīdào xíng bù xíng? Bù rù hǔ xué, yān dé hǔ zǐ.', german: 'Woher willst du wissen ob es geht, wenn du es nicht versuchst? Wer nicht wagt, der nicht gewinnt.' }] },

    { word: '一分耕耘，一分收获', pinyin: 'yī fēn gēngyún, yī fēn shōuhuò', meaning: 'Wie die Saat, so die Ernte', type: 'Sprichwort', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '他每天练习三个小时钢琴，一分耕耘一分收获，终于获奖了。', pinyin: 'Tā měi tiān liànxí sān ge xiǎoshí gāngqín, yī fēn gēngyún yī fēn shōuhuò, zhōngyú huò jiǎng le.', german: 'Er uebt taeglich drei Stunden Klavier, wie die Saat so die Ernte, endlich hat er einen Preis gewonnen.' }] },

    { word: '失败是成功之母', pinyin: 'shībài shì chénggōng zhī mǔ', meaning: 'Misserfolg ist die Mutter des Erfolgs', type: 'Sprichwort', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '别灰心，失败是成功之母，再试一次吧。', pinyin: 'Bié huīxīn, shībài shì chénggōng zhī mǔ, zài shì yī cì ba.', german: 'Sei nicht entmutigt, Misserfolg ist die Mutter des Erfolgs, versuch es noch einmal.' }] },

    { word: '世上无难事，只怕有心人', pinyin: 'shì shàng wú nán shì, zhǐ pà yǒu xīn rén', meaning: 'Nichts auf der Welt ist schwierig, wenn man sich Muehe gibt', type: 'Sprichwort', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '只要努力，世上无难事，只怕有心人。', pinyin: 'Zhǐyào nǔlì, shì shàng wú nán shì, zhǐ pà yǒu xīn rén.', german: 'Wenn man sich anstrengt, ist nichts auf der Welt unmoeglich.' }] },

    { word: '熟能生巧', pinyin: 'shú néng shēng qiǎo', meaning: 'Uebung macht den Meister', type: 'Redewendung', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '中文写得不好没关系，多练习就行了，熟能生巧。', pinyin: 'Zhōngwén xiě de bù hǎo méi guānxi, duō liànxí jiù xíng le, shú néng shēng qiǎo.', german: 'Es macht nichts, wenn dein Chinesisch nicht gut ist, ueb einfach mehr, Uebung macht den Meister.' }] },

    { word: '天下无难事，只怕有心人', pinyin: 'tiān xià wú nán shì, zhǐ pà yǒu xīn rén', meaning: 'Unter dem Himmel gibt es nichts Schwieriges fuer den, der den Willen hat', type: 'Sprichwort', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '你一定能学会的，天下无难事，只怕有心人。', pinyin: 'Nǐ yīdìng néng xué huì de, tiān xià wú nán shì, zhǐ pà yǒu xīn rén.', german: 'Du wirst es bestimmt lernen, unter dem Himmel gibt es nichts Schwieriges fuer den, der will.' }] },

    { word: '铁杵磨成针', pinyin: 'tiě chǔ mó chéng zhēn', meaning: 'Auch ein Eisenstab kann zu einer Nadel geschliffen werden (Ausdauer fuehrt zum Ziel)', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '学中文需要耐心，铁杵磨成针，慢慢来。', pinyin: 'Xué Zhōngwén xūyào nàixīn, tiě chǔ mó chéng zhēn, mànmàn lái.', german: 'Chinesisch lernen braucht Geduld, auch ein Eisenstab wird zur Nadel, immer mit der Ruhe.' }] },

    { word: '笨鸟先飞', pinyin: 'bèn niǎo xiān fēi', meaning: 'Der langsame Vogel fliegt zuerst los (Fleiss gleicht Schwaeche aus)', type: 'Redewendung', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '我知道自己不是最聪明的，所以笨鸟先飞，每天早起学习。', pinyin: 'Wǒ zhīdào zìjǐ bù shì zuì cōngmíng de, suǒyǐ bèn niǎo xiān fēi, měi tiān zǎoqǐ xuéxí.', german: 'Ich weiss, dass ich nicht der Kluegste bin, deshalb stehe ich taeglich frueh auf zum Lernen, der langsame Vogel fliegt zuerst.' }] },

    { word: '只要功夫深，铁杵磨成针', pinyin: 'zhǐ yào gōngfu shēn, tiě chǔ mó chéng zhēn', meaning: 'Mit genuegend Ausdauer kann selbst ein Eisenstab zur Nadel geschliffen werden', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '学任何东西都需要坚持，只要功夫深，铁杵磨成针。', pinyin: 'Xué rènhé dōngxi dōu xūyào jiānchí, zhǐ yào gōngfu shēn, tiě chǔ mó chéng zhēn.', german: 'Alles Lernen braucht Durchhaltevermoegen, mit genuegend Ausdauer wird alles moeglich.' }] },

    { word: '不经一事，不长一智', pinyin: 'bù jīng yī shì, bù zhǎng yī zhì', meaning: 'Ohne Erfahrung keine Weisheit', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '年轻人要多经历，不经一事，不长一智。', pinyin: 'Niánqīngrén yào duō jīnglì, bù jīng yī shì, bù zhǎng yī zhì.', german: 'Junge Leute sollen viel erleben, ohne Erfahrung keine Weisheit.' }] },

    { word: '绳锯木断，水滴石穿', pinyin: 'shéng jù mù duàn, shuǐ dī shí chuān', meaning: 'Das Seil saegt Holz durch, Wasser hoehlt Stein (Beharrlichkeit fuehrt zum Ziel)', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '只要每天坚持练习，绳锯木断，水滴石穿，一定能进步。', pinyin: 'Zhǐyào měi tiān jiānchí liànxí, shéng jù mù duàn, shuǐ dī shí chuān, yīdìng néng jìnbù.', german: 'Wenn man taeglich uebt, fuehrt Beharrlichkeit zum Ziel, man wird bestimmt Fortschritte machen.' }] },

    { word: '天生我材必有用', pinyin: 'tiān shēng wǒ cái bì yǒu yòng', meaning: 'Jeder Mensch hat seinen Nutzen (Der Himmel hat mich mit Talenten geboren, die gebraucht werden)', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '别小看自己，天生我材必有用。', pinyin: 'Bié xiǎokàn zìjǐ, tiān shēng wǒ cái bì yǒu yòng.', german: 'Unterschaetze dich nicht, jeder Mensch hat seinen Nutzen.' }] },

    { word: '宝剑锋从磨砺出，梅花香自苦寒来', pinyin: 'bǎo jiàn fēng cóng mó lì chū, méi huā xiāng zì kǔ hán lái', meaning: 'Die Schaerfe des Schwertes kommt vom Schleifen, der Duft der Pflaumenblüte von der bitteren Kaelte', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '成功需要吃苦，宝剑锋从磨砺出，梅花香自苦寒来。', pinyin: 'Chénggōng xūyào chīkǔ, bǎo jiàn fēng cóng mó lì chū, méi huā xiāng zì kǔ hán lái.', german: 'Erfolg erfordert Muehsal, die Schaerfe des Schwertes kommt vom Schleifen.' }] },

    // === WARNUNG ===

    { word: '三个臭皮匠，赛过诸葛亮', pinyin: 'sān gè chòu píjiàng, sài guò Zhūgě Liàng', meaning: 'Drei einfache Schuster uebertreffen einen Zhuge Liang (Gemeinsam ist man klueger)', type: 'Sprichwort', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '这个问题我们一起讨论吧，三个臭皮匠赛过诸葛亮。', pinyin: 'Zhè ge wèntí wǒmen yīqǐ tǎolùn ba, sān gè chòu píjiàng sài guò Zhūgě Liàng.', german: 'Lass uns das Problem gemeinsam besprechen, drei Koepfe sind besser als einer.' }] },

    { word: '一失足成千古恨', pinyin: 'yī shī zú chéng qiān gǔ hèn', meaning: 'Ein Fehltritt fuehrt zu ewigem Bedauern', type: 'Sprichwort', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '做重要决定前一定要三思，一失足成千古恨。', pinyin: 'Zuò zhòngyào juédìng qián yīdìng yào sān sī, yī shī zú chéng qiān gǔ hèn.', german: 'Vor wichtigen Entscheidungen muss man dreimal nachdenken, ein Fehltritt fuehrt zu ewigem Bedauern.' }] },

    { word: '防人之心不可无', pinyin: 'fáng rén zhī xīn bù kě wú', meaning: 'Man sollte immer wachsam gegenueber anderen sein', type: 'Redewendung', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '出门在外要小心，害人之心不可有，防人之心不可无。', pinyin: 'Chūmén zài wài yào xiǎoxīn, hài rén zhī xīn bù kě yǒu, fáng rén zhī xīn bù kě wú.', german: 'Draussen muss man vorsichtig sein, man soll niemandem schaden, aber immer wachsam sein.' }] },

    { word: '人不可貌相', pinyin: 'rén bù kě mào xiàng', meaning: 'Man soll einen Menschen nicht nach seinem Aeusseren beurteilen', type: 'Redewendung', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '别看他穿得很普通，人不可貌相，他其实很有钱。', pinyin: 'Bié kàn tā chuān de hěn pǔtōng, rén bù kě mào xiàng, tā qíshí hěn yǒu qián.', german: 'Schau nicht, dass er einfach gekleidet ist, man soll nicht nach dem Aeusseren urteilen, er ist eigentlich sehr reich.' }] },

    { word: '纸包不住火', pinyin: 'zhǐ bāo bù zhù huǒ', meaning: 'Papier kann kein Feuer einwickeln (Die Wahrheit kommt immer ans Licht)', type: 'Redewendung', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '你别想隐瞒了，纸包不住火，迟早会被发现的。', pinyin: 'Nǐ bié xiǎng yǐnmán le, zhǐ bāo bù zhù huǒ, chízǎo huì bèi fāxiàn de.', german: 'Versuch nicht, es zu verheimlichen, die Wahrheit kommt immer ans Licht, frueher oder spaeter wird es entdeckt.' }] },

    { word: '聪明反被聪明误', pinyin: 'cōngmíng fǎn bèi cōngmíng wù', meaning: 'Zu viel Klugheit kann einem schaden', type: 'Sprichwort', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '他以为自己很聪明，结果聪明反被聪明误。', pinyin: 'Tā yǐwéi zìjǐ hěn cōngmíng, jiéguǒ cōngmíng fǎn bèi cōngmíng wù.', german: 'Er dachte, er waere sehr klug, aber am Ende hat ihm seine Klugheit geschadet.' }] },

    { word: '贪小便宜吃大亏', pinyin: 'tān xiǎo piányi chī dà kuī', meaning: 'Wer nach kleinen Vorteilen giert, erleidet grosse Verluste', type: 'Redewendung', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '那个东西太便宜了，肯定有问题，贪小便宜吃大亏。', pinyin: 'Nà ge dōngxi tài piányi le, kěndìng yǒu wèntí, tān xiǎo piányi chī dà kuī.', german: 'Das Ding ist zu billig, es gibt bestimmt ein Problem, wer nach kleinen Vorteilen giert, erleidet grosse Verluste.' }] },

    { word: '不听老人言，吃亏在眼前', pinyin: 'bù tīng lǎo rén yán, chī kuī zài yǎn qián', meaning: 'Wer nicht auf die Aelteren hoert, wird bald den Schaden haben', type: 'Sprichwort', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '我早就告诉你了，不听老人言，吃亏在眼前。', pinyin: 'Wǒ zǎo jiù gàosù nǐ le, bù tīng lǎo rén yán, chī kuī zài yǎn qián.', german: 'Ich hab es dir schon lange gesagt, wer nicht auf die Aelteren hoert, wird bald den Schaden haben.' }] },

    { word: '人心隔肚皮', pinyin: 'rén xīn gé dù pí', meaning: 'Das Herz eines Menschen ist durch die Bauchhaut verborgen (Man kann Menschen nicht durchschauen)', type: 'Redewendung', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '交朋友要慢慢来，人心隔肚皮，不能太快相信别人。', pinyin: 'Jiāo péngyǒu yào mànmàn lái, rén xīn gé dù pí, bù néng tài kuài xiāngxìn biérén.', german: 'Freundschaften soll man langsam aufbauen, man kann Menschen nicht durchschauen, man darf nicht zu schnell vertrauen.' }] },

    { word: '画蛇添足', pinyin: 'huà shé tiān zú', meaning: 'Einer Schlange Fuesse hinzumalen (Ueberfluessiges tun, das schadet)', type: 'Redewendung', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '文章已经写得很好了，别再修改了，画蛇添足反而不好。', pinyin: 'Wénzhāng yǐjīng xiě de hěn hǎo le, bié zài xiūgǎi le, huà shé tiān zú fǎn ér bù hǎo.', german: 'Der Aufsatz ist schon sehr gut, aendere nichts mehr, es waere ueberfluessig und wuerde eher schaden.' }] },

    { word: '覆水难收', pinyin: 'fù shuǐ nán shōu', meaning: 'Verschuettetes Wasser laesst sich nicht wieder einsammeln (Was geschehen ist, ist geschehen)', type: 'Redewendung', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '话已经说出去了，覆水难收，你只能面对后果了。', pinyin: 'Huà yǐjīng shuō chūqù le, fù shuǐ nán shōu, nǐ zhǐ néng miànduì hòuguǒ le.', german: 'Die Worte sind schon gesagt, was geschehen ist, ist geschehen, du kannst nur noch die Folgen tragen.' }] },

    { word: '玩火自焚', pinyin: 'wán huǒ zì fén', meaning: 'Wer mit dem Feuer spielt, verbrennt sich selbst', type: 'Redewendung', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '他做违法的事情，迟早会玩火自焚。', pinyin: 'Tā zuò wéifǎ de shìqíng, chízǎo huì wán huǒ zì fén.', german: 'Er tut illegale Dinge, frueher oder spaeter verbrennt er sich selbst.' }] },

    { word: '一言既出，驷马难追', pinyin: 'yī yán jì chū, sì mǎ nán zhuī', meaning: 'Ein gesprochenes Wort kann nicht einmal von vier Pferden eingeholt werden', type: 'Sprichwort', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '你答应了就不能反悔，一言既出，驷马难追。', pinyin: 'Nǐ dāyìng le jiù bù néng fǎnhuǐ, yī yán jì chū, sì mǎ nán zhuī.', german: 'Wenn du zugesagt hast, kannst du es nicht zuruecknehmen, ein gesprochenes Wort kann nicht zurueckgeholt werden.' }] },

    { word: '杀鸡儆猴', pinyin: 'shā jī jǐng hóu', meaning: 'Ein Huhn toeten, um den Affen zu warnen (ein Exempel statuieren)', type: 'Redewendung', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '老板开除了那个迟到的员工，就是杀鸡儆猴。', pinyin: 'Lǎobǎn kāichú le nà ge chídào de yuángōng, jiù shì shā jī jǐng hóu.', german: 'Der Chef hat den Zuspaetkommer gefeuert, um ein Exempel zu statuieren.' }] },

    { word: '自食其果', pinyin: 'zì shí qí guǒ', meaning: 'Die Fruechte seines eigenen Tuns ernten (die Konsequenzen tragen)', type: 'Redewendung', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '他不听劝告，现在自食其果。', pinyin: 'Tā bù tīng quàngào, xiànzài zì shí qí guǒ.', german: 'Er hat nicht auf den Rat gehoert, jetzt traegt er die Konsequenzen.' }] },

    { word: '搬起石头砸自己的脚', pinyin: 'bān qǐ shítou zá zìjǐ de jiǎo', meaning: 'Einen Stein hochheben und sich selbst auf den Fuss fallen lassen (sich selbst schaden)', type: 'Redewendung', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '他想害别人，结果搬起石头砸了自己的脚。', pinyin: 'Tā xiǎng hài biérén, jiéguǒ bān qǐ shítou zá le zìjǐ de jiǎo.', german: 'Er wollte anderen schaden, aber am Ende hat er sich selbst geschadet.' }] },

    // === SPRICHWORT (allgemeine Sprichwoerter) ===

    { word: '事实胜于雄辩', pinyin: 'shìshí shèng yú xióngbiàn', meaning: 'Tatsachen sprechen lauter als Worte', type: 'Sprichwort', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '别解释了，事实胜于雄辩，用行动证明自己吧。', pinyin: 'Bié jiěshì le, shìshí shèng yú xióngbiàn, yòng xíngdòng zhèngmíng zìjǐ ba.', german: 'Erklaer nichts mehr, Tatsachen sprechen lauter als Worte, beweise es durch Taten.' }] },

    { word: '眼见为实，耳听为虚', pinyin: 'yǎn jiàn wéi shí, ěr tīng wéi xū', meaning: 'Was man sieht, ist wahr; was man hoert, ist unsicher', type: 'Sprichwort', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '别光听别人说，眼见为实，耳听为虚。', pinyin: 'Bié guāng tīng biérén shuō, yǎn jiàn wéi shí, ěr tīng wéi xū.', german: 'Hoer nicht nur, was andere sagen, was man sieht, ist wahr, was man hoert, ist unsicher.' }] },

    { word: '说曹操，曹操到', pinyin: 'shuō Cáo Cāo, Cáo Cāo dào', meaning: 'Wenn man vom Teufel spricht (wortl.: Spricht man von Cao Cao, kommt Cao Cao)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '我们刚在说你呢，说曹操曹操到！', pinyin: 'Wǒmen gāng zài shuō nǐ ne, shuō Cáo Cāo Cáo Cāo dào!', german: 'Wir haben gerade ueber dich gesprochen, wenn man vom Teufel spricht!' }] },

    { word: '条条大路通罗马', pinyin: 'tiáo tiáo dà lù tōng Luómǎ', meaning: 'Alle Wege fuehren nach Rom', type: 'Sprichwort', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '学中文的方法很多，条条大路通罗马，找到适合你的就行。', pinyin: 'Xué Zhōngwén de fāngfǎ hěn duō, tiáo tiáo dà lù tōng Luómǎ, zhǎodào shìhé nǐ de jiù xíng.', german: 'Es gibt viele Methoden, Chinesisch zu lernen, alle Wege fuehren nach Rom, finde einfach den, der zu dir passt.' }] },

    { word: '对牛弹琴', pinyin: 'duì niú tán qín', meaning: 'Vor einer Kuh Laute spielen (Tauben Ohren predigen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '跟他讲道理简直是对牛弹琴。', pinyin: 'Gēn tā jiǎng dàolǐ jiǎnzhí shì duì niú tán qín.', german: 'Mit ihm zu diskutieren ist wie tauben Ohren zu predigen.' }] },

    { word: '守株待兔', pinyin: 'shǒu zhū dài tù', meaning: 'Am Baumstumpf auf den Hasen warten (untaetig auf einen Glueckstreffer hoffen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '你不能守株待兔，要主动去找工作。', pinyin: 'Nǐ bù néng shǒu zhū dài tù, yào zhǔdòng qù zhǎo gōngzuò.', german: 'Du kannst nicht untaetig auf Glueck warten, du musst aktiv nach Arbeit suchen.' }] },

    { word: '井底之蛙', pinyin: 'jǐng dǐ zhī wā', meaning: 'Ein Frosch am Grunde des Brunnens (beschraenkter Horizont)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '你应该多出去看看，别做井底之蛙。', pinyin: 'Nǐ yīnggāi duō chūqù kànkan, bié zuò jǐng dǐ zhī wā.', german: 'Du solltest mehr rausgehen und die Welt sehen, sei kein Frosch im Brunnen.' }] },

    { word: '亡羊补牢', pinyin: 'wáng yáng bǔ láo', meaning: 'Den Pferch reparieren, nachdem das Schaf verloren ist (besser spaet als nie)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '虽然错了，但亡羊补牢，为时未晚。', pinyin: 'Suīrán cuò le, dàn wáng yáng bǔ láo, wéi shí wèi wǎn.', german: 'Obwohl ein Fehler gemacht wurde, ist es noch nicht zu spaet, den Pferch zu reparieren, besser spaet als nie.' }] },

    { word: '班门弄斧', pinyin: 'bān mén nòng fǔ', meaning: 'Vor Lu Bans Tuer die Axt schwingen (vor einem Experten angeben)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '在教授面前谈理论，真是班门弄斧。', pinyin: 'Zài jiàoshòu miànqián tán lǐlùn, zhēn shì bān mén nòng fǔ.', german: 'Vor dem Professor ueber Theorie zu reden, ist wirklich angeberisch.' }] },

    { word: '半途而废', pinyin: 'bàn tú ér fèi', meaning: 'Auf halbem Weg aufgeben', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '做事不能半途而废，要坚持到底。', pinyin: 'Zuò shì bù néng bàn tú ér fèi, yào jiānchí dào dǐ.', german: 'Man darf nicht auf halbem Weg aufgeben, man muss bis zum Ende durchhalten.' }] },

    { word: '揠苗助长', pinyin: 'yà miáo zhù zhǎng', meaning: 'An den Setzlingen ziehen, damit sie schneller wachsen (durch Ungeduld Schaden anrichten)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '教育孩子不能揠苗助长，要顺其自然。', pinyin: 'Jiàoyù háizi bù néng yà miáo zhù zhǎng, yào shùn qí zìrán.', german: 'Bei der Kindererziehung darf man nicht durch Ungeduld schaden, man muss der Natur ihren Lauf lassen.' }] },

    { word: '画龙点睛', pinyin: 'huà lóng diǎn jīng', meaning: 'Dem gemalten Drachen die Augen einsetzen (das entscheidende Detail hinzufuegen)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '最后一段话是画龙点睛之笔，使整篇文章更完美了。', pinyin: 'Zuìhòu yī duàn huà shì huà lóng diǎn jīng zhī bǐ, shǐ zhěng piān wénzhāng gèng wánměi le.', german: 'Der letzte Absatz war das entscheidende Detail, das den ganzen Aufsatz noch besser gemacht hat.' }] },

    { word: '狐假虎威', pinyin: 'hú jiǎ hǔ wēi', meaning: 'Der Fuchs leiht sich die Macht des Tigers (mit geliehener Autoritaet prahlen)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '他仗着他爸爸的权力欺负别人，真是狐假虎威。', pinyin: 'Tā zhàngzhe tā bàba de quánlì qīfù biérén, zhēn shì hú jiǎ hǔ wēi.', german: 'Er nutzt die Macht seines Vaters, um andere zu schikanieren, er prahlt mit geliehener Autoritaet.' }] },

    { word: '滴水穿石', pinyin: 'dī shuǐ chuān shí', meaning: 'Stetig tropfendes Wasser hoehlt den Stein', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '学语言需要每天练习，滴水穿石，总会有进步。', pinyin: 'Xué yǔyán xūyào měi tiān liànxí, dī shuǐ chuān shí, zǒng huì yǒu jìnbù.', german: 'Sprachen lernen erfordert taegliches Ueben, stetig tropfendes Wasser hoehlt den Stein, Fortschritt kommt bestimmt.' }] },

    { word: '刻舟求剑', pinyin: 'kè zhōu qiú jiàn', meaning: 'Eine Markierung ins Boot ritzen, um das Schwert zu suchen (an veraenderten Dingen starr festhalten)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '时代在变化，不能刻舟求剑，要跟上变化。', pinyin: 'Shídài zài biànhuà, bù néng kè zhōu qiú jiàn, yào gēnshàng biànhuà.', german: 'Die Zeiten aendern sich, man darf nicht starr an Altem festhalten, man muss mit der Veraenderung gehen.' }] },

    { word: '杯弓蛇影', pinyin: 'bēi gōng shé yǐng', meaning: 'Den Schatten eines Bogens im Becher fuer eine Schlange halten (vor dem eigenen Schatten erschrecken)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '别杯弓蛇影了，这里很安全。', pinyin: 'Bié bēi gōng shé yǐng le, zhèlǐ hěn ānquán.', german: 'Erschrick nicht vor deinem eigenen Schatten, hier ist es sehr sicher.' }] },

    // === NATUR ===

    { word: '一年之计在于春', pinyin: 'yī nián zhī jì zài yú chūn', meaning: 'Der Plan eines Jahres liegt im Fruehling (Man soll frueh mit der Planung beginnen)', type: 'Sprichwort', level: 'HSK5', category: 'Natur', examples: [{ chinese: '一年之计在于春，趁现在开始准备吧。', pinyin: 'Yī nián zhī jì zài yú chūn, chèn xiànzài kāishǐ zhǔnbèi ba.', german: 'Der Plan eines Jahres liegt im Fruehling, fang jetzt an, dich vorzubereiten.' }] },

    { word: '春雨贵如油', pinyin: 'chūn yǔ guì rú yóu', meaning: 'Fruehlingsregen ist so kostbar wie Oel', type: 'Sprichwort', level: 'HSK5', category: 'Natur', examples: [{ chinese: '今年春天下了很多雨，真好，春雨贵如油啊。', pinyin: 'Jīnnián chūntiān xià le hěn duō yǔ, zhēn hǎo, chūn yǔ guì rú yóu a.', german: 'Diesen Fruehling hat es viel geregnet, wie schoen, Fruehlingsregen ist kostbar wie Oel.' }] },

    { word: '近水楼台先得月', pinyin: 'jìn shuǐ lóu tái xiān dé yuè', meaning: 'Das Haus am Wasser sieht zuerst den Mond (Naehe verschafft Vorteile)', type: 'Sprichwort', level: 'HSK6', category: 'Natur', examples: [{ chinese: '他住在学校旁边，近水楼台先得月，每天能用图书馆。', pinyin: 'Tā zhù zài xuéxiào pángbiān, jìn shuǐ lóu tái xiān dé yuè, měi tiān néng yòng túshūguǎn.', german: 'Er wohnt neben der Schule, Naehe verschafft Vorteile, er kann taeglich die Bibliothek nutzen.' }] },

    { word: '种瓜得瓜，种豆得豆', pinyin: 'zhòng guā dé guā, zhòng dòu dé dòu', meaning: 'Wer Melonen saeht, erntet Melonen; wer Bohnen saeht, erntet Bohnen (Man erntet, was man saet)', type: 'Sprichwort', level: 'HSK5', category: 'Natur', examples: [{ chinese: '你对别人好，别人也会对你好，种瓜得瓜，种豆得豆。', pinyin: 'Nǐ duì biérén hǎo, biérén yě huì duì nǐ hǎo, zhòng guā dé guā, zhòng dòu dé dòu.', german: 'Wenn du gut zu anderen bist, sind sie auch gut zu dir, man erntet, was man saet.' }] },

    { word: '大树底下好乘凉', pinyin: 'dà shù dǐ xià hǎo chéng liáng', meaning: 'Unter einem grossen Baum laesst es sich gut im Schatten ruhen (Von Maechtigeren profitieren)', type: 'Sprichwort', level: 'HSK5', category: 'Natur', examples: [{ chinese: '他有一个有权势的叔叔，大树底下好乘凉。', pinyin: 'Tā yǒu yī gè yǒu quánshì de shūshu, dà shù dǐ xià hǎo chéng liáng.', german: 'Er hat einen maechigen Onkel, unter einem grossen Baum laesst es sich gut ausruhen.' }] },

    { word: '风水轮流转', pinyin: 'fēngshuǐ lún liú zhuǎn', meaning: 'Das Glueck dreht sich im Kreis (Jedem laechelt einmal das Glueck)', type: 'Redewendung', level: 'HSK5', category: 'Natur', examples: [{ chinese: '别太得意，风水轮流转，谁都有倒霉的时候。', pinyin: 'Bié tài déyì, fēngshuǐ lún liú zhuǎn, shéi dōu yǒu dǎoméi de shíhòu.', german: 'Sei nicht zu uebermuetig, das Glueck dreht sich, jeder hat mal Pech.' }] },

    { word: '树大招风', pinyin: 'shù dà zhāo fēng', meaning: 'Ein grosser Baum zieht den Wind an (Beruemtheit zieht Kritik an)', type: 'Redewendung', level: 'HSK6', category: 'Natur', examples: [{ chinese: '成了名人就要注意，树大招风，很多人会嫉妒你。', pinyin: 'Chéng le míngrén jiù yào zhùyì, shù dà zhāo fēng, hěn duō rén huì jídù nǐ.', german: 'Wenn man beruehmt ist, muss man aufpassen, ein grosser Baum zieht Wind an, viele werden neidisch.' }] },

    { word: '瑞雪兆丰年', pinyin: 'ruì xuě zhào fēng nián', meaning: 'Gluecksschnee kuendigt ein gutes Erntejahr an', type: 'Sprichwort', level: 'HSK6', category: 'Natur', examples: [{ chinese: '今年冬天下了很多雪，瑞雪兆丰年，明年一定丰收。', pinyin: 'Jīnnián dōngtiān xià le hěn duō xuě, ruì xuě zhào fēng nián, míngnián yīdìng fēngshōu.', german: 'Diesen Winter hat es viel geschneit, Gluecksschnee kuendigt ein gutes Erntejahr an, naechstes Jahr wird bestimmt ertragreich.' }] },

    { word: '望梅止渴', pinyin: 'wàng méi zhǐ kě', meaning: 'Durch den Anblick von Pflaumen den Durst stillen (sich mit Traeumen troesten)', type: 'Redewendung', level: 'HSK6', category: 'Natur', examples: [{ chinese: '光看菜谱不做菜，那只是望梅止渴而已。', pinyin: 'Guāng kàn càipǔ bù zuò cài, nà zhǐ shì wàng méi zhǐ kě éryǐ.', german: 'Nur Kochbuecher anzuschauen, ohne zu kochen, ist bloss ein Trosten mit Traeumen.' }] },

    { word: '落叶归根', pinyin: 'luò yè guī gēn', meaning: 'Fallende Blaetter kehren zu ihren Wurzeln zurueck (Sehnsucht nach der Heimat)', type: 'Redewendung', level: 'HSK6', category: 'Natur', examples: [{ chinese: '他在国外住了三十年，最后还是回来了，落叶归根嘛。', pinyin: 'Tā zài guówài zhù le sānshí nián, zuìhòu háishì huílái le, luò yè guī gēn ma.', german: 'Er hat dreissig Jahre im Ausland gelebt und ist am Ende zurueckgekommen, fallende Blaetter kehren zu ihren Wurzeln zurueck.' }] },

    { word: '人往高处走，水往低处流', pinyin: 'rén wǎng gāo chù zǒu, shuǐ wǎng dī chù liú', meaning: 'Der Mensch strebt nach oben, das Wasser fliesst nach unten', type: 'Sprichwort', level: 'HSK5', category: 'Natur', examples: [{ chinese: '他想去大城市发展，人往高处走，水往低处流。', pinyin: 'Tā xiǎng qù dà chéngshì fāzhǎn, rén wǎng gāo chù zǒu, shuǐ wǎng dī chù liú.', german: 'Er will sich in der Grossstadt weiterentwickeln, der Mensch strebt nach oben, das Wasser fliesst nach unten.' }] },

    { word: '山不转水转', pinyin: 'shān bù zhuǎn shuǐ zhuǎn', meaning: 'Wenn der Berg sich nicht dreht, dreht sich das Wasser (Es gibt immer einen Ausweg)', type: 'Redewendung', level: 'HSK5', category: 'Natur', examples: [{ chinese: '别担心，山不转水转，总会有办法的。', pinyin: 'Bié dānxīn, shān bù zhuǎn shuǐ zhuǎn, zǒng huì yǒu bànfǎ de.', german: 'Mach dir keine Sorgen, es gibt immer einen Ausweg, eine Loesung wird sich finden.' }] },

    { word: '花无百日红', pinyin: 'huā wú bǎi rì hóng', meaning: 'Keine Blume blueht hundert Tage lang (Nichts waehrt ewig)', type: 'Sprichwort', level: 'HSK6', category: 'Natur', examples: [{ chinese: '他的公司虽然现在很成功，但花无百日红，不能大意。', pinyin: 'Tā de gōngsī suīrán xiànzài hěn chénggōng, dàn huā wú bǎi rì hóng, bù néng dàyì.', german: 'Seine Firma ist zwar jetzt sehr erfolgreich, aber keine Blume blueht ewig, man darf nicht nachlassen.' }] },

    // === BEZIEHUNGEN ===

    { word: '有缘千里来相会', pinyin: 'yǒu yuán qiān lǐ lái xiāng huì', meaning: 'Wenn das Schicksal es will, trifft man sich auch ueber tausend Meilen', type: 'Sprichwort', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '我们在异国他乡认识，真是有缘千里来相会。', pinyin: 'Wǒmen zài yìguó tāxiāng rènshi, zhēn shì yǒu yuán qiān lǐ lái xiāng huì.', german: 'Wir haben uns in der Ferne kennengelernt, wenn das Schicksal es will, trifft man sich auch ueber tausend Meilen.' }] },

    { word: '一日夫妻百日恩', pinyin: 'yī rì fūqī bǎi rì ēn', meaning: 'Ein Tag Ehepaar, hundert Tage Gnade (eheliche Verbundenheit bleibt bestehen)', type: 'Sprichwort', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '虽然他们离婚了，但一日夫妻百日恩，还是会互相帮助。', pinyin: 'Suīrán tāmen líhūn le, dàn yī rì fūqī bǎi rì ēn, háishì huì hùxiāng bāngzhù.', german: 'Obwohl sie sich haben scheiden lassen, bleibt die eheliche Verbundenheit bestehen, sie helfen sich immer noch gegenseitig.' }] },

    { word: '远亲不如近邻', pinyin: 'yuǎn qīn bù rú jìn lín', meaning: 'Ein ferner Verwandter ist weniger wert als ein naher Nachbar', type: 'Sprichwort', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '搬家后要和邻居搞好关系，远亲不如近邻。', pinyin: 'Bān jiā hòu yào hé línjū gǎo hǎo guānxì, yuǎn qīn bù rú jìn lín.', german: 'Nach dem Umzug sollte man ein gutes Verhaeltnis zu den Nachbarn pflegen, ein ferner Verwandter ist weniger wert als ein naher Nachbar.' }] },

    { word: '患难见真情', pinyin: 'huàn nàn jiàn zhēn qíng', meaning: 'In der Not erkennt man wahre Freundschaft', type: 'Redewendung', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '生病的时候他每天来看我，患难见真情。', pinyin: 'Shēngbìng de shíhòu tā měi tiān lái kàn wǒ, huàn nàn jiàn zhēn qíng.', german: 'Als ich krank war, besuchte er mich taeglich, in der Not erkennt man wahre Freundschaft.' }] },

    { word: '知己知彼，百战百胜', pinyin: 'zhī jǐ zhī bǐ, bǎi zhàn bǎi shèng', meaning: 'Kenne dich selbst und den Feind, und du wirst hundert Schlachten gewinnen', type: 'Sprichwort', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '谈判前要做好准备，知己知彼百战百胜。', pinyin: 'Tánpàn qián yào zuò hǎo zhǔnbèi, zhī jǐ zhī bǐ bǎi zhàn bǎi shèng.', german: 'Vor Verhandlungen muss man sich gut vorbereiten, kenne dich selbst und den Gegner, und du gewinnst jede Schlacht.' }] },

    { word: '物以类聚，人以群分', pinyin: 'wù yǐ lèi jù, rén yǐ qún fēn', meaning: 'Gleich und gleich gesellt sich gern', type: 'Sprichwort', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '他的朋友都很优秀，物以类聚，人以群分嘛。', pinyin: 'Tā de péngyǒu dōu hěn yōuxiù, wù yǐ lèi jù, rén yǐ qún fēn ma.', german: 'Seine Freunde sind alle ausgezeichnet, gleich und gleich gesellt sich gern.' }] },

    { word: '酒逢知己千杯少', pinyin: 'jiǔ féng zhījǐ qiān bēi shǎo', meaning: 'Beim Trinken mit einem Seelenfreund sind tausend Becher zu wenig', type: 'Sprichwort', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '和老朋友聊天，酒逢知己千杯少，不知不觉就聊到了半夜。', pinyin: 'Hé lǎo péngyǒu liáotiān, jiǔ féng zhījǐ qiān bēi shǎo, bù zhī bù jué jiù liáo dào le bànyè.', german: 'Beim Plaudern mit alten Freunden sind tausend Becher zu wenig, wir haben unbemerkt bis Mitternacht geredet.' }] },

    { word: '近朱者赤，近墨者黑', pinyin: 'jìn zhū zhě chì, jìn mò zhě hēi', meaning: 'Wer sich Zinnober naehert, wird rot; wer sich Tusche naehert, wird schwarz (Der Umgang praegt den Menschen)', type: 'Sprichwort', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '你交什么样的朋友很重要，近朱者赤，近墨者黑。', pinyin: 'Nǐ jiāo shénme yàng de péngyǒu hěn zhòngyào, jìn zhū zhě chì, jìn mò zhě hēi.', german: 'Es ist wichtig, welche Freunde du hast, der Umgang praegt den Menschen.' }] },

    { word: '百年修得同船渡', pinyin: 'bǎi nián xiū dé tóng chuán dù', meaning: 'Hundert Jahre Schicksal braucht es, um im selben Boot zu fahren (Jede Begegnung ist vorbestimmt)', type: 'Sprichwort', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '我们能成为同事是缘分，百年修得同船渡。', pinyin: 'Wǒmen néng chéngwéi tóngshì shì yuánfèn, bǎi nián xiū dé tóng chuán dù.', german: 'Dass wir Kollegen werden konnten, ist Schicksal, jede Begegnung ist vorbestimmt.' }] },

    { word: '君子之交淡如水', pinyin: 'jūnzǐ zhī jiāo dàn rú shuǐ', meaning: 'Die Freundschaft edler Menschen ist klar wie Wasser', type: 'Sprichwort', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '我们虽然不常见面，但友情很深，君子之交淡如水。', pinyin: 'Wǒmen suīrán bù cháng jiànmiàn, dàn yǒuqíng hěn shēn, jūnzǐ zhī jiāo dàn rú shuǐ.', german: 'Obwohl wir uns selten sehen, ist unsere Freundschaft tief, die Freundschaft edler Menschen ist klar wie Wasser.' }] },

    { word: '在家靠父母，出门靠朋友', pinyin: 'zài jiā kào fùmǔ, chū mén kào péngyǒu', meaning: 'Zu Hause verlaesst man sich auf die Eltern, draussen auf die Freunde', type: 'Sprichwort', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '你出国留学要多交朋友，在家靠父母，出门靠朋友。', pinyin: 'Nǐ chūguó liúxué yào duō jiāo péngyǒu, zài jiā kào fùmǔ, chū mén kào péngyǒu.', german: 'Wenn du im Ausland studierst, schliess viele Freundschaften, zu Hause verlaesst man sich auf die Eltern, draussen auf die Freunde.' }] },

    { word: '血浓于水', pinyin: 'xuè nóng yú shuǐ', meaning: 'Blut ist dicker als Wasser', type: 'Redewendung', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '虽然兄弟俩经常吵架，但血浓于水，关键时刻还是互相帮助。', pinyin: 'Suīrán xiōngdì liǎ jīngcháng chǎojià, dàn xuè nóng yú shuǐ, guānjiàn shíkè háishì hùxiāng bāngzhù.', german: 'Obwohl die Brueder oft streiten, ist Blut dicker als Wasser, in entscheidenden Momenten helfen sie sich gegenseitig.' }] },

    { word: '天下没有不散的宴席', pinyin: 'tiān xià méi yǒu bù sàn de yànxí', meaning: 'Kein Fest waehrt ewig (Jeder Abschied ist unvermeidlich)', type: 'Sprichwort', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '虽然很舍不得，但天下没有不散的宴席，祝你一路顺风。', pinyin: 'Suīrán hěn shěbùde, dàn tiān xià méi yǒu bù sàn de yànxí, zhù nǐ yīlù shùnfēng.', german: 'Obwohl es schwerfaellt, waehrt kein Fest ewig, ich wuensche dir eine gute Reise.' }] },

    { word: '道不同不相为谋', pinyin: 'dào bù tóng bù xiāng wéi móu', meaning: 'Wer verschiedene Wege geht, plant nicht gemeinsam', type: 'Redewendung', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '我们的理念不同，道不同不相为谋，还是各走各的路吧。', pinyin: 'Wǒmen de lǐniàn bù tóng, dào bù tóng bù xiāng wéi móu, háishì gè zǒu gè de lù ba.', german: 'Unsere Vorstellungen sind verschieden, wer verschiedene Wege geht, plant nicht gemeinsam, gehen wir getrennte Wege.' }] },

    { word: '冤家路窄', pinyin: 'yuānjiā lù zhǎi', meaning: 'Der Weg der Feinde ist schmal (Man trifft Feinde immer wieder)', type: 'Redewendung', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '没想到又碰到他了，真是冤家路窄。', pinyin: 'Méi xiǎngdào yòu pèng dào tā le, zhēn shì yuānjiā lù zhǎi.', german: 'Ich haette nicht gedacht, ihn wieder zu treffen, man trifft Feinde immer wieder.' }] },

    // === ARBEIT ===

    { word: '磨刀不误砍柴工', pinyin: 'mó dāo bù wù kǎn chái gōng', meaning: 'Das Messer zu schaerfen kostet keine Holzfaellerzeit (Gute Vorbereitung spart Zeit)', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '先好好计划一下再开始做，磨刀不误砍柴工。', pinyin: 'Xiān hǎohāo jìhuà yīxià zài kāishǐ zuò, mó dāo bù wù kǎn chái gōng.', german: 'Plan erst gut und fang dann an, gute Vorbereitung spart Zeit.' }] },

    { word: '行行出状元', pinyin: 'háng háng chū zhuàngyuán', meaning: 'In jedem Beruf gibt es Meister', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '别看不起小生意，行行出状元。', pinyin: 'Bié kànbuqǐ xiǎo shēngyì, háng háng chū zhuàngyuán.', german: 'Schaetz kleine Geschaefte nicht gering, in jedem Beruf gibt es Meister.' }] },

    { word: '三百六十行，行行出状元', pinyin: 'sān bǎi liù shí háng, háng háng chū zhuàngyuán', meaning: 'In 360 Berufen gibt es ueberall Meister (Jeder Beruf hat seine Experten)', type: 'Sprichwort', level: 'HSK6', category: 'Arbeit', examples: [{ chinese: '不管做什么工作，三百六十行，行行出状元，只要努力就能成功。', pinyin: 'Bùguǎn zuò shénme gōngzuò, sān bǎi liù shí háng, háng háng chū zhuàngyuán, zhǐyào nǔlì jiù néng chénggōng.', german: 'Egal welchen Beruf man hat, in jedem Bereich gibt es Meister, Hauptsache man gibt sich Muehe.' }] },

    { word: '隔行如隔山', pinyin: 'gé háng rú gé shān', meaning: 'Ein anderer Beruf ist wie ein anderer Berg (Jede Branche hat ihre Feinheiten)', type: 'Redewendung', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '我是学文学的，编程对我来说太难了，隔行如隔山。', pinyin: 'Wǒ shì xué wénxué de, biānchéng duì wǒ lái shuō tài nán le, gé háng rú gé shān.', german: 'Ich habe Literatur studiert, Programmieren ist fuer mich zu schwer, ein anderer Beruf ist wie ein anderer Berg.' }] },

    { word: '巧妇难为无米之炊', pinyin: 'qiǎo fù nán wéi wú mǐ zhī chuī', meaning: 'Auch eine geschickte Frau kann ohne Reis nicht kochen (Ohne Mittel geht nichts)', type: 'Sprichwort', level: 'HSK6', category: 'Arbeit', examples: [{ chinese: '没有预算怎么做项目？巧妇难为无米之炊啊。', pinyin: 'Méi yǒu yùsuàn zěnme zuò xiàngmù? Qiǎo fù nán wéi wú mǐ zhī chuī a.', german: 'Wie soll man ohne Budget ein Projekt machen? Ohne Mittel geht nichts.' }] },

    { word: '一寸光阴一寸金', pinyin: 'yī cùn guāngyīn yī cùn jīn', meaning: 'Ein Zoll Zeit ist ein Zoll Gold (Zeit ist kostbar)', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '别浪费时间了，一寸光阴一寸金，寸金难买寸光阴。', pinyin: 'Bié làngfèi shíjiān le, yī cùn guāngyīn yī cùn jīn, cùn jīn nán mǎi cùn guāngyīn.', german: 'Verschwende keine Zeit, ein Zoll Zeit ist ein Zoll Gold, aber fuer Gold kann man keine Zeit kaufen.' }] },

    { word: '万事开头难', pinyin: 'wàn shì kāi tóu nán', meaning: 'Aller Anfang ist schwer', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '刚开始学中文觉得很难，但万事开头难，慢慢就好了。', pinyin: 'Gāng kāishǐ xué Zhōngwén juéde hěn nán, dàn wàn shì kāi tóu nán, mànmàn jiù hǎo le.', german: 'Am Anfang fand ich Chinesisch lernen sehr schwer, aber aller Anfang ist schwer, es wird nach und nach besser.' }] },

    { word: '台上一分钟，台下十年功', pinyin: 'tái shàng yī fēn zhōng, tái xià shí nián gōng', meaning: 'Eine Minute auf der Buehne, zehn Jahre Uebung hinter der Buehne', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '他的演讲太精彩了，但台上一分钟，台下十年功。', pinyin: 'Tā de yǎnjiǎng tài jīngcǎi le, dàn tái shàng yī fēn zhōng, tái xià shí nián gōng.', german: 'Sein Vortrag war grossartig, aber eine Minute auf der Buehne erfordert zehn Jahre Uebung.' }] },

    { word: '欲速则不达', pinyin: 'yù sù zé bù dá', meaning: 'Wer zu schnell vorwaertsstrebt, kommt nicht ans Ziel (Eile mit Weile)', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '学习要一步一步来，欲速则不达。', pinyin: 'Xuéxí yào yī bù yī bù lái, yù sù zé bù dá.', german: 'Beim Lernen muss man Schritt fuer Schritt vorgehen, Eile mit Weile.' }] },

    { word: '三天打鱼，两天晒网', pinyin: 'sān tiān dǎ yú, liǎng tiān shài wǎng', meaning: 'Drei Tage fischen, zwei Tage das Netz trocknen (ohne Ausdauer arbeiten)', type: 'Redewendung', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '学语言不能三天打鱼两天晒网，要每天坚持。', pinyin: 'Xué yǔyán bù néng sān tiān dǎ yú liǎng tiān shài wǎng, yào měi tiān jiānchí.', german: 'Beim Sprachenlernen darf man nicht mal so mal so arbeiten, man muss taeglich dranbleiben.' }] },

    { word: '千军易得，一将难求', pinyin: 'qiān jūn yì dé, yī jiàng nán qiú', meaning: 'Tausend Soldaten sind leicht zu bekommen, ein General schwer zu finden', type: 'Sprichwort', level: 'HSK6', category: 'Arbeit', examples: [{ chinese: '公司最缺的是领导人才，千军易得，一将难求。', pinyin: 'Gōngsī zuì quē de shì lǐngdǎo réncái, qiān jūn yì dé, yī jiàng nán qiú.', german: 'Was der Firma am meisten fehlt, sind Fuehrungskraefte, tausend Soldaten sind leicht zu bekommen, ein General schwer zu finden.' }] },

    { word: '不怕慢，就怕站', pinyin: 'bù pà màn, jiù pà zhàn', meaning: 'Nicht das Langsamsein ist zu fuerchten, sondern das Stehenbleiben', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '每天进步一点点就好，不怕慢，就怕站。', pinyin: 'Měi tiān jìnbù yī diǎndiǎn jiù hǎo, bù pà màn, jiù pà zhàn.', german: 'Jeden Tag ein bisschen besser zu werden reicht, nicht das Langsamsein ist zu fuerchten, sondern das Stehenbleiben.' }] },

    { word: '事半功倍', pinyin: 'shì bàn gōng bèi', meaning: 'Halber Aufwand, doppeltes Ergebnis (effizient arbeiten)', type: 'Redewendung', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '用正确的方法学习可以事半功倍。', pinyin: 'Yòng zhèngquè de fāngfǎ xuéxí kěyǐ shì bàn gōng bèi.', german: 'Mit der richtigen Methode lernen ist effizient, halber Aufwand, doppeltes Ergebnis.' }] },

    { word: '事倍功半', pinyin: 'shì bèi gōng bàn', meaning: 'Doppelter Aufwand, halbes Ergebnis (ineffizient arbeiten)', type: 'Redewendung', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '方法不对的话，就会事倍功半。', pinyin: 'Fāngfǎ bù duì de huà, jiù huì shì bèi gōng bàn.', german: 'Wenn die Methode falsch ist, hat man doppelten Aufwand fuer halbes Ergebnis.' }] },

    { word: '名师出高徒', pinyin: 'míng shī chū gāo tú', meaning: 'Ein guter Meister bildet gute Schueler aus', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '他的老师是著名的钢琴家，名师出高徒，他自己也弹得非常好。', pinyin: 'Tā de lǎoshī shì zhùmíng de gāngqín jiā, míng shī chū gāo tú, tā zìjǐ yě tán de fēicháng hǎo.', german: 'Sein Lehrer ist ein beruehmter Pianist, ein guter Meister bildet gute Schueler aus, er selbst spielt auch sehr gut.' }] },

    { word: '工欲善其事，必先利其器', pinyin: 'gōng yù shàn qí shì, bì xiān lì qí qì', meaning: 'Wer seine Arbeit gut machen will, muss zuerst seine Werkzeuge schaerfen', type: 'Sprichwort', level: 'HSK6', category: 'Arbeit', examples: [{ chinese: '先把工具准备好再开始工作，工欲善其事，必先利其器。', pinyin: 'Xiān bǎ gōngjù zhǔnbèi hǎo zài kāishǐ gōngzuò, gōng yù shàn qí shì, bì xiān lì qí qì.', german: 'Bereite zuerst die Werkzeuge vor, dann fang an zu arbeiten, wer gut arbeiten will, muss zuerst seine Werkzeuge schaerfen.' }] },

    // === WEITERE LEBENSWEISHEITEN ===

    { word: '少壮不努力，老大徒伤悲', pinyin: 'shào zhuàng bù nǔlì, lǎo dà tú shāng bēi', meaning: 'Wer in der Jugend nicht fleissig ist, wird im Alter vergeblich trauern', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '趁年轻要好好学习，少壮不努力，老大徒伤悲。', pinyin: 'Chèn niánqīng yào hǎohāo xuéxí, shào zhuàng bù nǔlì, lǎo dà tú shāng bēi.', german: 'Solange man jung ist, soll man fleissig lernen, wer in der Jugend nicht fleissig ist, wird im Alter vergeblich trauern.' }] },

    { word: '吃得苦中苦，方为人上人', pinyin: 'chī de kǔ zhōng kǔ, fāng wéi rén shàng rén', meaning: 'Nur wer die bittersten Leiden ertraegt, kann ueber anderen stehen', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '想成功就要能吃苦，吃得苦中苦，方为人上人。', pinyin: 'Xiǎng chénggōng jiù yào néng chīkǔ, chī de kǔ zhōng kǔ, fāng wéi rén shàng rén.', german: 'Wenn man Erfolg haben will, muss man Leid ertragen koennen, nur wer die bittersten Leiden ertraegt, kann ueber anderen stehen.' }] },

    { word: '天有不测风云', pinyin: 'tiān yǒu bù cè fēngyún', meaning: 'Am Himmel gibt es unvorhersehbare Stuerme (Das Schicksal ist unberechenbar)', type: 'Redewendung', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '谁也不知道明天会发生什么，天有不测风云。', pinyin: 'Shéi yě bù zhīdào míngtiān huì fāshēng shénme, tiān yǒu bù cè fēngyún.', german: 'Niemand weiss, was morgen geschieht, das Schicksal ist unberechenbar.' }] },

    { word: '船到桥头自然直', pinyin: 'chuán dào qiáo tóu zìrán zhí', meaning: 'Wenn das Boot zur Bruecke kommt, wird es sich von selbst gerade ausrichten (Es wird sich schon alles fuegen)', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '别太担心未来的事，船到桥头自然直。', pinyin: 'Bié tài dānxīn wèilái de shì, chuán dào qiáo tóu zìrán zhí.', german: 'Mach dir nicht zu viele Sorgen um die Zukunft, es wird sich schon alles fuegen.' }] },

    { word: '车到山前必有路', pinyin: 'chē dào shān qián bì yǒu lù', meaning: 'Wenn der Wagen zum Berg kommt, findet sich ein Weg', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '现在还不知道怎么办没关系，车到山前必有路。', pinyin: 'Xiànzài hái bù zhīdào zěnme bàn méi guānxi, chē dào shān qián bì yǒu lù.', german: 'Es macht nichts, dass man noch nicht weiss, was man tun soll, wenn der Wagen zum Berg kommt, findet sich ein Weg.' }] },

    { word: '一山不容二虎', pinyin: 'yī shān bù róng èr hǔ', meaning: 'Ein Berg duldet keine zwei Tiger (Zwei Starke koennen nicht koexistieren)', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '两个领导在一个部门里总是冲突，一山不容二虎。', pinyin: 'Liǎng ge lǐngdǎo zài yī ge bùmén lǐ zǒng shì chōngtū, yī shān bù róng èr hǔ.', german: 'Zwei Chefs in einer Abteilung fuehren immer zu Konflikten, ein Berg duldet keine zwei Tiger.' }] },

    { word: '满招损，谦受益', pinyin: 'mǎn zhāo sǔn, qiān shòu yì', meaning: 'Hochmut bringt Schaden, Bescheidenheit bringt Nutzen', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '他太骄傲了，满招损，谦受益，要学会谦虚。', pinyin: 'Tā tài jiāo ào le, mǎn zhāo sǔn, qiān shòu yì, yào xuéhuì qiānxū.', german: 'Er ist zu stolz, Hochmut bringt Schaden, Bescheidenheit bringt Nutzen, er muss Bescheidenheit lernen.' }] },

    { word: '不以规矩，不能成方圆', pinyin: 'bù yǐ guījǔ, bù néng chéng fāng yuán', meaning: 'Ohne Zirkel und Winkelmass gibt es keine Kreise und Quadrate (Ohne Regeln keine Ordnung)', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '公司必须有制度，不以规矩不能成方圆。', pinyin: 'Gōngsī bìxū yǒu zhìdù, bù yǐ guījǔ bù néng chéng fāng yuán.', german: 'Eine Firma braucht Regeln, ohne Ordnung geht es nicht.' }] },

    { word: '良药苦口利于病', pinyin: 'liáng yào kǔ kǒu lì yú bìng', meaning: 'Gute Medizin schmeckt bitter (Ehrliche Worte sind schwer zu hoeren, aber nuetzlich)', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '老师的批评虽然难听，但良药苦口利于病。', pinyin: 'Lǎoshī de pīpíng suīrán nán tīng, dàn liáng yào kǔ kǒu lì yú bìng.', german: 'Die Kritik des Lehrers ist zwar schwer zu hoeren, aber gute Medizin schmeckt bitter und hilft der Krankheit.' }] },

    { word: '忠言逆耳利于行', pinyin: 'zhōng yán nì ěr lì yú xíng', meaning: 'Aufrichtige Worte klingen unangenehm, nuetzen aber dem Handeln', type: 'Sprichwort', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '朋友的建议虽然刺耳，但忠言逆耳利于行。', pinyin: 'Péngyǒu de jiànyì suīrán cì ěr, dàn zhōng yán nì ěr lì yú xíng.', german: 'Der Rat des Freundes klingt zwar unangenehm, aber aufrichtige Worte nuetzen dem Handeln.' }] },

    { word: '有理走遍天下', pinyin: 'yǒu lǐ zǒu biàn tiān xià', meaning: 'Wer Recht hat, kommt ueberall durch', type: 'Sprichwort', level: 'HSK5', category: 'Lebensweisheit', examples: [{ chinese: '只要我们有理，有理走遍天下，不用怕。', pinyin: 'Zhǐyào wǒmen yǒu lǐ, yǒu lǐ zǒu biàn tiān xià, bù yòng pà.', german: 'Solange wir Recht haben, wer Recht hat, kommt ueberall durch, keine Angst.' }] },

    { word: '吃人家的嘴软，拿人家的手短', pinyin: 'chī rénjiā de zuǐ ruǎn, ná rénjiā de shǒu duǎn', meaning: 'Wer von anderen isst, wird mundweich; wer von anderen nimmt, wird kurzhaendig (Geschenke machen abhaengig)', type: 'Redewendung', level: 'HSK6', category: 'Lebensweisheit', examples: [{ chinese: '别随便接受别人的好处，吃人家的嘴软，拿人家的手短。', pinyin: 'Bié suíbiàn jiēshòu biérén de hǎochu, chī rénjiā de zuǐ ruǎn, ná rénjiā de shǒu duǎn.', german: 'Nimm nicht leichtfertig Gefaelligkeiten von anderen an, Geschenke machen abhaengig.' }] },

    // === WEITERE WARNUNGEN ===

    { word: '明枪易躲，暗箭难防', pinyin: 'míng qiāng yì duǒ, àn jiàn nán fáng', meaning: 'Einem offenen Angriff kann man ausweichen, einem heimlichen Pfeil nur schwer', type: 'Sprichwort', level: 'HSK6', category: 'Warnung', examples: [{ chinese: '做人要提防小人，明枪易躲，暗箭难防。', pinyin: 'Zuòrén yào tífáng xiǎorén, míng qiāng yì duǒ, àn jiàn nán fáng.', german: 'Man muss sich vor hinterhaeltigen Menschen hueten, einem offenen Angriff kann man ausweichen, einem heimlichen nur schwer.' }] },

    { word: '好马不吃回头草', pinyin: 'hǎo mǎ bù chī huí tóu cǎo', meaning: 'Ein gutes Pferd frisst kein Gras, ueber das es schon hinweggegangen ist (Geh nicht zurueck)', type: 'Sprichwort', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '别再找前任了，好马不吃回头草。', pinyin: 'Bié zài zhǎo qiánrèn le, hǎo mǎ bù chī huí tóu cǎo.', german: 'Such nicht mehr deine Ex, ein gutes Pferd frisst kein Gras, ueber das es schon hinweggegangen ist.' }] },

    { word: '早知今日，何必当初', pinyin: 'zǎo zhī jīn rì, hé bì dāng chū', meaning: 'Haette man gewusst, wie es heute ist, haette man es damals nicht getan', type: 'Redewendung', level: 'HSK5', category: 'Warnung', examples: [{ chinese: '他现在后悔也没用了，早知今日，何必当初。', pinyin: 'Tā xiànzài hòuhuǐ yě méi yòng le, zǎo zhī jīn rì, hé bì dāng chū.', german: 'Jetzt bereut er es, aber es nuetzt nichts mehr, haette er es gewusst, haette er es nicht getan.' }] },

    // === WEITERE ERMUTIGUNG ===

    { word: '吃水不忘挖井人', pinyin: 'chī shuǐ bù wàng wā jǐng rén', meaning: 'Wer Wasser trinkt, vergisst nicht den, der den Brunnen gegraben hat (Dankbarkeit bewahren)', type: 'Redewendung', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '我们能有今天的成就，吃水不忘挖井人，要感谢帮助过我们的人。', pinyin: 'Wǒmen néng yǒu jīntiān de chéngjiù, chī shuǐ bù wàng wā jǐng rén, yào gǎnxiè bāngzhù guò wǒmen de rén.', german: 'Dass wir heute diese Erfolge haben, vergessen wir nicht denen zu danken, die uns geholfen haben.' }] },

    { word: '书到用时方恨少', pinyin: 'shū dào yòng shí fāng hèn shǎo', meaning: 'Erst wenn man Wissen braucht, bedauert man, zu wenig gelernt zu haben', type: 'Sprichwort', level: 'HSK6', category: 'Ermutigung', examples: [{ chinese: '在国外不会说英语真的很不方便，书到用时方恨少。', pinyin: 'Zài guówài bù huì shuō Yīngyǔ zhēn de hěn bù fāngbiàn, shū dào yòng shí fāng hèn shǎo.', german: 'Im Ausland kein Englisch zu koennen ist wirklich unpraktisch, erst wenn man Wissen braucht, bereut man, zu wenig gelernt zu haben.' }] },

    { word: '读万卷书，行万里路', pinyin: 'dú wàn juàn shū, xíng wàn lǐ lù', meaning: 'Lies zehntausend Buecher und geh zehntausend Meilen (Verbinde Theorie mit Praxis)', type: 'Sprichwort', level: 'HSK5', category: 'Ermutigung', examples: [{ chinese: '不仅要读书，还要去旅行体验，读万卷书，行万里路。', pinyin: 'Bùjǐn yào dúshū, hái yào qù lǚxíng tǐyàn, dú wàn juàn shū, xíng wàn lǐ lù.', german: 'Man soll nicht nur lesen, sondern auch reisen und erleben, lies zehntausend Buecher und geh zehntausend Meilen.' }] },

    // === WEITERE NATUR ===

    { word: '柳暗花明又一村', pinyin: 'liǔ àn huā míng yòu yī cūn', meaning: 'Hinter dunklen Weiden und bunten Blumen liegt ein neues Dorf (Nach der Dunkelheit kommt das Licht)', type: 'Sprichwort', level: 'HSK6', category: 'Natur', examples: [{ chinese: '虽然现在很困难，但也许柳暗花明又一村，坚持下去吧。', pinyin: 'Suīrán xiànzài hěn kùnnán, dàn yěxǔ liǔ àn huā míng yòu yī cūn, jiānchí xiàqù ba.', german: 'Obwohl es jetzt schwierig ist, kommt nach der Dunkelheit vielleicht das Licht, halte durch.' }] },

    { word: '秋后算账', pinyin: 'qiū hòu suàn zhàng', meaning: 'Nach dem Herbst die Rechnung machen (Spaeter abrechnen)', type: 'Redewendung', level: 'HSK5', category: 'Natur', examples: [{ chinese: '你现在得意没用，等着秋后算账吧。', pinyin: 'Nǐ xiànzài déyì méi yòng, děngzhe qiū hòu suàn zhàng ba.', german: 'Dein jetziges Triumphieren nuetzt nichts, die Abrechnung kommt spaeter.' }] },

    { word: '冰冻三尺，非一日之寒', pinyin: 'bīng dòng sān chǐ, fēi yī rì zhī hán', meaning: 'Drei Fuss Eis entstehen nicht an einem einzigen kalten Tag (Probleme entstehen ueber laengere Zeit)', type: 'Sprichwort', level: 'HSK6', category: 'Natur', examples: [{ chinese: '他们的关系不是突然变坏的，冰冻三尺，非一日之寒。', pinyin: 'Tāmen de guānxì bù shì tūrán biàn huài de, bīng dòng sān chǐ, fēi yī rì zhī hán.', german: 'Ihre Beziehung ist nicht ploetzlich schlecht geworden, drei Fuss Eis entstehen nicht an einem einzigen kalten Tag.' }] },

    // === WEITERE BEZIEHUNGEN ===

    { word: '一个巴掌拍不响', pinyin: 'yī ge bāzhang pāi bù xiǎng', meaning: 'Mit einer Hand allein kann man nicht klatschen (Es gehoeren immer zwei dazu)', type: 'Sprichwort', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '他们吵架不能只怪一个人，一个巴掌拍不响。', pinyin: 'Tāmen chǎojià bù néng zhǐ guài yī ge rén, yī ge bāzhang pāi bù xiǎng.', german: 'Bei ihrem Streit kann man nicht nur einem die Schuld geben, es gehoeren immer zwei dazu.' }] },

    { word: '家丑不可外扬', pinyin: 'jiā chǒu bù kě wài yáng', meaning: 'Familiengeheimnisse soll man nicht nach draussen tragen', type: 'Redewendung', level: 'HSK5', category: 'Beziehungen', examples: [{ chinese: '别跟外人说这些事，家丑不可外扬。', pinyin: 'Bié gēn wàirén shuō zhèxiē shì, jiā chǒu bù kě wài yáng.', german: 'Erzaehl Aussenstehenden nichts davon, Familiengeheimnisse soll man nicht nach draussen tragen.' }] },

    { word: '打虎亲兄弟，上阵父子兵', pinyin: 'dǎ hǔ qīn xiōngdì, shàng zhèn fùzǐ bīng', meaning: 'Zum Tigerjaegen braucht man echte Brueder, in die Schlacht zieht man mit Vater und Sohn', type: 'Sprichwort', level: 'HSK6', category: 'Beziehungen', examples: [{ chinese: '做生意最好和家人合作，打虎亲兄弟，上阵父子兵。', pinyin: 'Zuò shēngyì zuì hǎo hé jiārén hézuò, dǎ hǔ qīn xiōngdì, shàng zhèn fùzǐ bīng.', german: 'Beim Geschaeft kooperiert man am besten mit der Familie, zum Tigerjaegen braucht man echte Brueder.' }] },

    // === WEITERE ARBEIT ===

    { word: '天道酬勤', pinyin: 'tiān dào chóu qín', meaning: 'Der Himmel belohnt den Fleiss', type: 'Redewendung', level: 'HSK6', category: 'Arbeit', examples: [{ chinese: '他每天加班到很晚，终于升职了，天道酬勤。', pinyin: 'Tā měi tiān jiābān dào hěn wǎn, zhōngyú shēng zhí le, tiān dào chóu qín.', german: 'Er hat taeglich bis spaet Ueberstunden gemacht und wurde endlich befoerdert, der Himmel belohnt den Fleiss.' }] },

    { word: '术业有专攻', pinyin: 'shù yè yǒu zhuān gōng', meaning: 'Jedes Fachgebiet hat seinen Spezialisten', type: 'Redewendung', level: 'HSK6', category: 'Arbeit', examples: [{ chinese: '这个问题还是让专家来解决吧，术业有专攻。', pinyin: 'Zhè ge wèntí háishì ràng zhuānjiā lái jiějué ba, shù yè yǒu zhuān gōng.', german: 'Dieses Problem sollte man lieber den Experten ueberlassen, jedes Fachgebiet hat seinen Spezialisten.' }] },

    { word: '师傅领进门，修行在个人', pinyin: 'shīfu lǐng jìn mén, xiūxíng zài gèrén', meaning: 'Der Meister fuehrt durch die Tuer, die Uebung liegt beim Einzelnen', type: 'Sprichwort', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '老师只能教你方法，师傅领进门，修行在个人，靠你自己努力。', pinyin: 'Lǎoshī zhǐ néng jiāo nǐ fāngfǎ, shīfu lǐng jìn mén, xiūxíng zài gèrén, kào nǐ zìjǐ nǔlì.', german: 'Der Lehrer kann dir nur die Methode beibringen, der Meister fuehrt durch die Tuer, die Uebung liegt bei dir selbst.' }] },

    { word: '打铁还需自身硬', pinyin: 'dǎ tiě hái xū zì shēn yìng', meaning: 'Wer Eisen schmieden will, muss selbst hart sein (Man braucht eigene Staerke)', type: 'Redewendung', level: 'HSK6', category: 'Arbeit', examples: [{ chinese: '想要管理好团队，打铁还需自身硬，先提高自己的能力。', pinyin: 'Xiǎng yào guǎnlǐ hǎo tuánduì, dǎ tiě hái xū zì shēn yìng, xiān tígāo zìjǐ de nénglì.', german: 'Wer ein Team gut fuehren will, muss selbst hart sein, verbessere zuerst deine eigenen Faehigkeiten.' }] },

    { word: '干一行，爱一行', pinyin: 'gàn yī háng, ài yī háng', meaning: 'Was man tut, soll man lieben (Berufung in jeder Arbeit finden)', type: 'Redewendung', level: 'HSK5', category: 'Arbeit', examples: [{ chinese: '不管什么工作都要认真对待，干一行爱一行。', pinyin: 'Bùguǎn shénme gōngzuò dōu yào rènzhēn duìdài, gàn yī háng ài yī háng.', german: 'Egal welche Arbeit, man soll sie ernst nehmen, was man tut, soll man lieben.' }] },

    // === WEITERE SPRICHWOERTER ===

    { word: '一箭双雕', pinyin: 'yī jiàn shuāng diāo', meaning: 'Mit einem Pfeil zwei Adler treffen (zwei Fliegen mit einer Klappe schlagen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '这个方案既能省钱又能提高效率，真是一箭双雕。', pinyin: 'Zhè ge fāng àn jì néng shěng qián yòu néng tígāo xiàolǜ, zhēn shì yī jiàn shuāng diāo.', german: 'Dieser Plan spart Geld und steigert die Effizienz, das ist wirklich zwei Fliegen mit einer Klappe.' }] },

    { word: '鹤立鸡群', pinyin: 'hè lì jī qún', meaning: 'Ein Kranich unter Huehnern (aus der Masse herausragen)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '他在班上的成绩鹤立鸡群，总是第一名。', pinyin: 'Tā zài bān shàng de chéngjì hè lì jī qún, zǒng shì dì yī míng.', german: 'Seine Noten ragen in der Klasse wie ein Kranich unter Huehnern heraus, er ist immer Erster.' }] },

    { word: '骑虎难下', pinyin: 'qí hǔ nán xià', meaning: 'Wer auf dem Tiger reitet, kann schwer absteigen (in einer schwierigen Lage stecken)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '项目已经开始了，现在骑虎难下，只能继续做下去。', pinyin: 'Xiàngmù yǐjīng kāishǐ le, xiànzài qí hǔ nán xià, zhǐ néng jìxù zuò xiàqù.', german: 'Das Projekt hat schon begonnen, jetzt stecken wir fest, wir koennen nur weitermachen.' }] },

    { word: '纸上谈兵', pinyin: 'zhǐ shàng tán bīng', meaning: 'Auf dem Papier ueber Kriege reden (nur theoretisch sein, ohne praktische Erfahrung)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '光说不做是纸上谈兵，要动手实践才行。', pinyin: 'Guāng shuō bù zuò shì zhǐ shàng tán bīng, yào dòngshǒu shíjiàn cái xíng.', german: 'Nur reden ohne zu handeln ist bloss Theorie, man muss auch praktisch anpacken.' }] },

    { word: '此地无银三百两', pinyin: 'cǐ dì wú yín sān bǎi liǎng', meaning: 'Hier sind keine 300 Unzen Silber vergraben (sich durch Leugnen verraten)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '他越解释越可疑，简直是此地无银三百两。', pinyin: 'Tā yuè jiěshì yuè kěyí, jiǎnzhí shì cǐ dì wú yín sān bǎi liǎng.', german: 'Je mehr er erklaert, desto verdaechtiger wird es, er verraet sich durch sein Leugnen.' }] },

    { word: '瓜田不纳履，李下不整冠', pinyin: 'guā tián bù nà lǚ, lǐ xià bù zhěng guān', meaning: 'Im Melonenfeld buecke dich nicht, unter dem Pflaumenbaum richte den Hut nicht (Vermeide den Anschein des Boesen)', type: 'Sprichwort', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '为了避免误会，瓜田不纳履，李下不整冠，要注意自己的行为。', pinyin: 'Wèile bìmiǎn wùhuì, guā tián bù nà lǚ, lǐ xià bù zhěng guān, yào zhùyì zìjǐ de xíngwéi.', german: 'Um Missverstaendnisse zu vermeiden, soll man auf sein Verhalten achten und keinen falschen Anschein erwecken.' }] },

    { word: '雪中送炭', pinyin: 'xuě zhōng sòng tàn', meaning: 'Im Schnee Kohle schicken (In der Not helfen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '他在我最困难的时候借给我钱，真是雪中送炭。', pinyin: 'Tā zài wǒ zuì kùnnán de shíhòu jiè gěi wǒ qián, zhēn shì xuě zhōng sòng tàn.', german: 'Er hat mir Geld geliehen, als ich in groesster Not war, er hat mir im Schnee Kohle geschickt.' }] },

    { word: '锦上添花', pinyin: 'jǐn shàng tiān huā', meaning: 'Auf Brokat noch Blumen sticken (etwas Gutes noch besser machen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '他的表演已经很好了，音乐更是锦上添花。', pinyin: 'Tā de biǎoyǎn yǐjīng hěn hǎo le, yīnyuè gèng shì jǐn shàng tiān huā.', german: 'Sein Auftritt war schon sehr gut, die Musik hat ihn noch besser gemacht.' }] },

    { word: '鸡蛋里挑骨头', pinyin: 'jīdàn lǐ tiāo gǔtou', meaning: 'Knochen im Ei suchen (ein Haar in der Suppe suchen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '别总是鸡蛋里挑骨头，没有什么是完美的。', pinyin: 'Bié zǒng shì jīdàn lǐ tiāo gǔtou, méi yǒu shénme shì wánměi de.', german: 'Such nicht immer ein Haar in der Suppe, nichts ist perfekt.' }] },

    { word: '马到成功', pinyin: 'mǎ dào chéng gōng', meaning: 'Sofortiger Erfolg (Das Pferd kommt und der Erfolg ist da)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '祝你考试马到成功！', pinyin: 'Zhù nǐ kǎoshì mǎ dào chéng gōng!', german: 'Ich wuensche dir sofortigen Erfolg bei der Pruefung!' }] },

    { word: '破釜沉舟', pinyin: 'pò fǔ chén zhōu', meaning: 'Die Kessel zerbrechen und die Boote versenken (alles auf eine Karte setzen)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '他为了创业破釜沉舟，把房子都卖了。', pinyin: 'Tā wèile chuàngyè pò fǔ chén zhōu, bǎ fángzi dōu mài le.', german: 'Fuer seine Unternehmensgruendung hat er alles auf eine Karte gesetzt und sogar sein Haus verkauft.' }] },

    { word: '四面楚歌', pinyin: 'sì miàn chǔ gē', meaning: 'Von allen Seiten hoert man Chu-Lieder (von allen Seiten umzingelt sein)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '公司经营困难，四面楚歌，很多客户都走了。', pinyin: 'Gōngsī jīngyíng kùnnán, sì miàn chǔ gē, hěn duō kèhù dōu zǒu le.', german: 'Die Firma hat Schwierigkeiten, sie ist von allen Seiten bedraengt, viele Kunden sind gegangen.' }] },

    { word: '有眼不识泰山', pinyin: 'yǒu yǎn bù shí Tài Shān', meaning: 'Augen haben und den Berg Tai nicht erkennen (eine wichtige Person nicht erkennen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '对不起，我有眼不识泰山，不知道您就是王教授。', pinyin: 'Duìbùqǐ, wǒ yǒu yǎn bù shí Tài Shān, bù zhīdào nín jiù shì Wáng jiàoshòu.', german: 'Entschuldigung, ich habe Sie nicht erkannt, ich wusste nicht, dass Sie Professor Wang sind.' }] },

    { word: '塞翁失马', pinyin: 'sài wēng shī mǎ', meaning: 'Das Pferd des alten Mannes an der Grenze (ein Unglueck kann sich als Segen erweisen)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '这次没考上大学也不一定是坏事，塞翁失马嘛。', pinyin: 'Zhè cì méi kǎo shàng dàxué yě bù yīdìng shì huài shì, sài wēng shī mǎ ma.', german: 'Dass du die Universitaetspruefung nicht bestanden hast, muss nicht schlecht sein, ein Unglueck kann ein Segen sein.' }] },

    { word: '画饼充饥', pinyin: 'huà bǐng chōng jī', meaning: 'Kuchen malen, um den Hunger zu stillen (sich mit leeren Versprechungen abspeisen)', type: 'Redewendung', level: 'HSK6', category: 'Sprichwort', examples: [{ chinese: '老板只画饼充饥，从来不兑现承诺。', pinyin: 'Lǎobǎn zhǐ huà bǐng chōng jī, cónglái bù duìxiàn chéngnuò.', german: 'Der Chef macht nur leere Versprechungen und haelt sie nie ein.' }] },

    { word: '朝三暮四', pinyin: 'zhāo sān mù sì', meaning: 'Morgens drei, abends vier (wankelmutig sein, staendig die Meinung aendern)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '他交女朋友总是朝三暮四，没有一段关系持久。', pinyin: 'Tā jiāo nǚ péngyǒu zǒng shì zhāo sān mù sì, méi yǒu yī duàn guānxì chíjiǔ.', german: 'Bei Freundinnen ist er immer wankelmutig, keine Beziehung haelt lange.' }] },

    { word: '自相矛盾', pinyin: 'zì xiāng máodùn', meaning: 'Sich selbst widersprechen (wie Speer und Schild)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '他的话自相矛盾，刚才说去，现在又说不去。', pinyin: 'Tā de huà zì xiāng máodùn, gāngcái shuō qù, xiànzài yòu shuō bù qù.', german: 'Seine Worte widersprechen sich, eben sagte er, er geht, und jetzt sagt er, er geht nicht.' }] },

    { word: '虎头蛇尾', pinyin: 'hǔ tóu shé wěi', meaning: 'Tigerkopf, Schlangenschwanz (stark anfangen, schwach aufhoeren)', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '做事不能虎头蛇尾，要有始有终。', pinyin: 'Zuò shì bù néng hǔ tóu shé wěi, yào yǒu shǐ yǒu zhōng.', german: 'Man soll nicht stark anfangen und schwach aufhoeren, man muss etwas zu Ende bringen.' }] },

    { word: '三思而后行', pinyin: 'sān sī ér hòu xíng', meaning: 'Dreimal nachdenken, bevor man handelt', type: 'Redewendung', level: 'HSK5', category: 'Sprichwort', examples: [{ chinese: '做重要决定的时候一定要三思而后行。', pinyin: 'Zuò zhòngyào juédìng de shíhòu yīdìng yào sān sī ér hòu xíng.', german: 'Bei wichtigen Entscheidungen muss man dreimal nachdenken, bevor man handelt.' }] }

  ];
  if (!window.REDEWENDUNGEN_DATA) window.REDEWENDUNGEN_DATA = [];
  window.REDEWENDUNGEN_DATA = window.REDEWENDUNGEN_DATA.concat(redewendungen);
})();
