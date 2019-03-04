/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let len = str.length;
  let results = Array(len);
  for (let i = 0; i < len; i++) {
    c = str[i];
    charCode = c.charCodeAt();
    results[i] = (charCode >= 65 && charCode <= 90) ? String.fromCharCode(charCode + 32) : c;
  }
  return results.join('');
};

let str;
str = "Hello";
console.log(toLowerCase(str));

str = "here";
console.log(toLowerCase(str));

str = "LOVELY";
console.log(toLowerCase(str));
