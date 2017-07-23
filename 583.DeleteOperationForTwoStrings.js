'use strict';

/*
583. Delete Operation for Two Strings

Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//计算需要删除的字符数
var minDistance = function(word1, word2) {
  let N1 = word1.length, N2 = word2.length;
  let dp;
  for (let i = 0; i <= N1; i++) {
    let temp = Array(N2 + 1);
    for (let j = 0; j <= N2; j++) {
      if (i === 0 || j === 0) temp[j] = i + j;
      else if (word1[i - 1] === word2[j - 1]) temp[j] = dp[j - 1];
      else temp[j] = Math.min(temp[j - 1], dp[j]) + 1;//注意：这里取需要删除的字符数最小值
    }
    dp = temp;
  }
  return dp[N2];
};

//计算共同的字符数
minDistance = function(word1, word2) {
  let N1 = word1.length, N2 = word2.length;
  let dp;
  for (let i = 0; i <= N1; i++) {
    let temp = Array(N2 + 1);
    for (let j = 0; j <= N2; j++) {
      if (i === 0 || j === 0) temp[j] = 0;//没有重复字符
      else if (word1[i - 1] === word2[j - 1]) temp[j] = dp[j - 1] + 1;//多了一个相同字符
      else temp[j] = Math.max(temp[j - 1], dp[j]);//注意：这里取相同字符的最大个数
    }
    dp = temp;
  }
  return N1 + N2 - 2 * dp[N2];
};

console.log(minDistance("sea", "eat"));
console.log(minDistance("", ""));
