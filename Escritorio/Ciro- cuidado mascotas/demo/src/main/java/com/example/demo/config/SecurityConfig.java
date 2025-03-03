package com.example.demo.config;

import com.example.demo.request.JwtAuthorizationFilter;
import jakarta.servlet.Filter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.security.AuthProvider;
import java.util.List;

import static jakarta.servlet.http.HttpServletResponse.SC_FORBIDDEN;
import static org.springframework.security.config.Customizer.withDefaults;

@Slf4j
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    private JwtAuthorizationFilter jwtAuthFilter; // this is the filter that will be used to authenticate requests

    @Autowired
    private AuthenticationProvider authenticationProvider; // this is the provider that will be used to authenticate requests

    @Autowired
    private LogoutHandler logoutHandler; // this is the handler that will be used to log out users


    /**
     * Configures the security filter chain for the application.
     *
     * @param http the HttpSecurity object to configure
     * @return the SecurityFilterChain object
     * @throws Exception if an error occurs during configuration
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // disable CSRF protection
                .csrf(
                        AbstractHttpConfigurer::disable

                )

                // set up the headers to use the same origin
                .headers(
                        headers -> headers
                                .frameOptions(Customizer.withDefaults())
                )

                // set up the Exception Handler
                .exceptionHandling(
                        exceptionHandling -> exceptionHandling
                                .accessDeniedHandler((request, response, accessDeniedException) -> {
                                    response.setStatus(SC_FORBIDDEN);
                                    response.getWriter().write("access denied");
                                    log.error("Access denied error handler triggered");
                                })
                )

                // set up the authorization rules
                .authorizeHttpRequests(
                        authorizeHttpRequests -> authorizeHttpRequests

                                // allow access to the static resources to everyone
                                .requestMatchers(HttpMethod.POST,
                                        "/api/auth/register/**",
                                        "/api/auth/refresh-token",
                                        "/api/auth/enable-user/**",
                                        "/api/auth/authenticate",
                                        "/api/auth/forgot-password",
                                        "/api/auth/reset-password")
                                .permitAll()

                                // allow only authenticated user to this endpoint
                                .requestMatchers(HttpMethod.GET,
                                        "/api/user/**")
                                .hasAuthority("ROLE_USER")

                                // allow only authenticated admin to this endpoint
                                .requestMatchers(HttpMethod.GET,
                                        "/api/admin/**")
                                .hasAuthority("ROLE_ADMIN")

                                // any other request must be authenticated
                                .anyRequest().authenticated()
                )

                // set up the CORS configuration
                .cors(withDefaults()) // by default uses a Bean by the name of corsConfigurationSource

                // set up the session management
                .sessionManagement(
                        sessionManagement -> sessionManagement
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )

                // set up the authentication provider
                .authenticationProvider(authenticationProvider)
                .addFilterBefore((Filter) jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)

                // set up the logout handler
                .logout(
                        logout -> logout
                                .logoutUrl("/api/auth/logout")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                );

        return http.build();
    }

    /**
     * Creates a CorsConfigurationSource bean that allows cross-origin resource sharing.
     *
     * @return the CorsConfigurationSource object
     */
    @Bean(name = "corsConfigurationSource")
    public CorsConfigurationSource corsConfiguration() {

        final CorsConfiguration corsConfiguration = new CorsConfiguration();

        corsConfiguration.setAllowedOriginPatterns(List.of("*"));

        corsConfiguration.setAllowedMethods(
                List.of(
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                )
        );


        corsConfiguration.setAllowedHeaders(
                List.of(
                        "Authorization",
                        "Content-Type",
                        "Access-Control-Allow-Origin",
                        "Access-Control-Allow-Headers",
                        "Access-Control-Expose-Headers"
                ));

        corsConfiguration.setAllowCredentials(true);

        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", corsConfiguration);

        return (CorsConfigurationSource) source;
    }
}
