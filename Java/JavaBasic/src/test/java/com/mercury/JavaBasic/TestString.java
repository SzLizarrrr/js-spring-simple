package com.mercury.JavaBasic;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestString {

	@Test
	public void test1() {
		String s1 = "abc";
		String s2 = "abc";
		String s3 = new String("abc");
		assertTrue(s1==s2);
		assertSame(s1, s2);
		assertFalse(s1==s3);
		assertEquals(s1, s3);//s1.equals(s3)
		assertSame(s3.intern(), s1);
	}
	
	private boolean inPool(String str){
		System.out.println(str.intern());
		return str.intern() == str;
	}
	
	@Test
	public void test2() {
		String s1 = "ab";
		String s2 = s1 + "cd";
		String s3 = "ab" + "cd";
		assertEquals(s2, s3);
		assertNotSame(s2, s3);
		assertTrue(inPool(s3));
		assertFalse(inPool(s2));
	}
	
	@Test
	public void test3() {
		StringBuilder sb1 = new StringBuilder("abc");
		StringBuilder sb2 = new StringBuilder("abc");
		assertFalse(sb1.equals(sb2));
	}

}
