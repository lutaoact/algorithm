'use strict';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let N = nums.length, results = [], tmpList = [], visited = Array(N);
  helper(tmpList, nums, visited);
  return results;

  function helper(tmpList, nums, visited) {
    if (tmpList.length === N) {
      results.push(tmpList.map(n => n));
      return;
    }
    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue;

      visited[i] = true;
      tmpList.push(nums[i]);
      console.log('push', tmpList, visited);
      helper(tmpList, nums, visited);
      tmpList.pop();
      console.log('pop', tmpList, visited);
      visited[i] = false;
    }
  }
};

//console.log(permuteUnique([1,2,3]));
//console.log(permuteUnique([1,1,2]));
//console.log(permuteUnique([1,1,1,2]));
//console.log(permuteUnique([2,2,1,1]));
console.log(permuteUnique([3,3,0,3]));
