import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[][] intervalIntersection(int[][] A, int[][] B) {
        List<int[]> results = new ArrayList<>();
        int i = 0, j = 0;
        while (i < A.length && j < B.length) {
            int[] a = A[i], b = B[j];
            if (a[1] < b[0]) {
                i++;
                continue;
            }
            if (b[1] < a[0]) {
                j++;
                continue;
            }

            results.add(new int[]{Math.max(a[0], b[0]), Math.min(a[1], b[1])});

            if (a[1] < b[1]) i++;
            else if (a[1] > b[1]) j++;
            else {
                i++;
                j++;
            }
        }
        return results.toArray(new int[results.size()][]);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] A = new int[][]{{0,2},{5,10},{13,23},{24,25}};
        int[][] B = new int[][]{{1,5},{8,12},{15,24},{25,26}};
        for (int[] pair : sol.intervalIntersection(A, B)) {
            StringBuilder sb = new StringBuilder();
            for (int i : pair) {
                sb.append(i + " ");
            }
            System.out.println(sb.toString());
        }
    }
}
