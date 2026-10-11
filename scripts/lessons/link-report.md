# Lektionen ↔ Grammatikpunkte (HSK 2025) — Dry-Run-Bericht

Erzeugt von `scripts/lessons/link.cjs` am 2026-10-11. Nichts in `grammar-lessons.js` wurde geändert. Manuelle Entscheidungen: `overrides.json` (Links, Hauptpunkte, Level), `review-notes.json` (inhaltliche Befunde), `proposals.json` (neue Lektionen).

## Zusammenfassung

| | |
|---|---|
| Lektionen | 45 |
| Links gesamt (`grammarIds`) | 209 (Ø 4.6 je Lektion) |
| davon automatisch gefunden und behalten | 108 |
| davon manuell ergänzt (overrides.json) | 101 |
| automatische Treffer verworfen | 68 |
| Hauptpunkte alle automatisch im Titel gefunden | 17 |
| Hauptpunkte teilweise im Titel gefunden | 16 |
| Hauptpunkte nur schwach gefunden (Überschrift/Beispiele) | 3 (lesson-29, lesson-6, lesson-38) |
| Hauptpunkte gar nicht automatisch gefunden | 9 (lesson-21, lesson-23, lesson-18, lesson-12, lesson-7, lesson-8, lesson-41, lesson-9, lesson-13) |
| Level geändert | 21 von 45 |
| Inhaltliche Befunde | 0 Fehler, 0 Warnungen, 19 Hinweise |
| Vorgeschlagene neue Lektionen | 45 (HSK1–4 (Lücken): 14, HSK5: 12, HSK6: 12, HSK7-9: 7) |

## 1. Neue Level (HSK 2025)

Das Level ergibt sich aus den **Hauptpunkten** einer Lektion (Spalte „Hauptpunkte“): Minimum–Maximum ihrer Level. Gespeichert wird es im Format der Engine (`HSK2/HSK3`), angezeigt hier als Spanne.

| Lektion | Titel | alt | neu | Hauptpunkte (Level) | Quelle |
|---|---|---|---|---|---|
| lesson-21 | Chinesische Satzstellung | HSK 1 | HSK 1 | `主谓句1：动词谓语句` (1), `状语：副词、形容词作状语；表示时间、处所的词语作状语` (1) | overrides.json |
| lesson-22 | Fragen stellen | HSK 1 | HSK 1 | `疑问句：是非问句` (1), `疑问句：特指问句` (1), `吗` (1), `疑问代词@HSK1` (1) | overrides.json |
| lesson-23 | 有 (yǒu) | HSK 1 | HSK 1 | `“有”字句1：表示领有` (1), `处所+有+数量短语+名词` (1) | overrides.json |
| lesson-24 | 在 (zài) | HSK 1 | HSK 1 | `在（引出时间、处所）` (1), `方位名词@HSK1` (1), `其他结构类型：方位短语` (1) | overrides.json |
| lesson-26 | 这 (zhè) und 那 (nà) | HSK 1 | **HSK 1–2** | `指示代词@HSK1` (1), `这` (1), `指示代词@HSK2` (2) | overrides.json |
| lesson-25 | 想 (xiǎng) und 要 (yào) | HSK 1 | HSK 1 | `想` (1), `要` (1) | overrides.json |
| lesson-27 | 很, 太, 真, 非常 | HSK 1 | HSK 1 | `程度副词@HSK1` (1), `很` (1), `太` (1), `真` (1), `非常` (1), `主谓句2：形容词谓语句` (1) | overrides.json |
| lesson-18 | Zählwörter (量词) | HSK 1 | HSK 1 | `名量词@HSK1` (1), `其他结构类型：数量短语` (1) | overrides.json |
| lesson-20 | 不 vs. 没 | HSK 1 | HSK 1 | `不` (1), `没（有）` (1), `否定副词@HSK1` (1) | overrides.json |
| lesson-28 | 也 (yě) und 都 (dōu) | HSK 1–2 | **HSK 1** | `也` (1), `都¹` (1) | overrides.json |
| lesson-1 | 了 (le) | HSK 1–2 | **HSK 1** | `了¹` (1), `了²` (1), `完成态：用动态助词“了¹”表示` (1), `变化态：用动态助词“了²”表示` (1) | overrides.json |
| lesson-2 | 的, 地, 得 | HSK 1–2 | HSK 1–2 | `的¹` (1), `地` (2), `得` (2) | overrides.json |
| lesson-17 | 会, 能, 可以 | HSK 1–2 | **HSK 1** | `会` (1), `能` (1), `可以` (1) | overrides.json |
| lesson-19 | 在, 正在, 正 | HSK 1–2 | **HSK 1** | `在` (1), `正在` (1), `……在/正在+动词` (1), `……在/正在+动词……+呢` (1), `……呢` (1) | overrides.json |
| lesson-12 | Thema-Kommentar-Struktur | HSK 1–2 | **HSK 2** | `主谓句4：主谓谓语句` (2), `受事主语` (2) | overrides.json |
| lesson-29 | 时间表达 | HSK 2 | **HSK 2–3** | `数量补语2：表示动作持续的时间` (2), `（在）……以前/以后/前/后` (3) | overrides.json |
| lesson-30 | 就 und 才 | HSK 2 | **HSK 2–3** | `就¹` (2), `才¹` (3) | overrides.json |
| lesson-31 | 还是 und 或者 | HSK 2 | **HSK 2–3** | `疑问句：用“还是”连接的选择问句` (2), `或者` (3), `还是……吧` (2) | overrides.json |
| lesson-32 | 又 und 再 | HSK 2 | **HSK 3** | `又` (3), `又……，又……` (3) | overrides.json |
| lesson-11 | 过 (guò) | HSK 2 | HSK 2 | `过` (2), `经历态：用动态助词“过”表示` (2) | overrides.json |
| lesson-35 | 一边...一边 | HSK 2 | **HSK 3** | `一边……，一边……` (3), `一边` (3) | overrides.json |
| lesson-36 | 先...然后...最后 | HSK 2 | **HSK 3** | `先……，再/然后……` (3) | overrides.json |
| lesson-33 | 从...到 und 离 | HSK 2 | HSK 2 | `从¹` (2) | overrides.json |
| lesson-3 | 是...的 Konstruktion | HSK 2–3 | **HSK 2** | `“是……的”句1：强调时间、地点、方式、动作者` (2) | overrides.json |
| lesson-6 | 比 (bǐ) Vergleiche | HSK 2–3 | HSK 2–3 | `A比B+形容词` (2), `A比B+形容词+数量补语/程度补语` (2), `A有/没有B（+这么/那么）+形容词` (2), `A跟B一样+形容词` (3) | overrides.json |
| lesson-15 | 因为...所以 | HSK 2–3 | **HSK 2** | `因为……，所以……` (2) | overrides.json |
| lesson-34 | 给, 对, 跟, 向 | HSK 2–3 | HSK 2–3 | `给` (2), `跟¹` (2), `向²` (3) | overrides.json |
| lesson-7 | 结果补语 — Resultativkomplemente | HSK 2–3 | HSK 2–3 | `动词+错/懂/好/会/完` (2), `动词+到/住/走/上` (3) | overrides.json |
| lesson-8 | 状态补语 — Zustandskomplemente mit 得 | HSK 2–3 | HSK 2–3 | `动词+得+形容词性短语` (2), `主语+动词+宾语+动词+补语` (3) | overrides.json |
| lesson-10 | 着 (zhe) | HSK 2–3 | HSK 2–3 | `着` (2), `动词+着：（1）表示状态的持续` (2), `“着”表示动作的伴随：动词1+着+动词2` (3), `处所+动词+着(+数量短语)+名词` (2) | overrides.json |
| lesson-37 | 快要...了, 要...了 | HSK 2–3 | **HSK 2** | `要/快要/就要……了` (2) | overrides.json |
| lesson-4 | 把 (bǎ) Konstruktion | HSK 3 | HSK 3 | `把` (3), `主语+把+宾语+动词+在/到+处所` (3), `主语+把+宾语+动词+结果补语/趋向补语/状态补语` (3) | overrides.json |
| lesson-14 | 虽然...但是 | HSK 3 | **HSK 2–3** | `虽然……，但是……` (2), `虽然……，可是……` (3) | overrides.json |
| lesson-38 | 除了...以外 | HSK 3 | HSK 3 | `除了……（以外），……还/也/都……` (3) | overrides.json |
| lesson-39 | 不但...而且 | HSK 3 | HSK 3 | `不但……，而且……` (3) | overrides.json |
| lesson-40 | 只要...就 & 只有...才 | HSK 3 | HSK 3 | `只要……，就……` (3), `只有……，才……` (3) | overrides.json |
| lesson-41 | 可能补语 V得/V不 | HSK 3 | HSK 3 | `动词+得/不+动词/形容词` (3) | overrides.json |
| lesson-42 | 对...来说 & 关于 | HSK 3 | HSK 3 | `对……来说` (3), `关于` (3) | overrides.json |
| lesson-5 | 被 (bèi) Passiv | HSK 3–4 | **HSK 3** | `被` (3), `主语+被+宾语+动词+其他成分` (3), `主语+被+动词+其他成分` (3) | overrides.json |
| lesson-9 | 趋向补语 — Richtungskomplemente | HSK 3–4 | **HSK 2–3** | `简单趋向补语的趋向意义用法：（1）动词+来/去` (2), `动词+上/下/进/出/过/回` (2), `复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去` (2), `表示动作行为的开始：动词+上/起来` (3), `表示动作行为的持续：动词+下去/下来` (3), `趋向补语的引申用法：（1）表示结果意义：动词+出/起/下` (3) | overrides.json |
| lesson-16 | 越...越... | HSK 3–4 | **HSK 3** | `越……越……` (3), `越来越` (3) | overrides.json |
| lesson-13 | 连...都/也 | HSK 4 | HSK 4 | `连……也/都……，……更……` (4) | overrides.json |
| lesson-43 | 既...又/也 & 又...又 | HSK 4 | **HSK 3–4** | `既……，又/也……` (4), `又……，又……` (3) | overrides.json |
| lesson-44 | 不管...都 & 无论...都 | HSK 4 | HSK 4 | `不管……，都/也……` (4), `无论……，都/也……` (4) | overrides.json |
| lesson-45 | 与其...不如 & 宁可...也 | HSK 4 | **HSK 7-9** | `与其……，宁愿/宁可……` (7-9), `宁可/宁愿……，也不……` (7-9) | overrides.json |

Verschiebungen: HSK 1 → HSK 1–2 (1), HSK 1–2 → HSK 1 (4), HSK 1–2 → HSK 2 (1), HSK 2 → HSK 2–3 (3), HSK 2 → HSK 3 (3), HSK 2–3 → HSK 2 (3), HSK 3 → HSK 2–3 (1), HSK 3–4 → HSK 3 (2), HSK 3–4 → HSK 2–3 (1), HSK 4 → HSK 3–4 (1), HSK 4 → HSK 7-9 (1).

## 2. Links je Lektion

Konfidenz: **hoch** = Muster/Wort steht im Titel oder Untertitel; **mittel** = in einer Abschnittsüberschrift; **niedrig** = nur in ≥ 2 Beispielsätzen; **manuell** = aus `overrides.json`. ★ = Hauptpunkt (bestimmt das Level).

### lesson-21 — Chinesische Satzstellung (HSK 1 → HSK 1)

> Titel ohne chinesisches Muster: SVO und Stellung von Zeit, Ort und Adverb sind die Satzglied-Punkte von HSK 1.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:状语：副词、形容词作状语；表示时间、处所的词语作状语` Adverbial vor dem Verb: Zeit, Ort, Art und Weise | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:主谓句1：动词谓语句` Satztyp Verbsatz: Subjekt – Verb – Objekt | HSK1 | manuell | Hauptpunkt (overrides.json) |
|  | `g:还¹` noch, außerdem (fügt etwas hinzu) | HSK1 | manuell | overrides.json |
|  | `g:在（引出时间、处所）` in, an, auf, um – Ort oder Zeit einer Handlung (Präposition) | HSK1 | manuell | overrides.json |
|  | `g:主语：名词、代词或名词性短语作主语` Subjekt: Nomen, Pronomen oder Nominalphrase vor dem Prädikat | HSK1 | manuell | overrides.json |
|  | `g:宾语：名词、代词或名词性短语作宾语` Objekt: Nomen, Pronomen oder Nominalphrase nach dem Verb | HSK1 | manuell | overrides.json |
|  | `g:已经` schon, bereits (eingetreten oder erreicht) | HSK2 | manuell | overrides.json |
|  | `g:经常` häufig, regelmäßig (neutrale Standardform) | HSK2 | manuell | overrides.json |

### lesson-22 — Fragen stellen (HSK 1 → HSK 1)

> 呢 im Untertitel ist die Rückfrage 呢²; der Verlaufs-呢 im Beispiel 他还在睡觉呢 gehört zu lesson-19.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:疑问代词@HSK1` Fragewörter: was, wer, wo, wie, wie viele … | HSK1 | mittel (Überschrift) | Überschriften nennen 多少, 几 |
| ★ | `g:吗` Fragepartikel für Ja/Nein-Fragen | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:疑问句：是非问句` Ja/Nein-Frage mit Fragepartikel am Satzende | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:疑问句：特指问句` W-Frage mit Fragewort (was, wer, wo, wie viele) | HSK1 | manuell | Hauptpunkt (overrides.json) |
|  | `g:什么` was; was für ein … | HSK1 | niedrig (Beispiele) | 2 Beispielsätze |
|  | `g:几` wie viele (kleine Zahl, mit Zählwort) | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:谁` wer, wen, wem; wessen | HSK1 | manuell | overrides.json |
|  | `g:哪儿` wo, wohin (Frage nach dem Ort) | HSK1 | manuell | overrides.json |
|  | `g:怎么` wie (Art und Weise); wieso (Verwunderung) | HSK1 | manuell | overrides.json |
|  | `g:语气助词@HSK1` Modalpartikeln am Satzende: Frage, Vorschlag, Rückfrage, Ver | HSK1 | hoch (Titel) | Titel nennt 吗, 呢 |
|  | `g:呢²` und …? / wo ist …? – verkürzte Rückfrage nach einem Nomen | HSK1 | hoch (Titel) | Titel/Untertitel |
|  | `g:为什么` warum (Frage nach dem Grund) | HSK2 | manuell | overrides.json |

### lesson-23 — 有 (yǒu) (HSK 1 → HSK 1)

> Der Titel nennt nur 有; Besitz und Existenz sind die 有-Satzmuster von HSK 1.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:“有”字句1：表示领有` haben, besitzen (Besitz) | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:处所+有+数量短语+名词` an einem Ort gibt es (Anzahl) … | HSK1 | manuell | Hauptpunkt (overrides.json) |
|  | `g:有（一）点儿` ein bisschen, etwas (meist unerwünscht) | HSK1 | niedrig (Beispiele) | 2 Beispielsätze |
|  | `g:否定副词@HSK1` Verneinung: nicht – nicht geschehen / nicht haben – Verbot „ | HSK1 | manuell | overrides.json |
|  | `g:没（有）` nicht (getan), noch nicht – Verneinung eingetretener Handlun | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:A有/没有B（+这么/那么）+形容词` (Abschnittsüberschrift)

### lesson-24 — 在 (zài) (HSK 1 → HSK 1)

> g:在 ist der Verlaufs-在 (lesson-19). Das Vollverb 在 „sich befinden“ ist Wortschatz, kein eigener Grammatikpunkt.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:方位名词@HSK1` Richtungswörter: oben, unten, innen, außen, vorn, hinten | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:在（引出时间、处所）` in, an, auf, um – Ort oder Zeit einer Handlung (Präposition) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:其他结构类型：方位短语` Ortsangabe: Nomen + Lokalwort („auf dem Tisch“, „im Zimmer“) | HSK1 | manuell | Hauptpunkt (overrides.json) |
|  | `g:—边` Nachsilbe für Ortswörter: oben, vorne, links … | HSK1 | manuell | overrides.json |
|  | `g:处所+有+数量短语+名词` an einem Ort gibt es (Anzahl) … | HSK1 | manuell | overrides.json |
|  | `g:面` Nachsilbe -mian für Ortswörter: oben, drinnen, draußen, hint | HSK2 | manuell | overrides.json |

Verworfen: `g:哪儿` (2 Beispielsätze), `g:在` (Titel/Untertitel)

### lesson-26 — 这 (zhè) und 那 (nà) (HSK 1 → HSK 1–2)

> Die Abschnitte zu 这样/那样 und 这么/那么 sind HSK-2-Stoff (指示代词@HSK2), daher HSK 1–2.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:指示代词@HSK1` Demonstrativpronomen: dies, das, hier, dort, diese, manche … | HSK1 | hoch (Titel) | Titel nennt 这, 那 |
| ★ | `g:这` dies, diese(r) (Hinweis auf Nahes) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:指示代词@HSK2` Hinweiswörter für Art und Grad: so, solch; jeder | HSK2 | mittel (Überschrift) | Überschriften nennen 那么, 那样, 这么, 这样 |
|  | `g:那么` so, dermaßen (Grad oder Art, auf Entferntes bezogen) | HSK2 | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:A这A那` (Titel/Untertitel), `g:这/那也不X，那/这也不Y` (Titel/Untertitel)

### lesson-25 — 想 (xiǎng) und 要 (yào) (HSK 1 → HSK 1)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:想` möchten, vorhaben (Wunsch) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:要` wollen (fester Wille) / müssen | HSK1 | hoch (Titel) | Titel/Untertitel |
|  | `g:会` können (erlernt) / werden (Vermutung) | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:能` können (Umstände, Leistung) / dürfen | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:可以` dürfen / man kann (Erlaubnis, Möglichkeit) | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:不要` nicht …! / bitte nicht – verneinte Aufforderung | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |

### lesson-27 — 很, 太, 真, 非常 (HSK 1 → HSK 1)

> 比较 und 挺 aus der Gradskala sind HSK 3 (程度副词@HSK3); Adjektiv + 一点儿 ist g:形容词+数量补语 (HSK 2).

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:程度副词@HSK1` Gradadverbien: sehr, äußerst, zu, wirklich, ein bisschen | HSK1 | hoch (Titel) | Titel nennt 非常, 很, 太, 真 |
| ★ | `g:很` sehr; Bindeglied vor einem Adjektiv als Prädikat | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:太` zu … (Übermaß); so …! (begeisterter Ausruf) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:真` wirklich, echt (gefühlsbetonte Bewertung, Ausruf) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:非常` äußerst, außerordentlich (stärker als „sehr“) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:主谓句2：形容词谓语句` Adjektivsatz: „X ist groß“ ohne Kopula | HSK1 | manuell | Hauptpunkt (overrides.json) |
|  | `g:有（一）点儿` ein bisschen, etwas (meist unerwünscht) | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:感叹句` Ausrufesatz: Freude, Staunen, Ärger („Wie …!“, „Zu …!“) | HSK1 | manuell | overrides.json |
|  | `g:形容词+数量补语` um wie viel: etwas, ein bisschen, zwei Jahre … (Menge nach d | HSK2 | manuell | overrides.json |
|  | `g:程度副词@HSK3` Gradadverbien: ziemlich, noch mehr, besonders, recht, etwas, | HSK3 | manuell | overrides.json |

Verworfen: `g:了¹` (Abschnittsüberschrift), `g:了²` (Abschnittsüberschrift)

### lesson-18 — Zählwörter (量词) (HSK 1 → HSK 1)

> 张, 条, 位 sind HSK 2, 双, 辆, 封, 把 HSK 3 — verlinkt als Nebenpunkte. Bezug zum Zählwörter-Umbau (Schritt 2/3).

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:名量词@HSK1` Zählwörter für Nomen: Bücher, Personen, Geschäfte, Kleidung, | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:其他结构类型：数量短语` Zahl + Zählwort (+ Nomen): Mengenangabe | HSK1 | manuell | Hauptpunkt (overrides.json) |
|  | `g:指示代词@HSK1` Demonstrativpronomen: dies, das, hier, dort, diese, manche … | HSK1 | mittel (Überschrift) | Überschriften nennen 这, 那 |
|  | `g:杯` Tasse, Glas, Becher (Zählwort für Getränke) | HSK1 | manuell | overrides.json |
|  | `g:名量词@HSK2` Zählwörter: lange Dinge, höfliche Personen, Räume, Personen  | HSK2 | manuell | overrides.json |
|  | `g:名量词@HSK3` Zählwörter für Nomen: Paar, Blatt, Brief, Fahrzeug, Pfund, M | HSK3 | manuell | overrides.json |

Verworfen: `g:这` (Abschnittsüberschrift), `g:A这A那` (Abschnittsüberschrift), `g:这/那也不X，那/这也不Y` (Abschnittsüberschrift)

### lesson-20 — 不 vs. 没 (HSK 1 → HSK 1)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:否定副词@HSK1` Verneinung: nicht – nicht geschehen / nicht haben – Verbot „ | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:不` nicht (Wille, Gewohnheit, Zukunft, Eigenschaft) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:没（有）` nicht (getan), noch nicht – Verneinung eingetretener Handlun | HSK1 | hoch (Titel) | Titel/Untertitel |

### lesson-28 — 也 (yě) und 都 (dōu) (HSK 1–2 → HSK 1)

> 什么都好 / 什么都不想吃 ist der HSK-3-Punkt 任指用法 (Nebenpunkt).

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:都¹` alle, beide (fasst Vorangehendes zusammen) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:也` auch, ebenfalls | HSK1 | hoch (Titel) | Titel/Untertitel |
|  | `g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词` jeder, alles, überall (Fragewort + dōu) und „wer …, der …“ ( | HSK3 | manuell | overrides.json |

Verworfen: `g:什么` (2 Beispielsätze), `g:X都不/没X` (Abschnittsüberschrift)

### lesson-1 — 了 (le) (HSK 1–2 → HSK 1)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:了¹` Aspektpartikel nach dem Verb: Handlung abgeschlossen bzw. ei | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:了²` Satzende-Partikel: neue Situation oder Veränderung („jetzt“, | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:完成态：用动态助词“了¹”表示` Handlung vollzogen/abgeschlossen (Partikel direkt nach dem V | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:变化态：用动态助词“了²”表示` neue Situation, Veränderung (Partikel am Satzende) | HSK1 | manuell | Hauptpunkt (overrides.json) |
|  | `g:没（有）` nicht (getan), noch nicht – Verneinung eingetretener Handlun | HSK1 | manuell | overrides.json |

### lesson-2 — 的, 地, 得 (HSK 1–2 → HSK 1–2)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:的¹` Attributpartikel: Besitz, Eigenschaft, Beschreibung vor eine | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:得` Strukturpartikel nach dem Verb: leitet eine Bewertung von Ar | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:地` Strukturpartikel vor dem Verb: beschreibt, wie jemand handel | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:定语：名词性词语、形容词性短语、数量短语作定语` Attribut vor dem Nomen: Besitzer, Eigenschaft, Menge | HSK1 | manuell | overrides.json |
|  | `g:定语：动词或动词性短语、主谓短语作定语` Verb- oder Satzattribut vor dem Nomen (entspricht einem deut | HSK2 | manuell | overrides.json |
|  | `g:动词+得+形容词性短语` wie gut, schnell … jemand etwas tut (Zustandskomplement mit  | HSK2 | manuell | overrides.json |

Verworfen: `g:得（能愿动词）` (Titel/Untertitel)

### lesson-17 — 会, 能, 可以 (HSK 1–2 → HSK 1)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:会` können (erlernt) / werden (Vermutung) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:能` können (Umstände, Leistung) / dürfen | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:可以` dürfen / man kann (Erlaubnis, Möglichkeit) | HSK1 | hoch (Titel) | Titel/Untertitel |

### lesson-19 — 在, 正在, 正 (HSK 1–2 → HSK 1)

> 正 allein steht in 时间副词@HSK2 (Nebenpunkt); Kern ist HSK 1.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:在` gerade (dabei sein): Verlaufsform vor dem Verb | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:正在` gerade jetzt (betonte Verlaufsform) | HSK1 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:……在/正在+动词` gerade dabei sein, etwas zu tun (Adverb vor dem Verb) | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:……在/正在+动词……+呢` gerade dabei sein (Adverb vor dem Verb plus Partikel am Satz | HSK1 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:……呢` gerade (Verlaufsform nur durch Partikel am Satzende) | HSK1 | manuell | Hauptpunkt (overrides.json) |

Verworfen: `g:在（引出时间、处所）` (Titel/Untertitel), `g:呢²` (Abschnittsüberschrift)

### lesson-12 — Thema-Kommentar-Struktur (HSK 1–2 → HSK 2)

> Kein chinesisches Muster im Titel: Thema-Kommentar entspricht 主谓谓语句 (大象鼻子长) und 受事主语 (这本书我看过了).

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:受事主语` Handlungsempfänger als Subjekt (Passivbedeutung ohne Passivw | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:主谓句4：主谓谓语句` Satz mit Thema und Teilsatz als Prädikat („Er – der Körper i | HSK2 | manuell | Hauptpunkt (overrides.json) |

### lesson-29 — 时间表达 (HSK 2 → HSK 2–3)

> Dauer nach dem Verb ist HSK 2, 以前/以后 HSK 3; die Stellung des Zeitpunkts (HSK 1) ist Nebenpunkt.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:数量补语2：表示动作持续的时间` wie lange eine Handlung dauert (Zeitdauer nach dem Verb) | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:（在）……以前/以后/前/后` vor / nach einem Zeitpunkt oder Ereignis („bevor …“, „nachde | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:状语：副词、形容词作状语；表示时间、处所的词语作状语` Adverbial vor dem Verb: Zeit, Ort, Art und Weise | HSK1 | manuell | overrides.json |
|  | `g:时间副词@HSK2` Zeitadverbien: noch, schon, manchmal, bald, gerade | HSK2 | manuell | overrides.json |
|  | `g:经常` häufig, regelmäßig (neutrale Standardform) | HSK2 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:时间副词@HSK4` Zeitadverbien: pünktlich, nie, schnell, bereits, plötzlich,  | HSK4 | manuell | overrides.json |
|  | `g:...的时候` als / wenn / während (Zeitangabe mit einem Teilsatz) | Zusatz | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:了¹` (Abschnittsüberschrift), `g:了²` (Abschnittsüberschrift)

### lesson-30 — 就 und 才 (HSK 2 → HSK 2–3)

> Die Übersichten 语气副词@HSK3/4 enthalten andere Lesarten (才² „nur“, 才⁴/就⁵ betonend); 就⁶ ist die Präposition.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:就¹` dann, gleich danach (verbindet Bedingung oder erste Handlung | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:才¹` erst (später oder langsamer als erwartet) | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:一……就……` sobald …, (gleich) …; immer wenn …, dann … | HSK2 | manuell | overrides.json |
|  | `g:如果……，就……` wenn/falls …, dann … | HSK3 | manuell | overrides.json |
|  | `g:要是……，就……` wenn …, dann … (gesprochen) | HSK4 | manuell | overrides.json |

Verworfen: `g:语气副词@HSK3` (Titel nennt 才, 就), `g:语气副词@HSK4` (Titel nennt 才, 就), `g:就⁶` (Titel/Untertitel)

### lesson-31 — 还是 und 或者 (HSK 2 → HSK 2–3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:还是……吧` doch lieber …, besser … (Rat nach Abwägung) | HSK2 | niedrig (Beispiele) | 4 Beispielsätze |
| ★ | `g:疑问句：用“还是”连接的选择问句` A oder B? (Wahlfrage mit „oder“) | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:或者` oder (Möglichkeiten in Aussagesätzen) | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:（是）……，还是……` (ist es so, dass) A, oder B? – Wahl zwischen zwei Teilsätzen | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:或` oder (kurz, eher schriftlich) | HSK3 | manuell | overrides.json |

Verworfen: `g:可以` (4 Beispielsätze)

### lesson-32 — 又 und 再 (HSK 2 → HSK 3)

> 又 ist erst HSK 3; der Kontrast 又/再 setzt 又 voraus, daher HSK 3 (再¹ HSK 1 als Nebenpunkt). 再² „erst …, dann“ gehört zu lesson-36.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:又` schon wieder (Wiederholung, die bereits eingetreten ist) | HSK3 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:又……，又……` sowohl … als auch … (zwei Eigenschaften oder Handlungen zugl | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:再¹` noch einmal, wieder (künftige Wiederholung) | HSK1 | hoch (Titel) | Titel/Untertitel |

Verworfen: `g:再²` (Titel/Untertitel)

### lesson-11 — 过 (guò) (HSK 2 → HSK 2)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:过` Erfahrung: etwas schon einmal getan oder erlebt haben | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:经历态：用动态助词“过”表示` Erfahrung: etwas schon einmal getan haben (auch „noch nie“ u | HSK2 | manuell | Hauptpunkt (overrides.json) |
|  | `g:没（有）` nicht (getan), noch nicht – Verneinung eingetretener Handlun | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:了¹` Aspektpartikel nach dem Verb: Handlung abgeschlossen bzw. ei | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:了²` (Abschnittsüberschrift)

### lesson-35 — 一边...一边 (HSK 2 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:一边` dabei, nebenher (Adverb für gleichzeitige Handlungen) | HSK3 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:一边……，一边……` etwas tun und gleichzeitig etwas anderes tun | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:又……，又……` sowohl … als auch … (zwei Eigenschaften oder Handlungen zugl | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:又` (Abschnittsüberschrift)

### lesson-36 — 先...然后...最后 (HSK 2 → HSK 3)

> 首先……其次/然后 (Abschnitt 3) ist HSK 4 und bleibt Nebenpunkt.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:先……，再/然后……` zuerst …, dann … | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:再²` erst …, dann (Handlung folgt später bzw. wird aufgeschoben) | HSK2 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:首先……，其次……` erstens …, zweitens … (Rangfolge von Punkten) | HSK4 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:首先……，然后……` zuerst …, dann … (zeitliche Schritte) | HSK4 | manuell | overrides.json |

Verworfen: `g:再¹` (Abschnittsüberschrift)

### lesson-33 — 从...到 und 离 (HSK 2 → HSK 2)

> 离 hat keinen eigenen Grammatikpunkt (Wortschatz HSK 2). 从² (Weg: durch, über) kommt in der Lektion nicht vor.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:从¹` von, aus, ab (Ausgangspunkt in Ort oder Zeit) | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:到 + Ort/Zeit` bis / nach / ankommen (Endpunkt in Raum oder Zeit) | Zusatz | manuell | overrides.json |

Verworfen: `g:从²` (Titel/Untertitel)

### lesson-3 — 是...的 Konstruktion (HSK 2–3 → HSK 2)

> Die Lektion behandelt nur 是……的句1 (vergangene Umstände); 句2 (Sprecherhaltung, HSK 3) fehlt.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:“是……的”句1：强调时间、地点、方式、动作者` betont Zeit, Ort, Art oder Täter einer vergangenen Handlung | HSK2 | hoch (Titel) | Titel/Untertitel |

Verworfen: `g:什么` (2 Beispielsätze), `g:哪儿` (2 Beispielsätze), `g:的¹` (Titel/Untertitel), `g:“是……的”句2：强调说话人的看法或态度` (Titel/Untertitel)

### lesson-6 — 比 (bǐ) Vergleiche (HSK 2–3 → HSK 2–3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:A比B+形容词` A ist …er als B (einfacher Vergleich) | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:A比B+形容词+数量补语/程度补语` A ist um X / viel / etwas …er als B (Vergleich mit Unterschi | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:A有/没有B（+这么/那么）+形容词` A ist (nicht) so … wie B | HSK2 | mittel (Überschrift) | Abschnittsüberschrift |
| ★ | `g:A跟B一样+形容词` A ist genauso + Eigenschaft wie B | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:比` als (Präposition: führt das Vergleichsobjekt ein) | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:A跟B一样` A ist (genau) wie B, A und B sind gleich | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:A不比B+形容词` A ist nicht …er als B (etwa gleich; Widerspruch) | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:没（有）` (Abschnittsüberschrift), `g:跟¹` (Abschnittsüberschrift), `g:跟²` (Abschnittsüberschrift)

### lesson-15 — 因为...所以 (HSK 2–3 → HSK 2)

> 因为¹ ist die Präposition „wegen“ — nicht Thema der Lektion.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:因为……，所以……` weil …, deshalb … (Grund und Folge) | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:不用关联词语的复句` Teilsätze ohne Bindewort aneinanderreihen (Beziehung aus dem | HSK1 | manuell | overrides.json |
|  | `g:为什么` warum (Frage nach dem Grund) | HSK2 | manuell | overrides.json |
|  | `g:连接分句或者句子@HSK2` Bindewörter zwischen Sätzen: aber, obwohl, weil, deshalb, od | HSK2 | hoch (Titel) | Titel nennt 因为, 所以 |
|  | `g:由于¹` aufgrund von, wegen (Ursache, formell) | HSK4 | manuell | overrides.json |
|  | `g:既然……，就……` da (nun einmal) …, dann eben … | HSK4 | manuell | overrides.json |
|  | `g:之所以…是因为…` dass …, liegt daran, dass … (erst die Folge, dann der Grund) | Zusatz | manuell | overrides.json |

Verworfen: `g:因为¹` (Titel/Untertitel)

### lesson-34 — 给, 对, 跟, 向 (HSK 2–3 → HSK 2–3)

> 对 (HSK 1) ist Nebenpunkt; 向 kommt in beiden Lesarten vor (Richtung 向², Gegenüber 向¹ in 引出对象@HSK3).

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:给` für, an (jemanden): Empfänger oder Nutznießer vor dem Verb | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:跟¹` mit, zu, bei (Gegenüber einer Handlung, gesprochen) | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:向²` nach, in Richtung (Richtung einer Bewegung) | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:对` zu, gegenüber, für – Bezugsperson oder -sache (Präposition) | HSK1 | hoch (Titel) | Titel/Untertitel |
|  | `g:往` nach, in Richtung (Richtung einer Bewegung) | HSK2 | manuell | overrides.json |
|  | `g:跟²` und (Bindewort zwischen Nomen, gesprochen) | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:应该` sollen, sollte (Rat, Pflicht); müsste (begründete Vermutung) | HSK3 | niedrig (Beispiele) | 2 Beispielsätze |

### lesson-7 — 结果补语 — Resultativkomplemente (HSK 2–3 → HSK 2–3)

> Titel ohne Muster; die Resultativkomplemente sind 结果补语1 (HSK 2) und 结果补语2 (HSK 3).

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:动词+错/懂/好/会/完` Ergebniskomplemente: falsch, verstanden, fertig und gut, gel | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:动词+到/住/走/上` Resultativkomplemente: erreichen, festhalten, weg, zu/an (fi | HSK3 | manuell | Hauptpunkt (overrides.json) |
|  | `g:没（有）` nicht (getan), noch nicht – Verneinung eingetretener Handlun | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:动补短语1` Verb + Komplement: Ergebnis, Richtung oder Bewertung einer H | HSK2 | manuell | overrides.json |

### lesson-8 — 状态补语 — Zustandskomplemente mit 得 (HSK 2–3 → HSK 2–3)

> Nach dem Syllabus ist V + 得 + Adjektiv ein 状态补语 (Zustandskomplement), kein 程度补语. Abschnitt 3 (累得不想说话, 冷得我发抖) ist HSK-5-Stoff.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:动词+得+形容词性短语` wie gut, schnell … jemand etwas tut (Zustandskomplement mit  | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:主语+动词+宾语+动词+补语` Verbwiederholung: Verb + Objekt + dasselbe Verb + Komplement | HSK3 | manuell | Hauptpunkt (overrides.json) |
|  | `g:得` Strukturpartikel nach dem Verb: leitet eine Bewertung von Ar | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:动词/形容词+得+动词短语` so sehr …, dass man (etwas tut / nicht mehr kann) | HSK5 | manuell | overrides.json |
|  | `g:动词/形容词+得+主谓短语` so sehr …, dass jemand/etwas … (Folge mit eigenem Subjekt) | HSK5 | manuell | overrides.json |

Verworfen: `g:得（能愿动词）` (Titel/Untertitel)

### lesson-10 — 着 (zhe) (HSK 2–3 → HSK 2–3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:着` Andauer eines Zustands (Aspektpartikel nach dem Verb) | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:处所+动词+着(+数量短语)+名词` an einem Ort steht, liegt, hängt … (Zustand am Ort) | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:动词+着：（1）表示状态的持续` andauernder Zustand nach einer Handlung (steht offen, hat an | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:“着”表示动作的伴随：动词1+着+动词2` etwas lächelnd, im Stehen, zu Fuß … tun (erstes Verb = Begle | HSK3 | manuell | Hauptpunkt (overrides.json) |
|  | `g:持续态：表示动作的持续` andauernde Handlung: etwas läuft gerade (es regnet gerade, s | HSK2 | manuell | overrides.json |

### lesson-37 — 快要...了, 要...了 (HSK 2–3 → HSK 2)

> 将/将要 (Abschnitt 4) sind HSK 4 und Nebenpunkte.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:要/快要/就要……了` bald, gleich (etwas steht unmittelbar bevor) | HSK2 | hoch (Titel) | Titel/Untertitel |
|  | `g:时间副词@HSK2` Zeitadverbien: noch, schon, manchmal, bald, gerade | HSK2 | manuell | overrides.json |
|  | `g:时间副词@HSK4` Zeitadverbien: pünktlich, nie, schnell, bereits, plötzlich,  | HSK4 | manuell | overrides.json |
|  | `g:将` werden (schriftsprachliches Futur) | HSK4 | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:要` (Titel/Untertitel), `g:了¹` (Titel/Untertitel), `g:了²` (Titel/Untertitel), `g:X了Y，Y了X` (Titel/Untertitel)

### lesson-4 — 把 (bǎ) Konstruktion (HSK 3 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:把` Objekt vor das Verb holen (was mit etwas geschieht) | HSK3 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:主语+把+宾语+动词+在/到+处所` etwas irgendwohin legen, stellen, bringen (Objekt vorangeste | HSK3 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:主语+把+宾语+动词+结果补语/趋向补语/状态补语` etwas so behandeln, dass ein Ergebnis eintritt (Objekt voran | HSK3 | manuell | Hauptpunkt (overrides.json) |
|  | `g:主语+把+宾语1+动词（+给）+宾语2` jemandem etwas geben, schicken, zurückgeben (Sache vorangest | HSK3 | manuell | overrides.json |
|  | `g:主语+把+宾语+动词+了` etwas ist erledigt oder weg (Ba-Satz mit bloßem Verb und le) | HSK4 | manuell | overrides.json |

### lesson-14 — 虽然...但是 (HSK 3 → HSK 2–3)

> 虽然……但是 ist im HSK 2025 bereits HSK 2, 可是 HSK 3.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:虽然……，但是……` obwohl …, (aber) … | HSK2 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:虽然……，可是……` obwohl …, aber … (eher gesprochene Variante) | HSK3 | manuell | Hauptpunkt (overrides.json) |
|  | `g:连接分句或者句子@HSK2` Bindewörter zwischen Sätzen: aber, obwohl, weil, deshalb, od | HSK2 | hoch (Titel) | Titel nennt 但是, 虽然 |
|  | `g:却` aber, jedoch (Gegensatz, Unerwartetes) | HSK4 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:……，不过……` …, aber/allerdings … (mild, gesprochen) | HSK4 | manuell | overrides.json |

Verworfen: `g:疑问句：用“还是”连接的选择问句` (Abschnittsüberschrift), `g:（是）……，还是……` (Abschnittsüberschrift)

### lesson-38 — 除了...以外 (HSK 3 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:除了……（以外），……还/也/都……` außer …: ausschließend (alle außer X) oder hinzufügend (nebe | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:除` außer, abgesehen von (schriftsprachliche Kurzform) | HSK6 | manuell | overrides.json |

Verworfen: `g:什么` (3 Beispielsätze), `g:都¹` (Abschnittsüberschrift), `g:还¹` (Abschnittsüberschrift), `g:也` (Abschnittsüberschrift), `g:还²` (Abschnittsüberschrift)

### lesson-39 — 不但...而且 (HSK 3 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:不但……，而且……` nicht nur …, sondern auch … | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:连接分句或句子@HSK3` Konjunktionen für Satzverbindungen: nur wenn, solange, nicht | HSK3 | hoch (Titel) | Titel nennt 不但, 而且 |
|  | `g:不仅/不光……，还/而且……` nicht nur …, sondern auch … (Steigerung) | HSK4 | mittel (Überschrift) | Abschnittsüberschrift |

Verworfen: `g:还¹` (Abschnittsüberschrift), `g:也` (Abschnittsüberschrift), `g:还²` (Abschnittsüberschrift)

### lesson-40 — 只要...就 & 只有...才 (HSK 3 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:只有……，才……` nur wenn …, (erst dann) … (notwendige Bedingung) | HSK3 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:只要……，就……` wenn nur …, dann … (hinreichende Bedingung) | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:连接分句或句子@HSK3` Konjunktionen für Satzverbindungen: nur wenn, solange, nicht | HSK3 | hoch (Titel) | Titel nennt 只有, 只要 |

Verworfen: `g:就¹` (Titel/Untertitel), `g:才¹` (Titel/Untertitel), `g:语气副词@HSK3` (Titel nennt 才, 就), `g:语气副词@HSK4` (Titel nennt 才, 就), `g:就⁶` (Titel/Untertitel)

### lesson-41 — 可能补语 V得/V不 (HSK 3 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:动词+得/不+动词/形容词` etwas (nicht) schaffen können: Potentialkomplement („versteh | HSK3 | manuell | Hauptpunkt (overrides.json) |
|  | `g:能` können (Umstände, Leistung) / dürfen | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:可以` dürfen / man kann (Erlaubnis, Möglichkeit) | HSK1 | mittel (Überschrift) | Abschnittsüberschrift |
|  | `g:动补短语2` Verb + Komplement der Möglichkeit oder des Grades („verstehe | HSK3 | manuell | overrides.json |
|  | `g:来得及/来不及` (noch) rechtzeitig schaffen / es nicht mehr rechtzeitig scha | HSK4 | manuell | overrides.json |

Verworfen: `g:不` (Titel/Untertitel), `g:可能` (Titel/Untertitel), `g:得` (Titel/Untertitel), `g:得（能愿动词）` (Titel/Untertitel)

### lesson-42 — 对...来说 & 关于 (HSK 3 → HSK 3)

> 至于 (Abschnitt 4) ist HSK 6 und Nebenpunkt.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:关于` über, bezüglich (nennt das Thema) | HSK3 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:对……来说` für … (aus der Lage oder Sicht einer Person) | HSK3 | hoch (Titel) | Titel/Untertitel |
|  | `g:对` zu, gegenüber, für – Bezugsperson oder -sache (Präposition) | HSK1 | hoch (Titel) | Titel/Untertitel |
|  | `g:至于` was … betrifft (leitet zu einem weiteren Thema über) | HSK6 | mittel (Überschrift) | Abschnittsüberschrift |

### lesson-5 — 被 (bèi) Passiv (HSK 3–4 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:被` Passiv: von … (getan) werden | HSK3 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:主语+被+宾语+动词+其他成分` Passiv mit Urheber: von jemandem … werden | HSK3 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:主语+被+动词+其他成分` Passiv ohne Urheber: … wurde … (Handelnder nicht genannt) | HSK3 | manuell | Hauptpunkt (overrides.json) |
|  | `g:受事主语` Handlungsempfänger als Subjekt (Passivbedeutung ohne Passivw | HSK2 | manuell | overrides.json |
|  | `g:主语+叫/让+宾语+动词+其他成分` von jemandem … werden (umgangssprachliches Passiv) | HSK4 | manuell | overrides.json |

### lesson-9 — 趋向补语 — Richtungskomplemente (HSK 3–4 → HSK 2–3)

> Titel ohne Muster. Wörtliche Richtungskomplemente sind HSK 2, die übertragenen (起来 „anfangen“, 下去 „weiter“, 出来 „erkennen“) HSK 3.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:简单趋向补语的趋向意义用法：（1）动词+来/去` Verb + Richtung zum Sprecher hin oder von ihm weg (einfaches | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:动词+上/下/进/出/过/回` hinauf, hinunter, hinein, hinaus, hinüber, zurück (einfaches | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去` herein, hinaus, herunter, zurück … (zusammengesetztes Richtu | HSK2 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下` Richtungskomplemente mit Ergebnisbedeutung: erkennen, sich e | HSK3 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:表示动作行为的开始：动词+上/起来` anfangen zu … (Beginn einer Handlung durch ein Komplement) | HSK3 | manuell | Hauptpunkt (overrides.json) |
| ★ | `g:表示动作行为的持续：动词+下去/下来` weitermachen bzw. bis jetzt durchhalten (Fortdauer einer Han | HSK3 | manuell | Hauptpunkt (overrides.json) |

### lesson-16 — 越...越... (HSK 3–4 → HSK 3)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:越来越` immer …er: fortlaufende Zunahme („immer kälter“) | HSK3 | mittel (Überschrift) | Abschnittsüberschrift |
| ★ | `g:越……越……` je …, desto … (zwei Größen wachsen gemeinsam) | HSK3 | hoch (Titel) | Titel/Untertitel |

### lesson-13 — 连...都/也 (HSK 4 → HSK 4)

> 连……都/也 steht im Syllabus als HSK-4-Punkt 连……也/都……，……更……; 我一口也没吃 ist HSK 3 (一……也不).

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:连……也/都……，……更……` sogar A …, B erst recht … | HSK4 | manuell | Hauptpunkt (overrides.json) |
|  | `g:一……也/都+不/没……` kein einziges …, nicht ein … (vollständige Verneinung) | HSK3 | manuell | overrides.json |

Verworfen: `g:都¹` (Titel/Untertitel), `g:也` (Titel/Untertitel)

### lesson-43 — 既...又/也 & 又...又 (HSK 4 → HSK 3–4)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:又……，又……` sowohl … als auch … (zwei Eigenschaften oder Handlungen zugl | HSK3 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:既……，又/也……` sowohl … als auch … (zwei Eigenschaften zugleich) | HSK4 | hoch (Titel) | Titel/Untertitel |

Verworfen: `g:也` (Titel/Untertitel), `g:又` (Titel/Untertitel)

### lesson-44 — 不管...都 & 无论...都 (HSK 4 → HSK 4)

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:不管……，都/也……` egal ob/wie …, (immer) … (gesprochen) | HSK4 | hoch (Titel) | Titel/Untertitel |
| ★ | `g:无论……，都/也……` gleichgültig ob/wie …, … (eher formell) | HSK4 | hoch (Titel) | Titel/Untertitel |
|  | `g:疑问代词的非疑问用法：（1）任指用法：①疑问代词+都……②疑问代词+疑问代词` jeder, alles, überall (Fragewort + dōu) und „wer …, der …“ ( | HSK3 | manuell | overrides.json |

Verworfen: `g:什么` (2 Beispielsätze), `g:都¹` (Titel/Untertitel), `g:语气副词@HSK2` (Überschriften nennen 都, 还是), `g:疑问句：用“还是”连接的选择问句` (Abschnittsüberschrift), `g:（是）……，还是……` (Abschnittsüberschrift)

### lesson-45 — 与其...不如 & 宁可...也 (HSK 4 → HSK 7-9)

> 与其……不如 ist kein eigener Syllabus-Punkt (与其 ist Wortschatz HSK 6); die verwandten Muster mit 宁可/宁愿 stehen auf HSK 7–9. Die Engine hat dafür noch keinen Filterknopf.

| | Grammatikpunkt | Level | Konfidenz | Grund |
|---|---|---|---|---|
| ★ | `g:宁可/宁愿……，也不……` lieber … (in Kauf nehmen), als … (auf keinen Fall tun) | HSK7-9 | mittel (Überschrift) | Abschnittsüberschrift |
| ★ | `g:与其……，宁愿/宁可……` statt … lieber … (bewusste Wahl des kleineren Übels) | HSK7-9 | hoch (Titel) | Titel/Untertitel |
|  | `g:A不如B（+形容词）` A ist nicht so (gut, schnell …) wie B | HSK4 | hoch (Titel) | Titel/Untertitel |
|  | `g:与其说…不如说…` weniger …, als vielmehr … (treffendere Beschreibung) | Zusatz | manuell | overrides.json |
|  | `g:倒不如` da wäre es (doch) besser, … (Gegenvorschlag) | Zusatz | manuell | overrides.json |

Verworfen: `g:也` (Titel/Untertitel)

### Lektionen mit schwacher oder keiner automatischen Zuordnung

- **lesson-21** „Chinesische Satzstellung“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:主谓句1：动词谓语句`, `g:状语：副词、形容词作状语；表示时间、处所的词语作状语` — Titel ohne chinesisches Muster: SVO und Stellung von Zeit, Ort und Adverb sind die Satzglied-Punkte von HSK 1.
- **lesson-23** „有 (yǒu)“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:“有”字句1：表示领有`, `g:处所+有+数量短语+名词` — Der Titel nennt nur 有; Besitz und Existenz sind die 有-Satzmuster von HSK 1.
- **lesson-18** „Zählwörter (量词)“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:名量词@HSK1`, `g:其他结构类型：数量短语` — 张, 条, 位 sind HSK 2, 双, 辆, 封, 把 HSK 3 — verlinkt als Nebenpunkte. Bezug zum Zählwörter-Umbau (Schritt 2/3).
- **lesson-12** „Thema-Kommentar-Struktur“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:主谓句4：主谓谓语句`, `g:受事主语` — Kein chinesisches Muster im Titel: Thema-Kommentar entspricht 主谓谓语句 (大象鼻子长) und 受事主语 (这本书我看过了).
- **lesson-7** „结果补语 — Resultativkomplemente“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:动词+错/懂/好/会/完`, `g:动词+到/住/走/上` — Titel ohne Muster; die Resultativkomplemente sind 结果补语1 (HSK 2) und 结果补语2 (HSK 3).
- **lesson-8** „状态补语 — Zustandskomplemente mit 得“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:动词+得+形容词性短语`, `g:主语+动词+宾语+动词+补语` — Nach dem Syllabus ist V + 得 + Adjektiv ein 状态补语 (Zustandskomplement), kein 程度补语. Abschnitt 3 (累得不想说话, 冷得我发抖) ist HSK-5-Stoff.
- **lesson-41** „可能补语 V得/V不“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:动词+得/不+动词/形容词`
- **lesson-9** „趋向补语 — Richtungskomplemente“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:简单趋向补语的趋向意义用法：（1）动词+来/去`, `g:动词+上/下/进/出/过/回`, `g:复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去`, `g:表示动作行为的开始：动词+上/起来`, `g:表示动作行为的持续：动词+下去/下来`, `g:趋向补语的引申用法：（1）表示结果意义：动词+出/起/下` — Titel ohne Muster. Wörtliche Richtungskomplemente sind HSK 2, die übertragenen (起来 „anfangen“, 下去 „weiter“, 出来 „erkennen“) HSK 3.
- **lesson-13** „连...都/也“ — Hauptpunkte gar nicht automatisch gefunden; manuell gesetzt: `g:连……也/都……，……更……` — 连……都/也 steht im Syllabus als HSK-4-Punkt 连……也/都……，……更……; 我一口也没吃 ist HSK 3 (一……也不).
- **lesson-29** „时间表达“ — Hauptpunkte nur in Überschriften/Beispielen; manuell gesetzt: `g:数量补语2：表示动作持续的时间`, `g:（在）……以前/以后/前/后` — Dauer nach dem Verb ist HSK 2, 以前/以后 HSK 3; die Stellung des Zeitpunkts (HSK 1) ist Nebenpunkt.
- **lesson-6** „比 (bǐ) Vergleiche“ — Hauptpunkte nur in Überschriften/Beispielen; manuell gesetzt: `g:A比B+形容词`, `g:A比B+形容词+数量补语/程度补语`, `g:A有/没有B（+这么/那么）+形容词`, `g:A跟B一样+形容词`
- **lesson-38** „除了...以外“ — Hauptpunkte nur in Überschriften/Beispielen; manuell gesetzt: `g:除了……（以外），……还/也/都……`
- **lesson-22** „Fragen stellen“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:疑问句：是非问句`, `g:疑问句：特指问句`, `g:疑问代词@HSK1` — 呢 im Untertitel ist die Rückfrage 呢²; der Verlaufs-呢 im Beispiel 他还在睡觉呢 gehört zu lesson-19.
- **lesson-24** „在 (zài)“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:方位名词@HSK1`, `g:其他结构类型：方位短语` — g:在 ist der Verlaufs-在 (lesson-19). Das Vollverb 在 „sich befinden“ ist Wortschatz, kein eigener Grammatikpunkt.
- **lesson-26** „这 (zhè) und 那 (nà)“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:指示代词@HSK2` — Die Abschnitte zu 这样/那样 und 这么/那么 sind HSK-2-Stoff (指示代词@HSK2), daher HSK 1–2.
- **lesson-27** „很, 太, 真, 非常“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:主谓句2：形容词谓语句` — 比较 und 挺 aus der Gradskala sind HSK 3 (程度副词@HSK3); Adjektiv + 一点儿 ist g:形容词+数量补语 (HSK 2).
- **lesson-20** „不 vs. 没“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:否定副词@HSK1`
- **lesson-1** „了 (le)“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:完成态：用动态助词“了¹”表示`, `g:变化态：用动态助词“了²”表示`
- **lesson-19** „在, 正在, 正“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:……在/正在+动词`, `g:……在/正在+动词……+呢`, `g:……呢` — 正 allein steht in 时间副词@HSK2 (Nebenpunkt); Kern ist HSK 1.
- **lesson-31** „还是 und 或者“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:还是……吧`
- **lesson-32** „又 und 再“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:又……，又……` — 又 ist erst HSK 3; der Kontrast 又/再 setzt 又 voraus, daher HSK 3 (再¹ HSK 1 als Nebenpunkt). 再² „erst …, dann“ gehört zu lesson-36.
- **lesson-11** „过 (guò)“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:经历态：用动态助词“过”表示`
- **lesson-10** „着 (zhe)“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:动词+着：（1）表示状态的持续`, `g:“着”表示动作的伴随：动词1+着+动词2`, `g:处所+动词+着(+数量短语)+名词`
- **lesson-4** „把 (bǎ) Konstruktion“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:主语+把+宾语+动词+在/到+处所`, `g:主语+把+宾语+动词+结果补语/趋向补语/状态补语`
- **lesson-14** „虽然...但是“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:虽然……，可是……` — 虽然……但是 ist im HSK 2025 bereits HSK 2, 可是 HSK 3.
- **lesson-5** „被 (bèi) Passiv“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:主语+被+宾语+动词+其他成分`, `g:主语+被+动词+其他成分`
- **lesson-16** „越...越...“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:越来越`
- **lesson-45** „与其...不如 & 宁可...也“ — Hauptpunkte nur teilweise im Titel; manuell gesetzt: `g:宁可/宁愿……，也不……` — 与其……不如 ist kein eigener Syllabus-Punkt (与其 ist Wortschatz HSK 6); die verwandten Muster mit 宁可/宁愿 stehen auf HSK 7–9. Die Engine hat dafür noch keinen Filterknopf.

## 3. Inhaltliche Prüfung

Automatisch: Beispiel-Pinyin gegen CC-CEDICT (`checkExampleReading` aus `scripts/enrich/validate.cjs`), Tonsandhi von 一/不, Umlaut-Ersatzschreibungen, „der/den Partikel“, er/sie gegen 他/她, generisches Maskulinum, fest verdrahtete „Lektion N“, Levelangaben im Text. Manuell (`review-notes.json`): Aussagen, die den Grammatikpunkten widersprechen, Übersetzungs- und Formulierungsfehler.

| Art | Anzahl |
|---|---|
| Hinweis · Level | 1 |
| Hinweis · Wortschatz | 18 |

### Alle Befunde je Lektion

#### lesson-27 — 很, 太, 真, 非常

- Hinweis · Wortschatz · Beispiele: 2 Wörter über HSK 2 (Lektionslevel + 1): 比较 (HSK 3), 挺 (HSK 3)

#### lesson-18 — Zählwörter (量词)

- Hinweis · Wortschatz · Beispiele: 5 Wörter über HSK 2 (Lektionslevel + 1): 双 (HSK 3), 筷子 (HSK 3), 辆 (HSK 3), 封 (HSK 3), 信 (HSK 3)

#### lesson-12 — Thema-Kommentar-Struktur

- Hinweis · Wortschatz · Beispiele: 2 Wörter über HSK 3 (Lektionslevel + 1): 大象 (HSK 5), 鼻子 (HSK 4)

#### lesson-30 — 就 und 才

- Hinweis · Wortschatz · Beispiele: 1 Wort über HSK 4 (Lektionslevel + 1): 英语 (nicht im HSK-Wortschatz)

#### lesson-11 — 过 (guò)

- Hinweis · Wortschatz · Beispiele: 4 Wörter über HSK 3 (Lektionslevel + 1): 北京烤鸭 (nicht im HSK-Wortschatz), 臭豆腐 (nicht im HSK-Wortschatz), 寿司 (nicht im HSK-Wortschatz), 曾经 (HSK 5)

#### lesson-35 — 一边...一边

- Hinweis · Wortschatz · Beispiele: 1 Wort über HSK 4 (Lektionslevel + 1): 政府 (HSK 5)

#### lesson-36 — 先...然后...最后

- Hinweis · Wortschatz · Beispiele: 3 Wörter über HSK 4 (Lektionslevel + 1): 切 (HSK 5), 炒菜 (nicht im HSK-Wortschatz), 火锅 (HSK 5)

#### lesson-15 — 因为...所以

- Hinweis · Wortschatz · Beispiele: 3 Wörter über HSK 3 (Lektionslevel + 1): 由于 (HSK 4), 既然 (HSK 4), 之所以 (HSK 6)

#### lesson-8 — 状态补语 — Zustandskomplemente mit 得

- Hinweis · Wortschatz · Beispiele: 1 Wort über HSK 4 (Lektionslevel + 1): 发抖 (HSK 7–9)

#### lesson-10 — 着 (zhe)

- Hinweis · Wortschatz · Beispiele: 1 Wort über HSK 4 (Lektionslevel + 1): 墙 (HSK 5)

#### lesson-37 — 快要...了, 要...了

- Hinweis · Wortschatz · Beispiele: 2 Wörter über HSK 3 (Lektionslevel + 1): 将 (HSK 4), 将要 (HSK 4)

#### lesson-4 — 把 (bǎ) Konstruktion

- Hinweis · Wortschatz · Beispiele: 2 Wörter über HSK 4 (Lektionslevel + 1): 摔 (HSK 5), 碎 (HSK 5)

#### lesson-38 — 除了...以外

- Hinweis · Wortschatz · Beispiele: 3 Wörter über HSK 4 (Lektionslevel + 1): 科目 (HSK 6), 英语 (nicht im HSK-Wortschatz), 韩语 (nicht im HSK-Wortschatz)

#### lesson-39 — 不但...而且

- Hinweis · Wortschatz · Beispiele: 2 Wörter über HSK 4 (Lektionslevel + 1): 善良 (HSK 5), 意义 (HSK 5)

#### lesson-40 — 只要...就 & 只有...才

- Hinweis · Wortschatz · Beispiele: 1 Wort über HSK 4 (Lektionslevel + 1): 亲身 (HSK 7–9)

#### lesson-41 — 可能补语 V得/V不

- Hinweis · Wortschatz · Beispiele: 1 Wort über HSK 4 (Lektionslevel + 1): 吵 (HSK 5)

#### lesson-42 — 对...来说 & 关于

- Hinweis · Wortschatz · Beispiele: 1 Wort über HSK 4 (Lektionslevel + 1): 至于 (HSK 6)

#### lesson-5 — 被 (bèi) Passiv

- Hinweis · Wortschatz · Beispiele: 5 Wörter über HSK 4 (Lektionslevel + 1): 偷 (HSK 6), 蚊子 (HSK 7–9), 咬 (HSK 5), 解雇 (HSK 7–9), 打碎 (nicht im HSK-Wortschatz)

#### lesson-45 — 与其...不如 & 宁可...也

- Hinweis · Level (manuell) · ganze Lektion: 与其……不如 ist kein Syllabus-Punkt (nur Zusatz: 与其说…不如说…, 倒不如); 宁可/宁愿 sind HSK 7–9. Die Lektion rückt dadurch von HSK 4 nach HSK 7–9 — oder sie wird als Zusatz-Lektion geführt.

## 4. Abdeckung

Ein Punkt gilt als abgedeckt, wenn eine Lektion ihn in `grammarIds` führt (Haupt- oder Nebenpunkt).

| Level | Punkte | abgedeckt | davon Hauptpunkt | nicht abgedeckt | durch Vorschläge abgedeckt |
|---|---|---|---|---|---|
| HSK 1 | 97 | 60 (62 %) | 41 | 37 | 22 |
| HSK 2 | 89 | 47 (53 %) | 29 | 42 | 16 |
| HSK 3 | 116 | 44 (38 %) | 32 | 72 | 13 |
| HSK 4 | 116 | 18 (16 %) | 4 | 98 | 40 |
| HSK 5 | 82 | 2 (2 %) | 0 | 80 | 66 |
| HSK 6 | 55 | 2 (4 %) | 0 | 53 | 49 |
| HSK 7-9 | 175 | 2 (1 %) | 2 | 173 | 61 |

### HSK 1: nicht abgedeckt (37)

- **word** (9): `小—`, `第—`↗, `—们`, `多`, `怎么样`↗, `和¹`, `和²`, `吧¹`↗, `喂`
- **overview** (4): `离合词@HSK1`↗, `人称代词@HSK1`, `数词@HSK1`↗, `时量词@HSK1`↗
- **pattern** (24): `基本结构类型：联合短语`, `基本结构类型：偏正短语`, `基本结构类型：动宾短语`↗, `基本结构类型：主谓短语`, `其他结构类型：介宾短语`, `谓语：名词、代词、数词或数量短语作谓语`↗, `谓语：动词或动词性短语、形容词或形容词性短语作谓语`, `动词+动量补语`, `主谓句3：名词谓语句`↗, `单句：非主谓句`↗, `陈述句`↗, `疑问句：正反问句`↗, `祈使句`↗, `“是”字句1：表示等同或类属`↗, `处所+是+名词`↗, `连动句1：前后动作先后发生，后一动作是前一动作的目的`↗, `连动句1：前一动作是后一动作的方式`↗, `主语+动词+宾语1+宾语2`↗, `……，也……`, `……，还……`, `钱数表示法`↗, `序数表达法1：第+数词`↗, `时间表示法：年、月、日、星期表示法`↗, `钟点表示法`↗

### HSK 2: nicht abgedeckt (42)

- **word** (16): `左`, `右`, `可能`, `自己`, `每`, `包`, `次`, `好`, `最`, `一起`, `还²`, `常`, `别`↗, `从²`, `因为¹`, `啊¹`
- **pattern** (21): `AA、A一A、A了A、ABAB`↗, `AA、AABB`↗, `其他结构类型：“的”字短语`, `其他结构类型：连谓短语`↗, `其他结构类型：兼语短语`↗, `名词性短语`, `动词性短语`, `形容词性短语`, `什么的`, `都……了`, `名词性短语作谓语`, `祈使句：用“别”的祈使句`↗, `“是”字句2：表示说明或特征`↗, `“有”字句2：表示达到`, `A比B+动词+得+形容词/A+动词+得+比+B+形容词`, `表使令：主语+请/叫/让……+宾语1+动词+宾语2`↗, `主语+动词+给+宾语1+宾语2`↗, `序数表示法2：数词+量词`↗, `概数表达法1：（1）用“几”表示概数`↗, `数词+多+量词`↗, `数词+量词+多`↗
- **overview** (5): `离合词@HSK2`↗, `数词@HSK2`↗, `程度副词@HSK2`, `语气副词@HSK2`, `语气助词@HSK2`↗

### HSK 3: nicht abgedeckt (72)

- **word** (23): `老—`, `得（能愿动词）`, `需要`, `怎样`, `别人`, `咱们`, `别的`, `其他`, `碗`, `盘`, `特别`, `一共`, `到处`, `一直`, `刚`, `总是`, `必须`, `不必`, `不用`, `为了`↗, `为²`↗, `根据`, `的话`↗
- **overview** (12): `后缀@HSK3`, `方位名词@HSK3`, `能愿动词@HSK3`, `离合词@HSK3`↗, `离合词@HSK3（离合词）`↗, `动量词@HSK3`, `范围副词@HSK3`, `时间副词@HSK3`, `频率副词@HSK3`, `情态副词@HSK3`, `语气副词@HSK3`, `引出对象@HSK3`
- **pattern** (37): `不定指用法`, `个个、张张`↗, `其他结构类型：同位短语`, `数量重叠：数词+量词+数词+量词`↗, `不A不B`, `不一会儿`, `看来`, `在……看来`, `看起来`, `看上去`, `一般来说`, `不怎么样`, `从……起`, `一点儿也不`, `X什么（啊）`↗, `该……了`, `在……上/下/中`, `主语：动词或动词性短语、形容词或形容词性短语作主语`, `主谓短语作主语`, `多项定语`, `形容词+得很`↗, `形容词/动词+极了/坏了`↗, `数量补语3：表示动作结束到某个时间点的间隔时间`, `“怎样+动词”的特指问句`, `用反问句表示强调：不是……吗？`↗, `A比B+更/还+形容词`, `A比B+多/少/早/晚+动词+数量短语`, `表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物`, `表示消失：处所词+动词+结果补语+动态助词（了）+数量短语+人/物`, `“是……的”句2：强调说话人的看法或态度`, `或者……，或者……`, `一会儿……，一会儿……`, `……的话，就……`↗, `为了……，……`↗, `……了……（就）……`, `概数表达法2：（1）用“大概”表示概数`, `数的表达法：相邻数词连用表示概数`

### HSK 4: nicht abgedeckt (98)

- **word** (24): `敢`, `此`, `多么`↗, `尤其`, `至少`, `往往`, `也许`↗, `恐怕`↗, `并¹`↗, `只好`↗, `到底`↗, `竟然`↗, `差（一）点儿`↗, `究竟`↗, `当`, `对于`, `与¹`, `按照`, `而¹`, `此外`↗, `另外`↗, `之`, `啊`, `嗯`
- **overview** (16): `指示代词@HSK4`, `名量词@HSK4`, `名量词@HSK4（名量词）`, `动量词@HSK4`, `程度副词@HSK4`↗, `范围副词@HSK4`, `频率副词@HSK4`, `方式副词@HSK4`, `语气副词@HSK4`↗, `引出时间、处所@HSK4`, `引出施事、受事@HSK4`↗, `引出凭借、依据@HSK4`, `连接词或词组@HSK4`, `连接分句或句子@HSK4`, `连接分句或句子@HSK4（连接分句或句子）`, `其他助词@HSK4`
- **pattern** (58): `数词+形容词+量词`, `一A一B`, `无A无B`, `有A有B`, `有的是`, `说不定`, `不怎么`, `就是说/这就是说`, `一+量词+比+一+量词`, `在……方面`, `够……的`, `拿……来说`, `再也不/没……`, `怎么都/也+不/没……`, `为了……而……`↗, `动词+一X是一X`, `（没）有什么（好）X的`, `X是X，Y是Y`, `X也得X，不X也得X`, `X就是了`, `还X呢`, `你X你的吧`, `让/叫你X你就X`, `说什么/怎么（着）也得X`, `X就X（点儿）吧`, `X是X`, `形容词/心理动词+死了/厉害`↗, `动词+得/不+了`, `难道……吗？`↗, `反问句2：由疑问代词构成的反问句`↗, `主语+把+宾语+动词（+一/了）+动词`↗, `主语+把+宾语+动词+动量补语/时量补语`↗, `主语+把+宾语+状语+动词`↗, `表爱憎义：主语+表扬/批评+宾语1+动词+宾语2`↗, `表称谓或认定义：主语+收/选+宾语1+做/当/为+宾语2`↗, `表致使：主语+使/让+人称代词+动词短语`↗, `跟……相比`, `双重否定句：用双重否定表示强调`↗, `不是……，而是……`↗, `一方面……，另一方面……`↗, `……，于是……`↗, `……,甚至……`↗, `……，并且……`↗, `不是……，就是……`↗, `尽管……，但是/可是……`↗, `……，然而……`↗, `……X是X，就是/不过……`↗, `……，否则……`↗, `要是……，（就）……，否则……`↗, `（由于）……，因此……`, `……，好……`↗, `即使……，也……`↗, `就是……，也……`↗, `无标记`, `不……也……`↗, `概数表示法3：数词+来+量词`, `数的表示法：用“大约、左右、前后”表示概数`, `数的表示法：小数、分数、百分数、倍数的表示法`

↗ = in einem Vorschlag unten enthalten.

## 5. Vorgeschlagene neue Lektionen

Nihongo hat 157 Lektionen (N5 30, N4 37, N3 23, N2 31, N1 12 plus Übergangslektionen); Zhongwen hat 45, alle HSK 1–4 und nach dem Relevel eine auf HSK 7–9. Die Vorschläge bündeln HSK-2025-Punkte, die keine Lektion als Link führt, zu thematischen Lektionen. Level = Spanne der Hauptpunkte (Spalte Level), sonst aller Punkte.

### HSK1–4 (Lücken) (14)

Nur Lücken, bei denen ein Kernmuster eines Levels ohne Lektion ist. HSK 4 ist mit 16 % Abdeckung die größte Lücke (fast alle 复句 fehlen). Ohne neue Lektion, als Erweiterung bestehender Lektionen: lesson-4 um 把字句2 (HSK 4: 把+V+了, 把+状语+V, 把+V+动量), lesson-6 um 比较句2/3 (更/还, 多/少+V, 不如, 跟……相比), lesson-3 um 是……的句2, lesson-5 um 叫/让-Passiv, lesson-41 um V得了/V不了, lesson-29 um 数量补语3 (他走了三天了).

| # | Prio | Titel | Level | Grammatikpunkte | Ziel |
|---|---|---|---|---|---|
| 1 | P1 | Zahlen, Datum, Uhrzeit und Preise · 数字、日期、时间和价钱 | HSK 1 | `数词@HSK1` (1), `时量词@HSK1` (1), `钱数表示法` (1), `时间表示法：年、月、日、星期表示法` (1), `钟点表示法` (1), `序数表达法1：第+数词` (1), `第—` (1), `主谓句3：名词谓语句` (1), `数词@HSK2` (2), `序数表示法2：数词+量词` (2), `概数表达法1：（1）用“几”表示概数` (2), `数词+多+量词` (2), `数词+量词+多` (2) | Zahlen bis 10 000, Datum, Wochentag, Uhrzeit, Preise und ungefähre Zahlen sicher bilden (Nomen als Prädikat: 今天星期一). |
| 2 | P1 | Sätze mit 是 — und wann 是 fehlt · “是”字句 | HSK 1–2 | `“是”字句1：表示等同或类属` (1), `处所+是+名词` (1), `“是”字句2：表示说明或特征` (2), `谓语：名词、代词、数词或数量短语作谓语` (1), `陈述句` (1), `单句：非主谓句` (1) | A 是 B, 是 als Merkmal und am Ort; Abgrenzung zum Adjektivsatz ohne 是 und zum Nomenprädikat. |
| 3 | P1 | Fragen ohne 吗, Bitten und Vorschläge · 正反问句、祈使句和“吧” | HSK 1–2 | `疑问句：正反问句` (1), `祈使句` (1), `吧¹` (1), `怎么样` (1), `祈使句：用“别”的祈使句` (2), `别` (2), `语气助词@HSK2` (2) | 去不去？, 我们走吧, 怎么样？ und 别……: Ja/Nein-Fragen ohne 吗, Aufforderung, Vorschlag und Verbot. |
| 4 | P1 | Verbketten, zwei Objekte, 请/让/叫 · 连动句、双宾语句和兼语句 | HSK 1–2 | `连动句1：前后动作先后发生，后一动作是前一动作的目的` (1), `连动句1：前一动作是后一动作的方式` (1), `主语+动词+宾语1+宾语2` (1), `主语+动词+给+宾语1+宾语2` (2), `表使令：主语+请/叫/让……+宾语1+动词+宾语2` (2), `其他结构类型：连谓短语` (2), `其他结构类型：兼语短语` (2) | 去北京旅游, 坐飞机去, 给他一本书, 老师让我们读课文 — Sätze mit mehreren Verben richtig ordnen. |
| 5 | P1 | Trennbare Verben · 离合词 | HSK 1–2 | `离合词@HSK1` (1), `离合词@HSK2` (2), `离合词@HSK3` (3), `离合词@HSK3（离合词）` (3), `基本结构类型：动宾短语` (1) | 见面/睡觉/帮忙: wohin 了, 过, Dauer und Objekt treten (睡了八个小时的觉, 跟他见面, 帮我的忙). |
| 6 | P1 | Verdopplung: 看看, 试一试, 高高兴兴 · 动词和形容词重叠 | HSK 2 | `AA、A一A、A了A、ABAB` (2), `AA、AABB` (2), `个个、张张` (3), `数量重叠：数词+量词+数词+量词` (3) | Verben verdoppeln für „mal kurz“, Adjektive für Lebendigkeit; 个个 und 一个一个 als „jeder einzelne“. |
| 7 | P1 | Wenn und falls: 如果, ……的话, 要是 · 假设复句 | HSK 3–4 | `如果……，就……` (3)°, `……的话，就……` (3), `的话` (3), `要是……，就……` (4)°, `要是……，（就）……，否则……` (4), `……，否则……` (4) | Bedingungen formulieren und eine Alternative mit 否则 anschließen; Stellung von 就 im Folgesatz. |
| 8 | P1 | Rhetorische Fragen und doppelte Verneinung · 反问句和双重否定句 | HSK 3–4 | `用反问句表示强调：不是……吗？` (3), `难道……吗？` (4), `反问句2：由疑问代词构成的反问句` (4), `双重否定句：用双重否定表示强调` (4), `X什么（啊）` (3) | 不是说好了吗？, 难道你不知道？, 谁不想去？, 不得不 — Nachdruck durch Frage und doppelte Verneinung erkennen und bilden. |
| 9 | P1 | Obwohl und selbst wenn: 尽管, 即使, 就是……也 · 让步复句 | HSK 4 | `尽管……，但是/可是……` (4), `即使……，也……` (4), `就是……，也……` (4), `……，然而……` (4), `……X是X，就是/不过……` (4), `不……也……` (4) | Tatsache (尽管) und Annahme (即使) unterscheiden; schriftliches 然而 und gesprochenes X是X，就是……. |
| 10 | P2 | Argumentieren: 不是……而是, 一方面……另一方面, 甚至 · 并列、递进和选择复句（四级） | HSK 4 | `不是……，而是……` (4), `不是……，就是……` (4), `一方面……，另一方面……` (4), `……,甚至……` (4), `……，并且……` (4), `……，于是……` (4), `此外` (4), `另外` (4) | Gedanken richtigstellen, abwägen, steigern und anreihen — die Satzverbindungen für HSK-4-Aufsätze. |
| 11 | P2 | Zweck: 为了, 为了……而, ……，好…… · 目的复句 | HSK 3 | `为了` (3), `为了……，……` (3), `为²` (3), `为了……而……` (4), `……，好……` (4) | Zweck voran- oder nachstellen; Abgrenzung 为了 (Zweck) / 因为 (Grund). |
| 12 | P2 | Echte Gradkomplemente: 得很, 极了, 死了 · 程度补语 | HSK 3–4 | `形容词+得很` (3), `形容词/动词+极了/坏了` (3), `形容词/心理动词+死了/厉害` (4), `多么` (4), `程度副词@HSK4` (4) | Den hohen Grad nach dem Adjektiv ausdrücken (好极了, 累死了) — und so das Zustandskomplement aus lesson-8 sauber abgrenzen. |
| 13 | P2 | 让 und 使: jemanden veranlassen · 兼语句（致使） | HSK 4 | `表致使：主语+使/让+人称代词+动词短语` (4), `表爱憎义：主语+表扬/批评+宾语1+动词+宾语2` (4), `表称谓或认定义：主语+收/选+宾语1+做/当/为+宾语2` (4), `引出施事、受事@HSK4` (4) | 这件事使我很感动, 老师表扬他学习认真, 大家选他当班长 — Ursache und Pivot-Sätze. |
| 14 | P2 | Haltung im Satz: 到底, 竟然, 只好, 差点儿, 并 · 语气副词（四级） | HSK 4 | `语气副词@HSK4` (4), `到底` (4), `究竟` (4), `竟然` (4), `只好` (4), `差（一）点儿` (4), `并¹` (4), `也许` (4), `恐怕` (4) | Nachfragen, Überraschung, Notlösung, Beinahe und Zurückweisen mit den wichtigsten HSK-4-Modaladverbien. |

### HSK5 (12)

Diese 12 Lektionen bündeln 68 der 82 HSK 5-Punkte.

Offen bleiben Übersichten (Zählwörter, Grad-, Zeit-, Häufigkeitsadverbien), —头, 眼, 多项状语/尽量/亲自, 有着/V有, A+Adj+B+Menge, 同², 不是……还是 — Kandidaten für Nebenlinks.

| # | Titel | Level | Grammatikpunkte | Ziel |
|---|---|---|---|---|
| 1 | Falls, sobald, selbst wenn: 假如, 万一, 一旦, 哪怕 · 假设与让步（五级） | HSK 5 | `假如……，（就）……` (5), `万一……，（就）……` (5), `一旦……，就……` (5), `一旦` (5), `哪怕……，也……` (5), `……，要不然/不然……` (5) | Gedachte, befürchtete und einschneidende Bedingungen unterscheiden und den Extremfall mit 哪怕 einräumen. |
| 2 | Knappe Sätze ohne Bindewort: 没有……就没有, 不……不……, 再……也 · 紧缩复句 | HSK 5 | `没有……就没有……` (5), `不……不……` (5), `再……也……` (5), `连动句3：前后两个动词性词语具有因果、转折、条件关系` (5) | Kompakte Bedingungs- und Einräumungssätze wie 不见不散, 再忙也要吃饭 verstehen und bilden. |
| 3 | Gegen die Erwartung: 反而, 居然, 果然 · 反而、居然、果然 | HSK 5 | `反而` (5), `不但不/不但没有……，反而……` (5), `居然` (5), `果然` (5) | Ausdrücken, ob ein Ergebnis die Erwartung bestätigt (果然), überrascht (居然) oder umkehrt (反而). |
| 4 | Haltung und Anschein: 毕竟, 反正, 似乎, 仿佛 · 语气副词（五级） | HSK 5 | `毕竟` (5), `反正` (5), `似乎` (5), `仿佛` (5), `似的` (5), `语气副词@HSK5` (5), `不管怎样说` (5) | Begründen (毕竟), abwinken (反正), vorsichtig einschätzen (似乎) und bildhaft vergleichen (仿佛……似的). |
| 5 | Schriftlich verknüpfen: 因而, 从而, 可见, 总之, 以及 · 书面连接（五级） | HSK 5 | `……，因而……` (5), `从而` (5), `……，可见……` (5), `……，为的是……` (5), `总之` (5), `以及` (5), `或是……，或是……` (5), `连接分句或句子@HSK5` (5) | Folge, Schluss, Zweck und Fazit in Texten markieren; Aufzählen mit 以及 und 或是. |
| 6 | Seit und dann: 自从, 以来, 便 · 自从、以来、便 | HSK 5 | `自从` (5), `（自）……以来` (5), `便` (5), `……，便……` (5), `时间副词@HSK5` (5) | Zeitspannen seit einem Ereignis und schriftliches „dann“ (便 statt 就) in Erzählungen. |
| 7 | Grundlage, Quelle, Richtung: 凭, 据, 依据, 朝, 沿着 · 介词（五级） | HSK 5 | `凭` (5), `据` (5), `依据` (5), `从……来看` (5), `由……组成` (5), `朝` (5), `沿（着）` (5), `引出对象@HSK5` (5) | Die HSK-5-Präpositionen für Grundlage, Informationsquelle, Blickwinkel und Bewegungsrichtung. |
| 8 | 得 + Satz: so …, dass … · 状态补语（五级） | HSK 5 | `动词/形容词+得+动词短语` (5)°, `动词/形容词+得+主谓短语` (5)°, `动词/形容词+得+固定短语` (5), `形容词/心理动词+得+不得了` (5), `不得了` (5), `动词+得/不得` (5) | 累得不想说话, 冷得我发抖, 高兴得不得了 — Folgen und Grade nach 得 mit eigenem Verb oder Subjekt; Fortsetzung von lesson-8. |
| 9 | Richtungskomplemente als Zustand: 下来, 下去, 起来, 过来 · 趋向补语的状态意义 | HSK 5 | `趋向补语的引申用法：表示状态意义：动词/形容词+下来/下去/起来/过来/过去` (5), `表示动作行为的开始：动词+上/起来` (3)°, `表示动作行为的持续：动词+下去/下来` (3)° | 安静下来, 冷下去, 热起来, 醒过来 — Zustandswechsel mit Richtungskomplementen; Fortsetzung von lesson-9. |
| 10 | 把 und 被 für Fortgeschrittene · “把”字句和被动句（五级） | HSK 5 | `主语+把+宾语+一+动词` (5), `主语+把+宾语1+动词+宾语2` (5), `主语+被/叫/让+宾语+给+动词+其他成分` (5), `主语+把+宾语+动词（+一/了）+动词` (4), `主语+把+宾语+动词+动量补语/时量补语` (4), `主语+把+宾语+状语+动词` (4) | 他把门一关, 把A当作B, 被他给弄坏了 — die späten 把/被-Muster, mit Wiederholung der HSK-4-Formen. |
| 11 | Vierwortmuster: A来A去, A着A着, 说A就A · 四字格（五级） | HSK 5 | `A来A去` (5), `A着A着` (5), `说A就A` (5), `没A没B` (5), `X来X去，都是/就是……` (5) | Wiederholung, unerwartete Wendung und Plötzlichkeit mit festen Vierwortrahmen ausdrücken. |
| 12 | Gesprochene Muster: abwinken, zögern, zugreifen · 口语格式（五级） | HSK 5 | `X什么X` (5), `什么X不X（的）` (5), `真有你/他/她的` (5), `X也不是，Y也不是` (5), `X也X不得，Y也Y不得` (5), `不X白不X` (5), `X着也是X着` (5), `用不着` (5), `动词+什么（就）是什么` (5), `A的A，B的B` (5), `X是它，Y也是它` (5) | Typische Gesprächsrahmen der HSK-5-Hörtexte erkennen und ihren Ton (Ärger, Ratlosigkeit, Spott) deuten. |

### HSK6 (12)

Diese 12 Lektionen bündeln 51 der 55 HSK 6-Punkte.

Nihongo hat auf N2 31 Lektionen, ein Teil davon sind Gesprächsmuster wie hier 11 und 12.

| # | Titel | Level | Grammatikpunkte | Ziel |
|---|---|---|---|---|
| 1 | Nur wenn und ausnahmslos: 除非, 凡是 · 除非、凡是 | HSK 6 | `除非……，才……` (6), `除非……，否则/不然……` (6), `凡是……，都……` (6) | Die einzige Bedingung (除非) und Allaussagen (凡是……都) sicher bilden; Abgrenzung zu 只有……才. |
| 2 | Entweder – oder, mal – mal: 要么, 一时……一时, 也好 · 选择与交替（六级） | HSK 6 | `要么……，要么……` (6), `一时……一时……` (6), `也好` (6) | Zwei Wege zur Wahl stellen, wechselnde Zustände beschreiben und mit 也好 Gleichgültigkeit ausdrücken. |
| 3 | Knapp einräumen: 虽, 就算, 倒是 · 让步（六级） | HSK 6 | `虽……，但/可/却/也……` (6), `就算……，也……` (6), `倒是` (6) | Schriftliches 虽, gesprochenes 就算 und das einräumende 倒是 („zwar …, aber“). |
| 4 | Schriftsprache: 于, 因, 除, 所, 以便 · 书面语（六级） | HSK 6 | `于` (6), `因` (6), `除` (6)°, `所` (6), `至于` (6)°, `……，以便……` (6) | Die knappen Präpositionen und 所 der Schriftsprache lesen und in formellen Sätzen selbst benutzen. |
| 5 | Kurzerhand, nicht unbedingt, unwillkürlich: 干脆, 未必, 不禁, 不料 · 语气与方式副词（六级） | HSK 6 | `干脆` (6), `未必` (6), `不禁` (6), `不料` (6), `语气副词@HSK6` (6), `方式副词@HSK6` (6) | Entschluss, vorsichtige Verneinung, unwillkürliche Reaktion und unerwartete Wendung ausdrücken. |
| 6 | Immer wieder und bis jetzt: 一再, 再三, 到……为止 · 一再、再三、到……为止 | HSK 6 | `一再` (6), `再三` (6), `时间副词@HSK6` (6), `到……为止` (6), `番` (6) | Wiederholung (一再/再三, 一番) und Endpunkte (到目前为止) präzise ausdrücken. |
| 7 | Gesprochene Partikeln: 啦, 嘛, 人家 · 啦、嘛、人家 | HSK 6 | `啦` (6), `嘛` (6), `人家` (6) | Ton und Haltung in Dialogen: lebhaftes 啦, selbstverständliches 嘛, schmollendes 人家. |
| 8 | Reagieren: 算了, 得了, 那倒是, 好不容易 · 应答语（六级） | HSK 6 | `算了` (6), `得了` (6), `那倒（也）是` (6), `好（不）容易` (6) | Im Gespräch abwinken, beenden, einlenken und Mühe betonen (好不容易 = 好容易). |
| 9 | 把 mit Ursache und Betroffenem · “把”字句（六级） | HSK 6 | `主语（非生物体）+把+宾语+动词+其他成分` (6), `主语+把+宾语（施事）+动词+其他成分` (6), `看/瞧+把+宾语（施事）+X得` (6) | 这场雨把我淋透了, 这件事把他急坏了, 看把你高兴得 — 把 mit unbelebter Ursache und betroffener Person. |
| 10 | Vierwortmuster: A这A那, 左A右B, 东一A西一A · 四字格（六级） | HSK 6 | `A这A那` (6), `左A右B` (6), `东一A，西一A` (6), `A一+量词，B一+量词` (6) | Planloses, wiederholtes und abwechselndes Tun mit festen Rahmen beschreiben. |
| 11 | Vorwurf, Ausruf, Abhaken · 口语格式（六级） | HSK 6 | `好你个X` (6), `看你X的/瞧他X的` (6), `放着X不Y` (6), `早（也）不X，晚（也）不X` (6), `X到Y头上来了` (6), `X了就X了，（没）有……` (6), `X归X，Y归Y` (6), `这/那也不X，那/这也不Y` (6), `不X不……，一X……` (6) | Die Gesprächsmuster der HSK-6-Hörtexte: vorwerfen, staunen, trennen und abhaken. |
| 12 | Wortbildung mit Halbaffixen: 超-, 多-, 反-, -化, -式 · 类前缀和类后缀 | HSK 6 | `类前缀@HSK6` (6), `类后缀@HSK6` (6) | Neue Wörter aus Halbaffixen erschließen (超市, 多功能, 现代化, 中式) — wichtig für Lesetexte. |

### HSK7-9 (7)

Diese 7 Lektionen bündeln 61 der 175 HSK 7-9-Punkte.

Sinnvoll als kleiner Block (Nihongo N1: 12 Lektionen), vor allem für Lesen und Schreiben: Diskursmarker, schriftsprachliche Strukturen, Textaufbau. lesson-45 (与其/宁可) gehört nach dem Relevel bereits hierher.

| # | Titel | Level | Grammatikpunkte | Ziel |
|---|---|---|---|---|
| 1 | Diskursmarker I: Meinung und Einschränkung · 话语标记（一） | HSK 7-9 | `老实说` (7-9), `说真的` (7-9), `不瞒你说` (7-9), `要（让）我说` (7-9), `话是这么说` (7-9), `话（又）说回来` (7-9), `退一步说` (7-9), `不是我说你` (7-9) | Meinungen einleiten, abschwächen und einschränken wie in Diskussionen und Interviews. |
| 2 | Diskursmarker II: Zusammenfassen und Umformulieren · 话语标记（二） | HSK 7-9 | `换句话说` (7-9), `总而言之` (7-9), `总的来说` (7-9), `综上所述` (7-9), `简（而）言之` (7-9), `概括来说` (7-9), `归根到底` (7-9), `这样一来` (7-9), `反过来（说）` (7-9) | Texte gliedern, zusammenfassen und Schlüsse ziehen — für Aufsatz und mündliche Prüfung. |
| 3 | Steigerung schriftlich: 尚且……何况, 别说……都, 更不用说 · 递进复句（七至九级） | HSK 7-9 | `……尚且……，（更）何况……` (7-9), `别说……，都/也……` (7-9), `连……都……，更不用说……了` (7-9), `……，更不用说……了` (7-9), `……不说，还……` (7-9) | Vom schwächeren zum stärkeren Fall argumentieren, schriftlich und gesprochen. |
| 4 | Gehobene Bedingungen: 倘若, 纵然, 幸亏……否则, 非得……才 · 假设、让步和条件（七至九级） | HSK 7-9 | `倘若` (7-9), `假若/假使……，……` (7-9), `纵然/纵使……，也……` (7-9), `幸亏/幸好……，不然/否则……` (7-9), `任……也……` (7-9), `非得……才……` (7-9), `无论……与否，都……` (7-9) | Die schriftsprachlichen Bedingungs- und Einräumungsformen der höheren Stufen lesen und verwenden. |
| 5 | Schriftsprachliche Bausteine: 乃, 予以, 有所, 并非, 所谓 · 书面语（七至九级） | HSK 7-9 | `乃` (7-9), `予以` (7-9), `有所` (7-9), `并非` (7-9), `所谓` (7-9), `所谓……，就是……` (7-9), `皆` (7-9), `即` (7-9), `（因）……，故……` (7-9), `因……而……` (7-9), `鉴于¹` (7-9), `基于` (7-9) | Behörden-, Presse- und Wissenschaftssprache entschlüsseln. |
| 6 | Texte bauen: mehrfach zusammengesetzte Sätze, Reihenfolge, Auslassung · 多重复句与语篇 | HSK 7-9 | `多重复句：多重并列复句` (7-9), `多重复句：多重转折复句` (7-9), `多重复句：多重假设复句` (7-9), `多重复句：多重因果复句` (7-9), `多重复句：多重递进复句` (7-9), `时间顺序` (7-9), `空间顺序` (7-9), `逻辑顺序` (7-9), `话题延伸` (7-9), `话题转换` (7-9), `承前省略` (7-9), `蒙后省略` (7-9) | Lange Sätze zerlegen und eigene Absätze logisch ordnen; Subjektauslassung über Satzgrenzen. |
| 7 | Vierwortmuster der Oberstufe: 爱A不A, 半A半B, 不A而B, 七A八B · 四字格（七至九级） | HSK 7-9 | `爱A不A` (7-9), `半A半B` (7-9), `不A而B` (7-9), `七A八B` (7-9), `自A自B` (7-9), `无A不B` (7-9), `忽A忽B` (7-9), `连A带B` (7-9) | Produktive Vierwortrahmen erkennen und ihre Bedeutung aus dem Muster ableiten. |

° = bereits von einer bestehenden Lektion als Nebenpunkt verlinkt.

HSK 5–6-Punkte weder in bestehenden Lektionen noch in Vorschlägen: 18 — `—头`, `指示代词@HSK5`, `名量词@HSK5`, `眼`, `程度副词@HSK5`, `频率副词@HSK5`, `尽量`, `亲自`, `同²`, `多项状语`, `表示存在、具有：主语+有+着+宾语`, `表示附着：主语+动词+有+宾语`, `A+形容词+B+数量补语`, `不是……，还/还是……`, `名量词@HSK6`, `程度副词@HSK6`, `范围副词@HSK6`, `动词/形容词+透+了`.

## 6. Was `--write` ändert

- Je Lektion in `grammar-lessons.js`: `level` wird auf den neuen Wert gesetzt (Format `HSKa` oder `HSKa/HSKb`), direkt dahinter wird `grammarIds: [...]` eingefügt (Hauptpunkte zuerst, dann nach Level). Feldname wie in Nihongo (`grammarIds`).
- 21 Level ändern sich; 209 Links in 45 Lektionen.
- Sonst nichts: keine Texte, keine Beispiele, keine Engine-Zeilen. Inhaltliche Befunde und neue Lektionen sind eigene Schritte.
- Die Engine (`renderLessonContent`) zeigt `grammarIds` bereits als Knöpfe „Muster nachschlagen“ (öffnen den Grammatikpunkt). Weil sich Level ändern, ändert sich die angezeigte Nummerierung; die fest verdrahteten „Lektion N“ wurden deshalb auf `[[lesson:…]]` umgestellt (Abschnitt 7).
- Mindestens eine Lektion landet auf HSK 7–9: Die Level-Filter der Engine kennen nur HSK 1–6 (`initLessons`), dafür fehlt ein Knopf.
- **Angewendet:** `grammar-lessons.js` enthält die neuen Level und `grammarIds` aller 45 Lektionen (alte Level in `previous-levels.json`).

## 7. Fixed (2026-10-11)

Die Befunde aus Abschnitt 3 der ersten Fassung wurden in `grammar-lessons.js` behoben: alle Fehler und Warnungen, die Rollenbezeichnungen ohne erkennbares Geschlecht und die meisten Hinweise. 45 manuelle Befunde aus `review-notes.json` sind als erledigt markiert; Abschnitt 3 zeigt nur noch, was offen ist. Danach prüft `scripts/lessons/validate.cjs --all` alle Lektionen (siehe unten).

Änderungen nach Art: Gendern 19, Sachaussage 15, Wortschatz 15, Übersetzung 8, Beispiel 6, Querverweis 5, Deutsch 4, Tonsandhi 4, Formulierung 3, Pinyin 3, Level 2, Eselsbrücke 2, Grammatikpunkt 2, Terminologie 1, Tipp 1.

- **lesson-21** Chinesische Satzstellung: Tonsandhi — 不上班 bù → bú; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 她在图书馆学习 → 她在学校学习; 他每天在公园跑步 → 他每天在家里看书; 她常常去中国 → 她经常去中国
- **lesson-22** Fragen stellen: Deutsch — „ein reiner Fragepartikel“ → „eine reine Fragepartikel“; Gendern — Wer ist dein Lehrer? (谁 = wer) → Wer ist deine Lehrkraft? (谁 = wer); Gendern — Wie viele Schüler hat eure Klasse? → Wie viele Schülerinnen und Schüler hat eure Klasse?
- **lesson-23** 有 (yǒu): Gendern — Im Klassenzimmer sind dreißig Schüler. → Im Klassenzimmer sind dreißig Schülerinnen und Schüler.; Gendern — „Anfängerfehler“ → „Fehler am Anfang“; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 附近有没有银行 → 这儿有没有商店; 冰箱里没有牛奶了 → 杯子里没有水了; 这个菜有点儿辣 → 这个菜有点儿贵
- **lesson-24** 在 (zài): Querverweis — „Lektion 19“ → [[lesson:lesson-19]]; Übersetzung — „(Nicht: Ich esse in Hause)“ gestrichen; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 厕所在哪儿 → 医院在哪儿; 银行在学校旁边 → 商店在学校旁边; 钥匙在包里面 → 手机在包里面; 她在图书馆看书 → 她在朋友家看书; 孩子们在公园玩 → 孩子们在外面玩; 我的猫在沙发上 → 我的猫在椅子上; 沙发上有一只猫 → 椅子上有一只猫
- **lesson-26** 这 (zhè) und 那 (nà): Übersetzung — 那 als „das … dort“ statt „dieses“ übersetzt (2 Beispiele); Sachaussage — Zählwort „in der Regel“ statt „Pflicht“; 这些/那些 ohne Zählwort genannt (g:指示代词@HSK1)
- **lesson-25** 想 (xiǎng) und 要 (yào): Sachaussage — Tipp zu 不要: Antwort 不要 auf 你要咖啡吗？ ist die normale Ablehnung („will ich nicht“), Verbot nur bei 不要 + Verb (g:不要); Übersetzung — 我会去 nur „Ich werde (bestimmt) hingehen“ (kein erlerntes Können, g:会); 我能去 „Ich kann hingehen (Umstände)“; Querverweis — „Lektion 17“ → [[lesson:lesson-17]]; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 你要努力学习 → 你要好好学习; 不要碰 → 不要走; 我不想吃辣的 → 我不想吃米饭; 你不要迟到 → 上课不要说话
- **lesson-27** 很, 太, 真, 非常: Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 你真厉害 → 你的中文真好
- **lesson-18** Zählwörter (量词): Sachaussage — „immer ein Zählwort“ → „fast immer“, Ausnahmen 三天, 两年, 二十岁 (g:时量词@HSK1); Übersetzung — 这位老师姓王 → „Diese Lehrkraft heißt mit Nachnamen Wang“; Gendern — Wer ist dieser Student dort? → Wer ist der Student/die Studentin dort?
- **lesson-20** 不 vs. 没: Gendern — Ich bin kein Student. (是 wird immer mit 不 verneint!) → Ich bin nicht Student/Studentin. (是 wird immer mit 不 verneint!); Sachaussage — 没: „nicht geschehen“ statt „Vergangenheit“ (Aspekt, nicht Tempus; g:没（有）); Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 你不应该这样做 → 她不能来
- **lesson-28** 也 (yě) und 都 (dōu): Gendern — Sie sind alle Studenten. → Sie sind alle Studierende.; Gendern — Sie sind nicht alle Chinesen. (Einige schon) → Sie kommen nicht alle aus China. (Einige schon); Eselsbrücke — „alphabetisch: A(uch) vor A(lle)“ ersetzt
- **lesson-1** 了 (le): Deutsch — „der berühmteste … Partikel“ und „diesen Partikel“ → feminin; Beispiel — Tipp: (也买了一本书) → (我买了一本书); Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 我已经做了作业了 → 我已经买了票了
- **lesson-17** 会, 能, 可以: Tipp — ❌ vor dem korrekten 不可以抽烟 entfernt; Verbot korrekt gezeigt; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 他受伤了，不能走路 → 他病了，不能来上课; 这里可以停车吗 → 这里可以坐吗; 他喝了酒，不能开车 → 他太累了，不能开车; 这里不可以停车 → 这里不可以开车
- **lesson-19** 在, 正在, 正: Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 他们正讨论这个问题 → 他们正看电视; 你在干什么呢 → 你在做什么呢; 她刚才没在听 → 她没在听我说话; 我打电话的时候，他正在洗澡 → 我打电话的时候，他正在睡觉; 昨天晚上八点我在写作业 → 昨天晚上八点我在看书
- **lesson-12** Thema-Kommentar-Struktur: Sachaussage — „Deutsch ist eine SVO-Sprache“ entfernt (Widerspruch zu lesson-21); Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 这里不能停车 → 这里不能坐; 数学我学得好，物理我学不好 → 唱歌我唱得好，跳舞我跳不好
- **lesson-29** 时间表达: Tonsandhi — 不上班 bù → bú; Deutsch — „Hände waschen“ → „sich die Hände waschen“
- **lesson-30** 就 und 才: Gendern — „des Sprechers … der Sprecher … er“ → neutral
- **lesson-31** 还是 und 或者: Sachaussage — 或者 in Ja/Nein-Fragen mit 吗 möglich, 还是 nur in Wahlfragen (g:或者) — Einleitung, Tipp, Zusammenfassung; Gendern — „Gesprächspartner“ → „Gegenüber“; Gendern — Bist du Chinese oder Japaner? → Kommst du aus China oder aus Japan?; Pinyin — zhōngcān klein (kein Eigenname)
- **lesson-32** 又 und 再: Sachaussage — 又…又 verbindet meist Eigenschaften, mit Verben auch lebhafte Handlungen (又唱又跳) — jetzt im Einklang mit g:又……，又…… und lesson-43; Querverweis — „Lektion 35“ → [[lesson:lesson-35]] (im neuen Tipp)
- **lesson-11** 过 (guò): Deutsch — „den Aspektpartikel 过. Er drückt aus“ → „die Aspektpartikel 过. Sie drückt aus“; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 我看过这部电影 → 我看过这个电影; 我以前学过法语 → 我以前学过汉语; 你曾经想过放弃吗 → 你曾经去过北京吗
- **lesson-35** 一边...一边: Sachaussage — Abgrenzung 又…又 / 一边…一边 an g:一边……，一边…… angeglichen („vor allem Eigenschaften“ statt „ausschließlich“); Beispiel — 一面微笑一面说 ersetzt (Art und Weise → 笑着说, g:一边……，一边……): 他一面听音乐一面做饭; Beispiel — 听播客 → 听歌, „einen Podcast“-Fehler entfällt; Gendern — Die Schüler hören Musik und machen dabei Hausaufgaben. → Die Schülerinnen und Schüler hören Musik und machen dabei Hausaufgaben.
- **lesson-33** 从...到 und 离: Sachaussage — 从…到 vor dem Verb, 到 + Ziel auch nach dem Verb (g:到 + Ort/Zeit); Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 从明天开始我要减肥 → 从明天开始我要每天跑步; 从现在开始不许迟到 → 从现在开始我们说中文
- **lesson-3** 是...的 Konstruktion: Sachaussage — Stellung von 的 ohne unbelegte Stilwertung; 是 darf nur im bejahten Satz fehlen (g:“是……的”句1); Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 你是什么时候毕业的 → 你是什么时候来北京的
- **lesson-15** 因为...所以: Sachaussage — „nicht beide weglassen“ korrigiert: Grund und Folge stehen oft ganz ohne Bindewort (g:不用关联词语的复句); Formulierung — Tipp ohne irreführendes ❌ und ohne „nie“ neu formuliert; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 你怎么没来？——因为堵车了 → 你怎么没来？——因为我生病了; 由于天气原因，航班取消了 → 由于大雨，飞机没有起飞; 他之所以成功，是因为他很努力 → 他之所以没来，是因为他病了
- **lesson-34** 给, 对, 跟, 向: Sachaussage — „keine Präpositionen“ → Präpositionen (介词), die aus Verben entstanden sind (Koverben); Gendern — Du solltest den Lehrer um Rat fragen. → Du solltest die Lehrkraft um Rat fragen.; Übersetzung — 这个跟那个不一样 → „Das hier ist anders als das da.“
- **lesson-7** 结果补语 — Resultativkomplemente: Querverweis — „Lektion 9“ zeigte auf die Richtungskomplemente → [[lesson:lesson-41]] (可能补语); Beispiel — 请把音乐放大一点 → 请把声音开大一点 (放大 = vergrößern); Formulierung — Resultativkomplement „ein Wort (meist ein Zeichen)“
- **lesson-8** 状态补语 — Zustandskomplemente mit 得: Terminologie — Titel, Einleitung und Texte: 状态补语/Zustandskomplement statt 程度补语/Gradkomplement (g:动词+得+形容词性短语, g:形容词+得很); echte Gradkomplemente als Abgrenzung genannt; Level — Abschnitt „Komplexe Beschreibungen“ als Ausblick auf HSK 5 gekennzeichnet; Querverweis — „Lektion 2“ → [[lesson:lesson-2]] (in der neuen Einleitung)
- **lesson-10** 着 (zhe): Gendern — Im Klassenzimmer sitzen viele Schüler. → Im Klassenzimmer sitzen viele Schülerinnen und Schüler.
- **lesson-37** 快要...了, 要...了: Übersetzung — 召开 → „findet … statt“; Wortschatz — Beispiele auf Lektionslevel + 1 gebracht: 快要毕业了 → 快要放假了; 会议将于下周一召开 → 比赛将在明天开始; 这座桥将在明年完工 → 这家商店将在下个月开门; 新政策将要开始实施 → 下个月学校将要放假
- **lesson-4** 把 (bǎ) Konstruktion: Sachaussage — Stellung im 把-Satz an g:主语+把+宾语+状语+动词 angeglichen: Verneinung, Modalverben, 已经 vor 把; beschreibende Adverbiale und objektbezogenes 都 nach dem Objekt; Übersetzung — 那本书 → „das Buch (dort)“
- **lesson-14** 虽然...但是: Sachaussage — Paar 虽然…但是 „normal“ statt „notwendig“; 虽然 kann fehlen, 但是 eher nicht (g:虽然……，但是……); Formulierung — Abschnitt „Häufige Fehler“ verständlich neu gefasst (但是 allein vs. 虽然…但是); Pinyin — 还是 háishì → háishi (wie in lesson-31 und den Grammatikpunkten)
- **lesson-39** 不但...而且: Gendern — Nicht nur Chinesen essen Jiaozi, auch Ausländer lieben sie. → Nicht nur in China isst man Jiaozi, auch Menschen aus dem Ausland lieben sie.
- **lesson-41** 可能补语 V得/V不: Übersetzung — 这个字 → Einzahl
- **lesson-42** 对...来说 & 关于: Gendern — Für Ausländer sind die Schriftzeichen am schwierigsten. → Für Menschen aus dem Ausland sind die Schriftzeichen am schwierigsten.; Level — 至于 als Ausblick (HSK 6) gekennzeichnet
- **lesson-5** 被 (bèi) Passiv: Beispiel — 这部电影被很多人喜欢 (unnatürlich, nacktes Zustandsverb) → 这个问题被解决了; Gendern — „Muttersprachler bevorzugen“ → „Im Alltag bevorzugt man“
- **lesson-9** 趋向补语 — Richtungskomplemente: Beispiel — Abschnitt „Einfache Richtungskomplemente“: 走过来/跑出去 (zusammengesetzt) → 带来/买来; Gendern — „zum/vom Sprecher“ → „zur sprechenden Person hin / von ihr weg“
- **lesson-16** 越...越...: Gendern — Je strenger der Lehrer, desto gewissenhafter die Schüler. → Je strenger die Lehrkraft, desto gewissenhafter die Lernenden.
- **lesson-13** 连...都/也: Pinyin — 名字 míngzì → míngzi (2 Beispiele); Grammatikpunkt — Beispiel mit 更 ergänzt, damit der Hauptpunkt 连……也/都……，……更…… (HSK 4) vollständig gezeigt wird
- **lesson-43** 既...又/也 & 又...又: Sachaussage — unbelegte Regel „既…又 nicht mit 了“ ersetzt durch Stilhinweis
- **lesson-44** 不管...都 & 无论...都: Tonsandhi — 不论 Bùlùn → Búlùn (3 Beispiele)
- **lesson-45** 与其...不如 & 宁可...也: Tonsandhi — 不迟到 bú → bù; Eselsbrücke — „与 = mit/statt“ entfernt (与 heißt „mit, und“); 与其 ≈ „statt …“; Grammatikpunkt — Tipp nennt die verlinkten Zusatzpunkte 倒不如 und 与其说……不如说…… mit Beispielen

### Nach dem Relevel (Validator)

- `validate.cjs --all` nach dem Relevel: Beispielwörter mehr als ein Level über dem Lektionslevel (HSK 1–2) ersetzt (siehe „Wortschatz“ oben).
- Begründete Ausnahmen in `scripts/lessons/allowlist.json`: lesson-12 大象/鼻子 (klassisches 主谓谓语句-Beispiel 大象鼻子长), lesson-11 北京烤鸭/臭豆腐/寿司 (Speisen als Erfahrungsbeispiele) und 曾经 (im Text gelehrte Kombination mit 过), lesson-18 筷子/信 (Nomen zu den gelehrten Zählwörtern 双/封).
- Links ohne Lehrinhalt entfernt (overrides.json): lesson-19 时间副词@HSK2, lesson-36 时间副词@HSK3, lesson-34 引出对象@HSK3, lesson-33 从……起, lesson-15 （由于）……，因此…… — die Lektionen zeigen davon nur ein einzelnes Zeichen oder gar nichts.

