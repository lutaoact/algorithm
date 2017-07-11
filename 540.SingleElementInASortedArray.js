'use strict';

/*
540. Single Element in a Sorted Array

Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10
Note: Your solution should run in O(log n) time and O(1) space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let N = nums.length, lo = 0, hi = N / 2 | 0, mid;
  while (lo < hi) {
    mid = ((hi - lo) / 2 | 0) + lo;
    if (nums[2 * mid] !== nums[2 * mid + 1]) hi = mid;
    else lo = mid + 1;
  }
  return nums[2 * lo];
};

console.log(singleNonDuplicate([0]));
console.log(singleNonDuplicate([1,1,2]));
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
