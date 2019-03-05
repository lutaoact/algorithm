/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let currentSum = 0;
  A.forEach(function(num) {
    if (num % 2 === 0) currentSum += num;
  });
  console.log(currentSum);

  let N = queries.length, results = Array(N);
  for (let i = 0; i < N; i++) {
    let query = queries[i], oldValue = A[query[1]], newValue = oldValue + query[0];
    if (oldValue % 2 === 0) currentSum -= oldValue;
    if (newValue % 2 === 0) currentSum += newValue;
    A[query[1]] = newValue;

    results[i] = currentSum;
  }
  return results;
};

let A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]];
console.log(sumEvenAfterQueries(A, queries));
