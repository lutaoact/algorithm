'use strict';

/*
459. Repeated Substring Pattern

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let N = s.length;
  for (let i = 1; i < N; i++) {
    if (s === s.substr(i) + s.substr(0, i)) return true;
  }
  return false;
};

repeatedSubstringPattern = function(s) {
  let N = s.length, half = (N / 2) | 0;
  for (let stepLength = 1; stepLength <= half; stepLength++) {
    if (N % stepLength !== 0) continue;

    let str = s.substr(0, stepLength), result = true;
    for (let i = stepLength; i < N; i += stepLength) {
      if (s.substr(i, stepLength) !== str) {
        result = false;
        break;
      }
    }
    if (result) return true;
  }
  return false;
};

console.log(repeatedSubstringPattern('abcabcabcabc'));
console.log(repeatedSubstringPattern('aa'));
