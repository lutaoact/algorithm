import java.lang.Thread;
import java.util.concurrent.locks.ReentrantLock;

public class PrintNumInTurn {
    private static volatile boolean flag = true;
    private static ReentrantLock lock1 = new ReentrantLock();
    public static void main(String[] args) {

        new Thread() {
            @Override
            public void run() {
                for (int i = 1; i <= 10;) {
                    try {
                        lock1.lock();
                        while (flag) {
                            System.out.println(i);
                            i+=2;
                            flag = false;
                        }
                    } finally {
                        lock1.unlock();
                    }
                }
            }
        }.start();

        new Thread() {
            @Override
            public void run() {
                for (int i = 2; i <= 10;) {
                    try {
                        lock1.lock();
                        while (!flag) {
                            System.out.println(i);
                            flag = true;
                            i+=2;
                        }
                    } finally {
                        lock1.unlock();
                    }
                }
            }
        }.start();
    }
}
