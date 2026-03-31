// Grammar Lessons Module for Zhongwen Explorer (HSK 1–6)
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
            { cn: "明天我不上班。", pinyin: "Míngtiān wǒ bù shàngbān.", de: "Morgen arbeite ich nicht. (Zeit am Satzanfang)" }
          ],
          tip: "Der häufigste Fehler: ❌ 我去明天北京 (nach deutschem Muster). Richtig: ✅ 我明天去北京. Zeitangabe <strong>immer vor</strong> dem Verb!"
        },
        {
          heading: "Ortsangaben VOR der Handlung",
          text: "Auch Ortsangaben stehen <strong>vor dem Verb</strong>, nicht danach. Die typische Struktur ist: <strong>Subjekt + 在 + Ort + Verb + Objekt</strong>. Bei gleichzeitiger Zeit- und Ortsangabe gilt: <strong>Zeit vor Ort</strong>.",
          examples: [
            { cn: "我在家吃饭。", pinyin: "Wǒ zài jiā chīfàn.", de: "Ich esse zu Hause." },
            { cn: "她在图书馆学习。", pinyin: "Tā zài túshūguǎn xuéxí.", de: "Sie lernt in der Bibliothek." },
            { cn: "他每天在公园跑步。", pinyin: "Tā měitiān zài gōngyuán pǎobù.", de: "Er joggt jeden Tag im Park. (Zeit + Ort + Verb)" },
            { cn: "我们明天在学校见面。", pinyin: "Wǒmen míngtiān zài xuéxiào jiànmiàn.", de: "Wir treffen uns morgen in der Schule." }
          ],
          tip: "Merke dir die Reihenfolge wie ein Trichter — vom Großen zum Kleinen: <strong>Wann → Wo → Was tun</strong>. Also: Subjekt + Zeit + Ort + Verb + Objekt."
        },
        {
          heading: "Adverbien vor dem Verb",
          text: "Adverbien wie 也 (auch), 常常/经常 (oft), 已经 (schon), 都 (alle) und 还 (noch) stehen im Chinesischen <strong>immer direkt vor dem Verb</strong>, nach dem Subjekt. Sie wandern nie ans Satzende.",
          examples: [
            { cn: "我也喜欢咖啡。", pinyin: "Wǒ yě xǐhuan kāfēi.", de: "Ich mag auch Kaffee." },
            { cn: "她常常去中国。", pinyin: "Tā chángcháng qù Zhōngguó.", de: "Sie fährt oft nach China." },
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
      intro: "Fragen stellen ist im Chinesischen überraschend einfach — du musst weder die Wortstellung ändern noch Hilfsverben einfügen. Für Ja/Nein-Fragen hängst du einfach <strong>吗</strong> an einen Aussagesatz. Für offene Fragen (W-Fragen) setzt du das Fragewort <strong>genau an die Stelle, wo die Antwort stehen würde</strong> — nicht an den Satzanfang wie im Deutschen. Dieses Prinzip ist simpel, aber für deutschsprachige Lernende zunächst ungewohnt.",
      sections: [
        {
          heading: "吗 (ma) — Ja/Nein-Fragen",
          text: "Die einfachste Art, eine Frage zu stellen: Nimm einen <strong>Aussagesatz</strong> und hänge <strong>吗</strong> ans Ende. Fertig! Die Wortstellung ändert sich nicht. 吗 ist ein reiner Fragepartikel ohne eigene Bedeutung.",
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
            { cn: "谁是你的老师？", pinyin: "Shéi shì nǐ de lǎoshī?", de: "Wer ist dein Lehrer? (谁 = wer)" },
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
            { cn: "你们班有多少学生？", pinyin: "Nǐmen bān yǒu duōshao xuéshēng?", de: "Wie viele Schüler hat eure Klasse?" },
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
            { cn: "教室里有三十个学生。", pinyin: "Jiàoshì lǐ yǒu sānshí gè xuéshēng.", de: "Im Klassenzimmer sind dreißig Schüler." },
            { cn: "附近有没有银行？", pinyin: "Fùjìn yǒu méiyǒu yínháng?", de: "Gibt es in der Nähe eine Bank?" },
            { cn: "这里有很多好吃的。", pinyin: "Zhèlǐ yǒu hěn duō hǎochī de.", de: "Hier gibt es viel Leckeres." }
          ],
          tip: "Im Deutschen sagen wir „Es gibt eine Bank in der Nähe\" — im Chinesischen steht der Ort zuerst: 附近有银行. Nicht: ❌ 有银行在附近."
        },
        {
          heading: "Verneinung: 没有 (méiyǒu)",
          text: "有 ist das einzige häufige Verb, das <strong>ausschließlich mit 没</strong> verneint wird — niemals mit 不! 没有 kann zu 没 verkürzt werden, aber 不有 existiert nicht.",
          examples: [
            { cn: "我没有车。", pinyin: "Wǒ méiyǒu chē.", de: "Ich habe kein Auto." },
            { cn: "冰箱里没有牛奶了。", pinyin: "Bīngxiāng lǐ méiyǒu niúnǎi le.", de: "Im Kühlschrank ist keine Milch mehr." },
            { cn: "今天没有课。", pinyin: "Jīntiān méiyǒu kè.", de: "Heute gibt es keinen Unterricht." },
            { cn: "他没什么钱。", pinyin: "Tā méi shénme qián.", de: "Er hat nicht viel Geld." }
          ],
          tip: "Eiserne Regel: ❌ 不有 gibt es NICHT. Es heißt immer 没有. Das ist die häufigste Ausnahme bei der Verneinung und ein typischer Anfängerfehler."
        },
        {
          heading: "有一点 vs. 一点",
          text: "<strong>有(一)点(儿)</strong> steht <em>vor</em> Adjektiven und hat eine leicht <strong>negative</strong> Konnotation: „etwas zu...\". <strong>一点(儿)</strong> steht <em>nach</em> Adjektiven und ist <strong>neutral</strong>: „ein bisschen (mehr)\".",
          examples: [
            { cn: "今天有点儿冷。", pinyin: "Jīntiān yǒudiǎnr lěng.", de: "Heute ist es etwas kalt. (Negativ: unangenehm)" },
            { cn: "这个菜有点儿辣。", pinyin: "Zhège cài yǒudiǎnr là.", de: "Dieses Gericht ist etwas scharf. (Zu scharf für mich)" },
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
      intro: "在 ist eines der <strong>häufigsten und vielseitigsten Wörter</strong> im Chinesischen. Es kann als Verb („sich befinden\"), als Präposition („an/in/auf\") und sogar als Progressivmarker (→ Lektion 19) fungieren. Für den Anfang sind vor allem zwei Funktionen wichtig: <strong>Wo ist etwas?</strong> und <strong>Wo passiert etwas?</strong> Wenn du 在 beherrschst, kannst du über Orte und Positionen fließend sprechen.",
      sections: [
        {
          heading: "在 + Ort — Wo befindet sich etwas?",
          text: "Als Verb bedeutet 在 „sich befinden\". Die Struktur ist einfach: <strong>Subjekt + 在 + Ort</strong>. Es braucht kein zusätzliches Verb — 在 reicht allein.",
          examples: [
            { cn: "我在北京。", pinyin: "Wǒ zài Běijīng.", de: "Ich bin in Peking." },
            { cn: "他在家。", pinyin: "Tā zài jiā.", de: "Er ist zu Hause." },
            { cn: "你的书在桌子上。", pinyin: "Nǐ de shū zài zhuōzi shang.", de: "Dein Buch ist auf dem Tisch." },
            { cn: "厕所在哪儿？", pinyin: "Cèsuǒ zài nǎr?", de: "Wo ist die Toilette?" }
          ],
          tip: "Im Deutschen benutzen wir „sein\" + Ort: „Ich bin in Peking.\" Im Chinesischen wird dafür 在 verwendet, nicht 是! ❌ 我是在北京 (als Existenzaussage) → ✅ 我在北京."
        },
        {
          heading: "Richtungswörter (方位词)",
          text: "Um Positionen genauer zu beschreiben, folgen nach dem Nomen sogenannte <strong>Richtungswörter</strong> (方位词). Sie funktionieren wie Nachsilben, die die genaue Lage angeben.",
          examples: [
            { cn: "猫在桌子下面。", pinyin: "Māo zài zhuōzi xiàmian.", de: "Die Katze ist unter dem Tisch. (下面 = unten)" },
            { cn: "银行在学校旁边。", pinyin: "Yínháng zài xuéxiào pángbiān.", de: "Die Bank ist neben der Schule. (旁边 = nebenan)" },
            { cn: "书包在椅子后面。", pinyin: "Shūbāo zài yǐzi hòumian.", de: "Der Rucksack ist hinter dem Stuhl. (后面 = hinten)" },
            { cn: "钥匙在包里面。", pinyin: "Yàoshi zài bāo lǐmian.", de: "Der Schlüssel ist in der Tasche. (里面 = innen)" }
          ],
          tip: "Die wichtigsten Richtungswörter: <strong>上</strong> (oben/auf), <strong>下</strong> (unten/unter), <strong>里</strong> (innen/in), <strong>外</strong> (außen/draußen), <strong>前</strong> (vorne/vor), <strong>后</strong> (hinten/hinter), <strong>旁边</strong> (neben), <strong>对面</strong> (gegenüber). Oft mit Suffix 面 oder 边 verwendet."
        },
        {
          heading: "在 + Ort + Verb — Handlung an einem Ort",
          text: "Wenn du sagen willst, dass jemand etwas <strong>an einem bestimmten Ort tut</strong>, steht 在 + Ort <strong>vor dem Verb</strong> — nicht danach! Dies ist einer der häufigsten Unterschiede zum Deutschen.",
          examples: [
            { cn: "我在家吃饭。", pinyin: "Wǒ zài jiā chīfàn.", de: "Ich esse zu Hause. (Nicht: Ich esse in Hause)" },
            { cn: "她在图书馆看书。", pinyin: "Tā zài túshūguǎn kànshū.", de: "Sie liest in der Bibliothek." },
            { cn: "孩子们在公园玩。", pinyin: "Háizimen zài gōngyuán wán.", de: "Die Kinder spielen im Park." },
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
            { cn: "我的猫在沙发上。", pinyin: "Wǒ de māo zài shāfā shang.", de: "Meine Katze ist auf dem Sofa. (Bekannte Katze)" },
            { cn: "沙发上有一只猫。", pinyin: "Shāfā shang yǒu yì zhī māo.", de: "Auf dem Sofa ist eine Katze. (Unbekannte Katze)" }
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
      level: 'HSK1',
      intro: "这 (dies) und 那 (jenes) sind die chinesischen <strong>Demonstrativpronomen</strong> — sie zeigen auf Dinge, Orte und Weisen. Anders als im Deutschen, wo „dieser\" je nach Genus und Kasus dekliniert wird (dieser, diese, dieses, diesem...), bleiben 这 und 那 <strong>immer gleich</strong>. Dafür kombinieren sie sich mit Zählwörtern, Ortssuffixen und anderen Elementen zu einer ganzen Familie nützlicher Ausdrücke.",
      sections: [
        {
          heading: "这/那 + Zählwort + Nomen",
          text: "Wenn du auf ein bestimmtes Ding zeigst, brauchst du: <strong>这/那 + Zählwort + Nomen</strong>. Das Zählwort darf nicht fehlen! Das universelle Zählwort 个 funktioniert im Zweifel immer.",
          examples: [
            { cn: "这个人是谁？", pinyin: "Zhège rén shì shéi?", de: "Wer ist diese Person?" },
            { cn: "那本书很好看。", pinyin: "Nà běn shū hěn hǎokàn.", de: "Dieses Buch ist sehr gut. (本 = ZW für Bücher)" },
            { cn: "我要这杯咖啡。", pinyin: "Wǒ yào zhè bēi kāfēi.", de: "Ich möchte diesen Kaffee. (杯 = ZW für Tassen)" },
            { cn: "那只猫是你的吗？", pinyin: "Nà zhī māo shì nǐ de ma?", de: "Ist diese Katze deine? (只 = ZW für Tiere)" }
          ],
          tip: "Häufiger Fehler: ❌ 这书 ohne Zählwort. Richtig: ✅ 这本书. Im Deutschen brauchen wir kein Zählwort („dieses Buch\"), aber im Chinesischen ist es <strong>Pflicht</strong>."
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
            { cn: "你要努力学习。", pinyin: "Nǐ yào nǔlì xuéxí.", de: "Du musst fleißig lernen." }
          ],
          tip: "In Restaurants wird 要 zum Bestellen verwendet: 我要一个汉堡 (Ich hätte gerne einen Hamburger). Das klingt nicht unhöflich — es ist die normale Bestellform."
        },
        {
          heading: "不想 vs. 不要 — Verneinung",
          text: "Hier wird es spannend: <strong>不想</strong> heißt einfach „nicht wollen / keine Lust haben\" — höflich und neutral. <strong>不要</strong> dagegen ist ein <strong>Verbot oder eine Aufforderung</strong>: „Tu das nicht!\" Der Unterschied ist riesig!",
          examples: [
            { cn: "我不想去。", pinyin: "Wǒ bù xiǎng qù.", de: "Ich möchte nicht gehen. (Höflich, sanft)" },
            { cn: "不要说话！", pinyin: "Bú yào shuōhuà!", de: "Sprich nicht! / Sei still! (Verbot)" },
            { cn: "不要碰！", pinyin: "Bú yào pèng!", de: "Nicht anfassen! (Warnung)" },
            { cn: "我不想吃辣的。", pinyin: "Wǒ bù xiǎng chī là de.", de: "Ich möchte nichts Scharfes essen. (Präferenz)" },
            { cn: "你不要迟到。", pinyin: "Nǐ bú yào chídào.", de: "Komm nicht zu spät! (Ermahnung)" }
          ],
          tip: "<strong>Vorsicht!</strong> Wenn jemand fragt „Willst du Kaffee?\" und du mit 不要 antwortest, klingt das wie „Bloß nicht!\" oder „Untersteh dich!\" Sag lieber 不想喝 oder 不用了，谢谢 (nicht nötig, danke)."
        },
        {
          heading: "Abgrenzung zu 会, 能, 可以",
          text: "Neben 想 und 要 gibt es noch die modalen Hilfsverben <strong>会</strong> (können/werden), <strong>能</strong> (fähig sein/dürfen) und <strong>可以</strong> (dürfen/können). Sie alle stehen vor dem Verb und drücken verschiedene Nuancen aus — Details dazu findest du in Lektion 17.",
          examples: [
            { cn: "我想去。", pinyin: "Wǒ xiǎng qù.", de: "Ich möchte gehen. (Wunsch)" },
            { cn: "我要去。", pinyin: "Wǒ yào qù.", de: "Ich will/muss gehen. (Feste Absicht)" },
            { cn: "我会去。", pinyin: "Wǒ huì qù.", de: "Ich werde gehen. / Ich kann gehen. (Fähigkeit/Zukunft)" },
            { cn: "我能去。", pinyin: "Wǒ néng qù.", de: "Ich kann gehen. (Fähigkeit/Erlaubnis)" },
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
            { cn: "你真厉害！", pinyin: "Nǐ zhēn lìhai!", de: "Du bist wirklich beeindruckend!" },
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
      intro: "Im Deutschen sagen wir „ein <em>Stück</em> Kuchen\", „drei <em>Glas</em> Wasser\", „zwei <em>Blatt</em> Papier\" — aber bei den meisten Dingen brauchen wir kein Zählwort: „ein Buch\", „zwei Katzen\". Im Chinesischen ist das <strong>immer</strong> nötig! Zwischen Zahl und Nomen muss <strong>immer ein Zählwort</strong> (量词, liàngcí) stehen. 个 ist der universelle „Joker\", aber es gibt Dutzende spezifischer Zählwörter. Sie zu lernen ist wie Vokabellernen — aber es lohnt sich, denn sie machen dein Chinesisch authentisch.",
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
            { cn: "那个学生是谁？", pinyin: "Nàge xuéshēng shì shéi?", de: "Wer ist dieser Student dort?" },
            { cn: "你要哪杯咖啡？", pinyin: "Nǐ yào nǎ bēi kāfēi?", de: "Welche Tasse Kaffee möchtest du?" }
          ],
          tip: "Im gesprochenen Chinesisch wird 那个 oft als „nèige\" ausgesprochen und 这个 als „zhèige\" — das ist normaler Umgangssprachgebrauch."
        },
        {
          heading: "Weitere häufige Zählwörter",
          text: "Mit der Zeit wirst du immer mehr Zählwörter kennenlernen. Hier noch einige wichtige: <strong>位</strong> (höflich für Personen), <strong>双</strong> (Paare), <strong>把</strong> (Gegenstände mit Griff), <strong>辆</strong> (Fahrzeuge), <strong>封</strong> (Briefe/E-Mails).",
          examples: [
            { cn: "这位老师姓王。", pinyin: "Zhè wèi lǎoshī xìng Wáng.", de: "Dieser Lehrer heißt Wang. (höflich)" },
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
      intro: "Im Deutschen haben wir „nicht\" und „kein\" — im Chinesischen gibt es <strong>不</strong> (bù) und <strong>没</strong> (méi). Beide bedeuten „nicht\", aber sie werden in <strong>völlig verschiedenen Situationen</strong> verwendet. Die grundlegende Regel: 不 verneint <strong>Absichten, Gewohnheiten und Zustände</strong>; 没 verneint <strong>abgeschlossene Handlungen und Besitz</strong>. Diesen Unterschied zu meistern ist einer der ersten großen Durchbrüche beim Chinesischlernen.",
      sections: [
        {
          heading: "不 (bù) — Absicht, Gewohnheit, Eigenschaft",
          text: "不 wird verwendet für: <strong>Willensäußerungen</strong> (ich will nicht), <strong>Gewohnheiten</strong> (er trinkt nicht), <strong>allgemeine Aussagen</strong> (das ist nicht) und <strong>Adjektive</strong> (nicht groß). 不 ist die „Standard-Verneinung\" für Gegenwart und Zukunft.",
          examples: [
            { cn: "我不喜欢咖啡。", pinyin: "Wǒ bù xǐhuan kāfēi.", de: "Ich mag keinen Kaffee. (Eigenschaft/Gewohnheit)" },
            { cn: "他不来。", pinyin: "Tā bù lái.", de: "Er kommt nicht. (Absicht/Zukunft)" },
            { cn: "今天不热。", pinyin: "Jīntiān bú rè.", de: "Heute ist es nicht heiß. (Zustand)" },
            { cn: "我不是学生。", pinyin: "Wǒ bú shì xuéshēng.", de: "Ich bin kein Student. (是 wird immer mit 不 verneint!)" }
          ],
          tip: "不 vor dem 4. Ton wird zu bú: 不是 (bú shì), 不对 (bú duì), 不去 (bú qù). In allen anderen Fällen bleibt es bù."
        },
        {
          heading: "没 (méi) — Vergangenheit & Besitz",
          text: "没 wird verwendet für: <strong>vergangene Handlungen, die nicht stattfanden</strong> (ich habe nicht...) und <strong>Besitz</strong> (haben/nicht haben). 没 ist die Verneinung von 有 und die Verneinung für abgeschlossene Handlungen.",
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
            { cn: "你不应该这样做。", pinyin: "Nǐ bù yīnggāi zhèyàng zuò.", de: "Du solltest das nicht so machen." },
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
      level: 'HSK1/HSK2',
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
            { cn: "他们都是学生。", pinyin: "Tāmen dōu shì xuéshēng.", de: "Sie sind alle Studenten." },
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
          tip: "Die Reihenfolge ist fest: <strong>也都</strong>, niemals ❌ 都也. Merke: 也 (auch) kommt zuerst, 都 (alle) kommt danach — alphabetisch: A(uch) vor A(lle)."
        },
        {
          heading: "都不 vs. 不都 — keiner vs. nicht alle",
          text: "Hier zeigt sich die Präzision des Chinesischen: <strong>都不</strong> = „<em>keiner</em> tut es\" (totale Verneinung). <strong>不都</strong> = „<em>nicht alle</em> tun es\" (teilweise Verneinung). Die Position von 不 relativ zu 都 ändert die Bedeutung komplett!",
          examples: [
            { cn: "我们都不去。", pinyin: "Wǒmen dōu bú qù.", de: "Keiner von uns geht. (Alle nicht = keiner)" },
            { cn: "我们不都去。", pinyin: "Wǒmen bù dōu qù.", de: "Nicht alle von uns gehen. (Einige schon, andere nicht)" },
            { cn: "他们都没来。", pinyin: "Tāmen dōu méi lái.", de: "Keiner von ihnen ist gekommen." },
            { cn: "他们不都是中国人。", pinyin: "Tāmen bù dōu shì Zhōngguó rén.", de: "Sie sind nicht alle Chinesen. (Einige schon)" },
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
      level: 'HSK1/HSK2',
      intro: "了 ist vermutlich der berühmteste — und berüchtigtste — Partikel der chinesischen Sprache. Viele Lernende denken zuerst: „Ah, das ist die Vergangenheitsform!\" Aber so einfach ist es leider nicht. 了 hat <em>zwei</em> grundverschiedene Funktionen, je nachdem, wo es im Satz steht. Direkt nach dem Verb zeigt es den <strong>Abschluss einer Handlung</strong> an (Aspektpartikel 了₁). Am Satzende signalisiert es eine <strong>veränderte Situation oder neue Gegebenheit</strong> (Satzfinalpartikel 了₂). Und ja — manchmal treten beide gleichzeitig auf. Wenn du diesen Partikel wirklich verstehst, hast du einen riesigen Schritt im Chinesischen gemacht.",
      sections: [
        {
          heading: "了₁ — Aspektpartikel (nach dem Verb)",
          text: "Wenn 了 direkt nach dem Verb steht, markiert es, dass die Handlung <strong>abgeschlossen</strong> ist. Das kann in der Vergangenheit sein, muss es aber nicht — auch zukünftige Handlungen können mit 了₁ als abgeschlossen markiert werden. Entscheidend ist: Die Handlung hat ein klares Ende erreicht.",
          examples: [
            { cn: "我买了一本书。", pinyin: "Wǒ mǎi le yì běn shū.", de: "Ich habe ein Buch gekauft." },
            { cn: "她喝了三杯咖啡。", pinyin: "Tā hē le sān bēi kāfēi.", de: "Sie hat drei Tassen Kaffee getrunken." },
            { cn: "你吃了药再走。", pinyin: "Nǐ chī le yào zài zǒu.", de: "Nimm erst die Medizin, dann geh. (Zukunft!)" }
          ],
          tip: "了₁ steht <strong>immer direkt nach dem Verb</strong>. Wenn ein Objekt folgt, braucht es oft eine Mengenangabe oder ein Attribut (也买了一本书), sonst klingt der Satz unvollständig."
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
            { cn: "我已经做了作业了。", pinyin: "Wǒ yǐjīng zuò le zuòyè le.", de: "Ich habe die Hausaufgaben bereits gemacht." }
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
      level: 'HSK1/HSK2',
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
            { cn: "他受伤了，不能走路。", pinyin: "Tā shòushāng le, bù néng zǒulù.", de: "Er hat sich verletzt, er kann nicht laufen. (Physisch)" },
            { cn: "你能帮我一下吗？", pinyin: "Nǐ néng bāng wǒ yíxià ma?", de: "Kannst du mir kurz helfen? (Bitte)" }
          ]
        },
        {
          heading: "可以 (kěyǐ) — Erlaubnis / Möglichkeit",
          text: "可以 drückt <strong>Erlaubnis</strong> aus oder eine allgemeine Möglichkeit. Es beantwortet die Frage: „Darf ich?\" oder „Ist es möglich?\".",
          examples: [
            { cn: "这里可以停车吗？", pinyin: "Zhèlǐ kěyǐ tíngchē ma?", de: "Darf man hier parken?" },
            { cn: "你可以走了。", pinyin: "Nǐ kěyǐ zǒu le.", de: "Du darfst gehen." },
            { cn: "这个可以吃吗？", pinyin: "Zhège kěyǐ chī ma?", de: "Kann man das essen? / Darf man das essen?" }
          ],
          tip: "Die Verneinung von 可以 für Verbote ist <strong>不可以</strong> oder <strong>不能</strong>. ❌ 不可以抽烟 = Rauchen verboten!"
        },
        {
          heading: "Vergleich & Übersicht",
          text: "Hier siehst du den Unterschied auf einen Blick anhand desselben Themas — Autofahren:",
          examples: [
            { cn: "他会开车。", pinyin: "Tā huì kāi chē.", de: "Er kann Auto fahren. (Er hat den Führerschein / hat es gelernt)" },
            { cn: "他喝了酒，不能开车。", pinyin: "Tā hē le jiǔ, bù néng kāi chē.", de: "Er hat Alkohol getrunken, er kann nicht fahren. (Umstände)" },
            { cn: "这里不可以停车。", pinyin: "Zhèlǐ bù kěyǐ tíngchē.", de: "Hier darf man nicht parken. (Verbot/Erlaubnis)" }
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
      level: 'HSK1/HSK2',
      intro: "Im Englischen gibt es die „-ing\"-Form: „I am eating.\" Im Deutschen sagen wir „Ich esse gerade.\" Auch Chinesisch hat Mittel, um auszudrücken, dass eine Handlung <strong>gerade jetzt stattfindet</strong>: <strong>在</strong>, <strong>正在</strong> und <strong>正</strong>. Dazu kommt die Partikel <strong>呢</strong> am Satzende, die den Verlauf zusätzlich betont. Diese Marker sind einfach zu lernen und machen dein Chinesisch sofort lebendiger.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "<strong>在 + Verb</strong> oder <strong>正在 + Verb</strong> oder <strong>正 + Verb</strong> — alle drei drücken aus, dass die Handlung <em>gerade jetzt</em> stattfindet. 正在 ist die vollständigste Form, 在 die häufigste.",
          examples: [
            { cn: "我在吃饭。", pinyin: "Wǒ zài chīfàn.", de: "Ich esse gerade." },
            { cn: "她正在看书。", pinyin: "Tā zhèngzài kàn shū.", de: "Sie liest gerade." },
            { cn: "他们正讨论这个问题。", pinyin: "Tāmen zhèng tǎolùn zhège wèntí.", de: "Sie diskutieren gerade dieses Problem." }
          ],
          tip: "在 vor einem Verb = Verlaufsform. 在 vor einem Ort = Ortsangabe. Kontext entscheidet! 我在家 (Ich bin zu Hause) vs. 我在吃 (Ich esse gerade)."
        },
        {
          heading: "呢 am Satzende",
          text: "Die Partikel <strong>呢</strong> (ne) am Satzende verstärkt den Verlaufsaspekt. Sie kann allein oder zusammen mit 在/正在 verwendet werden.",
          examples: [
            { cn: "你在干什么呢？", pinyin: "Nǐ zài gàn shénme ne?", de: "Was machst du gerade?" },
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
            { cn: "她刚才没在听。", pinyin: "Tā gāngcái méi zài tīng.", de: "Sie hat gerade eben nicht zugehört." }
          ],
          tip: "不在 + Ort = nicht anwesend: 他不在家 (Er ist nicht zu Hause). 没在 + Verb = nicht gerade dabei: 他没在学习 (Er lernt gerade nicht)."
        },
        {
          heading: "Verlaufsform in der Vergangenheit",
          text: "Auch vergangene Handlungen, die zu einem bestimmten Zeitpunkt im Gange waren, können mit 在/正在 beschrieben werden — ähnlich dem englischen „was doing\".",
          examples: [
            { cn: "我打电话的时候，他正在洗澡。", pinyin: "Wǒ dǎ diànhuà de shíhou, tā zhèngzài xǐzǎo.", de: "Als ich anrief, duschte er gerade." },
            { cn: "昨天晚上八点我在写作业。", pinyin: "Zuótiān wǎnshang bā diǎn wǒ zài xiě zuòyè.", de: "Gestern Abend um acht schrieb ich Hausaufgaben." }
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
      level: 'HSK1/HSK2',
      intro: "Deutsch ist eine <strong>Subjekt-Verb-Objekt</strong>-Sprache: „Ich esse Äpfel.\" Chinesisch wird oft genauso beschrieben, aber in Wirklichkeit ist es eine <strong>Thema-Kommentar</strong>-Sprache. Das bedeutet: Zuerst kommt das <strong>Thema</strong> (worüber sprechen wir?), dann der <strong>Kommentar</strong> (was gibt es darüber zu sagen?). Das Thema muss nicht das grammatische Subjekt sein! Wenn du dieses Prinzip verinnerlichst, werden viele chinesische Sätze plötzlich logisch, die vorher rätselhaft wirkten.",
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
            { cn: "这里不能停车。", pinyin: "Zhèlǐ bù néng tíngchē.", de: "Hier darf man nicht parken." },
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
            { cn: "数学我学得好，物理我学不好。", pinyin: "Shùxué wǒ xué de hǎo, wùlǐ wǒ xué bù hǎo.", de: "Mathe kann ich gut, Physik nicht." }
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
      level: 'HSK2',
      intro: "Im Deutschen stehen Zeitangaben ziemlich flexibel im Satz — „Ich gehe <em>morgen</em> ins Kino\" oder „<em>Morgen</em> gehe ich ins Kino\". Im Chinesischen gibt es dafür eine klare Regel: <strong>Zeitangaben stehen vor dem Verb</strong> (und meist nach dem Subjekt). Außerdem drückt Chinesisch Dauer, Zeiträume und Häufigkeit mit eigenen Strukturen aus. Dieses System zu verinnerlichen macht deine Sätze sofort natürlicher.",
      sections: [
        {
          heading: "Zeitpunkt: Subjekt + Zeit + Verb",
          text: "Im Chinesischen steht die Zeitangabe <strong>nach dem Subjekt und vor dem Verb</strong>. Sie kann auch ganz an den Satzanfang rücken, wenn sie betont werden soll. Niemals steht sie hinter dem Verb!",
          examples: [
            { cn: "我昨天去了北京。", pinyin: "Wǒ zuótiān qù le Běijīng.", de: "Ich bin gestern nach Peking gefahren." },
            { cn: "她明天不上班。", pinyin: "Tā míngtiān bù shàngbān.", de: "Sie arbeitet morgen nicht." },
            { cn: "我们下午三点见面。", pinyin: "Wǒmen xiàwǔ sān diǎn jiànmiàn.", de: "Wir treffen uns um drei Uhr nachmittags." },
            { cn: "他每天早上跑步。", pinyin: "Tā měitiān zǎoshang pǎobù.", de: "Er joggt jeden Morgen." }
          ],
          tip: "Deutsche Lernende stellen die Zeit gerne ans Satzende, weil das im Deutschen geht: ❌ 我去了北京昨天 → ✅ 我昨天去了北京. Die Zeit kommt <strong>immer vor das Verb</strong>!"
        },
        {
          heading: "以前 / 以后 / 的时候 — Zeitliche Bezüge",
          text: "<strong>以前</strong> (yǐqián) bedeutet „vorher/bevor\", <strong>以后</strong> (yǐhòu) bedeutet „nachher/nachdem\", und <strong>的时候</strong> (de shíhou) bedeutet „als/wenn\". Sie stehen nach dem Bezugspunkt: Verb/Zeitangabe + 以前/以后/的时候.",
          examples: [
            { cn: "吃饭以前要洗手。", pinyin: "Chīfàn yǐqián yào xǐ shǒu.", de: "Vor dem Essen muss man Hände waschen." },
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
      level: 'HSK2',
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
          tip: "就 betont die <strong>subjektive Empfindung</strong> des Sprechers: „Das ging aber schnell!\" Objektiv kann acht Uhr spät sein — aber wenn der Sprecher erst um neun gerechnet hat, benutzt er 就."
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
      level: 'HSK2',
      intro: "Im Deutschen gibt es nur ein „oder\" — im Chinesischen sind es zwei: <strong>还是</strong> (háishi) und <strong>或者</strong> (huòzhě). Die Grundregel ist einfach: 还是 wird in <strong>Fragen</strong> verwendet, 或者 in <strong>Aussagen</strong>. Aber 还是 kann auch „doch lieber / trotzdem\" bedeuten — und genau da wird es interessant. Diese Lektion zeigt dir, wann du welches „oder\" brauchst.",
      sections: [
        {
          heading: "还是 — „Oder\" in Fragen",
          text: "还是 wird in <strong>Alternativfragen</strong> verwendet, wenn der Gesprächspartner zwischen zwei oder mehr Optionen wählen soll. Es ist die chinesische Entsprechung für „A oder B?\" und bildet sogenannte <strong>Wahlfragen</strong>.",
          examples: [
            { cn: "你喝茶还是咖啡？", pinyin: "Nǐ hē chá háishi kāfēi?", de: "Trinkst du Tee oder Kaffee?" },
            { cn: "我们坐地铁还是打车？", pinyin: "Wǒmen zuò dìtiě háishi dǎchē?", de: "Nehmen wir die U-Bahn oder ein Taxi?" },
            { cn: "你是中国人还是日本人？", pinyin: "Nǐ shì Zhōngguó rén háishi Rìběn rén?", de: "Bist du Chinese oder Japaner?" },
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
          tip: "Der häufigste Fehler deutscher Muttersprachler: ❌ 你喝茶<em>或者</em>咖啡？ In Fragen muss es 还是 heißen! 或者 ist nur für Aussagen."
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
          text: "Merke dir die Kernregel: <strong>还是 = Frage oder Entscheidung</strong>, <strong>或者 = Aussage mit Optionen</strong>. In der gesprochenen Sprache wird 还是 viel häufiger benutzt als 或者, weil es vielseitiger ist.",
          examples: [
            { cn: "你想吃中餐还是西餐？", pinyin: "Nǐ xiǎng chī Zhōngcān háishi xīcān?", de: "Willst du chinesisch oder westlich essen? (Frage → 还是)" },
            { cn: "中餐或者西餐都可以。", pinyin: "Zhōngcān huòzhě xīcān dōu kěyǐ.", de: "Chinesisch oder westlich, beides ist okay. (Aussage → 或者)" },
            { cn: "我们还是吃中餐吧。", pinyin: "Wǒmen háishi chī Zhōngcān ba.", de: "Lass uns doch lieber chinesisch essen. (Entscheidung → 还是)" }
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
      level: 'HSK2',
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
          text: "Die Doppelstruktur 又...又... verbindet zwei <strong>Eigenschaften oder Zustände</strong>, die gleichzeitig zutreffen. Sie betont, dass beides zusammenkommt — oft mit positivem oder negativem Unterton.",
          examples: [
            { cn: "这个菜又便宜又好吃。", pinyin: "Zhège cài yòu piányi yòu hǎochī.", de: "Dieses Gericht ist sowohl günstig als auch lecker." },
            { cn: "她又聪明又漂亮。", pinyin: "Tā yòu cōngming yòu piàoliang.", de: "Sie ist sowohl klug als auch hübsch." },
            { cn: "今天又冷又下雨。", pinyin: "Jīntiān yòu lěng yòu xià yǔ.", de: "Heute ist es kalt und es regnet auch noch." },
            { cn: "他又累又饿。", pinyin: "Tā yòu lèi yòu è.", de: "Er ist sowohl müde als auch hungrig." }
          ],
          tip: "又...又... beschreibt <strong>Eigenschaften und Zustände</strong>, nicht zwei verschiedene Handlungen! Für gleichzeitige Handlungen nutzt man 一边...一边 (→ Lektion 35)."
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
      intro: "Warst du schon mal in China? Hast du schon mal Stinketofu probiert? Hast du diesen Film schon gesehen? All diese Fragen drehen sich um <strong>Erfahrungen</strong> — und genau dafür gibt es den Aspektpartikel 过. Er drückt aus, dass jemand etwas <strong>irgendwann in der Vergangenheit mindestens einmal erlebt hat</strong>. Es geht nicht darum, wann genau — nur darum, <em>ob</em> die Erfahrung existiert.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "<strong>Verb + 过</strong> drückt aus, dass die Handlung mindestens einmal in der Vergangenheit stattgefunden hat. Der genaue Zeitpunkt ist dabei irrelevant.",
          examples: [
            { cn: "我去过中国。", pinyin: "Wǒ qù guo Zhōngguó.", de: "Ich war schon mal in China." },
            { cn: "你吃过北京烤鸭吗？", pinyin: "Nǐ chī guo Běijīng kǎoyā ma?", de: "Hast du schon mal Pekingente gegessen?" },
            { cn: "我看过这部电影。", pinyin: "Wǒ kàn guo zhè bù diànyǐng.", de: "Ich habe diesen Film schon gesehen." }
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
            { cn: "我以前学过法语。", pinyin: "Wǒ yǐqián xué guo Fǎyǔ.", de: "Ich habe früher mal Französisch gelernt." },
            { cn: "你曾经想过放弃吗？", pinyin: "Nǐ céngjīng xiǎng guo fàngqì ma?", de: "Hast du jemals daran gedacht aufzugeben?" }
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
      level: 'HSK2',
      intro: "Manchmal machen wir zwei Dinge gleichzeitig — essen und fernsehen, laufen und telefonieren. Im Chinesischen gibt es dafür die elegante Struktur <strong>一边...一边...</strong> (yìbiān...yìbiān...). Sie drückt aus, dass zwei Handlungen <strong>zur selben Zeit</strong> ablaufen. Anders als 又...又..., das Eigenschaften verbindet, verbindet 一边...一边... ausschließlich <strong>Handlungen</strong>.",
      sections: [
        {
          heading: "Grundstruktur: 一边 A 一边 B",
          text: "Die Formel lautet: Subjekt + <strong>一边</strong> + Verb₁ + <strong>一边</strong> + Verb₂. Beide Handlungen passieren gleichzeitig. Die Reihenfolge der beiden Verben ist meist flexibel.",
          examples: [
            { cn: "他一边吃饭一边看电视。", pinyin: "Tā yìbiān chīfàn yìbiān kàn diànshì.", de: "Er isst und schaut dabei fern." },
            { cn: "她一边走路一边打电话。", pinyin: "Tā yìbiān zǒulù yìbiān dǎ diànhuà.", de: "Sie geht und telefoniert dabei." },
            { cn: "我们一边喝茶一边聊天。", pinyin: "Wǒmen yìbiān hē chá yìbiān liáotiān.", de: "Wir trinken Tee und plaudern dabei." },
            { cn: "学生们一边听音乐一边做作业。", pinyin: "Xuéshēngmen yìbiān tīng yīnyuè yìbiān zuò zuòyè.", de: "Die Schüler hören Musik und machen dabei Hausaufgaben." }
          ],
          tip: "Im gesprochenen Chinesisch wird 一边 manchmal zu 边 verkürzt: 边吃边看. Das ist informell, aber sehr gebräuchlich."
        },
        {
          heading: "Vergleich mit 又...又...",
          text: "又...又... und 一边...一边... sind nicht austauschbar! <strong>又...又...</strong> verbindet <em>Eigenschaften oder Zustände</em>, <strong>一边...一边...</strong> verbindet <em>gleichzeitige Handlungen</em>.",
          examples: [
            { cn: "这个地方又安静又漂亮。", pinyin: "Zhège dìfang yòu ānjìng yòu piàoliang.", de: "Dieser Ort ist sowohl ruhig als auch schön. (Eigenschaften → 又...又)" },
            { cn: "她一边唱歌一边跳舞。", pinyin: "Tā yìbiān chànggē yìbiān tiàowǔ.", de: "Sie singt und tanzt gleichzeitig. (Handlungen → 一边...一边)" },
            { cn: "他又高又帅。", pinyin: "Tā yòu gāo yòu shuài.", de: "Er ist sowohl groß als auch gutaussehend. (Eigenschaften → 又...又)" },
            { cn: "他一边跑步一边听播客。", pinyin: "Tā yìbiān pǎobù yìbiān tīng bōkè.", de: "Er joggt und hört dabei Podcast. (Handlungen → 一边...一边)" }
          ],
          tip: "Faustregel: Wenn du „gleichzeitig\" sagen könntest, nimm 一边...一边. Wenn du „sowohl ... als auch\" sagen könntest, nimm 又...又."
        },
        {
          heading: "一面...一面 — Die formellere Variante",
          text: "<strong>一面...一面...</strong> (yímiàn...yímiàn...) hat exakt die gleiche Bedeutung wie 一边...一边..., ist aber <strong>formeller und schriftsprachlicher</strong>. In der Alltagssprache bevorzugt man 一边...一边...",
          examples: [
            { cn: "他一面工作一面学习。", pinyin: "Tā yímiàn gōngzuò yímiàn xuéxí.", de: "Er arbeitet und studiert gleichzeitig." },
            { cn: "政府一面发展经济一面保护环境。", pinyin: "Zhèngfǔ yímiàn fāzhǎn jīngjì yímiàn bǎohù huánjìng.", de: "Die Regierung entwickelt die Wirtschaft und schützt zugleich die Umwelt." },
            { cn: "她一面微笑一面说。", pinyin: "Tā yímiàn wēixiào yímiàn shuō.", de: "Sie sagte lächelnd. (wörtl.: Sie lächelte und sprach gleichzeitig)" }
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
      level: 'HSK2',
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
          tip: "Die ganze Präpositionalphrase 从...到... steht <strong>vor</strong> dem Verb, nie dahinter. Das ist wie im Deutschen: „Von A nach B <em>fahren</em>\"."
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
            { cn: "从明天开始我要减肥。", pinyin: "Cóng míngtiān kāishǐ wǒ yào jiǎnféi.", de: "Ab morgen werde ich abnehmen." },
            { cn: "从去年开始他就住在这里。", pinyin: "Cóng qùnián kāishǐ tā jiù zhù zài zhèlǐ.", de: "Seit letztem Jahr wohnt er hier." },
            { cn: "我们从第一课开始学。", pinyin: "Wǒmen cóng dì-yī kè kāishǐ xué.", de: "Wir fangen ab der ersten Lektion an zu lernen." },
            { cn: "从现在开始不许迟到。", pinyin: "Cóng xiànzài kāishǐ bù xǔ chídào.", de: "Ab jetzt ist Zuspätkommen nicht erlaubt." }
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
      level: 'HSK2/HSK3',
      intro: "Du weißt schon, dass etwas passiert ist — aber <em>wann</em> genau? <em>Wo</em>? <em>Wie</em>? <em>Mit wem</em>? Genau dafür gibt es die 是...的 Konstruktion. Sie ist perfekt, wenn die Handlung selbst nicht neu ist, du aber die <strong>Umstände</strong> betonen willst. Im Deutschen würden wir das durch Betonung ausdrücken: „Ich bin <em>gestern</em> gekommen\" vs. „Ich bin gestern <em>gekommen</em>.\" Im Chinesischen übernimmt 是...的 diese Aufgabe elegant.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Grundformel lautet: <strong>Subjekt + 是 + betonte Information + Verb + 的</strong>. 是 markiert den Anfang dessen, was betont wird, 的 schließt die Konstruktion ab. 是 kann umgangssprachlich auch weggelassen werden.",
          examples: [
            { cn: "我是昨天来的。", pinyin: "Wǒ shì zuótiān lái de.", de: "Ich bin gestern gekommen. (Betonung: wann)" },
            { cn: "她是坐飞机去的。", pinyin: "Tā shì zuò fēijī qù de.", de: "Sie ist mit dem Flugzeug geflogen. (Betonung: wie)" },
            { cn: "我们是在北京认识的。", pinyin: "Wǒmen shì zài Běijīng rènshi de.", de: "Wir haben uns in Peking kennengelernt. (Betonung: wo)" }
          ],
          tip: "是...的 wird fast ausschließlich für <strong>vergangene Ereignisse</strong> verwendet, deren Eintreten bereits bekannt ist."
        },
        {
          heading: "Position von 的 bei Objekten",
          text: "Wenn das Verb ein Objekt hat, kann 的 <strong>vor oder nach</strong> dem Objekt stehen. Vor dem Objekt ist formeller, nach dem Objekt umgangssprachlicher.",
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
            { cn: "你是什么时候毕业的？", pinyin: "Nǐ shì shénme shíhou bìyè de?", de: "Wann hast du deinen Abschluss gemacht?" },
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
      level: 'HSK2/HSK3',
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
          tip: "❌ Im Chinesischen kann man <strong>nicht</strong> 因为 und 所以 mit „weil\" und „deshalb\" im Deutschen gleichsetzen: Im Deutschen benutzt man nie beides gleichzeitig!"
        },
        {
          heading: "Einen Teil weglassen",
          text: "Man kann entweder 因为 oder 所以 weglassen — aber nicht beide! In der Alltagssprache wird oft nur einer der beiden Konnektoren benutzt.",
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
            { cn: "你怎么没来？——因为堵车了。", pinyin: "Nǐ zěnme méi lái? —— Yīnwèi dǔchē le.", de: "Wieso bist du nicht gekommen? — Weil es Stau gab." }
          ]
        },
        {
          heading: "Verwandte Strukturen",
          text: "Es gibt weitere Kausalausdrücke: <strong>由于</strong> (aufgrund von, formell), <strong>既然</strong> (da ja, wenn schon), <strong>之所以...是因为</strong> (der Grund ist, dass...).",
          examples: [
            { cn: "由于天气原因，航班取消了。", pinyin: "Yóuyú tiānqì yuányīn, hángbān qǔxiāo le.", de: "Aufgrund des Wetters wurde der Flug gestrichen." },
            { cn: "既然你来了，就坐下吧。", pinyin: "Jìrán nǐ lái le, jiù zuòxia ba.", de: "Da du nun mal hier bist, setz dich doch." },
            { cn: "他之所以成功，是因为他很努力。", pinyin: "Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.", de: "Der Grund für seinen Erfolg ist, dass er sich sehr anstrengt." }
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
      intro: "Im Chinesischen gibt es keine Präpositionen im europäischen Sinne — stattdessen benutzt man sogenannte <strong>Coverben</strong> (介词, jièci), die vor dem Hauptverb stehen und eine Beziehung zwischen Subjekt und Objekt herstellen. Vier der wichtigsten sind 给 (geben/für), 对 (gegenüber/zu), 跟 (mit) und 向 (in Richtung). Sie richtig einzusetzen macht den Unterschied zwischen holprigem und flüssigem Chinesisch.",
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
            { cn: "这个跟那个不一样。", pinyin: "Zhège gēn nàge bù yíyàng.", de: "Dieses ist nicht gleich wie jenes." }
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
            { cn: "你应该向老师请教。", pinyin: "Nǐ yīnggāi xiàng lǎoshī qǐngjiào.", de: "Du solltest den Lehrer um Rat fragen." }
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
      intro: "Im Deutschen sagen wir „aufessen\", „kaputtmachen\", „fertigschreiben\" — wir kleben das Ergebnis an das Verb. Im Chinesischen funktioniert das genauso, nur viel systematischer! Ein <strong>Resultativkomplement</strong> (结果补语) ist ein Zeichen, das direkt nach dem Verb steht und das <strong>Ergebnis</strong> der Handlung angibt. 看 (schauen) + 见 (wahrnehmen) = 看见 (sehen, erblicken). 听 (hören) + 懂 (verstehen) = 听懂 (verstehend hören). Diese Kombinationen sind enorm produktiv und machen dein Chinesisch sofort ausdrucksstärker.",
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
            { cn: "请把音乐放大一点。", pinyin: "Qǐng bǎ yīnyuè fàngdà yìdiǎn.", de: "Bitte mach die Musik etwas lauter." },
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
          tip: "Das Potentialkomplement (Lektion 9) nutzt 得/不 zwischen Verb und Komplement, um auszudrücken, ob man etwas schaffen <em>kann</em> oder nicht: 看得见 (kann sehen) vs. 看不见 (kann nicht sehen)."
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
      title: "程度补语 — Gradkomplemente mit 得",
      subtitle: "Wie gut, wie schlecht, wie intensiv?",
      level: 'HSK2/HSK3',
      intro: "Du möchtest sagen, dass jemand „gut singt\", „schnell rennt\" oder „so müde ist, dass er nicht mehr stehen kann\"? Dafür brauchst du <strong>Gradkomplemente</strong> (程度补语). Sie beschreiben den <strong>Grad</strong> oder die <strong>Art und Weise</strong>, wie eine Handlung ausgeführt wird — und sie werden mit dem Partikel <strong>得</strong> eingeleitet. Das ist dasselbe 得, das du aus Lektion 2 kennst, aber hier in seiner wichtigsten Funktion.",
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
          text: "Bei Verben mit Objekt gibt es zwei Möglichkeiten, das Gradkomplement einzubauen. Beide sind korrekt.",
          examples: [
            { cn: "他说中文说得很流利。", pinyin: "Tā shuō Zhōngwén shuō de hěn liúlì.", de: "Er spricht Chinesisch sehr fließend. (Verb wiederholt)" },
            { cn: "中文他说得很流利。", pinyin: "Zhōngwén tā shuō de hěn liúlì.", de: "Chinesisch spricht er sehr fließend. (Objekt vorgezogen)" },
            { cn: "她写汉字写得很漂亮。", pinyin: "Tā xiě Hànzì xiě de hěn piàoliang.", de: "Sie schreibt chinesische Schriftzeichen sehr schön." }
          ]
        },
        {
          heading: "Komplexe Beschreibungen",
          text: "Nach 得 kann auch ein ganzer <strong>Satz</strong> stehen, der die Intensität beschreibt. Das entspricht dem deutschen „so ... dass ...\".",
          examples: [
            { cn: "他累得不想说话。", pinyin: "Tā lèi de bù xiǎng shuōhuà.", de: "Er ist so müde, dass er nicht reden will." },
            { cn: "她高兴得跳了起来。", pinyin: "Tā gāoxìng de tiào le qǐlái.", de: "Sie war so glücklich, dass sie hochgesprungen ist." },
            { cn: "冷得我发抖。", pinyin: "Lěng de wǒ fādǒu.", de: "So kalt, dass ich zittere." }
          ],
          tip: "Gradkomplemente beschreiben eine <strong>konkrete Ausführung</strong>, daher können sie nicht mit 了₁ kombiniert werden (das markiert Abschluss). ❌ 她唱了得很好 → ✅ 她唱得很好."
        },
        {
          heading: "Fragen mit Gradkomplementen",
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
            { cn: "教室里坐着很多学生。", pinyin: "Jiàoshì lǐ zuò zhe hěn duō xuéshēng.", de: "Im Klassenzimmer sitzen viele Schüler." }
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
      level: 'HSK2/HSK3',
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
            { cn: "快要毕业了。", pinyin: "Kuài yào bìyè le.", de: "Der Abschluss steht kurz bevor." },
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
            { cn: "会议将于下周一召开。", pinyin: "Huìyì jiāng yú xià zhōuyī zhàokāi.", de: "Die Konferenz wird am kommenden Montag einberufen. (Formell)" },
            { cn: "这座桥将在明年完工。", pinyin: "Zhè zuò qiáo jiāng zài míngnián wángōng.", de: "Diese Brücke wird nächstes Jahr fertiggestellt. (Nachrichtenstil)" },
            { cn: "新政策将要开始实施。", pinyin: "Xīn zhèngcè jiāngyào kāishǐ shíshī.", de: "Die neue Politik wird bald umgesetzt. (Formell)" }
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
          text: "Verneinungswörter (不, 没) und Adverbien (已经, 都, 也) stehen <strong>vor 把</strong>, nicht nach 把.",
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
            { cn: "✅ 我把那本书看了。", pinyin: "Wǒ bǎ nà běn shū kàn le.", de: "Ich habe dieses Buch gelesen." },
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
      level: 'HSK3',
      intro: "Im Deutschen sagen wir „Obwohl es regnet, gehe ich spazieren\" — ein typischer Konzessivsatz. Im Chinesischen funktioniert das mit <strong>虽然...但是/可是/不过</strong>. Der spannende Unterschied: Im Chinesischen stehen <em>beide</em> Konnektoren im Satz! Im Deutschen reicht „obwohl\" allein, aber Chinesisch braucht das Paar: „Obwohl..., trotzdem...\". Das ist ein typisches Muster für chinesische <strong>Paar-Konjunktionen</strong> (关联词).",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>虽然 + Einräumung, 但是/可是/不过 + Hauptaussage</strong>. Beide Teile können dasselbe Subjekt oder verschiedene Subjekte haben.",
          examples: [
            { cn: "虽然很累，但是我很开心。", pinyin: "Suīrán hěn lèi, dànshì wǒ hěn kāixīn.", de: "Obwohl ich müde bin, bin ich glücklich." },
            { cn: "虽然他很聪明，可是不努力。", pinyin: "Suīrán tā hěn cōngming, kěshì bù nǔlì.", de: "Obwohl er klug ist, strengt er sich nicht an." },
            { cn: "虽然下雨了，不过我们还是去了。", pinyin: "Suīrán xià yǔ le, búguò wǒmen háishì qù le.", de: "Obwohl es geregnet hat, sind wir trotzdem gegangen." }
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
            { cn: "虽然很难，我还是想试试。", pinyin: "Suīrán hěn nán, wǒ háishì xiǎng shìshi.", de: "Obwohl es schwer ist, möchte ich es trotzdem versuchen." },
            { cn: "虽然他道歉了，她却不原谅他。", pinyin: "Suīrán tā dàoqiàn le, tā què bù yuánliàng tā.", de: "Obwohl er sich entschuldigt hat, verzeiht sie ihm nicht." },
            { cn: "虽然过了很多年，他仍然记得。", pinyin: "Suīrán guò le hěn duō nián, tā réngrán jìde.", de: "Obwohl viele Jahre vergangen sind, erinnert er sich immer noch." }
          ],
          tip: "却 steht direkt vor dem Verb und klingt literarischer. In der Alltagssprache ist 还是 natürlicher."
        },
        {
          heading: "Häufige Fehler",
          text: "Achtung! Im Chinesischen darf man 虽然 und 但是 <strong>nicht mit 可是 oder 但是 am Satzanfang</strong> verwechseln, wenn kein 虽然 vorangeht. 但是 allein am Satzanfang bedeutet einfach „aber\".",
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
            { cn: "不但中国人吃饺子，外国人也爱吃。", pinyin: "Búdàn Zhōngguórén chī jiǎozi, wàiguórén yě ài chī.", de: "Nicht nur Chinesen essen Jiaozi, auch Ausländer lieben sie." }
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
            { cn: "这个字太小了，看不清楚。", pinyin: "Zhège zì tài xiǎo le, kàn bu qīngchu.", de: "Diese Schriftzeichen sind zu klein, ich kann sie nicht deutlich sehen. (看得清楚/看不清楚)" }
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
      intro: "Im Chinesischen gibt es mehrere Möglichkeiten, einen Bezugsrahmen oder eine Perspektive einzuführen. <strong>对...来说</strong> markiert, aus wessen <em>Sicht</em> etwas gilt. <strong>关于</strong> führt ein <em>Thema</em> ein, über das gesprochen wird. <strong>至于</strong> leitet einen <em>Themenwechsel</em> ein. Und <strong>对...有好处</strong> beschreibt, wofür etwas <em>gut oder hilfreich</em> ist. Diese Strukturen helfen dir, präzise auszudrücken, worüber und aus welcher Perspektive du sprichst.",
      sections: [
        {
          heading: "对...来说 — für / aus Sicht von",
          text: "<strong>对 + Person + 来说</strong> bedeutet „für jemanden\" oder „aus der Sicht von jemandem\". Es rahmt die folgende Aussage als <em>persönliche Perspektive</em> ein. Es steht meistens am Satzanfang.",
          examples: [
            { cn: "对我来说，学中文很有意思。", pinyin: "Duì wǒ lái shuō, xué Zhōngwén hěn yǒu yìsi.", de: "Für mich ist Chinesischlernen sehr interessant." },
            { cn: "对孩子来说，这个游戏太难了。", pinyin: "Duì háizi lái shuō, zhège yóuxì tài nán le.", de: "Für Kinder ist dieses Spiel zu schwer." },
            { cn: "对外国人来说，汉字最难。", pinyin: "Duì wàiguórén lái shuō, Hànzì zuì nán.", de: "Für Ausländer sind die Schriftzeichen am schwierigsten." },
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
          text: "<strong>至于</strong> leitet einen <em>Themenwechsel</em> ein und bedeutet „was ... betrifft\" oder „hinsichtlich\". Es wird verwendet, um von einem Thema auf ein anderes überzuleiten, oft mit dem Unterton „das ist eine andere Sache\".",
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
      level: 'HSK3/HSK4',
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
            { cn: "这部电影被很多人喜欢。", pinyin: "Zhè bù diànyǐng bèi hěn duō rén xǐhuan.", de: "Dieser Film wird von vielen Leuten gemocht." }
          ],
          tip: "Alternativen zu 被: In der gesprochenen Sprache hört man auch <strong>叫 (jiào)</strong> und <strong>让 (ràng)</strong> für passivische Konstruktionen, besonders in nordchinesischen Dialekten."
        },
        {
          heading: "被 vs. aktive Umformulierung",
          text: "Im Chinesischen klingt es oft natürlicher, das Passiv zu <strong>vermeiden</strong> und aktiv umzuformulieren. Muttersprachler bevorzugen häufig die aktive Form oder die Thema-Kommentar-Struktur.",
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
      level: 'HSK3/HSK4',
      intro: "Im Chinesischen kannst du mit Richtungskomplementen (趋向补语) unglaublich präzise beschreiben, <em>wohin</em> sich etwas bewegt. 来 (her, zum Sprecher) und 去 (hin, weg vom Sprecher) bilden die Basis. Dazu kommen Verben wie 上 (rauf), 下 (runter), 进 (rein), 出 (raus), 回 (zurück), 过 (vorbei), 起 (auf). Kombiniere sie, und du bekommst Ausdrücke wie 走进来 (hereinkommen) oder 跑出去 (hinausrennen). Es ist wie ein Baukastensystem!",
      sections: [
        {
          heading: "Einfache Richtungskomplemente",
          text: "Die einfachsten sind <strong>来</strong> (hierher) und <strong>去</strong> (dorthin), direkt nach dem Bewegungsverb.",
          examples: [
            { cn: "他走过来了。", pinyin: "Tā zǒu guòlái le.", de: "Er ist herübergekommen." },
            { cn: "请进来！", pinyin: "Qǐng jìnlái!", de: "Komm bitte herein!" },
            { cn: "她跑出去了。", pinyin: "Tā pǎo chūqù le.", de: "Sie ist hinausgerannt." }
          ],
          tip: "来 = Bewegung <strong>zum Sprecher</strong> hin. 去 = Bewegung <strong>vom Sprecher</strong> weg. Das ist der entscheidende Unterschied!"
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
      level: 'HSK3/HSK4',
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
            { cn: "老师越严格，学生越认真。", pinyin: "Lǎoshī yuè yángé, xuéshēng yuè rènzhēn.", de: "Je strenger der Lehrer, desto gewissenhafter die Schüler." },
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
      intro: "Wenn du im Deutschen sagst „Sogar mein Hund versteht das!\", betonst du, dass etwas extrem überraschend oder unerwartet ist. Im Chinesischen gibt es dafür die elegante <strong>连...都/也</strong>-Konstruktion. 连 markiert das überraschende Element, 都 oder 也 verstärkt die Aussage. Diese Struktur ist in der gehobenen Alltagssprache extrem häufig und gibt deinem Chinesisch sofort mehr Ausdruckskraft.",
      sections: [
        {
          heading: "Grundstruktur",
          text: "Die Formel: <strong>连 + betontes Element + 都/也 + Verb</strong>. 连 hebt hervor, was überraschend ist, und 都 oder 也 betont das „sogar\".",
          examples: [
            { cn: "他连自己的名字都不会写。", pinyin: "Tā lián zìjǐ de míngzì dōu bú huì xiě.", de: "Er kann nicht mal seinen eigenen Namen schreiben." },
            { cn: "连小孩子都知道。", pinyin: "Lián xiǎo háizi dōu zhīdào.", de: "Sogar kleine Kinder wissen das." },
            { cn: "我连一块钱也没有。", pinyin: "Wǒ lián yí kuài qián yě méiyǒu.", de: "Ich habe nicht mal einen Yuan." }
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
            { cn: "他名字都不知道。", pinyin: "Tā míngzì dōu bù zhīdào.", de: "Er kennt nicht mal den Namen. (连 weggelassen)" },
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
      level: 'HSK4',
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
          tip: "Häufiger Fehler: 既...又 kann <strong>nicht</strong> für Handlungen in der Vergangenheit mit 了 verwendet werden. Für vergangene gleichzeitige Aktionen nimm 又...又: ❌ 她既唱了又跳了 → ✅ 她又唱又跳."
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
            { cn: "不论你做什么决定，我都支持你。", pinyin: "Bùlùn nǐ zuò shénme juédìng, wǒ dōu zhīchí nǐ.", de: "Welche Entscheidung du auch triffst, ich unterstütze dich." },
            { cn: "不论成功还是失败，经验都很重要。", pinyin: "Bùlùn chénggōng háishi shībài, jīngyàn dōu hěn zhòngyào.", de: "Ob Erfolg oder Misserfolg, die Erfahrung ist immer wertvoll." },
            { cn: "不论天气怎样，比赛都会进行。", pinyin: "Bùlùn tiānqì zěnyàng, bǐsài dōu huì jìnxíng.", de: "Egal wie das Wetter ist, der Wettkampf findet statt." }
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
      level: 'HSK4',
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
            { cn: "她宁可不吃饭，也不迟到。", pinyin: "Tā nìngkě bù chīfàn, yě bú chídào.", de: "Sie verzichtet lieber aufs Essen, als zu spät zu kommen." },
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
          tip: "Eselsbrücke: <strong>与其</strong> beginnt mit der Option, die man <em>verwirft</em> (与 = „mit/statt\" → „statt das zu tun...\"). <strong>宁可</strong> beginnt mit der Option, die man <em>wählt</em> (宁 = „lieber\" → „ich mache lieber...\")."
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
          tip: "不如 kann auch allein stehen und bedeutet dann „es ist besser zu...\" oder „nicht so gut wie\": 你不如自己去 (Du gehst besser selbst). 他不如我高 (Er ist nicht so groß wie ich). Das ist eine nützliche Alltagswendung!"
        }
      ]
    }
  ];


  var lessonsContainer = null;
  var currentOpen = null;

  function renderLessonCard(lesson) {
    var card = document.createElement('div');
    card.className = 'gl-card';
    card.setAttribute('data-lesson', lesson.id);

    var header = document.createElement('div');
    header.className = 'gl-card-header';
    header.tabIndex = 0;
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');

    header.innerHTML =
      '<span class="gl-card-number">' + lesson.number + '</span>' +
      '<div class="gl-card-titles">' +
        '<span class="gl-card-title">' + lesson.title + '</span>' +
        '<span class="gl-card-subtitle">' + lesson.subtitle + '</span>' +
      '</div>' +
      '<span class="gl-card-level card-level ' + lesson.level.split('/')[0] + '">' + lesson.level + '</span>' +
      '<svg class="gl-card-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';

    var body = document.createElement('div');
    body.className = 'gl-card-body collapsed';
    body.innerHTML = renderLessonContent(lesson);

    function toggle() {
      if (window.app) window.app.playTick();
      var isOpen = !body.classList.contains('collapsed');
      if (isOpen) {
        body.classList.add('collapsed');
        header.querySelector('.gl-card-chevron').classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
        currentOpen = null;
      } else {
        if (currentOpen && currentOpen !== body) {
          currentOpen.classList.add('collapsed');
          currentOpen.previousElementSibling.querySelector('.gl-card-chevron').classList.remove('open');
          currentOpen.previousElementSibling.setAttribute('aria-expanded', 'false');
        }
        body.classList.remove('collapsed');
        header.querySelector('.gl-card-chevron').classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        currentOpen = body;
        setTimeout(function () {
          header.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    }

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    card.appendChild(header);
    card.appendChild(body);
    return card;
  }

  function renderLessonContent(lesson) {
    var html = '<div class="gl-intro">' + lesson.intro + '</div>';
    lesson.sections.forEach(function (sec) {
      html += '<div class="gl-section">';
      html += '<h4 class="gl-section-heading">' + sec.heading + '</h4>';
      if (sec.text) html += '<div class="gl-section-text">' + sec.text + '</div>';
      if (sec.examples && sec.examples.length > 0) {
        html += '<div class="gl-examples">';
        sec.examples.forEach(function (ex) {
          html += '<div class="gl-example">';
          html += '<div class="gl-example-jp">' + ex.cn + '</div>';
          if (ex.pinyin) html += '<div class="gl-example-romaji">' + ex.pinyin + '</div>';
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

  // Filtering
  var lessonQuery = '';
  var lessonLevel = 'all';
  var lessonSearchTimeout = null;

  function lessonMatchesLevel(lesson, level) {
    if (level === 'all') return true;
    return lesson.level.indexOf(level) !== -1;
  }

  function lessonMatchesQuery(lesson, q) {
    if (!q) return true;
    var lower = q.toLowerCase();
    if (lesson.title.toLowerCase().indexOf(lower) !== -1) return true;
    if (lesson.subtitle.toLowerCase().indexOf(lower) !== -1) return true;
    if (lesson.intro.toLowerCase().indexOf(lower) !== -1) return true;
    for (var i = 0; i < lesson.sections.length; i++) {
      var sec = lesson.sections[i];
      if (sec.heading && sec.heading.toLowerCase().indexOf(lower) !== -1) return true;
      if (sec.text && sec.text.toLowerCase().indexOf(lower) !== -1) return true;
      if (sec.tip && sec.tip.toLowerCase().indexOf(lower) !== -1) return true;
      if (sec.examples) {
        for (var j = 0; j < sec.examples.length; j++) {
          var ex = sec.examples[j];
          if (ex.cn && ex.cn.indexOf(q) !== -1) return true;
          if (ex.pinyin && ex.pinyin.toLowerCase().indexOf(lower) !== -1) return true;
          if (ex.de && ex.de.toLowerCase().indexOf(lower) !== -1) return true;
        }
      }
    }
    return false;
  }

  function filterLessons() {
    if (!lessonsContainer) return;
    var cards = lessonsContainer.querySelectorAll('.gl-card');
    var count = 0;
    for (var i = 0; i < cards.length; i++) {
      var lesson = LESSONS[i];
      var show = lessonMatchesLevel(lesson, lessonLevel) && lessonMatchesQuery(lesson, lessonQuery);
      cards[i].classList.toggle('hidden', !show);
      if (show) count++;
    }
    var countEl = document.getElementById('gl-count');
    if (countEl) countEl.textContent = count + ' Lektionen';
    var noResults = document.getElementById('gl-no-results');
    if (noResults) noResults.classList.toggle('hidden', count > 0);
  }

  function initLessons() {
    var grammarControls = document.getElementById('grammar-controls');
    var grammarGrid = document.getElementById('grammar-grid');
    var grammarNoResults = document.getElementById('grammar-no-results');
    var grammarTab = document.getElementById('grammar-tab');
    if (!grammarControls || !grammarTab) return;

    var toggleRow = document.createElement('div');
    toggleRow.className = 'gl-view-toggle';
    toggleRow.innerHTML =
      '<button class="gl-view-btn active" data-view="reference">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h8"/></svg>' +
        'Nachschlagen</button>' +
      '<button class="gl-view-btn" data-view="lessons">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' +
        'Lektionen</button>';

    grammarControls.insertBefore(toggleRow, grammarControls.firstChild);

    var origSearchBar = grammarControls.querySelector('.search-bar');
    if (origSearchBar) origSearchBar.classList.add('grammar-ref-search');
    grammarControls.querySelectorAll(':scope > .filters').forEach(function (f) {
      f.classList.add('grammar-ref-filters');
    });

    var lessonControls = document.createElement('div');
    lessonControls.id = 'gl-controls';
    lessonControls.className = 'hidden';
    lessonControls.innerHTML =
      '<div class="search-bar">' +
        '<svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
        '<input type="text" id="gl-search" placeholder="Lektion suchen (Thema, Grammatik, Erklärung...)" autocomplete="off">' +
        '<button id="gl-clear-search" class="btn-clear" title="Suche löschen">&times;</button>' +
      '</div>' +
      '<div class="filters">' +
        '<div class="level-filters">' +
          '<button class="filter-btn gl-level active" data-gllevel="all">Alle</button>' +
          '<button class="filter-btn gl-level hsk1" data-gllevel="HSK1">HSK 1</button>' +
          '<button class="filter-btn gl-level hsk2" data-gllevel="HSK2">HSK 2</button>' +
          '<button class="filter-btn gl-level hsk3" data-gllevel="HSK3">HSK 3</button>' +
          '<button class="filter-btn gl-level hsk4" data-gllevel="HSK4">HSK 4</button>' +
          '<button class="filter-btn gl-level hsk5" data-gllevel="HSK5">HSK 5</button>' +
          '<button class="filter-btn gl-level hsk6" data-gllevel="HSK6">HSK 6</button>' +
        '</div>' +
        '<span id="gl-count" class="gl-count">' + LESSONS.length + ' Lektionen</span>' +
      '</div>';

    grammarControls.appendChild(lessonControls);

    var glSearch = document.getElementById('gl-search');
    var glClear = document.getElementById('gl-clear-search');

    glSearch.addEventListener('input', function () {
      clearTimeout(lessonSearchTimeout);
      glClear.classList.toggle('visible', glSearch.value.length > 0);
      lessonSearchTimeout = setTimeout(function () {
        lessonQuery = glSearch.value.trim();
        filterLessons();
      }, 200);
    });

    glClear.addEventListener('click', function () {
      glSearch.value = '';
      glClear.classList.remove('visible');
      lessonQuery = '';
      filterLessons();
      glSearch.focus();
    });

    lessonControls.querySelectorAll('.gl-level').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lessonControls.querySelectorAll('.gl-level').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        lessonLevel = btn.getAttribute('data-gllevel');
        filterLessons();
        if (window.app) window.app.playSwoosh();
      });
    });

    lessonsContainer = document.createElement('div');
    lessonsContainer.id = 'grammar-lessons';
    lessonsContainer.className = 'gl-container hidden';

    LESSONS.forEach(function (lesson) {
      lessonsContainer.appendChild(renderLessonCard(lesson));
    });

    var noRes = document.createElement('div');
    noRes.id = 'gl-no-results';
    noRes.className = 'no-results hidden';
    noRes.innerHTML = '<p>Keine Lektionen gefunden.</p>';
    lessonsContainer.appendChild(noRes);

    grammarTab.insertBefore(lessonsContainer, grammarGrid);

    var refSearchBar = grammarControls.querySelector('.grammar-ref-search');
    var refFilterRows = grammarControls.querySelectorAll('.grammar-ref-filters');
    var viewBtns = toggleRow.querySelectorAll('.gl-view-btn');

    viewBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.app) window.app.playTick();
        var view = this.getAttribute('data-view');
        viewBtns.forEach(function (b) { b.classList.toggle('active', b === btn); });

        if (view === 'lessons') {
          refSearchBar.classList.add('hidden');
          refFilterRows.forEach(function (f) { f.classList.add('hidden'); });
          grammarGrid.classList.add('hidden');
          grammarNoResults.classList.add('hidden');
          lessonControls.classList.remove('hidden');
          lessonsContainer.classList.remove('hidden');
        } else {
          refSearchBar.classList.remove('hidden');
          refFilterRows.forEach(function (f) { f.classList.remove('hidden'); });
          grammarGrid.classList.remove('hidden');
          lessonControls.classList.add('hidden');
          lessonsContainer.classList.add('hidden');
          if (window.app && window.app.sections.grammar) {
            window.app.sections.grammar.applyFilters();
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLessons);
  } else {
    initLessons();
  }
})();
