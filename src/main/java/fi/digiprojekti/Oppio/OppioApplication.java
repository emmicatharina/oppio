package fi.digiprojekti.Oppio;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import fi.digiprojekti.Oppio.domain.User;
import fi.digiprojekti.Oppio.domain.UserRepository;

@SpringBootApplication
public class OppioApplication {
	private static final Logger log = LoggerFactory.getLogger(OppioApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(OppioApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner oppioDemo(UserRepository urepository) {
		return(args) -> {
			log.info("save a couple of users");
			urepository.save(new User("user", "$2a$10$kOxVAuL2oeT837W6XeOhVe7KNjnC./UL3MpfabuU3ycmx3eKIYWHO", "USER"));
			urepository.save(new User("admin", "$2a$10$Kit4m1Q6ArOYJxcBy0Owy.trqMLXmv2H9PqHBUSHE8ydVG2WwOGT2", "ADMIN"));
		};
		
	}

}
