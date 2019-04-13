import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean hasGroupsSizeX(int[] deck) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : deck) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        int minCount = Integer.MAX_VALUE;
        for (Integer count : map.values()) {
            if (count < minCount) minCount = count;
        }
        if (minCount < 2) return false;

        int baseGCD = 0;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int gcd = computeGCD(entry.getValue(), minCount);
            if (gcd == 1) return false;

            if (gcd == 0) {
                baseGCD = gcd; //取一个基准值，可以在循环第一次的时候赋值
                continue;
            }

            if (baseGCD % gcd != 0 && gcd % baseGCD != 0) return false;
        }

        return true;
    }

    public boolean hasGroupsSizeX2(int[] deck) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : deck) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int gcd = 0;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (gcd == 0) {
                gcd = entry.getValue();
            } else {
                gcd = computeGCD(gcd, entry.getValue());
            }
            if (gcd == 1) return false;
        }
        return true;
    }

    private int computeGCD(int num1, int num2) {
        int a, b;
        if (num1 > num2) {
            a = num1;
            b = num2;
        } else {
            a = num2;
            b = num1;
        }
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.computeGCD(8, 6));
        System.out.println(sol.computeGCD(10, 5));
        System.out.println(sol.computeGCD(8, 7));

        System.out.println(sol.hasGroupsSizeX(new int[]{1,2,3,4,4,3,2,1}));
        System.out.println(sol.hasGroupsSizeX(new int[]{1,1,1,2,2,2,3,3}));
        System.out.println(sol.hasGroupsSizeX(new int[]{1}));
        System.out.println(sol.hasGroupsSizeX(new int[]{1,1}));
        System.out.println(sol.hasGroupsSizeX(new int[]{1,1,2,2,2,2}));

        System.out.println(sol.hasGroupsSizeX2(new int[]{1,2,3,4,4,3,2,1}));
        System.out.println(sol.hasGroupsSizeX2(new int[]{1,1,1,2,2,2,3,3}));
        System.out.println(sol.hasGroupsSizeX2(new int[]{1}));
        System.out.println(sol.hasGroupsSizeX2(new int[]{1,1}));
        System.out.println(sol.hasGroupsSizeX2(new int[]{1,1,2,2,2,2}));
    }
}
