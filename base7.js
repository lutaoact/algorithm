'use strict';

/*
504. Base 7

Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
*/

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) return '0';

  return num > 0 ? convert(num) : '-' + convert(-num);

  function convert(n) {
    let results = [];
    while (n) {
      results.unshift(n % 7);
      n = Math.floor(n / 7);
    }
    return results.join('');
  }
};

console.log(convertToBase7(0));
console.log(convertToBase7(100));
console.log(convertToBase7(-100));
