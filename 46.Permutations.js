'use strict';

/*
46. Permutations

Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let N = nums.length, results = [];
  helper(N, nums);
  return results;

  function helper(N, nums) {
    if (N <= 1) {
      results.push(nums.map(n => n))
      return;
    }
    for (let i = 0; i < N; i++) {
      swap(nums, i, N - 1);
      helper(N - 1, nums);
      swap(nums, N - 1, i);
    }
  }

  function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
};
console.log(permute([1,2,3]));
console.log(permute([1]));
console.log(permute([]));
