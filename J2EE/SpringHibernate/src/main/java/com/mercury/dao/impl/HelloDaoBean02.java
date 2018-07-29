package com.mercury.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate3.HibernateTemplate;

import com.mercury.beans.User;
import com.mercury.dao.HelloDao;

public class HelloDaoBean02 implements HelloDao {
    private HibernateTemplate template;
    
    public void setSessionFactory(SessionFactory factory) {
        template = new HibernateTemplate(factory);
    }
    
    @Override
    public void save(User user) {
        // TODO Auto-generated method stub
        template.save(user);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<User> query() {
        // TODO Auto-generated method stub
        return template.find("from User");
    }

    @Override
    public void delete(User user) {
        // TODO Auto-generated method stub
        template.delete(user);
    }

    @Override
    public void update(User user) {
        // TODO Auto-generated method stub
        template.update(user);
    }

}