package com.yannil.Multithreading;

import java.io.File;
import java.io.IOException;
import java.net.URL;

import org.apache.commons.io.FileUtils;

//public class TestThread02 extends Thread {
public class TestThread02 implements Runnable {

  private String url;
  private String destination;

  public TestThread02(String url, String destination) {
    this.destination = destination;
    this.url = url;
  }

  @Override
  public void run() {
    new WebDownloader().downloader(url, destination);
    System.out.println("download done! : " + destination);
  }

  public static void main(String[] args) {
    TestThread02 testThread02 = new TestThread02(
        "https://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960", "1.jpg");
    TestThread02 testThread01 = new TestThread02(
        "https://gips3.baidu.com/it/u=3557221034,1819987898&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960", "2.jpg");
    TestThread02 testThread03 = new TestThread02(
        "https://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960", "3.jpg");
    // extends Thread interface
    // testThread01.start();
    // testThread02.start();
    // testThread03.start();
    new Thread(testThread02).start();
    new Thread(testThread01).start();
    new Thread(testThread03).start();

  }
}

class WebDownloader {

  public void downloader(String url, String destination) {
    try {
      FileUtils.copyURLToFile(new URL(url), new File(destination));
    } catch (IOException e) {
      e.printStackTrace();
      System.out.println("url or file name incorrect!");
    }
  }

}
