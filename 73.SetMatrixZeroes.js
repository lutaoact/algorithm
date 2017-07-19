'use strict';

/*
73. Set Matrix Zeroes

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//常数空间复杂度，复用矩阵的首行和首列，需要两个变量来记录首行和首列是否包含0
var setZeroes = function(matrix) {
  let m = matrix.length, n = matrix[0].length;

  let firstRowHasZero = false, firstColHasZero = false;
  //确定首列是否有0
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  //确定首行是否有0
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  //如果一个元素为0，在首行和首列上做标记
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  //根据首列上的标记，将对应的行都标为0，首行要跳过，不能动，首行如果在这里被全标为0，会导致后面的运算将所有位置都标为0
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  //根据首行上的标记，将对应的列都标为0，首列不能动，其实动了也可以
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  //如果首行含有0，则将首行都标为0
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  //如果首列含有0，则将首列都标为0
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

let matrix;
matrix = [
  [1, 2, 3, 2, 5, 6, 7, 8, 9, 1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
  [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 2],
];
matrix = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]];
console.log(matrix);
setZeroes(matrix);
console.log(matrix);
