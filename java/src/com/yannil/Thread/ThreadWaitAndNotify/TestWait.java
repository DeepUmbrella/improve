package com.yannil.Thread.ThreadWaitAndNotify;

public class TestWait {
  public static void main(String[] args) {
    Product product = new Product(0, 0);

    new Producer(product, "1号").start();
    new Producer(product, "2号").start();
    new Producer(product, "3号").start();
    new Consumer(product, "1号 Consumer").start();

  }
}
