'use strict';

/*
415. Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let L1 = num1.length, L2 = num2.length, carry = 0, sum = 0, i, j, result = '', bit;
  for (i = L1 -1, j = L2 - 1; i >= 0 && j >= 0; i--, j--) {
    sum = (+num1[i]) + (+num2[j]) + carry;
    carry = ~~(sum / 10);
    bit = sum % 10;
    result = bit + result;
  }

  while (i >= 0) {//第一个比第二个长
    if (carry === 0) return num1.substr(0, i + 1) + result;

    sum = (+num1[i]) + carry;
    carry = ~~(sum / 10);
    bit = sum % 10;
    result = bit + result;

    i--;
  }

  while (j >= 0) {//第二个比第一个长
    if (carry === 0) return num2.substr(0, j + 1) + result;

    sum = (+num2[j]) + carry;
    carry = ~~(sum / 10);
    bit = sum % 10;
    result = bit + result;

    j--;
  }

  if (carry === 1) return '1' + result;//最后还有一个进位的

  return result;//相等位数，没有进位的
};

//console.log(addStrings('1234589', '2533467812'));
//console.log(addStrings('7234589', '2533467812'));
//console.log(addStrings('7234589', '9993467812'));
console.log(addStrings('1723', '9212'));
