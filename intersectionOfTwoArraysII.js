'use strict';

/*
350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/*
对那三个假设的一些个人思考：
1. 如果数组已经排序，则利用归并排序中归并部分的思想，用两个下标指针同时扫描两个数组，如果碰到等值，则加入结果数组，然后下标同时加1，否则，根据两个值的大小关系调整指针。
2. 对nums1进行计数，然后扫描nums2时，每次碰到相同的值，计数减一，减到0时，将map中的key删掉，当map为空时，则停止扫描。
3. 可以对nums1和nums2排序，数据量过大，考虑分段处理，每一段排好之后再归并。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let N1 = nums1.length, N2 = nums2.length, map = {};
  for (let i = 0; i < N1; i++) {
    if (!map[nums1[i]]) map[nums1[i]] = 0;
    map[nums1[i]]++;
  }

  let results = [];
  for (let i = 0; i < N2; i++) {
    if (map[nums2[i]] && --map[nums2[i]] >= 0) results.push(nums2[i]);
  }
  return results;
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2, 2, 1];
console.log(intersect(nums1, nums2));
