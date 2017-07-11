'use strict';

/*
16. 3Sum Closest

Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
    For example, given array S = {-1 2 1 -4}, and target = 1.
    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => {
    return a - b;
  });

  let N = nums.length, minGap = Infinity, result = nums[0] + nums[1] + nums[N - 1], gap, sum, lo, hi;
  for (let i = 0; i < N - 2; i++) {
    lo = i + 1, hi = N - 1;
    while (lo < hi) {
      sum = nums[i] + nums[lo] + nums[hi];
      gap = Math.abs(sum - target);
      if (gap < minGap) {
        minGap = gap;
        result = sum;
      }

      if (sum < target) lo++
      else hi--;
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 1, 2], 3));
