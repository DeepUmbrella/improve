# How use multiple thread

```java

new Thread();

// or extends Thread Class and overwrite run function

public class TreadTest extends Thread {

  @Override
  public void run () {
    //do something
  }

}

new TreadTest().start();

// implements Runnable() interface and overwrite run function
public class RunnableTest implements Runnable  {
  @Override
  public void run (){
    //do something
  }
}

RunnableTest testRun = new RunnableTest();
RunnableTest testRun1 = new RunnableTest();

new Thread(testRun).start();
new Thread(testRun1).start();

// implements callable() interface and callable interface has return value




public class CallableTest implements Callable  {
  @Override
  public Boolean call (){
    //do something
    return true // or return false and any return value if you want
  }
}


ExecutorService executors = Executors.newFixedThreadPool(3);
CallableTest test01 = new CallableTest();
Future<String> result = executors.submit(test01);
Future<String> result2 = executors.submit(test01);
Future<String> result3 = executors.submit(test01);

try {
  String rs1 = result.get();
  String rs2 = result3.get();
  String rs3 = result2.get();

  System.out.println(rs1 + rs2 + rs3);
} catch (InterruptedException | ExecutionException e) {
  // TODO Auto-generated catch block
  e.printStackTrace();
}

executors.shutdown();





```
