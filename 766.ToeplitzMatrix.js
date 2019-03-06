/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let M = matrix.length, N = matrix[0].length;
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
    }
  }
  return true;
};

// What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
// 常对角矩阵的当前行的元素，总是与上一行中索引减1的位置上的元素相等，除掉第一个元素
var isToeplitzMatrix2 = function(matrix) {
  let M = matrix.length, N = matrix[0].length, prev = matrix[0], i = 1;
  while (i < M) {
    let curr = matrix[i];
    for (let j = 1; j < N; j++) {
      if (curr[j] !== prev[j - 1]) return false;
    }
    prev = curr;
    i++;
  }
  return true;
};

//isToeplitzMatrix = isToeplitzMatrix2
let matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
];
console.log(isToeplitzMatrix(matrix));

matrix = [
  [1,2],
  [2,2]
];
console.log(isToeplitzMatrix(matrix));

matrix = [[18],[66]];
console.log(isToeplitzMatrix(matrix));
