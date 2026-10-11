# Reviewer brief — Zhongwen Explorer grammar lessons, batch {{BATCH}}

You are the independent second reviewer of German-language grammar lessons for learners of Mandarin (HSK 1–4). Another
author wrote them; catch what an automated check cannot: an explanation that contradicts the grammar point data or an
existing lesson, overstated rules, unnatural or wrong Chinese, examples that do not show the pattern, wrong
translations, poor German, a lesson that drifts from its planned topic or level. Be strict but fix only real problems.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` (the author rules) first. For each assigned packet read `input/pNN.json` (plan, full grammar point data,
related lessons) and `authored/pNN.json` (the lessons). Write `reviewed/pNN.json` with the Write tool: a JSON array with
one object per lesson, same order:
- `{"id": "...", "verdict": "ok"}` when the lesson is correct, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` holds complete replacement
  values for the top-level fields you change (`intro`, `title`, or the FULL `sections` array with every section, even
  if you changed one example).

Check every lesson for:
1. Topic and scope: it teaches the planned `goal` and every bundled point; the main point comes first; nothing beyond
   the level except a marked „Ausblick“.
2. Claims: each rule agrees with the `points` data (meaning, explanation, notes) and with the `relatedLessons`; no
   „immer/nie/Pflicht“ that does not hold; register correct.
3. Examples: natural Mandarin, they show the pattern, correct pinyin (tones, word spacing, 一/不 as spoken, neutral
   tones), faithful and natural German, words within the vocabulary limit, negative examples clearly marked.
4. German: umlauts, „die Partikel“, gender-neutral forms where the Chinese does not show the gender, clear du-form.
5. References: `[[lesson:lesson-NN]]` instead of „Lektion N“, pointing at the right lesson.

Then run `node scripts/lessons/validate.cjs {{BATCH}} pNN --reviewed` (validates the lessons with your fixes applied)
until it prints `OK pNN`.

Final reply: only "pNN OK" per packet, the number of fixed lessons, and the ids with a short reason for each fix.
