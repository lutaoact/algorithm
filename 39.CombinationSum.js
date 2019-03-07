/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let N = candidates.length, results = [], tmpList = [];
  backtrack(0, 0);
  return results;

  function backtrack(start, sum) {
    if (sum === target) {
      results.push(tmpList.slice());
      return;
    }
    if (sum > target) {
      return;
    }

    for (let i = start; i < N; i++) {
      tmpList.push(candidates[i]);
      backtrack(i, sum + candidates[i]);
      tmpList.pop();
    }
  }
};

// 如果首先对candidates排序，可以适当优化，减少回溯次数，当值大于target时，提前结束
combinationSum = function(candidates, target) {
  let N = candidates.length, results = [], tmpList = [];
  candidates.sort();
  backtrack(0, 0);
  return results;

  function backtrack(start, sum) {
    if (sum === target) {
      results.push(tmpList.slice());
      return;
    }
    if (sum > target) {
      return;
    }

    for (let i = start; i < N; i++) {
      if (candidates[i] > target) break;

      tmpList.push(candidates[i]);
      backtrack(i, sum + candidates[i]);
      tmpList.pop();
    }
  }
};

let candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates, target));

candidates = [2,3,5], target = 8;
console.log(combinationSum(candidates, target));
