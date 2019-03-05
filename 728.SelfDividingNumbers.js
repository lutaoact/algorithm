/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  function isSelfDiv(n) {
    if (n < 10) return true;
    let tmp = n;
    while (tmp > 0) {
      let remain = tmp % 10;
      tmp = parseInt(tmp / 10);

      if (remain === 0) return false;
      if (n % remain !== 0) return false;
    }
    return true;
  }

  let results = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDiv(i)) {
      results.push(i);
    }
  }
  return results;
};

let left = 1, right = 22;
console.log(selfDividingNumbers(left, right));
