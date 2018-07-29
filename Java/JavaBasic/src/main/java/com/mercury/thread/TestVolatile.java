package com.mercury.thread;

public class TestVolatile {

	private static int num = 0;

	public static void main(String[] args) {
		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				while (true) {
//					System.out.println(num + " in t1. --- before");
					if (num >= 5) {
						break;
					}
				}
				System.out.println(num + " in t1. --- after");
			}
		});
		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				while (num < 10) {
					num++;
					System.out.println(num + " in t2.");
					try {
						Thread.sleep(200);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		});
		t1.start();
		t2.start();
	}

}
