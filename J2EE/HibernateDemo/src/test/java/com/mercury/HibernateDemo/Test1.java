package com.mercury.HibernateDemo;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test1 {
	
	public static void main(String[] args){
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		User user = new User("HAlice", 28);
		session.save(user);// Persistent
		tx.commit();
		String hql = "from User";
		Query query = session.createQuery(hql);
		List<User> list = query.list();
		for(User u: list){
			System.out.println(u);
		}
		HibernateUtil.closeSession();
	}
	
}
