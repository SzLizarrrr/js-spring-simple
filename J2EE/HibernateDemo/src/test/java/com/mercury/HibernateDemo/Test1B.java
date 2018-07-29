package com.mercury.HibernateDemo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.mercury.beans.User;

public class Test1B {

	public static void main(String[] args) {
		Configuration cfg = new Configuration().configure();
        SessionFactory factory = cfg.buildSessionFactory();
        // First session
        Session session1 = factory.openSession();
        User user1 = (User)session1.load(User.class, "Tommy");
        System.out.println(user1);
        session1.close();
        try {
            Thread.sleep(6000);    // Delay 6 seconds to make cache expire
        } catch (Exception e) {
            e.printStackTrace();
        }
        // Second session
        Session session2 = factory.openSession();
        // The query is running again because of no caching after 6 seconds
        User user2 = (User)session2.load(User.class, "HBob");
        System.out.println(user2);
        session2.close();
        // Third session
        Session session3 = factory.openSession();
        // The query is not running because of caching on SessionFactory
        User user3 = (User)session3.load(User.class, "HBob");
        System.out.println(user3);
        System.out.println("user2==user3? " + (user2==user3));
        System.out.println(user2.getName()==user3.getName());
        session3.close();
	}

}
