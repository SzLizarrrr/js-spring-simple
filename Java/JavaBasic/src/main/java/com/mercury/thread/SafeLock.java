package com.mercury.thread;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class SafeLock {
	private static class Friend {
		private final String name;
		private final Lock lock = new ReentrantLock();
		
		public Friend(String name) {
			this.name = name;
		}
		public String getName() {
			return name;
		}
		
		public boolean impendingBow(Friend bower) {
			Boolean myLock = false;
			Boolean yourLock = false;
			
			try {
				System.out.println(Thread.currentThread().getName() + ": myLock = "
						+ myLock + ", yourLock = " + yourLock);
				myLock = lock.tryLock();
				System.out.println(Thread.currentThread().getName() + ": myLock = " + myLock);
				yourLock = bower.lock.tryLock();
				System.out.println(Thread.currentThread().getName() + ": yourLock = " + yourLock);
			} finally {
				if(!(myLock && yourLock)) {
					if(myLock) {
						lock.unlock();
					}
					if(yourLock) {
						bower.lock.unlock();
					}
				}
			}
			return myLock && yourLock;
		}
		
		public void bowBack(Friend bower) {
			System.out.println(name + " bows back to " + bower.name);
		}
		
		public void bow(Friend bower) {
			if(impendingBow(bower)) {
				try {
					System.out.println(name + " bows to " + bower.name);
					bower.bowBack(this);
				} finally {
					lock.unlock();
					bower.lock.unlock();
				}
			} else {
				System.out.println(name + " cannot bow to " + bower.name);
			}
		}
	}
	
	public static void main(String[] args) throws InterruptedException {
		final Friend alice = new Friend("Alice");
		final Friend bob = new Friend("Bob");
		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				alice.bow(bob);
			}
		});
		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				bob.bow(alice);
			}
		});
		t1.start();
		t2.start();
		t1.join();
		t2.join();
		System.out.println("End of main");
	}
}
