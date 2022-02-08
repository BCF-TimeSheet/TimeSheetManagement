package com.example.timesheetserver.security;

import com.example.timesheetserver.constant.JwtConstant;
import com.example.timesheetserver.exception.InvalidJwtAuthenticationException;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.time.ZonedDateTime;
import java.util.Date;

@Slf4j
public class JwtUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtil.class);

    public static String generateToken(String subject, int validDuration, int id) {
        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);

        JwtBuilder builder = Jwts.builder()
                .setSubject(subject)
                .claim("id",id)
                .setIssuedAt(now)
                .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(validDuration).toInstant()))
                .signWith(SignatureAlgorithm.HS256, JwtConstant.JWT_SIGNING_KEY);

        return builder.compact();
    }



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

    public static String resolveToken(HttpServletRequest req) {
        log.info("---In JwtUltil, resolveToken, reqHeader=" + req.getHeader("Authorization"));
        // get the token from Authorization header
        String bearerToken = req.getHeader("Authorization");

        // validate token is not null and token is a jwt
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            // get the jwt directly
            return bearerToken.substring(7);
        }
        return null;
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
