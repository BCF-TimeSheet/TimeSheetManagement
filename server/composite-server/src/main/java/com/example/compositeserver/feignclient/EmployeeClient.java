package com.example.compositeserver.feignclient;

import com.example.compositeserver.domain.EmployeeDomain;
import feign.Headers;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(name="employee-server")
public interface EmployeeClient {
    @GetMapping("/employee/{id}")
    public EmployeeDomain fetchProfile(@PathVariable Integer id);
}
