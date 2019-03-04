/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let exists = {};
  for (let i = 0; i < A.length; i++) {
    let a = A[i];
    if (exists[a]) {
      return a;
    }
    exists[a] = true;
  }
};

let A;
A = [1,2,3,3];
console.log(repeatedNTimes(A));

A = [2,1,2,5,3,2];
console.log(repeatedNTimes(A));

A = [5,1,5,2,5,3,5,4];
console.log(repeatedNTimes(A));
