'use strict';

let str = '( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )';
let chars = str.split(' ');
let length = chars.length;
let vals = [], ops = [];

for (let i = 0; i < length; i++) {
  let c = chars[i];
//  console.log(vals, ops);

  SWITCH:
  switch (c) {
    case '(':
      break SWITCH;
    case '+':
    case '*':
      ops.push(c);
      break SWITCH;
    case ')':
      let o = ops.pop(), v2, v1;
      INNER_SWITCH:
      switch (o) {
        case '+':
          v2 = vals.pop();
          v1 = vals.pop();
          vals.push(v1 + v2);
          break INNER_SWITCH;
        case '*':
          v2 = vals.pop();
          v1 = vals.pop();
          vals.push(v1 * v2);
          break INNER_SWITCH;
      }
      break SWITCH;
    default://操作数
      vals.push(Number(c));
  }
}

console.log(vals[0]);
