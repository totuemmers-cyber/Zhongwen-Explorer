# Reviewer brief — Zhongwen Explorer Zählwörter (量词), batch {{BATCH}}

You are the independent second reviewer of German-language classifier entries for beginners in Mandarin (HSK 1–4).
Another author wrote them; your job is to catch what an automated check cannot: a wrong or misleading meaning, a usage
that claims nouns the classifier does not count, a contrast with near classifiers that is wrong or overstated,
unnatural or wrong example sentences, wrong translations, poor German. Be strict but fix only real problems.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` (the author rules) first. For each assigned packet read `input/pNN.json` (entries with draft, nouns,
near classifiers and evidence) and `authored/pNN.json` (the author's content). Write `reviewed/pNN.json` with the
Write tool: a JSON array with one object per entry, same order:
- `{"id": "...", "verdict": "ok"}` when the entry is correct, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` contains complete replacement
  values for the fields you change (the FULL `examples`, `notes`, `specialForms` …).

Check every entry for:
1. Meaning and usage: correct for this classifier and reading, distinct from near classifiers, not too broad or narrow.
2. Notes: the memory aid is marked as such and not false etymology; contrasts are right and not overstated — where two
   classifiers (or colloquial 个) are both acceptable the note says so; no absolute claims („nie“, „immer“, „falsch“)
   unless they really hold; 个 is offered as a fallback only where that is true; framing pitfalls of the kind
   (Maßeinheit/Zeit without 个, Verbal word order, 二/两) correct; pinyin after Chinese words.
3. Question word: natural (几本 vs 多少本 vs 多少公斤).
4. Special forms: real and correctly explained; none invented to fill the field.
5. Examples: natural mainland Mandarin a native speaker would say, the classifier with a noun it really counts (or a
   real verbal frame), correct pinyin (tones, word spacing, 一/不 as spoken, the classifier's reading), level-appropriate
   words, a faithful and natural German translation; gender-neutral German unless the Chinese shows the gender.

Then run `node scripts/measure-words/validate.cjs {{BATCH}} pNN --reviewed` (validates the author content with your
fixes applied) until it prints `OK pNN`. Validate one packet at a time.

Final reply: only "pNN OK" per packet, the number of fixed entries, and the ids with a short reason for each fix.
