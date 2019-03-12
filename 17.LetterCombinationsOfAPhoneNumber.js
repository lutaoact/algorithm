/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  let N = digits.length, lettersMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'], results = [];
  backtrack(results, 0, '');
  return results;

  function backtrack(results, index, prevStr) {
    if (prevStr.length === N) {
      results.push(prevStr);
      return;
    }
    let digit = digits[index], letters = lettersMap[digit.charCodeAt() - 48];
    for (let i = 0;  i < letters.length; i++) {
      backtrack(results, index + 1, prevStr + letters[i]);
    }
  }
};

let digits = "234";
console.log(letterCombinations(digits));
