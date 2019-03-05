/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let map = {}, len = A.length;
  for (let i = 0; i < len; i++) {
    let word = A[i];
    for (let j = 0; j < word.length; j++) {
      let c = word[j];
      if (!map[c]) map[c] = Array(len).fill(0);

      map[c][i] += 1; //计数
    }
  }

  let results = [];
  Object.keys(map).forEach(function(c) {
    let counts = map[c], minCount = counts[0];
    for (let i = 1; i < counts.length; i++) {
      if (counts[i] < minCount) minCount = counts[i];
      if (minCount === 0) break; //但凡有计数为0，则该字符就不会包含在结果中
    }

    if (minCount === 0) return;

    Array.prototype.push.apply(results, Array(minCount).fill(c))
  });
  return results;
};

let A = ["bella","label","roller"];
console.log(commonChars(A));

A = ["cool","lock","cook"];
console.log(commonChars(A));
