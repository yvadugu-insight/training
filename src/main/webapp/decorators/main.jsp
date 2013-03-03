<?xml version="1.0" encoding="UTF-8" ?>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title><decorator:title /></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">     
    <link rel="stylesheet" type="text/css" href="${fileServer}/resources/assets/www/css/common.css" />
    <link rel="stylesheet" type="text/css" href="${fileServer}/resources/assets/www/css/jquery-ui.css" />
    <script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/jquery-1.9.0.js"></script>
    <script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/commonFunctions.js"></script>    
	<script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/jquery.tmpl.js"></script>
	<script type="text/javascript" src="${fileServer}/resources/assets/www/javascript/json2.js"></script>
	<link rel="icon" type="image/png" href="${fileServer}/resources/assets/images/fevicon.png">                       
    <decorator:head />      
</head>
<body>
    <input type="hidden" id="globalFileServerUrlId" value="${fileServer}"/>
	<div class="mainBodyParent">	
	<jsp:include page="../WEB-INF/framework/header.jsp"></jsp:include>    	
    <decorator:body />
    <jsp:include page="../WEB-INF/framework/footer.jsp"></jsp:include>
    </div>       
</body>
</html>