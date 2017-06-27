'use strict';

/*
303. Range Sum Query - Immutable

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let N = nums.length;
  this.nums = Array(N);
  this.nums[0] = nums[0];
  for (let i = 1; i < N; i++) {
    this.nums[i] = this.nums[i - 1] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) return this.nums[j];
  return this.nums[j] - this.nums[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
