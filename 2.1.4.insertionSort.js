'use strict';

let a;
a = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
console.log(insertionSort(a));

function insertionSort(a) {
  let N = a.length;
  for (let i = 1; i < N; i++) {
    console.log(i, a[i]);
    let min = a[i];
    let j;
    for (j = i; j > 0 && a[j - 1] > min; j--) {//发现比min大的数，往后移
      a[j] = a[j - 1];
    }
    a[j] = min;
  }
  return a;
}
