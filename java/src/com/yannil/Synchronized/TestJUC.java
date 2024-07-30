package com.yannil.Synchronized;

import java.util.concurrent.CopyOnWriteArrayList;

public class TestJUC {
  public static void main(String[] args) {

    CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();

    for (int i = 0; i < 1000; i++) {
      new Thread(() -> {
        list.add("1");
      }).start();
    }

    System.out.println(list.size());
  }

}
