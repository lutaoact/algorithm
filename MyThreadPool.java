import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.locks.ReentrantLock;
import java.lang.Runnable;
import java.lang.Thread;

class MyThreadPool {
    private List<MyThread> threads;
    private Queue<Runnable> queue;
    private int n; //线程池总线程
    private int workn; //正在工作的线程
    private final ReentrantLock lock = new ReentrantLock();

    public MyThreadPool(int n) {
        this.n = n;
        threads = new ArrayList<MyThread>(n);
        queue = new LinkedList<Runnable>(); //linkedList实现了Queue接口
        workn = 0;
    }

    public void execute(Runnable runnable) {
        try {
            lock.lock();
            if (workn < n) {
                MyThread thread = new MyThread(runnable);
                thread.start();
                threads.add(thread);
                workn++;
            } else {
                if (queue.size() > 10 * n) {
                    return;
                }
                queue.offer(runnable);
            }
        } finally {
            lock.unlock();
        }
    }

    class MyThread extends Thread {
        private Runnable task;
        public MyThread(Runnable runnable) {
            this.task = runnable;
        }
        public void run() {
            while (true) {
                if (task != null) {
                    task.run();
                    task = null;
                } else {
                    Runnable t;
                    try {
                        lock.lock();
                        t = queue.poll();
                    } finally {
                        lock.unlock();
                    }
                    if (t != null) {
                        t.run();
                    }
                }
            }
        }
    }

    static class MyRunnable implements Runnable {
        private int i;
        public MyRunnable(int i) {
            this.i = i;
        }
        public void run() {
            System.out.println("this is my task"+i);
        }
    }

    public static void main(String[] args) {
        MyThreadPool pool = new MyThreadPool(10);
        for (int i = 0; i <= 100; i++) {
            Runnable task = new MyRunnable(i);
            pool.execute(task);
        }
    }
}
