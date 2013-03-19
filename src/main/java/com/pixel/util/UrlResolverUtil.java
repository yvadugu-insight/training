package com.pixel.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;
@Component
public class UrlResolverUtil {
	
public String getImageServerUrl(HttpServletRequest req) {
		
		String url;
		String urlStr = req.getRequestURL().toString();
		
		url = urlStr.substring(0, urlStr.indexOf(req.getContextPath())
					+ req.getContextPath().length());
		return url;
	}

}
