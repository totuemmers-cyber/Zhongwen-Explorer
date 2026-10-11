// Lautmalerei rebuild (Phase 8 step 4): classifies the 389 old entries (onomatopoeia-data.js + -extra1–3 as of
// commit d7890e2) and adds CC-CEDICT/syllabus candidates. The section keeps sound words (拟声词), interjections (叹词)
// and descriptive forms (ABB 热腾腾, AABB 干干净净, A里AB 糊里糊涂, ABAB 冰凉冰凉 …); idioms and plain words move to
// Vokabeln/Chengyu/Grammatik. Decisions settled 2026-10-11 (report: build-report.md).
//
// Usage:
//   node scripts/onomatopoeia/build.cjs                    dry run: writes scripts/onomatopoeia/build-report.md only
//   node scripts/onomatopoeia/build.cjs --preview <word…>  dry run + prints the built entries for these words
//   node scripts/onomatopoeia/build.cjs --write            also writes onomatopoeia-data.js (ONOMATOPOEIA_DATA +
//                                                          ONOMATOPOEIA_REMOVED), deletes the old -extra files and
//                                                          points lang-profile.js at the one data file
// The old entries are read from git (OLD_REF), so the build stays repeatable after --write.
//
// Levels: syllabus level, else the vocabulary entry's HSK level; a descriptive form without either takes the level of
// its base word (干干净净 → 干净; ABB: an adjective A, 绿油油 → 绿), never below the grammar point that teaches its
// pattern (AABB: g:AA、AABB); everything else is Zusatz. levelSource records which rule applied.
// Texts: the old texts stay as author drafts (meaningStatus 'draft', ASCII umlauts and ss spellings converted, examples
// without the word dropped); new candidates get a short German gloss (candidate: true). The text campaign rewrites both.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');
const common = require('../enrich/common.cjs');
const dict = require('../hsk2025/dictionaries.cjs');
const { loadGrammar } = require('../grammar/common.cjs');
const { asciiUmlauts } = require('../hanzi/common.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const WRITE = process.argv.includes('--write');
const REPORT = path.join(__dirname, 'build-report.md');
const OLD_REF = 'd7890e2';
const OLD_FILES = ['onomatopoeia-data.js', 'onomatopoeia-extra.js', 'onomatopoeia-extra2.js', 'onomatopoeia-extra3.js'];
const OUT_DATA = 'onomatopoeia-data.js';

// ---------------------------------------------------------------------------------------------
// Categories (ASCII keys for index.html filter attributes, German labels for the UI) and kinds.
// ---------------------------------------------------------------------------------------------
const CATEGORIES = {
  Tiere: 'Tiere',
  Menschen: 'Menschen',
  Natur: 'Natur & Wetter',
  Dinge: 'Dinge & Maschinen',
  Ausrufe: 'Ausrufe',
  Aussehen: 'Zustand & Aussehen',
  Sinne: 'Sinne & Textur',
  Bewegung: 'Bewegung',
  Gefuehle: 'Gefühle'
};
const KINDS = { S: 'Laut', A: 'Ausruf', D: 'Beschreibung' };
const PATTERN_ORDER = ['A', 'AA', 'AB', 'ABB', 'AABB', 'ABAB', 'A里AB', 'A里BC', 'A不BC', 'ABCC', 'Andere'];
const MOVE_REASONS = {
  I: 'four-character idiom (成语), not a sound or reduplicated descriptive form',
  V: 'plain verb/adjective, not a sound word',
  R: 'plain AA reduplication of an adjective/adverb; the pattern is taught in grammar g:AA、AABB',
  L: 'V来V去 construction; taught in grammar g:A来A去',
  N: 'noun or set phrase, not a sound or descriptive form'
};
const MOVE_GRAMMAR = { R: 'g:AA、AABB', L: 'g:A来A去' };

// ---------------------------------------------------------------------------------------------
// Decisions for all 389 existing entries: word|code|reason
//   S:<cat> keep sound word (kind Laut)    A keep interjection (kind Ausruf, category Ausrufe)
//   D:<cat> keep descriptive form          M:<I|V|R|L|N> move to Vokabeln/Chengyu/Grammatik
//   X drop (unattested/invented)           G:<word> merge into <word> (bookmarks follow, legacyIds)
// An empty reason gets an evidence-based default (CEDICT sense, productive pattern of an attested base).
// ---------------------------------------------------------------------------------------------
const DECISIONS = `
汪汪|S:Tiere|
喵喵|S:Tiere|
咕咕|S:Tiere|
嘎嘎|S:Tiere|
叽叽喳喳|S:Tiere|
呱呱|S:Tiere|frogs/ducks guāguā; CEDICT also gūgū (baby crying) — note for the text campaign
嗡嗡|S:Tiere|
咩咩|S:Tiere|
哞哞|S:Tiere|
哈哈|S:Menschen|
嘻嘻|S:Menschen|
呵呵|S:Menschen|
呜呜|S:Menschen|
哇哇|S:Menschen|
啊啊|G:啊|ad-hoc doubling of the interjection 啊; the syllabus word 啊 (HSK4) is added instead
唠唠叨叨|D:Menschen|
嘟嘟囔囔|D:Menschen|
哗哗|S:Natur|
淅淅沥沥|S:Natur|
沙沙|S:Natur|
飒飒|S:Natur|
呼呼|S:Natur|
轰隆|S:Natur|
滴答|S:Natur|
潺潺|S:Natur|
砰|S:Dinge|
啪|S:Dinge|
咔嚓|S:Dinge|
叮当|S:Dinge|
叮叮|S:Dinge|
乒乓|S:Dinge|
咚咚|S:Dinge|
嘭嘭|S:Dinge|
哐当|S:Dinge|very common spelling (哐当一声); CEDICT has 哐 (onom.) and 哐啷
咕噜咕噜|S:Natur|
吱吱|S:Tiere|
嘀嘀|S:Dinge|
噼里啪啦|S:Dinge|
吧嗒|S:Dinge|sound word bādā (CEDICT bāda is the verb reading 'to smack one's lips')|bādā
呼噜|S:Menschen|
嘶嘶|S:Tiere|common (嘶嘶声); CEDICT has 嘶 hiss and 咝咝声
冷冷清清|D:Aussehen|
干干净净|D:Aussehen|
整整齐齐|D:Aussehen|
热热闹闹|D:Aussehen|
清清楚楚|D:Aussehen|
明明白白|D:Aussehen|
马马虎虎|D:Aussehen|
密密麻麻|D:Aussehen|
平平安安|D:Aussehen|
快快乐乐|D:Gefuehle|
开开心心|D:Gefuehle|
高高兴兴|D:Gefuehle|
匆匆忙忙|D:Bewegung|
慢慢|M:R|
静静|M:R|
悄悄|M:R|
摇摇晃晃|D:Bewegung|
跌跌撞撞|D:Bewegung|
急急忙忙|D:Bewegung|
轻轻|M:R|
嘻嘻哈哈|S:Menschen|laughing sound, AABB of 嘻嘻 + 哈哈
哭哭啼啼|D:Gefuehle|
扭扭捏捏|D:Gefuehle|
偷偷摸摸|D:Bewegung|
犹犹豫豫|D:Gefuehle|
迷迷糊糊|D:Aussehen|
乱七八糟|M:I|
稀里糊涂|D:Aussehen|
咔咔|S:Dinge|
嗒嗒|S:Dinge|
哗啦|S:Dinge|
噗|S:Menschen|
噗嗤|S:Menschen|common variant of 扑哧 (噗嗤一笑)
嘎吱|S:Dinge|
隆隆|S:Natur|
嘀嘀咕咕|D:Menschen|AABB of 嘀咕 (dígu); reading dídí-gūgū (the draft had dīdī)|dídígūgū
叮叮当当|S:Dinge|
稀里哗啦|S:Dinge|
咝咝|G:嘶嘶|variant spelling (咝 = 嘶 for hissing)
铮铮|S:Dinge|literary sound of metal/strings (铁骨铮铮); not in CEDICT
唧唧|S:Tiere|
呲呲|G:嗞嗞|variant spelling of the sizzling sound
砰砰|S:Dinge|
啪啪|S:Dinge|
咕咚|S:Dinge|
嗖嗖|S:Bewegung|
扑通|S:Dinge|
嘎巴|S:Dinge|象声词 for snapping (嘎巴一声); not in CEDICT, common in speech
呼啦|S:Dinge|common (呼啦一声, flags/crowds); not in CEDICT
嚓嚓|S:Dinge|
窸窸窣窣|S:Natur|
哔哔|S:Dinge|beep; CEDICT 哔 (phonetic), 哔哔啪啪 (onom.)
轰|S:Dinge|
糊里糊涂|D:Aussehen|
安安静静|D:Aussehen|
舒舒服服|D:Aussehen||shūshufúfú
大大方方|D:Aussehen|
老老实实|D:Aussehen|
简简单单|D:Aussehen|
普普通通|D:Aussehen|
漂漂亮亮|D:Aussehen|
完完整整|D:Aussehen|
断断续续|D:Aussehen|
松松散散|D:Aussehen|
平平淡淡|D:Aussehen|
红红火火|D:Aussehen|
干干巴巴|D:Sinne|AABB of 干巴 (dry, dull), used colloquially (干干巴巴的); the ABB 干巴巴 is in CEDICT
心惊胆战|M:I|
开开朗朗|X|开朗 is not reduplicated in usage; not in CEDICT, no defensible common use
安安心心|D:Gefuehle|
甜甜蜜蜜|D:Gefuehle|
战战兢兢|D:Gefuehle|
恍恍惚惚|D:Gefuehle|
磕磕碰碰|D:Bewegung|
忐忑不安|M:I|
窝窝囊囊|D:Gefuehle|
凄凄惨惨|D:Gefuehle|
蹦蹦跳跳|D:Bewegung|
来来往往|D:Bewegung|
哆哆嗦嗦|D:Bewegung|
吞吞吐吐|D:Menschen|
晃晃悠悠|D:Bewegung|
风风火火|D:Bewegung|
推推搡搡|D:Bewegung|
飘飘|M:R|plain AA verb/adjective (to float, flutter); covered by vocabulary/grammar
踉踉跄跄|D:Bewegung|
歪歪扭扭|D:Aussehen|
团团转|M:N|set phrase (忙得团团转)
大摇大摆|M:I|
拖拖拉拉|D:Bewegung|
颤颤巍巍|D:Bewegung|
蹑手蹑脚|M:I|
弯弯曲曲|D:Aussehen|
东张西望|M:I|
纷纷扬扬|D:Natur|
慌慌张张|D:Gefuehle|
叽里咕噜|S:Menschen|
稀稀拉拉|D:Aussehen|
模模糊糊|D:Aussehen|
瑟瑟发抖|M:I|AABC set phrase (like 摇摇欲坠)
花花绿绿|D:Aussehen|
规规矩矩|D:Aussehen|
里里外外|M:N|reduplicated nouns 里外 ("inside and out"), not a descriptive adjective form
浑浑噩噩|D:Gefuehle|
嘁嘁喳喳|S:Menschen|whispering/chattering; reading follows CEDICT (chā, not zhā)|qīqichāchā
认认真真|D:Aussehen|
滴溜溜|D:Bewegung|
黑咕隆咚|D:Aussehen|vivid A+BCD form (状态形容词); CEDICT pitch-black
嘶|S:Tiere|
啾啾|S:Tiere|
咯咯|S:Tiere|
嗷嗷|S:Tiere|common (嗷嗷叫, 嗷嗷待哺); CEDICT has 嗷 (sound of wailing)
呦呦|S:Tiere|
嗡|S:Tiere|
吱呀|S:Dinge|
咴咴|X|rare (dialectal 咴儿咴儿); horses neigh with 嘶 / 嘶鸣; not in CEDICT
嘟嘟|S:Dinge|
突突|S:Dinge|
哐哐|S:Dinge|
嗡嗡嗡|G:嗡嗡|tripled form of 嗡嗡
喀喀|G:咔咔|variant spelling of the clicking sound (喀 is mainly coughing)
轧轧|S:Dinge|
淙淙|S:Natur|literary sound of flowing water (泉水淙淙); not in CEDICT
簌簌|S:Natur|
呜|S:Natur|
霹雳|M:N|noun "thunderclap" (晴天霹雳), not an onomatopoeia
汩汩|S:Natur|
萧萧|S:Natur|literary sound of wind/horses (风萧萧); not in CEDICT
滴滴答答|S:Natur|
咕嘟|S:Dinge|common (bubbling, 咕嘟咕嘟); not in CEDICT
噗通|G:扑通|variant spelling; CEDICT lists 扑通
咣|S:Dinge|
嗙|G:砰|rare variant (CEDICT pǎng, dialect); same "bang" as 砰
叭|G:啪|variant writing of the sharp bang 啪
咣当|S:Dinge|
吭吭|S:Menschen|
咂|M:V|verb "to sip; to smack one's lips"
哼哼|S:Menschen|common (哼哼唧唧); groaning/humming
呃|A|
嚏|G:阿嚏|the sneezing sound is 阿嚏 (CEDICT onom.); 嚏 alone is the bound morpheme of 喷嚏
嘶嘶啦啦|G:嘶啦|rare AABB of 嘶啦; folded into 嘶啦
叽里呱啦|S:Menschen|common (叽里呱啦地说); not in CEDICT
扑腾|S:Bewegung|sound word pūtēng (CEDICT pūteng is the verb reading)|pūtēng
叮咚|S:Dinge|
哗啦啦|S:Natur|
噼啪|S:Dinge|common spelling of 劈啪 (CEDICT onom. crack, clap, crackle)
轰隆隆|S:Natur|ABB of 轰隆 (CEDICT onom. hōnglōng), very common|hōnglōnglōng
湿漉漉|D:Sinne|
热乎乎|D:Sinne|
冷冰冰|D:Sinne|very common ABB (also figurative "cold, aloof"); not in CEDICT
暖洋洋|D:Sinne|
硬邦邦|D:Sinne|
软绵绵|D:Sinne|
滑溜溜|D:Sinne|
毛茸茸|D:Sinne|
沉甸甸|D:Sinne|
黏糊糊|D:Sinne|
干巴巴|D:Sinne|
胖乎乎|D:Aussehen|
亮晶晶|D:Aussehen|
光秃秃|D:Aussehen|
圆滚滚|D:Aussehen|
黑黝黝|D:Aussehen|common ABB (dark, swarthy); not in CEDICT
脏兮兮|D:Aussehen|
皱巴巴|D:Aussehen|
乱蓬蓬|D:Aussehen|
白花花|D:Aussehen|
红彤彤|D:Aussehen|
绿油油|D:Aussehen|
金灿灿|D:Aussehen|
灰蒙蒙|D:Aussehen|
喜滋滋|D:Gefuehle|
乐呵呵|D:Gefuehle|
笑眯眯|D:Gefuehle|
气鼓鼓|D:Gefuehle|
怒气冲冲|M:I|ABCC set phrase; vocab lists it as Chengyu
急匆匆|D:Bewegung|
闷闷不乐|M:I|AABC set phrase
提心吊胆|M:I|
心慌意乱|M:I|
兴冲冲|D:Gefuehle|
愁眉苦脸|M:I|
乐滋滋|D:Gefuehle|
傻乎乎|D:Aussehen|
眼巴巴|D:Gefuehle|
美滋滋|D:Gefuehle|
灰溜溜|D:Gefuehle|
溜达|M:V|
颠颠|X|CEDICT only "glad and diligent"; the draft sense "trippelnd" is unattested as a standalone word
晃荡|M:V|
骨碌碌|S:Bewegung|
磨磨蹭蹭|D:Bewegung|
翻来覆去|M:I|
转悠|M:V|
摇摇摆摆|D:Bewegung|
跌跌绊绊|G:磕磕绊绊|unusual form; the attested AABB is 磕磕绊绊 (CEDICT), added as candidate
嗖|S:Bewegung|
乱窜|M:V|
东奔西跑|M:I|
踮脚|M:V|verb-object "to stand on tiptoe"
一溜烟|M:N|adverbial set phrase ("in a flash")
挪动|M:V|
热腾腾|D:Sinne|
冷飕飕|D:Sinne|
乱糟糟|D:Aussehen|
空荡荡|D:Aussehen|
水灵灵|D:Aussehen|
响当当|D:Aussehen|
慢腾腾|D:Bewegung|
黑漆漆|D:Aussehen|common ABB (pitch-dark); not in CEDICT
笑嘻嘻|D:Gefuehle|
哧哧|S:Menschen|common (哧哧地笑); CEDICT has 哧 (onom.) and 吃吃
叮|S:Dinge|"ding!" (叮的一声) is common; CEDICT lists only the verb senses of 叮
嘀嗒|G:滴答|variant spelling of 滴答 (tick-tock)
嘎嘎嘎|G:嘎嘎|tripled form of 嘎嘎
吱嘎|S:Dinge|
叹息|M:V|verb "to sigh"
嗤嗤|G:哧哧|variant spelling of the giggling/hissing sound 哧哧
嗒|S:Dinge|
嗞嗞|S:Dinge|sizzling (嗞嗞作响, also written 滋滋); CEDICT 嗞 (onom.)
急吼吼|D:Gefuehle|
懒洋洋|D:Gefuehle|
恶狠狠|D:Gefuehle|
孤零零|D:Gefuehle|
可怜巴巴|D:Gefuehle|AB + 巴巴 vivid suffix (like 干巴巴), not an idiom; pattern ABCC — see open questions
慢悠悠|D:Bewegung|
气喘吁吁|M:I|ABCC set phrase (成语)
嘻哈|M:N|CEDICT/vocab: hip-hop (noun); "ausgelassen" is 嘻嘻哈哈
羞答答|D:Gefuehle|
左摇右摆|M:I|four-character set phrase (左…右…), not a reduplicated form
横冲直撞|M:I|
连滚带爬|M:I|
游来游去|M:L|
走来走去|M:L|
飞来飞去|M:L|
七手八脚|M:I|
跑来跑去|M:L|
酸溜溜|D:Sinne|
嘎吱嘎吱|S:Dinge|
咯吱|S:Dinge|
呜呜呜|G:呜呜|tripled form of 呜呜
嗡嗡响|G:嗡嗡|phrase 嗡嗡 + 响
吱吱嘎嘎|S:Dinge|creaking; 吱 zhī is the creaking sound (CEDICT lists zī, the squeak of small animals)|zhīzhīgāgā
卡塔卡塔|X|calque of Japanese カタカタ, not Chinese; clicking keys is 咔嗒咔嗒 / 嗒嗒
嘶啦|S:Dinge|common (嘶啦一声撕开); not in CEDICT (also written 刺啦)
轰轰|S:Dinge|
咕嘟咕嘟|S:Dinge|ABAB of 咕嘟, common for bubbling/gulping
滋啦|S:Dinge|sizzling (滋啦一声); CEDICT spells it 嗞啦
噗噗|S:Dinge|AA of 噗 (CEDICT onom.)
吧唧|S:Menschen|
呲啦|G:滋啦|variant spelling of 滋啦/嗞啦
嘎嘣|S:Dinge|common (嘎嘣脆); not in CEDICT
滴滴|G:嘀嘀|for beeping the onomatopoeia is 嘀嘀; 滴滴 is mainly the DiDi brand in CEDICT
嗡鸣|M:V|compound verb "to buzz, hum" (耳朵嗡鸣), not an onomatopoeia itself
咔嗒|S:Dinge|
嚓|S:Dinge|
哔|G:哔哔|single form of 哔哔
哗哗哗|G:哗哗|tripled form of 哗哗
呼啸|M:V|
咔咔咔|G:咔咔|tripled form of 咔咔
刷刷|S:Natur|common (刷刷地响), also written 唰唰 (CEDICT 唰 onom.)
噼噼啪啪|S:Dinge|AABB of 噼啪 (劈劈啪啪), common
咕咚咕咚|S:Menschen|ABAB of 咕咚, gulping
轰轰隆隆|S:Natur|AABB of 轰隆 (CEDICT onom. hōnglōng), common|hōnghōnglōnglōng
火辣辣|D:Sinne|
凉飕飕|D:Sinne|common ABB (cf. CEDICT 冷飕飕)
暖融融|D:Sinne|
冰凉冰凉|D:Sinne|
热辣辣|D:Sinne|
亮堂堂|D:Aussehen|
阴沉沉|D:Aussehen|
雾蒙蒙|D:Aussehen|
明晃晃|D:Aussehen|
昏暗暗|X|not an established ABB (昏暗 is AB; the vivid forms are 昏沉沉 / 黑漆漆); not in CEDICT
稀疏疏|X|not an established ABB (稀疏 is AB; vivid form 稀稀拉拉); not in CEDICT
厚墩墩|D:Aussehen|common ABB (现代汉语词典); not in CEDICT
松软软|X|rare ad-hoc form; standard vivid forms are 软绵绵 / 软乎乎
水汪汪|D:Aussehen|
潮乎乎|D:Sinne|common ABB (damp, clammy); not in CEDICT
干燥燥|X|not used; the vivid form of 干 is 干巴巴
泥泞泞|X|not used; 泥泞 is AB
心酸酸|X|not an established form; cf. 心酸 (AB) and 酸溜溜
乐颠颠|D:Gefuehle|common ABB (乐颠颠地跑来); not in CEDICT
愣怔怔|X|rare; 愣怔 is AB, vivid form 愣愣地 / 直愣愣
心慌慌|D:Gefuehle|common colloquial ABB (心慌慌的); not in CEDICT
惨兮兮|D:Gefuehle|common ABB (cf. CEDICT 脏兮兮); not in CEDICT
扭扭捏|G:扭扭捏捏|truncated form of 扭扭捏捏
热情洋溢|M:I|
气呼呼|D:Gefuehle|
甜丝丝|D:Sinne|common ABB (现代汉语词典); not in CEDICT
怯生生|D:Gefuehle|
无精打采|M:I|
麻酥酥|D:Sinne|common ABB (tingling); not in CEDICT
昏沉沉|D:Gefuehle|common ABB (dazed, drowsy); not in CEDICT
酸麻麻|X|rare ad-hoc form; standard is 酸麻 / 麻酥酥
胀鼓鼓|D:Aussehen|ABB with the regular suffix 鼓鼓 (气鼓鼓, 圆鼓鼓); not in CEDICT
痒酥酥|X|rare ad-hoc form; standard is 痒痒 / 痒丝丝
风驰电掣|M:I|
慢吞吞|D:Bewegung|
急匆匆地跑|G:急匆匆|phrase 急匆匆 + 地 + 跑
颤悠悠|D:Bewegung|ABB of 颤悠 (to tremble, sway); not in CEDICT
轻飘飘|D:Bewegung|
健步如飞|M:I|
波光粼粼|M:I|ABCC set phrase (成语)
哗哗流|G:哗哗|phrase 哗哗 + 流
涌|M:V|
溅|M:V|
涓涓|M:R|literary AA adjective (trickling), not a sound word
滔滔|M:R|literary AA adjective (torrential, 滔滔不绝)
飒|G:飒飒|single form of 飒飒
呼呼刮|G:呼呼|phrase 呼呼 + 刮
旋转|M:V|
猎猎|S:Natur|literary sound of flags in the wind (旌旗猎猎); not in CEDICT
徐徐|M:R|
咕噜|S:Menschen|sound word gūlū (CEDICT gūlu is the verb/noun reading)|gūlū
扑棱棱|S:Tiere|ABB of 扑棱 (CEDICT onom., flapping wings)
咣咣|S:Dinge|AA of 咣 (CEDICT onom.)
窸窣|S:Natur|
清亮亮|X|rare; the established vivid form is 清凌凌
暗沉沉|X|near-duplicate of 阴沉沉 / 昏沉沉; not in CEDICT
紧巴巴|D:Aussehen|
齐刷刷|D:Aussehen|
闷葫芦|M:N|noun "taciturn person; enigma"
心花怒放|M:I|
哭丧着脸|M:N|verb phrase "to pull a long face"
眉开眼笑|M:I|
蹒跚|M:V|
翩翩|M:R|
窜来窜去|M:L|
摇摇欲坠|M:I|
颠簸|M:V|
滑溜|M:V|plain adjective/verb; the vivid form 滑溜溜 stays
吧啦吧啦|S:Menschen|
绵绵|M:R|
光溜溜|D:Aussehen|very common ABB (smooth; naked); not in CEDICT
急巴巴|X|rare ad-hoc form; standard is 急匆匆 / 急吼吼
笑盈盈|D:Gefuehle|
沉沉|M:R|
乱哄哄|D:Aussehen|
悄无声息|M:I|
摇头晃脑|M:I|
手忙脚乱|M:I|
鹅毛大雪|M:I|
热气腾腾|M:I|ABCC set phrase (成语); the ABB 热腾腾 stays
踢踢踏踏|S:Menschen|AABB of 踢踏 (footsteps), common
白茫茫|D:Aussehen|
蹦蹦|G:蹦蹦跳跳|sub-form of 蹦蹦跳跳; not used alone
黏黏糊糊|D:Sinne|
`;

// ---------------------------------------------------------------------------------------------
// Candidates to add: word|code|meaning|reason|pinyin override
// Syllabus 叹/拟声 words first, then CC-CEDICT sound words and frequent descriptive forms.
// A candidate with a vocabulary entry takes its meaning from there when the meaning column is empty.
// ---------------------------------------------------------------------------------------------
const CANDIDATES = `
喂|A||syllabus HSK1 叹|
啊|A||syllabus HSK4 叹|
嗯|A||syllabus HSK4 叹|ǹg
哎|A||syllabus HSK5 叹|
哎呀|A||syllabus HSK5 叹|
唉|A||syllabus HSK5 叹|
哈|A||syllabus HSK5 拟声、叹|
哦|A||syllabus HSK5 叹|
呀|A||syllabus HSK5 叹|
嘿|A||syllabus HSK6 叹|
哇|A||syllabus HSK6 拟声 (wow; crying)|
哎哟|A|au!, autsch!; oje! (Schmerz, Überraschung)|CEDICT interjection, very common|
哟|A|oh!, nanu! (leichte Überraschung)|CEDICT interjection, very common|
咦|A|nanu?, hä? (Verwunderung)|CEDICT interjection, very common|
呸|A|pfui!, pah! (Verachtung)|CEDICT interjection, common|
嘘|A|pst!, sch! (zum Schweigen auffordern)|CEDICT; very common as "shh"|
噢|A|oh!, ach so! (Erkenntnis)|CEDICT interjection, very common|
啧啧|A|ts, ts (Zungenschnalzen: Bewunderung oder Missbilligung)|CEDICT; common (啧啧称赞)|
哼|A|hm!, pah! (Unmut, Zweifel)|CEDICT interjection hng|hng
嘿嘿|S:Menschen|hehe (verschmitztes Lachen)|CEDICT (onom.)|
怦怦|S:Menschen|poch, poch (Herzklopfen)|CEDICT (onom.); common (心怦怦直跳)|
咯噔|S:Dinge|rums; (Herz) setzt einen Schlag aus|CEDICT (onom.); common (心里咯噔一下)|
哐啷|S:Dinge|klirr, schepper (Metall)|CEDICT (onom.)|
淅沥|S:Natur|plätschern, tröpfeln (Regen)|CEDICT (onom.); base of 淅淅沥沥|
辘辘|S:Dinge|rumpeln (Räder); knurren (Magen)|CEDICT (onom.); 饥肠辘辘|
喃喃|S:Menschen|murmeln, vor sich hin flüstern|CEDICT (onom.); 喃喃自语|
阿嚏|S:Menschen|hatschi! (Niesen)|CEDICT (onom.); replaces 嚏|
噔噔|S:Menschen|trapp, trapp (feste Schritte)|CEDICT (onom.)|
呼哧|S:Menschen|keuch, schnauf (Hecheln)|CEDICT (onom.); 呼哧呼哧|
叮铃|S:Dinge|klingeling (Glocke, Fahrradklingel)|CEDICT; 叮铃铃 common|
喔喔|S:Tiere|kikeriki (Hahn)|CEDICT 喔 (onom., usually reduplicated); standard rooster call|wōwō
红扑扑|D:Aussehen||syllabus HSK7-9 形|
暖烘烘|D:Sinne||syllabus HSK7-9 形|
喜洋洋|D:Gefuehle||syllabus HSK7-9 形|
大大咧咧|D:Gefuehle||syllabus HSK7-9 形|
熙熙攘攘|D:Aussehen||syllabus HSK7-9 形|
香喷喷|D:Sinne|duftend, appetitlich riechend|CEDICT; very common ABB|
静悄悄|D:Aussehen|mucksmäuschenstill|CEDICT; very common ABB|
黑乎乎|D:Aussehen|schwarz, dunkel; verschmiert|CEDICT (= 黑糊糊); very common ABB|
黄澄澄|D:Aussehen|goldgelb glänzend|CEDICT; common ABB|
亮闪闪|D:Aussehen|glitzernd, funkelnd|CEDICT; common ABB|
胖嘟嘟|D:Aussehen|pummelig, pausbäckig|CEDICT; common ABB|
气冲冲|D:Gefuehle|wutentbrannt|CEDICT; common ABB|
甜蜜蜜|D:Gefuehle|zuckersüß, innig|CEDICT; common ABB|
笑哈哈|D:Gefuehle|lachend, mit schallendem Lachen|CEDICT; common ABB|
眼睁睁|D:Gefuehle|mit offenen Augen (hilflos zusehen)|CEDICT; very common ABB|
直勾勾|D:Aussehen|starr, unverwandt (Blick)|CEDICT; common ABB|
汗津津|D:Sinne|verschwitzt, schweißnass|CEDICT; common ABB|
臭烘烘|D:Sinne|übel riechend, stinkend|CEDICT; common ABB|
闹哄哄|D:Aussehen|lärmend, laut durcheinander|CEDICT; common ABB|
黑压压|D:Aussehen|dicht gedrängt und dunkel (Menschenmenge, Wolken)|CEDICT; common ABB|
醉醺醺|D:Aussehen|betrunken, angeheitert|CEDICT; common ABB|
圆鼓鼓|D:Aussehen|kugelrund, prall|CEDICT; common ABB|
结结巴巴|D:Menschen|stotternd, stockend|CEDICT; AABB of 结巴|
坑坑洼洼|D:Aussehen|holprig, voller Schlaglöcher|CEDICT; AABB of 坑洼|
磕磕绊绊|D:Bewegung|stolpernd; holprig (auch übertragen)|CEDICT; replaces 跌跌绊绊|
啰里啰嗦|D:Menschen|weitschweifig, umständlich|CEDICT; A里AB of 啰嗦|
慌里慌张|D:Gefuehle|hektisch, kopflos|CEDICT; A里AB of 慌张|
土里土气|D:Aussehen|bäurisch, altmodisch|CEDICT; A里AB of 土气|
傻里傻气|D:Aussehen|dümmlich, albern|CEDICT; A里AB of 傻气|
古里古怪|D:Aussehen|seltsam, wunderlich|CEDICT; A里AB of 古怪|
黑不溜秋|D:Aussehen|schwärzlich, dunkel (abwertend)|CEDICT; A不BC vivid form|
雪白雪白|D:Aussehen|schneeweiß|productive ABAB of 雪白 (like 冰凉冰凉)|xuěbáixuěbái
通红通红|D:Aussehen|knallrot|productive ABAB of 通红 (like 冰凉冰凉)|tōnghóngtōnghóng
`;

// ---------------------------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------------------------
const Pinyin = common.loadPinyin();
const cedict = dict.loadCedict();
const toTraditional = dict.loadOpenCC();
const syllabus = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'hsk2025', 'vocabulary.json'), 'utf8'));
const profile = common.loadProfile();
const LEVELS = profile.levels.concat(profile.extraLevel);
const grammarById = new Map(loadGrammar().map(g => [g.id, g]));

function loadOld() {
  const context = { window: {} };
  vm.createContext(context);
  for (const file of OLD_FILES) {
    const text = execFileSync('git', ['show', OLD_REF + ':' + file], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });
    vm.runInContext(text, context, { filename: file });
  }
  return context.window.ONOMATOPOEIA_DATA;
}

const vocabByWord = new Map();
for (const source of common.loadSources()) {
  for (const item of source.items) {
    if (!vocabByWord.has(item.word)) vocabByWord.set(item.word, []);
    vocabByWord.get(item.word).push(Object.assign({ file: source.file }, item));
  }
}
const syllabusByWord = new Map();
for (const row of syllabus) {
  if (!syllabusByWord.has(row.word)) syllabusByWord.set(row.word, []);
  syllabusByWord.get(row.word).push(row);
}

const ONOM = /\(onom\.?\)|onomatopoeia|\bsound of\b|\(interj|interjection|exclamation/i;
const fold = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC').toLowerCase().replace(/ü/g, 'v');
const toneless = key => String(key || '').replace(/[1-5]/g, '').replace(/u:/g, 'v');
const level = l => (l === '7-9' ? 'HSK7-9' : 'HSK' + l);
const rank = l => (LEVELS.indexOf(l) === -1 ? 99 : LEVELS.indexOf(l));

function numericOf(pinyin, word) {
  try { return Pinyin.toNumeric(String(pinyin).replace(/[\s\-'’]/g, ''), word); } catch (e) { return ''; }
}

// Main CC-CEDICT entry: same reading as the draft first, then same letters, then an onomatopoeic sense.
function cedictEntry(word, draftKey) {
  const list = (cedict.get(word) || []).filter(e => !/^[A-Z]/.test(e.pinyin));
  if (!list.length) return null;
  return list.find(e => e.key === draftKey)
    || list.find(e => toneless(e.key) === toneless(draftKey))
    || list.find(e => e.senses.some(s => ONOM.test(s)))
    || list[0];
}

// Vocabulary entry and syllabus row of the same reading (homographs: 哼 hng is not the verb hēng).
function vocabEntry(word, draftKey) {
  const list = vocabByWord.get(word) || [];
  if (!list.length) return null;
  if (!draftKey) return list.find(e => /Interjektion|Lautmalerei/.test(e.type)) || list[0];
  return list.find(e => numericOf(e.pinyin, word) === draftKey)
    || list.find(e => toneless(numericOf(e.pinyin, word)) === toneless(draftKey))
    || null;
}
function syllabusRow(word, draftKey) {
  const list = syllabusByWord.get(word) || [];
  if (!list.length) return null;
  if (!draftKey) return list.find(r => /叹|拟声/.test(r.pos || '')) || list[0];
  return list.find(r => toneless(numericOf(r.pinyin, word)) === toneless(draftKey)) || null;
}

function patternOf(word) {
  const c = Array.from(word);
  if (c.length === 1) return 'A';
  if (c.length === 2) return c[0] === c[1] ? 'AA' : 'AB';
  if (c.length === 3) return c[1] === c[2] && c[0] !== c[1] ? 'ABB' : 'Andere';
  if (c.length === 4) {
    if (c[0] === c[1] && c[2] === c[3]) return 'AABB';
    if (c[0] === c[2] && c[1] === c[3]) return 'ABAB';
    if (c[1] === '里' && c[0] === c[2]) return 'A里AB';
    if (c[1] === '里') return 'A里BC';
    if (c[1] === '不') return 'A不BC';
    if (c[2] === c[3]) return 'ABCC';
  }
  return 'Andere';
}

// The word the vivid form is built on (干干净净 → 干净, 绿油油 → 绿, 糊里糊涂 → 糊涂, 冰凉冰凉 → 冰凉).
function baseOf(word, pattern) {
  const c = Array.from(word);
  if (pattern === 'AABB') return c[0] + c[2];
  if (pattern === 'ABAB') return c[0] + c[1];
  if (pattern === 'ABB' || pattern === 'AA') return c[0];
  if (pattern === 'A里AB') return c[2] + c[3];
  if (pattern === 'ABCC') return c[0] + c[1];
  return null;
}
// A base word counts for the level only when it is the adjective (or verb) the form is built on: the A of ABB must be
// an adjective (绿油油 ← 绿, but not 水灵灵 ← 水 or 笑眯眯 ← 笑); AABB/ABAB/A里AB/ABCC take adjectives and verbs
// (摇摇晃晃 ← 摇晃). Lowest HSK level among such vocabulary entries.
const BASE_TYPES = { ABB: ['Adjektiv'], AABB: ['Adjektiv', 'Verb', 'Adverb'], ABAB: ['Adjektiv', 'Verb'], 'A里AB': ['Adjektiv', 'Verb'], ABCC: ['Adjektiv', 'Verb'] };
function baseEntry(word, pattern) {
  const base = baseOf(word, pattern);
  if (!base || base === word || !BASE_TYPES[pattern]) return null;
  return (vocabByWord.get(base) || []).filter(v => BASE_TYPES[pattern].includes(v.type) && profile.levels.includes(v.level))
    .sort((a, b) => rank(a.level) - rank(b.level))[0] || null;
}
function baseAttested(word, pattern) {
  const base = baseOf(word, pattern);
  if (!base || base === word) return null;
  return vocabByWord.has(base) || cedict.has(base) ? base : null;
}
// Grammar points that teach a pattern (the level floor of descriptive forms) and interjections with their own point.
const PATTERN_GRAMMAR = { AABB: 'g:AA、AABB' };
for (const id of Object.values(PATTERN_GRAMMAR)) if (!grammarById.has(id)) throw new Error('Grammar point missing: ' + id);
function interjectionGrammar(word) {
  const g = grammarById.get('g:' + word);
  return g && g.syllabus && g.syllabus.categoryName === '叹词' ? g : null;
}

// Pinyin formatting after GB/T 16159: one word written together; four-syllable forms split two-two with a
// hyphen (AABB qīngqīng-chǔchǔ, A里AB, ABCC), ABAB as two words (bīngliáng bīngliáng); ’ before a vowel-initial
// syllable inside a written unit.
const VOWEL_START = /^[aāáǎàeēéěèoōóǒò]/i;
function joinSyllables(syllables) {
  return syllables.map((s, i) => (i > 0 && VOWEL_START.test(s) ? '’' + s : s)).join('');
}
function formatPinyin(syllables, pattern) {
  if (syllables.length === 4 && pattern === 'ABAB') return joinSyllables(syllables.slice(0, 2)) + ' ' + joinSyllables(syllables.slice(2));
  if (syllables.length === 4) return joinSyllables(syllables.slice(0, 2)) + '-' + joinSyllables(syllables.slice(2));
  return joinSyllables(syllables);
}
function syllablesFromKey(cedictPinyin) {
  return cedictPinyin.split(/\s+/).map(s => Pinyin.toMarked(s.toLowerCase().replace(/u:/g, 'v')));
}
// Splits marked pinyin into one syllable per character; ambiguous runs (ānān = ān·ān, not ā·nān) are cut by the
// characters' CC-CEDICT readings, the general segmenter is the fallback.
const charLetters = new Map();
function lettersOf(ch) {
  if (!charLetters.has(ch)) charLetters.set(ch, new Set((cedict.get(ch) || []).map(e => toneless(e.key))));
  return charLetters.get(ch);
}
function syllablesFromMarked(pinyin, word) {
  const chars = Array.from(word);
  const marked = Array.from(String(pinyin).replace(/[\s\-'’]/g, ''));
  const plain = marked.map(ch => fold(ch));
  const solve = (pos, i) => {
    if (i === chars.length) return pos === marked.length ? [] : null;
    for (let len = Math.min(6, marked.length - pos); len >= 1; len--) {
      if (!lettersOf(chars[i]).has(plain.slice(pos, pos + len).join(''))) continue;
      const rest = solve(pos + len, i + 1);
      if (rest) return [marked.slice(pos, pos + len).join('')].concat(rest);
    }
    return null;
  };
  const byChars = chars.every(ch => lettersOf(ch).size) ? solve(0, 0) : null;
  if (byChars) return byChars;
  try { return Pinyin.segment(marked.join(''), word); } catch (e) { return []; }
}

// ---------------------------------------------------------------------------------------------
// German drafts: typos of the old texts, ASCII umlauts (same rule as audit asciiUmlauts) and Swiss ss → ß.
// ---------------------------------------------------------------------------------------------
const TYPOS = {
  laeessig: 'lässig', laeessiger: 'lässiger', nachlaeessige: 'nachlässige', unablaeessig: 'unablässig', nervoeeses: 'nervöses',
  maeaeh: 'mäh', Umherspaaehen: 'Umherspähen', umherspaaehen: 'umherspähen', umherspaeaehend: 'umherspähend',
  laeeutete: 'läutete', laemhende: 'lähmende', beruemhten: 'berühmten', beruemhtes: 'berühmtes', Klassentueer: 'Klassentür',
  froehllich: 'fröhlich', froehllichem: 'fröhlichem', gruebbelt: 'grübelt', unhoefllich: 'unhöflich', ungemuelich: 'ungemütlich',
  ungemueliches: 'ungemütliches', schuechernes: 'schüchternes', spitzbuebeisch: 'spitzbübisch', klaeglichlich: 'kläglich',
  Stoekelschuhe: 'Stöckelschuhe', plueeschig: 'plüschig', bluehenes: 'blühendes', herueberund: 'herüber und',
  Kaltegefuehl: 'Kältegefühl', hoehes: 'hohes', duessere: 'düstere', duesster: 'düster', duessteren: 'düsteren',
  Kinderbüechern: 'Kinderbüchern', gemuechlich: 'gemächlich', Pandabaer: 'Pandabär',
  ueberfuellte: 'überfüllte', Voegelfluegel: 'Vogelflügel', Voegelfluegeln: 'Vogelflügeln', Saeurlichkeit: 'Säuerlichkeit', saeurlichen: 'säuerlichen'
};
const SHARP_S = [
  [/\b([Gg])ross/g, '$1roß'], [/([Hh])eiss/g, '$1eiß'], [/([Ss])trasse/g, '$1traße'], [/([Ww])eiss/g, '$1eiß'], [/süss/g, 'süß'],
  [/([Ää])usser/g, '$1ußer'], [/\b([Aa])usser(halb)?\b/g, '$1ußer$2'], [/\b([Aa])ussen\b/g, '$1ußen'], [/\b([Dd])raussen\b/g, '$1raußen'],
  [/([Ff])liess/g, '$1ließ'], [/Füsse/g, 'Füße'], [/Fusses/g, 'Fußes'], [/füssig/g, 'füßig'], [/mässig/g, 'mäßig'], [/gemäss\b/g, 'gemäß'],
  [/([Bb])eiss/g, '$1eiß'], [/([Rr])eiss/g, '$1eiß'], [/([Gg])leiss/g, '$1leiß'], [/\b([Ss])toss/g, '$1toß'], [/([a-z])stoss/g, '$1stoß'],
  [/Stösse/g, 'Stöße'], [/stösse/g, 'stöße'], [/\bliess\b/g, 'ließ'], [/Grösse/g, 'Größe'], [/grüss/g, 'grüß'],
  [/Gliedmasse/g, 'Gliedmaße'], [/\bsass\b/g, 'saß'], [/\bass\b/g, 'aß'], [/\bassen\b/g, 'aßen']
];
// Real ue/ae spellings the umlaut rule cannot tell apart (also exempt in audit-onomatopoeia.cjs).
const UMLAUT_KEEP = new Set(['Doraemon', 'wohltuende']);
function convertWord(word) {
  return word.replace(/(.?)(ae|oe|ue|Ae|Oe|Ue|AE|OE|UE)(.?.?)/g, (all, before, pair, after) => {
    const p = pair.toLowerCase();
    const b = before.toLowerCase(), a = after.toLowerCase();
    if (p === 'ue' && 'aeäqyxj'.includes(b || '-')) return all;
    if (p === 'ue' && a.startsWith('ll')) return all;
    if (p === 'ae' && b === 'h' && a === 'l') return all;
    const map = { ae: 'ä', oe: 'ö', ue: 'ü' };
    const out = pair[0] === pair[0].toUpperCase() ? map[p].toUpperCase() : map[p];
    return before + out + after;
  });
}
function fixGerman(text) {
  if (typeof text !== 'string' || !text) return text;
  let out = text.replace(/[A-Za-zÄÖÜäöüß]+/g, w => (TYPOS[w] !== undefined ? TYPOS[w] : w));
  for (const word of new Set(asciiUmlauts(out))) {
    if (UMLAUT_KEEP.has(word)) continue;
    out = out.replace(new RegExp('(^|[^A-Za-zÄÖÜäöüß])' + word + '(?=$|[^A-Za-zÄÖÜäöüß])', 'g'), (m, pre) => pre + convertWord(word));
  }
  for (const [re, to] of SHARP_S) out = out.replace(re, to);
  return out;
}

// ---------------------------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------------------------
function parseTable(text, columns) {
  return text.trim().split(/\r?\n/).filter(Boolean).map(line => {
    const parts = line.split('|');
    const row = {};
    columns.forEach((name, i) => { row[name] = (parts[i] || '').trim(); });
    return row;
  });
}

const old = loadOld();
const decisions = new Map(parseTable(DECISIONS, ['word', 'code', 'reason', 'pinyin']).map(r => [r.word, r]));
const candidates = parseTable(CANDIDATES, ['word', 'code', 'meaning', 'reason', 'pinyin']);
const problems = [];

for (const item of old) if (!decisions.has(item.word)) problems.push('No decision for ' + item.word);
for (const word of decisions.keys()) if (!old.some(item => item.word === word)) problems.push('Decision for unknown word ' + word);

function evidenceFor(word, draftKey) {
  return { ce: cedictEntry(word, draftKey), ve: vocabEntry(word, draftKey), sy: syllabusRow(word, draftKey) };
}
function evidenceText(ev) {
  const parts = [];
  parts.push(ev.ce ? 'CEDICT [' + ev.ce.pinyin + '] ' + ev.ce.senses.filter(s => !/^CL:/.test(s)).slice(0, 2).join('; ').slice(0, 90) : 'not in CEDICT');
  if (ev.sy) parts.push('Syllabus ' + level(ev.sy.level) + ' ' + (ev.sy.pos || '–'));
  if (ev.ve) parts.push('Vokabel ' + ev.ve.id + ' (' + ev.ve.level + ', ' + ev.ve.type + ')');
  return parts.join(' · ');
}
function defaultReason(code, word, pattern, ev) {
  const kind = code[0];
  const base = baseAttested(word, pattern);
  if (kind === 'S' || kind === 'A') {
    if (ev.ce) return (ev.ce.senses.some(s => ONOM.test(s)) ? 'sound word, CEDICT (onom.)' : 'sound word, CEDICT: ' + ev.ce.senses[0]);
    return base ? pattern + ' of ' + base + ' (attested), productive' : null;
  }
  if (kind === 'D') {
    if (ev.ce) return 'vivid ' + pattern + ' form, CEDICT: ' + ev.ce.senses[0];
    return base ? 'productive ' + pattern + ' of ' + base : null;
  }
  if (kind === 'M') return MOVE_REASONS[code.split(':')[1]];
  return null;
}

const entries = [];
const byWord = new Map();
const rows = [];         // report rows for the 389 old entries
const removed = {};      // old word -> vocab id (bookmarks move to the vocabulary entry)
const pinyinDiffs = [];
const droppedExamples = [];

function makeEntry(source, opts) {
  const word = source.word;
  const pattern = patternOf(word);
  const draftKey = numericOf(source.pinyin || opts.pinyin || '', word) || (opts.pinyin ? opts.pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '');
  const ev = evidenceFor(word, draftKey);
  // Reading: override > syllabus > vocabulary entry > CC-CEDICT (same letters) > draft.
  let syllables = null; let from = 'draft';
  if (opts.pinyin) { syllables = syllablesFromMarked(opts.pinyin, word); from = 'override'; }
  else if (ev.sy) { syllables = syllablesFromMarked(ev.sy.pinyin, word); from = 'syllabus'; }
  else if (ev.ve) { syllables = syllablesFromMarked(ev.ve.pinyin, word); from = 'vocab'; }
  else if (ev.ce && (!draftKey || toneless(ev.ce.key) === toneless(draftKey))) { syllables = syllablesFromKey(ev.ce.pinyin); from = 'CEDICT'; }
  if (!syllables || syllables.length !== Array.from(word).length) {
    const fallback = source.pinyin ? syllablesFromMarked(source.pinyin, word) : [];
    if (fallback.length === Array.from(word).length) { syllables = fallback; from = 'draft'; }
    else if (!syllables || !syllables.length) { syllables = [String(opts.pinyin || source.pinyin || '')]; problems.push('Pinyin not segmentable: ' + word + ' ' + source.pinyin); }
  }
  const pinyin = opts.pinyin && syllables.length === 1 ? opts.pinyin : formatPinyin(syllables, pattern);
  if (source.pinyin && ev.ce && ev.ce.key !== draftKey) {
    pinyinDiffs.push({ word, draft: source.pinyin, cedict: ev.ce.pinyin, proposed: pinyin, from, kind: toneless(ev.ce.key) !== toneless(draftKey) ? 'letters' : (/5/.test(ev.ce.key) && !/5/.test(draftKey) ? 'neutral tone' : 'tone') });
  } else if (source.pinyin && fold(pinyin).replace(/[\s\-’']/g, '') !== fold(source.pinyin).replace(/[\s\-’']/g, '') && from !== 'draft') {
    pinyinDiffs.push({ word, draft: source.pinyin, cedict: ev.ce ? ev.ce.pinyin : '–', proposed: pinyin, from, kind: 'source ' + from });
  }
  const traditional = ev.ce ? ev.ce.traditional : (ev.ve && ev.ve.traditional) || toTraditional(word);

  // Level (settled 2026-10-11): syllabus > vocabulary HSK level > base word (descriptive forms; floor: the grammar
  // point of the pattern) > Zusatz.
  const base = opts.kind === 'Beschreibung' ? baseEntry(word, pattern) : null;
  const patternGrammar = opts.kind === 'Beschreibung' && PATTERN_GRAMMAR[pattern] ? grammarById.get(PATTERN_GRAMMAR[pattern]) : null;
  let lvl = profile.extraLevel; let levelSource = 'zusatz';
  if (ev.sy) { lvl = level(ev.sy.level); levelSource = 'syllabus'; }
  else if (ev.ve && profile.levels.includes(ev.ve.level)) { lvl = ev.ve.level; levelSource = 'vocab'; }
  else if (base) {
    lvl = base.level; levelSource = 'base';
    if (patternGrammar && rank(patternGrammar.level) > rank(lvl)) { lvl = patternGrammar.level; levelSource = 'grammar'; }
  }

  const variants = [];
  const examples = (source.examples || []).filter(ex => {
    const ok = ex && typeof ex.chinese === 'string' && ex.chinese.includes(word);
    if (!ok) droppedExamples.push({ word, chinese: ex && ex.chinese });
    return ok;
  }).map(ex => ({ chinese: ex.chinese, pinyin: ex.pinyin, german: fixGerman(ex.german) }));
  const entry = {
    id: 'o:' + word,
    word,
    pinyin,
    traditional,
    level: lvl,
    levelSource,
    kind: opts.kind,
    category: opts.category,
    pattern,
    meaning: fixGerman(opts.meaning !== undefined ? opts.meaning : source.meaning || ''),
    usage: fixGerman(source.usage || ''),
    explanation: fixGerman(source.explanation || ''),
    examples,
    related: (source.related || []).slice(),
    notes: fixGerman(source.notes || '')
  };
  if (ev.ve) entry.vocabId = ev.ve.id;
  if (base) entry.base = { word: base.word, vocabId: base.id, level: base.level };
  const grammar = patternGrammar || (opts.kind === 'Ausruf' ? interjectionGrammar(word) : null);
  if (grammar) entry.grammarId = grammar.id;
  entry.variants = variants;
  entry.legacyIds = opts.legacy ? [word] : [];
  entry.meaningStatus = 'draft';
  if (opts.candidate) entry.candidate = true;
  entry.evidence = { cedict: ev.ce ? ev.ce.traditional + ' ' + ev.ce.simplified + ' [' + ev.ce.pinyin + ']' : null };
  if (ev.sy) entry.evidence.syllabus = { no: ev.sy.no, level: ev.sy.level, pos: ev.sy.pos };
  return { entry, ev };
}

// 1. Existing entries
old.forEach((item, index) => {
  const d = decisions.get(item.word);
  if (!d) return;
  const [kindCode, arg] = d.code.split(':');
  const pattern = patternOf(item.word);
  const draftKey = numericOf(item.pinyin, item.word);
  const ev = evidenceFor(item.word, draftKey);
  let reason = d.reason || defaultReason(d.code, item.word, pattern, ev);
  if (!reason) { problems.push('No reason for ' + item.word + ' (' + d.code + ')'); reason = '?'; }
  const row = { index, word: item.word, pinyin: item.pinyin, oldType: item.type || item.category, code: d.code, reason, evidence: evidenceText(ev) };
  if (kindCode === 'S' || kindCode === 'A' || kindCode === 'D') {
    const kind = KINDS[kindCode];
    const category = kindCode === 'A' ? 'Ausrufe' : arg;
    if (!CATEGORIES[category]) problems.push('Unknown category ' + category + ' for ' + item.word);
    const { entry } = makeEntry(item, { kind, category, legacy: true, pinyin: d.pinyin || null });
    entries.push(entry); byWord.set(entry.word, entry);
    row.decision = kindCode === 'D' ? 'keep-descriptive' : 'keep-sound';
    row.target = kind + ' · ' + category + ' · ' + entry.pattern + ' · ' + entry.level + ' (' + entry.levelSource + ')';
  } else if (kindCode === 'M') {
    const ve = ev.ve;
    row.moveType = arg;
    row.vocabId = ve ? ve.id : null;
    row.grammarId = MOVE_GRAMMAR[arg] || null;
    if (ve) {
      row.decision = 'move';
      row.target = ve.id + ' (' + ve.level + ' ' + ve.type + ')';
      removed[item.word] = ve.id;
    } else if (row.grammarId) {
      row.decision = 'move';
      row.target = 'Grammatik ' + row.grammarId + ', no vocab entry';
      const baseVe = arg === 'R' ? vocabEntry(Array.from(item.word)[0], '') : null;
      if (baseVe) { removed[item.word] = baseVe.id; row.target = 'base ' + baseVe.word + ' → ' + baseVe.id + ' (' + baseVe.level + '); Grammatik ' + row.grammarId; }
    } else {
      // Settled 2026-10-11: moved words without any vocabulary/chengyu entry or grammar point are dropped.
      row.decision = 'drop';
      row.droppedMove = true;
      row.target = '–';
      row.reason = 'moved word without vocab/chengyu entry (' + reason + ') — dropped';
    }
  } else if (kindCode === 'X') {
    row.decision = 'drop';
    row.target = '–';
  } else if (kindCode === 'G') {
    row.decision = 'merge';
    row.mergeInto = arg;
    row.target = 'o:' + arg;
  } else problems.push('Bad code ' + d.code + ' for ' + item.word);
  rows.push(row);
});

// 2. Candidates
const candidateRows = [];
for (const c of candidates) {
  if (byWord.has(c.word)) { problems.push('Candidate already kept: ' + c.word); continue; }
  const [kindCode, arg] = c.code.split(':');
  const kind = KINDS[kindCode];
  const category = kindCode === 'A' ? 'Ausrufe' : arg;
  if (!CATEGORIES[category]) problems.push('Unknown category ' + category + ' for candidate ' + c.word);
  const cKey = c.pinyin ? numericOf(c.pinyin, c.word) || c.pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
  const ce = cedictEntry(c.word, cKey);
  const ve = vocabEntry(c.word, cKey);
  const sy = syllabusRow(c.word, cKey);
  if (!ce && !sy && !baseAttested(c.word, patternOf(c.word))) problems.push('Candidate without evidence: ' + c.word);
  const meaning = c.meaning || (ve ? ve.meaning : '');
  if (!meaning) problems.push('Candidate without meaning: ' + c.word);
  const { entry, ev } = makeEntry({ word: c.word, pinyin: '' }, { kind, category, meaning, pinyin: c.pinyin || null, legacy: false, candidate: true });
  entries.push(entry); byWord.set(entry.word, entry);
  candidateRows.push({ word: c.word, pinyin: entry.pinyin, kind, category, pattern: entry.pattern, level: entry.level + ' (' + entry.levelSource + ')', meaning, reason: c.reason, evidence: evidenceText(ev) });
}

// 3. Merges: legacy ids and variants on the target, related lists follow the merge
const mergeTarget = new Map();
for (const row of rows) {
  if (row.decision !== 'merge') continue;
  const target = byWord.get(row.mergeInto);
  if (!target) { problems.push('Merge target missing: ' + row.word + ' → ' + row.mergeInto); continue; }
  mergeTarget.set(row.word, target.word);
  target.legacyIds.push(row.word);
  if (/variant/.test(row.reason)) target.variants.push(row.word);
}
let relatedDropped = 0;
for (const entry of entries) {
  const ids = [];
  for (const word of entry.related) {
    const w = mergeTarget.get(word) || word;
    if (w === entry.word) continue;
    if (byWord.has(w)) { const id = 'o:' + w; if (ids.indexOf(id) === -1) ids.push(id); }
    else relatedDropped++;
  }
  entry.related = ids;
}

// Order: category, kind, pattern, pinyin (the default „Nach Kategorie“ order is the file order).
const catOrder = Object.keys(CATEGORIES);
entries.sort((a, b) => catOrder.indexOf(a.category) - catOrder.indexOf(b.category)
  || ['Ausruf', 'Laut', 'Beschreibung'].indexOf(a.kind) - ['Ausruf', 'Laut', 'Beschreibung'].indexOf(b.kind)
  || PATTERN_ORDER.indexOf(a.pattern) - PATTERN_ORDER.indexOf(b.pattern)
  || fold(a.pinyin).localeCompare(fold(b.pinyin)));
for (const e of entries) {
  if (!e.legacyIds.length) delete e.legacyIds;
  if (!e.variants.length) delete e.variants;
  const german = [e.meaning, e.usage, e.explanation, e.notes, ...e.examples.map(x => x.german)];
  const left = german.flatMap(asciiUmlauts).filter(w => !UMLAUT_KEEP.has(w));
  if (left.length) problems.push('ASCII umlauts left in ' + e.id + ': ' + left.join(', '));
}

// ---------------------------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------------------------
const esc = s => String(s === undefined || s === null ? '' : s).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
const count = (list, key) => list.reduce((m, x) => { const k = typeof key === 'function' ? key(x) : x[key]; m[k] = (m[k] || 0) + 1; return m; }, {});
const table = (obj, order) => (order || Object.keys(obj)).filter(k => obj[k]).map(k => '| ' + k + ' | ' + obj[k] + ' |').join('\n');

const decisionCounts = count(rows, 'decision');
const moveRows = rows.filter(r => r.decision === 'move');
const droppedMoves = rows.filter(r => r.droppedMove);

const out = [];
out.push('# Lautmalerei rebuild — build report');
out.push('');
out.push('Generated by `node scripts/onomatopoeia/build.cjs`. Sources: ' + OLD_FILES.join(', ') + ' at ' + OLD_REF + ' (' + old.length + ' entries), CC-CEDICT, HSK 2025 syllabus (scripts/hsk2025/vocabulary.json), vocabulary/chengyu/redewendungen sources, grammar points.');
out.push('');
out.push('Scope (user decision 2026-10-11): sound words (拟声词) and interjections (叹词) plus descriptive doubled forms (ABB, AABB, A里AB, ABAB …), the counterpart of Nihongo\'s giongo/gitaigo. Idioms and plain verbs/adjectives leave the section (Vokabeln/Chengyu/Grammatik).');
out.push('');
out.push('Settled 2026-10-11: levels (syllabus > vocab > base word with the grammar floor of the pattern > Zusatz); ABCC/AABC set phrases move (可怜巴巴, 黑咕隆咚 stay); neutral tones follow CC-CEDICT where the form is listed, productive forms keep full tones; moved words without any entry are dropped; the 64 candidates and the category Sinne are kept.');
out.push('');
if (problems.length) { out.push('## Problems'); out.push(''); problems.forEach(p => out.push('- ' + p)); out.push(''); }
out.push('## Summary');
out.push('');
out.push('| | count |');
out.push('|---|---|');
out.push('| old entries | ' + old.length + ' |');
out.push(table(decisionCounts, ['keep-sound', 'keep-descriptive', 'move', 'merge', 'drop']));
out.push('| candidates added | ' + candidateRows.length + ' |');
out.push('| **section total** | **' + entries.length + '** |');
out.push('');
out.push('Moves: ' + moveRows.length + ' (' + moveRows.filter(r => r.vocabId).length + ' with a vocabulary/chengyu entry, ' + moveRows.filter(r => !r.vocabId).length + ' to a grammar point). Drops: ' + (decisionCounts.drop || 0) + ' (' + droppedMoves.length + ' moved words without any entry, ' + ((decisionCounts.drop || 0) - droppedMoves.length) + ' unattested forms).');
out.push('');
out.push('### By kind');
out.push('');
out.push('| kind | count |'); out.push('|---|---|');
out.push(table(count(entries, 'kind'), ['Laut', 'Ausruf', 'Beschreibung']));
out.push('');
out.push('### By category');
out.push('');
out.push('| key | label | Laut | Ausruf | Beschreibung | total |'); out.push('|---|---|---|---|---|---|');
for (const key of catOrder) {
  const list = entries.filter(e => e.category === key);
  out.push('| ' + key + ' | ' + CATEGORIES[key] + ' | ' + list.filter(e => e.kind === 'Laut').length + ' | ' + list.filter(e => e.kind === 'Ausruf').length + ' | ' + list.filter(e => e.kind === 'Beschreibung').length + ' | ' + list.length + ' |');
}
out.push('');
out.push('### By pattern');
out.push('');
out.push('| pattern | count |'); out.push('|---|---|');
out.push(table(count(entries, 'pattern'), PATTERN_ORDER));
out.push('');
out.push('### By level and level source');
out.push('');
const sources = ['syllabus', 'vocab', 'base', 'grammar', 'zusatz'];
out.push('| level | ' + sources.join(' | ') + ' | total |'); out.push('|---|' + sources.map(() => '---').join('|') + '|---|');
for (const l of LEVELS) {
  const list = entries.filter(e => e.level === l);
  if (list.length) out.push('| ' + l + ' | ' + sources.map(s => list.filter(e => e.levelSource === s).length || '').join(' | ') + ' | ' + list.length + ' |');
}
out.push('');
out.push('`base`: the base word\'s lowest HSK level (ABB: adjective A; AABB/ABAB/A里AB/ABCC: adjective or verb). `grammar`: raised to the level of the grammar point of the pattern (AABB → g:AA、AABB, ' + grammarById.get('g:AA、AABB').level + '); the syllabus has no grammar point for ABB, ABAB of adjectives or A里AB.');
out.push('');
out.push('Texts: all entries are drafts (meaningStatus `draft`) for the text campaign; ' + entries.filter(e => e.candidate).length + ' new entries have a short gloss only. ASCII umlauts and ss spellings of the old texts were converted; ' + droppedExamples.length + ' old examples without the headword were dropped. Related links: ' + entries.reduce((n, e) => n + e.related.length, 0) + ' kept as ids, ' + relatedDropped + ' dropped (pointed at moved/dropped entries).');
out.push('');

out.push('## Bookmarks and deep links');
out.push('');
out.push('- Ids are `o:<word>`. Kept entries carry `legacyIds: [<old word>]`, merge targets also carry the merged words (o:扑通 ← 噗通). app.js `migrateLegacyBookmarks` rewrites old bookmark keys on load; workspace.js `findById` resolves `legacyIds`, so `#onomatopoeia/<word>` links keep working.');
out.push('- `ONOMATOPOEIA_REMOVED` (' + Object.keys(removed).length + ' rows: moved words → their vocab entry, plain AA adverbs → the base word\'s entry) feeds the shared `migrateRemovedBookmarks(\'onomatopoeia\', …)`.');
out.push('- Dropped words (' + (decisionCounts.drop || 0) + ') and moves to a grammar point without a vocabulary entry lose their bookmarks.');
out.push('');

out.push('## Pinyin disagreements with CC-CEDICT (old draft readings)');
out.push('');
out.push('Differences: ' + Object.entries(count(pinyinDiffs, 'kind')).map(([k, v]) => k + ' ' + v).join(', ') + '. The reading follows override > syllabus > vocab > CEDICT (same letters) > draft; overrides restore the sound-word reading where CEDICT lists the verb reading.');
out.push('');
out.push('| word | draft | CEDICT | used | source | difference |'); out.push('|---|---|---|---|---|---|');
for (const d of pinyinDiffs.sort((a, b) => a.kind.localeCompare(b.kind))) {
  const decision = rows.find(r => r.word === d.word);
  out.push('| ' + esc(d.word) + (decision && !/keep/.test(decision.decision) ? ' (' + decision.decision + ')' : '') + ' | ' + esc(d.draft) + ' | ' + esc(d.cedict) + ' | ' + esc(d.proposed) + ' | ' + d.from + ' | ' + d.kind + ' |');
}
out.push('');

out.push('## Moved entries (Vokabeln/Chengyu/Grammatik)');
out.push('');
out.push('| word | type | entry | reason |'); out.push('|---|---|---|---|');
for (const r of moveRows) out.push('| ' + esc(r.word) + ' | ' + r.moveType + ' | ' + esc(r.target) + ' | ' + esc(r.reason) + ' |');
out.push('');
out.push('## Moved words without any entry — dropped (' + droppedMoves.length + ')');
out.push('');
out.push('Candidates for vocab-zusatz/chengyu if they are wanted later:');
out.push('');
out.push('| word | old pinyin | type | why it left the section |'); out.push('|---|---|---|---|');
for (const r of droppedMoves) out.push('| ' + esc(r.word) + ' | ' + esc(r.pinyin) + ' | ' + r.moveType + ' | ' + esc(MOVE_REASONS[r.moveType]) + ' |');
out.push('');

out.push('## Candidates added (' + candidateRows.length + ')');
out.push('');
out.push('| word | pinyin | kind | category | pattern | level | meaning (draft) | reason | evidence |'); out.push('|---|---|---|---|---|---|---|---|---|');
for (const c of candidateRows) out.push('| ' + [c.word, c.pinyin, c.kind, c.category, c.pattern, c.level, c.meaning, c.reason, c.evidence].map(esc).join(' | ') + ' |');
out.push('');

out.push('## Full classification of the ' + old.length + ' old entries');
out.push('');
out.push('`#` = position in the old concatenated data (0–' + (old.length - 1) + '). Target: kind · category · pattern · level (source) for kept entries, the surviving id for merges, the vocabulary entry for moves.');
out.push('');
out.push('| # | word | old pinyin | old type | decision | target | reason | evidence |'); out.push('|---|---|---|---|---|---|---|---|');
for (const r of rows) out.push('| ' + [r.index, r.word, r.pinyin, r.oldType, r.decision, r.target, r.reason, r.evidence].map(esc).join(' | ') + ' |');
out.push('');

out.push('## Section (' + entries.length + ' entries)');
out.push('');
for (const key of catOrder) {
  const list = entries.filter(e => e.category === key);
  out.push('- **' + CATEGORIES[key] + '** (' + list.length + '): ' + list.map(e => e.word + (e.candidate ? '⁺' : '')).join(' '));
}
out.push('');
out.push('⁺ = new candidate.');
out.push('');

fs.writeFileSync(REPORT, out.join('\n'));
console.log('Report: ' + path.relative(ROOT, REPORT));
console.log('Decisions: ' + JSON.stringify(decisionCounts) + ', candidates ' + candidateRows.length + ', total ' + entries.length);
const previewAt = process.argv.indexOf('--preview');
if (previewAt !== -1) for (const word of process.argv.slice(previewAt + 1)) console.log(JSON.stringify(byWord.get(word) || ('no entry: ' + word), null, 1));
if (problems.length) { console.log(problems.length + ' problem(s):'); problems.forEach(p => console.log('  ' + p)); }

// ---------------------------------------------------------------------------------------------
// Write
// ---------------------------------------------------------------------------------------------
if (WRITE) {
  if (problems.length) { console.error('Refusing --write with open problems.'); process.exit(1); }
  // Campaign content survives a rebuild: entries the Lautmalerei campaign has written (scripts/onomatopoeia/ledger.json)
  // keep their authored fields and meaningStatus from the current data file.
  const section = require('./section.cjs');
  const current = fs.existsSync(path.join(ROOT, OUT_DATA)) ? section.load() : [];
  const kept = require('../enrich/section-campaign.cjs').carryOver(entries, current, path.join(__dirname, 'ledger.json'), section.HASH_FIELDS);
  if (kept) console.log('campaign content kept for ' + kept + ' entries (ledger)');
  const header = '// Zhongwen Explorer Lautmalerei: sound words (拟声词), interjections (叹词) and descriptive forms (ABB, AABB …).\n'
    + '// Built by scripts/onomatopoeia/build.cjs (report: scripts/onomatopoeia/build-report.md); texts are drafts for the\n'
    + '// text campaign. ONOMATOPOEIA_REMOVED: old entries that are vocabulary words, old word → vocab id (bookmarks move).\n';
  fs.writeFileSync(path.join(ROOT, OUT_DATA), header + 'window.ONOMATOPOEIA_DATA = ' + JSON.stringify(entries, null, 2) + ';\n\n'
    + 'window.ONOMATOPOEIA_REMOVED = ' + JSON.stringify(removed, null, 1) + ';\n');
  for (const file of OLD_FILES) if (file !== OUT_DATA) fs.rmSync(path.join(ROOT, file), { force: true });
  const profilePath = path.join(ROOT, 'lang-profile.js');
  const profileText = fs.readFileSync(profilePath, 'utf8');
  const updated = profileText.replace(/onomatopoeia: \[[^\]]*\]/, "onomatopoeia: ['" + OUT_DATA + "']");
  if (updated !== profileText) fs.writeFileSync(profilePath, updated);
  console.log('Wrote ' + OUT_DATA + ' (' + entries.length + ' entries, ' + Object.keys(removed).length + ' removed), deleted the -extra files, lang-profile.js lists ' + OUT_DATA);
}
