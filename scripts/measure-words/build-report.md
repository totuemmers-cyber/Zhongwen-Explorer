# Zählwörter build report (written, 2026-10-11)

Built by `node scripts/measure-words/build.cjs` --write. Old content read from git dc85aca (141 classifiers).

## Summary

- **Entries: 239** — HSK1 23, HSK2 10, HSK3 27, HSK4 38, HSK5 39, HSK6 35, HSK7-9 39, Zusatz 28
- Kinds: Zählwort 165, Maßeinheit 35, Zeit 15, Verbal 19, Unbestimmt 5
- Syllabus: 191 vocabulary rows with 量 (14 of them 数量); 96 items in the grammar-syllabus measure-word lists (20 rows).
- From: vocab 量 rows 181, grammar lists only 10, Zusatz 28 (old classifiers 9, classifiers only vocab.measureWords uses 19).
- Old classifiers: 141 → 110 matched to a syllabus entry, 20 at the level of their syllabus word, 9 Zusatz, 2 removed (bookmarks → vocab).
- Content: 139 with old content (author draft), 67 with a meaning drafted from the vocab entry, 11 from HanDeDict, 18 without meaning. All meaningStatus „draft“.
- Nouns: 131 entries have nouns (1424 links), 108 have none.
- Categories: Objekte 33, Zeit 21, Allgemein 7, Menschen 8, Handlungen 16, Mengen 22, Masseinheiten 31, Tiere 9, Essen 18, Gebaeude 8, Abstrakt 31, Literatur 11, Transport 7, Natur 12, Medizin 5

### Level × kind

| Level | Zählwort | Maßeinheit | Zeit | Verbal | Unbestimmt | Σ |
|---|---:|---:|---:|---:|---:|---:|
| HSK1 | 8 | 1 | 9 | 2 | 3 | 23 |
| HSK2 | 8 | 0 | 0 | 1 | 1 | 10 |
| HSK3 | 16 | 5 | 1 | 4 | 1 | 27 |
| HSK4 | 24 | 7 | 2 | 5 | 0 | 38 |
| HSK5 | 33 | 4 | 1 | 1 | 0 | 39 |
| HSK6 | 23 | 9 | 1 | 2 | 0 | 35 |
| HSK7-9 | 26 | 9 | 1 | 3 | 0 | 39 |
| Zusatz | 27 | 0 | 0 | 1 | 0 | 28 |

## Model

Entry fields: `id` (`m:<classifier>`, `m:<classifier>:<numeric pinyin>` when one character has two classifier readings), `classifier`, `pinyin` (citation form as in the vocab entry; `pinyinSpoken` for 一下 etc.), `traditional`, `level`, `kind` (+ `kindAlso`), `category` (ASCII key), `meaning`, `usage`, `questionWord`, `table` (generated, see below), `specialForms`, `examples`, `notes`, `nouns` (≤30 vocab ids) + `nounCount`, `vocabId`, `syllabus` ({vocab:[{no, level, pos, measureLevel}], grammar:[{no, level, item}]}), `legacyIds` (old classifier key — the field the app already migrates bookmarks and deep links with), `meaningStatus`.

Level = the lowest of (a) the level of the 量 use in the vocabulary syllabus (a 量 inside a bracket group counts at its later level: 回 动、（量） 1(3) → HSK3, 班 名、（量） 2(5) → HSK5) and (b) the level of the grammar-syllabus list that names it (班 is 专用名量词 HSK3 → HSK3).

levelSource: 'vocab' (量 row), 'grammar' (grammar list earlier or only there), 'word' (old classifier that is a syllabus word in another part of speech: that word's level); Zusatz entries have none.

Tables: not stored; the app generates 1–10 (section-configs.js countingRows: 一 sandhi yí/yì, 两; countStyle 'date' for 号/日 → 一号 yī, 二号; countStyle 'er' for the tael → 二两). 数量 entries (form '数量') have neither table nor question word. borrowed: grammar-list 借用名量词.

### Filter buttons / select needed

- Level: HSK1, HSK2, HSK3, HSK4, HSK5, HSK6, HSK7-9, Zusatz (new level row, like Nihongo `counter-level`).
- Category (existing `data-mwcat` keys, ASCII): `Allgemein`, `Menschen`, `Tiere`, `Objekte`, `Essen`, `Natur`, `Transport`, `Zeit`, `Gebaeude` „Gebäude“, `Mengen`, `Handlungen`, `Literatur`, `Medizin`, `Abstrakt`, `Masseinheiten` „Maßeinheiten“. New: `Masseinheiten` „Maßeinheiten“.
- Unused category keys: –
- Kind (optional select or badge): Zählwort, Maßeinheit, Zeit, Verbal, Unbestimmt.

## 数量 rows (numeral-classifier words)

| Word | Level | pos | Decision | Reason |
|---|---|---|---|---|
| 一下 yíxià | HSK1 | 数量、（副） | aufnehmen (Verbal) | V+一下 „mal kurz“ ist das HSK1-Muster des Verbalzählworts 下; Lernende suchen es hier. Adverb-Gebrauch (一下就懂了) bleibt Vokabel. |
| 一点儿 yìdiǎnr | HSK1 | 数量 | aufnehmen (Unbestimmt) | Unbestimmte Menge vor Nomen (一点儿水) und nach Adjektiven; steht im Satz an der Stelle von Zahl+Zählwort. |
| 一些 yìxiē | HSK1 | 数量 | aufnehmen (Unbestimmt) | Unbestimmte Menge „einige“ (一些书), Gegenstück zu 些; ersetzt Zahl+Zählwort. |
| 一会儿 yíhuìr | HSK2 | 数量、（副） | aufnehmen (Unbestimmt) | Unbestimmte Zeitdauer als Dauerergänzung (等一会儿) – Zeitmenge wie 两天/三分钟. |
| 半天 bàntiān | HSK3 | 数量 | aufnehmen (Unbestimmt) | Zeitmenge (半+天) „halber Tag / ewig lange“, steht als Dauerergänzung wie 一会儿. |
| 俩 liǎ | HSK4 | 数量 | Vokabeln | Zahlwort „zwei (Stück)“ = 两个, kein Zählwort; Hinweis „kein 个 nach 俩“ gehört in die Notiz von 个. |
| 半夜 bànyè | HSK5 | 数量、名 | Vokabeln | Nomen „Mitternacht“ (Tageszeit), keine Mengenangabe. |
| 首次 shǒucì | HSK5 | 数量 | Vokabeln | Adverbial „zum ersten Mal“ (首+次), Wortschatz; 次 hat einen eigenen Eintrag. |
| 一阵 yízhèn | HSK6 | 数量 | Vokabeln | 一+阵 vollständig durchsichtig; gehört als Beispiel in den Eintrag 阵. |
| 八成 bāchéng | HSK7-9 | 数量、副 | Vokabeln | Adverb „höchstwahrscheinlich“ / „80 %“, Wortschatz; 成 hat einen eigenen Eintrag. |
| 百般 bǎibān | HSK7-9 | 副、数量 | Vokabeln | Adverb „auf jede erdenkliche Weise“, keine Mengenangabe im Sinn eines Zählworts. |
| 两下子 liǎngxiàzi | HSK7-9 | 数量、名 | Vokabeln | Idiomatisches Nomen „etwas drauf haben“, Wortschatz. |
| 首批 shǒupī | HSK7-9 | 数量 | Vokabeln | „erste Charge“ (首+批), Wortschatz; 批 hat einen eigenen Eintrag. |
| 一度 yídù | HSK7-9 | 数量、副 | Vokabeln | Adverb „zeitweise, einst“, Wortschatz. |

## Old → new (110 matched)

| Old | → id | Level | Kind | Category | Note |
|---|---|---|---|---|---|
| 把 bǎ | m:把 | HSK3 | Zählwort | Objekte |  |
| 班 bān | m:班 | HSK3 | Zählwort | Transport |  |
| 版 bǎn | m:版 | HSK6 | Zählwort | Literatur |  |
| 包 bāo | m:包 | HSK2 | Zählwort | Objekte |  |
| 杯 bēi | m:杯 | HSK1 | Zählwort | Essen |  |
| 本 běn | m:本 | HSK1 | Zählwort | Objekte |  |
| 笔 bǐ | m:笔 | HSK5 | Zählwort | Abstrakt |  |
| 遍 biàn | m:遍 | HSK3 | Verbal | Handlungen | Kategorie Abstrakt → Handlungen |
| 部 bù | m:部 | HSK4 | Zählwort | Transport |  |
| 册 cè | m:册 | HSK5 | Zählwort | Literatur |  |
| 层 céng | m:层 | HSK3 | Zählwort | Abstrakt |  |
| 场 chǎng | m:场 | HSK4 | Verbal (+Zählwort) | Abstrakt |  |
| 串 chuàn | m:串 | HSK6 | Zählwort | Essen |  |
| 次 cì | m:次 | HSK2 | Verbal | Handlungen | Kategorie Abstrakt → Handlungen |
| 丛 cóng | m:丛 | HSK7-9 | Zählwort | Natur |  |
| 打 dá | m:打 | HSK4 | Maßeinheit | Mengen |  |
| 袋 dài | m:袋 | HSK4 | Zählwort | Objekte |  |
| 道 dào | m:道 | HSK4 | Zählwort | Essen |  |
| 滴 dī | m:滴 | HSK6 | Zählwort | Natur |  |
| 顶 dǐng | m:顶 | HSK6 | Zählwort | Objekte |  |
| 栋 dòng | m:栋 | HSK6 | Zählwort | Gebaeude | Kategorie Natur → Gebaeude |
| 堵 dǔ | m:堵 | HSK5 | Zählwort | Gebaeude |  |
| 段 duàn | m:段 | HSK3 | Zählwort | Zeit |  |
| 堆 duī | m:堆 | HSK5 | Zählwort | Allgemein |  |
| 对 duì | m:对 | HSK4 | Zählwort | Allgemein |  |
| 顿 dùn | m:顿 | HSK4 | Verbal (+Zählwort) | Essen |  |
| 朵 duǒ | m:朵 | HSK5 | Zählwort | Natur |  |
| 番 fān | m:番 | HSK6 | Verbal | Handlungen | Kategorie Abstrakt → Handlungen |
| 分钟 fēnzhōng | m:分钟 | HSK1 | Zeit | Zeit |  |
| 份 fèn | m:份 | HSK4 | Zählwort | Abstrakt |  |
| 封 fēng | m:封 | HSK3 | Zählwort | Abstrakt |  |
| 幅 fú | m:幅 | HSK4 | Zählwort | Objekte |  |
| 副 fù | m:副 | HSK5 | Zählwort | Objekte |  |
| 个 gè | m:个 | HSK1 | Zählwort | Allgemein |  |
| 根 gēn | m:根 | HSK5 | Zählwort | Allgemein |  |
| 股 gǔ | m:股 | HSK7-9 | Zählwort | Natur |  |
| 管 guǎn | m:管 | HSK5 | Zählwort | Objekte |  |
| 盒 hé | m:盒 | HSK4 | Zählwort | Objekte |  |
| 回 huí | m:回 | HSK3 | Verbal (+Zählwort) | Handlungen | Kategorie Zeit → Handlungen |
| 伙 huǒ | m:伙 | HSK5 | Zählwort | Menschen |  |
| 剂 jì | m:剂 | HSK7-9 | Zählwort | Medizin |  |
| 家 jiā | m:家 | HSK1 | Zählwort | Objekte |  |
| 架 jià | m:架 | HSK5 | Zählwort | Transport |  |
| 间 jiān | m:间 | HSK2 | Zählwort | Gebaeude | Kategorie Objekte → Gebaeude |
| 件 jiàn | m:件 | HSK1 | Zählwort | Objekte |  |
| 节 jié | m:节 | HSK3 | Zählwort | Zeit |  |
| 截 jié | m:截 | HSK7-9 | Zählwort | Objekte |  |
| 局 jú | m:局 | HSK6 | Zählwort | Abstrakt |  |
| 句 jù | m:句 | HSK3 | Zählwort | Abstrakt |  |
| 卷 juàn | m:卷:juan4 | HSK6 | Zählwort | Literatur |  |
| 棵 kē | m:棵 | HSK4 | Zählwort | Natur |  |
| 颗 kē | m:颗 | HSK5 | Zählwort | Allgemein |  |
| 口 kǒu | m:口 | HSK1 | Zählwort (+Verbal) | Menschen |  |
| 块 kuài | m:块 | HSK1 | Zählwort (+Maßeinheit) | Objekte |  |
| 捆 kǔn | m:捆 | HSK7-9 | Zählwort | Mengen |  |
| 粒 lì | m:粒 | HSK6 | Zählwort | Essen |  |
| 辆 liàng | m:辆 | HSK3 | Zählwort | Transport |  |
| 列 liè | m:列 | HSK4 | Zählwort | Transport |  |
| 缕 lǚ | m:缕 | HSK7-9 | Zählwort | Natur |  |
| 轮 lún | m:轮 | HSK6 | Zählwort | Abstrakt |  |
| 枚 méi | m:枚 | HSK7-9 | Zählwort | Objekte |  |
| 面 miàn | m:面 | HSK5 | Zählwort | Objekte |  |
| 秒 miǎo | m:秒 | HSK4 | Zeit | Zeit |  |
| 名 míng | m:名 | HSK2 | Zählwort | Menschen |  |
| 幕 mù | m:幕 | HSK7-9 | Zählwort | Literatur |  |
| 年 nián | m:年 | HSK1 | Zeit | Zeit |  |
| 排 pái | m:排 | HSK4 | Zählwort | Allgemein |  |
| 盘 pán | m:盘 | HSK3 | Zählwort | Essen |  |
| 批 pī | m:批 | HSK5 | Zählwort | Mengen |  |
| 匹 pǐ | m:匹 | HSK5 | Zählwort | Tiere |  |
| 篇 piān | m:篇 | HSK4 | Zählwort | Abstrakt |  |
| 片 piàn | m:片 | HSK4 | Zählwort | Allgemein |  |
| 期 qī | m:期 | HSK4 | Zählwort | Literatur |  |
| 起 qǐ | m:起 | HSK5 | Zählwort | Abstrakt |  |
| 群 qún | m:群 | HSK5 | Zählwort | Tiere |  |
| 扇 shàn | m:扇 | HSK6 | Zählwort | Gebaeude | Kategorie Objekte → Gebaeude |
| 身 shēn | m:身 | HSK4 | Zählwort | Objekte |  |
| 声 shēng | m:声 | HSK3 | Verbal | Handlungen |  |
| 手 shǒu | m:手 | HSK4 | Zählwort | Handlungen |  |
| 首 shǒu | m:首 | HSK4 | Zählwort | Abstrakt |  |
| 束 shù | m:束 | HSK5 | Zählwort | Mengen |  |
| 双 shuāng | m:双 | HSK3 | Zählwort | Objekte |  |
| 艘 sōu | m:艘 | HSK6 | Zählwort | Transport |  |
| 所 suǒ | m:所 | HSK3 | Zählwort | Gebaeude | Kategorie Objekte → Gebaeude |
| 台 tái | m:台 | HSK4 | Zählwort | Objekte | Kategorie Transport → Objekte |
| 趟 tàng | m:趟 | HSK4 | Verbal | Handlungen | Kategorie Abstrakt → Handlungen |
| 套 tào | m:套 | HSK5 | Zählwort | Objekte |  |
| 天 tiān | m:天 | HSK1 | Zeit | Zeit |  |
| 条 tiáo | m:条 | HSK2 | Zählwort | Tiere |  |
| 头 tóu | m:头 | HSK3 | Zählwort | Tiere |  |
| 碗 wǎn | m:碗 | HSK3 | Zählwort | Essen |  |
| 位 wèi | m:位 | HSK2 | Zählwort | Menschen |  |
| 窝 wō | m:窝 | HSK7-9 | Zählwort | Tiere |  |
| 席 xí | m:席 | HSK7-9 | Zählwort | Essen |  |
| 下 xià | m:下 | HSK1 | Verbal | Handlungen |  |
| 项 xiàng | m:项 | HSK4 | Zählwort | Abstrakt |  |
| 行 háng | m:行 | HSK5 | Zählwort | Literatur |  |
| 眼 yǎn | m:眼 | HSK5 | Verbal | Handlungen |  |
| 则 zé | m:则 | HSK7-9 | Zählwort | Abstrakt |  |
| 盏 zhǎn | m:盏 | HSK7-9 | Zählwort | Objekte |  |
| 张 zhāng | m:张 | HSK3 | Zählwort | Objekte |  |
| 阵 zhèn | m:阵 | HSK5 | Zählwort | Natur |  |
| 支 zhī | m:支 | HSK5 | Zählwort | Objekte |  |
| 只 zhī | m:只 | HSK1 | Zählwort | Tiere |  |
| 种 zhǒng | m:种 | HSK3 | Zählwort | Abstrakt |  |
| 周 zhōu | m:周 | HSK5 | Zeit | Zeit |  |
| 株 zhū | m:株 | HSK6 | Zählwort | Natur |  |
| 桩 zhuāng | m:桩 | HSK7-9 | Zählwort | Abstrakt |  |
| 宗 zōng | m:宗 | HSK7-9 | Zählwort | Abstrakt |  |
| 座 zuò | m:座 | HSK4 | Zählwort | Gebaeude | Kategorie Natur → Gebaeude |

## Old classifiers outside the syllabus measure words (31)

Not a 量 row and not in a grammar list. Settled: a classifier that is a syllabus word in the same reading („Lehrplanwort“, other part of speech) takes that word's level (levelSource 'word'); the rest is Zusatz; 字 and 月 are removed.

| Old | Decision | Lehrplanwort | CC-CEDICT classifier sense | listed as CL: | vocab nouns | Kind | Category |
|---|---|---|---|---:|---:|---|---|
| 瓶 píng | Zusatz | – | classifier for wine and liquids | 11 | 5 | Zählwort | Essen |
| 箱 xiāng | Zusatz | – | – | 0 | 0 | Zählwort | Objekte |
| 罐 guàn | Lehrplanwort-Level | HSK6 名 | – | 7 | 3 | Zählwort | Essen |
| 壶 hú | Lehrplanwort-Level | HSK6 名 | classifier for bottled liquid | 3 | 2 | Zählwort | Essen |
| 栏 lán | Lehrplanwort-Level | HSK6 名 | – | 0 | 0 | Zählwort | Abstrakt |
| 门 mén | Lehrplanwort-Level | HSK2 名 | classifier for courses, fields of study, branches of technology, relatives by marriage, gu | 16 | 14 | Zählwort | Abstrakt |
| 步 bù | Lehrplanwort-Level | HSK4 名 | – | 0 | 0 | Verbal | Abstrakt |
| 尊 zūn | Zusatz | – | classifier for cannons and statues | 5 | 1 | Zählwort | Objekte |
| 出 chū | Lehrplanwort-Level | HSK2 动 | classifier for dramas, plays, operas etc / variant of 出[chu1] (classifier for plays or cha | 7 | 4 | Zählwort | Literatur |
| 字 zì | entfernen: 字 ist ein Nomen, gezählt mit 个 (一个字, so auch die alte Notiz); 一字不差 ist eine feste Wendung. → w:字:zi4 | HSK1 名 | – | 0 | 0 |  |  |
| 拳 quán | Lehrplanwort-Level | HSK7-9 名、动 | – | 0 | 0 | Verbal | Handlungen |
| 脚 jiǎo | Lehrplanwort-Level | HSK3 名 | classifier for kicks | 0 | 0 | Verbal | Handlungen |
| 刀 dāo | Lehrplanwort-Level | HSK4 名 | classifier for sets of one hundred sheets (of paper) / classifier for knife cuts or stabs | 0 | 0 | Verbal | Handlungen |
| 巴掌 bāzhang | Lehrplanwort-Level | HSK7-9 名 | classifier: slap | 0 | 0 | Verbal | Handlungen |
| 碟 dié | Lehrplanwort-Level | HSK7-9 名 | – | 0 | 0 | Zählwort | Essen |
| 锅 guō | Lehrplanwort-Level | HSK5 名 | – | 0 | 0 | Zählwort | Essen |
| 勺 sháo | Zusatz | – | – | 0 | 0 | Zählwort | Essen |
| 桶 tǒng | Lehrplanwort-Level | HSK4 名 | – | 2 | 2 | Zählwort | Essen |
| 摞 luò | Zusatz | – | – | 0 | 0 | Zählwort | Mengen |
| 帮 bāng | Lehrplanwort-Level | HSK2 动 | – | 0 | 0 | Zählwort | Menschen |
| 波 bō | Zusatz | – | – | 1 | 1 | Zählwort | Abstrakt |
| 味 wèi | Lehrplanwort-Level | HSK4 名 | (TCM) classifier for ingredients of a medicine prescription | 1 | 1 | Zählwort | Medizin |
| 针 zhēn | Lehrplanwort-Level | HSK6 名 | – | 0 | 0 | Verbal | Medizin |
| 湾 wān | Zusatz | – | – | 0 | 0 | Zählwort | Natur |
| 方 fāng | Lehrplanwort-Level | HSK5 形、名 | classifier for square things | 5 | 2 | Maßeinheit | Mengen |
| 小时 xiǎoshí | Lehrplanwort-Level | HSK1 名 | – | 0 | 0 | Zeit | Zeit |
| 月 yuè | entfernen: 月 nach Zahlen bildet Monatsnamen (三月 = März); „drei Monate“ ist 三个月 – 月 ist hier Nomen mit 个. → w:月:yue4 | HSK1 名 | – | 0 | 0 |  |  |
| 代 dài | Lehrplanwort-Level | HSK5 动、名 | – | 0 | 0 | Zählwort | Zeit |
| 盆 pén | Lehrplanwort-Level | HSK5 名 | – | 1 | 2 | Zählwort | Objekte |
| 炷 zhù | Zusatz | – | classifier for lit incense sticks | 0 | 0 | Zählwort | Objekte |
| 尾 wěi | Zusatz | – | classifier for fish | 1 | 1 | Zählwort | Tiere |

At the level of their syllabus word (20): 罐→HSK6, 壶→HSK6, 栏→HSK6, 门→HSK2, 步→HSK4, 出→HSK2, 拳→HSK7-9, 脚→HSK3, 刀→HSK4, 巴掌→HSK7-9, 碟→HSK7-9, 锅→HSK5, 桶→HSK4, 帮→HSK2, 味→HSK4, 针→HSK6, 方→HSK5, 小时→HSK1, 代→HSK5, 盆→HSK5.

## Classifiers only in vocab.measureWords (20)

Nouns in the vocabulary list these classifiers, but neither the syllabus nor the old data has them. Proposal: Zusatz entries (content by the campaign) so every classifier chip links; added when CC-CEDICT or HanDeDict has a classifier sense.

| Classifier | Added | CC-CEDICT classifier sense | HanDeDict ZEW | Lehrplanwort | Nouns |
|---|---|---|---:|---|---:|
| 处 chù | ja → m:处 (Zählwort, Gebaeude) | classifier for locations: spot, point | 0 | HSK5 chǔ 动; HSK5 chù 名 | 6 |
| 餐 cān | ja → m:餐 (Zählwort, Essen) | classifier for meals | 1 | – | 3 |
| 床 chuáng | ja → m:床 (Zählwort, Objekte) | classifier for blankets, quilts etc | 2 | HSK2 chuáng 名 | 3 |
| 瓣 bàn | ja → m:瓣 (Zählwort, Essen) | classifier for pieces, segments etc | 1 | – | 3 |
| 服 fù | ja → m:服 (Zählwort, Medizin) | classifier for medicine: dose | 0 | HSK6 fú 动 | 2 |
| 撮 zuǒ | ja → m:撮 (Zählwort, Mengen) | classifier for hair or grass: tuft | 0 | – | 2 |
| 丝 sī | ja → m:丝 (Zählwort, Abstrakt) | classifier: a trace (of smoke etc), a tiny bit etc | 0 | HSK7-9 sī 名 | 2 |
| 缸 gāng | ja → m:缸 (Zählwort, Essen) | classifier for loads of laundry | 0 | HSK7-9 gāng 名 | 2 |
| 簇 cù | ja → m:簇 (Zählwort, Natur) | classifier for bunches, clusters, piles etc | 0 | – | 2 |
| 档 dàng | ja → m:档 (Zählwort, Abstrakt) | classifier for shows / classifier for events, affairs etc | 2 | – | 1 |
| 曲 qǔ | nein | – | 0 | HSK6 qǔ 名 |  |
| 挂 guà | ja → m:挂 (Zählwort, Objekte) | classifier for sets or clusters of objects | 1 | HSK4 guà 动 | 1 |
| 扎 zā | ja → m:扎 (Zählwort, Mengen) | classifier for flowers, banknotes etc: bundle | 0 | HSK6 zhā 动 | 1 |
| 记 jì | ja → m:记 (Verbal, Handlungen) | classifier for blows, kicks, shots | 0 | HSK3 jì 动 | 1 |
| 具 jù | ja → m:具 (Zählwort, Objekte) | classifier for devices, coffins, dead bodies | 0 | – | 1 |
| 泡 pāo | ja → m:泡 (Zählwort, Mengen) | classifier for urine or feces | 1 | HSK6 pào 名、动 | 1 |
| 纸 zhǐ | ja → m:纸 (Zählwort, Literatur) | classifier for documents, letters etc | 0 | HSK3 zhǐ 名 | 1 |
| 发 fā | ja → m:发 (Zählwort, Objekte) | classifier for gunshots (rounds) | 1 | HSK3 fā 动 | 1 |
| 沓 dá | ja → m:沓 (Zählwort, Mengen) | classifier for sheets of papers etc: pile, pad | 0 | – | 1 |
| 峰 fēng | ja → m:峰 (Zählwort, Tiere) | classifier for camels | 1 | – | 1 |

## New entries without old content (100)

| id | Level | Kind | Category | Draft meaning (source) | vocabId |
|---|---|---|---|---|---|
| m:点 diǎn | HSK1 | Zeit | Zeit | Uhr (bei Uhrzeiten); Punkt (vocab) | w:点:dian3 |
| m:分 fēn | HSK1 | Zeit | Zeit | Minute (Uhrzeit); Fen (1/100 Yuan); Punkt (Note); teilen (vocab) | w:分:fen1 |
| m:号 hào | HSK1 | Zeit | Zeit | Zählwort für Tag, Datum; Zählwort für Personen (HanDeDict) | w:号:hao4 |
| m:日 rì | HSK1 | Zeit | Zeit | Tag (im Datum, schriftlich) (vocab) | w:日:ri4 |
| m:岁 suì | HSK1 | Zeit | Zeit | Jahre alt (vocab) | w:岁:sui4 |
| m:些 xiē | HSK1 | Unbestimmt | Mengen | einige, manche (vocab) | w:些:xie1 |
| m:一下 yīxià | HSK1 | Verbal | Handlungen | einmal; kurz; mal (nach Verben); auf einmal; plötzlich (vocab) | w:一下:yi1xia4 |
| m:一点儿 yīdiǎnr | HSK1 | Unbestimmt | Mengen | ein bisschen; ein wenig; etwas (vocab) | w:一点儿:yi1dian3r5 |
| m:一些 yīxiē | HSK1 | Unbestimmt | Mengen | einige; ein paar; etwas (vocab) | w:一些:yi1xie1 |
| m:元 yuán | HSK1 | Maßeinheit | Masseinheiten | Yuan (chinesische Währungseinheit) (vocab) | w:元:yuan2 |
| m:一会儿 yīhuìr | HSK2 | Unbestimmt | Zeit | einen Moment; eine Weile; gleich (vocab) | w:一会儿:yi2hui4r5 |
| m:半天 bàntiān | HSK3 | Unbestimmt | Zeit | halber Tag; lange Zeit; eine ganze Weile (vocab) | w:半天:ban4tian1 |
| m:公斤 gōngjīn | HSK3 | Maßeinheit | Masseinheiten | Kilogramm (vocab) | w:公斤:gong1jin1 |
| m:角 jiǎo | HSK3 | Maßeinheit | Masseinheiten | Jiao (Geldeinheit: ein Zehntel Yuan) (vocab) | w:角:jiao3 |
| m:斤 jīn | HSK3 | Maßeinheit | Masseinheiten | Jin (chinesisches Pfund, 500 g) (vocab) | w:斤:jin1 |
| m:刻 kè | HSK3 | Zeit | Zeit | Viertelstunde (vocab) | w:刻:ke4 |
| m:毛 máo | HSK3 | Maßeinheit | Masseinheiten | Mao (Geldeinheit, 0,10 Yuan) (vocab) | w:毛:mao2 |
| m:米 mǐ | HSK3 | Maßeinheit | Masseinheiten | Meter; Reis (vocab) | w:米:mi3 |
| m:页 yè | HSK3 | Zählwort | Literatur | Seite (Zählwort für Buch- und Heftseiten) (vocab) | w:页:ye4 |
| m:倍 bèi | HSK4 | Maßeinheit | Mengen | mal; -fach (Vielfaches) (vocab) | w:倍:bei4 |
| m:公里 gōnglǐ | HSK4 | Maßeinheit | Masseinheiten | Kilometer (vocab) | w:公里:gong1li3 |
| m:克 kè | HSK4 | Maßeinheit | Masseinheiten | Gramm (vocab) | w:克:ke4 |
| m:两 liǎng | HSK4 | Maßeinheit | Masseinheiten | Liang (chinesische Gewichtseinheit, 50 Gramm) (vocab) | w:两:liang3#2 |
| m:千克 qiānkè | HSK4 | Maßeinheit | Masseinheiten | Kilogramm (vocab) | w:千克:qian1ke4 |
| m:摄氏度 shèshìdù | HSK4 | Maßeinheit | Masseinheiten | Grad Celsius (vocab) | w:摄氏度:she4shi4du4 |
| m:夜 yè | HSK4 | Zeit | Zeit | (Zählwort für Nächte) (vocab) | w:夜:ye4 |
| m:脸 liǎn | HSK4 | Zählwort | Mengen | ein ganzes Gesicht voll (一脸汗, 一脸笑容) (Autor) | w:脸:lian3 |
| m:屋子 wūzi | HSK4 | Zählwort | Mengen | ein ganzes Zimmer voll (一屋子人) (Autor) | w:屋子:wu1zi5 |
| m:桌子 zhuōzi | HSK4 | Zählwort | Mengen | ein ganzer Tisch voll (一桌子菜) (Autor) | w:桌子:zhuo1zi5 |
| m:等 děng | HSK5 | Zählwort | Abstrakt | Zählwort für Grad; Klasse; Rang (HanDeDict) | w:等:deng3#2 |
| m:队 duì | HSK5 | Zählwort | Menschen | **—** | w:队:dui4 |
| m:组 zǔ | HSK5 | Zählwort | Mengen | Satz (Zählwort) (vocab) | w:组:zu3 |
| m:单 dān | HSK5 | Zählwort | Abstrakt | **—** | w:单:dan1 |
| m:度 dù | HSK5 | Maßeinheit | Masseinheiten | Grad (Temperatur, Winkel, Alkohol); Kilowattstunde; Maß; verbringen (Zeit) (vocab) | w:度:du4 |
| m:吨 dūn | HSK5 | Maßeinheit | Masseinheiten | Tonne (vocab) | w:吨:dun1 |
| m:级 jí | HSK5 | Zählwort | Abstrakt | Zählwort für Stufen (vocab) | w:级:ji2 |
| m:集 jí | HSK5 | Zählwort | Literatur | **—** | w:集:ji2 |
| m:届 jiè | HSK5 | Zählwort | Abstrakt | Zählwort für regelmäßig stattfindende Veranstaltungen, Amtsperioden und Abschlussjahrgänge (vocab) | w:届:jie4 |
| m:类 lèi | HSK5 | Zählwort | Abstrakt | Zählwort für Objekte der gleichen Art, Kategorien; Zählwort für Angelegenheiten, Umstände (HanDeDict) | w:类:lei4 |
| m:厘米 límǐ | HSK5 | Maßeinheit | Masseinheiten | Zentimeter (vocab) | w:厘米:li2mi3 |
| m:团 tuán | HSK5 | Zählwort | Mengen | Zählwort für Klumpen und Knäuel; Gruppe; Klumpen; zu einer Kugel formen (vocab) | w:团:tuan2 |
| m:时 shí | HSK6 | Zeit | Zeit | **—** | w:时:shi2 |
| m:成 chéng | HSK6 | Maßeinheit | Mengen | Zehntel; zehn Prozent (vocab) | w:成:cheng2 |
| m:尺 chǐ | HSK6 | Maßeinheit | Masseinheiten | Chi (chinesischer Fuß, ⅓ Meter); Lineal (vocab) | w:尺:chi3 |
| m:寸 cùn | HSK6 | Maßeinheit | Masseinheiten | Cun (chinesisches Längenmaß, ca. 3,3 cm); Zoll (bei Bildschirmen, Fotos) (vocab) | w:寸:cun4 |
| m:毫米 háomǐ | HSK6 | Maßeinheit | Masseinheiten | Millimeter (mm) (vocab) | w:毫米:hao2mi3 |
| m:毫升 háoshēng | HSK6 | Maßeinheit | Masseinheiten | Milliliter (ml) (vocab) | w:毫升:hao2sheng1 |
| m:户 hù | HSK6 | Zählwort | Menschen | Zählwort für Haushalte und Familien; Haushalt; Familie (vocab) | w:户:hu4 |
| m:环 huán | HSK6 | Maßeinheit | Masseinheiten | Zählwort für Ringe (Schießsport) (vocab) | w:环:huan2 |
| m:卷:juan3 juǎn | HSK6 | Zählwort | Objekte | Zählwort für Gerolltes (Papier, Klebeband) (vocab) | w:卷:juan3 |
| m:款 kuǎn | HSK6 | Zählwort | Objekte | Modell (Zählwort für Produkte) (vocab) | w:款:kuan3 |
| m:捧 pěng | HSK6 | Zählwort | Mengen | Zählwort: eine Handvoll (mit beiden Händen) (vocab) | w:捧:peng3 |
| m:平方 píngfāng | HSK6 | Maßeinheit | Masseinheiten | **—** | w:平方:ping2fang1 |
| m:平方米 píngfāngmǐ | HSK6 | Maßeinheit | Masseinheiten | Quadratmeter (m²) (vocab) | w:平方米:ping2fang1mi3 |
| m:升 shēng | HSK6 | Maßeinheit | Masseinheiten | Liter (vocab) | w:升:sheng1#2 |
| m:线 xiàn | HSK6 | Zählwort | Abstrakt | (Zählwort) ein Hauch, ein Schimmer (vocab) | w:线:xian4 |
| m:样 yàng | HSK6 | Zählwort | Abstrakt | Art; Sorte (Zählwort für Sorten und Arten) (vocab) | w:样:yang4 |
| m:章 zhāng | HSK6 | Zählwort | Literatur | Kapitel (Zählwort); Stempel; Abzeichen (vocab) | w:章:zhang1 |
| m:枝 zhī | HSK6 | Zählwort | Natur | Zählwort für Blumen und Zweige (vocab) | w:枝:zhi1 |
| m:通 tōng | HSK7-9 | Verbal | Handlungen | (Zählwort) für Anrufe und Briefe (vocab) | w:通:tong1 |
| m:派 pài | HSK7-9 | Zählwort | Abstrakt | **—** | w:派:pai4 |
| m:磅 bàng | HSK7-9 | Maßeinheit | Masseinheiten | Pfund (ca. 454 g); Waage; (Typografie) Punkt (vocab) | w:磅:bang4 |
| m:拨 bō | HSK7-9 | Zählwort | Menschen | Zählwort für Gruppen (vocab) | w:拨:bo1 |
| m:担 dàn | HSK7-9 | Maßeinheit | Masseinheiten | Tragelast (Zählwort) (vocab) | w:担:dan4 |
| m:杆 gǎn | HSK7-9 | Zählwort | Objekte | Zählwort für Gewehre, Waagen u. Ä. (vocab) | w:杆:gan3 |
| m:公顷 gōngqǐng | HSK7-9 | Maßeinheit | Masseinheiten | Hektar (vocab) | w:公顷:gong1qing3 |
| m:驾 jià | HSK7-9 | Zählwort | Transport | Zählwort für Pferdewagen (vocab) | w:驾:jia4 |
| m:立方 lìfāng | HSK7-9 | Maßeinheit | Masseinheiten | **—** | w:立方:li4fang1 |
| m:立方米 lìfāngmǐ | HSK7-9 | Maßeinheit | Masseinheiten | Kubikmeter (m³) (vocab) | w:立方米:li4fang1mi3 |
| m:码 mǎ | HSK7-9 | Maßeinheit | Masseinheiten | Yard (Längenmaß); (Kleider-)Größe; Sache, Angelegenheit (in festen Wendungen) (vocab) | w:码:ma3 |
| m:马力 mǎlì | HSK7-9 | Maßeinheit | Masseinheiten | Pferdestärke; PS (vocab) | w:马力:ma3li4 |
| m:抹 mǒ | HSK7-9 | Zählwort | Natur | Zählwort für Streifen (Licht, Wolken) (vocab) | w:抹:mo3 |
| m:亩 mǔ | HSK7-9 | Maßeinheit | Masseinheiten | Mu (Flächenmaß, ca. 667 m²) (vocab) | w:亩:mu3 |
| m:人次 réncì | HSK7-9 | Maßeinheit | Masseinheiten | Personen (mehrfach gezählt); Besuche; Fahrgäste (Statistik) (vocab) | w:人次:ren2ci4 |
| m:胎 tāi | HSK7-9 | Zählwort | Tiere | Fötus; Schwangerschaft; (Zählwort für Geburten, Würfe); Reifen (vocab) | w:胎:tai1 |
| m:摊 tān | HSK7-9 | Zählwort | Mengen | (Zählwort für Lachen, Pfützen) (vocab) | w:摊:tan1 |
| m:堂 táng | HSK7-9 | Zählwort | Zeit | (Zählwort für Unterrichtsstunden) (vocab) | w:堂:tang2 |
| m:丸 wán | HSK7-9 | Zählwort | Medizin | Zählwort für Pillen (vocab) | w:丸:wan2 |
| m:旬 xún | HSK7-9 | Zeit | Zeit | Dekade (zehn Tage); Monatsdrittel; Lebensjahrzehnt (vocab) | w:旬:xun2 |
| m:幢 zhuàng | HSK7-9 | Zählwort | Gebaeude | Zählwort für Gebäude und Häuser (vocab) | w:幢:zhuang4 |
| m:重 chóng | HSK7-9 | Zählwort | Abstrakt | **—** | w:重:chong2 |
| m:处 chù | Zusatz | Zählwort | Gebaeude | **—** | w:处:chu4 |
| m:餐 cān | Zusatz | Zählwort | Essen | Zählwort für Mahlzeiten, Essen (Sprachw) (HanDeDict) | **kein Vokabeleintrag** |
| m:床 chuáng | Zusatz | Zählwort | Objekte | Zählwort für Bettdecken und Leintücher (HanDeDict) | w:床:chuang2 |
| m:瓣 bàn | Zusatz | Zählwort | Essen | Zählwort für Segment, Zehe, Stück (z. B. Knoblauchzehe, Apfelstück) (HanDeDict) | **kein Vokabeleintrag** |
| m:服 fù | Zusatz | Zählwort | Medizin | **—** | **kein Vokabeleintrag** |
| m:撮 zuǒ | Zusatz | Zählwort | Mengen | **—** | **kein Vokabeleintrag** |
| m:丝 sī | Zusatz | Zählwort | Abstrakt | **—** | w:丝:si1 |
| m:缸 gāng | Zusatz | Zählwort | Essen | **—** | w:缸:gang1 |
| m:簇 cù | Zusatz | Zählwort | Natur | **—** | **kein Vokabeleintrag** |
| m:档 dàng | Zusatz | Zählwort | Abstrakt | Zählwort für Kreuzstücke, Quertraverse; Zählwort für Ereignisse, Angelegenheiten etc (HanDeDict) | **kein Vokabeleintrag** |
| m:挂 guà | Zusatz | Zählwort | Objekte | Zählwort für Mengen, Gruppen, Objekte (HanDeDict) | w:挂:gua4 |
| m:扎 zā | Zusatz | Zählwort | Mengen | **—** | **kein Vokabeleintrag** |
| m:记 jì | Zusatz | Verbal | Handlungen | **—** | w:记:ji4 |
| m:具 jù | Zusatz | Zählwort | Objekte | **—** | **kein Vokabeleintrag** |
| m:泡 pāo | Zusatz | Zählwort | Mengen | Zählwort für Urin und Fäkalien (HanDeDict) | **kein Vokabeleintrag** |
| m:纸 zhǐ | Zusatz | Zählwort | Literatur | **—** | w:纸:zhi3 |
| m:发 fā | Zusatz | Zählwort | Objekte | Zählwort für Geschosse, Kugeln, Raketen (HanDeDict) | w:发:fa1 |
| m:沓 dá | Zusatz | Zählwort | Mengen | Stapel, Packen (Papier, Geldscheine: 一沓纸) (Autor) | **kein Vokabeleintrag** |
| m:峰 fēng | Zusatz | Zählwort | Tiere | Zählwort für Kamele (HanDeDict) | **kein Vokabeleintrag** |

## Ambiguous / noteworthy rows

- **量 only as a later use** (16): 点 HSK1→HSK1 (量、（名）)/HSK2→HSK4 (动、（名、量）); 回 HSK1→HSK3 (动、（量）); 班 HSK2→HSK5 (名、（量）); 头 HSK2→HSK3 (名、（量）、（形）); 对 HSK1→HSK4 (形、介、（动、量）); 笔 HSK2→HSK5 (名、（量）); 面 HSK2→HSK5 (后缀、（动、名、量）); 周 HSK2→HSK6 (名、（量）); 起 HSK3→HSK5 (动、（量）); 等 HSK4→HSK5 (助、（名、量）); 队 HSK4→HSK5 (名、（量）); 管 HSK4→HSK5 (动、（名、量）); 组 HSK4→HSK5 (名、（动、量）); 时 HSK2→HSK6 (名、（量）); 通 HSK4→HSK7-9 (动、形、（量）); 派 HSK5→HSK7-9 (动、（名、量）).
- **Grammar list earlier than the vocab 量 level** (grammar wins): 班 vocab HSK5 / grammar HSK3; 所 vocab HSK5 / grammar HSK3; 盘 vocab HSK6 / grammar HSK3; 周 vocab HSK6 / grammar HSK5.
- **Only in a grammar list** (no 量 row): 杯 bēi HSK1 (名量词 借用); 碗 wǎn HSK3 (名量词 借用); 打 dá HSK4 (名量词); 袋 dài HSK4 (名量词); 脸 liǎn HSK4 (名量词 借用); 手 shǒu HSK4 (名量词 借用); 盒 hé HSK4 (名量词 借用); 屋子 wūzi HSK4 (名量词 借用); 桌子 zhuōzi HSK4 (名量词 借用); 重 chóng HSK7-9 (名量词).
- **Several 量 rows merged** (same reading): 点 rows 33 量、（名） + 336 动、（名、量）.
- **Two classifier readings → two entries**: m:卷:juan3 juǎn HSK6 / m:卷:juan4 juàn HSK6.
- **Character with a non-classifier reading in the syllabus** (no entry for that reading): 只 zhī (auch zhǐ 副); 头 tóu (auch tou 后缀); 种 zhǒng (auch zhòng 动); 打 dá (auch dǎ 动, dǎ 介); 行 háng (auch xíng 动、形); 扇 shàn (auch shān 动); 担 dàn (auch dān 动); 重 chóng (auch zhòng 名、形); 处 chù (auch chǔ 动); 服 fù (auch fú 动); 扎 zā (auch zhā 动); 泡 pāo (auch pào 名、动).
- **Second classifier reading used by vocab nouns** (CC-CEDICT confirms; written as `pinyinAlt`, no own entry): 场 chǎng / cháng; 通 tōng / tòng.
- **Marginal classifier uses** (in the syllabus as 量, but rare or special — check the meaning drafts): 等 děng HSK5; 时 shí HSK6; 单 dān HSK5; 线 xiàn HSK6; 派 pài HSK7-9; 管 guǎn HSK5; 码 mǎ HSK7-9; 环 huán HSK6; 重 chóng HSK7-9; 胎 tāi HSK7-9; 面 miàn HSK5; 担 dàn HSK7-9.
- **Grammar list 量词重叠** (个个、张张, HSK3) and 数量重叠 are patterns, not entries → specialForms of 个/张 (campaign).
- **vocab levelUses bug** (side finding, not fixed here): scripts/hsk2025/relevel.cjs `splitPos` splits on 、 inside brackets, so rows like 对 形、介、（动、量）, 点² 动、（名、量）, 等², 管, 组, 面 lose the second part of the bracket in `levelUses` (the 量/名 use is missing).

## Reverse index (nouns per classifier)

- Top: 个 324, 条 63, 只 50, 次 45, 张 43, 把 38, 位 34, 座 32, 场 30, 份 28, 根 28, 家 27, 项 26, 块 25, 种 25, 件 24, 片 24, 部 23, 台 23, 颗 23, 道 22, 间 21, 本 19, 支 19, 笔 16.
- Capped at 30: 个 条 只 次 张 把 位 座.
- Order: level, then nouns that list the classifier first, then a frequency proxy (number of vocab words containing the noun — there is no word-frequency list in the sources), then syllabus order.
- Examples: 个: 人、家、字、边、月、朋友、星期、鸡蛋 | 本: 书、本子、笔记、笔记本、词典、护照、课本、字典 | 条: 狗、路、鱼、裤子、带、船、牛、街 | 张: 桌子、椅子、票、床、机票、画、纸、卡 | 把: 椅子、花、花、伞、勺子、牙刷、筷子、香蕉
- Without nouns, HSK1 (14): 分·Z 分钟·Z 号·Z 年·Z 日·Z 岁·Z 天·Z 下·V 些·U 一下·V 一点儿·U 一些·U 元·M 小时·Z
- Without nouns, HSK2 (2): 一会儿·U 帮
- Without nouns, HSK3 (10): 半天·U 遍·V 公斤·M 角·M 斤·M 刻·Z 毛·M 米·M 声·V 脚·V
- Without nouns, HSK4 (15): 倍·M 公里·M 克·M 两·M 秒·Z 排 千克·M 摄氏度·M 夜·Z 脸 手 屋子 桌子 步·V 刀·V
- Without nouns, HSK5 (16): 周·Z 等 队 单 度·M 吨·M 行 伙 级 集 类 厘米·M 团 眼·V 锅 代
- Without nouns, HSK6 (19): 时·Z 版 成·M 尺·M 寸·M 毫米·M 毫升·M 环·M 卷 卷 款 捧 平方·M 平方米·M 升·M 线 章 栏 针·V
- Without nouns, HSK7-9 (27): 派 磅·M 拨 丛 担·M 公顷·M 剂 驾 截 捆 立方·M 立方米·M 码·M 马力·M 抹 亩·M 幕 人次·M 胎 摊 丸 窝 旬·Z 重 拳·V 巴掌·V 碟
- Without nouns, Zusatz (5): 箱 勺 摞 湾 炷
  (·M Maßeinheit, ·Z Zeit, ·V Verbal, ·U Unbestimmt — these need no noun list; plain Zählwörter without nouns need noun links in the campaign or measureWords on vocab nouns.)
- vocab.measureWords classifiers without an entry (1): 曲 qǔ ×1 (音乐).
- Linked although the reading differs (2): 场 cháng → m:场 (chǎng) ×15 (病、雪、雨、感冒、梦); 通 tòng → m:通 (tōng) ×3 (报告、鼓、骂).

## Pinyin: old data vs syllabus / CC-CEDICT

- Old classifier pinyin ≠ syllabus 量 reading (0): –
- Old classifier pinyin not in CC-CEDICT (0): –
- Classifier syllable read differently inside its own examples (0): –

## Old content check

- Examples that do not contain the classifier (0):
- Example pinyin errors against CC-CEDICT (validator of the enrichment campaign; 0):
- Example pinyin warnings (0):
- Old tables differing from the generated table: 97 of 141 (97 rows; 97 tables — all from measure-words-extra*.js — label the numbers as strings „一“, „二/两“ and write 一 without sandhi, e.g. 一片 yī piàn → 一片 yí piàn; 一根 yī gēn → 一根 yì gēn; 一粒 yī lì → 一粒 yí lì). Affected: 片 根 粒 颗 滴 面 扇 堆 群 对 排 串 包 盒 箱 袋 罐 壶 间 家 所 栏 道 项 门 身 阵 股 番 笔 则 副 顶 列 班 桩 步 回 年 天 卷 册 尊 出 幕 行 字 拳 脚 刀 巴掌 眼 声 下 堵 株 丛 窝 碟 锅 勺 桶 打 宗 起 批 摞 束 捆 帮 伙 波 轮 期 版 剂 味 针 湾 缕 枚 盏 管 方 截 秒 分钟 小时 周 月 代 席 手 局 盆 炷 尾.
- Table differences other than the 一 row: –
- questionWord without the classifier (0): –
- ASCII umlauts (0): –
- Old entries without examples: –.

## Bookmarks

Today measure-word bookmarks live in `zhongwen-bookmarks-measurewords` as the bare classifier (`["个"]`; zhongwen-migrate.js moved the unprefixed `bookmarks-measurewords` once). Section, workspace and deep links (`#measurewords/个`) use `item.classifier` as id.

Done: ids are `m:…`; every entry that took over an old classifier carries `legacyIds: [old classifier]`, so the existing `migrateLegacyBookmarks('measurewords', items)` (app.js) rewrites saved bookmarks on load and `findById` keeps old deep links and restored sessions working. The removed classifiers (字 → w:字:zi4, 月 → w:月:yue4) go in `MEASURE_WORDS_DATA.removed` and move to `zhongwen-bookmarks-vocab`, like grammar-removed.js. The old 卷 (juàn) bookmark maps to m:卷:juan4.

## What --write changes

- `measure-words-data.js`: `window.MEASURE_WORDS_DATA = { basicNumbers (unchanged), measureWords (239 entries), removed }`.
- deletes `measure-words-extra.js`, `measure-words-extra2.js`; `lang-profile.js` dataScripts.measurewords → `['measure-words-data.js']`.

## Decisions (settled 2026-10-11)

- Old classifiers that are syllabus words in another part of speech take that word's level (levelSource 'word').
- 数量 split as proposed: 一下 Verbal; 一点儿 一些 一会儿 半天 Unbestimmt; the rest stays in Vokabeln.
- 字 and 月 are removed; their bookmarks move to the vocab entries (MEASURE_WORDS_DATA.removed).
- The classifiers only vocab nouns use are Zusatz entries (曲 stays out).
- 场 cháng and 通 tòng are pinyinAlt of one entry.
- Recategorisations and the key Masseinheiten „Maßeinheiten“ accepted.
- Borrowed classifiers 脸 屋子 桌子 手 are entries (Zählwort, borrowed, note: 借用名量词 of the HSK4 grammar list).
- Counting tables are generated by the app, not stored.
- relevel.cjs splitPos fixed; levelUses of the affected vocab entries corrected (scripts/hsk2025/fix-level-uses.cjs).

