'use strict';
/*
496. Next Greater Element I

You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
*/

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let N = nums.length, fN = findNums.length, map = {}, results = Array(fN);
  for (let i = 0; i < N; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < fN; i++) {
    let num = findNums[i];
    let index = map[num];
    results[i] = -1;
    for (let j = index + 1; j < N; j++) {
      if (nums[j] > num) {
        results[i] = nums[j];
        break;
      }
    }
  }
  return results;
};

nextGreaterElement = function(findNums, nums) {
  let map = new Map(), stack = [];
  nums.forEach((num) => {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  });

  let fN = findNums.length;
  for (let i = 0; i < fN; i++) {
    findNums[i] = map.get(findNums[i]) || -1;
  }
  return findNums;
};

//这个方法和上面的方法完全一样，只是map使用了字面量对象，比上面的速度更快，有空得调研一下，js的这种新结构是不是有效率问题
nextGreaterElement = function(findNums, nums) {
  let map = {}, stack = [];
  nums.forEach((num) => {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map[stack.pop()] = num;
    }
    stack.push(num);
  });

  let fN = findNums.length;
  for (let i = 0; i < fN; i++) {
    findNums[i] = map[findNums[i]] || -1;
  }
  return findNums;
};

let nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2));
nums1 = [2, 4], nums2 = [1,2,3,4];
console.log(nextGreaterElement(nums1, nums2));
