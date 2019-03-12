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

function permute(nums) {
  let N = nums.length, results = [], tmpList = [], map = {};
  backtrack(0);
  return results;

  function backtrack(start) {
    if (tmpList.length === N) {
      results.push(tmpList.slice());
      return;
    }
    for (let i = 0; i < N; i++) {
      if (map[nums[i]]) continue;

      tmpList.push(nums[i]);
      map[nums[i]] = true;
      backtrack(i + 1);
      tmpList.pop();
      map[nums[i]] = false;
    }
  }
}
console.log(permute([1, 2, 3]));
