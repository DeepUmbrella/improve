package com.yannil.Multithreading;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class TestTreade03 {

  public static void main(String[] args) {
    ExecutorService executors = Executors.newFixedThreadPool(3);
    CallableTest test01 = new CallableTest();
    Future<String> result = executors.submit(test01);
    Future<String> result2 = executors.submit(test01);
    Future<String> result3 = executors.submit(test01);

    try {
      String rs1 = result.get();
      String rs2 = result3.get();
      String rs3 = result2.get();

      System.out.println(rs1 + rs2 + rs3);
    } catch (InterruptedException | ExecutionException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }

    executors.shutdown();

  }
}

class CallableTest implements Callable<String> {

  @Override
  public String call() throws Exception {
    System.out.println("call");
    return "call";
  }

}