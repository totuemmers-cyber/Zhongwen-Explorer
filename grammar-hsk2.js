// Zhongwen Explorer grammar source (consolidated by scripts/consolidate-grammar.cjs). HSK2.
window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat([
  {
    "id": "g:是...的",
    "pattern": "是...的",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "betont, wie/wann/wo etwas geschah",
    "formation": "Subjekt + 是 + Details + Verb + 的",
    "explanation": "Die 是...的-Konstruktion wird verwendet, um bestimmte Details einer bereits bekannten Handlung zu betonen, z.B. wann, wo oder wie etwas geschehen ist.",
    "notes": "Wird nur für abgeschlossene Handlungen verwendet. Nicht verwechseln mit einfachem 是.",
    "relatedPatterns": [
      "了",
      "过"
    ],
    "examples": [
      {
        "chinese": "我是去年来中国的。",
        "pinyin": "Wǒ shì qùnián lái Zhōngguó de.",
        "german": "Ich bin letztes Jahr nach China gekommen (betont: letztes Jahr)."
      },
      {
        "chinese": "你是怎么来的？",
        "pinyin": "Nǐ shì zěnme lái de?",
        "german": "Wie bist du gekommen?"
      }
    ],
    "legacyIds": [
      "是...的"
    ]
  },
  {
    "id": "g:比",
    "pattern": "比",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "Vergleich (mehr als)",
    "formation": "A + 比 + B + Adjektiv",
    "explanation": "比 wird für Vergleiche verwendet und bedeutet ‹mehr als / ...er als›.",
    "notes": "Kein 很 nach 比: ‹他比我很高› ist falsch.",
    "relatedPatterns": [
      "没有...那么",
      "一样"
    ],
    "examples": [
      {
        "chinese": "他比我高。",
        "pinyin": "Tā bǐ wǒ gāo.",
        "german": "Er ist größer als ich."
      },
      {
        "chinese": "今天比昨天冷。",
        "pinyin": "Jīntiān bǐ zuótiān lěng.",
        "german": "Heute ist es kälter als gestern."
      }
    ],
    "legacyIds": [
      "比"
    ]
  },
  {
    "id": "g:跟...一样",
    "pattern": "跟...一样",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "gleich wie / genauso wie",
    "formation": "A + 跟 + B + 一样 (+ Adjektiv)",
    "explanation": "Drückt Gleichheit zwischen zwei Dingen aus.",
    "notes": "Verneinung: 跟...不一样 (anders als).",
    "relatedPatterns": [
      "比",
      "不一样"
    ],
    "examples": [
      {
        "chinese": "你跟他一样高。",
        "pinyin": "Nǐ gēn tā yíyàng gāo.",
        "german": "Du bist genauso groß wie er."
      },
      {
        "chinese": "这个跟那个一样。",
        "pinyin": "Zhège gēn nàge yíyàng.",
        "german": "Dieses ist genauso wie jenes."
      }
    ],
    "legacyIds": [
      "跟...一样"
    ]
  },
  {
    "id": "g:没有...那么",
    "pattern": "没有...那么",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "nicht so ... wie",
    "formation": "A + 没有 + B + 那么 + Adjektiv",
    "explanation": "Negativer Vergleich: A ist nicht so [Adjektiv] wie B.",
    "notes": "那么 kann durch 这么 ersetzt werden.",
    "relatedPatterns": [
      "比",
      "跟...一样"
    ],
    "examples": [
      {
        "chinese": "我没有他那么高。",
        "pinyin": "Wǒ méi yǒu tā nàme gāo.",
        "german": "Ich bin nicht so groß wie er."
      },
      {
        "chinese": "今天没有昨天那么热。",
        "pinyin": "Jīntiān méi yǒu zuótiān nàme rè.",
        "german": "Heute ist es nicht so heiß wie gestern."
      }
    ],
    "legacyIds": [
      "没有...那么"
    ]
  },
  {
    "id": "g:一边...一边...",
    "pattern": "一边...一边...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "gleichzeitig (einerseits...andererseits)",
    "formation": "一边 + Verb₁ + 一边 + Verb₂",
    "explanation": "Drückt aus, dass zwei Handlungen gleichzeitig stattfinden.",
    "notes": "Beide Handlungen müssen gleichzeitig möglich sein.",
    "relatedPatterns": [
      "又...又..."
    ],
    "examples": [
      {
        "chinese": "他一边吃饭一边看电视。",
        "pinyin": "Tā yìbiān chī fàn yìbiān kàn diànshì.",
        "german": "Er isst und schaut gleichzeitig fern."
      },
      {
        "chinese": "一边走一边聊天。",
        "pinyin": "Yìbiān zǒu yìbiān liáotiān.",
        "german": "Gleichzeitig gehen und plaudern."
      },
      {
        "chinese": "他一边吃饭一边看手机。",
        "pinyin": "Tā yìbiān chīfàn yìbiān kàn shǒujī.",
        "german": "Er isst und schaut gleichzeitig aufs Handy."
      },
      {
        "chinese": "我喜欢一边听音乐一边做作业。",
        "pinyin": "Wǒ xǐhuan yìbiān tīng yīnyuè yìbiān zuò zuòyè.",
        "german": "Ich hoere gerne Musik, waehrend ich Hausaufgaben mache."
      },
      {
        "chinese": "她一边走路一边打电话。",
        "pinyin": "Tā yìbiān zǒulù yìbiān dǎ diànhuà.",
        "german": "Sie telefoniert beim Gehen."
      }
    ],
    "legacyIds": [
      "一边...一边..."
    ]
  },
  {
    "id": "g:虽然...但是...",
    "pattern": "虽然...但是...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "obwohl ... aber ...",
    "formation": "虽然 + Satz₁, 但是 + Satz₂",
    "explanation": "Konzessivsatz: Einräumung eines Umstands mit Gegenaussage.",
    "notes": "但是 kann durch 可是 ersetzt werden. Im Chinesischen steht ‹aber› trotz ‹obwohl› – anders als im Deutschen.",
    "relatedPatterns": [
      "但是",
      "可是"
    ],
    "examples": [
      {
        "chinese": "虽然很贵，但是很好吃。",
        "pinyin": "Suīrán hěn guì, dànshì hěn hǎochī.",
        "german": "Obwohl es teuer ist, schmeckt es gut."
      },
      {
        "chinese": "虽然我很累，但是我还要学习。",
        "pinyin": "Suīrán wǒ hěn lèi, dànshì wǒ hái yào xuéxí.",
        "german": "Obwohl ich müde bin, muss ich noch lernen."
      },
      {
        "chinese": "虽然很贵，但是质量很好。",
        "pinyin": "Suīrán hěn guì, dànshì zhìliàng hěn hǎo.",
        "german": "Obwohl es teuer ist, ist die Qualitaet sehr gut."
      },
      {
        "chinese": "他虽然年纪大了，但是身体很好。",
        "pinyin": "Tā suīrán niánjì dà le, dànshì shēntǐ hěn hǎo.",
        "german": "Obwohl er schon alt ist, ist er sehr gesund."
      },
      {
        "chinese": "虽然我们输了比赛，但是大家都很开心。",
        "pinyin": "Suīrán wǒmen shū le bǐsài, dànshì dàjiā dōu hěn kāixīn.",
        "german": "Obwohl wir das Spiel verloren haben, waren alle gluecklich."
      }
    ],
    "legacyIds": [
      "虽然...但是..."
    ]
  },
  {
    "id": "g:因为...所以...",
    "pattern": "因为...所以...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "weil ... deshalb ...",
    "formation": "因为 + Grund, 所以 + Folge",
    "explanation": "Kausalsatz: Angabe von Grund und Folge.",
    "notes": "因为 und 所以 können einzeln verwendet werden, aber nie nur ‹因为› allein (所以 ist dann implizit).",
    "relatedPatterns": [
      "为什么",
      "所以"
    ],
    "examples": [
      {
        "chinese": "因为下雨，所以我没去。",
        "pinyin": "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.",
        "german": "Weil es geregnet hat, bin ich nicht gegangen."
      },
      {
        "chinese": "因为太贵了，所以我没买。",
        "pinyin": "Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.",
        "german": "Weil es zu teuer war, habe ich es nicht gekauft."
      },
      {
        "chinese": "因为堵车，所以我迟到了。",
        "pinyin": "Yīnwèi dǔchē, suǒyǐ wǒ chídào le.",
        "german": "Weil es einen Stau gab, bin ich zu spaet gekommen."
      },
      {
        "chinese": "因为他生病了，所以没来上课。",
        "pinyin": "Yīnwèi tā shēngbìng le, suǒyǐ méi lái shàngkè.",
        "german": "Weil er krank ist, ist er nicht zum Unterricht gekommen."
      },
      {
        "chinese": "因为天气太热，所以我们决定待在家里。",
        "pinyin": "Yīnwèi tiānqì tài rè, suǒyǐ wǒmen juédìng dāi zài jiālǐ.",
        "german": "Weil das Wetter zu heiss ist, haben wir uns entschieden, zu Hause zu bleiben."
      }
    ],
    "legacyIds": [
      "因为...所以..."
    ]
  },
  {
    "id": "g:如果...就...",
    "pattern": "如果...就...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "wenn ... dann ...",
    "formation": "如果 + Bedingung, (Subjekt +) 就 + Folge",
    "explanation": "Konditionalsatz: Bedingung und deren Folge.",
    "notes": "要是 ist eine umgangssprachlichere Alternative zu 如果.",
    "relatedPatterns": [
      "要是...就...",
      "只要...就..."
    ],
    "examples": [
      {
        "chinese": "如果明天下雨，我就不去了。",
        "pinyin": "Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.",
        "german": "Wenn es morgen regnet, gehe ich nicht."
      },
      {
        "chinese": "如果你有时间，就来吧。",
        "pinyin": "Rúguǒ nǐ yǒu shíjiān, jiù lái ba.",
        "german": "Wenn du Zeit hast, komm doch."
      }
    ],
    "legacyIds": [
      "如果...就..."
    ]
  },
  {
    "id": "g:越来越...",
    "pattern": "越来越...",
    "level": "HSK2",
    "category": "Adjektive",
    "meaning": "immer mehr / zunehmend",
    "formation": "越来越 + Adjektiv/Verb",
    "explanation": "Drückt eine zunehmende Veränderung aus.",
    "notes": "越...越...: Je mehr... desto mehr...",
    "relatedPatterns": [
      "越...越..."
    ],
    "examples": [
      {
        "chinese": "天气越来越冷了。",
        "pinyin": "Tiānqì yuè lái yuè lěng le.",
        "german": "Das Wetter wird immer kälter."
      },
      {
        "chinese": "他的中文越来越好。",
        "pinyin": "Tā de Zhōngwén yuè lái yuè hǎo.",
        "german": "Sein Chinesisch wird immer besser."
      }
    ],
    "legacyIds": [
      "越来越..."
    ]
  },
  {
    "id": "g:越...越...",
    "pattern": "越...越...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "je ... desto ...",
    "formation": "越 + Adj₁/Verb₁ + 越 + Adj₂/Verb₂",
    "explanation": "Drückt eine proportionale Beziehung aus: je mehr A, desto mehr B.",
    "notes": "Subjekt kann weggelassen werden.",
    "relatedPatterns": [
      "越来越"
    ],
    "examples": [
      {
        "chinese": "越吃越胖。",
        "pinyin": "Yuè chī yuè pàng.",
        "german": "Je mehr man isst, desto dicker wird man."
      },
      {
        "chinese": "越快越好。",
        "pinyin": "Yuè kuài yuè hǎo.",
        "german": "Je schneller, desto besser."
      },
      {
        "chinese": "中文越学越有意思。",
        "pinyin": "Zhōngwén yuè xué yuè yǒu yìsi.",
        "german": "Je mehr man Chinesisch lernt, desto interessanter wird es."
      },
      {
        "chinese": "天气越来越冷了。",
        "pinyin": "Tiānqì yuè lái yuè lěng le.",
        "german": "Das Wetter wird immer kaelter."
      },
      {
        "chinese": "他越想越生气。",
        "pinyin": "Tā yuè xiǎng yuè shēngqì.",
        "german": "Je mehr er darueber nachdachte, desto wuetender wurde er."
      }
    ],
    "legacyIds": [
      "越...越..."
    ]
  },
  {
    "id": "g:把-Konstruktion",
    "pattern": "把-Konstruktion",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "Objekt vor das Verb stellen (Einwirkung)",
    "formation": "Subjekt + 把 + Objekt + Verb + Komplement",
    "explanation": "把 stellt das Objekt vor das Verb, um zu betonen, was mit dem Objekt geschieht. Das Verb braucht ein Komplement.",
    "notes": "Das Verb darf nicht allein stehen – es braucht 了, ein Komplement oder eine andere Erweiterung.",
    "relatedPatterns": [
      "被"
    ],
    "examples": [
      {
        "chinese": "请把门关上。",
        "pinyin": "Qǐng bǎ mén guānshàng.",
        "german": "Bitte mach die Tür zu."
      },
      {
        "chinese": "我把书放在桌子上了。",
        "pinyin": "Wǒ bǎ shū fàng zài zhuōzi shàng le.",
        "german": "Ich habe das Buch auf den Tisch gelegt."
      }
    ],
    "legacyIds": [
      "把-Konstruktion"
    ]
  },
  {
    "id": "g:被-Passiv",
    "pattern": "被-Passiv",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "Passivkonstruktion",
    "formation": "Subjekt + 被 (+ Agens) + Verb + Komplement",
    "explanation": "被 bildet das Passiv. Wird oft für negative oder unerwünschte Ereignisse verwendet.",
    "notes": "被 hat oft eine negative Konnotation, wird aber zunehmend neutral verwendet.",
    "relatedPatterns": [
      "把"
    ],
    "examples": [
      {
        "chinese": "我的手机被偷了。",
        "pinyin": "Wǒ de shǒujī bèi tōu le.",
        "german": "Mein Handy wurde gestohlen."
      },
      {
        "chinese": "他被老师批评了。",
        "pinyin": "Tā bèi lǎoshī pīpíng le.",
        "german": "Er wurde vom Lehrer kritisiert."
      }
    ],
    "legacyIds": [
      "被-Passiv"
    ]
  },
  {
    "id": "g:得 (Grad-/Artangabe)",
    "pattern": "得 (Grad-/Artangabe)",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "Angabe über Art/Grad einer Handlung",
    "formation": "Verb + 得 + Beschreibung",
    "explanation": "得 verbindet ein Verb mit einer Beschreibung, wie gut/schlecht etc. die Handlung ausgeführt wird.",
    "notes": "Drei de: 的 (Attribut), 得 (Grad/Art), 地 (Adverb).",
    "relatedPatterns": [
      "的",
      "地"
    ],
    "examples": [
      {
        "chinese": "他说得很好。",
        "pinyin": "Tā shuō de hěn hǎo.",
        "german": "Er spricht sehr gut."
      },
      {
        "chinese": "你跑得太快了。",
        "pinyin": "Nǐ pǎo de tài kuài le.",
        "german": "Du läufst zu schnell."
      }
    ],
    "legacyIds": [
      "得 (Grad-/Artangabe)"
    ]
  },
  {
    "id": "g:Verb + 完",
    "pattern": "Verb + 完",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "fertig / zu Ende (Resultativkomplement)",
    "formation": "Verb + 完 (+ 了)",
    "explanation": "完 als Komplement zeigt an, dass eine Handlung vollständig abgeschlossen ist.",
    "notes": "完 = vollständig abgeschlossen, 好 = zufriedenstellend fertig.",
    "relatedPatterns": [
      "Verb + 好",
      "Verb + 到"
    ],
    "examples": [
      {
        "chinese": "我吃完了。",
        "pinyin": "Wǒ chī wán le.",
        "german": "Ich habe aufgegessen."
      },
      {
        "chinese": "你看完这本书了吗？",
        "pinyin": "Nǐ kàn wán zhè běn shū le ma?",
        "german": "Hast du das Buch fertig gelesen?"
      }
    ],
    "legacyIds": [
      "Verb + 完"
    ]
  },
  {
    "id": "g:Verb + 到",
    "pattern": "Verb + 到",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "bis zu / erreichen (Resultativkomplement)",
    "formation": "Verb + 到 (+ Ziel/Zeitpunkt)",
    "explanation": "到 als Komplement zeigt an, dass eine Handlung ein Ziel erreicht hat.",
    "notes": "找到 (finden), 看到 (sehen/erblicken), 听到 (hören).",
    "relatedPatterns": [
      "Verb + 完",
      "Verb + 好"
    ],
    "examples": [
      {
        "chinese": "我找到了。",
        "pinyin": "Wǒ zhǎo dào le.",
        "german": "Ich habe es gefunden."
      },
      {
        "chinese": "他学到了很多。",
        "pinyin": "Tā xué dào le hěn duō.",
        "german": "Er hat viel gelernt."
      }
    ],
    "legacyIds": [
      "Verb + 到"
    ]
  },
  {
    "id": "g:Verb + 好",
    "pattern": "Verb + 好",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "gut/fertig (Resultativkomplement)",
    "formation": "Verb + 好 (+ 了)",
    "explanation": "好 als Komplement zeigt an, dass etwas zufriedenstellend abgeschlossen oder vorbereitet ist.",
    "notes": "好 betont die Qualität des Ergebnisses.",
    "relatedPatterns": [
      "Verb + 完",
      "Verb + 到"
    ],
    "examples": [
      {
        "chinese": "饭做好了。",
        "pinyin": "Fàn zuò hǎo le.",
        "german": "Das Essen ist fertig (zubereitet)."
      },
      {
        "chinese": "准备好了吗？",
        "pinyin": "Zhǔnbèi hǎo le ma?",
        "german": "Bist du fertig/bereit?"
      }
    ],
    "legacyIds": [
      "Verb + 好"
    ]
  },
  {
    "id": "g:过",
    "pattern": "过",
    "level": "HSK2",
    "category": "Partikel",
    "meaning": "Erfahrungsaspekt (schon einmal)",
    "formation": "Verb + 过 (+ Objekt)",
    "explanation": "过 nach dem Verb zeigt an, dass man etwas schon einmal erlebt hat.",
    "notes": "Verneinung: 没 + Verb + 过 (我没去过中国).",
    "relatedPatterns": [
      "了",
      "没 + Verb + 过"
    ],
    "examples": [
      {
        "chinese": "我去过中国。",
        "pinyin": "Wǒ qù guò Zhōngguó.",
        "german": "Ich war schon mal in China."
      },
      {
        "chinese": "你吃过北京烤鸭吗？",
        "pinyin": "Nǐ chī guò Běijīng kǎoyā ma?",
        "german": "Hast du schon mal Pekingente gegessen?"
      }
    ],
    "legacyIds": [
      "过"
    ]
  },
  {
    "id": "g:又...又...",
    "pattern": "又...又...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "sowohl ... als auch ...",
    "formation": "又 + Adj₁/Verb₁ + 又 + Adj₂/Verb₂",
    "explanation": "又...又... beschreibt zwei gleichzeitig vorhandene Eigenschaften oder Handlungen.",
    "notes": "又...又... beschreibt Zustände, 一边...一边... beschreibt Handlungen.",
    "relatedPatterns": [
      "一边...一边..."
    ],
    "examples": [
      {
        "chinese": "这个菜又便宜又好吃。",
        "pinyin": "Zhège cài yòu piányi yòu hǎochī.",
        "german": "Dieses Gericht ist sowohl günstig als auch lecker."
      },
      {
        "chinese": "她又聪明又漂亮。",
        "pinyin": "Tā yòu cōngming yòu piàoliang.",
        "german": "Sie ist sowohl klug als auch hübsch."
      }
    ],
    "legacyIds": [
      "又...又..."
    ]
  },
  {
    "id": "g:先...再/然后...",
    "pattern": "先...再/然后...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "zuerst ... dann ...",
    "formation": "先 + Verb₁, 再/然后 + Verb₂",
    "explanation": "Drückt eine zeitliche Reihenfolge von Handlungen aus.",
    "notes": "再 betont die Reihenfolge, 然后 ist neutraler.",
    "relatedPatterns": [
      "以后"
    ],
    "examples": [
      {
        "chinese": "先吃饭，再看电视。",
        "pinyin": "Xiān chī fàn, zài kàn diànshì.",
        "german": "Erst essen, dann fernsehen."
      },
      {
        "chinese": "我先去超市，然后回家。",
        "pinyin": "Wǒ xiān qù chāoshì, ránhòu huí jiā.",
        "german": "Ich gehe zuerst in den Supermarkt, dann nach Hause."
      }
    ],
    "legacyIds": [
      "先...再/然后..."
    ]
  },
  {
    "id": "g:Verb + 着",
    "pattern": "Verb + 着",
    "level": "HSK2",
    "category": "Partikel",
    "meaning": "andauernder Zustand",
    "formation": "Verb + 着",
    "explanation": "着 nach dem Verb beschreibt einen andauernden Zustand (nicht eine Aktion).",
    "notes": "着 = Zustand, 在 = laufende Handlung, 了 = Abschluss.",
    "relatedPatterns": [
      "在 + Verb",
      "了"
    ],
    "examples": [
      {
        "chinese": "门开着。",
        "pinyin": "Mén kāi zhe.",
        "german": "Die Tür steht offen."
      },
      {
        "chinese": "他穿着红色的衣服。",
        "pinyin": "Tā chuān zhe hóngsè de yīfu.",
        "german": "Er trägt rote Kleidung."
      }
    ],
    "legacyIds": [
      "Verb + 着"
    ]
  },
  {
    "id": "g:地 (Adverbpartikel)",
    "pattern": "地 (Adverbpartikel)",
    "level": "HSK2",
    "category": "Partikel",
    "meaning": "Adverb-Marker (Adj → Adverb)",
    "formation": "Adjektiv + 地 + Verb",
    "explanation": "地 wandelt ein Adjektiv in ein Adverb um (ähnlich wie dt. ‹-lich/-weise›).",
    "notes": "的 = Attribut, 得 = Gradangabe, 地 = Adverb.",
    "relatedPatterns": [
      "的",
      "得"
    ],
    "examples": [
      {
        "chinese": "他高兴地说。",
        "pinyin": "Tā gāoxìng de shuō.",
        "german": "Er sagte fröhlich."
      },
      {
        "chinese": "请认真地听。",
        "pinyin": "Qǐng rènzhēn de tīng.",
        "german": "Bitte hör aufmerksam zu."
      }
    ],
    "legacyIds": [
      "地 (Adverbpartikel)"
    ]
  },
  {
    "id": "g:要是...就...",
    "pattern": "要是...就...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "wenn ... dann ... (umgangssprachlich)",
    "formation": "要是 + Bedingung, 就 + Folge",
    "explanation": "Umgangssprachliche Version von 如果...就... für Bedingungssätze.",
    "notes": "要是 wird in der gesprochenen Sprache häufiger verwendet als 如果.",
    "relatedPatterns": [
      "如果...就..."
    ],
    "examples": [
      {
        "chinese": "要是你不来，我就自己去。",
        "pinyin": "Yàoshi nǐ bù lái, wǒ jiù zìjǐ qù.",
        "german": "Wenn du nicht kommst, gehe ich allein."
      },
      {
        "chinese": "要是下雨就别出门了。",
        "pinyin": "Yàoshi xià yǔ jiù bié chūmén le.",
        "german": "Wenn es regnet, geh lieber nicht raus."
      },
      {
        "chinese": "要是明天下雨，我们就不去了。",
        "pinyin": "Yàoshi míngtiān xià yǔ, wǒmen jiù bú qù le.",
        "german": "Wenn es morgen regnet, gehen wir nicht."
      },
      {
        "chinese": "你要是不舒服，就在家休息吧。",
        "pinyin": "Nǐ yàoshi bù shūfu, jiù zài jiā xiūxi ba.",
        "german": "Wenn du dich nicht wohl fuehlst, ruh dich zu Hause aus."
      },
      {
        "chinese": "要是有机会，我想去中国留学。",
        "pinyin": "Yàoshi yǒu jīhuì, wǒ xiǎng qù Zhōngguó liúxué.",
        "german": "Wenn ich die Gelegenheit haette, wuerde ich gerne in China studieren."
      }
    ],
    "legacyIds": [
      "要是...就..."
    ]
  },
  {
    "id": "g:不但...而且...",
    "pattern": "不但...而且...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "nicht nur ... sondern auch ...",
    "formation": "不但 + Satz₁, 而且 + Satz₂",
    "explanation": "Steigerung: Der zweite Teil geht über den ersten hinaus.",
    "notes": "Gleiche Subjekte: 不但 steht nach dem Subjekt. Verschiedene Subjekte: 不但 steht vor dem Subjekt.",
    "relatedPatterns": [
      "而且",
      "也"
    ],
    "examples": [
      {
        "chinese": "他不但会说中文，而且会说日文。",
        "pinyin": "Tā búdàn huì shuō Zhōngwén, érqiě huì shuō Rìwén.",
        "german": "Er kann nicht nur Chinesisch, sondern auch Japanisch sprechen."
      },
      {
        "chinese": "这个地方不但漂亮，而且安静。",
        "pinyin": "Zhège dìfang búdàn piàoliang, érqiě ānjìng.",
        "german": "Dieser Ort ist nicht nur schön, sondern auch ruhig."
      },
      {
        "chinese": "他不但会说中文，而且说得很好。",
        "pinyin": "Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.",
        "german": "Er kann nicht nur Chinesisch sprechen, sondern spricht es auch sehr gut."
      },
      {
        "chinese": "这个地方不但漂亮，而且很安静。",
        "pinyin": "Zhège dìfang búdàn piàoliang, érqiě hěn ānjìng.",
        "german": "Dieser Ort ist nicht nur schoen, sondern auch sehr ruhig."
      },
      {
        "chinese": "不但我去，而且他也去。",
        "pinyin": "Búdàn wǒ qù, érqiě tā yě qù.",
        "german": "Nicht nur ich gehe, sondern er geht auch."
      }
    ],
    "legacyIds": [
      "不但...而且..."
    ]
  },
  {
    "id": "g:一...就...",
    "pattern": "一...就...",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "sobald ... dann sofort ...",
    "formation": "一 + Verb₁ + 就 + Verb₂",
    "explanation": "Drückt aus, dass Handlung 2 sofort nach Handlung 1 eintritt.",
    "notes": "一...就... zeigt unmittelbare Abfolge.",
    "relatedPatterns": [
      "就",
      "才"
    ],
    "examples": [
      {
        "chinese": "他一到家就睡觉了。",
        "pinyin": "Tā yí dào jiā jiù shuìjiào le.",
        "german": "Sobald er zu Hause ankam, schlief er ein."
      },
      {
        "chinese": "我一看就明白了。",
        "pinyin": "Wǒ yí kàn jiù míngbai le.",
        "german": "Sobald ich es sah, verstand ich es."
      },
      {
        "chinese": "我一到家就给你打电话。",
        "pinyin": "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.",
        "german": "Sobald ich zu Hause ankomme, rufe ich dich an."
      },
      {
        "chinese": "她一听到这个消息就哭了。",
        "pinyin": "Tā yì tīng dào zhège xiāoxi jiù kū le.",
        "german": "Sobald sie die Nachricht hoerte, weinte sie."
      },
      {
        "chinese": "他一喝咖啡就睡不着。",
        "pinyin": "Tā yì hē kāfēi jiù shuì bu zháo.",
        "german": "Sobald er Kaffee trinkt, kann er nicht schlafen."
      }
    ],
    "legacyIds": [
      "一...就..."
    ]
  },
  {
    "id": "g:多 + Verb",
    "pattern": "多 + Verb",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "mehr (tun) / öfter (tun)",
    "formation": "多 + Verb (+ Objekt)",
    "explanation": "多 vor einem Verb fordert auf, etwas häufiger zu tun.",
    "notes": "少 + Verb = weniger tun: 少吃糖 (Iss weniger Süßes).",
    "relatedPatterns": [
      "少 + Verb"
    ],
    "examples": [
      {
        "chinese": "多喝水。",
        "pinyin": "Duō hē shuǐ.",
        "german": "Trink mehr Wasser."
      },
      {
        "chinese": "多练习。",
        "pinyin": "Duō liànxí.",
        "german": "Übe mehr."
      }
    ],
    "legacyIds": [
      "多 + Verb"
    ]
  },
  {
    "id": "g:必须 + Verb",
    "pattern": "必须 + Verb",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "müssen (zwingend / Pflicht)",
    "pinyin": "bìxū + Verb",
    "examples": [
      {
        "chinese": "你必须按时完成。",
        "pinyin": "Nǐ bìxū ànshí wánchéng.",
        "german": "Du musst es rechtzeitig fertigstellen."
      },
      {
        "chinese": "我们必须遵守规则。",
        "pinyin": "Wǒmen bìxū zūnshǒu guīzé.",
        "german": "Wir müssen die Regeln befolgen."
      }
    ],
    "legacyIds": [
      "必须 + Verb"
    ]
  },
  {
    "id": "g:不用 + Verb",
    "pattern": "不用 + Verb",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "braucht nicht / nicht nötig",
    "pinyin": "búyòng + Verb",
    "examples": [
      {
        "chinese": "不用谢。",
        "pinyin": "Búyòng xiè.",
        "german": "Keine Ursache."
      },
      {
        "chinese": "你不用来了。",
        "pinyin": "Nǐ búyòng lái le.",
        "german": "Du brauchst nicht zu kommen."
      }
    ],
    "legacyIds": [
      "不用 + Verb"
    ]
  },
  {
    "id": "g:非常 + Adjektiv",
    "pattern": "非常 + Adjektiv",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "außerordentlich / sehr (stärker als 很)",
    "pinyin": "fēicháng + Adjektiv",
    "examples": [
      {
        "chinese": "非常感谢！",
        "pinyin": "Fēicháng gǎnxiè!",
        "german": "Vielen herzlichen Dank!"
      },
      {
        "chinese": "这个地方非常漂亮。",
        "pinyin": "Zhège dìfang fēicháng piàoliang.",
        "german": "Dieser Ort ist außerordentlich schön."
      }
    ],
    "legacyIds": [
      "非常 + Adjektiv"
    ]
  },
  {
    "id": "g:特别 + Adjektiv",
    "pattern": "特别 + Adjektiv",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "besonders / außergewöhnlich",
    "pinyin": "tèbié + Adjektiv",
    "examples": [
      {
        "chinese": "今天特别冷。",
        "pinyin": "Jīntiān tèbié lěng.",
        "german": "Heute ist es besonders kalt."
      },
      {
        "chinese": "我特别喜欢这首歌。",
        "pinyin": "Wǒ tèbié xǐhuan zhè shǒu gē.",
        "german": "Ich mag dieses Lied besonders gern."
      }
    ],
    "legacyIds": [
      "特别 + Adjektiv"
    ]
  },
  {
    "id": "g:不太 + Adjektiv",
    "pattern": "不太 + Adjektiv",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "nicht besonders / nicht sehr (abgemilderte Verneinung)",
    "pinyin": "bú tài + Adjektiv",
    "examples": [
      {
        "chinese": "我不太喜欢。",
        "pinyin": "Wǒ bú tài xǐhuan.",
        "german": "Ich mag es nicht besonders."
      },
      {
        "chinese": "这个不太好。",
        "pinyin": "Zhège bú tài hǎo.",
        "german": "Das ist nicht besonders gut."
      }
    ],
    "legacyIds": [
      "不太 + Adjektiv"
    ]
  },
  {
    "id": "g:有一点儿 + Adjektiv",
    "pattern": "有一点儿 + Adjektiv",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "ein bisschen (leicht negativ empfunden)",
    "pinyin": "yǒu yìdiǎnr + Adjektiv",
    "examples": [
      {
        "chinese": "我有点儿累。",
        "pinyin": "Wǒ yǒudiǎnr lèi.",
        "german": "Ich bin ein bisschen müde."
      },
      {
        "chinese": "这个有点儿贵。",
        "pinyin": "Zhège yǒudiǎnr guì.",
        "german": "Das ist ein bisschen teuer."
      }
    ],
    "legacyIds": [
      "有一点儿 + Adjektiv"
    ]
  },
  {
    "id": "g:对 + Nomen + 感兴趣",
    "pattern": "对 + Nomen + 感兴趣",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "sich für etwas interessieren",
    "pinyin": "duì + Nomen + gǎn xìngqù",
    "examples": [
      {
        "chinese": "我对中国历史很感兴趣。",
        "pinyin": "Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.",
        "german": "Ich interessiere mich sehr für chinesische Geschichte."
      },
      {
        "chinese": "你对什么感兴趣？",
        "pinyin": "Nǐ duì shénme gǎn xìngqù?",
        "german": "Wofür interessierst du dich?"
      }
    ],
    "legacyIds": [
      "对 + Nomen + 感兴趣"
    ]
  },
  {
    "id": "g:以前",
    "pattern": "以前",
    "level": "HSK2",
    "category": "Zeitausdrücke",
    "meaning": "früher / bevor / vor",
    "pinyin": "yǐqián",
    "examples": [
      {
        "chinese": "吃饭以前要洗手。",
        "pinyin": "Chīfàn yǐqián yào xǐ shǒu.",
        "german": "Vor dem Essen muss man sich die Hände waschen."
      },
      {
        "chinese": "以前我住在德国。",
        "pinyin": "Yǐqián wǒ zhù zài Déguó.",
        "german": "Früher habe ich in Deutschland gewohnt."
      }
    ],
    "legacyIds": [
      "以前"
    ]
  },
  {
    "id": "g:以后",
    "pattern": "以后",
    "level": "HSK2",
    "category": "Zeitausdrücke",
    "meaning": "danach / in Zukunft / nachdem",
    "pinyin": "yǐhòu",
    "examples": [
      {
        "chinese": "吃饭以后我们去散步。",
        "pinyin": "Chīfàn yǐhòu wǒmen qù sànbù.",
        "german": "Nach dem Essen gehen wir spazieren."
      },
      {
        "chinese": "以后我要去中国。",
        "pinyin": "Yǐhòu wǒ yào qù Zhōngguó.",
        "german": "Später möchte ich nach China fahren."
      }
    ],
    "legacyIds": [
      "以后"
    ]
  },
  {
    "id": "g:从…起/开始",
    "pattern": "从…起/开始",
    "level": "HSK2",
    "category": "Zeitausdrücke",
    "meaning": "ab / seit (Anfangszeitpunkt)",
    "pinyin": "cóng…qǐ/kāishǐ",
    "examples": [
      {
        "chinese": "从明天开始，我每天跑步。",
        "pinyin": "Cóng míngtiān kāishǐ, wǒ měi tiān pǎobù.",
        "german": "Ab morgen jogge ich jeden Tag."
      },
      {
        "chinese": "从去年起他住在上海。",
        "pinyin": "Cóng qùnián qǐ tā zhù zài Shànghǎi.",
        "german": "Seit letztem Jahr wohnt er in Shanghai."
      }
    ],
    "legacyIds": [
      "从…起/开始"
    ]
  },
  {
    "id": "g:Verb + 过来/过去",
    "pattern": "Verb + 过来/过去",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "her-/hin- (Richtungskomplement zum/weg vom Sprecher)",
    "pinyin": "Verb + guòlái/guòqù",
    "examples": [
      {
        "chinese": "你过来一下。",
        "pinyin": "Nǐ guòlái yíxià.",
        "german": "Komm mal her."
      },
      {
        "chinese": "他走过去了。",
        "pinyin": "Tā zǒu guòqù le.",
        "german": "Er ist hinübergegangen."
      }
    ],
    "legacyIds": [
      "Verb + 过来/过去"
    ]
  },
  {
    "id": "g:Verb + 给 + Person",
    "pattern": "Verb + 给 + Person",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "jemandem etwas (als Resultat) geben",
    "pinyin": "Verb + gěi + Person",
    "examples": [
      {
        "chinese": "我送给你一个礼物。",
        "pinyin": "Wǒ sòng gěi nǐ yí ge lǐwù.",
        "german": "Ich schenke dir ein Geschenk."
      },
      {
        "chinese": "请你把书还给我。",
        "pinyin": "Qǐng nǐ bǎ shū huán gěi wǒ.",
        "german": "Bitte gib mir das Buch zurück."
      }
    ],
    "legacyIds": [
      "Verb + 给 + Person"
    ]
  },
  {
    "id": "g:向 + Richtung/Person",
    "pattern": "向 + Richtung/Person",
    "level": "HSK2",
    "category": "Präpositionen",
    "meaning": "in Richtung / zu (Richtungsangabe)",
    "pinyin": "xiàng + Richtung/Person",
    "examples": [
      {
        "chinese": "请向左走。",
        "pinyin": "Qǐng xiàng zuǒ zǒu.",
        "german": "Bitte gehen Sie nach links."
      },
      {
        "chinese": "他向老师问好。",
        "pinyin": "Tā xiàng lǎoshī wèn hǎo.",
        "german": "Er grüßte den Lehrer."
      }
    ],
    "legacyIds": [
      "向 + Richtung/Person"
    ]
  },
  {
    "id": "g:一直",
    "pattern": "一直",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "immer / die ganze Zeit / geradeaus",
    "pinyin": "yìzhí",
    "examples": [
      {
        "chinese": "我一直在等你。",
        "pinyin": "Wǒ yìzhí zài děng nǐ.",
        "german": "Ich habe die ganze Zeit auf dich gewartet."
      },
      {
        "chinese": "一直往前走。",
        "pinyin": "Yìzhí wǎng qián zǒu.",
        "german": "Gehen Sie immer geradeaus."
      }
    ],
    "legacyIds": [
      "一直"
    ]
  },
  {
    "id": "g:需要 + Verb/Nomen",
    "pattern": "需要 + Verb/Nomen",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "brauchen / benötigen",
    "pinyin": "xūyào + Verb/Nomen",
    "examples": [
      {
        "chinese": "你需要休息。",
        "pinyin": "Nǐ xūyào xiūxi.",
        "german": "Du musst dich ausruhen."
      },
      {
        "chinese": "我需要一本词典。",
        "pinyin": "Wǒ xūyào yì běn cídiǎn.",
        "german": "Ich brauche ein Wörterbuch."
      }
    ],
    "legacyIds": [
      "需要 + Verb/Nomen"
    ]
  },
  {
    "id": "g:不但…还…",
    "pattern": "不但…还…",
    "level": "HSK2",
    "category": "Konjunktionen",
    "meaning": "nicht nur… sondern auch noch…",
    "pinyin": "búdàn…hái…",
    "examples": [
      {
        "chinese": "他不但会唱歌，还会跳舞。",
        "pinyin": "Tā búdàn huì chànggē, hái huì tiàowǔ.",
        "german": "Er kann nicht nur singen, sondern auch tanzen."
      },
      {
        "chinese": "她不但漂亮，还很聪明。",
        "pinyin": "Tā búdàn piàoliang, hái hěn cōngming.",
        "german": "Sie ist nicht nur hübsch, sondern auch klug."
      }
    ],
    "legacyIds": [
      "不但…还…"
    ]
  },
  {
    "id": "g:动词重叠 (Verb-Verdopplung)",
    "pattern": "动词重叠 (Verb-Verdopplung)",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "Verb-Verdopplung: „mal kurz\" / „ein bisschen\"",
    "pinyin": "dòngcí chóngdié",
    "examples": [
      {
        "chinese": "你看看这个。",
        "pinyin": "Nǐ kànkan zhège.",
        "german": "Schau dir das mal an."
      },
      {
        "chinese": "我想想。",
        "pinyin": "Wǒ xiǎngxiang.",
        "german": "Lass mich mal überlegen."
      }
    ],
    "legacyIds": [
      "动词重叠 (Verb-Verdopplung)"
    ]
  },
  {
    "id": "g:一下",
    "pattern": "一下",
    "level": "HSK2",
    "category": "Partikel",
    "meaning": "kurz mal / ein bisschen (Abschwächung)",
    "pinyin": "yíxià",
    "examples": [
      {
        "chinese": "请等一下。",
        "pinyin": "Qǐng děng yíxià.",
        "german": "Bitte warten Sie einen Moment."
      },
      {
        "chinese": "我想试一下。",
        "pinyin": "Wǒ xiǎng shì yíxià.",
        "german": "Ich möchte es mal versuchen."
      }
    ],
    "legacyIds": [
      "一下"
    ]
  },
  {
    "id": "g:常常/经常",
    "pattern": "常常/经常",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "oft / häufig",
    "pinyin": "chángcháng/jīngcháng",
    "examples": [
      {
        "chinese": "我常常去图书馆。",
        "pinyin": "Wǒ chángcháng qù túshūguǎn.",
        "german": "Ich gehe oft in die Bibliothek."
      },
      {
        "chinese": "他经常迟到。",
        "pinyin": "Tā jīngcháng chídào.",
        "german": "Er kommt häufig zu spät."
      }
    ],
    "legacyIds": [
      "常常/经常"
    ]
  },
  {
    "id": "g:不要 + Verb",
    "pattern": "不要 + Verb",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "soll nicht / bitte nicht (Aufforderung)",
    "pinyin": "búyào + Verb",
    "examples": [
      {
        "chinese": "不要迟到。",
        "pinyin": "Búyào chídào.",
        "german": "Komm nicht zu spät."
      },
      {
        "chinese": "上课的时候不要玩手机。",
        "pinyin": "Shàngkè de shíhou búyào wán shǒujī.",
        "german": "Spiel nicht mit dem Handy im Unterricht."
      }
    ],
    "legacyIds": [
      "不要 + Verb"
    ]
  },
  {
    "id": "g:才 + Verb",
    "pattern": "才 + Verb",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "erst / nur dann (spät/unerwartet spät)",
    "pinyin": "cái + Verb",
    "examples": [
      {
        "chinese": "他十点才来。",
        "pinyin": "Tā shí diǎn cái lái.",
        "german": "Er kam erst um zehn Uhr."
      },
      {
        "chinese": "我学了三年才学会。",
        "pinyin": "Wǒ xué le sān nián cái xuéhuì.",
        "german": "Ich habe drei Jahre gelernt, bis ich es konnte."
      }
    ],
    "legacyIds": [
      "才 + Verb"
    ]
  },
  {
    "id": "g:应该 + Verb",
    "pattern": "应该 + Verb",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "sollen / sollte (Empfehlung / Pflicht)",
    "pinyin": "yīnggāi + Verb",
    "examples": [
      {
        "chinese": "你应该多休息。",
        "pinyin": "Nǐ yīnggāi duō xiūxi.",
        "german": "Du solltest dich mehr ausruhen."
      },
      {
        "chinese": "我们应该准时到。",
        "pinyin": "Wǒmen yīnggāi zhǔnshí dào.",
        "german": "Wir sollten pünktlich ankommen."
      }
    ],
    "legacyIds": [
      "应该 + Verb"
    ]
  },
  {
    "id": "g:已经…了",
    "pattern": "已经…了",
    "level": "HSK2",
    "category": "Zeitausdrücke",
    "meaning": "bereits / schon (abgeschlossen)",
    "pinyin": "yǐjīng…le",
    "examples": [
      {
        "chinese": "我已经吃了。",
        "pinyin": "Wǒ yǐjīng chī le.",
        "german": "Ich habe schon gegessen."
      },
      {
        "chinese": "他已经走了。",
        "pinyin": "Tā yǐjīng zǒu le.",
        "german": "Er ist bereits gegangen."
      }
    ],
    "legacyIds": [
      "已经…了"
    ]
  },
  {
    "id": "g:快要…了",
    "pattern": "快要…了",
    "level": "HSK2",
    "category": "Zeitausdrücke",
    "meaning": "bald / gleich (unmittelbar bevorstehend)",
    "pinyin": "kuàiyào…le",
    "examples": [
      {
        "chinese": "快要下雨了。",
        "pinyin": "Kuàiyào xiàyǔ le.",
        "german": "Es wird gleich regnen."
      },
      {
        "chinese": "电影快要开始了。",
        "pinyin": "Diànyǐng kuàiyào kāishǐ le.",
        "german": "Der Film fängt gleich an."
      }
    ],
    "legacyIds": [
      "快要…了"
    ]
  },
  {
    "id": "g:刚/刚才",
    "pattern": "刚/刚才",
    "level": "HSK2",
    "category": "Zeitausdrücke",
    "meaning": "gerade eben / soeben",
    "pinyin": "gāng/gāngcái",
    "examples": [
      {
        "chinese": "他刚走。",
        "pinyin": "Tā gāng zǒu.",
        "german": "Er ist gerade gegangen."
      },
      {
        "chinese": "刚才谁来了？",
        "pinyin": "Gāngcái shéi lái le?",
        "german": "Wer ist gerade eben gekommen?"
      }
    ],
    "legacyIds": [
      "刚/刚才"
    ]
  },
  {
    "id": "g:比…更/还…",
    "pattern": "比…更/还…",
    "level": "HSK2",
    "category": "Vergleiche",
    "meaning": "noch mehr als (verstärkter Vergleich)",
    "pinyin": "bǐ…gèng/hái…",
    "examples": [
      {
        "chinese": "今天比昨天更冷。",
        "pinyin": "Jīntiān bǐ zuótiān gèng lěng.",
        "german": "Heute ist es noch kälter als gestern."
      },
      {
        "chinese": "她比我还努力。",
        "pinyin": "Tā bǐ wǒ hái nǔlì.",
        "german": "Sie ist noch fleißiger als ich."
      }
    ],
    "legacyIds": [
      "比…更/还…"
    ]
  },
  {
    "id": "g:一共",
    "pattern": "一共",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "insgesamt / zusammen",
    "pinyin": "yígòng",
    "examples": [
      {
        "chinese": "一共多少钱？",
        "pinyin": "Yígòng duōshao qián?",
        "german": "Wie viel kostet es insgesamt?"
      },
      {
        "chinese": "我们一共五个人。",
        "pinyin": "Wǒmen yígòng wǔ gè rén.",
        "german": "Wir sind insgesamt fünf Personen."
      }
    ],
    "legacyIds": [
      "一共"
    ]
  },
  {
    "id": "g:最 + Adjektiv",
    "pattern": "最 + Adjektiv",
    "level": "HSK2",
    "category": "Vergleiche",
    "meaning": "am meisten / -ste (Superlativ)",
    "pinyin": "zuì + Adjektiv",
    "examples": [
      {
        "chinese": "他是最高的。",
        "pinyin": "Tā shì zuì gāo de.",
        "german": "Er ist der Größte."
      },
      {
        "chinese": "我最喜欢中国菜。",
        "pinyin": "Wǒ zuì xǐhuan Zhōngguó cài.",
        "german": "Ich mag chinesisches Essen am liebsten."
      }
    ],
    "legacyIds": [
      "最 + Adjektiv"
    ]
  },
  {
    "id": "g:觉得",
    "pattern": "觉得",
    "level": "HSK2",
    "category": "Verben",
    "meaning": "finden / meinen / das Gefühl haben",
    "pinyin": "juéde",
    "examples": [
      {
        "chinese": "我觉得这个很有意思。",
        "pinyin": "Wǒ juéde zhège hěn yǒu yìsi.",
        "german": "Ich finde das sehr interessant."
      },
      {
        "chinese": "你觉得怎么样？",
        "pinyin": "Nǐ juéde zěnmeyàng?",
        "german": "Was meinst du? / Wie findest du es?"
      }
    ],
    "legacyIds": [
      "觉得"
    ]
  },
  {
    "id": "g:还是…吧",
    "pattern": "还是…吧",
    "level": "HSK2",
    "category": "Satzstrukturen",
    "meaning": "lieber doch / besser (Vorschlag nach Abwägung)",
    "pinyin": "háishi…ba",
    "examples": [
      {
        "chinese": "还是坐出租车吧。",
        "pinyin": "Háishi zuò chūzūchē ba.",
        "german": "Nehmen wir doch lieber ein Taxi."
      },
      {
        "chinese": "还是你来决定吧。",
        "pinyin": "Háishi nǐ lái juédìng ba.",
        "german": "Entscheide du das doch lieber."
      }
    ],
    "legacyIds": [
      "还是…吧"
    ]
  },
  {
    "id": "g:要…了",
    "pattern": "要…了",
    "level": "HSK2",
    "category": "Zeitformen",
    "meaning": "gleich / bald (unmittelbare Zukunft)",
    "pinyin": "yào…le",
    "examples": [
      {
        "chinese": "要下雨了。",
        "pinyin": "Yào xià yǔ le.",
        "german": "Es wird gleich regnen."
      },
      {
        "chinese": "火车要开了！",
        "pinyin": "Huǒchē yào kāi le!",
        "german": "Der Zug fährt gleich ab!"
      }
    ],
    "legacyIds": [
      "要…了"
    ]
  },
  {
    "id": "g:多么 + Adj",
    "pattern": "多么 + Adj",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "wie sehr / was für ein (Ausruf)",
    "pinyin": "duōme + Adj",
    "examples": [
      {
        "chinese": "这里多么漂亮啊！",
        "pinyin": "Zhèlǐ duōme piàoliang a!",
        "german": "Wie schön es hier ist!"
      },
      {
        "chinese": "他多么想回家！",
        "pinyin": "Tā duōme xiǎng huí jiā!",
        "german": "Wie sehr er nach Hause will!"
      }
    ],
    "legacyIds": [
      "多么 + Adj"
    ]
  },
  {
    "id": "g:虽然…可是…",
    "pattern": "虽然…可是…",
    "level": "HSK2",
    "category": "Konjunktionen",
    "meaning": "obwohl…aber… (Variante mit 可是)",
    "pinyin": "suīrán…kěshì…",
    "examples": [
      {
        "chinese": "虽然很累，可是很开心。",
        "pinyin": "Suīrán hěn lèi, kěshì hěn kāixīn.",
        "german": "Obwohl ich müde bin, bin ich glücklich."
      },
      {
        "chinese": "虽然他很小，可是很聪明。",
        "pinyin": "Suīrán tā hěn xiǎo, kěshì hěn cōngming.",
        "german": "Obwohl er klein ist, ist er sehr klug."
      }
    ],
    "legacyIds": [
      "虽然…可是…"
    ]
  },
  {
    "id": "g:一点儿也不 + Adj",
    "pattern": "一点儿也不 + Adj",
    "level": "HSK2",
    "category": "Verneinung",
    "meaning": "überhaupt nicht / kein bisschen",
    "pinyin": "yìdiǎnr yě bù + Adj",
    "examples": [
      {
        "chinese": "我一点儿也不累。",
        "pinyin": "Wǒ yìdiǎnr yě bù lèi.",
        "german": "Ich bin überhaupt nicht müde."
      },
      {
        "chinese": "他一点儿也不高兴。",
        "pinyin": "Tā yìdiǎnr yě bù gāoxìng.",
        "german": "Er ist kein bisschen froh."
      }
    ],
    "legacyIds": [
      "一点儿也不 + Adj"
    ]
  },
  {
    "id": "g:又…又… (Verben)",
    "pattern": "又…又… (Verben)",
    "level": "HSK2",
    "category": "Konjunktionen",
    "meaning": "sowohl…als auch… (gleichzeitige Handlungen)",
    "pinyin": "yòu…yòu… (Verben)",
    "examples": [
      {
        "chinese": "她又唱又跳。",
        "pinyin": "Tā yòu chàng yòu tiào.",
        "german": "Sie singt und tanzt zugleich."
      },
      {
        "chinese": "孩子们又哭又笑。",
        "pinyin": "Háizimen yòu kū yòu xiào.",
        "german": "Die Kinder weinen und lachen gleichzeitig."
      }
    ],
    "legacyIds": [
      "又…又… (Verben)"
    ]
  },
  {
    "id": "g:Verb + 得 + 很好",
    "pattern": "Verb + 得 + 很好",
    "level": "HSK2",
    "category": "Komplemente",
    "meaning": "etwas gut machen (Grad-Komplement)",
    "pinyin": "Verb + de + hěn hǎo",
    "examples": [
      {
        "chinese": "她说得很好。",
        "pinyin": "Tā shuō de hěn hǎo.",
        "german": "Sie spricht sehr gut."
      },
      {
        "chinese": "你写得很漂亮。",
        "pinyin": "Nǐ xiě de hěn piàoliang.",
        "german": "Du schreibst sehr schön."
      }
    ],
    "legacyIds": [
      "Verb + 得 + 很好"
    ]
  },
  {
    "id": "g:不是…就是…",
    "pattern": "不是…就是…",
    "level": "HSK2",
    "category": "Konjunktionen",
    "meaning": "wenn nicht…dann… / entweder…oder…",
    "pinyin": "bú shì…jiù shì…",
    "examples": [
      {
        "chinese": "他不是在看书，就是在睡觉。",
        "pinyin": "Tā bú shì zài kàn shū, jiù shì zài shuìjiào.",
        "german": "Er liest entweder oder er schläft."
      },
      {
        "chinese": "周末不是下雨，就是太热。",
        "pinyin": "Zhōumò bú shì xià yǔ, jiù shì tài rè.",
        "german": "Am Wochenende regnet es entweder oder es ist zu heiß."
      }
    ],
    "legacyIds": [
      "不是…就是…"
    ]
  },
  {
    "id": "g:那么 + Adj/Verb",
    "pattern": "那么 + Adj/Verb",
    "level": "HSK2",
    "category": "Adverbien",
    "meaning": "so / dermaßen",
    "pinyin": "nàme + Adj/Verb",
    "examples": [
      {
        "chinese": "别那么紧张。",
        "pinyin": "Bié nàme jǐnzhāng.",
        "german": "Sei nicht so nervös."
      },
      {
        "chinese": "你怎么那么忙？",
        "pinyin": "Nǐ zěnme nàme máng?",
        "german": "Warum bist du so beschäftigt?"
      }
    ],
    "legacyIds": [
      "那么 + Adj/Verb"
    ]
  },
  {
    "id": "g:不…也不…",
    "pattern": "不…也不…",
    "level": "HSK2",
    "category": "Verneinung",
    "meaning": "weder…noch…",
    "pinyin": "bù…yě bù…",
    "examples": [
      {
        "chinese": "他不吃也不喝。",
        "pinyin": "Tā bù chī yě bù hē.",
        "german": "Er isst weder noch trinkt er."
      },
      {
        "chinese": "这里不大也不小。",
        "pinyin": "Zhèlǐ bú dà yě bù xiǎo.",
        "german": "Hier ist es weder groß noch klein."
      }
    ],
    "legacyIds": [
      "不…也不…"
    ]
  },
  {
    "id": "g:…的话",
    "pattern": "…的话",
    "level": "HSK2",
    "category": "Konjunktionen",
    "meaning": "wenn / falls (umgangssprachlich)",
    "pinyin": "…de huà",
    "examples": [
      {
        "chinese": "你有时间的话，来找我。",
        "pinyin": "Nǐ yǒu shíjiān de huà, lái zhǎo wǒ.",
        "german": "Wenn du Zeit hast, komm mich besuchen."
      },
      {
        "chinese": "不想去的话，就别去了。",
        "pinyin": "Bù xiǎng qù de huà, jiù bié qù le.",
        "german": "Wenn du nicht gehen willst, dann geh eben nicht."
      }
    ],
    "legacyIds": [
      "…的话"
    ]
  }
]);
