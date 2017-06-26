'use strict';

/*
581. Shortest Unsorted Continuous Subarray

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let N = nums.length, end = -2, begin = -1, maxCur = nums[0], minCur = nums[N - 1];
  for (let i = 1; i < N; i++) {
    maxCur = Math.max(maxCur, nums[i]);
    minCur = Math.min(minCur, nums[N - 1 - i]);
    if (nums[i] < maxCur) end = i;
    if (nums[N - 1 - i] > minCur) begin = N - 1 - i;
  }
  return end - begin + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
