'use strict';

/*
268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let N = nums.length, result = N;
  for (let i = 0; i < N; i++) {
    result ^= i ^ nums[i];
  }
  return result;
};

console.log(missingNumber([0, 1, 3]));
