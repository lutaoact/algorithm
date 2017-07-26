'use strict';

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
