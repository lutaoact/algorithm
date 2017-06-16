'use strict';

/*
119. Pascal's Triangle II

Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex < 0) return [];
  if (rowIndex === 0) return [1];

  let results = [1];
  for (let row = 1; row <= rowIndex; row++) {
    results.push(1);
    let end = results.length - 2, prev = results[0], current;
    for (let i = 1; i <= end; i++) {
      current = results[i];
      results[i] = prev + current;
      prev = current;
    }
  }
  return results;
};

getRow = function(rowIndex) {
  if (rowIndex < 0) return [];
  if (rowIndex === 0) return [1];

  let results = [1];
  for (let row = 1; row <= rowIndex; row++) {
    results.push(1);
    for (let i = results.length - 2; i >= 1; i--) {
      results[i] = results[i] + results[i - 1];
    }
  }
  return results;
};

for (let i = 0; i < 15; i++) {
  console.log(getRow(i));
}
