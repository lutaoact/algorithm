class Solution {
    public int dominantIndex(int[] nums) {
        int maxIndex = 0, max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
                maxIndex = i;
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (i != maxIndex && nums[i] * 2 > max) return -1;
        }
        return maxIndex;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.dominantIndex(new int[]{3, 6, 1, 0}));
        System.out.println(sol.dominantIndex(new int[]{1, 2, 3, 4}));
        System.out.println(sol.dominantIndex(new int[]{2, 0, 0, 3}));
    }
}
