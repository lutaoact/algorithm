'use strict';

/*
413. Arithmetic Slices

A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.


Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
*/

/**
 * @param {number[]} A
 * @return {number}
 */
//根据连续等差数列的最大长度来算可能种类，规律就是，长度为3的只有1中，长度为4的，有1+2种，长度为5的，有1+2+3种。。。
var numberOfArithmeticSlices = function(A) {
  let N = A.length;
  if (N <= 2) return 0;
  let diff = A[1] - A[0], count = 0, result = 0, tmpdiff;//count表示等差数列的长度，这是减过2的长度，因为从第3个数字才能组成有效的等差数列
  for (let i = 2; i < N; i++) {
    tmpdiff = A[i] - A[i - 1];
    if (diff === tmpdiff) {
      count++;
    } else {
      if (count > 0) {
        result += (count + 1) * count / 2;
        count = 0;
      }
      diff = tmpdiff;
    }
  }
  if (count > 0) result += (count + 1) * count / 2;
  return result;
};

numberOfArithmeticSlices = function(A) {
  let N = A.length;

  let prevdiff = A[1] - A[0], curdiff, count = 0, result = 0;
  for (let i = 2; i < N; i++) {
    curdiff = A[i] - A[i - 1];
    if (curdiff === prevdiff) {
      count++;
      result += count;
    } else {
      count = 0;
      prevdiff = curdiff;
    }
  }
  return result;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5]));
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 8, 11, 14]));
console.log(numberOfArithmeticSlices([1, 1, 1, 2, 3, 4, 5, 8, 11, 14]));
