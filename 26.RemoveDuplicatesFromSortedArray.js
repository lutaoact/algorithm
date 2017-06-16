'use strict';

/*
26. Remove Duplicates from Sorted Array

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let N = nums.length;
  if (N === 0) return 0;

  let moveIndex = 1;
  for (let i = 1; i < N; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[moveIndex] = nums[i];
      moveIndex++;
    }
  }
  return moveIndex;
};

console.log(removeDuplicates([1,1, 1,2, 3, 4]));
