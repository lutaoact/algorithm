'use strict';

/*
539. Minimum Time Difference

Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

Example 1:
Input: ["23:59","00:00"]
Output: 1
Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.
*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let totalMinutes = 1440, marked = Array(totalMinutes).fill(0);//一天最多就24*60分钟，marked标记这个时间点出现了几次
  let N = timePoints.length;
  for (let i = 0; i < N; i++) {
    let [h, m] = timePoints[i].split(':').map(Number);
    let minutes = 60 * h + m;
    marked[minutes]++;
    if (marked[minutes] === 2) return 0;//因为题目中并没有说时间点不会重复出现，如果重复出现，则直接返回0
  }

  let first = null, prev = null, result = Infinity;
  for (let i = 0; i < totalMinutes; i++) {
    if (marked[i]) {
      if (prev === null) {
        prev = i;
        first = i;
      } else {
        result = Math.min(result, i - prev);
        prev = i;
      }
    }
  }
  return Math.min(result, first + totalMinutes - prev);//循环结束时，prev指向最后一个时间点
};

console.log(findMinDifference(["23:59","00:00"]));
console.log(findMinDifference(['12:00','12:02',"23:58","00:08",'00:03']));
