import java.util.Map;
import java.util.HashMap;

class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        Map<Integer, Integer> map = new HashMap<>();
        int result = 0;
        for (int i = 0; i < time.length; i++) {
            int remain = time[i] % 60, diff = (60 - remain) % 60;
            if (map.containsKey(diff)) {
                result += map.get(diff);
            }
            map.put(remain, map.getOrDefault(remain, 0) + 1);
        }
        return result;
    }
    public int numPairsDivisibleBy60_2(int[] time) {
        int[] counts = new int[60];
        int result = 0;
        for (int i = 0; i < time.length; i++) {
            int remain = time[i] % 60;
            result += counts[(60 - remain) % 60];
            counts[remain]++;
        }
        return result;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.numPairsDivisibleBy60(new int[]{30,20,150,100,40}));
        System.out.println(sol.numPairsDivisibleBy60(new int[]{60,60,60,60}));
        System.out.println(sol.numPairsDivisibleBy60(new int[]{30,30,30}));

        System.out.println(sol.numPairsDivisibleBy60_2(new int[]{30,20,150,100,40}));
        System.out.println(sol.numPairsDivisibleBy60_2(new int[]{60,60,60,60}));
        System.out.println(sol.numPairsDivisibleBy60_2(new int[]{30,30,30}));
    }
}
