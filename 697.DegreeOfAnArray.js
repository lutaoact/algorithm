/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = {}, N = nums.length, pair = null, count = 0;
  for (let i = 0; i < N; i++) {
    let n = nums[i];
    if (!map[n]) map[n] = [1, [i, N]];
    else {
      map[n][0] += 1;
      map[n][1][1] = i;
    }
    if (map[n][0] > count) {
      count = map[n][0];
      pair = map[n][1];
    } else if (map[n][0] === count && map[n][1][1] - map[n][1][0] < pair[1] - pair[0]) {
      pair = map[n][1];
    }
  }

  if (pair[1] === N) return 1; //所有的数字都只出现了1次

  return pair[1] - pair[0] + 1;
};

let nums = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(nums));

nums = [1,2,2,3,1,4,2];
console.log(findShortestSubArray(nums));

nums = [2,1,1,2,1,3,3,3,1,3,1,3,2];
console.log(findShortestSubArray(nums));
