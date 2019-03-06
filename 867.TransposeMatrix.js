/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let M = A.length, N = A[0].length, results = Array(N)
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!results[j]) results[j] = Array(M);
      results[j][i] = A[i][j];
    }
  }
  return results;
};

let A = [[1,2,3],[4,5,6],[7,8,9]];
console.log(transpose(A));

A = [[1,2,3],[4,5,6]];
console.log(transpose(A));
