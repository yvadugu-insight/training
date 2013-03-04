<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Training launching page</title>
	<link rel="stylesheet" type="text/css" href="${fileServer}/resources/assets/www/css/common.css" />
    <link rel="stylesheet" type="text/css" href="${fileServer}/resources/assets/www/css/jquery-ui.css" />
    <link rel="stylesheet" type="text/css" href="${fileServer}/resources/assets/www/css/launch.css" />
    <script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/jquery-1.9.0.js"></script>
    <script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/jquery-ui.js"></script>
    <script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/commonFunctions.js"></script>    
	<script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/jquery.tmpl.js"></script>
	<script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/json2.js"></script>
	<script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/launch.js"></script>
	<link rel="icon" type="image/png" href="${fileServer}/resources/assets/images/fevicon.png"> 
</head>
<body>
		<input type="hidden" id="globalFileServerUrlId" value="${fileServer}"/>
		<div class="mainBodyParent">
		 <div id="launchContentDiv"></div>
	    </div>
</body>

<script type="text/javascript">
		$(document).ready(function () {
			PixelLaunch.init("${fileServer}");
			});	
</script>	
</html>