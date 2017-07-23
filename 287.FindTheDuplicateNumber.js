'use strict';

/*
287. Find the Duplicate Number

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  if (nums.length <= 1) return -1;

  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = 0;
  while (fast != slow) {
    fast = nums[fast];
    slow = nums[slow];
  }
  return slow;
};

console.log(findDuplicate([1,2,3,4,4,5]));
console.log(findDuplicate([1,2,4,4,4,5]));
