'use strict';

let a = [2, 1, 8, 7, 2, 3, 6, 5, 9, 8, 3, 11, 19, 17, 12, 63, 25];
a = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
console.log(selectionSort(a));

function selectionSort(a) {
  let N = a.length;
  for (let i = 0; i < N - 1; i++) {
    let min = i;
    for (let j = i + 1; j < N; j++) {
      if (a[j] < a[min]) min = j;
    }

    if (min !== i) {
      swap(a, min, i);
    }
  }
  return a;
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
