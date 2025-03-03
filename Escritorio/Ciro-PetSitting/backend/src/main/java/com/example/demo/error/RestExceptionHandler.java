package com.example.demo.error;

import io.jsonwebtoken.ExpiredJwtException;
import org.hibernate.TypeMismatchException;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.mail.MailSendException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.security.authentication.BadCredentialsException;
import java.nio.file.AccessDeniedException;
import java.util.List;

import static org.springframework.http.HttpStatus.*;


@Order
@ControllerAdvice
public class RestExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {

        List<String> errorList = exception
                .getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();

        ErrorResponse response = new ErrorResponse();
        response.setStatus(UNPROCESSABLE_ENTITY);
        response.setMessage(errorList.toString());
        return buildResponseEntity(response);
    }

    @ExceptionHandler(TypeMismatchException.class)
    public ResponseEntity<Object> handleTypeMismatch(TypeMismatchException exception) {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(NOT_IMPLEMENTED);
        response.setMessage(exception.getMessage());
        return buildResponseEntity(response);
    }

    @ExceptionHandler(PasswordDontMatchException.class)
    public ResponseEntity<Object> handlePasswordDontMatchException(PasswordDontMatchException exception) {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(BAD_REQUEST);
        response.setMessage(exception.getReason());
        return buildResponseEntity(response);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Object> handleUserNotFoundException(UserNotFoundException exception) {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(BAD_REQUEST);
        response.setMessage(exception.getReason());
        return buildResponseEntity(response);
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<Object> handleEmailAlreadyExistsException(EmailAlreadyExistsException exception) {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(CONFLICT);
        response.setMessage(exception.getReason());
        return buildResponseEntity(response);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<Object> handleAccessDeniedException() {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(FORBIDDEN);
        response.setMessage("You are not authorized to access this resource");
        return buildResponseEntity(response);
    }

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<Object> handleExpiredJwtException() {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(REQUEST_TIMEOUT);
        response.setMessage("Your session has expired, please login again");
        return buildResponseEntity(response);
    }

    @ExceptionHandler(DisabledException.class)
    public ResponseEntity<Object> handleDisabledException() {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(FORBIDDEN);
        response.setMessage("Please ensure that you have clicked on the link that was sent to your email.");
        return buildResponseEntity(response);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Object> handleBadCredentialsException() {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(BAD_REQUEST);
        response.setMessage("Invalid credentials");
        return buildResponseEntity(response);
    }

    @ExceptionHandler(AccountLockedException.class)
    public ResponseEntity<Object> handleAccountLockedException(AccountLockedException exception) {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(LOCKED);
        response.setMessage(exception.getReason());
        return buildResponseEntity(response);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Object> handleHttpMessageNotReadable() {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(BAD_REQUEST);
        response.setMessage("Malformed JSON request");
        return buildResponseEntity(response);
    }

    @ExceptionHandler(MailSendException.class)
    public ResponseEntity<Object> handleUnknownHostException(MailSendException exception) {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(INTERNAL_SERVER_ERROR);
        response.setMessage("An internal server error has occurred when trying to send the mail. " + exception.getFailedMessages());
        return buildResponseEntity(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAnyException(Exception exception) {
        ErrorResponse error = new ErrorResponse();
        error.setStatus(INTERNAL_SERVER_ERROR);
        error.setMessage("An internal server error has occurred." + exception.getMessage());
        return buildResponseEntity(error);
    }

    private ResponseEntity<Object> buildResponseEntity(ErrorResponse response) {
        return new ResponseEntity<>(response, response.getStatus());
    }
}
