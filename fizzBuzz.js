'use strict';
/*
412. Fizz Buzz

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let results = Array(n);
  for (let i = 0; i < n; i++) {
    let value = i + 1;
    if (value % 3 === 0) {
      results[i] = value % 5 === 0 ? 'FizzBuzz' : 'Fizz';
    } else if (value % 5 === 0) {
      results[i] = value % 3 === 0 ? 'FizzBuzz' : 'Buzz';
    } else {
      results[i] = `${value}`;
    }
  }
  return results;
};

console.log(fizzBuzz(15));
