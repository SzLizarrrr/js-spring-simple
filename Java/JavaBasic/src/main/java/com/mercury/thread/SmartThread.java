package com.mercury.thread;

import java.util.concurrent.Callable;

public class SmartThread implements Callable<Integer> {

	private int num;

	public SmartThread(int num) {
		this.num = num;
	}
	
	public int factorial(int i) {
		return i == 0 ? 1 : i * factorial(i-1);
	}

	@Override
	public Integer call() throws Exception {
		return factorial(num);
	}

}
