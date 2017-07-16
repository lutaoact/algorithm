'use strict';

/*
592. Fraction Addition and Subtraction

Given a string representing an expression of fraction addition and subtraction, you need to return the calculation result in string format. The final result should be irreducible fraction. If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1. So in this case, 2 should be converted to 2/1.

Example 1:
Input:"-1/2+1/2"
Output: "0/1"
Example 2:
Input:"-1/2+1/2+1/3"
Output: "1/3"
Example 3:
Input:"1/3-1/2"
Output: "-1/6"
Example 4:
Input:"5/3+1/3"
Output: "2/1"
Note:
The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
Each fraction (input and output) has format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1,10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
The number of given fractions will be in the range [1,10].
The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.
*/

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  let fractions = expression.split(/(?=[-+])/);//正向前向断言，没想到js的正则居然支持这个
  let numerator = 0, denominator = 1;
  for (let i = 0, N = fractions.length; i < N; i++) {
    let [n, d] = fractions[i].split('/');
    numerator = numerator * Number(d) + denominator * Number(n);
    denominator *= Number(d);

    //每次运算完了约分一下，防止分母因为不断相乘导致溢出
    let divisor = gcd(Math.abs(numerator), denominator);
    numerator /= divisor;
    denominator /= divisor;
  }
  return [numerator, denominator].join('/');

  function gcd(a, b) {//最大公约数Greatest Common Divisor
    if (a === 0 || b === 0) return a + b;
    while (b > 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  }
};

fractionAddition = function(expression) {
  let fractions = expression.split(/(?=[-+])/);//正向前向断言，没想到js的正则居然支持这个
  let numerator = 0, denominator = 1;
  for (let i = 0, N = fractions.length; i < N; i++) {
    let [n, d] = fractions[i].split('/');
    numerator = numerator * Number(d) + denominator * Number(n);
    denominator *= Number(d);
  }

  //对运算结果进行约分
  let divisor = gcd(Math.abs(numerator), denominator);
  numerator /= divisor;
  denominator /= divisor;
  return [numerator, denominator].join('/');

  function gcd(a, b) {//最大公约数Greatest Common Divisor
    if (a === 0 || b === 0) return a + b;
    while (b > 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  }
};

console.log(fractionAddition('-1/2+1/2'));
console.log(fractionAddition('-1/2+1/2+1/3'));
console.log(fractionAddition('1/3-1/2'));
console.log(fractionAddition('5/3+1/3'));
