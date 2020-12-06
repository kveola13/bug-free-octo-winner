package com.kveola13.mongorepotest.repositories;

import com.kveola13.mongorepotest.model.Card;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends MongoRepository<Card, String> {
    public Card findByCardName(String cardName);
}
