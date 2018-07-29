package com.mercury.stereotype.beans;

public class LazyBean {
	private static int count;
	
	public LazyBean(){
		count++;
	}
	
	public static int getCount(){
		return count;
	}
}
