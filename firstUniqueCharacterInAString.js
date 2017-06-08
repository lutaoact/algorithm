'use strict';

/*
387. First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let N = s.length, map = {};
  for (let i = 0; i < N; i++) {
    if (map[s[i]] === undefined) map[s[i]] = 0;
    map[s[i]]++;
  }
  for (let i = 0; i < N; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};

let s = "leetcode";
s = 'loveleetcode';
console.log(firstUniqChar(s));
