package com.mercury.beans;

import java.util.List;

public class UserInfo {
	private List<User> users;

	public UserInfo() {
		super();
	}

	public UserInfo(List<User> users) {
		super();
		this.users = users;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
	
}
