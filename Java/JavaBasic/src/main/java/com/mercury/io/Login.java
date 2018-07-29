package com.mercury.io;

import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

public class Login implements Externalizable{

	private String username;
	private String password;

	public Login() {
		super();
	}

	public Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Login [username=" + username + ", password=" + password + "]";
	}

	@Override
	public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
		username = (String)in.readObject();
		//password = (String)in.readObject();
		// password = password.substring(3);
	}

	@Override
	public void writeExternal(ObjectOutput out) throws IOException {
		out.writeObject(username);
		//out.writeObject("XYZ" + password);
	}

}
