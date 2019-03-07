/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  let words = S.split(' '), N = words.length, results = Array(N), map = {A: true, a: true, E: true, e: true, I: true, i: true, O: true, o: true, U: true, u: true};
  for (let i = 0; i < N; i++) {
    let word = words[i], c = word[0];
    if (map[c]) {
      results[i] = word + 'ma' + 'a'.repeat(i + 1);
    } else {
      results[i] = word.substr(1) + c + 'ma' + 'a'.repeat(i + 1);
    }
  }
  return results.join(' ');
};

let S = "I speak Goat Latin";
console.log(toGoatLatin(S));

S = "The quick brown fox jumped over the lazy dog";
console.log(toGoatLatin(S));
