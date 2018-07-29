package com.mercury.code;

public enum EnumSingleton {
	INSTANCE("alex"),
	INSTANCE1("alice");
	
	String name;
	
	EnumSingleton(String name){
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public static String getStatic() {
		return "static";
	}
}
