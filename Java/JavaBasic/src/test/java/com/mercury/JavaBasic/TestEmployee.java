package com.mercury.JavaBasic;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.mercury.code.Employee;

public class TestEmployee {
	
	private Employee emp;

	@Before
	public void setUp() throws Exception {
		emp = new Employee("Bob");
	}

	@Test
	public void test() throws CloneNotSupportedException {
		Employee emp2 = emp.clone();
		assertNotSame(emp, emp2);
		assertEquals(emp.getName(), emp2.getName());
	}

}
