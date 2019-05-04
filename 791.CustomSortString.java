import java.util.*;

class MyComparator implements Comparator<Character> {
    Map<Character, Integer> map;
    public MyComparator(Map<Character, Integer> m) {
        map = m;
    }

    @Override
    public int compare(Character o1, Character o2) {
        Integer i1 = map.get(o1), i2 = map.get(o2);
        if (i1 == null && i2 == null) return 0;
        if (i1 == null) return -1;
        if (i2 == null) return 1;

        return i1.compareTo(i2);
    }
}

class Solution {
    public String customSortString(String S, String T) {
        Map<Character, Integer> map = new HashMap<>();
        char[] chars = S.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            map.put(chars[i], i);
        }

        // 字符串转为 Character Array，没有直接转的方法
        Character[] charsT = new Character[T.length()];
        for (int i = 0; i < T.length(); i++) {
            charsT[i] = new Character(T.charAt(i));
        }

        MyComparator cmp = new MyComparator(map);
        Arrays.sort(charsT, cmp);

        // Character Array 转为字符串，没有直接转的方法
        StringBuilder sb = new StringBuilder();
        for (Character c : charsT) {
            sb.append(c);
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.customSortString("cba", "abcd"));
        System.out.println(sol.customSortString("awjeuldzxknyocsrfpvq", "itnmbfynwuktoeulvfrjowqqnburnvendrafgfcgjiaovffzoxocsonpxmuqfhluzhaiuvldldvrcvofsfnaqfxrdnkvoguxqbke"));
    }
}
