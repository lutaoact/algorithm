'use strict';

//1-N的数字的全排列
function permutations(N) {
  let result = 0, nums = Array(N + 1);

  for (let i = 1; i <= N; i++) nums[i] = i;

  helper(N, nums);
  return result;

  function helper(N, nums) {
    if (N <= 1) {
      result++;
      console.log(nums);
      return;
    }
    for (let i = 1; i <= N; i++) {
      swap(nums, i, N);
      helper(N - 1, nums);
      swap(nums, N, i);
    }
  }

  function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
}

permutations(5);
