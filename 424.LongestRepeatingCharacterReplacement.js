'use strict';

/*
424. Longest Repeating Character Replacement

Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most k times. Find the length of a longest substring containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//滑动窗口算法
var characterReplacement = function(s, k) {
  let N = s.length, count = Array(26).fill(0), maxLen = 0, maxCount = 0, start = 0;
  for (let end = 0; end < N; end++) {
    maxCount = Math.max(maxCount, ++count[s[end].charCodeAt() - 65]);//char - 'A'

    //滑动窗口中有maxCount个相同字符，剩下的字符变化k次，依然无法使窗口里的字符全部相同，所以需要收缩窗口
    while (end - start + 1 > maxCount + k) {
      count[s[start].charCodeAt() - 65]--;
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

characterReplacement = function(s, k) {
  let N = s.length, count = Array(26).fill(0), maxCount = 0, start = 0;
  for (let end = 0; end < N; end++) {
    maxCount = Math.max(maxCount, ++count[s[end].charCodeAt() - 65]);//char - 'A'

    //滑动窗口中有maxCount个相同字符，剩下的字符变化k次，依然无法使窗口里的字符全部相同，所以需要收缩窗口
    if (end - start + 1 > maxCount + k) {
      count[s[start].charCodeAt() - 65]--;
      start++;
    }
  }
  return N - start;
};

let s = "ABAB", k = 2;
console.log(characterReplacement(s, k));

s = "AABABBAABAAAABBBCCAAAA", k = 5;
console.log(characterReplacement(s, k));
