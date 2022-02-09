package com.example.employeeserver.repository;

import com.example.employeeserver.entity.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepository extends JpaRepository<UserProfile, Integer> {
        UserProfile findByUserProfileId(Integer Id);
}
