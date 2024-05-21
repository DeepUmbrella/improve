# Thread State

Thread.State

1. NEW <= new Thread() after new thread and before call start function
2. RUNNABLE <= thread.start() thread running

3. BLOCKED <=

4. WAITING <= when call new thread join function in thread run function.

5. TIMED_WAITING <= when call Thread.sleep() function in thread run function.

6. TERMINATED <= thread already exited

# DaemonThread

```java

  class God implements Runnable{
     @Override
     void run(){
      System.out.println("thread start")
     }
  }

  Thread thread = new Thread(new God())
  thread.setDaemon(true)
  thread.start()

```
