/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let map = {};
  for (let i = 0; i < 26; i++) {
    map[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (compare(words[i], words[i + 1]) > 0) {
      return false;
    }
  }
  return true;

  function compare(a, b) {
    let M = a.length, N = b.length, i, j;
    for (i = 0, j = 0; i < M && j < N; i++, j++) {
      let v1 = map[a[i]], v2 = map[b[i]];
      if (v1 < v2) return -1;
      else if (v1 > v2) return 1;
    }
    if (i < M) return 1;  //b 更长
    if (j < N) return -1; //a 更长
    return 0;
  }
};

let words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz";
console.log(isAlienSorted(words, order));

words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz";
console.log(isAlienSorted(words, order));

words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz";
console.log(isAlienSorted(words, order));
