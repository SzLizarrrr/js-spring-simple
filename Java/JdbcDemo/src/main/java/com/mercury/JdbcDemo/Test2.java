package com.mercury.JdbcDemo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Scanner;

import com.mercury.util.JdbcUtil;

public class Test2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Input name:");
		String name = scanner.nextLine();
		try(Connection conn = JdbcUtil.getConnection();){
			// 1. prevent SQL injection. name='bob' and password='pwd' OR 1 = 1
			// 2. pre-compile. better performance
			String sql = "select * from sample where name=?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				System.out.println(rs.getString("name") + "\t" + rs.getInt("age"));
			}
			rs.close();
			ps.close();
		}catch(Exception e){
			
		}
		scanner.close();
	}

}
