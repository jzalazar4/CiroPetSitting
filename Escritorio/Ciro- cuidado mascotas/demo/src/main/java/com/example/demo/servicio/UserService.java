package com.example.demo.servicio;

import com.example.demo.entidad.User;
import com.example.demo.error.AccountLockedException;
import com.example.demo.error.EmailAlreadyExistsException;
import com.example.demo.error.PasswordDontMatchException;
import com.example.demo.error.UserNotFoundException;
import com.example.demo.repositorio.TokenRepo;
import com.example.demo.repositorio.UserRepo;
import com.example.demo.servicio.impl.UserDetailsImpl;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService implements UserDetailsService {

    // Intentos para acceder a la cuenta
    public static final int MAX_FAILED_ATTEMPS = 5;
    private static final Logger log = LoggerFactory.getLogger(UserService.class);
    private  UserRepo userRepo;
    private  PasswordEncoder passwordEncoder;
    private  TokenRepo tokenRepo;



    // Buscar y mostrar usuario si coincide con el username

    public UserDetailsImpl loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Datos usuario: {}", username);
        User user = userRepo
                .findByEmail(username) // find the user by email
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        return new UserDetailsImpl(user);
    }

    // Ver si existe el usuario segun el email. True si existe
    public boolean emailExists(String email) {
        return userRepo.existsByEmail(email);
    }


    // Buscar usuario x email
    public User findUserByEmail(String email) {
        return userRepo
                .findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("No existe el usuario con el email: " + email));
    }

    // Verifica si no hay usuario con esos datos y lo guarda
    public User saveUser(User user) {
        String email = user.getEmail(); // get the email that the user have provided

        // check if the email already exists
        if (emailExists(email)) {
            // if the email already exists, throw an exception
            throw new EmailAlreadyExistsException();
        } else { // if the email doesn't exist, save the user

            String password = user.getPassword(); // get the password that the user have provided
            user.setPassword(passwordEncoder.encode(password)); // encode the password

           /* Set<Role> roles = user.getRoles(); // get the roles that the user have provided

            user.setRoles(roles); // set the roles*/

            userRepo.save(user); // save the user
        }
        return user;
    }


    // Actualiza contraseña
    public void updatePassword(String email, String password, String confirmPassword) {

        if (emailExists(email)) { // check if the email exists
            User user = findUserByEmail(email); // get the user

            if (password.equals(confirmPassword)) { // check if the password and the confirmPassword matches.
                user.setPassword(passwordEncoder.encode(confirmPassword)); // encode the new password
                userRepo.save(user); // save the user
            } else { // if the password doesn't match, throw an exception
                throw new PasswordDontMatchException();
            }
        } else { // if the email doesn't exist, throw an exception
            throw new UserNotFoundException("no user with email: " + email + " found");
        }
    }

    // Validar las credenciales del usuario (email y contraseña)
    public User validateCredentials(String email, String password) {
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new BadCredentialsException("Invalid credentials"));

        if (!passwordEncoder.matches(password, user.getPassword())) { // If the password is incorrect
            // Increment failed attempts
            user.setFailedAttempts(user.getFailedAttempts() + 1);

            userRepo.save(user);

            if (user.getFailedAttempts() >= MAX_FAILED_ATTEMPS) { // If the user has failed to log in 5 times
                // Lock the account
                log.info("Cuenta bloqueada: {}", email);
                user.setAccountNonLocked(false);
                userRepo.save(user);
                throw new AccountLockedException();
            }

            throw new BadCredentialsException("Credenciales inválidas");
        }

        // Se resetean los intentos fallidos una vez que el usuario ingresa a la cuenta
        user.setFailedAttempts(0);
        userRepo.save(user);

        return user;
    }

    // Habilita al usuario entrar a su cuenta
    public void enableUser(String email) {
        // get the user by email
        User user = findUserByEmail(email);
        // enable the user
        user.setEnabled(true);
        // save the user
        userRepo.save(user);
    }
    // Deshabilita al usuario

    public void lockUser(String email) {
        // get the user by email
        User user = findUserByEmail(email);
        // lock the user
        user.setAccountNonLocked(false);
        // save the user
        userRepo.save(user);
    }

    // Desbloquear usuario
    public void unlockUser(String email) {
        // get the user by email
        User user = findUserByEmail(email);
        // unlock the user
        user.setAccountNonLocked(true);
        user.setFailedAttempts(0);
        // save the user
        userRepo.save(user);
    }

    // Listar todos los usuarios
    public List<User> getAllUsers() {
        return userRepo.findAllUsers();
    }

    // Mostrar usuarios bloqueados
    public List<User> getLockedUsers() {
        return userRepo.findLockedUsers();
    }

    // Mostrar usuarios habilitados
    public List<User> getUnlockedUsers() {
        return userRepo.findUnlockedUsers();
    }

    // Eliminar usuarios
    @Transactional
    public void deleteUser(String email) {
        // get the user by email
        User user = findUserByEmail(email);
        long userId = user.getId();

        // First, delete the tokens associated with the user
        tokenRepo.deleteAllByUser(userId);

        // Then, delete the user
        userRepo.delete(user);
    }
}
