'use strict';

/*
334. Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let n1 = Infinity, n2 = Infinity;//n1是递增序列的第一个数，n2是第二个数
  for (let i = 0, N = nums.length; i < N; i++) {
    if      (nums[i] <= n1) { n1 = nums[i]; }//潜在结果中的最小值
    else if (nums[i] <= n2) { n2 = nums[i]; }//潜在结果中的中间值
    else                    { return true;  }//出现一个比前两者都大的，说明三个数的递增序列已经找到
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
