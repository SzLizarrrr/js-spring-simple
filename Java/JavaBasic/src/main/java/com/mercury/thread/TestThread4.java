package com.mercury.thread;

public class TestThread4 {
    private static void delay(long ms) {
        try {
            Thread.sleep(ms);
        } catch (Exception e) {}
    }
    
    private static class Add extends Thread {
        double x;
        double y;
        double result;
        boolean done;
        public Add() {}
        public Add(double x, double y) {
            this.x = x; 
            this.y = y;
        }
        @Override
        public void run() {
            result = x + y;
            delay(2000);
            done = true;
            System.out.println("Add done");
            synchronized(this){ // a
            	notify(); // a.notify(); notifyAll
            }
        }
        public double getResult() {
	    	synchronized(this){ // a, watchList[main,t1, t2]
	            while (!done) {
	            	System.out.println("getResult A");
	                try {
	                	// main -> waiting.
	                    wait(); // this.wait();
	                } catch (Exception e) {}
	            }
	            return result;
	    	}
        }
    }
    
    private static class Multiply extends Thread {
        double x;
        double y;
        double result;
        boolean done;
        public Multiply() {}
        public Multiply(double x, double y) {
            this.x = x; 
            this.y = y;
        }
        @Override
        public void run() {
            result = x * y;
            delay(3000);
            done = true;
            System.out.println("Multiply done");
            synchronized(this){
            	notify();
            }
        }
        public synchronized double getResult() {
            while (!done) {
            	System.out.println("getResult M");
                try {
                    wait();
                } catch (Exception e) {}
            }
            return result;
        }
    }
    
    public static void main(String[] args) {
        double x = 4;
        double y = 5;
        Add a = new Add(x,y);
        Multiply m = new Multiply(x,y);
        a.start();
        m.start();
        double result = a.getResult() / m.getResult();
        System.out.println(result);
    }
}