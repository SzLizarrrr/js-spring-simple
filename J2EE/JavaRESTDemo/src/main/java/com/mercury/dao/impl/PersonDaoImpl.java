package com.mercury.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.beans.Person;
import com.mercury.dao.AbstractDao;
import com.mercury.dao.PersonDao;

@Repository
@Transactional
public class PersonDaoImpl extends AbstractDao implements PersonDao {
	
	
	@Override
	public void save(Person person) {
		getSession().save(person);
	}

	@Override
	public void update(Person person) {
		getSession().update(person);
	}

	@Override
	public void delete(Person person) {
		getSession().delete(person);
	}

	@Override
	public void deleteByName(String name) {
		Person person = (Person)getSession().load(Person.class, name);
		this.delete(person);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Person> queryAll() {
		Criteria criteria = getSession().createCriteria(Person.class);
		return (List<Person>) criteria.list();
	}

	@Override
	public Person findByName(String name) {
		Criteria criteria = getSession().createCriteria(Person.class);
		criteria.add(Restrictions.eq("name", name));
		return (Person)criteria.uniqueResult();
	}

}
