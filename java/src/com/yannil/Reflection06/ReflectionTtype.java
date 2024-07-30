package com.yannil.Reflection06;

import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

public class ReflectionTtype {

  public static void test01(Map<String, User> map, List<User> list) {
    System.out.println("test01");
  }

  public Map<String, User> getMap() {
    System.out.println("test01 getMap");
    return null;
  }

  public static void main(String[] args) throws NoSuchMethodException, SecurityException {

    Method test01_method = ReflectionTtype.class.getDeclaredMethod("test01", Map.class, List.class);

    Type[] generictypes = test01_method.getGenericParameterTypes();

    for (Type type : generictypes) {
      System.out.println("types : " + type);
      if (type instanceof ParameterizedType) {
        Type[] actualTypes = ((ParameterizedType) type).getActualTypeArguments();
        for (Type actualType : actualTypes) {
          System.out.println(actualType);
        }
      }
    }

    Class[] getParameterTypes = test01_method.getParameterTypes();
    Class ReturnType = test01_method.getReturnType();

    System.out.println("getParameterTypes: " + getParameterTypes.getClass());
    System.out.println("ReturnType: " + ReturnType);

  }

}
