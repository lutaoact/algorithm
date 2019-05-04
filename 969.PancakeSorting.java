import java.util.ArrayList;
import java.util.List;

class Solution {
    private void swap(int[]A, int i, int j) {
        int tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    }

    public List<Integer> pancakeSort(int[] A) {
        List<Integer> results = new ArrayList<>();
        int key = A.length, end = A.length; // end 和 key 其实是相同的值，这里定义两个变量主要是为了代码的可读性
        while (end > 1) {
            int index = -1;
            for (int i = 0; i < end; i++) {
                if (A[i] == key) {
                    index = i;
                    break;
                }
            }

            // key 本来就在正确的位置上，所以无需后续的交换
            if (key == index + 1) {
                end--;
                key--;
                continue;
            }

            if (index != 0) {
                for (int i = 0, j = index; i < j; i++, j--) {
                    swap(A, i, j);
                }
                results.add(index + 1);
            }

            for (int i = 0, j = end - 1; i < j; i++, j--) {
                swap(A, i, j);
            }
            results.add(end);

            end--;
            key--;
        }
        return results;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.pancakeSort(new int[]{3,2,4,1}));
        System.out.println(sol.pancakeSort(new int[]{1,2,3}));
    }
}
