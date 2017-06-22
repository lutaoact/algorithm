'use strict';

/*
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let N = s.length, stack = [], map = {'[': ']', '{': '}', '(': ')'};

  for (let i = 0; i < N; i++) {
    let c = s[i];
    switch (c) {
      case '[':
      case '{':
      case '(':
        stack.push(c);
        break;
      case ']':
      case '}':
      case ')':
        if (map[stack.pop()] !== c) return false;
        break;
    }
  }
  return stack.length === 0;
};

let str = '[()]{}{[()()]()}';
str = '[(])';
str = '((';
str = '(';

console.log(isValid(str));
