package com.kveola13.mongorepotest.controller;

import com.kveola13.mongorepotest.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class CardController {

    @Autowired
    private CardRepository repo;

    @GetMapping("/cards")
    List getCardList() {
        return repo.findAll();
    }
}
