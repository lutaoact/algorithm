/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a - b);
  let N = A.length;
  for (let i = 0; i < N && K > 0 && A[i] < 0; i++, K--) {
    A[i] = -A[i];
  }
  let result = 0, min = Infinity;
  for (let i = 0; i < N; i++) {
    result += A[i];
    if (A[i] < min) min = A[i];
  }
  return result - min * 2 * (K % 2);
};

let A = [4,2,3], K = 1;
console.log(largestSumAfterKNegations(A, K));

A = [3,-1,0,2], K = 3;
console.log(largestSumAfterKNegations(A, K));

A = [2,-3,-1,5,-4], K = 2;
console.log(largestSumAfterKNegations(A, K));
