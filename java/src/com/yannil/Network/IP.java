package com.yannil.Network;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class IP {
  public static void main(String[] args) {

    try {

      InetAddress address = InetAddress.getByName("www.baidu.com");
      System.out.println("111: " + address);
      // localhost
      InetAddress locAddress = InetAddress.getLocalHost();
      System.out.println("222 :" + locAddress);
      //
      InetAddress locAddress2 = InetAddress.getByName("www.baidu.com");

      System.out.println("333 :" + locAddress2.getCanonicalHostName());

    } catch (UnknownHostException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }

  }

}
