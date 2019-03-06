/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stacks = [], N = ops.length, i = 0, result = 0;
  while (i < N) {
    let op = ops[i], num;
    switch (op) {
      case 'D':
        num = stacks[stacks.length - 1] * 2;
        stacks.push(num);
        result += num;
        break;
      case '+':
        let n1 = stacks.pop();
        num = stacks[stacks.length - 1] + n1;
        stacks.push(n1, num);
        result += num;
        break;
      case 'C':
        num = stacks.pop();
        result -= num;
        break;
      default:
        num = Number(op);
        stacks.push(num);
        result += num;
    }
    i++;
  }
  return result;
};

let ops = ["5","2","C","D","+"];
console.log(calPoints(ops));

ops = ["5","-2","4","C","D","9","+","+"];
console.log(calPoints(ops));
