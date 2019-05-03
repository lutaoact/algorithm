class Solution {
    public int[][] spiralMatrixIII(int R, int C, int r0, int c0) {
        if (R * C == 1) return new int[][]{{r0, c0}};

        int[][] results = new int[R*C][2];
        int[] d = new int[]{0, 1, 0, -1, 0};
        int index = 0, dir = 0, count = 0, end = 1; //count为偶数时增加同一方向上移动的最大距离
        int x = r0, y = c0;
        results[index++] = new int[]{x, y};
        while (true) {
            int i = 0;
            while (i < end) {
                x += d[dir];
                y += d[dir + 1];
                if (x >= 0 && x < R && y >= 0 && y < C) {
                    results[index++] = new int[]{x, y};
                }
                if (index == R * C) return results;
                i++;
            }
            dir = (dir + 1) % 4;
            count++;
            if (count % 2 == 0) {
                end++;
            }
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        for (int[] pair : sol.spiralMatrixIII(1, 4, 0, 0)) {
            StringBuilder sb = new StringBuilder();
            for (int i : pair) {
                sb.append(i + " ");
            }
            System.out.println(sb.toString());
        }
        for (int[] pair : sol.spiralMatrixIII(5, 6, 1, 4)) {
            StringBuilder sb = new StringBuilder();
            for (int i : pair) {
                sb.append(i + " ");
            }
            System.out.println(sb.toString());
        }
    }
}
