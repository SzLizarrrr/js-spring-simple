package com.mercury.code;

public final class Person {
	private String name;

	public Person() {
		super();
	}

	public Person(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}
	
	public Person addPrefix(String prefix){
		return new Person(prefix + " " + name);
	}
	
}
