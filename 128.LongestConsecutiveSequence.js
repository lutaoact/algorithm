'use strict';

/*
128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let N = nums.length, longest = 1, map = {};
  for (let i = 0; i < N; i++) {
    if (map[nums[i]] !== undefined) continue;

    map[nums[i]] = 1;
    if (map[nums[i] - 1] !== undefined) {//如果相邻的数字已经存在，做连通性扩展
      longest = Math.max(longest, mergeCluster(map, nums[i] - 1, nums[i]));
    }
    if (map[nums[i] + 1] !== undefined) {
      longest = Math.max(longest, mergeCluster(map, nums[i], nums[i] + 1));
    }
  }
  return N === 0 ? 0 : longest;//只包含一个元素时返回1

  //连通性扩展，map[left]和map[right]分别记录的是到目前为止连续序列的长度，然后将upper和lower这两个边界设为序列的长度
  function mergeCluster(map, left, right) {
    let upper = right + map[right] - 1;
    let lower = left - map[left] + 1;
    let length = upper - lower + 1;
    map[upper] = length, map[lower] = length;
    return length;
  }
  return longest;
};

longestConsecutive = function(nums) {
  let N = nums.length, longest = 0, used = {};

  nums.forEach((n) => { used[n] = false; });

  for (let i = 0; i < N; i++) {
    let num = nums[i], length = 1;
    if (used[num]) continue;

    for (let j = num + 1; used[j] !== undefined; j++) {
      used[j] = true;
      length++;
    }

    for (let j = num - 1; used[j] !== undefined; j--) {
      used[j] = true;
      length++;
    }
    if (length > longest) longest = length;
  }

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 0, 5, 7, 6]));
console.log(longestConsecutive([0]));
