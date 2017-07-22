'use strict';

/*
35. Search Insert Position

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let N = nums.length, lo = 0, hi = N - 1, mid;
  if (target <= nums[lo]) return 0;
  if (target > nums[hi]) return N;

  while (lo <= hi) {
    mid = ((hi - lo) / 2 | 0) + lo;
    if (nums[mid] < target) {
      lo = mid + 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      return mid;
    }
  }
  return lo;
};

console.log(searchInsert([1, 3, 5, 6], 4));
console.log(searchInsert([1, 3, 4, 5, 6], 4));
