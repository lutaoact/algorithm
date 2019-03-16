import java.util.PriorityQueue;
import java.lang.Integer;
import java.lang.String;

public class Solution {
    public int largestSumAfterKNegations(int[] A, int K) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int i : A) {
            pq.add(i);
        }
        while (K-- > 0) {
            pq.add(-pq.poll());
        }
        int sum = 0;
        for (int i = 0; i < A.length; i++) {
            sum += pq.poll();
        }
        return sum;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] A = new int[]{2,-3,-1,5,-4};
        int K = 2;
        System.out.println(sol.largestSumAfterKNegations(A, K));
    }
}
