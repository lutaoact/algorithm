'use strict';

/*
217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let N = nums.length, map = {};
  for (let i = 0; i < N; i++) {
    if (map[nums[i]]) return true;
    map[nums[i]] = 1;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
