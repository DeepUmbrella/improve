package com.yannil.Network.URL;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class URLTest {
  public static void main(String[] args) {
    try {
      URL url = new URL(
          "https://m10.music.126.net/20240530111424/f8ce7b0f98207af3552897656d4e8fd9/yyaac/obj/wonDkMOGw6XDiTHCmMOi/14050364623/4fa8/6754/7313/59ce745a73bd0faf0aac9248f9dfa775.m4a");

      System.out.println(url.getProtocol());
      System.out.println(url.getHost());
      System.out.println(url.getPath());
      System.out.println(url.getPort());
      System.out.println(url.getQuery());

      try {
        URLConnection connection = url.openConnection();

        InputStream in = connection.getInputStream();

        FileOutputStream fout = new FileOutputStream("out.m4a");

        byte[] buffer = new byte[1024];
        int len;

        while ((len = in.read(buffer)) != -1) {
          fout.write(buffer, 0, len);
        }

        fout.flush();

        fout.close();
        in.close();

      } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }

    } catch (MalformedURLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }

  }

}
