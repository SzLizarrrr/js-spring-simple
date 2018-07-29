package com.mercury.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mercury.beans.User;
import com.mercury.service.HelloService;

public class HelloServlet extends HttpServlet {
	
	private HelloService hs;
	
	public HelloServlet() {
		if(hs == null){
			hs = new HelloService();
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	}
	
	private User parse(HttpServletRequest req){
		User user = new User();
		user.setName(req.getParameter("name"));
		user.setAge(Integer.parseInt(req.getParameter("age")));
		return user;
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		User user = parse(req);
		req.setAttribute("userInfo", hs.process(user));
		String url = "/result.jsp";
		RequestDispatcher dispatcher = this.getServletContext().getRequestDispatcher(url);
		dispatcher.forward(req, resp);
	}
}
