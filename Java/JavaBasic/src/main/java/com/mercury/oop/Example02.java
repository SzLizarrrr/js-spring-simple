package com.mercury.oop;

public class Example02 {
	
	private static class Base {
		public Base(){
			System.out.println("Base");
		}
		public Base(String str){
			System.out.println(str + " in Base");
		}
	}
	
	private static class Sub extends Base {
		public Sub(String str) {
			super(str);
			System.out.println(str + " in Sub");
		}
	}

	public static void main(String[] args) {
		new Sub("Bob");
	}

}
