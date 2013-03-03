<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<meta name="decorator" content="main"/> 
<title>Training Add Home</title> 
<script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/homePage.js"></script>
<link rel="stylesheet" type="text/css" href="${fileServer}/resources/assets/www/css/homePage.css" />
</head>
<body>
	<!-- outer div = contains everything -->
	<div id="outer">
		<!-- sprite div = contains the change locale, shopping cart, order tracking and login -->
		<!-- bodyContent div = generic wrapper for all the content that uses this JSP -->
		<div id="bodyContent" class="Layout">
		   <!-- Quote History page loads here -->
		   <div id="trainingAddMainDiv">
		   		<%-- <p>Server time is :-${serverTime}-"yaswanth working.... here is starting page."</p> --%>
		   		<div id="TrainingContentDiv"></div>
		   </div>		    
		</div>
		<!-- end bodyContent wrapper -->
	</div>
	<!-- end outer div -->
	<script type="text/javascript">
		$(document).ready(function () {
			PixelHome.init("${fileServer}");
			});	
	</script>	
</body>
</html>