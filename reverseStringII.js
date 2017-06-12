'use strict';

/*
541. Reverse String II

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let N = s.length, doubleK = 2 * k, segment = ~~(N / doubleK), remain = N % doubleK, results = [];
  let start, end;
  for (let i = 0; i < segment; i++) {
    start = i * doubleK, end = start + k;

    for (let j = end - 1; j >= start; j--) {
      results.push(s[j]);
    }

    start = end, end = start + k;
    for (let j = start; j < end; j++) {
      results.push(s[j]);
    }
  }

  if (remain > 0) {
    start = segment * doubleK, end = remain >= k ? start + k : start + remain;
    for (let j = end - 1; j >= start; j--) {
      results.push(s[j]);
    }

    if (remain - k > 0) {
      start = start + k, end = N;
      for (let j = start; j < N; j++) {
        results.push(s[j]);
      }
    }
  }
  return results.join('');
};

let s = "abcdefghijklmnopqrstuvwxyz", k = 3;
//s = "a", k = 3;
console.log(reverseStr(s, k));
