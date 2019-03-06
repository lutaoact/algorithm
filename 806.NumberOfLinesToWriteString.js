/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  let lineCount = 1, currWidth = 0;
  for (let i = 0; i < S.length; i++) {
    let width = widths[S[i].charCodeAt() - 97];
    if (currWidth + width > 100) {
      lineCount += 1;
      currWidth = width;
    } else {
      currWidth += width;
    }
  }
  return [lineCount, currWidth];
};

let widths, S;
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], S = "abcdefghijklmnopqrstuvwxyz";
console.log(numberOfLines(widths, S));

widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], S = "bbbcccdddaaa";
console.log(numberOfLines(widths, S));
