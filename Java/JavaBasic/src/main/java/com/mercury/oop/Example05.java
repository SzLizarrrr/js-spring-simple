package com.mercury.oop;

public class Example05 {
	
	private static class Base {
		String name = null;
		public Base() {
			setName();
		}
		private void setName() {
			name = "Base";
		}
	}
	
	private static class Sub extends Base {
		String name;
		public void setName() {
			name = "Sub";
		}
	}

	public static void main(String[] args) {
		Sub sub = new Sub();
		System.out.println(sub.name);
	}

}
