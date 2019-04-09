class Solution {
    public boolean isLongPressedName(String name, String typed) {
        if (name == "") return true;
        if (typed == "") return false;
        if (name.charAt(0) != typed.charAt(0)) return false;

        int i = 1, j = 1;
        while (i < name.length() && j < typed.length()) {
            if (name.charAt(i) == typed.charAt(j)) {
                i++;
                j++;
            } else if (typed.charAt(j) == typed.charAt(j - 1)) {
                j++;
            } else {
                return false;
            }
        }
        if (i < name.length()) return false;
        while (j < typed.length()) {
            if (typed.charAt(j) != typed.charAt(j - 1)) {
                return false;
            }
            j++;
        }
        return true;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        String name = "alex", typed = "aaleex";
        System.out.println(sol.isLongPressedName(name, typed));
        name = "saeed"; typed = "ssaaedd";
        System.out.println(sol.isLongPressedName(name, typed));
        name = "leelee"; typed = "lleeelee";
        System.out.println(sol.isLongPressedName(name, typed));
        name = "laiden"; typed = "laiden";
        System.out.println(sol.isLongPressedName(name, typed));
    }
}
