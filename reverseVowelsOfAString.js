'use strict';

/*
345. Reverse Vowels of a String

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let N = s.length, a = s.split(''), lo = 0, hi = N - 1;
  let map = {a: 1, A: 1, o: 1, O: 1, i: 1, I: 1, u: 1, U: 1, e: 1, E: 1};

  //快速排序的思想，指针从两头同时推进，找到元音字母，就交换顺序
  while (lo < hi) {
    while (!map[a[lo]] && lo < hi) lo++;
    while (!map[a[hi]] && lo < hi) hi--;

    if (lo < hi) {
      swap(a, lo, hi);
      lo++;
      hi--;
    }
  }
  return a.join('');

  function swap(a, lo, hi) {
    let temp = a[lo];
    a[lo] = a[hi];
    a[hi] = temp;
  }
};

console.log(reverseVowels('leetcode'));
