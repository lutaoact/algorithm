'use strict';

/*
526. Beautiful Arrangement

Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N numbers successfully if one of the following is true for the ith position (1 ? i ? N) in this array:

The number at the ith position is divisible by i.
i is divisible by the number at the ith position.
Now given N, how many beautiful arrangements can you construct?

Example 1:
Input: 2
Output: 2
Explanation:

The first beautiful arrangement is [1, 2]:

Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).

Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

The second beautiful arrangement is [2, 1]:

Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).

Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.
Note:
N is a positive integer and will not exceed 15.
*/

/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  let result = 0;
  helper(N, 1, Array(N + 1));
  return result;

  function helper(N, pos, visited) {
    if (pos > N) {
      result++;
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!visited[i] && (i % pos === 0 || pos % i === 0)) {
        visited[i] = true;
        helper(N, pos + 1, visited);
        visited[i] = false;
      }
    }
  }
};

//所有数字的全排列中找出符合条件的情况
countArrangement = function(N) {
  let result = 0, nums = Array(N + 1);

  for (let i = 1; i <= N; i++) nums[i] = i;

  helper(N, nums);
  return result;

  function helper(N, nums) {
    if (N <= 1) {
      result++;
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (nums[i] % N === 0 || N % nums[i] === 0) {//符合条件的情况
        swap(nums, i, N);
        helper(N - 1, nums);
        swap(nums, N, i);
      }
    }
  }

  function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
};

console.log(countArrangement(4));
console.log(countArrangement(2));
