package com.example.compositeserver.security;

import com.example.compositeserver.config.JwtConstant;
import com.example.compositeserver.exception.InvalidJwtAuthenticationException;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.Date;

public class JwtUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtil.class);



    public static String getSubjectFromJwt(String token) {
        try {
            String subject = Jwts.parser().setSigningKey(JwtConstant.JWT_SIGNING_KEY)
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();

            return subject;
        } catch(SignatureException e) {
            LOGGER.warn("Invalid Jwt Signature");
            return null;
        } catch(ExpiredJwtException e) {
            LOGGER.warn("Expired Jwt");
            return null;
        } catch(Exception e) {
            LOGGER.warn("Exception Parsing Jwt");
            return null;
        }
    }

    public static Integer getUserIdFromJwt(String token){
        try {
            Claims claims = getClaimsFromJwt(token);
            Integer id = Integer.valueOf((Integer) claims.get("id"));
            return id;
        } catch(SignatureException e) {
            LOGGER.warn("Invalid Jwt Signature");
            return null;
        } catch(ExpiredJwtException e) {
            LOGGER.warn("Expired Jwt");
            return null;
        } catch(Exception e) {
            LOGGER.warn("Exception Parsing Jwt");
            return null;
        }
    }

    public static Claims getClaimsFromJwt(String token){
        try {
            Claims claims = Jwts.parser().setSigningKey(JwtConstant.JWT_SIGNING_KEY)
                    .parseClaimsJws(token)
                    .getBody();
            return claims;
        } catch (SignatureException e){
            LOGGER.warn("Invalid Jwt Signature");
            return null;
        } catch (ExpiredJwtException e){
            LOGGER.warn("Expired Jwt");
            return null;
        } catch (Exception e){
            LOGGER.warn("Exception Parsing Jwt");
            return null;
        }
    }
    public static Boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(JwtConstant.JWT_SIGNING_KEY).parseClaimsJws(token);
            // JWT token is not expired
            return !claims.getBody().getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            throw new InvalidJwtAuthenticationException("Expired or invalid JWT token");
        }
    }


}

