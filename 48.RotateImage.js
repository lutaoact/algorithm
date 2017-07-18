'use strict';

/*
48. Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//先沿副对角线翻转，再水平翻转
var rotate = function(matrix) {
  let n = matrix.length;
  //以副对角线为对称轴翻转
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      swap(matrix, i, j, n - 1 - j, n - 1 - i);
    }
  }

  //水平翻转
  for (let i = 0; i < parseInt(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      swap(matrix, i, j, n - 1 - i, j);
    }
  }

  function swap(matrix, a1, b1, a2, b2) {
    let tmp = matrix[a1][b1];
    matrix[a1][b1] = matrix[a2][b2];
    matrix[a2][b2] = tmp;
  }
};

//先沿水平翻转，再沿主对角线翻转
rotate = function(matrix) {
  let n = matrix.length;
  //水平翻转
  for (let i = 0; i < parseInt(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      swap(matrix, i, j, n - 1 - i, j);
    }
  }

  //以主对角线为对称轴翻转
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      swap(matrix, i, j, j, i);
    }
  }

  function swap(matrix, a1, b1, a2, b2) {
    let tmp = matrix[a1][b1];
    matrix[a1][b1] = matrix[a2][b2];
    matrix[a2][b2] = tmp;
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix);

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10,11,12],
  [13,14,15,16],
];
rotate(matrix);
console.log(matrix);
