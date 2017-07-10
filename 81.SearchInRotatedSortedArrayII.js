'use strict';

/*
81. Search in Rotated Sorted Array II

Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Write a function to determine if a given target is in the array.

The array may contain duplicates.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let lo = 0, hi = nums.length - 1, mid;
  while (lo <= hi) {
    mid = ((hi - lo) / 2 | 0) + lo;
    if (nums[mid] === target) return true;

    if (nums[lo] < nums[mid]) {
      if (nums[lo] <= target && nums[mid] > target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else if (nums[lo] > nums[mid]) {
      if (nums[hi] >= target && nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    } else {
      lo++;
    }
  }
  return false;
};

console.log(search([1, 1, 1, 3, 1, 1], 3));
console.log(search([1, 1, 1, 3, 1, 1], 2));
console.log(search([1, 1, 2, 3, 1, 1], 3));
console.log(search([1, 1, 2, 3, 7, 0, 1], 4));
