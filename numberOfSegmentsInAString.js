'use strict';

/*
434. Number of Segments in a String

Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  if (s === '') return 0;

  let N = s.length, count = 0, prev = s[0], current;
  if (N === 1) return s === ' ' ? 0 : 1;

  for (let i = 1; i < N; i++) {
    current = s[i];
    if (current === ' ' && prev !== ' ') count++;
    prev = current;
  }
  return current === ' ' ? count : count + 1;
};

console.log(countSegments(' '));
console.log(countSegments(' a  b c '));
console.log(countSegments('a  b c'));
console.log(countSegments('   a  b c'));
console.log(countSegments('   a  b c   '));
