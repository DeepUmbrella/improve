package com.yannil.Multithreading;

public class TestThread03 {
  public static void main(String[] args) {
    RunnableTest tRunnableTest = new RunnableTest();

    new Thread(tRunnableTest).start();
    for (int i = 0; i < 20; i++) {
      System.out.println("run02: " + i);
    }
  }
}

class RunnableTest implements Runnable {
  @Override
  public void run() {
    for (int i = 0; i < 20; i++) {
      System.out.println("run01: " + i);
    }

  }
}