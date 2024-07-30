package com.yannil.Network.ChatDemo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;

public class TCPClient {

  public static void main(String[] args) {
    Socket socket = null;
    OutputStream os = null;
    BufferedReader input = null;

    try {
      InetAddress serverIp = InetAddress.getByName("127.0.0.1");
      int port = 9528;

      socket = new Socket(serverIp, port);
      os = socket.getOutputStream();

      while (true) {
        input = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("please enter: \t");
        String inputString = input.readLine();
        System.out.println("your input :" + inputString);
        byte[] str = (inputString + "\n").getBytes();

        os.write(str);
        os.flush();

      }

    } catch (Exception e) {

      e.printStackTrace();
    } finally {

      if (os != null) {

        try {
          os.close();
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

    }

  }

}
