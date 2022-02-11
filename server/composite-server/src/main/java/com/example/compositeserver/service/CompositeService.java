package com.example.compositeserver.service;

import com.example.compositeserver.domain.CompositeDomain;
import com.example.compositeserver.domain.EmployeeDomain;
import com.example.compositeserver.domain.TimesheetDomain;
import com.example.compositeserver.feignclient.EmployeeClient;
import com.example.compositeserver.feignclient.TimesheetClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@EnableFeignClients
public class CompositeService {
    @Autowired
    private EmployeeClient employeeClient;

    @Autowired
    private TimesheetClient timesheetClient;

    public CompositeDomain getAllInfoByUserId(int id){
        EmployeeDomain em =  employeeClient.fetchProfile(id);
        List<TimesheetDomain> ts = timesheetClient.getTimeSheet();
        return CompositeDomain.builder()
                .cellPhone(em.getCellPhone())
                .addressLine1(em.getAddressLine1())
                .email(em.getEmail())
                .timesheet(ts)
                .build();
    }
}
