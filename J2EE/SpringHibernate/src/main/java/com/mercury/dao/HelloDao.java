package com.mercury.dao;

import java.util.List;

import com.mercury.beans.User;

public interface HelloDao {
	public void save(User user);
	public List<User> query();
	public void delete(User user);
	public void update(User user);
}
