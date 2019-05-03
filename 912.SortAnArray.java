class Solution {
    private void quickSortHelper(int[] nums, int left, int right) {
        if (left >= right) return;

        int l = left, r = right;
        int pivot = nums[l];
        while (l < r) {
            while (l < r && nums[r] >= pivot) r--;
            nums[l] = nums[r];

            while (l < r && nums[l] <= pivot) l++;
            nums[r] = nums[l];
        }
        nums[l] = pivot;

        quickSortHelper(nums, left, l - 1);
        quickSortHelper(nums, l + 1, right);
    }

    public int[] sortArray(int[] nums) {
        quickSortHelper(nums, 0, nums.length - 1);
        return nums;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        for (int i : sol.sortArray(new int[]{5,2,3,1})) {
            System.out.println(i);
        }
        for (int i : sol.sortArray(new int[]{2, 1, 8, 7, 2, 3, 6, 5, 9, 8, 3, 11, 19, 17, 12, 63, 25})) {
            System.out.println(i);
        }
        for (int i : sol.sortArray(new int[]{5,1,1,2,0,0})) {
            System.out.println(i);
        }
    }
}
