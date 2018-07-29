package com.mercury.HibernateDemo;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

public class Test2D {

	public static void main(String[] args) {
		Session session = HibernateUtil.currentSession();
        // How to update a record in the table
        // First way: Use HQL or SQL to upate it
        String hql = "update User set age=:age where name=:name";
        Transaction tx = session.beginTransaction();
        Query query = session.createQuery(hql);
        query.setInteger("age", 25);
        query.setString("name", "Tracy");
        query.executeUpdate();
        tx.commit();
        // Second way: User load or get method and then apply setter
        tx = session.beginTransaction();
        User user = (User)session.load(User.class, "Tommy");    // You can also use get method
        user.setAge(50);
        tx.commit();
        // Third way: Similar to second way, I use Criteria instead
        Criteria ct = session.createCriteria(User.class);
        tx = session.beginTransaction();
        User user2 = (User)ct.add(Restrictions.eq("name", "Scott")).uniqueResult();
        user2.setAge(70);
        tx.commit();
        session.close();
	}

}
