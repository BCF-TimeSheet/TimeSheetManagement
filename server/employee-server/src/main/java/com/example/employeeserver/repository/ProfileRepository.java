package com.example.employeeserver.repository;

import com.example.employeeserver.entity.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<UserProfile, Integer> {
    UserProfile findByUserProfileId(Integer Id);
}