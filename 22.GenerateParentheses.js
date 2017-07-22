'use strict';

/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let results = [], tmpList = Array(n * 2), open = 0, close = 0;

  backtrack(tmpList, open, close, n);
  return results;

  function backtrack(tmpList, open, close, max) {
    if (open === max && close === max) {
      return results.push(tmpList.join(''));
    }

    if (open < max) {
      tmpList[open + close] = '(';
//      console.log(1, tmpList.slice(0, open + close + 1));
      backtrack(tmpList, open + 1, close, max);
    }
    if (close < open) {
      tmpList[open + close] = ')';
//      console.log(2, tmpList.slice(0, open + close + 1));
      backtrack(tmpList, open, close + 1, max);
    }
  }
};

console.log(generateParenthesis(4));
