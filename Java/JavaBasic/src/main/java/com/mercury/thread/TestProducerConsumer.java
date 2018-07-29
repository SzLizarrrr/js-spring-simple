package com.mercury.thread;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class TestProducerConsumer {

	public static void main(String[] args) {
		BlockingQueue<Integer> queue = new LinkedBlockingQueue<Integer>();
		Thread producer = new Thread(new Producer(queue));
        producer.start();

        Thread consumer1 = new Thread(new Consumer(queue));
        consumer1.start();
//        Thread consumer2 = new Thread(new Consumer(queue));
//        consumer2.start();
//        Thread consumer3 = new Thread(new Consumer(queue));
//        consumer3.start();
	}

}
