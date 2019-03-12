'use strict';

/*
90. Subsets II

Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//https://discuss.leetcode.com/topic/46159/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partitioning
//回溯法，从当前元素的下一个元素开始，因为之前的元素都已经处理完了
var subsetsWithDup = function(nums) {
  let N = nums.length, results = [], tmpList = [];
  nums.sort((a, b) => a - b);
  backtrack(0);
  return results;

  function backtrack(start) {
    results.push(tmpList.slice());

    for (let i = start; i < N; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;//重复元素不处理
      tmpList.push(nums[i]);
      backtrack(i + 1);
      tmpList.pop();
    }
  }
};

console.log(subsetsWithDup([1,2,2]));
