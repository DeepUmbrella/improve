package com.yannil.Synchronized;

import java.util.concurrent.locks.ReentrantLock;

public class TestReentrantLock {
  public static void main(String[] args) {
    TestLock testLock = new TestLock();

    new Thread(testLock).start();
    new Thread(testLock).start();
    new Thread(testLock).start();

  }
}

class TestLock implements Runnable {

  private final ReentrantLock lock = new ReentrantLock();

  int ticketsNums = 10;

  @Override

  public void run() {
    while (true) {
      try {
        lock.lock();
        if (ticketsNums > 0) {
          try {
            Thread.sleep(1000);
          } catch (InterruptedException e) {

            // TODO Auto-generated catch block
            e.printStackTrace();
          }
          System.out.println(ticketsNums--);
        } else {
          break;
        }
      } finally {
        lock.unlock();
      }

    }
  }

}