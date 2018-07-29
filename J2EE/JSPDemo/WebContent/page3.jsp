<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Page #</title>
</head>
<body>
<h2>This is page #3</h2>
<p>Session: <%=session.getAttribute("session") %></p>
<p>Request: <%=request.getParameter("welcome") %></p>
</body>
</html>