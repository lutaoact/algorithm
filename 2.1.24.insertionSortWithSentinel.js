'use strict';

let a = [1, 5, 8, 3, 2, 7, 4, -1];
console.log(insertionSort(a));

function insertionSort(a) {
  let N = a.length;
  let min = 0;
  for (let i = 1; i < N; i++) {
    if (a[i] < a[min]) min = i;
  }
  swap(a, 0, min);

  for (let i = 2; i < N; i++) {
    let v = a[i];
    let j;
    for (j = i; a[j - 1] > v; j--) {//发现比v大的数，就把该数往后移
      a[j] = a[j - 1];
    }
    a[j] = v;
  }
  return a;
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
