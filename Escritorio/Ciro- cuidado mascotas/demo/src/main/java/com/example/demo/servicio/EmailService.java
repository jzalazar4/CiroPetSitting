package com.example.demo.servicio;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.util.Calendar;


@Service
public class EmailService {
    private static final Logger log = LoggerFactory.getLogger(EmailService.class);
    private  JavaMailSender javaMailSender;
    private  String senderEmail;
//@Value("${spring.mail.username}")


    //@Value("${jwt.expiration.enable-account}")
    private long enableAccountExpirationTimeInMs;

    //@Value("${jwt.expiration.reset-password}")
    private long resetPasswordExpirationTimeInMs;


    /**
     * Sends an activation link email to the specified user email address, using the provided activation link URL and
     * <p>
     * first name of the user.
     *
     * @param email          the email address of the user
     * @param firstName      the first name of the user
     * @param activationLink the activation link URL
     */
    public void sendActivationLink(String email, String firstName, String activationLink) {
        String ACTIVATION_EMAIL_TEMPLATE = "templates/activate-account.html";
        String subject = "Activate Your Account";

        sentEmailWithTemplate(email, firstName, subject, activationLink, ACTIVATION_EMAIL_TEMPLATE, enableAccountExpirationTimeInMs);
    }

    /**
     * Sends a password reset request email to the specified user email address, using the provided reset password link
     * <p>
     * URL and first name of the user.
     *
     * @param email             the email address of the user
     * @param firstName         the first name of the user
     * @param resetPasswordLink the reset password link URL
     */
    public void sendResetPasswordRequestToUser(String email, String firstName, String resetPasswordLink) {
        String RESET_PASSWORD_EMAIL_TEMPLATE = "templates/reset-password.html";
        String subject = "Reset Your Password";

        sentEmailWithTemplate(email, firstName, subject, resetPasswordLink, RESET_PASSWORD_EMAIL_TEMPLATE, resetPasswordExpirationTimeInMs);
    }


    /**
     * Sends an email with a specified HTML template to the specified user email address, using the provided email subject,
     * <p>
     * URL and template.
     *
     * @param email     the email address of the user
     * @param nombre the first name of the user
     * @param subject   the email subject
     * @param url       the URL used in the email template
     * @param template  the email HTML template
     */
    public void sentEmailWithTemplate(String email, String nombre, String subject, String url, String template, long expirationTimeInMs) {

        String senderName = "Spring Boot 3 Team";
        String currentYear = String.valueOf(Calendar.getInstance().get(Calendar.YEAR));
        int expirationTimeInMinutes = (int) (expirationTimeInMs / 60000);

        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(senderEmail, senderName);
            helper.setTo(email);
            helper.setSubject(subject);

            // Load email template from file
            ClassPathResource resource = new ClassPathResource(template);
            String content = new String(Files.readAllBytes(resource.getFile().toPath()));

            // Replace placeholders in email template with dynamic content
            content = content.replace("{{firstName}}", nombre);
            content = content.replace("{{activationLink}}", url);
            content = content.replace("{{currentYear}}", currentYear);
            content = content.replace("{{expirationTimeInMinutes}}", String.valueOf(expirationTimeInMinutes));

            helper.setText(content, true);

            javaMailSender.send(message);

        } catch (MessagingException | IOException exception) {
            log.error("Failed to send email to {}", email, exception);
        }
    }

}
