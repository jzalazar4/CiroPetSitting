package com.example.demo.repositorio;

import com.example.demo.entidad.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepo extends JpaRepository<Token, Long> {
    @Query(value = """
        SELECT t FROM Token t INNER JOIN User u
        ON t.user.id = u.id
        WHERE u.id = ?1 AND (t.expired = FALSE OR t.revoked = FALSE)
        """)
    List<Token> findAllValidTokenByUser(Long id);


    @Query("""
        SELECT t FROM Token t
        WHERE t.token = ?1
        """)
    Optional<Token> findByToken(String token);


    @Modifying
    @Query("""
        DELETE FROM Token t
        WHERE t.user.id = ?1
        """)
    void deleteAllByUser(Long id);
}
