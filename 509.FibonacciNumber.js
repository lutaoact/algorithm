/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) return 0;
  if (N === 1) return 1;

  let f0 = 0, f1 = 1, i = 2, f2;
  while (i <= N) {
    f2 = f0 + f1;
    f0 = f1;
    f1 = f2;

    i++;
  }
  return f2;
};

console.log(fib(2));
console.log(fib(4));
console.log(fib(5));
