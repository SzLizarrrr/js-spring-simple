package com.mercury.SpringAOP;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mercury.beans.TimeBookInterface;

public class TestAOP {

	public static void main(String[] args) {
		try(ClassPathXmlApplicationContext actx = new ClassPathXmlApplicationContext("aopconfig.xml")){
			TimeBookInterface tb = (TimeBookInterface)actx.getBean("logProxy");
			tb.doAudit("Bob");
		}catch(Exception e){
			
		}
	}

}
