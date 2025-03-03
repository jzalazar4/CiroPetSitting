package com.example.demo.error;

import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.LOCKED;

public class AccountLockedException extends ResponseStatusException {
    public AccountLockedException() {
        super(LOCKED, "La cuenta está bloqueada por múltiples intentos fallidos de inicio de sesión.");
    }
}
