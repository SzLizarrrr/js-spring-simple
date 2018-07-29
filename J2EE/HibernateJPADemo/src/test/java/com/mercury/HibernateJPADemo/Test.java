package com.mercury.HibernateJPADemo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test {

	public static void main(String[] args) {
		Session session = HibernateUtil.currentSession();
        Transaction tx = session.beginTransaction();
        session.save(new User("HDavid", 82));
        tx.commit();
        List<User> list = session.createQuery("from User").list();
        for (User u:list) {
            System.out.println(u);
        }
        HibernateUtil.closeSession();
	}

}
