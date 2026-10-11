# Author brief — Zhongwen Explorer grammar lessons, batch {{BATCH}}

You write German-language grammar lessons („Lektionen“) for learners of Mandarin (simplified characters, HSK 2025
syllabus). A lesson teaches a few related grammar points step by step: an introduction, 3–5 sections with an explanation,
example sentences and an optional tip. The app also shows the lesson's grammar points as links to their reference cards.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read two existing lessons of a nearby level in `{{ROOT}}/grammar-lessons.js` first (e.g. lesson-40 „只要...就 & 只有...才“
and lesson-6 „比 (bǐ) Vergleiche“): your lessons must look and read like them.

Input: `input/pNN.json` — 3 planned lessons, each with:
- `id`, `number`, `level` — copy them unchanged (the level is fixed by the main points; `number` orders the lesson
  within its level);
- `main` — the main grammar point(s): the lesson is about these; `grammarIds` — every point the lesson bundles;
- `titleDe`, `titleZh`, `goal` — the planned title and learning goal (you may improve the title wording, not the topic);
- `points` — the full data of each grammar point (pattern, meaning, formation, explanation, notes, examples, related).
  This is the reference the app links to: your lesson must agree with it, may reuse its insights, but should not copy its
  examples;
- `relatedLessons` — existing lessons touching the same or related points (id, title, level, shared ids): link them with
  `[[lesson:lesson-NN]]` where helpful, do not repeat their content, and never contradict them;
- `vocabularyLimit` — for HSK 1–3 lessons: example words up to that level (file `allowed-words-HSKn.txt` in the working
  dir); words of the lesson's own grammar points are always allowed.

Output: write `authored/pNN.json` with the Write tool — a JSON array with exactly one lesson per input lesson, same order.
Then run (from the repository) `node scripts/lessons/validate.cjs {{BATCH}} pNN` and fix until it prints `OK pNN`.
Read the WARN lines too and fix real problems.

## Lesson shape (exactly these fields; the engine renders nothing else)
```
{ "id": "lesson-46", "number": 8.5, "level": "HSK1",          // copy from the input
  "title": "German title, may contain the pattern (如果...就 — Bedingungen)",
  "subtitle": "short German subtitle",
  "grammarIds": ["g:…main…", "g:…"],                          // all input grammarIds, a main point first
  "intro": "German, 400–900 characters, HTML <strong>/<em> allowed",
  "sections": [ { "heading": "German + pattern",
                  "text": "German explanation, HTML allowed, 150–700 characters",
                  "examples": [ { "cn": "汉字……。", "pinyin": "Hànzì …", "de": "Deutsch (optional short note in brackets)" } ],
                  "tip": "optional: typical mistake (❌ … → ✅ …), mnemonic or register note" } ],
  "flags": "optional: problems you could not solve (topic does not fit, level doubtful …)" }
```

## Rules
- **Structure**: 3–5 sections; each bundled grammar point is taught in at least one section (its Chinese words appear in
  a heading, text or example — the validator checks this). Go from the main point to the variants and contrasts; end with
  a comparison or typical mistakes when useful. 3–5 examples per section.
- **Intro**: what the lesson is about, when you need it, the main contrast to German. Address the learner with „du“.
- **Content**: every claim must agree with the `points` data (meaning, explanation, notes). No absolute rules („immer“,
  „nie“, „Pflicht“) unless they really hold; name exceptions. Register (gesprochen/schriftlich) as in the points.
  Never write „Lektion 12“ — use `[[lesson:lesson-NN]]` (it renders as the current number). Avoid level numbers in the
  text; a look ahead may be marked „Ausblick (HSK 5): …“.
- **Examples**: natural modern Mandarin a native speaker would say, one sentence each, ending with 。！？ (short phrases
  like 一本书 may stand without). Show the pattern being taught. Vary subjects and situations. Numbers in characters.
  A wrong sentence may be shown as a negative example: `"cn": "❌ 一边我吃饭一边他看书。", "pinyin": ""` with the reason
  in `de`; follow it with the correct version (`"✅ …"` with pinyin).
- **Pinyin**: tone marks, words written together (xuéshēng, Zhōngguó), spaces between words, punctuation as in the
  sentence, capital first letter, apostrophe before a vowel-initial syllable (Xī'ān), 一/不 as spoken (yí ge, bú qù,
  yìqǐ, bù hǎo), neutral tones as spoken (xièxie, péngyou, le, de, ma). The validator checks against CC-CEDICT.
- **Vocabulary**: HSK 1–2 lessons: words above the limit are errors; HSK 3 lessons: warnings — avoid them anyway.
  Higher levels: natural words of the level.
- **German**: real umlauts (ä ö ü ß); „die Partikel“ (feminine). Natural translations, not word-for-word. Gender: a
  person whose gender the Chinese does not show gets a neutral or paired form — „Lehrkraft“, „Studierende“,
  „Schülerinnen und Schüler“, „Chinese/Chinesin“, „aus China“, „die sprechende Person“, „Lernende“; keep the gender only
  when the Chinese shows it (他/她, 妈妈, 哥哥 …). Avoid generic masculine in the prose as well.
- Be accurate: this is teaching content.

Final reply: only "pNN OK", any `flags`, and doubts worth a human look. Keep it short.
