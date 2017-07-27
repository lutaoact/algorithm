'use strict';

/*
560. Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//如果我们知道nums[0..i]的和sum1，并且知道nums[0..j]的和sum2，那么nums[i+1..j]的和就是sum2-sum1
//所以我们检查sum-k是否在preSumMap中，如果在，这说明存在i，是nums[0..i]的和为sum-k，那从nums[i+1]开始可以得到一系列元素的和为k
var subarraySum = function(nums, k) {
  let N = nums.length, preSumMap = {0: 1}, sum = 0, result = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
    if (preSumMap[sum - k]) {
      result += preSumMap[sum - k];
    }

    preSumMap[sum] = (preSumMap[sum] || 0) + 1;
  }
  return result;
};

let nums = [1,1,1], k = 2;
console.log(subarraySum(nums, k));
nums = [1], k = 1;
console.log(subarraySum(nums, k));
