'use strict';

/*
54. Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let M = matrix.length, N = matrix[0].length;
  let rowBegin = 0, rowEnd = M - 1, colBegin = 0, colEnd = N - 1, k = 0;
  let results = Array(M * N);
  while (true) {
    // Traverse Right
    for (let i = colBegin; i <= colEnd; i++) {
      results[k++] = matrix[rowBegin][i];
    }
    if (++rowBegin > rowEnd) break;

    // Traverse Down
    for (let i = rowBegin; i <= rowEnd; i++) {
      results[k++] = matrix[i][colEnd];
    }
    if (--colEnd < colBegin) break;

    // Traverse Left
    for (let i = colEnd; i >= colBegin; i--) {
      results[k++] = matrix[rowEnd][i];
    }
    if (--rowEnd < rowBegin) break;

    // Traverse Up
    for (let i = rowEnd; i >= rowBegin; i--) {
      results[k++] = matrix[i][colBegin];
    }
    if (++colBegin > colEnd) break;
  }
  return results;
};

let matrix = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
];
console.log(spiralOrder(matrix));
