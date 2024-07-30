package com.yannil.ClassLoader07;

public class Classloadertest {
  public static void main(String[] args) {

    // system class loader
    ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();

    System.out.println(systemClassLoader);

    // system class loader's super class loader -> extend class loader
    ClassLoader extClassLoader = systemClassLoader.getParent();

    System.out.println(extClassLoader);

    // extend class loader -> root class loader (c/c++)

    ClassLoader rootClassLoader = extClassLoader.getParent();

    System.out.println(rootClassLoader);

    // Current class's Class loader

    try {
      ClassLoader currentClassloader = Class.forName("com.yannil.ClassLoader07.Classloadertest").getClassLoader();
      System.out.println(currentClassloader);
    } catch (ClassNotFoundException e) {

    }

    // what is ClassLoader for JDK inner class

    try {
      ClassLoader innerClassLoader = Class.forName("java.lang.Object").getClassLoader();
      System.out.println(innerClassLoader);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    }

    // how to get the path that System loader can load.

    System.out.println(System.getProperty("java.lang.path"));

  }
}
