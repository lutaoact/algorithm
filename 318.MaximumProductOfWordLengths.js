'use strict';

/*
318. Maximum Product of Word Lengths

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".

Example 3:
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let N = words.length, masks = Array(N), max = 0;
  for (let i = 0; i < N; i++) {
    let word = words[i], M = word.length, mask = 0;
    for (let j = 0; j < M; j++) {
      mask |= 1 << (word[j].charCodeAt() - 97);
    }
    masks[i] = mask;

    for (let k = 0; k < i; k++) {
      if ((mask & masks[k]) === 0) {
        max = Math.max(max, M * words[k].length);
      }
    }
  }
  return max;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
