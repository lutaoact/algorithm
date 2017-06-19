'use strict';

/*
38. Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let a = [];
  a[1] = '1', a[2] = '11';
  if (n <= 0) return '';
  if (n <= 2) return a[n];

  for (let i = 3; i <= n; i++) {
    a[i] = say(i - 1);
  }

  function say(i) {
    let s = a[i], N = s.length, map = {}, result = '';
    for (let i = 0; i < N - 1; i++) {
      let c = s[i];
      if (!map[c]) map[c] = 0;
      map[c]++;

      if (c !== s[i + 1]) {
        result += map[c] + c;
        map[c] = 0;
      }
    }//end loop

    if (s[N - 1] === s[N - 2]) {
      map[s[N - 1]]++;
      result += map[s[N - 1]] + s[N - 1];
    } else {
      result += (map[s[N - 2]] > 0 ? (map[s[N - 2]] + s[N - 2]) : '') + '1' + s[N - 1];
    }
    return result;
  }
  return a[n];
};

console.log(countAndSay(6));
