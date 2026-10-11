# Proofreading pass — Zhongwen Explorer Lautmalerei, batch {{BATCH}} (HSK 5+ and Zusatz)

These entries were written by an author without a second reviewer. In the reviewed campaigns the reviewers found the
same kinds of problems again and again; you check exactly those and fix them **in place** in `authored/pNN.json`
(edit the file with the Edit or Write tool, keep everything else unchanged).
Working dir: {{DIR}}   ·   Repository: {{ROOT}}
Read `BRIEF.md` for the entry format and rules.

Check every entry for:
1. **Absolute claims**: „nie“, „immer“, „nur“, „falsch“, „ausschließlich“ that do not really hold. Soften („meist“,
   „üblich“, „umgangssprachlich auch“) or name the alternative.
2. **Accepted forms**: variants and other spellings, doubled/tripled use (哈哈 / 哈哈哈), both readings where both are
   heard — named, not dismissed.
3. **Gender**: German must not assume a gender the Chinese does not show (der Lehrer, ein Student, „mein Freund“ for
   朋友); generic texts use Lernende, die sprechende Person.
4. **Natural examples**: each example is something a native speaker would say, with the word as a whole in a typical
   frame (X一声, X地 + Verb, 得 + X, X的 + Nomen); no invented collocations; the German translation is faithful.
   Replace stiff or odd sentences.
5. Obvious errors you notice on the way (a wrong meaning, an invented use, a translation slip). Do not rewrite good content.

When you change an example, also update its pinyin and German. Then write `proofread/pNN.json`: a JSON array with one
object per entry, same order — `{"id": "...", "verdict": "ok"}` or `{"id": "...", "verdict": "fixed", "comment": "one line:
what you changed"}`; add `"flag": "…"` for a doubt you could not settle (e.g. the word looks unattested). Run
`node scripts/onomatopoeia/validate.cjs {{BATCH}} pNN --proofread` (from the repository) until it prints `OK pNN`.

Final reply: per packet "pNN OK" and the ids with a one-line reason for each change.
