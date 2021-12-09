package fi.digiprojekti.Oppio.web;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import fi.digiprojekti.Oppio.domain.RegistrationInformation;
import fi.digiprojekti.Oppio.domain.User;
import fi.digiprojekti.Oppio.domain.UserRepository;

@Controller
public class UserController {
  @Autowired
  private UserRepository repository;

  	// Login form
	@GetMapping("/login")
	public String login() {
		return "login";
	}

	// Signup form
	@GetMapping("/signup")
	public String signup(Model model) {
    model.addAttribute("registrationInformation", new RegistrationInformation());
		return "signup";
	}

  @PostMapping("saveuser")
  public String save(@Valid @ModelAttribute("registrationInformation") RegistrationInformation registrationInformation, BindingResult bindingResult) {

    if (!bindingResult.hasErrors()) {
      if (registrationInformation.getPassword().equals(registrationInformation.getPasswordCheck())) {
        String pwd = registrationInformation.getPassword();
        BCryptPasswordEncoder bc = new BCryptPasswordEncoder();
        String hashPwd = bc.encode(pwd);

        User newUser = new User();
        newUser.setPasswordHash(hashPwd);
        newUser.setUsername(registrationInformation.getUsername());
        newUser.setRole("USER");
        if (repository.findByUsername(registrationInformation.getUsername()) == null) {
          repository.save(newUser);
        } else {
          bindingResult.rejectValue("username", "err.username", "Käyttäjätunnus on jo olemassa.");
          return "signup";
        }
      } else {
        bindingResult.rejectValue("passwordCheck", "err.passwordCheck", "Salasanat eivät vastaa toisiaan.");
        return "signup";
      }
    } else {
      return "signup";
    }
    return "redirect:/login";
  }

}
