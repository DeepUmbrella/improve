package com.yannil.Thread.ThreadWaitAndNotify;

public class Producer extends Thread {
  Product product;

  @Override
  public void run() {
    while (true) {
      product.addStock();
      System.out.println(this.getName() + ": 生产了");
      try {
        Thread.sleep(1000);
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }

  }

  Producer(Product product, String name) {
    super(name);
    this.product = product;
  }

}
