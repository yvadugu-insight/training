<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="decorator" content="main"/> 
<script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/demoVideo.js"></script>
<link rel="stylesheet" type="text/css" href="${fileServer}/resources/assets/www/css/demoVideo.css" />

<title>Pixel Training Demo </title>
</head>
<body>
		<!-- outer div = contains everything -->
		<div id="outer">
			<!-- bodyContent div = generic wrapper for all the content that uses this JSP -->
			<div id="bodyContent" class="Layout">
			   <!-- video page loads here -->
			   <div id="videoMainDiv">			   		
			   		<div id="TrainingVideoDiv"></div>
			   </div>		    
			</div>
			<!-- end bodyContent wrapper -->
		</div>
		<!-- end outer div -->
		<script type="text/javascript">
			$(document).ready(function () {
				PixelVideo.init("${fileServer}","${videoKey}");
				});	
		</script>
</body>
</html>

