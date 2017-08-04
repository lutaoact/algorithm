'use strict';

/*
153. Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//这是自己写的，虽然也对，但不够精简
var findMin = function(nums) {
  let N = nums.length;
  if (N === 1) return nums[0];
  if (nums[0] < nums[N - 1]) return nums[0];//有序，未旋转的数组
  if (nums[N - 2] > nums[N - 1]) return nums[N - 1];//旋转了N-1位，最后一个数字就是最小的

  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    let mi = ((hi - lo) / 2 | 0) + lo;
    if (mi >= 1 && mi <= N - 2 && nums[mi] < nums[mi - 1] && nums[mi] < nums[mi + 1]) {
      return nums[mi];
    }

    if (nums[mi] < nums[hi]) hi = mi - 1;
    else if (nums[mi] > nums[hi]) lo = mi + 1;
  }
};

findMin = function(nums) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {//注意判断条件不包含等号
    if (nums[lo] < nums[hi]) return nums[lo];//出现在同一段递增序列上，直接返回

    let mi = Math.floor((hi - lo) / 2) + lo;
    if (nums[mi] >= nums[lo]) lo = mi + 1;//比如[2,1]这种情况，会走到这一步，接下来lo变成1，while循环就会结束，最后直接返回nums[lo]
    else hi = mi;//出现在右半段上
  }
  return nums[lo];
};

console.log(findMin([6, 7, 8, 0, 1, 2, 3, 4]));//0
console.log(findMin([4, 5, 6, 7, 8, 1]));//1
console.log(findMin([2, 4, 5, 6, 7, 8, 9, 10]));//2
