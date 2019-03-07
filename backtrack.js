function subsets(A) {
  let N = A.length, results = [], tmpList = [];
  backtrack(0);
  return results;

  function backtrack(start) {
    results.push(tmpList.slice());
    for (let i = start; i < N; i++) {
      tmpList.push(A[i]);
      backtrack(i + 1);
      tmpList.pop();
    }
  }
}

console.log(subsets([1, 2, 3]));
