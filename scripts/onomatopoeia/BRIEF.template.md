# Author brief — Zhongwen Explorer Lautmalerei, batch {{BATCH}}

You write the German texts of the „Lautmalerei“ section for learners of Mandarin (simplified characters, HSK 2025
syllabus): sound words (拟声词: 汪汪, 哗哗, 砰), interjections (叹词: 哎呀, 喂) and descriptive doubled forms (ABB 热腾腾,
AABB 干干净净, A里AB 糊里糊涂, ABAB 雪白雪白) — the counterpart of Japanese giongo/gitaigo. Each entry shows the word with
pinyin, a short meaning, a usage line, an explanation, examples, related entries and notes. All current texts are
unreviewed drafts (many new entries have only a short gloss): rewrite them.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Input: `input/pNN.json` — up to 20 entries, each with:
- `id`, `word`, `pinyin`, `traditional`, `variants`, `level` (+ `levelSource`), `category`, `pattern` — fixed;
- `kind`: `Laut` (imitates a sound), `Ausruf` (interjection), `Beschreibung` (descriptive form: appearance, feeling,
  texture, movement); `frame` = typical sentence frames for this kind and pattern;
- `base` — for descriptive forms the base word in the vocabulary (干净 for 干干净净, 热 for 热腾腾); `vocabEntry` — the
  word's own vocabulary entry; `grammarPoint` — the grammar point of the pattern (g:AA、AABB);
- `evidence` — CC-CEDICT and HanDeDict senses (may be empty: productive forms are often not in dictionaries), syllabus;
- `draft` — the old content (meaning, usage, explanation, examples, related, notes): unreviewed, sometimes wrong or
  invented; `candidate: true` = a new entry with a short gloss only. Keep what is right, rewrite the rest;
- `relatedCandidates` — other entries of the section you may link (id — meaning (kind, category, pattern, level));
- `vocabularyLimit` — for HSK 1–3 entries: examples may only use words up to this level (file `allowed-words-HSKn.txt`).

Output: write `authored/pNN.json` with the Write tool — a JSON array with exactly one object per input entry, same order.
Then run (from the repository) `node scripts/onomatopoeia/validate.cjs {{BATCH}} pNN` and fix until it prints `OK pNN`.
Read the WARN lines too and fix real problems. Validate one packet at a time.

## Fields
- `id` — unchanged.
- `meaning` — REQUIRED: short German gloss (≤ 80 characters, no Chinese): „Wauwau; Bellen“, „Rauschen (von Wasser)“,
  „dampfend heiß“, „blitzsauber; ordentlich“, „ach!; oje! (Überraschung, Ärger)“. Distinct from related entries.
- `usage` — REQUIRED: 1–2 German sentences: for sound words what makes the sound and in which situations; for
  interjections the feeling or speech act; for descriptive forms what is described.
- `explanation` — REQUIRED, German, 80–900 characters (typically 200–450):
  - descriptive forms: the base word (with pinyin) and what the pattern adds — AABB/ABB make the description vivid and
    intensive („durch und durch sauber“); they usually take no degree adverb (很干干净净 is unusual) and appear with
    的/地/得; mention the register (spoken, written, children's language) where it matters;
  - sound words: what makes the sound and the typical verbs and frames: 叫 (animals), 响 (things), 一声 („mit einem …“),
    X地 + Verb (哗哗地流), 发出X的声音; whether it is doubled or tripled in use (哈哈哈);
  - interjections: the feeling, position (sentence start, alone), the tone as spoken (喂 wéi on the phone).
  Chinese words of two or more characters get pinyin in parentheses at their first mention: 干净 (gānjìng); the entry's
  own word may stand without. German glosses in „…“.
- `examples` — REQUIRED: 2–3 `{chinese, pinyin, german}`, natural mainland Mandarin in clearly different situations,
  each with the word as a whole (AABB/ABAB never split; validator checks), using the typical frames:
  sound words X一声 / X地 + Verb / 发出X的声音 / with 叫, 响; descriptive forms as predicate or complement with 的
  (房间干干净净的, 洗得干干净净的), adverbial X地 + Verb, attribute X的 + Nomen; interjections at the start, separated by a
  comma.
  - HSK 1–3 entries: only words up to the vocabulary limit (validator checks; names like 小明, 王老师 are fine);
  - pinyin: tone marks, words written together, spaces between words, one syllable per character, the word in the
    reading of the entry (neutral tones as spoken are fine: gānganjìngjìng); 一/不 as spoken (yì shēng, bú shì);
  - German: natural, not word-for-word — render sounds the German way („wau, wau“, „platsch“, „peng“) or describe
    them; gender-neutral unless the Chinese shows the gender (他/她, 妈妈 …);
  - draft examples may be kept verbatim only if they are natural and pass every check.
- `related` — OPTIONAL: up to 6 ids of entries of THIS section that are real neighbours (same sound family, synonym,
  contrast, the AABB of the same base), from `relatedCandidates` (only existing ids; validator checks). `[]` if none.
- `notes` — OPTIONAL (may be ""): register (spoken/written, children's language, internet), regional use, variants and
  spellings (唧唧喳喳 = 叽叽喳喳), a pitfall.
- `flags` — OPTIONAL string for problems you cannot fix with these fields (the word is not really used, it should move
  to the vocabulary, the category/pattern/level looks wrong, the pinyin of the entry looks wrong, a duplicate).

## Style rules (from earlier reviews)
- Accurate teaching content. Avoid absolute claims („nie“, „immer“, „nur“, „falsch“) unless they really hold — prefer
  „meist“, „üblich“, „umgangssprachlich auch …“. Do not invent uses; if a form is rare, say so.
- Name accepted forms: variants and other spellings, the doubled/tripled use (哈哈 / 哈哈哈), both readings where both
  are heard.
- Gender-neutral German (Lernende, die sprechende Person); the validator rejects generic masculine role nouns
  (Lehrer, Schüler, Sprecher, Lerner, Muttersprachler …) in meaning/usage/explanation/notes.
- Real umlauts (ä ö ü ß), never ae/oe/ue.

Do not touch files outside `authored/`. One object, for orientation:
{"id":"o:干干净净","meaning":"blitzsauber; ganz ordentlich","usage":"Beschreibt, dass etwas durch und durch sauber und ordentlich ist – ein Zimmer, Kleidung, Hände; übertragen auch „restlos“.","explanation":"干干净净 ist die AABB-Verdopplung von 干净 (gānjìng) „sauber“. Die Verdopplung verstärkt und macht die Beschreibung anschaulich: „blitzblank, ganz und gar sauber“. Wie andere AABB-Formen steht sie meist ohne 很 und mit 的 als Prädikat (房间干干净净的), als Komplement nach 得 (洗得干干净净的) oder adverbial mit 地. Übertragen: 忘得干干净净 „restlos vergessen“.","examples":[{"chinese":"我的房间干干净净的。","pinyin":"Wǒ de fángjiān gāngānjìngjìng de.","german":"Mein Zimmer ist blitzsauber."},{"chinese":"衣服洗得干干净净的。","pinyin":"Yīfu xǐ de gāngānjìngjìng de.","german":"Die Kleidung ist ganz sauber gewaschen."},{"chinese":"吃饭以前，要把手洗得干干净净。","pinyin":"Chī fàn yǐqián, yào bǎ shǒu xǐ de gāngānjìngjìng.","german":"Vor dem Essen muss man sich gründlich die Hände waschen."}],"related":["o:整整齐齐"],"notes":"Gesprochen klingt die zweite Silbe oft neutral (gānganjìngjìng)."}

Final reply: only "pNN OK, pMM OK", the ids where the meaning changed substantially (old → new), and any `flags`.
Keep it short.
