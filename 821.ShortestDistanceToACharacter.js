/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let N = S.length, from = 0, prev = -1, next = S.indexOf(C), results = Array(N), i = 0;
  while (next >= 0) {
    if (prev < 0) {
      while (i <= next) {
        results[i] = next - i;
        i++;
      }
    } else {
      let mid = parseInt((next - prev - 1) / 2) + prev;
      while (i <= mid) {
        results[i] = i - prev;
        i++;
      }
      while (i <= next) {
        results[i] = next - i;
        i++;
      }
    }
    from = next + 1;
    prev = next;
    next = S.indexOf(C, from);
  }
  while (i < N) {
    results[i] = i - prev;
    i++;
  }
  return results;
};

let S, C;
S = 'e', C = 'e';
console.log(shortestToChar(S, C));

S = "loveleetcode", C = 'e';
console.log(shortestToChar(S, C));

S = "aaba", C = 'b';
console.log(shortestToChar(S, C));
