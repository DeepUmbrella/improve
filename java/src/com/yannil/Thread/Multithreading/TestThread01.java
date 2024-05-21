package com.yannil.Thread.Multithreading;

public class TestThread01 extends Thread {
  @Override
  public void run() {
    for (int i = 0; i < 20; i++) {
      System.out.println("print thread 1  " + i);
    }

  }

  public static void main(String[] args) {

    TestThread01 thread01 = new TestThread01();

    thread01.start();

    for (int i = 0; i < 20; i++) {
      System.out.println("print tread2" + i);
    }
  }
}
