package com.mercury.oop;

public class Example03 {
	
	private static class Base {
		public void foo1() {
			System.out.println("foo1 in Base");
		}
		public static void foo2() {
			System.out.println("foo2 in Base");
		}
	}
	
	private static class Sub extends Base {
		@Override
		public void foo1() {
			System.out.println("foo1 in sub");
		}
		// @Override
		public static void foo2() {
			System.out.println("foo2 in sub");
		}
	}
	
	public static void main(String[] args) {
//		Base.foo2();
//		new Base().foo1();
		new Sub().foo1();
		Sub.foo2();
	}

}
