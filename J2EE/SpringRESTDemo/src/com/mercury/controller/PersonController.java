package com.mercury.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mercury.beans.Employee;
import com.mercury.dao.PersonDao;
import com.mercury.util.Converter;

@Controller
public class PersonController {

	@Autowired
	private PersonDao pd;
	@Autowired
	private Converter converter;
	
	@RequestMapping(value="/employees", method=RequestMethod.GET)
	@ResponseBody
	public List<Employee> getEmployees(){
		return converter.toEmployees(pd.queryAll());
	}
	
	@RequestMapping(value="/employees", method=RequestMethod.POST)
	@ResponseBody
	public void saveEmployees(@RequestBody Employee emp){
		pd.save(converter.toPerson(emp));
	}
	
	@RequestMapping(value="/employees/{name}", method=RequestMethod.GET)
    @ResponseBody
    public Employee getEmployee(@PathVariable String name) {
        return converter.toEmployee(pd.findByName(name));
    }
    
    @RequestMapping(value="/employees", method=RequestMethod.PUT)
    @ResponseBody
    public void updateEmployees(@RequestBody Employee emp) {
        pd.update(converter.toPerson(emp));
    }
    
    @RequestMapping(value="/employees/{name}", method=RequestMethod.DELETE)
    @ResponseBody
    public void deleteEmployee(@PathVariable String name) {
        pd.deleteByName(name);
    }
}
