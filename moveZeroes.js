'use strict';

/*
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//使用交换实现
var moveZeroes = function(nums) {
  let N = nums.length, moveIndex = -1;
  for (let i = 0; i < N; i++) {
    if (nums[i] !== 0 && moveIndex !== -1) {
      console.log(moveIndex, i);
      swap(nums, moveIndex, i);
      moveIndex++;
      continue;
    }
    if (nums[i] === 0 && moveIndex === -1) {
      moveIndex = i;
    }
  }

  //不借助temp变量实现的交换
  function swap(nums, i, j) {
    nums[j] = nums[j] - nums[i];
    nums[i] = nums[j] + nums[i];
    nums[j] = nums[i] - nums[j];
  }
};

//将所有的非0前移，最后补0
moveZeroes = function(nums) {
  let N = nums.length, insertIndex = 0;
  for (let i = 0; i < N; i++) {
    if (nums[i] !== 0) nums[insertIndex++] = nums[i];
  }
  while (insertIndex < N) {
    nums[insertIndex++] = 0;
  }
};

let nums = [0, 0, 0, 0, 12];
//nums = [1];
//nums = [0, 1, 2, 3, 4, 5];
moveZeroes(nums);
console.log(nums);
