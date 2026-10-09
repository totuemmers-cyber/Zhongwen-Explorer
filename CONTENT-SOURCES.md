# Content sources

External data used by Zhongwen Explorer, with licences and pinned versions. Raw downloads live in
the gitignored `.content-cache/sources/`; `scripts/sources.json` records each URL, commit and
SHA-256, and `node scripts/fetch-sources.cjs` downloads and verifies them.

## HSK 2025 syllabus (《HSK考试大纲》)

Official vocabulary, character and grammar lists of the HSK as published by
中外语言交流合作中心 (Center for Language Education and Cooperation, CLEC) / Chinese Testing
International: *中文水平考试 HSK 考试大纲*, released 2025-11, in force since 2026-07.

- PDF: https://hsk.cn-bj.ufileos.com/3.0/新版HSK考试大纲1219.pdf
  (SHA-256 `ec74ce0439e837bbb15154be13e747ae798903b2fd3a331629df6c3b45504941`)
- The document carries no licence notice. The word and character lists are used to assign
  official HSK levels, with attribution to CLEC. HSK is a trademark of its owner; this app is
  not affiliated with or endorsed by CLEC or Chinese Testing International.
- Parsed by `scripts/hsk2025/parse-syllabus.cjs` (vocabulary, 11,000 entries, PDF pages 80–354)
  and `scripts/hsk2025/parse-characters.cjs` (3,088 reading / 1,200 writing characters).
  Results: `scripts/hsk2025/vocabulary.json`, `characters.json`, `receipt.json`.
- Verification: per-level counts equal the syllabus (new words 300/200/500/1000/1600/1800/5600);
  every row was compared with the independent transcription in
  https://github.com/uranbekanarbaev/hsk-3.0-vocabulary-dataset (commit `6859875`), used only as a
  cross-check. One difference (a stray space in that dataset) is documented in
  `scripts/hsk2025/known-differences.json`.

## CC-CEDICT

Chinese–English dictionary by MDBG and contributors, licensed
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
https://www.mdbg.net/chinese/dictionary?page=cc-cedict (downloaded manually; MDBG does not allow
scripted access). Used for traditional forms, citation pinyin, measure words (classifiers) and
variants. Data derived from it is shared under the same licence.

## HanDeDict

Chinese–German dictionary, https://github.com/gugray/HanDeDict (commit `046f839`), licensed
CC BY-SA (stated as 2.0 in the README and 3.0 in the data file; treated as CC BY-SA 3.0).
Credit: HanDeDict contributors / Gábor L Ugray. Used only for **draft** German glosses of newly
added syllabus words; these are marked "Entwurf – noch nicht geprüft" in the app until they are
replaced by reviewed content.

## OpenCC

https://github.com/BYVoid/OpenCC (commit `8cf737a`), Apache License 2.0. `STPhrases.txt` and
`STCharacters.txt` are used as a fallback for traditional forms where CC-CEDICT has no entry.

## Unihan

Unicode Han Database, https://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip,
[Unicode License v3](https://www.unicode.org/license.txt). Character variants and stroke counts.

## AnimCJK stroke-order diagrams

The SVGs in `stroke-order/` come from AnimCJK (https://github.com/parsimonhi/animCJK,
© FM-SH), derived from Make Me a Hanzi and the Arphic PL KaitiM fonts, and are distributed under
the Arphic Public License: `stroke-order/ARPHIC-LICENSE.txt`.
