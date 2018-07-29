package com.mercury.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mercury.beans.User;
import com.mercury.dao.UserDao;

@Controller
@RequestMapping("/account")
@Secured({"ROLE_USER", "ROLE_ADMIN"})
public class UserController {
	
	@Autowired
	private UserDao userDao;
	
	@RequestMapping(value="/changepassword", method=RequestMethod.PUT)
	@ResponseBody
	public void updateUserPassword(@RequestBody User user) {
		userDao.updatePassword(user);
	}
	
}
