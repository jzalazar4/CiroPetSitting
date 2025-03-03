package com.example.demo.config;

import com.example.demo.entidad.User;
import com.example.demo.repositorio.UserRepo;
import lombok.Builder;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import static com.example.demo.entidad.Role.ROLE_ADMIN;

@Component
@Slf4j
public class AdminInitializer implements ApplicationRunner {

    private  UserRepo userRepo;
    private String adminUsername;
    private String adminPassword;
    private PasswordEncoder passwordEncoder;
    //  @Value("${admin.username}")  @Value("${admin.password}")


    @Override
    public void run(ApplicationArguments args) {
       /* User admin = User.builder()
                .nombre("admin")
                .apellido("admin")
                .email(adminUsername)
                .password(adminPassword)
                .confirmPassword(adminPassword)
                .role(ROLE_ADMIN)
                .enabled(true)
                .accountNonLocked(true)
                .build();
*/
     //   User admin = new User("admin", "admin", adminUsername, adminPassword, adminPassword, ROLE_ADMIN, true, true);
        User admin = new User();
        admin.setNombre("admin");
        admin.setApellido("admin");
        admin.setPassword(adminPassword);
        admin.setConfirmPassword(adminPassword);
        admin.setRole(ROLE_ADMIN);
        admin.setEnabled(true);
        admin.setTelefono(Long.valueOf("111111"));
        admin.setAccountNonLocked(true);
        admin.setEmail(adminUsername);

        if (!userRepo.existsByEmail(adminUsername)) {
            admin.setPassword(passwordEncoder.encode(adminPassword));
            userRepo.save(admin);
            log.info("Admin creado");
        } else {
            log.info("Admin ya existe");
        }
    }
}
