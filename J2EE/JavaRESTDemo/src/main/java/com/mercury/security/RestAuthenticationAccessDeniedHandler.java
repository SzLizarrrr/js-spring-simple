package com.mercury.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

public class RestAuthenticationAccessDeniedHandler implements AccessDeniedHandler {

	@Override
	public void handle(HttpServletRequest arg0, HttpServletResponse response, AccessDeniedException exception)
			throws IOException, ServletException {
		SecurityUtils.sendError(response, exception, HttpServletResponse.SC_FORBIDDEN, "Not authorized resources");
	}

}
