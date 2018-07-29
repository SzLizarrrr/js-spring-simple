package com.mercury.SpringHibernate;

import java.util.List;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mercury.beans.User;
import com.mercury.dao.HelloDao;

public class Test {

	public static void showUsers(List<User> users) {
        users.forEach(u -> System.out.println(u));
    }
    public static void main(String[] args) {
        try (ClassPathXmlApplicationContext actx = new ClassPathXmlApplicationContext("config.xml")) {
            HelloDao hd = (HelloDao)actx.getBean("hd01");
            // Save a user
            User user = new User("David", 78);
            hd.save(user);
            System.out.println("User is saved");
            // Show all users
            showUsers(hd.query());
            // Update the user
            user.setAge(72);
            hd.update(user);
            System.out.println("User is updated");
            showUsers(hd.query());
            // Delete the user
            hd.delete(user);
            System.out.println("User is deleted");
            showUsers(hd.query());
        } catch (Exception e) {
            System.err.println(e);
        }
    }

}
