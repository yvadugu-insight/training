package com.pixel.training;

import java.security.Principal;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.pixel.util.UrlResolverUtil;

@Controller
public class WelcomeController {
	
	@Autowired
	UrlResolverUtil urlResolverUtil;

	private static final Logger logger = LoggerFactory.getLogger(WelcomeController.class);
	
	@RequestMapping(value = "/welcome",method = RequestMethod.GET)
	public String welcome(Locale locale, Model model, HttpServletRequest req, Principal principal) {
		logger.info("Welcome Page! The client locale is {}.", locale);		
		
		model.addAttribute("fileServer",urlResolverUtil.getImageServerUrl(req));
		model.addAttribute("welcomeVar","hi yaswanth this is welcome page.");
		
		String name = principal.getName();
		model.addAttribute("username", name);
		
		return "welcome";
	}
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	public String login(Model model, HttpServletRequest req) {
		logger.info("Just login page is hit");
		model.addAttribute("fileServer",urlResolverUtil.getImageServerUrl(req));
		return "login"; 
	}
	@RequestMapping(value="/loginfailed", method = RequestMethod.GET)
	public String loginfailed(Model model, HttpServletRequest req) {
		logger.info("Just login Fail page is hit");	
		model.addAttribute("fileServer",urlResolverUtil.getImageServerUrl(req));
		model.addAttribute("error", "true");
		return "login"; 
	}
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logout(Model model, HttpServletRequest req) {
		logger.info("Just logout page is hit");
		model.addAttribute("fileServer",urlResolverUtil.getImageServerUrl(req));
	
		return "login"; 
	}
	
}
