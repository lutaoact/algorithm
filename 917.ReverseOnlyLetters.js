/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let A = S.split(''), l = 0, r = A.length - 1;
  while (l < r) {
    while (l < r && !isLetter(A[l])) l++;
    while (l < r && !isLetter(A[r])) r--;
    if (l < r) {
      swap(A, l, r);
      l++; r--;
    }
  }
  return A.join('');

  function isLetter(c) {
    let isUpper = c >= 'A' && c <= 'Z';
    let isLower = c >= 'a' && c <= 'z';
    return isUpper || isLower;
  }

  function swap(A, i, j) {
    let tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
  }
  return A.join('');
};

let S = "ab-cd";
console.log(reverseOnlyLetters(S));

S = "a-bC-dEf-ghIj";
console.log(reverseOnlyLetters(S));

S = "Test1ng-Leet=code-Q!";
console.log(reverseOnlyLetters(S));
