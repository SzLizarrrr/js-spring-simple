package com.mercury.HibernateDemo;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test1C {

	public static void main(String[] args) {
		Session session = HibernateUtil.currentSession();
		String hql = "from User";
		Query query = session.createQuery(hql);
		query.setCacheable(true);
		List<User> list = query.list();
		for(User u: list){
			System.out.println(u);
		}
		
		List<User> list2 = query.list();
		for(User u: list2){
			System.out.println(u);
		}
		HibernateUtil.closeSession();
	}

}
