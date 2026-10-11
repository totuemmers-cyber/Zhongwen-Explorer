# Proofreading pass — Zhongwen Explorer Zählwörter (量词), batch {{BATCH}} (HSK 5+ and Zusatz)

These entries were written by an author without a second reviewer. In the reviewed campaigns the reviewers found the
same kinds of problems again and again; you check exactly those and fix them **in place** in `authored/pNN.json`
(edit the file with the Edit or Write tool, keep everything else unchanged).
Working dir: {{DIR}}   ·   Repository: {{ROOT}}
Read `BRIEF.md` for the entry format and rules.

Check every entry for:
1. **Absolute claims**: „nie“, „immer“, „nur“, „falsch“, „ausschließlich“ that do not really hold — colloquial usage
   often allows more (a second classifier, colloquial 个). Soften („meist“, „üblich“, „gehoben“) or name the alternative.
2. **Accepted forms**: where the notes contrast near classifiers, both acceptable options are named instead of one being
   called wrong; 个 is offered as a fallback only where that is true.
3. **Gender**: German must not assume a gender the Chinese does not show (der Lehrer, ein Student, „mein Freund“ for
   朋友); generic texts use Lernende, Lehrkraft, die sprechende Person.
4. **Natural examples**: each example is something a native speaker would say, the classifier counts a noun it really
   counts (or stands in a real verbal frame), and the German translation is faithful. Replace stiff textbook sentences.
5. Obvious errors you notice on the way (a wrong meaning, a wrong reading, a translation slip). Do not rewrite good content.

When you change an example, also update its pinyin and German. Then write `proofread/pNN.json`: a JSON array with one
object per entry, same order — `{"id": "...", "verdict": "ok"}` or `{"id": "...", "verdict": "fixed", "comment": "one line:
what you changed"}`; add `"flag": "…"` for a doubt you could not settle. Run
`node scripts/measure-words/validate.cjs {{BATCH}} pNN --proofread` (from the repository) until it prints `OK pNN`.

Final reply: per packet "pNN OK" and the ids with a one-line reason for each change.
