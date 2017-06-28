'use strict';

/*
168. Excel Sheet Column Title

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let result = '', remain, quotient;
  while (n > 0) {
    remain = n % 26, quotient = n / 26 | 0;
    if (remain === 0) {
      result = 'Z' + result;
      n = quotient - 1;
    } else {
      result = String.fromCharCode(remain + 64) + result;
      n = quotient;
    }
  }
  return result;
};

for (let i = 0; i < 500; i++) {
  console.log(convertToTitle(i));
}
