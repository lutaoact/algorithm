'use strict';

/*
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let map = {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, A: 1, B: 1, C: 1, D: 1, E: 1, F: 1, G: 1, H: 1, I: 1, J: 1, K: 1, L: 1, M: 1, N: 1, O: 1, P: 1, Q: 1, R: 1, S: 1, T: 1, U: 1, V: 1, W: 1, X: 1, Y: 1, Z: 1, a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1, m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, u: 1, v: 1, w: 1, x: 1, y: 1, z: 1};
  let N = s.length, lo = 0, hi = N - 1;
  while (lo <= hi) {
    while (lo <= hi && !map[s[lo]]) lo++;
    while (lo <= hi && !map[s[hi]]) hi--;

    if (lo <= hi && s[lo++].toLowerCase() !== s[hi--].toLowerCase()) return false;
  }
  return true;
};

//console.log(isPalindrome(''));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome(' '));
