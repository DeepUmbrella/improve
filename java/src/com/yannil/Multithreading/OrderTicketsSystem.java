package com.yannil.Multithreading;

public class OrderTicketsSystem {

  public static void main(String[] args) {

    // 1000 people order sameTimes
    Tickets tickets = new Tickets(100);
    for (int i = 0; i < 3; i++) {
      new Thread(() -> tickets.orderTickets(), "Thread" + i).start();

    }
  }

}

// create Ticket class

class Tickets {
  private int ticketsN;

  public Tickets(int ticketsN) {
    this.ticketsN = ticketsN;
  }

  public void orderTickets() {
    // order

    while (true) {
      if (ticketsN <= 0) {
        break;
      }
      synchronized (this) {
        System.out.println(Thread.currentThread().getName() + ":order :" + ticketsN);
        ticketsN--;
      }
      try {
        Thread.sleep(100);
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }

    }

  }

}
