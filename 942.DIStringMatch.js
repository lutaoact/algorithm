/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let N = S.length, results = Array(N + 1), min = 0, max = N;
  for (let i = 0; i < N; i++) {
    let c = S[i];
    switch (c) {
      case 'I':
        results[i] = min++;
        break;
      case 'D':
        results[i] = max--;
        break;
    }
  }
  results[N] = max;
  return results;
};

let S = "IDID";
console.log(diStringMatch(S));

S = "III";
console.log(diStringMatch(S));

S = "DDI";
console.log(diStringMatch(S));
