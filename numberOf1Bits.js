'use strict';

/*
191. Number of 1 Bits

Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let bitCountMap = [ 0, 1, 1, 2, 1, 2, 2, 3 ];//0-7 bitCount

  let count = 0;
  while (n) {
    count += bitCountMap[n & 7];
    n >>>= 3;//这里一定要用无符号右移，否则左边会被1补上，导致移位之后就变成了负数
  }
  return count;
};

//神奇的位操作：n & (n - 1)会去掉最低位的1
hammingWeight = function(n) {
  let count = 0;
  while (n) {
    n &= (n - 1);
    count++;
  }
  return count;
};

console.log(hammingWeight(63));
console.log(hammingWeight(256));
console.log(hammingWeight(2147483648));
console.log(hammingWeight(0));
console.log(hammingWeight(4294967295));
