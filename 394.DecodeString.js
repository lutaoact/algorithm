'use strict';

/*
394. Decode String

Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let N = s.length, countStack = [], strStack = [];
  let i = 0;
  while (i < N) {
    if (!isNaN(s[i])) {//数字
      let count = 0;
      while (!isNaN(s[i])) {
        count = count * 10 + Number(s[i]);
        i++;
      }
      countStack.push(count);
    } else if (s[i] !== ']') {//除闭合方括号']'之外的所有字符
      strStack.push(s[i]);
      i++;
    } else {//闭合方括号']'
      let tmpc = strStack.pop(), str = '';
      while (tmpc !== '[') {//将遇到开口方括号'['之前的所有字符都出栈，然后拼接
        str = tmpc + str;
        tmpc = strStack.pop();
      }
      let count = countStack.pop();
      strStack.push(str.repeat(count));//计算结果再入栈
      i++;
    }
  }
  return strStack.join('');
};

console.log(decodeString('3[a]12[bc]'));
console.log(decodeString('3[a12[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
