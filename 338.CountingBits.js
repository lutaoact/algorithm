'use strict';

/*
338. Counting Bits

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  let results = Array(num + 1), i = 2, base = i, nextEnd = i * i;
  results[0] = 0, results[1] = 1;

  while (i <= num && i < nextEnd) {
    results[i] = results[i / base | 0] + results[i % base];
    i++;
    if (i === nextEnd) {
      base = nextEnd;
      nextEnd = i * i;
    }
  }
  return results;
};

countBits = function(num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  let results = Array(num + 1), i = 2, start;
  results[0] = 0, results[1] = 1;

  for (let i = 2; i <= num; i++) {
    if (isPowerOfTwo(i)) {
      start = i;
      results[i] = 1;
    } else {
      results[i] = 1 + results[i - start];
    }
  }
  return results;

  function isPowerOfTwo(n) {
    return (n & n - 1) === 0;
  }
};

//从1开始，遇到偶数时，其1的个数和该偶数除以2得到的数字的1的个数相同
//遇到奇数时，其1的个数等于该奇数除以2得到的数字的1的个数再加1
countBits = function(num) {
  let results = Array(num + 1), i = 2, start;
  results[0] = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      results[i] = results[i / 2];
    } else {
      results[i] = 1 + results[(i - 1) / 2];
    }
  }
  return results;
};

console.log(countBits(8));
