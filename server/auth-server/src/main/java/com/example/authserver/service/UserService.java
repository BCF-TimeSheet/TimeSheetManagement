package com.example.authserver.service;

import com.example.authserver.domain.User;
import com.example.authserver.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        log.info("---In AuthServer-UserService-getAllUsers");
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public User checkLogin(String username,String password){
        log.info("---In AuthServer-UserService-checkLogin");
        User user = userRepository.findByUsername(username);
        if(user == null)
            return null;
        if(user.getPassword().equals(password))
            return user;
        else
            return null;
    }
}
