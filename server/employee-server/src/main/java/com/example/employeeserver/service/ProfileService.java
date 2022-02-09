package com.example.employeeserver.service;

import com.example.employeeserver.entity.UserProfile;
import com.example.employeeserver.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public UserProfile fetchProfile(Integer Id) {
        return profileRepository.findByUserProfileId(Id);
    }

    public void putProfile(Integer Id, UserProfile profile) {
        profileRepository.save(profile);
    }
}
