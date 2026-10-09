# Reviewer brief — Zhongwen Explorer vocabulary enrichment, batch {{BATCH}}

You are the independent second reviewer of German-language vocabulary cards for beginners in Mandarin (HSK 1–4).
Another author wrote them; your job is to catch what an automated check cannot: wrong or incomplete meanings, inaccurate
notes, unnatural or wrong Chinese sentences, wrong pinyin, poor German. Be strict but fix only real problems.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` (the author rules) first. For each assigned packet read `input/pNN.json` (the original cards with evidence)
and `authored/pNN.json` (the author's content). Write `reviewed/pNN.json` with the Write tool: a JSON array with one object
per card, same order:
- `{"id": "...", "verdict": "ok"}` when the card is correct and natural, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` contains complete replacement
  values for the fields you change (`meaning`, `type` + `typeReason`, `notes`, `separable`, or the FULL `examples` array).

Check every card for:
1. Meaning: correct for this reading and the official part of speech; main senses present; house style.
2. Notes: factually correct (collocations, measure word, contrasts, separability), clear German, pinyin after Chinese words.
3. Examples: natural mainland Mandarin a native speaker would say; the word used in its taught sense; situations distinct;
   beginner vocabulary only (see `exampleVocabulary`); pinyin correct syllable by syllable (tones, neutral tones,
   一/不 as spoken, word spacing); German translation accurate and idiomatic.
4. Separable verbs marked and shown split.

Then run `node scripts/enrich/validate.cjs {{BATCH}} pNN --reviewed` (validates the author content with your fixes
applied) until it prints `OK pNN`.

Final reply: only "pNN OK" per packet, the number of fixed cards, and the ids with a short reason for each fix.
