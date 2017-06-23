'use strict';

/*
58. Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let N = s.length, end = N, i;

  for (i = N - 1; i >= 0; i--) {
    if (s[i] !== ' ' && end === N) end = i;
    else if (s[i] === ' ' && end !== N) return end - i;
  }
  return end === N ? 0 : end - i;
};

console.log(lengthOfLastWord('    '));
console.log(lengthOfLastWord(' xxx'));
console.log(lengthOfLastWord('xxx'));
console.log(lengthOfLastWord('xxx '));
console.log(lengthOfLastWord('   xxx   '));
