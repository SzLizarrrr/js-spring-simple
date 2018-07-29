package com.mercury.util;

import java.sql.Connection;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class JdbcUtil {
	public static Connection getConnection(){
		// DBCP: Database connection pool.
		// JNDI: Java Naming and Directory Interface.
		Connection conn = null;
		try {
			Context initContext = new InitialContext();
			Context envContext = (Context)initContext.lookup("java:/comp/env");
			DataSource ds = (DataSource)envContext.lookup("jdbc/myoracle");
			conn = ds.getConnection();
		} catch(Exception e){
			System.err.println(e);
		}
		return conn;
	}
}
