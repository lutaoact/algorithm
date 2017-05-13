'use strict';

//let str = '4 3 2 1 0 9 8 7 6 5';//true
//let str = '4 6 8 7 5 3 2 9 0 1';//false
//let str = '2 5 6 7 4 8 9 3 1 0';//true
//let str = '4 3 2 1 0 5 6 6 8 9';//true
//let str = '1 2 3 4 5 6 9 8 7 0';//true
//let str = '0 4 6 5 3 8 1 6 2 9';//false
//let str = '1 4 7 9 8 6 5 3 0 2';//false
let str = '2 1 4 3 6 5 8 7 9 0';//true
let ary = str.split(' ');
console.log(ary);

function check(ary) {
  let pushIndex = -1, stack = [];
  for (let i = 0; i < ary.length; i++) {
    let value = Number(ary[i]);
    if (pushIndex < value) {
      while (++pushIndex < value) {
        stack.push(pushIndex);
        console.log(stack);
      }
      console.log(pushIndex);
    } else if (pushIndex > value) {
      let popValue = stack.pop();
      if (popValue !== value) return false;
    }
  }
  return true;
}
console.log(check(ary));
