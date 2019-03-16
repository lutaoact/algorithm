/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let N = bits.length, i = 0, step;
  while (i < N) {
    step = bits[i] === 1 ? 2 : 1;
    i += step;
  }
  return step === 1;
};

// 优化方案：由于最后一个数字是0，所以若紧邻这个0之前出现连续的偶数个1，则最后一个0必须是单独的字符
var isOneBitCharacter2 = function(bits) {
  let N = bits.length, sum = 0;
  for (let i = N - 2; i >= 0 && bits[i] !== 0; i--) {
    sum += 1;
  }
  return sum % 2 !== 1;
};

isOneBitCharacter = isOneBitCharacter2;

let bits = [1, 0, 0];
console.log(isOneBitCharacter(bits));

bits = [1, 1, 1, 0];
console.log(isOneBitCharacter(bits));
