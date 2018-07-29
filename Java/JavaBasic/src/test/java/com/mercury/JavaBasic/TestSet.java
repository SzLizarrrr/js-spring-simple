package com.mercury.JavaBasic;

import java.util.HashSet;
import java.util.Set;

import org.junit.Test;

import com.mercury.code.WrappedString;

public class TestSet {

	@Test
	public void test() {
		// coding against interface or abstract class.
		Set<Object> set = new HashSet<Object>();
		set.add(new String("abc"));
		set.add(new String("abc"));
		set.add(new WrappedString("bcd"));
		set.add(new WrappedString("bcd"));
		set.add(1);
		set.add(1);
		System.out.println(set.size());
	}

}
