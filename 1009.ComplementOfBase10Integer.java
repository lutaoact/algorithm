public class Solution {
    public int bitwiseComplement(int N) {
        if (N == 0) return 1;

        int n = N, bitCount = 0;
        while (n > 0) {
            n /= 2;
            bitCount++;
        }
        return ((int)Math.pow(2, bitCount)) - 1 - N;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        for (int i = 0; i < 100; i++)
            System.out.println(i + " " + sol.bitwiseComplement(i));
    }
}
