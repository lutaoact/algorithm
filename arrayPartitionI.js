'use strict';
/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4.
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort(function(a, b) { return a - b; });

  let sum = 0, N = nums.length;
  for (let i = 0; i < N; i += 2) {
    sum += nums[i];
  }
  return sum;
};

//另一种方案：利用位图排序的思想
arrayPairSum = function(nums) {
  let marks = Array(20001).fill(0);

  let N = nums.length;
  for (let i = 0; i < N; i++) {
    marks[nums[i] + 10000]++
  }

  let sum = 0, minFlag = true;
  for (let i = 0; i < 20001;) {
    if (marks[i] > 0 && minFlag) {
      sum += i - 10000;
      marks[i]--;
      minFlag = false;
    } else if (marks[i] > 0 && !minFlag) {
      marks[i]--;
      minFlag = true;
    } else {
      i++;
    }
  }

  return sum;
};

let nums = [1,4,3,2];
nums = [1, 2, 3, 4, 5, 6];
console.log(arrayPairSum(nums));
