/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let lettersLen = A[0].length, N = A.length, result = 0;
  for (let j = 0; j < lettersLen; j++) {
    for (let i = 0; i < N - 1; i++) {
      if (A[i][j] > A[i + 1][j]) {
        result += 1;
        break;
      }
    }
  }
  return result;
};

let A = ["cba","daf","ghi"];
console.log(minDeletionSize(A));

A = ["a","b"];
console.log(minDeletionSize(A));

A = ["zyx","wvu","tsr"];
console.log(minDeletionSize(A));
