'use strict';

/*
378. Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ? k ? n2.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let N = matrix.length;
  let lo = matrix[0][0], hi = matrix[N - 1][N - 1];
  while (lo <= hi) {
    let mi = ((hi - lo) / 2 | 0) + lo;
    let count = getLessEqualCount(matrix, mi);
    if (count < k) lo = mi + 1;
    else hi = mi - 1;
  }
  return lo;

  //从左下角向右上角遍历，可以把时间复杂度从O(nlogn)降低到O(n)
  function getLessEqualCount(matrix, val) {
    let N = matrix.length, i = N - 1, j = 0, count = 0;
    while (i >= 0 && j < N) {
      if (matrix[i][j] > val) {
        i--;
      } else {
        count += i + 1;
        j++;
      }
    }
    return count;
  }
};
let matrix, k;
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15],
], k = 8;
console.log(kthSmallest(matrix, k));
