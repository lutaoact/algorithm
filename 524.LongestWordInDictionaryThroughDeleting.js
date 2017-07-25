'use strict';

/*
524. Longest Word in Dictionary through Deleting

Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output:
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output:
"a"
Note:
All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.
*/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  //将字典d中的字符串排序，按照字符串长度降序，长度相同的，按照字典序升序
  d.sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    return b.length - a.length;//从长到短排序
  });

  let dN = d.length, sN = s.length;
  for (let i = 0; i < dN; i++) {
    let dictWord = d[i];
    let k = 0;
    for (let j = 0; j < sN; j++) {
      if (s[j] === dictWord[k]) {//双指针遍历，查找相同子序列
        if (++k === dictWord.length) return dictWord;
      }
    }
  }

  return '';
};

//不用排序的方案，但是这个似乎更慢
findLongestWord = function(s, d) {
  let dN = d.length, sN = s.length, longest = '';
  for (let i = 0; i < dN; i++) {
    let dictWord = d[i];
    if (dictWord.length < longest.length) continue;//字符串长度小的，直接跳过

    let k = 0;
    for (let j = 0; j < sN; j++) {
      if (s[j] === dictWord[k] && k < dictWord.length) k++;
    }
    if (k === dictWord.length && k >= longest.length) {
      if (k > longest.length || longest > dictWord) {
        longest = dictWord;
      }
    }
  }
  return longest;
};

let s = "abpcplea", d = ["ale","apple","monkey","plea","abbc"];
console.log(findLongestWord(s, d));
