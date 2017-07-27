'use strict';

/*
399. Evaluate Division

Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].
The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
//https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
var calcEquation = function(equations, values, queries) {
  let map = {}, N = equations.length;
  for (let i = 0; i < N; i++) {
    let [num, den] = equations[i], val = values[i];
    if (!map[num]) map[num] = {};
    if (!map[den]) map[den] = {};

    map[num][num] = map[den][den] = 1.0;
    map[num][den] = val;
    map[den][num] = 1 / val;
  }
//  console.log(map);

  //按照图论的角度来理解：k表示图中所有的节点，map[k]包含所有和k连通的节点，而i和j表示和k连通的节点
  //因为i和j都和k连通，那就可以通过k来实现i和j的连通
  for (let k in map) {
    for (let i in map[k]) {
      for (let j in map[k]) {
        map[i][j] = map[i][k] * map[k][j];
      }
    }
  }
//  console.log(map);

  return queries.map(query => {
    if (map[query[0]] !== undefined && map[query[0]][query[1]] !== undefined) return map[query[0]][query[1]];
    return -1.0;
  });
};

//TODO 可以用图的遍历算法再做一次，寻找一条连通路径

let equations = [ ["a", "b"], ["b", "c"] ], values = [2.0, 3.0], queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ];
console.log(calcEquation(equations, values, queries));
