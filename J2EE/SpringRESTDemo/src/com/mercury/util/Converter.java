package com.mercury.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.mercury.beans.Address;
import com.mercury.beans.Employee;
import com.mercury.beans.Person;

@Component
public class Converter {
    public Employee toEmployee(Person person) {
        Employee emp = new Employee();
        emp.setName(person.getName());
        emp.setAge(person.getAge());
        emp.setAddress(new Address());
        emp.getAddress().setCity(person.getCity());
        emp.getAddress().setState(person.getState());
        return emp;
    }
    
    public List<Employee> toEmployees(List<Person> persons) {
         List<Employee> emps = new ArrayList<Employee>();
         for(Person p: persons){
             emps.add(toEmployee(p));
         }
         return emps;
    }
    
    public Person toPerson(Employee emp) {
        Person person = new Person();
        person.setName(emp.getName());
        person.setAge(emp.getAge());
        person.setCity(emp.getAddress().getCity());
        person.setState(emp.getAddress().getState());
        return person;
    }
}