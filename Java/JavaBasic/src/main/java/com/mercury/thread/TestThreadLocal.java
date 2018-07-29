package com.mercury.thread;

public class TestThreadLocal {
    public static void main(String[] args) {
        final ThreadLocal<Integer> local = new ThreadLocal<Integer>() {
            @Override
            public Integer initialValue() {
                return 10;
            }
        };
        
        Runnable r1 = new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + " is running");
                int x = local.get();
                System.out.println("x in r1: " + x);
                x++;
                local.set(x);
                System.out.println("x in r1: " + x);
            }
        };
        Runnable r2 = new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + " is running");
                int x = local.get();
                System.out.println("x in r2: " + x);
                x += 10;
                local.set(x);
                System.out.println("x in r2: " + x);
            }
        };
        new Thread(r1).start();
        new Thread(r2).start();
    }
}