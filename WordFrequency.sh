awk '{for (i = 1; i <= NF; i++) { sum[$i] += 1; }} END {for (i in sum) { print i, sum[i]; }}' words.txt | sort -nr -k2
