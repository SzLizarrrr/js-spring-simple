package com.mercury.thread;

public class TestThread1 extends Thread{
	
	@Override
	public void run(){
		System.out.println("running " + currentThread().getName());
	}

	public static void main(String[] args) {
		Thread t = new TestThread1();
		t.run();
		t.run();
		t.start();
		Thread t1 = new TestThread1();
		t1.start();
//		System.out.println("running " + currentThread().getName());
	}

}
