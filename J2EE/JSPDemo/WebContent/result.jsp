<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%@page import="com.mercury.beans.User"%>
<jsp:useBean id="userInfo" scope="request" class="com.mercury.beans.UserInfo"/>

<div class="container">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
        	<c:forEach var="user" items="${userInfo.users}">
        		<tr>
        			<td>${user.name}</td>
        			<td>${user.age}</td>
        		</tr>
        	</c:forEach>
        	<%--
        	<%
        		for(User user : userInfo.getUsers()){
        			out.print("<tr>");
        			out.print("<td>" + user.getName() + "</td>");
        			out.print("<td>" + user.getAge() + "</td>");
        			out.print("</tr>");
        		}
        	%>
        	--%>
        </tbody>
    </table>
</div>
</body>
</html>