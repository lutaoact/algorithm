'use strict';

/*
59. Spiral Matrix II

Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n <= 0) return [];
  let rowBegin = 0, rowEnd = n - 1, colBegin = 0, colEnd = n - 1, k = 1;

  //初始化矩阵
  let matrix = Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = Array(n);
  }

  //为矩阵赋值
  while (true) {
    // Traverse Right
    for (let i = colBegin; i <= colEnd; i++) {
      matrix[rowBegin][i] = k++;
    }
    if (++rowBegin > rowEnd) break;

    // Traverse Down
    for (let i = rowBegin; i <= rowEnd; i++) {
      matrix[i][colEnd] = k++;
    }
    if (--colEnd < colBegin) break;

    // Traverse Left
    for (let i = colEnd; i >= colBegin; i--) {
      matrix[rowEnd][i] = k++;
    }
    if (--rowEnd < rowBegin) break;

    // Traverse Up
    for (let i = rowEnd; i >= rowBegin; i--) {
      matrix[i][colBegin] = k++;
    }
    if (++colBegin > colEnd) break;
  }
  return matrix;
};

console.log(generateMatrix(3));
console.log(generateMatrix(5));
