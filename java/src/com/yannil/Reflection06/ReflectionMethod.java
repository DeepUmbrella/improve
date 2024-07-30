package com.yannil.Reflection06;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class ReflectionMethod {

  public static void test01() {

    User user = new User();

    long start_time = System.currentTimeMillis();

    for (int i = 0; i < 1000000000; i++) {
      user.getName();
    }

    long end_time = System.currentTimeMillis();

    System.out.println("normal ways : " + (end_time - start_time));

  }

  public static void test02() throws NoSuchMethodException, SecurityException, IllegalAccessException,
      IllegalArgumentException, InvocationTargetException {

    User user = new User();

    Class u1 = user.getClass();

    Method getName = u1.getDeclaredMethod("getName", null);

    long start_time = System.currentTimeMillis();

    for (int i = 0; i < 1000000000; i++) {
      getName.invoke(user, null);
    }

    long end_time = System.currentTimeMillis();

    System.out.println("invoke ways : " + (end_time - start_time));

  }

  public static void test03() throws NoSuchMethodException, SecurityException, IllegalAccessException,
      IllegalArgumentException, InvocationTargetException {

    User user = new User();

    Class u1 = user.getClass();

    Method getName = u1.getDeclaredMethod("getName", null);

    getName.setAccessible(true);

    long start_time = System.currentTimeMillis();

    for (int i = 0; i < 1000000000; i++) {
      getName.invoke(user, null);
    }

    long end_time = System.currentTimeMillis();

    System.out.println("invoke and close check : " + (end_time - start_time));

  }

  public static void main(String[] args) throws Exception {

    // normal way exec method
    ReflectionMethod.test01();
    ReflectionMethod.test02();
    ReflectionMethod.test03();

  }

}
