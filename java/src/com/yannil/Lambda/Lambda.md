# Lambda expression

## description

```java
  // a interface only have one abstract function
  // define a functional interface
  interface Lambda {
    void lambda();
  }

  // implement class

  class LambdaImplements implements Lambda {
    @Override
    public lambda(){
      System.out.printIn("hello world!");
    }

  };

  public class TestUsedLambda {
    public static void main(String[]:args){
      LambdaImplements lambda = new Lambda();
      lambda.lambda();
      Lambda lambda01 = ()-> {
            System.out.printIn("hello world!");
      };
      lambda01.lambda();

    }
  }





```

## used lambda

```java

  ()-> expression
  ()-> states




```
