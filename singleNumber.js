'use strict';

/*
136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let N = nums.length, result = 0;
  for (let i = 0; i < N; i++) {
    result ^= nums[i];
  }
  return result;
};

let nums = [4, 2, 3, 2, 3];
console.log(singleNumber(nums));
