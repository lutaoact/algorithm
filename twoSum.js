'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let N = nums.length, map = {};
  for (let i = 0; i < N; i++) {
    let num = nums[i];
    let index = map[target - num];
    if (index !== undefined) {
      return [index, i];
    }
    map[num] = i;
  }
};

let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target));
