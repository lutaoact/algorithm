/*
748. Shortest Completing Word

Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

Example 1:
Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
Output: "steps"
Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
Note that the answer is not "step", because the letter "s" must occur in the word twice.
Also note that we ignored case for the purposes of comparing whether a letter exists in the word.

Example 2:
Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
Output: "pest"
Explanation: There are 3 smallest length words that contains the letters "s".
We return the one that occurred first.

Note:
licensePlate will be a string with length in range [1, 7].
licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
words will have a length in the range [10, 1000].
Every words[i] will consist of lowercase letters, and have length in range [1, 15].
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let map = {};
  for (let i = 0; i < licensePlate.length; i++) {
    let c = licensePlate[i].toLowerCase();
    if (c >= 'a' && c <= 'z') {
      if (!map[c]) map[c] = 0;
      map[c]++;
    }
  }

  let N = words.length, minLen = Infinity, index = -1;
  for (let i = 0; i < N; i++) {
    let word = words[i];
    if (word.length >= minLen) continue;
    if (isCompletingWord(map, word)) {
      minLen = word.length;
      index = i;
    }
  }
  return words[index];

  function isCompletingWord(map, word) {
    let cmap = {};
    for (let i = 0; i < word.length; i++) {
      if (!cmap[word[i]]) cmap[word[i]] = 0;
      cmap[word[i]]++;
    }
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
      let c = keys[i];
      if (!cmap[c]) return false;
      if (map[c] > cmap[c]) return false;
    }
    return true;
  }
};

let licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"];
console.log(shortestCompletingWord(licensePlate, words));

licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"];
console.log(shortestCompletingWord(licensePlate, words));
