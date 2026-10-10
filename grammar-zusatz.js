// Zhongwen Explorer grammar, Zusatz: points of the HSK 2025 grammar syllabus (语法大纲, scripts/hsk2025/grammar.json) — here: further points outside the syllabus.
// Built by scripts/grammar/build-grammar.cjs; content by the enrichment campaign.
window.GRAMMAR_DATA = (window.GRAMMAR_DATA || []).concat([
  {
    "id": "g:...的时候",
    "pattern": "...的时候",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "als / wenn / während (Zeitangabe mit einem Teilsatz)",
    "formation": "Verb(gruppe)/Teilsatz + 的时候，Hauptsatz",
    "explanation": "Ein Verb, eine Verbgruppe, ein Adjektiv oder ein ganzer kleiner Satz + 的时候 (de shíhou) bildet eine Zeitangabe: „als …“, „wenn …“, „während …“, „beim …“. Wie andere Zeitangaben steht sie vor dem Prädikat des Hauptsatzes – am Satzanfang oder nach dem Subjekt: 我小的时候…… / 我们吃饭的时候……. Ob Vergangenheit, Gegenwart oder Zukunft gemeint ist, ergibt sich aus dem Zusammenhang; 的时候 selbst bleibt gleich. Häufiger Fehler: die Zeitangabe wie im Deutschen („…, als ich klein war“) ans Ende stellen – normal ist 我小的时候，住在北京, nicht 我住在北京，我小的时候. Das 的 bleibt in der Regel stehen; nur in festen Wörtern wie 小时候 (xiǎoshíhou) oder 有时候 (yǒushíhou) fehlt es.",
    "notes": "Schriftsprachlich kürzer: ……时 (上课时). Verstärkt mit 当 (dāng): 当……的时候. „Bevor“ und „nachdem“ drücken 以前 (yǐqián) und 以后 (yǐhòu) aus (eigener Punkt).",
    "examples": [
      {
        "chinese": "吃饭的时候，不要说话。",
        "pinyin": "Chī fàn de shíhou, bú yào shuōhuà.",
        "german": "Beim Essen soll man nicht reden."
      },
      {
        "chinese": "我小的时候，我们家住在北京。",
        "pinyin": "Wǒ xiǎo de shíhou, wǒmen jiā zhù zài Běijīng.",
        "german": "Als ich klein war, wohnte meine Familie in Peking."
      },
      {
        "chinese": "你到上海的时候，给我打个电话吧。",
        "pinyin": "Nǐ dào Shànghǎi de shíhou, gěi wǒ dǎ ge diànhuà ba.",
        "german": "Ruf mich an, wenn du in Schanghai ankommst."
      }
    ],
    "legacyIds": [
      "...的时候"
    ],
    "quiz": {
      "example": 0,
      "answer": "的时候",
      "distractors": [
        {
          "text": "以后",
          "reason": "以后 heißt „nach“: „Nach dem Essen nicht reden“ – gemeint ist aber „beim Essen“."
        },
        {
          "text": "以前",
          "reason": "以前 heißt „vor“ und verlegt das Verbot vor das Essen; gemeint ist „während“."
        },
        {
          "text": "当",
          "reason": "当 steht vor dem Teilsatz und braucht selbst noch 的时候 (当吃饭的时候); allein am Ende geht es nicht."
        }
      ],
      "accepted": [
        "时"
      ]
    },
    "related": [
      "g:（在）……以前/以后/前/后",
      "g:蒙后省略"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:多少钱",
    "pattern": "多少钱",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "Wie viel kostet …? (Frage nach dem Preis)",
    "pinyin": "duōshao qián",
    "examples": [
      {
        "chinese": "这个多少钱？",
        "pinyin": "Zhège duōshao qián?",
        "german": "Was kostet das?"
      },
      {
        "chinese": "苹果一斤多少钱？",
        "pinyin": "Píngguǒ yì jīn duōshao qián?",
        "german": "Was kostet ein Pfund Äpfel?"
      },
      {
        "chinese": "这些东西一共多少钱？",
        "pinyin": "Zhèxiē dōngxi yígòng duōshao qián?",
        "german": "Was macht das alles zusammen?"
      }
    ],
    "legacyIds": [
      "多少钱"
    ],
    "formation": "Ding (+ Menge) + 多少钱？",
    "notes": "多少 (duōshao) wird umgangssprachlich mit neutralem Ton gesprochen. 几 (jǐ) als Fragewort ist ein eigener Punkt.",
    "explanation": "多少钱 (duōshao qián) „wie viel Geld“ ist die Standardfrage nach dem Preis. Das Ding steht vorn, 多少钱 folgt direkt als Prädikat – ein Verb wie 是 ist nicht nötig: 这个多少钱？ „Was kostet das?“ Eine Mengen- oder Gewichtsangabe steht davor: 苹果一斤多少钱？ „Was kostet ein Pfund Äpfel?“ Für den Gesamtbetrag sagt man 一共 (yígòng) 多少钱？ Geantwortet wird mit dem Betrag: 十五块（钱）. 多少 (duōshao) fragt nach einer Menge ohne Obergrenze und kann direkt vor einem Nomen stehen; 几 (jǐ) erwartet eine kleine Zahl und braucht ein Zählwort, deshalb nur 几块钱 „wie viele Yuan“, nicht 几钱. Auf dem Markt hört man auch 怎么卖 (zěnme mài)？ „Wie wird das verkauft?“.",
    "quiz": {
      "example": 0,
      "answer": "多少",
      "distractors": [
        {
          "text": "几",
          "reason": "几 braucht ein Zählwort (几块钱); direkt vor 钱 steht nur 多少."
        },
        {
          "text": "什么",
          "reason": "什么钱 hieße „was für Geld“ – gefragt ist aber nach dem Betrag."
        },
        {
          "text": "怎么",
          "reason": "怎么 fragt nach dem Wie und steht vor Verben (怎么卖), nicht vor 钱."
        }
      ]
    },
    "related": [
      "g:几",
      "g:疑问代词@HSK1"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:到 + Ort/Zeit",
    "pattern": "到 + Ort/Zeit",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "bis / nach / ankommen (Endpunkt in Raum oder Zeit)",
    "pinyin": "dào + Ort/Zeit",
    "examples": [
      {
        "chinese": "我到北京了，一切都好。",
        "pinyin": "Wǒ dào Běijīng le, yíqiè dōu hǎo.",
        "german": "Ich bin in Peking angekommen, alles ist gut."
      },
      {
        "chinese": "我们从早上九点工作到下午五点。",
        "pinyin": "Wǒmen cóng zǎoshang jiǔ diǎn gōngzuò dào xiàwǔ wǔ diǎn.",
        "german": "Wir arbeiten von neun Uhr morgens bis fünf Uhr nachmittags."
      },
      {
        "chinese": "从这儿到火车站要走二十分钟。",
        "pinyin": "Cóng zhèr dào huǒchēzhàn yào zǒu èrshí fēnzhōng.",
        "german": "Von hier bis zum Bahnhof sind es zwanzig Minuten zu Fuß."
      },
      {
        "chinese": "明天你到我家来吃饭吧。",
        "pinyin": "Míngtiān nǐ dào wǒ jiā lái chī fàn ba.",
        "german": "Komm doch morgen zum Essen zu mir."
      }
    ],
    "legacyIds": [
      "到 + Ort/Zeit"
    ],
    "formation": "到 + Ort (+ 来/去) · 从 + A + 到 + B · Verb + 到 + Ort/Zeit",
    "notes": "到 nach Verben als Ergebniszusatz („erreichen, bekommen“: 买到 (mǎidào), 找到 (zhǎodào)) ist ein eigener Punkt (HSK 3).",
    "explanation": "到 (dào) bezeichnet einen Endpunkt. Als Vollverb heißt es „ankommen, erreichen“: 我到北京了. Vor 来 oder 去 gibt 到 + Ort das Ziel an: 到我家来 „zu mir kommen“. Mit 从 (cóng) bildet es „von … bis …“ für Orte und Zeiten: 从这儿到火车站, 从九点到五点. Nach einem Verb zeigt 到 an, bis wohin oder bis wann die Handlung reicht: 走到学校 „bis zur Schule gehen“, 工作到晚上十点 „bis zehn Uhr abends arbeiten“. Abgrenzung: 在 (zài) nennt den Ort, an dem man ist oder etwas geschieht, 到 den Ort, den man erreicht; 往 (wǎng) gibt nur die Richtung an. 离 (lí) misst den Abstand zwischen zwei Punkten (这儿离火车站很近) und steht nicht mit 从.",
    "quiz": {
      "example": 2,
      "answer": "到",
      "distractors": [
        {
          "text": "在",
          "reason": "在 nennt den Ort, an dem man sich befindet, keinen Endpunkt „bis zum Bahnhof“."
        },
        {
          "text": "往",
          "reason": "往 gibt nur eine Richtung („in Richtung“) an und bildet mit 从 kein „von … bis …“."
        },
        {
          "text": "离",
          "reason": "离 misst einen Abstand (这儿离火车站……) und steht nicht zusammen mit 从."
        }
      ]
    },
    "related": [
      "g:从¹",
      "g:在（引出时间、处所）",
      "g:动词+到/住/走/上"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:多/少 + Verb",
    "pattern": "多/少 + Verb",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "mehr / weniger tun (Rat, Aufforderung)",
    "pinyin": "duō/shǎo + Verb",
    "examples": [
      {
        "chinese": "你感冒了，要多喝水，多休息。",
        "pinyin": "Nǐ gǎnmào le, yào duō hē shuǐ, duō xiūxi.",
        "german": "Du bist erkältet – trink viel und ruh dich gut aus."
      },
      {
        "chinese": "少吃点儿糖，对牙不好。",
        "pinyin": "Shǎo chī diǎnr táng, duì yá bù hǎo.",
        "german": "Iss weniger Süßes, das ist schlecht für die Zähne."
      },
      {
        "chinese": "外面很冷，多穿一件衣服吧。",
        "pinyin": "Wàimiàn hěn lěng, duō chuān yí jiàn yīfu ba.",
        "german": "Draußen ist es kalt, zieh lieber noch etwas mehr an."
      },
      {
        "chinese": "你难得来一次，多住几天吧！",
        "pinyin": "Nǐ nándé lái yí cì, duō zhù jǐ tiān ba!",
        "german": "Du kommst so selten – bleib doch noch ein paar Tage!"
      }
    ],
    "legacyIds": [
      "多/少 + Verb",
      "g:多 + Verb",
      "多 + Verb"
    ],
    "formation": "多/少 + Verb (+ Menge) (+ Objekt)",
    "notes": "多 und 少 vor Nomen (很多人, 很少人) sowie 多 in Fragen nach dem Grad (多大 (duō dà)？) sind andere Verwendungen.",
    "explanation": "Direkt vor einem Verb bedeutet 多 (duō) „mehr, viel“ und 少 (shǎo) „weniger, wenig“: 多喝水 „trink viel Wasser“, 少吃糖 „iss weniger Süßes“. So formuliert man vor allem Ratschläge, Bitten und gute Wünsche, oft mit 要, 应该 (yīnggāi), 请 oder 吧. Eine Mengenangabe kann nach dem Verb folgen: 多穿一件衣服 „zieh noch eine Schicht mehr an“, 多住几天 „bleib noch ein paar Tage“, 少说两句 „halt dich lieber zurück“. Wichtig ist die Stellung: 多/少 stehen vor dem Verb (多喝水), nicht danach – 喝多了 bedeutet „zu viel getrunken haben, betrunken sein“. 很少 (hěn shǎo) + Verb heißt dagegen „selten“ (他很少喝酒) und ist kein Ratschlag.",
    "quiz": {
      "example": 1,
      "answer": "少",
      "distractors": [
        {
          "text": "多",
          "reason": "多 hieße „iss mehr Süßes“ – das widerspricht „schlecht für die Zähne“."
        },
        {
          "text": "很少",
          "reason": "很少 heißt „selten“ und beschreibt eine Gewohnheit; einen Rat mit 点儿 kann es nicht ausdrücken."
        },
        {
          "text": "别",
          "reason": "别 verbietet ganz („iss keinen Zucker“) und passt nicht zu 点儿 „ein bisschen weniger“."
        }
      ]
    },
    "related": [
      "g:数词+多+量词"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不太 + Adjektiv",
    "pattern": "不太 + Adjektiv",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "nicht besonders, nicht so (abgeschwächte Verneinung)",
    "pinyin": "bú tài + Adjektiv",
    "examples": [
      {
        "chinese": "这家饭馆的菜不太好吃。",
        "pinyin": "Zhè jiā fànguǎn de cài bú tài hǎochī.",
        "german": "Das Essen in diesem Restaurant ist nicht besonders gut."
      },
      {
        "chinese": "我不太喜欢喝咖啡。",
        "pinyin": "Wǒ bú tài xǐhuan hē kāfēi.",
        "german": "Ich trinke nicht so gern Kaffee."
      },
      {
        "chinese": "他说得太快，我不太明白。",
        "pinyin": "Tā shuō de tài kuài, wǒ bú tài míngbai.",
        "german": "Er spricht zu schnell, ich verstehe nicht ganz."
      },
      {
        "chinese": "今天天气不太冷，我们出去走走吧。",
        "pinyin": "Jīntiān tiānqì bú tài lěng, wǒmen chūqù zǒuzou ba.",
        "german": "Heute ist es nicht so kalt, lass uns ein bisschen rausgehen."
      }
    ],
    "legacyIds": [
      "不太 + Adjektiv"
    ],
    "formation": "不太 + Adjektiv / Verb des Fühlens oder Könnens (喜欢、想、会、明白 …)",
    "notes": "Gesprochen gleichbedeutend: 不怎么 (bù zěnme) + Adjektiv/Verb. 不很 (bù hěn) ist möglich, aber seltener und eher schriftlich. 太 (zu, so …!) ist ein eigener Punkt.",
    "explanation": "不太 (bú tài) verneint abgeschwächt: 不太 + 好 „nicht besonders gut“, 不太 + 喜欢 (xǐhuan) „mag nicht so sehr“. Es klingt höflicher und vorsichtiger als bloßes 不 (bù) und wird deshalb gern benutzt, um Kritik oder Ablehnung freundlich zu formulieren: 这个颜色不太适合你 „Die Farbe steht dir nicht so richtig“. Es steht vor Adjektiven und vor Verben des Fühlens, Wollens, Könnens und Verstehens wie 想, 会, 明白 (míngbai) oder 清楚 (qīngchu). Die Reihenfolge ist entscheidend: 不太 „nicht sehr“ ist etwas ganz anderes als 太不 „ganz und gar nicht, viel zu wenig“ (太不像话了 „unerhört!“). Anders als beim begeisterten 太……了 steht nach 不太 normalerweise kein 了. 不 wird vor dem vierten Ton von 太 im zweiten Ton gesprochen: bú tài.",
    "quiz": {
      "example": 0,
      "answer": "不太",
      "distractors": [
        {
          "text": "太不",
          "reason": "太不 verstärkt die Verneinung („furchtbar schlecht“) statt sie abzuschwächen."
        },
        {
          "text": "很不",
          "reason": "很不好吃 hieße „schmeckt sehr schlecht“ – stärker als „nicht besonders gut“."
        },
        {
          "text": "没太",
          "reason": "没 verneint Geschehenes, nicht eine dauernde Eigenschaft wie den Geschmack; hier steht 不."
        }
      ],
      "accepted": [
        "不怎么"
      ]
    },
    "related": [
      "g:太",
      "g:不怎么",
      "g:不怎么样"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:再说",
    "pattern": "再说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "außerdem, zudem (weiteres Argument im Gespräch)",
    "formation": "Aussage/Grund 1，再说 + (Subjekt +) weiterer Grund",
    "explanation": "再说 (zàishuō) am Anfang des zweiten Teilsatzes fügt ein weiteres Argument hinzu, das oft den Ausschlag gibt: „außerdem, zudem, und überhaupt“. Typisch ist es beim Begründen, Ablehnen und Überreden; im Teil danach steht häufig 也 oder 又. 再说 steht vor dem Subjekt des zweiten Teils (再说我也没时间). Der Ton ist umgangssprachlich; schriftlich wählt man eher 况且 (kuàngqiě), 此外 (cǐwài) oder 而且 (érqiě). Anders als 而且 verbindet 再说 keine einzelnen Wörter oder Satzglieder (聪明而且努力, nicht 聪明再说努力), sondern nur ganze Aussagen und Argumente. Es kann auch nach einem Punkt einen neuen Satz beginnen.",
    "notes": "Als Verbgruppe heißt 再说 (zài shuō) „später besprechen, dann sehen wir weiter“: 这件事以后再说吧 – eine andere Bedeutung. Schriftsprachlich entspricht 况且 (kuàngqiě), ein eigener Punkt der Stufe HSK 7–9.",
    "examples": [
      {
        "chinese": "我不想去，再说我也没时间。",
        "pinyin": "Wǒ bù xiǎng qù, zàishuō wǒ yě méi shíjiān.",
        "german": "Ich will nicht hin, und außerdem habe ich auch keine Zeit."
      },
      {
        "chinese": "这件衣服太贵了，再说质量也不太好。",
        "pinyin": "Zhè jiàn yīfu tài guì le, zàishuō zhìliàng yě bú tài hǎo.",
        "german": "Das Kleidungsstück ist zu teuer, und die Qualität ist auch nicht so toll."
      },
      {
        "chinese": "别等他了，天快黑了，再说他可能根本不来。",
        "pinyin": "Bié děng tā le, tiān kuài hēi le, zàishuō tā kěnéng gēnběn bù lái.",
        "german": "Warten wir nicht länger – es wird bald dunkel, und überhaupt kommt er vielleicht gar nicht."
      }
    ],
    "legacyIds": [
      "再说"
    ],
    "related": [
      "g:另外",
      "g:况且",
      "g:此外"
    ],
    "quiz": {
      "example": 0,
      "answer": "再说",
      "distractors": [
        {
          "text": "所以",
          "reason": "所以 macht den Zeitmangel zur Folge des Nicht-Wollens; gemeint ist ein zusätzlicher Grund."
        },
        {
          "text": "但是",
          "reason": "但是 leitet einen Gegensatz ein; beide Teile sprechen aber gegen das Hingehen."
        },
        {
          "text": "然后",
          "reason": "然后 ordnet zeitlich („danach“) und fügt kein weiteres Argument hinzu."
        }
      ],
      "accepted": [
        "而且",
        "况且"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:原来",
    "pattern": "原来",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "ach so; wie sich herausstellt (plötzliche Erkenntnis)",
    "pinyin": "yuánlái",
    "examples": [
      {
        "chinese": "原来你是中国人！",
        "pinyin": "Yuánlái nǐ shì Zhōngguó rén!",
        "german": "Ach so, du kommst aus China!"
      },
      {
        "chinese": "我以为他是日本人，原来他是韩国人。",
        "pinyin": "Wǒ yǐwéi tā shì Rìběn rén, yuánlái tā shì Hánguó rén.",
        "german": "Ich dachte, er sei Japaner, dabei ist er Koreaner."
      },
      {
        "chinese": "难怪他今天这么高兴，原来他考上大学了。",
        "pinyin": "Nánguài tā jīntiān zhème gāoxìng, yuánlái tā kǎoshàng dàxué le.",
        "german": "Kein Wunder, dass er heute so fröhlich ist – er hat die Aufnahmeprüfung für die Uni bestanden."
      }
    ],
    "legacyIds": [
      "原来"
    ],
    "formation": "原来 + (Subjekt +) wahrer Sachverhalt (oft nach 我以为……)",
    "notes": "原来 (yuánlái) hat auch die Bedeutung „ursprünglich, früher“ (我原来住在上海; 原来的计划) – hier überschneidet es sich mit 本来 (běnlái).",
    "explanation": "原来 (yuánlái) zeigt, dass man den wahren Sachverhalt gerade erst erkennt: „ach so“, „ach, deshalb“, „wie sich herausstellt“. Es steht am Satzanfang oder nach dem Subjekt. Häufig folgt es auf eine falsche Annahme mit 以为 (yǐwéi): 我以为……，原来…… „Ich dachte …, dabei …“. Mit 是 und 啊 drückt es überraschtes Erkennen aus: 原来是你啊！ Oft erklärt der 原来-Satz etwas zuvor Beobachtetes und steht dann zusammen mit 难怪 (nánguài) „kein Wunder“: 难怪他这么高兴，原来…… Abgrenzung: 本来 (běnlái) heißt nur „ursprünglich, eigentlich“ und drückt keine Entdeckung aus; 果然 (guǒrán) „wie erwartet“ bestätigt eine Vermutung, statt sie zu widerlegen.",
    "quiz": {
      "example": 0,
      "answer": "原来",
      "distractors": [
        {
          "text": "本来",
          "reason": "本来 heißt „ursprünglich“ und drückt keine plötzliche Erkenntnis („ach so“) aus."
        },
        {
          "text": "果然",
          "reason": "果然 „wie erwartet“ bestätigt eine Vermutung; „ach so“ zeigt dagegen Überraschung."
        },
        {
          "text": "难怪",
          "reason": "难怪 „kein Wunder“ steht vor dem, was erklärt wird, nicht vor der neuen Erkenntnis selbst."
        }
      ]
    },
    "related": [
      "g:难怪"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:看样子",
    "pattern": "看样子",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "anscheinend, so wie es aussieht (Vermutung aus sichtbaren Anzeichen)",
    "pinyin": "kàn yàngzi",
    "examples": [
      {
        "chinese": "看样子要下雨了，带把伞吧。",
        "pinyin": "Kàn yàngzi yào xià yǔ le, dài bǎ sǎn ba.",
        "german": "Sieht nach Regen aus – nimm lieber einen Schirm mit."
      },
      {
        "chinese": "他看样子不太高兴，你先别问了。",
        "pinyin": "Tā kàn yàngzi bú tài gāoxìng, nǐ xiān bié wèn le.",
        "german": "Er scheint nicht besonders gut gelaunt zu sein, frag ihn jetzt lieber nicht."
      },
      {
        "chinese": "门口排了这么多人，看样子这家饭馆很受欢迎。",
        "pinyin": "Ménkǒu pái le zhème duō rén, kàn yàngzi zhè jiā fànguǎn hěn shòu huānyíng.",
        "german": "So viele Leute stehen vor der Tür Schlange – das Restaurant ist offenbar sehr beliebt."
      }
    ],
    "legacyIds": [
      "看样子"
    ],
    "formation": "看样子 + (Subjekt) + Vermutung / Subjekt + 看样子 + Vermutung",
    "notes": "看来 (kànlái), HSK 3, ist ähnlich, kann sich aber auch auf Gehörtes oder Überlegungen stützen; 看样子 (kàn yàngzi) beruht auf dem, was man sieht. 看起来 (kàn qǐlai) beschreibt eher den äußeren Eindruck einer Sache („sieht … aus“).",
    "explanation": "看样子 (kàn yàngzi) heißt wörtlich „nach dem Aussehen zu urteilen“: Der Sprecher zieht aus dem, was er gerade sieht – Wetter, Gesichtsausdruck, eine Situation –, eine Vermutung. Es steht meist am Satzanfang, oft mit Komma, oder direkt nach dem Subjekt. Danach folgen häufig 要……了 (etwas steht bevor), 会 oder 不太. Zwischen 看 und 样子 (yàngzi) kann eine Person stehen: 看他的样子 „so wie er aussieht“. Typisch für die gesprochene Sprache. Es ist eine Vermutung, keine Gewissheit; für eine sichere Aussage passt es nicht.",
    "quiz": {
      "example": 0,
      "answer": "看样子",
      "distractors": [
        {
          "text": "看法",
          "reason": "看法 ist ein Nomen („Meinung“) und kann keine Vermutung über das Wetter einleiten."
        },
        {
          "text": "看见",
          "reason": "看见 („sehen“) braucht ein gesehenes Objekt; ein künftiger Regen ist nichts, was man schon sieht."
        },
        {
          "text": "看不起",
          "reason": "看不起 heißt „verachten“ und verlangt eine Person als Objekt, keinen Satz."
        }
      ],
      "accepted": [
        "看来",
        "看起来"
      ]
    },
    "related": [
      "g:看来",
      "g:看起来"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:难免",
    "pattern": "难免",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "kaum zu vermeiden, ganz normal (dass etwas Unerwünschtes passiert)",
    "pinyin": "nánmiǎn",
    "formation": "Umstand，难免 + (会/要/有点) + Verb/Adjektiv; 这是难免的",
    "explanation": "难免 (nánmiǎn) sagt, dass unter den gegebenen Umständen etwas – meist Unerwünschtes wie Fehler, Heimweh oder Nervosität – kaum zu vermeiden ist. Oft nennt der erste Teilsatz den Umstand (刚……, 第一次 (dì yī cì)……, 一个人 (yí ge rén)……), im zweiten folgt 难免 + 会/要/有点 (yǒudiǎn) + Verb oder Adjektiv. Der Ton ist verständnisvoll und oft entschuldigend: „das ist ganz normal“. 难免 kann auch als Prädikat stehen: 这是难免的 „das lässt sich nicht vermeiden“. Mündlich und schriftlich gebräuchlich. Besonderheit: 难免不出错 kann dasselbe bedeuten wie 难免出错 – Lernende bleiben besser bei der Form ohne 不.",
    "notes": "不免 (bùmiǎn), HSK 7–9, steht nur als Adverb vor dem Verb und beschreibt meist eine tatsächlich eingetretene Reaktion („unwillkürlich“); 难免 (nánmiǎn) betont die allgemeine Unvermeidbarkeit und geht auch als 是难免的. 未免 (wèimiǎn) kritisiert: „doch etwas zu …“. 以免 (yǐmiǎn) heißt „damit nicht“.",
    "examples": [
      {
        "chinese": "刚到一个新地方，难免会不习惯。",
        "pinyin": "Gāng dào yí ge xīn dìfang, nánmiǎn huì bù xíguàn.",
        "german": "Wenn man gerade an einem neuen Ort angekommen ist, fühlt man sich natürlich noch fremd."
      },
      {
        "chinese": "第一次上台演讲，难免有点紧张。",
        "pinyin": "Dì yī cì shàng tái yǎnjiǎng, nánmiǎn yǒudiǎn jǐnzhāng.",
        "german": "Beim ersten Vortrag auf der Bühne ist man zwangsläufig etwas nervös."
      },
      {
        "chinese": "一个人在国外生活，难免会想家。",
        "pinyin": "Yí ge rén zài guówài shēnghuó, nánmiǎn huì xiǎng jiā.",
        "german": "Wer allein im Ausland lebt, bekommt unweigerlich Heimweh."
      },
      {
        "chinese": "人都会犯错，这是难免的。",
        "pinyin": "Rén dōu huì fàn cuò, zhè shì nánmiǎn de.",
        "german": "Jeder Mensch macht Fehler, das lässt sich nicht vermeiden."
      }
    ],
    "legacyIds": [
      "难免"
    ],
    "related": [
      "g:不免",
      "g:未免",
      "g:以免"
    ],
    "quiz": {
      "example": 0,
      "answer": "难免",
      "distractors": [
        {
          "text": "未免",
          "reason": "未免 kritisiert („doch etwas zu …“) und steht vor 太/有点 + Adjektiv; hier wird nichts kritisiert, sondern Verständnis gezeigt."
        },
        {
          "text": "以免",
          "reason": "以免 („damit nicht“) nennt eine Folge, die eine Maßnahme verhindern soll; im ersten Teil steht aber keine Maßnahme."
        },
        {
          "text": "尽管",
          "reason": "尽管 („obwohl“) leitet ein Zugeständnis ein und verlangt einen Gegensatz mit 但是/可是; als zweiter Teilsatz passt es nicht."
        }
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:之一",
    "pattern": "之一",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "einer/eines von (mehreren), meist nach einem Superlativ",
    "pinyin": "zhī yī",
    "examples": [
      {
        "chinese": "他是我最好的朋友之一。",
        "pinyin": "Tā shì wǒ zuì hǎo de péngyou zhī yī.",
        "german": "Er ist einer meiner besten Freunde."
      },
      {
        "chinese": "长城是中国最有名的地方之一。",
        "pinyin": "Chángchéng shì Zhōngguó zuì yǒumíng de dìfang zhī yī.",
        "german": "Die Große Mauer ist einer der bekanntesten Orte Chinas."
      },
      {
        "chinese": "交通是这个城市面临的主要问题之一。",
        "pinyin": "Jiāotōng shì zhège chéngshì miànlín de zhǔyào wèntí zhī yī.",
        "german": "Der Verkehr ist eines der Hauptprobleme, mit denen diese Stadt zu kämpfen hat."
      }
    ],
    "legacyIds": [
      "之一"
    ],
    "formation": "(最 + Adjektiv +) 的 + Nomen + 之一",
    "explanation": "之一 (zhī yī) bedeutet „einer von …“ und steht am Ende einer Nominalgruppe: 最好的朋友之一 „einer der besten Freunde“. 之 ist ein Rest der Schriftsprache und verbindet wie 的, 一 ist „eins“. Davor steht eine Gruppe aus mehreren Dingen oder Personen, sehr oft mit 最 (Superlativ) oder mit 主要 (zhǔyào) „Haupt-“. Die ganze Gruppe ist meist Objekt von 是 oder Subjekt des Satzes. Typische Fehler: 之一 vor das Nomen stellen (*之一最好的朋友) oder ein Zählwort dazusetzen (*一个之一). Häufig in Nachrichten und Sachtexten, aber auch im Alltag. Nicht verwechseln mit Bruchzahlen wie 三分之一 (sān fēn zhī yī) „ein Drittel“.",
    "quiz": {
      "example": 0,
      "answer": "之一",
      "distractors": [
        {
          "text": "一个",
          "reason": "Zahl und Zählwort stehen vor dem Nomen (一个朋友), nicht hinter ihm."
        },
        {
          "text": "之间",
          "reason": "之间 bedeutet „zwischen“ und bezeichnet eine Beziehung oder einen Zwischenraum, kein Mitglied einer Gruppe."
        },
        {
          "text": "之中",
          "reason": "之中 („unter“) bräuchte danach noch 的一个; allein am Satzende fehlt das „einer“."
        }
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:果不其然",
    "pattern": "果不其然",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "und tatsächlich – genau wie vermutet",
    "pinyin": "guǒ bù qí rán",
    "examples": [
      {
        "chinese": "我猜他今天会迟到，果不其然，他九点半才到。",
        "pinyin": "Wǒ cāi tā jīntiān huì chídào, guǒbùqírán, tā jiǔ diǎn bàn cái dào.",
        "german": "Ich hatte schon vermutet, dass er heute zu spät kommt – und tatsächlich tauchte er erst um halb zehn auf."
      },
      {
        "chinese": "天气预报说下午有雨，果不其然，三点就下起来了。",
        "pinyin": "Tiānqì yùbào shuō xiàwǔ yǒu yǔ, guǒbùqírán, sān diǎn jiù xià qǐlai le.",
        "german": "Der Wetterbericht hatte für den Nachmittag Regen angesagt, und prompt fing es um drei an."
      },
      {
        "chinese": "大家都说这部电影好看，我去看了，果不其然，非常精彩。",
        "pinyin": "Dàjiā dōu shuō zhè bù diànyǐng hǎokàn, wǒ qù kàn le, guǒbùqírán, fēicháng jīngcǎi.",
        "german": "Alle hatten gesagt, der Film sei gut – ich habe ihn mir angesehen, und er war wirklich großartig."
      }
    ],
    "legacyIds": [
      "果不其然"
    ],
    "formation": "Vermutung/Vorhersage，果不其然，eingetretenes Ergebnis",
    "notes": "果然 (guǒrán) steht meist direkt vor dem Verb (他果然来了); 果不其然 (guǒbùqírán) steht eher allein als Einschub. Gegenteil: 竟然 (jìngrán)/居然 (jūrán) „wider Erwarten, ausgerechnet“.",
    "explanation": "果不其然 (guǒbùqírán) ist eine feste Vierer-Wendung: „es war wirklich nicht anders als erwartet“. Sie bestätigt, dass etwas, das man vermutet oder vorhergesagt hat, tatsächlich eingetreten ist. Meist steht sie als Einschub zu Beginn des zweiten Teils, nach der Vermutung und mit Komma; das Ergebnis ist eine bereits eingetretene Tatsache, oft mit 了 oder 才/就. Die Wendung klingt lebhaft und erzählend, mündlich wie schriftlich, und etwas nachdrücklicher als das einfache Adverb 果然 (guǒrán). Sie drückt keine Überraschung aus – für „wider Erwarten“ steht 竟然 (jìngrán).",
    "quiz": {
      "example": 0,
      "answer": "果不其然",
      "distractors": [
        {
          "text": "竟然",
          "reason": "竟然 drückt Überraschung aus („wider Erwarten“); hier trifft aber genau die Vermutung ein."
        },
        {
          "text": "不然",
          "reason": "不然 heißt „sonst“ und leitet eine Alternative ein, keine Bestätigung."
        },
        {
          "text": "虽然",
          "reason": "虽然 („obwohl“) verlangt einen Gegensatz mit 但是 und kann nicht allein als Einschub stehen."
        }
      ],
      "accepted": [
        "果然"
      ]
    },
    "related": [
      "g:果然",
      "g:竟然"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:说白了",
    "pattern": "说白了",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "im Klartext, unverblümt gesagt",
    "pinyin": "shuō bái le",
    "examples": [
      {
        "chinese": "说白了，他就是不想帮忙。",
        "pinyin": "Shuō bái le, tā jiùshì bù xiǎng bāngmáng.",
        "german": "Im Klartext: Er will einfach nicht helfen."
      },
      {
        "chinese": "说白了，这不过是钱的问题。",
        "pinyin": "Shuō bái le, zhè búguò shì qián de wèntí.",
        "german": "Unterm Strich geht es nur ums Geld."
      },
      {
        "chinese": "公司说要调整结构，说白了，就是要裁员。",
        "pinyin": "Gōngsī shuō yào tiáozhěng jiégòu, shuō bái le, jiùshì yào cáiyuán.",
        "german": "Die Firma spricht von einer Umstrukturierung – im Klartext heißt das: Sie will Stellen streichen."
      }
    ],
    "legacyIds": [
      "说白了"
    ],
    "formation": "说白了，+ zugespitzte Aussage (oft mit 就是/不过是)",
    "notes": "说实话 (shuō shíhuà) „ehrlich gesagt“ betont die Ehrlichkeit des Sprechers, 说白了 (shuō bái le) die Vereinfachung oder Entlarvung. 总之 (zǒngzhī) fasst neutral zusammen. Nicht verwechseln mit 白说了 „umsonst gesagt“.",
    "explanation": "说白了 (shuō bái le) heißt wörtlich „weiß, also klar gesagt“: Der Sprecher bringt etwas, das zuvor umständlich oder beschönigend ausgedrückt wurde, in einfachen, oft unbequemen Worten auf den Punkt. Es steht am Satzanfang oder vor dem Kern der Aussage, meist mit Komma; danach folgen oft 就是 (jiùshì) „ist einfach“ oder 不过是 (búguò shì) „ist nur“. Rein gesprochene, saloppe Sprache; in formellen Texten sagt man eher 简单地说 (jiǎndān de shuō). Variante: 说得白一点 „etwas deutlicher gesagt“.",
    "quiz": {
      "example": 0,
      "answer": "说白了",
      "distractors": [
        {
          "text": "白说了",
          "reason": "白说了 heißt „umsonst gesagt“ (das Reden hat nichts gebracht) und leitet keine Erklärung ein."
        },
        {
          "text": "说明了",
          "reason": "说明了 („hat erklärt, zeigt“) ist ein Verb mit Objekt, kein Einschub am Satzanfang."
        },
        {
          "text": "说不定",
          "reason": "说不定 („vielleicht“) drückt eine Vermutung aus und passt nicht zum entschiedenen „im Klartext … einfach“."
        }
      ]
    },
    "related": [
      "g:总之"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:以免",
    "pattern": "以免",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "damit nicht, um … zu vermeiden (formell)",
    "formation": "Handlung/Vorsichtsmaßnahme，以免 + unerwünschte Folge",
    "explanation": "以免 (yǐmiǎn) leitet den zweiten Teilsatz ein und nennt eine Folge, die man durch die zuvor genannte Handlung verhindern will: „…, damit nicht …“, „um … zu vermeiden“. Der erste Teil ist oft eine Aufforderung oder Empfehlung (请……, 应该 (yīnggāi)……, 要……). Das Subjekt nach 以免 wird meist weggelassen. Nach 以免 steht das Unerwünschte selbst, ohne Verneinung: 以免迟到 „damit man nicht zu spät kommt“, nicht *以免不迟到. 以免 klingt schriftsprachlich und steht oft in Hinweisen, Anleitungen und Durchsagen; es steht im zweiten Teilsatz, nicht am Satzanfang.",
    "notes": "免得 (miǎnde), HSK 7–9, bedeutet dasselbe, ist aber umgangssprachlicher. 以便 (yǐbiàn), HSK 6, ist das positive Gegenstück: „damit (etwas Erwünschtes) …“. 难免 (nánmiǎn) heißt dagegen „kaum zu vermeiden“.",
    "examples": [
      {
        "chinese": "你应该早点出发，以免迟到。",
        "pinyin": "Nǐ yīnggāi zǎodiǎn chūfā, yǐmiǎn chídào.",
        "german": "Du solltest etwas früher losgehen, damit du nicht zu spät kommst."
      },
      {
        "chinese": "请保管好自己的行李，以免丢失。",
        "pinyin": "Qǐng bǎoguǎn hǎo zìjǐ de xíngli, yǐmiǎn diūshī.",
        "german": "Bitte achten Sie gut auf Ihr Gepäck, damit nichts verloren geht."
      },
      {
        "chinese": "写完以后多检查几遍，以免出错。",
        "pinyin": "Xiě wán yǐhòu duō jiǎnchá jǐ biàn, yǐmiǎn chūcuò.",
        "german": "Prüf es nach dem Schreiben lieber ein paarmal durch, um Fehler zu vermeiden."
      }
    ],
    "legacyIds": [
      "以免"
    ],
    "related": [
      "g:免得",
      "g:……，以便……",
      "g:难免"
    ],
    "quiz": {
      "example": 1,
      "answer": "以免",
      "distractors": [
        {
          "text": "以便",
          "reason": "以便 („damit“) nennt ein erwünschtes Ziel; dass das Gepäck verloren geht, will niemand erreichen."
        },
        {
          "text": "难免",
          "reason": "难免 („kaum zu vermeiden“) würde den Verlust als unvermeidlich darstellen, statt ihn zu verhindern."
        },
        {
          "text": "只要",
          "reason": "只要 („wenn nur“) leitet eine Bedingung ein, verlangt 就 und passt nicht als Zweck-Teilsatz."
        }
      ],
      "accepted": [
        "免得"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:固然",
    "pattern": "固然",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "zwar (zugegeben) …, aber …",
    "formation": "Subjekt + 固然 + Zugeständnis，但(是)/可是/不过 + Einschränkung (oder: ……，也 + zweiter Punkt)",
    "explanation": "固然 (gùrán) räumt einen Punkt ausdrücklich als richtig ein, bevor ein zweiter Gesichtspunkt folgt. Meist folgt 但(是)/可是 (kěshì)/不过 (búguò): Der zweite Punkt schränkt den ersten ein oder ist wichtiger. Steht im zweiten Teil 也, werden beide Punkte bejaht: „A stimmt zwar, aber B ebenso“. 固然 steht meist nach dem Subjekt, direkt vor dem Prädikat (钱固然重要), während 虽然 (suīrán) auch vor dem Subjekt stehen kann. Bei 虽然 widerspricht der zweite Teil oft dem ersten; 固然 betont dagegen, dass der erste Punkt berechtigt ist. Typisch für Argumentationen, Aufsätze und Reden.",
    "notes": "诚然 (chéngrán) „zugegeben“ ist noch formeller und steht oft am Satzanfang. Die feste Wendung ……固然好，但…… wägt ein Gut gegen ein anderes ab.",
    "examples": [
      {
        "chinese": "钱固然重要，但健康更重要。",
        "pinyin": "Qián gùrán zhòngyào, dàn jiànkāng gèng zhòngyào.",
        "german": "Geld ist zwar wichtig, aber die Gesundheit ist wichtiger."
      },
      {
        "chinese": "这个办法固然有效，不过成本太高了。",
        "pinyin": "Zhège bànfǎ gùrán yǒuxiào, búguò chéngběn tài gāo le.",
        "german": "Diese Methode wirkt zwar, aber sie ist viel zu teuer."
      },
      {
        "chinese": "经验固然重要，创新也不能忽视。",
        "pinyin": "Jīngyàn gùrán zhòngyào, chuàngxīn yě bù néng hūshì.",
        "german": "Erfahrung ist gewiss wichtig, doch auch Innovation darf man nicht vernachlässigen."
      }
    ],
    "legacyIds": [
      "固然"
    ],
    "related": [
      "g:虽然……，但是……",
      "g:尽管……，但是/可是……",
      "g:诚然",
      "g:…固然好，但…"
    ],
    "quiz": {
      "example": 0,
      "answer": "固然",
      "distractors": [
        {
          "text": "既然",
          "reason": "既然 („da ja“) begründet eine Schlussfolgerung und passt nicht zum Gegensatz mit 但."
        },
        {
          "text": "不但",
          "reason": "不但 verlangt 而且/还 und steigert, statt einen Gegensatz einzuräumen."
        },
        {
          "text": "因为",
          "reason": "因为 („weil“) nennt einen Grund; „weil Geld wichtig ist, aber …“ ergibt keinen Sinn."
        }
      ],
      "accepted": [
        "虽然",
        "尽管"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:岂不是",
    "pattern": "岂不是",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "wäre das nicht …? – das ist doch … (rhetorische Frage, gehoben)",
    "pinyin": "qǐ bú shì",
    "formation": "Handlung/Annahme，岂不是 + Folge (+ 吗)？/！",
    "explanation": "岂不是 (qǐ bú shì) bildet eine rhetorische Frage: „ist/wäre das nicht …?“ – gemeint ist eine Feststellung: „das ist doch …“. Meist nennt der erste Teil eine Handlung oder Annahme (这样做, ……的话 (de huà)), der zweite mit 岂不是 die daraus folgende, oft unerwünschte Konsequenz (浪费 (làngfèi), 白……了, 太可惜了, 自相矛盾 (zìxiāng máodùn)). 岂 (qǐ) ist ein klassisches Fragewort („wie denn“); der Ausdruck wirkt gehoben, wird aber auch im Gespräch mit leicht ironischem oder eindringlichem Ton gebraucht. Am Ende stehen ？ oder ！, oft zusätzlich 吗. Die Verneinung ist schon enthalten – kein zusätzliches 不 einfügen.",
    "notes": "难道 (nándào)……吗 (HSK 4) ist die alltägliche rhetorische Frage und kann vor bejahten wie verneinten Aussagen stehen; 岂不是 (qǐ bú shì) bedeutet immer „das ist doch …“. 岂非 (qǐfēi) ist gleichbedeutend, aber noch schriftsprachlicher.",
    "examples": [
      {
        "chinese": "你不去的话，岂不是浪费了这个好机会？",
        "pinyin": "Nǐ bú qù de huà, qǐ bú shì làngfèi le zhège hǎo jīhuì?",
        "german": "Wenn du nicht hingehst, verschenkst du doch diese gute Gelegenheit!"
      },
      {
        "chinese": "这样做岂不是自相矛盾吗？",
        "pinyin": "Zhèyàng zuò qǐ bú shì zìxiāng máodùn ma?",
        "german": "Widerspricht man sich damit nicht selbst?"
      },
      {
        "chinese": "票都买好了，现在不去，岂不是太可惜了！",
        "pinyin": "Piào dōu mǎi hǎo le, xiànzài bú qù, qǐ bú shì tài kěxī le!",
        "german": "Die Karten sind schon gekauft – jetzt nicht hinzugehen, wäre doch wirklich schade!"
      }
    ],
    "legacyIds": [
      "岂不是"
    ],
    "related": [
      "g:难道……吗？",
      "g:岂非",
      "g:岂"
    ],
    "quiz": {
      "example": 0,
      "answer": "岂不是",
      "distractors": [
        {
          "text": "难道",
          "reason": "难道 vor einer bejahten Aussage legt das Gegenteil nahe („verschwendest du etwa …?“) – das widerspricht dem Sinn „das wäre doch Verschwendung“."
        },
        {
          "text": "何必",
          "reason": "何必 („wozu denn“) fragt nach dem Sinn einer Handlung und passt nicht vor eine Folge mit 了."
        },
        {
          "text": "不如",
          "reason": "不如 („besser wäre“) schlägt eine Alternative vor; Verschwendung empfiehlt niemand."
        }
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:但凡",
    "pattern": "但凡",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "wenn auch nur irgend …, (dann) … (minimale Bedingung)",
    "pinyin": "dànfán",
    "formation": "但凡 + (minimale) Bedingung，(Subjekt +) 就/也 + Folge",
    "explanation": "但凡 (dànfán) leitet eine Bedingung ein, bei der schon das geringste Maß ausreichen würde: „wenn auch nur irgend …“, „sofern überhaupt …“. Oft steht 一点 (yìdiǎn) oder 有 dabei. Häufig ist der Satz irreal und klagend: Die Bedingung ist gerade nicht erfüllt (但凡有一点办法，我也不会来求你 – „hätte ich irgendeinen anderen Weg …“). Im zweiten Teil stehen 就, 也 oder 都. Umgangssprachlich und emotional gefärbt; es betont das Minimum stärker als 只要 (zhǐyào), das nur eine ausreichende Bedingung nennt.",
    "notes": "In gehobener Sprache heißt 但凡 (dànfán) auch „alle, die …; jeder, der …“ wie 凡是 (fánshì): 但凡去过那里的人，都说好 „Alle, die dort waren, loben es.“",
    "examples": [
      {
        "chinese": "但凡有一点办法，我也不会来求你。",
        "pinyin": "Dànfán yǒu yìdiǎn bànfǎ, wǒ yě bú huì lái qiú nǐ.",
        "german": "Hätte ich auch nur irgendeinen anderen Ausweg, würde ich dich nicht darum bitten."
      },
      {
        "chinese": "但凡他早一点去医院，病也不会这么严重。",
        "pinyin": "Dànfán tā zǎo yìdiǎn qù yīyuàn, bìng yě bú huì zhème yánzhòng.",
        "german": "Wäre er auch nur etwas früher ins Krankenhaus gegangen, wäre die Krankheit nicht so schlimm geworden."
      },
      {
        "chinese": "但凡有一点机会，我就不会放弃。",
        "pinyin": "Dànfán yǒu yìdiǎn jīhuì, wǒ jiù bú huì fàngqì.",
        "german": "Solange es auch nur die kleinste Chance gibt, gebe ich nicht auf."
      }
    ],
    "legacyIds": [
      "但凡"
    ],
    "quiz": {
      "example": 2,
      "answer": "但凡",
      "distractors": [
        {
          "text": "除非",
          "reason": "除非 („es sei denn“) verlangt 才 oder 否则 und macht die Bedingung zur einzigen Ausnahme – das passt nicht zu 就."
        },
        {
          "text": "即使",
          "reason": "即使 („selbst wenn“) räumt etwas ein und verlangt 也, nicht 就."
        },
        {
          "text": "不管",
          "reason": "不管 („egal ob/wie“) braucht eine Frage- oder Alternativform, keine einfache Bedingung."
        }
      ],
      "accepted": [
        "只要"
      ]
    },
    "related": [
      "g:只要……，就……",
      "g:凡是……，都……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:要不是…就…",
    "pattern": "要不是…就…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "wenn nicht … gewesen wäre, hätte … (irreale Bedingung)",
    "pinyin": "yào bú shì…jiù…",
    "examples": [
      {
        "chinese": "要不是你提醒我，我就忘了。",
        "pinyin": "Yào bú shì nǐ tíxǐng wǒ, wǒ jiù wàng le.",
        "german": "Wenn du mich nicht erinnert hättest, hätte ich es vergessen."
      },
      {
        "chinese": "要不是下大雨，我们早就到了。",
        "pinyin": "Yào bú shì xià dà yǔ, wǒmen zǎo jiù dào le.",
        "german": "Ohne den starken Regen wären wir längst da."
      },
      {
        "chinese": "要不是路上堵车，他就不会错过飞机了。",
        "pinyin": "Yào bú shì lùshang dǔchē, tā jiù bú huì cuòguò fēijī le.",
        "german": "Hätte es unterwegs keinen Stau gegeben, hätte er den Flug nicht verpasst."
      }
    ],
    "legacyIds": [
      "要不是…就…"
    ],
    "formation": "要不是 + tatsächlicher Umstand，(Subjekt +) 就/早就 + nicht eingetretene Folge (+ 了)",
    "notes": "Nicht verwechseln mit 要不 (yàobù) „sonst“ oder „wie wäre es, wenn …“ (要不我们打车吧). Statt 就 kann auch 也 stehen.",
    "explanation": "要不是 (yào bú shì) nennt einen Umstand, der tatsächlich eingetreten ist, und sagt, was ohne ihn passiert wäre: „Wenn … nicht …, dann wäre/hätte …“. Der zweite Teil mit 就 (oft 早就 (zǎo jiù) oder 可能就) beschreibt die nicht eingetretene Folge, meist mit 了 am Ende. Häufig drückt der Satz Dank (要不是你帮我……) oder Erleichterung bzw. Bedauern aus. Wichtig: Nach 要不是 steht die Tatsache in bejahter Form – 要不是你提醒我 heißt „wenn du mich nicht erinnert hättest“ (du hast es aber getan). Gesprochene Sprache; schriftlich auch 如果不是 (rúguǒ bú shì) oder 若不是 (ruò bú shì).",
    "quiz": {
      "example": 0,
      "answer": "要不是",
      "distractors": [
        {
          "text": "要是",
          "reason": "要是 („wenn“) ohne Verneinung ergäbe „wenn du mich erinnerst, vergesse ich es“ – unsinnig."
        },
        {
          "text": "只要",
          "reason": "只要 („wenn nur“) nennt eine ausreichende Bedingung; „sobald du mich erinnerst, vergesse ich es“ ergibt keinen Sinn."
        },
        {
          "text": "既然",
          "reason": "既然 („da ja“) begründet aus einer Tatsache und ergäbe „da du mich erinnert hast, habe ich es vergessen“."
        }
      ],
      "accepted": [
        "如果不是",
        "若不是"
      ]
    },
    "related": [
      "g:要是……，就……",
      "g:如果……，就……",
      "g:幸亏/幸好……，不然/否则……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:何止",
    "pattern": "何止",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "weit mehr als, keineswegs nur (rhetorisch)",
    "pinyin": "hézhǐ",
    "examples": [
      {
        "chinese": "这次的损失何止一百万。",
        "pinyin": "Zhè cì de sǔnshī hézhǐ yìbǎi wàn.",
        "german": "Der Schaden liegt diesmal weit über einer Million."
      },
      {
        "chinese": "他的问题何止这一个？",
        "pinyin": "Tā de wèntí hézhǐ zhè yí ge?",
        "german": "Als ob er nur dieses eine Problem hätte!"
      },
      {
        "chinese": "这本书我何止看过一遍，至少看过五遍了。",
        "pinyin": "Zhè běn shū wǒ hézhǐ kàn guo yí biàn, zhìshǎo kàn guo wǔ biàn le.",
        "german": "Dieses Buch habe ich nicht bloß einmal gelesen – mindestens fünfmal!"
      }
    ],
    "legacyIds": [
      "何止"
    ],
    "formation": "何止 + Zahl/Menge/Sache",
    "notes": "岂止 (qǐzhǐ) bedeutet dasselbe und ist noch schriftsprachlicher. 不止 (bùzhǐ)/不只 (bùzhǐ) ist die nüchterne, nicht rhetorische Form.",
    "explanation": "何止 (hézhǐ) heißt wörtlich „wieso nur …?“ und ist eine rhetorische Frage: Die genannte Menge oder Sache ist viel zu niedrig gegriffen, in Wirklichkeit ist es mehr. 损失何止一百万 = „der Schaden liegt weit über einer Million“. Es steht vor einer Zahl, einer Mengenangabe oder einer Sache; der Satz kann mit ？, ！ oder 。 enden. Allein als Antwort widerspricht es einer Untertreibung: „……吧？——何止！“ „Von wegen nur …!“ Der Ton ist nachdrücklich und leicht gehoben. Neutral sagt man 不止 (bùzhǐ) „mehr als“.",
    "quiz": {
      "example": 0,
      "answer": "何止",
      "distractors": [
        {
          "text": "只有",
          "reason": "只有 („nur“) sagt das Gegenteil: höchstens eine Million."
        },
        {
          "text": "不到",
          "reason": "不到 („nicht einmal“) heißt „unter einer Million“ – das Gegenteil von „weit mehr“."
        },
        {
          "text": "何必",
          "reason": "何必 („wozu denn“) fragt nach dem Sinn einer Handlung und steht vor einem Verb, nicht vor einer Zahl."
        }
      ],
      "accepted": [
        "不止",
        "岂止"
      ]
    },
    "related": [
      "g:岂"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:迫不得已",
    "pattern": "迫不得已",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "notgedrungen, weil es keinen anderen Ausweg gibt",
    "pinyin": "pò bù dé yǐ",
    "examples": [
      {
        "chinese": "他是迫不得已才撒谎的。",
        "pinyin": "Tā shì pòbùdéyǐ cái sāhuǎng de.",
        "german": "Er hat nur gelogen, weil er keine andere Wahl hatte."
      },
      {
        "chinese": "钱包丢了，迫不得已，我只好向朋友借钱。",
        "pinyin": "Qiánbāo diū le, pòbùdéyǐ, wǒ zhǐhǎo xiàng péngyou jiè qián.",
        "german": "Meine Geldbörse war weg, also musste ich mir notgedrungen Geld von einem Freund leihen."
      },
      {
        "chinese": "卖房子是我们迫不得已的选择。",
        "pinyin": "Mài fángzi shì wǒmen pòbùdéyǐ de xuǎnzé.",
        "german": "Das Haus zu verkaufen war eine Entscheidung, zu der wir gezwungen waren."
      },
      {
        "chinese": "我不是故意的，我也是迫不得已。",
        "pinyin": "Wǒ bú shì gùyì de, wǒ yě shì pòbùdéyǐ.",
        "german": "Das war keine Absicht – ich hatte einfach keine Wahl."
      }
    ],
    "legacyIds": [
      "迫不得已"
    ],
    "formation": "(是) 迫不得已 (+ 才) + Handlung (+ 的) / 迫不得已，…… / 迫不得已的 + Nomen",
    "notes": "Nicht verwechseln mit 迫不及待 (pòbùjídài) „es kaum erwarten können“ – trotz ähnlicher Form das Gegenteil: eifrig statt widerwillig.",
    "explanation": "迫不得已 (pòbùdéyǐ) ist eine feste Vierer-Wendung (成语 (chéngyǔ)): „gezwungen und ohne andere Wahl“. Damit rechtfertigt man eine Handlung, die man eigentlich nicht wollte. Gebrauch: vor dem Verb, oft mit 才 (迫不得已才……), mit 是……的 betont (他是迫不得已才……的); als Einschub am Satzanfang (迫不得已，我只好……); als Prädikat (我也是迫不得已 „ich hatte keine Wahl“) oder Attribut (迫不得已的选择). Eher gehoben, aber auch im Gespräch verbreitet. Verwandt: 不得不 (bùdébù) „müssen, nicht umhinkönnen“ steht direkt vor dem Verb und ist neutraler; 只好 (zhǐhǎo) „es bleibt nichts anderes übrig“.",
    "quiz": {
      "example": 0,
      "answer": "迫不得已",
      "distractors": [
        {
          "text": "迫不及待",
          "reason": "迫不及待 heißt „es kaum erwarten können“ – das Gegenteil von widerwillig und gezwungen."
        },
        {
          "text": "心甘情愿",
          "reason": "心甘情愿 heißt „aus freien Stücken, gern“ und widerspricht „keine andere Wahl“."
        },
        {
          "text": "不得了",
          "reason": "不得了 („furchtbar, enorm“) bezeichnet einen hohen Grad und steht nicht vor 才 + Verb."
        }
      ]
    },
    "related": [
      "g:只好"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:与其说…不如说…",
    "pattern": "与其说…不如说…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "weniger …, als vielmehr … (treffendere Beschreibung)",
    "pinyin": "yǔqí shuō…bùrú shuō…",
    "examples": [
      {
        "chinese": "与其说他聪明，不如说他勤奋。",
        "pinyin": "Yǔqí shuō tā cōngmíng, bùrú shuō tā qínfèn.",
        "german": "Er ist weniger klug als vielmehr fleißig."
      },
      {
        "chinese": "与其说他懒，不如说他没有动力。",
        "pinyin": "Yǔqí shuō tā lǎn, bùrú shuō tā méiyǒu dònglì.",
        "german": "Faul ist er eigentlich nicht – ihm fehlt eher die Motivation."
      },
      {
        "chinese": "这次失败与其说是运气不好，不如说是准备不够。",
        "pinyin": "Zhè cì shībài yǔqí shuō shì yùnqi bù hǎo, bùrú shuō shì zhǔnbèi bú gòu.",
        "german": "Das Scheitern lag diesmal weniger am Pech als an der mangelnden Vorbereitung."
      }
    ],
    "legacyIds": [
      "与其说…不如说…"
    ],
    "formation": "与其说 + A (weniger zutreffend)，不如说 + B (treffender)",
    "notes": "与其 (yǔqí) A，不如 (bùrú) B (ohne 说) vergleicht Handlungen: „statt A lieber B“ (与其等他，不如我们先走). 与其……，宁愿 (nìngyuàn)/宁可 (nìngkě)…… (HSK 7–9) betont die Entscheidung des Sprechers. Statt 不如说 auch 倒不如说 oder schriftsprachlich 毋宁说 (wúnìng shuō).",
    "explanation": "与其说 A，不如说 B (yǔqí shuō …, bùrú shuō …) stellt zwei Arten gegenüber, etwas zu beschreiben oder zu bewerten, und erklärt die zweite für treffender: „Man kann weniger sagen, dass A, als vielmehr, dass B“ – kurz „eher B als A“. Es geht um die richtige Einschätzung oder Wortwahl, nicht um eine Wahl zwischen Handlungen. A und B sind meist gleich gebaut (zwei Adjektive, zwei Nomen, zwei Sätze) und beziehen sich auf dasselbe Subjekt. Die bevorzugte Sicht steht immer nach 不如说; wer die Teile vertauscht, sagt das Gegenteil. Gehobener, argumentierender Stil, aber auch im Gespräch üblich.",
    "quiz": {
      "example": 0,
      "answer": "不如说",
      "distractors": [
        {
          "text": "而是",
          "reason": "而是 gehört zu 不是……而是……, nicht zu 与其说."
        },
        {
          "text": "所以说",
          "reason": "所以说 („deshalb“) zieht eine Schlussfolgerung, stellt aber keine treffendere Beschreibung gegenüber."
        },
        {
          "text": "比如说",
          "reason": "比如说 („zum Beispiel“) nennt ein Beispiel, keine Alternative zu einer Beschreibung."
        }
      ],
      "accepted": [
        "倒不如说",
        "还不如说",
        "毋宁说"
      ]
    },
    "related": [
      "g:倒不如",
      "g:与其……，宁愿/宁可……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:倒不如",
    "pattern": "倒不如",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "da wäre es (doch) besser, … (Gegenvorschlag)",
    "pinyin": "dào bùrú",
    "examples": [
      {
        "chinese": "与其在家抱怨，倒不如自己想办法。",
        "pinyin": "Yǔqí zài jiā bàoyuàn, dào bùrú zìjǐ xiǎng bànfǎ.",
        "german": "Statt zu Hause herumzujammern, sollte man lieber selbst nach einer Lösung suchen."
      },
      {
        "chinese": "这么晚了还等什么公交车，倒不如打车回去。",
        "pinyin": "Zhème wǎn le hái děng shénme gōngjiāochē, dào bùrú dǎchē huíqu.",
        "german": "So spät noch auf den Bus warten? Da nehmen wir doch lieber ein Taxi nach Hause."
      },
      {
        "chinese": "花那么多钱修旧电脑，倒不如买一台新的。",
        "pinyin": "Huā nàme duō qián xiū jiù diànnǎo, dào bùrú mǎi yì tái xīn de.",
        "german": "Statt so viel Geld in den alten Computer zu stecken, kauft man besser gleich einen neuen."
      }
    ],
    "legacyIds": [
      "倒不如"
    ],
    "formation": "(与其) A，倒不如 + B (bessere Alternative)",
    "notes": "Mit Adjektiv drückt A 倒不如 (dào bùrú) B + Adjektiv einen Vergleich aus: „A ist eigentlich nicht so … wie B“ (vgl. A 不如 (bùrú) B). 与其说……不如说…… vergleicht dagegen zwei Beschreibungen, nicht zwei Handlungen.",
    "explanation": "倒不如 (dào bùrú) schlägt eine Alternative vor, die der Sprecher für besser hält als das zuvor Genannte: „da wäre es doch besser, …“. 不如 (bùrú) allein heißt schon „besser wäre“; das Adverb 倒 (dào) unterstreicht den Gegensatz zum bisherigen Plan oder zur Erwartung. Oft steht davor 与其 (yǔqí): 与其 A，倒不如 B „statt A lieber B“. Der erste Teil kann aber auch einfach die Handlung nennen, über die man nachdenkt. Gesprochen und geschrieben gebräuchlich. Variante: 还不如 (hái bùrú) mit leicht resigniertem Ton („da kann man ja gleich …“).",
    "quiz": {
      "example": 2,
      "answer": "倒不如",
      "distractors": [
        {
          "text": "不比",
          "reason": "不比 („nicht … als“) vergleicht zwei Dinge mit einem Adjektiv und schlägt nichts vor."
        },
        {
          "text": "倒是",
          "reason": "倒是 („dagegen, allerdings“) fehlt das „besser wäre“; es ergibt keinen Gegenvorschlag."
        },
        {
          "text": "何必",
          "reason": "何必 („wozu denn“) würde fragen, wozu man einen neuen kaufen soll – das Gegenteil des Gemeinten."
        }
      ],
      "accepted": [
        "不如",
        "还不如"
      ]
    },
    "related": [
      "g:与其说…不如说…",
      "g:与其……，宁愿/宁可……",
      "g:A不如B（+形容词）"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不至于",
    "pattern": "不至于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "so weit wird es (wohl) nicht kommen; nicht so schlimm, dass …",
    "pinyin": "bú zhìyú",
    "examples": [
      {
        "chinese": "迟到几分钟，不至于被开除吧？",
        "pinyin": "Chídào jǐ fēnzhōng, bú zhìyú bèi kāichú ba?",
        "german": "Wegen ein paar Minuten Verspätung wird man doch nicht gleich entlassen, oder?"
      },
      {
        "chinese": "他虽然生气了，但不至于跟你绝交。",
        "pinyin": "Tā suīrán shēngqì le, dàn bú zhìyú gēn nǐ juéjiāo.",
        "german": "Er ist zwar sauer, aber deswegen wird er die Freundschaft mit dir nicht gleich beenden."
      },
      {
        "chinese": "别担心，这点小病还不至于住院。",
        "pinyin": "Bié dānxīn, zhè diǎn xiǎo bìng hái bú zhìyú zhùyuàn.",
        "german": "Keine Sorge, wegen so einer Kleinigkeit muss man noch nicht ins Krankenhaus."
      }
    ],
    "legacyIds": [
      "不至于"
    ],
    "formation": "(Subjekt +) 不至于 + Verb/Adjektiv-Phrase (+ 吧)",
    "notes": "Nicht verwechseln mit der Präposition 至于 (zhìyú) „was … betrifft“ (HSK 6), die ein neues Thema einleitet. 何至于 (hé zhìyú), HSK 7–9, ist die rhetorische Frage „wie könnte es so weit kommen?“.",
    "explanation": "不至于 (bú zhìyú) schätzt ein, dass etwas nicht bis zu einem bestimmten, meist schlimmen oder übertriebenen Grad gehen wird: „so weit wird es nicht kommen“, „es ist nicht so schlimm, dass …“. Es steht vor einem Verb oder Adjektiv, oft mit 吧 (beruhigend, vermutend), 那么 (nàme)/这么 (zhème) oder 还. Typisch, um jemanden zu beruhigen oder eine Befürchtung abzuwiegeln. Die bejahte Form 至于 (zhìyú) kommt in diesem Sinn fast nur in Fragen vor: 至于吗？ „Muss das denn sein? Ist das nicht übertrieben?“ Mündlich und schriftlich gebräuchlich.",
    "quiz": {
      "example": 0,
      "answer": "不至于",
      "distractors": [
        {
          "text": "至于",
          "reason": "Ohne 不 fehlt die Verneinung; 至于 steht in diesem Sinn nur in Fragen wie 至于吗？ oder bedeutet „was … betrifft“."
        },
        {
          "text": "不得不",
          "reason": "不得不 („muss notgedrungen“) würde die Entlassung als unvermeidlich darstellen – das Gegenteil."
        },
        {
          "text": "不在乎",
          "reason": "不在乎 („sich nichts machen aus“) braucht eine Person als Subjekt, der etwas egal ist, und beruhigt nicht."
        }
      ],
      "accepted": [
        "不会"
      ]
    },
    "related": [
      "g:何至于……",
      "g:至于"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:之所以…是因为…",
    "pattern": "之所以…是因为…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "dass …, liegt daran, dass … (erst die Folge, dann der Grund)",
    "pinyin": "zhī suǒyǐ…shì yīnwèi…",
    "examples": [
      {
        "chinese": "他之所以成功，是因为他从不放弃。",
        "pinyin": "Tā zhīsuǒyǐ chénggōng, shì yīnwèi tā cóng bú fàngqì.",
        "german": "Dass er Erfolg hat, liegt daran, dass er nie aufgibt."
      },
      {
        "chinese": "我之所以迟到，是因为路上堵车了。",
        "pinyin": "Wǒ zhīsuǒyǐ chídào, shì yīnwèi lùshang dǔchē le.",
        "german": "Ich bin zu spät gekommen, weil unterwegs Stau war."
      },
      {
        "chinese": "这家店之所以这么受欢迎，是因为价格便宜、服务好。",
        "pinyin": "Zhè jiā diàn zhīsuǒyǐ zhème shòu huānyíng, shì yīnwèi jiàgé piányi, fúwù hǎo.",
        "german": "Der Laden ist vor allem deshalb so beliebt, weil er günstig ist und guten Service bietet."
      }
    ],
    "legacyIds": [
      "之所以…是因为…",
      "g:之所以...是因为...",
      "之所以...是因为..."
    ],
    "formation": "Subjekt + 之所以 + Ergebnis，是因为 + Grund",
    "notes": "之所以 (zhīsuǒyǐ)……在于 (zàiyú)…… ist die noch formellere Variante. Die normale Reihenfolge Grund → Folge drückt 因为 (yīnwèi)……，所以 (suǒyǐ)…… (HSK 2) aus.",
    "explanation": "之所以 (zhīsuǒyǐ) … 是因为 (shì yīnwèi) … dreht die übliche Reihenfolge von 因为 (yīnwèi)……所以 (suǒyǐ)…… um: Zuerst steht das Ergebnis, das als bekannt gilt, dann wird der Grund hervorgehoben: „Dass er Erfolg hat, liegt daran, dass …“. 之所以 steht nach dem Subjekt (ohne Subjekt am Satzanfang), der zweite Teil beginnt mit 是因为. Statt 是因为 auch 是由于 (shì yóuyú) oder 在于 (zàiyú) „liegt in …“. Eher schriftsprachlich, in Reden und Erklärungen; im Alltag genügt ……，是因为……. Fehler: *因为……，之所以…… – 之所以 steht immer im ersten Teil.",
    "quiz": {
      "example": 1,
      "answer": "之所以",
      "distractors": [
        {
          "text": "因为",
          "reason": "因为 nennt einen Grund; mit 是因为 im zweiten Teil stünde der Grund doppelt."
        },
        {
          "text": "虽然",
          "reason": "虽然 („obwohl“) verlangt einen Gegensatz mit 但是, keinen Grund."
        },
        {
          "text": "于是",
          "reason": "于是 („daraufhin“) leitet eine Folgehandlung ein und steht nicht vor dem Prädikat im ersten Teil."
        }
      ]
    },
    "related": [
      "g:之所以…在于…",
      "g:因为……，所以……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:加以",
    "pattern": "加以",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "einer Behandlung unterziehen (formelles Funktionsverb vor zweisilbigem Verb)",
    "pinyin": "jiāyǐ",
    "examples": [
      {
        "chinese": "这个问题需要尽快加以解决。",
        "pinyin": "Zhège wèntí xūyào jǐnkuài jiāyǐ jiějué.",
        "german": "Dieses Problem muss möglichst schnell gelöst werden."
      },
      {
        "chinese": "对于违反规定的行为，必须加以制止。",
        "pinyin": "Duìyú wéifǎn guīdìng de xíngwéi, bìxū jiāyǐ zhìzhǐ.",
        "german": "Regelverstößen muss Einhalt geboten werden."
      },
      {
        "chinese": "我们会对大家的意见认真加以研究。",
        "pinyin": "Wǒmen huì duì dàjiā de yìjiàn rènzhēn jiāyǐ yánjiū.",
        "german": "Wir werden alle Vorschläge sorgfältig prüfen."
      }
    ],
    "legacyIds": [
      "加以"
    ],
    "formation": "(对 + Objekt +) 加以 + zweisilbiges Verb (解决, 研究, 说明 …)",
    "notes": "予以 (yǔyǐ), HSK 7–9, ist noch förmlicher und gleich gebaut. Selten ist 加以 (jiāyǐ) auch Konjunktion „hinzu kommt, dass“ (wie 加上 (jiāshang)).",
    "explanation": "加以 (jiāyǐ) ist ein formelles Funktionsverb: Es hat selbst kaum Bedeutung und zeigt nur an, dass mit einer vorher genannten Sache etwas getan wird; die eigentliche Handlung folgt als zweisilbiges Verb (加以解决 „lösen“, 加以研究 „untersuchen“, 加以说明 „erläutern“). Die betroffene Sache steht vor 加以 – als Thema am Satzanfang oder mit 对/对于 (duìyú) eingeleitet –, nicht dahinter. Typisch nach 需要 (xūyào), 必须 (bìxū), 应该 (yīnggāi), 要 und in Berichten, Vorschriften und Nachrichten; im Alltag sagt man einfach 解决这个问题. Fehler: ein Nomen direkt nach 加以 (*加以问题) oder ein einsilbiges Verb (*加以改).",
    "quiz": {
      "example": 0,
      "answer": "加以",
      "distractors": [
        {
          "text": "加上",
          "reason": "加上 („dazu kommt“) reiht etwas an und steht nicht als Funktionsverb vor 解决."
        },
        {
          "text": "以免",
          "reason": "以免 („damit nicht“) leitet einen Zweck-Teilsatz ein und würde den Sinn umkehren."
        },
        {
          "text": "可以",
          "reason": "可以 („können“) nach 需要 ergäbe zwei Modalverben hintereinander und keinen sinnvollen Satz."
        }
      ],
      "accepted": [
        "予以"
      ]
    },
    "related": [
      "g:予以"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:进而",
    "pattern": "进而",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "und darauf aufbauend, in einem weiteren Schritt (Steigerung)",
    "pinyin": "jìnér",
    "examples": [
      {
        "chinese": "他先学会了基础知识，进而开始研究更复杂的问题。",
        "pinyin": "Tā xiān xuéhuì le jīchǔ zhīshi, jìn'ér kāishǐ yánjiū gèng fùzá de wèntí.",
        "german": "Er eignete sich zuerst die Grundlagen an und wandte sich darauf aufbauend komplexeren Fragen zu."
      },
      {
        "chinese": "我们要先了解客户的需要，进而提供更好的服务。",
        "pinyin": "Wǒmen yào xiān liǎojiě kèhù de xūyào, jìn'ér tígōng gèng hǎo de fúwù.",
        "german": "Wir müssen zuerst die Bedürfnisse der Kunden verstehen und darauf aufbauend besseren Service bieten."
      },
      {
        "chinese": "经济发展带动了教育，进而促进了整个社会的进步。",
        "pinyin": "Jīngjì fāzhǎn dàidòng le jiàoyù, jìn'ér cùjìn le zhěnggè shèhuì de jìnbù.",
        "german": "Die wirtschaftliche Entwicklung stärkte das Bildungswesen und förderte so in einem weiteren Schritt den Fortschritt der ganzen Gesellschaft."
      }
    ],
    "legacyIds": [
      "进而"
    ],
    "formation": "(先) A，进而 + B (weiterführender Schritt)",
    "notes": "从而 (cóng'ér), HSK 5, leitet eine Folge ein („wodurch, sodass“), 进而 (jìn'ér) einen weiteren Schritt („darüber hinaus“), 继而 (jì'ér) nur die zeitliche Abfolge („daraufhin“).",
    "explanation": "进而 (jìn'ér) verbindet zwei Handlungen oder Entwicklungen, von denen die zweite auf der ersten aufbaut und weiter geht: „und darauf aufbauend“, „und schließlich sogar“. Es drückt also eine Vertiefung oder Steigerung aus, nicht bloß eine zeitliche Abfolge. Häufig steht im ersten Teil 先 oder 首先 (shǒuxiān). 进而 steht am Anfang des zweiten Teils, direkt vor dem Verb; das Subjekt ist meist dasselbe wie im ersten Teil. Schriftsprachlich, typisch für Sachtexte, Berichte und Reden.",
    "quiz": {
      "example": 1,
      "answer": "进而",
      "distractors": [
        {
          "text": "然而",
          "reason": "然而 („jedoch“) leitet einen Gegensatz ein; besserer Service widerspricht dem Verstehen der Kunden nicht."
        },
        {
          "text": "否则",
          "reason": "否则 („sonst“) nennt die Folge, wenn etwas nicht geschieht – hier ergäbe das keinen Sinn."
        },
        {
          "text": "尽管",
          "reason": "尽管 („obwohl“) räumt etwas ein und verlangt 但是/可是; als zweiter Schritt passt es nicht."
        }
      ],
      "accepted": [
        "从而"
      ]
    },
    "related": [
      "g:继而",
      "g:从而",
      "g:……，于是……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:继而",
    "pattern": "继而",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "daraufhin, gleich danach (Abfolge, schriftsprachlich)",
    "pinyin": "jìér",
    "examples": [
      {
        "chinese": "他先是一愣，继而笑了起来。",
        "pinyin": "Tā xiān shì yí lèng, jì'ér xiào le qǐlai.",
        "german": "Er stutzte zuerst und fing dann an zu lachen."
      },
      {
        "chinese": "天空先变暗，继而下起了大雨。",
        "pinyin": "Tiānkōng xiān biàn àn, jì'ér xià qǐ le dà yǔ.",
        "german": "Zuerst verdunkelte sich der Himmel, dann begann es heftig zu regnen."
      },
      {
        "chinese": "会上大家先是沉默，继而开始激烈地讨论。",
        "pinyin": "Huì shang dàjiā xiān shì chénmò, jì'ér kāishǐ jīliè de tǎolùn.",
        "german": "In der Sitzung schwiegen zunächst alle, doch dann entbrannte eine hitzige Diskussion."
      }
    ],
    "legacyIds": [
      "继而"
    ],
    "formation": "(先/起初) A，继而 + B",
    "explanation": "继而 (jì'ér) leitet ein Geschehen ein, das unmittelbar auf ein vorheriges folgt: „daraufhin, gleich danach“. Im ersten Teil stehen oft 先, 先是 oder 起初 (qǐchū); beschrieben wird meist eine Kette von Ereignissen oder ein Umschwung der Gefühle (先是惊讶，继而……). 继而 steht am Anfang des zweiten Teils vor dem Verb. Rein schriftsprachlich und typisch für Erzählungen und Berichte; gesprochen sagt man 然后 (ránhòu) oder 接着 (jiēzhe). Es betont nur die Reihenfolge, keine Steigerung – dafür steht 进而 (jìn'ér).",
    "quiz": {
      "example": 1,
      "answer": "继而",
      "distractors": [
        {
          "text": "反而",
          "reason": "反而 („im Gegenteil“) setzt eine enttäuschte Erwartung voraus; hier folgt nur ein Ereignis auf das andere."
        },
        {
          "text": "何况",
          "reason": "何况 („geschweige denn“) steigert ein Argument und beschreibt keinen Ablauf."
        },
        {
          "text": "否则",
          "reason": "否则 („sonst“) nennt eine Folge für den Fall, dass etwas nicht geschieht."
        }
      ],
      "accepted": [
        "接着",
        "然后"
      ]
    },
    "related": [
      "g:进而",
      "g:先……，再/然后……",
      "g:……，于是……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:随之",
    "pattern": "随之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "damit einhergehend, entsprechend (Begleitveränderung)",
    "pinyin": "suízhī",
    "examples": [
      {
        "chinese": "天气变冷了，感冒的人也随之增加。",
        "pinyin": "Tiānqì biàn lěng le, gǎnmào de rén yě suízhī zēngjiā.",
        "german": "Es ist kälter geworden, und entsprechend erkälten sich auch mehr Menschen."
      },
      {
        "chinese": "收入提高了，人们的生活方式也随之发生了变化。",
        "pinyin": "Shōurù tígāo le, rénmen de shēnghuó fāngshì yě suízhī fāshēng le biànhuà.",
        "german": "Mit den höheren Einkommen hat sich auch der Lebensstil der Menschen verändert."
      },
      {
        "chinese": "科技发展得很快，随之而来的是许多新的问题。",
        "pinyin": "Kējì fāzhǎn de hěn kuài, suízhī ér lái de shì xǔduō xīn de wèntí.",
        "german": "Die Technik entwickelt sich rasant, und damit kommen auch viele neue Probleme."
      }
    ],
    "legacyIds": [
      "随之"
    ],
    "formation": "A (Veränderung)，B + (也) + 随之 + Verb / 随之而来的是 + Folge",
    "explanation": "随之 (suízhī) heißt wörtlich „ihm folgend“ (之 = das zuvor Genannte). Es zeigt, dass eine Veränderung eine zweite nach sich zieht: „damit einhergehend, entsprechend“. 随之 steht im zweiten Teil direkt vor dem Verb, oft nach 也; das Subjekt dieses Teils steht davor (收入提高了，生活方式也随之变化). Feste Wendung: 随之而来 (suízhī ér lái) „damit einhergehen“, oft als 随之而来的是…… „damit kommt/kam …“. Schriftsprachlich, häufig in Berichten und Analysen; im Gespräch eher 也跟着. Verwandt: 随着 (suízhe) steht vor der Ursache: 随着经济的发展，…… „mit der Entwicklung der Wirtschaft …“.",
    "quiz": {
      "example": 0,
      "answer": "随之",
      "distractors": [
        {
          "text": "随着",
          "reason": "随着 steht vor der Ursache und braucht ein Objekt (随着天气变冷……), nicht direkt vor dem Verb."
        },
        {
          "text": "随便",
          "reason": "随便 („beliebig, nach Lust und Laune“) beschreibt keine Folgeveränderung."
        },
        {
          "text": "总之",
          "reason": "总之 („kurz gesagt“) fasst zusammen und steht am Satzanfang, nicht vor dem Verb."
        }
      ],
      "accepted": [
        "跟着"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:与此同时",
    "pattern": "与此同时",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "gleichzeitig, zugleich (zwei parallele Vorgänge oder Entwicklungen)",
    "pinyin": "yǔcǐ tóngshí",
    "examples": [
      {
        "chinese": "经济快速发展，与此同时，环境问题也越来越严重。",
        "pinyin": "Jīngjì kuàisù fāzhǎn, yǔcǐ tóngshí, huánjìng wèntí yě yuè lái yuè yánzhòng.",
        "german": "Die Wirtschaft wächst rasant, gleichzeitig werden die Umweltprobleme immer gravierender."
      },
      {
        "chinese": "他在一家公司工作，与此同时还在读硕士。",
        "pinyin": "Tā zài yì jiā gōngsī gōngzuò, yǔcǐ tóngshí hái zài dú shuòshì.",
        "german": "Er arbeitet bei einer Firma und macht nebenher noch seinen Master."
      },
      {
        "chinese": "警察封锁了现场，与此同时，救护车也赶到了。",
        "pinyin": "Jǐngchá fēngsuǒ le xiànchǎng, yǔcǐ tóngshí, jiùhùchē yě gǎndào le.",
        "german": "Die Polizei sperrte den Ort des Geschehens ab, zur gleichen Zeit traf auch der Krankenwagen ein."
      }
    ],
    "legacyIds": [
      "与此同时"
    ],
    "formation": "Satz A，与此同时，(Subjekt +) Satz B",
    "notes": "Die Doppelung 一边 (yìbiān) … 一边 … verbindet zwei Handlungen derselben Person im Alltag; 与此同时 (yǔcǐ tóngshí) verknüpft dagegen ganze Sätze und klingt formell. Wer nur „außerdem“ meint, ohne zeitlichen Bezug, nimmt besser 此外 (cǐwài).",
    "explanation": "与此同时 (yǔcǐ tóngshí) heißt wörtlich „zur selben Zeit wie dies“: 与 „mit“, 此 „dies“, 同时 (tóngshí) „gleiche Zeit“. Es steht am Anfang des zweiten Satzes, meist mit Komma, und verbindet zwei Vorgänge, die parallel ablaufen – oft mit verschiedenen Subjekten. Häufig geht es um zwei Entwicklungen, von denen die zweite einen weiteren oder auch gegenläufigen Aspekt zeigt („zugleich aber …“); im zweiten Satz stehen gern 也 oder 还. Der Ausdruck ist schriftsprachlich und typisch für Nachrichten, Berichte und Aufsätze; im Gespräch genügt 同时 oder 这时候 (zhè shíhou).",
    "quiz": {
      "example": 1,
      "answer": "与此同时",
      "distractors": [
        {
          "text": "于是",
          "reason": "于是 („daraufhin“) leitet eine Folgehandlung ein; das Studium ist keine Folge der Arbeit, beides läuft parallel."
        },
        {
          "text": "否则",
          "reason": "否则 heißt „sonst“ und setzt eine Bedingung im ersten Teil voraus – hier gibt es keine."
        },
        {
          "text": "总之",
          "reason": "总之 fasst zusammen („kurzum“), fügt aber keinen gleichzeitigen zweiten Vorgang hinzu."
        }
      ],
      "accepted": [
        "同时"
      ]
    },
    "related": [
      "g:一边……，一边……",
      "g:此外",
      "g:此"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:值得一提的是",
    "pattern": "值得一提的是",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "erwähnenswert ist, dass …",
    "pinyin": "zhíde yì tí de shì",
    "examples": [
      {
        "chinese": "值得一提的是，他是这次比赛最年轻的获奖者。",
        "pinyin": "Zhíde yì tí de shì, tā shì zhè cì bǐsài zuì niánqīng de huòjiǎngzhě.",
        "german": "Erwähnenswert ist, dass er der jüngste Preisträger dieses Wettbewerbs ist."
      },
      {
        "chinese": "这家酒店离车站很近，值得一提的是，早餐也是免费的。",
        "pinyin": "Zhè jiā jiǔdiàn lí chēzhàn hěn jìn, zhíde yì tí de shì, zǎocān yě shì miǎnfèi de.",
        "german": "Das Hotel liegt nahe am Bahnhof, und besonders erwähnenswert: Auch das Frühstück ist kostenlos."
      },
      {
        "chinese": "值得一提的是，这项技术完全是中国自己研发的。",
        "pinyin": "Zhíde yì tí de shì, zhè xiàng jìshù wánquán shì Zhōngguó zìjǐ yánfā de.",
        "german": "Bemerkenswert ist, dass diese Technologie vollständig in China selbst entwickelt wurde."
      }
    ],
    "legacyIds": [
      "值得一提的是"
    ],
    "formation": "值得一提的是，+ bemerkenswerte Tatsache",
    "notes": "Nach demselben Muster: 值得注意的是 (zhíde zhùyì de shì) „zu beachten ist“ und 值得一提的还有 (zhíde yì tí de hái yǒu) „erwähnenswert ist außerdem“.",
    "explanation": "值得一提的是 (zhíde yì tí de shì) bedeutet wörtlich „was es wert ist, einmal erwähnt zu werden, ist …“: 值得 (zhíde) „wert sein“, 一提 „einmal erwähnen“, dazu die Nominalisierung mit 的 und 是. Damit hebt man ein besonders interessantes Detail hervor, meist nachdem das Thema schon eingeführt ist. Typisch für Berichte, Reden, Präsentationen und Reiseführer; im lockeren Gespräch klingt es etwas gehoben. Der Ausdruck steht am Satzanfang und wird durch ein Komma von der eigentlichen Aussage getrennt. 的 und 是 gehören fest dazu – ohne sie fehlt die Verbindung zur folgenden Aussage.",
    "quiz": {
      "example": 1,
      "answer": "值得一提的是",
      "distractors": [
        {
          "text": "由此看来",
          "reason": "由此看来 zieht einen Schluss („daraus folgt“); das kostenlose Frühstück folgt nicht aus der Lage des Hotels."
        },
        {
          "text": "确切地说",
          "reason": "确切地说 („genauer gesagt“) präzisiert das Vorige; das Frühstück ist aber ein neuer Punkt, keine Präzisierung der Lage."
        },
        {
          "text": "言下之意",
          "reason": "言下之意 deckt auf, was jemand angedeutet hat; hier wird nichts angedeutet, sondern ein Vorzug genannt."
        }
      ],
      "accepted": [
        "值得注意的是"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不难看出",
    "pattern": "不难看出",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "man sieht leicht, dass …; es ist klar erkennbar",
    "pinyin": "bù nán kànchū",
    "examples": [
      {
        "chinese": "从他的表情不难看出，他对这个结果很不满意。",
        "pinyin": "Cóng tā de biǎoqíng bù nán kànchū, tā duì zhège jiéguǒ hěn bù mǎnyì.",
        "german": "An seinem Gesichtsausdruck sieht man leicht, dass er mit dem Ergebnis sehr unzufrieden ist."
      },
      {
        "chinese": "从这些数据中不难看出，网上购物的人越来越多。",
        "pinyin": "Cóng zhèxiē shùjù zhōng bù nán kànchū, wǎngshàng gòuwù de rén yuè lái yuè duō.",
        "german": "Aus diesen Daten lässt sich leicht ablesen, dass immer mehr Menschen online einkaufen."
      },
      {
        "chinese": "不难看出，她为这次演出做了很多准备。",
        "pinyin": "Bù nán kànchū, tā wèi zhè cì yǎnchū zuò le hěn duō zhǔnbèi.",
        "german": "Man merkt sofort, dass sie sich auf diesen Auftritt gründlich vorbereitet hat."
      }
    ],
    "legacyIds": [
      "不难看出"
    ],
    "formation": "(从 + Quelle + 中/上) 不难看出，+ Schlussfolgerung",
    "notes": "由此看来 (yóucǐ kànlái) „daraus folgt“ betont die Folgerung, 可见 (kějiàn) „man sieht also“ ist knapper. Variante: 不难发现 (bù nán fāxiàn) „man stellt leicht fest“. Gegenteil: 很难看出 (hěn nán kànchū) „kaum zu erkennen“.",
    "explanation": "不难看出 (bù nán kànchū) heißt „es ist nicht schwer zu erkennen“: 不难 (bù nán) „nicht schwer“ + 看出 (kànchū) „herauslesen, erkennen“. Man zieht damit einen naheliegenden Schluss aus Tatsachen, Daten oder dem Verhalten einer Person. Die Quelle steht oft davor: 从 + Quelle + 中/上 („aus … lässt sich leicht ablesen“). Danach folgt der Schluss als ganzer Satz, meist nach einem Komma, oder direkt als Objekt. Ein Subjekt fehlt in der Regel – gemeint ist „man“. Typisch für Aufsätze, Analysen und Diagrammbeschreibungen (auch in HSK-Schreibaufgaben); im Gespräch sagt man eher 看得出来 (kàn de chūlái).",
    "quiz": {
      "example": 0,
      "answer": "不难看出",
      "distractors": [
        {
          "text": "很难看出",
          "reason": "很难看出 heißt „kaum zu erkennen“ – das Gegenteil von „man sieht leicht“."
        },
        {
          "text": "不可否认",
          "reason": "不可否认 räumt eine Tatsache ein und lässt sich nicht mit einer Quelle wie 从他的表情 verbinden."
        },
        {
          "text": "毫无疑问",
          "reason": "毫无疑问 („zweifellos“) ist ein Satzadverb und kann keine Quelle mit 从 an sich binden; dazu bräuchte es ein Verb wie 看出."
        }
      ],
      "accepted": [
        "不难发现"
      ]
    },
    "related": [
      "g:由此看来",
      "g:看来"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不可否认",
    "pattern": "不可否认",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "unbestreitbar, zugegebenermaßen (einräumend)",
    "pinyin": "bùkě fǒurèn",
    "examples": [
      {
        "chinese": "不可否认，互联网改变了人们的生活方式。",
        "pinyin": "Bùkě fǒurèn, hùliánwǎng gǎibiàn le rénmen de shēnghuó fāngshì.",
        "german": "Unbestreitbar hat das Internet die Lebensweise der Menschen verändert."
      },
      {
        "chinese": "不可否认，这个方法有它的好处，但是成本太高了。",
        "pinyin": "Bùkě fǒurèn, zhège fāngfǎ yǒu tā de hǎochu, dànshì chéngběn tài gāo le.",
        "german": "Zugegeben, die Methode hat ihre Vorteile, aber die Kosten sind zu hoch."
      },
      {
        "chinese": "他的进步是不可否认的事实。",
        "pinyin": "Tā de jìnbù shì bùkě fǒurèn de shìshí.",
        "german": "Seine Fortschritte sind eine unbestreitbare Tatsache."
      }
    ],
    "legacyIds": [
      "不可否认"
    ],
    "formation": "不可否认（的是），+ Tatsache（，但是 + Einwand）",
    "notes": "毫无疑问 (háo wú yíwèn) bekräftigt die eigene Überzeugung („zweifellos“), 不可否认 (bùkě fǒurèn) ist dagegen ein Zugeständnis („zugegeben, …“) – darum folgt oft ein 但是 (dànshì).",
    "explanation": "不可否认 (bùkě fǒurèn) bedeutet „es lässt sich nicht leugnen“: 不可 (bùkě) ist schriftsprachlich für „kann/darf nicht“, 否认 (fǒurèn) heißt „leugnen“. Der Ausdruck räumt eine Tatsache ein – oft eine, die nicht ganz zur eigenen Position passt –, bevor mit 但是 (dànshì) oder 然而 (rán'ér) ein Einwand folgt. Er steht am Satzanfang (auch als 不可否认的是) oder als Prädikat: ……是不可否认的 „… ist unbestreitbar“; als Attribut etwa in 不可否认的事实 „eine unbestreitbare Tatsache“. Typisch für Diskussionen, Aufsätze und Kommentare. Gleichbedeutend, etwas seltener: 无可否认 (wúkě fǒurèn).",
    "quiz": {
      "example": 1,
      "answer": "不可否认",
      "distractors": [
        {
          "text": "由此看来",
          "reason": "由此看来 zieht einen Schluss aus vorher Genanntem; hier geht nichts voraus, und es wird etwas eingeräumt, nicht gefolgert."
        },
        {
          "text": "一言以蔽之",
          "reason": "一言以蔽之 fasst eine längere Darstellung zusammen; es leitet kein Zugeständnis vor einem 但是 ein."
        },
        {
          "text": "不仅如此",
          "reason": "不仅如此 („nicht nur das“) knüpft steigernd an einen vorigen Satz an; am Anfang ohne Vorlauf und vor einem Einwand passt es nicht."
        }
      ],
      "accepted": [
        "无可否认"
      ]
    },
    "related": [
      "g:毫无疑问"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:确切地说",
    "pattern": "确切地说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "genauer gesagt (Präzisierung des eben Gesagten)",
    "pinyin": "quèqiè de shuō",
    "examples": [
      {
        "chinese": "他去年离开了公司，确切地说，是被公司辞退了。",
        "pinyin": "Tā qùnián líkāi le gōngsī, quèqiè de shuō, shì bèi gōngsī cítuì le.",
        "german": "Er hat die Firma letztes Jahr verlassen – genauer gesagt wurde er entlassen."
      },
      {
        "chinese": "我们认识很久了，确切地说，已经有十二年了。",
        "pinyin": "Wǒmen rènshi hěn jiǔ le, quèqiè de shuō, yǐjīng yǒu shí'èr nián le.",
        "german": "Wir kennen uns schon lange, genauer gesagt seit zwölf Jahren."
      },
      {
        "chinese": "会议下午开始，确切地说，是两点半。",
        "pinyin": "Huìyì xiàwǔ kāishǐ, quèqiè de shuō, shì liǎng diǎn bàn.",
        "german": "Die Sitzung beginnt am Nachmittag, genauer gesagt um halb drei."
      }
    ],
    "legacyIds": [
      "确切地说"
    ],
    "formation": "Aussage，确切地说，+ genauere Aussage",
    "notes": "换句话说 (huàn jù huà shuō) formuliert denselben Inhalt anders („mit anderen Worten“), 确切地说 (quèqiè de shuō) macht ihn genauer. 严格来说 (yángé lái shuō) legt einen strengen Maßstab an („streng genommen“).",
    "explanation": "确切地说 (quèqiè de shuō) heißt „genauer gesagt“: 确切 (quèqiè) „genau, zutreffend“, 地 macht daraus ein Adverbial, 说 „sagen“. Man präzisiert oder korrigiert damit eine eben gemachte, zu ungenaue Aussage: erst die grobe Angabe, dann nach 确切地说 die exakte Zahl, Zeit oder Bezeichnung. Der Ausdruck steht deshalb meist in der Satzmitte zwischen zwei Kommas; am Satzanfang bezieht er sich auf das vorher Gesagte. Er passt in gesprochene wie geschriebene Sprache, klingt aber etwas sorgfältig-formell. Varianten: 确切地讲 (quèqiè de jiǎng), 确切来说 (quèqiè lái shuō) sowie das gleichbedeutende 准确地说 (zhǔnquè de shuō).",
    "quiz": {
      "example": 1,
      "answer": "确切地说",
      "distractors": [
        {
          "text": "总而言之",
          "reason": "总而言之 fasst mehrere Punkte zusammen; hier wird aber eine einzelne Angabe genauer gemacht."
        },
        {
          "text": "不仅如此",
          "reason": "不仅如此 kündigt einen zusätzlichen, stärkeren Punkt an; „zwölf Jahre“ ist kein neuer Punkt, sondern die genaue Zahl zu „lange“."
        },
        {
          "text": "由此看来",
          "reason": "由此看来 zieht eine Schlussfolgerung; die Zahl der Jahre folgt nicht aus „wir kennen uns lange“, sie präzisiert es."
        }
      ],
      "accepted": [
        "准确地说"
      ]
    },
    "related": [
      "g:换句话说",
      "g:严格来说",
      "g:就是说/这就是说"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不仅如此",
    "pattern": "不仅如此",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "nicht nur das, darüber hinaus (Steigerung über zwei Sätze)",
    "pinyin": "bùjǐn rúcǐ",
    "examples": [
      {
        "chinese": "他会说中文，不仅如此，他还会说日语和韩语。",
        "pinyin": "Tā huì shuō Zhōngwén, bùjǐn rúcǐ, tā hái huì shuō Rìyǔ hé Hányǔ.",
        "german": "Er spricht Chinesisch, und nicht nur das: Er spricht auch Japanisch und Koreanisch."
      },
      {
        "chinese": "这家饭馆的菜很好吃，不仅如此，价格也很便宜。",
        "pinyin": "Zhè jiā fànguǎn de cài hěn hǎochī, bùjǐn rúcǐ, jiàgé yě hěn piányi.",
        "german": "Das Essen in diesem Restaurant schmeckt sehr gut – und darüber hinaus ist es auch noch günstig."
      },
      {
        "chinese": "运动能让人保持健康，不仅如此，还能减轻压力。",
        "pinyin": "Yùndòng néng ràng rén bǎochí jiànkāng, bùjǐn rúcǐ, hái néng jiǎnqīng yālì.",
        "german": "Sport hält gesund und baut darüber hinaus auch Stress ab."
      }
    ],
    "legacyIds": [
      "不仅如此"
    ],
    "formation": "Aussage A，不仅如此，(Subjekt +) 还/也/更 + Aussage B",
    "notes": "Nicht verwechseln mit 尽管如此 (jǐnguǎn rúcǐ) „trotzdem“, das einen Gegensatz einleitet. 此外 (cǐwài) fügt neutral einen weiteren Punkt an, ohne Steigerung.",
    "explanation": "不仅如此 (bùjǐn rúcǐ) heißt „nicht nur das“: 不仅 (bùjǐn) „nicht nur“, 如此 (rúcǐ) „so, dies“ (schriftsprachlich). Es greift die vorige Aussage als Ganzes auf und kündigt einen weiteren, oft noch stärkeren Punkt an; im folgenden Satz stehen meist 还, 也 oder 更. So entsteht eine Steigerung über zwei Sätze, ohne dass man beide Teile in die Klammer 不仅 … 而且 (érqiě) packen muss. Der Ausdruck steht am Anfang des zweiten Satzes, nach Komma oder Punkt, und ist typisch für Texte, Reden und Werbung; im Gespräch sagt man auch 不但如此 (búdàn rúcǐ) oder einfach 而且.",
    "quiz": {
      "example": 1,
      "answer": "不仅如此",
      "distractors": [
        {
          "text": "尽管如此",
          "reason": "尽管如此 heißt „trotzdem“ und verlangt einen Gegensatz; gutes Essen und niedrige Preise widersprechen sich nicht."
        },
        {
          "text": "由此看来",
          "reason": "由此看来 („daraus folgt“) zieht einen Schluss; der günstige Preis folgt nicht aus dem guten Geschmack."
        },
        {
          "text": "确切地说",
          "reason": "确切地说 („genauer gesagt“) präzisiert das Vorige; der Preis ist aber ein zusätzlicher Vorzug."
        }
      ],
      "accepted": [
        "不但如此"
      ]
    },
    "related": [
      "g:不仅/不光……，还/而且……",
      "g:此外",
      "g:尽管如此"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:有利于",
    "pattern": "有利于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "förderlich für, gut für (formell)",
    "pinyin": "yǒulì yú",
    "examples": [
      {
        "chinese": "多运动有利于身体健康。",
        "pinyin": "Duō yùndòng yǒulì yú shēntǐ jiànkāng.",
        "german": "Viel Bewegung ist gut für die Gesundheit."
      },
      {
        "chinese": "这项新政策有利于中小企业的发展。",
        "pinyin": "Zhè xiàng xīn zhèngcè yǒulì yú zhōngxiǎo qǐyè de fāzhǎn.",
        "german": "Diese neue Politik fördert die Entwicklung kleiner und mittlerer Unternehmen."
      },
      {
        "chinese": "良好的睡眠有利于提高学习效率。",
        "pinyin": "Liánghǎo de shuìmián yǒulì yú tígāo xuéxí xiàolǜ.",
        "german": "Guter Schlaf hilft dabei, effizienter zu lernen."
      }
    ],
    "legacyIds": [
      "有利于"
    ],
    "formation": "Subjekt (Handlung/Maßnahme) + 有利于 + Nomen/Verbgruppe",
    "notes": "Gleichbedeutend, etwas gehobener: 有益于 (yǒuyì yú). Nicht verwechseln mit 有赖于 (yǒulài yú) „abhängen von“.",
    "explanation": "有利于 (yǒulì yú) bedeutet „ist förderlich für, nützt“: 有利 (yǒulì) „vorteilhaft“ + die schriftsprachliche Präposition 于 „für, gegenüber“. Subjekt ist meist eine Handlung, eine Maßnahme oder ein Zustand, das Objekt ein Nomen oder eine Verbgruppe – etwa „Gesundheit“ oder „die Effizienz steigern“. Der Ausdruck ist formell und sehr häufig in Nachrichten, Berichten und Aufsätzen; im Gespräch sagt man eher 对 … 有好处 (yǒu hǎochu). Typischer Fehler: beide Muster mischen – *对健康有利于. Richtig ist entweder 有利于健康 oder 对健康有利. Die Verneinung lautet 不利于 (búlì yú), nicht *没有利于.",
    "quiz": {
      "example": 0,
      "answer": "有利于",
      "distractors": [
        {
          "text": "不利于",
          "reason": "不利于 heißt „schadet“ – das Gegenteil von „ist gut für“."
        },
        {
          "text": "由于",
          "reason": "由于 („wegen“) nennt einen Grund und steht vor der Ursache, nicht als Prädikat zwischen Handlung und Nutzen."
        },
        {
          "text": "对于",
          "reason": "对于 („hinsichtlich“) ist eine Präposition und braucht danach noch ein Prädikat; allein ergibt es keinen Satz."
        }
      ],
      "accepted": [
        "有益于"
      ]
    },
    "related": [
      "g:不利于",
      "g:于",
      "g:有赖于"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不利于",
    "pattern": "不利于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "schädlich für, hinderlich für (formell)",
    "pinyin": "bùlì yú",
    "examples": [
      {
        "chinese": "经常熬夜不利于身体健康。",
        "pinyin": "Jīngcháng áoyè búlì yú shēntǐ jiànkāng.",
        "german": "Wer oft bis spät in die Nacht aufbleibt, schadet seiner Gesundheit."
      },
      {
        "chinese": "过度竞争不利于整个行业的发展。",
        "pinyin": "Guòdù jìngzhēng búlì yú zhěnggè hángyè de fāzhǎn.",
        "german": "Übermäßiger Wettbewerb behindert die Entwicklung der gesamten Branche."
      },
      {
        "chinese": "父母总是批评孩子，不利于孩子建立自信。",
        "pinyin": "Fùmǔ zǒngshì pīpíng háizi, búlì yú háizi jiànlì zìxìn.",
        "german": "Wenn Eltern ihre Kinder ständig kritisieren, erschwert das den Kindern, Selbstvertrauen aufzubauen."
      }
    ],
    "legacyIds": [
      "不利于"
    ],
    "formation": "Subjekt (Handlung/Zustand) + 不利于 + Nomen/Verbgruppe",
    "notes": "Soll „schädlich“ betont werden, passt auch 对 … 有害 (yǒuhài) „ist schädlich für“. Das positive Gegenstück 有利于 (yǒulì yú) ist ein eigener Punkt.",
    "explanation": "不利于 (búlì yú) ist das Gegenstück zu 有利于 (yǒulì yú): „ist ungünstig für, schadet, behindert“. 不利 (búlì) heißt „ungünstig“, 于 ist die schriftsprachliche Präposition „für“. Subjekt ist meist eine Handlung oder ein Zustand – oft ein ganzer Satz –, das Objekt ein Nomen oder eine Verbgruppe, etwa „Gesundheit“ oder „dass Kinder Selbstvertrauen aufbauen“. Der Ausdruck ist formell und typisch für Ratgeber, Nachrichten und Aufsätze; im Alltag sagt man 对 … 不好 (bù hǎo). Häufige Fehler: *没有利于 – die Verneinung steckt schon in 不 – und Mischformen wie *对健康不利于; richtig ist 不利于健康 oder 对健康不利.",
    "quiz": {
      "example": 0,
      "answer": "不利于",
      "distractors": [
        {
          "text": "有利于",
          "reason": "有利于 heißt „ist gut für“ – das Gegenteil von „schadet“."
        },
        {
          "text": "不至于",
          "reason": "不至于 heißt „es kommt nicht so weit, dass …“ und verlangt danach eine Folge, kein Nomen wie „Gesundheit“."
        },
        {
          "text": "不如",
          "reason": "不如 („nicht so gut wie“) vergleicht zwei Dinge; Aufbleiben und Gesundheit lassen sich so nicht vergleichen."
        }
      ]
    },
    "related": [
      "g:有利于",
      "g:于"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:其",
    "pattern": "其",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "sein, ihr, dessen, deren (schriftsprachliches Pronomen)",
    "pinyin": "qí",
    "examples": [
      {
        "chinese": "这家公司以其优质的服务而闻名。",
        "pinyin": "Zhè jiā gōngsī yǐ qí yōuzhì de fúwù ér wénmíng.",
        "german": "Diese Firma ist für ihren hervorragenden Service bekannt."
      },
      {
        "chinese": "每个学生都有其优点和缺点。",
        "pinyin": "Měi ge xuésheng dōu yǒu qí yōudiǎn hé quēdiǎn.",
        "german": "Jeder Schüler hat seine Stärken und Schwächen."
      },
      {
        "chinese": "老师耐心地帮助他，使其重新找到了学习的兴趣。",
        "pinyin": "Lǎoshī nàixīn de bāngzhù tā, shǐ qí chóngxīn zhǎodào le xuéxí de xìngqù.",
        "german": "Der Lehrer half ihm geduldig, sodass er wieder Freude am Lernen fand."
      }
    ],
    "legacyIds": [
      "其"
    ],
    "formation": "其 + Nomen (= sein/ihr …) · 使 + 其 + Verb (= ihn/sie/es … lassen)",
    "notes": "Klassische Wendungen wie 各尽其能 (gè jìn qí néng) „jeder nach seinen Fähigkeiten“ zeigen dasselbe besitzanzeigende 其.",
    "explanation": "其 (qí) ist ein Pronomen der Schriftsprache und bezieht sich immer auf etwas vorher Genanntes. Vor einem Nomen entspricht es umgangssprachlich 他的 (tā de) und den verwandten Formen: „sein, ihr, dessen, deren“, etwa „für seinen Service bekannt“. Nach 使 oder 让 vertritt es eine Person oder Sache, die zugleich das Folgende tut: 使 + 其 + Verb „bewirken, dass er/sie/es …“. Als Subjekt eines Hauptsatzes steht 其 im modernen Chinesisch nicht. Typisch ist es für Nachrichten, Berichte, Anleitungen und Fachtexte; im Gespräch klingt es steif. 其 steckt außerdem in festen Wörtern wie 其中 (qízhōng) „darunter“, 其他 (qítā) „andere“, 其次 (qícì) „zweitens“, 其实 (qíshí) „eigentlich“ und 尤其 (yóuqí) „besonders“ – dort ist es nicht mehr als Pronomen zu verstehen.",
    "quiz": {
      "example": 1,
      "answer": "其",
      "distractors": [
        {
          "text": "之",
          "reason": "之 steht als Bindeglied zwischen Attribut und Nomen (A 之 B), nicht allein als „sein“ vor einem Nomen."
        },
        {
          "text": "所",
          "reason": "所 steht vor einem Verb und macht daraus „das, was …“; vor Nomen wie „Stärken“ passt es nicht."
        },
        {
          "text": "它",
          "reason": "它 bezeichnet Dinge oder Tiere und bräuchte vor dem Nomen ein 的; für Schüler ist es falsch."
        }
      ],
      "accepted": [
        "自己的"
      ]
    },
    "related": [
      "g:其他",
      "g:之",
      "g:此"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:为…所…",
    "pattern": "为…所…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "von … (getan) werden (schriftsprachliches Passiv)",
    "pinyin": "wéi…suǒ…",
    "examples": [
      {
        "chinese": "在场的观众深深地为他的演讲所感动。",
        "pinyin": "Zàichǎng de guānzhòng shēnshēn de wéi tā de yǎnjiǎng suǒ gǎndòng.",
        "german": "Die anwesenden Zuschauer waren von seiner Rede tief bewegt."
      },
      {
        "chinese": "这个观点已经为大多数人所接受。",
        "pinyin": "Zhège guāndiǎn yǐjīng wéi dàduōshù rén suǒ jiēshòu.",
        "german": "Diese Ansicht wird inzwischen von den meisten Menschen akzeptiert."
      },
      {
        "chinese": "这位作家的早期作品很少为人所知。",
        "pinyin": "Zhè wèi zuòjiā de zǎoqī zuòpǐn hěn shǎo wéi rén suǒ zhī.",
        "german": "Die frühen Werke dieses Schriftstellers sind kaum bekannt."
      }
    ],
    "legacyIds": [
      "为…所…"
    ],
    "formation": "Subjekt + 为 + Handelnder + 所 + Verb",
    "notes": "Einfaches 所 vor dem Verb ohne 为 bildet dagegen eine Nominalisierung („das, was …“), z. B. 我所知道的 „das, was ich weiß“.",
    "explanation": "为 … 所 … ist ein Passiv aus der klassischen Schriftsprache: 为 (wéi, 2. Ton – nicht wèi „für“) führt den Handelnden ein, 所 (suǒ) steht direkt vor dem Verb – etwa „Diese Ansicht wird von den meisten akzeptiert“. Anders als bei 被 (bèi) wird der Handelnde in der Regel genannt, und nach dem Verb folgen meist keine weiteren Elemente wie 了 oder Ergänzungen; bevorzugt werden zweisilbige Verben wie 接受 (jiēshòu), 感动 (gǎndòng) oder 理解 (lǐjiě). Der Ausdruck ist formell, typisch für Nachrichten, Essays und Literatur, und steckt in festen Wendungen wie 为人所知 (wéi rén suǒ zhī) „bekannt sein“ oder 不为人知 (bù wéi rén zhī) „unbekannt“. Im Alltag nimmt man 被; die Mischform 被 … 所 … kommt in gehobener Sprache ebenfalls vor.",
    "quiz": {
      "example": 1,
      "answer": "为",
      "distractors": [
        {
          "text": "把",
          "reason": "把 stellt das Objekt vor das Verb (aktiv); hier ist die Ansicht das Ziel der Handlung, nicht der Handelnde."
        },
        {
          "text": "对",
          "reason": "对 nennt ein Gegenüber („gegenüber“) und bildet kein Passiv; mit 所 + Verb verbindet es sich nicht."
        },
        {
          "text": "让",
          "reason": "让 kann umgangssprachlich ein Passiv bilden, verbindet sich aber nicht mit dem schriftsprachlichen 所."
        }
      ],
      "accepted": [
        "被"
      ]
    },
    "related": [
      "g:被",
      "g:所",
      "g:主语+被+宾语+动词+其他成分"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:以…为主",
    "pattern": "以…为主",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "hauptsächlich aus … bestehen; der Schwerpunkt liegt auf …",
    "pinyin": "yǐ…wéi zhǔ",
    "examples": [
      {
        "chinese": "这个团队以年轻人为主。",
        "pinyin": "Zhège tuánduì yǐ niánqīngrén wéizhǔ.",
        "german": "Das Team besteht überwiegend aus jungen Leuten."
      },
      {
        "chinese": "南方人的饮食以米饭为主。",
        "pinyin": "Nánfāngrén de yǐnshí yǐ mǐfàn wéizhǔ.",
        "german": "Im Süden Chinas ernähren sich die Menschen vor allem von Reis."
      },
      {
        "chinese": "这门课以口语练习为主，语法讲得不多。",
        "pinyin": "Zhè mén kè yǐ kǒuyǔ liànxí wéizhǔ, yǔfǎ jiǎng de bù duō.",
        "german": "Dieser Kurs setzt vor allem auf Sprechübungen, Grammatik wird kaum erklärt."
      }
    ],
    "legacyIds": [
      "以…为主"
    ],
    "formation": "Subjekt + 以 + Nomen/Verbgruppe + 为主",
    "notes": "Verwandt sind das allgemeine Muster 以 A 为 B „A als B nehmen“ (z. B. 以大米为主食 „Reis als Hauptnahrung haben“) und 以 A 为例 (wéi lì) „am Beispiel von A“.",
    "explanation": "以 A 为主 (wéizhǔ) bedeutet wörtlich „A als Hauptsache nehmen“: Es sagt, woraus etwas überwiegend besteht oder worauf der Schwerpunkt liegt – etwa „Das Team besteht vor allem aus jungen Leuten“. 以 (yǐ) ist hier die schriftsprachliche Präposition „mit, als“, 为 (wéi) heißt „sein, gelten als“, 主 (zhǔ) „Haupt-“. A ist ein Nomen oder eine Verbgruppe (z. B. „Sprechen üben“). Der Ausdruck ist eher schriftlich, aber auch im Gespräch geläufig, etwa bei Kursen, Ernährung oder Zielgruppen. Erweiterung: 以 A 为主，以 B 为辅 (wéi fǔ) „vor allem A, ergänzend B“. Die Reihenfolge ist fest: 以 vor A, 为主 am Ende.",
    "quiz": {
      "example": 0,
      "answer": "为主",
      "distractors": [
        {
          "text": "为例",
          "reason": "以 … 为例 nennt ein Beispiel („am Beispiel von“) und leitet eine Erläuterung ein; als Satzende ergibt es keine Aussage über das Team."
        },
        {
          "text": "为止",
          "reason": "为止 gehört zu 到 … 为止 („bis“) und markiert eine Grenze, keinen Hauptbestandteil."
        },
        {
          "text": "主要",
          "reason": "主要 („hauptsächlich“) ist kein Verb; nach 以 + Nomen fehlt dann das Prädikat."
        }
      ]
    },
    "related": [
      "g:以…为…",
      "g:以…为例"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:一言以蔽之",
    "pattern": "一言以蔽之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "mit einem Wort, kurz gesagt (klassisch-gehoben)",
    "pinyin": "yì yán yǐ bì zhī",
    "examples": [
      {
        "chinese": "原因有很多，一言以蔽之，就是缺少沟通。",
        "pinyin": "Yuányīn yǒu hěn duō, yì yán yǐ bì zhī, jiù shì quēshǎo gōutōng.",
        "german": "Es gibt viele Gründe – mit einem Wort: Es fehlt an Kommunikation."
      },
      {
        "chinese": "他讲了一个小时，一言以蔽之，我们还需要更加努力。",
        "pinyin": "Tā jiǎng le yí ge xiǎoshí, yì yán yǐ bì zhī, wǒmen hái xūyào gèngjiā nǔlì.",
        "german": "Er hat eine Stunde lang geredet – kurz gesagt: Wir müssen uns noch mehr anstrengen."
      },
      {
        "chinese": "成功的经验各不相同，一言以蔽之，都离不开坚持。",
        "pinyin": "Chénggōng de jīngyàn gè bù xiāngtóng, yì yán yǐ bì zhī, dōu lí bu kāi jiānchí.",
        "german": "Erfolgsgeschichten sind ganz unterschiedlich, doch mit einem Wort: Ohne Ausdauer kommt keine aus."
      }
    ],
    "legacyIds": [
      "一言以蔽之"
    ],
    "formation": "ausführliche Darstellung，一言以蔽之，+ Kernaussage",
    "explanation": "一言以蔽之 (yì yán yǐ bì zhī) stammt aus dem 论语 (Lúnyǔ), den Gesprächen des Konfuzius, und heißt wörtlich „mit einem Wort deckt man es ab“: 言 „Wort“, 以 „damit“, 蔽 „bedecken“, 之 „es“. Man fasst damit vielschichtige Inhalte in einer einzigen Kernaussage zusammen. Die Wendung steht am Anfang des abschließenden Satzes, oft nach einer Aufzählung oder längeren Ausführung, und wird nicht verändert. Sie ist sehr gehoben und passt in Aufsätze, Reden und Kommentare; im Alltag wirkt sie gestelzt oder scherzhaft. Neutralere Alternativen: 总之 (zǒngzhī), 总而言之 (zǒng ér yán zhī), 简而言之 (jiǎn ér yán zhī) oder einfach 一句话 (yí jù huà).",
    "quiz": {
      "example": 0,
      "answer": "一言以蔽之",
      "distractors": [
        {
          "text": "不仅如此",
          "reason": "不仅如此 fügt einen weiteren Punkt hinzu („nicht nur das“), statt die vielen Gründe zusammenzufassen."
        },
        {
          "text": "与此同时",
          "reason": "与此同时 verbindet zwei gleichzeitige Vorgänge; hier wird nichts gleichzeitig, sondern zusammenfassend gesagt."
        },
        {
          "text": "言下之意",
          "reason": "言下之意 deckt auf, was jemand angedeutet hat; hier gibt es keine Äußerung eines anderen, die gedeutet wird."
        }
      ],
      "accepted": [
        "总而言之",
        "简而言之",
        "总之"
      ]
    },
    "related": [
      "g:总之",
      "g:总而言之",
      "g:简（而）言之"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:追根溯源",
    "pattern": "追根溯源",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "einer Sache auf den Grund gehen, bis zum Ursprung zurückverfolgen",
    "pinyin": "zhuīgēn sùyuán",
    "examples": [
      {
        "chinese": "追根溯源，这个问题的原因在于管理制度不完善。",
        "pinyin": "Zhuīgēn sùyuán, zhège wèntí de yuányīn zàiyú guǎnlǐ zhìdù bù wánshàn.",
        "german": "Geht man der Sache auf den Grund, liegt die Ursache des Problems in einem lückenhaften Verwaltungssystem."
      },
      {
        "chinese": "追根溯源，许多汉字都是从图画演变而来的。",
        "pinyin": "Zhuīgēn sùyuán, xǔduō Hànzì dōu shì cóng túhuà yǎnbiàn ér lái de.",
        "german": "Verfolgt man sie bis zu ihren Ursprüngen zurück, sind viele chinesische Schriftzeichen aus Bildern entstanden."
      },
      {
        "chinese": "出了事故以后，我们必须追根溯源，找到真正的原因。",
        "pinyin": "Chū le shìgù yǐhòu, wǒmen bìxū zhuīgēn sùyuán, zhǎodào zhēnzhèng de yuányīn.",
        "german": "Nach dem Unfall müssen wir der Sache auf den Grund gehen und die wahre Ursache finden."
      }
    ],
    "legacyIds": [
      "追根溯源"
    ],
    "formation": "追根溯源，+ eigentliche Ursache/Herkunft · Subjekt + (要/必须) + 追根溯源",
    "notes": "归根到底 (guī gēn dào dǐ) und 说到底 (shuō dào dǐ) „letzten Endes“ ziehen ein Fazit; 追根溯源 (zhuīgēn sùyuán) betont den Weg zurück zur Ursache oder Herkunft.",
    "explanation": "追根溯源 (zhuīgēn sùyuán) ist ein Chengyu: 追 „verfolgen“, 根 „Wurzel“, 溯 „flussaufwärts gehen“, 源 „Quelle“ – „die Wurzel verfolgen und zur Quelle hinaufgehen“. Am Satzanfang heißt es „geht man der Sache auf den Grund, …“ und leitet die eigentliche Ursache oder die Herkunft von etwas ein. Als Prädikat bedeutet es „etwas bis zum Ursprung zurückverfolgen“, oft nach 要 oder 必须 (bìxū). Der Ausdruck ist schriftsprachlich und typisch für Analysen, Berichte und Sachtexte über Geschichte, Sprache oder Probleme. Gleichbedeutend: 追本溯源 (zhuīběn sùyuán).",
    "quiz": {
      "example": 2,
      "answer": "追根溯源",
      "distractors": [
        {
          "text": "一言以蔽之",
          "reason": "一言以蔽之 („kurz gesagt“) ist eine Einleitungsformel, keine Handlung; nach 必须 braucht man ein Verb."
        },
        {
          "text": "毫无疑问",
          "reason": "毫无疑问 („zweifellos“) ist ein Satzadverb und kann nach 必须 nicht als Handlung stehen."
        },
        {
          "text": "由此看来",
          "reason": "由此看来 leitet eine Schlussfolgerung ein und ist kein Prädikat; „müssen“ verlangt eine Tätigkeit."
        }
      ],
      "accepted": [
        "追本溯源"
      ]
    },
    "related": [
      "g:归根到底",
      "g:说到底"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:毫无疑问",
    "pattern": "毫无疑问",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "zweifellos, ohne jeden Zweifel (Überzeugung des Sprechers)",
    "pinyin": "háo wú yíwèn",
    "examples": [
      {
        "chinese": "毫无疑问，他是我们班最优秀的学生之一。",
        "pinyin": "Háo wú yíwèn, tā shì wǒmen bān zuì yōuxiù de xuésheng zhī yī.",
        "german": "Ohne jeden Zweifel ist er einer der besten Schüler unserer Klasse."
      },
      {
        "chinese": "这毫无疑问是一次巨大的进步。",
        "pinyin": "Zhè háo wú yíwèn shì yí cì jùdà de jìnbù.",
        "german": "Das ist zweifellos ein enormer Fortschritt."
      },
      {
        "chinese": "毫无疑问，这次比赛的冠军会是中国队。",
        "pinyin": "Háo wú yíwèn, zhè cì bǐsài de guànjūn huì shì Zhōngguó duì.",
        "german": "Ohne Zweifel wird die chinesische Mannschaft dieses Turnier gewinnen."
      }
    ],
    "legacyIds": [
      "毫无疑问"
    ],
    "formation": "毫无疑问，+ Aussage · Subjekt + 毫无疑问 + (是) + Prädikat",
    "notes": "不可否认 (bùkě fǒurèn) räumt eine Tatsache ein („zugegeben …“), 毫无疑问 (háo wú yíwèn) bekräftigt die eigene Einschätzung.",
    "explanation": "毫无疑问 (háo wú yíwèn) heißt „ohne den geringsten Zweifel“: 毫 „nicht im Geringsten“ (nur in verneinten Ausdrücken), 无 „ohne“, 疑问 (yíwèn) „Zweifel, Frage“. Der Sprecher drückt damit seine feste Überzeugung aus. Der Ausdruck steht am Satzanfang mit Komma oder zwischen Subjekt und Prädikat, oft vor 是 („Das ist zweifellos …“). Er ist eher schriftlich oder formell-mündlich (Reden, Kommentare, Sportberichte); im Alltag sagt man 肯定 (kěndìng) oder 一定 (yídìng). Kürzer und ebenso formell: 无疑 (wúyí). Das Muster 毫无 (háo wú) + zweisilbiges Nomen ist produktiv: 毫无意义 (háo wú yìyì) „völlig sinnlos“, 毫无兴趣 (háo wú xìngqù) „keinerlei Interesse“.",
    "quiz": {
      "example": 1,
      "answer": "毫无疑问",
      "distractors": [
        {
          "text": "不难看出",
          "reason": "不难看出 steht am Satzanfang und leitet einen Schluss ein; zwischen 这 und 是 kann es nicht stehen."
        },
        {
          "text": "一言以蔽之",
          "reason": "一言以蔽之 fasst eine längere Darstellung zusammen und steht am Satzanfang, nicht zwischen Subjekt und 是."
        },
        {
          "text": "由此看来",
          "reason": "由此看来 braucht vorher genannte Fakten und steht am Satzanfang; als Einschub zwischen 这 und 是 passt es nicht."
        }
      ],
      "accepted": [
        "无疑"
      ]
    },
    "related": [
      "g:不可否认"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不证自明",
    "pattern": "不证自明",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "selbstverständlich, keines Beweises bedürftig",
    "pinyin": "bù zhèng zì míng",
    "examples": [
      {
        "chinese": "这个道理是不证自明的。",
        "pinyin": "Zhège dàolǐ shì bú zhèng zì míng de.",
        "german": "Dieser Grundsatz versteht sich von selbst."
      },
      {
        "chinese": "数学中有一些不证自明的公理。",
        "pinyin": "Shùxué zhōng yǒu yìxiē bú zhèng zì míng de gōnglǐ.",
        "german": "In der Mathematik gibt es einige Axiome, die keines Beweises bedürfen."
      },
      {
        "chinese": "健康比金钱更重要，这在很多人看来是不证自明的。",
        "pinyin": "Jiànkāng bǐ jīnqián gèng zhòngyào, zhè zài hěn duō rén kànlái shì bú zhèng zì míng de.",
        "german": "Dass Gesundheit wichtiger ist als Geld, gilt für viele Menschen als selbstverständlich."
      }
    ],
    "legacyIds": [
      "不证自明"
    ],
    "formation": "Subjekt + 是 + 不证自明的 · 不证自明的 + Nomen",
    "explanation": "不证自明 (bú zhèng zì míng) heißt wörtlich „ohne Beweis von selbst klar“: 证 „beweisen“, 自 „von selbst“, 明 „klar“. Es beschreibt Wahrheiten oder Grundsätze, die keiner Begründung bedürfen, und kommt aus Philosophie und Logik – ein Axiom heißt 公理 (gōnglǐ) und wird oft so charakterisiert. Der Ausdruck steht als Prädikat (meist mit 是 … 的) oder als Attribut vor einem Nomen. Er ist ausgesprochen schriftsprachlich und eher selten; in Aufsätzen und Diskussionen ist 不言而喻 (bù yán ér yù) „versteht sich von selbst“ deutlich häufiger, für sichtbare Tatsachen auch 显而易见 (xiǎn ér yì jiàn) „offensichtlich“.",
    "quiz": {
      "example": 1,
      "answer": "不证自明",
      "distractors": [
        {
          "text": "追根溯源",
          "reason": "追根溯源 bedeutet „bis zum Ursprung zurückverfolgen“ und beschreibt eine Tätigkeit, keine Eigenschaft von Axiomen."
        },
        {
          "text": "一言以蔽之",
          "reason": "一言以蔽之 („kurz gesagt“) ist eine Einleitungsformel und kann nicht als Attribut vor einem Nomen stehen."
        },
        {
          "text": "言下之意",
          "reason": "言下之意 ist selbst ein Nomen („das Gemeinte“) und beschreibt nicht, dass etwas keines Beweises bedarf."
        }
      ],
      "accepted": [
        "不言而喻"
      ]
    },
    "related": [
      "g:毫无疑问"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:言下之意",
    "pattern": "言下之意",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "was damit gemeint ist; die unausgesprochene Botschaft",
    "pinyin": "yán xià zhī yì",
    "examples": [
      {
        "chinese": "老板说我们还有很大的进步空间，言下之意是我们做得不够好。",
        "pinyin": "Lǎobǎn shuō wǒmen hái yǒu hěn dà de jìnbù kōngjiān, yán xià zhī yì shì wǒmen zuò de bú gòu hǎo.",
        "german": "Der Chef sagte, wir hätten noch viel Luft nach oben – gemeint war, dass wir nicht gut genug waren."
      },
      {
        "chinese": "她说最近很忙，言下之意，这次聚会她不来了。",
        "pinyin": "Tā shuō zuìjìn hěn máng, yán xià zhī yì, zhè cì jùhuì tā bù lái le.",
        "german": "Sie sagte, sie sei zurzeit sehr beschäftigt – heißt im Klartext: Zu diesem Treffen kommt sie nicht."
      },
      {
        "chinese": "你的言下之意是我错了吗？",
        "pinyin": "Nǐ de yán xià zhī yì shì wǒ cuò le ma?",
        "german": "Willst du damit andeuten, dass ich falschliege?"
      }
    ],
    "legacyIds": [
      "言下之意"
    ],
    "formation": "(Person + 的) 言下之意是 + Inhalt · Äußerung，言下之意，+ Inhalt",
    "notes": "Sehr ähnlich ist 言外之意 (yán wài zhī yì) „was zwischen den Zeilen steht“. 换句话说 (huàn jù huà shuō) formuliert dagegen offen Gesagtes nur um.",
    "explanation": "言下之意 (yán xià zhī yì) bedeutet „der Sinn unter den Worten“: 言 „Worte“, 下 „unter“, 之 entspricht 的, 意 „Bedeutung“. Man deckt damit auf, was jemand angedeutet, aber nicht direkt ausgesprochen hat – oft Kritik, eine Absage oder eine Bitte. Typisch ist die Folge: Äußerung wiedergeben, dann 言下之意 und der eigentliche Inhalt, entweder mit 是 oder nach einem Komma. Mit 的 lässt es sich einer Person zuordnen („seine eigentliche Botschaft ist …“); als Rückfrage an das Gegenüber wirkt es leicht vorwurfsvoll. Der Ausdruck ist in Gespräch und Text verbreitet. Für die eigene Meinung sagt man dagegen 我的意思是 (wǒ de yìsi shì).",
    "quiz": {
      "example": 1,
      "answer": "言下之意",
      "distractors": [
        {
          "text": "不仅如此",
          "reason": "不仅如此 steigert eine Aussage („nicht nur das“); hier wird aber gedeutet, was ihre Worte eigentlich bedeuten."
        },
        {
          "text": "与此同时",
          "reason": "与此同时 verbindet zwei gleichzeitige Vorgänge; das Fernbleiben ist kein paralleler Vorgang, sondern die versteckte Botschaft."
        },
        {
          "text": "追根溯源",
          "reason": "追根溯源 verfolgt eine Ursache oder Herkunft zurück; um die Deutung einer Äußerung geht es dabei nicht."
        }
      ],
      "accepted": [
        "言外之意"
      ]
    },
    "related": [
      "g:换句话说",
      "g:说白了"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:由此看来",
    "pattern": "由此看来",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "daraus folgt; so gesehen (Schlussfolgerung aus Genanntem)",
    "pinyin": "yóucǐ kànlái",
    "examples": [
      {
        "chinese": "他三次考试都是第一名，由此看来，他的学习方法很有效。",
        "pinyin": "Tā sān cì kǎoshì dōu shì dì yī míng, yóucǐ kànlái, tā de xuéxí fāngfǎ hěn yǒuxiào.",
        "german": "Er war in drei Prüfungen jedes Mal der Beste – seine Lernmethode ist also offenbar sehr wirksam."
      },
      {
        "chinese": "最近报名的人越来越多，由此看来，这个活动很受欢迎。",
        "pinyin": "Zuìjìn bàomíng de rén yuè lái yuè duō, yóucǐ kànlái, zhège huódòng hěn shòu huānyíng.",
        "german": "In letzter Zeit melden sich immer mehr Leute an – die Veranstaltung ist also offenbar sehr beliebt."
      },
      {
        "chinese": "地上都是湿的，由此看来，昨天夜里下过雨。",
        "pinyin": "Dìshang dōu shì shī de, yóucǐ kànlái, zuótiān yèli xià guo yǔ.",
        "german": "Der Boden ist überall nass – es hat also wohl letzte Nacht geregnet."
      }
    ],
    "legacyIds": [
      "由此看来"
    ],
    "formation": "Fakten，由此看来，+ Schlussfolgerung",
    "notes": "看来 (kànlái) allein (HSK 3) gibt einen Eindruck wieder („anscheinend“); 由此看来 (yóucǐ kànlái) betont, dass der Schluss auf den eben genannten Fakten beruht. 不难看出 (bù nán kànchū) hebt hervor, dass der Schluss leicht zu ziehen ist.",
    "explanation": "由此看来 (yóucǐ kànlái) heißt „von hier aus betrachtet, daraus ergibt sich“: 由此 (yóucǐ) „daraus, hiervon“ (schriftsprachlich), 看来 (kànlái) „wie es aussieht“. Der Ausdruck zieht eine Schlussfolgerung aus Tatsachen, die gerade genannt wurden, und steht deshalb am Anfang des zweiten Satzes oder Absatzes – nie ohne Vorlauf. Typisch für Aufsätze, Analysen, Berichte und sachliche Diskussionen. Im Gespräch sagt man eher 这么看来 (zhème kànlái) oder nur 看来. Gleichbedeutend und knapper: 由此可见 (yóucǐ kějiàn) „daraus ist ersichtlich“.",
    "quiz": {
      "example": 1,
      "answer": "由此看来",
      "distractors": [
        {
          "text": "与此同时",
          "reason": "与此同时 nennt einen gleichzeitigen Vorgang; die Beliebtheit ist aber die Folgerung aus den Anmeldungen."
        },
        {
          "text": "尽管如此",
          "reason": "尽管如此 („trotzdem“) verlangt einen Gegensatz; viele Anmeldungen und Beliebtheit widersprechen sich nicht."
        },
        {
          "text": "言下之意",
          "reason": "言下之意 deutet, was jemand angedeutet hat; hier hat niemand etwas gesagt, es wird aus Fakten gefolgert."
        }
      ],
      "accepted": [
        "由此可见",
        "这么看来"
      ]
    },
    "related": [
      "g:看来",
      "g:不难看出",
      "g:此"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:从…出发",
    "pattern": "从…出发",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Präpositionen",
    "meaning": "ausgehend von (Grundlage oder Gesichtspunkt einer Handlung)",
    "pinyin": "cóng…chūfā",
    "examples": [
      {
        "chinese": "我们应该从实际出发来解决问题。",
        "pinyin": "Wǒmen yīnggāi cóng shíjì chūfā lái jiějué wèntí.",
        "german": "Wir sollten Probleme ausgehend von den tatsächlichen Gegebenheiten lösen."
      },
      {
        "chinese": "从学生的需要出发，学校调整了课程安排。",
        "pinyin": "Cóng xuésheng de xūyào chūfā, xuéxiào tiáozhěng le kèchéng ānpái.",
        "german": "Ausgehend von den Bedürfnissen der Schüler hat die Schule den Stundenplan angepasst."
      },
      {
        "chinese": "做决定时，他总是从家人的利益出发。",
        "pinyin": "Zuò juédìng shí, tā zǒngshì cóng jiārén de lìyì chūfā.",
        "german": "Bei Entscheidungen geht er immer von den Interessen seiner Familie aus."
      }
    ],
    "legacyIds": [
      "从…出发"
    ],
    "formation": "从 + Grundlage/Standpunkt + 出发，+ Handlung",
    "notes": "Der wörtliche Gebrauch (从 + Ort + 出发 (chūfā) „von … aus aufbrechen“) gehört zum Wort selbst; dieser Punkt behandelt die übertragene Bedeutung.",
    "explanation": "出发 (chūfā) heißt wörtlich „aufbrechen, losfahren“ – 从北京出发 „von Peking aus losfahren“. Im übertragenen Sinn nennt 从 … 出发 den Ausgangspunkt oder Maßstab für Denken und Handeln: „von den tatsächlichen Gegebenheiten ausgehen“, „aus der Perspektive von …“ mit 角度 (jiǎodù), „im Interesse von …“ mit 利益 (lìyì). Danach folgt die Handlung, oft mit 来 + Verb angeschlossen oder als eigener Satzteil nach einem Komma. Typisch für Politik, Arbeitswelt und Aufsätze; der Ausdruck klingt sachlich-formell. Nicht verwechseln mit 从 … 来看 (lái kàn) „von … aus betrachtet“, das ein Urteil einleitet statt einer Handlung.",
    "quiz": {
      "example": 0,
      "answer": "出发",
      "distractors": [
        {
          "text": "来看",
          "reason": "从 … 来看 leitet ein Urteil ein („von … aus betrachtet“); mit dem folgenden 来解决问题 entsteht ein doppeltes 来 und kein Ausgangspunkt einer Handlung."
        },
        {
          "text": "为主",
          "reason": "为主 gehört zu 以 … 为主 („hauptsächlich“) und verbindet sich nicht mit 从."
        },
        {
          "text": "以来",
          "reason": "从 … 以来 heißt „seit“ und braucht einen Zeitpunkt; „die Realität“ ist keiner."
        }
      ]
    },
    "related": [
      "g:在……看来",
      "g:对……来说"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:无外乎",
    "pattern": "无外乎",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "nichts anderes als; läuft auf … hinaus (Reduktion auf wenige Punkte)",
    "pinyin": "wúwàihū",
    "examples": [
      {
        "chinese": "他辞职的原因无外乎工资太低。",
        "pinyin": "Tā cízhí de yuányīn wúwàihū gōngzī tài dī.",
        "german": "Der Grund für seine Kündigung ist im Grunde nur das zu niedrige Gehalt."
      },
      {
        "chinese": "学好外语的方法无外乎多听、多说、多练。",
        "pinyin": "Xuéhǎo wàiyǔ de fāngfǎ wúwàihū duō tīng, duō shuō, duō liàn.",
        "german": "Der Weg zu einer guten Fremdsprache besteht im Grunde nur aus viel Hören, viel Sprechen und viel Üben."
      },
      {
        "chinese": "周末他做的事情无外乎两件：睡觉和打游戏。",
        "pinyin": "Zhōumò tā zuò de shìqing wúwàihū liǎng jiàn: shuìjiào hé dǎ yóuxì.",
        "german": "Am Wochenende macht er eigentlich nur zwei Dinge: schlafen und zocken."
      }
    ],
    "legacyIds": [
      "无外乎",
      "g:不外乎",
      "不外乎"
    ],
    "related": [
      "g:无非",
      "g:无非/不过/只是……罢了/而已"
    ],
    "formation": "Subjekt + 无外乎 + Nomen/Verbgruppe/Aufzählung",
    "notes": "无非 (wúfēi) ist ähnlich, klingt aber oft abwertend („bloß, nichts weiter als“) und verbindet sich gern mit 罢了 (bàle) oder 而已 (éryǐ); 无外乎 (wúwàihū) und 不外乎 (búwàihū) stellen eher sachlich fest, dass die Aufzählung vollständig ist.",
    "explanation": "无外乎 (wúwàihū) bedeutet „geht nicht über … hinaus“: 无 „nicht“, 外 „außerhalb“, 乎 entspricht dem klassischen 于. Damit reduziert man etwas auf wenige, oft aufgezählte Punkte – typische Subjekte sind Gründe, Methoden oder Möglichkeiten. Es steht als Prädikat nach dem Subjekt; danach folgen Nomen, Verbgruppen oder eine Aufzählung, gern mit Zahl („zwei Dinge“). Der Ton ist sachlich-zusammenfassend, in Texten und gehobener Rede. Die Normform ist 不外乎 (búwàihū); 无外乎 ist eine sehr verbreitete Mischform aus 不外乎 und 无非 (wúfēi), die Wörterbücher und Lektorate oft als nicht normgerecht ansehen – in sorgfältigen Texten ist 不外乎 sicherer.",
    "quiz": {
      "example": 1,
      "answer": "无外乎",
      "distractors": [
        {
          "text": "不至于",
          "reason": "不至于 heißt „es kommt nicht so weit, dass …“ und passt nicht zu einer Aufzählung von Methoden."
        },
        {
          "text": "除了",
          "reason": "除了 („außer“) braucht im Satz ein 还/都 als Gegenstück und ist kein Prädikat; der Satz bliebe unvollständig."
        },
        {
          "text": "至于",
          "reason": "至于 („was … betrifft“) leitet ein neues Thema am Satzanfang ein und kann nicht als Prädikat nach dem Subjekt stehen."
        }
      ],
      "accepted": [
        "不外乎",
        "无非是"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:以…为例",
    "pattern": "以…为例",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "am Beispiel von; nehmen wir … als Beispiel",
    "pinyin": "yǐ…wéi lì",
    "examples": [
      {
        "chinese": "很多大城市的房价都很高，以北京为例，房价十年里翻了一番。",
        "pinyin": "Hěn duō dà chéngshì de fángjià dōu hěn gāo, yǐ Běijīng wéi lì, fángjià shí nián lǐ fān le yì fān.",
        "german": "In vielen Großstädten sind die Wohnungspreise hoch – in Peking zum Beispiel haben sie sich innerhalb von zehn Jahren verdoppelt."
      },
      {
        "chinese": "以德国为例，垃圾分类已经成为人们的生活习惯。",
        "pinyin": "Yǐ Déguó wéi lì, lājī fēnlèi yǐjīng chéngwéi rénmen de shēnghuó xíguàn.",
        "german": "Nehmen wir Deutschland als Beispiel: Dort gehört Mülltrennung längst zum Alltag."
      },
      {
        "chinese": "老师以自己的经历为例，告诉我们坚持的重要性。",
        "pinyin": "Lǎoshī yǐ zìjǐ de jīnglì wéi lì, gàosu wǒmen jiānchí de zhòngyàoxìng.",
        "german": "Am Beispiel seiner eigenen Erfahrungen zeigte uns der Lehrer, wie wichtig Ausdauer ist."
      }
    ],
    "legacyIds": [
      "以…为例"
    ],
    "formation": "以 + Beispiel + 为例，+ Erläuterung",
    "explanation": "以 A 为例 (wéi lì) heißt „A als Beispiel nehmen“: 以 (yǐ) „mit, als“, 为 (wéi) „sein“, 例 „Beispiel“. Man veranschaulicht damit eine allgemeine Aussage an einem konkreten Fall; der Ausdruck steht meist am Anfang des Satzes, der das Beispiel ausführt, oft direkt nach der allgemeinen Behauptung. Er ist sachlich-formell und typisch für Vorträge, Aufsätze, Berichte und Unterricht; im Gespräch sagt man eher 拿 … 来说 (lái shuō) oder 比如 (bǐrú). Mit Subjekt wird daraus eine Ankündigung: „Nehmen wir Peking als Beispiel“. Achtung: 以 … 为例 nennt ein Beispiel, 以 … 为主 (wéizhǔ) dagegen den Hauptbestandteil.",
    "quiz": {
      "example": 1,
      "answer": "为例",
      "distractors": [
        {
          "text": "为主",
          "reason": "以 … 为主 sagt, woraus etwas hauptsächlich besteht; Deutschland wird hier aber als Beispiel angeführt."
        },
        {
          "text": "为止",
          "reason": "为止 gehört zu 到 … 为止 („bis“) und markiert eine Grenze, kein Beispiel."
        },
        {
          "text": "例如",
          "reason": "例如 („zum Beispiel“) steht direkt vor dem Beispiel und verbindet sich nicht mit 以 … am Ende."
        }
      ]
    },
    "related": [
      "g:拿……来说",
      "g:以…为主",
      "g:以…为…"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:之所以…在于…",
    "pattern": "之所以…在于…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "dass …, liegt daran, dass … (Folge vorn, Grund betont nachgestellt)",
    "pinyin": "zhī suǒyǐ…zàiyú…",
    "examples": [
      {
        "chinese": "他之所以成功，在于他从不放弃。",
        "pinyin": "Tā zhīsuǒyǐ chénggōng, zàiyú tā cóng bú fàngqì.",
        "german": "Dass er Erfolg hat, liegt daran, dass er nie aufgibt."
      },
      {
        "chinese": "这家小店之所以受欢迎，主要在于价格便宜、服务热情。",
        "pinyin": "Zhè jiā xiǎo diàn zhīsuǒyǐ shòu huānyíng, zhǔyào zàiyú jiàgé piányi, fúwù rèqíng.",
        "german": "Dass dieser kleine Laden so beliebt ist, liegt vor allem an den günstigen Preisen und dem freundlichen Service."
      },
      {
        "chinese": "这个问题之所以难解决，在于涉及的部门太多。",
        "pinyin": "Zhège wèntí zhīsuǒyǐ nán jiějué, zàiyú shèjí de bùmén tài duō.",
        "german": "Dieses Problem ist vor allem deshalb schwer zu lösen, weil zu viele Abteilungen beteiligt sind."
      }
    ],
    "legacyIds": [
      "之所以…在于…"
    ],
    "formation": "Subjekt + 之所以 + Ergebnis，(主要/就) 在于 + Grund",
    "notes": "Gleichbedeutend, aber etwas weniger formell ist 之所以 (zhīsuǒyǐ) … 是因为 (shì yīnwèi) …, ein eigener Zusatzpunkt. 在于 (zàiyú) kommt auch ohne 之所以 vor: 问题在于…… „das Problem liegt darin, dass …“.",
    "explanation": "之所以 (zhīsuǒyǐ) stellt eine bekannte Tatsache oder ein Ergebnis voran, 在于 (zàiyú) „liegt in“ nennt danach den eigentlichen Grund: „Dass A, liegt (vor allem) an B.“ Anders als bei 因为 (yīnwèi) … 所以 (suǒyǐ) … steht die Folge vorn; der Grund wird als Erklärung nachgereicht und dadurch betont. Hinter 在于 steht oft eine Nominalphrase (在于他的坚持), es kann aber auch ein ganzer Satz folgen. Häufig wird 在于 durch 主要 (zhǔyào) „hauptsächlich“ oder 就 verstärkt. Das Subjekt steht normalerweise vor 之所以. Der Stil ist schriftlich bzw. gehoben (Aufsätze, Reden, Analysen).",
    "quiz": {
      "example": 0,
      "answer": "在于",
      "distractors": [
        {
          "text": "所以",
          "reason": "所以 leitet eine Folge ein; nach dem 之所以-Teil muss aber der Grund folgen."
        },
        {
          "text": "因此",
          "reason": "因此 „deshalb“ kündigt ebenfalls eine Folge an, nicht den Grund für das vorher genannte Ergebnis."
        },
        {
          "text": "由于",
          "reason": "由于 allein kann nicht auf 之所以 antworten; möglich wäre nur 是由于 – 在于 bzw. 是因为 ist nötig."
        }
      ],
      "accepted": [
        "是因为"
      ]
    },
    "related": [
      "g:之所以…是因为…",
      "g:因为……，所以……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:说到底",
    "pattern": "说到底",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "letzten Endes, im Grunde (Kern der Sache)",
    "pinyin": "shuō dào dǐ",
    "examples": [
      {
        "chinese": "说到底，还是钱的问题。",
        "pinyin": "Shuōdàodǐ, háishi qián de wèntí.",
        "german": "Letzten Endes geht es doch ums Geld."
      },
      {
        "chinese": "说到底，学语言靠的是每天练习。",
        "pinyin": "Shuōdàodǐ, xué yǔyán kào de shì měi tiān liànxí.",
        "german": "Im Grunde kommt es beim Sprachenlernen auf das tägliche Üben an."
      },
      {
        "chinese": "他们经常吵架，说到底是因为互相不信任。",
        "pinyin": "Tāmen jīngcháng chǎojià, shuōdàodǐ shì yīnwèi hùxiāng bú xìnrèn.",
        "german": "Dass sie sich ständig streiten, liegt letztlich daran, dass sie einander nicht vertrauen."
      }
    ],
    "legacyIds": [
      "说到底"
    ],
    "formation": "说到底，+ Kernaussage (oft mit 还是/就是)",
    "notes": "Ähnlich, aber mit anderem Akzent: 毕竟 (bìjìng) „schließlich, immerhin“ begründet mit einer unbestreitbaren Tatsache; 总的来说 (zǒng de láishuō) fasst zusammen, statt auf den Kern zu reduzieren.",
    "explanation": "说到底 (shuōdàodǐ) ist ein Diskursmarker vor allem der gesprochenen Sprache: Nach dem Abwägen verschiedener Gesichtspunkte bringt der Sprecher die Sache auf ihren eigentlichen Kern – „letzten Endes“, „im Grunde“. Er steht meist am Satzanfang, durch Komma abgetrennt, kann aber auch nach dem Thema stehen (这件事说到底是……). Häufig folgen 还是 (háishi) oder 就是 (jiùshì): 说到底还是钱的问题. Die gehobenere Entsprechung ist 归根到底 (guīgēn dàodǐ). Nicht verwechseln mit 到底 (dàodǐ) allein, das in Fragen „denn eigentlich?“ bedeutet.",
    "quiz": {
      "example": 0,
      "answer": "说到底",
      "distractors": [
        {
          "text": "比如说",
          "reason": "比如说 leitet ein Beispiel ein, keine abschließende Kernaussage („letzten Endes“)."
        },
        {
          "text": "据说",
          "reason": "据说 „man sagt“ gibt Hörensagen wieder, nicht das eigene Fazit."
        },
        {
          "text": "首先",
          "reason": "首先 „zuerst“ eröffnet eine Aufzählung, bringt die Sache aber nicht auf den Punkt."
        }
      ],
      "accepted": [
        "归根到底"
      ]
    },
    "related": [
      "g:归根到底",
      "g:毕竟",
      "g:总的来说"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:说起来容易做起来难",
    "pattern": "说起来容易做起来难",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "leichter gesagt als getan",
    "pinyin": "shuō qǐlái róngyì zuò qǐlái nán",
    "examples": [
      {
        "chinese": "减肥这件事，说起来容易，做起来难。",
        "pinyin": "Jiǎnféi zhè jiàn shì, shuō qǐlai róngyì, zuò qǐlai nán.",
        "german": "Abnehmen ist leichter gesagt als getan."
      },
      {
        "chinese": "每天早起说起来容易做起来难。",
        "pinyin": "Měi tiān zǎoqǐ shuō qǐlai róngyì zuò qǐlai nán.",
        "german": "Jeden Tag früh aufstehen – das ist leichter gesagt als getan."
      },
      {
        "chinese": "改掉坏习惯说起来容易，做起来可难了。",
        "pinyin": "Gǎidiào huài xíguàn shuō qǐlai róngyì, zuò qǐlai kě nán le.",
        "german": "Schlechte Angewohnheiten abzulegen ist viel leichter gesagt als getan."
      }
    ],
    "legacyIds": [
      "说起来容易做起来难"
    ],
    "formation": "Vorhaben + 说起来容易，做起来难",
    "notes": "Nicht verwechseln mit 起来 (qǐlai) als Richtungskomplement wie in 站起来 (zhàn qǐlai) „aufstehen“ oder als Beginn einer Handlung (笑起来 „anfangen zu lachen“).",
    "explanation": "Feste Wendung aus zwei parallelen Teilen mit 起来 (qǐlai) in der Bedeutung „wenn man es … tut“: 说起来 „wenn man darüber redet“, 做起来 „wenn man es tatsächlich tut“. Das Thema – eine Handlung oder ein Vorhaben – steht davor. Meist trennt ein Komma die beiden Teile, gelegentlich verstärkt durch 可 oder 但 (做起来可难了). Dahinter steht dieselbe Struktur wie bei 看起来 (kàn qǐlai), 听起来 (tīng qǐlai) oder 用起来 + Adjektiv: Bewertung bzw. Eindruck beim Tun. Deshalb lässt sich die Wendung frei abwandeln: 看起来简单，做起来难 „sieht einfach aus, ist aber schwer“. In Gespräch und Text gleichermaßen gebräuchlich.",
    "quiz": {
      "example": 0,
      "answer": "做起来",
      "distractors": [
        {
          "text": "做下去",
          "reason": "下去 drückt das Weitermachen aus („weiter tun“), nicht die Bewertung beim Tun."
        },
        {
          "text": "看起来",
          "reason": "看起来 bewertet den Anschein („sieht schwer aus“); der Gegensatz Reden – Tun („leichter gesagt als getan“) ginge verloren."
        },
        {
          "text": "做过",
          "reason": "过 markiert eine frühere Erfahrung und kann nicht mit einem Adjektiv eine Bewertung ausdrücken."
        }
      ]
    },
    "related": [
      "g:看起来"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:…也就罢了",
    "pattern": "…也就罢了",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "… mag ja noch angehen, aber (dann auch noch) …",
    "pinyin": "…yě jiù bà le",
    "examples": [
      {
        "chinese": "迟到也就罢了，他连一句道歉都没有。",
        "pinyin": "Chídào yě jiù bàle, tā lián yí jù dàoqiàn dōu méiyǒu.",
        "german": "Dass er zu spät kommt, mag ja noch angehen – aber nicht einmal eine Entschuldigung!"
      },
      {
        "chinese": "你不帮忙也就罢了，还在这儿添乱。",
        "pinyin": "Nǐ bù bāngmáng yě jiù bàle, hái zài zhèr tiānluàn.",
        "german": "Dass du nicht hilfst, ginge ja noch, aber du machst hier auch noch Chaos."
      },
      {
        "chinese": "东西贵一点也就罢了，质量竟然这么差。",
        "pinyin": "Dōngxi guì yìdiǎn yě jiù bàle, zhìliàng jìngrán zhème chà.",
        "german": "Dass die Sachen etwas teurer sind, wäre ja in Ordnung, aber die Qualität ist auch noch so schlecht."
      }
    ],
    "legacyIds": [
      "…也就罢了"
    ],
    "formation": "A + 也就罢了，(还/竟然/居然) + schlimmeres B",
    "notes": "Abgrenzung: ……罢了 (bàle) / 而已 (éryǐ) am Satzende heißt „nur, weiter nichts“ (我只是随便说说罢了, eigener HSK-7–9-Punkt); 也罢 (yěbà) kann auch paarig stehen (去也罢，不去也罢 „ob man geht oder nicht“).",
    "explanation": "罢了 (bàle) heißt „dann sei es eben“. Mit 也就罢了 räumt der Sprecher ein, dass ein erster Missstand A noch hinnehmbar wäre, um dann mit 还 (hái), 竟然 (jìngrán) oder 居然 (jūrán) einen schlimmeren Punkt B nachzuschieben: „Dass A, mag ja noch angehen – aber dass auch noch B!“ Der Satz drückt Unmut oder einen Vorwurf aus. Die Wendung kann auch ohne zweiten Teil am Satzende stehen: 你不想去也就罢了 „Wenn du nicht willst, dann eben nicht.“ Umgangssprachlicher ist ……也就算了; 倒也罢了 ist eine Variante. In Gespräch und Erzähltext gebräuchlich.",
    "quiz": {
      "example": 1,
      "answer": "也就罢了",
      "distractors": [
        {
          "text": "而已",
          "reason": "而已 „nur, weiter nichts“ spielt eine Aussage herunter, räumt aber nichts ein, worauf ein Vorwurf folgen könnte."
        },
        {
          "text": "也好",
          "reason": "也好 steht paarig (A也好，B也好) oder heißt „auch gut“; es leitet keinen gesteigerten Vorwurf ein."
        },
        {
          "text": "就是了",
          "reason": "就是了 „dann eben, und fertig“ beschwichtigt oder fordert auf, ist aber kein Zugeständnis vor einem schlimmeren Punkt."
        }
      ],
      "accepted": [
        "也就算了"
      ]
    },
    "related": [
      "g:也罢",
      "g:语气助词@HSK7-9",
      "g:无非/不过/只是……罢了/而已"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:严格来说",
    "pattern": "严格来说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "streng genommen, genau genommen",
    "pinyin": "yángé lái shuō",
    "examples": [
      {
        "chinese": "严格来说，他还不是正式员工。",
        "pinyin": "Yángé láishuō, tā hái bú shì zhèngshì yuángōng.",
        "german": "Streng genommen ist er noch kein fest angestellter Mitarbeiter."
      },
      {
        "chinese": "严格来说，花生不是坚果，而是豆类。",
        "pinyin": "Yángé láishuō, huāshēng bú shì jiānguǒ, ér shì dòulèi.",
        "german": "Genau genommen ist die Erdnuss keine Nuss, sondern eine Hülsenfrucht."
      },
      {
        "chinese": "严格来说，这篇文章还不能算完成。",
        "pinyin": "Yángé láishuō, zhè piān wénzhāng hái bù néng suàn wánchéng.",
        "german": "Streng genommen kann man diesen Aufsatz noch nicht als fertig bezeichnen."
      }
    ],
    "legacyIds": [
      "严格来说"
    ],
    "formation": "严格来说，+ Aussage nach genauer Definition",
    "notes": "Gegenstück: 大致说来 (dàzhì shuōlái) / 总的来说 (zǒng de láishuō) sehen bewusst über Details hinweg, 严格来说 (yángé láishuō) achtet gerade auf sie. 对……来说 „für …“ nennt dagegen eine Person oder Perspektive.",
    "explanation": "严格 (yángé) „streng“ + 来说 (láishuō) „gesagt“: Der Sprecher legt einen strengen Maßstab oder die genaue Definition an und korrigiert damit eine ungenaue, alltägliche Sicht: „Streng genommen ist das kein …“. Oft folgt eine Verneinung wie 不算 (bú suàn) „gilt nicht als“, 不是 (bú shì) oder 并不 (bìng bù). Die Wendung steht meist am Satzanfang mit Komma. Sie ist genauso gebaut wie 一般来说 (yìbān láishuō) „im Allgemeinen“ und 总的来说 (zǒng de láishuō) „insgesamt“. Neutral im Register, in Gesprächen und Sachtexten gebräuchlich. Varianten: 严格地说, 严格说来, 严格讲.",
    "quiz": {
      "example": 1,
      "answer": "严格",
      "distractors": [
        {
          "text": "一般",
          "reason": "一般来说 „im Allgemeinen“ nennt eine Regel, keine genaue Definition – die Übersetzung verlangt „genau genommen“."
        },
        {
          "text": "总的",
          "reason": "总的来说 „insgesamt“ zieht ein Fazit, statt einen Begriff genau abzugrenzen."
        },
        {
          "text": "对我",
          "reason": "对我来说 „für mich“ gibt eine persönliche Sicht wieder, keine sachlich genaue Einordnung."
        }
      ]
    },
    "related": [
      "g:一般来说",
      "g:总的来说",
      "g:大致说来",
      "g:对……来说"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:坦白说",
    "pattern": "坦白说",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "offen gesagt, ehrlich gestanden",
    "pinyin": "tǎnbái shuō",
    "examples": [
      {
        "chinese": "坦白说，我对这个结果不太满意。",
        "pinyin": "Tǎnbái shuō, wǒ duì zhège jiéguǒ bú tài mǎnyì.",
        "german": "Ehrlich gesagt bin ich mit diesem Ergebnis nicht besonders zufrieden."
      },
      {
        "chinese": "坦白说，你的计划还有很多问题。",
        "pinyin": "Tǎnbái shuō, nǐ de jìhuà hái yǒu hěn duō wèntí.",
        "german": "Offen gesagt hat dein Plan noch viele Schwächen."
      },
      {
        "chinese": "坦白说，我一开始并不想来。",
        "pinyin": "Tǎnbái shuō, wǒ yì kāishǐ bìng bù xiǎng lái.",
        "german": "Offen gestanden wollte ich anfangs gar nicht kommen."
      }
    ],
    "legacyIds": [
      "坦白说"
    ],
    "formation": "坦白说，+ (oft unbequeme) Meinung oder Eingeständnis",
    "explanation": "坦白 (tǎnbái) heißt „offen, aufrichtig“. Als Satzeinleitung kündigt 坦白说 an, dass jetzt eine ehrliche, oft unbequeme oder kritische Meinung bzw. ein Eingeständnis folgt. Es wirkt etwas sachlicher als 老实说 (lǎoshi shuō) oder 说实话 (shuō shíhuà); vertraulicher klingt 不瞒你说 „ich will es dir nicht verheimlichen“. Die Wendung steht meist am Satzanfang mit Komma; Varianten sind 坦白地说 und 坦白讲 (tǎnbái jiǎng), Letzteres vor allem in Taiwan und Hongkong. Achtung: 坦白 allein als Verb heißt „gestehen“ (他坦白了一切 „Er hat alles gestanden“).",
    "quiz": {
      "example": 0,
      "answer": "坦白",
      "distractors": [
        {
          "text": "比如",
          "reason": "比如说 „zum Beispiel“ führt ein Beispiel an, keine ehrliche persönliche Meinung."
        },
        {
          "text": "听",
          "reason": "听说 „ich habe gehört“ gibt Fremdes wieder; der Satz drückt aber die eigene Unzufriedenheit aus."
        },
        {
          "text": "据",
          "reason": "据说 „man sagt“ beruft sich auf andere, passt nicht zu „ehrlich gesagt“."
        }
      ],
      "accepted": [
        "老实"
      ]
    },
    "related": [
      "g:老实说",
      "g:说真的",
      "g:不瞒你说"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:打个比方",
    "pattern": "打个比方",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "bildlich gesprochen; um einen Vergleich zu ziehen",
    "pinyin": "dǎ gè bǐfāng",
    "examples": [
      {
        "chinese": "打个比方，学习就像盖房子，基础最重要。",
        "pinyin": "Dǎ ge bǐfang, xuéxí jiù xiàng gài fángzi, jīchǔ zuì zhòngyào.",
        "german": "Bildlich gesprochen: Lernen ist wie Hausbau – das Fundament ist das Wichtigste."
      },
      {
        "chinese": "打个比方，心脏就像身体的发动机。",
        "pinyin": "Dǎ ge bǐfang, xīnzàng jiù xiàng shēntǐ de fādòngjī.",
        "german": "Um einen Vergleich zu ziehen: Das Herz ist so etwas wie der Motor des Körpers."
      },
      {
        "chinese": "我打个比方你就明白了：网络就像一条高速公路。",
        "pinyin": "Wǒ dǎ ge bǐfang nǐ jiù míngbai le: wǎngluò jiù xiàng yì tiáo gāosù gōnglù.",
        "german": "Mit einem Vergleich verstehst du es gleich: Das Internet ist wie eine Autobahn."
      }
    ],
    "legacyIds": [
      "打个比方"
    ],
    "formation": "打个比方，A + 就像/好比 + B",
    "explanation": "打比方 (dǎ bǐfang) heißt „einen Vergleich anstellen“; 个 ist hier die Kurzform von 一个 (yí ge). Mit 打个比方 kündigt der Sprecher an, dass er einen abstrakten Sachverhalt durch ein anschauliches Bild aus einem anderen Bereich erklärt. Danach folgt typischerweise 就像 (jiù xiàng) oder 好比 (hǎobǐ) „ist wie“. Gebräuchlich im Gespräch und in erklärenden Texten. Unterschied: 比如 (bǐrú) und 举个例子 (jǔ ge lìzi) führen ein konkretes Beispiel desselben Sachverhalts an; 打个比方 bringt dagegen einen Vergleich (Lernen ist wie Hausbau). Typischer Fehler: *打个例子 – ein Beispiel „hebt“ man (举), einen Vergleich „macht“ man (打).",
    "quiz": {
      "example": 0,
      "answer": "比方",
      "distractors": [
        {
          "text": "例子",
          "reason": "Ein Beispiel bringt man mit 举个例子, nicht mit 打; außerdem folgt hier ein Vergleich (就像), kein Beispiel."
        },
        {
          "text": "招呼",
          "reason": "打个招呼 heißt „kurz grüßen“ und leitet keinen Vergleich ein."
        },
        {
          "text": "电话",
          "reason": "打个电话 heißt „kurz anrufen“ und leitet keinen Vergleich ein."
        }
      ]
    },
    "related": [
      "g:拿……来说",
      "g:以…为例"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:据我所知",
    "pattern": "据我所知",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "soweit ich weiß, meines Wissens",
    "pinyin": "jù wǒ suǒ zhī",
    "examples": [
      {
        "chinese": "据我所知，他已经辞职了。",
        "pinyin": "Jù wǒ suǒ zhī, tā yǐjīng cízhí le.",
        "german": "Soweit ich weiß, hat er schon gekündigt."
      },
      {
        "chinese": "据我所知，这家饭馆周一不开门。",
        "pinyin": "Jù wǒ suǒ zhī, zhè jiā fànguǎn zhōuyī bù kāimén.",
        "german": "Soweit ich weiß, hat dieses Restaurant montags geschlossen."
      },
      {
        "chinese": "据我所知，这个问题还没有人解决过。",
        "pinyin": "Jù wǒ suǒ zhī, zhège wèntí hái méiyǒu rén jiějué guo.",
        "german": "Meines Wissens hat dieses Problem noch niemand gelöst."
      }
    ],
    "legacyIds": [
      "据我所知"
    ],
    "formation": "据我所知，+ Information",
    "notes": "Unterschied: 据说 (jùshuō) „es heißt, man sagt“ gibt Hörensagen ohne Quelle wieder; 据我所知 (jù wǒ suǒ zhī) beruft sich auf das eigene Wissen.",
    "explanation": "据 (jù) „gemäß, laut“ + 我 + 所知 (suǒ zhī) „was bekannt ist“, wörtlich „nach dem, was ich weiß“. Der Sprecher gibt eine Information weiter und schränkt zugleich ein, dass er sich nur auf sein eigenes Wissen stützt und keine Garantie übernimmt. Etwas formeller als 我听说 oder 我知道的是. Die Struktur 所 + Verb („das, was …“) ist schriftsprachlich; vergleichbar ist 众所周知 (zhòngsuǒzhōuzhī) „bekanntlich“. Abwandlungen: 据我了解 (jù wǒ liǎojiě) „nach meinem Kenntnisstand“, 据他所说 „nach seinen Worten“. Die Wendung steht am Satzanfang mit Komma.",
    "quiz": {
      "example": 0,
      "answer": "所知",
      "distractors": [
        {
          "text": "知道",
          "reason": "Nach 据我 braucht es die Nominalisierung mit 所 (所知 „das, was ich weiß“); *据我知道 ist ungrammatisch."
        },
        {
          "text": "所以",
          "reason": "所以 „deshalb“ leitet eine Folge ein und ergibt mit 据我 keinen Sinn."
        },
        {
          "text": "所说",
          "reason": "据我所说 hieße „nach dem, was ich sage“ – gemeint ist aber das eigene Wissen."
        }
      ],
      "accepted": [
        "了解"
      ]
    },
    "related": [
      "g:据",
      "g:根据"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:大致说来",
    "pattern": "大致说来",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "im Großen und Ganzen, grob gesagt",
    "pinyin": "dàzhì shuō lái",
    "examples": [
      {
        "chinese": "大致说来，这个项目进展得很顺利。",
        "pinyin": "Dàzhì shuōlái, zhège xiàngmù jìnzhǎn de hěn shùnlì.",
        "german": "Im Großen und Ganzen läuft dieses Projekt gut."
      },
      {
        "chinese": "大致说来，南方人爱吃米饭，北方人爱吃面食。",
        "pinyin": "Dàzhì shuōlái, nánfāngrén ài chī mǐfàn, běifāngrén ài chī miànshí.",
        "german": "Grob gesagt essen Südchinesen gern Reis, Nordchinesen dagegen gern Nudeln und Teigtaschen."
      },
      {
        "chinese": "大致说来，这次考试的题目不算难。",
        "pinyin": "Dàzhì shuōlái, zhè cì kǎoshì de tímù bú suàn nán.",
        "german": "Im Großen und Ganzen waren die Prüfungsaufgaben diesmal nicht schwer."
      }
    ],
    "legacyIds": [
      "大致说来"
    ],
    "formation": "大致说来，+ grobe Gesamteinschätzung",
    "explanation": "大致 (dàzhì) „ungefähr, in groben Zügen“ + 说来 (shuōlái) „gesagt“. Die Wendung leitet eine grobe Gesamteinschätzung ein und signalisiert, dass Details oder Ausnahmen bewusst weggelassen werden. Sie ist schriftlicher und vorsichtiger als 总的来说 (zǒng de láishuō) „insgesamt“, das eher ein abschließendes Fazit zieht; 概括来说 (gàikuò láishuō) betont das Zusammenfassen. Varianten: 大致来说, 大体说来, 大体上说. Das Gegenteil ist 严格来说 (yángé láishuō) „streng genommen“. Steht meist am Satzanfang mit Komma.",
    "quiz": {
      "example": 1,
      "answer": "大致",
      "distractors": [
        {
          "text": "严格",
          "reason": "严格说来 „streng genommen“ achtet gerade auf Details, die Übersetzung verlangt aber „grob gesagt“."
        },
        {
          "text": "一定",
          "reason": "一定 „bestimmt“ ist ein Adverb vor dem Verb und bildet mit 说来 keine Einleitungsformel."
        },
        {
          "text": "尤其",
          "reason": "尤其 „besonders“ hebt etwas hervor, statt grob zu verallgemeinern."
        }
      ],
      "accepted": [
        "大体"
      ]
    },
    "related": [
      "g:总的来说",
      "g:概括来说",
      "g:严格来说"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:权且",
    "pattern": "权且",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Partikeln",
    "meaning": "einstweilen, behelfsmäßig (als Notlösung)",
    "formation": "Subjekt + 权且 + Verb(phrase)",
    "explanation": "权且 (quánqiě) ist ein schriftsprachliches Adverb: Man tut etwas vorläufig als Notlösung, weil im Moment nichts Besseres möglich ist; später soll es geändert werden. Typisch sind Verbindungen wie 权且当作 / 权且作为 „behelfsmäßig als … nehmen“. 权且 steht vor dem Verb, also nach dem Subjekt. Es ist gehoben bis literarisch; in der Alltagssprache sagt man 暂时 (zànshí) „vorübergehend“ oder einfach 先 „erst einmal“. Nahe verwandt ist 姑且 (gūqiě) „vorläufig, versuchsweise“, das eher ein Zugeständnis betont („lassen wir es mal so gelten“), während 权且 den Notbehelf hervorhebt.",
    "examples": [
      {
        "chinese": "找不到合适的人，权且让他负责吧。",
        "pinyin": "Zhǎo bu dào héshì de rén, quánqiě ràng tā fùzé ba.",
        "german": "Da wir niemand Geeigneteren finden, soll er fürs Erste die Verantwortung übernehmen."
      },
      {
        "chinese": "没有桌子，我们权且把箱子当桌子用。",
        "pinyin": "Méiyǒu zhuōzi, wǒmen quánqiě bǎ xiāngzi dàng zhuōzi yòng.",
        "german": "Weil es keinen Tisch gibt, nehmen wir behelfsmäßig die Kiste als Tisch."
      },
      {
        "chinese": "天色已晚，我们权且在这家小旅馆住一夜。",
        "pinyin": "Tiānsè yǐ wǎn, wǒmen quánqiě zài zhè jiā xiǎo lǚguǎn zhù yí yè.",
        "german": "Es ist schon spät, wir übernachten einstweilen in diesem kleinen Gasthaus."
      }
    ],
    "legacyIds": [
      "权且"
    ],
    "related": [
      "g:姑且"
    ],
    "quiz": {
      "example": 1,
      "answer": "权且",
      "distractors": [
        {
          "text": "而且",
          "reason": "而且 „und außerdem“ verbindet Aussagen, kann aber nicht vor dem Verb eine Notlösung ausdrücken."
        },
        {
          "text": "况且",
          "reason": "况且 „zumal, überdies“ fügt ein weiteres Argument hinzu und steht am Satzanfang."
        },
        {
          "text": "并且",
          "reason": "并且 „und zudem“ reiht Handlungen aneinander; „behelfsmäßig“ drückt es nicht aus."
        }
      ],
      "accepted": [
        "暂且",
        "姑且",
        "暂时"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:岂非",
    "pattern": "岂非",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "wäre das nicht …? (rhetorisch, klassisch)",
    "pinyin": "qǐfēi",
    "examples": [
      {
        "chinese": "放弃这么好的机会，岂非太可惜了？",
        "pinyin": "Fàngqì zhème hǎo de jīhuì, qǐfēi tài kěxī le?",
        "german": "Eine so gute Gelegenheit aufzugeben, wäre das nicht viel zu schade?"
      },
      {
        "chinese": "你明知道有危险还要去，岂非自找麻烦？",
        "pinyin": "Nǐ míng zhīdào yǒu wēixiǎn hái yào qù, qǐfēi zì zhǎo máfan?",
        "german": "Du weißt genau, dass es gefährlich ist, und willst trotzdem hin – suchst du da nicht selbst Ärger?"
      },
      {
        "chinese": "如果大家都只顾自己，岂非人人都会吃亏？",
        "pinyin": "Rúguǒ dàjiā dōu zhǐ gù zìjǐ, qǐfēi rénrén dōu huì chīkuī?",
        "german": "Wenn jeder nur an sich denkt, kommt dann nicht am Ende jeder zu kurz?"
      }
    ],
    "legacyIds": [
      "岂非"
    ],
    "formation": "Sachverhalt，岂非 + Folge？",
    "notes": "难道 (nándào) braucht eine Verneinung, um dasselbe auszudrücken (难道不是……吗？); 岂非 (qǐfēi) enthält die Verneinung (非) bereits.",
    "explanation": "岂非 (qǐfēi) ist die klassische Form von 岂不是 (qǐ bú shì) „ist das etwa nicht …?“. Wie bei jeder rhetorischen Frage ist die Antwort klar: „岂非 X？“ bedeutet „das ist doch X“. Meist zieht der Satz eine unangenehme oder absurde Konsequenz aus dem vorher Gesagten: 这样做，岂非自讨苦吃？ „Wer so handelt, schadet sich doch nur selbst.“ Stark schriftsprachlich; im Alltag sagt man 岂不是 oder 这不是……吗？. 岂 (qǐ) allein bildet weitere rhetorische Formen wie 岂能 „wie könnte man“ oder 岂敢 (qǐgǎn) „wie dürfte ich“.",
    "quiz": {
      "example": 0,
      "answer": "岂非",
      "distractors": [
        {
          "text": "难道",
          "reason": "难道 ohne Verneinung kehrt den Sinn um („ist es etwa zu schade?“); gemeint ist „das wäre doch zu schade“."
        },
        {
          "text": "并非",
          "reason": "并非 „keineswegs“ verneint eine Aussage, statt rhetorisch zu fragen – der Sinn kippt ins Gegenteil."
        },
        {
          "text": "莫非",
          "reason": "莫非 „sollte es etwa sein, dass …“ äußert eine überraschte Vermutung, keine rhetorische Feststellung."
        }
      ],
      "accepted": [
        "岂不是"
      ]
    },
    "related": [
      "g:岂不是",
      "g:岂",
      "g:难道……吗？",
      "g:何尝"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:诚然",
    "pattern": "诚然",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "zugegeben, gewiss (…, aber …)",
    "pinyin": "chéngrán",
    "examples": [
      {
        "chinese": "诚然，这个方案并不完美，但它是目前最好的选择。",
        "pinyin": "Chéngrán, zhège fāng'àn bìng bù wánměi, dàn tā shì mùqián zuì hǎo de xuǎnzé.",
        "german": "Zugegeben, dieser Plan ist nicht perfekt, aber er ist derzeit die beste Wahl."
      },
      {
        "chinese": "困难诚然很多，可是我们不能放弃。",
        "pinyin": "Kùnnan chéngrán hěn duō, kěshì wǒmen bù néng fàngqì.",
        "german": "Gewiss gibt es viele Schwierigkeiten, aber wir dürfen nicht aufgeben."
      },
      {
        "chinese": "钱诚然重要，然而健康更重要。",
        "pinyin": "Qián chéngrán zhòngyào, rán'ér jiànkāng gèng zhòngyào.",
        "german": "Geld ist zweifellos wichtig, doch Gesundheit ist noch wichtiger."
      }
    ],
    "legacyIds": [
      "诚然"
    ],
    "formation": "诚然 + Zugeständnis，但(是)/可是/然而 + eigentliche Aussage",
    "explanation": "诚然 (chéngrán) räumt eine Tatsache ausdrücklich ein, um danach mit 但(是), 可是 (kěshì) oder 然而 (rán'ér) die eigentliche, oft gegenläufige Aussage zu machen: „Zugegeben, A – aber B.“ Es kann vor oder nach dem Subjekt stehen, auch allein am Satzanfang mit Komma. Schriftsprachlich (Argumentation, Kommentare, Reden). Sehr nahe an 固然 (gùrán); 诚然 betont stärker „das ist wirklich so“ und steht häufiger allein am Satzanfang. Im Unterschied zu 虽然 (suīrán) bestätigt der Sprecher mit 诚然 das Eingeräumte ausdrücklich als richtig, bevor er widerspricht.",
    "quiz": {
      "example": 1,
      "answer": "诚然",
      "distractors": [
        {
          "text": "既然",
          "reason": "既然 „da ja“ begründet eine Schlussfolgerung (mit 就), keinen Gegensatz mit 可是."
        },
        {
          "text": "果然",
          "reason": "果然 „wie erwartet“ bestätigt eine Vermutung und räumt nichts ein."
        },
        {
          "text": "竟然",
          "reason": "竟然 „unerwarteterweise“ drückt Überraschung aus, kein Zugeständnis vor einem Aber."
        }
      ],
      "accepted": [
        "固然",
        "确实",
        "虽然"
      ]
    },
    "related": [
      "g:固然",
      "g:虽然……，但是……",
      "g:尽管……，但是/可是……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:尽管如此",
    "pattern": "尽管如此",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "trotzdem, dennoch (trotz des eben Gesagten)",
    "pinyin": "jǐnguǎn rúcǐ",
    "examples": [
      {
        "chinese": "这个计划风险很大，尽管如此，我们还是决定试一试。",
        "pinyin": "Zhège jìhuà fēngxiǎn hěn dà, jǐnguǎn rúcǐ, wǒmen háishi juédìng shì yi shì.",
        "german": "Der Plan ist sehr riskant; trotzdem haben wir beschlossen, es zu versuchen."
      },
      {
        "chinese": "他已经尽力了，尽管如此，比赛还是输了。",
        "pinyin": "Tā yǐjīng jìnlì le, jǐnguǎn rúcǐ, bǐsài háishi shū le.",
        "german": "Er hat sein Bestes gegeben, und trotzdem ging das Spiel verloren."
      },
      {
        "chinese": "外面下着大雨，尽管如此，他仍然按时到了。",
        "pinyin": "Wàimiàn xià zhe dà yǔ, jǐnguǎn rúcǐ, tā réngrán ànshí dào le.",
        "german": "Draußen regnete es in Strömen, dennoch kam er pünktlich."
      }
    ],
    "legacyIds": [
      "尽管如此"
    ],
    "formation": "Sachverhalt，尽管如此，(Subjekt) + 还是/仍然 + Handlung",
    "notes": "Nicht verwechseln: 不仅如此 (bùjǐn rúcǐ) „nicht nur das“ fügt etwas hinzu, 既然如此 (jìrán rúcǐ) „wenn das so ist“ zieht eine Folgerung – nur 尽管如此 setzt einen Gegensatz.",
    "explanation": "尽管如此 (jǐnguǎn rúcǐ) heißt wörtlich „obwohl es so ist“: 如此 (rúcǐ) „so“ greift den vorher genannten Sachverhalt auf, sodass kein vollständiger Satz mit 尽管 (jǐnguǎn) wiederholt werden muss. Die Wendung steht am Anfang des zweiten Satzteils oder Satzes, mit Komma; danach folgen oft 还是 (háishi), 仍然 (réngrán) oder 依然 (yīrán). Neutral bis schriftlich; umgangssprachlich sagt man auch 虽然这样 oder einfach 可是 (kěshì). Gleichbedeutend ist 虽然如此, etwas stärker 即便如此 „selbst wenn es so ist“.",
    "quiz": {
      "example": 2,
      "answer": "尽管如此",
      "distractors": [
        {
          "text": "不仅如此",
          "reason": "不仅如此 „nicht nur das“ fügt etwas hinzu; hier wird aber ein Gegensatz (Regen – trotzdem pünktlich) ausgedrückt."
        },
        {
          "text": "因此",
          "reason": "因此 „deshalb“ macht die Pünktlichkeit zur Folge des Regens – das widerspricht dem Sinn."
        },
        {
          "text": "既然如此",
          "reason": "既然如此 „wenn das so ist“ leitet eine Schlussfolgerung oder Aufforderung ein, keinen Gegensatz."
        }
      ],
      "accepted": [
        "虽然如此",
        "即便如此"
      ]
    },
    "related": [
      "g:尽管……，但是/可是……",
      "g:不仅如此"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:反之",
    "pattern": "反之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "umgekehrt, im umgekehrten Fall",
    "pinyin": "fǎnzhī",
    "examples": [
      {
        "chinese": "多运动身体就好，反之就容易生病。",
        "pinyin": "Duō yùndòng shēntǐ jiù hǎo, fǎnzhī jiù róngyì shēngbìng.",
        "german": "Wer viel Sport treibt, bleibt gesund; umgekehrt wird man leicht krank."
      },
      {
        "chinese": "价格降低，买的人就多；反之，买的人就少。",
        "pinyin": "Jiàgé jiàngdī, mǎi de rén jiù duō; fǎnzhī, mǎi de rén jiù shǎo.",
        "german": "Sinkt der Preis, kaufen mehr Leute; im umgekehrten Fall kaufen weniger."
      },
      {
        "chinese": "信任能促进合作，反之，怀疑只会破坏关系。",
        "pinyin": "Xìnrèn néng cùjìn hézuò, fǎnzhī, huáiyí zhǐ huì pòhuài guānxì.",
        "german": "Vertrauen fördert die Zusammenarbeit; umgekehrt zerstört Misstrauen nur Beziehungen."
      }
    ],
    "legacyIds": [
      "反之"
    ],
    "formation": "A → B，反之(，)(则/就) + entgegengesetzte Folge",
    "explanation": "反之 (fǎnzhī) heißt „umgekehrt“, wörtlich „das Gegenteil davon“. Es verweist auf den gerade genannten Fall und stellt die entgegengesetzte Bedingung bzw. Seite dar: „Wer A tut, erreicht B; im umgekehrten Fall …“. Häufig folgt 则 (zé) oder 就. Schriftsprachlich (Sachtexte, Argumentation); gesprochen sagt man eher 反过来（说） (fǎnguòlái shuō) oder 相反 (xiāngfǎn). Unterschied: 相反 kann auch „im Gegenteil“ als Widerspruch zu einer Erwartung heißen, 反之 bezeichnet nur den spiegelbildlichen Fall. Nicht verwechseln mit 反而 (fǎn'ér) „stattdessen, wider Erwarten“.",
    "quiz": {
      "example": 0,
      "answer": "反之",
      "distractors": [
        {
          "text": "反而",
          "reason": "反而 „stattdessen, wider Erwarten“ widerspricht einer Erwartung im selben Fall, beschreibt aber nicht den umgekehrten Fall."
        },
        {
          "text": "因此",
          "reason": "因此 „deshalb“ würde Krankheit zur Folge von Sport machen."
        },
        {
          "text": "而且",
          "reason": "而且 „außerdem“ reiht steigernd an und ergibt hier einen Widerspruch (gesund und zudem krank)."
        }
      ],
      "accepted": [
        "否则",
        "不然"
      ]
    },
    "related": [
      "g:反过来（说）",
      "g:反而"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:见诸",
    "pattern": "见诸",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "erscheinen in, sich zeigen in (schriftsprachlich)",
    "pinyin": "jiànzhū",
    "examples": [
      {
        "chinese": "这类事件早已见诸报端。",
        "pinyin": "Zhè lèi shìjiàn zǎoyǐ jiànzhū bàoduān.",
        "german": "Über solche Vorfälle wurde längst in der Presse berichtet."
      },
      {
        "chinese": "他的这些想法从未见诸文字。",
        "pinyin": "Tā de zhèxiē xiǎngfǎ cóngwèi jiànzhū wénzì.",
        "german": "Diese Gedanken von ihm wurden nie schriftlich festgehalten."
      },
      {
        "chinese": "环保不能只停留在口头上，更要见诸行动。",
        "pinyin": "Huánbǎo bù néng zhǐ tíngliú zài kǒutóu shang, gèng yào jiànzhū xíngdòng.",
        "german": "Umweltschutz darf nicht bei Worten bleiben, er muss sich vor allem in Taten zeigen."
      }
    ],
    "legacyIds": [
      "见诸"
    ],
    "formation": "Subjekt + 见诸 + Medium/Bereich (报端、文字、行动 …)",
    "notes": "Gegenstück: 付诸 (fùzhū) „etwas einer Sache übergeben“ hat ein Objekt (将计划付诸实施); bei 见诸 (jiànzhū) erscheint das Subjekt selbst.",
    "explanation": "见诸 (jiànzhū) stammt aus dem klassischen Chinesisch: 见 „erscheinen, sichtbar werden“ + 诸 (zhū), eine Verschmelzung von 之于 (zhī yú) „es in/an“. 见诸 bedeutet also „in … erscheinen, sich in … zeigen“. Das Subjekt ist das, was erscheint; dahinter steht ein meist zweisilbiges Nomen. Typische Verbindungen: 见诸报端 „in der Presse erscheinen“, 见诸文字 „schriftlich festgehalten werden“, 见诸行动 (jiànzhū xíngdòng) „sich in Taten zeigen“. Da 诸 bereits „in“ enthält, gilt 见诸于 als pleonastisch, auch wenn man es oft liest. Nur in gehobener Schriftsprache (Presse, Essays). Gleichbedeutend, etwas schlichter: 见于 (jiànyú).",
    "quiz": {
      "example": 0,
      "answer": "见诸",
      "distractors": [
        {
          "text": "付诸",
          "reason": "付诸 verlangt jemanden, der etwas einer Sache übergibt (将计划付诸实施); Vorfälle „übergeben“ nicht die Presse."
        },
        {
          "text": "诉诸",
          "reason": "诉诸 „sich berufen auf, greifen zu“ (诉诸法律) passt nicht zu „in der Presse erscheinen“."
        },
        {
          "text": "来自",
          "reason": "来自 „stammen aus“ würde die Presse zur Quelle der Vorfälle machen – der Sinn verändert sich."
        }
      ],
      "accepted": [
        "见于"
      ]
    },
    "related": [
      "g:付诸"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:付诸",
    "pattern": "付诸",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "einer Sache übergeben; etwas in die Tat umsetzen",
    "pinyin": "fùzhū",
    "examples": [
      {
        "chinese": "我们必须尽快将计划付诸实施。",
        "pinyin": "Wǒmen bìxū jǐnkuài jiāng jìhuà fùzhū shíshī.",
        "german": "Wir müssen den Plan so bald wie möglich umsetzen."
      },
      {
        "chinese": "光有想法不够，还得付诸行动。",
        "pinyin": "Guāng yǒu xiǎngfǎ bú gòu, hái děi fùzhū xíngdòng.",
        "german": "Ideen allein reichen nicht, man muss sie auch in die Tat umsetzen."
      },
      {
        "chinese": "一场大雨让我们几个月的努力付诸东流。",
        "pinyin": "Yì cháng dà yǔ ràng wǒmen jǐ ge yuè de nǔlì fùzhū dōngliú.",
        "german": "Ein einziger Starkregen machte unsere monatelange Arbeit zunichte."
      }
    ],
    "legacyIds": [
      "付诸"
    ],
    "formation": "(将/把 + Objekt) + 付诸 + 实施/行动/实践 …",
    "notes": "Gegenstück: 见诸 (jiànzhū) „erscheinen in“ hat kein Objekt – das Subjekt selbst zeigt sich (见诸报端).",
    "explanation": "付诸 (fùzhū) = 付 „übergeben“ + 诸 (= 之于 „es an“): „etwas einer Sache überantworten“. Das Objekt (Plan, Idee, Gesetz) steht meist mit 将 (jiāng) oder 把 davor oder ergibt sich aus dem Kontext; hinter 付诸 steht ein zweisilbiges Nomen. Feste Verbindungen: 付诸实施 (fùzhū shíshī) und 付诸实践 „umsetzen, verwirklichen“, 付诸行动 „in die Tat umsetzen“, 付诸表决 „zur Abstimmung stellen“, 付诸东流 (fùzhū dōngliú) „den Bach hinuntergehen, vergeblich sein“. Schriftsprachlich; im Alltag sagt man einfach 去做 oder 实行 (shíxíng). Wie 见诸于 gilt auch 付诸于 als pleonastisch.",
    "quiz": {
      "example": 1,
      "answer": "付诸",
      "distractors": [
        {
          "text": "见诸",
          "reason": "见诸 heißt „erscheinen in“ und hat kein Objekt; gemeint ist, die Ideen in Taten umzusetzen."
        },
        {
          "text": "加以",
          "reason": "加以 heißt „einer Behandlung unterziehen“ und braucht ein Verb danach (对问题加以研究); „Ideen in die Tat umsetzen“ drückt es nicht aus."
        },
        {
          "text": "归于",
          "reason": "归于 „zuschreiben, zurückführen auf“ ergibt mit 行动 keinen Sinn."
        }
      ]
    },
    "related": [
      "g:见诸",
      "g:加以"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:为之",
    "pattern": "为之",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "darüber, deswegen (Gefühlsreaktion auf das Genannte, schriftsprachlich)",
    "pinyin": "wéizhī",
    "examples": [
      {
        "chinese": "这个消息让所有人为之震惊。",
        "pinyin": "Zhège xiāoxi ràng suǒyǒu rén wèizhī zhènjīng.",
        "german": "Diese Nachricht schockierte alle."
      },
      {
        "chinese": "她的勇气令人为之感动。",
        "pinyin": "Tā de yǒngqì lìng rén wèizhī gǎndòng.",
        "german": "Ihr Mut berührt einen zutiefst."
      },
      {
        "chinese": "球进了，全场观众为之欢呼。",
        "pinyin": "Qiú jìn le, quán chǎng guānzhòng wèizhī huānhū.",
        "german": "Das Tor fiel, und das ganze Stadion jubelte."
      }
    ],
    "legacyIds": [
      "为之"
    ],
    "formation": "Auslöser + 令/使/让 + Person + 为之 + Gefühlsverb (震惊、感动、欢呼 …)",
    "explanation": "为之 (wèizhī) heißt „seinetwegen, darüber“: 为 (wèi) „wegen, für“ + das klassische Pronomen 之 „es“, das auf eine vorher genannte Sache zurückverweist. Es steht vor einem Verb, meist einem Gefühls- oder Reaktionsverb, und zeigt, dass die Reaktion durch diese Sache ausgelöst wird: 全场为之欢呼 „der ganze Saal jubelte darüber“. Typisch ist die Verbindung mit 令/使 (lìng/shǐ) „veranlassen“: 令人为之感动. Feste Fügungen: 为之一振 (wèizhī yí zhèn) „dadurch neuen Auftrieb bekommen“, 为之一惊 „darüber erschrecken“. Schriftsprachlich. Aussprache: In dieser Bedeutung wèi; dasselbe Schriftbild als wéizhī („es tun“) findet sich in 好自为之 (hǎo zì wéi zhī) „sieh selbst zu, was du tust“.",
    "quiz": {
      "example": 1,
      "answer": "为之",
      "distractors": [
        {
          "text": "为了",
          "reason": "为了 „um … zu“ nennt einen Zweck und braucht ein Ziel dahinter; der Mut ist aber Auslöser, nicht Zweck."
        },
        {
          "text": "以为",
          "reason": "以为 „(irrtümlich) glauben“ verlangt einen Inhaltssatz und drückt keine Gefühlsreaktion aus."
        },
        {
          "text": "因而",
          "reason": "因而 „folglich“ verbindet Satzteile und kann nicht zwischen 令人 und dem Verb stehen."
        }
      ],
      "accepted": [
        "为此"
      ]
    },
    "related": [
      "g:为…所…",
      "g:为²"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:以…为…",
    "pattern": "以…为…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "A als B nehmen, A zu B machen (schriftsprachlicher Rahmen)",
    "pinyin": "yǐ…wéi…",
    "examples": [
      {
        "chinese": "我们公司一向以质量为核心。",
        "pinyin": "Wǒmen gōngsī yíxiàng yǐ zhìliàng wéi héxīn.",
        "german": "Für unser Unternehmen steht die Qualität seit jeher im Mittelpunkt."
      },
      {
        "chinese": "父母都以他为荣。",
        "pinyin": "Fùmǔ dōu yǐ tā wéi róng.",
        "german": "Seine Eltern sind stolz auf ihn."
      },
      {
        "chinese": "这部电影以真实故事为基础。",
        "pinyin": "Zhè bù diànyǐng yǐ zhēnshí gùshi wéi jīchǔ.",
        "german": "Dieser Film beruht auf einer wahren Geschichte."
      }
    ],
    "legacyIds": [
      "以…为…"
    ],
    "formation": "以 + A + 为 + B",
    "notes": "Die Verbindungen mit 主 „vorwiegend“ und 例 „Beispiel“ sind eigene Zusatzpunkte. Nicht verwechseln mit dem Passiv 为…所… (wéi … suǒ …).",
    "explanation": "以 (yǐ) „nehmen, mit“ + A + 为 (wéi) „als, zu“ + B bedeutet „A als B nehmen, A als B betrachten“. Dieser schriftsprachliche Rahmen steckt in vielen festen Verbindungen: 以……为主 (wéizhǔ) „hauptsächlich aus … bestehen“, 以……为例 (wéilì) „am Beispiel von“, 以……为荣 „stolz sein auf“, 以……为中心 „… in den Mittelpunkt stellen“, 以……为基础 „auf … beruhen“. B ist oft ein kurzes, auch einsilbiges Nomen (荣, 本, 主). Aussprache: 为 hier wéi (2. Ton), nicht wèi. Im Gespräch sagt man meist 把 A 当作 (dàngzuò) B oder 把 A 看成 (kànchéng) B. Typischer Fehler: 为 durch 是 ersetzen (*以质量是核心).",
    "quiz": {
      "example": 2,
      "answer": "为",
      "distractors": [
        {
          "text": "是",
          "reason": "Im Rahmen 以……为…… kann 为 nicht durch 是 ersetzt werden; *以……是…… ist ungrammatisch."
        },
        {
          "text": "当",
          "reason": "当 „als“ gehört zu 把……当(作)……; im Rahmen mit 以 steht 为 oder 作为."
        },
        {
          "text": "被",
          "reason": "被 markiert das Passiv mit einem Handelnden und ergibt mit 以 keinen Sinn."
        }
      ],
      "accepted": [
        "作为"
      ]
    },
    "related": [
      "g:以…为主",
      "g:以…为例",
      "g:为…所…",
      "g:表称谓或认定义：主语+收/选+宾语1+做/当/为+宾语2"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:适逢",
    "pattern": "适逢",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "gerade zusammenfallen mit (Zeitpunkt, Anlass; schriftsprachlich)",
    "pinyin": "shìféng",
    "examples": [
      {
        "chinese": "适逢国庆假期，景区里到处都是游客。",
        "pinyin": "Shìféng guóqìng jiàqī, jǐngqū lǐ dàochù dōu shì yóukè.",
        "german": "Weil gerade die Feiertage um den Nationalfeiertag waren, wimmelte es im Ausflugsgebiet von Touristen."
      },
      {
        "chinese": "我们到达北京时，适逢今年的第一场雪。",
        "pinyin": "Wǒmen dàodá Běijīng shí, shìféng jīnnián de dìyī cháng xuě.",
        "german": "Als wir in Peking ankamen, fiel gerade der erste Schnee des Jahres."
      },
      {
        "chinese": "今年适逢学校建校一百周年，很多校友回校庆祝。",
        "pinyin": "Jīnnián shìféng xuéxiào jiànxiào yìbǎi zhōunián, hěn duō xiàoyǒu huí xiào qìngzhù.",
        "german": "Dieses Jahr feiert die Schule ihr hundertjähriges Bestehen, und viele Ehemalige kommen zum Feiern zurück."
      }
    ],
    "legacyIds": [
      "适逢"
    ],
    "formation": "适逢 + Zeitpunkt/Anlass，+ Geschehen",
    "explanation": "适逢 (shìféng) heißt „gerade auf … treffen“ (适 „gerade, zufällig“, 逢 „begegnen“). Es sagt, dass ein Geschehen zufällig mit einem bestimmten Zeitpunkt oder Anlass zusammenfällt: Feiertag, Jubiläum, Wetter, Saison. Das Objekt ist ein Zeit- oder Ereignisnomen (适逢国庆, 适逢周末, 适逢雨季). Gehobene Schriftsprache (Berichte, Reden, Reiseberichte); gesprochen sagt man 正好赶上 (zhènghǎo gǎnshang) oder 刚好碰上. Ähnlich sind 恰逢 (qiàféng) und 正值 (zhèngzhí) „gerade während“. Feste Wendung: 适逢其会 (shìféng qí huì) „gerade zur rechten Zeit dabei sein“.",
    "quiz": {
      "example": 0,
      "answer": "适逢",
      "distractors": [
        {
          "text": "适合",
          "reason": "适合 „passen zu“ beschreibt Eignung, nicht ein zeitliches Zusammentreffen."
        },
        {
          "text": "适应",
          "reason": "适应 „sich anpassen an“ ergibt mit dem Feiertag keinen Sinn."
        },
        {
          "text": "适当",
          "reason": "适当 „angemessen“ ist ein Adjektiv und kann kein Zeitnomen als Objekt nehmen."
        }
      ],
      "accepted": [
        "恰逢",
        "正值",
        "正逢"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:置若罔闻",
    "pattern": "置若罔闻",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "geflissentlich überhören, so tun, als hätte man nichts gehört",
    "pinyin": "zhìruòwǎngwén",
    "examples": [
      {
        "chinese": "他对医生的警告置若罔闻，照样每天抽烟。",
        "pinyin": "Tā duì yīshēng de jǐnggào zhìruòwǎngwén, zhàoyàng měi tiān chōuyān.",
        "german": "Er schlug die Warnungen des Arztes in den Wind und rauchte weiter jeden Tag."
      },
      {
        "chinese": "面对群众的意见，政府不能置若罔闻。",
        "pinyin": "Miànduì qúnzhòng de yìjiàn, zhèngfǔ bù néng zhìruòwǎngwén.",
        "german": "Die Regierung darf die Meinung der Bevölkerung nicht einfach überhören."
      },
      {
        "chinese": "老师说了好几遍，可是有些学生仍然置若罔闻。",
        "pinyin": "Lǎoshī shuō le hǎo jǐ biàn, kěshì yǒuxiē xuésheng réngrán zhìruòwǎngwén.",
        "german": "Der Lehrer hat es mehrmals gesagt, aber manche Schüler tun immer noch so, als hätten sie nichts gehört."
      }
    ],
    "legacyIds": [
      "置若罔闻"
    ],
    "formation": "(Person) + 对 + Warnung/Rat/Kritik + 置若罔闻",
    "explanation": "Vierzeichen-Ausdruck (Chengyu) 置若罔闻 (zhìruòwǎngwén): 置 „beiseitelegen“, 若 „als ob“, 罔 „nicht“, 闻 „hören“ – „etwas beiseiteschieben, als hätte man es nicht gehört“. Er bezeichnet das bewusste Ignorieren von Ratschlägen, Warnungen, Kritik oder Forderungen und ist deutlich tadelnd. Grammatisch ist er Prädikat; das Ignorierte wird mit 对 (duì) davorgestellt (对……置若罔闻), ein Objekt dahinter ist nicht möglich. Schriftsprachlich, in Presse und Kommentaren häufig. Ähnlich: 充耳不闻 (chōng'ěrbùwén) „sich taub stellen“; für Gesehenes 视而不见 (shì'érbújiàn) „die Augen verschließen“. Gegenteil: 言听计从 (yántīngjìcóng) „jedem Rat folgen“.",
    "quiz": {
      "example": 0,
      "answer": "置若罔闻",
      "distractors": [
        {
          "text": "言听计从",
          "reason": "言听计从 „jedem Rat folgen“ ist das Gegenteil und passt nicht zum Weiterrauchen."
        },
        {
          "text": "恍然大悟",
          "reason": "恍然大悟 „plötzlich begreifen“ widerspricht dem Weiterrauchen und dem Tadel im Satz."
        },
        {
          "text": "半途而废",
          "reason": "半途而废 „auf halbem Weg aufgeben“ bezieht sich auf ein Vorhaben, nicht auf das Ignorieren einer Warnung."
        }
      ],
      "accepted": [
        "充耳不闻"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:岂",
    "pattern": "岂",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "wie könnte …? (rhetorische Frage = keinesfalls)",
    "pinyin": "qǐ",
    "examples": [
      {
        "chinese": "这么重要的事，岂能随便决定？",
        "pinyin": "Zhème zhòngyào de shì, qǐ néng suíbiàn juédìng?",
        "german": "Eine so wichtige Sache kann man doch nicht einfach so entscheiden!"
      },
      {
        "chinese": "老师批评我是为我好，我岂敢不听？",
        "pinyin": "Lǎoshī pīpíng wǒ shì wèi wǒ hǎo, wǒ qǐ gǎn bù tīng?",
        "german": "Der Lehrer kritisiert mich zu meinem Besten – wie könnte ich da nicht auf ihn hören?"
      },
      {
        "chinese": "拿了钱却不办事，岂有此理！",
        "pinyin": "Ná le qián què bú bànshì, qǐ yǒu cǐ lǐ!",
        "german": "Geld nehmen und dann nichts tun – das ist ja unerhört!"
      }
    ],
    "legacyIds": [
      "岂"
    ],
    "formation": "岂 + 能/敢/可/有 + … ？",
    "notes": "Mit Verneinung – 岂不是 (qǐ bú shì) / 岂非 (qǐ fēi) „ist das nicht …?“ – ist eine Bejahung gemeint (eigene Punkte). Die umgangssprachliche rhetorische Frage bildet man mit 难道 (nándào) … 吗.",
    "explanation": "岂 (qǐ) ist ein Fragewort aus dem klassischen Chinesisch, das rhetorische Fragen einleitet: Formal ist der Satz eine Frage, gemeint ist eine starke Verneinung. 岂能 (qǐ néng) „wie könnte man …“ heißt also „man kann auf keinen Fall …“. Häufig sind 岂能, 岂敢 (qǐ gǎn) „wie dürfte ich …“ und 岂可 (qǐ kě). 岂 steht wie ein Adverb vor dem Prädikat, nie am Satzende. Gesprochen sagt man stattdessen 怎么能 (zěnme néng) oder 哪能 (nǎ néng). 岂 gehört in Reden, Kommentare, Literatur und feste Wendungen wie 岂有此理 (qǐ yǒu cǐ lǐ) „unerhört!“; im Alltag klingt es gehoben, oft auch ironisch.",
    "quiz": {
      "example": 0,
      "answer": "岂",
      "distractors": [
        {
          "text": "甚",
          "reason": "甚 ist ein Gradadverb („sehr“) und macht aus dem Satz keine rhetorische Frage."
        },
        {
          "text": "则",
          "reason": "则 („dann“) leitet eine Folge ein; es kann keine Frage bilden und verneint nichts."
        },
        {
          "text": "莫",
          "reason": "莫 verneint direkt („niemand, nicht“); 莫能 als Frage ergibt hier keinen Sinn."
        }
      ],
      "accepted": [
        "怎",
        "哪"
      ]
    },
    "related": [
      "g:岂不是",
      "g:岂非",
      "g:难道……吗？"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:犹",
    "pattern": "犹",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "noch (immer); wie, gleich (literarisch)",
    "pinyin": "yóu",
    "examples": [
      {
        "chinese": "那次旅行，我至今记忆犹新。",
        "pinyin": "Nà cì lǚxíng, wǒ zhìjīn jìyì yóu xīn.",
        "german": "An diese Reise erinnere ich mich bis heute, als wäre es gestern gewesen."
      },
      {
        "chinese": "母亲的叮嘱犹在耳边，我却已经离家十年了。",
        "pinyin": "Mǔqīn de dīngzhǔ yóu zài ěrbiān, wǒ què yǐjīng lí jiā shí nián le.",
        "german": "Die Ermahnungen meiner Mutter klingen mir noch in den Ohren, und doch bin ich schon zehn Jahre von zu Hause fort."
      },
      {
        "chinese": "站在山顶看着脚下的云海，犹如置身仙境。",
        "pinyin": "Zhàn zài shāndǐng kànzhe jiǎoxià de yúnhǎi, yóurú zhìshēn xiānjìng.",
        "german": "Auf dem Gipfel, das Wolkenmeer zu Füßen, fühlt man sich wie im Märchenland."
      },
      {
        "chinese": "运动过犹不及，一定要适量。",
        "pinyin": "Yùndòng guò yóu bù jí, yídìng yào shìliàng.",
        "german": "Beim Sport ist zu viel so schlecht wie zu wenig – man muss das richtige Maß finden."
      }
    ],
    "legacyIds": [
      "犹"
    ],
    "formation": "犹 + Verb/Adjektiv („noch“) · 犹如 + Vergleich („wie“)",
    "notes": "犹如 (yóurú) und 好像 (hǎoxiàng) bedeuten beide „wie, als ob“, 犹如 ist aber rein schriftsprachlich. Nicht verwechseln mit 犹豫 (yóuyù) „zögern“, wo 犹 keine eigene Bedeutung trägt.",
    "explanation": "犹 (yóu) stammt aus dem klassischen Chinesisch und hat zwei Gebrauchsweisen. 1. Als Adverb vor dem Prädikat bedeutet es „noch, noch immer“ wie 仍然 (réngrán) oder 还: 记忆犹新 (jìyì yóu xīn) „die Erinnerung ist noch frisch“, 犹在耳边 (yóu zài ěrbiān) „klingt noch in den Ohren“. 2. Als Verb bedeutet es „gleichen, wie“: 犹如 (yóurú) „gleichsam, wie“ leitet einen bildhaften Vergleich ein; ebenso 过犹不及 (guò yóu bù jí) „zu viel ist so schlecht wie zu wenig“. Heute lebt 犹 vor allem in Chengyu und gehobener Schriftsprache; in der Alltagssprache verwendet man 还 bzw. 像 (xiàng) … 一样 (yíyàng).",
    "quiz": {
      "example": 1,
      "answer": "犹",
      "distractors": [
        {
          "text": "甚",
          "reason": "甚 („sehr“) steht vor Adjektiven, nicht vor 在 + Ort, und drückt kein „noch“ aus."
        },
        {
          "text": "曾",
          "reason": "曾 („einst“) verlegt das Geschehen in die Vergangenheit – gemeint ist aber, dass die Worte noch immer nachklingen."
        },
        {
          "text": "亦",
          "reason": "亦 heißt „auch“; es gibt hier nichts, an das „auch“ anschließen könnte, und das „noch“ ginge verloren."
        }
      ],
      "accepted": [
        "仍",
        "还"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:亦",
    "pattern": "亦",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "auch, ebenfalls (schriftsprachlich)",
    "pinyin": "yì",
    "examples": [
      {
        "chinese": "这种方法很简单，效果亦不错。",
        "pinyin": "Zhè zhǒng fāngfǎ hěn jiǎndān, xiàoguǒ yì búcuò.",
        "german": "Die Methode ist einfach, und auch die Wirkung ist gut."
      },
      {
        "chinese": "老师要尊重学生，反之亦然。",
        "pinyin": "Lǎoshī yào zūnzhòng xuésheng, fǎn zhī yì rán.",
        "german": "Lehrer sollen die Schüler respektieren – und umgekehrt."
      },
      {
        "chinese": "这次失败对我们来说亦是一次宝贵的经验。",
        "pinyin": "Zhè cì shībài duì wǒmen lái shuō yì shì yí cì bǎoguì de jīngyàn.",
        "german": "Auch dieser Misserfolg ist für uns eine wertvolle Erfahrung."
      },
      {
        "chinese": "他的演讲亦庄亦谐，很受欢迎。",
        "pinyin": "Tā de yǎnjiǎng yì zhuāng yì xié, hěn shòu huānyíng.",
        "german": "Seine Rede war ernst und humorvoll zugleich und kam sehr gut an."
      }
    ],
    "legacyIds": [
      "亦"
    ],
    "formation": "Subjekt + 亦 + Prädikat",
    "notes": "不亦乐乎 (bú yì lè hū) stammt aus dem Lunyu („ist das nicht auch eine Freude?“); heute bedeutet es „überaus, bis zum Gehtnichtmehr“: 忙得不亦乐乎 „alle Hände voll zu tun haben“.",
    "explanation": "亦 (yì) ist die klassische Entsprechung von 也 (yě) und wird genauso gebraucht: als Adverb direkt vor dem Prädikat, nie vor dem Subjekt. Es erscheint in formellen Texten, Reden und vielen festen Wendungen: 反之亦然 (fǎn zhī yì rán) „und umgekehrt“, 亦即 (yìjí) „das heißt“, 亦 A 亦 B „sowohl A als auch B“ – etwa 亦庄亦谐 (yì zhuāng yì xié) „ernst und heiter zugleich“. In der gesprochenen Alltagssprache klingt 亦 gestelzt – dort sagt man 也.",
    "quiz": {
      "example": 0,
      "answer": "亦",
      "distractors": [
        {
          "text": "甚",
          "reason": "甚 heißt „sehr“; das „auch“ der Übersetzung fehlt, und 甚不错 ist keine übliche Verbindung."
        },
        {
          "text": "犹",
          "reason": "犹 heißt „noch (immer)“ und würde einen früheren Zustand voraussetzen, nicht ein zusätzliches Lob."
        },
        {
          "text": "岂",
          "reason": "岂 macht den Satz zu einer rhetorischen Frage („wie könnte die Wirkung …?“) – das Gegenteil des Gemeinten."
        }
      ],
      "accepted": [
        "也"
      ]
    },
    "related": [
      "g:也"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:甚",
    "pattern": "甚",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "sehr, äußerst (schriftsprachliches Gradadverb)",
    "pinyin": "shèn",
    "examples": [
      {
        "chinese": "这次地震对当地经济影响甚大。",
        "pinyin": "Zhè cì dìzhèn duì dāngdì jīngjì yǐngxiǎng shèn dà.",
        "german": "Das Erdbeben hat die örtliche Wirtschaft sehr stark getroffen."
      },
      {
        "chinese": "双方对会谈的结果都甚为满意。",
        "pinyin": "Shuāngfāng duì huìtán de jiéguǒ dōu shènwéi mǎnyì.",
        "german": "Beide Seiten waren mit dem Ergebnis der Gespräche äußerst zufrieden."
      },
      {
        "chinese": "我对这段历史不甚了解。",
        "pinyin": "Wǒ duì zhè duàn lìshǐ bú shèn liǎojiě.",
        "german": "Mit diesem Abschnitt der Geschichte kenne ich mich nicht besonders gut aus."
      }
    ],
    "legacyIds": [
      "甚"
    ],
    "formation": "甚 + einsilbiges Adjektiv · 甚为 + zweisilbiges Adjektiv/Verb · 不甚 + Adjektiv/Verb",
    "notes": "甚至 (shènzhì) „sogar“ ist ein eigenes Wort und ein eigener Punkt (HSK 4). In alten Texten steht 甚 auch für 什么 (shénme): 甚么, 有甚么事.",
    "explanation": "甚 (shèn) ist das schriftsprachliche Gegenstück zu 很 oder 非常 (fēicháng). Allein steht es meist vor einsilbigen Adjektiven: 甚大, 甚多 (shèn duō), 甚少 (shèn shǎo), 甚好 (shèn hǎo). Vor zweisilbigen Wörtern verwendet man eher 甚为 (shènwéi): 甚为满意 „sehr zufrieden“. 不甚 (bú shèn) bedeutet „nicht besonders“: 不甚了解 „nicht sehr gut kennen“. In 欺人太甚 (qī rén tài shèn) ist 甚 Adjektiv: „zu weit gehen, maßlos“. Typisch für Berichte, Briefe und Kommentare; im Gespräch klingt es förmlich.",
    "quiz": {
      "example": 0,
      "answer": "甚",
      "distractors": [
        {
          "text": "亦",
          "reason": "亦 heißt „auch“ und setzt einen weiteren Fall voraus; der Grad („sehr“) fehlt."
        },
        {
          "text": "犹",
          "reason": "犹 heißt „noch (immer)“ und drückt keinen Grad aus."
        },
        {
          "text": "甚至",
          "reason": "甚至 („sogar“) steigert eine Aussage, ist aber kein Gradadverb vor einem einzelnen Adjektiv wie 大."
        }
      ],
      "accepted": [
        "很",
        "极"
      ]
    },
    "related": [
      "g:很",
      "g:……,甚至……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:则",
    "pattern": "则",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "dann, so (Folge); hingegen (Kontrast) – schriftsprachlich",
    "pinyin": "zé",
    "examples": [
      {
        "chinese": "学而不思则罔。",
        "pinyin": "Xué ér bù sī zé wǎng.",
        "german": "Lernen ohne nachzudenken ist vergeblich."
      },
      {
        "chinese": "欲速则不达，做事不能太着急。",
        "pinyin": "Yù sù zé bù dá, zuòshì bù néng tài zháojí.",
        "german": "Eile mit Weile – man darf die Dinge nicht überstürzen."
      },
      {
        "chinese": "北方冬天寒冷干燥，南方则温暖潮湿。",
        "pinyin": "Běifāng dōngtiān hánlěng gānzào, nánfāng zé wēnnuǎn cháoshī.",
        "german": "Im Norden ist der Winter kalt und trocken, im Süden hingegen mild und feucht."
      },
      {
        "chinese": "如遇紧急情况，则立即停车。",
        "pinyin": "Rú yù jǐnjí qíngkuàng, zé lìjí tíngchē.",
        "german": "Im Notfall ist sofort anzuhalten."
      }
    ],
    "legacyIds": [
      "则"
    ],
    "formation": "Bedingung + 则 + Folge · A …，B + 则 + … (Gegenüberstellung)",
    "notes": "Zählend gebraucht in 一则 (yì zé) ……，二则…… „erstens …, zweitens …“ (eigener Punkt). Als Zählwort für Texte: 一则新闻 (yì zé xīnwén) „eine Nachricht“. Auch in 否则 (fǒuzé) „sonst“ steckt dieses 则.",
    "explanation": "则 (zé) ist ein schriftsprachliches Verbindungswort aus dem klassischen Chinesisch und steht vor dem Prädikat des zweiten Teils. 1. Folge: Wie 就 verbindet es Bedingung und Ergebnis, besonders in Sprichwörtern und Vorschriften: 欲速则不达 (yù sù zé bù dá) „Eile mit Weile“, 如遇……，则…… „falls …, dann …“. 2. Kontrast: In Gegenüberstellungen markiert es den zweiten Teil („B hingegen“), ähnlich wie 却 (què) oder 而 (ér). Bei Gegenüberstellungen steht 则 nach dem Subjekt des zweiten Teils – richtig ist 南方则……, nicht 则南方…….",
    "quiz": {
      "example": 2,
      "answer": "则",
      "distractors": [
        {
          "text": "也",
          "reason": "也 („auch“) würde den Süden mit dem Norden gleichsetzen – gemeint ist aber ein Gegensatz."
        },
        {
          "text": "才",
          "reason": "才 hieße „erst, nur“ und betont eine Einschränkung, keinen Gegensatz zwischen zwei Regionen."
        },
        {
          "text": "岂",
          "reason": "岂 leitet eine rhetorische Frage ein; der Satz ist aber eine Feststellung."
        }
      ],
      "accepted": [
        "却"
      ]
    },
    "related": [
      "g:一则……，二则……，三则……",
      "g:……，否则……",
      "g:而¹"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:何以…为",
    "pattern": "何以…为",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "wozu (braucht man) …? (klassische rhetorische Frage)",
    "pinyin": "héyǐ…wéi",
    "examples": [
      {
        "chinese": "君子质而已矣，何以文为？",
        "pinyin": "Jūnzǐ zhì ér yǐ yǐ, héyǐ wén wéi?",
        "german": "Für einen Edlen zählt allein das Wesen – wozu braucht er äußeren Schliff?"
      },
      {
        "chinese": "匈奴未灭，何以家为？",
        "pinyin": "Xiōngnú wèi miè, héyǐ jiā wéi?",
        "german": "Solange die Xiongnu nicht besiegt sind, wozu brauche ich ein Zuhause?"
      },
      {
        "chinese": "是社稷之臣也，何以伐为？",
        "pinyin": "Shì shèjì zhī chén yě, héyǐ fá wéi?",
        "german": "Es ist ein Vasall unseres Staates – wozu es angreifen?"
      },
      {
        "chinese": "事业未成，何以家为？",
        "pinyin": "Shìyè wèi chéng, héyǐ jiā wéi?",
        "german": "Solange ich beruflich nichts erreicht habe – wozu eine Familie gründen?"
      }
    ],
    "legacyIds": [
      "何以…为"
    ],
    "formation": "何以 + Nomen/Verb + 为？",
    "notes": "何以 (héyǐ) allein kommt in gehobenem modernem Chinesisch noch vor und heißt „warum, wodurch“: 何以见得 (héyǐ jiàn dé) „woraus schließt du das?“. Ohne satzfinales 为 ist es keine Instanz dieses Musters.",
    "explanation": "Eine Konstruktion des klassischen Chinesisch: 何以 (héyǐ) „wozu, womit“ steht vor dem Objekt, das satzfinale 为 (wéi) ist eine Fragepartikel. „何以 X 为？“ heißt „wozu X?“ und meint: X ist unnötig. Heute begegnet die Form fast nur in Zitaten und Anspielungen. Am bekanntesten ist 匈奴未灭，何以家为 – der Feldherr Huo Qubing soll ein ihm geschenktes Anwesen abgelehnt haben, solange die Xiongnu nicht besiegt seien (im 史记 (Shǐjì) steht 无以家为). Moderne Sprecher spielen damit, etwa 事业未成，何以家为 „ohne Karriere wozu heiraten?“. Für den Alltag genügt es, die Wendung zu erkennen; aktiv nachbilden sollte man sie nur bewusst als Zitat.",
    "quiz": {
      "example": 1,
      "answer": "何以",
      "distractors": [
        {
          "text": "所以",
          "reason": "所以 („deshalb“) leitet eine Folge ein und bildet keine Frage mit satzfinalem 为."
        },
        {
          "text": "何况",
          "reason": "何况 („geschweige denn“) steigert eine vorausgehende Aussage, fragt aber nicht nach dem Zweck."
        },
        {
          "text": "难道",
          "reason": "难道 steht vor einem ganzen Satz (难道……吗？), nicht in der klassischen Klammer … 为."
        }
      ]
    },
    "related": [
      "g:岂"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:莫",
    "pattern": "莫",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "niemand, nichts; „… nicht!“ (Verbot) – literarisch",
    "pinyin": "mò",
    "examples": [
      {
        "chinese": "施工重地，闲人莫入。",
        "pinyin": "Shīgōng zhòngdì, xiánrén mò rù.",
        "german": "Baustelle – Unbefugten ist der Zutritt verboten."
      },
      {
        "chinese": "听到这个好消息，大家莫不欢欣鼓舞。",
        "pinyin": "Tīngdào zhège hǎo xiāoxi, dàjiā mòbù huānxīn gǔwǔ.",
        "german": "Als die gute Nachricht kam, waren alle ohne Ausnahme begeistert."
      },
      {
        "chinese": "莫等闲，白了少年头，空悲切。",
        "pinyin": "Mò děngxián, bái le shàonián tóu, kōng bēiqiè.",
        "german": "Vertrödle nicht die Zeit, sonst wird dein junges Haar grau und du klagst vergebens."
      },
      {
        "chinese": "他突然发了一通火，大家都觉得莫名其妙。",
        "pinyin": "Tā tūrán fā le yí tòng huǒ, dàjiā dōu juéde mòmíng qí miào.",
        "german": "Er ist plötzlich laut geworden, und keiner konnte sich das erklären."
      }
    ],
    "legacyIds": [
      "莫"
    ],
    "formation": "莫 + Verb (Verbot) · 莫不 + Verb („alle ohne Ausnahme“)",
    "notes": "莫非 (mòfēi) „sollte etwa …?“ und 莫过于 (mòguòyú) „nichts übertrifft …“ sind eigene Punkte. 莫 nicht mit 没 (méi) verwechseln: 没 verneint Tatsachen, 莫 untersagt oder bedeutet „niemand“.",
    "explanation": "莫 (mò) ist ein Verneinungswort des klassischen Chinesisch mit zwei Gebrauchsweisen. 1. Verbot „nicht, bitte nicht“, wie 不要 (bú yào) oder 别: auf Schildern (闲人莫入 „Unbefugten Zutritt verboten“), in Sprichwörtern und Gedichten (莫愁 mò chóu „sorge dich nicht“). 2. Unbestimmte Verneinung „niemand, nichts“: 莫不 (mòbù) „es gibt niemanden, der nicht …“ = „alle ohne Ausnahme“. Dazu kommen feste Wörter wie 莫名其妙 (mòmíng qí miào) „unbegreiflich“. Im Alltag sagt man 别 bzw. 没有人; 莫 wirkt literarisch oder amtlich.",
    "quiz": {
      "example": 0,
      "answer": "莫",
      "distractors": [
        {
          "text": "没",
          "reason": "没 verneint Tatsachen („ist nicht eingetreten“) und kann kein Verbot ausdrücken."
        },
        {
          "text": "未",
          "reason": "未 heißt „noch nicht“ und beschreibt einen Zustand – auf dem Schild ist aber ein Verbot gemeint."
        },
        {
          "text": "岂",
          "reason": "岂 leitet rhetorische Fragen ein und verneint nicht selbst; als Verbot ergibt es keinen Sinn."
        }
      ],
      "accepted": [
        "勿",
        "免"
      ]
    },
    "related": [
      "g:莫非",
      "g:莫过于……"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:截至",
    "pattern": "截至",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Zahlen & Zeit",
    "meaning": "bis (zum Stichtag), Stand … (Statistik, Nachrichten)",
    "pinyin": "jiézhì",
    "examples": [
      {
        "chinese": "截至目前，已有三千人报名参加比赛。",
        "pinyin": "Jiézhì mùqián, yǐ yǒu sānqiān rén bàomíng cānjiā bǐsài.",
        "german": "Bis jetzt haben sich bereits 3000 Personen für den Wettbewerb angemeldet."
      },
      {
        "chinese": "截至去年年底，该公司共有员工一万多人。",
        "pinyin": "Jiézhì qùnián niándǐ, gāi gōngsī gòng yǒu yuángōng yíwàn duō rén.",
        "german": "Ende letzten Jahres hatte das Unternehmen insgesamt über 10.000 Beschäftigte."
      },
      {
        "chinese": "截至昨天下午五点，捐款总额已超过二百万元。",
        "pinyin": "Jiézhì zuótiān xiàwǔ wǔ diǎn, juānkuǎn zǒng'é yǐ chāoguò èrbǎi wàn yuán.",
        "german": "Bis gestern 17 Uhr waren schon über zwei Millionen Yuan an Spenden eingegangen."
      }
    ],
    "legacyIds": [
      "截至"
    ],
    "formation": "截至 + Zeitpunkt，+ Stand/Zahl (oft mit 已/共/累计)",
    "notes": "Gesprochen sagt man 到目前为止 (dào mùqián wéizhǐ) „bis jetzt“. 迄今为止 (qìjīn wéizhǐ) bezieht sich immer auf heute, 截至 (jiézhì) kann jeden Stichtag nennen.",
    "explanation": "截至 (jiézhì) nennt den Stichtag, bis zu dem etwas gezählt oder festgestellt wurde: 截至去年年底 „Stand Ende letzten Jahres“, 截至目前 (jiézhì mùqián) „bis jetzt“. Es steht meist am Satzanfang, danach folgt eine Zahl oder ein Zwischenstand, oft mit 已 (yǐ), 共 (gòng) oder 累计 (lěijì). Typisch für Nachrichten, Berichte, Statistiken und Bekanntmachungen. Häufiger Fehler ist die Verwechslung mit 截止 (jiézhǐ): Das ist ein Verb „enden, ablaufen“ und steht nach der Zeitangabe (报名明天截止) oder in 截止日期 (jiézhǐ rìqī) „Einsendeschluss“; vor einer Zeitangabe verlangt die Norm 截至 bzw. 截止到 (jiézhǐ dào).",
    "quiz": {
      "example": 0,
      "answer": "截至",
      "distractors": [
        {
          "text": "截止",
          "reason": "截止 ist ein Verb („ablaufen“) und steht nach der Zeitangabe (报名截止); vor 目前 gilt es als Fehler."
        },
        {
          "text": "自从",
          "reason": "自从 („seit“) nennt einen Anfangspunkt in der Vergangenheit, nicht den Stichtag einer Zählung."
        },
        {
          "text": "至于",
          "reason": "至于 („was … betrifft“) führt ein neues Thema ein und kann keinen Zeitpunkt begrenzen."
        }
      ]
    },
    "related": [
      "g:迄今为止",
      "g:到……为止"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:迄今为止",
    "pattern": "迄今为止",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Zahlen & Zeit",
    "meaning": "bis heute, bisher (schriftsprachlich)",
    "pinyin": "qìjīn wéizhǐ",
    "examples": [
      {
        "chinese": "迄今为止，还没有人能解开这个谜。",
        "pinyin": "Qìjīn wéizhǐ, hái méiyǒu rén néng jiěkāi zhège mí.",
        "german": "Bis heute hat niemand dieses Rätsel lösen können."
      },
      {
        "chinese": "这是迄今为止规模最大的一次调查。",
        "pinyin": "Zhè shì qìjīn wéizhǐ guīmó zuì dà de yí cì diàochá.",
        "german": "Das ist die bisher umfangreichste Untersuchung."
      },
      {
        "chinese": "迄今为止，这个组织已经帮助了五百多个家庭。",
        "pinyin": "Qìjīn wéizhǐ, zhège zǔzhī yǐjīng bāngzhù le wǔbǎi duō ge jiātíng.",
        "german": "Bisher hat die Organisation über 500 Familien geholfen."
      }
    ],
    "legacyIds": [
      "迄今为止"
    ],
    "formation": "迄今为止，+ Satz · 迄今为止 + 最 … 的 + Nomen",
    "notes": "至今 (zhìjīn) „bis heute“ ist neutraler und steht als Adverb vor dem Verb: 他至今没回来. Die Mischform 至今为止 ist verbreitet, gilt manchen aber als unsauber.",
    "explanation": "迄今为止 (qìjīn wéizhǐ) ist die schriftsprachliche Entsprechung von 到目前为止 (dào mùqián wéizhǐ) bzw. 到现在为止: Es zieht eine Bilanz von einem früheren Zeitpunkt bis jetzt. Meist steht es am Satzanfang, gefolgt von 已经 (yǐjīng), 共, 还没有 (hái méiyǒu) oder einem Superlativ: 迄今为止最大的 „der bisher größte“. 迄今 (qìjīn) allein wird als Adverb vor dem Verb gebraucht: 迄今已有百年历史. Der Endpunkt ist immer die Gegenwart – für andere Stichtage nimmt man 截至 (jiézhì) oder 到 … 为止 (wéizhǐ). Typisch für Nachrichten, Berichte und wissenschaftliche Texte.",
    "quiz": {
      "example": 1,
      "answer": "迄今为止",
      "distractors": [
        {
          "text": "从今以后",
          "reason": "从今以后 („von nun an“) blickt in die Zukunft; eine abgeschlossene Untersuchung kann nicht „ab jetzt“ die größte sein."
        },
        {
          "text": "与此同时",
          "reason": "与此同时 („gleichzeitig“) verbindet zwei Sätze und kann nicht vor 规模最大 als Zeitrahmen stehen."
        },
        {
          "text": "截至",
          "reason": "截至 braucht einen konkreten Zeitpunkt danach (截至目前); allein vor 规模 ist es unvollständig."
        }
      ],
      "accepted": [
        "到目前为止",
        "到现在为止"
      ]
    },
    "related": [
      "g:截至",
      "g:到……为止"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:该",
    "pattern": "该",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "der/die/das genannte, besagte (Rückverweis, Amts- und Nachrichtensprache)",
    "pinyin": "gāi",
    "examples": [
      {
        "chinese": "昨晚一名男子在超市行窃，该男子已被警方抓获。",
        "pinyin": "Zuówǎn yì míng nánzǐ zài chāoshì xíngqiè, gāi nánzǐ yǐ bèi jǐngfāng zhuāhuò.",
        "german": "Gestern Abend hat ein Mann im Supermarkt gestohlen; der Mann wurde inzwischen von der Polizei gefasst."
      },
      {
        "chinese": "市政府启动了一个新项目，该项目预计明年年底完工。",
        "pinyin": "Shì zhèngfǔ qǐdòng le yí ge xīn xiàngmù, gāi xiàngmù yùjì míngnián niándǐ wángōng.",
        "german": "Die Stadtregierung hat ein neues Projekt gestartet, das voraussichtlich Ende nächsten Jahres abgeschlossen wird."
      },
      {
        "chinese": "学校新建了一座图书馆，该馆共有藏书五十万册。",
        "pinyin": "Xuéxiào xīn jiàn le yí zuò túshūguǎn, gāi guǎn gòng yǒu cángshū wǔshí wàn cè.",
        "german": "Die Schule hat eine neue Bibliothek gebaut; sie umfasst insgesamt 500.000 Bände."
      }
    ],
    "legacyIds": [
      "该"
    ],
    "formation": "该 + (Zählwort) + Nomen",
    "notes": "Nicht verwechseln mit dem Modalverb 该 „sollen, an der Reihe sein“ (应该 (yīnggāi), 该……了 – eigene Punkte). Beide Lesungen sind gāi; welches gemeint ist, zeigt die Stellung: Modal vor Verb, Demonstrativ vor Nomen.",
    "explanation": "In formellen Texten verweist 该 (gāi) als Demonstrativum auf etwas, das gerade genannt wurde: 该公司 „dieses (eben erwähnte) Unternehmen“, 该校 „die betreffende Schule“, 该名男子 „der besagte Mann“. Es steht direkt vor dem Nomen, oft ohne Zählwort, und ersetzt 这个 (zhège) bzw. 此 (cǐ) in sachlichem Ton. Typisch für Nachrichten, Polizeiberichte, Verträge und Behördenschreiben. Ohne vorherige Erwähnung ist 该 nicht verständlich; im Gespräch sagt man 这个 oder 那个 (nàge).",
    "quiz": {
      "example": 2,
      "answer": "该",
      "distractors": [
        {
          "text": "那",
          "reason": "那 braucht vor einem Nomen ein Zählwort (那个图书馆) und gehört zur Umgangssprache; 那馆 ist nicht üblich."
        },
        {
          "text": "每",
          "reason": "每 („jede/r“) würde mehrere Bibliotheken voraussetzen; gemeint ist die eine eben genannte."
        },
        {
          "text": "应",
          "reason": "应 ist das Modalverb „sollen“ und kann nicht vor einem Nomen auf etwas zurückverweisen."
        }
      ],
      "accepted": [
        "此"
      ]
    },
    "related": [
      "g:此",
      "g:应该",
      "g:该……了"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:系",
    "pattern": "系",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "ist, sei (formelle Kopula der Amtssprache)",
    "pinyin": "xì",
    "examples": [
      {
        "chinese": "经调查，这次火灾系电线老化所致。",
        "pinyin": "Jīng diàochá, zhè cì huǒzāi xì diànxiàn lǎohuà suǒ zhì.",
        "german": "Die Ermittlungen ergaben, dass der Brand durch veraltete Leitungen verursacht wurde."
      },
      {
        "chinese": "网上流传的这条消息纯系谣言，请大家不要相信。",
        "pinyin": "Wǎngshàng liúchuán de zhè tiáo xiāoxi chúnxì yáoyán, qǐng dàjiā bú yào xiāngxìn.",
        "german": "Die im Internet kursierende Meldung ist ein reines Gerücht – bitte glauben Sie ihr nicht."
      },
      {
        "chinese": "经核实，该男子系本市居民。",
        "pinyin": "Jīng héshí, gāi nánzǐ xì běnshì jūmín.",
        "german": "Nach Überprüfung steht fest, dass der Mann in dieser Stadt wohnt."
      }
    ],
    "legacyIds": [
      "系"
    ],
    "formation": "Subjekt + 系 + Nomen · Ereignis + 系 + Ursache + 所致",
    "notes": "Andere Lesungen und Bedeutungen: 系 jì „binden“ (系鞋带 jì xiédài, „Schuhe zubinden“); als Nomen xì „Fachbereich“ (中文系) oder „System“ (系统 (xìtǒng)). Im Kantonesischen ist 系 (hai6) das gewöhnliche „sein“.",
    "explanation": "系 (xì) ersetzt in Behörden-, Polizei-, Gerichts- und Nachrichtentexten die Kopula 是: 经查 (jīng chá)，该男子系本市居民 „ermittelt wurde, dass der Mann hier gemeldet ist“. Häufige Verbindungen: 系……所致 (suǒ zhì) „ist verursacht durch …“, 系……所为 (suǒ wéi) „wurde von … begangen“, 确系 (quèxì) „ist tatsächlich“, 纯系 (chúnxì) „ist reine/r …“. Verneint wird nicht mit 不系, sondern mit 并非 (bìngfēi) oder 不是 (bú shì). In der gesprochenen Sprache wirkt 系 sehr amtlich.",
    "quiz": {
      "example": 2,
      "answer": "系",
      "distractors": [
        {
          "text": "被",
          "reason": "被 markiert das Passiv und braucht ein Verb (被……抓获); ohne Verb ist der Satz unvollständig."
        },
        {
          "text": "在",
          "reason": "在 verlangt einen Ort (在本市); 居民 ist aber ein Personenbegriff, keine Ortsangabe."
        },
        {
          "text": "则",
          "reason": "则 („dann, hingegen“) verbindet Aussagen und kann nicht als „ist“ zwischen Subjekt und Prädikativ stehen."
        }
      ],
      "accepted": [
        "是",
        "为"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:业已",
    "pattern": "业已",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Adverbien",
    "meaning": "bereits (formell, Amts- und Geschäftssprache)",
    "pinyin": "yèyǐ",
    "examples": [
      {
        "chinese": "相关手续业已办妥，请您按时前来领取证件。",
        "pinyin": "Xiāngguān shǒuxù yèyǐ bàntuǒ, qǐng nín ànshí qiánlái lǐngqǔ zhèngjiàn.",
        "german": "Die nötigen Formalitäten sind bereits erledigt; bitte holen Sie Ihre Unterlagen pünktlich ab."
      },
      {
        "chinese": "双方业已签署合作协议。",
        "pinyin": "Shuāngfāng yèyǐ qiānshǔ hézuò xiéyì.",
        "german": "Beide Seiten haben das Kooperationsabkommen bereits unterzeichnet."
      },
      {
        "chinese": "上述问题业已解决，特此说明。",
        "pinyin": "Shàngshù wèntí yèyǐ jiějué, tècǐ shuōmíng.",
        "german": "Hiermit wird mitgeteilt, dass die oben genannten Probleme bereits gelöst sind."
      }
    ],
    "legacyIds": [
      "业已"
    ],
    "formation": "Subjekt + 业已 + (meist zweisilbiges) Verb",
    "notes": "Das formelle Gegenstück für „noch nicht“ ist 尚未 (shàngwèi). 早已 (zǎoyǐ) heißt „längst“ und betont, dass etwas schon lange zurückliegt.",
    "explanation": "业已 (yèyǐ) bedeutet dasselbe wie 已经 (yǐjīng), gehört aber in Bekanntmachungen, Geschäftsbriefe, Verträge und Behördentexte: 手续业已办妥 „die Formalitäten sind bereits erledigt“. Es steht vor dem Verb, meist einem zweisilbigen wie 签署 (qiānshǔ), 完成 (wánchéng) oder 解决 (jiějué), oder vor einer Verb-Ergänzung-Verbindung wie 办妥 (bàntuǒ). Oft wird damit ein abgeschlossener Stand amtlich festgestellt. In der gesprochenen Sprache sagt man 已经 oder 早就 (zǎojiù); 业已 klänge dort unnatürlich.",
    "quiz": {
      "example": 1,
      "answer": "业已",
      "distractors": [
        {
          "text": "尚未",
          "reason": "尚未 heißt „noch nicht“ – das Gegenteil von „bereits unterzeichnet“."
        },
        {
          "text": "即将",
          "reason": "即将 („demnächst“) verlegt die Unterzeichnung in die Zukunft."
        },
        {
          "text": "正在",
          "reason": "正在 beschreibt einen laufenden Vorgang, nicht einen bereits abgeschlossenen."
        }
      ],
      "accepted": [
        "已经",
        "已"
      ]
    },
    "related": [
      "g:已经"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:现将…通知如下",
    "pattern": "现将…通知如下",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "hiermit wird Folgendes mitgeteilt (Einleitungsformel amtlicher Mitteilungen)",
    "pinyin": "xiàn jiāng…tōngzhī rúxià",
    "examples": [
      {
        "chinese": "根据学校安排，现将期末考试时间通知如下，请同学们相互转告。",
        "pinyin": "Gēnjù xuéxiào ānpái, xiàn jiāng qīmò kǎoshì shíjiān tōngzhī rúxià, qǐng tóngxuémen xiānghù zhuǎngào.",
        "german": "Gemäß der Planung der Schule werden die Prüfungstermine zum Semesterende wie folgt bekannt gegeben; bitte informiert euch gegenseitig."
      },
      {
        "chinese": "为做好国庆节放假工作，现将有关事项通知如下。",
        "pinyin": "Wèi zuòhǎo Guóqìng Jié fàngjià gōngzuò, xiàn jiāng yǒuguān shìxiàng tōngzhī rúxià.",
        "german": "Zur Regelung der Feiertage am Nationalfeiertag wird hiermit Folgendes mitgeteilt."
      },
      {
        "chinese": "经公司研究决定，现将新的作息时间通知如下，请全体员工遵照执行。",
        "pinyin": "Jīng gōngsī yánjiū juédìng, xiàn jiāng xīn de zuòxī shíjiān tōngzhī rúxià, qǐng quántǐ yuángōng zūnzhào zhíxíng.",
        "german": "Die Firmenleitung hat neue Arbeitszeiten beschlossen, die hiermit bekannt gegeben werden; alle Beschäftigten werden gebeten, sich daran zu halten."
      }
    ],
    "legacyIds": [
      "现将…通知如下"
    ],
    "formation": "（Anlass，）现将 + Sache + 通知/公布/说明 + 如下",
    "notes": "如下 (rúxià) steht immer nach dem Verb; 以下 (yǐxià) ist dagegen ein Nomen („das Folgende“) und steht vor dem Inhalt: 通知以下事项.",
    "explanation": "Feste Formel, mit der ein 通知 (tōngzhī) „Mitteilung, Rundschreiben“ zu den eigentlichen Punkten überleitet. 现 (xiàn) heißt „nun, hiermit“, 将 (jiāng) ist das schriftsprachliche 把 und holt das Objekt vor das Verb, 如下 (rúxià) bedeutet „wie folgt“. Davor steht oft der Anlass (为了 (wèile) ……, 根据 (gēnjù) ……, 经研究决定 (jīng yánjiū juédìng) ……), danach meist ein Doppelpunkt und eine nummerierte Liste (一、二、三). Varianten: 现将……公布如下, 现将……说明如下, 现就……通知如下, wobei 就 „bezüglich“ heißt. Nur in schriftlichen Bekanntmachungen von Schulen, Firmen und Behörden üblich.",
    "quiz": {
      "example": 1,
      "answer": "如下",
      "distractors": [
        {
          "text": "以下",
          "reason": "以下 ist ein Nomen („das Folgende“) und steht vor dem Inhalt (以下事项), nicht nach dem Verb 通知."
        },
        {
          "text": "如此",
          "reason": "如此 („so, derart“) verweist auf etwas Vorausgehendes; die Punkte der Mitteilung folgen aber erst."
        },
        {
          "text": "下来",
          "reason": "下来 ist eine Richtungsergänzung („herunter, festhalten“) und bedeutet nicht „wie folgt“."
        }
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:应…要求",
    "pattern": "应…要求",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "auf Wunsch/Verlangen von … (formell)",
    "pinyin": "yìng…yāoqiú",
    "examples": [
      {
        "chinese": "应广大读者要求，杂志社决定增加这个栏目。",
        "pinyin": "Yìng guǎngdà dúzhě yāoqiú, zázhìshè juédìng zēngjiā zhège lánmù.",
        "german": "Auf vielfachen Wunsch der Leser hat die Redaktion beschlossen, diese Rubrik aufzunehmen."
      },
      {
        "chinese": "应客户的要求，我们修改了设计方案。",
        "pinyin": "Yìng kèhù de yāoqiú, wǒmen xiūgǎi le shèjì fāng'àn.",
        "german": "Auf Wunsch des Kunden haben wir den Entwurf überarbeitet."
      },
      {
        "chinese": "应家长要求，学校推迟了开学时间。",
        "pinyin": "Yìng jiāzhǎng yāoqiú, xuéxiào tuīchí le kāixué shíjiān.",
        "german": "Auf Verlangen der Eltern hat die Schule den Schulbeginn verschoben."
      }
    ],
    "legacyIds": [
      "应…要求"
    ],
    "formation": "应 + Person/Institution +（的）要求，+ Handlung",
    "notes": "根据 (gēnjù) / 按照 (ànzhào) …… 要求 (yāoqiú) heißt „gemäß den Vorgaben“ und betont die Regel, nach der gehandelt wird; 应……要求 betont, dass jemand ausdrücklich darum gebeten hat.",
    "explanation": "应 wird hier yìng gelesen („entsprechen, nachkommen“), nicht yīng („sollen“). Die Wendung 应 … 要求 (yāoqiú) nennt, auf wessen Wunsch hin etwas getan wurde; zwischen 应 und 要求 steht die Person oder Institution, oft ohne 的. Die Wendung steht meist am Satzanfang, danach folgt die Handlung. Ebenso gebaut sind 应……邀请 (yāoqǐng) „auf Einladung von“ – auch 应……之邀 – und 应……请求 (qǐngqiú) „auf Bitte von“. Typisch für Nachrichten, Pressemitteilungen und Geschäftskorrespondenz. Ein häufiger Fehler ist die Aussprache yīng.",
    "quiz": {
      "example": 1,
      "answer": "应",
      "distractors": [
        {
          "text": "对",
          "reason": "对……要求 („bezüglich der Forderung“) bräuchte ein eigenes Verb wie 做出回应; als Begründung der Handlung passt es nicht."
        },
        {
          "text": "应该",
          "reason": "应该 ist das Modalverb „sollen“ und steht vor einem Verb, nicht vor 客户的要求."
        },
        {
          "text": "被",
          "reason": "被 markiert das Passiv und verlangt ein Verb nach dem Handelnden; 被客户的要求 bleibt unvollständig."
        }
      ],
      "accepted": [
        "按照",
        "根据"
      ]
    },
    "related": [
      "g:根据",
      "g:按照"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:着眼于",
    "pattern": "着眼于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "den Blick richten auf, ausgerichtet sein auf (Ziel, Perspektive)",
    "pinyin": "zhuóyǎn yú",
    "examples": [
      {
        "chinese": "我们做决定时应该着眼于长远利益。",
        "pinyin": "Wǒmen zuò juédìng shí yīnggāi zhuóyǎn yú chángyuǎn lìyì.",
        "german": "Bei Entscheidungen sollten wir die langfristigen Interessen im Blick haben."
      },
      {
        "chinese": "这次教育改革着眼于学生的全面发展。",
        "pinyin": "Zhè cì jiàoyù gǎigé zhuóyǎn yú xuésheng de quánmiàn fāzhǎn.",
        "german": "Diese Bildungsreform zielt auf die ganzheitliche Entwicklung der Schüler."
      },
      {
        "chinese": "城市规划不能只看眼前，要着眼于未来。",
        "pinyin": "Chéngshì guīhuà bù néng zhǐ kàn yǎnqián, yào zhuóyǎn yú wèilái.",
        "german": "Stadtplanung darf nicht nur das Heute sehen, sie muss die Zukunft im Blick haben."
      }
    ],
    "legacyIds": [
      "着眼于"
    ],
    "formation": "Subjekt + 着眼于 + Ziel/Gesichtspunkt",
    "notes": "Gegenstück 立足于 (lìzú yú): Es nennt die Grundlage, von der man ausgeht, 着眼于 dagegen das Ziel – daher die feste Formel 立足当前，着眼长远 „von der Gegenwart ausgehen, die Zukunft im Blick haben“.",
    "explanation": "着眼于 (zhuóyǎn yú) heißt „ins Auge fassen, sich an … orientieren“: Es nennt das Ziel oder den Gesichtspunkt, nach dem man plant oder entscheidet. 着 wird hier zhuó gelesen, nicht zháo oder zhe. Typische Objekte sind 长远 (chángyuǎn) „langfristig“, 未来 (wèilái), 大局 (dàjú) „das große Ganze“ oder 发展 (fāzhǎn). 于 kann entfallen (着眼 (zhuóyǎn) 长远). Dazu gehören 着眼点 (zhuóyǎndiǎn) „Blickwinkel“ und 从……着眼 „von … aus betrachtet“. Typisch für Politik-, Wirtschafts- und Bildungstexte.",
    "quiz": {
      "example": 2,
      "answer": "着眼于",
      "distractors": [
        {
          "text": "归因于",
          "reason": "归因于 führt ein Ergebnis auf eine Ursache zurück; die Zukunft ist hier aber Ziel, keine Ursache."
        },
        {
          "text": "有赖于",
          "reason": "有赖于 („abhängen von“) nennt eine Voraussetzung und passt nicht zu 要 „man muss …“ mit einem Ziel."
        },
        {
          "text": "得益于",
          "reason": "得益于 („verdanken“) blickt auf einen bereits erzielten Nutzen zurück, nicht nach vorn."
        }
      ],
      "accepted": [
        "面向"
      ]
    },
    "related": [
      "g:立足于"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:立足于",
    "pattern": "立足于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "ausgehen von, sich stützen auf (Grundlage, Basis)",
    "pinyin": "lìzú yú",
    "examples": [
      {
        "chinese": "发展经济必须立足于本国国情。",
        "pinyin": "Fāzhǎn jīngjì bìxū lìzú yú běnguó guóqíng.",
        "german": "Wirtschaftliche Entwicklung muss von den Verhältnissen im eigenen Land ausgehen."
      },
      {
        "chinese": "我们的研究立足于大量的调查数据。",
        "pinyin": "Wǒmen de yánjiū lìzú yú dàliàng de diàochá shùjù.",
        "german": "Unsere Forschung stützt sich auf umfangreiche Erhebungsdaten."
      },
      {
        "chinese": "制定计划要立足于实际，不能想当然。",
        "pinyin": "Zhìdìng jìhuà yào lìzú yú shíjì, bù néng xiǎngdāngrán.",
        "german": "Ein Plan muss von der Realität ausgehen und darf nicht auf bloßen Annahmen beruhen."
      }
    ],
    "legacyIds": [
      "立足于"
    ],
    "formation": "Subjekt + 立足于 + Grundlage",
    "notes": "Gegenstück 着眼于 (zhuóyǎn yú) nennt das Ziel, 立足于 die Ausgangsbasis: 立足当前，着眼长远. Ähnlich, aber neutraler ist 基于 (jīyú) „auf Grundlage von“.",
    "explanation": "立足 (lìzú) heißt wörtlich „Fuß fassen, festen Stand haben“; 立足于 X bedeutet „X als Grundlage oder Ausgangspunkt nehmen“. Typische Objekte: 国情 (guóqíng) „die Verhältnisse im Land“, 现实 (xiànshí), 实际 (shíjì), 本职工作 (běnzhí gōngzuò) „die eigene Aufgabe“. 于 kann entfallen (立足实际). Der Ausdruck gehört in Politik, Wirtschaft und Wissenschaft und betont, dass ein Plan oder eine These auf solider Basis steht. Zu unterscheiden: 在 + Ort + 立足 heißt „sich (an einem Ort) behaupten, Fuß fassen“: 在大城市立足很难.",
    "quiz": {
      "example": 2,
      "answer": "立足于",
      "distractors": [
        {
          "text": "归因于",
          "reason": "归因于 erklärt ein Ergebnis aus einer Ursache; ein Plan, der erst gemacht wird, hat noch kein Ergebnis."
        },
        {
          "text": "得益于",
          "reason": "得益于 („verdanken“) beschreibt einen schon eingetretenen Nutzen, keine Grundlage für einen Plan."
        },
        {
          "text": "有赖于",
          "reason": "有赖于 („abhängen von“) beschreibt eine Abhängigkeit, nicht wovon man ausgehen soll; mit 要 ist es unpassend."
        }
      ]
    },
    "related": [
      "g:着眼于"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:有赖于",
    "pattern": "有赖于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "abhängen von, angewiesen sein auf (notwendige Voraussetzung)",
    "pinyin": "yǒulài yú",
    "examples": [
      {
        "chinese": "经济的发展有赖于科技的进步。",
        "pinyin": "Jīngjì de fāzhǎn yǒulài yú kējì de jìnbù.",
        "german": "Wirtschaftliche Entwicklung ist auf technischen Fortschritt angewiesen."
      },
      {
        "chinese": "这个项目能否成功，有赖于大家的共同努力。",
        "pinyin": "Zhège xiàngmù néngfǒu chénggōng, yǒulài yú dàjiā de gòngtóng nǔlì.",
        "german": "Ob das Projekt gelingt, hängt von unser aller Einsatz ab."
      },
      {
        "chinese": "保护环境有赖于每个人的参与。",
        "pinyin": "Bǎohù huánjìng yǒulài yú měi ge rén de cānyù.",
        "german": "Umweltschutz braucht die Mitwirkung jedes Einzelnen."
      }
    ],
    "legacyIds": [
      "有赖于"
    ],
    "formation": "Sache/Ziel + 有赖于 + Voraussetzung",
    "notes": "Abgrenzung: 有赖于 (yǒulài yú) nennt eine Voraussetzung (oft für Künftiges), 得益于 (déyì yú) einen Grund für bereits eingetretenen Erfolg, 归因于 (guīyīn yú) eine Ursache in der Rückschau.",
    "explanation": "X 有赖于 (yǒulài yú) Y heißt: X kann nur mit Hilfe von Y gelingen, Y ist eine notwendige Voraussetzung. Subjekt ist meist ein Ziel oder Prozess wie 发展 (fāzhǎn), 成功 (chénggōng) oder 解决问题 (jiějué wèntí), das Objekt die tragende Bedingung (大家的努力, 科技进步). Häufig steht davor eine offene Frage mit 能否 (néngfǒu) „ob … kann“. Die Wendung ist schriftsprachlich; gesprochen sagt man 靠 (kào) / 要靠 oder 取决于 (qǔjué yú). Nicht verwechseln mit 有待 (yǒudài) „bedarf noch“: 有待提高 „muss noch verbessert werden“.",
    "quiz": {
      "example": 1,
      "answer": "有赖于",
      "distractors": [
        {
          "text": "归因于",
          "reason": "归因于 erklärt ein bereits eingetretenes Ergebnis; ob das Projekt gelingt, ist aber noch offen (能否)."
        },
        {
          "text": "得益于",
          "reason": "得益于 setzt einen schon erreichten Erfolg voraus und passt nicht zur offenen Frage 能否成功."
        },
        {
          "text": "着眼于",
          "reason": "着眼于 nennt ein Ziel, das jemand ins Auge fasst; der Erfolg kann nicht „den Blick richten“."
        }
      ],
      "accepted": [
        "取决于"
      ]
    },
    "related": [
      "g:得益于",
      "g:归因于"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:归因于",
    "pattern": "归因于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "zurückführen auf, als Ursache zuschreiben",
    "pinyin": "guīyīn yú",
    "examples": [
      {
        "chinese": "他把这次失败归因于准备不足。",
        "pinyin": "Tā bǎ zhè cì shībài guīyīn yú zhǔnbèi bùzú.",
        "german": "Er führt diesen Misserfolg auf mangelnde Vorbereitung zurück."
      },
      {
        "chinese": "这次事故可以归因于司机疲劳驾驶。",
        "pinyin": "Zhè cì shìgù kěyǐ guīyīn yú sījī píláo jiàshǐ.",
        "german": "Der Unfall lässt sich darauf zurückführen, dass der Fahrer übermüdet war."
      },
      {
        "chinese": "专家认为，物价上涨主要归因于原材料成本的增加。",
        "pinyin": "Zhuānjiā rènwéi, wùjià shàngzhǎng zhǔyào guīyīn yú yuáncáiliào chéngběn de zēngjiā.",
        "german": "Experten zufolge sind die Preissteigerungen vor allem auf höhere Rohstoffkosten zurückzuführen."
      }
    ],
    "legacyIds": [
      "归因于"
    ],
    "formation": "Ergebnis + 归因于 + Ursache · 把 + Ergebnis + 归因于 + Ursache",
    "notes": "Abgrenzung zu 得益于 (déyì yú): Dort ist das Ergebnis immer ein Vorteil, und das Subjekt ist der Nutznießer. 有赖于 (yǒulài yú) nennt eine Voraussetzung, keine nachträglich festgestellte Ursache.",
    "explanation": "归因于 (guīyīn yú) nennt im Rückblick die Ursache eines Ergebnisses: „A ist auf B zurückzuführen“. Häufig in Analysen, Berichten und Wissenschaftstexten, oft mit 可以 (kěyǐ), 主要 (zhǔyào) oder in der Form 把 A 归因于 B „A auf B zurückführen“. Der Ausdruck ist neutral und passt zu positiven wie negativen Ergebnissen. Wertende Varianten: 归咎于 (guījiù yú) „die Schuld geben“ für Negatives, 归功于 (guīgōng yú) „als Verdienst zuschreiben“ für Positives. Anders als 因为 (yīnwèi) oder 由于 (yóuyú) ist 归因于 kein Bindewort, sondern ein Verb mit Objekt.",
    "quiz": {
      "example": 0,
      "answer": "归因于",
      "distractors": [
        {
          "text": "归功于",
          "reason": "归功于 schreibt einen Erfolg als Verdienst zu; für einen Misserfolg passt es nicht."
        },
        {
          "text": "得益于",
          "reason": "得益于 („verdanken“) gilt nur für Vorteile und bildet keinen 把-Satz."
        },
        {
          "text": "立足于",
          "reason": "立足于 nennt die Grundlage eines Vorhabens, keine Ursache für ein Ergebnis."
        }
      ],
      "accepted": [
        "归咎于",
        "归结于"
      ]
    },
    "related": [
      "g:得益于",
      "g:有赖于",
      "g:由于¹"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:得益于",
    "pattern": "得益于",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "verdanken, profitieren von (Grund für einen Erfolg)",
    "pinyin": "déyì yú",
    "examples": [
      {
        "chinese": "公司近年来的快速发展得益于优秀的管理团队。",
        "pinyin": "Gōngsī jìnniánlái de kuàisù fāzhǎn déyì yú yōuxiù de guǎnlǐ tuánduì.",
        "german": "Das rasche Wachstum der Firma in den letzten Jahren ist einem hervorragenden Managementteam zu verdanken."
      },
      {
        "chinese": "他的汉语进步这么快，得益于每天坚持练习。",
        "pinyin": "Tā de Hànyǔ jìnbù zhème kuài, déyì yú měitiān jiānchí liànxí.",
        "german": "Dass sein Chinesisch so schnell besser wird, verdankt er dem täglichen Üben."
      },
      {
        "chinese": "这个小镇能吸引大量游客，主要得益于优美的自然环境。",
        "pinyin": "Zhège xiǎozhèn néng xīyǐn dàliàng yóukè, zhǔyào déyì yú yōuměi de zìrán huánjìng.",
        "german": "Dass das Städtchen so viele Touristen anzieht, liegt vor allem an seiner schönen Natur."
      }
    ],
    "legacyIds": [
      "得益于"
    ],
    "formation": "positives Ergebnis + 得益于 + Ursache",
    "notes": "归功于 (guīgōng yú) ist ähnlich wie 得益于 (déyì yú), steht aber meist mit 把 oder 要: 这要归功于老师. 有赖于 (yǒulài yú) nennt eine Voraussetzung für Künftiges, 得益于 einen Grund für bereits Erreichtes.",
    "explanation": "得益于 (déyì yú) nennt den Grund für ein positives Ergebnis: „X verdankt sich Y, X profitiert von Y“. Das Subjekt ist eine erfreuliche Entwicklung wie 发展 (fāzhǎn), 进步 (jìnbù) oder 成功 (chénggōng), das Objekt der günstige Umstand. Häufig mit 主要 (zhǔyào) oder 这 davor: 这主要得益于…… „das ist vor allem … zu verdanken“. Der Ausdruck ist schriftsprachlich; gesprochen sagt man 多亏 (duōkuī) oder 靠 (kào). Für negative Folgen passt er nicht – dort steht 归咎于 (guījiù yú) oder 由于 (yóuyú). 得益 (déyì) allein heißt „Nutzen ziehen“: 从中得益.",
    "quiz": {
      "example": 1,
      "answer": "得益于",
      "distractors": [
        {
          "text": "归咎于",
          "reason": "归咎于 gibt die Schuld für etwas Negatives; schneller Fortschritt ist aber ein Erfolg."
        },
        {
          "text": "着眼于",
          "reason": "着眼于 nennt ein Ziel, das man ins Auge fasst, keinen Grund für einen erreichten Fortschritt."
        },
        {
          "text": "立足于",
          "reason": "立足于 nennt die Grundlage eines Plans oder einer These, nicht die Ursache eines Erfolgs."
        }
      ]
    },
    "related": [
      "g:归因于",
      "g:有赖于",
      "g:幸亏"
    ],
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不失为",
    "pattern": "不失为",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "durchaus … sein, immerhin als … gelten (vorsichtige positive Bewertung)",
    "pinyin": "bùshīwéi",
    "examples": [
      {
        "chinese": "如果实在找不到工作，先读研究生也不失为一个好办法。",
        "pinyin": "Rúguǒ shízài zhǎo bu dào gōngzuò, xiān dú yánjiūshēng yě bùshīwéi yí ge hǎo bànfǎ.",
        "german": "Wenn man wirklich keine Stelle findet, ist es durchaus eine gute Idee, erst einmal den Master zu machen."
      },
      {
        "chinese": "周末去郊区爬山，不失为一种放松的好方式。",
        "pinyin": "Zhōumò qù jiāoqū páshān, bùshīwéi yì zhǒng fàngsōng de hǎo fāngshì.",
        "german": "Am Wochenende im Umland wandern zu gehen ist durchaus eine gute Art, sich zu entspannen."
      },
      {
        "chinese": "这个计划虽然有些冒险，但不失为一个明智的选择。",
        "pinyin": "Zhège jìhuà suīrán yǒuxiē màoxiǎn, dàn bùshīwéi yí ge míngzhì de xuǎnzé.",
        "german": "Der Plan ist zwar etwas riskant, aber immerhin eine kluge Wahl."
      }
    ],
    "legacyIds": [
      "不失为"
    ],
    "formation": "Subjekt + （也/倒）不失为 + 一个/一种 + positives Nomen",
    "notes": "不愧为 (bùkuì wéi) „macht seinem Namen Ehre, ist wirklich ein …“ bestätigt einen Ruf oder Titel (他不愧为专家), 不失为 (bùshīwéi) dagegen bewertet zurückhaltend („immerhin“).",
    "explanation": "不失为 (bùshīwéi) heißt wörtlich „verfehlt nicht, … zu sein“: Etwas ist vielleicht nicht perfekt, kann aber durchaus als gute Lösung gelten. Damit empfiehlt man vorsichtig und höflich eine Möglichkeit. Das Objekt ist fast immer 一个 (yí ge) oder 一种 (yì zhǒng) + positives Nomen: 好办法, 明智的选择 „kluge Entscheidung“, 好去处 „lohnendes Ausflugsziel“. Oft steht 也 oder 倒 davor (也不失为, 倒不失为). Mit negativen Nomen ist es nicht möglich. Der Ausdruck ist eher schriftsprachlich, kommt aber auch in gehobener Rede vor.",
    "quiz": {
      "example": 1,
      "answer": "不失为",
      "distractors": [
        {
          "text": "不免",
          "reason": "不免 („unvermeidlich“) steht vor einem Verb oder Adjektiv, nicht vor 一种 + Nomen."
        },
        {
          "text": "不得不",
          "reason": "不得不 („muss notgedrungen“) braucht ein Verb danach und drückt Zwang aus, keine Bewertung."
        },
        {
          "text": "不至于",
          "reason": "不至于 („wird nicht so weit kommen, dass …“) verlangt ein Verb und verneint eine Befürchtung."
        }
      ],
      "accepted": [
        "算是"
      ]
    },
    "review": {
      "batch": "g005",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不胜枚举",
    "pattern": "不胜枚举",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "zu zahlreich, um sie alle aufzuzählen",
    "pinyin": "bùshèng méijǔ",
    "examples": [
      {
        "chinese": "类似的例子不胜枚举。",
        "pinyin": "Lèisì de lìzi búshèng méijǔ.",
        "german": "Ähnliche Beispiele gibt es mehr, als man aufzählen kann."
      },
      {
        "chinese": "这座城市的名胜古迹不胜枚举。",
        "pinyin": "Zhè zuò chéngshì de míngshèng gǔjì búshèng méijǔ.",
        "german": "Die Sehenswürdigkeiten dieser Stadt sind kaum aufzuzählen."
      },
      {
        "chinese": "这些年他为村里做的好事不胜枚举。",
        "pinyin": "Zhèxiē nián tā wèi cūn lǐ zuò de hǎoshì búshèng méijǔ.",
        "german": "Was er in diesen Jahren Gutes für das Dorf getan hat, lässt sich gar nicht alles aufzählen."
      }
    ],
    "legacyIds": [
      "不胜枚举"
    ],
    "formation": "Thema (Beispiele, Fälle, Verdienste …) + 不胜枚举",
    "notes": "Gleichbedeutend ist 举不胜举 (jǔ bú shèng jǔ). 不计其数 (bú jì qí shù) betont dagegen, dass sich etwas nicht zählen lässt (Menge), nicht das Aufzählen von Beispielen. Gegenteil: 屈指可数 (qūzhǐ kěshǔ) „an den Fingern abzuzählen“, also sehr wenige.",
    "explanation": "不胜枚举 (búshèng méijǔ) ist ein Chengyu der Schriftsprache: 胜 heißt hier „bewältigen, schaffen“, 枚举 (méijǔ) „einzeln aufzählen“ – wörtlich „man kommt mit dem Aufzählen nicht nach“. Es steht als Prädikat am Satzende, nach einem Thema wie 例子 (lìzi) „Beispiele“, 事例 (shìlì) „Fälle“ oder 名胜古迹 (míngshèng gǔjì) „Sehenswürdigkeiten“, und betont, dass es davon sehr viele gibt. Typisch für Aufsätze, Reden und Berichte. Es nimmt kein Objekt und keine Gradadverbien: nicht *很不胜枚举 oder *不胜枚举这些例子. Das 不 wird vor dem vierten Ton als bú gesprochen.",
    "quiz": {
      "example": 0,
      "answer": "不胜枚举",
      "distractors": [
        {
          "text": "屈指可数",
          "reason": "屈指可数 „an den Fingern abzuzählen“ sagt das Gegenteil: Es gäbe nur sehr wenige Beispiele."
        },
        {
          "text": "不容忽视",
          "reason": "不容忽视 „darf nicht übersehen werden“ betont die Wichtigkeit, nicht die große Zahl der Beispiele."
        },
        {
          "text": "不可同日而语",
          "reason": "不可同日而语 vergleicht zwei Dinge miteinander; hier wird nichts verglichen, sondern die Menge betont."
        }
      ],
      "accepted": [
        "举不胜举"
      ]
    },
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:行之有效",
    "pattern": "行之有效",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Schriftsprache",
    "meaning": "in der Praxis bewährt, wirksam (Methode, Maßnahme)",
    "pinyin": "xíng zhī yǒu xiào",
    "examples": [
      {
        "chinese": "这是一种行之有效的学习方法。",
        "pinyin": "Zhè shì yì zhǒng xíng zhī yǒu xiào de xuéxí fāngfǎ.",
        "german": "Das ist eine bewährte Lernmethode."
      },
      {
        "chinese": "事实证明，这些措施行之有效。",
        "pinyin": "Shìshí zhèngmíng, zhèxiē cuòshī xíng zhī yǒu xiào.",
        "german": "Die Erfahrung hat gezeigt, dass diese Maßnahmen wirken."
      },
      {
        "chinese": "我们要把行之有效的经验推广到其他地区。",
        "pinyin": "Wǒmen yào bǎ xíng zhī yǒu xiào de jīngyàn tuīguǎng dào qítā dìqū.",
        "german": "Wir wollen die bewährten Erfahrungen auf andere Regionen übertragen."
      }
    ],
    "legacyIds": [
      "行之有效"
    ],
    "formation": "行之有效 + 的 + Methode/Maßnahme  oder  Subjekt + 行之有效",
    "notes": "Gegenteil im Sinn: 纸上谈兵 (zhǐ shàng tán bīng) „bloße Theorie ohne Praxis“ oder 华而不实 (huá ér bù shí) „mehr Schein als Sein“.",
    "explanation": "行之有效 (xíng zhī yǒu xiào) bedeutet wörtlich „es durchführen und es wirkt“: 行 „ausführen“, 之 „es“, 有效 (yǒuxiào) „wirksam“. Gemeint ist eine Methode, Maßnahme oder Erfahrung, die sich in der Praxis bereits bewährt hat. Meist steht es mit 的 als Attribut vor einem Nomen wie 方法 (fāngfǎ), 措施 (cuòshī) oder 办法 (bànfǎ); es kann auch Prädikat sein (这些措施行之有效). Stil: schriftlich, typisch für Berichte, Politik und Ratgeber. 行 wird hier xíng gelesen, nicht háng. Bloßes 有效 heißt nur „wirksam“; 行之有效 betont zusätzlich, dass es sich im Einsatz erwiesen hat.",
    "quiz": {
      "example": 0,
      "answer": "行之有效",
      "distractors": [
        {
          "text": "华而不实",
          "reason": "华而不实 „mehr Schein als Sein“ wertet die Methode ab; gemeint ist aber eine bewährte Methode."
        },
        {
          "text": "不胜枚举",
          "reason": "不胜枚举 „zu zahlreich zum Aufzählen“ steht als Prädikat nach einer Menge, nicht als Eigenschaft einer einzelnen Methode."
        },
        {
          "text": "不容置疑",
          "reason": "不容置疑 „unbestreitbar“ beschreibt Tatsachen oder einen Tonfall, nicht die Wirksamkeit einer Methode."
        }
      ]
    },
    "related": [
      "g:不失为"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不容忽视",
    "pattern": "不容忽视",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "darf nicht übersehen werden, ist ernst zu nehmen",
    "pinyin": "bùróng hūshì",
    "examples": [
      {
        "chinese": "食品安全问题不容忽视。",
        "pinyin": "Shípǐn ānquán wèntí bùróng hūshì.",
        "german": "Das Thema Lebensmittelsicherheit darf man nicht vernachlässigen."
      },
      {
        "chinese": "网络对青少年的影响不容忽视。",
        "pinyin": "Wǎngluò duì qīngshàonián de yǐngxiǎng bùróng hūshì.",
        "german": "Der Einfluss des Internets auf Jugendliche darf nicht übersehen werden."
      },
      {
        "chinese": "环境污染已经成为一个不容忽视的问题。",
        "pinyin": "Huánjìng wūrǎn yǐjīng chéngwéi yí ge bùróng hūshì de wèntí.",
        "german": "Umweltverschmutzung ist zu einem Problem geworden, das man nicht ignorieren kann."
      }
    ],
    "legacyIds": [
      "不容忽视"
    ],
    "formation": "Thema (Problem, Einfluss, Risiko …) + 不容忽视  oder  不容忽视的 + Nomen",
    "notes": "Gleichbedeutend, etwas weniger formell: 不可忽视 (bùkě hūshì) oder 不能忽视. Verwandt: 不容小觑 (bùróng xiǎoqù) „darf nicht unterschätzt werden“.",
    "explanation": "不容忽视 (bùróng hūshì) heißt „lässt kein Übersehen zu“: 不容 (bùróng) „nicht zulassen“, 忽视 (hūshì) „vernachlässigen, übersehen“. Der Ausdruck stellt fest, dass ein Problem, ein Einfluss oder eine Gefahr ernst genommen werden muss. Was nicht übersehen werden darf, steht als Thema vorn (这个问题不容忽视); als Attribut steht es mit 的 vor dem Nomen (一个不容忽视的问题). Ein Objekt dahinter ist falsch: nicht *不容忽视这个问题. Stil: schriftlich und formell (Nachrichten, Berichte, Aufsätze). Nach demselben Muster 不容 + zweisilbiges Wort gibt es weitere feste Ausdrücke, z. B. 不容置疑 (bùróng zhìyí) „unbestreitbar“ und 不容乐观 (bùróng lèguān) „Anlass zur Sorge“.",
    "quiz": {
      "example": 1,
      "answer": "不容",
      "distractors": [
        {
          "text": "不必",
          "reason": "不必 „nicht nötig“ kehrt die Aussage um: Man bräuchte den Einfluss gar nicht zu beachten."
        },
        {
          "text": "不禁",
          "reason": "不禁 „unwillkürlich“ beschreibt eine Reaktion einer Person (他不禁笑了), passt nicht zu „darf nicht übersehen werden“."
        },
        {
          "text": "不免",
          "reason": "不免 „unvermeidlich, zwangsläufig“ würde bedeuten, dass der Einfluss zwangsläufig übersehen wird – das Gegenteil."
        }
      ],
      "accepted": [
        "不可",
        "不能"
      ]
    },
    "related": [
      "g:不容置疑"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不容置疑",
    "pattern": "不容置疑",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "steht außer Zweifel, unbestreitbar",
    "pinyin": "bùróng zhìyí",
    "examples": [
      {
        "chinese": "他的能力不容置疑。",
        "pinyin": "Tā de nénglì bùróng zhìyí.",
        "german": "An seinen Fähigkeiten besteht kein Zweifel."
      },
      {
        "chinese": "这是一个不容置疑的事实。",
        "pinyin": "Zhè shì yí ge bùróng zhìyí de shìshí.",
        "german": "Das ist eine unbestreitbare Tatsache."
      },
      {
        "chinese": "她用不容置疑的语气宣布了自己的决定。",
        "pinyin": "Tā yòng bùróng zhìyí de yǔqì xuānbù le zìjǐ de juédìng.",
        "german": "In einem Ton, der keinen Widerspruch duldete, verkündete sie ihre Entscheidung."
      }
    ],
    "legacyIds": [
      "不容置疑"
    ],
    "formation": "Thema + 不容置疑  oder  不容置疑的 + Nomen (语气, 事实 …)",
    "notes": "毫无疑问 (háowú yíwèn) „ohne Zweifel“ steht meist als Satzadverb am Anfang, 不容置疑 (bùróng zhìyí) dagegen als Prädikat oder Attribut. 不可否认 (bùkě fǒurèn) „es lässt sich nicht leugnen“ räumt eher etwas ein. Nicht verwechseln mit 不容忽视 (bùróng hūshì) „darf nicht übersehen werden“.",
    "explanation": "不容置疑 (bùróng zhìyí) heißt „lässt keinen Zweifel zu“: 不容 (bùróng) „nicht zulassen“, 置疑 (zhìyí) „Zweifel äußern“. Als Prädikat bewertet es eine Tatsache, Fähigkeit oder Aussage als unbestreitbar (他的能力不容置疑). Mit 的 als Attribut beschreibt es oft einen Tonfall, der keinen Widerspruch duldet: 不容置疑的语气 „ein Ton, der keinen Widerspruch duldet“. Stil: schriftlich und gehoben. Vorsicht beim Schreiben: Die Norm ist 置疑; das gleich klingende 质疑 (zhìyí) „infrage stellen“ wird zwar oft so verwendet, gilt in dieser festen Fügung aber als Fehler.",
    "quiz": {
      "example": 0,
      "answer": "置疑",
      "distractors": [
        {
          "text": "忽视",
          "reason": "不容忽视 heißt „darf nicht übersehen werden“; gesagt wird aber, dass die Fähigkeiten außer Zweifel stehen."
        },
        {
          "text": "乐观",
          "reason": "不容乐观 heißt „gibt Anlass zur Sorge“ und würde die Fähigkeiten negativ bewerten."
        },
        {
          "text": "迟疑",
          "reason": "不容迟疑 heißt „es darf nicht gezögert werden“ – eine Aufforderung zum Handeln, kein Urteil über Fähigkeiten."
        }
      ],
      "accepted": [
        "怀疑"
      ]
    },
    "related": [
      "g:不容忽视",
      "g:毫无疑问",
      "g:不可否认"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不为过",
    "pattern": "不为过",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "es ist nicht übertrieben (zu sagen …)",
    "pinyin": "bù wéi guò",
    "examples": [
      {
        "chinese": "说他是天才也不为过。",
        "pinyin": "Shuō tā shì tiāncái yě bù wéi guò.",
        "german": "Man kann ihn ruhig ein Genie nennen."
      },
      {
        "chinese": "健康的重要性，怎么强调都不为过。",
        "pinyin": "Jiànkāng de zhòngyàoxìng, zěnme qiángdiào dōu bù wéi guò.",
        "german": "Wie wichtig Gesundheit ist, kann man gar nicht genug betonen."
      },
      {
        "chinese": "把这次发现称为历史性的突破，一点儿也不为过。",
        "pinyin": "Bǎ zhè cì fāxiàn chēngwéi lìshǐxìng de tūpò, yìdiǎnr yě bù wéi guò.",
        "german": "Diese Entdeckung einen historischen Durchbruch zu nennen, ist keineswegs übertrieben."
      }
    ],
    "legacyIds": [
      "不为过"
    ],
    "formation": "(说/称) + Bewertung + 也/都 + 不为过  ·  再/怎么 + Verb + 也/都 + 不为过",
    "notes": "Gleichbedeutend, umgangssprachlicher: 也不过分 (yě bú guòfèn). Abzugrenzen von 不过 (búguò) „aber; nur“, das mit 不为过 (bù wéi guò) nichts zu tun hat.",
    "explanation": "不为过 (bù wéi guò) heißt „ist nicht zu viel, nicht übertrieben“: 为 (wéi) „sein“, 过 „Übermaß“. Damit verteidigt der Sprecher eine starke Bewertung: Typisch ist „说/称 + Urteil + 也不为过“ – „man kann ruhig sagen, dass …“. Eine zweite häufige Form ist „再/怎么 (zěnme) + Verb + 也/都不为过“: Man kann etwas gar nicht genug betonen, loben usw. Vor 不为过 steht fast immer 也 oder 都, oft verstärkt durch 一点儿也. Stil: gehoben, häufig in Kommentaren, Reden und Rezensionen. 为 wird hier wéi gelesen, nicht wèi.",
    "quiz": {
      "example": 0,
      "answer": "不为过",
      "distractors": [
        {
          "text": "不过",
          "reason": "不过 heißt „aber“ oder „nur“ und kann nicht als Bewertung am Satzende stehen."
        },
        {
          "text": "太过分",
          "reason": "太过分 „zu weit gegangen“ sagt das Gegenteil: Die Bezeichnung als Genie wäre übertrieben."
        },
        {
          "text": "不一定",
          "reason": "不一定 „nicht unbedingt“ zweifelt die Bewertung an, statt sie zu verteidigen."
        }
      ],
      "accepted": [
        "不过分"
      ]
    },
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:亟待",
    "pattern": "亟待",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Wortarten",
    "meaning": "bedarf dringend (einer Lösung, Verbesserung …)",
    "pinyin": "jídài",
    "examples": [
      {
        "chinese": "这些问题亟待解决。",
        "pinyin": "Zhèxiē wèntí jídài jiějué.",
        "german": "Diese Probleme müssen dringend gelöst werden."
      },
      {
        "chinese": "农村的医疗条件亟待改善。",
        "pinyin": "Nóngcūn de yīliáo tiáojiàn jídài gǎishàn.",
        "german": "Die medizinische Versorgung auf dem Land muss dringend verbessert werden."
      },
      {
        "chinese": "随着老人越来越多，养老服务亟待加强。",
        "pinyin": "Suízhe lǎorén yuè lái yuè duō, yǎnglǎo fúwù jídài jiāqiáng.",
        "german": "Da es immer mehr ältere Menschen gibt, muss die Altenpflege dringend ausgebaut werden."
      }
    ],
    "legacyIds": [
      "亟待"
    ],
    "formation": "Thema (Problem, Lage) + 亟待 + zweisilbiges Verb (解决/改善/加强 …)",
    "notes": "有待 (yǒudài) „steht noch aus, muss noch“ drückt keine Dringlichkeit aus (有待研究 „muss noch untersucht werden“). 急需 (jíxū) „dringend brauchen“ kann auch ein Nomen als Objekt haben (急需资金). Gleichbedeutend, aber weniger gehoben: 急待 (jídài).",
    "explanation": "亟待 (jídài) heißt „dringend auf etwas warten“: 亟 (jí) „dringend“, 待 „warten, bedürfen“. Vorn steht das, was behandelt werden muss – ein Problem, ein Zustand, eine Einrichtung –, dahinter ein zweisilbiges Verb wie 解决 (jiějué), 改善 (gǎishàn), 加强 (jiāqiáng) oder 提高 (tígāo). Die Bedeutung ist passivisch: „Diese Probleme müssen dringend gelöst werden“, ohne zu sagen, wer handeln soll. Stil: schriftlich, typisch für Nachrichten, Berichte und Amtstexte. 亟 nicht mit dem gleich klingenden 极 verwechseln; hinter 亟待 steht kein Nomen, sondern ein Verb.",
    "quiz": {
      "example": 0,
      "answer": "亟待",
      "distractors": [
        {
          "text": "有待",
          "reason": "有待 heißt nur „steht noch aus“; das „dringend“ der Übersetzung fehlt."
        },
        {
          "text": "期待",
          "reason": "期待 „sich freuen auf, erhoffen“ braucht eine Person als Subjekt; Probleme erhoffen nichts."
        },
        {
          "text": "难以",
          "reason": "难以 „kaum möglich“ würde bedeuten, dass sich die Probleme schwer lösen lassen, nicht dass sie dringend sind."
        }
      ],
      "accepted": [
        "急待",
        "急需"
      ]
    },
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:继…之后",
    "pattern": "继…之后",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Zahlen & Zeit",
    "meaning": "im Anschluss an …, nach … (als Nächstes auch)",
    "pinyin": "jì…zhīhòu",
    "examples": [
      {
        "chinese": "继上海之后，北京也出台了类似的政策。",
        "pinyin": "Jì Shànghǎi zhīhòu, Běijīng yě chūtái le lèisì de zhèngcè.",
        "german": "Nach Shanghai hat nun auch Peking eine ähnliche Regelung eingeführt."
      },
      {
        "chinese": "继去年获得冠军之后，她今年又一次站上了最高领奖台。",
        "pinyin": "Jì qùnián huòdé guànjūn zhīhòu, tā jīnnián yòu yí cì zhàn shàng le zuì gāo lǐngjiǎngtái.",
        "german": "Nach ihrem Titel im Vorjahr stand sie auch dieses Jahr wieder ganz oben auf dem Siegerpodest."
      },
      {
        "chinese": "继第一部小说之后，他又出版了一本散文集。",
        "pinyin": "Jì dì yī bù xiǎoshuō zhīhòu, tā yòu chūbǎn le yì běn sǎnwénjí.",
        "german": "Nach seinem ersten Roman veröffentlichte er nun einen Band mit Essays."
      }
    ],
    "legacyIds": [
      "继…之后"
    ],
    "formation": "继 + Person/Ereignis + 之后，Subjekt + (又/也) + Handlung",
    "notes": "Auch mit 以后 (yǐhòu) möglich (继……以后), seltener. Verwandt: 继而 (jì'ér) „und daraufhin“ verbindet zwei Handlungen, 继续 (jìxù) heißt „weitermachen“ und gehört nicht in diesen Rahmen.",
    "explanation": "Der Rahmen 继 (jì) … 之后 (zhīhòu) heißt „im Anschluss an …“: 继 bedeutet „folgen, fortsetzen“. Der Rahmen stellt etwas als nächstes Glied einer Reihe dar: Nach A geschieht nun auch B, oft mit 又 oder 也 im Hauptsatz. Zwischen 继 und 之后 kann ein Name (继上海之后 „nach Shanghai“), ein Nomen oder ein ganzes Ereignis stehen. Stil: schriftlich, sehr häufig in Nachrichten. Anders als das neutrale zeitliche (在)……以后 (yǐhòu)/之后 betont 继……之后 die Abfolge gleichartiger Dinge – das Erste hat gewissermaßen den Anfang gemacht.",
    "quiz": {
      "example": 0,
      "answer": "继",
      "distractors": [
        {
          "text": "继续",
          "reason": "继续 heißt „weitermachen“ und braucht eine Handlung danach; *继续上海之后 ist kein Satz."
        },
        {
          "text": "随着",
          "reason": "随着 „mit (zunehmendem) …“ steht vor einer Entwicklung und wird nicht mit 之后 kombiniert."
        },
        {
          "text": "自从",
          "reason": "自从 „seit“ braucht ein Ereignis und einen bis heute andauernden Zeitraum; „seit Shanghai“ ergibt keinen Sinn."
        }
      ]
    },
    "related": [
      "g:（在）……以前/以后/前/后",
      "g:继而"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:恕我直言",
    "pattern": "恕我直言",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "verzeihen Sie meine Offenheit, mit Verlaub",
    "pinyin": "shù wǒ zhíyán",
    "examples": [
      {
        "chinese": "恕我直言，这个计划根本行不通。",
        "pinyin": "Shù wǒ zhíyán, zhège jìhuà gēnběn xíng bu tōng.",
        "german": "Mit Verlaub, dieser Plan funktioniert so überhaupt nicht."
      },
      {
        "chinese": "恕我直言，您的报告里有几个数字是错的。",
        "pinyin": "Shù wǒ zhíyán, nín de bàogào lǐ yǒu jǐ ge shùzì shì cuò de.",
        "german": "Verzeihen Sie meine Offenheit, aber in Ihrem Bericht sind einige Zahlen falsch."
      },
      {
        "chinese": "恕我直言，你这样做对孩子没有好处。",
        "pinyin": "Shù wǒ zhíyán, nǐ zhèyàng zuò duì háizi méiyǒu hǎochù.",
        "german": "Entschuldige, wenn ich das so offen sage, aber damit tust du dem Kind nichts Gutes."
      }
    ],
    "legacyIds": [
      "恕我直言"
    ],
    "formation": "恕我直言，+ kritische Aussage",
    "notes": "Umgangssprachlichere Entsprechungen: 说实话 (shuō shíhuà), 老实说 (lǎoshi shuō), 坦白说 (tǎnbái shuō), 不瞒你说 (bù mán nǐ shuō). Sie leiten eher ein Geständnis oder die eigene Meinung ein, 恕我直言 dagegen fast immer Kritik am Gegenüber.",
    "explanation": "恕我直言 (shù wǒ zhíyán) heißt wörtlich „verzeihen Sie, dass ich offen rede“: 恕 „verzeihen“, 直言 (zhíyán) „geradeheraus sprechen“. Die höfliche Formel steht am Satzanfang, durch Komma abgetrennt, und kündigt eine Kritik oder eine unbequeme Wahrheit an. Sie ist formell und wird vor allem gegenüber Vorgesetzten, Älteren oder Fremden, in Diskussionen und Leserbriefen benutzt; unter Freunden klingt sie steif oder ironisch. Die Höflichkeit betrifft nur die Form: Was folgt, ist oft deutliche Kritik. Ähnliche Formeln: 恕我冒昧 (shù wǒ màomèi) „verzeihen Sie meine Kühnheit“, 容我直言 (róng wǒ zhíyán) „erlauben Sie mir, offen zu sprechen“.",
    "quiz": {
      "example": 1,
      "answer": "直言",
      "distractors": [
        {
          "text": "直接",
          "reason": "直接 ist ein Adjektiv/Adverb „direkt“; die feste Höflichkeitsformel lautet 恕我直言, *恕我直接 ist nicht üblich."
        },
        {
          "text": "发言",
          "reason": "发言 heißt „das Wort ergreifen, einen Redebeitrag halten“ – es geht hier nicht um die Erlaubnis zu reden, sondern um offene Kritik."
        },
        {
          "text": "坦白",
          "reason": "坦白 heißt als Verb eher „gestehen“; frei steht 坦白说 „ehrlich gesagt“, aber nicht nach 恕我."
        }
      ],
      "accepted": [
        "冒昧"
      ]
    },
    "related": [
      "g:坦白说",
      "g:老实说",
      "g:不瞒你说",
      "g:说真的"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:言归正传",
    "pattern": "言归正传",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "zurück zum Thema, kommen wir zur Sache",
    "pinyin": "yán guī zhèngzhuàn",
    "examples": [
      {
        "chinese": "闲话少说，言归正传。",
        "pinyin": "Xiánhuà shǎo shuō, yán guī zhèngzhuàn.",
        "german": "Genug geplaudert – kommen wir zur Sache."
      },
      {
        "chinese": "好了，言归正传，我们来讨论下个月的计划。",
        "pinyin": "Hǎo le, yán guī zhèngzhuàn, wǒmen lái tǎolùn xià ge yuè de jìhuà.",
        "german": "Gut, zurück zum Thema: Besprechen wir den Plan für nächsten Monat."
      },
      {
        "chinese": "他先讲了半天自己的旅行，这才言归正传，说起了会议的安排。",
        "pinyin": "Tā xiān jiǎng le bàntiān zìjǐ de lǚxíng, zhè cái yán guī zhèngzhuàn, shuō qǐ le huìyì de ānpái.",
        "german": "Erst erzählte er lange von seiner Reise, dann kam er endlich zur Sache und sprach über den Ablauf der Sitzung."
      }
    ],
    "legacyIds": [
      "言归正传"
    ],
    "formation": "(好了/闲话少说，) 言归正传，+ eigentliches Thema",
    "notes": "Varianten: 书归正传, 话归正传. Nicht zu verwechseln mit 话又说回来 (huà yòu shuō huílai), das meist eine Gegenposition einleitet („andererseits“). Siehe auch die Textstrategien zum Themenwechsel.",
    "explanation": "言归正传 (yán guī zhèngzhuàn) heißt „die Rede kehrt zur eigentlichen Geschichte zurück“: 正传 (zhèngzhuàn) war bei den traditionellen Geschichtenerzählern die Haupthandlung. Heute leitet der Ausdruck nach einer Abschweifung, Plauderei oder Einleitung zum eigentlichen Thema über – in Reden, Sitzungen, Vorträgen und Texten. Er steht meist als eigener Satzteil, oft nach 好了 (hǎo le) oder 闲话少说 (xiánhuà shǎo shuō) „genug geplaudert“. Er nimmt kein Objekt; das Thema folgt im nächsten Satzteil. Achtung: 传 wird hier zhuàn gelesen, nicht chuán.",
    "quiz": {
      "example": 1,
      "answer": "言归正传",
      "distractors": [
        {
          "text": "言下之意",
          "reason": "言下之意 „das Gemeinte, die Andeutung“ leitet eine unausgesprochene Bedeutung ein, nicht die Rückkehr zum Thema."
        },
        {
          "text": "一言为定",
          "reason": "一言为定 „abgemacht!“ besiegelt eine Vereinbarung und kann keine Besprechung einleiten."
        },
        {
          "text": "言过其实",
          "reason": "言过其实 „übertrieben“ bewertet eine Aussage und passt nicht als Überleitung zum Plan."
        }
      ],
      "accepted": [
        "书归正传",
        "话归正传"
      ]
    },
    "related": [
      "g:话（又）说回来",
      "g:话题转换"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:就事论事",
    "pattern": "就事论事",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "sachlich bei der Sache bleiben (auch: nur den Einzelfall sehen)",
    "pinyin": "jiù shì lùn shì",
    "examples": [
      {
        "chinese": "我们就事论事，不要把个人感情带进来。",
        "pinyin": "Wǒmen jiù shì lùn shì, bú yào bǎ gèrén gǎnqíng dài jìnlái.",
        "german": "Bleiben wir sachlich und lassen persönliche Gefühle außen vor."
      },
      {
        "chinese": "就事论事地说，这个方案确实还有改进的空间。",
        "pinyin": "Jiù shì lùn shì de shuō, zhège fāng'àn quèshí hái yǒu gǎijìn de kōngjiān.",
        "german": "Rein sachlich betrachtet lässt sich dieser Plan tatsächlich noch verbessern."
      },
      {
        "chinese": "分析问题不能只就事论事，还要找出背后的原因。",
        "pinyin": "Fēnxī wèntí bù néng zhǐ jiù shì lùn shì, hái yào zhǎochū bèihòu de yuányīn.",
        "german": "Bei der Analyse eines Problems darf man nicht am Einzelfall haften bleiben, man muss auch die Ursachen dahinter finden."
      }
    ],
    "legacyIds": [
      "就事论事"
    ],
    "formation": "Subjekt + 就事论事(，……)  ·  就事论事地 + Verb",
    "notes": "Verwandt: 对事不对人 (duì shì bú duì rén) „es geht um die Sache, nicht um die Person“. Gegenteil: 借题发挥 (jiè tí fāhuī) „einen Anlass nutzen, um über etwas anderes herzuziehen“.",
    "explanation": "就事论事 (jiù shì lùn shì) heißt „von der Sache ausgehend über die Sache reden“: 就 „ausgehend von“, 论 „erörtern“. Meist ist es positiv gemeint: sachlich bleiben, nur über den konkreten Fall sprechen, ohne Persönliches, alte Geschichten oder Nebenthemen hineinzuziehen – typisch in Streit und Diskussion (我们就事论事). Es kann Prädikat sein oder mit 地 als Adverbial stehen (就事论事地说 „sachlich betrachtet“). Daneben gibt es eine kritische Bedeutung: nur am Einzelfall haften, ohne Ursachen und Zusammenhänge zu sehen, oft mit 只 oder 不能 (不能只就事论事). Welche Lesart gemeint ist, zeigt der Zusammenhang.",
    "quiz": {
      "example": 0,
      "answer": "就事论事",
      "distractors": [
        {
          "text": "意气用事",
          "reason": "意气用事 „sich von Gefühlen leiten lassen“ ist genau das Gegenteil der geforderten Sachlichkeit."
        },
        {
          "text": "小题大做",
          "reason": "小题大做 „aus einer Mücke einen Elefanten machen“ wäre ein Vorwurf, keine Aufforderung zur Sachlichkeit."
        },
        {
          "text": "借题发挥",
          "reason": "借题发挥 „einen Anlass für etwas anderes ausnutzen“ widerspricht dem Bleiben bei der Sache."
        }
      ]
    },
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:倘使",
    "pattern": "倘使",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "falls, wenn (gehoben-schriftlich)",
    "pinyin": "tǎngshǐ",
    "examples": [
      {
        "chinese": "倘使当初听了他的劝告，今天也不会落到这个地步。",
        "pinyin": "Tǎngshǐ dāngchū tīng le tā de quàngào, jīntiān yě bú huì luò dào zhège dìbù.",
        "german": "Hätte ich damals auf seinen Rat gehört, wäre es heute nicht so weit gekommen."
      },
      {
        "chinese": "倘使你不同意，可以提出别的方案。",
        "pinyin": "Tǎngshǐ nǐ bù tóngyì, kěyǐ tíchū bié de fāng'àn.",
        "german": "Falls du nicht einverstanden bist, kannst du einen anderen Vorschlag machen."
      },
      {
        "chinese": "倘使明天下雨，比赛就改到下周举行。",
        "pinyin": "Tǎngshǐ míngtiān xià yǔ, bǐsài jiù gǎi dào xià zhōu jǔxíng.",
        "german": "Sollte es morgen regnen, wird das Spiel auf nächste Woche verschoben."
      }
    ],
    "legacyIds": [
      "倘使"
    ],
    "formation": "倘使 + Bedingung，(Subjekt) + (就/便/那么) + Folge",
    "notes": "Weitere gehobene Synonyme: 设若 (shèruò), 假若 (jiǎruò), 倘 allein. Nicht verwechseln mit 即使 (jíshǐ) „selbst wenn“, das ein Zugeständnis einleitet und 也 verlangt.",
    "explanation": "倘使 (tǎngshǐ) ist eine gehobene, schriftsprachliche Konjunktion für „falls, wenn, angenommen“. Es leitet die Bedingung im ersten Satzteil ein; im zweiten stehen oft 就, 便 (biàn) oder 那么 (nàme). Es kann sich auf reale Möglichkeiten beziehen (倘使明天下雨) oder auf Gedachtes und Vergangenes, das nicht eingetreten ist (倘使当初……). Bedeutung und Gebrauch entsprechen 倘若 (tǎngruò) und 假使 (jiǎshǐ); im Alltag sagt man 如果 (rúguǒ) oder 要是 (yàoshi). 倘使 begegnet vor allem in Literatur, älteren Texten und gehobenem Stil, in der gesprochenen Sprache kaum.",
    "quiz": {
      "example": 2,
      "answer": "倘使",
      "distractors": [
        {
          "text": "即使",
          "reason": "即使 „selbst wenn“ leitet ein Zugeständnis ein und verlangt 也; mit 就 und dem Sinn „falls“ passt es nicht."
        },
        {
          "text": "既然",
          "reason": "既然 „da ja“ setzt den Regen als Tatsache voraus; morgiges Wetter ist aber nur eine Möglichkeit."
        },
        {
          "text": "除非",
          "reason": "除非 „es sei denn“ nennt eine Ausnahmebedingung und verlangt meist 否则 oder 才; ein schlichtes „falls es regnet“ drückt es nicht aus."
        }
      ],
      "accepted": [
        "倘若",
        "假使",
        "假如",
        "如果",
        "要是",
        "设若"
      ]
    },
    "related": [
      "g:倘若",
      "g:设若",
      "g:假若/假使……，……",
      "g:如果……，就……"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:设若",
    "pattern": "设若",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "gesetzt den Fall, angenommen (sehr schriftsprachlich)",
    "pinyin": "shèruò",
    "examples": [
      {
        "chinese": "设若此事属实，后果将不堪设想。",
        "pinyin": "Shèruò cǐ shì shǔshí, hòuguǒ jiāng bùkān shèxiǎng.",
        "german": "Sollte sich das bewahrheiten, wären die Folgen nicht auszudenken."
      },
      {
        "chinese": "设若没有他的帮助，我们不可能成功。",
        "pinyin": "Shèruò méiyǒu tā de bāngzhù, wǒmen bù kěnéng chénggōng.",
        "german": "Ohne seine Hilfe hätten wir es nicht schaffen können."
      },
      {
        "chinese": "设若时光可以倒流，你最想回到哪一年？",
        "pinyin": "Shèruò shíguāng kěyǐ dàoliú, nǐ zuì xiǎng huídào nǎ yì nián?",
        "german": "Angenommen, man könnte die Zeit zurückdrehen – in welches Jahr würdest du am liebsten zurückkehren?"
      }
    ],
    "legacyIds": [
      "设若"
    ],
    "formation": "设若 + Annahme，(Subjekt) + (就/便/将) + Folge",
    "notes": "Neben 设若 (shèruò) gibt es das ebenso gehobene 倘使 (tǎngshǐ). 设 allein steht in mathematischen Texten für „sei, angenommen“ (设 x 为……).",
    "explanation": "设若 (shèruò) bedeutet „gesetzt den Fall, angenommen“: 设 „annehmen, voraussetzen“ (wie in 假设 (jiǎshè)), 若 „wenn“. Es leitet im ersten Satzteil eine Annahme ein, oft eine rein gedachte oder der Wirklichkeit widersprechende (设若没有……), auf die eine Folgerung folgt. Der Stil ist ausgesprochen schriftsprachlich, fast literarisch: Es begegnet in Essays, Erörterungen und älterer Literatur, im Gespräch praktisch nie. In der Bedeutung entspricht es 倘若 (tǎngruò), 假如 (jiǎrú) und 如果 (rúguǒ); für eigene Texte ist 倘若 oder 假如 die übliche Wahl.",
    "quiz": {
      "example": 1,
      "answer": "设若",
      "distractors": [
        {
          "text": "虽然",
          "reason": "虽然 „obwohl“ würde feststellen, dass wirklich keine Hilfe da war, und verlangt 但是 statt einer Folgerung."
        },
        {
          "text": "因为",
          "reason": "因为 „weil“ nennt einen tatsächlichen Grund; gemeint ist aber eine gedachte Annahme („ohne seine Hilfe hätten wir …“)."
        },
        {
          "text": "既然",
          "reason": "既然 „da ja“ setzt eine bekannte Tatsache voraus und passt nicht zu einer hypothetischen Annahme."
        }
      ],
      "accepted": [
        "倘若",
        "假如",
        "假使",
        "倘使",
        "如果",
        "要是"
      ]
    },
    "related": [
      "g:倘使",
      "g:倘若",
      "g:假若/假使……，……"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:殊不知",
    "pattern": "殊不知",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "dabei ahnt man nicht, dass … (Irrtum richtigstellen)",
    "pinyin": "shū bù zhī",
    "examples": [
      {
        "chinese": "他以为自己很聪明，殊不知别人早就看穿了他的把戏。",
        "pinyin": "Tā yǐwéi zìjǐ hěn cōngmíng, shūbùzhī biérén zǎojiù kànchuān le tā de bǎxì.",
        "german": "Er hielt sich für sehr schlau – dabei hatten die anderen sein Spielchen längst durchschaut."
      },
      {
        "chinese": "很多人以为不吃早饭能减肥，殊不知这样反而容易发胖。",
        "pinyin": "Hěn duō rén yǐwéi bù chī zǎofàn néng jiǎnféi, shūbùzhī zhèyàng fǎn'ér róngyì fāpàng.",
        "german": "Viele glauben, ohne Frühstück nehme man ab, dabei nimmt man so eher zu."
      },
      {
        "chinese": "她拼命加班挣钱，殊不知健康才是最重要的。",
        "pinyin": "Tā pīnmìng jiābān zhèng qián, shūbùzhī jiànkāng cái shì zuì zhòngyào de.",
        "german": "Sie macht ständig Überstunden, um Geld zu verdienen, und vergisst dabei, dass die Gesundheit das Wichtigste ist."
      }
    ],
    "legacyIds": [
      "殊不知"
    ],
    "formation": "Subjekt + 以为/觉得 + falsche Annahme，殊不知 + tatsächlicher Sachverhalt",
    "notes": "Häufig liest man auch 孰不知 (shú bù zhī) in derselben Bedeutung; diese Schreibung gilt in Normwerken als Fehler (eigener Zusatzpunkt). Ähnlich, aber neutraler: 没想到 (méi xiǎngdào) „unerwartet“, 其实 (qíshí) „eigentlich, in Wirklichkeit“.",
    "explanation": "殊不知 (shūbùzhī) heißt „man weiß aber gar nicht, dass …“ (殊 hier etwa „doch, gar“). Im ersten Satzteil steht eine Annahme oder ein Verhalten, oft mit 以为 (yǐwéi) oder 觉得 (juéde); 殊不知 leitet dann die tatsächliche Lage ein, die diese Annahme widerlegt: „er glaubt …, dabei …“. Oft schwingt Kritik oder Belehrung mit, im zweiten Teil stehen häufig 反而 (fǎn'ér) oder 早就 (zǎojiù). 殊不知 steht am Anfang des zweiten Satzteils, ein Subjekt davor ist nicht nötig. Stil: schriftlich (Kommentare, Ratgeber, Erzählungen).",
    "quiz": {
      "example": 1,
      "answer": "殊不知",
      "distractors": [
        {
          "text": "怪不得",
          "reason": "怪不得 „kein Wunder, dass“ erklärt etwas aus dem Vorigen, statt eine falsche Annahme zu widerlegen."
        },
        {
          "text": "何况",
          "reason": "何况 „geschweige denn, umso mehr“ steigert ein Argument, passt aber nicht zur Richtigstellung eines Irrtums."
        },
        {
          "text": "因此",
          "reason": "因此 „deshalb“ würde das Zunehmen als Folge des Glaubens darstellen, nicht als Widerlegung."
        }
      ]
    },
    "related": [
      "g:孰不知"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:孰不知",
    "pattern": "孰不知",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzarten",
    "meaning": "dabei ahnt man nicht … (umstrittene Nebenform von shūbùzhī)",
    "pinyin": "shú bù zhī",
    "examples": [
      {
        "chinese": "他以为这件事很简单，孰不知其中大有学问。",
        "pinyin": "Tā yǐwéi zhè jiàn shì hěn jiǎndān, shú bù zhī qízhōng dà yǒu xuéwèn.",
        "german": "Er hielt die Sache für einfach – dabei steckt viel mehr dahinter."
      },
      {
        "chinese": "大家都觉得他过得很好，孰不知他正经历着人生的低谷。",
        "pinyin": "Dàjiā dōu juéde tā guò de hěn hǎo, shú bù zhī tā zhèng jīnglì zhe rénshēng de dīgǔ.",
        "german": "Alle dachten, es gehe ihm gut, dabei steckte er gerade in der schwersten Phase seines Lebens."
      },
      {
        "chinese": "有人以为保健品吃得越多越好，孰不知吃多了反而伤身。",
        "pinyin": "Yǒu rén yǐwéi bǎojiànpǐn chī de yuè duō yuè hǎo, shú bù zhī chī duō le fǎn'ér shāng shēn.",
        "german": "Manche meinen, je mehr Nahrungsergänzungsmittel, desto besser – dabei schadet zu viel davon eher der Gesundheit."
      }
    ],
    "legacyIds": [
      "孰不知"
    ],
    "formation": "Subjekt + 以为/觉得 + Annahme，孰不知 + tatsächlicher Sachverhalt",
    "notes": "Die ursprüngliche Bedeutung „wer weiß nicht …?“ kommt nur noch in klassisch gefärbten Texten vor, meist als rhetorische Frage. Ausweichen kann man auch auf 其实 (qíshí) „in Wirklichkeit“.",
    "explanation": "孰不知 (shú bù zhī) wird heute meist genau wie 殊不知 (shūbùzhī) gebraucht: Im ersten Satzteil steht eine Annahme, 孰不知 leitet die Wirklichkeit ein, die sie widerlegt – „dabei …“. Wörtlich bedeutet es aber etwas anderes: 孰 ist das klassische „wer“, 孰不知 also „wer wüsste nicht?“, eine rhetorische Frage im Sinn von „jeder weiß“. Deshalb gilt die Verwendung als „dabei ahnt man nicht“ in Wörterbüchern und Stilratgebern als Verwechslung mit 殊不知, auch wenn sie in Zeitungen und im Internet sehr häufig ist. Für Lernende: verstehen, wenn man es liest; selbst besser 殊不知 schreiben.",
    "quiz": {
      "example": 0,
      "answer": "孰不知",
      "distractors": [
        {
          "text": "难怪",
          "reason": "难怪 „kein Wunder“ zieht eine Erklärung aus dem Vorigen, statt die Annahme zu widerlegen."
        },
        {
          "text": "于是",
          "reason": "于是 „daraufhin“ erzählt, was als Nächstes geschah, und widerspricht der Annahme nicht."
        },
        {
          "text": "不仅",
          "reason": "不仅 „nicht nur“ kündigt eine Steigerung mit 而且 an, keine Richtigstellung."
        }
      ],
      "accepted": [
        "殊不知"
      ]
    },
    "related": [
      "g:殊不知"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:前者…后者…",
    "pattern": "前者…后者…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "Ersteres …, Letzteres … (Rückverweis auf zwei Dinge)",
    "pinyin": "qiánzhě…hòuzhě…",
    "examples": [
      {
        "chinese": "知识和智慧不同，前者是信息的积累，后者是对信息的运用。",
        "pinyin": "Zhīshi hé zhìhuì bùtóng, qiánzhě shì xìnxī de jīlěi, hòuzhě shì duì xìnxī de yùnyòng.",
        "german": "Wissen und Weisheit sind verschieden: Ersteres ist angesammelte Information, Letzteres der Umgang damit."
      },
      {
        "chinese": "留在北京还是回老家？前者机会多，后者生活压力小。",
        "pinyin": "Liú zài Běijīng háishi huí lǎojiā? Qiánzhě jīhuì duō, hòuzhě shēnghuó yālì xiǎo.",
        "german": "In Peking bleiben oder in die Heimat zurück? Im ersten Fall gibt es mehr Chancen, im zweiten weniger Druck im Alltag."
      },
      {
        "chinese": "城市和农村各有优点：前者交通方便，后者空气新鲜。",
        "pinyin": "Chéngshì hé nóngcūn gè yǒu yōudiǎn: qiánzhě jiāotōng fāngbiàn, hòuzhě kōngqì xīnxiān.",
        "german": "Stadt und Land haben beide ihre Vorzüge: Die Stadt ist verkehrsgünstig, auf dem Land ist die Luft frisch."
      }
    ],
    "legacyIds": [
      "前者…后者…"
    ],
    "formation": "A 和 B (+ Kommentar)，前者 + Aussage über A，后者 + Aussage über B",
    "notes": "Nicht verwechseln mit 后来 (hòulái) „später“ (zeitlich) oder mit 两者 (liǎngzhě) „beide“. Verwandte Rückverweise: 二者 (èrzhě) „die beiden“, 其一 (qíyī) …… 其二 (qí'èr) …… „erstens … zweitens …“.",
    "explanation": "前者 (qiánzhě) „das Erstere“ und 后者 (hòuzhě) „das Letztere“ verweisen auf zwei vorher genannte Dinge oder Personen, in der Reihenfolge ihrer Nennung. So lassen sich beide knapp gegenüberstellen, ohne sie zu wiederholen. Typisch: Zuerst werden A und B genannt (oft mit „A 和 B 不同 (bùtóng)“ oder „有两种……“), dann folgt „前者……，后者……“, meist parallel gebaut. Es müssen genau zwei Bezugsgrößen sein, sonst ist der Verweis unklar. Beide Wörter können auch einzeln stehen (我更喜欢后者). Stil: schriftlich bzw. sachlich (Aufsätze, Analysen, Vorträge); im Gespräch sagt man eher 第一个/第二个 oder wiederholt die Nomen.",
    "quiz": {
      "example": 2,
      "answer": "后者",
      "distractors": [
        {
          "text": "前者",
          "reason": "前者 meint die Stadt; die frische Luft gehört aber zum Land, dem Zweitgenannten – und 前者 stünde doppelt."
        },
        {
          "text": "两者",
          "reason": "两者 „beide“ würde auch der Stadt frische Luft zuschreiben – das ist nicht gemeint."
        },
        {
          "text": "后来",
          "reason": "后来 „später“ ist zeitlich und verweist nicht auf das Zweitgenannte."
        }
      ]
    },
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:…固然好，但…",
    "pattern": "…固然好，但…",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "… ist zwar gut, aber … (Wert einräumen, Wichtigeres nennen)",
    "pinyin": "…gùrán hǎo, dàn…",
    "examples": [
      {
        "chinese": "赚钱固然好，但身体健康更重要。",
        "pinyin": "Zhuàn qián gùrán hǎo, dàn shēntǐ jiànkāng gèng zhòngyào.",
        "german": "Geld verdienen ist zwar schön und gut, aber die Gesundheit ist wichtiger."
      },
      {
        "chinese": "经济发展固然好，但不能以牺牲环境为代价。",
        "pinyin": "Jīngjì fāzhǎn gùrán hǎo, dàn bù néng yǐ xīshēng huánjìng wéi dàijià.",
        "german": "Wirtschaftswachstum ist zwar gut, darf aber nicht auf Kosten der Umwelt gehen."
      },
      {
        "chinese": "有理想固然好，但也要一步一步地去努力。",
        "pinyin": "Yǒu lǐxiǎng gùrán hǎo, dàn yě yào yí bù yí bù de qù nǔlì.",
        "german": "Ideale zu haben ist gut, aber man muss auch Schritt für Schritt darauf hinarbeiten."
      }
    ],
    "legacyIds": [
      "…固然好，但…"
    ],
    "formation": "Sache + 固然好，但(是)/可(是)/不过 + Einschränkung oder Wichtigeres",
    "notes": "Dies ist ein häufiger Sonderfall von 固然 (gùrán), einem eigenen Punkt, das auch mit anderen Prädikaten steht (固然重要, 固然有道理). Ähnlich: 诚然 (chéngrán) „gewiss, freilich“; umgangssprachlich: X 好是好，就是 (jiùshì)/不过 (búguò) ……",
    "explanation": "Mit „X 固然好，但……“ räumt der Sprecher ein, dass X durchaus gut oder wünschenswert ist (固然 (gùrán) „zwar, gewiss“), und setzt dann im zweiten Teil den eigentlichen Schwerpunkt: eine Bedingung, eine Grenze oder etwas Wichtigeres. Typische Fortsetzungen sind 但……更重要, 但不能……, 但也要……. Das Gewicht liegt immer auf dem zweiten Teil. 固然 steht nach dem Thema, direkt vor 好. Stil: argumentativ, eher schriftlich, aber auch in gehobener Rede. Anders als bei 虽然 (suīrán) wird der erste Teil ausdrücklich als richtig anerkannt, nicht nur als Gegensatz erwähnt.",
    "quiz": {
      "example": 0,
      "answer": "固然",
      "distractors": [
        {
          "text": "既然",
          "reason": "既然 „da ja“ leitet eine Begründung ein und verlangt eine Folgerung (就), keinen Gegensatz mit 但."
        },
        {
          "text": "果然",
          "reason": "果然 „tatsächlich (wie erwartet)“ bestätigt eine Erwartung und räumt nichts ein."
        },
        {
          "text": "竟然",
          "reason": "竟然 „überraschenderweise“ drückt Erstaunen aus; vom Einräumen „zwar … aber“ bleibt nichts übrig."
        }
      ],
      "accepted": [
        "虽然",
        "虽说"
      ]
    },
    "related": [
      "g:固然",
      "g:诚然",
      "g:虽说……，但/可……",
      "g:……X是X，就是/不过……"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:有感于此",
    "pattern": "有感于此",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Konjunktionen",
    "meaning": "davon bewegt, dies zum Anlass nehmend",
    "pinyin": "yǒu gǎn yú cǐ",
    "examples": [
      {
        "chinese": "看到许多老人不会用智能手机，他有感于此，办了一个免费培训班。",
        "pinyin": "Kàndào xǔduō lǎorén bú huì yòng zhìnéng shǒujī, tā yǒu gǎn yú cǐ, bàn le yí ge miǎnfèi péixùnbān.",
        "german": "Als er sah, dass viele ältere Menschen kein Smartphone bedienen können, rief er daraufhin einen kostenlosen Kurs ins Leben."
      },
      {
        "chinese": "校园里浪费粮食的现象很严重，有感于此，学生会发起了节约粮食的活动。",
        "pinyin": "Xiàoyuán lǐ làngfèi liángshi de xiànxiàng hěn yánzhòng, yǒu gǎn yú cǐ, xuéshēnghuì fāqǐ le jiéyuē liángshi de huódòng.",
        "german": "Auf dem Campus wurden viele Lebensmittel verschwendet; das nahm die Studierendenvertretung zum Anlass für eine Aktion gegen Lebensmittelverschwendung."
      },
      {
        "chinese": "这些年家乡变化很大，有感于此，作者写下了这篇文章。",
        "pinyin": "Zhèxiē nián jiāxiāng biànhuà hěn dà, yǒu gǎn yú cǐ, zuòzhě xiě xià le zhè piān wénzhāng.",
        "german": "Die Heimat hat sich in den letzten Jahren stark verändert; davon bewegt, schrieb der Autor diesen Text."
      }
    ],
    "legacyIds": [
      "有感于此"
    ],
    "formation": "Sachverhalt/Beobachtung，有感于此，Subjekt + Handlung (schreiben, gründen …)",
    "notes": "Ähnlich, aber sachlicher: 有鉴于此 (yǒu jiàn yú cǐ) bzw. 鉴于此 (jiànyú cǐ) „angesichts dessen“ nennt eine nüchterne Begründung, 有感于此 eine emotionale Anregung. Anders 由此可见 (yóucǐ kějiàn) „daraus ersieht man“: Das ist eine Schlussfolgerung, keine Handlung.",
    "explanation": "有感于此 (yǒu gǎn yú cǐ) heißt „davon berührt, dadurch angeregt“: 有感 (yǒugǎn) „Eindrücke haben, bewegt sein“, 于 „von“, 此 „diesem“. 此 verweist zurück auf den vorher geschilderten Sachverhalt, meist einen Missstand oder ein bewegendes Erlebnis. Danach folgt, was jemand daraufhin tut: einen Text schreiben, eine Initiative gründen, etwas ändern. Typisch ist es in Vorworten, Essays, Reden und Berichten, z. B. „有感于此，笔者 (bǐzhě) ……“. Stil: schriftlich. Es steht am Satzanfang oder nach dem Subjekt; mit einem konkreten Objekt statt 此 lautet es 有感于 + Nomen (有感于他的经历).",
    "quiz": {
      "example": 1,
      "answer": "有感于此",
      "distractors": [
        {
          "text": "由此可见",
          "reason": "由此可见 „daraus ersieht man“ leitet eine Schlussfolgerung ein, nicht eine Handlung, zu der man sich angeregt fühlt."
        },
        {
          "text": "与此同时",
          "reason": "与此同时 „gleichzeitig“ stellt nur zeitlich nebeneinander und zeigt keinen Anlass."
        },
        {
          "text": "除此之外",
          "reason": "除此之外 „darüber hinaus“ fügt etwas hinzu, statt die Aktion als Reaktion auf den Missstand darzustellen."
        }
      ]
    },
    "related": [
      "g:鉴于¹"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  },
  {
    "id": "g:不可同日而语",
    "pattern": "不可同日而语",
    "level": "Zusatz",
    "kind": "zusatz",
    "category": "Satzmuster",
    "meaning": "nicht in einem Atemzug zu nennen, nicht zu vergleichen",
    "pinyin": "bùkě tóng rì ér yǔ",
    "examples": [
      {
        "chinese": "如今的生活条件和三十年前已经不可同日而语。",
        "pinyin": "Rújīn de shēnghuó tiáojiàn hé sānshí nián qián yǐjīng bùkě tóng rì ér yǔ.",
        "german": "Die Lebensbedingungen von heute sind mit denen vor dreißig Jahren nicht mehr zu vergleichen."
      },
      {
        "chinese": "两家公司的规模不可同日而语。",
        "pinyin": "Liǎng jiā gōngsī de guīmó bùkě tóng rì ér yǔ.",
        "german": "Die beiden Firmen sind von ihrer Größe her überhaupt nicht vergleichbar."
      },
      {
        "chinese": "这家小店和大超市当然不可同日而语，但它的服务特别热情。",
        "pinyin": "Zhè jiā xiǎo diàn hé dà chāoshì dāngrán bùkě tóng rì ér yǔ, dàn tā de fúwù tèbié rèqíng.",
        "german": "Mit einem großen Supermarkt kann sich dieser kleine Laden natürlich nicht messen, aber der Service ist besonders freundlich."
      }
    ],
    "legacyIds": [
      "不可同日而语"
    ],
    "formation": "A 和/与 B + (已经/根本) + 不可同日而语",
    "notes": "Variante: 不能同日而语. Gegenteil: 不相上下 (bù xiāng shàng xià) „gleichauf, ebenbürtig“. Verwandt: 不亚于 (bú yàyú) „steht … nicht nach“.",
    "explanation": "不可同日而语 (bùkě tóng rì ér yǔ) heißt wörtlich „kann nicht am selben Tag besprochen werden“: Zwei Dinge sind so verschieden – meist in Größe, Niveau oder Qualität –, dass man sie nicht miteinander vergleichen kann. Häufig geht es um früher und heute (现在和以前已经不可同日而语) oder um zwei ungleiche Konkurrenten. Die beiden Vergleichsgrößen stehen vorn, verbunden mit 和 oder 与 (yǔ); davor oft 已经 (yǐjīng), 根本 (gēnběn) oder 当然 (dāngrán). Welche Seite besser ist, sagt der Ausdruck selbst nicht, das ergibt sich aus dem Zusammenhang. Stil: schriftlich, aber auch in gehobener Rede.",
    "quiz": {
      "example": 1,
      "answer": "不可同日而语",
      "distractors": [
        {
          "text": "不相上下",
          "reason": "不相上下 „ebenbürtig“ sagt das Gegenteil: Die Firmen wären etwa gleich groß."
        },
        {
          "text": "一模一样",
          "reason": "一模一样 „völlig gleich“ widerspricht der Aussage, dass die Größen nicht vergleichbar sind."
        },
        {
          "text": "不胜枚举",
          "reason": "不胜枚举 „zu zahlreich zum Aufzählen“ betont eine große Menge und vergleicht nichts."
        }
      ],
      "accepted": [
        "不能同日而语"
      ]
    },
    "related": [
      "g:不亚于……"
    ],
    "review": {
      "batch": "g006",
      "policy": "author",
      "date": "2026-10-10"
    }
  }
]);
