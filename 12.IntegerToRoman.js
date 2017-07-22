'use strict';

/**
 * @param {number} num
 * @return {string}
 */
var romanToInt = function(s) {
  let map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let N = s.length, result = map[s[N - 1]];
  for (let i = N - 2; i >= 0; i--) {
    if (map[s[i]] >= map[s[i + 1]]) {
      result += map[s[i]];
    } else {
      result -= map[s[i]];
    }
  }
  return result;
};

// {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
var intToRoman = function(num) {
  let tuples = [{
    divisor: 100, nine: 'CM', five: 'D', four: 'CD', one: 'C',
  }, {
    divisor: 10, nine: 'XC', five: 'L', four: 'XL', one: 'X',
  }, {
    divisor: 1, nine: 'IX', five: 'V', four: 'IV', one: 'I',
  }];
  let result = 'M'.repeat(num / 1000);
  num %= 1000;
  tuples.forEach((tuple) => {
    if (num >= 9 * tuple.divisor) {
      result += tuple.nine;
      num -= 9 * tuple.divisor;
    } else {
      let count = num / tuple.divisor;
      if (count >= 5) {
        result += tuple.five;
        count -= 5;
      } else if (count >= 4) {
        result += tuple.four;
        count -= 4;
      }
      result += tuple.one.repeat(count);
      num %= tuple.divisor;
    }
  });
  return result;
};

for (let i = 1; i <= 3999; i++) {
  if (romanToInt(intToRoman(i)) !== i) process.exit(1);
  console.log(i, intToRoman(i));
}
