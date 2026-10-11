# Proofreading brief — Zhongwen Explorer grammar lessons, batch {{BATCH}}

You proofread German-language grammar lessons for learners of Mandarin at HSK 5–6 before they go into the app (policy
author + proofreading). Read each lesson once, carefully, as a teacher would: fix wrong or unnatural Chinese, pinyin
slips, mistranslations, claims that contradict the grammar point data, and German errors. Do not rewrite good content
or change the structure for taste.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` (the author rules) first. For each assigned packet read `input/pNN.json` (plan and full grammar point
data) and `authored/pNN.json`. Write `reviewed/pNN.json` with the Write tool: a JSON array with one object per lesson,
same order:
- `{"id": "...", "verdict": "ok"}`, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` holds complete replacement
  values for the top-level fields you change (`intro`, `title`, or the FULL `sections` array).

Check: the Chinese is natural and shows the taught pattern; pinyin (tones, word spacing, 一/不 as spoken); the German
translation is faithful; every rule agrees with the `points` data and names its register; German spelling, umlauts,
„die Partikel“, gender-neutral forms where the Chinese does not show the gender; `[[lesson:lesson-NN]]` references.

Then run `node scripts/lessons/validate.cjs {{BATCH}} pNN --reviewed` until it prints `OK pNN`.

Final reply: only "pNN OK" per packet, the number of fixed lessons, and the ids with a short reason for each fix.
