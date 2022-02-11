package com.example.compositeserver.controller;

import com.example.compositeserver.service.CompositeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@EnableFeignClients
public class CompositeController {

    @Autowired
    private CompositeService compositeService;

    @GetMapping("/composite/{id}")
    public ResponseEntity<?> getCompositeInfo(@RequestHeader("Authorization") String authorizationToken, @PathVariable int id){
        log.info("---In CompositeController-composite/{jwt}:"+authorizationToken);
        log.info("---In CompositeController-composite/{id}:"+id);
        return ResponseEntity.ok().body(compositeService.getAllInfoByUserId(id));
    }
}
