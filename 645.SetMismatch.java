class Solution {
    public int[] findErrorNums(int[] nums) {
        int[] results = new int[2];
        for (int i = 0; i < nums.length; i++) {
            int num = Math.abs(nums[i]);
            if (nums[num - 1] > 0) nums[num - 1] = -nums[num - 1];
            else {
                results[0] = Math.abs(nums[i]);
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                results[1] = i + 1;
                break;
            }
        }
        return results;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        for (int i : sol.findErrorNums(new int[]{1,2,2,4}))
            System.out.println(i);
        for (int i : sol.findErrorNums(new int[]{1,5,4,3,5}))
            System.out.println(i);
    }
}
