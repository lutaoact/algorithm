/**
 * Definition for a binary tree node.
 */
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public TreeNode pruneTree(TreeNode root) {
        if (root == null) return null;
        TreeNode left = pruneTree(root.left);
        TreeNode right = pruneTree(root.right);
        if (left == null && right == null && root.val == 0) {
            return null;
        }
        root.left = left;
        root.right = right;
        return root;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(0);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(0);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(1);

        root = sol.pruneTree(root);

        System.out.println(root.right.right.val);
    }
}
