/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  let max = A[0], min = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) max = A[i];
    else if (A[i] < min) min = A[i];
  }
  let diff = max - min - 2 * K;
  return diff > 0 ? diff : 0;
};

let A = [1], K = 0;
console.log(smallestRangeI(A, K));

A = [0,10], K = 2;
console.log(smallestRangeI(A, K));

A = [1,3,6], K = 3;
console.log(smallestRangeI(A, K));
