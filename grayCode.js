'use strict';

//reflect and prefix method
function grayCode(n) {
  let results = [];
  results.push(0);
  for (let i = 0; i < n; i++) {
    let highestBit = 1 << i;
    for (let j = results.length - 1; j >= 0; j--) {
      results.push(highestBit | results[j]);
    }
  }
  return results;
}
//console.log(grayCode(3));

function grayCode2(n) {
  let N = 1 << n;
  let results = Array(N);
  for (let i = 0; i < N; i++) {
    results[i] = binary2gray(i);
  }
  return results;

  //格雷码的数学公式是 n ^ (n / 2)
  function binary2gray(n) {
    return n ^ (n >>> 1);
  }
}
console.log(grayCode2(3));
