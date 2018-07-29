package com.mercury.thread;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class TestThreadPool {

	public static void testThreadPool() {
		ExecutorService executorService = Executors.newCachedThreadPool();
		// ExecutorService executorService = Executors.newFixedThreadPool(5);
		// ExecutorService executorService = Executors.newSingleThreadExecutor();
		for (int i = 0; i < 100; i++) {
			executorService.execute(new DummyThread());
		}
		executorService.shutdown();
	}

	public static void testCallable() {
		ExecutorService executorService = Executors.newCachedThreadPool();
		List<Future<Integer>> resultList = new ArrayList<>();
		for (int i = 1; i <= 10; i++) {
			Future<Integer> future = executorService.submit(new SmartThread(i));
			resultList.add(future);
		}
		for (Future<Integer> f : resultList) {
			try {
				while (!f.isDone()) {};
				System.out.println(f.get());
			} catch (InterruptedException e) {
				e.printStackTrace();
			} catch (ExecutionException e) {
				e.printStackTrace();
			} finally {
				executorService.shutdown();
			}
		}
	}

	public static void main(String[] args) {
		// testThreadPool();
		testCallable();
	}

}
