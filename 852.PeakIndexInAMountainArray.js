/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let low = 1, high = A.length - 2;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
      return mid;
    }

    if (A[mid - 1] < A[mid] && A[mid] < A[mid + 1]) {
      low = mid + 1;
    } else if (A[mid - 1] > A[mid] && A[mid] > A[mid + 1]) {
      high = mid - 1;
    }
  }
};

let A = [0,1,0];
console.log(peakIndexInMountainArray(A));

A = [0,2,1,0];
console.log(peakIndexInMountainArray(A));
