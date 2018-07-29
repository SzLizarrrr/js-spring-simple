package com.mercury.SpringIoC;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mercury.stereotype.beans.LazyBean;
import com.mercury.stereotype.beans.Person;


public class StereotyepTest {

	public static void main(String[] args) {
		ApplicationContext actx = new ClassPathXmlApplicationContext("stereoconfig.xml");
		Person person = (Person)actx.getBean("person");
		System.out.println(person);
		
		System.out.println(LazyBean.getCount());
		actx.getBean("lazyBean");
		System.out.println(LazyBean.getCount());
	}

}
