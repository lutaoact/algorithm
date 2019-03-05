/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  function swap(a, i, j) {
    a[j] = a[j] + a[i];
    a[i] = a[j] - a[i];
    a[j] = a[j] - a[i];
  }

  let low = 0, high = A.length - 1;
  while (low < A.length - 1) {
    if (A[low] % 2) {
      swap(A, low, high);
      high -= 2;
    } else {
      low += 2;
    }
  }
  return A;
};

let A;
A = [4,2,5,7];
console.log(sortArrayByParityII(A));

A = [2,3,1,1,4,0,0,4,3,3];
console.log(sortArrayByParityII(A));

A = [4,1,2,1];
console.log(sortArrayByParityII(A));
