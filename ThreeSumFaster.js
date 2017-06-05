'use strict';

let a = [-50, -18, -15, -12, -9, -7, 0, 0, 0, 0, 2, 3, 5, 12, 15, 15, 16, 17, 18, 19, 30, 45];
//a = [-50, -18, -15, -12, -9, -7, 0, 0, 0, 0, 2];
console.log(ThreeSumFaster(a));

function ThreeSumFaster(nums) {
  nums.sort(function(x, y) { return x - y});
//  console.log(nums);
  let i = 0, N = nums.length;
  let results = [], map = {};
  OUTER:
  while (i < N - 2) {
    if (i > 0 && nums[i] === nums[i - 1]) {//开头重复的元素
      i++;
      continue;
    }

    let lo = i + 1, hi = N - 1;
    if (nums[i] + nums[lo] > 0) {//如果前两个数的和已经大于0，那就没有必要再加第三个了
      break OUTER;
    }
    INNER:
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
//      console.log(nums[i], nums[lo], nums[hi], sum);
      if (sum === 0) {
        results.push([nums[i], nums[lo], nums[hi]]);
        //过滤掉中间重复的元素
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
        hi--;
        lo++
      } else if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }
    i++;
  }
  return results;
}
