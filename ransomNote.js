'use strict';

/*
383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let magazineN = magazine.length, map = {};
  for (let i = 0; i < magazineN; i++) {
    let m = magazine[i];
    if (map[m] === undefined) map[m] = 0;
    map[m]++;
  }

  let ransomNoteN = ransomNote.length;
  for (let i = 0; i < ransomNoteN; i++) {
    let r = ransomNote[i];
    //如果这个字母在magazine中不存在或者存在的次数不足，则返回false
    if (map[r] === undefined || --map[r] < 0) return false;
  }
  return true;
};

console.log(canConstruct("abbbb", "abbbc"));
//console.log(canConstruct("aa", "ab"));
//console.log(canConstruct("aa", "aab"));
