/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let color = image[sr][sc];
  if (color === newColor) return image;

  let d = [-1, 0, 1, 0, -1], M = image.length, N = image[0].length;
  dfs(sr, sc);
  return image;

  // 深度优先遍历
  function dfs(x, y) {
    image[x][y] = newColor;
    for (let i = 0; i < 4; i++) {
      let newx = x + d[i], newy = y + d[i + 1];
      if (inArea(newx, newy) && image[newx][newy] === color) dfs(newx, newy);
    }
  }

  function inArea(x, y) {
    return x >= 0 && x < M && y >= 0 && y < N;
  }
};

let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2;
console.log(floodFill(image, sr, sc, newColor));
