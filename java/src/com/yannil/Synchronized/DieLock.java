package com.yannil.Synchronized;

public class DieLock {
  public static void main(String[] args) {

    new Makeup(1).start();
    new Makeup(2).start();
  }
}

class Miner {

}

class Lipstick {

}

class Makeup extends Thread {
  int choice;
  static Miner miner = new Miner();
  static Lipstick lipstick = new Lipstick();

  public Makeup(int choice) {
    this.choice = choice;
  }

  @Override
  public void run() {
    makeup(choice);

  }

  private synchronized void makeup(int choice) {

    if (choice == 1) {
      try {
        synchronized (miner) {
          System.out.println("mining");
          Thread.sleep(1000);
          synchronized (lipstick) {
            System.out.println("makeup");
          }
        }
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    } else if (choice == 2) {
      try {
        synchronized (lipstick) {
          System.out.println("lipsticking");
          Thread.sleep(2000);
          synchronized (miner) {
            System.out.println("makeup");
          }
        }
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }
  }
}