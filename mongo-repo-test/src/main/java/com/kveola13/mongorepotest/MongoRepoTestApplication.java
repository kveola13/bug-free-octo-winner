package com.kveola13.mongorepotest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
@SpringBootApplication
public class MongoRepoTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(MongoRepoTestApplication.class, args);
	}

}
