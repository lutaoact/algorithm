/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  function compare(p1, p2) {
    return (p1[0] * p1[0] + p1[1] * p1[1]) - (p2[0] * p2[0] + p2[1] * p2[1]);
  }

  function quickSortHelper(A, l, r) {
    let pivot = A[l];
    while (l < r) {
      while (l < r && compare(A[r], pivot) >= 0) r--;
      A[l] = A[r];
      while (l < r && compare(A[l], pivot) <= 0) l++;
      A[r] = A[l];
    }
    A[l] = pivot;
    return l;
  }

  let N = points.length, l = 0, r = N - 1;
  while (l <= r) {
    let mid = quickSortHelper(points, l, r);
    if (mid === K) break;
    if (mid > K) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return points.slice(0, K);
};

let points = [[1,3],[-2,2]], K = 1;
console.log(kClosest(points, K));

points = [[3,3],[5,-1],[-2,4]], K = 2;
console.log(kClosest(points, K));
