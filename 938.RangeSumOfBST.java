import java.util.LinkedList;

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
    public int rangeSumBST2(TreeNode root, int L, int R) {
        TreeNode node = root;
        LinkedList<TreeNode> queue = new LinkedList<>();
        int result = 0;
        while (node != null || !queue.isEmpty()) {
            if (node != null) {
                queue.offer(node);
                node = node.left;
            } else {
                node = queue.pollLast();
                if (node.val >= L && node.val <= R) {
                    result += node.val;
                } else if (node.val > R) {
                    return result;
                }
                node = node.right;
            }
        }
        return result;
    }

    public int rangeSumBST(TreeNode root, int L, int R) {
        if (root == null) return 0;
        if (root.val > R) {
            return rangeSumBST(root.left, L, R);
        } else if (root.val < L) {
            return rangeSumBST(root.right, L, R);
        } else {
            return root.val + rangeSumBST(root.left, L, root.val) + rangeSumBST(root.right, root.val, R);
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(7);
        root.right.right = new TreeNode(18);

        Solution sol = new Solution();
        System.out.println(sol.rangeSumBST(root, 7, 15));

        root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(13);
        root.right.right = new TreeNode(18);
        root.left.left.left = new TreeNode(1);
        root.left.right.left = new TreeNode(6);
        System.out.println(sol.rangeSumBST(root, 6, 10));
    }
}
