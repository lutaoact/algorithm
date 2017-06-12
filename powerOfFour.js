'use strict';

/*
342. Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
*/

/*
let maxInt = Math.pow(2, 31) - 1;
for (let i = 4, count = 1; i < maxInt; i *= 4, count++) {
  console.log(count, i)
}//1073741824
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) === num;
};

console.log(isPowerOfFour(1073741824));
