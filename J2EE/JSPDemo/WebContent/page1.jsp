<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Page #1</title>
</head>
<body>
<% 
	session.setAttribute("session", "My Session");
%>
<h2>This is page #1</h2>
<form action="page2.jsp">
	<input type="text" name="welcome"/>
	<button type="submit">Submit</button>
</form>
</body>
</html>