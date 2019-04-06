class Solution {
    public boolean canThreePartsEqualSum(int[] A) {
        int sum  = 0;
        for (int i = 0; i < A.length; i++) sum += A[i];

        int quotient = sum / 3;
        if (quotient * 3 != sum) return false;

        int tmpSum = 0, count = 0;
        for (int i = 0; i < A.length; i++) {
            tmpSum += A[i];
            if (tmpSum == quotient) {
                tmpSum = 0;
                count++;
            }
        }
        return count >= 3;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.canThreePartsEqualSum(new int[]{0,2,1,-6,6,-7,9,1,2,0,1}));
        System.out.println(sol.canThreePartsEqualSum(new int[]{0,2,1,-6,6,7,9,-1,2,0,1}));
        System.out.println(sol.canThreePartsEqualSum(new int[]{3,3,6,5,-2,2,5,1,-9,4}));
    }
}
