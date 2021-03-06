'use strict';

/*
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let N1 = nums1.length, N2 = nums2.length, map = {}, results = [];
  for (let i = 0; i < N1; i++) {
    map[nums1[i]] = 1;
  }

  for (let i = 0; i < N2; i++) {
    if (map[nums2[i]] === 1) {
      results.push(nums2[i]);
      map[nums2[i]]++;
    }
  }
  return results;
};

let nums1 = [1, 2, 3, 2, 1], nums2 = [2, 2, 3];
console.log(intersection(nums1, nums2));
