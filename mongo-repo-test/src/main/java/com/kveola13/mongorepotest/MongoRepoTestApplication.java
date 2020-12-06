package com.kveola13.mongorepotest;

import com.kveola13.mongorepotest.model.Card;
import com.kveola13.mongorepotest.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MongoRepoTestApplication implements CommandLineRunner {

	@Autowired
	private CardRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(MongoRepoTestApplication.class, args);
    }

	@Override
	public void run(String... args) throws Exception {
		repository.deleteAll();
		repository.save(new Card(1, "test card"));

		System.out.println("Cards:");
		System.out.println(repository.findAll());
	}
}
