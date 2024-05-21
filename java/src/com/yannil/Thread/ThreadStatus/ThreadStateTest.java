package com.yannil.Thread.ThreadStatus;

public class ThreadStateTest {
  public static void main(String[] args) {

    Thread thread2 = new Thread(() -> {
      for (int i = 0; i < 5; i++) {
        try {
          System.out.println("Tread 2 join!");
          Thread.sleep(1000);

        } catch (InterruptedException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }
      }
      System.out.println("/////////");
    });

    Thread thread = new Thread(() -> {
      for (int i = 0; i < 5; i++) {
        try {
          Thread.sleep(1000);
        } catch (InterruptedException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }
      }
      System.out.println("/////////");
      try {
        thread2.start();
        thread2.join();
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    });

    Thread.State state = thread.getState();
    System.out.println(state + ": 01");

    thread.start();

    state = thread.getState();
    System.out.println(state + ": 02");

    while (state != Thread.State.TERMINATED) {
      try {
        Thread.sleep(100);
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
      state = thread.getState();
      System.out.println(state + ": 03");

    }

  }
}
