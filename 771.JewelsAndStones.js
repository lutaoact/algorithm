/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if (J === '' || S === '') return 0;

  let JMap = {};
  for (let i = 0; i < J.length; i++) {
    JMap[J.charAt(i)] = true;
  }
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if (JMap[S.charAt(i)]) {
      result++;
    }
  }
  return result;
};

let J = "aA", S = "aAAbbbb";
console.log(numJewelsInStones(J, S));

J = "z", S = "ZZ"
console.log(numJewelsInStones(J, S));
