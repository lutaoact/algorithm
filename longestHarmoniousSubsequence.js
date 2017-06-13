'use strict';

/*
594. Longest Harmonious Subsequence

We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Note: The length of the input array will not exceed 20,000.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let N = nums.length, longest = 0, map = {}, num;
  for (let i = 0; i < N; i++) {
    num = nums[i];
    if (map[num] === undefined) map[num] = 0;
    map[num]++;

    if (map[num - 1] && map[num - 1] + map[num] > longest) longest = map[num - 1] + map[num];
    if (map[num + 1] && map[num + 1] + map[num] > longest) longest = map[num + 1] + map[num];
  }
  return longest;
};

//console.log(findLHS([1, 2, 3, 4, 5, 6, 6]));
console.log(findLHS([6, 2, 5, 4, 3, 3, 2, 1, 0]));
//console.log(findLHS([1]));
//console.log(findLHS([1,3,2,2,5,2,3,7]));
