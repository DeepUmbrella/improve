package com.yannil.Thread.StaticProxy;

public class StaticProxy {
  public static void main(String[] args) {

    Proxy proxy = new SelfProxy();
    proxy.translate();
    proxy = new CustomMarry(proxy);
    proxy.translate();
    proxy = new CustomMarry();
    proxy.translate();
  }
}

/**
 * InnerStaticProxy
 */
interface Proxy {

  void translate();
}

class SelfProxy implements Proxy {

  @Override
  public void translate() {
    System.out.println("base translate proxy start");
    System.out.println("base translate proxy over");
  }
}

class CustomMarry implements Proxy {
  private Proxy pre_proxy = null;

  public CustomMarry(Proxy pre_proxy) {
    this.pre_proxy = pre_proxy;
  }

  public CustomMarry() {

  }

  @Override
  public void translate() {
    System.out.println("custom translate proxy start");
    this.runPreTranslate();
    System.out.println("custom translate proxy over");
  }

  private void runPreTranslate() {
    if (this.pre_proxy == null) {
      System.out.println("Not set pre proxy!");
    } else {
      this.pre_proxy.translate();
    }

  }
}
