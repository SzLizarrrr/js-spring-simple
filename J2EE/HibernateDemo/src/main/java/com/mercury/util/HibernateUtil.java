package com.mercury.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {

	private static final SessionFactory FACTORY;
	
	static {
		try {
			FACTORY = new Configuration().configure().buildSessionFactory();
		} catch(Exception e){
			throw new RuntimeException(e.getMessage(), e);
		}
	}
	
	private static final ThreadLocal<Session> SESSION = new ThreadLocal<Session>(){
		@Override
		protected Session initialValue(){
			return FACTORY.openSession();
		}
	};
	
	public static SessionFactory getSessionFactory(){
		return FACTORY;
	}
	
	public static Session currentSession(){
		Session s = SESSION.get();
		if(s == null){
			s = FACTORY.openSession();
			SESSION.set(s);
		}
		return s;
	}
	
	public static void closeSession() {
		Session s = SESSION.get();
		SESSION.set(null);
		if(s != null) {
			s.close();
		}
	}
	
}
