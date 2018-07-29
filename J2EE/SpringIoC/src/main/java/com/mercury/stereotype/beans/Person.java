package com.mercury.stereotype.beans;

import java.util.Set;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Person {
	@Value("Bob")
	private String name;
	
	@Autowired
	private Address address;
	
	@Override
	public String toString() {
		return "Person [name=" + name + ", address=" + address + ", emails=" + emails + "]";
	}
	@Resource
	private Set<String> emails;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Set<String> getEmails() {
		return emails;
	}
	public void setEmails(Set<String> emails) {
		this.emails = emails;
	}
	
	
}
