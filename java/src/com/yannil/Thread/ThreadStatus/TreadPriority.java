package com.yannil.Thread.ThreadStatus;

public class TreadPriority {

  public static void main(String[] args) {

    // create 10 thread and set priority to 1-10

    for (int i = 0; i < 10; i++) {
      Thread thread = new Thread(
          () -> System.out.println("this is thread priority:" + Thread.currentThread().getPriority()));
      thread.setPriority(i + 1);
      thread.start();

    }

  }

}
