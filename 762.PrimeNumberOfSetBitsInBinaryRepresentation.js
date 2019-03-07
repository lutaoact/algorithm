/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  // 整数最多只有32bit，用标记法找出小于32的所有素数
  // 也可以直接手动构造一个map，后续直接查找即可
  let marks = Array(32).fill(true); marks[1] = false;
  for (let i = 3; i < 32; i++) {
    if (i % 2 === 0) {
      marks[i] = false;
      continue;
    }

    for (let j = 2 * i; j < 32; j += i) {
      marks[j] = false;
    }
  }

  let result = 0;
  for (let i = L; i <= R; i++) {
    if (marks[countBits(i)]) result += 1;
  }
  return result;

  // n & (n - 1) 可以消掉最后一个1
  function countBits(n) {
    let result = 0;
    while (n > 0) {
      n &= n - 1;
      result += 1;
    }
    return result;
  }
};

var countPrimeSetBits2 = function(L, R) {
  let marks = [ undefined, false, true, true, false, true, false, true, false, false, false, true, false, true, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, true, false, true ];

  let result = 0;
  for (let i = L; i <= R; i++) {
    if (marks[countBits(i)]) result += 1;
  }
  return result;

  // n & (n - 1) 可以消掉最后一个1
  function countBits(n) {
    let result = 0;
    while (n > 0) {
      n &= n - 1;
      result += 1;
    }
    return result;
  }
};

countPrimeSetBits = countPrimeSetBits2;

let L = 6, R = 10;
console.log(countPrimeSetBits(L, R));

L = 10, R = 15;
console.log(countPrimeSetBits(L, R));
