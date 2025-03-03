package com.example.demo.request;
import com.example.demo.entidad.User;
import jakarta.validation.constraints.Email;
import org.hibernate.validator.constraints.Length;
import  com.example.demo.entidad.Role;
import jakarta.validation.constraints.NotNull;

public record RegisterRequest(
        @Length(min = 2, max = 16,
                message = "El nombre debe tener entre 2 y 16 caracteres")
        String firstName,

        @Length(min = 3, max = 16,
                message = "El apellido debe tener entre 2 y 16 caracteres")
        String lastName,


        @Email(message = "El email debe ser válido")
        @NotNull(message = "El email no puede estar vacío")
        @Length(min = 3, message = "El email debe tener al menos 10 caracteres ")
        String email,


        @NotNull(message = "El teléfono no puede estar vacío")
        @Length(min = 5, max = 16, message = "El teléfono debe tener de 5 a 16 caracteres ")
        String telefono,

        @NotNull(message = "La contraseña no puede estar vacía ")
        @Length(min = 8, max = 16, message = "La contraseña debe tener de 8 a 16 caracteres")
        String password,

        @NotNull
        String confirmPassword,

        Role role
) {
    public User toUser() {
        return User.of(
                firstName,
                lastName,
                email,
                Long.valueOf(telefono),
                password,
                confirmPassword,
                role
        );
    }
}
