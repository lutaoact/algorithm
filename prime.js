'use strict';

function getPrimes(N) {
  let piN = N / (Math.log(N) - 1) | 0;//根据素数定理的推论预估出的素数个数，估计值，并非精确值
  let primes = Array(piN);
  let marked = Array(N);
  let pi = 0;
  for (let i = 2; i < N; i++) {
    if (!marked[i]) {
      primes[pi++] = i;
      marked[i] = true;
    }

    for (let j = 0; j < pi && i * primes[j] < N; j++) {
      marked[i * primes[j]] = true;
      if (i % primes[j] === 0) break;
    }
    console.log(marked);
  }
  while (!primes[primes.length - 1]) primes.pop();//因为数组长度是预估出来的，如果少了，js会自动扩展，如果多了，需要我们把多余的空位处理掉
  return primes;
}

//用位来标记，而不是用bool值，看起来真是一点都不好看
function getPrimes2(N) {
  let piN = N / (Math.log(N) - 1) | 0;//根据素数定理的推论预估出的素数个数，估计值，并非精确值
  let primes = Array(piN);
  let marked = Array(Math.ceil(N / 32)).fill(0);
  let pi = 0;
  for (let i = 2; i < N; i++) {
    if (((marked[i / 32 | 0] & 1 << (i % 32))) === 0) {
      primes[pi++] = i;
      marked[i / 32 | 0] |= 1 << (i % 32);
    }

    for (let j = 0; j < pi && i * primes[j] < N; j++) {
      let multiple = i * primes[j];
      marked[multiple / 32 | 0] |= 1 << (multiple % 32);
      if (i % primes[j] === 0) break;
    }
  }
  while (!primes[primes.length - 1]) primes.pop();//因为数组长度是预估出来的，如果少了，js会自动扩展，如果多了，需要我们把多余的空位处理掉
  return primes;
}
console.log(getPrimes2(25));
