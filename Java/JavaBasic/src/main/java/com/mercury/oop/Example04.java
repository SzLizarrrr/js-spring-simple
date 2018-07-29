package com.mercury.oop;

public class Example04 {
	
	private static class Base {
		int x = 5;
		public Base() {
			foo();
		}
		private void foo(){
		// public void foo(){
			System.out.println(x + " in Base.");
		}
	}
	
	private static class Sub extends Base {
		int x = 3;
		public Sub() {
			super();
			foo();
		}
		// @Override
		public void foo() {
			System.out.println(x + " in Sub.");
		}
	}

	public static void main(String[] args) {
		new Sub();
	}

}
