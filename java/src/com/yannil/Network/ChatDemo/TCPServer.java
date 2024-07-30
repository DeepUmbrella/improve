package com.yannil.Network.ChatDemo;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
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

        new ClientHandler(socket).start();
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

class ClientHandler extends Thread {
  private Socket socket;

  public ClientHandler(Socket socket) {
    this.socket = socket;
  }

  public void run() {
    try (BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {
      String message;
      while ((message = reader.readLine()) != null) {
        System.out.println("Received: " + message);
        // 在这里处理接收到的消息
      }
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      try {
        if (socket != null) {
          socket.close();
        }
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
  }
}