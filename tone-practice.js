// ============================================================
// Tone Practice Module for Zhongwen Explorer
// ============================================================
// Mandarin has no verb conjugation, so this module replaces
// the Japanese conjugation engine with tone-related utilities.
(function () {
  'use strict';

  // Tone mark mappings for pinyin
  var TONE_MARKS = {
    'a': ['ā', 'á', 'ǎ', 'à', 'a'],
    'e': ['ē', 'é', 'ě', 'è', 'e'],
    'i': ['ī', 'í', 'ǐ', 'ì', 'i'],
    'o': ['ō', 'ó', 'ǒ', 'ò', 'o'],
    'u': ['ū', 'ú', 'ǔ', 'ù', 'u'],
    'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü']
  };

  // Detect tone from pinyin string (looks for tone marks)
  function detectTone(pinyin) {
    if (!pinyin) return 5;
    var marks1 = 'āēīōūǖ';
    var marks2 = 'áéíóúǘ';
    var marks3 = 'ǎěǐǒǔǚ';
    var marks4 = 'àèìòùǜ';

    for (var i = 0; i < pinyin.length; i++) {
      var ch = pinyin.charAt(i);
      if (marks1.indexOf(ch) !== -1) return 1;
      if (marks2.indexOf(ch) !== -1) return 2;
      if (marks3.indexOf(ch) !== -1) return 3;
      if (marks4.indexOf(ch) !== -1) return 4;
    }
    return 5; // neutral tone
  }

  // Get tone color CSS class
  function getToneClass(tone) {
    return 'tone-' + (tone || 5);
  }

  // Strip tone marks from pinyin to get base form
  function stripTones(pinyin) {
    if (!pinyin) return '';
    var replacements = {
      'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
      'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
      'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
      'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
      'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
      'ǖ': 'ü', 'ǘ': 'ü', 'ǚ': 'ü', 'ǜ': 'ü'
    };
    var result = '';
    for (var i = 0; i < pinyin.length; i++) {
      result += replacements[pinyin.charAt(i)] || pinyin.charAt(i);
    }
    return result;
  }

  // Export
  window.ToneUtils = {
    detectTone: detectTone,
    getToneClass: getToneClass,
    stripTones: stripTones,
    TONE_MARKS: TONE_MARKS
  };
})();
