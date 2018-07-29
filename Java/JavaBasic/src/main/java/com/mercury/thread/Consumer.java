package com.mercury.thread;

import java.util.concurrent.BlockingQueue;

public class Consumer implements Runnable {

	BlockingQueue<Integer> blockingQueue;

	public Consumer(BlockingQueue<Integer> blockingQueue) {
		super();
		this.blockingQueue = blockingQueue;
	}

	@Override
	public void run() {
		while (true) {
			Integer data = null;
			try {
				Thread.sleep(50);
				data = blockingQueue.take();
				System.out.println("Consumer " + Thread.currentThread().getName() + " consume:" + data);
			} catch (InterruptedException e) {
				Thread.currentThread().interrupt();
			}
		}
	}

}
