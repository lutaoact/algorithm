'use strict';

/*
650. 2 Keys Keyboard

Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
Paste: You can paste the characters which are copied last time.
Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

Example 1:
Input: 3
Output: 3
Explanation:
Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
Note:
The n will be in the range [1, 1000].
*/

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  let dp = Array(n + 1);
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = i;
    for (let j = i - 1; j > 1; j--) {
      if (i % j === 0) {
        dp[i] = dp[j] + i / j;
        break;//从上到下遍历，找到最大的j，这样需要的步数最少
      }
    }
  }
  return dp[n];
};

//https://discuss.leetcode.com/topic/97623/loop-best-case-log-n-no-dp-no-extra-space-no-recursion-with-explanation
minSteps = function(n) {
  let s = 0;
  for (let d = 2; d <= n; d++) {
    while (n % d === 0) {
      s += d;
      n /= d;
    }
  }
  return s;
};

console.log(minSteps(10));
