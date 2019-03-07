/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let bits = n ^ (n >> 1);
  return (bits & (bits + 1)) === 0;
};

var hasAlternatingBits2 = function(n) {
  let prev = n % 2;
  n = parseInt(n / 2);

  while (n > 0) {
    curr = n % 2;
    if (prev === curr) return false;
    prev = curr;
    n = parseInt(n / 2);
  }
  return true;
};

hasAlternatingBits = hasAlternatingBits2;

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
console.log(hasAlternatingBits(10));
