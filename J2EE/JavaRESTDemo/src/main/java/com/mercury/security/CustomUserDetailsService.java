package com.mercury.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.mercury.dao.UserDao;

public class CustomUserDetailsService implements UserDetailsService {
    
    @Autowired
	private UserDao userDao;

	@Override
	public UserDetails loadUserByUsername(String username) {		
		com.mercury.beans.User user = userDao.findByUserName(username);
		System.out.println(user);
		if(user.getUsername() == null){
			throw new UsernameNotFoundException("User " + username + " was not found in the database");
		}
		
		return new User(user.getUsername(), user.getPassword(), SecurityUtils.covertUserProfileToGrantedAuthority(user.getProfiles()));
	}

}
