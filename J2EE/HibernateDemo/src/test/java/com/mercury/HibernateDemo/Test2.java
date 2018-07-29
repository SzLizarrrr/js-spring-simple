package com.mercury.HibernateDemo;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test2 {

	public static void main(String[] args) {
		Session session = HibernateUtil.currentSession();
		Query query = session.getNamedQuery("userQuery");
		query.setInteger("age", 20); // select * from sample where age>30
		List<User> list = query.list();
		for(User u: list){
			System.out.println(u);
		}
		
		String sql = "select * from sample where name=:name";
		query = session.createSQLQuery(sql).addEntity(User.class);
		query.setString("name", "HBob");
		User user = (User)query.uniqueResult();
		System.out.print(user);
		HibernateUtil.closeSession();
	}

}
