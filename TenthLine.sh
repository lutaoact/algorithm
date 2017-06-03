if [ $(head -n 10 file.txt | wc -l) -eq 10 ]; then
  head -n 10 file.txt | tail -n 1
fi
