// Pinyin utilities: syllable segmentation, tones, numeric/marked conversion and
// search folding. Replaces tone-practice.js (window.ToneUtils stays as an alias).
(function () {
  'use strict';

  // Toneless syllables; v stands for ü. Grouped by initial to keep the list reviewable.
  var SYLLABLE_GROUPS = {
    '': 'a ai an ang ao e ei en eng er o ou',
    b: 'ba bai ban bang bao bei ben beng bi bian biao bie bin bing bo bu',
    p: 'pa pai pan pang pao pei pen peng pi pian piao pie pin ping po pou pu',
    m: 'ma mai man mang mao me mei men meng mi mian miao mie min ming miu mo mou mu',
    f: 'fa fan fang fei fen feng fo fou fu',
    d: 'da dai dan dang dao de dei den deng di dia dian diao die ding diu dong dou du duan dui dun duo',
    t: 'ta tai tan tang tao te tei teng ti tian tiao tie ting tong tou tu tuan tui tun tuo',
    n: 'na nai nan nang nao ne nei nen neng ni nian niang niao nie nin ning niu nong nou nu nuan nun nuo nv nve',
    l: 'la lai lan lang lao le lei leng li lia lian liang liao lie lin ling liu lo long lou lu luan lun luo lv lve',
    g: 'ga gai gan gang gao ge gei gen geng gong gou gu gua guai guan guang gui gun guo',
    k: 'ka kai kan kang kao ke kei ken keng kong kou ku kua kuai kuan kuang kui kun kuo',
    h: 'ha hai han hang hao he hei hen heng hong hou hu hua huai huan huang hui hun huo',
    j: 'ji jia jian jiang jiao jie jin jing jiong jiu ju juan jue jun',
    q: 'qi qia qian qiang qiao qie qin qing qiong qiu qu quan que qun',
    x: 'xi xia xian xiang xiao xie xin xing xiong xiu xu xuan xue xun',
    zh: 'zha zhai zhan zhang zhao zhe zhei zhen zheng zhi zhong zhou zhu zhua zhuai zhuan zhuang zhui zhun zhuo',
    ch: 'cha chai chan chang chao che chen cheng chi chong chou chu chua chuai chuan chuang chui chun chuo',
    sh: 'sha shai shan shang shao she shei shen sheng shi shou shu shua shuai shuan shuang shui shun shuo',
    r: 'ran rang rao re ren reng ri rong rou ru rua ruan rui run ruo',
    z: 'za zai zan zang zao ze zei zen zeng zi zong zou zu zuan zui zun zuo',
    c: 'ca cai can cang cao ce cen ceng ci cong cou cu cuan cui cun cuo',
    s: 'sa sai san sang sao se sen seng si song sou su suan sui sun suo',
    y: 'ya yan yang yao ye yi yin ying yo yong you yu yuan yue yun',
    w: 'wa wai wan wang wei wen weng wo wu'
  };
  var SYLLABLES = {};
  Object.keys(SYLLABLE_GROUPS).forEach(function (key) {
    SYLLABLE_GROUPS[key].split(' ').forEach(function (syllable) { SYLLABLES[syllable] = true; });
  });
  // Interjections (嗯 ng, 呣 m) only stand alone; inside words they would split xian into xia+n.
  var INTERJECTIONS = { m: true, n: true, ng: true, hm: true, hng: true };
  var MAX_SYLLABLE = 6;
  // Erhua: 儿 written as a bare r after the preceding syllable (一点儿 yīdiǎnr).
  var ERHUA = 'r';

  var MARKED = {
    a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', v: 'ǖǘǚǜ'
  };
  var TONE_OF_MARK = {};
  Object.keys(MARKED).forEach(function (base) {
    for (var t = 0; t < 4; t++) TONE_OF_MARK[MARKED[base].charAt(t)] = { base: base, tone: t + 1 };
  });

  // Base letter of one pinyin character: tone marks removed, ü (any tone) as v.
  function baseLetter(ch) {
    var marked = TONE_OF_MARK[ch] || TONE_OF_MARK[ch.toLowerCase()];
    if (marked) return marked.base;
    var lower = ch.toLowerCase();
    if (lower === 'ü') return 'v';
    if (lower === 'ê') return 'e';
    return /[a-z]/.test(lower) ? lower : '';
  }

  function countHan(text) {
    var count = 0;
    for (var i = 0; i < (text || '').length; i++) {
      var code = text.charCodeAt(i);
      if ((code >= 0x3400 && code <= 0x9FFF) || (code >= 0xF900 && code <= 0xFAFF)) count++;
    }
    return count;
  }

  // Splits one letter run into syllables. Returns for each reachable syllable count the
  // segmentation with the fewest erhua r pieces (nǚér is nǚ·ér, not nüe·r), then the one
  // that prefers long syllables first (deterministic tie-break). Pinyin spelling marks a vowel-initial
  // syllable inside a word with an apostrophe (Xī'ān), so without one dàngāo is dàn·gāo, not dàng·āo;
  // such splits cost 2, a bare erhua r costs 3 (nǚér, a common misspelling of nǚ'ér, stays nǚ·ér).
  function segmentRun(base) {
    var n = base.length;
    // best[i]: map count -> { cuts: cut positions for base.slice(i), cost: penalty of the split }
    var best = new Array(n + 1);
    best[n] = { 0: { cuts: [], cost: 0 } };
    for (var i = n - 1; i >= 0; i--) {
      var options = {};
      for (var len = Math.min(MAX_SYLLABLE, n - i); len >= 1; len--) {
        var piece = base.substr(i, len);
        var isErhua = !SYLLABLES[piece] && piece === ERHUA && i > 0;
        var valid = SYLLABLES[piece] || isErhua || (INTERJECTIONS[piece] && i === 0 && len === n);
        if (!valid || !best[i + len]) continue;
        var penalty = (isErhua ? 3 : 0) + (i > 0 && /^[aeo]/.test(piece) ? 2 : 0);
        var tail = best[i + len];
        for (var count in tail) {
          var total = Number(count) + 1;
          var cost = tail[count].cost + penalty;
          if (!options[total] || cost < options[total].cost) {
            options[total] = { cuts: [i + len].concat(tail[count].cuts), cost: cost };
          }
        }
      }
      if (Object.keys(options).length) best[i] = options;
    }
    if (!best[0]) return null;
    var result = {};
    Object.keys(best[0]).forEach(function (count) { result[count] = best[0][count].cuts; });
    return result;
  }

  // Tokenizes into runs of pinyin letters; each run keeps its source positions and an
  // explicit tone digit (ni3hao3) if one follows a syllable.
  function runs(pinyin) {
    var result = [];
    var current = null;
    for (var i = 0; i < pinyin.length; i++) {
      var ch = pinyin.charAt(i);
      var base = baseLetter(ch);
      if (base) {
        if (!current) { current = { start: i, base: '', positions: [] }; result.push(current); }
        current.base += base;
        current.positions.push(i);
        current.end = i + 1;
      } else if (ch === ':' && current && /[uU]/.test(pinyin.charAt(i - 1)) && /[^\s]/.test(pinyin.charAt(i + 1))) {
        // u: notation for ü (nu:3, lu:se4); a colon after a word (yāoqiú: …) is punctuation
        current.base = current.base.slice(0, -1) + 'v';
        current.end = i + 1;
      } else if (/[1-5]/.test(ch) && current) {
        current.end = i + 1;
        current.digitCuts = (current.digitCuts || []).concat([current.base.length]);
      } else {
        current = null;
      }
    }
    return result;
  }

  // Returns syllables as source substrings (tone marks/digits kept, separators dropped).
  // With hanzi, the syllable count is matched to the number of Han characters where possible.
  function segment(pinyin, hanzi) {
    pinyin = pinyin || '';
    var target = hanzi ? countHan(hanzi) : 0;
    var parts = runs(pinyin).map(function (run) {
      // Tone digits are hard boundaries inside a run (ni3hao3).
      var pieces = [];
      var from = 0;
      (run.digitCuts || []).concat([run.base.length]).forEach(function (cut) {
        if (cut > from) pieces.push({ from: from, to: cut });
        from = cut;
      });
      return { run: run, pieces: pieces.map(function (p) {
        return { from: p.from, to: p.to, options: segmentRun(run.base.slice(p.from, p.to)) };
      }) };
    });
    var flat = [];
    parts.forEach(function (part) { part.pieces.forEach(function (piece) { flat.push({ run: part.run, piece: piece }); }); });

    // Choose a count per piece so the total matches the target; otherwise use the fewest syllables.
    var choice = flat.map(function (entry) {
      var counts = entry.piece.options ? Object.keys(entry.piece.options).map(Number).sort(function (a, b) { return a - b; }) : [];
      return { entry: entry, counts: counts, pick: counts.length ? counts[0] : null };
    });
    if (target) fitTarget(choice, target);

    var syllables = [];
    choice.forEach(function (c) {
      var run = c.entry.run, piece = c.entry.piece;
      var cuts = c.pick !== null ? piece.options[c.pick] : [piece.to - piece.from];
      var start = piece.from;
      cuts.forEach(function (cutOffset) {
        var cut = piece.from + cutOffset;
        var sourceStart = run.positions[start];
        var sourceEnd = cut < run.positions.length ? run.positions[cut] : run.end;
        syllables.push(pinyin.slice(sourceStart, sourceEnd).replace(/[\s'’\-]+$/, ''));
        start = cut;
      });
    });
    return syllables;
  }

  function fitTarget(choice, target) {
    // Small dynamic programme over pieces: reachable totals with the picks that achieve them.
    var reach = { 0: [] };
    choice.forEach(function (c, index) {
      var next = {};
      Object.keys(reach).forEach(function (total) {
        (c.counts.length ? c.counts : [1]).forEach(function (count) {
          var sum = Number(total) + count;
          if (sum <= target && !next[sum]) next[sum] = reach[total].concat([count]);
        });
      });
      reach = next;
      if (index === choice.length - 1 && reach[target]) {
        reach[target].forEach(function (count, i) { if (choice[i].counts.length) choice[i].pick = count; });
      }
    });
  }

  function toneOf(syllable) {
    syllable = syllable || '';
    var digit = /([1-5])\s*$/.exec(syllable);
    if (digit) return Number(digit[1]);
    for (var i = 0; i < syllable.length; i++) {
      var marked = TONE_OF_MARK[syllable.charAt(i)] || TONE_OF_MARK[syllable.charAt(i).toLowerCase()];
      if (marked) return marked.tone;
    }
    return 5;
  }

  function plain(syllable) {
    var out = '';
    for (var i = 0; i < syllable.length; i++) out += baseLetter(syllable.charAt(i));
    return out.replace(/u:/g, 'v');
  }

  // nǐhǎo -> ni3hao3 (ü as v, neutral tone as 5).
  function toNumeric(pinyin, hanzi) {
    return segment(pinyin, hanzi).map(function (s) { return plain(s) + toneOf(s); }).join('');
  }

  // ni3hao3 / nv3 -> nǐhǎo / nǚ (standard placement: a/e first, then o in ou, else last vowel).
  function toMarked(numeric) {
    return segment(numeric).map(function (s) {
      var tone = toneOf(s);
      var base = plain(s);
      if (tone === 5) return base.replace(/v/g, 'ü');
      var index = base.search(/[ae]/);
      if (index === -1) index = base.indexOf('ou');
      if (index === -1) {
        for (var i = base.length - 1; i >= 0; i--) if ('iouv'.indexOf(base.charAt(i)) !== -1) { index = i; break; }
      }
      if (index === -1) return base;
      var vowel = base.charAt(index);
      return (base.slice(0, index) + MARKED[vowel].charAt(tone - 1) + base.slice(index + 1)).replace(/v/g, 'ü');
    }).join('');
  }

  // Search folding: ignores tone marks and digits, ü/v/u:, case, spaces, apostrophes, hyphens.
  function fold(text) {
    var out = '';
    text = (text || '').toLowerCase();
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      var base = baseLetter(ch);
      if (base) out += base === 'v' ? 'u' : base;
      else if (!/[\s'’\-:1-5.,;!?。，]/.test(ch)) out += ch;
    }
    return out;
  }

  // German folding: ä=ae, ö=oe, ü=ue, ß=ss (the data mixes both spellings).
  function foldGerman(text) {
    return (text || '').toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  }

  function matchesPinyin(pinyin, query) {
    var q = fold(query);
    return !!q && fold(pinyin).indexOf(q) !== -1;
  }

  function matchesText(text, query) {
    var q = foldGerman(query);
    return !!q && foldGerman(text).indexOf(q) !== -1;
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"]/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
    });
  }

  // Tone-coloured HTML; separators between syllables are kept as written.
  function colorize(pinyin, hanzi) {
    pinyin = pinyin || '';
    var syllables = segment(pinyin, hanzi);
    var html = '';
    var cursor = 0;
    syllables.forEach(function (syllable) {
      var at = pinyin.indexOf(syllable, cursor);
      if (at === -1) return;
      html += escapeHtml(pinyin.slice(cursor, at));
      html += '<span class="tone-' + toneOf(syllable) + '">' + escapeHtml(syllable) + '</span>';
      cursor = at + syllable.length;
    });
    return html + escapeHtml(pinyin.slice(cursor));
  }

  window.Pinyin = {
    segment: segment,
    toneOf: toneOf,
    toNumeric: toNumeric,
    toMarked: toMarked,
    fold: fold,
    foldGerman: foldGerman,
    matchesPinyin: matchesPinyin,
    matchesText: matchesText,
    colorize: colorize,
    countHan: countHan
  };

  // Compatibility for callers of the former tone-practice.js.
  window.ToneUtils = {
    detectTone: toneOf,
    getToneClass: function (tone) { return 'tone-' + (tone || 5); },
    stripTones: function (text) { return (text || '').replace(/[^\s]/g, function (ch) { return baseLetter(ch) === 'v' ? 'ü' : (baseLetter(ch) || ch); }); }
  };
})();
