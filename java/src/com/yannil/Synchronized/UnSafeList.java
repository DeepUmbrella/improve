package com.yannil.Synchronized;

import java.util.ArrayList;

public class UnSafeList {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
      new Thread(() -> {
        synchronized (list) {

          list.add("1");
        }
      }).start();
    }
    try {
      Thread.sleep(4000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }

    System.out.println(list.size()); // the list unsafely this length will litter than 100
  }

}
