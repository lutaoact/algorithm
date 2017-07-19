'use strict';

/*
481. Magical String

A magical string S consists of only '1' and '2' and obeys the following rules:

The string S is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string S itself.

The first few elements of string S is the following: S = "1221121221221121122……"

If we group the consecutive '1's and '2's in S, it will be:

1 22 11 2 1 22 1 22 11 2 11 22 ......

and the occurrences of '1's or '2's in each group are:

1 2 2 1 1 2 1 2 2 1 2 2 ......

You can see that the occurrence sequence above is the S itself.

Given an integer N as input, return the number of '1's in the first N number in the magical string S.

Note: N will not exceed 100,000.

Example 1:
Input: 6
Output: 3
Explanation: The first 6 elements of magical string S is "122112" and it contains three 1's, so return 3.

/**
 * @param {number} n
 * @return {number}
 */
//这种字符串并不是唯一的，根据规则，完全可以自己构造一个合法的字符串，所以本题说的字符串就是题中举例的那个字符串
var magicalString = function(n) {
  if (n <= 0) return 0;

  //前三位为122，从第3位，也就是数字2开始，将2放入队列中
  let result = 1, length = 3, queue = [2], current = 2;
  while (length <= n) {
    let num = queue.shift();
    current ^= 3;
    for (let i = 0; i < num; i++) {
      queue.push(current);
      length++;
      if (current === 1 && length <= n) result++;
    }
  }
  return result;
};

for (let i = 3; i < 20; i++) {
  console.log(i, magicalString(i));
}
