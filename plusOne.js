'use strict';

/*
66. Plus One

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let N = digits.length, carry = (digits[N - 1] + 1) / 10 | 0;
  digits[N - 1] = (digits[N - 1] + 1) % 10;

  for (let i = N - 2; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = sum / 10 | 0;

    if (carry === 0) break;
  }
  if (carry === 1) digits.unshift(1);

  return digits;
};

//console.log(plusOne([0]));
console.log(plusOne([8, 9, 9, 9]));
//console.log(plusOne([9, 9, 8]));
