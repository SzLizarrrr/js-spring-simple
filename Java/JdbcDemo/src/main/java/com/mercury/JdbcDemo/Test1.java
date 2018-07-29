package com.mercury.JdbcDemo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import com.mercury.util.JdbcUtil;

public class Test1 {

	public static void main(String[] args) {
		// Statement. SQL query. 
		try(Connection conn = JdbcUtil.getConnection();){
			conn.setAutoCommit(false);
			String sql = "insert into sample values('Daviv', 53)";
			Statement st = conn.createStatement();
			st.executeUpdate(sql);
			sql = "select * from sample";
			ResultSet rs = st.executeQuery(sql);
			while(rs.next()){
				System.out.println(rs.getString("name") + "\t" + rs.getInt("age"));
			}
			conn.commit();
			rs.close();
			st.close();
		}catch(Exception e){
			
		}
	}

}
