# Author brief — Zhongwen Explorer vocabulary enrichment, batch {{BATCH}}

You write German-language vocabulary cards for learners of Mandarin Chinese (simplified characters, HSK 2025 syllabus).
Working dir: {{DIR}}   ·   Repository: {{ROOT}}

Input: `input/pNN.json` — 25 cards with id, word, pinyin (citation form), pinyinSpoken (一/不 sandhi as spoken, if any),
traditional, level, levelUses, syllabusPos (official part of speech: 名 noun, 动 verb, 形 adjective, 副 adverb, 代 pronoun,
量 measure word, 数 numeral, 介 preposition, 连 conjunction, 助 particle, 叹 interjection, 前缀/后缀 affix; empty = phrase/idiom;
parts in （） belong to later levels), current type, meaning, meaningStatus ("draft" = unreviewed gloss), measureWords,
existing notes/examples, exampleVocabulary (vocabulary limit for beginner levels) and `evidence`
(CC-CEDICT English senses, HanDeDict German senses, other readings of the same characters).

Output: write `authored/pNN.json` with the Write tool — a JSON array with exactly one object per input card, same order.
Then run (from the repository) `node scripts/enrich/validate.cjs {{BATCH}} pNN` and fix until it prints `OK pNN`.
Read the WARN lines too and fix real problems (a pinyin warning usually means a wrong reading).

## Fields
- `id` — unchanged.
- `meaning` — REQUIRED when meaningStatus is "draft", otherwise only when the current meaning is wrong, misleading or misses
  the main sense. House style: short German glosses separated by "; ", no articles, nouns capitalised, verbs in the
  infinitive ("lernen; studieren", "Kollege/Kollegin"). The meaning must fit THIS reading and the official part of speech
  (得 dé = "erhalten; bekommen", not the meanings of děi or de). Use the evidence, but trust your own knowledge.
- `type` — only if the current type is wrong; one of: Nomen, Verb, Adjektiv, Adverb, Pronomen, Zahlwort, Zählwort,
  Präposition, Konjunktion, Partikel, Interjektion, Lautmalerei, Affix, Ausdruck, Phrase, Chengyu, Redewendung, Sprichwort.
  Give `typeReason` (e.g. "量: measure word, not a numeral"). Base it on the official part of speech.
- `notes` — German usage note, 2–4 sentences (≥ 80 characters, typically 250–450). How the word is really used: typical
  collocations and sentence frames, its measure word, contrast with near-synonyms learners confuse (认识/知道, 会/能/可以,
  二/两, 再/又), register (spoken/written/formal), separability, common mistakes of German speakers.
  Chinese words in characters, followed by pinyin in parentheses at their first mention: 帮忙 (bāngmáng).
  German glosses in „…“. Accurate — this is teaching content. Avoid absolute claims („nie“, „immer“, „nur“, „falsch“)
  unless they really hold: colloquial usage often allows what textbooks forbid (这书, 好电影). Prefer „meist“, „üblicher“.
- `separable` — `true` for separable verbs (离合词: 帮忙, 睡觉, 见面, 游泳, 结婚, 生气 …). Then the note explains the split
  (帮他的忙, 睡了一个小时的觉) and at least one example MUST show the split form (睡了一个好觉, 见过面) — the validator
  checks this. Omit otherwise.
- `examples` — 2 or 3 examples `{chinese, pinyin, german}` in clearly DIFFERENT situations; every example contains the word.
  Keep good existing examples verbatim. If an existing example is wrong or unnatural, rewrite it and list its ORIGINAL
  `chinese` string in `changedOriginals`; drop near-duplicates (also list them).
  - chinese: natural, idiomatic Mandarin (mainland usage), ending in 。！or？. Numbers in characters (三点, not 3点).
    Beginner levels: use only vocabulary from `exampleVocabulary` (the validator checks this against the official lists;
    names such as 小明, 王老师, places such as 北京 are allowed); keep the rest of the sentence simpler than the word.
  - pinyin: tone marks; syllables of one word written together, words separated by spaces, sentence-initial capital,
    proper names capitalised, same punctuation as the chinese (，。！？). Neutral tone without mark (māma, xièxie, de, le).
    一 and 不 as spoken, like the HSK syllabus and textbooks (yí ge, yìqǐ, bú shì, bù hǎo); third-tone sandhi is not
    marked (nǐ hǎo). Apostrophe before a vowel-initial syllable inside a word (nǚ'ér, Tiān'ānmén).
    Exactly one syllable per character. Numbers are one word: yìbǎi, sānshí'èr, liǎngwàn, èrlíng'èrwǔ nián.
  - german: natural, idiomatic German (not word-by-word).
- `changedOriginals` — array (usually []).
- `flags` — OPTIONAL string for problems you cannot fix with these fields (questionable syllabus reading, wrong measure word,
  wrong traditional form, duplicate of another card). Do not change word, pinyin, level, traditional or category.

Do not touch files outside `authored/`. One object, for orientation:
{"id":"w:帮忙:bang1mang2","meaning":"helfen; behilflich sein","notes":"帮忙 (bāngmáng) heißt „helfen“, steht aber meist ohne direktes Objekt: 请帮忙 „bitte hilf mal“. Wer geholfen bekommt, steht dazwischen: 帮我的忙 oder 帮个忙 (bāng ge máng). Mit Objekt sagt man 帮 oder 帮助: 帮我搬家. Als trennbares Verb nimmt es 了 und Zählangaben in der Mitte auf: 帮了一个大忙.","separable":true,"examples":[{"chinese":"你能帮我一个忙吗？","pinyin":"Nǐ néng bāng wǒ yí ge máng ma?","german":"Kannst du mir einen Gefallen tun?"},{"chinese":"谢谢你帮了我这么大的忙。","pinyin":"Xièxie nǐ bāng le wǒ zhème dà de máng.","german":"Danke, dass du mir so sehr geholfen hast."},{"chinese":"有什么需要帮忙的，随时告诉我。","pinyin":"Yǒu shénme xūyào bāngmáng de, suíshí gàosu wǒ.","german":"Wenn du Hilfe brauchst, sag mir jederzeit Bescheid."}],"changedOriginals":[]}
(一 is written yí before 个 because 个 is gè — spoken sandhi, as everywhere in example pinyin.)

Chengyu, proverbs and idioms: explain the literal meaning of the parts, the figurative meaning, typical frames and register;
examples use the whole expression in natural modern sentences.

Cards with level "Zusatz" are not in the HSK 2025 syllabus (everyday words and compounds, chengyu, proverbs, idioms). Their
syllabusPos is empty: choose `type` from actual usage, not from the empty field. A free combination of two words (洗碗,
打篮球) stays a Phrase and its note says how the parts combine; a fixed four-character idiom is a Chengyu. If the card only
duplicates another entry (variant spelling, same word), say so in `flags`. Keep the brief's style rules unchanged.

Final reply: only "pNN OK, pMM OK", the ids where you set `meaning` or `type` (old → new), and any `flags`. Keep it short.
