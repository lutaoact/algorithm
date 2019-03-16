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

var firstUniqChar2 = function(s) {
  let N = s.length, map = {};
  for (let i = 0; i < N; i++) {
    let c = s[i];
    if (!map[c]) map[s[i]] = [1, i]; //记下count和第一次出现时的索引
    else map[c][0]++;
  }
  let keys = Object.keys(map), index = N;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (map[key][0] > 1) continue;
    if (map[key][1] < index) index = map[key][1];
  }
  return index === N ? -1 : index;
};

firstUniqChar = firstUniqChar2;

let s = "leetcode";
console.log(firstUniqChar(s));

s = 'loveleetcode';
console.log(firstUniqChar(s));

s = "dddccdbba";
console.log(firstUniqChar(s));
