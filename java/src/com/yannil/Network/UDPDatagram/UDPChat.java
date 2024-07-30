package com.yannil.Network.UDPDatagram;

import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class UDPChat implements Runnable {
  DatagramSocket socket;

  public UDPChat(DatagramSocket socket) {
    this.socket = socket;
  }

  @Override
  public void run() {

    try {
      while (true) {
        byte[] buffer = new byte[1024];
        DatagramPacket packet = new DatagramPacket(buffer, 0, buffer.length);
        socket.receive(packet);
        String str = new String(packet.getData(), 0, packet.getLength());
        System.out.println(str);
        if (str.equals("exit")) {
          System.out.println("bye!");
          break;
        }
      }
      socket.close();
    } catch (Exception e) {
      // TODO: handle exception
    }

  }

}
