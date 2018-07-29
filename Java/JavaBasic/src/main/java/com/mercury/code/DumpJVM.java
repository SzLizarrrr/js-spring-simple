package com.mercury.code;

public class DumpJVM {

	public static void main(String[] args) {
		Object obj = null;
		while( true ) {
			obj = new Object[]{obj};
		}
	}

}
