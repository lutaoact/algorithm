'use strict';

/*
3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let sN = s.length, map = {}, counter = 0, begin = 0, end = 0, len = 0;
  while (end < sN) {
    let c = s[end];
    if (map[c] === undefined) {
      map[c] = 1;
    } else {
      map[c]++;
    }
    if (map[c] > 1) counter++;
    end++;

    while (counter > 0) {
      let tmpc = s[begin];
      if (map[tmpc] > 1) counter--;
      map[tmpc]--;

      begin++;
    }
    len = Math.max(len, end - begin);
  }
  return len;
};

//console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('abba'));
