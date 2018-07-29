package com.mercury.thread;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class TestReentrantLock {

	public static void main(String[] args) {
		Lock lock = new ReentrantLock();
		Condition cond = lock.newCondition();
		Thread a = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 1; i <= 10; i++) {
					lock.lock();
					cond.signal();
					try {
						System.out.println(i);
						cond.await();
					} catch (Exception e) {
						e.printStackTrace();
					} finally{
						lock.unlock();
					}
				}
			}
		});
		Thread b = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 10; i >= 1; i--) {
					lock.lock();
					cond.signal();
					try {
						System.out.println(i);
						cond.await();
					} catch (Exception e) {
						e.printStackTrace();
					} finally{
						lock.unlock();
					}
				}
			}
		});
		a.start();
		b.start();
	}

}
