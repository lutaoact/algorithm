'use strict';

/*
260. Single Number III

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

/*
分析：相同的两个数，异或运算结果为0，因为数组中有不相同的值，那取所有值的异或，最后的结果一定是那两个不成对的值的抑或。
因为这两个数是不相同的，所以最终的异或结果一定有一个bit是1，随便取哪个不为1的bit都可以，我们这里取最后一个，注意取法：num & ~(num - 1)
到这一步，数组中的所有值就可以被分成两部分：这一位上是0的，和这一位上是1的
所有这一位上是0的数，只有一个单独的数字，剩下的都是成对的，所以取抑或，最后的结果就是单独的这个值，对于所有这一位上是1的数，同样的处理方法，就能得到另一个数
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let xor = 0;
  nums.forEach((num) => {
    xor ^= num;
  });

  let bitFlag = xor & ~(xor - 1);

  let num1 = 0, num2 = 0;
  nums.forEach((num) => {
    if (num & bitFlag) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  });
  return [num1, num2];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
