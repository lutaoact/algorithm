class Solution {
    public boolean rotateString(String A, String B) {
        return A.length() == B.length() && (A + A).contains(B);
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        String A = "abcde", B = "cdeab";
        System.out.println(sol.rotateString(A, B));
    }
}
