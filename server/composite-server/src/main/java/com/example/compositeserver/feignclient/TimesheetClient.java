package com.example.compositeserver.feignclient;

import com.example.compositeserver.domain.TimesheetDomain;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient(name="timesheet-server")
public interface TimesheetClient {
    @GetMapping("/timesheet/getTimeSheet")
    public List<TimesheetDomain> getTimeSheet();
}
