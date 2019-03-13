'use strict';

/*
78. Subsets

Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
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
var subsets = function(nums) {
  let N = nums.length, results = [];
  backtrack(0, []);
  return results;

  function backtrack(start, tmpList) {
    results.push(tmpList.slice());

    for (let i = start; i < N; i++) {
      tmpList.push(nums[i]);
      backtrack(i + 1, tmpList);
      tmpList.pop();
    }
  }
};

console.log(subsets([1,2,3]));
