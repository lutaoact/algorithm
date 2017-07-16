'use strict';

/*
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let N = height.length, maxIndex = 0;
  for (let i = 1; i < N; i++) {
    if (height[i] > height[maxIndex]) maxIndex = i;
  }

  let result = 0;
  for (let i = 0, peak = 0; i < maxIndex; i++) {
    if (height[i] > peak) peak = height[i];
    else result += peak - height[i];
  }

  for (let i = N - 1, peak = 0; i > maxIndex; i--) {
    if (height[i] > peak) peak = height[i];
    else result += peak - height[i];
  }
  return result;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
