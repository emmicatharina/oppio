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

	// Signup form
	@GetMapping("/signup")
	public String signup() {
		return "signup";
	}

	// Oppio-tietoa
	@GetMapping("/oppio")
	public String oppio() {
		return "oppio";
	}

	// AMK-valintakoe
	@GetMapping("/amk-valintakoe")
	public String amkValintaKoe() {
		return "amkvalintakoe";
	}

	// Hakeminen
	@GetMapping("/hakeminen")
	public String hakeminen() {
		return "hakeminen";
	}

	// Contact informations
	@GetMapping("/otayhteytta")
	public String contactInformation() {
		return "contact";
	}

}
