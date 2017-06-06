'use strict';

/*
476. Number Complement
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let swap = [1, 0], result = 0;
  for (let i = 0; i < 31; i++) {
    let bit = swap[num & 1];
    if (bit) {
      result += bit << i
    }
    num >>= 1;
    if (num === 1 || num === 0) {
      break;
    }
  }
  return result;
};

console.log(findComplement(1));
//console.log(findComplement(2147483646));
