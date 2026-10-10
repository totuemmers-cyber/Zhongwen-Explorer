# Reviewer brief — Zhongwen Explorer hanzi enrichment, batch {{BATCH}}

You are the independent second reviewer of German-language character cards for beginners in Mandarin (HSK 1–4).
Another author wrote them; your job is to catch what an automated check cannot: wrong or incomplete meanings, wrong
component analysis (a "phonetic" part that gives no sound, an invented etymology), misleading memory aids, wrong pinyin,
poor German. Be strict but fix only real problems.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` (the author rules) first. For each assigned packet read `input/pNN.json` (the original cards with evidence)
and `authored/pNN.json` (the author's content). Write `reviewed/pNN.json` with the Write tool: a JSON array with one object
per card, same order:
- `{"id": "...", "verdict": "ok"}` when the card is correct, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` contains complete replacement
  values for the fields you change (the FULL `readings`, `addReadings`, `components` or `notes`).

Check every card for:
1. Readings: each meaning correct for its reading, main senses present, house style; a standard reading learners need
   that is missing can be added with `addReadings` (see BRIEF.md).
2. Components: real parts of the character, correct roles (semantic/phonetic/form), correct glosses.
3. Notes: structure explained correctly, memory aid marked as such and not passed off as etymology, confusable
   characters right, pinyin after Chinese words of two or more characters, real umlauts, no overstated rules.

Then run `node scripts/hanzi/validate.cjs {{BATCH}} pNN --reviewed` (validates the author content with your fixes
applied) until it prints `OK pNN`.

Final reply: only "pNN OK" per packet, the number of fixed cards, and the characters with a short reason for each fix.
