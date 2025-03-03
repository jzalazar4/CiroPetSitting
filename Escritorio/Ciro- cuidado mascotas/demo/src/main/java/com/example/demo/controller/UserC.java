package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserC {

    @GetMapping("/ok")
    public ResponseEntity<String> userGreeting() {
        return ResponseEntity.ok("Hello user u are reading this message from a protected endpoint. Only users can access this endpoint.");
    }

}
