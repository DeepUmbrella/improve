package com.yannil.Lambda;

public class TestLambda {
  // static inner class
  static class LambdaImplements2 implements Lambda {
    @Override
    public void lambda() {
      System.out.println("Lambda 02 static inner class");
    }

  }

  public static void main(String[] args) {

    // implement interface
    LambdaImplements lImplements = new LambdaImplements();
    lImplements.lambda();

    LambdaImplements2 lambdaImplements2 = new LambdaImplements2();
    lambdaImplements2.lambda();

    // part of inner class
    class LambdaImplements3 implements Lambda {

      @Override
      public void lambda() {
        System.out.println("Lambda 03 part of inner class");
      }
    }
    LambdaImplements3 lambdaImplements3 = new LambdaImplements3();
    lambdaImplements3.lambda();

    // anonymous inner class

    Lambda lambda = new Lambda() {

      @Override
      public void lambda() {
        System.out.println("Lambda 04 anonymous inner class");
      }
    };
    lambda.lambda();

    // lambda expression 01
    Lambda lambda1 = () -> {
      System.out.println("Lambda 05 lambda expression");
    };
    lambda1.lambda();

    // lambda with arguments
    LambdaWithArguments lambdaWithArguments = (int a, String b) -> System.out
        .println("Lambda 06 lambda with arguments");

    lambdaWithArguments.lambda(1, "2");
    // lambda with arguments and no Type

    LambdaWithArguments lambdaWithArguments1 = (a, b) -> System.out
        .println("Lambda 07 lambda with arguments and no Type" + a + b);

    lambdaWithArguments1.lambda(1, "2");

  }

}

interface Lambda {
  void lambda();
}

interface LambdaWithArguments {
  void lambda(int a, String b);
}

// implement class

class LambdaImplements implements Lambda {
  @Override
  public void lambda() {
    System.out.println("Lambda 01 implement Lambda class");
  }

}
