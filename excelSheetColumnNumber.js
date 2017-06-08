'use strict';

/*
171. Excel Sheet Column Number

Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let N = s.length, result = 0;
  for (let i = 0; i < N; i++) {
    result += (s[i].charCodeAt() - 64) * Math.pow(26, N - 1 - i);
  }
  return result;
};

console.log(titleToNumber('AZ'));
