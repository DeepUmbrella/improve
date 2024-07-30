package com.yannil.Network.FileUpload;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;

public class FileClient {
  public static void main(String[] args) {

    try {

      Socket socket = new Socket(InetAddress.getByName("127.0.0.1"), 9000);
      OutputStream ot = socket.getOutputStream();
      FileInputStream fis = new FileInputStream(new File("2.jpg"));

      byte[] buffer = new byte[1024];
      int len;
      while ((len = fis.read(buffer)) != -1) {

        ot.write(buffer, 0, len);
      }
      socket.shutdownOutput();
      // wait accept done close connect

      InputStream in = socket.getInputStream();
      ByteArrayOutputStream str = new ByteArrayOutputStream();
      int len2;
      byte[] buffer2 = new byte[1024];
      System.out.println("123");
      while ((len2 = in.read(buffer2)) != -1) {
        System.out.println("read :" + len2);
        str.write(buffer2, 0, len2);
      }
      socket.shutdownInput();

      System.out.println(str.toString());

      str.close();
      in.close();

      fis.close();
      ot.close();
      socket.close();

    } catch (Exception e) {
      e.printStackTrace();

    }

  }

}
