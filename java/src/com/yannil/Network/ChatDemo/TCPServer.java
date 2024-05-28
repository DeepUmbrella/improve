package com.yannil.Network.ChatDemo;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPServer {

  public static void main(String[] args) {
    ServerSocket serverSocket = null;
    Socket socket = null;
    InputStream sInputStream = null;
    ByteArrayOutputStream baop = null;
    try {
      serverSocket = new ServerSocket(9528);

      while (true) {
        System.out.println("wait connecting .....");
        socket = serverSocket.accept();
        System.out.println("connected success .....");
        sInputStream = socket.getInputStream();

        baop = new ByteArrayOutputStream();

        byte[] buffer = new byte[16];

        int len;
        while ((len = sInputStream.read(buffer)) != -1) {
          baop.write(buffer, 0, len);
        }
        System.out.println(baop.toString() + "555555");
      }

    } catch (IOException e) {

      e.printStackTrace();
    } finally {
      if (baop != null) {
        try {
          baop.close();
        } catch (IOException e) {

          e.printStackTrace();
        }
      }
      if (sInputStream != null) {
        try {
          sInputStream.close();
        } catch (IOException e) {

          e.printStackTrace();
        }
      }
      if (socket != null) {
        try {
          socket.close();
        } catch (IOException e) {

          e.printStackTrace();
        }
      }
      if (serverSocket != null) {
        try {
          serverSocket.close();
        } catch (IOException e) {

          e.printStackTrace();
        }
      }

    }
  }

}
