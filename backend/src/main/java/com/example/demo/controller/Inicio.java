package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class Inicio {
    @GetMapping("/ok")
    public ResponseEntity<String> homePageGreeting() {
        return ResponseEntity.ok("Hello u are reading this message from a protected endpoint. You are now authenticated.");
    }
}
