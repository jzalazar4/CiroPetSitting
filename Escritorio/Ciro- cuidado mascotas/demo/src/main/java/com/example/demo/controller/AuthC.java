package com.example.demo.controller;

import com.example.demo.error.EmailAlreadyExistsException;
import com.example.demo.error.PasswordDontMatchException;
import com.example.demo.error.UserNotFoundException;
import com.example.demo.request.*;
import com.example.demo.servicio.AuthenticationService;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSendException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/auth")
public class AuthC {

    private static final Logger log = LoggerFactory.getLogger(AuthC.class);
    private final AuthenticationService authenticationService;

    public AuthC(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("register")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest request) {
        try {
            authenticationService.registerUser(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
        } catch (PasswordDontMatchException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password and password confirm do not match");
        } catch (EmailAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        } catch (MailSendException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while sending activation link");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while registering user");
        }
    }

    @PostMapping("authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @Valid @RequestBody AuthenticationRequest request
    ) {
        AuthenticationResponse responseToken = authenticationService.authenticate(request);
        return ResponseEntity.ok(responseToken);
    }

    @PostMapping("enable-user/{token}")
    public ResponseEntity<String> enableUser(
            @PathVariable String token
    ) {
        try {
            authenticationService.enableUser(token);
            // If the enableUser method succeeds, perform the redirect
            return ResponseEntity.status(HttpStatus.FOUND)
                    .header("Location", "http://localhost:5173/login")
                    .body(null);
        } catch (ExpiredJwtException e) { // ExpiredJwtException is a custom exception
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Link has expired. Please request a new one.");
        } catch (UserNotFoundException e) { // UserNotFoundException is a custom exception
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("User not found !!");
        } catch (Exception e) { // For any other unhandled exceptions, return a generic error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to enable user.");
        }
    }

    @PostMapping("refresh-token")
    public ResponseEntity<AuthenticationResponse> refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        AuthenticationResponse responseToken = authenticationService.refreshToken(request, response);
        return ResponseEntity.ok(responseToken);
    }

    @PostMapping("forgot-password")
    public ResponseEntity<String> sendResetPasswordRequest(
            @Valid @RequestBody EmailRequest request
    ) {
        try {
            authenticationService.sendResetPasswordRequestToUser(request.email());
            return ResponseEntity.ok("Reset password link sent to user with email " + request.email());
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Email does not exist");
        } catch (MailSendException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error while sending reset password link");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred while processing the request.");
        }
    }

    @PostMapping("reset-password")
    public ResponseEntity<String> resetPassword(
            @RequestBody @Valid UpdatePasswordRequest request
    ) {
        try {
            authenticationService.upDatePassword(request.token(), request.password(), request.passwordConfirm());
            // If the upDatePassword method succeeds, perform the redirect
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("Password updated successfully");
        } catch (PasswordDontMatchException e) { // PasswordDontMatchException is a custom exception
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Password don't match !!");
        } catch (ExpiredJwtException e) { // ExpiredJwtException is a custom exception
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Link has expired. Please request a new one.");
        } catch (UserNotFoundException e) { // UserNotFoundException is a custom exception
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("User not found !!");
        } catch (Exception e) {  // For any other unhandled exceptions, return a generic error message
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to reset password try again !!");
        }
    }
}
