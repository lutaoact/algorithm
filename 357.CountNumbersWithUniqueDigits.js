'use strict';

/*
357. Count Numbers with Unique Digits

Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])
*/

/**
 * @param {number} n
 * @return {number}
 */
//第一位不能选0，只能选1-9，所以有9种选法，第二位可选除第一位以外的所有数，有9种情况，第三位有8种，第四位有7种，以此类推，其实这就是一个不含重复数的全排列
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  if (n > 10) return 8877691;

  let perms = Array(n), result = 10;//组合数
  perms[1] = 9;
  for (let i = 2; i <= n; i++) {
    perms[i] = perms[i - 1] * (10 - i + 1);//从11位开始，就都为0了，因为超过11位的，不存在没有重复数字的数了

    result += perms[i];
  }
  return result;
};

console.log(countNumbersWithUniqueDigits(0));
console.log(countNumbersWithUniqueDigits(1));
console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));
console.log(countNumbersWithUniqueDigits(5));
console.log(countNumbersWithUniqueDigits(10));
console.log(countNumbersWithUniqueDigits(11));
console.log(countNumbersWithUniqueDigits(12));
