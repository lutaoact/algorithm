'use strict';

/*
88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, len = m + n, k = len - 1;
  while (i >= 0 && j >= 0) {
    let num1 = nums1[i], num2 = nums2[j];
    if (num1 > num2) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
  console.log(nums1);
};

let nums1 = [2, 5, 7, 8], nums2 = [7, 8, 12, 13];

merge(nums1, nums1.length, nums2, nums2.length);
