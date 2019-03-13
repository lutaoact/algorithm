/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let N = A.length, diff = A[N - 1] - A[0];
  if (diff === 0) {
    for (let i = 1; i < N; i++) {
      if (A[i] !== A[i - 1]) return false;
    }
  } else {
    for (let i = 1; i < N; i++) {
      if (diff * (A[i] - A[i - 1]) < 0) return false;
    }
  }

  return true;
};

let A = [1,2,2,3];
console.log(isMonotonic(A));

A = [-1,1,1,0];
console.log(isMonotonic(A));

A = [6,5,4,4];
console.log(isMonotonic(A));

A = [1,3,2];
console.log(isMonotonic(A));

A = [1,2,4,5];
console.log(isMonotonic(A));

A = [1,1,1];
console.log(isMonotonic(A));

A = [1];
console.log(isMonotonic(A));
