'use strict';

/*
453. Minimum Moves to Equal Array Elements

Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/

/*
分析过程：每次把最大值以外的所有值都加1，相当于其它值保持不变，只把最大值减1，一直减到所有值都等于最小值为止，最后得到N个min。这样move的次数就简化为sum - N * min。只需要一个循环就可以完成。凡是速度慢的，基本都是用两个循环来处理，一个循环求和，一个循环找最小值，其实是没有必要的。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let N = nums.length, min = nums[0], sum = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
    if (nums[i] < min) min = nums[i];
  }

  return sum - N * min;
};

console.log(minMoves([1,2,3,4]));
