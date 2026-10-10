# Author brief — Zhongwen Explorer reading & listening units, batch {{BATCH}}

You write German-language comprehension units for learners of Mandarin (simplified characters, HSK 2025 syllabus):
a short Chinese text (reading) or a dialogue/announcement (listening, later spoken by synthetic voices), with three
German multiple-choice questions, a German translation, a glossary and a learning tip.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Input: `input/pNN.json` — 4 planned units, each with `id`, `level`, `skill`, `order`, the syllabus `task` (no, title) and
its `descriptor` (what learners of this level can read/understand — your text must be exactly such a material), candidate
`topics` (pick one or write a fitting `tier1›tier2›tier3` from scripts/hsk2025/topics.json for the level), `hanCharacters`
(min/max Han characters of all passages together) and, for HSK 1–3, `vocabularyLimit` with the file of allowed words.

Output: write `authored/pNN.json` with the Write tool — a JSON array with one unit per input unit, same order.
Then run (from the repository) `node scripts/comprehension/validate.cjs {{BATCH}} pNN` and fix until it prints `OK pNN`.
Read WARN lines too. Look up glossary words with `node scripts/comprehension/lookup.cjs 词1 词2 …`.

## Unit fields
```
{ "id", "level", "skill", "order",            // copy from the input
  "task": { "no", "title" },                  // copy from the input
  "topic": "tier1›tier2›tier3",
  "title": "German title", "objective": "Lernziel (German, one sentence)",
  "textType": "German, e.g. Kurznachricht, Speisekarte, Stundenplan, Telefongespräch, Durchsage",
  "minutes": 3–15, "introduction": "German: situation + what to pay attention to (1–2 sentences)",
  "passages": [ { "id": "p1", "speaker": "" | "A" | "B", "label"?: "German", "text": "汉字……", "pinyin": "……" } ],
  "translation": "German translation of all passages (natural German, one block)",
  "glossary": [ { "word": "汉字", "pinyin": "hànzì", "meaning": "German", "vocabId"?: "w:汉字:han4zi4" } ],
  "note": "Lernhinweis (German, 1–3 sentences: a useful pattern, word or cultural point from the text)",
  "questions": [ { "id": "q1", "kind": "global|detail|inference|purpose|attitude", "prompt": "German question",
                   "evidence": "p1", "choices": [ { "text": "German", "explanation": "why right/wrong (German)" } ],
                   "answer": 0 } ],
  "flags"?: "problems you could not solve (plan/task does not fit, …)" }
```
## Rules
- **Text**: authentic material of the descriptor's kind (名片, 课表, 菜单, 短信, 通知, 邮件, 广告, 对话 …), natural modern
  Mandarin, simplified characters, numbers in Chinese characters where natural (三点, 二十岁) — Arabic digits only in
  materials that really use them (prices on a menu, phone numbers; their pinyin then stands as the digits).
  Length within `hanCharacters`. Reading: one or more passages (p1, p2 … e.g. per paragraph or per item of a notice),
  speaker "". Listening: one passage per speaker turn, speakers "A"/"B" alternating (or "" for an announcement), short
  turns, as people really talk; it will be read aloud — no tables, no visual layout.
- **Pinyin** of each passage: tone marks, words written together (xuéshēng, Zhōngguórén), spaces between words,
  punctuation as in the text, apostrophe before vowel-initial syllables (Xī'ān), 一/不 as spoken (yí ge, bú qù),
  neutral tones as spoken (xièxie, péngyou). The validator checks it against CC-CEDICT.
- **Level**: HSK 1–3 texts use only words up to the given limit; a word above it must be in the glossary
  (validator). Higher levels: natural texts of the level, glossary for rare words.
- **Questions**: exactly 3, in German, answerable only from the text: one `global` (what is it about / purpose), one
  `detail`, one `inference` / `purpose` / `attitude`. Reading: 4 choices; listening: 3 or 4. One clearly correct choice,
  the others plausible but contradicted by the text (no trick questions, no "all of the above"). `answer` = index of the
  correct choice; vary its position across the packet. Every choice gets an `explanation` that cites the text (may quote
  Chinese). `evidence` = the passage that answers the question.
- **Glossary**: 4–10 key words of the text (not the most basic ones), with `vocabId` when the word is in the vocabulary.
- German with real umlauts (ä ö ü ß). Be accurate: this is teaching content.

Final reply: only "pNN OK", any `flags`, and doubts worth a human look. Keep it short.
