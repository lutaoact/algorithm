/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let N = logs.length, i = j = N - 1;
  // i,j 双指针移位，都从末尾开始，i回退，遇到digit-log就跟j交换
  // 这样能保证digit-log顺序不乱，并且都在数组的最后面
  // 原地以为，空间复杂度为O(1)
  while (i >= 0) {
    if (!isLetterLog(logs[i])) {
      if (i !== j) {
        swap(logs, i, j);
      }
      j--;
    }
    i--;
  }
  // 到这里j的值就是最后一条letter-log的位置
  // 对数组的前半部分进行排序，使用递归方式的快速排序
  // 可以对快速排序进行改进，元素个数5~15之间的小数组，使用插入排序可能效果更好
  quickHelper(logs, 0, j)
  return logs;

  function quickHelper(A, left, right) {
    if (left >= right) return;

    let l = left, r = right, pivot = A[l];
    while (l < r) {
      while (l < r && compare(A[r], pivot) >= 0) r--;
      A[l] = A[r];
      while (l < r && compare(A[l], pivot) <= 0) l++;
      A[r] = A[l];
    }
    A[l] = pivot;
    quickHelper(A, left, l - 1);
    quickHelper(A, l + 1, right);
  }

  function compare(log1, log2) {
    let s1 = log1.substr(log1.indexOf(' ') + 1), s2 = log2.substr(log2.indexOf(' ') + 1);
    if (s1 < s2) return -1;
    if (s1 === s2) return 0;
    if (s1 > s2) return 1;
  }

  function swap(A, i, j) {
    let tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
  }

  function isLetterLog(log) {
    let index = log.indexOf(' ');
    for (let i = index + 1; i < log.length; i++) {
      let code = log[i].charCodeAt();
      if (code === 32) continue; //空格
      if (code >= 97 && code <= 122) return true; //小写字母
    }
    return false;
  }
};

let logs;
logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"];
console.log(reorderLogFiles(logs));

logs = ["n 1 6", "r wyv", "7 72", "4 95", "x 706"];
console.log(reorderLogFiles(logs));
