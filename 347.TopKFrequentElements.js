'use strict';

/*
347. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ? k ? number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let N = nums.length, map = new Map();
  for (let i = 0; i < N; i++) {
    let num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);//计数
  }

  let bucket = Array(N + 1);
  for (let [num, count] of map) {//将计数放入桶中
    if (!bucket[count]) bucket[count] = [num];
    else bucket[count].push(num);
  }

  let results = [];
  for (let i = N; i > 0; i--) {
    if (!bucket[i]) continue;

    results.push(...bucket[i].slice(0, k));
    k -= bucket[i].length;
    if (k <= 0) break;
  }
  return results;
};

console.log(topKFrequent([1,1,1,2,2,3,7,7,8,8,8,8,8,3,3,3,3], 4));
console.log(topKFrequent([1], 1));
