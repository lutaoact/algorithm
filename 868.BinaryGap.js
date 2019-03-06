/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  let i = N, result = 0, prev = -1, curr = 0;
  while (i > 0) {
    let remain = i % 2;
    i = parseInt(i / 2);
    curr += 1;
    if (remain === 0) continue;

    if (prev === -1) {
      prev = curr;
    } else {
      if (curr - prev > result) {
        result = curr - prev;
      }
      prev = curr;
    }
  }
  return result;
};

let N = 22;
console.log(binaryGap(N));

N = 5;
console.log(binaryGap(N));

N = 6;
console.log(binaryGap(N));

N = 8;
console.log(binaryGap(N));

N = 0;
console.log(binaryGap(N));
