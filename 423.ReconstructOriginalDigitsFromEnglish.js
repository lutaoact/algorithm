'use strict';

/*
423. Reconstruct Original Digits from English

Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

Note:
Input contains only lowercase English letters.
Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
Input length is less than 50,000.
Example 1:
Input: "owoztneoer"

Output: "012"
Example 2:
Input: "fviefuro"

Output: "45"
*/

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  let N = s.length, count = Array(10).fill(0),
      map = {
        z: 0,
        w: 2,
        u: 4,
        x: 6,
        g: 8,
        s: 7,//7 - 6
        f: 5,//5 - 4
        h: 3,//3 - 8
        i: 9,//9 - 8 - 6 - 5
        o: 1,//1 - 0 - 2 - 4
      };
  for (let i = 0; i < N; i++) {
    let digit = map[s[i]];
    if (digit === undefined) continue;//并不是所有的字符都需要统计，比如n和e，并不需要统计
    count[digit]++;
  }
  count[7] -= count[6];
  count[5] -= count[4];
  count[3] -= count[8];
  count[9] =  count[9] - count[8] - count[6] - count[5];
  count[1] =  count[1] - count[0] - count[2] - count[4];

  let result = '';
  for (let i = 0; i <= 9; i++) {
    result += String(i).repeat(count[i]);
  }
  return result;
};

console.log(originalDigits('owoztneoer'));
console.log(originalDigits('fviefuro'));
console.log(originalDigits('neo'));
