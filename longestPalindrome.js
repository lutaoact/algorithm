'use strict';

/*
409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let N = s.length, map = {}, result = 0;
  for (let i = 0; i < N; i++) {
    let c = s[i];
    if (map[c] === undefined) map[c] = 0;
    if (++map[c] === 2) {
      result += 2;
      map[c] = 0;
    }
  }
  for (let i in map) {
    if (map[i] === 1) return result + 1;
  }
  return result;
};

console.log(longestPalindrome('acccccdd'));
