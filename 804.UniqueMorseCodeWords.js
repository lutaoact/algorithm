/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let morses = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let map = {}
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let codes = Array(word.length);
    for (let j = 0; j < word.length; j++) {
      codes[j] = morses[word[j].charCodeAt() - 97];
    }
    map[codes.join('')] = true;
  }
  return Object.keys(map).length;
};

let words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));
