/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let N = S.length, results = [];
  backtrack(0, "");
  return results;

  function backtrack(i, prevString) {
    if (i >= N) {
      results.push(prevString);
      return;
    }
    let c = S[i];
    if (c >= 'A' && c <= 'Z') backtrack(i + 1, prevString + c.toLowerCase());
    else if (c >= 'a' && c <= 'z') backtrack(i + 1, prevString + c.toUpperCase());
    backtrack(i + 1, prevString + c);
  }
};

let S = "a1b2";
console.log(letterCasePermutation(S));

S = "3z4";
console.log(letterCasePermutation(S));

S = "12345";
console.log(letterCasePermutation(S));
