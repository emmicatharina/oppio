package fi.digiprojekti.Oppio.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OppioController {
	// Main page
	@GetMapping("/index")
	public String index() {
		return "index";
	}
	
	// Desktop view for logged in user
	@GetMapping("/desktop")
	public String desktop() {
		return "desktop";
	}
	
	// Login form
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	//Login form with error
	@GetMapping("/login-error")
	public String loginError(Model model) {
		model.addAttribute("loginError", true);
		return "login";
	}
	

}