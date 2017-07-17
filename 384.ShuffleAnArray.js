'use strict';

/*
384. Shuffle an Array

Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  this.shuffled = Array(nums.length);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let N = this.nums.length;
  for (let i = 0; i < N; i++) {
    let j = uniform(i + 1);

    this.shuffled[i] = this.shuffled[j];
    this.shuffled[j] = this.nums[i];
  }
  return this.shuffled;

  function uniform(n) {
    return Math.random() * n | 0;
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
let nums = [1,2,3,4,5,6,7];
let obj = new Solution(nums);
let param_1 = obj.reset()
let param_2 = obj.shuffle()
let param_3 = obj.reset()
console.log(param_1);
console.log(param_2);
console.log(param_3);
