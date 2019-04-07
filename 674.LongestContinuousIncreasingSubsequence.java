class Solution {
    public int findLengthOfLCIS(int[] nums) {
        if (nums.length <= 1) return nums.length;

        int start = 0, end = 1, result = 1;
        while (end < nums.length) {
            if (nums[end] <= nums[end - 1]) {
                if (result < end - start) {
                    result = end - start;
                }
                start = end;
            }
            end++;
        }

        return Math.max(result, end - start);
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.findLengthOfLCIS(new int[]{1,3,5,4,7}));
        System.out.println(sol.findLengthOfLCIS(new int[]{2,2,2,2,2}));
        System.out.println(sol.findLengthOfLCIS(new int[]{1,2,3,4,5}));
    }
}
