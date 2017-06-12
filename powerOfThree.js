'use strict';

/*
326. Power of Three

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

/*
 * let maxInt = Math.pow(2, 31) - 1;
 * for (let i = 3, count = 1; i < maxInt; i *= 3, count++) {
 *   console.log(count, i)
 * }
 * 打印出的最后一个数字就是，3的幂中最大的整数1162261467
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let maxIntForPowerOfThree = 1162261467;
  return n > 0 && maxIntForPowerOfThree % n === 0;
};
