# Author brief — Zhongwen Explorer grammar enrichment, batch {{BATCH}}

You write German-language grammar points for learners of Mandarin (simplified characters, HSK 2025 syllabus). The
points follow the official grammar syllabus (语法大纲); each card shows the pattern, a meaning, how it is built, an
explanation, examples and a quiz question.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Input: `input/pNN.json` — 20 points, each with:
- `id`, `pattern` (as displayed; Chinese, from the syllabus), `kind`, `level`, `category` (German, fixed);
- `syllabus` — its row in the official list: 类别 › 类别名称 › 细目 — 语法内容. This defines the SCOPE of the point: a
  staged point („把”字句1 (1) 主语+把+宾语+动词+在/到+处所) covers exactly that structure, later stages are other points;
- `kind`: `pattern` (a structure or frame), `word` (one function word; a sense number like 都¹ / 呢² means one of
  several uses the syllabus introduces separately — `senseRows` lists every row with that word: cover only THIS use and
  mention the others briefly in `notes`), `overview` (a word class of one level, `words` lists its words), `zusatz`
  (an extra point outside the syllabus);
- `mustUse` — the Chinese core words every example must contain, in order (alternatives separated: [["否则","不然"]]);
- `draft` — old content (meaning, formation, explanation, notes, examples). Often useful, but unreviewed: it may be
  wrong, too narrow/broad for the syllabus scope, or written with ae/oe/ue. Keep what is good, rewrite the rest;
- `relatedCandidates` — other points (id — level — meaning) you may link.

Output: write `authored/pNN.json` with the Write tool — a JSON array with exactly one object per input point, same order.
Then run (from the repository) `node scripts/grammar/validate.cjs {{BATCH}} pNN` and fix until it prints `OK pNN`.
Read the WARN lines too and fix real problems.

## Fields
- `id` — unchanged.
- `meaning` — REQUIRED: short German gloss of what the pattern expresses, shown on the card and used as a quiz choice:
  „es sei denn …, sonst …“, „schon (Ungeduld, Übertreibung)“, „Gradadverbien: sehr, zu, wirklich …“. No Chinese characters.
  Make it distinct from neighbouring points of the same level.
- `formation` — REQUIRED for `pattern` and `word` points (optional for overviews, 复句 descriptions and text-level points):
  the structure with German placeholders: „除非 + Bedingung，否则/不然 + Folge“, „Subjekt + 把 + Objekt + Verb + 在/到 + Ort“,
  „Verb + 得 + Adjektiv (Bewertung der Handlung)“.
- `explanation` — REQUIRED, German, 120–900 characters (overviews may be longer): what the pattern means and when it is used,
  register (gesprochen/geschrieben), restrictions and typical mistakes. For an overview: one short line per listed word
  (word (pinyin) – Bedeutung/Gebrauch). Chinese words of two or more characters get pinyin in parentheses at their first
  mention: 否则 (fǒuzé). German glosses in „…“. Real umlauts (ä ö ü ß). Avoid absolute claims unless they really hold.
- `notes` — OPTIONAL: contrasts with similar patterns (除非 vs. 只有), other senses of the word, pitfalls.
- `examples` — REQUIRED: 3 (pattern/word points; 4 at most) or 3–6 (overviews, covering at least 3 of the listed words)
  natural sentences `{chinese, pinyin, german}`:
  - each shows the pattern (`mustUse`, validator checks); vary subjects and situations; one sentence each;
  - HSK 1–3 points: only words up to one level above the point (validator checks against the HSK 2025 word list);
  - pinyin: tone marks, words written together (wǒmen, xǐhuan), one syllable per character, apostrophe before a
    vowel-initial syllable (Xī'ān); 一/不 as spoken (yí ge, bú qù); numbers in characters in the Chinese text;
  - German: a natural translation, not word-for-word.
- `quiz` — REQUIRED for `pattern`/`word` points whose core words can be blanked (else `noQuiz`): a cloze over one example,
  `{"example": 0, "answer": "否则", "accepted": ["不然"], "distractors": [{"text": "只有", "reason": "…"}, {…}, {…}]}`:
  - `example`: index of the example; `answer`: the span that is blanked — the pattern's key word(s) as written in that
    sentence, occurring exactly once in it; `accepted` (optional): other fills that are also correct there;
  - `distractors`: exactly 3 plausible WRONG fills (similar function words or patterns a learner of this level confuses),
    each with a German `reason` why it does not fit THIS sentence („只有 verlangt 才 im Folgesatz, nicht 否则“).
- `noQuiz` — instead of `quiz` when no word can be blanked sensibly (陈述句, 名词谓语句, 承前省略): a short German reason.
  Overviews get neither (their words are quizzed as vocabulary).
- `related` — OPTIONAL: up to 6 ids of other points that are real contrasts or the next/previous stage (比较句1 → 比较句2),
  usually from `relatedCandidates`.
- `flags` — OPTIONAL string for problems you cannot fix with these fields (the syllabus row looks misparsed, the point
  duplicates another, the level seems wrong).

Do not touch files outside `authored/`. One object, for orientation:
{"id":"g:除非……，否则/不然……","meaning":"es sei denn …, sonst …","formation":"除非 + Bedingung，否则/不然 + Folge","explanation":"除非 (chúfēi) nennt die einzige Bedingung, unter der etwas anderes eintritt; 否则 (fǒuzé) oder 不然 (bùrán) leiten ein, was sonst geschieht: „除非 A，否则 B“ = „nur wenn A, sonst B“. Die Bedingung ist meist positiv formuliert, die Folge oft negativ. 否则 klingt etwas formeller als 不然.","notes":"Mit 才 im zweiten Teil (除非……，才……) betont der Satz die Bedingung: „nur wenn …, dann erst …“ (eigener Punkt, HSK 6).","examples":[{"chinese":"除非你亲自来，否则他不会同意。","pinyin":"Chúfēi nǐ qīnzì lái, fǒuzé tā bú huì tóngyì.","german":"Wenn du nicht persönlich kommst, wird er nicht zustimmen."},{"chinese":"除非下大雨，不然比赛照常进行。","pinyin":"Chúfēi xià dà yǔ, bùrán bǐsài zhàocháng jìnxíng.","german":"Außer bei starkem Regen findet das Spiel wie geplant statt."},{"chinese":"除非老板同意，否则我们不能提前下班。","pinyin":"Chúfēi lǎobǎn tóngyì, fǒuzé wǒmen bù néng tíqián xiàbān.","german":"Ohne die Zustimmung des Chefs dürfen wir nicht früher gehen."}],"quiz":{"example":0,"answer":"否则","accepted":["不然"],"distractors":[{"text":"所以","reason":"所以 leitet eine Folge aus einem Grund ein, keine Alternative zu einer Bedingung."},{"text":"才","reason":"才 gehört zu 除非……才……, steht aber vor dem Verb, nicht am Satzanfang."},{"text":"而且","reason":"而且 reiht steigernd an („außerdem“), passt nicht zu „sonst“."}]},"related":["g:除非……，才……"]}

Final reply: only "pNN OK, pMM OK", points whose scope or level looks wrong, and any `flags`. Keep it short.
