package main

import "fmt"

func main() {
	hanoi(3, "A", "C", "B")
}

// 递归解决汉诺塔问题
// 假设从上到下编号依次为1..n，那移动逻辑如下：
// 如果n为1，则直接把n从from移到to
// 如果n大于1，则需要分三步，1. 把n-1(放在n上面的圆片)从from移动到extra 2. 把n从from移到to 3. 把n-1从extra移到to上
// 这里的extra就是从来中转的第三根柱子，要注意传参的时候几个变量的顺序，这里非常易错
func hanoi(n int, from, to, extra string) {
	if n == 1 {
		fmt.Printf("move %d from %s to %s\n", n, from, to)
	} else {
		hanoi(n-1, from, extra, to)
		fmt.Printf("move %d from %s to %s\n", n, from, to)
		hanoi(n-1, extra, to, from)
	}
}
