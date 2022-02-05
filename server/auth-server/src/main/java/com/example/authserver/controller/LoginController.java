package com.example.authserver.controller;

import com.example.authserver.constant.JwtConstant;
import com.example.authserver.domain.User;
import com.example.authserver.security.CookieUtil;
import com.example.authserver.security.JwtUtil;
import com.example.authserver.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletResponse;

@Controller
@Slf4j
public class LoginController {
    @Autowired
    UserService userService;

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
