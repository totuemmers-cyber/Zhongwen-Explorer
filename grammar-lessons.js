// Grammar Lessons for Zhongwen Explorer (HSK); engine shared with Nihongo Explorer.
(function () {
  'use strict';

  var LESSONS = [
    // ── Lektion 1: Chinesische Satzstellung ────────────────────────────
    {
      id: 'lesson-21',
      number: 1,
      title: "Chinesische Satzstellung",
      subtitle: "SVO, Zeitangaben, Ortsangaben & Adverbien",
      level: 'HSK1',
      grammarIds: ["g:状语：副词、形容词作状语；表示时间、处所的词语作状语","g:主谓句1：动词谓语句","g:还¹","g:在（引出时间、处所）","g:主语：名词、代词或名词性短语作主语","g:宾语：名词、代词或名词性短语作宾语","g:已经","g:经常"],
      intro: "Die chinesische Satzstellung ist in vielerlei Hinsicht <strong>einfacher</strong> als die deutsche — es gibt keine Verbzweitstellung, keine Satzklammer, kein Verb am Ende im Nebensatz. Aber sie folgt <strong>eigenen, strikten Regeln</strong>, die sich vom Deutschen unterscheiden. Besonders die Position von Zeit- und Ortsangaben überrascht deutschsprachige Lernende regelmäßig. Wenn du diese Grundordnung einmal verstanden hast, werden deine chinesischen Sätze sofort natürlicher klingen.",
      sections: [
        {
          heading: "SVO — Subjekt, Verb, Objekt",
          text: "Chinesisch ist wie Englisch eine <strong>SVO-Sprache</strong>: Subjekt → Verb → Objekt. Anders als im Deutschen bleibt diese Reihenfolge in Aussagesätzen und Nebensätzen <strong>immer gleich</strong> — kein Verb wandert ans Ende.",
          examples: [
            { cn: "我喜欢中国菜。", pinyin: "Wǒ xǐhuan Zhōngguó cài.", de: "Ich mag chinesisches Essen." },
            { cn: "她学习中文。", pinyin: "Tā xuéxí Zhōngwén.", de: "Sie lernt Chinesisch." },
            { cn: "他们买了两本书。", pinyin: "Tāmen mǎi le liǎng běn shū.", de: "Sie haben zwei Bücher gekauft." },
            { cn: "因为我喜欢中文，我每天学习。", pinyin: "Yīnwèi wǒ xǐhuan Zhōngwén, wǒ měitiān xuéxí.", de: "Weil ich Chinesisch mag, lerne ich jeden Tag. (SVO auch im Nebensatz!)" }
          ],
          tip: "Deutschsprachige neigen dazu, das Verb im Nebensatz ans Ende zu schieben. Im Chinesischen gibt es das nicht: ❌ 因为我中文喜欢 → ✅ 因为我喜欢中文."
        },
        {
          heading: "Zeitangaben VOR dem Verb",
          text: "Zeitangaben stehen im Chinesischen <strong>vor dem Verb</strong> — entweder am Satzanfang oder direkt nach dem Subjekt. Sie stehen <strong>niemals</strong> nach dem Verb wie im Deutschen. Die Faustregel lautet: <strong>Subjekt + Zeit + Verb + Objekt</strong>.",
          examples: [
            { cn: "我明天去北京。", pinyin: "Wǒ míngtiān qù Běijīng.", de: "Ich fahre morgen nach Peking." },
            { cn: "她昨天买了一件衣服。", pinyin: "Tā zuótiān mǎi le yí jiàn yīfu.", de: "Sie hat gestern ein Kleidungsstück gekauft." },
            { cn: "我们下午三点开会。", pinyin: "Wǒmen xiàwǔ sān diǎn kāihuì.", de: "Wir haben um drei Uhr nachmittags ein Meeting." },
            { cn: "明天我不上班。", pinyin: "Míngtiān wǒ bú shàngbān.", de: "Morgen arbeite ich nicht. (Zeit am Satzanfang)" }
          ],
          tip: "Der häufigste Fehler: ❌ 我去明天北京 (nach deutschem Muster). Richtig: ✅ 我明天去北京. Zeitangabe <strong>immer vor</strong> dem Verb!"
        },
        {
          heading: "Ortsangaben VOR der Handlung",
          text: "Auch Ortsangaben stehen <strong>vor dem Verb</strong>, nicht danach. Die typische Struktur ist: <strong>Subjekt + 在 + Ort + Verb + Objekt</strong>. Bei gleichzeitiger Zeit- und Ortsangabe gilt: <strong>Zeit vor Ort</strong>.",
          examples: [
            { cn: "我在家吃饭。", pinyin: "Wǒ zài jiā chīfàn.", de: "Ich esse zu Hause." },
            { cn: "她在学校学习。", pinyin: "Tā zài xuéxiào xuéxí.", de: "Sie lernt in der Schule." },
            { cn: "他每天在家里看书。", pinyin: "Tā měitiān zài jiā lǐ kàn shū.", de: "Er liest jeden Tag zu Hause. (Zeit + Ort + Verb)" },
            { cn: "我们明天在学校见面。", pinyin: "Wǒmen míngtiān zài xuéxiào jiànmiàn.", de: "Wir treffen uns morgen in der Schule." }
          ],
          tip: "Merke dir die Reihenfolge wie ein Trichter — vom Großen zum Kleinen: <strong>Wann → Wo → Was tun</strong>. Also: Subjekt + Zeit + Ort + Verb + Objekt."
        },
        {
          heading: "Adverbien vor dem Verb",
          text: "Adverbien wie 也 (auch), 常常/经常 (oft), 已经 (schon), 都 (alle) und 还 (noch) stehen im Chinesischen <strong>immer direkt vor dem Verb</strong>, nach dem Subjekt. Sie wandern nie ans Satzende.",
          examples: [
            { cn: "我也喜欢咖啡。", pinyin: "Wǒ yě xǐhuan kāfēi.", de: "Ich mag auch Kaffee." },
            { cn: "她经常去中国。", pinyin: "Tā jīngcháng qù Zhōngguó.", de: "Sie fährt oft nach China." },
            { cn: "他已经走了。", pinyin: "Tā yǐjīng zǒu le.", de: "Er ist schon gegangen." },
            { cn: "我们都很高兴。", pinyin: "Wǒmen dōu hěn gāoxìng.", de: "Wir sind alle froh." }
          ],
          tip: "Im Deutschen kann „auch\" flexibel stehen: „Ich mag <em>auch</em> Kaffee\" oder „<em>Auch</em> ich mag Kaffee.\" Im Chinesischen ist die Position fest: Subjekt + 也 + Verb. ❌ 也我喜欢 → ✅ 我也喜欢."
        }
      ]
    },
    // ── Lektion 2: Fragen stellen ──────────────────────────────────────
    {
      id: 'lesson-22',
      number: 2,
      title: "Fragen stellen",
      subtitle: "吗, 呢, Fragewörter und ihre Position",
      level: 'HSK1',
      grammarIds: ["g:疑问代词@HSK1","g:吗","g:疑问句：是非问句","g:疑问句：特指问句","g:什么","g:几","g:谁","g:哪儿","g:怎么","g:语气助词@HSK1","g:呢²","g:为什么"],
      intro: "Fragen stellen ist im Chinesischen überraschend einfach — du musst weder die Wortstellung ändern noch Hilfsverben einfügen. Für Ja/Nein-Fragen hängst du einfach <strong>吗</strong> an einen Aussagesatz. Für offene Fragen (W-Fragen) setzt du das Fragewort <strong>genau an die Stelle, wo die Antwort stehen würde</strong> — nicht an den Satzanfang wie im Deutschen. Dieses Prinzip ist simpel, aber für deutschsprachige Lernende zunächst ungewohnt.",
      sections: [
        {
          heading: "吗 (ma) — Ja/Nein-Fragen",
          text: "Die einfachste Art, eine Frage zu stellen: Nimm einen <strong>Aussagesatz</strong> und hänge <strong>吗</strong> ans Ende. Fertig! Die Wortstellung ändert sich nicht. 吗 ist eine reine Fragepartikel ohne eigene Bedeutung.",
          examples: [
            { cn: "你是中国人吗？", pinyin: "Nǐ shì Zhōngguó rén ma?", de: "Bist du Chinese/Chinesin?" },
            { cn: "你喜欢咖啡吗？", pinyin: "Nǐ xǐhuan kāfēi ma?", de: "Magst du Kaffee?" },
            { cn: "他明天来吗？", pinyin: "Tā míngtiān lái ma?", de: "Kommt er morgen?" },
            { cn: "你吃了吗？", pinyin: "Nǐ chī le ma?", de: "Hast du gegessen?" }
          ],
          tip: "Achtung: 吗-Fragen kombiniert man <strong>nicht</strong> mit Fragewörtern! ❌ 你什么时候来吗？ → Entweder 你来吗？ (Ja/Nein) oder 你什么时候来？ (W-Frage)."
        },
        {
          heading: "呢 (ne) — Rückfragen",
          text: "呢 ist vielseitig: Am häufigsten wird es für <strong>Rückfragen</strong> verwendet — „Und du? Und er?\" Einfach das Thema + 呢. Außerdem kann 呢 am Satzende einen <strong>andauernden Zustand</strong> betonen oder rhetorische Nuancen hinzufügen.",
          examples: [
            { cn: "我很好，你呢？", pinyin: "Wǒ hěn hǎo, nǐ ne?", de: "Mir geht es gut, und dir?" },
            { cn: "我喝茶，你呢？", pinyin: "Wǒ hē chá, nǐ ne?", de: "Ich trinke Tee, und du?" },
            { cn: "我的手机呢？", pinyin: "Wǒ de shǒujī ne?", de: "Wo ist mein Handy? (Implizit: Wo ist es?)" },
            { cn: "他还在睡觉呢。", pinyin: "Tā hái zài shuìjiào ne.", de: "Er schläft noch! (Betont den Zustand)" }
          ],
          tip: "呢 ist nie eine echte Ja/Nein-Frage. Es setzt voraus, dass der Kontext schon klar ist, und fragt nach dem „Rest\". Ideal für lockere, natürliche Gespräche."
        },
        {
          heading: "W-Fragewörter",
          text: "Chinesisch hat eine Reihe von Fragewörtern, die du unbedingt kennen solltest. Das Besondere: Sie stehen <strong>an der Position der erwarteten Antwort</strong> im Satz — nicht am Anfang!",
          examples: [
            { cn: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", de: "Wie heißt du? (什么 = was/welcher)" },
            { cn: "谁是你的老师？", pinyin: "Shéi shì nǐ de lǎoshī?", de: "Wer ist deine Lehrkraft? (谁 = wer)" },
            { cn: "你在哪儿工作？", pinyin: "Nǐ zài nǎr gōngzuò?", de: "Wo arbeitest du? (哪儿 = wo)" },
            { cn: "你怎么去学校？", pinyin: "Nǐ zěnme qù xuéxiào?", de: "Wie kommst du zur Schule? (怎么 = wie)" },
            { cn: "你为什么学中文？", pinyin: "Nǐ wèi shénme xué Zhōngwén?", de: "Warum lernst du Chinesisch? (为什么 = warum)" }
          ],
          tip: "Schlüsselregel: Das Fragewort steht dort, wo die Antwort stehen würde. Beispiel: 你去<strong>哪儿</strong>？→ 我去<strong>北京</strong>。Die Satzstruktur ist identisch!"
        },
        {
          heading: "多少 und 几 — nach Zahlen fragen",
          text: "<strong>多少</strong> und <strong>几</strong> fragen beide nach einer Zahl, aber mit einem wichtigen Unterschied: 几 erwartet eine <strong>kleine Zahl</strong> (meist unter 10) und braucht ein Zählwort. 多少 ist für <strong>beliebig große Zahlen</strong> und braucht kein Zählwort.",
          examples: [
            { cn: "你有几个孩子？", pinyin: "Nǐ yǒu jǐ gè háizi?", de: "Wie viele Kinder hast du? (Erwartet kleine Zahl)" },
            { cn: "这个多少钱？", pinyin: "Zhège duōshao qián?", de: "Wie viel kostet das?" },
            { cn: "你们班有多少学生？", pinyin: "Nǐmen bān yǒu duōshao xuéshēng?", de: "Wie viele Schülerinnen und Schüler hat eure Klasse?" },
            { cn: "今天几号？", pinyin: "Jīntiān jǐ hào?", de: "Der Wievielte ist heute?" }
          ],
          tip: "Im Deutschen gibt es diese Unterscheidung nicht — wir fragen immer „wie viele?\". Merke: 几 + Zählwort (kleine Zahl erwartet), 多少 ohne Zählwort (große/unbekannte Zahl)."
        }
      ]
    },
    // ── Lektion 3: 有 (yǒu) ─────────────────────────────────────────────
    {
      id: 'lesson-23',
      number: 3,
      title: "有 (yǒu)",
      subtitle: "Haben, Existenz und mehr",
      level: 'HSK1',
      grammarIds: ["g:“有”字句1：表示领有","g:处所+有+数量短语+名词","g:有（一）点儿","g:否定副词@HSK1","g:没（有）"],
      intro: "有 gehört zu den <strong>allerersten Verben</strong>, die du im Chinesischen lernst — und es ist eines der vielseitigsten. Es bedeutet nicht nur „haben\" im Sinne von Besitz, sondern drückt auch <strong>Existenz</strong> aus: „es gibt\" oder „da ist\". Anders als fast alle anderen chinesischen Verben wird 有 <strong>niemals mit 不 verneint</strong>, sondern ausschließlich mit 没. Diese Ausnahme solltest du dir von Anfang an einprägen.",
      sections: [
        {
          heading: "有 für Besitz",
          text: "有 drückt aus, dass jemand etwas <strong>besitzt</strong> oder <strong>hat</strong>. Die Struktur ist einfach: <strong>Subjekt + 有 + Objekt</strong>. Es funktioniert genau wie das deutsche „haben\".",
          examples: [
            { cn: "我有一个弟弟。", pinyin: "Wǒ yǒu yí gè dìdi.", de: "Ich habe einen kleinen Bruder." },
            { cn: "她有很多朋友。", pinyin: "Tā yǒu hěn duō péngyou.", de: "Sie hat viele Freunde." },
            { cn: "你有时间吗？", pinyin: "Nǐ yǒu shíjiān ma?", de: "Hast du Zeit?" },
            { cn: "我有一个问题。", pinyin: "Wǒ yǒu yí gè wèntí.", de: "Ich habe eine Frage." }
          ],
          tip: "Anders als im Deutschen braucht 有 kein „ein/eine\". Aber in der Praxis wird oft ein Zählwort verwendet: 我有<strong>一个</strong>弟弟 klingt natürlicher als 我有弟弟."
        },
        {
          heading: "有 für Existenz",
          text: "Wenn 有 ohne persönliches Subjekt steht oder der Ort das „Subjekt\" ist, drückt es <strong>Existenz</strong> aus: „Es gibt...\" oder „Dort ist...\". Die Struktur lautet: <strong>Ort + 有 + Ding</strong>.",
          examples: [
            { cn: "桌子上有一本书。", pinyin: "Zhuōzi shang yǒu yì běn shū.", de: "Auf dem Tisch liegt ein Buch." },
            { cn: "教室里有三十个学生。", pinyin: "Jiàoshì lǐ yǒu sānshí gè xuéshēng.", de: "Im Klassenzimmer sind dreißig Schülerinnen und Schüler." },
            { cn: "这儿有没有商店？", pinyin: "Zhèr yǒu méiyǒu shāngdiàn?", de: "Gibt es hier ein Geschäft?" },
            { cn: "这里有很多好吃的。", pinyin: "Zhèlǐ yǒu hěn duō hǎochī de.", de: "Hier gibt es viel Leckeres." }
          ],
          tip: "Im Deutschen sagen wir „Es gibt eine Bank in der Nähe\" — im Chinesischen steht der Ort zuerst: 附近有银行. Nicht: ❌ 有银行在附近."
        },
        {
          heading: "Verneinung: 没有 (méiyǒu)",
          text: "有 ist das einzige häufige Verb, das <strong>ausschließlich mit 没</strong> verneint wird — niemals mit 不! 没有 kann zu 没 verkürzt werden, aber 不有 existiert nicht.",
          examples: [
            { cn: "我没有车。", pinyin: "Wǒ méiyǒu chē.", de: "Ich habe kein Auto." },
            { cn: "杯子里没有水了。", pinyin: "Bēizi lǐ méiyǒu shuǐ le.", de: "Im Glas ist kein Wasser mehr." },
            { cn: "今天没有课。", pinyin: "Jīntiān méiyǒu kè.", de: "Heute gibt es keinen Unterricht." },
            { cn: "他没什么钱。", pinyin: "Tā méi shénme qián.", de: "Er hat nicht viel Geld." }
          ],
          tip: "Eiserne Regel: ❌ 不有 gibt es NICHT. Es heißt immer 没有. Das ist die häufigste Ausnahme bei der Verneinung und ein typischer Fehler am Anfang."
        },
        {
          heading: "有一点 vs. 一点",
          text: "<strong>有(一)点(儿)</strong> steht <em>vor</em> Adjektiven und hat eine leicht <strong>negative</strong> Konnotation: „etwas zu...\". <strong>一点(儿)</strong> steht <em>nach</em> Adjektiven und ist <strong>neutral</strong>: „ein bisschen (mehr)\".",
          examples: [
            { cn: "今天有点儿冷。", pinyin: "Jīntiān yǒudiǎnr lěng.", de: "Heute ist es etwas kalt. (Negativ: unangenehm)" },
            { cn: "这个菜有点儿贵。", pinyin: "Zhège cài yǒudiǎnr guì.", de: "Dieses Gericht ist etwas teuer. (Zu teuer für mich)" },
            { cn: "便宜一点儿吧！", pinyin: "Piányi yìdiǎnr ba!", de: "Ein bisschen billiger bitte! (Neutral: Vergleich)" },
            { cn: "请说慢一点儿。", pinyin: "Qǐng shuō màn yìdiǎnr.", de: "Bitte sprich etwas langsamer." }
          ],
          tip: "Typischer Fehler: ❌ 有点儿好 (klingt seltsam, weil 有点儿 negativ ist, aber „gut\" positiv). ✅ 有点儿贵 (etwas teuer) ist korrekt, weil „teuer\" als negativ empfunden wird."
        }
      ]
    },
    // ── Lektion 4: 在 (zài) ─────────────────────────────────────────────
    {
      id: 'lesson-24',
      number: 4,
      title: "在 (zài)",
      subtitle: "Ort, Position und Handlung an einem Ort",
      level: 'HSK1',
      grammarIds: ["g:方位名词@HSK1","g:在（引出时间、处所）","g:其他结构类型：方位短语","g:—边","g:处所+有+数量短语+名词","g:面"],
      intro: "在 ist eines der <strong>häufigsten und vielseitigsten Wörter</strong> im Chinesischen. Es kann als Verb („sich befinden\"), als Präposition („an/in/auf\") und sogar als Progressivmarker (→ [[lesson:lesson-19]]) fungieren. Für den Anfang sind vor allem zwei Funktionen wichtig: <strong>Wo ist etwas?</strong> und <strong>Wo passiert etwas?</strong> Wenn du 在 beherrschst, kannst du über Orte und Positionen fließend sprechen.",
      sections: [
        {
          heading: "在 + Ort — Wo befindet sich etwas?",
          text: "Als Verb bedeutet 在 „sich befinden\". Die Struktur ist einfach: <strong>Subjekt + 在 + Ort</strong>. Es braucht kein zusätzliches Verb — 在 reicht allein.",
          examples: [
            { cn: "我在北京。", pinyin: "Wǒ zài Běijīng.", de: "Ich bin in Peking." },
            { cn: "他在家。", pinyin: "Tā zài jiā.", de: "Er ist zu Hause." },
            { cn: "你的书在桌子上。", pinyin: "Nǐ de shū zài zhuōzi shang.", de: "Dein Buch ist auf dem Tisch." },
            { cn: "医院在哪儿？", pinyin: "Yīyuàn zài nǎr?", de: "Wo ist das Krankenhaus?" }
          ],
          tip: "Im Deutschen benutzen wir „sein\" + Ort: „Ich bin in Peking.\" Im Chinesischen wird dafür 在 verwendet, nicht 是! ❌ 我是在北京 (als Existenzaussage) → ✅ 我在北京."
        },
        {
          heading: "Richtungswörter (方位词)",
          text: "Um Positionen genauer zu beschreiben, folgen nach dem Nomen sogenannte <strong>Richtungswörter</strong> (方位词). Sie funktionieren wie Nachsilben, die die genaue Lage angeben.",
          examples: [
            { cn: "猫在桌子下面。", pinyin: "Māo zài zhuōzi xiàmian.", de: "Die Katze ist unter dem Tisch. (下面 = unten)" },
            { cn: "商店在学校旁边。", pinyin: "Shāngdiàn zài xuéxiào pángbiān.", de: "Das Geschäft ist neben der Schule. (旁边 = nebenan)" },
            { cn: "书包在椅子后面。", pinyin: "Shūbāo zài yǐzi hòumian.", de: "Der Rucksack ist hinter dem Stuhl. (后面 = hinten)" },
            { cn: "手机在包里面。", pinyin: "Shǒujī zài bāo lǐmian.", de: "Das Handy ist in der Tasche. (里面 = innen)" }
          ],
          tip: "Die wichtigsten Richtungswörter: <strong>上</strong> (oben/auf), <strong>下</strong> (unten/unter), <strong>里</strong> (innen/in), <strong>外</strong> (außen/draußen), <strong>前</strong> (vorne/vor), <strong>后</strong> (hinten/hinter), <strong>旁边</strong> (neben), <strong>对面</strong> (gegenüber). Oft mit Suffix 面 oder 边 verwendet."
        },
        {
          heading: "在 + Ort + Verb — Handlung an einem Ort",
          text: "Wenn du sagen willst, dass jemand etwas <strong>an einem bestimmten Ort tut</strong>, steht 在 + Ort <strong>vor dem Verb</strong> — nicht danach! Dies ist einer der häufigsten Unterschiede zum Deutschen.",
          examples: [
            { cn: "我在家吃饭。", pinyin: "Wǒ zài jiā chīfàn.", de: "Ich esse zu Hause." },
            { cn: "她在朋友家看书。", pinyin: "Tā zài péngyou jiā kàn shū.", de: "Sie liest bei einer Freundin oder einem Freund zu Hause." },
            { cn: "孩子们在外面玩。", pinyin: "Háizimen zài wàimian wán.", de: "Die Kinder spielen draußen." },
            { cn: "你在哪儿工作？", pinyin: "Nǐ zài nǎr gōngzuò?", de: "Wo arbeitest du?" }
          ],
          tip: "Deutsch: „Ich esse <em>zu Hause</em>\" — Ort nach dem Verb. Chinesisch: 我<em>在家</em>吃饭 — Ort <strong>vor</strong> dem Verb. Das ist eine der wichtigsten Regeln!"
        },
        {
          heading: "在 vs. 有 für Ortsangaben",
          text: "Beide können „etwas ist irgendwo\" ausdrücken, aber mit umgekehrter Perspektive: <strong>在</strong> sagt, wo ein <em>bekanntes</em> Ding ist. <strong>有</strong> sagt, was an einem Ort <em>existiert</em>.",
          examples: [
            { cn: "书在桌子上。", pinyin: "Shū zài zhuōzi shang.", de: "Das Buch ist auf dem Tisch. (Du suchst das Buch)" },
            { cn: "桌子上有一本书。", pinyin: "Zhuōzi shang yǒu yì běn shū.", de: "Auf dem Tisch liegt ein Buch. (Du beschreibst den Tisch)" },
            { cn: "我的猫在椅子上。", pinyin: "Wǒ de māo zài yǐzi shang.", de: "Meine Katze ist auf dem Stuhl. (Bekannte Katze)" },
            { cn: "椅子上有一只猫。", pinyin: "Yǐzi shang yǒu yì zhī māo.", de: "Auf dem Stuhl ist eine Katze. (Unbekannte Katze)" }
          ],
          tip: "Einfache Regel: <strong>在</strong>: X ist bei Y (Bekanntes lokalisieren). <strong>有</strong>: Bei Y gibt es X (Neues einführen). Vergleich: 在 → „Wo ist mein Buch?\" / 有 → „Was liegt auf dem Tisch?\""
        }
      ]
    },
    // ── Lektion 5: 这 (zhè) und 那 (nà) ──────────────────────────────────
    {
      id: 'lesson-26',
      number: 5,
      title: "这 (zhè) und 那 (nà)",
      subtitle: "Demonstrativpronomen: dies & jenes",
      level: 'HSK1/HSK2',
      grammarIds: ["g:指示代词@HSK1","g:这","g:指示代词@HSK2","g:那么"],
      intro: "这 (dies) und 那 (jenes) sind die chinesischen <strong>Demonstrativpronomen</strong> — sie zeigen auf Dinge, Orte und Weisen. Anders als im Deutschen, wo „dieser\" je nach Genus und Kasus dekliniert wird (dieser, diese, dieses, diesem...), bleiben 这 und 那 <strong>immer gleich</strong>. Dafür kombinieren sie sich mit Zählwörtern, Ortssuffixen und anderen Elementen zu einer ganzen Familie nützlicher Ausdrücke.",
      sections: [
        {
          heading: "这/那 + Zählwort + Nomen",
          text: "Wenn du auf ein bestimmtes Ding zeigst, brauchst du: <strong>这/那 + Zählwort + Nomen</strong>. Das Zählwort gehört in der Regel dazu; das universelle 个 passt im Zweifel fast immer. Ohne Zählwort stehen nur 这些/那些 (Mehrzahl: 这些书) und umgangssprachliche Kurzformen wie 这人.",
          examples: [
            { cn: "这个人是谁？", pinyin: "Zhège rén shì shéi?", de: "Wer ist diese Person?" },
            { cn: "那本书很好看。", pinyin: "Nà běn shū hěn hǎokàn.", de: "Das Buch dort ist sehr gut. (本 = ZW für Bücher)" },
            { cn: "我要这杯咖啡。", pinyin: "Wǒ yào zhè bēi kāfēi.", de: "Ich möchte diesen Kaffee. (杯 = ZW für Tassen)" },
            { cn: "那只猫是你的吗？", pinyin: "Nà zhī māo shì nǐ de ma?", de: "Ist die Katze dort deine? (只 = ZW für Tiere)" }
          ],
          tip: "Typischer Fehler: ❌ 我要这书 statt ✅ 我要这本书. Im Deutschen brauchen wir kein Zählwort („dieses Buch\"), im Chinesischen gehört es <strong>in der Regel</strong> dazu."
        },
        {
          heading: "这里/那里, 这儿/那儿 — hier & dort",
          text: "<strong>这里/这儿</strong> bedeutet „hier\", <strong>那里/那儿</strong> bedeutet „dort\". 这里/那里 ist etwas formeller, 这儿/那儿 eher umgangssprachlich (besonders im Norden Chinas).",
          examples: [
            { cn: "请坐这里。", pinyin: "Qǐng zuò zhèlǐ.", de: "Bitte setzen Sie sich hierhin." },
            { cn: "那里很漂亮。", pinyin: "Nàlǐ hěn piàoliang.", de: "Dort ist es sehr schön." },
            { cn: "你住在这儿吗？", pinyin: "Nǐ zhù zài zhèr ma?", de: "Wohnst du hier?" },
            { cn: "从这儿到那儿要多长时间？", pinyin: "Cóng zhèr dào nàr yào duō cháng shíjiān?", de: "Wie lange braucht man von hier nach dort?" }
          ],
          tip: "In Südchina und Taiwan wird eher 这里/那里 verwendet, in Peking und Nordchina eher 这儿/那儿 mit dem typischen 儿-Laut."
        },
        {
          heading: "这样/那样 — so / auf diese Weise",
          text: "<strong>这样</strong> (so, auf diese Weise) und <strong>那样</strong> (so, auf jene Weise) beschreiben eine <strong>Art und Weise</strong>. Sie können als Adjektiv oder Adverb fungieren.",
          examples: [
            { cn: "你不能这样做。", pinyin: "Nǐ bù néng zhèyàng zuò.", de: "Du kannst das nicht so machen." },
            { cn: "这样好吗？", pinyin: "Zhèyàng hǎo ma?", de: "Ist es so in Ordnung?" },
            { cn: "不要那样说话。", pinyin: "Bú yào nàyàng shuōhuà.", de: "Sprich nicht auf diese Weise." },
            { cn: "就是这样。", pinyin: "Jiùshì zhèyàng.", de: "Genau so ist es." }
          ]
        },
        {
          heading: "这么/那么 — so sehr / dermaßen",
          text: "<strong>这么</strong> und <strong>那么</strong> stehen vor Adjektiven oder Verben und drücken einen <strong>hohen Grad</strong> aus: „so (sehr)\", „dermaßen\". 这么 bezieht sich auf Nahes/Gegenwärtiges, 那么 auf Entferntes oder Hypothetisches.",
          examples: [
            { cn: "你怎么这么忙？", pinyin: "Nǐ zěnme zhème máng?", de: "Warum bist du so beschäftigt?" },
            { cn: "中文没有那么难。", pinyin: "Zhōngwén méiyǒu nàme nán.", de: "Chinesisch ist nicht so schwer (wie du denkst)." },
            { cn: "今天这么冷！", pinyin: "Jīntiān zhème lěng!", de: "Heute ist es so kalt!" },
            { cn: "他那么高，一定会打篮球。", pinyin: "Tā nàme gāo, yídìng huì dǎ lánqiú.", de: "Er ist so groß, er spielt bestimmt Basketball." }
          ],
          tip: "这么/那么 + Adjektiv drückt oft <strong>Überraschung oder Emotion</strong> aus. „这么贵！\" (So teuer!) klingt erstaunt. Im Deutschen entspricht es dem betonten „SO\": „Das ist SO teuer!\""
        }
      ]
    },
    // ── Lektion 6: 想 (xiǎng) und 要 (yào) ───────────────────────────────
    {
      id: 'lesson-25',
      number: 6,
      title: "想 (xiǎng) und 要 (yào)",
      subtitle: "Wünsche, Absichten und Forderungen",
      level: 'HSK1',
      grammarIds: ["g:想","g:要","g:会","g:能","g:可以","g:不要"],
      intro: "Im Deutschen haben wir „wollen\", „möchten\", „müssen\", „sollen\" — alles verschiedene Nuancen. Im Chinesischen übernehmen <strong>想</strong> und <strong>要</strong> einen großen Teil dieser Aufgaben. Beide können „wollen\" bedeuten, aber der <strong>Tonfall und die Stärke</strong> sind unterschiedlich: 想 ist ein sanfter Wunsch, 要 eine feste Absicht oder Forderung. Besonders die Verneinung unterscheidet sich dramatisch!",
      sections: [
        {
          heading: "想 — möchten, Lust haben",
          text: "想 drückt einen <strong>weichen Wunsch</strong> oder eine <strong>Absicht</strong> aus. Es entspricht am ehesten dem deutschen „möchten\" oder „Lust haben auf\". Es klingt höflich und unverbindlich.",
          examples: [
            { cn: "我想喝咖啡。", pinyin: "Wǒ xiǎng hē kāfēi.", de: "Ich möchte Kaffee trinken." },
            { cn: "你想吃什么？", pinyin: "Nǐ xiǎng chī shénme?", de: "Was möchtest du essen?" },
            { cn: "我想去中国旅游。", pinyin: "Wǒ xiǎng qù Zhōngguó lǚyóu.", de: "Ich möchte nach China reisen." },
            { cn: "她想学做饭。", pinyin: "Tā xiǎng xué zuòfàn.", de: "Sie möchte kochen lernen." }
          ],
          tip: "想 bedeutet auch „denken an\" oder „vermissen\": 我想你 = Ich vermisse dich / Ich denke an dich. Kontext entscheidet!"
        },
        {
          heading: "要 — wollen, müssen, werden",
          text: "要 ist <strong>stärker und bestimmter</strong> als 想. Es kann „wollen\" (feste Absicht), „müssen\" (Notwendigkeit) oder sogar „werden\" (nahe Zukunft) bedeuten. Es drückt Entschlossenheit oder Dringlichkeit aus.",
          examples: [
            { cn: "我要一杯水。", pinyin: "Wǒ yào yì bēi shuǐ.", de: "Ich möchte/will ein Glas Wasser. (Bestellung)" },
            { cn: "明天我要考试。", pinyin: "Míngtiān wǒ yào kǎoshì.", de: "Morgen habe ich eine Prüfung. / Morgen muss ich eine Prüfung ablegen." },
            { cn: "要下雨了。", pinyin: "Yào xiàyǔ le.", de: "Es wird gleich regnen. (Nahe Zukunft)" },
            { cn: "你要好好学习。", pinyin: "Nǐ yào hǎohāo xuéxí.", de: "Du musst fleißig lernen." }
          ],
          tip: "In Restaurants wird 要 zum Bestellen verwendet: 我要一个汉堡 (Ich hätte gerne einen Hamburger). Das klingt nicht unhöflich — es ist die normale Bestellform."
        },
        {
          heading: "不想 vs. 不要 — Verneinung",
          text: "Hier wird es spannend: <strong>不想</strong> heißt einfach „nicht wollen / keine Lust haben\" — höflich und neutral. <strong>不要</strong> + Verb dagegen ist ein <strong>Verbot oder eine Aufforderung</strong>: „Tu das nicht!\" Der Unterschied ist riesig!",
          examples: [
            { cn: "我不想去。", pinyin: "Wǒ bù xiǎng qù.", de: "Ich möchte nicht gehen. (Höflich, sanft)" },
            { cn: "不要说话！", pinyin: "Bú yào shuōhuà!", de: "Sprich nicht! / Sei still! (Verbot)" },
            { cn: "不要走！", pinyin: "Bú yào zǒu!", de: "Geh nicht weg! (Bitte, Warnung)" },
            { cn: "我不想吃米饭。", pinyin: "Wǒ bù xiǎng chī mǐfàn.", de: "Ich möchte keinen Reis essen. (Präferenz)" },
            { cn: "上课不要说话。", pinyin: "Shàngkè bú yào shuōhuà.", de: "Im Unterricht nicht reden! (Ermahnung)" }
          ],
          tip: "<strong>Achte auf die Form:</strong> Nur <strong>不要 + Verb</strong> ist ein Verbot (不要说话！). Auf die Frage 你要咖啡吗？ („Willst du Kaffee?\") heißt die Antwort 不要 einfach „Nein, möchte ich nicht\" — hier ist 要 das Verb „wollen\". Etwas weicher klingt 不用了，谢谢 (nicht nötig, danke)."
        },
        {
          heading: "Abgrenzung zu 会, 能, 可以",
          text: "Neben 想 und 要 gibt es noch die modalen Hilfsverben <strong>会</strong> (können/werden), <strong>能</strong> (fähig sein/dürfen) und <strong>可以</strong> (dürfen/können). Sie alle stehen vor dem Verb und drücken verschiedene Nuancen aus — Details dazu findest du in [[lesson:lesson-17]].",
          examples: [
            { cn: "我想去。", pinyin: "Wǒ xiǎng qù.", de: "Ich möchte gehen. (Wunsch)" },
            { cn: "我要去。", pinyin: "Wǒ yào qù.", de: "Ich will/muss gehen. (Feste Absicht)" },
            { cn: "我会去。", pinyin: "Wǒ huì qù.", de: "Ich werde (bestimmt) hingehen. (Zusage, Vermutung über die Zukunft)" },
            { cn: "我能去。", pinyin: "Wǒ néng qù.", de: "Ich kann hingehen. (Die Umstände erlauben es.)" },
            { cn: "我可以去。", pinyin: "Wǒ kěyǐ qù.", de: "Ich darf gehen. (Erlaubnis)" }
          ],
          tip: "Eselsbrücke: 想 = Herz (Wunsch), 要 = Faust (Wille/Forderung), 会 = Kopf (Können/Wissen), 能 = Muskel (Fähigkeit), 可以 = grünes Licht (Erlaubnis)."
        }
      ]
    },
    // ── Lektion 7: 很, 太, 真, 非常 ─────────────────────────────────────────
    {
      id: 'lesson-27',
      number: 7,
      title: "很, 太, 真, 非常",
      subtitle: "Adjektive als Prädikate und Gradausdrücke",
      level: 'HSK1',
      grammarIds: ["g:程度副词@HSK1","g:很","g:太","g:真","g:非常","g:主谓句2：形容词谓语句","g:有（一）点儿","g:感叹句","g:形容词+数量补语","g:程度副词@HSK3"],
      intro: "Einer der überraschendsten Unterschiede zwischen Deutsch und Chinesisch: Adjektive brauchen im Chinesischen <strong>kein „sein\"</strong> als Hilfsverb. Man sagt nicht „sie ist schön\" (❌ 她是漂亮), sondern einfach „sie sehr schön\" (✅ 她很漂亮). Das kleine Wörtchen 很 steht dabei fast immer vor dem Adjektiv — oft als reiner „Platzhalter\" ohne echte Bedeutung von „sehr\". Daneben gibt es eine ganze Skala von Gradwörtern, die du kennen solltest.",
      sections: [
        {
          heading: "Adjektive als Prädikate — OHNE 是",
          text: "Im Chinesischen sind Adjektive selbst „Zustandsverben\" — sie brauchen kein 是 (sein). In einfachen Aussagen steht stattdessen <strong>很</strong> vor dem Adjektiv. Dieses 很 ist oft <strong>bedeutungsleer</strong> und dient nur als grammatisches Bindeglied.",
          examples: [
            { cn: "她很漂亮。", pinyin: "Tā hěn piàoliang.", de: "Sie ist schön. (很 hier ≈ bedeutungslos)" },
            { cn: "今天很热。", pinyin: "Jīntiān hěn rè.", de: "Heute ist es heiß." },
            { cn: "中文很有意思。", pinyin: "Zhōngwén hěn yǒu yìsi.", de: "Chinesisch ist interessant." },
            { cn: "这个菜很好吃。", pinyin: "Zhège cài hěn hǎochī.", de: "Dieses Gericht ist lecker." }
          ],
          tip: "<strong>Häufigster Fehler:</strong> ❌ 她是漂亮 / ❌ 今天是热. Adjektive brauchen kein 是! 是 wird nur für Nomen verwendet: 她是老师 (Sie ist Lehrerin). Für Adjektive: 她很好 (Sie ist gut)."
        },
        {
          heading: "Die Gradskala: von schwach bis stark",
          text: "Chinesisch hat eine ganze Reihe von <strong>Gradwörtern</strong>, die die Intensität eines Adjektivs ausdrücken. Vom schwächsten zum stärksten:",
          examples: [
            { cn: "有点儿贵。", pinyin: "Yǒudiǎnr guì.", de: "Etwas teuer. (有点儿 — leicht negativ)" },
            { cn: "比较贵。", pinyin: "Bǐjiào guì.", de: "Ziemlich/relativ teuer. (比较 — vergleichend)" },
            { cn: "很贵。", pinyin: "Hěn guì.", de: "Teuer / sehr teuer. (很 — Standard)" },
            { cn: "非常贵。", pinyin: "Fēicháng guì.", de: "Sehr teuer. (非常 — deutlich stark)" },
            { cn: "太贵了！", pinyin: "Tài guì le!", de: "Zu teuer! (太...了 — übertrieben)" }
          ],
          tip: "Die Reihenfolge von schwach bis stark: <strong>一点儿 → 有点儿 → 比较 → 很 → 挺 → 真 → 非常 → 特别 → 太...了</strong>. 很 ist die „Normalstufe\" und oft am schwächsten in tatsächlicher Bedeutung."
        },
        {
          heading: "有点儿 (negativ) vs. 一点儿 (neutral)",
          text: "Diese beiden Ausdrücke verwechseln viele Lernende. <strong>有点儿</strong> steht <em>vor</em> dem Adjektiv und hat eine <strong>negative Konnotation</strong> (etwas zu...). <strong>一点儿</strong> steht <em>nach</em> dem Adjektiv und ist <strong>neutral</strong>, oft in Vergleichen oder Bitten.",
          examples: [
            { cn: "这个房间有点儿小。", pinyin: "Zhège fángjiān yǒudiǎnr xiǎo.", de: "Dieses Zimmer ist etwas klein. (Zu klein, negativ)" },
            { cn: "你能便宜一点儿吗？", pinyin: "Nǐ néng piányi yìdiǎnr ma?", de: "Kannst du es etwas billiger machen? (Neutral, Bitte)" },
            { cn: "我有点儿累。", pinyin: "Wǒ yǒudiǎnr lèi.", de: "Ich bin etwas müde. (Leicht negativ)" },
            { cn: "今天比昨天冷一点儿。", pinyin: "Jīntiān bǐ zuótiān lěng yìdiǎnr.", de: "Heute ist es etwas kälter als gestern. (Vergleich)" }
          ],
          tip: "Eselsbrücke: <strong>有点儿</strong> = „leider etwas...\" (negativ). <strong>一点儿</strong> = „ein kleines bisschen (mehr)\" (neutral). ❌ 有点儿好 klingt seltsam — ✅ 有点儿难 ist natürlich."
        },
        {
          heading: "真, 太...了, 挺 — Emotion und Betonung",
          text: "<strong>真</strong> (wirklich/echt) drückt genuine Überraschung oder Bewunderung aus. <strong>太...了</strong> bedeutet „zu...\" oder „so...\" (oft übertrieben). <strong>挺</strong> ist umgangssprachlich für „ziemlich/recht\".",
          examples: [
            { cn: "你的中文真好！", pinyin: "Nǐ de Zhōngwén zhēn hǎo!", de: "Dein Chinesisch ist wirklich gut!" },
            { cn: "太好了！", pinyin: "Tài hǎo le!", de: "Super! / Großartig! (Ausruf)" },
            { cn: "这个电影太长了。", pinyin: "Zhège diànyǐng tài cháng le.", de: "Dieser Film ist zu lang." },
            { cn: "今天挺冷的。", pinyin: "Jīntiān tǐng lěng de.", de: "Heute ist es ziemlich kalt. (Umgangssprache)" }
          ],
          tip: "太...了 kann sowohl <strong>negativ</strong> (太贵了 = zu teuer) als auch <strong>positiv</strong> (太好了 = großartig!) sein. Der Kontext entscheidet. In Ausrufen der Freude ist es ein beliebtes Muster."
        }
      ]
    },
    // ── Lektion 8: Zählwörter (量词) ─────────────────────────────────────
    {
      id: 'lesson-18',
      number: 8,
      title: "Zählwörter (量词)",
      subtitle: "Wie man im Chinesischen Dinge zählt",
      level: 'HSK1',
      grammarIds: ["g:名量词@HSK1","g:其他结构类型：数量短语","g:指示代词@HSK1","g:杯","g:名量词@HSK2","g:名量词@HSK3"],
      intro: "Im Deutschen sagen wir „ein <em>Stück</em> Kuchen\", „drei <em>Glas</em> Wasser\", „zwei <em>Blatt</em> Papier\" — aber bei den meisten Dingen brauchen wir kein Zählwort: „ein Buch\", „zwei Katzen\". Im Chinesischen ist das <strong>fast immer</strong> nötig! Zwischen Zahl und Nomen steht ein <strong>Zählwort</strong> (量词, liàngcí) — Ausnahmen sind Wörter, die selbst als Zählwort dienen (三天, 两年, 二十岁). 个 ist der universelle „Joker\", aber es gibt Dutzende spezifischer Zählwörter. Sie zu lernen ist wie Vokabellernen — aber es lohnt sich, denn sie machen dein Chinesisch authentisch.",
      sections: [
        {
          heading: "Das Universalzählwort 个 (gè)",
          text: "个 ist das <strong>häufigste</strong> Zählwort und funktioniert für Menschen, abstrakte Dinge und vieles mehr. Im Zweifelsfall liegst du mit 个 selten komplett falsch.",
          examples: [
            { cn: "一个人", pinyin: "yí gè rén", de: "eine Person" },
            { cn: "三个苹果", pinyin: "sān gè píngguǒ", de: "drei Äpfel" },
            { cn: "两个问题", pinyin: "liǎng gè wèntí", de: "zwei Fragen" },
            { cn: "这个很好。", pinyin: "Zhège hěn hǎo.", de: "Dieses (hier) ist gut." }
          ],
          tip: "Beachte: Bei „zwei\" vor Zählwörtern sagt man <strong>两</strong> (liǎng), nicht 二 (èr)! Also 两个, nicht 二个."
        },
        {
          heading: "Wichtige Zählwörter",
          text: "Hier sind die häufigsten Zählwörter, die du kennen solltest: <strong>本</strong> (Bücher), <strong>只</strong> (Tiere), <strong>条</strong> (lange, schmale Dinge), <strong>张</strong> (flache Dinge), <strong>件</strong> (Kleidung/Angelegenheiten), <strong>杯</strong> (Tassen/Gläser), <strong>块</strong> (Stücke/Geldeinheit).",
          examples: [
            { cn: "一本书", pinyin: "yì běn shū", de: "ein Buch" },
            { cn: "两只猫", pinyin: "liǎng zhī māo", de: "zwei Katzen" },
            { cn: "一条鱼", pinyin: "yì tiáo yú", de: "ein Fisch" },
            { cn: "三张票", pinyin: "sān zhāng piào", de: "drei Tickets" }
          ]
        },
        {
          heading: "Zählwörter mit 这/那/哪",
          text: "Auch bei Demonstrativpronomen (这 = dies, 那 = jenes, 哪 = welches) braucht man ein Zählwort: <strong>这/那/哪 + Zählwort + Nomen</strong>.",
          examples: [
            { cn: "这本书很有意思。", pinyin: "Zhè běn shū hěn yǒu yìsi.", de: "Dieses Buch ist sehr interessant." },
            { cn: "那个学生是谁？", pinyin: "Nàge xuéshēng shì shéi?", de: "Wer ist der Student/die Studentin dort?" },
            { cn: "你要哪杯咖啡？", pinyin: "Nǐ yào nǎ bēi kāfēi?", de: "Welche Tasse Kaffee möchtest du?" }
          ],
          tip: "Im gesprochenen Chinesisch wird 那个 oft als „nèige\" ausgesprochen und 这个 als „zhèige\" — das ist normaler Umgangssprachgebrauch."
        },
        {
          heading: "Weitere häufige Zählwörter",
          text: "Mit der Zeit wirst du immer mehr Zählwörter kennenlernen. Hier noch einige wichtige: <strong>位</strong> (höflich für Personen), <strong>双</strong> (Paare), <strong>把</strong> (Gegenstände mit Griff), <strong>辆</strong> (Fahrzeuge), <strong>封</strong> (Briefe/E-Mails).",
          examples: [
            { cn: "这位老师姓王。", pinyin: "Zhè wèi lǎoshī xìng Wáng.", de: "Diese Lehrkraft heißt mit Nachnamen Wang. (höflich)" },
            { cn: "一双筷子", pinyin: "yì shuāng kuàizi", de: "ein Paar Essstäbchen" },
            { cn: "两辆车", pinyin: "liǎng liàng chē", de: "zwei Autos" },
            { cn: "一封信", pinyin: "yì fēng xìn", de: "ein Brief" }
          ]
        }
      ]
    },
    // ── Lektion 9: 不 vs. 没 ─────────────────────────────────────────────
    {
      id: 'lesson-20',
      number: 9,
      title: "不 vs. 没",
      subtitle: "Die zwei Verneinungen des Chinesischen",
      level: 'HSK1',
      grammarIds: ["g:否定副词@HSK1","g:不","g:没（有）"],
      intro: "Im Deutschen haben wir „nicht\" und „kein\" — im Chinesischen gibt es <strong>不</strong> (bù) und <strong>没</strong> (méi). Beide bedeuten „nicht\", aber sie werden in <strong>völlig verschiedenen Situationen</strong> verwendet. Die grundlegende Regel: 不 verneint <strong>Absichten, Gewohnheiten und Zustände</strong>; 没 verneint <strong>abgeschlossene Handlungen und Besitz</strong>. Diesen Unterschied zu meistern ist einer der ersten großen Durchbrüche beim Chinesischlernen.",
      sections: [
        {
          heading: "不 (bù) — Absicht, Gewohnheit, Eigenschaft",
          text: "不 wird verwendet für: <strong>Willensäußerungen</strong> (ich will nicht), <strong>Gewohnheiten</strong> (er trinkt nicht), <strong>allgemeine Aussagen</strong> (das ist nicht) und <strong>Adjektive</strong> (nicht groß). 不 ist die „Standard-Verneinung\" für Gegenwart und Zukunft.",
          examples: [
            { cn: "我不喜欢咖啡。", pinyin: "Wǒ bù xǐhuan kāfēi.", de: "Ich mag keinen Kaffee. (Eigenschaft/Gewohnheit)" },
            { cn: "他不来。", pinyin: "Tā bù lái.", de: "Er kommt nicht. (Absicht/Zukunft)" },
            { cn: "今天不热。", pinyin: "Jīntiān bú rè.", de: "Heute ist es nicht heiß. (Zustand)" },
            { cn: "我不是学生。", pinyin: "Wǒ bú shì xuéshēng.", de: "Ich bin nicht Student/Studentin. (是 wird immer mit 不 verneint!)" }
          ],
          tip: "不 vor dem 4. Ton wird zu bú: 不是 (bú shì), 不对 (bú duì), 不去 (bú qù). In allen anderen Fällen bleibt es bù."
        },
        {
          heading: "没 (méi) — nicht geschehen & nicht haben",
          text: "没 wird verwendet für: <strong>Handlungen, die (noch) nicht stattgefunden haben</strong> (ich habe nicht...) und <strong>Besitz</strong> (haben/nicht haben). 没 ist die Verneinung von 有 und die Verneinung für abgeschlossene Handlungen.",
          examples: [
            { cn: "我没有钱。", pinyin: "Wǒ méiyǒu qián.", de: "Ich habe kein Geld." },
            { cn: "他昨天没来。", pinyin: "Tā zuótiān méi lái.", de: "Er ist gestern nicht gekommen." },
            { cn: "我没看那个电影。", pinyin: "Wǒ méi kàn nàge diànyǐng.", de: "Ich habe den Film nicht gesehen." },
            { cn: "她还没吃饭。", pinyin: "Tā hái méi chīfàn.", de: "Sie hat noch nicht gegessen." }
          ],
          tip: "有 wird <strong>immer</strong> mit 没 verneint: 没有. Niemals 不有! Das ist eine eiserne Regel."
        },
        {
          heading: "Direkter Vergleich",
          text: "Am besten versteht man den Unterschied durch direkte Gegenüberstellung mit demselben Verb:",
          examples: [
            { cn: "我不吃肉。", pinyin: "Wǒ bù chī ròu.", de: "Ich esse kein Fleisch. (Grundsätzlich, Gewohnheit)" },
            { cn: "我没吃肉。", pinyin: "Wǒ méi chī ròu.", de: "Ich habe kein Fleisch gegessen. (Dieses Mal, Vergangenheit)" },
            { cn: "他不去上海。", pinyin: "Tā bú qù Shànghǎi.", de: "Er fährt nicht nach Shanghai. (Will nicht / hat nicht vor)" },
            { cn: "他没去上海。", pinyin: "Tā méi qù Shànghǎi.", de: "Er ist nicht nach Shanghai gefahren. (Vergangenheit)" }
          ]
        },
        {
          heading: "Besondere Fälle",
          text: "Einige Verben und Ausdrücke haben feste Verneinungspartner: 是 → immer 不是. 有 → immer 没有. Modale Hilfsverben (会, 能, 可以, 应该) → meistens 不.",
          examples: [
            { cn: "他不会游泳。", pinyin: "Tā bú huì yóuyǒng.", de: "Er kann nicht schwimmen." },
            { cn: "她不能来。", pinyin: "Tā bù néng lái.", de: "Sie kann nicht kommen." },
            { cn: "这里没有人。", pinyin: "Zhèlǐ méiyǒu rén.", de: "Hier ist niemand." },
            { cn: "我没准备好。", pinyin: "Wǒ méi zhǔnbèi hǎo.", de: "Ich bin noch nicht bereit." }
          ],
          tip: "Wenn du unsicher bist: Frag dich — geht es um eine <strong>allgemeine Aussage oder Absicht</strong> (→ 不) oder um ein <strong>konkretes vergangenes Ereignis oder Besitz</strong> (→ 没)?"
        }
      ]
    },
    // ── Lektion 10: 也 (yě) und 都 (dōu) ──────────────────────────────────
    {
      id: 'lesson-28',
      number: 10,
      title: "也 (yě) und 都 (dōu)",
      subtitle: "Auch, alle, beide — Adverbien mit fester Position",
      level: 'HSK1',
      grammarIds: ["g:都¹","g:也","g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词"],
      intro: "也 (auch) und 都 (alle/beide) gehören zu den <strong>ersten und wichtigsten Adverbien</strong> im Chinesischen. Sie scheinen einfach, haben aber eine Eigenschaft, die deutschsprachige Lernende regelmäßig stolpern lässt: Sie stehen <strong>immer vor dem Verb</strong> und <strong>nie am Satzanfang oder -ende</strong>. Außerdem verändert sich bei 都 die Bedeutung komplett, je nachdem ob die Verneinung <em>vor</em> oder <em>nach</em> 都 steht.",
      sections: [
        {
          heading: "也 — auch",
          text: "也 bedeutet „auch\" und steht <strong>immer direkt vor dem Verb</strong> (oder vor einem anderen Adverb, das vor dem Verb steht). Es steht niemals am Satzanfang und niemals am Satzende.",
          examples: [
            { cn: "我也喜欢中国菜。", pinyin: "Wǒ yě xǐhuan Zhōngguó cài.", de: "Ich mag auch chinesisches Essen." },
            { cn: "她也是德国人。", pinyin: "Tā yě shì Déguó rén.", de: "Sie ist auch Deutsche." },
            { cn: "我也不知道。", pinyin: "Wǒ yě bù zhīdào.", de: "Ich weiß es auch nicht." },
            { cn: "他也没去过中国。", pinyin: "Tā yě méi qù guo Zhōngguó.", de: "Er war auch noch nie in China." }
          ],
          tip: "Im Deutschen kann „auch\" verschiedene Positionen einnehmen: „Ich mag <em>auch</em> Kaffee\" / „<em>Auch</em> ich mag Kaffee\". Im Chinesischen gibt es nur <strong>eine Position</strong>: nach dem Subjekt, vor dem Verb. ❌ 也我喜欢 → ✅ 我也喜欢."
        },
        {
          heading: "都 — alle, beide",
          text: "都 bedeutet „alle\" oder „beide\" und fasst das Subjekt (oder ein vorangehendes Element) <strong>zusammen</strong>. Es steht ebenfalls <strong>vor dem Verb</strong>. Wichtig: 都 bezieht sich auf etwas <em>vor</em> ihm, nicht nach ihm.",
          examples: [
            { cn: "我们都去。", pinyin: "Wǒmen dōu qù.", de: "Wir gehen alle." },
            { cn: "他们都是学生。", pinyin: "Tāmen dōu shì xuéshēng.", de: "Sie sind alle Studierende." },
            { cn: "这些书我都看过。", pinyin: "Zhèxiē shū wǒ dōu kàn guo.", de: "Diese Bücher habe ich alle gelesen." },
            { cn: "什么都好。", pinyin: "Shénme dōu hǎo.", de: "Alles ist gut. (什么都 = alles)" }
          ],
          tip: "都 bezieht sich immer auf etwas <strong>davor</strong>: 我们<strong>都</strong>去 = wir <em>alle</em> gehen. Nicht: ❌ 都我们去. Das „alle\" muss vor 都 stehen!"
        },
        {
          heading: "Kombination: 也都",
          text: "Wenn du „alle auch\" oder „auch alle\" sagen willst, stehen 也 und 都 <strong>zusammen vor dem Verb</strong>, und zwar in der festen Reihenfolge: <strong>也都</strong> (也 zuerst, dann 都).",
          examples: [
            { cn: "我们也都很喜欢。", pinyin: "Wǒmen yě dōu hěn xǐhuan.", de: "Wir mögen es auch alle sehr." },
            { cn: "他们也都来了。", pinyin: "Tāmen yě dōu lái le.", de: "Sie sind auch alle gekommen." },
            { cn: "这些菜也都很好吃。", pinyin: "Zhèxiē cài yě dōu hěn hǎochī.", de: "Diese Gerichte sind auch alle lecker." }
          ],
          tip: "Die Reihenfolge ist fest: <strong>也都</strong>, niemals ❌ 都也. Merke: 也 (auch) kommt zuerst, 都 (alle) kommt danach — „auch alle\", genau wie im Deutschen."
        },
        {
          heading: "都不 vs. 不都 — keiner vs. nicht alle",
          text: "Hier zeigt sich die Präzision des Chinesischen: <strong>都不</strong> = „<em>keiner</em> tut es\" (totale Verneinung). <strong>不都</strong> = „<em>nicht alle</em> tun es\" (teilweise Verneinung). Die Position von 不 relativ zu 都 ändert die Bedeutung komplett!",
          examples: [
            { cn: "我们都不去。", pinyin: "Wǒmen dōu bú qù.", de: "Keiner von uns geht. (Alle nicht = keiner)" },
            { cn: "我们不都去。", pinyin: "Wǒmen bù dōu qù.", de: "Nicht alle von uns gehen. (Einige schon, andere nicht)" },
            { cn: "他们都没来。", pinyin: "Tāmen dōu méi lái.", de: "Keiner von ihnen ist gekommen." },
            { cn: "他们不都是中国人。", pinyin: "Tāmen bù dōu shì Zhōngguó rén.", de: "Sie kommen nicht alle aus China. (Einige schon)" },
            { cn: "我什么都不想吃。", pinyin: "Wǒ shénme dōu bù xiǎng chī.", de: "Ich will gar nichts essen." }
          ],
          tip: "Eselsbrücke: <strong>都不</strong> = „alle NICHT\" → keiner. <strong>不都</strong> = „NICHT alle\" → manche schon. Dieser Unterschied existiert genauso im Deutschen, wird aber in Prüfungen gerne getestet!"
        }
      ]
    },
    // ── Lektion 11: 了 (le) ──────────────────────────────────────────────
    {
      id: 'lesson-1',
      number: 11,
      title: "了 (le)",
      subtitle: "Aspektpartikel vs. Satzfinalpartikel",
      level: 'HSK1',
      grammarIds: ["g:了¹","g:了²","g:完成态：用动态助词“了¹”表示","g:变化态：用动态助词“了²”表示","g:没（有）"],
      intro: "了 ist vermutlich die berühmteste — und berüchtigtste — Partikel der chinesischen Sprache. Viele Lernende denken zuerst: „Ah, das ist die Vergangenheitsform!\" Aber so einfach ist es leider nicht. 了 hat <em>zwei</em> grundverschiedene Funktionen, je nachdem, wo es im Satz steht. Direkt nach dem Verb zeigt es den <strong>Abschluss einer Handlung</strong> an (Aspektpartikel 了₁). Am Satzende signalisiert es eine <strong>veränderte Situation oder neue Gegebenheit</strong> (Satzfinalpartikel 了₂). Und ja — manchmal treten beide gleichzeitig auf. Wenn du diese Partikel wirklich verstehst, hast du einen riesigen Schritt im Chinesischen gemacht.",
      sections: [
        {
          heading: "了₁ — Aspektpartikel (nach dem Verb)",
          text: "Wenn 了 direkt nach dem Verb steht, markiert es, dass die Handlung <strong>abgeschlossen</strong> ist. Das kann in der Vergangenheit sein, muss es aber nicht — auch zukünftige Handlungen können mit 了₁ als abgeschlossen markiert werden. Entscheidend ist: Die Handlung hat ein klares Ende erreicht.",
          examples: [
            { cn: "我买了一本书。", pinyin: "Wǒ mǎi le yì běn shū.", de: "Ich habe ein Buch gekauft." },
            { cn: "她喝了三杯咖啡。", pinyin: "Tā hē le sān bēi kāfēi.", de: "Sie hat drei Tassen Kaffee getrunken." },
            { cn: "你吃了药再走。", pinyin: "Nǐ chī le yào zài zǒu.", de: "Nimm erst die Medizin, dann geh. (Zukunft!)" }
          ],
          tip: "了₁ steht <strong>immer direkt nach dem Verb</strong>. Wenn ein Objekt folgt, braucht es oft eine Mengenangabe oder ein Attribut (我买了<strong>一本</strong>书), sonst klingt der Satz unvollständig."
        },
        {
          heading: "了₂ — Satzfinalpartikel (am Satzende)",
          text: "Am Satzende zeigt 了 an, dass sich etwas <strong>verändert hat</strong> oder eine <strong>neue Situation</strong> eingetreten ist. Es drückt aus: „Jetzt ist es anders als vorher.\" Das kann auch Gegenwärtiges beschreiben!",
          examples: [
            { cn: "下雨了。", pinyin: "Xià yǔ le.", de: "Es regnet jetzt. (Vorher nicht!)" },
            { cn: "我不想吃了。", pinyin: "Wǒ bù xiǎng chī le.", de: "Ich will nicht mehr essen. (Gerade hat sich das geändert.)" },
            { cn: "他是大学生了。", pinyin: "Tā shì dàxuéshēng le.", de: "Er ist jetzt Student. (Neue Situation.)" }
          ],
          tip: "了₂ am Satzende hat nichts mit Vergangenheit zu tun! Es betont den <strong>Wandel</strong>. Vergleiche: 他很高 (Er ist groß) vs. 他很高了 (Er ist jetzt groß geworden)."
        },
        {
          heading: "Beide 了 gleichzeitig",
          text: "Manchmal treffen 了₁ und 了₂ aufeinander — das Verb hat einen Abschlussmarker <em>und</em> der Satz drückt eine neue Situation aus. Oft verschmelzen sie zu einem einzigen 了 am Satzende, wenn das Objekt keine Mengenangabe hat.",
          examples: [
            { cn: "我吃了饭了。", pinyin: "Wǒ chī le fàn le.", de: "Ich habe (jetzt) gegessen. (Beide 了 sichtbar.)" },
            { cn: "我已经买了票了。", pinyin: "Wǒ yǐjīng mǎi le piào le.", de: "Ich habe die Karten schon gekauft." }
          ],
          tip: "Wenn du unsicher bist, welches 了 gemeint ist: Frag dich — betont der Satz den <strong>Abschluss der Handlung</strong> (→ 了₁) oder die <strong>neue Situation</strong> (→ 了₂)?"
        },
        {
          heading: "Verneinung mit 了",
          text: "Um eine abgeschlossene Handlung zu verneinen, benutzt man <strong>没(有)</strong>, nicht 不. Und: Wenn 没 benutzt wird, fällt 了 weg!",
          examples: [
            { cn: "我没买书。", pinyin: "Wǒ méi mǎi shū.", de: "Ich habe kein Buch gekauft." },
            { cn: "她没去过中国。", pinyin: "Tā méi qù guo Zhōngguó.", de: "Sie ist nie in China gewesen." },
            { cn: "他没来。", pinyin: "Tā méi lái.", de: "Er ist nicht gekommen." }
          ],
          tip: "没 + Verb = Handlung hat nicht stattgefunden. Kein 了 nötig! Das ist ein häufiger Fehler: ❌ 我没买了书 → ✅ 我没买书."
        }
      ]
    },
    // ── Lektion 12: 的, 地, 得 ─────────────────────────────────────────────
    {
      id: 'lesson-2',
      number: 12,
      title: "的, 地, 得",
      subtitle: "Die drei „de\" — Struktur, Adverb, Komplement",
      level: 'HSK1/HSK2',
      grammarIds: ["g:的¹","g:得","g:地","g:定语：名词性词语、形容词性短语、数量短语作定语","g:定语：动词或动词性短语、主谓短语作定语","g:动词+得+形容词性短语"],
      intro: "Im gesprochenen Chinesisch klingen sie fast gleich, aber schriftlich haben 的, 地 und 得 völlig verschiedene Aufgaben. Stell dir vor, sie wären drei Geschwister: <strong>的</strong> verbindet Attribute mit Nomen (wie „der große Hund\"), <strong>地</strong> verbindet Adverbien mit Verben (wie „schnell rennen\"), und <strong>得</strong> leitet Komplemente ein, die beschreiben, <em>wie gut oder schlecht</em> etwas getan wird. Wenn du diese drei auseinanderhalten kannst, wird dein Chinesisch sofort natürlicher klingen.",
      sections: [
        {
          heading: "的 — Attributpartikel",
          text: "的 steht zwischen einem <strong>Attribut</strong> und einem <strong>Nomen</strong>. Es funktioniert ähnlich wie das deutsche „von\" oder ein Genitiv. Alles, was ein Nomen näher beschreibt, kann vor 的 stehen: Adjektive, Pronomen, Relativsätze und mehr.",
          examples: [
            { cn: "我的书", pinyin: "wǒ de shū", de: "mein Buch" },
            { cn: "漂亮的花", pinyin: "piàoliang de huā", de: "schöne Blumen" },
            { cn: "妈妈做的菜", pinyin: "māma zuò de cài", de: "das Gericht, das Mama gekocht hat" },
            { cn: "昨天来的人", pinyin: "zuótiān lái de rén", de: "die Person, die gestern kam" }
          ],
          tip: "Bei einsilbigen Adjektiven vor Nomen fällt 的 oft weg: 好人 (guter Mensch), 大城市 (große Stadt). Bei zweisilbigen bleibt es: 漂亮的花."
        },
        {
          heading: "地 — Adverbialpartikel",
          text: "地 steht zwischen einem <strong>Adverb oder adverbialen Ausdruck</strong> und einem <strong>Verb</strong>. Es beschreibt, <em>auf welche Weise</em> die Handlung ausgeführt wird.",
          examples: [
            { cn: "她高兴地笑了。", pinyin: "Tā gāoxìng de xiào le.", de: "Sie lachte fröhlich." },
            { cn: "他认真地学习。", pinyin: "Tā rènzhēn de xuéxí.", de: "Er lernt gewissenhaft." },
            { cn: "孩子们快乐地玩。", pinyin: "Háizimen kuàilè de wán.", de: "Die Kinder spielen fröhlich." }
          ],
          tip: "In der Alltagssprache wird 地 oft durch 的 ersetzt, besonders in informellen Texten. In Prüfungen und formellen Texten solltest du aber den Unterschied kennen."
        },
        {
          heading: "得 — Komplementpartikel",
          text: "得 steht nach einem <strong>Verb</strong> und leitet ein <strong>Komplement</strong> ein, das beschreibt, wie die Handlung ausgeführt wurde — also das Ergebnis oder den Grad. Denk daran: 得 beantwortet die Frage „Wie gut/schlecht?\"",
          examples: [
            { cn: "她说得很好。", pinyin: "Tā shuō de hěn hǎo.", de: "Sie spricht sehr gut." },
            { cn: "他跑得很快。", pinyin: "Tā pǎo de hěn kuài.", de: "Er rennt sehr schnell." },
            { cn: "我累得不想动。", pinyin: "Wǒ lèi de bù xiǎng dòng.", de: "Ich bin so müde, dass ich mich nicht bewegen will." }
          ],
          tip: "Merke dir die Richtung: 的 zeigt nach <strong>rechts zum Nomen</strong>, 地 zeigt nach <strong>rechts zum Verb</strong>, 得 zeigt nach <strong>links zum Verb</strong> (es kommt nach dem Verb)."
        },
        {
          heading: "Zusammenfassung & Eselsbrücke",
          text: "Eine einfache Formel: <strong>Attribut + 的 + Nomen</strong> | <strong>Adverb + 地 + Verb</strong> | <strong>Verb + 得 + Komplement</strong>. Auf Deutsch: 的 = „welcher/welche?\", 地 = „wie? (vor dem Verb)\", 得 = „wie gut? (nach dem Verb)\".",
          examples: [
            { cn: "她是一个努力的学生。", pinyin: "Tā shì yí gè nǔlì de xuéshēng.", de: "Sie ist eine fleißige Studentin. (的 → Attribut)" },
            { cn: "她努力地学习。", pinyin: "Tā nǔlì de xuéxí.", de: "Sie lernt fleißig. (地 → Adverb)" },
            { cn: "她学得很努力。", pinyin: "Tā xué de hěn nǔlì.", de: "Sie lernt sehr fleißig. (得 → Komplement)" }
          ]
        }
      ]
    },
    // ── Lektion 13: 会, 能, 可以 ────────────────────────────────────────────
    {
      id: 'lesson-17',
      number: 13,
      title: "会, 能, 可以",
      subtitle: "Modale Hilfsverben — Können ist nicht gleich Können",
      level: 'HSK1',
      grammarIds: ["g:会","g:能","g:可以"],
      intro: "Im Deutschen haben wir ein einziges Wort für „können\" — im Chinesischen gibt es <strong>drei</strong>! 会 (huì), 能 (néng) und 可以 (kěyǐ) bedeuten alle „können\", aber in verschiedenen Nuancen. 会 = gelernte Fähigkeit, 能 = physische oder situationsbedingte Möglichkeit, 可以 = Erlaubnis oder Möglichkeit. Den Unterschied zu beherrschen ist einer der Schlüssel zu natürlichem Chinesisch.",
      sections: [
        {
          heading: "会 (huì) — Gelernte Fähigkeit",
          text: "会 drückt aus, dass man etwas <strong>gelernt hat</strong> und es jetzt beherrscht. Es geht um Fertigkeiten, die man durch Übung oder Studium erworben hat. 会 hat auch eine zweite Bedeutung: „werden\" (Zukunft/Wahrscheinlichkeit).",
          examples: [
            { cn: "我会说中文。", pinyin: "Wǒ huì shuō Zhōngwén.", de: "Ich kann Chinesisch sprechen. (Gelernte Fähigkeit)" },
            { cn: "他会开车。", pinyin: "Tā huì kāi chē.", de: "Er kann Auto fahren." },
            { cn: "明天会下雨。", pinyin: "Míngtiān huì xià yǔ.", de: "Morgen wird es regnen. (Vorhersage)" },
            { cn: "她不会游泳。", pinyin: "Tā bú huì yóuyǒng.", de: "Sie kann nicht schwimmen." }
          ],
          tip: "Merke: 会 = „Ich habe es gelernt / Ich bin in der Lage.\" Wenn du fragst „Kannst du Klavier spielen?\", meinst du 会: 你会弹钢琴吗？"
        },
        {
          heading: "能 (néng) — Fähigkeit / Möglichkeit",
          text: "能 drückt aus, dass man etwas <strong>physisch oder unter den gegebenen Umständen tun kann</strong>. Es geht um Möglichkeit, Kapazität oder körperliche Fähigkeit. Auch für Erlaubnis wird 能 manchmal verwendet.",
          examples: [
            { cn: "我今天不能来。", pinyin: "Wǒ jīntiān bù néng lái.", de: "Ich kann heute nicht kommen. (Umstände)" },
            { cn: "他病了，不能来上课。", pinyin: "Tā bìng le, bù néng lái shàngkè.", de: "Er ist krank, er kann nicht zum Unterricht kommen. (Umstände)" },
            { cn: "你能帮我一下吗？", pinyin: "Nǐ néng bāng wǒ yíxià ma?", de: "Kannst du mir kurz helfen? (Bitte)" }
          ]
        },
        {
          heading: "可以 (kěyǐ) — Erlaubnis / Möglichkeit",
          text: "可以 drückt <strong>Erlaubnis</strong> aus oder eine allgemeine Möglichkeit. Es beantwortet die Frage: „Darf ich?\" oder „Ist es möglich?\".",
          examples: [
            { cn: "这里可以坐吗？", pinyin: "Zhèlǐ kěyǐ zuò ma?", de: "Darf man sich hier hinsetzen?" },
            { cn: "你可以走了。", pinyin: "Nǐ kěyǐ zǒu le.", de: "Du darfst gehen." },
            { cn: "这个可以吃吗？", pinyin: "Zhège kěyǐ chī ma?", de: "Kann man das essen? / Darf man das essen?" }
          ],
          tip: "Verbote bildet man mit <strong>不可以</strong> oder <strong>不能</strong>: 这里不可以抽烟 / 这里不能抽烟 = Hier darf man nicht rauchen."
        },
        {
          heading: "Vergleich & Übersicht",
          text: "Hier siehst du den Unterschied auf einen Blick anhand ähnlicher Situationen:",
          examples: [
            { cn: "他会开车。", pinyin: "Tā huì kāi chē.", de: "Er kann Auto fahren. (Er hat den Führerschein / hat es gelernt)" },
            { cn: "他太累了，不能开车。", pinyin: "Tā tài lèi le, bù néng kāichē.", de: "Er ist zu müde, er kann nicht fahren. (Umstände)" },
            { cn: "这里不可以开车。", pinyin: "Zhèlǐ bù kěyǐ kāichē.", de: "Hier darf man nicht (Auto) fahren. (Verbot)" }
          ]
        }
      ]
    },
    // ── Lektion 14: 在, 正在, 正 ────────────────────────────────────────────
    {
      id: 'lesson-19',
      number: 14,
      title: "在, 正在, 正",
      subtitle: "Verlaufsform — „gerade dabei\"",
      level: 'HSK1',
      grammarIds: ["g:在","g:正在","g:……在/正在+动词","g:……在/正在+动词……+呢","g:……呢"],
      intro: "Im Englischen gibt es die „-ing\"-Form: „I am eating.\" Im Deutschen sagen wir „Ich esse gerade.\" Auch Chinesisch hat Mittel, um auszudrücken, dass eine Handlung <strong>gerade jetzt stattfindet</strong>: <strong>在</strong>, <strong>正在</strong> und <strong>正</strong>. Dazu kommt die Partikel <strong>呢</strong> am Satzende, die den Verlauf zusätzlich betont. Diese Marker sind einfach zu lernen und machen dein Chinesisch sofort lebendiger.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "<strong>在 + Verb</strong> oder <strong>正在 + Verb</strong> oder <strong>正 + Verb</strong> — alle drei drücken aus, dass die Handlung <em>gerade jetzt</em> stattfindet. 正在 ist die vollständigste Form, 在 die häufigste.",
          examples: [
            { cn: "我在吃饭。", pinyin: "Wǒ zài chīfàn.", de: "Ich esse gerade." },
            { cn: "她正在看书。", pinyin: "Tā zhèngzài kàn shū.", de: "Sie liest gerade." },
            { cn: "他们正看电视。", pinyin: "Tāmen zhèng kàn diànshì.", de: "Sie sehen gerade fern." }
          ],
          tip: "在 vor einem Verb = Verlaufsform. 在 vor einem Ort = Ortsangabe. Kontext entscheidet! 我在家 (Ich bin zu Hause) vs. 我在吃 (Ich esse gerade)."
        },
        {
          heading: "呢 am Satzende",
          text: "Die Partikel <strong>呢</strong> (ne) am Satzende verstärkt den Verlaufsaspekt. Sie kann allein oder zusammen mit 在/正在 verwendet werden.",
          examples: [
            { cn: "你在做什么呢？", pinyin: "Nǐ zài zuò shénme ne?", de: "Was machst du gerade?" },
            { cn: "我看书呢。", pinyin: "Wǒ kàn shū ne.", de: "Ich lese gerade. (auch ohne 在 möglich)" },
            { cn: "外面下雪呢。", pinyin: "Wàimiàn xià xuě ne.", de: "Draußen schneit es gerade." }
          ]
        },
        {
          heading: "Verneinung",
          text: "Die Verneinung der Verlaufsform verwendet <strong>没(有)在</strong>. 不在 wird seltener für den Verlaufsaspekt benutzt (es bedeutet eher „nicht anwesend sein\").",
          examples: [
            { cn: "他没在睡觉。", pinyin: "Tā méi zài shuìjiào.", de: "Er schläft gerade nicht." },
            { cn: "我没有在玩，我在学习。", pinyin: "Wǒ méiyǒu zài wán, wǒ zài xuéxí.", de: "Ich spiele nicht, ich lerne." },
            { cn: "她没在听我说话。", pinyin: "Tā méi zài tīng wǒ shuōhuà.", de: "Sie hört mir gerade nicht zu." }
          ],
          tip: "不在 + Ort = nicht anwesend: 他不在家 (Er ist nicht zu Hause). 没在 + Verb = nicht gerade dabei: 他没在学习 (Er lernt gerade nicht)."
        },
        {
          heading: "Verlaufsform in der Vergangenheit",
          text: "Auch vergangene Handlungen, die zu einem bestimmten Zeitpunkt im Gange waren, können mit 在/正在 beschrieben werden — ähnlich dem englischen „was doing\".",
          examples: [
            { cn: "我打电话的时候，他正在睡觉。", pinyin: "Wǒ dǎ diànhuà de shíhou, tā zhèngzài shuìjiào.", de: "Als ich anrief, schlief er gerade." },
            { cn: "昨天晚上八点我在看书。", pinyin: "Zuótiān wǎnshang bā diǎn wǒ zài kàn shū.", de: "Gestern Abend um acht las ich gerade." }
          ]
        }
      ]
    },
    // ── Lektion 15: Thema-Kommentar-Struktur ────────────────────────────
    {
      id: 'lesson-12',
      number: 15,
      title: "Thema-Kommentar-Struktur",
      subtitle: "Wie Chinesisch Sätze wirklich aufbaut",
      level: 'HSK2',
      grammarIds: ["g:受事主语","g:主谓句4：主谓谓语句"],
      intro: "Im Deutschen denkt man meist vom Subjekt aus: „Ich esse Äpfel.\" Chinesisch wird oft als <strong>Subjekt-Verb-Objekt</strong>-Sprache beschrieben, ist aber ebenso eine <strong>Thema-Kommentar</strong>-Sprache. Das bedeutet: Zuerst kommt das <strong>Thema</strong> (worüber sprechen wir?), dann der <strong>Kommentar</strong> (was gibt es darüber zu sagen?). Das Thema muss nicht das grammatische Subjekt sein! Wenn du dieses Prinzip verinnerlichst, werden viele chinesische Sätze plötzlich logisch, die vorher rätselhaft wirkten.",
      sections: [
        {
          heading: "Thema ≠ Subjekt",
          text: "Im Chinesischen kann fast alles zum Thema werden — auch das Objekt, ein Zeitausdruck oder ein ganzer Sachverhalt. Das Thema steht am Satzanfang und wird durch den Kommentar näher erläutert.",
          examples: [
            { cn: "这本书我看过了。", pinyin: "Zhè běn shū wǒ kàn guo le.", de: "Dieses Buch — das habe ich gelesen. (Objekt als Thema)" },
            { cn: "那个人我不认识。", pinyin: "Nàge rén wǒ bú rènshi.", de: "Die Person — die kenne ich nicht." },
            { cn: "中文不难学。", pinyin: "Zhōngwén bù nán xué.", de: "Chinesisch — ist nicht schwer zu lernen." }
          ],
          tip: "Im Deutschen würden wir oft einen Relativsatz oder eine Passivkonstruktion benutzen. Im Chinesischen reicht es, das Thema einfach an den Anfang zu stellen."
        },
        {
          heading: "Doppeltes Subjekt",
          text: "Ein besonders chinesisches Phänomen: Der Satz hat scheinbar <strong>zwei Subjekte</strong>. Das erste ist das Thema, das zweite das grammatische Subjekt des Kommentars.",
          examples: [
            { cn: "大象鼻子长。", pinyin: "Dàxiàng bízi cháng.", de: "Elefanten — die Nase ist lang. (= Elefanten haben lange Rüssel)" },
            { cn: "他身体不好。", pinyin: "Tā shēntǐ bù hǎo.", de: "Er — die Gesundheit ist nicht gut." },
            { cn: "这家饭馆菜很好吃。", pinyin: "Zhè jiā fànguǎn cài hěn hǎochī.", de: "Dieses Restaurant — das Essen ist sehr lecker." }
          ]
        },
        {
          heading: "Zeit und Ort als Thema",
          text: "Zeitangaben und Ortsangaben stehen im Chinesischen gerne am <strong>Satzanfang</strong> als Thema — das ist die natürliche Position.",
          examples: [
            { cn: "明天我不去上班。", pinyin: "Míngtiān wǒ bú qù shàngbān.", de: "Morgen gehe ich nicht zur Arbeit." },
            { cn: "这里不能坐。", pinyin: "Zhèlǐ bù néng zuò.", de: "Hier darf man nicht sitzen." },
            { cn: "中国人口很多。", pinyin: "Zhōngguó rénkǒu hěn duō.", de: "China — die Bevölkerung ist groß." }
          ],
          tip: "Chinesische Sätze folgen oft dem Muster: <strong>Wann → Wo → Wer → Wie → Was tun</strong>. Das Große kommt vor dem Kleinen, das Bekannte vor dem Neuen."
        },
        {
          heading: "Kontrast durch Thema-Kommentar",
          text: "Die Thema-Kommentar-Struktur eignet sich hervorragend für <strong>Kontraste</strong> und <strong>Gegenüberstellungen</strong>.",
          examples: [
            { cn: "咖啡我喜欢，茶我不喜欢。", pinyin: "Kāfēi wǒ xǐhuan, chá wǒ bù xǐhuan.", de: "Kaffee mag ich, Tee mag ich nicht." },
            { cn: "这件我要，那件不要。", pinyin: "Zhè jiàn wǒ yào, nà jiàn bú yào.", de: "Dieses Stück nehme ich, jenes nicht." },
            { cn: "唱歌我唱得好，跳舞我跳不好。", pinyin: "Chànggē wǒ chàng de hǎo, tiàowǔ wǒ tiào bù hǎo.", de: "Singen kann ich gut, tanzen nicht." }
          ]
        }
      ]
    },
    // ── Lektion 16: 时间表达 ────────────────────────────────────────────────
    {
      id: 'lesson-29',
      number: 16,
      title: "时间表达",
      subtitle: "Zeitausdrücke — wann, wie lange, wie oft",
      level: 'HSK2/HSK3',
      grammarIds: ["g:数量补语2：表示动作持续的时间","g:（在）……以前/以后/前/后","g:状语：副词、形容词作状语；表示时间、处所的词语作状语","g:时间副词@HSK2","g:经常","g:时间副词@HSK4","g:...的时候"],
      intro: "Im Deutschen stehen Zeitangaben ziemlich flexibel im Satz — „Ich gehe <em>morgen</em> ins Kino\" oder „<em>Morgen</em> gehe ich ins Kino\". Im Chinesischen gibt es dafür eine klare Regel: <strong>Zeitangaben stehen vor dem Verb</strong> (und meist nach dem Subjekt). Außerdem drückt Chinesisch Dauer, Zeiträume und Häufigkeit mit eigenen Strukturen aus. Dieses System zu verinnerlichen macht deine Sätze sofort natürlicher.",
      sections: [
        {
          heading: "Zeitpunkt: Subjekt + Zeit + Verb",
          text: "Im Chinesischen steht die Zeitangabe <strong>nach dem Subjekt und vor dem Verb</strong>. Sie kann auch ganz an den Satzanfang rücken, wenn sie betont werden soll. Niemals steht sie hinter dem Verb!",
          examples: [
            { cn: "我昨天去了北京。", pinyin: "Wǒ zuótiān qù le Běijīng.", de: "Ich bin gestern nach Peking gefahren." },
            { cn: "她明天不上班。", pinyin: "Tā míngtiān bú shàngbān.", de: "Sie arbeitet morgen nicht." },
            { cn: "我们下午三点见面。", pinyin: "Wǒmen xiàwǔ sān diǎn jiànmiàn.", de: "Wir treffen uns um drei Uhr nachmittags." },
            { cn: "他每天早上跑步。", pinyin: "Tā měitiān zǎoshang pǎobù.", de: "Er joggt jeden Morgen." }
          ],
          tip: "Deutsche Lernende stellen die Zeit gerne ans Satzende, weil das im Deutschen geht: ❌ 我去了北京昨天 → ✅ 我昨天去了北京. Die Zeit kommt <strong>immer vor das Verb</strong>!"
        },
        {
          heading: "以前 / 以后 / 的时候 — Zeitliche Bezüge",
          text: "<strong>以前</strong> (yǐqián) bedeutet „vorher/bevor\", <strong>以后</strong> (yǐhòu) bedeutet „nachher/nachdem\", und <strong>的时候</strong> (de shíhou) bedeutet „als/wenn\". Sie stehen nach dem Bezugspunkt: Verb/Zeitangabe + 以前/以后/的时候.",
          examples: [
            { cn: "吃饭以前要洗手。", pinyin: "Chīfàn yǐqián yào xǐ shǒu.", de: "Vor dem Essen muss man sich die Hände waschen." },
            { cn: "下课以后我们去吃饭。", pinyin: "Xiàkè yǐhòu wǒmen qù chīfàn.", de: "Nach dem Unterricht gehen wir essen." },
            { cn: "我小的时候住在上海。", pinyin: "Wǒ xiǎo de shíhou zhù zài Shànghǎi.", de: "Als ich klein war, wohnte ich in Shanghai." },
            { cn: "三年以前我开始学中文。", pinyin: "Sān nián yǐqián wǒ kāishǐ xué Zhōngwén.", de: "Vor drei Jahren habe ich angefangen, Chinesisch zu lernen." }
          ],
          tip: "Die Reihenfolge ist umgekehrt zum Deutschen: 吃饭以前 = wörtlich „Essen vorher\" = <em>vor</em> dem Essen. Gewöhn dich daran, zuerst den Bezugspunkt zu nennen, dann den Zeitmarker."
        },
        {
          heading: "Dauer: Verb + 了 + Zeitdauer",
          text: "Um auszudrücken, <strong>wie lange</strong> eine Handlung dauert oder gedauert hat, steht die Zeitdauer <em>nach</em> dem Verb (+ 了). Hat das Verb ein Objekt, wird die Dauer zwischen Verb und Objekt eingeschoben, oder das Verb wird wiederholt.",
          examples: [
            { cn: "我等了两个小时。", pinyin: "Wǒ děng le liǎng gè xiǎoshí.", de: "Ich habe zwei Stunden gewartet." },
            { cn: "她学了三年中文。", pinyin: "Tā xué le sān nián Zhōngwén.", de: "Sie hat drei Jahre Chinesisch gelernt." },
            { cn: "他睡了十个小时。", pinyin: "Tā shuì le shí gè xiǎoshí.", de: "Er hat zehn Stunden geschlafen." },
            { cn: "我看了半天电视。", pinyin: "Wǒ kàn le bàntiān diànshì.", de: "Ich habe den halben Tag ferngesehen." }
          ],
          tip: "Verwechsle nicht <strong>Zeitpunkt</strong> (steht VOR dem Verb) und <strong>Zeitdauer</strong> (steht NACH dem Verb): 我<em>昨天</em>学了<em>两个小时</em>中文 — „Ich habe <em>gestern</em> <em>zwei Stunden</em> Chinesisch gelernt.\""
        },
        {
          heading: "Häufigkeit: 每天, 经常, 有时候, 从来不",
          text: "Frequenzadverbien stehen im Chinesischen wie andere Adverbien <strong>vor dem Verb</strong>. Hier eine nützliche Skala von „immer\" bis „nie\":",
          examples: [
            { cn: "他每天都锻炼。", pinyin: "Tā měitiān dōu duànliàn.", de: "Er trainiert jeden Tag. (每天 = jeden Tag)" },
            { cn: "我经常去那家餐厅。", pinyin: "Wǒ jīngcháng qù nà jiā cāntīng.", de: "Ich gehe oft in das Restaurant. (经常 = oft)" },
            { cn: "她有时候会迟到。", pinyin: "Tā yǒu shíhou huì chídào.", de: "Sie kommt manchmal zu spät. (有时候 = manchmal)" },
            { cn: "我从来不喝酒。", pinyin: "Wǒ cónglái bù hē jiǔ.", de: "Ich trinke nie Alkohol. (从来不 = niemals)" }
          ],
          tip: "Bei 每 (jede/r/s) steht oft <strong>都</strong> vor dem Verb: 每天<em>都</em>去. Das 都 verstärkt die Bedeutung „ausnahmslos jedes Mal\"."
        }
      ]
    },
    // ── Lektion 17: 就 und 才 ─────────────────────────────────────────────
    {
      id: 'lesson-30',
      number: 17,
      title: "就 und 才",
      subtitle: "Schneller oder langsamer als erwartet",
      level: 'HSK2/HSK3',
      grammarIds: ["g:就¹","g:才¹","g:一……就……","g:如果……，就……","g:要是……，就……"],
      intro: "就 (jiù) und 才 (cái) sind zwei der nützlichsten — und verwirrendsten — Adverbien im Chinesischen. Beide stehen vor dem Verb und drücken eine <strong>subjektive Bewertung</strong> des Zeitpunkts aus. 就 signalisiert: „Das war <strong>früher, schneller oder einfacher</strong> als erwartet.\" 才 sagt: „Das war <strong>später, langsamer oder schwieriger</strong> als erwartet.\" Sie sind wie zwei Seiten derselben Medaille — und oft genügt die Wahl des einen statt des anderen, um die gesamte Stimmung eines Satzes zu ändern.",
      sections: [
        {
          heading: "就 — Früher/schneller als erwartet",
          text: "就 drückt aus, dass etwas <strong>schnell, früh oder reibungslos</strong> passiert ist. Der Sprecher findet den Zeitpunkt bemerkenswert früh. 就 wird oft mit 了 am Satzende kombiniert.",
          examples: [
            { cn: "他八点就来了。", pinyin: "Tā bā diǎn jiù lái le.", de: "Er kam schon um acht. (Früher als erwartet!)" },
            { cn: "我五分钟就做完了。", pinyin: "Wǒ wǔ fēnzhōng jiù zuòwán le.", de: "Ich war in fünf Minuten schon fertig." },
            { cn: "她很小就会弹钢琴了。", pinyin: "Tā hěn xiǎo jiù huì tán gāngqín le.", de: "Sie konnte schon als kleines Kind Klavier spielen." },
            { cn: "这个问题很简单，我一看就懂了。", pinyin: "Zhège wèntí hěn jiǎndān, wǒ yí kàn jiù dǒng le.", de: "Die Frage ist einfach, ich habe es sofort verstanden." }
          ],
          tip: "就 betont die <strong>subjektive Empfindung</strong> der sprechenden Person: „Das ging aber schnell!\" Objektiv kann acht Uhr spät sein — wer aber erst mit neun Uhr gerechnet hat, sagt 就."
        },
        {
          heading: "才 — Später/schwieriger als erwartet",
          text: "才 drückt aus, dass etwas <strong>spät, mühsam oder erst nach langer Zeit</strong> passiert ist. Der Sprecher empfindet den Zeitpunkt als bemerkenswert spät. Wichtig: Nach 才 steht <strong>kein 了</strong> direkt hinter dem Verb!",
          examples: [
            { cn: "他十点才来。", pinyin: "Tā shí diǎn cái lái.", de: "Er kam erst um zehn. (Zu spät!)" },
            { cn: "我两个小时才做完。", pinyin: "Wǒ liǎng gè xiǎoshí cái zuòwán.", de: "Ich brauchte volle zwei Stunden, bis ich fertig war." },
            { cn: "她二十岁才开始学英语。", pinyin: "Tā èrshí suì cái kāishǐ xué Yīngyǔ.", de: "Sie fing erst mit zwanzig an, Englisch zu lernen." },
            { cn: "我找了很久才找到。", pinyin: "Wǒ zhǎo le hěn jiǔ cái zhǎodào.", de: "Ich habe lange gesucht, bis ich es endlich fand." }
          ],
          tip: "Der größte Fehler: 了 nach 才 + Verb. ❌ 他十点才来了 → ✅ 他十点才来. Bei 才-Sätzen steht 了 höchstens ganz am Satzende, nicht direkt nach dem Verb."
        },
        {
          heading: "就 für Konsequenz und Bedingung",
          text: "就 hat noch eine zweite wichtige Funktion: In <strong>Wenn-Dann-Sätzen</strong> markiert es die Konsequenz (das „dann\"). Es wird oft mit 如果 (falls), 要是 (wenn) oder ohne Konnektor verwendet.",
          examples: [
            { cn: "如果下雨，我就不去了。", pinyin: "Rúguǒ xià yǔ, wǒ jiù bú qù le.", de: "Wenn es regnet, gehe ich nicht." },
            { cn: "你要是不想吃，就别吃。", pinyin: "Nǐ yàoshi bù xiǎng chī, jiù bié chī.", de: "Wenn du nicht essen willst, dann iss nicht." },
            { cn: "学完就可以走了。", pinyin: "Xuéwán jiù kěyǐ zǒu le.", de: "Wenn du fertig gelernt hast, kannst du gehen." }
          ],
          tip: "Im Bedingungssatz ist 就 kein Zeitmarker, sondern ein <strong>logischer Verbinder</strong> — vergleichbar mit dem deutschen „dann\" in Wenn-Dann-Sätzen."
        },
        {
          heading: "Direkter Kontrast: 就 vs. 才",
          text: "Der Unterschied wird am klarsten, wenn man dasselbe Szenario mit beiden Adverbien beschreibt. Die objektiven Fakten sind gleich — nur die <strong>Bewertung</strong> ändert sich:",
          examples: [
            { cn: "他七点就起床了。", pinyin: "Tā qī diǎn jiù qǐchuáng le.", de: "Er ist schon um sieben aufgestanden. (Wow, so früh!)" },
            { cn: "他七点才起床。", pinyin: "Tā qī diǎn cái qǐchuáng.", de: "Er ist erst um sieben aufgestanden. (So spät!)" },
            { cn: "这本书我一天就看完了。", pinyin: "Zhè běn shū wǒ yì tiān jiù kànwán le.", de: "Dieses Buch habe ich an einem Tag durchgelesen. (Schnell!)" },
            { cn: "这本书我一个月才看完。", pinyin: "Zhè běn shū wǒ yí gè yuè cái kànwán.", de: "Für dieses Buch brauchte ich einen ganzen Monat. (Langsam!)" }
          ],
          tip: "Merke dir: 就 = <strong>„schon\"</strong> (positiv überrascht), 才 = <strong>„erst\"</strong> (etwas enttäuscht oder ungeduldig). Die gleiche Zeit, zwei verschiedene Gefühle!"
        }
      ]
    },
    // ── Lektion 18: 还是 und 或者 ───────────────────────────────────────────
    {
      id: 'lesson-31',
      number: 18,
      title: "还是 und 或者",
      subtitle: "„Oder\" in Fragen und Aussagen",
      level: 'HSK2/HSK3',
      grammarIds: ["g:还是……吧","g:疑问句：用“还是”连接的选择问句","g:或者","g:（是）……，还是……","g:或"],
      intro: "Im Deutschen gibt es nur ein „oder\" — im Chinesischen sind es zwei: <strong>还是</strong> (háishi) und <strong>或者</strong> (huòzhě). Die Grundregel ist einfach: 还是 wird in <strong>Wahlfragen</strong> („A oder B?\") verwendet, 或者 in <strong>Aussagen</strong>. Aber 还是 kann auch „doch lieber / trotzdem\" bedeuten — und genau da wird es interessant. Diese Lektion zeigt dir, wann du welches „oder\" brauchst.",
      sections: [
        {
          heading: "还是 — „Oder\" in Fragen",
          text: "还是 wird in <strong>Alternativfragen</strong> verwendet, wenn das Gegenüber zwischen zwei oder mehr Optionen wählen soll. Es ist die chinesische Entsprechung für „A oder B?\" und bildet sogenannte <strong>Wahlfragen</strong>.",
          examples: [
            { cn: "你喝茶还是咖啡？", pinyin: "Nǐ hē chá háishi kāfēi?", de: "Trinkst du Tee oder Kaffee?" },
            { cn: "我们坐地铁还是打车？", pinyin: "Wǒmen zuò dìtiě háishi dǎchē?", de: "Nehmen wir die U-Bahn oder ein Taxi?" },
            { cn: "你是中国人还是日本人？", pinyin: "Nǐ shì Zhōngguó rén háishi Rìběn rén?", de: "Kommst du aus China oder aus Japan?" },
            { cn: "今天去还是明天去？", pinyin: "Jīntiān qù háishi míngtiān qù?", de: "Gehen wir heute oder morgen?" }
          ],
          tip: "Bei 还是-Fragen antwortet man mit einer der Optionen, nicht mit 是/不是. Frage: 你喝茶还是咖啡？ → Antwort: 我喝茶。"
        },
        {
          heading: "或者 — „Oder\" in Aussagen",
          text: "或者 wird in <strong>Aussagesätzen</strong> verwendet, wenn verschiedene Möglichkeiten genannt werden. Es drückt aus, dass beide Optionen möglich oder akzeptabel sind.",
          examples: [
            { cn: "你可以喝茶或者咖啡。", pinyin: "Nǐ kěyǐ hē chá huòzhě kāfēi.", de: "Du kannst Tee oder Kaffee trinken." },
            { cn: "周末我想看电影或者逛街。", pinyin: "Zhōumò wǒ xiǎng kàn diànyǐng huòzhě guàngjiē.", de: "Am Wochenende möchte ich einen Film sehen oder bummeln gehen." },
            { cn: "明天或者后天我都可以。", pinyin: "Míngtiān huòzhě hòutiān wǒ dōu kěyǐ.", de: "Morgen oder übermorgen, beides geht bei mir." },
            { cn: "你可以坐公交车或者骑自行车。", pinyin: "Nǐ kěyǐ zuò gōngjiāochē huòzhě qí zìxíngchē.", de: "Du kannst den Bus nehmen oder Fahrrad fahren." }
          ],
          tip: "Ein häufiger Fehler deutschsprachiger Lernender: ❌ 你喝茶<em>或者</em>咖啡？ In Wahlfragen („A oder B?\") muss es 还是 heißen. 或者 steht in Aussagen — und in Ja/Nein-Fragen mit 吗: 你明天或者后天有空吗？ („Hast du morgen oder übermorgen Zeit?\")."
        },
        {
          heading: "还是 für Entscheidungen — „doch lieber\"",
          text: "还是 hat eine zweite Bedeutung: Es kann in Aussagesätzen <strong>„doch lieber / trotzdem / am besten\"</strong> bedeuten. Der Sprecher hat abgewogen und sich entschieden. Häufig in Kombination mit 吧 am Satzende.",
          examples: [
            { cn: "我还是在家吧。", pinyin: "Wǒ háishi zài jiā ba.", de: "Ich bleibe doch lieber zu Hause." },
            { cn: "我们还是走路去吧。", pinyin: "Wǒmen háishi zǒulù qù ba.", de: "Lass uns doch lieber zu Fuß gehen." },
            { cn: "算了，还是别去了。", pinyin: "Suàn le, háishi bié qù le.", de: "Vergiss es, gehen wir doch lieber nicht hin." },
            { cn: "你还是多休息吧。", pinyin: "Nǐ háishi duō xiūxi ba.", de: "Du solltest dich doch lieber mehr ausruhen." }
          ],
          tip: "还是 + Aussage (+ 吧) = „nach Überlegung finde ich es besser, wenn...\". Der Sprecher klingt dabei bedacht und abwägend."
        },
        {
          heading: "Zusammenfassung & Verwechslungsfallen",
          text: "Merke dir die Kernregel: <strong>还是 = Wahlfrage oder Entscheidung</strong>, <strong>或者 = Aussage mit Optionen</strong>. In der gesprochenen Sprache wird 还是 viel häufiger benutzt als 或者, weil es vielseitiger ist.",
          examples: [
            { cn: "你想吃中餐还是西餐？", pinyin: "Nǐ xiǎng chī zhōngcān háishi xīcān?", de: "Willst du chinesisch oder westlich essen? (Frage → 还是)" },
            { cn: "中餐或者西餐都可以。", pinyin: "Zhōngcān huòzhě xīcān dōu kěyǐ.", de: "Chinesisch oder westlich, beides ist okay. (Aussage → 或者)" },
            { cn: "我们还是吃中餐吧。", pinyin: "Wǒmen háishi chī zhōngcān ba.", de: "Lass uns doch lieber chinesisch essen. (Entscheidung → 还是)" }
          ],
          tip: "Im Schriftlichen gibt es auch <strong>或</strong> (huò) — eine kürzere, formellere Variante von 或者, die vor allem in offiziellen Texten vorkommt."
        }
      ]
    },
    // ── Lektion 19: 又 und 再 ─────────────────────────────────────────────
    {
      id: 'lesson-32',
      number: 19,
      title: "又 und 再",
      subtitle: "„Nochmal\" — vergangen oder zukünftig",
      level: 'HSK3',
      grammarIds: ["g:又","g:又……，又……","g:再¹"],
      intro: "Sowohl 又 (yòu) als auch 再 (zài) bedeuten „wieder\" oder „nochmal\" — aber sie beziehen sich auf <strong>verschiedene Zeiträume</strong>. 又 blickt zurück: etwas ist <em>schon wieder</em> passiert. 再 blickt nach vorne: etwas soll <em>nochmal</em> passieren. Dieser Unterschied existiert im Deutschen nicht so klar, weshalb er für Lernende besonders tückisch ist. Dazu kommt die nützliche Doppelstruktur 又...又...",
      sections: [
        {
          heading: "又 — Schon wieder (Vergangenheit)",
          text: "又 wird verwendet, wenn eine Handlung <strong>bereits wiederholt stattgefunden hat</strong>. Der Sprecher stellt fest: „Das ist schon wieder passiert.\" Oft schwingt leichter Unmut oder Überraschung mit.",
          examples: [
            { cn: "他又迟到了。", pinyin: "Tā yòu chídào le.", de: "Er ist schon wieder zu spät gekommen." },
            { cn: "你又忘了？", pinyin: "Nǐ yòu wàng le?", de: "Hast du es schon wieder vergessen?" },
            { cn: "今天又下雨了。", pinyin: "Jīntiān yòu xià yǔ le.", de: "Heute regnet es schon wieder." },
            { cn: "她又生病了。", pinyin: "Tā yòu shēngbìng le.", de: "Sie ist schon wieder krank geworden." }
          ],
          tip: "又 kann auch für regelmäßige Wiederholungen stehen, ohne negativen Unterton: 春天又来了 (Der Frühling ist wieder da). Der Kontext bestimmt die Stimmung."
        },
        {
          heading: "再 — Nochmal (Zukunft / Aufforderung)",
          text: "再 wird verwendet, wenn eine Handlung <strong>in der Zukunft wiederholt werden soll</strong>. Es steht in Bitten, Plänen und Absichtserklärungen. 再 blickt immer nach vorne.",
          examples: [
            { cn: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn.", de: "Bitte sag es nochmal." },
            { cn: "我想再去一次中国。", pinyin: "Wǒ xiǎng zài qù yí cì Zhōngguó.", de: "Ich möchte nochmal nach China fahren." },
            { cn: "下次再来！", pinyin: "Xià cì zài lái!", de: "Komm nächstes Mal wieder!" },
            { cn: "我再想想。", pinyin: "Wǒ zài xiǎngxiang.", de: "Lass mich nochmal darüber nachdenken." }
          ],
          tip: "Eiserne Regel: 再 wird <strong>nie für vergangene Wiederholungen</strong> benutzt! ❌ 他昨天再迟到了 → ✅ 他昨天又迟到了."
        },
        {
          heading: "又...又... — Sowohl ... als auch",
          text: "Die Doppelstruktur 又...又... verbindet zwei <strong>Eigenschaften oder Zustände</strong> (seltener zwei Handlungen), die gleichzeitig zutreffen. Sie betont, dass beides zusammenkommt — oft mit positivem oder negativem Unterton.",
          examples: [
            { cn: "这个菜又便宜又好吃。", pinyin: "Zhège cài yòu piányi yòu hǎochī.", de: "Dieses Gericht ist sowohl günstig als auch lecker." },
            { cn: "她又聪明又漂亮。", pinyin: "Tā yòu cōngming yòu piàoliang.", de: "Sie ist sowohl klug als auch hübsch." },
            { cn: "今天又冷又下雨。", pinyin: "Jīntiān yòu lěng yòu xià yǔ.", de: "Heute ist es kalt und es regnet auch noch." },
            { cn: "他又累又饿。", pinyin: "Tā yòu lèi yòu è.", de: "Er ist sowohl müde als auch hungrig." }
          ],
          tip: "又...又... verbindet meist <strong>Eigenschaften und Zustände</strong>. Mit Verben beschreibt es lebhaft zwei Handlungen, die zusammen oder im Wechsel geschehen (孩子们又唱又跳). Für zwei bewusst gleichzeitig ausgeführte Tätigkeiten nimmt man 一边...一边 (→ [[lesson:lesson-35]])."
        },
        {
          heading: "Direkter Kontrast",
          text: "Vergleiche dieselben Verben mit 又 und 再 — der Zeitbezug ändert sich komplett:",
          examples: [
            { cn: "他又来了。", pinyin: "Tā yòu lái le.", de: "Er ist schon wieder gekommen. (Vergangenheit)" },
            { cn: "他明天再来。", pinyin: "Tā míngtiān zài lái.", de: "Er kommt morgen nochmal. (Zukunft)" },
            { cn: "我又看了一遍。", pinyin: "Wǒ yòu kàn le yí biàn.", de: "Ich habe es nochmal angesehen. (Vergangenheit)" },
            { cn: "我要再看一遍。", pinyin: "Wǒ yào zài kàn yí biàn.", de: "Ich will es nochmal ansehen. (Zukunft)" }
          ],
          tip: "Eselsbrücke: <strong>又 = „schon wieder\" (Rückblick)</strong>, <strong>再 = „nochmal\" (Vorausblick)</strong>. Wenn du überlegst, welches du brauchst, frag dich: Ist es schon passiert oder soll es erst passieren?"
        }
      ]
    },
    // ── Lektion 20: 过 (guò) ─────────────────────────────────────────────
    {
      id: 'lesson-11',
      number: 20,
      title: "过 (guò)",
      subtitle: "Erfahrungsaspekt — „Schon mal gemacht?\"",
      level: 'HSK2',
      grammarIds: ["g:过","g:经历态：用动态助词“过”表示","g:没（有）","g:了¹"],
      intro: "Warst du schon mal in China? Hast du schon mal Stinketofu probiert? Hast du diesen Film schon gesehen? All diese Fragen drehen sich um <strong>Erfahrungen</strong> — und genau dafür gibt es die Aspektpartikel 过. Sie drückt aus, dass jemand etwas <strong>irgendwann in der Vergangenheit mindestens einmal erlebt hat</strong>. Es geht nicht darum, wann genau — nur darum, <em>ob</em> die Erfahrung existiert.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "<strong>Verb + 过</strong> drückt aus, dass die Handlung mindestens einmal in der Vergangenheit stattgefunden hat. Der genaue Zeitpunkt ist dabei irrelevant.",
          examples: [
            { cn: "我去过中国。", pinyin: "Wǒ qù guo Zhōngguó.", de: "Ich war schon mal in China." },
            { cn: "你吃过北京烤鸭吗？", pinyin: "Nǐ chī guo Běijīng kǎoyā ma?", de: "Hast du schon mal Pekingente gegessen?" },
            { cn: "我看过这个电影。", pinyin: "Wǒ kàn guo zhège diànyǐng.", de: "Ich habe diesen Film schon gesehen." }
          ],
          tip: "过 wird im Erfahrungssinne <strong>leicht und tonlos</strong> ausgesprochen (guo, nicht guò). In der Umschrift wird es daher manchmal ohne Tonzeichen geschrieben."
        },
        {
          heading: "Verneinung mit 没(有)...过",
          text: "Die Verneinung lautet <strong>没(有) + Verb + 过</strong>. Anders als bei 了 bleibt 过 in der Verneinung erhalten!",
          examples: [
            { cn: "我没去过日本。", pinyin: "Wǒ méi qù guo Rìběn.", de: "Ich war noch nie in Japan." },
            { cn: "他没吃过臭豆腐。", pinyin: "Tā méi chī guo chòudòufu.", de: "Er hat noch nie Stinketofu gegessen." },
            { cn: "我们没见过面。", pinyin: "Wǒmen méi jiàn guo miàn.", de: "Wir haben uns noch nie getroffen." }
          ],
          tip: "Beachte den Unterschied zur 了-Verneinung: 没去过 (war noch nie) vs. 没去 (ist nicht gegangen). 过 betont die fehlende Erfahrung, 了 den fehlenden Abschluss."
        },
        {
          heading: "过 vs. 了",
          text: "Diesen Unterschied zu verstehen ist entscheidend: <strong>了</strong> = Handlung ist abgeschlossen (konkretes Ereignis). <strong>过</strong> = Erfahrung existiert (unbestimmte Vergangenheit).",
          examples: [
            { cn: "我吃了寿司。", pinyin: "Wǒ chī le shòusī.", de: "Ich habe Sushi gegessen. (konkret, z.B. heute)" },
            { cn: "我吃过寿司。", pinyin: "Wǒ chī guo shòusī.", de: "Ich habe schon mal Sushi gegessen. (Erfahrung)" },
            { cn: "他来了。", pinyin: "Tā lái le.", de: "Er ist gekommen. (gerade eben)" },
            { cn: "他来过。", pinyin: "Tā lái guo.", de: "Er war schon mal hier. (irgendwann)" }
          ]
        },
        {
          heading: "Häufige Kombinationen",
          text: "过 wird oft mit Ausdrücken wie 从来 (noch nie), 以前 (früher), 曾经 (einst) kombiniert, um die Erfahrung zu betonen oder zu verstärken.",
          examples: [
            { cn: "我从来没见过这样的人。", pinyin: "Wǒ cónglái méi jiàn guo zhèyàng de rén.", de: "Ich habe noch nie so einen Menschen gesehen." },
            { cn: "我以前学过汉语。", pinyin: "Wǒ yǐqián xué guo Hànyǔ.", de: "Ich habe früher mal Chinesisch gelernt." },
            { cn: "你曾经去过北京吗？", pinyin: "Nǐ céngjīng qù guo Běijīng ma?", de: "Warst du schon einmal in Peking?" }
          ]
        }
      ]
    },
    // ── Lektion 21: 一边...一边 ─────────────────────────────────────────────
    {
      id: 'lesson-35',
      number: 21,
      title: "一边...一边",
      subtitle: "Zwei Handlungen gleichzeitig",
      level: 'HSK3',
      grammarIds: ["g:一边","g:一边……，一边……","g:又……，又……"],
      intro: "Manchmal machen wir zwei Dinge gleichzeitig — essen und fernsehen, laufen und telefonieren. Im Chinesischen gibt es dafür die elegante Struktur <strong>一边...一边...</strong> (yìbiān...yìbiān...). Sie drückt aus, dass zwei Handlungen <strong>zur selben Zeit</strong> ablaufen. Anders als 又...又..., das vor allem Eigenschaften verbindet, steht 一边...一边... nur mit <strong>Handlungen</strong>.",
      sections: [
        {
          heading: "Grundstruktur: 一边 A 一边 B",
          text: "Die Formel lautet: Subjekt + <strong>一边</strong> + Verb₁ + <strong>一边</strong> + Verb₂. Beide Handlungen passieren gleichzeitig. Die Reihenfolge der beiden Verben ist meist flexibel.",
          examples: [
            { cn: "他一边吃饭一边看电视。", pinyin: "Tā yìbiān chīfàn yìbiān kàn diànshì.", de: "Er isst und schaut dabei fern." },
            { cn: "她一边走路一边打电话。", pinyin: "Tā yìbiān zǒulù yìbiān dǎ diànhuà.", de: "Sie geht und telefoniert dabei." },
            { cn: "我们一边喝茶一边聊天。", pinyin: "Wǒmen yìbiān hē chá yìbiān liáotiān.", de: "Wir trinken Tee und plaudern dabei." },
            { cn: "学生们一边听音乐一边做作业。", pinyin: "Xuéshēngmen yìbiān tīng yīnyuè yìbiān zuò zuòyè.", de: "Die Schülerinnen und Schüler hören Musik und machen dabei Hausaufgaben." }
          ],
          tip: "Im gesprochenen Chinesisch wird 一边 manchmal zu 边 verkürzt: 边吃边看. Das ist informell, aber sehr gebräuchlich."
        },
        {
          heading: "Vergleich mit 又...又...",
          text: "又...又... und 一边...一边... sind meist nicht austauschbar! <strong>又...又...</strong> verbindet vor allem <em>Eigenschaften oder Zustände</em> (mit Verben ein lebhaftes Bild wie 又唱又跳), <strong>一边...一边...</strong> zwei <em>bewusst gleichzeitig ausgeführte Tätigkeiten</em>.",
          examples: [
            { cn: "这个地方又安静又漂亮。", pinyin: "Zhège dìfang yòu ānjìng yòu piàoliang.", de: "Dieser Ort ist sowohl ruhig als auch schön. (Eigenschaften → 又...又)" },
            { cn: "她一边唱歌一边跳舞。", pinyin: "Tā yìbiān chànggē yìbiān tiàowǔ.", de: "Sie singt und tanzt gleichzeitig. (Handlungen → 一边...一边)" },
            { cn: "他又高又帅。", pinyin: "Tā yòu gāo yòu shuài.", de: "Er ist sowohl groß als auch gutaussehend. (Eigenschaften → 又...又)" },
            { cn: "他一边跑步一边听歌。", pinyin: "Tā yìbiān pǎobù yìbiān tīng gē.", de: "Er joggt und hört dabei Lieder. (Handlungen → 一边...一边)" }
          ],
          tip: "Faustregel: Wenn du „gleichzeitig\" sagen könntest, nimm 一边...一边. Wenn du „sowohl ... als auch\" sagen könntest, nimm 又...又."
        },
        {
          heading: "一面...一面 — Die formellere Variante",
          text: "<strong>一面...一面...</strong> (yímiàn...yímiàn...) hat exakt die gleiche Bedeutung wie 一边...一边..., ist aber <strong>formeller und schriftsprachlicher</strong>. In der Alltagssprache bevorzugt man 一边...一边...",
          examples: [
            { cn: "他一面工作一面学习。", pinyin: "Tā yímiàn gōngzuò yímiàn xuéxí.", de: "Er arbeitet und studiert gleichzeitig." },
            { cn: "政府一面发展经济一面保护环境。", pinyin: "Zhèngfǔ yímiàn fāzhǎn jīngjì yímiàn bǎohù huánjìng.", de: "Die Regierung entwickelt die Wirtschaft und schützt zugleich die Umwelt." },
            { cn: "他一面听音乐一面做饭。", pinyin: "Tā yímiàn tīng yīnyuè yímiàn zuòfàn.", de: "Er hört Musik und kocht dabei." }
          ],
          tip: "In HSK-Prüfungen kommt 一面...一面 selten vor, aber es lohnt sich, es passiv zu kennen, wenn du chinesische Texte liest."
        },
        {
          heading: "Einschränkungen und häufige Fehler",
          text: "Damit 一边...一边 funktioniert, müssen einige Bedingungen erfüllt sein: Beide Handlungen haben <strong>dasselbe Subjekt</strong>, und beide Handlungen müssen <strong>tatsächlich gleichzeitig möglich</strong> sein.",
          examples: [
            { cn: "❌ 一边我吃饭一边他看书。", pinyin: "", de: "Falsch! Verschiedene Subjekte." },
            { cn: "✅ 我吃饭的时候，他在看书。", pinyin: "Wǒ chīfàn de shíhou, tā zài kàn shū.", de: "Während ich esse, liest er. (的时候 bei verschiedenen Subjekten)" },
            { cn: "❌ 他一边睡觉一边吃饭。", pinyin: "", de: "Unlogisch! Man kann nicht schlafen und essen gleichzeitig." },
            { cn: "✅ 他一边做饭一边唱歌。", pinyin: "Tā yìbiān zuòfàn yìbiān chànggē.", de: "Er kocht und singt dabei. (Logisch möglich!)" }
          ],
          tip: "Für gleichzeitige Handlungen mit <strong>verschiedenen Subjekten</strong> benutze 的时候: 妈妈做饭<em>的时候</em>，我在写作业 (Während Mama kocht, mache ich Hausaufgaben)."
        }
      ]
    },
    // ── Lektion 22: 先...然后...最后 ─────────────────────────────────────────
    {
      id: 'lesson-36',
      number: 22,
      title: "先...然后...最后",
      subtitle: "Reihenfolge — erst, dann, zuletzt",
      level: 'HSK3',
      grammarIds: ["g:先……，再/然后……","g:再²","g:首先……，其次……","g:首先……，然后……"],
      intro: "Im Alltag beschreiben wir ständig Abläufe: „Erst wasche ich mir die Hände, <em>dann</em> esse ich, <em>zum Schluss</em> räume ich ab.\" Chinesisch hat dafür ein klares System aus Sequenzwörtern. Die Grundstruktur <strong>先...然后...最后</strong> ist das Rückgrat jeder Ablaufbeschreibung. Daneben gibt es formellere Varianten und feine Unterschiede zwischen 然后, 接着 und 之后, die dein Chinesisch präziser machen.",
      sections: [
        {
          heading: "先...然后... — Erst ... dann",
          text: "<strong>先</strong> (xiān) bedeutet „zuerst/erst\" und <strong>然后</strong> (ránhòu) bedeutet „dann/danach\". Zusammen bilden sie die häufigste Struktur, um zwei aufeinanderfolgende Handlungen zu beschreiben.",
          examples: [
            { cn: "先洗手，然后吃饭。", pinyin: "Xiān xǐ shǒu, ránhòu chīfàn.", de: "Erst Hände waschen, dann essen." },
            { cn: "我先做作业，然后看电视。", pinyin: "Wǒ xiān zuò zuòyè, ránhòu kàn diànshì.", de: "Ich mache erst Hausaufgaben, dann schaue ich fern." },
            { cn: "请先坐下，然后我给你倒茶。", pinyin: "Qǐng xiān zuòxia, ránhòu wǒ gěi nǐ dào chá.", de: "Bitte setz dich erst hin, dann schenke ich dir Tee ein." },
            { cn: "先听我说，然后你再决定。", pinyin: "Xiān tīng wǒ shuō, ránhòu nǐ zài juédìng.", de: "Hör mir erst zu, dann entscheide du." }
          ],
          tip: "先 steht immer <strong>direkt vor dem Verb</strong>: 我<em>先</em>吃饭. Nicht am Satzanfang ohne Verb: ❌ 先，我吃饭."
        },
        {
          heading: "先...再 — Erst ... dann (zukünftig)",
          text: "Wenn beide Handlungen noch <strong>in der Zukunft</strong> liegen, kann statt 然后 auch <strong>再</strong> verwendet werden. 先...再 klingt oft etwas knapper und direkter als 先...然后.",
          examples: [
            { cn: "你先吃药，再休息。", pinyin: "Nǐ xiān chī yào, zài xiūxi.", de: "Nimm erst die Medizin, dann ruh dich aus." },
            { cn: "先写完作业再出去玩。", pinyin: "Xiān xiěwán zuòyè zài chūqù wán.", de: "Mach erst die Hausaufgaben fertig, dann geh raus spielen." },
            { cn: "我先回家，再给你打电话。", pinyin: "Wǒ xiān huí jiā, zài gěi nǐ dǎ diànhuà.", de: "Ich gehe erst nach Hause, dann rufe ich dich an." }
          ],
          tip: "先...再 wird bevorzugt bei <strong>Anweisungen und Plänen</strong>. Es klingt etwas bestimmter als 先...然后: „Mach erst dies, <em>dann erst</em> das.\""
        },
        {
          heading: "首先...其次...最后 — Formelle Reihenfolge",
          text: "Für Vorträge, Aufsätze und formelle Aufzählungen gibt es <strong>首先</strong> (shǒuxiān, „erstens\"), <strong>其次</strong> (qícì, „zweitens\") und <strong>最后</strong> (zuìhòu, „zuletzt\"). Diese Wörter strukturieren Argumente und Gedanken.",
          examples: [
            { cn: "首先，我想感谢大家。", pinyin: "Shǒuxiān, wǒ xiǎng gǎnxiè dàjiā.", de: "Zunächst möchte ich allen danken." },
            { cn: "其次，我们要讨论这个问题。", pinyin: "Qícì, wǒmen yào tǎolùn zhège wèntí.", de: "Zweitens müssen wir dieses Problem besprechen." },
            { cn: "最后，我有一个建议。", pinyin: "Zuìhòu, wǒ yǒu yí gè jiànyì.", de: "Zum Schluss habe ich einen Vorschlag." },
            { cn: "先洗菜，然后切菜，最后炒菜。", pinyin: "Xiān xǐ cài, ránhòu qiē cài, zuìhòu chǎo cài.", de: "Erst das Gemüse waschen, dann schneiden, zum Schluss braten." }
          ],
          tip: "首先...其次...最后 ist deutlich formeller als 先...然后...最后. In der Alltagssprache klingt 首先 etwas steif — nimm lieber 先."
        },
        {
          heading: "然后 vs. 接着 vs. 之后",
          text: "Alle drei bedeuten „danach/dann\", aber es gibt feine Unterschiede: <strong>然后</strong> ist am vielseitigsten und häufigsten. <strong>接着</strong> (jiēzhe) betont, dass etwas <em>unmittelbar danach</em> folgt (wie „direkt im Anschluss\"). <strong>之后</strong> (zhīhòu) ist neutraler und formeller, oft austauschbar mit 以后.",
          examples: [
            { cn: "他说了几句话，然后就走了。", pinyin: "Tā shuō le jǐ jù huà, ránhòu jiù zǒu le.", de: "Er sagte ein paar Worte, dann ging er." },
            { cn: "他吃完饭，接着去散步。", pinyin: "Tā chīwán fàn, jiēzhe qù sànbù.", de: "Er aß fertig und ging direkt danach spazieren." },
            { cn: "毕业之后他去了美国。", pinyin: "Bìyè zhīhòu tā qù le Měiguó.", de: "Nach dem Abschluss ging er in die USA." },
            { cn: "我们看完电影，接着去吃了火锅。", pinyin: "Wǒmen kànwán diànyǐng, jiēzhe qù chī le huǒguō.", de: "Wir sahen den Film und gingen direkt danach Hotpot essen." }
          ],
          tip: "Wenn du betonst, dass <strong>keine Pause</strong> zwischen zwei Handlungen war, nimm 接着. Für allgemeines „und dann\" ist 然后 immer sicher."
        }
      ]
    },
    // ── Lektion 23: 从...到 und 离 ─────────────────────────────────────────
    {
      id: 'lesson-33',
      number: 23,
      title: "从...到 und 离",
      subtitle: "Von–bis und Entfernung",
      level: 'HSK2',
      grammarIds: ["g:从¹","g:到 + Ort/Zeit"],
      intro: "Räumliche und zeitliche Beziehungen sind im Alltag unverzichtbar: „Von Berlin <em>bis</em> München\", „von acht <em>bis</em> zehn Uhr\", „die Schule ist <em>nah</em>\". Chinesisch hat dafür zwei elegante Strukturen: <strong>从...到</strong> (cóng...dào) drückt eine Spanne „von A bis B\" aus, und <strong>离</strong> (lí) beschreibt die Entfernung zwischen zwei Punkten. Beide sind im HSK2 essentiell und kommen in fast jedem Gespräch vor.",
      sections: [
        {
          heading: "从A到B — Räumlich (von ... bis)",
          text: "<strong>从</strong> markiert den Ausgangspunkt, <strong>到</strong> das Ziel. Die Struktur funktioniert genauso wie das deutsche „von ... bis/nach\". Sie steht als Ganzes <strong>vor dem Verb</strong>.",
          examples: [
            { cn: "从北京到上海要五个小时。", pinyin: "Cóng Běijīng dào Shànghǎi yào wǔ gè xiǎoshí.", de: "Von Peking nach Shanghai braucht man fünf Stunden." },
            { cn: "从我家到公司很近。", pinyin: "Cóng wǒ jiā dào gōngsī hěn jìn.", de: "Von meiner Wohnung zur Firma ist es nah." },
            { cn: "你从哪儿到哪儿？", pinyin: "Nǐ cóng nǎr dào nǎr?", de: "Von wo bis wo (fährst du)?" },
            { cn: "从机场到酒店坐出租车要半个小时。", pinyin: "Cóng jīchǎng dào jiǔdiàn zuò chūzūchē yào bàn gè xiǎoshí.", de: "Vom Flughafen zum Hotel dauert es mit dem Taxi eine halbe Stunde." }
          ],
          tip: "Die Gruppe 从...到... steht normalerweise <strong>vor</strong> dem Verb: 从北京到上海要五个小时. Nur 到 + Ziel kann auch <em>nach</em> dem Verb stehen: 从北京走到上海, 从八点工作到十点."
        },
        {
          heading: "从A到B — Zeitlich (von ... bis)",
          text: "从...到 funktioniert genauso für <strong>Zeitspannen</strong>. Der Ausgangspunkt ist ein Zeitpunkt, das Ziel ein anderer.",
          examples: [
            { cn: "从八点到十点我有课。", pinyin: "Cóng bā diǎn dào shí diǎn wǒ yǒu kè.", de: "Von acht bis zehn habe ich Unterricht." },
            { cn: "从星期一到星期五我都要上班。", pinyin: "Cóng xīngqīyī dào xīngqīwǔ wǒ dōu yào shàngbān.", de: "Von Montag bis Freitag muss ich arbeiten." },
            { cn: "从早上到晚上他都在学习。", pinyin: "Cóng zǎoshang dào wǎnshang tā dōu zài xuéxí.", de: "Von morgens bis abends lernt er." }
          ],
          tip: "Bei Zeitspannen wird oft <strong>都</strong> eingeschoben, um zu betonen, dass die gesamte Zeitspanne abgedeckt ist: 从一月到三月我<em>都</em>很忙."
        },
        {
          heading: "离 — Entfernung zwischen zwei Punkten",
          text: "<strong>离</strong> drückt die <strong>räumliche oder zeitliche Distanz</strong> zwischen zwei Punkten aus. Die Struktur lautet: A + 离 + B + 近/远/Entfernung. 离 wird nicht mit einem Bewegungsverb kombiniert!",
          examples: [
            { cn: "学校离我家很近。", pinyin: "Xuéxiào lí wǒ jiā hěn jìn.", de: "Die Schule ist nah an meiner Wohnung." },
            { cn: "这里离火车站远吗？", pinyin: "Zhèlǐ lí huǒchēzhàn yuǎn ma?", de: "Ist es von hier weit zum Bahnhof?" },
            { cn: "超市离公司不太远。", pinyin: "Chāoshì lí gōngsī bú tài yuǎn.", de: "Der Supermarkt ist nicht allzu weit von der Firma." },
            { cn: "考试离现在还有一个星期。", pinyin: "Kǎoshì lí xiànzài hái yǒu yí gè xīngqī.", de: "Die Prüfung ist noch eine Woche entfernt." }
          ],
          tip: "Verwechsle nicht 离 und 从! ❌ 学校从我家很近 → ✅ 学校离我家很近. 离 beschreibt <strong>Distanz</strong> (nah/fern), 从 beschreibt <strong>Bewegung</strong> (von A nach B)."
        },
        {
          heading: "从...开始 — Ab / Seit",
          text: "<strong>从...开始</strong> (cóng...kāishǐ) bedeutet „ab\" oder „seit\" und markiert den <strong>Startpunkt</strong> einer Handlung oder eines Zustands. Oft kann 开始 auch weggelassen werden, wenn der Kontext klar ist.",
          examples: [
            { cn: "从明天开始我要每天跑步。", pinyin: "Cóng míngtiān kāishǐ wǒ yào měitiān pǎobù.", de: "Ab morgen will ich jeden Tag joggen." },
            { cn: "从去年开始他就住在这里。", pinyin: "Cóng qùnián kāishǐ tā jiù zhù zài zhèlǐ.", de: "Seit letztem Jahr wohnt er hier." },
            { cn: "我们从第一课开始学。", pinyin: "Wǒmen cóng dì-yī kè kāishǐ xué.", de: "Wir fangen ab der ersten Lektion an zu lernen." },
            { cn: "从现在开始我们说中文。", pinyin: "Cóng xiànzài kāishǐ wǒmen shuō Zhōngwén.", de: "Ab jetzt sprechen wir Chinesisch." }
          ],
          tip: "Im Deutschen sagen wir „seit drei Jahren\" — Chinesisch unterscheidet: <strong>从三年前开始</strong> (ab vor drei Jahren, Startpunkt) vs. Dauer mit Verb + 了 + Zeitangabe."
        }
      ]
    },
    // ── Lektion 24: 是...的 Konstruktion ──────────────────────────────────
    {
      id: 'lesson-3',
      number: 24,
      title: "是...的 Konstruktion",
      subtitle: "Betonung vergangener Umstände",
      level: 'HSK2',
      grammarIds: ["g:“是……的”句1：强调时间、地点、方式、动作者"],
      intro: "Du weißt schon, dass etwas passiert ist — aber <em>wann</em> genau? <em>Wo</em>? <em>Wie</em>? <em>Mit wem</em>? Genau dafür gibt es die 是...的 Konstruktion. Sie ist perfekt, wenn die Handlung selbst nicht neu ist, du aber die <strong>Umstände</strong> betonen willst. Im Deutschen würden wir das durch Betonung ausdrücken: „Ich bin <em>gestern</em> gekommen\" vs. „Ich bin gestern <em>gekommen</em>.\" Im Chinesischen übernimmt 是...的 diese Aufgabe elegant.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Grundformel lautet: <strong>Subjekt + 是 + betonte Information + Verb + 的</strong>. 是 markiert den Anfang dessen, was betont wird, 的 schließt die Konstruktion ab. In bejahten Sätzen kann 是 umgangssprachlich wegfallen (我昨天来的), in verneinten nicht (我不是昨天来的).",
          examples: [
            { cn: "我是昨天来的。", pinyin: "Wǒ shì zuótiān lái de.", de: "Ich bin gestern gekommen. (Betonung: wann)" },
            { cn: "她是坐飞机去的。", pinyin: "Tā shì zuò fēijī qù de.", de: "Sie ist mit dem Flugzeug geflogen. (Betonung: wie)" },
            { cn: "我们是在北京认识的。", pinyin: "Wǒmen shì zài Běijīng rènshi de.", de: "Wir haben uns in Peking kennengelernt. (Betonung: wo)" }
          ],
          tip: "是...的 wird fast ausschließlich für <strong>vergangene Ereignisse</strong> verwendet, deren Eintreten bereits bekannt ist."
        },
        {
          heading: "Position von 的 bei Objekten",
          text: "Wenn das Verb ein Objekt hat, kann 的 <strong>vor oder nach</strong> dem Objekt stehen. Beide Stellungen sind korrekt; im Gespräch hört man sehr oft 的 vor dem Objekt (买的这本书).",
          examples: [
            { cn: "你是在哪儿买的这本书？", pinyin: "Nǐ shì zài nǎr mǎi de zhè běn shū?", de: "Wo hast du dieses Buch gekauft? (的 vor dem Objekt)" },
            { cn: "你是在哪儿买这本书的？", pinyin: "Nǐ shì zài nǎr mǎi zhè běn shū de?", de: "Wo hast du dieses Buch gekauft? (的 am Satzende)" },
            { cn: "我是跟朋友一起来的。", pinyin: "Wǒ shì gēn péngyou yìqǐ lái de.", de: "Ich bin mit Freunden zusammen gekommen." }
          ]
        },
        {
          heading: "Verneinung",
          text: "Die Verneinung erfolgt mit <strong>不是...的</strong>. Man verneint die Umstände, nicht die Handlung selbst.",
          examples: [
            { cn: "我不是坐公交车来的。", pinyin: "Wǒ bú shì zuò gōngjiāochē lái de.", de: "Ich bin nicht mit dem Bus gekommen." },
            { cn: "这不是我写的。", pinyin: "Zhè bú shì wǒ xiě de.", de: "Das habe nicht ich geschrieben." }
          ],
          tip: "Verwechsle 是...的 nicht mit dem einfachen Attribut-的! 我写的书 (das Buch, das ich geschrieben habe) ist ein Attributsatz, keine 是...的-Konstruktion."
        },
        {
          heading: "Wann benutzt man es?",
          text: "Die 是...的 Konstruktion ist ideal für <strong>Rückfragen</strong> und <strong>Klarstellungen</strong>. Typische Fragewörter: 什么时候 (wann), 在哪儿 (wo), 怎么 (wie), 跟谁 (mit wem), 为什么 (warum).",
          examples: [
            { cn: "你是什么时候来北京的？", pinyin: "Nǐ shì shénme shíhou lái Běijīng de?", de: "Wann bist du nach Peking gekommen?" },
            { cn: "你是为什么学中文的？", pinyin: "Nǐ shì wèi shénme xué Zhōngwén de?", de: "Warum lernst du Chinesisch?" }
          ]
        }
      ]
    },
    // ── Lektion 25: 比 (bǐ) Vergleiche ───────────────────────────────────
    {
      id: 'lesson-6',
      number: 25,
      title: "比 (bǐ) Vergleiche",
      subtitle: "Vergleichskonstruktionen",
      level: 'HSK2/HSK3',
      grammarIds: ["g:A比B+形容词","g:A比B+形容词+数量补语/程度补语","g:A有/没有B（+这么/那么）+形容词","g:A跟B一样+形容词","g:比","g:A跟B一样","g:A不比B+形容词"],
      intro: "Vergleiche sind im Alltag unverzichtbar: „Wer ist größer?\", „Welches Essen ist leckerer?\", „Ist Shanghai teurer als Peking?\" Im Chinesischen gibt es dafür hauptsächlich die 比-Konstruktion. Sie funktioniert komplett anders als im Deutschen — kein „-er\" am Adjektiv, kein „als\" nach dem Adjektiv. Stattdessen steht 比 <strong>vor</strong> dem Adjektiv und leitet den Vergleichsstandard ein.",
      sections: [
        {
          heading: "Grundvergleich mit 比",
          text: "Die Grundformel: <strong>A + 比 + B + Adjektiv</strong>. Wichtig: Vor dem Adjektiv steht <strong>kein 很</strong>! 很 würde den Vergleich zerstören.",
          examples: [
            { cn: "他比我高。", pinyin: "Tā bǐ wǒ gāo.", de: "Er ist größer als ich." },
            { cn: "上海比北京大。", pinyin: "Shànghǎi bǐ Běijīng dà.", de: "Shanghai ist größer als Peking." },
            { cn: "今天比昨天冷。", pinyin: "Jīntiān bǐ zuótiān lěng.", de: "Heute ist es kälter als gestern." }
          ],
          tip: "❌ 他比我很高 ist falsch! Bei 比-Vergleichen fällt 很 weg. ✅ 他比我高."
        },
        {
          heading: "Grad des Unterschieds",
          text: "Um auszudrücken, <em>wie viel</em> mehr, fügst du nach dem Adjektiv eine Gradangabe hinzu: 一点儿 (ein bisschen), 多了 (viel), 得多 (viel), oder eine konkrete Zahl.",
          examples: [
            { cn: "她比我大两岁。", pinyin: "Tā bǐ wǒ dà liǎng suì.", de: "Sie ist zwei Jahre älter als ich." },
            { cn: "这个比那个贵一点儿。", pinyin: "Zhège bǐ nàge guì yìdiǎnr.", de: "Dieses ist ein bisschen teurer als jenes." },
            { cn: "坐飞机比坐火车快得多。", pinyin: "Zuò fēijī bǐ zuò huǒchē kuài de duō.", de: "Fliegen ist viel schneller als Zugfahren." }
          ]
        },
        {
          heading: "Verneinung: 没有 statt 不比",
          text: "Die Verneinung „A ist nicht so ... wie B\" wird mit <strong>A + 没有 + B + Adjektiv</strong> gebildet. 不比 existiert auch, bedeutet aber etwas anderes („ist nicht mehr ... als\").",
          examples: [
            { cn: "我没有他高。", pinyin: "Wǒ méiyǒu tā gāo.", de: "Ich bin nicht so groß wie er." },
            { cn: "这里没有那里安静。", pinyin: "Zhèlǐ méiyǒu nàlǐ ānjìng.", de: "Hier ist es nicht so ruhig wie dort." },
            { cn: "弟弟没有哥哥聪明。", pinyin: "Dìdi méiyǒu gēge cōngming.", de: "Der kleine Bruder ist nicht so klug wie der große." }
          ],
          tip: "不比 ≠ 没有! 他不比我高 bedeutet „Er ist nicht unbedingt größer als ich\" (Widerspruch). 他没有我高 bedeutet „Er ist nicht so groß wie ich\" (klarer Vergleich)."
        },
        {
          heading: "Gleichheit: 跟...一样",
          text: "Um Gleichheit auszudrücken („genauso ... wie\"), benutzt man <strong>A + 跟 + B + 一样 + (Adjektiv)</strong>.",
          examples: [
            { cn: "我跟他一样高。", pinyin: "Wǒ gēn tā yíyàng gāo.", de: "Ich bin genauso groß wie er." },
            { cn: "这两个一样贵。", pinyin: "Zhè liǎng gè yíyàng guì.", de: "Diese beiden sind gleich teuer." },
            { cn: "她跟她妈妈一样漂亮。", pinyin: "Tā gēn tā māma yíyàng piàoliang.", de: "Sie ist genauso hübsch wie ihre Mutter." }
          ]
        }
      ]
    },
    // ── Lektion 26: 因为...所以 ─────────────────────────────────────────────
    {
      id: 'lesson-15',
      number: 26,
      title: "因为...所以",
      subtitle: "Kausalkonstruktionen — „Weil... deshalb...\"",
      level: 'HSK2',
      grammarIds: ["g:因为……，所以……","g:不用关联词语的复句","g:为什么","g:连接分句或者句子@HSK2","g:由于¹","g:既然……，就……","g:之所以…是因为…"],
      intro: "Ursache und Wirkung — eines der grundlegendsten logischen Konzepte, und im Chinesischen wunderbar klar ausgedrückt: <strong>因为</strong> (weil) leitet die Ursache ein, <strong>所以</strong> (deshalb) die Wirkung. Wie bei 虽然...但是 ist es eine <strong>Paar-Konjunktion</strong>: Im Chinesischen stehen idealerweise beide Teile im Satz, auch wenn man einen weglassen kann. Diese Struktur ist fundamental und kommt in praktisch jedem chinesischen Text vor.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>因为 + Ursache, 所以 + Wirkung</strong>. Beide Konnektoren können auch einzeln stehen, aber das Paar ist die vollständige Form.",
          examples: [
            { cn: "因为下雨了，所以我没去。", pinyin: "Yīnwèi xià yǔ le, suǒyǐ wǒ méi qù.", de: "Weil es geregnet hat, bin ich nicht gegangen." },
            { cn: "因为他生病了，所以没来上课。", pinyin: "Yīnwèi tā shēngbìng le, suǒyǐ méi lái shàngkè.", de: "Weil er krank war, ist er nicht zum Unterricht gekommen." },
            { cn: "因为太贵了，所以我没买。", pinyin: "Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.", de: "Weil es zu teuer war, habe ich es nicht gekauft." }
          ],
          tip: "Im Chinesischen ist das Paar 因为...所以 ganz normal. Im Deutschen übersetzt man meist nur eines davon: „Weil es geregnet hat, bin ich nicht gegangen\" — nicht „Weil …, deshalb …\"."
        },
        {
          heading: "Einen Teil weglassen",
          text: "Man kann 因为 oder 所以 weglassen — in der Alltagssprache steht oft nur eines der beiden Wörter. Ist der Zusammenhang klar, fallen sogar beide weg: 今天下雨，我不去了 (Heute regnet es, da gehe ich nicht).",
          examples: [
            { cn: "因为太累了，我先回家了。", pinyin: "Yīnwèi tài lèi le, wǒ xiān huí jiā le.", de: "Weil ich zu müde war, bin ich zuerst nach Hause gegangen. (ohne 所以)" },
            { cn: "他身体不好，所以经常请假。", pinyin: "Tā shēntǐ bù hǎo, suǒyǐ jīngcháng qǐngjià.", de: "Seine Gesundheit ist nicht gut, deshalb nimmt er oft frei. (ohne 因为)" }
          ]
        },
        {
          heading: "Fragen nach Gründen",
          text: "Um nach dem Grund zu fragen, benutzt man <strong>为什么</strong> (warum) oder <strong>怎么</strong> (wie kommt es, dass). Die Antwort enthält oft 因为.",
          examples: [
            { cn: "你为什么学中文？", pinyin: "Nǐ wèi shénme xué Zhōngwén?", de: "Warum lernst du Chinesisch?" },
            { cn: "因为我对中国文化很感兴趣。", pinyin: "Yīnwèi wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", de: "Weil ich mich für chinesische Kultur interessiere." },
            { cn: "你怎么没来？——因为我生病了。", pinyin: "Nǐ zěnme méi lái? —— Yīnwèi wǒ shēngbìng le.", de: "Wieso bist du nicht gekommen? — Weil ich krank war." }
          ]
        },
        {
          heading: "Verwandte Strukturen",
          text: "Es gibt weitere Kausalausdrücke: <strong>由于</strong> (aufgrund von, formell), <strong>既然</strong> (da ja, wenn schon), <strong>之所以...是因为</strong> (der Grund ist, dass...).",
          examples: [
            { cn: "由于大雨，飞机没有起飞。", pinyin: "Yóuyú dàyǔ, fēijī méiyǒu qǐfēi.", de: "Wegen des starken Regens ist das Flugzeug nicht gestartet." },
            { cn: "既然你来了，就坐下吧。", pinyin: "Jìrán nǐ lái le, jiù zuòxia ba.", de: "Da du nun mal hier bist, setz dich doch." },
            { cn: "他之所以没来，是因为他病了。", pinyin: "Tā zhī suǒyǐ méi lái, shì yīnwèi tā bìng le.", de: "Der Grund, warum er nicht gekommen ist: Er war krank." }
          ],
          tip: "既然 drückt aus: „Da die Situation nun mal so ist...\" — es akzeptiert eine Tatsache und zieht daraus eine Schlussfolgerung."
        }
      ]
    },
    // ── Lektion 27: 给, 对, 跟, 向 ──────────────────────────────────────────
    {
      id: 'lesson-34',
      number: 27,
      title: "给, 对, 跟, 向",
      subtitle: "Wichtige Präpositionen — für, zu, mit, Richtung",
      level: 'HSK2/HSK3',
      grammarIds: ["g:给","g:跟¹","g:向²","g:对","g:往","g:跟²","g:应该"],
      intro: "Chinesische Präpositionen (介词, jièci) sind aus Verben entstanden und werden deshalb auch <strong>Koverben</strong> genannt: Sie stehen mit ihrem Objekt vor dem Hauptverb und stellen eine Beziehung zwischen Subjekt und Objekt her. Vier der wichtigsten sind 给 (geben/für), 对 (gegenüber/zu), 跟 (mit) und 向 (in Richtung). Sie richtig einzusetzen macht den Unterschied zwischen holprigem und flüssigem Chinesisch.",
      sections: [
        {
          heading: "给 (gěi) — Für / An / Geben",
          text: "给 hat zwei Funktionen: Als <strong>Vollverb</strong> bedeutet es „geben\". Als <strong>Präposition</strong> steht es vor dem Verb und bedeutet „für\" oder „an\". Die Struktur: Subjekt + 给 + Person + Verb + Objekt.",
          examples: [
            { cn: "请给我一杯水。", pinyin: "Qǐng gěi wǒ yì bēi shuǐ.", de: "Bitte gib mir ein Glas Wasser." },
            { cn: "我给你打电话。", pinyin: "Wǒ gěi nǐ dǎ diànhuà.", de: "Ich rufe dich an. (wörtl.: ich für-dich telefonieren)" },
            { cn: "妈妈给孩子做饭。", pinyin: "Māma gěi háizi zuòfàn.", de: "Mama kocht für das Kind." },
            { cn: "他给我介绍了一个朋友。", pinyin: "Tā gěi wǒ jièshào le yí gè péngyou.", de: "Er hat mir einen Freund vorgestellt." }
          ],
          tip: "给 als Präposition steht <strong>vor dem Verb</strong>: 我给你买 (ich kaufe für dich). Als Vollverb steht nichts mehr danach außer dem Objekt: 给你这本书 (dir dieses Buch geben)."
        },
        {
          heading: "对 (duì) — Gegenüber / Zu / Bezüglich",
          text: "对 drückt eine <strong>Haltung oder Beziehung gegenüber</strong> jemandem oder etwas aus. Es steht vor dem Verb: Subjekt + 对 + Objekt + Verb/Adjektiv. Häufig in Kombination mit Adjektiven (好, 不好) oder Verben des Sagens/Denkens.",
          examples: [
            { cn: "他对我很好。", pinyin: "Tā duì wǒ hěn hǎo.", de: "Er ist sehr nett zu mir." },
            { cn: "我对中国文化很感兴趣。", pinyin: "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", de: "Ich interessiere mich sehr für die chinesische Kultur." },
            { cn: "你不应该对她说那样的话。", pinyin: "Nǐ bù yīnggāi duì tā shuō nàyàng de huà.", de: "Du solltest so etwas nicht zu ihr sagen." },
            { cn: "这对身体不好。", pinyin: "Zhè duì shēntǐ bù hǎo.", de: "Das ist nicht gut für die Gesundheit." }
          ],
          tip: "Verwechsle nicht 对 und 给! 给 impliziert <strong>eine Handlung für jemanden</strong>, 对 beschreibt eine <strong>Haltung oder Einstellung gegenüber</strong> jemandem."
        },
        {
          heading: "跟 (gēn) — Mit / Und",
          text: "跟 bedeutet <strong>„mit\"</strong> oder <strong>„und\"</strong> und verbindet ein Subjekt mit einem Begleiter. Als Präposition steht es vor dem Verb: Subjekt + 跟 + Person + Verb. Es kann auch „und\" zwischen zwei Nomen bedeuten.",
          examples: [
            { cn: "我跟你一起去。", pinyin: "Wǒ gēn nǐ yìqǐ qù.", de: "Ich gehe mit dir zusammen." },
            { cn: "她跟朋友聊天。", pinyin: "Tā gēn péngyou liáotiān.", de: "Sie unterhält sich mit Freunden." },
            { cn: "你跟谁学的中文？", pinyin: "Nǐ gēn shéi xué de Zhōngwén?", de: "Bei wem hast du Chinesisch gelernt?" },
            { cn: "这个跟那个不一样。", pinyin: "Zhège gēn nàge bù yíyàng.", de: "Das hier ist anders als das da." }
          ],
          tip: "跟 ist umgangssprachlicher als 和 (hé) und 与 (yǔ). Im Alltag hört man meist 跟, in Texten eher 和 oder 与."
        },
        {
          heading: "向 (xiàng) — In Richtung / An",
          text: "向 gibt eine <strong>Richtung</strong> an — sowohl physisch (Richtung einer Bewegung) als auch abstrakt (sich an jemanden wenden). Es ist formeller als 往 (wǎng), das ähnlich funktioniert.",
          examples: [
            { cn: "向左转。", pinyin: "Xiàng zuǒ zhuǎn.", de: "Links abbiegen." },
            { cn: "他向我道歉了。", pinyin: "Tā xiàng wǒ dàoqiàn le.", de: "Er hat sich bei mir entschuldigt." },
            { cn: "我们向前走。", pinyin: "Wǒmen xiàng qián zǒu.", de: "Wir gehen nach vorne." },
            { cn: "你应该向老师请教。", pinyin: "Nǐ yīnggāi xiàng lǎoshī qǐngjiào.", de: "Du solltest die Lehrkraft um Rat fragen." }
          ],
          tip: "Für Wegbeschreibungen ist 向 unverzichtbar: 向左/右/前/后 (nach links/rechts/vorne/hinten). Im Alltag hört man oft auch 往: 往前走 = 向前走."
        }
      ]
    },
    // ── Lektion 28: 结果补语 — Resultativkomplemente ────────────────────────
    {
      id: 'lesson-7',
      number: 28,
      title: "结果补语 — Resultativkomplemente",
      subtitle: "Was am Ende einer Handlung herauskommt",
      level: 'HSK2/HSK3',
      grammarIds: ["g:动词+错/懂/好/会/完","g:动词+到/住/走/上","g:没（有）","g:动补短语1"],
      intro: "Im Deutschen sagen wir „aufessen\", „kaputtmachen\", „fertigschreiben\" — wir kleben das Ergebnis an das Verb. Im Chinesischen funktioniert das genauso, nur viel systematischer! Ein <strong>Resultativkomplement</strong> (结果补语) ist ein Wort (meist ein einzelnes Zeichen), das direkt nach dem Verb steht und das <strong>Ergebnis</strong> der Handlung angibt. 看 (schauen) + 见 (wahrnehmen) = 看见 (sehen, erblicken). 听 (hören) + 懂 (verstehen) = 听懂 (verstehend hören). Diese Kombinationen sind enorm produktiv und machen dein Chinesisch sofort ausdrucksstärker.",
      sections: [
        {
          heading: "Häufige Resultativkomplemente",
          text: "Hier sind die wichtigsten Resultativendungen, die du kennen solltest: <strong>完</strong> (fertig), <strong>好</strong> (gut/fertig), <strong>到</strong> (erreichen), <strong>见</strong> (wahrnehmen), <strong>懂</strong> (verstehen), <strong>会</strong> (können/beherrschen), <strong>错</strong> (falsch), <strong>对</strong> (richtig).",
          examples: [
            { cn: "我吃完了。", pinyin: "Wǒ chīwán le.", de: "Ich habe aufgegessen." },
            { cn: "你听懂了吗？", pinyin: "Nǐ tīngdǒng le ma?", de: "Hast du es (hörend) verstanden?" },
            { cn: "我找到了我的钥匙。", pinyin: "Wǒ zhǎodào le wǒ de yàoshi.", de: "Ich habe meinen Schlüssel gefunden." }
          ],
          tip: "Resultativkomplemente sind so eng mit dem Verb verschmolzen, dass sie als <strong>ein Wort</strong> behandelt werden. 了 kommt danach, nicht dazwischen!"
        },
        {
          heading: "Adjektive als Resultativkomplemente",
          text: "Adjektive können ebenfalls als Resultativkomplemente fungieren und beschreiben den <strong>Zustand</strong>, in den etwas durch die Handlung gebracht wird.",
          examples: [
            { cn: "他把衣服洗干净了。", pinyin: "Tā bǎ yīfu xǐ gānjìng le.", de: "Er hat die Kleidung sauber gewaschen." },
            { cn: "请把声音开大一点。", pinyin: "Qǐng bǎ shēngyīn kāi dà yìdiǎn.", de: "Bitte mach (den Ton) etwas lauter." },
            { cn: "孩子哭累了。", pinyin: "Háizi kūlèi le.", de: "Das Kind hat sich müde geweint." }
          ]
        },
        {
          heading: "Verneinung mit 没",
          text: "Da Resultativkomplemente ein <strong>Ergebnis</strong> beschreiben, wird die Verneinung mit <strong>没(有)</strong> gebildet — das Ergebnis ist nicht eingetreten.",
          examples: [
            { cn: "我没听懂。", pinyin: "Wǒ méi tīngdǒng.", de: "Ich habe es nicht verstanden (beim Hören)." },
            { cn: "她没看见你。", pinyin: "Tā méi kànjiàn nǐ.", de: "Sie hat dich nicht gesehen." },
            { cn: "我们没做完。", pinyin: "Wǒmen méi zuòwán.", de: "Wir haben es nicht fertig gemacht." }
          ],
          tip: "Das Potentialkomplement ([[lesson:lesson-41]]) nutzt 得/不 zwischen Verb und Komplement, um auszudrücken, ob man etwas schaffen <em>kann</em> oder nicht: 看得见 (kann sehen) vs. 看不见 (kann nicht sehen)."
        },
        {
          heading: "Verb + 到 als Resultativkomplement",
          text: "到 als Komplement bedeutet „bis zu einem Punkt gelangen\" — physisch oder abstrakt. Es drückt aus, dass die Handlung ihr Ziel <strong>erreicht</strong> hat.",
          examples: [
            { cn: "我买到了那本书。", pinyin: "Wǒ mǎidào le nà běn shū.", de: "Ich habe es geschafft, das Buch zu kaufen." },
            { cn: "你收到我的信了吗？", pinyin: "Nǐ shōudào wǒ de xìn le ma?", de: "Hast du meinen Brief erhalten?" },
            { cn: "我想到了一个好主意。", pinyin: "Wǒ xiǎngdào le yí gè hǎo zhǔyi.", de: "Mir ist eine gute Idee eingefallen." }
          ]
        }
      ]
    },
    // ── Lektion 29: 程度补语 — Gradkomplemente mit 得 ────────────────────────
    {
      id: 'lesson-8',
      number: 29,
      title: "状态补语 — Zustandskomplemente mit 得",
      subtitle: "Wie gut, wie schlecht, wie intensiv?",
      level: 'HSK2/HSK3',
      grammarIds: ["g:动词+得+形容词性短语","g:主语+动词+宾语+动词+补语","g:得","g:动词/形容词+得+动词短语","g:动词/形容词+得+主谓短语"],
      intro: "Du möchtest sagen, dass jemand „gut singt\", „schnell rennt\" oder „so müde ist, dass er nicht mehr stehen kann\"? Dafür brauchst du <strong>Zustandskomplemente</strong> (状态补语). Sie beschreiben, <strong>wie</strong> eine Handlung ausgeführt wird oder in welchen <strong>Zustand</strong> sie führt — und sie werden mit der Partikel <strong>得</strong> eingeleitet. Das ist dasselbe 得, das du aus [[lesson:lesson-2]] kennst, aber hier in seiner wichtigsten Funktion. Davon zu unterscheiden sind die echten <strong>Gradkomplemente</strong> (程度补语) wie 好极了 oder 忙得很, die nur einen hohen Grad ausdrücken.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>Verb + 得 + Beschreibung</strong>. Die Beschreibung kann ein einfaches Adjektiv sein oder ein ganzer Satz.",
          examples: [
            { cn: "她唱得很好听。", pinyin: "Tā chàng de hěn hǎotīng.", de: "Sie singt sehr schön." },
            { cn: "他吃得很多。", pinyin: "Tā chī de hěn duō.", de: "Er isst sehr viel." },
            { cn: "你来得太晚了。", pinyin: "Nǐ lái de tài wǎn le.", de: "Du bist zu spät gekommen." }
          ],
          tip: "Wenn das Verb ein Objekt hat, muss das Verb <strong>wiederholt</strong> werden: 她说中文说得很好 oder alternativ das Objekt nach vorne: 中文她说得很好."
        },
        {
          heading: "Verb + Objekt + Verb + 得",
          text: "Bei Verben mit Objekt gibt es zwei Möglichkeiten, das Zustandskomplement einzubauen. Beide sind korrekt.",
          examples: [
            { cn: "他说中文说得很流利。", pinyin: "Tā shuō Zhōngwén shuō de hěn liúlì.", de: "Er spricht Chinesisch sehr fließend. (Verb wiederholt)" },
            { cn: "中文他说得很流利。", pinyin: "Zhōngwén tā shuō de hěn liúlì.", de: "Chinesisch spricht er sehr fließend. (Objekt vorgezogen)" },
            { cn: "她写汉字写得很漂亮。", pinyin: "Tā xiě Hànzì xiě de hěn piàoliang.", de: "Sie schreibt chinesische Schriftzeichen sehr schön." }
          ]
        },
        {
          heading: "Komplexe Beschreibungen",
          text: "Ausblick (HSK 5): Nach 得 kann auch eine Verbgruppe oder ein ganzer <strong>Satz</strong> stehen, der die Folge oder Intensität beschreibt. Das entspricht dem deutschen „so ... dass ...\".",
          examples: [
            { cn: "他累得不想说话。", pinyin: "Tā lèi de bù xiǎng shuōhuà.", de: "Er ist so müde, dass er nicht reden will." },
            { cn: "她高兴得跳了起来。", pinyin: "Tā gāoxìng de tiào le qǐlái.", de: "Sie war so glücklich, dass sie hochgesprungen ist." },
            { cn: "冷得我发抖。", pinyin: "Lěng de wǒ fādǒu.", de: "So kalt, dass ich zittere." }
          ],
          tip: "Zustandskomplemente beschreiben eine <strong>konkrete Ausführung</strong>, daher können sie nicht mit 了₁ kombiniert werden (das markiert Abschluss). ❌ 她唱了得很好 → ✅ 她唱得很好."
        },
        {
          heading: "Fragen mit Zustandskomplementen",
          text: "Um nach der Art und Weise zu fragen, benutzt man <strong>Verb + 得 + 怎么样</strong> oder setzt das Adjektiv in eine Frage.",
          examples: [
            { cn: "你考得怎么样？", pinyin: "Nǐ kǎo de zěnmeyàng?", de: "Wie war deine Prüfung?" },
            { cn: "她中文说得好不好？", pinyin: "Tā Zhōngwén shuō de hǎo bu hǎo?", de: "Spricht sie gut Chinesisch?" },
            { cn: "昨天你睡得好吗？", pinyin: "Zuótiān nǐ shuì de hǎo ma?", de: "Hast du gestern gut geschlafen?" }
          ]
        }
      ]
    },
    // ── Lektion 30: 着 (zhe) ─────────────────────────────────────────────
    {
      id: 'lesson-10',
      number: 30,
      title: "着 (zhe)",
      subtitle: "Zustandsaspekt — andauernde Zustände",
      level: 'HSK2/HSK3',
      grammarIds: ["g:着","g:处所+动词+着(+数量短语)+名词","g:动词+着：（1）表示状态的持续","g:“着”表示动作的伴随：动词1+着+动词2","g:持续态：表示动作的持续"],
      intro: "Während 了 den Abschluss markiert und 过 die Erfahrung, beschreibt <strong>着</strong> einen <strong>andauernden Zustand</strong>. Es friert eine Handlung sozusagen ein und zeigt das Ergebnis als Dauerzustand. „Die Tür ist geöffnet\" (开着), „Er trägt einen Hut\" (戴着帽子), „An der Wand hängt ein Bild\" (墙上挂着一幅画). 着 ist besonders wichtig für Beschreibungen von Szenen und Begleitumständen.",
      sections: [
        {
          heading: "Zustand nach einer Handlung",
          text: "<strong>Verb + 着</strong> beschreibt den Zustand, der sich aus einer Handlung ergibt und <strong>andauert</strong>. Der Fokus liegt nicht auf der Handlung selbst, sondern auf dem resultierenden Zustand.",
          examples: [
            { cn: "门开着。", pinyin: "Mén kāi zhe.", de: "Die Tür steht offen." },
            { cn: "他穿着一件红色的衣服。", pinyin: "Tā chuān zhe yí jiàn hóngsè de yīfu.", de: "Er trägt ein rotes Kleidungsstück." },
            { cn: "桌子上放着一杯水。", pinyin: "Zhuōzi shang fàng zhe yì bēi shuǐ.", de: "Auf dem Tisch steht ein Glas Wasser." }
          ],
          tip: "Vergleiche: 他穿了一件衣服 (Er hat sich ein Kleidungsstück angezogen — Handlung abgeschlossen) vs. 他穿着一件衣服 (Er trägt ein Kleidungsstück — Zustand)."
        },
        {
          heading: "Begleitumstände: V₁着 + V₂",
          text: "着 kann auch eine <strong>begleitende Handlung</strong> beschreiben: Während man Handlung 1 ausführt (V₁着), macht man gleichzeitig Handlung 2 (V₂). V₁着 ist dabei der Hintergrund.",
          examples: [
            { cn: "他站着吃饭。", pinyin: "Tā zhàn zhe chīfàn.", de: "Er isst im Stehen." },
            { cn: "她笑着说。", pinyin: "Tā xiào zhe shuō.", de: "Sie sagte lächelnd." },
            { cn: "孩子们唱着歌走回家。", pinyin: "Háizimen chàng zhe gē zǒu huí jiā.", de: "Die Kinder gingen singend nach Hause." }
          ]
        },
        {
          heading: "Existenz-Sätze mit 着",
          text: "Eine besonders wichtige Verwendung ist die <strong>Existenzbeschreibung</strong>: Ort + Verb + 着 + Gegenstand. So beschreibt man Szenen und Räume.",
          examples: [
            { cn: "墙上挂着一幅画。", pinyin: "Qiáng shang guà zhe yì fú huà.", de: "An der Wand hängt ein Bild." },
            { cn: "地上躺着一只猫。", pinyin: "Dì shang tǎng zhe yì zhī māo.", de: "Auf dem Boden liegt eine Katze." },
            { cn: "教室里坐着很多学生。", pinyin: "Jiàoshì lǐ zuò zhe hěn duō xuéshēng.", de: "Im Klassenzimmer sitzen viele Schülerinnen und Schüler." }
          ],
          tip: "Diese Existenzsätze mit 着 sind perfekt für <strong>bildhafte Beschreibungen</strong>. Sie sind in Erzählungen und Aufsätzen sehr beliebt."
        },
        {
          heading: "Verneinung und Imperativ",
          text: "Die Verneinung mit 着 verwendet <strong>没(有)</strong>. Im Imperativ wird 着 manchmal benutzt, um zu sagen „Halt das so!\" oder als Warnung.",
          examples: [
            { cn: "灯没开着。", pinyin: "Dēng méi kāi zhe.", de: "Das Licht ist nicht an." },
            { cn: "你等着！", pinyin: "Nǐ děng zhe!", de: "Warte! / Du wirst schon sehen!" },
            { cn: "小心着点儿！", pinyin: "Xiǎoxīn zhe diǎnr!", de: "Sei vorsichtig!" }
          ]
        }
      ]
    },
    // ── Lektion 31: 快要...了, 要...了 ───────────────────────────────────────
    {
      id: 'lesson-37',
      number: 31,
      title: "快要...了, 要...了",
      subtitle: "Gleich passiert es! — Unmittelbar bevorstehende Ereignisse",
      level: 'HSK2',
      grammarIds: ["g:要/快要/就要……了","g:时间副词@HSK2","g:时间副词@HSK4","g:将"],
      intro: "Wie sagt man „es ist gleich so weit\" auf Chinesisch? Dafür gibt es eine elegante Familie von Strukturen: <strong>要...了</strong>, <strong>快要...了</strong> und <strong>就要...了</strong>. Sie alle drücken aus, dass etwas <strong>bald oder unmittelbar bevorsteht</strong>. Die Unterschiede sind subtil aber wichtig: Wie dringend ist es? Gibt es einen konkreten Zeitpunkt? Diese Lektion zeigt dir, wie du das „gleich\" im Chinesischen meisterst.",
      sections: [
        {
          heading: "要...了 — Es wird gleich passieren",
          text: "<strong>要...了</strong> (yào...le) ist die Grundform und drückt aus, dass etwas <strong>bald eintritt</strong>. Das 了 am Satzende signalisiert die bevorstehende Veränderung. Diese Struktur ist die häufigste und vielseitigste.",
          examples: [
            { cn: "要下雨了。", pinyin: "Yào xià yǔ le.", de: "Es wird gleich regnen." },
            { cn: "飞机要起飞了。", pinyin: "Fēijī yào qǐfēi le.", de: "Das Flugzeug hebt gleich ab." },
            { cn: "我要迟到了！", pinyin: "Wǒ yào chídào le!", de: "Ich komme gleich zu spät!" },
            { cn: "电影要开始了。", pinyin: "Diànyǐng yào kāishǐ le.", de: "Der Film fängt gleich an." }
          ],
          tip: "Verwechsle 要...了 (gleich passieren) nicht mit 要 als „wollen/möchten\"! 我要吃饭 (Ich will essen) vs. 我要吃饭了 (Ich esse gleich / Es ist Zeit zum Essen)."
        },
        {
          heading: "快要...了 — Sehr bald!",
          text: "<strong>快要...了</strong> (kuài yào...le) verstärkt die Dringlichkeit: Etwas steht <strong>unmittelbar bevor</strong>. 快 (kuài, „schnell/bald\") intensiviert die Erwartung. Vor 快要 steht <strong>keine konkrete Zeitangabe</strong>.",
          examples: [
            { cn: "快要放假了。", pinyin: "Kuài yào fàngjià le.", de: "Bald sind Ferien." },
            { cn: "快要过年了！", pinyin: "Kuài yào guònián le!", de: "Das Neujahrsfest steht vor der Tür!" },
            { cn: "他们快要结婚了。", pinyin: "Tāmen kuài yào jiéhūn le.", de: "Sie werden bald heiraten." },
            { cn: "车快要到了。", pinyin: "Chē kuài yào dào le.", de: "Der Bus kommt gleich." }
          ],
          tip: "Bei 快要...了 kann das 要 auch weggelassen werden: 快毕业了 = 快要毕业了. Beides ist korrekt und gebräuchlich."
        },
        {
          heading: "就要...了 — Mit konkretem Zeitpunkt",
          text: "<strong>就要...了</strong> (jiù yào...le) wird oft mit einer <strong>konkreten Zeitangabe</strong> kombiniert. Es betont, dass ab einem bestimmten Zeitpunkt etwas eintreten wird. Das unterscheidet es von 快要...了, das keine Zeitangabe verträgt.",
          examples: [
            { cn: "我下个月就要走了。", pinyin: "Wǒ xià gè yuè jiù yào zǒu le.", de: "Nächsten Monat gehe ich schon." },
            { cn: "他明天就要回国了。", pinyin: "Tā míngtiān jiù yào huí guó le.", de: "Er fährt morgen schon zurück in die Heimat." },
            { cn: "三点就要开会了，快走吧！", pinyin: "Sān diǎn jiù yào kāihuì le, kuài zǒu ba!", de: "Um drei beginnt schon die Besprechung, beeil dich!" },
            { cn: "下个星期就要考试了。", pinyin: "Xià gè xīngqī jiù yào kǎoshì le.", de: "Nächste Woche ist schon die Prüfung." }
          ],
          tip: "Merke: <strong>快要</strong> + KEINE Zeitangabe, <strong>就要</strong> + KANN Zeitangabe haben. ❌ 快要明天毕业了 → ✅ 明天就要毕业了."
        },
        {
          heading: "Vergleich mit 将 — Formelles „werden\"",
          text: "<strong>将</strong> (jiāng) oder <strong>将要</strong> (jiāngyào) ist die <strong>formelle, schriftsprachliche</strong> Variante für „wird bald\". Es wird in Nachrichten, offiziellen Texten und formellen Reden verwendet und klingt in der Alltagssprache unnatürlich.",
          examples: [
            { cn: "比赛将在明天开始。", pinyin: "Bǐsài jiāng zài míngtiān kāishǐ.", de: "Der Wettkampf beginnt morgen. (Formell)" },
            { cn: "这家商店将在下个月开门。", pinyin: "Zhè jiā shāngdiàn jiāng zài xià gè yuè kāimén.", de: "Dieses Geschäft eröffnet nächsten Monat. (Nachrichtenstil)" },
            { cn: "下个月学校将要放假。", pinyin: "Xià gè yuè xuéxiào jiāngyào fàngjià.", de: "Nächsten Monat beginnen die Schulferien. (Formell)" }
          ],
          tip: "In der Alltagssprache klingt 将 gestelzt. Benutze im Gespräch immer 快要...了, 就要...了 oder 要...了. 将 ist nur für <strong>Lesen und Schreiben formeller Texte</strong> relevant."
        }
      ]
    },
    // ── Lektion 32: 把 (bǎ) Konstruktion ─────────────────────────────────
    {
      id: 'lesson-4',
      number: 32,
      title: "把 (bǎ) Konstruktion",
      subtitle: "Objekt vor das Verb stellen",
      level: 'HSK3',
      grammarIds: ["g:把","g:主语+把+宾语+动词+在/到+处所","g:主语+把+宾语+动词+结果补语/趋向补语/状态补语","g:主语+把+宾语1+动词（+给）+宾语2","g:主语+把+宾语+动词+了"],
      intro: "Die 把-Konstruktion ist einer der Momente, wo Chinesisch wirklich anders tickt als Deutsch. Normalerweise steht im Chinesischen das Objekt nach dem Verb (我吃苹果). Aber manchmal willst du betonen, dass du mit dem Objekt <strong>etwas Bestimmtes anstellst</strong> — du veränderst es, bewegst es, verarbeitest es. Dann ziehst du das Objekt mit 把 vor das Verb: 我把苹果吃了. Die 把-Konstruktion drückt aus, dass das Subjekt <strong>aktiv auf das Objekt einwirkt</strong> und es dabei verändert.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>Subjekt + 把 + Objekt + Verb + Komplement/了/andere Ergänzung</strong>. Wichtig: Das Verb darf nicht „nackt\" stehen — es braucht immer etwas Zusätzliches (了, ein Komplement, eine Richtungsangabe, etc.).",
          examples: [
            { cn: "请把门关上。", pinyin: "Qǐng bǎ mén guānshang.", de: "Bitte mach die Tür zu." },
            { cn: "我把作业做完了。", pinyin: "Wǒ bǎ zuòyè zuòwán le.", de: "Ich habe die Hausaufgaben fertig gemacht." },
            { cn: "她把房间打扫干净了。", pinyin: "Tā bǎ fángjiān dǎsǎo gānjìng le.", de: "Sie hat das Zimmer sauber geputzt." }
          ],
          tip: "❌ 我把书看 ist falsch! Das Verb braucht eine Ergänzung. ✅ 我把书看完了 (Ich habe das Buch zu Ende gelesen)."
        },
        {
          heading: "Wann muss man 把 benutzen?",
          text: "Die 把-Konstruktion ist <strong>nicht optional</strong>, wenn du ausdrücken willst, dass etwas irgendwohin bewegt oder in einen bestimmten Zustand gebracht wird. Besonders bei Richtungskomplementen und Resultativkomplementen ist 把 oft die natürlichste Wahl.",
          examples: [
            { cn: "把书放在桌子上。", pinyin: "Bǎ shū fàng zài zhuōzi shang.", de: "Leg das Buch auf den Tisch." },
            { cn: "他把杯子摔碎了。", pinyin: "Tā bǎ bēizi shuāisuì le.", de: "Er hat die Tasse kaputtgeschlagen." },
            { cn: "我把钱花光了。", pinyin: "Wǒ bǎ qián huāguāng le.", de: "Ich habe das ganze Geld ausgegeben." }
          ]
        },
        {
          heading: "Verneinung und Adverbien",
          text: "Verneinung (不, 没), Modalverben (要, 能) und Zeitadverbien wie 已经 stehen <strong>vor 把</strong>, nicht nach 把. Beschreibende Adverbiale und 都 mit Bezug auf das Objekt stehen dagegen nach dem Objekt: 他把门轻轻地关上了, 我把作业都做完了.",
          examples: [
            { cn: "我没把窗户关上。", pinyin: "Wǒ méi bǎ chuānghu guānshang.", de: "Ich habe das Fenster nicht zugemacht." },
            { cn: "你别把这件事告诉他。", pinyin: "Nǐ bié bǎ zhè jiàn shì gàosu tā.", de: "Erzähl ihm nicht davon." },
            { cn: "我已经把票买好了。", pinyin: "Wǒ yǐjīng bǎ piào mǎihǎo le.", de: "Ich habe die Tickets schon gekauft." }
          ],
          tip: "Faustregel: Wenn die Handlung das Objekt <strong>verändert, bewegt oder beseitigt</strong>, ist 把 dein Freund."
        },
        {
          heading: "Einschränkungen",
          text: "Nicht jedes Verb funktioniert mit 把! Zustandsverben (是, 像, 喜欢, 知道) und Verben ohne „Einwirkung\" können nicht mit 把 kombiniert werden. Das Objekt muss außerdem <strong>bestimmt</strong> sein (also bekannt oder spezifisch).",
          examples: [
            { cn: "❌ 我把一本书看了。", pinyin: "", de: "(Falsch — „ein Buch\" ist zu unbestimmt)" },
            { cn: "✅ 我把那本书看了。", pinyin: "Wǒ bǎ nà běn shū kàn le.", de: "Ich habe das Buch (dort) gelesen." },
            { cn: "✅ 我把你的手机拿来了。", pinyin: "Wǒ bǎ nǐ de shǒujī nálái le.", de: "Ich habe dein Handy hergebracht." }
          ]
        }
      ]
    },
    // ── Lektion 33: 虽然...但是 ─────────────────────────────────────────────
    {
      id: 'lesson-14',
      number: 33,
      title: "虽然...但是",
      subtitle: "Konzessivkonstruktionen — „Obwohl... trotzdem...\"",
      level: 'HSK2/HSK3',
      grammarIds: ["g:虽然……，但是……","g:虽然……，可是……","g:连接分句或者句子@HSK2","g:却","g:……，不过……"],
      intro: "Im Deutschen sagen wir „Obwohl es regnet, gehe ich spazieren\" — ein typischer Konzessivsatz. Im Chinesischen funktioniert das mit <strong>虽然...但是/可是/不过</strong>. Der spannende Unterschied: Im Chinesischen stehen meist <em>beide</em> Konnektoren im Satz! Im Deutschen reicht „obwohl\" allein, im Chinesischen ist das Paar „Obwohl..., aber...\" ganz normal. 虽然 kann auch wegfallen, 但是 eher nicht. Das ist ein typisches Muster für chinesische <strong>Paar-Konjunktionen</strong> (关联词).",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>虽然 + Einräumung, 但是/可是/不过 + Hauptaussage</strong>. Beide Teile können dasselbe Subjekt oder verschiedene Subjekte haben.",
          examples: [
            { cn: "虽然很累，但是我很开心。", pinyin: "Suīrán hěn lèi, dànshì wǒ hěn kāixīn.", de: "Obwohl ich müde bin, bin ich glücklich." },
            { cn: "虽然他很聪明，可是不努力。", pinyin: "Suīrán tā hěn cōngming, kěshì bù nǔlì.", de: "Obwohl er klug ist, strengt er sich nicht an." },
            { cn: "虽然下雨了，不过我们还是去了。", pinyin: "Suīrán xià yǔ le, búguò wǒmen háishi qù le.", de: "Obwohl es geregnet hat, sind wir trotzdem gegangen." }
          ],
          tip: "但是, 可是, 不过 sind austauschbar. 但是 ist am formellsten, 不过 am umgangssprachlichsten."
        },
        {
          heading: "Position von 虽然",
          text: "虽然 kann <strong>vor oder nach dem Subjekt</strong> stehen. Wenn beide Teilsätze dasselbe Subjekt haben, steht 虽然 meistens nach dem Subjekt.",
          examples: [
            { cn: "他虽然年轻，但是很有经验。", pinyin: "Tā suīrán niánqīng, dànshì hěn yǒu jīngyàn.", de: "Er ist zwar jung, hat aber viel Erfahrung. (虽然 nach Subjekt)" },
            { cn: "虽然价格很贵，但是质量很好。", pinyin: "Suīrán jiàgé hěn guì, dànshì zhìliàng hěn hǎo.", de: "Obwohl der Preis hoch ist, ist die Qualität gut. (虽然 am Satzanfang)" }
          ]
        },
        {
          heading: "Verstärkung mit 还是, 仍然, 却",
          text: "Im zweiten Teilsatz kann man die Gegenüberstellung mit <strong>还是</strong> (trotzdem), <strong>仍然</strong> (immer noch) oder <strong>却</strong> (jedoch) verstärken.",
          examples: [
            { cn: "虽然很难，我还是想试试。", pinyin: "Suīrán hěn nán, wǒ háishi xiǎng shìshi.", de: "Obwohl es schwer ist, möchte ich es trotzdem versuchen." },
            { cn: "虽然他道歉了，她却不原谅他。", pinyin: "Suīrán tā dàoqiàn le, tā què bù yuánliàng tā.", de: "Obwohl er sich entschuldigt hat, verzeiht sie ihm nicht." },
            { cn: "虽然过了很多年，他仍然记得。", pinyin: "Suīrán guò le hěn duō nián, tā réngrán jìde.", de: "Obwohl viele Jahre vergangen sind, erinnert er sich immer noch." }
          ],
          tip: "却 steht direkt vor dem Verb und klingt literarischer. In der Alltagssprache ist 还是 natürlicher."
        },
        {
          heading: "但是 allein vs. 虽然...但是",
          text: "但是 allein verbindet zwei Aussagen mit einem einfachen „aber\". Erst 虽然 im ersten Teilsatz macht daraus einen Konzessivsatz („obwohl …\"). Vergleiche:",
          examples: [
            { cn: "我想去，但是没有时间。", pinyin: "Wǒ xiǎng qù, dànshì méiyǒu shíjiān.", de: "Ich möchte gehen, aber ich habe keine Zeit. (Einfaches „aber\")" },
            { cn: "虽然我想去，但是没有时间。", pinyin: "Suīrán wǒ xiǎng qù, dànshì méiyǒu shíjiān.", de: "Obwohl ich gehen möchte, habe ich keine Zeit. (Konzessiv)" }
          ]
        }
      ]
    },
    // ── Lektion 34: 除了...以外 ─────────────────────────────────────────────
    {
      id: 'lesson-38',
      number: 34,
      title: "除了...以外",
      subtitle: "Ausnahme und Ergänzung — außer & neben",
      level: 'HSK3',
      grammarIds: ["g:除了……（以外），……还/也/都……","g:除"],
      intro: "除了...以外 ist eine der vielseitigsten Strukturen im Chinesischen — und eine der tückischsten. Denn je nachdem, ob danach <strong>都</strong> oder <strong>还/也</strong> folgt, ändert sich die Bedeutung komplett: Entweder wird etwas <em>ausgeschlossen</em> („außer A, alle anderen...\") oder etwas <em>hinzugefügt</em> („neben A, auch noch B...\"). Im Deutschen entspricht das dem Unterschied zwischen „außer\" und „neben/zusätzlich zu\". Wer diesen Unterschied beherrscht, kann präzise Aussagen über Ausnahmen und Ergänzungen treffen.",
      sections: [
        {
          heading: "除了A以外，都... — Ausschluss",
          text: "Wenn nach 除了...以外 das Wort <strong>都</strong> kommt, wird A <em>ausgeschlossen</em>. Die Bedeutung ist: „Außer A gilt für alle anderen...\" Das entspricht dem deutschen „außer\". 以外 kann in der gesprochenen Sprache auch weggelassen werden.",
          examples: [
            { cn: "除了他以外，我们都去了。", pinyin: "Chúle tā yǐwài, wǒmen dōu qù le.", de: "Außer ihm sind wir alle gegangen." },
            { cn: "除了星期天，我每天都上班。", pinyin: "Chúle xīngqītiān, wǒ měi tiān dōu shàngbān.", de: "Außer sonntags arbeite ich jeden Tag." },
            { cn: "除了咖啡以外，什么饮料我都喜欢。", pinyin: "Chúle kāfēi yǐwài, shénme yǐnliào wǒ dōu xǐhuan.", de: "Außer Kaffee mag ich alle Getränke." },
            { cn: "除了数学，其他科目他都很好。", pinyin: "Chúle shùxué, qítā kēmù tā dōu hěn hǎo.", de: "Außer Mathe ist er in allen Fächern gut." }
          ],
          tip: "Merke: 除了 + 都 = <strong>Ausschluss</strong>. Alles trifft zu, <em>außer</em> dem Genannten. Im Deutschen: „außer\", „mit Ausnahme von\"."
        },
        {
          heading: "除了A以外，还/也... — Einschluss",
          text: "Wenn nach 除了...以外 das Wort <strong>还</strong> oder <strong>也</strong> kommt, wird A <em>eingeschlossen</em> und etwas Weiteres hinzugefügt. Die Bedeutung ist: „Neben A gibt es auch noch...\" Das entspricht dem deutschen „neben\" oder „zusätzlich zu\".",
          examples: [
            { cn: "除了英语以外，她还会说法语。", pinyin: "Chúle Yīngyǔ yǐwài, tā hái huì shuō Fǎyǔ.", de: "Neben Englisch spricht sie auch noch Französisch." },
            { cn: "除了唱歌，他还喜欢跳舞。", pinyin: "Chúle chànggē, tā hái xǐhuan tiàowǔ.", de: "Neben Singen mag er auch noch Tanzen." },
            { cn: "除了苹果以外，我也买了香蕉。", pinyin: "Chúle píngguǒ yǐwài, wǒ yě mǎi le xiāngjiāo.", de: "Neben Äpfeln habe ich auch Bananen gekauft." },
            { cn: "除了中文，他还在学日语和韩语。", pinyin: "Chúle Zhōngwén, tā hái zài xué Rìyǔ hé Hányǔ.", de: "Neben Chinesisch lernt er auch noch Japanisch und Koreanisch." }
          ],
          tip: "Merke: 除了 + 还/也 = <strong>Einschluss</strong>. Das Genannte bleibt drin, und es kommt noch etwas <em>dazu</em>. Im Deutschen: „neben\", „zusätzlich zu\", „außerdem\"."
        },
        {
          heading: "Die Eselsbrücke: 都 vs. 还/也",
          text: "Der <strong>Schlüssel</strong> liegt im zweiten Teil des Satzes: <strong>都</strong> schließt aus, <strong>还/也</strong> schließt ein. Stell dir 都 als „alle (außer)\" vor und 还 als „darüber hinaus\". Das Wort 以外 ist in der Umgangssprache oft optional, aber in Prüfungen und formellen Texten solltest du es verwenden.",
          examples: [
            { cn: "除了小王，大家都来了。", pinyin: "Chúle Xiǎo Wáng, dàjiā dōu lái le.", de: "Außer Xiao Wang sind alle gekommen. (Ausschluss)" },
            { cn: "除了小王，小李也来了。", pinyin: "Chúle Xiǎo Wáng, Xiǎo Lǐ yě lái le.", de: "Neben Xiao Wang ist auch Xiao Li gekommen. (Einschluss)" },
            { cn: "除了看书以外，我什么都不想做。", pinyin: "Chúle kànshū yǐwài, wǒ shénme dōu bù xiǎng zuò.", de: "Außer Lesen will ich nichts tun. (Ausschluss)" }
          ],
          tip: "Häufiger Fehler bei deutschen Muttersprachlern: Im Deutschen kann „außer\" sowohl Ausschluss als auch Einschluss bedeuten (z. B. „Außer Mathe mag ich alles\" vs. „Außer Mathe mag ich auch Sport\"). Im Chinesischen <strong>muss</strong> man durch 都 oder 还/也 klarstellen, was gemeint ist!"
        },
        {
          heading: "Alltagsbeispiele & Varianten",
          text: "Im Alltag wird 除了 sehr häufig benutzt — beim Erzählen, Vergleichen und Planen. In formelleren Texten findest du auch die Variante <strong>除...之外</strong>, die synonym verwendet wird.",
          examples: [
            { cn: "除了周末以外，我每天都运动。", pinyin: "Chúle zhōumò yǐwài, wǒ měi tiān dōu yùndòng.", de: "Außer am Wochenende treibe ich jeden Tag Sport." },
            { cn: "除了价格贵，这个手机什么都好。", pinyin: "Chúle jiàgé guì, zhège shǒujī shénme dōu hǎo.", de: "Abgesehen vom hohen Preis ist dieses Handy in jeder Hinsicht gut." },
            { cn: "除了工作以外，她还要照顾孩子。", pinyin: "Chúle gōngzuò yǐwài, tā hái yào zhàogu háizi.", de: "Neben der Arbeit muss sie sich auch noch um die Kinder kümmern." }
          ],
          tip: "In manchen Kontexten kann 除了 auch mit <strong>Adjektiven oder ganzen Sätzen</strong> kombiniert werden (z. B. 除了价格贵...). Es ist also nicht auf Nomen beschränkt!"
        }
      ]
    },
    // ── Lektion 35: 不但...而且 ─────────────────────────────────────────────
    {
      id: 'lesson-39',
      number: 35,
      title: "不但...而且",
      subtitle: "Nicht nur... sondern auch",
      level: 'HSK3',
      grammarIds: ["g:不但……，而且……","g:连接分句或句子@HSK3","g:不仅/不光……，还/而且……"],
      intro: "不但...而且 ist das chinesische Äquivalent zu „nicht nur... sondern auch\" und gehört zu den wichtigsten Satzverbindungen im Chinesischen. Diese Struktur drückt eine <strong>Steigerung</strong> aus: Der zweite Teil geht über den ersten hinaus. Besonders spannend: Im Chinesischen kann bei 不但 das Subjekt wechseln — eine Feinheit, die es im Deutschen so nicht gibt. Wer diese Struktur beherrscht, kann Argumente wirkungsvoll aufbauen und Aussagen überzeugend steigern.",
      sections: [
        {
          heading: "不但...而且 — Grundstruktur",
          text: "Die Grundformel bei <strong>gleichem Subjekt</strong>: <strong>Subjekt + 不但 + A, 而且 + B</strong>. Das Subjekt steht vor 不但. Der zweite Teil (B) stellt eine Steigerung oder Ergänzung dar.",
          examples: [
            { cn: "他不但聪明，而且很努力。", pinyin: "Tā búdàn cōngming, érqiě hěn nǔlì.", de: "Er ist nicht nur klug, sondern auch sehr fleißig." },
            { cn: "这个菜不但好吃，而且很便宜。", pinyin: "Zhège cài búdàn hǎochī, érqiě hěn piányi.", de: "Dieses Gericht ist nicht nur lecker, sondern auch sehr günstig." },
            { cn: "她不但会说中文，而且说得很流利。", pinyin: "Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn liúlì.", de: "Sie kann nicht nur Chinesisch, sondern spricht es auch sehr fließend." },
            { cn: "学中文不但有用，而且很有趣。", pinyin: "Xué Zhōngwén búdàn yǒuyòng, érqiě hěn yǒuqù.", de: "Chinesisch zu lernen ist nicht nur nützlich, sondern auch sehr interessant." }
          ],
          tip: "Achte auf die <strong>Steigerung</strong>: Der Teil nach 而且 sollte „mehr\" oder „beeindruckender\" sein als der Teil nach 不但. Es geht immer von „schon gut\" zu „noch besser\"."
        },
        {
          heading: "而且 allein — außerdem / zudem",
          text: "而且 kann auch <strong>allein</strong> stehen, ohne 不但. Dann bedeutet es einfach „außerdem\" oder „zudem\" und verbindet zwei Sätze.",
          examples: [
            { cn: "这里的东西很好，而且不贵。", pinyin: "Zhèlǐ de dōngxi hěn hǎo, érqiě bú guì.", de: "Die Sachen hier sind gut und außerdem nicht teuer." },
            { cn: "他很有经验，而且非常认真。", pinyin: "Tā hěn yǒu jīngyàn, érqiě fēicháng rènzhēn.", de: "Er hat viel Erfahrung und ist zudem sehr gewissenhaft." },
            { cn: "今天下雨了，而且风也很大。", pinyin: "Jīntiān xià yǔ le, érqiě fēng yě hěn dà.", de: "Heute hat es geregnet, und außerdem war es sehr windig." }
          ],
          tip: "而且 allein ist im Alltag extrem häufig. Es klingt natürlicher als 不但...而且, wenn du einfach nur einen Punkt ergänzen willst, ohne die formelle „nicht nur...\"-Struktur."
        },
        {
          heading: "Subjektwechsel bei 不但",
          text: "Wenn die <strong>Subjekte verschieden</strong> sind, steht das erste Subjekt <em>nach</em> 不但: <strong>不但 + Subjekt₁ + A, Subjekt₂ + 而且/也 + B</strong>. Das ist ein wichtiger Unterschied zum Deutschen!",
          examples: [
            { cn: "不但他会做饭，而且他妹妹也会。", pinyin: "Búdàn tā huì zuòfàn, érqiě tā mèimei yě huì.", de: "Nicht nur er kann kochen, sondern auch seine Schwester." },
            { cn: "不但大人喜欢，孩子也喜欢。", pinyin: "Búdàn dàrén xǐhuan, háizi yě xǐhuan.", de: "Nicht nur Erwachsene mögen es, auch Kinder." },
            { cn: "不但中国人吃饺子，外国人也爱吃。", pinyin: "Búdàn Zhōngguórén chī jiǎozi, wàiguórén yě ài chī.", de: "Nicht nur in China isst man Jiaozi, auch Menschen aus dem Ausland lieben sie." }
          ],
          tip: "Faustregel: Gleiches Subjekt → Subjekt <strong>vor</strong> 不但. Verschiedene Subjekte → erstes Subjekt <strong>nach</strong> 不但. Das ist ein typischer Prüfungsfehler!"
        },
        {
          heading: "不仅...也/还 — Variante",
          text: "<strong>不仅</strong> ist eine etwas gehobenere Variante von 不但 und wird besonders in schriftlicher Sprache verwendet. Es kann mit 也, 还 oder 而且 kombiniert werden. Die Bedeutung bleibt gleich.",
          examples: [
            { cn: "她不仅漂亮，还很善良。", pinyin: "Tā bùjǐn piàoliang, hái hěn shànliáng.", de: "Sie ist nicht nur hübsch, sondern auch sehr gutherzig." },
            { cn: "这本书不仅有趣，也很有教育意义。", pinyin: "Zhè běn shū bùjǐn yǒuqù, yě hěn yǒu jiàoyù yìyì.", de: "Dieses Buch ist nicht nur interessant, sondern auch sehr lehrreich." },
            { cn: "不仅要学语法，还要多练习。", pinyin: "Bùjǐn yào xué yǔfǎ, hái yào duō liànxí.", de: "Man muss nicht nur Grammatik lernen, sondern auch viel üben." }
          ],
          tip: "不但, 不仅, 不光 — alle drei bedeuten „nicht nur\". 不但 ist am geläufigsten, 不仅 etwas formeller, 不光 eher umgangssprachlich. Für die HSK-Prüfung solltest du alle drei erkennen können."
        }
      ]
    },
    // ── Lektion 36: 只要...就 & 只有...才 ─────────────────────────────────────
    {
      id: 'lesson-40',
      number: 36,
      title: "只要...就 & 只有...才",
      subtitle: "Schwache vs. strenge Bedingung",
      level: 'HSK3',
      grammarIds: ["g:只有……，才……","g:只要……，就……","g:连接分句或句子@HSK3"],
      intro: "只要...就 und 只有...才 drücken beide Bedingungen aus, aber auf grundverschiedene Weise. <strong>只要...就</strong> heißt „solange/wenn nur\" — eine <em>hinreichende</em> Bedingung, die relativ leicht zu erfüllen ist. <strong>只有...才</strong> heißt „nur wenn/nur dann\" — eine <em>notwendige</em> Bedingung, ohne die das Ergebnis unmöglich ist. Der Unterschied ist wie zwischen „Solange du übst, wirst du besser\" und „Nur wenn du übst, wirst du besser\". Beide klingen ähnlich, aber der Ton ist ein ganz anderer.",
      sections: [
        {
          heading: "只要...就 — solange / wenn nur",
          text: "<strong>只要</strong> drückt eine <em>hinreichende Bedingung</em> aus: Wenn diese eine Sache erfüllt ist, reicht das schon — der Rest ergibt sich. Das deutsche Äquivalent ist „solange\" oder „wenn nur\". Der Ton ist optimistisch: Es ist nicht so schwer, die Bedingung zu erfüllen.",
          examples: [
            { cn: "只要你努力，就能成功。", pinyin: "Zhǐyào nǐ nǔlì, jiù néng chénggōng.", de: "Solange du dich anstrengst, kannst du Erfolg haben." },
            { cn: "只要有时间，我就去看你。", pinyin: "Zhǐyào yǒu shíjiān, wǒ jiù qù kàn nǐ.", de: "Wenn ich nur Zeit habe, komme ich dich besuchen." },
            { cn: "只要天气好，我们就出去玩。", pinyin: "Zhǐyào tiānqì hǎo, wǒmen jiù chūqu wán.", de: "Solange das Wetter gut ist, gehen wir raus spielen." },
            { cn: "只要你开口，我就帮你。", pinyin: "Zhǐyào nǐ kāikǒu, wǒ jiù bāng nǐ.", de: "Du brauchst nur zu fragen, und ich helfe dir." }
          ],
          tip: "只要...就 klingt <strong>ermutigend und optimistisch</strong>. Es sagt: „Es braucht nicht viel — diese eine Sache reicht!\" Denk an: <em>solange</em> X, <em>dann schon</em> Y."
        },
        {
          heading: "只有...才 — nur wenn / nur dann",
          text: "<strong>只有</strong> drückt eine <em>notwendige Bedingung</em> aus: Ohne diese Voraussetzung geht gar nichts. Das deutsche Äquivalent ist „nur wenn\" oder „nur dann, wenn\". Der Ton ist strenger und einschränkender.",
          examples: [
            { cn: "只有努力学习，才能考上大学。", pinyin: "Zhǐyǒu nǔlì xuéxí, cái néng kǎoshàng dàxué.", de: "Nur wenn man fleißig lernt, kann man die Uni-Aufnahmeprüfung bestehen." },
            { cn: "只有你自己才能决定。", pinyin: "Zhǐyǒu nǐ zìjǐ cái néng juédìng.", de: "Nur du selbst kannst das entscheiden." },
            { cn: "只有亲身经历，才能真正理解。", pinyin: "Zhǐyǒu qīnshēn jīnglì, cái néng zhēnzhèng lǐjiě.", de: "Nur durch eigene Erfahrung kann man wirklich verstehen." },
            { cn: "只有多练习，才会说得好。", pinyin: "Zhǐyǒu duō liànxí, cái huì shuō de hǎo.", de: "Nur wenn man viel übt, wird man gut sprechen." }
          ],
          tip: "只有...才 klingt <strong>streng und betont die Notwendigkeit</strong>. Es sagt: „Ohne X geht es <em>auf keinen Fall</em>!\" Denk an: <em>nur wenn</em> X, <em>dann erst</em> Y."
        },
        {
          heading: "Direkter Vergleich",
          text: "Der Unterschied wird am klarsten, wenn man denselben Inhalt mit beiden Strukturen formuliert. Achte auf den unterschiedlichen Ton:",
          examples: [
            { cn: "只要你来，我就高兴。", pinyin: "Zhǐyào nǐ lái, wǒ jiù gāoxìng.", de: "Solange du kommst, bin ich schon zufrieden. (Leichte Bedingung)" },
            { cn: "只有你来，我才高兴。", pinyin: "Zhǐyǒu nǐ lái, wǒ cái gāoxìng.", de: "Nur wenn du kommst, bin ich zufrieden. (Strenge Bedingung)" },
            { cn: "只要认真听，就能听懂。", pinyin: "Zhǐyào rènzhēn tīng, jiù néng tīngdǒng.", de: "Solange man aufmerksam zuhört, kann man es verstehen." },
            { cn: "只有认真听，才能听懂。", pinyin: "Zhǐyǒu rènzhēn tīng, cái néng tīngdǒng.", de: "Nur wenn man aufmerksam zuhört, kann man es verstehen." }
          ],
          tip: "Ein guter Test: Wenn du das Wort „schon\" einbauen kannst (→ „Solange du kommst, bin ich <em>schon</em> froh\"), dann ist 只要...就 richtig. Wenn du „erst\" brauchst (→ „Nur wenn du kommst, <em>erst</em> dann...\"), dann ist 只有...才 richtig."
        },
        {
          heading: "Parallelen zum Deutschen",
          text: "Die Unterscheidung zwischen 只要 und 只有 spiegelt im Deutschen den Unterschied zwischen „solange\" und „nur wenn\" wider. Beide drücken Bedingungen aus, aber mit verschiedener Strenge. Vergleiche auch: Englisch „as long as\" (只要) vs. „only if\" (只有).",
          examples: [
            { cn: "只要不下雨，就可以去爬山。", pinyin: "Zhǐyào bú xià yǔ, jiù kěyǐ qù páshān.", de: "Solange es nicht regnet, können wir wandern gehen." },
            { cn: "只有拿到签证，才能出国。", pinyin: "Zhǐyǒu nádào qiānzhèng, cái néng chūguó.", de: "Nur wenn man das Visum bekommt, kann man ins Ausland reisen." },
            { cn: "只要你喜欢，就买吧。", pinyin: "Zhǐyào nǐ xǐhuan, jiù mǎi ba.", de: "Wenn es dir gefällt, dann kauf es einfach." }
          ],
          tip: "Deutsche Lernende verwechseln 只要 und 只有 besonders häufig, weil „wenn\" im Deutschen beide Bedeutungen abdecken kann. Im Chinesischen <strong>muss</strong> man sich entscheiden: Ist die Bedingung leicht erfüllbar (只要) oder absolut zwingend (只有)?"
        }
      ]
    },
    // ── Lektion 37: 可能补语 V得/V不 ──────────────────────────────────────────
    {
      id: 'lesson-41',
      number: 37,
      title: "可能补语 V得/V不",
      subtitle: "Potential-Komplemente — können oder nicht können",
      level: 'HSK3',
      grammarIds: ["g:动词+得/不+动词/形容词","g:能","g:可以","g:动补短语2","g:来得及/来不及"],
      intro: "Die Potential-Komplemente gehören zu den elegantesten Werkzeugen der chinesischen Sprache. Statt umständlich „Ich kann das sehen\" zu sagen, komprimiert das Chinesische es in ein einziges Wort: <strong>看得见</strong> (sehen können) oder <strong>看不见</strong> (nicht sehen können). Die Formel ist einfach: <strong>Verb + 得 + Komplement</strong> (= kann) oder <strong>Verb + 不 + Komplement</strong> (= kann nicht). Dieses System beschreibt, ob ein Ergebnis <em>erreichbar</em> ist — und geht damit weit über einfaches „können\" hinaus.",
      sections: [
        {
          heading: "Grundstruktur: V得/V不 + Komplement",
          text: "Die Bildung ist regelmäßig: Nimm ein Verb und ein Resultativkomplement, und setze <strong>得</strong> (möglich) oder <strong>不</strong> (unmöglich) dazwischen. Das Ergebnis ist ein kompaktes Wort, das aussagt, ob ein bestimmtes Ergebnis erreicht werden kann oder nicht.",
          examples: [
            { cn: "看得见", pinyin: "kàn de jiàn", de: "sehen können (das Ergebnis „sehen\" ist erreichbar)" },
            { cn: "看不见", pinyin: "kàn bu jiàn", de: "nicht sehen können (das Ergebnis „sehen\" ist nicht erreichbar)" },
            { cn: "听得懂", pinyin: "tīng de dǒng", de: "hörend verstehen können" },
            { cn: "听不懂", pinyin: "tīng bu dǒng", de: "hörend nicht verstehen können" }
          ],
          tip: "Das 得 in Potential-Komplementen wird leicht und tonlos gesprochen (de), genau wie das 不 (bu). Verwechsle es nicht mit dem Komplementmarker 得 (de) in Sätzen wie 说得好!"
        },
        {
          heading: "Häufige Paare im Alltag",
          text: "Es gibt einige Potential-Komplement-Paare, die im Alltag ständig vorkommen. Diese solltest du als feste Wendungen lernen:",
          examples: [
            { cn: "这个东西太贵了，我买不起。", pinyin: "Zhège dōngxi tài guì le, wǒ mǎi bu qǐ.", de: "Das ist zu teuer, ich kann es mir nicht leisten. (买得起/买不起)" },
            { cn: "作业太多了，今天做不完。", pinyin: "Zuòyè tài duō le, jīntiān zuò bu wán.", de: "Es gibt zu viele Hausaufgaben, heute werde ich nicht fertig. (做得完/做不完)" },
            { cn: "快点儿！来不及了！", pinyin: "Kuài diǎnr! Lái bu jí le!", de: "Beeil dich! Wir schaffen es nicht mehr rechtzeitig! (来得及/来不及)" },
            { cn: "这个字太小了，看不清楚。", pinyin: "Zhège zì tài xiǎo le, kàn bu qīngchu.", de: "Dieses Schriftzeichen ist zu klein, ich kann es nicht deutlich sehen. (看得清楚/看不清楚)" }
          ],
          tip: "Die häufigsten Komplemente in dieser Struktur: 见 (wahrnehmen), 懂 (verstehen), 完 (fertig), 到 (erreichen), 起 (sich leisten), 清楚 (deutlich), 动 (bewegen). Lerne diese als feste Bausteine!"
        },
        {
          heading: "In Sätzen und Fragen",
          text: "Potential-Komplemente werden ganz normal in Sätze eingebaut. Fragen können mit 吗 oder als A-nicht-A-Frage (V得C V不C) gebildet werden.",
          examples: [
            { cn: "你听得懂中文吗？", pinyin: "Nǐ tīng de dǒng Zhōngwén ma?", de: "Verstehst du Chinesisch (wenn du es hörst)?" },
            { cn: "这个箱子你拿得动拿不动？", pinyin: "Zhège xiāngzi nǐ ná de dòng ná bu dòng?", de: "Kannst du diese Kiste tragen oder nicht?" },
            { cn: "今天的作业你做得完吗？", pinyin: "Jīntiān de zuòyè nǐ zuò de wán ma?", de: "Schaffst du die heutigen Hausaufgaben?" },
            { cn: "这么多饭，你吃得完吃不完？", pinyin: "Zhème duō fàn, nǐ chī de wán chī bu wán?", de: "So viel Essen — schaffst du das oder nicht?" }
          ],
          tip: "Die A-nicht-A-Frage mit Potential-Komplementen klingt im Alltag sehr natürlich: V得C + V不C? (z. B. 看得见看不见？). Das ist umgangssprachlicher als die 吗-Frage."
        },
        {
          heading: "Unterschied zu 能/可以 + Verb",
          text: "Warum nicht einfach 能 oder 可以 benutzen? Der Unterschied: <strong>能/可以</strong> drücken eine <em>allgemeine Fähigkeit oder Erlaubnis</em> aus, <strong>Potential-Komplemente</strong> beschreiben, ob ein <em>konkretes Ergebnis unter den gegebenen Umständen erreichbar</em> ist.",
          examples: [
            { cn: "我能看中文书。", pinyin: "Wǒ néng kàn Zhōngwén shū.", de: "Ich kann chinesische Bücher lesen. (Allgemeine Fähigkeit)" },
            { cn: "字太小了，我看不见。", pinyin: "Zì tài xiǎo le, wǒ kàn bu jiàn.", de: "Die Schrift ist zu klein, ich kann sie nicht sehen. (Konkretes Hindernis)" },
            { cn: "我能听中文歌。", pinyin: "Wǒ néng tīng Zhōngwén gē.", de: "Ich kann chinesische Lieder hören. (Fähigkeit/Erlaubnis)" },
            { cn: "太吵了，听不清楚。", pinyin: "Tài chǎo le, tīng bu qīngchu.", de: "Es ist zu laut, ich kann nicht klar hören. (Konkretes Hindernis)" }
          ],
          tip: "能 beantwortet „Bist du grundsätzlich dazu in der Lage?\". Potential-Komplemente beantworten „Ist das Ergebnis unter diesen konkreten Umständen erreichbar?\". Im Deutschen wird beides oft mit „können\" übersetzt — achte auf den Kontext!"
        }
      ]
    },
    // ── Lektion 38: 对...来说 & 关于 ─────────────────────────────────────────
    {
      id: 'lesson-42',
      number: 38,
      title: "对...来说 & 关于",
      subtitle: "Perspektive, Bezug und Thema",
      level: 'HSK3',
      grammarIds: ["g:关于","g:对……来说","g:对","g:至于"],
      intro: "Im Chinesischen gibt es mehrere Möglichkeiten, einen Bezugsrahmen oder eine Perspektive einzuführen. <strong>对...来说</strong> markiert, aus wessen <em>Sicht</em> etwas gilt. <strong>关于</strong> führt ein <em>Thema</em> ein, über das gesprochen wird. <strong>至于</strong> leitet einen <em>Themenwechsel</em> ein. Und <strong>对...有好处</strong> beschreibt, wofür etwas <em>gut oder hilfreich</em> ist. Diese Strukturen helfen dir, präzise auszudrücken, worüber und aus welcher Perspektive du sprichst.",
      sections: [
        {
          heading: "对...来说 — für / aus Sicht von",
          text: "<strong>对 + Person + 来说</strong> bedeutet „für jemanden\" oder „aus der Sicht von jemandem\". Es rahmt die folgende Aussage als <em>persönliche Perspektive</em> ein. Es steht meistens am Satzanfang.",
          examples: [
            { cn: "对我来说，学中文很有意思。", pinyin: "Duì wǒ lái shuō, xué Zhōngwén hěn yǒu yìsi.", de: "Für mich ist Chinesischlernen sehr interessant." },
            { cn: "对孩子来说，这个游戏太难了。", pinyin: "Duì háizi lái shuō, zhège yóuxì tài nán le.", de: "Für Kinder ist dieses Spiel zu schwer." },
            { cn: "对外国人来说，汉字最难。", pinyin: "Duì wàiguórén lái shuō, Hànzì zuì nán.", de: "Für Menschen aus dem Ausland sind die Schriftzeichen am schwierigsten." },
            { cn: "对他来说，钱不是问题。", pinyin: "Duì tā lái shuō, qián bú shì wèntí.", de: "Für ihn ist Geld kein Problem." }
          ],
          tip: "对...来说 ist <strong>nicht</strong> dasselbe wie einfaches 对 (gegenüber/zu). 对我来说 = „aus meiner Sicht\", 对我 = „mir gegenüber/zu mir\". Der Zusatz 来说 macht den Perspektiv-Charakter deutlich."
        },
        {
          heading: "对...有好处 / 有帮助 — gut/hilfreich für",
          text: "Die Struktur <strong>对 + Objekt + 有好处/有帮助</strong> drückt aus, dass etwas für eine Person oder Sache <em>vorteilhaft oder hilfreich</em> ist. Das Gegenteil: 对...没有好处 oder 对...有坏处.",
          examples: [
            { cn: "运动对身体有好处。", pinyin: "Yùndòng duì shēntǐ yǒu hǎochu.", de: "Sport ist gut für den Körper." },
            { cn: "多读书对学习有帮助。", pinyin: "Duō dúshū duì xuéxí yǒu bāngzhù.", de: "Viel Lesen ist hilfreich für das Lernen." },
            { cn: "吸烟对健康没有好处。", pinyin: "Xīyān duì jiànkāng méiyǒu hǎochu.", de: "Rauchen ist nicht gut für die Gesundheit." },
            { cn: "这个方法对提高口语有帮助。", pinyin: "Zhège fāngfǎ duì tígāo kǒuyǔ yǒu bāngzhù.", de: "Diese Methode ist hilfreich für die Verbesserung der mündlichen Fähigkeiten." }
          ],
          tip: "Achte auf die Wortstellung: Im Deutschen sagen wir „Sport ist gut <em>für</em> den Körper\", im Chinesischen steht 对 + Bezugsobjekt <em>vor</em> dem Prädikat: 运动 <strong>对身体</strong> 有好处."
        },
        {
          heading: "关于 — bezüglich / über",
          text: "<strong>关于</strong> bedeutet „bezüglich\", „über\" oder „was ... betrifft\" und führt ein Thema ein. Es steht meistens am Satzanfang oder vor dem Subjekt.",
          examples: [
            { cn: "关于这个问题，我们再讨论一下。", pinyin: "Guānyú zhège wèntí, wǒmen zài tǎolùn yíxià.", de: "Bezüglich dieser Frage lasst uns noch einmal diskutieren." },
            { cn: "关于中国文化，我了解得不多。", pinyin: "Guānyú Zhōngguó wénhuà, wǒ liǎojiě de bù duō.", de: "Was die chinesische Kultur betrifft, weiß ich nicht viel." },
            { cn: "这是一本关于历史的书。", pinyin: "Zhè shì yì běn guānyú lìshǐ de shū.", de: "Das ist ein Buch über Geschichte." },
            { cn: "关于明天的计划，你有什么想法？", pinyin: "Guānyú míngtiān de jìhuà, nǐ yǒu shénme xiǎngfǎ?", de: "Was den Plan für morgen betrifft — hast du Ideen?" }
          ],
          tip: "关于 kann auch als Attribut vor einem Nomen stehen: 关于中国的书 (ein Buch über China). Verwechsle es nicht mit 对...来说 — 关于 führt ein Thema ein, 对...来说 markiert eine Perspektive."
        },
        {
          heading: "至于 — was ... betrifft (Themenwechsel)",
          text: "Ausblick (HSK 6): <strong>至于</strong> leitet einen <em>Themenwechsel</em> ein und bedeutet „was ... betrifft\" oder „hinsichtlich\". Es wird verwendet, um von einem Thema auf ein anderes überzuleiten, oft mit dem Unterton „das ist eine andere Sache\".",
          examples: [
            { cn: "我同意去旅行，至于去哪儿，再说吧。", pinyin: "Wǒ tóngyì qù lǚxíng, zhìyú qù nǎr, zài shuō ba.", de: "Ich bin einverstanden zu reisen; was das Ziel betrifft, darüber reden wir später." },
            { cn: "工作我找到了，至于工资，还不太满意。", pinyin: "Gōngzuò wǒ zhǎodào le, zhìyú gōngzī, hái bú tài mǎnyì.", de: "Einen Job habe ich gefunden; was das Gehalt betrifft, bin ich noch nicht ganz zufrieden." },
            { cn: "你的作业写完了吗？至于考试的事，我们明天再聊。", pinyin: "Nǐ de zuòyè xiěwán le ma? Zhìyú kǎoshì de shì, wǒmen míngtiān zài liáo.", de: "Hast du deine Hausaufgaben fertig geschrieben? Was die Prüfung betrifft, darüber reden wir morgen." }
          ],
          tip: "Verwechsle 关于 und 至于 nicht! <strong>关于</strong> = Thema einführen (neutral). <strong>至于</strong> = Themenwechsel, oft mit dem Unterton „das ist ein anderes Thema / das steht auf einem anderen Blatt\". 至于 kommt immer nach einem ersten Punkt."
        }
      ]
    },
    // ── Lektion 39: 被 (bèi) Passiv ──────────────────────────────────────
    {
      id: 'lesson-5',
      number: 39,
      title: "被 (bèi) Passiv",
      subtitle: "Passivkonstruktionen im Chinesischen",
      level: 'HSK3',
      grammarIds: ["g:被","g:主语+被+宾语+动词+其他成分","g:主语+被+动词+其他成分","g:受事主语","g:主语+叫/让+宾语+动词+其他成分"],
      intro: "Im Deutschen benutzen wir das Passiv ständig: „Das Buch wurde gelesen\", „Das Fenster ist geöffnet worden.\" Im Chinesischen ist das Passiv viel seltener — und es hat einen besonderen Beigeschmack. Traditionell wird 被 vor allem für <strong>unangenehme oder unerwünschte</strong> Dinge verwendet: bestohlen werden, kritisiert werden, gefeuert werden. In der modernen Sprache wird es aber auch neutral eingesetzt, besonders in Nachrichten und formellen Texten.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>Empfänger + 被 + (Handelnder) + Verb + Komplement/了</strong>. Der Handelnde kann weggelassen werden, wenn er unbekannt oder unwichtig ist.",
          examples: [
            { cn: "我的手机被偷了。", pinyin: "Wǒ de shǒujī bèi tōu le.", de: "Mein Handy wurde gestohlen." },
            { cn: "他被老板批评了。", pinyin: "Tā bèi lǎobǎn pīpíng le.", de: "Er wurde vom Chef kritisiert." },
            { cn: "蛋糕被弟弟吃了。", pinyin: "Dàngāo bèi dìdi chī le.", de: "Der Kuchen wurde vom kleinen Bruder gegessen." }
          ],
          tip: "Wie bei 把 darf das Verb nicht „nackt\" stehen. Es braucht 了, ein Komplement oder eine andere Ergänzung."
        },
        {
          heading: "Negative Konnotation",
          text: "Traditionell signalisiert 被 etwas <strong>Unerwünschtes</strong>. In Alltagsgesprächen klingt ein 被-Satz oft so, als wäre dem Subjekt etwas Schlechtes widerfahren.",
          examples: [
            { cn: "我被蚊子咬了。", pinyin: "Wǒ bèi wénzi yǎo le.", de: "Ich wurde von einer Mücke gestochen." },
            { cn: "他被公司解雇了。", pinyin: "Tā bèi gōngsī jiěgù le.", de: "Er wurde von der Firma entlassen." },
            { cn: "那棵树被风吹倒了。", pinyin: "Nà kē shù bèi fēng chuīdǎo le.", de: "Der Baum wurde vom Wind umgeweht." }
          ]
        },
        {
          heading: "Neutrales / positives Passiv",
          text: "In modernem Chinesisch, besonders in Nachrichten, wird 被 auch <strong>neutral</strong> verwendet. In sozialen Medien gibt es sogar die ironische „被\"-Konstruktion (被XX), die ausdrückt, dass jemandem etwas aufgezwungen wurde.",
          examples: [
            { cn: "他被选为班长。", pinyin: "Tā bèi xuǎn wéi bānzhǎng.", de: "Er wurde zum Klassensprecher gewählt." },
            { cn: "这个问题已经被解决了。", pinyin: "Zhège wèntí yǐjīng bèi jiějué le.", de: "Das Problem ist bereits gelöst worden." }
          ],
          tip: "Alternativen zu 被: In der gesprochenen Sprache hört man auch <strong>叫 (jiào)</strong> und <strong>让 (ràng)</strong> für passivische Konstruktionen, besonders in nordchinesischen Dialekten."
        },
        {
          heading: "被 vs. aktive Umformulierung",
          text: "Im Chinesischen klingt es oft natürlicher, das Passiv zu <strong>vermeiden</strong> und aktiv umzuformulieren. Im Alltag bevorzugt man häufig die aktive Form oder die Thema-Kommentar-Struktur.",
          examples: [
            { cn: "被动：杯子被他打碎了。", pinyin: "Bēizi bèi tā dǎsuì le.", de: "Passiv: Die Tasse wurde von ihm zerbrochen." },
            { cn: "主动：他打碎了杯子。", pinyin: "Tā dǎsuì le bēizi.", de: "Aktiv: Er hat die Tasse zerbrochen." },
            { cn: "话题：那个杯子，他打碎了。", pinyin: "Nàge bēizi, tā dǎsuì le.", de: "Thema: Die Tasse — er hat sie zerbrochen." }
          ]
        }
      ]
    },
    // ── Lektion 40: 趋向补语 — Richtungskomplemente ─────────────────────────
    {
      id: 'lesson-9',
      number: 40,
      title: "趋向补语 — Richtungskomplemente",
      subtitle: "Bewegung in alle Richtungen",
      level: 'HSK2/HSK3',
      grammarIds: ["g:简单趋向补语的趋向意义用法：（1）动词+来/去","g:动词+上/下/进/出/过/回","g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去","g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下","g:表示动作行为的开始：动词+上/起来","g:表示动作行为的持续：动词+下去/下来"],
      intro: "Im Chinesischen kannst du mit Richtungskomplementen (趋向补语) unglaublich präzise beschreiben, <em>wohin</em> sich etwas bewegt. 来 (her, zur sprechenden Person hin) und 去 (hin, von ihr weg) bilden die Basis. Dazu kommen Verben wie 上 (rauf), 下 (runter), 进 (rein), 出 (raus), 回 (zurück), 过 (vorbei), 起 (auf). Kombiniere sie, und du bekommst Ausdrücke wie 走进来 (hereinkommen) oder 跑出去 (hinausrennen). Es ist wie ein Baukastensystem!",
      sections: [
        {
          heading: "Einfache Richtungskomplemente",
          text: "Die einfachsten sind <strong>来</strong> (hierher) und <strong>去</strong> (dorthin), direkt nach dem Bewegungsverb.",
          examples: [
            { cn: "他带来了一些水果。", pinyin: "Tā dàilái le yìxiē shuǐguǒ.", de: "Er hat etwas Obst mitgebracht." },
            { cn: "请进来！", pinyin: "Qǐng jìnlái!", de: "Komm bitte herein!" },
            { cn: "她买来了一个蛋糕。", pinyin: "Tā mǎilái le yí gè dàngāo.", de: "Sie hat einen Kuchen gekauft und mitgebracht." }
          ],
          tip: "来 = Bewegung <strong>zur sprechenden Person</strong> hin. 去 = Bewegung <strong>von ihr</strong> weg. Das ist der entscheidende Unterschied!"
        },
        {
          heading: "Zusammengesetzte Richtungskomplemente",
          text: "Die wirkliche Stärke liegt in den <strong>Kombinationen</strong>: Richtungsverb + 来/去. Das ergibt zweisilbige Komplemente wie 上来 (herauf), 下去 (hinunter), 进来 (herein), 出去 (hinaus), 回来 (zurück hierher), 起来 (hoch/auf).",
          examples: [
            { cn: "他跑上来了。", pinyin: "Tā pǎo shànglái le.", de: "Er ist heraufgerannt." },
            { cn: "把箱子搬下去。", pinyin: "Bǎ xiāngzi bān xiàqù.", de: "Trag die Kiste hinunter." },
            { cn: "孩子从水里游上来了。", pinyin: "Háizi cóng shuǐ lǐ yóu shànglái le.", de: "Das Kind ist aus dem Wasser heraufgeschwommen." }
          ]
        },
        {
          heading: "Position des Objekts",
          text: "Bei Ortsangaben steht das Objekt <strong>zwischen</strong> dem Richtungsverb und 来/去. Bei konkreten Objekten gibt es zwei Positionen.",
          examples: [
            { cn: "她走进教室来了。", pinyin: "Tā zǒujìn jiàoshì lái le.", de: "Sie ist ins Klassenzimmer hereingekommen. (Ort zwischen 进 und 来)" },
            { cn: "他拿出一本书来。", pinyin: "Tā náchū yì běn shū lái.", de: "Er holte ein Buch hervor." },
            { cn: "请把行李拿上来。", pinyin: "Qǐng bǎ xíngli ná shànglái.", de: "Bring bitte das Gepäck herauf." }
          ],
          tip: "Ortsangaben stehen <strong>immer</strong> vor 来/去: 走进房间来 (ins Zimmer hereinkommen). Das ist keine optionale Regel!"
        },
        {
          heading: "Übertragene Bedeutungen",
          text: "Viele Richtungskomplemente haben auch <strong>abstrakte</strong> Bedeutungen. 起来 kann „anfangen\" bedeuten, 下去 „weitermachen\", 出来 „herausfinden/erkennen\".",
          examples: [
            { cn: "她突然笑了起来。", pinyin: "Tā tūrán xiào le qǐlái.", de: "Sie fing plötzlich an zu lachen." },
            { cn: "说下去！", pinyin: "Shuō xiàqù!", de: "Sprich weiter!" },
            { cn: "我想起来了！", pinyin: "Wǒ xiǎng qǐlái le!", de: "Mir ist es eingefallen! / Ich erinnere mich!" },
            { cn: "我看不出来。", pinyin: "Wǒ kàn bu chūlái.", de: "Ich kann es nicht erkennen." }
          ]
        }
      ]
    },
    // ── Lektion 41: 越...越... ────────────────────────────────────────────
    {
      id: 'lesson-16',
      number: 41,
      title: "越...越...",
      subtitle: "„Je... desto...\" — Progressive Veränderung",
      level: 'HSK3',
      grammarIds: ["g:越来越","g:越……越……"],
      intro: "„Je mehr ich lerne, desto mehr verstehe ich.\" „Je kälter es wird, desto weniger will ich rausgehen.\" Diese progressiven Konstruktionen sind im Deutschen schon elegant — im Chinesischen sind sie es noch mehr. Mit <strong>越...越...</strong> drückst du aus, dass sich zwei Dinge <strong>parallel und proportional</strong> verändern. Die Struktur ist simpel, aber die Ausdruckskraft ist enorm.",
      sections: [
        {
          heading: "Grundstruktur: 越来越 + Adjektiv",
          text: "Die einfachste Form: <strong>越来越 + Adjektiv/Verb</strong> bedeutet „immer mehr...\" oder „zunehmend...\". Hier wird nur <em>eine</em> Veränderung beschrieben.",
          examples: [
            { cn: "天气越来越冷了。", pinyin: "Tiānqì yuèláiyuè lěng le.", de: "Das Wetter wird immer kälter." },
            { cn: "他的中文越来越好了。", pinyin: "Tā de Zhōngwén yuèláiyuè hǎo le.", de: "Sein Chinesisch wird immer besser." },
            { cn: "我越来越喜欢中国菜。", pinyin: "Wǒ yuèláiyuè xǐhuan Zhōngguó cài.", de: "Ich mag chinesisches Essen immer mehr." }
          ],
          tip: "越来越 + Adj + 了 ist eine der häufigsten Strukturen in der Alltagssprache. Am Ende steht oft 了, weil sich eine Veränderung vollzieht."
        },
        {
          heading: "越 A 越 B — Parallele Veränderung",
          text: "Die volle Konstruktion: <strong>越 + A + 越 + B</strong> drückt aus, dass je mehr A passiert, desto mehr passiert B. Zwei Veränderungen laufen parallel.",
          examples: [
            { cn: "越学越有意思。", pinyin: "Yuè xué yuè yǒu yìsi.", de: "Je mehr man lernt, desto interessanter wird es." },
            { cn: "他越说越生气。", pinyin: "Tā yuè shuō yuè shēngqì.", de: "Je mehr er redet, desto wütender wird er." },
            { cn: "雨越下越大。", pinyin: "Yǔ yuè xià yuè dà.", de: "Der Regen wird immer stärker." }
          ]
        },
        {
          heading: "Mit zwei verschiedenen Subjekten",
          text: "Die beiden Teile können auch <strong>verschiedene Subjekte</strong> haben. Dann beschreibt die Konstruktion einen kausalen Zusammenhang.",
          examples: [
            { cn: "你越说，我越不明白。", pinyin: "Nǐ yuè shuō, wǒ yuè bù míngbai.", de: "Je mehr du erklärst, desto weniger verstehe ich." },
            { cn: "老师越严格，学生越认真。", pinyin: "Lǎoshī yuè yángé, xuéshēng yuè rènzhēn.", de: "Je strenger die Lehrkraft, desto gewissenhafter die Lernenden." },
            { cn: "风越大，浪越高。", pinyin: "Fēng yuè dà, làng yuè gāo.", de: "Je stärker der Wind, desto höher die Wellen." }
          ],
          tip: "Beachte die Eleganz: Im Chinesischen braucht man kein „je\" und „desto\" — 越...越... reicht völlig aus."
        },
        {
          heading: "Variante: 越...越好",
          text: "Eine häufige feste Wendung: <strong>越 + Adj + 越好</strong> = „je ... desto besser\".",
          examples: [
            { cn: "越快越好。", pinyin: "Yuè kuài yuè hǎo.", de: "Je schneller, desto besser." },
            { cn: "越多越好。", pinyin: "Yuè duō yuè hǎo.", de: "Je mehr, desto besser." },
            { cn: "越早越好。", pinyin: "Yuè zǎo yuè hǎo.", de: "Je früher, desto besser." }
          ]
        }
      ]
    },
    // ── Lektion 42: 连...都/也 ─────────────────────────────────────────────
    {
      id: 'lesson-13',
      number: 42,
      title: "连...都/也",
      subtitle: "„Sogar\"-Konstruktionen",
      level: 'HSK4',
      grammarIds: ["g:连……也/都……，……更……","g:一……也/都+不/没……"],
      intro: "Wenn du im Deutschen sagst „Sogar mein Hund versteht das!\", betonst du, dass etwas extrem überraschend oder unerwartet ist. Im Chinesischen gibt es dafür die elegante <strong>连...都/也</strong>-Konstruktion. 连 markiert das überraschende Element, 都 oder 也 verstärkt die Aussage. Diese Struktur ist in der gehobenen Alltagssprache extrem häufig und gibt deinem Chinesisch sofort mehr Ausdruckskraft.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>连 + betontes Element + 都/也 + Verb</strong>. 连 hebt hervor, was überraschend ist, und 都 oder 也 betont das „sogar\".",
          examples: [
            { cn: "他连自己的名字都不会写。", pinyin: "Tā lián zìjǐ de míngzi dōu bú huì xiě.", de: "Er kann nicht mal seinen eigenen Namen schreiben." },
            { cn: "连小孩子都知道。", pinyin: "Lián xiǎo háizi dōu zhīdào.", de: "Sogar kleine Kinder wissen das." },
            { cn: "我连一块钱也没有。", pinyin: "Wǒ lián yí kuài qián yě méiyǒu.", de: "Ich habe nicht mal einen Yuan." },
            { cn: "连小孩子都知道，你更应该知道。", pinyin: "Lián xiǎo háizi dōu zhīdào, nǐ gèng yīnggāi zhīdào.", de: "Sogar kleine Kinder wissen das — du solltest es erst recht wissen. (连……都……，……更……)" }
          ],
          tip: "都 und 也 sind in dieser Konstruktion austauschbar, aber 都 ist häufiger. 也 klingt etwas weicher."
        },
        {
          heading: "In Verneinungen",
          text: "Die 连...都-Konstruktion wird besonders häufig in <strong>verneinten</strong> Sätzen verwendet, um zu betonen, dass „nicht einmal\" etwas der Fall ist.",
          examples: [
            { cn: "他忙得连饭都没时间吃。", pinyin: "Tā máng de lián fàn dōu méi shíjiān chī.", de: "Er ist so beschäftigt, dass er nicht mal Zeit zum Essen hat." },
            { cn: "她连看都没看我一眼。", pinyin: "Tā lián kàn dōu méi kàn wǒ yì yǎn.", de: "Sie hat mich nicht mal eines Blickes gewürdigt." },
            { cn: "我连他的电话号码都不知道。", pinyin: "Wǒ lián tā de diànhuà hàomǎ dōu bù zhīdào.", de: "Ich kenne nicht mal seine Telefonnummer." }
          ]
        },
        {
          heading: "连 mit Verben",
          text: "Auch Verben können nach 连 stehen — dann wird das Verb betont, das man „nicht einmal\" tut.",
          examples: [
            { cn: "她连试都没试。", pinyin: "Tā lián shì dōu méi shì.", de: "Sie hat es nicht einmal versucht." },
            { cn: "他连想都没想就答应了。", pinyin: "Tā lián xiǎng dōu méi xiǎng jiù dāying le.", de: "Er hat zugesagt, ohne auch nur darüber nachzudenken." }
          ],
          tip: "Wenn nach 连 ein Verb steht, wird es oft <strong>wiederholt</strong>: 连看都没看, 连试都不试. Das erste Verb ist das betonte Thema, das zweite das eigentliche Prädikat."
        },
        {
          heading: "Ohne 连 — informelle Variante",
          text: "In der Umgangssprache wird 连 manchmal weggelassen. 都 oder 也 allein kann schon „sogar\" oder „nicht einmal\" ausdrücken.",
          examples: [
            { cn: "他名字都不知道。", pinyin: "Tā míngzi dōu bù zhīdào.", de: "Er kennt nicht mal den Namen. (连 weggelassen)" },
            { cn: "我一口也没吃。", pinyin: "Wǒ yì kǒu yě méi chī.", de: "Ich habe keinen einzigen Bissen gegessen." },
            { cn: "水都没喝一口。", pinyin: "Shuǐ dōu méi hē yì kǒu.", de: "Hat nicht mal einen Schluck Wasser getrunken." }
          ]
        }
      ]
    },
    // ── Lektion 43: 既...又/也 & 又...又 ─────────────────────────────────────
    {
      id: 'lesson-43',
      number: 43,
      title: "既...又/也 & 又...又",
      subtitle: "Sowohl ... als auch — gleichzeitige Eigenschaften",
      level: 'HSK3/HSK4',
      grammarIds: ["g:又……，又……","g:既……，又/也……"],
      intro: "Wenn du im Deutschen „sowohl A als auch B\" sagen willst, gibt es im Chinesischen mehrere elegante Möglichkeiten. <strong>既...又</strong> betont, dass jemand oder etwas <em>gleichzeitig zwei Eigenschaften</em> besitzt. <strong>又...又</strong> beschreibt eher <em>gleichzeitig ablaufende Handlungen oder Zustände</em>. Und <strong>也...也</strong> drückt aus, dass beide Optionen gelten. Die Nuancen sind fein, aber wichtig — besonders auf HSK4-Niveau, wo diese Strukturen regelmäßig geprüft werden.",
      sections: [
        {
          heading: "既A又B — sowohl A als auch B",
          text: "<strong>既...又</strong> verbindet zwei <em>Eigenschaften, Fähigkeiten oder Zustände</em>, die gleichzeitig auf dieselbe Person oder Sache zutreffen. Es wird häufig mit Adjektiven und Verben verwendet und klingt etwas formeller als 又...又.",
          examples: [
            { cn: "这个餐厅既便宜又好吃。", pinyin: "Zhège cāntīng jì piányi yòu hǎochī.", de: "Dieses Restaurant ist sowohl günstig als auch lecker." },
            { cn: "她既聪明又勤奋。", pinyin: "Tā jì cōngming yòu qínfèn.", de: "Sie ist sowohl klug als auch fleißig." },
            { cn: "这份工作既有趣又有挑战性。", pinyin: "Zhè fèn gōngzuò jì yǒuqù yòu yǒu tiǎozhànxìng.", de: "Diese Arbeit ist sowohl interessant als auch herausfordernd." },
            { cn: "他既会说中文，又会说日语。", pinyin: "Tā jì huì shuō Zhōngwén, yòu huì shuō Rìyǔ.", de: "Er kann sowohl Chinesisch als auch Japanisch sprechen." }
          ],
          tip: "既...又 wird oft mit 也 statt 又 kombiniert: 既便宜也好吃. Beide Varianten sind korrekt, 又 ist aber häufiger. In formellen Texten findest du auch 既...且."
        },
        {
          heading: "又A又B — gleichzeitig A und B",
          text: "<strong>又...又</strong> betont, dass zwei Handlungen oder Zustände <em>gleichzeitig stattfinden</em>. Es wird oft für lebhafte Beschreibungen verwendet — jemand macht gleichzeitig zwei Dinge oder befindet sich in zwei Zuständen.",
          examples: [
            { cn: "孩子们又唱又跳。", pinyin: "Háizimen yòu chàng yòu tiào.", de: "Die Kinder singen und tanzen gleichzeitig." },
            { cn: "她又哭又笑。", pinyin: "Tā yòu kū yòu xiào.", de: "Sie weint und lacht gleichzeitig." },
            { cn: "他又饿又渴。", pinyin: "Tā yòu è yòu kě.", de: "Er ist gleichzeitig hungrig und durstig." },
            { cn: "外面又刮风又下雨。", pinyin: "Wàimian yòu guāfēng yòu xià yǔ.", de: "Draußen ist es gleichzeitig windig und regnerisch." }
          ],
          tip: "又...又 hat oft eine <strong>lebhafte, beschreibende</strong> Qualität. Es malt ein Bild von gleichzeitigen Aktionen oder Zuständen. 既...又 ist dagegen eher <strong>sachlich-aufzählend</strong>."
        },
        {
          heading: "也A也B — auch A auch B",
          text: "<strong>也...也</strong> drückt aus, dass <em>beide Optionen</em> zutreffen oder gelten. Es wird oft bei Wahlsituationen benutzt, in denen man zeigen will, dass beides möglich oder zutreffend ist.",
          examples: [
            { cn: "茶也行，咖啡也行。", pinyin: "Chá yě xíng, kāfēi yě xíng.", de: "Tee geht auch, Kaffee geht auch." },
            { cn: "他也不喝酒，也不抽烟。", pinyin: "Tā yě bù hējiǔ, yě bù chōuyān.", de: "Er trinkt auch nicht und raucht auch nicht." },
            { cn: "我也想去北京，也想去上海。", pinyin: "Wǒ yě xiǎng qù Běijīng, yě xiǎng qù Shànghǎi.", de: "Ich will sowohl nach Peking als auch nach Shanghai." }
          ],
          tip: "Im verneinten Kontext wirkt 也...也 besonders stark: 也不A，也不B = „weder A noch B\". Das ist eine nützliche Wendung für den Alltag!"
        },
        {
          heading: "Unterschiede und Gebrauch",
          text: "Zusammengefasst: <strong>既...又</strong> ist eher formell und sachlich, <strong>又...又</strong> ist lebhaft und beschreibend, <strong>也...也</strong> betont, dass beides zutrifft oder möglich ist. Alle drei übersetzen sich oft als „sowohl...als auch\", aber der Kontext entscheidet.",
          examples: [
            { cn: "她既漂亮又善良。", pinyin: "Tā jì piàoliang yòu shànliáng.", de: "Sie ist sowohl hübsch als auch gutherzig. (Sachliche Feststellung)" },
            { cn: "大家又吃又喝，非常开心。", pinyin: "Dàjiā yòu chī yòu hē, fēicháng kāixīn.", de: "Alle aßen und tranken, es war sehr fröhlich. (Lebhafte Szene)" },
            { cn: "周末也可以，工作日也可以。", pinyin: "Zhōumò yě kěyǐ, gōngzuòrì yě kěyǐ.", de: "Am Wochenende geht es auch, an Werktagen auch. (Beide Optionen)" }
          ],
          tip: "既...又 klingt sachlich und eher schriftlich; für eine lebhafte Szene mit Handlungen nimmt man 又...又: 她又唱又跳."
        }
      ]
    },
    // ── Lektion 44: 不管...都 & 无论...都 ─────────────────────────────────────
    {
      id: 'lesson-44',
      number: 44,
      title: "不管...都 & 无论...都",
      subtitle: "Egal was/wer/wie — Konzessivsätze",
      level: 'HSK4',
      grammarIds: ["g:不管……，都/也……","g:无论……，都/也……","g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词"],
      intro: "Manchmal will man ausdrücken, dass etwas <em>unter allen Umständen</em> gilt — egal, was passiert. Genau dafür gibt es <strong>不管...都</strong> und <strong>无论...都</strong>. Beide bedeuten „egal ob/was/wer/wie... trotzdem/immer...\". Der Unterschied: 不管 ist alltäglicher, 无论 formeller. Diese Struktur wird mit <strong>Fragewörtern</strong> oder <strong>Alternativen</strong> kombiniert und ist ein Muss für HSK4.",
      sections: [
        {
          heading: "不管 + Fragewort + 都 — Grundstruktur",
          text: "Die Grundformel: <strong>不管 + Fragewort/Alternative + 都/也</strong>. Das Fragewort (谁, 什么, 怎么, 哪儿, 多...) macht die Aussage universell: „Egal wer/was/wie...\".",
          examples: [
            { cn: "不管你怎么说，我都不同意。", pinyin: "Bùguǎn nǐ zěnme shuō, wǒ dōu bù tóngyì.", de: "Egal was du sagst, ich bin nicht einverstanden." },
            { cn: "不管谁来，我都欢迎。", pinyin: "Bùguǎn shéi lái, wǒ dōu huānyíng.", de: "Egal wer kommt, ich heiße alle willkommen." },
            { cn: "不管去哪儿，我都跟你去。", pinyin: "Bùguǎn qù nǎr, wǒ dōu gēn nǐ qù.", de: "Egal wohin du gehst, ich gehe mit." },
            { cn: "不管多贵，我都要买。", pinyin: "Bùguǎn duō guì, wǒ dōu yào mǎi.", de: "Egal wie teuer, ich will es kaufen." }
          ],
          tip: "不管 + 多 + Adjektiv ist eine besonders nützliche Kombination: 不管多忙 (egal wie beschäftigt), 不管多远 (egal wie weit), 不管多难 (egal wie schwer)."
        },
        {
          heading: "不管 + A还是B + 都 — Alternativen",
          text: "不管 kann auch mit <strong>Alternativen</strong> kombiniert werden: 不管 A 还是 B，都... = „Egal ob A oder B, in jedem Fall...\"",
          examples: [
            { cn: "不管刮风还是下雨，他都去跑步。", pinyin: "Bùguǎn guāfēng háishi xià yǔ, tā dōu qù pǎobù.", de: "Egal ob es windig oder regnerisch ist, er geht joggen." },
            { cn: "不管你来还是不来，会议都会开。", pinyin: "Bùguǎn nǐ lái háishi bù lái, huìyì dōu huì kāi.", de: "Egal ob du kommst oder nicht, die Besprechung findet statt." },
            { cn: "不管是大人还是小孩，都喜欢这个节目。", pinyin: "Bùguǎn shì dàrén háishi xiǎohái, dōu xǐhuan zhège jiémù.", de: "Egal ob Erwachsene oder Kinder, alle mögen diese Sendung." }
          ],
          tip: "Bei Alternativen steht oft 还是 (oder) zwischen den beiden Optionen. Das 是 vor den Alternativen ist optional, wird aber in formelleren Sätzen oft eingefügt."
        },
        {
          heading: "无论...都 — formelle Variante",
          text: "<strong>无论</strong> ist die gehobenere Version von 不管 und wird in Schriftsprache, Reden und formellen Kontexten bevorzugt. Die Grammatik ist identisch.",
          examples: [
            { cn: "无论发生什么事，我们都不放弃。", pinyin: "Wúlùn fāshēng shénme shì, wǒmen dōu bú fàngqì.", de: "Was auch immer geschieht, wir geben nicht auf." },
            { cn: "无论结果如何，我都会接受。", pinyin: "Wúlùn jiéguǒ rúhé, wǒ dōu huì jiēshòu.", de: "Wie auch immer das Ergebnis ausfällt, ich werde es akzeptieren." },
            { cn: "无论走到哪里，都不要忘记家乡。", pinyin: "Wúlùn zǒu dào nǎlǐ, dōu bú yào wàngjì jiāxiāng.", de: "Wohin du auch gehst, vergiss nie deine Heimat." },
            { cn: "无论多么困难，我们都要坚持下去。", pinyin: "Wúlùn duōme kùnnan, wǒmen dōu yào jiānchí xiàqu.", de: "Wie schwierig es auch sein mag, wir müssen durchhalten." }
          ],
          tip: "In der HSK-Prüfung erscheinen 无论 und 不管 oft nebeneinander als Auswahloptionen. Denk dran: 无论 = formell/schriftlich, 不管 = alltäglich/mündlich. In der Bedeutung sind sie <strong>identisch</strong>."
        },
        {
          heading: "不论 und weitere Varianten",
          text: "<strong>不论</strong> ist eine dritte Variante, die zwischen 不管 und 无论 steht — etwas formeller als 不管, aber nicht ganz so gehoben wie 无论. Alle drei werden mit 都 oder 也 im Hauptsatz kombiniert.",
          examples: [
            { cn: "不论你做什么决定，我都支持你。", pinyin: "Búlùn nǐ zuò shénme juédìng, wǒ dōu zhīchí nǐ.", de: "Welche Entscheidung du auch triffst, ich unterstütze dich." },
            { cn: "不论成功还是失败，经验都很重要。", pinyin: "Búlùn chénggōng háishi shībài, jīngyàn dōu hěn zhòngyào.", de: "Ob Erfolg oder Misserfolg, die Erfahrung ist immer wertvoll." },
            { cn: "不论天气怎样，比赛都会进行。", pinyin: "Búlùn tiānqì zěnyàng, bǐsài dōu huì jìnxíng.", de: "Egal wie das Wetter ist, der Wettkampf findet statt." }
          ],
          tip: "Alle drei Formen (不管/无论/不论) verlangen <strong>都</strong> oder <strong>也</strong> im Hauptsatz. Vergiss 都 nicht! ❌ 不管你怎么说，我不同意 → ✅ 不管你怎么说，我<strong>都</strong>不同意."
        }
      ]
    },
    // ── Lektion 45: 与其...不如 & 宁可...也 ────────────────────────────────────
    {
      id: 'lesson-45',
      number: 45,
      title: "与其...不如 & 宁可...也",
      subtitle: "Lieber A als B — Präferenzen ausdrücken",
      level: 'HSK7-9',
      grammarIds: ["g:宁可/宁愿……，也不……","g:与其……，宁愿/宁可……","g:A不如B（+形容词）","g:与其说…不如说…","g:倒不如"],
      intro: "与其...不如 und 宁可...也 drücken beide eine <strong>Präferenz</strong> aus — man bevorzugt eine Option gegenüber einer anderen. Aber Vorsicht: Die <em>Reihenfolge</em> ist tückisch! Bei <strong>与其A不如B</strong> wird B bevorzugt (= „statt A lieber B\"). Bei <strong>宁可A也不B</strong> wird A bevorzugt, auch wenn es einen Nachteil hat (= „lieber A, auch wenn... als B\"). Deutsche Lernende stolpern hier oft, weil die Struktur genau umgekehrt erscheint. Aber mit etwas Übung wird es schnell intuitiv.",
      sections: [
        {
          heading: "与其A不如B — lieber B als A",
          text: "<strong>与其</strong> leitet die <em>abgelehnte</em> Option ein, <strong>不如</strong> leitet die <em>bevorzugte</em> Option ein. Auf Deutsch: „Statt A, ist es besser B.\" Die bevorzugte Wahl steht also im <em>zweiten</em> Teil.",
          examples: [
            { cn: "与其等他，不如自己先去。", pinyin: "Yǔqí děng tā, bùrú zìjǐ xiān qù.", de: "Statt auf ihn zu warten, gehe ich lieber zuerst selbst." },
            { cn: "与其在家无聊，不如出去走走。", pinyin: "Yǔqí zài jiā wúliáo, bùrú chūqu zǒuzou.", de: "Statt sich zu Hause zu langweilen, geht man lieber raus spazieren." },
            { cn: "与其看电视，不如看书。", pinyin: "Yǔqí kàn diànshì, bùrú kànshū.", de: "Statt fernzusehen, liest man lieber ein Buch." },
            { cn: "与其抱怨，不如想办法解决问题。", pinyin: "Yǔqí bàoyuàn, bùrú xiǎng bànfǎ jiějué wèntí.", de: "Statt sich zu beschweren, sucht man lieber eine Lösung." }
          ],
          tip: "Merke dir: 与其 = „statt\" (die schlechtere Option). 不如 = „lieber / besser\" (die bevorzugte Option). Die <strong>bevorzugte Wahl kommt nach 不如</strong>."
        },
        {
          heading: "宁可A也不B — lieber A als B, auch wenn...",
          text: "<strong>宁可</strong> (oder 宁愿) leitet die <em>bevorzugte</em> Option ein, <strong>也不/也要</strong> verbindet sie mit der abgelehnten Option oder dem akzeptierten Nachteil. Diese Struktur drückt eine <em>entschlossene</em> Präferenz aus, oft trotz Widrigkeiten.",
          examples: [
            { cn: "我宁可走路，也不坐公交车。", pinyin: "Wǒ nìngkě zǒulù, yě bú zuò gōngjiāochē.", de: "Ich gehe lieber zu Fuß, als den Bus zu nehmen." },
            { cn: "她宁可不吃饭，也不迟到。", pinyin: "Tā nìngkě bù chīfàn, yě bù chídào.", de: "Sie verzichtet lieber aufs Essen, als zu spät zu kommen." },
            { cn: "他宁愿一个人住，也不跟别人合租。", pinyin: "Tā nìngyuàn yí ge rén zhù, yě bù gēn biérén hézū.", de: "Er wohnt lieber allein, als mit anderen zusammen zu wohnen." },
            { cn: "我宁可多花点钱，也要买好的。", pinyin: "Wǒ nìngkě duō huā diǎn qián, yě yào mǎi hǎo de.", de: "Ich gebe lieber etwas mehr Geld aus und kaufe dafür etwas Gutes." }
          ],
          tip: "Bei 宁可 steht die <strong>bevorzugte</strong> Option direkt danach — also genau umgekehrt zu 与其! 宁可 drückt oft eine <strong>starke Entschlossenheit</strong> aus: „Komme, was wolle — ich mache lieber X!\""
        },
        {
          heading: "Achtung: umgekehrte Reihenfolge!",
          text: "Der größte Stolperstein für deutsche Lernende: Bei <strong>与其...不如</strong> kommt die abgelehnte Option <em>zuerst</em>, bei <strong>宁可...也不</strong> kommt die bevorzugte Option <em>zuerst</em>. Vergleiche:",
          examples: [
            { cn: "与其坐飞机，不如坐火车。", pinyin: "Yǔqí zuò fēijī, bùrú zuò huǒchē.", de: "Statt zu fliegen, nimmt man lieber den Zug. (Bevorzugt: Zug)" },
            { cn: "宁可坐火车，也不坐飞机。", pinyin: "Nìngkě zuò huǒchē, yě bú zuò fēijī.", de: "Ich nehme lieber den Zug, als zu fliegen. (Bevorzugt: Zug)" },
            { cn: "与其花时间抱怨，不如花时间学习。", pinyin: "Yǔqí huā shíjiān bàoyuàn, bùrú huā shíjiān xuéxí.", de: "Statt die Zeit mit Klagen zu verbringen, nutzt man sie lieber zum Lernen." },
            { cn: "宁可辛苦一点，也不要放弃。", pinyin: "Nìngkě xīnkǔ yìdiǎn, yě bú yào fàngqì.", de: "Lieber etwas mehr Mühe auf sich nehmen, als aufzugeben." }
          ],
          tip: "Eselsbrücke: <strong>与其</strong> beginnt mit der Option, die man <em>verwirft</em> (与其 ≈ „statt …\": „statt das zu tun...\"). <strong>宁可</strong> beginnt mit der Option, die man <em>wählt</em> (宁 = „lieber\" → „ich mache lieber...\")."
        },
        {
          heading: "Formell vs. umgangssprachlich",
          text: "<strong>与其...不如</strong> klingt relativ <em>neutral bis formell</em> und wird sowohl mündlich als auch schriftlich verwendet. <strong>宁可/宁愿...也</strong> klingt <em>emotional und entschlossen</em> und taucht oft in Reden, Argumenten und dramatischen Aussagen auf.",
          examples: [
            { cn: "与其后悔，不如现在就行动。", pinyin: "Yǔqí hòuhuǐ, bùrú xiànzài jiù xíngdòng.", de: "Statt es zu bereuen, handelt man lieber jetzt sofort. (Neutral/rational)" },
            { cn: "我宁愿饿死，也不吃这个！", pinyin: "Wǒ nìngyuàn è sǐ, yě bù chī zhège!", de: "Lieber verhungere ich, als das zu essen! (Emotional/dramatisch)" },
            { cn: "与其花时间担心，不如做好准备。", pinyin: "Yǔqí huā shíjiān dānxīn, bùrú zuòhǎo zhǔnbèi.", de: "Statt sich Sorgen zu machen, bereitet man sich lieber gut vor." },
            { cn: "他宁可失去工作，也不愿意说谎。", pinyin: "Tā nìngkě shīqù gōngzuò, yě bú yuànyì shuōhuǎng.", de: "Er verliert lieber seinen Job, als zu lügen." }
          ],
          tip: "不如 kann auch allein stehen und bedeutet dann „es ist besser zu...\" oder „nicht so gut wie\": 你不如自己去 (Du gehst besser selbst). 他不如我高 (Er ist nicht so groß wie ich). Verwandt sind 倒不如 („da wäre es doch besser …“: 等他，倒不如自己去) und 与其说……不如说…… („weniger … als vielmehr …“: 与其说他聪明，不如说他努力)."
        }
      ]
    },
    // ── 假如, 万一, 一旦, 哪怕 — falls, sobald, selbst wenn (lesson-60) ──────────
    {
      id: 'lesson-60',
      number: 60,
      title: "假如, 万一, 一旦, 哪怕 — falls, sobald, selbst wenn",
      subtitle: "Gedachte, befürchtete und einschneidende Bedingungen",
      level: 'HSK5',
      grammarIds: ["g:假如……，（就）……","g:万一……，（就）……","g:一旦……，就……","g:一旦","g:哪怕……，也……","g:……，要不然/不然……"],
      intro: "Mit 如果 und 要是 kannst du schon Bedingungen ausdrücken (siehe [[lesson:lesson-30]]). Auf dieser Stufe lernst du Bindewörter, die zusätzlich eine <strong>Haltung</strong> zur Bedingung zeigen: <strong>假如</strong> (jiǎrú) ist das gehobene „angenommen“, gut für gedachte Fälle; <strong>万一</strong> (wànyī) nennt ein unwahrscheinliches, aber unerwünschtes Risiko; <strong>一旦</strong> (yídàn) betont den Moment, in dem etwas eintritt, und die Tragweite der Folge; <strong>哪怕</strong> (nǎpà) räumt einen Extremfall ein – „selbst wenn“. Dazu kommt <strong>要不然/不然</strong> „sonst“, das die Folge nennt, wenn etwas <em>nicht</em> geschieht. Das Deutsche drückt solche Nuancen oft mit dem Konjunktiv oder mit Partikeln wie „doch“ und „erst einmal“ aus; im Chinesischen bleibt das Verb unverändert, die Nuance steckt im Bindewort.",
      sections: [
        {
          heading: "假如……，（就）…… — angenommen, wenn",
          text: "<strong>假如</strong> leitet eine Annahme ein, der zweite Teil nennt die Folge, oft mit <strong>就</strong>. 就 kann fehlen, besonders wenn der zweite Teil ein eigenes Subjekt oder ein Modalverb wie 会 hat. 假如 klingt gehobener als 如果 und 要是 und ist vor allem schriftlich. Es passt gut für rein gedachte oder irreale Fälle („wenn ich … wäre“), kann aber auch reale Bedingungen einleiten. Ob ein Fall real oder irreal ist, zeigt nur der Zusammenhang – im Deutschen wählst du dann Indikativ oder Konjunktiv.",
          examples: [
            { cn: "假如你有一百万，你会做什么？", pinyin: "Jiǎrú nǐ yǒu yìbǎi wàn, nǐ huì zuò shénme?", de: "Wenn du eine Million hättest, was würdest du tun? (gedachter Fall)" },
            { cn: "假如时间能倒流，我会选择另一条路。", pinyin: "Jiǎrú shíjiān néng dàoliú, wǒ huì xuǎnzé lìng yì tiáo lù.", de: "Könnte man die Zeit zurückdrehen, würde ich einen anderen Weg wählen." },
            { cn: "假如明天不下雨，我们就去爬山。", pinyin: "Jiǎrú míngtiān bú xià yǔ, wǒmen jiù qù páshān.", de: "Falls es morgen nicht regnet, gehen wir wandern. (reale Bedingung)" },
            { cn: "假如没有手机，我们的生活会怎么样？", pinyin: "Jiǎrú méiyǒu shǒujī, wǒmen de shēnghuó huì zěnmeyàng?", de: "Wie sähe unser Leben aus, wenn es keine Handys gäbe?" }
          ],
          tip: "Im Gespräch klingt 假如 schnell etwas förmlich. Für alltägliche Bedingungen sind 如果 und 要是 natürlicher; 假如 lohnt sich bei Gedankenspielen, in Aufsätzen und Reden."
        },
        {
          heading: "万一……，（就）…… — falls doch, für den Fall, dass",
          text: "<strong>万一</strong> heißt wörtlich „eins zu zehntausend“: Der Fall ist unwahrscheinlich, aber unerwünscht. Der zweite Teil nennt die Folge, oft mit 就, oder fragt, was dann zu tun ist. Sehr häufig begründet der Satz eine <em>Vorsichtsmaßnahme</em>. Der Teil mit 万一 kann auch nachgestellt werden, gern mit 呢 am Ende. 万一 ist in gesprochener wie geschriebener Sprache üblich.",
          examples: [
            { cn: "万一飞机晚点，我们就坐高铁去。", pinyin: "Wànyī fēijī wǎndiǎn, wǒmen jiù zuò gāotiě qù.", de: "Sollte der Flug Verspätung haben, nehmen wir den Schnellzug." },
            { cn: "万一找不到路，你就给我打电话。", pinyin: "Wànyī zhǎo bu dào lù, nǐ jiù gěi wǒ dǎ diànhuà.", de: "Falls du den Weg doch nicht findest, ruf mich an." },
            { cn: "出门前检查一下护照，万一忘带就麻烦了。", pinyin: "Chūmén qián jiǎnchá yíxià hùzhào, wànyī wàng dài jiù máfan le.", de: "Kontrollier vor dem Losgehen deinen Pass – falls du ihn vergisst, wird es unangenehm." },
            { cn: "把重要的文件备份一下吧，万一电脑坏了呢？", pinyin: "Bǎ zhòngyào de wénjiàn bèifèn yíxià ba, wànyī diànnǎo huài le ne?", de: "Mach lieber eine Sicherung der wichtigen Dateien – was, wenn der Computer kaputtgeht?" }
          ],
          tip: "Für erwünschte oder neutrale Annahmen passt 万一 meist nicht: ❌ 万一明天天气好，我们去公园吧。 → ✅ 要是明天天气好，我们去公园吧。 Als Nomen steckt es in 以防万一 „für alle Fälle“."
        },
        {
          heading: "一旦……，就…… — sobald einmal, wenn erst einmal",
          text: "<strong>一旦</strong> nennt ein Ereignis, das noch nicht eingetreten oder ungewiss ist; der zweite Teil mit <strong>就</strong> – schriftlich auch <strong>便</strong> – beschreibt die Folge, die dann eintritt. Oft geht es um Wichtiges oder Unerwünschtes, dessen Folgen sich schwer rückgängig machen lassen: Warnungen, Risiken, Entscheidungen. 一旦 kann vor oder nach dem Subjekt stehen. Anders als 万一 betont es nicht die geringe Wahrscheinlichkeit, sondern den Moment des Eintretens. Für ganz Unwirkliches („wenn ich ein Vogel wäre“) passt es nicht.",
          examples: [
            { cn: "一旦开始，就不能停下来。", pinyin: "Yídàn kāishǐ, jiù bù néng tíng xiàlai.", de: "Hat man einmal angefangen, kann man nicht mehr aufhören." },
            { cn: "你一旦答应了别人，就要做到。", pinyin: "Nǐ yídàn dāying le biérén, jiù yào zuòdào.", de: "Hast du jemandem etwas versprochen, musst du es auch halten." },
            { cn: "一旦发生火灾，就要马上离开大楼。", pinyin: "Yídàn fāshēng huǒzāi, jiù yào mǎshàng líkāi dàlóu.", de: "Bricht ein Feuer aus, muss man das Gebäude sofort verlassen." },
            { cn: "密码一旦忘了，便很难找回来。", pinyin: "Mìmǎ yídàn wàng le, biàn hěn nán zhǎo huílai.", de: "Hat man das Passwort erst einmal vergessen, bekommt man es nur schwer zurück. (便 = schriftliches 就)" }
          ],
          tip: "Nicht verwechseln mit 一……就……: 我一到家就给你打电话 „sobald ich zu Hause bin, rufe ich dich an“ beschreibt eine unmittelbare Abfolge, auch bei Gewohnheiten. 一旦 spricht von einer möglichen Situation und ihren (oft ernsten) Folgen."
        },
        {
          heading: "哪怕……，也…… — selbst wenn",
          text: "<strong>哪怕</strong> nennt eine Annahme, oft einen extremen oder ungünstigen Fall; der zweite Teil mit <strong>也</strong> sagt, dass das Ergebnis trotzdem gilt. So zeigst du Entschlossenheit oder Nachdruck. Im ersten Teil stehen häufig 只 („nur“) oder 再 („noch so“). 哪怕 bedeutet dasselbe wie 即使 (jíshǐ), wirkt aber lebhafter und etwas umgangssprachlicher. Wichtig: 哪怕 ist kein „obwohl“ – es nennt in der Regel keine Tatsache, sondern eine Annahme.",
          examples: [
            { cn: "哪怕只剩下十分钟，我们也要试试。", pinyin: "Nǎpà zhǐ shèngxià shí fēnzhōng, wǒmen yě yào shìshi.", de: "Selbst wenn nur noch zehn Minuten bleiben, wollen wir es versuchen." },
            { cn: "哪怕再累，她也坚持每天跑步。", pinyin: "Nǎpà zài lèi, tā yě jiānchí měitiān pǎobù.", de: "Wie müde sie auch ist, sie geht jeden Tag laufen." },
            { cn: "哪怕下大雨，比赛也照常进行。", pinyin: "Nǎpà xià dà yǔ, bǐsài yě zhàocháng jìnxíng.", de: "Selbst bei starkem Regen findet das Spiel wie geplant statt." },
            { cn: "❌ 哪怕他很聪明，但是他不努力。", pinyin: "", de: "Falsch: Hier wird eine Tatsache eingeräumt („obwohl“), und 但是 passt nicht zu 哪怕." },
            { cn: "✅ 虽然他很聪明，但是他不努力。", pinyin: "Suīrán tā hěn cōngming, dànshì tā bù nǔlì.", de: "Er ist zwar klug, aber er strengt sich nicht an." }
          ],
          tip: "Merkhilfe: 哪怕 + 也 = „selbst wenn …, trotzdem …“ (Annahme); 虽然 + 但是 = „obwohl …, aber …“ (Tatsache)."
        },
        {
          heading: "……，要不然/不然…… — sonst, andernfalls",
          text: "<strong>要不然</strong> und das kürzere <strong>不然</strong> nennen, was passiert, wenn das zuvor Gesagte <em>nicht</em> geschieht. Der erste Teil ist oft eine Aufforderung, ein Rat oder eine Notwendigkeit (快点儿, 你最好……, 我得……); der zweite nennt die meist unangenehme Folge, häufig mit 就, 会 oder 可能. Beide Formen sind umgangssprachlich und bedeuten dasselbe wie das gehobene 否则 (fǒuzé). „Sonst“ steht am Anfang des zweiten Teils und bezieht sich auf den ersten. 要不然 kann außerdem eine Alternative vorschlagen: „oder (wie wär's) …“.",
          examples: [
            { cn: "你最好提前出发，要不然路上会堵车。", pinyin: "Nǐ zuìhǎo tíqián chūfā, yàobùrán lùshang huì dǔchē.", de: "Fahr lieber früher los, sonst gerätst du in den Stau." },
            { cn: "记得带钥匙，不然又进不了门了。", pinyin: "Jìde dài yàoshi, bùrán yòu jìn bu liǎo mén le.", de: "Denk an den Schlüssel, sonst kommst du wieder nicht rein." },
            { cn: "我得赶紧把报告写完，不然老板会生气的。", pinyin: "Wǒ děi gǎnjǐn bǎ bàogào xiěwán, bùrán lǎobǎn huì shēngqì de.", de: "Ich muss den Bericht schnell fertig schreiben, sonst wird die Chefin oder der Chef sauer." },
            { cn: "公交车太慢了，要不然我们打车吧。", pinyin: "Gōngjiāochē tài màn le, yàobùrán wǒmen dǎchē ba.", de: "Der Bus ist zu langsam – wie wär's, wir nehmen ein Taxi? (Vorschlag einer Alternative)" }
          ],
          tip: "Im Überblick: 假如 = neutrale, gehobene Annahme; 万一 = unwahrscheinliches Risiko; 一旦 = sobald es eintritt, mit Tragweite; 哪怕 = selbst im Extremfall; 要不然/不然 = sonst."
        }
      ]
    },
    // ── 没有……就没有, 不……不……, 再……也 — knappe Sätze ohne Bindewort (lesson-61) ──────────
    {
      id: 'lesson-61',
      number: 61,
      title: "没有……就没有, 不……不……, 再……也 — knappe Sätze ohne Bindewort",
      subtitle: "Zusammengezogene Satzgefüge (紧缩复句)",
      level: 'HSK5',
      grammarIds: ["g:没有……就没有……","g:不……不……","g:再……也……","g:连动句3：前后两个动词性词语具有因果、转折、条件关系"],
      intro: "Chinesisch kann zwei Teilsätze so eng zusammenziehen, dass weder Bindewort noch Pause dazwischen bleibt. Solche <strong>zusammengezogenen Satzgefüge</strong> (紧缩复句, jǐnsuō fùjù) sind kurz, rhythmisch und begegnen dir in Sprichwörtern, Werbesprüchen und im Alltag: <strong>没有付出就没有收获</strong> „ohne Fleiß kein Preis“, <strong>不见不散</strong> „wir warten aufeinander, bis wir uns treffen“, <strong>再忙也要吃饭</strong> „so beschäftigt man auch ist, essen muss man“. In dieser Lektion lernst du drei feste Rahmen und dazu Serienverbsätze, in denen zwei Verbgruppen ganz ohne Bindewort Grund, Gegensatz oder Bedingung ausdrücken. Das Deutsche kennt solche Kurzformen vor allem aus Redensarten („ohne Fleiß kein Preis“); im Chinesischen sind sie ein lebendiges Muster, das du selbst bilden kannst.",
      sections: [
        {
          heading: "没有 A 就没有 B — ohne A kein B",
          text: "Beide Teile beginnen mit <strong>没有</strong> „es gibt nicht“; dahinter steht jeweils ein Nomen oder eine Nominalgruppe. A ist die unverzichtbare Voraussetzung für B. Das Muster klingt allgemeingültig und wird gern für Grundsätze, Lebensweisheiten und Dank verwendet, etwa in Reden. Bei längeren Teilen kann ein Komma stehen. <strong>就</strong> gehört fest dazu, und 不 kann 没有 hier nicht ersetzen, weil es um das Vorhandensein von etwas geht. Die positive Entsprechung ist 只有……才…… (siehe [[lesson:lesson-40]]).",
          examples: [
            { cn: "没有水就没有生命。", pinyin: "Méiyǒu shuǐ jiù méiyǒu shēngmìng.", de: "Ohne Wasser kein Leben." },
            { cn: "没有交流就没有理解。", pinyin: "Méiyǒu jiāoliú jiù méiyǒu lǐjiě.", de: "Ohne Austausch kein Verständnis." },
            { cn: "没有父母的支持就没有我的今天。", pinyin: "Méiyǒu fùmǔ de zhīchí jiù méiyǒu wǒ de jīntiān.", de: "Ohne die Unterstützung meiner Eltern wäre ich heute nicht da, wo ich bin." },
            { cn: "没有大家的努力，就没有这次活动的成功。", pinyin: "Méiyǒu dàjiā de nǔlì, jiù méiyǒu zhè cì huódòng de chénggōng.", de: "Ohne den Einsatz aller wäre diese Veranstaltung kein Erfolg geworden. (längere Teile, mit Komma)" }
          ],
          tip: "Typisch für Dankesreden: 没有……就没有我的今天 „ohne … wäre ich nicht, wo ich heute bin“."
        },
        {
          heading: "不 A 不 B — wenn nicht A, dann nicht B",
          text: "Zwei verneinte Teile stehen ohne Bindewort und meist ohne Komma hintereinander: B geschieht nur, wenn A erfüllt ist. Bekannte feste Wendungen sind <strong>不见不散</strong> und 不打不相识 „erst der Streit hat uns zusammengebracht“. Mit <strong>不到</strong> + Zeitpunkt heißt das Muster „nicht vor …“. <strong>不……不行</strong> ist eine doppelte Verneinung: „ohne … geht es nicht“ = „man muss unbedingt …“. Achte auf den Ton: 不 wird vor einem vierten Ton zu bú.",
          examples: [
            { cn: "咱们明天八点在门口见，不见不散！", pinyin: "Zánmen míngtiān bā diǎn zài ménkǒu jiàn, bú jiàn bú sàn!", de: "Wir treffen uns morgen um acht am Eingang – wer zuerst da ist, wartet!" },
            { cn: "我儿子不写完作业不睡觉。", pinyin: "Wǒ érzi bù xiěwán zuòyè bú shuìjiào.", de: "Mein Sohn geht erst ins Bett, wenn er seine Hausaufgaben fertig hat." },
            { cn: "她不到最后一分钟不交卷。", pinyin: "Tā bú dào zuìhòu yì fēnzhōng bù jiāojuàn.", de: "Sie gibt ihre Prüfung nie vor der letzten Minute ab." },
            { cn: "这个病不做手术不行。", pinyin: "Zhège bìng bú zuò shǒushù bùxíng.", de: "Bei dieser Krankheit führt an einer Operation kein Weg vorbei." }
          ],
          tip: "Nicht jedes 不……不…… ist eine Bedingung: 不冷不热 „weder kalt noch heiß“ oder 不多不少 „genau richtig“ beschreiben ein Mittelmaß. Und bei 不……也…… (不去也行 „man muss auch nicht hingehen“) tritt B trotzdem ein."
        },
        {
          heading: "再……也…… — egal wie sehr, trotzdem",
          text: "Hier bedeutet <strong>再</strong> nicht „wieder“, sondern „noch so (sehr)“ und treibt den Grad ins Extreme; <strong>也</strong> sagt, dass das Ergebnis trotzdem gilt. Nach 再 steht meist ein Adjektiv oder Verb; mit 怎么 wird daraus „wie sehr auch immer“. Das Subjekt kann vor 再 oder vor 也 stehen. Umgangssprachlich steht statt 也 oft 都. Der zweite Teil drückt häufig einen festen Entschluss, eine Pflicht oder eine Unmöglichkeit aus. Mit 哪怕 davor wird der Satz noch nachdrücklicher (siehe [[lesson:lesson-60]]).",
          examples: [
            { cn: "再忙也要注意身体。", pinyin: "Zài máng yě yào zhùyì shēntǐ.", de: "So beschäftigt man auch ist, man muss auf seine Gesundheit achten." },
            { cn: "这道题再难，我也要做出来。", pinyin: "Zhè dào tí zài nán, wǒ yě yào zuò chūlai.", de: "Und wäre die Aufgabe noch so schwer, ich will sie lösen." },
            { cn: "你再怎么劝，她也不会改变主意的。", pinyin: "Nǐ zài zěnme quàn, tā yě bú huì gǎibiàn zhǔyi de.", de: "Wie sehr du ihr auch zuredest, sie wird ihre Meinung nicht ändern." },
            { cn: "这个包再贵我都要买。", pinyin: "Zhège bāo zài guì wǒ dōu yào mǎi.", de: "Und wäre die Tasche noch so teuer – ich kaufe sie. (都 statt 也, umgangssprachlich)" }
          ],
          tip: "Nicht verwechseln mit 再……就……: 再等下去就来不及了 „wenn wir noch länger warten, ist es zu spät“ – dort folgt eine Konsequenz, keine Einräumung. Allgemeines „egal was/wie“ mit Fragewort drückt 不管……都 aus (siehe [[lesson:lesson-44]])."
        },
        {
          heading: "Serienverbsätze: Grund, Gegensatz, Bedingung ohne Bindewort",
          text: "Im Serienverbsatz (连动句) teilen sich zwei Verbgruppen ein Subjekt. Bisher kennst du Zweck (去商店买东西) und Mittel (坐地铁去). Dazu kommen drei Beziehungen, die du nur aus dem Inhalt erschließt: <strong>Grund und Folge</strong> (她发烧请假了), <strong>Gegensatz</strong> (有话不说) und <strong>Bedingung</strong> (有困难找警察). Oft ist die erste Gruppe ein Ausdruck mit 有 oder ein Zustand, die zweite ist häufig verneint. Solche Sätze sind knapp und eher gesprochen; ausführlicher macht man die Beziehung mit 因为……所以, 却 oder 就 deutlich. Zu Verbpaaren mit 着 siehe [[lesson:lesson-10]].",
          examples: [
            { cn: "她发烧请假了。", pinyin: "Tā fāshāo qǐngjià le.", de: "Sie hatte Fieber und hat sich deshalb freigenommen. (Grund und Folge)" },
            { cn: "孩子摔倒哭了。", pinyin: "Háizi shuāidǎo kū le.", de: "Das Kind ist hingefallen und weint. (Grund und Folge)" },
            { cn: "你有话不说，大家怎么知道？", pinyin: "Nǐ yǒu huà bù shuō, dàjiā zěnme zhīdào?", de: "Du hast etwas auf dem Herzen und sagst es nicht – woher sollen die anderen das wissen? (Gegensatz)" },
            { cn: "有困难找警察。", pinyin: "Yǒu kùnnan zhǎo jǐngchá.", de: "Bei Problemen wende dich an die Polizei. (Bedingung)" }
          ],
          tip: "Zum Verstehen hilft es, das fehlende Bindewort im Kopf zu ergänzen: 她（因为）发烧（所以）请假了 · 你有话（却）不说 · （如果）有困难（就）找警察."
        }
      ]
    },
    // ── 反而, 居然, 果然 — wider Erwarten und wie erwartet (lesson-62) ──────────
    {
      id: 'lesson-62',
      number: 62,
      title: "反而, 居然, 果然 — wider Erwarten und wie erwartet",
      subtitle: "Erwartung umgekehrt, überrascht oder bestätigt",
      level: 'HSK5',
      grammarIds: ["g:反而","g:不但不/不但没有……，反而……","g:居然","g:果然"],
      intro: "Drei Adverbien zeigen, wie ein Ergebnis zu deiner <strong>Erwartung</strong> steht. <strong>反而</strong> (fǎn'ér) sagt: Es kam nicht nur anders, sondern sogar das Gegenteil trat ein – „im Gegenteil, stattdessen“. <strong>居然</strong> (jūrán) drückt Überraschung über etwas Unerwartetes aus – „doch tatsächlich, wer hätte das gedacht“. <strong>果然</strong> (guǒrán) bestätigt eine Vorhersage – „wie erwartet, prompt“. Dazu lernst du den Rahmen <strong>不但不/不但没有……，反而……</strong> „nicht nur nicht …, sondern im Gegenteil …“. Im Deutschen übernehmen oft kleine Partikeln wie „sogar“, „doch“ oder „tatsächlich“ diese Aufgabe, und „tatsächlich“ kann je nach Betonung Überraschung oder Bestätigung bedeuten. Im Chinesischen musst du dich entscheiden: 居然 oder 果然 – das sind fast Gegensätze.",
      sections: [
        {
          heading: "反而 — im Gegenteil, stattdessen",
          text: "Der erste Teil nennt einen Umstand, der eigentlich ein bestimmtes Ergebnis erwarten ließ; der zweite Teil mit <strong>反而</strong> nennt das gegenteilige Ergebnis. 反而 steht nach dem Subjekt direkt vor dem Prädikat; oft folgt eine Steigerung mit 更. Wichtig: 反而 ist kein einfaches „aber“. Es braucht eine Erwartung, die umgekehrt wird. Für einen bloßen Gegensatz nimmst du 但是 oder 却 (siehe [[lesson:lesson-14]]).",
          examples: [
            { cn: "我想减肥，结果反而胖了两公斤。", pinyin: "Wǒ xiǎng jiǎnféi, jiéguǒ fǎn'ér pàng le liǎng gōngjīn.", de: "Ich wollte abnehmen und habe stattdessen zwei Kilo zugenommen." },
            { cn: "休息了一天，他反而觉得更累了。", pinyin: "Xiūxi le yì tiān, tā fǎn'ér juéde gèng lèi le.", de: "Nach einem Ruhetag fühlte er sich sogar noch müder." },
            { cn: "解释得太多，反而让人听不懂。", pinyin: "Jiěshì de tài duō, fǎn'ér ràng rén tīng bu dǒng.", de: "Wer zu viel erklärt, macht es für andere eher unverständlicher." },
            { cn: "❌ 我喜欢喝茶，反而我妹妹喜欢喝咖啡。", pinyin: "", de: "Falsch: Hier wird keine Erwartung umgekehrt, es ist nur ein Gegensatz." },
            { cn: "✅ 我喜欢喝茶，我妹妹却喜欢喝咖啡。", pinyin: "Wǒ xǐhuan hē chá, wǒ mèimei què xǐhuan hē kāfēi.", de: "Ich trinke gern Tee, meine Schwester dagegen Kaffee." }
          ],
          tip: "Test: Kannst du „…, und dabei hätte man genau das Gegenteil erwartet“ ergänzen? Dann passt 反而. Sonst nimm 却 oder 但是."
        },
        {
          heading: "不但不/不但没有……，反而…… — nicht etwa …, sondern im Gegenteil",
          text: "Der Rahmen macht das Umschlagen ausdrücklich: Der erste Teil verneint die Erwartung, der zweite nennt mit <strong>反而</strong> das Gegenteil. <strong>不但不</strong> steht bei Zuständen, Gewohnheiten und allgemeinen Aussagen, <strong>不但没有</strong> (kurz 不但没) bei Ereignissen, die ausgeblieben sind. Haben beide Teile dasselbe Subjekt, steht es vor 不但. Das Muster ist in Rede und Schrift üblich. Vorsicht: 不但……而且…… (siehe [[lesson:lesson-39]]) steigert in <em>dieselbe</em> Richtung – „nicht nur …, sondern auch“.",
          examples: [
            { cn: "我帮了他，他不但不感谢我，反而怪我多管闲事。", pinyin: "Wǒ bāng le tā, tā búdàn bù gǎnxiè wǒ, fǎn'ér guài wǒ duō guǎn xiánshì.", de: "Ich habe ihm geholfen, und statt mir zu danken, wirft er mir vor, mich einzumischen." },
            { cn: "价格提高了，买的人不但没有减少，反而更多了。", pinyin: "Jiàgé tígāo le, mǎi de rén búdàn méiyǒu jiǎnshǎo, fǎn'ér gèng duō le.", de: "Der Preis ist gestiegen, und doch kaufen nicht etwa weniger, sondern sogar mehr Leute." },
            { cn: "这个办法不但不能解决问题，反而会带来新的麻烦。", pinyin: "Zhège bànfǎ búdàn bù néng jiějué wèntí, fǎn'ér huì dàilái xīn de máfan.", de: "Diese Methode löst das Problem nicht, sondern schafft im Gegenteil neuen Ärger." },
            { cn: "❌ 我道歉以后，她不但没原谅我，但是更生气了。", pinyin: "", de: "Falsch: 但是 bildet mit 不但 kein Paar." },
            { cn: "✅ 我道歉以后，她不但没原谅我，反而更生气了。", pinyin: "Wǒ dàoqiàn yǐhòu, tā búdàn méi yuánliàng wǒ, fǎn'ér gèng shēngqì le.", de: "Nach meiner Entschuldigung hat sie mir nicht verziehen, sondern wurde im Gegenteil noch wütender." }
          ],
          tip: "Gehoben steht statt 不但 auch 非但: 非但不……，反而……."
        },
        {
          heading: "居然 — doch tatsächlich, wider Erwarten",
          text: "<strong>居然</strong> zeigt, dass etwas der Erwartung der sprechenden Person widerspricht und sie überrascht. Die Überraschung kann positiv oder negativ sein; oft schwingt Empörung mit. 居然 steht nach dem Subjekt vor dem Prädikat, seltener am Satzanfang; davor steht oft 没想到 „wer hätte gedacht“. Häufig folgt eine Gradangabe mit 这么 oder 那么. 居然 bezieht sich auf Tatsachen, nicht auf Pläne oder Bitten. Es ist fast gleichbedeutend mit 竟然 (jìngrán), klingt aber etwas umgangssprachlicher.",
          examples: [
            { cn: "他才学了半年中文，居然能看懂新闻了！", pinyin: "Tā cái xué le bàn nián Zhōngwén, jūrán néng kàndǒng xīnwén le!", de: "Er lernt erst seit einem halben Jahr Chinesisch und versteht doch tatsächlich schon die Nachrichten!" },
            { cn: "这么简单的问题，你居然不知道？", pinyin: "Zhème jiǎndān de wèntí, nǐ jūrán bù zhīdào?", de: "So eine einfache Frage, und du weißt die Antwort nicht?" },
            { cn: "没想到外面居然下雪了。", pinyin: "Méi xiǎngdào wàimiàn jūrán xià xuě le.", de: "Wer hätte gedacht, dass es draußen schneit." },
            { cn: "这件衣服居然只要五十块。", pinyin: "Zhè jiàn yīfu jūrán zhǐ yào wǔshí kuài.", de: "Dieses Kleidungsstück kostet tatsächlich nur fünfzig Yuan." }
          ],
          tip: "居然 und 竟然 sind meist austauschbar; nur von 竟然 gibt es die schriftliche Kurzform 竟."
        },
        {
          heading: "果然 — wie erwartet, prompt",
          text: "<strong>果然</strong> bestätigt, dass etwas so eingetreten ist, wie man es vorhergesagt, vermutet oder gehört hat. Meist nennt der Satz zuerst die Erwartung, etwa mit 听说 „ich habe gehört“ oder 我猜 „ich vermute“, dann folgt 果然 mit dem Ergebnis. 果然 steht vor dem Prädikat, kann aber auch vor dem Subjekt stehen, oft mit Komma. Fast gleichbedeutend ist 果真 (guǒzhēn). Die feste Wendung 果然不出所料 heißt „genau wie vorhergesehen“.",
          examples: [
            { cn: "我猜他会喜欢这个礼物，他果然很喜欢。", pinyin: "Wǒ cāi tā huì xǐhuan zhège lǐwù, tā guǒrán hěn xǐhuan.", de: "Ich hatte vermutet, dass ihm das Geschenk gefällt – und es gefiel ihm tatsächlich." },
            { cn: "听说这部电影很好看，我昨天去看了，果然没让我失望。", pinyin: "Tīngshuō zhè bù diànyǐng hěn hǎokàn, wǒ zuótiān qù kàn le, guǒrán méi ràng wǒ shīwàng.", de: "Der Film soll sehr gut sein; ich habe ihn gestern gesehen, und er hat mich wirklich nicht enttäuscht." },
            { cn: "果然，他又忘了带钥匙。", pinyin: "Guǒrán, tā yòu wàng le dài yàoshi.", de: "Und prompt hat er wieder den Schlüssel vergessen." },
            { cn: "大家都说这条路近，我走了一次，果然快多了。", pinyin: "Dàjiā dōu shuō zhè tiáo lù jìn, wǒ zǒu le yí cì, guǒrán kuài duō le.", de: "Alle sagen, dieser Weg sei kürzer – ich bin ihn einmal gegangen, und er ist tatsächlich viel schneller." }
          ],
          tip: "Die häufigste Verwechslung: 果然 = Erwartung <strong>bestätigt</strong>, 居然 = Erwartung <strong>durchkreuzt</strong> (Überraschung, positiv oder negativ). Beides übersetzt man oft mit „tatsächlich“."
        },
        {
          heading: "Vergleich: 果然, 居然, 反而",
          text: "Dieselbe Ausgangslage, drei Ausgänge: Mit <strong>果然</strong> tritt ein, was man erwartet hat; mit <strong>居然</strong> passiert etwas Unerwartetes, das überrascht; mit <strong>反而</strong> bewirkt etwas genau das Gegenteil dessen, was es bewirken sollte. 反而 braucht also einen Umstand, der in die andere Richtung hätte wirken müssen, während 居然 nur die Überraschung der sprechenden Person zeigt.",
          examples: [
            { cn: "我猜他会迟到，他果然迟到了。", pinyin: "Wǒ cāi tā huì chídào, tā guǒrán chídào le.", de: "Ich hatte vermutet, dass er zu spät kommt – und so war es auch. (bestätigt)" },
            { cn: "他平时总是迟到，今天居然第一个到了。", pinyin: "Tā píngshí zǒngshì chídào, jīntiān jūrán dì yī ge dào le.", de: "Sonst kommt er immer zu spät, heute war er doch tatsächlich als Erster da. (Überraschung)" },
            { cn: "大家催他快一点儿，他反而走得更慢了。", pinyin: "Dàjiā cuī tā kuài yìdiǎnr, tā fǎn'ér zǒu de gèng màn le.", de: "Alle drängten ihn, sich zu beeilen – stattdessen ging er noch langsamer. (Gegenteil)" }
          ],
          tip: "Eselsbrücke: 果 „Frucht, Ergebnis“ – das erwartete Ergebnis ist eingetreten (果然). 反 „umgekehrt“ – das Ergebnis dreht sich um (反而)."
        }
      ]
    },
    // ── 毕竟, 反正, 似乎, 仿佛 — Haltung und Anschein (lesson-63) ──────────
    {
      id: 'lesson-63',
      number: 63,
      title: "毕竟, 反正, 似乎, 仿佛 — Haltung und Anschein",
      subtitle: "Begründen, abwinken, vorsichtig einschätzen, bildhaft vergleichen",
      level: 'HSK5',
      grammarIds: ["g:毕竟","g:反正","g:似乎","g:仿佛","g:似的","g:语气副词@HSK5","g:不管怎样说"],
      intro: "In dieser Lektion geht es um kleine Wörter mit großer Wirkung: Mit ihnen zeigst du, wie du zu einer Aussage stehst. <strong>毕竟</strong> (bìjìng) erinnert an eine Tatsache, die man bedenken sollte („er ist <em>schließlich</em> neu hier“), <strong>反正</strong> (fǎnzhèng) winkt ab: Das Ergebnis bleibt ohnehin gleich. <strong>似乎</strong> (sìhū) formuliert eine vorsichtige Einschätzung („anscheinend“), und <strong>仿佛</strong> (fǎngfú) sowie die Partikel <strong>似的</strong> (shìde) malen bildhafte Vergleiche („als ob“). Im Deutschen erledigen das oft Abtönungswörter wie <em>ja</em>, <em>eben</em> oder <em>halt</em>, die recht frei im Satz stehen. Im Chinesischen sind es Adverbien mit festem Platz – meist nach dem Subjekt vor dem Prädikat – und mit deutlichen Unterschieden im Register: Manche klingen gesprochen, andere schriftlich oder literarisch.",
      sections: [
        {
          heading: "毕竟 — schließlich, immerhin",
          text: "<strong>毕竟</strong> (bìjìng) verweist auf eine grundlegende Tatsache, die man bei einer Beurteilung bedenken sollte: „schließlich, immerhin, letzten Endes“. Damit relativierst du eine Kritik, rechtfertigst ein Verhalten oder erklärst etwas; der andere Teilsatz zieht daraus die Schlussfolgerung. Oft folgt <strong>是</strong> oder <strong>还是</strong> (háishi). 毕竟 kann nach dem Subjekt oder am Satzanfang stehen.",
          examples: [
            { cn: "他毕竟是新来的，很多情况还不了解。", pinyin: "Tā bìjìng shì xīn lái de, hěn duō qíngkuàng hái bù liǎojiě.", de: "Er ist schließlich neu hier und kennt sich mit vielem noch nicht aus." },
            { cn: "别太难过了，这毕竟只是一次小考试。", pinyin: "Bié tài nánguò le, zhè bìjìng zhǐ shì yí cì xiǎo kǎoshì.", de: "Sei nicht zu traurig – es ist schließlich nur ein kleiner Test." },
            { cn: "虽然问题还很多，但这毕竟是一个好的开始。", pinyin: "Suīrán wèntí hái hěn duō, dàn zhè bìjìng shì yí ge hǎo de kāishǐ.", de: "Es gibt zwar noch viele Probleme, aber es ist immerhin ein guter Anfang." },
            { cn: "毕竟是自己的孩子，父母怎么会不关心呢？", pinyin: "Bìjìng shì zìjǐ de háizi, fùmǔ zěnme huì bù guānxīn ne?", de: "Es ist schließlich ihr eigenes Kind – wie könnten Eltern sich da nicht kümmern?" }
          ],
          tip: "In Fragen nach dem Eigentlichen steht nicht 毕竟, sondern 到底 (dàodǐ) oder 究竟 (jiūjìng): ❌ 你毕竟想说什么？ → ✅ 你到底想说什么？ „Was willst du denn eigentlich sagen?“ In Aussagesätzen kann 到底 dagegen ebenfalls „schließlich“ bedeuten."
        },
        {
          heading: "反正 — sowieso, jedenfalls · 不管怎样说",
          text: "<strong>反正</strong> (fǎnzhèng) betont, dass die Umstände am Ergebnis nichts ändern. (1) Es nennt einen Umstand, der ohnehin gilt und eine Entscheidung begründet: „sowieso, ohnehin“. (2) Nach 不管 oder 无论 heißt es „jedenfalls, egal wie“ (vgl. [[lesson:lesson-44]]). 反正 ist typisch für die gesprochene Sprache und kann entschlossen oder gleichgültig klingen. Die feste Floskel <strong>不管怎样说</strong> (bùguǎn zěnyàng shuō) schließt dagegen eine Abwägung ab: „wie dem auch sei“. Danach folgt ein Fazit, ein Urteil oder ein Rat; anders als nach 不管……，都…… braucht der Hauptsatz kein 都/也. Gesprochen sagt man meist 不管怎么说.",
          examples: [
            { cn: "反正我明天没事，可以陪你去医院。", pinyin: "Fǎnzhèng wǒ míngtiān méi shì, kěyǐ péi nǐ qù yīyuàn.", de: "Ich habe morgen sowieso nichts vor, ich kann dich ins Krankenhaus begleiten." },
            { cn: "别打车了，反正也不远，我们走过去吧。", pinyin: "Bié dǎchē le, fǎnzhèng yě bù yuǎn, wǒmen zǒu guòqu ba.", de: "Lass uns kein Taxi nehmen – es ist ja ohnehin nicht weit, gehen wir zu Fuß." },
            { cn: "不管别人怎么说，反正我觉得这个主意不错。", pinyin: "Bùguǎn biérén zěnme shuō, fǎnzhèng wǒ juéde zhège zhǔyi búcuò.", de: "Egal, was andere sagen – ich finde die Idee jedenfalls gut." },
            { cn: "价格是贵了一点儿，不过不管怎样说，质量没问题。", pinyin: "Jiàgé shì guì le yìdiǎnr, búguò bùguǎn zěnyàng shuō, zhìliàng méi wèntí.", de: "Der Preis ist zwar etwas hoch, aber wie dem auch sei: Die Qualität stimmt." },
            { cn: "不管怎样说，这次经历对你很有帮助。", pinyin: "Bùguǎn zěnyàng shuō, zhè cì jīnglì duì nǐ hěn yǒu bāngzhù.", de: "Wie dem auch sei, diese Erfahrung hat dir viel gebracht." }
          ],
          tip: "毕竟 oder 反正? 毕竟 begründet mit einer Tatsache, die man bedenken soll („er ist <em>schließlich</em> neu“); 反正 sagt, dass es auf die Umstände nicht ankommt („ich gehe <em>sowieso</em>“). Nach 不管 kann statt 反正 auch 都 vor dem Verb stehen: 不管你去不去，我都去。"
        },
        {
          heading: "似乎 — anscheinend, es scheint",
          text: "<strong>似乎</strong> (sìhū) drückt eine unsichere Einschätzung aufgrund von Eindrücken aus: „anscheinend, offenbar, es scheint“. Die sprechende Person legt sich nicht fest. 似乎 steht meist nach dem Subjekt vor dem Prädikat, oft vor 是, 有, 要 oder 不太. Es ist etwas schriftlicher als das gleichbedeutende <strong>好像</strong> (hǎoxiàng). Anders als 好像 und 仿佛 ist 似乎 ein reines Adverb: Es kann nicht direkt vor einem Nomen stehen und „wie“ bedeuten.",
          examples: [
            { cn: "他今天似乎心情不太好。", pinyin: "Tā jīntiān sìhū xīnqíng bú tài hǎo.", de: "Er scheint heute nicht besonders gut gelaunt zu sein." },
            { cn: "这家餐厅似乎刚开业不久。", pinyin: "Zhè jiā cāntīng sìhū gāng kāiyè bùjiǔ.", de: "Dieses Restaurant hat anscheinend erst vor Kurzem eröffnet." },
            { cn: "大家似乎都已经知道这件事了。", pinyin: "Dàjiā sìhū dōu yǐjīng zhīdào zhè jiàn shì le.", de: "Alle scheinen schon davon zu wissen." },
            { cn: "❌ 她笑起来似乎一个孩子。", pinyin: "", de: "Falsch: 似乎 kann nicht direkt vor einem Nomen „wie“ bedeuten." },
            { cn: "✅ 她笑起来好像一个孩子。", pinyin: "Tā xiào qǐlai hǎoxiàng yí ge háizi.", de: "Wenn sie lacht, wirkt sie wie ein Kind. (好像 kann – anders als 似乎 – direkt vor einem Nomen stehen.)" }
          ],
          tip: "Im Gespräch klingt 好像 natürlicher (他好像不太高兴); 似乎 passt besser in Berichte, E-Mails und Erzählungen. Achtung Aussprache: In 似乎 wird 似 <strong>sì</strong> gesprochen, in 似的 dagegen <strong>shì</strong>."
        },
        {
          heading: "仿佛 und 似的 — als ob, wie",
          text: "<strong>仿佛</strong> (fǎngfú) vergleicht einen Sachverhalt bildhaft mit etwas anderem: „als ob, gleichsam“. Häufig rundet <strong>一样</strong> oder <strong>似的</strong> den Vergleich am Ende ab. Anders als 似乎 kann 仿佛 direkt vor einem Nomen stehen und „wie“ bedeuten. 仿佛 ist literarisch und typisch für Beschreibungen. Die Partikel <strong>似的</strong> (shìde) steht hinter einer Wortgruppe oder einem Satz, oft mit 像 oder 好像 davor; sie ist umgangssprachlich. Neutral in allen Registern ist <strong>像……一样</strong> (vgl. [[lesson:lesson-6]]).",
          examples: [
            { cn: "站在山顶上，我仿佛到了另一个世界。", pinyin: "Zhàn zài shāndǐng shang, wǒ fǎngfú dào le lìng yí ge shìjiè.", de: "Auf dem Gipfel kam ich mir vor wie in einer anderen Welt." },
            { cn: "湖水平静得仿佛一面镜子。", pinyin: "Húshuǐ píngjìng de fǎngfú yí miàn jìngzi.", de: "Das Wasser des Sees ist still wie ein Spiegel." },
            { cn: "那一刻，时间仿佛停止了一样。", pinyin: "Nà yí kè, shíjiān fǎngfú tíngzhǐ le yíyàng.", de: "In diesem Moment schien die Zeit stillzustehen." },
            { cn: "他看起来很累，好像一夜没睡似的。", pinyin: "Tā kàn qǐlai hěn lèi, hǎoxiàng yí yè méi shuì shìde.", de: "Er sieht sehr müde aus, als hätte er die ganze Nacht nicht geschlafen." },
            { cn: "这个孩子像个小大人似的，说话特别有礼貌。", pinyin: "Zhège háizi xiàng ge xiǎo dàren shìde, shuōhuà tèbié yǒu lǐmào.", de: "Das Kind wirkt wie eine kleine erwachsene Person und spricht ausgesprochen höflich." }
          ],
          tip: "Aussprache: 似的 heißt <strong>shìde</strong>, nicht sìde. Man findet auch die Schreibung 是的 – korrekt ist 似的. Merkhilfe fürs Register: 仿佛 im Roman, 似的 im Gespräch, 像……一样 überall."
        },
        {
          heading: "Weitere Modaladverbien: 居然, 根本, 果然, 反而, 刚好",
          text: "毕竟 und 反正 gehören zu einer Gruppe von Modaladverbien, mit denen du deine Haltung zeigst – Überraschung, Nachdruck oder Bestätigung. Sie stehen meist nach dem Subjekt vor dem Prädikat. Wichtig sind vor allem <strong>居然</strong> (jūrán) „wider Erwarten“, <strong>根本</strong> (gēnběn) „überhaupt (nicht)“, meist mit Verneinung, <strong>果然</strong> (guǒrán) „wie erwartet“, <strong>简直</strong> (jiǎnzhí) „geradezu“, <strong>反而</strong> (fǎn'ér) „im Gegenteil, stattdessen“ und <strong>刚好</strong> (gānghǎo) „gerade richtig, zufällig gerade“.",
          examples: [
            { cn: "这么难的题，他居然十分钟就做完了。", pinyin: "Zhème nán de tí, tā jūrán shí fēnzhōng jiù zuòwán le.", de: "So eine schwere Aufgabe – und er war doch tatsächlich in zehn Minuten fertig!" },
            { cn: "我根本没听说过这个地方。", pinyin: "Wǒ gēnběn méi tīngshuō guo zhège dìfang.", de: "Von diesem Ort habe ich überhaupt noch nie gehört." },
            { cn: "天气预报说今天有雨，下午果然下起来了。", pinyin: "Tiānqì yùbào shuō jīntiān yǒu yǔ, xiàwǔ guǒrán xià qǐlai le.", de: "Laut Wetterbericht sollte es heute regnen – und am Nachmittag fing es wie erwartet an." },
            { cn: "吃了药以后，他的病反而更重了。", pinyin: "Chī le yào yǐhòu, tā de bìng fǎn'ér gèng zhòng le.", de: "Nach der Medizin wurde seine Krankheit nicht besser, sondern sogar noch schlimmer." },
            { cn: "我们刚好赶上了最后一班车。", pinyin: "Wǒmen gānghǎo gǎnshàng le zuìhòu yì bān chē.", de: "Wir haben gerade noch den letzten Bus erwischt." }
          ],
          tip: "Typische Verwechslung: 居然 (Überraschung: „doch tatsächlich“) und 果然 (Bestätigung: „wie erwartet“) sind fast Gegenteile. ❌ 我早就猜到了，他居然来了。 → ✅ 我早就猜到了，他果然来了。"
        }
      ]
    },
    // ── 因而, 从而, 可见, 总之, 以及 — Schriftlich verknüpfen (lesson-64) ──────────
    {
      id: 'lesson-64',
      number: 64,
      title: "因而, 从而, 可见, 总之, 以及 — Schriftlich verknüpfen",
      subtitle: "Folge, Ergebnis, Zweck, Schluss und Aufzählung in Texten",
      level: 'HSK5',
      grammarIds: ["g:……，因而……","g:从而","g:……，可见……","g:……，为的是……","g:总之","g:以及","g:或是……，或是……","g:连接分句或句子@HSK5"],
      intro: "Wenn du Berichte, Aufsätze oder Nachrichten liest oder selbst schreibst, reichen 所以 und 和 bald nicht mehr aus. Diese Lektion stellt die Verbindungswörter vor, die geschriebene Texte gliedern: <strong>因而</strong> (yīn'ér) nennt eine Folge, <strong>从而</strong> (cóng'ér) das Ergebnis einer Maßnahme, <strong>为的是</strong> (wèi de shì) den nachgestellten Zweck, <strong>可见</strong> (kějiàn) einen Schluss aus einem Beleg und <strong>总之</strong> (zǒngzhī) das Fazit. Zum Aufzählen dienen <strong>以及</strong> (yǐjí) „sowie“ und <strong>或是……，或是……</strong> „entweder … oder“. Inhaltlich unterscheidest du ähnlich wie im Deutschen zwischen „deshalb“, „dadurch“, „also“ und „kurzum“. Der eigentliche Unterschied liegt im Register: Viele dieser Wörter wirken im Gespräch steif. Achte deshalb bei jedem Wort darauf, ob es schriftlich oder neutral ist.",
      sections: [
        {
          heading: "……，因而…… — daher, folglich",
          text: "<strong>因而</strong> (yīn'ér) leitet die Folge aus einem vorher genannten Grund ein: „daher, folglich, deshalb“. Es entspricht 所以 und 因此 (vgl. [[lesson:lesson-15]]), ist aber deutlich schriftsprachlich und typisch für Berichte und Aufsätze. 因而 steht am Anfang des zweiten Teilsatzes oder nach dessen Subjekt; im ersten Teil kann 由于 (yóuyú) den Grund markieren. 因而 verbindet meist Teilsätze innerhalb eines Satzes, während 因此 auch einen neuen Satz einleiten kann.",
          examples: [
            { cn: "由于连续下了几天大雨，河水因而涨得很快。", pinyin: "Yóuyú liánxù xià le jǐ tiān dà yǔ, héshuǐ yīn'ér zhǎng de hěn kuài.", de: "Weil es mehrere Tage hintereinander stark geregnet hatte, stieg der Fluss schnell an." },
            { cn: "这本书语言简单，故事有趣，因而很受年轻人欢迎。", pinyin: "Zhè běn shū yǔyán jiǎndān, gùshi yǒuqù, yīn'ér hěn shòu niánqīngrén huānyíng.", de: "Das Buch ist einfach geschrieben und spannend, daher ist es bei jungen Leuten sehr beliebt." },
            { cn: "她对客户非常耐心，因而得到了大家的信任。", pinyin: "Tā duì kèhù fēicháng nàixīn, yīn'ér dédào le dàjiā de xìnrèn.", de: "Sie ist sehr geduldig mit der Kundschaft und hat daher das Vertrauen aller gewonnen." },
            { cn: "城市人口不断增加，交通压力因而越来越大。", pinyin: "Chéngshì rénkǒu búduàn zēngjiā, jiāotōng yālì yīn'ér yuè lái yuè dà.", de: "Die Stadtbevölkerung wächst ständig, folglich wird der Verkehr immer stärker belastet." }
          ],
          tip: "Im Gespräch wirkt 因而 steif – dort sagst du 所以: ❌ 我饿了，因而我们去吃饭吧。 → ✅ 我饿了，所以我们去吃饭吧。"
        },
        {
          heading: "从而 — dadurch, somit",
          text: "<strong>从而</strong> (cóng'ér) leitet das Ergebnis einer vorher genannten Handlung oder Maßnahme ein: „dadurch, somit, und so“. Beide Teile haben in der Regel dasselbe Subjekt, das nach 从而 nicht wiederholt wird. Das Ergebnis ist meist erwünscht (提高, 减少, 改善); für unerwünschte Folgen steht eher 以致 (yǐzhì). Anders als 因而 betont 从而 weniger den Grund als den Weg, über den man das Ergebnis erreicht. 从而 gehört zur Schriftsprache und zu formellen Reden.",
          examples: [
            { cn: "学校增加了体育课，从而提高了学生的身体素质。", pinyin: "Xuéxiào zēngjiā le tǐyùkè, cóng'ér tígāo le xuésheng de shēntǐ sùzhì.", de: "Die Schule hat mehr Sportunterricht eingeführt und so die Fitness der Schülerinnen und Schüler verbessert." },
            { cn: "这座城市大力发展公共交通，从而减少了堵车。", pinyin: "Zhè zuò chéngshì dàlì fāzhǎn gōnggòng jiāotōng, cóng'ér jiǎnshǎo le dǔchē.", de: "Die Stadt hat den öffentlichen Nahverkehr stark ausgebaut und dadurch die Staus verringert." },
            { cn: "她每天读中文新闻，从而扩大了自己的词汇量。", pinyin: "Tā měi tiān dú Zhōngwén xīnwén, cóng'ér kuòdà le zìjǐ de cíhuìliàng.", de: "Sie liest jeden Tag chinesische Nachrichten und hat so ihren Wortschatz erweitert." },
            { cn: "工厂改用新设备，从而节约了大量能源。", pinyin: "Gōngchǎng gǎi yòng xīn shèbèi, cóng'ér jiéyuē le dàliàng néngyuán.", de: "Die Fabrik stellte auf neue Anlagen um und sparte dadurch viel Energie." }
          ],
          tip: "Probe für 从而: Passt im Deutschen „und erreichte dadurch …“, ist 从而 richtig. Nennt der erste Teil nur einen Grund ohne Handlung („Es regnete tagelang …“), passt eher 因而 oder 所以."
        },
        {
          heading: "……，为的是…… — und zwar, um … zu",
          text: "<strong>为的是</strong> (wèi de shì) nennt im zweiten Teilsatz den Zweck einer zuvor genannten Handlung, wörtlich etwa „wofür es geschieht, ist …“. Anders als 为了 (wèile), das meist vor der Handlung steht, wird der Zweck hier nachgestellt und dadurch hervorgehoben – oft als Erklärung für ein Verhalten, das sonst überraschen könnte. Gleichbedeutend ist 是为了. Danach folgt eine Verbgruppe oder ein ganzer Satz. Das Muster ist neutral bis schriftlich. Das letzte Beispiel zeigt zum Vergleich das erste mit vorangestelltem 为了.",
          examples: [
            { cn: "她每天晚上听中文广播，为的是练习听力。", pinyin: "Tā měi tiān wǎnshang tīng Zhōngwén guǎngbō, wèi de shì liànxí tīnglì.", de: "Sie hört jeden Abend chinesisches Radio, und zwar um ihr Hörverstehen zu trainieren." },
            { cn: "我提前一个小时到了机场，为的是不错过航班。", pinyin: "Wǒ tíqián yí ge xiǎoshí dào le jīchǎng, wèi de shì bú cuòguò hángbān.", de: "Ich war eine Stunde früher am Flughafen, um den Flug nicht zu verpassen." },
            { cn: "他把房间打扫得干干净净，为的是让父母放心。", pinyin: "Tā bǎ fángjiān dǎsǎo de gāngānjìngjìng, wèi de shì ràng fùmǔ fàngxīn.", de: "Er putzte das Zimmer blitzblank, damit sich seine Eltern keine Sorgen machten." },
            { cn: "公司推迟了会议，为的是让大家有更多时间准备。", pinyin: "Gōngsī tuīchí le huìyì, wèi de shì ràng dàjiā yǒu gèng duō shíjiān zhǔnbèi.", de: "Die Firma hat die Sitzung verschoben, damit alle mehr Zeit zur Vorbereitung haben." },
            { cn: "为了练习听力，她每天晚上听中文广播。", pinyin: "Wèile liànxí tīnglì, tā měi tiān wǎnshang tīng Zhōngwén guǎngbō.", de: "Um ihr Hörverstehen zu trainieren, hört sie jeden Abend chinesisches Radio. (Zum Vergleich mit 为了: Der Zweck steht vorn und ist Ausgangspunkt, nicht Pointe.)" }
          ],
          tip: "为 wird hier im vierten Ton gesprochen: <strong>wèi</strong> de shì, nicht wéi. Im Gespräch kannst du den Zweck auch mit 是为了 nachstellen: 我这么做，是为了你好。"
        },
        {
          heading: "可见 und 总之 — Schluss und Fazit",
          text: "<strong>可见</strong> (kějiàn) zieht aus einer Tatsache einen Schluss: „daran sieht man, also offenbar“. Die Richtung ist anders als bei 因而: Der erste Teil ist nicht die Ursache, sondern der Beleg; der zweite ist das Erschlossene. Häufig ist 由此可见 „daraus ergibt sich“. <strong>总之</strong> (zǒngzhī) leitet ein Fazit ein: „kurzum, alles in allem“ – oder nach etwas Unklarem „jedenfalls“; es ist in Rede und Schrift üblich. Beide gehören zu den satzverbindenden Konjunktionen, ebenso wie 从而 und <strong>假如</strong> (jiǎrú) „falls“, ein etwas gehobeneres 如果.",
          examples: [
            { cn: "他的中文说得这么流利，可见下了不少功夫。", pinyin: "Tā de Zhōngwén shuō de zhème liúlì, kějiàn xià le bù shǎo gōngfu.", de: "Er spricht so fließend Chinesisch – daran sieht man, wie viel Mühe er investiert hat." },
            { cn: "这家店门口总是排着长队，可见这里的菜很受欢迎。", pinyin: "Zhè jiā diàn ménkǒu zǒngshì pái zhe cháng duì, kějiàn zhèlǐ de cài hěn shòu huānyíng.", de: "Vor diesem Lokal steht immer eine lange Schlange – das Essen hier ist offenbar sehr beliebt." },
            { cn: "房子不大，离公司也远，总之我不太满意。", pinyin: "Fángzi bú dà, lí gōngsī yě yuǎn, zǒngzhī wǒ bú tài mǎnyì.", de: "Die Wohnung ist nicht groß und auch weit vom Büro entfernt – kurzum, ich bin nicht sehr zufrieden." },
            { cn: "我也说不清楚为什么，总之我不想去。", pinyin: "Wǒ yě shuō bu qīngchu wèishénme, zǒngzhī wǒ bù xiǎng qù.", de: "Ich kann auch nicht genau sagen, warum – jedenfalls will ich nicht hingehen." },
            { cn: "假如明天下雨，比赛就改到下周。", pinyin: "Jiǎrú míngtiān xià yǔ, bǐsài jiù gǎi dào xià zhōu.", de: "Falls es morgen regnet, wird das Spiel auf nächste Woche verlegt." }
          ],
          tip: "因而 oder 可见? Ursache → Wirkung: 他很努力，因而成绩很好。 Beleg → Schluss: 他成绩很好，可见很努力。 Bei 可见 steht das Erschlossene – oft gerade die Ursache – im zweiten Teil."
        },
        {
          heading: "以及 und 或是……，或是…… — aufzählen",
          text: "<strong>以及</strong> (yǐjí) „sowie, und (auch)“ steht meist vor dem letzten Glied einer Aufzählung, deren übrige Glieder durch 、 getrennt sind. Es verbindet Nomen und Wortgruppen, auch Verbgruppen oder indirekte Fragen, aber keine zwei vollständigen Hauptsätze – dafür dienen 而且 oder 并且. 以及 klingt gehoben; im Alltag reicht 和. <strong>或是</strong> (huòshì) bedeutet dasselbe wie 或者 (vgl. [[lesson:lesson-31]]), klingt aber etwas schriftlicher: „entweder … oder“, bei Gewohnheiten „mal …, mal …“.",
          examples: [
            { cn: "报名时请提供姓名、电话以及电子邮箱。", pinyin: "Bàomíng shí qǐng tígōng xìngmíng, diànhuà yǐjí diànzǐ yóuxiāng.", de: "Bitte geben Sie bei der Anmeldung Namen, Telefonnummer sowie E-Mail-Adresse an." },
            { cn: "请告诉我们会议的时间、地点以及参加人数。", pinyin: "Qǐng gàosu wǒmen huìyì de shíjiān, dìdiǎn yǐjí cānjiā rénshù.", de: "Bitte teilen Sie uns Zeit und Ort der Sitzung sowie die Zahl der Teilnehmenden mit." },
            { cn: "我们还没决定住在哪儿以及住几天。", pinyin: "Wǒmen hái méi juédìng zhù zài nǎr yǐjí zhù jǐ tiān.", de: "Wir haben noch nicht entschieden, wo wir übernachten und wie viele Tage wir bleiben." },
            { cn: "下班以后，她或是去健身房，或是在家做饭。", pinyin: "Xiàbān yǐhòu, tā huòshì qù jiànshēnfáng, huòshì zài jiā zuò fàn.", de: "Nach der Arbeit geht sie mal ins Fitnessstudio, mal kocht sie zu Hause." },
            { cn: "你或是今天交，或是明天交，都可以。", pinyin: "Nǐ huòshì jīntiān jiāo, huòshì míngtiān jiāo, dōu kěyǐ.", de: "Ob du es heute oder morgen abgibst – beides geht." }
          ],
          tip: "Wie 或者 steht 或是 nicht in Entscheidungsfragen: ❌ 你喝茶或是喝咖啡？ → ✅ 你喝茶还是喝咖啡？ Ein strenges „entweder – oder“ (genau eins von beiden) heißt 要么……，要么……."
        }
      ]
    },
    // ── 自从, 以来, 便 — Seit und dann (lesson-65) ──────────
    {
      id: 'lesson-65',
      number: 65,
      title: "自从, 以来, 便 — Seit und dann",
      subtitle: "Zeitspannen seit einem Ereignis und gehobenes „dann“ in Erzählungen",
      level: 'HSK5',
      grammarIds: ["g:自从","g:（自）……以来","g:便","g:……，便……","g:时间副词@HSK5"],
      intro: "Wie sagst du „seit ich in China bin“ oder „kaum war sie angekommen, da …“? Für das Erste nennt <strong>自从</strong> (zìcóng) den Ausgangspunkt in der Vergangenheit, oft ergänzt durch <strong>以后</strong> oder <strong>以来</strong> (yǐlái); der Rahmen <strong>（自）……以来</strong> betont, dass die Zeitspanne bis heute reicht. Anders als im Deutschen, wo „seit“ einfach vor dem Nebensatz steht, wird der Zeitpunkt im Chinesischen oft von beiden Seiten eingerahmt: 自从……以后, 自……以来. Für das Zweite lernst du <strong>便</strong> (biàn), das schriftsprachliche Gegenstück zu 就: Es knüpft in Erzählungen und Berichten eine Folge an eine Bedingung oder eine erste Handlung. Zum Schluss siehst du Zeitadverbien wie 曾经, 连忙 und 早已, die Erzähltexten ihren Rhythmus geben. Wichtig: 自从 und 以来 beziehen sich nur auf Vergangenes – für „ab nächstem Monat“ brauchst du 从.",
      sections: [
        {
          heading: "自从 — seit (einem vergangenen Ereignis)",
          text: "<strong>自从</strong> (zìcóng) nennt einen Zeitpunkt oder ein Ereignis in der Vergangenheit, von dem an etwas gilt – bis heute oder bis zu einem späteren Zeitpunkt. Häufig folgt <strong>以后</strong> oder <strong>以来</strong>. Die Gruppe mit 自从 steht meist am Satzanfang vor dem Subjekt. Der Hauptsatz beschreibt oft eine Veränderung (mit 了) oder einen Dauerzustand (mit 一直 oder 再也没).",
          examples: [
            { cn: "自从有了孩子，他们很少出去旅行了。", pinyin: "Zìcóng yǒu le háizi, tāmen hěn shǎo chūqu lǚxíng le.", de: "Seit sie ein Kind haben, verreisen sie nur noch selten." },
            { cn: "自从那次吵架以后，他们再也没说过话。", pinyin: "Zìcóng nà cì chǎojià yǐhòu, tāmen zài yě méi shuō guo huà.", de: "Seit jenem Streit haben sie nie wieder miteinander gesprochen." },
            { cn: "自从换了工作，她每天都很开心。", pinyin: "Zìcóng huàn le gōngzuò, tā měi tiān dōu hěn kāixīn.", de: "Seit sie die Stelle gewechselt hat, ist sie jeden Tag gut gelaunt." },
            { cn: "自从学了中文以后，我对中国文化越来越感兴趣。", pinyin: "Zìcóng xué le Zhōngwén yǐhòu, wǒ duì Zhōngguó wénhuà yuè lái yuè gǎn xìngqù.", de: "Seit ich Chinesisch gelernt habe, interessiere ich mich immer mehr für die chinesische Kultur." }
          ],
          tip: "自从 gilt nur für Vergangenes und nur für Zeit: ❌ 自从下个月开始，我要早起。 → ✅ 从下个月开始，我要早起。 Auch für Orte („von … aus“) steht 从 (vgl. [[lesson:lesson-33]])."
        },
        {
          heading: "（自）……以来 — seit … bis heute",
          text: "<strong>以来</strong> (yǐlái) markiert einen Ausgangspunkt in der Vergangenheit und umfasst die ganze Zeit bis zur Gegenwart oder zum Bezugszeitpunkt. Davor steht ein Zeitpunkt (去年以来), ein Ereignis (毕业以来) oder ein Zeitraum (三年以来). <strong>自</strong> (zì) oder 从 am Anfang verstärken den Ausgangspunkt; 自……以来 klingt schriftlich und formell, ohne 自 ist es neutral. Der Hauptsatz beschreibt einen Zustand oder eine Entwicklung, die andauert – oft mit 一直, 已经, 都 oder 了.",
          examples: [
            { cn: "自今年年初以来，这里的房价一直在上涨。", pinyin: "Zì jīnnián niánchū yǐlái, zhèlǐ de fángjià yìzhí zài shàngzhǎng.", de: "Seit Anfang dieses Jahres steigen hier die Wohnungspreise ständig." },
            { cn: "毕业以来，我们每年都会聚一次。", pinyin: "Bìyè yǐlái, wǒmen měi nián dōu huì jù yí cì.", de: "Seit dem Abschluss treffen wir uns jedes Jahr einmal." },
            { cn: "三年以来，她从来没请过一天假。", pinyin: "Sān nián yǐlái, tā cónglái méi qǐng guo yì tiān jià.", de: "In diesen drei Jahren hat sie sich keinen einzigen Tag freigenommen." },
            { cn: "自古以来，这里就是重要的贸易中心。", pinyin: "Zìgǔ yǐlái, zhèlǐ jiù shì zhòngyào de màoyì zhōngxīn.", de: "Seit jeher ist dieser Ort ein wichtiges Handelszentrum." },
            { cn: "❌ 明天以来我要好好学习。", pinyin: "", de: "Falsch: 以来 reicht bis zur Gegenwart und steht nicht für Zukünftiges." },
            { cn: "✅ 从明天开始，我要好好学习。", pinyin: "Cóng míngtiān kāishǐ, wǒ yào hǎohǎo xuéxí.", de: "Ab morgen lerne ich richtig fleißig." }
          ],
          tip: "以后 oder 以来? 以后 heißt „nach, später“ und kann auch Zukünftiges meinen; 以来 reicht bis jetzt. Für einen einmaligen, abgeschlossenen Vorgang steht 以后: 毕业以后，他去了上海。 Gesprochen sagt man statt 自……以来 oft 从……以后 oder 从……开始."
        },
        {
          heading: "便 — gehobenes „dann, gleich“",
          text: "<strong>便</strong> (biàn) ist das schriftsprachliche Gegenstück zu <strong>就</strong> in seiner verbindenden Funktion (vgl. [[lesson:lesson-30]]). Es steht nach dem Subjekt direkt vor dem Verb und knüpft eine Folge an eine Bedingung, einen Zeitpunkt oder eine erste Handlung. Typisch sind <strong>一……便……</strong> „sobald …, gleich …“, <strong>只要……便……</strong> „wenn nur …, dann …“ und Zeitangaben wie 不久便 „bald darauf“. 便 kann auch betonen, dass etwas früh eintritt. Es erscheint in Erzählungen, Berichten und Anleitungen; im Gespräch sagt man 就.",
          examples: [
            { cn: "她一看到那封信便明白了一切。", pinyin: "Tā yí kàndào nà fēng xìn biàn míngbai le yíqiè.", de: "Sobald sie den Brief sah, verstand sie alles." },
            { cn: "只要按一下这个按钮，机器便会自动停止。", pinyin: "Zhǐyào àn yíxià zhège ànniǔ, jīqì biàn huì zìdòng tíngzhǐ.", de: "Ein Druck auf diesen Knopf genügt, und die Maschine hält automatisch an." },
            { cn: "他搬来不久便认识了所有的邻居。", pinyin: "Tā bān lái bùjiǔ biàn rènshi le suǒyǒu de línjū.", de: "Kurz nachdem er hergezogen war, kannte er schon die ganze Nachbarschaft." },
            { cn: "她五岁便开始学钢琴了。", pinyin: "Tā wǔ suì biàn kāishǐ xué gāngqín le.", de: "Schon mit fünf Jahren fing sie an, Klavier zu lernen." }
          ],
          tip: "Nicht jedes 就 lässt sich durch 便 ersetzen: „nur“ (就他一个人) und „genau, eben“ (就是他) gehen nur mit 就. Und 便 in 方便 oder 随便 ist ein ganz anderes Wort – in 便宜 wird es sogar pián gesprochen."
        },
        {
          heading: "……，便…… — und dann, daraufhin",
          text: "Im Satzgefüge der Abfolge verbindet <strong>便</strong> zwei Handlungen, die direkt aufeinander folgen: Ist das Erste geschehen, tritt gleich darauf das Zweite ein – „dann, daraufhin, sogleich“. Im ersten Teil markieren oft 了, 后, 完 oder 过 den Abschluss der ersten Handlung. 便 ist ein Adverb: Es steht nach dem Subjekt, nicht davor. Der Rahmen klingt erzählend und ist typisch für geschriebene Texte; im Gespräch sagst du 就.",
          examples: [
            { cn: "他放下电话，便匆匆出了门。", pinyin: "Tā fàngxià diànhuà, biàn cōngcōng chū le mén.", de: "Er legte auf und eilte gleich darauf aus dem Haus." },
            { cn: "吃完晚饭，爷爷便去公园散步了。", pinyin: "Chīwán wǎnfàn, yéye biàn qù gōngyuán sànbù le.", de: "Nach dem Abendessen ging Großvater gleich in den Park spazieren." },
            { cn: "她在北京工作了两年后，便回国开了一家公司。", pinyin: "Tā zài Běijīng gōngzuò le liǎng nián hòu, biàn huíguó kāi le yì jiā gōngsī.", de: "Nach zwei Jahren Arbeit in Peking kehrte sie in ihr Land zurück und gründete eine Firma." },
            { cn: "❌ 听到这个好消息，便她笑了。", pinyin: "", de: "Falsch: 便 steht nach dem Subjekt, nicht davor." },
            { cn: "✅ 听到这个好消息，她便笑了。", pinyin: "Tīngdào zhège hǎo xiāoxi, tā biàn xiào le.", de: "Als sie die gute Nachricht hörte, musste sie gleich lächeln." }
          ],
          tip: "Merkhilfe: Wo du im Gespräch 就 sagst, schreibst du in einer Erzählung 便 – Stellung und Satzbau bleiben gleich: 他一到家就睡了 → 他一到家便睡了。"
        },
        {
          heading: "Zeitadverbien in Erzählungen: 曾经, 早已, 连忙, 始终, 渐渐",
          text: "Zu 便 passen Zeitadverbien, die Erzähltexte gliedern. Sie stehen nach dem Subjekt vor dem Verb: <strong>曾经</strong> (céngjīng) „einst, schon einmal“, oft mit 过; <strong>早已</strong> (zǎoyǐ) „längst“; <strong>连忙</strong> (liánmáng) und <strong>急忙</strong> (jímáng) „eilig“ als Reaktion auf etwas; <strong>始终</strong> (shǐzhōng) „die ganze Zeit“; <strong>渐渐</strong> (jiànjiàn) „allmählich“; <strong>立刻</strong> (lìkè) „sofort“ und <strong>即将</strong> (jíjiāng) „in Kürze“. 早已 und 即将 klingen schriftlich.",
          examples: [
            { cn: "他年轻时曾经在国外留过学。", pinyin: "Tā niánqīng shí céngjīng zài guówài liú guo xué.", de: "In jungen Jahren hat er einmal im Ausland studiert." },
            { cn: "等我赶到车站，火车早已开走了。", pinyin: "Děng wǒ gǎndào chēzhàn, huǒchē zǎoyǐ kāizǒu le.", de: "Als ich am Bahnhof ankam, war der Zug längst abgefahren." },
            { cn: "看到老人上车，她连忙站起来让座。", pinyin: "Kàndào lǎorén shàng chē, tā liánmáng zhàn qǐlai ràngzuò.", de: "Als sie eine ältere Person einsteigen sah, stand sie sofort auf und bot ihren Platz an." },
            { cn: "开会的时候，他始终一句话也没说。", pinyin: "Kāihuì de shíhou, tā shǐzhōng yí jù huà yě méi shuō.", de: "Während der ganzen Sitzung sagte er kein einziges Wort." },
            { cn: "雨渐渐停了，街上的人多了起来。", pinyin: "Yǔ jiànjiàn tíng le, jiē shang de rén duō le qǐlai.", de: "Der Regen hörte allmählich auf, und auf der Straße wurde es wieder voller." }
          ],
          tip: "连忙 und 急忙 erzählen nur, was geschehen ist – in Aufforderungen stehen sie nicht: ❌ 你连忙来！ → ✅ 你快来！ 曾经 verneinst du mit 没（有）……过。"
        }
      ]
    },
    // ── 凭, 据, 朝, 沿着 & Co. — Grundlage, Quelle, Richtung (lesson-66) ──────────
    {
      id: 'lesson-66',
      number: 66,
      title: "凭, 据, 朝, 沿着 & Co. — Grundlage, Quelle, Richtung",
      subtitle: "Präpositionen für Mittel, Informationsquelle, Blickwinkel und Weg",
      level: 'HSK5',
      grammarIds: ["g:凭","g:据","g:依据","g:从……来看","g:由……组成","g:朝","g:沿（着）","g:引出对象@HSK5"],
      intro: "In dieser Lektion lernst du eine Gruppe von Präpositionen, die dir vor allem in Nachrichten, Berichten und gehobener Sprache begegnen, einige aber auch im Alltag. Sie beantworten Fragen, die das Deutsche mit „laut“, „aufgrund“ oder „entlang“ löst: <strong>Womit</strong> schafft man etwas (凭)? <strong>Woher</strong> stammt eine Information (据)? <strong>Wonach</strong> wird entschieden (依据)? Von welchem <strong>Blickwinkel</strong> aus urteilt man (从……来看)? <strong>Wohin</strong> und <strong>woran entlang</strong> bewegt man sich (朝, 沿着)? Dazu kommen der Rahmen 由……组成 „bestehen aus“ und die Präpositionen 替, 同 und 较 für Bezugspersonen und Vergleiche. Wie andere chinesische Präpositionen stehen sie mit ihrem Nomen <em>vor</em> dem Verb oder am Satzanfang – auch dort, wo das Deutsche die Angabe nachstellt: „Wir gehen den Fluss <em>entlang</em>“ → 我们<strong>沿着</strong>河走.",
      sections: [
        {
          heading: "凭 — gestützt auf, mit",
          text: "<strong>凭</strong> (píng) nennt, worauf sich jemand stützt, um etwas zu erreichen oder zu tun: eine Fähigkeit, Erfahrung, ein Gefühl, einen Beleg oder ein Dokument – „aufgrund von, kraft, mit“. Die Gruppe steht vor dem Verb oder, durch Komma abgetrennt, am Satzanfang. Typisch sind 凭自己的努力 „aus eigener Kraft“, 凭经验 „aus Erfahrung“ und auf Schildern 凭票入场 „Einlass nur mit Eintrittskarte“. Die Frage <strong>凭什么</strong> heißt „mit welchem Recht?“ und klingt schroff, fast vorwurfsvoll.",
          examples: [
            { cn: "凭这张学生证，可以免费参观博物馆。", pinyin: "Píng zhè zhāng xuéshēngzhèng, kěyǐ miǎnfèi cānguān bówùguǎn.", de: "Mit diesem Studierendenausweis kann man das Museum kostenlos besichtigen." },
            { cn: "他没上过大学，完全凭自己的能力当上了经理。", pinyin: "Tā méi shàngguo dàxué, wánquán píng zìjǐ de nénglì dāngshang le jīnglǐ.", de: "Er hat nie studiert und ist ganz aus eigener Kraft Manager geworden." },
            { cn: "她凭一张旧照片找到了小时候的朋友。", pinyin: "Tā píng yì zhāng jiù zhàopiàn zhǎodào le xiǎo shíhou de péngyou.", de: "Anhand eines alten Fotos hat sie eine Freundin oder einen Freund aus Kindertagen wiedergefunden." },
            { cn: "凭感觉，我觉得他没说实话。", pinyin: "Píng gǎnjué, wǒ juéde tā méi shuō shíhuà.", de: "Mein Gefühl sagt mir, dass er nicht die Wahrheit gesagt hat." },
            { cn: "你凭什么不让我进去？", pinyin: "Nǐ píng shénme bú ràng wǒ jìnqu?", de: "Mit welchem Recht lässt du mich nicht hinein? (schroff)" }
          ],
          tip: "Im Gespräch kannst du oft 靠 (kào) „sich verlassen auf“ sagen: 靠自己的努力. 凭 betont das persönliche Mittel oder den Nachweis; für Berichte, Daten oder Vorschriften als Grundlage nimmt man eher 根据, 据 oder 依据."
        },
        {
          heading: "据 und 依据 — Quelle und Grundlage",
          text: "<strong>据</strong> (jù) nennt die Quelle einer Information: „laut, zufolge“. Es steht fast immer am Satzanfang mit Komma und verbindet sich gern mit Verben des Mitteilens oder Erfahrens: 据报道 „Berichten zufolge“, 据调查, 据统计, 据了解 „wie zu erfahren ist“. Bleibt die Quelle offen, sagt man <strong>据说</strong> „angeblich, es heißt“. Vor einem bloßen Nomen ohne Verb steht meist 根据 (根据天气预报). <strong>依据</strong> (yījù) nennt dagegen die Grundlage, nach der gehandelt oder entschieden wird – Gesetze, Verträge, Daten. Es ist deutlich formeller als 根据 und gehört in Amts-, Rechts- und Fachsprache.",
          examples: [
            { cn: "据新闻报道，这条高速公路下个月通车。", pinyin: "Jù xīnwén bàodào, zhè tiáo gāosù gōnglù xià ge yuè tōngchē.", de: "Laut Nachrichten wird diese Autobahn nächsten Monat für den Verkehr freigegeben." },
            { cn: "据统计，去年来这里旅游的人超过了一百万。", pinyin: "Jù tǒngjì, qùnián lái zhèlǐ lǚyóu de rén chāoguò le yìbǎi wàn.", de: "Laut Statistik kamen letztes Jahr über eine Million Menschen als Reisende hierher." },
            { cn: "据说他们俩下个月要结婚了。", pinyin: "Jùshuō tāmen liǎ xià ge yuè yào jiéhūn le.", de: "Angeblich heiraten die beiden nächsten Monat." },
            { cn: "依据合同，对方必须在月底以前付款。", pinyin: "Yījù hétong, duìfāng bìxū zài yuèdǐ yǐqián fùkuǎn.", de: "Laut Vertrag muss die Gegenseite bis Monatsende zahlen." },
            { cn: "学校依据考试成绩分班。", pinyin: "Xuéxiào yījù kǎoshì chéngjì fēn bān.", de: "Die Schule teilt die Klassen nach den Prüfungsergebnissen ein." }
          ],
          tip: "Faustregel: 凭 – <em>womit</em> schafft man es? 据 – <em>woher</em> weiß man es? 依据 – <em>wonach</em> wird entschieden? Im Alltag sagt man statt 依据 meist das neutrale 根据 (gēnjù)."
        },
        {
          heading: "Zwei feste Rahmen: 从……来看 und 由……组成",
          text: "<strong>从……来看</strong> nennt den Blickwinkel oder Anhaltspunkt für ein Urteil: „von … aus betrachtet, nach … zu urteilen“. Dazwischen steht ein Nomen wie 角度 „Blickwinkel“, 情况 „Lage“ oder ein konkretes Indiz; danach folgt mit Komma das Urteil, oft eine Vermutung mit 可能, 好像 oder 应该. Kürzer geht es mit 从……看 oder 从……看来; das Muster ist in Gespräch und Schrift üblich. <strong>由……组成</strong> sagt dagegen, woraus etwas besteht: Das Ganze ist Subjekt, 由 (yóu) führt die Teile ein, 组成 (zǔchéng) schließt ab – gern mit 是……的 zur Betonung. Dieser Rahmen ist neutral bis schriftlich und typisch für Beschreibungen und Sachtexte.",
          examples: [
            { cn: "从他说话的口音来看，他应该是南方人。", pinyin: "Cóng tā shuōhuà de kǒuyīn lái kàn, tā yīnggāi shì nánfāngrén.", de: "Seinem Akzent nach zu urteilen, kommt er wohl aus dem Süden." },
            { cn: "从长远来看，学好外语对找工作很有帮助。", pinyin: "Cóng chángyuǎn lái kàn, xuéhǎo wàiyǔ duì zhǎo gōngzuò hěn yǒu bāngzhù.", de: "Langfristig gesehen hilft eine gut beherrschte Fremdsprache sehr bei der Jobsuche." },
            { cn: "这个委员会由七名专家组成。", pinyin: "Zhège wěiyuánhuì yóu qī míng zhuānjiā zǔchéng.", de: "Dieser Ausschuss besteht aus sieben Fachleuten." },
            { cn: "我们的研究小组是由三个国家的学者组成的。", pinyin: "Wǒmen de yánjiū xiǎozǔ shì yóu sān ge guójiā de xuézhě zǔchéng de.", de: "Unsere Forschungsgruppe setzt sich aus Forschenden aus drei Ländern zusammen." }
          ],
          tip: "Nicht verwechseln: 在我看来 „meiner Meinung nach“ nennt eine Person und ihre Meinung, 从……来看 einen Gesichtspunkt oder Hinweis; 对……来说 ([[lesson:lesson-42]]) nennt, für wen etwas gilt. Und bei 组成 steht 由, nicht 从: ❌ 这个队从五个人组成 → ✅ 这个队由五个人组成."
        },
        {
          heading: "朝 und 沿着 — Richtung und Weg",
          text: "<strong>朝</strong> (cháo) nennt die Richtung einer Bewegung oder die Ausrichtung von Körper und Blick: „nach, in Richtung, zu … hin“. Anders als 往 passt es auch zu Gesten ohne Ortswechsel: 朝我笑 „mir zulächeln“, 朝他点头 „ihm zunicken“. Die Gruppe steht vor dem Verb; oft folgt 着 (朝着), das etwas nachdrücklicher klingt. <strong>沿着</strong> (yánzhe) beschreibt dagegen den ganzen Weg, die Linie, der eine Bewegung folgt: „entlang“. Das bloße <strong>沿</strong> klingt knapper und schriftlicher und steht gern vor einsilbigen Nomen (沿河, 沿街).",
          examples: [
            { cn: "他朝窗外看了一眼，外面正在下雪。", pinyin: "Tā cháo chuāngwài kàn le yì yǎn, wàimiàn zhèngzài xià xuě.", de: "Er warf einen Blick aus dem Fenster – draußen schneite es." },
            { cn: "她在站台上朝我挥了挥手。", pinyin: "Tā zài zhàntái shang cháo wǒ huī le huī shǒu.", de: "Sie winkte mir vom Bahnsteig aus zu." },
            { cn: "沿着这条小路往上走，半个小时就能到山顶。", pinyin: "Yánzhe zhè tiáo xiǎolù wǎng shàng zǒu, bàn ge xiǎoshí jiù néng dào shāndǐng.", de: "Wenn du diesem Pfad nach oben folgst, bist du in einer halben Stunde auf dem Gipfel." },
            { cn: "每天早上，她都沿着湖边跑步。", pinyin: "Měi tiān zǎoshang, tā dōu yánzhe húbiān pǎobù.", de: "Jeden Morgen joggt sie am See entlang." },
            { cn: "沿河种着很多柳树。", pinyin: "Yán hé zhòng zhe hěn duō liǔshù.", de: "Am Fluss entlang stehen viele Weiden. (knapp, eher schriftlich)" }
          ],
          tip: "Hinter dem Verb steht 朝 normalerweise nicht: ❌ 他走朝门口 → ✅ 他朝门口走 oder 他走向门口. Abstrakte Adressaten wie in 向老师学习 übernimmt 向 – mehr zu 往 und 向 in [[lesson:lesson-34]]."
        },
        {
          heading: "替, 同, 较 — für, mit, gegenüber",
          text: "Drei weitere Präpositionen führen die Bezugsperson oder die Vergleichsgröße ein; die Gruppe steht vor dem Verb. <strong>替</strong> (tì) heißt „für, anstelle von“: Man tut etwas stellvertretend oder zugunsten von jemandem (替我问好 „grüß von mir“). <strong>同</strong> (tóng) nennt wie 跟 und 和 den Partner einer Handlung – „mit“ –, klingt aber etwas gehobener bzw. südlich-regional. <strong>较</strong> (jiào) „im Vergleich zu, gegenüber“ ist das schriftsprachliche Gegenstück zu 比 ([[lesson:lesson-6]]) und typisch für Berichte und Statistiken.",
          examples: [
            { cn: "我明天有事，你能替我去开会吗？", pinyin: "Wǒ míngtiān yǒu shì, nǐ néng tì wǒ qù kāihuì ma?", de: "Ich habe morgen etwas vor – kannst du für mich zur Besprechung gehen?" },
            { cn: "听说你找到了新工作，大家都替你高兴。", pinyin: "Tīngshuō nǐ zhǎodào le xīn gōngzuò, dàjiā dōu tì nǐ gāoxìng.", de: "Alle freuen sich für dich, dass du eine neue Stelle gefunden hast." },
            { cn: "这个问题我想同大家讨论一下。", pinyin: "Zhège wèntí wǒ xiǎng tóng dàjiā tǎolùn yíxià.", de: "Diese Frage möchte ich gern mit euch allen besprechen." },
            { cn: "今年的产量较去年有所提高。", pinyin: "Jīnnián de chǎnliàng jiào qùnián yǒusuǒ tígāo.", de: "Die Produktion ist gegenüber dem Vorjahr etwas gestiegen. (Berichtsstil)" }
          ],
          tip: "替 ist auch Verb „vertreten, übernehmen“ (我替你！ „Ich übernehme für dich!“), 较 auch Adverb „relativ“ (较好). Im Gespräch sagst du statt 较去年 einfach 比去年."
        }
      ]
    },
    // ── 得 + Folge: so …, dass … — und 不得了 (lesson-67) ──────────
    {
      id: 'lesson-67',
      number: 67,
      title: "得 + Folge: so …, dass … — und 不得了",
      subtitle: "Zustandskomplemente mit Verbalphrase, eigenem Subjekt oder fester Wendung; V不得",
      level: 'HSK5',
      grammarIds: ["g:动词/形容词+得+动词短语","g:动词/形容词+得+主谓短语","g:动词/形容词+得+固定短语","g:形容词/心理动词+得+不得了","g:不得了","g:动词+得/不得"],
      intro: "In [[lesson:lesson-8]] hast du gelernt, wie man mit 得 bewertet, wie jemand etwas tut: 她唱得很好听. Jetzt geht es einen Schritt weiter: Nach 得 steht keine Bewertung mehr, sondern eine <strong>Folge</strong> – eine Verbalphrase (累得走不动了), ein kleiner Satz mit eigenem Subjekt (冷得我发抖) oder eine bildhafte feste Wendung (忙得团团转). Auf Deutsch entspricht das meist „so …, dass …“ oder „vor …“: „vor Freude in die Luft springen“. Außerdem lernst du <strong>不得了</strong> als Gradkomplement („wahnsinnig, unglaublich“) und als Ausruf. Zum Schluss kommt ein ganz anderes 得: In 吃不得 wird es dé gesprochen und heißt „dürfen“ – „das darf man nicht essen“.",
      sections: [
        {
          heading: "得 + Verbalphrase — was man vor lauter … tut",
          text: "Steht nach 得 eine Verbalphrase, zeigt sie das Ausmaß eines Zustands an dem, was jemand deshalb tut oder nicht mehr kann. Vor 得 stehen meist Adjektive oder Verben der Gefühle und Zustände wie 高兴, 累, 急, 气, 笑 oder 哭. Die Verbalphrase enthält oft 了, ein Richtungskomplement wie 起来 oder ein verneintes Potentialkomplement (走不动, 说不出). Im Unterschied zu 跑得很快 wird hier nichts bewertet, sondern eine Folge geschildert.",
          examples: [
            { cn: "我困得睁不开眼睛了。", pinyin: "Wǒ kùn de zhēng bu kāi yǎnjing le.", de: "Ich bin so müde, dass ich die Augen nicht mehr aufhalten kann." },
            { cn: "听完他的话，她感动得流下了眼泪。", pinyin: "Tīngwán tā de huà, tā gǎndòng de liúxià le yǎnlèi.", de: "Nach seinen Worten war sie so gerührt, dass ihr die Tränen kamen." },
            { cn: "弟弟气得一句话也不说。", pinyin: "Dìdi qì de yí jù huà yě bù shuō.", de: "Mein kleiner Bruder war so wütend, dass er kein einziges Wort sagte." },
            { cn: "这个电影太好笑了，大家笑得停不下来。", pinyin: "Zhège diànyǐng tài hǎoxiào le, dàjiā xiào de tíng bu xiàlai.", de: "Der Film war so lustig, dass niemand mehr aufhören konnte zu lachen." }
          ],
          tip: "Schriftlich nicht mit 的 oder 地 verwechseln: ❌ 累的走不动了 → ✅ 累得走不动了. Beim Übersetzen hilft „so …, dass …“ oder „vor …“: 气得一句话也不说 „vor Wut kein Wort sagen“."
        },
        {
          heading: "得 + Subjekt + Prädikat — Folgen für andere",
          text: "Hier ist das Komplement ein ganzer kleiner Satz mit <strong>eigenem Subjekt</strong>: Er zeigt, welche Folge die Handlung oder der Zustand für jemand anderen oder für einen Körperteil hat – 冻得手都红了, 吵得我睡不着. Im Komplement stehen oft 都, 直 oder ein verneintes Potentialkomplement. Hat das Hauptverb ein Objekt, wird das Verb wiederholt (讲课讲得……). Beginnt der Satz mit einer Ursache (这件事, 这道菜), ist das Subjekt nach 得 die betroffene Person: 这件事气得爸爸…… „die Sache hat Papa so geärgert, dass …“.",
          examples: [
            { cn: "这道菜辣得我直流眼泪。", pinyin: "Zhè dào cài là de wǒ zhí liú yǎnlèi.", de: "Das Gericht ist so scharf, dass mir die Tränen laufen." },
            { cn: "面试的时候，她紧张得手心都出汗了。", pinyin: "Miànshì de shíhou, tā jǐnzhāng de shǒuxīn dōu chū hàn le.", de: "Beim Vorstellungsgespräch war sie so nervös, dass ihre Handflächen ganz feucht wurden." },
            { cn: "这件事气得爸爸一晚上没吃饭。", pinyin: "Zhè jiàn shì qì de bàba yì wǎnshang méi chī fàn.", de: "Die Sache hat Papa so geärgert, dass er den ganzen Abend nichts gegessen hat." },
            { cn: "她讲课讲得学生们都不想下课。", pinyin: "Tā jiǎngkè jiǎng de xuéshengmen dōu bù xiǎng xiàkè.", de: "Sie unterrichtet so spannend, dass die Klasse gar nicht in die Pause will." }
          ],
          tip: "Oft lässt sich dasselbe auf beide Arten sagen: 我累得走不动了 (ohne neues Subjekt) – 这次旅行累得我走不动了 (die Reise als Ursache vorn, 我 als Subjekt nach 得). Das Muster ist typisch für lebhafte Schilderungen in Erzählung und Gespräch."
        },
        {
          heading: "得 + feste Wendung — bildhafte Chengyu",
          text: "Nach 得 kann auch eine feste Wendung stehen, meist ein vierteiliger Chengyu oder eine bildhafte Redensart: 忙得团团转 „rotieren vor Arbeit“, 吃得津津有味 „mit großem Genuss essen“, 跑得上气不接下气 „bis man völlig außer Atem ist“, 说得头头是道 „schlüssig und überzeugend reden“. Jede Wendung passt nur zu bestimmten Verben oder Adjektiven – lerne sie deshalb als Ganzes mit dem Verb. Vor der Wendung steht kein 很, und verneint wird sie nicht. Gesprochen wie geschrieben häufig, besonders in lebhaften Erzählungen.",
          examples: [
            { cn: "周末店里客人特别多，服务员们忙得团团转。", pinyin: "Zhōumò diàn li kèrén tèbié duō, fúwùyuánmen máng de tuántuánzhuàn.", de: "Am Wochenende ist der Laden voll, und das Personal rotiert." },
            { cn: "爷爷吃饺子吃得津津有味。", pinyin: "Yéye chī jiǎozi chī de jīnjīn yǒuwèi.", de: "Opa isst seine Jiaozi mit großem Genuss." },
            { cn: "孩子们在操场上跑得上气不接下气。", pinyin: "Háizimen zài cāochǎng shang pǎo de shàngqì bù jiē xiàqì.", de: "Die Kinder rennen auf dem Sportplatz herum, bis sie völlig außer Atem sind." },
            { cn: "他把这个问题说得头头是道。", pinyin: "Tā bǎ zhège wèntí shuō de tóutóu shìdào.", de: "Er hat die Frage schlüssig und überzeugend erklärt." }
          ],
          tip: "Die Wendung trägt den hohen Grad schon in sich: ❌ 大家忙得很团团转 → ✅ 大家忙得团团转. Ein kleiner Vorrat solcher Wendungen macht deine Erzählungen sofort lebendiger."
        },
        {
          heading: "不得了 — wahnsinnig, schlimm, unglaublich",
          text: "Als Komplement nach 得 drückt <strong>不得了</strong> (bùdéliǎo) einen sehr hohen Grad aus: 高兴得不得了 „überglücklich“, 担心得不得了 „sich schreckliche Sorgen machen“. Davor stehen Adjektive oder Verben des Fühlens wie 喜欢, 担心, 后悔; ein zusätzliches 很 oder 非常 fällt weg. Ein Objekt des Gefühlsverbs wird vorangestellt oder mit 对 eingeführt. Allein bewertet 不得了 eine Lage als außergewöhnlich: als Ausruf 不得了了！ „Um Himmels willen!“, als Urteil „schlimm“ (那可不得了) oder anerkennend „unglaublich“; 没什么不得了的 heißt „nicht so schlimm“. Beides gehört vor allem in die gesprochene Sprache.",
          examples: [
            { cn: "收到你的礼物，孩子们开心得不得了。", pinyin: "Shōudào nǐ de lǐwù, háizimen kāixīn de bùdéliǎo.", de: "Die Kinder haben sich wahnsinnig über dein Geschenk gefreut." },
            { cn: "奶奶对这个小孙子喜欢得不得了。", pinyin: "Nǎinai duì zhège xiǎo sūnzi xǐhuan de bùdéliǎo.", de: "Oma ist ganz vernarrt in ihren kleinen Enkel." },
            { cn: "不得了了，孩子发高烧了！", pinyin: "Bùdéliǎo le, háizi fā gāoshāo le!", de: "Oh nein, das Kind hat hohes Fieber!" },
            { cn: "这只是一次小考试，没什么不得了的。", pinyin: "Zhè zhǐ shì yí cì xiǎo kǎoshì, méi shénme bùdéliǎo de.", de: "Das ist nur ein kleiner Test, nichts Schlimmes." }
          ],
          tip: "Aussprache: In 不得了 wird 了 liǎo gesprochen; ein angehängtes Satzende-了 heißt le: 不得了了 (bùdéliǎo le). Wortstellung: ❌ 我喜欢得不得了这本书 → ✅ 这本书我喜欢得不得了. Ähnlich: 得要命 (ebenso stark), 得很 (etwas schwächer), 极了 und 死了 ohne 得."
        },
        {
          heading: "Verb + 得 / 不得 (dé) — dürfen und nicht dürfen",
          text: "Ein ganz anderes 得: In <strong>Verb + 不得</strong> (bu dé) ist 得 selbst das Potentialkomplement und behält seinen Ton. Gebräuchlich ist vor allem die verneinte Form: Verbot oder Gefahr (这种蘑菇吃不得), nicht ratsam (急不得 „nichts überstürzen“, 马虎不得) oder körperlich unmöglich (动不得 „sich nicht rühren können“). Die bejahte Form <strong>Verb + 得</strong> steht fast nur in Gegenüberstellungen oder Fragen. Meist sind es einsilbige Verben oder Adjektive. Der Ausdruck ist nachdrücklich und leicht idiomatisch; neutral sagt man 不能 + Verb. Anders als bei 看不见 ([[lesson:lesson-41]]) folgt kein weiteres Komplement.",
          examples: [
            { cn: "他说话不太可靠，他的话信不得。", pinyin: "Tā shuōhuà bú tài kěkào, tā de huà xìn bu dé.", de: "Auf ihn ist kein Verlass – seinen Worten darf man nicht trauen." },
            { cn: "开车的时候，一点儿也大意不得。", pinyin: "Kāichē de shíhou, yìdiǎnr yě dàyi bu dé.", de: "Beim Autofahren darf man keinen Moment unaufmerksam sein." },
            { cn: "他腰受伤了，现在动不得。", pinyin: "Tā yāo shòushāng le, xiànzài dòng bu dé.", de: "Er hat sich am Rücken verletzt und kann sich gerade nicht rühren." },
            { cn: "看病的事拖不得，你明天就去医院吧。", pinyin: "Kànbìng de shì tuō bu dé, nǐ míngtiān jiù qù yīyuàn ba.", de: "Einen Arztbesuch darf man nicht aufschieben – geh gleich morgen ins Krankenhaus." },
            { cn: "这种野菜吃得，那种可吃不得。", pinyin: "Zhè zhǒng yěcài chī de, nà zhǒng kě chī bu dé.", de: "Dieses Wildkraut kann man essen, das andere auf keinen Fall. (bejahte Form in der Gegenüberstellung)" }
          ],
          tip: "Nicht verwechseln: 吃不得 „darf man nicht essen“ – 吃不了 „kann man nicht aufessen“. Vor dem Verb ist 不得 (bùdé) ein schriftliches Verbot: 不得吸烟 „Rauchen verboten“. 舍不得, 怪不得 und 不得了 sind eigene, feste Wörter."
        }
      ]
    },
    // ── Richtungskomplemente als Zustand: 起来, 下来, 下去, 过来, 过去 (lesson-68) ──────────
    {
      id: 'lesson-68',
      number: 68,
      title: "Richtungskomplemente als Zustand: 起来, 下来, 下去, 过来, 过去",
      subtitle: "Ruhig werden, wärmer werden, zu sich kommen",
      level: 'HSK5',
      grammarIds: ["g:趋向补语的引申用法：表示状态意义：动词/形容词+下来/下去/起来/过来/过去","g:表示动作行为的开始：动词+上/起来","g:表示动作行为的持续：动词+下去/下来"],
      intro: "Aus [[lesson:lesson-9]] kennst du Richtungskomplemente wie 站起来 „aufstehen“ oder 走下去 „hinuntergehen“ – und schon erste übertragene Bedeutungen: 笑起来 „anfangen zu lachen“, 说下去 „weitererzählen“. In dieser Lektion beschreiben dieselben Komplemente <strong>Zustandswechsel</strong>, meist nach Adjektiven: Etwas wird lauter oder leiser, wärmer oder kälter, jemand verliert das Bewusstsein oder kommt wieder zu sich. Das Bild der Richtung bleibt dabei erhalten: <strong>起来</strong> geht nach oben – ein Zustand setzt ein und nimmt zu; <strong>下来</strong> geht nach unten – etwas kommt zur Ruhe; <strong>下去</strong> führt weiter weg – ein Zustand hält an; <strong>过来</strong> kommt zurück – in den Normalzustand; <strong>过去</strong> entfernt sich – aus dem Normalzustand heraus. Auch das Deutsche kennt solche Bilder: „zur Ruhe kommen“, „abkühlen“, „wieder zu sich kommen“.",
      sections: [
        {
          heading: "起来 und 上 — etwas setzt ein",
          text: "Nach einem Adjektiv zeigt <strong>起来</strong>, dass ein Zustand einsetzt und zunimmt, meist von schwach zu stark: 热起来, 忙起来, 好起来, 热闹起来. Nach einem Verb heißt es „anfangen zu …“ (哭起来); ein Objekt tritt zwischen 起 und 来: 下起雨来. Auch <strong>上</strong> (shang) nach einem Verb zeigt einen Beginn – ein neuer Zustand tritt ein und hält an, oft ein gewünschter oder überraschender: 爱上, 喜欢上. 了 steht nach dem Komplement (好起来了) oder zwischen Verb und 起来 (哭了起来).",
          examples: [
            { cn: "一到周末，这条街就热闹起来了。", pinyin: "Yí dào zhōumò, zhè tiáo jiē jiù rènao qǐlai le.", de: "Sobald das Wochenende kommt, wird es in dieser Straße lebhaft." },
            { cn: "吃了药以后，他的病慢慢好起来了。", pinyin: "Chīle yào yǐhòu, tā de bìng mànmàn hǎo qǐlai le.", de: "Nachdem er die Medizin genommen hatte, ging es ihm allmählich besser." },
            { cn: "说着说着，她突然哭了起来。", pinyin: "Shuōzhe shuōzhe, tā tūrán kū le qǐlai.", de: "Mitten im Erzählen fing sie plötzlich an zu weinen." },
            { cn: "我们刚出门，天就下起雨来了。", pinyin: "Wǒmen gāng chūmén, tiān jiù xià qǐ yǔ lai le.", de: "Kaum waren wir aus dem Haus, fing es an zu regnen." },
            { cn: "来中国以后，他爱上了中国菜。", pinyin: "Lái Zhōngguó yǐhòu, tā àishang le Zhōngguó cài.", de: "Seit er in China ist, liebt er die chinesische Küche." }
          ],
          tip: "Beide Formen beschreiben einen tatsächlichen Wechsel, kein Vorhaben. Für „anfangen wollen“ nimmt man 开始: 我打算明年开始学日语 „Ich habe vor, nächstes Jahr mit Japanisch anzufangen.“"
        },
        {
          heading: "下来 — zur Ruhe kommen",
          text: "Nach Adjektiven bezeichnet <strong>下来</strong> den Übergang von Bewegung in Ruhe, von stark zu schwach: 安静下来 „still werden“, 冷静下来 „sich beruhigen“, 慢下来, 暗下来, 停下来. Oft stehen 慢慢, 渐渐 oder 马上 davor. Nach Verben blickt 下来 zurück: Eine Handlung hat bis jetzt angedauert und ist durchgestanden – 坚持下来 „durchgehalten haben“.",
          examples: [
            { cn: "❌ 请大家安静起来。", pinyin: "", de: "Falsch: Es wird leiser, also schwächer – dafür steht 下来, nicht 起来." },
            { cn: "✅ 请大家安静下来。", pinyin: "Qǐng dàjiā ānjìng xiàlai.", de: "Bitte werdet alle still." },
            { cn: "听了妈妈的话，孩子慢慢冷静下来了。", pinyin: "Tīngle māma de huà, háizi mànmàn lěngjìng xiàlai le.", de: "Nach Mamas Worten beruhigte sich das Kind allmählich." },
            { cn: "太阳下山以后，天色渐渐暗了下来。", pinyin: "Tàiyáng xià shān yǐhòu, tiānsè jiànjiàn àn le xiàlai.", de: "Nach Sonnenuntergang wurde es allmählich dunkel." },
            { cn: "十公里虽然很长，但是我还是跑下来了。", pinyin: "Shí gōnglǐ suīrán hěn cháng, dànshì wǒ háishi pǎo xiàlai le.", de: "Zehn Kilometer sind zwar lang, aber ich bin sie bis zum Ende durchgelaufen." }
          ],
          tip: "热闹 „lebhaft“ passt dagegen zu 起来: 安静下来 ↔ 热闹起来. Faustregel mit Ausnahmen: Wird etwas stärker, lauter, schneller, steht meist 起来; wird es schwächer, leiser, langsamer, meist 下来. Bei 冷 sind beide üblich – 天冷起来了 (die Kälte nimmt zu) und 天冷下来了 (die Temperatur sinkt)."
        },
        {
          heading: "下去 — und so geht es weiter",
          text: "<strong>下去</strong> bedeutet, dass etwas von jetzt an weitergeht. Nach Adjektiven heißt das: Ein Zustand hält an und entwickelt sich weiter, oft in eine unerwünschte Richtung – 瘦下去, 冷下去, vor allem in Warnungen mit 再这样 oder 这样下去 „wenn es so weitergeht“. Nach Verben wird eine Handlung fortgesetzt: 说下去, 学下去, 讲下去. Verneint als Potentialform heißt es „nicht weitermachen können“: 看不下去, 听不下去. Faustregel: 下去 schaut nach vorn, 下来 zurück.",
          examples: [
            { cn: "天气再这样热下去，河里的水都要干了。", pinyin: "Tiānqì zài zhèyàng rè xiàqu, hé li de shuǐ dōu yào gān le.", de: "Wenn die Hitze so weitergeht, trocknet der Fluss noch aus." },
            { cn: "这样下去可不行，我们得想个办法。", pinyin: "Zhèyàng xiàqu kě bù xíng, wǒmen děi xiǎng ge bànfǎ.", de: "So kann es nicht weitergehen, wir müssen uns etwas einfallen lassen." },
            { cn: "这个故事太精彩了，你快讲下去！", pinyin: "Zhège gùshi tài jīngcǎi le, nǐ kuài jiǎng xiàqu!", de: "Die Geschichte ist so spannend – erzähl schnell weiter!" },
            { cn: "这本书太无聊了，我实在看不下去了。", pinyin: "Zhè běn shū tài wúliáo le, wǒ shízài kàn bu xiàqu le.", de: "Das Buch ist so langweilig, ich kann es wirklich nicht weiterlesen." }
          ],
          tip: "看不下去 kann auch heißen, dass man etwas nicht länger mit ansehen kann: 他这样欺负人，我实在看不下去了 „Wie er andere schikaniert – das kann ich mir nicht länger ansehen.“"
        },
        {
          heading: "过来 und 过去 — zurück zum Normalen oder weg davon",
          text: "<strong>过来</strong> zeigt die Rückkehr in den normalen, richtigen Zustand: 醒过来 „wieder zu sich kommen“, 明白过来 „begreifen“, 改过来 „korrigieren, ablegen“. <strong>过去</strong> bezeichnet das Gegenteil, den Verlust des normalen Zustands, vor allem des Bewusstseins: 晕过去, 昏过去 „ohnmächtig werden“. 了 steht nach dem Komplement (醒过来了) oder, besonders bei 过去, zwischen Verb und Komplement (晕了过去).",
          examples: [
            { cn: "他昏迷了三天，今天早上终于醒过来了。", pinyin: "Tā hūnmí le sān tiān, jīntiān zǎoshang zhōngyú xǐng guòlai le.", de: "Er war drei Tage bewusstlos und ist heute Morgen endlich wieder zu sich gekommen." },
            { cn: "天气太热，一位老人在路上晕了过去。", pinyin: "Tiānqì tài rè, yí wèi lǎorén zài lù shang yūn le guòqu.", de: "Wegen der Hitze ist ein älterer Mensch auf der Straße ohnmächtig geworden." },
            { cn: "我想了半天才明白过来，原来他在开玩笑。", pinyin: "Wǒ xiǎng le bàntiān cái míngbai guòlai, yuánlái tā zài kāi wánxiào.", de: "Ich brauchte eine ganze Weile, bis ich begriff, dass er nur scherzte." },
            { cn: "这个坏习惯，你一定要改过来。", pinyin: "Zhège huài xíguàn, nǐ yídìng yào gǎi guòlai.", de: "Diese schlechte Angewohnheit musst du unbedingt ablegen." }
          ],
          tip: "Merkhilfe wie in [[lesson:lesson-9]]: 来 kommt zur sprechenden Person hin – zurück ins Normale, ins Bewusstsein; 去 entfernt sich – weg vom Normalen. ❌ 他晕过来了 → ✅ 他晕过去了 bzw. 他醒过来了. Die Merkhilfe gilt für die Zustandsbedeutung; Ausdrücke wie 忙不过来 „mit der Arbeit nicht nachkommen“ folgen anderen Bedeutungen."
        }
      ]
    },
    // ── 把 und 被 für Fortgeschrittene: 把门一关, 把A当作B, 被他给…… (lesson-69) ──────────
    {
      id: 'lesson-69',
      number: 69,
      title: "把 und 被 für Fortgeschrittene: 把门一关, 把A当作B, 被他给……",
      subtitle: "Gesten, Verwandlungen und das gesprochene Passiv mit 给",
      level: 'HSK5',
      grammarIds: ["g:主语+把+宾语+一+动词","g:主语+把+宾语1+动词+宾语2","g:主语+被/叫/让+宾语+给+动词+其他成分","g:主语+把+宾语+动词（+一/了）+动词","g:主语+把+宾语+动词+动量补语/时量补语","g:主语+把+宾语+状语+动词"],
      intro: "Die Grundformen von 把 und 被 kennst du aus [[lesson:lesson-4]] und [[lesson:lesson-5]]. Hier kommen die Muster dazu, die dir vor allem in Erzählungen und lebhaften Gesprächen begegnen: <strong>他把门一关</strong> – eine schnelle Geste, auf die sofort etwas folgt; <strong>把 A 当作 B</strong> – etwas zu etwas anderem machen oder als etwas ansehen; und <strong>被他给弄坏了</strong> – ein Passiv mit zusätzlichem 给, das betont, dass einem etwas widerfahren ist. Dazu wiederholst du, was im 把-Satz sonst noch beim Verb stehen kann: Verdopplung, Häufigkeit und Dauer, Adverbiale. Der rote Faden: Im 把-Satz steht das Verb nicht nackt – es braucht eine Ergänzung oder, beim 一-Muster, einen Folgesatz. Im Deutschen trägt oft ein kleines Wort wie „kurz“, „mal eben“ oder „einfach“ diese Bedeutung; im Chinesischen steckt sie in der Satzstruktur.",
      sections: [
        {
          heading: "把 + Objekt + 一 + Verb — eine schnelle Geste mit Folge",
          text: "Steht vor dem einsilbigen Verb nur <strong>一</strong>, beschreibt der 把-Satz eine kurze, plötzliche Handlung – oft eine Geste oder Körperbewegung: 把门一关 „die Tür zuziehen“, 把手一挥 „kurz winken“, 把头一低 „den Kopf senken“. Das Verb steht ohne 了 und ohne Komplement; der Satz ist damit noch nicht fertig. Es folgt ein zweiter Teilsatz mit der Wirkung oder der nächsten Handlung, oft mit 就. 一 wird nach den Tonregeln gesprochen: yí vor einem vierten Ton, sonst yì. Das Muster ist erzählend und sehr anschaulich.",
          examples: [
            { cn: "他把书一合，站起来就走了。", pinyin: "Tā bǎ shū yì hé, zhàn qǐlai jiù zǒu le.", de: "Er klappte das Buch zu, stand auf und ging." },
            { cn: "老师把手一挥，大家马上安静了下来。", pinyin: "Lǎoshī bǎ shǒu yì huī, dàjiā mǎshàng ānjìng le xiàlai.", de: "Die Lehrkraft machte eine kurze Handbewegung, und sofort wurde es still." },
            { cn: "她把眼睛一闭，什么也不想听。", pinyin: "Tā bǎ yǎnjing yí bì, shénme yě bù xiǎng tīng.", de: "Sie machte einfach die Augen zu und wollte nichts mehr hören." },
            { cn: "我把门一推，一只猫就跑了出来。", pinyin: "Wǒ bǎ mén yì tuī, yì zhī māo jiù pǎo le chūlai.", de: "Kaum hatte ich die Tür aufgestoßen, lief eine Katze heraus." }
          ],
          tip: "❌ 他把门一关。 (der Folgesatz fehlt) und ❌ 他把门一关了。 (kein 了 hinter dem Verb) → ✅ 他把门一关，就去睡觉了。 Ohne 把 sagst du Ähnliches mit 一……就……: 他一推门就进来了 (siehe [[lesson:lesson-30]])."
        },
        {
          heading: "Zum Vergleich: 擦一擦, 看了看 — mal eben, beiläufig",
          text: "Verwechsle das 一-Muster nicht mit der Verdopplung des Verbs im 把-Satz: <strong>把 + Objekt + Verb (+ 一/了) + Verb</strong>. Sie macht eine Handlung „kurz, mal eben“ und klingt in Bitten weich und freundlich: 你把桌子擦一擦. 一 steht zwischen einsilbigen Verben (说一说); 了 zeigt, dass die kurze Handlung schon stattgefunden hat (看了看); zweisilbige Verben werden ohne 一 verdoppelt (收拾收拾). Gleichbedeutend ist Verb + 一下. Der Unterschied: Bei 把门一关 ist die Handlung plötzlich und hat eine Folge, bei 擦一擦 ist sie nur beiläufig.",
          examples: [
            { cn: "你把这些菜洗一洗，我来做饭。", pinyin: "Nǐ bǎ zhèxiē cài xǐ yi xǐ, wǒ lái zuòfàn.", de: "Wasch du mal kurz das Gemüse, ich koche." },
            { cn: "他把信看了看，又放回了信封里。", pinyin: "Tā bǎ xìn kàn le kàn, yòu fàng huí le xìnfēng lǐ.", de: "Er warf einen kurzen Blick auf den Brief und steckte ihn wieder in den Umschlag." },
            { cn: "周末我们把房间收拾收拾吧。", pinyin: "Zhōumò wǒmen bǎ fángjiān shōushi shōushi ba.", de: "Lass uns am Wochenende mal das Zimmer aufräumen." },
            { cn: "他把信一看，脸就红了。", pinyin: "Tā bǎ xìn yí kàn, liǎn jiù hóng le.", de: "Kaum hatte er den Brief gelesen, wurde er rot. (plötzlich, mit Folge)" }
          ],
          tip: "❌ 你把桌子擦。 — das bloße Verb reicht nicht. ✅ 你把桌子擦一擦。 oder ✅ 你把桌子擦一下。"
        },
        {
          heading: "Wie oft, wie lange, wie: 三遍, 十分钟, 一件一件地",
          text: "Hinter dem Verb kann im 把-Satz auch stehen, <strong>wie oft oder wie lange</strong> mit dem Objekt etwas geschieht: 把课文读了三遍, 把汤煮了一个小时. Bei vergangenen Handlungen steht 了 zwischen Verb und Mengenangabe. Die Dauer muss das Objekt betreffen; eine bloße Aufenthaltsdauer geht nicht (*我把北京住了两年). <strong>Wie</strong> etwas geschieht, sagt ein Adverbial zwischen Objekt und Verb: 轻轻地, 一个一个地, 往左. Das Verb braucht trotzdem eine Ergänzung. Negation und Modalverben stehen dagegen vor 把.",
          examples: [
            { cn: "她把这首歌听了好几遍。", pinyin: "Tā bǎ zhè shǒu gē tīng le hǎo jǐ biàn.", de: "Sie hat sich das Lied mehrmals hintereinander angehört." },
            { cn: "妈妈把衣服在水里泡了十分钟。", pinyin: "Māma bǎ yīfu zài shuǐ lǐ pào le shí fēnzhōng.", de: "Mama hat die Wäsche zehn Minuten im Wasser eingeweicht." },
            { cn: "他把行李一件一件地搬上了车。", pinyin: "Tā bǎ xíngli yí jiàn yí jiàn de bān shàng le chē.", de: "Er trug das Gepäck Stück für Stück ins Auto." },
            { cn: "❌ 我把作业没写完。", pinyin: "", de: "(Falsch — 没 steht vor 把, nicht vor dem Verb)" },
            { cn: "✅ 我没把作业写完。", pinyin: "Wǒ méi bǎ zuòyè xiěwán.", de: "Ich habe die Hausaufgaben nicht fertig geschrieben." }
          ],
          tip: "遍 (biàn) heißt „einmal ganz durch“, 次 einfach „Mal“. Vor dem Verb schreibt man 地, nicht 的: 把门轻轻地关上."
        },
        {
          heading: "把 A 当作 B — etwas zu etwas machen oder als etwas ansehen",
          text: "Hier hat das Verb im 把-Satz <strong>zwei Objekte</strong>: Objekt 1 ist das, womit etwas geschieht; Objekt 2 ist das, wozu es wird oder als was es gilt. Typisch sind Verben mit 成 oder 作: 当作/当成 „betrachten als, behandeln wie“, 看作 „ansehen als“, 叫做 „nennen“, 翻译成 „übersetzen in“, 改成 „ändern in“. Mit 写成 oder 听成 beschreibt das Muster oft ein Versehen: „fälschlich als … schreiben/hören“. Beide Objekte hinter das Verb zu stellen, geht nicht. In der Schriftsprache steht oft 为 (wéi) statt 成: 翻译为德文.",
          examples: [
            { cn: "她一直把我当成亲妹妹。", pinyin: "Tā yìzhí bǎ wǒ dàngchéng qīn mèimei.", de: "Sie behandelt mich schon immer wie ihre eigene jüngere Schwester." },
            { cn: "我们把这个小房间改成了书房。", pinyin: "Wǒmen bǎ zhège xiǎo fángjiān gǎichéng le shūfáng.", de: "Wir haben das kleine Zimmer in ein Arbeitszimmer umgewandelt." },
            { cn: "服务员把“四号”听成了“十号”。", pinyin: "Fúwùyuán bǎ “sì hào” tīngchéng le “shí hào”.", de: "Die Bedienung hat „Nummer vier“ als „Nummer zehn“ verstanden." },
            { cn: "❌ 你能翻译成中文这句话吗？", pinyin: "", de: "(Falsch — beide Objekte hinter dem Verb)" },
            { cn: "✅ 你能把这句话翻译成中文吗？", pinyin: "Nǐ néng bǎ zhè jù huà fānyì chéng Zhōngwén ma?", de: "Kannst du diesen Satz ins Chinesische übersetzen?" }
          ],
          tip: "Umgangssprachlich genügt oft 当: 别把我当小孩子. Nicht verwechseln mit 把书还给他 – dort nennt Objekt 2, wer etwas bekommt (siehe [[lesson:lesson-4]])."
        },
        {
          heading: "被/叫/让 + … + 给 + Verb — es ist einem etwas passiert",
          text: "In der gesprochenen Sprache steht im Passivsatz oft zusätzlich <strong>给 (gěi)</strong> direkt vor dem Verb: 我的钱包让小偷给偷走了. 给 ändert die Grundbedeutung nicht, unterstreicht aber, dass dem Subjekt etwas widerfahren ist – meist etwas Unangenehmes. Das Verb braucht wie in jedem Passivsatz eine Ergänzung. Mit 叫 und 让 muss genannt werden, wer handelt; soll das offenbleiben, sagt man umgangssprachlich einfach 衣服给淋湿了 – dann ist 给 selbst das Passivzeichen. Auch im 把-Satz kann 给 vor dem Verb stehen. In formellen Texten steht 被 ohne 给.",
          examples: [
            { cn: "我的钱包让小偷给偷走了。", pinyin: "Wǒ de qiánbāo ràng xiǎotōu gěi tōuzǒu le.", de: "Mir ist das Portemonnaie geklaut worden." },
            { cn: "花瓶叫猫给打碎了。", pinyin: "Huāpíng jiào māo gěi dǎsuì le.", de: "Die Vase ist von der Katze zerbrochen worden." },
            { cn: "我们都被他给骗了。", pinyin: "Wǒmen dōu bèi tā gěi piàn le.", de: "Wir sind alle auf ihn hereingefallen." },
            { cn: "没带伞，衣服全给淋湿了。", pinyin: "Méi dài sǎn, yīfu quán gěi línshī le.", de: "Ich hatte keinen Schirm dabei, meine Kleidung ist völlig durchnässt." },
            { cn: "弟弟把我的电脑给弄坏了。", pinyin: "Dìdi bǎ wǒ de diànnǎo gěi nònghuài le.", de: "Mein kleiner Bruder hat meinen Computer kaputtgemacht." }
          ],
          tip: "Dieses 给 heißt weder „geben“ noch „für“ – danach folgt direkt das Verb. ❌ 我的钱包让给偷了。 (bei 让 fehlt, wer handelt) → ✅ 我的钱包让人给偷了。"
        }
      ]
    },
    // ── Vierwortmuster: A来A去, A着A着, 说A就A (lesson-70) ──────────
    {
      id: 'lesson-70',
      number: 70,
      title: "Vierwortmuster: A来A去, A着A着, 说A就A",
      subtitle: "Wiederholung, unerwartete Wendung und Plötzlichkeit",
      level: 'HSK5',
      grammarIds: ["g:A来A去","g:A着A着","g:说A就A","g:没A没B","g:X来X去，都是/就是……"],
      intro: "Chinesisch liebt feste Vierwortrahmen: Ein Verb wird wiederholt und in einen festen Rahmen gesetzt – und der Rahmen trägt die Bedeutung. <strong>走来走去</strong> heißt „auf und ab gehen“, <strong>说着说着</strong> „mitten im Erzählen“, <strong>说走就走</strong> „einfach losgehen“. Dazu kommen feste Ausdrücke nach dem Muster <strong>没A没B</strong> wie 没完没了 „endlos“. Im Deutschen brauchst du dafür Adverbien wie „hin und her“, „plötzlich“ oder „ständig“; im Chinesischen reicht der Rahmen. Du begegnest diesen Mustern in Erzählungen und Alltagsgesprächen sehr oft. Achte bei jedem Muster darauf, was danach kommt: Ein Ergebnis, eine Wendung oder ein Fazit macht den Satz oft erst vollständig.",
      sections: [
        {
          heading: "A来A去 — hin und her, immer wieder",
          text: "In <strong>A来A去</strong> steht zweimal dasselbe, meist einsilbige Verb, verbunden durch 来 und 去; die Reihenfolge ist fest. Bei Bewegungsverben heißt es „hin und her“: 跑来跑去, 飞来飞去. Bei anderen Verben heißt es „immer wieder, lange“: 想来想去 „hin und her überlegen“, 找来找去 „überall suchen“. Oft folgt ein Teilsatz mit dem Ergebnis, das nach langem Hin und Her eintritt (还是……) oder ausbleibt (也没……). Das Muster ist umgangssprachlich und anschaulich.",
          examples: [
            { cn: "孩子们在院子里跑来跑去。", pinyin: "Háizimen zài yuànzi lǐ pǎo lái pǎo qù.", de: "Die Kinder rennen im Hof hin und her." },
            { cn: "几只小鸟在树上飞来飞去。", pinyin: "Jǐ zhī xiǎoniǎo zài shù shang fēi lái fēi qù.", de: "Ein paar Vögel flattern in den Bäumen hin und her." },
            { cn: "她挑来挑去，最后还是买了第一件。", pinyin: "Tā tiāo lái tiāo qù, zuìhòu háishi mǎi le dì-yī jiàn.", de: "Sie suchte lange hin und her und kaufte am Ende doch das erste Teil." },
            { cn: "我们在车站等来等去，也没等到车。", pinyin: "Wǒmen zài chēzhàn děng lái děng qù, yě méi děngdào chē.", de: "Wir haben an der Haltestelle ewig gewartet, aber kein Bus kam." }
          ],
          tip: "Die Reihenfolge ist fest: ✅ 走来走去, nicht ❌ 走去走来. Nach 想来想去 kündigt 还是 die Entscheidung an; nach 找来找去 zeigt 也没……, dass die Mühe vergeblich war."
        },
        {
          heading: "X来X去，都是/就是…… — am Ende läuft es auf dasselbe hinaus",
          text: "Mit einem Fazit im zweiten Teil wird aus A来A去 ein eigenes Muster: Trotz allem Hin und Her kommt immer dasselbe heraus. <strong>就是</strong> betont „im Grunde, eben nur“ (说来说去，就是不想去); <strong>都是</strong> betont „alles, ausnahmslos“ (看来看去，都是广告). Für X steht dasselbe, meist einsilbige Verb. Mit 还是 folgt dagegen eine Entscheidung (想来想去，还是不去了). Der Ausdruck ist gesprochen und klingt oft leicht enttäuscht oder ungeduldig.",
          examples: [
            { cn: "他说来说去，就是想跟我借钱。", pinyin: "Tā shuō lái shuō qù, jiù shì xiǎng gēn wǒ jiè qián.", de: "Er redet und redet – im Grunde will er sich nur Geld von mir leihen." },
            { cn: "这几个台我换来换去，都是广告。", pinyin: "Zhè jǐ ge tái wǒ huàn lái huàn qù, dōu shì guǎnggào.", de: "Ich zappe zwischen diesen Sendern hin und her – überall nur Werbung." },
            { cn: "我算来算去，就是少了一百块钱。", pinyin: "Wǒ suàn lái suàn qù, jiù shì shǎo le yìbǎi kuài qián.", de: "Ich habe immer wieder nachgerechnet – es fehlen einfach hundert Yuan." },
            { cn: "这几家饭馆我们吃来吃去，都是一个味道。", pinyin: "Zhè jǐ jiā fànguǎn wǒmen chī lái chī qù, dōu shì yí ge wèidao.", de: "Wir haben in diesen Restaurants immer wieder gegessen – es schmeckt überall gleich." }
          ],
          tip: "就是 = „es ist eben nur …“ (der Kern der Sache), 都是 = „alles ist …“ (keine Ausnahme), 还是 = „ich habe mich doch entschieden …“."
        },
        {
          heading: "A着A着 — und mittendrin passiert etwas",
          text: "In <strong>A着A着</strong> wird dasselbe, meist einsilbige Verb mit 着 verdoppelt: Die Handlung läuft noch, und während sie läuft, tritt unerwartet etwas Neues ein. Dieses Neue folgt im nächsten Teil, oft mit 就 oder 突然. Ohne die Folge ist der Satz unvollständig. Das Ergebnis ist meist unbeabsichtigt: einschlafen, weinen, sich verlaufen, etwas bemerken. Anders als 笑着说 (eine Begleithandlung, siehe [[lesson:lesson-10]]) kündigt A着A着 eine Wende an.",
          examples: [
            { cn: "孩子看着看着就睡着了。", pinyin: "Háizi kànzhe kànzhe jiù shuìzháo le.", de: "Mitten beim Zuschauen ist das Kind eingeschlafen." },
            { cn: "他写着写着，突然停了下来。", pinyin: "Tā xiězhe xiězhe, tūrán tíng le xiàlai.", de: "Er schrieb und schrieb – und hielt plötzlich inne." },
            { cn: "我们聊着聊着，天就黑了。", pinyin: "Wǒmen liáozhe liáozhe, tiān jiù hēi le.", de: "Wir plauderten und plauderten, und darüber wurde es dunkel." },
            { cn: "她听着听着，眼睛就红了。", pinyin: "Tā tīngzhe tīngzhe, yǎnjing jiù hóng le.", de: "Beim Zuhören bekam sie auf einmal Tränen in die Augen." }
          ],
          tip: "❌ 他说着说着。 — die Wendung fehlt. ✅ 他说着说着就笑了起来。"
        },
        {
          heading: "说A就A — kaum gesagt, schon passiert",
          text: "In <strong>说A就A</strong> steht zweimal dasselbe Verb: Kaum ist von etwas die Rede, geschieht es auch schon. 说 heißt hier nicht wirklich „sagen“, sondern „sobald davon die Rede ist“. Bei Menschen zeigt das Muster Spontaneität und Entschlossenheit (说走就走 „einfach losgehen“, 说做就做 „sofort anpacken“), bei Dingen und beim Wetter bedeutet es „ganz plötzlich, ohne Vorwarnung“ (说变就变, 说来就来). Es steht als Prädikat oder mit 的 als Attribut: 说走就走的旅行 „eine spontane Reise“.",
          examples: [
            { cn: "她说做就做，第二天就开始学开车了。", pinyin: "Tā shuō zuò jiù zuò, dì-èr tiān jiù kāishǐ xué kāichē le.", de: "Gesagt, getan: Schon am nächsten Tag fing sie mit dem Fahrunterricht an." },
            { cn: "这孩子的脾气说来就来，谁也没办法。", pinyin: "Zhè háizi de píqi shuō lái jiù lái, shéi yě méi bànfǎ.", de: "Die Wutanfälle des Kindes kommen ganz plötzlich – da kann niemand etwas machen." },
            { cn: "夏天的雨说停就停，太阳马上又出来了。", pinyin: "Xiàtiān de yǔ shuō tíng jiù tíng, tàiyáng mǎshàng yòu chūlai le.", de: "Im Sommer hört der Regen ganz plötzlich auf, und schon kommt die Sonne wieder heraus." },
            { cn: "年轻的时候，我们也有过说走就走的旅行。", pinyin: "Niánqīng de shíhou, wǒmen yě yǒuguo shuō zǒu jiù zǒu de lǚxíng.", de: "Als wir jung waren, sind wir auch mal ganz spontan verreist." }
          ],
          tip: "Vergleiche 一……就…… ([[lesson:lesson-30]]): 他一到家就睡了 verbindet zwei verschiedene Handlungen. In 说睡就睡 ist es dieselbe Handlung, die ohne Verzögerung eintritt."
        },
        {
          heading: "没A没B — feste Ausdrücke: 没完没了, 没日没夜",
          text: "<strong>没A没B</strong> verneint zwei zusammengehörende Begriffe und betont so ein völliges Fehlen. A und B sind einsilbige Wörter mit gegensätzlicher oder ähnlicher Bedeutung. Das Muster bildet überwiegend feste Ausdrücke, die oft tadelnd gemeint sind: 没大没小 „respektlos gegenüber Älteren“, 没完没了 „endlos“, 没日没夜 „Tag und Nacht“, 没头没脑 „zusammenhanglos, unvermittelt“. Sie stehen als Prädikat (oft mit 的) oder mit 地 vor dem Verb. Freie Neubildungen sind selten – lerne die Ausdrücke am besten als Einheiten.",
          examples: [
            { cn: "他们俩一打电话就没完没了。", pinyin: "Tāmen liǎ yì dǎ diànhuà jiù méi wán méi liǎo.", de: "Wenn die beiden telefonieren, hört das gar nicht mehr auf." },
            { cn: "考试前那几天，她没日没夜地复习。", pinyin: "Kǎoshì qián nà jǐ tiān, tā méi rì méi yè de fùxí.", de: "In den Tagen vor der Prüfung hat sie Tag und Nacht gelernt." },
            { cn: "你怎么跟爷爷说话没大没小的？", pinyin: "Nǐ zěnme gēn yéye shuōhuà méi dà méi xiǎo de?", de: "Wie redest du denn mit Opa – so respektlos!" },
            { cn: "他没头没脑地问了一句，谁也没听懂。", pinyin: "Tā méi tóu méi nǎo de wèn le yí jù, shéi yě méi tīngdǒng.", de: "Er stellte ganz unvermittelt eine Frage, die niemand verstand." }
          ],
          tip: "Nicht verwechseln: 不大不小 heißt „genau die richtige Größe“ (weder zu … noch zu …), 没大没小 dagegen „respektlos“. Das schriftsprachliche Gegenstück zu 没A没B ist 无A无B (无忧无虑 „sorglos“)."
        }
      ]
    },
    // ── Gesprochene Muster: abwinken, zögern, zugreifen (lesson-71) ──────────
    {
      id: 'lesson-71',
      number: 71,
      title: "Gesprochene Muster: abwinken, zögern, zugreifen",
      subtitle: "Ton und Haltung in Alltagsgesprächen erkennen",
      level: 'HSK5',
      grammarIds: ["g:X什么X","g:什么X不X（的）","g:真有你/他/她的","g:X也不是，Y也不是","g:X也X不得，Y也Y不得","g:不X白不X","g:X着也是X着","g:用不着","g:动词+什么（就）是什么","g:A的A，B的B","g:X是它，Y也是它"],
      intro: "In Alltagsgesprächen und Hörtexten tauchen immer wieder kurze, feste Rahmen auf, die weniger Information als <strong>Haltung</strong> transportieren: Ärger (哭什么哭), Großzügigkeit (什么谢不谢的), Ratlosigkeit (进也不是，走也不是), Pragmatismus (不吃白不吃) oder Staunen (真有你的). Wörtlich übersetzt ergeben sie oft wenig Sinn – 哭什么哭 ist keine Frage, und 真有你的 lässt sich nicht Wort für Wort übertragen. Entscheidend ist, den <em>Ton</em> zu erkennen. Diese Lektion sortiert die Muster danach, was die sprechende Person damit tut: abwinken, in der Klemme stecken, zugreifen oder hinnehmen, kommentieren. Fast alle sind gesprochen und informell, manche wirken barsch. Verwende sie im vertrauten Kreis und sei bei Fremden vorsichtig.",
      sections: [
        {
          heading: "Abwinken: 哭什么哭, 什么谢不谢的, 用不着",
          text: "<strong>X什么X</strong> ist keine Frage, sondern ein Vorwurf: Die sprechende Person findet eine Handlung oder Gefühlsregung unnötig und will, dass sie aufhört (哭什么哭 „Hör auf zu weinen!“). X ist meist ein einsilbiges Verb oder Adjektiv ohne Objekt; der Ton ist barsch bis unhöflich. <strong>什么X不X（的）</strong> wischt dagegen einen Gesichtspunkt beiseite, den das Gegenüber angesprochen hat (什么谢不谢的 „ach was, keine Ursache“); X kann auch ein Nomen sein, danach folgt, worauf es eigentlich ankommt. <strong>用不着</strong> (yòngbuzháo) heißt „nicht nötig, nicht brauchen“; es ist umgangssprachlich, klingt nachdrücklicher als 不用 und kann anders als 不用 auch ein Nomen als Objekt haben. Formeller ist 不必.",
          examples: [
            { cn: "笑什么笑？我说的是真的！", pinyin: "Xiào shénme xiào? Wǒ shuō de shì zhēn de!", de: "Was gibt's da zu lachen? Ich meine das ernst!" },
            { cn: "跑什么跑！地上很滑。", pinyin: "Pǎo shénme pǎo! Dì shang hěn huá.", de: "Hör auf zu rennen! Der Boden ist rutschig." },
            { cn: "什么面子不面子的，身体最重要。", pinyin: "Shénme miànzi bu miànzi de, shēntǐ zuì zhòngyào.", de: "Ach was, Gesichtswahrung hin oder her – die Gesundheit ist das Wichtigste." },
            { cn: "你用不着跟我解释，我都明白。", pinyin: "Nǐ yòngbuzháo gēn wǒ jiěshì, wǒ dōu míngbai.", de: "Du musst mir nichts erklären, ich verstehe das schon." },
            { cn: "这把伞你拿去吧，我用不着。", pinyin: "Zhè bǎ sǎn nǐ ná qù ba, wǒ yòngbuzháo.", de: "Nimm den Schirm ruhig mit, ich brauche ihn nicht." }
          ],
          tip: "什么贵不贵的 ist kein „egal ob“-Satz: Mit 不管 entsteht ein Konditionalsatz, der 都/也 braucht (不管贵不贵，我都买, siehe [[lesson:lesson-44]]). Die bejahte Form 用得着 steht vor allem in rhetorischen Fragen: 用得着这么着急吗？"
        },
        {
          heading: "In der Klemme: 进也不是，走也不是 und 打也打不得",
          text: "Mit <strong>X也不是，Y也不是</strong> beschreibst du eine verlegene Lage: Was man auch tut, es ist falsch. 不是 heißt hier „nicht richtig, nicht angebracht“; X und Y sind meist gegensätzliche Handlungen (哭 – 笑, 说 – 不说). Ähnlich, aber noch stärker ist <strong>X也X不得，Y也Y不得</strong>: Beide Möglichkeiten sind ausgeschlossen, weil sie verboten, unmöglich oder unklug sind. Jedes Verb wird wiederholt; 不得 (bù dé) heißt „nicht dürfen, nicht können“. Beide Muster sind gesprochen, beide Teile parallel gebaut; oft folgt eine Wertung wie 真为难 oder 真没办法.",
          examples: [
            { cn: "大家都让我唱歌，我唱也不是，不唱也不是。", pinyin: "Dàjiā dōu ràng wǒ chànggē, wǒ chàng yě bú shì, bú chàng yě bú shì.", de: "Alle wollten, dass ich singe – ich wusste nicht, ob ich singen oder ablehnen sollte." },
            { cn: "礼物太贵重了，我收也不是，不收也不是。", pinyin: "Lǐwù tài guìzhòng le, wǒ shōu yě bú shì, bù shōu yě bú shì.", de: "Das Geschenk ist viel zu wertvoll – annehmen kann ich es eigentlich nicht, ablehnen aber auch nicht." },
            { cn: "伤口还没好，碰也碰不得，洗也洗不得。", pinyin: "Shāngkǒu hái méi hǎo, pèng yě pèng bu dé, xǐ yě xǐ bu dé.", de: "Die Wunde ist noch nicht verheilt – man darf sie weder berühren noch waschen." },
            { cn: "朋友的东西放在我这儿，扔也扔不得，用也用不得。", pinyin: "Péngyou de dōngxi fàng zài wǒ zhèr, rēng yě rēng bu dé, yòng yě yòng bu dé.", de: "Die Sachen von Freunden stehen bei mir – wegwerfen darf ich sie nicht, benutzen aber auch nicht." }
          ],
          tip: "Dieselbe Idee steckt im festen Ausdruck 哭笑不得 „nicht wissen, ob man lachen oder weinen soll“. 不得了 „schrecklich, äußerst“ hat mit diesem 不得 nur die Form gemeinsam."
        },
        {
          heading: "Zugreifen und hinnehmen: 不吃白不吃, 闲着也是闲着, 说什么就是什么",
          text: "<strong>不X白不X</strong> sagt: Die Gelegenheit kostet nichts – wer sie auslässt, hat sie umsonst verschenkt. 白 (bái) heißt hier „umsonst“; X ist meist ein einsilbiges Verb, der Ton locker, manchmal leicht frech. <strong>X着也是X着</strong> sagt: Der jetzige Zustand (闲着, 空着, 坐着) bringt sowieso nichts, also kann man die Zeit oder Sache auch sinnvoll nutzen; danach folgt ein Vorschlag, oft mit 不如 oder 就……吧. <strong>Verb + 什么（就）是什么</strong> heißt „was auch immer jemand X-t, das gilt“ – als Autorität (奶奶说什么就是什么) oder als Hinnehmen ohne Wahl (分到什么就是什么); 就 ist häufig, kann aber fehlen. Alle drei Muster sind gesprochen und locker.",
          examples: [
            { cn: "免费的咖啡，不喝白不喝。", pinyin: "Miǎnfèi de kāfēi, bù hē bái bù hē.", de: "Der Kaffee ist gratis – da wäre man ja dumm, keinen zu trinken." },
            { cn: "公园今天不要门票，不去白不去。", pinyin: "Gōngyuán jīntiān bú yào ménpiào, bú qù bái bú qù.", de: "Der Park kostet heute keinen Eintritt – da wäre es schade, nicht hinzugehen." },
            { cn: "坐着也是坐着，我来帮你洗碗吧。", pinyin: "Zuòzhe yě shì zuòzhe, wǒ lái bāng nǐ xǐ wǎn ba.", de: "Ich sitze sowieso nur herum – lass mich dir beim Abwaschen helfen." },
            { cn: "那辆车放着也是放着，借给你开吧。", pinyin: "Nà liàng chē fàngzhe yě shì fàngzhe, jiè gěi nǐ kāi ba.", de: "Das Auto steht sowieso nur herum – ich leihe es dir." },
            { cn: "晚饭吃什么，你说什么就是什么。", pinyin: "Wǎnfàn chī shénme, nǐ shuō shénme jiù shì shénme.", de: "Was es zum Abendessen gibt, bestimmst du – was du sagst, gilt." }
          ],
          tip: "Nicht verwechseln: 想吃什么就吃什么 „iss, was du willst“ ist freie Wahl; bei 说什么就是什么 wird ein Ergebnis als gültig hingenommen. Und 白 + Verb allein heißt „vergeblich“: 我白跑了一趟 „Ich bin umsonst hingegangen.“"
        },
        {
          heading: "Kommentieren: 真有你的, 唱的唱，跳的跳, 成也是它，败也是它",
          text: "<strong>真有你/他/她的</strong> ist ein Ausruf im vertrauten Gespräch nach einer überraschenden Tat – anerkennend („Respekt!“) oder ironisch („Typisch du!“); was gemeint ist, zeigen nur Zusammenhang und Tonfall. <strong>A的A，B的B</strong> beschreibt eine Gruppe, deren Mitglieder Verschiedenes tun: „die einen …, die anderen …“; die Gruppe steht davor, oft folgt eine Gesamtbewertung. Das Muster wirkt lebendig und ist typisch für Erzählungen. <strong>X是它，Y也是它</strong> sagt, dass ein und dieselbe Sache zwei, meist gegensätzliche Wirkungen hat; 它 verweist auf das Thema am Satzanfang, bei Personen steht 他/她. Es klingt nachdenklich und steht in gesprochener wie geschriebener Sprache.",
          examples: [
            { cn: "你一个晚上就把这本书看完了？真有你的！", pinyin: "Nǐ yí ge wǎnshang jiù bǎ zhè běn shū kànwán le? Zhēn yǒu nǐ de!", de: "Du hast das Buch an einem Abend durchgelesen? Respekt!" },
            { cn: "他又迟到了，还说路上堵车，真有他的。", pinyin: "Tā yòu chídào le, hái shuō lùshang dǔchē, zhēn yǒu tā de.", de: "Er kommt schon wieder zu spät und schiebt es auf den Stau – typisch er." },
            { cn: "下课以后，同学们打球的打球，看书的看书。", pinyin: "Xiàkè yǐhòu, tóngxuémen dǎqiú de dǎqiú, kànshū de kànshū.", de: "Nach dem Unterricht spielen die einen Ball, die anderen lesen." },
            { cn: "一到周末，孩子们跑的跑，跳的跳，公园里热闹极了。", pinyin: "Yí dào zhōumò, háizimen pǎo de pǎo, tiào de tiào, gōngyuán lǐ rènao jí le.", de: "Am Wochenende rennen und springen die Kinder herum – im Park ist richtig was los." },
            { cn: "他的脾气，让他成功的是它，让他失败的也是它。", pinyin: "Tā de píqi, ràng tā chénggōng de shì tā, ràng tā shībài de yě shì tā.", de: "Sein Temperament hat ihm zum Erfolg verholfen – und es hat ihn auch scheitern lassen." }
          ],
          tip: "A的A schreibt man mit 的, nicht mit 得. Bei 真有你的 hilft oft der Satz davor: Wird eine Leistung geschildert, ist es Lob; ein wiederholtes Missgeschick (又……) macht es zum Tadel."
        }
      ]
    },
    // ── 除非 & 凡是 — einzige Bedingung und ausnahmslos (lesson-72) ──────────
    {
      id: 'lesson-72',
      number: 72,
      title: "除非 & 凡是 — einzige Bedingung und ausnahmslos",
      subtitle: "Nur wenn, es sei denn, alle die …",
      level: 'HSK6',
      grammarIds: ["g:除非……，才……","g:除非……，否则/不然……","g:凡是……，都……"],
      intro: "In dieser Lektion geht es um zwei Arten, Bedingungen und Aussagen zuzuspitzen. Mit <strong>除非</strong> (chúfēi) nennst du die <em>einzige</em> Bedingung, unter der etwas geschieht – entweder mit 才 im zweiten Teil („nur wenn …, erst dann …“) oder mit 否则/不然 („es sei denn …, sonst …“). Mit <strong>凡是……都</strong> (fánshì … dōu) triffst du eine Aussage über <em>alle</em> Fälle einer Gruppe: „alle, die …“, „alles, was …“. Die einfachere Form kennst du schon: 只有……才 aus [[lesson:lesson-40]] ist die neutrale Schwester von 除非……才. Die größte Hürde für Deutschsprachige: Das deutsche „es sei denn“ steht meist hinten, 除非 meist vorne – und 除非……否则 bedeutet „wenn nicht …, dann …“, obwohl in der Bedingung selbst kein Verneinungswort steht.",
      sections: [
        {
          heading: "除非……，才…… — nur wenn, erst dann",
          text: "<strong>除非</strong> (chúfēi) nennt die <em>einzige</em> Bedingung, unter der das Ergebnis eintritt. Im zweiten Teil steht <strong>才</strong> (cái) vor dem Verb – und zwar nach dem Subjekt, nicht am Satzanfang. Inhaltlich ist das dasselbe wie 只有……才, klingt aber nachdrücklicher: Die Bedingung wird als einzige Ausnahme hervorgehoben, alles andere ist ausgeschlossen. Nach 才 folgt häufig ein Modalverb wie 会, 能 oder 可以.",
          examples: [
            { cn: "除非你答应我的条件，我才会签这份合同。", pinyin: "Chúfēi nǐ dāying wǒ de tiáojiàn, wǒ cái huì qiān zhè fèn hétong.", de: "Nur wenn du auf meine Bedingungen eingehst, unterschreibe ich diesen Vertrag." },
            { cn: "除非经理亲自出面，这件事才有可能解决。", pinyin: "Chúfēi jīnglǐ qīnzì chūmiàn, zhè jiàn shì cái yǒu kěnéng jiějué.", de: "Nur wenn sich die Geschäftsleitung persönlich einschaltet, lässt sich die Sache vielleicht lösen." },
            { cn: "除非天天练习，你的口语才会有明显的进步。", pinyin: "Chúfēi tiāntiān liànxí, nǐ de kǒuyǔ cái huì yǒu míngxiǎn de jìnbù.", de: "Nur wenn du jeden Tag übst, wird dein Sprechen spürbar besser." },
            { cn: "除非价格降到一半，顾客才会考虑购买。", pinyin: "Chúfēi jiàgé jiàng dào yíbàn, gùkè cái huì kǎolǜ gòumǎi.", de: "Erst wenn der Preis auf die Hälfte fällt, wird die Kundschaft einen Kauf in Betracht ziehen." }
          ],
          tip: "Merkhilfe: 除 heißt „ausnehmen, außer“, 非 „nicht sein“ – 除非 entspricht also dem deutschen „es sei denn“. Denk beim 才-Satz an „<em>erst dann</em>“: Nur wenn die Bedingung erfüllt ist, erst dann tritt die Folge ein."
        },
        {
          heading: "除非……，否则/不然…… — es sei denn, sonst",
          text: "Statt mit 才 kannst du den zweiten Teil mit <strong>否则</strong> (fǒuzé) oder <strong>不然</strong> (bùrán) einleiten. Dann sagst du, was geschieht, <em>wenn die Bedingung nicht erfüllt ist</em>: „除非 A，否则 B“ = „wenn nicht A, dann B“. Die Bedingung ist meist positiv formuliert, die Folge oft negativ oder eine Warnung. 否则 und 不然 stehen am Anfang des zweiten Teils, vor dem Subjekt; 否则 klingt etwas formeller als 不然. Im Deutschen passen „außer wenn“, „ohne“ oder „wenn nicht“.",
          examples: [
            { cn: "除非你提前预订，否则周末很难订到房间。", pinyin: "Chúfēi nǐ tíqián yùdìng, fǒuzé zhōumò hěn nán dìng dào fángjiān.", de: "Wenn du nicht im Voraus buchst, bekommst du am Wochenende kaum ein Zimmer." },
            { cn: "除非有医生的证明，否则不能请病假。", pinyin: "Chúfēi yǒu yīshēng de zhèngmíng, fǒuzé bù néng qǐng bìngjià.", de: "Ohne ärztliches Attest kann man sich nicht krankmelden." },
            { cn: "除非你亲口道歉，不然她不会原谅你的。", pinyin: "Chúfēi nǐ qīnkǒu dàoqiàn, bùrán tā bú huì yuánliàng nǐ de.", de: "Wenn du dich nicht persönlich entschuldigst, wird sie dir nicht verzeihen." },
            { cn: "除非情况特别紧急，否则请先发邮件预约。", pinyin: "Chúfēi qíngkuàng tèbié jǐnjí, fǒuzé qǐng xiān fā yóujiàn yùyuē.", de: "Außer in dringenden Fällen bitte zuerst per E-Mail einen Termin vereinbaren." }
          ],
          tip: "Vorsicht beim Übersetzen: Das „wenn … nicht“ steckt schon in 除非. Für „Wenn du nicht im Voraus buchst, …“ sagst du ✅ 除非你提前预订，否则……. Ein zusätzliches 不 (❌ 除非你不提前预订，否则……) dreht die Bedingung logisch um („es sei denn, du buchst <em>nicht</em> …“) – für die gemeinte Aussage passt das nicht und ist zumindest missverständlich. 除非 + 不 steht dann, wenn die Ausnahme selbst verneint ist: 除非你不想去，不然我们明天就一起去吧。"
        },
        {
          heading: "除非 oder 只有? — Ton und nachgestelltes 除非",
          text: "除非……才 und 只有……才 drücken dieselbe notwendige Bedingung aus (zu 只有……才 siehe [[lesson:lesson-40]]); 除非 klingt nur schärfer, fast wie eine letzte Bedingung. 除非 kann außerdem <em>nachgestellt</em> werden: Zuerst steht das gewünschte Ziel, oft mit 要想, dann nennt 除非 den einzigen Weg dorthin – „wenn …, dann nur, wenn …“. In dieser Stellung folgt meist kein weiterer Teilsatz; oft wird nur 才行 angehängt (……，除非你亲自去请他才行).",
          examples: [
            { cn: "只有你亲自去说，他才会同意。", pinyin: "Zhǐyǒu nǐ qīnzì qù shuō, tā cái huì tóngyì.", de: "Nur wenn du selbst mit ihm redest, wird er zustimmen. (neutral)" },
            { cn: "除非你亲自去说，他才会同意。", pinyin: "Chúfēi nǐ qīnzì qù shuō, tā cái huì tóngyì.", de: "Er stimmt nur zu, wenn du selbst mit ihm redest – anders geht es nicht. (nachdrücklich)" },
            { cn: "要想让她改变主意，除非你拿出证据。", pinyin: "Yào xiǎng ràng tā gǎibiàn zhǔyi, chúfēi nǐ náchū zhèngjù.", de: "Wenn sie ihre Meinung ändern soll, musst du schon Beweise vorlegen." },
            { cn: "要想在这儿停车，除非你是公司的员工。", pinyin: "Yào xiǎng zài zhèr tíngchē, chúfēi nǐ shì gōngsī de yuángōng.", de: "Hier parken darfst du nur, wenn du zur Belegschaft der Firma gehörst." }
          ],
          tip: "Nachgestelltes 除非 kann auch spöttisch andeuten, dass etwas nie passieren wird: 他会道歉？除非太阳从西边出来！ – sinngemäß „Eher geht die Sonne im Westen auf.“"
        },
        {
          heading: "凡是……，都…… — alle, die …; alles, was …",
          text: "<strong>凡是</strong> (fánshì) steht am Satzanfang vor einer Nominalgruppe, meist mit Attributsatz auf 的 (……的人、……的东西、……的事), und fasst <em>alle Fälle dieser Art</em> zusammen. Im zweiten Teil bestätigt <strong>都</strong> (dōu), dass die Aussage ausnahmslos gilt; 都 steht vor dem Verb, nach einem eventuellen Subjekt. Ohne 都 (oder ein gleichwertiges Wort wie 一律) klingt der Satz unvollständig. Das Muster ist sachlich und steht oft in Regeln und Bekanntmachungen, ist aber auch im Gespräch üblich, wenn du verallgemeinerst.",
          examples: [
            { cn: "凡是买了票的观众，都可以免费领一瓶水。", pinyin: "Fánshì mǎi le piào de guānzhòng, dōu kěyǐ miǎnfèi lǐng yì píng shuǐ.", de: "Wer eine Eintrittskarte gekauft hat, bekommt kostenlos eine Flasche Wasser." },
            { cn: "凡是和健康有关的书，她都喜欢看。", pinyin: "Fánshì hé jiànkāng yǒuguān de shū, tā dōu xǐhuan kàn.", de: "Sie liest gern alles, was mit Gesundheit zu tun hat. (都 nach dem Subjekt 她)" },
            { cn: "凡是迟到超过十五分钟的学生，都不能参加考试。", pinyin: "Fánshì chídào chāoguò shíwǔ fēnzhōng de xuésheng, dōu bù néng cānjiā kǎoshì.", de: "Wer mehr als fünfzehn Minuten zu spät kommt, darf nicht an der Prüfung teilnehmen." },
            { cn: "凡是答应过别人的事，他都会认真去做。", pinyin: "Fánshì dāying guo biérén de shì, tā dōu huì rènzhēn qù zuò.", de: "Alles, was er anderen versprochen hat, erledigt er gewissenhaft." }
          ],
          tip: "Ausblick: In sehr schriftlichen Texten wie Vorschriften findest du die knappere Form 凡……者，均……."
        },
        {
          heading: "Typische Fehler mit 凡是 und 除非",
          text: "凡是 bezieht sich auf eine <em>Gruppe</em> von Personen oder Dingen, nicht auf einen ganzen Satz mit eigenem Subjekt – für eine hinreichende Bedingung nimmst du 只要……就. Bei 除非……才 rutscht 才 leicht an die falsche Stelle: Es gehört hinter das Subjekt des zweiten Teils. Und vergiss bei 凡是 das 都 nicht.",
          examples: [
            { cn: "❌ 凡是你努力，都会成功。", pinyin: "", de: "Falsch: 凡是 steht hier vor einem ganzen Satz mit Subjekt (你努力)." },
            { cn: "✅ 只要你努力，就会成功。", pinyin: "Zhǐyào nǐ nǔlì, jiù huì chénggōng.", de: "Solange du dich anstrengst, wirst du Erfolg haben." },
            { cn: "❌ 除非你去请他，才他会来。", pinyin: "", de: "Falsch: 才 steht vor dem Subjekt 他." },
            { cn: "✅ 除非你去请他，他才会来。", pinyin: "Chúfēi nǐ qù qǐng tā, tā cái huì lái.", de: "Nur wenn du ihn einlädst, kommt er." },
            { cn: "✅ 凡是来参加的人，都可以拿一份资料。", pinyin: "Fánshì lái cānjiā de rén, dōu kěyǐ ná yí fèn zīliào.", de: "Alle, die teilnehmen, können sich Unterlagen mitnehmen. (mit 都)" }
          ],
          tip: "凡是 oder 不管/无论? 凡是 fasst eine Gruppe zusammen („alle, die …“), 不管/无论……都 geht verschiedene Möglichkeiten durch („egal ob …, egal wer …“) – siehe [[lesson:lesson-44]]."
        }
      ]
    },
    // ── 要么, 一时……一时 & 也好 — entweder, mal, egal (lesson-73) ──────────
    {
      id: 'lesson-73',
      number: 73,
      title: "要么, 一时……一时 & 也好 — entweder, mal, egal",
      subtitle: "Wählen, wechseln, gelten lassen",
      level: 'HSK6',
      grammarIds: ["g:要么……，要么……","g:一时……一时……","g:也好"],
      intro: "In dieser Lektion lernst du drei Muster, die mit Alternativen spielen. <strong>要么……要么</strong> (yàome … yàome) stellt dich vor eine Wahl: „entweder … oder …“ – und meist gibt es keinen dritten Weg. <strong>一时……一时</strong> (yìshí … yìshí) beschreibt, wie zwei Zustände rasch wechseln: „mal …, mal …“. Mit <strong>也好</strong> (yěhǎo) sagst du entweder, dass es egal ist, welche Möglichkeit eintritt („ob A oder B …“), oder dass du eine Lage hinnimmst („auch gut“). Im Deutschen erledigen „oder“ und „egal“ vieles davon; im Chinesischen wählst du genauer: Ist es eine Entscheidung (要么), eine neutrale Aufzählung (或者), eine Frage (还是) oder ein „egal“ (也好)?",
      sections: [
        {
          heading: "要么……，要么…… — entweder … oder",
          text: "<strong>要么</strong> (yàome) steht am Anfang jedes Teils und stellt zwei (selten mehr) Möglichkeiten nebeneinander, von denen eine gewählt werden <em>muss</em>. Typisch sind Vorschläge, Aufforderungen und Entscheidungen; oft schwingt mit, dass es keine dritte Möglichkeit gibt. Bei gleichem Subjekt steht 要么 vor dem Verb, bei verschiedenen Subjekten vor dem ganzen Teilsatz. Das Muster ist gesprochen wie geschrieben üblich.",
          examples: [
            { cn: "你要么接受这份工作，要么继续找，别再犹豫了。", pinyin: "Nǐ yàome jiēshòu zhè fèn gōngzuò, yàome jìxù zhǎo, bié zài yóuyù le.", de: "Entweder du nimmst die Stelle an oder du suchst weiter – hör auf zu zögern." },
            { cn: "要么你去，要么我去，总得有人去开会。", pinyin: "Yàome nǐ qù, yàome wǒ qù, zǒngděi yǒu rén qù kāihuì.", de: "Entweder gehst du oder ich – irgendwer muss zu der Besprechung." },
            { cn: "这件事要么今天解决，要么就别再提了。", pinyin: "Zhè jiàn shì yàome jīntiān jiějué, yàome jiù bié zài tí le.", de: "Entweder klären wir das heute, oder wir reden nicht mehr davon." },
            { cn: "我们要么坐高铁，要么开车，飞机票太贵了。", pinyin: "Wǒmen yàome zuò gāotiě, yàome kāichē, fēijīpiào tài guì le.", de: "Wir nehmen entweder den Schnellzug oder das Auto – Flugtickets sind zu teuer." }
          ],
          tip: "Umgangssprachlich hörst du auch 要不……要不……, gleichbedeutend mit 要么……要么……."
        },
        {
          heading: "要么, 或者, 不是……就是, 还是 — der Vergleich",
          text: "要么 klingt bestimmter als <strong>或者……或者</strong>, das Möglichkeiten nur neutral aufzählt. <strong>不是……就是</strong> stellt keine Wahl, sondern stellt fest oder vermutet, dass eins von beiden zutrifft. <strong>还是</strong> steht in Fragen (mehr zu 还是 und 或者 in [[lesson:lesson-31]]). Vergleiche:",
          examples: [
            { cn: "周末我或者看书，或者去游泳。", pinyin: "Zhōumò wǒ huòzhě kàn shū, huòzhě qù yóuyǒng.", de: "Am Wochenende lese ich oder gehe schwimmen. (neutrale Aufzählung)" },
            { cn: "他每天晚上不是加班，就是去健身房。", pinyin: "Tā měitiān wǎnshang bú shì jiābān, jiù shì qù jiànshēnfáng.", de: "Abends macht er entweder Überstunden oder geht ins Fitnessstudio. (Feststellung)" },
            { cn: "你喝茶还是喝咖啡？", pinyin: "Nǐ hē chá háishi hē kāfēi?", de: "Trinkst du Tee oder Kaffee? (Frage)" },
            { cn: "要么你道歉，要么我们就别做朋友了。", pinyin: "Yàome nǐ dàoqiàn, yàome wǒmen jiù bié zuò péngyou le.", de: "Entweder du entschuldigst dich, oder mit unserer Freundschaft ist es vorbei. (Wahl, fast ein Ultimatum)" }
          ],
          tip: "Test: Kannst du „du musst dich entscheiden“ dazudenken? Dann passt 要么. Beschreibst du nur, was meistens der Fall ist? Dann 不是……就是."
        },
        {
          heading: "一时……一时…… — mal …, mal …",
          text: "<strong>一时</strong> (yìshí) heißt allein „eine Zeit lang, im Moment“. Paarweise gebraucht beschreibt es, dass zwei Zustände oder Handlungen kurz nacheinander wechseln – oft Stimmungen, Meinungen oder das Wetter, und häufig mit einem Unterton von Unbeständigkeit oder Unentschlossenheit. A und B sind meist Gegensätze; vor dem zweiten Teil steht gern 又. Das Muster ist etwas gehobener und schriftlicher als das alltägliche 一会儿……一会儿……, bedeutet aber fast dasselbe.",
          examples: [
            { cn: "春天的天气一时冷，一时热，很容易感冒。", pinyin: "Chūntiān de tiānqì yìshí lěng, yìshí rè, hěn róngyì gǎnmào.", de: "Im Frühling ist es mal kalt, mal warm – da erkältet man sich leicht." },
            { cn: "听到这个消息，她一时哭，一时笑，心情十分复杂。", pinyin: "Tīngdào zhège xiāoxi, tā yìshí kū, yìshí xiào, xīnqíng shífēn fùzá.", de: "Nach der Nachricht weinte sie im einen Moment und lachte im nächsten – ihre Gefühle waren völlig durcheinander." },
            { cn: "这孩子一时想学钢琴，一时又想学画画。", pinyin: "Zhè háizi yìshí xiǎng xué gāngqín, yìshí yòu xiǎng xué huàhuà.", de: "Mal will das Kind Klavier lernen, dann wieder malen." },
            { cn: "他一时说支持，一时又说反对，大家都不知道他是怎么想的。", pinyin: "Tā yìshí shuō zhīchí, yìshí yòu shuō fǎnduì, dàjiā dōu bù zhīdào tā shì zěnme xiǎng de.", de: "Mal sagt er, er sei dafür, mal wieder, er sei dagegen – niemand weiß, was er eigentlich denkt." },
            { cn: "我一时想不起来那本书的名字。", pinyin: "Wǒ yìshí xiǎng bu qǐlai nà běn shū de míngzi.", de: "Mir fällt der Titel des Buchs gerade nicht ein. (einzelnes 一时 = „im Moment“)" }
          ],
          tip: "Noch schriftlicher als 一时……一时 ist 时而……时而……. Im Alltag sagst du meist 一会儿……一会儿……: 孩子们一会儿唱歌，一会儿跳舞。"
        },
        {
          heading: "A 也好，B 也好 — ob A oder B",
          text: "Die Partikel <strong>也好</strong> (yěhǎo) wird paarweise oder mehrfach hinter Möglichkeiten gesetzt, die <em>alle</em> am Ergebnis nichts ändern: „ob A oder B, …“. Im Folgeteil steht dann meist 都 oder 也. A und B können Nomen, Verben, Adjektive oder Gegensatzpaare (同意也好，反对也好) sein. Dasselbe „egal ob“ drückst du mit 不管/无论……都 aus, dort aber mit einer Konjunktion am Anfang (siehe [[lesson:lesson-44]]).",
          examples: [
            { cn: "白天也好，晚上也好，你随时都可以给我打电话。", pinyin: "Báitiān yěhǎo, wǎnshang yěhǎo, nǐ suíshí dōu kěyǐ gěi wǒ dǎ diànhuà.", de: "Ob tagsüber oder abends – du kannst mich jederzeit anrufen." },
            { cn: "大城市也好，小城市也好，房价都在上涨。", pinyin: "Dà chéngshì yěhǎo, xiǎo chéngshì yěhǎo, fángjià dōu zài shàngzhǎng.", de: "Ob in großen oder kleinen Städten – die Wohnungspreise steigen überall." },
            { cn: "同意也好，反对也好，大家都可以发表意见。", pinyin: "Tóngyì yěhǎo, fǎnduì yěhǎo, dàjiā dōu kěyǐ fābiǎo yìjiàn.", de: "Ob dafür oder dagegen – alle dürfen ihre Meinung sagen." },
            { cn: "老人也好，孩子也好，都很喜欢这部电影。", pinyin: "Lǎorén yěhǎo, háizi yěhǎo, dōu hěn xǐhuan zhè bù diànyǐng.", de: "Ob Alt oder Jung – alle mögen diesen Film." },
            { cn: "不管是老人还是孩子，都很喜欢这部电影。", pinyin: "Bùguǎn shì lǎorén háishi háizi, dōu hěn xǐhuan zhè bù diànyǐng.", de: "Egal ob Alt oder Jung – alle mögen diesen Film. (gleiche Aussage mit 不管)" }
          ],
          tip: "Ausblick: Gehobener klingt die Paarung mit 也罢 im zweiten Glied: X 也好，Y 也罢."
        },
        {
          heading: "Satz + 也好 — auch gut, na dann eben",
          text: "Einzeln am Ende eines Satzes drückt 也好 aus, dass du eine Lage hinnimmst oder ihr sogar etwas Gutes abgewinnst: „auch gut“, „na, dann eben“. Oft ist die Lage eigentlich nicht ideal – mit 也好 zeigst du, dass du dich damit abfindest oder einen Vorteil darin siehst. Nebenbei: Im Gespräch steht 也好 auch allein als knappe Antwort auf einen Vorschlag, ähnlich wie „Na gut“, oft gefolgt von einem weiteren Satz.",
          examples: [
            { cn: "航班取消了也好，我们可以在这儿多玩一天。", pinyin: "Hángbān qǔxiāo le yěhǎo, wǒmen kěyǐ zài zhèr duō wán yì tiān.", de: "Dass der Flug gestrichen wurde, ist auch gut – so können wir einen Tag länger hierbleiben." },
            { cn: "你先回去也好，路上小心点儿。", pinyin: "Nǐ xiān huíqu yěhǎo, lùshang xiǎoxīn diǎnr.", de: "Geh ruhig schon vor, das ist auch in Ordnung – pass auf dem Weg auf." },
            { cn: "让他自己去试试也好，失败了也是一种经验。", pinyin: "Ràng tā zìjǐ qù shìshi yěhǎo, shībài le yě shì yì zhǒng jīngyàn.", de: "Es ist ganz gut, wenn er es selbst versucht – auch ein Misserfolg ist eine Erfahrung." },
            { cn: "也好，那我们明天再谈吧。", pinyin: "Yěhǎo, nà wǒmen míngtiān zài tán ba.", de: "Na gut, dann reden wir morgen weiter. (Antwort auf einen Vorschlag)" }
          ],
          tip: "Unterschied zu 好吧: 好吧 ist meist ein schlichtes „okay“, oft mit einem Hauch Widerwillen; 也好 klingt eher so, als würdest du der Sache auch etwas Gutes abgewinnen."
        }
      ]
    },
    // ── 虽, 就算 & 倒是 — knapp einräumen (lesson-74) ──────────
    {
      id: 'lesson-74',
      number: 74,
      title: "虽, 就算 & 倒是 — knapp einräumen",
      subtitle: "zwar …, selbst wenn …, eigentlich schon …",
      level: 'HSK6',
      grammarIds: ["g:虽……，但/可/却/也……","g:就算……，也……","g:倒是"],
      intro: "Einräumen heißt: Du gibst etwas zu und setzt dann einen Gegensatz. Das Grundmuster 虽然……但是 kennst du aus [[lesson:lesson-14]]. Hier kommen drei Mittel dazu, die sich vor allem im Register unterscheiden: <strong>虽</strong> (suī) ist die knappe, eher schriftliche Kurzform von 虽然; <strong>就算……也</strong> (jiùsuàn … yě) ist gesprochen und räumt meist eine <em>Annahme</em> ein („selbst wenn …“); <strong>倒是</strong> (dàoshi) ist ein umgangssprachliches Modaladverb, mit dem du einen positiven Punkt zugibst, bevor die Einschränkung kommt. Der wichtigste Unterschied zum Deutschen: „zwar“ und „auch“ sind im Satz recht beweglich, 虽 und 倒是 stehen dagegen in der Regel nach dem Subjekt, und 也 gehört im zweiten Teil hinter das Subjekt, direkt vor das Prädikat.",
      sections: [
        {
          heading: "虽……，但/可/却/也…… — zwar …, aber (knapp)",
          text: "<strong>虽</strong> (suī) räumt im ersten Teil eine Tatsache ein, der zweite Teil nennt den Gegensatz mit 但, 可, 却 oder 也. 虽 steht in der Regel nach dem Subjekt, direkt vor einem kurzen Prädikat – oft einem einsilbigen Adjektiv (虽小、虽好、虽远). Die Form wirkt knapp und gehoben; du findest sie vor allem in Texten, Reden und Kommentaren.",
          examples: [
            { cn: "这台电脑虽旧，但用起来还很顺手。", pinyin: "Zhè tái diànnǎo suī jiù, dàn yòng qǐlai hái hěn shùnshǒu.", de: "Der Computer ist zwar alt, lässt sich aber noch gut bedienen." },
            { cn: "她虽身材瘦小，力气却很大。", pinyin: "Tā suī shēncái shòuxiǎo, lìqi què hěn dà.", de: "Sie ist zwar zierlich, aber sehr kräftig." },
            { cn: "这次比赛虽输了，可大家都学到了很多。", pinyin: "Zhè cì bǐsài suī shū le, kě dàjiā dōu xuédào le hěn duō.", de: "Das Spiel haben wir zwar verloren, aber alle haben viel gelernt." },
            { cn: "路途虽远，我们也一定会准时赶到。", pinyin: "Lùtú suī yuǎn, wǒmen yě yídìng huì zhǔnshí gǎndào.", de: "Der Weg ist zwar weit, aber wir kommen auf jeden Fall pünktlich an." }
          ],
          tip: "Im Alltag sagt man eher 虽然……但是/可是……. 虽 klingt am natürlichsten vor einem kurzen Prädikat."
        },
        {
          heading: "但/可 oder 却/也? — die Stellung im zweiten Teil",
          text: "Die vier Gegensatzwörter stehen an verschiedenen Stellen: <strong>但</strong> und <strong>可</strong> stehen <em>vor</em> dem Subjekt des zweiten Teils, <strong>却</strong> und <strong>也</strong> sind Adverbien und stehen <em>danach</em>, direkt vor dem Prädikat. Aus dem klassischen Chinesisch stammen feste Wendungen mit 虽, etwa 虽败犹荣 („zwar besiegt, aber ehrenvoll“).",
          examples: [
            { cn: "虽然这家店很小，但是东西很全。", pinyin: "Suīrán zhè jiā diàn hěn xiǎo, dànshì dōngxi hěn quán.", de: "Der Laden ist zwar klein, aber es gibt alles. (alltäglich)" },
            { cn: "这家店虽小，东西却很全。", pinyin: "Zhè jiā diàn suī xiǎo, dōngxi què hěn quán.", de: "Der Laden ist zwar klein, hat aber alles. (knapp; 却 nach dem Subjekt 东西)" },
            { cn: "这个计划虽好，但我们现在没有足够的钱。", pinyin: "Zhège jìhuà suī hǎo, dàn wǒmen xiànzài méiyǒu zúgòu de qián.", de: "Der Plan ist zwar gut, aber uns fehlt im Moment das Geld. (但 vor dem Subjekt 我们)" },
            { cn: "他虽是新手，可大家都很信任他。", pinyin: "Tā suī shì xīnshǒu, kě dàjiā dōu hěn xìnrèn tā.", de: "Er ist zwar neu, aber alle vertrauen ihm. (可 vor dem Subjekt 大家)" },
            { cn: "麻雀虽小，五脏俱全。", pinyin: "Máquè suī xiǎo, wǔzàng jùquán.", de: "Der Spatz ist zwar klein, hat aber alle Organe – klein, aber alles Nötige ist da. (Redensart)" }
          ],
          tip: "❌ 这家店虽小，却东西很全。 → ✅ 这家店虽小，东西却很全。 却 gehört hinter das Subjekt."
        },
        {
          heading: "就算……，也…… — selbst wenn (gesprochen)",
          text: "<strong>就算</strong> (jiùsuàn) leitet meist eine <em>Annahme</em> ein, oft eine hypothetische oder extreme Bedingung; <strong>也</strong> im zweiten Teil zeigt, dass das Ergebnis trotzdem gilt. Darin liegt der Unterschied zu 虽: 虽 räumt eine Tatsache ein, 就算 meist etwas Angenommenes – es kann aber auch ein Zugeständnis an eine Tatsache sein („mag sein, dass …“). 就算 ist die gesprochene Entsprechung von 即使……也 und kann vor oder nach dem Subjekt stehen. Häufig steigert 再 die Bedingung (就算再忙); vor Nomen steht 就算是.",
          examples: [
            { cn: "就算明天下大雪，比赛也会照常进行。", pinyin: "Jiùsuàn míngtiān xià dà xuě, bǐsài yě huì zhàocháng jìnxíng.", de: "Selbst wenn es morgen stark schneit, findet das Spiel wie geplant statt." },
            { cn: "就算再忙，你也要按时吃饭。", pinyin: "Jiùsuàn zài máng, nǐ yě yào ànshí chīfàn.", de: "Egal wie viel du zu tun hast, du musst regelmäßig essen." },
            { cn: "我就算不睡觉，也要把报告写完。", pinyin: "Wǒ jiùsuàn bú shuìjiào, yě yào bǎ bàogào xiěwán.", de: "Und wenn ich nicht schlafe – den Bericht schreibe ich fertig. (就算 nach dem Subjekt)" },
            { cn: "就算是专家，也会有看错的时候。", pinyin: "Jiùsuàn shì zhuānjiā, yě huì yǒu kàncuò de shíhou.", de: "Selbst Fachleute liegen manchmal falsch. (就算是 vor einem Nomen)" },
            { cn: "就算你说得有道理，也该先听听别人的意见。", pinyin: "Jiùsuàn nǐ shuō de yǒu dàoli, yě gāi xiān tīngting biérén de yìjiàn.", de: "Mag sein, dass du recht hast – trotzdem solltest du erst die anderen anhören." }
          ],
          tip: "❌ 就算你不同意，也我要去。 → ✅ 就算你不同意，我也要去。 也 steht hinter dem Subjekt. Verwandt: 即使……也 (neutral bis schriftlich), 就是……也 (gesprochen, nachdrücklich), 哪怕……也 (emotional, betont das Extreme)."
        },
        {
          heading: "倒是 — zwar …, nur …: einräumen",
          text: "Das Modaladverb <strong>倒是</strong> (dàoshi) steht nach dem Subjekt vor dem Prädikat und ist umgangssprachlich. Am häufigsten gibst du damit einen positiven Punkt zu, bevor eine Einschränkung mit 就是, 可是 oder 不过 folgt – wie im Deutschen „… ist ja schon …, nur …“. Ohne Einschränkung drückt 倒是 Zustimmung mit leichter Überraschung aus: „das ist ja eigentlich …“.",
          examples: [
            { cn: "这套房子倒是挺大的，就是离地铁站太远了。", pinyin: "Zhè tào fángzi dàoshi tǐng dà de, jiùshì lí dìtiězhàn tài yuǎn le.", de: "Die Wohnung ist zwar ziemlich groß, nur liegt sie zu weit von der U-Bahn." },
            { cn: "他中文倒是说得很流利，不过汉字写得不太好。", pinyin: "Tā Zhōngwén dàoshi shuō de hěn liúlì, búguò Hànzì xiě de bú tài hǎo.", de: "Chinesisch spricht er ja fließend, aber mit den Schriftzeichen hapert es." },
            { cn: "这家店的服务倒是挺热情，可是价格太高了。", pinyin: "Zhè jiā diàn de fúwù dàoshi tǐng rèqíng, kěshì jiàgé tài gāo le.", de: "Der Service in dem Laden ist zwar sehr freundlich, aber die Preise sind zu hoch." },
            { cn: "这个办法倒是挺新鲜的，可以试试。", pinyin: "Zhège bànfǎ dàoshi tǐng xīnxiān de, kěyǐ shìshi.", de: "Die Methode ist ja eigentlich ganz originell – probieren wir sie aus. (Zustimmung)" },
            { cn: "你说的倒是有道理。", pinyin: "Nǐ shuō de dàoshi yǒu dàoli.", de: "Da hast du eigentlich recht." }
          ],
          tip: "Die Kurzform 倒 (dào) wird ähnlich gebraucht: 菜倒不贵. Als feste Antwort hörst du oft 那倒（也）是 – „da hast du eigentlich recht“."
        },
        {
          heading: "倒是 gegen die Erwartung und zum Drängen",
          text: "Zwei weitere Gebrauchsweisen: 倒是 markiert einen <em>Gegensatz zur Erwartung</em> oder zum Normalfall („dagegen, ausgerechnet“), und mit 呀/啊 am Satzende drängt es ungeduldig: „Nun … doch endlich!“. Abgrenzung zu <strong>反而</strong> (fǎn'ér): 反而 sagt, dass das Gegenteil des Erwarteten eintritt – eine Ursache bewirkt das Gegenteil; 倒是 ist weicher und dient oft nur dem Einräumen oder Gegenüberstellen.",
          examples: [
            { cn: "哥哥平时很少运动，这次爬山倒是走得最快。", pinyin: "Gēge píngshí hěn shǎo yùndòng, zhè cì pá shān dàoshi zǒu de zuì kuài.", de: "Mein Bruder treibt sonst kaum Sport, aber ausgerechnet diesmal beim Wandern war er der Schnellste." },
            { cn: "大家都很紧张，她倒是一点儿也不着急。", pinyin: "Dàjiā dōu hěn jǐnzhāng, tā dàoshi yìdiǎnr yě bù zháojí.", de: "Alle sind nervös – sie dagegen ist völlig gelassen." },
            { cn: "你倒是快点儿啊，电影马上就开始了！", pinyin: "Nǐ dàoshi kuài diǎnr a, diànyǐng mǎshàng jiù kāishǐ le!", de: "Nun beeil dich doch, der Film fängt gleich an!" },
            { cn: "你倒是拿个主意呀！", pinyin: "Nǐ dàoshi ná ge zhǔyi ya!", de: "Nun entscheide dich doch endlich!" },
            { cn: "吃了药，病不但没好，反而更重了。", pinyin: "Chī le yào, bìng búdàn méi hǎo, fǎn'ér gèng zhòng le.", de: "Nach der Medizin ging es nicht besser, sondern sogar schlechter. (反而: Ursache bewirkt das Gegenteil)" }
          ],
          tip: "Das drängende 倒是 klingt ungeduldig, fast vorwurfsvoll – gegenüber Vorgesetzten oder Fremden ist es eher unpassend."
        }
      ]
    },
    // ── Schriftsprache: 于, 因, 除, 所 & 以便 (lesson-75) ──────────
    {
      id: 'lesson-75',
      number: 75,
      title: "Schriftsprache: 于, 因, 除, 所 & 以便",
      subtitle: "Knappe Präpositionen und 所 für formelle Texte",
      level: 'HSK6',
      grammarIds: ["g:于","g:因","g:除","g:所","g:至于","g:……，以便……"],
      intro: "In Nachrichten, Aushängen, Lebensläufen und Berichten begegnen dir einsilbige Wörter, die du aus der Alltagssprache in längerer Form kennst: <strong>于</strong> statt 在, <strong>因</strong> statt 因为, <strong>除……外</strong> statt 除了……以外. Dazu kommen die Partikel <strong>所</strong>, die vor einem Verb ein „das, was …“ bildet, und <strong>以便</strong> „damit“, das den Zweck im zweiten Satzteil nachreicht. In dieser Lektion lernst du, diese Wörter zu lesen und in formellen Sätzen selbst einzusetzen – und wo sie im Gespräch steif klingen. Außerdem übst du <strong>至于</strong>, mit dem du zu einem weiteren Thema überleitest; es ist neutral und auch mündlich üblich. Anders als deutsche Amtswörter wie „aufgrund“ oder „gemäß“ verlangen die chinesischen Kurzformen oft feste Partner: 除 braucht 外, 于 hängt an bestimmten Verben, 所 steht meist mit 的.",
      sections: [
        {
          heading: "于 — Zeit und Ort in formellen Texten",
          text: "<strong>于</strong> (yú) führt wie 在 einen Zeitpunkt oder Ort ein, klingt aber schriftsprachlich. Es steht an zwei Stellen: <em>nach</em> einem meist einsilbigen Verb, mit dem es fest verbunden ist (生于 „geboren in/am“, 位于 „liegt in“, 毕业于 „Abschluss an“, 成立于 „gegründet im Jahr“), oder <em>vor</em> dem Verb, wo sonst 在 stünde – typisch in Ankündigungen mit 将: 将于……举行. Im Alltag sagst du dafür einfach 在 (siehe [[lesson:lesson-24]]).",
          examples: [
            { cn: "本次展览将于五月一日开幕。", pinyin: "Běn cì zhǎnlǎn jiāng yú wǔ yuè yī rì kāimù.", de: "Die Ausstellung wird am 1. Mai eröffnet." },
            { cn: "该公司成立于二零零八年。", pinyin: "Gāi gōngsī chénglì yú èr líng líng bā nián.", de: "Das Unternehmen wurde 2008 gegründet." },
            { cn: "她二零一五年毕业于复旦大学。", pinyin: "Tā èr líng yī wǔ nián bìyè yú Fùdàn Dàxué.", de: "Sie hat 2015 ihren Abschluss an der Fudan-Universität gemacht." },
            { cn: "黄山位于安徽省南部。", pinyin: "Huángshān wèiyú Ānhuī Shěng nánbù.", de: "Der Huangshan liegt im Süden der Provinz Anhui." }
          ],
          tip: "❌ 我明天于家休息。 → ✅ 我明天在家休息。 Im Gespräch wirkt 于 gestelzt, und nach beliebigen Verben steht es nicht – es hängt an festen Partnern wie 生于, 位于, 毕业于. Andere Verwendungen sind eigene Punkte: 大于 „größer als“, 对于, 由于 und das Wort 于是 „daraufhin“. Zu den Jahreszahlen: Neben 二零零八年 ist die genormte Schreibung mit 〇 verbreitet (二〇〇八年); gelesen wird beides gleich."
        },
        {
          heading: "因 — wegen (knapp und formell)",
          text: "<strong>因</strong> (yīn) ist die knappe Form von 因为 und nennt eine Ursache: „wegen, aufgrund von“. Es steht meist nach dem Subjekt vor dem Verb; dahinter folgt ein kurzes Nomen oder eine knappe Wortgruppe. Daraus sind feste Verbindungen entstanden: 因病 „krankheitsbedingt“, 因故 „aus bestimmten Gründen“, 因事 „wegen einer Angelegenheit“. Du findest 因 vor allem in Nachrichten, Mitteilungen und auf Aushängen; im Gespräch sagst du 因为 (siehe [[lesson:lesson-15]]).",
          examples: [
            { cn: "航班因天气原因取消。", pinyin: "Hángbān yīn tiānqì yuányīn qǔxiāo.", de: "Der Flug wurde wetterbedingt gestrichen." },
            { cn: "小王因事请假一天。", pinyin: "Xiǎo Wáng yīn shì qǐngjià yì tiān.", de: "Xiao Wang hat sich wegen einer Angelegenheit einen Tag freigenommen." },
            { cn: "今晚的音乐会因故取消。", pinyin: "Jīnwǎn de yīnyuèhuì yīn gù qǔxiāo.", de: "Das Konzert heute Abend wurde aus bestimmten Gründen abgesagt." },
            { cn: "这家工厂因污染问题被关闭了。", pinyin: "Zhè jiā gōngchǎng yīn wūrǎn wèntí bèi guānbì le.", de: "Die Fabrik wurde wegen Umweltverschmutzung geschlossen." }
          ],
          tip: "❌ 因他昨天晚上没睡好，今天很累。 → ✅ 因为他昨天晚上没睡好，所以今天很累。 Vor einem ganzen Nebensatz stehen 因为 oder 由于; 因 trägt nur eine kurze Ursache. Nicht verwechseln: 因此 „deshalb“ leitet die Folge ein, nicht die Ursache."
        },
        {
          heading: "除……外 — außer, neben (formell)",
          text: "<strong>除</strong> (chú) ist die schriftsprachliche Kurzform von 除了, die du aus [[lesson:lesson-38]] kennst. Anders als bei 除了 ist der Rahmen hier nahezu fest: 除……外, 除……以外 oder 除……之外. Die Logik bleibt dieselbe: Mit 都 wird das Genannte ausgeschlossen („alle außer X“), mit 还 oder 也 kommt etwas hinzu („neben X auch …“). Typisch ist 除 in Regeln, Öffnungszeiten, Stellenanzeigen und Mitteilungen.",
          examples: [
            { cn: "除节假日外，图书馆每天都开放。", pinyin: "Chú jiéjiàrì wài, túshūguǎn měi tiān dōu kāifàng.", de: "Außer an Feiertagen ist die Bibliothek täglich geöffnet." },
            { cn: "除本人以外，任何人不得使用此卡。", pinyin: "Chú běnrén yǐwài, rènhé rén bùdé shǐyòng cǐ kǎ.", de: "Außer der Karteninhaberin oder dem Karteninhaber darf niemand diese Karte benutzen." },
            { cn: "除一名学生之外，全班都通过了考试。", pinyin: "Chú yì míng xuésheng zhīwài, quán bān dōu tōngguò le kǎoshì.", de: "Bis auf eine Person hat die ganze Klasse die Prüfung bestanden." },
            { cn: "除中文以外，这份工作还要求会说英语。", pinyin: "Chú Zhōngwén yǐwài, zhè fèn gōngzuò hái yāoqiú huì shuō Yīngyǔ.", de: "Neben Chinesisch werden für diese Stelle auch Englischkenntnisse verlangt." }
          ],
          tip: "❌ 除星期一，博物馆每天都开放。 → ✅ 除星期一外，博物馆每天都开放。 Bei 除 fehlt der Abschluss 外/以外/之外 so gut wie nie; nur bei 除了 darf er entfallen. Und 除非 „es sei denn“ leitet eine Bedingung ein – ein ganz anderes Wort."
        },
        {
          heading: "所 + Verb + 的 — das, was …",
          text: "Die Strukturpartikel <strong>所</strong> (suǒ) steht direkt vor einem transitiven Verb und macht daraus eine Nominalgruppe für das <em>Objekt</em> der Handlung: 我们所做的 „das, was wir tun“. Meist folgt 的 und oft ein Nomen; die handelnde Person steht davor. Ohne 所 bleibt der Satz korrekt (我们做的), klingt aber neutraler – mit 所 wirkt er gehobener und betonter, typisch für Reden, Berichte und Sachtexte. Zur Partikel 的 selbst siehe [[lesson:lesson-2]].",
          examples: [
            { cn: "我们所做的一切都是为了孩子。", pinyin: "Wǒmen suǒ zuò de yíqiè dōu shì wèile háizi.", de: "Alles, was wir tun, tun wir für die Kinder." },
            { cn: "这不是我所希望的结果。", pinyin: "Zhè bú shì wǒ suǒ xīwàng de jiéguǒ.", de: "Das ist nicht das Ergebnis, das ich mir erhofft habe." },
            { cn: "你所提到的问题，我们会认真研究。", pinyin: "Nǐ suǒ tídào de wèntí, wǒmen huì rènzhēn yánjiū.", de: "Den Punkt, den du angesprochen hast, werden wir sorgfältig prüfen." },
            { cn: "正如大家所看到的，今年的销售额增长很快。", pinyin: "Zhèngrú dàjiā suǒ kàndào de, jīnnián de xiāoshòu'é zēngzhǎng hěn kuài.", de: "Wie alle sehen können, ist der Umsatz in diesem Jahr stark gestiegen." }
          ],
          tip: "❌ 他所休息的时间不多。 所 steht nur vor Verben, die ein Objekt haben können, und nicht vor Adjektiven – hier also einfach 他休息的时间不多。 Nicht verwechseln: 所有 „alle“ und 所以 „deshalb“ sind eigene Wörter, und als Zählwort zählt 所 Gebäude (一所学校)."
        },
        {
          heading: "以便 und 至于 — Zweck nachreichen, Thema wechseln",
          text: "<strong>以便</strong> (yǐbiàn) leitet den zweiten Satzteil ein und nennt den Zweck der zuvor genannten Handlung: „damit, um … zu“. Oft folgen 能, 可以 oder 更好地; das Subjekt des zweiten Teils kann wechseln. 以便 ist formell; im Gespräch sagt man eher 好. <strong>至于</strong> (zhìyú) ist dagegen neutral und auch mündlich üblich: Nach einer Aussage über A leitet es zu einem angrenzenden Punkt B über, der oft offen oder nebensächlich ist („was … betrifft“). Die Grundlagen kennst du aus [[lesson:lesson-42]].",
          examples: [
            { cn: "请在表格上写清楚电话号码，以便我们及时联系您。", pinyin: "Qǐng zài biǎogé shang xiě qīngchu diànhuà hàomǎ, yǐbiàn wǒmen jíshí liánxì nín.", de: "Bitte tragen Sie Ihre Telefonnummer deutlich ins Formular ein, damit wir Sie rechtzeitig erreichen können." },
            { cn: "会议资料已提前发给大家，以便各位做好准备。", pinyin: "Huìyì zīliào yǐ tíqián fā gěi dàjiā, yǐbiàn gèwèi zuòhǎo zhǔnbèi.", de: "Die Sitzungsunterlagen wurden vorab verschickt, damit sich alle gut vorbereiten können." },
            { cn: "他把每天的花费都记下来，以便月底算账。", pinyin: "Tā bǎ měi tiān de huāfèi dōu jì xiàlái, yǐbiàn yuèdǐ suànzhàng.", de: "Er schreibt alle täglichen Ausgaben auf, damit er am Monatsende abrechnen kann." },
            { cn: "房子我们已经看好了，至于什么时候搬家，还要再商量。", pinyin: "Fángzi wǒmen yǐjīng kànhǎo le, zhìyú shénme shíhou bānjiā, hái yào zài shāngliang.", de: "Die Wohnung haben wir schon ausgesucht; wann wir umziehen, müssen wir noch besprechen." },
            { cn: "这个方案大家都同意了，至于具体的预算，下次会议再讨论。", pinyin: "Zhège fāng'àn dàjiā dōu tóngyì le, zhìyú jùtǐ de yùsuàn, xià cì huìyì zài tǎolùn.", de: "Dem Konzept haben alle zugestimmt; über das genaue Budget sprechen wir in der nächsten Sitzung." }
          ],
          tip: "以便 steht am Anfang des <em>zweiten</em> Teils: ❌ 以便大家准备，资料已提前发出。 Für einen Zweck im ersten Teil nimmt man 为了; soll etwas verhindert werden, heißt es 以免 „damit nicht“. 至于 braucht ein zuvor genanntes Thema – einen Text eröffnen kann nur 关于."
        }
      ]
    },
    // ── 干脆, 未必, 不禁, 不料 — Haltung und Wendung (lesson-76) ──────────
    {
      id: 'lesson-76',
      number: 76,
      title: "干脆, 未必, 不禁, 不料 — Haltung und Wendung",
      subtitle: "Kurzerhand, nicht unbedingt, unwillkürlich, wider Erwarten",
      level: 'HSK6',
      grammarIds: ["g:干脆","g:未必","g:不禁","g:不料","g:语气副词@HSK6","g:方式副词@HSK6"],
      intro: "Mit den Adverbien <strong>干脆</strong>, <strong>未必</strong> und <strong>不禁</strong> und der Konjunktion <strong>不料</strong> zeigst du, wie du zu einem Geschehen stehst: Du entscheidest dich kurzerhand für eine klare Lösung (干脆), stellst eine naheliegende Annahme vorsichtig in Frage (未必), beschreibst eine Reaktion, die man nicht zurückhalten kann (不禁), oder erzählst von einer Wendung, die niemand erwartet hat (不料). Im Deutschen erledigen das kleine Wörter wie „eben“, „doch“ oder „nun mal“, oft auch ganze Nebensätze; im Chinesischen sitzen diese Wörter an festen Stellen – die Adverbien direkt vor dem Verb, 不料 am Anfang des zweiten Satzteils. Neben 不禁 lernst du weitere Adverbien der Art und Weise (特意/特地, 赶忙, 偷偷) und zum Schluss weitere Adverbien der Haltung (明明, 总算, 恰好, 倒是) kennen.",
      sections: [
        {
          heading: "干脆 — kurzerhand, dann eben gleich",
          text: "<strong>干脆</strong> (gāncuì) drückt aus, dass du angesichts einer unbefriedigenden Lage einen klaren, oft radikalen Schritt wählst, statt weiter herumzuprobieren. Meist nennt der erste Satzteil das Problem, dann folgt 干脆 + Handlung. In Vorschlägen steht oft 吧 am Ende, im Bericht über Vergangenes oft 了. 干脆 kann vor oder nach dem Subjekt stehen und ist umgangssprachlich sehr häufig.",
          examples: [
            { cn: "外卖等了一个小时还没到，我们干脆自己做饭吧。", pinyin: "Wàimài děng le yí ge xiǎoshí hái méi dào, wǒmen gāncuì zìjǐ zuòfàn ba.", de: "Wir warten seit einer Stunde auf das bestellte Essen – kochen wir doch einfach selbst." },
            { cn: "这条裤子改了两次还是不合适，干脆别穿了。", pinyin: "Zhè tiáo kùzi gǎi le liǎng cì háishi bù héshì, gāncuì bié chuān le.", de: "Die Hose wurde zweimal geändert und passt immer noch nicht – dann zieh sie eben gar nicht mehr an." },
            { cn: "雨越下越大，干脆我们在这儿住一晚吧。", pinyin: "Yǔ yuè xià yuè dà, gāncuì wǒmen zài zhèr zhù yì wǎn ba.", de: "Der Regen wird immer stärker – bleiben wir doch gleich über Nacht hier." },
            { cn: "她跟老板谈了几次都没有结果，最后干脆换了工作。", pinyin: "Tā gēn lǎobǎn tán le jǐ cì dōu méiyǒu jiéguǒ, zuìhòu gāncuì huàn le gōngzuò.", de: "Sie hat mehrmals erfolglos mit der Chefin oder dem Chef gesprochen und schließlich kurzerhand die Stelle gewechselt." }
          ],
          tip: "干脆 ist kein Gradadverb: Anders als 很 steht es nicht vor einem Adjektiv. Als Adjektiv heißt es „geradeheraus, unkompliziert“: 她做事很干脆 „Sie erledigt Dinge ohne Umschweife.“ Vergleiche 只好 „notgedrungen“: Bei 只好 bleibt keine andere Wahl, bei 干脆 entscheidet man sich selbst für den sauberen Schnitt."
        },
        {
          heading: "未必 — nicht unbedingt",
          text: "<strong>未必</strong> (wèibì) verneint vorsichtig: Etwas ist „nicht unbedingt, nicht zwangsläufig“ so. Damit stellst du eine verbreitete oder naheliegende Annahme in Frage, ohne das Gegenteil zu behaupten. 未必 steht vor dem Prädikat, oft vor 是, 能, 会 oder einem Adjektiv, und kann als Antwort auch allein stehen: „未必。“ – „Nicht unbedingt.“ Der Stil ist neutral bis schriftlich; im Gespräch sagt man meist 不一定.",
          examples: [
            { cn: "名牌大学毕业的人未必能找到好工作。", pinyin: "Míngpái dàxué bìyè de rén wèibì néng zhǎodào hǎo gōngzuò.", de: "Wer an einer Eliteuniversität studiert hat, findet nicht unbedingt eine gute Stelle." },
            { cn: "网上的消息未必可靠。", pinyin: "Wǎngshang de xiāoxi wèibì kěkào.", de: "Nachrichten aus dem Internet sind nicht unbedingt zuverlässig." },
            { cn: "你觉得容易的事，别人未必也觉得容易。", pinyin: "Nǐ juéde róngyì de shì, biérén wèibì yě juéde róngyì.", de: "Was dir leicht vorkommt, finden andere nicht unbedingt auch leicht." },
            { cn: "人多未必就是好事。", pinyin: "Rén duō wèibì jiù shì hǎoshì.", de: "Dass viele Leute da sind, ist nicht unbedingt etwas Gutes." }
          ],
          tip: "Stärke der Verneinung: 他并不聪明 „er ist keineswegs klug“ – 他未必聪明 „er ist nicht unbedingt klug“. Nicht verwechseln mit 不必 „nicht nötig“: ❌ 你未必来 (gemeint: du musst nicht kommen) → ✅ 你不必来。"
        },
        {
          heading: "不禁 und andere Art-Adverbien — unwillkürlich, extra, eilig, heimlich",
          text: "<strong>不禁</strong> (bùjīn; 禁 hier im ersten Ton) sagt, dass jemand eine Gefühls- oder Körperreaktion nicht zurückhalten kann. Meist nennt ein erster Satzteil den Auslöser (听到…, 看到…). Danach steht eine Verbphrase, oft mit 了 oder einer Ergänzung (笑了起来, 想起了…), kein bloßes einsilbiges Verb. 不禁 beschreibt Tatsachen: Es wird weder verneint noch in Aufforderungen gebraucht. Es klingt eher schriftlich; mündlich sagt man 忍不住. Ähnliche Adverbien der Art und Weise: <strong>特意</strong>/<strong>特地</strong> „extra, eigens“ (特地赶来 „extra hergekommen“), <strong>赶忙</strong> „eilig“ und <strong>偷偷</strong> „heimlich“, oft mit 地.",
          examples: [
            { cn: "读到信的最后一句，他不禁哭了起来。", pinyin: "Dúdào xìn de zuìhòu yí jù, tā bùjīn kū le qǐlái.", de: "Als er den letzten Satz des Briefes las, kamen ihm unwillkürlich die Tränen." },
            { cn: "看着窗外的大雪，我不禁想起了家乡的冬天。", pinyin: "Kànzhe chuāngwài de dà xuě, wǒ bùjīn xiǎngqǐ le jiāxiāng de dōngtiān.", de: "Beim Blick auf den dichten Schnee draußen musste ich an die Winter in meiner Heimat denken." },
            { cn: "她特意早起给男朋友做了一个蛋糕。", pinyin: "Tā tèyì zǎoqǐ gěi nánpéngyou zuò le yí ge dàngāo.", de: "Sie ist extra früh aufgestanden, um ihrem Freund einen Kuchen zu backen." },
            { cn: "电话一响，他赶忙跑过去接。", pinyin: "Diànhuà yì xiǎng, tā gǎnmáng pǎo guòqù jiē.", de: "Als das Telefon klingelte, lief er schnell hin, um abzunehmen." },
            { cn: "她怕别人看见，偷偷地擦了擦眼泪。", pinyin: "Tā pà biérén kànjiàn, tōutōu de cā le cā yǎnlèi.", de: "Damit es niemand sah, wischte sie sich heimlich die Tränen ab." }
          ],
          tip: "❌ 听到这个笑话，我不禁笑。 → ✅ 我不禁笑了起来。 Nach 不禁 braucht das Verb eine Ergänzung. 不得不 „gezwungen sein“ ist etwas anderes: Bei 不禁 überwältigt dich das Gefühl, bei 不得不 die Lage. 赶忙 steht nur im Bericht, nicht in Aufforderungen – dafür nimmt man 赶快."
        },
        {
          heading: "不料 — doch wider Erwarten",
          text: "Die Konjunktion <strong>不料</strong> (búliào) leitet den zweiten Satzteil ein und zeigt, dass es anders kam als gedacht. Der erste Teil nennt eine Absicht, Erwartung oder Ausgangslage, gern mit 本来 „eigentlich“ oder 以为 „dachte (fälschlich)“; der zweite die überraschende Wendung – meist etwas Unangenehmes, manchmal auch Erfreuliches. 不料 steht vor dem Subjekt und klingt erzählend-schriftlich; im Gespräch sagst du 没想到, gleichbedeutend ist auch 谁知.",
          examples: [
            { cn: "我们本来想周末去爬山，不料她突然病了。", pinyin: "Wǒmen běnlái xiǎng zhōumò qù páshān, búliào tā tūrán bìng le.", de: "Eigentlich wollten wir am Wochenende wandern gehen, doch dann wurde sie plötzlich krank." },
            { cn: "我以为他早就忘了这件事，不料他还记得很清楚。", pinyin: "Wǒ yǐwéi tā zǎo jiù wàng le zhè jiàn shì, búliào tā hái jì de hěn qīngchu.", de: "Ich dachte, er hätte das längst vergessen, doch wider Erwarten wusste er es noch genau." },
            { cn: "她只是随便买了一张彩票，不料中了大奖。", pinyin: "Tā zhǐshì suíbiàn mǎi le yì zhāng cǎipiào, búliào zhòng le dàjiǎng.", de: "Sie hatte nur so nebenbei ein Los gekauft – und gewann wider Erwarten den Hauptpreis." },
            { cn: "店里只准备了五十份早餐，不料来了两百多位客人。", pinyin: "Diàn li zhǐ zhǔnbèi le wǔshí fèn zǎocān, búliào lái le liǎngbǎi duō wèi kèrén.", de: "Das Lokal hatte nur fünfzig Frühstücke vorbereitet, doch unerwartet kamen über zweihundert Gäste." }
          ],
          tip: "Stellung: 不料 steht <em>vor</em> dem Subjekt des zweiten Teils (不料她……), 竟然 und 居然 sind Adverbien und stehen <em>nach</em> dem Subjekt direkt vor dem Verb (她竟然……). 果然 bedeutet das Gegenteil: „wie erwartet“."
        },
        {
          heading: "Weitere Modaladverbien: 明明, 总算, 恰好, 倒是",
          text: "Zur Gruppe von 干脆 gehören weitere Adverbien, die die Haltung der sprechenden Person zeigen. <strong>明明</strong> „doch offensichtlich“ steht meist im ersten Satzteil; der zweite drückt einen Widerspruch oder Vorwurf aus (mit 却, 为什么 oder 怎么). <strong>总算</strong> „endlich“ betont die Erleichterung nach Mühe oder Warten. <strong>恰好</strong> „zufällig gerade“ beschreibt ein Zusammentreffen. <strong>倒是</strong> „zwar, ja eigentlich“ räumt etwas ein, meist gefolgt von 就是 oder 可是 „aber“.",
          examples: [
            { cn: "你明明答应过我，怎么又忘了？", pinyin: "Nǐ míngmíng dāying guo wǒ, zěnme yòu wàng le?", de: "Du hast es mir doch versprochen – wie kannst du es schon wieder vergessen?" },
            { cn: "修了三天，电脑总算能用了。", pinyin: "Xiū le sān tiān, diànnǎo zǒngsuàn néng yòng le.", de: "Nach drei Tagen Reparatur funktioniert der Computer endlich wieder." },
            { cn: "我正要给你打电话，你恰好来了。", pinyin: "Wǒ zhèng yào gěi nǐ dǎ diànhuà, nǐ qiàhǎo lái le.", de: "Ich wollte dich gerade anrufen, und genau da kommst du." },
            { cn: "这个地方安静倒是安静，就是交通不太方便。", pinyin: "Zhège dìfang ānjìng dàoshi ānjìng, jiùshì jiāotōng bú tài fāngbiàn.", de: "Ruhig ist es hier zwar, aber die Verkehrsanbindung ist nicht besonders gut." }
          ],
          tip: "总算 vs. 终于: Beide heißen „endlich“; 总算 betont stärker die Erleichterung und kann auch „immerhin, einigermaßen“ bedeuten: 考得不太好，总算及格了 „Nicht toll, aber immerhin bestanden.“"
        }
      ]
    },
    // ── 一再, 再三 & 到……为止 — immer wieder und bis jetzt (lesson-77) ──────────
    {
      id: 'lesson-77',
      number: 77,
      title: "一再, 再三 & 到……为止 — immer wieder und bis jetzt",
      subtitle: "Wiederholung, Gründlichkeit und Endpunkte",
      level: 'HSK6',
      grammarIds: ["g:一再","g:再三","g:时间副词@HSK6","g:到……为止","g:番"],
      intro: "Wie sagst du, dass jemand etwas <em>immer wieder</em> tut – und wie, dass etwas <em>bis zu einem bestimmten Punkt</em> gilt? Diese Lektion stellt dir zwei Adverbien der Wiederholung vor: <strong>一再</strong> (wiederholt, oft mit Nachdruck oder bei unerwünschten Vorgängen) und <strong>再三</strong> (bewusst, wieder und wieder). Dazu kommen das Zählwort <strong>番</strong>, das eine aufwendige, gründliche Handlung zählt (研究了一番), und der Rahmen <strong>到……为止</strong>, der einen Endpunkt setzt (到目前为止 „bis jetzt“). Zum Schluss lernst du einige gehobene Zeitadverbien wie 一向, 不时 und 仍旧. Im Deutschen stehen „immer wieder“ oder „bis jetzt“ recht frei im Satz; im Chinesischen haben diese Wörter feste Plätze – 一再 nur vor dem Verb, 再三 auch danach, 为止 am Ende des Rahmens. Den Unterschied zwischen 又 und 再 kennst du aus [[lesson:lesson-32]].",
      sections: [
        {
          heading: "一再 — wiederholt, immer wieder",
          text: "<strong>一再</strong> (yízài) sagt, dass eine Handlung in derselben Sache mehrmals hintereinander geschieht. Es steht vor dem Verb, meist vor zweisilbigen Verben des Sagens und Forderns wie 强调, 提醒, 要求 oder 表示 – oder vor Vorgängen, die sich unerwünscht wiederholen, wie 推迟 „verschieben“ oder 发生 „vorkommen“. Meist geht es um Vergangenes oder Andauerndes; eine künftige Wiederholung drückst du mit 再 aus. Der Stil ist eher schriftlich bzw. neutral-gehoben.",
          examples: [
            { cn: "老师一再强调，考试的时候不能用手机。", pinyin: "Lǎoshī yízài qiángdiào, kǎoshì de shíhou bù néng yòng shǒujī.", de: "Die Lehrkraft betonte immer wieder, dass in der Prüfung keine Handys benutzt werden dürfen." },
            { cn: "这个项目的开始时间一再推迟。", pinyin: "Zhège xiàngmù de kāishǐ shíjiān yízài tuīchí.", de: "Der Starttermin des Projekts wurde immer wieder verschoben." },
            { cn: "公司一再表示，不会让员工失业。", pinyin: "Gōngsī yízài biǎoshì, bú huì ràng yuángōng shīyè.", de: "Die Firma hat wiederholt erklärt, dass keine Beschäftigten ihre Stelle verlieren werden." },
            { cn: "同样的错误一再发生，说明管理有问题。", pinyin: "Tóngyàng de cuòwù yízài fāshēng, shuōmíng guǎnlǐ yǒu wèntí.", de: "Dass derselbe Fehler immer wieder passiert, zeigt, dass mit der Organisation etwas nicht stimmt." }
          ],
          tip: "一再 blickt zurück: ❌ 明天我一再给你打电话。 → ✅ 明天我再给你打电话。 Für „noch einmal (künftig)“ nimmt man 再, für „schon wieder (einmal)“ 又."
        },
        {
          heading: "再三 — wieder und wieder, ganz bewusst",
          text: "<strong>再三</strong> (zàisān) betont, dass jemand etwas bewusst und mit Nachdruck wiederholt – beim Bitten, Ermahnen, Danken oder Abwägen. Vor dem Verb ist es oft mit 一再 austauschbar. Nur 再三 kann aber auch <em>nach</em> einigen Verben stehen, vor allem bei 考虑 und 犹豫 (考虑再三 „nach reiflicher Überlegung“), und mit 的 als Attribut vor einem Nomen: 在……的再三要求下 „auf wiederholtes Drängen von …“. Der Stil ist eher schriftlich bzw. gehoben.",
          examples: [
            { cn: "她再三感谢我们的帮助。", pinyin: "Tā zàisān gǎnxiè wǒmen de bāngzhù.", de: "Sie bedankte sich vielmals für unsere Hilfe." },
            { cn: "我犹豫再三，还是没有把真相告诉他。", pinyin: "Wǒ yóuyù zàisān, háishi méiyǒu bǎ zhēnxiàng gàosu tā.", de: "Nach langem Zögern habe ich ihm die Wahrheit dann doch nicht gesagt." },
            { cn: "经理再三检查了合同，才签了字。", pinyin: "Jīnglǐ zàisān jiǎnchá le hétong, cái qiān le zì.", de: "Die Geschäftsleitung prüfte den Vertrag mehrmals, bevor sie unterschrieb." },
            { cn: "在家人的再三劝说下，他终于去看了医生。", pinyin: "Zài jiārén de zàisān quànshuō xià, tā zhōngyú qù kàn le yīshēng.", de: "Auf das wiederholte Zureden seiner Familie hin ließ er sich schließlich ärztlich untersuchen." }
          ],
          tip: "Faustregel: Vor dem Verb gehen meist beide. Nach dem Verb und als Attribut nur 再三: ❌ 考虑一再 → ✅ 考虑再三. Bei unerwünschten Vorgängen, die sich wiederholen, ist dagegen 一再 üblicher: 航班一再延误 „Der Abflug verzögerte sich immer wieder.“"
        },
        {
          heading: "Verb + 一番 — gründlich, mit Mühe",
          text: "Das Zählwort <strong>番</strong> (fān) zählt Handlungen, die Zeit und Mühe kosten oder gründlich ausgeführt werden. Es steht fast immer mit 一 und folgt meist einem zweisilbigen Verb, oft mit 了: 研究了一番 „gründlich untersucht“. Häufig ist auch 经过一番 + Nomen: 经过一番讨论 „nach eingehender Diskussion“. Außerdem zählt 番 Worte: 一番话 „eine eindringliche Rede“. Der Stil ist eher gehoben. 一下 („kurz“) und 一遍 („einmal von vorn bis hinten“) sind alltäglicher, betonen aber nicht die Gründlichkeit.",
          examples: [
            { cn: "搬家以前，我们把房间好好打扫了一番。", pinyin: "Bānjiā yǐqián, wǒmen bǎ fángjiān hǎohǎo dǎsǎo le yì fān.", de: "Vor dem Umzug haben wir die Wohnung gründlich geputzt." },
            { cn: "他把新买的相机仔细研究了一番。", pinyin: "Tā bǎ xīn mǎi de xiàngjī zǐxì yánjiū le yì fān.", de: "Er hat die neue Kamera eingehend unter die Lupe genommen." },
            { cn: "经过一番讨论，大家终于达成了一致。", pinyin: "Jīngguò yì fān tǎolùn, dàjiā zhōngyú dáchéng le yízhì.", de: "Nach eingehender Diskussion waren sich endlich alle einig." },
            { cn: "校长对新同学说了一番鼓励的话。", pinyin: "Xiàozhǎng duì xīn tóngxué shuō le yì fān gǔlì de huà.", de: "Die Schulleitung richtete ermutigende Worte an die neuen Schülerinnen und Schüler." }
          ],
          tip: "Vergleiche: 看一下 „kurz anschauen“ – 仔细观察了一番 „eingehend betrachtet“. Achtung: 翻了一番 (fān le yì fān) heißt „hat sich verdoppelt“, und 三番五次 „immer wieder“ ist eine feste Wendung."
        },
        {
          heading: "到……为止 — bis (zu einem Endpunkt)",
          text: "Der Rahmen <strong>到</strong> …… <strong>为止</strong> (wéizhǐ) setzt einen Endpunkt: „bis …“. Dazwischen steht ein Zeitpunkt (到目前为止 „bis jetzt“), ein Punkt in einem Ablauf (到这里为止 „bis hierher“) oder ein ganzer Satz, der das Ende eines Vorgangs nennt. Der Rahmen steht am Satzanfang als Zeitangabe oder nach dem Verb; 为止 betont, dass genau dort Schluss ist. Er ist gesprochen wie geschrieben üblich, in Berichten und Mitteilungen besonders häufig. Fest ist 到此为止 „bis hierher und nicht weiter“.",
          examples: [
            { cn: "到目前为止，我们还没收到任何回复。", pinyin: "Dào mùqián wéizhǐ, wǒmen hái méi shōudào rènhé huífù.", de: "Bis jetzt haben wir noch keine Antwort bekommen." },
            { cn: "报名到本月三十日为止。", pinyin: "Bàomíng dào běn yuè sānshí rì wéizhǐ.", de: "Anmeldungen sind bis zum Dreißigsten dieses Monats möglich." },
            { cn: "他每天跑步，一直跑到出汗为止。", pinyin: "Tā měi tiān pǎobù, yìzhí pǎo dào chūhàn wéizhǐ.", de: "Er läuft jeden Tag so lange, bis er ins Schwitzen kommt." },
            { cn: "今天的讨论就到此为止吧。", pinyin: "Jīntiān de tǎolùn jiù dào cǐ wéizhǐ ba.", de: "Machen wir mit der Diskussion für heute hier Schluss." }
          ],
          tip: "Den Anfangspunkt markierst du anders: 从……开始 „ab“ oder (自)……以来 „seit“. Schriftsprachlich heißt „bis heute“ auch 迄今为止."
        },
        {
          heading: "Weitere Zeitadverbien: 一向, 不时, 仍旧, 依旧, 一时",
          text: "Zum Thema Wiederholung und Dauer passen einige eher schriftliche Zeitadverbien: <strong>不时</strong> „immer wieder, ab und zu“ für kurze Handlungen, die in Abständen vorkommen – meist ohne den Nachdruck, den 一再 oft hat. <strong>一向</strong> „schon immer, stets“ beschreibt Gewohnheiten und Eigenschaften. <strong>仍旧</strong> „nach wie vor“ entspricht 仍然; <strong>依旧</strong> „unverändert, wie eh und je“ ist literarischer. <strong>一时</strong> „im Augenblick, vorübergehend“ steht oft mit Verneinung oder Potenzialform.",
          examples: [
            { cn: "她一向很节约，从来不乱花钱。", pinyin: "Tā yíxiàng hěn jiéyuē, cónglái bú luàn huā qián.", de: "Sie ist schon immer sparsam und gibt nie unnötig Geld aus." },
            { cn: "上课的时候，窗外不时传来汽车的声音。", pinyin: "Shàngkè de shíhou, chuāngwài bùshí chuánlái qìchē de shēngyīn.", de: "Während des Unterrichts drang immer wieder Autolärm von draußen herein." },
            { cn: "十年没见，他仍旧那么爱开玩笑。", pinyin: "Shí nián méi jiàn, tā réngjiù nàme ài kāi wánxiào.", de: "Zehn Jahre haben wir uns nicht gesehen, und er macht immer noch so gern Witze." },
            { cn: "老街依旧，只是人已经不一样了。", pinyin: "Lǎo jiē yījiù, zhǐshì rén yǐjīng bù yíyàng le.", de: "Die alte Straße ist wie eh und je, nur die Menschen sind andere geworden." },
            { cn: "这个问题太突然了，我一时不知道怎么回答。", pinyin: "Zhège wèntí tài tūrán le, wǒ yìshí bù zhīdào zěnme huídá.", de: "Die Frage kam so plötzlich, dass ich im ersten Moment nicht wusste, was ich antworten sollte." }
          ],
          tip: "一向 vs. 一直: 一向 beschreibt eine dauerhafte Gewohnheit oder Eigenschaft, 一直 auch eine einzelne, ununterbrochen andauernde Handlung: ✅ 我一直在等你 – ❌ 我一向在等你."
        }
      ]
    },
    // ── 啦, 嘛 & 人家 — Ton und Haltung im Gespräch (lesson-78) ──────────
    {
      id: 'lesson-78',
      number: 78,
      title: "啦, 嘛 & 人家 — Ton und Haltung im Gespräch",
      subtitle: "Lebhaft, selbstverständlich, schmollend",
      level: 'HSK6',
      grammarIds: ["g:啦","g:嘛","g:人家"],
      intro: "In echten Gesprächen tragen kleine Wörter am Satzende einen großen Teil der Stimmung. Diese Lektion zeigt dir drei typisch gesprochene Mittel: <strong>啦 (la)</strong> ist eine Verschmelzung aus 了 und 啊 – es meldet eine neue Situation und färbt sie lebhaft, erleichtert oder ungeduldig. <strong>嘛 (ma)</strong> stellt etwas als selbstverständlich hin („ist doch klar“) oder macht eine Bitte drängend-weich. Das Pronomen <strong>人家 (rénjia)</strong> kann „die anderen“, eine bestimmte dritte Person oder – schmollend – sogar „ich“ bedeuten. Im Deutschen leisten das vor allem Abtönungspartikeln wie „doch“, „ja“, „halt“ und die Satzmelodie. Du brauchst diese Wörter vor allem, um Dialoge, Serien und Chats zu verstehen; in Aufsätzen und formellen Texten haben sie nichts verloren.",
      sections: [
        {
          heading: "啦 — 了 + 啊: lebhafte Feststellung und Ausruf",
          text: "<strong>啦</strong> ist aus 了 (le) und 啊 (a) zusammengezogen. Es behält die Bedeutung von 了 – Veränderung, neue Situation, Abschluss – und fügt die Gefühlsfärbung von 啊 hinzu: Freude, Erleichterung, Überraschung oder Nachdruck. Grob gilt: Wo am Satzende ein 了 stehen kann, kann man es im lebhaften Gespräch zu 啦 machen. Zum neutralen 了 am Satzende siehe [[lesson:lesson-1]].",
          examples: [
            { cn: "春天来啦！", pinyin: "Chūntiān lái la!", de: "Der Frühling ist da!" },
            { cn: "我考过啦！", pinyin: "Wǒ kǎoguò la!", de: "Ich hab die Prüfung bestanden!" },
            { cn: "饭做好啦，快来吃吧！", pinyin: "Fàn zuòhǎo la, kuài lái chī ba!", de: "Das Essen ist fertig, kommt schnell essen!" },
            { cn: "好啦好啦，我知道啦。", pinyin: "Hǎo la hǎo la, wǒ zhīdào la.", de: "Schon gut, schon gut, ich hab’s ja verstanden." }
          ],
          tip: "啦 gehört in die gesprochene Sprache und in lockere Chats. In neutraler Rede und in sachlichen Texten steht 了. Wer 啦 an jeden Satz hängt, klingt schnell verspielt oder kindlich."
        },
        {
          heading: "啦 beim Drängen und in Aufzählungen",
          text: "Mit <strong>别 … 啦</strong> drängst du jemanden, mit etwas aufzuhören: Das 了-Element meint „jetzt ist Schluss damit“, das 啊-Element bringt Ungeduld oder Zuneigung hinein. Eine zweite Verwendung ist die <strong>Aufzählung</strong>: 啦 steht dann nach jedem Glied (X啦、Y啦、Z啦) und klingt wie „… und so weiter, alles Mögliche“. Danach folgt meist eine Zusammenfassung wie 什么都有 oder 忙得不得了.",
          examples: [
            { cn: "别哭啦，没事的。", pinyin: "Bié kū la, méi shì de.", de: "Hör doch auf zu weinen, es ist nichts Schlimmes." },
            { cn: "别看啦，快去写作业吧！", pinyin: "Bié kàn la, kuài qù xiě zuòyè ba!", de: "Hör auf zu gucken und mach endlich deine Hausaufgaben!" },
            { cn: "周末他跑步啦、游泳啦、打篮球啦，忙得不得了。", pinyin: "Zhōumò tā pǎobù la, yóuyǒng la, dǎ lánqiú la, máng de bùdéliǎo.", de: "Am Wochenende geht er joggen, schwimmen, Basketball spielen – er ist ständig beschäftigt." },
            { cn: "衣服啦、书啦、鞋啦，扔得满地都是。", pinyin: "Yīfu la, shū la, xié la, rēng de mǎn dì dōu shì.", de: "Kleidung, Bücher, Schuhe – alles liegt auf dem Boden verstreut." }
          ],
          tip: "In der Aufzählung hat 啦 nichts mit „Veränderung“ zu tun; es markiert nur die Glieder einer lockeren, unvollständigen Liste."
        },
        {
          heading: "嘛 — „ist doch klar“, „… doch“",
          text: "<strong>嘛</strong> stellt eine Aussage als selbstverständlich hin, oft als Begründung im ersten Satzteil: „er ist doch …, deshalb …“. Zweitens macht es Bitten und Aufforderungen zugleich weicher und drängender – mit vertraulichem, manchmal quengelndem Ton („komm doch!“). Drittens kann 嘛 nach einem Thema eine kurze Pause markieren: 这个问题嘛，… „Was diese Frage angeht, …“. 嘛 gehört in die gesprochene Sprache; in formellen Texten kommt es kaum vor.",
          examples: [
            { cn: "他是北京人嘛，当然知道哪儿的烤鸭好吃。", pinyin: "Tā shì Běijīng rén ma, dāngrán zhīdào nǎr de kǎoyā hǎochī.", de: "Er ist doch aus Peking, natürlich weiß er, wo es gute Pekingente gibt." },
            { cn: "孩子嘛，都喜欢玩。", pinyin: "Háizi ma, dōu xǐhuan wán.", de: "Kinder sind eben so – sie spielen nun mal gern." },
            { cn: "你就尝一口嘛！", pinyin: "Nǐ jiù cháng yì kǒu ma!", de: "Probier doch wenigstens einen Bissen!" },
            { cn: "别着急嘛，慢慢来。", pinyin: "Bié zháojí ma, mànmàn lái.", de: "Nur keine Eile, immer mit der Ruhe." },
            { cn: "这个问题嘛，我们明天再讨论。", pinyin: "Zhège wèntí ma, wǒmen míngtiān zài tǎolùn.", de: "Was diese Frage angeht – die besprechen wir morgen." }
          ],
          tip: "Fester Ausdruck: 可不是嘛 (kě bú shì ma) „genau, sag ich doch“ – kräftige Zustimmung."
        },
        {
          heading: "人家 (rénjia) — andere, er/sie, ich",
          text: "<strong>人家</strong> (zweite Silbe tonlos) ist ein umgangssprachliches Pronomen mit drei Lesarten: 1. „die anderen“ wie 别人, oft als Vorbild oder Vergleich; 2. eine bestimmte dritte Person, die schon erwähnt wurde oder klar ist – oft respektvoll oder distanziert; 3. „ich“: Die sprechende Person meint sich selbst, schmollend, verspielt oder kokett, typisch in vertrauten Gesprächen. Welche Lesart gilt, zeigt nur der Zusammenhang.",
          examples: [
            { cn: "人家都在努力，你怎么还在玩游戏？", pinyin: "Rénjia dōu zài nǔlì, nǐ zěnme hái zài wán yóuxì?", de: "Alle anderen strengen sich an – und du spielst immer noch?" },
            { cn: "你看人家小李，每天六点就起床了。", pinyin: "Nǐ kàn rénjia Xiǎo Lǐ, měi tiān liù diǎn jiù qǐchuáng le.", de: "Schau dir mal Xiao Li an – steht jeden Tag schon um sechs auf." },
            { cn: "人家好心帮你，你怎么连声谢谢都不说？", pinyin: "Rénjia hǎoxīn bāng nǐ, nǐ zěnme lián shēng xièxie dōu bù shuō?", de: "Da hilft man dir aus reiner Freundlichkeit, und du sagst nicht mal Danke?" },
            { cn: "人家不想去嘛！", pinyin: "Rénjia bù xiǎng qù ma!", de: "Ich will aber nicht hin! (schmollend)" },
            { cn: "你又忘了人家的生日！", pinyin: "Nǐ yòu wàng le rénjia de shēngrì!", de: "Du hast schon wieder meinen Geburtstag vergessen! (vorwurfsvoll-verspielt)" }
          ],
          tip: "Mit vollem Ton gesprochen, ist 人家 (rénjiā) ein Nomen: „Haushalt, Familie“. 别人 (biéren) bedeutet nur „andere“, nie „ich“. In formellen Texten nimmt man 别人 oder 他人 (tārén)."
        },
        {
          heading: "Nicht verwechseln: 啦 – 了, 嘛 – 吗 – 吧",
          text: "啦 ist kein neues 了, sondern 了 plus Gefühl: 他走了 ist eine neutrale Feststellung, 他走啦 klingt erleichtert oder überrascht. Größer ist die Gefahr bei <strong>嘛</strong> und <strong>吗</strong>, die beide „ma“ ausgesprochen werden: 吗 macht eine Ja/Nein-Frage ([[lesson:lesson-22]]), 嘛 stellt nie eine Frage. 吧 dagegen schlägt vor oder vermutet, während 嘛 drängt oder Selbstverständliches betont.",
          examples: [
            { cn: "他终于走啦！", pinyin: "Tā zhōngyú zǒu la!", de: "Endlich ist er weg! (erleichtert; neutral: 他走了。)" },
            { cn: "❌ 你明天来嘛？", pinyin: "", de: "(Falsch als Frage – 嘛 fragt nicht.)" },
            { cn: "✅ 你明天来吗？", pinyin: "Nǐ míngtiān lái ma?", de: "Kommst du morgen?" },
            { cn: "你明天来吧。", pinyin: "Nǐ míngtiān lái ba.", de: "Komm doch morgen. (Vorschlag)" },
            { cn: "你明天来嘛！", pinyin: "Nǐ míngtiān lái ma!", de: "Jetzt komm doch morgen! (drängend, vertraulich)" }
          ],
          tip: "Beim Lesen hilft das Satzzeichen: Nach 吗 steht ein Fragezeichen, nach 嘛 ein Punkt, Komma oder Ausrufezeichen."
        }
      ]
    },
    // ── Reagieren: 算了, 得了, 那倒是, 好不容易 (lesson-79) ──────────
    {
      id: 'lesson-79',
      number: 79,
      title: "Reagieren: 算了, 得了, 那倒是, 好不容易",
      subtitle: "Abwinken, beenden, einlenken, Mühe betonen",
      level: 'HSK6',
      grammarIds: ["g:算了","g:得了","g:那倒（也）是","g:好（不）容易"],
      intro: "Gespräche bestehen nicht nur aus Informationen, sondern auch aus Reaktionen: Man winkt ab, beendet eine Diskussion, gibt dem Gegenüber recht oder erzählt, wie mühsam etwas war. Diese Lektion bündelt vier feste Ausdrücke dafür. Mit <strong>算了 (suàn le)</strong> verzichtest du: „lass gut sein“, „dann eben nicht“. <strong>得了 (dé le)</strong> heißt „genug jetzt“ oder, am Satzende, „… und gut ist“. Mit <strong>那倒（也）是 (nà dào (yě) shì)</strong> lenkst du ein: „da hast du allerdings recht“. Und <strong>好不容易 / 好容易</strong> vor dem Verb betont, dass etwas nur mit großer Mühe gelang. Alle vier sind umgangssprachlich. Für Deutschsprachige ist vor allem 好容易 eine Falle: Vor dem Verb heißt es dasselbe wie 好不容易 – „mit Mühe“, nicht „sehr leicht“.",
      sections: [
        {
          heading: "算了 — lass gut sein, dann eben nicht",
          text: "<strong>算了</strong> (oft 算了吧) steht allein oder am Satzanfang, wenn du auf etwas verzichtest oder eine Sache fallen lässt: „vergiss es“, „schon gut“. Nach einer Bedingung oder Feststellung steht <strong>…… 就算了</strong>: „dann eben nicht“, „dann lassen wir es dabei“. Je nach Ton klingt es gelassen, resigniert oder verärgert. Als Nachsicht heißt 这次就算了 „diesmal lassen wir es durchgehen“. Wörtlich etwa „gilt als erledigt“: 算 (suàn) „rechnen, gelten“ + 了.",
          examples: [
            { cn: "算了，不说这个了。", pinyin: "Suàn le, bù shuō zhège le.", de: "Ach, vergiss es, reden wir nicht mehr davon." },
            { cn: "太贵了，算了吧，我们去别家看看。", pinyin: "Tài guì le, suàn le ba, wǒmen qù bié jiā kànkan.", de: "Zu teuer – lass gut sein, wir schauen woanders." },
            { cn: "你不愿意帮忙就算了，我找别人。", pinyin: "Nǐ bú yuànyì bāngmáng jiù suàn le, wǒ zhǎo biéren.", de: "Wenn du nicht helfen willst, dann eben nicht – ich frag jemand anderen." },
            { cn: "买不到票就算了，我们在家看比赛。", pinyin: "Mǎi bu dào piào jiù suàn le, wǒmen zài jiā kàn bǐsài.", de: "Wenn wir keine Karten bekommen, dann eben nicht – wir schauen das Spiel zu Hause." },
            { cn: "看你是第一次，这次就算了。", pinyin: "Kàn nǐ shì dì yī cì, zhè cì jiù suàn le.", de: "Weil es dein erstes Mal ist, lasse ich es diesmal durchgehen." }
          ],
          tip: "Ton beachten: Ein knappes, scharfes „算了！“ kann beleidigt klingen („dann eben nicht!“). Mit 吧 und ruhiger Stimme wirkt es gelassen."
        },
        {
          heading: "得了 (dé le) — genug jetzt, … und gut ist",
          text: "<strong>得了</strong> hat zwei Hauptverwendungen. Am Satzanfang beendet es eine Diskussion oder weist etwas zurück: „genug!“, „schon gut, hör auf“. <strong>得了吧</strong> klingt dabei oft spöttisch oder ungläubig: „ach komm, wer’s glaubt“. Am Satzende sagt <strong>…… 就得了</strong>, dass eine einfache Lösung genügt: „… und gut ist“, „das reicht“. Bedeutungsnah sind 行了 und 好了, die etwas weniger salopp klingen.",
          examples: [
            { cn: "得了，别吵了，大家都少说两句。", pinyin: "Dé le, bié chǎo le, dàjiā dōu shǎo shuō liǎng jù.", de: "Genug jetzt, hört auf zu streiten, haltet euch alle mal zurück." },
            { cn: "得了吧，你哪儿会做饭啊？", pinyin: "Dé le ba, nǐ nǎr huì zuò fàn a?", de: "Ach komm, seit wann kannst du denn kochen?" },
            { cn: "不用那么麻烦，随便吃点儿就得了。", pinyin: "Búyòng nàme máfan, suíbiàn chī diǎnr jiù dé le.", de: "Mach dir nicht so viel Mühe, wir essen einfach irgendwas, das reicht." },
            { cn: "你直接告诉他就得了，何必写信？", pinyin: "Nǐ zhíjiē gàosu tā jiù dé le, hébì xiě xìn?", de: "Sag es ihm einfach direkt, und gut ist – wozu einen Brief schreiben?" }
          ],
          tip: "Aussprache: dé le. Nicht verwechseln mit dem Potentialkomplement V + 得了 (de liǎo) „können“: 去得了 „hingehen können“. Und: 算了 betont den Verzicht („dann eben nicht“), 得了 eher „genug“ und „das reicht“."
        },
        {
          heading: "那倒（也）是 — da hast du allerdings recht",
          text: "Mit <strong>那倒是</strong> oder <strong>那倒也是</strong> gibst du dem Gegenüber in einem Punkt recht, den du vorher nicht bedacht oder anders gesehen hast. 那 verweist auf das eben Gesagte, 倒 (dào) gibt den Ton des Einräumens, 也 macht die Zustimmung weicher. Die Formel steht als ganze Antwort oder am Anfang einer Erwiderung; oft folgt ein Vorbehalt mit 不过, 就是 oder 可是 oder eine neue Schlussfolgerung (那我们还是 …). Sie ist rein umgangssprachlich.",
          examples: [
            { cn: "那倒是，现在打车确实比坐地铁方便。", pinyin: "Nà dào shì, xiànzài dǎchē quèshí bǐ zuò dìtiě fāngbiàn.", de: "Das stimmt allerdings, mit dem Taxi ist es inzwischen wirklich bequemer als mit der U-Bahn." },
            { cn: "那倒也是，孩子还小，慢慢教吧。", pinyin: "Nà dào yě shì, háizi hái xiǎo, mànmàn jiāo ba.", de: "Da hast du auch wieder recht – das Kind ist noch klein, bringen wir es ihm nach und nach bei." },
            { cn: "那倒是，就是时间有点儿紧。", pinyin: "Nà dào shì, jiùshì shíjiān yǒudiǎnr jǐn.", de: "Das stimmt schon, nur ist die Zeit etwas knapp." },
            { cn: "那倒也是，那我们还是早点儿出发吧。", pinyin: "Nà dào yě shì, nà wǒmen háishi zǎo diǎnr chūfā ba.", de: "Stimmt eigentlich – dann fahren wir lieber etwas früher los." }
          ],
          tip: "那倒是 räumt ein, oft mit Vorbehalt. Für kräftige, vorbehaltlose Zustimmung sagt man 可不是嘛 „genau, sag ich doch“."
        },
        {
          heading: "好不容易 / 好容易 + Verb — mit großer Mühe",
          text: "<strong>好不容易</strong> und <strong>好容易</strong> stehen vor dem Verb und bedeuten dasselbe: „mit großer Mühe“, „nur mühsam“, „endlich, nach langem Bemühen“. Das 好 ist ein verstärkendes „sehr“, das 不 ändert hier nichts; 好不容易 ist die häufigere Form. Oft folgt 才 (cái) vor dem Verb. Nicht selten schließt sich eine enttäuschende Wendung mit 结果 oder 却 an. Der Ausdruck ist vor allem gesprochen und erzählend.",
          examples: [
            { cn: "我好不容易才把车停好。", pinyin: "Wǒ hǎo bù róngyì cái bǎ chē tínghǎo.", de: "Ich habe das Auto nur mit Mühe eingeparkt." },
            { cn: "她好容易才睡着，别吵醒她。", pinyin: "Tā hǎo róngyì cái shuìzháo, bié chǎoxǐng tā.", de: "Sie ist endlich eingeschlafen – weck sie nicht auf." },
            { cn: "好不容易找到了工作，他又不想干了。", pinyin: "Hǎo bù róngyì zhǎodào le gōngzuò, tā yòu bù xiǎng gàn le.", de: "Nach langer Suche hat er endlich eine Stelle gefunden – und jetzt will er schon nicht mehr." },
            { cn: "我们好不容易爬到山顶，却什么也看不见。", pinyin: "Wǒmen hǎo bù róngyì pádào shāndǐng, què shénme yě kàn bu jiàn.", de: "Mühsam sind wir bis zum Gipfel geklettert – und dann sah man gar nichts." }
          ],
          tip: "Merkhilfe: Vor dem Verb ist die Mühe gemeint, egal ob mit oder ohne 不."
        },
        {
          heading: "Vorsicht: 好容易 als Prädikat und 终于",
          text: "Steht der Ausdruck nicht vor einem Verb, sondern als <strong>Prädikat</strong>, gilt die normale Bedeutung: 这道题好容易 „diese Aufgabe ist sehr leicht“, 学好中文好不容易 „gut Chinesisch zu lernen ist gar nicht leicht“. Hier sind die beiden Formen also Gegensätze. Vom Adverb <strong>终于</strong> „endlich“ unterscheidet sich 好不容易 dadurch, dass 终于 nur das Ende des Wartens betont, 好不容易 dagegen die Mühe.",
          examples: [
            { cn: "这道题好容易，一看就会。", pinyin: "Zhè dào tí hǎo róngyì, yí kàn jiù huì.", de: "Die Aufgabe ist total leicht, die kann man auf den ersten Blick." },
            { cn: "学好中文好不容易啊！", pinyin: "Xuéhǎo Zhōngwén hǎo bù róngyì a!", de: "Gut Chinesisch zu lernen ist gar nicht leicht!" },
            { cn: "车终于来了。", pinyin: "Chē zhōngyú lái le.", de: "Endlich kommt der Bus. (nur: das Warten ist vorbei)" },
            { cn: "我好不容易才等到车。", pinyin: "Wǒ hǎo bù róngyì cái děngdào chē.", de: "Ich habe ewig auf den Bus gewartet, bis er endlich kam. (betont die Mühe)" }
          ],
          tip: "❌ 这道题好不容易 im Sinn von „ganz leicht“ → ✅ 这道题好容易 bzw. 这道题很容易. Als Prädikat bedeutet 好不容易 „gar nicht leicht“."
        }
      ]
    },
    // ── 把 mit Ursache und Betroffenem (lesson-80) ──────────
    {
      id: 'lesson-80',
      number: 80,
      title: "把 mit Ursache und Betroffenem",
      subtitle: "这场雨把我淋透了 · 这件事把他急坏了 · 看把你高兴得",
      level: 'HSK6',
      grammarIds: ["g:主语（非生物体）+把+宾语+动词+其他成分","g:主语+把+宾语（施事）+动词+其他成分","g:看/瞧+把+宾语（施事）+X得"],
      intro: "Den gewöhnlichen 把-Satz kennst du aus [[lesson:lesson-4]]: Eine Person tut etwas mit einem bestimmten Objekt und verändert es. Diese Lektion zeigt drei fortgeschrittene Varianten. Erstens kann das Subjekt etwas <strong>Unbelebtes</strong> sein – ein Unwetter, eine Nachricht, ein Lied –, das als Ursache auf jemanden einwirkt: 这场雨把我淋透了. Zweitens kann das Nomen nach 把 die Person sein, die etwas <strong>erlebt oder selbst tut</strong>: In 这件事把他急坏了 ist „er“ derjenige, der in Sorge gerät. Drittens gibt es den Ausruf <strong>看/瞧把 + Person + X得</strong>: „Schau nur, wie … du bist!“. Im Deutschen entsprechen dem oft Sätze mit „machen“, „bringen“, „versetzen“ oder einfach ein Satz mit der betroffenen Person als Subjekt. Die Grundregel bleibt: Nach dem Verb braucht der 把-Satz ein weiteres Element.",
      sections: [
        {
          heading: "Unbelebte Ursache + 把 + Objekt + Verb + Ergebnis",
          text: "Im typischen 把-Satz handelt eine Person bewusst. Hier steht als Subjekt dagegen eine <strong>Sache oder ein Ereignis</strong>, oft ein Naturereignis, das als Ursache auf das Objekt einwirkt. Sonst gilt alles wie gewohnt: Das Objekt ist bestimmt, und nach dem Verb folgt ein „anderes Element“ (其他成分) – ein Ergebnis- oder Richtungskomplement, 了 oder eine Mengenangabe. Das Muster betont, was die Ursache bewirkt hat.",
          examples: [
            { cn: "这场雨把我淋透了。", pinyin: "Zhè cháng yǔ bǎ wǒ líntòu le.", de: "Der Regen hat mich bis auf die Haut durchnässt." },
            { cn: "一场大雪把整个城市变成了白色。", pinyin: "Yì cháng dà xuě bǎ zhěnggè chéngshì biànchéng le báisè.", de: "Ein heftiger Schneefall hat die ganze Stadt weiß gefärbt." },
            { cn: "孩子的哭声把全家人都吵醒了。", pinyin: "Háizi de kūshēng bǎ quán jiā rén dōu chǎoxǐng le.", de: "Das Weinen des Kindes hat die ganze Familie geweckt." },
            { cn: "地震把这座老房子震塌了。", pinyin: "Dìzhèn bǎ zhè zuò lǎo fángzi zhèntā le.", de: "Das Erdbeben hat das alte Haus zum Einsturz gebracht." }
          ],
          tip: "Gleichwertig, aber aus anderer Perspektive ist das 被-Passiv ([[lesson:lesson-5]]): 我被雨淋透了 – dann ist die betroffene Person das Thema des Satzes."
        },
        {
          heading: "Abstrakte Ursachen: Worte, Nachrichten, Erfahrungen",
          text: "Die Ursache muss nichts Greifbares sein. Auch ein Satz, ein Anruf, ein Film oder eine Erfahrung kann im 把-Satz Subjekt sein – in gesprochener wie in geschriebener Sprache. Nach dem Verb steht dann häufig ein Ergebniskomplement (逗笑, 打乱) oder ein Zustandskomplement mit 得, das die Folge beschreibt. Im Deutschen passt oft „jemanden zu etwas bringen“ oder „bei jemandem etwas auslösen“.",
          examples: [
            { cn: "他的一句话把大家都逗笑了。", pinyin: "Tā de yí jù huà bǎ dàjiā dōu dòuxiào le.", de: "Mit einem einzigen Satz brachte er alle zum Lachen." },
            { cn: "一个电话把我的计划全打乱了。", pinyin: "Yí ge diànhuà bǎ wǒ de jìhuà quán dǎluàn le.", de: "Ein einziger Anruf hat meine ganzen Pläne durcheinandergebracht." },
            { cn: "这个消息把他气得说不出话来。", pinyin: "Zhège xiāoxi bǎ tā qì de shuō bu chū huà lái.", de: "Die Nachricht hat ihn so wütend gemacht, dass er kein Wort herausbrachte." },
            { cn: "这次经历把她变成了一个更坚强的人。", pinyin: "Zhè cì jīnglì bǎ tā biànchéng le yí ge gèng jiānqiáng de rén.", de: "Diese Erfahrung hat sie zu einem stärkeren Menschen gemacht." }
          ]
        },
        {
          heading: "把 + Person, die etwas erlebt oder tut (施事)",
          text: "Normalerweise ist das Nomen nach 把 das, womit etwas gemacht wird. Hier ist es dagegen der <strong>Handelnde oder Erlebende</strong> (施事 shīshì): In 这件事把他急坏了 ist „er“ derjenige, der in Sorge gerät; in 把狗跑了 läuft der Hund selbst weg. Das Verb ist meist intransitiv oder ein Zustand (累、急、忙、饿、跑、病). Die Ursache steht als Subjekt oder in einem vorangehenden Satzteil, oft schwingt „leider, ungewollt“ mit. 可 vor 把 verstärkt: 可把妈妈急坏了.",
          examples: [
            { cn: "这件事把他急坏了。", pinyin: "Zhè jiàn shì bǎ tā jíhuài le.", de: "Die Sache hat ihn ganz verrückt vor Sorge gemacht." },
            { cn: "等了三个小时，把大家都饿坏了。", pinyin: "Děng le sān ge xiǎoshí, bǎ dàjiā dōu èhuài le.", de: "Nach drei Stunden Warten waren alle völlig ausgehungert." },
            { cn: "儿子一夜没回家，可把妈妈急坏了。", pinyin: "Érzi yí yè méi huí jiā, kě bǎ māma jíhuài le.", de: "Der Sohn kam die ganze Nacht nicht nach Hause – die Mutter war außer sich vor Sorge." },
            { cn: "终于考完了，把他高兴得一晚上没睡着。", pinyin: "Zhōngyú kǎowán le, bǎ tā gāoxìng de yì wǎnshang méi shuìzháo.", de: "Endlich waren die Prüfungen vorbei – er war so glücklich, dass er die ganze Nacht nicht schlafen konnte." },
            { cn: "我只顾着打电话，把狗跑了。", pinyin: "Wǒ zhǐ gùzhe dǎ diànhuà, bǎ gǒu pǎo le.", de: "Ich war nur mit Telefonieren beschäftigt, und schon war mir der Hund entwischt. (Sondertyp wie 把小偷跑了; im Alltag sagt man eher 让狗跑了 oder 把狗放跑了)" }
          ],
          tip: "Oft geht es auch mit 让 oder 叫: 这件事让他急坏了. Der 把-Satz betont stärker die (meist ungewollte) Wirkung. Der Typ 把 + Person/Tier + 跑了 ist allerdings ein Sonderfall, den man vor allem aus Lehrbüchern und Erzählungen kennt; im Alltag klingt 让狗跑了 oder 把狗放跑了 natürlicher."
        },
        {
          heading: "看/瞧 + 把 + Person + X得 — „Schau nur, wie …!“",
          text: "Dieser gesprochene <strong>Ausruf</strong> lenkt die Aufmerksamkeit auf einen auffälligen Zustand, in den jemand geraten ist. Das Nomen nach 把 ist wieder die Person, die den Zustand erlebt. X ist meist ein Adjektiv oder psychisches Verb (急、高兴、累、吓、气). Nach 得 kann der Satz offen enden – der hohe Grad wird mitverstanden – oder eine konkrete Folge nennen. Oft schwingen Mitgefühl, Spott oder Tadel mit. 看 und 瞧 (qiáo) sind austauschbar, 瞧 klingt etwas umgangssprachlicher; am Ende schreibt man statt 得 oft 的.",
          examples: [
            { cn: "看把你累得，快坐下休息一会儿。", pinyin: "Kàn bǎ nǐ lèi de, kuài zuòxia xiūxi yíhuìr.", de: "Schau nur, wie erschöpft du bist – setz dich und ruh dich kurz aus." },
            { cn: "瞧把他得意得，不就是考了个第一吗？", pinyin: "Qiáo bǎ tā déyì de, bú jiù shì kǎo le ge dì yī ma?", de: "Sieh nur, wie selbstzufrieden er ist – er hat in der Prüfung doch bloß als Bester abgeschnitten! (spöttisch)" },
            { cn: "看把孩子冻得，脸都红了。", pinyin: "Kàn bǎ háizi dòng de, liǎn dōu hóng le.", de: "Schau nur, wie das Kind friert – sein Gesicht ist ganz rot." },
            { cn: "瞧把你吓得，不就是一只小虫子吗？", pinyin: "Qiáo bǎ nǐ xià de, bú jiù shì yì zhī xiǎo chóngzi ma?", de: "Sieh nur, wie du dich erschreckt hast – ist doch bloß ein kleiner Käfer!" },
            { cn: "看把你高兴的！", pinyin: "Kàn bǎ nǐ gāoxìng de!", de: "Na, du freust dich ja wie ein Schneekönig!" }
          ],
          tip: "Kürzer geht es ohne 把: 看你高兴的. In nordchinesischer Umgangssprache hört man statt 把 auch 给: 瞧给你高兴的."
        },
        {
          heading: "Überblick und typischer Fehler",
          text: "Das Nomen nach 把 kann also verschiedene Rollen haben: Im gewöhnlichen 把-Satz wird es von einer handelnden Person behandelt; bei unbelebter Ursache wird es von einer Sache oder einem Ereignis verändert; bei Verben wie 急、累、跑 erlebt oder tut es selbst etwas. In allen Fällen gilt: Das Verb darf nicht allein am Ende stehen – ein Komplement, 了 oder 得 ist nötig. Nach 得 folgt meist die Folge; nur im Ausruf 看/瞧把… darf der Satz nach 得 offen enden.",
          examples: [
            { cn: "他把门关上了。", pinyin: "Tā bǎ mén guānshang le.", de: "Er hat die Tür zugemacht. (Person handelt, Tür wird behandelt)" },
            { cn: "大风把门吹开了。", pinyin: "Dà fēng bǎ mén chuīkāi le.", de: "Der starke Wind hat die Tür aufgeweht. (unbelebte Ursache)" },
            { cn: "❌ 这件事把他急。", pinyin: "", de: "(Falsch – nach dem Verb fehlt ein weiteres Element.)" },
            { cn: "✅ 这件事把他急得睡不着觉。", pinyin: "Zhè jiàn shì bǎ tā jí de shuì bu zháo jiào.", de: "Die Sache macht ihm solche Sorgen, dass er nicht schlafen kann. (er erlebt den Zustand)" },
            { cn: "看把他急得！", pinyin: "Kàn bǎ tā jí de!", de: "Schau nur, wie aufgeregt er ist! (Ausruf)" }
          ],
          tip: "Ein Test für die 施事-Lesart: Frag, wer das Verb selbst tut oder erlebt. In 把他急坏了 sorgt er sich selbst (他很急), in 把狗跑了 läuft der Hund selbst (狗跑). In 他把门关上了 schließt die Tür nicht von selbst – jemand schließt sie (关门). Vorsicht: Eine bloße Umformung mit der Person oder Sache als Subjekt ist kein Test, denn auch 门关上了 oder 我淋透了 sind korrekte Sätze."
        }
      ]
    },
    // ── Vierwortmuster: A这A那, 左A右B, 东一A西一A (lesson-81) ──────────
    {
      id: 'lesson-81',
      number: 81,
      title: "Vierwortmuster: A这A那, 左A右B, 东一A西一A",
      subtitle: "Planlos, wiederholt, verstreut, abwechselnd",
      level: 'HSK6',
      grammarIds: ["g:A这A那","g:左A右B","g:东一A，西一A","g:A一+量词，B一+量词"],
      intro: "Chinesisch liebt feste Vierwortmuster (四字格): Zwei Rahmenwörter bleiben stehen, die beiden Lücken füllst du mit Verben oder Zählwörtern. In dieser Lektion lernst du vier solche Rahmen, die beschreiben, <em>wie</em> jemand etwas tut: <strong>A这A那</strong> (alles Mögliche), <strong>左A右B</strong> (immer wieder, mit viel Mühe), <strong>东一A，西一A</strong> (verstreut, planlos) und <strong>你一A，我一A</strong> (abwechselnd, einer nach dem anderen). Wörtlich genommen sind sie rätselhaft: 左 und 右 sind hier keine Richtungen, 东 und 西 keine Himmelsrichtungen, und 你 und 我 meinen nicht unbedingt „du“ und „ich“. Im Deutschen brauchst du dafür ganze Wendungen wie „hin und her“, „kreuz und quer“ oder „einer nach dem anderen“ – im Chinesischen reichen vier Silben. Du begegnest den Mustern vor allem in Erzählungen und in lebendiger Alltagssprache, oft mit einem leicht kritischen Unterton.",
      sections: [
        {
          heading: "A这A那 — alles Mögliche tun",
          text: "In <strong>A这A那</strong> steht zweimal dasselbe einsilbige Verb, einmal vor 这, einmal vor 那: 问这问那 „nach allem Möglichen fragen“, 想这想那 „sich über alles Mögliche Gedanken machen“, 买这买那 „alles Mögliche kaufen“, 管这管那 „sich in alles einmischen“. 这 und 那 zeigen auf keine bestimmten Dinge, sondern meinen „dies und jenes“ – also vieles. Das Muster steht als Prädikat und klingt oft leicht genervt oder kritisch: Es ist zu viel des Guten. Die Reihenfolge ist fest: erst 这, dann 那.",
          examples: [
            { cn: "奶奶第一次用智能手机，问这问那，问了一个晚上。", pinyin: "Nǎinai dìyī cì yòng zhìnéng shǒujī, wèn zhè wèn nà, wèn le yí ge wǎnshang.", de: "Oma benutzte zum ersten Mal ein Smartphone und fragte einen ganzen Abend lang nach allem Möglichen." },
            { cn: "每次出门旅行前，他都想这想那，晚上睡不着觉。", pinyin: "Měi cì chūmén lǚxíng qián, tā dōu xiǎng zhè xiǎng nà, wǎnshang shuì bu zháo jiào.", de: "Vor jeder Reise macht er sich über alles Mögliche Gedanken und kann nachts nicht schlafen." },
            { cn: "一到商场她就买这买那，钱很快就花光了。", pinyin: "Yí dào shāngchǎng tā jiù mǎi zhè mǎi nà, qián hěn kuài jiù huāguāng le.", de: "Kaum ist sie im Einkaufszentrum, kauft sie alles Mögliche, und das Geld ist schnell weg." },
            { cn: "你都三十岁了，父母还管这管那，你不觉得烦吗？", pinyin: "Nǐ dōu sānshí suì le, fùmǔ hái guǎn zhè guǎn nà, nǐ bù juéde fán ma?", de: "Du bist schon dreißig, und deine Eltern mischen sich immer noch in alles ein – nervt dich das nicht?" }
          ],
          tip: "Präge dir die übliche Form ein: ✅ 问这问那, 想这想那 – erst 这, dann 那. Die umgekehrte Folge (问那问这) hört man nur selten. Oft folgt ein Satzteil, der die Wirkung nennt (……，睡不着觉 / ……，钱很快就花光了). Verwandt ist 想来想去 „hin und her überlegen“: Dort wird die Handlung selbst wiederholt, ohne die vielen verschiedenen Dinge."
        },
        {
          heading: "左A右B — immer wieder, mit viel Mühe",
          text: "In <strong>左A右B</strong> bedeuten 左 „links“ und 右 „rechts“ hier „wieder und wieder, von allen Seiten“. A und B sind dasselbe Verb (左等右等 „warten und warten“, 左看右看 „immer wieder hinsehen“) oder zwei bedeutungsähnliche Verben (左思右想 „hin und her überlegen“, 左挑右选 „lange herumsuchen“). Das Muster betont, dass sich jemand wiederholt und gründlich bemüht. Danach folgt meist ein Ergebnis: oft ein enttäuschendes (还是没……, 就是不……) oder eine schließliche Lösung mit 最后 oder 终于. Es ist gesprochen wie geschrieben üblich; die Reihenfolge 左 vor 右 ist fest.",
          examples: [
            { cn: "我左等右等，快递还是没送到。", pinyin: "Wǒ zuǒ děng yòu děng, kuàidì háishi méi sòngdào.", de: "Ich habe gewartet und gewartet, aber das Paket ist immer noch nicht gekommen." },
            { cn: "大家左劝右劝，他就是不听。", pinyin: "Dàjiā zuǒ quàn yòu quàn, tā jiùshì bù tīng.", de: "Alle haben immer wieder auf ihn eingeredet, aber er hört einfach nicht." },
            { cn: "她左思右想，最后还是决定去国外留学。", pinyin: "Tā zuǒ sī yòu xiǎng, zuìhòu háishi juédìng qù guówài liúxué.", de: "Nach langem Hin und Her entschied sie sich schließlich doch für ein Studium im Ausland." },
            { cn: "我们左找右找，终于在沙发下面找到了钥匙。", pinyin: "Wǒmen zuǒ zhǎo yòu zhǎo, zhōngyú zài shāfā xiàmian zhǎodào le yàoshi.", de: "Wir haben überall gesucht und den Schlüssel endlich unter dem Sofa gefunden." }
          ],
          tip: "❌ 左等又等 → ✅ 左等右等. 右 „rechts“ und 又 „wieder“ klingen beide yòu – und 又 passt sogar inhaltlich, deshalb ist die Verwechslung so häufig. Merke: 左 und 右 gehören als Paar zusammen."
        },
        {
          heading: "东一A，西一A — hier ein …, da ein …",
          text: "In <strong>东一A，西一A</strong> stehen 东 „Osten“ und 西 „Westen“ für „hier“ und „da“. A ist ein Zählwort (oft mit Nomen) oder ein Verbalzählwort wie 下: 东一个，西一个 „hier einer, da einer“, 东一句，西一句 „mal dies, mal das sagen“, 东一下，西一下 „mal hier, mal da etwas tun“. Das Muster beschreibt Dinge, die ungeordnet verstreut sind, oder ein sprunghaftes, planloses Handeln und Reden – meist mit kritischem Unterton. Es ist gesprochen und in Erzählungen üblich. 一 folgt den Tonregeln: yí jiàn, aber yì zhāng.",
          examples: [
            { cn: "他的衣服东一件，西一件，扔得满屋都是。", pinyin: "Tā de yīfu dōng yí jiàn, xī yí jiàn, rēng de mǎn wū dōu shì.", de: "Seine Kleidung liegt kreuz und quer im ganzen Zimmer verstreut." },
            { cn: "墙上的画东一张，西一张，挂得乱七八糟。", pinyin: "Qiáng shang de huà dōng yì zhāng, xī yì zhāng, guà de luànqībāzāo.", de: "Die Bilder hängen wild durcheinander mal hier, mal da an der Wand." },
            { cn: "这篇文章东一句，西一句，看不出作者想说什么。", pinyin: "Zhè piān wénzhāng dōng yí jù, xī yí jù, kàn bu chū zuòzhě xiǎng shuō shénme.", de: "Der Text springt von einem Gedanken zum nächsten – man erkennt nicht, worauf er hinauswill." },
            { cn: "她做事东一下，西一下，一件也没做完。", pinyin: "Tā zuò shì dōng yí xià, xī yí xià, yí jiàn yě méi zuòwán.", de: "Sie fängt mal hier, mal da etwas an und bringt nichts zu Ende." }
          ],
          tip: "Das Wortpaar ist fest: ❌ 南一个，北一个 → ✅ 东一个，西一个. Im Deutschen passen je nach Satz „kreuz und quer“, „hier und da“ oder „zusammenhanglos“."
        },
        {
          heading: "你一A，我一A — abwechselnd, einer nach dem anderen",
          text: "Das Format <strong>A一+Zählwort，B一+Zählwort</strong> beschreibt, wie mehrere Beteiligte abwechselnd und lebhaft handeln. A und B sind meist 你 und 我 – gemeint ist aber nicht „du und ich“, sondern „der eine …, der andere …“. Hinter 一 steht ein Zählwort oder ein zählwortartiges Nomen, das die einzelne Handlung misst: 你一句，我一句 „einer nach dem anderen sagt etwas“, 你一口，我一口 „abwechselnd Bissen um Bissen“, 你一拳，我一脚 „mit Fäusten und Füßen aufeinander los“. Danach folgt oft, was dabei herauskommt. Besonders in Erzählungen wirkt das Muster anschaulich.",
          examples: [
            { cn: "开会的时候大家你一句，我一句，很快就把问题说清楚了。", pinyin: "Kāihuì de shíhou dàjiā nǐ yí jù, wǒ yí jù, hěn kuài jiù bǎ wèntí shuō qīngchu le.", de: "In der Besprechung meldete sich einer nach dem anderen zu Wort, und das Problem war schnell geklärt." },
            { cn: "姐妹俩你一口，我一口，把一碗面吃完了。", pinyin: "Jiěmèi liǎ nǐ yì kǒu, wǒ yì kǒu, bǎ yì wǎn miàn chīwán le.", de: "Die beiden Schwestern aßen abwechselnd Bissen um Bissen eine ganze Schüssel Nudeln leer." },
            { cn: "两个人你一拳，我一脚，打了起来。", pinyin: "Liǎng ge rén nǐ yì quán, wǒ yì jiǎo, dǎ le qǐlai.", de: "Die beiden gingen mit Fäusten und Füßen aufeinander los." },
            { cn: "几个老同学你一杯，我一杯，一直喝到半夜。", pinyin: "Jǐ ge lǎo tóngxué nǐ yì bēi, wǒ yì bēi, yìzhí hē dào bànyè.", de: "Die alten Klassenkameradinnen und -kameraden stießen reihum an und tranken bis Mitternacht." }
          ],
          tip: "你一言，我一语 (nǐ yì yán, wǒ yì yǔ) ist fast schon ein Chengyu: Viele reden durcheinander und tragen etwas bei. Achte auf die Töne: yí jù, aber yì kǒu, yì yán."
        },
        {
          heading: "Vergleich: 东一句，西一句 oder 你一句，我一句?",
          text: "Alle vier Muster beschreiben ein Hin und Her, aber jedes betont etwas anderes: <strong>A这A那</strong> – eine Handlung richtet sich auf viele verschiedene Dinge; <strong>左A右B</strong> – jemand bemüht sich immer wieder um dasselbe; <strong>东一A，西一A</strong> – etwas ist verstreut oder planlos; <strong>你一A，我一A</strong> – mehrere Personen wechseln sich ab. Den Unterschied zwischen den letzten beiden siehst du am besten an 一句: Eine einzelne Person redet 东一句，西一句 (zusammenhanglos), eine Gruppe redet 你一句，我一句 (reihum).",
          examples: [
            { cn: "他东一句，西一句，大家都不知道他想说什么。", pinyin: "Tā dōng yí jù, xī yí jù, dàjiā dōu bù zhīdào tā xiǎng shuō shénme.", de: "Er redet zusammenhanglos, und niemand versteht, worauf er hinauswill. (eine Person, planlos)" },
            { cn: "大家你一句，我一句，一会儿就把计划定下来了。", pinyin: "Dàjiā nǐ yí jù, wǒ yí jù, yíhuìr jiù bǎ jìhuà dìng xiàlai le.", de: "Alle redeten reihum mit, und im Nu stand der Plan. (mehrere Personen, abwechselnd)" },
            { cn: "她左看右看，还是觉得这件衣服太贵了。", pinyin: "Tā zuǒ kàn yòu kàn, háishi juéde zhè jiàn yīfu tài guì le.", de: "Sie betrachtete das Kleidungsstück immer wieder, fand es aber trotzdem zu teuer. (wiederholte Mühe)" },
            { cn: "孩子第一次来动物园，看这看那，什么都觉得新鲜。", pinyin: "Háizi dìyī cì lái dòngwùyuán, kàn zhè kàn nà, shénme dōu juéde xīnxiān.", de: "Das Kind ist zum ersten Mal im Zoo, schaut sich alles Mögliche an und findet alles spannend. (viele Dinge)" }
          ],
          tip: "Verwandt, aber ohne die vielen Gegenstände: 想来想去 „hin und her überlegen“ wiederholt nur die Handlung und klingt alltäglicher als 左思右想."
        }
      ]
    },
    // ── 好你个…, 看你…的 & Co. — Vorwurf, Ausruf, Abhaken (lesson-82) ──────────
    {
      id: 'lesson-82',
      number: 82,
      title: "好你个…, 看你…的 & Co. — Vorwurf, Ausruf, Abhaken",
      subtitle: "Feste Gesprächsmuster der gesprochenen Sprache",
      level: 'HSK6',
      grammarIds: ["g:好你个X","g:看你X的/瞧他X的","g:放着X不Y","g:早（也）不X，晚（也）不X","g:X到Y头上来了","g:X了就X了，（没）有……","g:X归X，Y归Y","g:这/那也不X，那/这也不Y","g:不X不……，一X……"],
      intro: "Wenn Leute auf Chinesisch streiten, necken, sich beschweren oder etwas abhaken, greifen sie gern zu festen Gesprächsmustern. Wörtlich übersetzt ergeben sie oft wenig Sinn: <strong>好你个……</strong> hat nichts mit „gut“ zu tun, <strong>放着……不……</strong> nichts mit „hinlegen“, und in <strong>……到我头上来了</strong> geht es um keinen Kopf. In dieser Lektion lernst du neun solche Rahmen in fünf Gruppen: jemanden direkt ansprechen (好你个X, 看你X的), Unvernünftiges kritisieren (放着X不Y, 这也不X，那也不Y), sich über Pech und Frechheit beklagen (早不X，晚不X, X到Y头上来了), Dinge trennen oder abhaken (X归X，Y归Y, X了就X了) und eine überraschende Erkenntnis pointiert ausdrücken (不X不知道，一X……). Fast alle gehören zur gesprochenen Sprache und tragen eine deutliche Emotion – genau darauf solltest du beim Hören achten. Im Deutschen entsprechen ihnen eher Ausrufe und Redensarten („Na warte!“, „Weg ist weg“) als Grammatik.",
      sections: [
        {
          heading: "好你个X & 看你X的 — jemanden direkt ansprechen",
          text: "Mit <strong>好你个</strong> + Name oder Bezeichnung spricht man jemanden emotional an: „Na warte, …!“, „Du bist mir ja einer!“. 好 heißt hier nicht „gut“, sondern leitet den Ausruf ein; 个 steht ohne 一. Meist folgt, was die Person angestellt hat. Je nach Lage ist das echter Ärger oder – unter Vertrauten – gespielte Empörung voller Zuneigung. <strong>看你X的</strong> bzw. <strong>瞧他X的</strong> weist auf einen auffälligen Zustand hin, mitfühlend, neckend oder tadelnd: 看你高兴的 „Sieh dich nur an, wie du dich freust!“. X ist meist ein Adjektiv oder Verb; den hohen Grad versteht man mit. Oft folgt ein Rat. 瞧 (qiáo) klingt umgangssprachlicher als 看.",
          examples: [
            { cn: "好你个小王，借了我的车也不说一声！", pinyin: "Hǎo nǐ ge Xiǎo Wáng, jiè le wǒ de chē yě bù shuō yì shēng!", de: "Na warte, Xiao Wang – leihst dir mein Auto und sagst kein Wort!" },
            { cn: "好你个老张，升职了也不请客！", pinyin: "Hǎo nǐ ge Lǎo Zhāng, shēngzhí le yě bù qǐngkè!", de: "Du bist mir ja einer, Lao Zhang – befördert und keine Runde ausgeben! (gespielte Empörung)" },
            { cn: "看你累的，快坐下休息一会儿吧。", pinyin: "Kàn nǐ lèi de, kuài zuòxia xiūxi yíhuìr ba.", de: "Du bist ja völlig erschöpft – setz dich schnell hin und ruh dich ein bisschen aus." },
            { cn: "瞧他急的，满头都是汗。", pinyin: "Qiáo tā jí de, mǎn tóu dōu shì hàn.", de: "Schau nur, wie gestresst er ist – ihm steht der Schweiß auf der Stirn." },
            { cn: "看你说的，这点小事哪用得着谢！", pinyin: "Kàn nǐ shuō de, zhè diǎn xiǎo shì nǎ yòng de zháo xiè!", de: "Was redest du da – für so eine Kleinigkeit musst du dich doch nicht bedanken!" }
          ],
          tip: "看你说的 ist eine feste Wendung: „Was redest du da!“ – als bescheidene Abwehr von Lob oder als milder Widerspruch. Nicht verwechseln mit 好一个 + Nomen (好一个美丽的地方！ „Was für ein schöner Ort!“): Das lobt meist etwas und richtet sich nicht vorwurfsvoll an jemanden."
        },
        {
          heading: "放着X不Y & 这也不X，那也不Y — Kritik an Unvernunft",
          text: "<strong>放着X不Y</strong> kritisiert, dass jemand eine vorhandene, offensichtlich gute Möglichkeit X nicht nutzt. 放着 heißt hier „obwohl … da ist“; Y ist das Verb, das zu X passt (电梯 – 坐, 饭 – 吃). Meist folgt, was die Person stattdessen Unvernünftiges tut – oft mit 偏, 非要 oder 却 – oder eine vorwurfsvolle Frage mit 为什么 oder 怎么. <strong>这也不X，那也不Y</strong> beschreibt, dass jemand alles ablehnt oder mit nichts zufrieden ist: 这 und 那 meinen „dies und das“, also praktisch alles. Meist steht zweimal dasselbe Verb, es können aber auch zwei verschiedene sein. Beide Muster klingen kritisch bis genervt und gehören zur gesprochenen Sprache.",
          examples: [
            { cn: "你放着电梯不坐，非要爬二十层楼？", pinyin: "Nǐ fàngzhe diàntī bú zuò, fēi yào pá èrshí céng lóu?", de: "Da ist ein Aufzug, und du willst unbedingt zwanzig Stockwerke zu Fuß gehen?" },
            { cn: "放着家里的饭不吃，他天天去外面吃快餐。", pinyin: "Fàngzhe jiā lǐ de fàn bù chī, tā tiāntiān qù wàimian chī kuàicān.", de: "Zu Hause steht Essen auf dem Tisch, aber er geht jeden Tag Fast Food essen." },
            { cn: "她放着名牌大学不上，偏要去当演员。", pinyin: "Tā fàngzhe míngpái dàxué bú shàng, piān yào qù dāng yǎnyuán.", de: "Sie lässt einen Platz an einer Spitzenuni sausen und will ausgerechnet Schauspielerin werden." },
            { cn: "我女儿这也不穿，那也不穿，早上总是迟到。", pinyin: "Wǒ nǚ'ér zhè yě bù chuān, nà yě bù chuān, zǎoshang zǒngshì chídào.", de: "Meine Tochter will weder dies noch das anziehen und kommt morgens ständig zu spät." },
            { cn: "你这也不愿意，那也不愿意，到底想怎么样？", pinyin: "Nǐ zhè yě bú yuànyì, nà yě bú yuànyì, dàodǐ xiǎng zěnmeyàng?", de: "Du willst weder das eine noch das andere – was willst du denn eigentlich?" }
          ],
          tip: "Ohne Vorwurf klingt 放着X不Y falsch – für eine neutrale Aussage reicht 不 + Verb. Das wörtliche 放着 „liegt da“ gibt es weiterhin: 桌子上放着一本书. Neutraler als 这也不……，那也不…… ist 什么都不……: 他什么都不吃."
        },
        {
          heading: "早不X，晚不X & X到Y头上来了 — Pech und Frechheit",
          text: "Mit <strong>早（也）不X，晚（也）不X</strong> beklagt man, dass etwas zum ungünstigsten Zeitpunkt passiert: „nicht früher und nicht später, sondern ausgerechnet jetzt“. X ist zweimal dasselbe Verb; fast immer folgt ein dritter Teil mit 偏偏 oder 偏, der den unpassenden Moment nennt. Mit 也 klingt es nachdrücklicher; das Subjekt kann auch eine Sache sein. <strong>X到Y头上来了</strong> – wörtlich „X ist bis auf Ys Kopf gekommen“ – ist ein empörter Vorwurf: Jemand richtet etwas Unangenehmes (骗, 欺负, 管) nun sogar gegen Y, oft gegen die sprechende Person selbst oder jemand Ranghöheres. 竟然 oder 居然 verstärken die Überraschung.",
          examples: [
            { cn: "公交车早不来，晚不来，偏偏我刚走开就来了。", pinyin: "Gōngjiāochē zǎo bù lái, wǎn bù lái, piānpiān wǒ gāng zǒukāi jiù lái le.", de: "Der Bus kommt weder früher noch später, sondern ausgerechnet, als ich gerade weggehe." },
            { cn: "他早也不病，晚也不病，偏偏在比赛前一天病了。", pinyin: "Tā zǎo yě bú bìng, wǎn yě bú bìng, piānpiān zài bǐsài qián yì tiān bìng le.", de: "Ausgerechnet am Tag vor dem Wettkampf musste er krank werden." },
            { cn: "早不停电，晚不停电，偏偏客人来的时候停了。", pinyin: "Zǎo bù tíngdiàn, wǎn bù tíngdiàn, piānpiān kèrén lái de shíhou tíng le.", de: "Der Strom fiel ausgerechnet in dem Moment aus, als die Gäste kamen." },
            { cn: "骗子竟然骗到警察头上来了。", pinyin: "Piànzi jìngrán piàn dào jǐngchá tóu shang lái le.", de: "Da wollte doch tatsächlich jemand ausgerechnet die Polizei betrügen." },
            { cn: "你一个新人，竟然管到我头上来了？", pinyin: "Nǐ yí ge xīnrén, jìngrán guǎn dào wǒ tóu shang lái le?", de: "Du bist gerade erst neu hier und willst mir schon Vorschriften machen?" }
          ],
          tip: "Beide Muster beziehen sich auf etwas, das tatsächlich passiert ist oder gerade passiert – nicht auf bloße Möglichkeiten. Verwandt ist die Redewendung 骑到……头上 „jemandem auf der Nase herumtanzen“."
        },
        {
          heading: "X归X，Y归Y & X了就X了 — trennen und abhaken",
          text: "<strong>X归X，Y归Y</strong> trennt zwei Bereiche, die man nicht vermischen soll: „Freundschaft ist Freundschaft, Geschäft ist Geschäft“. 归 heißt eigentlich „gehören zu“; oft folgt eine Folgerung. Der Ton ist sachlich-bestimmt. Steht nur ein Teil, wirkt das Muster einräumend: 批评归批评，…… „Kritik hin oder her, …“. <strong>X了就X了</strong> nimmt etwas Unerfreuliches, schon Geschehenes hin: 输了就输了 „verloren ist verloren“. Danach spielt eine rhetorische Frage mit 有什么 (……大不了的, 好……的) oder eine Aussage mit 没（有） das Ereignis herunter. Der Ton ist gelassen, tröstend oder trotzig.",
          examples: [
            { cn: "玩归玩，学习归学习，作业还是要先写完。", pinyin: "Wán guī wán, xuéxí guī xuéxí, zuòyè háishi yào xiān xiěwán.", de: "Spielen ist das eine, Lernen das andere – zuerst werden die Hausaufgaben gemacht." },
            { cn: "感情归感情，规定归规定，我不能为你破例。", pinyin: "Gǎnqíng guī gǎnqíng, guīdìng guī guīdìng, wǒ bù néng wèi nǐ pòlì.", de: "Gefühle hin oder her, Regeln sind Regeln – für dich kann ich keine Ausnahme machen." },
            { cn: "批评归批评，他心里还是很关心你的。", pinyin: "Pīpíng guī pīpíng, tā xīnli háishi hěn guānxīn nǐ de.", de: "Kritik hin oder her – im Grunde liegt ihm viel an dir." },
            { cn: "比赛输了就输了，有什么好难过的？", pinyin: "Bǐsài shū le jiù shū le, yǒu shénme hǎo nánguò de?", de: "Das Spiel ist verloren, dann ist es eben verloren – was gibt es da zu trauern?" },
            { cn: "杯子打破了就打破了，没关系，人没事就好。", pinyin: "Bēizi dǎpò le jiù dǎpò le, méi guānxi, rén méi shì jiù hǎo.", de: "Das Glas ist kaputt, na und – Hauptsache, dir ist nichts passiert." }
          ],
          tip: "X了就X了 gilt für Abgeschlossenes. Für eine Absicht steht es ohne 了: 不去就不去 „dann gehe ich eben nicht“. Mit 吧 klingt es noch nachgiebiger: 丢了就丢了吧."
        },
        {
          heading: "不X不知道，一X…… — die überraschende Erkenntnis",
          text: "Dieses Format hat zwei Teile mit demselben Verb. Der erste, meist <strong>不X不知道</strong>, sagt: „Solange man X nicht tut, weiß man es nicht.“ Der zweite mit <strong>一X</strong> baut auf 一……就…… auf ([[lesson:lesson-30]]): „Sobald man X tut, zeigt sich …“ – oft etwas Überraschendes oder Erschreckendes. Die bekannteste Form ist 不看不知道，一看吓一跳 „wenn man genau hinschaut, erschrickt man“. Statt 吓一跳 stehen auch 才发现 oder 才知道; 就 fällt meist weg oder wird durch 才 ersetzt. Das Format ist umgangssprachlich, pointiert und in Werbung und Schlagzeilen beliebt.",
          examples: [
            { cn: "不去不知道，一去才发现那里的风景这么美。", pinyin: "Bú qù bù zhīdào, yí qù cái fāxiàn nàli de fēngjǐng zhème měi.", de: "Erst als ich hingefahren bin, habe ich gemerkt, wie schön die Landschaft dort ist." },
            { cn: "不称不知道，一称吓一跳，我胖了五公斤。", pinyin: "Bù chēng bù zhīdào, yì chēng xià yí tiào, wǒ pàng le wǔ gōngjīn.", de: "Als ich mich auf die Waage stellte, bekam ich einen Schreck: fünf Kilo mehr." },
            { cn: "不问不知道，一问才知道他已经在这儿住了二十年。", pinyin: "Bú wèn bù zhīdào, yí wèn cái zhīdào tā yǐjīng zài zhèr zhù le èrshí nián.", de: "Erst als ich nachfragte, erfuhr ich, dass er schon seit zwanzig Jahren hier wohnt." },
            { cn: "不算不知道，一算吓一跳，一年光是咖啡就花了五千块。", pinyin: "Bú suàn bù zhīdào, yí suàn xià yí tiào, yì nián guāngshì kāfēi jiù huā le wǔqiān kuài.", de: "Als ich es nachrechnete, war ich schockiert: Allein für Kaffee gehen im Jahr fünftausend Yuan drauf." }
          ],
          tip: "Achte auf die Tonregeln: bú kàn bù zhīdào, yí kàn xià yí tiào – aber bù chēng, yì chēng, weil 称 im ersten Ton steht."
        }
      ]
    },
    // ── Halbaffixe: 超-, 多-, 反-, -化, -式 & Co. (lesson-83) ──────────
    {
      id: 'lesson-83',
      number: 83,
      title: "Halbaffixe: 超-, 多-, 反-, -化, -式 & Co.",
      subtitle: "Neue Wörter aus Vor- und Nachsilben erschließen",
      level: 'HSK6',
      grammarIds: ["g:类前缀@HSK6","g:类后缀@HSK6"],
      intro: "Viele chinesische Wörter, besonders in Zeitungen, Sachtexten und Werbung, entstehen nach festen Bauplänen: Eine Silbe mit eigener Bedeutung tritt vor oder hinter ein Nomen oder Adjektiv und bildet in Reihe neue Wörter. Die Grammatik nennt sie <strong>类前缀</strong> („präfixartige Morpheme“: 超, 多, 反, 无, 亚, 准) und <strong>类后缀</strong> („suffixartige Morpheme“: 化, 式, 型, 性). „Halb“-Affixe heißen sie, weil sie ihre eigene Bedeutung noch nicht verloren haben – anders als echte Affixe wie 子 in 桌子. Für dich heißt das: Kennst du die Bausteine, kannst du beim Lesen unbekannte Wörter wie 超低价, 无条件, 准妈妈 oder 可行性 oft sofort erschließen. Das Deutsche funktioniert ganz ähnlich – mit super-, multi-, anti-, -los, -isierung oder -heit –, und viele chinesische Bildungen lassen sich fast eins zu eins übersetzen.",
      sections: [
        {
          heading: "超— und 多— — super- und multi-",
          text: "<strong>超</strong> (chāo) heißt „über-, super-“ und bezeichnet etwas, das eine Grenze übertrifft: 超音速 „Überschall“, 超大型 „extragroß“, 超低价 „Tiefstpreis“. Ein Sonderfall ist 超市 „Supermarkt“: Es ist die Kurzform von 超级市场, das 超 darin steht also für 超级 „super-“. <strong>多</strong> (duō) heißt „multi-, viel-“: 多功能 „multifunktional“, 多媒体 „Multimedia“, 多民族 „multiethnisch, Vielvölker-“. Solche Wörter stehen oft direkt vor einem Nomen oder als Prädikat mit 是……的.",
          examples: [
            { cn: "这架超大型飞机能坐五百多人。", pinyin: "Zhè jià chāo dàxíng fēijī néng zuò wǔbǎi duō rén.", de: "Dieses extragroße Flugzeug bietet Platz für über fünfhundert Menschen." },
            { cn: "商场这个周末在搞超低价活动。", pinyin: "Shāngchǎng zhège zhōumò zài gǎo chāo dījià huódòng.", de: "Das Einkaufszentrum hat dieses Wochenende eine Aktion mit Tiefstpreisen." },
            { cn: "这间多功能教室可以上课，也可以开会。", pinyin: "Zhè jiān duō gōngnéng jiàoshì kěyǐ shàngkè, yě kěyǐ kāihuì.", de: "Dieser Mehrzweckraum ist für Unterricht und für Besprechungen geeignet." },
            { cn: "中国是一个多民族国家。", pinyin: "Zhōngguó shì yí ge duō mínzú guójiā.", de: "China ist ein Vielvölkerstaat." }
          ],
          tip: "Umgangssprachlich steht 超 auch als Gradadverb: 超好吃 „super lecker“, 超累 „total müde“. Das ist kein Wortbildungspräfix, sondern lockerer Stil – in Sachtexten passt es nicht."
        },
        {
          heading: "反— und 无— — anti- und -los",
          text: "<strong>反</strong> (fǎn) bedeutet „anti-, gegen“: 反科学 „wissenschaftsfeindlich“, 反战 „Antikriegs-“, 反作用 „Gegenwirkung“. <strong>无</strong> (wú) entspricht „-los, ohne“: 无线 „drahtlos“, 无糖 „zuckerfrei“, 无条件 „bedingungslos“, 无理由退货 „Rückgabe ohne Angabe von Gründen“. 无 bedeutet „nicht haben, ohne“ wie 没有, klingt aber knapper und eher schriftsprachlich; die Verneinung steckt also schon im Wort selbst. Du findest solche Bildungen besonders auf Verpackungen, Schildern und in Werbung.",
          examples: [
            { cn: "这是一部很有名的反战电影。", pinyin: "Zhè shì yí bù hěn yǒumíng de fǎnzhàn diànyǐng.", de: "Das ist ein sehr bekannter Antikriegsfilm." },
            { cn: "压力太大，反而会起反作用。", pinyin: "Yālì tài dà, fǎn'ér huì qǐ fǎnzuòyòng.", de: "Zu viel Druck kann genau das Gegenteil bewirken." },
            { cn: "现在很多耳机都是无线的。", pinyin: "Xiànzài hěn duō ěrjī dōu shì wúxiàn de.", de: "Heute sind viele Kopfhörer kabellos." },
            { cn: "在这家网店买的东西七天内可以无理由退货。", pinyin: "Zài zhè jiā wǎngdiàn mǎi de dōngxi qī tiān nèi kěyǐ wú lǐyóu tuìhuò.", de: "Was du in diesem Onlineshop kaufst, kannst du innerhalb von sieben Tagen ohne Angabe von Gründen zurückgeben." },
            { cn: "我只喝无糖的饮料。", pinyin: "Wǒ zhǐ hē wú táng de yǐnliào.", de: "Ich trinke nur zuckerfreie Getränke." }
          ],
          tip: "Als freies Verb im Satz sagt man im Alltag meist 没有: 这种饮料没有糖。 Feste 无-Bildungen wie 无糖, 无线网络 (WLAN) oder 无人驾驶 „fahrerlos“ stehen dagegen auf Etiketten und in Sachtexten – und werden längst auch im Gespräch verwendet."
        },
        {
          heading: "亚— und 准— — knapp darunter und beinahe",
          text: "<strong>亚</strong> (yà) bedeutet „sub-, fast, zweitrangig“ und bezeichnet etwas, das knapp unter einer Stufe liegt: 亚热带 „Subtropen“, 亚健康 „nicht krank, aber auch nicht richtig gesund“, 亚军 „zweiter Platz“. <strong>准</strong> (zhǔn) heißt „angehend, beinahe“: Die Person oder Sache ist es fast schon. 准妈妈 und 准爸爸 sind „werdende Mutter“ und „werdender Vater“, 准大学生 sind angehende Studierende, die schon zugelassen sind, aber noch nicht angefangen haben.",
          examples: [
            { cn: "广州属于亚热带气候。", pinyin: "Guǎngzhōu shǔyú yàrèdài qìhòu.", de: "Guangzhou hat subtropisches Klima." },
            { cn: "经常熬夜容易让人进入亚健康状态。", pinyin: "Jīngcháng áoyè róngyì ràng rén jìnrù yàjiànkāng zhuàngtài.", de: "Wer oft die Nacht durchmacht, ist schnell nicht mehr richtig fit." },
            { cn: "她在这次比赛中获得了亚军。", pinyin: "Tā zài zhè cì bǐsài zhōng huòdé le yàjūn.", de: "Sie belegte bei diesem Wettbewerb den zweiten Platz." },
            { cn: "这位准爸爸每天都在看育儿书。", pinyin: "Zhè wèi zhǔn bàba měitiān dōu zài kàn yù'ér shū.", de: "Der werdende Vater liest jeden Tag Ratgeber zur Kindererziehung." },
            { cn: "这些准大学生九月就要去学校报到了。", pinyin: "Zhèxiē zhǔn dàxuéshēng jiǔ yuè jiù yào qù xuéxiào bàodào le.", de: "Diese angehenden Studierenden müssen sich im September an der Uni melden." }
          ],
          tip: "Vorsicht: 亚 ist auch die Abkürzung für 亚洲 „Asien“ – 亚运会 sind die Asienspiele, keine „Unter-Spiele“. Erst der Zusammenhang zeigt, welches 亚 gemeint ist."
        },
        {
          heading: "—化 und —性 — -isierung und -heit",
          text: "<strong>化</strong> (huà) heißt „zu etwas werden, -isieren“. Es macht aus Nomen und Adjektiven Verben bzw. Vorgangsnomen: 现代化 „Modernisierung, modern werden“, 全球化 „Globalisierung“, 简单化 „vereinfachen“, 绿化 „begrünen“. Solche Wörter können wie Verben 了 nehmen oder mit 把 stehen. <strong>性</strong> (xìng) entspricht „-heit, -keit, -ität“ und bildet abstrakte Nomen aus Adjektiven und Verben: 重要性 „Wichtigkeit“, 可能性 „Möglichkeit“, 积极性 „Eifer“, 可行性 „Machbarkeit“. Sie stehen oft als Objekt hinter ……的.",
          examples: [
            { cn: "随着经济全球化，各国的联系越来越紧密。", pinyin: "Suízhe jīngjì quánqiúhuà, gè guó de liánxì yuè lái yuè jǐnmì.", de: "Mit der wirtschaftlichen Globalisierung werden die Verbindungen zwischen den Ländern immer enger." },
            { cn: "我们应该把复杂的问题简单化。", pinyin: "Wǒmen yīnggāi bǎ fùzá de wèntí jiǎndānhuà.", de: "Wir sollten komplizierte Probleme vereinfachen." },
            { cn: "这个计划的可行性还需要研究。", pinyin: "Zhège jìhuà de kěxíngxìng hái xūyào yánjiū.", de: "Ob dieser Plan machbar ist, muss noch geprüft werden." },
            { cn: "老师的表扬提高了学生的积极性。", pinyin: "Lǎoshī de biǎoyáng tígāo le xuésheng de jījíxìng.", de: "Das Lob der Lehrkraft hat den Eifer der Schülerinnen und Schüler gesteigert." }
          ],
          tip: "Deutsche Wörter auf -heit, -keit und -ität entsprechen oft einem chinesischen Wort auf 性 – aber nicht immer: „Freiheit“ heißt einfach 自由, „Gesundheit“ einfach 健康. Prüfe neue Bildungen im Wörterbuch, bevor du sie selbst verwendest."
        },
        {
          heading: "—式 und —型 — Art und Typ",
          text: "<strong>式</strong> (shì) bedeutet „-Art, -Stil, nach Art von“: 中式 „chinesischer Art“, 西式 „westlich“, 自助式 „mit Selbstbedienung“, 开放式 „offen“. <strong>型</strong> (xíng) bedeutet „-Typ, -Format, Modell“: 大型 „Groß-“, 小型 „Klein-“, 新型 „neuartig“, 血型 „Blutgruppe“. Wörter mit 式 und 型 stehen meist als Attribut direkt vor einem Nomen, oft ohne 的 (中式婚礼, 大型超市); als Prädikat stehen sie mit 是……的.",
          examples: [
            { cn: "他们的婚礼是中式的，新娘穿了一身红衣服。", pinyin: "Tāmen de hūnlǐ shì Zhōngshì de, xīnniáng chuān le yì shēn hóng yīfu.", de: "Ihre Hochzeit war im chinesischen Stil, die Braut trug Rot." },
            { cn: "这家酒店提供自助式早餐。", pinyin: "Zhè jiā jiǔdiàn tígōng zìzhùshì zǎocān.", de: "Dieses Hotel bietet Frühstück als Büfett an." },
            { cn: "周末这里要举行一场大型音乐会。", pinyin: "Zhōumò zhèlǐ yào jǔxíng yì chǎng dàxíng yīnyuèhuì.", de: "Am Wochenende findet hier ein großes Konzert statt." },
            { cn: "这是一款新型手机，充电只要十分钟。", pinyin: "Zhè shì yì kuǎn xīnxíng shǒujī, chōngdiàn zhǐ yào shí fēnzhōng.", de: "Das ist ein neuartiges Handy, das in nur zehn Minuten aufgeladen ist." },
            { cn: "你是什么血型？", pinyin: "Nǐ shì shénme xuèxíng?", de: "Welche Blutgruppe hast du?" }
          ],
          tip: "Faustregel: 式 beantwortet „auf welche Art?“ (中式婚礼 – Hochzeit im chinesischen Stil), 型 beantwortet „welcher Typ, welche Größe?“ (大型婚礼 – große Hochzeit)."
        }
      ]
    },
    // ── Zahlen, Datum, Uhrzeit und Preise (lesson-46) ──────────
    {
      id: 'lesson-46',
      number: 8.5,
      title: "Zahlen, Datum, Uhrzeit und Preise",
      subtitle: "Zählen, Reihenfolge, Zeitpunkte, Beträge und Schätzungen",
      level: 'HSK1',
      grammarIds: ["g:数词@HSK1","g:时量词@HSK1","g:钱数表示法","g:时间表示法：年、月、日、星期表示法","g:钟点表示法","g:序数表达法1：第+数词","g:第—","g:主谓句3：名词谓语句","g:数词@HSK2","g:序数表示法2：数词+量词","g:概数表达法1：（1）用“几”表示概数","g:数词+多+量词","g:数词+量词+多"],
      intro: "Zahlen begegnen dir überall: beim Einkaufen, bei Verabredungen, beim Datum und beim Alter. Die gute Nachricht: Chinesische Zahlen sind <strong>völlig regelmäßig</strong> aufgebaut – aus zehn Grundzahlen und ein paar Stellenwörtern wie 十, 百 und 千 kannst du jede Zahl bilden. Neu für dich ist zweierlei. Erstens gilt bei Datum und Uhrzeit die Reihenfolge <strong>vom Großen zum Kleinen</strong>: Jahr – Monat – Tag – Uhrzeit. Zweitens braucht ein Satz über Datum, Uhrzeit, Alter oder Preis oft <strong>gar kein Verb</strong>: 今天星期天 heißt „Heute ist Sonntag“, ganz ohne „ist“. Außerdem lernst du Ordnungszahlen mit 第 und – als Ausblick auf die nächste Stufe – das Zahlwort 万 sowie ungefähre Zahlen: <em>ein paar</em>, <em>über zwanzig</em>, <em>etwas über eine Stunde</em>.",
      sections: [
        {
          heading: "Zahlen von 零 bis 万",
          text: "Die Zahlen 一 bis 十 setzt du einfach zusammen: 十二 ist „zehn-zwei“ = 12, 二十 ist „zwei-zehn“ = 20, 三百五十 = 350, 三千 = 3000. Fehlt in der Mitte eine Stelle, füllt 零 (líng) die Lücke: 一百零五 = 105. „Zwei“ hat zwei Formen: <strong>二</strong> beim Zählen, in zusammengesetzten Zahlen und im Datum, <strong>两</strong> (liǎng) direkt vor einem Zählwort: 两个人. <strong>半</strong> (bàn) heißt „halb“: 半个小时, 一个半小时 „anderthalb Stunden“. Und 一 wird je nach folgendem Ton yí oder yì gesprochen, beim Zählen und im Datum aber yī. Ausblick (HSK 2): Für 10 000 gibt es ein eigenes Wort, <strong>万</strong> (wàn) – nicht 十千.",
          examples: [
            { cn: "我有两个哥哥。", pinyin: "Wǒ yǒu liǎng ge gēge.", de: "Ich habe zwei ältere Brüder." },
            { cn: "一年有三百六十五天。", pinyin: "Yì nián yǒu sānbǎi liùshíwǔ tiān.", de: "Ein Jahr hat 365 Tage." },
            { cn: "我们学校有一千二百个学生。", pinyin: "Wǒmen xuéxiào yǒu yìqiān èrbǎi ge xuésheng.", de: "Unsere Schule hat 1200 Schülerinnen und Schüler." },
            { cn: "这个大学有两万个学生。", pinyin: "Zhège dàxué yǒu liǎng wàn ge xuésheng.", de: "Diese Universität hat 20 000 Studierende. (Ausblick: 万)" },
            { cn: "我每天学半个小时汉语。", pinyin: "Wǒ měi tiān xué bàn ge xiǎoshí Hànyǔ.", de: "Ich lerne jeden Tag eine halbe Stunde Chinesisch." }
          ],
          tip: "❌ 二个人 → ✅ 两个人. Aber in zusammengesetzten Zahlen bleibt es 二: 十二个人, 二十二个人. Vor 百 und 千 sind beide Formen üblich (两百 oder 二百), vor 万 meist 两万."
        },
        {
          heading: "Ordnungszahlen: 第 + Zahl – und wann 第 fehlt",
          text: "<strong>第</strong> (dì) vor einer Zahl macht daraus eine Ordnungszahl: 第一 „erster“, 第二 „zweiter“, 第十 „zehnter“. Vor einem Nomen steht wie sonst auch ein Zählwort: 第三个问题, 第一次 „das erste Mal“. 第二天 heißt oft „am nächsten Tag“. Nach 第 heißt „zwei“ 二, nicht 两. Bei Monaten fällt 第 weg: 三月 „März“, aber 第三个月 „der dritte Monat“. Ausblick (HSK 2): Auch bei Stockwerken, Zimmern und Nummern steht die Zahl <strong>ohne 第</strong> direkt vor dem Wort und zeigt trotzdem die Reihenfolge: 三楼 „dritter Stock“, 三二八号房间 „Zimmer 328“. Auch hier heißt es 二楼, nicht 两楼.",
          examples: [
            { cn: "这是我第一次吃中国菜。", pinyin: "Zhè shì wǒ dìyī cì chī Zhōngguó cài.", de: "Ich esse zum ersten Mal chinesisches Essen." },
            { cn: "第三个人是我妹妹。", pinyin: "Dìsān ge rén shì wǒ mèimei.", de: "Die dritte Person ist meine jüngere Schwester." },
            { cn: "第二天，他就回家了。", pinyin: "Dì'èr tiān, tā jiù huí jiā le.", de: "Am nächsten Tag ist er gleich nach Hause gefahren." },
            { cn: "我们的教室在三楼。", pinyin: "Wǒmen de jiàoshì zài sān lóu.", de: "Unser Klassenzimmer ist im dritten Stock (chinesisch gezählt)." },
            { cn: "她住在三二八号房间。", pinyin: "Tā zhù zài sān èr bā hào fángjiān.", de: "Sie wohnt in Zimmer 328 (Ziffer für Ziffer gelesen)." }
          ],
          tip: "❌ 第两个 → ✅ 第二个. Achtung bei Stockwerken: In China ist das Erdgeschoss 一楼 – 三楼 entspricht also dem deutschen zweiten Stock. 一 behält in Ordnungszahlen seinen ersten Ton: 第一 (dìyī)."
        },
        {
          heading: "Datum und Uhrzeit: 年, 月, 号, 星期, 点, 分",
          text: "Ein Zeitpunkt wird <strong>vom Großen zum Kleinen</strong> genannt: Jahr – Monat – Tag – Wochentag – Tageszeit – Uhrzeit. Jahreszahlen liest du Ziffer für Ziffer: 二〇二六年 (èr líng èr liù nián). Die Monate sind durchgezählt: 一月 bis 十二月. Den Tag nennst du gesprochen mit 号, geschrieben mit 日. Die Wochentage heißen 星期一 (Montag) bis 星期六, Sonntag ist 星期天 oder schriftlich 星期日. Die Uhrzeit: Zahl + 点 (+ Zahl + 分); unter zehn Minuten steht meist 零 davor: 八点零五分. Viertelstunden kann man mit 刻 (kè) angeben. Gefragt wird mit 几: 几月几号？星期几？几点？",
          examples: [
            { cn: "今天是十月十一号，星期天。", pinyin: "Jīntiān shì shí yuè shíyī hào, xīngqītiān.", de: "Heute ist der 11. Oktober, ein Sonntag." },
            { cn: "你的生日是几月几号？", pinyin: "Nǐ de shēngrì shì jǐ yuè jǐ hào?", de: "Wann hast du Geburtstag?" },
            { cn: "火车早上八点零五分开。", pinyin: "Huǒchē zǎoshang bā diǎn líng wǔ fēn kāi.", de: "Der Zug fährt morgens um 8:05 Uhr ab." },
            { cn: "我们晚上七点半在学校见。", pinyin: "Wǒmen wǎnshang qī diǎn bàn zài xuéxiào jiàn.", de: "Wir treffen uns abends um halb acht an der Schule." },
            { cn: "一九九八年我第一次来中国。", pinyin: "Yī jiǔ jiǔ bā nián wǒ dìyī cì lái Zhōngguó.", de: "1998 bin ich zum ersten Mal nach China gekommen." }
          ],
          tip: "Vorsicht: 两点半 ist 2:30 Uhr, auf Deutsch also „halb <em>drei</em>“ – 半 zählt von der vergangenen Stunde aus. Für 2 Uhr sagt man 两点, aber 十二点. Und verwechsle Zeitpunkt und Dauer nicht: 三点 „um drei Uhr“, 三个小时 „drei Stunden lang“. 年 und 天 brauchen kein 个 (三天, 两年), 月 und 小时 schon (两个月)."
        },
        {
          heading: "Alter und Preise: 岁, 块, 元 – Sätze ohne Verb",
          text: "Bei Datum, Uhrzeit, Alter und Preis kann ein Nomen oder eine Mengenangabe <strong>allein das Prädikat</strong> bilden: 今天星期天, 现在八点, 我弟弟七岁, 这个面包八块五. Bei Datum und Uhrzeit darf auch 是 stehen. Verneint wird aber nur mit <strong>不是</strong>, und 了 am Ende zeigt eine Veränderung. Zum Geld: Ein Yuan heißt gesprochen <strong>块</strong> (kuài), auf Preisschildern <strong>元</strong> (yuán); ein Zehntel heißt 毛 (máo), geschrieben 角 (jiǎo). Gelesen wird von groß nach klein, die letzte Einheit fällt oft weg: 八块五 = 8,50 Yuan. Am Ende kann 钱 stehen. Nach dem Preis fragst du mit 多少钱.",
          examples: [
            { cn: "我弟弟今年七岁。", pinyin: "Wǒ dìdi jīnnián qī suì.", de: "Mein kleiner Bruder ist dieses Jahr sieben." },
            { cn: "这个面包八块五。", pinyin: "Zhège miànbāo bā kuài wǔ.", de: "Dieses Brot kostet 8,50 Yuan." },
            { cn: "两个苹果多少钱？", pinyin: "Liǎng ge píngguǒ duōshao qián?", de: "Was kosten zwei Äpfel?" },
            { cn: "今天不是星期六，是星期天。", pinyin: "Jīntiān bú shì xīngqīliù, shì xīngqītiān.", de: "Heute ist nicht Samstag, sondern Sonntag." },
            { cn: "她女儿明天就三岁了。", pinyin: "Tā nǚ'ér míngtiān jiù sān suì le.", de: "Ihre Tochter wird morgen schon drei." }
          ],
          tip: "❌ 今天不星期六 → ✅ 今天不是星期六. Ein Verb für „kosten“ brauchst du nicht: Der Preis folgt direkt auf die Sache. Vor 块 heißt es 两块, in größeren Zahlen aber 十二块."
        },
        {
          heading: "Ausblick (HSK 2): ungefähre Zahlen – 几, 十几, 二十多, 一个多",
          text: "<strong>几</strong> ist nicht nur ein Fragewort: In einer Aussage heißt es „ein paar“ (etwa zwei bis neun) und braucht wie jede Zahl ein Zählwort: 几个问题. 十几 ist „etwas über zehn“, 几十 „einige Dutzend“. <strong>多</strong> nach einer Zahl heißt „über“ – die Stellung entscheidet: Nach einer runden Zahl steht 多 <em>vor</em> dem Zählwort, wenn ganze Einheiten dazukommen: 二十多年 „über zwanzig Jahre“ (bis neunundzwanzig). Hinter dem Zählwort ist der Überschuss nur ein Teil der Einheit: 一个多小时 „etwas über eine Stunde“. Bei Zahlen, die nicht auf null enden, geht nur diese zweite Form. 好多 heißt umgangssprachlich „sehr viele“.",
          examples: [
            { cn: "我想问你几个问题。", pinyin: "Wǒ xiǎng wèn nǐ jǐ ge wèntí.", de: "Ich möchte dir ein paar Fragen stellen." },
            { cn: "这个饭馆有几十个菜。", pinyin: "Zhège fànguǎn yǒu jǐshí ge cài.", de: "Dieses Restaurant hat einige Dutzend Gerichte." },
            { cn: "我在这儿住了二十多年了。", pinyin: "Wǒ zài zhèr zhùle èrshí duō nián le.", de: "Ich wohne schon über zwanzig Jahre hier." },
            { cn: "我们走了一个多小时。", pinyin: "Wǒmen zǒule yí ge duō xiǎoshí.", de: "Wir sind etwas über eine Stunde gelaufen." },
            { cn: "今天商店里有好多人。", pinyin: "Jīntiān shāngdiàn li yǒu hǎoduō rén.", de: "Heute sind im Geschäft jede Menge Leute." }
          ],
          tip: "❌ 三多个小时 → ✅ 三个多小时. Bei runden Zahlen ändert die Stellung die Bedeutung: 十多年 „über zehn Jahre“ (bis neunzehn), 十年多 „zehn Jahre und ein bisschen“. Ob 几 fragt oder schätzt, zeigen Satzzeichen und Betonung: 你有几本书？ – 我有几本书。"
        }
      ]
    },
    // ── Sätze mit 是 — und wann 是 fehlt (lesson-47) ──────────
    {
      id: 'lesson-47',
      number: 4.5,
      title: "Sätze mit 是 — und wann 是 fehlt",
      subtitle: "Gleichsetzung, Ort, Merkmal und Sätze ohne „sein“",
      level: 'HSK1/HSK2',
      grammarIds: ["g:“是”字句1：表示等同或类属","g:处所+是+名词","g:“是”字句2：表示说明或特征","g:谓语：名词、代词、数词或数量短语作谓语","g:陈述句","g:单句：非主谓句"],
      intro: "是 (shì) wird oft als „sein“ übersetzt – aber es deckt nur einen Teil dessen ab, was das deutsche „sein“ kann. Mit 是 verbindest du vor allem <strong>zwei Nomen</strong>: 我是学生 „Ich bin Student/Studentin“. Vor Adjektiven steht dagegen <strong>kein 是</strong> (她很高), und bei Datum, Uhrzeit, Alter und Preis kommt der Satz oft ganz ohne Verb aus (今天星期五). Umgekehrt kann 是 Dinge ausdrücken, die im Deutschen mit „haben“ oder „nehmen“ gesagt werden: 我是咖啡 „Ich nehme Kaffee“. In dieser Lektion lernst du, wann du 是 brauchst, wann es fehlt, wie du mit 是 sagst, was sich an einem Ort befindet – und dass manche Sätze überhaupt kein Subjekt haben, nicht einmal ein „es“.",
      sections: [
        {
          heading: "A 是 B — Gleichsetzung und Zugehörigkeit",
          text: "Die Grundform ist <strong>Subjekt + 是 + Nomen</strong>. Entweder meinen beide Seiten dasselbe (这是我哥哥 – „das“ und „mein Bruder“ sind dieselbe Person), oder das Subjekt gehört zu einer Gruppe (他是医生). Einen Artikel wie „ein“ gibt es nicht. Verneint wird 是 nur mit <strong>不</strong>: 不是 (bú shì). Fragen bildest du mit 吗 (siehe [[lesson:lesson-22]]) oder mit 是不是. „Haben“ und „es gibt“ heißen dagegen 有, nicht 是 – dazu [[lesson:lesson-23]].",
          examples: [
            { cn: "这是我哥哥。", pinyin: "Zhè shì wǒ gēge.", de: "Das ist mein älterer Bruder." },
            { cn: "他是医生，不是老师。", pinyin: "Tā shì yīshēng, bú shì lǎoshī.", de: "Er ist Arzt, nicht Lehrer." },
            { cn: "那是我们的学校。", pinyin: "Nà shì wǒmen de xuéxiào.", de: "Das dort ist unsere Schule." },
            { cn: "我的中文老师是北京人。", pinyin: "Wǒ de Zhōngwén lǎoshī shì Běijīng rén.", de: "Meine Chinesischlehrkraft kommt aus Peking." }
          ],
          tip: "❌ 我没是学生 → ✅ 我不是学生. 是 wird nie mit 没 verneint."
        },
        {
          heading: "Ohne 是: Adjektive und Nomen als Prädikat",
          text: "Vor einem Adjektiv steht <strong>kein 是</strong>, sondern meist 很: 我妹妹很高 (mehr dazu in [[lesson:lesson-27]]). Bei Datum, Uhrzeit, Alter, Preis und – umgangssprachlich – Herkunft kann ein Nomen, eine Zahl oder eine Mengenangabe <strong>selbst das Prädikat</strong> sein: 明天星期六, 这个西瓜二十块 (siehe [[lesson:lesson-46]]). Auch das Fragepronomen 怎么样 steht so ohne Verb. In bejahten Sätzen über Datum und Uhrzeit darf 是 trotzdem stehen; verneint wird aber mit 不是. Eine echte Gleichsetzung braucht dagegen 是: 他是我的老师, nicht 他我的老师.",
          examples: [
            { cn: "我妹妹很高。", pinyin: "Wǒ mèimei hěn gāo.", de: "Meine jüngere Schwester ist groß." },
            { cn: "明天星期六。", pinyin: "Míngtiān xīngqīliù.", de: "Morgen ist Samstag." },
            { cn: "我爸爸今年五十。", pinyin: "Wǒ bàba jīnnián wǔshí.", de: "Mein Vater ist dieses Jahr fünfzig." },
            { cn: "这个西瓜二十块。", pinyin: "Zhège xīguā èrshí kuài.", de: "Diese Wassermelone kostet zwanzig Yuan." },
            { cn: "你们学校的饭怎么样？", pinyin: "Nǐmen xuéxiào de fàn zěnmeyàng?", de: "Wie ist das Essen an eurer Schule?" }
          ],
          tip: "❌ 她是漂亮 → ✅ 她很漂亮. ❌ 明天不星期六 → ✅ 明天不是星期六."
        },
        {
          heading: "Ort + 是 + Nomen — was genau dort ist",
          text: "Steht ein Ort am Satzanfang, sagt <strong>Ort + 是 + Nomen</strong>, <em>was</em> sich an dieser Stelle befindet. Die sprechende Person setzt voraus, dass dort etwas ist, und benennt es – oft ist es das Einzige dort oder füllt den Platz aus. Der Ort steht ohne 在 am Anfang, meist mit einem Richtungswort wie 旁边 oder 上. Ganz anders 有: 银行旁边有一个超市 sagt nur, dass es dort (unter anderem) einen Supermarkt gibt. Geht es um den Ort eines bekannten Dings, heißt es Ding + 在 + Ort: 我的书在桌子上 (siehe [[lesson:lesson-24]]).",
          examples: [
            { cn: "银行旁边是一个大超市。", pinyin: "Yínháng pángbiān shì yí ge dà chāoshì.", de: "Neben der Bank ist ein großer Supermarkt." },
            { cn: "门口是我的车。", pinyin: "Ménkǒu shì wǒ de chē.", de: "Vor der Tür steht mein Auto." },
            { cn: "桌子上都是书。", pinyin: "Zhuōzi shang dōu shì shū.", de: "Auf dem Tisch liegen lauter Bücher." },
            { cn: "我家旁边有一个饭馆。", pinyin: "Wǒ jiā pángbiān yǒu yí ge fànguǎn.", de: "Neben unserem Haus gibt es ein Restaurant. (有: es gibt dort eins)" },
            { cn: "我家旁边是一个饭馆。", pinyin: "Wǒ jiā pángbiān shì yí ge fànguǎn.", de: "Neben unserem Haus ist ein Restaurant. (是: das ist es, was dort ist)" }
          ],
          tip: "Merkhilfe: <strong>有</strong> = „dort gibt es …“, <strong>是</strong> = „dort ist …“ (benennt es), <strong>在</strong> = „X befindet sich dort“. Verneint wird mit 不是: 我家旁边不是学校."
        },
        {
          heading: "是 für Merkmale: 她是长头发",
          text: "是 kann auch ein <strong>Merkmal nennen oder etwas erklären</strong>, ohne A und B gleichzusetzen. Wörtlich wirkt das unlogisch – „sie ist lange Haare“ –, gesprochen ist es aber sehr häufig. Das Merkmal ist oft ein Nomen mit Adjektiv (长头发, 大眼睛) oder eine 的-Phrase (红色的). Beim Bestellen heißt 我是咖啡 „Ich nehme Kaffee“. Im Deutschen übersetzt du meist mit „haben“, „nehmen“ oder einem Adjektiv. Verneint wird auch hier mit 不是.",
          examples: [
            { cn: "我们老师是长头发，大眼睛。", pinyin: "Wǒmen lǎoshī shì cháng tóufa, dà yǎnjing.", de: "Unsere Lehrkraft hat lange Haare und große Augen." },
            { cn: "我是咖啡，他是茶。", pinyin: "Wǒ shì kāfēi, tā shì chá.", de: "Ich nehme Kaffee, er Tee." },
            { cn: "我的自行车是白色的。", pinyin: "Wǒ de zìxíngchē shì báisè de.", de: "Mein Fahrrad ist weiß." },
            { cn: "这个房间是两张床。", pinyin: "Zhège fángjiān shì liǎng zhāng chuáng.", de: "Dieses Zimmer hat zwei Betten." }
          ],
          tip: "Nicht verwechseln mit 是……的, das bei einer vergangenen Handlung Zeit, Ort oder Art betont: 我是坐飞机来的 „Ich bin mit dem Flugzeug gekommen“."
        },
        {
          heading: "Aussagesätze und Sätze ohne Subjekt: 下雨了",
          text: "Ein <strong>Aussagesatz</strong> teilt etwas mit, endet mit 。 und wird mit fallender Satzmelodie gesprochen. Er ist bejaht oder verneint: 不 für Gegenwart, Zukunft und Gewohnheiten, 没 für Geschehenes und Besitz. Die Wortstellung ist dieselbe wie in der Frage; erst 吗 oder ein Fragewort macht eine Frage daraus. Manche Sätze haben <strong>gar kein Subjekt</strong> und sind trotzdem vollständig: Wetter (下雨了), Ankündigungen (吃饭了), Bitten (请进) und Ausrufe (太好了). Das deutsche „es“ hat dabei keine Entsprechung.",
          examples: [
            { cn: "我爸爸不是北京人。", pinyin: "Wǒ bàba bú shì Běijīng rén.", de: "Mein Vater ist nicht aus Peking." },
            { cn: "他昨天没来上课。", pinyin: "Tā zuótiān méi lái shàngkè.", de: "Er ist gestern nicht zum Unterricht gekommen." },
            { cn: "下雨了，我们回家吧。", pinyin: "Xià yǔ le, wǒmen huí jiā ba.", de: "Es regnet, lass uns nach Hause gehen." },
            { cn: "吃饭了！", pinyin: "Chīfàn le!", de: "Essen ist fertig!" },
            { cn: "太好了！", pinyin: "Tài hǎo le!", de: "Super!" }
          ],
          tip: "❌ 它下雨了 → ✅ 下雨了. Für das deutsche „es“ in „es regnet“ setzt du nichts ein."
        }
      ]
    },
    // ── Fragen ohne 吗, Bitten und Vorschläge (lesson-48) ──────────
    {
      id: 'lesson-48',
      number: 5.5,
      title: "Fragen ohne 吗, Bitten und Vorschläge",
      subtitle: "去不去？, 请, 别, 吧, 怎么样 und Partikeln am Satzende",
      level: 'HSK1/HSK2',
      grammarIds: ["g:疑问句：正反问句","g:祈使句","g:吧¹","g:怎么样","g:祈使句：用“别”的祈使句","g:别","g:语气助词@HSK2"],
      intro: "Im Alltag fragst du nicht nur, du bittest, schlägst vor und verbietest. Für Ja/Nein-Fragen kennst du schon 吗 ([[lesson:lesson-22]]) – es gibt aber eine zweite, sehr häufige Form: Du stellst die <strong>bejahte und die verneinte Form</strong> nebeneinander: 你去不去？ „Gehst du (oder nicht)?“. Aufforderungen sind im Chinesischen einfach: Das Verb bleibt unverändert, eine Imperativform wie im Deutschen gibt es nicht. Ob eine Bitte höflich, freundlich oder streng klingt, entscheiden kleine Wörter: <strong>请</strong> „bitte“, <strong>吧</strong> für Vorschläge, <strong>别</strong> für „tu das nicht“ und <strong>怎么样</strong> für „wie wäre es?“. Zum Schluss lernst du einige Partikeln am Satzende, die deinen Sätzen einen natürlichen Ton geben.",
      sections: [
        {
          heading: "Ja/Nein-Fragen ohne 吗: 去不去？",
          text: "Statt 吗 anzuhängen, stellst du die <strong>bejahte und die verneinte Form</strong> eines Verbs oder Adjektivs nebeneinander: 来不来, 忙不忙. Das 不 in der Mitte wird meist unbetont gesprochen. Bei 有 heißt es <strong>有没有</strong>, bei 是 <strong>是不是</strong>. Bei zweisilbigen Wörtern wird oft nur die erste Silbe wiederholt: 喜不喜欢. Ein Objekt steht meist am Ende. Am Satzende steht <strong>kein 吗</strong>, und vor dem Prädikat stehen keine Gradwörter wie 很. Die Antwort wiederholt die passende Form: 来 oder 不来.",
          examples: [
            { cn: "你今天晚上来不来？", pinyin: "Nǐ jīntiān wǎnshang lái bu lái?", de: "Kommst du heute Abend?" },
            { cn: "你喜不喜欢喝咖啡？", pinyin: "Nǐ xǐ bu xǐhuan hē kāfēi?", de: "Trinkst du gern Kaffee?" },
            { cn: "这儿有没有洗手间？", pinyin: "Zhèr yǒu méiyǒu xǐshǒujiān?", de: "Gibt es hier eine Toilette?" },
            { cn: "❌ 你很忙不忙？", pinyin: "", de: "Falsch: kein 很 in der Frage aus bejahter und verneinter Form." },
            { cn: "✅ 你忙不忙？", pinyin: "Nǐ máng bu máng?", de: "Hast du viel zu tun?" }
          ],
          tip: "❌ 你去不去吗？ → ✅ 你去不去？ oder 你去吗？ – nie beides zusammen. Und 有 bildet die Frage mit 没: 有没有, nicht 有不有."
        },
        {
          heading: "Aufforderungen: 请, 快 und 不要",
          text: "Ein Aufforderungssatz bittet, schlägt vor oder verbietet. Das Subjekt 你 oder 你们 kann stehen oder fehlen, das Verb bleibt unverändert. <strong>请</strong> (qǐng) am Anfang macht die Bitte höflich: 请坐. <strong>快</strong> (kuài) vor dem Verb treibt zur Eile an: 快来. Ein Verbot bildest du mit <strong>不要</strong> (búyào) vor dem Verb: 不要说话 „nicht reden!“. Ohne 请 klingt eine Aufforderung schnell direkt; der Tonfall macht viel aus.",
          examples: [
            { cn: "请你们明天八点来。", pinyin: "Qǐng nǐmen míngtiān bā diǎn lái.", de: "Bitte kommt morgen um acht Uhr." },
            { cn: "快起床！", pinyin: "Kuài qǐchuáng!", de: "Steh schnell auf!" },
            { cn: "你等一下。", pinyin: "Nǐ děng yíxià.", de: "Warte kurz." },
            { cn: "上课的时候不要说话。", pinyin: "Shàngkè de shíhou búyào shuōhuà.", de: "Im Unterricht bitte nicht reden." }
          ],
          tip: "Das deutsche „Setzen Sie sich!“ / „Setz dich!“ unterscheidet Höflichkeitsformen am Verb. Im Chinesischen bleibt das Verb gleich – höflich wird es durch 请 oder durch 您 statt 你: 您请坐."
        },
        {
          heading: "Tu das nicht: 别 + Verb",
          text: "<strong>别</strong> (bié) vor dem Verb heißt „tu nicht …“. Es bedeutet dasselbe wie 不要, ist aber kürzer und besonders gesprochen üblich. Mit <strong>了</strong> am Ende soll jemand mit etwas aufhören, das gerade läuft oder schon geplant ist: 别看了 „hör auf zu schauen“. Häufig ist 别 mit Gefühlen: 别着急 „keine Eile“, 别担心 „keine Sorge“; 别客气 heißt „keine Ursache“. Mit 我们 schließt sich die sprechende Person ein: 我们别去了 „lass uns nicht hingehen“. Höflicher wird es mit 请: 请别…. In Aussagen über Tatsachen verneint man dagegen mit 不 oder 没, nicht mit 别.",
          examples: [
            { cn: "你别着急，我们还有时间。", pinyin: "Nǐ bié zháojí, wǒmen hái yǒu shíjiān.", de: "Keine Eile, wir haben noch Zeit." },
            { cn: "别看手机了，快吃饭吧。", pinyin: "Bié kàn shǒujī le, kuài chīfàn ba.", de: "Leg das Handy weg und iss endlich." },
            { cn: "请别在图书馆里打电话。", pinyin: "Qǐng bié zài túshūguǎn li dǎ diànhuà.", de: "Bitte in der Bibliothek nicht telefonieren." },
            { cn: "❌ 我明天别去。", pinyin: "", de: "Falsch: 别 steht nur in Aufforderungen; eine Aussage verneinst du mit 不." },
            { cn: "✅ 我明天不去。", pinyin: "Wǒ míngtiān bú qù.", de: "Ich gehe morgen nicht hin." }
          ],
          tip: "Achtung: In 别人 „andere Leute“ und 别的 „andere(s)“ bedeutet 别 „ander-“ und ist keine Verneinung."
        },
        {
          heading: "Vorschläge: 吧 und 怎么样",
          text: "<strong>吧</strong> (ba) am Satzende macht aus einer Aussage einen Vorschlag oder eine freundliche Aufforderung. Mit 我们 heißt es „lass uns …“: 我们走吧. Mit 你 klingt eine Bitte weicher: 你先休息吧 „ruh dich doch erst mal aus“. 好吧 drückt Zustimmung aus: „na gut“. <strong>怎么样</strong> (zěnmeyàng) nach einem Vorschlag heißt „wie wäre es?“; am Satzende fragt es nach einer Bewertung: 这件衣服怎么样？ „Wie findest du …?“. Typische Antworten sind 好啊, 不错 oder 不怎么样 „nicht besonders“.",
          examples: [
            { cn: "我们一起去吃饭吧！", pinyin: "Wǒmen yìqǐ qù chīfàn ba!", de: "Lass uns zusammen essen gehen!" },
            { cn: "你先休息吧。", pinyin: "Nǐ xiān xiūxi ba.", de: "Ruh dich doch erst mal aus." },
            { cn: "我们晚上吃中国菜，怎么样？", pinyin: "Wǒmen wǎnshang chī Zhōngguó cài, zěnmeyàng?", de: "Wie wäre es, wenn wir heute Abend chinesisch essen?" },
            { cn: "你觉得这件衣服怎么样？", pinyin: "Nǐ juéde zhè jiàn yīfu zěnmeyàng?", de: "Wie findest du dieses Kleidungsstück?" },
            { cn: "好吧，我们明天再去。", pinyin: "Hǎo ba, wǒmen míngtiān zài qù.", de: "Na gut, dann gehen wir morgen." }
          ],
          tip: "❌ 这个菜怎么？ → ✅ 这个菜怎么样？ 怎么 allein fragt nach dem Wie einer Handlung (怎么去？), nicht nach einer Bewertung."
        },
        {
          heading: "Partikeln am Satzende: 吧, 呢, 的, 啊",
          text: "Einige Partikeln geben einem Satz eine Färbung. Alle werden im neutralen Ton gesprochen und sind typisch für die gesprochene Sprache. <strong>吧</strong> drückt auch eine Vermutung aus, die das Gegenüber bestätigen soll: „…, oder?“ – anders als das neutrale 吗. <strong>呢</strong> in einer Aussage bekräftigt, oft mit 还: 还早呢 „es ist doch noch früh“. <strong>的</strong> am Ende zeigt Gewissheit oder eine Zusage: 他会来的 „er kommt bestimmt“. <strong>啊</strong> steht in Ausrufen und Aufforderungen und macht Fragen weicher; nach manchen Silben klingt es wie ya oder wa.",
          examples: [
            { cn: "你是第一次来中国吧？", pinyin: "Nǐ shì dìyī cì lái Zhōngguó ba?", de: "Du bist zum ersten Mal in China, oder?" },
            { cn: "别着急，时间还早呢。", pinyin: "Bié zháojí, shíjiān hái zǎo ne.", de: "Keine Eile, es ist doch noch früh." },
            { cn: "别担心，我会告诉你的。", pinyin: "Bié dānxīn, wǒ huì gàosu nǐ de.", de: "Keine Sorge, ich sage es dir bestimmt." },
            { cn: "这儿的菜真好吃啊！", pinyin: "Zhèr de cài zhēn hǎochī a!", de: "Das Essen hier ist wirklich lecker!" },
            { cn: "快来啊！", pinyin: "Kuài lái a!", de: "Komm doch schnell!" }
          ],
          tip: "你是学生吗？ fragt offen. 你是学生吧？ vermutet schon: „Du bist doch Student/Studentin, oder?“. Mit 吧 klingt die Frage also weniger neutral."
        }
      ]
    },
    // ── Verbketten, zwei Objekte, 请/让/叫 (lesson-49) ──────────
    {
      id: 'lesson-49',
      number: 12.5,
      title: "Verbketten, zwei Objekte, 请/让/叫",
      subtitle: "连动句, 双宾语句, 兼语句 — Sätze mit mehreren Verben ordnen",
      level: 'HSK1/HSK2',
      grammarIds: ["g:连动句1：前后动作先后发生，后一动作是前一动作的目的","g:连动句1：前一动作是后一动作的方式","g:主语+动词+宾语1+宾语2","g:主语+动词+给+宾语1+宾语2","g:表使令：主语+请/叫/让……+宾语1+动词+宾语2","g:其他结构类型：连谓短语","g:其他结构类型：兼语短语"],
      intro: "Im Deutschen verbindest du Handlungen mit kleinen Hilfswörtern: „Ich fahre <em>mit dem</em> Zug nach Peking, <em>um</em> Freunde <em>zu</em> besuchen“, „Ich gebe <em>dir</em> ein Buch“, „Mama sagt, <em>dass</em> ich lernen soll“. Das Chinesische braucht dafür keine Bindewörter, keine Präposition für „mit“ und keinen Dativ – es reiht Verben und Objekte einfach in einer festen Reihenfolge auf. In dieser Lektion lernst du vier Bauweisen: <strong>Verbreihen</strong> für Zweck (去北京旅游) und Mittel (坐飞机去), Sätze mit <strong>zwei Objekten</strong> (给他一本书), Übergabeverben mit <strong>给</strong> (送给你) und <strong>Pivotsätze</strong> mit 请/叫/让 (老师让我们读课文). Die Grundregel ist überall dieselbe: Die Reihenfolge ist fest und lässt sich nicht beliebig umstellen – bei Verbreihen folgt sie dem Ablauf der Handlungen.",
      sections: [
        {
          heading: "去/来 + Ort + Handlung — hingehen, um etwas zu tun",
          text: "Zwei Verbgruppen stehen ohne Bindewort hintereinander. Die erste nennt die Bewegung – meist <strong>去 (qù)</strong> oder <strong>来 (lái)</strong> mit einem Ziel –, die zweite den Zweck: <strong>Subjekt + 去/来 + Ort + Verb (+ Objekt)</strong>. Ein Wort für „um zu“ brauchst du nicht; die Reihenfolge entspricht dem Ablauf: erst hingehen, dann etwas tun. Auch 回家 (huí jiā) funktioniert so. Verneinung und Adverbien stehen vor dem ersten Verb: 不去饭馆吃饭.",
          examples: [
            { cn: "我们去图书馆看书吧。", pinyin: "Wǒmen qù túshūguǎn kàn shū ba.", de: "Lass uns in die Bibliothek gehen und lesen." },
            { cn: "我姐姐明年来中国工作。", pinyin: "Wǒ jiějie míngnián lái Zhōngguó gōngzuò.", de: "Meine Schwester kommt nächstes Jahr nach China, um hier zu arbeiten." },
            { cn: "下午我去银行换钱。", pinyin: "Xiàwǔ wǒ qù yínháng huàn qián.", de: "Heute Nachmittag gehe ich zur Bank, um Geld zu wechseln." },
            { cn: "他中午回家吃饭。", pinyin: "Tā zhōngwǔ huí jiā chīfàn.", de: "Mittags geht er zum Essen nach Hause." },
            { cn: "今天我们不去饭馆吃饭了。", pinyin: "Jīntiān wǒmen bú qù fànguǎn chīfàn le.", de: "Heute gehen wir doch nicht ins Restaurant essen." }
          ],
          tip: "了 setzt du meist hinter das zweite Verb oder ans Satzende, nicht hinter 去: 他去超市买了一些水果 oder 他去超市买水果了 – „Er ist in den Supermarkt gegangen und hat Obst gekauft.“"
        },
        {
          heading: "坐/骑/用 + Mittel + Handlung — Verbreihen (连谓短语)",
          text: "Beim zweiten Typ nennt das <strong>erste</strong> Verb das Mittel oder die Art und Weise: 坐 (zuò) für Bus, Zug und Flugzeug, 骑 (qí) für das Fahrrad, 开车 (kāichē) „mit dem Auto“, 用 (yòng) „benutzen“. Das deutsche „mit“ wird also durch ein Verb ausgedrückt. Beide Typen – Zweck wie Mittel – sind Verbreihen mit demselben Subjekt, chinesisch 连谓短语 (liánwèi duǎnyǔ). Dazu gehört auch <strong>有/没有 + Nomen + Verb</strong>: 没有钱买 „kein Geld haben, um etwas zu kaufen“.",
          examples: [
            { cn: "我们坐火车去上海吧。", pinyin: "Wǒmen zuò huǒchē qù Shànghǎi ba.", de: "Lass uns mit dem Zug nach Shanghai fahren." },
            { cn: "我每天骑自行车上学。", pinyin: "Wǒ měi tiān qí zìxíngchē shàngxué.", de: "Ich fahre jeden Tag mit dem Fahrrad zur Schule." },
            { cn: "你可以用手机买票。", pinyin: "Nǐ kěyǐ yòng shǒujī mǎi piào.", de: "Du kannst die Fahrkarte mit dem Handy kaufen." },
            { cn: "他不开车上班，他坐地铁。", pinyin: "Tā bù kāichē shàngbān, tā zuò dìtiě.", de: "Er fährt nicht mit dem Auto zur Arbeit, sondern mit der U-Bahn." },
            { cn: "我没有钱买新手机。", pinyin: "Wǒ méiyǒu qián mǎi xīn shǒujī.", de: "Ich habe kein Geld für ein neues Handy." }
          ],
          tip: "❌ 我和飞机去北京。 → ✅ 我坐飞机去北京。 和 (hé) heißt „und“ oder „zusammen mit (Personen)“, nicht „mittels“."
        },
        {
          heading: "Zwei Objekte: 教我们数学, 给我一百块钱",
          text: "Einige Verben nehmen zwei Objekte ohne Präposition: <strong>Subjekt + Verb + Person + Sache</strong>. Zu Beginn sind das vor allem 给 (gěi) „geben“, 教 (jiāo) „unterrichten“, 问 (wèn) „fragen“ und 告诉 (gàosu) „mitteilen“. Einen Dativ gibt es nicht – die Person steht direkt nach dem Verb, danach die Sache, oft mit Mengenangabe (一本书, 一个问题). Viele Verben erlauben das nicht: Bei 买 oder 做 kommt 给 + Person vor das Verb (我给妈妈买了一件衣服), siehe [[lesson:lesson-34]].",
          examples: [
            { cn: "老师教我们数学。", pinyin: "Lǎoshī jiāo wǒmen shùxué.", de: "Die Lehrkraft unterrichtet uns in Mathe." },
            { cn: "妈妈给了我一百块钱。", pinyin: "Māma gěi le wǒ yìbǎi kuài qián.", de: "Mama hat mir hundert Yuan gegeben." },
            { cn: "她告诉我一个好办法。", pinyin: "Tā gàosu wǒ yí ge hǎo bànfǎ.", de: "Sie hat mir einen guten Tipp gegeben." },
            { cn: "孩子问了爸爸很多问题。", pinyin: "Háizi wèn le bàba hěn duō wèntí.", de: "Das Kind hat Papa viele Fragen gestellt." }
          ],
          tip: "❌ 老师教汉语我们。 → ✅ 老师教我们汉语。 Erst die Person, dann die Sache. 说 nimmt keine zwei Objekte: „Er hat mir etwas gesagt“ heißt 他对我说…… oder 他跟我说……"
        },
        {
          heading: "Verb + 给 + Person + Sache: 送给, 借给, 还给",
          text: "Bei Verben der Übergabe führt 给 direkt nach dem Verb den Empfänger ein: <strong>Subjekt + Verb + 给 + Person + Sache</strong>. Typisch sind 送给 „schenken“, 借给 „leihen“, 还给 „zurückgeben“ und 卖给 „verkaufen an“. 了 steht meist nach 给: 借给了我. Bei 借 entscheidet 给 die Richtung: 借给我 heißt „mir leihen“, 跟我借 dagegen „sich von mir leihen“. Manche Verben wie 送 oder 教 gehen auch ohne 给, 卖 braucht es meist.",
          examples: [
            { cn: "我想送给妈妈一件新衣服。", pinyin: "Wǒ xiǎng sònggěi māma yí jiàn xīn yīfu.", de: "Ich möchte Mama ein neues Kleidungsstück schenken." },
            { cn: "姐姐借给了我两本书。", pinyin: "Jiějie jiègěi le wǒ liǎng běn shū.", de: "Meine Schwester hat mir zwei Bücher geliehen." },
            { cn: "他卖给我一辆旧自行车。", pinyin: "Tā màigěi wǒ yí liàng jiù zìxíngchē.", de: "Er hat mir ein altes Fahrrad verkauft." },
            { cn: "明天我还给你一百块钱。", pinyin: "Míngtiān wǒ huángěi nǐ yìbǎi kuài qián.", de: "Morgen gebe ich dir die hundert Yuan zurück." },
            { cn: "我可以跟你借一本词典吗？", pinyin: "Wǒ kěyǐ gēn nǐ jiè yì běn cídiǎn ma?", de: "Kann ich mir ein Wörterbuch von dir leihen?" }
          ],
          tip: "Nicht verwechseln mit 给 <em>vor</em> dem Verb: 我给他打电话 „Ich rufe ihn an“ – dort ist 给 eine Präposition ([[lesson:lesson-34]]). Mit 把 kannst du die Sache voranstellen: 把书还给我 ([[lesson:lesson-4]])."
        },
        {
          heading: "请/叫/让 + Person + Verb — bitten, auffordern, lassen",
          text: "Bei 请 (qǐng), 叫 (jiào) und 让 (ràng) ist die Person zugleich Objekt des ersten und Subjekt des zweiten Verbs (兼语短语, „Pivot“): In 老师让我们读课文 werden „wir“ aufgefordert, und „wir“ lesen. Ein „dass“ oder „zu“ gibt es nicht. 请 ist höflich: „bitten, einladen“. 叫 und 让 heißen „sagen, dass jemand etwas tun soll“ oder „lassen, erlauben“; 叫 klingt umgangssprachlicher. Die Verneinung steht vor 让/叫: 不让我去.",
          examples: [
            { cn: "老师让我们读课文。", pinyin: "Lǎoshī ràng wǒmen dú kèwén.", de: "Die Lehrkraft lässt uns den Lektionstext lesen." },
            { cn: "今天我请你喝咖啡吧。", pinyin: "Jīntiān wǒ qǐng nǐ hē kāfēi ba.", de: "Heute lade ich dich auf einen Kaffee ein." },
            { cn: "妈妈叫我去超市买牛奶。", pinyin: "Māma jiào wǒ qù chāoshì mǎi niúnǎi.", de: "Mama hat gesagt, ich soll in den Supermarkt gehen und Milch kaufen." },
            { cn: "爸爸不让弟弟玩手机。", pinyin: "Bàba bú ràng dìdi wán shǒujī.", de: "Papa lässt den kleinen Bruder nicht am Handy spielen." },
            { cn: "他请我们去他家吃饭了。", pinyin: "Tā qǐng wǒmen qù tā jiā chīfàn le.", de: "Er hat uns zum Essen zu sich nach Hause eingeladen." }
          ],
          tip: "Pivot oder zwei Objekte? Folgt nach der Person ein <strong>Verb</strong> (让我去), ist es ein Pivotsatz; folgt eine <strong>Sache</strong> (给我一本书), hat das Verb zwei Objekte. 了 steht nicht direkt hinter 请/叫/让, sondern nach dem zweiten Verb oder am Satzende: 他请我们吃饭了."
        }
      ]
    },
    // ── 离合词 — Trennbare Verben (lesson-50) ──────────
    {
      id: 'lesson-50',
      number: 12.6,
      title: "离合词 — Trennbare Verben",
      subtitle: "睡觉, 见面, 帮忙: wohin 了, 过 und die Dauer gehören",
      level: 'HSK1/HSK2',
      grammarIds: ["g:离合词@HSK1","g:离合词@HSK2","g:离合词@HSK3","g:离合词@HSK3（离合词）","g:基本结构类型：动宾短语"],
      intro: "Viele Alltagsverben sind im Chinesischen eigentlich eine kleine <strong>Verb-Objekt-Gruppe</strong>: 睡觉 (shuìjiào) heißt wörtlich „Schlaf schlafen“, 见面 (jiànmiàn) „das Gesicht sehen“, 上课 (shàngkè) „zum Unterricht gehen“. Solche Verben heißen <strong>离合词 (líhécí)</strong>, „trennbare Verben“. Sie wirken wie ein Wort, lassen sich aber auseinandernehmen: 了, 过, eine Dauer oder ein Zählwort treten zwischen die Teile – 睡了八个小时的觉. Und weil der Objektplatz schon besetzt ist, kann kein zweites Objekt dahinter stehen: nicht 见面他, sondern 跟他见面. Auch das Deutsche kennt trennbare Verben (aufstehen → ich stehe auf), doch die Regeln sind ganz andere. Hier lernst du die wichtigsten 离合词, wo die Zusätze hingehören und welche Fehler typisch sind.",
      sections: [
        {
          heading: "Verb + Objekt in einem Wort: 睡觉, 上课, 下班",
          text: "Eine Verb-Objekt-Gruppe (动宾短语, dòngbīn duǎnyǔ) besteht aus einem Verb und seinem Objekt, das Objekt steht nach dem Verb: 吃饭, 看书, 去北京. Bei den 离合词 ist diese Gruppe zu einem festen Wort geworden. Die wichtigsten zum Anfang: 睡觉 „schlafen“, 说话 „sprechen“, 上课 / 下课 „Unterricht haben / der Unterricht ist aus“, 上班 / 下班 „zur Arbeit gehen / Feierabend haben“, 生病 „krank werden“, 看病 „zum Arzt gehen“. Im einfachen Satz benutzt du sie wie normale Verben.",
          examples: [
            { cn: "我晚上十一点睡觉。", pinyin: "Wǒ wǎnshang shíyī diǎn shuìjiào.", de: "Ich gehe abends um elf Uhr schlafen." },
            { cn: "你几点下班？", pinyin: "Nǐ jǐ diǎn xiàbān?", de: "Um wie viel Uhr hast du Feierabend?" },
            { cn: "你别说话了，孩子在睡觉。", pinyin: "Nǐ bié shuōhuà le, háizi zài shuìjiào.", de: "Sei still, das Kind schläft." },
            { cn: "他生病了，今天不上班。", pinyin: "Tā shēngbìng le, jīntiān bú shàngbān.", de: "Er ist krank und geht heute nicht zur Arbeit." }
          ],
          tip: "Mit einer Dauer reicht oft der Verbteil allein: 我睡了八个小时 „Ich habe acht Stunden geschlafen“."
        },
        {
          heading: "了, 过 und Dauer in der Mitte: 睡了八个小时的觉",
          text: "Willst du sagen, wie lange oder wie oft etwas geschah, kommt die Angabe zwischen Verb und Objekt: <strong>Verb + 了/过 + Dauer/Häufigkeit (+ 的) + Objekt</strong>. Auch 了 allein kann in die Mitte treten, etwa 下了班 „nach Feierabend“. Steht 了 dagegen am Satzende für eine eingetretene Situation, folgt es dem ganzen Wort: 他睡觉了. Statt zu trennen, kannst du auch das Verb wiederholen: 睡觉睡了八个小时. Mehr zu 了 in [[lesson:lesson-1]].",
          examples: [
            { cn: "昨天我只睡了六个小时的觉。", pinyin: "Zuótiān wǒ zhǐ shuì le liù ge xiǎoshí de jiào.", de: "Gestern habe ich nur sechs Stunden geschlafen." },
            { cn: "今天我上了四个小时的课，有点儿累。", pinyin: "Jīntiān wǒ shàng le sì ge xiǎoshí de kè, yǒudiǎnr lèi.", de: "Ich hatte heute vier Stunden Unterricht und bin ein bisschen müde." },
            { cn: "下了班我们一起去吃饭吧。", pinyin: "Xià le bān wǒmen yìqǐ qù chīfàn ba.", de: "Lass uns nach Feierabend zusammen essen gehen." },
            { cn: "我们以前见过一次面。", pinyin: "Wǒmen yǐqián jiàn guo yí cì miàn.", de: "Wir haben uns früher schon einmal getroffen." },
            { cn: "孩子已经睡觉了。", pinyin: "Háizi yǐjīng shuìjiào le.", de: "Das Kind schläft schon." }
          ],
          tip: "❌ 我睡觉了八个小时。 → ✅ 我睡了八个小时的觉。 Ebenso richtig: 我睡觉睡了八个小时 oder kurz 我睡了八个小时."
        },
        {
          heading: "Kein zweites Objekt: 跟你见面, 帮我的忙",
          text: "Weil das Objekt im Wort schon steckt, kann ein 离合词 kein weiteres Objekt direkt anschließen. Die Person kommt stattdessen mit einer Präposition davor (<strong>跟/和 + Person + 见面</strong>, <strong>给 + Person + 帮忙/看病</strong>) oder als Besitzer in die Mitte (帮我的忙). Bei 帮忙 kannst du auch einfach das Verb 帮 allein nehmen: 帮我 „hilf mir“. Ein Zählwort in der Mitte macht eine Bitte lockerer: 帮个忙.",
          examples: [
            { cn: "❌ 我明天见面你。", pinyin: "", de: "Falsch: 见面 nimmt kein Objekt." },
            { cn: "✅ 我明天跟你见面。", pinyin: "Wǒ míngtiān gēn nǐ jiànmiàn.", de: "Ich treffe mich morgen mit dir." },
            { cn: "你能帮我一个忙吗？", pinyin: "Nǐ néng bāng wǒ yí ge máng ma?", de: "Kannst du mir einen Gefallen tun?" },
            { cn: "谢谢你帮了我这么大的忙！", pinyin: "Xièxie nǐ bāng le wǒ zhème dà de máng!", de: "Danke, dass du mir so sehr geholfen hast!" },
            { cn: "我妈妈是医生，每天给很多人看病。", pinyin: "Wǒ māma shì yīshēng, měi tiān gěi hěn duō rén kànbìng.", de: "Meine Mutter ist Ärztin und behandelt jeden Tag viele Menschen." }
          ],
          tip: "❌ 帮忙你 → ✅ 帮你, 给你帮忙 oder 帮你的忙. Zum Treffen sagst du 跟朋友见面 oder 和朋友见面."
        },
        {
          heading: "Wiederholen und verdoppeln: 跳舞跳得很好, 帮帮忙",
          text: "Folgt ein Komplement mit 得, wiederholst du das Verb: <strong>离合词 + Verb + 得 + Adjektiv</strong> – 她跳舞跳得很好 (zu 得 siehe [[lesson:lesson-8]]). Auch bei einer Dauer ist die Wiederholung häufig: 跑步跑了一个小时. Willst du „mal kurz, ein bisschen“ ausdrücken, verdoppelst du nur den Verbteil: 帮帮忙, 跑跑步, 跳跳舞; die zweite Silbe wird neutral gesprochen (mehr dazu in [[lesson:lesson-51]]).",
          examples: [
            { cn: "她跳舞跳得很好。", pinyin: "Tā tiàowǔ tiào de hěn hǎo.", de: "Sie tanzt sehr gut." },
            { cn: "我每天跑步跑半个小时。", pinyin: "Wǒ měi tiān pǎobù pǎo bàn ge xiǎoshí.", de: "Ich jogge jeden Tag eine halbe Stunde." },
            { cn: "天气太热了，我们去游泳吧！", pinyin: "Tiānqì tài rè le, wǒmen qù yóuyǒng ba!", de: "Es ist so heiß – lass uns schwimmen gehen!" },
            { cn: "周末我常常去公园跑跑步。", pinyin: "Zhōumò wǒ chángcháng qù gōngyuán pǎopao bù.", de: "Am Wochenende gehe ich oft ein bisschen im Park joggen." },
            { cn: "东西太多了，你来帮帮忙吧！", pinyin: "Dōngxi tài duō le, nǐ lái bāngbang máng ba!", de: "Das sind zu viele Sachen – komm und hilf mal mit!" }
          ],
          tip: "❌ 她跳舞得很好。 → ✅ 她跳舞跳得很好。 Verdoppelt wird nur der Verbteil: ❌ 帮忙帮忙 → ✅ 帮帮忙."
        },
        {
          heading: "Ausblick (HSK 3): 放假, 结婚, 洗澡 — und 离开, 完成, 分开",
          text: "Ausblick (HSK 3): Wie 见面 funktionieren auch 放假 „Ferien/frei haben“, 结婚 „heiraten“ (跟他结婚, nicht 结婚他) und 洗澡 „duschen, baden“: Dauer und Zählwort stehen in der Mitte (放了三天假, 洗个澡). Anders gebaut sind 离开 „verlassen“, 完成 „fertigstellen“ und 分开 „trennen“: Sie bestehen aus Verb + Ergebnis, nehmen ein Objekt direkt (离开北京, 完成作业), und 了 steht dahinter (离开了). Getrennt werden sie nur durch 得 oder 不: 完不成 „nicht schaffen“, 完得成 „schaffen können“, 离不开 „nicht ohne … auskommen“.",
          examples: [
            { cn: "你们什么时候放假？", pinyin: "Nǐmen shénme shíhou fàngjià?", de: "Wann habt ihr Ferien?" },
            { cn: "上个月我们放了三天假。", pinyin: "Shàng ge yuè wǒmen fàng le sān tiān jià.", de: "Letzten Monat hatten wir drei Tage frei." },
            { cn: "我回家先洗个澡。", pinyin: "Wǒ huí jiā xiān xǐ ge zǎo.", de: "Wenn ich nach Hause komme, dusche ich erst mal." },
            { cn: "他下个月就要离开中国了。", pinyin: "Tā xià ge yuè jiù yào líkāi Zhōngguó le.", de: "Er verlässt China schon nächsten Monat." },
            { cn: "工作太多了，我今天完不成。", pinyin: "Gōngzuò tài duō le, wǒ jīntiān wán bu chéng.", de: "Es ist zu viel Arbeit – das schaffe ich heute nicht." }
          ],
          tip: "❌ 他离了开北京。 → ✅ 他离开了北京。 Bei 离开, 完成 und 分开 kommt 了 hinter das ganze Wort – anders als bei 睡觉 oder 见面."
        }
      ]
    },
    // ── Verdopplung: 看看, 试一试, 高高兴兴 (lesson-51) ──────────
    {
      id: 'lesson-51',
      number: 20.5,
      title: "Verdopplung: 看看, 试一试, 高高兴兴",
      subtitle: "Verben, Adjektive und Zählwörter doppelt",
      level: 'HSK2',
      grammarIds: ["g:AA、A一A、A了A、ABAB","g:AA、AABB","g:个个、张张","g:数量重叠：数词+量词+数词+量词"],
      intro: "Im Chinesischen kannst du Wörter verdoppeln – und je nach Wortart bekommt die Verdopplung eine andere Bedeutung. Ein <strong>verdoppeltes Verb</strong> heißt „mal kurz, ein bisschen“ und macht Bitten weicher: 看看 „schau mal“, 试一试 „probier mal“. Ein <strong>verdoppeltes Adjektiv</strong> malt dagegen lebhaft aus: 高高兴兴 „richtig fröhlich“, 干干净净 „blitzsauber“. Ein <strong>verdoppeltes Zählwort</strong> bedeutet „jeder einzelne“ (个个), eine verdoppelte Mengenangabe „einer nach dem anderen“ (一个一个). Im Deutschen gibt es dafür keine eigene Form; du übersetzt mit „mal“, „ganz“, „jeder“ oder „Stück für Stück“. Achte vor allem auf die Bauweise: Zweisilbige Verben werden ABAB verdoppelt (休息休息), zweisilbige Adjektive AABB (高高兴兴).",
      sections: [
        {
          heading: "Verben: AA und A一A — mal kurz",
          text: "Ein verdoppeltes Verb drückt aus, dass man etwas kurz, ein bisschen oder versuchsweise tut. Es macht Bitten und Vorschläge weicher und klingt locker. Einsilbige Verben haben zwei gleichbedeutende Formen: <strong>AA</strong> (看看 kànkan) und <strong>A一A</strong> (看一看 kàn yi kàn); die zweite Silbe bzw. 一 wird neutral gesprochen. Verdoppelt werden nur Handlungen, die man bewusst tut – nicht 是, 有, 在, 喜欢 oder 知道.",
          examples: [
            { cn: "这件衣服很好看，你试试吧。", pinyin: "Zhè jiàn yīfu hěn hǎokàn, nǐ shìshi ba.", de: "Das Kleidungsstück ist hübsch – probier es doch mal an." },
            { cn: "你尝一尝，这个菜很好吃。", pinyin: "Nǐ cháng yi cháng, zhège cài hěn hǎochī.", de: "Probier mal, dieses Gericht schmeckt sehr gut." },
            { cn: "我可以看看你的照片吗？", pinyin: "Wǒ kěyǐ kànkan nǐ de zhàopiàn ma?", de: "Darf ich mir mal deine Fotos ansehen?" },
            { cn: "等等我，我马上就来！", pinyin: "Děngdeng wǒ, wǒ mǎshàng jiù lái!", de: "Warte mal auf mich, ich komme gleich!" },
            { cn: "晚饭以后我们出去走走吧。", pinyin: "Wǎnfàn yǐhòu wǒmen chūqu zǒuzou ba.", de: "Lass uns nach dem Abendessen ein bisschen spazieren gehen." }
          ],
          tip: "Ähnlich weich wirkt 一下 nach dem Verb: 看一下 ≈ 看看. ❌ 我知道知道。 – Zustände und Gefühle (知道, 喜欢, 有) verdoppelt man nicht."
        },
        {
          heading: "A了A und ABAB: 想了想, 休息休息",
          text: "Für eine kurze Handlung, die schon geschehen ist, steht <strong>A了A</strong>: 他想了想 „er überlegte kurz“. Das ist typisch in Erzählungen, oft folgt gleich die nächste Handlung. Zweisilbige Verben werden als Ganzes verdoppelt, also <strong>ABAB</strong>: 休息休息, 介绍介绍, 复习复习 – nicht AABB, das ist die Form der Adjektive. Bei trennbaren Verben verdoppelt man nur den Verbteil: 散散步, 帮帮忙 (siehe [[lesson:lesson-50]]).",
          examples: [
            { cn: "他想了想，没有回答。", pinyin: "Tā xiǎng le xiǎng, méiyǒu huídá.", de: "Er überlegte kurz und antwortete nicht." },
            { cn: "她看了看手机，已经十二点了。", pinyin: "Tā kàn le kàn shǒujī, yǐjīng shí'èr diǎn le.", de: "Sie warf einen kurzen Blick aufs Handy – es war schon zwölf Uhr." },
            { cn: "你给大家介绍介绍你的国家吧。", pinyin: "Nǐ gěi dàjiā jièshào jièshào nǐ de guójiā ba.", de: "Erzähl uns doch mal ein bisschen von deinem Land." },
            { cn: "明天考试，我们今天晚上复习复习吧。", pinyin: "Míngtiān kǎoshì, wǒmen jīntiān wǎnshang fùxí fùxí ba.", de: "Morgen ist die Prüfung – lass uns heute Abend noch ein bisschen wiederholen." },
            { cn: "周末我想在家打扫打扫房间。", pinyin: "Zhōumò wǒ xiǎng zài jiā dǎsǎo dǎsǎo fángjiān.", de: "Am Wochenende will ich mein Zimmer ein bisschen sauber machen." }
          ],
          tip: "❌ 我们休休息息吧。 → ✅ 我们休息休息吧。 Nach einem verdoppelten Verb steht auch kein Ergebnis- oder Zählwortkomplement: nicht 看看完, sondern 看完."
        },
        {
          heading: "Adjektive: AA und AABB — 小小的, 干干净净",
          text: "Verdoppelte Adjektive beschreiben anschaulich und gefühlsbetont: „schön klein“, „ganz langsam“, „blitzsauber“. Einsilbige werden zu <strong>AA</strong>, zweisilbige zu <strong>AABB</strong>: 干净 → 干干净净, 清楚 → 清清楚楚. Als Attribut und Prädikat stehen sie mit 的 (干干净净的), vor einem Verb meist mit 地 (高高兴兴地回家); AA kann vor einem Verb auch ohne 地 stehen: 慢慢说. Häufig sind sie auch als Komplement nach 得: 说得清清楚楚. Weil die Verdopplung schon einen Grad ausdrückt, steht davor weder 很 noch 非常 noch eine Verneinung. Nicht jedes Adjektiv lässt sich verdoppeln. Zu 的 und 地 siehe [[lesson:lesson-2]].",
          examples: [
            { cn: "这是一个小小的礼物，希望你喜欢。", pinyin: "Zhè shì yí ge xiǎoxiǎo de lǐwù, xīwàng nǐ xǐhuan.", de: "Das ist ein kleines Geschenk, ich hoffe, es gefällt dir." },
            { cn: "你慢慢走，我们明天见！", pinyin: "Nǐ mànmàn zǒu, wǒmen míngtiān jiàn!", de: "Komm gut nach Hause, bis morgen!" },
            { cn: "他的房间每天都干干净净的。", pinyin: "Tā de fángjiān měi tiān dōu gānganjìngjìng de.", de: "Sein Zimmer ist jeden Tag blitzsauber." },
            { cn: "老师说得清清楚楚，你怎么不知道？", pinyin: "Lǎoshī shuō de qīngqingchǔchǔ, nǐ zěnme bù zhīdào?", de: "Die Lehrkraft hat es ganz deutlich gesagt – wieso weißt du das nicht?" },
            { cn: "大家高高兴兴地回家了。", pinyin: "Dàjiā gāogaoxìngxìng de huí jiā le.", de: "Alle sind fröhlich nach Hause gegangen." }
          ],
          tip: "❌ 房间很干干净净的。 → ✅ 房间干干净净的。 Umgangssprachlich bekommt die zweite Silbe von AA oft den ersten Ton und 儿: 好好儿 (hǎohāor) „ordentlich“."
        },
        {
          heading: "Zählwörter: 个个, 张张 — jeder einzelne",
          text: "Ausblick (HSK 3): Auch Zählwörter lassen sich verdoppeln. Dann bedeuten sie „jeder einzelne, alle ohne Ausnahme“: 个个 (gègè), 张张 (zhāngzhāng), 件件 (jiànjiàn). Du nimmst das Zählwort, das zum Nomen passt (照片 → 张张, 衣服 → 件件). Es steht vor dem Prädikat, meist direkt nach dem Thema, und fast immer mit 都. Bedeutungsähnlich ist 每 + Zählwort + Nomen + 都; die Verdopplung klingt lebendiger und betont die Ausnahmslosigkeit. Zu den Zählwörtern siehe [[lesson:lesson-18]].",
          examples: [
            { cn: "我们班的同学个个都喜欢运动。", pinyin: "Wǒmen bān de tóngxué gègè dōu xǐhuan yùndòng.", de: "In unserer Klasse machen ausnahmslos alle gern Sport." },
            { cn: "这些照片张张都很有意思。", pinyin: "Zhèxiē zhàopiàn zhāngzhāng dōu hěn yǒu yìsi.", de: "Diese Fotos sind alle interessant, jedes einzelne." },
            { cn: "妈妈买的衣服件件都很好看。", pinyin: "Māma mǎi de yīfu jiànjiàn dōu hěn hǎokàn.", de: "Jedes Kleidungsstück, das Mama gekauft hat, ist schön." },
            { cn: "他买的苹果个个都很大。", pinyin: "Tā mǎi de píngguǒ gègè dōu hěn dà.", de: "Die Äpfel, die er gekauft hat, sind alle groß." }
          ],
          tip: "❌ 我喜欢张张照片。 → ✅ 照片我张张都喜欢。 Das verdoppelte Zählwort steht nicht als Objekt hinter dem Verb und nicht zusammen mit 每 (nicht 每个个)."
        },
        {
          heading: "Mengenangaben: 一个一个 — einer nach dem anderen",
          text: "Ebenfalls ein Ausblick: Verdoppelst du <strong>一 + Zählwort</strong>, entsteht 一个一个, 一本一本, 一天一天. Vor dem Verb, oft mit 地, heißt das „der Reihe nach, Stück für Stück“: 一个一个地进来. Mit 天 oder 年 drückt es eine allmähliche Veränderung aus: 一天一天地长大. Es gibt auch eine Kurzform ohne das zweite 一: 一个个, 一件件. Das Zählwort muss zum Nomen passen: Bücher zählst du 一本一本, Kleidung 一件一件.",
          examples: [
            { cn: "请大家一个一个地说。", pinyin: "Qǐng dàjiā yí ge yí ge de shuō.", de: "Bitte sprecht der Reihe nach." },
            { cn: "她一本一本地看完了那些书。", pinyin: "Tā yì běn yì běn de kànwán le nàxiē shū.", de: "Sie hat die Bücher eins nach dem anderen durchgelesen." },
            { cn: "天气一天一天地冷了。", pinyin: "Tiānqì yì tiān yì tiān de lěng le.", de: "Das Wetter wird von Tag zu Tag kälter." },
            { cn: "汉字要一个一个地记。", pinyin: "Hànzì yào yí ge yí ge de jì.", de: "Schriftzeichen muss man eins nach dem anderen lernen." }
          ],
          tip: "Nicht verwechseln: 个个都 heißt „jeder, alle ohne Ausnahme“ (学生个个都很好), 一个一个地 heißt „nacheinander“ (学生一个一个地进来)."
        }
      ]
    },
    // ── Wenn und falls: 如果, 要是, ……的话 und 否则 (lesson-52) ──────────
    {
      id: 'lesson-52',
      number: 42.5,
      title: "Wenn und falls: 如果, 要是, ……的话 und 否则",
      subtitle: "Bedingungssätze und die Alternative mit „sonst“",
      level: 'HSK3/HSK4',
      grammarIds: ["g:如果……，就……","g:……的话，就……","g:的话","g:要是……，就……","g:要是……，（就）……，否则……","g:……，否则……"],
      intro: "Im Deutschen deckt „wenn“ zwei Dinge ab: eine Zeit („immer wenn es regnet …“) und eine Bedingung („falls es regnet …“). Im Chinesischen sind das verschiedene Konstruktionen. Für die Zeit nimmst du eher ……的时候, für eine Bedingung <strong>如果</strong> (rúguǒ), das lockere <strong>要是</strong> (yàoshi) oder <strong>……的话</strong> (dehuà) am Ende des Bedingungsteils. Im zweiten Teil markiert <strong>就</strong> (jiù) die Folge – wie ein deutsches „dann“, aber an anderer Stelle. Die Bedingung steht in der Regel vorn, die Folge danach. Außerdem lernst du, mit <strong>否则</strong> (fǒuzé) „sonst“ anzuschließen, was passiert, wenn etwas nicht eintritt. Die Grundfunktionen von 就 findest du in [[lesson:lesson-30]], die Bedingungen „solange“ und „nur wenn“ in [[lesson:lesson-40]].",
      sections: [
        {
          heading: "如果……，就…… — die Grundform",
          text: "Die Formel: <strong>如果 + Bedingung，(Subjekt +) 就 + Folge</strong>. 如果 steht am Satzanfang oder nach dem Subjekt (我如果……). 就 ist ein Adverb: Es steht <em>nach</em> dem Subjekt des zweiten Teils und direkt vor dem Verb – auch vor 不 oder einem Modalverb. 就 kann fehlen, macht den Zusammenhang aber deutlicher. Das Muster passt in gesprochene und geschriebene Sprache.",
          examples: [
            { cn: "如果你明天有空，我们就一起去看电影吧。", pinyin: "Rúguǒ nǐ míngtiān yǒu kòng, wǒmen jiù yìqǐ qù kàn diànyǐng ba.", de: "Wenn du morgen Zeit hast, lass uns zusammen ins Kino gehen." },
            { cn: "我如果是你，就不买这么贵的手机。", pinyin: "Wǒ rúguǒ shì nǐ, jiù bù mǎi zhème guì de shǒujī.", de: "An deiner Stelle würde ich kein so teures Handy kaufen. (如果 nach dem Subjekt)" },
            { cn: "如果飞机晚点，我们就在机场吃晚饭。", pinyin: "Rúguǒ fēijī wǎndiǎn, wǒmen jiù zài jīchǎng chī wǎnfàn.", de: "Falls der Flug Verspätung hat, essen wir am Flughafen zu Abend." },
            { cn: "如果你找不到路，就用手机查一下地图。", pinyin: "Rúguǒ nǐ zhǎo bu dào lù, jiù yòng shǒujī chá yíxià dìtú.", de: "Wenn du den Weg nicht findest, schau einfach auf dem Handy auf die Karte." },
            { cn: "如果下午不忙，我就早点儿回家。", pinyin: "Rúguǒ xiàwǔ bù máng, wǒ jiù zǎo diǎnr huí jiā.", de: "Wenn ich am Nachmittag nicht viel zu tun habe, gehe ich früher nach Hause." }
          ],
          tip: "❌ 如果下雨，就我们不去了。 → ✅ 如果下雨，我们就不去了。 Anders als das deutsche „dann“ am Satzanfang steht 就 nach dem Subjekt, direkt vor dem Verb."
        },
        {
          heading: "……的话 — die Bedingung am Ende markieren",
          text: "Die Partikel <strong>的话</strong> (dehuà) schließt den Bedingungsteil ab: <strong>Bedingung + 的话，Folge</strong>. Sie kann allein stehen oder mit 如果 bzw. 要是 am Anfang kombiniert werden (如果……的话) – die Bedeutung bleibt gleich. 的话 klingt gesprochen und ist im Alltag sehr häufig, oft in kurzen Wendungen wie 有时间的话 „wenn man Zeit hat“ oder 可以的话 „wenn möglich“. Im zweiten Teil steht oft 就. An ein einzelnes Wort gehängt, heißt 的话 etwa „was … betrifft“.",
          examples: [
            { cn: "你喜欢的话，就拿走吧。", pinyin: "Nǐ xǐhuan dehuà, jiù názǒu ba.", de: "Wenn es dir gefällt, nimm es ruhig mit." },
            { cn: "可以的话，请明天上午给我回个电话。", pinyin: "Kěyǐ dehuà, qǐng míngtiān shàngwǔ gěi wǒ huí ge diànhuà.", de: "Wenn möglich, ruf mich bitte morgen Vormittag zurück." },
            { cn: "如果你不想去的话，我就一个人去。", pinyin: "Rúguǒ nǐ bù xiǎng qù dehuà, wǒ jiù yí ge rén qù.", de: "Falls du nicht hingehen willst, gehe ich allein." },
            { cn: "要是太累的话，我们就打车回去吧。", pinyin: "Yàoshi tài lèi dehuà, wǒmen jiù dǎchē huíqu ba.", de: "Wenn wir zu müde sind, nehmen wir doch ein Taxi zurück." },
            { cn: "周末的话，我一般都在家。", pinyin: "Zhōumò dehuà, wǒ yìbān dōu zài jiā.", de: "Am Wochenende? Da bin ich meistens zu Hause. (的话 nach einem einzelnen Wort)" }
          ],
          tip: "的话 oder 的时候? 下雨的时候 heißt „immer wenn es regnet“ (Zeit), 下雨的话 „falls es regnet“ (Annahme). Und Vorsicht: In 听妈妈的话 „auf Mama hören“ ist 话 ein Nomen („Worte“) – das ist keine Bedingung."
        },
        {
          heading: "要是……，就…… — die lockere Variante",
          text: "<strong>要是</strong> (yàoshi) bedeutet dasselbe wie 如果, klingt aber gesprochener und lockerer. Es steht vor oder nach dem Subjekt (要是你…… / 你要是……); am Ende der Bedingung kann zusätzlich 的话 stehen. Für 就 gilt dieselbe Regel: nach dem Subjekt, vor dem Prädikat. Gelegentlich fällt 就 weg, besonders wenn der zweite Teil ein Wunsch, eine Absicht oder ein Vorschlag ist. Zusätzlich: Wie 如果 kann 要是 auch etwas Unwirkliches ausdrücken („hätte …, dann …“); dass es nicht eingetreten ist, zeigt der Zusammenhang.",
          examples: [
            { cn: "要是你不喜欢，就别吃了。", pinyin: "Yàoshi nǐ bù xǐhuan, jiù bié chī le.", de: "Wenn es dir nicht schmeckt, iss es halt nicht." },
            { cn: "要是钱不够，你就先用我的。", pinyin: "Yàoshi qián bú gòu, nǐ jiù xiān yòng wǒ de.", de: "Falls das Geld nicht reicht, nimm erst mal meins." },
            { cn: "你要是早点儿告诉我，我就去机场接你了。", pinyin: "Nǐ yàoshi zǎo diǎnr gàosu wǒ, wǒ jiù qù jīchǎng jiē nǐ le.", de: "Hättest du es mir früher gesagt, hätte ich dich am Flughafen abgeholt. (unwirklich: Du hast es nicht früher gesagt.)" },
            { cn: "要是周末天气不错，我们去公园走走吧。", pinyin: "Yàoshi zhōumò tiānqì búcuò, wǒmen qù gōngyuán zǒuzou ba.", de: "Wenn am Wochenende schönes Wetter ist, lass uns im Park spazieren gehen. (ohne 就: Vorschlag)" }
          ],
          tip: "Register: 如果 ist neutral und passt auch in Texte, 要是 gehört vor allem in die gesprochene Sprache. Ausblick (HSK 5): 假如 (jiǎrú) klingt etwas gehobener, 万一 (wànyī) steht für unwahrscheinliche, unerwünschte Fälle."
        },
        {
          heading: "……，否则…… — sonst, andernfalls",
          text: "<strong>否则</strong> (fǒuzé) nennt, was geschieht, wenn das zuvor Gesagte nicht eintritt oder nicht befolgt wird. Der erste Teil ist oft eine Aufforderung oder Notwendigkeit (mit 要, 得, 必须, 应该), der zweite meist eine unerwünschte Folge, häufig mit 就, 会 oder 要. 否则 steht am Anfang des zweiten Teils, <em>vor</em> dem Subjekt. Es wirkt etwas formeller als gesprochene Alternativen, ist aber in Gespräch und Text verbreitet.",
          examples: [
            { cn: "我们得早点儿出发，否则会遇到堵车。", pinyin: "Wǒmen děi zǎo diǎnr chūfā, fǒuzé huì yùdào dǔchē.", de: "Wir müssen früh losfahren, sonst geraten wir in den Stau." },
            { cn: "你要多穿点儿衣服，否则会感冒的。", pinyin: "Nǐ yào duō chuān diǎnr yīfu, fǒuzé huì gǎnmào de.", de: "Zieh dich wärmer an, sonst erkältest du dich." },
            { cn: "出门前一定要检查护照，否则到了机场就麻烦了。", pinyin: "Chūmén qián yídìng yào jiǎnchá hùzhào, fǒuzé dào le jīchǎng jiù máfan le.", de: "Prüf vor dem Losgehen unbedingt deinen Pass, sonst gibt es am Flughafen Ärger." },
            { cn: "你应该马上跟她道歉，否则她不会原谅你。", pinyin: "Nǐ yīnggāi mǎshàng gēn tā dàoqiàn, fǒuzé tā bú huì yuánliàng nǐ.", de: "Du solltest dich sofort bei ihr entschuldigen, sonst verzeiht sie dir nicht." }
          ],
          tip: "❌ 快点儿吧，我们否则要迟到了。 → ✅ 快点儿吧，否则我们要迟到了。 否则 eröffnet den zweiten Teil und steht vor dem Subjekt. Ausblick (HSK 5): Im Gespräch hörst du oft 不然 (bùrán) oder 要不然 (yàobùrán) mit derselben Bedeutung."
        },
        {
          heading: "要是……，（就）……，否则…… — wenn, dann, sonst",
          text: "Beide Muster lassen sich verbinden: <strong>要是</strong> nennt die Bedingung, der zweite Teil (oft mit 就) sagt, was dann geschieht oder getan werden soll, und <strong>否则</strong> nennt, was andernfalls passiert. 否则 kann sich auf die Bedingung beziehen („wenn nicht …“) oder auf die Handlung im zweiten Teil („ohne das …“) – der Zusammenhang entscheidet. Die Folge nach 否则 ist oft unerwünscht, kann aber auch einfach die andere Möglichkeit sein.",
          examples: [
            { cn: "要是你想学好中文，就要多说多练，否则进步会很慢。", pinyin: "Yàoshi nǐ xiǎng xuéhǎo Zhōngwén, jiù yào duō shuō duō liàn, fǒuzé jìnbù huì hěn màn.", de: "Wenn du gut Chinesisch lernen willst, musst du viel sprechen und üben – sonst kommst du nur langsam voran. (否则 = ohne Üben)" },
            { cn: "要是明天不加班，我就去看你，否则只能周末见了。", pinyin: "Yàoshi míngtiān bù jiābān, wǒ jiù qù kàn nǐ, fǒuzé zhǐ néng zhōumò jiàn le.", de: "Wenn ich morgen keine Überstunden machen muss, besuche ich dich – sonst sehen wir uns erst am Wochenende. (否则 = falls doch Überstunden)" },
            { cn: "要是能买到票，我们就坐高铁去，否则就开车去。", pinyin: "Yàoshi néng mǎidào piào, wǒmen jiù zuò gāotiě qù, fǒuzé jiù kāichē qù.", de: "Wenn wir Tickets bekommen, fahren wir mit dem Schnellzug, sonst nehmen wir das Auto." },
            { cn: "要是你同意，我们就这么办，否则再想别的办法。", pinyin: "Yàoshi nǐ tóngyì, wǒmen jiù zhème bàn, fǒuzé zài xiǎng bié de bànfǎ.", de: "Wenn du einverstanden bist, machen wir es so, sonst überlegen wir uns etwas anderes." }
          ],
          tip: "Merkhilfe: Ersetze 否则 im Kopf durch „wenn nicht“ – dann merkst du schnell, worauf es sich bezieht. Ausblick (HSK 6): Mit 除非 (chúfēi) statt 要是 kehrt sich die Logik um: 除非……，否则…… heißt „nur wenn …, sonst …“."
        }
      ]
    },
    // ── Rhetorische Fragen und doppelte Verneinung: 不是……吗, 难道, 不得不 (lesson-53) ──────────
    {
      id: 'lesson-53',
      number: 43.5,
      title: "Rhetorische Fragen und doppelte Verneinung: 不是……吗, 难道, 不得不",
      subtitle: "Nachdruck durch Frage und doppelte Verneinung",
      level: 'HSK3/HSK4',
      grammarIds: ["g:用反问句表示强调：不是……吗？","g:难道……吗？","g:反问句2：由疑问代词构成的反问句","g:双重否定句：用双重否定表示强调","g:X什么（啊）"],
      intro: "Nicht jede Frage will eine Antwort. Wenn du auf Deutsch sagst „Ist das nicht dein Handy?“ oder „Wer will denn nicht verreisen?“, meinst du eigentlich eine Aussage – und zwar eine nachdrückliche. Chinesisch hat für solche <strong>rhetorischen Fragen</strong> (反问句) feste Formen: <strong>不是……吗？</strong> erinnert an etwas Bekanntes, <strong>难道……吗？</strong> drückt Unglauben oder einen Vorwurf aus, und auch Fragewörter wie 谁, 什么, 哪儿 oder 怎么 können eine Aussage meinen. Die Faustregel: Form und Sinn sind umgekehrt – eine verneinte Frage meint eine Bejahung, eine bejahte Frage eine Verneinung. Zum Schluss kommt die <strong>doppelte Verneinung</strong> (双重否定): Zwei Verneinungen ergeben eine Bejahung, aber eine stärkere als der einfache Satz. Echte Fragen mit 什么 findest du in [[lesson:lesson-22]].",
      sections: [
        {
          heading: "不是……吗？ — „… doch …!“",
          text: "<strong>(Subjekt +) 不是 + Aussage + 吗？</strong> sieht aus wie eine verneinte Frage, gemeint ist aber eine Bejahung: „… doch …!“. Die sprechende Person erinnert an etwas Bekanntes, wundert sich oder macht einen leichten Vorwurf, weil die Lage dem Bekannten zu widersprechen scheint. Eine Antwort wird oft gar nicht erwartet. 不是 steht vor dem betonten Teil, auch vor einem Verb. Häufig folgt eine Frage mit 怎么 („… warum dann …?“). Die Form ist gesprochen und emotional.",
          examples: [
            { cn: "这不是小王吗？", pinyin: "Zhè bú shì Xiǎo Wáng ma?", de: "Das ist doch Xiao Wang! (Überraschung beim Wiedersehen)" },
            { cn: "我不是告诉过你了吗？", pinyin: "Wǒ bú shì gàosu guo nǐ le ma?", de: "Ich hab's dir doch schon gesagt!" },
            { cn: "你不是最喜欢吃辣的吗？", pinyin: "Nǐ bú shì zuì xǐhuan chī là de ma?", de: "Du isst doch so gern scharf!" },
            { cn: "你不是去上海了吗，怎么还在家？", pinyin: "Nǐ bú shì qù Shànghǎi le ma, zěnme hái zài jiā?", de: "Ich dachte, du bist nach Shanghai gefahren – warum bist du noch zu Hause?" }
          ],
          tip: "Nicht verwechseln mit 不是……，而是…… „nicht …, sondern …“: Dort fehlt 吗, und es gibt keine Frage."
        },
        {
          heading: "难道……吗？ — „etwa …?“",
          text: "<strong>难道</strong> (nándào) macht eine Frage zu einem Ausdruck von Erstaunen, Zweifel oder Vorwurf: „etwa …?“, „soll das heißen, dass …?“. Auch hier ist der Sinn umgekehrt zur Form: 难道你不知道吗？ meint „du weißt es doch!“, 难道我说错了吗？ meint „ich habe nichts Falsches gesagt“. 难道 steht vor oder nach dem Subjekt, am Ende meist 吗 – gesprochen fällt es manchmal weg. Oft geht ein Satzteil voraus, der den Widerspruch begründet.",
          examples: [
            { cn: "难道你忘了今天是我的生日吗？", pinyin: "Nándào nǐ wàng le jīntiān shì wǒ de shēngrì ma?", de: "Hast du etwa vergessen, dass heute mein Geburtstag ist?" },
            { cn: "你难道不想回家看看父母吗？", pinyin: "Nǐ nándào bù xiǎng huí jiā kànkan fùmǔ ma?", de: "Willst du etwa nicht nach Hause fahren und deine Eltern besuchen?" },
            { cn: "外面这么冷，难道你还要出去跑步吗？", pinyin: "Wàimiàn zhème lěng, nándào nǐ hái yào chūqu pǎobù ma?", de: "Draußen ist es so kalt – willst du etwa trotzdem joggen gehen?" },
            { cn: "难道我说错了吗？", pinyin: "Nándào wǒ shuōcuò le ma?", de: "Habe ich etwa etwas Falsches gesagt? (= Ich habe recht.)" },
            { cn: "大家都在等你，难道你一点儿也不着急吗？", pinyin: "Dàjiā dōu zài děng nǐ, nándào nǐ yìdiǎnr yě bù zháojí ma?", de: "Alle warten auf dich – hast du es denn überhaupt nicht eilig?" }
          ],
          tip: "不是……吗 oder 难道……吗? 你不是知道吗？ erinnert an eine Tatsache („du weißt es doch“). 难道你不知道吗？ klingt deutlich stärker nach Unglauben oder Vorwurf („weißt du das etwa nicht?!“)."
        },
        {
          heading: "Rhetorische Fragen mit 谁, 什么, 哪儿, 怎么",
          text: "Auch Fragepronomen können eine Aussage meinen; wieder ist der Sinn umgekehrt. <strong>谁不……？</strong> heißt „jeder …“, <strong>谁知道？</strong> „niemand weiß es“. <strong>有什么 + Adjektiv + 的？</strong> heißt „überhaupt nicht …“. <strong>哪儿</strong> oder 哪里 vor einem Verb bedeutet „keineswegs“. <strong>怎么 + 能/会</strong> drückt Vorwurf oder Zweifel aus. Am Ende steht oft 呢, aber kein 吗. Typischer Fehler: solche Fragen wörtlich nehmen und eine Auskunft geben.",
          examples: [
            { cn: "谁不喜欢放假呢？", pinyin: "Shéi bù xǐhuan fàngjià ne?", de: "Wer hat denn nicht gern frei? (= Alle haben gern frei.)" },
            { cn: "这有什么奇怪的？", pinyin: "Zhè yǒu shénme qíguài de?", de: "Was ist daran schon seltsam? (= Das ist gar nicht seltsam.)" },
            { cn: "我哪儿有时间看电视啊？", pinyin: "Wǒ nǎr yǒu shíjiān kàn diànshì a?", de: "Woher soll ich denn Zeit zum Fernsehen nehmen? (= Ich habe keine.)" },
            { cn: "你怎么能不告诉我呢？", pinyin: "Nǐ zěnme néng bú gàosu wǒ ne?", de: "Wie konntest du mir das nur verschweigen?" },
            { cn: "谁知道明天会怎么样呢？", pinyin: "Shéi zhīdào míngtiān huì zěnmeyàng ne?", de: "Wer weiß schon, was morgen ist?" }
          ],
          tip: "Der Ton hilft: Eine rhetorische Frage klingt nachdrücklich und endet oft mit 呢 oder 啊. Wer auf 谁不想去？ mit Namen antwortet, hat die Frage missverstanden."
        },
        {
          heading: "X什么（啊） — „Was heißt hier X?“",
          text: "Hängt man <strong>什么</strong> an ein Verb oder Adjektiv, das gerade gefallen ist oder zur Lage passt, entsteht keine echte Frage, sondern ein Widerspruch: „Was heißt hier X? / Wozu X? / Kein Grund zu X!“. Danach folgt oft eine Begründung. 啊 (a) macht den Ton weicher, ohne 啊 klingt es schroffer. Hat X ein Objekt, steht es hinter 什么. Bei 谢 und 客气 wirkt die Form freundlich („Keine Ursache!“). Sie gehört zur gesprochenen Sprache und kann je nach Ton unhöflich wirken, besonders gegenüber Älteren oder Vorgesetzten.",
          examples: [
            { cn: "哭什么啊，又不是什么大事。", pinyin: "Kū shénme a, yòu bú shì shénme dàshì.", de: "Warum weinst du denn? Ist doch keine große Sache." },
            { cn: "忙什么啊，坐下喝杯茶吧。", pinyin: "Máng shénme a, zuòxià hē bēi chá ba.", de: "Wozu die Hektik? Setz dich und trink eine Tasse Tee." },
            { cn: "怕什么，我陪你一起去。", pinyin: "Pà shénme, wǒ péi nǐ yìqǐ qù.", de: "Keine Angst, ich gehe mit dir zusammen hin." },
            { cn: "看什么电视，快去写作业！", pinyin: "Kàn shénme diànshì, kuài qù xiě zuòyè!", de: "Nichts da mit Fernsehen – ab an die Hausaufgaben! (Objekt hinter 什么)" }
          ],
          tip: "Echte Frage oder Widerspruch? Bei einer echten Frage steht 什么 an der Stelle des Erfragten: 你想吃什么？ „Was möchtest du essen?“. Bei X什么 fragt niemand nach einem Ding – X greift auf, was gerade gesagt oder getan wird. Im Zweifel entscheiden Lage und Tonfall."
        },
        {
          heading: "Doppelte Verneinung: 不得不, 不能不, 没有……不……, 非……不可",
          text: "Zwei Verneinungen heben sich auf und ergeben eine Bejahung – aber eine nachdrücklichere als der einfache Satz. <strong>不得不</strong> (bùdébù) heißt „gezwungen sein, nicht umhinkönnen“, <strong>不能不</strong> „muss einfach“, <strong>不会不</strong> „wird ganz bestimmt“. <strong>没有 + Person/Sache + 不……</strong> bedeutet „ausnahmslos alle“, <strong>非 + Verb + 不可</strong> „unbedingt müssen“. Wichtig: Beide Verneinungen müssen sich auf dieselbe Aussage beziehen. In gehobener Sprache kann eine doppelte Verneinung auch abschwächen: 不无道理 „nicht ganz unbegründet“.",
          examples: [
            { cn: "车坏了，我们不得不走回家。", pinyin: "Chē huài le, wǒmen bùdébù zǒu huí jiā.", de: "Das Auto war kaputt, wir mussten zu Fuß nach Hause gehen." },
            { cn: "这么重要的会，我不能不参加。", pinyin: "Zhème zhòngyào de huì, wǒ bù néng bù cānjiā.", de: "An so einer wichtigen Sitzung muss ich einfach teilnehmen." },
            { cn: "我们班没有一个人不知道这件事。", pinyin: "Wǒmen bān méiyǒu yí ge rén bù zhīdào zhè jiàn shì.", de: "In unserer Klasse weiß ausnahmslos jede und jeder davon." },
            { cn: "他已经答应了，不会不来的。", pinyin: "Tā yǐjīng dāying le, bú huì bù lái de.", de: "Er hat es zugesagt, er kommt ganz bestimmt." },
            { cn: "这部电影太好看了，你非看不可。", pinyin: "Zhè bù diànyǐng tài hǎokàn le, nǐ fēi kàn bùkě.", de: "Der Film ist großartig, den musst du unbedingt sehen." }
          ],
          tip: "Abstufung: 我得去 „ich muss hin“ (neutral) – 我不得不去 „mir bleibt nichts anderes übrig“ (Zwang, oft ungern) – 我非去不可 „ich muss unbedingt hin“. Rhetorische Fragen mit Verneinung wirken ähnlich stark: 谁不想去？ ≈ 没有人不想去。"
        }
      ]
    },
    // ── Obwohl und selbst wenn: 尽管, 即使, 就是……也 (lesson-54) ──────────
    {
      id: 'lesson-54',
      number: 44.5,
      title: "Obwohl und selbst wenn: 尽管, 即使, 就是……也",
      subtitle: "Einräumungen: Tatsache oder Annahme",
      level: 'HSK4',
      grammarIds: ["g:尽管……，但是/可是……","g:即使……，也……","g:就是……，也……","g:……，然而……","g:……X是X，就是/不过……","g:不……也……"],
      intro: "Im Deutschen unterscheidest du zwischen „obwohl“ und „selbst wenn“: „Obwohl es regnet“ heißt, es regnet wirklich; „selbst wenn es regnet“ lässt offen, ob es regnen wird. Chinesisch trennt das ebenso, und zwar mit festen Wortpaaren: <strong>尽管……，但是/可是……</strong> räumt eine Tatsache ein, <strong>即使……，也……</strong> und das gesprochene <strong>就是……，也……</strong> einen angenommenen, oft extremen Fall. Achte auf den Partner im zweiten Teil: Nach 尽管 folgt meist 但是 oder 可是, nach 即使 und 就是 steht 也. Dazu lernst du das schriftsprachliche <strong>然而</strong> „jedoch“, die gesprochene Einschränkung <strong>X是X，就是……</strong> („schön ist es ja, nur …“) und den Kurzsatz <strong>不……也……</strong>. Die Grundform 虽然……，但是…… kennst du aus [[lesson:lesson-14]].",
      sections: [
        {
          heading: "尽管……，但是/可是…… — obwohl (Tatsache)",
          text: "<strong>尽管</strong> (jǐnguǎn) räumt einen Umstand ein, der wirklich besteht; der zweite Teil mit <strong>但是</strong>, der Kurzform 但 oder <strong>可是</strong> sagt, dass das Ergebnis trotzdem anders ausfällt. Oft verstärken 还是, 仍然 (réngrán) oder 也 im zweiten Teil. Inhaltlich entspricht 尽管 dem bekannten 虽然, betont den Gegensatz aber etwas stärker und klingt etwas formeller. 尽管 steht vor oder nach dem Subjekt.",
          examples: [
            { cn: "尽管天气不好，但是来参加活动的人还是很多。", pinyin: "Jǐnguǎn tiānqì bù hǎo, dànshì lái cānjiā huódòng de rén háishi hěn duō.", de: "Obwohl das Wetter schlecht war, kamen trotzdem viele Leute zu der Veranstaltung." },
            { cn: "她尽管已经七十岁了，可是身体还很好。", pinyin: "Tā jǐnguǎn yǐjīng qīshí suì le, kěshì shēntǐ hái hěn hǎo.", de: "Obwohl sie schon siebzig ist, ist sie noch sehr fit." },
            { cn: "尽管大家都反对，但他仍然坚持自己的想法。", pinyin: "Jǐnguǎn dàjiā dōu fǎnduì, dàn tā réngrán jiānchí zìjǐ de xiǎngfǎ.", de: "Obwohl alle dagegen waren, blieb er bei seiner Idee." },
            { cn: "尽管这家饭店有点儿贵，可是菜做得特别好吃。", pinyin: "Jǐnguǎn zhè jiā fàndiàn yǒudiǎnr guì, kěshì cài zuò de tèbié hǎochī.", de: "Obwohl das Restaurant etwas teuer ist, ist das Essen ausgezeichnet." }
          ],
          tip: "Als Adverb hat 尽管 eine andere Bedeutung: „ruhig, ohne Bedenken“ – 需要什么，尽管说 „Sag ruhig, wenn du etwas brauchst“. Dann folgt kein 但是."
        },
        {
          heading: "即使……，也…… — selbst wenn (Annahme)",
          text: "<strong>即使</strong> (jíshǐ) räumt einen angenommenen, oft extremen Fall ein; <strong>也</strong> im zweiten Teil sagt, dass das Ergebnis trotzdem gilt. Der Fall ist meist hypothetisch, kann aber auch eine Tatsache sein, die als extrem hingestellt wird. 即使 steht vor oder nach dem Subjekt, 也 nach dem Subjekt des zweiten Teils, vor dem Verb oder der Verneinung. Das Muster ist neutral bis etwas formell. Für einen bloß angenommenen Fall nimmst du meist 即使, nicht 尽管 – vergleiche die letzten beiden Beispiele.",
          examples: [
            { cn: "即使只有一点儿希望，我们也不能放弃。", pinyin: "Jíshǐ zhǐyǒu yìdiǎnr xīwàng, wǒmen yě bù néng fàngqì.", de: "Selbst wenn es nur ein bisschen Hoffnung gibt, dürfen wir nicht aufgeben." },
            { cn: "你即使现在出发，也赶不上最后一班车了。", pinyin: "Nǐ jíshǐ xiànzài chūfā, yě gǎn bu shàng zuìhòu yì bān chē le.", de: "Selbst wenn du jetzt losgehst, erwischst du den letzten Bus nicht mehr." },
            { cn: "即使工作再忙，她也每天给父母打电话。", pinyin: "Jíshǐ gōngzuò zài máng, tā yě měitiān gěi fùmǔ dǎ diànhuà.", de: "Wie viel sie auch zu tun hat, sie ruft jeden Tag ihre Eltern an." },
            { cn: "尽管昨天下雪了，我们还是去爬山了。", pinyin: "Jǐnguǎn zuótiān xià xuě le, wǒmen háishi qù pá shān le.", de: "Obwohl es gestern geschneit hat, sind wir trotzdem wandern gegangen. (尽管: Es hat wirklich geschneit.)" },
            { cn: "即使明天下雪，我们也去爬山。", pinyin: "Jíshǐ míngtiān xià xuě, wǒmen yě qù pá shān.", de: "Selbst wenn es morgen schneit, gehen wir wandern. (即使: Ob es schneit, ist offen.)" }
          ],
          tip: "Nach 即使 steht im zweiten Teil 也, nicht 但是: ❌ 即使很贵，但是我要买。 → ✅ 即使很贵，我也要买。 Merke: 尽管 + 但是 = obwohl (Tatsache), 即使 + 也 = selbst wenn (Annahme)."
        },
        {
          heading: "Gesprochen: 就是……，也…… und 不……也……",
          text: "Im Gespräch kann <strong>就是</strong> (jiùshì) die Bedeutung von 即使 haben: Es nennt einen angenommenen, oft extremen Fall, und 也 sagt, dass das Ergebnis trotzdem gilt. Das klingt nachdrücklich und entschlossen, häufig mit 再 „noch so“. Noch kürzer ist <strong>不……也……</strong>: 不 verneint die Bedingung, 也 sagt, dass das Ergebnis trotzdem eintritt – „auch ohne …“. Beide Teile stehen ohne Komma in einem Satz, oft mit eigenem Subjekt. Ausführlich entspricht das 即使不……，也…….",
          examples: [
            { cn: "就是明天下雪，我也要去机场接你。", pinyin: "Jiùshì míngtiān xià xuě, wǒ yě yào qù jīchǎng jiē nǐ.", de: "Und wenn es morgen schneit – ich hole dich vom Flughafen ab." },
            { cn: "这件事你就是不说，大家也会知道的。", pinyin: "Zhè jiàn shì nǐ jiùshì bù shuō, dàjiā yě huì zhīdào de.", de: "Selbst wenn du nichts sagst, erfahren es alle sowieso." },
            { cn: "她就是再累，也坚持每天跑步。", pinyin: "Tā jiùshì zài lèi, yě jiānchí měitiān pǎobù.", de: "Egal wie müde sie ist, sie läuft jeden Tag." },
            { cn: "他不戴眼镜也看得很清楚。", pinyin: "Tā bú dài yǎnjìng yě kàn de hěn qīngchu.", de: "Auch ohne Brille sieht er alles ganz deutlich." },
            { cn: "我不想去也得去。", pinyin: "Wǒ bù xiǎng qù yě děi qù.", de: "Ich muss hin, ob ich will oder nicht." }
          ],
          tip: "Nicht verwechseln mit 也不 „auch nicht“: 我不去，他也不去 reiht nur zwei Verneinungen aneinander. Bei 不……也…… steht 也 vor einer Aussage, die <em>trotzdem</em> gilt."
        },
        {
          heading: "……，然而…… — jedoch (schriftlich)",
          text: "<strong>然而</strong> (rán'ér) leitet einen Gegensatz zum Vorangehenden ein: „jedoch, doch“. Es ist deutlich schriftsprachlich und steht in Berichten, Erzählungen und Aufsätzen. 然而 steht am Anfang des zweiten Teilsatzes, vor dem Subjekt, und kann auch einen neuen Satz einleiten. Oft folgt etwas Unerwartetes: Man erwartet das eine, doch es kommt anders. Im ersten Teil kann 虽然 stehen (虽然……，然而……).",
          examples: [
            { cn: "研究人员做了很多次实验，然而一直没有成功。", pinyin: "Yánjiū rényuán zuò le hěn duō cì shíyàn, rán'ér yìzhí méiyǒu chénggōng.", de: "Das Forschungsteam führte viele Versuche durch, jedoch ohne Erfolg." },
            { cn: "这座城市发展得很快，然而环境问题也越来越严重。", pinyin: "Zhè zuò chéngshì fāzhǎn de hěn kuài, rán'ér huánjìng wèntí yě yuè lái yuè yánzhòng.", de: "Die Stadt entwickelt sich rasant, doch auch die Umweltprobleme werden immer gravierender." },
            { cn: "虽然他已经尽了最大的努力，然而结果还是让人失望。", pinyin: "Suīrán tā yǐjīng jìn le zuì dà de nǔlì, rán'ér jiéguǒ háishi ràng rén shīwàng.", de: "Obwohl er sein Bestes gegeben hatte, war das Ergebnis enttäuschend." },
            { cn: "人人都以为比赛会很轻松，然而对手比想象的强得多。", pinyin: "Rénrén dōu yǐwéi bǐsài huì hěn qīngsōng, rán'ér duìshǒu bǐ xiǎngxiàng de qiáng de duō.", de: "Alle hatten mit einem leichten Spiel gerechnet, doch das gegnerische Team war viel stärker als gedacht." }
          ],
          tip: "Register-Leiter: 不过 (locker, abschwächend) – 可是 / 但是 (neutral) – 然而 (geschrieben, gehoben). Im Alltagsgespräch klingt 然而 gestelzt: Sag lieber 我想去，可是没时间 statt 我想去，然而没时间."
        },
        {
          heading: "X是X，就是/不过…… — zwar …, nur …",
          text: "Mit <strong>X是X</strong> gibst du etwas zu („schön ist es ja“), um dann mit <strong>就是</strong> oder <strong>不过</strong> die eigentlich wichtige Einschränkung nachzuschieben. X ist dasselbe Adjektiv oder Verb, wörtlich wiederholt. Das Muster ist typisch für die gesprochene Sprache und klingt zurückhaltend: Der Einwand wird abgemildert, weil das Positive zuerst anerkannt wird. Auch 可是 oder 但是 sind möglich; 就是 betont „das Einzige, was stört“. Mit einem Verb drückt das Muster oft widerwillige Zustimmung aus.",
          examples: [
            { cn: "这家饭馆的菜好吃是好吃，就是人太多了。", pinyin: "Zhè jiā fànguǎn de cài hǎochī shì hǎochī, jiùshì rén tài duō le.", de: "Das Essen in dem Lokal ist wirklich gut, nur ist es viel zu voll." },
            { cn: "这个手机便宜是便宜，不过质量一般。", pinyin: "Zhège shǒujī piányi shì piányi, búguò zhìliàng yìbān.", de: "Billig ist das Handy schon, aber die Qualität ist mittelmäßig." },
            { cn: "他聪明是聪明，可是不太努力。", pinyin: "Tā cōngming shì cōngming, kěshì bú tài nǔlì.", de: "Klug ist er ja, aber nicht besonders fleißig." },
            { cn: "我同意是同意，就是有点儿担心时间不够。", pinyin: "Wǒ tóngyì shì tóngyì, jiùshì yǒudiǎnr dānxīn shíjiān bú gòu.", de: "Einverstanden bin ich schon, ich fürchte nur, die Zeit reicht nicht. (Verb: widerwillige Zustimmung)" }
          ],
          tip: "Drei Mal 就是: <strong>就是……，也……</strong> „selbst wenn“ (mit 也 im zweiten Teil), <strong>X是X，就是……</strong> „nur“ (nach einem Zugeständnis) und 就是他 „genau er“. Steht 也 im zweiten Teil, ist es „selbst wenn“."
        }
      ]
    },
    // ── Argumentieren: 不是……而是, 一方面……另一方面, 甚至 (lesson-55) ──────────
    {
      id: 'lesson-55',
      number: 44.6,
      title: "Argumentieren: 不是……而是, 一方面……另一方面, 甚至",
      subtitle: "Richtigstellen, abwägen, steigern und anreihen",
      level: 'HSK4',
      grammarIds: ["g:不是……，而是……","g:不是……，就是……","g:一方面……，另一方面……","g:……,甚至……","g:……，并且……","g:……，于是……","g:此外","g:另外"],
      intro: "Wenn du auf Chinesisch argumentierst – in einem Aufsatz, einer Diskussion oder einer E-Mail –, reichen 因为 und 所以 bald nicht mehr aus. In dieser Lektion lernst du die Verbindungswörter, mit denen du einen Gedanken <strong>richtigstellst</strong> (不是……而是), <strong>zwei Möglichkeiten</strong> nennst (不是……就是), <strong>abwägst</strong> (一方面……另一方面), <strong>steigerst</strong> (甚至, 并且), <strong>weitere Punkte anreihst</strong> (此外, 另外) und eine Erzählung <strong>weiterführst</strong> (于是). Vorsicht vor dem Deutschen: „sondern“ steckt in mehreren chinesischen Paaren mit ganz verschiedener Bedeutung, und „einerseits – andererseits“ verlangt im Chinesischen keinen Gegensatz. Achte deshalb weniger auf die deutsche Übersetzung als auf die <em>Logik</em> zwischen den beiden Teilen: Wird etwas ersetzt, ergänzt, gesteigert oder folgt etwas daraus?",
      sections: [
        {
          heading: "不是……，而是…… — nicht A, sondern B",
          text: "Mit <strong>不是 A，而是 B</strong> weist du eine Annahme zurück und nennst gleich das Richtige. A und B sind parallel gebaut: Nomen neben Nomen, Verbgruppe neben Verbgruppe, Satz neben Satz. Sehr häufig ist <strong>不是不……，而是……</strong>: Damit erklärst du den wahren Grund („Nicht, dass ich nicht wollte – ich …“). Werden zwei Personen gegenübergestellt, steht 不是 vor dem ersten Subjekt. Im Gespräch fällt 而 oft weg: 不是……，是…….",
          examples: [
            { cn: "这本书的作者不是他，而是他的妻子。", pinyin: "Zhè běn shū de zuòzhě búshì tā, érshì tā de qīzi.", de: "Das Buch hat nicht er geschrieben, sondern seine Frau." },
            { cn: "我学汉语不是为了找工作，而是为了了解中国文化。", pinyin: "Wǒ xué Hànyǔ búshì wèile zhǎo gōngzuò, érshì wèile liǎojiě Zhōngguó wénhuà.", de: "Ich lerne Chinesisch nicht, um eine Stelle zu finden, sondern um die chinesische Kultur kennenzulernen." },
            { cn: "她不是不愿意帮忙，而是真的太忙了。", pinyin: "Tā búshì bú yuànyì bāngmáng, érshì zhēn de tài máng le.", de: "Nicht, dass sie nicht helfen will – sie hat wirklich zu viel zu tun." },
            { cn: "成功的关键不是聪明，而是坚持。", pinyin: "Chénggōng de guānjiàn búshì cōngming, érshì jiānchí.", de: "Der Schlüssel zum Erfolg ist nicht Klugheit, sondern Ausdauer." },
            { cn: "不是我不想说，是我真的不知道。", pinyin: "Búshì wǒ bù xiǎng shuō, shì wǒ zhēn de bù zhīdào.", de: "Nicht, dass ich es nicht sagen will – ich weiß es wirklich nicht. (gesprochen, ohne 而)" }
          ],
          tip: "Die „sondern“-Falle: „nicht nur …, sondern auch“ heißt 不但……，而且…… ([[lesson:lesson-39]]). Für diese Bedeutung ist ❌ 他不是聪明，而是很努力 falsch – das hieße „Er ist nicht klug, sondern fleißig“. → ✅ 他不但聪明，而且很努力 „Er ist nicht nur klug, sondern auch fleißig“."
        },
        {
          heading: "不是……，就是…… — entweder A oder B",
          text: "<strong>不是 A，就是 B</strong> sieht fast genauso aus, bedeutet aber etwas ganz anderes: Eine der beiden Möglichkeiten trifft sicher zu – „entweder A oder B“. Oft beschreibt das Muster, was jemand gewöhnlich tut, oder eine Reihe lästiger Zustände; dann klingt es leicht klagend. Auch als sichere Vermutung ist es üblich: Man weiß nicht genau, welche der beiden Möglichkeiten stimmt, ist sich aber sicher, dass es eine davon ist. A und B sind gleich gebaut. Der Unterschied zu 而是: Bei 而是 wird A verneint und durch B ersetzt, bei 就是 ist A <em>oder</em> B wahr.",
          examples: [
            { cn: "他每天晚上不是看书，就是听音乐。", pinyin: "Tā měi tiān wǎnshang bú shì kàn shū, jiù shì tīng yīnyuè.", de: "Jeden Abend liest er entweder ein Buch oder hört Musik." },
            { cn: "最近我不是加班，就是出差，一点儿空也没有。", pinyin: "Zuìjìn wǒ bú shì jiābān, jiù shì chūchāi, yìdiǎnr kòng yě méiyǒu.", de: "In letzter Zeit mache ich entweder Überstunden oder bin auf Dienstreise – ich habe überhaupt keine freie Minute." },
            { cn: "这家店的东西不是太贵，就是质量不好。", pinyin: "Zhè jiā diàn de dōngxi bú shì tài guì, jiù shì zhìliàng bù hǎo.", de: "Die Sachen in diesem Laden sind entweder zu teuer oder von schlechter Qualität." },
            { cn: "他不是中国人，而是日本人。", pinyin: "Tā búshì Zhōngguórén, érshì Rìběnrén.", de: "Er ist kein Chinese, sondern Japaner. (A ist falsch, B ist richtig)" },
            { cn: "他不是中国人，就是日本人。", pinyin: "Tā bú shì Zhōngguórén, jiù shì Rìběnrén.", de: "Er ist entweder Chinese oder Japaner. (Vermutung: eins von beiden)" }
          ],
          tip: "Für ein neutrales „entweder … oder“ in Aussagen gibt es auch 或者……，或者……; in Fragen nimmt man 还是 ([[lesson:lesson-31]]). 不是……就是 betont dagegen, dass es keine dritte Möglichkeit gibt."
        },
        {
          heading: "一方面……，另一方面…… — zwei Seiten einer Sache",
          text: "<strong>一方面……，另一方面……</strong> nennt zwei Seiten oder zwei Gründe, die zusammen das Bild ergeben. Die beiden Teile stehen am Anfang der Teilsätze oder nach dem Thema; im zweiten Teil folgt oft 也, 又 oder 还. Anders als „einerseits – andererseits“ ist <em>kein Gegensatz</em> nötig: Häufig sind es zwei Gründe oder Aufgaben, die sich ergänzen (一方面是因为……，另一方面是因为……). Steckt doch ein innerer Widerspruch dahinter, setzt man gern 又 hinzu. Das Paar klingt sachlich und ist in Texten wie im Gespräch üblich.",
          examples: [
            { cn: "一方面我想留在北京工作，另一方面我又想回老家陪父母。", pinyin: "Yì fāngmiàn wǒ xiǎng liú zài Běijīng gōngzuò, lìng yì fāngmiàn wǒ yòu xiǎng huí lǎojiā péi fùmǔ.", de: "Einerseits möchte ich in Peking bleiben und arbeiten, andererseits will ich zurück in meine Heimatstadt zu meinen Eltern. (Widerspruch, mit 又)" },
            { cn: "运动一方面能让身体更健康，另一方面也能让心情变好。", pinyin: "Yùndòng yì fāngmiàn néng ràng shēntǐ gèng jiànkāng, lìng yì fāngmiàn yě néng ràng xīnqíng biàn hǎo.", de: "Sport macht zum einen gesünder und hebt zum anderen auch die Stimmung." },
            { cn: "她这次没去旅行，一方面是因为工作太忙，另一方面是因为身体不太好。", pinyin: "Tā zhè cì méi qù lǚxíng, yì fāngmiàn shì yīnwèi gōngzuò tài máng, lìng yì fāngmiàn shì yīnwèi shēntǐ bú tài hǎo.", de: "Sie ist diesmal nicht verreist, zum einen wegen der vielen Arbeit, zum anderen, weil es ihr gesundheitlich nicht so gut ging." },
            { cn: "城市发展得很快，一方面给人们带来了方便，另一方面也带来了不少问题。", pinyin: "Chéngshì fāzhǎn de hěn kuài, yì fāngmiàn gěi rénmen dàilái le fāngbiàn, lìng yì fāngmiàn yě dàilái le bù shǎo wèntí.", de: "Die Städte entwickeln sich schnell; das bringt den Menschen einerseits Bequemlichkeit, andererseits aber auch viele Probleme." }
          ],
          tip: "Nicht verwechseln mit 一边……一边…… (zwei Handlungen gleichzeitig, [[lesson:lesson-35]]): ❌ 我一方面吃饭，另一方面看电视。 → ✅ 我一边吃饭，一边看电视。"
        },
        {
          heading: "甚至 und 并且 — steigern und verknüpfen",
          text: "<strong>甚至</strong> (shènzhì) „sogar“ führt den äußersten, überraschendsten Fall ein. Es kann vor einem Verb, einem Teilsatz oder einem Nomen stehen; hebt es ein Nomen oder Subjekt hervor, folgt meist 也 oder 都. Oft setzt es nach 不但……，而且…… noch eine Stufe drauf. Ähnlich wirkt 连……也/都…… ([[lesson:lesson-13]]), das aber nur ein Satzglied hervorhebt. <strong>并且</strong> (bìngqiě) „und zudem“ verbindet zwei Verben mit gemeinsamem Objekt oder zwei Teilsätze; es ist etwas formeller als 而且 und häufig in Texten.",
          examples: [
            { cn: "他特别喜欢这部电影，甚至看了五遍。", pinyin: "Tā tèbié xǐhuan zhè bù diànyǐng, shènzhì kàn le wǔ biàn.", de: "Er mag diesen Film sehr – er hat ihn sogar fünfmal gesehen." },
            { cn: "这首歌非常有名，甚至三岁的孩子都会唱。", pinyin: "Zhè shǒu gē fēicháng yǒumíng, shènzhì sān suì de háizi dōu huì chàng.", de: "Das Lied ist sehr bekannt, sogar Dreijährige können es singen." },
            { cn: "他不但会说汉语，而且会写汉字，甚至能看懂中文报纸。", pinyin: "Tā búdàn huì shuō Hànyǔ, érqiě huì xiě Hànzì, shènzhì néng kàndǒng Zhōngwén bàozhǐ.", de: "Er spricht nicht nur Chinesisch, sondern kann auch Schriftzeichen schreiben und versteht sogar chinesische Zeitungen." },
            { cn: "她仔细地检查了报告，并且改正了几个错误。", pinyin: "Tā zǐxì de jiǎnchá le bàogào, bìngqiě gǎizhèng le jǐ ge cuòwù.", de: "Sie hat den Bericht sorgfältig geprüft und zudem einige Fehler korrigiert." },
            { cn: "学校讨论并且同意了我们的建议。", pinyin: "Xuéxiào tǎolùn bìngqiě tóngyì le wǒmen de jiànyì.", de: "Die Schule hat unseren Vorschlag besprochen und angenommen. (zwei Verben, ein Objekt)" }
          ],
          tip: "Anders als das deutsche „und“ verbindet 并且 keine einzelnen Nomen: ❌ 我买了苹果并且香蕉。 → ✅ 我买了苹果和香蕉。"
        },
        {
          heading: "此外, 另外 und 于是 — anreihen und weiterführen",
          text: "<strong>此外</strong> (cǐwài) und <strong>另外</strong> (lìngwài) leiten einen weiteren Punkt ein: „außerdem, darüber hinaus“. Sie stehen am Anfang eines Teilsatzes oder Satzes, oft gefolgt von 还, 也 oder 再. 此外 klingt eher schriftlich (Berichte, Ansagen, Briefe), 另外 ist auch im Gespräch üblich und kann zudem „andere(r)“ heißen: 另外一个人 – mit 此外 geht das nicht. <strong>于是</strong> (yúshì) führt eine Erzählung weiter: Das zweite Ereignis folgt auf das erste und wird von ihm ausgelöst – „daraufhin, also“. Es steht vor dem Subjekt des zweiten Teils.",
          examples: [
            { cn: "这个房间又大又安静，此外，房租也不贵。", pinyin: "Zhège fángjiān yòu dà yòu ānjìng, cǐwài, fángzū yě bú guì.", de: "Das Zimmer ist groß und ruhig, außerdem ist die Miete nicht hoch." },
            { cn: "参加这次活动不需要交钱，此外每个人还能得到一份小礼物。", pinyin: "Cānjiā zhè cì huódòng bù xūyào jiāo qián, cǐwài měi ge rén hái néng dédào yí fèn xiǎo lǐwù.", de: "Die Teilnahme an der Veranstaltung ist kostenlos, darüber hinaus bekommen alle ein kleines Geschenk." },
            { cn: "你去超市的时候买点儿牛奶，另外再买几个鸡蛋。", pinyin: "Nǐ qù chāoshì de shíhou mǎi diǎnr niúnǎi, lìngwài zài mǎi jǐ ge jīdàn.", de: "Kauf bitte Milch, wenn du in den Supermarkt gehst, und außerdem noch ein paar Eier." },
            { cn: "外面突然下起了大雨，于是我们在咖啡馆里多坐了一会儿。", pinyin: "Wàimian tūrán xià qǐ le dà yǔ, yúshì wǒmen zài kāfēiguǎn li duō zuò le yíhuìr.", de: "Draußen fing es plötzlich heftig an zu regnen, also blieben wir noch eine Weile im Café sitzen." },
            { cn: "她发现钱包不见了，于是马上给警察打了电话。", pinyin: "Tā fāxiàn qiánbāo bú jiàn le, yúshì mǎshàng gěi jǐngchá dǎ le diànhuà.", de: "Sie merkte, dass ihr Portemonnaie weg war, und rief daraufhin sofort die Polizei an." }
          ],
          tip: "于是 passt zu tatsächlichen Ereignissen, nicht zu allgemeinen Schlussfolgerungen oder Zuständen – dafür nimmt man 所以 ([[lesson:lesson-15]]): ❌ 他是北京人，于是很了解北京。 → ✅ 他是北京人，所以很了解北京。"
        }
      ]
    },
    // ── 为了 — Zweck und Ziel (lesson-56) ──────────
    {
      id: 'lesson-56',
      number: 36.5,
      title: "为了 — Zweck und Ziel",
      subtitle: "Um … zu, für, damit – und der Unterschied zu 因为",
      level: 'HSK3',
      grammarIds: ["g:为了","g:为了……，……","g:为²","g:为了……而……","g:……，好……"],
      intro: "Warum tust du etwas? Darauf gibt es zwei Arten von Antworten: einen <strong>Grund</strong> („weil es regnet“) und ein <strong>Ziel</strong> („um gesund zu bleiben“). Im Deutschen verschwimmt das manchmal – „für“ kann beides ausdrücken („für die Prüfung lernen“, „danke für die Hilfe“). Im Chinesischen trennst du sauber: <strong>因为</strong> (yīnwèi) nennt den Grund, <strong>为了</strong> (wèile) das Ziel. In dieser Lektion lernst du, wie du den Zweck mit 为了 an den Satzanfang stellst, wie du ihn mit 是为了 nachreichst und wie die knappe Präposition <strong>为</strong> (wèi) vor Gefühlsverben funktioniert. Ein wichtiger Unterschied zum Deutschen: Der Zweck steht im Chinesischen meist <em>vorn</em> – „Um gesund zu bleiben, joggt Papa jeden Tag“ ist die natürliche Reihenfolge. Zum Schluss gibt es einen Ausblick auf die gehobene Form 为了……而…… und die gesprochene Form ……，好…….",
      sections: [
        {
          heading: "为了……，…… — erst das Ziel, dann die Handlung",
          text: "Die Grundform: <strong>为了 + Zweck，(Subjekt +) Handlung</strong>. Der erste Teil nennt, was du erreichen willst, der zweite, was du dafür tust. Hinter 为了 steht meist eine Verbgruppe oder ein kurzer Satz, ein Komma trennt die beiden Teile. Das Subjekt steht im zweiten Teil oder schon vor 为了. Auch eine Verneinung ist möglich: 为了不迟到 „um nicht zu spät zu kommen“. Das Muster ist gesprochen wie geschrieben üblich.",
          examples: [
            { cn: "为了学好汉语，她每天都看中文电视节目。", pinyin: "Wèile xuéhǎo Hànyǔ, tā měi tiān dōu kàn Zhōngwén diànshì jiémù.", de: "Um gut Chinesisch zu lernen, sieht sie jeden Tag chinesisches Fernsehen." },
            { cn: "为了不让妈妈担心，他每天给家里打电话。", pinyin: "Wèile bú ràng māma dānxīn, tā měi tiān gěi jiā li dǎ diànhuà.", de: "Damit seine Mutter sich keine Sorgen macht, ruft er jeden Tag zu Hause an." },
            { cn: "为了早点儿到机场，我们五点就出门了。", pinyin: "Wèile zǎo diǎnr dào jīchǎng, wǒmen wǔ diǎn jiù chūmén le.", de: "Um früh am Flughafen zu sein, sind wir schon um fünf aus dem Haus gegangen." },
            { cn: "为了准备考试，他这个周末哪儿也没去。", pinyin: "Wèile zhǔnbèi kǎoshì, tā zhège zhōumò nǎr yě méi qù.", de: "Um sich auf die Prüfung vorzubereiten, ist er dieses Wochenende nirgendwohin gegangen." }
          ],
          tip: "Aussprache: 为了 heißt <strong>wèile</strong> mit viertem Ton – nicht wéi."
        },
        {
          heading: "为了 + Nomen und ……，是为了……",
          text: "为了 kann auch vor einem Nomen stehen: 为了孩子 „für die Kinder, um der Kinder willen“. Die Gruppe steht dann am Satzanfang oder nach dem Subjekt direkt vor dem Verb. Willst du den Zweck <em>nachreichen</em>, wie im Deutschen „…, um … zu“, sagst du <strong>……是为了……</strong>: Zuerst nennst du die Handlung, dann mit 是为了 ihren Zweck. Ohne 是 klingt ein nachgestelltes 为了 holprig.",
          examples: [
            { cn: "很多父母为了孩子，什么都愿意做。", pinyin: "Hěn duō fùmǔ wèile háizi, shénme dōu yuànyì zuò.", de: "Viele Eltern sind bereit, für ihre Kinder alles zu tun." },
            { cn: "她为了这次旅行存了一年的钱。", pinyin: "Tā wèile zhè cì lǚxíng cún le yì nián de qián.", de: "Für diese Reise hat sie ein ganzes Jahr lang gespart." },
            { cn: "我每天走路上班，是为了多锻炼身体。", pinyin: "Wǒ měi tiān zǒulù shàngbān, shì wèile duō duànliàn shēntǐ.", de: "Ich gehe jeden Tag zu Fuß zur Arbeit, um mich mehr zu bewegen." },
            { cn: "他这么努力工作，都是为了家人。", pinyin: "Tā zhème nǔlì gōngzuò, dōu shì wèile jiārén.", de: "Er arbeitet so hart – und das alles für seine Familie." }
          ],
          tip: "Den Zweck nachreichen: statt 我来中国为了学中文 besser ✅ 我来中国是为了学中文。 oder, mit dem Zweck vorn, ✅ 为了学中文，我来到了中国。"
        },
        {
          heading: "为了 oder 因为? — Ziel oder Grund",
          text: "Der häufigste Fehler: 为了 und 因为 verwechseln. <strong>因为</strong> blickt zurück auf eine Ursache, die schon besteht („weil“, [[lesson:lesson-15]]). <strong>为了</strong> blickt nach vorn auf ein Ziel, das du erreichen willst („um … zu“, „damit“). Ein einfacher Test: Passt im Deutschen „um … zu“ oder „damit“, nimm 为了; passt nur „weil“, nimm 因为. Regen, Krankheit oder Zeitmangel sind Gründe, keine Ziele.",
          examples: [
            { cn: "❌ 为了下雨，我们没去爬山。", pinyin: "", de: "Falsch: Regen ist ein Grund, kein Ziel." },
            { cn: "✅ 因为下雨，我们没去爬山。", pinyin: "Yīnwèi xià yǔ, wǒmen méi qù páshān.", de: "Weil es geregnet hat, sind wir nicht wandern gegangen." },
            { cn: "因为身体不好，他开始每天跑步。", pinyin: "Yīnwèi shēntǐ bù hǎo, tā kāishǐ měi tiān pǎobù.", de: "Weil es ihm gesundheitlich nicht gut ging, hat er angefangen, jeden Tag zu joggen. (Grund)" },
            { cn: "为了身体好一点儿，他开始每天跑步。", pinyin: "Wèile shēntǐ hǎo yìdiǎnr, tā kāishǐ měi tiān pǎobù.", de: "Um fitter zu werden, hat er angefangen, jeden Tag zu joggen. (Ziel)" }
          ],
          tip: "Merkhilfe: 因为 → <em>weil</em> (die Ursache liegt schon vor), 为了 → <em>um zu</em> (das Ziel liegt noch vor dir)."
        },
        {
          heading: "为 (wèi) — sich für, über, um etwas …",
          text: "Die knappe Präposition <strong>为</strong> (wèi) nennt ebenfalls Grund oder Zweck, steht aber besonders oft vor <strong>Gefühlsverben</strong>: 为……担心 „sich um … sorgen“, 为……高兴 „sich für … freuen“, 为……生气 „sich über … ärgern“. Beim Anstoßen nennt sie das Ziel: 为……干杯 „auf …!“. Die Gruppe 为 + Nomen steht vor dem Verb. 为 klingt knapper und etwas schriftlicher als 为了; einen ganzen Grundsatz leitet dagegen 因为 ein.",
          examples: [
            { cn: "别为这件事难过了。", pinyin: "Bié wèi zhè jiàn shì nánguò le.", de: "Sei doch nicht mehr traurig wegen dieser Sache." },
            { cn: "我们都为你感到高兴。", pinyin: "Wǒmen dōu wèi nǐ gǎndào gāoxìng.", de: "Wir freuen uns alle für dich." },
            { cn: "妈妈总是为我的工作担心。", pinyin: "Māma zǒngshì wèi wǒ de gōngzuò dānxīn.", de: "Meine Mutter macht sich ständig Sorgen um meine Arbeit." },
            { cn: "为大家的健康干杯！", pinyin: "Wèi dàjiā de jiànkāng gānbēi!", de: "Auf die Gesundheit aller!" }
          ],
          tip: "Achte auf den Ton: In dieser Bedeutung heißt 为 <strong>wèi</strong> (vierter Ton). Mit zweitem Ton, wéi, ist es ein anderes Wort („sein, als“), etwa in 认为 (rènwéi) „meinen“."
        },
        {
          heading: "为了……而…… und ……，好…… — gehoben und gesprochen",
          text: "Ausblick (HSK 4): Zwei weitere Formen. <strong>为了 + Zweck + 而 + Handlung</strong> steht in einem Satz ohne Komma; 而 (ér) kommt direkt vor das Verb. Die Form klingt gehoben und ist typisch für Texte, Reden und Nachrichten. Ganz anders <strong>Handlung，(Subjekt +) 好 + Verb</strong>: Hier steht der Zweck hinten, 好 (hǎo) direkt vor dem Verb des zweiten Teils, und es bedeutet „damit … kann“. Diese Form ist typisch für die gesprochene Sprache, oft nach einer Bitte oder einem Rat.",
          examples: [
            { cn: "她为了照顾孩子而放弃了工作。", pinyin: "Tā wèile zhàogù háizi ér fàngqì le gōngzuò.", de: "Um sich um ihr Kind zu kümmern, hat sie ihre Arbeit aufgegeben." },
            { cn: "我们应该为了自己的理想而努力。", pinyin: "Wǒmen yīnggāi wèile zìjǐ de lǐxiǎng ér nǔlì.", de: "Wir sollten uns für unsere eigenen Ideale einsetzen." },
            { cn: "你把手机号码给我，我好通知你。", pinyin: "Nǐ bǎ shǒujī hàomǎ gěi wǒ, wǒ hǎo tōngzhī nǐ.", de: "Gib mir deine Handynummer, damit ich dir Bescheid sagen kann." },
            { cn: "多带一件衣服，晚上冷了好穿。", pinyin: "Duō dài yí jiàn yīfu, wǎnshang lěng le hǎo chuān.", de: "Nimm noch etwas zum Anziehen mit, damit du abends etwas überziehen kannst, wenn es kalt wird." }
          ],
          tip: "而 nicht durch 所以 ersetzen – 所以 leitet eine Folge ein, keinen Zweck: ❌ 她为了照顾孩子所以放弃了工作。 → ✅ 她为了照顾孩子而放弃了工作。 Das 好 vor dem Verb heißt hier nicht „gut“, sondern „damit“."
        }
      ]
    },
    // ── Gradkomplemente: 得很, 极了, 死了 (lesson-57) ──────────
    {
      id: 'lesson-57',
      number: 43.7,
      title: "Gradkomplemente: 得很, 极了, 死了",
      subtitle: "Sehr, total, zum Sterben – der hohe Grad hinter dem Adjektiv",
      level: 'HSK3/HSK4',
      grammarIds: ["g:形容词+得很","g:形容词/动词+极了/坏了","g:形容词/心理动词+死了/厉害","g:多么","g:程度副词@HSK4"],
      intro: "Im Deutschen steht die Verstärkung fast immer <em>vor</em> dem Adjektiv: „sehr müde“, „total lecker“. Mit 很, 太, 真 und 非常 ([[lesson:lesson-27]]) machst du das im Chinesischen genauso. Daneben gibt es aber eine zweite, sehr lebendige Möglichkeit: <strong>Gradkomplemente</strong> (程度补语), die <em>hinter</em> dem Adjektiv oder Gefühlsverb stehen – 忙得很, 好极了, 累坏了, 饿死了. Sie klingen kräftiger und gefühlsbetonter als 很 und gehören vor allem in die gesprochene Sprache. Grenze sie vom Zustandskomplement aus [[lesson:lesson-8]] ab: 她说得很好 beschreibt, <em>wie</em> jemand etwas tut; 她忙得很 sagt nur, <em>wie sehr</em> etwas zutrifft. Zum Schluss lernst du den Ausruf mit 多么 und weitere Gradadverbien wie 十分, 更加, 稍微 und 尤其, die wieder vor dem Adjektiv stehen.",
      sections: [
        {
          heading: "Adjektiv + 得很 — sehr, richtig",
          text: "<strong>得很</strong> (de hěn) hinter einem Adjektiv verstärkt es: 忙得很 „sehr beschäftigt“, 冷得很 „richtig kalt“. Es klingt kräftiger und umgangssprachlicher als 很 + Adjektiv. Auch Gefühlsverben können davorstehen (喜欢得很). Davor steht kein weiteres Gradadverb, und die Form wird nicht als Attribut vor einem Nomen gebraucht; sie steht meist als Prädikat am Ende eines Satzes oder Teilsatzes. Achtung: Folgt auf ein Handlungsverb wie 说 oder 写 + 得 eine Beschreibung (说得很好), liegt dagegen ein Zustandskomplement vor ([[lesson:lesson-8]]).",
          examples: [
            { cn: "这几天天气热得很。", pinyin: "Zhè jǐ tiān tiānqì rè de hěn.", de: "In den letzten Tagen ist es richtig heiß." },
            { cn: "你放心，我身体好得很。", pinyin: "Nǐ fàngxīn, wǒ shēntǐ hǎo de hěn.", de: "Keine Sorge, mir geht es bestens." },
            { cn: "那个地方远得很，坐车要三个小时。", pinyin: "Nàge dìfang yuǎn de hěn, zuò chē yào sān ge xiǎoshí.", de: "Der Ort ist sehr weit weg, mit dem Auto braucht man drei Stunden." },
            { cn: "她说汉语说得很好。", pinyin: "Tā shuō Hànyǔ shuō de hěn hǎo.", de: "Sie spricht sehr gut Chinesisch. (Zustandskomplement: Wie spricht sie?)" }
          ],
          tip: "Doppelt verstärken geht nicht: ❌ 他很忙得很。 → ✅ 他忙得很。 oder ✅ 他很忙。 Gesprochen kann 好得很！ auch ironisch klingen: „Na prima!“"
        },
        {
          heading: "极了 und 坏了 — äußerst, total",
          text: "<strong>极了</strong> (jí le) und <strong>坏了</strong> (huài le) drücken einen noch höheren Grad aus und stehen direkt hinter dem Adjektiv oder Gefühlsverb. 极了 passt zu fast allen Eigenschaften, besonders zu positiven: 好极了 „ausgezeichnet“. 坏了 steht vor allem bei körperlichen oder seelischen Zuständen und klingt sehr emotional: 累坏了 „völlig erschöpft“, 急坏了 „außer sich vor Sorge“; auch Freude ist möglich (高兴坏了). Bei Bewertungen wie 好 oder 漂亮 steht kein 坏了. Beide Formen sind umgangssprachlich und stehen am Satzende.",
          examples: [
            { cn: "这个主意好极了！", pinyin: "Zhège zhǔyi hǎo jí le!", de: "Die Idee ist ausgezeichnet!" },
            { cn: "这条裙子漂亮极了。", pinyin: "Zhè tiáo qúnzi piàoliang jí le.", de: "Dieser Rock ist wunderschön." },
            { cn: "看到大海，孩子们高兴极了。", pinyin: "Kàndào dàhǎi, háizimen gāoxìng jí le.", de: "Als die Kinder das Meer sahen, freuten sie sich riesig." },
            { cn: "爬了一天山，大家都累坏了。", pinyin: "Pá le yì tiān shān, dàjiā dōu lèi huài le.", de: "Nach einem ganzen Tag Bergsteigen waren alle völlig erschöpft." },
            { cn: "找不到孩子，妈妈急坏了。", pinyin: "Zhǎo bu dào háizi, māma jí huài le.", de: "Die Mutter konnte ihr Kind nicht finden und war außer sich vor Sorge." }
          ],
          tip: "坏了 kann auch „kaputt“ bedeuten (Ergebniskomplement): 手机摔坏了 „Das Handy ist beim Runterfallen kaputtgegangen.“ Grob abgestuft: 很累 &lt; 累得很 &lt; 累极了/累坏了."
        },
        {
          heading: "死了 und 得厉害 — schrecklich, furchtbar",
          text: "<strong>死了</strong> (sǐ le) folgt direkt, ohne 得: 累死了 „todmüde“, 饿死了 „ich verhungere gleich“. Es übertreibt stark, ist sehr umgangssprachlich und steht meist bei unangenehmen Zuständen, aber auch bei Freude (高兴死了). Ein Pronomen kann dazwischentreten: 气死我了 „das macht mich wahnsinnig“. <strong>厉害</strong> (lìhai) wird mit 得 angeschlossen: 疼得厉害. Es klingt sachlicher und beschreibt meist Beschwerden oder starke Gefühle. Beide Formen werden nicht verneint.",
          examples: [
            { cn: "饿死了，我们快去吃饭吧！", pinyin: "È sǐ le, wǒmen kuài qù chīfàn ba!", de: "Ich verhungere gleich, lass uns schnell essen gehen!" },
            { cn: "这个电影无聊死了。", pinyin: "Zhège diànyǐng wúliáo sǐ le.", de: "Der Film ist todlangweilig." },
            { cn: "他又迟到了，气死我了！", pinyin: "Tā yòu chídào le, qì sǐ wǒ le!", de: "Er ist schon wieder zu spät – das macht mich wahnsinnig!" },
            { cn: "昨天晚上我咳嗽得厉害，一夜没睡好。", pinyin: "Zuótiān wǎnshang wǒ késou de lìhai, yí yè méi shuì hǎo.", de: "Gestern Abend hatte ich schlimmen Husten und habe die ganze Nacht schlecht geschlafen." },
            { cn: "考试前她紧张得厉害。", pinyin: "Kǎoshì qián tā jǐnzhāng de lìhai.", de: "Vor der Prüfung war sie furchtbar nervös." }
          ],
          tip: "死了 ist Alltagssprache unter Freunden und in der Familie – in einem formellen Text wirkt es fehl am Platz. Nicht verwechseln mit 死 als Ergebniskomplement: 打死 heißt wörtlich „totschlagen“."
        },
        {
          heading: "多么 — wie …!",
          text: "<strong>多么</strong> (duōme) leitet einen Ausruf ein und betont einen sehr hohen Grad. Es steht vor einem Adjektiv oder einem Gefühlsverb wie 想 oder 希望; am Satzende steht oft 啊. Gegenüber dem umgangssprachlichen 多 oder 真 wirkt 多么 gefühlvoller und etwas gehobener – typisch für Erzählungen, Reden und Lieder. In einer nüchternen Aussage nimmt man stattdessen 很 oder 非常. 多么 fragt nicht nach einem Ausmaß; dafür steht 多 + Adjektiv: 多高 „wie hoch?“.",
          examples: [
            { cn: "你看，今天的天空多么蓝啊！", pinyin: "Nǐ kàn, jīntiān de tiānkōng duōme lán a!", de: "Schau mal, wie blau der Himmel heute ist!" },
            { cn: "我多么想回到小时候啊！", pinyin: "Wǒ duōme xiǎng huídào xiǎoshíhou a!", de: "Wie gern wäre ich noch einmal ein Kind!" },
            { cn: "这是一个多么美丽的城市啊！", pinyin: "Zhè shì yí ge duōme měilì de chéngshì a!", de: "Was für eine schöne Stadt!" },
            { cn: "这座山有多高？", pinyin: "Zhè zuò shān yǒu duō gāo?", de: "Wie hoch ist dieser Berg? (Frage nach dem Ausmaß: 多, nicht 多么)" }
          ],
          tip: "Mit 不管 oder 无论 bedeutet 多么 „egal wie …“: 不管多么忙 „egal wie beschäftigt“ ([[lesson:lesson-44]])."
        },
        {
          heading: "十分, 更加, 稍微, 尤其 — weitere Gradadverbien",
          text: "Diese Gradadverbien stehen wie 很 <em>vor</em> dem Adjektiv oder Verb. <strong>十分</strong> (shífēn) „sehr, äußerst“ ist etwas formeller als 很. <strong>更加</strong> (gèngjiā) „noch mehr“ steht bei Vergleichen und Entwicklungen, meist vor zweisilbigen Wörtern. <strong>稍微</strong> (shāowēi) „ein bisschen“ hat hinter dem Adjektiv oft 一点儿 oder 一些; das kurze 稍 (shāo) ist schriftsprachlich, kennt man aber aus 稍等. <strong>尤其</strong> (yóuqí) „besonders“ hebt ein Glied aus einer Gruppe hervor, oft als 尤其是.",
          examples: [
            { cn: "听到这个消息，他十分吃惊。", pinyin: "Tīngdào zhège xiāoxi, tā shífēn chījīng.", de: "Als er die Nachricht hörte, war er äußerst überrascht." },
            { cn: "下了一场雨，空气更加新鲜了。", pinyin: "Xià le yì chǎng yǔ, kōngqì gèngjiā xīnxiān le.", de: "Nach dem Regen ist die Luft noch frischer geworden." },
            { cn: "这件衣服稍微大了一点儿。", pinyin: "Zhè jiàn yīfu shāowēi dà le yìdiǎnr.", de: "Dieses Kleidungsstück ist ein bisschen zu groß." },
            { cn: "我喜欢吃水果，尤其是西瓜。", pinyin: "Wǒ xǐhuan chī shuǐguǒ, yóuqí shì xīguā.", de: "Ich esse gern Obst, vor allem Wassermelone." },
            { cn: "请稍等，我马上回来。", pinyin: "Qǐng shāo děng, wǒ mǎshàng huílai.", de: "Einen Moment bitte, ich bin gleich zurück." }
          ],
          tip: "Gradadverb vorn und Gradkomplement hinten schließen sich aus: ❌ 十分好极了。 → ✅ 十分好。 oder ✅ 好极了。"
        }
      ]
    },
    // ── 让 und 使: etwas bewirken – Pivot-Sätze (兼语句) (lesson-58) ──────────
    {
      id: 'lesson-58',
      number: 44.7,
      title: "让 und 使: etwas bewirken – Pivot-Sätze (兼语句)",
      subtitle: "Ursache, Lob und Kritik, Wahl in eine Rolle",
      level: 'HSK4',
      grammarIds: ["g:表致使：主语+使/让+人称代词+动词短语","g:表爱憎义：主语+表扬/批评+宾语1+动词+宾语2","g:表称谓或认定义：主语+收/选+宾语1+做/当/为+宾语2","g:引出施事、受事@HSK4"],
      intro: "In diesen Sätzen spielt eine Person zwei Rollen zugleich: Sie ist Objekt des ersten Verbs und Subjekt des zweiten. Die chinesische Grammatik nennt das <strong>兼语句</strong> (jiānyǔjù, „Pivot-Satz“). In 这件事让我很感动 ist 我 zugleich die Person, die 让 betrifft, und die Person, die gerührt ist. Du brauchst diese Muster, wenn du sagen willst, was etwas in dir auslöst (<strong>使/让</strong>), wofür jemand gelobt oder kritisiert wird (<strong>表扬/批评</strong>) und wozu jemand gewählt wird (<strong>选……当</strong>). Das Deutsche braucht dafür Nebensätze mit „dass“ oder „weil“ oder Präpositionen wie „zu“ und „als“ – im Chinesischen reihen sich die Verben einfach aneinander, ganz ohne Bindewort. Zum Schluss sortierst du die verschiedenen Rollen von 让 und 叫 und lernst zwei schriftsprachliche Helfer kennen: 由 und 将.",
      sections: [
        {
          heading: "使/让 + Person + Verbphrase — eine Ursache löst etwas aus",
          text: "Im Ursachen-Satz ist das Subjekt meist kein handelnder Mensch, sondern ein Ereignis, eine Nachricht oder ein Erlebnis. <strong>使</strong> (shǐ) bzw. <strong>让</strong> (ràng) zeigen, dass es bei einer Person etwas auslöst. Danach folgt die betroffene Person – oft ein Pronomen wie 我, 他 oder 大家 – und was in ihr vorgeht, häufig ein Gefühl oder eine Einsicht. 让 ist neutral und gesprochen, 使 schriftsprachlich, noch formeller ist <strong>令</strong> (lìng). Im Deutschen dreht man solche Sätze oft um: „Darüber haben sich alle gefreut.“",
          examples: [
            { cn: "这个消息让大家都很高兴。", pinyin: "Zhège xiāoxi ràng dàjiā dōu hěn gāoxìng.", de: "Über diese Nachricht haben sich alle sehr gefreut." },
            { cn: "他的故事使我很感动。", pinyin: "Tā de gùshi shǐ wǒ hěn gǎndòng.", de: "Seine Geschichte hat mich sehr berührt." },
            { cn: "这次经历让我明白了自己真正想要什么。", pinyin: "Zhè cì jīnglì ràng wǒ míngbai le zìjǐ zhēnzhèng xiǎng yào shénme.", de: "Durch diese Erfahrung habe ich verstanden, was ich wirklich will." },
            { cn: "长时间看手机会让人觉得很累。", pinyin: "Cháng shíjiān kàn shǒujī huì ràng rén juéde hěn lèi.", de: "Wer lange aufs Handy schaut, wird müde." },
            { cn: "他的回答令我很失望。", pinyin: "Tā de huídá lìng wǒ hěn shīwàng.", de: "Seine Antwort hat mich sehr enttäuscht. (令: formell)" }
          ],
          tip: "Hier <em>will</em> niemand etwas – es geschieht durch die Ursache. Gibt ein Mensch eine Anweisung, passt 让 (老师让我们写作业); 使 klingt dann falsch. Merke: 使 = Ursache, 让 = Ursache <em>oder</em> Anweisung."
        },
        {
          heading: "表扬/批评 + Person + Verb — loben und kritisieren, wofür",
          text: "Nach <strong>表扬</strong> (biǎoyáng, „loben“) oder <strong>批评</strong> (pīpíng, „kritisieren“) steht die Person und direkt dahinter, was sie tut oder getan hat – das ist der Grund für Lob oder Kritik. Wo das Deutsche „dafür, dass“ oder „weil“ braucht, steht im Chinesischen kein Bindewort. Genauso gebaut sind Verben der Zuneigung oder Ablehnung wie <strong>感谢</strong> (gǎnxiè, „danken“), <strong>讨厌</strong> (tǎoyàn, „nicht ausstehen können“) und <strong>怪</strong> (guài, „jemandem die Schuld geben“). Der zweite Teil beschreibt oft eine Gewohnheit (总是, 经常) oder eine abgeschlossene Handlung mit 了.",
          examples: [
            { cn: "老师表扬他作业写得很认真。", pinyin: "Lǎoshī biǎoyáng tā zuòyè xiě de hěn rènzhēn.", de: "Die Lehrkraft hat ihn dafür gelobt, dass er seine Hausaufgaben so sorgfältig macht." },
            { cn: "爸爸批评弟弟花钱太多。", pinyin: "Bàba pīpíng dìdi huā qián tài duō.", de: "Papa hat meinen kleinen Bruder kritisiert, weil er zu viel Geld ausgibt." },
            { cn: "我很感谢你帮了我这么多。", pinyin: "Wǒ hěn gǎnxiè nǐ bāng le wǒ zhème duō.", de: "Ich danke dir sehr, dass du mir so viel geholfen hast." },
            { cn: "她讨厌别人总是问她的年龄。", pinyin: "Tā tǎoyàn biérén zǒngshì wèn tā de niánlíng.", de: "Sie kann es nicht ausstehen, dass andere sie ständig nach ihrem Alter fragen." },
            { cn: "别怪他来晚了，路上堵车。", pinyin: "Bié guài tā lái wǎn le, lùshang dǔchē.", de: "Mach ihm keinen Vorwurf daraus, dass er zu spät gekommen ist – unterwegs war Stau." }
          ],
          tip: "Ein „weil“-Wort brauchst du nicht: Der Grund folgt direkt auf die Person. Willst du ihn doch ausdrücklich mit 因为 nennen, steht er üblicherweise in einem eigenen Teilsatz – davor oder danach: 因为他帮助了同学，老师表扬了他。 / 老师表扬了他，因为他帮助了同学。"
        },
        {
          heading: "选/收 + Person + 当/做/为 + Rolle — jemanden zu etwas machen",
          text: "Hier wird jemand in eine Rolle eingesetzt. Die Person nach <strong>选</strong> (xuǎn, „wählen“) oder <strong>收</strong> (shōu, „aufnehmen“) ist zugleich Subjekt von <strong>当/做/为</strong> („als … fungieren“); am Ende steht die Rolle. 当 (dāng) und 做 (zuò) sind neutral und gesprochen, 为 (wéi, 2. Ton) ist schriftsprachlich. 选 passt zu Ämtern wie 班长 oder 代表, 收 zu Rollen wie 徒弟 („Lehrling“) oder 学生. Ähnlich gebaut ist 称 + Person + 为 „jemanden … nennen“; im Alltag sagt man dafür meist einfach 叫 + Person + Name.",
          examples: [
            { cn: "大家选小李当组长。", pinyin: "Dàjiā xuǎn Xiǎo Lǐ dāng zǔzhǎng.", de: "Alle haben Xiao Li zur Gruppenleitung gewählt." },
            { cn: "这次我们选谁做代表？", pinyin: "Zhè cì wǒmen xuǎn shéi zuò dàibiǎo?", de: "Wen wählen wir diesmal als Vertretung?" },
            { cn: "王教授收她当研究生了。", pinyin: "Wáng jiàoshòu shōu tā dāng yánjiūshēng le.", de: "Prof. Wang hat sie als Masterstudentin angenommen." },
            { cn: "大会选他为主席。", pinyin: "Dàhuì xuǎn tā wéi zhǔxí.", de: "Die Versammlung wählte ihn zum Vorsitzenden. (为: schriftsprachlich)" },
            { cn: "大家都叫她“开心果”。", pinyin: "Dàjiā dōu jiào tā “kāixīnguǒ”.", de: "Alle nennen sie „Stimmungskanone“. (开心果, wörtlich „Pistazie“: jemand, der gute Laune verbreitet)" }
          ],
          tip: "❌ 选她是班长 – 是 passt hier nicht; nimm 当, 做 oder 为. Und achte auf den Ton: 当 hat in diesem Muster den 1. Ton (dāng), 为 den 2. Ton (wéi)."
        },
        {
          heading: "让, 叫, 由, 将 — wer handelt, wer ist betroffen?",
          text: "<strong>让</strong> hat drei Gebrauchsweisen: Anweisung („jemanden etwas tun lassen“), Ursache (wie oben) und umgangssprachliches Passiv. Auch <strong>叫</strong> (jiào) kann „veranlassen“ und umgangssprachlich Passiv bedeuten; welche Lesart gemeint ist, zeigt der Kontext. Im Passiv muss nach 叫/让 – anders als bei 被 – genannt werden, wer handelt, notfalls mit 人 „jemand“ (mehr zum Passiv in [[lesson:lesson-5]]). Dazu kommen zwei schriftsprachliche Präpositionen: <strong>由</strong> (yóu) nennt, wer für eine Aufgabe zuständig ist; <strong>将</strong> (jiāng) entspricht 把 ([[lesson:lesson-4]]) und ist typisch für Anweisungen und Durchsagen.",
          examples: [
            { cn: "妈妈让我去买菜。", pinyin: "Māma ràng wǒ qù mǎi cài.", de: "Mama hat mich zum Gemüseeinkaufen geschickt. (Anweisung)" },
            { cn: "这件事让我很头疼。", pinyin: "Zhè jiàn shì ràng wǒ hěn tóuténg.", de: "Diese Sache bereitet mir Kopfzerbrechen. (Ursache)" },
            { cn: "花瓶叫猫打破了。", pinyin: "Huāpíng jiào māo dǎpò le.", de: "Die Katze hat die Vase kaputt gemacht. (umgangssprachliches Passiv)" },
            { cn: "这个项目由小王负责。", pinyin: "Zhège xiàngmù yóu Xiǎo Wáng fùzé.", de: "Für dieses Projekt ist Xiao Wang zuständig." },
            { cn: "请将垃圾放进垃圾桶。", pinyin: "Qǐng jiāng lājī fàngjìn lājītǒng.", de: "Bitte Abfall in den Mülleimer werfen. (Hinweisschild)" }
          ],
          tip: "Faustregel: Steht vorne das, dem etwas <em>passiert</em> ist (花瓶), und hinten ein Verb mit Ergebnis (打破了), ist es Passiv. Steht vorne eine Ursache und hinten ein Gefühl oder eine Einsicht (很头疼), ist es der Ursachen-Satz."
        },
        {
          heading: "Typische Fehler",
          text: "Drei Stolpersteine kommen bei deutschsprachigen Lernenden besonders oft vor: 是 statt 当/做/为 beim Wählen, 使 für die Anweisung eines Menschen und ein Passiv mit 叫/让, bei dem die handelnde Person fehlt.",
          examples: [
            { cn: "❌ 我们选老马是代表。", pinyin: "", de: "是 passt nicht – das Muster braucht 当, 做 oder 为." },
            { cn: "✅ 我们选老马做代表。", pinyin: "Wǒmen xuǎn Lǎo Mǎ zuò dàibiǎo.", de: "Wir wählen Lao Ma zu unserer Vertretung." },
            { cn: "❌ 经理使我们周末加班。", pinyin: "", de: "使 beschreibt eine Ursache, keine Anweisung eines Menschen." },
            { cn: "✅ 经理让我们周末加班。", pinyin: "Jīnglǐ ràng wǒmen zhōumò jiābān.", de: "Die Abteilungsleitung lässt uns am Wochenende Überstunden machen." }
          ],
          tip: "Beim Passiv mit 叫/让 darf die handelnde Person nicht fehlen: ❌ 我的伞让拿走了 → ✅ 我的伞让人拿走了 „Jemand hat meinen Schirm mitgenommen.“ Bei 被 darfst du sie dagegen weglassen: 我的伞被拿走了。"
        }
      ]
    },
    // ── Haltung im Satz: 到底, 竟然, 只好, 差点儿, 并 (lesson-59) ──────────
    {
      id: 'lesson-59',
      number: 44.8,
      title: "Haltung im Satz: 到底, 竟然, 只好, 差点儿, 并",
      subtitle: "Nachfragen, staunen, zurückweisen, vermuten",
      level: 'HSK4',
      grammarIds: ["g:语气副词@HSK4","g:到底","g:究竟","g:竟然","g:只好","g:差（一）点儿","g:并¹","g:也许","g:恐怕"],
      intro: "Modaladverbien verraten, wie die sprechende Person zu dem steht, was sie sagt: Sie drängt auf eine Antwort (<strong>到底</strong>, <strong>究竟</strong>), staunt (<strong>竟然</strong>), weist eine Annahme zurück (<strong>并</strong>不), fügt sich in eine Notlösung (<strong>只好</strong>), ist knapp an etwas vorbeigeschrammt (<strong>差点儿</strong>) oder äußert eine vorsichtige Vermutung (<strong>也许</strong>, <strong>恐怕</strong>). Im Deutschen übernehmen das oft kleine Wörter wie „denn“, „eigentlich“, „ja“ oder „wohl“, die recht frei im Satz stehen. Die chinesischen Adverbien haben dagegen meist einen festen Platz: nach dem Subjekt, direkt vor dem Prädikat; von den Adverbien hier stehen nur 也许, 恐怕 und 到底/究竟 (vor einem Fragewort als Subjekt) auch am Satzanfang. Nebenbei lernst du 确实, 正好 und 千万 kennen; 难道 für rhetorische Fragen behandelt [[lesson:lesson-53]].",
      sections: [
        {
          heading: "到底 und 究竟 — „denn nun eigentlich?“",
          text: "<strong>到底</strong> (dàodǐ) verstärkt eine Frage, auf die du endlich eine klare Antwort willst: „denn nun, eigentlich, überhaupt“. Es steht in Fragen mit Fragewort, in A-不-A-Fragen oder in Alternativfragen mit 还是. Ist das Fragewort selbst das Subjekt, steht 到底 am Satzanfang. Der Ton ist oft ungeduldig. In Aussagen bedeutet 到底 „schließlich doch“. <strong>究竟</strong> (jiūjìng) wird in Fragen genauso verwendet, klingt aber gehobener und sachlicher – typisch für Texte und ernsthafte Gespräche.",
          examples: [
            { cn: "你到底喜欢不喜欢他？", pinyin: "Nǐ dàodǐ xǐhuan bu xǐhuan tā?", de: "Magst du ihn nun eigentlich oder nicht?" },
            { cn: "我们到底是坐飞机还是坐火车？", pinyin: "Wǒmen dàodǐ shì zuò fēijī háishi zuò huǒchē?", de: "Fliegen wir denn nun oder nehmen wir den Zug?" },
            { cn: "到底谁说的是真的？", pinyin: "Dàodǐ shéi shuō de shì zhēn de?", de: "Wer sagt denn nun die Wahrheit?" },
            { cn: "我劝了他半天，他到底还是同意了。", pinyin: "Wǒ quàn le tā bàntiān, tā dàodǐ háishi tóngyì le.", de: "Ich habe ewig auf ihn eingeredet – am Ende hat er doch zugestimmt." },
            { cn: "这个问题究竟应该怎么解决？", pinyin: "Zhège wèntí jiūjìng yīnggāi zěnme jiějué?", de: "Wie soll dieses Problem letztlich gelöst werden? (究竟: gehoben)" }
          ],
          tip: "❌ 你到底去吗？ → ✅ 你到底去不去？ 到底 und 究竟 brauchen eine Frage mit Fragewort, A-不-A oder 还是 – mit 吗 passen sie nicht. Die Bedeutung „schließlich doch“ hat nur 到底, 究竟 wird so kaum verwendet."
        },
        {
          heading: "竟然 — wider Erwarten",
          text: "<strong>竟然</strong> (jìngrán) zeigt, dass etwas den Erwartungen widerspricht: „wider Erwarten, tatsächlich, zu meiner Überraschung“. Die Überraschung kann positiv oder negativ sein. 竟然 steht meist nach dem Subjekt direkt vor dem Prädikat und bezieht sich auf Tatsachen – auf Geschehenes oder Bestehendes, nicht auf Pläne oder Wünsche. Oft steht 没想到 „unerwartet“ davor, oder 竟然 erscheint in einer empörten Frage.",
          examples: [
            { cn: "我等了他一个小时，他竟然没来。", pinyin: "Wǒ děng le tā yí ge xiǎoshí, tā jìngrán méi lái.", de: "Ich habe eine Stunde auf ihn gewartet, und er ist tatsächlich nicht gekommen." },
            { cn: "才学了半年，他的中文竟然说得这么好！", pinyin: "Cái xué le bànnián, tā de Zhōngwén jìngrán shuō de zhème hǎo!", de: "Er lernt erst seit einem halben Jahr – und spricht tatsächlich schon so gut Chinesisch!" },
            { cn: "没想到这家小饭馆的菜竟然这么好吃。", pinyin: "Méi xiǎngdào zhè jiā xiǎo fànguǎn de cài jìngrán zhème hǎochī.", de: "Wer hätte gedacht, dass das Essen in diesem kleinen Lokal so gut ist." },
            { cn: "你竟然忘了我的生日？", pinyin: "Nǐ jìngrán wàng le wǒ de shēngrì?", de: "Du hast tatsächlich meinen Geburtstag vergessen?" }
          ],
          tip: "Nicht verwechseln: <strong>果然</strong> (guǒrán) meint das Gegenteil – „wie erwartet“. Und passt etwas nicht überraschend, sondern einfach gut zusammen, sagst du <strong>正好</strong> (zhènghǎo, „zufällig gerade, wie gerufen“): 我正好也要去超市 „ich will sowieso gerade auch zum Supermarkt“. Ausblick (HSK 5): 居然 (jūrán) ist fast gleichbedeutend mit 竟然 und etwas umgangssprachlicher."
        },
        {
          heading: "并 + 不/没（有） — keineswegs; 确实 — in der Tat",
          text: "<strong>并</strong> (bìng) steht direkt vor 不 oder 没（有） und verstärkt die Verneinung: „keineswegs, gar nicht, eigentlich nicht“. Damit weist du eine Annahme oder Erwartung zurück – man könnte meinen, dass …, in Wirklichkeit ist es aber nicht so. Deshalb steht oft ein Gegensatz im Kontext, etwa mit 其实 oder 只是. Ohne folgende Verneinung hat 并 diese Bedeutung nicht. Das Gegenstück ist <strong>确实</strong> (quèshí, „wirklich, in der Tat“): Es bestätigt eine Annahme, statt sie zurückzuweisen.",
          examples: [
            { cn: "他看起来很严肃，其实并不难相处。", pinyin: "Tā kàn qilai hěn yánsù, qíshí bìng bù nán xiāngchǔ.", de: "Er wirkt streng, ist aber eigentlich gar nicht schwierig im Umgang." },
            { cn: "这件事我并没有忘，只是太忙了。", pinyin: "Zhè jiàn shì wǒ bìng méiyǒu wàng, zhǐshì tài máng le.", de: "Ich habe die Sache keineswegs vergessen, ich war nur zu beschäftigt." },
            { cn: "贵的东西并不一定好。", pinyin: "Guì de dōngxi bìng bù yídìng hǎo.", de: "Teure Sachen sind keineswegs automatisch gut." },
            { cn: "学中文并没有你想的那么难。", pinyin: "Xué Zhōngwén bìng méiyǒu nǐ xiǎng de nàme nán.", de: "Chinesisch zu lernen ist gar nicht so schwer, wie du denkst." },
            { cn: "大家都说这本书好，我看了，确实不错。", pinyin: "Dàjiā dōu shuō zhè běn shū hǎo, wǒ kàn le, quèshí búcuò.", de: "Alle sagen, das Buch sei gut – ich habe es gelesen, und es ist wirklich gut. (确实: bestätigt)" }
          ],
          tip: "根本 (gēnběn) „überhaupt nicht“ verneint schärfer und emotionaler, 并 klingt sachlich und richtigstellend: 我并不同意 „ich bin keineswegs einverstanden“ – 我根本不同意 „ich bin absolut nicht einverstanden!“ Ohne 不/没 ist 并 meist die Konjunktion „und (außerdem)“."
        },
        {
          heading: "只好 und 差点儿 — Notlösung und Beinahe",
          text: "<strong>只好</strong> (zhǐhǎo) zeigt, dass jemand etwas tut, weil es keine bessere Möglichkeit gibt: „bleibt nichts anderes übrig, als …“. Meist nennt der erste Teilsatz den Umstand, der dazu zwingt. <strong>差点儿</strong> (chàdiǎnr) oder <strong>差一点儿</strong> heißt „beinahe, um ein Haar“: Etwas wäre fast passiert, ist es aber nicht. Bei Unerwünschtem bedeuten 差点儿 + Verb und 差点儿没 + Verb dasselbe. Bei Erwünschtem unterscheiden sie sich: 差点儿 + Verb – leider nicht geklappt; 差点儿没 + Verb – zum Glück doch geklappt.",
          examples: [
            { cn: "下大雨了，比赛只好改到下周。", pinyin: "Xià dà yǔ le, bǐsài zhǐhǎo gǎidào xià zhōu.", de: "Es regnete stark, also musste das Spiel auf nächste Woche verschoben werden." },
            { cn: "钥匙忘在家里了，我只好等妈妈回来。", pinyin: "Yàoshi wàng zài jiāli le, wǒ zhǐhǎo děng māma huílai.", de: "Ich hatte den Schlüssel zu Hause vergessen und musste warten, bis Mama zurückkam." },
            { cn: "我差点儿把手机忘在出租车上。", pinyin: "Wǒ chàdiǎnr bǎ shǒujī wàng zài chūzūchē shang.", de: "Fast hätte ich mein Handy im Taxi liegen lassen. (unerwünscht – ist nicht passiert)" },
            { cn: "他差一点儿就赢了。", pinyin: "Tā chà yìdiǎnr jiù yíng le.", de: "Er hätte beinahe gewonnen. (erwünscht – leider nicht geklappt)" },
            { cn: "他差点儿没赶上飞机。", pinyin: "Tā chàdiǎnr méi gǎnshàng fēijī.", de: "Er hätte fast den Flug verpasst. (erwünscht – zum Glück doch erwischt)" }
          ],
          tip: "只好 hat trotz 好 nichts mit „gut“ zu tun – es ist ein eigenes Wort. Und 差点儿 nicht mit 有点儿 „ein bisschen“ verwechseln: 我差点儿哭了 „ich hätte fast geweint“ – 我有点儿难过 „ich bin ein bisschen traurig“. Nach einem Beinahe-Unglück folgt oft eine Warnung mit <strong>千万</strong> (qiānwàn, „bloß, unbedingt“), meist mit 别 oder 不要: 千万别再忘了！ „Vergiss es bloß nicht wieder!“"
        },
        {
          heading: "也许 und 恐怕 — vielleicht oder wohl leider",
          text: "<strong>也许</strong> (yěxǔ) drückt eine neutrale, unsichere Vermutung aus: „vielleicht, möglicherweise“. <strong>恐怕</strong> (kǒngpà) leitet eine Einschätzung ein, die du für wahrscheinlich hältst, aber nicht wünschst: „ich fürchte, …; wohl leider“. Beide stehen vor dem Subjekt oder nach dem Subjekt vor dem Prädikat. 也许 schwächt außerdem Vorschläge höflich ab, 恐怕 eine Absage oder schlechte Nachricht. Bei Mengenangaben kann 恐怕 auch neutral „wohl, ungefähr“ heißen.",
          examples: [
            { cn: "他还没回消息，也许在开会。", pinyin: "Tā hái méi huí xiāoxi, yěxǔ zài kāihuì.", de: "Er hat noch nicht geantwortet, vielleicht ist er in einer Besprechung." },
            { cn: "也许我们可以换个办法试试。", pinyin: "Yěxǔ wǒmen kěyǐ huàn ge bànfǎ shìshi.", de: "Vielleicht könnten wir es mal anders versuchen." },
            { cn: "这么晚了，恐怕商店都关门了。", pinyin: "Zhème wǎn le, kǒngpà shāngdiàn dōu guānmén le.", de: "So spät schon – ich fürchte, die Geschäfte haben alle zu." },
            { cn: "这个周末我恐怕没有时间。", pinyin: "Zhège zhōumò wǒ kǒngpà méiyǒu shíjiān.", de: "Dieses Wochenende habe ich wohl leider keine Zeit." },
            { cn: "来的人恐怕有三十多个。", pinyin: "Lái de rén kǒngpà yǒu sānshí duō ge.", de: "Es sind wohl über dreißig Leute gekommen." }
          ],
          tip: "Anders als 可能 ist 也许 nur Adverb: 不可能 und 有可能 gibt es, *不也许 dagegen nicht. Und 恐怕 bezeichnet keine echte Angst, sondern eine vorsichtige Einschätzung – Angst haben heißt 害怕 (hàipà)."
        }
      ]
    }
  ];

  // Lessons render in HSK progression; within a level the authored lesson numbers decide.
  var LEVEL_DISPLAY_ORDER = ['HSK1', 'HSK1/HSK2', 'HSK2', 'HSK2/HSK3', 'HSK3', 'HSK3/HSK4', 'HSK4', 'HSK4/HSK5', 'HSK5', 'HSK5/HSK6', 'HSK6', 'HSK7-9'];
  LESSONS.forEach(function (lesson, index) { lesson._fileIndex = index; });
  LESSONS.sort(function (a, b) {
    var la = LEVEL_DISPLAY_ORDER.indexOf(a.level), lb = LEVEL_DISPLAY_ORDER.indexOf(b.level);
    if (la !== lb) return (la === -1 ? 99 : la) - (lb === -1 ? 99 : lb);
    if (a.number !== b.number) return a.number - b.number;
    return a._fileIndex - b._fileIndex;
  });
  LESSONS.forEach(function (lesson, index) { lesson.number = index + 1; });

  function resolveLessonReferencePlaceholders(text, numberById) {
    if (!text || typeof text !== 'string') return text;
    return text.replace(/\[\[lesson:(lesson-\d+)\]\]/g, function (_, lessonId) {
      var lessonNumber = numberById[lessonId];
      return lessonNumber ? ('Lektion ' + lessonNumber) : 'dieser Lektion';
    });
  }

  var lessonNumberById = {};
  LESSONS.forEach(function (lesson) {
    lessonNumberById[lesson.id] = lesson.number;
  });

  LESSONS.forEach(function (lesson) {
    lesson.intro = resolveLessonReferencePlaceholders(lesson.intro, lessonNumberById);
    lesson.subtitle = resolveLessonReferencePlaceholders(lesson.subtitle, lessonNumberById);
    lesson.sections.forEach(function (section) {
      section.heading = resolveLessonReferencePlaceholders(section.heading, lessonNumberById);
      section.text = resolveLessonReferencePlaceholders(section.text, lessonNumberById);
      section.tip = resolveLessonReferencePlaceholders(section.tip, lessonNumberById);
    });
  });

  function buildLessonSearchText(lesson) {
    var parts = [lesson.title, lesson.subtitle, lesson.intro];
    lesson.sections.forEach(function (section) {
      parts.push(section.heading, section.text, section.tip);
      if (section.examples) {
        section.examples.forEach(function (example) {
          parts.push(example.cn, example.pinyin, example.de);
        });
      }
    });
    return parts.filter(Boolean).join(' ').toLowerCase();
  }

  LESSONS.forEach(function (lesson) {
    lesson._searchText = buildLessonSearchText(lesson);
    // Pinyin in the search text is folded so tone-less or numbered input matches (nihao, ni3hao3).
    lesson._foldedText = window.Pinyin ? window.Pinyin.fold(lesson._searchText) : lesson._searchText;
  });

  // =====================================================
  // === RENDERING & UI LOGIC ===
  // =====================================================

  function renderLessonContent(lesson) {
    var html = '<div class="gl-intro">' + lesson.intro + '</div>';
    if (lesson.grammarIds && lesson.grammarIds.length) {
      html += '<div class="gl-section"><h4 class="gl-section-heading">Muster nachschlagen</h4>';
      lesson.grammarIds.forEach(function (id) {
        var pattern = (window.GRAMMAR_DATA || []).find(function (g) { return g.id === id; });
        if (pattern) html += '<button type="button" class="btn btn-pill" data-grammar-reference="' + id + '">' + pattern.pattern + '</button> ';
      });
      html += '</div>';
    }

    lesson.sections.forEach(function (sec) {
      html += '<div class="gl-section">';
      html += '<h4 class="gl-section-heading">' + sec.heading + '</h4>';
      if (sec.text) {
        html += '<div class="gl-section-text">' + sec.text + '</div>';
      }
      if (sec.examples && sec.examples.length > 0) {
        html += '<div class="gl-examples">';
        sec.examples.forEach(function (ex) {
          html += '<div class="gl-example">';
          html += '<div class="gl-example-jp" lang="zh-CN">' + ex.cn + '</div>';
          if (ex.pinyin) {
            html += '<div class="gl-example-romaji">' + ex.pinyin + '</div>';
          }
          html += '<div class="gl-example-de">' + ex.de + '</div>';
          html += '</div>';
        });
        html += '</div>';
      }
      if (sec.tip) {
        html += '<div class="gl-tip">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
          '<span>' + sec.tip + '</span></div>';
      }
      html += '</div>';
    });

    return html;
  }


  var api = window.Lessons = { view: 'reference', selected: null, count: LESSONS.length };
  var query = '', level = 'all', indexScroll = 0, readingScroll = {};
  var controls, index, reader, visible = LESSONS.slice();
  function persist() { if (window.app.workspace) window.app.workspace.save(); }
  function commit() { if (window.app.workspace) window.app.workspace.commit(); window.app.updateCount(); }
  function button(text, action, cls) {
    var el = document.createElement('button'); el.type = 'button'; el.textContent = text; el.className = cls || ''; el.onclick = action; return el;
  }
  function matchesQuery(lesson) {
    if (!query) return true;
    var lower = query.toLowerCase();
    if (lesson._searchText.indexOf(lower) !== -1) return true;
    return !!window.Pinyin && lesson._foldedText.indexOf(window.Pinyin.fold(lower)) !== -1;
  }
  function filter() {
    visible = LESSONS.filter(function (lesson) { return (level === 'all' || lesson.level.split('/').indexOf(level) !== -1) && matchesQuery(lesson); });
    api.count = visible.length;
    index.querySelectorAll('[data-lesson]').forEach(function (card) { card.classList.toggle('hidden', !visible.some(function (lesson) { return lesson.id === card.dataset.lesson; })); });
    document.getElementById('gl-no-results').classList.toggle('hidden', !!visible.length);
    document.getElementById('gl-count').textContent = visible.length + ' Lektionen';
    controls.querySelectorAll('.gl-level').forEach(function (btn) { var active = btn.dataset.gllevel === level; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', String(active)); });
    controls.querySelector('.lesson-filter-summary').textContent = (query ? '„' + query + '“ · ' : '') + (level === 'all' ? 'Alle Level' : level.replace('HSK', 'HSK '));
    if (api.view === 'lessons') window.app.updateCount();
    persist();
  }
  function showIndex(silent) {
    if (!silent) { persist(); if (api.selected) readingScroll[api.selected] = window.scrollY; }
    var previous = api.selected;
    api.selected = null;
    reader.classList.add('hidden'); index.classList.remove('hidden');
    if (!silent) {
      commit();
      var card = Array.from(index.querySelectorAll('[data-lesson]')).find(function (el) { return el.dataset.lesson === previous; });
      if (card) card.querySelector('button').focus({ preventScroll: true });
      window.scrollTo(0, indexScroll);
    }
  }
  function openLesson(id, silent) {
    var lesson = LESSONS.find(function (entry) { return entry.id === id; });
    if (!lesson) { showIndex(true); window.app.workspace.message('Diese Lektion wurde nicht gefunden. Wähle eine Lektion aus der Übersicht.'); return; }
    if (!silent) { persist(); if (api.selected) readingScroll[api.selected] = window.scrollY; else indexScroll = window.scrollY; }
    api.selected = id;
    index.classList.add('hidden'); reader.classList.remove('hidden'); reader.innerHTML = '';
    var header = document.createElement('header');
    header.appendChild(button('← Alle Lektionen', function () { showIndex(); }));
    var heading = document.createElement('h2'); heading.id = 'lesson-title'; heading.tabIndex = -1; heading.textContent = lesson.title; header.appendChild(heading);
    var sub = document.createElement('p'); sub.className = 'lesson-subtitle'; sub.textContent = lesson.level.replace(/HSK/g, 'HSK ') + ' · ' + lesson.subtitle; header.appendChild(sub); reader.appendChild(header);
    var body = document.createElement('div'); body.className = 'gl-card-body'; body.innerHTML = renderLessonContent(lesson); reader.appendChild(body);
    body.querySelectorAll('table').forEach(function (table) {
      var region = document.createElement('div'); region.className = 'lesson-table-region'; region.tabIndex = 0; region.setAttribute('role', 'region'); region.setAttribute('aria-label', 'Lektionstabelle, horizontal scrollbar'); table.before(region); region.appendChild(table);
    });
    body.addEventListener('click', function (event) {
      var ref = event.target.closest('[data-grammar-reference]');
      if (ref) window.app.workspace.openRelated('grammar', function (g) { return g.id === ref.dataset.grammarReference; });
      var link = event.target.closest('[data-lesson-link]');
      if (link) { event.preventDefault(); openLesson(link.dataset.lessonLink); }
    });
    var nav = document.createElement('div'); nav.className = 'lesson-reader-nav';
    var pos = visible.indexOf(lesson);
    var prev = button('← Vorherige Lektion', function () { openLesson(visible[pos - 1].id); }); prev.disabled = pos <= 0;
    var next = button('Nächste Lektion →', function () { openLesson(visible[pos + 1].id); }); next.disabled = pos < 0 || pos >= visible.length - 1;
    nav.appendChild(prev); nav.appendChild(next); reader.appendChild(nav);
    if (!silent) { commit(); heading.focus({ preventScroll: true }); window.scrollTo(0, readingScroll[id] || 0); }
  }
  function setView(view, silent) {
    if (!silent) { persist(); window.app.workspace.dismiss(); }
    api.view = view;
    var lessons = view === 'lessons';
    document.getElementById('grammar-controls').classList.toggle('grammar-lessons-view', lessons);
    document.getElementById('grammar-grid').classList.toggle('hidden', lessons);
    document.getElementById('grammar-no-results').classList.toggle('hidden', lessons || !!window.app.sections.grammar.filteredItems.length);
    controls.classList.toggle('hidden', !lessons);
    index.classList.toggle('hidden', !lessons || !!api.selected);
    reader.classList.toggle('hidden', !lessons || !api.selected);
    document.querySelectorAll('#grammar-view-toggle button').forEach(function (btn) { var active = btn.dataset.view === view; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', String(active)); });
    if (!silent) commit();
  }
  function initLessons() {
    if (window.__grammarLessonsInitialized) return;
    var host = document.getElementById('grammar-tab');
    document.querySelector('#grammar-controls .search-bar').classList.add('grammar-ref-search');
    controls = document.createElement('div'); controls.id = 'gl-controls'; controls.className = 'hidden';
    controls.innerHTML = '<label class="field-label" for="gl-search">Lektionen durchsuchen</label><div class="search-bar"><input id="gl-search" placeholder="Thema, Grammatik oder Erklärung" autocomplete="off"><button id="gl-clear-search" class="btn-clear" aria-label="Suche löschen">×</button></div><div class="filters"><div class="filter-field"><span id="gl-level-label" class="filter-group-label">HSK</span><div class="level-filters" role="group" aria-labelledby="gl-level-label"></div></div><span id="gl-count" class="gl-count" role="status"></span></div><div class="filter-summary"><span class="lesson-filter-summary"></span><button id="gl-reset">Filter zurücksetzen</button></div>';
    ['all', 'HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'].forEach(function (value) {
      var btn = button(value === 'all' ? 'Alle' : value.replace('HSK', 'HSK '), function () { level = value; filter(); }, 'filter-btn gl-level ' + value.toLowerCase()); btn.dataset.gllevel = value; controls.querySelector('.level-filters').appendChild(btn);
    });
    document.getElementById('grammar-controls').appendChild(controls);
    var search = controls.querySelector('input');
    search.addEventListener('input', function () { query = search.value.trim(); controls.querySelector('.btn-clear').classList.toggle('visible', !!query); filter(); });
    controls.querySelector('#gl-clear-search').onclick = function () { search.value = ''; query = ''; filter(); search.focus(); };
    controls.querySelector('#gl-reset').onclick = function () { search.value = ''; query = ''; level = 'all'; filter(); search.focus(); };
    index = document.createElement('div'); index.id = 'grammar-lessons'; index.className = 'gl-container hidden';
    LESSONS.forEach(function (lesson) {
      var card = document.createElement('div'); card.className = 'gl-card'; card.dataset.lesson = lesson.id;
      var header = button('', function () { openLesson(lesson.id); }, 'gl-card-header');
      header.innerHTML = '<span class="gl-card-number">' + lesson.number + '</span><span class="gl-card-titles"><span class="gl-card-title">' + lesson.title + '</span><span class="gl-card-subtitle">' + lesson.subtitle + '</span></span><span class="gl-card-level card-level ' + lesson.level.split('/')[0] + '">' + lesson.level.replace(/HSK/g, 'HSK ') + '</span><span class="gl-card-chevron">→</span>';
      card.appendChild(header); index.appendChild(card);
    });
    var empty = document.createElement('div'); empty.id = 'gl-no-results'; empty.className = 'no-results hidden'; empty.setAttribute('role', 'status'); empty.textContent = 'Keine Lektionen gefunden. Setze die Filter zurück oder ändere die Suche.'; index.appendChild(empty);
    reader = document.createElement('article'); reader.id = 'lesson-reader'; reader.className = 'lesson-reader hidden'; reader.setAttribute('aria-labelledby', 'lesson-title');
    host.prepend(reader); host.prepend(index);
    document.querySelectorAll('#grammar-view-toggle button').forEach(function (btn) { btn.addEventListener('click', function () { setView(btn.dataset.view); }); });
    window.__grammarLessonsInitialized = true;
    filter();
  }
  api.setView = setView;
  api.open = openLesson;
  api.snapshot = function () { return { view: api.view, selected: api.selected, query: query, level: level, indexScroll: indexScroll, readingScroll: Object.assign({}, readingScroll) }; };
  api.restore = function (state, id) {
    if (state) { query = state.query || ''; level = state.level || 'all'; indexScroll = state.indexScroll || 0; readingScroll = Object.assign({}, state.readingScroll); }
    controls.querySelector('input').value = query; filter();
    setView('lessons', true);
    if (id || (state && state.selected)) openLesson(id || state.selected, true); else showIndex(true);
  };
  window.GRAMMAR_LESSONS = LESSONS;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLessons);
  else initLessons();
})();
