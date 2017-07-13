'use strict';

/*
503. Next Greater Element II

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2;
The number 2 can't find next greater number;
The second 1's next greater number needs to search circularly, which is also 2.
Note: The length of given array won't exceed 10000.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
solution:
Suppose we have a decreasing sequence followed by a greater number
For example [5, 4, 3, 2, 1, 6] then the greater number 6 is the next greater element for all previous numbers in the sequence

We use a stack to keep a decreasing sub-sequence, whenever we see a number x greater than stack.peek() we pop all elements less than x and for all the popped ones, their next greater element is x
For example [9, 8, 7, 3, 2, 1, 6]
The stack will first contain [9, 8, 7, 3, 2, 1] and then we see 6 which is greater than 1 so we pop 1 2 3 whose next greater element should be 6
*/
var nextGreaterElements = function(nums) {
  let N = nums.length, doubleN = 2 * N, stack = [], results = Array(N).fill(-1), num;
  for (let i = 0; i < doubleN; i++) {
    num = nums[i % N];
    while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
      results[stack.pop()] = num;
    }
    if (i < N) stack.push(i);
  }
  return results;
};

console.log(nextGreaterElements([1,2,1]));
console.log(nextGreaterElements([1,2,1,3,1,3]));
