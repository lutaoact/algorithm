/**
 * @param {string} s
 * @return {string[]}
 */
// 递归回溯法
var restoreIpAddresses = function(s) {
  let N = s.length;
  if (N < 4 || N > 12) return [];

  let results = [];
  backtrack(s, []);
  return results;

  function backtrack(s, tmpList) {
    if (s === '' || tmpList.length === 4) {
      if (s === '' && tmpList.length === 4) {
        results.push(tmpList.join('.'));
      }
      return;
    }

    // 注意这里的循环条件，因为i是截出来的字符串，所以i最大应该取到s.length
    // 另外，如果字符串以0开头，那么后面不能再有其它数字
    for (let i = 1; i <= (s[0] === '0' ? 1 : 3) && i <= s.length; i++) {
      let part = s.substr(0, i);
      if (parseInt(part) <= 255) {
        tmpList.push(part);
        backtrack(s.substr(i), tmpList);
        tmpList.pop();
      }
    }
  }
};

// 暴力循环法
var restoreIpAddresses2 = function(s) {
  let results = [], N = s.length;
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        for (let d = 1; d <= 3; d++) {
          if (a + b + c + d === N) {
            let A = parseInt(s.substr(0, a)),
                B = parseInt(s.substr(a, b)),
                C = parseInt(s.substr(a + b, c)),
                D = parseInt(s.substr(a + b + c, d));
            if (A <= 255 && B <= 255 && C <= 255 && D <= 255) {
              let r = [A, B, C, D].join('.')
              if (r.length === N + 3) {
                results.push(r);
              }
            }
          }
        }
      }
    }
  }
  return results;
};

restoreIpAddresses = restoreIpAddresses2;

let s = "25525511135";
console.log(restoreIpAddresses(s));

s = "202511135";
console.log(restoreIpAddresses(s));
