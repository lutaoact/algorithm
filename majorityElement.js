'use strict';

/*
169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let N = nums.length, majorNum = Math.floor(N / 2), map = {};
  for (let i = 0; i < N; i++) {
    let num = nums[i];
    if (map[num] === undefined) map[num] = 0;
    if (++map[num] > majorNum) return num;
  }
};

console.log(majorityElement([1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2]));
