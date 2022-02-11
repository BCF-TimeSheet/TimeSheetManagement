package com.example.authserver.repository;

import com.example.authserver.domain.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends CrudRepository<User, Integer>{
    User findByUsername(String username);

}