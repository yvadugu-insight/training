<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="decorator" content="main"/> 
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login Page</title>
</head>
<body>
        <!-- outer div = contains everything -->
		<div id="outer">		
			<!-- bodyContent div = generic wrapper for all the content that uses this JSP -->
			<div id="bodyContent" class="Layout">
			   <!-- login page loads here -->
			   <div>
			   		<h3>Login with Username and Password</h3>
 
					<c:if test="${not empty error}">
						<div class="alertError">
							Your login attempt was not successful, try again.<br /> Caused :
							${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}
						</div>
					</c:if>
				 
					<form name='f' action="<c:url value='j_spring_security_check' />"
						method='POST'>
				 
						<table>
							<tr>
								<td>User:</td>
								<td><input type='text' name='j_username' value=''>
								</td>
							</tr>
							<tr>
								<td>Password:</td>
								<td><input type='password' name='j_password' />
								</td>
							</tr>
							<tr>
								<td colspan='2'><input name="submit" type="submit"
									value="submit" />
								</td>
							</tr>
							<tr>
								<td colspan='2'><input name="reset" type="reset" />
								</td>
							</tr>
						</table>
				 
					</form>
			   
			   </div>		    
			</div>
			<!-- end bodyContent wrapper -->
		</div>
		<!-- end outer div -->
		<script type="text/javascript">
			
		</script>	
</body>
</html>