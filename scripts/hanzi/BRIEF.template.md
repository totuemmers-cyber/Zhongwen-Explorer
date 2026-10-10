# Author brief — Zhongwen Explorer hanzi enrichment, batch {{BATCH}}

You write German-language character cards (hanzi) for learners of Mandarin (simplified characters, HSK 2025 syllabus).
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Input: `input/pNN.json` — 25 cards with hanzi, level (HSK level of the official reading list, or "Zusatz" for characters
that occur only in words outside the syllabus), writingLevel (set when the character is on the official handwriting list),
traditional forms, readings `[{pinyin, meaning}]` (meanings are unreviewed drafts, often with ae/oe/ue spellings),
strokes, primaryRadical (Kangxi radical) and radicalForm (the radical as written in the character, e.g. 氵 for 水),
draft components `[{part, role, meaning}]`, the example `words` the app links to, and `evidence` (CC-CEDICT and HanDeDict
senses per reading, Unihan readings with spoken frequency, the Make Me a Hanzi etymology hint, the old card's meaning).

Output: write `authored/pNN.json` with the Write tool — a JSON array with exactly one object per input card, same order.
Then run (from the repository) `node scripts/hanzi/validate.cjs {{BATCH}} pNN` and fix until it prints `OK pNN`.
Read the WARN lines too and fix real problems.

## Fields
- `id` — the character, unchanged.
- `readings` — REQUIRED: the same readings in the same order, each `{pinyin, meaning}`; keep `pinyin` exactly as given.
  `meaning`: what the character means in this reading, German house style: short glosses separated by "; ", no articles,
  nouns capitalised, verbs in the infinitive („gehen; reisen“, „Reihe; Branche; Zählwort für Reihen“). Cover the main senses
  a learner meets in words, not only the rare stand-alone use; mark bound uses („nur in Wörtern: …“) and particles
  („Strukturpartikel (Attribut)“). If a listed reading is wrong or practically unused, keep it and explain in `flags`.
- `addReadings` — OPTIONAL: standard readings learners meet that the card lacks (的 dī in 打的 dǎdī „Taxi nehmen“, 号 háo
  in 号叫), as `[{pinyin, meaning}]`; they are appended after the given readings. Only readings that dictionaries attest
  for the character (the validator checks Unihan and CC-CEDICT); no rare literary readings.
- `components` — REQUIRED (may be `[]` for characters that cannot be split, e.g. 一 人 日 木): the parts a learner sees, in
  writing order, each `{part, role, meaning}`:
  - `part`: ONE character or component (氵 讠 扌 亻 宀 艹 …), as it appears in the character. No stroke-by-stroke splits:
    when the drafts list only strokes (发 → 𠃋 丿 又 丶), keep the recognisable parts (又) or use `[]` and describe the
    shape in the note;
  - `role`: "semantic" (carries the meaning: 氵 in 河), "phonetic" (gives the sound: 可 in 河 hé), or "form" (other parts,
    pictographic or historical elements);
  - `meaning`: short German gloss of the part („Wasser“, „Wort, sprechen“).
  Use the draft and the etymology evidence, but trust your knowledge; do not invent sound components (a phonetic part must
  really give a similar sound).
- `notes` — REQUIRED, German, „Aufbau & Merkhilfe“, 2–4 sentences (≥ 80 characters, typically 200–400):
  1. how the character is built: the parts and their roles (妈 = 女 „Frau“ als Bedeutung + 马 mǎ als Laut → mā) or, for a
     pictograph, what it depicts;
  2. a memory aid that makes the meaning stick — clearly as a memory aid („Merkhilfe: …“), never as false etymology;
  3. where useful, characters it is confused with (己/已/巳, 未/末, 买/卖, 人/入) and how to tell them apart;
  4. for several readings, which reading occurs in which words (行 xíng in 行李, háng in 银行).
  Chinese words of two or more characters get pinyin in parentheses at their first mention: 银行 (yínháng). Single
  characters and components may stand alone. German glosses in „…“. Real umlauts (ä ö ü ß), never ae/oe/ue.
  Be accurate: this is teaching content. Avoid absolute claims („nie“, „immer“) unless they really hold.
- `flags` — OPTIONAL string for problems you cannot fix with these fields (wrong reading listed, wrong traditional form,
  wrong radical, a missing reading that learners need, a stroke count that looks wrong).

Do not touch files outside `authored/`. One object, for orientation:
{"id":"河","readings":[{"pinyin":"hé","meaning":"Fluss; Strom; der Gelbe Fluss (in Namen)"}],"components":[{"part":"氵","role":"semantic","meaning":"Wasser"},{"part":"可","role":"phonetic","meaning":"können (Laut kě)"}],"notes":"河 besteht aus 氵 „Wasser“ als Bedeutungsträger und 可 (kě) als Lautträger – daher der Klang hé. Merkhilfe: Wasser, das man befahren „kann“, ist ein Fluss. 河 ist ein natürlicher Fluss; ein großer Strom heißt oft 江 (jiāng), etwa 长江 (Chángjiāng), im Norden meist 河: 黄河 (Huánghé)."}

Final reply: only "pNN OK, pMM OK", the characters whose readings you changed in substance (old → new), and any `flags`.
Keep it short.
