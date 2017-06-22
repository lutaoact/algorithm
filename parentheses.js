'use strict';

let str = '[()]{}{[()()]()}';
//let str = '[(])';

function check(str) {
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
}
console.log(check(str));
