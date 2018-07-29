package com.mercury.beans;

public class Wrapper {
	private User user;
	private Person p;

	public Wrapper(User user, Person p) {
		super();
		this.user = user;
		this.p = p;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Person getP() {
		return p;
	}

	public void setP(Person p) {
		this.p = p;
	}

	@Override
	public String toString() {
		return "Wrapper [user=" + user + ", p=" + p + "]";
	}

}
