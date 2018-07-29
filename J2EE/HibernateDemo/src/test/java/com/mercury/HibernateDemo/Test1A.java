package com.mercury.HibernateDemo;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test1A {

	public static void main(String[] args) {
		Session session = HibernateUtil.currentSession();
		// user: Persistent
		User user = (User)session.load(User.class, "HBob");
		System.out.println(user);
		HibernateUtil.closeSession();
		// when session is closed, user is Detached. but can be modified.
		user.setAge(18);
		
		Session session2 = HibernateUtil.currentSession();
		session2.merge(user);
		user = (User)session2.load(User.class, "HBob");
		System.out.println(user);
		Transaction tx = session2.beginTransaction();
		tx.commit(); // sync session(HBob, 18) and database(HBob, 48). rollback
		HibernateUtil.closeSession();
	}

}
