/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let len = A.length, results = Array(len), negatives = [];
  let i = 0;
  for (; i < len; i++) {
    let a = A[i];
    if (a < 0) {
      negatives.unshift(-a);
    } else {
      break;
    }
  }
  let j = 0, k = 0;
  while (i < len && j < negatives.length) {
    if (A[i] < negatives[j]) {
      results[k] = A[i] * A[i];
      k++; i++;
    } else {
      results[k] = negatives[j] * negatives[j];
      k++; j++
    }
  }
  while (i < A.length) {
    results[k] = A[i] * A[i];
    k++; i++;
  }
  while (j < negatives.length) {
    results[k] = negatives[j] * negatives[j];
    k++; j++
  }
  return results;
};

let A = [-4,-1,0,3,10];
console.log(sortedSquares(A));

A = [-7,-3,2,3,11];
console.log(sortedSquares(A));

A = [2,3,11];
console.log(sortedSquares(A));
