package com.example.employeeserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600,allowCredentials = "true")
@RestController
public class EmployeeController {

    @GetMapping("/")
    public String testMapping(){
        return "Hello";
    }

    @GetMapping("/auth")
    public String hasAuth(){
        return "You got here";
    }
}
