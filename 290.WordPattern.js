'use strict';

/*
290. Word Pattern

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let words = str.split(' '), map1 = {}, map2 = {};
  if (pattern.length !== words.length) return false;

  let N = pattern.length;
  for (let i = 0; i < N; i++) {
    let p = pattern[i], w = words[i];

    if (!map1[p] && !map2[w]) {
      map1[p] = w;
      map2[w] = p;
    } else if (map1[p] && map2[w]) {
      if (map1[p] !== w || map2[w] !== p) return false;
    } else {
      return false;
    }
  }
  return true;
};

let pattern = "abba", str = "dog cat cat dog";
console.log(wordPattern(pattern, str));
pattern = "abba", str = "dog cat cat fish";
console.log(wordPattern(pattern, str));
pattern = "aaaa", str = "dog cat cat dog"
console.log(wordPattern(pattern, str));
pattern = "abba", str = "dog dog dog dog"
console.log(wordPattern(pattern, str));
