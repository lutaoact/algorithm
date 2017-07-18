'use strict';

/*
134. Gas Station

There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Note:
The solution is guaranteed to be unique.
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//total用来记录问题的解是否存在。若total最终结果非负，则表示一定存在一个解，而j记录的就是这个开始位置之前的那个位置，至少从这个开始位置，是可以到达数组结尾的。
//sum表示是否可以到达数组的结尾，如果非负，表示从开始累加的位置可以到达数组结尾，若再加上total非负，那说明最终转一圈肯定也是可达的，也就是说从数组结尾绕到开头继续前进，最终一定能回到开始位置。
//
var canCompleteCircuit = function(gas, cost) {
  let N = gas.length, sum = 0, total = 0, j = -1;
  for (let i = 0; i < N; i++) {
    let diff = gas[i] - cost[i];
    sum += diff;
    total += diff;
    if (sum < 0) {
      sum = 0;
      j = i;
    }
  }
  return total >= 0 ? j + 1 : -1;
};

let gas, cost;
gas = [1,2,3,4], cost = [2,3,4,1];
console.log(canCompleteCircuit(gas, cost));
