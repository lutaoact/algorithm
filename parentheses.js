'use strict';

let str = '[()]{}{[()()]()}';
//let str = '[(])';

function check(str) {
  let a = str.split(''), stack = [];
  for (let i = 0; i < a.length; i++) {
    let c = a[i];
    switch (c) {
      case '[':
      case '{':
      case '(':
        stack.push(c);
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
    }
  }
  return true;
}
console.log(check(str));
