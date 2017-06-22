'use strict';

/*
219. Contains Duplicate II

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let N = nums.length, num, map = {};
  for (let i = 0; i < N; i++) {
    num = nums[i];
    if (map[num] === undefined) {
      map[num] = i;
    } else {
      if (Math.abs(map[num] - i) <= k) return true;
      map[num] = i;
    }
  }
  return false;
};

let nums = [1, 2, 0, 7, 1, 3, 4, 1, 5], k = 3;
console.log(containsNearbyDuplicate(nums, k));
