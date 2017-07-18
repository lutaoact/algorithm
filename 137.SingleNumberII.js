'use strict';

/*
137. Single Number II

Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//这种方法有点难理解，重点是
//ones = ones ^ A[i]; if (twos == 1) then ones = 0;  =>  ones = (ones ^ A[i]) & ~twos
//twos = twos ^ A[i]; if (ones == 1) then twos = 0;  =>  twos = (twos ^ A[i]) & ~ones
var singleNumber = function(nums) {
  let N = nums.length, ones = 0, twos = 0;
  for (let i = 0; i < N; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }
  return ones;
};

singleNumber = function(nums) {
  let N = nums.length, bitCount = Array(32).fill(0);
  for (let i = 0; i < N; i++) {
    let num = nums[i];
    bitCount[0] += num & 1;
    for (let j = 1; j < 32; j++) {
      num >>>= 1;
      bitCount[j] += num & 1;
      if (num === 0) break;
    }
  }

  let result = 0;
  for (let i = 0; i < 32; i++) {
    result |= (bitCount[i] % 3) << i;
  }
  return result;
};

console.log(singleNumber([1]));
console.log(singleNumber([1,1,1,6,6,7,2,2,2,3,3,3,6,5,5,5]));
