package com.mercury.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class LogAdvice {
	@Before("execution(* com.mercury.beans.TimeBook.doAudit(..))")
	public void logBefore(JoinPoint jp) {
		String name = (String)jp.getArgs()[0];
		System.out.println(name + " starting...");
	}
	
	@After("execution(* com.mercury.beans.TimeBook.doBreak(..))")
	public void logAfter(JoinPoint jp) {
		String name = (String)jp.getArgs()[0];
		System.out.println(name + " ending...");
	}
	
	@AfterThrowing(pointcut="execution(* com.mercury.beans.TimeBook.doCheck(..))", throwing="error")
	public void logThrow(JoinPoint jp, Throwable error) {
		String name = (String)jp.getArgs()[0];
		System.out.println(name + " has errors...");
		System.out.println("Error: " + error);
	}
	
	public void delete() {
		System.out.println("deleting...");
	}
	
	@Around("execution(* com.mercury.beans.TimeBook.doAudit(..))")
	public Object logAround(ProceedingJoinPoint pjp) throws Throwable {
		String name = (String)pjp.getArgs()[0];
		System.out.println(name + " around before...");
		Object obj = pjp.proceed();
		System.out.println(name + " around after...");
		return obj;
	}
}
