/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let N = candidates.length, results = [], tmpList = [], map = {};
  candidates.sort((a, b) => a - b);
  backtrack(0, target);
  return results;

  function backtrack(start, remain) {
    if (remain === 0) {
      let uniqueKey = tmpList.join(''); //这里为了避免重复，这样做效率比较低
      if (!map[uniqueKey]) results.push(tmpList.slice());
      map[uniqueKey] = true;
      return;
    }

    for (let i = start; i < N; i++) {
      if (remain - candidates[i] < 0) break;

      tmpList.push(candidates[i]);
      backtrack(i + 1, remain - candidates[i]);
      tmpList.pop();
    }
  }
};

// 更高效的方法避免重复
var combinationSum22 = function(candidates, target) {
  let N = candidates.length, results = [], tmpList = [], map = {};
  candidates.sort((a, b) => a - b);
  backtrack(0, target);
  return results;

  function backtrack(start, remain) { //参数time用来标记
    if (remain === 0) {
      results.push(tmpList.slice());
      return;
    }

    for (let i = start; i < N; i++) {
      if (remain - candidates[i] < 0) break;
      if (i !== start && candidates[i] === candidates[i - 1]) continue;

      tmpList.push(candidates[i]);
      backtrack(i + 1, remain - candidates[i]);
      tmpList.pop();
    }
  }
};

combinationSum2 = combinationSum22;

let candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2(candidates, target));

candidates = [1,2,1], target = 8;
console.log(combinationSum2(candidates, target));

candidates = [2,5,2,1,2], target = 5;
console.log(combinationSum2(candidates, target));
