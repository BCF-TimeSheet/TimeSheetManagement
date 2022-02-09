package com.example.employeeserver.service;

import com.example.employeeserver.entity.UserProfile;
import com.example.employeeserver.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

//    @Autowired
//    public ProfileService(ProfileRepository profileRepository) {
//        this.profileRepository = profileRepository;
//    }

    public UserProfile fetchProfile(Integer Id) {
        return profileRepository.findByUserProfileId(Id);
    }

    public void putProfile(Integer Id, UserProfile profile) {
        profileRepository.save(profile);
    }
}
