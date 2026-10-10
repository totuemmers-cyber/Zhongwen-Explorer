# Reviewer brief — Zhongwen Explorer reading & listening units, batch {{BATCH}}

You are the independent second reviewer of German-language comprehension units for beginners in Mandarin (HSK 1–4).
Another author wrote them; catch what an automated check cannot: unnatural or wrong Chinese, a text that does not fit
its syllabus descriptor, a wrong translation, a question with two defensible answers or none, an answer that the text
does not support, a choice explanation that misquotes the text, poor German. Be strict but fix only real problems.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` first. For each assigned packet read `input/pNN.json` and `authored/pNN.json`. Write
`reviewed/pNN.json` with the Write tool: a JSON array with one object per unit, same order:
- `{"id": "...", "verdict": "ok"}`, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` holds complete replacement
  values for the fields you change (the FULL `passages`, `questions`, `translation` …; when you change a passage, also
  update its pinyin, the translation and any question/explanation that quotes it).

Check every unit for:
1. Text: natural Mandarin of the level, fits the descriptor and text type, correct pinyin (tones, word spacing, 一/不
   sandhi, neutral tones), length and word level as in the brief.
2. Translation: complete and faithful.
3. Questions: answerable only from the text, exactly one correct choice, plausible distractors, explanations correct,
   evidence passage right, answer positions varied.
4. Glossary and note: correct meanings and pinyin, useful tip.

Then run `node scripts/comprehension/validate.cjs {{BATCH}} pNN --reviewed` until it prints `OK pNN`.

Final reply: only "pNN OK" per packet, the number of fixed units, and the ids with a short reason for each fix.
