'use strict';

/*
241. Different Ways to Add Parentheses

Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.


Example 1
Input: "2-1-1".

((2-1)-1) = 0
(2-(1-1)) = 2
Output: [0, 2]


Example 2
Input: "2*3-4*5"

(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
Output: [-34, -14, -10, -10, 10]
*/

/**
 * @param {string} input
 * @return {number[]}
 */
//递归
var diffWaysToCompute = function(input) {
  if (!isNaN(input)) return [Number(input)];//如果是一个单独数字，就直接返回

  let map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  let N = input.length, results = [];
  for (let i = 0; i < N; i++) {
    let c = input[i], op = map[c];
    if (!op) continue;

    let leftPart  = input.substr(0, i);
    let rightPart = input.substr(i + 1);

    let leftResults  = diffWaysToCompute(leftPart);
    let rightResults = diffWaysToCompute(rightPart);

    leftResults.forEach(l => {
      rightResults.forEach(r => {
        results.push(op(l, r));
      });
    });
  }

  return results;
};

//动态规划缓存结果，可以更快一些
diffWaysToCompute = function(input) {
  let map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  let dpMap = {};

  return compute(input, map, dpMap);

  function compute(input, map, dpMap) {
    if (!isNaN(input)) return [Number(input)];//如果是一个单独数字，就直接返回

    let N = input.length, results = [];
    for (let i = 0; i < N; i++) {
      let c = input[i], op = map[c];
      if (!op) continue;

      let leftPart  = input.substr(0, i);
      let rightPart = input.substr(i + 1);

      let leftResults;//左半部分的结果，如果有，直接从缓存中取，如果没有，就计算，并放入缓存
      if (dpMap[leftPart]) {
        leftResults = dpMap[leftPart];
      } else {
        leftResults = compute(leftPart, map, dpMap);
        dpMap[leftPart] = leftResults;
      }

      let rightResults;
      if (dpMap[rightPart]) {
        rightResults = dpMap[rightPart];
      } else {
        rightResults = compute(rightPart, map, dpMap);
        dpMap[rightPart] = rightResults;
      }

      //把两部分的结果合并到最终结果中来
      leftResults.forEach(l => {
        rightResults.forEach(r => {
          results.push(op(l, r));
        });
      });
    }
    dpMap[input] = results;

    return results;
  }
};

console.log(diffWaysToCompute('2-1-1'));
console.log(diffWaysToCompute('2*3-4*5'));
console.log(diffWaysToCompute('11'));
