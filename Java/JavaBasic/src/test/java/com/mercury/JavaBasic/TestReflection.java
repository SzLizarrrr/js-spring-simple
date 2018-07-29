package com.mercury.JavaBasic;

import java.lang.reflect.Field;

public class TestReflection {

	private static void changeString(String str) throws Exception {
		//str = "change";
		Field field = String.class.getDeclaredField("value");
		field.setAccessible(true);
		field.set(str, "change".toCharArray());
	}
	
	public static void main(String[] args) throws Exception {
		String str = "abc";
		// str.getClass()
		changeString(str);
		System.out.println(str);
		System.out.println("abc");
	}
}
