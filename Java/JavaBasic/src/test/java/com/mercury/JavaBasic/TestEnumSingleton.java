package com.mercury.JavaBasic;

import com.mercury.code.EnumSingleton;

public class TestEnumSingleton {

	public static void main(String[] args) {
		EnumSingleton singleton = EnumSingleton.INSTANCE;
		EnumSingleton another = EnumSingleton.INSTANCE;
		System.out.println(singleton == another);
		EnumSingleton singleton1 = EnumSingleton.INSTANCE1;
		singleton.setName("bob");
		System.out.println(another.getName());
		System.out.println(singleton1.getName());
	}

}
