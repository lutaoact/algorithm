'use strict';

/*
436. Find Right Interval

Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.

For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.

Note:
You may assume the interval's end point is always bigger than its start point.
You may assume none of these intervals have the same start point.
Example 1:
Input: [ [1,2] ]

Output: [-1]

Explanation: There is only one interval in the collection, so it outputs -1.
Example 2:
Input: [ [3,4], [2,3], [1,2] ]

Output: [-1, 0, 1]

Explanation: There is no satisfied "right" interval for [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point;
For [1,2], the interval [2,3] has minimum-"right" start point.
Example 3:
Input: [ [1,4], [2,3], [3,4] ]

Output: [-1, 2, -1]

Explanation: There is no satisfied "right" interval for [1,4] and [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point.
*/

/**
 * Definition for an interval.
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  let N = intervals.length, map = {}, starters = Array(N);
  for (let i = 0; i < N; i++) {
    let start = intervals[i].start;
    starters[i] = start;
    map[start] = i;
  }
  starters.sort((a, b) => a - b);

  let results = Array(N).fill(-1);
  for (let i = 0; i < N; i++) {
    let end = intervals[i].end;
    let start = binarySearch(starters, end);
    if (start >= end) {
      results[i] = map[start];
    }
  }
  return results;

  function binarySearch(nums, key) {
    //直接返回最后一个值，这种情况就是属于没找到
    if (key > nums[nums.length - 1]) return nums[nums.length - 1];

    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
      let mid = ((hi - lo) / 2 | 0) + lo;
      if (nums[mid] < key) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return nums[lo];
  }
};

let intervals;
intervals = [new Interval(1, 2)];
console.log(findRightInterval(intervals));

intervals = [new Interval(3, 4), new Interval(2, 3), new Interval(1, 2)];
console.log(findRightInterval(intervals));

intervals = [new Interval(1, 4), new Interval(2, 3), new Interval(3, 4)];
console.log(findRightInterval(intervals));

intervals = [new Interval(1, 12), new Interval(2, 9), new Interval(3, 10), new Interval(13, 14), new Interval(15, 16), new Interval(16, 17)];
console.log(findRightInterval(intervals));
