'use strict';

/*
135. Candy

There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let N = ratings.length, increments = Array(N).fill(0), inc = 1;
  for (let i = 1; i < N; i++) {
    if (ratings[i] > ratings[i - 1]) {
      increments[i] = inc++;
    } else {
      inc = 1;
    }
  }

  for (let i = N - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      increments[i] = Math.max(increments[i], inc++);
    } else {
      inc = 1;
    }
  }

  let result = N;
  for (let i = 0; i < N; i++) {
    result += increments[i];
  }
  return result;
};

console.log(candy([1,2,3,4,5,4,3,2,1]));
console.log(candy([1,2,1,2,1,2,1,2]));
