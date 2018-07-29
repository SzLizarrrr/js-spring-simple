package com.mercury.JavaBasic;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.mercury.code.Person;

public class TestPerson {

	private Person person;
	
	@Before
	public void setUp() throws Exception {
		person = new Person("Alice");
	}

	@Test
	public void testGetName() {
		assertEquals("Alice", person.getName());
	}
	
	@Test
	public void testAddPrefix() {
		Person person2 = person.addPrefix("Ms");
		assertEquals("Ms Alice", person2.getName());
		assertNotSame(person, person2);
	}

}
