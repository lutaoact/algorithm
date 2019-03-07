function compare(a, b) {
  let M = a.length, N = b.length, i, j;
  for (i = 0, j = 0; i < M && j < N; i++, j++) {
    if (a[i] < b[i]) return -1;
    else if (a[i] > b[i]) return 1;
  }
  if (i < M) return 1;  //b 更长
  if (j < N) return -1; //a 更长
  return 0;
}

a = 'adefgh', b = 'adefgi';
console.log(compare(a, b));
