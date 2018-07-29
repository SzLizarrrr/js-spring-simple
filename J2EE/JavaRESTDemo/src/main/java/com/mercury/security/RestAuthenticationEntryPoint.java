package com.mercury.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

	@Override
	public void commence(HttpServletRequest arg0, HttpServletResponse response, AuthenticationException exception)
			throws IOException, ServletException {
        SecurityUtils.sendError(response, exception, HttpServletResponse.SC_UNAUTHORIZED, "Authentication failed");
	}

}
