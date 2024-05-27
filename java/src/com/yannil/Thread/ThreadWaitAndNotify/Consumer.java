package com.yannil.Thread.ThreadWaitAndNotify;

public class Consumer extends Thread {
  Product product;

  @Override
  public void run() {
    while (true) {
      product.reduceStock();
      System.out.println(this.getName() + ": 买到了");
      try {
        Thread.sleep(3000);
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }

  }

  Consumer(Product product, String name) {
    super(name);
    this.product = product;
  }

}