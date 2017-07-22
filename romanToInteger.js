'use strict';

/*
13. Roman to Integer

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

//倒序遍历，碰到大于等于相邻后一个数的都加上，小于相邻后一个数的都减去。一个大数左边最多只会出现一位需要减的数，比如IV，IX

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let N = s.length, result = map[s[N - 1]];
  for (let i = N - 2; i >= 0; i--) {
    if (map[s[i]] >= map[s[i + 1]]) {
      result += map[s[i]];
    } else {
      result -= map[s[i]];
    }
  }
  return result;
};

console.log(romanToInt('MCMLIV'));
console.log(romanToInt('MCMXC'));
console.log(romanToInt('MMXIV'));
console.log(romanToInt('IX'));
console.log(romanToInt('VIII'));
console.log(romanToInt('MMMCMXCIX'));
