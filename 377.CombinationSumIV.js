'use strict';

/*
377. Combination Sum IV

Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//这种方法太慢 回溯法
var combinationSum4 = function(nums, target) {
  let count = 0, N = nums.length;
  helper(target);
  return count;

  function helper(target) {
    if (target === 0) {
      count++;
      return;
    }
    if (target < 0) return;

    for (let i = 0; i < N; i++) {
      helper(target - nums[i]);
    }
  }
};

//动态规划 自底向上
combinationSum4 = function(nums, target) {
  let N = nums.length, dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < N; j++) {
      if (i - nums[j] < 0) continue;

      dp[i] += dp[i - nums[j]];
    }
  }
  return dp[target];
};

//动态规划 自顶向下
combinationSum4 = function(nums, target) {
  let N = nums.length, dp = Array(target + 1).fill(-1);
  dp[0] = 1;
  return helper(target);

  function helper(target) {
    if (dp[target] !== -1) {
      return dp[target];
    }
    let result = 0;
    for (let i = 0; i < N; i++) {
      if (target >= nums[i]) {
        result += helper(target - nums[i]);
      }
    }
    dp[target] = result;

    return result;
  }
};

let nums, target;
//nums = [1, 2, 3], target = 4;
//console.log(combinationSum4(nums, target));//7
nums = [4,2,1], target = 32;
console.log(combinationSum4(nums, target));//39882198
