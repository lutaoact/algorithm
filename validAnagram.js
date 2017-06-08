'use strict';

/*
242. Valid Anagram

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/*
分析：这道题和383. Ransom Note的代码几乎完全一样，只多了开头关于长度的一个判断，它们其实是类似的问题
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sN = s.length, tN = t.length;
  if (sN !== tN) return false;

  let map = {};
  for (let i = 0; i < sN; i++) {
    let c = s[i];
    if (map[c] === undefined) map[c] = 0;
    map[c]++;
  }

  for (let i = 0; i < tN; i++) {
    let c = t[i];
    //因为s和t长度相等，所以，如果t中的所有字符在s中都出现过，只有两种可能，要不是出现次数完全相等，要不就是某些字符出现次数更多而另一些字符更少
    if (map[c] === undefined || --map[c] < 0) return false;
  }
  return true;
};

let s = "anagram", t = "nagaram";
s = "rat", t = "rar";
console.log(isAnagram(s, t));
