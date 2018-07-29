package com.mercury.aspect;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

public class LogAround implements MethodInterceptor{

	@Override
	public Object invoke(MethodInvocation mi) throws Throwable {
		String name = (String)mi.getArguments()[0]; // method arguments.
		System.out.println(name + " before method ...");
		Object obj = mi.proceed();
		System.out.println(name + " after method ...");
		return null;
	}

}
