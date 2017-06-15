'use strict';

/*
118. Pascal's Triangle

Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) return [];

  let prev = [1], results = [prev];
  for (let i = 2; i <= numRows; i++) {
    let current = [];
    current[0] = prev[0], current[i - 1] = prev[i - 2];
    for (let j = 1; j <= i - 2; j++) {
      current[j] = prev[j - 1] + prev[j];
    }
    results.push(current);
    prev = current;
  }
  return results;
};

console.log(generate(5));
