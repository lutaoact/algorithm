/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let S = A + ' ' + B;
  let words = S.trim().split(' '), N = words.length, map = {};
  for (let i = 0; i < N; i++) {
    if (map[words[i]] === undefined) map[words[i]] = 0;
    map[words[i]] += 1;
  }
  return Object.keys(map).filter(function(word) {
    return map[word] === 1;
  });
};

let A = "this apple is sweet", B = "this apple is sour";
console.log(uncommonFromSentences(A, B));

A = "apple apple", B = "banana";
console.log(uncommonFromSentences(A, B));
