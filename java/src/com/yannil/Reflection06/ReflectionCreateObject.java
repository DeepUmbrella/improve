package com.yannil.Reflection06;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;

public class ReflectionCreateObject {
  public static void main(String[] args) throws Exception {

    Class<User> userClass = (Class<User>) Class.forName("com.yannil.Reflection06.User");

    // use deprecated function create object

    User user = userClass.newInstance();
    System.out.println(user);

    /*
     * User [name=unkonw, age=1, id=1, publicName=null]
     */

    Constructor user_constructor = userClass.getDeclaredConstructor(String.class);

    user = (User) user_constructor.newInstance("xiaoming");

    System.out.println(user);
    /*
     * User [name=xiaoming, age=1, id=1, publicName=null]
     */

    Field age = userClass.getDeclaredField("age");

    age.setAccessible(true); // close safety check
    // class com.yannil.Reflection06.ReflectionCreateObject cannot access a member
    // of class com.yannil.Reflection06.User with modifiers "private"
    age.set(user, 12);

    System.out.println(user);

  }

}
