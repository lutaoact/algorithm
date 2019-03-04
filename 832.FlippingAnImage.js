/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  function swapAndInvert(nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j] ^ 1;
    nums[j] = tmp ^ 1;
  }

  for (let i = 0; i < A.length; i++) {
    let left = 0, right = A[i].length - 1;
    while (left < right) {
      swapAndInvert(A[i], left, right);
      left++; right--;
    }
    if (left === right) {
      A[i][left] = A[i][left] ^ 1;
    }
  }
  return A;
};

let A = [[1,1,0],[1,0,1],[0,0,0]];
console.log(flipAndInvertImage(A));

A = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
console.log(flipAndInvertImage(A));
