# Author brief — Zhongwen Explorer Zählwörter (量词), batch {{BATCH}}

You write the German texts of the „Zählwörter“ section for learners of Mandarin (simplified characters, HSK 2025
syllabus). Each entry shows the classifier with pinyin, a short meaning, what it counts, a generated counting table
(一本 … 十本), the question word, special forms, examples, the nouns that take it (links to the vocabulary) and notes.
All current texts are unreviewed drafts: rewrite them.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Input: `input/pNN.json` — up to 20 entries, each with:
- `id`, `classifier`, `pinyin` (+ `pinyinSpoken`, `pinyinAlt`), `traditional`, `level`, `category` — fixed, do not change;
- `kind`: `Zählwort` (counts nouns), `Maßeinheit` (unit: 公斤, 米, 元), `Zeit` (点, 天, 小时), `Verbal` (counts actions:
  次, 遍, 下), `Unbestimmt` (indefinite amount: 些, 一点儿, 一会儿); `kindAlso` = a second use; `form: "数量"` = the word
  already contains its number (一下, 一些, 一点儿) — then there is no counting table and no question word;
  `frame` = how the examples must use it; `borrowed` = a noun used as classifier (借用名量词: 一杯水, 一桌菜);
- `nouns` — the vocabulary nouns that list this classifier (level-sorted: „word pinyin (level) – meaning“), `nounCount`;
  for HSK 1–3 `nounsForExamples` = the listed nouns within the vocabulary limit;
- `nearClassifiers` — classifiers that share nouns with this one (contrast candidates);
- `vocabEntry`, `syllabus` (where the syllabus lists it), `evidence` (CC-CEDICT, HanDeDict senses);
- `draft` — the old content (meaning, usage, questionWord, specialForms, examples, notes): unreviewed, often too short,
  sometimes wrong (一 without sandhi: „yī xià“, absolute claims). Keep what is right, rewrite the rest;
- `vocabularyLimit` — for HSK 1–3 entries: examples may only use words up to this level (file `allowed-words-HSKn.txt`).

Output: write `authored/pNN.json` with the Write tool — a JSON array with exactly one object per input entry, same order.
Then run (from the repository) `node scripts/measure-words/validate.cjs {{BATCH}} pNN` and fix until it prints `OK pNN`.
Read the WARN lines too and fix real problems. Validate one packet at a time.

## Fields
- `id` — unchanged.
- `meaning` — REQUIRED: short German gloss (≤ 80 characters, no Chinese) of what the classifier counts or means; shown
  on the card and searched: „für Bücher und Hefte“, „allgemeines Zählwort“, „Kilogramm“, „Mal (Wiederholung von Anfang
  bis Ende)“, „Uhr (Uhrzeit); Punkt“. Distinct from near classifiers.
- `usage` — REQUIRED: 1–2 German sentences: what it counts (the groups of nouns or actions), for Verbal what kind of
  action, for units what they measure.
- `questionWord` — REQUIRED unless `form` is "数量" (then omit): how one asks for the number: „几本“, „多少公斤“,
  „几点“, „哪些“ — Chinese only, containing the classifier. 几 for small expected numbers, 多少 for larger or units.
- `notes` — REQUIRED, German, 80–900 characters (typically 250–500), „Hinweise“:
  1. a memory aid that makes it stick — clearly labelled („Merkhilfe: …“), never as false etymology;
  2. contrast with near classifiers learners confuse (条 vs 根 vs 支, 张 vs 片, 次 vs 遍 vs 趟, 只 vs 头 vs 匹) — use
     `nearClassifiers`; say where both are correct instead of calling one wrong;
  3. whether 个 is a colloquial fallback for these nouns — only where it is true (个 does not replace units like 公斤,
     verbal classifiers like 次, pairs like 双 or time words like 天);
  4. framing pitfalls of the kind: Maßeinheit/Zeit take no 个 (三公斤, 三天 — but 两个小时, 三个月); Verbal: position
     with objects (去过两次北京 / 见过他两次); 二/两 before the classifier (两本, but 二两); for 一点儿: Adjektiv + 一点儿
     (vergleichend) vs 有一点儿 + Adjektiv (leicht negativ); borrowed classifiers (一杯茶, 一桌子菜).
  Chinese words of two or more characters get pinyin in parentheses at their first mention: 筷子 (kuàizi); single
  characters may stand alone. German glosses in „…“.
- `specialForms` — OPTIONAL, only if real: up to 4 `{form, explanation}`: fixed or frequent forms with this classifier
  (一下 after verbs „mal kurz“, 个个 „jeder einzelne“, 一口气 „in einem Zug“, 一把 + Verb „schnell zugreifen“, 两口子
  „Ehepaar“). Omit the field (or `[]`) when there is none — no padding.
- `examples` — REQUIRED: 2–3 `{chinese, pinyin, german}`, natural mainland Mandarin, clearly different situations:
  - each example shows the classifier in its counting frame (validator checks): after a number, demonstrative or 几/多少
    (三本书, 这本词典, 几本, 每天), doubled (个个), or for Verbal as complement after the verb (去过两次, 说了一遍, 敲了三下);
    for 数量 words the word itself (等一下, 喝一点儿水). Colloquial dropping of 一 after a verb (我有个问题, 买本书) is
    natural but does not count as the frame — mention it in the notes where it is typical, and frame the examples fully;
  - at least one example with a typical noun from `nouns` (HSK 1–3: from `nounsForExamples`) — validator checks;
  - prefer full sentences ending in 。！？; at most one short phrase (三双筷子) is fine;
  - HSK 1–3 entries: only words up to the vocabulary limit (validator checks; names like 小明, 王老师 are fine);
  - pinyin: tone marks, words written together (wǒmen, xǐhuan), spaces between words, one syllable per character,
    numbers in characters (三公斤, not 3公斤), apostrophe before vowel-initial syllables (Xī'ān); 一 and 不 as spoken:
    yí ge, yì bǎ, yíxià, bú shì, bù hǎo (the validator warns otherwise); neutral tones as spoken (yí ge, māma). The
    classifier in the reading of the entry (场 chǎng / cháng as given) — validator checks;
  - German: natural, not word-for-word; gender-neutral unless the Chinese shows the gender (他/她, 妈妈 …): 老师 →
    „die Lehrkraft“ or a name, 朋友 → „mit Freunden“ / „eine befreundete Person“ only when needed;
  - draft examples may be kept verbatim only if they are natural and pass every check (one example copied from the
    draft with „yī“ before a 4th tone fails).
- `flags` — OPTIONAL string for problems you cannot fix with these fields (the level, kind or category looks wrong, the
  noun list contains nouns that do not take this classifier, a duplicate entry, a missing reading).

## Style rules (from earlier reviews)
- Accurate teaching content. Avoid absolute claims („nie“, „immer“, „nur“, „falsch“) unless they really hold; colloquial
  usage often allows more than textbooks (一把椅子 is standard, 一个椅子 is heard in speech) — prefer „meist“, „üblich“,
  „gehoben“, „umgangssprachlich auch …“.
- Name accepted alternatives: where two classifiers (or 个) are both fine for a noun, say so (一条绳子 / 一根绳子).
- Gender-neutral German (Lernende, Lehrkraft, die sprechende Person, Kundschaft); the validator rejects generic
  masculine role nouns (Lehrer, Schüler, Sprecher, Lerner, Muttersprachler …) in meaning/usage/notes.
- Real umlauts (ä ö ü ß), never ae/oe/ue.

Do not touch files outside `authored/`. One object, for orientation:
{"id":"m:条","meaning":"für Langes, Schmales und Biegsames","usage":"Zählt lange, schmale oder biegsame Dinge wie Straßen, Flüsse, Hosen, Fische und Hunde; übertragen auch Nachrichten, Regeln und Vorschläge.","questionWord":"几条","notes":"Merkhilfe: 条 ist das „Band“ – alles, was sich wie ein Streifen ausdehnt oder biegt. 根 (gēn) zählt dagegen dünne, eher steife Stäbe (一根筷子, 一根香蕉), 支 (zhī) Stifte und Stangenförmiges (一支笔). Bei Seilen sind 一条绳子 und 一根绳子 beide üblich. Übertragen zählt 条 Texteinheiten: 一条短信 (duǎnxìn) „eine SMS“, 一条新闻 (xīnwén) „eine Nachricht“. Umgangssprachlich hört man bei manchen Nomen auch 个, bei 鱼, 路 und 裤子 (kùzi) ist 条 aber das Übliche.","examples":[{"chinese":"这条路很长。","pinyin":"Zhè tiáo lù hěn cháng.","german":"Diese Straße ist sehr lang."},{"chinese":"我买了两条裤子。","pinyin":"Wǒ mǎi le liǎng tiáo kùzi.","german":"Ich habe zwei Hosen gekauft."},{"chinese":"河里有很多条鱼。","pinyin":"Hé li yǒu hěn duō tiáo yú.","german":"Im Fluss gibt es viele Fische."}]}

Final reply: only "pNN OK, pMM OK", the ids where the meaning changed substantially (old → new), and any `flags`.
Keep it short.
