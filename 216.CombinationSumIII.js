'use strict';

/*
216. Combination Sum III

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
//回溯法的应用
var combinationSum3 = function(k, n) {
  let results = [], tmpList = [];

  helper(tmpList, 1, n);

  return results;

  function helper(tmpList, start, n) {
    if (tmpList.length === k && n === 0) {
      return results.push(tmpList.slice());
    }
    if (tmpList.length === k) return;//数组元素个数已经到k，但n不为0，则没有必要继续后续操作

    for (let i = start; i <= 9; i++) {
      if (n - i < 0) break;

      tmpList.push(i);
      helper(tmpList, i + 1, n - i);
      tmpList.pop();
    }
  }
};

// 优化剪枝
combinationSum3 = function(k, n) {
  let results = [], tmpList = [];

  backtrack(tmpList, 1, n);

  return results;

  function backtrack(tmpList, start, remain) {
    if (tmpList.length === k) {
      if (remain === 0) results.push(tmpList.slice());
      return
    }

    // 最多k个元素，k - tmpList.length为还需要增加的元素个数，那么[i..9]之间最少要有k - tmpList.length个元素，那么i的最大值就是9 - (k - tmpList.length) + 1
    for (let i = start; i <= 9 - (k - tmpList.length) + 1; i++) {
      if (remain - i < 0) break;

      tmpList.push(i);
      backtrack(tmpList, i + 1, remain - i);
      tmpList.pop();
    }
  }
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 11));
console.log(combinationSum3(4, 12));
