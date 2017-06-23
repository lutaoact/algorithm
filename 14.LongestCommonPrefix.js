'use strict';

/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let N = strs.length, result = '';
  if (N === 0) return '';

  for (let j = 0; strs[0][j]; j++) {
    let c = strs[0][j];
    for (let i = 1; i < N; i++) {
      if (strs[i][j] !== c) return result;
    }
    result += c;
  }
  return result;
};

let strs = ['abc', 'abccc', 'abcbaa'];
strs = [];

console.log(longestCommonPrefix(strs));
