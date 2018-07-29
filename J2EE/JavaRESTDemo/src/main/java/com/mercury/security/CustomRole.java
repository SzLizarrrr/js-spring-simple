package com.mercury.security;

import org.springframework.security.core.GrantedAuthority;

public class CustomRole  implements GrantedAuthority{
	private static final long serialVersionUID = 1L;
	String role = null;

    @Override
    public String getAuthority() {
        return role;
    }

    public void setAuthority(String roleName) {
        this.role = roleName;
    }
}
