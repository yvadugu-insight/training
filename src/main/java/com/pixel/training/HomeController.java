package com.pixel.training;

import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate);
		//imageUrlService.getImageServerUrl(request)
		model.addAttribute("fileServer","http://localhost:8080/training");
		
		return "home";
	}
	
	@RequestMapping(value = "/demo", method = RequestMethod.GET)
	public String demoVideo(Locale locale, Model model, HttpServletRequest req) {
		
		String key = req.getParameter("key");
		if (key!=null )
		{			
			model.addAttribute("videoKey", key );			
		}		
		model.addAttribute("fileServer","http://localhost:8080/training");		
		return "demoVedio";
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String launch(Locale locale, Model model, HttpServletRequest req) {
						
		model.addAttribute("fileServer","http://localhost:8080/training");		
		return "launch";
	}
	
	/*@RequestMapping(method = RequestMethod.POST, value = { "/demo" }, headers = "Accept=application/json")
	public void demoVideo(@RequestBody String jsonRequest, HttpServletRequest req,
			HttpServletResponse response, Model model) throws IOException {
		
		try {
			JSONObject jsonObject = new JSONObject(jsonRequest);
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		model.addAttribute("fileServer","http://localhost:8080/training");	
		response.sendRedirect("/insightweb/demo");
		
	}*/

	
}
