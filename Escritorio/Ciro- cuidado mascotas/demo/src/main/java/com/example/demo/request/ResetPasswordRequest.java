package com.example.demo.request;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

public record ResetPasswordRequest(  @Email(message = "El email debe ser válido")
                                     @NotNull(message = "El email no debe estar vacío")
                                     @Length(min = 3, message = "El email debe tener más de 10 caracteres ")
                                     String email) {
}
