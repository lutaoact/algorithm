'use strict';

/*
390. Elimination Game

There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Find the last number that remains starting with a list of length n.

Example:

Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6
*/

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let remaining = n, head = 1, step = 1, left = true;
  while (remaining > 1) {
    if (left || remaining % 2 === 1) head += step;

    remaining >>>= 1;
    step <<= 1;
    left = !left;
  }
  return head;
};

//相互递归
lastRemaining = function(n) {
  return leftToRight(n);

  // eliminate [1...n] first from left to right, then alternate
  function leftToRight(n) {
    if (n === 1) return 1;
    // scan from left to right is simple, the length of array doesn't matter
    // [1, 2, 3, 4] -> 2 * [1, 2]
    // [1, 2, 3, 4, 5] -> 2 * [1, 2]
    return 2 * rightToLeft(n / 2 | 0);
  }

  // eliminate [1...n] first from right to left, then alternate
  function rightToLeft(n) {
    if (n <= 2) return 1;
    // if the length of array is even, we will get only odd number
    // [1, 2, 3, 4] -> [1, 3] = 2 * [1, 2] - 1
    if (n % 2 === 0) return 2 * leftToRight(n / 2) - 1;
    // else if the length of array is odd, we will get only even number
    // [1, 2, 3, 4, 5] -> [2, 4] = 2 * [1, 2]
    else return 2 * leftToRight(n / 2 | 0);
  }
};

console.log(lastRemaining(9));
