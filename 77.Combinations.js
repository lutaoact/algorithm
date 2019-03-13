'use strict';

/*
77. Combinations

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//回溯法的典型应用
var combine = function(n, k) {
  let tmpList = [], results = [];
  backtrack(1, tmpList);
  return results;

  function backtrack(start, tmpList) {
    if (tmpList.length === k) {
      results.push(tmpList.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      tmpList.push(i);
      backtrack(i + 1, tmpList);//元素不能重复，所以从i+1开始
      tmpList.pop();
    }
  }
};

// 优化剪枝
combine = function(n, k) {
  let tmpList = [], results = [];
  backtrack(1, tmpList);
  return results;

  function backtrack(start, tmpList) {
    if (tmpList.length === k) {
      results.push(tmpList.slice());
      return;
    }

    // 还有k - tmpList.length个空位, 所以,[i...n]中至少要包含k - tmpList.length个元素
    // i最多为 n - (k - tmpList.length) + 1
    for (let i = start; i <= n - (k - tmpList.length) + 1; i++) {
      tmpList.push(i);
      backtrack(i + 1, tmpList);//元素不能重复，所以从i+1开始
      tmpList.pop();
    }
  }
};

console.log(combine(4, 2));
