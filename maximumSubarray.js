'use strict';

/*
53. Maximum Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let N = nums.length, maxSoFar = nums[0], sumCur = nums[0];

  for (let i = 1; i < N; i++) {
    sumCur += nums[i];
    sumCur = Math.max(nums[i], sumCur);
    maxSoFar = Math.max(sumCur, maxSoFar);
  }
  return maxSoFar;
};

console.log(maxSubArray([-2]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
