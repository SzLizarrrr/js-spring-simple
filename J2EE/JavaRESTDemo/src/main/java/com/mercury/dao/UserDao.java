package com.mercury.dao;

import com.mercury.beans.User;

public interface UserDao {
	
	User findByUserName(String username);
	public void updatePassword(User user);
	
}
