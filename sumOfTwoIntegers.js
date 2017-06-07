'use strict';
/*
371. Sum of Two Integers

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

Credits:
Special thanks to @fujiaozhu for adding this problem and creating all test cases.
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let sum = a ^ b;//位相加的结果等同于 异或
  let carry = a & b;//位相加的进位等同于 与
  while (carry) {
    carry <<= 1;//进位左移1位，用来和sum对齐
    let temp = sum;
    sum ^= carry;
    carry &= temp;
  }
  return sum;
};

console.log(getSum(5, 8));
