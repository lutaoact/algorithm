/**
 * // Definition for a QuadTree node.
 */
function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
   this.val = val;
   this.isLeaf = isLeaf;
   this.topLeft = topLeft;
   this.topRight = topRight;
   this.bottomLeft = bottomLeft;
   this.bottomRight = bottomRight;
};

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  let N = grid.length;
  return constructTree(0, 0, N);

  function constructTree(x, y, n) {
    if (n === 1) return new Node(grid[x][y], true, null, null, null, null);

    let half = n / 2;
    let topLeft = constructTree(x, y, half),
        topRight = constructTree(x, y + half, half),
        bottomLeft = constructTree(x + half, y, half),
        bottomRight = constructTree(x + half, y + half, half);
    if (topLeft.val === topRight.val && topRight.val === bottomLeft.val && bottomLeft.val === bottomRight.val && topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf) {
      return new Node(grid[x][y], true, null, null, null, null);
    } else {
      return new Node(0, false, topLeft, topRight, bottomLeft, bottomRight);
    }
  }
};
