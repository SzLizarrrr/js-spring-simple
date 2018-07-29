package com.mercury.thread;

/*
 * thread a print 1 to 10, thread b print 10 to 1, how do you implement the class to constantly print  number per 10s.
 */
public class ThreadAlternate {

	public static void main(String[] args) throws InterruptedException {
		final Object lock = new Object();
		Thread a = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 1; i <= 10; i++) {
					synchronized (lock) {
						System.out.println(i);
						lock.notify();
						try {
							Thread.sleep(100);
							lock.wait();
						} catch (InterruptedException e1) {
							e1.printStackTrace();
						}
					}
				}
			}
		});
		Thread b = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 10; i >= 1; i--) {
					synchronized (lock) {
						System.out.println(i);
						lock.notify();
						try {
							Thread.sleep(100);
							lock.wait();
						} catch (InterruptedException e1) {
							e1.printStackTrace();
						}
						
					}
				}
			}
		});
		a.start();
		b.start();
	}

}
