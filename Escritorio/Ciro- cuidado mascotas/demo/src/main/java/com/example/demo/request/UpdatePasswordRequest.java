package com.example.demo.request;

import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

public record UpdatePasswordRequest(@NotNull
                                     String token,

                                    @NotNull(message = "La contraseña no debe estar vacía")
                                     @Length(min = 8, max = 16, message = "La contraseña debe tener de 8 a 16 caracteres")
                                     String password,

                                    @NotNull(message = "No debe estar vacío")
                                     String passwordConfirm) {
}
