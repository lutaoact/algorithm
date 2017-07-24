'use strict';

/*
516. Longest Palindromic Subsequence

Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/

/**
 * @param {string} s
 * @return {number}
 */
/*
dp[i][j]: the longest palindromic subsequence's length of substring(i, j)
State transition:
dp[i][j] = dp[i+1][j-1] + 2 if s.charAt(i) == s.charAt(j)
otherwise, dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
Initialization: dp[i][i] = 1
*/
var longestPalindromeSubseq = function(s) {
  let N = s.length, dp = Array(N);
  for (let i = N - 1; i >= 0; i--) {
    dp[i] = Array(N).fill(0);//必须填充为0
    dp[i][i] = 1;
    for (let j = i + 1; j < N; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][N - 1];
};

longestPalindromeSubseq = function(s) {
  let N = s.length, memo = Array(N);
  for (let i = 0; i < N; i++) {
    memo[i] = Array(N);
  }

  return helper(s, 0, N - 1, memo);

  function helper(s, i, j, memo) {
    if (memo[i][j] !== undefined) return memo[i][j];

    if (i > j) return 0;
    if (i === j) return 1;
    if (s[i] === s[j]) {
      memo[i][j] = helper(s, i + 1, j - 1, memo) + 2;
    } else {
      memo[i][j] = Math.max(helper(s, i + 1, j, memo), helper(s, i, j - 1, memo));
    }
    return memo[i][j];
  }
};

console.log(longestPalindromeSubseq('bbbab'));
console.log(longestPalindromeSubseq('cbbd'));
