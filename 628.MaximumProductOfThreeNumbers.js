'use strict';

/*
628. Maximum Product of Three Numbers

Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:
Input: [1,2,3]
Output: 6
Example 2:
Input: [1,2,3,4]
Output: 24
Note:
The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//找出3个最大值和2个最小值，当2个最小值是负数时，它们的乘积再乘以最大值可能比3个最大值的乘积更大
var maximumProduct = function(nums) {
  let min1 = Infinity, min2 = Infinity, max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  nums.forEach((n) => {
    if (n > max3) {
      max1 = max2;
      max2 = max3;
      max3 = n;
    } else if (n > max2) {
      max1 = max2;
      max2 = n;
    } else if (n > max1) {
      max1 = n;
    }

    if (n < min1) {
      min2 = min1;
      min1 = n;
    } else if (n < min2) {
      min2 = n;
    }
    console.log(min1, min2, max1, max2, max3);
  });
  console.log(min1, min2, max1, max2, max3);
  return Math.max(max1 * max2 * max3, min1 * min2 * max3);
};

console.log(maximumProduct([1,2,3]));
//console.log(maximumProduct([-7, -5, 1, 2, 3, 5]));
