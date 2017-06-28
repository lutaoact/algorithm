'use strict';

/*
28. Implement strStr()

Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//TODO 等以后牛逼了，用KMP算法再实现一遍
var strStr = function(haystack, needle) {
  let N1 = haystack.length, N2 = needle.length;
  if (N2 === 0) return 0;
  if (N1 < N2 || N1 === 0) return -1;

  let threshold = N1 - N2;
  for (let i = 0; i <= threshold; i++) {
    if (haystack.substr(i, N2) === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr('xabc', 'a'));
console.log(strStr('a', ''));
console.log(strStr('a', 'a'));
console.log(strStr('abccccc', 'c'));
