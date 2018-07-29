package com.mercury.dao;

import java.util.List;

import com.mercury.beans.Person;

public interface PersonDao {
	public void save(Person person);
	public void update(Person person);
	public void delete(Person person);
	public void deleteByName(String name);
	public List<Person> queryAll();
	public Person findByName(String name);
}
