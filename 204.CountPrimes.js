'use strict';

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let notPrime = Array(n), count = 0;//这里用数组而不是用map，更省空间
  for (let i = 2; i < n; i++) {
    if (!notPrime[i]) {
      count++;
      for (let j = 2; i * j < n; j++) {
        notPrime[i * j] = true;
      }
    }
  }
  return count;
};

console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(4));
console.log(countPrimes(5));
