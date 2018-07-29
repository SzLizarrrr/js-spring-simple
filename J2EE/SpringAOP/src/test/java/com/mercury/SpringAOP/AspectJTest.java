package com.mercury.SpringAOP;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mercury.beans.TimeBookInterface;

public class AspectJTest {
	@SuppressWarnings("resource")
	public static void main(String[] args) {
		ApplicationContext actx = new ClassPathXmlApplicationContext("aspectjconfig.xml");
		TimeBookInterface tb = (TimeBookInterface)actx.getBean("timeBook");
		System.out.println(tb.getClass().getName());
		tb.doAudit("Alice");
		tb.doBreak("Bob");
		try {
			tb.doCheck("Steven");
		} catch (Exception e) {
			System.err.println(e);
		}
	}
}
