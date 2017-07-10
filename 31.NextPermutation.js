'use strict';

/*
31. Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let N = nums.length, partitionIndex = -1, partitionNum;
  for (let i = N - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      partitionIndex = i;
      partitionNum = nums[i];
      break;
    }
  }

  if (partitionIndex >= 0) {
    let changeIndex;
    for (let i = N - 1; i >= 0; i--) {
      if (nums[i] > partitionNum) {
        changeIndex = i;
        break;
      }
    }
    swap(nums, partitionIndex, changeIndex);
  }

  let lo = partitionIndex + 1, hi = N - 1;
  while (lo < hi) {
    swap(nums, lo++, hi--);
  }

  console.log(nums);
  function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
};

nextPermutation([1, 2, 3]);
nextPermutation([3, 2, 1]);
nextPermutation([1, 1, 5]);
nextPermutation([1, 1, 5, 7, 8, 9]);
