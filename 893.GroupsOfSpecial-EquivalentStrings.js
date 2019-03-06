/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  let map = {};
  for (let i = 0; i < A.length; i++) {
    let letters = A[i], evens = [], odds = [];
    for (let j = 0; j < letters.length; j += 2) {
      evens.push(letters[j]);
    }
    for (let j = 1; j < letters.length; j += 2) {
      odds.push(letters[j]);
    }
    evens.sort();
    odds.sort();
    map[evens.join('') + odds.join('')] = true;
  }
  return Object.keys(map).length;
};

let A = ["a","b","c","a","c","c"];
console.log(numSpecialEquivGroups(A));

A = ["aa","bb","ab","ba"];
console.log(numSpecialEquivGroups(A));

A = ["abc","acb","bac","bca","cab","cba"];
console.log(numSpecialEquivGroups(A));

A = ["abcd","cdab","adcb","cbad"];
console.log(numSpecialEquivGroups(A));
