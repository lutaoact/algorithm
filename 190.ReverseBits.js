'use strict';

/*
190. Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0, bit;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    bit = n & 1;
    result += bit;
    n >>>= 1;
  }
  if (result < 0) return Math.pow(2, 32) + result;

  return result;
};

console.log(reverseBits(1));
console.log(reverseBits(0));
console.log(reverseBits(5));
console.log(reverseBits(43261596));
