/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sum = (a, b) => a + b, map = {};
  let sumA = A.reduce(sum), sumB = B.reduce(sum), diff = (sumA - sumB) / 2;
  for (let i = 0; i < A.length; i++) map[A[i]] = true;
  for (let j = 0; j < B.length; j++) {
    if (map[diff + B[j]]) return [diff + B[j], B[j]];
  }
};

let A = [1,1], B = [2,2];
console.log(fairCandySwap(A, B));

A = [1,2], B = [2,3];
console.log(fairCandySwap(A, B));

A = [2], B = [1,3];
console.log(fairCandySwap(A, B));

A = [1,2,5], B = [2,4];
console.log(fairCandySwap(A, B));
