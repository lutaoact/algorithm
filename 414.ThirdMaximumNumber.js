'use strict';

/*
414. Third Maximum Number

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let N = nums.length, map = {}, counter = 0, results = [];
  let i = 0;
  //从nums中拿出前3个数，放在results中
  while (i < N) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
      results.push(nums[i]);
      counter++;
      if (counter === 3) break;
    }
    i++;
  }
  //如果results中得到的元素总数没有超过2，则说明原数组中不重复的值不超过2个，直接返回最大值
  if (results.length <= 2) return Math.max.apply(Math, results);

  results.sort(cmpNum);//由大到小排序

  while (i < N) {
    let num = nums[i];
    if (num > results[2] && !map[num]) {
      map[num] = 1;
      let j;
      //利用插入排序的思想，如果前面的值比num更小，就把那个值往后移，最后插入num，这样就维持了一个长度为3的由大到小序列
      for (j = 2; j >= 1 && results[j - 1] < num; j--) {
        results[j] = results[j - 1];
      }
      results[j] = num;
    }
    i++;
  }
  return results[2];

  function cmpNum(a, b) {
    return b - a;
  }
};

console.log(thirdMax([5, 4, 2, 3]));
console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
