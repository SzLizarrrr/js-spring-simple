package com.mercury.io;

import java.io.Serializable;

public class Data implements Serializable{

	private static final long serialVersionUID = 1L;
	private transient int x;
	private double d;
	private boolean b;
	
	public Data(){
		
	}

	public Data(int x, double d, boolean b) {
		super();
		this.x = x;
		this.d = d;
		this.b = b;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public double getD() {
		return d;
	}

	public void setD(double d) {
		this.d = d;
	}

	public boolean isB() {
		return b;
	}

	public void setB(boolean b) {
		this.b = b;
	}

	@Override
	public String toString() {
		return "Data [x=" + x + ", d=" + d + ", b=" + b + "]";
	}
	
}
