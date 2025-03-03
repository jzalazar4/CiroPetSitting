package com.example.demo.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

public class EmailAlreadyExistsException extends ResponseStatusException {
    public EmailAlreadyExistsException() {
        super(HttpStatus.CONFLICT,"El email ya existe");
    }
}
