package com.example.demo.servicio.impl;

import com.example.demo.entidad.Token;
import com.example.demo.entidad.User;
import com.example.demo.repositorio.TokenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.token.TokenService;
import org.springframework.stereotype.Service;

@Service
public class TokenServiceImpl implements TokenService {

    @Autowired
    private TokenRepo tokenRepository;


    // Revocar el token haciendolo expirar

    public void revokeToken(String token) {
        var storedToken = tokenRepository
                .findByToken(token) // Retrieve the token from the database
                .orElse(null); // If the token is not found in the database, return null

        // If the token is found, set it as expired and revoked and save it in the database
        if (storedToken != null) {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.save(storedToken);
        }
    }

    /**
     * Checks if a token is valid.
     *
     * @param jwt the token to check
     * @return true if the token is not expired and not revoked, false otherwise
     */

    public Boolean isTokenValid(String jwt) {
        return tokenRepository
                .findByToken(jwt) // Retrieve the token from the database
                .map(t -> !t.isExpired() && !t.isRevoked()) // Check if the token is not expired and not revoked
                .orElse(false); // If the token is not found in the database, return false
    }

    /**
     * Saves a token in the database.
     *
     * @param user     the user to save the token for
     * @param jwtToken the token to save
     */
    public void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    /**
     * Revokes all valid tokens for a user.
     *
     * @param user the user to revoke the tokens for
     */
    public void revokeAllUserTokens(User user) {
        // get all valid tokens for the user
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());

        // if there is no valid token, return
        if (validUserTokens.isEmpty())
            return;

        // revoke all valid tokens
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        // save all revoked tokens
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public org.springframework.security.core.token.Token allocateToken(String extendedInformation) {
        return null;
    }

    @Override
    public org.springframework.security.core.token.Token verifyToken(String key) {
        return null;
    }
}
