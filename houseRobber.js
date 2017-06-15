'use strict';

/*
198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let N = nums.length, prev = 0, cur = nums[0];
  if (N === 0) return 0;
  if (N === 1) return cur;

  for (let i = 1; i < N; i++) {
    let temp = cur;
    cur = Math.max(nums[i] + prev, cur);
    prev = temp;
  }
  return cur;
};

console.log(rob([1, 5, 7, 6, 2, 0, 3, 4, 8]));
//               1, 5, 8, 11,11,11,14,15,22
