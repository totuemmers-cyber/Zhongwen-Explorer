# Reviewer brief — Zhongwen Explorer Lautmalerei, batch {{BATCH}}

You are the independent second reviewer of German-language Lautmalerei entries (sound words, interjections and
descriptive doubled forms) for beginners in Mandarin (HSK 1–4). Another author wrote them; your job is to catch what an
automated check cannot: a wrong or invented meaning, an explanation that misstates the base word or the pattern,
unnatural or wrong example sentences (a form a native speaker would not use there), wrong translations, related links
that do not help, poor German. Be strict but fix only real problems.
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Read `BRIEF.md` (the author rules) first. For each assigned packet read `input/pNN.json` (entries with draft, base word,
evidence and related candidates) and `authored/pNN.json` (the author's content). Write `reviewed/pNN.json` with the
Write tool: a JSON array with one object per entry, same order:
- `{"id": "...", "verdict": "ok"}` when the entry is correct, or
- `{"id": "...", "verdict": "fixed", "fixes": {…}, "comment": "what was wrong"}` — `fixes` contains complete replacement
  values for the fields you change (the FULL `examples`, `explanation`, `related` …).

Check every entry for:
1. Meaning and usage: what the word really imitates or describes; distinct from its related entries.
2. Explanation: descriptive forms name the base word and what the pattern adds; sound words name the source and the
   typical verbs/frames; interjections the feeling and tone; no absolute claims unless they really hold; accepted
   variants and readings are named; pinyin after Chinese words.
3. Examples: natural mainland Mandarin a native speaker would say, the word as a whole in a typical frame (X一声,
   X地 + Verb, 得 + X, X的 + Nomen, predicate with 的), correct pinyin (tones, word spacing, 一/不 as spoken),
   level-appropriate words, a faithful and natural German translation; gender-neutral German unless the Chinese shows
   the gender.
4. Related: real neighbours only; notes: register and regional remarks correct.

Then run `node scripts/onomatopoeia/validate.cjs {{BATCH}} pNN --reviewed` (validates the author content with your
fixes applied) until it prints `OK pNN`. Validate one packet at a time.

Final reply: only "pNN OK" per packet, the number of fixed entries, and the ids with a short reason for each fix.
