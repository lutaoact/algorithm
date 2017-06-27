'use strict';

/*
475. Heaters

Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.

So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

Note:
Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
As long as a house is in the heaters' warm radius range, it can be warmed.
All the heaters follow your radius standard and the warm radius will the same.
Example 1:
Input: [1,2,3],[2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
Example 2:
Input: [1,2,3,4],[1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
*/

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  heaters.sort(cmpNum);

  let N = heaters.length, index, dist1, dist2, maxDist = 0;
  houses.forEach(function(house) {
    index = searchInsertPosition(heaters, house);
    //house最近的两个heater的位置，哪个更近就用哪个
    dist1 = index >= 1 ? house - heaters[index - 1] : Infinity;
    dist2 = index < N ? heaters[index] - house : Infinity;

    maxDist = Math.max(maxDist, Math.min(dist1, dist2));
  });

  return maxDist;

  function searchInsertPosition(nums, target) {//查找target的插入点
    let N = nums.length, lo = 0, hi = N - 1, mid;
    if (target <= nums[lo]) return 0;
    if (target > nums[hi]) return N;

    while (lo <= hi) {
      mid = lo + ~~((hi - lo) / 2);
      if (nums[mid] < target) {
        lo = mid + 1;
      } else if (nums[mid] > target) {
        hi = mid - 1;
      } else {
        return mid;
      }
    }
    return lo;
  }

  function cmpNum(a, b) {
    return a - b;
  }
};

console.log(findRadius([1,2,3],[2]));
console.log(findRadius([1,2,3,4],[1,4]));
console.log(findRadius([1,2,3,4,5,6,7,8,9,10],[1,8]));
console.log(findRadius([1, 5],[2]));
