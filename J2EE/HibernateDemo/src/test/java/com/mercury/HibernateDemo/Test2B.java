package com.mercury.HibernateDemo;

import org.hibernate.Session;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test2B {

	public static void main(String[] args) {
		// load and get.
		Session session = HibernateUtil.currentSession();
		
		// load
		// user1 is a proxy object. but it is not null.
		// throw runtime exception if not exists in DB.
		User user1 = (User)session.load(User.class, "HBob");
		System.out.println(user1.getClass().getName());
		System.out.println(user1 == null);
		System.out.println(user1); //toString(). trigger sql query.
		System.out.println(user1.getClass().getName());
		
		System.out.println("******************************");
		
		// get
		// return null if not exists in DB.
		User user2 = (User)session.get(User.class, "HAlice");
		System.out.println(user2.getClass().getName());
		System.out.println(user2 == null);
		System.out.println(user2); //toString(). trigger sql query.
		System.out.println(user2.getClass().getName());
		
	}

}
