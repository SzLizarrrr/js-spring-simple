package com.mercury.thread;

import java.util.concurrent.BlockingQueue;

public class Producer implements Runnable {

	BlockingQueue<Integer> blockingQueue;

	public Producer(BlockingQueue<Integer> blockingQueue) {
		super();
		this.blockingQueue = blockingQueue;
	}

	@Override
	public void run() {
		for (int i = 0; i < 100; i++) {
			try {
				Thread.sleep(10);
				blockingQueue.put(i);
				System.out.println("Producer " + Thread.currentThread().getName() + " produces:" + i);
			} catch (InterruptedException e) {
				Thread.currentThread().interrupt();
			}
		}
	}

}
