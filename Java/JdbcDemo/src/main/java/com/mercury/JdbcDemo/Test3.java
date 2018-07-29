package com.mercury.JdbcDemo;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Types;

import com.mercury.util.JdbcUtil;

import oracle.jdbc.internal.OracleTypes;

public class Test3 {
	public static void main(String[] args){
		try(Connection conn = JdbcUtil.getConnection();){
			String sp = "{?=call saveuser(?, ?)}";
			CallableStatement cs = conn.prepareCall(sp);
			cs.registerOutParameter(1, Types.INTEGER);
			cs.setString(2, "Bob");
			cs.setInt(3, 11);
			cs.execute();
			System.out.println("Return from db: " + cs.getInt(1));
			
			sp = "{?=call queryuser()}";
			cs = conn.prepareCall(sp);
			cs.registerOutParameter(1, OracleTypes.CURSOR);
			cs.execute();
			ResultSet rs = (ResultSet)cs.getObject(1);
			while(rs.next()){
				System.out.println(rs.getString("name") + "\t" + rs.getInt("age"));
			}
			rs.close();
			cs.close();
		}catch(Exception e){
			
		}
	}
}
