'use strict';

/*
611. Valid Triangle Number

Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

Example 1:
Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
Note:
The length of the given array won't exceed 1000.
The integers in the given array are in the range of [0, 1000].
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//对数组排序，得到当i<j<k，nums[i] <= nums[j] <= nums[k]，如果nums[i] + nums[j] > nums[k]，则表示可以构成三角形
//即两边之和大于第三边
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);

  let N = nums.length, count = 0;
  for (let i = N - 1; i >= 2; i--) {
    let l = 0, r = i - 1;
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {//表示选定了nums[r]和nums[i]两个数，则从nums[l]开始，到nums[r]之前的数随便选，都可以组成三角形
        count += r - l;
        r--;//第二个数向前推一步，接下来确定l到r之间有多少情况可以满足
      } else {
        l++;
      }
    }
  }
  return count;
};

console.log(triangleNumber([2,2,3,4]));//3
console.log(triangleNumber([2,2,5,3,4]));//6

let nums = require('./611.nums');
console.log(triangleNumber(nums));//79734256
