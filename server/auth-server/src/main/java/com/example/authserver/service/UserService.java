package com.example.authserver.service;

import com.example.authserver.domain.TimeSheetUserDetails;
import com.example.authserver.domain.User;
import com.example.authserver.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("In UserService--loadUserByUsername");
        User user = userRepository.findByUsername(username);
        log.info("user: " + user.toString() );
        if (user == null){
            throw new UsernameNotFoundException("User not found!");
        }
        return new TimeSheetUserDetails(user);
    }

    public List<User> getAllUsers(){
        log.info("---In AuthServer-UserService-getAllUsers");
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public int getUserIdByUsername(String username){
        log.info("---In AuthServer-UserService-getUserIdByUsername");
        User user = userRepository.findByUsername(username);
        return user.getId();
    }

    public User getUserByUsername(String username){
        log.info("---In AuthServer-UserService-getUserByUsername");
        User user = userRepository.findByUsername(username);
        return user;
    }

    public User checkLogin(String username,String password){
        log.info("---In AuthServer-UserService-checkLogin credentials");
        User user = userRepository.findByUsername(username);
        if(user == null)
            return null;
        if(user.getPassword().equals(password))
            return user;
        else
            return null;
    }
}
