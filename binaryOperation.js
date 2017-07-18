'use strict';

function swap(a, i, j) {
  a[i] ^= a[j];
  a[j] ^= a[i];
  a[i] ^= a[j];
}

function abs(num) {
  return num >> 31 === 0 ? num : (~num + 1);
}

function abs2(num) {
  let i = num >> 31;
  return (num ^ i) - i;
}

function mark(n) {
  let marked = Array(Math.ceil(n / 32)).fill(0);
  for (let i = 0; i < n; i += 3) {
    marked[i / 32 | 0] |= 1 << (i % 32);
  }
  let result = '';
  for (let i = 0; i < n; i++) {
    if (marked[i / 32 | 0] & 1 << (i % 32)) {
      result = '1' + result;
    } else {
      result = '0' + result;
    }
  }
  return result;
}
//console.log(mark(45));

function reverseBitsWithLeadingZeroes(num) {
  printBinary(num);

  let result = 0;
  for (let i = 0; i < 32; i++) {
    result |= (num >>> i & 1) << (31 - i);
  }
  printBinary(result);
  return result;
}
reverseBitsWithLeadingZeroes(158);

function reverseBitsWithoutLeadingZeroes(num) {
  printBinary(num);

  let result = num & 1;
  for (let i = 1; i < 32; i++) {
    num = num >>> 1;
    if (num === 0) break;
    let bit = num & 1;
    result = result << 1 | bit;
  }
  printBinary(result);
  return result;
}
//reverseBitsWithoutLeadingZeroes(158);

function printBinary(num) {
  let str = '';
  for (let i = 0; i < 32; i++) {
    str = '' + (num >> i & 1) + str;
  }
  console.log(str);
}
