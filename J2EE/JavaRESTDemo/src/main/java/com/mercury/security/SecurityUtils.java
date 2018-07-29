package com.mercury.security;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mercury.beans.UserProfile;

public class SecurityUtils {
	
	private static final ObjectMapper mapper = new ObjectMapper();
	
	public static List<CustomRole> covertUserProfileToGrantedAuthority(List<UserProfile> profiles) {
		List<CustomRole> c = new ArrayList<CustomRole>();
		for(UserProfile profile : profiles){
			CustomRole customRole = new CustomRole();
			customRole.setAuthority(profile.getType());
			c.add(customRole);
		}
		return c;
	}
	
	public static void sendError(HttpServletResponse response, Exception exception, int status, String message) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(status);
        PrintWriter writer = response.getWriter();
        RestError error = new RestError("authError", exception.getMessage());
        writer.write(mapper.writeValueAsString(new RestResponse(status, message, error)));
        writer.flush();
        writer.close();
    }


    public static void sendResponse(HttpServletResponse response, int status, String message) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        writer.write(mapper.writeValueAsString(new RestResponse(status, message, null)));
        response.setStatus(status);
        writer.flush();
        writer.close();
    }

}
