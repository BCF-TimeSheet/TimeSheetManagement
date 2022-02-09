package com.example.employeeserver.controller;

import com.example.employeeserver.entity.UserProfile;
import com.example.employeeserver.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600,allowCredentials = "true")
@RestController
public class EmployeeController {
    private ProfileService profileService;

    @Autowired
    public EmployeeController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/{id}")
    public UserProfile fetchProfile(@PathVariable Integer id){
        System.out.println(profileService.fetchProfile(id));
        return profileService.fetchProfile(id);
    }

    @PutMapping("/{id}")
    public String putProfile(@PathVariable Integer id, @RequestBody UserProfile profile) {
        try {
            profileService.putProfile(id, profile);
            return "success";
        } catch(Exception e) {
            return "failure";
        }
    }
}
