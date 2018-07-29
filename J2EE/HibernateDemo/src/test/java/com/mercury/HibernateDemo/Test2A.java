package com.mercury.HibernateDemo;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.jdbc.Work;

import com.mercury.beans.User;
import com.mercury.util.HibernateUtil;

import oracle.jdbc.OracleTypes;

public class Test2A {

	public static void main(String[] args) {
		Session session = HibernateUtil.currentSession();
        Query query = session.getNamedQuery("userSP");
        List<User> list = query.list();
        for (User u:list) {
            System.out.println(u);
        }
        
        System.out.println("************************");
        //Connection conn = session.connection();
        session.doWork(new Work() {
            @Override
            public void execute(Connection conn) throws SQLException {
                // TODO Auto-generated method stub
                String sp = "{?=call queryuser()}";
                CallableStatement cs = conn.prepareCall(sp);
                cs.registerOutParameter(1, OracleTypes.CURSOR);
                cs.execute();
                ResultSet rs = (ResultSet)cs.getObject(1);
                while (rs.next()) {
                    System.out.println(rs.getString("name") + "\t" + rs.getInt("age"));
                }
                rs.close();
            }
        });
        HibernateUtil.closeSession();
	}

}
