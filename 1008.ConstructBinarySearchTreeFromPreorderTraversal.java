import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

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
    private TreeNode construct(int[] preorder, int pleft, int pright, int[] inorder, int ileft, int iright, Map<Integer, Integer> map) {
        if (pleft == pright) return new TreeNode(preorder[pleft]);
        if (pleft > pright) return null;

        TreeNode root = new TreeNode(preorder[pleft]);
        int index = map.get(preorder[pleft]);
        root.left = construct(preorder, pleft + 1, pleft + index - ileft, inorder, ileft, index - 1, map);
        root.right = construct(preorder, pleft + index - ileft + 1, pright, inorder, index + 1, iright, map);

        return root;
    }

    public TreeNode bstFromPreorder(int[] preorder) {
        int[] inorder = new int[preorder.length];
        System.arraycopy(preorder, 0, inorder, 0, preorder.length);
        Arrays.sort(inorder);

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }
        return construct(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, map);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        TreeNode root = sol.bstFromPreorder(new int[]{8,5,1,7,10,12});

        System.out.println(root.left.left.val);
        System.out.println(root.left.right.val);
    }
}
