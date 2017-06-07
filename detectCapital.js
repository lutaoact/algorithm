'use strict';

/*
520. Detect Capital

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let N = word.length;
  if (N === 1) return true;

  let first = word[0];
  if (isLower(first)) {
    return areAllLower(word, N, 1);
  } else {
    let second = word[1];
    if (isLower(second)) {
      return areAllLower(word, N, 2);
    } else {
      return areAllUpper(word, N, 2);
    }
  }

  //A-Z 65-90
  function isUpper(w) { return w.charCodeAt() <= 90; }

  //a-z 97-122
  function isLower(w) { return w.charCodeAt() >= 97; }

  function areAllUpper(word, N, start) {
    for (let i = start; i < N; i++) {
      if (isLower(word[i])) return false;
    }
    return true;
  }

  function areAllLower(word, N, start) {
    for (let i = start; i < N; i++) {
      if (isUpper(word[i])) return false;
    }
    return true;
  }
};

console.log(detectCapitalUse('Usa'));
