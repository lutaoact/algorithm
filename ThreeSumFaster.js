'use strict';

let a = [-50, -18, -15, -12, -9, -7, 0, 0, 0, 0, 2, 3, 5, 12, 15, 15, 16, 17, 18, 19, 30, 45];
//a = [-50, -18, -15, -12, -9, -7, 0, 0, 0, 0, 2];
//a = [-1,0,1,2,-1,-4];
//a = [3,0,3,2,-4,0,-3,2,2,0,-1,-5];
//a = [5,-9,-11,9,9,-4,14,10,-11,1,-13,11,10,14,-3,-3,-4,6,-15,6,6,-13,7,-11,-15,10,-8,13,-14,-12,12,6,-6,8,0,10,-11,-8,-2,-6,8,0,12,3,-9,-6,8,3,-15,0,-6,-1,3,9,-5,-5,4,2,-15,-3,5,13,-11,7,6,-4,2,11,-5,7,12,-11,-15,1,-1,-9,10,-8,1,2,8,11,-14,-4,-3,-12,-2,8,5,-1,-9,-4,-3,-13,-12,-12,-10,-3,6,1,12,3,-3,12,11,11,10];
a = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];
console.log(ThreeSumFaster(a));

function ThreeSumFaster(nums) {
  nums.sort(function(x, y) { return x - y});
  console.log(nums);
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
        lo++;
      } else if (sum < 0) {
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        lo++;
      } else {
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
        hi--;
      }
    }
    i++;
  }
  return results;
}
