// Grammar Lessons Module for Zhongwen Explorer (HSK 1–6)
(function () {
  'use strict';

  var LESSONS = [
    // ── Lesson 1: 了 (le) ──────────────────────────────────────────────
    {
      id: 'lesson-1',
      number: 1,
      title: '了 (le)',
      subtitle: 'Aspektpartikel vs. Satzfinalpartikel',
      level: 'HSK1/HSK2',
      intro: '了 ist vermutlich der berühmteste — und berüchtigtste — Partikel der chinesischen Sprache. Viele Lernende denken zuerst: „Ah, das ist die Vergangenheitsform!" Aber so einfach ist es leider nicht. 了 hat <em>zwei</em> grundverschiedene Funktionen, je nachdem, wo es im Satz steht. Direkt nach dem Verb zeigt es den <strong>Abschluss einer Handlung</strong> an (Aspektpartikel 了₁). Am Satzende signalisiert es eine <strong>veränderte Situation oder neue Gegebenheit</strong> (Satzfinalpartikel 了₂). Und ja — manchmal treten beide gleichzeitig auf. Wenn du diesen Partikel wirklich verstehst, hast du einen riesigen Schritt im Chinesischen gemacht.',
      sections: [
        {
          heading: '了₁ — Aspektpartikel (nach dem Verb)',
          text: 'Wenn 了 direkt nach dem Verb steht, markiert es, dass die Handlung <strong>abgeschlossen</strong> ist. Das kann in der Vergangenheit sein, muss es aber nicht — auch zukünftige Handlungen können mit 了₁ als abgeschlossen markiert werden. Entscheidend ist: Die Handlung hat ein klares Ende erreicht.',
          examples: [
            { cn: '我买了一本书。', pinyin: 'Wǒ mǎi le yì běn shū.', de: 'Ich habe ein Buch gekauft.' },
            { cn: '她喝了三杯咖啡。', pinyin: 'Tā hē le sān bēi kāfēi.', de: 'Sie hat drei Tassen Kaffee getrunken.' },
            { cn: '你吃了药再走。', pinyin: 'Nǐ chī le yào zài zǒu.', de: 'Nimm erst die Medizin, dann geh. (Zukunft!)' }
          ],
          tip: '了₁ steht <strong>immer direkt nach dem Verb</strong>. Wenn ein Objekt folgt, braucht es oft eine Mengenangabe oder ein Attribut (也买了一本书), sonst klingt der Satz unvollständig.'
        },
        {
          heading: '了₂ — Satzfinalpartikel (am Satzende)',
          text: 'Am Satzende zeigt 了 an, dass sich etwas <strong>verändert hat</strong> oder eine <strong>neue Situation</strong> eingetreten ist. Es drückt aus: „Jetzt ist es anders als vorher." Das kann auch Gegenwärtiges beschreiben!',
          examples: [
            { cn: '下雨了。', pinyin: 'Xià yǔ le.', de: 'Es regnet jetzt. (Vorher nicht!)' },
            { cn: '我不想吃了。', pinyin: 'Wǒ bù xiǎng chī le.', de: 'Ich will nicht mehr essen. (Gerade hat sich das geändert.)' },
            { cn: '他是大学生了。', pinyin: 'Tā shì dàxuéshēng le.', de: 'Er ist jetzt Student. (Neue Situation.)' }
          ],
          tip: '了₂ am Satzende hat nichts mit Vergangenheit zu tun! Es betont den <strong>Wandel</strong>. Vergleiche: 他很高 (Er ist groß) vs. 他很高了 (Er ist jetzt groß geworden).'
        },
        {
          heading: 'Beide 了 gleichzeitig',
          text: 'Manchmal treffen 了₁ und 了₂ aufeinander — das Verb hat einen Abschlussmarker <em>und</em> der Satz drückt eine neue Situation aus. Oft verschmelzen sie zu einem einzigen 了 am Satzende, wenn das Objekt keine Mengenangabe hat.',
          examples: [
            { cn: '我吃了饭了。', pinyin: 'Wǒ chī le fàn le.', de: 'Ich habe (jetzt) gegessen. (Beide 了 sichtbar.)' },
            { cn: '我已经做了作业了。', pinyin: 'Wǒ yǐjīng zuò le zuòyè le.', de: 'Ich habe die Hausaufgaben bereits gemacht.' }
          ],
          tip: 'Wenn du unsicher bist, welches 了 gemeint ist: Frag dich — betont der Satz den <strong>Abschluss der Handlung</strong> (→ 了₁) oder die <strong>neue Situation</strong> (→ 了₂)?'
        },
        {
          heading: 'Verneinung mit 了',
          text: 'Um eine abgeschlossene Handlung zu verneinen, benutzt man <strong>没(有)</strong>, nicht 不. Und: Wenn 没 benutzt wird, fällt 了 weg!',
          examples: [
            { cn: '我没买书。', pinyin: 'Wǒ méi mǎi shū.', de: 'Ich habe kein Buch gekauft.' },
            { cn: '她没去过中国。', pinyin: 'Tā méi qù guo Zhōngguó.', de: 'Sie ist nie in China gewesen.' },
            { cn: '他没来。', pinyin: 'Tā méi lái.', de: 'Er ist nicht gekommen.' }
          ],
          tip: '没 + Verb = Handlung hat nicht stattgefunden. Kein 了 nötig! Das ist ein häufiger Fehler: ❌ 我没买了书 → ✅ 我没买书.'
        }
      ]
    },

    // ── Lesson 2: 的, 地, 得 ──────────────────────────────────────────
    {
      id: 'lesson-2',
      number: 2,
      title: '的, 地, 得',
      subtitle: 'Die drei „de" — Struktur, Adverb, Komplement',
      level: 'HSK1/HSK2',
      intro: 'Im gesprochenen Chinesisch klingen sie fast gleich, aber schriftlich haben 的, 地 und 得 völlig verschiedene Aufgaben. Stell dir vor, sie wären drei Geschwister: <strong>的</strong> verbindet Attribute mit Nomen (wie „der große Hund"), <strong>地</strong> verbindet Adverbien mit Verben (wie „schnell rennen"), und <strong>得</strong> leitet Komplemente ein, die beschreiben, <em>wie gut oder schlecht</em> etwas getan wird. Wenn du diese drei auseinanderhalten kannst, wird dein Chinesisch sofort natürlicher klingen.',
      sections: [
        {
          heading: '的 — Attributpartikel',
          text: '的 steht zwischen einem <strong>Attribut</strong> und einem <strong>Nomen</strong>. Es funktioniert ähnlich wie das deutsche „von" oder ein Genitiv. Alles, was ein Nomen näher beschreibt, kann vor 的 stehen: Adjektive, Pronomen, Relativsätze und mehr.',
          examples: [
            { cn: '我的书', pinyin: 'wǒ de shū', de: 'mein Buch' },
            { cn: '漂亮的花', pinyin: 'piàoliang de huā', de: 'schöne Blumen' },
            { cn: '妈妈做的菜', pinyin: 'māma zuò de cài', de: 'das Gericht, das Mama gekocht hat' },
            { cn: '昨天来的人', pinyin: 'zuótiān lái de rén', de: 'die Person, die gestern kam' }
          ],
          tip: 'Bei einsilbigen Adjektiven vor Nomen fällt 的 oft weg: 好人 (guter Mensch), 大城市 (große Stadt). Bei zweisilbigen bleibt es: 漂亮的花.'
        },
        {
          heading: '地 — Adverbialpartikel',
          text: '地 steht zwischen einem <strong>Adverb oder adverbialen Ausdruck</strong> und einem <strong>Verb</strong>. Es beschreibt, <em>auf welche Weise</em> die Handlung ausgeführt wird.',
          examples: [
            { cn: '她高兴地笑了。', pinyin: 'Tā gāoxìng de xiào le.', de: 'Sie lachte fröhlich.' },
            { cn: '他认真地学习。', pinyin: 'Tā rènzhēn de xuéxí.', de: 'Er lernt gewissenhaft.' },
            { cn: '孩子们快乐地玩。', pinyin: 'Háizimen kuàilè de wán.', de: 'Die Kinder spielen fröhlich.' }
          ],
          tip: 'In der Alltagssprache wird 地 oft durch 的 ersetzt, besonders in informellen Texten. In Prüfungen und formellen Texten solltest du aber den Unterschied kennen.'
        },
        {
          heading: '得 — Komplementpartikel',
          text: '得 steht nach einem <strong>Verb</strong> und leitet ein <strong>Komplement</strong> ein, das beschreibt, wie die Handlung ausgeführt wurde — also das Ergebnis oder den Grad. Denk daran: 得 beantwortet die Frage „Wie gut/schlecht?"',
          examples: [
            { cn: '她说得很好。', pinyin: 'Tā shuō de hěn hǎo.', de: 'Sie spricht sehr gut.' },
            { cn: '他跑得很快。', pinyin: 'Tā pǎo de hěn kuài.', de: 'Er rennt sehr schnell.' },
            { cn: '我累得不想动。', pinyin: 'Wǒ lèi de bù xiǎng dòng.', de: 'Ich bin so müde, dass ich mich nicht bewegen will.' }
          ],
          tip: 'Merke dir die Richtung: 的 zeigt nach <strong>rechts zum Nomen</strong>, 地 zeigt nach <strong>rechts zum Verb</strong>, 得 zeigt nach <strong>links zum Verb</strong> (es kommt nach dem Verb).'
        },
        {
          heading: 'Zusammenfassung & Eselsbrücke',
          text: 'Eine einfache Formel: <strong>Attribut + 的 + Nomen</strong> | <strong>Adverb + 地 + Verb</strong> | <strong>Verb + 得 + Komplement</strong>. Auf Deutsch: 的 = „welcher/welche?", 地 = „wie? (vor dem Verb)", 得 = „wie gut? (nach dem Verb)".',
          examples: [
            { cn: '她是一个努力的学生。', pinyin: 'Tā shì yí gè nǔlì de xuéshēng.', de: 'Sie ist eine fleißige Studentin. (的 → Attribut)' },
            { cn: '她努力地学习。', pinyin: 'Tā nǔlì de xuéxí.', de: 'Sie lernt fleißig. (地 → Adverb)' },
            { cn: '她学得很努力。', pinyin: 'Tā xué de hěn nǔlì.', de: 'Sie lernt sehr fleißig. (得 → Komplement)' }
          ]
        }
      ]
    },

    // ── Lesson 3: 是...的 Konstruktion ─────────────────────────────────
    {
      id: 'lesson-3',
      number: 3,
      title: '是...的 Konstruktion',
      subtitle: 'Betonung vergangener Umstände',
      level: 'HSK2/HSK3',
      intro: 'Du weißt schon, dass etwas passiert ist — aber <em>wann</em> genau? <em>Wo</em>? <em>Wie</em>? <em>Mit wem</em>? Genau dafür gibt es die 是...的 Konstruktion. Sie ist perfekt, wenn die Handlung selbst nicht neu ist, du aber die <strong>Umstände</strong> betonen willst. Im Deutschen würden wir das durch Betonung ausdrücken: „Ich bin <em>gestern</em> gekommen" vs. „Ich bin gestern <em>gekommen</em>." Im Chinesischen übernimmt 是...的 diese Aufgabe elegant.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: 'Die Grundformel lautet: <strong>Subjekt + 是 + betonte Information + Verb + 的</strong>. 是 markiert den Anfang dessen, was betont wird, 的 schließt die Konstruktion ab. 是 kann umgangssprachlich auch weggelassen werden.',
          examples: [
            { cn: '我是昨天来的。', pinyin: 'Wǒ shì zuótiān lái de.', de: 'Ich bin gestern gekommen. (Betonung: wann)' },
            { cn: '她是坐飞机去的。', pinyin: 'Tā shì zuò fēijī qù de.', de: 'Sie ist mit dem Flugzeug geflogen. (Betonung: wie)' },
            { cn: '我们是在北京认识的。', pinyin: 'Wǒmen shì zài Běijīng rènshi de.', de: 'Wir haben uns in Peking kennengelernt. (Betonung: wo)' }
          ],
          tip: '是...的 wird fast ausschließlich für <strong>vergangene Ereignisse</strong> verwendet, deren Eintreten bereits bekannt ist.'
        },
        {
          heading: 'Position von 的 bei Objekten',
          text: 'Wenn das Verb ein Objekt hat, kann 的 <strong>vor oder nach</strong> dem Objekt stehen. Vor dem Objekt ist formeller, nach dem Objekt umgangssprachlicher.',
          examples: [
            { cn: '你是在哪儿买的这本书？', pinyin: 'Nǐ shì zài nǎr mǎi de zhè běn shū?', de: 'Wo hast du dieses Buch gekauft? (的 vor dem Objekt)' },
            { cn: '你是在哪儿买这本书的？', pinyin: 'Nǐ shì zài nǎr mǎi zhè běn shū de?', de: 'Wo hast du dieses Buch gekauft? (的 am Satzende)' },
            { cn: '我是跟朋友一起来的。', pinyin: 'Wǒ shì gēn péngyou yìqǐ lái de.', de: 'Ich bin mit Freunden zusammen gekommen.' }
          ]
        },
        {
          heading: 'Verneinung',
          text: 'Die Verneinung erfolgt mit <strong>不是...的</strong>. Man verneint die Umstände, nicht die Handlung selbst.',
          examples: [
            { cn: '我不是坐公交车来的。', pinyin: 'Wǒ bú shì zuò gōngjiāochē lái de.', de: 'Ich bin nicht mit dem Bus gekommen.' },
            { cn: '这不是我写的。', pinyin: 'Zhè bú shì wǒ xiě de.', de: 'Das habe nicht ich geschrieben.' }
          ],
          tip: 'Verwechsle 是...的 nicht mit dem einfachen Attribut-的! 我写的书 (das Buch, das ich geschrieben habe) ist ein Attributsatz, keine 是...的-Konstruktion.'
        },
        {
          heading: 'Wann benutzt man es?',
          text: 'Die 是...的 Konstruktion ist ideal für <strong>Rückfragen</strong> und <strong>Klarstellungen</strong>. Typische Fragewörter: 什么时候 (wann), 在哪儿 (wo), 怎么 (wie), 跟谁 (mit wem), 为什么 (warum).',
          examples: [
            { cn: '你是什么时候毕业的？', pinyin: 'Nǐ shì shénme shíhou bìyè de?', de: 'Wann hast du deinen Abschluss gemacht?' },
            { cn: '你是为什么学中文的？', pinyin: 'Nǐ shì wèi shénme xué Zhōngwén de?', de: 'Warum lernst du Chinesisch?' }
          ]
        }
      ]
    },

    // ── Lesson 4: 把 Konstruktion ──────────────────────────────────────
    {
      id: 'lesson-4',
      number: 4,
      title: '把 (bǎ) Konstruktion',
      subtitle: 'Objekt vor das Verb stellen',
      level: 'HSK3',
      intro: 'Die 把-Konstruktion ist einer der Momente, wo Chinesisch wirklich anders tickt als Deutsch. Normalerweise steht im Chinesischen das Objekt nach dem Verb (我吃苹果). Aber manchmal willst du betonen, dass du mit dem Objekt <strong>etwas Bestimmtes anstellst</strong> — du veränderst es, bewegst es, verarbeitest es. Dann ziehst du das Objekt mit 把 vor das Verb: 我把苹果吃了. Die 把-Konstruktion drückt aus, dass das Subjekt <strong>aktiv auf das Objekt einwirkt</strong> und es dabei verändert.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: 'Die Formel: <strong>Subjekt + 把 + Objekt + Verb + Komplement/了/andere Ergänzung</strong>. Wichtig: Das Verb darf nicht „nackt" stehen — es braucht immer etwas Zusätzliches (了, ein Komplement, eine Richtungsangabe, etc.).',
          examples: [
            { cn: '请把门关上。', pinyin: 'Qǐng bǎ mén guānshang.', de: 'Bitte mach die Tür zu.' },
            { cn: '我把作业做完了。', pinyin: 'Wǒ bǎ zuòyè zuòwán le.', de: 'Ich habe die Hausaufgaben fertig gemacht.' },
            { cn: '她把房间打扫干净了。', pinyin: 'Tā bǎ fángjiān dǎsǎo gānjìng le.', de: 'Sie hat das Zimmer sauber geputzt.' }
          ],
          tip: '❌ 我把书看 ist falsch! Das Verb braucht eine Ergänzung. ✅ 我把书看完了 (Ich habe das Buch zu Ende gelesen).'
        },
        {
          heading: 'Wann muss man 把 benutzen?',
          text: 'Die 把-Konstruktion ist <strong>nicht optional</strong>, wenn du ausdrücken willst, dass etwas irgendwohin bewegt oder in einen bestimmten Zustand gebracht wird. Besonders bei Richtungskomplementen und Resultativkomplementen ist 把 oft die natürlichste Wahl.',
          examples: [
            { cn: '把书放在桌子上。', pinyin: 'Bǎ shū fàng zài zhuōzi shang.', de: 'Leg das Buch auf den Tisch.' },
            { cn: '他把杯子摔碎了。', pinyin: 'Tā bǎ bēizi shuāisuì le.', de: 'Er hat die Tasse kaputtgeschlagen.' },
            { cn: '我把钱花光了。', pinyin: 'Wǒ bǎ qián huāguāng le.', de: 'Ich habe das ganze Geld ausgegeben.' }
          ]
        },
        {
          heading: 'Verneinung und Adverbien',
          text: 'Verneinungswörter (不, 没) und Adverbien (已经, 都, 也) stehen <strong>vor 把</strong>, nicht nach 把.',
          examples: [
            { cn: '我没把窗户关上。', pinyin: 'Wǒ méi bǎ chuānghu guānshang.', de: 'Ich habe das Fenster nicht zugemacht.' },
            { cn: '你别把这件事告诉他。', pinyin: 'Nǐ bié bǎ zhè jiàn shì gàosu tā.', de: 'Erzähl ihm nicht davon.' },
            { cn: '我已经把票买好了。', pinyin: 'Wǒ yǐjīng bǎ piào mǎihǎo le.', de: 'Ich habe die Tickets schon gekauft.' }
          ],
          tip: 'Faustregel: Wenn die Handlung das Objekt <strong>verändert, bewegt oder beseitigt</strong>, ist 把 dein Freund.'
        },
        {
          heading: 'Einschränkungen',
          text: 'Nicht jedes Verb funktioniert mit 把! Zustandsverben (是, 像, 喜欢, 知道) und Verben ohne „Einwirkung" können nicht mit 把 kombiniert werden. Das Objekt muss außerdem <strong>bestimmt</strong> sein (also bekannt oder spezifisch).',
          examples: [
            { cn: '❌ 我把一本书看了。', pinyin: '', de: '(Falsch — „ein Buch" ist zu unbestimmt)' },
            { cn: '✅ 我把那本书看了。', pinyin: 'Wǒ bǎ nà běn shū kàn le.', de: 'Ich habe dieses Buch gelesen.' },
            { cn: '✅ 我把你的手机拿来了。', pinyin: 'Wǒ bǎ nǐ de shǒujī nálái le.', de: 'Ich habe dein Handy hergebracht.' }
          ]
        }
      ]
    },

    // ── Lesson 5: 被 Passiv ────────────────────────────────────────────
    {
      id: 'lesson-5',
      number: 5,
      title: '被 (bèi) Passiv',
      subtitle: 'Passivkonstruktionen im Chinesischen',
      level: 'HSK3/HSK4',
      intro: 'Im Deutschen benutzen wir das Passiv ständig: „Das Buch wurde gelesen", „Das Fenster ist geöffnet worden." Im Chinesischen ist das Passiv viel seltener — und es hat einen besonderen Beigeschmack. Traditionell wird 被 vor allem für <strong>unangenehme oder unerwünschte</strong> Dinge verwendet: bestohlen werden, kritisiert werden, gefeuert werden. In der modernen Sprache wird es aber auch neutral eingesetzt, besonders in Nachrichten und formellen Texten.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: 'Die Formel: <strong>Empfänger + 被 + (Handelnder) + Verb + Komplement/了</strong>. Der Handelnde kann weggelassen werden, wenn er unbekannt oder unwichtig ist.',
          examples: [
            { cn: '我的手机被偷了。', pinyin: 'Wǒ de shǒujī bèi tōu le.', de: 'Mein Handy wurde gestohlen.' },
            { cn: '他被老板批评了。', pinyin: 'Tā bèi lǎobǎn pīpíng le.', de: 'Er wurde vom Chef kritisiert.' },
            { cn: '蛋糕被弟弟吃了。', pinyin: 'Dàngāo bèi dìdi chī le.', de: 'Der Kuchen wurde vom kleinen Bruder gegessen.' }
          ],
          tip: 'Wie bei 把 darf das Verb nicht „nackt" stehen. Es braucht 了, ein Komplement oder eine andere Ergänzung.'
        },
        {
          heading: 'Negative Konnotation',
          text: 'Traditionell signalisiert 被 etwas <strong>Unerwünschtes</strong>. In Alltagsgesprächen klingt ein 被-Satz oft so, als wäre dem Subjekt etwas Schlechtes widerfahren.',
          examples: [
            { cn: '我被蚊子咬了。', pinyin: 'Wǒ bèi wénzi yǎo le.', de: 'Ich wurde von einer Mücke gestochen.' },
            { cn: '他被公司解雇了。', pinyin: 'Tā bèi gōngsī jiěgù le.', de: 'Er wurde von der Firma entlassen.' },
            { cn: '那棵树被风吹倒了。', pinyin: 'Nà kē shù bèi fēng chuīdǎo le.', de: 'Der Baum wurde vom Wind umgeweht.' }
          ]
        },
        {
          heading: 'Neutrales / positives Passiv',
          text: 'In modernem Chinesisch, besonders in Nachrichten, wird 被 auch <strong>neutral</strong> verwendet. In sozialen Medien gibt es sogar die ironische „被"-Konstruktion (被XX), die ausdrückt, dass jemandem etwas aufgezwungen wurde.',
          examples: [
            { cn: '他被选为班长。', pinyin: 'Tā bèi xuǎn wéi bānzhǎng.', de: 'Er wurde zum Klassensprecher gewählt.' },
            { cn: '这部电影被很多人喜欢。', pinyin: 'Zhè bù diànyǐng bèi hěn duō rén xǐhuan.', de: 'Dieser Film wird von vielen Leuten gemocht.' }
          ],
          tip: 'Alternativen zu 被: In der gesprochenen Sprache hört man auch <strong>叫 (jiào)</strong> und <strong>让 (ràng)</strong> für passivische Konstruktionen, besonders in nordchinesischen Dialekten.'
        },
        {
          heading: '被 vs. aktive Umformulierung',
          text: 'Im Chinesischen klingt es oft natürlicher, das Passiv zu <strong>vermeiden</strong> und aktiv umzuformulieren. Muttersprachler bevorzugen häufig die aktive Form oder die Thema-Kommentar-Struktur.',
          examples: [
            { cn: '被动：杯子被他打碎了。', pinyin: 'Bēizi bèi tā dǎsuì le.', de: 'Passiv: Die Tasse wurde von ihm zerbrochen.' },
            { cn: '主动：他打碎了杯子。', pinyin: 'Tā dǎsuì le bēizi.', de: 'Aktiv: Er hat die Tasse zerbrochen.' },
            { cn: '话题：那个杯子，他打碎了。', pinyin: 'Nàge bēizi, tā dǎsuì le.', de: 'Thema: Die Tasse — er hat sie zerbrochen.' }
          ]
        }
      ]
    },

    // ── Lesson 6: 比 Vergleiche ────────────────────────────────────────
    {
      id: 'lesson-6',
      number: 6,
      title: '比 (bǐ) Vergleiche',
      subtitle: 'Vergleichskonstruktionen',
      level: 'HSK2/HSK3',
      intro: 'Vergleiche sind im Alltag unverzichtbar: „Wer ist größer?", „Welches Essen ist leckerer?", „Ist Shanghai teurer als Peking?" Im Chinesischen gibt es dafür hauptsächlich die 比-Konstruktion. Sie funktioniert komplett anders als im Deutschen — kein „-er" am Adjektiv, kein „als" nach dem Adjektiv. Stattdessen steht 比 <strong>vor</strong> dem Adjektiv und leitet den Vergleichsstandard ein.',
      sections: [
        {
          heading: 'Grundvergleich mit 比',
          text: 'Die Grundformel: <strong>A + 比 + B + Adjektiv</strong>. Wichtig: Vor dem Adjektiv steht <strong>kein 很</strong>! 很 würde den Vergleich zerstören.',
          examples: [
            { cn: '他比我高。', pinyin: 'Tā bǐ wǒ gāo.', de: 'Er ist größer als ich.' },
            { cn: '上海比北京大。', pinyin: 'Shànghǎi bǐ Běijīng dà.', de: 'Shanghai ist größer als Peking.' },
            { cn: '今天比昨天冷。', pinyin: 'Jīntiān bǐ zuótiān lěng.', de: 'Heute ist es kälter als gestern.' }
          ],
          tip: '❌ 他比我很高 ist falsch! Bei 比-Vergleichen fällt 很 weg. ✅ 他比我高.'
        },
        {
          heading: 'Grad des Unterschieds',
          text: 'Um auszudrücken, <em>wie viel</em> mehr, fügst du nach dem Adjektiv eine Gradangabe hinzu: 一点儿 (ein bisschen), 多了 (viel), 得多 (viel), oder eine konkrete Zahl.',
          examples: [
            { cn: '她比我大两岁。', pinyin: 'Tā bǐ wǒ dà liǎng suì.', de: 'Sie ist zwei Jahre älter als ich.' },
            { cn: '这个比那个贵一点儿。', pinyin: 'Zhège bǐ nàge guì yìdiǎnr.', de: 'Dieses ist ein bisschen teurer als jenes.' },
            { cn: '坐飞机比坐火车快得多。', pinyin: 'Zuò fēijī bǐ zuò huǒchē kuài de duō.', de: 'Fliegen ist viel schneller als Zugfahren.' }
          ]
        },
        {
          heading: 'Verneinung: 没有 statt 不比',
          text: 'Die Verneinung „A ist nicht so ... wie B" wird mit <strong>A + 没有 + B + Adjektiv</strong> gebildet. 不比 existiert auch, bedeutet aber etwas anderes („ist nicht mehr ... als").',
          examples: [
            { cn: '我没有他高。', pinyin: 'Wǒ méiyǒu tā gāo.', de: 'Ich bin nicht so groß wie er.' },
            { cn: '这里没有那里安静。', pinyin: 'Zhèlǐ méiyǒu nàlǐ ānjìng.', de: 'Hier ist es nicht so ruhig wie dort.' },
            { cn: '弟弟没有哥哥聪明。', pinyin: 'Dìdi méiyǒu gēge cōngming.', de: 'Der kleine Bruder ist nicht so klug wie der große.' }
          ],
          tip: '不比 ≠ 没有! 他不比我高 bedeutet „Er ist nicht unbedingt größer als ich" (Widerspruch). 他没有我高 bedeutet „Er ist nicht so groß wie ich" (klarer Vergleich).'
        },
        {
          heading: 'Gleichheit: 跟...一样',
          text: 'Um Gleichheit auszudrücken („genauso ... wie"), benutzt man <strong>A + 跟 + B + 一样 + (Adjektiv)</strong>.',
          examples: [
            { cn: '我跟他一样高。', pinyin: 'Wǒ gēn tā yíyàng gāo.', de: 'Ich bin genauso groß wie er.' },
            { cn: '这两个一样贵。', pinyin: 'Zhè liǎng gè yíyàng guì.', de: 'Diese beiden sind gleich teuer.' },
            { cn: '她跟她妈妈一样漂亮。', pinyin: 'Tā gēn tā māma yíyàng piàoliang.', de: 'Sie ist genauso hübsch wie ihre Mutter.' }
          ]
        }
      ]
    },

    // ── Lesson 7: Resultativkomplemente ────────────────────────────────
    {
      id: 'lesson-7',
      number: 7,
      title: '结果补语 — Resultativkomplemente',
      subtitle: 'Was am Ende einer Handlung herauskommt',
      level: 'HSK2/HSK3',
      intro: 'Im Deutschen sagen wir „aufessen", „kaputtmachen", „fertigschreiben" — wir kleben das Ergebnis an das Verb. Im Chinesischen funktioniert das genauso, nur viel systematischer! Ein <strong>Resultativkomplement</strong> (结果补语) ist ein Zeichen, das direkt nach dem Verb steht und das <strong>Ergebnis</strong> der Handlung angibt. 看 (schauen) + 见 (wahrnehmen) = 看见 (sehen, erblicken). 听 (hören) + 懂 (verstehen) = 听懂 (verstehend hören). Diese Kombinationen sind enorm produktiv und machen dein Chinesisch sofort ausdrucksstärker.',
      sections: [
        {
          heading: 'Häufige Resultativkomplemente',
          text: 'Hier sind die wichtigsten Resultativendungen, die du kennen solltest: <strong>完</strong> (fertig), <strong>好</strong> (gut/fertig), <strong>到</strong> (erreichen), <strong>见</strong> (wahrnehmen), <strong>懂</strong> (verstehen), <strong>会</strong> (können/beherrschen), <strong>错</strong> (falsch), <strong>对</strong> (richtig).',
          examples: [
            { cn: '我吃完了。', pinyin: 'Wǒ chīwán le.', de: 'Ich habe aufgegessen.' },
            { cn: '你听懂了吗？', pinyin: 'Nǐ tīngdǒng le ma?', de: 'Hast du es (hörend) verstanden?' },
            { cn: '我找到了我的钥匙。', pinyin: 'Wǒ zhǎodào le wǒ de yàoshi.', de: 'Ich habe meinen Schlüssel gefunden.' }
          ],
          tip: 'Resultativkomplemente sind so eng mit dem Verb verschmolzen, dass sie als <strong>ein Wort</strong> behandelt werden. 了 kommt danach, nicht dazwischen!'
        },
        {
          heading: 'Adjektive als Resultativkomplemente',
          text: 'Adjektive können ebenfalls als Resultativkomplemente fungieren und beschreiben den <strong>Zustand</strong>, in den etwas durch die Handlung gebracht wird.',
          examples: [
            { cn: '他把衣服洗干净了。', pinyin: 'Tā bǎ yīfu xǐ gānjìng le.', de: 'Er hat die Kleidung sauber gewaschen.' },
            { cn: '请把音乐放大一点。', pinyin: 'Qǐng bǎ yīnyuè fàngdà yìdiǎn.', de: 'Bitte mach die Musik etwas lauter.' },
            { cn: '孩子哭累了。', pinyin: 'Háizi kūlèi le.', de: 'Das Kind hat sich müde geweint.' }
          ]
        },
        {
          heading: 'Verneinung mit 没',
          text: 'Da Resultativkomplemente ein <strong>Ergebnis</strong> beschreiben, wird die Verneinung mit <strong>没(有)</strong> gebildet — das Ergebnis ist nicht eingetreten.',
          examples: [
            { cn: '我没听懂。', pinyin: 'Wǒ méi tīngdǒng.', de: 'Ich habe es nicht verstanden (beim Hören).' },
            { cn: '她没看见你。', pinyin: 'Tā méi kànjiàn nǐ.', de: 'Sie hat dich nicht gesehen.' },
            { cn: '我们没做完。', pinyin: 'Wǒmen méi zuòwán.', de: 'Wir haben es nicht fertig gemacht.' }
          ],
          tip: 'Das Potentialkomplement (Lektion 9) nutzt 得/不 zwischen Verb und Komplement, um auszudrücken, ob man etwas schaffen <em>kann</em> oder nicht: 看得见 (kann sehen) vs. 看不见 (kann nicht sehen).'
        },
        {
          heading: 'Verb + 到 als Resultativkomplement',
          text: '到 als Komplement bedeutet „bis zu einem Punkt gelangen" — physisch oder abstrakt. Es drückt aus, dass die Handlung ihr Ziel <strong>erreicht</strong> hat.',
          examples: [
            { cn: '我买到了那本书。', pinyin: 'Wǒ mǎidào le nà běn shū.', de: 'Ich habe es geschafft, das Buch zu kaufen.' },
            { cn: '你收到我的信了吗？', pinyin: 'Nǐ shōudào wǒ de xìn le ma?', de: 'Hast du meinen Brief erhalten?' },
            { cn: '我想到了一个好主意。', pinyin: 'Wǒ xiǎngdào le yí gè hǎo zhǔyi.', de: 'Mir ist eine gute Idee eingefallen.' }
          ]
        }
      ]
    },

    // ── Lesson 8: Gradkomplemente mit 得 ──────────────────────────────
    {
      id: 'lesson-8',
      number: 8,
      title: '程度补语 — Gradkomplemente mit 得',
      subtitle: 'Wie gut, wie schlecht, wie intensiv?',
      level: 'HSK2/HSK3',
      intro: 'Du möchtest sagen, dass jemand „gut singt", „schnell rennt" oder „so müde ist, dass er nicht mehr stehen kann"? Dafür brauchst du <strong>Gradkomplemente</strong> (程度补语). Sie beschreiben den <strong>Grad</strong> oder die <strong>Art und Weise</strong>, wie eine Handlung ausgeführt wird — und sie werden mit dem Partikel <strong>得</strong> eingeleitet. Das ist dasselbe 得, das du aus Lektion 2 kennst, aber hier in seiner wichtigsten Funktion.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: 'Die Formel: <strong>Verb + 得 + Beschreibung</strong>. Die Beschreibung kann ein einfaches Adjektiv sein oder ein ganzer Satz.',
          examples: [
            { cn: '她唱得很好听。', pinyin: 'Tā chàng de hěn hǎotīng.', de: 'Sie singt sehr schön.' },
            { cn: '他吃得很多。', pinyin: 'Tā chī de hěn duō.', de: 'Er isst sehr viel.' },
            { cn: '你来得太晚了。', pinyin: 'Nǐ lái de tài wǎn le.', de: 'Du bist zu spät gekommen.' }
          ],
          tip: 'Wenn das Verb ein Objekt hat, muss das Verb <strong>wiederholt</strong> werden: 她说中文说得很好 oder alternativ das Objekt nach vorne: 中文她说得很好.'
        },
        {
          heading: 'Verb + Objekt + Verb + 得',
          text: 'Bei Verben mit Objekt gibt es zwei Möglichkeiten, das Gradkomplement einzubauen. Beide sind korrekt.',
          examples: [
            { cn: '他说中文说得很流利。', pinyin: 'Tā shuō Zhōngwén shuō de hěn liúlì.', de: 'Er spricht Chinesisch sehr fließend. (Verb wiederholt)' },
            { cn: '中文他说得很流利。', pinyin: 'Zhōngwén tā shuō de hěn liúlì.', de: 'Chinesisch spricht er sehr fließend. (Objekt vorgezogen)' },
            { cn: '她写汉字写得很漂亮。', pinyin: 'Tā xiě Hànzì xiě de hěn piàoliang.', de: 'Sie schreibt chinesische Schriftzeichen sehr schön.' }
          ]
        },
        {
          heading: 'Komplexe Beschreibungen',
          text: 'Nach 得 kann auch ein ganzer <strong>Satz</strong> stehen, der die Intensität beschreibt. Das entspricht dem deutschen „so ... dass ...".',
          examples: [
            { cn: '他累得不想说话。', pinyin: 'Tā lèi de bù xiǎng shuōhuà.', de: 'Er ist so müde, dass er nicht reden will.' },
            { cn: '她高兴得跳了起来。', pinyin: 'Tā gāoxìng de tiào le qǐlái.', de: 'Sie war so glücklich, dass sie hochgesprungen ist.' },
            { cn: '冷得我发抖。', pinyin: 'Lěng de wǒ fādǒu.', de: 'So kalt, dass ich zittere.' }
          ],
          tip: 'Gradkomplemente beschreiben eine <strong>konkrete Ausführung</strong>, daher können sie nicht mit 了₁ kombiniert werden (das markiert Abschluss). ❌ 她唱了得很好 → ✅ 她唱得很好.'
        },
        {
          heading: 'Fragen mit Gradkomplementen',
          text: 'Um nach der Art und Weise zu fragen, benutzt man <strong>Verb + 得 + 怎么样</strong> oder setzt das Adjektiv in eine Frage.',
          examples: [
            { cn: '你考得怎么样？', pinyin: 'Nǐ kǎo de zěnmeyàng?', de: 'Wie war deine Prüfung?' },
            { cn: '她中文说得好不好？', pinyin: 'Tā Zhōngwén shuō de hǎo bu hǎo?', de: 'Spricht sie gut Chinesisch?' },
            { cn: '昨天你睡得好吗？', pinyin: 'Zuótiān nǐ shuì de hǎo ma?', de: 'Hast du gestern gut geschlafen?' }
          ]
        }
      ]
    },

    // ── Lesson 9: Richtungskomplemente ─────────────────────────────────
    {
      id: 'lesson-9',
      number: 9,
      title: '趋向补语 — Richtungskomplemente',
      subtitle: 'Bewegung in alle Richtungen',
      level: 'HSK3/HSK4',
      intro: 'Im Chinesischen kannst du mit Richtungskomplementen (趋向补语) unglaublich präzise beschreiben, <em>wohin</em> sich etwas bewegt. 来 (her, zum Sprecher) und 去 (hin, weg vom Sprecher) bilden die Basis. Dazu kommen Verben wie 上 (rauf), 下 (runter), 进 (rein), 出 (raus), 回 (zurück), 过 (vorbei), 起 (auf). Kombiniere sie, und du bekommst Ausdrücke wie 走进来 (hereinkommen) oder 跑出去 (hinausrennen). Es ist wie ein Baukastensystem!',
      sections: [
        {
          heading: 'Einfache Richtungskomplemente',
          text: 'Die einfachsten sind <strong>来</strong> (hierher) und <strong>去</strong> (dorthin), direkt nach dem Bewegungsverb.',
          examples: [
            { cn: '他走过来了。', pinyin: 'Tā zǒu guòlái le.', de: 'Er ist herübergekommen.' },
            { cn: '请进来！', pinyin: 'Qǐng jìnlái!', de: 'Komm bitte herein!' },
            { cn: '她跑出去了。', pinyin: 'Tā pǎo chūqù le.', de: 'Sie ist hinausgerannt.' }
          ],
          tip: '来 = Bewegung <strong>zum Sprecher</strong> hin. 去 = Bewegung <strong>vom Sprecher</strong> weg. Das ist der entscheidende Unterschied!'
        },
        {
          heading: 'Zusammengesetzte Richtungskomplemente',
          text: 'Die wirkliche Stärke liegt in den <strong>Kombinationen</strong>: Richtungsverb + 来/去. Das ergibt zweisilbige Komplemente wie 上来 (herauf), 下去 (hinunter), 进来 (herein), 出去 (hinaus), 回来 (zurück hierher), 起来 (hoch/auf).',
          examples: [
            { cn: '他跑上来了。', pinyin: 'Tā pǎo shànglái le.', de: 'Er ist heraufgerannt.' },
            { cn: '把箱子搬下去。', pinyin: 'Bǎ xiāngzi bān xiàqù.', de: 'Trag die Kiste hinunter.' },
            { cn: '孩子从水里游上来了。', pinyin: 'Háizi cóng shuǐ lǐ yóu shànglái le.', de: 'Das Kind ist aus dem Wasser heraufgeschwommen.' }
          ]
        },
        {
          heading: 'Position des Objekts',
          text: 'Bei Ortsangaben steht das Objekt <strong>zwischen</strong> dem Richtungsverb und 来/去. Bei konkreten Objekten gibt es zwei Positionen.',
          examples: [
            { cn: '她走进教室来了。', pinyin: 'Tā zǒujìn jiàoshì lái le.', de: 'Sie ist ins Klassenzimmer hereingekommen. (Ort zwischen 进 und 来)' },
            { cn: '他拿出一本书来。', pinyin: 'Tā náchū yì běn shū lái.', de: 'Er holte ein Buch hervor.' },
            { cn: '请把行李拿上来。', pinyin: 'Qǐng bǎ xíngli ná shànglái.', de: 'Bring bitte das Gepäck herauf.' }
          ],
          tip: 'Ortsangaben stehen <strong>immer</strong> vor 来/去: 走进房间来 (ins Zimmer hereinkommen). Das ist keine optionale Regel!'
        },
        {
          heading: 'Übertragene Bedeutungen',
          text: 'Viele Richtungskomplemente haben auch <strong>abstrakte</strong> Bedeutungen. 起来 kann „anfangen" bedeuten, 下去 „weitermachen", 出来 „herausfinden/erkennen".',
          examples: [
            { cn: '她突然笑了起来。', pinyin: 'Tā tūrán xiào le qǐlái.', de: 'Sie fing plötzlich an zu lachen.' },
            { cn: '说下去！', pinyin: 'Shuō xiàqù!', de: 'Sprich weiter!' },
            { cn: '我想起来了！', pinyin: 'Wǒ xiǎng qǐlái le!', de: 'Mir ist es eingefallen! / Ich erinnere mich!' },
            { cn: '我看不出来。', pinyin: 'Wǒ kàn bu chūlái.', de: 'Ich kann es nicht erkennen.' }
          ]
        }
      ]
    },

    // ── Lesson 10: 着 (zhe) ────────────────────────────────────────────
    {
      id: 'lesson-10',
      number: 10,
      title: '着 (zhe)',
      subtitle: 'Zustandsaspekt — andauernde Zustände',
      level: 'HSK2/HSK3',
      intro: 'Während 了 den Abschluss markiert und 过 die Erfahrung, beschreibt <strong>着</strong> einen <strong>andauernden Zustand</strong>. Es friert eine Handlung sozusagen ein und zeigt das Ergebnis als Dauerzustand. „Die Tür ist geöffnet" (开着), „Er trägt einen Hut" (戴着帽子), „An der Wand hängt ein Bild" (墙上挂着一幅画). 着 ist besonders wichtig für Beschreibungen von Szenen und Begleitumständen.',
      sections: [
        {
          heading: 'Zustand nach einer Handlung',
          text: '<strong>Verb + 着</strong> beschreibt den Zustand, der sich aus einer Handlung ergibt und <strong>andauert</strong>. Der Fokus liegt nicht auf der Handlung selbst, sondern auf dem resultierenden Zustand.',
          examples: [
            { cn: '门开着。', pinyin: 'Mén kāi zhe.', de: 'Die Tür steht offen.' },
            { cn: '他穿着一件红色的衣服。', pinyin: 'Tā chuān zhe yí jiàn hóngsè de yīfu.', de: 'Er trägt ein rotes Kleidungsstück.' },
            { cn: '桌子上放着一杯水。', pinyin: 'Zhuōzi shang fàng zhe yì bēi shuǐ.', de: 'Auf dem Tisch steht ein Glas Wasser.' }
          ],
          tip: 'Vergleiche: 他穿了一件衣服 (Er hat sich ein Kleidungsstück angezogen — Handlung abgeschlossen) vs. 他穿着一件衣服 (Er trägt ein Kleidungsstück — Zustand).'
        },
        {
          heading: 'Begleitumstände: V₁着 + V₂',
          text: '着 kann auch eine <strong>begleitende Handlung</strong> beschreiben: Während man Handlung 1 ausführt (V₁着), macht man gleichzeitig Handlung 2 (V₂). V₁着 ist dabei der Hintergrund.',
          examples: [
            { cn: '他站着吃饭。', pinyin: 'Tā zhàn zhe chīfàn.', de: 'Er isst im Stehen.' },
            { cn: '她笑着说。', pinyin: 'Tā xiào zhe shuō.', de: 'Sie sagte lächelnd.' },
            { cn: '孩子们唱着歌走回家。', pinyin: 'Háizimen chàng zhe gē zǒu huí jiā.', de: 'Die Kinder gingen singend nach Hause.' }
          ]
        },
        {
          heading: 'Existenz-Sätze mit 着',
          text: 'Eine besonders wichtige Verwendung ist die <strong>Existenzbeschreibung</strong>: Ort + Verb + 着 + Gegenstand. So beschreibt man Szenen und Räume.',
          examples: [
            { cn: '墙上挂着一幅画。', pinyin: 'Qiáng shang guà zhe yì fú huà.', de: 'An der Wand hängt ein Bild.' },
            { cn: '地上躺着一只猫。', pinyin: 'Dì shang tǎng zhe yì zhī māo.', de: 'Auf dem Boden liegt eine Katze.' },
            { cn: '教室里坐着很多学生。', pinyin: 'Jiàoshì lǐ zuò zhe hěn duō xuéshēng.', de: 'Im Klassenzimmer sitzen viele Schüler.' }
          ],
          tip: 'Diese Existenzsätze mit 着 sind perfekt für <strong>bildhafte Beschreibungen</strong>. Sie sind in Erzählungen und Aufsätzen sehr beliebt.'
        },
        {
          heading: 'Verneinung und Imperativ',
          text: 'Die Verneinung mit 着 verwendet <strong>没(有)</strong>. Im Imperativ wird 着 manchmal benutzt, um zu sagen „Halt das so!" oder als Warnung.',
          examples: [
            { cn: '灯没开着。', pinyin: 'Dēng méi kāi zhe.', de: 'Das Licht ist nicht an.' },
            { cn: '你等着！', pinyin: 'Nǐ děng zhe!', de: 'Warte! / Du wirst schon sehen!' },
            { cn: '小心着点儿！', pinyin: 'Xiǎoxīn zhe diǎnr!', de: 'Sei vorsichtig!' }
          ]
        }
      ]
    },

    // ── Lesson 11: 过 (guò) ────────────────────────────────────────────
    {
      id: 'lesson-11',
      number: 11,
      title: '过 (guò)',
      subtitle: 'Erfahrungsaspekt — „Schon mal gemacht?"',
      level: 'HSK2',
      intro: 'Warst du schon mal in China? Hast du schon mal Stinketofu probiert? Hast du diesen Film schon gesehen? All diese Fragen drehen sich um <strong>Erfahrungen</strong> — und genau dafür gibt es den Aspektpartikel 过. Er drückt aus, dass jemand etwas <strong>irgendwann in der Vergangenheit mindestens einmal erlebt hat</strong>. Es geht nicht darum, wann genau — nur darum, <em>ob</em> die Erfahrung existiert.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: '<strong>Verb + 过</strong> drückt aus, dass die Handlung mindestens einmal in der Vergangenheit stattgefunden hat. Der genaue Zeitpunkt ist dabei irrelevant.',
          examples: [
            { cn: '我去过中国。', pinyin: 'Wǒ qù guo Zhōngguó.', de: 'Ich war schon mal in China.' },
            { cn: '你吃过北京烤鸭吗？', pinyin: 'Nǐ chī guo Běijīng kǎoyā ma?', de: 'Hast du schon mal Pekingente gegessen?' },
            { cn: '我看过这部电影。', pinyin: 'Wǒ kàn guo zhè bù diànyǐng.', de: 'Ich habe diesen Film schon gesehen.' }
          ],
          tip: '过 wird im Erfahrungssinne <strong>leicht und tonlos</strong> ausgesprochen (guo, nicht guò). In der Umschrift wird es daher manchmal ohne Tonzeichen geschrieben.'
        },
        {
          heading: 'Verneinung mit 没(有)...过',
          text: 'Die Verneinung lautet <strong>没(有) + Verb + 过</strong>. Anders als bei 了 bleibt 过 in der Verneinung erhalten!',
          examples: [
            { cn: '我没去过日本。', pinyin: 'Wǒ méi qù guo Rìběn.', de: 'Ich war noch nie in Japan.' },
            { cn: '他没吃过臭豆腐。', pinyin: 'Tā méi chī guo chòudòufu.', de: 'Er hat noch nie Stinketofu gegessen.' },
            { cn: '我们没见过面。', pinyin: 'Wǒmen méi jiàn guo miàn.', de: 'Wir haben uns noch nie getroffen.' }
          ],
          tip: 'Beachte den Unterschied zur 了-Verneinung: 没去过 (war noch nie) vs. 没去 (ist nicht gegangen). 过 betont die fehlende Erfahrung, 了 den fehlenden Abschluss.'
        },
        {
          heading: '过 vs. 了',
          text: 'Diesen Unterschied zu verstehen ist entscheidend: <strong>了</strong> = Handlung ist abgeschlossen (konkretes Ereignis). <strong>过</strong> = Erfahrung existiert (unbestimmte Vergangenheit).',
          examples: [
            { cn: '我吃了寿司。', pinyin: 'Wǒ chī le shòusī.', de: 'Ich habe Sushi gegessen. (konkret, z.B. heute)' },
            { cn: '我吃过寿司。', pinyin: 'Wǒ chī guo shòusī.', de: 'Ich habe schon mal Sushi gegessen. (Erfahrung)' },
            { cn: '他来了。', pinyin: 'Tā lái le.', de: 'Er ist gekommen. (gerade eben)' },
            { cn: '他来过。', pinyin: 'Tā lái guo.', de: 'Er war schon mal hier. (irgendwann)' }
          ]
        },
        {
          heading: 'Häufige Kombinationen',
          text: '过 wird oft mit Ausdrücken wie 从来 (noch nie), 以前 (früher), 曾经 (einst) kombiniert, um die Erfahrung zu betonen oder zu verstärken.',
          examples: [
            { cn: '我从来没见过这样的人。', pinyin: 'Wǒ cónglái méi jiàn guo zhèyàng de rén.', de: 'Ich habe noch nie so einen Menschen gesehen.' },
            { cn: '我以前学过法语。', pinyin: 'Wǒ yǐqián xué guo Fǎyǔ.', de: 'Ich habe früher mal Französisch gelernt.' },
            { cn: '你曾经想过放弃吗？', pinyin: 'Nǐ céngjīng xiǎng guo fàngqì ma?', de: 'Hast du jemals daran gedacht aufzugeben?' }
          ]
        }
      ]
    },

    // ── Lesson 12: Thema-Kommentar-Struktur ────────────────────────────
    {
      id: 'lesson-12',
      number: 12,
      title: 'Thema-Kommentar-Struktur',
      subtitle: 'Wie Chinesisch Sätze wirklich aufbaut',
      level: 'HSK1/HSK2',
      intro: 'Deutsch ist eine <strong>Subjekt-Verb-Objekt</strong>-Sprache: „Ich esse Äpfel." Chinesisch wird oft genauso beschrieben, aber in Wirklichkeit ist es eine <strong>Thema-Kommentar</strong>-Sprache. Das bedeutet: Zuerst kommt das <strong>Thema</strong> (worüber sprechen wir?), dann der <strong>Kommentar</strong> (was gibt es darüber zu sagen?). Das Thema muss nicht das grammatische Subjekt sein! Wenn du dieses Prinzip verinnerlichst, werden viele chinesische Sätze plötzlich logisch, die vorher rätselhaft wirkten.',
      sections: [
        {
          heading: 'Thema ≠ Subjekt',
          text: 'Im Chinesischen kann fast alles zum Thema werden — auch das Objekt, ein Zeitausdruck oder ein ganzer Sachverhalt. Das Thema steht am Satzanfang und wird durch den Kommentar näher erläutert.',
          examples: [
            { cn: '这本书我看过了。', pinyin: 'Zhè běn shū wǒ kàn guo le.', de: 'Dieses Buch — das habe ich gelesen. (Objekt als Thema)' },
            { cn: '那个人我不认识。', pinyin: 'Nàge rén wǒ bú rènshi.', de: 'Die Person — die kenne ich nicht.' },
            { cn: '中文不难学。', pinyin: 'Zhōngwén bù nán xué.', de: 'Chinesisch — ist nicht schwer zu lernen.' }
          ],
          tip: 'Im Deutschen würden wir oft einen Relativsatz oder eine Passivkonstruktion benutzen. Im Chinesischen reicht es, das Thema einfach an den Anfang zu stellen.'
        },
        {
          heading: 'Doppeltes Subjekt',
          text: 'Ein besonders chinesisches Phänomen: Der Satz hat scheinbar <strong>zwei Subjekte</strong>. Das erste ist das Thema, das zweite das grammatische Subjekt des Kommentars.',
          examples: [
            { cn: '大象鼻子长。', pinyin: 'Dàxiàng bízi cháng.', de: 'Elefanten — die Nase ist lang. (= Elefanten haben lange Rüssel)' },
            { cn: '他身体不好。', pinyin: 'Tā shēntǐ bù hǎo.', de: 'Er — die Gesundheit ist nicht gut.' },
            { cn: '这家饭馆菜很好吃。', pinyin: 'Zhè jiā fànguǎn cài hěn hǎochī.', de: 'Dieses Restaurant — das Essen ist sehr lecker.' }
          ]
        },
        {
          heading: 'Zeit und Ort als Thema',
          text: 'Zeitangaben und Ortsangaben stehen im Chinesischen gerne am <strong>Satzanfang</strong> als Thema — das ist die natürliche Position.',
          examples: [
            { cn: '明天我不去上班。', pinyin: 'Míngtiān wǒ bú qù shàngbān.', de: 'Morgen gehe ich nicht zur Arbeit.' },
            { cn: '这里不能停车。', pinyin: 'Zhèlǐ bù néng tíngchē.', de: 'Hier darf man nicht parken.' },
            { cn: '中国人口很多。', pinyin: 'Zhōngguó rénkǒu hěn duō.', de: 'China — die Bevölkerung ist groß.' }
          ],
          tip: 'Chinesische Sätze folgen oft dem Muster: <strong>Wann → Wo → Wer → Wie → Was tun</strong>. Das Große kommt vor dem Kleinen, das Bekannte vor dem Neuen.'
        },
        {
          heading: 'Kontrast durch Thema-Kommentar',
          text: 'Die Thema-Kommentar-Struktur eignet sich hervorragend für <strong>Kontraste</strong> und <strong>Gegenüberstellungen</strong>.',
          examples: [
            { cn: '咖啡我喜欢，茶我不喜欢。', pinyin: 'Kāfēi wǒ xǐhuan, chá wǒ bù xǐhuan.', de: 'Kaffee mag ich, Tee mag ich nicht.' },
            { cn: '这件我要，那件不要。', pinyin: 'Zhè jiàn wǒ yào, nà jiàn bú yào.', de: 'Dieses Stück nehme ich, jenes nicht.' },
            { cn: '数学我学得好，物理我学不好。', pinyin: 'Shùxué wǒ xué de hǎo, wùlǐ wǒ xué bù hǎo.', de: 'Mathe kann ich gut, Physik nicht.' }
          ]
        }
      ]
    },

    // ── Lesson 13: 连...都/也 ──────────────────────────────────────────
    {
      id: 'lesson-13',
      number: 13,
      title: '连...都/也',
      subtitle: '„Sogar"-Konstruktionen',
      level: 'HSK4',
      intro: 'Wenn du im Deutschen sagst „Sogar mein Hund versteht das!", betonst du, dass etwas extrem überraschend oder unerwartet ist. Im Chinesischen gibt es dafür die elegante <strong>连...都/也</strong>-Konstruktion. 连 markiert das überraschende Element, 都 oder 也 verstärkt die Aussage. Diese Struktur ist in der gehobenen Alltagssprache extrem häufig und gibt deinem Chinesisch sofort mehr Ausdruckskraft.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: 'Die Formel: <strong>连 + betontes Element + 都/也 + Verb</strong>. 连 hebt hervor, was überraschend ist, und 都 oder 也 betont das „sogar".',
          examples: [
            { cn: '他连自己的名字都不会写。', pinyin: 'Tā lián zìjǐ de míngzì dōu bú huì xiě.', de: 'Er kann nicht mal seinen eigenen Namen schreiben.' },
            { cn: '连小孩子都知道。', pinyin: 'Lián xiǎo háizi dōu zhīdào.', de: 'Sogar kleine Kinder wissen das.' },
            { cn: '我连一块钱也没有。', pinyin: 'Wǒ lián yí kuài qián yě méiyǒu.', de: 'Ich habe nicht mal einen Yuan.' }
          ],
          tip: '都 und 也 sind in dieser Konstruktion austauschbar, aber 都 ist häufiger. 也 klingt etwas weicher.'
        },
        {
          heading: 'In Verneinungen',
          text: 'Die 连...都-Konstruktion wird besonders häufig in <strong>verneinten</strong> Sätzen verwendet, um zu betonen, dass „nicht einmal" etwas der Fall ist.',
          examples: [
            { cn: '他忙得连饭都没时间吃。', pinyin: 'Tā máng de lián fàn dōu méi shíjiān chī.', de: 'Er ist so beschäftigt, dass er nicht mal Zeit zum Essen hat.' },
            { cn: '她连看都没看我一眼。', pinyin: 'Tā lián kàn dōu méi kàn wǒ yì yǎn.', de: 'Sie hat mich nicht mal eines Blickes gewürdigt.' },
            { cn: '我连他的电话号码都不知道。', pinyin: 'Wǒ lián tā de diànhuà hàomǎ dōu bù zhīdào.', de: 'Ich kenne nicht mal seine Telefonnummer.' }
          ]
        },
        {
          heading: '连 mit Verben',
          text: 'Auch Verben können nach 连 stehen — dann wird das Verb betont, das man „nicht einmal" tut.',
          examples: [
            { cn: '她连试都没试。', pinyin: 'Tā lián shì dōu méi shì.', de: 'Sie hat es nicht einmal versucht.' },
            { cn: '他连想都没想就答应了。', pinyin: 'Tā lián xiǎng dōu méi xiǎng jiù dāying le.', de: 'Er hat zugesagt, ohne auch nur darüber nachzudenken.' }
          ],
          tip: 'Wenn nach 连 ein Verb steht, wird es oft <strong>wiederholt</strong>: 连看都没看, 连试都不试. Das erste Verb ist das betonte Thema, das zweite das eigentliche Prädikat.'
        },
        {
          heading: 'Ohne 连 — informelle Variante',
          text: 'In der Umgangssprache wird 连 manchmal weggelassen. 都 oder 也 allein kann schon „sogar" oder „nicht einmal" ausdrücken.',
          examples: [
            { cn: '他名字都不知道。', pinyin: 'Tā míngzì dōu bù zhīdào.', de: 'Er kennt nicht mal den Namen. (连 weggelassen)' },
            { cn: '我一口也没吃。', pinyin: 'Wǒ yì kǒu yě méi chī.', de: 'Ich habe keinen einzigen Bissen gegessen.' },
            { cn: '水都没喝一口。', pinyin: 'Shuǐ dōu méi hē yì kǒu.', de: 'Hat nicht mal einen Schluck Wasser getrunken.' }
          ]
        }
      ]
    },

    // ── Lesson 14: 虽然...但是 ─────────────────────────────────────────
    {
      id: 'lesson-14',
      number: 14,
      title: '虽然...但是',
      subtitle: 'Konzessivkonstruktionen — „Obwohl... trotzdem..."',
      level: 'HSK3',
      intro: 'Im Deutschen sagen wir „Obwohl es regnet, gehe ich spazieren" — ein typischer Konzessivsatz. Im Chinesischen funktioniert das mit <strong>虽然...但是/可是/不过</strong>. Der spannende Unterschied: Im Chinesischen stehen <em>beide</em> Konnektoren im Satz! Im Deutschen reicht „obwohl" allein, aber Chinesisch braucht das Paar: „Obwohl..., trotzdem...". Das ist ein typisches Muster für chinesische <strong>Paar-Konjunktionen</strong> (关联词).',
      sections: [
        {
          heading: 'Grundstruktur',
          text: 'Die Formel: <strong>虽然 + Einräumung, 但是/可是/不过 + Hauptaussage</strong>. Beide Teile können dasselbe Subjekt oder verschiedene Subjekte haben.',
          examples: [
            { cn: '虽然很累，但是我很开心。', pinyin: 'Suīrán hěn lèi, dànshì wǒ hěn kāixīn.', de: 'Obwohl ich müde bin, bin ich glücklich.' },
            { cn: '虽然他很聪明，可是不努力。', pinyin: 'Suīrán tā hěn cōngming, kěshì bù nǔlì.', de: 'Obwohl er klug ist, strengt er sich nicht an.' },
            { cn: '虽然下雨了，不过我们还是去了。', pinyin: 'Suīrán xià yǔ le, búguò wǒmen háishì qù le.', de: 'Obwohl es geregnet hat, sind wir trotzdem gegangen.' }
          ],
          tip: '但是, 可是, 不过 sind austauschbar. 但是 ist am formellsten, 不过 am umgangssprachlichsten.'
        },
        {
          heading: 'Position von 虽然',
          text: '虽然 kann <strong>vor oder nach dem Subjekt</strong> stehen. Wenn beide Teilsätze dasselbe Subjekt haben, steht 虽然 meistens nach dem Subjekt.',
          examples: [
            { cn: '他虽然年轻，但是很有经验。', pinyin: 'Tā suīrán niánqīng, dànshì hěn yǒu jīngyàn.', de: 'Er ist zwar jung, hat aber viel Erfahrung. (虽然 nach Subjekt)' },
            { cn: '虽然价格很贵，但是质量很好。', pinyin: 'Suīrán jiàgé hěn guì, dànshì zhìliàng hěn hǎo.', de: 'Obwohl der Preis hoch ist, ist die Qualität gut. (虽然 am Satzanfang)' }
          ]
        },
        {
          heading: 'Verstärkung mit 还是, 仍然, 却',
          text: 'Im zweiten Teilsatz kann man die Gegenüberstellung mit <strong>还是</strong> (trotzdem), <strong>仍然</strong> (immer noch) oder <strong>却</strong> (jedoch) verstärken.',
          examples: [
            { cn: '虽然很难，我还是想试试。', pinyin: 'Suīrán hěn nán, wǒ háishì xiǎng shìshi.', de: 'Obwohl es schwer ist, möchte ich es trotzdem versuchen.' },
            { cn: '虽然他道歉了，她却不原谅他。', pinyin: 'Suīrán tā dàoqiàn le, tā què bù yuánliàng tā.', de: 'Obwohl er sich entschuldigt hat, verzeiht sie ihm nicht.' },
            { cn: '虽然过了很多年，他仍然记得。', pinyin: 'Suīrán guò le hěn duō nián, tā réngrán jìde.', de: 'Obwohl viele Jahre vergangen sind, erinnert er sich immer noch.' }
          ],
          tip: '却 steht direkt vor dem Verb und klingt literarischer. In der Alltagssprache ist 还是 natürlicher.'
        },
        {
          heading: 'Häufige Fehler',
          text: 'Achtung! Im Chinesischen darf man 虽然 und 但是 <strong>nicht mit 可是 oder 但是 am Satzanfang</strong> verwechseln, wenn kein 虽然 vorangeht. 但是 allein am Satzanfang bedeutet einfach „aber".',
          examples: [
            { cn: '我想去，但是没有时间。', pinyin: 'Wǒ xiǎng qù, dànshì méiyǒu shíjiān.', de: 'Ich möchte gehen, aber ich habe keine Zeit. (Einfaches „aber")' },
            { cn: '虽然我想去，但是没有时间。', pinyin: 'Suīrán wǒ xiǎng qù, dànshì méiyǒu shíjiān.', de: 'Obwohl ich gehen möchte, habe ich keine Zeit. (Konzessiv)' }
          ]
        }
      ]
    },

    // ── Lesson 15: 因为...所以 ─────────────────────────────────────────
    {
      id: 'lesson-15',
      number: 15,
      title: '因为...所以',
      subtitle: 'Kausalkonstruktionen — „Weil... deshalb..."',
      level: 'HSK2/HSK3',
      intro: 'Ursache und Wirkung — eines der grundlegendsten logischen Konzepte, und im Chinesischen wunderbar klar ausgedrückt: <strong>因为</strong> (weil) leitet die Ursache ein, <strong>所以</strong> (deshalb) die Wirkung. Wie bei 虽然...但是 ist es eine <strong>Paar-Konjunktion</strong>: Im Chinesischen stehen idealerweise beide Teile im Satz, auch wenn man einen weglassen kann. Diese Struktur ist fundamental und kommt in praktisch jedem chinesischen Text vor.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: 'Die Formel: <strong>因为 + Ursache, 所以 + Wirkung</strong>. Beide Konnektoren können auch einzeln stehen, aber das Paar ist die vollständige Form.',
          examples: [
            { cn: '因为下雨了，所以我没去。', pinyin: 'Yīnwèi xià yǔ le, suǒyǐ wǒ méi qù.', de: 'Weil es geregnet hat, bin ich nicht gegangen.' },
            { cn: '因为他生病了，所以没来上课。', pinyin: 'Yīnwèi tā shēngbìng le, suǒyǐ méi lái shàngkè.', de: 'Weil er krank war, ist er nicht zum Unterricht gekommen.' },
            { cn: '因为太贵了，所以我没买。', pinyin: 'Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.', de: 'Weil es zu teuer war, habe ich es nicht gekauft.' }
          ],
          tip: '❌ Im Chinesischen kann man <strong>nicht</strong> 因为 und 所以 mit „weil" und „deshalb" im Deutschen gleichsetzen: Im Deutschen benutzt man nie beides gleichzeitig!'
        },
        {
          heading: 'Einen Teil weglassen',
          text: 'Man kann entweder 因为 oder 所以 weglassen — aber nicht beide! In der Alltagssprache wird oft nur einer der beiden Konnektoren benutzt.',
          examples: [
            { cn: '因为太累了，我先回家了。', pinyin: 'Yīnwèi tài lèi le, wǒ xiān huí jiā le.', de: 'Weil ich zu müde war, bin ich zuerst nach Hause gegangen. (ohne 所以)' },
            { cn: '他身体不好，所以经常请假。', pinyin: 'Tā shēntǐ bù hǎo, suǒyǐ jīngcháng qǐngjià.', de: 'Seine Gesundheit ist nicht gut, deshalb nimmt er oft frei. (ohne 因为)' }
          ]
        },
        {
          heading: 'Fragen nach Gründen',
          text: 'Um nach dem Grund zu fragen, benutzt man <strong>为什么</strong> (warum) oder <strong>怎么</strong> (wie kommt es, dass). Die Antwort enthält oft 因为.',
          examples: [
            { cn: '你为什么学中文？', pinyin: 'Nǐ wèi shénme xué Zhōngwén?', de: 'Warum lernst du Chinesisch?' },
            { cn: '因为我对中国文化很感兴趣。', pinyin: 'Yīnwèi wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.', de: 'Weil ich mich für chinesische Kultur interessiere.' },
            { cn: '你怎么没来？——因为堵车了。', pinyin: 'Nǐ zěnme méi lái? —— Yīnwèi dǔchē le.', de: 'Wieso bist du nicht gekommen? — Weil es Stau gab.' }
          ]
        },
        {
          heading: 'Verwandte Strukturen',
          text: 'Es gibt weitere Kausalausdrücke: <strong>由于</strong> (aufgrund von, formell), <strong>既然</strong> (da ja, wenn schon), <strong>之所以...是因为</strong> (der Grund ist, dass...).',
          examples: [
            { cn: '由于天气原因，航班取消了。', pinyin: 'Yóuyú tiānqì yuányīn, hángbān qǔxiāo le.', de: 'Aufgrund des Wetters wurde der Flug gestrichen.' },
            { cn: '既然你来了，就坐下吧。', pinyin: 'Jìrán nǐ lái le, jiù zuòxia ba.', de: 'Da du nun mal hier bist, setz dich doch.' },
            { cn: '他之所以成功，是因为他很努力。', pinyin: 'Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.', de: 'Der Grund für seinen Erfolg ist, dass er sich sehr anstrengt.' }
          ],
          tip: '既然 drückt aus: „Da die Situation nun mal so ist..." — es akzeptiert eine Tatsache und zieht daraus eine Schlussfolgerung.'
        }
      ]
    },

    // ── Lesson 16: 越...越... ──────────────────────────────────────────
    {
      id: 'lesson-16',
      number: 16,
      title: '越...越...',
      subtitle: '„Je... desto..." — Progressive Veränderung',
      level: 'HSK3/HSK4',
      intro: '„Je mehr ich lerne, desto mehr verstehe ich." „Je kälter es wird, desto weniger will ich rausgehen." Diese progressiven Konstruktionen sind im Deutschen schon elegant — im Chinesischen sind sie es noch mehr. Mit <strong>越...越...</strong> drückst du aus, dass sich zwei Dinge <strong>parallel und proportional</strong> verändern. Die Struktur ist simpel, aber die Ausdruckskraft ist enorm.',
      sections: [
        {
          heading: 'Grundstruktur: 越来越 + Adjektiv',
          text: 'Die einfachste Form: <strong>越来越 + Adjektiv/Verb</strong> bedeutet „immer mehr..." oder „zunehmend...". Hier wird nur <em>eine</em> Veränderung beschrieben.',
          examples: [
            { cn: '天气越来越冷了。', pinyin: 'Tiānqì yuèláiyuè lěng le.', de: 'Das Wetter wird immer kälter.' },
            { cn: '他的中文越来越好了。', pinyin: 'Tā de Zhōngwén yuèláiyuè hǎo le.', de: 'Sein Chinesisch wird immer besser.' },
            { cn: '我越来越喜欢中国菜。', pinyin: 'Wǒ yuèláiyuè xǐhuan Zhōngguó cài.', de: 'Ich mag chinesisches Essen immer mehr.' }
          ],
          tip: '越来越 + Adj + 了 ist eine der häufigsten Strukturen in der Alltagssprache. Am Ende steht oft 了, weil sich eine Veränderung vollzieht.'
        },
        {
          heading: '越 A 越 B — Parallele Veränderung',
          text: 'Die volle Konstruktion: <strong>越 + A + 越 + B</strong> drückt aus, dass je mehr A passiert, desto mehr passiert B. Zwei Veränderungen laufen parallel.',
          examples: [
            { cn: '越学越有意思。', pinyin: 'Yuè xué yuè yǒu yìsi.', de: 'Je mehr man lernt, desto interessanter wird es.' },
            { cn: '他越说越生气。', pinyin: 'Tā yuè shuō yuè shēngqì.', de: 'Je mehr er redet, desto wütender wird er.' },
            { cn: '雨越下越大。', pinyin: 'Yǔ yuè xià yuè dà.', de: 'Der Regen wird immer stärker.' }
          ]
        },
        {
          heading: 'Mit zwei verschiedenen Subjekten',
          text: 'Die beiden Teile können auch <strong>verschiedene Subjekte</strong> haben. Dann beschreibt die Konstruktion einen kausalen Zusammenhang.',
          examples: [
            { cn: '你越说，我越不明白。', pinyin: 'Nǐ yuè shuō, wǒ yuè bù míngbai.', de: 'Je mehr du erklärst, desto weniger verstehe ich.' },
            { cn: '老师越严格，学生越认真。', pinyin: 'Lǎoshī yuè yángé, xuéshēng yuè rènzhēn.', de: 'Je strenger der Lehrer, desto gewissenhafter die Schüler.' },
            { cn: '风越大，浪越高。', pinyin: 'Fēng yuè dà, làng yuè gāo.', de: 'Je stärker der Wind, desto höher die Wellen.' }
          ],
          tip: 'Beachte die Eleganz: Im Chinesischen braucht man kein „je" und „desto" — 越...越... reicht völlig aus.'
        },
        {
          heading: 'Variante: 越...越好',
          text: 'Eine häufige feste Wendung: <strong>越 + Adj + 越好</strong> = „je ... desto besser".',
          examples: [
            { cn: '越快越好。', pinyin: 'Yuè kuài yuè hǎo.', de: 'Je schneller, desto besser.' },
            { cn: '越多越好。', pinyin: 'Yuè duō yuè hǎo.', de: 'Je mehr, desto besser.' },
            { cn: '越早越好。', pinyin: 'Yuè zǎo yuè hǎo.', de: 'Je früher, desto besser.' }
          ]
        }
      ]
    },

    // ── Lesson 17: 会, 能, 可以 ────────────────────────────────────────
    {
      id: 'lesson-17',
      number: 17,
      title: '会, 能, 可以',
      subtitle: 'Modale Hilfsverben — Können ist nicht gleich Können',
      level: 'HSK1/HSK2',
      intro: 'Im Deutschen haben wir ein einziges Wort für „können" — im Chinesischen gibt es <strong>drei</strong>! 会 (huì), 能 (néng) und 可以 (kěyǐ) bedeuten alle „können", aber in verschiedenen Nuancen. 会 = gelernte Fähigkeit, 能 = physische oder situationsbedingte Möglichkeit, 可以 = Erlaubnis oder Möglichkeit. Den Unterschied zu beherrschen ist einer der Schlüssel zu natürlichem Chinesisch.',
      sections: [
        {
          heading: '会 (huì) — Gelernte Fähigkeit',
          text: '会 drückt aus, dass man etwas <strong>gelernt hat</strong> und es jetzt beherrscht. Es geht um Fertigkeiten, die man durch Übung oder Studium erworben hat. 会 hat auch eine zweite Bedeutung: „werden" (Zukunft/Wahrscheinlichkeit).',
          examples: [
            { cn: '我会说中文。', pinyin: 'Wǒ huì shuō Zhōngwén.', de: 'Ich kann Chinesisch sprechen. (Gelernte Fähigkeit)' },
            { cn: '他会开车。', pinyin: 'Tā huì kāi chē.', de: 'Er kann Auto fahren.' },
            { cn: '明天会下雨。', pinyin: 'Míngtiān huì xià yǔ.', de: 'Morgen wird es regnen. (Vorhersage)' },
            { cn: '她不会游泳。', pinyin: 'Tā bú huì yóuyǒng.', de: 'Sie kann nicht schwimmen.' }
          ],
          tip: 'Merke: 会 = „Ich habe es gelernt / Ich bin in der Lage." Wenn du fragst „Kannst du Klavier spielen?", meinst du 会: 你会弹钢琴吗？'
        },
        {
          heading: '能 (néng) — Fähigkeit / Möglichkeit',
          text: '能 drückt aus, dass man etwas <strong>physisch oder unter den gegebenen Umständen tun kann</strong>. Es geht um Möglichkeit, Kapazität oder körperliche Fähigkeit. Auch für Erlaubnis wird 能 manchmal verwendet.',
          examples: [
            { cn: '我今天不能来。', pinyin: 'Wǒ jīntiān bù néng lái.', de: 'Ich kann heute nicht kommen. (Umstände)' },
            { cn: '他受伤了，不能走路。', pinyin: 'Tā shòushāng le, bù néng zǒulù.', de: 'Er hat sich verletzt, er kann nicht laufen. (Physisch)' },
            { cn: '你能帮我一下吗？', pinyin: 'Nǐ néng bāng wǒ yíxià ma?', de: 'Kannst du mir kurz helfen? (Bitte)' }
          ]
        },
        {
          heading: '可以 (kěyǐ) — Erlaubnis / Möglichkeit',
          text: '可以 drückt <strong>Erlaubnis</strong> aus oder eine allgemeine Möglichkeit. Es beantwortet die Frage: „Darf ich?" oder „Ist es möglich?".',
          examples: [
            { cn: '这里可以停车吗？', pinyin: 'Zhèlǐ kěyǐ tíngchē ma?', de: 'Darf man hier parken?' },
            { cn: '你可以走了。', pinyin: 'Nǐ kěyǐ zǒu le.', de: 'Du darfst gehen.' },
            { cn: '这个可以吃吗？', pinyin: 'Zhège kěyǐ chī ma?', de: 'Kann man das essen? / Darf man das essen?' }
          ],
          tip: 'Die Verneinung von 可以 für Verbote ist <strong>不可以</strong> oder <strong>不能</strong>. ❌ 不可以抽烟 = Rauchen verboten!'
        },
        {
          heading: 'Vergleich & Übersicht',
          text: 'Hier siehst du den Unterschied auf einen Blick anhand desselben Themas — Autofahren:',
          examples: [
            { cn: '他会开车。', pinyin: 'Tā huì kāi chē.', de: 'Er kann Auto fahren. (Er hat den Führerschein / hat es gelernt)' },
            { cn: '他喝了酒，不能开车。', pinyin: 'Tā hē le jiǔ, bù néng kāi chē.', de: 'Er hat Alkohol getrunken, er kann nicht fahren. (Umstände)' },
            { cn: '这里不可以停车。', pinyin: 'Zhèlǐ bù kěyǐ tíngchē.', de: 'Hier darf man nicht parken. (Verbot/Erlaubnis)' }
          ]
        }
      ]
    },

    // ── Lesson 18: Zählwörter & Maßeinheiten ──────────────────────────
    {
      id: 'lesson-18',
      number: 18,
      title: 'Zählwörter (量词)',
      subtitle: 'Wie man im Chinesischen Dinge zählt',
      level: 'HSK1',
      intro: 'Im Deutschen sagen wir „ein <em>Stück</em> Kuchen", „drei <em>Glas</em> Wasser", „zwei <em>Blatt</em> Papier" — aber bei den meisten Dingen brauchen wir kein Zählwort: „ein Buch", „zwei Katzen". Im Chinesischen ist das <strong>immer</strong> nötig! Zwischen Zahl und Nomen muss <strong>immer ein Zählwort</strong> (量词, liàngcí) stehen. 个 ist der universelle „Joker", aber es gibt Dutzende spezifischer Zählwörter. Sie zu lernen ist wie Vokabellernen — aber es lohnt sich, denn sie machen dein Chinesisch authentisch.',
      sections: [
        {
          heading: 'Das Universalzählwort 个 (gè)',
          text: '个 ist das <strong>häufigste</strong> Zählwort und funktioniert für Menschen, abstrakte Dinge und vieles mehr. Im Zweifelsfall liegst du mit 个 selten komplett falsch.',
          examples: [
            { cn: '一个人', pinyin: 'yí gè rén', de: 'eine Person' },
            { cn: '三个苹果', pinyin: 'sān gè píngguǒ', de: 'drei Äpfel' },
            { cn: '两个问题', pinyin: 'liǎng gè wèntí', de: 'zwei Fragen' },
            { cn: '这个很好。', pinyin: 'Zhège hěn hǎo.', de: 'Dieses (hier) ist gut.' }
          ],
          tip: 'Beachte: Bei „zwei" vor Zählwörtern sagt man <strong>两</strong> (liǎng), nicht 二 (èr)! Also 两个, nicht 二个.'
        },
        {
          heading: 'Wichtige Zählwörter',
          text: 'Hier sind die häufigsten Zählwörter, die du kennen solltest: <strong>本</strong> (Bücher), <strong>只</strong> (Tiere), <strong>条</strong> (lange, schmale Dinge), <strong>张</strong> (flache Dinge), <strong>件</strong> (Kleidung/Angelegenheiten), <strong>杯</strong> (Tassen/Gläser), <strong>块</strong> (Stücke/Geldeinheit).',
          examples: [
            { cn: '一本书', pinyin: 'yì běn shū', de: 'ein Buch' },
            { cn: '两只猫', pinyin: 'liǎng zhī māo', de: 'zwei Katzen' },
            { cn: '一条鱼', pinyin: 'yì tiáo yú', de: 'ein Fisch' },
            { cn: '三张票', pinyin: 'sān zhāng piào', de: 'drei Tickets' }
          ]
        },
        {
          heading: 'Zählwörter mit 这/那/哪',
          text: 'Auch bei Demonstrativpronomen (这 = dies, 那 = jenes, 哪 = welches) braucht man ein Zählwort: <strong>这/那/哪 + Zählwort + Nomen</strong>.',
          examples: [
            { cn: '这本书很有意思。', pinyin: 'Zhè běn shū hěn yǒu yìsi.', de: 'Dieses Buch ist sehr interessant.' },
            { cn: '那个学生是谁？', pinyin: 'Nàge xuéshēng shì shéi?', de: 'Wer ist dieser Student dort?' },
            { cn: '你要哪杯咖啡？', pinyin: 'Nǐ yào nǎ bēi kāfēi?', de: 'Welche Tasse Kaffee möchtest du?' }
          ],
          tip: 'Im gesprochenen Chinesisch wird 那个 oft als „nèige" ausgesprochen und 这个 als „zhèige" — das ist normaler Umgangssprachgebrauch.'
        },
        {
          heading: 'Weitere häufige Zählwörter',
          text: 'Mit der Zeit wirst du immer mehr Zählwörter kennenlernen. Hier noch einige wichtige: <strong>位</strong> (höflich für Personen), <strong>双</strong> (Paare), <strong>把</strong> (Gegenstände mit Griff), <strong>辆</strong> (Fahrzeuge), <strong>封</strong> (Briefe/E-Mails).',
          examples: [
            { cn: '这位老师姓王。', pinyin: 'Zhè wèi lǎoshī xìng Wáng.', de: 'Dieser Lehrer heißt Wang. (höflich)' },
            { cn: '一双筷子', pinyin: 'yì shuāng kuàizi', de: 'ein Paar Essstäbchen' },
            { cn: '两辆车', pinyin: 'liǎng liàng chē', de: 'zwei Autos' },
            { cn: '一封信', pinyin: 'yì fēng xìn', de: 'ein Brief' }
          ]
        }
      ]
    },

    // ── Lesson 19: 在, 正在, 正 ────────────────────────────────────────
    {
      id: 'lesson-19',
      number: 19,
      title: '在, 正在, 正',
      subtitle: 'Verlaufsform — „gerade dabei"',
      level: 'HSK1/HSK2',
      intro: 'Im Englischen gibt es die „-ing"-Form: „I am eating." Im Deutschen sagen wir „Ich esse gerade." Auch Chinesisch hat Mittel, um auszudrücken, dass eine Handlung <strong>gerade jetzt stattfindet</strong>: <strong>在</strong>, <strong>正在</strong> und <strong>正</strong>. Dazu kommt die Partikel <strong>呢</strong> am Satzende, die den Verlauf zusätzlich betont. Diese Marker sind einfach zu lernen und machen dein Chinesisch sofort lebendiger.',
      sections: [
        {
          heading: 'Grundstruktur',
          text: '<strong>在 + Verb</strong> oder <strong>正在 + Verb</strong> oder <strong>正 + Verb</strong> — alle drei drücken aus, dass die Handlung <em>gerade jetzt</em> stattfindet. 正在 ist die vollständigste Form, 在 die häufigste.',
          examples: [
            { cn: '我在吃饭。', pinyin: 'Wǒ zài chīfàn.', de: 'Ich esse gerade.' },
            { cn: '她正在看书。', pinyin: 'Tā zhèngzài kàn shū.', de: 'Sie liest gerade.' },
            { cn: '他们正讨论这个问题。', pinyin: 'Tāmen zhèng tǎolùn zhège wèntí.', de: 'Sie diskutieren gerade dieses Problem.' }
          ],
          tip: '在 vor einem Verb = Verlaufsform. 在 vor einem Ort = Ortsangabe. Kontext entscheidet! 我在家 (Ich bin zu Hause) vs. 我在吃 (Ich esse gerade).'
        },
        {
          heading: '呢 am Satzende',
          text: 'Die Partikel <strong>呢</strong> (ne) am Satzende verstärkt den Verlaufsaspekt. Sie kann allein oder zusammen mit 在/正在 verwendet werden.',
          examples: [
            { cn: '你在干什么呢？', pinyin: 'Nǐ zài gàn shénme ne?', de: 'Was machst du gerade?' },
            { cn: '我看书呢。', pinyin: 'Wǒ kàn shū ne.', de: 'Ich lese gerade. (auch ohne 在 möglich)' },
            { cn: '外面下雪呢。', pinyin: 'Wàimiàn xià xuě ne.', de: 'Draußen schneit es gerade.' }
          ]
        },
        {
          heading: 'Verneinung',
          text: 'Die Verneinung der Verlaufsform verwendet <strong>没(有)在</strong>. 不在 wird seltener für den Verlaufsaspekt benutzt (es bedeutet eher „nicht anwesend sein").',
          examples: [
            { cn: '他没在睡觉。', pinyin: 'Tā méi zài shuìjiào.', de: 'Er schläft gerade nicht.' },
            { cn: '我没有在玩，我在学习。', pinyin: 'Wǒ méiyǒu zài wán, wǒ zài xuéxí.', de: 'Ich spiele nicht, ich lerne.' },
            { cn: '她刚才没在听。', pinyin: 'Tā gāngcái méi zài tīng.', de: 'Sie hat gerade eben nicht zugehört.' }
          ],
          tip: '不在 + Ort = nicht anwesend: 他不在家 (Er ist nicht zu Hause). 没在 + Verb = nicht gerade dabei: 他没在学习 (Er lernt gerade nicht).'
        },
        {
          heading: 'Verlaufsform in der Vergangenheit',
          text: 'Auch vergangene Handlungen, die zu einem bestimmten Zeitpunkt im Gange waren, können mit 在/正在 beschrieben werden — ähnlich dem englischen „was doing".',
          examples: [
            { cn: '我打电话的时候，他正在洗澡。', pinyin: 'Wǒ dǎ diànhuà de shíhou, tā zhèngzài xǐzǎo.', de: 'Als ich anrief, duschte er gerade.' },
            { cn: '昨天晚上八点我在写作业。', pinyin: 'Zuótiān wǎnshang bā diǎn wǒ zài xiě zuòyè.', de: 'Gestern Abend um acht schrieb ich Hausaufgaben.' }
          ]
        }
      ]
    },

    // ── Lesson 20: 不 vs 没 ───────────────────────────────────────────
    {
      id: 'lesson-20',
      number: 20,
      title: '不 vs. 没',
      subtitle: 'Die zwei Verneinungen des Chinesischen',
      level: 'HSK1',
      intro: 'Im Deutschen haben wir „nicht" und „kein" — im Chinesischen gibt es <strong>不</strong> (bù) und <strong>没</strong> (méi). Beide bedeuten „nicht", aber sie werden in <strong>völlig verschiedenen Situationen</strong> verwendet. Die grundlegende Regel: 不 verneint <strong>Absichten, Gewohnheiten und Zustände</strong>; 没 verneint <strong>abgeschlossene Handlungen und Besitz</strong>. Diesen Unterschied zu meistern ist einer der ersten großen Durchbrüche beim Chinesischlernen.',
      sections: [
        {
          heading: '不 (bù) — Absicht, Gewohnheit, Eigenschaft',
          text: '不 wird verwendet für: <strong>Willensäußerungen</strong> (ich will nicht), <strong>Gewohnheiten</strong> (er trinkt nicht), <strong>allgemeine Aussagen</strong> (das ist nicht) und <strong>Adjektive</strong> (nicht groß). 不 ist die „Standard-Verneinung" für Gegenwart und Zukunft.',
          examples: [
            { cn: '我不喜欢咖啡。', pinyin: 'Wǒ bù xǐhuan kāfēi.', de: 'Ich mag keinen Kaffee. (Eigenschaft/Gewohnheit)' },
            { cn: '他不来。', pinyin: 'Tā bù lái.', de: 'Er kommt nicht. (Absicht/Zukunft)' },
            { cn: '今天不热。', pinyin: 'Jīntiān bú rè.', de: 'Heute ist es nicht heiß. (Zustand)' },
            { cn: '我不是学生。', pinyin: 'Wǒ bú shì xuéshēng.', de: 'Ich bin kein Student. (是 wird immer mit 不 verneint!)' }
          ],
          tip: '不 vor dem 4. Ton wird zu bú: 不是 (bú shì), 不对 (bú duì), 不去 (bú qù). In allen anderen Fällen bleibt es bù.'
        },
        {
          heading: '没 (méi) — Vergangenheit & Besitz',
          text: '没 wird verwendet für: <strong>vergangene Handlungen, die nicht stattfanden</strong> (ich habe nicht...) und <strong>Besitz</strong> (haben/nicht haben). 没 ist die Verneinung von 有 und die Verneinung für abgeschlossene Handlungen.',
          examples: [
            { cn: '我没有钱。', pinyin: 'Wǒ méiyǒu qián.', de: 'Ich habe kein Geld.' },
            { cn: '他昨天没来。', pinyin: 'Tā zuótiān méi lái.', de: 'Er ist gestern nicht gekommen.' },
            { cn: '我没看那个电影。', pinyin: 'Wǒ méi kàn nàge diànyǐng.', de: 'Ich habe den Film nicht gesehen.' },
            { cn: '她还没吃饭。', pinyin: 'Tā hái méi chīfàn.', de: 'Sie hat noch nicht gegessen.' }
          ],
          tip: '有 wird <strong>immer</strong> mit 没 verneint: 没有. Niemals 不有! Das ist eine eiserne Regel.'
        },
        {
          heading: 'Direkter Vergleich',
          text: 'Am besten versteht man den Unterschied durch direkte Gegenüberstellung mit demselben Verb:',
          examples: [
            { cn: '我不吃肉。', pinyin: 'Wǒ bù chī ròu.', de: 'Ich esse kein Fleisch. (Grundsätzlich, Gewohnheit)' },
            { cn: '我没吃肉。', pinyin: 'Wǒ méi chī ròu.', de: 'Ich habe kein Fleisch gegessen. (Dieses Mal, Vergangenheit)' },
            { cn: '他不去上海。', pinyin: 'Tā bú qù Shànghǎi.', de: 'Er fährt nicht nach Shanghai. (Will nicht / hat nicht vor)' },
            { cn: '他没去上海。', pinyin: 'Tā méi qù Shànghǎi.', de: 'Er ist nicht nach Shanghai gefahren. (Vergangenheit)' }
          ]
        },
        {
          heading: 'Besondere Fälle',
          text: 'Einige Verben und Ausdrücke haben feste Verneinungspartner: 是 → immer 不是. 有 → immer 没有. Modale Hilfsverben (会, 能, 可以, 应该) → meistens 不.',
          examples: [
            { cn: '他不会游泳。', pinyin: 'Tā bú huì yóuyǒng.', de: 'Er kann nicht schwimmen.' },
            { cn: '你不应该这样做。', pinyin: 'Nǐ bù yīnggāi zhèyàng zuò.', de: 'Du solltest das nicht so machen.' },
            { cn: '这里没有人。', pinyin: 'Zhèlǐ méiyǒu rén.', de: 'Hier ist niemand.' },
            { cn: '我没准备好。', pinyin: 'Wǒ méi zhǔnbèi hǎo.', de: 'Ich bin noch nicht bereit.' }
          ],
          tip: 'Wenn du unsicher bist: Frag dich — geht es um eine <strong>allgemeine Aussage oder Absicht</strong> (→ 不) oder um ein <strong>konkretes vergangenes Ereignis oder Besitz</strong> (→ 没)?'
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
