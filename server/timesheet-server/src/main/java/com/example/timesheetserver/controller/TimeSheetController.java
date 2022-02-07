package com.example.timesheetserver.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TimeSheetController {

    @GetMapping("")
    public String test(){
        return "timesheet";
    }
}
