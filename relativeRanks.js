'use strict';

/*
506. Relative Ranks

Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let N = nums.length, map = {}, results = Array(N);
  for (let i = 0; i < N; i++) {
    map[nums[i]] = i;
  }
  nums.sort((a, b) => { return b - a; });

  results[map[nums[0]]] = 'Gold Medal';
  results[map[nums[1]]] = 'Silver Medal';
  results[map[nums[2]]] = 'Bronze Medal';

  for (let i = 3; i < N; i++) {
    results[map[nums[i]]] = `${i + 1}`;
  }
  return results;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1, 8, 9]));//[ 'Bronze Medal', '4', '5', '6', '7', 'Silver Medal', 'Gold Medal' ]
