package com.yannil.Thread.ThreadPool;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class TestPool {
  public static void main(String[] args) {
    ExecutorService executorService = Executors.newFixedThreadPool(10);
    executorService.submit(() -> {
      System.out.println(Thread.currentThread().getName() + "执行了！！");
    });
    executorService.submit(() -> {
      System.out.println(Thread.currentThread().getName() + "执行了！！");
    });
    executorService.submit(() -> {
      System.out.println(Thread.currentThread().getName() + "执行了！！");
    });

    Future<Integer> res1 = executorService.submit(() -> {
      Thread.sleep(10000);
      System.out.println(Thread.currentThread().getName() + "执行了！！");
      return 1;
    });
    executorService.execute(() -> {
      System.out.println(Thread.currentThread().getName() + "执行了！！");
    });

    executorService.submit(() -> {
      System.out.println(Thread.currentThread().getName() + "执行了！！");
    });
    executorService.submit(() -> {
      System.out.println(Thread.currentThread().getName() + "执行了！！");
    });

    try {
      System.out.println("res1: " + res1.get());
    } catch (Exception e) {

      e.printStackTrace();
    }

    executorService.shutdown();
  }
}

class Mythread implements Runnable {

  @Override
  public void run() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'run'");
  }

}