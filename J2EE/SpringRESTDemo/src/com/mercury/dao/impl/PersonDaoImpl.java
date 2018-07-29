package com.mercury.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.mercury.beans.Person;
import com.mercury.dao.PersonDao;

@Repository
public class PersonDaoImpl implements PersonDao {
	
	private HibernateTemplate template;
	
	@Qualifier("mySessionFactory")
	@Autowired
	public void init(SessionFactory sessionFactory){
		template = new HibernateTemplate(sessionFactory);
	}

	@Override
	public void save(Person person) {
		template.save(person);
	}

	@Override
	public void update(Person person) {
		template.update(person);
	}

	@Override
	public void delete(Person person) {
		template.delete(person);
	}

	@Override
	public void deleteByName(String name) {
		Person person = (Person)template.load(Person.class, name);
		this.delete(person);
	}

	@Override
	public List<Person> queryAll() {
		return template.find("from Person");
	}

	@Override
	public Person findByName(String name) {
		Person person = (Person)template.get(Person.class, name);
		return person;
	}

}
