'use strict';

/*
416. Partition Equal Subset Sum

Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.
Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let N = nums.length, sum = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
  }
  if (sum & 1) return false;
  sum >>>= 1;//右移1位，相当于除以2

  //动态规划
  let dp = Array(sum + 1);
  dp[0] = true;
  for (let i = 0; i < N; i++) {
    let num = nums[i];
    for (let j = sum; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
    if (dp[sum]) return true;
  }
  return false;
};

canPartition = function(nums) {
  let N = nums.length, sum = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
  }
  if (sum & 1) return false;
  sum >>>= 1;//右移1位，相当于除以2

  nums.sort((a, b) => b - a);
  return helper(1, sum, nums[0]);

  function helper(pos, sum, tmpSum) {
    if (tmpSum === sum) return true;
    if (tmpSum > sum) return false;

    for (let i = pos; i < N; i++) {
      if (helper(i + 1, sum, tmpSum + nums[i])) return true;
    }
    return false;
  }
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([1, 2, 3, 4, 5, 6, 7]));
