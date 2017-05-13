'use strict';

let str = '1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )';

function convert(str) {
  let a = str.split(' ');
  let vals = [], ops = [];
  for (let i = 0; i < a.length; i++) {
    let c = a[i];
  //  console.log(vals, ops);

    SWITCH:
    switch (c) {
      case '+':
      case '*':
      case '-':
        ops.push(c);
        break SWITCH;
      case ')':
        let o = ops.pop(), v2, v1;
        INNER_SWITCH:
        switch (o) {
          case '+'://这里按照不同的case处理，是为了扩展
          case '*':
          case '-':
            v2 = vals.pop();
            v1 = vals.pop();
            vals.push(['(', v1, o, v2, ')'].join(' '));
            break INNER_SWITCH;
        }
        break SWITCH;
      default://操作数
        vals.push(c);
    }
  }
  return vals[0];
}
console.log(convert(str));
