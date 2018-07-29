package com.mercury.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.beans.Person;
import com.mercury.beans.User;
import com.mercury.dao.AbstractDao;
import com.mercury.dao.UserDao;

@Repository
@Transactional
public class UserDaoImpl extends AbstractDao implements UserDao {
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public User findByUserName(String username) {
		Criteria criteria = getSession().createCriteria(User.class);
		criteria.add(Restrictions.eq("username", username));
		User user = (User)criteria.uniqueResult();
		System.out.println(user);
		System.out.println(username);
		return user == null ? new User() : user;
	}

	@Override
	public void updatePassword(User user) {
		Query q = getSession().createQuery("update User set password=:password where username=:username");
		q.setParameter("password", passwordEncoder.encode(user.getPassword()));
		q.setParameter("username", user.getUsername());
		q.executeUpdate();
	}

}
