package com.yannil.Thread.ThreadStatus;

public class DaemonThread {
  public static void main(String[] args) {
    Thread thread = new Thread(new God());
    thread.setDaemon(true);
    thread.start();
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  }
}

class God implements Runnable {
  @Override
  public void run() {
    System.out.println("thread start");
  };
}
