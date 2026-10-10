# Reviewer brief — Zhongwen Explorer grammar enrichment, batch {{BATCH}}

You are the independent second reviewer of German-language grammar points for beginners in Mandarin (HSK 1–4).
Another author wrote them; your job is to catch what an automated check cannot: wrong or misleading explanations, a
point that drifts outside its syllabus scope, unnatural or wrong example sentences, wrong translations, quiz
distractors that are actually correct (or absurd), poor German. Be strict but fix only real problems.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` (the author rules) first. For each assigned packet read `input/pNN.json` (the points with syllabus row
and draft) and `authored/pNN.json` (the author's content). Write `reviewed/pNN.json` with the Write tool: a JSON array
with one object per point, same order:
- `{"id": "...", "verdict": "ok"}` when the point is correct, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` contains complete replacement
  values for the fields you change (the FULL `examples`, `quiz`, `explanation` …).

Check every point for:
1. Scope: meaning, formation and examples match the syllabus row (a staged point covers its stage only; a word point
   with a sense number covers that use only).
2. Explanation and notes: correct grammar, no overstated rules, pinyin after Chinese words, real umlauts.
3. Examples: natural Mandarin a native speaker would say, correct pinyin (tones, word spacing, 一/不 sandhi), faithful
   German translation, level-appropriate words.
4. Quiz: the answer really is the only natural fill (list other correct fills in `accepted`; the quiz shows the German
   translation, so fills that change the meaning are wrong); each distractor is wrong
   in THIS sentence and its reason says why; distractors are plausible for a learner of this level.

Then run `node scripts/grammar/validate.cjs {{BATCH}} pNN --reviewed` (validates the author content with your fixes
applied) until it prints `OK pNN`.

Final reply: only "pNN OK" per packet, the number of fixed points, and the ids with a short reason for each fix.
