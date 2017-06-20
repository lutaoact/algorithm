'use strict';

/*
438. Find All Anagrams in a String

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let pN = p.length, map = {}, counter = 0;
  for (let i = 0; i < pN; i++) {
    let c = p[i];
    if (!map[c]) {
      map[c] = 1;
      counter++;
    } else {
      map[c]++;
    }
  }

  let begin = 0, end = 0, results = [], sN = s.length;
  while (end < sN) {
    let c = s[end];
    if (map[c] !== undefined) map[c]--;
    if (map[c] === 0) counter--;
    end++;

    while (counter === 0) {
      if (end - begin === pN) results.push(begin);

      let tmpc = s[begin];
      if (map[tmpc] !== undefined) {
        map[tmpc]++;
        if (map[tmpc] > 0) counter++;
      }
      begin++;
    }
  }

  return results;
};

let s = "cbaebabacd", p = "abc";
s = "acbaebaaabacd", p = "aabc";
console.log(findAnagrams(s, p));
