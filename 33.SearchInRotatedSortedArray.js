'use strict';

/*
33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let lo = 0, hi = nums.length - 1, mid;
  while (lo <= hi) {
    mid = ((hi - lo) / 2 | 0) + lo;
    if (nums[mid] === target) return mid;

    //主要需要判断nums[mid]和target是不是在同一段递增序列上
    if (nums[lo] <= nums[mid]) {
      if (nums[lo] <= target && nums[mid] > target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if (nums[hi] >= target && nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 7));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2], 13));
console.log(search([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2], 14));
console.log(search([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2], 14));
