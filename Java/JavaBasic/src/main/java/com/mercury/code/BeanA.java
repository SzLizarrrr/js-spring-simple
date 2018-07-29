package com.mercury.code;

public class BeanA implements Comparable<BeanA>{
	private int x;

	public BeanA() {
		super();
	}

	public BeanA(int x) {
		super();
		this.x = x;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	@Override
	public int compareTo(BeanA ba) {
		return x - ba.x;
	}

	@Override
	public String toString() {
		return "BeanA [x=" + x + "]";
	}
	
	
}
