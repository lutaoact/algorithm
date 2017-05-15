'use strict';

let a = [1, 2, 7, 9, 10, 13], b = [2, 5, 7, 8, 12, 12, 13];
console.log(mergeSort(a, b));

function mergeSort(a, b) {
  let al = a.length, bl = b.length;
  let i = 0, j = 0, results = [];
  while (i < al && j < bl) {
    console.log(results, a[i], b[j]);
    if (a[i] < b[j]) {
      results.push(a[i]);
      i++;
    } else if (a[i] > b[j]) {
      results.push(b[j]);
      j++;
    } else {
      results.push(a[i]);
      results.push(b[j]);
      i++; j++;
    }
  }
  while (i < al) {
    results.push(a[i]);
    i++;
  }
  while (j < bl) {
    results.push(b[j]);
    j++;
  }
  return results;
}
