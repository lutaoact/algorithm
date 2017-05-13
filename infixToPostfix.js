'use strict';

//运算符优先级映射表
let MAP = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};

//测试数字用一位数，因为我没用空格分隔
//let inputString = '((1+2)*((3-4)*(5-6)))';//12+34-56-**
//let inputString = '(1+2)*((3-4)*(5-6))';//12+34-56-**
let inputString = '8*2+3*5';//82*35*+
console.log(infixToPostfix(inputString));

function infixToPostfix(inputString) {
  let ins = inputString.split('');
  let outs = [], ops = [];

  for (let i = 0; i < ins.length; i++) {
    let c = ins[i];
    SWITCH:
    switch (c) {
      case '(':
        ops.push(c);
        break SWITCH;
      case '+':
      case '-':
      case '*':
      case '/':
        FOR:
        for (let endIndex = ops.length - 1; endIndex >= 0; endIndex = ops.length - 1) {
          let end = ops[endIndex];
          if (end === '(') {
            ops.push(c);
            break FOR;
          } else {
            if (MAP[end] >= MAP[c]) {
              outs.push(ops.pop());
            } else {
              ops.push(c);
              break FOR;
            }
          }
        }
        if (ops.length === 0) {
          ops.push(c);
        }
        break SWITCH;
      case ')':
        while (ops.length > 0) {
          let end = ops.pop();
          if (end === '(') {
            break SWITCH;
          } else {
            outs.push(end);
          }
        }

        break SWITCH;
      default:
        outs.push(c);
        break SWITCH;
    }
    console.log(outs, ops);
  }
  while (ops.length > 0) {
    outs.push(ops.pop());
  }

  return outs.join('');
}
