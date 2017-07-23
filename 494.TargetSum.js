'use strict';

/*
494. Target Sum

You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3.
Output: 5
Explanation:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
//递归方案，太慢了
var findTargetSumWays = function(nums, S) {
  let N = nums.length, count = 0;
  calculate(0, 0);
  return count;

  function calculate(i, sum) {
    if (i === N) {
      if (sum === S) count++;
      return;
    }
    calculate(i + 1, sum + nums[i]);
    calculate(i + 1, sum - nums[i]);
  }
};

// https://discuss.leetcode.com/topic/76243/java-15-ms-c-3-ms-o-ns-iterative-dp-solution-using-subset-sum-with-explanation
// 2 * sum(P) = sum + S
findTargetSumWays = function(nums, S) {
  let N = nums.length, sum = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
  }
  return sum < S || (sum + S) & 1 ? 0 : subsetSum(nums, (sum + S) >>> 1);

  function subsetSum(nums, sum) {
    let dp = Array(sum + 1).fill(0);
    dp[0] = 1;
    nums.forEach((num) => {
      for (let i = sum; i >= num; i--) {
        dp[i] += dp[i - num];
      }
    });
    return dp[sum];
  }
};

// 2 * sum(N) = sum - S
findTargetSumWays = function(nums, S) {
  let N = nums.length, sum = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
  }
  return sum < S || (sum - S) & 1 ? 0 : subsetSum(nums, (sum - S) >>> 1);

  function subsetSum(nums, sum) {
    let dp = Array(sum + 1).fill(0);
    dp[0] = 1;
    nums.forEach((num) => {
      for (let i = sum; i >= num; i--) {
        dp[i] += dp[i - num];
      }
    });
    return dp[sum];
  }
};

let nums, S;
nums = [1, 1, 1, 1, 1], S = 3;
console.log(findTargetSumWays(nums, S));//5
nums = [47,25,32,10,1,1,36,19,46,41,11,32,21,41,44,8,33,5,47,34], S = 10;//5855
console.log(findTargetSumWays(nums, S));
