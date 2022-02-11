package com.example.compositeserver.exception;

import feign.FeignException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GeneralExceptionHandler {
    private Logger LOGGER = LoggerFactory.getLogger(GeneralExceptionHandler.class);

    @ResponseStatus(value= HttpStatus.BAD_REQUEST)
    @ExceptionHandler({FeignException.BadRequest.class})
    public void feignException(HttpServletRequest req, FeignException.BadRequest e) {
        LOGGER.warn(String.format("Bad Request, url: %s, message: %s", req.getRequestURI(), e.getMessage()));
    }
}