'use strict';

/*
76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let tN = t.length, map = {}, counter = 0;
  for (let i = 0; i < tN; i++) {
    let c = t[i];
    if (!map[c]) {
      map[c] = 1;
      counter++;
    } else {
      map[c]++;
    }
  }

  let sN = s.length, begin = 0, end = 0, start = 0, len = sN + 1;
  while (end < sN) {
    let c = s[end];
    if (map[c] !== undefined) {
      map[c]--;
      if (map[c] === 0) counter--;
    }
    end++;

    while (counter === 0) {//只要counter为0，则begin到end之间的子字符串就包含t中的所有字符
      if (end - begin < len) {
        len = end - begin;
        start = begin;
      }
      let tmpc = s[begin];
      if (map[tmpc] !== undefined) {
        map[tmpc]++;
        if (map[tmpc] > 0) counter++;
      }
      begin++;
    }
  }
  if (len === sN + 1) return '';
  return s.substr(start, len);
};

let s = "ADOBECODEBANC", t = "ABC"

console.log(minWindow(s, t));
