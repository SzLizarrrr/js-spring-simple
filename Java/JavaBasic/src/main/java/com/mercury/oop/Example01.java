package com.mercury.oop;

public class Example01 {
	
	private static class Base {
		public Base(){
			System.out.println("Base");
		}
	}
	
	private static class Sub extends Base {
		public Sub() {
			System.out.println("Sub");
		}
	}

	public static void main(String[] args) {
		new Sub();
	}

}
