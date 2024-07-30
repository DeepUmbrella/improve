package com.yannil.Network.FileUpload;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class FileServer {

  public static void main(String[] args) {
    ServerSocket serverSocket = null;
    Socket socket = null;
    InputStream in = null;
    OutputStream out = null;
    FileOutputStream fout = null;

    try {
      // 创建服务器套接字
      serverSocket = new ServerSocket(9000);
      System.out.println("Server is listening on port 9000");

      // 等待客户端连接
      socket = serverSocket.accept();
      System.out.println("Client connected");

      // 获取输入流
      in = socket.getInputStream();
      fout = new FileOutputStream(new File("receive.jpg"));

      byte[] buffer = new byte[1024];
      int len;

      while ((len = in.read(buffer)) != -1) {
        fout.write(buffer, 0, len);
      }
      socket.shutdownInput();
      // receive done notify client can close connect!

      out = socket.getOutputStream();

      out.write("File received successfully".getBytes());

      socket.shutdownOutput();

      System.out.println("File received successfully");

      out.close();

    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      try {
        if (fout != null) {
          fout.close();
        }
        if (in != null) {
          in.close();
        }
        if (socket != null) {
          socket.close();
        }
        if (serverSocket != null) {
          serverSocket.close();
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }
}