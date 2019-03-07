/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => a - b);

  let N = A.length;
  for (let i = N - 3; i >= 0; i--) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};

let A;
A = [2,1,2];
console.log(largestPerimeter(A));

A = [1,2,1];
console.log(largestPerimeter(A));

A = [3,2,3,4];
console.log(largestPerimeter(A));

A = [3,6,2,3];
console.log(largestPerimeter(A));

A = [1,2,2,4,18,8];
console.log(largestPerimeter(A));
