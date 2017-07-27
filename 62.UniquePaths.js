'use strict';

/*
62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//回溯法，太慢
var uniquePaths = function(m, n) {
  let result = 0;
  backtrack(1, 1);
  return result;

  function backtrack(i, j) {
    if (i === m && j === n) {
      result++;
      return;
    }

    if (i < m) backtrack(i + 1, j);
    if (j < n) backtrack(i, j + 1);
  }
};

//动态规划 https://discuss.leetcode.com/topic/15265/0ms-5-lines-dp-solution-in-c-with-explanations
uniquePaths = function(m, n) {
  let dp = Array(m).fill(Array(n).fill(1));//行和列都塞满1
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];//依赖相同行的左一列，相同列的上一行
    }
  }
  return dp[m - 1][n - 1];
};

uniquePaths = function(m, n) {
  let dp = Array(n).fill(1);//只需要保留一行数据，既是前一行，也是当前行
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {//序列从1到n-1，所以在计算dp[j]时，dp[j]还是旧值，也就是上一行的值，而dp[j-1]已经更新过，是当前行的值
      dp[j] += dp[j - 1];//依赖上一行的相同列dp[j]，相同行的左一列dp[j - 1]
    }
  }
  return dp[n - 1];
};

//https://discuss.leetcode.com/topic/2734/my-ac-solution-using-formula
//组合问题：m-1步向下，n-1步向右，总共m+n-2步，其实就是从总步数中选择向下的n-1步就好了，剩下的m-1步自然就确定了
uniquePaths = function(m, n) {
  let N = m + n - 2, k = Math.min(m, n) - 1;//组合的运算法则，C(N,k)和C(N,N-k)是相等的
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = result * (N - k + i) / i;
  }
  return result;
};

console.log(uniquePaths(2, 2));//2
console.log(uniquePaths(3, 7));//28
console.log(uniquePaths(8, 10));//11440
