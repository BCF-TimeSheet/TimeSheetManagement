package com.example.authserver.controller;

import com.example.authserver.constant.JwtConstant;
import com.example.authserver.domain.AuthenticationRequest;
import com.example.authserver.domain.AuthenticationResponse;
import com.example.authserver.domain.User;
import com.example.authserver.security.CookieUtil;
import com.example.authserver.security.JwtUtil;
import com.example.authserver.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@Controller
@Slf4j
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600,allowCredentials = "true")
public class LoginController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/")
    public String loginMy() {
        log.info("---In auth-server /loginMy");
        return "login";
    }

    @GetMapping("/login")
    public String login() {
        log.info("---In auth-server /login");
        return "login";
    }

    @PostMapping("/auth")
    @ResponseBody
    public ResponseEntity<?> createAuth(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try{
            log.info("---In LoginController-auth");
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequest.getUsername(),
                authenticationRequest.getPassword()
        ));
        }catch (BadCredentialsException e){
            log.info("---In Catch block-LoginController-auth\"");
            return ResponseEntity.badRequest().body(new AuthenticationResponse("Wrong username or password!"));
        }
        log.info("---After Catch block-LoginController-auth\"");
        UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());
        String jwt = JwtUtil.generateToken(authenticationRequest.getUsername(), JwtConstant.JWT_VALID_DURATION, userService.getUserIdByUsername(authenticationRequest.getUsername()));
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @PostMapping("/login")
    public String login(@RequestParam("redirect") String redirect, HttpServletResponse res,
                              @ModelAttribute("User") User user, Model model) {

        String username = user.getUsername();
        String password = user.getPassword();
        User userLogin = userService.checkLogin(username, password);
        if (userLogin == null) {
            model.addAttribute("credentialError", "Invalid username or password");
            return "login.html";
        }
        String jwt = JwtUtil.generateToken(username, JwtConstant.JWT_VALID_DURATION, user.getId());
        CookieUtil.create(res, JwtConstant.JWT_COOKIE_NAME, jwt, false, -1, "localhost");

        return "redirect:" + redirect;
    }
}
