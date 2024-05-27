package com.yannil.Thread.ThreadWaitAndNotify;

public class Product {

  int id = 0;
  int price = 0;
  int stock = 0;

  public Product(int id, int price) {
    this.id = id;
    this.price = price;
  }

  public synchronized void addStock() {
    if (stock >= 10) {
      try {
        System.out.println("等待中。。。。。");
        this.wait();
        System.out.println("被唤醒了。。。。。 ");
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }

    stock++;

  }

  public synchronized void reduceStock() {
    if (stock == 0) {
      try {
        this.wait();
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }
    stock--;
    this.notify();
  }

}
