'use strict';

/*
67. Add Binary

Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1, j = b.length - 1, carry = 0, result = '', sum;
  while (i >= 0 || j >= 0 || carry === 1) {
    sum = Number(a[i--] || 0) + Number(b[j--] || 0) + carry;
    result = sum % 2 + result;
    carry = sum / 2 | 0;
  }
  return result;
};

console.log(addBinary('11', '1'));
