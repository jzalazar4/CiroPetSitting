package com.example.demo.controller;

import com.example.demo.entidad.User;
import com.example.demo.servicio.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminC {

    private static final Logger log = LoggerFactory.getLogger(AdminC.class);
    private final UserService userService;

    public AdminC(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public ResponseEntity<String> adminGreeting() {
        return ResponseEntity.ok("Hello admin u are reading this message from a protected endpoint. Only admins can access this endpoint.");
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/locked-users")
    public ResponseEntity<List<User>> getLockedUsers() {
        return ResponseEntity.ok(userService.getLockedUsers());
    }

    @GetMapping("/unlocked-users")
    public ResponseEntity<List<User>> getUnlockedUsers() {
        return ResponseEntity.ok(userService.getUnlockedUsers());
    }

    @DeleteMapping("/users/{email}")
    public ResponseEntity<String> deleteUser(@PathVariable String email) {
        userService.deleteUser(email);
        return ResponseEntity.ok("User deleted successfully");
    }

    @PostMapping("/lock-user/{email}")
    public ResponseEntity<String> enableUser(@PathVariable String email) {
        userService.lockUser(email);
        return ResponseEntity.ok("User locked successfully");
    }

    @PostMapping("/unlock-user/{email}")
    public ResponseEntity<String> disableUser(@PathVariable String email) {
        userService.unlockUser(email);
        return ResponseEntity.ok("User unlocked successfully");
    }
}
