package com.yannil.Network.UDPDatagram;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.NetworkInterface;
import java.net.SocketException;

public class UDPClient {
  public static void main(String[] args) throws Exception {

    DatagramSocket socket = new DatagramSocket(8000);
    InetSocketAddress addr = new InetSocketAddress("127.0.0.1", 8001);
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    new Thread(new UDPChat(socket)).start();
    while (true) {
      String StringData = reader.readLine();

      if (socket.isClosed()) {
        System.out.println("remote closed the connect!!!");
        break;
      }

      byte[] data = StringData.getBytes();
      DatagramPacket packet = new DatagramPacket(data, 0, data.length, addr);
      socket.send(packet);
      if (StringData.equals("exit")) {
        System.out.println("bye!");
        break;
      }

    }
    System.out.println(InetAddress.getLocalHost());
    ;
    reader.close();
    socket.close();

  }

}
