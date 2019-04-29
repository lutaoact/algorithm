import java.util.Deque;
import java.util.LinkedList;

class Solution {
    public int minAddToMakeValid(String S) {
        Deque<Character> stack = new LinkedList<>();
        int result = 0;
        for (int i = 0; i < S.length(); i++) {
            if (S.charAt(i) == '(') {
                stack.offer(S.charAt(i));
            } else {
                if (!stack.isEmpty()) {
                    stack.pollLast();
                } else {
                    result += 1;
                }
            }
        }
        return result + stack.size();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.minAddToMakeValid("())"));
        System.out.println(sol.minAddToMakeValid("((("));
        System.out.println(sol.minAddToMakeValid("()"));
        System.out.println(sol.minAddToMakeValid("()))(("));
    }
}
