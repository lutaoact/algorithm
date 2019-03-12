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
      results.push(nums.slice());//slice似乎比nums.map(n => n)的效率高一些
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

//设计数组元素的动态增删，比上面交换数组元素似乎慢一些
permute = function(nums) {
  let N = nums.length, results = [], tmpList = [], visited = Array(N);
  helper(tmpList, nums, visited);
  return results;

  function helper(tmpList, nums, visited) {
    if (tmpList.length === N) {
      results.push(tmpList.slice());
      return;
    }
    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      tmpList.push(nums[i]);
      console.log(tmpList, visited);
      helper(tmpList, nums, visited);
      tmpList.pop();
      visited[i] = false;
    }
  }
};

permute = function(nums) {
  let N = nums.length, results = [];
  backtrack(0);
  return results;

  function backtrack(start) {
    if (start >= N - 1) {
      results.push(nums.slice());
      return;
    }
    for (let i = start; i < N; i++) {
      swap(nums, i, start);
      backtrack(start + 1);
      swap(nums, i, start);
    }
  }
  function swap(A, i, j) {
    let tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
  }
};

console.log(permute([1,2,3]));
console.log(permute([1,2,3,4]));
console.log(permute([1]));
console.log(permute([]));
