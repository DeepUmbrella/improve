package com.yannil.Thread;

import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

public class ThreadSummary {
  public static void main(String[] args) {

    // extends Thread class
    class ThreadExtends extends Thread {

      @Override
      public void run() {
        System.out.println("Thread way 1");
      }

    }

    ThreadExtends tExtends = new ThreadExtends();

    tExtends.start();

    // implements Runnable interface

    class ThreadRunnable implements Runnable {

      @Override
      public void run() {
        System.out.println("Thread way 2");
      }

    }

    new Thread(new ThreadRunnable()).start();

    // implements Callable interface

    class ThreadCallable implements Callable {

      @Override
      public Object call() throws Exception {
        System.out.println("Thread way 3 ");
        return new Object();
      }

    }
    FutureTask<String> tFutureTask = new FutureTask<String>(new ThreadCallable());
    new Thread(tFutureTask).start();

  }

}
