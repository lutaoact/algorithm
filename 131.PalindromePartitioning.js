/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let results = [];
  backtrack(s, []);
  return results;

  function backtrack(s, tmpList) {
    if (s === '') {
      results.push(tmpList.slice());
      return;
    }

    for (let i = 1; i <= s.length; i++) {
      let part = s.substr(0, i);
      if (isPalindrome(part)) {
        tmpList.push(part);
        backtrack(s.substr(i), tmpList);
        tmpList.pop();
      }
    }
  }

  function isPalindrome(s) {
    if (s === '') return false;

    let l = 0, r = s.length - 1;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++; r--;
    }
    return true;
  }
};

let s = "aab";
console.log(partition(s));

s = 'ccddee'
console.log(partition(s));
