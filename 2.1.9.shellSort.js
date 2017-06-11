'use strict';

let a;
a = ['E', 'A', 'S', 'Y', 'S', 'H', 'E', 'L', 'L', 'S', 'O', 'R', 'T', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

console.log(shellSort(a));

function shellSort(a) {
  let N = a.length, h = 1;
  while (h < ~~(N / 3)) h = h * 3 + 1;
  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && a[j - h] > a[j]; j -= h) {
        swap(a, j, j - h);
      }
    }
    h = ~~(h / 3);
  }
  return a;
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
