<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="decorator" content="main"/> 
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome Page</title>
</head>
<body>
        <!-- outer div = contains everything -->
		<div id="outer">		
			<!-- bodyContent div = generic wrapper for all the content that uses this JSP -->
			<div id="bodyContent" class="Layout">
			   <!-- welcome page loads here -->
			   <div>
			   		<strong>${welcomeVar}</strong>
			   		
			   		<h3>Username : ${username}</h3>	
				 
					<a href='j_spring_security_logout' > Logout</a>
			   
			   </div>		    
			</div>
			<!-- end bodyContent wrapper -->
		</div>
		<!-- end outer div -->
		<script type="text/javascript">
			
		</script>	
</body>
</html>