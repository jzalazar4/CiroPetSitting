package com.example.demo.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class PasswordDontMatchException extends ResponseStatusException {
    public PasswordDontMatchException() {
        super(HttpStatus.BAD_REQUEST, "Las contraseñas no coinciden");
    }
}
