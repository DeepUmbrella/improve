package com.yannil.Reflection06;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class ReflectionTest {
  public static void main(String[] args) {

    try {
      Class<?> userClass = Class.forName("com.yannil.Reflection06.User");

      System.out.println(userClass);

      // get package & class name
      // get class name
      System.out.println(userClass.getName());
      System.out.println(userClass.getSimpleName());

      // get only public fields by reflection

      Field[] fields = userClass.getFields();

      for (Field field : fields) {
        System.out.println("getFields():" + field);
      }

      // get all fields properties by reflection
      fields = userClass.getDeclaredFields();
      for (Field field : fields) {
        System.out.println("getDeclaredFields():" + field);
        /*
         * [][][]
         * getDeclaredFields():private java.lang.String
         * com.yannil.Reflection06.User.name
         * getDeclaredFields():private int com.yannil.Reflection06.User.age
         * getDeclaredFields():private int com.yannil.Reflection06.User.id
         */
      }
      // use name get fields properties by reflection
      // only get public fields
      Field fieldName = userClass.getField("publicName");
      System.out.println("getField():" + fieldName);
      /*
       * getField():public java.lang.String com.yannil.Reflection06.User.publicName
       */
      // get Declared Field
      fieldName = userClass.getDeclaredField("name");
      System.out.println("getField():" + fieldName);
      /*
       * getDeclaredField():public java.lang.String com.yannil.Reflection06.User.name
       */

      // get only public Methods by reflection but
      // include parent class
      Method[] methods = userClass.getMethods();
      for (Method method : methods) {
        System.out.println("getMethods():" + method);
      }

      /*
       * getMethods():public java.lang.String com.yannil.Reflection06.User.getName()
       * getMethods():public void
       * com.yannil.Reflection06.User.setName(java.lang.String)
       * getMethods():public int com.yannil.Reflection06.User.getId()
       * getMethods():public void com.yannil.Reflection06.User.proxyMakeLove()
       * getMethods():public int com.yannil.Reflection06.User.getAge()
       * getMethods():public void com.yannil.Reflection06.User.setAge(int)
       * getMethods():public void com.yannil.Reflection06.User.setId(int)
       * getMethods():public final void java.lang.Object.wait(long,int) throws
       * java.lang.InterruptedException
       * getMethods():public final void java.lang.Object.wait() throws
       * java.lang.InterruptedException
       * getMethods():public final native void java.lang.Object.wait(long) throws
       * java.lang.InterruptedException
       * getMethods():public boolean java.lang.Object.equals(java.lang.Object)
       * getMethods():public java.lang.String java.lang.Object.toString()
       * getMethods():public native int java.lang.Object.hashCode()
       * getMethods():public final native java.lang.Class java.lang.Object.getClass()
       * getMethods():public final native void java.lang.Object.notify()
       * getMethods():public final native void java.lang.Object.notifyAll()
       * 
       */

      // get all Declared Methods by reflection only self
      methods = userClass.getDeclaredMethods();
      for (Method method : methods) {
        System.out.println("getDeclaredMethods():" + method);
      }
      /*
       * getDeclaredMethods():public java.lang.String
       * com.yannil.Reflection06.User.getName()
       * getDeclaredMethods():public void
       * com.yannil.Reflection06.User.setName(java.lang.String)
       * getDeclaredMethods():public int com.yannil.Reflection06.User.getId()
       * getDeclaredMethods():private void com.yannil.Reflection06.User.makeLove()
       * getDeclaredMethods():public void com.yannil.Reflection06.User.proxyMakeLove()
       * getDeclaredMethods():public int com.yannil.Reflection06.User.getAge()
       * getDeclaredMethods():public void com.yannil.Reflection06.User.setAge(int)
       * getDeclaredMethods():public void com.yannil.Reflection06.User.setId(int)
       */

      Method getName = userClass.getMethod("getName", null);
      Method overloadGetName = userClass.getMethod("getName", String.class);

      System.out.println("getName(): " + getName);
      System.out.println("overloadGetName(): " + overloadGetName);
      /*
       * getName(): public java.lang.String com.yannil.Reflection06.User.getName()
       * overloadGetName(): public java.lang.String
       * com.yannil.Reflection06.User.getName(java.lang.String)
       */

      userClass.getDeclaredConstructor().newInstance();
      // get constructors

      Constructor[] constructors = userClass.getConstructors();

      for (Constructor constructor : constructors) {
        System.out.println("getConstructors():" + constructor);
      }

      constructors = userClass.getDeclaredConstructors();

      for (Constructor constructor : constructors) {
        System.out.println("getDeclaredConstructors():" + constructor);
      }

      Constructor constructor = userClass.getConstructor(null);
      System.out.println("getConstructor(null):" + constructor);
      constructor = userClass.getConstructor(String.class);
      System.out.println("getConstructor(String.class):" + constructor);
      constructor = userClass.getDeclaredConstructor(null);
      System.out.println("getDeclaredConstructor():" + constructor);
      constructor = userClass.getDeclaredConstructor(String.class);
      System.out.println("getDeclaredConstructor(String.class):" + constructor);
      /*
       * 
       * getConstructor(null):public com.yannil.Reflection06.User()
       * getConstructor(String.class):public
       * com.yannil.Reflection06.User(java.lang.String)
       * getDeclaredConstructor():public com.yannil.Reflection06.User()
       * getDeclaredConstructor(String.class):public
       * com.yannil.Reflection06.User(java.lang.String)
       */

    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

class User {
  private String name;
  private int age;
  private int id;
  public String publicName;

  public User() {
    this.name = "unkonw";
    this.age = 1;
    this.id = 1;
  }

  @Override
  public String toString() {
    return "User [name=\"" + name + "\", age=\"" + age + "\", id=\"" + id + "\", publicName=\"" + publicName + "\"]";
  }

  public User(String name) {
    this.name = name;
    this.age = 1;
    this.id = 1;
  }

  private void makeLove() {

    this.publicName = "love";
  }

  public void proxyMakeLove() {
    makeLove();
  }

  public String getName() {
    return name;
  }

  public String getName(String suffix) {
    return name + suffix;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

}