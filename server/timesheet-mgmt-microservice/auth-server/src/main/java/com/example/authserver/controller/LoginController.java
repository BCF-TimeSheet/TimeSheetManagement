package com.example.authserver.controller;

import com.example.authserver.constant.JwtConstant;
import com.example.authserver.domain.User;
import com.example.authserver.security.CookieUtil;
import com.example.authserver.security.JwtUtil;
import com.example.authserver.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;

@Controller
@Slf4j
public class LoginController {
    @Autowired
    UserService userService;

    @GetMapping("/login")
    public String login(@RequestParam("redirect") String redirect, Model model) {
        model.addAttribute("User", new User());
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam("redirect") String redirect, HttpServletResponse res,
                              @ModelAttribute("User") User user, Model model) {

        String username = user.getUsername();
        String password = user.getPassword();
        User userLogin = userService.checkLogin(username, password);
        if (userLogin == null) {
            model.addAttribute("credentialError", "Invalid username or password");
            return "login";
        }
        String jwt = JwtUtil.generateToken(username, JwtConstant.JWT_VALID_DURATION, user.getId());
        CookieUtil.create(res, JwtConstant.JWT_COOKIE_NAME, jwt, false, -1, "localhost");

        return "redirect:" + redirect;
    }
}
