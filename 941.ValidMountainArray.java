class Solution {
    //先判断首尾是否满足条件，再判断中间只能出现一个峰值
    public boolean validMountainArray(int[] A) {
        if (A.length < 3) return false;
        if (A[0] >= A[1]) return false;
        if (A[A.length - 2] <= A[A.length - 1]) return false;

        boolean increase = true;
        int end = A.length - 2;
        for (int i = 1; i <= end; i++) {
            if (increase) {
                if (A[i] >= A[i + 1]) increase = false;
            } else {
                if (A[i] <= A[i + 1]) return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.validMountainArray(new int[]{2,1}));
        System.out.println(sol.validMountainArray(new int[]{3,5,3}));
        System.out.println(sol.validMountainArray(new int[]{3,5,5}));
        System.out.println(sol.validMountainArray(new int[]{0,3,2,1}));
    }
}
